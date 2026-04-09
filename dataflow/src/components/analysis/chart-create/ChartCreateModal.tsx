import { BarChart3, ChevronLeft, Plus } from 'lucide-react'
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { SafeECharts } from '@/components/ui/SafeECharts'
import { SQLEditorView } from '@/components/editor/SQLEditorView'
import { ChartConfigPanel } from './ChartConfigPanel'
import { ChartCreateProvider, useChartCreateCtx, type ChartCreateInitialData } from './ChartCreateProvider'
import { useAnalysisDefinitionStore, type ChartWidgetDefinition } from '@/stores/analysisDefinitionStore'
import { useI18n } from '@/i18n/useI18n'

interface ChartCreateModalProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    editComponentId?: string | null
    initialQuery?: string
    initialData?: ChartCreateInitialData
}

/** Modal for creating or editing chart widgets with two views: chart configuration and SQL data. */
export function ChartCreateModal({ open, onOpenChange, editComponentId, initialQuery, initialData }: ChartCreateModalProps) {
    const { t } = useI18n()
    const dashboards = useAnalysisDefinitionStore(state => state.dashboards)
    const activeDashboardId = useAnalysisDefinitionStore(state => state.activeDashboardId)

    const dashboard = dashboards.find(d => d.id === activeDashboardId)
    const editComponent: ChartWidgetDefinition | null = editComponentId
        ? dashboard?.widgets.find(c => c.id === editComponentId) ?? null
        : null

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent
                className="max-w-[1200px] w-[90vw] h-[85vh] p-0 flex flex-col overflow-hidden gap-0"
            >
                <ChartCreateProvider
                    key={editComponentId ?? 'create'}
                    editComponent={editComponent}
                    initialQuery={initialQuery}
                    initialData={initialData}
                    onClose={() => onOpenChange(false)}
                >
                    <ChartCreateContent />
                </ChartCreateProvider>
            </DialogContent>
        </Dialog>
    )
}

/** Routes to the active wizard view. */
function ChartCreateContent() {
    const { activeView } = useChartCreateCtx()
    return activeView === 'chart-config' ? <ChartConfigView /> : <DataConfigView />
}

function ChartConfigView() {
    const { t } = useI18n()
    const {
        title, setTitle, previewOption, canSave, handleSave, isEditing,
        dashboards, selectedDashboardId, setSelectedDashboardId,
    } = useChartCreateCtx()

    return (
        <>
            <DialogHeader className="h-14 border-b px-6 flex flex-row items-center shrink-0 gap-0">
                <DialogTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    {isEditing ? t('analysis.chart.edit') : t('analysis.chart.create')}
                </DialogTitle>
            </DialogHeader>

            {/* Two-column content */}
            <div className="flex-1 flex overflow-hidden">
                {/* Left column: Title + Dashboard + Chart Preview */}
                <div className="flex-1 flex flex-col p-6 gap-4 overflow-hidden border-r">
                    <div className="flex gap-3">
                        <Input
                            autoFocus
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder={t('analysis.chart.titlePlaceholder')}
                            className="flex-1"
                        />
                        {!isEditing && (
                            <Select
                                value={selectedDashboardId}
                                onValueChange={setSelectedDashboardId}
                            >
                                <SelectTrigger className="w-[180px] shrink-0">
                                    <SelectValue placeholder={t('analysis.chart.selectDashboard')} />
                                </SelectTrigger>
                                <SelectContent>
                                    {dashboards.map((dashboard) => (
                                        <SelectItem key={dashboard.id} value={dashboard.id}>
                                            {dashboard.name}
                                        </SelectItem>
                                    ))}
                                    <SelectItem value="__new__">
                                        <span className="flex items-center gap-1.5">
                                            <Plus className="h-3.5 w-3.5" />
                                            {t('analysis.dashboard.create')}
                                        </span>
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        )}
                    </div>
                    <div className="flex-1 border rounded-md bg-background overflow-hidden flex items-center justify-center">
                        {previewOption ? (
                            <SafeECharts
                                option={previewOption}
                                className="w-full h-full"
                            />
                        ) : (
                            <div className="flex flex-col items-center gap-3 text-muted-foreground">
                                <BarChart3 className="w-12 h-12 opacity-20" />
                                <p className="text-sm">{t('analysis.chart.previewHint')}</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Right column: Config Panel */}
                <div className="w-[414px] shrink-0">
                    <ChartConfigPanel />
                </div>
            </div>

            {/* Footer */}
            <div className="h-14 border-t px-6 flex items-center justify-end gap-3 shrink-0">
                <DialogClose asChild>
                    <Button variant="outline">{t('common.actions.cancel')}</Button>
                </DialogClose>
                <Button onClick={handleSave} disabled={!canSave}>
                    {t('analysis.chart.save')}
                </Button>
            </div>
        </>
    )
}

function DataConfigView() {
    const { t } = useI18n()
    const { setActiveView, sqlQuery, setSqlQuery, handleQueryResults, editorContext } = useChartCreateCtx()

    return (
        <>
            <DialogHeader className="h-14 border-b px-6 flex flex-row items-center shrink-0 gap-0">
                <DialogTitle className="sr-only">
                    {t('analysis.chart.dataConfiguration')}
                </DialogTitle>
                <Button
                    variant="outline"
                    onClick={() => setActiveView('chart-config')}
                >
                    <ChevronLeft className="w-4 h-4" />
                    {t('analysis.chart.backToChart')}
                </Button>
            </DialogHeader>

            {/* Embedded SQL Editor.
                tabId uses a sentinel value -- SQLEditorView calls updateTab() internally
                for database/schema changes, but this is a no-op since no tab with this ID
                exists in the tab store. Database/schema state is tracked by the editor's
                own local state (selectedDatabase, selectedSchema). */}
            <div className="flex-1 overflow-hidden">
                <SQLEditorView
                    tabId="__chart-create-sql__"
                    context={editorContext}
                    initialSql={sqlQuery}
                    onSqlChange={setSqlQuery}
                    onQueryResults={handleQueryResults}
                />
            </div>
        </>
    )
}
