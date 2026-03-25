module.exports = [
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataZoom/helper.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    "DATA_ZOOM_AXIS_DIMENSIONS",
    ()=>DATA_ZOOM_AXIS_DIMENSIONS,
    "collectReferCoordSysModelInfo",
    ()=>collectReferCoordSysModelInfo,
    "findEffectedDataZooms",
    ()=>findEffectedDataZooms,
    "getAxisIdPropName",
    ()=>getAxisIdPropName,
    "getAxisIndexPropName",
    ()=>getAxisIndexPropName,
    "getAxisMainType",
    ()=>getAxisMainType,
    "isCoordSupported",
    ()=>isCoordSupported
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
;
var DATA_ZOOM_AXIS_DIMENSIONS = [
    'x',
    'y',
    'radius',
    'angle',
    'single'
];
// Supported coords.
// FIXME: polar has been broken (but rarely used).
var SERIES_COORDS = [
    'cartesian2d',
    'polar',
    'singleAxis'
];
function isCoordSupported(seriesModel) {
    var coordType = seriesModel.get('coordinateSystem');
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["indexOf"])(SERIES_COORDS, coordType) >= 0;
}
function getAxisMainType(axisDim) {
    if ("TURBOPACK compile-time truthy", 1) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(axisDim);
    }
    return axisDim + 'Axis';
}
function getAxisIndexPropName(axisDim) {
    if ("TURBOPACK compile-time truthy", 1) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(axisDim);
    }
    return axisDim + 'AxisIndex';
}
function getAxisIdPropName(axisDim) {
    if ("TURBOPACK compile-time truthy", 1) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(axisDim);
    }
    return axisDim + 'AxisId';
}
function findEffectedDataZooms(ecModel, payload) {
    // Key: `DataZoomAxisDimension`
    var axisRecords = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createHashMap"])();
    var effectedModels = [];
    // Key: uid of dataZoomModel
    var effectedModelMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createHashMap"])();
    // Find the dataZooms specified by payload.
    ecModel.eachComponent({
        mainType: 'dataZoom',
        query: payload
    }, function(dataZoomModel) {
        if (!effectedModelMap.get(dataZoomModel.uid)) {
            addToEffected(dataZoomModel);
        }
    });
    // Start from the given dataZoomModels, travel the graph to find
    // all of the linked dataZoom models.
    var foundNewLink;
    do {
        foundNewLink = false;
        ecModel.eachComponent('dataZoom', processSingle);
    }while (foundNewLink)
    function processSingle(dataZoomModel) {
        if (!effectedModelMap.get(dataZoomModel.uid) && isLinked(dataZoomModel)) {
            addToEffected(dataZoomModel);
            foundNewLink = true;
        }
    }
    function addToEffected(dataZoom) {
        effectedModelMap.set(dataZoom.uid, true);
        effectedModels.push(dataZoom);
        markAxisControlled(dataZoom);
    }
    function isLinked(dataZoomModel) {
        var isLink = false;
        dataZoomModel.eachTargetAxis(function(axisDim, axisIndex) {
            var axisIdxArr = axisRecords.get(axisDim);
            if (axisIdxArr && axisIdxArr[axisIndex]) {
                isLink = true;
            }
        });
        return isLink;
    }
    function markAxisControlled(dataZoomModel) {
        dataZoomModel.eachTargetAxis(function(axisDim, axisIndex) {
            (axisRecords.get(axisDim) || axisRecords.set(axisDim, []))[axisIndex] = true;
        });
    }
    return effectedModels;
}
function collectReferCoordSysModelInfo(dataZoomModel) {
    var ecModel = dataZoomModel.ecModel;
    var coordSysInfoWrap = {
        infoList: [],
        infoMap: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createHashMap"])()
    };
    dataZoomModel.eachTargetAxis(function(axisDim, axisIndex) {
        var axisModel = ecModel.getComponent(getAxisMainType(axisDim), axisIndex);
        if (!axisModel) {
            return;
        }
        var coordSysModel = axisModel.getCoordSysModel();
        if (!coordSysModel) {
            return;
        }
        var coordSysUid = coordSysModel.uid;
        var coordSysInfo = coordSysInfoWrap.infoMap.get(coordSysUid);
        if (!coordSysInfo) {
            coordSysInfo = {
                model: coordSysModel,
                axisModels: []
            };
            coordSysInfoWrap.infoList.push(coordSysInfo);
            coordSysInfoWrap.infoMap.set(coordSysUid, coordSysInfo);
        }
        coordSysInfo.axisModels.push(axisModel);
    });
    return coordSysInfoWrap;
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataZoom/DataZoomModel.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/Component.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataZoom/helper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js [app-ssr] (ecmascript)");
;
;
;
;
;
var DataZoomAxisInfo = /** @class */ function() {
    function DataZoomAxisInfo() {
        this.indexList = [];
        this.indexMap = [];
    }
    DataZoomAxisInfo.prototype.add = function(axisCmptIdx) {
        // Remove duplication.
        if (!this.indexMap[axisCmptIdx]) {
            this.indexList.push(axisCmptIdx);
            this.indexMap[axisCmptIdx] = true;
        }
    };
    return DataZoomAxisInfo;
}();
var DataZoomModel = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(DataZoomModel, _super);
    function DataZoomModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = DataZoomModel.type;
        _this._autoThrottle = true;
        _this._noTarget = true;
        /**
     * It is `[rangeModeForMin, rangeModeForMax]`.
     * The optional values for `rangeMode`:
     * + `'value'` mode: the axis extent will always be determined by
     *     `dataZoom.startValue` and `dataZoom.endValue`, despite
     *     how data like and how `axis.min` and `axis.max` are.
     * + `'percent'` mode: `100` represents 100% of the `[dMin, dMax]`,
     *     where `dMin` is `axis.min` if `axis.min` specified, otherwise `data.extent[0]`,
     *     and `dMax` is `axis.max` if `axis.max` specified, otherwise `data.extent[1]`.
     *     Axis extent will be determined by the result of the percent of `[dMin, dMax]`.
     *
     * For example, when users are using dynamic data (update data periodically via `setOption`),
     * if in `'value`' mode, the window will be kept in a fixed value range despite how
     * data are appended, while if in `'percent'` mode, whe window range will be changed alone with
     * the appended data (suppose `axis.min` and `axis.max` are not specified).
     */ _this._rangePropMode = [
            'percent',
            'percent'
        ];
        return _this;
    }
    DataZoomModel.prototype.init = function(option, parentModel, ecModel) {
        var inputRawOption = retrieveRawOption(option);
        /**
     * Suppose a "main process" start at the point that model prepared (that is,
     * model initialized or merged or method called in `action`).
     * We should keep the `main process` idempotent, that is, given a set of values
     * on `option`, we get the same result.
     *
     * But sometimes, values on `option` will be updated for providing users
     * a "final calculated value" (`dataZoomProcessor` will do that). Those value
     * should not be the base/input of the `main process`.
     *
     * So in that case we should save and keep the input of the `main process`
     * separately, called `settledOption`.
     *
     * For example, consider the case:
     * (Step_1) brush zoom the grid by `toolbox.dataZoom`,
     *     where the original input `option.startValue`, `option.endValue` are earsed by
     *     calculated value.
     * (Step)2) click the legend to hide and show a series,
     *     where the new range is calculated by the earsed `startValue` and `endValue`,
     *     which brings incorrect result.
     */ this.settledOption = inputRawOption;
        this.mergeDefaultAndTheme(option, ecModel);
        this._doInit(inputRawOption);
    };
    DataZoomModel.prototype.mergeOption = function(newOption) {
        var inputRawOption = retrieveRawOption(newOption);
        // FIX #2591
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["merge"])(this.option, newOption, true);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["merge"])(this.settledOption, inputRawOption, true);
        this._doInit(inputRawOption);
    };
    DataZoomModel.prototype._doInit = function(inputRawOption) {
        var thisOption = this.option;
        this._setDefaultThrottle(inputRawOption);
        this._updateRangeUse(inputRawOption);
        var settledOption = this.settledOption;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])([
            [
                'start',
                'startValue'
            ],
            [
                'end',
                'endValue'
            ]
        ], function(names, index) {
            // start/end has higher priority over startValue/endValue if they
            // both set, but we should make chart.setOption({endValue: 1000})
            // effective, rather than chart.setOption({endValue: 1000, end: null}).
            if (this._rangePropMode[index] === 'value') {
                thisOption[names[0]] = settledOption[names[0]] = null;
            }
        // Otherwise do nothing and use the merge result.
        }, this);
        this._resetTarget();
    };
    DataZoomModel.prototype._resetTarget = function() {
        var optionOrient = this.get('orient', true);
        var targetAxisIndexMap = this._targetAxisInfoMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createHashMap"])();
        var hasAxisSpecified = this._fillSpecifiedTargetAxis(targetAxisIndexMap);
        if (hasAxisSpecified) {
            this._orient = optionOrient || this._makeAutoOrientByTargetAxis();
        } else {
            this._orient = optionOrient || 'horizontal';
            this._fillAutoTargetAxisByOrient(targetAxisIndexMap, this._orient);
        }
        this._noTarget = true;
        targetAxisIndexMap.each(function(axisInfo) {
            if (axisInfo.indexList.length) {
                this._noTarget = false;
            }
        }, this);
    };
    DataZoomModel.prototype._fillSpecifiedTargetAxis = function(targetAxisIndexMap) {
        var hasAxisSpecified = false;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DATA_ZOOM_AXIS_DIMENSIONS"], function(axisDim) {
            var refering = this.getReferringComponents((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAxisMainType"])(axisDim), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MULTIPLE_REFERRING"]);
            // When user set axisIndex as a empty array, we think that user specify axisIndex
            // but do not want use auto mode. Because empty array may be encountered when
            // some error occurred.
            if (!refering.specified) {
                return;
            }
            hasAxisSpecified = true;
            var axisInfo = new DataZoomAxisInfo();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(refering.models, function(axisModel) {
                axisInfo.add(axisModel.componentIndex);
            });
            targetAxisIndexMap.set(axisDim, axisInfo);
        }, this);
        return hasAxisSpecified;
    };
    DataZoomModel.prototype._fillAutoTargetAxisByOrient = function(targetAxisIndexMap, orient) {
        var ecModel = this.ecModel;
        var needAuto = true;
        // Find axis that parallel to dataZoom as default.
        if (needAuto) {
            var axisDim = orient === 'vertical' ? 'y' : 'x';
            var axisModels = ecModel.findComponents({
                mainType: axisDim + 'Axis'
            });
            setParallelAxis(axisModels, axisDim);
        }
        // Find axis that parallel to dataZoom as default.
        if (needAuto) {
            var axisModels = ecModel.findComponents({
                mainType: 'singleAxis',
                filter: function(axisModel) {
                    return axisModel.get('orient', true) === orient;
                }
            });
            setParallelAxis(axisModels, 'single');
        }
        function setParallelAxis(axisModels, axisDim) {
            // At least use the first parallel axis as the target axis.
            var axisModel = axisModels[0];
            if (!axisModel) {
                return;
            }
            var axisInfo = new DataZoomAxisInfo();
            axisInfo.add(axisModel.componentIndex);
            targetAxisIndexMap.set(axisDim, axisInfo);
            needAuto = false;
            // Find parallel axes in the same grid.
            if (axisDim === 'x' || axisDim === 'y') {
                var gridModel_1 = axisModel.getReferringComponents('grid', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SINGLE_REFERRING"]).models[0];
                gridModel_1 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(axisModels, function(axModel) {
                    if (axisModel.componentIndex !== axModel.componentIndex && gridModel_1 === axModel.getReferringComponents('grid', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SINGLE_REFERRING"]).models[0]) {
                        axisInfo.add(axModel.componentIndex);
                    }
                });
            }
        }
        if (needAuto) {
            // If no parallel axis, find the first category axis as default. (Also consider polar).
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DATA_ZOOM_AXIS_DIMENSIONS"], function(axisDim) {
                if (!needAuto) {
                    return;
                }
                var axisModels = ecModel.findComponents({
                    mainType: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAxisMainType"])(axisDim),
                    filter: function(axisModel) {
                        return axisModel.get('type', true) === 'category';
                    }
                });
                if (axisModels[0]) {
                    var axisInfo = new DataZoomAxisInfo();
                    axisInfo.add(axisModels[0].componentIndex);
                    targetAxisIndexMap.set(axisDim, axisInfo);
                    needAuto = false;
                }
            }, this);
        }
    };
    DataZoomModel.prototype._makeAutoOrientByTargetAxis = function() {
        var dim;
        // Find the first axis
        this.eachTargetAxis(function(axisDim) {
            !dim && (dim = axisDim);
        }, this);
        return dim === 'y' ? 'vertical' : 'horizontal';
    };
    DataZoomModel.prototype._setDefaultThrottle = function(inputRawOption) {
        // When first time user set throttle, auto throttle ends.
        if (inputRawOption.hasOwnProperty('throttle')) {
            this._autoThrottle = false;
        }
        if (this._autoThrottle) {
            var globalOption = this.ecModel.option;
            this.option.throttle = globalOption.animation && globalOption.animationDurationUpdate > 0 ? 100 : 20;
        }
    };
    DataZoomModel.prototype._updateRangeUse = function(inputRawOption) {
        var rangePropMode = this._rangePropMode;
        var rangeModeInOption = this.get('rangeMode');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])([
            [
                'start',
                'startValue'
            ],
            [
                'end',
                'endValue'
            ]
        ], function(names, index) {
            var percentSpecified = inputRawOption[names[0]] != null;
            var valueSpecified = inputRawOption[names[1]] != null;
            if (percentSpecified && !valueSpecified) {
                rangePropMode[index] = 'percent';
            } else if (!percentSpecified && valueSpecified) {
                rangePropMode[index] = 'value';
            } else if (rangeModeInOption) {
                rangePropMode[index] = rangeModeInOption[index];
            } else if (percentSpecified) {
                // percentSpecified && valueSpecified
                rangePropMode[index] = 'percent';
            }
        // else remain its original setting.
        });
    };
    DataZoomModel.prototype.noTarget = function() {
        return this._noTarget;
    };
    DataZoomModel.prototype.getFirstTargetAxisModel = function() {
        var firstAxisModel;
        this.eachTargetAxis(function(axisDim, axisIndex) {
            if (firstAxisModel == null) {
                firstAxisModel = this.ecModel.getComponent((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAxisMainType"])(axisDim), axisIndex);
            }
        }, this);
        return firstAxisModel;
    };
    /**
   * @param {Function} callback param: axisModel, dimNames, axisIndex, dataZoomModel, ecModel
   */ DataZoomModel.prototype.eachTargetAxis = function(callback, context) {
        this._targetAxisInfoMap.each(function(axisInfo, axisDim) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(axisInfo.indexList, function(axisIndex) {
                callback.call(context, axisDim, axisIndex);
            });
        });
    };
    /**
   * @return If not found, return null/undefined.
   */ DataZoomModel.prototype.getAxisProxy = function(axisDim, axisIndex) {
        var axisModel = this.getAxisModel(axisDim, axisIndex);
        if (axisModel) {
            return axisModel.__dzAxisProxy;
        }
    };
    /**
   * @return If not found, return null/undefined.
   */ DataZoomModel.prototype.getAxisModel = function(axisDim, axisIndex) {
        if ("TURBOPACK compile-time truthy", 1) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(axisDim && axisIndex != null);
        }
        var axisInfo = this._targetAxisInfoMap.get(axisDim);
        if (axisInfo && axisInfo.indexMap[axisIndex]) {
            return this.ecModel.getComponent((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAxisMainType"])(axisDim), axisIndex);
        }
    };
    /**
   * If not specified, set to undefined.
   */ DataZoomModel.prototype.setRawRange = function(opt) {
        var thisOption = this.option;
        var settledOption = this.settledOption;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])([
            [
                'start',
                'startValue'
            ],
            [
                'end',
                'endValue'
            ]
        ], function(names) {
            // Consider the pair <start, startValue>:
            // If one has value and the other one is `null/undefined`, we both set them
            // to `settledOption`. This strategy enables the feature to clear the original
            // value in `settledOption` to `null/undefined`.
            // But if both of them are `null/undefined`, we do not set them to `settledOption`
            // and keep `settledOption` with the original value. This strategy enables users to
            // only set <end or endValue> but not set <start or startValue> when calling
            // `dispatchAction`.
            // The pair <end, endValue> is treated in the same way.
            if (opt[names[0]] != null || opt[names[1]] != null) {
                thisOption[names[0]] = settledOption[names[0]] = opt[names[0]];
                thisOption[names[1]] = settledOption[names[1]] = opt[names[1]];
            }
        }, this);
        this._updateRangeUse(opt);
    };
    DataZoomModel.prototype.setCalculatedRange = function(opt) {
        var option = this.option;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])([
            'start',
            'startValue',
            'end',
            'endValue'
        ], function(name) {
            option[name] = opt[name];
        });
    };
    DataZoomModel.prototype.getPercentRange = function() {
        var axisProxy = this.findRepresentativeAxisProxy();
        if (axisProxy) {
            return axisProxy.getDataPercentWindow();
        }
    };
    /**
   * For example, chart.getModel().getComponent('dataZoom').getValueRange('y', 0);
   *
   * @return [startValue, endValue] value can only be '-' or finite number.
   */ DataZoomModel.prototype.getValueRange = function(axisDim, axisIndex) {
        if (axisDim == null && axisIndex == null) {
            var axisProxy = this.findRepresentativeAxisProxy();
            if (axisProxy) {
                return axisProxy.getDataValueWindow();
            }
        } else {
            return this.getAxisProxy(axisDim, axisIndex).getDataValueWindow();
        }
    };
    /**
   * @param axisModel If axisModel given, find axisProxy
   *      corresponding to the axisModel
   */ DataZoomModel.prototype.findRepresentativeAxisProxy = function(axisModel) {
        if (axisModel) {
            return axisModel.__dzAxisProxy;
        }
        // Find the first hosted axisProxy
        var firstProxy;
        var axisDimList = this._targetAxisInfoMap.keys();
        for(var i = 0; i < axisDimList.length; i++){
            var axisDim = axisDimList[i];
            var axisInfo = this._targetAxisInfoMap.get(axisDim);
            for(var j = 0; j < axisInfo.indexList.length; j++){
                var proxy = this.getAxisProxy(axisDim, axisInfo.indexList[j]);
                if (proxy.hostedBy(this)) {
                    return proxy;
                }
                if (!firstProxy) {
                    firstProxy = proxy;
                }
            }
        }
        // If no hosted proxy found, still need to return a proxy.
        // This case always happens in toolbox dataZoom, where axes are all hosted by
        // other dataZooms.
        return firstProxy;
    };
    DataZoomModel.prototype.getRangePropMode = function() {
        return this._rangePropMode.slice();
    };
    DataZoomModel.prototype.getOrient = function() {
        if ("TURBOPACK compile-time truthy", 1) {
            // Should not be called before initialized.
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(this._orient);
        }
        return this._orient;
    };
    DataZoomModel.type = 'dataZoom';
    DataZoomModel.dependencies = [
        'xAxis',
        'yAxis',
        'radiusAxis',
        'angleAxis',
        'singleAxis',
        'series',
        'toolbox'
    ];
    DataZoomModel.defaultOption = {
        // zlevel: 0,
        z: 4,
        filterMode: 'filter',
        start: 0,
        end: 100
    };
    return DataZoomModel;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
