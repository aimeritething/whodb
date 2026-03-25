(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/visualMap/VisualMapModel.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$visualDefault$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/visualDefault.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$VisualMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/VisualMapping.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$visualSolution$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/visualSolution.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/number.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/Component.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/tokens.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
var mapVisual = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$VisualMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].mapVisual;
var eachVisual = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$VisualMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].eachVisual;
var isArray = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"];
var each = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"];
var asc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asc"];
var linearMap = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["linearMap"];
var VisualMapModel = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(VisualMapModel, _super);
    function VisualMapModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = VisualMapModel.type;
        _this.stateList = [
            'inRange',
            'outOfRange'
        ];
        _this.replacableOptionKeys = [
            'inRange',
            'outOfRange',
            'target',
            'controller',
            'color'
        ];
        _this.layoutMode = {
            type: 'box',
            ignoreSize: true
        };
        /**
     * [lowerBound, upperBound]
     */ _this.dataBound = [
            -Infinity,
            Infinity
        ];
        _this.targetVisuals = {};
        _this.controllerVisuals = {};
        return _this;
    }
    VisualMapModel.prototype.init = function(option, parentModel, ecModel) {
        this.mergeDefaultAndTheme(option, ecModel);
    };
    /**
   * @protected
   */ VisualMapModel.prototype.optionUpdated = function(newOption, isInit) {
        var thisOption = this.option;
        !isInit && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$visualSolution$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replaceVisualOption"](thisOption, newOption, this.replacableOptionKeys);
        this.textStyleModel = this.getModel('textStyle');
        this.resetItemSize();
        this.completeVisualOption();
    };
    /**
   * @protected
   */ VisualMapModel.prototype.resetVisual = function(supplementVisualOption) {
        var stateList = this.stateList;
        supplementVisualOption = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bind"](supplementVisualOption, this);
        this.controllerVisuals = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$visualSolution$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createVisualMappings"](this.option.controller, stateList, supplementVisualOption);
        this.targetVisuals = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$visualSolution$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createVisualMappings"](this.option.target, stateList, supplementVisualOption);
    };
    /**
   * @public
   */ VisualMapModel.prototype.getItemSymbol = function() {
        return null;
    };
    /**
   * @return An array of series indices.
   */ VisualMapModel.prototype.getTargetSeriesIndices = function() {
        var optionSeriesId = this.option.seriesId;
        var optionSeriesIndex = this.option.seriesIndex;
        if (optionSeriesIndex == null && optionSeriesId == null) {
            optionSeriesIndex = 'all';
        }
        var seriesModels = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryReferringComponents"](this.ecModel, 'series', {
            index: optionSeriesIndex,
            id: optionSeriesId
        }, {
            useDefault: false,
            enableAll: true,
            enableNone: false
        }).models;
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"](seriesModels, function(seriesModel) {
            return seriesModel.componentIndex;
        });
    };
    /**
   * @public
   */ VisualMapModel.prototype.eachTargetSeries = function(callback, context) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"](this.getTargetSeriesIndices(), function(seriesIndex) {
            var seriesModel = this.ecModel.getSeriesByIndex(seriesIndex);
            if (seriesModel) {
                callback.call(context, seriesModel);
            }
        }, this);
    };
    /**
   * @pubilc
   */ VisualMapModel.prototype.isTargetSeries = function(seriesModel) {
        var is = false;
        this.eachTargetSeries(function(model) {
            model === seriesModel && (is = true);
        });
        return is;
    };
    /**
   * @example
   * this.formatValueText(someVal); // format single numeric value to text.
   * this.formatValueText(someVal, true); // format single category value to text.
   * this.formatValueText([min, max]); // format numeric min-max to text.
   * this.formatValueText([this.dataBound[0], max]); // using data lower bound.
   * this.formatValueText([min, this.dataBound[1]]); // using data upper bound.
   *
   * @param value Real value, or this.dataBound[0 or 1].
   * @param isCategory Only available when value is number.
   * @param edgeSymbols Open-close symbol when value is interval.
   * @protected
   */ VisualMapModel.prototype.formatValueText = function(value, isCategory, edgeSymbols) {
        var option = this.option;
        var precision = option.precision;
        var dataBound = this.dataBound;
        var formatter = option.formatter;
        var isMinMax;
        edgeSymbols = edgeSymbols || [
            '<',
            '>'
        ];
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"](value)) {
            value = value.slice();
            isMinMax = true;
        }
        var textValue = isCategory ? value // Value is string when isCategory
         : isMinMax ? [
            toFixed(value[0]),
            toFixed(value[1])
        ] : toFixed(value);
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"](formatter)) {
            return formatter.replace('{value}', isMinMax ? textValue[0] : textValue).replace('{value2}', isMinMax ? textValue[1] : textValue);
        } else if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"](formatter)) {
            return isMinMax ? formatter(value[0], value[1]) : formatter(value);
        }
        if (isMinMax) {
            if (value[0] === dataBound[0]) {
                return edgeSymbols[0] + ' ' + textValue[1];
            } else if (value[1] === dataBound[1]) {
                return edgeSymbols[1] + ' ' + textValue[0];
            } else {
                return textValue[0] + ' - ' + textValue[1];
            }
        } else {
            // Format single value (includes category case).
            return textValue;
        }
        //TURBOPACK unreachable
        ;
        function toFixed(val) {
            return val === dataBound[0] ? 'min' : val === dataBound[1] ? 'max' : (+val).toFixed(Math.min(precision, 20));
        }
    };
    /**
   * @protected
   */ VisualMapModel.prototype.resetExtent = function() {
        var thisOption = this.option;
        // Can not calculate data extent by data here.
        // Because series and data may be modified in processing stage.
        // So we do not support the feature "auto min/max".
        var extent = asc([
            thisOption.min,
            thisOption.max
        ]);
        this._dataExtent = extent;
    };
    /**
   * PENDING:
   * delete this method if no outer usage.
   *
   * Return  Concrete dimension. If null/undefined is returned, no dimension is used.
   */ // getDataDimension(data: SeriesData) {
    //     const optDim = this.option.dimension;
    //     if (optDim != null) {
    //         return data.getDimension(optDim);
    //     }
    //     const dimNames = data.dimensions;
    //     for (let i = dimNames.length - 1; i >= 0; i--) {
    //         const dimName = dimNames[i];
    //         const dimInfo = data.getDimensionInfo(dimName);
    //         if (!dimInfo.isCalculationCoord) {
    //             return dimName;
    //         }
    //     }
    // }
    VisualMapModel.prototype.getDataDimensionIndex = function(data) {
        var optDim = this.option.dimension;
        if (optDim != null) {
            return data.getDimensionIndex(optDim);
        }
        var dimNames = data.dimensions;
        for(var i = dimNames.length - 1; i >= 0; i--){
            var dimName = dimNames[i];
            var dimInfo = data.getDimensionInfo(dimName);
            if (!dimInfo.isCalculationCoord) {
                return dimInfo.storeDimIndex;
            }
        }
    };
    VisualMapModel.prototype.getExtent = function() {
        return this._dataExtent.slice();
    };
    VisualMapModel.prototype.completeVisualOption = function() {
        var ecModel = this.ecModel;
        var thisOption = this.option;
        var base = {
            inRange: thisOption.inRange,
            outOfRange: thisOption.outOfRange
        };
        var target = thisOption.target || (thisOption.target = {});
        var controller = thisOption.controller || (thisOption.controller = {});
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["merge"](target, base); // Do not override
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["merge"](controller, base); // Do not override
        var isCategory = this.isCategory();
        completeSingle.call(this, target);
        completeSingle.call(this, controller);
        completeInactive.call(this, target, 'inRange', 'outOfRange');
        // completeInactive.call(this, target, 'outOfRange', 'inRange');
        completeController.call(this, controller);
        function completeSingle(base) {
            // Compatible with ec2 dataRange.color.
            // The mapping order of dataRange.color is: [high value, ..., low value]
            // whereas inRange.color and outOfRange.color is [low value, ..., high value]
            // Notice: ec2 has no inverse.
            if (isArray(thisOption.color) && !base.inRange) {
                base.inRange = {
                    color: thisOption.color.slice().reverse()
                };
            }
            // Compatible with previous logic, always give a default color, otherwise
            // simple config with no inRange and outOfRange will not work.
            // Originally we use visualMap.color as the default color, but setOption at
            // the second time the default color will be erased. So we change to use
            // constant DEFAULT_COLOR.
            // If user do not want the default color, set inRange: {color: null}.
            base.inRange = base.inRange || {
                color: ecModel.get('gradientColor')
            };
        }
        function completeInactive(base, stateExist, stateAbsent) {
            var optExist = base[stateExist];
            var optAbsent = base[stateAbsent];
            if (optExist && !optAbsent) {
                optAbsent = base[stateAbsent] = {};
                each(optExist, function(visualData, visualType) {
                    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$VisualMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isValidType(visualType)) {
                        return;
                    }
                    var defa = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$visualDefault$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(visualType, 'inactive', isCategory);
                    if (defa != null) {
                        optAbsent[visualType] = defa;
                        // Compatibable with ec2:
                        // Only inactive color to rgba(0,0,0,0) can not
                        // make label transparent, so use opacity also.
                        if (visualType === 'color' && !optAbsent.hasOwnProperty('opacity') && !optAbsent.hasOwnProperty('colorAlpha')) {
                            optAbsent.opacity = [
                                0,
                                0
                            ];
                        }
                    }
                });
            }
        }
        function completeController(controller) {
            var symbolExists = (controller.inRange || {}).symbol || (controller.outOfRange || {}).symbol;
            var symbolSizeExists = (controller.inRange || {}).symbolSize || (controller.outOfRange || {}).symbolSize;
            var inactiveColor = this.get('inactiveColor');
            var itemSymbol = this.getItemSymbol();
            var defaultSymbol = itemSymbol || 'roundRect';
            each(this.stateList, function(state) {
                var itemSize = this.itemSize;
                var visuals = controller[state];
                // Set inactive color for controller if no other color
                // attr (like colorAlpha) specified.
                if (!visuals) {
                    visuals = controller[state] = {
                        color: isCategory ? inactiveColor : [
                            inactiveColor
                        ]
                    };
                }
                // Consistent symbol and symbolSize if not specified.
                if (visuals.symbol == null) {
                    visuals.symbol = symbolExists && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clone"](symbolExists) || (isCategory ? defaultSymbol : [
                        defaultSymbol
                    ]);
                }
                if (visuals.symbolSize == null) {
                    visuals.symbolSize = symbolSizeExists && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clone"](symbolSizeExists) || (isCategory ? itemSize[0] : [
                        itemSize[0],
                        itemSize[0]
                    ]);
                }
                // Filter none
                visuals.symbol = mapVisual(visuals.symbol, function(symbol) {
                    return symbol === 'none' ? defaultSymbol : symbol;
                });
                // Normalize symbolSize
                var symbolSize = visuals.symbolSize;
                if (symbolSize != null) {
                    var max_1 = -Infinity;
                    // symbolSize can be object when categories defined.
                    eachVisual(symbolSize, function(value) {
                        value > max_1 && (max_1 = value);
                    });
                    visuals.symbolSize = mapVisual(symbolSize, function(value) {
                        return linearMap(value, [
                            0,
                            max_1
                        ], [
                            0,
                            itemSize[0]
                        ], true);
                    });
                }
            }, this);
        }
    };
    VisualMapModel.prototype.resetItemSize = function() {
        this.itemSize = [
            parseFloat(this.get('itemWidth')),
            parseFloat(this.get('itemHeight'))
        ];
    };
    VisualMapModel.prototype.isCategory = function() {
        return !!this.option.categories;
    };
    /**
   * @public
   * @abstract
   */ VisualMapModel.prototype.setSelected = function(selected) {};
    VisualMapModel.prototype.getSelected = function() {
        return null;
    };
    /**
   * @public
   * @abstract
   */ VisualMapModel.prototype.getValueState = function(value) {
        return null;
    };
    /**
   * FIXME
   * Do not publish to thirt-part-dev temporarily
   * util the interface is stable. (Should it return
   * a function but not visual meta?)
   *
   * @pubilc
   * @abstract
   * @param getColorVisual
   *        params: value, valueState
   *        return: color
   * @return {Object} visualMeta
   *        should includes {stops, outerColors}
   *        outerColor means [colorBeyondMinValue, colorBeyondMaxValue]
   */ VisualMapModel.prototype.getVisualMeta = function(getColorVisual) {
        return null;
    };
    VisualMapModel.type = 'visualMap';
    VisualMapModel.dependencies = [
        'series'
    ];
    VisualMapModel.defaultOption = {
        show: true,
        // zlevel: 0,
        z: 4,
        // seriesIndex: 'all',
        min: 0,
        max: 200,
        left: 0,
        right: null,
        top: null,
        bottom: 0,
        itemWidth: null,
        itemHeight: null,
        inverse: false,
        orient: 'vertical',
        backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].color.transparent,
        borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].color.borderTint,
        contentColor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].color.theme[0],
        inactiveColor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].color.disabled,
        borderWidth: 0,
        padding: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].size.m,
        // 接受数组分别设定上右下左边距，同css
        textGap: 10,
        precision: 0,
        textStyle: {
            color: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].color.secondary // 值域文字颜色
        }
    };
    return VisualMapModel;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = VisualMapModel;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/visualMap/ContinuousModel.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$visualMap$2f$VisualMapModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/visualMap/VisualMapModel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/number.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/component.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/tokens.js [app-client] (ecmascript)");
