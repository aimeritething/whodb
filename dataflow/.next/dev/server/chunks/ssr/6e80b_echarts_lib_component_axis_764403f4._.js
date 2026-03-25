module.exports = [
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axis/axisBreakHelper.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    "getAxisBreakHelper",
    ()=>getAxisBreakHelper,
    "registerAxisBreakHelperImpl",
    ()=>registerAxisBreakHelperImpl
]);
var _impl = null;
function registerAxisBreakHelperImpl(impl) {
    if (!_impl) {
        _impl = impl;
    }
}
function getAxisBreakHelper() {
    return _impl;
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axis/axisAction.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    "AXIS_BREAK_COLLAPSE_ACTION_TYPE",
    ()=>AXIS_BREAK_COLLAPSE_ACTION_TYPE,
    "AXIS_BREAK_EXPAND_ACTION_TYPE",
    ()=>AXIS_BREAK_EXPAND_ACTION_TYPE,
    "AXIS_BREAK_TOGGLE_ACTION_TYPE",
    ()=>AXIS_BREAK_TOGGLE_ACTION_TYPE,
    "registerAction",
    ()=>registerAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
;
;
var AXIS_BREAK_EXPAND_ACTION_TYPE = 'expandAxisBreak';
var AXIS_BREAK_COLLAPSE_ACTION_TYPE = 'collapseAxisBreak';
var AXIS_BREAK_TOGGLE_ACTION_TYPE = 'toggleAxisBreak';
var AXIS_BREAK_CHANGED_EVENT_TYPE = 'axisbreakchanged';
var expandAxisBreakActionInfo = {
    type: AXIS_BREAK_EXPAND_ACTION_TYPE,
    event: AXIS_BREAK_CHANGED_EVENT_TYPE,
    update: 'update',
    refineEvent: refineAxisBreakChangeEvent
};
var collapseAxisBreakActionInfo = {
    type: AXIS_BREAK_COLLAPSE_ACTION_TYPE,
    event: AXIS_BREAK_CHANGED_EVENT_TYPE,
    update: 'update',
    refineEvent: refineAxisBreakChangeEvent
};
var toggleAxisBreakActionInfo = {
    type: AXIS_BREAK_TOGGLE_ACTION_TYPE,
    event: AXIS_BREAK_CHANGED_EVENT_TYPE,
    update: 'update',
    refineEvent: refineAxisBreakChangeEvent
};
function refineAxisBreakChangeEvent(actionResultBatch, payload, ecModel, api) {
    var breaks = [];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(actionResultBatch, function(actionResult) {
        breaks = breaks.concat(actionResult.eventBreaks);
    });
    return {
        eventContent: {
            breaks: breaks
        }
    };
}
function registerAction(registers) {
    registers.registerAction(expandAxisBreakActionInfo, actionHandler);
    registers.registerAction(collapseAxisBreakActionInfo, actionHandler);
    registers.registerAction(toggleAxisBreakActionInfo, actionHandler);
    function actionHandler(payload, ecModel) {
        var eventBreaks = [];
        var finderResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseFinder"])(ecModel, payload);
        function dealUpdate(modelProp, indexProp) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(finderResult[modelProp], function(axisModel) {
                var result = axisModel.updateAxisBreaks(payload);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(result.breaks, function(item) {
                    var _a;
                    eventBreaks.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaults"])((_a = {}, _a[indexProp] = axisModel.componentIndex, _a), item));
                });
            });
        }
        dealUpdate('xAxisModels', 'xAxisIndex');
        dealUpdate('yAxisModels', 'yAxisIndex');
        dealUpdate('singleAxisModels', 'singleAxisIndex');
        return {
            eventBreaks: eventBreaks
        };
    }
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axis/AxisBuilder.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    "AxisBuilderSharedContext",
    ()=>AxisBuilderSharedContext,
    "default",
    ()=>__TURBOPACK__default__export__,
    "getLabelInner",
    ()=>getLabelInner,
    "moveIfOverlapByLinearLabels",
    ()=>moveIfOverlapByLinearLabels,
    "resolveAxisNameOverlapDefault",
    ()=>resolveAxisNameOverlapDefault
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Group.js [app-ssr] (ecmascript) <export default as Group>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Line$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Line.js [app-ssr] (ecmascript) <export default as Line>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/graphic.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Text$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Text.js [app-ssr] (ecmascript) <export default as Text>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Rect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Rect$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Rect.js [app-ssr] (ecmascript) <export default as Rect>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/innerStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/label/labelStyle.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/Model.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/number.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$symbol$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/symbol.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$matrix$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/matrix.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/axisHelper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelLayoutHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/label/labelLayoutHelper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$axisBreakHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axis/axisBreakHelper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$axisAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axis/axisAction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$break$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/scale/break.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$BoundingRect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/BoundingRect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$Point$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/Point.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$Transformable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/Transformable.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisTickLabelBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/axisTickLabelBuilder.js [app-ssr] (ecmascript)");
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
var PI = Math.PI;
var DEFAULT_CENTER_NAME_MARGIN_LEVELS = [
    [
        1,
        2,
        1,
        2
    ],
    [
        5,
        3,
        5,
        3
    ],
    [
        8,
        3,
        8,
        3
    ]
];
var DEFAULT_ENDS_NAME_MARGIN_LEVELS = [
    [
        0,
        1,
        0,
        1
    ],
    [
        0,
        3,
        0,
        3
    ],
    [
        0,
        3,
        0,
        3
    ]
];
var getLabelInner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeInner"])();
var getTickInner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeInner"])();
/**
 * A context shared by difference axisBuilder instances.
 * For cross-axes overlap resolving.
 *
 * Lifecycle constraint: should not over a pass of ec main process.
 *  If model is changed, the context must be disposed.
 *
 * @see AxisBuilderLocalContext
 */ var AxisBuilderSharedContext = /** @class */ function() {
    function AxisBuilderSharedContext(resolveAxisNameOverlap) {
        /**
     * [CAUTION] Do not modify this data structure outside this class.
     */ this.recordMap = {};
        this.resolveAxisNameOverlap = resolveAxisNameOverlap;
    }
    AxisBuilderSharedContext.prototype.ensureRecord = function(axisModel) {
        var dim = axisModel.axis.dim;
        var idx = axisModel.componentIndex;
        var recordMap = this.recordMap;
        var records = recordMap[dim] || (recordMap[dim] = []);
        return records[idx] || (records[idx] = {
            ready: {}
        });
    };
    return AxisBuilderSharedContext;
}();
;
;
/**
 * [CAUTION]
 *  1. The call of this function must be after axisLabel overlap handlings
 *     (such as `hideOverlap`, `fixMinMaxLabelShow`) and after transform calculating.
 *  2. Can be called multiple times and should be idempotent.
 */ function resetOverlapRecordToShared(cfg, shared, axisModel, labelLayoutList) {
    var axis = axisModel.axis;
    var record = shared.ensureRecord(axisModel);
    var labelInfoList = [];
    var stOccupiedRect;
    var useStOccupiedRect = hasAxisName(cfg.axisName) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNameLocationCenter"])(cfg.nameLocation);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(labelLayoutList, function(layout) {
        var layoutInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelLayoutHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ensureLabelLayoutWithGeometry"])(layout);
        if (!layoutInfo || layoutInfo.label.ignore) {
            return;
        }
        labelInfoList.push(layoutInfo);
        var transGroup = record.transGroup;
        if (useStOccupiedRect) {
            // Transform to "standard axis" for creating stOccupiedRect (the label rects union).
            transGroup.transform ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$matrix$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invert"](_stTransTmp, transGroup.transform) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$matrix$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["identity"](_stTransTmp);
            if (layoutInfo.transform) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$matrix$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mul"](_stTransTmp, _stTransTmp, layoutInfo.transform);
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$BoundingRect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].copy(_stLabelRectTmp, layoutInfo.localRect);
            _stLabelRectTmp.applyTransform(_stTransTmp);
            stOccupiedRect ? stOccupiedRect.union(_stLabelRectTmp) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$BoundingRect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].copy(stOccupiedRect = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$BoundingRect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](0, 0, 0, 0), _stLabelRectTmp);
        }
    });
    var sortByDim = Math.abs(record.dirVec.x) > 0.1 ? 'x' : 'y';
    var sortByValue = record.transGroup[sortByDim];
    labelInfoList.sort(function(info1, info2) {
        return Math.abs(info1.label[sortByDim] - sortByValue) - Math.abs(info2.label[sortByDim] - sortByValue);
    });
    if (useStOccupiedRect && stOccupiedRect) {
        var extent = axis.getExtent();
        var axisLineX = Math.min(extent[0], extent[1]);
        var axisLineWidth = Math.max(extent[0], extent[1]) - axisLineX;
        // If `nameLocation` is 'middle', enlarge axis labels boundingRect to axisLine to avoid bad
        //  case like that axis name is placed in the gap between axis labels and axis line.
        // If only one label exists, the entire band should be occupied for
        // visual consistency, so extent it to [0, canvas width].
        stOccupiedRect.union(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$BoundingRect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](axisLineX, 0, axisLineWidth, 1));
    }
    record.stOccupiedRect = stOccupiedRect;
    record.labelInfoList = labelInfoList;
}
var _stTransTmp = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$matrix$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"]();
var _stLabelRectTmp = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$BoundingRect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](0, 0, 0, 0);
var resolveAxisNameOverlapDefault = function(cfg, ctx, axisModel, nameLayoutInfo, nameMoveDirVec, thisRecord) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNameLocationCenter"])(cfg.nameLocation)) {
        var stOccupiedRect = thisRecord.stOccupiedRect;
        if (stOccupiedRect) {
            moveIfOverlap((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelLayoutHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["computeLabelGeometry2"])({}, stOccupiedRect, thisRecord.transGroup.transform), nameLayoutInfo, nameMoveDirVec);
        }
    } else {
        moveIfOverlapByLinearLabels(thisRecord.labelInfoList, thisRecord.dirVec, nameLayoutInfo, nameMoveDirVec);
    }
};
// [NOTICE] not consider ignore.
function moveIfOverlap(basedLayoutInfo, movableLayoutInfo, moveDirVec) {
    var mtv = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$Point$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]();
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelLayoutHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["labelIntersect"])(basedLayoutInfo, movableLayoutInfo, mtv, {
        direction: Math.atan2(moveDirVec.y, moveDirVec.x),
        bidirectional: false,
        touchThreshold: 0.05
    })) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelLayoutHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["labelLayoutApplyTranslation"])(movableLayoutInfo, mtv);
    }
}
function moveIfOverlapByLinearLabels(baseLayoutInfoList, baseDirVec, movableLayoutInfo, moveDirVec) {
    // Detect and move from far to close.
    var sameDir = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$Point$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dot(moveDirVec, baseDirVec) >= 0;
    for(var idx = 0, len = baseLayoutInfoList.length; idx < len; idx++){
        var labelInfo = baseLayoutInfoList[sameDir ? idx : len - 1 - idx];
        if (!labelInfo.label.ignore) {
            moveIfOverlap(labelInfo, movableLayoutInfo, moveDirVec);
        }
    }
}
/**
 * @caution
 * - Ensure it is called after the data processing stage finished.
 * - It might be called before `CahrtView#render`, sush as called at `CoordinateSystem#update`,
 *  thus ensure the result the same whenever it is called.
 *
 * A builder for a straight-line axis.
 *
 * A final axis is translated and rotated from a "standard axis".
 * So opt.position and opt.rotation is required.
 *
 * A "standard axis" is the axis [0,0]-->[abs(axisExtent[1]-axisExtent[0]),0]
 * for example: [0,0]-->[50,0]
 */ var AxisBuilder = /** @class */ function() {
    /**
   * [CAUTION]: axisModel.axis.extent/scale must be ready to use.
   */ function AxisBuilder(axisModel, api, opt, shared) {
        this.group = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__["Group"]();
        this._axisModel = axisModel;
        this._api = api;
        this._local = {};
        this._shared = shared || new AxisBuilderSharedContext(resolveAxisNameOverlapDefault);
        this._resetCfgDetermined(opt);
    }
    /**
   * Regarding axis label related configurations, only the change of label.x/y is supported; other
   * changes are not necessary and not performant. To be specific, only `axis.position`
   * (and consequently `labelOffset`) and `axis.extent` can be changed, and assume everything in
   * `axisModel` are not changed.
   * Axis line related configurations can be changed since this method can only be called
   * before they are created.
   */ AxisBuilder.prototype.updateCfg = function(opt) {
        if ("TURBOPACK compile-time truthy", 1) {
            var ready = this._shared.ensureRecord(this._axisModel).ready;
            // After that, changing cfg is not supported; avoid unnecessary complexity.
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(!ready.axisLine && !ready.axisTickLabelDetermine);
            // Have to be called again if cfg changed.
            ready.axisName = ready.axisTickLabelEstimate = false;
        }
        var raw = this._cfg.raw;
        raw.position = opt.position;
        raw.labelOffset = opt.labelOffset;
        this._resetCfgDetermined(raw);
    };
    /**
   * [CAUTION] For debug usage. Never change it outside!
   */ AxisBuilder.prototype.__getRawCfg = function() {
        return this._cfg.raw;
    };
    AxisBuilder.prototype._resetCfgDetermined = function(raw) {
        var axisModel = this._axisModel;
        // FIXME:
        //  Currently there is no uniformed way to set default values if an option
        //  is specified null/undefined by user (intentionally or unintentionally),
        //  e.g. null/undefined is not a illegal value for `nameLocation`.
        //  Try to use `getDefaultOption` to address it. But radar has no `getDefaultOption`.
        var axisModelDefaultOption = axisModel.getDefaultOption ? axisModel.getDefaultOption() : {};
        // Default value
        var axisName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["retrieve2"])(raw.axisName, axisModel.get('name'));
        var nameMoveOverlapOption = axisModel.get('nameMoveOverlap');
        if (nameMoveOverlapOption == null || nameMoveOverlapOption === 'auto') {
            nameMoveOverlapOption = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["retrieve2"])(raw.defaultNameMoveOverlap, true);
        }
        var cfg = {
            raw: raw,
            position: raw.position,
            rotation: raw.rotation,
            nameDirection: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["retrieve2"])(raw.nameDirection, 1),
            tickDirection: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["retrieve2"])(raw.tickDirection, 1),
            labelDirection: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["retrieve2"])(raw.labelDirection, 1),
            labelOffset: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["retrieve2"])(raw.labelOffset, 0),
            silent: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["retrieve2"])(raw.silent, true),
            axisName: axisName,
            nameLocation: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["retrieve3"])(axisModel.get('nameLocation'), axisModelDefaultOption.nameLocation, 'end'),
            shouldNameMoveOverlap: hasAxisName(axisName) && nameMoveOverlapOption,
            optionHideOverlap: axisModel.get([
                'axisLabel',
                'hideOverlap'
            ]),
            showMinorTicks: axisModel.get([
                'minorTick',
                'show'
            ])
        };
        if ("TURBOPACK compile-time truthy", 1) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(cfg.position != null);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(cfg.rotation != null);
        }
        this._cfg = cfg;
        // FIXME Not use a separate text group?
        var transformGroup = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__["Group"]({
            x: cfg.position[0],
            y: cfg.position[1],
            rotation: cfg.rotation
        });
        transformGroup.updateTransform();
        this._transformGroup = transformGroup;
        var record = this._shared.ensureRecord(axisModel);
        record.transGroup = this._transformGroup;
        record.dirVec = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$Point$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](Math.cos(-cfg.rotation), Math.sin(-cfg.rotation));
    };
    AxisBuilder.prototype.build = function(axisPartNameMap, extraParams) {
        var _this = this;
        if (!axisPartNameMap) {
            axisPartNameMap = {
                axisLine: true,
                axisTickLabelEstimate: false,
                axisTickLabelDetermine: true,
                axisName: true
            };
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(AXIS_BUILDER_AXIS_PART_NAMES, function(partName) {
            if (axisPartNameMap[partName]) {
                builders[partName](_this._cfg, _this._local, _this._shared, _this._axisModel, _this.group, _this._transformGroup, _this._api, extraParams || {});
            }
        });
        return this;
    };
    /**
   * Currently only get text align/verticalAlign by rotation.
   * NO `position` is involved, otherwise it have to be performed for each `updateAxisLabelChangableProps`.
   */ AxisBuilder.innerTextLayout = function(axisRotation, textRotation, direction) {
        var rotationDiff = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["remRadian"])(textRotation - axisRotation);
        var textAlign;
        var textVerticalAlign;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isRadianAroundZero"])(rotationDiff)) {
            // Label is parallel with axis line.
            textVerticalAlign = direction > 0 ? 'top' : 'bottom';
            textAlign = 'center';
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isRadianAroundZero"])(rotationDiff - PI)) {
            // Label is inverse parallel with axis line.
            textVerticalAlign = direction > 0 ? 'bottom' : 'top';
            textAlign = 'center';
        } else {
            textVerticalAlign = 'middle';
            if (rotationDiff > 0 && rotationDiff < PI) {
                textAlign = direction > 0 ? 'right' : 'left';
            } else {
                textAlign = direction > 0 ? 'left' : 'right';
            }
        }
        return {
            rotation: rotationDiff,
            textAlign: textAlign,
            textVerticalAlign: textVerticalAlign
        };
    };
    AxisBuilder.makeAxisEventDataBase = function(axisModel) {
        var eventData = {
            componentType: axisModel.mainType,
            componentIndex: axisModel.componentIndex
        };
        eventData[axisModel.mainType + 'Index'] = axisModel.componentIndex;
        return eventData;
    };
    AxisBuilder.isLabelSilent = function(axisModel) {
        var tooltipOpt = axisModel.get('tooltip');
        return axisModel.get('silent') || !(axisModel.get('triggerEvent') || tooltipOpt && tooltipOpt.show);
    };
    return AxisBuilder;
}();
;
// Sorted by dependency order.
var AXIS_BUILDER_AXIS_PART_NAMES = [
    'axisLine',
    'axisTickLabelEstimate',
    'axisTickLabelDetermine',
    'axisName'
];
var builders = {
    axisLine: function(cfg, local, shared, axisModel, group, transformGroup, api) {
        if ("TURBOPACK compile-time truthy", 1) {
            var ready = shared.ensureRecord(axisModel).ready;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(!ready.axisLine);
            ready.axisLine = true;
        }
        var shown = axisModel.get([
            'axisLine',
            'show'
        ]);
        if (shown === 'auto') {
            shown = true;
            if (cfg.raw.axisLineAutoShow != null) {
                shown = !!cfg.raw.axisLineAutoShow;
            }
        }
        if (!shown) {
            return;
        }
        var extent = axisModel.axis.getExtent();
        var matrix = transformGroup.transform;
        var pt1 = [
            extent[0],
            0
        ];
        var pt2 = [
            extent[1],
            0
        ];
        var inverse = pt1[0] > pt2[0];
        if (matrix) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["applyTransform"])(pt1, pt1, matrix);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["applyTransform"])(pt2, pt2, matrix);
        }
        var lineStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extend"])({
            lineCap: 'round'
        }, axisModel.getModel([
            'axisLine',
            'lineStyle'
        ]).getLineStyle());
        var pathBaseProp = {
            strokeContainThreshold: cfg.raw.strokeContainThreshold || 5,
            silent: true,
            z2: 1,
            style: lineStyle
        };
        if (axisModel.get([
            'axisLine',
            'breakLine'
        ]) && axisModel.axis.scale.hasBreaks()) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$axisBreakHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAxisBreakHelper"])().buildAxisBreakLine(axisModel, group, transformGroup, pathBaseProp);
        } else {
            var line = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Line$3e$__["Line"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extend"])({
                shape: {
                    x1: pt1[0],
                    y1: pt1[1],
                    x2: pt2[0],
                    y2: pt2[1]
                }
            }, pathBaseProp));
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["subPixelOptimizeLine"](line.shape, line.style.lineWidth);
            line.anid = 'line';
            group.add(line);
        }
        var arrows = axisModel.get([
            'axisLine',
            'symbol'
        ]);
        if (arrows != null) {
            var arrowSize = axisModel.get([
                'axisLine',
                'symbolSize'
            ]);
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(arrows)) {
                // Use the same arrow for start and end point
                arrows = [
                    arrows,
                    arrows
                ];
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(arrowSize) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNumber"])(arrowSize)) {
                // Use the same size for width and height
                arrowSize = [
                    arrowSize,
                    arrowSize
                ];
            }
            var arrowOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$symbol$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeSymbolOffset"])(axisModel.get([
                'axisLine',
                'symbolOffset'
            ]) || 0, arrowSize);
            var symbolWidth_1 = arrowSize[0];
            var symbolHeight_1 = arrowSize[1];
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])([
                {
                    rotate: cfg.rotation + Math.PI / 2,
                    offset: arrowOffset[0],
                    r: 0
                },
                {
                    rotate: cfg.rotation - Math.PI / 2,
                    offset: arrowOffset[1],
                    r: Math.sqrt((pt1[0] - pt2[0]) * (pt1[0] - pt2[0]) + (pt1[1] - pt2[1]) * (pt1[1] - pt2[1]))
                }
            ], function(point, index) {
                if (arrows[index] !== 'none' && arrows[index] != null) {
                    var symbol = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$symbol$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSymbol"])(arrows[index], -symbolWidth_1 / 2, -symbolHeight_1 / 2, symbolWidth_1, symbolHeight_1, lineStyle.stroke, true);
                    // Calculate arrow position with offset
                    var r = point.r + point.offset;
                    var pt = inverse ? pt2 : pt1;
                    symbol.attr({
                        rotation: point.rotate,
                        x: pt[0] + r * Math.cos(cfg.rotation),
                        y: pt[1] - r * Math.sin(cfg.rotation),
                        silent: true,
                        z2: 11
                    });
                    group.add(symbol);
                }
            });
        }
    },
    /**
   * [CAUTION] This method can be called multiple times, following the change due to `resetCfg` called
   *  in size measurement. Thus this method should be idempotent, and should be performant.
   */ axisTickLabelEstimate: function(cfg, local, shared, axisModel, group, transformGroup, api, extraParams) {
        if ("TURBOPACK compile-time truthy", 1) {
            var ready = shared.ensureRecord(axisModel).ready;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(!ready.axisTickLabelDetermine);
            ready.axisTickLabelEstimate = true;
        }
        var needCallLayout = dealLastTickLabelResultReusable(local, group, extraParams);
        if (needCallLayout) {
            layOutAxisTickLabel(cfg, local, shared, axisModel, group, transformGroup, api, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisTickLabelBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AxisTickLabelComputingKind"].estimate);
        }
    },
    /**
   * Finish axis tick label build.
   * Can be only called once.
   */ axisTickLabelDetermine: function(cfg, local, shared, axisModel, group, transformGroup, api, extraParams) {
        if ("TURBOPACK compile-time truthy", 1) {
            var ready = shared.ensureRecord(axisModel).ready;
            ready.axisTickLabelDetermine = true;
        }
        var needCallLayout = dealLastTickLabelResultReusable(local, group, extraParams);
        if (needCallLayout) {
            layOutAxisTickLabel(cfg, local, shared, axisModel, group, transformGroup, api, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisTickLabelBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AxisTickLabelComputingKind"].determine);
        }
        var ticksEls = buildAxisMajorTicks(cfg, group, transformGroup, axisModel);
        syncLabelIgnoreToMajorTicks(cfg, local.labelLayoutList, ticksEls);
        buildAxisMinorTicks(cfg, group, transformGroup, axisModel, cfg.tickDirection);
    },
    /**
   * [CAUTION] This method can be called multiple times, following the change due to `resetCfg` called
   *  in size measurement. Thus this method should be idempotent, and should be performant.
   */ axisName: function(cfg, local, shared, axisModel, group, transformGroup, api, extraParams) {
        var sharedRecord = shared.ensureRecord(axisModel);
        if ("TURBOPACK compile-time truthy", 1) {
            var ready = sharedRecord.ready;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(ready.axisTickLabelEstimate || ready.axisTickLabelDetermine);
            ready.axisName = true;
        }
        // Remove the existing name result created in estimation phase.
        if (local.nameEl) {
            group.remove(local.nameEl);
            local.nameEl = sharedRecord.nameLayout = sharedRecord.nameLocation = null;
        }
        var name = cfg.axisName;
        if (!hasAxisName(name)) {
            return;
        }
        var nameLocation = cfg.nameLocation;
        var nameDirection = cfg.nameDirection;
        var textStyleModel = axisModel.getModel('nameTextStyle');
        var gap = axisModel.get('nameGap') || 0;
        var extent = axisModel.axis.getExtent();
        var gapStartEndSignal = axisModel.axis.inverse ? -1 : 1;
        var pos = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$Point$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](0, 0);
        var nameMoveDirVec = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$Point$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](0, 0);
        if (nameLocation === 'start') {
            pos.x = extent[0] - gapStartEndSignal * gap;
            nameMoveDirVec.x = -gapStartEndSignal;
        } else if (nameLocation === 'end') {
            pos.x = extent[1] + gapStartEndSignal * gap;
            nameMoveDirVec.x = gapStartEndSignal;
        } else {
            // 'middle' or 'center'
            pos.x = (extent[0] + extent[1]) / 2;
            pos.y = cfg.labelOffset + nameDirection * gap;
            nameMoveDirVec.y = nameDirection;
        }
        var mt = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$matrix$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"]();
        nameMoveDirVec.transform(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$matrix$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotate"](mt, mt, cfg.rotation));
        var nameRotation = axisModel.get('nameRotate');
        if (nameRotation != null) {
            nameRotation = nameRotation * PI / 180; // To radian.
        }
        var labelLayout;
        var axisNameAvailableWidth;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNameLocationCenter"])(nameLocation)) {
            labelLayout = AxisBuilder.innerTextLayout(cfg.rotation, nameRotation != null ? nameRotation : cfg.rotation, // Adapt to axis.
            nameDirection);
        } else {
            labelLayout = endTextLayout(cfg.rotation, nameLocation, nameRotation || 0, extent);
            axisNameAvailableWidth = cfg.raw.axisNameAvailableWidth;
            if (axisNameAvailableWidth != null) {
                axisNameAvailableWidth = Math.abs(axisNameAvailableWidth / Math.sin(labelLayout.rotation));
                !isFinite(axisNameAvailableWidth) && (axisNameAvailableWidth = null);
            }
        }
        var textFont = textStyleModel.getFont();
        var truncateOpt = axisModel.get('nameTruncate', true) || {};
        var ellipsis = truncateOpt.ellipsis;
        var maxWidth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["retrieve"])(cfg.raw.nameTruncateMaxWidth, truncateOpt.maxWidth, axisNameAvailableWidth);
        var nameMarginLevel = extraParams.nameMarginLevel || 0;
        var textEl = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Text$3e$__["Text"]({
            x: pos.x,
            y: pos.y,
            rotation: labelLayout.rotation,
            silent: AxisBuilder.isLabelSilent(axisModel),
            style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createTextStyle"])(textStyleModel, {
                text: name,
                font: textFont,
                overflow: 'truncate',
                width: maxWidth,
                ellipsis: ellipsis,
                fill: textStyleModel.getTextColor() || axisModel.get([
                    'axisLine',
                    'lineStyle',
                    'color'
                ]),
                align: textStyleModel.get('align') || labelLayout.textAlign,
                verticalAlign: textStyleModel.get('verticalAlign') || labelLayout.textVerticalAlign
            }),
            z2: 1
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["setTooltipConfig"]({
            el: textEl,
            componentModel: axisModel,
            itemName: name
        });
        textEl.__fullText = name;
        // Id for animation
        textEl.anid = 'name';
        if (axisModel.get('triggerEvent')) {
            var eventData = AxisBuilder.makeAxisEventDataBase(axisModel);
            eventData.targetType = 'axisName';
            eventData.name = name;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getECData"])(textEl).eventData = eventData;
        }
        transformGroup.add(textEl);
        textEl.updateTransform();
        local.nameEl = textEl;
        var nameLayout = sharedRecord.nameLayout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelLayoutHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ensureLabelLayoutWithGeometry"])({
            label: textEl,
            priority: textEl.z2,
            defaultAttr: {
                ignore: textEl.ignore
            },
            marginDefault: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNameLocationCenter"])(nameLocation) ? DEFAULT_CENTER_NAME_MARGIN_LEVELS[nameMarginLevel] : DEFAULT_ENDS_NAME_MARGIN_LEVELS[nameMarginLevel]
        });
        sharedRecord.nameLocation = nameLocation;
        group.add(textEl);
        textEl.decomposeTransform();
        if (cfg.shouldNameMoveOverlap && nameLayout) {
            var record = shared.ensureRecord(axisModel);
            if ("TURBOPACK compile-time truthy", 1) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(record.labelInfoList);
            }
            shared.resolveAxisNameOverlap(cfg, shared, axisModel, nameLayout, nameMoveDirVec, record);
        }
    }
};
function layOutAxisTickLabel(cfg, local, shared, axisModel, group, transformGroup, api, kind) {
    if (!axisLabelBuildResultExists(local)) {
        buildAxisLabel(cfg, local, group, kind, axisModel, api);
    }
    var labelLayoutList = local.labelLayoutList;
    updateAxisLabelChangableProps(cfg, axisModel, labelLayoutList, transformGroup);
    adjustBreakLabels(axisModel, cfg.rotation, labelLayoutList);
    var optionHideOverlap = cfg.optionHideOverlap;
    fixMinMaxLabelShow(axisModel, labelLayoutList, optionHideOverlap);
    if (optionHideOverlap) {
        // This bit fixes the label overlap issue for the time chart.
        // See https://github.com/apache/echarts/issues/14266 for more.
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelLayoutHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hideOverlap"])(// Filter the already ignored labels by the previous overlap resolving methods.
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filter"])(labelLayoutList, function(layout) {
            return layout && !layout.label.ignore;
        }));
    }
    // Always call it even this axis has no name, since it serves in overlapping detection
    // and grid outerBounds on other axis.
    resetOverlapRecordToShared(cfg, shared, axisModel, labelLayoutList);
}
;
function endTextLayout(rotation, textPosition, textRotate, extent) {
    var rotationDiff = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["remRadian"])(textRotate - rotation);
    var textAlign;
    var textVerticalAlign;
    var inverse = extent[0] > extent[1];
    var onLeft = textPosition === 'start' && !inverse || textPosition !== 'start' && inverse;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isRadianAroundZero"])(rotationDiff - PI / 2)) {
        textVerticalAlign = onLeft ? 'bottom' : 'top';
        textAlign = 'center';
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isRadianAroundZero"])(rotationDiff - PI * 1.5)) {
        textVerticalAlign = onLeft ? 'top' : 'bottom';
        textAlign = 'center';
    } else {
        textVerticalAlign = 'middle';
        if (rotationDiff < PI * 1.5 && rotationDiff > PI / 2) {
            textAlign = onLeft ? 'left' : 'right';
        } else {
            textAlign = onLeft ? 'right' : 'left';
        }
    }
    return {
        rotation: rotationDiff,
        textAlign: textAlign,
        textVerticalAlign: textVerticalAlign
    };
}
/**
 * Assume `labelLayoutList` has no `label.ignore: true`.
 * Assume `labelLayoutList` have been sorted by value ascending order.
 */ function fixMinMaxLabelShow(axisModel, labelLayoutList, optionHideOverlap) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shouldShowAllLabels"])(axisModel.axis)) {
        return;
    }
    // FIXME
    // Have not consider onBand yet, where tick els is more than label els.
    // Assert no ignore in labels.
    function deal(showMinMaxLabel, outmostLabelIdx, innerLabelIdx) {
        var outmostLabelLayout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelLayoutHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ensureLabelLayoutWithGeometry"])(labelLayoutList[outmostLabelIdx]);
        var innerLabelLayout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelLayoutHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ensureLabelLayoutWithGeometry"])(labelLayoutList[innerLabelIdx]);
        if (!outmostLabelLayout || !innerLabelLayout) {
            return;
        }
        if (showMinMaxLabel === false || outmostLabelLayout.suggestIgnore) {
            ignoreEl(outmostLabelLayout.label);
            return;
        }
        if (innerLabelLayout.suggestIgnore) {
            ignoreEl(innerLabelLayout.label);
            return;
        }
        // PENDING: Originally we thought `optionHideOverlap === false` means do not hide anything,
        //  since currently the bounding rect of text might not accurate enough and might slightly bigger,
        //  which causes false positive. But `optionHideOverlap: null/undfined` is falsy and likely
        //  be treated as false.
        // In most fonts the glyph does not reach the boundary of the bounding rect.
        // This is needed to avoid too aggressive to hide two elements that meet at the edge
        // due to compact layout by the same bounding rect or OBB.
        var touchThreshold = 0.1;
        // This treatment is for backward compatibility. And `!optionHideOverlap` implies that
        // the user accepts the visual touch between adjacent labels, thus "hide min/max label"
        // should be conservative, since the space might be sufficient in this case.
        if (!optionHideOverlap) {
            var marginForce = [
                0,
                0,
                0,
                0
            ];
            // Make a copy to apply `ignoreMargin`.
            outmostLabelLayout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelLayoutHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["newLabelLayoutWithGeometry"])({
                marginForce: marginForce
            }, outmostLabelLayout);
            innerLabelLayout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelLayoutHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["newLabelLayoutWithGeometry"])({
                marginForce: marginForce
            }, innerLabelLayout);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelLayoutHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["labelIntersect"])(outmostLabelLayout, innerLabelLayout, null, {
            touchThreshold: touchThreshold
        })) {
            if (showMinMaxLabel) {
                ignoreEl(innerLabelLayout.label);
            } else {
                ignoreEl(outmostLabelLayout.label);
            }
        }
    }
    // If min or max are user set, we need to check
    // If the tick on min(max) are overlap on their neighbour tick
    // If they are overlapped, we need to hide the min(max) tick label
    var showMinLabel = axisModel.get([
        'axisLabel',
        'showMinLabel'
    ]);
    var showMaxLabel = axisModel.get([
        'axisLabel',
        'showMaxLabel'
    ]);
    var labelsLen = labelLayoutList.length;
    deal(showMinLabel, 0, 1);
    deal(showMaxLabel, labelsLen - 1, labelsLen - 2);
}
// PENDING: Is it necessary to display a tick while the corresponding label is ignored?
function syncLabelIgnoreToMajorTicks(cfg, labelLayoutList, tickEls) {
    if (cfg.showMinorTicks) {
        // It probably unreaasonable to hide major ticks when show minor ticks.
        return;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(labelLayoutList, function(labelLayout) {
        if (labelLayout && labelLayout.label.ignore) {
            for(var idx = 0; idx < tickEls.length; idx++){
                var tickEl = tickEls[idx];
                // Assume small array, linear search is fine for performance.
                // PENDING: measure?
                var tickInner = getTickInner(tickEl);
                var labelInner = getLabelInner(labelLayout.label);
                if (tickInner.tickValue != null && !tickInner.onBand && tickInner.tickValue === labelInner.tickValue) {
                    ignoreEl(tickEl);
                    return;
                }
            }
        }
    });
}
function ignoreEl(el) {
    el && (el.ignore = true);
}
function createTicks(ticksCoords, tickTransform, tickEndCoord, tickLineStyle, anidPrefix) {
    var tickEls = [];
    var pt1 = [];
    var pt2 = [];
    for(var i = 0; i < ticksCoords.length; i++){
        var tickCoord = ticksCoords[i].coord;
        pt1[0] = tickCoord;
        pt1[1] = 0;
        pt2[0] = tickCoord;
        pt2[1] = tickEndCoord;
        if (tickTransform) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["applyTransform"])(pt1, pt1, tickTransform);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["applyTransform"])(pt2, pt2, tickTransform);
        }
        // Tick line, Not use group transform to have better line draw
        var tickEl = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Line$3e$__["Line"]({
            shape: {
                x1: pt1[0],
                y1: pt1[1],
                x2: pt2[0],
                y2: pt2[1]
            },
            style: tickLineStyle,
            z2: 2,
            autoBatch: true,
            silent: true
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["subPixelOptimizeLine"](tickEl.shape, tickEl.style.lineWidth);
        tickEl.anid = anidPrefix + '_' + ticksCoords[i].tickValue;
        tickEls.push(tickEl);
        var inner = getTickInner(tickEl);
        inner.onBand = !!ticksCoords[i].onBand;
        inner.tickValue = ticksCoords[i].tickValue;
    }
    return tickEls;
}
function buildAxisMajorTicks(cfg, group, transformGroup, axisModel) {
    var axis = axisModel.axis;
    var tickModel = axisModel.getModel('axisTick');
    var shown = tickModel.get('show');
    if (shown === 'auto') {
        shown = true;
        if (cfg.raw.axisTickAutoShow != null) {
            shown = !!cfg.raw.axisTickAutoShow;
        }
    }
    if (!shown || axis.scale.isBlank()) {
        return [];
    }
    var lineStyleModel = tickModel.getModel('lineStyle');
    var tickEndCoord = cfg.tickDirection * tickModel.get('length');
    var ticksCoords = axis.getTicksCoords();
    var ticksEls = createTicks(ticksCoords, transformGroup.transform, tickEndCoord, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaults"])(lineStyleModel.getLineStyle(), {
        stroke: axisModel.get([
            'axisLine',
            'lineStyle',
            'color'
        ])
    }), 'ticks');
    for(var i = 0; i < ticksEls.length; i++){
        group.add(ticksEls[i]);
    }
    return ticksEls;
}
function buildAxisMinorTicks(cfg, group, transformGroup, axisModel, tickDirection) {
    var axis = axisModel.axis;
    var minorTickModel = axisModel.getModel('minorTick');
    if (!cfg.showMinorTicks || axis.scale.isBlank()) {
        return;
    }
    var minorTicksCoords = axis.getMinorTicksCoords();
    if (!minorTicksCoords.length) {
        return;
    }
    var lineStyleModel = minorTickModel.getModel('lineStyle');
    var tickEndCoord = tickDirection * minorTickModel.get('length');
    var minorTickLineStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaults"])(lineStyleModel.getLineStyle(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaults"])(axisModel.getModel('axisTick').getLineStyle(), {
        stroke: axisModel.get([
            'axisLine',
            'lineStyle',
            'color'
        ])
    }));
    for(var i = 0; i < minorTicksCoords.length; i++){
        var minorTicksEls = createTicks(minorTicksCoords[i], transformGroup.transform, tickEndCoord, minorTickLineStyle, 'minorticks_' + i);
        for(var k = 0; k < minorTicksEls.length; k++){
            group.add(minorTicksEls[k]);
        }
    }
}
// Return whether need to call `layOutAxisTickLabel` again.
function dealLastTickLabelResultReusable(local, group, extraParams) {
    if (axisLabelBuildResultExists(local)) {
        var axisLabelsCreationContext = local.axisLabelsCreationContext;
        if ("TURBOPACK compile-time truthy", 1) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(local.labelGroup && axisLabelsCreationContext);
        }
        var noPxChangeTryDetermine = axisLabelsCreationContext.out.noPxChangeTryDetermine;
        if (extraParams.noPxChange) {
            var canDetermine = true;
            for(var idx = 0; idx < noPxChangeTryDetermine.length; idx++){
                canDetermine = canDetermine && noPxChangeTryDetermine[idx]();
            }
            if (canDetermine) {
                return false;
            }
        }
        if (noPxChangeTryDetermine.length) {
            // Remove the result of `buildAxisLabel`
            group.remove(local.labelGroup);
            axisLabelBuildResultSet(local, null, null, null);
        }
    }
    return true;
}
function buildAxisLabel(cfg, local, group, kind, axisModel, api) {
    var axis = axisModel.axis;
    var show = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["retrieve"])(cfg.raw.axisLabelShow, axisModel.get([
        'axisLabel',
        'show'
    ]));
    var labelGroup = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__["Group"]();
    group.add(labelGroup);
    var axisLabelCreationCtx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisTickLabelBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createAxisLabelsComputingContext"])(kind);
    if (!show || axis.scale.isBlank()) {
        axisLabelBuildResultSet(local, [], labelGroup, axisLabelCreationCtx);
        return;
    }
    var labelModel = axisModel.getModel('axisLabel');
    var labels = axis.getViewLabels(axisLabelCreationCtx);
    // Special label rotate.
    var labelRotation = ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["retrieve"])(cfg.raw.labelRotate, labelModel.get('rotate')) || 0) * PI / 180;
    var labelLayout = AxisBuilder.innerTextLayout(cfg.rotation, labelRotation, cfg.labelDirection);
    var rawCategoryData = axisModel.getCategories && axisModel.getCategories(true);
    var labelEls = [];
    var triggerEvent = axisModel.get('triggerEvent');
    var z2Min = Infinity;
    var z2Max = -Infinity;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(labels, function(labelItem, index) {
        var _a;
        var tickValue = axis.scale.type === 'ordinal' ? axis.scale.getRawOrdinalNumber(labelItem.tickValue) : labelItem.tickValue;
        var formattedLabel = labelItem.formattedLabel;
        var rawLabel = labelItem.rawLabel;
        var itemLabelModel = labelModel;
        if (rawCategoryData && rawCategoryData[tickValue]) {
            var rawCategoryItem = rawCategoryData[tickValue];
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isObject"])(rawCategoryItem) && rawCategoryItem.textStyle) {
                itemLabelModel = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](rawCategoryItem.textStyle, labelModel, axisModel.ecModel);
            }
        }
        var textColor = itemLabelModel.getTextColor() || axisModel.get([
            'axisLine',
            'lineStyle',
            'color'
        ]);
        var align = itemLabelModel.getShallow('align', true) || labelLayout.textAlign;
        var alignMin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["retrieve2"])(itemLabelModel.getShallow('alignMinLabel', true), align);
        var alignMax = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["retrieve2"])(itemLabelModel.getShallow('alignMaxLabel', true), align);
        var verticalAlign = itemLabelModel.getShallow('verticalAlign', true) || itemLabelModel.getShallow('baseline', true) || labelLayout.textVerticalAlign;
        var verticalAlignMin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["retrieve2"])(itemLabelModel.getShallow('verticalAlignMinLabel', true), verticalAlign);
        var verticalAlignMax = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["retrieve2"])(itemLabelModel.getShallow('verticalAlignMaxLabel', true), verticalAlign);
        var z2 = 10 + (((_a = labelItem.time) === null || _a === void 0 ? void 0 : _a.level) || 0);
        z2Min = Math.min(z2Min, z2);
        z2Max = Math.max(z2Max, z2);
        var textEl = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Text$3e$__["Text"]({
            // --- transform props start ---
            // All of the transform props MUST not be set here, but should be set in
            // `updateAxisLabelChangableProps`, because they may change in estimation,
            // and need to calculate based on global coord sys by `decomposeTransform`.
            x: 0,
            y: 0,
            rotation: 0,
            // --- transform props end ---
            silent: AxisBuilder.isLabelSilent(axisModel),
            z2: z2,
            style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createTextStyle"])(itemLabelModel, {
                text: formattedLabel,
                align: index === 0 ? alignMin : index === labels.length - 1 ? alignMax : align,
                verticalAlign: index === 0 ? verticalAlignMin : index === labels.length - 1 ? verticalAlignMax : verticalAlign,
                fill: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFunction"])(textColor) ? textColor(// (1) In category axis with data zoom, tick is not the original
                // index of axis.data. So tick should not be exposed to user
                // in category axis.
                // (2) Compatible with previous version, which always use formatted label as
                // input. But in interval scale the formatted label is like '223,445', which
                // maked user replace ','. So we modify it to return original val but remain
                // it as 'string' to avoid error in replacing.
                axis.type === 'category' ? rawLabel : axis.type === 'value' ? tickValue + '' : tickValue, index) : textColor
            })
        });
        textEl.anid = 'label_' + tickValue;
        var inner = getLabelInner(textEl);
        inner["break"] = labelItem["break"];
        inner.tickValue = tickValue;
        inner.layoutRotation = labelLayout.rotation;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["setTooltipConfig"]({
            el: textEl,
            componentModel: axisModel,
            itemName: formattedLabel,
            formatterParamsExtra: {
                isTruncated: function() {
                    return textEl.isTruncated;
                },
                value: rawLabel,
                tickIndex: index
            }
        });
        // Pack data for mouse event
        if (triggerEvent) {
            var eventData = AxisBuilder.makeAxisEventDataBase(axisModel);
            eventData.targetType = 'axisLabel';
            eventData.value = rawLabel;
            eventData.tickIndex = index;
            if (labelItem["break"]) {
                eventData["break"] = {
                    // type: labelItem.break.type,
                    start: labelItem["break"].parsedBreak.vmin,
                    end: labelItem["break"].parsedBreak.vmax
                };
            }
            if (axis.type === 'category') {
                eventData.dataIndex = tickValue;
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getECData"])(textEl).eventData = eventData;
            if (labelItem["break"]) {
                addBreakEventHandler(axisModel, api, textEl, labelItem["break"]);
            }
        }
        labelEls.push(textEl);
        labelGroup.add(textEl);
    });
    var labelLayoutList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["map"])(labelEls, function(label) {
        return {
            label: label,
            priority: getLabelInner(label)["break"] ? label.z2 + (z2Max - z2Min + 1) // Make break labels be highest priority.
             : label.z2,
            defaultAttr: {
                ignore: label.ignore
            }
        };
    });
    axisLabelBuildResultSet(local, labelLayoutList, labelGroup, axisLabelCreationCtx);
}
// Indicate that `layOutAxisTickLabel` has been called.
function axisLabelBuildResultExists(local) {
    return !!local.labelLayoutList;
}
function axisLabelBuildResultSet(local, labelLayoutList, labelGroup, axisLabelsCreationContext) {
    // Ensure the same lifetime.
    local.labelLayoutList = labelLayoutList;
    local.labelGroup = labelGroup;
    local.axisLabelsCreationContext = axisLabelsCreationContext;
}
function updateAxisLabelChangableProps(cfg, axisModel, labelLayoutList, transformGroup) {
    var labelMargin = axisModel.get([
        'axisLabel',
        'margin'
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(labelLayoutList, function(layout, idx) {
        var geometry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelLayoutHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ensureLabelLayoutWithGeometry"])(layout);
        if (!geometry) {
            return;
        }
        var labelEl = geometry.label;
        var inner = getLabelInner(labelEl);
        // See the comment in `suggestIgnore`.
        geometry.suggestIgnore = labelEl.ignore;
        // Currently no `ignore:true` is set in `buildAxisLabel`
        // But `ignore:true` may be set subsequently for overlap handling, thus reset it here.
        labelEl.ignore = false;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$Transformable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["copyTransform"])(_tmpLayoutEl, _tmpLayoutElReset);
        _tmpLayoutEl.x = axisModel.axis.dataToCoord(inner.tickValue);
        _tmpLayoutEl.y = cfg.labelOffset + cfg.labelDirection * labelMargin;
        _tmpLayoutEl.rotation = inner.layoutRotation;
        transformGroup.add(_tmpLayoutEl);
        _tmpLayoutEl.updateTransform();
        transformGroup.remove(_tmpLayoutEl);
        _tmpLayoutEl.decomposeTransform();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$Transformable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["copyTransform"])(labelEl, _tmpLayoutEl);
        labelEl.markRedraw();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelLayoutHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setLabelLayoutDirty"])(geometry, true);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelLayoutHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ensureLabelLayoutWithGeometry"])(geometry);
    });
}
var _tmpLayoutEl = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Rect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Rect$3e$__["Rect"]();
var _tmpLayoutElReset = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Rect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Rect$3e$__["Rect"]();
function hasAxisName(axisName) {
    return !!axisName;
}
function addBreakEventHandler(axisModel, api, textEl, visualBreak) {
    textEl.on('click', function(params) {
        var payload = {
            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$axisAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AXIS_BREAK_EXPAND_ACTION_TYPE"],
            breaks: [
                {
                    start: visualBreak.parsedBreak.breakOption.start,
                    end: visualBreak.parsedBreak.breakOption.end
                }
            ]
        };
        payload[axisModel.axis.dim + "AxisIndex"] = axisModel.componentIndex;
        api.dispatchAction(payload);
    });
}
function adjustBreakLabels(axisModel, axisRotation, labelLayoutList) {
    var scaleBreakHelper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$break$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getScaleBreakHelper"])();
    if (!scaleBreakHelper) {
        return;
    }
    var breakLabelIndexPairs = scaleBreakHelper.retrieveAxisBreakPairs(labelLayoutList, function(layoutInfo) {
        return layoutInfo && getLabelInner(layoutInfo.label)["break"];
    }, true);
    var moveOverlap = axisModel.get([
        'breakLabelLayout',
        'moveOverlap'
    ], true);
    if (moveOverlap === true || moveOverlap === 'auto') {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(breakLabelIndexPairs, function(idxPair) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$axisBreakHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAxisBreakHelper"])().adjustBreakLabelPair(axisModel.axis.inverse, axisRotation, [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelLayoutHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ensureLabelLayoutWithGeometry"])(labelLayoutList[idxPair[0]]),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelLayoutHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ensureLabelLayoutWithGeometry"])(labelLayoutList[idxPair[1]])
            ]);
        });
    }
}
const __TURBOPACK__default__export__ = AxisBuilder;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axis/AxisView.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$modelHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axisPointer/modelHelper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/view/Component.js [app-ssr] (ecmascript)");
;
;
;
var axisPointerClazz = {};
/**
 * Base class of AxisView.
 */ var AxisView = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(AxisView, _super);
    function AxisView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = AxisView.type;
        return _this;
    }
    /**
   * @override
   */ AxisView.prototype.render = function(axisModel, ecModel, api, payload) {
        // FIXME
        // This process should proformed after coordinate systems updated
        // (axis scale updated), and should be performed each time update.
        // So put it here temporarily, although it is not appropriate to
        // put a model-writing procedure in `view`.
        this.axisPointerClass && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$modelHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fixValue"](axisModel);
        _super.prototype.render.apply(this, arguments);
        this._doUpdateAxisPointerClass(axisModel, api, true);
    };
    /**
   * Action handler.
   */ AxisView.prototype.updateAxisPointer = function(axisModel, ecModel, api, payload) {
        this._doUpdateAxisPointerClass(axisModel, api, false);
    };
    /**
   * @override
   */ AxisView.prototype.remove = function(ecModel, api) {
        var axisPointer = this._axisPointer;
        axisPointer && axisPointer.remove(api);
    };
    /**
   * @override
   */ AxisView.prototype.dispose = function(ecModel, api) {
        this._disposeAxisPointer(api);
        _super.prototype.dispose.apply(this, arguments);
    };
    AxisView.prototype._doUpdateAxisPointerClass = function(axisModel, api, forceRender) {
        var Clazz = AxisView.getAxisPointerClass(this.axisPointerClass);
        if (!Clazz) {
            return;
        }
        var axisPointerModel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$modelHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAxisPointerModel"](axisModel);
        axisPointerModel ? (this._axisPointer || (this._axisPointer = new Clazz())).render(axisModel, axisPointerModel, api, forceRender) : this._disposeAxisPointer(api);
    };
    AxisView.prototype._disposeAxisPointer = function(api) {
        this._axisPointer && this._axisPointer.dispose(api);
        this._axisPointer = null;
    };
    AxisView.registerAxisPointerClass = function(type, clazz) {
        if ("TURBOPACK compile-time truthy", 1) {
            if (axisPointerClazz[type]) {
                throw new Error('axisPointer ' + type + ' exists');
            }
        }
        axisPointerClazz[type] = clazz;
    };
    ;
    AxisView.getAxisPointerClass = function(type) {
        return type && axisPointerClazz[type];
    };
    ;
    AxisView.type = 'axis';
    return AxisView;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = AxisView;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axis/axisSplitHelper.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    "rectCoordAxisBuildSplitArea",
    ()=>rectCoordAxisBuildSplitArea,
    "rectCoordAxisHandleRemove",
    ()=>rectCoordAxisHandleRemove
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Rect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Rect$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Rect.js [app-ssr] (ecmascript) <export default as Rect>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js [app-ssr] (ecmascript)");
;
;
;
var inner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeInner"])();
function rectCoordAxisBuildSplitArea(axisView, axisGroup, axisModel, gridModel) {
    var axis = axisModel.axis;
    if (axis.scale.isBlank()) {
        return;
    }
    // TODO: TYPE
    var splitAreaModel = axisModel.getModel('splitArea');
    var areaStyleModel = splitAreaModel.getModel('areaStyle');
    var areaColors = areaStyleModel.get('color');
    var gridRect = gridModel.coordinateSystem.getRect();
    var ticksCoords = axis.getTicksCoords({
        tickModel: splitAreaModel,
        clamp: true,
        breakTicks: 'none',
        pruneByBreak: 'preserve_extent_bound'
    });
    if (!ticksCoords.length) {
        return;
    }
    // For Making appropriate splitArea animation, the color and anid
    // should be corresponding to previous one if possible.
    var areaColorsLen = areaColors.length;
    var lastSplitAreaColors = inner(axisView).splitAreaColors;
    var newSplitAreaColors = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createHashMap"]();
    var colorIndex = 0;
    if (lastSplitAreaColors) {
        for(var i = 0; i < ticksCoords.length; i++){
            var cIndex = lastSplitAreaColors.get(ticksCoords[i].tickValue);
            if (cIndex != null) {
                colorIndex = (cIndex + (areaColorsLen - 1) * i) % areaColorsLen;
                break;
            }
        }
    }
    var prev = axis.toGlobalCoord(ticksCoords[0].coord);
    var areaStyle = areaStyleModel.getAreaStyle();
    areaColors = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isArray"](areaColors) ? areaColors : [
        areaColors
    ];
    for(var i = 1; i < ticksCoords.length; i++){
        var tickCoord = axis.toGlobalCoord(ticksCoords[i].coord);
        var x = void 0;
        var y = void 0;
        var width = void 0;
        var height = void 0;
        if (axis.isHorizontal()) {
            x = prev;
            y = gridRect.y;
            width = tickCoord - x;
            height = gridRect.height;
            prev = x + width;
        } else {
            x = gridRect.x;
            y = prev;
            width = gridRect.width;
            height = tickCoord - y;
            prev = y + height;
        }
        var tickValue = ticksCoords[i - 1].tickValue;
        tickValue != null && newSplitAreaColors.set(tickValue, colorIndex);
        axisGroup.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Rect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Rect$3e$__["Rect"]({
            anid: tickValue != null ? 'area_' + tickValue : null,
            shape: {
                x: x,
                y: y,
                width: width,
                height: height
            },
            style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaults"]({
                fill: areaColors[colorIndex]
            }, areaStyle),
            autoBatch: true,
            silent: true
        }));
        colorIndex = (colorIndex + 1) % areaColorsLen;
    }
    inner(axisView).splitAreaColors = newSplitAreaColors;
}
function rectCoordAxisHandleRemove(axisView) {
    inner(axisView).splitAreaColors = null;
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axis/CartesianAxisView.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    "CartesianXAxisView",
    ()=>CartesianXAxisView,
    "CartesianYAxisView",
    ()=>CartesianYAxisView,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Group.js [app-ssr] (ecmascript) <export default as Group>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/graphic.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Line$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Line.js [app-ssr] (ecmascript) <export default as Line>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$AxisView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axis/AxisView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$axisSplitHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axis/axisSplitHelper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$axisBreakHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axis/axisBreakHelper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/axisHelper.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
var selfBuilderAttrs = [
    'splitArea',
    'splitLine',
    'minorSplitLine',
    'breakArea'
];
var CartesianAxisView = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(CartesianAxisView, _super);
    function CartesianAxisView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = CartesianAxisView.type;
        _this.axisPointerClass = 'CartesianAxisPointer';
        return _this;
    }
    /**
   * @override
   */ CartesianAxisView.prototype.render = function(axisModel, ecModel, api, payload) {
        this.group.removeAll();
        var oldAxisGroup = this._axisGroup;
        this._axisGroup = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__["Group"]();
        this.group.add(this._axisGroup);
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shouldAxisShow"])(axisModel)) {
            return;
        }
        this._axisGroup.add(axisModel.axis.axisBuilder.group);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"](selfBuilderAttrs, function(name) {
            if (axisModel.get([
                name,
                'show'
            ])) {
                axisElementBuilders[name](this, this._axisGroup, axisModel, axisModel.getCoordSysModel(), api);
            }
        }, this);
        // THIS is a special case for bar racing chart.
        // Update the axis label from the natural initial layout to
        // sorted layout should has no animation.
        var isInitialSortFromBarRacing = payload && payload.type === 'changeAxisOrder' && payload.isInitSort;
        if (!isInitialSortFromBarRacing) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["groupTransition"](oldAxisGroup, this._axisGroup, axisModel);
        }
        _super.prototype.render.call(this, axisModel, ecModel, api, payload);
    };
    CartesianAxisView.prototype.remove = function() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$axisSplitHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rectCoordAxisHandleRemove"])(this);
    };
    CartesianAxisView.type = 'cartesianAxis';
    return CartesianAxisView;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$AxisView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
