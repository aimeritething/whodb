module.exports = [
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/graph/categoryFilter.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
*/ __turbopack_context__.s([
    "default",
    ()=>categoryFilter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
;
function categoryFilter(ecModel) {
    var legendModels = ecModel.findComponents({
        mainType: 'legend'
    });
    if (!legendModels || !legendModels.length) {
        return;
    }
    ecModel.eachSeriesByType('graph', function(graphSeries) {
        var categoriesData = graphSeries.getCategoriesData();
        var graph = graphSeries.getGraph();
        var data = graph.data;
        var categoryNames = categoriesData.mapArray(categoriesData.getName);
        data.filterSelf(function(idx) {
            var model = data.getItemModel(idx);
            var category = model.getShallow('category');
            if (category != null) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNumber"])(category)) {
                    category = categoryNames[category];
                }
                // If in any legend component the status is not selected.
                for(var i = 0; i < legendModels.length; i++){
                    if (!legendModels[i].isSelected(category)) {
                        return false;
                    }
                }
            }
            return true;
        });
    });
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/graph/categoryVisual.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
*/ __turbopack_context__.s([
    "default",
    ()=>categoryVisual
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
;
function categoryVisual(ecModel) {
    var paletteScope = {};
    ecModel.eachSeriesByType('graph', function(seriesModel) {
        var categoriesData = seriesModel.getCategoriesData();
        var data = seriesModel.getData();
        var categoryNameIdxMap = {};
        categoriesData.each(function(idx) {
            var name = categoriesData.getName(idx);
            // Add prefix to avoid conflict with Object.prototype.
            categoryNameIdxMap['ec-' + name] = idx;
            var itemModel = categoriesData.getItemModel(idx);
            var style = itemModel.getModel('itemStyle').getItemStyle();
            if (!style.fill) {
                // Get color from palette.
                style.fill = seriesModel.getColorFromPalette(name, paletteScope);
            }
            categoriesData.setItemVisual(idx, 'style', style);
            var symbolVisualList = [
                'symbol',
                'symbolSize',
                'symbolKeepAspect'
            ];
            for(var i = 0; i < symbolVisualList.length; i++){
                var symbolVisual = itemModel.getShallow(symbolVisualList[i], true);
                if (symbolVisual != null) {
                    categoriesData.setItemVisual(idx, symbolVisualList[i], symbolVisual);
                }
            }
        });
        // Assign category color to visual
        if (categoriesData.count()) {
            data.each(function(idx) {
                var model = data.getItemModel(idx);
                var categoryIdx = model.getShallow('category');
                if (categoryIdx != null) {
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(categoryIdx)) {
                        categoryIdx = categoryNameIdxMap['ec-' + categoryIdx];
                    }
                    var categoryStyle = categoriesData.getItemVisual(categoryIdx, 'style');
                    var style = data.ensureUniqueItemVisual(idx, 'style');
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extend"])(style, categoryStyle);
                    var visualList = [
                        'symbol',
                        'symbolSize',
                        'symbolKeepAspect'
                    ];
                    for(var i = 0; i < visualList.length; i++){
                        data.setItemVisual(idx, visualList[i], categoriesData.getItemVisual(categoryIdx, visualList[i]));
                    }
                }
            });
        }
    });
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/graph/edgeVisual.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
*/ __turbopack_context__.s([
    "default",
    ()=>graphEdgeVisual
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
;
function normalize(a) {
    if (!(a instanceof Array)) {
        a = [
            a,
            a
        ];
    }
    return a;
}
function graphEdgeVisual(ecModel) {
    ecModel.eachSeriesByType('graph', function(seriesModel) {
        var graph = seriesModel.getGraph();
        var edgeData = seriesModel.getEdgeData();
        var symbolType = normalize(seriesModel.get('edgeSymbol'));
        var symbolSize = normalize(seriesModel.get('edgeSymbolSize'));
        // const colorQuery = ['lineStyle', 'color'] as const;
        // const opacityQuery = ['lineStyle', 'opacity'] as const;
        edgeData.setVisual('fromSymbol', symbolType && symbolType[0]);
        edgeData.setVisual('toSymbol', symbolType && symbolType[1]);
        edgeData.setVisual('fromSymbolSize', symbolSize && symbolSize[0]);
        edgeData.setVisual('toSymbolSize', symbolSize && symbolSize[1]);
        edgeData.setVisual('style', seriesModel.getModel('lineStyle').getLineStyle());
        edgeData.each(function(idx) {
            var itemModel = edgeData.getItemModel(idx);
            var edge = graph.getEdgeByIndex(idx);
            var symbolType = normalize(itemModel.getShallow('symbol', true));
            var symbolSize = normalize(itemModel.getShallow('symbolSize', true));
            // Edge visual must after node visual
            var style = itemModel.getModel('lineStyle').getLineStyle();
            var existsStyle = edgeData.ensureUniqueItemVisual(idx, 'style');
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extend"])(existsStyle, style);
            switch(existsStyle.stroke){
                case 'source':
                    {
                        var nodeStyle = edge.node1.getVisual('style');
                        existsStyle.stroke = nodeStyle && nodeStyle.fill;
                        break;
                    }
                case 'target':
                    {
                        var nodeStyle = edge.node2.getVisual('style');
                        existsStyle.stroke = nodeStyle && nodeStyle.fill;
                        break;
                    }
            }
            symbolType[0] && edge.setVisual('fromSymbol', symbolType[0]);
            symbolType[1] && edge.setVisual('toSymbol', symbolType[1]);
            symbolSize[0] && edge.setVisual('fromSymbolSize', symbolSize[0]);
            symbolSize[1] && edge.setVisual('toSymbolSize', symbolSize[1]);
        });
    });
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/graph/simpleLayoutHelper.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
*/ __turbopack_context__.s([
    "simpleLayout",
    ()=>simpleLayout,
    "simpleLayoutEdge",
    ()=>simpleLayoutEdge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$multipleGraphEdgeHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/helper/multipleGraphEdgeHelper.js [app-ssr] (ecmascript)");
;
;
;
function simpleLayout(seriesModel) {
    var coordSys = seriesModel.coordinateSystem;
    if (coordSys && coordSys.type !== 'view') {
        return;
    }
    var graph = seriesModel.getGraph();
    graph.eachNode(function(node) {
        var model = node.getModel();
        node.setLayout([
            +model.get('x'),
            +model.get('y')
        ]);
    });
    simpleLayoutEdge(graph, seriesModel);
}
function simpleLayoutEdge(graph, seriesModel) {
    graph.eachEdge(function(edge, index) {
        var curveness = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["retrieve3"](edge.getModel().get([
            'lineStyle',
            'curveness'
        ]), -(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$multipleGraphEdgeHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCurvenessForEdge"])(edge, seriesModel, index, true), 0);
        var p1 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clone"](edge.node1.getLayout());
        var p2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clone"](edge.node2.getLayout());
        var points = [
            p1,
            p2
        ];
        if (+curveness) {
            points.push([
                (p1[0] + p2[0]) / 2 - (p1[1] - p2[1]) * curveness,
                (p1[1] + p2[1]) / 2 - (p2[0] - p1[0]) * curveness
            ]);
        }
        edge.setLayout(points);
    });
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/graph/simpleLayout.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
*/ __turbopack_context__.s([
    "default",
    ()=>graphSimpleLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$graph$2f$simpleLayoutHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/graph/simpleLayoutHelper.js [app-ssr] (ecmascript)");
;
;
function graphSimpleLayout(ecModel, api) {
    ecModel.eachSeriesByType('graph', function(seriesModel) {
        var layout = seriesModel.get('layout');
        var coordSys = seriesModel.coordinateSystem;
        if (coordSys && coordSys.type !== 'view') {
            var data_1 = seriesModel.getData();
            var dimensions_1 = [];
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(coordSys.dimensions, function(coordDim) {
                dimensions_1 = dimensions_1.concat(data_1.mapDimensionsAll(coordDim));
            });
            for(var dataIndex = 0; dataIndex < data_1.count(); dataIndex++){
                var value = [];
                var hasValue = false;
                for(var i = 0; i < dimensions_1.length; i++){
                    var val = data_1.get(dimensions_1[i], dataIndex);
                    if (!isNaN(val)) {
                        hasValue = true;
                    }
                    value.push(val);
                }
                if (hasValue) {
                    data_1.setItemLayout(dataIndex, coordSys.dataToPoint(value));
                } else {
                    // Also {Array.<number>}, not undefined to avoid if...else... statement
                    data_1.setItemLayout(dataIndex, [
                        NaN,
                        NaN
                    ]);
                }
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$graph$2f$simpleLayoutHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleLayoutEdge"])(data_1.graph, seriesModel);
        } else if (!layout || layout === 'none') {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$graph$2f$simpleLayoutHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleLayout"])(seriesModel);
        }
    });
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/graph/graphHelper.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
*/ __turbopack_context__.s([
    "getNodeGlobalScale",
    ()=>getNodeGlobalScale,
    "getSymbolSize",
    ()=>getSymbolSize
]);
function getNodeGlobalScale(seriesModel) {
    var coordSys = seriesModel.coordinateSystem;
    if (coordSys.type !== 'view') {
        return 1;
    }
    var nodeScaleRatio = seriesModel.option.nodeScaleRatio;
    var groupZoom = coordSys.scaleX;
    // Scale node when zoom changes
    var roamZoom = coordSys.getZoom();
    var nodeScale = (roamZoom - 1) * nodeScaleRatio + 1;
    return nodeScale / groupZoom;
}
function getSymbolSize(node) {
    var symbolSize = node.getVisual('symbolSize');
    if (symbolSize instanceof Array) {
        symbolSize = (symbolSize[0] + symbolSize[1]) / 2;
    }
    return +symbolSize;
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/graph/circularLayoutHelper.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
*/ __turbopack_context__.s([
    "circularLayout",
    ()=>circularLayout,
    "rotateNodeLabel",
    ()=>rotateNodeLabel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$graph$2f$graphHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/graph/graphHelper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$multipleGraphEdgeHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/helper/multipleGraphEdgeHelper.js [app-ssr] (ecmascript)");
;
;
;
;
var PI = Math.PI;
var _symbolRadiansHalf = [];
function circularLayout(seriesModel, basedOn, draggingNode, pointer) {
    var coordSys = seriesModel.coordinateSystem;
    if (coordSys && coordSys.type !== 'view') {
        return;
    }
    var rect = coordSys.getBoundingRect();
    var nodeData = seriesModel.getData();
    var graph = nodeData.graph;
    var cx = rect.width / 2 + rect.x;
    var cy = rect.height / 2 + rect.y;
    var r = Math.min(rect.width, rect.height) / 2;
    var count = nodeData.count();
    nodeData.setLayout({
        cx: cx,
        cy: cy
    });
    if (!count) {
        return;
    }
    if (draggingNode) {
        var _a = coordSys.pointToData(pointer), tempX = _a[0], tempY = _a[1];
        var v = [
            tempX - cx,
            tempY - cy
        ];
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalize"](v, v);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["scale"](v, v, r);
        draggingNode.setLayout([
            cx + v[0],
            cy + v[1]
        ], true);
        var circularRotateLabel = seriesModel.get([
            'circular',
            'rotateLabel'
        ]);
        rotateNodeLabel(draggingNode, circularRotateLabel, cx, cy);
    }
    _layoutNodesBasedOn[basedOn](seriesModel, graph, nodeData, r, cx, cy, count);
    graph.eachEdge(function(edge, index) {
        var curveness = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["retrieve3"](edge.getModel().get([
            'lineStyle',
            'curveness'
        ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$multipleGraphEdgeHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCurvenessForEdge"])(edge, seriesModel, index), 0);
        var p1 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clone"](edge.node1.getLayout());
        var p2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clone"](edge.node2.getLayout());
        var cp1;
        var x12 = (p1[0] + p2[0]) / 2;
        var y12 = (p1[1] + p2[1]) / 2;
        if (+curveness) {
            curveness *= 3;
            cp1 = [
                cx * curveness + x12 * (1 - curveness),
                cy * curveness + y12 * (1 - curveness)
            ];
        }
        edge.setLayout([
            p1,
            p2,
            cp1
        ]);
    });
}
var _layoutNodesBasedOn = {
    value: function(seriesModel, graph, nodeData, r, cx, cy, count) {
        var angle = 0;
        var sum = nodeData.getSum('value');
        var unitAngle = Math.PI * 2 / (sum || count);
        graph.eachNode(function(node) {
            var value = node.getValue('value');
            var radianHalf = unitAngle * (sum ? value : 1) / 2;
            angle += radianHalf;
            node.setLayout([
                r * Math.cos(angle) + cx,
                r * Math.sin(angle) + cy
            ]);
            angle += radianHalf;
        });
    },
    symbolSize: function(seriesModel, graph, nodeData, r, cx, cy, count) {
        var sumRadian = 0;
        _symbolRadiansHalf.length = count;
        var nodeScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$graph$2f$graphHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNodeGlobalScale"])(seriesModel);
        graph.eachNode(function(node) {
            var symbolSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$graph$2f$graphHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSymbolSize"])(node);
            // Normally this case will not happen, but we still add
            // some the defensive code (2px is an arbitrary value).
            isNaN(symbolSize) && (symbolSize = 2);
            symbolSize < 0 && (symbolSize = 0);
            symbolSize *= nodeScale;
            var symbolRadianHalf = Math.asin(symbolSize / 2 / r);
            // when `symbolSize / 2` is bigger than `r`.
            isNaN(symbolRadianHalf) && (symbolRadianHalf = PI / 2);
            _symbolRadiansHalf[node.dataIndex] = symbolRadianHalf;
            sumRadian += symbolRadianHalf * 2;
        });
        var halfRemainRadian = (2 * PI - sumRadian) / count / 2;
        var angle = 0;
        graph.eachNode(function(node) {
            var radianHalf = halfRemainRadian + _symbolRadiansHalf[node.dataIndex];
            angle += radianHalf;
            // init circular layout for
            // 1. layout undefined node
            // 2. not fixed node
            (!node.getLayout() || !node.getLayout().fixed) && node.setLayout([
                r * Math.cos(angle) + cx,
                r * Math.sin(angle) + cy
            ]);
            angle += radianHalf;
        });
    }
};
function rotateNodeLabel(node, circularRotateLabel, cx, cy) {
    var el = node.getGraphicEl();
    // need to check if el exists. '-' value may not create node element.
    if (!el) {
        return;
    }
    var nodeModel = node.getModel();
    var labelRotate = nodeModel.get([
        'label',
        'rotate'
    ]) || 0;
    var symbolPath = el.getSymbolPath();
    if (circularRotateLabel) {
        var pos = node.getLayout();
        var rad = Math.atan2(pos[1] - cy, pos[0] - cx);
        if (rad < 0) {
            rad = Math.PI * 2 + rad;
        }
        var isLeft = pos[0] < cx;
        if (isLeft) {
            rad = rad - Math.PI;
        }
        var textPosition = isLeft ? 'left' : 'right';
        symbolPath.setTextConfig({
            rotation: -rad,
            position: textPosition,
            origin: 'center'
        });
        var emphasisState = symbolPath.ensureState('emphasis');
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extend"](emphasisState.textConfig || (emphasisState.textConfig = {}), {
            position: textPosition
        });
    } else {
        symbolPath.setTextConfig({
            rotation: labelRotate *= Math.PI / 180
        });
    }
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/graph/circularLayout.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
*/ __turbopack_context__.s([
    "default",
    ()=>graphCircularLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$graph$2f$circularLayoutHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/graph/circularLayoutHelper.js [app-ssr] (ecmascript)");
;
function graphCircularLayout(ecModel) {
    ecModel.eachSeriesByType('graph', function(seriesModel) {
        if (seriesModel.get('layout') === 'circular') {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$graph$2f$circularLayoutHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["circularLayout"])(seriesModel, 'symbolSize');
        }
    });
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/graph/forceHelper.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
*/ /*
* A third-party license is embedded for some of the code in this file:
* Some formulas were originally copied from "d3.js" with some
* modifications made for this project.
* (See more details in the comment of the method "step" below.)
* The use of the source code of this file is also subject to the terms
* and consitions of the license of "d3.js" (BSD-3Clause, see
* </licenses/LICENSE-d3>).
*/ __turbopack_context__.s([
    "forceLayout",
    ()=>forceLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/vector.js [app-ssr] (ecmascript)");
;
var scaleAndAdd = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["scaleAndAdd"];
function forceLayout(inNodes, inEdges, opts) {
    var nodes = inNodes;
    var edges = inEdges;
    var rect = opts.rect;
    var width = rect.width;
    var height = rect.height;
    var center = [
        rect.x + width / 2,
        rect.y + height / 2
    ];
    // let scale = opts.scale || 1;
    var gravity = opts.gravity == null ? 0.1 : opts.gravity;
    // for (let i = 0; i < edges.length; i++) {
    //     let e = edges[i];
    //     let n1 = e.n1;
    //     let n2 = e.n2;
    //     n1.edges = n1.edges || [];
    //     n2.edges = n2.edges || [];
    //     n1.edges.push(e);
    //     n2.edges.push(e);
    // }
    // Init position
    for(var i = 0; i < nodes.length; i++){
        var n = nodes[i];
        if (!n.p) {
            n.p = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"](width * (Math.random() - 0.5) + center[0], height * (Math.random() - 0.5) + center[1]);
        }
        n.pp = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clone"](n.p);
        n.edges = null;
    }
    // Formula in 'Graph Drawing by Force-directed Placement'
    // let k = scale * Math.sqrt(width * height / nodes.length);
    // let k2 = k * k;
    var initialFriction = opts.friction == null ? 0.6 : opts.friction;
    var friction = initialFriction;
    var beforeStepCallback;
    var afterStepCallback;
    return {
        warmUp: function() {
            friction = initialFriction * 0.8;
        },
        setFixed: function(idx) {
            nodes[idx].fixed = true;
        },
        setUnfixed: function(idx) {
            nodes[idx].fixed = false;
        },
        /**
     * Before step hook
     */ beforeStep: function(cb) {
            beforeStepCallback = cb;
        },
        /**
     * After step hook
     */ afterStep: function(cb) {
            afterStepCallback = cb;
        },
        /**
     * Some formulas were originally copied from "d3.js"
     * https://github.com/d3/d3/blob/b516d77fb8566b576088e73410437494717ada26/src/layout/force.js
     * with some modifications made for this project.
     * See the license statement at the head of this file.
     */ step: function(cb) {
            beforeStepCallback && beforeStepCallback(nodes, edges);
            var v12 = [];
            var nLen = nodes.length;
            for(var i = 0; i < edges.length; i++){
                var e = edges[i];
                if (e.ignoreForceLayout) {
                    continue;
                }
                var n1 = e.n1;
                var n2 = e.n2;
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sub"](v12, n2.p, n1.p);
                var d = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["len"](v12) - e.d;
                var w = n2.w / (n1.w + n2.w);
                if (isNaN(w)) {
                    w = 0;
                }
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalize"](v12, v12);
                !n1.fixed && scaleAndAdd(n1.p, n1.p, v12, w * d * friction);
                !n2.fixed && scaleAndAdd(n2.p, n2.p, v12, -(1 - w) * d * friction);
            }
            // Gravity
            for(var i = 0; i < nLen; i++){
                var n = nodes[i];
                if (!n.fixed) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sub"](v12, center, n.p);
                    // let d = vec2.len(v12);
                    // vec2.scale(v12, v12, 1 / d);
                    // let gravityFactor = gravity;
                    scaleAndAdd(n.p, n.p, v12, gravity * friction);
                }
            }
            // Repulsive
            // PENDING
            for(var i = 0; i < nLen; i++){
                var n1 = nodes[i];
                for(var j = i + 1; j < nLen; j++){
                    var n2 = nodes[j];
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sub"](v12, n2.p, n1.p);
                    var d = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["len"](v12);
                    if (d === 0) {
                        // Random repulse
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["set"](v12, Math.random() - 0.5, Math.random() - 0.5);
                        d = 1;
                    }
                    var repFact = (n1.rep + n2.rep) / d / d;
                    !n1.fixed && scaleAndAdd(n1.pp, n1.pp, v12, repFact);
                    !n2.fixed && scaleAndAdd(n2.pp, n2.pp, v12, -repFact);
                }
            }
            var v = [];
            for(var i = 0; i < nLen; i++){
                var n = nodes[i];
                if (!n.fixed) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sub"](v, n.p, n.pp);
                    scaleAndAdd(n.p, n.p, v, friction);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["copy"](n.pp, n.p);
                }
            }
            friction = friction * 0.992;
            var finished = friction < 0.01;
            afterStepCallback && afterStepCallback(nodes, edges, finished);
            cb && cb(finished);
        }
    };
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/graph/forceLayout.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
*/ __turbopack_context__.s([
    "default",
    ()=>graphForceLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$graph$2f$forceHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/graph/forceHelper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$graph$2f$simpleLayoutHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/graph/simpleLayoutHelper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$graph$2f$circularLayoutHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/graph/circularLayoutHelper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/number.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$multipleGraphEdgeHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/helper/multipleGraphEdgeHelper.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
function graphForceLayout(ecModel) {
    ecModel.eachSeriesByType('graph', function(graphSeries) {
        var coordSys = graphSeries.coordinateSystem;
        if (coordSys && coordSys.type !== 'view') {
            return;
        }
        if (graphSeries.get('layout') === 'force') {
            var preservedPoints_1 = graphSeries.preservedPoints || {};
            var graph_1 = graphSeries.getGraph();
            var nodeData_1 = graph_1.data;
            var edgeData = graph_1.edgeData;
            var forceModel = graphSeries.getModel('force');
            var initLayout = forceModel.get('initLayout');
            if (graphSeries.preservedPoints) {
                nodeData_1.each(function(idx) {
                    var id = nodeData_1.getId(idx);
                    nodeData_1.setItemLayout(idx, preservedPoints_1[id] || [
                        NaN,
                        NaN
                    ]);
                });
            } else if (!initLayout || initLayout === 'none') {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$graph$2f$simpleLayoutHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleLayout"])(graphSeries);
            } else if (initLayout === 'circular') {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$graph$2f$circularLayoutHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["circularLayout"])(graphSeries, 'value');
            }
            var nodeDataExtent_1 = nodeData_1.getDataExtent('value');
            var edgeDataExtent_1 = edgeData.getDataExtent('value');
            // let edgeDataExtent = edgeData.getDataExtent('value');
            var repulsion = forceModel.get('repulsion');
            var edgeLength = forceModel.get('edgeLength');
            var repulsionArr_1 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isArray"](repulsion) ? repulsion : [
                repulsion,
                repulsion
            ];
            var edgeLengthArr_1 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isArray"](edgeLength) ? edgeLength : [
                edgeLength,
                edgeLength
            ];
            // Larger value has smaller length
            edgeLengthArr_1 = [
                edgeLengthArr_1[1],
                edgeLengthArr_1[0]
            ];
            var nodes_1 = nodeData_1.mapArray('value', function(value, idx) {
                var point = nodeData_1.getItemLayout(idx);
                var rep = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["linearMap"])(value, nodeDataExtent_1, repulsionArr_1);
                if (isNaN(rep)) {
                    rep = (repulsionArr_1[0] + repulsionArr_1[1]) / 2;
                }
                return {
                    w: rep,
                    rep: rep,
                    fixed: nodeData_1.getItemModel(idx).get('fixed'),
                    p: !point || isNaN(point[0]) || isNaN(point[1]) ? null : point
                };
            });
            var edges = edgeData.mapArray('value', function(value, idx) {
                var edge = graph_1.getEdgeByIndex(idx);
                var d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["linearMap"])(value, edgeDataExtent_1, edgeLengthArr_1);
                if (isNaN(d)) {
                    d = (edgeLengthArr_1[0] + edgeLengthArr_1[1]) / 2;
                }
                var edgeModel = edge.getModel();
                var curveness = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["retrieve3"](edge.getModel().get([
                    'lineStyle',
                    'curveness'
                ]), -(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$multipleGraphEdgeHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCurvenessForEdge"])(edge, graphSeries, idx, true), 0);
                return {
                    n1: nodes_1[edge.node1.dataIndex],
                    n2: nodes_1[edge.node2.dataIndex],
                    d: d,
                    curveness: curveness,
                    ignoreForceLayout: edgeModel.get('ignoreForceLayout')
                };
            });
            // let coordSys = graphSeries.coordinateSystem;
            var rect = coordSys.getBoundingRect();
            var forceInstance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$graph$2f$forceHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forceLayout"])(nodes_1, edges, {
                rect: rect,
                gravity: forceModel.get('gravity'),
                friction: forceModel.get('friction')
            });
            forceInstance.beforeStep(function(nodes, edges) {
                for(var i = 0, l = nodes.length; i < l; i++){
                    if (nodes[i].fixed) {
                        // Write back to layout instance
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["copy"](nodes[i].p, graph_1.getNodeByIndex(i).getLayout());
                    }
                }
            });
            forceInstance.afterStep(function(nodes, edges, stopped) {
                for(var i = 0, l = nodes.length; i < l; i++){
                    if (!nodes[i].fixed) {
                        graph_1.getNodeByIndex(i).setLayout(nodes[i].p);
                    }
                    preservedPoints_1[nodeData_1.getId(i)] = nodes[i].p;
                }
                for(var i = 0, l = edges.length; i < l; i++){
                    var e = edges[i];
                    var edge = graph_1.getEdgeByIndex(i);
                    var p1 = e.n1.p;
                    var p2 = e.n2.p;
                    var points = edge.getLayout();
                    points = points ? points.slice() : [];
                    points[0] = points[0] || [];
                    points[1] = points[1] || [];
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["copy"](points[0], p1);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["copy"](points[1], p2);
                    if (+e.curveness) {
                        points[2] = [
                            (p1[0] + p2[0]) / 2 - (p1[1] - p2[1]) * e.curveness,
                            (p1[1] + p2[1]) / 2 - (p2[0] - p1[0]) * e.curveness
                        ];
                    }
                    edge.setLayout(points);
                }
            });
            graphSeries.forceLayout = forceInstance;
            graphSeries.preservedPoints = preservedPoints_1;
            // Step to get the layout
            forceInstance.step();
        } else {
            // Remove prev injected forceLayout instance
            graphSeries.forceLayout = null;
        }
    });
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/graph/createView.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
*/ // FIXME Where to create the simple view coordinate system
__turbopack_context__.s([
    "default",
    ()=>createViewCoordSys
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$View$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/View.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/layout.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$bbox$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/bbox.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$CoordinateSystem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/core/CoordinateSystem.js [app-ssr] (ecmascript)");
;
;
;
;
;
function getViewRect(seriesModel, api, aspect) {
    var layoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createBoxLayoutReference"])(seriesModel, api);
    var option = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extend"])(seriesModel.getBoxLayoutParams(), {
        aspect: aspect
    });
    var viewRect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLayoutRect"])(option, layoutRef.refContainer);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["applyPreserveAspect"])(seriesModel, viewRect, aspect);
}
function createViewCoordSys(ecModel, api) {
    var viewList = [];
    ecModel.eachSeriesByType('graph', function(seriesModel) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$CoordinateSystem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["injectCoordSysByOption"])({
            targetModel: seriesModel,
            coordSysType: 'view',
            coordSysProvider: createViewCoordSys,
            isDefaultDataCoordSys: true
        });
        function createViewCoordSys() {
            var data = seriesModel.getData();
            var positions = data.mapArray(function(idx) {
                var itemModel = data.getItemModel(idx);
                return [
                    +itemModel.get('x'),
                    +itemModel.get('y')
                ];
            });
            var min = [];
            var max = [];
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$bbox$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromPoints"](positions, min, max);
            // If width or height is 0
            if (max[0] - min[0] === 0) {
                max[0] += 1;
                min[0] -= 1;
            }
            if (max[1] - min[1] === 0) {
                max[1] += 1;
                min[1] -= 1;
            }
            var aspect = (max[0] - min[0]) / (max[1] - min[1]);
            // FIXME If get view rect after data processed?
            var viewRect = getViewRect(seriesModel, api, aspect);
            // Position may be NaN, use view rect instead
            if (isNaN(aspect)) {
                min = [
                    viewRect.x,
                    viewRect.y
                ];
                max = [
                    viewRect.x + viewRect.width,
                    viewRect.y + viewRect.height
                ];
            }
            var bbWidth = max[0] - min[0];
            var bbHeight = max[1] - min[1];
            var viewCoordSys = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$View$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](null, {
                api: api,
                ecModel: ecModel
            });
            viewCoordSys.zoomLimit = seriesModel.get('scaleLimit');
            viewCoordSys.setBoundingRect(min[0], min[1], bbWidth, bbHeight);
            viewCoordSys.setViewRect(viewRect.x, viewRect.y, viewRect.width, viewRect.height);
            // Update roam info
            viewCoordSys.setCenter(seriesModel.get('center'));
            viewCoordSys.setZoom(seriesModel.get('zoom'));
            viewList.push(viewCoordSys);
            return viewCoordSys;
        }
    });
    return viewList;
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/graph/adjustEdge.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
*/ __turbopack_context__.s([
    "default",
    ()=>adjustEdge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$curve$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/curve.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$graph$2f$graphHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/graph/graphHelper.js [app-ssr] (ecmascript)");
;
;
;
var v1 = [];
var v2 = [];
var v3 = [];
var quadraticAt = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$curve$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["quadraticAt"];
var v2DistSquare = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["distSquare"];
var mathAbs = Math.abs;
function intersectCurveCircle(curvePoints, center, radius) {
    var p0 = curvePoints[0];
    var p1 = curvePoints[1];
    var p2 = curvePoints[2];
    var d = Infinity;
    var t;
    var radiusSquare = radius * radius;
    var interval = 0.1;
    for(var _t = 0.1; _t <= 0.9; _t += 0.1){
        v1[0] = quadraticAt(p0[0], p1[0], p2[0], _t);
        v1[1] = quadraticAt(p0[1], p1[1], p2[1], _t);
        var diff = mathAbs(v2DistSquare(v1, center) - radiusSquare);
        if (diff < d) {
            d = diff;
            t = _t;
        }
    }
    // Assume the segment is monotone，Find root through Bisection method
    // At most 32 iteration
    for(var i = 0; i < 32; i++){
        // let prev = t - interval;
        var next = t + interval;
        // v1[0] = quadraticAt(p0[0], p1[0], p2[0], prev);
        // v1[1] = quadraticAt(p0[1], p1[1], p2[1], prev);
        v2[0] = quadraticAt(p0[0], p1[0], p2[0], t);
        v2[1] = quadraticAt(p0[1], p1[1], p2[1], t);
        v3[0] = quadraticAt(p0[0], p1[0], p2[0], next);
        v3[1] = quadraticAt(p0[1], p1[1], p2[1], next);
        var diff = v2DistSquare(v2, center) - radiusSquare;
        if (mathAbs(diff) < 1e-2) {
            break;
        }
        // let prevDiff = v2DistSquare(v1, center) - radiusSquare;
        var nextDiff = v2DistSquare(v3, center) - radiusSquare;
        interval /= 2;
        if (diff < 0) {
            if (nextDiff >= 0) {
                t = t + interval;
            } else {
                t = t - interval;
            }
        } else {
            if (nextDiff >= 0) {
                t = t - interval;
            } else {
                t = t + interval;
            }
        }
    }
    return t;
}
function adjustEdge(graph, scale) {
    var tmp0 = [];
    var quadraticSubdivide = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$curve$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["quadraticSubdivide"];
    var pts = [
        [],
        [],
        []
    ];
    var pts2 = [
        [],
        []
    ];
    var v = [];
    scale /= 2;
    graph.eachEdge(function(edge, idx) {
        var linePoints = edge.getLayout();
        var fromSymbol = edge.getVisual('fromSymbol');
        var toSymbol = edge.getVisual('toSymbol');
        if (!linePoints.__original) {
            linePoints.__original = [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clone"](linePoints[0]),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clone"](linePoints[1])
            ];
            if (linePoints[2]) {
                linePoints.__original.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clone"](linePoints[2]));
            }
        }
        var originalPoints = linePoints.__original;
        // Quadratic curve
        if (linePoints[2] != null) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["copy"](pts[0], originalPoints[0]);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["copy"](pts[1], originalPoints[2]);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["copy"](pts[2], originalPoints[1]);
            if (fromSymbol && fromSymbol !== 'none') {
                var symbolSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$graph$2f$graphHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSymbolSize"])(edge.node1);
                var t = intersectCurveCircle(pts, originalPoints[0], symbolSize * scale);
                // Subdivide and get the second
                quadraticSubdivide(pts[0][0], pts[1][0], pts[2][0], t, tmp0);
                pts[0][0] = tmp0[3];
                pts[1][0] = tmp0[4];
                quadraticSubdivide(pts[0][1], pts[1][1], pts[2][1], t, tmp0);
                pts[0][1] = tmp0[3];
                pts[1][1] = tmp0[4];
            }
            if (toSymbol && toSymbol !== 'none') {
                var symbolSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$graph$2f$graphHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSymbolSize"])(edge.node2);
                var t = intersectCurveCircle(pts, originalPoints[1], symbolSize * scale);
                // Subdivide and get the first
                quadraticSubdivide(pts[0][0], pts[1][0], pts[2][0], t, tmp0);
                pts[1][0] = tmp0[1];
                pts[2][0] = tmp0[2];
                quadraticSubdivide(pts[0][1], pts[1][1], pts[2][1], t, tmp0);
                pts[1][1] = tmp0[1];
                pts[2][1] = tmp0[2];
            }
            // Copy back to layout
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["copy"](linePoints[0], pts[0]);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["copy"](linePoints[1], pts[2]);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["copy"](linePoints[2], pts[1]);
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["copy"](pts2[0], originalPoints[0]);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["copy"](pts2[1], originalPoints[1]);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sub"](v, pts2[1], pts2[0]);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalize"](v, v);
            if (fromSymbol && fromSymbol !== 'none') {
                var symbolSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$graph$2f$graphHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSymbolSize"])(edge.node1);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["scaleAndAdd"](pts2[0], pts2[0], v, symbolSize * scale);
            }
            if (toSymbol && toSymbol !== 'none') {
                var symbolSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$graph$2f$graphHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSymbolSize"])(edge.node2);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["scaleAndAdd"](pts2[1], pts2[1], v, -symbolSize * scale);
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["copy"](linePoints[0], pts2[0]);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["copy"](linePoints[1], pts2[1]);
        }
    });
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/graph/GraphView.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
*/ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$SymbolDraw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/helper/SymbolDraw.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$LineDraw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/helper/LineDraw.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$RoamController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/helper/RoamController.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$roamHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/helper/roamHelper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Group.js [app-ssr] (ecmascript) <export default as Group>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/animation/basicTransition.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$graph$2f$adjustEdge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/graph/adjustEdge.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$graph$2f$graphHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/graph/graphHelper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/view/Chart.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/innerStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$graph$2f$simpleLayoutHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/graph/simpleLayoutHelper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$graph$2f$circularLayoutHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/graph/circularLayoutHelper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$LinePath$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/helper/LinePath.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$thumbnailBridge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/helper/thumbnailBridge.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function isViewCoordSys(coordSys) {
    return coordSys.type === 'view';
}
var GraphView = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(GraphView, _super);
    function GraphView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = GraphView.type;
        return _this;
    }
    GraphView.prototype.init = function(ecModel, api) {
        var symbolDraw = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$SymbolDraw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]();
        var lineDraw = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$LineDraw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]();
        var group = this.group;
        var mainGroup = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__["Group"]();
        this._controller = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$RoamController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](api.getZr());
        this._controllerHost = {
            target: mainGroup
        };
        mainGroup.add(symbolDraw.group);
        mainGroup.add(lineDraw.group);
        group.add(mainGroup);
        this._symbolDraw = symbolDraw;
        this._lineDraw = lineDraw;
        this._mainGroup = mainGroup;
        this._firstRender = true;
    };
    GraphView.prototype.render = function(seriesModel, ecModel, api) {
        var _this = this;
        var coordSys = seriesModel.coordinateSystem;
        var isForceLayout = false;
        this._model = seriesModel;
        this._api = api;
        this._active = true;
        var thumbnailInfo = this._getThumbnailInfo();
        if (thumbnailInfo) {
            thumbnailInfo.bridge.reset(api);
        }
        var symbolDraw = this._symbolDraw;
        var lineDraw = this._lineDraw;
        if (isViewCoordSys(coordSys)) {
            var groupNewProp = {
                x: coordSys.x,
                y: coordSys.y,
                scaleX: coordSys.scaleX,
                scaleY: coordSys.scaleY
            };
            if (this._firstRender) {
                this._mainGroup.attr(groupNewProp);
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateProps"](this._mainGroup, groupNewProp, seriesModel);
            }
        }
        // Fix edge contact point with node
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$graph$2f$adjustEdge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(seriesModel.getGraph(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$graph$2f$graphHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNodeGlobalScale"])(seriesModel));
        var data = seriesModel.getData();
        symbolDraw.updateData(data);
        var edgeData = seriesModel.getEdgeData();
        // TODO: TYPE
        lineDraw.updateData(edgeData);
        this._updateNodeAndLinkScale();
        this._updateController(null, seriesModel, api);
        clearTimeout(this._layoutTimeout);
        var forceLayout = seriesModel.forceLayout;
        var layoutAnimation = seriesModel.get([
            'force',
            'layoutAnimation'
        ]);
        if (forceLayout) {
            isForceLayout = true;
            this._startForceLayoutIteration(forceLayout, api, layoutAnimation);
        }
        var layout = seriesModel.get('layout');
        data.graph.eachNode(function(node) {
            var idx = node.dataIndex;
            var el = node.getGraphicEl();
            var itemModel = node.getModel();
            if (!el) {
                return;
            }
            // Update draggable
            el.off('drag').off('dragend');
            var draggable = itemModel.get('draggable');
            if (draggable) {
                el.on('drag', function(e) {
                    switch(layout){
                        case 'force':
                            forceLayout.warmUp();
                            !_this._layouting && _this._startForceLayoutIteration(forceLayout, api, layoutAnimation);
                            forceLayout.setFixed(idx);
                            // Write position back to layout
                            data.setItemLayout(idx, [
                                el.x,
                                el.y
                            ]);
                            break;
                        case 'circular':
                            data.setItemLayout(idx, [
                                el.x,
                                el.y
                            ]);
                            // mark node fixed
                            node.setLayout({
                                fixed: true
                            }, true);
                            // recalculate circular layout
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$graph$2f$circularLayoutHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["circularLayout"])(seriesModel, 'symbolSize', node, [
                                e.offsetX,
                                e.offsetY
                            ]);
                            _this.updateLayout(seriesModel);
                            break;
                        case 'none':
                        default:
                            data.setItemLayout(idx, [
                                el.x,
                                el.y
                            ]);
                            // update edge
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$graph$2f$simpleLayoutHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleLayoutEdge"])(seriesModel.getGraph(), seriesModel);
                            _this.updateLayout(seriesModel);
                            break;
                    }
                }).on('dragend', function() {
                    if (forceLayout) {
                        forceLayout.setUnfixed(idx);
                    }
                });
            }
            el.setDraggable(draggable, !!itemModel.get('cursor'));
            var focus = itemModel.get([
                'emphasis',
                'focus'
            ]);
            if (focus === 'adjacency') {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getECData"])(el).focus = node.getAdjacentDataIndices();
            }
        });
        data.graph.eachEdge(function(edge) {
            var el = edge.getGraphicEl();
            var focus = edge.getModel().get([
                'emphasis',
                'focus'
            ]);
            if (!el) {
                return;
            }
            if (focus === 'adjacency') {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getECData"])(el).focus = {
                    edge: [
                        edge.dataIndex
                    ],
                    node: [
                        edge.node1.dataIndex,
                        edge.node2.dataIndex
                    ]
                };
            }
        });
        var circularRotateLabel = seriesModel.get('layout') === 'circular' && seriesModel.get([
            'circular',
            'rotateLabel'
        ]);
        var cx = data.getLayout('cx');
        var cy = data.getLayout('cy');
        data.graph.eachNode(function(node) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$graph$2f$circularLayoutHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotateNodeLabel"])(node, circularRotateLabel, cx, cy);
        });
        this._firstRender = false;
        // Force layout will render thumbnail when layout is finished.
        if (!isForceLayout) {
            this._renderThumbnail(seriesModel, api, this._symbolDraw, this._lineDraw);
        }
    };
    GraphView.prototype.dispose = function() {
        this.remove();
        this._controller && this._controller.dispose();
        this._controllerHost = null;
    };
    GraphView.prototype._startForceLayoutIteration = function(forceLayout, api, layoutAnimation) {
        var self = this;
        var firstRendered = false;
        (function step() {
            forceLayout.step(function(stopped) {
                self.updateLayout(self._model);
                if (stopped || !firstRendered) {
                    firstRendered = true;
                    self._renderThumbnail(self._model, api, self._symbolDraw, self._lineDraw);
                }
                (self._layouting = !stopped) && (layoutAnimation ? self._layoutTimeout = setTimeout(step, 16) : step());
            });
        })();
    };
    GraphView.prototype._updateController = function(clipRect, seriesModel, api) {
        var controller = this._controller;
        var controllerHost = this._controllerHost;
        var coordSys = seriesModel.coordinateSystem;
        if (!isViewCoordSys(coordSys)) {
            controller.disable();
            return;
        }
        controller.enable(seriesModel.get('roam'), {
            api: api,
            zInfo: {
                component: seriesModel
            },
            triggerInfo: {
                roamTrigger: seriesModel.get('roamTrigger'),
                isInSelf: function(e, x, y) {
                    return coordSys.containPoint([
                        x,
                        y
                    ]);
                },
                isInClip: function(e, x, y) {
                    return !clipRect || clipRect.contain(x, y);
                }
            }
        });
        controllerHost.zoomLimit = seriesModel.get('scaleLimit');
        controllerHost.zoom = coordSys.getZoom();
        controller.off('pan').off('zoom').on('pan', function(e) {
            api.dispatchAction({
                seriesId: seriesModel.id,
                type: 'graphRoam',
                dx: e.dx,
                dy: e.dy
            });
        }).on('zoom', function(e) {
            api.dispatchAction({
                seriesId: seriesModel.id,
                type: 'graphRoam',
                zoom: e.scale,
                originX: e.originX,
                originY: e.originY
            });
        });
    };
    /**
   * A performance shortcut - called by action handler to update the view directly
   * without any data/visual processing (which are assumed to be unchanged), while
   * ensuring consistent behavior between internal and external action triggers.
   */ GraphView.prototype.updateViewOnPan = function(seriesModel, api, params) {
        if (!this._active) {
            return;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$roamHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateViewOnPan"])(this._controllerHost, params.dx, params.dy);
        this._updateThumbnailWindow();
    };
    /**
   * A performance shortcut - called by action handler to update the view directly
   * without any data/visual processing (which are assumed to be unchanged), while
   * ensuring consistent behavior between internal and external action triggers.
   */ GraphView.prototype.updateViewOnZoom = function(seriesModel, api, params) {
        if (!this._active) {
            return;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$roamHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateViewOnZoom"])(this._controllerHost, params.zoom, params.originX, params.originY);
        this._updateNodeAndLinkScale();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$graph$2f$adjustEdge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(seriesModel.getGraph(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$graph$2f$graphHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNodeGlobalScale"])(seriesModel));
        this._lineDraw.updateLayout();
        // Only update label layout on zoom
        api.updateLabelLayout();
        this._updateThumbnailWindow();
    };
    GraphView.prototype._updateNodeAndLinkScale = function() {
        var seriesModel = this._model;
        var data = seriesModel.getData();
        var nodeScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$graph$2f$graphHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNodeGlobalScale"])(seriesModel);
        data.eachItemGraphicEl(function(el, idx) {
            el && el.setSymbolScale(nodeScale);
        });
    };
    GraphView.prototype.updateLayout = function(seriesModel) {
        if (!this._active) {
            return;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$graph$2f$adjustEdge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(seriesModel.getGraph(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$graph$2f$graphHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNodeGlobalScale"])(seriesModel));
        this._symbolDraw.updateLayout();
        this._lineDraw.updateLayout();
    };
    GraphView.prototype.remove = function() {
        this._active = false;
        clearTimeout(this._layoutTimeout);
        this._layouting = false;
        this._layoutTimeout = null;
        this._symbolDraw && this._symbolDraw.remove();
        this._lineDraw && this._lineDraw.remove();
        this._controller && this._controller.disable();
    };
    /**
   * Get thumbnail data structure only if supported.
   */ GraphView.prototype._getThumbnailInfo = function() {
        var model = this._model;
        var coordSys = model.coordinateSystem;
        if (coordSys.type !== 'view') {
            return;
        }
        var bridge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$thumbnailBridge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getThumbnailBridge"])(model);
        if (!bridge) {
            return;
        }
        return {
            bridge: bridge,
            coordSys: coordSys
        };
    };
    GraphView.prototype._updateThumbnailWindow = function() {
        var info = this._getThumbnailInfo();
        if (info) {
            info.bridge.updateWindow(info.coordSys.transform, this._api);
        }
    };
    GraphView.prototype._renderThumbnail = function(seriesModel, api, symbolDraw, lineDraw) {
        var info = this._getThumbnailInfo();
        if (!info) {
            return;
        }
        var bridgeGroup = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__["Group"]();
        var symbolNodes = symbolDraw.group.children();
        var lineNodes = lineDraw.group.children();
        var lineGroup = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__["Group"]();
        var symbolGroup = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__["Group"]();
        bridgeGroup.add(symbolGroup);
        bridgeGroup.add(lineGroup);
        // TODO: reuse elemenents for performance in large graph?
        for(var i = 0; i < symbolNodes.length; i++){
            var node = symbolNodes[i];
            var sub = node.children()[0];
            var x = node.x;
            var y = node.y;
            var subShape = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clone"])(sub.shape);
            var shape = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extend"])(subShape, {
                width: sub.scaleX,
                height: sub.scaleY,
                x: x - sub.scaleX / 2,
                y: y - sub.scaleY / 2
            });
            var style = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clone"])(sub.style);
            var subThumbnail = new sub.constructor({
                shape: shape,
                style: style,
                z2: 151
            });
            symbolGroup.add(subThumbnail);
        }
        for(var i = 0; i < lineNodes.length; i++){
            var node = lineNodes[i];
            var line = node.children()[0];
            var style = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clone"])(line.style);
            var shape = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clone"])(line.shape);
            var lineThumbnail = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$LinePath$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]({
                style: style,
                shape: shape,
                z2: 151
            });
            lineGroup.add(lineThumbnail);
        }
        info.bridge.renderContent({
            api: api,
            roamType: seriesModel.get('roam'),
            viewportRect: null,
            group: bridgeGroup,
            targetTrans: info.coordSys.transform
        });
    };
    GraphView.type = 'graph';
    return GraphView;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = GraphView;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/graph/GraphSeries.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
*/ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$SeriesData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/data/SeriesData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/Model.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$createGraphFromNodeEdge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/helper/createGraphFromNodeEdge.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$LegendVisualProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/LegendVisualProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Series$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/Series.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$tooltipMarkup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/tooltip/tooltipMarkup.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$seriesFormatTooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/tooltip/seriesFormatTooltip.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$multipleGraphEdgeHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/helper/multipleGraphEdgeHelper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/tokens.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
var GraphSeriesModel = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(GraphSeriesModel, _super);
    function GraphSeriesModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = GraphSeriesModel.type;
        _this.hasSymbolVisual = true;
        return _this;
    }
    GraphSeriesModel.prototype.init = function(option) {
        _super.prototype.init.apply(this, arguments);
        var self = this;
        function getCategoriesData() {
            return self._categoriesData;
        }
        // Provide data for legend select
        this.legendVisualProvider = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$LegendVisualProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](getCategoriesData, getCategoriesData);
        this.fillDataTextStyle(option.edges || option.links);
        this._updateCategoriesData();
    };
    GraphSeriesModel.prototype.mergeOption = function(option) {
        _super.prototype.mergeOption.apply(this, arguments);
        this.fillDataTextStyle(option.edges || option.links);
        this._updateCategoriesData();
    };
    GraphSeriesModel.prototype.mergeDefaultAndTheme = function(option) {
        _super.prototype.mergeDefaultAndTheme.apply(this, arguments);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultEmphasis"])(option, 'edgeLabel', [
            'show'
        ]);
    };
    GraphSeriesModel.prototype.getInitialData = function(option, ecModel) {
        var edges = option.edges || option.links || [];
        var nodes = option.data || option.nodes || [];
        var self = this;
        if ("TURBOPACK compile-time truthy", 1) {
            // auto curveness
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$multipleGraphEdgeHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initCurvenessList"])(this);
            var graph = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$createGraphFromNodeEdge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(nodes, edges, this, true, beforeLink);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"](graph.edges, function(edge) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$multipleGraphEdgeHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEdgeMapForCurveness"])(edge.node1, edge.node2, this, edge.dataIndex);
            }, this);
            return graph.data;
        }
        //TURBOPACK unreachable
        ;
        function beforeLink(nodeData, edgeData) {
            // Overwrite nodeData.getItemModel to
            nodeData.wrapMethod('getItemModel', function(model) {
                var categoriesModels = self._categoriesModels;
                var categoryIdx = model.getShallow('category');
                var categoryModel = categoriesModels[categoryIdx];
                if (categoryModel) {
                    categoryModel.parentModel = model.parentModel;
                    model.parentModel = categoryModel;
                }
                return model;
            });
            // TODO Inherit resolveParentPath by default in Model#getModel?
            var oldGetModel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].prototype.getModel;
            function newGetModel(path, parentModel) {
                var model = oldGetModel.call(this, path, parentModel);
                model.resolveParentPath = resolveParentPath;
                return model;
            }
            edgeData.wrapMethod('getItemModel', function(model) {
                model.resolveParentPath = resolveParentPath;
                model.getModel = newGetModel;
                return model;
            });
            function resolveParentPath(pathArr) {
                if (pathArr && (pathArr[0] === 'label' || pathArr[1] === 'label')) {
                    var newPathArr = pathArr.slice();
                    if (pathArr[0] === 'label') {
                        newPathArr[0] = 'edgeLabel';
                    } else if (pathArr[1] === 'label') {
                        newPathArr[1] = 'edgeLabel';
                    }
                    return newPathArr;
                }
                return pathArr;
            }
        }
    };
    GraphSeriesModel.prototype.getGraph = function() {
        return this.getData().graph;
    };
    GraphSeriesModel.prototype.getEdgeData = function() {
        return this.getGraph().edgeData;
    };
    GraphSeriesModel.prototype.getCategoriesData = function() {
        return this._categoriesData;
    };
    GraphSeriesModel.prototype.formatTooltip = function(dataIndex, multipleSeries, dataType) {
        if (dataType === 'edge') {
            var nodeData = this.getData();
            var params = this.getDataParams(dataIndex, dataType);
            var edge = nodeData.graph.getEdgeByIndex(dataIndex);
            var sourceName = nodeData.getName(edge.node1.dataIndex);
            var targetName = nodeData.getName(edge.node2.dataIndex);
            var nameArr = [];
            sourceName != null && nameArr.push(sourceName);
            targetName != null && nameArr.push(targetName);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$tooltipMarkup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createTooltipMarkup"])('nameValue', {
                name: nameArr.join(' > '),
                value: params.value,
                noValue: params.value == null
            });
        }
        // dataType === 'node' or empty
        var nodeMarkup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$seriesFormatTooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultSeriesFormatTooltip"])({
            series: this,
            dataIndex: dataIndex,
            multipleSeries: multipleSeries
        });
        return nodeMarkup;
    };
    GraphSeriesModel.prototype._updateCategoriesData = function() {
        var categories = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["map"](this.option.categories || [], function(category) {
            // Data must has value
            return category.value != null ? category : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extend"]({
                value: 0
            }, category);
        });
        var categoriesData = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$SeriesData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]([
            'value'
        ], this);
        categoriesData.initData(categories);
        this._categoriesData = categoriesData;
        this._categoriesModels = categoriesData.mapArray(function(idx) {
            return categoriesData.getItemModel(idx);
        });
    };
    GraphSeriesModel.prototype.setZoom = function(zoom) {
        this.option.zoom = zoom;
    };
    GraphSeriesModel.prototype.setCenter = function(center) {
        this.option.center = center;
    };
    GraphSeriesModel.prototype.isAnimationEnabled = function() {
        return _super.prototype.isAnimationEnabled.call(this) && !(this.get('layout') === 'force' && this.get([
            'force',
            'layoutAnimation'
        ]));
    };
    GraphSeriesModel.type = 'series.graph';
    GraphSeriesModel.dependencies = [
        'grid',
        'polar',
        'geo',
        'singleAxis',
        'calendar'
    ];
    GraphSeriesModel.defaultOption = {
        // zlevel: 0,
        z: 2,
        coordinateSystem: 'view',
        // Default option for all coordinate systems
        // xAxisIndex: 0,
        // yAxisIndex: 0,
        // polarIndex: 0,
        // geoIndex: 0,
        legendHoverLink: true,
        layout: null,
        // Configuration of circular layout
        circular: {
            rotateLabel: false
        },
        // Configuration of force directed layout
        force: {
            initLayout: null,
            // Node repulsion. Can be an array to represent range.
            repulsion: [
                0,
                50
            ],
            gravity: 0.1,
            // Initial friction
            friction: 0.6,
            // Edge length. Can be an array to represent range.
            edgeLength: 30,
            layoutAnimation: true
        },
        left: 'center',
        top: 'center',
        // right: null,
        // bottom: null,
        // width: '80%',
        // height: '80%',
        symbol: 'circle',
        symbolSize: 10,
        edgeSymbol: [
            'none',
            'none'
        ],
        edgeSymbolSize: 10,
        edgeLabel: {
            position: 'middle',
            distance: 5
        },
        draggable: false,
        roam: false,
        // Default on center of graph
        center: null,
        zoom: 1,
        // Symbol size scale ratio in roam
        nodeScaleRatio: 0.6,
        // cursor: null,
        // categories: [],
        // data: []
        // Or
        // nodes: []
        //
        // links: []
        // Or
        // edges: []
        label: {
            show: false,
            formatter: '{b}'
        },
        itemStyle: {},
        lineStyle: {
            // Don't use tokens.color.border because of the opacity
            color: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].color.neutral50,
            width: 1,
            opacity: 0.5
        },
        emphasis: {
            scale: true,
            label: {
                show: true
            }
        },
        select: {
            itemStyle: {
                borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].color.primary
            }
        }
    };
    return GraphSeriesModel;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Series$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = GraphSeriesModel;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/graph/install.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
*/ __turbopack_context__.s([
    "install",
    ()=>install
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$graph$2f$categoryFilter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/graph/categoryFilter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$graph$2f$categoryVisual$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/graph/categoryVisual.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$graph$2f$edgeVisual$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/graph/edgeVisual.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$graph$2f$simpleLayout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/graph/simpleLayout.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$graph$2f$circularLayout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/graph/circularLayout.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$graph$2f$forceLayout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/graph/forceLayout.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$graph$2f$createView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/graph/createView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$View$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/View.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$graph$2f$GraphView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/graph/GraphView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$graph$2f$GraphSeries$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/graph/GraphSeries.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$roamHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/helper/roamHelper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
function install(registers) {
    registers.registerChartView(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$graph$2f$GraphView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    registers.registerSeriesModel(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$graph$2f$GraphSeries$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    registers.registerProcessor(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$graph$2f$categoryFilter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    registers.registerVisual(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$graph$2f$categoryVisual$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    registers.registerVisual(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$graph$2f$edgeVisual$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    registers.registerLayout(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$graph$2f$simpleLayout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    registers.registerLayout(registers.PRIORITY.VISUAL.POST_CHART_LAYOUT, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$graph$2f$circularLayout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    registers.registerLayout(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$graph$2f$forceLayout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    registers.registerCoordinateSystem('graphView', {
        dimensions: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$View$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dimensions,
        create: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$graph$2f$createView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
    });
    // Register legacy focus actions
    registers.registerAction({
        type: 'focusNodeAdjacency',
        event: 'focusNodeAdjacency',
        update: 'series:focusNodeAdjacency'
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"]);
    registers.registerAction({
        type: 'unfocusNodeAdjacency',
        event: 'unfocusNodeAdjacency',
        update: 'series:unfocusNodeAdjacency'
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"]);
    // Register roam action.
    registers.registerAction({
        type: 'graphRoam',
        event: 'graphRoam',
        update: 'none'
    }, function(payload, ecModel, api) {
        ecModel.eachComponent({
            mainType: 'series',
            query: payload
        }, function(seriesModel) {
            var graphView = api.getViewOfSeriesModel(seriesModel);
            if (graphView) {
                if (payload.dx != null && payload.dy != null) {
                    graphView.updateViewOnPan(seriesModel, api, payload);
                }
                if (payload.zoom != null && payload.originX != null && payload.originY != null) {
                    graphView.updateViewOnZoom(seriesModel, api, payload);
                }
            }
            var coordSys = seriesModel.coordinateSystem;
            var res = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$roamHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateCenterAndZoomInAction"])(coordSys, payload, seriesModel.get('scaleLimit'));
            seriesModel.setCenter && seriesModel.setCenter(res.center);
            seriesModel.setZoom && seriesModel.setZoom(res.zoom);
        });
    });
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/graph/install.js [app-ssr] (ecmascript) <export install as GraphChart>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GraphChart",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$graph$2f$install$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["install"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$graph$2f$install$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/graph/install.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=6e80b_echarts_lib_chart_graph_d1149a37._.js.map