/**
 * Retrieve those raw params from option, which will be cached separately,
 * because they will be overwritten by normalized/calculated values in the main
 * process.
 */ function retrieveRawOption(option) {
    var ret = {};
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])([
        'start',
        'end',
        'startValue',
        'endValue',
        'throttle'
    ], function(name) {
        option.hasOwnProperty(name) && (ret[name] = option[name]);
    });
    return ret;
}
const __TURBOPACK__default__export__ = DataZoomModel;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataZoom/InsideZoomModel.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$DataZoomModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataZoom/DataZoomModel.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/component.js [app-ssr] (ecmascript)");
;
;
;
var InsideZoomModel = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(InsideZoomModel, _super);
    function InsideZoomModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = InsideZoomModel.type;
        return _this;
    }
    InsideZoomModel.type = 'dataZoom.inside';
    InsideZoomModel.defaultOption = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["inheritDefaultOption"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$DataZoomModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].defaultOption, {
        disabled: false,
        zoomLock: false,
        zoomOnMouseWheel: true,
        moveOnMouseMove: true,
        moveOnMouseWheel: false,
        preventDefaultMouseMove: true
    });
    return InsideZoomModel;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$DataZoomModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = InsideZoomModel;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataZoom/DataZoomView.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/view/Component.js [app-ssr] (ecmascript)");
;
;
var DataZoomView = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(DataZoomView, _super);
    function DataZoomView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = DataZoomView.type;
        return _this;
    }
    DataZoomView.prototype.render = function(dataZoomModel, ecModel, api, payload) {
        this.dataZoomModel = dataZoomModel;
        this.ecModel = ecModel;
        this.api = api;
    };
    DataZoomView.type = 'dataZoom';
    return DataZoomView;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = DataZoomView;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataZoom/roams.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
