module.exports = [
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/marker/checkMarkerInSeries.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    ()=>checkMarkerInSeries
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
;
function checkMarkerInSeries(seriesOpts, markerType) {
    if (!seriesOpts) {
        return false;
    }
    var seriesOptArr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isArray"])(seriesOpts) ? seriesOpts : [
        seriesOpts
    ];
    for(var idx = 0; idx < seriesOptArr.length; idx++){
        if (seriesOptArr[idx] && seriesOptArr[idx][markerType]) {
            return true;
        }
    }
    return false;
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/marker/MarkerModel.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$env$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/env.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$mixin$2f$dataFormat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/mixin/dataFormat.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/Component.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$tooltipMarkup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/tooltip/tooltipMarkup.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
function fillLabel(opt) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultEmphasis"])(opt, 'label', [
        'show'
    ]);
}
// { [componentType]: MarkerModel }
var inner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeInner"])();
var MarkerModel = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(MarkerModel, _super);
    function MarkerModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = MarkerModel.type;
        /**
     * If marker model is created by self from series
     */ _this.createdBySelf = false;
        _this.preventAutoZ = true;
        return _this;
    }
    /**
   * @overrite
   */ MarkerModel.prototype.init = function(option, parentModel, ecModel) {
        if ("TURBOPACK compile-time truthy", 1) {
            if (this.type === 'marker') {
                throw new Error('Marker component is abstract component. Use markLine, markPoint, markArea instead.');
            }
        }
        this.mergeDefaultAndTheme(option, ecModel);
        this._mergeOption(option, ecModel, false, true);
    };
    MarkerModel.prototype.isAnimationEnabled = function() {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$env$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].node) {
            return false;
        }
        var hostSeries = this.__hostSeries;
        return this.getShallow('animation') && hostSeries && hostSeries.isAnimationEnabled();
    };
    /**
   * @overrite
   */ MarkerModel.prototype.mergeOption = function(newOpt, ecModel) {
        this._mergeOption(newOpt, ecModel, false, false);
    };
    MarkerModel.prototype._mergeOption = function(newOpt, ecModel, createdBySelf, isInit) {
        var componentType = this.mainType;
        if (!createdBySelf) {
            ecModel.eachSeries(function(seriesModel) {
                // mainType can be markPoint, markLine, markArea
                var markerOpt = seriesModel.get(this.mainType, true);
                var markerModel = inner(seriesModel)[componentType];
                if (!markerOpt || !markerOpt.data) {
                    inner(seriesModel)[componentType] = null;
                    return;
                }
                if (!markerModel) {
                    if (isInit) {
                        // Default label emphasis `position` and `show`
                        fillLabel(markerOpt);
                    }
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"](markerOpt.data, function(item) {
                        // FIXME Overwrite fillLabel method ?
                        if (item instanceof Array) {
                            fillLabel(item[0]);
                            fillLabel(item[1]);
                        } else {
                            fillLabel(item);
                        }
                    });
                    markerModel = this.createMarkerModelFromSeries(markerOpt, this, ecModel);
                    // markerModel = new ImplementedMarkerModel(
                    //     markerOpt, this, ecModel
                    // );
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extend"](markerModel, {
                        mainType: this.mainType,
                        // Use the same series index and name
                        seriesIndex: seriesModel.seriesIndex,
                        name: seriesModel.name,
                        createdBySelf: true
                    });
                    markerModel.__hostSeries = seriesModel;
                } else {
                    markerModel._mergeOption(markerOpt, ecModel, true);
                }
                inner(seriesModel)[componentType] = markerModel;
            }, this);
        }
    };
    MarkerModel.prototype.formatTooltip = function(dataIndex, multipleSeries, dataType) {
        var data = this.getData();
        var value = this.getRawValue(dataIndex);
        var itemName = data.getName(dataIndex);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$tooltipMarkup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createTooltipMarkup"])('section', {
            header: this.name,
            blocks: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$tooltipMarkup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createTooltipMarkup"])('nameValue', {
                    name: itemName,
                    value: value,
                    noName: !itemName,
                    noValue: value == null
                })
            ]
        });
    };
    MarkerModel.prototype.getData = function() {
        return this._data;
    };
    MarkerModel.prototype.setData = function(data) {
        this._data = data;
    };
    MarkerModel.prototype.getDataParams = function(dataIndex, dataType) {
        var params = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$mixin$2f$dataFormat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DataFormatMixin"].prototype.getDataParams.call(this, dataIndex, dataType);
        var hostSeries = this.__hostSeries;
        if (hostSeries) {
            params.seriesId = hostSeries.id;
            params.seriesName = hostSeries.name;
            params.seriesType = hostSeries.subType;
        }
        return params;
    };
    MarkerModel.getMarkerModelFromSeries = function(seriesModel, // Support three types of markers. Strict check.
    componentType) {
        return inner(seriesModel)[componentType];
    };
    MarkerModel.type = 'marker';
    MarkerModel.dependencies = [
        'series',
        'grid',
        'polar',
        'geo'
    ];
    return MarkerModel;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mixin"](MarkerModel, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$mixin$2f$dataFormat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DataFormatMixin"].prototype);
const __TURBOPACK__default__export__ = MarkerModel;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/marker/MarkPointModel.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$MarkerModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/marker/MarkerModel.js [app-ssr] (ecmascript)");
;
;
var MarkPointModel = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(MarkPointModel, _super);
    function MarkPointModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = MarkPointModel.type;
        return _this;
    }
    MarkPointModel.prototype.createMarkerModelFromSeries = function(markerOpt, masterMarkerModel, ecModel) {
        return new MarkPointModel(markerOpt, masterMarkerModel, ecModel);
    };
    MarkPointModel.type = 'markPoint';
    MarkPointModel.defaultOption = {
        // zlevel: 0,
        z: 5,
        symbol: 'pin',
        symbolSize: 50,
        // symbolRotate: 0,
        // symbolOffset: [0, 0]
        tooltip: {
            trigger: 'item'
        },
        label: {
            show: true,
            position: 'inside'
        },
        itemStyle: {
            borderWidth: 2
        },
        emphasis: {
            label: {
                show: true
            }
        }
    };
    return MarkPointModel;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$MarkerModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = MarkPointModel;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/marker/markerHelper.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    "createMarkerDimValueGetter",
    ()=>createMarkerDimValueGetter,
    "dataFilter",
    ()=>dataFilter,
    "dataTransform",
    ()=>dataTransform,
    "getAxisInfo",
    ()=>getAxisInfo,
    "numCalculate",
    ()=>numCalculate,
    "zoneFilter",
    ()=>zoneFilter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/number.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$dataStackHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/data/helper/dataStackHelper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$dataValueHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/data/helper/dataValueHelper.js [app-ssr] (ecmascript)");