;
;
;
;
;
;
// Constant
var DEFAULT_BAR_BOUND = [
    20,
    140
];
var ContinuousModel = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(ContinuousModel, _super);
    function ContinuousModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = ContinuousModel.type;
        return _this;
    }
    /**
   * @override
   */ ContinuousModel.prototype.optionUpdated = function(newOption, isInit) {
        _super.prototype.optionUpdated.apply(this, arguments);
        this.resetExtent();
        this.resetVisual(function(mappingOption) {
            mappingOption.mappingMethod = 'linear';
            mappingOption.dataExtent = this.getExtent();
        });
        this._resetRange();
    };
    /**
   * @protected
   * @override
   */ ContinuousModel.prototype.resetItemSize = function() {
        _super.prototype.resetItemSize.apply(this, arguments);
        var itemSize = this.itemSize;
        (itemSize[0] == null || isNaN(itemSize[0])) && (itemSize[0] = DEFAULT_BAR_BOUND[0]);
        (itemSize[1] == null || isNaN(itemSize[1])) && (itemSize[1] = DEFAULT_BAR_BOUND[1]);
    };
    /**
   * @private
   */ ContinuousModel.prototype._resetRange = function() {
        var dataExtent = this.getExtent();
        var range = this.option.range;
        if (!range || range.auto) {
            // `range` should always be array (so we don't use other
            // value like 'auto') for user-friend. (consider getOption).
            dataExtent.auto = 1;
            this.option.range = dataExtent;
        } else if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"](range)) {
            if (range[0] > range[1]) {
                range.reverse();
            }
            range[0] = Math.max(range[0], dataExtent[0]);
            range[1] = Math.min(range[1], dataExtent[1]);
        }
    };
    /**
   * @protected
   * @override
   */ ContinuousModel.prototype.completeVisualOption = function() {
        _super.prototype.completeVisualOption.apply(this, arguments);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"](this.stateList, function(state) {
            var symbolSize = this.option.controller[state].symbolSize;
            if (symbolSize && symbolSize[0] !== symbolSize[1]) {
                symbolSize[0] = symbolSize[1] / 3; // For good looking.
            }
        }, this);
    };
    /**
   * @override
   */ ContinuousModel.prototype.setSelected = function(selected) {
        this.option.range = selected.slice();
        this._resetRange();
    };
    /**
   * @public
   */ ContinuousModel.prototype.getSelected = function() {
        var dataExtent = this.getExtent();
        var dataInterval = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asc"]((this.get('range') || []).slice());
        // Clamp
        dataInterval[0] > dataExtent[1] && (dataInterval[0] = dataExtent[1]);
        dataInterval[1] > dataExtent[1] && (dataInterval[1] = dataExtent[1]);
        dataInterval[0] < dataExtent[0] && (dataInterval[0] = dataExtent[0]);
        dataInterval[1] < dataExtent[0] && (dataInterval[1] = dataExtent[0]);
        return dataInterval;
    };
    /**
   * @override
   */ ContinuousModel.prototype.getValueState = function(value) {
        var range = this.option.range;
        var dataExtent = this.getExtent();
        var unboundedRange = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["retrieve2"](this.option.unboundedRange, true);
        return (unboundedRange && range[0] <= dataExtent[0] || range[0] <= value) && (unboundedRange && range[1] >= dataExtent[1] || value <= range[1]) ? 'inRange' : 'outOfRange';
    };
    ContinuousModel.prototype.findTargetDataIndices = function(range) {
        var result = [];
        this.eachTargetSeries(function(seriesModel) {
            var dataIndices = [];
            var data = seriesModel.getData();
            data.each(this.getDataDimensionIndex(data), function(value, dataIndex) {
                range[0] <= value && value <= range[1] && dataIndices.push(dataIndex);
            }, this);
            result.push({
                seriesId: seriesModel.id,
                dataIndex: dataIndices
            });
        }, this);
        return result;
    };
    /**
   * @implement
   */ ContinuousModel.prototype.getVisualMeta = function(getColorVisual) {
        var oVals = getColorStopValues(this, 'outOfRange', this.getExtent());
        var iVals = getColorStopValues(this, 'inRange', this.option.range.slice());
        var stops = [];
        function setStop(value, valueState) {
            stops.push({
                value: value,
                color: getColorVisual(value, valueState)
            });
        }
        // Format to: outOfRange -- inRange -- outOfRange.
        var iIdx = 0;
        var oIdx = 0;
        var iLen = iVals.length;
        var oLen = oVals.length;
        for(; oIdx < oLen && (!iVals.length || oVals[oIdx] <= iVals[0]); oIdx++){
            // If oVal[oIdx] === iVals[iIdx], oVal[oIdx] should be ignored.
            if (oVals[oIdx] < iVals[iIdx]) {
                setStop(oVals[oIdx], 'outOfRange');
            }
        }
        for(var first = 1; iIdx < iLen; iIdx++, first = 0){
            // If range is full, value beyond min, max will be clamped.
            // make a singularity
            first && stops.length && setStop(iVals[iIdx], 'outOfRange');
            setStop(iVals[iIdx], 'inRange');
        }
        for(var first = 1; oIdx < oLen; oIdx++){
            if (!iVals.length || iVals[iVals.length - 1] < oVals[oIdx]) {
                // make a singularity
                if (first) {
                    stops.length && setStop(stops[stops.length - 1].value, 'outOfRange');
                    first = 0;
                }
                setStop(oVals[oIdx], 'outOfRange');
            }
        }
        var stopsLen = stops.length;
        return {
            stops: stops,
            outerColors: [
                stopsLen ? stops[0].color : 'transparent',
                stopsLen ? stops[stopsLen - 1].color : 'transparent'
            ]
        };
    };
    ContinuousModel.type = 'visualMap.continuous';
    ContinuousModel.defaultOption = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inheritDefaultOption"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$visualMap$2f$VisualMapModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].defaultOption, {
        align: 'auto',
        calculable: false,
        hoverLink: true,
        realtime: true,
        handleIcon: 'path://M-11.39,9.77h0a3.5,3.5,0,0,1-3.5,3.5h-22a3.5,3.5,0,0,1-3.5-3.5h0a3.5,3.5,0,0,1,3.5-3.5h22A3.5,3.5,0,0,1-11.39,9.77Z',
        handleSize: '120%',
        handleStyle: {
            borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].color.neutral00,
            borderWidth: 1
        },
        indicatorIcon: 'circle',
        indicatorSize: '50%',
        indicatorStyle: {
            borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].color.neutral00,
            borderWidth: 2,
            shadowBlur: 2,
            shadowOffsetX: 1,
            shadowOffsetY: 1,
            shadowColor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].color.shadow
        }
    });
    return ContinuousModel;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$visualMap$2f$VisualMapModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