var axisElementBuilders = {
    splitLine: function(axisView, axisGroup, axisModel, gridModel, api) {
        var axis = axisModel.axis;
        if (axis.scale.isBlank()) {
            return;
        }
        var splitLineModel = axisModel.getModel('splitLine');
        var lineStyleModel = splitLineModel.getModel('lineStyle');
        var lineColors = lineStyleModel.get('color');
        var showMinLine = splitLineModel.get('showMinLine') !== false;
        var showMaxLine = splitLineModel.get('showMaxLine') !== false;
        lineColors = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isArray"](lineColors) ? lineColors : [
            lineColors
        ];
        var gridRect = gridModel.coordinateSystem.getRect();
        var isHorizontal = axis.isHorizontal();
        var lineCount = 0;
        var ticksCoords = axis.getTicksCoords({
            tickModel: splitLineModel,
            breakTicks: 'none',
            pruneByBreak: 'preserve_extent_bound'
        });
        var p1 = [];
        var p2 = [];
        var lineStyle = lineStyleModel.getLineStyle();
        for(var i = 0; i < ticksCoords.length; i++){
            var tickCoord = axis.toGlobalCoord(ticksCoords[i].coord);
            if (i === 0 && !showMinLine || i === ticksCoords.length - 1 && !showMaxLine) {
                continue;
            }
            var tickValue = ticksCoords[i].tickValue;
            if (isHorizontal) {
                p1[0] = tickCoord;
                p1[1] = gridRect.y;
                p2[0] = tickCoord;
                p2[1] = gridRect.y + gridRect.height;
            } else {
                p1[0] = gridRect.x;
                p1[1] = tickCoord;
                p2[0] = gridRect.x + gridRect.width;
                p2[1] = tickCoord;
            }
            var colorIndex = lineCount++ % lineColors.length;
            var line = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Line$3e$__["Line"]({
                anid: tickValue != null ? 'line_' + tickValue : null,
                autoBatch: true,
                shape: {
                    x1: p1[0],
                    y1: p1[1],
                    x2: p2[0],
                    y2: p2[1]
                },
                style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaults"]({
                    stroke: lineColors[colorIndex]
                }, lineStyle),
                silent: true
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["subPixelOptimizeLine"](line.shape, lineStyle.lineWidth);
            axisGroup.add(line);
        }
    },
    minorSplitLine: function(axisView, axisGroup, axisModel, gridModel, api) {
        var axis = axisModel.axis;
        var minorSplitLineModel = axisModel.getModel('minorSplitLine');
        var lineStyleModel = minorSplitLineModel.getModel('lineStyle');
        var gridRect = gridModel.coordinateSystem.getRect();
        var isHorizontal = axis.isHorizontal();
        var minorTicksCoords = axis.getMinorTicksCoords();
        if (!minorTicksCoords.length) {
            return;
        }
        var p1 = [];
        var p2 = [];
        var lineStyle = lineStyleModel.getLineStyle();
        for(var i = 0; i < minorTicksCoords.length; i++){
            for(var k = 0; k < minorTicksCoords[i].length; k++){
                var tickCoord = axis.toGlobalCoord(minorTicksCoords[i][k].coord);
                if (isHorizontal) {
                    p1[0] = tickCoord;
                    p1[1] = gridRect.y;
                    p2[0] = tickCoord;
                    p2[1] = gridRect.y + gridRect.height;
                } else {
                    p1[0] = gridRect.x;
                    p1[1] = tickCoord;
                    p2[0] = gridRect.x + gridRect.width;
                    p2[1] = tickCoord;
                }
                var line = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Line$3e$__["Line"]({
                    anid: 'minor_line_' + minorTicksCoords[i][k].tickValue,
                    autoBatch: true,
                    shape: {
                        x1: p1[0],
                        y1: p1[1],
                        x2: p2[0],
                        y2: p2[1]
                    },
                    style: lineStyle,
                    silent: true
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["subPixelOptimizeLine"](line.shape, lineStyle.lineWidth);
                axisGroup.add(line);
            }
        }
    },
    splitArea: function(axisView, axisGroup, axisModel, gridModel, api) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$axisSplitHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rectCoordAxisBuildSplitArea"])(axisView, axisGroup, axisModel, gridModel);
    },
    breakArea: function(axisView, axisGroup, axisModel, gridModel, api) {
        var axisBreakHelper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$axisBreakHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAxisBreakHelper"])();
        var scale = axisModel.axis.scale;
        if (axisBreakHelper && scale.type !== 'ordinal') {
            axisBreakHelper.rectCoordBuildBreakAxis(axisGroup, axisView, axisModel, gridModel.coordinateSystem.getRect(), api);
        }
    }
};
var CartesianXAxisView = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(CartesianXAxisView, _super);
    function CartesianXAxisView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = CartesianXAxisView.type;
        return _this;
    }
    CartesianXAxisView.type = 'xAxis';
    return CartesianXAxisView;
}(CartesianAxisView);
;
var CartesianYAxisView = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(CartesianYAxisView, _super);
    function CartesianYAxisView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = CartesianXAxisView.type;
        return _this;
    }
    CartesianYAxisView.type = 'yAxis';
    return CartesianYAxisView;
}(CartesianAxisView);
;
const __TURBOPACK__default__export__ = CartesianAxisView;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axis/ParallelAxisView.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$AxisBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axis/AxisBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$BrushController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/helper/BrushController.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$brushHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/helper/brushHelper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Group.js [app-ssr] (ecmascript) <export default as Group>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/graphic.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$BoundingRect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BoundingRect$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/BoundingRect.js [app-ssr] (ecmascript) <export default as BoundingRect>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/view/Component.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
var ParallelAxisView = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(ParallelAxisView, _super);
    function ParallelAxisView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = ParallelAxisView.type;
        return _this;
    }
    ParallelAxisView.prototype.init = function(ecModel, api) {
        _super.prototype.init.apply(this, arguments);
        (this._brushController = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$BrushController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](api.getZr())).on('brush', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bind"](this._onBrush, this));
    };
    ParallelAxisView.prototype.render = function(axisModel, ecModel, api, payload) {
        if (fromAxisAreaSelect(axisModel, ecModel, payload)) {
            return;
        }
        this.axisModel = axisModel;
        this.api = api;
        this.group.removeAll();
        var oldAxisGroup = this._axisGroup;
        this._axisGroup = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__["Group"]();
        this.group.add(this._axisGroup);
        if (!axisModel.get('show')) {
            return;
        }
        var coordSysModel = getCoordSysModel(axisModel, ecModel);
        var coordSys = coordSysModel.coordinateSystem;
        var areaSelectStyle = axisModel.getAreaSelectStyle();
        var areaWidth = areaSelectStyle.width;
        var dim = axisModel.axis.dim;
        var axisLayout = coordSys.getAxisLayout(dim);
        var builderOpt = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extend"]({
            strokeContainThreshold: areaWidth
        }, axisLayout);
        var axisBuilder = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$AxisBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](axisModel, api, builderOpt);
        axisBuilder.build();
        this._axisGroup.add(axisBuilder.group);
        this._refreshBrushController(builderOpt, areaSelectStyle, axisModel, coordSysModel, areaWidth, api);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["groupTransition"](oldAxisGroup, this._axisGroup, axisModel);
    };
    // /**
    //  * @override
    //  */
    // updateVisual(axisModel, ecModel, api, payload) {
    //     this._brushController && this._brushController
    //         .updateCovers(getCoverInfoList(axisModel));
    // }
    ParallelAxisView.prototype._refreshBrushController = function(builderOpt, areaSelectStyle, axisModel, coordSysModel, areaWidth, api) {
        // After filtering, axis may change, select area needs to be update.
        var extent = axisModel.axis.getExtent();
        var extentLen = extent[1] - extent[0];
        var extra = Math.min(30, Math.abs(extentLen) * 0.1); // Arbitrary value.
        // width/height might be negative, which will be
        // normalized in BoundingRect.
        var rect = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$BoundingRect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BoundingRect$3e$__["BoundingRect"].create({
            x: extent[0],
            y: -areaWidth / 2,
            width: extentLen,
            height: areaWidth
        });
        rect.x -= extra;
        rect.width += 2 * extra;
        this._brushController.mount({
            enableGlobalPan: true,
            rotation: builderOpt.rotation,
            x: builderOpt.position[0],
            y: builderOpt.position[1]
        }).setPanels([
            {
                panelId: 'pl',
                clipPath: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$brushHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeRectPanelClipPath"](rect),
                isTargetByCursor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$brushHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeRectIsTargetByCursor"](rect, api, coordSysModel),
                getLinearBrushOtherExtent: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$brushHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeLinearBrushOtherExtent"](rect, 0)
            }
        ]).enableBrush({
            brushType: 'lineX',
            brushStyle: areaSelectStyle,
            removeOnClick: true
        }).updateCovers(getCoverInfoList(axisModel));
    };
    ParallelAxisView.prototype._onBrush = function(eventParam) {
        var coverInfoList = eventParam.areas;
        // Do not cache these object, because the mey be changed.
        var axisModel = this.axisModel;
        var axis = axisModel.axis;
        var intervals = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["map"](coverInfoList, function(coverInfo) {
            return [
                axis.coordToData(coverInfo.range[0], true),
                axis.coordToData(coverInfo.range[1], true)
            ];
        });
        // If realtime is true, action is not dispatched on drag end, because
        // the drag end emits the same params with the last drag move event,
        // and may have some delay when using touch pad.
        if (!axisModel.option.realtime === eventParam.isEnd || eventParam.removeOnClick) {
            // jshint ignore:line
            this.api.dispatchAction({
                type: 'axisAreaSelect',
                parallelAxisId: axisModel.id,
                intervals: intervals
            });
        }
    };
    ParallelAxisView.prototype.dispose = function() {
        this._brushController.dispose();
    };
    ParallelAxisView.type = 'parallelAxis';
    return ParallelAxisView;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