*/ // Only create one roam controller for each coordinate system.
// one roam controller might be refered by two inside data zoom
// components (for example, one for x and one for y). When user
// pan or zoom, only dispatch one action for those data zoom
// components.
__turbopack_context__.s([
    "disposeCoordSysRecordIfNeeded",
    ()=>disposeCoordSysRecordIfNeeded,
    "installDataZoomRoamProcessor",
    ()=>installDataZoomRoamProcessor,
    "setViewInfoToCoordSysRecord",
    ()=>setViewInfoToCoordSysRecord
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$RoamController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/helper/RoamController.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$throttle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/throttle.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataZoom/helper.js [app-ssr] (ecmascript)");
;
;
;
;
;
var inner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeInner"])();
function setViewInfoToCoordSysRecord(api, dataZoomModel, getRange) {
    inner(api).coordSysRecordMap.each(function(coordSysRecord) {
        var dzInfo = coordSysRecord.dataZoomInfoMap.get(dataZoomModel.uid);
        if (dzInfo) {
            dzInfo.getRange = getRange;
        }
    });
}
function disposeCoordSysRecordIfNeeded(api, dataZoomModel) {
    var coordSysRecordMap = inner(api).coordSysRecordMap;
    var coordSysKeyArr = coordSysRecordMap.keys();
    for(var i = 0; i < coordSysKeyArr.length; i++){
        var coordSysKey = coordSysKeyArr[i];
        var coordSysRecord = coordSysRecordMap.get(coordSysKey);
        var dataZoomInfoMap = coordSysRecord.dataZoomInfoMap;
        if (dataZoomInfoMap) {
            var dzUid = dataZoomModel.uid;
            var dzInfo = dataZoomInfoMap.get(dzUid);
            if (dzInfo) {
                dataZoomInfoMap.removeKey(dzUid);
                if (!dataZoomInfoMap.keys().length) {
                    disposeCoordSysRecord(coordSysRecordMap, coordSysRecord);
                }
            }
        }
    }
}
function disposeCoordSysRecord(coordSysRecordMap, coordSysRecord) {
    if (coordSysRecord) {
        coordSysRecordMap.removeKey(coordSysRecord.model.uid);
        var controller = coordSysRecord.controller;
        controller && controller.dispose();
    }
}
function createCoordSysRecord(api, coordSysModel) {
    // These init props will never change after record created.
    var coordSysRecord = {
        model: coordSysModel,
        containsPoint: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["curry"])(containsPoint, coordSysModel),
        dispatchAction: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["curry"])(dispatchAction, api),
        dataZoomInfoMap: null,
        controller: null
    };
    // Must not do anything depends on coordSysRecord outside the event handler here,
    // because coordSysRecord not completed yet.
    var controller = coordSysRecord.controller = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$RoamController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](api.getZr());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])([
        'pan',
        'zoom',
        'scrollMove'
    ], function(eventName) {
        controller.on(eventName, function(event) {
            var batch = [];
            coordSysRecord.dataZoomInfoMap.each(function(dzInfo) {
                // Check whether the behaviors (zoomOnMouseWheel, moveOnMouseMove,
                // moveOnMouseWheel, ...) enabled.
                if (!event.isAvailableBehavior(dzInfo.model.option)) {
                    return;
                }
                var method = (dzInfo.getRange || {})[eventName];
                var range = method && method(dzInfo.dzReferCoordSysInfo, coordSysRecord.model.mainType, coordSysRecord.controller, event);
                !dzInfo.model.get('disabled', true) && range && batch.push({
                    dataZoomId: dzInfo.model.id,
                    start: range[0],
                    end: range[1]
                });
            });
            batch.length && coordSysRecord.dispatchAction(batch);
        });
    });
    return coordSysRecord;
}
/**
 * This action will be throttled.
 */ function dispatchAction(api, batch) {
    if (!api.isDisposed()) {
        api.dispatchAction({
            type: 'dataZoom',
            animation: {
                easing: 'cubicOut',
                duration: 100
            },
            batch: batch
        });
    }
}
function containsPoint(coordSysModel, e, x, y) {
    return coordSysModel.coordinateSystem.containPoint([
        x,
        y
    ]);
}
/**
 * Merge roamController settings when multiple dataZooms share one roamController.
 */ function mergeControllerParams(dataZoomInfoMap, coordSysRecord, api) {
    var controlType;
    // DO NOT use reserved word (true, false, undefined) as key literally. Even if encapsulated
    // as string, it is probably revert to reserved word by compress tool. See #7411.
    var prefix = 'type_';
    var typePriority = {
        'type_true': 2,
        'type_move': 1,
        'type_false': 0,
        'type_undefined': -1
    };
    var preventDefaultMouseMove = true;
    dataZoomInfoMap.each(function(dataZoomInfo) {
        var dataZoomModel = dataZoomInfo.model;
        var oneType = dataZoomModel.get('disabled', true) ? false : dataZoomModel.get('zoomLock', true) ? 'move' : true;
        if (typePriority[prefix + oneType] > typePriority[prefix + controlType]) {
            controlType = oneType;
        }
        // Prevent default move event by default. If one false, do not prevent. Otherwise
        // users may be confused why it does not work when multiple insideZooms exist.
        preventDefaultMouseMove = preventDefaultMouseMove && dataZoomModel.get('preventDefaultMouseMove', true);
    });
    return {
        controlType: controlType,
        opt: {
            // RoamController will enable all of these functionalities,
            // and the final behavior is determined by its event listener
            // provided by each inside zoom.
            zoomOnMouseWheel: true,
            moveOnMouseMove: true,
            moveOnMouseWheel: true,
            preventDefaultMouseMove: !!preventDefaultMouseMove,
            api: api,
            zInfo: {
                component: coordSysRecord.model
            },
            triggerInfo: {
                roamTrigger: null,
                isInSelf: coordSysRecord.containsPoint
            }
        }
    };
}
function installDataZoomRoamProcessor(registers) {
    registers.registerProcessor(registers.PRIORITY.PROCESSOR.FILTER, function(ecModel, api) {
        var apiInner = inner(api);
        var coordSysRecordMap = apiInner.coordSysRecordMap || (apiInner.coordSysRecordMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createHashMap"])());
        coordSysRecordMap.each(function(coordSysRecord) {
            // `coordSysRecordMap` always exists (because it holds the `roam controller`, which should
            // better not re-create each time), but clear `dataZoomInfoMap` each round of the workflow.
            coordSysRecord.dataZoomInfoMap = null;
        });
        ecModel.eachComponent({
            mainType: 'dataZoom',
            subType: 'inside'
        }, function(dataZoomModel) {
            var dzReferCoordSysWrap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collectReferCoordSysModelInfo"])(dataZoomModel);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(dzReferCoordSysWrap.infoList, function(dzCoordSysInfo) {
                var coordSysUid = dzCoordSysInfo.model.uid;
                var coordSysRecord = coordSysRecordMap.get(coordSysUid) || coordSysRecordMap.set(coordSysUid, createCoordSysRecord(api, dzCoordSysInfo.model));
                var dataZoomInfoMap = coordSysRecord.dataZoomInfoMap || (coordSysRecord.dataZoomInfoMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createHashMap"])());
                // Notice these props might be changed each time for a single dataZoomModel.
                dataZoomInfoMap.set(dataZoomModel.uid, {
                    dzReferCoordSysInfo: dzCoordSysInfo,
                    model: dataZoomModel,
                    getRange: null
                });
            });
        });
        // (1) Merge dataZoom settings for each coord sys and set to the roam controller.
        // (2) Clear coord sys if not refered by any dataZoom.
        coordSysRecordMap.each(function(coordSysRecord) {
            var controller = coordSysRecord.controller;
            var firstDzInfo;
            var dataZoomInfoMap = coordSysRecord.dataZoomInfoMap;
            if (dataZoomInfoMap) {
                var firstDzKey = dataZoomInfoMap.keys()[0];
                if (firstDzKey != null) {
                    firstDzInfo = dataZoomInfoMap.get(firstDzKey);
                }
            }
            if (!firstDzInfo) {
                disposeCoordSysRecord(coordSysRecordMap, coordSysRecord);
                return;
            }
            var controllerParams = mergeControllerParams(dataZoomInfoMap, coordSysRecord, api);
            controller.enable(controllerParams.controlType, controllerParams.opt);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$throttle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createOrUpdate"](coordSysRecord, 'dispatchAction', firstDzInfo.model.get('throttle', true), 'fixRate');
        });
    });
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataZoom/InsideZoomView.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$DataZoomView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataZoom/DataZoomView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$sliderMove$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/helper/sliderMove.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$roams$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataZoom/roams.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
;
;
;
;
;
var InsideZoomView = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(InsideZoomView, _super);
    function InsideZoomView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'dataZoom.inside';
        return _this;
    }
    InsideZoomView.prototype.render = function(dataZoomModel, ecModel, api) {
        _super.prototype.render.apply(this, arguments);
        if (dataZoomModel.noTarget()) {
            this._clear();
            return;
        }
        // Hence the `throttle` util ensures to preserve command order,
        // here simply updating range all the time will not cause missing
        // any of the the roam change.
        this.range = dataZoomModel.getPercentRange();
        // Reset controllers.
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$roams$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setViewInfoToCoordSysRecord"](api, dataZoomModel, {
            pan: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bind"])(getRangeHandlers.pan, this),
            zoom: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bind"])(getRangeHandlers.zoom, this),
            scrollMove: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bind"])(getRangeHandlers.scrollMove, this)
        });
    };
    InsideZoomView.prototype.dispose = function() {
        this._clear();
        _super.prototype.dispose.apply(this, arguments);
    };
    InsideZoomView.prototype._clear = function() {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$roams$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["disposeCoordSysRecordIfNeeded"](this.api, this.dataZoomModel);
        this.range = null;
    };
    InsideZoomView.type = 'dataZoom.inside';
    return InsideZoomView;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$DataZoomView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
