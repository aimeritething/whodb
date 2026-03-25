(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/line/LineSeries.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$createSeriesData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/helper/createSeriesData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Series$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/Series.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$symbol$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/symbol.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Group.js [app-client] (ecmascript) <export default as Group>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/tokens.js [app-client] (ecmascript)");
;
;
;
;
;
;
var LineSeriesModel = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(LineSeriesModel, _super);
    function LineSeriesModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = LineSeriesModel.type;
        _this.hasSymbolVisual = true;
        return _this;
    }
    LineSeriesModel.prototype.getInitialData = function(option) {
        if ("TURBOPACK compile-time truthy", 1) {
            var coordSys = option.coordinateSystem;
            if (coordSys !== 'polar' && coordSys !== 'cartesian2d') {
                throw new Error('Line not support coordinateSystem besides cartesian and polar');
            }
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$createSeriesData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(null, this, {
            useEncodeDefaulter: true
        });
    };
    LineSeriesModel.prototype.getLegendIcon = function(opt) {
        var group = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__["Group"]();
        var line = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$symbol$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSymbol"])('line', 0, opt.itemHeight / 2, opt.itemWidth, 0, opt.lineStyle.stroke, false);
        group.add(line);
        line.setStyle(opt.lineStyle);
        var visualType = this.getData().getVisual('symbol');
        var visualRotate = this.getData().getVisual('symbolRotate');
        var symbolType = visualType === 'none' ? 'circle' : visualType;
        // Symbol size is 80% when there is a line
        var size = opt.itemHeight * 0.8;
        var symbol = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$symbol$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSymbol"])(symbolType, (opt.itemWidth - size) / 2, (opt.itemHeight - size) / 2, size, size, opt.itemStyle.fill);
        group.add(symbol);
        symbol.setStyle(opt.itemStyle);
        var symbolRotate = opt.iconRotate === 'inherit' ? visualRotate : opt.iconRotate || 0;
        symbol.rotation = symbolRotate * Math.PI / 180;
        symbol.setOrigin([
            opt.itemWidth / 2,
            opt.itemHeight / 2
        ]);
        if (symbolType.indexOf('empty') > -1) {
            symbol.style.stroke = symbol.style.fill;
            symbol.style.fill = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].color.neutral00;
            symbol.style.lineWidth = 2;
        }
        return group;
    };
    LineSeriesModel.type = 'series.line';
    LineSeriesModel.dependencies = [
        'grid',
        'polar'
    ];
    LineSeriesModel.defaultOption = {
        // zlevel: 0,
        z: 3,
        coordinateSystem: 'cartesian2d',
        legendHoverLink: true,
        clip: true,
        label: {
            position: 'top'
        },
        // itemStyle: {
        // },
        endLabel: {
            show: false,
            valueAnimation: true,
            distance: 8
        },
        lineStyle: {
            width: 2,
            type: 'solid'
        },
        emphasis: {
            scale: true
        },
        // areaStyle: {
        // origin of areaStyle. Valid values:
        // `'auto'/null/undefined`: from axisLine to data
        // `'start'`: from min to data
        // `'end'`: from data to max
        // origin: 'auto'
        // },
        // false, 'start', 'end', 'middle'
        step: false,
        // Disabled if step is true
        smooth: false,
        smoothMonotone: null,
        symbol: 'emptyCircle',
        symbolSize: 6,
        symbolRotate: null,
        showSymbol: true,
        // `false`: follow the label interval strategy.
        // `true`: show all symbols.
        // `'auto'`: If possible, show all symbols, otherwise
        //           follow the label interval strategy.
        showAllSymbol: 'auto',
        // Whether to connect break point.
        connectNulls: false,
        // Sampling for large data. Can be: 'average', 'max', 'min', 'sum', 'lttb'.
        sampling: 'none',
        animationEasing: 'linear',
        // Disable progressive
        progressive: 0,
        hoverLayerThreshold: Infinity,
        universalTransition: {
            divideShape: 'clone'
        },
        triggerLineEvent: false
    };
    return LineSeriesModel;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Series$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = LineSeriesModel;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/line/helper.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    "getStackedOnPoint",
    ()=>getStackedOnPoint,
    "prepareDataCoordInfo",
    ()=>prepareDataCoordInfo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$dataStackHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/data/helper/dataStackHelper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
