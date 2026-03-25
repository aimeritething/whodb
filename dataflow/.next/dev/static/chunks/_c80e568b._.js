(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$5$2e$0$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tailwind-merge@3.5.0/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$5$2e$0$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/contexts/TabContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TabProvider",
    ()=>TabProvider,
    "useTabContext",
    ()=>useTabContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.29.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.29.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const TabContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function useTabContext() {
    _s();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(TabContext);
    if (!context) {
        throw new Error('useTabContext must be used within a TabProvider');
    }
    return context;
}
_s(useTabContext, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
function TabProvider({ children }) {
    _s1();
    const [tabs, setTabs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [activeTabId, setActiveTabId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const generateTabId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TabProvider.useCallback[generateTabId]": ()=>{
            return `tab_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
        }
    }["TabProvider.useCallback[generateTabId]"], []);
    const findExistingTab = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TabProvider.useCallback[findExistingTab]": (type, connectionId, identifier, databaseName)=>{
            return tabs.find({
                "TabProvider.useCallback[findExistingTab]": (tab)=>{
                    if (tab.type !== type || tab.connectionId !== connectionId) return false;
                    if (databaseName && tab.databaseName !== databaseName) return false;
                    if (type === 'table') {
                        return tab.tableName === identifier;
                    } else if (type === 'collection') {
                        return tab.collectionName === identifier;
                    } else if (type === 'redis_keys_list') {
                        return tab.databaseName === databaseName;
                    }
                    // Query tabs are always unique
                    return false;
                }
            }["TabProvider.useCallback[findExistingTab]"]);
        }
    }["TabProvider.useCallback[findExistingTab]"], [
        tabs
    ]);
    const openTab = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TabProvider.useCallback[openTab]": (tabData)=>{
            const existingTab = tabData.type !== 'query' ? findExistingTab(tabData.type, tabData.connectionId, tabData.tableName || tabData.collectionName || '', tabData.databaseName) : undefined;
            if (existingTab) {
                setActiveTabId(existingTab.id);
                return existingTab.id;
            }
            const newTab = {
                ...tabData,
                id: tabData.id || generateTabId()
            };
            setTabs({
                "TabProvider.useCallback[openTab]": (prev)=>[
                        ...prev,
                        newTab
                    ]
            }["TabProvider.useCallback[openTab]"]);
            setActiveTabId(newTab.id);
            return newTab.id;
        }
    }["TabProvider.useCallback[openTab]"], [
        findExistingTab,
        generateTabId
    ]);
    const closeTab = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TabProvider.useCallback[closeTab]": (tabId)=>{
            setTabs({
                "TabProvider.useCallback[closeTab]": (prev)=>{
                    const index = prev.findIndex({
                        "TabProvider.useCallback[closeTab].index": (t)=>t.id === tabId
                    }["TabProvider.useCallback[closeTab].index"]);
                    const newTabs = prev.filter({
                        "TabProvider.useCallback[closeTab].newTabs": (t)=>t.id !== tabId
                    }["TabProvider.useCallback[closeTab].newTabs"]);
                    // If closing the active tab, switch to an adjacent tab
                    if (activeTabId === tabId && newTabs.length > 0) {
                        const newActiveIndex = Math.min(index, newTabs.length - 1);
                        setActiveTabId(newTabs[newActiveIndex].id);
                    } else if (newTabs.length === 0) {
                        setActiveTabId(null);
                    }
                    return newTabs;
                }
            }["TabProvider.useCallback[closeTab]"]);
        }
    }["TabProvider.useCallback[closeTab]"], [
        activeTabId
    ]);
    const closeOtherTabs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TabProvider.useCallback[closeOtherTabs]": (tabId)=>{
            setTabs({
                "TabProvider.useCallback[closeOtherTabs]": (prev)=>{
                    const tabToKeep = prev.find({
                        "TabProvider.useCallback[closeOtherTabs].tabToKeep": (t)=>t.id === tabId
                    }["TabProvider.useCallback[closeOtherTabs].tabToKeep"]);
                    if (!tabToKeep) return prev;
                    setActiveTabId(tabId);
                    return [
                        tabToKeep
                    ];
                }
            }["TabProvider.useCallback[closeOtherTabs]"]);
        }
    }["TabProvider.useCallback[closeOtherTabs]"], []);
    const closeAllTabs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TabProvider.useCallback[closeAllTabs]": ()=>{
            setTabs([]);
            setActiveTabId(null);
        }
    }["TabProvider.useCallback[closeAllTabs]"], []);
    const updateTab = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TabProvider.useCallback[updateTab]": (tabId, updates)=>{
            setTabs({
                "TabProvider.useCallback[updateTab]": (prev)=>prev.map({
                        "TabProvider.useCallback[updateTab]": (tab)=>tab.id === tabId ? {
                                ...tab,
                                ...updates
                            } : tab
                    }["TabProvider.useCallback[updateTab]"])
            }["TabProvider.useCallback[updateTab]"]);
        }
    }["TabProvider.useCallback[updateTab]"], []);
    const getTab = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TabProvider.useCallback[getTab]": (tabId)=>{
            return tabs.find({
                "TabProvider.useCallback[getTab]": (t)=>t.id === tabId
            }["TabProvider.useCallback[getTab]"]);
        }
    }["TabProvider.useCallback[getTab]"], [
        tabs
    ]);
    const value = {
        tabs,
        activeTabId,
        openTab,
        closeTab,
        setActiveTab: setActiveTabId,
        updateTab,
        getTab,
        findExistingTab,
        closeOtherTabs,
        closeAllTabs
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TabContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/contexts/TabContext.tsx",
        lineNumber: 156,
        columnNumber: 9
    }, this);
}
_s1(TabProvider, "ZhjAEbI1o19sNqaWnfz3PGEkNMA=");
_c = TabProvider;
var _c;
__turbopack_context__.k.register(_c, "TabProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/stores/useAnalysisStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAnalysisStore",
    ()=>useAnalysisStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$12_$40$types$2b$react$40$19$2e$2$2e$14_react$40$19$2e$2$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zustand@5.0.12_@types+react@19.2.14_react@19.2.0/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$13$2e$0$2e$0$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/uuid@13.0.0/node_modules/uuid/dist/v4.js [app-client] (ecmascript) <export default as v4>");
;
;
const useAnalysisStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$12_$40$types$2b$react$40$19$2e$2$2e$14_react$40$19$2e$2$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        dashboards: [],
        activeDashboardId: null,
        selectedComponentId: null,
        isEditorMode: false,
        isInitialized: false,
        initializeFromAPI: async ()=>{
            // No persistence backend — dashboards are in-memory only for now
            set({
                isInitialized: true
            });
        },
        createDashboard: (name, description)=>{
            const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$13$2e$0$2e$0$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
            const newDashboard = {
                id,
                name,
                description,
                createdAt: Date.now(),
                updatedAt: Date.now(),
                components: []
            };
            set((state)=>({
                    dashboards: [
                        newDashboard,
                        ...state.dashboards
                    ],
                    activeDashboardId: id,
                    isEditorMode: true
                }));
        },
        deleteDashboard: (id)=>{
            set((state)=>({
                    dashboards: state.dashboards.filter((d)=>d.id !== id),
                    activeDashboardId: state.activeDashboardId === id ? null : state.activeDashboardId
                }));
        },
        openDashboard: (id)=>{
            set({
                activeDashboardId: id,
                isEditorMode: false,
                selectedComponentId: null
            });
        },
        closeDashboard: ()=>{
            set({
                activeDashboardId: null,
                selectedComponentId: null
            });
        },
        updateDashboard: (id, updates)=>{
            set((state)=>({
                    dashboards: state.dashboards.map((d)=>d.id === id ? {
                            ...d,
                            ...updates,
                            updatedAt: Date.now()
                        } : d)
                }));
        },
        addComponent: (type, config = {})=>{
            const { activeDashboardId, dashboards } = get();
            if (!activeDashboardId) return;
            const dashboard = dashboards.find((d)=>d.id === activeDashboardId);
            if (!dashboard) return;
            const w = 4;
            const h = 6;
            let x = 0;
            let y = 0;
            const components = dashboard.components || [];
            if (components.length > 0) {
                const sorted = [
                    ...components
                ].sort((a, b)=>{
                    const ay = a.layout.y === Infinity ? 999999 : a.layout.y;
                    const by = b.layout.y === Infinity ? 999999 : b.layout.y;
                    if (ay !== by) return ay - by;
                    return a.layout.x - b.layout.x;
                });
                const last = sorted[sorted.length - 1];
                const maxY = components.reduce((max, c)=>{
                    if (c.layout.y === Infinity) return max;
                    return Math.max(max, c.layout.y + c.layout.h);
                }, 0);
                const lastY = last.layout.y === Infinity ? maxY : last.layout.y;
                if (last.layout.x + last.layout.w + w <= 12) {
                    x = last.layout.x + last.layout.w;
                    y = lastY;
                } else {
                    x = 0;
                    y = maxY;
                }
            }
            const newComponent = {
                id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$13$2e$0$2e$0$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
                type,
                title: config.title || `New ${type}`,
                ...config,
                layout: {
                    i: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$13$2e$0$2e$0$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
                    x,
                    y,
                    w,
                    h
                }
            };
            set((state)=>({
                    dashboards: state.dashboards.map((d)=>d.id === activeDashboardId ? {
                            ...d,
                            components: [
                                ...d.components,
                                newComponent
                            ],
                            updatedAt: Date.now()
                        } : d),
                    selectedComponentId: newComponent.id
                }));
        },
        removeComponent: (id)=>{
            const { activeDashboardId } = get();
            if (!activeDashboardId) return;
            set((state)=>({
                    dashboards: state.dashboards.map((d)=>d.id === activeDashboardId ? {
                            ...d,
                            components: d.components.filter((c)=>c.id !== id),
                            updatedAt: Date.now()
                        } : d),
                    selectedComponentId: null
                }));
        },
        updateComponent: (id, updates)=>{
            const { activeDashboardId } = get();
            if (!activeDashboardId) return;
            set((state)=>({
                    dashboards: state.dashboards.map((d)=>d.id === activeDashboardId ? {
                            ...d,
                            components: d.components.map((c)=>c.id === id ? {
                                    ...c,
                                    ...updates
                                } : c),
                            updatedAt: Date.now()
                        } : d)
                }));
        },
        updateLayout: (layout)=>{
            const { activeDashboardId } = get();
            if (!activeDashboardId) return;
            set((state)=>({
                    dashboards: state.dashboards.map((d)=>d.id === activeDashboardId ? {
                            ...d,
                            components: d.components.map((c)=>{
                                const layoutItem = layout.find((l)=>l.i === c.layout.i);
                                if (layoutItem) {
                                    return {
                                        ...c,
                                        layout: {
                                            ...c.layout,
                                            x: layoutItem.x,
                                            y: layoutItem.y,
                                            w: layoutItem.w,
                                            h: layoutItem.h
                                        }
                                    };
                                }
                                return c;
                            }),
                            updatedAt: Date.now()
                        } : d)
                }));
        },
        selectComponent: (id)=>set({
                selectedComponentId: id
            }),
        toggleEditorMode: ()=>set((state)=>({
                    isEditorMode: !state.isEditorMode
                })),
        isChartModalOpen: false,
        toggleChartModal: (isOpen)=>set({
                isChartModalOpen: isOpen
            }),
        isDashboardNameExists: (name, excludeId)=>{
            const { dashboards } = get();
            const normalizedName = name.trim().toLowerCase();
            return dashboards.some((d)=>d.name.trim().toLowerCase() === normalizedName && d.id !== excludeId);
        }
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_c80e568b._.js.map