;
;
;
;
function hasXOrY(item) {
    return !(isNaN(parseFloat(item.x)) && isNaN(parseFloat(item.y)));
}
function hasXAndY(item) {
    return !isNaN(parseFloat(item.x)) && !isNaN(parseFloat(item.y));
}
function markerTypeCalculatorWithExtent(markerType, data, axisDim, otherDataDim, targetDataDim, otherCoordIndex, targetCoordIndex) {
    var coordArr = [];
    var stacked = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$dataStackHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDimensionStacked"])(data, targetDataDim /* , otherDataDim */ );
    var calcDataDim = stacked ? data.getCalculationInfo('stackResultDimension') : targetDataDim;
    var value = numCalculate(data, calcDataDim, markerType);
    var seriesModel = data.hostModel;
    var dataIndex = seriesModel.indicesOfNearest(axisDim, calcDataDim, value)[0];
    coordArr[otherCoordIndex] = data.get(otherDataDim, dataIndex);
    coordArr[targetCoordIndex] = data.get(calcDataDim, dataIndex);
    var coordArrValue = data.get(targetDataDim, dataIndex);
    // Make it simple, do not visit all stacked value to count precision.
    var precision = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrecision"](data.get(targetDataDim, dataIndex));
    precision = Math.min(precision, 20);
    if (precision >= 0) {
        coordArr[targetCoordIndex] = +coordArr[targetCoordIndex].toFixed(precision);
    }
    return [
        coordArr,
        coordArrValue
    ];
}
// TODO Specified percent
var markerTypeCalculator = {
    min: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["curry"])(markerTypeCalculatorWithExtent, 'min'),
    max: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["curry"])(markerTypeCalculatorWithExtent, 'max'),
    average: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["curry"])(markerTypeCalculatorWithExtent, 'average'),
    median: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["curry"])(markerTypeCalculatorWithExtent, 'median')
};
function dataTransform(seriesModel, item) {
    if (!item) {
        return;
    }
    var data = seriesModel.getData();
    var coordSys = seriesModel.coordinateSystem;
    var dims = coordSys && coordSys.dimensions;
    // 1. If not specify the position with pixel directly
    // 2. If `coord` is not a data array. Which uses `xAxis`,
    // `yAxis` to specify the coord on each dimension
    // parseFloat first because item.x and item.y can be percent string like '20%'
    if (!hasXAndY(item) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isArray"])(item.coord) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isArray"])(dims)) {
        var axisInfo = getAxisInfo(item, data, coordSys, seriesModel);
        // Clone the option
        // Transform the properties xAxis, yAxis, radiusAxis, angleAxis, geoCoord to value
        item = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clone"])(item);
        if (item.type && markerTypeCalculator[item.type] && axisInfo.baseAxis && axisInfo.valueAxis) {
            var otherCoordIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["indexOf"])(dims, axisInfo.baseAxis.dim);
            var targetCoordIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["indexOf"])(dims, axisInfo.valueAxis.dim);
            var coordInfo = markerTypeCalculator[item.type](data, axisInfo.valueAxis.dim, axisInfo.baseDataDim, axisInfo.valueDataDim, otherCoordIndex, targetCoordIndex);
            item.coord = coordInfo[0];
            // Force to use the value of calculated value.
            // let item use the value without stack.
            item.value = coordInfo[1];
        } else {
            // FIXME Only has one of xAxis and yAxis.
            item.coord = [
                item.xAxis != null ? item.xAxis : item.radiusAxis,
                item.yAxis != null ? item.yAxis : item.angleAxis
            ];
        }
    }
    // x y is provided
    if (item.coord == null || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isArray"])(dims)) {
        item.coord = [];
        var baseAxis = seriesModel.getBaseAxis();
        if (baseAxis && item.type && markerTypeCalculator[item.type]) {
            var otherAxis = coordSys.getOtherAxis(baseAxis);
            if (otherAxis) {
                item.value = numCalculate(data, data.mapDimension(otherAxis.dim), item.type);
            }
        }
    } else {
        // Each coord support max, min, average
        var coord = item.coord;
        for(var i = 0; i < 2; i++){
            if (markerTypeCalculator[coord[i]]) {
                coord[i] = numCalculate(data, data.mapDimension(dims[i]), coord[i]);
            }
        }
    }
    return item;
}
function getAxisInfo(item, data, coordSys, seriesModel) {
    var ret = {};
    if (item.valueIndex != null || item.valueDim != null) {
        ret.valueDataDim = item.valueIndex != null ? data.getDimension(item.valueIndex) : item.valueDim;
        ret.valueAxis = coordSys.getAxis(dataDimToCoordDim(seriesModel, ret.valueDataDim));
        ret.baseAxis = coordSys.getOtherAxis(ret.valueAxis);
        ret.baseDataDim = data.mapDimension(ret.baseAxis.dim);
    } else {
        ret.baseAxis = seriesModel.getBaseAxis();
        ret.valueAxis = coordSys.getOtherAxis(ret.baseAxis);
        ret.baseDataDim = data.mapDimension(ret.baseAxis.dim);
        ret.valueDataDim = data.mapDimension(ret.valueAxis.dim);
    }
    return ret;
}
function dataDimToCoordDim(seriesModel, dataDim) {
    var dimItem = seriesModel.getData().getDimensionInfo(dataDim);
    return dimItem && dimItem.coordDim;
}
function dataFilter(// Currently only polar and cartesian has containData.
coordSys, item) {
    // Always return true if there is no coordSys
    return coordSys && coordSys.containData && item.coord && !hasXOrY(item) ? coordSys.containData(item.coord) : true;
}
function zoneFilter(// Currently only polar and cartesian has containData.
coordSys, item1, item2) {
    // Always return true if there is no coordSys
    return coordSys && coordSys.containZone && item1.coord && item2.coord && !hasXOrY(item1) && !hasXOrY(item2) ? coordSys.containZone(item1.coord, item2.coord) : true;
}
function createMarkerDimValueGetter(inCoordSys, dims) {
    return inCoordSys ? function(item, dimName, dataIndex, dimIndex) {
        var rawVal = dimIndex < 2 ? item.coord && item.coord[dimIndex] : item.value;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$dataValueHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseDataValue"])(rawVal, dims[dimIndex]);
    } : function(item, dimName, dataIndex, dimIndex) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$dataValueHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseDataValue"])(item.value, dims[dimIndex]);
    };
}
function numCalculate(data, valueDataDim, type) {
    if (type === 'average') {
        var sum_1 = 0;
        var count_1 = 0;
        data.each(valueDataDim, function(val, idx) {
            if (!isNaN(val)) {
                sum_1 += val;
                count_1++;
            }
        });
        return sum_1 / count_1;
    } else if (type === 'median') {
        return data.getMedian(valueDataDim);
    } else {
        // max & min
        return data.getDataExtent(valueDataDim)[type === 'max' ? 1 : 0];
    }
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/marker/MarkerView.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$MarkerModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/marker/MarkerModel.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/states.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/graphic.js [app-ssr] (ecmascript) <locals>");
;
;
;
;
;
;
;
var inner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeInner"])();
var MarkerView = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(MarkerView, _super);
    function MarkerView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = MarkerView.type;
        return _this;
    }
    MarkerView.prototype.init = function() {
        this.markerGroupMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createHashMap"])();
    };
    MarkerView.prototype.render = function(markerModel, ecModel, api) {
        var _this = this;
        var markerGroupMap = this.markerGroupMap;
        markerGroupMap.each(function(item) {
            inner(item).keep = false;
        });
        ecModel.eachSeries(function(seriesModel) {
            var markerModel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$MarkerModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getMarkerModelFromSeries(seriesModel, _this.type);
            markerModel && _this.renderSeries(seriesModel, markerModel, ecModel, api);
        });
        markerGroupMap.each(function(item) {
            !inner(item).keep && _this.group.remove(item.group);
        });
        updateZ(ecModel, markerGroupMap, this.type);
    };
    MarkerView.prototype.markKeep = function(drawGroup) {
        inner(drawGroup).keep = true;
    };
    MarkerView.prototype.toggleBlurSeries = function(seriesModelList, isBlur) {
        var _this = this;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(seriesModelList, function(seriesModel) {
            var markerModel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$MarkerModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getMarkerModelFromSeries(seriesModel, _this.type);
            if (markerModel) {
                var data = markerModel.getData();
                data.eachItemGraphicEl(function(el) {
                    if (el) {
                        isBlur ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["enterBlur"])(el) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["leaveBlur"])(el);
                    }
                });
            }
        });
    };
    MarkerView.type = 'marker';
    return MarkerView;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