;
;
function prepareDataCoordInfo(coordSys, data, valueOrigin) {
    var baseAxis = coordSys.getBaseAxis();
    var valueAxis = coordSys.getOtherAxis(baseAxis);
    var valueStart = getValueStart(valueAxis, valueOrigin);
    var baseAxisDim = baseAxis.dim;
    var valueAxisDim = valueAxis.dim;
    var valueDim = data.mapDimension(valueAxisDim);
    var baseDim = data.mapDimension(baseAxisDim);
    var baseDataOffset = valueAxisDim === 'x' || valueAxisDim === 'radius' ? 1 : 0;
    var dims = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"])(coordSys.dimensions, function(coordDim) {
        return data.mapDimension(coordDim);
    });
    var stacked = false;
    var stackResultDim = data.getCalculationInfo('stackResultDimension');
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$dataStackHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDimensionStacked"])(data, dims[0])) {
        // jshint ignore:line
        stacked = true;
        dims[0] = stackResultDim;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$dataStackHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDimensionStacked"])(data, dims[1])) {
        // jshint ignore:line
        stacked = true;
        dims[1] = stackResultDim;
    }
    return {
        dataDimsForPoint: dims,
        valueStart: valueStart,
        valueAxisDim: valueAxisDim,
        baseAxisDim: baseAxisDim,
        stacked: !!stacked,
        valueDim: valueDim,
        baseDim: baseDim,
        baseDataOffset: baseDataOffset,
        stackedOverDimension: data.getCalculationInfo('stackedOverDimension')
    };
}
function getValueStart(valueAxis, valueOrigin) {
    var valueStart = 0;
    var extent = valueAxis.scale.getExtent();
    if (valueOrigin === 'start') {
        valueStart = extent[0];
    } else if (valueOrigin === 'end') {
        valueStart = extent[1];
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(valueOrigin) && !isNaN(valueOrigin)) {
        valueStart = valueOrigin;
    } else {
        // Both positive
        if (extent[0] > 0) {
            valueStart = extent[0];
        } else if (extent[1] < 0) {
            valueStart = extent[1];
        }
    // If is one positive, and one negative, onZero shall be true
    }
    return valueStart;
}
function getStackedOnPoint(dataCoordInfo, coordSys, data, idx) {
    var value = NaN;
    if (dataCoordInfo.stacked) {
        value = data.get(data.getCalculationInfo('stackedOverDimension'), idx);
    }
    if (isNaN(value)) {
        value = dataCoordInfo.valueStart;
    }
    var baseDataOffset = dataCoordInfo.baseDataOffset;
    var stackedData = [];
    stackedData[baseDataOffset] = data.get(dataCoordInfo.baseDim, idx);
    stackedData[1 - baseDataOffset] = value;
    return coordSys.dataToPoint(stackedData);
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/line/lineAnimationDiff.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    ()=>lineAnimationDiff
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$line$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/line/helper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$vendor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/vendor.js [app-client] (ecmascript)");
;
;
function diffData(oldData, newData) {
    var diffResult = [];
    newData.diff(oldData).add(function(idx) {
        diffResult.push({
            cmd: '+',
            idx: idx
        });
    }).update(function(newIdx, oldIdx) {
        diffResult.push({
            cmd: '=',
            idx: oldIdx,
            idx1: newIdx
        });
    }).remove(function(idx) {
        diffResult.push({
            cmd: '-',
            idx: idx
        });
    }).execute();
    return diffResult;
}
function lineAnimationDiff(oldData, newData, oldStackedOnPoints, newStackedOnPoints, oldCoordSys, newCoordSys, oldValueOrigin, newValueOrigin) {
    var diff = diffData(oldData, newData);
    // let newIdList = newData.mapArray(newData.getId);
    // let oldIdList = oldData.mapArray(oldData.getId);
    // convertToIntId(newIdList, oldIdList);
    // // FIXME One data ?
    // diff = arrayDiff(oldIdList, newIdList);
    var currPoints = [];
    var nextPoints = [];
    // Points for stacking base line
    var currStackedPoints = [];
    var nextStackedPoints = [];
    var status = [];
    var sortedIndices = [];
    var rawIndices = [];
    var newDataOldCoordInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$line$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prepareDataCoordInfo"])(oldCoordSys, newData, oldValueOrigin);
    // const oldDataNewCoordInfo = prepareDataCoordInfo(newCoordSys, oldData, newValueOrigin);
    var oldPoints = oldData.getLayout('points') || [];
    var newPoints = newData.getLayout('points') || [];
    for(var i = 0; i < diff.length; i++){
        var diffItem = diff[i];
        var pointAdded = true;
        var oldIdx2 = void 0;
        var newIdx2 = void 0;
        // FIXME, animation is not so perfect when dataZoom window moves fast
        // Which is in case remvoing or add more than one data in the tail or head
        switch(diffItem.cmd){
            case '=':
                oldIdx2 = diffItem.idx * 2;
                newIdx2 = diffItem.idx1 * 2;
                var currentX = oldPoints[oldIdx2];
                var currentY = oldPoints[oldIdx2 + 1];
                var nextX = newPoints[newIdx2];
                var nextY = newPoints[newIdx2 + 1];
                // If previous data is NaN, use next point directly
                if (isNaN(currentX) || isNaN(currentY)) {
                    currentX = nextX;
                    currentY = nextY;
                }
                currPoints.push(currentX, currentY);
                nextPoints.push(nextX, nextY);
                currStackedPoints.push(oldStackedOnPoints[oldIdx2], oldStackedOnPoints[oldIdx2 + 1]);
                nextStackedPoints.push(newStackedOnPoints[newIdx2], newStackedOnPoints[newIdx2 + 1]);
                rawIndices.push(newData.getRawIndex(diffItem.idx1));
                break;
            case '+':
                var newIdx = diffItem.idx;
                var newDataDimsForPoint = newDataOldCoordInfo.dataDimsForPoint;
                var oldPt = oldCoordSys.dataToPoint([
                    newData.get(newDataDimsForPoint[0], newIdx),
                    newData.get(newDataDimsForPoint[1], newIdx)
                ]);
                newIdx2 = newIdx * 2;
                currPoints.push(oldPt[0], oldPt[1]);
                nextPoints.push(newPoints[newIdx2], newPoints[newIdx2 + 1]);
                var stackedOnPoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$line$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStackedOnPoint"])(newDataOldCoordInfo, oldCoordSys, newData, newIdx);
                currStackedPoints.push(stackedOnPoint[0], stackedOnPoint[1]);
                nextStackedPoints.push(newStackedOnPoints[newIdx2], newStackedOnPoints[newIdx2 + 1]);
                rawIndices.push(newData.getRawIndex(newIdx));
                break;
            case '-':
                pointAdded = false;
        }
        // Original indices
        if (pointAdded) {
            status.push(diffItem);
            sortedIndices.push(sortedIndices.length);
        }
    }
    // Diff result may be crossed if all items are changed
    // Sort by data index
    sortedIndices.sort(function(a, b) {
        return rawIndices[a] - rawIndices[b];
    });
    var len = currPoints.length;
    var sortedCurrPoints = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$vendor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createFloat32Array"])(len);
    var sortedNextPoints = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$vendor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createFloat32Array"])(len);
    var sortedCurrStackedPoints = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$vendor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createFloat32Array"])(len);
    var sortedNextStackedPoints = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$vendor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createFloat32Array"])(len);
    var sortedStatus = [];
    for(var i = 0; i < sortedIndices.length; i++){
        var idx = sortedIndices[i];
        var i2 = i * 2;
        var idx2 = idx * 2;
        sortedCurrPoints[i2] = currPoints[idx2];
        sortedCurrPoints[i2 + 1] = currPoints[idx2 + 1];
        sortedNextPoints[i2] = nextPoints[idx2];
        sortedNextPoints[i2 + 1] = nextPoints[idx2 + 1];
        sortedCurrStackedPoints[i2] = currStackedPoints[idx2];
        sortedCurrStackedPoints[i2 + 1] = currStackedPoints[idx2 + 1];
        sortedNextStackedPoints[i2] = nextStackedPoints[idx2];
        sortedNextStackedPoints[i2 + 1] = nextStackedPoints[idx2 + 1];
        sortedStatus[i] = status[idx];
    }
    return {
        current: sortedCurrPoints,
        next: sortedNextPoints,
        stackedOnCurrent: sortedCurrStackedPoints,
        stackedOnNext: sortedNextStackedPoints,
        status: sortedStatus
    };
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/line/poly.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    "ECPolygon",
    ()=>ECPolygon,
    "ECPolyline",
    ()=>ECPolyline
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
// Poly path support NaN point
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Path$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Path.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$PathProxy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/PathProxy.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$curve$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/curve.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/tokens.js [app-client] (ecmascript)");
;
;
;
;
;
var mathMin = Math.min;
var mathMax = Math.max;
function isPointNull(x, y) {
    return isNaN(x) || isNaN(y);
}
/**
 * Draw smoothed line in non-monotone, in may cause undesired curve in extreme
 * situations. This should be used when points are non-monotone neither in x or
 * y dimension.
 */ function drawSegment(ctx, points, start, segLen, allLen, dir, smooth, smoothMonotone, connectNulls) {
    var prevX;
    var prevY;
    var cpx0;
    var cpy0;
    var cpx1;
    var cpy1;
    var idx = start;
    var k = 0;
    for(; k < segLen; k++){
        var x = points[idx * 2];
        var y = points[idx * 2 + 1];
        if (idx >= allLen || idx < 0) {
            break;
        }
        if (isPointNull(x, y)) {
            if (connectNulls) {
                idx += dir;
                continue;
            }
            break;
        }
        if (idx === start) {
            ctx[dir > 0 ? 'moveTo' : 'lineTo'](x, y);
            cpx0 = x;
            cpy0 = y;
        } else {
            var dx = x - prevX;
            var dy = y - prevY;
            // Ignore tiny segment.
            if (dx * dx + dy * dy < 0.5) {
                idx += dir;
                continue;
            }
            if (smooth > 0) {
                var nextIdx = idx + dir;
                var nextX = points[nextIdx * 2];
                var nextY = points[nextIdx * 2 + 1];
                // Ignore duplicate point
                while(nextX === x && nextY === y && k < segLen){
                    k++;
                    nextIdx += dir;
                    idx += dir;
                    nextX = points[nextIdx * 2];
                    nextY = points[nextIdx * 2 + 1];
                    x = points[idx * 2];
                    y = points[idx * 2 + 1];
                    dx = x - prevX;
                    dy = y - prevY;
                }
                var tmpK = k + 1;
                if (connectNulls) {
                    // Find next point not null
                    while(isPointNull(nextX, nextY) && tmpK < segLen){
                        tmpK++;
                        nextIdx += dir;
                        nextX = points[nextIdx * 2];
                        nextY = points[nextIdx * 2 + 1];
                    }
                }
                var ratioNextSeg = 0.5;
                var vx = 0;
                var vy = 0;
                var nextCpx0 = void 0;
                var nextCpy0 = void 0;
                // Is last point
                if (tmpK >= segLen || isPointNull(nextX, nextY)) {
                    cpx1 = x;
                    cpy1 = y;
                } else {
                    vx = nextX - prevX;
                    vy = nextY - prevY;
                    var dx0 = x - prevX;
                    var dx1 = nextX - x;
                    var dy0 = y - prevY;
                    var dy1 = nextY - y;
                    var lenPrevSeg = void 0;
                    var lenNextSeg = void 0;
                    if (smoothMonotone === 'x') {
                        lenPrevSeg = Math.abs(dx0);
                        lenNextSeg = Math.abs(dx1);
                        var dir_1 = vx > 0 ? 1 : -1;
                        cpx1 = x - dir_1 * lenPrevSeg * smooth;
                        cpy1 = y;
                        nextCpx0 = x + dir_1 * lenNextSeg * smooth;
                        nextCpy0 = y;
                    } else if (smoothMonotone === 'y') {
                        lenPrevSeg = Math.abs(dy0);
                        lenNextSeg = Math.abs(dy1);
                        var dir_2 = vy > 0 ? 1 : -1;
                        cpx1 = x;
                        cpy1 = y - dir_2 * lenPrevSeg * smooth;
                        nextCpx0 = x;
                        nextCpy0 = y + dir_2 * lenNextSeg * smooth;
                    } else {
                        lenPrevSeg = Math.sqrt(dx0 * dx0 + dy0 * dy0);
                        lenNextSeg = Math.sqrt(dx1 * dx1 + dy1 * dy1);
                        // Use ratio of seg length
                        ratioNextSeg = lenNextSeg / (lenNextSeg + lenPrevSeg);
                        cpx1 = x - vx * smooth * (1 - ratioNextSeg);
                        cpy1 = y - vy * smooth * (1 - ratioNextSeg);
                        // cp0 of next segment
                        nextCpx0 = x + vx * smooth * ratioNextSeg;
                        nextCpy0 = y + vy * smooth * ratioNextSeg;
                        // Smooth constraint between point and next point.
                        // Avoid exceeding extreme after smoothing.
                        nextCpx0 = mathMin(nextCpx0, mathMax(nextX, x));
                        nextCpy0 = mathMin(nextCpy0, mathMax(nextY, y));
                        nextCpx0 = mathMax(nextCpx0, mathMin(nextX, x));
                        nextCpy0 = mathMax(nextCpy0, mathMin(nextY, y));
                        // Reclaculate cp1 based on the adjusted cp0 of next seg.
                        vx = nextCpx0 - x;
                        vy = nextCpy0 - y;
                        cpx1 = x - vx * lenPrevSeg / lenNextSeg;
                        cpy1 = y - vy * lenPrevSeg / lenNextSeg;
                        // Smooth constraint between point and prev point.
                        // Avoid exceeding extreme after smoothing.
                        cpx1 = mathMin(cpx1, mathMax(prevX, x));
                        cpy1 = mathMin(cpy1, mathMax(prevY, y));
                        cpx1 = mathMax(cpx1, mathMin(prevX, x));
                        cpy1 = mathMax(cpy1, mathMin(prevY, y));
                        // Adjust next cp0 again.
                        vx = x - cpx1;
                        vy = y - cpy1;
                        nextCpx0 = x + vx * lenNextSeg / lenPrevSeg;
                        nextCpy0 = y + vy * lenNextSeg / lenPrevSeg;
                    }
                }
                ctx.bezierCurveTo(cpx0, cpy0, cpx1, cpy1, x, y);
                cpx0 = nextCpx0;
                cpy0 = nextCpy0;
            } else {
                ctx.lineTo(x, y);
            }
        }
        prevX = x;
        prevY = y;
        idx += dir;
    }
    return k;
}
var ECPolylineShape = /** @class */ function() {
    function ECPolylineShape() {
        this.smooth = 0;
        this.smoothConstraint = true;
    }
    return ECPolylineShape;
}();
var ECPolyline = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(ECPolyline, _super);
    function ECPolyline(opts) {
        var _this = _super.call(this, opts) || this;
        _this.type = 'ec-polyline';
        return _this;
    }
    ECPolyline.prototype.getDefaultStyle = function() {
        return {
            stroke: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].color.neutral99,
            fill: null
        };
    };
    ECPolyline.prototype.getDefaultShape = function() {
        return new ECPolylineShape();
    };
    ECPolyline.prototype.buildPath = function(ctx, shape) {
        var points = shape.points;
        var i = 0;
        var len = points.length / 2;
        // const result = getBoundingBox(points, shape.smoothConstraint);
        if (shape.connectNulls) {
            // Must remove first and last null values avoid draw error in polygon
            for(; len > 0; len--){
                if (!isPointNull(points[len * 2 - 2], points[len * 2 - 1])) {
                    break;
                }
            }
            for(; i < len; i++){
                if (!isPointNull(points[i * 2], points[i * 2 + 1])) {
                    break;
                }
            }
        }
        while(i < len){
            i += drawSegment(ctx, points, i, len, len, 1, shape.smooth, shape.smoothMonotone, shape.connectNulls) + 1;
        }
    };
    ECPolyline.prototype.getPointOn = function(xOrY, dim) {
        if (!this.path) {
            this.createPathProxy();
            this.buildPath(this.path, this.shape);
        }
        var path = this.path;
        var data = path.data;
        var CMD = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$PathProxy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].CMD;
        var x0;
        var y0;
        var isDimX = dim === 'x';
        var roots = [];
        for(var i = 0; i < data.length;){
            var cmd = data[i++];
            var x = void 0;
            var y = void 0;
            var x2 = void 0;
            var y2 = void 0;
            var x3 = void 0;
            var y3 = void 0;
            var t = void 0;
            switch(cmd){
                case CMD.M:
                    x0 = data[i++];
                    y0 = data[i++];
                    break;
                case CMD.L:
                    x = data[i++];
                    y = data[i++];
                    t = isDimX ? (xOrY - x0) / (x - x0) : (xOrY - y0) / (y - y0);
                    if (t <= 1 && t >= 0) {
                        var val = isDimX ? (y - y0) * t + y0 : (x - x0) * t + x0;
                        return isDimX ? [
                            xOrY,
                            val
                        ] : [
                            val,
                            xOrY
                        ];
                    }
                    x0 = x;
                    y0 = y;
                    break;
                case CMD.C:
                    x = data[i++];
                    y = data[i++];
                    x2 = data[i++];
                    y2 = data[i++];
                    x3 = data[i++];
                    y3 = data[i++];
                    var nRoot = isDimX ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$curve$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cubicRootAt"])(x0, x, x2, x3, xOrY, roots) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$curve$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cubicRootAt"])(y0, y, y2, y3, xOrY, roots);
                    if (nRoot > 0) {
                        for(var i_1 = 0; i_1 < nRoot; i_1++){
                            var t_1 = roots[i_1];
                            if (t_1 <= 1 && t_1 >= 0) {
                                var val = isDimX ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$curve$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cubicAt"])(y0, y, y2, y3, t_1) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$curve$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cubicAt"])(x0, x, x2, x3, t_1);
                                return isDimX ? [
                                    xOrY,
                                    val
                                ] : [
                                    val,
                                    xOrY
                                ];
                            }
                        }
                    }
                    x0 = x3;
                    y0 = y3;
                    break;
            }
        }
    };
    return ECPolyline;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Path$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
