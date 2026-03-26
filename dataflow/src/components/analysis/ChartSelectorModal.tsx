import React, { useState } from "react";
import { X, BarChart } from "lucide-react";
import { cn } from "@/lib/utils";
import { NativeECharts } from "@/components/ui/NativeECharts";
import { useAnalysisStore } from "@/stores/useAnalysisStore";

interface ChartSelectorModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function ChartSelectorModal({ isOpen, onClose }: ChartSelectorModalProps) {
    const { addComponent } = useAnalysisStore();

    const [selectedCharts, setSelectedCharts] = useState<Set<string>>(new Set());

    const handleToggleChart = (id: string) => {
        const newSelected = new Set(selectedCharts);
        if (newSelected.has(id)) {
            newSelected.delete(id);
        } else {
            newSelected.add(id);
        }
        setSelectedCharts(newSelected);
    };

    const handleSave = () => {
        onClose();
        setSelectedCharts(new Set());
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
            <div className="w-[90vw] h-[85vh] bg-card border rounded-xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95">
                {/* Header */}
                <div className="h-14 border-b flex items-center justify-between px-6 shrink-0">
                    <h2 className="font-semibold text-lg">添加图表</h2>
                    <button onClick={onClose} className="p-2 hover:bg-muted rounded-full transition-colors">
                        <X className="w-5 h-5 text-muted-foreground" />
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 flex overflow-hidden">
                    <div className="flex-1 bg-muted/5 p-6 overflow-y-auto">
                        <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
                            <BarChart className="w-12 h-12 mb-4 opacity-20" />
                            <p>暂无可用的图表</p>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="h-16 border-t px-6 flex items-center justify-between bg-background">
                    <div className="text-sm text-muted-foreground">
                        已选 <span className="text-primary font-medium">{selectedCharts.size}</span> 个图表
                    </div>
                    <div className="flex gap-3">
                        <button
                            onClick={onClose}
                            className="px-4 py-2 rounded-md border hover:bg-muted transition-colors text-sm"
                        >
                            取消
                        </button>
                        <button
                            onClick={handleSave}
                            disabled={selectedCharts.size === 0}
                            className="px-6 py-2 rounded-md bg-emerald-500 text-white hover:bg-emerald-600 transition-colors text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
                        >
                            保存
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
