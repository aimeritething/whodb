import { useCallback, useRef, useState, type MouseEvent as ReactMouseEvent, type ReactNode } from 'react'
import { ArrowDownAZ, ArrowUpAZ, MoreHorizontal, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'

export type TabularHighlight = 'current' | 'match' | null

interface ScrollFrameProps {
  children: ReactNode
  className?: string
}

function ScrollFrame({ children, className }: ScrollFrameProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isScrolledX, setIsScrolledX] = useState(false)
  const [isScrolledY, setIsScrolledY] = useState(false)

  const handleScroll = useCallback(() => {
    const element = scrollRef.current
    if (element) {
      setIsScrolledX(element.scrollLeft > 0)
      setIsScrolledY(element.scrollTop > 0)
    }
  }, [])

  return (
    <div
      ref={scrollRef}
      onScroll={handleScroll}
      data-scrolled-x={isScrolledX || undefined}
      data-scrolled-y={isScrolledY || undefined}
      className={cn('flex-1 overflow-auto', className)}
    >
      {children}
    </div>
  )
}

function RowNumberHeaderCell() {
  return (
    <th
      className="sticky top-0 left-0 z-50 border-b border-r border-border/50 bg-background px-2 py-2 text-center text-xs font-semibold text-muted-foreground"
      style={{ width: 64, minWidth: 64, maxWidth: 64 }}
    > </th>
  )
}

interface RowNumberCellProps {
  children: ReactNode
  className?: string
  onClick?: () => void
}

function RowNumberCell({ children, className, onClick }: RowNumberCellProps) {
  return (
    <td
      className={cn(
        'sticky left-0 z-30 border-b border-r border-border/50 bg-background px-2 py-2 text-center',
        className,
      )}
      style={{ width: 64, minWidth: 64, maxWidth: 64 }}
      onClick={onClick}
    >
      {children}
    </td>
  )
}

interface ResizeHandleProps {
  column: string
  isResizing: boolean
  onResizeStart: (event: ReactMouseEvent, column: string) => void
}

function ResizeHandle({ column, isResizing, onResizeStart }: ResizeHandleProps) {
  return (
    <div
      data-resize-col={column}
      className={cn(
        'absolute right-0 top-0 -bottom-px w-1 cursor-col-resize z-20 data-[resize-active]:bg-primary/50',
        isResizing && 'bg-primary/50',
      )}
      onMouseEnter={() => {
        if (isResizing) return
        document.querySelectorAll<HTMLElement>(`[data-resize-col="${column}"]`).forEach((element) => {
          element.dataset.resizeActive = ''
        })
      }}
      onMouseLeave={() => {
        if (isResizing) return
        document.querySelectorAll<HTMLElement>(`[data-resize-col="${column}"]`).forEach((element) => {
          delete element.dataset.resizeActive
        })
      }}
      onMouseDown={(event) => onResizeStart(event, column)}
    />
  )
}

interface SortHeaderCellProps {
  column: string
  width: number
  isResized: boolean
  isResizing: boolean
  menuOpen: boolean
  onMenuOpenChange: (open: boolean) => void
  sortDirection: 'asc' | 'desc' | null
  sortLabel: string
  sortAscLabel: string
  sortDescLabel: string
  clearSortLabel: string
  onSortAsc: () => void
  onSortDesc: () => void
  onClearSort: () => void
  onResizeStart: (event: ReactMouseEvent, column: string) => void
  align?: 'start' | 'end'
  className?: string
  children: ReactNode
}

function SortHeaderCell({
  column,
  width,
  isResized,
  isResizing,
  menuOpen,
  onMenuOpenChange,
  sortDirection,
  sortLabel,
  sortAscLabel,
  sortDescLabel,
  clearSortLabel,
  onSortAsc,
  onSortDesc,
  onClearSort,
  onResizeStart,
  align = 'end',
  className,
  children,
}: SortHeaderCellProps) {
  return (
    <th
      data-col={column}
      style={{ minWidth: `${width}px`, ...(isResized && { maxWidth: `${width}px` }) }}
      className={cn(
        'px-6 py-2 text-left font-medium text-sm text-muted-foreground whitespace-nowrap group/header relative overflow-hidden border-r border-border/50 select-none sticky top-0 bg-background z-40',
        className,
      )}
    >
      <div className="flex items-center justify-between h-full">
        <div className="overflow-hidden mr-6">{children}</div>
        <DropdownMenu open={menuOpen} onOpenChange={onMenuOpenChange}>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon-xs"
              className={cn(
                'absolute top-2 right-2 text-muted-foreground',
                menuOpen && 'bg-muted text-foreground',
              )}
              onClick={(event) => event.stopPropagation()}
            >
              <MoreHorizontal className="h-3.5 w-3.5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align={align} className="w-40">
            <DropdownMenuLabel className="text-[10px] text-muted-foreground">
              {sortLabel}
            </DropdownMenuLabel>
            <DropdownMenuItem
              onSelect={onSortAsc}
              className={cn(sortDirection === 'asc' && 'bg-primary/5 font-medium text-primary')}
            >
              <ArrowUpAZ className="h-3.5 w-3.5" />
              {sortAscLabel}
            </DropdownMenuItem>
            <DropdownMenuItem
              onSelect={onSortDesc}
              className={cn(sortDirection === 'desc' && 'bg-primary/5 font-medium text-primary')}
            >
              <ArrowDownAZ className="h-3.5 w-3.5" />
              {sortDescLabel}
            </DropdownMenuItem>
            {sortDirection && (
              <>
                <DropdownMenuSeparator />
                <DropdownMenuItem onSelect={onClearSort}>
                  <X className="h-3.5 w-3.5" />
                  {clearSortLabel}
                </DropdownMenuItem>
              </>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <ResizeHandle column={column} isResizing={isResizing} onResizeStart={onResizeStart} />
    </th>
  )
}

interface DataCellProps {
  column: string
  width: number
  isResized: boolean
  isResizing: boolean
  highlight?: TabularHighlight
  active?: boolean
  interactive?: boolean
  className?: string
  onDoubleClick?: () => void
  onResizeStart: (event: ReactMouseEvent, column: string) => void
  children: ReactNode
}

function DataCell({
  column,
  width,
  isResized,
  isResizing,
  highlight = null,
  active = false,
  interactive = false,
  className,
  onDoubleClick,
  onResizeStart,
  children,
}: DataCellProps) {
  return (
    <td
      data-col={column}
      data-find-current={highlight === 'current' ? 'true' : undefined}
      className={cn(
        'relative overflow-hidden border-b border-r border-border/50 text-sm text-foreground/80 scroll-mt-14',
        active ? 'p-0' : 'px-6 py-2',
        className,
        highlight === 'current' && 'bg-blue-200',
        highlight === 'match' && 'bg-blue-100/60',
        interactive && !active && 'cursor-default',
      )}
      style={{ minWidth: `${width}px`, ...(isResized && { maxWidth: `${width}px` }) }}
      onDoubleClick={onDoubleClick}
    >
      {children}
      <ResizeHandle column={column} isResizing={isResizing} onResizeStart={onResizeStart} />
    </td>
  )
}

export const TabularBrowser = {
  ScrollFrame,
  RowNumberHeaderCell,
  RowNumberCell,
  SortHeaderCell,
  DataCell,
}
