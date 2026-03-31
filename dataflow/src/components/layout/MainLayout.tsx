import { useState } from "react";
import { Sidebar } from "@/components/sidebar/Sidebar";

import { ActivityBar, ActivityTab } from "./ActivityBar";
import { AnalysisView } from "../analysis/AnalysisView";
import { TabBar } from "./TabBar";
import { TabContent } from "./TabContent";

export function MainLayout() {
    const [activeTab, setActiveTab] = useState<ActivityTab>('connections');

    // Determine if the Sidebar (Database Tree) should be visible
    // Currently only for 'connections', but could be others if needed
    const showSidebar = activeTab === 'connections';

    return (
        <div className="flex h-screen w-full overflow-hidden bg-background">
            <ActivityBar activeTab={activeTab} onTabChange={setActiveTab} />

            {showSidebar && (
                <Sidebar />
            )}

            <main className="flex flex-1 flex-col overflow-hidden relative">
                {activeTab === 'connections' ? (
                    <>
                        <TabBar />
                        <TabContent />
                    </>
                ) : activeTab === 'analysis' ? (
                    <AnalysisView />
                ) : null}

            </main>
        </div>
    );
}

