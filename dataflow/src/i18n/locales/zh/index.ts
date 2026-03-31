import { zhCommonMessages } from './common'
import { zhLayoutMessages } from './layout'
import { zhMongodbMessages } from './mongodb'
import { zhSqlMessages } from './sql'
import { zhSidebarMessages } from './sidebar'

export const zhMessages = {
  ...zhCommonMessages,
  ...zhLayoutMessages,
  ...zhMongodbMessages,
  ...zhSqlMessages,
  ...zhSidebarMessages,
} as const
