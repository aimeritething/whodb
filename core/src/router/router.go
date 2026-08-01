/*
 * Copyright 2026 Clidey, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package router

import (
	"embed"
	"encoding/json"
	"net/http"
	"os"
	"strconv"
	"strings"
	"time"

	"github.com/99designs/gqlgen/graphql/handler/extension"

	"github.com/99designs/gqlgen/graphql"
	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/handler/transport"
	"github.com/clidey/whodb/core/graph"
	"github.com/clidey/whodb/core/src/auth"
	"github.com/clidey/whodb/core/src/env"
	"github.com/clidey/whodb/core/src/log"
	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/go-chi/cors"
)

type OAuthLoginUrl struct {
	Url string `json:"url"`
}

type healthResponse struct {
	Service string             `json:"service"`
	Status  string             `json:"status"`
	Checks  []healthCheckIssue `json:"checks,omitempty"`
}

type healthCheckIssue struct {
	Name   string `json:"name"`
	Reason string `json:"reason"`
}

func NewGraphQLServer(es graphql.ExecutableSchema) *handler.Server {
	srv := handler.New(es)

	srv.AddTransport(&transport.Websocket{
		KeepAlivePingInterval: 10 * time.Second,
	})
	srv.AddTransport(&transport.Options{})
	srv.AddTransport(&transport.GET{})
	srv.AddTransport(&transport.POST{})
	srv.AddTransport(&transport.MultipartForm{})

	srv.Use(extension.FixedComplexityLimit(100))

	if env.IsDevelopment {
		srv.Use(extension.Introspection{})
	}

	return srv
}

func setupServer(router *chi.Mux, staticFiles embed.FS) {
	if !env.IsAPIGatewayEnabled {
		fileServer(router, staticFiles)
	}

	server := createGraphQLServer()
	server.AddTransport(&transport.Websocket{})
	graph.SetupHTTPServer(router)
	setupPlaygroundHandler(router, server)
}

// statusResponseWriter wraps http.ResponseWriter to capture the status code.
type statusResponseWriter struct {
	http.ResponseWriter
	statusCode int
}

func (w *statusResponseWriter) WriteHeader(code int) {
	w.statusCode = code
	w.ResponseWriter.WriteHeader(code)
}

// Flush forwards to the underlying ResponseWriter if it supports flushing (required for SSE streaming).
func (w *statusResponseWriter) Flush() {
	if f, ok := w.ResponseWriter.(http.Flusher); ok {
		f.Flush()
	}
}

// healthCheckMiddleware responds to GET /healthz without requiring authentication.
// Used by probes and E2E setup scripts to verify the server has valid runtime configuration.
func healthCheckMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		if r.Method == http.MethodGet && r.URL.Path == "/healthz" {
			statusCode, response := buildHealthResponse()
			w.Header().Set("Cache-Control", "no-store")
			w.Header().Set("Content-Type", "application/json")
			w.WriteHeader(statusCode)
			json.NewEncoder(w).Encode(response)
			return
		}
		next.ServeHTTP(w, r)
	})
}

func buildHealthResponse() (int, healthResponse) {
	issues := validateRuntimeConfiguration()
	if len(issues) > 0 {
		return http.StatusServiceUnavailable, healthResponse{
			Service: "dataflow",
			Status:  "error",
			Checks:  issues,
		}
	}

	return http.StatusOK, healthResponse{
		Service: "dataflow",
		Status:  "ok",
	}
}

func validateRuntimeConfiguration() []healthCheckIssue {
	var issues []healthCheckIssue

	addIssue := func(name, reason string) {
		issues = append(issues, healthCheckIssue{
			Name:   name,
			Reason: reason,
		})
	}

	if port := strings.TrimSpace(os.Getenv("PORT")); port != "" {
		n, err := strconv.Atoi(port)
		if err != nil || n < 1 || n > 65535 {
			addIssue("PORT", "must_be_valid_port")
		}
	}

	if strings.TrimSpace(os.Getenv("WHODB_METADATA_DSN")) == "" {
		addIssue("WHODB_METADATA_DSN", "required")
	}

	if env.GetSessionDSN() == "" {
		addIssue("WHODB_SESSION_DSN", "required_or_metadata_dsn_fallback")
	}

	if len(env.GetSessionEncryptionKey()) != 32 {
		addIssue("WHODB_SESSION_ENCRYPTION_KEY", "must_be_32_bytes")
	}

	ttl, err := time.ParseDuration(env.GetSessionTTL())
	if err != nil || ttl <= 0 {
		addIssue("WHODB_SESSION_TTL", "must_be_positive_duration")
	}

	validateOptionalBoolean("WHODB_SEALOS_BOOTSTRAP_ENABLED", addIssue)
	validateOptionalBoolean("WHODB_STANDALONE_LOGIN_ENABLED", addIssue)
	validateOptionalBoolean("WHODB_ENABLE_AWS_PROVIDER", addIssue)
	validateAWSProviderConfig(addIssue)

	return issues
}

func validateOptionalBoolean(name string, addIssue func(string, string)) {
	value := strings.TrimSpace(os.Getenv(name))
	if value == "" || value == "true" || value == "false" {
		return
	}
	addIssue(name, "must_be_true_or_false")
}

func validateAWSProviderConfig(addIssue func(string, string)) {
	if strings.TrimSpace(os.Getenv("WHODB_ENABLE_AWS_PROVIDER")) != "true" {
		return
	}

	value := strings.TrimSpace(os.Getenv("WHODB_AWS_PROVIDER"))
	if value == "" {
		return
	}

	var providers []env.AWSProviderEnvConfig
	if err := json.Unmarshal([]byte(value), &providers); err != nil {
		addIssue("WHODB_AWS_PROVIDER", "must_be_json_array")
		return
	}

	for _, provider := range providers {
		if strings.TrimSpace(provider.Region) == "" {
			addIssue("WHODB_AWS_PROVIDER", "region_required")
			return
		}
	}
}

// accessLogMiddleware logs HTTP requests with method, path, status, duration, host, and remote address.
func accessLogMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		start := time.Now()
		sw := &statusResponseWriter{ResponseWriter: w, statusCode: http.StatusOK}
		next.ServeHTTP(sw, r)
		log.LogAccess(r.Method, r.URL.Path, sw.statusCode, time.Since(start), r.Host, r.RemoteAddr)
	})
}

func setupMiddlewares(router *chi.Mux) {
	allowedOrigins := env.AllowedOrigins
	if len(allowedOrigins) == 0 {
		allowedOrigins = append(allowedOrigins, "https://*", "http://*")
	}

	middlewares := []func(http.Handler) http.Handler{
		accessLogMiddleware,
		healthCheckMiddleware,
		middleware.ThrottleBacklog(100, 50, time.Second*5),
		middleware.RequestID,
		middleware.RealIP,
		middleware.RedirectSlashes,
		middleware.Recoverer,
		middleware.Timeout(90 * time.Second), // Increased for LLM inference time
		cors.Handler(cors.Options{
			AllowedOrigins:   allowedOrigins,
			AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
			AllowedHeaders:   []string{"Accept", "Authorization", "Content-Type", "X-CSRF-Token"},
			ExposedHeaders:   []string{},
			AllowCredentials: true,
			MaxAge:           300,
		}),
		contextMiddleware,
		auth.AuthMiddleware,
	}

	router.Use(middlewares...)
}

func InitializeRouter(staticFiles embed.FS) *chi.Mux {
	router := chi.NewRouter()

	setupMiddlewares(router)
	setupServer(router, staticFiles)

	return router
}