function fromAxisAreaSelect(axisModel, ecModel, payload) {
    return payload && payload.type === 'axisAreaSelect' && ecModel.findComponents({
        mainType: 'parallelAxis',
        query: payload
    })[0] === axisModel;
}
function getCoverInfoList(axisModel) {
    var axis = axisModel.axis;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["map"](axisModel.activeIntervals, function(interval) {
        return {
            brushType: 'lineX',
            panelId: 'pl',
            range: [
                axis.dataToCoord(interval[0], true),
                axis.dataToCoord(interval[1], true)
            ]
        };
    });
}
function getCoordSysModel(axisModel, ecModel) {
    return ecModel.getComponent('parallel', axisModel.get('parallelIndex'));
}
const __TURBOPACK__default__export__ = ParallelAxisView;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axis/parallelAxisAction.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    "installParallelActions",
    ()=>installParallelActions
]);
var actionInfo = {
    type: 'axisAreaSelect',
    event: 'axisAreaSelected'
};
function installParallelActions(registers) {
    registers.registerAction(actionInfo, function(payload, ecModel) {
        ecModel.eachComponent({
            mainType: 'parallelAxis',
            query: payload
        }, function(parallelAxisModel) {
            parallelAxisModel.axis.model.setActiveIntervals(payload.intervals);
        });
    });
    /**
   * @payload
   */ registers.registerAction('parallelAxisExpand', function(payload, ecModel) {
        ecModel.eachComponent({
            mainType: 'parallel',
            query: payload
        }, function(parallelModel) {
            parallelModel.setAxisExpand(payload);
        });
    });
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axis/AngleAxisView.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/graphic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/label/labelStyle.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/Model.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$AxisView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axis/AxisView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$AxisBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axis/AxisBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/innerStore.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
var elementList = [
    'axisLine',
    'axisLabel',
    'axisTick',
    'minorTick',
    'splitLine',
    'minorSplitLine',
    'splitArea'
];
function getAxisLineShape(polar, rExtent, angle) {
    rExtent[1] > rExtent[0] && (rExtent = rExtent.slice().reverse());
    var start = polar.coordToPoint([
        rExtent[0],
        angle
    ]);
    var end = polar.coordToPoint([
        rExtent[1],
        angle
    ]);
    return {
        x1: start[0],
        y1: start[1],
        x2: end[0],
        y2: end[1]
    };
}
function getRadiusIdx(polar) {
    var radiusAxis = polar.getRadiusAxis();
    return radiusAxis.inverse ? 0 : 1;
}
// Remove the last tick which will overlap the first tick
function fixAngleOverlap(list) {
    var firstItem = list[0];
    var lastItem = list[list.length - 1];
    if (firstItem && lastItem && Math.abs(Math.abs(firstItem.coord - lastItem.coord) - 360) < 1e-4) {
        list.pop();
    }
}
var AngleAxisView = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(AngleAxisView, _super);
    function AngleAxisView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = AngleAxisView.type;
        _this.axisPointerClass = 'PolarAxisPointer';
        return _this;
    }
    AngleAxisView.prototype.render = function(angleAxisModel, ecModel) {
        this.group.removeAll();
        if (!angleAxisModel.get('show')) {
            return;
        }
        var angleAxis = angleAxisModel.axis;
        var polar = angleAxis.polar;
        var radiusExtent = polar.getRadiusAxis().getExtent();
        var ticksAngles = angleAxis.getTicksCoords({
            breakTicks: 'none'
        });
        var minorTickAngles = angleAxis.getMinorTicksCoords();
        var labels = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["map"](angleAxis.getViewLabels(), function(labelItem) {
            labelItem = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clone"](labelItem);
            var scale = angleAxis.scale;
            var tickValue = scale.type === 'ordinal' ? scale.getRawOrdinalNumber(labelItem.tickValue) : labelItem.tickValue;
            labelItem.coord = angleAxis.dataToCoord(tickValue);
            return labelItem;
        });
        fixAngleOverlap(labels);
        fixAngleOverlap(ticksAngles);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"](elementList, function(name) {
            if (angleAxisModel.get([
                name,
                'show'
            ]) && (!angleAxis.scale.isBlank() || name === 'axisLine')) {
                angelAxisElementsBuilders[name](this.group, angleAxisModel, polar, ticksAngles, minorTickAngles, radiusExtent, labels);
            }
        }, this);
    };
    AngleAxisView.type = 'angleAxis';
    return AngleAxisView;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$AxisView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
