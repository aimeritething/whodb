/**
 * Auth header utilities for WhoDB Core API.
 *
 * All requests to Core carry credentials in the Authorization header as a
 * Base64-encoded JSON payload. Headers are used instead of cookies because
 * SSL certificates in Advanced fields can exceed the 4KB cookie limit.
 *
 * Reference: frontend/src/utils/auth-headers.ts
 */

import { getAuth } from './auth-store';

/**
 * Builds the Authorization header value for the current session.
 * Returns null if no auth credentials are set.
 */
export function getAuthorizationHeader(): string | null {
  const auth = getAuth();
  if (!auth) return null;

  const tokenPayload = auth.kind === 'profile'
    ? { Id: auth.profile.Id, Database: auth.profile.Database }
    : {
        Id: auth.credentials.Id,
        Type: auth.credentials.Type,
        Hostname: auth.credentials.Hostname,
        Username: auth.credentials.Username,
        Password: auth.credentials.Password,
        Database: auth.credentials.Database,
        Advanced: auth.credentials.Advanced ?? [],
        IsProfile: false,
      };

  // JSON → UTF-8 → Base64 (same encoding as frontend/src/utils/auth-headers.ts)
  const jsonString = JSON.stringify(tokenPayload);
  const utf8Bytes = encodeURIComponent(jsonString).replace(
    /%([0-9A-F]{2})/g,
    (_, p1) => String.fromCharCode(parseInt(p1, 16)),
  );
  return `Bearer ${btoa(utf8Bytes)}`;
}

/**
 * Merges the Authorization header into an existing headers object.
 */
export function addAuthHeader(headers: Record<string, string> = {}): Record<string, string> {
  const authHeader = getAuthorizationHeader();
  if (authHeader) {
    return { ...headers, Authorization: authHeader };
  }
  return headers;
}