function getColorStopValues(visualMapModel, valueState, dataExtent) {
    if (dataExtent[0] === dataExtent[1]) {
        return dataExtent.slice();
    }
    // When using colorHue mapping, it is not linear color any more.
    // Moreover, canvas gradient seems not to be accurate linear.
    // FIXME
    // Should be arbitrary value 100? or based on pixel size?
    var count = 200;
    var step = (dataExtent[1] - dataExtent[0]) / count;
    var value = dataExtent[0];
    var stopValues = [];
    for(var i = 0; i <= count && value < dataExtent[1]; i++){
        stopValues.push(value);
        value += step;
    }
    stopValues.push(dataExtent[1]);
    return stopValues;
}
const __TURBOPACK__default__export__ = ContinuousModel;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/visualMap/VisualMapView.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Rect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rect$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Rect.js [app-client] (ecmascript) <export default as Rect>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/format.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/layout.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$VisualMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/VisualMapping.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/view/Component.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
var VisualMapView = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(VisualMapView, _super);
    function VisualMapView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = VisualMapView.type;
        _this.autoPositionValues = {
            left: 1,
            right: 1,
            top: 1,
            bottom: 1
        };
        return _this;
    }
    VisualMapView.prototype.init = function(ecModel, api) {
        this.ecModel = ecModel;
        this.api = api;
    };
    /**
   * @protected
   */ VisualMapView.prototype.render = function(visualMapModel, ecModel, api, payload // TODO: TYPE
    ) {
        this.visualMapModel = visualMapModel;
        if (visualMapModel.get('show') === false) {
            this.group.removeAll();
            return;
        }
        this.doRender(visualMapModel, ecModel, api, payload);
    };
    /**
   * @protected
   */ VisualMapView.prototype.renderBackground = function(group) {
        var visualMapModel = this.visualMapModel;
        var padding = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["normalizeCssArray"](visualMapModel.get('padding') || 0);
        var rect = group.getBoundingRect();
        group.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Rect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rect$3e$__["Rect"]({
            z2: -1,
            silent: true,
            shape: {
                x: rect.x - padding[3],
                y: rect.y - padding[0],
                width: rect.width + padding[3] + padding[1],
                height: rect.height + padding[0] + padding[2]
            },
            style: {
                fill: visualMapModel.get('backgroundColor'),
                stroke: visualMapModel.get('borderColor'),
                lineWidth: visualMapModel.get('borderWidth')
            }
        }));
    };
    /**
   * @protected
   * @param targetValue can be Infinity or -Infinity
   * @param visualCluster Only can be 'color' 'opacity' 'symbol' 'symbolSize'
   * @param opts
   * @param opts.forceState Specify state, instead of using getValueState method.
   * @param opts.convertOpacityToAlpha For color gradient in controller widget.
   * @return {*} Visual value.
   */ VisualMapView.prototype.getControllerVisual = function(targetValue, visualCluster, opts) {
        opts = opts || {};
        var forceState = opts.forceState;
        var visualMapModel = this.visualMapModel;
        var visualObj = {};
        // Default values.
        if (visualCluster === 'color') {
            var defaultColor = visualMapModel.get('contentColor');
            visualObj.color = defaultColor;
        }
        function getter(key) {
            return visualObj[key];
        }
        function setter(key, value) {
            visualObj[key] = value;
        }
        var mappings = visualMapModel.controllerVisuals[forceState || visualMapModel.getValueState(targetValue)];
        var visualTypes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$VisualMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].prepareVisualTypes(mappings);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"](visualTypes, function(type) {
            var visualMapping = mappings[type];
            if (opts.convertOpacityToAlpha && type === 'opacity') {
                type = 'colorAlpha';
                visualMapping = mappings.__alphaForOpacity;
            }
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$VisualMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dependsOn(type, visualCluster)) {
                visualMapping && visualMapping.applyVisual(targetValue, getter, setter);
            }
        });
        return visualObj[visualCluster];
    };
    VisualMapView.prototype.positionGroup = function(group) {
        var model = this.visualMapModel;
        var api = this.api;
        var refContainer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBoxLayoutReference"](model, api).refContainer;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["positionElement"](group, model.getBoxLayoutParams(), refContainer);
    };
    VisualMapView.prototype.doRender = function(visualMapModel, ecModel, api, payload) {};
    VisualMapView.type = 'visualMap';
    return VisualMapView;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = VisualMapView;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/visualMap/helper.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    "getItemAlign",
    ()=>getItemAlign,
    "makeHighDownBatch",
    ()=>makeHighDownBatch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/layout.js [app-client] (ecmascript)");