var angelAxisElementsBuilders = {
    axisLine: function(group, angleAxisModel, polar, ticksAngles, minorTickAngles, radiusExtent) {
        var lineStyleModel = angleAxisModel.getModel([
            'axisLine',
            'lineStyle'
        ]);
        var angleAxis = polar.getAngleAxis();
        var RADIAN = Math.PI / 180;
        var angleExtent = angleAxis.getExtent();
        // extent id of the axis radius (r0 and r)
        var rId = getRadiusIdx(polar);
        var r0Id = rId ? 0 : 1;
        var shape;
        var shapeType = Math.abs(angleExtent[1] - angleExtent[0]) === 360 ? 'Circle' : 'Arc';
        if (radiusExtent[r0Id] === 0) {
            shape = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[shapeType]({
                shape: {
                    cx: polar.cx,
                    cy: polar.cy,
                    r: radiusExtent[rId],
                    startAngle: -angleExtent[0] * RADIAN,
                    endAngle: -angleExtent[1] * RADIAN,
                    clockwise: angleAxis.inverse
                },
                style: lineStyleModel.getLineStyle(),
                z2: 1,
                silent: true
            });
        } else {
            shape = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Ring({
                shape: {
                    cx: polar.cx,
                    cy: polar.cy,
                    r: radiusExtent[rId],
                    r0: radiusExtent[r0Id]
                },
                style: lineStyleModel.getLineStyle(),
                z2: 1,
                silent: true
            });
        }
        shape.style.fill = null;
        group.add(shape);
    },
    axisTick: function(group, angleAxisModel, polar, ticksAngles, minorTickAngles, radiusExtent) {
        var tickModel = angleAxisModel.getModel('axisTick');
        var tickLen = (tickModel.get('inside') ? -1 : 1) * tickModel.get('length');
        var radius = radiusExtent[getRadiusIdx(polar)];
        var lines = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["map"](ticksAngles, function(tickAngleItem) {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Line({
                shape: getAxisLineShape(polar, [
                    radius,
                    radius + tickLen
                ], tickAngleItem.coord)
            });
        });
        group.add(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.mergePath(lines, {
            style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaults"](tickModel.getModel('lineStyle').getLineStyle(), {
                stroke: angleAxisModel.get([
                    'axisLine',
                    'lineStyle',
                    'color'
                ])
            })
        }));
    },
    minorTick: function(group, angleAxisModel, polar, tickAngles, minorTickAngles, radiusExtent) {
        if (!minorTickAngles.length) {
            return;
        }
        var tickModel = angleAxisModel.getModel('axisTick');
        var minorTickModel = angleAxisModel.getModel('minorTick');
        var tickLen = (tickModel.get('inside') ? -1 : 1) * minorTickModel.get('length');
        var radius = radiusExtent[getRadiusIdx(polar)];
        var lines = [];
        for(var i = 0; i < minorTickAngles.length; i++){
            for(var k = 0; k < minorTickAngles[i].length; k++){
                lines.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Line({
                    shape: getAxisLineShape(polar, [
                        radius,
                        radius + tickLen
                    ], minorTickAngles[i][k].coord)
                }));
            }
        }
        group.add(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.mergePath(lines, {
            style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaults"](minorTickModel.getModel('lineStyle').getLineStyle(), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaults"](tickModel.getLineStyle(), {
                stroke: angleAxisModel.get([
                    'axisLine',
                    'lineStyle',
                    'color'
                ])
            }))
        }));
    },
    axisLabel: function(group, angleAxisModel, polar, ticksAngles, minorTickAngles, radiusExtent, labels) {
        var rawCategoryData = angleAxisModel.getCategories(true);
        var commonLabelModel = angleAxisModel.getModel('axisLabel');
        var labelMargin = commonLabelModel.get('margin');
        var triggerEvent = angleAxisModel.get('triggerEvent');
        // Use length of ticksAngles because it may remove the last tick to avoid overlapping
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"](labels, function(labelItem, idx) {
            var labelModel = commonLabelModel;
            var tickValue = labelItem.tickValue;
            var r = radiusExtent[getRadiusIdx(polar)];
            var p = polar.coordToPoint([
                r + labelMargin,
                labelItem.coord
            ]);
            var cx = polar.cx;
            var cy = polar.cy;
            var labelTextAlign = Math.abs(p[0] - cx) / r < 0.3 ? 'center' : p[0] > cx ? 'left' : 'right';
            var labelTextVerticalAlign = Math.abs(p[1] - cy) / r < 0.3 ? 'middle' : p[1] > cy ? 'top' : 'bottom';
            if (rawCategoryData && rawCategoryData[tickValue]) {
                var rawCategoryItem = rawCategoryData[tickValue];
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isObject"](rawCategoryItem) && rawCategoryItem.textStyle) {
                    labelModel = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](rawCategoryItem.textStyle, commonLabelModel, commonLabelModel.ecModel);
                }
            }
            var textEl = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Text({
                silent: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$AxisBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].isLabelSilent(angleAxisModel),
                style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createTextStyle"])(labelModel, {
                    x: p[0],
                    y: p[1],
                    fill: labelModel.getTextColor() || angleAxisModel.get([
                        'axisLine',
                        'lineStyle',
                        'color'
                    ]),
                    text: labelItem.formattedLabel,
                    align: labelTextAlign,
                    verticalAlign: labelTextVerticalAlign
                })
            });
            group.add(textEl);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.setTooltipConfig({
                el: textEl,
                componentModel: angleAxisModel,
                itemName: labelItem.formattedLabel,
                formatterParamsExtra: {
                    isTruncated: function() {
                        return textEl.isTruncated;
                    },
                    value: labelItem.rawLabel,
                    tickIndex: idx
                }
            });
            // Pack data for mouse event
            if (triggerEvent) {
                var eventData = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$AxisBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].makeAxisEventDataBase(angleAxisModel);
                eventData.targetType = 'axisLabel';
                eventData.value = labelItem.rawLabel;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getECData"])(textEl).eventData = eventData;
            }
        }, this);
    },
    splitLine: function(group, angleAxisModel, polar, ticksAngles, minorTickAngles, radiusExtent) {
        var splitLineModel = angleAxisModel.getModel('splitLine');
        var lineStyleModel = splitLineModel.getModel('lineStyle');
        var lineColors = lineStyleModel.get('color');
        var lineCount = 0;
        lineColors = lineColors instanceof Array ? lineColors : [
            lineColors
        ];
        var splitLines = [];
        for(var i = 0; i < ticksAngles.length; i++){
            var colorIndex = lineCount++ % lineColors.length;
            splitLines[colorIndex] = splitLines[colorIndex] || [];
            splitLines[colorIndex].push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Line({
                shape: getAxisLineShape(polar, radiusExtent, ticksAngles[i].coord)
            }));
        }
        // Simple optimization
        // Batching the lines if color are the same
        for(var i = 0; i < splitLines.length; i++){
            group.add(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.mergePath(splitLines[i], {
                style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaults"]({
                    stroke: lineColors[i % lineColors.length]
                }, lineStyleModel.getLineStyle()),
                silent: true,
                z: angleAxisModel.get('z')
            }));
        }
    },
    minorSplitLine: function(group, angleAxisModel, polar, ticksAngles, minorTickAngles, radiusExtent) {
        if (!minorTickAngles.length) {
            return;
        }
        var minorSplitLineModel = angleAxisModel.getModel('minorSplitLine');
        var lineStyleModel = minorSplitLineModel.getModel('lineStyle');
        var lines = [];
        for(var i = 0; i < minorTickAngles.length; i++){
            for(var k = 0; k < minorTickAngles[i].length; k++){
                lines.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Line({
                    shape: getAxisLineShape(polar, radiusExtent, minorTickAngles[i][k].coord)
                }));
            }
        }
        group.add(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.mergePath(lines, {
            style: lineStyleModel.getLineStyle(),
            silent: true,
            z: angleAxisModel.get('z')
        }));
    },
    splitArea: function(group, angleAxisModel, polar, ticksAngles, minorTickAngles, radiusExtent) {
        if (!ticksAngles.length) {
            return;
        }
        var splitAreaModel = angleAxisModel.getModel('splitArea');
        var areaStyleModel = splitAreaModel.getModel('areaStyle');
        var areaColors = areaStyleModel.get('color');
        var lineCount = 0;
        areaColors = areaColors instanceof Array ? areaColors : [
            areaColors
        ];
        var splitAreas = [];
        var RADIAN = Math.PI / 180;
        var prevAngle = -ticksAngles[0].coord * RADIAN;
        var r0 = Math.min(radiusExtent[0], radiusExtent[1]);
        var r1 = Math.max(radiusExtent[0], radiusExtent[1]);
        var clockwise = angleAxisModel.get('clockwise');
        for(var i = 1, len = ticksAngles.length; i <= len; i++){
            var coord = i === len ? ticksAngles[0].coord : ticksAngles[i].coord;
            var colorIndex = lineCount++ % areaColors.length;
            splitAreas[colorIndex] = splitAreas[colorIndex] || [];
            splitAreas[colorIndex].push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Sector({
                shape: {
                    cx: polar.cx,
                    cy: polar.cy,
                    r0: r0,
                    r: r1,
                    startAngle: prevAngle,
                    endAngle: -coord * RADIAN,
                    clockwise: clockwise
                },
                silent: true
            }));
            prevAngle = -coord * RADIAN;
        }
        // Simple optimization
        // Batching the lines if color are the same
        for(var i = 0; i < splitAreas.length; i++){
            group.add(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.mergePath(splitAreas[i], {
                style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaults"]({
                    fill: areaColors[i % areaColors.length]
                }, areaStyleModel.getAreaStyle()),
                silent: true
            }));
        }
    }
};
const __TURBOPACK__default__export__ = AngleAxisView;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axis/RadiusAxisView.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/graphic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$AxisBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axis/AxisBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$AxisView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axis/AxisView.js [app-ssr] (ecmascript)");
;
;
;
;
;
var selfBuilderAttrs = [
    'splitLine',
    'splitArea',
    'minorSplitLine'
];
var RadiusAxisView = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(RadiusAxisView, _super);
    function RadiusAxisView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = RadiusAxisView.type;
        _this.axisPointerClass = 'PolarAxisPointer';
        return _this;
    }
    RadiusAxisView.prototype.render = function(radiusAxisModel, ecModel, api) {
        this.group.removeAll();
        if (!radiusAxisModel.get('show')) {
            return;
        }
        var oldAxisGroup = this._axisGroup;
        var newAxisGroup = this._axisGroup = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Group();
        this.group.add(newAxisGroup);
        var radiusAxis = radiusAxisModel.axis;
        var polar = radiusAxis.polar;
        var angleAxis = polar.getAngleAxis();
        var ticksCoords = radiusAxis.getTicksCoords();
        var minorTicksCoords = radiusAxis.getMinorTicksCoords();
        var axisAngle = angleAxis.getExtent()[0];
        var radiusExtent = radiusAxis.getExtent();
        var layout = layoutAxis(polar, radiusAxisModel, axisAngle);
        var axisBuilder = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$AxisBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](radiusAxisModel, api, layout);
        axisBuilder.build();
        newAxisGroup.add(axisBuilder.group);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.groupTransition(oldAxisGroup, newAxisGroup, radiusAxisModel);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"](selfBuilderAttrs, function(name) {
            if (radiusAxisModel.get([
                name,
                'show'
            ]) && !radiusAxis.scale.isBlank()) {
                axisElementBuilders[name](this.group, radiusAxisModel, polar, axisAngle, radiusExtent, ticksCoords, minorTicksCoords);
            }
        }, this);
    };
    RadiusAxisView.type = 'radiusAxis';
    return RadiusAxisView;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$AxisView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
