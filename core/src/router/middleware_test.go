package router

import (
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"

	"github.com/clidey/whodb/core/src/analytics"
)

func setValidRuntimeHealthConfig(t *testing.T) {
	t.Helper()
	t.Setenv("PORT", "")
	t.Setenv("WHODB_METADATA_DSN", "host=metadata.local user=dataflow password=metadata-secret dbname=dataflow")
	t.Setenv("WHODB_SESSION_DSN", "")
	t.Setenv("WHODB_SESSION_ENCRYPTION_KEY", "12345678901234567890123456789012")
	t.Setenv("WHODB_SESSION_TTL", "24h")
	t.Setenv("WHODB_SEALOS_BOOTSTRAP_ENABLED", "")
	t.Setenv("WHODB_STANDALONE_LOGIN_ENABLED", "")
	t.Setenv("WHODB_ENABLE_AWS_PROVIDER", "")
	t.Setenv("WHODB_AWS_PROVIDER", "")
}

func decodeHealthResponse(t *testing.T, body string) healthResponse {
	t.Helper()
	var response healthResponse
	if err := json.Unmarshal([]byte(body), &response); err != nil {
		t.Fatalf("failed to decode health response: %v; body=%s", err, body)
	}
	return response
}

func assertHealthIssue(t *testing.T, response healthResponse, name string) {
	t.Helper()
	for _, issue := range response.Checks {
		if issue.Name == name {
			return
		}
	}
	t.Fatalf("expected health issue %s, got %+v", name, response.Checks)
}

func TestContextMiddlewareAddsMetadata(t *testing.T) {
	req := httptest.NewRequest(http.MethodGet, "http://api.local/data", nil)
	req.Host = "api.local:8080"
	req.Header.Set("User-Agent", "tester")
	req.Header.Set("X-Whodb-Analytics-Id", "user-123")
	req.Header.Set("X-Request-Id", "req-1")

	rr := httptest.NewRecorder()
	var captured analytics.Metadata

	handler := contextMiddleware(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		captured = analytics.MetadataFromContext(r.Context())
		w.WriteHeader(http.StatusOK)
	}))

	handler.ServeHTTP(rr, req)

	if rr.Code != http.StatusOK {
		t.Fatalf("expected middleware to allow request, got status %d", rr.Code)
	}

	if captured.Domain != "api.local" {
		t.Fatalf("expected domain to be derived from host, got %s", captured.Domain)
	}
	if captured.DistinctID != "user-123" {
		t.Fatalf("expected distinct id to be captured from header, got %s", captured.DistinctID)
	}
	if captured.RequestID != "req-1" {
		t.Fatalf("expected request id to be captured from header, got %s", captured.RequestID)
	}
}

func TestHealthCheckMiddlewareHandlesHealthz(t *testing.T) {
	setValidRuntimeHealthConfig(t)

	handler := healthCheckMiddleware(http.HandlerFunc(func(w http.ResponseWriter, _ *http.Request) {
		w.WriteHeader(http.StatusTeapot)
	}))

	rr := httptest.NewRecorder()
	req := httptest.NewRequest(http.MethodGet, "http://api.local/healthz", nil)

	handler.ServeHTTP(rr, req)

	if rr.Code != http.StatusOK {
		t.Fatalf("expected status %d, got %d", http.StatusOK, rr.Code)
	}
	if got := rr.Header().Get("Cache-Control"); got != "no-store" {
		t.Fatalf("expected Cache-Control no-store, got %q", got)
	}
	if got := rr.Header().Get("Content-Type"); got != "application/json" {
		t.Fatalf("expected Content-Type application/json, got %q", got)
	}
	response := decodeHealthResponse(t, rr.Body.String())
	if response.Service != "dataflow" || response.Status != "ok" {
		t.Fatalf("unexpected healthz response: %+v", response)
	}
	if len(response.Checks) != 0 {
		t.Fatalf("expected no checks on healthy response, got %+v", response.Checks)
	}
}