;
var ECPolygonShape = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(ECPolygonShape, _super);
    function ECPolygonShape() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ECPolygonShape;
}(ECPolylineShape);
var ECPolygon = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(ECPolygon, _super);
    function ECPolygon(opts) {
        var _this = _super.call(this, opts) || this;
        _this.type = 'ec-polygon';
        return _this;
    }
    ECPolygon.prototype.getDefaultShape = function() {
        return new ECPolygonShape();
    };
    ECPolygon.prototype.buildPath = function(ctx, shape) {
        var points = shape.points;
        var stackedOnPoints = shape.stackedOnPoints;
        var i = 0;
        var len = points.length / 2;
        var smoothMonotone = shape.smoothMonotone;
        if (shape.connectNulls) {
            // Must remove first and last null values avoid draw error in polygon
            for(; len > 0; len--){
                if (!isPointNull(points[len * 2 - 2], points[len * 2 - 1])) {
                    break;
                }
            }
            for(; i < len; i++){
                if (!isPointNull(points[i * 2], points[i * 2 + 1])) {
                    break;
                }
            }
        }
        while(i < len){
            var k = drawSegment(ctx, points, i, len, len, 1, shape.smooth, smoothMonotone, shape.connectNulls);
            drawSegment(ctx, stackedOnPoints, i + k - 1, k, len, -1, shape.stackedOnSmooth, smoothMonotone, shape.connectNulls);
            i += k + 1;
            ctx.closePath();
        }
    };
    return ECPolygon;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Path$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/line/LineView.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