var axisElementBuilders = {
    splitLine: function(group, radiusAxisModel, polar, axisAngle, radiusExtent, ticksCoords) {
        var splitLineModel = radiusAxisModel.getModel('splitLine');
        var lineStyleModel = splitLineModel.getModel('lineStyle');
        var lineColors = lineStyleModel.get('color');
        var lineCount = 0;
        var angleAxis = polar.getAngleAxis();
        var RADIAN = Math.PI / 180;
        var angleExtent = angleAxis.getExtent();
        var shapeType = Math.abs(angleExtent[1] - angleExtent[0]) === 360 ? 'Circle' : 'Arc';
        lineColors = lineColors instanceof Array ? lineColors : [
            lineColors
        ];
        var splitLines = [];
        for(var i = 0; i < ticksCoords.length; i++){
            var colorIndex = lineCount++ % lineColors.length;
            splitLines[colorIndex] = splitLines[colorIndex] || [];
            splitLines[colorIndex].push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[shapeType]({
                shape: {
                    cx: polar.cx,
                    cy: polar.cy,
                    // ensure circle radius >= 0
                    r: Math.max(ticksCoords[i].coord, 0),
                    startAngle: -angleExtent[0] * RADIAN,
                    endAngle: -angleExtent[1] * RADIAN,
                    clockwise: angleAxis.inverse
                }
            }));
        }
        // Simple optimization
        // Batching the lines if color are the same
        for(var i = 0; i < splitLines.length; i++){
            group.add(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.mergePath(splitLines[i], {
                style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaults"]({
                    stroke: lineColors[i % lineColors.length],
                    fill: null
                }, lineStyleModel.getLineStyle()),
                silent: true
            }));
        }
    },
    minorSplitLine: function(group, radiusAxisModel, polar, axisAngle, radiusExtent, ticksCoords, minorTicksCoords) {
        if (!minorTicksCoords.length) {
            return;
        }
        var minorSplitLineModel = radiusAxisModel.getModel('minorSplitLine');
        var lineStyleModel = minorSplitLineModel.getModel('lineStyle');
        var lines = [];
        for(var i = 0; i < minorTicksCoords.length; i++){
            for(var k = 0; k < minorTicksCoords[i].length; k++){
                lines.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Circle({
                    shape: {
                        cx: polar.cx,
                        cy: polar.cy,
                        r: minorTicksCoords[i][k].coord
                    }
                }));
            }
        }
        group.add(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.mergePath(lines, {
            style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaults"]({
                fill: null
            }, lineStyleModel.getLineStyle()),
            silent: true
        }));
    },
    splitArea: function(group, radiusAxisModel, polar, axisAngle, radiusExtent, ticksCoords) {
        if (!ticksCoords.length) {
            return;
        }
        var splitAreaModel = radiusAxisModel.getModel('splitArea');
        var areaStyleModel = splitAreaModel.getModel('areaStyle');
        var areaColors = areaStyleModel.get('color');
        var lineCount = 0;
        areaColors = areaColors instanceof Array ? areaColors : [
            areaColors
        ];
        var splitAreas = [];
        var prevRadius = ticksCoords[0].coord;
        for(var i = 1; i < ticksCoords.length; i++){
            var colorIndex = lineCount++ % areaColors.length;
            splitAreas[colorIndex] = splitAreas[colorIndex] || [];
            splitAreas[colorIndex].push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Sector({
                shape: {
                    cx: polar.cx,
                    cy: polar.cy,
                    r0: prevRadius,
                    r: ticksCoords[i].coord,
                    startAngle: 0,
                    endAngle: Math.PI * 2
                },
                silent: true
            }));
            prevRadius = ticksCoords[i].coord;
        }
        // Simple optimization
        // Batching the lines if color are the same
        for(var i = 0; i < splitAreas.length; i++){
            group.add(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.mergePath(splitAreas[i], {
                style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaults"]({
                    fill: areaColors[i % areaColors.length]
                }, areaStyleModel.getAreaStyle()),
                silent: true
            }));
        }
    }
};
/**
 * @inner
 */ function layoutAxis(polar, radiusAxisModel, axisAngle) {
    return {
        position: [
            polar.cx,
            polar.cy
        ],
        rotation: axisAngle / 180 * Math.PI,
        labelDirection: -1,
        tickDirection: -1,
        nameDirection: 1,
        labelRotate: radiusAxisModel.getModel('axisLabel').get('rotate'),
        // Over splitLine and splitArea
        z2: 1
    };
}
const __TURBOPACK__default__export__ = RadiusAxisView;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axis/SingleAxisView.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$AxisBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axis/AxisBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Group.js [app-ssr] (ecmascript) <export default as Group>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/graphic.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Line$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Line.js [app-ssr] (ecmascript) <export default as Line>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$single$2f$singleAxisHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/single/singleAxisHelper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$AxisView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axis/AxisView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$axisSplitHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axis/axisSplitHelper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$axisBreakHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axis/axisBreakHelper.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
var selfBuilderAttrs = [
    'splitArea',
    'splitLine',
    'breakArea'
];
var SingleAxisView = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(SingleAxisView, _super);
    function SingleAxisView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = SingleAxisView.type;
        _this.axisPointerClass = 'SingleAxisPointer';
        return _this;
    }
    SingleAxisView.prototype.render = function(axisModel, ecModel, api, payload) {
        var group = this.group;
        group.removeAll();
        var oldAxisGroup = this._axisGroup;
        this._axisGroup = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__["Group"]();
        var layout = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$single$2f$singleAxisHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["layout"](axisModel);
        var axisBuilder = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$AxisBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](axisModel, api, layout);
        axisBuilder.build();
        group.add(this._axisGroup);
        group.add(axisBuilder.group);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"](selfBuilderAttrs, function(name) {
            if (axisModel.get([
                name,
                'show'
            ])) {
                axisElementBuilders[name](this, this.group, this._axisGroup, axisModel, api);
            }
        }, this);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["groupTransition"](oldAxisGroup, this._axisGroup, axisModel);
        _super.prototype.render.call(this, axisModel, ecModel, api, payload);
    };
    SingleAxisView.prototype.remove = function() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$axisSplitHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rectCoordAxisHandleRemove"])(this);
    };
    SingleAxisView.type = 'singleAxis';
    return SingleAxisView;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$AxisView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