;
;
var paramsSet = [
    [
        'left',
        'right',
        'width'
    ],
    [
        'top',
        'bottom',
        'height'
    ]
];
function getItemAlign(visualMapModel, api, itemSize) {
    var modelOption = visualMapModel.option;
    var itemAlign = modelOption.align;
    if (itemAlign != null && itemAlign !== 'auto') {
        return itemAlign;
    }
    // Auto decision align.
    var ecSize = {
        width: api.getWidth(),
        height: api.getHeight()
    };
    var realIndex = modelOption.orient === 'horizontal' ? 1 : 0;
    var reals = paramsSet[realIndex];
    var fakeValue = [
        0,
        null,
        10
    ];
    var layoutInput = {};
    for(var i = 0; i < 3; i++){
        layoutInput[paramsSet[1 - realIndex][i]] = fakeValue[i];
        layoutInput[reals[i]] = i === 2 ? itemSize[0] : modelOption[reals[i]];
    }
    var rParam = [
        [
            'x',
            'width',
            3
        ],
        [
            'y',
            'height',
            0
        ]
    ][realIndex];
    var rect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLayoutRect"])(layoutInput, ecSize, modelOption.padding);
    return reals[(rect.margin[rParam[2]] || 0) + rect[rParam[0]] + rect[rParam[1]] * 0.5 < ecSize[rParam[1]] * 0.5 ? 0 : 1];
}
function makeHighDownBatch(batch, visualMapModel) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"](batch || [], function(batchItem) {
        if (batchItem.dataIndex != null) {
            batchItem.dataIndexInside = batchItem.dataIndex;
            batchItem.dataIndex = null;
        }
        batchItem.highlightKey = 'visualMap' + (visualMapModel ? visualMapModel.componentIndex : '');
    });
    return batch;
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/visualMap/ContinuousView.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$LinearGradient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/LinearGradient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/event.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$visualMap$2f$VisualMapView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/visualMap/VisualMapView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Text$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Text.js [app-client] (ecmascript) <export default as Text>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Group.js [app-client] (ecmascript) <export default as Group>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Rect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rect$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Rect.js [app-client] (ecmascript) <export default as Rect>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/graphic.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Polygon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Polygon$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Polygon.js [app-client] (ecmascript) <export default as Polygon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/number.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$sliderMove$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/helper/sliderMove.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$visualMap$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/visualMap/helper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$contain$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/contain/text.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/states.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$symbol$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/symbol.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/innerStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/label/labelStyle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/event.js [app-client] (ecmascript)");
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
var linearMap = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["linearMap"];
var each = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"];
var mathMin = Math.min;
var mathMax = Math.max;
// Arbitrary value
var HOVER_LINK_SIZE = 12;
var HOVER_LINK_OUT = 6;
// Notice:
// Any "interval" should be by the order of [low, high].
// "handle0" (handleIndex === 0) maps to
// low data value: this._dataInterval[0] and has low coord.
// "handle1" (handleIndex === 1) maps to
// high data value: this._dataInterval[1] and has high coord.
// The logic of transform is implemented in this._createBarGroup.
var ContinuousView = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(ContinuousView, _super);
    function ContinuousView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = ContinuousView.type;
        _this._shapes = {};
        _this._dataInterval = [];
        _this._handleEnds = [];
        _this._hoverLinkDataIndices = [];
        return _this;
    }
    ContinuousView.prototype.init = function(ecModel, api) {
        _super.prototype.init.call(this, ecModel, api);
        this._hoverLinkFromSeriesMouseOver = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bind"](this._hoverLinkFromSeriesMouseOver, this);
        this._hideIndicator = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bind"](this._hideIndicator, this);
    };
    ContinuousView.prototype.doRender = function(visualMapModel, ecModel, api, payload) {
        if (!payload || payload.type !== 'selectDataRange' || payload.from !== this.uid) {
            this._buildView();
        }
    };
    ContinuousView.prototype._buildView = function() {
        this.group.removeAll();
        var visualMapModel = this.visualMapModel;
        var thisGroup = this.group;
        this._orient = visualMapModel.get('orient');
        this._useHandle = visualMapModel.get('calculable');
        this._resetInterval();
        this._renderBar(thisGroup);
        var dataRangeText = visualMapModel.get('text');
        this._renderEndsText(thisGroup, dataRangeText, 0);
        this._renderEndsText(thisGroup, dataRangeText, 1);
        // Do this for background size calculation.
        this._updateView(true);
        // After updating view, inner shapes is built completely,
        // and then background can be rendered.
        this.renderBackground(thisGroup);
        // Real update view
        this._updateView();
        this._enableHoverLinkToSeries();
        this._enableHoverLinkFromSeries();
        this.positionGroup(thisGroup);
    };
    ContinuousView.prototype._renderEndsText = function(group, dataRangeText, endsIndex) {
        if (!dataRangeText) {
            return;
        }
        // Compatible with ec2, text[0] map to high value, text[1] map low value.
        var text = dataRangeText[1 - endsIndex];
        text = text != null ? text + '' : '';
        var visualMapModel = this.visualMapModel;
        var textGap = visualMapModel.get('textGap');
        var itemSize = visualMapModel.itemSize;
        var barGroup = this._shapes.mainGroup;
        var position = this._applyTransform([
            itemSize[0] / 2,
            endsIndex === 0 ? -textGap : itemSize[1] + textGap
        ], barGroup);
        var align = this._applyTransform(endsIndex === 0 ? 'bottom' : 'top', barGroup);
        var orient = this._orient;
        var textStyleModel = this.visualMapModel.textStyleModel;
        this.group.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Text$3e$__["Text"]({
            style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createTextStyle"])(textStyleModel, {
                x: position[0],
                y: position[1],
                verticalAlign: textStyleModel.get('verticalAlign') || (orient === 'horizontal' ? 'middle' : align),
                align: textStyleModel.get('align') || (orient === 'horizontal' ? align : 'center'),
                text: text
            })
        }));
    };
    ContinuousView.prototype._renderBar = function(targetGroup) {
        var visualMapModel = this.visualMapModel;
        var shapes = this._shapes;
        var itemSize = visualMapModel.itemSize;
        var orient = this._orient;
        var useHandle = this._useHandle;
        var itemAlign = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$visualMap$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getItemAlign"](visualMapModel, this.api, itemSize);
        var mainGroup = shapes.mainGroup = this._createBarGroup(itemAlign);
        var gradientBarGroup = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__["Group"]();
        mainGroup.add(gradientBarGroup);
        // Bar
        gradientBarGroup.add(shapes.outOfRange = createPolygon());
        gradientBarGroup.add(shapes.inRange = createPolygon(null, useHandle ? getCursor(this._orient) : null, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bind"](this._dragHandle, this, 'all', false), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bind"](this._dragHandle, this, 'all', true)));
        // A border radius clip.
        gradientBarGroup.setClipPath(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Rect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rect$3e$__["Rect"]({
            shape: {
                x: 0,
                y: 0,
                width: itemSize[0],
                height: itemSize[1],
                r: 3
            }
        }));
        var textRect = visualMapModel.textStyleModel.getTextRect('国');
        var textSize = mathMax(textRect.width, textRect.height);
        // Handle
        if (useHandle) {
            shapes.handleThumbs = [];
            shapes.handleLabels = [];
            shapes.handleLabelPoints = [];
            this._createHandle(visualMapModel, mainGroup, 0, itemSize, textSize, orient);
            this._createHandle(visualMapModel, mainGroup, 1, itemSize, textSize, orient);
        }
        this._createIndicator(visualMapModel, mainGroup, itemSize, textSize, orient);
        targetGroup.add(mainGroup);
    };
    ContinuousView.prototype._createHandle = function(visualMapModel, mainGroup, handleIndex, itemSize, textSize, orient) {
        var onDrift = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bind"](this._dragHandle, this, handleIndex, false);
        var onDragEnd = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bind"](this._dragHandle, this, handleIndex, true);
        var handleSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$contain$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parsePercent"])(visualMapModel.get('handleSize'), itemSize[0]);
        var handleThumb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$symbol$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSymbol"])(visualMapModel.get('handleIcon'), -handleSize / 2, -handleSize / 2, handleSize, handleSize, null, true);
        var cursor = getCursor(this._orient);
        handleThumb.attr({
            cursor: cursor,
            draggable: true,
            drift: onDrift,
            ondragend: onDragEnd,
            onmousemove: function(e) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["stop"](e.event);
            }
        });
        handleThumb.x = itemSize[0] / 2;
        handleThumb.useStyle(visualMapModel.getModel('handleStyle').getItemStyle());
        handleThumb.setStyle({
            strokeNoScale: true,
            strokeFirst: true
        });
        handleThumb.style.lineWidth *= 2;
        handleThumb.ensureState('emphasis').style = visualMapModel.getModel([
            'emphasis',
            'handleStyle'
        ]).getItemStyle();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setAsHighDownDispatcher"])(handleThumb, true);
        mainGroup.add(handleThumb);
        // Text is always horizontal layout but should not be effected by
        // transform (orient/inverse). So label is built separately but not
        // use zrender/graphic/helper/RectText, and is located based on view
        // group (according to handleLabelPoint) but not barGroup.
        var textStyleModel = this.visualMapModel.textStyleModel;
        var handleLabel = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Text$3e$__["Text"]({
            cursor: cursor,
            draggable: true,
            drift: onDrift,
            onmousemove: function(e) {
                // For mobile device, prevent screen slider on the button.
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["stop"](e.event);
            },
            ondragend: onDragEnd,
            style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createTextStyle"])(textStyleModel, {
                x: 0,
                y: 0,
                text: ''
            })
        });
        handleLabel.ensureState('blur').style = {
            opacity: 0.1
        };
        handleLabel.stateTransition = {
            duration: 200
        };
        this.group.add(handleLabel);
        var handleLabelPoint = [
            handleSize,
            0
        ];
        var shapes = this._shapes;
        shapes.handleThumbs[handleIndex] = handleThumb;
        shapes.handleLabelPoints[handleIndex] = handleLabelPoint;
        shapes.handleLabels[handleIndex] = handleLabel;
    };
    ContinuousView.prototype._createIndicator = function(visualMapModel, mainGroup, itemSize, textSize, orient) {
        var scale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$contain$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parsePercent"])(visualMapModel.get('indicatorSize'), itemSize[0]);
        var indicator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$symbol$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSymbol"])(visualMapModel.get('indicatorIcon'), -scale / 2, -scale / 2, scale, scale, null, true);
        indicator.attr({
            cursor: 'move',
            invisible: true,
            silent: true,
            x: itemSize[0] / 2
        });
        var indicatorStyle = visualMapModel.getModel('indicatorStyle').getItemStyle();
        if (indicator instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) {
            var pathStyle = indicator.style;
            indicator.useStyle(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extend"]({
                // TODO other properties like x, y ?
                image: pathStyle.image,
                x: pathStyle.x,
                y: pathStyle.y,
                width: pathStyle.width,
                height: pathStyle.height
            }, indicatorStyle));
        } else {
            indicator.useStyle(indicatorStyle);
        }
        mainGroup.add(indicator);
        var textStyleModel = this.visualMapModel.textStyleModel;
        var indicatorLabel = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Text$3e$__["Text"]({
            silent: true,
            invisible: true,
            style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createTextStyle"])(textStyleModel, {
                x: 0,
                y: 0,
                text: ''
            })
        });
        this.group.add(indicatorLabel);
        var indicatorLabelPoint = [
            (orient === 'horizontal' ? textSize / 2 : HOVER_LINK_OUT) + itemSize[0] / 2,
            0
        ];
        var shapes = this._shapes;
        shapes.indicator = indicator;
        shapes.indicatorLabel = indicatorLabel;
        shapes.indicatorLabelPoint = indicatorLabelPoint;
        this._firstShowIndicator = true;
    };
    ContinuousView.prototype._dragHandle = function(handleIndex, isEnd, // dx is event from ondragend if isEnd is true. It's not used
    dx, dy) {
        if (!this._useHandle) {
            return;
        }
        this._dragging = !isEnd;
        if (!isEnd) {
            // Transform dx, dy to bar coordination.
            var vertex = this._applyTransform([
                dx,
                dy
            ], this._shapes.mainGroup, true);
            this._updateInterval(handleIndex, vertex[1]);
            this._hideIndicator();
            // Considering realtime, update view should be executed
            // before dispatch action.
            this._updateView();
        }
        // dragEnd do not dispatch action when realtime.
        if (isEnd === !this.visualMapModel.get('realtime')) {
            // jshint ignore:line
            this.api.dispatchAction({
                type: 'selectDataRange',
                from: this.uid,
                visualMapId: this.visualMapModel.id,
                selected: this._dataInterval.slice()
            });
        }
        if (isEnd) {
            !this._hovering && this._clearHoverLinkToSeries();
        } else if (useHoverLinkOnHandle(this.visualMapModel)) {
            this._doHoverLinkToSeries(this._handleEnds[handleIndex], false);
        }
    };
    ContinuousView.prototype._resetInterval = function() {
        var visualMapModel = this.visualMapModel;
        var dataInterval = this._dataInterval = visualMapModel.getSelected();
        var dataExtent = visualMapModel.getExtent();
        var sizeExtent = [
            0,
            visualMapModel.itemSize[1]
        ];
        this._handleEnds = [
            linearMap(dataInterval[0], dataExtent, sizeExtent, true),
            linearMap(dataInterval[1], dataExtent, sizeExtent, true)
        ];
    };
    /**
   * @private
   * @param {(number|string)} handleIndex 0 or 1 or 'all'
   * @param {number} dx
   * @param {number} dy
   */ ContinuousView.prototype._updateInterval = function(handleIndex, delta) {
        delta = delta || 0;
        var visualMapModel = this.visualMapModel;
        var handleEnds = this._handleEnds;
        var sizeExtent = [
            0,
            visualMapModel.itemSize[1]
        ];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$sliderMove$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(delta, handleEnds, sizeExtent, handleIndex, // cross is forbidden
        0);
        var dataExtent = visualMapModel.getExtent();
        // Update data interval.
        this._dataInterval = [
            linearMap(handleEnds[0], sizeExtent, dataExtent, true),
            linearMap(handleEnds[1], sizeExtent, dataExtent, true)
        ];
    };
    ContinuousView.prototype._updateView = function(forSketch) {
        var visualMapModel = this.visualMapModel;
        var dataExtent = visualMapModel.getExtent();
        var shapes = this._shapes;
        var outOfRangeHandleEnds = [
            0,
            visualMapModel.itemSize[1]
        ];
        var inRangeHandleEnds = forSketch ? outOfRangeHandleEnds : this._handleEnds;
        var visualInRange = this._createBarVisual(this._dataInterval, dataExtent, inRangeHandleEnds, 'inRange');
        var visualOutOfRange = this._createBarVisual(dataExtent, dataExtent, outOfRangeHandleEnds, 'outOfRange');
        shapes.inRange.setStyle({
            fill: visualInRange.barColor
        }).setShape('points', visualInRange.barPoints);
        shapes.outOfRange.setStyle({
            fill: visualOutOfRange.barColor
        }).setShape('points', visualOutOfRange.barPoints);
        this._updateHandle(inRangeHandleEnds, visualInRange);
    };
    ContinuousView.prototype._createBarVisual = function(dataInterval, dataExtent, handleEnds, forceState) {
        var opts = {
            forceState: forceState,
            convertOpacityToAlpha: true
        };
        var colorStops = this._makeColorGradient(dataInterval, opts);
        var symbolSizes = [
            this.getControllerVisual(dataInterval[0], 'symbolSize', opts),
            this.getControllerVisual(dataInterval[1], 'symbolSize', opts)
        ];
        var barPoints = this._createBarPoints(handleEnds, symbolSizes);
        return {
            barColor: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$LinearGradient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](0, 0, 0, 1, colorStops),
            barPoints: barPoints,
            handlesColor: [
                colorStops[0].color,
                colorStops[colorStops.length - 1].color
            ]
        };
    };
    ContinuousView.prototype._makeColorGradient = function(dataInterval, opts) {
        // Considering colorHue, which is not linear, so we have to sample
        // to calculate gradient color stops, but not only calculate head
        // and tail.
        var sampleNumber = 100; // Arbitrary value.
        var colorStops = [];
        var step = (dataInterval[1] - dataInterval[0]) / sampleNumber;
        colorStops.push({
            color: this.getControllerVisual(dataInterval[0], 'color', opts),
            offset: 0
        });
        for(var i = 1; i < sampleNumber; i++){
            var currValue = dataInterval[0] + step * i;
            if (currValue > dataInterval[1]) {
                break;
            }
            colorStops.push({
                color: this.getControllerVisual(currValue, 'color', opts),
                offset: i / sampleNumber
            });
        }
        colorStops.push({
            color: this.getControllerVisual(dataInterval[1], 'color', opts),
            offset: 1
        });
        return colorStops;
    };
    ContinuousView.prototype._createBarPoints = function(handleEnds, symbolSizes) {
        var itemSize = this.visualMapModel.itemSize;
        return [
            [
                itemSize[0] - symbolSizes[0],
                handleEnds[0]
            ],
            [
                itemSize[0],
                handleEnds[0]
            ],
            [
                itemSize[0],
                handleEnds[1]
            ],
            [
                itemSize[0] - symbolSizes[1],
                handleEnds[1]
            ]
        ];
    };
    ContinuousView.prototype._createBarGroup = function(itemAlign) {
        var orient = this._orient;
        var inverse = this.visualMapModel.get('inverse');
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__["Group"](orient === 'horizontal' && !inverse ? {
            scaleX: itemAlign === 'bottom' ? 1 : -1,
            rotation: Math.PI / 2
        } : orient === 'horizontal' && inverse ? {
            scaleX: itemAlign === 'bottom' ? -1 : 1,
            rotation: -Math.PI / 2
        } : orient === 'vertical' && !inverse ? {
            scaleX: itemAlign === 'left' ? 1 : -1,
            scaleY: -1
        } : {
            scaleX: itemAlign === 'left' ? 1 : -1
        });
    };
    ContinuousView.prototype._updateHandle = function(handleEnds, visualInRange) {
        if (!this._useHandle) {
            return;
        }
        var shapes = this._shapes;
        var visualMapModel = this.visualMapModel;
        var handleThumbs = shapes.handleThumbs;
        var handleLabels = shapes.handleLabels;
        var itemSize = visualMapModel.itemSize;
        var dataExtent = visualMapModel.getExtent();
        var align = this._applyTransform('left', shapes.mainGroup);
        each([
            0,
            1
        ], function(handleIndex) {
            var handleThumb = handleThumbs[handleIndex];
            handleThumb.setStyle('fill', visualInRange.handlesColor[handleIndex]);
            handleThumb.y = handleEnds[handleIndex];
            var val = linearMap(handleEnds[handleIndex], [
                0,
                itemSize[1]
            ], dataExtent, true);
            var symbolSize = this.getControllerVisual(val, 'symbolSize');
            handleThumb.scaleX = handleThumb.scaleY = symbolSize / itemSize[0];
            handleThumb.x = itemSize[0] - symbolSize / 2;
            // Update handle label position.
            var textPoint = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["applyTransform"](shapes.handleLabelPoints[handleIndex], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getTransform"](handleThumb, this.group));
            if (this._orient === 'horizontal') {
                // If visualMap controls symbol size, an additional offset needs to be added to labels to avoid collision at minimum size.
                // Offset reaches value of 0 at "maximum" position, so maximum position is not altered at all.
                var minimumOffset = align === 'left' || align === 'top' ? (itemSize[0] - symbolSize) / 2 : (itemSize[0] - symbolSize) / -2;
                textPoint[1] += minimumOffset;
            }
            handleLabels[handleIndex].setStyle({
                x: textPoint[0],
                y: textPoint[1],
                text: visualMapModel.formatValueText(this._dataInterval[handleIndex]),
                verticalAlign: 'middle',
                align: this._orient === 'vertical' ? this._applyTransform('left', shapes.mainGroup) : 'center'
            });
        }, this);
    };
    ContinuousView.prototype._showIndicator = function(cursorValue, textValue, rangeSymbol, halfHoverLinkSize) {
        var visualMapModel = this.visualMapModel;
        var dataExtent = visualMapModel.getExtent();
        var itemSize = visualMapModel.itemSize;
        var sizeExtent = [
            0,
            itemSize[1]
        ];
        var shapes = this._shapes;
        var indicator = shapes.indicator;
        if (!indicator) {
            return;
        }
        indicator.attr('invisible', false);
        var opts = {
            convertOpacityToAlpha: true
        };
        var color = this.getControllerVisual(cursorValue, 'color', opts);
        var symbolSize = this.getControllerVisual(cursorValue, 'symbolSize');
        var y = linearMap(cursorValue, dataExtent, sizeExtent, true);
        var x = itemSize[0] - symbolSize / 2;
        var oldIndicatorPos = {
            x: indicator.x,
            y: indicator.y
        };
        // Update handle label position.
        indicator.y = y;
        indicator.x = x;
        var textPoint = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["applyTransform"](shapes.indicatorLabelPoint, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getTransform"](indicator, this.group));
        var indicatorLabel = shapes.indicatorLabel;
        indicatorLabel.attr('invisible', false);
        var align = this._applyTransform('left', shapes.mainGroup);
        var orient = this._orient;
        var isHorizontal = orient === 'horizontal';
        indicatorLabel.setStyle({
            text: (rangeSymbol ? rangeSymbol : '') + visualMapModel.formatValueText(textValue),
            verticalAlign: isHorizontal ? align : 'middle',
            align: isHorizontal ? 'center' : align
        });
        var indicatorNewProps = {
            x: x,
            y: y,
            style: {
                fill: color
            }
        };
        var labelNewProps = {
            style: {
                x: textPoint[0],
                y: textPoint[1]
            }
        };
        if (visualMapModel.ecModel.isAnimationEnabled() && !this._firstShowIndicator) {
            var animationCfg = {
                duration: 100,
                easing: 'cubicInOut',
                additive: true
            };
            indicator.x = oldIndicatorPos.x;
            indicator.y = oldIndicatorPos.y;
            indicator.animateTo(indicatorNewProps, animationCfg);
            indicatorLabel.animateTo(labelNewProps, animationCfg);
        } else {
            indicator.attr(indicatorNewProps);
            indicatorLabel.attr(labelNewProps);
        }
        this._firstShowIndicator = false;
        var handleLabels = this._shapes.handleLabels;
        if (handleLabels) {
            for(var i = 0; i < handleLabels.length; i++){
                // Fade out handle labels.
                // NOTE: Must use api enter/leave on emphasis/blur/select state. Or the global states manager will change it.
                this.api.enterBlur(handleLabels[i]);
            }
        }
    };
    ContinuousView.prototype._enableHoverLinkToSeries = function() {
        var self = this;
        this._shapes.mainGroup.on('mousemove', function(e) {
            self._hovering = true;
            if (!self._dragging) {
                var itemSize = self.visualMapModel.itemSize;
                var pos = self._applyTransform([
                    e.offsetX,
                    e.offsetY
                ], self._shapes.mainGroup, true, true);
                // For hover link show when hover handle, which might be
                // below or upper than sizeExtent.
                pos[1] = mathMin(mathMax(0, pos[1]), itemSize[1]);
                self._doHoverLinkToSeries(pos[1], 0 <= pos[0] && pos[0] <= itemSize[0]);
            }
        }).on('mouseout', function() {
            // When mouse is out of handle, hoverLink still need
            // to be displayed when realtime is set as false.
            self._hovering = false;
            !self._dragging && self._clearHoverLinkToSeries();
        });
    };
    ContinuousView.prototype._enableHoverLinkFromSeries = function() {
        var zr = this.api.getZr();
        if (this.visualMapModel.option.hoverLink) {
            zr.on('mouseover', this._hoverLinkFromSeriesMouseOver, this);
            zr.on('mouseout', this._hideIndicator, this);
        } else {
            this._clearHoverLinkFromSeries();
        }
    };
    ContinuousView.prototype._doHoverLinkToSeries = function(cursorPos, hoverOnBar) {
        var visualMapModel = this.visualMapModel;
        var itemSize = visualMapModel.itemSize;
        if (!visualMapModel.option.hoverLink) {
            return;
        }
        var sizeExtent = [
            0,
            itemSize[1]
        ];
        var dataExtent = visualMapModel.getExtent();
        // For hover link show when hover handle, which might be below or upper than sizeExtent.
        cursorPos = mathMin(mathMax(sizeExtent[0], cursorPos), sizeExtent[1]);
        var halfHoverLinkSize = getHalfHoverLinkSize(visualMapModel, dataExtent, sizeExtent);
        var hoverRange = [
            cursorPos - halfHoverLinkSize,
            cursorPos + halfHoverLinkSize
        ];
        var cursorValue = linearMap(cursorPos, sizeExtent, dataExtent, true);
        var valueRange = [
            linearMap(hoverRange[0], sizeExtent, dataExtent, true),
            linearMap(hoverRange[1], sizeExtent, dataExtent, true)
        ];
        // Consider data range is out of visualMap range, see test/visualMap-continuous.html,
        // where china and india has very large population.
        hoverRange[0] < sizeExtent[0] && (valueRange[0] = -Infinity);
        hoverRange[1] > sizeExtent[1] && (valueRange[1] = Infinity);
        // Do not show indicator when mouse is over handle,
        // otherwise labels overlap, especially when dragging.
        if (hoverOnBar) {
            if (valueRange[0] === -Infinity) {
                this._showIndicator(cursorValue, valueRange[1], '< ', halfHoverLinkSize);
            } else if (valueRange[1] === Infinity) {
                this._showIndicator(cursorValue, valueRange[0], '> ', halfHoverLinkSize);
            } else {
                this._showIndicator(cursorValue, cursorValue, '≈ ', halfHoverLinkSize);
            }
        }
        // When realtime is set as false, handles, which are in barGroup,
        // also trigger hoverLink, which help user to realize where they
        // focus on when dragging. (see test/heatmap-large.html)
        // When realtime is set as true, highlight will not show when hover
        // handle, because the label on handle, which displays a exact value
        // but not range, might mislead users.
        var oldBatch = this._hoverLinkDataIndices;
        var newBatch = [];
        if (hoverOnBar || useHoverLinkOnHandle(visualMapModel)) {
            newBatch = this._hoverLinkDataIndices = visualMapModel.findTargetDataIndices(valueRange);
        }
        var resultBatches = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compressBatches"](oldBatch, newBatch);
        this._dispatchHighDown('downplay', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$visualMap$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeHighDownBatch"](resultBatches[0], visualMapModel));
        this._dispatchHighDown('highlight', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$visualMap$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeHighDownBatch"](resultBatches[1], visualMapModel));
    };
    ContinuousView.prototype._hoverLinkFromSeriesMouseOver = function(e) {
        var ecData;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findEventDispatcher"])(e.target, function(target) {
            var currECData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getECData"])(target);
            if (currECData.dataIndex != null) {
                ecData = currECData;
                return true;
            }
        }, true);
        if (!ecData) {
            return;
        }
        var dataModel = this.ecModel.getSeriesByIndex(ecData.seriesIndex);
        var visualMapModel = this.visualMapModel;
        if (!visualMapModel.isTargetSeries(dataModel)) {
            return;
        }
        var data = dataModel.getData(ecData.dataType);
        var value = data.getStore().get(visualMapModel.getDataDimensionIndex(data), ecData.dataIndex);
        if (!isNaN(value)) {
            this._showIndicator(value, value);
        }
    };
    ContinuousView.prototype._hideIndicator = function() {
        var shapes = this._shapes;
        shapes.indicator && shapes.indicator.attr('invisible', true);
        shapes.indicatorLabel && shapes.indicatorLabel.attr('invisible', true);
        var handleLabels = this._shapes.handleLabels;
        if (handleLabels) {
            for(var i = 0; i < handleLabels.length; i++){
                // Fade out handle labels.
                // NOTE: Must use api enter/leave on emphasis/blur/select state. Or the global states manager will change it.
                this.api.leaveBlur(handleLabels[i]);
            }
        }
    };
    ContinuousView.prototype._clearHoverLinkToSeries = function() {
        this._hideIndicator();
        var indices = this._hoverLinkDataIndices;
        this._dispatchHighDown('downplay', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$visualMap$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeHighDownBatch"](indices, this.visualMapModel));
        indices.length = 0;
    };
    ContinuousView.prototype._clearHoverLinkFromSeries = function() {
        this._hideIndicator();
        var zr = this.api.getZr();
        zr.off('mouseover', this._hoverLinkFromSeriesMouseOver);
        zr.off('mouseout', this._hideIndicator);
    };
    ContinuousView.prototype._applyTransform = function(vertex, element, inverse, global) {
        var transform = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getTransform"](element, global ? null : this.group);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"](vertex) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["applyTransform"](vertex, transform, inverse) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["transformDirection"](vertex, transform, inverse);
    };
    // TODO: TYPE more specified payload types.
    ContinuousView.prototype._dispatchHighDown = function(type, batch) {
        batch && batch.length && this.api.dispatchAction({
            type: type,
            batch: batch
        });
    };
    /**
   * @override
   */ ContinuousView.prototype.dispose = function() {
        this._clearHoverLinkFromSeries();
        this._clearHoverLinkToSeries();
    };
    ContinuousView.type = 'visualMap.continuous';
    return ContinuousView;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$visualMap$2f$VisualMapView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
function createPolygon(points, cursor, onDrift, onDragEnd) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Polygon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Polygon$3e$__["Polygon"]({
        shape: {
            points: points
        },
        draggable: !!onDrift,
        cursor: cursor,
        drift: onDrift,
        onmousemove: function(e) {
            // For mobile device, prevent screen slider on the button.
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["stop"](e.event);
        },
        ondragend: onDragEnd
    });
}
function getHalfHoverLinkSize(visualMapModel, dataExtent, sizeExtent) {
    var halfHoverLinkSize = HOVER_LINK_SIZE / 2;
    var hoverLinkDataSize = visualMapModel.get('hoverLinkDataSize');
    if (hoverLinkDataSize) {
        halfHoverLinkSize = linearMap(hoverLinkDataSize, dataExtent, sizeExtent, true) / 2;
    }
    return halfHoverLinkSize;
}
function useHoverLinkOnHandle(visualMapModel) {
    var hoverLinkOnHandle = visualMapModel.get('hoverLinkOnHandle');
    return !!(hoverLinkOnHandle == null ? visualMapModel.get('realtime') : hoverLinkOnHandle);
}
function getCursor(orient) {
    return orient === 'vertical' ? 'ns-resize' : 'ew-resize';
}
const __TURBOPACK__default__export__ = ContinuousView;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/visualMap/visualMapAction.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    "visualMapActionHander",
    ()=>visualMapActionHander,
    "visualMapActionInfo",
    ()=>visualMapActionInfo
]);
var visualMapActionInfo = {
    type: 'selectDataRange',
    event: 'dataRangeSelected',
    // FIXME use updateView appears wrong
    update: 'update'
};
var visualMapActionHander = function(payload, ecModel) {
    ecModel.eachComponent({
        mainType: 'visualMap',
        query: payload
    }, function(model) {
        model.setSelected(payload.selected);
    });
};
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/visualMap/visualEncoding.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    "visualMapEncodingHandlers",
    ()=>visualMapEncodingHandlers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$visualSolution$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/visualSolution.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$VisualMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/VisualMapping.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/helper.js [app-client] (ecmascript)");