func TestHealthCheckMiddlewareReportsInvalidRuntimeConfig(t *testing.T) {
	tests := []struct {
		name      string
		mutate    func(t *testing.T)
		wantIssue string
		forbidden string
	}{
		{
			name: "missing metadata dsn",
			mutate: func(t *testing.T) {
				t.Setenv("WHODB_METADATA_DSN", "")
			},
			wantIssue: "WHODB_METADATA_DSN",
			forbidden: "metadata-secret",
		},
		{
			name: "missing session source",
			mutate: func(t *testing.T) {
				t.Setenv("WHODB_METADATA_DSN", "")
				t.Setenv("WHODB_SESSION_DSN", "")
			},
			wantIssue: "WHODB_SESSION_DSN",
			forbidden: "metadata-secret",
		},
		{
			name: "invalid session encryption key",
			mutate: func(t *testing.T) {
				t.Setenv("WHODB_SESSION_ENCRYPTION_KEY", "short-secret")
			},
			wantIssue: "WHODB_SESSION_ENCRYPTION_KEY",
			forbidden: "short-secret",
		},
		{
			name: "invalid session ttl",
			mutate: func(t *testing.T) {
				t.Setenv("WHODB_SESSION_TTL", "soon")
			},
			wantIssue: "WHODB_SESSION_TTL",
			forbidden: "soon",
		},
		{
			name: "invalid port",
			mutate: func(t *testing.T) {
				t.Setenv("PORT", "99999")
			},
			wantIssue: "PORT",
			forbidden: "99999",
		},
		{
			name: "invalid boolean",
			mutate: func(t *testing.T) {
				t.Setenv("WHODB_SEALOS_BOOTSTRAP_ENABLED", "yes")
			},
			wantIssue: "WHODB_SEALOS_BOOTSTRAP_ENABLED",
			forbidden: "yes",
		},
		{
			name: "invalid aws provider json",
			mutate: func(t *testing.T) {
				t.Setenv("WHODB_ENABLE_AWS_PROVIDER", "true")
				t.Setenv("WHODB_AWS_PROVIDER", `{"region":"us-west-2"}`)
			},
			wantIssue: "WHODB_AWS_PROVIDER",
			forbidden: "us-west-2",
		},
		{
			name: "aws provider missing region",
			mutate: func(t *testing.T) {
				t.Setenv("WHODB_ENABLE_AWS_PROVIDER", "true")
				t.Setenv("WHODB_AWS_PROVIDER", `[{"name":"prod"}]`)
			},
			wantIssue: "WHODB_AWS_PROVIDER",
			forbidden: "prod",
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			setValidRuntimeHealthConfig(t)
			tt.mutate(t)

			handler := healthCheckMiddleware(http.HandlerFunc(func(w http.ResponseWriter, _ *http.Request) {
				w.WriteHeader(http.StatusTeapot)
			}))

			rr := httptest.NewRecorder()
			req := httptest.NewRequest(http.MethodGet, "http://api.local/healthz", nil)

			handler.ServeHTTP(rr, req)

			if rr.Code != http.StatusServiceUnavailable {
				t.Fatalf("expected status %d, got %d with body %s", http.StatusServiceUnavailable, rr.Code, rr.Body.String())
			}
			response := decodeHealthResponse(t, rr.Body.String())
			if response.Service != "dataflow" || response.Status != "error" {
				t.Fatalf("unexpected healthz response: %+v", response)
			}
			assertHealthIssue(t, response, tt.wantIssue)
			if strings.Contains(rr.Body.String(), tt.forbidden) {
				t.Fatalf("health response leaked configured value %q: %s", tt.forbidden, rr.Body.String())
			}
		})
	}
}

func TestHealthCheckMiddlewareDoesNotHandleHealth(t *testing.T) {
	handler := healthCheckMiddleware(http.HandlerFunc(func(w http.ResponseWriter, _ *http.Request) {
		w.WriteHeader(http.StatusTeapot)
		w.Write([]byte("next"))
	}))

	rr := httptest.NewRecorder()
	req := httptest.NewRequest(http.MethodGet, "http://api.local/health", nil)

	handler.ServeHTTP(rr, req)

	if rr.Code != http.StatusTeapot {
		t.Fatalf("expected request to continue to next handler, got status %d", rr.Code)
	}
	if got := rr.Header().Get("Cache-Control"); got != "" {
		t.Fatalf("expected Cache-Control to be unset, got %q", got)
	}
	if got := strings.TrimSpace(rr.Body.String()); got != "next" {
		t.Fatalf("expected next handler response, got %s", got)
	}
}
