module.exports = [
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/legend/LegendModel.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/Model.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/Component.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/tokens.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
var getDefaultSelectorOptions = function(ecModel, type) {
    if (type === 'all') {
        return {
            type: 'all',
            title: ecModel.getLocaleModel().get([
                'legend',
                'selector',
                'all'
            ])
        };
    } else if (type === 'inverse') {
        return {
            type: 'inverse',
            title: ecModel.getLocaleModel().get([
                'legend',
                'selector',
                'inverse'
            ])
        };
    }
};
var LegendModel = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(LegendModel, _super);
    function LegendModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = LegendModel.type;
        _this.layoutMode = {
            type: 'box',
            // legend.width/height are maxWidth/maxHeight actually,
            // whereas real width/height is calculated by its content.
            // (Setting {left: 10, right: 10} does not make sense).
            // So consider the case:
            // `setOption({legend: {left: 10});`
            // then `setOption({legend: {right: 10});`
            // The previous `left` should be cleared by setting `ignoreSize`.
            ignoreSize: true
        };
        return _this;
    }
    LegendModel.prototype.init = function(option, parentModel, ecModel) {
        this.mergeDefaultAndTheme(option, ecModel);
        option.selected = option.selected || {};
        this._updateSelector(option);
    };
    LegendModel.prototype.mergeOption = function(option, ecModel) {
        _super.prototype.mergeOption.call(this, option, ecModel);
        this._updateSelector(option);
    };
    LegendModel.prototype._updateSelector = function(option) {
        var selector = option.selector;
        var ecModel = this.ecModel;
        if (selector === true) {
            selector = option.selector = [
                'all',
                'inverse'
            ];
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isArray"](selector)) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"](selector, function(item, index) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"](item) && (item = {
                    type: item
                });
                selector[index] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["merge"](item, getDefaultSelectorOptions(ecModel, item.type));
            });
        }
    };
    LegendModel.prototype.optionUpdated = function() {
        this._updateData(this.ecModel);
        var legendData = this._data;
        // If selectedMode is single, try to select one
        if (legendData[0] && this.get('selectedMode') === 'single') {
            var hasSelected = false;
            // If has any selected in option.selected
            for(var i = 0; i < legendData.length; i++){
                var name_1 = legendData[i].get('name');
                if (this.isSelected(name_1)) {
                    // Force to unselect others
                    this.select(name_1);
                    hasSelected = true;
                    break;
                }
            }
            // Try select the first if selectedMode is single
            !hasSelected && this.select(legendData[0].get('name'));
        }
    };
    LegendModel.prototype._updateData = function(ecModel) {
        var potentialData = [];
        var availableNames = [];
        ecModel.eachRawSeries(function(seriesModel) {
            var seriesName = seriesModel.name;
            availableNames.push(seriesName);
            var isPotential;
            if (seriesModel.legendVisualProvider) {
                var provider = seriesModel.legendVisualProvider;
                var names = provider.getAllNames();
                if (!ecModel.isSeriesFiltered(seriesModel)) {
                    availableNames = availableNames.concat(names);
                }
                if (names.length) {
                    potentialData = potentialData.concat(names);
                } else {
                    isPotential = true;
                }
            } else {
                isPotential = true;
            }
            if (isPotential && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNameSpecified"])(seriesModel)) {
                potentialData.push(seriesModel.name);
            }
        });
        /**
     * @type {Array.<string>}
     * @private
     */ this._availableNames = availableNames;
        // If legend.data is not specified in option, use availableNames as data,
        // which is convenient for user preparing option.
        var rawData = this.get('data') || potentialData;
        var legendNameMap = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createHashMap"]();
        var legendData = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["map"](rawData, function(dataItem) {
            // Can be string or number
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"](dataItem) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNumber"](dataItem)) {
                dataItem = {
                    name: dataItem
                };
            }
            if (legendNameMap.get(dataItem.name)) {
                // remove legend name duplicate
                return null;
            }
            legendNameMap.set(dataItem.name, true);
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](dataItem, this, this.ecModel);
        }, this);
        /**
     * @type {Array.<module:echarts/model/Model>}
     * @private
     */ this._data = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filter"](legendData, function(item) {
            return !!item;
        });
    };
    LegendModel.prototype.getData = function() {
        return this._data;
    };
    LegendModel.prototype.select = function(name) {
        var selected = this.option.selected;
        var selectedMode = this.get('selectedMode');
        if (selectedMode === 'single') {
            var data = this._data;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"](data, function(dataItem) {
                selected[dataItem.get('name')] = false;
            });
        }
        selected[name] = true;
    };
    LegendModel.prototype.unSelect = function(name) {
        if (this.get('selectedMode') !== 'single') {
            this.option.selected[name] = false;
        }
    };
    LegendModel.prototype.toggleSelected = function(name) {
        var selected = this.option.selected;
        // Default is true
        if (!selected.hasOwnProperty(name)) {
            selected[name] = true;
        }
        this[selected[name] ? 'unSelect' : 'select'](name);
    };
    LegendModel.prototype.allSelect = function() {
        var data = this._data;
        var selected = this.option.selected;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"](data, function(dataItem) {
            selected[dataItem.get('name', true)] = true;
        });
    };
    LegendModel.prototype.inverseSelect = function() {
        var data = this._data;
        var selected = this.option.selected;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"](data, function(dataItem) {
            var name = dataItem.get('name', true);
            // Initially, default value is true
            if (!selected.hasOwnProperty(name)) {
                selected[name] = true;
            }
            selected[name] = !selected[name];
        });
    };
    LegendModel.prototype.isSelected = function(name) {
        var selected = this.option.selected;
        return !(selected.hasOwnProperty(name) && !selected[name]) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["indexOf"](this._availableNames, name) >= 0;
    };
    LegendModel.prototype.getOrient = function() {
        return this.get('orient') === 'vertical' ? {
            index: 1,
            name: 'vertical'
        } : {
            index: 0,
            name: 'horizontal'
        };
    };
    LegendModel.type = 'legend.plain';
    LegendModel.dependencies = [
        'series'
    ];
    LegendModel.defaultOption = {
        // zlevel: 0,
        z: 4,
        show: true,
        orient: 'horizontal',
        left: 'center',
        // right: 'center',
        // top: 0,
        bottom: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].size.m,
        align: 'auto',
        backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].color.transparent,
        borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].color.border,
        borderRadius: 0,
        borderWidth: 0,
        padding: 5,
        itemGap: 8,
        itemWidth: 25,
        itemHeight: 14,
        symbolRotate: 'inherit',
        symbolKeepAspect: true,
        inactiveColor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].color.disabled,
        inactiveBorderColor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].color.disabled,
        inactiveBorderWidth: 'auto',
        itemStyle: {
            color: 'inherit',
            opacity: 'inherit',
            borderColor: 'inherit',
            borderWidth: 'auto',
            borderCap: 'inherit',
            borderJoin: 'inherit',
            borderDashOffset: 'inherit',
            borderMiterLimit: 'inherit'
        },
        lineStyle: {
            width: 'auto',
            color: 'inherit',
            inactiveColor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].color.disabled,
            inactiveWidth: 2,
            opacity: 'inherit',
            type: 'inherit',
            cap: 'inherit',
            join: 'inherit',
            dashOffset: 'inherit',
            miterLimit: 'inherit'
        },
        textStyle: {
            color: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].color.secondary
        },
        selectedMode: true,
        selector: false,
        selectorLabel: {
            show: true,
            borderRadius: 10,
            padding: [
                3,
                5,
                3,
                5
            ],
            fontSize: 12,
            fontFamily: 'sans-serif',
            color: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].color.tertiary,
            borderWidth: 1,
            borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].color.border
        },
        emphasis: {
            selectorLabel: {
                show: true,
                color: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].color.quaternary
            }
        },
        selectorPosition: 'auto',
        selectorItemGap: 7,
        selectorButtonGap: 10,
        tooltip: {
            show: false
        },
        triggerEvent: false
    };
    return LegendModel;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = LegendModel;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/legend/LegendView.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$tool$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/tool/color.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Group.js [app-ssr] (ecmascript) <export default as Group>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Text$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Text.js [app-ssr] (ecmascript) <export default as Text>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Rect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Rect$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Rect.js [app-ssr] (ecmascript) <export default as Rect>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/graphic.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/states.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/label/labelStyle.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$listComponent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/helper/listComponent.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/layout.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/view/Component.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$symbol$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/symbol.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$decal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/decal.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/innerStore.js [app-ssr] (ecmascript)");
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
var curry = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["curry"];
var each = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"];
var Group = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__["Group"];
var LegendView = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(LegendView, _super);
    function LegendView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = LegendView.type;
        _this.newlineDisabled = false;
        return _this;
    }
    LegendView.prototype.init = function() {
        this.group.add(this._contentGroup = new Group());
        this.group.add(this._selectorGroup = new Group());
        this._isFirstRender = true;
    };
    /**
   * @protected
   */ LegendView.prototype.getContentGroup = function() {
        return this._contentGroup;
    };
    /**
   * @protected
   */ LegendView.prototype.getSelectorGroup = function() {
        return this._selectorGroup;
    };
    /**
   * @override
   */ LegendView.prototype.render = function(legendModel, ecModel, api) {
        var isFirstRender = this._isFirstRender;
        this._isFirstRender = false;
        this.resetInner();
        if (!legendModel.get('show', true)) {
            return;
        }
        var itemAlign = legendModel.get('align');
        var orient = legendModel.get('orient');
        if (!itemAlign || itemAlign === 'auto') {
            itemAlign = legendModel.get('left') === 'right' && orient === 'vertical' ? 'right' : 'left';
        }
        // selector has been normalized to an array in model
        var selector = legendModel.get('selector', true);
        var selectorPosition = legendModel.get('selectorPosition', true);
        if (selector && (!selectorPosition || selectorPosition === 'auto')) {
            selectorPosition = orient === 'horizontal' ? 'end' : 'start';
        }
        this.renderInner(itemAlign, legendModel, ecModel, api, selector, orient, selectorPosition);
        // Perform layout.
        var refContainer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createBoxLayoutReference"](legendModel, api).refContainer;
        var positionInfo = legendModel.getBoxLayoutParams();
        var padding = legendModel.get('padding');
        var maxSize = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLayoutRect"](positionInfo, refContainer, padding);
        var mainRect = this.layoutInner(legendModel, itemAlign, maxSize, isFirstRender, selector, selectorPosition);
        // Place mainGroup, based on the calculated `mainRect`.
        var layoutRect = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLayoutRect"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaults"]({
            width: mainRect.width,
            height: mainRect.height
        }, positionInfo), refContainer, padding);
        this.group.x = layoutRect.x - mainRect.x;
        this.group.y = layoutRect.y - mainRect.y;
        this.group.markRedraw();
        // Render background after group is layout.
        this.group.add(this._backgroundEl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$listComponent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeBackground"])(mainRect, // FXIME: most itemStyle options does not work in background because inherit is not handled yet.
        legendModel));
    };
    LegendView.prototype.resetInner = function() {
        this.getContentGroup().removeAll();
        this._backgroundEl && this.group.remove(this._backgroundEl);
        this.getSelectorGroup().removeAll();
    };
    LegendView.prototype.renderInner = function(itemAlign, legendModel, ecModel, api, selector, orient, selectorPosition) {
        var contentGroup = this.getContentGroup();
        var legendDrawnMap = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createHashMap"]();
        var selectMode = legendModel.get('selectedMode');
        var triggerEvent = legendModel.get('triggerEvent');
        var excludeSeriesId = [];
        ecModel.eachRawSeries(function(seriesModel) {
            !seriesModel.get('legendHoverLink') && excludeSeriesId.push(seriesModel.id);
        });
        each(legendModel.getData(), function(legendItemModel, dataIndex) {
            var _this = this;
            var name = legendItemModel.get('name');
            // Use empty string or \n as a newline string
            if (!this.newlineDisabled && (name === '' || name === '\n')) {
                var g = new Group();
                // @ts-ignore
                g.newline = true;
                contentGroup.add(g);
                return;
            }
            // Representitive series.
            var seriesModel = ecModel.getSeriesByName(name)[0];
            if (legendDrawnMap.get(name)) {
                // Have been drawn
                return;
            }
            // Legend to control series.
            if (seriesModel) {
                var data = seriesModel.getData();
                var lineVisualStyle = data.getVisual('legendLineStyle') || {};
                var legendIcon = data.getVisual('legendIcon');
                /**
         * `data.getVisual('style')` may be the color from the register
         * in series. For example, for line series,
         */ var style = data.getVisual('style');
                var itemGroup = this._createItem(seriesModel, name, dataIndex, legendItemModel, legendModel, itemAlign, lineVisualStyle, style, legendIcon, selectMode, api);
                itemGroup.on('click', curry(dispatchSelectAction, name, null, api, excludeSeriesId)).on('mouseover', curry(dispatchHighlightAction, seriesModel.name, null, api, excludeSeriesId)).on('mouseout', curry(dispatchDownplayAction, seriesModel.name, null, api, excludeSeriesId));
                if (ecModel.ssr) {
                    itemGroup.eachChild(function(child) {
                        var ecData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getECData"])(child);
                        ecData.seriesIndex = seriesModel.seriesIndex;
                        ecData.dataIndex = dataIndex;
                        ecData.ssrType = 'legend';
                    });
                }
                if (triggerEvent) {
                    itemGroup.eachChild(function(child) {
                        _this.packEventData(child, legendModel, seriesModel, dataIndex, name);
                    });
                }
                legendDrawnMap.set(name, true);
            } else {
                // Legend to control data. In pie and funnel.
                ecModel.eachRawSeries(function(seriesModel) {
                    var _this = this;
                    // In case multiple series has same data name
                    if (legendDrawnMap.get(name)) {
                        return;
                    }
                    if (seriesModel.legendVisualProvider) {
                        var provider = seriesModel.legendVisualProvider;
                        if (!provider.containName(name)) {
                            return;
                        }
                        var idx = provider.indexOfName(name);
                        var style = provider.getItemVisual(idx, 'style');
                        var legendIcon = provider.getItemVisual(idx, 'legendIcon');
                        var colorArr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$tool$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parse"])(style.fill);
                        // Color may be set to transparent in visualMap when data is out of range.
                        // Do not show nothing.
                        if (colorArr && colorArr[3] === 0) {
                            colorArr[3] = 0.2;
                            // TODO color is set to 0, 0, 0, 0. Should show correct RGBA
                            style = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extend"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extend"]({}, style), {
                                fill: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$tool$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringify"])(colorArr, 'rgba')
                            });
                        }
                        var itemGroup = this._createItem(seriesModel, name, dataIndex, legendItemModel, legendModel, itemAlign, {}, style, legendIcon, selectMode, api);
                        // FIXME: consider different series has items with the same name.
                        itemGroup.on('click', curry(dispatchSelectAction, null, name, api, excludeSeriesId))// Should not specify the series name, consider legend controls
                        // more than one pie series.
                        .on('mouseover', curry(dispatchHighlightAction, null, name, api, excludeSeriesId)).on('mouseout', curry(dispatchDownplayAction, null, name, api, excludeSeriesId));
                        if (ecModel.ssr) {
                            itemGroup.eachChild(function(child) {
                                var ecData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getECData"])(child);
                                ecData.seriesIndex = seriesModel.seriesIndex;
                                ecData.dataIndex = dataIndex;
                                ecData.ssrType = 'legend';
                            });
                        }
                        if (triggerEvent) {
                            itemGroup.eachChild(function(child) {
                                _this.packEventData(child, legendModel, seriesModel, dataIndex, name);
                            });
                        }
                        legendDrawnMap.set(name, true);
                    }
                }, this);
            }
            if ("TURBOPACK compile-time truthy", 1) {
                if (!legendDrawnMap.get(name)) {
                    console.warn(name + ' series not exists. Legend data should be same with series name or data name.');
                }
            }
        }, this);
        if (selector) {
            this._createSelector(selector, legendModel, api, orient, selectorPosition);
        }
    };
    LegendView.prototype.packEventData = function(el, legendModel, seriesModel, dataIndex, name) {
        var eventData = {
            componentType: 'legend',
            componentIndex: legendModel.componentIndex,
            dataIndex: dataIndex,
            value: name,
            seriesIndex: seriesModel.seriesIndex
        };
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getECData"])(el).eventData = eventData;
    };
    ;
    LegendView.prototype._createSelector = function(selector, legendModel, api, orient, selectorPosition) {
        var selectorGroup = this.getSelectorGroup();
        each(selector, function createSelectorButton(selectorItem) {
            var type = selectorItem.type;
            var labelText = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Text$3e$__["Text"]({
                style: {
                    x: 0,
                    y: 0,
                    align: 'center',
                    verticalAlign: 'middle'
                },
                onclick: function() {
                    api.dispatchAction({
                        type: type === 'all' ? 'legendAllSelect' : 'legendInverseSelect',
                        legendId: legendModel.id
                    });
                }
            });
            selectorGroup.add(labelText);
            var labelModel = legendModel.getModel('selectorLabel');
            var emphasisLabelModel = legendModel.getModel([
                'emphasis',
                'selectorLabel'
            ]);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setLabelStyle"])(labelText, {
                normal: labelModel,
                emphasis: emphasisLabelModel
            }, {
                defaultText: selectorItem.title
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["enableHoverEmphasis"])(labelText);
        });
    };
    LegendView.prototype._createItem = function(seriesModel, name, dataIndex, legendItemModel, legendModel, itemAlign, lineVisualStyle, itemVisualStyle, legendIcon, selectMode, api) {
        var drawType = seriesModel.visualDrawType;
        var itemWidth = legendModel.get('itemWidth');
        var itemHeight = legendModel.get('itemHeight');
        var isSelected = legendModel.isSelected(name);
        var iconRotate = legendItemModel.get('symbolRotate');
        var symbolKeepAspect = legendItemModel.get('symbolKeepAspect');
        var legendIconType = legendItemModel.get('icon');
        legendIcon = legendIconType || legendIcon || 'roundRect';
        var style = getLegendStyle(legendIcon, legendItemModel, lineVisualStyle, itemVisualStyle, drawType, isSelected, api);
        var itemGroup = new Group();
        var textStyleModel = legendItemModel.getModel('textStyle');
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFunction"](seriesModel.getLegendIcon) && (!legendIconType || legendIconType === 'inherit')) {
            // Series has specific way to define legend icon
            itemGroup.add(seriesModel.getLegendIcon({
                itemWidth: itemWidth,
                itemHeight: itemHeight,
                icon: legendIcon,
                iconRotate: iconRotate,
                itemStyle: style.itemStyle,
                lineStyle: style.lineStyle,
                symbolKeepAspect: symbolKeepAspect
            }));
        } else {
            // Use default legend icon policy for most series
            var rotate = legendIconType === 'inherit' && seriesModel.getData().getVisual('symbol') ? iconRotate === 'inherit' ? seriesModel.getData().getVisual('symbolRotate') : iconRotate : 0; // No rotation for no icon
            itemGroup.add(getDefaultLegendIcon({
                itemWidth: itemWidth,
                itemHeight: itemHeight,
                icon: legendIcon,
                iconRotate: rotate,
                itemStyle: style.itemStyle,
                lineStyle: style.lineStyle,
                symbolKeepAspect: symbolKeepAspect
            }));
        }
        var textX = itemAlign === 'left' ? itemWidth + 5 : -5;
        var textAlign = itemAlign;
        var formatter = legendModel.get('formatter');
        var content = name;
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"](formatter) && formatter) {
            content = formatter.replace('{name}', name != null ? name : '');
        } else if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFunction"](formatter)) {
            content = formatter(name);
        }
        var textColor = isSelected ? textStyleModel.getTextColor() : legendItemModel.get('inactiveColor');
        itemGroup.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Text$3e$__["Text"]({
            style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createTextStyle"])(textStyleModel, {
                text: content,
                x: textX,
                y: itemHeight / 2,
                fill: textColor,
                align: textAlign,
                verticalAlign: 'middle'
            }, {
                inheritColor: textColor
            })
        }));
        // Add a invisible rect to increase the area of mouse hover
        var hitRect = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Rect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Rect$3e$__["Rect"]({
            shape: itemGroup.getBoundingRect(),
            style: {
                // Cannot use 'invisible' because SVG SSR will miss the node
                fill: 'transparent'
            }
        });
        var tooltipModel = legendItemModel.getModel('tooltip');
        if (tooltipModel.get('show')) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["setTooltipConfig"]({
                el: hitRect,
                componentModel: legendModel,
                itemName: name,
                itemTooltipOption: tooltipModel.option
            });
        }
        itemGroup.add(hitRect);
        itemGroup.eachChild(function(child) {
            child.silent = true;
        });
        hitRect.silent = !selectMode;
        this.getContentGroup().add(itemGroup);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["enableHoverEmphasis"])(itemGroup);
        // @ts-ignore
        itemGroup.__legendDataIndex = dataIndex;
        return itemGroup;
    };
    LegendView.prototype.layoutInner = function(legendModel, itemAlign, maxSize, isFirstRender, selector, selectorPosition) {
        var contentGroup = this.getContentGroup();
        var selectorGroup = this.getSelectorGroup();
        // Place items in contentGroup.
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["box"](legendModel.get('orient'), contentGroup, legendModel.get('itemGap'), maxSize.width, maxSize.height);
        var contentRect = contentGroup.getBoundingRect();
        var contentPos = [
            -contentRect.x,
            -contentRect.y
        ];
        selectorGroup.markRedraw();
        contentGroup.markRedraw();
        if (selector) {
            // Place buttons in selectorGroup
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["box"](// Buttons in selectorGroup always layout horizontally
            'horizontal', selectorGroup, legendModel.get('selectorItemGap', true));
            var selectorRect = selectorGroup.getBoundingRect();
            var selectorPos = [
                -selectorRect.x,
                -selectorRect.y
            ];
            var selectorButtonGap = legendModel.get('selectorButtonGap', true);
            var orientIdx = legendModel.getOrient().index;
            var wh = orientIdx === 0 ? 'width' : 'height';
            var hw = orientIdx === 0 ? 'height' : 'width';
            var yx = orientIdx === 0 ? 'y' : 'x';
            if (selectorPosition === 'end') {
                selectorPos[orientIdx] += contentRect[wh] + selectorButtonGap;
            } else {
                contentPos[orientIdx] += selectorRect[wh] + selectorButtonGap;
            }
            // Always align selector to content as 'middle'
            selectorPos[1 - orientIdx] += contentRect[hw] / 2 - selectorRect[hw] / 2;
            selectorGroup.x = selectorPos[0];
            selectorGroup.y = selectorPos[1];
            contentGroup.x = contentPos[0];
            contentGroup.y = contentPos[1];
            var mainRect = {
                x: 0,
                y: 0
            };
            mainRect[wh] = contentRect[wh] + selectorButtonGap + selectorRect[wh];
            mainRect[hw] = Math.max(contentRect[hw], selectorRect[hw]);
            mainRect[yx] = Math.min(0, selectorRect[yx] + selectorPos[1 - orientIdx]);
            return mainRect;
        } else {
            contentGroup.x = contentPos[0];
            contentGroup.y = contentPos[1];
            return this.group.getBoundingRect();
        }
    };
    /**
   * @protected
   */ LegendView.prototype.remove = function() {
        this.getContentGroup().removeAll();
        this._isFirstRender = true;
    };
    LegendView.type = 'legend.plain';
    return LegendView;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
