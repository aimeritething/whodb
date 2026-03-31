import { zhCommonMessages } from './common'
import { zhLayoutMessages } from './layout'
import { zhSidebarMessages } from './sidebar'

export const zhMessages = {
  ...zhCommonMessages,
  ...zhLayoutMessages,
  ...zhSidebarMessages,
} as const
