export type ChartType = 'bar' | 'line' | 'pie' | 'area';

export type SortTarget = 'data' | 'xAxis' | 'yAxis';
export type SortOrder = 'asc' | 'desc';

export interface ChartOptions {
    showLegend: boolean;
    showGridLines: boolean;
    showDataLabels: boolean;
}

export interface ChartConfig {
    chartType: ChartType;
    xAxisColumn: string;
    yAxisColumns: string[];
    options: ChartOptions;
    sortBy: SortTarget;
    sortOrder: SortOrder;
}

export interface QueryData {
    columns: string[];
    rows: Record<string, any>[];
    query: string;
    database?: string;
    schema?: string;
}

export const DEFAULT_CHART_CONFIG: ChartConfig = {
    chartType: 'bar',
    xAxisColumn: '',
    yAxisColumns: [],
    options: {
        showLegend: true,
        showGridLines: true,
        showDataLabels: false,
    },
    sortBy: 'data',
    sortOrder: 'asc',
};

/** Sort query rows based on chart config sort settings. */
export function sortQueryRows(
    rows: Record<string, any>[],
    config: ChartConfig,
): Record<string, any>[] {
    if (config.sortBy === 'data' || !rows.length) return rows;

    const column = config.sortBy === 'xAxis'
        ? config.xAxisColumn
        : config.yAxisColumns[0];

    if (!column) return rows;

    const sorted = [...rows].sort((a, b) => {
        const va = a[column];
        const vb = b[column];
        const na = Number(va);
        const nb = Number(vb);
        if (!isNaN(na) && !isNaN(nb)) return na - nb;
        return String(va ?? '').localeCompare(String(vb ?? ''));
    });

    return config.sortOrder === 'desc' ? sorted.reverse() : sorted;
}

/** Build an ECharts option from chart config + query data (for preview). */
export function buildEChartsOption(
    config: ChartConfig,
    queryData: QueryData | null,
): any | null {
    if (!queryData || !config.xAxisColumn || config.yAxisColumns.length === 0) {
        return null;
    }

    const sortedRows = sortQueryRows(queryData.rows, config);
    const xAxisData = sortedRows.map(row => String(row[config.xAxisColumn] ?? ''));

    const isPie = config.chartType === 'pie';

    if (isPie) {
        const yCol = config.yAxisColumns[0];
        return {
            tooltip: { trigger: 'item', formatter: '{b}: {c} ({d}%)' },
            legend: config.options.showLegend
                ? { orient: 'horizontal', bottom: 0 }
                : undefined,
            series: [{
                type: 'pie',
                radius: ['40%', '70%'],
                itemStyle: { borderRadius: 5, borderColor: '#fff', borderWidth: 2 },
                data: sortedRows.map((row, i) => ({
                    value: Number(row[yCol]) || 0,
                    name: xAxisData[i],
                })),
                label: {
                    show: config.options.showDataLabels,
                    formatter: '{b}',
                },
            }],
        };
    }

    // Non-pie charts (bar, line, area)
    const series = config.yAxisColumns.map(col => {
        const seriesType = config.chartType === 'area' ? 'line' : config.chartType;
        return {
            name: col,
            type: seriesType,
            data: sortedRows.map(row => Number(row[col]) || 0),
            ...(config.chartType === 'area' ? { areaStyle: { opacity: 0.2 } } : {}),
            ...(config.chartType === 'bar' ? { itemStyle: { borderRadius: [4, 4, 0, 0] } } : {}),
            symbol: seriesType === 'line' ? 'circle' : undefined,
            symbolSize: 6,
            label: config.options.showDataLabels
                ? { show: true, position: 'top' }
                : undefined,
        };
    });

    return {
        tooltip: { trigger: 'axis' },
        legend: config.options.showLegend
            ? { data: config.yAxisColumns, bottom: 0 }
            : undefined,
        grid: { left: '3%', right: '4%', bottom: config.options.showLegend ? '12%' : '3%', top: '10%', containLabel: true },
        xAxis: {
            type: 'category',
            data: xAxisData,
            axisLine: { show: false },
            axisTick: { show: false },
        },
        yAxis: {
            type: 'value',
            splitLine: { show: config.options.showGridLines, lineStyle: { type: 'dashed' } },
        },
        series,
    };
}

/**
 * Convert ChartConfig + QueryData into the config/data shape
 * that DashboardWidget's WidgetContent expects for type='chart'.
 *
 * WidgetContent expects:
 *   config.type: 'bar' | 'line' | 'pie' | 'area'
 *   config.series: Array<{ name, type, data, areaStyle? }>
 *   config.xAxis: string[] (category labels)
 */
export function toWidgetConfig(
    config: ChartConfig,
    queryData: QueryData,
): { config: any; data: any } {
    const sortedRows = sortQueryRows(queryData.rows, config);
    const xAxisData = sortedRows.map(row => String(row[config.xAxisColumn] ?? ''));

    const series = config.yAxisColumns.map(col => {
        const seriesType = config.chartType === 'area' ? 'line' : config.chartType;
        return {
            name: col,
            type: seriesType,
            data: sortedRows.map(row => Number(row[col]) || 0),
            ...(config.chartType === 'area' ? { areaStyle: { opacity: 0.2 } } : {}),
        };
    });

    return {
        config: {
            type: config.chartType,
            series,
            xAxis: xAxisData,
            chartConfig: config,
        },
        data: {},
    };
}