function getLegendStyle(iconType, legendItemModel, lineVisualStyle, itemVisualStyle, drawType, isSelected, api) {
    /**
   * Use series style if is inherit;
   * elsewise, use legend style
   */ function handleCommonProps(style, visualStyle) {
        // If lineStyle.width is 'auto', it is set to be 2 if series has border
        if (style.lineWidth === 'auto') {
            style.lineWidth = visualStyle.lineWidth > 0 ? 2 : 0;
        }
        each(style, function(propVal, propName) {
            style[propName] === 'inherit' && (style[propName] = visualStyle[propName]);
        });
    }
    // itemStyle
    var itemStyleModel = legendItemModel.getModel('itemStyle');
    var itemStyle = itemStyleModel.getItemStyle();
    var iconBrushType = iconType.lastIndexOf('empty', 0) === 0 ? 'fill' : 'stroke';
    var decalStyle = itemStyleModel.getShallow('decal');
    itemStyle.decal = !decalStyle || decalStyle === 'inherit' ? itemVisualStyle.decal : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$decal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createOrUpdatePatternFromDecal"])(decalStyle, api);
    if (itemStyle.fill === 'inherit') {
        /**
     * Series with visualDrawType as 'stroke' should have
     * series stroke as legend fill
     */ itemStyle.fill = itemVisualStyle[drawType];
    }
    if (itemStyle.stroke === 'inherit') {
        /**
     * icon type with "emptyXXX" should use fill color
     * in visual style
     */ itemStyle.stroke = itemVisualStyle[iconBrushType];
    }
    if (itemStyle.opacity === 'inherit') {
        /**
     * Use lineStyle.opacity if drawType is stroke
     */ itemStyle.opacity = (drawType === 'fill' ? itemVisualStyle : lineVisualStyle).opacity;
    }
    handleCommonProps(itemStyle, itemVisualStyle);
    // lineStyle
    var legendLineModel = legendItemModel.getModel('lineStyle');
    var lineStyle = legendLineModel.getLineStyle();
    handleCommonProps(lineStyle, lineVisualStyle);
    // Fix auto color to real color
    itemStyle.fill === 'auto' && (itemStyle.fill = itemVisualStyle.fill);
    itemStyle.stroke === 'auto' && (itemStyle.stroke = itemVisualStyle.fill);
    lineStyle.stroke === 'auto' && (lineStyle.stroke = itemVisualStyle.fill);
    if (!isSelected) {
        var borderWidth = legendItemModel.get('inactiveBorderWidth');
        /**
     * Since stroke is set to be inactiveBorderColor, it may occur that
     * there is no border in series but border in legend, so we need to
     * use border only when series has border if is set to be auto
     */ var visualHasBorder = itemStyle[iconBrushType];
        itemStyle.lineWidth = borderWidth === 'auto' ? itemVisualStyle.lineWidth > 0 && visualHasBorder ? 2 : 0 : itemStyle.lineWidth;
        itemStyle.fill = legendItemModel.get('inactiveColor');
        itemStyle.stroke = legendItemModel.get('inactiveBorderColor');
        lineStyle.stroke = legendLineModel.get('inactiveColor');
        lineStyle.lineWidth = legendLineModel.get('inactiveWidth');
    }
    return {
        itemStyle: itemStyle,
        lineStyle: lineStyle
    };
}
function getDefaultLegendIcon(opt) {
    var symboType = opt.icon || 'roundRect';
    var icon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$symbol$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSymbol"])(symboType, 0, 0, opt.itemWidth, opt.itemHeight, opt.itemStyle.fill, opt.symbolKeepAspect);
    icon.setStyle(opt.itemStyle);
    icon.rotation = (opt.iconRotate || 0) * Math.PI / 180;
    icon.setOrigin([
        opt.itemWidth / 2,
        opt.itemHeight / 2
    ]);
    if (symboType.indexOf('empty') > -1) {
        icon.style.stroke = icon.style.fill;
        icon.style.fill = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].color.neutral00;
        icon.style.lineWidth = 2;
    }
    return icon;
}
function dispatchSelectAction(seriesName, dataName, api, excludeSeriesId) {
    // downplay before unselect
    dispatchDownplayAction(seriesName, dataName, api, excludeSeriesId);
    api.dispatchAction({
        type: 'legendToggleSelect',
        name: seriesName != null ? seriesName : dataName
    });
    // highlight after select
    // TODO highlight immediately may cause animation loss.
    dispatchHighlightAction(seriesName, dataName, api, excludeSeriesId);
}
function isUseHoverLayer(api) {
    var list = api.getZr().storage.getDisplayList();
    var emphasisState;
    var i = 0;
    var len = list.length;
    while(i < len && !(emphasisState = list[i].states.emphasis)){
        i++;
    }
    return emphasisState && emphasisState.hoverLayer;
}
function dispatchHighlightAction(seriesName, dataName, api, excludeSeriesId) {
    // If element hover will move to a hoverLayer.
    if (!isUseHoverLayer(api)) {
        api.dispatchAction({
            type: 'highlight',
            seriesName: seriesName,
            name: dataName,
            excludeSeriesId: excludeSeriesId
        });
    }
}
function dispatchDownplayAction(seriesName, dataName, api, excludeSeriesId) {
    // If element hover will move to a hoverLayer.
    if (!isUseHoverLayer(api)) {
        api.dispatchAction({
            type: 'downplay',
            seriesName: seriesName,
            name: dataName,
            excludeSeriesId: excludeSeriesId
        });
    }
}
const __TURBOPACK__default__export__ = LegendView;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/legend/legendFilter.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    ()=>legendFilter
]);
function legendFilter(ecModel) {
    var legendModels = ecModel.findComponents({
        mainType: 'legend'
    });
    if (legendModels && legendModels.length) {
        ecModel.filterSeries(function(series) {
            // If in any legend component the status is not selected.
            // Because in legend series is assumed selected when it is not in the legend data.
            for(var i = 0; i < legendModels.length; i++){
                if (!legendModels[i].isSelected(series.name)) {
                    return false;
                }
            }
            return true;
        });
    }
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/legend/legendAction.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    "installLegendAction",
    ()=>installLegendAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
;
function legendSelectActionHandler(methodName, payload, ecModel) {
    var isAllSelect = methodName === 'allSelect' || methodName === 'inverseSelect';
    var selectedMap = {};
    var actionLegendIndices = [];
    ecModel.eachComponent({
        mainType: 'legend',
        query: payload
    }, function(legendModel) {
        if (isAllSelect) {
            legendModel[methodName]();
        } else {
            legendModel[methodName](payload.name);
        }
        makeSelectedMap(legendModel, selectedMap);
        actionLegendIndices.push(legendModel.componentIndex);
    });
    var allSelectedMap = {};
    // make selectedMap from all legend components
    ecModel.eachComponent('legend', function(legendModel) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(selectedMap, function(isSelected, name) {
            // Force other legend has same selected status
            // Or the first is toggled to true and other are toggled to false
            // In the case one legend has some item unSelected in option. And if other legend
            // doesn't has the item, they will assume it is selected.
            legendModel[isSelected ? 'select' : 'unSelect'](name);
        });
        makeSelectedMap(legendModel, allSelectedMap);
    });
    // Return the event explicitly
    return isAllSelect ? {
        selected: allSelectedMap,
        // return legendIndex array to tell the developers which legends are allSelect / inverseSelect
        legendIndex: actionLegendIndices
    } : {
        name: payload.name,
        selected: allSelectedMap
    };
}
function makeSelectedMap(legendModel, out) {
    var selectedMap = out || {};
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(legendModel.getData(), function(model) {
        var name = model.get('name');
        // Wrap element
        if (name === '\n' || name === '') {
            return;
        }
        var isItemSelected = legendModel.isSelected(name);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasOwn"])(selectedMap, name)) {
            // Unselected if any legend is unselected
            selectedMap[name] = selectedMap[name] && isItemSelected;
        } else {
            selectedMap[name] = isItemSelected;
        }
    });
    return selectedMap;
}
function installLegendAction(registers) {
    /**
   * @event legendToggleSelect
   * @type {Object}
   * @property {string} type 'legendToggleSelect'
   * @property {string} [from]
   * @property {string} name Series name or data item name
   */ registers.registerAction('legendToggleSelect', 'legendselectchanged', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["curry"])(legendSelectActionHandler, 'toggleSelected'));
    registers.registerAction('legendAllSelect', 'legendselectall', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["curry"])(legendSelectActionHandler, 'allSelect'));
    registers.registerAction('legendInverseSelect', 'legendinverseselect', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["curry"])(legendSelectActionHandler, 'inverseSelect'));
    /**
   * @event legendSelect
   * @type {Object}
   * @property {string} type 'legendSelect'
   * @property {string} name Series name or data item name
   */ registers.registerAction('legendSelect', 'legendselected', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["curry"])(legendSelectActionHandler, 'select'));
    /**
   * @event legendUnSelect
   * @type {Object}
   * @property {string} type 'legendUnSelect'
   * @property {string} name Series name or data item name
   */ registers.registerAction('legendUnSelect', 'legendunselected', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["curry"])(legendSelectActionHandler, 'unSelect'));
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/legend/installLegendPlain.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$legend$2f$LegendModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/legend/LegendModel.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$legend$2f$LegendView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/legend/LegendView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$legend$2f$legendFilter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/legend/legendFilter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$legend$2f$legendAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/legend/legendAction.js [app-ssr] (ecmascript)");
;
;
;
;
function install(registers) {
    registers.registerComponentModel(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$legend$2f$LegendModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    registers.registerComponentView(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$legend$2f$LegendView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    registers.registerProcessor(registers.PRIORITY.PROCESSOR.SERIES_FILTER, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$legend$2f$legendFilter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    registers.registerSubTypeDefaulter('legend', function() {
        return 'plain';
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$legend$2f$legendAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["installLegendAction"])(registers);
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/legend/ScrollableLegendModel.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$legend$2f$LegendModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/legend/LegendModel.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/layout.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/component.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/tokens.js [app-ssr] (ecmascript)");
;
;
;
;
;
var ScrollableLegendModel = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(ScrollableLegendModel, _super);
    function ScrollableLegendModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = ScrollableLegendModel.type;
        return _this;
    }
    /**
   * @param {number} scrollDataIndex
   */ ScrollableLegendModel.prototype.setScrollDataIndex = function(scrollDataIndex) {
        this.option.scrollDataIndex = scrollDataIndex;
    };
    ScrollableLegendModel.prototype.init = function(option, parentModel, ecModel) {
        var inputPositionParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLayoutParams"])(option);
        _super.prototype.init.call(this, option, parentModel, ecModel);
        mergeAndNormalizeLayoutParams(this, option, inputPositionParams);
    };
    /**
   * @override
   */ ScrollableLegendModel.prototype.mergeOption = function(option, ecModel) {
        _super.prototype.mergeOption.call(this, option, ecModel);
        mergeAndNormalizeLayoutParams(this, this.option, option);
    };
    ScrollableLegendModel.type = 'legend.scroll';
    ScrollableLegendModel.defaultOption = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["inheritDefaultOption"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$legend$2f$LegendModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].defaultOption, {
        scrollDataIndex: 0,
        pageButtonItemGap: 5,
        pageButtonGap: null,
        pageButtonPosition: 'end',
        pageFormatter: '{current}/{total}',
        pageIcons: {
            horizontal: [
                'M0,0L12,-10L12,10z',
                'M0,0L-12,-10L-12,10z'
            ],
            vertical: [
                'M0,0L20,0L10,-20z',
                'M0,0L20,0L10,20z'
            ]
        },
        pageIconColor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].color.accent50,
        pageIconInactiveColor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].color.accent10,
        pageIconSize: 15,
        pageTextStyle: {
            color: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].color.tertiary
        },
        animationDurationUpdate: 800
    });
    return ScrollableLegendModel;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$legend$2f$LegendModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