var axisElementBuilders = {
    splitLine: function(axisView, group, axisGroup, axisModel, api) {
        var axis = axisModel.axis;
        if (axis.scale.isBlank()) {
            return;
        }
        var splitLineModel = axisModel.getModel('splitLine');
        var lineStyleModel = splitLineModel.getModel('lineStyle');
        var lineColors = lineStyleModel.get('color');
        lineColors = lineColors instanceof Array ? lineColors : [
            lineColors
        ];
        var lineWidth = lineStyleModel.get('width');
        var gridRect = axisModel.coordinateSystem.getRect();
        var isHorizontal = axis.isHorizontal();
        var splitLines = [];
        var lineCount = 0;
        var ticksCoords = axis.getTicksCoords({
            tickModel: splitLineModel,
            breakTicks: 'none',
            pruneByBreak: 'preserve_extent_bound'
        });
        var p1 = [];
        var p2 = [];
        for(var i = 0; i < ticksCoords.length; ++i){
            var tickCoord = axis.toGlobalCoord(ticksCoords[i].coord);
            if (isHorizontal) {
                p1[0] = tickCoord;
                p1[1] = gridRect.y;
                p2[0] = tickCoord;
                p2[1] = gridRect.y + gridRect.height;
            } else {
                p1[0] = gridRect.x;
                p1[1] = tickCoord;
                p2[0] = gridRect.x + gridRect.width;
                p2[1] = tickCoord;
            }
            var line = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Line$3e$__["Line"]({
                shape: {
                    x1: p1[0],
                    y1: p1[1],
                    x2: p2[0],
                    y2: p2[1]
                },
                silent: true
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["subPixelOptimizeLine"](line.shape, lineWidth);
            var colorIndex = lineCount++ % lineColors.length;
            splitLines[colorIndex] = splitLines[colorIndex] || [];
            splitLines[colorIndex].push(line);
        }
        var lineStyle = lineStyleModel.getLineStyle([
            'color'
        ]);
        for(var i = 0; i < splitLines.length; ++i){
            group.add(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["mergePath"](splitLines[i], {
                style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaults"]({
                    stroke: lineColors[i % lineColors.length]
                }, lineStyle),
                silent: true
            }));
        }
    },
    splitArea: function(axisView, group, axisGroup, axisModel, api) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$axisSplitHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rectCoordAxisBuildSplitArea"])(axisView, axisGroup, axisModel, axisModel);
    },
    breakArea: function(axisView, group, axisGroup, axisModel, api) {
        var axisBreakHelper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$axisBreakHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAxisBreakHelper"])();
        var scale = axisModel.axis.scale;
        if (axisBreakHelper && scale.type !== 'ordinal') {
            axisBreakHelper.rectCoordBuildBreakAxis(group, axisView, axisModel, axisModel.coordinateSystem.getRect(), api);
        }
    }
};
const __TURBOPACK__default__export__ = SingleAxisView;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axis/axisBreakHelperImpl.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    "installAxisBreakHelper",
    ()=>installAxisBreakHelper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$break$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/scale/break.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$helper$2f$subPixelOptimize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/helper/subPixelOptimize.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$matrix$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/matrix.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$axisAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axis/axisAction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelLayoutHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/label/labelLayoutHelper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$axisBreakHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axis/axisBreakHelper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/log.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Group.js [app-ssr] (ecmascript) <export default as Group>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Line$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Line.js [app-ssr] (ecmascript) <export default as Line>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$Point$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Point$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/Point.js [app-ssr] (ecmascript) <export default as Point>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Polygon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Polygon$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Polygon.js [app-ssr] (ecmascript) <export default as Polygon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Polyline$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Polyline$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Polyline.js [app-ssr] (ecmascript) <export default as Polyline>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/graphic.js [app-ssr] (ecmascript) <locals>");
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
/**
 * @caution
 *  Must not export anything except `installAxisBreakHelper`
 */ /**
 * The zigzag shapes for axis breaks are generated according to some random
 * factors. It should persist as much as possible to avoid constantly
 * changing by every user operation.
 */ var viewCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeInner"])();
