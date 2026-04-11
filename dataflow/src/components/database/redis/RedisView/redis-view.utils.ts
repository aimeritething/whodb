import type { RecordInput } from '@graphql'
import type { RedisKeyType } from './types'

export function detectRedisKeyType(columns: string[], disableUpdate: boolean): RedisKeyType {
  if (columns.includes('field')) return 'hash'
  if (columns.includes('member')) return 'zset'
  if (columns.includes('index')) return disableUpdate ? 'set' : 'list'
  return 'string'
}

export function isEditableColumn(column: string, keyType: RedisKeyType): boolean {
  if (column === 'index') return false
  if (column === 'field' && keyType === 'hash') return false
  if (column === 'member' && keyType === 'zset') return false
  return true
}

export function isNewRowInputColumn(column: string): boolean {
  return column !== 'index'
}

export function buildAddRowValues(row: Record<string, string>, keyType: RedisKeyType): RecordInput[] {
  switch (keyType) {
    case 'hash':
      return [{ Key: 'field', Value: row.field ?? '' }, { Key: 'value', Value: row.value ?? '' }]
    case 'list':
      return [{ Key: 'value', Value: row.value ?? '' }]
    case 'set':
      return [{ Key: 'value', Value: row.value ?? '' }]
    case 'zset':
      return [{ Key: 'member', Value: row.member ?? '' }, { Key: 'score', Value: row.score ?? '0' }]
    case 'string':
      return [{ Key: 'value', Value: row.value ?? '' }]
  }
}

export function buildDeleteRowValues(row: Record<string, string>, keyType: RedisKeyType, keyName: string): RecordInput[] {
  switch (keyType) {
    case 'hash':
      return [{ Key: 'field', Value: row.field }]
    case 'list':
      return [{ Key: 'index', Value: row.index }]
    case 'set':
      return [{ Key: 'member', Value: row.value }]
    case 'zset':
      return [{ Key: 'member', Value: row.member }]
    case 'string':
      return [{ Key: 'key', Value: keyName }]
  }
}

export function buildRedisQuery(keyType: RedisKeyType, keyName: string): string {
  switch (keyType) {
    case 'hash':
      return `HGETALL ${keyName}`
    case 'list':
      return `LRANGE ${keyName} 0 -1`
    case 'set':
      return `SMEMBERS ${keyName}`
    case 'zset':
      return `ZRANGE ${keyName} 0 -1 WITHSCORES`
    case 'string':
      return `GET ${keyName}`
  }
}