;
;
;
;
var visualMapEncodingHandlers = [
    {
        createOnAllSeries: true,
        reset: function(seriesModel, ecModel) {
            var resetDefines = [];
            ecModel.eachComponent('visualMap', function(visualMapModel) {
                var pipelineContext = seriesModel.pipelineContext;
                if (!visualMapModel.isTargetSeries(seriesModel) || pipelineContext && pipelineContext.large) {
                    return;
                }
                resetDefines.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$visualSolution$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["incrementalApplyVisual"](visualMapModel.stateList, visualMapModel.targetVisuals, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bind"](visualMapModel.getValueState, visualMapModel), visualMapModel.getDataDimensionIndex(seriesModel.getData())));
            });
            return resetDefines;
        }
    },
    // Only support color.
    {
        createOnAllSeries: true,
        reset: function(seriesModel, ecModel) {
            var data = seriesModel.getData();
            var visualMetaList = [];
            ecModel.eachComponent('visualMap', function(visualMapModel) {
                if (visualMapModel.isTargetSeries(seriesModel)) {
                    var visualMeta = visualMapModel.getVisualMeta(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bind"](getColorVisual, null, seriesModel, visualMapModel)) || {
                        stops: [],
                        outerColors: []
                    };
                    var dimIdx = visualMapModel.getDataDimensionIndex(data);
                    if (dimIdx >= 0) {
                        // visualMeta.dimension should be dimension index, but not concrete dimension.
                        visualMeta.dimension = dimIdx;
                        visualMetaList.push(visualMeta);
                    }
                }
            });
            // console.log(JSON.stringify(visualMetaList.map(a => a.stops)));
            seriesModel.getData().setVisual('visualMeta', visualMetaList);
        }
    }
];
// FIXME
// performance and export for heatmap?
// value can be Infinity or -Infinity
function getColorVisual(seriesModel, visualMapModel, value, valueState) {
    var mappings = visualMapModel.targetVisuals[valueState];
    var visualTypes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$VisualMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].prepareVisualTypes(mappings);
    var resultVisual = {
        color: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVisualFromData"])(seriesModel.getData(), 'color') // default color.
    };
    for(var i = 0, len = visualTypes.length; i < len; i++){
        var type = visualTypes[i];
        var mapping = mappings[type === 'opacity' ? '__alphaForOpacity' : type];
        mapping && mapping.applyVisual(value, getVisual, setVisual);
    }
    return resultVisual.color;
    //TURBOPACK unreachable
    ;
    function getVisual(key) {
        return resultVisual[key];
    }
    function setVisual(key, value) {
        resultVisual[key] = value;
    }
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/visualMap/preprocessor.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
*/ // @ts-nocheck
__turbopack_context__.s([
    "default",
    ()=>visualMapPreprocessor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
;
var each = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"];
function visualMapPreprocessor(option) {
    var visualMap = option && option.visualMap;
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"](visualMap)) {
        visualMap = visualMap ? [
            visualMap
        ] : [];
    }
    each(visualMap, function(opt) {
        if (!opt) {
            return;
        }
        // rename splitList to pieces
        if (has(opt, 'splitList') && !has(opt, 'pieces')) {
            opt.pieces = opt.splitList;
            delete opt.splitList;
        }
        var pieces = opt.pieces;
        if (pieces && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"](pieces)) {
            each(pieces, function(piece) {
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"](piece)) {
                    if (has(piece, 'start') && !has(piece, 'min')) {
                        piece.min = piece.start;
                    }
                    if (has(piece, 'end') && !has(piece, 'max')) {
                        piece.max = piece.end;
                    }
                }
            });
        }
    });
}
function has(obj, name) {
    return obj && obj.hasOwnProperty && obj.hasOwnProperty(name);
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/visualMap/installCommon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$visualMap$2f$visualMapAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/visualMap/visualMapAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$visualMap$2f$visualEncoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/visualMap/visualEncoding.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$visualMap$2f$preprocessor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/visualMap/preprocessor.js [app-client] (ecmascript)");
;
;
;
;
var installed = false;
function installCommon(registers) {
    if (installed) {
        return;
    }
    installed = true;
    registers.registerSubTypeDefaulter('visualMap', function(option) {
        // Compatible with ec2, when splitNumber === 0, continuous visualMap will be used.
        return !option.categories && (!(option.pieces ? option.pieces.length > 0 : option.splitNumber > 0) || option.calculable) ? 'continuous' : 'piecewise';
    });
    registers.registerAction(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$visualMap$2f$visualMapAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["visualMapActionInfo"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$visualMap$2f$visualMapAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["visualMapActionHander"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$visualMap$2f$visualEncoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["visualMapEncodingHandlers"], function(handler) {
        registers.registerVisual(registers.PRIORITY.VISUAL.COMPONENT, handler);
    });
    registers.registerPreprocessor(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$visualMap$2f$preprocessor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/visualMap/installVisualMapContinuous.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$visualMap$2f$ContinuousModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/visualMap/ContinuousModel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$visualMap$2f$ContinuousView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/visualMap/ContinuousView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$visualMap$2f$installCommon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/visualMap/installCommon.js [app-client] (ecmascript)");
;
;
;
function install(registers) {
    registers.registerComponentModel(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$visualMap$2f$ContinuousModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    registers.registerComponentView(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$visualMap$2f$ContinuousView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$visualMap$2f$installCommon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(registers);
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/visualMap/PiecewiseModel.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$visualMap$2f$VisualMapModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/visualMap/VisualMapModel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$VisualMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/VisualMapping.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$visualDefault$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/visualDefault.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/number.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/component.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
var PiecewiseModel = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(PiecewiseModel, _super);
    function PiecewiseModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = PiecewiseModel.type;
        /**
     * The order is always [low, ..., high].
     * [{text: string, interval: Array.<number>}, ...]
     */ _this._pieceList = [];
        return _this;
    }
    PiecewiseModel.prototype.optionUpdated = function(newOption, isInit) {
        _super.prototype.optionUpdated.apply(this, arguments);
        this.resetExtent();
        var mode = this._mode = this._determineMode();
        this._pieceList = [];
        resetMethods[this._mode].call(this, this._pieceList);
        this._resetSelected(newOption, isInit);
        var categories = this.option.categories;
        this.resetVisual(function(mappingOption, state) {
            if (mode === 'categories') {
                mappingOption.mappingMethod = 'category';
                mappingOption.categories = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clone"](categories);
            } else {
                mappingOption.dataExtent = this.getExtent();
                mappingOption.mappingMethod = 'piecewise';
                mappingOption.pieceList = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"](this._pieceList, function(piece) {
                    piece = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clone"](piece);
                    if (state !== 'inRange') {
                        // FIXME
                        // outOfRange do not support special visual in pieces.
                        piece.visual = null;
                    }
                    return piece;
                });
            }
        });
    };
    /**
   * @protected
   * @override
   */ PiecewiseModel.prototype.completeVisualOption = function() {
        // Consider this case:
        // visualMap: {
        //      pieces: [{symbol: 'circle', lt: 0}, {symbol: 'rect', gte: 0}]
        // }
        // where no inRange/outOfRange set but only pieces. So we should make
        // default inRange/outOfRange for this case, otherwise visuals that only
        // appear in `pieces` will not be taken into account in visual encoding.
        var option = this.option;
        var visualTypesInPieces = {};
        var visualTypes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$VisualMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].listVisualTypes();
        var isCategory = this.isCategory();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"](option.pieces, function(piece) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"](visualTypes, function(visualType) {
                if (piece.hasOwnProperty(visualType)) {
                    visualTypesInPieces[visualType] = 1;
                }
            });
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"](visualTypesInPieces, function(v, visualType) {
            var exists = false;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"](this.stateList, function(state) {
                exists = exists || has(option, state, visualType) || has(option.target, state, visualType);
            }, this);
            !exists && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"](this.stateList, function(state) {
                (option[state] || (option[state] = {}))[visualType] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$visualDefault$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(visualType, state === 'inRange' ? 'active' : 'inactive', isCategory);
            });
        }, this);
        function has(obj, state, visualType) {
            return obj && obj[state] && obj[state].hasOwnProperty(visualType);
        }
        _super.prototype.completeVisualOption.apply(this, arguments);
    };
    PiecewiseModel.prototype._resetSelected = function(newOption, isInit) {
        var thisOption = this.option;
        var pieceList = this._pieceList;
        // Selected do not merge but all override.
        var selected = (isInit ? thisOption : newOption).selected || {};
        thisOption.selected = selected;
        // Consider 'not specified' means true.
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"](pieceList, function(piece, index) {
            var key = this.getSelectedMapKey(piece);
            if (!selected.hasOwnProperty(key)) {
                selected[key] = true;
            }
        }, this);
        if (thisOption.selectedMode === 'single') {
            // Ensure there is only one selected.
            var hasSel_1 = false;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"](pieceList, function(piece, index) {
                var key = this.getSelectedMapKey(piece);
                if (selected[key]) {
                    hasSel_1 ? selected[key] = false : hasSel_1 = true;
                }
            }, this);
        }
    // thisOption.selectedMode === 'multiple', default: all selected.
    };
    /**
   * @public
   */ PiecewiseModel.prototype.getItemSymbol = function() {
        return this.get('itemSymbol');
    };
    /**
   * @public
   */ PiecewiseModel.prototype.getSelectedMapKey = function(piece) {
        return this._mode === 'categories' ? piece.value + '' : piece.index + '';
    };
    /**
   * @public
   */ PiecewiseModel.prototype.getPieceList = function() {
        return this._pieceList;
    };
    /**
   * @return {string}
   */ PiecewiseModel.prototype._determineMode = function() {
        var option = this.option;
        return option.pieces && option.pieces.length > 0 ? 'pieces' : this.option.categories ? 'categories' : 'splitNumber';
    };
    /**
   * @override
   */ PiecewiseModel.prototype.setSelected = function(selected) {
        this.option.selected = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clone"](selected);
    };
    /**
   * @override
   */ PiecewiseModel.prototype.getValueState = function(value) {
        var index = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$VisualMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].findPieceIndex(value, this._pieceList);
        return index != null ? this.option.selected[this.getSelectedMapKey(this._pieceList[index])] ? 'inRange' : 'outOfRange' : 'outOfRange';
    };
    /**
   * @public
   * @param pieceIndex piece index in visualMapModel.getPieceList()
   */ PiecewiseModel.prototype.findTargetDataIndices = function(pieceIndex) {
        var result = [];
        var pieceList = this._pieceList;
        this.eachTargetSeries(function(seriesModel) {
            var dataIndices = [];
            var data = seriesModel.getData();
            data.each(this.getDataDimensionIndex(data), function(value, dataIndex) {
                // Should always base on model pieceList, because it is order sensitive.
                var pIdx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$VisualMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].findPieceIndex(value, pieceList);
                pIdx === pieceIndex && dataIndices.push(dataIndex);
            }, this);
            result.push({
                seriesId: seriesModel.id,
                dataIndex: dataIndices
            });
        }, this);
        return result;
    };
    /**
   * @private
   * @param piece piece.value or piece.interval is required.
   * @return  Can be Infinity or -Infinity
   */ PiecewiseModel.prototype.getRepresentValue = function(piece) {
        var representValue;
        if (this.isCategory()) {
            representValue = piece.value;
        } else {
            if (piece.value != null) {
                representValue = piece.value;
            } else {
                var pieceInterval = piece.interval || [];
                representValue = pieceInterval[0] === -Infinity && pieceInterval[1] === Infinity ? 0 : (pieceInterval[0] + pieceInterval[1]) / 2;
            }
        }
        return representValue;
    };
    PiecewiseModel.prototype.getVisualMeta = function(getColorVisual) {
        // Do not support category. (category axis is ordinal, numerical)
        if (this.isCategory()) {
            return;
        }
        var stops = [];
        var outerColors = [
            '',
            ''
        ];
        var visualMapModel = this;
        function setStop(interval, valueState) {
            var representValue = visualMapModel.getRepresentValue({
                interval: interval
            }); // Not category
            if (!valueState) {
                valueState = visualMapModel.getValueState(representValue);
            }
            var color = getColorVisual(representValue, valueState);
            if (interval[0] === -Infinity) {
                outerColors[0] = color;
            } else if (interval[1] === Infinity) {
                outerColors[1] = color;
            } else {
                stops.push({
                    value: interval[0],
                    color: color
                }, {
                    value: interval[1],
                    color: color
                });
            }
        }
        // Suplement
        var pieceList = this._pieceList.slice();
        if (!pieceList.length) {
            pieceList.push({
                interval: [
                    -Infinity,
                    Infinity
                ]
            });
        } else {
            var edge = pieceList[0].interval[0];
            edge !== -Infinity && pieceList.unshift({
                interval: [
                    -Infinity,
                    edge
                ]
            });
            edge = pieceList[pieceList.length - 1].interval[1];
            edge !== Infinity && pieceList.push({
                interval: [
                    edge,
                    Infinity
                ]
            });
        }
        var curr = -Infinity;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"](pieceList, function(piece) {
            var interval = piece.interval;
            if (interval) {
                // Fulfill gap.
                interval[0] > curr && setStop([
                    curr,
                    interval[0]
                ], 'outOfRange');
                setStop(interval.slice());
                curr = interval[1];
            }
        }, this);
        return {
            stops: stops,
            outerColors: outerColors
        };
    };
    PiecewiseModel.type = 'visualMap.piecewise';
    PiecewiseModel.defaultOption = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inheritDefaultOption"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$visualMap$2f$VisualMapModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].defaultOption, {
        selected: null,
        minOpen: false,
        maxOpen: false,
        align: 'auto',
        itemWidth: 20,
        itemHeight: 14,
        itemSymbol: 'roundRect',
        pieces: null,
        categories: null,
        splitNumber: 5,
        selectedMode: 'multiple',
        itemGap: 10,
        hoverLink: true // Enable hover highlight.
    });
    return PiecewiseModel;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$visualMap$2f$VisualMapModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
