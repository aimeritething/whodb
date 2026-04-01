import { describe, expect, it } from 'vitest'
import {
  buildPreviewSql,
  summarizeChanges,
} from './changeset-sql-preview'
import type { ChangesetRowKey, RowChange } from './types'

describe('summarizeChanges', () => {
  it('counts updates, inserts, and deletes', () => {
    const changes = new Map<ChangesetRowKey, RowChange>([
      ['existing-0', { type: 'update', originalRow: { id: '1' }, cells: { name: { old: 'alice', new: 'bob' } }, values: { id: '1', name: 'bob' } }],
      ['new-1', { type: 'insert', originalRow: {}, cells: {}, values: { id: '2' } }],
      ['existing-1', { type: 'delete', originalRow: { id: '3' }, cells: {}, values: { id: '3' } }],
    ])

    expect(summarizeChanges(changes)).toEqual({
      updates: 1,
      inserts: 1,
      deletes: 1,
    })
  })
})

describe('buildPreviewSql', () => {
  it('renders update, insert, and delete statements in map order', () => {
    const changes = new Map<ChangesetRowKey, RowChange>([
      ['existing-0', { type: 'update', originalRow: { id: '1', name: 'alice' }, cells: { name: { old: 'alice', new: 'bob' } }, values: { id: '1', name: 'bob' } }],
      ['new-1', { type: 'insert', originalRow: {}, cells: {}, values: { id: '2', name: 'carol' } }],
      ['existing-1', { type: 'delete', originalRow: { id: '3', name: 'dave' }, cells: {}, values: { id: '3', name: 'dave' } }],
    ])

    expect(buildPreviewSql('users', changes)).toEqual([
      `UPDATE "users" SET "name" = 'bob' WHERE "id" = '1' AND "name" = 'alice';`,
      `INSERT INTO "users" ("id", "name") VALUES ('2', 'carol');`,
      `DELETE FROM "users" WHERE "id" = '3' AND "name" = 'dave';`,
    ])
  })
})