function ensureVisualInCache(visualList, targetBreak) {
    var visual = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["find"])(visualList, function(item) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$break$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getScaleBreakHelper"])().identifyAxisBreak(item.parsedBreak.breakOption, targetBreak.breakOption);
    });
    if (!visual) {
        visualList.push(visual = {
            zigzagRandomList: [],
            parsedBreak: targetBreak,
            shouldRemove: false
        });
    }
    return visual;
}
function resetCacheVisualRemoveFlag(visualList) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(visualList, function(item) {
        return item.shouldRemove = true;
    });
}
function removeUnusedCacheVisual(visualList) {
    for(var i = visualList.length - 1; i >= 0; i--){
        if (visualList[i].shouldRemove) {
            visualList.splice(i, 1);
        }
    }
}
function rectCoordBuildBreakAxis(axisGroup, axisView, axisModel, coordSysRect, api) {
    var axis = axisModel.axis;
    if (axis.scale.isBlank() || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$break$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getScaleBreakHelper"])()) {
        return;
    }
    var breakPairs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$break$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getScaleBreakHelper"])().retrieveAxisBreakPairs(axis.scale.getTicks({
        breakTicks: 'only_break'
    }), function(tick) {
        return tick["break"];
    }, false);
    if (!breakPairs.length) {
        return;
    }
    var breakAreaModel = axisModel.getModel('breakArea');
    var zigzagAmplitude = breakAreaModel.get('zigzagAmplitude');
    var zigzagMinSpan = breakAreaModel.get('zigzagMinSpan');
    var zigzagMaxSpan = breakAreaModel.get('zigzagMaxSpan');
    // Use arbitrary value to avoid dead loop if user gives inappropriate settings.
    zigzagMinSpan = Math.max(2, zigzagMinSpan || 0);
    zigzagMaxSpan = Math.max(zigzagMinSpan, zigzagMaxSpan || 0);
    var expandOnClick = breakAreaModel.get('expandOnClick');
    var zigzagZ = breakAreaModel.get('zigzagZ');
    var itemStyleModel = breakAreaModel.getModel('itemStyle');
    var itemStyle = itemStyleModel.getItemStyle();
    var borderColor = itemStyle.stroke;
    var borderWidth = itemStyle.lineWidth;
    var borderType = itemStyle.lineDash;
    var color = itemStyle.fill;
    var group = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__["Group"]({
        ignoreModelZ: true
    });
    var isAxisHorizontal = axis.isHorizontal();
    var cachedVisualList = viewCache(axisView).visualList || (viewCache(axisView).visualList = []);
    resetCacheVisualRemoveFlag(cachedVisualList);
    var _loop_1 = function(i) {
        var parsedBreak = breakPairs[i][0]["break"].parsedBreak;
        // Even if brk.gap is 0, we should also draw the breakArea because
        // border is sometimes required to be visible (as a line)
        var coords = [];
        coords[0] = axis.toGlobalCoord(axis.dataToCoord(parsedBreak.vmin, true));
        coords[1] = axis.toGlobalCoord(axis.dataToCoord(parsedBreak.vmax, true));
        if (coords[1] < coords[0]) {
            coords.reverse();
        }
        var cachedVisual = ensureVisualInCache(cachedVisualList, parsedBreak);
        cachedVisual.shouldRemove = false;
        var breakGroup = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__["Group"]();
        addZigzagShapes(cachedVisual.zigzagRandomList, breakGroup, coords[0], coords[1], isAxisHorizontal, parsedBreak);
        if (expandOnClick) {
            breakGroup.on('click', function() {
                var payload = {
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$axisAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AXIS_BREAK_EXPAND_ACTION_TYPE"],
                    breaks: [
                        {
                            start: parsedBreak.breakOption.start,
                            end: parsedBreak.breakOption.end
                        }
                    ]
                };
                payload[axis.dim + "AxisIndex"] = axisModel.componentIndex;
                api.dispatchAction(payload);
            });
        }
        breakGroup.silent = !expandOnClick;
        group.add(breakGroup);
    };
    for(var i = 0; i < breakPairs.length; i++){
        _loop_1(i);
    }
    axisGroup.add(group);
    removeUnusedCacheVisual(cachedVisualList);
    function addZigzagShapes(zigzagRandomList, breakGroup, startCoord, endCoord, isAxisHorizontal, trimmedBreak) {
        var polylineStyle = {
            stroke: borderColor,
            lineWidth: borderWidth,
            lineDash: borderType,
            fill: 'none'
        };
        var dimBrk = isAxisHorizontal ? 0 : 1;
        var dimZigzag = 1 - dimBrk;
        var zigzagCoordMax = coordSysRect[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["XY"][dimZigzag]] + coordSysRect[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WH"][dimZigzag]];
        // Apply `subPixelOptimizeLine` for alignning with break ticks.
        function subPixelOpt(brkCoord) {
            var pBrk = [];
            var dummyP = [];
            pBrk[dimBrk] = dummyP[dimBrk] = brkCoord;
            pBrk[dimZigzag] = coordSysRect[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["XY"][dimZigzag]];
            dummyP[dimZigzag] = zigzagCoordMax;
            var dummyShape = {
                x1: pBrk[0],
                y1: pBrk[1],
                x2: dummyP[0],
                y2: dummyP[1]
            };
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$helper$2f$subPixelOptimize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["subPixelOptimizeLine"])(dummyShape, dummyShape, {
                lineWidth: 1
            });
            pBrk[0] = dummyShape.x1;
            pBrk[1] = dummyShape.y1;
            return pBrk[dimBrk];
        }
        startCoord = subPixelOpt(startCoord);
        endCoord = subPixelOpt(endCoord);
        var pointsA = [];
        var pointsB = [];
        var isSwap = true;
        var current = coordSysRect[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["XY"][dimZigzag]];
        for(var idx = 0;; idx++){
            // Use `isFirstPoint` `isLastPoint` to ensure the intersections between zigzag
            // and axis are precise, thus it can join its axis tick correctly.
            var isFirstPoint = current === coordSysRect[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["XY"][dimZigzag]];
            var isLastPoint = current >= zigzagCoordMax;
            if (isLastPoint) {
                current = zigzagCoordMax;
            }
            var pA = [];
            var pB = [];
            pA[dimBrk] = startCoord;
            pB[dimBrk] = endCoord;
            if (!isFirstPoint && !isLastPoint) {
                pA[dimBrk] += isSwap ? -zigzagAmplitude : zigzagAmplitude;
                pB[dimBrk] -= !isSwap ? -zigzagAmplitude : zigzagAmplitude;
            }
            pA[dimZigzag] = current;
            pB[dimZigzag] = current;
            pointsA.push(pA);
            pointsB.push(pB);
            var randomVal = void 0;
            if (idx < zigzagRandomList.length) {
                randomVal = zigzagRandomList[idx];
            } else {
                randomVal = Math.random();
                zigzagRandomList.push(randomVal);
            }
            current += randomVal * (zigzagMaxSpan - zigzagMinSpan) + zigzagMinSpan;
            isSwap = !isSwap;
            if (isLastPoint) {
                break;
            }
        }
        var anidSuffix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$break$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getScaleBreakHelper"])().serializeAxisBreakIdentifier(trimmedBreak.breakOption);
        // Create two polylines and add them to the breakGroup
        breakGroup.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Polyline$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Polyline$3e$__["Polyline"]({
            anid: "break_a_" + anidSuffix,
            shape: {
                points: pointsA
            },
            style: polylineStyle,
            z: zigzagZ
        }));
        /* Add the second polyline and a polygon only if the gap is not zero
     * Otherwise if the polyline is with dashed line or being opaque,
     * it may not be constant with breaks with non-zero gaps. */ if (trimmedBreak.gapReal !== 0) {
            breakGroup.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Polyline$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Polyline$3e$__["Polyline"]({
                anid: "break_b_" + anidSuffix,
                shape: {
                    // Not reverse to keep the dash stable when dragging resizing.
                    points: pointsB
                },
                style: polylineStyle,
                z: zigzagZ
            }));
            // Creating the polygon that fills the area between the polylines
            // From end to start for polygon.
            var pointsB2 = pointsB.slice();
            pointsB2.reverse();
            var polygonPoints = pointsA.concat(pointsB2);
            breakGroup.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Polygon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Polygon$3e$__["Polygon"]({
                anid: "break_c_" + anidSuffix,
                shape: {
                    points: polygonPoints
                },
                style: {
                    fill: color,
                    opacity: itemStyle.opacity
                },
                z: zigzagZ
            }));
        }
    }
}
function buildAxisBreakLine(axisModel, group, transformGroup, pathBaseProp) {
    var axis = axisModel.axis;
    var transform = transformGroup.transform;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(pathBaseProp.style);
    var extent = axis.getExtent();
    if (axis.inverse) {
        extent = extent.slice();
        extent.reverse();
    }
    var breakPairs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$break$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getScaleBreakHelper"])().retrieveAxisBreakPairs(axis.scale.getTicks({
        breakTicks: 'only_break'
    }), function(tick) {
        return tick["break"];
    }, false);
    var brkLayoutList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["map"])(breakPairs, function(breakPair) {
        var parsedBreak = breakPair[0]["break"].parsedBreak;
        var coordPair = [
            axis.dataToCoord(parsedBreak.vmin, true),
            axis.dataToCoord(parsedBreak.vmax, true)
        ];
        coordPair[0] > coordPair[1] && coordPair.reverse();
        return {
            coordPair: coordPair,
            brkId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$break$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getScaleBreakHelper"])().serializeAxisBreakIdentifier(parsedBreak.breakOption)
        };
    });
    brkLayoutList.sort(function(layout1, layout2) {
        return layout1.coordPair[0] - layout2.coordPair[0];
    });
    var ySegMin = extent[0];
    var lastLayout = null;
    for(var idx = 0; idx < brkLayoutList.length; idx++){
        var layout = brkLayoutList[idx];
        var brkTirmmedMin = Math.max(layout.coordPair[0], extent[0]);
        var brkTirmmedMax = Math.min(layout.coordPair[1], extent[1]);
        if (ySegMin <= brkTirmmedMin) {
            addSeg(ySegMin, brkTirmmedMin, lastLayout, layout);
        }
        ySegMin = brkTirmmedMax;
        lastLayout = layout;
    }
    if (ySegMin <= extent[1]) {
        addSeg(ySegMin, extent[1], lastLayout, null);
    }
    function addSeg(min, max, layout1, layout2) {
        function trans(p1, p2) {
            if (transform) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["applyTransform"])(p1, p1, transform);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["applyTransform"])(p2, p2, transform);
            }
        }
        function subPixelOptimizePP(p1, p2) {
            var shape = {
                x1: p1[0],
                y1: p1[1],
                x2: p2[0],
                y2: p2[1]
            };
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$helper$2f$subPixelOptimize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["subPixelOptimizeLine"])(shape, shape, pathBaseProp.style);
            p1[0] = shape.x1;
            p1[1] = shape.y1;
            p2[0] = shape.x2;
            p2[1] = shape.y2;
        }
        var lineP1 = [
            min,
            0
        ];
        var lineP2 = [
            max,
            0
        ];
        // dummy tick is used to align the line segment ends with axis ticks
        // after `subPixelOptimizeLine` being applied.
        var dummyTickEnd1 = [
            min,
            5
        ];
        var dummyTickEnd2 = [
            max,
            5
        ];
        trans(lineP1, dummyTickEnd1);
        subPixelOptimizePP(lineP1, dummyTickEnd1);
        trans(lineP2, dummyTickEnd2);
        subPixelOptimizePP(lineP2, dummyTickEnd2);
        // Apply it keeping the same as the normal axis line.
        subPixelOptimizePP(lineP1, lineP2);
        var seg = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Line$3e$__["Line"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extend"])({
            shape: {
                x1: lineP1[0],
                y1: lineP1[1],
                x2: lineP2[0],
                y2: lineP2[1]
            }
        }, pathBaseProp));
        group.add(seg);
        // Animation should be precise to be consistent with tick and split line animation.
        seg.anid = "breakLine_" + (layout1 ? layout1.brkId : '\0') + "_\0_" + (layout2 ? layout2.brkId : '\0');
    }
}
/**
 * Resolve the overlap of a pair of labels.
 *
 * [CAUTION] Only label.x/y are allowed to change.
 */ function adjustBreakLabelPair(axisInverse, axisRotation, layoutPair) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["find"])(layoutPair, function(item) {
        return !item;
    })) {
        return;
    }
    var mtv = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$Point$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Point$3e$__["Point"]();
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelLayoutHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["labelIntersect"])(layoutPair[0], layoutPair[1], mtv, {
        // Assert `labelPair` is `[break_min, break_max]`.
        // `axis.inverse: true` means a smaller scale value corresponds to a bigger value in axis.extent.
        // The axisRotation indicates mtv direction of OBB intersecting.
        direction: -(axisInverse ? axisRotation + Math.PI : axisRotation),
        touchThreshold: 0,
        // If need to resovle intersection align axis by moving labels according to MTV,
        // the direction must not be opposite, otherwise cause misleading.
        bidirectional: false
    })) {
        return;
    }
    // Rotate axis back to (1, 0) direction, to be a standard axis.
    var axisStTrans = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$matrix$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"]();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$matrix$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotate"](axisStTrans, axisStTrans, -axisRotation);
    var labelPairStTrans = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["map"])(layoutPair, function(layout) {
        return layout.transform ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$matrix$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mul"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$matrix$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"](), axisStTrans, layout.transform) : axisStTrans;
    });
    function isParallelToAxis(whIdx) {
        // Assert label[0] and label[1] has the same rotation, so only use [0].
        var localRect = layoutPair[0].localRect;
        var labelVec0 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$Point$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Point$3e$__["Point"](localRect[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WH"][whIdx]] * labelPairStTrans[0][0], localRect[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WH"][whIdx]] * labelPairStTrans[0][1]);
        return Math.abs(labelVec0.y) < 1e-5;
    }
    // If overlapping, move pair[0] pair[1] apart a little. We need to calculate a ratio k to
    // distribute mtv to pair[0] and pair[1]. This is to place the text gap as close as possible
    // to the center of the break ticks, otherwise it might looks weird or misleading.
    // - When labels' width/height are not parallel to axis (usually by rotation),
    //  we can simply treat the k as `0.5`.
    var k = 0.5;
    // - When labels' width/height are parallel to axis, the width/height need to be considered,
    //  since they may differ significantly. In this case we keep textAlign as 'center' rather
    //  than 'left'/'right', due to considerations of space utilization for wide break.gap.
    //  A sample case: break on xAxis(no inverse) is [200, 300000].
    //  We calculate k based on the formula below:
    //      Rotated axis and labels to the direction of (1, 0).
    //      uval = ( (pair[0].insidePt - mtv*k) + (pair[1].insidePt + mtv*(1-k)) ) / 2 - brkCenter
    //      0 <= k <= 1
    //      |uval| should be as small as possible.
    //  Derived as follows:
    //      qval = (pair[0].insidePt + pair[1].insidePt + mtv) / 2 - brkCenter
    //      k = (qval - uval) / mtv
    //      min(qval, qval-mtv) <= uval <= max(qval, qval-mtv)
    if (isParallelToAxis(0) || isParallelToAxis(1)) {
        var rectSt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["map"])(layoutPair, function(layout, idx) {
            var rect = layout.localRect.clone();
            rect.applyTransform(labelPairStTrans[idx]);
            return rect;
        });
        var brkCenterSt = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$Point$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Point$3e$__["Point"]();
        brkCenterSt.copy(layoutPair[0].label).add(layoutPair[1].label).scale(0.5);
        brkCenterSt.transform(axisStTrans);
        var mtvSt = mtv.clone().transform(axisStTrans);
        var insidePtSum = rectSt[0].x + rectSt[1].x + (mtvSt.x >= 0 ? rectSt[0].width : rectSt[1].width);
        var qval = (insidePtSum + mtvSt.x) / 2 - brkCenterSt.x;
        var uvalMin = Math.min(qval, qval - mtvSt.x);
        var uvalMax = Math.max(qval, qval - mtvSt.x);
        var uval = uvalMax < 0 ? uvalMax : uvalMin > 0 ? uvalMin : 0;
        k = (qval - uval) / mtvSt.x;
    }
    var delta0 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$Point$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Point$3e$__["Point"]();
    var delta1 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$Point$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Point$3e$__["Point"]();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$Point$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Point$3e$__["Point"].scale(delta0, mtv, -k);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$Point$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Point$3e$__["Point"].scale(delta1, mtv, 1 - k);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelLayoutHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["labelLayoutApplyTranslation"])(layoutPair[0], delta0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelLayoutHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["labelLayoutApplyTranslation"])(layoutPair[1], delta1);
}
function updateModelAxisBreak(model, payload) {
    var result = {
        breaks: []
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(payload.breaks, function(inputBrk) {
        if (!inputBrk) {
            return;
        }
        var breakOption = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["find"])(model.get('breaks', true), function(brkOption) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$break$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getScaleBreakHelper"])().identifyAxisBreak(brkOption, inputBrk);
        });
        if (!breakOption) {
            if ("TURBOPACK compile-time truthy", 1) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["warn"])("Can not find axis break by start: " + inputBrk.start + ", end: " + inputBrk.end);
            }
            return;
        }
        var actionType = payload.type;
        var old = {
            isExpanded: !!breakOption.isExpanded
        };
        breakOption.isExpanded = actionType === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$axisAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AXIS_BREAK_EXPAND_ACTION_TYPE"] ? true : actionType === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$axisAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AXIS_BREAK_COLLAPSE_ACTION_TYPE"] ? false : actionType === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$axisAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AXIS_BREAK_TOGGLE_ACTION_TYPE"] ? !breakOption.isExpanded : breakOption.isExpanded;
        result.breaks.push({
            start: breakOption.start,
            end: breakOption.end,
            isExpanded: !!breakOption.isExpanded,
            old: old
        });
    });
    return result;
}
function installAxisBreakHelper() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$axisBreakHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerAxisBreakHelperImpl"])({
        adjustBreakLabelPair: adjustBreakLabelPair,
        buildAxisBreakLine: buildAxisBreakLine,
        rectCoordBuildBreakAxis: rectCoordBuildBreakAxis,
        updateModelAxisBreak: updateModelAxisBreak
    });
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axis/installBreak.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    "installAxisBreak",
    ()=>installAxisBreak
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$breakImpl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/scale/breakImpl.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$axisAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axis/axisAction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$axisBreakHelperImpl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axis/axisBreakHelperImpl.js [app-ssr] (ecmascript)");
;
;
;
function installAxisBreak(registers) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$axisAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerAction"])(registers);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$breakImpl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["installScaleBreakHelper"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$axisBreakHelperImpl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["installAxisBreakHelper"])();
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axis/installBreak.js [app-ssr] (ecmascript) <export installAxisBreak as AxisBreak>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AxisBreak",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$installBreak$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["installAxisBreak"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$installBreak$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axis/installBreak.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=6e80b_echarts_lib_component_axis_764403f4._.js.map