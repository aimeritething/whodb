import { columnsQuery, copyTableStructureSQL, modifyColumnSQL } from '../ddl-sql'

describe('columnsQuery', () => {
  it('does not request column comments for MySQL introspection', () => {
    const sql = columnsQuery('MYSQL', 'app_db', 'users')

    expect(sql).not.toContain('COLUMN_COMMENT')
  })

  it('does not synthesize column comments for Postgres introspection', () => {
    const sql = columnsQuery('POSTGRES', 'app_db', 'users', 'public')

    expect(sql).not.toContain('column_comment')
  })
})

describe('modifyColumnSQL', () => {
  it('keeps Postgres column changes limited to type and nullability statements', () => {
    const sql = modifyColumnSQL('POSTGRES', 'users', 'email', 'VARCHAR(255)', false, 'public')

    expect(sql).toContain('ALTER TABLE "public"."users" ALTER COLUMN "email" TYPE VARCHAR(255)')
    expect(sql).toContain('ALTER TABLE "public"."users" ALTER COLUMN "email" SET NOT NULL')
    expect(sql).not.toContain('PRIMARY KEY')
    expect(sql).not.toContain('COMMENT')
  })
})

describe('copyTableStructureSQL', () => {
  it('keeps Postgres structure-only copies as CREATE TABLE AS SELECT WHERE false', () => {
    const sql = copyTableStructureSQL('POSTGRES', 'users', 'users_copy', 'public')

    expect(sql).toBe('CREATE TABLE "public"."users_copy" AS SELECT * FROM "public"."users" WHERE false')
  })
})
