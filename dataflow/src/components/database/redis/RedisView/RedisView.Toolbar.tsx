import { Download, Minus, Plus, RefreshCw, TerminalSquare, BarChart3 } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { Separator } from '@/components/ui/separator'
import { useI18n } from '@/i18n/useI18n'
import { cn } from '@/lib/utils'
import { useRedisView } from './RedisViewProvider'

export function RedisViewToolbar() {
  const { t } = useI18n()
  const { state, actions, meta } = useRedisView()

  return (
    <div className="flex items-center justify-between h-12 px-2">
      <div className="flex items-center">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon" onClick={actions.refresh} disabled={state.loading}>
              <RefreshCw className={cn('h-4 w-4', state.loading && 'animate-spin')} />
            </Button>
          </TooltipTrigger>
          <TooltipContent>{t('common.actions.refresh')}</TooltipContent>
        </Tooltip>

        <Separator orientation="vertical" className="mx-1 data-[orientation=vertical]:h-4" />

        {state.canAdd && (
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" onClick={actions.startNewRow} disabled={state.newRow !== null || state.mutating}>
                <Plus className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>{t('redis.detail.addRow')}</TooltipContent>
          </Tooltip>
        )}

        <Tooltip>
          <TooltipTrigger asChild>
            <span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => actions.setShowDeleteConfirm(true)}
                disabled={state.selectedRows.size === 0 || state.mutating}
              >
                <Minus className="h-4 w-4" />
              </Button>
            </span>
          </TooltipTrigger>
          <TooltipContent>{t('redis.detail.deleteSelected')}</TooltipContent>
        </Tooltip>

        <Separator orientation="vertical" className="mx-1 data-[orientation=vertical]:h-4" />

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon" onClick={() => actions.setIsChartModalOpen(true)}>
              <BarChart3 className="h-4 w-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>{t('analysis.chart.create')}</TooltipContent>
        </Tooltip>
      </div>

      <div className="flex items-center gap-2">
        <Button className="rounded-lg gap-2.5 min-w-[86px]" onClick={() => actions.setShowExport(true)}>
          <Download className="h-4 w-4" />
          {t('common.actions.export')}
        </Button>
        <Button className="rounded-lg gap-2.5 min-w-[86px]" onClick={meta.openQuery}>
          <TerminalSquare className="h-4 w-4" />
          {t('common.actions.query')}
        </Button>
      </div>
    </div>
  )
}
