import { enCommonMessages } from './common'
import { enLayoutMessages } from './layout'
import { enMongodbMessages } from './mongodb'
import { enSqlMessages } from './sql'
import { enSidebarMessages } from './sidebar'

export const enMessages = {
  ...enCommonMessages,
  ...enLayoutMessages,
  ...enMongodbMessages,
  ...enSqlMessages,
  ...enSidebarMessages,
} as const
