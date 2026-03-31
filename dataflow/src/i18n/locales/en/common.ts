import { zhCommonMessages } from '../zh/common'

type MessageShape<T extends Record<string, unknown>> = {
  [K in keyof T]: string
}

export const enCommonMessages = {
  'common.actions.confirm': 'Confirm',
  'common.actions.cancel': 'Cancel',
  'common.actions.close': 'Close',
  'common.actions.ok': 'OK',
  'common.actions.submit': 'Submit',
  'common.actions.delete': 'Delete',
  'common.actions.retry': 'Retry',
  'common.actions.clearAll': 'Clear All',
  'common.actions.filter': 'Filter',
  'common.actions.startExport': 'Start Export',
  'common.actions.refresh': 'Refresh',
  'common.untitled': 'Untitled',
  'common.search.placeholder': 'Search...',
  'common.status.processing': 'Processing...',
  'common.status.exporting': 'Exporting...',
  'common.status.exportComplete': 'Export complete! File downloaded.',
  'common.alert.error': 'Error',
  'common.alert.success': 'Success',
  'common.alert.info': 'Info',
  'common.alert.dismiss': 'Dismiss alert',
  'common.confirmation.typeToConfirm': 'Type "{value}" to confirm',
  'common.filter.filteredBy': 'Filtered by:',
  'common.pagination.rowsPerPage': 'Rows per page:',
  'common.pagination.page': 'Page',
  'common.pagination.of': 'of',
  'common.pagination.range': 'Showing {startRow} - {endRow} of {total}{label}',
  'common.pagination.firstPage': 'First Page',
  'common.pagination.previousPage': 'Previous Page',
  'common.pagination.nextPage': 'Next Page',
  'common.pagination.lastPage': 'Last Page',
  'common.dataView.items': '{count} items',
  'common.export.format': 'Export Format',
} satisfies MessageShape<typeof zhCommonMessages>
