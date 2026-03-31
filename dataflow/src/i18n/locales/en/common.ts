import { zhCommonMessages } from '../zh/common'

type MessageShape<T extends Record<string, unknown>> = {
  [K in keyof T]: string
}

export const enCommonMessages = {
  'common.actions.confirm': 'Confirm',
  'common.actions.cancel': 'Cancel',
  'common.actions.close': 'Close',
  'common.actions.refresh': 'Refresh',
  'common.untitled': 'Untitled',
  'common.status.processing': 'Processing...',
  'common.alert.error': 'Error',
  'common.alert.success': 'Success',
  'common.alert.info': 'Info',
  'common.confirmation.typeToConfirm': 'Type "{value}" to confirm',
} satisfies MessageShape<typeof zhCommonMessages>
