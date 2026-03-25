(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ __turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/extension.js [app-client] (ecmascript)");
// ----------------------------------------------
// All of the modules that are allowed to be
// imported are listed below.
//
// Users MUST NOT import other modules that are
// not included in this list.
// ----------------------------------------------
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$renderer$2f$installSVGRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__SVGRenderer$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/renderer/installSVGRenderer.js [app-client] (ecmascript) <export install as SVGRenderer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$renderer$2f$installCanvasRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__CanvasRenderer$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/renderer/installCanvasRenderer.js [app-client] (ecmascript) <export install as CanvasRenderer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$line$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__LineChart$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/line/install.js [app-client] (ecmascript) <export install as LineChart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$bar$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__BarChart$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/bar/install.js [app-client] (ecmascript) <export install as BarChart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$pie$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__PieChart$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/pie/install.js [app-client] (ecmascript) <export install as PieChart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$scatter$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__ScatterChart$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/scatter/install.js [app-client] (ecmascript) <export install as ScatterChart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$radar$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__RadarChart$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/radar/install.js [app-client] (ecmascript) <export install as RadarChart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$map$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__MapChart$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/map/install.js [app-client] (ecmascript) <export install as MapChart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$tree$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__TreeChart$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/tree/install.js [app-client] (ecmascript) <export install as TreeChart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$treemap$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__TreemapChart$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/treemap/install.js [app-client] (ecmascript) <export install as TreemapChart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$graph$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__GraphChart$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/graph/install.js [app-client] (ecmascript) <export install as GraphChart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$chord$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__ChordChart$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/chord/install.js [app-client] (ecmascript) <export install as ChordChart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$gauge$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__GaugeChart$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/gauge/install.js [app-client] (ecmascript) <export install as GaugeChart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$funnel$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__FunnelChart$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/funnel/install.js [app-client] (ecmascript) <export install as FunnelChart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$parallel$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__ParallelChart$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/parallel/install.js [app-client] (ecmascript) <export install as ParallelChart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$sankey$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__SankeyChart$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/sankey/install.js [app-client] (ecmascript) <export install as SankeyChart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$boxplot$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__BoxplotChart$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/boxplot/install.js [app-client] (ecmascript) <export install as BoxplotChart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$candlestick$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__CandlestickChart$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/candlestick/install.js [app-client] (ecmascript) <export install as CandlestickChart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$effectScatter$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__EffectScatterChart$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/effectScatter/install.js [app-client] (ecmascript) <export install as EffectScatterChart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$lines$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__LinesChart$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/lines/install.js [app-client] (ecmascript) <export install as LinesChart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$heatmap$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__HeatmapChart$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/heatmap/install.js [app-client] (ecmascript) <export install as HeatmapChart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$bar$2f$installPictorialBar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__PictorialBarChart$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/bar/installPictorialBar.js [app-client] (ecmascript) <export install as PictorialBarChart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$themeRiver$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__ThemeRiverChart$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/themeRiver/install.js [app-client] (ecmascript) <export install as ThemeRiverChart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$sunburst$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__SunburstChart$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/sunburst/install.js [app-client] (ecmascript) <export install as SunburstChart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$custom$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__CustomChart$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/custom/install.js [app-client] (ecmascript) <export install as CustomChart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$grid$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__GridComponent$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/grid/install.js [app-client] (ecmascript) <export install as GridComponent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$polar$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__PolarComponent$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/polar/install.js [app-client] (ecmascript) <export install as PolarComponent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$geo$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__GeoComponent$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/geo/install.js [app-client] (ecmascript) <export install as GeoComponent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$singleAxis$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__SingleAxisComponent$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/singleAxis/install.js [app-client] (ecmascript) <export install as SingleAxisComponent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$parallel$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__ParallelComponent$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/parallel/install.js [app-client] (ecmascript) <export install as ParallelComponent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$calendar$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__CalendarComponent$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/calendar/install.js [app-client] (ecmascript) <export install as CalendarComponent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$matrix$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__MatrixComponent$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/matrix/install.js [app-client] (ecmascript) <export install as MatrixComponent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$graphic$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__GraphicComponent$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/graphic/install.js [app-client] (ecmascript) <export install as GraphicComponent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__ToolboxComponent$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/toolbox/install.js [app-client] (ecmascript) <export install as ToolboxComponent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__TooltipComponent$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/tooltip/install.js [app-client] (ecmascript) <export install as TooltipComponent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__AxisPointerComponent$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axisPointer/install.js [app-client] (ecmascript) <export install as AxisPointerComponent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$brush$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__BrushComponent$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/brush/install.js [app-client] (ecmascript) <export install as BrushComponent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$title$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__TitleComponent$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/title/install.js [app-client] (ecmascript) <export install as TitleComponent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$timeline$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__TimelineComponent$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/timeline/install.js [app-client] (ecmascript) <export install as TimelineComponent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$installMarkPoint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__MarkPointComponent$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/marker/installMarkPoint.js [app-client] (ecmascript) <export install as MarkPointComponent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$installMarkLine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__MarkLineComponent$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/marker/installMarkLine.js [app-client] (ecmascript) <export install as MarkLineComponent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$installMarkArea$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__MarkAreaComponent$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/marker/installMarkArea.js [app-client] (ecmascript) <export install as MarkAreaComponent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$legend$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__LegendComponent$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/legend/install.js [app-client] (ecmascript) <export install as LegendComponent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__DataZoomComponent$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataZoom/install.js [app-client] (ecmascript) <export install as DataZoomComponent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$installDataZoomInside$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__DataZoomInsideComponent$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataZoom/installDataZoomInside.js [app-client] (ecmascript) <export install as DataZoomInsideComponent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$installDataZoomSlider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__DataZoomSliderComponent$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataZoom/installDataZoomSlider.js [app-client] (ecmascript) <export install as DataZoomSliderComponent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$visualMap$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__VisualMapComponent$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/visualMap/install.js [app-client] (ecmascript) <export install as VisualMapComponent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$visualMap$2f$installVisualMapContinuous$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__VisualMapContinuousComponent$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/visualMap/installVisualMapContinuous.js [app-client] (ecmascript) <export install as VisualMapContinuousComponent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$visualMap$2f$installVisualMapPiecewise$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__VisualMapPiecewiseComponent$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/visualMap/installVisualMapPiecewise.js [app-client] (ecmascript) <export install as VisualMapPiecewiseComponent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$thumbnail$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__ThumbnailComponent$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/thumbnail/install.js [app-client] (ecmascript) <export install as ThumbnailComponent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$aria$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__AriaComponent$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/aria/install.js [app-client] (ecmascript) <export install as AriaComponent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataset$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__DatasetComponent$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataset/install.js [app-client] (ecmascript) <export install as DatasetComponent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$transform$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__TransformComponent$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/transform/install.js [app-client] (ecmascript) <export install as TransformComponent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$universalTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__installUniversalTransition__as__UniversalTransition$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/animation/universalTransition.js [app-client] (ecmascript) <export installUniversalTransition as UniversalTransition>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$installLabelLayout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__installLabelLayout__as__LabelLayout$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/label/installLabelLayout.js [app-client] (ecmascript) <export installLabelLayout as LabelLayout>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$installBreak$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__installAxisBreak__as__AxisBreak$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axis/installBreak.js [app-client] (ecmascript) <export installAxisBreak as AxisBreak>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$cartesian$2f$legacyContainLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__installLegacyGridContainLabel__as__LegacyGridContainLabel$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/cartesian/legacyContainLabel.js [app-client] (ecmascript) <export installLegacyGridContainLabel as LegacyGridContainLabel>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$scatter$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__installScatterJitter__as__ScatterJitter$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/scatter/install.js [app-client] (ecmascript) <export installScatterJitter as ScatterJitter>");
;
;
;
;
;
;
// -----------------
// Render engines
// -----------------
// Render via Canvas.
// echarts.init(dom, null, { renderer: 'canvas' })
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$renderer$2f$installCanvasRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__CanvasRenderer$3e$__["CanvasRenderer"]
]);
// Render via SVG.
// echarts.init(dom, null, { renderer: 'svg' })
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$renderer$2f$installSVGRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__SVGRenderer$3e$__["SVGRenderer"]
]);
// ----------------
// Charts (series)
// ----------------
// All of the series types, for example:
// chart.setOption({
//     series: [{
//         type: 'line' // or 'bar', 'pie', ...
//     }]
// });
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$line$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__LineChart$3e$__["LineChart"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$bar$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__BarChart$3e$__["BarChart"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$pie$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__PieChart$3e$__["PieChart"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$scatter$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__ScatterChart$3e$__["ScatterChart"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$radar$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__RadarChart$3e$__["RadarChart"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$map$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__MapChart$3e$__["MapChart"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$tree$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__TreeChart$3e$__["TreeChart"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$treemap$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__TreemapChart$3e$__["TreemapChart"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$graph$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__GraphChart$3e$__["GraphChart"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$chord$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__ChordChart$3e$__["ChordChart"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$gauge$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__GaugeChart$3e$__["GaugeChart"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$funnel$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__FunnelChart$3e$__["FunnelChart"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$parallel$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__ParallelChart$3e$__["ParallelChart"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$sankey$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__SankeyChart$3e$__["SankeyChart"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$boxplot$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__BoxplotChart$3e$__["BoxplotChart"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$candlestick$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__CandlestickChart$3e$__["CandlestickChart"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$effectScatter$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__EffectScatterChart$3e$__["EffectScatterChart"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$lines$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__LinesChart$3e$__["LinesChart"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$heatmap$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__HeatmapChart$3e$__["HeatmapChart"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$bar$2f$installPictorialBar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__PictorialBarChart$3e$__["PictorialBarChart"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$themeRiver$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__ThemeRiverChart$3e$__["ThemeRiverChart"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$sunburst$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__SunburstChart$3e$__["SunburstChart"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$custom$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__CustomChart$3e$__["CustomChart"]
]);
// -------------------
// Coordinate systems
// -------------------
// All of the axis modules have been included in the
// coordinate system module below, do not need to
// make extra import.
// `cartesian` coordinate system. For some historical
// reasons, it is named as grid, for example:
// chart.setOption({
//     grid: {...},
//     xAxis: {...},
//     yAxis: {...},
//     series: [{...}]
// });
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$grid$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__GridComponent$3e$__["GridComponent"]);
// `polar` coordinate system, for example:
// chart.setOption({
//     polar: {...},
//     radiusAxis: {...},
//     angleAxis: {...},
//     series: [{
//         coordinateSystem: 'polar'
//     }]
// });
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$polar$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__PolarComponent$3e$__["PolarComponent"]);
// `geo` coordinate system, for example:
// chart.setOption({
//     geo: {...},
//     series: [{
//         coordinateSystem: 'geo'
//     }]
// });
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$geo$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__GeoComponent$3e$__["GeoComponent"]);
// `singleAxis` coordinate system (notice, it is a coordinate system
// with only one axis, work for chart like theme river), for example:
// chart.setOption({
//     singleAxis: {...}
//     series: [{type: 'themeRiver', ...}]
// });
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$singleAxis$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__SingleAxisComponent$3e$__["SingleAxisComponent"]);
// `parallel` coordinate system, only work for parallel series, for example:
// chart.setOption({
//     parallel: {...},
//     parallelAxis: [{...}, ...],
//     series: [{
//         type: 'parallel'
//     }]
// });
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$parallel$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__ParallelComponent$3e$__["ParallelComponent"]);
// `calendar` coordinate system. for example,
// chart.setOption({
//     calendar: {...},
//     series: [{
//         coordinateSystem: 'calendar'
//     }]
// );
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$calendar$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__CalendarComponent$3e$__["CalendarComponent"]);
// `matrix` coordinate system. for example,
// chart.setOption({
//     matrix: {...},
//     series: [{
//         coordinateSystem: 'matrix'
//     }]
// );
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$matrix$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__MatrixComponent$3e$__["MatrixComponent"]);
// ------------------
// Other components
// ------------------
// `graphic` component, for example:
// chart.setOption({
//     graphic: {...}
// });
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$graphic$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__GraphicComponent$3e$__["GraphicComponent"]);
// `toolbox` component, for example:
// chart.setOption({
//     toolbox: {...}
// });
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__ToolboxComponent$3e$__["ToolboxComponent"]);
// `tooltip` component, for example:
// chart.setOption({
//     tooltip: {...}
// });
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__TooltipComponent$3e$__["TooltipComponent"]);
// `axisPointer` component, for example:
// chart.setOption({
//     tooltip: {axisPointer: {...}, ...}
// });
// Or
// chart.setOption({
//     axisPointer: {...}
// });
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__AxisPointerComponent$3e$__["AxisPointerComponent"]);
// `brush` component, for example:
// chart.setOption({
//     brush: {...}
// });
// Or
// chart.setOption({
//     tooltip: {feature: {brush: {...}}
// })
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$brush$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__BrushComponent$3e$__["BrushComponent"]);
// `title` component, for example:
// chart.setOption({
//     title: {...}
// });
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$title$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__TitleComponent$3e$__["TitleComponent"]);
// `timeline` component, for example:
// chart.setOption({
//     timeline: {...}
// });
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$timeline$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__TimelineComponent$3e$__["TimelineComponent"]);
// `markPoint` component, for example:
// chart.setOption({
//     series: [{markPoint: {...}}]
// });
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$installMarkPoint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__MarkPointComponent$3e$__["MarkPointComponent"]);
// `markLine` component, for example:
// chart.setOption({
//     series: [{markLine: {...}}]
// });
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$installMarkLine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__MarkLineComponent$3e$__["MarkLineComponent"]);
// `markArea` component, for example:
// chart.setOption({
//     series: [{markArea: {...}}]
// });
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$installMarkArea$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__MarkAreaComponent$3e$__["MarkAreaComponent"]);
// `legend` component not scrollable. for example:
// chart.setOption({
//     legend: {...}
// });
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$legend$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__LegendComponent$3e$__["LegendComponent"]);
// `dataZoom` component including both `dataZoomInside` and `dataZoomSlider`.
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__DataZoomComponent$3e$__["DataZoomComponent"]);
// `dataZoom` component providing drag, pinch, wheel behaviors
// inside coordinate system, for example:
// chart.setOption({
//     dataZoom: {type: 'inside'}
// });
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$installDataZoomInside$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__DataZoomInsideComponent$3e$__["DataZoomInsideComponent"]);
// `dataZoom` component providing a slider bar, for example:
// chart.setOption({
//     dataZoom: {type: 'slider'}
// });
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$installDataZoomSlider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__DataZoomSliderComponent$3e$__["DataZoomSliderComponent"]);
// `visualMap` component including both `visualMapContinuous` and `visualMapPiecewise`.
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$visualMap$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__VisualMapComponent$3e$__["VisualMapComponent"]);
// `visualMap` component providing continuous bar, for example:
// chart.setOption({
//     visualMap: {type: 'continuous'}
// });
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$visualMap$2f$installVisualMapContinuous$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__VisualMapContinuousComponent$3e$__["VisualMapContinuousComponent"]);
// `visualMap` component providing pieces bar, for example:
// chart.setOption({
//     visualMap: {type: 'piecewise'}
// });
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$visualMap$2f$installVisualMapPiecewise$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__VisualMapPiecewiseComponent$3e$__["VisualMapPiecewiseComponent"]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$thumbnail$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__ThumbnailComponent$3e$__["ThumbnailComponent"]);
// `aria` component providing aria, for example:
// chart.setOption({
//     aria: {...}
// });
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$aria$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__AriaComponent$3e$__["AriaComponent"]);
// dataset transform
// chart.setOption({
//     dataset: {
//          transform: []
//     }
// });
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$transform$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__TransformComponent$3e$__["TransformComponent"]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataset$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__DatasetComponent$3e$__["DatasetComponent"]);
// universal transition
// chart.setOption({
//     series: {
//         universalTransition: { enabled: true }
//     }
// })
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$universalTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__installUniversalTransition__as__UniversalTransition$3e$__["UniversalTransition"]);
// label layout
// chart.setOption({
//     series: {
//         labelLayout: { hideOverlap: true }
//     }
// })
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$installLabelLayout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__installLabelLayout__as__LabelLayout$3e$__["LabelLayout"]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$installBreak$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__installAxisBreak__as__AxisBreak$3e$__["AxisBreak"]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$cartesian$2f$legacyContainLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__installLegacyGridContainLabel__as__LegacyGridContainLabel$3e$__["LegacyGridContainLabel"]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$scatter$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__installScatterJitter__as__ScatterJitter$3e$__["ScatterJitter"]);
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Axis",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Axis"],
    "ChartView",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartView"],
    "ComponentModel",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentModel"],
    "ComponentView",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentView"],
    "List",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["List"],
    "Model",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Model"],
    "PRIORITY",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRIORITY"],
    "SeriesModel",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SeriesModel"],
    "color",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["color"],
    "connect",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["connect"],
    "dataTool",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataTool"],
    "dependencies",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dependencies"],
    "disConnect",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["disConnect"],
    "disconnect",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["disconnect"],
    "dispose",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dispose"],
    "env",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"],
    "extendChartView",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extendChartView"],
    "extendComponentModel",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extendComponentModel"],
    "extendComponentView",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extendComponentView"],
    "extendSeriesModel",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extendSeriesModel"],
    "format",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["format"],
    "getCoordinateSystemDimensions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoordinateSystemDimensions"],
    "getInstanceByDom",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInstanceByDom"],
    "getInstanceById",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInstanceById"],
    "getMap",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMap"],
    "graphic",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["graphic"],
    "helper",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["helper"],
    "init",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["init"],
    "innerDrawElementOnCanvas",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["innerDrawElementOnCanvas"],
    "matrix",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["matrix"],
    "number",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
    "parseGeoJSON",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseGeoJSON"],
    "parseGeoJson",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseGeoJson"],
    "registerAction",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerAction"],
    "registerCoordinateSystem",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerCoordinateSystem"],
    "registerCustomSeries",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerCustomSeries"],
    "registerLayout",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerLayout"],
    "registerLoading",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerLoading"],
    "registerLocale",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerLocale"],
    "registerMap",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerMap"],
    "registerPostInit",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerPostInit"],
    "registerPostUpdate",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerPostUpdate"],
    "registerPreprocessor",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerPreprocessor"],
    "registerProcessor",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerProcessor"],
    "registerTheme",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerTheme"],
    "registerTransform",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerTransform"],
    "registerUpdateLifecycle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerUpdateLifecycle"],
    "registerVisual",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerVisual"],
    "setCanvasCreator",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setCanvasCreator"],
    "setPlatformAPI",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setPlatformAPI"],
    "throttle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["throttle"],
    "time",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["time"],
    "use",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"],
    "util",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["util"],
    "vector",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vector"],
    "version",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["version"],
    "zrUtil",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zrUtil"],
    "zrender",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zrender"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/export/core.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=6e80b_echarts_index_1474f9ac.js.map