import React from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { ChartType, SortTarget, SortOrder } from '../chart-utils';
import { useChartCreateCtx } from './ChartCreateProvider';
import { useI18n } from '@/i18n/useI18n'

/** Right-column configuration panel for chart creation: type, axes, options, and sort settings. */
export function ChartConfigPanel() {
    const { t } = useI18n()
    const { chartConfig: config, queryData, handleConfigChange: onConfigChange, setActiveView } = useChartCreateCtx()
    const columns = queryData?.columns ?? []

    const [openDropdown, setOpenDropdown] = React.useState<string | null>(null);

    const chartTypeLabels: Record<ChartType, string> = {
        bar: t('analysis.chart.type.bar'),
        line: t('analysis.chart.type.line'),
        pie: t('analysis.chart.type.pie'),
        area: t('analysis.chart.type.area'),
    };

    const toggleDropdown = (name: string) => {
        setOpenDropdown(prev => prev === name ? null : name);
    };

    const panelRef = React.useRef<HTMLDivElement>(null);
    React.useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
                setOpenDropdown(null);
            }
        };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, []);

    const yAxisAvailableColumns = columns.filter(col => col !== config.xAxisColumn);

    const toggleYAxisColumn = (col: string) => {
        const current = config.yAxisColumns;
        const next = current.includes(col)
            ? current.filter(c => c !== col)
            : [...current, col];
        onConfigChange({ yAxisColumns: next });
    };

    return (
        <div ref={panelRef} className="flex flex-col gap-4 p-6 overflow-y-auto h-full">

            {/* 1. Data Configuration button */}
            <button
                onClick={() => setActiveView('data-config')}
                className="w-full px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm font-medium"
            >
                {t('analysis.chart.dataConfiguration')}
            </button>

            {/* 2. Chart Type selector */}
            <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium">{t('analysis.chart.type')}</label>
                <div className="relative">
                    <button
                        onClick={() => toggleDropdown('chartType')}
                        className="w-full flex items-center justify-between px-3 py-2 rounded-md border bg-popover text-sm"
                    >
                        <span>{chartTypeLabels[config.chartType]}</span>
                        <ChevronDown className="w-4 h-4 text-muted-foreground" />
                    </button>
                    {openDropdown === 'chartType' && (
                        <div className="absolute top-full left-0 right-0 mt-1 z-50 bg-popover border rounded-md shadow-md overflow-hidden">
                            {(Object.entries(chartTypeLabels) as [ChartType, string][]).map(([value, label]) => (
                                <button
                                    key={value}
                                    onClick={() => {
                                        onConfigChange({ chartType: value });
                                        setOpenDropdown(null);
                                    }}
                                    className="w-full flex items-center justify-between px-3 py-2 text-sm hover:bg-muted transition-colors"
                                >
                                    <span>{label}</span>
                                    {config.chartType === value && (
                                        <Check className="w-4 h-4 text-blue-500" />
                                    )}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* 3. X-Axis selector */}
            <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium">{t('analysis.chart.xAxis')}</label>
                <div className="relative">
                    <button
                        onClick={() => toggleDropdown('xAxis')}
                        className="w-full flex items-center justify-between px-3 py-2 rounded-md border bg-popover text-sm"
                    >
                        <span className={cn(!config.xAxisColumn && 'text-muted-foreground')}>
                            {config.xAxisColumn || t('analysis.chart.selectXAxis')}
                        </span>
                        <ChevronDown className="w-4 h-4 text-muted-foreground" />
                    </button>
                    {openDropdown === 'xAxis' && (
                        <div className="absolute top-full left-0 right-0 mt-1 z-50 bg-popover border rounded-md shadow-md overflow-hidden">
                            {columns.map(col => (
                                <button
                                    key={col}
                                    onClick={() => {
                                        onConfigChange({ xAxisColumn: col });
                                        setOpenDropdown(null);
                                    }}
                                    className="w-full flex items-center justify-between px-3 py-2 text-sm hover:bg-muted transition-colors"
                                >
                                    <span>{col}</span>
                                    {config.xAxisColumn === col && (
                                        <Check className="w-4 h-4 text-blue-500" />
                                    )}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* 4. Y-Axis multi-select */}
            <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium">{t('analysis.chart.yAxis')}</label>
                <div className="relative">
                    <button
                        onClick={() => toggleDropdown('yAxis')}
                        className="w-full flex items-center justify-between px-3 py-2 rounded-md border bg-popover text-sm"
                    >
                        <span className={cn(!config.yAxisColumns.length && 'text-muted-foreground')}>
                            {config.yAxisColumns.length ? config.yAxisColumns.join(', ') : t('analysis.chart.selectYAxis')}
                        </span>
                        <ChevronDown className="w-4 h-4 text-muted-foreground" />
                    </button>
                    {openDropdown === 'yAxis' && (
                        <div className="absolute top-full left-0 right-0 mt-1 z-50 bg-popover border rounded-md shadow-md overflow-hidden">
                            {yAxisAvailableColumns.map(col => (
                                <button
                                    key={col}
                                    onClick={() => toggleYAxisColumn(col)}
                                    className="w-full flex items-center justify-between px-3 py-2 text-sm hover:bg-muted transition-colors"
                                >
                                    <span>{col}</span>
                                    {config.yAxisColumns.includes(col) && (
                                        <Check className="w-4 h-4 text-blue-500" />
                                    )}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* 5. Chart Options */}
            <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">{t('analysis.chart.options')}</label>
                {(
                    [
                        { key: 'showLegend', label: t('analysis.chart.options.legend') },
                        { key: 'showGridLines', label: t('analysis.chart.options.gridLines') },
                        { key: 'showDataLabels', label: t('analysis.chart.options.dataLabels') },
                    ] as const
                ).map(({ key, label }) => (
                    <button
                        key={key}
                        onClick={() => onConfigChange({ options: { ...config.options, [key]: !config.options[key] } })}
                        className="flex items-center gap-2 text-sm"
                    >
                        <span
                            className={cn(
                                'w-4 h-4 rounded border flex items-center justify-center shrink-0',
                                config.options[key]
                                    ? 'bg-blue-500 border-blue-500'
                                    : 'border',
                            )}
                        >
                            {config.options[key] && <Check className="w-3 h-3 text-white" />}
                        </span>
                        <span>{label}</span>
                    </button>
                ))}
            </div>

            {/* 6. Sort By */}
            <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">{t('analysis.chart.sortBy')}</label>
                {(
                    [
                        { value: 'data', label: t('analysis.chart.sort.dataOrder') },
                        { value: 'xAxis', label: t('analysis.chart.sort.xAxisValue') },
                        { value: 'yAxis', label: t('analysis.chart.sort.yAxisValue') },
                    ] as { value: SortTarget; label: string }[]
                ).map(({ value, label }) => (
                    <div key={value}>
                        <button
                            onClick={() => onConfigChange({ sortBy: value })}
                            className="flex items-center gap-2 text-sm"
                        >
                            <span
                                className={cn(
                                    'w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0',
                                    config.sortBy === value ? 'border-blue-500' : 'border',
                                )}
                            >
                                {config.sortBy === value && (
                                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                                )}
                            </span>
                            <span>{label}</span>
                        </button>

                        {/* Sort order sub-options when xAxis or yAxis selected */}
                        {config.sortBy === value && value !== 'data' && (
                            <div className="ml-6 mt-1.5 flex gap-3">
                                {(
                                    [
                                        { value: 'asc', label: t('analysis.chart.sort.ascending') },
                                        { value: 'desc', label: t('analysis.chart.sort.descending') },
                                    ] as { value: SortOrder; label: string }[]
                                ).map(order => (
                                    <button
                                        key={order.value}
                                        onClick={() => onConfigChange({ sortOrder: order.value })}
                                        className="flex items-center gap-1.5 text-sm"
                                    >
                                        <span
                                            className={cn(
                                                'w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center shrink-0',
                                                config.sortOrder === order.value ? 'border-blue-500' : 'border',
                                            )}
                                        >
                                            {config.sortOrder === order.value && (
                                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                            )}
                                        </span>
                                        <span>{order.label}</span>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>

        </div>
    );
}
