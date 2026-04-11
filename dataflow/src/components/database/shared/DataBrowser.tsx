import type { ReactNode } from 'react'
import { DataViewError } from './DataView.Error'
import { DataViewLoading } from './DataView.Loading'
import { DataViewPagination } from './DataView.Pagination'
import { cn } from '@/lib/utils'

function DataBrowserFrame({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn('flex h-full flex-col', className)}>{children}</div>
}

function DataBrowserMain({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn('flex flex-1 flex-col', className)}>{children}</div>
}

export const DataBrowser = {
  Frame: DataBrowserFrame,
  Main: DataBrowserMain,
  Loading: DataViewLoading,
  Error: DataViewError,
  Pagination: DataViewPagination,
}