;
/**
 * Key is this._mode
 * @type {Object}
 * @this {module:echarts/component/viusalMap/PiecewiseMode}
 */ var resetMethods = {
    splitNumber: function(outPieceList) {
        var thisOption = this.option;
        var precision = Math.min(thisOption.precision, 20);
        var dataExtent = this.getExtent();
        var splitNumber = thisOption.splitNumber;
        splitNumber = Math.max(parseInt(splitNumber, 10), 1);
        thisOption.splitNumber = splitNumber;
        var splitStep = (dataExtent[1] - dataExtent[0]) / splitNumber;
        // Precision auto-adaption
        while(+splitStep.toFixed(precision) !== splitStep && precision < 5){
            precision++;
        }
        thisOption.precision = precision;
        splitStep = +splitStep.toFixed(precision);
        if (thisOption.minOpen) {
            outPieceList.push({
                interval: [
                    -Infinity,
                    dataExtent[0]
                ],
                close: [
                    0,
                    0
                ]
            });
        }
        for(var index = 0, curr = dataExtent[0]; index < splitNumber; curr += splitStep, index++){
            var max = index === splitNumber - 1 ? dataExtent[1] : curr + splitStep;
            outPieceList.push({
                interval: [
                    curr,
                    max
                ],
                close: [
                    1,
                    1
                ]
            });
        }
        if (thisOption.maxOpen) {
            outPieceList.push({
                interval: [
                    dataExtent[1],
                    Infinity
                ],
                close: [
                    0,
                    0
                ]
            });
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reformIntervals"])(outPieceList);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"](outPieceList, function(piece, index) {
            piece.index = index;
            piece.text = this.formatValueText(piece.interval);
        }, this);
    },
    categories: function(outPieceList) {
        var thisOption = this.option;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"](thisOption.categories, function(cate) {
            // FIXME category模式也使用pieceList，但在visualMapping中不是使用pieceList。
            // 是否改一致。
            outPieceList.push({
                text: this.formatValueText(cate, true),
                value: cate
            });
        }, this);
        // See "Order Rule".
        normalizeReverse(thisOption, outPieceList);
    },
    pieces: function(outPieceList) {
        var thisOption = this.option;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"](thisOption.pieces, function(pieceListItem, index) {
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"](pieceListItem)) {
                pieceListItem = {
                    value: pieceListItem
                };
            }
            var item = {
                text: '',
                index: index
            };
            if (pieceListItem.label != null) {
                item.text = pieceListItem.label;
            }
            if (pieceListItem.hasOwnProperty('value')) {
                var value = item.value = pieceListItem.value;
                item.interval = [
                    value,
                    value
                ];
                item.close = [
                    1,
                    1
                ];
            } else {
                // `min` `max` is legacy option.
                // `lt` `gt` `lte` `gte` is recommended.
                var interval = item.interval = [];
                var close_1 = item.close = [
                    0,
                    0
                ];
                var closeList = [
                    1,
                    0,
                    1
                ];
                var infinityList = [
                    -Infinity,
                    Infinity
                ];
                var useMinMax = [];
                for(var lg = 0; lg < 2; lg++){
                    var names = [
                        [
                            'gte',
                            'gt',
                            'min'
                        ],
                        [
                            'lte',
                            'lt',
                            'max'
                        ]
                    ][lg];
                    for(var i = 0; i < 3 && interval[lg] == null; i++){
                        interval[lg] = pieceListItem[names[i]];
                        close_1[lg] = closeList[i];
                        useMinMax[lg] = i === 2;
                    }
                    interval[lg] == null && (interval[lg] = infinityList[lg]);
                }
                useMinMax[0] && interval[1] === Infinity && (close_1[0] = 0);
                useMinMax[1] && interval[0] === -Infinity && (close_1[1] = 0);
                if ("TURBOPACK compile-time truthy", 1) {
                    if (interval[0] > interval[1]) {
                        console.warn('Piece ' + index + 'is illegal: ' + interval + ' lower bound should not greater then uppper bound.');
                    }
                }
                if (interval[0] === interval[1] && close_1[0] && close_1[1]) {
                    // Consider: [{min: 5, max: 5, visual: {...}}, {min: 0, max: 5}],
                    // we use value to lift the priority when min === max
                    item.value = interval[0];
                }
            }
            item.visual = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$VisualMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].retrieveVisuals(pieceListItem);
            outPieceList.push(item);
        }, this);
        // See "Order Rule".
        normalizeReverse(thisOption, outPieceList);
        // Only pieces
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reformIntervals"])(outPieceList);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"](outPieceList, function(piece) {
            var close = piece.close;
            var edgeSymbols = [
                [
                    '<',
                    '≤'
                ][close[1]],
                [
                    '>',
                    '≥'
                ][close[0]]
            ];
            piece.text = piece.text || this.formatValueText(piece.value != null ? piece.value : piece.interval, false, edgeSymbols);
        }, this);
    }
};
function normalizeReverse(thisOption, pieceList) {
    var inverse = thisOption.inverse;
    if (thisOption.orient === 'vertical' ? !inverse : inverse) {
        pieceList.reverse();
    }
}
const __TURBOPACK__default__export__ = PiecewiseModel;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/visualMap/PiecewiseView.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$visualMap$2f$VisualMapView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/visualMap/VisualMapView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Group.js [app-client] (ecmascript) <export default as Group>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Text$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Text.js [app-client] (ecmascript) <export default as Text>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$symbol$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/symbol.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/layout.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$visualMap$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/visualMap/helper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/label/labelStyle.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
var PiecewiseVisualMapView = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(PiecewiseVisualMapView, _super);
    function PiecewiseVisualMapView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = PiecewiseVisualMapView.type;
        return _this;
    }
    PiecewiseVisualMapView.prototype.doRender = function() {
        var thisGroup = this.group;
        thisGroup.removeAll();
        var visualMapModel = this.visualMapModel;
        var textGap = visualMapModel.get('textGap');
        var textStyleModel = visualMapModel.textStyleModel;
        var itemAlign = this._getItemAlign();
        var itemSize = visualMapModel.itemSize;
        var viewData = this._getViewData();
        var endsText = viewData.endsText;
        var showLabel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["retrieve"](visualMapModel.get('showLabel', true), !endsText);
        var silent = !visualMapModel.get('selectedMode');
        endsText && this._renderEndsText(thisGroup, endsText[0], itemSize, showLabel, itemAlign);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"](viewData.viewPieceList, function(item) {
            var piece = item.piece;
            var itemGroup = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__["Group"]();
            itemGroup.onclick = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bind"](this._onItemClick, this, piece);
            this._enableHoverLink(itemGroup, item.indexInModelPieceList);
            // TODO Category
            var representValue = visualMapModel.getRepresentValue(piece);
            this._createItemSymbol(itemGroup, representValue, [
                0,
                0,
                itemSize[0],
                itemSize[1]
            ], silent);
            if (showLabel) {
                var visualState = this.visualMapModel.getValueState(representValue);
                var align = textStyleModel.get('align') || itemAlign;
                itemGroup.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Text$3e$__["Text"]({
                    style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createTextStyle"])(textStyleModel, {
                        x: align === 'right' ? -textGap : itemSize[0] + textGap,
                        y: itemSize[1] / 2,
                        text: piece.text,
                        verticalAlign: textStyleModel.get('verticalAlign') || 'middle',
                        align: align,
                        opacity: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["retrieve2"](textStyleModel.get('opacity'), visualState === 'outOfRange' ? 0.5 : 1)
                    }),
                    silent: silent
                }));
            }
            thisGroup.add(itemGroup);
        }, this);
        endsText && this._renderEndsText(thisGroup, endsText[1], itemSize, showLabel, itemAlign);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["box"](visualMapModel.get('orient'), thisGroup, visualMapModel.get('itemGap'));
        this.renderBackground(thisGroup);
        this.positionGroup(thisGroup);
    };
    PiecewiseVisualMapView.prototype._enableHoverLink = function(itemGroup, pieceIndex) {
        var _this = this;
        itemGroup.on('mouseover', function() {
            return onHoverLink('highlight');
        }).on('mouseout', function() {
            return onHoverLink('downplay');
        });
        var onHoverLink = function(method) {
            var visualMapModel = _this.visualMapModel;
            // TODO: TYPE More detailed action types
            visualMapModel.option.hoverLink && _this.api.dispatchAction({
                type: method,
                batch: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$visualMap$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeHighDownBatch"](visualMapModel.findTargetDataIndices(pieceIndex), visualMapModel)
            });
        };
    };
    PiecewiseVisualMapView.prototype._getItemAlign = function() {
        var visualMapModel = this.visualMapModel;
        var modelOption = visualMapModel.option;
        if (modelOption.orient === 'vertical') {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$visualMap$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getItemAlign"](visualMapModel, this.api, visualMapModel.itemSize);
        } else {
            // horizontal, most case left unless specifying right.
            var align = modelOption.align;
            if (!align || align === 'auto') {
                align = 'left';
            }
            return align;
        }
    };
    PiecewiseVisualMapView.prototype._renderEndsText = function(group, text, itemSize, showLabel, itemAlign) {
        if (!text) {
            return;
        }
        var itemGroup = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__["Group"]();
        var textStyleModel = this.visualMapModel.textStyleModel;
        itemGroup.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Text$3e$__["Text"]({
            style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createTextStyle"])(textStyleModel, {
                x: showLabel ? itemAlign === 'right' ? itemSize[0] : 0 : itemSize[0] / 2,
                y: itemSize[1] / 2,
                verticalAlign: 'middle',
                align: showLabel ? itemAlign : 'center',
                text: text
            })
        }));
        group.add(itemGroup);
    };
    /**
   * @private
   * @return {Object} {peiceList, endsText} The order is the same as screen pixel order.
   */ PiecewiseVisualMapView.prototype._getViewData = function() {
        var visualMapModel = this.visualMapModel;
        var viewPieceList = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"](visualMapModel.getPieceList(), function(piece, index) {
            return {
                piece: piece,
                indexInModelPieceList: index
            };
        });
        var endsText = visualMapModel.get('text');
        // Consider orient and inverse.
        var orient = visualMapModel.get('orient');
        var inverse = visualMapModel.get('inverse');
        // Order of model pieceList is always [low, ..., high]
        if (orient === 'horizontal' ? inverse : !inverse) {
            viewPieceList.reverse();
        } else if (endsText) {
            endsText = endsText.slice().reverse();
        }
        return {
            viewPieceList: viewPieceList,
            endsText: endsText
        };
    };
    PiecewiseVisualMapView.prototype._createItemSymbol = function(group, representValue, shapeParam, silent) {
        var itemSymbol = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$symbol$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSymbol"])(// symbol will be string
        this.getControllerVisual(representValue, 'symbol'), shapeParam[0], shapeParam[1], shapeParam[2], shapeParam[3], // color will be string
        this.getControllerVisual(representValue, 'color'));
        itemSymbol.silent = silent;
        group.add(itemSymbol);
    };
    PiecewiseVisualMapView.prototype._onItemClick = function(piece) {
        var visualMapModel = this.visualMapModel;
        var option = visualMapModel.option;
        var selectedMode = option.selectedMode;
        if (!selectedMode) {
            return;
        }
        var selected = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clone"](option.selected);
        var newKey = visualMapModel.getSelectedMapKey(piece);
        if (selectedMode === 'single' || selectedMode === true) {
            selected[newKey] = true;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"](selected, function(o, key) {
                selected[key] = key === newKey;
            });
        } else {
            selected[newKey] = !selected[newKey];
        }
        this.api.dispatchAction({
            type: 'selectDataRange',
            from: this.uid,
            visualMapId: this.visualMapModel.id,
            selected: selected
        });
    };
    PiecewiseVisualMapView.type = 'visualMap.piecewise';
    return PiecewiseVisualMapView;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$visualMap$2f$VisualMapView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = PiecewiseVisualMapView;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/visualMap/installVisualMapPiecewise.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$visualMap$2f$PiecewiseModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/visualMap/PiecewiseModel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$visualMap$2f$PiecewiseView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/visualMap/PiecewiseView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$visualMap$2f$installCommon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/visualMap/installCommon.js [app-client] (ecmascript)");
