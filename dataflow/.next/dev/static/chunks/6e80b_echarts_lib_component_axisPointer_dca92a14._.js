(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axisPointer/modelHelper.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    "collect",
    ()=>collect,
    "fixValue",
    ()=>fixValue,
    "getAxisInfo",
    ()=>getAxisInfo,
    "getAxisPointerModel",
    ()=>getAxisPointerModel,
    "makeKey",
    ()=>makeKey
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/Model.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
;
;
function collect(ecModel, api) {
    var result = {
        /**
     * key: makeKey(axis.model)
     * value: {
     *      axis,
     *      coordSys,
     *      axisPointerModel,
     *      triggerTooltip,
     *      triggerEmphasis,
     *      involveSeries,
     *      snap,
     *      seriesModels,
     *      seriesDataCount
     * }
     */ axesInfo: {},
        seriesInvolved: false,
        /**
     * key: makeKey(coordSys.model)
     * value: Object: key makeKey(axis.model), value: axisInfo
     */ coordSysAxesInfo: {},
        coordSysMap: {}
    };
    collectAxesInfo(result, ecModel, api);
    // Check seriesInvolved for performance, in case too many series in some chart.
    result.seriesInvolved && collectSeriesInfo(result, ecModel);
    return result;
}
function collectAxesInfo(result, ecModel, api) {
    var globalTooltipModel = ecModel.getComponent('tooltip');
    var globalAxisPointerModel = ecModel.getComponent('axisPointer');
    // links can only be set on global.
    var linksOption = globalAxisPointerModel.get('link', true) || [];
    var linkGroups = [];
    // Collect axes info.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(api.getCoordinateSystems(), function(coordSys) {
        // Some coordinate system do not support axes, like geo.
        if (!coordSys.axisPointerEnabled) {
            return;
        }
        var coordSysKey = makeKey(coordSys.model);
        var axesInfoInCoordSys = result.coordSysAxesInfo[coordSysKey] = {};
        result.coordSysMap[coordSysKey] = coordSys;
        // Set tooltip (like 'cross') is a convenient way to show axisPointer
        // for user. So we enable setting tooltip on coordSys model.
        var coordSysModel = coordSys.model;
        var baseTooltipModel = coordSysModel.getModel('tooltip', globalTooltipModel);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(coordSys.getAxes(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["curry"])(saveTooltipAxisInfo, false, null));
        // If axis tooltip used, choose tooltip axis for each coordSys.
        // Notice this case: coordSys is `grid` but not `cartesian2D` here.
        if (coordSys.getTooltipAxes && globalTooltipModel && baseTooltipModel.get('show')) {
            // Compatible with previous logic. But series.tooltip.trigger: 'axis'
            // or series.data[n].tooltip.trigger: 'axis' are not support any more.
            var triggerAxis = baseTooltipModel.get('trigger') === 'axis';
            var cross = baseTooltipModel.get([
                'axisPointer',
                'type'
            ]) === 'cross';
            var tooltipAxes = coordSys.getTooltipAxes(baseTooltipModel.get([
                'axisPointer',
                'axis'
            ]));
            if (triggerAxis || cross) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(tooltipAxes.baseAxes, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["curry"])(saveTooltipAxisInfo, cross ? 'cross' : true, triggerAxis));
            }
            if (cross) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(tooltipAxes.otherAxes, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["curry"])(saveTooltipAxisInfo, 'cross', false));
            }
        }
        // fromTooltip: true | false | 'cross'
        // triggerTooltip: true | false | null
        function saveTooltipAxisInfo(fromTooltip, triggerTooltip, axis) {
            var axisPointerModel = axis.model.getModel('axisPointer', globalAxisPointerModel);
            var axisPointerShow = axisPointerModel.get('show');
            if (!axisPointerShow || axisPointerShow === 'auto' && !fromTooltip && !isHandleTrigger(axisPointerModel)) {
                return;
            }
            if (triggerTooltip == null) {
                triggerTooltip = axisPointerModel.get('triggerTooltip');
            }
            axisPointerModel = fromTooltip ? makeAxisPointerModel(axis, baseTooltipModel, globalAxisPointerModel, ecModel, fromTooltip, triggerTooltip) : axisPointerModel;
            var snap = axisPointerModel.get('snap');
            var triggerEmphasis = axisPointerModel.get('triggerEmphasis');
            var axisKey = makeKey(axis.model);
            var involveSeries = triggerTooltip || snap || axis.type === 'category';
            // If result.axesInfo[key] exist, override it (tooltip has higher priority).
            var axisInfo = result.axesInfo[axisKey] = {
                key: axisKey,
                axis: axis,
                coordSys: coordSys,
                axisPointerModel: axisPointerModel,
                triggerTooltip: triggerTooltip,
                triggerEmphasis: triggerEmphasis,
                involveSeries: involveSeries,
                snap: snap,
                useHandle: isHandleTrigger(axisPointerModel),
                seriesModels: [],
                linkGroup: null
            };
            axesInfoInCoordSys[axisKey] = axisInfo;
            result.seriesInvolved = result.seriesInvolved || involveSeries;
            var groupIndex = getLinkGroupIndex(linksOption, axis);
            if (groupIndex != null) {
                var linkGroup = linkGroups[groupIndex] || (linkGroups[groupIndex] = {
                    axesInfo: {}
                });
                linkGroup.axesInfo[axisKey] = axisInfo;
                linkGroup.mapper = linksOption[groupIndex].mapper;
                axisInfo.linkGroup = linkGroup;
            }
        }
    });
}
function makeAxisPointerModel(axis, baseTooltipModel, globalAxisPointerModel, ecModel, fromTooltip, triggerTooltip) {
    var tooltipAxisPointerModel = baseTooltipModel.getModel('axisPointer');
    var fields = [
        'type',
        'snap',
        'lineStyle',
        'shadowStyle',
        'label',
        'animation',
        'animationDurationUpdate',
        'animationEasingUpdate',
        'z'
    ];
    var volatileOption = {};
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(fields, function(field) {
        volatileOption[field] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clone"])(tooltipAxisPointerModel.get(field));
    });
    // category axis do not auto snap, otherwise some tick that do not
    // has value can not be hovered. value/time/log axis default snap if
    // triggered from tooltip and trigger tooltip.
    volatileOption.snap = axis.type !== 'category' && !!triggerTooltip;
    // Compatible with previous behavior, tooltip axis does not show label by default.
    // Only these properties can be overridden from tooltip to axisPointer.
    if (tooltipAxisPointerModel.get('type') === 'cross') {
        volatileOption.type = 'line';
    }
    var labelOption = volatileOption.label || (volatileOption.label = {});
    // Follow the convention, do not show label when triggered by tooltip by default.
    labelOption.show == null && (labelOption.show = false);
    if (fromTooltip === 'cross') {
        // When 'cross', both axes show labels.
        var tooltipAxisPointerLabelShow = tooltipAxisPointerModel.get([
            'label',
            'show'
        ]);
        labelOption.show = tooltipAxisPointerLabelShow != null ? tooltipAxisPointerLabelShow : true;
        // If triggerTooltip, this is a base axis, which should better not use cross style
        // (cross style is dashed by default)
        if (!triggerTooltip) {
            var crossStyle = volatileOption.lineStyle = tooltipAxisPointerModel.get('crossStyle');
            crossStyle && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaults"])(labelOption, crossStyle.textStyle);
        }
    }
    return axis.model.getModel('axisPointer', new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](volatileOption, globalAxisPointerModel, ecModel));
}
function collectSeriesInfo(result, ecModel) {
    // Prepare data for axis trigger
    ecModel.eachSeries(function(seriesModel) {
        // Notice this case: this coordSys is `cartesian2D` but not `grid`.
        var coordSys = seriesModel.coordinateSystem;
        var seriesTooltipTrigger = seriesModel.get([
            'tooltip',
            'trigger'
        ], true);
        var seriesTooltipShow = seriesModel.get([
            'tooltip',
            'show'
        ], true);
        if (!coordSys || !coordSys.model // PENDING: radar do not have a model.
         || seriesTooltipTrigger === 'none' || seriesTooltipTrigger === false || seriesTooltipTrigger === 'item' || seriesTooltipShow === false || seriesModel.get([
            'axisPointer',
            'show'
        ], true) === false) {
            return;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(result.coordSysAxesInfo[makeKey(coordSys.model)], function(axisInfo) {
            var axis = axisInfo.axis;
            if (coordSys.getAxis(axis.dim) === axis) {
                axisInfo.seriesModels.push(seriesModel);
                axisInfo.seriesDataCount == null && (axisInfo.seriesDataCount = 0);
                axisInfo.seriesDataCount += seriesModel.getData().count();
            }
        });
    });
}
/**
 * For example:
 * {
 *     axisPointer: {
 *         links: [{
 *             xAxisIndex: [2, 4],
 *             yAxisIndex: 'all'
 *         }, {
 *             xAxisId: ['a5', 'a7'],
 *             xAxisName: 'xxx'
 *         }]
 *     }
 * }
 */ function getLinkGroupIndex(linksOption, axis) {
    var axisModel = axis.model;
    var dim = axis.dim;
    for(var i = 0; i < linksOption.length; i++){
        var linkOption = linksOption[i] || {};
        if (checkPropInLink(linkOption[dim + 'AxisId'], axisModel.id) || checkPropInLink(linkOption[dim + 'AxisIndex'], axisModel.componentIndex) || checkPropInLink(linkOption[dim + 'AxisName'], axisModel.name)) {
            return i;
        }
    }
}
function checkPropInLink(linkPropValue, axisPropValue) {
    return linkPropValue === 'all' || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"])(linkPropValue) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["indexOf"])(linkPropValue, axisPropValue) >= 0 || linkPropValue === axisPropValue;
}
function fixValue(axisModel) {
    var axisInfo = getAxisInfo(axisModel);
    if (!axisInfo) {
        return;
    }
    var axisPointerModel = axisInfo.axisPointerModel;
    var scale = axisInfo.axis.scale;
    var option = axisPointerModel.option;
    var status = axisPointerModel.get('status');
    var value = axisPointerModel.get('value');
    // Parse init value for category and time axis.
    if (value != null) {
        value = scale.parse(value);
    }
    var useHandle = isHandleTrigger(axisPointerModel);
    // If `handle` used, `axisPointer` will always be displayed, so value
    // and status should be initialized.
    if (status == null) {
        option.status = useHandle ? 'show' : 'hide';
    }
    var extent = scale.getExtent().slice();
    extent[0] > extent[1] && extent.reverse();
    if (// Pick a value on axis when initializing.
    value == null || value > extent[1]) {
        // Make handle displayed on the end of the axis when init, which looks better.
        value = extent[1];
    }
    if (value < extent[0]) {
        value = extent[0];
    }
    option.value = value;
    if (useHandle) {
        option.status = axisInfo.axis.scale.isBlank() ? 'hide' : 'show';
    }
}
function getAxisInfo(axisModel) {
    var coordSysAxesInfo = (axisModel.ecModel.getComponent('axisPointer') || {}).coordSysAxesInfo;
    return coordSysAxesInfo && coordSysAxesInfo.axesInfo[makeKey(axisModel)];
}
function getAxisPointerModel(axisModel) {
    var axisInfo = getAxisInfo(axisModel);
    return axisInfo && axisInfo.axisPointerModel;
}
function isHandleTrigger(axisPointerModel) {
    return !!axisPointerModel.get([
        'handle',
        'show'
    ]);
}
function makeKey(model) {
    return model.type + '||' + model.id;
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axisPointer/BaseAxisPointer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/graphic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$modelHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axisPointer/modelHelper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/event.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$throttle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/throttle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js [app-client] (ecmascript)");
;
;
;
;
;
;
var inner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeInner"])();
var clone = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clone"];
var bind = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bind"];
/**
 * Base axis pointer class in 2D.
 */ var BaseAxisPointer = /** @class */ function() {
    function BaseAxisPointer() {
        this._dragging = false;
        /**
     * In px, arbitrary value. Do not set too small,
     * no animation is ok for most cases.
     */ this.animationThreshold = 15;
    }
    /**
   * @implement
   */ BaseAxisPointer.prototype.render = function(axisModel, axisPointerModel, api, forceRender) {
        var value = axisPointerModel.get('value');
        var status = axisPointerModel.get('status');
        // Bind them to `this`, not in closure, otherwise they will not
        // be replaced when user calling setOption in not merge mode.
        this._axisModel = axisModel;
        this._axisPointerModel = axisPointerModel;
        this._api = api;
        // Optimize: `render` will be called repeatedly during mouse move.
        // So it is power consuming if performing `render` each time,
        // especially on mobile device.
        if (!forceRender && this._lastValue === value && this._lastStatus === status) {
            return;
        }
        this._lastValue = value;
        this._lastStatus = status;
        var group = this._group;
        var handle = this._handle;
        if (!status || status === 'hide') {
            // Do not clear here, for animation better.
            group && group.hide();
            handle && handle.hide();
            return;
        }
        group && group.show();
        handle && handle.show();
        // Otherwise status is 'show'
        var elOption = {};
        this.makeElOption(elOption, value, axisModel, axisPointerModel, api);
        // Enable change axis pointer type.
        var graphicKey = elOption.graphicKey;
        if (graphicKey !== this._lastGraphicKey) {
            this.clear(api);
        }
        this._lastGraphicKey = graphicKey;
        var moveAnimation = this._moveAnimation = this.determineAnimation(axisModel, axisPointerModel);
        if (!group) {
            group = this._group = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Group();
            this.createPointerEl(group, elOption, axisModel, axisPointerModel);
            this.createLabelEl(group, elOption, axisModel, axisPointerModel);
            api.getZr().add(group);
        } else {
            var doUpdateProps = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["curry"](updateProps, axisPointerModel, moveAnimation);
            this.updatePointerEl(group, elOption, doUpdateProps);
            this.updateLabelEl(group, elOption, doUpdateProps, axisPointerModel);
        }
        updateMandatoryProps(group, axisPointerModel, true);
        this._renderHandle(value);
    };
    /**
   * @implement
   */ BaseAxisPointer.prototype.remove = function(api) {
        this.clear(api);
    };
    /**
   * @implement
   */ BaseAxisPointer.prototype.dispose = function(api) {
        this.clear(api);
    };
    /**
   * @protected
   */ BaseAxisPointer.prototype.determineAnimation = function(axisModel, axisPointerModel) {
        var animation = axisPointerModel.get('animation');
        var axis = axisModel.axis;
        var isCategoryAxis = axis.type === 'category';
        var useSnap = axisPointerModel.get('snap');
        // Value axis without snap always do not snap.
        if (!useSnap && !isCategoryAxis) {
            return false;
        }
        if (animation === 'auto' || animation == null) {
            var animationThreshold = this.animationThreshold;
            if (isCategoryAxis && axis.getBandWidth() > animationThreshold) {
                return true;
            }
            // It is important to auto animation when snap used. Consider if there is
            // a dataZoom, animation will be disabled when too many points exist, while
            // it will be enabled for better visual effect when little points exist.
            if (useSnap) {
                var seriesDataCount = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$modelHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAxisInfo"](axisModel).seriesDataCount;
                var axisExtent = axis.getExtent();
                // Approximate band width
                return Math.abs(axisExtent[0] - axisExtent[1]) / seriesDataCount > animationThreshold;
            }
            return false;
        }
        return animation === true;
    };
    /**
   * add {pointer, label, graphicKey} to elOption
   * @protected
   */ BaseAxisPointer.prototype.makeElOption = function(elOption, value, axisModel, axisPointerModel, api) {
    // Should be implemenented by sub-class.
    };
    /**
   * @protected
   */ BaseAxisPointer.prototype.createPointerEl = function(group, elOption, axisModel, axisPointerModel) {
        var pointerOption = elOption.pointer;
        if (pointerOption) {
            var pointerEl = inner(group).pointerEl = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[pointerOption.type](clone(elOption.pointer));
            group.add(pointerEl);
        }
    };
    /**
   * @protected
   */ BaseAxisPointer.prototype.createLabelEl = function(group, elOption, axisModel, axisPointerModel) {
        if (elOption.label) {
            var labelEl = inner(group).labelEl = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Text(clone(elOption.label));
            group.add(labelEl);
            updateLabelShowHide(labelEl, axisPointerModel);
        }
    };
    /**
   * @protected
   */ BaseAxisPointer.prototype.updatePointerEl = function(group, elOption, updateProps) {
        var pointerEl = inner(group).pointerEl;
        if (pointerEl && elOption.pointer) {
            pointerEl.setStyle(elOption.pointer.style);
            updateProps(pointerEl, {
                shape: elOption.pointer.shape
            });
        }
    };
    /**
   * @protected
   */ BaseAxisPointer.prototype.updateLabelEl = function(group, elOption, updateProps, axisPointerModel) {
        var labelEl = inner(group).labelEl;
        if (labelEl) {
            labelEl.setStyle(elOption.label.style);
            updateProps(labelEl, {
                // Consider text length change in vertical axis, animation should
                // be used on shape, otherwise the effect will be weird.
                // TODOTODO
                // shape: elOption.label.shape,
                x: elOption.label.x,
                y: elOption.label.y
            });
            updateLabelShowHide(labelEl, axisPointerModel);
        }
    };
    /**
   * @private
   */ BaseAxisPointer.prototype._renderHandle = function(value) {
        if (this._dragging || !this.updateHandleTransform) {
            return;
        }
        var axisPointerModel = this._axisPointerModel;
        var zr = this._api.getZr();
        var handle = this._handle;
        var handleModel = axisPointerModel.getModel('handle');
        var status = axisPointerModel.get('status');
        if (!handleModel.get('show') || !status || status === 'hide') {
            handle && zr.remove(handle);
            this._handle = null;
            return;
        }
        var isInit;
        if (!this._handle) {
            isInit = true;
            handle = this._handle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createIcon(handleModel.get('icon'), {
                cursor: 'move',
                draggable: true,
                onmousemove: function(e) {
                    // For mobile device, prevent screen slider on the button.
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["stop"](e.event);
                },
                onmousedown: bind(this._onHandleDragMove, this, 0, 0),
                drift: bind(this._onHandleDragMove, this),
                ondragend: bind(this._onHandleDragEnd, this)
            });
            zr.add(handle);
        }
        updateMandatoryProps(handle, axisPointerModel, false);
        // update style
        handle.setStyle(handleModel.getItemStyle(null, [
            'color',
            'borderColor',
            'borderWidth',
            'opacity',
            'shadowColor',
            'shadowBlur',
            'shadowOffsetX',
            'shadowOffsetY'
        ]));
        // update position
        var handleSize = handleModel.get('size');
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"](handleSize)) {
            handleSize = [
                handleSize,
                handleSize
            ];
        }
        handle.scaleX = handleSize[0] / 2;
        handle.scaleY = handleSize[1] / 2;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$throttle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createOrUpdate"](this, '_doDispatchAxisPointer', handleModel.get('throttle') || 0, 'fixRate');
        this._moveHandleToValue(value, isInit);
    };
    BaseAxisPointer.prototype._moveHandleToValue = function(value, isInit) {
        updateProps(this._axisPointerModel, !isInit && this._moveAnimation, this._handle, getHandleTransProps(this.getHandleTransform(value, this._axisModel, this._axisPointerModel)));
    };
    BaseAxisPointer.prototype._onHandleDragMove = function(dx, dy) {
        var handle = this._handle;
        if (!handle) {
            return;
        }
        this._dragging = true;
        // Persistent for throttle.
        var trans = this.updateHandleTransform(getHandleTransProps(handle), [
            dx,
            dy
        ], this._axisModel, this._axisPointerModel);
        this._payloadInfo = trans;
        handle.stopAnimation();
        handle.attr(getHandleTransProps(trans));
        inner(handle).lastProp = null;
        this._doDispatchAxisPointer();
    };
    /**
   * Throttled method.
   */ BaseAxisPointer.prototype._doDispatchAxisPointer = function() {
        var handle = this._handle;
        if (!handle) {
            return;
        }
        var payloadInfo = this._payloadInfo;
        var axisModel = this._axisModel;
        this._api.dispatchAction({
            type: 'updateAxisPointer',
            x: payloadInfo.cursorPoint[0],
            y: payloadInfo.cursorPoint[1],
            tooltipOption: payloadInfo.tooltipOption,
            axesInfo: [
                {
                    axisDim: axisModel.axis.dim,
                    axisIndex: axisModel.componentIndex
                }
            ]
        });
    };
    BaseAxisPointer.prototype._onHandleDragEnd = function() {
        this._dragging = false;
        var handle = this._handle;
        if (!handle) {
            return;
        }
        var value = this._axisPointerModel.get('value');
        // Consider snap or categroy axis, handle may be not consistent with
        // axisPointer. So move handle to align the exact value position when
        // drag ended.
        this._moveHandleToValue(value);
        // For the effect: tooltip will be shown when finger holding on handle
        // button, and will be hidden after finger left handle button.
        this._api.dispatchAction({
            type: 'hideTip'
        });
    };
    /**
   * @private
   */ BaseAxisPointer.prototype.clear = function(api) {
        this._lastValue = null;
        this._lastStatus = null;
        var zr = api.getZr();
        var group = this._group;
        var handle = this._handle;
        if (zr && group) {
            this._lastGraphicKey = null;
            group && zr.remove(group);
            handle && zr.remove(handle);
            this._group = null;
            this._handle = null;
            this._payloadInfo = null;
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$throttle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clear"](this, '_doDispatchAxisPointer');
    };
    /**
   * @protected
   */ BaseAxisPointer.prototype.doClear = function() {
    // Implemented by sub-class if necessary.
    };
    BaseAxisPointer.prototype.buildLabel = function(xy, wh, xDimIndex) {
        xDimIndex = xDimIndex || 0;
        return {
            x: xy[xDimIndex],
            y: xy[1 - xDimIndex],
            width: wh[xDimIndex],
            height: wh[1 - xDimIndex]
        };
    };
    return BaseAxisPointer;
}();
function updateProps(animationModel, moveAnimation, el, props) {
    // Animation optimize.
    if (!propsEqual(inner(el).lastProp, props)) {
        inner(el).lastProp = props;
        moveAnimation ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.updateProps(el, props, animationModel) : (el.stopAnimation(), el.attr(props));
    }
}
function propsEqual(lastProps, newProps) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"](lastProps) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"](newProps)) {
        var equals_1 = true;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"](newProps, function(item, key) {
            equals_1 = equals_1 && propsEqual(lastProps[key], item);
        });
        return !!equals_1;
    } else {
        return lastProps === newProps;
    }
}
function updateLabelShowHide(labelEl, axisPointerModel) {
    labelEl[axisPointerModel.get([
        'label',
        'show'
    ]) ? 'show' : 'hide']();
}
function getHandleTransProps(trans) {
    return {
        x: trans.x || 0,
        y: trans.y || 0,
        rotation: trans.rotation || 0
    };
}
function updateMandatoryProps(group, axisPointerModel, silent) {
    var z = axisPointerModel.get('z');
    var zlevel = axisPointerModel.get('zlevel');
    group && group.traverse(function(el) {
        if (el.type !== 'group') {
            z != null && (el.z = z);
            zlevel != null && (el.zlevel = zlevel);
            el.silent = silent;
        }
    });
}
const __TURBOPACK__default__export__ = BaseAxisPointer;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axisPointer/viewHelper.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    "buildCartesianSingleLabelElOption",
    ()=>buildCartesianSingleLabelElOption,
    "buildElStyle",
    ()=>buildElStyle,
    "buildLabelElOption",
    ()=>buildLabelElOption,
    "getTransformedPosition",
    ()=>getTransformedPosition,
    "getValueLabel",
    ()=>getValueLabel,
    "makeLineShape",
    ()=>makeLineShape,
    "makeRectShape",
    ()=>makeRectShape,
    "makeSectorShape",
    ()=>makeSectorShape
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/graphic.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$contain$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/contain/text.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/format.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$matrix$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/matrix.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/axisHelper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$AxisBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axis/AxisBuilder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/label/labelStyle.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
function buildElStyle(axisPointerModel) {
    var axisPointerType = axisPointerModel.get('type');
    var styleModel = axisPointerModel.getModel(axisPointerType + 'Style');
    var style;
    if (axisPointerType === 'line') {
        style = styleModel.getLineStyle();
        style.fill = null;
    } else if (axisPointerType === 'shadow') {
        style = styleModel.getAreaStyle();
        style.stroke = null;
    }
    return style;
}
function buildLabelElOption(elOption, axisModel, axisPointerModel, api, labelPos) {
    var value = axisPointerModel.get('value');
    var text = getValueLabel(value, axisModel.axis, axisModel.ecModel, axisPointerModel.get('seriesDataIndices'), {
        precision: axisPointerModel.get([
            'label',
            'precision'
        ]),
        formatter: axisPointerModel.get([
            'label',
            'formatter'
        ])
    });
    var labelModel = axisPointerModel.getModel('label');
    var paddings = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["normalizeCssArray"](labelModel.get('padding') || 0);
    var font = labelModel.getFont();
    var textRect = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$contain$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBoundingRect"](text, font);
    var position = labelPos.position;
    var width = textRect.width + paddings[1] + paddings[3];
    var height = textRect.height + paddings[0] + paddings[2];
    // Adjust by align.
    var align = labelPos.align;
    align === 'right' && (position[0] -= width);
    align === 'center' && (position[0] -= width / 2);
    var verticalAlign = labelPos.verticalAlign;
    verticalAlign === 'bottom' && (position[1] -= height);
    verticalAlign === 'middle' && (position[1] -= height / 2);
    // Not overflow ec container
    confineInContainer(position, width, height, api);
    var bgColor = labelModel.get('backgroundColor');
    if (!bgColor || bgColor === 'auto') {
        bgColor = axisModel.get([
            'axisLine',
            'lineStyle',
            'color'
        ]);
    }
    elOption.label = {
        // shape: {x: 0, y: 0, width: width, height: height, r: labelModel.get('borderRadius')},
        x: position[0],
        y: position[1],
        style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createTextStyle"])(labelModel, {
            text: text,
            font: font,
            fill: labelModel.getTextColor(),
            padding: paddings,
            backgroundColor: bgColor
        }),
        // Label should be over axisPointer.
        z2: 10
    };
}
// Do not overflow ec container
function confineInContainer(position, width, height, api) {
    var viewWidth = api.getWidth();
    var viewHeight = api.getHeight();
    position[0] = Math.min(position[0] + width, viewWidth) - width;
    position[1] = Math.min(position[1] + height, viewHeight) - height;
    position[0] = Math.max(position[0], 0);
    position[1] = Math.max(position[1], 0);
}
function getValueLabel(value, axis, ecModel, seriesDataIndices, opt) {
    value = axis.scale.parse(value);
    var text = axis.scale.getLabel({
        value: value
    }, {
        // If `precision` is set, width can be fixed (like '12.00500'), which
        // helps to debounce when when moving label.
        precision: opt.precision
    });
    var formatter = opt.formatter;
    if (formatter) {
        var params_1 = {
            value: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAxisRawValue"](axis, {
                value: value
            }),
            axisDimension: axis.dim,
            axisIndex: axis.index,
            seriesData: []
        };
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"](seriesDataIndices, function(idxItem) {
            var series = ecModel.getSeriesByIndex(idxItem.seriesIndex);
            var dataIndex = idxItem.dataIndexInside;
            var dataParams = series && series.getDataParams(dataIndex);
            dataParams && params_1.seriesData.push(dataParams);
        });
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"](formatter)) {
            text = formatter.replace('{value}', text);
        } else if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"](formatter)) {
            text = formatter(params_1);
        }
    }
    return text;
}
function getTransformedPosition(axis, value, layoutInfo) {
    var transform = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$matrix$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"]();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$matrix$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotate"](transform, transform, layoutInfo.rotation);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$matrix$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translate"](transform, transform, layoutInfo.position);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["applyTransform"]([
        axis.dataToCoord(value),
        (layoutInfo.labelOffset || 0) + (layoutInfo.labelDirection || 1) * (layoutInfo.labelMargin || 0)
    ], transform);
}
function buildCartesianSingleLabelElOption(value, elOption, layoutInfo, axisModel, axisPointerModel, api) {
    var textLayout = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$AxisBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].innerTextLayout(layoutInfo.rotation, 0, layoutInfo.labelDirection);
    layoutInfo.labelMargin = axisPointerModel.get([
        'label',
        'margin'
    ]);
    buildLabelElOption(elOption, axisModel, axisPointerModel, api, {
        position: getTransformedPosition(axisModel.axis, value, layoutInfo),
        align: textLayout.textAlign,
        verticalAlign: textLayout.textVerticalAlign
    });
}
function makeLineShape(p1, p2, xDimIndex) {
    xDimIndex = xDimIndex || 0;
    return {
        x1: p1[xDimIndex],
        y1: p1[1 - xDimIndex],
        x2: p2[xDimIndex],
        y2: p2[1 - xDimIndex]
    };
}
function makeRectShape(xy, wh, xDimIndex) {
    xDimIndex = xDimIndex || 0;
    return {
        x: xy[xDimIndex],
        y: xy[1 - xDimIndex],
        width: wh[xDimIndex],
        height: wh[1 - xDimIndex]
    };
}
function makeSectorShape(cx, cy, r0, r, startAngle, endAngle) {
    return {
        cx: cx,
        cy: cy,
        r0: r0,
        r: r,
        startAngle: startAngle,
        endAngle: endAngle,
        clockwise: true
    };
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axisPointer/CartesianAxisPointer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$BaseAxisPointer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axisPointer/BaseAxisPointer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$viewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axisPointer/viewHelper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$cartesian$2f$cartesianAxisHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/cartesian/cartesianAxisHelper.js [app-client] (ecmascript)");
;
;
;
;
var CartesianAxisPointer = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(CartesianAxisPointer, _super);
    function CartesianAxisPointer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
   * @override
   */ CartesianAxisPointer.prototype.makeElOption = function(elOption, value, axisModel, axisPointerModel, api) {
        var axis = axisModel.axis;
        var grid = axis.grid;
        var axisPointerType = axisPointerModel.get('type');
        var otherExtent = getCartesian(grid, axis).getOtherAxis(axis).getGlobalExtent();
        var pixelValue = axis.toGlobalCoord(axis.dataToCoord(value, true));
        if (axisPointerType && axisPointerType !== 'none') {
            var elStyle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$viewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildElStyle"](axisPointerModel);
            var pointerOption = pointerShapeBuilder[axisPointerType](axis, pixelValue, otherExtent);
            pointerOption.style = elStyle;
            elOption.graphicKey = pointerOption.type;
            elOption.pointer = pointerOption;
        }
        var layoutInfo = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$cartesian$2f$cartesianAxisHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["layout"](grid.getRect(), axisModel);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$viewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildCartesianSingleLabelElOption"](value, elOption, layoutInfo, axisModel, axisPointerModel, api);
    };
    /**
   * @override
   */ CartesianAxisPointer.prototype.getHandleTransform = function(value, axisModel, axisPointerModel) {
        var layoutInfo = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$cartesian$2f$cartesianAxisHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["layout"](axisModel.axis.grid.getRect(), axisModel, {
            labelInside: false
        });
        layoutInfo.labelMargin = axisPointerModel.get([
            'handle',
            'margin'
        ]);
        var pos = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$viewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTransformedPosition"](axisModel.axis, value, layoutInfo);
        return {
            x: pos[0],
            y: pos[1],
            rotation: layoutInfo.rotation + (layoutInfo.labelDirection < 0 ? Math.PI : 0)
        };
    };
    /**
   * @override
   */ CartesianAxisPointer.prototype.updateHandleTransform = function(transform, delta, axisModel, axisPointerModel) {
        var axis = axisModel.axis;
        var grid = axis.grid;
        var axisExtent = axis.getGlobalExtent(true);
        var otherExtent = getCartesian(grid, axis).getOtherAxis(axis).getGlobalExtent();
        var dimIndex = axis.dim === 'x' ? 0 : 1;
        var currPosition = [
            transform.x,
            transform.y
        ];
        currPosition[dimIndex] += delta[dimIndex];
        currPosition[dimIndex] = Math.min(axisExtent[1], currPosition[dimIndex]);
        currPosition[dimIndex] = Math.max(axisExtent[0], currPosition[dimIndex]);
        var cursorOtherValue = (otherExtent[1] + otherExtent[0]) / 2;
        var cursorPoint = [
            cursorOtherValue,
            cursorOtherValue
        ];
        cursorPoint[dimIndex] = currPosition[dimIndex];
        // Make tooltip do not overlap axisPointer and in the middle of the grid.
        var tooltipOptions = [
            {
                verticalAlign: 'middle'
            },
            {
                align: 'center'
            }
        ];
        return {
            x: currPosition[0],
            y: currPosition[1],
            rotation: transform.rotation,
            cursorPoint: cursorPoint,
            tooltipOption: tooltipOptions[dimIndex]
        };
    };
    return CartesianAxisPointer;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$BaseAxisPointer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
function getCartesian(grid, axis) {
    var opt = {};
    opt[axis.dim + 'AxisIndex'] = axis.index;
    return grid.getCartesian(opt);
}
var pointerShapeBuilder = {
    line: function(axis, pixelValue, otherExtent) {
        var targetShape = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$viewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeLineShape"]([
            pixelValue,
            otherExtent[0]
        ], [
            pixelValue,
            otherExtent[1]
        ], getAxisDimIndex(axis));
        return {
            type: 'Line',
            subPixelOptimize: true,
            shape: targetShape
        };
    },
    shadow: function(axis, pixelValue, otherExtent) {
        var bandWidth = Math.max(1, axis.getBandWidth());
        var span = otherExtent[1] - otherExtent[0];
        return {
            type: 'Rect',
            shape: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$viewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeRectShape"]([
                pixelValue - bandWidth / 2,
                otherExtent[0]
            ], [
                bandWidth,
                span
            ], getAxisDimIndex(axis))
        };
    }
};
function getAxisDimIndex(axis) {
    return axis.dim === 'x' ? 0 : 1;
}
const __TURBOPACK__default__export__ = CartesianAxisPointer;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axisPointer/AxisPointerModel.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/Component.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/tokens.js [app-client] (ecmascript)");
;
;
;
var AxisPointerModel = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(AxisPointerModel, _super);
    function AxisPointerModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = AxisPointerModel.type;
        return _this;
    }
    AxisPointerModel.type = 'axisPointer';
    AxisPointerModel.defaultOption = {
        // 'auto' means that show when triggered by tooltip or handle.
        show: 'auto',
        // zlevel: 0,
        z: 50,
        type: 'line',
        // axispointer triggered by tootip determine snap automatically,
        // see `modelHelper`.
        snap: false,
        triggerTooltip: true,
        triggerEmphasis: true,
        value: null,
        status: null,
        link: [],
        // Do not set 'auto' here, otherwise global animation: false
        // will not effect at this axispointer.
        animation: null,
        animationDurationUpdate: 200,
        lineStyle: {
            color: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].color.border,
            width: 1,
            type: 'dashed'
        },
        shadowStyle: {
            color: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].color.shadowTint
        },
        label: {
            show: true,
            formatter: null,
            precision: 'auto',
            margin: 3,
            color: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].color.neutral00,
            padding: [
                5,
                7,
                5,
                7
            ],
            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].color.accent60,
            borderColor: null,
            borderWidth: 0,
            borderRadius: 3
        },
        handle: {
            show: false,
            // eslint-disable-next-line
            icon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z',
            size: 45,
            // handle margin is from symbol center to axis, which is stable when circular move.
            margin: 50,
            // color: '#1b8bbd'
            // color: '#2f4554'
            color: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].color.accent40,
            // For mobile performance
            throttle: 40
        }
    };
    return AxisPointerModel;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = AxisPointerModel;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axisPointer/globalListener.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    "register",
    ()=>register,
    "unregister",
    ()=>unregister
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/env.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js [app-client] (ecmascript)");
;
;
;
var inner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeInner"])();
var each = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"];
function register(key, api, handler) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].node) {
        return;
    }
    var zr = api.getZr();
    inner(zr).records || (inner(zr).records = {});
    initGlobalListeners(zr, api);
    var record = inner(zr).records[key] || (inner(zr).records[key] = {});
    record.handler = handler;
}
function initGlobalListeners(zr, api) {
    if (inner(zr).initialized) {
        return;
    }
    inner(zr).initialized = true;
    useHandler('click', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["curry"](doEnter, 'click'));
    useHandler('mousemove', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["curry"](doEnter, 'mousemove'));
    // useHandler('mouseout', onLeave);
    useHandler('globalout', onLeave);
    function useHandler(eventType, cb) {
        zr.on(eventType, function(e) {
            var dis = makeDispatchAction(api);
            each(inner(zr).records, function(record) {
                record && cb(record, e, dis.dispatchAction);
            });
            dispatchTooltipFinally(dis.pendings, api);
        });
    }
}
function dispatchTooltipFinally(pendings, api) {
    var showLen = pendings.showTip.length;
    var hideLen = pendings.hideTip.length;
    var actuallyPayload;
    if (showLen) {
        actuallyPayload = pendings.showTip[showLen - 1];
    } else if (hideLen) {
        actuallyPayload = pendings.hideTip[hideLen - 1];
    }
    if (actuallyPayload) {
        actuallyPayload.dispatchAction = null;
        api.dispatchAction(actuallyPayload);
    }
}
function onLeave(record, e, dispatchAction) {
    record.handler('leave', null, dispatchAction);
}
function doEnter(currTrigger, record, e, dispatchAction) {
    record.handler(currTrigger, e, dispatchAction);
}
function makeDispatchAction(api) {
    var pendings = {
        showTip: [],
        hideTip: []
    };
    // FIXME
    // better approach?
    // 'showTip' and 'hideTip' can be triggered by axisPointer and tooltip,
    // which may be conflict, (axisPointer call showTip but tooltip call hideTip);
    // So we have to add "final stage" to merge those dispatched actions.
    var dispatchAction = function(payload) {
        var pendingList = pendings[payload.type];
        if (pendingList) {
            pendingList.push(payload);
        } else {
            payload.dispatchAction = dispatchAction;
            api.dispatchAction(payload);
        }
    };
    return {
        dispatchAction: dispatchAction,
        pendings: pendings
    };
}
function unregister(key, api) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].node) {
        return;
    }
    var zr = api.getZr();
    var record = (inner(zr).records || {})[key];
    if (record) {
        inner(zr).records[key] = null;
    }
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axisPointer/AxisPointerView.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$globalListener$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axisPointer/globalListener.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/view/Component.js [app-client] (ecmascript)");
;
;
;
var AxisPointerView = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(AxisPointerView, _super);
    function AxisPointerView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = AxisPointerView.type;
        return _this;
    }
    AxisPointerView.prototype.render = function(globalAxisPointerModel, ecModel, api) {
        var globalTooltipModel = ecModel.getComponent('tooltip');
        var triggerOn = globalAxisPointerModel.get('triggerOn') || globalTooltipModel && globalTooltipModel.get('triggerOn') || 'mousemove|click';
        // Register global listener in AxisPointerView to enable
        // AxisPointerView to be independent to Tooltip.
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$globalListener$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["register"]('axisPointer', api, function(currTrigger, e, dispatchAction) {
            // If 'none', it is not controlled by mouse totally.
            if (triggerOn !== 'none' && (currTrigger === 'leave' || triggerOn.indexOf(currTrigger) >= 0)) {
                dispatchAction({
                    type: 'updateAxisPointer',
                    currTrigger: currTrigger,
                    x: e && e.offsetX,
                    y: e && e.offsetY
                });
            }
        });
    };
    AxisPointerView.prototype.remove = function(ecModel, api) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$globalListener$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unregister"]('axisPointer', api);
    };
    AxisPointerView.prototype.dispose = function(ecModel, api) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$globalListener$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unregister"]('axisPointer', api);
    };
    AxisPointerView.type = 'axisPointer';
    return AxisPointerView;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = AxisPointerView;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axisPointer/findPointFromSeries.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    ()=>findPointFromSeries
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js [app-client] (ecmascript)");
;
;
function findPointFromSeries(finder, ecModel) {
    var point = [];
    var seriesIndex = finder.seriesIndex;
    var seriesModel;
    if (seriesIndex == null || !(seriesModel = ecModel.getSeriesByIndex(seriesIndex))) {
        return {
            point: []
        };
    }
    var data = seriesModel.getData();
    var dataIndex = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryDataIndex"](data, finder);
    if (dataIndex == null || dataIndex < 0 || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"](dataIndex)) {
        return {
            point: []
        };
    }
    var el = data.getItemGraphicEl(dataIndex);
    var coordSys = seriesModel.coordinateSystem;
    if (seriesModel.getTooltipPosition) {
        point = seriesModel.getTooltipPosition(dataIndex) || [];
    } else if (coordSys && coordSys.dataToPoint) {
        if (finder.isStacked) {
            var baseAxis = coordSys.getBaseAxis();
            var valueAxis = coordSys.getOtherAxis(baseAxis);
            var valueAxisDim = valueAxis.dim;
            var baseAxisDim = baseAxis.dim;
            var baseDataOffset = valueAxisDim === 'x' || valueAxisDim === 'radius' ? 1 : 0;
            var baseDim = data.mapDimension(baseAxisDim);
            var stackedData = [];
            stackedData[baseDataOffset] = data.get(baseDim, dataIndex);
            stackedData[1 - baseDataOffset] = data.get(data.getCalculationInfo('stackResultDimension'), dataIndex);
            point = coordSys.dataToPoint(stackedData) || [];
        } else {
            point = coordSys.dataToPoint(data.getValues(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"](coordSys.dimensions, function(dim) {
                return data.mapDimension(dim);
            }), dataIndex)) || [];
        }
    } else if (el) {
        // Use graphic bounding rect
        var rect = el.getBoundingRect().clone();
        rect.applyTransform(el.transform);
        point = [
            rect.x + rect.width / 2,
            rect.y + rect.height / 2
        ];
    }
    return {
        point: point,
        el: el
    };
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axisPointer/axisTrigger.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    ()=>axisTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$modelHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axisPointer/modelHelper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$findPointFromSeries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axisPointer/findPointFromSeries.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
;
;
;
;
var inner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeInner"])();
function axisTrigger(payload, ecModel, api) {
    var currTrigger = payload.currTrigger;
    var point = [
        payload.x,
        payload.y
    ];
    var finder = payload;
    var dispatchAction = payload.dispatchAction || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bind"])(api.dispatchAction, api);
    var coordSysAxesInfo = ecModel.getComponent('axisPointer').coordSysAxesInfo;
    // Pending
    // See #6121. But we are not able to reproduce it yet.
    if (!coordSysAxesInfo) {
        return;
    }
    if (illegalPoint(point)) {
        // Used in the default behavior of `connection`: use the sample seriesIndex
        // and dataIndex. And also used in the tooltipView trigger.
        point = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$findPointFromSeries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
            seriesIndex: finder.seriesIndex,
            // Do not use dataIndexInside from other ec instance.
            // FIXME: auto detect it?
            dataIndex: finder.dataIndex
        }, ecModel).point;
    }
    var isIllegalPoint = illegalPoint(point);
    // Axis and value can be specified when calling dispatchAction({type: 'updateAxisPointer'}).
    // Notice: In this case, it is difficult to get the `point` (which is necessary to show
    // tooltip, so if point is not given, we just use the point found by sample seriesIndex
    // and dataIndex.
    var inputAxesInfo = finder.axesInfo;
    var axesInfo = coordSysAxesInfo.axesInfo;
    var shouldHide = currTrigger === 'leave' || illegalPoint(point);
    var outputPayload = {};
    var showValueMap = {};
    var dataByCoordSys = {
        list: [],
        map: {}
    };
    var updaters = {
        showPointer: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["curry"])(showPointer, showValueMap),
        showTooltip: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["curry"])(showTooltip, dataByCoordSys)
    };
    // Process for triggered axes.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(coordSysAxesInfo.coordSysMap, function(coordSys, coordSysKey) {
        // If a point given, it must be contained by the coordinate system.
        var coordSysContainsPoint = isIllegalPoint || coordSys.containPoint(point);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(coordSysAxesInfo.coordSysAxesInfo[coordSysKey], function(axisInfo, key) {
            var axis = axisInfo.axis;
            var inputAxisInfo = findInputAxisInfo(inputAxesInfo, axisInfo);
            // If no inputAxesInfo, no axis is restricted.
            if (!shouldHide && coordSysContainsPoint && (!inputAxesInfo || inputAxisInfo)) {
                var val = inputAxisInfo && inputAxisInfo.value;
                if (val == null && !isIllegalPoint) {
                    val = axis.pointToData(point);
                }
                val != null && processOnAxis(axisInfo, val, updaters, false, outputPayload);
            }
        });
    });
    // Process for linked axes.
    var linkTriggers = {};
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(axesInfo, function(tarAxisInfo, tarKey) {
        var linkGroup = tarAxisInfo.linkGroup;
        // If axis has been triggered in the previous stage, it should not be triggered by link.
        if (linkGroup && !showValueMap[tarKey]) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(linkGroup.axesInfo, function(srcAxisInfo, srcKey) {
                var srcValItem = showValueMap[srcKey];
                // If srcValItem exist, source axis is triggered, so link to target axis.
                if (srcAxisInfo !== tarAxisInfo && srcValItem) {
                    var val = srcValItem.value;
                    linkGroup.mapper && (val = tarAxisInfo.axis.scale.parse(linkGroup.mapper(val, makeMapperParam(srcAxisInfo), makeMapperParam(tarAxisInfo))));
                    linkTriggers[tarAxisInfo.key] = val;
                }
            });
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(linkTriggers, function(val, tarKey) {
        processOnAxis(axesInfo[tarKey], val, updaters, true, outputPayload);
    });
    updateModelActually(showValueMap, axesInfo, outputPayload);
    dispatchTooltipActually(dataByCoordSys, point, payload, dispatchAction);
    dispatchHighDownActually(axesInfo, dispatchAction, api);
    return outputPayload;
}
function processOnAxis(axisInfo, newValue, updaters, noSnap, outputFinder) {
    var axis = axisInfo.axis;
    if (axis.scale.isBlank() || !axis.containData(newValue)) {
        return;
    }
    if (!axisInfo.involveSeries) {
        updaters.showPointer(axisInfo, newValue);
        return;
    }
    // Heavy calculation. So put it after axis.containData checking.
    var payloadInfo = buildPayloadsBySeries(newValue, axisInfo);
    var payloadBatch = payloadInfo.payloadBatch;
    var snapToValue = payloadInfo.snapToValue;
    // Fill content of event obj for echarts.connect.
    // By default use the first involved series data as a sample to connect.
    if (payloadBatch[0] && outputFinder.seriesIndex == null) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extend"])(outputFinder, payloadBatch[0]);
    }
    // If no linkSource input, this process is for collecting link
    // target, where snap should not be accepted.
    if (!noSnap && axisInfo.snap) {
        if (axis.containData(snapToValue) && snapToValue != null) {
            newValue = snapToValue;
        }
    }
    updaters.showPointer(axisInfo, newValue, payloadBatch);
    // Tooltip should always be snapToValue, otherwise there will be
    // incorrect "axis value ~ series value" mapping displayed in tooltip.
    updaters.showTooltip(axisInfo, payloadInfo, snapToValue);
}
function buildPayloadsBySeries(value, axisInfo) {
    var axis = axisInfo.axis;
    var dim = axis.dim;
    var snapToValue = value;
    var payloadBatch = [];
    var minDist = Number.MAX_VALUE;
    var minDiff = -1;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(axisInfo.seriesModels, function(series, idx) {
        var dataDim = series.getData().mapDimensionsAll(dim);
        var seriesNestestValue;
        var dataIndices;
        if (series.getAxisTooltipData) {
            var result = series.getAxisTooltipData(dataDim, value, axis);
            dataIndices = result.dataIndices;
            seriesNestestValue = result.nestestValue;
        } else {
            dataIndices = series.indicesOfNearest(dim, dataDim[0], value, // Add a threshold to avoid find the wrong dataIndex
            // when data length is not same.
            // false,
            axis.type === 'category' ? 0.5 : null);
            if (!dataIndices.length) {
                return;
            }
            seriesNestestValue = series.getData().get(dataDim[0], dataIndices[0]);
        }
        if (seriesNestestValue == null || !isFinite(seriesNestestValue)) {
            return;
        }
        var diff = value - seriesNestestValue;
        var dist = Math.abs(diff);
        // Consider category case
        if (dist <= minDist) {
            if (dist < minDist || diff >= 0 && minDiff < 0) {
                minDist = dist;
                minDiff = diff;
                snapToValue = seriesNestestValue;
                payloadBatch.length = 0;
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(dataIndices, function(dataIndex) {
                payloadBatch.push({
                    seriesIndex: series.seriesIndex,
                    dataIndexInside: dataIndex,
                    dataIndex: series.getData().getRawIndex(dataIndex)
                });
            });
        }
    });
    return {
        payloadBatch: payloadBatch,
        snapToValue: snapToValue
    };
}
function showPointer(showValueMap, axisInfo, value, payloadBatch) {
    showValueMap[axisInfo.key] = {
        value: value,
        payloadBatch: payloadBatch
    };
}
function showTooltip(dataByCoordSys, axisInfo, payloadInfo, value) {
    var payloadBatch = payloadInfo.payloadBatch;
    var axis = axisInfo.axis;
    var axisModel = axis.model;
    var axisPointerModel = axisInfo.axisPointerModel;
    // If no data, do not create anything in dataByCoordSys,
    // whose length will be used to judge whether dispatch action.
    if (!axisInfo.triggerTooltip || !payloadBatch.length) {
        return;
    }
    var coordSysModel = axisInfo.coordSys.model;
    var coordSysKey = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$modelHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeKey"](coordSysModel);
    var coordSysItem = dataByCoordSys.map[coordSysKey];
    if (!coordSysItem) {
        coordSysItem = dataByCoordSys.map[coordSysKey] = {
            coordSysId: coordSysModel.id,
            coordSysIndex: coordSysModel.componentIndex,
            coordSysType: coordSysModel.type,
            coordSysMainType: coordSysModel.mainType,
            dataByAxis: []
        };
        dataByCoordSys.list.push(coordSysItem);
    }
    coordSysItem.dataByAxis.push({
        axisDim: axis.dim,
        axisIndex: axisModel.componentIndex,
        axisType: axisModel.type,
        axisId: axisModel.id,
        value: value,
        // Caustion: viewHelper.getValueLabel is actually on "view stage", which
        // depends that all models have been updated. So it should not be performed
        // here. Considering axisPointerModel used here is volatile, which is hard
        // to be retrieve in TooltipView, we prepare parameters here.
        valueLabelOpt: {
            precision: axisPointerModel.get([
                'label',
                'precision'
            ]),
            formatter: axisPointerModel.get([
                'label',
                'formatter'
            ])
        },
        seriesDataIndices: payloadBatch.slice()
    });
}
function updateModelActually(showValueMap, axesInfo, outputPayload) {
    var outputAxesInfo = outputPayload.axesInfo = [];
    // Basic logic: If no 'show' required, 'hide' this axisPointer.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(axesInfo, function(axisInfo, key) {
        var option = axisInfo.axisPointerModel.option;
        var valItem = showValueMap[key];
        if (valItem) {
            !axisInfo.useHandle && (option.status = 'show');
            option.value = valItem.value;
            // For label formatter param and highlight.
            option.seriesDataIndices = (valItem.payloadBatch || []).slice();
        } else {
            // If hide, value still need to be set, consider
            // click legend to toggle axis blank.
            !axisInfo.useHandle && (option.status = 'hide');
        }
        // If status is 'hide', should be no info in payload.
        option.status === 'show' && outputAxesInfo.push({
            axisDim: axisInfo.axis.dim,
            axisIndex: axisInfo.axis.model.componentIndex,
            value: option.value
        });
    });
}
function dispatchTooltipActually(dataByCoordSys, point, payload, dispatchAction) {
    // Basic logic: If no showTip required, hideTip will be dispatched.
    if (illegalPoint(point) || !dataByCoordSys.list.length) {
        dispatchAction({
            type: 'hideTip'
        });
        return;
    }
    // In most case only one axis (or event one series is used). It is
    // convenient to fetch payload.seriesIndex and payload.dataIndex
    // directly. So put the first seriesIndex and dataIndex of the first
    // axis on the payload.
    var sampleItem = ((dataByCoordSys.list[0].dataByAxis[0] || {}).seriesDataIndices || [])[0] || {};
    dispatchAction({
        type: 'showTip',
        escapeConnect: true,
        x: point[0],
        y: point[1],
        tooltipOption: payload.tooltipOption,
        position: payload.position,
        dataIndexInside: sampleItem.dataIndexInside,
        dataIndex: sampleItem.dataIndex,
        seriesIndex: sampleItem.seriesIndex,
        dataByCoordSys: dataByCoordSys.list
    });
}
function dispatchHighDownActually(axesInfo, dispatchAction, api) {
    // FIXME
    // highlight status modification should be a stage of main process?
    // (Consider confilct (e.g., legend and axisPointer) and setOption)
    var zr = api.getZr();
    var highDownKey = 'axisPointerLastHighlights';
    var lastHighlights = inner(zr)[highDownKey] || {};
    var newHighlights = inner(zr)[highDownKey] = {};
    // Update highlight/downplay status according to axisPointer model.
    // Build hash map and remove duplicate incidentally.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(axesInfo, function(axisInfo, key) {
        var option = axisInfo.axisPointerModel.option;
        option.status === 'show' && axisInfo.triggerEmphasis && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(option.seriesDataIndices, function(batchItem) {
            var key = batchItem.seriesIndex + ' | ' + batchItem.dataIndex;
            newHighlights[key] = batchItem;
        });
    });
    // Diff.
    var toHighlight = [];
    var toDownplay = [];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(lastHighlights, function(batchItem, key) {
        !newHighlights[key] && toDownplay.push(batchItem);
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(newHighlights, function(batchItem, key) {
        !lastHighlights[key] && toHighlight.push(batchItem);
    });
    toDownplay.length && api.dispatchAction({
        type: 'downplay',
        escapeConnect: true,
        // Not blur others when highlight in axisPointer.
        notBlur: true,
        batch: toDownplay
    });
    toHighlight.length && api.dispatchAction({
        type: 'highlight',
        escapeConnect: true,
        // Not blur others when highlight in axisPointer.
        notBlur: true,
        batch: toHighlight
    });
}
function findInputAxisInfo(inputAxesInfo, axisInfo) {
    for(var i = 0; i < (inputAxesInfo || []).length; i++){
        var inputAxisInfo = inputAxesInfo[i];
        if (axisInfo.axis.dim === inputAxisInfo.axisDim && axisInfo.axis.model.componentIndex === inputAxisInfo.axisIndex) {
            return inputAxisInfo;
        }
    }
}
function makeMapperParam(axisInfo) {
    var axisModel = axisInfo.axis.model;
    var item = {};
    var dim = item.axisDim = axisInfo.axis.dim;
    item.axisIndex = item[dim + 'AxisIndex'] = axisModel.componentIndex;
    item.axisName = item[dim + 'AxisName'] = axisModel.name;
    item.axisId = item[dim + 'AxisId'] = axisModel.id;
    return item;
}
function illegalPoint(point) {
    return !point || point[0] == null || isNaN(point[0]) || point[1] == null || isNaN(point[1]);
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axisPointer/install.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$AxisView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axis/AxisView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$CartesianAxisPointer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axisPointer/CartesianAxisPointer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$AxisPointerModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axisPointer/AxisPointerModel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$AxisPointerView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axisPointer/AxisPointerView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$modelHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axisPointer/modelHelper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$axisTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axisPointer/axisTrigger.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
function install(registers) {
    // CartesianAxisPointer is not supposed to be required here. But consider
    // echarts.simple.js and online build tooltip, which only require gridSimple,
    // CartesianAxisPointer should be able to required somewhere.
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$AxisView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].registerAxisPointerClass('CartesianAxisPointer', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$CartesianAxisPointer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    registers.registerComponentModel(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$AxisPointerModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    registers.registerComponentView(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$AxisPointerView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    registers.registerPreprocessor(function(option) {
        // Always has a global axisPointerModel for default setting.
        if (option) {
            (!option.axisPointer || option.axisPointer.length === 0) && (option.axisPointer = {});
            var link = option.axisPointer.link;
            // Normalize to array to avoid object mergin. But if link
            // is not set, remain null/undefined, otherwise it will
            // override existent link setting.
            if (link && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"])(link)) {
                option.axisPointer.link = [
                    link
                ];
            }
        }
    });
    // This process should proformed after coordinate systems created
    // and series data processed. So put it on statistic processing stage.
    registers.registerProcessor(registers.PRIORITY.PROCESSOR.STATISTIC, function(ecModel, api) {
        // Build axisPointerModel, mergin tooltip.axisPointer model for each axis.
        // allAxesInfo should be updated when setOption performed.
        ecModel.getComponent('axisPointer').coordSysAxesInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$modelHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collect"])(ecModel, api);
    });
    // Broadcast to all views.
    registers.registerAction({
        type: 'updateAxisPointer',
        event: 'updateAxisPointer',
        update: ':updateAxisPointer'
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$axisTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axisPointer/PolarAxisPointer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$BaseAxisPointer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axisPointer/BaseAxisPointer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/graphic.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$viewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axisPointer/viewHelper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$matrix$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/matrix.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$AxisBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axis/AxisBuilder.js [app-client] (ecmascript)");
;
;
;
;
;
;
var PolarAxisPointer = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(PolarAxisPointer, _super);
    function PolarAxisPointer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
   * @override
   */ PolarAxisPointer.prototype.makeElOption = function(elOption, value, axisModel, axisPointerModel, api) {
        var axis = axisModel.axis;
        if (axis.dim === 'angle') {
            this.animationThreshold = Math.PI / 18;
        }
        var polar = axis.polar;
        var otherAxis = polar.getOtherAxis(axis);
        var otherExtent = otherAxis.getExtent();
        var coordValue = axis.dataToCoord(value);
        var axisPointerType = axisPointerModel.get('type');
        if (axisPointerType && axisPointerType !== 'none') {
            var elStyle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$viewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildElStyle"](axisPointerModel);
            var pointerOption = pointerShapeBuilder[axisPointerType](axis, polar, coordValue, otherExtent);
            pointerOption.style = elStyle;
            elOption.graphicKey = pointerOption.type;
            elOption.pointer = pointerOption;
        }
        var labelMargin = axisPointerModel.get([
            'label',
            'margin'
        ]);
        var labelPos = getLabelPosition(value, axisModel, axisPointerModel, polar, labelMargin);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$viewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildLabelElOption"](elOption, axisModel, axisPointerModel, api, labelPos);
    };
    return PolarAxisPointer;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$BaseAxisPointer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
;
function getLabelPosition(value, axisModel, axisPointerModel, polar, labelMargin) {
    var axis = axisModel.axis;
    var coord = axis.dataToCoord(value);
    var axisAngle = polar.getAngleAxis().getExtent()[0];
    axisAngle = axisAngle / 180 * Math.PI;
    var radiusExtent = polar.getRadiusAxis().getExtent();
    var position;
    var align;
    var verticalAlign;
    if (axis.dim === 'radius') {
        var transform = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$matrix$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"]();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$matrix$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotate"](transform, transform, axisAngle);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$matrix$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translate"](transform, transform, [
            polar.cx,
            polar.cy
        ]);
        position = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["applyTransform"]([
            coord,
            -labelMargin
        ], transform);
        var labelRotation = axisModel.getModel('axisLabel').get('rotate') || 0;
        // @ts-ignore
        var labelLayout = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$AxisBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].innerTextLayout(axisAngle, labelRotation * Math.PI / 180, -1);
        align = labelLayout.textAlign;
        verticalAlign = labelLayout.textVerticalAlign;
    } else {
        // angle axis
        var r = radiusExtent[1];
        position = polar.coordToPoint([
            r + labelMargin,
            coord
        ]);
        var cx = polar.cx;
        var cy = polar.cy;
        align = Math.abs(position[0] - cx) / r < 0.3 ? 'center' : position[0] > cx ? 'left' : 'right';
        verticalAlign = Math.abs(position[1] - cy) / r < 0.3 ? 'middle' : position[1] > cy ? 'top' : 'bottom';
    }
    return {
        position: position,
        align: align,
        verticalAlign: verticalAlign
    };
}
var pointerShapeBuilder = {
    line: function(axis, polar, coordValue, otherExtent) {
        return axis.dim === 'angle' ? {
            type: 'Line',
            shape: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$viewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeLineShape"](polar.coordToPoint([
                otherExtent[0],
                coordValue
            ]), polar.coordToPoint([
                otherExtent[1],
                coordValue
            ]))
        } : {
            type: 'Circle',
            shape: {
                cx: polar.cx,
                cy: polar.cy,
                r: coordValue
            }
        };
    },
    shadow: function(axis, polar, coordValue, otherExtent) {
        var bandWidth = Math.max(1, axis.getBandWidth());
        var radian = Math.PI / 180;
        return axis.dim === 'angle' ? {
            type: 'Sector',
            shape: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$viewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeSectorShape"](polar.cx, polar.cy, otherExtent[0], otherExtent[1], // In ECharts y is negative if angle is positive
            (-coordValue - bandWidth / 2) * radian, (-coordValue + bandWidth / 2) * radian)
        } : {
            type: 'Sector',
            shape: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$viewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeSectorShape"](polar.cx, polar.cy, coordValue - bandWidth / 2, coordValue + bandWidth / 2, 0, Math.PI * 2)
        };
    }
};
const __TURBOPACK__default__export__ = PolarAxisPointer;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axisPointer/SingleAxisPointer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$BaseAxisPointer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axisPointer/BaseAxisPointer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$viewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axisPointer/viewHelper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$single$2f$singleAxisHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/single/singleAxisHelper.js [app-client] (ecmascript)");
;
;
;
;
var XY = [
    'x',
    'y'
];
var WH = [
    'width',
    'height'
];
var SingleAxisPointer = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(SingleAxisPointer, _super);
    function SingleAxisPointer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
   * @override
   */ SingleAxisPointer.prototype.makeElOption = function(elOption, value, axisModel, axisPointerModel, api) {
        var axis = axisModel.axis;
        var coordSys = axis.coordinateSystem;
        var otherExtent = getGlobalExtent(coordSys, 1 - getPointDimIndex(axis));
        var pixelValue = coordSys.dataToPoint(value)[0];
        var axisPointerType = axisPointerModel.get('type');
        if (axisPointerType && axisPointerType !== 'none') {
            var elStyle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$viewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildElStyle"](axisPointerModel);
            var pointerOption = pointerShapeBuilder[axisPointerType](axis, pixelValue, otherExtent);
            pointerOption.style = elStyle;
            elOption.graphicKey = pointerOption.type;
            elOption.pointer = pointerOption;
        }
        var layoutInfo = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$single$2f$singleAxisHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["layout"](axisModel);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$viewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildCartesianSingleLabelElOption"](value, elOption, layoutInfo, axisModel, axisPointerModel, api);
    };
    /**
   * @override
   */ SingleAxisPointer.prototype.getHandleTransform = function(value, axisModel, axisPointerModel) {
        var layoutInfo = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$single$2f$singleAxisHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["layout"](axisModel, {
            labelInside: false
        });
        layoutInfo.labelMargin = axisPointerModel.get([
            'handle',
            'margin'
        ]);
        var position = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$viewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTransformedPosition"](axisModel.axis, value, layoutInfo);
        return {
            x: position[0],
            y: position[1],
            rotation: layoutInfo.rotation + (layoutInfo.labelDirection < 0 ? Math.PI : 0)
        };
    };
    /**
   * @override
   */ SingleAxisPointer.prototype.updateHandleTransform = function(transform, delta, axisModel, axisPointerModel) {
        var axis = axisModel.axis;
        var coordSys = axis.coordinateSystem;
        var dimIndex = getPointDimIndex(axis);
        var axisExtent = getGlobalExtent(coordSys, dimIndex);
        var currPosition = [
            transform.x,
            transform.y
        ];
        currPosition[dimIndex] += delta[dimIndex];
        currPosition[dimIndex] = Math.min(axisExtent[1], currPosition[dimIndex]);
        currPosition[dimIndex] = Math.max(axisExtent[0], currPosition[dimIndex]);
        var otherExtent = getGlobalExtent(coordSys, 1 - dimIndex);
        var cursorOtherValue = (otherExtent[1] + otherExtent[0]) / 2;
        var cursorPoint = [
            cursorOtherValue,
            cursorOtherValue
        ];
        cursorPoint[dimIndex] = currPosition[dimIndex];
        return {
            x: currPosition[0],
            y: currPosition[1],
            rotation: transform.rotation,
            cursorPoint: cursorPoint,
            tooltipOption: {
                verticalAlign: 'middle'
            }
        };
    };
    return SingleAxisPointer;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$BaseAxisPointer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
