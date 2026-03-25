(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/bar/BaseBarSeries.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Series$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/Series.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$createSeriesData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/helper/createSeriesData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
;
;
;
;
var BaseBarSeriesModel = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(BaseBarSeriesModel, _super);
    function BaseBarSeriesModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = BaseBarSeriesModel.type;
        return _this;
    }
    BaseBarSeriesModel.prototype.getInitialData = function(option, ecModel) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$createSeriesData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(null, this, {
            useEncodeDefaulter: true
        });
    };
    BaseBarSeriesModel.prototype.getMarkerPosition = function(value, dims, startingAtTick) {
        var coordSys = this.coordinateSystem;
        if (coordSys && coordSys.clampData) {
            // PENDING if clamp ?
            var clampData_1 = coordSys.clampData(value);
            var pt_1 = coordSys.dataToPoint(clampData_1);
            if (startingAtTick) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(coordSys.getAxes(), function(axis, idx) {
                    // If axis type is category, use tick coords instead
                    if (axis.type === 'category' && dims != null) {
                        var tickCoords = axis.getTicksCoords();
                        var alignTicksWithLabel = axis.getTickModel().get('alignWithLabel');
                        var targetTickId = clampData_1[idx];
                        // The index of rightmost tick of markArea is 1 larger than x1/y1 index
                        var isEnd = dims[idx] === 'x1' || dims[idx] === 'y1';
                        if (isEnd && !alignTicksWithLabel) {
                            targetTickId += 1;
                        }
                        // The only contains one tick, tickCoords is
                        // like [{coord: 0, tickValue: 0}, {coord: 0}]
                        // to the length should always be larger than 1
                        if (tickCoords.length < 2) {
                            return;
                        } else if (tickCoords.length === 2) {
                            // The left value and right value of the axis are
                            // the same. coord is 0 in both items. Use the max
                            // value of the axis as the coord
                            pt_1[idx] = axis.toGlobalCoord(axis.getExtent()[isEnd ? 1 : 0]);
                            return;
                        }
                        var leftCoord = void 0;
                        var coord = void 0;
                        var stepTickValue = 1;
                        for(var i = 0; i < tickCoords.length; i++){
                            var tickCoord = tickCoords[i].coord;
                            // The last item of tickCoords doesn't contain
                            // tickValue
                            var tickValue = i === tickCoords.length - 1 ? tickCoords[i - 1].tickValue + stepTickValue : tickCoords[i].tickValue;
                            if (tickValue === targetTickId) {
                                coord = tickCoord;
                                break;
                            } else if (tickValue < targetTickId) {
                                leftCoord = tickCoord;
                            } else if (leftCoord != null && tickValue > targetTickId) {
                                coord = (tickCoord + leftCoord) / 2;
                                break;
                            }
                            if (i === 1) {
                                // Here we assume the step of category axes is
                                // the same
                                stepTickValue = tickValue - tickCoords[0].tickValue;
                            }
                        }
                        if (coord == null) {
                            if (!leftCoord) {
                                // targetTickId is smaller than all tick ids in the
                                // visible area, use the leftmost tick coord
                                coord = tickCoords[0].coord;
                            } else if (leftCoord) {
                                // targetTickId is larger than all tick ids in the
                                // visible area, use the rightmost tick coord
                                coord = tickCoords[tickCoords.length - 1].coord;
                            }
                        }
                        pt_1[idx] = axis.toGlobalCoord(coord);
                    }
                });
            } else {
                var data = this.getData();
                var offset = data.getLayout('offset');
                var size = data.getLayout('size');
                var offsetIndex = coordSys.getBaseAxis().isHorizontal() ? 0 : 1;
                pt_1[offsetIndex] += offset + size / 2;
            }
            return pt_1;
        }
        return [
            NaN,
            NaN
        ];
    };
    BaseBarSeriesModel.type = 'series.__base_bar__';
    BaseBarSeriesModel.defaultOption = {
        // zlevel: 0,
        z: 2,
        coordinateSystem: 'cartesian2d',
        legendHoverLink: true,
        // stack: null
        // Cartesian coordinate system
        // xAxisIndex: 0,
        // yAxisIndex: 0,
        barMinHeight: 0,
        barMinAngle: 0,
        // cursor: null,
        large: false,
        largeThreshold: 400,
        progressive: 3e3,
        progressiveChunkMode: 'mod',
        defaultBarGap: '10%'
    };
    return BaseBarSeriesModel;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Series$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Series$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].registerClass(BaseBarSeriesModel);
