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

package gorm_plugin

import "testing"

func TestIsMultiStatement(t *testing.T) {
	tests := []struct {
		name  string
		query string
		want  bool
	}{
		{"single statement no semicolon", "SELECT 1", false},
		{"single statement trailing semicolon", "SELECT 1;", false},
		{"two statements", "SELECT 1; SELECT 2;", true},
		{"transaction block", "BEGIN; SELECT 1; COMMIT;", true},
		{"semicolon inside single-quoted string", "SELECT ';' FROM t;", false},
		{"semicolon inside double-quoted identifier", `SELECT "col;name" FROM t;`, false},
		{"semicolon inside line comment", "SELECT 1 -- comment; more\n;", false},
		{"semicolon inside block comment", "SELECT 1 /* ; */ ;", false},
		{"leading header comment", "-- header\nSELECT 1;", false},
		{"empty string", "", false},
		{"trailing comment after semicolon", "SELECT 1; -- trailing comment\n", false},
		{"multiline transaction with comments", "-- setup\nBEGIN;\nCREATE TABLE t (id int);\nINSERT INTO t VALUES (1);\nCOMMIT;", true},
		{"escaped quote inside string", "SELECT 'it''s'; SELECT 2;", true},
	}
	for _, tc := range tests {
		t.Run(tc.name, func(t *testing.T) {
			if got := IsMultiStatement(tc.query); got != tc.want {
				t.Fatalf("IsMultiStatement(%q) = %v, want %v", tc.query, got, tc.want)
			}
		})
	}
}