;
;
;
function install(registers) {
    registers.registerComponentModel(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$visualMap$2f$PiecewiseModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    registers.registerComponentView(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$visualMap$2f$PiecewiseView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$visualMap$2f$installCommon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(registers);
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/visualMap/install.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/extension.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$visualMap$2f$installVisualMapContinuous$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/visualMap/installVisualMapContinuous.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$visualMap$2f$installVisualMapPiecewise$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/visualMap/installVisualMapPiecewise.js [app-client] (ecmascript)");
;
;
;
function install(registers) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$visualMap$2f$installVisualMapContinuous$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["install"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$visualMap$2f$installVisualMapPiecewise$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["install"]);
// Do not install './dataZoomSelect',
// since it only work for toolbox dataZoom.
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/visualMap/install.js [app-client] (ecmascript) <export install as VisualMapComponent>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VisualMapComponent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$visualMap$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["install"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$visualMap$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/visualMap/install.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/visualMap/installVisualMapContinuous.js [app-client] (ecmascript) <export install as VisualMapContinuousComponent>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VisualMapContinuousComponent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$visualMap$2f$installVisualMapContinuous$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["install"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$visualMap$2f$installVisualMapContinuous$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/visualMap/installVisualMapContinuous.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/visualMap/installVisualMapPiecewise.js [app-client] (ecmascript) <export install as VisualMapPiecewiseComponent>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VisualMapPiecewiseComponent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$visualMap$2f$installVisualMapPiecewise$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["install"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$visualMap$2f$installVisualMapPiecewise$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/visualMap/installVisualMapPiecewise.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=6e80b_echarts_lib_component_visualMap_6831e4a2._.js.map