const __TURBOPACK__default__export__ = BaseBarSeriesModel;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/bar/BarSeries.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$bar$2f$BaseBarSeries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/bar/BaseBarSeries.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$createSeriesData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/helper/createSeriesData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/component.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/tokens.js [app-client] (ecmascript)");
;
;
;
;
;
var BarSeriesModel = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(BarSeriesModel, _super);
    function BarSeriesModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = BarSeriesModel.type;
        return _this;
    }
    BarSeriesModel.prototype.getInitialData = function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$createSeriesData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(null, this, {
            useEncodeDefaulter: true,
            createInvertedIndices: !!this.get('realtimeSort', true) || null
        });
    };
    /**
   * @override
   */ BarSeriesModel.prototype.getProgressive = function() {
        // Do not support progressive in normal mode.
        return this.get('large') ? this.get('progressive') : false;
    };
    /**
   * @override
   */ BarSeriesModel.prototype.getProgressiveThreshold = function() {
        // Do not support progressive in normal mode.
        var progressiveThreshold = this.get('progressiveThreshold');
        var largeThreshold = this.get('largeThreshold');
        if (largeThreshold > progressiveThreshold) {
            progressiveThreshold = largeThreshold;
        }
        return progressiveThreshold;
    };
    BarSeriesModel.prototype.brushSelector = function(dataIndex, data, selectors) {
        return selectors.rect(data.getItemLayout(dataIndex));
    };
    BarSeriesModel.type = 'series.bar';
    BarSeriesModel.dependencies = [
        'grid',
        'polar'
    ];
    BarSeriesModel.defaultOption = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inheritDefaultOption"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$bar$2f$BaseBarSeries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].defaultOption, {
        // If clipped
        // Only available on cartesian2d
        clip: true,
        roundCap: false,
        showBackground: false,
        backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)',
            borderColor: null,
            borderWidth: 0,
            borderType: 'solid',
            borderRadius: 0,
            shadowBlur: 0,
            shadowColor: null,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            opacity: 1
        },
        select: {
            itemStyle: {
                borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].color.primary,
                borderWidth: 2
            }
        },
        realtimeSort: false
    });
    return BarSeriesModel;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$bar$2f$BaseBarSeries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = BarSeriesModel;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/bar/BarView.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.29.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Path$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Path.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Group.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Rect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rect$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Rect.js [app-client] (ecmascript) <export default as Rect>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Sector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sector$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Sector.js [app-client] (ecmascript) <export default as Sector>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/animation/basicTransition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/graphic.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/innerStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/states.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/label/labelStyle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$throttle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/throttle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$createClipPathFromCoordSys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/helper/createClipPathFromCoordSys.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$shape$2f$sausage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/shape/sausage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/view/Chart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$CoordinateSystem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/CoordinateSystem.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$labelHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/helper/labelHelper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/log.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$sectorLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/label/sectorLabel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$sectorHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/helper/sectorHelper.js [app-client] (ecmascript)");
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
;
;
;
var mathMax = Math.max;
var mathMin = Math.min;
function getClipArea(coord, data) {
    var coordSysClipArea = coord.getArea && coord.getArea();
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$CoordinateSystem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCoordinateSystemType"])(coord, 'cartesian2d')) {
        var baseAxis = coord.getBaseAxis();
        // When boundaryGap is false or using time axis. bar may exceed the grid.
        // We should not clip this part.
        // See test/bar2.html
        if (baseAxis.type !== 'category' || !baseAxis.onBand) {
            var expandWidth = data.getLayout('bandWidth');
            if (baseAxis.isHorizontal()) {
                coordSysClipArea.x -= expandWidth;
                coordSysClipArea.width += expandWidth * 2;
            } else {
                coordSysClipArea.y -= expandWidth;
                coordSysClipArea.height += expandWidth * 2;
            }
        }
    }
    return coordSysClipArea;
}
var BarView = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(BarView, _super);
    function BarView() {
        var _this = _super.call(this) || this;
        _this.type = BarView.type;
        _this._isFirstFrame = true;
        return _this;
    }
    BarView.prototype.render = function(seriesModel, ecModel, api, payload) {
        this._model = seriesModel;
        this._removeOnRenderedListener(api);
        this._updateDrawMode(seriesModel);
        var coordinateSystemType = seriesModel.get('coordinateSystem');
        if (coordinateSystemType === 'cartesian2d' || coordinateSystemType === 'polar') {
            // Clear previously rendered progressive elements.
            this._progressiveEls = null;
            this._isLargeDraw ? this._renderLarge(seriesModel, ecModel, api) : this._renderNormal(seriesModel, ecModel, api, payload);
        } else if ("TURBOPACK compile-time truthy", 1) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["warn"])('Only cartesian2d and polar supported for bar.');
        }
    };
    BarView.prototype.incrementalPrepareRender = function(seriesModel) {
        this._clear();
        this._updateDrawMode(seriesModel);
        // incremental also need to clip, otherwise might be overlow.
        // But must not set clip in each frame, otherwise all of the children will be marked redraw.
        this._updateLargeClip(seriesModel);
    };
    BarView.prototype.incrementalRender = function(params, seriesModel) {
        // Reset
        this._progressiveEls = [];
        // Do not support progressive in normal mode.
        this._incrementalRenderLarge(params, seriesModel);
    };
    BarView.prototype.eachRendered = function(cb) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["traverseElements"])(this._progressiveEls || this.group, cb);
    };
    BarView.prototype._updateDrawMode = function(seriesModel) {
        var isLargeDraw = seriesModel.pipelineContext.large;
        if (this._isLargeDraw == null || isLargeDraw !== this._isLargeDraw) {
            this._isLargeDraw = isLargeDraw;
            this._clear();
        }
    };
    BarView.prototype._renderNormal = function(seriesModel, ecModel, api, payload) {
        var group = this.group;
        var data = seriesModel.getData();
        var oldData = this._data;
        var coord = seriesModel.coordinateSystem;
        var baseAxis = coord.getBaseAxis();
        var isHorizontalOrRadial;
        if (coord.type === 'cartesian2d') {
            isHorizontalOrRadial = baseAxis.isHorizontal();
        } else if (coord.type === 'polar') {
            isHorizontalOrRadial = baseAxis.dim === 'angle';
        }
        var animationModel = seriesModel.isAnimationEnabled() ? seriesModel : null;
        var realtimeSortCfg = shouldRealtimeSort(seriesModel, coord);
        if (realtimeSortCfg) {
            this._enableRealtimeSort(realtimeSortCfg, data, api);
        }
        var needsClip = seriesModel.get('clip', true) || realtimeSortCfg;
        var coordSysClipArea = getClipArea(coord, data);
        // If there is clipPath created in large mode. Remove it.
        group.removeClipPath();
        // We don't use clipPath in normal mode because we needs a perfect animation
        // And don't want the label are clipped.
        var roundCap = seriesModel.get('roundCap', true);
        var drawBackground = seriesModel.get('showBackground', true);
        var backgroundModel = seriesModel.getModel('backgroundStyle');
        var barBorderRadius = backgroundModel.get('borderRadius') || 0;
        var bgEls = [];
        var oldBgEls = this._backgroundEls;
        var isInitSort = payload && payload.isInitSort;
        var isChangeOrder = payload && payload.type === 'changeAxisOrder';
        function createBackground(dataIndex) {
            var bgLayout = getLayout[coord.type](data, dataIndex);
            if (!bgLayout) {
                return null;
            }
            var bgEl = createBackgroundEl(coord, isHorizontalOrRadial, bgLayout);
            bgEl.useStyle(backgroundModel.getItemStyle());
            // Only cartesian2d support borderRadius.
            if (coord.type === 'cartesian2d') {
                bgEl.setShape('r', barBorderRadius);
            } else {
                bgEl.setShape('cornerRadius', barBorderRadius);
            }
            bgEls[dataIndex] = bgEl;
            return bgEl;
        }
        ;
        data.diff(oldData).add(function(dataIndex) {
            var itemModel = data.getItemModel(dataIndex);
            var layout = getLayout[coord.type](data, dataIndex, itemModel);
            if (!layout) {
                return;
            }
            if (drawBackground) {
                createBackground(dataIndex);
            }
            // If dataZoom in filteMode: 'empty', the baseValue can be set as NaN in "axisProxy".
            if (!data.hasValue(dataIndex) || !isValidLayout[coord.type](layout)) {
                return;
            }
            var isClipped = false;
            if (needsClip) {
                // Clip will modify the layout params.
                // And return a boolean to determine if the shape are fully clipped.
                isClipped = clip[coord.type](coordSysClipArea, layout);
            }
            var el = elementCreator[coord.type](seriesModel, data, dataIndex, layout, isHorizontalOrRadial, animationModel, baseAxis.model, false, roundCap);
            if (realtimeSortCfg) {
                /**
         * Force label animation because even if the element is
         * ignored because it's clipped, it may not be clipped after
         * changing order. Then, if not using forceLabelAnimation,
         * the label animation was never started, in which case,
         * the label will be the final value and doesn't have label
         * animation.
         */ el.forceLabelAnimation = true;
            }
            updateStyle(el, data, dataIndex, itemModel, layout, seriesModel, isHorizontalOrRadial, coord.type === 'polar');
            if (isInitSort) {
                el.attr({
                    shape: layout
                });
            } else if (realtimeSortCfg) {
                updateRealtimeAnimation(realtimeSortCfg, animationModel, el, layout, dataIndex, isHorizontalOrRadial, false, false);
            } else {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initProps"])(el, {
                    shape: layout
                }, seriesModel, dataIndex);
            }
            data.setItemGraphicEl(dataIndex, el);
            group.add(el);
            el.ignore = isClipped;
        }).update(function(newIndex, oldIndex) {
            var itemModel = data.getItemModel(newIndex);
            var layout = getLayout[coord.type](data, newIndex, itemModel);
            if (!layout) {
                return;
            }
            if (drawBackground) {
                var bgEl = void 0;
                if (oldBgEls.length === 0) {
                    bgEl = createBackground(oldIndex);
                } else {
                    bgEl = oldBgEls[oldIndex];
                    bgEl.useStyle(backgroundModel.getItemStyle());
                    // Only cartesian2d support borderRadius.
                    if (coord.type === 'cartesian2d') {
                        bgEl.setShape('r', barBorderRadius);
                    } else {
                        bgEl.setShape('cornerRadius', barBorderRadius);
                    }
                    bgEls[newIndex] = bgEl;
                }
                var bgLayout = getLayout[coord.type](data, newIndex);
                var shape = createBackgroundShape(isHorizontalOrRadial, bgLayout, coord);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateProps"])(bgEl, {
                    shape: shape
                }, animationModel, newIndex);
            }
            var el = oldData.getItemGraphicEl(oldIndex);
            if (!data.hasValue(newIndex) || !isValidLayout[coord.type](layout)) {
                group.remove(el);
                return;
            }
            var isClipped = false;
            if (needsClip) {
                isClipped = clip[coord.type](coordSysClipArea, layout);
                if (isClipped) {
                    group.remove(el);
                }
            }
            var roundCapChanged = el && (el.type === 'sector' && roundCap || el.type === 'sausage' && !roundCap);
            if (roundCapChanged) {
                // roundCap changed, there is no way to use animation from a `sector` to a `sausage` shape,
                // so remove the old one and create a new shape
                el && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeElementWithFadeOut"])(el, seriesModel, oldIndex);
                el = null;
            }
            if (!el) {
                el = elementCreator[coord.type](seriesModel, data, newIndex, layout, isHorizontalOrRadial, animationModel, baseAxis.model, true, roundCap);
            } else {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveOldStyle"])(el);
            }
            if (realtimeSortCfg) {
                el.forceLabelAnimation = true;
            }
            if (isChangeOrder) {
                var textEl = el.getTextContent();
                if (textEl) {
                    var labelInnerStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["labelInner"])(textEl);
                    if (labelInnerStore.prevValue != null) {
                        /**
             * Set preValue to be value so that no new label
             * should be started, otherwise, it will take a full
             * `animationDurationUpdate` time to finish the
             * animation, which is not expected.
             */ labelInnerStore.prevValue = labelInnerStore.value;
                    }
                }
            } else {
                updateStyle(el, data, newIndex, itemModel, layout, seriesModel, isHorizontalOrRadial, coord.type === 'polar');
            }
            if (isInitSort) {
                el.attr({
                    shape: layout
                });
            } else if (realtimeSortCfg) {
                updateRealtimeAnimation(realtimeSortCfg, animationModel, el, layout, newIndex, isHorizontalOrRadial, true, isChangeOrder);
            } else {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateProps"])(el, {
                    shape: layout
                }, seriesModel, newIndex, null);
            }
            data.setItemGraphicEl(newIndex, el);
            el.ignore = isClipped;
            group.add(el);
        }).remove(function(dataIndex) {
            var el = oldData.getItemGraphicEl(dataIndex);
            el && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeElementWithFadeOut"])(el, seriesModel, dataIndex);
        }).execute();
        var bgGroup = this._backgroundGroup || (this._backgroundGroup = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]());
        bgGroup.removeAll();
        for(var i = 0; i < bgEls.length; ++i){
            bgGroup.add(bgEls[i]);
        }
        group.add(bgGroup);
        this._backgroundEls = bgEls;
        this._data = data;
    };
    BarView.prototype._renderLarge = function(seriesModel, ecModel, api) {
        this._clear();
        createLarge(seriesModel, this.group);
        this._updateLargeClip(seriesModel);
    };
    BarView.prototype._incrementalRenderLarge = function(params, seriesModel) {
        this._removeBackground();
        createLarge(seriesModel, this.group, this._progressiveEls, true);
    };
    BarView.prototype._updateLargeClip = function(seriesModel) {
        // Use clipPath in large mode.
        var clipPath = seriesModel.get('clip', true) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$createClipPathFromCoordSys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClipPath"])(seriesModel.coordinateSystem, false, seriesModel);
        var group = this.group;
        if (clipPath) {
            group.setClipPath(clipPath);
        } else {
            group.removeClipPath();
        }
    };
    BarView.prototype._enableRealtimeSort = function(realtimeSortCfg, data, api) {
        var _this = this;
        // If no data in the first frame, wait for data to initSort
        if (!data.count()) {
            return;
        }
        var baseAxis = realtimeSortCfg.baseAxis;
        if (this._isFirstFrame) {
            this._dispatchInitSort(data, realtimeSortCfg, api);
            this._isFirstFrame = false;
        } else {
            var orderMapping_1 = function(idx) {
                var el = data.getItemGraphicEl(idx);
                var shape = el && el.shape;
                return shape && // The result should be consistent with the initial sort by data value.
                // Do not support the case that both positive and negative exist.
                Math.abs(baseAxis.isHorizontal() ? shape.height : shape.width) || 0;
            };
            this._onRendered = function() {
                _this._updateSortWithinSameData(data, orderMapping_1, baseAxis, api);
            };
            api.getZr().on('rendered', this._onRendered);
        }
    };
    BarView.prototype._dataSort = function(data, baseAxis, orderMapping) {
        var info = [];
        data.each(data.mapDimension(baseAxis.dim), function(ordinalNumber, dataIdx) {
            var mappedValue = orderMapping(dataIdx);
            mappedValue = mappedValue == null ? NaN : mappedValue;
            info.push({
                dataIndex: dataIdx,
                mappedValue: mappedValue,
                ordinalNumber: ordinalNumber
            });
        });
        info.sort(function(a, b) {
            // If NaN, it will be treated as min val.
            return b.mappedValue - a.mappedValue;
        });
        return {
            ordinalNumbers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"])(info, function(item) {
                return item.ordinalNumber;
            })
        };
    };
    BarView.prototype._isOrderChangedWithinSameData = function(data, orderMapping, baseAxis) {
        var scale = baseAxis.scale;
        var ordinalDataDim = data.mapDimension(baseAxis.dim);
        var lastValue = Number.MAX_VALUE;
        for(var tickNum = 0, len = scale.getOrdinalMeta().categories.length; tickNum < len; ++tickNum){
            var rawIdx = data.rawIndexOf(ordinalDataDim, scale.getRawOrdinalNumber(tickNum));
            var value = rawIdx < 0 ? Number.MIN_VALUE : orderMapping(data.indexOfRawIndex(rawIdx));
            if (value > lastValue) {
                return true;
            }
            lastValue = value;
        }
        return false;
    };
    /*
   * Consider the case when A and B changed order, whose representing
   * bars are both out of sight, we don't wish to trigger reorder action
   * as long as the order in the view doesn't change.
   */ BarView.prototype._isOrderDifferentInView = function(orderInfo, baseAxis) {
        var scale = baseAxis.scale;
        var extent = scale.getExtent();
        var tickNum = Math.max(0, extent[0]);
        var tickMax = Math.min(extent[1], scale.getOrdinalMeta().categories.length - 1);
        for(; tickNum <= tickMax; ++tickNum){
            if (orderInfo.ordinalNumbers[tickNum] !== scale.getRawOrdinalNumber(tickNum)) {
                return true;
            }
        }
    };
    BarView.prototype._updateSortWithinSameData = function(data, orderMapping, baseAxis, api) {
        if (!this._isOrderChangedWithinSameData(data, orderMapping, baseAxis)) {
            return;
        }
        var sortInfo = this._dataSort(data, baseAxis, orderMapping);
        if (this._isOrderDifferentInView(sortInfo, baseAxis)) {
            this._removeOnRenderedListener(api);
            api.dispatchAction({
                type: 'changeAxisOrder',
                componentType: baseAxis.dim + 'Axis',
                axisId: baseAxis.index,
                sortInfo: sortInfo
            });
        }
    };
    BarView.prototype._dispatchInitSort = function(data, realtimeSortCfg, api) {
        var baseAxis = realtimeSortCfg.baseAxis;
        var sortResult = this._dataSort(data, baseAxis, function(dataIdx) {
            return data.get(data.mapDimension(realtimeSortCfg.otherAxis.dim), dataIdx);
        });
        api.dispatchAction({
            type: 'changeAxisOrder',
            componentType: baseAxis.dim + 'Axis',
            isInitSort: true,
            axisId: baseAxis.index,
            sortInfo: sortResult
        });
    };
    BarView.prototype.remove = function(ecModel, api) {
        this._clear(this._model);
        this._removeOnRenderedListener(api);
    };
    BarView.prototype.dispose = function(ecModel, api) {
        this._removeOnRenderedListener(api);
    };
    BarView.prototype._removeOnRenderedListener = function(api) {
        if (this._onRendered) {
            api.getZr().off('rendered', this._onRendered);
            this._onRendered = null;
        }
    };
    BarView.prototype._clear = function(model) {
        var group = this.group;
        var data = this._data;
        if (model && model.isAnimationEnabled() && data && !this._isLargeDraw) {
            this._removeBackground();
            this._backgroundEls = [];
            data.eachItemGraphicEl(function(el) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeElementWithFadeOut"])(el, model, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getECData"])(el).dataIndex);
            });
        } else {
            group.removeAll();
        }
        this._data = null;
        this._isFirstFrame = true;
    };
    BarView.prototype._removeBackground = function() {
        this.group.remove(this._backgroundGroup);
        this._backgroundGroup = null;
    };
    BarView.type = 'bar';
    return BarView;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
