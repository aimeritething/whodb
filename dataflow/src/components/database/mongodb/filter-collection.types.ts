/** Supported MongoDB operators exposed by the flat collection filter builder. */
export type MongoFilterOperator =
  | '$eq'
  | '$ne'
  | '$regex'
  | '$gt'
  | '$lt'
  | '$gte'
  | '$lte'
  | '$in'

/** Single editable condition in the filter modal draft state. */
export interface FilterConditionDraft {
  id: string
  field: string
  operator: MongoFilterOperator
  value: string
}

/** Flat MongoDB filter object emitted by the modal. No nested `$and`/`$or` groups. */
export type FlatMongoFilter = Record<string, unknown>