var getRangeHandlers = {
    zoom: function(coordSysInfo, coordSysMainType, controller, e) {
        var lastRange = this.range;
        var range = lastRange.slice();
        // Calculate transform by the first axis.
        var axisModel = coordSysInfo.axisModels[0];
        if (!axisModel) {
            return;
        }
        var directionInfo = getDirectionInfo[coordSysMainType](null, [
            e.originX,
            e.originY
        ], axisModel, controller, coordSysInfo);
        var percentPoint = (directionInfo.signal > 0 ? directionInfo.pixelStart + directionInfo.pixelLength - directionInfo.pixel : directionInfo.pixel - directionInfo.pixelStart) / directionInfo.pixelLength * (range[1] - range[0]) + range[0];
        var scale = Math.max(1 / e.scale, 0);
        range[0] = (range[0] - percentPoint) * scale + percentPoint;
        range[1] = (range[1] - percentPoint) * scale + percentPoint;
        // Restrict range.
        var minMaxSpan = this.dataZoomModel.findRepresentativeAxisProxy().getMinMaxSpan();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$sliderMove$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(0, range, [
            0,
            100
        ], 0, minMaxSpan.minSpan, minMaxSpan.maxSpan);
        this.range = range;
        if (lastRange[0] !== range[0] || lastRange[1] !== range[1]) {
            return range;
        }
    },
    pan: makeMover(function(range, axisModel, coordSysInfo, coordSysMainType, controller, e) {
        var directionInfo = getDirectionInfo[coordSysMainType]([
            e.oldX,
            e.oldY
        ], [
            e.newX,
            e.newY
        ], axisModel, controller, coordSysInfo);
        return directionInfo.signal * (range[1] - range[0]) * directionInfo.pixel / directionInfo.pixelLength;
    }),
    scrollMove: makeMover(function(range, axisModel, coordSysInfo, coordSysMainType, controller, e) {
        var directionInfo = getDirectionInfo[coordSysMainType]([
            0,
            0
        ], [
            e.scrollDelta,
            e.scrollDelta
        ], axisModel, controller, coordSysInfo);
        return directionInfo.signal * (range[1] - range[0]) * e.scrollDelta;
    })
};
function makeMover(getPercentDelta) {
    return function(coordSysInfo, coordSysMainType, controller, e) {
        var lastRange = this.range;
        var range = lastRange.slice();
        // Calculate transform by the first axis.
        var axisModel = coordSysInfo.axisModels[0];
        if (!axisModel) {
            return;
        }
        var percentDelta = getPercentDelta(range, axisModel, coordSysInfo, coordSysMainType, controller, e);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$sliderMove$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(percentDelta, range, [
            0,
            100
        ], 'all');
        this.range = range;
        if (lastRange[0] !== range[0] || lastRange[1] !== range[1]) {
            return range;
        }
    };
}
var getDirectionInfo = {
    grid: function(oldPoint, newPoint, axisModel, controller, coordSysInfo) {
        var axis = axisModel.axis;
        var ret = {};
        var rect = coordSysInfo.model.coordinateSystem.getRect();
        oldPoint = oldPoint || [
            0,
            0
        ];
        if (axis.dim === 'x') {
            ret.pixel = newPoint[0] - oldPoint[0];
            ret.pixelLength = rect.width;
            ret.pixelStart = rect.x;
            ret.signal = axis.inverse ? 1 : -1;
        } else {
            // axis.dim === 'y'
            ret.pixel = newPoint[1] - oldPoint[1];
            ret.pixelLength = rect.height;
            ret.pixelStart = rect.y;
            ret.signal = axis.inverse ? -1 : 1;
        }
        return ret;
    },
    polar: function(oldPoint, newPoint, axisModel, controller, coordSysInfo) {
        var axis = axisModel.axis;
        var ret = {};
        var polar = coordSysInfo.model.coordinateSystem;
        var radiusExtent = polar.getRadiusAxis().getExtent();
        var angleExtent = polar.getAngleAxis().getExtent();
        oldPoint = oldPoint ? polar.pointToCoord(oldPoint) : [
            0,
            0
        ];
        newPoint = polar.pointToCoord(newPoint);
        if (axisModel.mainType === 'radiusAxis') {
            ret.pixel = newPoint[0] - oldPoint[0];
            // ret.pixelLength = Math.abs(radiusExtent[1] - radiusExtent[0]);
            // ret.pixelStart = Math.min(radiusExtent[0], radiusExtent[1]);
            ret.pixelLength = radiusExtent[1] - radiusExtent[0];
            ret.pixelStart = radiusExtent[0];
            ret.signal = axis.inverse ? 1 : -1;
        } else {
            // 'angleAxis'
            ret.pixel = newPoint[1] - oldPoint[1];
            // ret.pixelLength = Math.abs(angleExtent[1] - angleExtent[0]);
            // ret.pixelStart = Math.min(angleExtent[0], angleExtent[1]);
            ret.pixelLength = angleExtent[1] - angleExtent[0];
            ret.pixelStart = angleExtent[0];
            ret.signal = axis.inverse ? -1 : 1;
        }
        return ret;
    },
    singleAxis: function(oldPoint, newPoint, axisModel, controller, coordSysInfo) {
        var axis = axisModel.axis;
        var rect = coordSysInfo.model.coordinateSystem.getRect();
        var ret = {};
        oldPoint = oldPoint || [
            0,
            0
        ];
        if (axis.orient === 'horizontal') {
            ret.pixel = newPoint[0] - oldPoint[0];
            ret.pixelLength = rect.width;
            ret.pixelStart = rect.x;
            ret.signal = axis.inverse ? 1 : -1;
        } else {
            // 'vertical'
            ret.pixel = newPoint[1] - oldPoint[1];
            ret.pixelLength = rect.height;
            ret.pixelStart = rect.y;
            ret.signal = axis.inverse ? -1 : 1;
        }
        return ret;
    }
};
const __TURBOPACK__default__export__ = InsideZoomView;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataZoom/AxisProxy.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/number.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$sliderMove$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/helper/sliderMove.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/axisHelper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$scaleRawExtentInfo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/scaleRawExtentInfo.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataZoom/helper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
var each = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"];
var asc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["asc"];
/**
 * Operate single axis.
 * One axis can only operated by one axis operator.
 * Different dataZoomModels may be defined to operate the same axis.
 * (i.e. 'inside' data zoom and 'slider' data zoom components)
 * So dataZoomModels share one axisProxy in that case.
 */ var AxisProxy = /** @class */ function() {
    function AxisProxy(dimName, axisIndex, dataZoomModel, ecModel) {
        this._dimName = dimName;
        this._axisIndex = axisIndex;
        this.ecModel = ecModel;
        this._dataZoomModel = dataZoomModel;
    // /**
    //  * @readOnly
    //  * @private
    //  */
    // this.hasSeriesStacked;
    }
    /**
   * Whether the axisProxy is hosted by dataZoomModel.
   */ AxisProxy.prototype.hostedBy = function(dataZoomModel) {
        return this._dataZoomModel === dataZoomModel;
    };
    /**
   * @return Value can only be NaN or finite value.
   */ AxisProxy.prototype.getDataValueWindow = function() {
        return this._valueWindow.slice();
    };
    /**
   * @return {Array.<number>}
   */ AxisProxy.prototype.getDataPercentWindow = function() {
        return this._percentWindow.slice();
    };
    AxisProxy.prototype.getTargetSeriesModels = function() {
        var seriesModels = [];
        this.ecModel.eachSeries(function(seriesModel) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isCoordSupported"])(seriesModel)) {
                var axisMainType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAxisMainType"])(this._dimName);
                var axisModel = seriesModel.getReferringComponents(axisMainType, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SINGLE_REFERRING"]).models[0];
                if (axisModel && this._axisIndex === axisModel.componentIndex) {
                    seriesModels.push(seriesModel);
                }
            }
        }, this);
        return seriesModels;
    };
    AxisProxy.prototype.getAxisModel = function() {
        return this.ecModel.getComponent(this._dimName + 'Axis', this._axisIndex);
    };
    AxisProxy.prototype.getMinMaxSpan = function() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clone"](this._minMaxSpan);
    };
    /**
   * Only calculate by given range and this._dataExtent, do not change anything.
   */ AxisProxy.prototype.calculateDataWindow = function(opt) {
        var dataExtent = this._dataExtent;
        var axisModel = this.getAxisModel();
        var scale = axisModel.axis.scale;
        var rangePropMode = this._dataZoomModel.getRangePropMode();
        var percentExtent = [
            0,
            100
        ];
        var percentWindow = [];
        var valueWindow = [];
        var hasPropModeValue;
        each([
            'start',
            'end'
        ], function(prop, idx) {
            var boundPercent = opt[prop];
            var boundValue = opt[prop + 'Value'];
            // Notice: dataZoom is based either on `percentProp` ('start', 'end') or
            // on `valueProp` ('startValue', 'endValue'). (They are based on the data extent
            // but not min/max of axis, which will be calculated by data window then).
            // The former one is suitable for cases that a dataZoom component controls multiple
            // axes with different unit or extent, and the latter one is suitable for accurate
            // zoom by pixel (e.g., in dataZoomSelect).
            // we use `getRangePropMode()` to mark which prop is used. `rangePropMode` is updated
            // only when setOption or dispatchAction, otherwise it remains its original value.
            // (Why not only record `percentProp` and always map to `valueProp`? Because
            // the map `valueProp` -> `percentProp` -> `valueProp` probably not the original
            // `valueProp`. consider two axes constrolled by one dataZoom. They have different
            // data extent. All of values that are overflow the `dataExtent` will be calculated
            // to percent '100%').
            if (rangePropMode[idx] === 'percent') {
                boundPercent == null && (boundPercent = percentExtent[idx]);
                // Use scale.parse to math round for category or time axis.
                boundValue = scale.parse(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["linearMap"](boundPercent, percentExtent, dataExtent));
            } else {
                hasPropModeValue = true;
                boundValue = boundValue == null ? dataExtent[idx] : scale.parse(boundValue);
                // Calculating `percent` from `value` may be not accurate, because
                // This calculation can not be inversed, because all of values that
                // are overflow the `dataExtent` will be calculated to percent '100%'
                boundPercent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["linearMap"](boundValue, dataExtent, percentExtent);
            }
            // valueWindow[idx] = round(boundValue);
            // percentWindow[idx] = round(boundPercent);
            // fallback to extent start/end when parsed value or percent is invalid
            valueWindow[idx] = boundValue == null || isNaN(boundValue) ? dataExtent[idx] : boundValue;
            percentWindow[idx] = boundPercent == null || isNaN(boundPercent) ? percentExtent[idx] : boundPercent;
        });
        asc(valueWindow);
        asc(percentWindow);
        // The windows from user calling of `dispatchAction` might be out of the extent,
        // or do not obey the `min/maxSpan`, `min/maxValueSpan`. But we don't restrict window
        // by `zoomLock` here, because we see `zoomLock` just as a interaction constraint,
        // where API is able to initialize/modify the window size even though `zoomLock`
        // specified.
        var spans = this._minMaxSpan;
        hasPropModeValue ? restrictSet(valueWindow, percentWindow, dataExtent, percentExtent, false) : restrictSet(percentWindow, valueWindow, percentExtent, dataExtent, true);
        function restrictSet(fromWindow, toWindow, fromExtent, toExtent, toValue) {
            var suffix = toValue ? 'Span' : 'ValueSpan';
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$sliderMove$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(0, fromWindow, fromExtent, 'all', spans['min' + suffix], spans['max' + suffix]);
            for(var i = 0; i < 2; i++){
                toWindow[i] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["linearMap"](fromWindow[i], fromExtent, toExtent, true);
                toValue && (toWindow[i] = scale.parse(toWindow[i]));
            }
        }
        return {
            valueWindow: valueWindow,
            percentWindow: percentWindow
        };
    };
    /**
   * Notice: reset should not be called before series.restoreData() is called,
   * so it is recommended to be called in "process stage" but not "model init
   * stage".
   */ AxisProxy.prototype.reset = function(dataZoomModel) {
        if (dataZoomModel !== this._dataZoomModel) {
            return;
        }
        var targetSeries = this.getTargetSeriesModels();
        // Culculate data window and data extent, and record them.
        this._dataExtent = calculateDataExtent(this, this._dimName, targetSeries);
        // `calculateDataWindow` uses min/maxSpan.
        this._updateMinMaxSpan();
        var dataWindow = this.calculateDataWindow(dataZoomModel.settledOption);
        this._valueWindow = dataWindow.valueWindow;
        this._percentWindow = dataWindow.percentWindow;
        // Update axis setting then.
        this._setAxisModel();
    };
    AxisProxy.prototype.filterData = function(dataZoomModel, api) {
        if (dataZoomModel !== this._dataZoomModel) {
            return;
        }
        var axisDim = this._dimName;
        var seriesModels = this.getTargetSeriesModels();
        var filterMode = dataZoomModel.get('filterMode');
        var valueWindow = this._valueWindow;
        if (filterMode === 'none') {
            return;
        }
        // FIXME
        // Toolbox may has dataZoom injected. And if there are stacked bar chart
        // with NaN data, NaN will be filtered and stack will be wrong.
        // So we need to force the mode to be set empty.
        // In fect, it is not a big deal that do not support filterMode-'filter'
        // when using toolbox#dataZoom, utill tooltip#dataZoom support "single axis
        // selection" some day, which might need "adapt to data extent on the
        // otherAxis", which is disabled by filterMode-'empty'.
        // But currently, stack has been fixed to based on value but not index,
        // so this is not an issue any more.
        // let otherAxisModel = this.getOtherAxisModel();
        // if (dataZoomModel.get('$fromToolbox')
        //     && otherAxisModel
        //     && otherAxisModel.hasSeriesStacked
        // ) {
        //     filterMode = 'empty';
        // }
        // TODO
        // filterMode 'weakFilter' and 'empty' is not optimized for huge data yet.
        each(seriesModels, function(seriesModel) {
            var seriesData = seriesModel.getData();
            var dataDims = seriesData.mapDimensionsAll(axisDim);
            if (!dataDims.length) {
                return;
            }
            if (filterMode === 'weakFilter') {
                var store_1 = seriesData.getStore();
                var dataDimIndices_1 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["map"](dataDims, function(dim) {
                    return seriesData.getDimensionIndex(dim);
                }, seriesData);
                seriesData.filterSelf(function(dataIndex) {
                    var leftOut;
                    var rightOut;
                    var hasValue;
                    for(var i = 0; i < dataDims.length; i++){
                        var value = store_1.get(dataDimIndices_1[i], dataIndex);
                        var thisHasValue = !isNaN(value);
                        var thisLeftOut = value < valueWindow[0];
                        var thisRightOut = value > valueWindow[1];
                        if (thisHasValue && !thisLeftOut && !thisRightOut) {
                            return true;
                        }
                        thisHasValue && (hasValue = true);
                        thisLeftOut && (leftOut = true);
                        thisRightOut && (rightOut = true);
                    }
                    // If both left out and right out, do not filter.
                    return hasValue && leftOut && rightOut;
                });
            } else {
                each(dataDims, function(dim) {
                    if (filterMode === 'empty') {
                        seriesModel.setData(seriesData = seriesData.map(dim, function(value) {
                            return !isInWindow(value) ? NaN : value;
                        }));
                    } else {
                        var range = {};
                        range[dim] = valueWindow;
                        // console.time('select');
                        seriesData.selectRange(range);
                    // console.timeEnd('select');
                    }
                });
            }
            each(dataDims, function(dim) {
                seriesData.setApproximateExtent(valueWindow, dim);
            });
        });
        function isInWindow(value) {
            return value >= valueWindow[0] && value <= valueWindow[1];
        }
    };
    AxisProxy.prototype._updateMinMaxSpan = function() {
        var minMaxSpan = this._minMaxSpan = {};
        var dataZoomModel = this._dataZoomModel;
        var dataExtent = this._dataExtent;
        each([
            'min',
            'max'
        ], function(minMax) {
            var percentSpan = dataZoomModel.get(minMax + 'Span');
            var valueSpan = dataZoomModel.get(minMax + 'ValueSpan');
            valueSpan != null && (valueSpan = this.getAxisModel().axis.scale.parse(valueSpan));
            // minValueSpan and maxValueSpan has higher priority than minSpan and maxSpan
            if (valueSpan != null) {
                percentSpan = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["linearMap"](dataExtent[0] + valueSpan, dataExtent, [
                    0,
                    100
                ], true);
            } else if (percentSpan != null) {
                valueSpan = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["linearMap"](percentSpan, [
                    0,
                    100
                ], dataExtent, true) - dataExtent[0];
            }
            minMaxSpan[minMax + 'Span'] = percentSpan;
            minMaxSpan[minMax + 'ValueSpan'] = valueSpan;
        }, this);
    };
    AxisProxy.prototype._setAxisModel = function() {
        var axisModel = this.getAxisModel();
        var percentWindow = this._percentWindow;
        var valueWindow = this._valueWindow;
        if (!percentWindow) {
            return;
        }
        // [0, 500]: arbitrary value, guess axis extent.
        var precision = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPixelPrecision"](valueWindow, [
            0,
            500
        ]);
        precision = Math.min(precision, 20);
        // For value axis, if min/max/scale are not set, we just use the extent obtained
        // by series data, which may be a little different from the extent calculated by
        // `axisHelper.getScaleExtent`. But the different just affects the experience a
        // little when zooming. So it will not be fixed until some users require it strongly.
        var rawExtentInfo = axisModel.axis.scale.rawExtentInfo;
        if (percentWindow[0] !== 0) {
            rawExtentInfo.setDeterminedMinMax('min', +valueWindow[0].toFixed(precision));
        }
        if (percentWindow[1] !== 100) {
            rawExtentInfo.setDeterminedMinMax('max', +valueWindow[1].toFixed(precision));
        }
        rawExtentInfo.freeze();
    };
    return AxisProxy;
}();
function calculateDataExtent(axisProxy, axisDim, seriesModels) {
    var dataExtent = [
        Infinity,
        -Infinity
    ];
    each(seriesModels, function(seriesModel) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unionAxisExtentFromData"])(dataExtent, seriesModel.getData(), axisDim);
    });
    // It is important to get "consistent" extent when more then one axes is
    // controlled by a `dataZoom`, otherwise those axes will not be synchronized
    // when zooming. But it is difficult to know what is "consistent", considering
    // axes have different type or even different meanings (For example, two
    // time axes are used to compare data of the same date in different years).
    // So basically dataZoom just obtains extent by series.data (in category axis
    // extent can be obtained from axis.data).
    // Nevertheless, user can set min/max/scale on axes to make extent of axes
    // consistent.
    var axisModel = axisProxy.getAxisModel();
    var rawExtentResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$scaleRawExtentInfo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ensureScaleRawExtentInfo"])(axisModel.axis.scale, axisModel, dataExtent).calculate();
    return [
        rawExtentResult.min,
        rawExtentResult.max
    ];
}
const __TURBOPACK__default__export__ = AxisProxy;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataZoom/dataZoomProcessor.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataZoom/helper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$AxisProxy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataZoom/AxisProxy.js [app-ssr] (ecmascript)");
;
;
;
var dataZoomProcessor = {
    // `dataZoomProcessor` will only be performed in needed series. Consider if
    // there is a line series and a pie series, it is better not to update the
    // line series if only pie series is needed to be updated.
    getTargetSeries: function(ecModel) {
        function eachAxisModel(cb) {
            ecModel.eachComponent('dataZoom', function(dataZoomModel) {
                dataZoomModel.eachTargetAxis(function(axisDim, axisIndex) {
                    var axisModel = ecModel.getComponent((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAxisMainType"])(axisDim), axisIndex);
                    cb(axisDim, axisIndex, axisModel, dataZoomModel);
                });
            });
        }
        // FIXME: it brings side-effect to `getTargetSeries`.
        // Prepare axis proxies.
        eachAxisModel(function(axisDim, axisIndex, axisModel, dataZoomModel) {
            // dispose all last axis proxy, in case that some axis are deleted.
            axisModel.__dzAxisProxy = null;
        });
        var proxyList = [];
        eachAxisModel(function(axisDim, axisIndex, axisModel, dataZoomModel) {
            // Different dataZooms may constrol the same axis. In that case,
            // an axisProxy serves both of them.
            if (!axisModel.__dzAxisProxy) {
                // Use the first dataZoomModel as the main model of axisProxy.
                axisModel.__dzAxisProxy = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$AxisProxy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](axisDim, axisIndex, dataZoomModel, ecModel);
                proxyList.push(axisModel.__dzAxisProxy);
            }
        });
        var seriesModelMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createHashMap"])();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(proxyList, function(axisProxy) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(axisProxy.getTargetSeriesModels(), function(seriesModel) {
                seriesModelMap.set(seriesModel.uid, seriesModel);
            });
        });
        return seriesModelMap;
    },
    // Consider appendData, where filter should be performed. Because data process is
    // in block mode currently, it is not need to worry about that the overallProgress
    // execute every frame.
    overallReset: function(ecModel, api) {
        ecModel.eachComponent('dataZoom', function(dataZoomModel) {
            // We calculate window and reset axis here but not in model
            // init stage and not after action dispatch handler, because
            // reset should be called after seriesData.restoreData.
            dataZoomModel.eachTargetAxis(function(axisDim, axisIndex) {
                dataZoomModel.getAxisProxy(axisDim, axisIndex).reset(dataZoomModel);
            });
            // Caution: data zoom filtering is order sensitive when using
            // percent range and no min/max/scale set on axis.
            // For example, we have dataZoom definition:
            // [
            //      {xAxisIndex: 0, start: 30, end: 70},
            //      {yAxisIndex: 0, start: 20, end: 80}
            // ]
            // In this case, [20, 80] of y-dataZoom should be based on data
            // that have filtered by x-dataZoom using range of [30, 70],
            // but should not be based on full raw data. Thus sliding
            // x-dataZoom will change both ranges of xAxis and yAxis,
            // while sliding y-dataZoom will only change the range of yAxis.
            // So we should filter x-axis after reset x-axis immediately,
            // and then reset y-axis and filter y-axis.
            dataZoomModel.eachTargetAxis(function(axisDim, axisIndex) {
                dataZoomModel.getAxisProxy(axisDim, axisIndex).filterData(dataZoomModel, api);
            });
        });
        ecModel.eachComponent('dataZoom', function(dataZoomModel) {
            // Fullfill all of the range props so that user
            // is able to get them from chart.getOption().
            var axisProxy = dataZoomModel.findRepresentativeAxisProxy();
            if (axisProxy) {
                var percentRange = axisProxy.getDataPercentWindow();
                var valueRange = axisProxy.getDataValueWindow();
                dataZoomModel.setCalculatedRange({
                    start: percentRange[0],
                    end: percentRange[1],
                    startValue: valueRange[0],
                    endValue: valueRange[1]
                });
            }
        });
    }
};
const __TURBOPACK__default__export__ = dataZoomProcessor;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataZoom/dataZoomAction.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    ()=>installDataZoomAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataZoom/helper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
;
;
function installDataZoomAction(registers) {
    registers.registerAction('dataZoom', function(payload, ecModel) {
        var effectedModels = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findEffectedDataZooms"])(ecModel, payload);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(effectedModels, function(dataZoomModel) {
            dataZoomModel.setRawRange({
                start: payload.start,
                end: payload.end,
                startValue: payload.startValue,
                endValue: payload.endValue
            });
        });
    });
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataZoom/installCommon.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    ()=>installCommon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$dataZoomProcessor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataZoom/dataZoomProcessor.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$dataZoomAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataZoom/dataZoomAction.js [app-ssr] (ecmascript)");
;
;
var installed = false;
function installCommon(registers) {
    if (installed) {
        return;
    }
    installed = true;
    registers.registerProcessor(registers.PRIORITY.PROCESSOR.FILTER, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$dataZoomProcessor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$dataZoomAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(registers);
    registers.registerSubTypeDefaulter('dataZoom', function() {
        // Default 'slider' when no type specified.
        return 'slider';
    });
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataZoom/installDataZoomInside.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$InsideZoomModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataZoom/InsideZoomModel.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$InsideZoomView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataZoom/InsideZoomView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$roams$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataZoom/roams.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$installCommon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataZoom/installCommon.js [app-ssr] (ecmascript)");
;
;
;
;
function install(registers) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$installCommon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(registers);
    registers.registerComponentModel(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$InsideZoomModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    registers.registerComponentView(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$InsideZoomView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$roams$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["installDataZoomRoamProcessor"])(registers);
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataZoom/SliderZoomModel.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$DataZoomModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataZoom/DataZoomModel.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/component.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/tokens.js [app-ssr] (ecmascript)");
;
;
;
;
var SliderZoomModel = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(SliderZoomModel, _super);
    function SliderZoomModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = SliderZoomModel.type;
        return _this;
    }
    SliderZoomModel.type = 'dataZoom.slider';
    SliderZoomModel.layoutMode = 'box';
    SliderZoomModel.defaultOption = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["inheritDefaultOption"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$DataZoomModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].defaultOption, {
        show: true,
        // deault value can only be drived in view stage.
        right: 'ph',
        top: 'ph',
        width: 'ph',
        height: 'ph',
        left: null,
        bottom: null,
        borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].color.accent10,
        borderRadius: 0,
        backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].color.transparent,
        // dataBackgroundColor: '#ddd',
        dataBackground: {
            lineStyle: {
                color: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].color.accent30,
                width: 0.5
            },
            areaStyle: {
                color: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].color.accent20,
                opacity: 0.2
            }
        },
        selectedDataBackground: {
            lineStyle: {
                color: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].color.accent40,
                width: 0.5
            },
            areaStyle: {
                color: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].color.accent20,
                opacity: 0.3
            }
        },
        // Color of selected window.
        fillerColor: 'rgba(135,175,274,0.2)',
        handleIcon: 'path://M-9.35,34.56V42m0-40V9.5m-2,0h4a2,2,0,0,1,2,2v21a2,2,0,0,1-2,2h-4a2,2,0,0,1-2-2v-21A2,2,0,0,1-11.35,9.5Z',
        // Percent of the slider height
        handleSize: '100%',
        handleStyle: {
            color: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].color.neutral00,
            borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].color.accent20
        },
        moveHandleSize: 7,
        moveHandleIcon: 'path://M-320.9-50L-320.9-50c18.1,0,27.1,9,27.1,27.1V85.7c0,18.1-9,27.1-27.1,27.1l0,0c-18.1,0-27.1-9-27.1-27.1V-22.9C-348-41-339-50-320.9-50z M-212.3-50L-212.3-50c18.1,0,27.1,9,27.1,27.1V85.7c0,18.1-9,27.1-27.1,27.1l0,0c-18.1,0-27.1-9-27.1-27.1V-22.9C-239.4-41-230.4-50-212.3-50z M-103.7-50L-103.7-50c18.1,0,27.1,9,27.1,27.1V85.7c0,18.1-9,27.1-27.1,27.1l0,0c-18.1,0-27.1-9-27.1-27.1V-22.9C-130.9-41-121.8-50-103.7-50z',
        moveHandleStyle: {
            color: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].color.accent40,
            opacity: 0.5
        },
        showDetail: true,
        showDataShadow: 'auto',
        realtime: true,
        zoomLock: false,
        textStyle: {
            color: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].color.tertiary
        },
        brushSelect: true,
        brushStyle: {
            color: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].color.accent30,
            opacity: 0.3
        },
        emphasis: {
            handleLabel: {
                show: true
            },
            handleStyle: {
                borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].color.accent40
            },
            moveHandleStyle: {
                opacity: 0.8
            }
        },
        defaultLocationEdgeGap: 15
    });
    return SliderZoomModel;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$DataZoomModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = SliderZoomModel;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataZoom/SliderZoomView.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$event$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/event.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Rect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Rect$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Rect.js [app-ssr] (ecmascript) <export default as Rect>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Group.js [app-ssr] (ecmascript) <export default as Group>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Polygon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Polygon$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Polygon.js [app-ssr] (ecmascript) <export default as Polygon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Polyline$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Polyline$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Polyline.js [app-ssr] (ecmascript) <export default as Polyline>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Text$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Text.js [app-ssr] (ecmascript) <export default as Text>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/graphic.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$Point$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Point$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/Point.js [app-ssr] (ecmascript) <export default as Point>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$throttle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/throttle.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$DataZoomView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataZoom/DataZoomView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/number.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/layout.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$sliderMove$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/helper/sliderMove.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataZoom/helper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/states.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$symbol$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/symbol.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/log.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/label/labelStyle.js [app-ssr] (ecmascript)");
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
;
;
;
var Rect = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Rect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Rect$3e$__["Rect"];
// Constants
var DEFAULT_FRAME_BORDER_WIDTH = 1;
var DEFAULT_FILLER_SIZE = 30;
var DEFAULT_MOVE_HANDLE_SIZE = 7;
var HORIZONTAL = 'horizontal';
var VERTICAL = 'vertical';
var LABEL_GAP = 5;
var SHOW_DATA_SHADOW_SERIES_TYPE = [
    'line',
    'bar',
    'candlestick',
    'scatter'
];
var REALTIME_ANIMATION_CONFIG = {
    easing: 'cubicOut',
    duration: 100,
    delay: 0
};
var SliderZoomView = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(SliderZoomView, _super);
    function SliderZoomView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = SliderZoomView.type;
        _this._displayables = {};
        return _this;
    }
    SliderZoomView.prototype.init = function(ecModel, api) {
        this.api = api;
        // A unique handler for each dataZoom component
        this._onBrush = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bind"])(this._onBrush, this);
        this._onBrushEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bind"])(this._onBrushEnd, this);
    };
    SliderZoomView.prototype.render = function(dataZoomModel, ecModel, api, payload) {
        _super.prototype.render.apply(this, arguments);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$throttle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createOrUpdate"](this, '_dispatchZoomAction', dataZoomModel.get('throttle'), 'fixRate');
        this._orient = dataZoomModel.getOrient();
        if (dataZoomModel.get('show') === false) {
            this.group.removeAll();
            return;
        }
        if (dataZoomModel.noTarget()) {
            this._clear();
            this.group.removeAll();
            return;
        }
        // Notice: this._resetInterval() should not be executed when payload.type
        // is 'dataZoom', origin this._range should be maintained, otherwise 'pan'
        // or 'zoom' info will be missed because of 'throttle' of this.dispatchAction,
        if (!payload || payload.type !== 'dataZoom' || payload.from !== this.uid) {
            this._buildView();
        }
        this._updateView();
    };
    SliderZoomView.prototype.dispose = function() {
        this._clear();
        _super.prototype.dispose.apply(this, arguments);
    };
    SliderZoomView.prototype._clear = function() {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$throttle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clear"](this, '_dispatchZoomAction');
        var zr = this.api.getZr();
        zr.off('mousemove', this._onBrush);
        zr.off('mouseup', this._onBrushEnd);
    };
    SliderZoomView.prototype._buildView = function() {
        var thisGroup = this.group;
        thisGroup.removeAll();
        this._brushing = false;
        this._displayables.brushRect = null;
        this._resetLocation();
        this._resetInterval();
        var barGroup = this._displayables.sliderGroup = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__["Group"]();
        this._renderBackground();
        this._renderHandle();
        this._renderDataShadow();
        thisGroup.add(barGroup);
        this._positionGroup();
    };
    SliderZoomView.prototype._resetLocation = function() {
        var dataZoomModel = this.dataZoomModel;
        var api = this.api;
        var showMoveHandle = dataZoomModel.get('brushSelect');
        var moveHandleSize = showMoveHandle ? DEFAULT_MOVE_HANDLE_SIZE : 0;
        var refContainer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createBoxLayoutReference"](dataZoomModel, api).refContainer;
        // If some of x/y/width/height are not specified,
        // auto-adapt according to target grid.
        var coordRect = this._findCoordRect();
        var edgeGap = dataZoomModel.get('defaultLocationEdgeGap', true) || 0;
        // Default align by coordinate system rect.
        var positionInfo = this._orient === HORIZONTAL ? {
            // Why using 'right', because right should be used in vertical,
            // and it is better to be consistent for dealing with position param merge.
            right: refContainer.width - coordRect.x - coordRect.width,
            top: refContainer.height - DEFAULT_FILLER_SIZE - edgeGap - moveHandleSize,
            width: coordRect.width,
            height: DEFAULT_FILLER_SIZE
        } : {
            right: edgeGap,
            top: coordRect.y,
            width: DEFAULT_FILLER_SIZE,
            height: coordRect.height
        };
        // Do not write back to option and replace value 'ph', because
        // the 'ph' value should be recalculated when resize.
        var layoutParams = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLayoutParams"](dataZoomModel.option);
        // Replace the placeholder value.
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])([
            'right',
            'top',
            'width',
            'height'
        ], function(name) {
            if (layoutParams[name] === 'ph') {
                layoutParams[name] = positionInfo[name];
            }
        });
        var layoutRect = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLayoutRect"](layoutParams, refContainer);
        this._location = {
            x: layoutRect.x,
            y: layoutRect.y
        };
        this._size = [
            layoutRect.width,
            layoutRect.height
        ];
        this._orient === VERTICAL && this._size.reverse();
    };
    SliderZoomView.prototype._positionGroup = function() {
        var thisGroup = this.group;
        var location = this._location;
        var orient = this._orient;
        // Just use the first axis to determine mapping.
        var targetAxisModel = this.dataZoomModel.getFirstTargetAxisModel();
        var inverse = targetAxisModel && targetAxisModel.get('inverse');
        var sliderGroup = this._displayables.sliderGroup;
        var otherAxisInverse = (this._dataShadowInfo || {}).otherAxisInverse;
        // Transform barGroup.
        sliderGroup.attr(orient === HORIZONTAL && !inverse ? {
            scaleY: otherAxisInverse ? 1 : -1,
            scaleX: 1
        } : orient === HORIZONTAL && inverse ? {
            scaleY: otherAxisInverse ? 1 : -1,
            scaleX: -1
        } : orient === VERTICAL && !inverse ? {
            scaleY: otherAxisInverse ? -1 : 1,
            scaleX: 1,
            rotation: Math.PI / 2
        } : {
            scaleY: otherAxisInverse ? -1 : 1,
            scaleX: -1,
            rotation: Math.PI / 2
        });
        // Position barGroup
        var rect = thisGroup.getBoundingRect([
            sliderGroup
        ]);
        thisGroup.x = location.x - rect.x;
        thisGroup.y = location.y - rect.y;
        thisGroup.markRedraw();
    };
    SliderZoomView.prototype._getViewExtent = function() {
        return [
            0,
            this._size[0]
        ];
    };
    SliderZoomView.prototype._renderBackground = function() {
        var dataZoomModel = this.dataZoomModel;
        var size = this._size;
        var barGroup = this._displayables.sliderGroup;
        var brushSelect = dataZoomModel.get('brushSelect');
        barGroup.add(new Rect({
            silent: true,
            shape: {
                x: 0,
                y: 0,
                width: size[0],
                height: size[1]
            },
            style: {
                fill: dataZoomModel.get('backgroundColor')
            },
            z2: -40
        }));
        // Click panel, over shadow, below handles.
        var clickPanel = new Rect({
            shape: {
                x: 0,
                y: 0,
                width: size[0],
                height: size[1]
            },
            style: {
                fill: 'transparent'
            },
            z2: 0,
            onclick: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bind"])(this._onClickPanel, this)
        });
        var zr = this.api.getZr();
        if (brushSelect) {
            clickPanel.on('mousedown', this._onBrushStart, this);
            clickPanel.cursor = 'crosshair';
            zr.on('mousemove', this._onBrush);
            zr.on('mouseup', this._onBrushEnd);
        } else {
            zr.off('mousemove', this._onBrush);
            zr.off('mouseup', this._onBrushEnd);
        }
        barGroup.add(clickPanel);
    };
    SliderZoomView.prototype._renderDataShadow = function() {
        var info = this._dataShadowInfo = this._prepareDataShadowInfo();
        this._displayables.dataShadowSegs = [];
        if (!info) {
            return;
        }
        var size = this._size;
        var oldSize = this._shadowSize || [];
        var seriesModel = info.series;
        var data = seriesModel.getRawData();
        var candlestickDim = seriesModel.getShadowDim && seriesModel.getShadowDim();
        var otherDim = candlestickDim && data.getDimensionInfo(candlestickDim) ? seriesModel.getShadowDim() // @see candlestick
         : info.otherDim;
        if (otherDim == null) {
            return;
        }
        var polygonPts = this._shadowPolygonPts;
        var polylinePts = this._shadowPolylinePts;
        // Not re-render if data doesn't change.
        if (data !== this._shadowData || otherDim !== this._shadowDim || size[0] !== oldSize[0] || size[1] !== oldSize[1]) {
            var thisDataExtent_1 = data.getDataExtent(info.thisDim);
            var otherDataExtent_1 = data.getDataExtent(otherDim);
            // Nice extent.
            var otherOffset = (otherDataExtent_1[1] - otherDataExtent_1[0]) * 0.3;
            otherDataExtent_1 = [
                otherDataExtent_1[0] - otherOffset,
                otherDataExtent_1[1] + otherOffset
            ];
            var otherShadowExtent_1 = [
                0,
                size[1]
            ];
            var thisShadowExtent = [
                0,
                size[0]
            ];
            var areaPoints_1 = [
                [
                    size[0],
                    0
                ],
                [
                    0,
                    0
                ]
            ];
            var linePoints_1 = [];
            var step_1 = thisShadowExtent[1] / Math.max(1, data.count() - 1);
            var normalizationConstant_1 = size[0] / (thisDataExtent_1[1] - thisDataExtent_1[0]);
            var isTimeAxis_1 = info.thisAxis.type === 'time';
            var thisCoord_1 = -step_1;
            // Optimize for large data shadow
            var stride_1 = Math.round(data.count() / size[0]);
            var lastIsEmpty_1;
            data.each([
                info.thisDim,
                otherDim
            ], function(thisValue, otherValue, index) {
                if (stride_1 > 0 && index % stride_1) {
                    if (!isTimeAxis_1) {
                        thisCoord_1 += step_1;
                    }
                    return;
                }
                thisCoord_1 = isTimeAxis_1 ? (+thisValue - thisDataExtent_1[0]) * normalizationConstant_1 : thisCoord_1 + step_1;
                // FIXME
                // Should consider axis.min/axis.max when drawing dataShadow.
                // FIXME
                // 应该使用统一的空判断？还是在list里进行空判断？
                var isEmpty = otherValue == null || isNaN(otherValue) || otherValue === '';
                // See #4235.
                var otherCoord = isEmpty ? 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["linearMap"])(otherValue, otherDataExtent_1, otherShadowExtent_1, true);
                // Attempt to draw data shadow precisely when there are empty value.
                if (isEmpty && !lastIsEmpty_1 && index) {
                    areaPoints_1.push([
                        areaPoints_1[areaPoints_1.length - 1][0],
                        0
                    ]);
                    linePoints_1.push([
                        linePoints_1[linePoints_1.length - 1][0],
                        0
                    ]);
                } else if (!isEmpty && lastIsEmpty_1) {
                    areaPoints_1.push([
                        thisCoord_1,
                        0
                    ]);
                    linePoints_1.push([
                        thisCoord_1,
                        0
                    ]);
                }
                if (!isEmpty) {
                    areaPoints_1.push([
                        thisCoord_1,
                        otherCoord
                    ]);
                    linePoints_1.push([
                        thisCoord_1,
                        otherCoord
                    ]);
                }
                lastIsEmpty_1 = isEmpty;
            });
            polygonPts = this._shadowPolygonPts = areaPoints_1;
            polylinePts = this._shadowPolylinePts = linePoints_1;
        }
        this._shadowData = data;
        this._shadowDim = otherDim;
        this._shadowSize = [
            size[0],
            size[1]
        ];
        var dataZoomModel = this.dataZoomModel;
        function createDataShadowGroup(isSelectedArea) {
            var model = dataZoomModel.getModel(isSelectedArea ? 'selectedDataBackground' : 'dataBackground');
            var group = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__["Group"]();
            var polygon = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Polygon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Polygon$3e$__["Polygon"]({
                shape: {
                    points: polygonPts
                },
                segmentIgnoreThreshold: 1,
                style: model.getModel('areaStyle').getAreaStyle(),
                silent: true,
                z2: -20
            });
            var polyline = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Polyline$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Polyline$3e$__["Polyline"]({
                shape: {
                    points: polylinePts
                },
                segmentIgnoreThreshold: 1,
                style: model.getModel('lineStyle').getLineStyle(),
                silent: true,
                z2: -19
            });
            group.add(polygon);
            group.add(polyline);
            return group;
        }
        // let dataBackgroundModel = dataZoomModel.getModel('dataBackground');
        for(var i = 0; i < 3; i++){
            var group = createDataShadowGroup(i === 1);
            this._displayables.sliderGroup.add(group);
            this._displayables.dataShadowSegs.push(group);
        }
    };
    SliderZoomView.prototype._prepareDataShadowInfo = function() {
        var dataZoomModel = this.dataZoomModel;
        var showDataShadow = dataZoomModel.get('showDataShadow');
        if (showDataShadow === false) {
            return;
        }
        // Find a representative series.
        var result;
        var ecModel = this.ecModel;
        dataZoomModel.eachTargetAxis(function(axisDim, axisIndex) {
            var seriesModels = dataZoomModel.getAxisProxy(axisDim, axisIndex).getTargetSeriesModels();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(seriesModels, function(seriesModel) {
                if (result) {
                    return;
                }
                if (showDataShadow !== true && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["indexOf"])(SHOW_DATA_SHADOW_SERIES_TYPE, seriesModel.get('type')) < 0) {
                    return;
                }
                var thisAxis = ecModel.getComponent((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAxisMainType"])(axisDim), axisIndex).axis;
                var otherDim = getOtherDim(axisDim);
                var otherAxisInverse;
                var coordSys = seriesModel.coordinateSystem;
                if (otherDim != null && coordSys.getOtherAxis) {
                    otherAxisInverse = coordSys.getOtherAxis(thisAxis).inverse;
                }
                otherDim = seriesModel.getData().mapDimension(otherDim);
                var thisDim = seriesModel.getData().mapDimension(axisDim);
                result = {
                    thisAxis: thisAxis,
                    series: seriesModel,
                    thisDim: thisDim,
                    otherDim: otherDim,
                    otherAxisInverse: otherAxisInverse
                };
            }, this);
        }, this);
        return result;
    };
    SliderZoomView.prototype._renderHandle = function() {
        var thisGroup = this.group;
        var displayables = this._displayables;
        var handles = displayables.handles = [
            null,
            null
        ];
        var handleLabels = displayables.handleLabels = [
            null,
            null
        ];
        var sliderGroup = this._displayables.sliderGroup;
        var size = this._size;
        var dataZoomModel = this.dataZoomModel;
        var api = this.api;
        var borderRadius = dataZoomModel.get('borderRadius') || 0;
        var brushSelect = dataZoomModel.get('brushSelect');
        var filler = displayables.filler = new Rect({
            silent: brushSelect,
            style: {
                fill: dataZoomModel.get('fillerColor')
            },
            textConfig: {
                position: 'inside'
            }
        });
        sliderGroup.add(filler);
        // Frame border.
        sliderGroup.add(new Rect({
            silent: true,
            subPixelOptimize: true,
            shape: {
                x: 0,
                y: 0,
                width: size[0],
                height: size[1],
                r: borderRadius
            },
            style: {
                // deprecated option
                stroke: dataZoomModel.get('dataBackgroundColor') || dataZoomModel.get('borderColor'),
                lineWidth: DEFAULT_FRAME_BORDER_WIDTH,
                fill: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].color.transparent
            }
        }));
        // Left and right handle to resize
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])([
            0,
            1
        ], function(handleIndex) {
            var iconStr = dataZoomModel.get('handleIcon');
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$symbol$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["symbolBuildProxies"][iconStr] && iconStr.indexOf('path://') < 0 && iconStr.indexOf('image://') < 0) {
                // Compatitable with the old icon parsers. Which can use a path string without path://
                iconStr = 'path://' + iconStr;
                if ("TURBOPACK compile-time truthy", 1) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deprecateLog"])('handleIcon now needs \'path://\' prefix when using a path string');
                }
            }
            var path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$symbol$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSymbol"])(iconStr, -1, 0, 2, 2, null, true);
            path.attr({
                cursor: getCursor(this._orient),
                draggable: true,
                drift: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bind"])(this._onDragMove, this, handleIndex),
                ondragend: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bind"])(this._onDragEnd, this),
                onmouseover: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bind"])(this._showDataInfo, this, true),
                onmouseout: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bind"])(this._showDataInfo, this, false),
                z2: 5
            });
            var bRect = path.getBoundingRect();
            var handleSize = dataZoomModel.get('handleSize');
            this._handleHeight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parsePercent"])(handleSize, this._size[1]);
            this._handleWidth = bRect.width / bRect.height * this._handleHeight;
            path.setStyle(dataZoomModel.getModel('handleStyle').getItemStyle());
            path.style.strokeNoScale = true;
            path.rectHover = true;
            path.ensureState('emphasis').style = dataZoomModel.getModel([
                'emphasis',
                'handleStyle'
            ]).getItemStyle();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["enableHoverEmphasis"])(path);
            var handleColor = dataZoomModel.get('handleColor'); // deprecated option
            // Compatitable with previous version
            if (handleColor != null) {
                path.style.fill = handleColor;
            }
            sliderGroup.add(handles[handleIndex] = path);
            var textStyleModel = dataZoomModel.getModel('textStyle');
            var handleLabel = dataZoomModel.get('handleLabel') || {};
            var handleLabelShow = handleLabel.show || false;
            thisGroup.add(handleLabels[handleIndex] = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Text$3e$__["Text"]({
                silent: true,
                invisible: !handleLabelShow,
                style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createTextStyle"])(textStyleModel, {
                    x: 0,
                    y: 0,
                    text: '',
                    verticalAlign: 'middle',
                    align: 'center',
                    fill: textStyleModel.getTextColor(),
                    font: textStyleModel.getFont()
                }),
                z2: 10
            }));
        }, this);
        // Handle to move. Only visible when brushSelect is set true.
        var actualMoveZone = filler;
        if (brushSelect) {
            var moveHandleHeight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parsePercent"])(dataZoomModel.get('moveHandleSize'), size[1]);
            var moveHandle_1 = displayables.moveHandle = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Rect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Rect$3e$__["Rect"]({
                style: dataZoomModel.getModel('moveHandleStyle').getItemStyle(),
                silent: true,
                shape: {
                    r: [
                        0,
                        0,
                        2,
                        2
                    ],
                    y: size[1] - 0.5,
                    height: moveHandleHeight
                }
            });
            var iconSize = moveHandleHeight * 0.8;
            var moveHandleIcon = displayables.moveHandleIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$symbol$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSymbol"])(dataZoomModel.get('moveHandleIcon'), -iconSize / 2, -iconSize / 2, iconSize, iconSize, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].color.neutral00, true);
            moveHandleIcon.silent = true;
            moveHandleIcon.y = size[1] + moveHandleHeight / 2 - 0.5;
            moveHandle_1.ensureState('emphasis').style = dataZoomModel.getModel([
                'emphasis',
                'moveHandleStyle'
            ]).getItemStyle();
            var moveZoneExpandSize = Math.min(size[1] / 2, Math.max(moveHandleHeight, 10));
            actualMoveZone = displayables.moveZone = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Rect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Rect$3e$__["Rect"]({
                invisible: true,
                shape: {
                    y: size[1] - moveZoneExpandSize,
                    height: moveHandleHeight + moveZoneExpandSize
                }
            });
            actualMoveZone.on('mouseover', function() {
                api.enterEmphasis(moveHandle_1);
            }).on('mouseout', function() {
                api.leaveEmphasis(moveHandle_1);
            });
            sliderGroup.add(moveHandle_1);
            sliderGroup.add(moveHandleIcon);
            sliderGroup.add(actualMoveZone);
        }
        actualMoveZone.attr({
            draggable: true,
            cursor: 'default',
            drift: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bind"])(this._onDragMove, this, 'all'),
            ondragstart: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bind"])(this._showDataInfo, this, true),
            ondragend: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bind"])(this._onDragEnd, this),
            onmouseover: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bind"])(this._showDataInfo, this, true),
            onmouseout: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bind"])(this._showDataInfo, this, false)
        });
    };
    SliderZoomView.prototype._resetInterval = function() {
        var range = this._range = this.dataZoomModel.getPercentRange();
        var viewExtent = this._getViewExtent();
        this._handleEnds = [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["linearMap"])(range[0], [
                0,
                100
            ], viewExtent, true),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["linearMap"])(range[1], [
                0,
                100
            ], viewExtent, true)
        ];
    };
    SliderZoomView.prototype._updateInterval = function(handleIndex, delta) {
        var dataZoomModel = this.dataZoomModel;
        var handleEnds = this._handleEnds;
        var viewExtend = this._getViewExtent();
        var minMaxSpan = dataZoomModel.findRepresentativeAxisProxy().getMinMaxSpan();
        var percentExtent = [
            0,
            100
        ];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$sliderMove$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(delta, handleEnds, viewExtend, dataZoomModel.get('zoomLock') ? 'all' : handleIndex, minMaxSpan.minSpan != null ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["linearMap"])(minMaxSpan.minSpan, percentExtent, viewExtend, true) : null, minMaxSpan.maxSpan != null ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["linearMap"])(minMaxSpan.maxSpan, percentExtent, viewExtend, true) : null);
        var lastRange = this._range;
        var range = this._range = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["asc"])([
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["linearMap"])(handleEnds[0], viewExtend, percentExtent, true),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["linearMap"])(handleEnds[1], viewExtend, percentExtent, true)
        ]);
        return !lastRange || lastRange[0] !== range[0] || lastRange[1] !== range[1];
    };
    SliderZoomView.prototype._updateView = function(nonRealtime) {
        var displaybles = this._displayables;
        var handleEnds = this._handleEnds;
        var handleInterval = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["asc"])(handleEnds.slice());
        var size = this._size;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])([
            0,
            1
        ], function(handleIndex) {
            // Handles
            var handle = displaybles.handles[handleIndex];
            var handleHeight = this._handleHeight;
            handle.attr({
                scaleX: handleHeight / 2,
                scaleY: handleHeight / 2,
                // This is a trick, by adding an extra tiny offset to let the default handle's end point align to the drag window.
                // NOTE: It may affect some custom shapes a bit. But we prefer to have better result by default.
                x: handleEnds[handleIndex] + (handleIndex ? -1 : 1),
                y: size[1] / 2 - handleHeight / 2
            });
        }, this);
        // Filler
        displaybles.filler.setShape({
            x: handleInterval[0],
            y: 0,
            width: handleInterval[1] - handleInterval[0],
            height: size[1]
        });
        var viewExtent = {
            x: handleInterval[0],
            width: handleInterval[1] - handleInterval[0]
        };
        // Move handle
        if (displaybles.moveHandle) {
            displaybles.moveHandle.setShape(viewExtent);
            displaybles.moveZone.setShape(viewExtent);
            // Force update path on the invisible object
            displaybles.moveZone.getBoundingRect();
            displaybles.moveHandleIcon && displaybles.moveHandleIcon.attr('x', viewExtent.x + viewExtent.width / 2);
        }
        // update clip path of shadow.
        var dataShadowSegs = displaybles.dataShadowSegs;
        var segIntervals = [
            0,
            handleInterval[0],
            handleInterval[1],
            size[0]
        ];
        for(var i = 0; i < dataShadowSegs.length; i++){
            var segGroup = dataShadowSegs[i];
            var clipPath = segGroup.getClipPath();
            if (!clipPath) {
                clipPath = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Rect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Rect$3e$__["Rect"]();
                segGroup.setClipPath(clipPath);
            }
            clipPath.setShape({
                x: segIntervals[i],
                y: 0,
                width: segIntervals[i + 1] - segIntervals[i],
                height: size[1]
            });
        }
        this._updateDataInfo(nonRealtime);
    };
    SliderZoomView.prototype._updateDataInfo = function(nonRealtime) {
        var dataZoomModel = this.dataZoomModel;
        var displaybles = this._displayables;
        var handleLabels = displaybles.handleLabels;
        var orient = this._orient;
        var labelTexts = [
            '',
            ''
        ];
        // FIXME
        // date型，支持formatter，autoformatter（ec2 date.getAutoFormatter）
        if (dataZoomModel.get('showDetail')) {
            var axisProxy = dataZoomModel.findRepresentativeAxisProxy();
            if (axisProxy) {
                var axis = axisProxy.getAxisModel().axis;
                var range = this._range;
                var dataInterval = nonRealtime ? axisProxy.calculateDataWindow({
                    start: range[0],
                    end: range[1]
                }).valueWindow : axisProxy.getDataValueWindow();
                labelTexts = [
                    this._formatLabel(dataInterval[0], axis),
                    this._formatLabel(dataInterval[1], axis)
                ];
            }
        }
        var orderedHandleEnds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["asc"])(this._handleEnds.slice());
        setLabel.call(this, 0);
        setLabel.call(this, 1);
        function setLabel(handleIndex) {
            // Label
            // Text should not transform by barGroup.
            // Ignore handlers transform
            var barTransform = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getTransform"](displaybles.handles[handleIndex].parent, this.group);
            var direction = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["transformDirection"](handleIndex === 0 ? 'right' : 'left', barTransform);
            var offset = this._handleWidth / 2 + LABEL_GAP;
            var textPoint = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["applyTransform"]([
                orderedHandleEnds[handleIndex] + (handleIndex === 0 ? -offset : offset),
                this._size[1] / 2
            ], barTransform);
            handleLabels[handleIndex].setStyle({
                x: textPoint[0],
                y: textPoint[1],
                verticalAlign: orient === HORIZONTAL ? 'middle' : direction,
                align: orient === HORIZONTAL ? direction : 'center',
                text: labelTexts[handleIndex]
            });
        }
    };
    SliderZoomView.prototype._formatLabel = function(value, axis) {
        var dataZoomModel = this.dataZoomModel;
        var labelFormatter = dataZoomModel.get('labelFormatter');
        var labelPrecision = dataZoomModel.get('labelPrecision');
        if (labelPrecision == null || labelPrecision === 'auto') {
            labelPrecision = axis.getPixelPrecision();
        }
        var valueStr = value == null || isNaN(value) ? '' : axis.type === 'category' || axis.type === 'time' ? axis.scale.getLabel({
            value: Math.round(value)
        }) : value.toFixed(Math.min(labelPrecision, 20));
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFunction"])(labelFormatter) ? labelFormatter(value, valueStr) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(labelFormatter) ? labelFormatter.replace('{value}', valueStr) : valueStr;
    };
    /**
   * @param isEmphasis true: show, false: hide
   */ SliderZoomView.prototype._showDataInfo = function(isEmphasis) {
        var handleLabel = this.dataZoomModel.get('handleLabel') || {};
        var normalShow = handleLabel.show || false;
        var emphasisHandleLabel = this.dataZoomModel.getModel([
            'emphasis',
            'handleLabel'
        ]);
        var emphasisShow = emphasisHandleLabel.get('show') || false;
        // Dragging is considered as emphasis, unless emphasisShow is false
        var toShow = isEmphasis || this._dragging ? emphasisShow : normalShow;
        var displayables = this._displayables;
        var handleLabels = displayables.handleLabels;
        handleLabels[0].attr('invisible', !toShow);
        handleLabels[1].attr('invisible', !toShow);
        // Highlight move handle
        displayables.moveHandle && this.api[toShow ? 'enterEmphasis' : 'leaveEmphasis'](displayables.moveHandle, 1);
    };
    SliderZoomView.prototype._onDragMove = function(handleIndex, dx, dy, event) {
        this._dragging = true;
        // For mobile device, prevent screen slider on the button.
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$event$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["stop"](event.event);
        // Transform dx, dy to bar coordination.
        var barTransform = this._displayables.sliderGroup.getLocalTransform();
        var vertex = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["applyTransform"]([
            dx,
            dy
        ], barTransform, true);
        var changed = this._updateInterval(handleIndex, vertex[0]);
        var realtime = this.dataZoomModel.get('realtime');
        this._updateView(!realtime);
        // Avoid dispatch dataZoom repeatly but range not changed,
        // which cause bad visual effect when progressive enabled.
        changed && realtime && this._dispatchZoomAction(true);
    };
    SliderZoomView.prototype._onDragEnd = function() {
        this._dragging = false;
        this._showDataInfo(false);
        // While in realtime mode and stream mode, dispatch action when
        // drag end will cause the whole view rerender, which is unnecessary.
        var realtime = this.dataZoomModel.get('realtime');
        !realtime && this._dispatchZoomAction(false);
    };
    SliderZoomView.prototype._onClickPanel = function(e) {
        var size = this._size;
        var localPoint = this._displayables.sliderGroup.transformCoordToLocal(e.offsetX, e.offsetY);
        if (localPoint[0] < 0 || localPoint[0] > size[0] || localPoint[1] < 0 || localPoint[1] > size[1]) {
            return;
        }
        var handleEnds = this._handleEnds;
        var center = (handleEnds[0] + handleEnds[1]) / 2;
        var changed = this._updateInterval('all', localPoint[0] - center);
        this._updateView();
        changed && this._dispatchZoomAction(false);
    };
    SliderZoomView.prototype._onBrushStart = function(e) {
        var x = e.offsetX;
        var y = e.offsetY;
        this._brushStart = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$Point$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Point$3e$__["Point"](x, y);
        this._brushing = true;
        this._brushStartTime = +new Date();
    // this._updateBrushRect(x, y);
    };
    SliderZoomView.prototype._onBrushEnd = function(e) {
        if (!this._brushing) {
            return;
        }
        var brushRect = this._displayables.brushRect;
        this._brushing = false;
        if (!brushRect) {
            return;
        }
        brushRect.attr('ignore', true);
        var brushShape = brushRect.shape;
        var brushEndTime = +new Date();
        // console.log(brushEndTime - this._brushStartTime);
        if (brushEndTime - this._brushStartTime < 200 && Math.abs(brushShape.width) < 5) {
            // Will treat it as a click
            return;
        }
        var viewExtend = this._getViewExtent();
        var percentExtent = [
            0,
            100
        ];
        var handleEnds = this._handleEnds = [
            brushShape.x,
            brushShape.x + brushShape.width
        ];
        var minMaxSpan = this.dataZoomModel.findRepresentativeAxisProxy().getMinMaxSpan();
        // Restrict range.
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$sliderMove$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(0, handleEnds, viewExtend, 0, minMaxSpan.minSpan != null ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["linearMap"])(minMaxSpan.minSpan, percentExtent, viewExtend, true) : null, minMaxSpan.maxSpan != null ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["linearMap"])(minMaxSpan.maxSpan, percentExtent, viewExtend, true) : null);
        this._range = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["asc"])([
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["linearMap"])(handleEnds[0], viewExtend, percentExtent, true),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["linearMap"])(handleEnds[1], viewExtend, percentExtent, true)
        ]);
        this._updateView();
        this._dispatchZoomAction(false);
    };
    SliderZoomView.prototype._onBrush = function(e) {
        if (this._brushing) {
            // For mobile device, prevent screen slider on the button.
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$event$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["stop"](e.event);
            this._updateBrushRect(e.offsetX, e.offsetY);
        }
    };
    SliderZoomView.prototype._updateBrushRect = function(mouseX, mouseY) {
        var displayables = this._displayables;
        var dataZoomModel = this.dataZoomModel;
        var brushRect = displayables.brushRect;
        if (!brushRect) {
            brushRect = displayables.brushRect = new Rect({
                silent: true,
                style: dataZoomModel.getModel('brushStyle').getItemStyle()
            });
            displayables.sliderGroup.add(brushRect);
        }
        brushRect.attr('ignore', false);
        var brushStart = this._brushStart;
        var sliderGroup = this._displayables.sliderGroup;
        var endPoint = sliderGroup.transformCoordToLocal(mouseX, mouseY);
        var startPoint = sliderGroup.transformCoordToLocal(brushStart.x, brushStart.y);
        var size = this._size;
        endPoint[0] = Math.max(Math.min(size[0], endPoint[0]), 0);
        brushRect.setShape({
            x: startPoint[0],
            y: 0,
            width: endPoint[0] - startPoint[0],
            height: size[1]
        });
    };
    /**
   * This action will be throttled.
   */ SliderZoomView.prototype._dispatchZoomAction = function(realtime) {
        var range = this._range;
        this.api.dispatchAction({
            type: 'dataZoom',
            from: this.uid,
            dataZoomId: this.dataZoomModel.id,
            animation: realtime ? REALTIME_ANIMATION_CONFIG : null,
            start: range[0],
            end: range[1]
        });
    };
    SliderZoomView.prototype._findCoordRect = function() {
        // Find the grid corresponding to the first axis referred by dataZoom.
        var rect;
        var coordSysInfoList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collectReferCoordSysModelInfo"])(this.dataZoomModel).infoList;
        if (!rect && coordSysInfoList.length) {
            var coordSys = coordSysInfoList[0].model.coordinateSystem;
            rect = coordSys.getRect && coordSys.getRect();
        }
        if (!rect) {
            var width = this.api.getWidth();
            var height = this.api.getHeight();
            rect = {
                x: width * 0.2,
                y: height * 0.2,
                width: width * 0.6,
                height: height * 0.6
            };
        }
        return rect;
    };
    SliderZoomView.type = 'dataZoom.slider';
    return SliderZoomView;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$DataZoomView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