;
// Do not `ignoreSize` to enable setting {left: 10, right: 10}.
function mergeAndNormalizeLayoutParams(legendModel, target, raw) {
    var orient = legendModel.getOrient();
    var ignoreSize = [
        1,
        1
    ];
    ignoreSize[orient.index] = 0;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeLayoutParam"])(target, raw, {
        type: 'box',
        ignoreSize: !!ignoreSize
    });
}
const __TURBOPACK__default__export__ = ScrollableLegendModel;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/legend/ScrollableLegendView.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
/**
 * Separate legend and scrollable legend to reduce package size.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Group.js [app-ssr] (ecmascript) <export default as Group>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Text$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Text.js [app-ssr] (ecmascript) <export default as Text>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/graphic.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Rect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Rect$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Rect.js [app-ssr] (ecmascript) <export default as Rect>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/animation/basicTransition.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/layout.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$legend$2f$LegendView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/legend/LegendView.js [app-ssr] (ecmascript)");
;
;
;
;
;
var Group = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__["Group"];
var WH = [
    'width',
    'height'
];
var XY = [
    'x',
    'y'
];
var ScrollableLegendView = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(ScrollableLegendView, _super);
    function ScrollableLegendView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = ScrollableLegendView.type;
        _this.newlineDisabled = true;
        _this._currentIndex = 0;
        return _this;
    }
    ScrollableLegendView.prototype.init = function() {
        _super.prototype.init.call(this);
        this.group.add(this._containerGroup = new Group());
        this._containerGroup.add(this.getContentGroup());
        this.group.add(this._controllerGroup = new Group());
    };
    /**
   * @override
   */ ScrollableLegendView.prototype.resetInner = function() {
        _super.prototype.resetInner.call(this);
        this._controllerGroup.removeAll();
        this._containerGroup.removeClipPath();
        this._containerGroup.__rectSize = null;
    };
    /**
   * @override
   */ ScrollableLegendView.prototype.renderInner = function(itemAlign, legendModel, ecModel, api, selector, orient, selectorPosition) {
        var self = this;
        // Render content items.
        _super.prototype.renderInner.call(this, itemAlign, legendModel, ecModel, api, selector, orient, selectorPosition);
        var controllerGroup = this._controllerGroup;
        // FIXME: support be 'auto' adapt to size number text length,
        // e.g., '3/12345' should not overlap with the control arrow button.
        var pageIconSize = legendModel.get('pageIconSize', true);
        var pageIconSizeArr = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isArray"](pageIconSize) ? pageIconSize : [
            pageIconSize,
            pageIconSize
        ];
        createPageButton('pagePrev', 0);
        var pageTextStyleModel = legendModel.getModel('pageTextStyle');
        controllerGroup.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Text$3e$__["Text"]({
            name: 'pageText',
            style: {
                // Placeholder to calculate a proper layout.
                text: 'xx/xx',
                fill: pageTextStyleModel.getTextColor(),
                font: pageTextStyleModel.getFont(),
                verticalAlign: 'middle',
                align: 'center'
            },
            silent: true
        }));
        createPageButton('pageNext', 1);
        function createPageButton(name, iconIdx) {
            var pageDataIndexName = name + 'DataIndex';
            var icon = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createIcon"](legendModel.get('pageIcons', true)[legendModel.getOrient().name][iconIdx], {
                // Buttons will be created in each render, so we do not need
                // to worry about avoiding using legendModel kept in scope.
                onclick: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bind"](self._pageGo, self, pageDataIndexName, legendModel, api)
            }, {
                x: -pageIconSizeArr[0] / 2,
                y: -pageIconSizeArr[1] / 2,
                width: pageIconSizeArr[0],
                height: pageIconSizeArr[1]
            });
            icon.name = name;
            controllerGroup.add(icon);
        }
    };
    /**
   * @override
   */ ScrollableLegendView.prototype.layoutInner = function(legendModel, itemAlign, maxSize, isFirstRender, selector, selectorPosition) {
        var selectorGroup = this.getSelectorGroup();
        var orientIdx = legendModel.getOrient().index;
        var wh = WH[orientIdx];
        var xy = XY[orientIdx];
        var hw = WH[1 - orientIdx];
        var yx = XY[1 - orientIdx];
        selector && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["box"](// Buttons in selectorGroup always layout horizontally
        'horizontal', selectorGroup, legendModel.get('selectorItemGap', true));
        var selectorButtonGap = legendModel.get('selectorButtonGap', true);
        var selectorRect = selectorGroup.getBoundingRect();
        var selectorPos = [
            -selectorRect.x,
            -selectorRect.y
        ];
        var processMaxSize = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clone"](maxSize);
        selector && (processMaxSize[wh] = maxSize[wh] - selectorRect[wh] - selectorButtonGap);
        var mainRect = this._layoutContentAndController(legendModel, isFirstRender, processMaxSize, orientIdx, wh, hw, yx, xy);
        if (selector) {
            if (selectorPosition === 'end') {
                selectorPos[orientIdx] += mainRect[wh] + selectorButtonGap;
            } else {
                var offset = selectorRect[wh] + selectorButtonGap;
                selectorPos[orientIdx] -= offset;
                mainRect[xy] -= offset;
            }
            mainRect[wh] += selectorRect[wh] + selectorButtonGap;
            selectorPos[1 - orientIdx] += mainRect[yx] + mainRect[hw] / 2 - selectorRect[hw] / 2;
            mainRect[hw] = Math.max(mainRect[hw], selectorRect[hw]);
            mainRect[yx] = Math.min(mainRect[yx], selectorRect[yx] + selectorPos[1 - orientIdx]);
            selectorGroup.x = selectorPos[0];
            selectorGroup.y = selectorPos[1];
            selectorGroup.markRedraw();
        }
        return mainRect;
    };
    ScrollableLegendView.prototype._layoutContentAndController = function(legendModel, isFirstRender, maxSize, orientIdx, wh, hw, yx, xy) {
        var contentGroup = this.getContentGroup();
        var containerGroup = this._containerGroup;
        var controllerGroup = this._controllerGroup;
        // Place items in contentGroup.
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["box"](legendModel.get('orient'), contentGroup, legendModel.get('itemGap'), !orientIdx ? null : maxSize.width, orientIdx ? null : maxSize.height);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["box"](// Buttons in controller are layout always horizontally.
        'horizontal', controllerGroup, legendModel.get('pageButtonItemGap', true));
        var contentRect = contentGroup.getBoundingRect();
        var controllerRect = controllerGroup.getBoundingRect();
        var showController = this._showController = contentRect[wh] > maxSize[wh];
        // In case that the inner elements of contentGroup layout do not based on [0, 0]
        var contentPos = [
            -contentRect.x,
            -contentRect.y
        ];
        // Remain contentPos when scroll animation perfroming.
        // If first rendering, `contentGroup.position` is [0, 0], which
        // does not make sense and may cause unexepcted animation if adopted.
        if (!isFirstRender) {
            contentPos[orientIdx] = contentGroup[xy];
        }
        // Layout container group based on 0.
        var containerPos = [
            0,
            0
        ];
        var controllerPos = [
            -controllerRect.x,
            -controllerRect.y
        ];
        var pageButtonGap = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["retrieve2"](legendModel.get('pageButtonGap', true), legendModel.get('itemGap', true));
        // Place containerGroup and controllerGroup and contentGroup.
        if (showController) {
            var pageButtonPosition = legendModel.get('pageButtonPosition', true);
            // controller is on the right / bottom.
            if (pageButtonPosition === 'end') {
                controllerPos[orientIdx] += maxSize[wh] - controllerRect[wh];
            } else {
                containerPos[orientIdx] += controllerRect[wh] + pageButtonGap;
            }
        }
        // Always align controller to content as 'middle'.
        controllerPos[1 - orientIdx] += contentRect[hw] / 2 - controllerRect[hw] / 2;
        contentGroup.setPosition(contentPos);
        containerGroup.setPosition(containerPos);
        controllerGroup.setPosition(controllerPos);
        // Calculate `mainRect` and set `clipPath`.
        // mainRect should not be calculated by `this.group.getBoundingRect()`
        // for sake of the overflow.
        var mainRect = {
            x: 0,
            y: 0
        };
        // Consider content may be overflow (should be clipped).
        mainRect[wh] = showController ? maxSize[wh] : contentRect[wh];
        mainRect[hw] = Math.max(contentRect[hw], controllerRect[hw]);
        // `containerRect[yx] + containerPos[1 - orientIdx]` is 0.
        mainRect[yx] = Math.min(0, controllerRect[yx] + controllerPos[1 - orientIdx]);
        containerGroup.__rectSize = maxSize[wh];
        if (showController) {
            var clipShape = {
                x: 0,
                y: 0
            };
            clipShape[wh] = Math.max(maxSize[wh] - controllerRect[wh] - pageButtonGap, 0);
            clipShape[hw] = mainRect[hw];
            containerGroup.setClipPath(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Rect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Rect$3e$__["Rect"]({
                shape: clipShape
            }));
            // Consider content may be larger than container, container rect
            // can not be obtained from `containerGroup.getBoundingRect()`.
            containerGroup.__rectSize = clipShape[wh];
        } else {
            // Do not remove or ignore controller. Keep them set as placeholders.
            controllerGroup.eachChild(function(child) {
                child.attr({
                    invisible: true,
                    silent: true
                });
            });
        }
        // Content translate animation.
        var pageInfo = this._getPageInfo(legendModel);
        pageInfo.pageIndex != null && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateProps"](contentGroup, {
            x: pageInfo.contentPosition[0],
            y: pageInfo.contentPosition[1]
        }, // When switch from "show controller" to "not show controller", view should be
        // updated immediately without animation, otherwise causes weird effect.
        showController ? legendModel : null);
        this._updatePageInfoView(legendModel, pageInfo);
        return mainRect;
    };
    ScrollableLegendView.prototype._pageGo = function(to, legendModel, api) {
        var scrollDataIndex = this._getPageInfo(legendModel)[to];
        scrollDataIndex != null && api.dispatchAction({
            type: 'legendScroll',
            scrollDataIndex: scrollDataIndex,
            legendId: legendModel.id
        });
    };
    ScrollableLegendView.prototype._updatePageInfoView = function(legendModel, pageInfo) {
        var controllerGroup = this._controllerGroup;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"]([
            'pagePrev',
            'pageNext'
        ], function(name) {
            var key = name + 'DataIndex';
            var canJump = pageInfo[key] != null;
            var icon = controllerGroup.childOfName(name);
            if (icon) {
                icon.setStyle('fill', canJump ? legendModel.get('pageIconColor', true) : legendModel.get('pageIconInactiveColor', true));
                icon.cursor = canJump ? 'pointer' : 'default';
            }
        });
        var pageText = controllerGroup.childOfName('pageText');
        var pageFormatter = legendModel.get('pageFormatter');
        var pageIndex = pageInfo.pageIndex;
        var current = pageIndex != null ? pageIndex + 1 : 0;
        var total = pageInfo.pageCount;
        pageText && pageFormatter && pageText.setStyle('text', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"](pageFormatter) ? pageFormatter.replace('{current}', current == null ? '' : current + '').replace('{total}', total == null ? '' : total + '') : pageFormatter({
            current: current,
            total: total
        }));
    };
    /**
   *  contentPosition: Array.<number>, null when data item not found.
   *  pageIndex: number, null when data item not found.
   *  pageCount: number, always be a number, can be 0.
   *  pagePrevDataIndex: number, null when no previous page.
   *  pageNextDataIndex: number, null when no next page.
   * }
   */ ScrollableLegendView.prototype._getPageInfo = function(legendModel) {
        var scrollDataIndex = legendModel.get('scrollDataIndex', true);
        var contentGroup = this.getContentGroup();
        var containerRectSize = this._containerGroup.__rectSize;
        var orientIdx = legendModel.getOrient().index;
        var wh = WH[orientIdx];
        var xy = XY[orientIdx];
        var targetItemIndex = this._findTargetItemIndex(scrollDataIndex);
        var children = contentGroup.children();
        var targetItem = children[targetItemIndex];
        var itemCount = children.length;
        var pCount = !itemCount ? 0 : 1;
        var result = {
            contentPosition: [
                contentGroup.x,
                contentGroup.y
            ],
            pageCount: pCount,
            pageIndex: pCount - 1,
            pagePrevDataIndex: null,
            pageNextDataIndex: null
        };
        if (!targetItem) {
            return result;
        }
        var targetItemInfo = getItemInfo(targetItem);
        result.contentPosition[orientIdx] = -targetItemInfo.s;
        // Strategy:
        // (1) Always align based on the left/top most item.
        // (2) It is user-friendly that the last item shown in the
        // current window is shown at the begining of next window.
        // Otherwise if half of the last item is cut by the window,
        // it will have no chance to display entirely.
        // (3) Consider that item size probably be different, we
        // have calculate pageIndex by size rather than item index,
        // and we can not get page index directly by division.
        // (4) The window is to narrow to contain more than
        // one item, we should make sure that the page can be fliped.
        for(var i = targetItemIndex + 1, winStartItemInfo = targetItemInfo, winEndItemInfo = targetItemInfo, currItemInfo = null; i <= itemCount; ++i){
            currItemInfo = getItemInfo(children[i]);
            if (// Half of the last item is out of the window.
            !currItemInfo && winEndItemInfo.e > winStartItemInfo.s + containerRectSize || currItemInfo && !intersect(currItemInfo, winStartItemInfo.s)) {
                if (winEndItemInfo.i > winStartItemInfo.i) {
                    winStartItemInfo = winEndItemInfo;
                } else {
                    // e.g., when page size is smaller than item size.
                    winStartItemInfo = currItemInfo;
                }
                if (winStartItemInfo) {
                    if (result.pageNextDataIndex == null) {
                        result.pageNextDataIndex = winStartItemInfo.i;
                    }
                    ++result.pageCount;
                }
            }
            winEndItemInfo = currItemInfo;
        }
        for(var i = targetItemIndex - 1, winStartItemInfo = targetItemInfo, winEndItemInfo = targetItemInfo, currItemInfo = null; i >= -1; --i){
            currItemInfo = getItemInfo(children[i]);
            if (// If the the end item does not intersect with the window started
            // from the current item, a page can be settled.
            (!currItemInfo || !intersect(winEndItemInfo, currItemInfo.s)) && winStartItemInfo.i < winEndItemInfo.i) {
                winEndItemInfo = winStartItemInfo;
                if (result.pagePrevDataIndex == null) {
                    result.pagePrevDataIndex = winStartItemInfo.i;
                }
                ++result.pageCount;
                ++result.pageIndex;
            }
            winStartItemInfo = currItemInfo;
        }
        return result;
        //TURBOPACK unreachable
        ;
        function getItemInfo(el) {
            if (el) {
                var itemRect = el.getBoundingRect();
                var start = itemRect[xy] + el[xy];
                return {
                    s: start,
                    e: start + itemRect[wh],
                    i: el.__legendDataIndex
                };
            }
        }
        function intersect(itemInfo, winStart) {
            return itemInfo.e >= winStart && itemInfo.s <= winStart + containerRectSize;
        }
    };
    ScrollableLegendView.prototype._findTargetItemIndex = function(targetDataIndex) {
        if (!this._showController) {
            return 0;
        }
        var index;
        var contentGroup = this.getContentGroup();
        var defaultIndex;
        contentGroup.eachChild(function(child, idx) {
            var legendDataIdx = child.__legendDataIndex;
            // FIXME
            // If the given targetDataIndex (from model) is illegal,
            // we use defaultIndex. But the index on the legend model and
            // action payload is still illegal. That case will not be
            // changed until some scenario requires.
            if (defaultIndex == null && legendDataIdx != null) {
                defaultIndex = idx;
            }
            if (legendDataIdx === targetDataIndex) {
                index = idx;
            }
        });
        return index != null ? index : defaultIndex;
    };
    ScrollableLegendView.type = 'legend.scroll';
    return ScrollableLegendView;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$legend$2f$LegendView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = ScrollableLegendView;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/legend/scrollableLegendAction.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    ()=>installScrollableLegendAction
]);
function installScrollableLegendAction(registers) {
    /**
   * @event legendScroll
   * @type {Object}
   * @property {string} type 'legendScroll'
   * @property {string} scrollDataIndex
   */ registers.registerAction('legendScroll', 'legendscroll', function(payload, ecModel) {
        var scrollDataIndex = payload.scrollDataIndex;
        scrollDataIndex != null && ecModel.eachComponent({
            mainType: 'legend',
            subType: 'scroll',
            query: payload
        }, function(legendModel) {
            legendModel.setScrollDataIndex(scrollDataIndex);
        });
    });
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/legend/installLegendScroll.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$legend$2f$installLegendPlain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/legend/installLegendPlain.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$legend$2f$ScrollableLegendModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/legend/ScrollableLegendModel.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$legend$2f$ScrollableLegendView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/legend/ScrollableLegendView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$legend$2f$scrollableLegendAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/legend/scrollableLegendAction.js [app-ssr] (ecmascript)");
;
;
;
;
;
function install(registers) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["use"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$legend$2f$installLegendPlain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["install"]);
    registers.registerComponentModel(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$legend$2f$ScrollableLegendModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    registers.registerComponentView(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$legend$2f$ScrollableLegendView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$legend$2f$scrollableLegendAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(registers);
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/legend/install.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$legend$2f$installLegendPlain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/legend/installLegendPlain.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$legend$2f$installLegendScroll$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/legend/installLegendScroll.js [app-ssr] (ecmascript)");
;
;
;
function install(registers) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["use"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$legend$2f$installLegendPlain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["install"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["use"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$legend$2f$installLegendScroll$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["install"]);
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/legend/install.js [app-ssr] (ecmascript) <export install as LegendComponent>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LegendComponent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$legend$2f$install$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["install"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$legend$2f$install$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/legend/install.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=6e80b_echarts_lib_component_legend_25e6161e._.js.map