// FIXME step not support polar
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$SymbolDraw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/helper/SymbolDraw.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$Symbol$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/helper/Symbol.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$line$2f$lineAnimationDiff$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/line/lineAnimationDiff.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Group.js [app-client] (ecmascript) <export default as Group>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/animation/basicTransition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Text$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Text.js [app-client] (ecmascript) <export default as Text>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$LinearGradient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LinearGradient$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/LinearGradient.js [app-client] (ecmascript) <export default as LinearGradient>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$line$2f$poly$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/line/poly.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/view/Chart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$line$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/line/helper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$createClipPathFromCoordSys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/helper/createClipPathFromCoordSys.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$CoordinateSystem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/CoordinateSystem.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/states.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/label/labelStyle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$labelHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/helper/labelHelper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/innerStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$vendor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/vendor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/format.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$tool$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/tool/color.js [app-client] (ecmascript)");
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
;
function isPointsSame(points1, points2) {
    if (points1.length !== points2.length) {
        return;
    }
    for(var i = 0; i < points1.length; i++){
        if (points1[i] !== points2[i]) {
            return;
        }
    }
    return true;
}
function bboxFromPoints(points) {
    var minX = Infinity;
    var minY = Infinity;
    var maxX = -Infinity;
    var maxY = -Infinity;
    for(var i = 0; i < points.length;){
        var x = points[i++];
        var y = points[i++];
        if (!isNaN(x)) {
            minX = Math.min(x, minX);
            maxX = Math.max(x, maxX);
        }
        if (!isNaN(y)) {
            minY = Math.min(y, minY);
            maxY = Math.max(y, maxY);
        }
    }
    return [
        [
            minX,
            minY
        ],
        [
            maxX,
            maxY
        ]
    ];
}
function getBoundingDiff(points1, points2) {
    var _a = bboxFromPoints(points1), min1 = _a[0], max1 = _a[1];
    var _b = bboxFromPoints(points2), min2 = _b[0], max2 = _b[1];
    // Get a max value from each corner of two boundings.
    return Math.max(Math.abs(min1[0] - min2[0]), Math.abs(min1[1] - min2[1]), Math.abs(max1[0] - max2[0]), Math.abs(max1[1] - max2[1]));
}
function getSmooth(smooth) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"](smooth) ? smooth : smooth ? 0.5 : 0;
}
function getStackedOnPoints(coordSys, data, dataCoordInfo) {
    if (!dataCoordInfo.valueDim) {
        return [];
    }
    var len = data.count();
    var points = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$vendor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createFloat32Array"])(len * 2);
    for(var idx = 0; idx < len; idx++){
        var pt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$line$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStackedOnPoint"])(dataCoordInfo, coordSys, data, idx);
        points[idx * 2] = pt[0];
        points[idx * 2 + 1] = pt[1];
    }
    return points;
}
/**
 * Filter the null data and extend data for step considering `stepTurnAt`
 *
 * @param points data to convert, that may containing null
 * @param basePoints base data to reference, used only for areaStyle points
 * @param coordSys coordinate system
 * @param stepTurnAt 'start' | 'end' | 'middle' | true
 * @param connectNulls whether to connect nulls
 * @returns converted point positions
 */ function turnPointsIntoStep(points, basePoints, coordSys, stepTurnAt, connectNulls) {
    var baseAxis = coordSys.getBaseAxis();
    var baseIndex = baseAxis.dim === 'x' || baseAxis.dim === 'radius' ? 0 : 1;
    var stepPoints = [];
    var i = 0;
    var stepPt = [];
    var pt = [];
    var nextPt = [];
    var filteredPoints = [];
    if (connectNulls) {
        for(i = 0; i < points.length; i += 2){
            /**
       * For areaStyle of stepped lines, `stackedOnPoints` should be
       * filtered the same as `points` so that the base axis values
       * should stay the same as the lines above. See #20021
       */ var reference = basePoints || points;
            if (!isNaN(reference[i]) && !isNaN(reference[i + 1])) {
                filteredPoints.push(points[i], points[i + 1]);
            }
        }
        points = filteredPoints;
    }
    for(i = 0; i < points.length - 2; i += 2){
        nextPt[0] = points[i + 2];
        nextPt[1] = points[i + 3];
        pt[0] = points[i];
        pt[1] = points[i + 1];
        stepPoints.push(pt[0], pt[1]);
        switch(stepTurnAt){
            case 'end':
                stepPt[baseIndex] = nextPt[baseIndex];
                stepPt[1 - baseIndex] = pt[1 - baseIndex];
                stepPoints.push(stepPt[0], stepPt[1]);
                break;
            case 'middle':
                var middle = (pt[baseIndex] + nextPt[baseIndex]) / 2;
                var stepPt2 = [];
                stepPt[baseIndex] = stepPt2[baseIndex] = middle;
                stepPt[1 - baseIndex] = pt[1 - baseIndex];
                stepPt2[1 - baseIndex] = nextPt[1 - baseIndex];
                stepPoints.push(stepPt[0], stepPt[1]);
                stepPoints.push(stepPt2[0], stepPt2[1]);
                break;
            default:
                // default is start
                stepPt[baseIndex] = pt[baseIndex];
                stepPt[1 - baseIndex] = nextPt[1 - baseIndex];
                stepPoints.push(stepPt[0], stepPt[1]);
        }
    }
    // Last points
    stepPoints.push(points[i++], points[i++]);
    return stepPoints;
}
/**
 * Clip color stops to edge. Avoid creating too large gradients.
 * Which may lead to blurry when GPU acceleration is enabled. See #15680
 *
 * The stops has been sorted from small to large.
 */ function clipColorStops(colorStops, maxSize) {
    var newColorStops = [];
    var len = colorStops.length;
    // coord will always < 0 in prevOutOfRangeColorStop.
    var prevOutOfRangeColorStop;
    var prevInRangeColorStop;
    function lerpStop(stop0, stop1, clippedCoord) {
        var coord0 = stop0.coord;
        var p = (clippedCoord - coord0) / (stop1.coord - coord0);
        var color = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$tool$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lerp"])(p, [
            stop0.color,
            stop1.color
        ]);
        return {
            coord: clippedCoord,
            color: color
        };
    }
    for(var i = 0; i < len; i++){
        var stop_1 = colorStops[i];
        var coord = stop_1.coord;
        if (coord < 0) {
            prevOutOfRangeColorStop = stop_1;
        } else if (coord > maxSize) {
            if (prevInRangeColorStop) {
                newColorStops.push(lerpStop(prevInRangeColorStop, stop_1, maxSize));
            } else if (prevOutOfRangeColorStop) {
                // If there are two stops and coord range is between these two stops
                newColorStops.push(lerpStop(prevOutOfRangeColorStop, stop_1, 0), lerpStop(prevOutOfRangeColorStop, stop_1, maxSize));
            }
            break;
        } else {
            if (prevOutOfRangeColorStop) {
                newColorStops.push(lerpStop(prevOutOfRangeColorStop, stop_1, 0));
                // Reset
                prevOutOfRangeColorStop = null;
            }
            newColorStops.push(stop_1);
            prevInRangeColorStop = stop_1;
        }
    }
    return newColorStops;
}
function getVisualGradient(data, coordSys, api) {
    var visualMetaList = data.getVisual('visualMeta');
    if (!visualMetaList || !visualMetaList.length || !data.count()) {
        // When data.count() is 0, gradient range can not be calculated.
        return;
    }
    if (coordSys.type !== 'cartesian2d') {
        if ("TURBOPACK compile-time truthy", 1) {
            console.warn('Visual map on line style is only supported on cartesian2d.');
        }
        return;
    }
    var coordDim;
    var visualMeta;
    for(var i = visualMetaList.length - 1; i >= 0; i--){
        var dimInfo = data.getDimensionInfo(visualMetaList[i].dimension);
        coordDim = dimInfo && dimInfo.coordDim;
        // Can only be x or y
        if (coordDim === 'x' || coordDim === 'y') {
            visualMeta = visualMetaList[i];
            break;
        }
    }
    if (!visualMeta) {
        if ("TURBOPACK compile-time truthy", 1) {
            console.warn('Visual map on line style only support x or y dimension.');
        }
        return;
    }
    // If the area to be rendered is bigger than area defined by LinearGradient,
    // the canvas spec prescribes that the color of the first stop and the last
    // stop should be used. But if two stops are added at offset 0, in effect
    // browsers use the color of the second stop to render area outside
    // LinearGradient. So we can only infinitesimally extend area defined in
    // LinearGradient to render `outerColors`.
    var axis = coordSys.getAxis(coordDim);
    // dataToCoord mapping may not be linear, but must be monotonic.
    var colorStops = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"](visualMeta.stops, function(stop) {
        // offset will be calculated later.
        return {
            coord: axis.toGlobalCoord(axis.dataToCoord(stop.value)),
            color: stop.color
        };
    });
    var stopLen = colorStops.length;
    var outerColors = visualMeta.outerColors.slice();
    if (stopLen && colorStops[0].coord > colorStops[stopLen - 1].coord) {
        colorStops.reverse();
        outerColors.reverse();
    }
    var colorStopsInRange = clipColorStops(colorStops, coordDim === 'x' ? api.getWidth() : api.getHeight());
    var inRangeStopLen = colorStopsInRange.length;
    if (!inRangeStopLen && stopLen) {
        // All stops are out of range. All will be the same color.
        return colorStops[0].coord < 0 ? outerColors[1] ? outerColors[1] : colorStops[stopLen - 1].color : outerColors[0] ? outerColors[0] : colorStops[0].color;
    }
    var tinyExtent = 10; // Arbitrary value: 10px
    var minCoord = colorStopsInRange[0].coord - tinyExtent;
    var maxCoord = colorStopsInRange[inRangeStopLen - 1].coord + tinyExtent;
    var coordSpan = maxCoord - minCoord;
    if (coordSpan < 1e-3) {
        return 'transparent';
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"](colorStopsInRange, function(stop) {
        stop.offset = (stop.coord - minCoord) / coordSpan;
    });
    colorStopsInRange.push({
        // NOTE: inRangeStopLen may still be 0 if stoplen is zero.
        offset: inRangeStopLen ? colorStopsInRange[inRangeStopLen - 1].offset : 0.5,
        color: outerColors[1] || 'transparent'
    });
    colorStopsInRange.unshift({
        offset: inRangeStopLen ? colorStopsInRange[0].offset : 0.5,
        color: outerColors[0] || 'transparent'
    });
    var gradient = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$LinearGradient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LinearGradient$3e$__["LinearGradient"](0, 0, 0, 0, colorStopsInRange, true);
    gradient[coordDim] = minCoord;
    gradient[coordDim + '2'] = maxCoord;
    return gradient;
}
function getIsIgnoreFunc(seriesModel, data, coordSys) {
    var showAllSymbol = seriesModel.get('showAllSymbol');
    var isAuto = showAllSymbol === 'auto';
    if (showAllSymbol && !isAuto) {
        return;
    }
    var categoryAxis = coordSys.getAxesByScale('ordinal')[0];
    if (!categoryAxis) {
        return;
    }
    // Note that category label interval strategy might bring some weird effect
    // in some scenario: users may wonder why some of the symbols are not
    // displayed. So we show all symbols as possible as we can.
    if (isAuto && canShowAllSymbolForCategory(categoryAxis, data)) {
        return;
    }
    // Otherwise follow the label interval strategy on category axis.
    var categoryDataDim = data.mapDimension(categoryAxis.dim);
    var labelMap = {};
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"](categoryAxis.getViewLabels(), function(labelItem) {
        var ordinalNumber = categoryAxis.scale.getRawOrdinalNumber(labelItem.tickValue);
        labelMap[ordinalNumber] = 1;
    });
    return function(dataIndex) {
        return !labelMap.hasOwnProperty(data.get(categoryDataDim, dataIndex));
    };
}
function canShowAllSymbolForCategory(categoryAxis, data) {
    // In most cases, line is monotonous on category axis, and the label size
    // is close with each other. So we check the symbol size and some of the
    // label size alone with the category axis to estimate whether all symbol
    // can be shown without overlap.
    var axisExtent = categoryAxis.getExtent();
    var availSize = Math.abs(axisExtent[1] - axisExtent[0]) / categoryAxis.scale.count();
    isNaN(availSize) && (availSize = 0); // 0/0 is NaN.
    // Sampling some points, max 5.
    var dataLen = data.count();
    var step = Math.max(1, Math.round(dataLen / 5));
    for(var dataIndex = 0; dataIndex < dataLen; dataIndex += step){
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$Symbol$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getSymbolSize(data, dataIndex)[categoryAxis.isHorizontal() ? 1 : 0] * 1.5 > availSize) {
            return false;
        }
    }
    return true;
}
function isPointNull(x, y) {
    return isNaN(x) || isNaN(y);
}
function getLastIndexNotNull(points) {
    var len = points.length / 2;
    for(; len > 0; len--){
        if (!isPointNull(points[len * 2 - 2], points[len * 2 - 1])) {
            break;
        }
    }
    return len - 1;
}
function getPointAtIndex(points, idx) {
    return [
        points[idx * 2],
        points[idx * 2 + 1]
    ];
}
function getIndexRange(points, xOrY, dim) {
    var len = points.length / 2;
    var dimIdx = dim === 'x' ? 0 : 1;
    var a;
    var b;
    var prevIndex = 0;
    var nextIndex = -1;
    for(var i = 0; i < len; i++){
        b = points[i * 2 + dimIdx];
        if (isNaN(b) || isNaN(points[i * 2 + 1 - dimIdx])) {
            continue;
        }
        if (i === 0) {
            a = b;
            continue;
        }
        if (a <= xOrY && b >= xOrY || a >= xOrY && b <= xOrY) {
            nextIndex = i;
            break;
        }
        prevIndex = i;
        a = b;
    }
    return {
        range: [
            prevIndex,
            nextIndex
        ],
        t: (xOrY - a) / (b - a)
    };
}
function anyStateShowEndLabel(seriesModel) {
    if (seriesModel.get([
        'endLabel',
        'show'
    ])) {
        return true;
    }
    for(var i = 0; i < __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPECIAL_STATES"].length; i++){
        if (seriesModel.get([
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPECIAL_STATES"][i],
            'endLabel',
            'show'
        ])) {
            return true;
        }
    }
    return false;
}
function createLineClipPath(lineView, coordSys, hasAnimation, seriesModel) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$CoordinateSystem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCoordinateSystemType"])(coordSys, 'cartesian2d')) {
        var endLabelModel_1 = seriesModel.getModel('endLabel');
        var valueAnimation_1 = endLabelModel_1.get('valueAnimation');
        var data_1 = seriesModel.getData();
        var labelAnimationRecord_1 = {
            lastFrameIndex: 0
        };
        var during = anyStateShowEndLabel(seriesModel) ? function(percent, clipRect) {
            lineView._endLabelOnDuring(percent, clipRect, data_1, labelAnimationRecord_1, valueAnimation_1, endLabelModel_1, coordSys);
        } : null;
        var isHorizontal = coordSys.getBaseAxis().isHorizontal();
        var clipPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$createClipPathFromCoordSys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createGridClipPath"])(coordSys, hasAnimation, seriesModel, function() {
            var endLabel = lineView._endLabel;
            if (endLabel && hasAnimation) {
                if (labelAnimationRecord_1.originalX != null) {
                    endLabel.attr({
                        x: labelAnimationRecord_1.originalX,
                        y: labelAnimationRecord_1.originalY
                    });
                }
            }
        }, during);
        // Expand clip shape to avoid clipping when line value exceeds axis
        if (!seriesModel.get('clip', true)) {
            var rectShape = clipPath.shape;
            var expandSize = Math.max(rectShape.width, rectShape.height);
            if (isHorizontal) {
                rectShape.y -= expandSize;
                rectShape.height += expandSize * 2;
            } else {
                rectShape.x -= expandSize;
                rectShape.width += expandSize * 2;
            }
        }
        // Set to the final frame. To make sure label layout is right.
        if (during) {
            during(1, clipPath);
        }
        return clipPath;
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            if (seriesModel.get([
                'endLabel',
                'show'
            ])) {
                console.warn('endLabel is not supported for lines in polar systems.');
            }
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$createClipPathFromCoordSys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPolarClipPath"])(coordSys, hasAnimation, seriesModel);
    }
}
function getEndLabelStateSpecified(endLabelModel, coordSys) {
    var baseAxis = coordSys.getBaseAxis();
    var isHorizontal = baseAxis.isHorizontal();
    var isBaseInversed = baseAxis.inverse;
    var align = isHorizontal ? isBaseInversed ? 'right' : 'left' : 'center';
    var verticalAlign = isHorizontal ? 'middle' : isBaseInversed ? 'top' : 'bottom';
    return {
        normal: {
            align: endLabelModel.get('align') || align,
            verticalAlign: endLabelModel.get('verticalAlign') || verticalAlign
        }
    };
}
var LineView = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(LineView, _super);
    function LineView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LineView.prototype.init = function() {
        var lineGroup = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__["Group"]();
        var symbolDraw = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$SymbolDraw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]();
        this.group.add(symbolDraw.group);
        this._symbolDraw = symbolDraw;
        this._lineGroup = lineGroup;
        this._changePolyState = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bind"](this._changePolyState, this);
    };
    LineView.prototype.render = function(seriesModel, ecModel, api) {
        var coordSys = seriesModel.coordinateSystem;
        var group = this.group;
        var data = seriesModel.getData();
        var lineStyleModel = seriesModel.getModel('lineStyle');
        var areaStyleModel = seriesModel.getModel('areaStyle');
        var points = data.getLayout('points') || [];
        var isCoordSysPolar = coordSys.type === 'polar';
        var prevCoordSys = this._coordSys;
        var symbolDraw = this._symbolDraw;
        var polyline = this._polyline;
        var polygon = this._polygon;
        var lineGroup = this._lineGroup;
        var hasAnimation = !ecModel.ssr && seriesModel.get('animation');
        var isAreaChart = !areaStyleModel.isEmpty();
        var valueOrigin = areaStyleModel.get('origin');
        var dataCoordInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$line$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prepareDataCoordInfo"])(coordSys, data, valueOrigin);
        var stackedOnPoints = isAreaChart && getStackedOnPoints(coordSys, data, dataCoordInfo);
        var showSymbol = seriesModel.get('showSymbol');
        var connectNulls = seriesModel.get('connectNulls');
        var isIgnoreFunc = showSymbol && !isCoordSysPolar && getIsIgnoreFunc(seriesModel, data, coordSys);
        // Remove temporary symbols
        var oldData = this._data;
        oldData && oldData.eachItemGraphicEl(function(el, idx) {
            if (el.__temp) {
                group.remove(el);
                oldData.setItemGraphicEl(idx, null);
            }
        });
        // Remove previous created symbols if showSymbol changed to false
        if (!showSymbol) {
            symbolDraw.remove();
        }
        group.add(lineGroup);
        // FIXME step not support polar
        var step = !isCoordSysPolar ? seriesModel.get('step') : false;
        var clipShapeForSymbol;
        if (coordSys && coordSys.getArea && seriesModel.get('clip', true)) {
            clipShapeForSymbol = coordSys.getArea();
            // Avoid float number rounding error for symbol on the edge of axis extent.
            // See #7913 and `test/dataZoom-clip.html`.
            if (clipShapeForSymbol.width != null) {
                clipShapeForSymbol.x -= 0.1;
                clipShapeForSymbol.y -= 0.1;
                clipShapeForSymbol.width += 0.2;
                clipShapeForSymbol.height += 0.2;
            } else if (clipShapeForSymbol.r0) {
                clipShapeForSymbol.r0 -= 0.5;
                clipShapeForSymbol.r += 0.5;
            }
        }
        this._clipShapeForSymbol = clipShapeForSymbol;
        var visualColor = getVisualGradient(data, coordSys, api) || data.getVisual('style')[data.getVisual('drawType')];
        // Initialization animation or coordinate system changed
        if (!(polyline && prevCoordSys.type === coordSys.type && step === this._step)) {
            showSymbol && symbolDraw.updateData(data, {
                isIgnore: isIgnoreFunc,
                clipShape: clipShapeForSymbol,
                disableAnimation: true,
                getSymbolPoint: function(idx) {
                    return [
                        points[idx * 2],
                        points[idx * 2 + 1]
                    ];
                }
            });
            hasAnimation && this._initSymbolLabelAnimation(data, coordSys, clipShapeForSymbol);
            if (step) {
                if (stackedOnPoints) {
                    stackedOnPoints = turnPointsIntoStep(stackedOnPoints, points, coordSys, step, connectNulls);
                }
                // TODO If stacked series is not step
                points = turnPointsIntoStep(points, null, coordSys, step, connectNulls);
            }
            polyline = this._newPolyline(points);
            if (isAreaChart) {
                polygon = this._newPolygon(points, stackedOnPoints);
            } else if (polygon) {
                lineGroup.remove(polygon);
                polygon = this._polygon = null;
            }
            // NOTE: Must update _endLabel before setClipPath.
            if (!isCoordSysPolar) {
                this._initOrUpdateEndLabel(seriesModel, coordSys, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["convertToColorString"])(visualColor));
            }
            lineGroup.setClipPath(createLineClipPath(this, coordSys, true, seriesModel));
        } else {
            if (isAreaChart && !polygon) {
                // If areaStyle is added
                polygon = this._newPolygon(points, stackedOnPoints);
            } else if (polygon && !isAreaChart) {
                // If areaStyle is removed
                lineGroup.remove(polygon);
                polygon = this._polygon = null;
            }
            // NOTE: Must update _endLabel before setClipPath.
            if (!isCoordSysPolar) {
                this._initOrUpdateEndLabel(seriesModel, coordSys, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["convertToColorString"])(visualColor));
            }
            // Update clipPath
            var oldClipPath = lineGroup.getClipPath();
            if (oldClipPath) {
                var newClipPath = createLineClipPath(this, coordSys, false, seriesModel);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initProps"](oldClipPath, {
                    shape: newClipPath.shape
                }, seriesModel);
            } else {
                lineGroup.setClipPath(createLineClipPath(this, coordSys, true, seriesModel));
            }
            // Always update, or it is wrong in the case turning on legend
            // because points are not changed.
            showSymbol && symbolDraw.updateData(data, {
                isIgnore: isIgnoreFunc,
                clipShape: clipShapeForSymbol,
                disableAnimation: true,
                getSymbolPoint: function(idx) {
                    return [
                        points[idx * 2],
                        points[idx * 2 + 1]
                    ];
                }
            });
            // In the case data zoom triggered refreshing frequently
            // Data may not change if line has a category axis. So it should animate nothing.
            if (!isPointsSame(this._stackedOnPoints, stackedOnPoints) || !isPointsSame(this._points, points)) {
                if (hasAnimation) {
                    this._doUpdateAnimation(data, stackedOnPoints, coordSys, api, step, valueOrigin, connectNulls);
                } else {
                    // Not do it in update with animation
                    if (step) {
                        if (stackedOnPoints) {
                            stackedOnPoints = turnPointsIntoStep(stackedOnPoints, points, coordSys, step, connectNulls);
                        }
                        // TODO If stacked series is not step
                        points = turnPointsIntoStep(points, null, coordSys, step, connectNulls);
                    }
                    polyline.setShape({
                        points: points
                    });
                    polygon && polygon.setShape({
                        points: points,
                        stackedOnPoints: stackedOnPoints
                    });
                }
            }
        }
        var emphasisModel = seriesModel.getModel('emphasis');
        var focus = emphasisModel.get('focus');
        var blurScope = emphasisModel.get('blurScope');
        var emphasisDisabled = emphasisModel.get('disabled');
        polyline.useStyle(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaults"](// Use color in lineStyle first
        lineStyleModel.getLineStyle(), {
            fill: 'none',
            stroke: visualColor,
            lineJoin: 'bevel'
        }));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setStatesStylesFromModel"])(polyline, seriesModel, 'lineStyle');
        if (polyline.style.lineWidth > 0 && seriesModel.get([
            'emphasis',
            'lineStyle',
            'width'
        ]) === 'bolder') {
            var emphasisLineStyle = polyline.getState('emphasis').style;
            emphasisLineStyle.lineWidth = +polyline.style.lineWidth + 1;
        }
        // Needs seriesIndex for focus
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getECData"])(polyline).seriesIndex = seriesModel.seriesIndex;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toggleHoverEmphasis"])(polyline, focus, blurScope, emphasisDisabled);
        var smooth = getSmooth(seriesModel.get('smooth'));
        var smoothMonotone = seriesModel.get('smoothMonotone');
        polyline.setShape({
            smooth: smooth,
            smoothMonotone: smoothMonotone,
            connectNulls: connectNulls
        });
        if (polygon) {
            var stackedOnSeries = data.getCalculationInfo('stackedOnSeries');
            var stackedOnSmooth = 0;
            polygon.useStyle(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaults"](areaStyleModel.getAreaStyle(), {
                fill: visualColor,
                opacity: 0.7,
                lineJoin: 'bevel',
                decal: data.getVisual('style').decal
            }));
            if (stackedOnSeries) {
                stackedOnSmooth = getSmooth(stackedOnSeries.get('smooth'));
            }
            polygon.setShape({
                smooth: smooth,
                stackedOnSmooth: stackedOnSmooth,
                smoothMonotone: smoothMonotone,
                connectNulls: connectNulls
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setStatesStylesFromModel"])(polygon, seriesModel, 'areaStyle');
            // Needs seriesIndex for focus
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getECData"])(polygon).seriesIndex = seriesModel.seriesIndex;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toggleHoverEmphasis"])(polygon, focus, blurScope, emphasisDisabled);
        }
        var changePolyState = this._changePolyState;
        data.eachItemGraphicEl(function(el) {
            // Switch polyline / polygon state if element changed its state.
            el && (el.onHoverStateChange = changePolyState);
        });
        this._polyline.onHoverStateChange = changePolyState;
        this._data = data;
        // Save the coordinate system for transition animation when data changed
        this._coordSys = coordSys;
        this._stackedOnPoints = stackedOnPoints;
        this._points = points;
        this._step = step;
        this._valueOrigin = valueOrigin;
        if (seriesModel.get('triggerLineEvent')) {
            this.packEventData(seriesModel, polyline);
            polygon && this.packEventData(seriesModel, polygon);
        }
    };
    LineView.prototype.packEventData = function(seriesModel, el) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getECData"])(el).eventData = {
            componentType: 'series',
            componentSubType: 'line',
            componentIndex: seriesModel.componentIndex,
            seriesIndex: seriesModel.seriesIndex,
            seriesName: seriesModel.name,
            seriesType: 'line'
        };
    };
    LineView.prototype.highlight = function(seriesModel, ecModel, api, payload) {
        var data = seriesModel.getData();
        var dataIndex = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryDataIndex"](data, payload);
        this._changePolyState('emphasis');
        if (!(dataIndex instanceof Array) && dataIndex != null && dataIndex >= 0) {
            var points = data.getLayout('points');
            var symbol = data.getItemGraphicEl(dataIndex);
            if (!symbol) {
                // Create a temporary symbol if it is not exists
                var x = points[dataIndex * 2];
                var y = points[dataIndex * 2 + 1];
                if (isNaN(x) || isNaN(y)) {
                    // Null data
                    return;
                }
                // fix #11360: shouldn't draw symbol outside clipShapeForSymbol
                if (this._clipShapeForSymbol && !this._clipShapeForSymbol.contain(x, y)) {
                    return;
                }
                var zlevel = seriesModel.get('zlevel') || 0;
                var z = seriesModel.get('z') || 0;
                symbol = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$Symbol$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](data, dataIndex);
                symbol.x = x;
                symbol.y = y;
                symbol.setZ(zlevel, z);
                // ensure label text of the temporary symbol is in front of line and area polygon
                var symbolLabel = symbol.getSymbolPath().getTextContent();
                if (symbolLabel) {
                    symbolLabel.zlevel = zlevel;
                    symbolLabel.z = z;
                    symbolLabel.z2 = this._polyline.z2 + 1;
                }
                symbol.__temp = true;
                data.setItemGraphicEl(dataIndex, symbol);
                // Stop scale animation
                symbol.stopSymbolAnimation(true);
                this.group.add(symbol);
            }
            symbol.highlight();
        } else {
            // Highlight whole series
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].prototype.highlight.call(this, seriesModel, ecModel, api, payload);
        }
    };
    LineView.prototype.downplay = function(seriesModel, ecModel, api, payload) {
        var data = seriesModel.getData();
        var dataIndex = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryDataIndex"](data, payload);
        this._changePolyState('normal');
        if (dataIndex != null && dataIndex >= 0) {
            var symbol = data.getItemGraphicEl(dataIndex);
            if (symbol) {
                if (symbol.__temp) {
                    data.setItemGraphicEl(dataIndex, null);
                    this.group.remove(symbol);
                } else {
                    symbol.downplay();
                }
            }
        } else {
            // FIXME
            // can not downplay completely.
            // Downplay whole series
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].prototype.downplay.call(this, seriesModel, ecModel, api, payload);
        }
    };
    LineView.prototype._changePolyState = function(toState) {
        var polygon = this._polygon;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setStatesFlag"])(this._polyline, toState);
        polygon && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setStatesFlag"])(polygon, toState);
    };
    LineView.prototype._newPolyline = function(points) {
        var polyline = this._polyline;
        // Remove previous created polyline
        if (polyline) {
            this._lineGroup.remove(polyline);
        }
        polyline = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$line$2f$poly$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ECPolyline"]({
            shape: {
                points: points
            },
            segmentIgnoreThreshold: 2,
            z2: 10
        });
        this._lineGroup.add(polyline);
        this._polyline = polyline;
        return polyline;
    };
    LineView.prototype._newPolygon = function(points, stackedOnPoints) {
        var polygon = this._polygon;
        // Remove previous created polygon
        if (polygon) {
            this._lineGroup.remove(polygon);
        }
        polygon = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$line$2f$poly$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ECPolygon"]({
            shape: {
                points: points,
                stackedOnPoints: stackedOnPoints
            },
            segmentIgnoreThreshold: 2
        });
        this._lineGroup.add(polygon);
        this._polygon = polygon;
        return polygon;
    };
    LineView.prototype._initSymbolLabelAnimation = function(data, coordSys, clipShape) {
        var isHorizontalOrRadial;
        var isCoordSysPolar;
        var baseAxis = coordSys.getBaseAxis();
        var isAxisInverse = baseAxis.inverse;
        if (coordSys.type === 'cartesian2d') {
            isHorizontalOrRadial = baseAxis.isHorizontal();
            isCoordSysPolar = false;
        } else if (coordSys.type === 'polar') {
            isHorizontalOrRadial = baseAxis.dim === 'angle';
            isCoordSysPolar = true;
        }
        var seriesModel = data.hostModel;
        var seriesDuration = seriesModel.get('animationDuration');
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"](seriesDuration)) {
            seriesDuration = seriesDuration(null);
        }
        var seriesDelay = seriesModel.get('animationDelay') || 0;
        var seriesDelayValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"](seriesDelay) ? seriesDelay(null) : seriesDelay;
        data.eachItemGraphicEl(function(symbol, idx) {
            var el = symbol;
            if (el) {
                var point = [
                    symbol.x,
                    symbol.y
                ];
                var start = void 0;
                var end = void 0;
                var current = void 0;
                if (clipShape) {
                    if (isCoordSysPolar) {
                        var polarClip = clipShape;
                        var coord = coordSys.pointToCoord(point);
                        if (isHorizontalOrRadial) {
                            start = polarClip.startAngle;
                            end = polarClip.endAngle;
                            current = -coord[1] / 180 * Math.PI;
                        } else {
                            start = polarClip.r0;
                            end = polarClip.r;
                            current = coord[0];
                        }
                    } else {
                        var gridClip = clipShape;
                        if (isHorizontalOrRadial) {
                            start = gridClip.x;
                            end = gridClip.x + gridClip.width;
                            current = symbol.x;
                        } else {
                            start = gridClip.y + gridClip.height;
                            end = gridClip.y;
                            current = symbol.y;
                        }
                    }
                }
                var ratio = end === start ? 0 : (current - start) / (end - start);
                if (isAxisInverse) {
                    ratio = 1 - ratio;
                }
                var delay = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"](seriesDelay) ? seriesDelay(idx) : seriesDuration * ratio + seriesDelayValue;
                var symbolPath = el.getSymbolPath();
                var text = symbolPath.getTextContent();
                el.attr({
                    scaleX: 0,
                    scaleY: 0
                });
                el.animateTo({
                    scaleX: 1,
                    scaleY: 1
                }, {
                    duration: 200,
                    setToFinal: true,
                    delay: delay
                });
                if (text) {
                    text.animateFrom({
                        style: {
                            opacity: 0
                        }
                    }, {
                        duration: 300,
                        delay: delay
                    });
                }
                symbolPath.disableLabelAnimation = true;
            }
        });
    };
    LineView.prototype._initOrUpdateEndLabel = function(seriesModel, coordSys, inheritColor) {
        var endLabelModel = seriesModel.getModel('endLabel');
        if (anyStateShowEndLabel(seriesModel)) {
            var data_2 = seriesModel.getData();
            var polyline = this._polyline;
            // series may be filtered.
            var points = data_2.getLayout('points');
            if (!points) {
                polyline.removeTextContent();
                this._endLabel = null;
                return;
            }
            var endLabel = this._endLabel;
            if (!endLabel) {
                endLabel = this._endLabel = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Text$3e$__["Text"]({
                    z2: 200 // should be higher than item symbol
                });
                endLabel.ignoreClip = true;
                polyline.setTextContent(this._endLabel);
                polyline.disableLabelAnimation = true;
            }
            // Find last non-NaN data to display data
            var dataIndex = getLastIndexNotNull(points);
            if (dataIndex >= 0) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setLabelStyle"])(polyline, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLabelStatesModels"])(seriesModel, 'endLabel'), {
                    inheritColor: inheritColor,
                    labelFetcher: seriesModel,
                    labelDataIndex: dataIndex,
                    defaultText: function(dataIndex, opt, interpolatedValue) {
                        return interpolatedValue != null ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$labelHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultInterpolatedLabel"])(data_2, interpolatedValue) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$labelHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultLabel"])(data_2, dataIndex);
                    },
                    enableTextSetter: true
                }, getEndLabelStateSpecified(endLabelModel, coordSys));
                polyline.textConfig.position = null;
            }
        } else if (this._endLabel) {
            this._polyline.removeTextContent();
            this._endLabel = null;
        }
    };
    LineView.prototype._endLabelOnDuring = function(percent, clipRect, data, animationRecord, valueAnimation, endLabelModel, coordSys) {
        var endLabel = this._endLabel;
        var polyline = this._polyline;
        if (endLabel) {
            // NOTE: Don't remove percent < 1. percent === 1 means the first frame during render.
            // The label is not prepared at this time.
            if (percent < 1 && animationRecord.originalX == null) {
                animationRecord.originalX = endLabel.x;
                animationRecord.originalY = endLabel.y;
            }
            var points = data.getLayout('points');
            var seriesModel = data.hostModel;
            var connectNulls = seriesModel.get('connectNulls');
            var precision = endLabelModel.get('precision');
            var distance = endLabelModel.get('distance') || 0;
            var baseAxis = coordSys.getBaseAxis();
            var isHorizontal = baseAxis.isHorizontal();
            var isBaseInversed = baseAxis.inverse;
            var clipShape = clipRect.shape;
            var xOrY = isBaseInversed ? isHorizontal ? clipShape.x : clipShape.y + clipShape.height : isHorizontal ? clipShape.x + clipShape.width : clipShape.y;
            var distanceX = (isHorizontal ? distance : 0) * (isBaseInversed ? -1 : 1);
            var distanceY = (isHorizontal ? 0 : -distance) * (isBaseInversed ? -1 : 1);
            var dim = isHorizontal ? 'x' : 'y';
            var dataIndexRange = getIndexRange(points, xOrY, dim);
            var indices = dataIndexRange.range;
            var diff = indices[1] - indices[0];
            var value = void 0;
            if (diff >= 1) {
                // diff > 1 && connectNulls, which is on the null data.
                if (diff > 1 && !connectNulls) {
                    var pt = getPointAtIndex(points, indices[0]);
                    endLabel.attr({
                        x: pt[0] + distanceX,
                        y: pt[1] + distanceY
                    });
                    valueAnimation && (value = seriesModel.getRawValue(indices[0]));
                } else {
                    var pt = polyline.getPointOn(xOrY, dim);
                    pt && endLabel.attr({
                        x: pt[0] + distanceX,
                        y: pt[1] + distanceY
                    });
                    var startValue = seriesModel.getRawValue(indices[0]);
                    var endValue = seriesModel.getRawValue(indices[1]);
                    valueAnimation && (value = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["interpolateRawValues"](data, precision, startValue, endValue, dataIndexRange.t));
                }
                animationRecord.lastFrameIndex = indices[0];
            } else {
                // If diff <= 0, which is the range is not found(Include NaN)
                // Choose the first point or last point.
                var idx = percent === 1 || animationRecord.lastFrameIndex > 0 ? indices[0] : 0;
                var pt = getPointAtIndex(points, idx);
                valueAnimation && (value = seriesModel.getRawValue(idx));
                endLabel.attr({
                    x: pt[0] + distanceX,
                    y: pt[1] + distanceY
                });
            }
            if (valueAnimation) {
                var inner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["labelInner"])(endLabel);
                if (typeof inner.setLabelText === 'function') {
                    inner.setLabelText(value);
                }
            }
        }
    };
    /**
   * @private
   */ // FIXME Two value axis
    LineView.prototype._doUpdateAnimation = function(data, stackedOnPoints, coordSys, api, step, valueOrigin, connectNulls) {
        var polyline = this._polyline;
        var polygon = this._polygon;
        var seriesModel = data.hostModel;
        var diff = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$line$2f$lineAnimationDiff$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this._data, data, this._stackedOnPoints, stackedOnPoints, this._coordSys, coordSys, this._valueOrigin, valueOrigin);
        var current = diff.current;
        var stackedOnCurrent = diff.stackedOnCurrent;
        var next = diff.next;
        var stackedOnNext = diff.stackedOnNext;
        if (step) {
            // TODO If stacked series is not step
            stackedOnCurrent = turnPointsIntoStep(diff.stackedOnCurrent, diff.current, coordSys, step, connectNulls);
            current = turnPointsIntoStep(diff.current, null, coordSys, step, connectNulls);
            stackedOnNext = turnPointsIntoStep(diff.stackedOnNext, diff.next, coordSys, step, connectNulls);
            next = turnPointsIntoStep(diff.next, null, coordSys, step, connectNulls);
        }
        // Don't apply animation if diff is large.
        // For better result and avoid memory explosion problems like
        // https://github.com/apache/incubator-echarts/issues/12229
        if (getBoundingDiff(current, next) > 3000 || polygon && getBoundingDiff(stackedOnCurrent, stackedOnNext) > 3000) {
            polyline.stopAnimation();
            polyline.setShape({
                points: next
            });
            if (polygon) {
                polygon.stopAnimation();
                polygon.setShape({
                    points: next,
                    stackedOnPoints: stackedOnNext
                });
            }
            return;
        }
        polyline.shape.__points = diff.current;
        polyline.shape.points = current;
        var target = {
            shape: {
                points: next
            }
        };
        // Also animate the original points.
        // If points reference is changed when turning into step line.
        if (diff.current !== current) {
            target.shape.__points = diff.next;
        }
        // Stop previous animation.
        polyline.stopAnimation();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateProps"](polyline, target, seriesModel);
        if (polygon) {
            polygon.setShape({
                // Reuse the points with polyline.
                points: current,
                stackedOnPoints: stackedOnCurrent
            });
            polygon.stopAnimation();
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateProps"](polygon, {
                shape: {
                    stackedOnPoints: stackedOnNext
                }
            }, seriesModel);
            // If use attr directly in updateProps.
            if (polyline.shape.points !== polygon.shape.points) {
                polygon.shape.points = polyline.shape.points;
            }
        }
        var updatedDataInfo = [];
        var diffStatus = diff.status;
        for(var i = 0; i < diffStatus.length; i++){
            var cmd = diffStatus[i].cmd;
            if (cmd === '=') {
                var el = data.getItemGraphicEl(diffStatus[i].idx1);
                if (el) {
                    updatedDataInfo.push({
                        el: el,
                        ptIdx: i // Index of points
                    });
                }
            }
        }
        if (polyline.animators && polyline.animators.length) {
            polyline.animators[0].during(function() {
                polygon && polygon.dirtyShape();
                var points = polyline.shape.__points;
                for(var i = 0; i < updatedDataInfo.length; i++){
                    var el = updatedDataInfo[i].el;
                    var offset = updatedDataInfo[i].ptIdx * 2;
                    el.x = points[offset];
                    el.y = points[offset + 1];
                    el.markRedraw();
                }
            });
        }
    };
    LineView.prototype.remove = function(ecModel) {
        var group = this.group;
        var oldData = this._data;
        this._lineGroup.removeAll();
        this._symbolDraw.remove(true);
        // Remove temporary created elements when highlighting
        oldData && oldData.eachItemGraphicEl(function(el, idx) {
            if (el.__temp) {
                group.remove(el);
                oldData.setItemGraphicEl(idx, null);
            }
        });
        this._polyline = this._polygon = this._coordSys = this._points = this._stackedOnPoints = this._endLabel = this._data = null;
    };
    LineView.type = 'line';
    return LineView;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = LineView;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/line/install.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$line$2f$LineSeries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/line/LineSeries.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$line$2f$LineView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/line/LineView.js [app-client] (ecmascript)");
// In case developer forget to include grid component
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$layout$2f$points$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/layout/points.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$processor$2f$dataSample$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/processor/dataSample.js [app-client] (ecmascript)");
;
;
;
;
function install(registers) {
    registers.registerChartView(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$line$2f$LineView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    registers.registerSeriesModel(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$line$2f$LineSeries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    registers.registerLayout((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$layout$2f$points$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('line', true));
    registers.registerVisual({
        seriesType: 'line',
        reset: function(seriesModel) {
            var data = seriesModel.getData();
            // Visual coding for legend
            var lineStyle = seriesModel.getModel('lineStyle').getLineStyle();
            if (lineStyle && !lineStyle.stroke) {
                // Fill in visual should be palette color if
                // has color callback
                lineStyle.stroke = data.getVisual('style').fill;
            }
            data.setVisual('legendLineStyle', lineStyle);
        }
    });
    // Down sample after filter
    registers.registerProcessor(registers.PRIORITY.PROCESSOR.STATISTIC, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$processor$2f$dataSample$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('line'));
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/line/install.js [app-client] (ecmascript) <export install as LineChart>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LineChart",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$line$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["install"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$line$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/line/install.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=6e80b_echarts_lib_chart_line_7faf300d._.js.map