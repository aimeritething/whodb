import React from "react";
import { useAnalysisStore } from "@/stores/useAnalysisStore";
import { X } from "lucide-react";
import { SafeECharts } from "@/components/ui/SafeECharts";
import { buildWidgetChartOption } from "./chart-utils";
import { cn } from "@/lib/utils";

interface MaximizeChartModalProps {
    isOpen: boolean;
    onClose: () => void;
    componentId: string | null;
}

export function MaximizeChartModal({ isOpen, onClose, componentId }: MaximizeChartModalProps) {
    const { activeDashboardId, dashboards } = useAnalysisStore();
    const dashboard = dashboards.find(d => d.id === activeDashboardId);
    const component = dashboard?.components.find(c => c.id === componentId);

    if (!isOpen || !component) return null;

    const chartOption = component.type === 'chart' ? buildWidgetChartOption(component.config) : null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-sm p-8">
            <div className="w-full h-full max-w-6xl max-h-[90vh] bg-card border rounded-xl shadow-2xl flex flex-col animate-in fade-in zoom-in-95">
                <div className="h-16 border-b flex items-center justify-between px-6 shrink-0">
                    <div>
                        <h2 className="font-semibold text-lg">{component.title}</h2>
                        {component.description && (
                            <p className="text-sm text-muted-foreground">{component.description}</p>
                        )}
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-muted rounded-full transition-colors">
                        <X className="w-6 h-6 text-muted-foreground" />
                    </button>
                </div>
                <div className="flex-1 p-6 min-h-0 overflow-auto">
                    {component.type === 'chart' && chartOption && (
                        <SafeECharts
                            option={chartOption}
                            className="h-full w-full"
                        />
                    )}
                    {component.type === 'table' && component.data?.rows && (
                        <div className="overflow-auto h-full w-full">
                            <table className="w-full text-sm text-left">
                                <thead className="text-xs text-muted-foreground uppercase bg-muted/50 sticky top-0">
                                    <tr>
                                        {component.data.columns.map((col: string, i: number) => (
                                            <th key={i} className="px-4 py-2 font-medium">{col}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {component.data.rows.map((row: any, i: number) => (
                                        <tr key={i} className="border-b last:border-0 hover:bg-muted/30">
                                            {component.data.columns.map((col: string, j: number) => (
                                                <td key={j} className="px-4 py-2 whitespace-nowrap">
                                                    {row[col]}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                    {component.type === 'text' && (
                        <div
                            className="prose prose-lg max-w-none h-full w-full flex items-center justify-center"
                            dangerouslySetInnerHTML={{ __html: component.data?.content || '' }}
                        />
                    )}
                    {component.type === 'stats' && (
                        <div className="flex flex-col justify-center items-center h-full px-4">
                            <div className="text-6xl font-bold">{component.data?.value || '0'}</div>
                            <div className={cn(
                                "text-xl font-medium mt-4",
                                component.data?.trend?.startsWith('+') ? "text-green-600" : "text-red-600"
                            )}>
                                {component.data?.trend || '0%'} vs last month
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
