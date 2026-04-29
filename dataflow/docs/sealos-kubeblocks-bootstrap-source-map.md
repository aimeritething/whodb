# Sealos KubeBlocks Bootstrap Source Map

**Date**: 2026-04-16  
**Purpose**: Record the real Kubernetes Secret and Service sources used for WhoDB Sealos bootstrap per database type.

## Summary

KubeBlocks does not expose one uniform bootstrap shape across all database types.

WhoDB bootstrap must not assume every database uses:

1. secret name: `<resourceName>-conn-credential`
2. secret fields: `username`, `password`, `host`, `port`

That assumption works for some database types, but it is incorrect for Redis, ClickHouse, and current user MongoDB clusters on the observed Sealos clusters.

## PostgreSQL / MySQL

These types continue to use the simple `conn-credential` pattern:

1. Secret name: `<resourceName>-conn-credential`
2. Expected fields:
   - `username`
   - `password`
   - `host`
   - `port`
3. Host normalization:
   - if `host` already contains `.svc`, use it as-is
   - otherwise append `.<namespace>.svc`

## MongoDB

MongoDB has two observed bootstrap shapes.

Legacy/system MongoDB resources can use the simple `conn-credential` pattern:

1. Secret name: `<resourceName>-conn-credential`
2. Expected fields:
   - `username`
   - `password`
   - `host`
   - `port`

Current user MongoDB resources do **not** expose `<resourceName>-conn-credential`.

For a MongoDB resource `test-db` in namespace `ns-f94dz1z8`, the observed Kubernetes objects are:

1. Account Secret:
   - `test-db-mongodb-account-root`
2. Services:
   - `test-db-mongodb`
   - `test-db-mongodb-mongodb`
   - `test-db-mongodb-mongodb-ro`

Observed account Secret fields:

1. `username`
2. `password`

Observed missing fields:

1. `host`
2. `port`

MongoDB bootstrap mapping for WhoDB:

1. first try legacy `<resourceName>-conn-credential`
2. if that Secret is not found, read username/password from `<resourceName>-mongodb-account-root`
3. host/port:
   - resolve from the ClusterIP service for the same resource that exposes port `27017`
   - prefer the service labeled `kubeblocks.io/role=primary`
4. normalized host:
   - `<service-name>.<namespace>.svc`
5. database:
   - default to `admin` when not explicitly provided

## Redis

Redis does **not** use `<resourceName>-conn-credential` for bootstrap auth in the observed Sealos cluster.

For a Redis resource `test-stacks` in namespace `ns-admin`, the observed Kubernetes objects are:

1. Cluster name:
   - `test-stacks`
2. Account Secret:
   - `test-stacks-redis-account-default`
3. Service:
   - `test-stacks-redis-redis`

Observed account Secret fields:

1. `username`
2. `password`

Observed missing fields:

1. `host`
2. `port`

Redis bootstrap mapping for WhoDB:

1. username/password:
   - read from `<resourceName>-redis-account-default`
2. host/port:
   - resolve from the ClusterIP service for the same resource that exposes port `6379`
3. normalized host:
   - `<service-name>.<namespace>.svc`
4. database:
   - optional Redis DB index; default empty string unless explicitly provided

## ClickHouse

ClickHouse uses `<resourceName>-conn-credential`, but its fields do **not** match the generic SQL pattern.

For a ClickHouse resource `test-house` in namespace `ns-admin`, the observed Kubernetes objects are:

1. Secret:
   - `test-house-conn-credential`
2. Service:
   - `test-house-clickhouse`

Observed Secret fields:

1. `username`
2. `admin-password`
3. `endpoint`
4. `tcpEndpoint`
5. `mysqlEndpoint`
6. `pgEndpoint`

Observed missing generic fields:

1. `password`
2. `host`
3. `port`

ClickHouse bootstrap mapping for WhoDB:

1. username:
   - read from `username`
2. password:
   - read from `admin-password`
3. host/port:
   - parse from `tcpEndpoint`
   - fallback to the ClickHouse service and native TCP port `9000` if needed
4. normalized host:
   - if the host already contains `.svc`, use it as-is
   - otherwise append `.<namespace>.svc`
5. database:
   - default to `default` when not explicitly provided
6. username fallback:
   - if username is empty, WhoDB should use `default`
7. password:
   - may be empty; do not reject bootstrap only because password is empty

## Implications For WhoDB

WhoDB Sealos bootstrap should use per-database resolution rules:

1. PostgreSQL / MySQL:
   - generic `conn-credential` parsing
2. MongoDB:
   - legacy `conn-credential` parsing when available
   - account Secret + primary service lookup when `conn-credential` is absent
3. Redis:
   - account Secret + service lookup
4. ClickHouse:
   - `conn-credential`, but parse `admin-password` and `tcpEndpoint`

## Implications For dbprovider

`dbprovider` should not prefetch database Secrets before opening WhoDB.

It should only pass bootstrap metadata such as:

1. `resourceName`
2. `dbType`
3. `theme`
4. `lang`

WhoDB is responsible for resolving the real Secret and endpoint details from Sealos session kubeconfig.