function updateZ(ecModel, markerGroupMap, type) {
    ecModel.eachSeries(function(seriesModel) {
        var markerModel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$MarkerModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getMarkerModelFromSeries(seriesModel, type);
        var markerDraw = markerGroupMap.get(seriesModel.id);
        if (markerModel && markerDraw && markerDraw.group) {
            var _a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["retrieveZInfo"])(markerModel), z = _a.z, zlevel = _a.zlevel;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["traverseUpdateZ"])(markerDraw.group, z, zlevel);
        }
    });
}
const __TURBOPACK__default__export__ = MarkerView;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/marker/MarkPointView.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/number.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$SeriesData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/data/SeriesData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$markerHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/marker/markerHelper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$MarkerView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/marker/MarkerView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$MarkerModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/marker/MarkerModel.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/innerStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/helper.js [app-ssr] (ecmascript)");
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
function updateMarkerLayout(mpData, seriesModel, api) {
    var coordSys = seriesModel.coordinateSystem;
    var apiWidth = api.getWidth();
    var apiHeight = api.getHeight();
    var coordRect = coordSys && coordSys.getArea && coordSys.getArea();
    mpData.each(function(idx) {
        var itemModel = mpData.getItemModel(idx);
        var isRelativeToCoordinate = itemModel.get('relativeTo') === 'coordinate';
        var width = isRelativeToCoordinate ? coordRect ? coordRect.width : 0 : apiWidth;
        var height = isRelativeToCoordinate ? coordRect ? coordRect.height : 0 : apiHeight;
        var left = isRelativeToCoordinate && coordRect ? coordRect.x : 0;
        var top = isRelativeToCoordinate && coordRect ? coordRect.y : 0;
        var point;
        var xPx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parsePercent"](itemModel.get('x'), width) + left;
        var yPx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parsePercent"](itemModel.get('y'), height) + top;
        if (!isNaN(xPx) && !isNaN(yPx)) {
            point = [
                xPx,
                yPx
            ];
        } else if (seriesModel.getMarkerPosition) {
            // Use the getMarkerPosition
            point = seriesModel.getMarkerPosition(mpData.getValues(mpData.dimensions, idx));
        } else if (coordSys) {
            var x = mpData.get(coordSys.dimensions[0], idx);
            var y = mpData.get(coordSys.dimensions[1], idx);
            point = coordSys.dataToPoint([
                x,
                y
            ]);
        }
        // Use x, y if has any
        if (!isNaN(xPx)) {
            point[0] = xPx;
        }
        if (!isNaN(yPx)) {
            point[1] = yPx;
        }
        mpData.setItemLayout(idx, point);
    });
}
var MarkPointView = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(MarkPointView, _super);
    function MarkPointView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = MarkPointView.type;
        return _this;
    }
    MarkPointView.prototype.updateTransform = function(markPointModel, ecModel, api) {
        ecModel.eachSeries(function(seriesModel) {
            var mpModel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$MarkerModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getMarkerModelFromSeries(seriesModel, 'markPoint');
            if (mpModel) {
                updateMarkerLayout(mpModel.getData(), seriesModel, api);
                this.markerGroupMap.get(seriesModel.id).updateLayout();
            }
        }, this);
    };
    MarkPointView.prototype.renderSeries = function(seriesModel, mpModel, ecModel, api) {
        var coordSys = seriesModel.coordinateSystem;
        var seriesId = seriesModel.id;
        var seriesData = seriesModel.getData();
        var symbolDrawMap = this.markerGroupMap;
        var symbolDraw = symbolDrawMap.get(seriesId) || symbolDrawMap.set(seriesId, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$SymbolDraw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]());
        var mpData = createData(coordSys, seriesModel, mpModel);
        // FIXME
        mpModel.setData(mpData);
        updateMarkerLayout(mpModel.getData(), seriesModel, api);
        mpData.each(function(idx) {
            var itemModel = mpData.getItemModel(idx);
            var symbol = itemModel.getShallow('symbol');
            var symbolSize = itemModel.getShallow('symbolSize');
            var symbolRotate = itemModel.getShallow('symbolRotate');
            var symbolOffset = itemModel.getShallow('symbolOffset');
            var symbolKeepAspect = itemModel.getShallow('symbolKeepAspect');
            // TODO: refactor needed: single data item should not support callback function
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFunction"])(symbol) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFunction"])(symbolSize) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFunction"])(symbolRotate) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFunction"])(symbolOffset)) {
                var rawIdx = mpModel.getRawValue(idx);
                var dataParams = mpModel.getDataParams(idx);
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFunction"])(symbol)) {
                    symbol = symbol(rawIdx, dataParams);
                }
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFunction"])(symbolSize)) {
                    // FIXME 这里不兼容 ECharts 2.x，2.x 貌似参数是整个数据？
                    symbolSize = symbolSize(rawIdx, dataParams);
                }
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFunction"])(symbolRotate)) {
                    symbolRotate = symbolRotate(rawIdx, dataParams);
                }
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFunction"])(symbolOffset)) {
                    symbolOffset = symbolOffset(rawIdx, dataParams);
                }
            }
            var style = itemModel.getModel('itemStyle').getItemStyle();
            var z2 = itemModel.get('z2');
            var color = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getVisualFromData"])(seriesData, 'color');
            if (!style.fill) {
                style.fill = color;
            }
            mpData.setItemVisual(idx, {
                z2: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["retrieve2"])(z2, 0),
                symbol: symbol,
                symbolSize: symbolSize,
                symbolRotate: symbolRotate,
                symbolOffset: symbolOffset,
                symbolKeepAspect: symbolKeepAspect,
                style: style
            });
        });
        // TODO Text are wrong
        symbolDraw.updateData(mpData);
        this.group.add(symbolDraw.group);
        // Set host model for tooltip
        // FIXME
        mpData.eachItemGraphicEl(function(el) {
            el.traverse(function(child) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getECData"])(child).dataModel = mpModel;
            });
        });
        this.markKeep(symbolDraw);
        symbolDraw.group.silent = mpModel.get('silent') || seriesModel.get('silent');
    };
    MarkPointView.type = 'markPoint';
    return MarkPointView;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$MarkerView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
