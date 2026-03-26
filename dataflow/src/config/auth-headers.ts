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
 *
 * @param databaseOverride - If provided, overrides the Database field in the
 *   credential payload. This enables per-request database targeting without
 *   mutating global auth state.
 * @returns Header value string, or null if no auth credentials are set.
 */
export function getAuthorizationHeader(databaseOverride?: string): string | null {
  const auth = getAuth();
  if (!auth) return null;

  const tokenPayload = auth.kind === 'profile'
    ? { Id: auth.profile.Id, Database: databaseOverride ?? auth.profile.Database }
    : {
        Id: auth.credentials.Id,
        Type: auth.credentials.Type,
        Hostname: auth.credentials.Hostname,
        Username: auth.credentials.Username,
        Password: auth.credentials.Password,
        Database: databaseOverride ?? auth.credentials.Database,
        Advanced: auth.credentials.Advanced ?? [],
        IsProfile: false,
      };

  const jsonString = JSON.stringify(tokenPayload);
  const utf8Bytes = encodeURIComponent(jsonString).replace(
    /%([0-9A-F]{2})/g,
    (_, p1) => String.fromCharCode(parseInt(p1, 16)),
  );
  return `Bearer ${btoa(utf8Bytes)}`;
}

/**
 * Merges the Authorization header into an existing headers object.
 *
 * @param headers - Existing headers to merge into.
 * @param databaseOverride - If provided, overrides the Database field in the
 *   credential payload for this specific request.
 */
export function addAuthHeader(
  headers: Record<string, string> = {},
  databaseOverride?: string,
): Record<string, string> {
  const authHeader = getAuthorizationHeader(databaseOverride);
  if (authHeader) {
    return { ...headers, Authorization: authHeader };
  }
  return headers;
}