var clip = {
    cartesian2d: function(coordSysBoundingRect, layout) {
        var signWidth = layout.width < 0 ? -1 : 1;
        var signHeight = layout.height < 0 ? -1 : 1;
        // Needs positive width and height
        if (signWidth < 0) {
            layout.x += layout.width;
            layout.width = -layout.width;
        }
        if (signHeight < 0) {
            layout.y += layout.height;
            layout.height = -layout.height;
        }
        var coordSysX2 = coordSysBoundingRect.x + coordSysBoundingRect.width;
        var coordSysY2 = coordSysBoundingRect.y + coordSysBoundingRect.height;
        var x = mathMax(layout.x, coordSysBoundingRect.x);
        var x2 = mathMin(layout.x + layout.width, coordSysX2);
        var y = mathMax(layout.y, coordSysBoundingRect.y);
        var y2 = mathMin(layout.y + layout.height, coordSysY2);
        var xClipped = x2 < x;
        var yClipped = y2 < y;
        // When xClipped or yClipped, the element will be marked as `ignore`.
        // But we should also place the element at the edge of the coord sys bounding rect.
        // Because if data changed and the bar shows again, its transition animation
        // will begin at this place.
        layout.x = xClipped && x > coordSysX2 ? x2 : x;
        layout.y = yClipped && y > coordSysY2 ? y2 : y;
        layout.width = xClipped ? 0 : x2 - x;
        layout.height = yClipped ? 0 : y2 - y;
        // Reverse back
        if (signWidth < 0) {
            layout.x += layout.width;
            layout.width = -layout.width;
        }
        if (signHeight < 0) {
            layout.y += layout.height;
            layout.height = -layout.height;
        }
        return xClipped || yClipped;
    },
    polar: function(coordSysClipArea, layout) {
        var signR = layout.r0 <= layout.r ? 1 : -1;
        // Make sure r is larger than r0
        if (signR < 0) {
            var tmp = layout.r;
            layout.r = layout.r0;
            layout.r0 = tmp;
        }
        var r = mathMin(layout.r, coordSysClipArea.r);
        var r0 = mathMax(layout.r0, coordSysClipArea.r0);
        layout.r = r;
        layout.r0 = r0;
        var clipped = r - r0 < 0;
        // Reverse back
        if (signR < 0) {
            var tmp = layout.r;
            layout.r = layout.r0;
            layout.r0 = tmp;
        }
        return clipped;
    }
};
var elementCreator = {
    cartesian2d: function(seriesModel, data, newIndex, layout, isHorizontal, animationModel, axisModel, isUpdate, roundCap) {
        var rect = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Rect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rect$3e$__["Rect"]({
            shape: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extend"])({}, layout),
            z2: 1
        });
        rect.__dataIndex = newIndex;
        rect.name = 'item';
        if (animationModel) {
            var rectShape = rect.shape;
            var animateProperty = isHorizontal ? 'height' : 'width';
            rectShape[animateProperty] = 0;
        }
        return rect;
    },
    polar: function(seriesModel, data, newIndex, layout, isRadial, animationModel, axisModel, isUpdate, roundCap) {
        var ShapeClass = !isRadial && roundCap ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$shape$2f$sausage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Sector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sector$3e$__["Sector"];
        var sector = new ShapeClass({
            shape: layout,
            z2: 1
        });
        sector.name = 'item';
        var positionMap = createPolarPositionMapping(isRadial);
        sector.calculateTextPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$sectorLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSectorCalculateTextPosition"])(positionMap, {
            isRoundCap: ShapeClass === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$shape$2f$sausage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
        });
        // Animation
        if (animationModel) {
            var sectorShape = sector.shape;
            var animateProperty = isRadial ? 'r' : 'endAngle';
            var animateTarget = {};
            sectorShape[animateProperty] = isRadial ? layout.r0 : layout.startAngle;
            animateTarget[animateProperty] = layout[animateProperty];
            (isUpdate ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateProps"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initProps"])(sector, {
                shape: animateTarget
            }, animationModel);
        }
        return sector;
    }
};
function shouldRealtimeSort(seriesModel, coordSys) {
    var realtimeSortOption = seriesModel.get('realtimeSort', true);
    var baseAxis = coordSys.getBaseAxis();
    if ("TURBOPACK compile-time truthy", 1) {
        if (realtimeSortOption) {
            if (baseAxis.type !== 'category') {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["warn"])('`realtimeSort` will not work because this bar series is not based on a category axis.');
            }
            if (coordSys.type !== 'cartesian2d') {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["warn"])('`realtimeSort` will not work because this bar series is not on cartesian2d.');
            }
        }
    }
    if (realtimeSortOption && baseAxis.type === 'category' && coordSys.type === 'cartesian2d') {
        return {
            baseAxis: baseAxis,
            otherAxis: coordSys.getOtherAxis(baseAxis)
        };
    }
}
function updateRealtimeAnimation(realtimeSortCfg, seriesAnimationModel, el, layout, newIndex, isHorizontal, isUpdate, isChangeOrder) {
    var seriesTarget;
    var axisTarget;
    if (isHorizontal) {
        axisTarget = {
            x: layout.x,
            width: layout.width
        };
        seriesTarget = {
            y: layout.y,
            height: layout.height
        };
    } else {
        axisTarget = {
            y: layout.y,
            height: layout.height
        };
        seriesTarget = {
            x: layout.x,
            width: layout.width
        };
    }
    if (!isChangeOrder) {
        // Keep the original growth animation if only axis order changed.
        // Not start a new animation.
        (isUpdate ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateProps"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initProps"])(el, {
            shape: seriesTarget
        }, seriesAnimationModel, newIndex, null);
    }
    var axisAnimationModel = seriesAnimationModel ? realtimeSortCfg.baseAxis.model : null;
    (isUpdate ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateProps"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initProps"])(el, {
        shape: axisTarget
    }, axisAnimationModel, newIndex);
}
function checkPropertiesNotValid(obj, props) {
    for(var i = 0; i < props.length; i++){
        if (!isFinite(obj[props[i]])) {
            return true;
        }
    }
    return false;
}
var rectPropties = [
    'x',
    'y',
    'width',
    'height'
];
var polarPropties = [
    'cx',
    'cy',
    'r',
    'startAngle',
    'endAngle'
];
var isValidLayout = {
    cartesian2d: function(layout) {
        return !checkPropertiesNotValid(layout, rectPropties);
    },
    polar: function(layout) {
        return !checkPropertiesNotValid(layout, polarPropties);
    }
};
var getLayout = {
    // itemModel is only used to get borderWidth, which is not needed
    // when calculating bar background layout.
    cartesian2d: function(data, dataIndex, itemModel) {
        var layout = data.getItemLayout(dataIndex);
        if (!layout) {
            return null;
        }
        var fixedLineWidth = itemModel ? getLineWidth(itemModel, layout) : 0;
        // fix layout with lineWidth
        var signX = layout.width > 0 ? 1 : -1;
        var signY = layout.height > 0 ? 1 : -1;
        return {
            x: layout.x + signX * fixedLineWidth / 2,
            y: layout.y + signY * fixedLineWidth / 2,
            width: layout.width - signX * fixedLineWidth,
            height: layout.height - signY * fixedLineWidth
        };
    },
    polar: function(data, dataIndex, itemModel) {
        var layout = data.getItemLayout(dataIndex);
        return {
            cx: layout.cx,
            cy: layout.cy,
            r0: layout.r0,
            r: layout.r,
            startAngle: layout.startAngle,
            endAngle: layout.endAngle,
            clockwise: layout.clockwise
        };
    }
};
function isZeroOnPolar(layout) {
    return layout.startAngle != null && layout.endAngle != null && layout.startAngle === layout.endAngle;
}
function createPolarPositionMapping(isRadial) {
    return function(isRadial) {
        var arcOrAngle = isRadial ? 'Arc' : 'Angle';
        return function(position) {
            switch(position){
                case 'start':
                case 'insideStart':
                case 'end':
                case 'insideEnd':
                    return position + arcOrAngle;
                default:
                    return position;
            }
        };
    }(isRadial);
}
function updateStyle(el, data, dataIndex, itemModel, layout, seriesModel, isHorizontalOrRadial, isPolar) {
    var style = data.getItemVisual(dataIndex, 'style');
    if (!isPolar) {
        var borderRadius = itemModel.get([
            'itemStyle',
            'borderRadius'
        ]) || 0;
        el.setShape('r', borderRadius);
    } else if (!seriesModel.get('roundCap')) {
        var sectorShape = el.shape;
        var cornerRadius = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$sectorHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSectorCornerRadius"])(itemModel.getModel('itemStyle'), sectorShape, true);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extend"])(sectorShape, cornerRadius);
        el.setShape(sectorShape);
    }
    el.useStyle(style);
    var cursorStyle = itemModel.getShallow('cursor');
    cursorStyle && el.attr('cursor', cursorStyle);
    var labelPositionOutside = isPolar ? isHorizontalOrRadial ? layout.r >= layout.r0 ? 'endArc' : 'startArc' : layout.endAngle >= layout.startAngle ? 'endAngle' : 'startAngle' : isHorizontalOrRadial ? layout.height >= 0 ? 'bottom' : 'top' : layout.width >= 0 ? 'right' : 'left';
    var labelStatesModels = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLabelStatesModels"])(itemModel);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setLabelStyle"])(el, labelStatesModels, {
        labelFetcher: seriesModel,
        labelDataIndex: dataIndex,
        defaultText: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$labelHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultLabel"])(seriesModel.getData(), dataIndex),
        inheritColor: style.fill,
        defaultOpacity: style.opacity,
        defaultOutsidePosition: labelPositionOutside
    });
    var label = el.getTextContent();
    if (isPolar && label) {
        var position = itemModel.get([
            'label',
            'position'
        ]);
        el.textConfig.inside = position === 'middle' ? true : null;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$sectorLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setSectorTextRotation"])(el, position === 'outside' ? labelPositionOutside : position, createPolarPositionMapping(isHorizontalOrRadial), itemModel.get([
            'label',
            'rotate'
        ]));
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setLabelValueAnimation"])(label, labelStatesModels, seriesModel.getRawValue(dataIndex), function(value) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$labelHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultInterpolatedLabel"])(data, value);
    });
    var emphasisModel = itemModel.getModel([
        'emphasis'
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toggleHoverEmphasis"])(el, emphasisModel.get('focus'), emphasisModel.get('blurScope'), emphasisModel.get('disabled'));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setStatesStylesFromModel"])(el, itemModel);
    if (isZeroOnPolar(layout)) {
        el.style.fill = 'none';
        el.style.stroke = 'none';
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(el.states, function(state) {
            if (state.style) {
                state.style.fill = state.style.stroke = 'none';
            }
        });
    }
}
// In case width or height are too small.
function getLineWidth(itemModel, rawLayout) {
    // Has no border.
    var borderColor = itemModel.get([
        'itemStyle',
        'borderColor'
    ]);
    if (!borderColor || borderColor === 'none') {
        return 0;
    }
    var lineWidth = itemModel.get([
        'itemStyle',
        'borderWidth'
    ]) || 0;
    // width or height may be NaN for empty data
    var width = isNaN(rawLayout.width) ? Number.MAX_VALUE : Math.abs(rawLayout.width);
    var height = isNaN(rawLayout.height) ? Number.MAX_VALUE : Math.abs(rawLayout.height);
    return Math.min(lineWidth, width, height);
}
var LagePathShape = /** @class */ function() {
    function LagePathShape() {}
    return LagePathShape;
}();
var LargePath = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(LargePath, _super);
    function LargePath(opts) {
        var _this = _super.call(this, opts) || this;
        _this.type = 'largeBar';
        return _this;
    }
    LargePath.prototype.getDefaultShape = function() {
        return new LagePathShape();
    };
    LargePath.prototype.buildPath = function(ctx, shape) {
        // Drawing lines is more efficient than drawing
        // a whole line or drawing rects.
        var points = shape.points;
        var baseDimIdx = this.baseDimIdx;
        var valueDimIdx = 1 - this.baseDimIdx;
        var startPoint = [];
        var size = [];
        var barWidth = this.barWidth;
        for(var i = 0; i < points.length; i += 3){
            size[baseDimIdx] = barWidth;
            size[valueDimIdx] = points[i + 2];
            startPoint[baseDimIdx] = points[i + baseDimIdx];
            startPoint[valueDimIdx] = points[i + valueDimIdx];
            ctx.rect(startPoint[0], startPoint[1], size[0], size[1]);
        }
    };
    return LargePath;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Path$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
