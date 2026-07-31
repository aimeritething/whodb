package router

import (
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"

	"github.com/clidey/whodb/core/src/analytics"
)

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
	if got := strings.TrimSpace(rr.Body.String()); got != `{"service":"dataflow","status":"ok"}` {
		t.Fatalf("unexpected healthz response: %s", got)
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