var pointerShapeBuilder = {
    line: function(axis, pixelValue, otherExtent) {
        var targetShape = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$viewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeLineShape"]([
            pixelValue,
            otherExtent[0]
        ], [
            pixelValue,
            otherExtent[1]
        ], getPointDimIndex(axis));
        return {
            type: 'Line',
            subPixelOptimize: true,
            shape: targetShape
        };
    },
    shadow: function(axis, pixelValue, otherExtent) {
        var bandWidth = axis.getBandWidth();
        var span = otherExtent[1] - otherExtent[0];
        return {
            type: 'Rect',
            shape: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$viewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeRectShape"]([
                pixelValue - bandWidth / 2,
                otherExtent[0]
            ], [
                bandWidth,
                span
            ], getPointDimIndex(axis))
        };
    }
};
function getPointDimIndex(axis) {
    return axis.isHorizontal() ? 0 : 1;
}
function getGlobalExtent(coordSys, dimIndex) {
    var rect = coordSys.getRect();
    return [
        rect[XY[dimIndex]],
        rect[XY[dimIndex]] + rect[WH[dimIndex]]
    ];
}
const __TURBOPACK__default__export__ = SingleAxisPointer;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axisPointer/install.js [app-client] (ecmascript) <export install as AxisPointerComponent>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AxisPointerComponent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["install"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axisPointer/install.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=6e80b_echarts_lib_component_axisPointer_dca92a14._.js.map