function createData(coordSys, seriesModel, mpModel) {
    var coordDimsInfos;
    if (coordSys) {
        coordDimsInfos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["map"])(coordSys && coordSys.dimensions, function(coordDim) {
            var info = seriesModel.getData().getDimensionInfo(seriesModel.getData().mapDimension(coordDim)) || {};
            // In map series data don't have lng and lat dimension. Fallback to same with coordSys
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extend"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extend"])({}, info), {
                name: coordDim,
                // DON'T use ordinalMeta to parse and collect ordinal.
                ordinalMeta: null
            });
        });
    } else {
        coordDimsInfos = [
            {
                name: 'value',
                type: 'float'
            }
        ];
    }
    var mpData = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$SeriesData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](coordDimsInfos, mpModel);
    var dataOpt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["map"])(mpModel.get('data'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["curry"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$markerHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataTransform"], seriesModel));
    if (coordSys) {
        dataOpt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filter"])(dataOpt, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["curry"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$markerHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataFilter"], coordSys));
    }
    var dimValueGetter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$markerHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createMarkerDimValueGetter"](!!coordSys, coordDimsInfos);
    mpData.initData(dataOpt, null, dimValueGetter);
    return mpData;
}
const __TURBOPACK__default__export__ = MarkPointView;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/marker/installMarkPoint.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
 */ __turbopack_context__.s([
    "install",
    ()=>install
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$checkMarkerInSeries$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/marker/checkMarkerInSeries.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$MarkPointModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/marker/MarkPointModel.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$MarkPointView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/marker/MarkPointView.js [app-ssr] (ecmascript)");
;
;
;
function install(registers) {
    registers.registerComponentModel(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$MarkPointModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    registers.registerComponentView(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$MarkPointView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    registers.registerPreprocessor(function(opt) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$checkMarkerInSeries$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(opt.series, 'markPoint')) {
            // Make sure markPoint component is enabled
            opt.markPoint = opt.markPoint || {};
        }
    });
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/marker/installMarkPoint.js [app-ssr] (ecmascript) <export install as MarkPointComponent>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MarkPointComponent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$installMarkPoint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["install"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$installMarkPoint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/marker/installMarkPoint.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/marker/MarkLineModel.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$MarkerModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/marker/MarkerModel.js [app-ssr] (ecmascript)");
;
;
var MarkLineModel = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(MarkLineModel, _super);
    function MarkLineModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = MarkLineModel.type;
        return _this;
    }
    MarkLineModel.prototype.createMarkerModelFromSeries = function(markerOpt, masterMarkerModel, ecModel) {
        return new MarkLineModel(markerOpt, masterMarkerModel, ecModel);
    };
    MarkLineModel.type = 'markLine';
    MarkLineModel.defaultOption = {
        // zlevel: 0,
        z: 5,
        symbol: [
            'circle',
            'arrow'
        ],
        symbolSize: [
            8,
            16
        ],
        // symbolRotate: 0,
        symbolOffset: 0,
        precision: 2,
        tooltip: {
            trigger: 'item'
        },
        label: {
            show: true,
            position: 'end',
            distance: 5
        },
        lineStyle: {
            type: 'dashed'
        },
        emphasis: {
            label: {
                show: true
            },
            lineStyle: {
                width: 3
            }
        },
        animationEasing: 'linear'
    };
    return MarkLineModel;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$MarkerModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = MarkLineModel;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/marker/MarkLineView.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/number.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$markerHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/marker/markerHelper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$LineDraw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/helper/LineDraw.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$MarkerView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/marker/MarkerView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$dataStackHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/data/helper/dataStackHelper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$CoordinateSystem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/CoordinateSystem.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/innerStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$MarkerModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/marker/MarkerModel.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/helper.js [app-ssr] (ecmascript)");
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
var inner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeInner"])();
var markLineTransform = function(seriesModel, coordSys, mlModel, item) {
    var data = seriesModel.getData();
    var itemArray;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isArray"])(item)) {
        // Special type markLine like 'min', 'max', 'average', 'median'
        var mlType = item.type;
        if (mlType === 'min' || mlType === 'max' || mlType === 'average' || mlType === 'median' || item.xAxis != null || item.yAxis != null) {
            var valueAxis = void 0;
            var value = void 0;
            if (item.yAxis != null || item.xAxis != null) {
                valueAxis = coordSys.getAxis(item.yAxis != null ? 'y' : 'x');
                value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["retrieve"])(item.yAxis, item.xAxis);
            } else {
                var axisInfo = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$markerHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAxisInfo"](item, data, coordSys, seriesModel);
                valueAxis = axisInfo.valueAxis;
                var valueDataDim = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$dataStackHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStackedDimension"])(data, axisInfo.valueDataDim);
                value = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$markerHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numCalculate"](data, valueDataDim, mlType);
            }
            var valueIndex = valueAxis.dim === 'x' ? 0 : 1;
            var baseIndex = 1 - valueIndex;
            // Normized to 2d data with start and end point
            var mlFrom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clone"])(item);
            var mlTo = {
                coord: []
            };
            mlFrom.type = null;
            mlFrom.coord = [];
            mlFrom.coord[baseIndex] = -Infinity;
            mlTo.coord[baseIndex] = Infinity;
            var precision = mlModel.get('precision');
            if (precision >= 0 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNumber"])(value)) {
                value = +value.toFixed(Math.min(precision, 20));
            }
            mlFrom.coord[valueIndex] = mlTo.coord[valueIndex] = value;
            itemArray = [
                mlFrom,
                mlTo,
                {
                    type: mlType,
                    valueIndex: item.valueIndex,
                    // Force to use the value of calculated value.
                    value: value
                }
            ];
        } else {
            // Invalid data
            if ("TURBOPACK compile-time truthy", 1) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logError"])('Invalid markLine data.');
            }
            itemArray = [];
        }
    } else {
        itemArray = item;
    }
    var normalizedItem = [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$markerHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataTransform"](seriesModel, itemArray[0]),
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$markerHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataTransform"](seriesModel, itemArray[1]),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extend"])({}, itemArray[2])
    ];
    // Avoid line data type is extended by from(to) data type
    normalizedItem[2].type = normalizedItem[2].type || null;
    // Merge from option and to option into line option
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["merge"])(normalizedItem[2], normalizedItem[0]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["merge"])(normalizedItem[2], normalizedItem[1]);
    return normalizedItem;
};
function isInfinity(val) {
    return !isNaN(val) && !isFinite(val);
}
// If a markLine has one dim
function ifMarkLineHasOnlyDim(dimIndex, fromCoord, toCoord, coordSys) {
    var otherDimIndex = 1 - dimIndex;
    var dimName = coordSys.dimensions[dimIndex];
    return isInfinity(fromCoord[otherDimIndex]) && isInfinity(toCoord[otherDimIndex]) && fromCoord[dimIndex] === toCoord[dimIndex] && coordSys.getAxis(dimName).containData(fromCoord[dimIndex]);
}
function markLineFilter(coordSys, item) {
    if (coordSys.type === 'cartesian2d') {
        var fromCoord = item[0].coord;
        var toCoord = item[1].coord;
        // In case
        // {
        //  markLine: {
        //    data: [{ yAxis: 2 }]
        //  }
        // }
        if (fromCoord && toCoord && (ifMarkLineHasOnlyDim(1, fromCoord, toCoord, coordSys) || ifMarkLineHasOnlyDim(0, fromCoord, toCoord, coordSys))) {
            return true;
        }
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$markerHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataFilter"](coordSys, item[0]) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$markerHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataFilter"](coordSys, item[1]);
}
function updateSingleMarkerEndLayout(data, idx, isFrom, seriesModel, api) {
    var coordSys = seriesModel.coordinateSystem;
    var itemModel = data.getItemModel(idx);
    var point;
    var xPx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parsePercent"](itemModel.get('x'), api.getWidth());
    var yPx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parsePercent"](itemModel.get('y'), api.getHeight());
    if (!isNaN(xPx) && !isNaN(yPx)) {
        point = [
            xPx,
            yPx
        ];
    } else {
        // Chart like bar may have there own marker positioning logic
        if (seriesModel.getMarkerPosition) {
            // Use the getMarkerPosition
            point = seriesModel.getMarkerPosition(data.getValues(data.dimensions, idx));
        } else {
            var dims = coordSys.dimensions;
            var x = data.get(dims[0], idx);
            var y = data.get(dims[1], idx);
            point = coordSys.dataToPoint([
                x,
                y
            ]);
        }
        // Expand line to the edge of grid if value on one axis is Inifnity
        // In case
        //  markLine: {
        //    data: [{
        //      yAxis: 2
        //      // or
        //      type: 'average'
        //    }]
        //  }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$CoordinateSystem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isCoordinateSystemType"])(coordSys, 'cartesian2d')) {
            // TODO: TYPE ts@4.1 may still infer it as Axis instead of Axis2D. Not sure if it's a bug
            var xAxis = coordSys.getAxis('x');
            var yAxis = coordSys.getAxis('y');
            var dims = coordSys.dimensions;
            if (isInfinity(data.get(dims[0], idx))) {
                point[0] = xAxis.toGlobalCoord(xAxis.getExtent()[isFrom ? 0 : 1]);
            } else if (isInfinity(data.get(dims[1], idx))) {
                point[1] = yAxis.toGlobalCoord(yAxis.getExtent()[isFrom ? 0 : 1]);
            }
        }
        // Use x, y if has any
        if (!isNaN(xPx)) {
            point[0] = xPx;
        }
        if (!isNaN(yPx)) {
            point[1] = yPx;
        }
    }
    data.setItemLayout(idx, point);
}
var MarkLineView = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(MarkLineView, _super);
    function MarkLineView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = MarkLineView.type;
        return _this;
    }
    MarkLineView.prototype.updateTransform = function(markLineModel, ecModel, api) {
        ecModel.eachSeries(function(seriesModel) {
            var mlModel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$MarkerModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getMarkerModelFromSeries(seriesModel, 'markLine');
            if (mlModel) {
                var mlData_1 = mlModel.getData();
                var fromData_1 = inner(mlModel).from;
                var toData_1 = inner(mlModel).to;
                // Update visual and layout of from symbol and to symbol
                fromData_1.each(function(idx) {
                    updateSingleMarkerEndLayout(fromData_1, idx, true, seriesModel, api);
                    updateSingleMarkerEndLayout(toData_1, idx, false, seriesModel, api);
                });
                // Update layout of line
                mlData_1.each(function(idx) {
                    mlData_1.setItemLayout(idx, [
                        fromData_1.getItemLayout(idx),
                        toData_1.getItemLayout(idx)
                    ]);
                });
                this.markerGroupMap.get(seriesModel.id).updateLayout();
            }
        }, this);
    };
    MarkLineView.prototype.renderSeries = function(seriesModel, mlModel, ecModel, api) {
        var coordSys = seriesModel.coordinateSystem;
        var seriesId = seriesModel.id;
        var seriesData = seriesModel.getData();
        var lineDrawMap = this.markerGroupMap;
        var lineDraw = lineDrawMap.get(seriesId) || lineDrawMap.set(seriesId, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$LineDraw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]());
        this.group.add(lineDraw.group);
        var mlData = createList(coordSys, seriesModel, mlModel);
        var fromData = mlData.from;
        var toData = mlData.to;
        var lineData = mlData.line;
        inner(mlModel).from = fromData;
        inner(mlModel).to = toData;
        // Line data for tooltip and formatter
        mlModel.setData(lineData);
        // TODO
        // Functionally, `symbolSize` & `symbolOffset` can also be 2D array now.
        // But the related logic and type definition are not finished yet.
        // Finish it if required
        var symbolType = mlModel.get('symbol');
        var symbolSize = mlModel.get('symbolSize');
        var symbolRotate = mlModel.get('symbolRotate');
        var symbolOffset = mlModel.get('symbolOffset');
        // TODO: support callback function like markPoint
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isArray"])(symbolType)) {
            symbolType = [
                symbolType,
                symbolType
            ];
        }
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isArray"])(symbolSize)) {
            symbolSize = [
                symbolSize,
                symbolSize
            ];
        }
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isArray"])(symbolRotate)) {
            symbolRotate = [
                symbolRotate,
                symbolRotate
            ];
        }
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isArray"])(symbolOffset)) {
            symbolOffset = [
                symbolOffset,
                symbolOffset
            ];
        }
        // Update visual and layout of from symbol and to symbol
        mlData.from.each(function(idx) {
            updateDataVisualAndLayout(fromData, idx, true);
            updateDataVisualAndLayout(toData, idx, false);
        });
        // Update visual and layout of line
        lineData.each(function(idx) {
            var itemModel = lineData.getItemModel(idx);
            var lineStyle = itemModel.getModel('lineStyle').getLineStyle();
            // lineData.setItemVisual(idx, {
            //     color: lineColor || fromData.getItemVisual(idx, 'color')
            // });
            lineData.setItemLayout(idx, [
                fromData.getItemLayout(idx),
                toData.getItemLayout(idx)
            ]);
            var z2 = itemModel.get('z2');
            if (lineStyle.stroke == null) {
                lineStyle.stroke = fromData.getItemVisual(idx, 'style').fill;
            }
            lineData.setItemVisual(idx, {
                z2: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["retrieve2"])(z2, 0),
                fromSymbolKeepAspect: fromData.getItemVisual(idx, 'symbolKeepAspect'),
                fromSymbolOffset: fromData.getItemVisual(idx, 'symbolOffset'),
                fromSymbolRotate: fromData.getItemVisual(idx, 'symbolRotate'),
                fromSymbolSize: fromData.getItemVisual(idx, 'symbolSize'),
                fromSymbol: fromData.getItemVisual(idx, 'symbol'),
                toSymbolKeepAspect: toData.getItemVisual(idx, 'symbolKeepAspect'),
                toSymbolOffset: toData.getItemVisual(idx, 'symbolOffset'),
                toSymbolRotate: toData.getItemVisual(idx, 'symbolRotate'),
                toSymbolSize: toData.getItemVisual(idx, 'symbolSize'),
                toSymbol: toData.getItemVisual(idx, 'symbol'),
                style: lineStyle
            });
        });
        lineDraw.updateData(lineData);
        // Set host model for tooltip
        // FIXME
        mlData.line.eachItemGraphicEl(function(el) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getECData"])(el).dataModel = mlModel;
            el.traverse(function(child) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getECData"])(child).dataModel = mlModel;
            });
        });
        function updateDataVisualAndLayout(data, idx, isFrom) {
            var itemModel = data.getItemModel(idx);
            updateSingleMarkerEndLayout(data, idx, isFrom, seriesModel, api);
            var style = itemModel.getModel('itemStyle').getItemStyle();
            if (style.fill == null) {
                style.fill = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getVisualFromData"])(seriesData, 'color');
            }
            data.setItemVisual(idx, {
                symbolKeepAspect: itemModel.get('symbolKeepAspect'),
                // `0` should be considered as a valid value, so use `retrieve2` instead of `||`
                symbolOffset: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["retrieve2"])(itemModel.get('symbolOffset', true), symbolOffset[isFrom ? 0 : 1]),
                symbolRotate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["retrieve2"])(itemModel.get('symbolRotate', true), symbolRotate[isFrom ? 0 : 1]),
                // TODO: when 2d array is supported, it should ignore parent
                symbolSize: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["retrieve2"])(itemModel.get('symbolSize'), symbolSize[isFrom ? 0 : 1]),
                symbol: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["retrieve2"])(itemModel.get('symbol', true), symbolType[isFrom ? 0 : 1]),
                style: style
            });
        }
        this.markKeep(lineDraw);
        lineDraw.group.silent = mlModel.get('silent') || seriesModel.get('silent');
    };
    MarkLineView.type = 'markLine';
    return MarkLineView;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$MarkerView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