function getOtherDim(thisDim) {
    // FIXME
    // 这个逻辑和getOtherAxis里一致，但是写在这里是否不好
    var map = {
        x: 'y',
        y: 'x',
        radius: 'angle',
        angle: 'radius'
    };
    return map[thisDim];
}
function getCursor(orient) {
    return orient === 'vertical' ? 'ns-resize' : 'ew-resize';
}
const __TURBOPACK__default__export__ = SliderZoomView;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataZoom/installDataZoomSlider.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$SliderZoomModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataZoom/SliderZoomModel.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$SliderZoomView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataZoom/SliderZoomView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$installCommon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataZoom/installCommon.js [app-ssr] (ecmascript)");
;
;
;
function install(registers) {
    registers.registerComponentModel(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$SliderZoomModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    registers.registerComponentView(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$SliderZoomView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$installCommon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(registers);
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataZoom/install.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/extension.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$installDataZoomInside$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataZoom/installDataZoomInside.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$installDataZoomSlider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataZoom/installDataZoomSlider.js [app-ssr] (ecmascript)");
;
;
;
function install(registers) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["use"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$installDataZoomInside$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["install"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["use"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$installDataZoomSlider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["install"]);
// Do not install './dataZoomSelect',
// since it only work for toolbox dataZoom.
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataZoom/install.js [app-ssr] (ecmascript) <export install as DataZoomComponent>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DataZoomComponent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$install$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["install"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$install$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataZoom/install.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataZoom/SelectZoomModel.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$DataZoomModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataZoom/DataZoomModel.js [app-ssr] (ecmascript)");
;
;
var SelectDataZoomModel = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(SelectDataZoomModel, _super);
    function SelectDataZoomModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = SelectDataZoomModel.type;
        return _this;
    }
    SelectDataZoomModel.type = 'dataZoom.select';
    return SelectDataZoomModel;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$DataZoomModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = SelectDataZoomModel;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataZoom/SelectZoomView.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$DataZoomView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataZoom/DataZoomView.js [app-ssr] (ecmascript)");
;
;
var SelectDataZoomView = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(SelectDataZoomView, _super);
    function SelectDataZoomView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = SelectDataZoomView.type;
        return _this;
    }
    SelectDataZoomView.type = 'dataZoom.select';
    return SelectDataZoomView;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$DataZoomView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = SelectDataZoomView;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataZoom/installDataZoomSelect.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$SelectZoomModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataZoom/SelectZoomModel.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$SelectZoomView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataZoom/SelectZoomView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$installCommon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataZoom/installCommon.js [app-ssr] (ecmascript)");
;
;
;
function install(registers) {
    registers.registerComponentModel(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$SelectZoomModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    registers.registerComponentView(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$SelectZoomView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$installCommon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(registers);
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataZoom/history.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    "clear",
    ()=>clear,
    "count",
    ()=>count,
    "pop",
    ()=>pop,
    "push",
    ()=>push
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js [app-ssr] (ecmascript)");
;
;
var each = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"];
var inner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeInner"])();
function push(ecModel, newSnapshot) {
    var storedSnapshots = getStoreSnapshots(ecModel);
    // If previous dataZoom can not be found,
    // complete an range with current range.
    each(newSnapshot, function(batchItem, dataZoomId) {
        var i = storedSnapshots.length - 1;
        for(; i >= 0; i--){
            var snapshot = storedSnapshots[i];
            if (snapshot[dataZoomId]) {
                break;
            }
        }
        if (i < 0) {
            // No origin range set, create one by current range.
            var dataZoomModel = ecModel.queryComponents({
                mainType: 'dataZoom',
                subType: 'select',
                id: dataZoomId
            })[0];
            if (dataZoomModel) {
                var percentRange = dataZoomModel.getPercentRange();
                storedSnapshots[0][dataZoomId] = {
                    dataZoomId: dataZoomId,
                    start: percentRange[0],
                    end: percentRange[1]
                };
            }
        }
    });
    storedSnapshots.push(newSnapshot);
}
function pop(ecModel) {
    var storedSnapshots = getStoreSnapshots(ecModel);
    var head = storedSnapshots[storedSnapshots.length - 1];
    storedSnapshots.length > 1 && storedSnapshots.pop();
    // Find top for all dataZoom.
    var snapshot = {};
    each(head, function(batchItem, dataZoomId) {
        for(var i = storedSnapshots.length - 1; i >= 0; i--){
            batchItem = storedSnapshots[i][dataZoomId];
            if (batchItem) {
                snapshot[dataZoomId] = batchItem;
                break;
            }
        }
    });
    return snapshot;
}
function clear(ecModel) {
    inner(ecModel).snapshots = null;
}
function count(ecModel) {
    return getStoreSnapshots(ecModel).length;
}
/**
 * History length of each dataZoom may be different.
 * this._history[0] is used to store origin range.
 */ function getStoreSnapshots(ecModel) {
    var store = inner(ecModel);
    if (!store.snapshots) {
        store.snapshots = [
            {}
        ];
    }
    return store.snapshots;
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataZoom/installDataZoomInside.js [app-ssr] (ecmascript) <export install as DataZoomInsideComponent>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DataZoomInsideComponent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$installDataZoomInside$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["install"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$installDataZoomInside$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataZoom/installDataZoomInside.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataZoom/installDataZoomSlider.js [app-ssr] (ecmascript) <export install as DataZoomSliderComponent>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DataZoomSliderComponent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$installDataZoomSlider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["install"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$installDataZoomSlider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataZoom/installDataZoomSlider.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=6e80b_echarts_lib_component_dataZoom_e6a116f5._.js.map