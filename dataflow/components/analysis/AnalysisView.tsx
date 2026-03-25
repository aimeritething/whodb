import { useEffect } from "react";
import { DashboardSidebar } from "./DashboardSidebar";
import { DashboardEditor } from "./DashboardEditor";
import { useAnalysisStore } from "@/stores/useAnalysisStore";

export function AnalysisView() {
    const { activeDashboardId, isInitialized, initializeFromAPI } = useAnalysisStore();

    // Initialize dashboards from API on mount
    useEffect(() => {
        if (!isInitialized) {
            initializeFromAPI();
        }
    }, [isInitialized, initializeFromAPI]);

    return (
        <div className="flex h-full w-full overflow-hidden">
            <DashboardSidebar />
            <div className="flex-1 overflow-hidden bg-muted/10">
                {activeDashboardId ? (
                    <DashboardEditor />
                ) : (
                    <div className="flex h-full items-center justify-center text-muted-foreground">
                        Select a dashboard to view details
                    </div>
                )}
            </div>
        </div>
    );
}
