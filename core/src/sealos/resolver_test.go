package sealos

import (
	"context"
	"testing"

	corev1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/client-go/kubernetes/fake"
)

func TestNormalizeNamespaceMatchesDbproviderFallback(t *testing.T) {
	t.Run("prefer explicit context namespace", func(t *testing.T) {
		namespace, err := NamespaceFromKubeconfig(testKubeconfig("workspace-a"))
		if err != nil {
			t.Fatalf("namespace from kubeconfig: %v", err)
		}
		if namespace != "workspace-a" {
			t.Fatalf("expected explicit namespace, got %q", namespace)
		}
	})

	t.Run("fallback to ns-user", func(t *testing.T) {
		namespace, err := NamespaceFromKubeconfig(testKubeconfig(""))
		if err != nil {
			t.Fatalf("namespace from kubeconfig: %v", err)
		}
		if namespace != "ns-demo-user" {
			t.Fatalf("expected dbprovider-compatible fallback, got %q", namespace)
		}
	})
}

func TestNormalizeSecretHostMatchesDbprovider(t *testing.T) {
	if got := NormalizeSecretHost("db-host", "workspace-a"); got != "db-host.workspace-a.svc" {
		t.Fatalf("expected namespace svc host, got %q", got)
	}
	if got := NormalizeSecretHost("db-host.workspace-a.svc", "workspace-a"); got != "db-host.workspace-a.svc" {
		t.Fatalf("expected .svc host to remain unchanged, got %q", got)
	}
	if got := NormalizeSecretHost("db-host.workspace-a.svc.cluster.local", "workspace-a"); got != "db-host.workspace-a.svc.cluster.local" {
		t.Fatalf("expected cluster-local host to remain unchanged, got %q", got)
	}
}

func TestSecretNameMatchesDbproviderConvention(t *testing.T) {
	if got := SecretName("my-db"); got != "my-db-conn-credential" {
		t.Fatalf("expected dbprovider secret naming, got %q", got)
	}
}

func TestNormalizeCredentialsAllowsClickHouseDefaults(t *testing.T) {
	spec := dbTypeSpecs["clickhouse"]

	normalized, err := normalizeResolvedCredentials(spec, "", "", "clickhouse.ns.svc", "8123")
	if err != nil {
		t.Fatalf("expected clickhouse credentials to allow empty auth, got %v", err)
	}
	if normalized.username != "default" {
		t.Fatalf("expected clickhouse username to default to 'default', got %q", normalized.username)
	}
	if normalized.password != "" {
		t.Fatalf("expected clickhouse password to remain empty, got %q", normalized.password)
	}
}

func TestResolveBootstrapForRedisUsesAccountSecretAndService(t *testing.T) {
	clientset := fake.NewSimpleClientset(
		&corev1.Secret{
			ObjectMeta: metav1.ObjectMeta{
				Name:      "test-stacks-redis-account-default",
				Namespace: "ns-admin",
			},
			Data: map[string][]byte{
				"username": []byte("default"),
				"password": []byte("redis-password"),
			},
		},
		&corev1.Service{
			ObjectMeta: metav1.ObjectMeta{
				Name:      "test-stacks-redis-redis",
				Namespace: "ns-admin",
				Labels: map[string]string{
					"app.kubernetes.io/instance": "test-stacks",
				},
			},
			Spec: corev1.ServiceSpec{
				ClusterIP: "10.0.0.1",
				Ports: []corev1.ServicePort{
					{Name: "redis", Port: 6379},
				},
			},
		},
	)

	resolver := &resolver{
		kubeconfig: testKubeconfig("ns-admin"),
		clientset:  clientset,
	}

	result, err := resolver.ResolveBootstrap(context.Background(), BootstrapInput{
		DBType:       "redis",
		ResourceName: "test-stacks",
	})
	if err != nil {
		t.Fatalf("expected redis bootstrap to succeed, got %v", err)
	}
	if result.Host != "test-stacks-redis-redis.ns-admin.svc" || result.Port != "6379" {
		t.Fatalf("expected redis host/port from service, got %q:%q", result.Host, result.Port)
	}
	if result.Credentials.Username != "default" || result.Credentials.Password != "redis-password" {
		t.Fatalf("expected redis credentials from account secret, got %#v", result.Credentials)
	}
}

func TestResolveBootstrapForClickHouseUsesAdminPasswordAndTcpEndpoint(t *testing.T) {
	clientset := fake.NewSimpleClientset(
		&corev1.Secret{
			ObjectMeta: metav1.ObjectMeta{
				Name:      "test-house-conn-credential",
				Namespace: "ns-admin",
			},
			Data: map[string][]byte{
				"username":       []byte("admin"),
				"admin-password": []byte("house-password"),
				"tcpEndpoint":    []byte("test-house-clickhouse:9000"),
			},
		},
	)

	resolver := &resolver{
		kubeconfig: testKubeconfig("ns-admin"),
		clientset:  clientset,
	}

	result, err := resolver.ResolveBootstrap(context.Background(), BootstrapInput{
		DBType:       "clickhouse",
		ResourceName: "test-house",
	})
	if err != nil {
		t.Fatalf("expected clickhouse bootstrap to succeed, got %v", err)
	}
	if result.Host != "test-house-clickhouse.ns-admin.svc" || result.Port != "9000" {
		t.Fatalf("expected clickhouse tcp endpoint to be normalized, got %q:%q", result.Host, result.Port)
	}
	if result.Credentials.Username != "admin" || result.Credentials.Password != "house-password" {
		t.Fatalf("expected clickhouse auth from secret, got %#v", result.Credentials)
	}
}

func testKubeconfig(namespace string) string {
	if namespace == "" {
		return `apiVersion: v1
kind: Config
clusters:
- name: demo-cluster
  cluster:
    server: https://example.invalid
users:
- name: demo-user
  user:
    token: test
contexts:
- name: demo-user@demo-cluster
  context:
    cluster: demo-cluster
    user: demo-user
current-context: demo-user@demo-cluster
`
	}

	return `apiVersion: v1
kind: Config
clusters:
- name: demo-cluster
  cluster:
    server: https://example.invalid
users:
- name: demo-user
  user:
    token: test
contexts:
- name: demo-user@demo-cluster
  context:
    cluster: demo-cluster
    user: demo-user
    namespace: ` + namespace + `
current-context: demo-user@demo-cluster
`
}