function createLarge(seriesModel, group, progressiveEls, incremental) {
    // TODO support polar
    var data = seriesModel.getData();
    var baseDimIdx = data.getLayout('valueAxisHorizontal') ? 1 : 0;
    var largeDataIndices = data.getLayout('largeDataIndices');
    var barWidth = data.getLayout('size');
    var backgroundModel = seriesModel.getModel('backgroundStyle');
    var bgPoints = data.getLayout('largeBackgroundPoints');
    if (bgPoints) {
        var bgEl = new LargePath({
            shape: {
                points: bgPoints
            },
            incremental: !!incremental,
            silent: true,
            z2: 0
        });
        bgEl.baseDimIdx = baseDimIdx;
        bgEl.largeDataIndices = largeDataIndices;
        bgEl.barWidth = barWidth;
        bgEl.useStyle(backgroundModel.getItemStyle());
        group.add(bgEl);
        progressiveEls && progressiveEls.push(bgEl);
    }
    var el = new LargePath({
        shape: {
            points: data.getLayout('largePoints')
        },
        incremental: !!incremental,
        ignoreCoarsePointer: true,
        z2: 1
    });
    el.baseDimIdx = baseDimIdx;
    el.largeDataIndices = largeDataIndices;
    el.barWidth = barWidth;
    group.add(el);
    el.useStyle(data.getVisual('style'));
    // Stroke is rendered first to avoid overlapping with fill
    el.style.stroke = null;
    // Enable tooltip and user mouse/touch event handlers.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getECData"])(el).seriesIndex = seriesModel.seriesIndex;
    if (!seriesModel.get('silent')) {
        el.on('mousedown', largePathUpdateDataIndex);
        el.on('mousemove', largePathUpdateDataIndex);
    }
    progressiveEls && progressiveEls.push(el);
}
// Use throttle to avoid frequently traverse to find dataIndex.
var largePathUpdateDataIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$throttle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["throttle"])(function(event) {
    var largePath = this;
    var dataIndex = largePathFindDataIndex(largePath, event.offsetX, event.offsetY);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getECData"])(largePath).dataIndex = dataIndex >= 0 ? dataIndex : null;
}, 30, false);
function largePathFindDataIndex(largePath, x, y) {
    var baseDimIdx = largePath.baseDimIdx;
    var valueDimIdx = 1 - baseDimIdx;
    var points = largePath.shape.points;
    var largeDataIndices = largePath.largeDataIndices;
    var startPoint = [];
    var size = [];
    var barWidth = largePath.barWidth;
    for(var i = 0, len = points.length / 3; i < len; i++){
        var ii = i * 3;
        size[baseDimIdx] = barWidth;
        size[valueDimIdx] = points[ii + 2];
        startPoint[baseDimIdx] = points[ii + baseDimIdx];
        startPoint[valueDimIdx] = points[ii + valueDimIdx];
        if (size[valueDimIdx] < 0) {
            startPoint[valueDimIdx] += size[valueDimIdx];
            size[valueDimIdx] = -size[valueDimIdx];
        }
        if (x >= startPoint[0] && x <= startPoint[0] + size[0] && y >= startPoint[1] && y <= startPoint[1] + size[1]) {
            return largeDataIndices[i];
        }
    }
    return -1;
}
function createBackgroundShape(isHorizontalOrRadial, layout, coord) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$CoordinateSystem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCoordinateSystemType"])(coord, 'cartesian2d')) {
        var rectShape = layout;
        var coordLayout = coord.getArea();
        return {
            x: isHorizontalOrRadial ? rectShape.x : coordLayout.x,
            y: isHorizontalOrRadial ? coordLayout.y : rectShape.y,
            width: isHorizontalOrRadial ? rectShape.width : coordLayout.width,
            height: isHorizontalOrRadial ? coordLayout.height : rectShape.height
        };
    } else {
        var coordLayout = coord.getArea();
        var sectorShape = layout;
        return {
            cx: coordLayout.cx,
            cy: coordLayout.cy,
            r0: isHorizontalOrRadial ? coordLayout.r0 : sectorShape.r0,
            r: isHorizontalOrRadial ? coordLayout.r : sectorShape.r,
            startAngle: isHorizontalOrRadial ? sectorShape.startAngle : 0,
            endAngle: isHorizontalOrRadial ? sectorShape.endAngle : Math.PI * 2
        };
    }
}
function createBackgroundEl(coord, isHorizontalOrRadial, layout) {
    var ElementClz = coord.type === 'polar' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Sector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sector$3e$__["Sector"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Rect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rect$3e$__["Rect"];
    return new ElementClz({
        shape: createBackgroundShape(isHorizontalOrRadial, layout, coord),
        silent: true,
        z2: 0
    });
}
const __TURBOPACK__default__export__ = BarView;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/bar/install.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$layout$2f$barGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/layout/barGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$processor$2f$dataSample$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/processor/dataSample.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$bar$2f$BarSeries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/bar/BarSeries.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$bar$2f$BarView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/bar/BarView.js [app-client] (ecmascript)");
;
;
;
;
;
function install(registers) {
    registers.registerChartView(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$bar$2f$BarView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    registers.registerSeriesModel(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$bar$2f$BarSeries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    registers.registerLayout(registers.PRIORITY.VISUAL.LAYOUT, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["curry"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$layout$2f$barGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["layout"], 'bar'));
    // Do layout after other overall layout, which can prepare some information.
    registers.registerLayout(registers.PRIORITY.VISUAL.PROGRESSIVE_LAYOUT, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$layout$2f$barGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createProgressiveLayout"])('bar'));
    // Down sample after filter
    registers.registerProcessor(registers.PRIORITY.PROCESSOR.STATISTIC, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$processor$2f$dataSample$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('bar'));
    /**
   * @payload
   * @property {string} [componentType=series]
   * @property {number} [dx]
   * @property {number} [dy]
   * @property {number} [zoom]
   * @property {number} [originX]
   * @property {number} [originY]
   */ registers.registerAction({
        type: 'changeAxisOrder',
        event: 'changeAxisOrder',
        update: 'update'
    }, function(payload, ecModel) {
        var componentType = payload.componentType || 'series';
        ecModel.eachComponent({
            mainType: componentType,
            query: payload
        }, function(componentModel) {
            if (payload.sortInfo) {
                componentModel.axis.setCategorySortInfo(payload.sortInfo);
            }
        });
    });
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/bar/install.js [app-client] (ecmascript) <export install as BarChart>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BarChart",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$bar$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["install"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$bar$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/bar/install.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/bar/PictorialBarView.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/graphic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/states.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$symbol$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/symbol.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/number.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/view/Chart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$labelHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/helper/labelHelper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/label/labelStyle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/innerStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$createClipPathFromCoordSys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/helper/createClipPathFromCoordSys.js [app-client] (ecmascript)");
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
var BAR_BORDER_WIDTH_QUERY = [
    'itemStyle',
    'borderWidth'
];
// index: +isHorizontal
var LAYOUT_ATTRS = [
    {
        xy: 'x',
        wh: 'width',
        index: 0,
        posDesc: [
            'left',
            'right'
        ]
    },
    {
        xy: 'y',
        wh: 'height',
        index: 1,
        posDesc: [
            'top',
            'bottom'
        ]
    }
];
var pathForLineWidth = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Circle();
var PictorialBarView = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(PictorialBarView, _super);
    function PictorialBarView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = PictorialBarView.type;
        return _this;
    }
    PictorialBarView.prototype.render = function(seriesModel, ecModel, api) {
        var group = this.group;
        var data = seriesModel.getData();
        var oldData = this._data;
        var cartesian = seriesModel.coordinateSystem;
        var baseAxis = cartesian.getBaseAxis();
        var isHorizontal = baseAxis.isHorizontal();
        var coordSysRect = cartesian.master.getRect();
        var opt = {
            ecSize: {
                width: api.getWidth(),
                height: api.getHeight()
            },
            seriesModel: seriesModel,
            coordSys: cartesian,
            coordSysExtent: [
                [
                    coordSysRect.x,
                    coordSysRect.x + coordSysRect.width
                ],
                [
                    coordSysRect.y,
                    coordSysRect.y + coordSysRect.height
                ]
            ],
            isHorizontal: isHorizontal,
            valueDim: LAYOUT_ATTRS[+isHorizontal],
            categoryDim: LAYOUT_ATTRS[1 - +isHorizontal]
        };
        data.diff(oldData).add(function(dataIndex) {
            if (!data.hasValue(dataIndex)) {
                return;
            }
            var itemModel = getItemModel(data, dataIndex);
            var symbolMeta = getSymbolMeta(data, dataIndex, itemModel, opt);
            var bar = createBar(data, opt, symbolMeta);
            data.setItemGraphicEl(dataIndex, bar);
            group.add(bar);
            updateCommon(bar, opt, symbolMeta);
        }).update(function(newIndex, oldIndex) {
            var bar = oldData.getItemGraphicEl(oldIndex);
            if (!data.hasValue(newIndex)) {
                group.remove(bar);
                return;
            }
            var itemModel = getItemModel(data, newIndex);
            var symbolMeta = getSymbolMeta(data, newIndex, itemModel, opt);
            var pictorialShapeStr = getShapeStr(data, symbolMeta);
            if (bar && pictorialShapeStr !== bar.__pictorialShapeStr) {
                group.remove(bar);
                data.setItemGraphicEl(newIndex, null);
                bar = null;
            }
            if (bar) {
                updateBar(bar, opt, symbolMeta);
            } else {
                bar = createBar(data, opt, symbolMeta, true);
            }
            data.setItemGraphicEl(newIndex, bar);
            bar.__pictorialSymbolMeta = symbolMeta;
            // Add back
            group.add(bar);
            updateCommon(bar, opt, symbolMeta);
        }).remove(function(dataIndex) {
            var bar = oldData.getItemGraphicEl(dataIndex);
            bar && removeBar(oldData, dataIndex, bar.__pictorialSymbolMeta.animationModel, bar);
        }).execute();
        // Do clipping
        var clipPath = seriesModel.get('clip', true) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$createClipPathFromCoordSys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClipPath"])(seriesModel.coordinateSystem, false, seriesModel) : null;
        if (clipPath) {
            group.setClipPath(clipPath);
        } else {
            group.removeClipPath();
        }
        this._data = data;
        return this.group;
    };
    PictorialBarView.prototype.remove = function(ecModel, api) {
        var group = this.group;
        var data = this._data;
        if (ecModel.get('animation')) {
            if (data) {
                data.eachItemGraphicEl(function(bar) {
                    removeBar(data, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getECData"])(bar).dataIndex, ecModel, bar);
                });
            }
        } else {
            group.removeAll();
        }
    };
    PictorialBarView.type = 'pictorialBar';
    return PictorialBarView;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
// Set or calculate default value about symbol, and calculate layout info.
function getSymbolMeta(data, dataIndex, itemModel, opt) {
    var layout = data.getItemLayout(dataIndex);
    var symbolRepeat = itemModel.get('symbolRepeat');
    var symbolClip = itemModel.get('symbolClip');
    var symbolPosition = itemModel.get('symbolPosition') || 'start';
    var symbolRotate = itemModel.get('symbolRotate');
    var rotation = (symbolRotate || 0) * Math.PI / 180 || 0;
    var symbolPatternSize = itemModel.get('symbolPatternSize') || 2;
    var isAnimationEnabled = itemModel.isAnimationEnabled();
    var symbolMeta = {
        dataIndex: dataIndex,
        layout: layout,
        itemModel: itemModel,
        symbolType: data.getItemVisual(dataIndex, 'symbol') || 'circle',
        style: data.getItemVisual(dataIndex, 'style'),
        symbolClip: symbolClip,
        symbolRepeat: symbolRepeat,
        symbolRepeatDirection: itemModel.get('symbolRepeatDirection'),
        symbolPatternSize: symbolPatternSize,
        rotation: rotation,
        animationModel: isAnimationEnabled ? itemModel : null,
        hoverScale: isAnimationEnabled && itemModel.get([
            'emphasis',
            'scale'
        ]),
        z2: itemModel.getShallow('z', true) || 0
    };
    prepareBarLength(itemModel, symbolRepeat, layout, opt, symbolMeta);
    prepareSymbolSize(data, dataIndex, layout, symbolRepeat, symbolClip, symbolMeta.boundingLength, symbolMeta.pxSign, symbolPatternSize, opt, symbolMeta);
    prepareLineWidth(itemModel, symbolMeta.symbolScale, rotation, opt, symbolMeta);
    var symbolSize = symbolMeta.symbolSize;
    var symbolOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$symbol$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeSymbolOffset"])(itemModel.get('symbolOffset'), symbolSize);
    prepareLayoutInfo(itemModel, symbolSize, layout, symbolRepeat, symbolClip, symbolOffset, symbolPosition, symbolMeta.valueLineWidth, symbolMeta.boundingLength, symbolMeta.repeatCutLength, opt, symbolMeta);
    return symbolMeta;
}
// bar length can be negative.
function prepareBarLength(itemModel, symbolRepeat, layout, opt, outputSymbolMeta) {
    var valueDim = opt.valueDim;
    var symbolBoundingData = itemModel.get('symbolBoundingData');
    var valueAxis = opt.coordSys.getOtherAxis(opt.coordSys.getBaseAxis());
    var zeroPx = valueAxis.toGlobalCoord(valueAxis.dataToCoord(0));
    var pxSignIdx = 1 - +(layout[valueDim.wh] <= 0);
    var boundingLength;
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"](symbolBoundingData)) {
        var symbolBoundingExtent = [
            convertToCoordOnAxis(valueAxis, symbolBoundingData[0]) - zeroPx,
            convertToCoordOnAxis(valueAxis, symbolBoundingData[1]) - zeroPx
        ];
        symbolBoundingExtent[1] < symbolBoundingExtent[0] && symbolBoundingExtent.reverse();
        boundingLength = symbolBoundingExtent[pxSignIdx];
    } else if (symbolBoundingData != null) {
        boundingLength = convertToCoordOnAxis(valueAxis, symbolBoundingData) - zeroPx;
    } else if (symbolRepeat) {
        boundingLength = opt.coordSysExtent[valueDim.index][pxSignIdx] - zeroPx;
    } else {
        boundingLength = layout[valueDim.wh];
    }
    outputSymbolMeta.boundingLength = boundingLength;
    if (symbolRepeat) {
        outputSymbolMeta.repeatCutLength = layout[valueDim.wh];
    }
    // if 'pxSign' means sign of pixel,  it can't be zero, or symbolScale will be zero
    // and when borderWidth be settled, the actual linewidth will be NaN
    var isXAxis = valueDim.xy === 'x';
    var isInverse = valueAxis.inverse;
    outputSymbolMeta.pxSign = isXAxis && !isInverse || !isXAxis && isInverse ? boundingLength >= 0 ? 1 : -1 : boundingLength > 0 ? 1 : -1;
}
function convertToCoordOnAxis(axis, value) {
    return axis.toGlobalCoord(axis.dataToCoord(axis.scale.parse(value)));
}
// Support ['100%', '100%']
function prepareSymbolSize(data, dataIndex, layout, symbolRepeat, symbolClip, boundingLength, pxSign, symbolPatternSize, opt, outputSymbolMeta) {
    var valueDim = opt.valueDim;
    var categoryDim = opt.categoryDim;
    var categorySize = Math.abs(layout[categoryDim.wh]);
    var symbolSize = data.getItemVisual(dataIndex, 'symbolSize');
    var parsedSymbolSize;
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"](symbolSize)) {
        parsedSymbolSize = symbolSize.slice();
    } else {
        if (symbolSize == null) {
            // will parse to number below
            parsedSymbolSize = [
                '100%',
                '100%'
            ];
        } else {
            parsedSymbolSize = [
                symbolSize,
                symbolSize
            ];
        }
    }
    // Note: percentage symbolSize (like '100%') do not consider lineWidth, because it is
    // to complicated to calculate real percent value if considering scaled lineWidth.
    // So the actual size will bigger than layout size if lineWidth is bigger than zero,
    // which can be tolerated in pictorial chart.
    parsedSymbolSize[categoryDim.index] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parsePercent"])(parsedSymbolSize[categoryDim.index], categorySize);
    parsedSymbolSize[valueDim.index] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parsePercent"])(parsedSymbolSize[valueDim.index], symbolRepeat ? categorySize : Math.abs(boundingLength));
    outputSymbolMeta.symbolSize = parsedSymbolSize;
    // If x or y is less than zero, show reversed shape.
    var symbolScale = outputSymbolMeta.symbolScale = [
        parsedSymbolSize[0] / symbolPatternSize,
        parsedSymbolSize[1] / symbolPatternSize
    ];
    // Follow convention, 'right' and 'top' is the normal scale.
    symbolScale[valueDim.index] *= (opt.isHorizontal ? -1 : 1) * pxSign;
}
function prepareLineWidth(itemModel, symbolScale, rotation, opt, outputSymbolMeta) {
    // In symbols are drawn with scale, so do not need to care about the case that width
    // or height are too small. But symbol use strokeNoScale, where acture lineWidth should
    // be calculated.
    var valueLineWidth = itemModel.get(BAR_BORDER_WIDTH_QUERY) || 0;
    if (valueLineWidth) {
        pathForLineWidth.attr({
            scaleX: symbolScale[0],
            scaleY: symbolScale[1],
            rotation: rotation
        });
        pathForLineWidth.updateTransform();
        valueLineWidth /= pathForLineWidth.getLineScale();
        valueLineWidth *= symbolScale[opt.valueDim.index];
    }
    outputSymbolMeta.valueLineWidth = valueLineWidth || 0;
}
function prepareLayoutInfo(itemModel, symbolSize, layout, symbolRepeat, symbolClip, symbolOffset, symbolPosition, valueLineWidth, boundingLength, repeatCutLength, opt, outputSymbolMeta) {
    var categoryDim = opt.categoryDim;
    var valueDim = opt.valueDim;
    var pxSign = outputSymbolMeta.pxSign;
    var unitLength = Math.max(symbolSize[valueDim.index] + valueLineWidth, 0);
    var pathLen = unitLength;
    // Note: rotation will not effect the layout of symbols, because user may
    // want symbols to rotate on its center, which should not be translated
    // when rotating.
    if (symbolRepeat) {
        var absBoundingLength = Math.abs(boundingLength);
        var symbolMargin = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["retrieve"](itemModel.get('symbolMargin'), '15%') + '';
        var hasEndGap = false;
        if (symbolMargin.lastIndexOf('!') === symbolMargin.length - 1) {
            hasEndGap = true;
            symbolMargin = symbolMargin.slice(0, symbolMargin.length - 1);
        }
        var symbolMarginNumeric = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parsePercent"])(symbolMargin, symbolSize[valueDim.index]);
        var uLenWithMargin = Math.max(unitLength + symbolMarginNumeric * 2, 0);
        // When symbol margin is less than 0, margin at both ends will be subtracted
        // to ensure that all of the symbols will not be overflow the given area.
        var endFix = hasEndGap ? 0 : symbolMarginNumeric * 2;
        // Both final repeatTimes and final symbolMarginNumeric area calculated based on
        // boundingLength.
        var repeatSpecified = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumeric"])(symbolRepeat);
        var repeatTimes = repeatSpecified ? symbolRepeat : toIntTimes((absBoundingLength + endFix) / uLenWithMargin);
        // Adjust calculate margin, to ensure each symbol is displayed
        // entirely in the given layout area.
        var mDiff = absBoundingLength - repeatTimes * unitLength;
        symbolMarginNumeric = mDiff / 2 / (hasEndGap ? repeatTimes : Math.max(repeatTimes - 1, 1));
        uLenWithMargin = unitLength + symbolMarginNumeric * 2;
        endFix = hasEndGap ? 0 : symbolMarginNumeric * 2;
        // Update repeatTimes when not all symbol will be shown.
        if (!repeatSpecified && symbolRepeat !== 'fixed') {
            repeatTimes = repeatCutLength ? toIntTimes((Math.abs(repeatCutLength) + endFix) / uLenWithMargin) : 0;
        }
        pathLen = repeatTimes * uLenWithMargin - endFix;
        outputSymbolMeta.repeatTimes = repeatTimes;
        outputSymbolMeta.symbolMargin = symbolMarginNumeric;
    }
    var sizeFix = pxSign * (pathLen / 2);
    var pathPosition = outputSymbolMeta.pathPosition = [];
    pathPosition[categoryDim.index] = layout[categoryDim.wh] / 2;
    pathPosition[valueDim.index] = symbolPosition === 'start' ? sizeFix : symbolPosition === 'end' ? boundingLength - sizeFix : boundingLength / 2; // 'center'
    if (symbolOffset) {
        pathPosition[0] += symbolOffset[0];
        pathPosition[1] += symbolOffset[1];
    }
    var bundlePosition = outputSymbolMeta.bundlePosition = [];
    bundlePosition[categoryDim.index] = layout[categoryDim.xy];
    bundlePosition[valueDim.index] = layout[valueDim.xy];
    var barRectShape = outputSymbolMeta.barRectShape = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extend"]({}, layout);
    barRectShape[valueDim.wh] = pxSign * Math.max(Math.abs(layout[valueDim.wh]), Math.abs(pathPosition[valueDim.index] + sizeFix));
    barRectShape[categoryDim.wh] = layout[categoryDim.wh];
    var clipShape = outputSymbolMeta.clipShape = {};
    // Consider that symbol may be overflow layout rect.
    clipShape[categoryDim.xy] = -layout[categoryDim.xy];
    clipShape[categoryDim.wh] = opt.ecSize[categoryDim.wh];
    clipShape[valueDim.xy] = 0;
    clipShape[valueDim.wh] = layout[valueDim.wh];
}
function createPath(symbolMeta) {
    var symbolPatternSize = symbolMeta.symbolPatternSize;
    var path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$symbol$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSymbol"])(// Consider texture img, make a big size.
    symbolMeta.symbolType, -symbolPatternSize / 2, -symbolPatternSize / 2, symbolPatternSize, symbolPatternSize);
    path.attr({
        culling: true
    });
    path.type !== 'image' && path.setStyle({
        strokeNoScale: true
    });
    return path;
}
function createOrUpdateRepeatSymbols(bar, opt, symbolMeta, isUpdate) {
    var bundle = bar.__pictorialBundle;
    var symbolSize = symbolMeta.symbolSize;
    var valueLineWidth = symbolMeta.valueLineWidth;
    var pathPosition = symbolMeta.pathPosition;
    var valueDim = opt.valueDim;
    var repeatTimes = symbolMeta.repeatTimes || 0;
    var index = 0;
    var unit = symbolSize[opt.valueDim.index] + valueLineWidth + symbolMeta.symbolMargin * 2;
    eachPath(bar, function(path) {
        path.__pictorialAnimationIndex = index;
        path.__pictorialRepeatTimes = repeatTimes;
        if (index < repeatTimes) {
            updateAttr(path, null, makeTarget(index), symbolMeta, isUpdate);
        } else {
            updateAttr(path, null, {
                scaleX: 0,
                scaleY: 0
            }, symbolMeta, isUpdate, function() {
                bundle.remove(path);
            });
        }
        // updateHoverAnimation(path, symbolMeta);
        index++;
    });
    for(; index < repeatTimes; index++){
        var path = createPath(symbolMeta);
        path.__pictorialAnimationIndex = index;
        path.__pictorialRepeatTimes = repeatTimes;
        bundle.add(path);
        var target = makeTarget(index);
        updateAttr(path, {
            x: target.x,
            y: target.y,
            scaleX: 0,
            scaleY: 0
        }, {
            scaleX: target.scaleX,
            scaleY: target.scaleY,
            rotation: target.rotation
        }, symbolMeta, isUpdate);
    }
    function makeTarget(index) {
        var position = pathPosition.slice();
        // (start && pxSign > 0) || (end && pxSign < 0): i = repeatTimes - index
        // Otherwise: i = index;
        var pxSign = symbolMeta.pxSign;
        var i = index;
        if (symbolMeta.symbolRepeatDirection === 'start' ? pxSign > 0 : pxSign < 0) {
            i = repeatTimes - 1 - index;
        }
        position[valueDim.index] = unit * (i - repeatTimes / 2 + 0.5) + pathPosition[valueDim.index];
        return {
            x: position[0],
            y: position[1],
            scaleX: symbolMeta.symbolScale[0],
            scaleY: symbolMeta.symbolScale[1],
            rotation: symbolMeta.rotation
        };
    }
}
function createOrUpdateSingleSymbol(bar, opt, symbolMeta, isUpdate) {
    var bundle = bar.__pictorialBundle;
    var mainPath = bar.__pictorialMainPath;
    if (!mainPath) {
        mainPath = bar.__pictorialMainPath = createPath(symbolMeta);
        bundle.add(mainPath);
        updateAttr(mainPath, {
            x: symbolMeta.pathPosition[0],
            y: symbolMeta.pathPosition[1],
            scaleX: 0,
            scaleY: 0,
            rotation: symbolMeta.rotation
        }, {
            scaleX: symbolMeta.symbolScale[0],
            scaleY: symbolMeta.symbolScale[1]
        }, symbolMeta, isUpdate);
    } else {
        updateAttr(mainPath, null, {
            x: symbolMeta.pathPosition[0],
            y: symbolMeta.pathPosition[1],
            scaleX: symbolMeta.symbolScale[0],
            scaleY: symbolMeta.symbolScale[1],
            rotation: symbolMeta.rotation
        }, symbolMeta, isUpdate);
    }
}
// bar rect is used for label.
function createOrUpdateBarRect(bar, symbolMeta, isUpdate) {
    var rectShape = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extend"]({}, symbolMeta.barRectShape);
    var barRect = bar.__pictorialBarRect;
    if (!barRect) {
        barRect = bar.__pictorialBarRect = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Rect({
            z2: 2,
            shape: rectShape,
            silent: true,
            style: {
                stroke: 'transparent',
                fill: 'transparent',
                lineWidth: 0
            }
        });
        barRect.disableMorphing = true;
        bar.add(barRect);
    } else {
        updateAttr(barRect, null, {
            shape: rectShape
        }, symbolMeta, isUpdate);
    }
}
function createOrUpdateClip(bar, opt, symbolMeta, isUpdate) {
    // If not clip, symbol will be remove and rebuilt.
    if (symbolMeta.symbolClip) {
        var clipPath = bar.__pictorialClipPath;
        var clipShape = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extend"]({}, symbolMeta.clipShape);
        var valueDim = opt.valueDim;
        var animationModel = symbolMeta.animationModel;
        var dataIndex = symbolMeta.dataIndex;
        if (clipPath) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.updateProps(clipPath, {
                shape: clipShape
            }, animationModel, dataIndex);
        } else {
            clipShape[valueDim.wh] = 0;
            clipPath = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Rect({
                shape: clipShape
            });
            bar.__pictorialBundle.setClipPath(clipPath);
            bar.__pictorialClipPath = clipPath;
            var target = {};
            target[valueDim.wh] = symbolMeta.clipShape[valueDim.wh];
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[isUpdate ? 'updateProps' : 'initProps'](clipPath, {
                shape: target
            }, animationModel, dataIndex);
        }
    }
}
function getItemModel(data, dataIndex) {
    var itemModel = data.getItemModel(dataIndex);
    itemModel.getAnimationDelayParams = getAnimationDelayParams;
    itemModel.isAnimationEnabled = isAnimationEnabled;
    return itemModel;
}
function getAnimationDelayParams(path) {
    // The order is the same as the z-order, see `symbolRepeatDiretion`.
    return {
        index: path.__pictorialAnimationIndex,
        count: path.__pictorialRepeatTimes
    };
}
function isAnimationEnabled() {
    // `animation` prop can be set on itemModel in pictorial bar chart.
    return this.parentModel.isAnimationEnabled() && !!this.getShallow('animation');
}
function createBar(data, opt, symbolMeta, isUpdate) {
    // bar is the main element for each data.
    var bar = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Group();
    // bundle is used for location and clip.
    var bundle = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Group();
    bar.add(bundle);
    bar.__pictorialBundle = bundle;
    bundle.x = symbolMeta.bundlePosition[0];
    bundle.y = symbolMeta.bundlePosition[1];
    if (symbolMeta.symbolRepeat) {
        createOrUpdateRepeatSymbols(bar, opt, symbolMeta);
    } else {
        createOrUpdateSingleSymbol(bar, opt, symbolMeta);
    }
    createOrUpdateBarRect(bar, symbolMeta, isUpdate);
    createOrUpdateClip(bar, opt, symbolMeta, isUpdate);
    bar.__pictorialShapeStr = getShapeStr(data, symbolMeta);
    bar.__pictorialSymbolMeta = symbolMeta;
    return bar;
}
function updateBar(bar, opt, symbolMeta) {
    var animationModel = symbolMeta.animationModel;
    var dataIndex = symbolMeta.dataIndex;
    var bundle = bar.__pictorialBundle;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.updateProps(bundle, {
        x: symbolMeta.bundlePosition[0],
        y: symbolMeta.bundlePosition[1]
    }, animationModel, dataIndex);
    if (symbolMeta.symbolRepeat) {
        createOrUpdateRepeatSymbols(bar, opt, symbolMeta, true);
    } else {
        createOrUpdateSingleSymbol(bar, opt, symbolMeta, true);
    }
    createOrUpdateBarRect(bar, symbolMeta, true);
    createOrUpdateClip(bar, opt, symbolMeta, true);
}
function removeBar(data, dataIndex, animationModel, bar) {
    // Not show text when animating
    var labelRect = bar.__pictorialBarRect;
    labelRect && labelRect.removeTextContent();
    var paths = [];
    eachPath(bar, function(path) {
        paths.push(path);
    });
    bar.__pictorialMainPath && paths.push(bar.__pictorialMainPath);
    // I do not find proper remove animation for clip yet.
    bar.__pictorialClipPath && (animationModel = null);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"](paths, function(path) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.removeElement(path, {
            scaleX: 0,
            scaleY: 0
        }, animationModel, dataIndex, function() {
            bar.parent && bar.parent.remove(bar);
        });
    });
    data.setItemGraphicEl(dataIndex, null);
}
function getShapeStr(data, symbolMeta) {
    return [
        data.getItemVisual(symbolMeta.dataIndex, 'symbol') || 'none',
        !!symbolMeta.symbolRepeat,
        !!symbolMeta.symbolClip
    ].join(':');
}
function eachPath(bar, cb, context) {
    // Do not use Group#eachChild, because it do not support remove.
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"](bar.__pictorialBundle.children(), function(el) {
        el !== bar.__pictorialBarRect && cb.call(context, el);
    });
}
function updateAttr(el, immediateAttrs, animationAttrs, symbolMeta, isUpdate, cb) {
    immediateAttrs && el.attr(immediateAttrs);
    // when symbolCip used, only clip path has init animation, otherwise it would be weird effect.
    if (symbolMeta.symbolClip && !isUpdate) {
        animationAttrs && el.attr(animationAttrs);
    } else {
        animationAttrs && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[isUpdate ? 'updateProps' : 'initProps'](el, animationAttrs, symbolMeta.animationModel, symbolMeta.dataIndex, cb);
    }
}
function updateCommon(bar, opt, symbolMeta) {
    var dataIndex = symbolMeta.dataIndex;
    var itemModel = symbolMeta.itemModel;
    // Color must be excluded.
    // Because symbol provide setColor individually to set fill and stroke
    var emphasisModel = itemModel.getModel('emphasis');
    var emphasisStyle = emphasisModel.getModel('itemStyle').getItemStyle();
    var blurStyle = itemModel.getModel([
        'blur',
        'itemStyle'
    ]).getItemStyle();
    var selectStyle = itemModel.getModel([
        'select',
        'itemStyle'
    ]).getItemStyle();
    var cursorStyle = itemModel.getShallow('cursor');
    var focus = emphasisModel.get('focus');
    var blurScope = emphasisModel.get('blurScope');
    var hoverScale = emphasisModel.get('scale');
    eachPath(bar, function(path) {
        if (path instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) {
            var pathStyle = path.style;
            path.useStyle(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extend"]({
                // TODO other properties like dx, dy ?
                image: pathStyle.image,
                x: pathStyle.x,
                y: pathStyle.y,
                width: pathStyle.width,
                height: pathStyle.height
            }, symbolMeta.style));
        } else {
            path.useStyle(symbolMeta.style);
        }
        var emphasisState = path.ensureState('emphasis');
        emphasisState.style = emphasisStyle;
        if (hoverScale) {
            // NOTE: Must after scale is set after updateAttr
            emphasisState.scaleX = path.scaleX * 1.1;
            emphasisState.scaleY = path.scaleY * 1.1;
        }
        path.ensureState('blur').style = blurStyle;
        path.ensureState('select').style = selectStyle;
        cursorStyle && (path.cursor = cursorStyle);
        path.z2 = symbolMeta.z2;
    });
    var barPositionOutside = opt.valueDim.posDesc[+(symbolMeta.boundingLength > 0)];
    var barRect = bar.__pictorialBarRect;
    barRect.ignoreClip = true;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setLabelStyle"])(barRect, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLabelStatesModels"])(itemModel), {
        labelFetcher: opt.seriesModel,
        labelDataIndex: dataIndex,
        defaultText: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$labelHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultLabel"])(opt.seriesModel.getData(), dataIndex),
        inheritColor: symbolMeta.style.fill,
        defaultOpacity: symbolMeta.style.opacity,
        defaultOutsidePosition: barPositionOutside
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toggleHoverEmphasis"])(bar, focus, blurScope, emphasisModel.get('disabled'));
}
function toIntTimes(times) {
    var roundedTimes = Math.round(times);
    // Escapse accurate error
    return Math.abs(times - roundedTimes) < 1e-4 ? roundedTimes : Math.ceil(times);
}
const __TURBOPACK__default__export__ = PictorialBarView;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/bar/PictorialBarSeries.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$bar$2f$BaseBarSeries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/bar/BaseBarSeries.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/component.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/tokens.js [app-client] (ecmascript)");
;
;
;
;
var PictorialBarSeriesModel = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(PictorialBarSeriesModel, _super);
    function PictorialBarSeriesModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = PictorialBarSeriesModel.type;
        _this.hasSymbolVisual = true;
        _this.defaultSymbol = 'roundRect';
        return _this;
    }
    PictorialBarSeriesModel.prototype.getInitialData = function(option) {
        // Disable stack.
        option.stack = null;
        return _super.prototype.getInitialData.apply(this, arguments);
    };
    PictorialBarSeriesModel.type = 'series.pictorialBar';
    PictorialBarSeriesModel.dependencies = [
        'grid'
    ];
    PictorialBarSeriesModel.defaultOption = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inheritDefaultOption"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$bar$2f$BaseBarSeries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].defaultOption, {
        symbol: 'circle',
        symbolSize: null,
        symbolRotate: null,
        symbolPosition: null,
        symbolOffset: null,
        symbolMargin: null,
        symbolRepeat: false,
        symbolRepeatDirection: 'end',
        symbolClip: false,
        symbolBoundingData: null,
        symbolPatternSize: 400,
        barGap: '-100%',
        // Pictorial bar do not clip by default because in many cases
        // xAxis and yAxis are not displayed and it's expected not to clip
        clip: false,
        // z can be set in data item, which is z2 actually.
        // Disable progressive
        progressive: 0,
        emphasis: {
            // By default pictorialBar do not hover scale. Hover scale is not suitable
            // for the case that both has foreground and background.
            scale: false
        },
        select: {
            itemStyle: {
                borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].color.primary
            }
        }
    });
    return PictorialBarSeriesModel;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$bar$2f$BaseBarSeries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = PictorialBarSeriesModel;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/bar/installPictorialBar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$bar$2f$PictorialBarView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/bar/PictorialBarView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$bar$2f$PictorialBarSeries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/bar/PictorialBarSeries.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$layout$2f$barGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/layout/barGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
;
;
;
;
function install(registers) {
    registers.registerChartView(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$bar$2f$PictorialBarView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    registers.registerSeriesModel(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$bar$2f$PictorialBarSeries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    registers.registerLayout(registers.PRIORITY.VISUAL.LAYOUT, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["curry"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$layout$2f$barGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["layout"], 'pictorialBar'));
    // Do layout after other overall layout, which can prepare some information.
    registers.registerLayout(registers.PRIORITY.VISUAL.PROGRESSIVE_LAYOUT, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$layout$2f$barGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createProgressiveLayout"])('pictorialBar'));
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/bar/installPictorialBar.js [app-client] (ecmascript) <export install as PictorialBarChart>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PictorialBarChart",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$bar$2f$installPictorialBar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["install"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$bar$2f$installPictorialBar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/bar/installPictorialBar.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=6e80b_echarts_lib_chart_bar_7c3ee5a0._.js.map