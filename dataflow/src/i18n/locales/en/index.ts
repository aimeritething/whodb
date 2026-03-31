import { enCommonMessages } from './common'
import { enLayoutMessages } from './layout'
import { enSidebarMessages } from './sidebar'

export const enMessages = {
  ...enCommonMessages,
  ...enLayoutMessages,
  ...enSidebarMessages,
} as const
