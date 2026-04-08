import React from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Checkbox } from '@/components/ui/checkbox';
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';
import type { ChartType, SortTarget, SortOrder } from '../chart-utils';
import { useChartCreateCtx } from './ChartCreateProvider';
import { useI18n } from '@/i18n/useI18n'

/** Right-column configuration panel for chart creation: type, axes, options, and sort settings. */
export function ChartConfigPanel() {
    const { t } = useI18n()
    const { chartConfig: config, queryData, handleConfigChange: onConfigChange, setActiveView } = useChartCreateCtx()
    const columns = queryData?.columns ?? []

    const chartTypeLabels: Record<ChartType, string> = {
        bar: t('analysis.chart.type.bar'),
        line: t('analysis.chart.type.line'),
        pie: t('analysis.chart.type.pie'),
        area: t('analysis.chart.type.area'),
    };

    const yAxisAvailableColumns = columns.filter(col => col !== config.xAxisColumn);

    const toggleYAxisColumn = (col: string) => {
        const current = config.yAxisColumns;
        const next = current.includes(col)
            ? current.filter(c => c !== col)
            : [...current, col];
        onConfigChange({ yAxisColumns: next });
    };

    return (
        <div className="flex flex-col gap-4 p-6 overflow-y-auto h-full">

            {/* 1. Data Configuration button */}
            <div className="flex flex-col gap-2">
                <Button
                    onClick={() => setActiveView('data-config')}
                    variant={queryData ? 'outline' : 'default'}
                    className={cn('w-full', queryData && 'border-primary text-primary')}
                >
                    {queryData && <Check className="h-4 w-4" />}
                    {t('analysis.chart.dataConfiguration')}
                </Button>
                {queryData && (
                    <p className="text-xs text-muted-foreground">
                        {t('analysis.chart.dataStatus', {
                            columns: queryData.columns.length,
                            rows: queryData.rows.length,
                        })}
                    </p>
                )}
            </div>

            {/* 2. Chart Type selector */}
            <div className="flex flex-col gap-2">
                <Label>{t('analysis.chart.type')}</Label>
                <Select
                    value={config.chartType}
                    onValueChange={(value) => onConfigChange({ chartType: value as ChartType })}
                >
                    <SelectTrigger className="w-full">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        {(Object.entries(chartTypeLabels) as [ChartType, string][]).map(([value, label]) => (
                            <SelectItem key={value} value={value}>
                                {label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            {/* 3. X-Axis selector */}
            <div className="flex flex-col gap-2">
                <Label>{t('analysis.chart.xAxis')}</Label>
                <Select
                    value={config.xAxisColumn || undefined}
                    onValueChange={(value) => onConfigChange({ xAxisColumn: value })}
                    disabled={columns.length === 0}
                >
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder={t('analysis.chart.selectXAxis')} />
                    </SelectTrigger>
                    <SelectContent>
                        {columns.map((col) => (
                            <SelectItem key={col} value={col}>
                                {col}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            {/* 4. Y-Axis multi-select */}
            <div className="flex flex-col gap-2">
                <Label>{t('analysis.chart.yAxis')}</Label>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="outline"
                            className="w-full justify-between font-normal"
                            disabled={columns.length === 0}
                        >
                            <span className={cn(
                                'truncate',
                                !config.yAxisColumns.length && 'text-muted-foreground',
                            )}>
                                {config.yAxisColumns.length ? config.yAxisColumns.join(', ') : t('analysis.chart.selectYAxis')}
                            </span>
                            <ChevronDown className="h-4 w-4 text-muted-foreground" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="min-w-[220px]">
                        {yAxisAvailableColumns.map((col) => (
                            <DropdownMenuCheckboxItem
                                key={col}
                                checked={config.yAxisColumns.includes(col)}
                                onCheckedChange={() => toggleYAxisColumn(col)}
                            >
                                {col}
                            </DropdownMenuCheckboxItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            {/* 5. Chart Options */}
            <div className="flex flex-col gap-3 mt-1">
                <Label>{t('analysis.chart.options')}</Label>
                {(
                    [
                        { key: 'showLegend', label: t('analysis.chart.options.legend') },
                        { key: 'showGridLines', label: t('analysis.chart.options.gridLines') },
                        { key: 'showDataLabels', label: t('analysis.chart.options.dataLabels') },
                    ] as const
                ).map(({ key, label }) => (
                    <div key={key} className="flex items-center gap-2">
                        <Checkbox
                            id={key}
                            checked={config.options[key]}
                            onCheckedChange={() => onConfigChange({ options: { ...config.options, [key]: !config.options[key] } })}
                        />
                        <Label htmlFor={key} className="cursor-pointer font-normal">{label}</Label>
                    </div>
                ))}
            </div>

            {/* 6. Sort By */}
            <div className="flex flex-col gap-3 mt-1">
                <Label>{t('analysis.chart.sortBy')}</Label>
                <RadioGroup
                    className="flex flex-col gap-3"
                    value={config.sortBy}
                    onValueChange={(value) => onConfigChange({ sortBy: value as SortTarget })}
                >
                    {(
                        [
                            { value: 'data', label: t('analysis.chart.sort.dataOrder') },
                            { value: 'xAxis', label: t('analysis.chart.sort.xAxisValue') },
                            { value: 'yAxis', label: t('analysis.chart.sort.yAxisValue') },
                        ] as { value: SortTarget; label: string }[]
                    ).map(({ value, label }) => (
                        <div key={value}>
                            <div className="flex items-center gap-2">
                                <RadioGroupItem value={value} id={`sort-${value}`} />
                                <Label htmlFor={`sort-${value}`} className="cursor-pointer font-normal">{label}</Label>
                            </div>

                            {/* Sort order sub-options when xAxis or yAxis selected */}
                            {config.sortBy === value && value !== 'data' && (
                                <RadioGroup
                                    value={config.sortOrder}
                                    onValueChange={(v) => onConfigChange({ sortOrder: v as SortOrder })}
                                    className="ml-6 mt-3 flex gap-2"
                                >
                                    {(
                                        [
                                            { value: 'asc', label: t('analysis.chart.sort.ascending') },
                                            { value: 'desc', label: t('analysis.chart.sort.descending') },
                                        ] as { value: SortOrder; label: string }[]
                                    ).map(order => (
                                        <div key={order.value} className="flex items-center gap-2">
                                            <RadioGroupItem value={order.value} id={`sort-order-${order.value}`} />
                                            <Label htmlFor={`sort-order-${order.value}`} className="cursor-pointer font-normal">{order.label}</Label>
                                        </div>
                                    ))}
                                </RadioGroup>
                            )}
                        </div>
                    ))}
                </RadioGroup>
            </div>

        </div>
    );
}