function createList(coordSys, seriesModel, mlModel) {
    var coordDimsInfos;
    if (coordSys) {
        coordDimsInfos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["map"])(coordSys && coordSys.dimensions, function(coordDim) {
            var info = seriesModel.getData().getDimensionInfo(seriesModel.getData().mapDimension(coordDim)) || {};
            // In map series data don't have lng and lat dimension. Fallback to same with coordSys
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extend"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extend"])({}, info), {
                name: coordDim,
                // DON'T use ordinalMeta to parse and collect ordinal.
                ordinalMeta: null
            });
        });
    } else {
        coordDimsInfos = [
            {
                name: 'value',
                type: 'float'
            }
        ];
    }
    var fromData = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$SeriesData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](coordDimsInfos, mlModel);
    var toData = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$SeriesData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](coordDimsInfos, mlModel);
    // No dimensions
    var lineData = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$SeriesData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]([], mlModel);
    var optData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["map"])(mlModel.get('data'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["curry"])(markLineTransform, seriesModel, coordSys, mlModel));
    if (coordSys) {
        optData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filter"])(optData, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["curry"])(markLineFilter, coordSys));
    }
    var dimValueGetter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$markerHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createMarkerDimValueGetter"](!!coordSys, coordDimsInfos);
    fromData.initData((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["map"])(optData, function(item) {
        return item[0];
    }), null, dimValueGetter);
    toData.initData((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["map"])(optData, function(item) {
        return item[1];
    }), null, dimValueGetter);
    lineData.initData((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["map"])(optData, function(item) {
        return item[2];
    }));
    lineData.hasItemOption = true;
    return {
        from: fromData,
        to: toData,
        line: lineData
    };
}
const __TURBOPACK__default__export__ = MarkLineView;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/marker/installMarkLine.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
 */ __turbopack_context__.s([
    "install",
    ()=>install
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$checkMarkerInSeries$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/marker/checkMarkerInSeries.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$MarkLineModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/marker/MarkLineModel.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$MarkLineView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/marker/MarkLineView.js [app-ssr] (ecmascript)");
;
;
;
function install(registers) {
    registers.registerComponentModel(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$MarkLineModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    registers.registerComponentView(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$MarkLineView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    registers.registerPreprocessor(function(opt) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$checkMarkerInSeries$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(opt.series, 'markLine')) {
            // Make sure markLine component is enabled
            opt.markLine = opt.markLine || {};
        }
    });
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/marker/installMarkLine.js [app-ssr] (ecmascript) <export install as MarkLineComponent>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MarkLineComponent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$installMarkLine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["install"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$installMarkLine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/marker/installMarkLine.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/marker/MarkAreaModel.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$MarkerModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/marker/MarkerModel.js [app-ssr] (ecmascript)");
;
;
var MarkAreaModel = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(MarkAreaModel, _super);
    function MarkAreaModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = MarkAreaModel.type;
        return _this;
    }
    MarkAreaModel.prototype.createMarkerModelFromSeries = function(markerOpt, masterMarkerModel, ecModel) {
        return new MarkAreaModel(markerOpt, masterMarkerModel, ecModel);
    };
    MarkAreaModel.type = 'markArea';
    MarkAreaModel.defaultOption = {
        // zlevel: 0,
        // PENDING
        z: 1,
        tooltip: {
            trigger: 'item'
        },
        // markArea should fixed on the coordinate system
        animation: false,
        label: {
            show: true,
            position: 'top'
        },
        itemStyle: {
            // color and borderColor default to use color from series
            // color: 'auto'
            // borderColor: 'auto'
            borderWidth: 0
        },
        emphasis: {
            label: {
                show: true,
                position: 'top'
            }
        }
    };
    return MarkAreaModel;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$MarkerModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = MarkAreaModel;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/marker/MarkAreaView.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    ()=>__TURBOPACK__default__export__,
    "dimPermutations",
    ()=>dimPermutations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-ssr] (ecmascript)");
// TODO Optimize on polar
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$tool$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/tool/color.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$SeriesData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/data/SeriesData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/number.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Group.js [app-ssr] (ecmascript) <export default as Group>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Polygon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Polygon$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Polygon.js [app-ssr] (ecmascript) <export default as Polygon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/animation/basicTransition.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/states.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$markerHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/marker/markerHelper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$MarkerView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/marker/MarkerView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$CoordinateSystem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/CoordinateSystem.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$MarkerModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/marker/MarkerModel.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/helper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/label/labelStyle.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/innerStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$dataValueHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/data/helper/dataValueHelper.js [app-ssr] (ecmascript)");
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
;
;
var inner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeInner"])();
var markAreaTransform = function(seriesModel, coordSys, maModel, item) {
    // item may be null
    var item0 = item[0];
    var item1 = item[1];
    if (!item0 || !item1) {
        return;
    }
    var lt = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$markerHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataTransform"](seriesModel, item0);
    var rb = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$markerHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataTransform"](seriesModel, item1);
    // FIXME make sure lt is less than rb
    var ltCoord = lt.coord;
    var rbCoord = rb.coord;
    ltCoord[0] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["retrieve"])(ltCoord[0], -Infinity);
    ltCoord[1] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["retrieve"])(ltCoord[1], -Infinity);
    rbCoord[0] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["retrieve"])(rbCoord[0], Infinity);
    rbCoord[1] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["retrieve"])(rbCoord[1], Infinity);
    // Merge option into one
    var result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeAll"])([
        {},
        lt,
        rb
    ]);
    result.coord = [
        lt.coord,
        rb.coord
    ];
    result.x0 = lt.x;
    result.y0 = lt.y;
    result.x1 = rb.x;
    result.y1 = rb.y;
    return result;
};
function isInfinity(val) {
    return !isNaN(val) && !isFinite(val);
}
// If a markArea has one dim
function ifMarkAreaHasOnlyDim(dimIndex, fromCoord, toCoord, coordSys) {
    var otherDimIndex = 1 - dimIndex;
    return isInfinity(fromCoord[otherDimIndex]) && isInfinity(toCoord[otherDimIndex]);
}
function markAreaFilter(coordSys, item) {
    var fromCoord = item.coord[0];
    var toCoord = item.coord[1];
    var item0 = {
        coord: fromCoord,
        x: item.x0,
        y: item.y0
    };
    var item1 = {
        coord: toCoord,
        x: item.x1,
        y: item.y1
    };
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$CoordinateSystem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isCoordinateSystemType"])(coordSys, 'cartesian2d')) {
        // In case
        // {
        //  markArea: {
        //    data: [{ yAxis: 2 }]
        //  }
        // }
        if (fromCoord && toCoord && (ifMarkAreaHasOnlyDim(1, fromCoord, toCoord, coordSys) || ifMarkAreaHasOnlyDim(0, fromCoord, toCoord, coordSys))) {
            return true;
        }
        // Directly returning true may also do the work,
        // because markArea will not be shown automatically
        // when it's not included in coordinate system.
        // But filtering ahead can avoid keeping rendering markArea
        // when there are too many of them.
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$markerHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zoneFilter"](coordSys, item0, item1);
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$markerHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataFilter"](coordSys, item0) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$markerHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataFilter"](coordSys, item1);
}
// dims can be ['x0', 'y0'], ['x1', 'y1'], ['x0', 'y1'], ['x1', 'y0']
function getSingleMarkerEndPoint(data, idx, dims, seriesModel, api) {
    var coordSys = seriesModel.coordinateSystem;
    var itemModel = data.getItemModel(idx);
    var point;
    var xPx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parsePercent"](itemModel.get(dims[0]), api.getWidth());
    var yPx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parsePercent"](itemModel.get(dims[1]), api.getHeight());
    if (!isNaN(xPx) && !isNaN(yPx)) {
        point = [
            xPx,
            yPx
        ];
    } else {
        // Chart like bar may have there own marker positioning logic
        if (seriesModel.getMarkerPosition) {
            // Consider the case that user input the right-bottom point first
            // Pick the larger x and y as 'x1' and 'y1'
            var pointValue0 = data.getValues([
                'x0',
                'y0'
            ], idx);
            var pointValue1 = data.getValues([
                'x1',
                'y1'
            ], idx);
            var clampPointValue0 = coordSys.clampData(pointValue0);
            var clampPointValue1 = coordSys.clampData(pointValue1);
            var pointValue = [];
            if (dims[0] === 'x0') {
                pointValue[0] = clampPointValue0[0] > clampPointValue1[0] ? pointValue1[0] : pointValue0[0];
            } else {
                pointValue[0] = clampPointValue0[0] > clampPointValue1[0] ? pointValue0[0] : pointValue1[0];
            }
            if (dims[1] === 'y0') {
                pointValue[1] = clampPointValue0[1] > clampPointValue1[1] ? pointValue1[1] : pointValue0[1];
            } else {
                pointValue[1] = clampPointValue0[1] > clampPointValue1[1] ? pointValue0[1] : pointValue1[1];
            }
            // Use the getMarkerPosition
            point = seriesModel.getMarkerPosition(pointValue, dims, true);
        } else {
            var x = data.get(dims[0], idx);
            var y = data.get(dims[1], idx);
            var pt = [
                x,
                y
            ];
            coordSys.clampData && coordSys.clampData(pt, pt);
            point = coordSys.dataToPoint(pt, true);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$CoordinateSystem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isCoordinateSystemType"])(coordSys, 'cartesian2d')) {
            // TODO: TYPE ts@4.1 may still infer it as Axis instead of Axis2D. Not sure if it's a bug
            var xAxis = coordSys.getAxis('x');
            var yAxis = coordSys.getAxis('y');
            var x = data.get(dims[0], idx);
            var y = data.get(dims[1], idx);
            if (isInfinity(x)) {
                point[0] = xAxis.toGlobalCoord(xAxis.getExtent()[dims[0] === 'x0' ? 0 : 1]);
            } else if (isInfinity(y)) {
                point[1] = yAxis.toGlobalCoord(yAxis.getExtent()[dims[1] === 'y0' ? 0 : 1]);
            }
        }
        // Use x, y if has any
        if (!isNaN(xPx)) {
            point[0] = xPx;
        }
        if (!isNaN(yPx)) {
            point[1] = yPx;
        }
    }
    return point;
}
var dimPermutations = [
    [
        'x0',
        'y0'
    ],
    [
        'x1',
        'y0'
    ],
    [
        'x1',
        'y1'
    ],
    [
        'x0',
        'y1'
    ]
];
var MarkAreaView = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(MarkAreaView, _super);
    function MarkAreaView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = MarkAreaView.type;
        return _this;
    }
    MarkAreaView.prototype.updateTransform = function(markAreaModel, ecModel, api) {
        ecModel.eachSeries(function(seriesModel) {
            var maModel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$MarkerModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getMarkerModelFromSeries(seriesModel, 'markArea');
            if (maModel) {
                var areaData_1 = maModel.getData();
                areaData_1.each(function(idx) {
                    var points = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["map"])(dimPermutations, function(dim) {
                        return getSingleMarkerEndPoint(areaData_1, idx, dim, seriesModel, api);
                    });
                    // Layout
                    areaData_1.setItemLayout(idx, points);
                    var el = areaData_1.getItemGraphicEl(idx);
                    el.setShape('points', points);
                });
            }
        }, this);
    };
    MarkAreaView.prototype.renderSeries = function(seriesModel, maModel, ecModel, api) {
        var coordSys = seriesModel.coordinateSystem;
        var seriesId = seriesModel.id;
        var seriesData = seriesModel.getData();
        var areaGroupMap = this.markerGroupMap;
        var polygonGroup = areaGroupMap.get(seriesId) || areaGroupMap.set(seriesId, {
            group: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__["Group"]()
        });
        this.group.add(polygonGroup.group);
        this.markKeep(polygonGroup);
        var areaData = createList(coordSys, seriesModel, maModel);
        // Line data for tooltip and formatter
        maModel.setData(areaData);
        // Update visual and layout of line
        areaData.each(function(idx) {
            // Layout
            var points = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["map"])(dimPermutations, function(dim) {
                return getSingleMarkerEndPoint(areaData, idx, dim, seriesModel, api);
            });
            var xAxisScale = coordSys.getAxis('x').scale;
            var yAxisScale = coordSys.getAxis('y').scale;
            var xAxisExtent = xAxisScale.getExtent();
            var yAxisExtent = yAxisScale.getExtent();
            var xPointExtent = [
                xAxisScale.parse(areaData.get('x0', idx)),
                xAxisScale.parse(areaData.get('x1', idx))
            ];
            var yPointExtent = [
                yAxisScale.parse(areaData.get('y0', idx)),
                yAxisScale.parse(areaData.get('y1', idx))
            ];
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["asc"](xPointExtent);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["asc"](yPointExtent);
            var overlapped = !(xAxisExtent[0] > xPointExtent[1] || xAxisExtent[1] < xPointExtent[0] || yAxisExtent[0] > yPointExtent[1] || yAxisExtent[1] < yPointExtent[0]);
            // If none of the area is inside coordSys, allClipped is set to be true
            // in layout so that label will not be displayed. See #12591
            var allClipped = !overlapped;
            areaData.setItemLayout(idx, {
                points: points,
                allClipped: allClipped
            });
            var itemModel = areaData.getItemModel(idx);
            var style = itemModel.getModel('itemStyle').getItemStyle();
            var z2 = itemModel.get('z2');
            var color = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getVisualFromData"])(seriesData, 'color');
            if (!style.fill) {
                style.fill = color;
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(style.fill)) {
                    style.fill = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$tool$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["modifyAlpha"](style.fill, 0.4);
                }
            }
            if (!style.stroke) {
                style.stroke = color;
            }
            // Visual
            areaData.setItemVisual(idx, 'style', style);
            areaData.setItemVisual(idx, 'z2', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["retrieve2"])(z2, 0));
        });
        areaData.diff(inner(polygonGroup).data).add(function(idx) {
            var layout = areaData.getItemLayout(idx);
            var z2 = areaData.getItemVisual(idx, 'z2');
            if (!layout.allClipped) {
                var polygon = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Polygon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Polygon$3e$__["Polygon"]({
                    z2: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["retrieve2"])(z2, 0),
                    shape: {
                        points: layout.points
                    }
                });
                areaData.setItemGraphicEl(idx, polygon);
                polygonGroup.group.add(polygon);
            }
        }).update(function(newIdx, oldIdx) {
            var polygon = inner(polygonGroup).data.getItemGraphicEl(oldIdx);
            var layout = areaData.getItemLayout(newIdx);
            var z2 = areaData.getItemVisual(newIdx, 'z2');
            if (!layout.allClipped) {
                if (polygon) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateProps"](polygon, {
                        z2: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["retrieve2"])(z2, 0),
                        shape: {
                            points: layout.points
                        }
                    }, maModel, newIdx);
                } else {
                    polygon = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Polygon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Polygon$3e$__["Polygon"]({
                        shape: {
                            points: layout.points
                        }
                    });
                }
                areaData.setItemGraphicEl(newIdx, polygon);
                polygonGroup.group.add(polygon);
            } else if (polygon) {
                polygonGroup.group.remove(polygon);
            }
        }).remove(function(idx) {
            var polygon = inner(polygonGroup).data.getItemGraphicEl(idx);
            polygonGroup.group.remove(polygon);
        }).execute();
        areaData.eachItemGraphicEl(function(polygon, idx) {
            var itemModel = areaData.getItemModel(idx);
            var style = areaData.getItemVisual(idx, 'style');
            polygon.useStyle(areaData.getItemVisual(idx, 'style'));
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setLabelStyle"])(polygon, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLabelStatesModels"])(itemModel), {
                labelFetcher: maModel,
                labelDataIndex: idx,
                defaultText: areaData.getName(idx) || '',
                inheritColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(style.fill) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$tool$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["modifyAlpha"](style.fill, 1) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].color.neutral99
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setStatesStylesFromModel"])(polygon, itemModel);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toggleHoverEmphasis"])(polygon, null, null, itemModel.get([
                'emphasis',
                'disabled'
            ]));
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getECData"])(polygon).dataModel = maModel;
        });
        inner(polygonGroup).data = areaData;
        polygonGroup.group.silent = maModel.get('silent') || seriesModel.get('silent');
    };
    MarkAreaView.type = 'markArea';
    return MarkAreaView;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$MarkerView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
