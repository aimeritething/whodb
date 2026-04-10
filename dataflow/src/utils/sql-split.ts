/**
 * Splits a Redis input into individual commands on newlines.
 * Each non-empty, trimmed line becomes one command.
 */
export function splitRedisCommands(input: string): string[] {
  return input.split('\n').map((line) => line.trim()).filter(Boolean);
}

/** Set of keywords (uppercase) that start a transaction block. */
const TRANSACTION_START = new Set([
  'BEGIN', 'BEGIN WORK', 'BEGIN TRANSACTION', 'START TRANSACTION',
]);

/** Set of keywords (uppercase) that end a transaction block. */
const TRANSACTION_END = new Set([
  'COMMIT', 'COMMIT WORK', 'COMMIT TRANSACTION',
  'ROLLBACK', 'ROLLBACK WORK', 'ROLLBACK TRANSACTION',
  'END', 'END WORK', 'END TRANSACTION',
  'ABORT', 'ABORT WORK', 'ABORT TRANSACTION',
]);

/**
 * Splits a SQL string into individual statements on semicolons,
 * respecting single-quoted strings, double-quoted identifiers,
 * backtick-quoted identifiers (MySQL), single-line comments (--),
 * and block comments.
 *
 * Returns trimmed, non-empty statements (no trailing semicolons).
 */
export function splitSQLStatements(sql: string): string[] {
  const statements: string[] = [];
  let current = '';
  let i = 0;
  let inTransaction = false;
  let transactionBlock = '';

  while (i < sql.length) {
    const ch = sql[i];

    // Single-line comment: skip to end of line
    if (ch === '-' && sql[i + 1] === '-') {
      const end = sql.indexOf('\n', i);
      if (end === -1) {
        current += sql.slice(i);
        break;
      }
      current += sql.slice(i, end);
      i = end;
      continue;
    }

    // Block comment: skip to closing */
    if (ch === '/' && sql[i + 1] === '*') {
      const end = sql.indexOf('*/', i + 2);
      if (end === -1) {
        current += sql.slice(i);
        break;
      }
      current += sql.slice(i, end + 2);
      i = end + 2;
      continue;
    }

    // Quoted string or identifier: consume until matching close quote
    if (ch === "'" || ch === '"' || ch === '`') {
      const quote = ch;
      current += ch;
      i++;
      while (i < sql.length) {
        const c = sql[i];
        if (c === '\\') {
          // Backslash escape (MySQL style)
          current += sql.slice(i, i + 2);
          i += 2;
          continue;
        }
        if (c === quote) {
          current += c;
          i++;
          // Doubled quote escape (SQL standard)
          if (i < sql.length && sql[i] === quote) {
            current += sql[i];
            i++;
            continue;
          }
          break;
        }
        current += c;
        i++;
      }
      continue;
    }

    // Semicolon delimiter: flush current statement
    if (ch === ';') {
      const trimmed = current.trim();
      current = '';
      i++;

      if (!trimmed) continue;

      if (inTransaction) {
        transactionBlock += trimmed + ';\n';
        if (TRANSACTION_END.has(trimmed.toUpperCase())) {
          statements.push(transactionBlock.trim());
          transactionBlock = '';
          inTransaction = false;
        }
      } else if (TRANSACTION_START.has(trimmed.toUpperCase())) {
        inTransaction = true;
        transactionBlock = trimmed + ';\n';
      } else {
        statements.push(trimmed);
      }
      continue;
    }

    current += ch;
    i++;
  }

  const trimmed = current.trim();
  if (trimmed) {
    if (inTransaction) {
      transactionBlock += trimmed;
      statements.push(transactionBlock.trim());
    } else {
      statements.push(trimmed);
    }
  } else if (inTransaction && transactionBlock.trim()) {
    statements.push(transactionBlock.trim());
  }

  return statements;
}