function createList(coordSys, seriesModel, maModel) {
    var areaData;
    var dataDims;
    var dims = [
        'x0',
        'y0',
        'x1',
        'y1'
    ];
    if (coordSys) {
        var coordDimsInfos_1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["map"])(coordSys && coordSys.dimensions, function(coordDim) {
            var data = seriesModel.getData();
            var info = data.getDimensionInfo(data.mapDimension(coordDim)) || {};
            // In map series data don't have lng and lat dimension. Fallback to same with coordSys
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extend"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extend"])({}, info), {
                name: coordDim,
                // DON'T use ordinalMeta to parse and collect ordinal.
                ordinalMeta: null
            });
        });
        dataDims = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["map"])(dims, function(dim, idx) {
            return {
                name: dim,
                type: coordDimsInfos_1[idx % 2].type
            };
        });
        areaData = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$SeriesData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](dataDims, maModel);
    } else {
        dataDims = [
            {
                name: 'value',
                type: 'float'
            }
        ];
        areaData = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$SeriesData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](dataDims, maModel);
    }
    var optData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["map"])(maModel.get('data'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["curry"])(markAreaTransform, seriesModel, coordSys, maModel));
    if (coordSys) {
        optData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filter"])(optData, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["curry"])(markAreaFilter, coordSys));
    }
    var dimValueGetter = coordSys ? function(item, dimName, dataIndex, dimIndex) {
        // TODO should convert to ParsedValue?
        var rawVal = item.coord[Math.floor(dimIndex / 2)][dimIndex % 2];
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$dataValueHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseDataValue"])(rawVal, dataDims[dimIndex]);
    } : function(item, dimName, dataIndex, dimIndex) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$dataValueHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseDataValue"])(item.value, dataDims[dimIndex]);
    };
    areaData.initData(optData, null, dimValueGetter);
    areaData.hasItemOption = true;
    return areaData;
}
const __TURBOPACK__default__export__ = MarkAreaView;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/marker/installMarkArea.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$checkMarkerInSeries$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/marker/checkMarkerInSeries.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$MarkAreaModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/marker/MarkAreaModel.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$MarkAreaView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/marker/MarkAreaView.js [app-ssr] (ecmascript)");
;
;
;
function install(registers) {
    registers.registerComponentModel(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$MarkAreaModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    registers.registerComponentView(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$MarkAreaView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    registers.registerPreprocessor(function(opt) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$checkMarkerInSeries$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(opt.series, 'markArea')) {
            // Make sure markArea component is enabled
            opt.markArea = opt.markArea || {};
        }
    });
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/marker/installMarkArea.js [app-ssr] (ecmascript) <export install as MarkAreaComponent>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MarkAreaComponent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$installMarkArea$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["install"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$installMarkArea$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/marker/installMarkArea.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=6e80b_echarts_lib_component_marker_128889e0._.js.map