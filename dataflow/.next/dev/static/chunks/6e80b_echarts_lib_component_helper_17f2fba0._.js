(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/helper/listComponent.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    "makeBackground",
    ()=>makeBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/format.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Rect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rect$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Rect.js [app-client] (ecmascript) <export default as Rect>");
;
;
;
function makeBackground(rect, componentModel) {
    var padding = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["normalizeCssArray"](componentModel.get('padding'));
    var style = componentModel.getItemStyle([
        'color',
        'opacity'
    ]);
    style.fill = componentModel.get('backgroundColor');
    var bgRect = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Rect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rect$3e$__["Rect"]({
        shape: {
            x: rect.x - padding[3],
            y: rect.y - padding[0],
            width: rect.width + padding[1] + padding[3],
            height: rect.height + padding[0] + padding[2],
            r: componentModel.get('borderRadius')
        },
        style: style,
        silent: true,
        z2: -1
    });
    // FIXME
    // `subPixelOptimizeRect` may bring some gap between edge of viewpart
    // and background rect when setting like `left: 0`, `top: 0`.
    // graphic.subPixelOptimizeRect(rect);
    return bgRect;
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/helper/sliderMove.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
*/ /**
 * Calculate slider move result.
 * Usage:
 * (1) If both handle0 and handle1 are needed to be moved, set minSpan the same as
 * maxSpan and the same as `Math.abs(handleEnd[1] - handleEnds[0])`.
 * (2) If handle0 is forbidden to cross handle1, set minSpan as `0`.
 *
 * @param delta Move length.
 * @param handleEnds handleEnds[0] can be bigger then handleEnds[1].
 *              handleEnds will be modified in this method.
 * @param extent handleEnds is restricted by extent.
 *              extent[0] should less or equals than extent[1].
 * @param handleIndex Can be 'all', means that both move the two handleEnds.
 * @param minSpan The range of dataZoom can not be smaller than that.
 *              If not set, handle0 and cross handle1. If set as a non-negative
 *              number (including `0`), handles will push each other when reaching
 *              the minSpan.
 * @param maxSpan The range of dataZoom can not be larger than that.
 * @return The input handleEnds.
 */ __turbopack_context__.s([
    "default",
    ()=>sliderMove
]);
function sliderMove(delta, handleEnds, extent, handleIndex, minSpan, maxSpan) {
    delta = delta || 0;
    var extentSpan = extent[1] - extent[0];
    // Notice maxSpan and minSpan can be null/undefined.
    if (minSpan != null) {
        minSpan = restrict(minSpan, [
            0,
            extentSpan
        ]);
    }
    if (maxSpan != null) {
        maxSpan = Math.max(maxSpan, minSpan != null ? minSpan : 0);
    }
    if (handleIndex === 'all') {
        var handleSpan = Math.abs(handleEnds[1] - handleEnds[0]);
        handleSpan = restrict(handleSpan, [
            0,
            extentSpan
        ]);
        minSpan = maxSpan = restrict(handleSpan, [
            minSpan,
            maxSpan
        ]);
        handleIndex = 0;
    }
    handleEnds[0] = restrict(handleEnds[0], extent);
    handleEnds[1] = restrict(handleEnds[1], extent);
    var originalDistSign = getSpanSign(handleEnds, handleIndex);
    handleEnds[handleIndex] += delta;
    // Restrict in extent.
    var extentMinSpan = minSpan || 0;
    var realExtent = extent.slice();
    originalDistSign.sign < 0 ? realExtent[0] += extentMinSpan : realExtent[1] -= extentMinSpan;
    handleEnds[handleIndex] = restrict(handleEnds[handleIndex], realExtent);
    // Expand span.
    var currDistSign;
    currDistSign = getSpanSign(handleEnds, handleIndex);
    if (minSpan != null && (currDistSign.sign !== originalDistSign.sign || currDistSign.span < minSpan)) {
        // If minSpan exists, 'cross' is forbidden.
        handleEnds[1 - handleIndex] = handleEnds[handleIndex] + originalDistSign.sign * minSpan;
    }
    // Shrink span.
    currDistSign = getSpanSign(handleEnds, handleIndex);
    if (maxSpan != null && currDistSign.span > maxSpan) {
        handleEnds[1 - handleIndex] = handleEnds[handleIndex] + currDistSign.sign * maxSpan;
    }
    return handleEnds;
}
function getSpanSign(handleEnds, handleIndex) {
    var dist = handleEnds[handleIndex] - handleEnds[1 - handleIndex];
    // If `handleEnds[0] === handleEnds[1]`, always believe that handleEnd[0]
    // is at left of handleEnds[1] for non-cross case.
    return {
        span: Math.abs(dist),
        sign: dist > 0 ? -1 : dist < 0 ? 1 : handleIndex ? -1 : 1
    };
}
function restrict(value, extend) {
    return Math.min(extend[1] != null ? extend[1] : Infinity, Math.max(extend[0] != null ? extend[0] : -Infinity, value));
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/helper/interactionMutex.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    "isTaken",
    ()=>isTaken,
    "release",
    ()=>release,
    "take",
    ()=>take
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/core/echarts.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js [app-client] (ecmascript)");
;
;
;
var inner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeInner"])();
function take(zr, resourceKey, userKey) {
    inner(zr)[resourceKey] = userKey;
}
function release(zr, resourceKey, userKey) {
    var store = inner(zr);
    var uKey = store[resourceKey];
    if (uKey === userKey) {
        store[resourceKey] = null;
    }
}
function isTaken(zr, resourceKey) {
    return !!inner(zr)[resourceKey];
}
/**
 * payload: {
 *     type: 'takeGlobalCursor',
 *     key: 'dataZoomSelect', or 'brush', or ...,
 *         If no userKey, release global cursor.
 * }
 */ // TODO: SELF REGISTERED.
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["registerAction"]({
    type: 'takeGlobalCursor',
    event: 'globalCursorTaken',
    update: 'update'
}, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"]);
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/helper/cursorHelper.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    "onIrrelevantElement",
    ()=>onIrrelevantElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/graphic.js [app-client] (ecmascript) <locals>");
;
var IRRELEVANT_EXCLUDES = {
    'axisPointer': 1,
    'tooltip': 1,
    'brush': 1
};
function onIrrelevantElement(e, api, targetComponent) {
    var eventElComponent = api.getComponentByElement(e.topTarget);
    if (!eventElComponent || eventElComponent === targetComponent || IRRELEVANT_EXCLUDES.hasOwnProperty(eventElComponent.mainType)) {
        return false;
    }
    // At present the `true` return is conservative. That is, the caller, such as a RoamController,
    // is more likely to get a `false` return and start a roam behavior, becuase even if the
    // `model.coordinateSystem` does not exist, the `e.topTarget` may be also a relevant element,
    // such as axis split line/area or series elements, where roam should be available. Otherwise,
    // if a dataZoom-served cartesian is full of series elements, the dataZoom-roaming can hardly
    // be triggered.
    var eventElCoordSys = eventElComponent.coordinateSystem;
    // If eventElComponent is axisModel, it works only if it is injected with coordinateSystem.
    if (!eventElCoordSys || eventElCoordSys.model === targetComponent) {
        return false;
    }
    // e.g., if a cartesian is covered by a graph, the graph has a higher presedence in roam.
    // A potential bad case is that RoamController does not prevent the cartesian from handling zr
    // event, such as click and hovering, but it's fine so far.
    // Aslo be conservative, if equals, return false.
    var eventElCmptZInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["retrieveZInfo"])(eventElComponent);
    var targetCmptZInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["retrieveZInfo"])(targetComponent);
    if ((eventElCmptZInfo.zlevel - targetCmptZInfo.zlevel || eventElCmptZInfo.z - targetCmptZInfo.z) <= 0) {
        return false;
    }
    return true;
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/helper/RoamController.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$Eventful$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/Eventful.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/event.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$interactionMutex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/helper/interactionMutex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/graphic.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$cursorHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/helper/cursorHelper.js [app-client] (ecmascript)");
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
 * An manager of zoom and pan(darg) hehavior.
 * But it is not responsible for updating the view, since view updates vary and can
 * not be handled in a uniform way.
 *
 * Note: regarding view updates:
 *  - Transformabe views typically use `coord/View` (e.g., geo and series.graph roaming).
 *    Some commonly used view update logic has been organized into `roamHelper.ts`.
 *  - Non-transformable views handle updates themselves, possibly involving re-layout,
 *    (e.g., treemap).
 *  - Some scenarios do not require transformation (e.g., dataZoom roaming for cartesian,
 *    brush component).
 */ var RoamController = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(RoamController, _super);
    function RoamController(zr) {
        var _this = _super.call(this) || this;
        _this._zr = zr;
        // Avoid two roamController bind the same handler
        var mousedownHandler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bind"])(_this._mousedownHandler, _this);
        var mousemoveHandler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bind"])(_this._mousemoveHandler, _this);
        var mouseupHandler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bind"])(_this._mouseupHandler, _this);
        var mousewheelHandler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bind"])(_this._mousewheelHandler, _this);
        var pinchHandler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bind"])(_this._pinchHandler, _this);
        /**
     * Notice:
     *  - only enable needed types. For example, if 'zoom'
     *    is not needed, 'zoom' should not be enabled, otherwise
     *    default mousewheel behaviour (scroll page) will be disabled.
     *  - This method is idempotent.
     */ _this.enable = function(controlType, rawOpt) {
            var zInfo = rawOpt.zInfo;
            var _a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["retrieveZInfo"])(zInfo.component), z = _a.z, zlevel = _a.zlevel;
            var zInfoParsed = {
                component: zInfo.component,
                z: z,
                zlevel: zlevel,
                // By default roam controller is the lowest z2 comparing to other elememts in a component.
                z2: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["retrieve2"])(zInfo.z2, -Infinity)
            };
            var triggerInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extend"])({}, rawOpt.triggerInfo);
            this._opt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaults"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extend"])({}, rawOpt), {
                zoomOnMouseWheel: true,
                moveOnMouseMove: true,
                // By default, wheel do not trigger move.
                moveOnMouseWheel: false,
                preventDefaultMouseMove: true,
                zInfoParsed: zInfoParsed,
                triggerInfo: triggerInfo
            });
            if (controlType == null) {
                controlType = true;
            }
            // A handy optimization for repeatedly calling `enable` during roaming.
            // Assert `disable` is only affected by `controlType`.
            if (!this._enabled || this._controlType !== controlType) {
                this._enabled = true;
                // Disable previous first
                this.disable();
                if (controlType === true || controlType === 'move' || controlType === 'pan') {
                    addRoamZrListener(zr, 'mousedown', mousedownHandler, zInfoParsed);
                    addRoamZrListener(zr, 'mousemove', mousemoveHandler, zInfoParsed);
                    addRoamZrListener(zr, 'mouseup', mouseupHandler, zInfoParsed);
                }
                if (controlType === true || controlType === 'scale' || controlType === 'zoom') {
                    addRoamZrListener(zr, 'mousewheel', mousewheelHandler, zInfoParsed);
                    addRoamZrListener(zr, 'pinch', pinchHandler, zInfoParsed);
                }
            }
        };
        _this.disable = function() {
            this._enabled = false;
            removeRoamZrListener(zr, 'mousedown', mousedownHandler);
            removeRoamZrListener(zr, 'mousemove', mousemoveHandler);
            removeRoamZrListener(zr, 'mouseup', mouseupHandler);
            removeRoamZrListener(zr, 'mousewheel', mousewheelHandler);
            removeRoamZrListener(zr, 'pinch', pinchHandler);
        };
        return _this;
    }
    RoamController.prototype.isDragging = function() {
        return this._dragging;
    };
    RoamController.prototype.isPinching = function() {
        return this._pinching;
    };
    RoamController.prototype._checkPointer = function(e, x, y) {
        var opt = this._opt;
        var zInfoParsed = opt.zInfoParsed;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$cursorHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onIrrelevantElement"])(e, opt.api, zInfoParsed.component)) {
            return false;
        }
        ;
        var triggerInfo = opt.triggerInfo;
        var roamTrigger = triggerInfo.roamTrigger;
        var inArea = false;
        if (roamTrigger === 'global') {
            inArea = true;
        }
        if (!inArea) {
            inArea = triggerInfo.isInSelf(e, x, y);
        }
        if (inArea && triggerInfo.isInClip && !triggerInfo.isInClip(e, x, y)) {
            inArea = false;
        }
        return inArea;
    };
    RoamController.prototype._decideCursorStyle = function(e, x, y, forReverse) {
        // If this cursor style decision is not strictly consistent with zrender,
        // it's fine - zr will set the cursor on the next mousemove.
        // This `grab` cursor style should take the lowest precedence. If the hovring element already
        // have a cursor, zrender will set it to be non-'default' before entering this handler.
        // (note, e.target is never silent, e.topTarget can be silent be irrelevant.)
        var target = e.target;
        if (!target && this._checkPointer(e, x, y)) {
            // To indicate users that this area is draggable, otherwise users probably cannot kwown
            // that when hovering out of the shape but still inside the bounding rect.
            return 'grab';
        }
        if (forReverse) {
            return target && target.cursor || 'default';
        }
    };
    RoamController.prototype.dispose = function() {
        this.disable();
    };
    RoamController.prototype._mousedownHandler = function(e) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isMiddleOrRightButtonOnMouseUpDown"](e) || eventConsumed(e)) {
            return;
        }
        var el = e.target;
        while(el){
            if (el.draggable) {
                return;
            }
            // check if host is draggable
            el = el.__hostTarget || el.parent;
        }
        var x = e.offsetX;
        var y = e.offsetY;
        // To determine dragging start, only by checking on mosedown, but not mousemove.
        // Mouse can be out of target when mouse moving.
        if (this._checkPointer(e, x, y)) {
            this._x = x;
            this._y = y;
            this._dragging = true;
        }
    };
    RoamController.prototype._mousemoveHandler = function(e) {
        var zr = this._zr;
        if (e.gestureEvent === 'pinch' || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$interactionMutex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTaken"](zr, 'globalPan') || eventConsumed(e)) {
            return;
        }
        var x = e.offsetX;
        var y = e.offsetY;
        if (!this._dragging || !isAvailableBehavior('moveOnMouseMove', e, this._opt)) {
            var cursorStyle = this._decideCursorStyle(e, x, y, false);
            if (cursorStyle) {
                zr.setCursorStyle(cursorStyle);
            }
            return;
        }
        zr.setCursorStyle('grabbing');
        var oldX = this._x;
        var oldY = this._y;
        var dx = x - oldX;
        var dy = y - oldY;
        this._x = x;
        this._y = y;
        if (this._opt.preventDefaultMouseMove) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["stop"](e.event);
        }
        e.__ecRoamConsumed = true;
        trigger(this, 'pan', 'moveOnMouseMove', e, {
            dx: dx,
            dy: dy,
            oldX: oldX,
            oldY: oldY,
            newX: x,
            newY: y,
            isAvailableBehavior: null
        });
    };
    RoamController.prototype._mouseupHandler = function(e) {
        if (eventConsumed(e)) {
            return;
        }
        var zr = this._zr;
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isMiddleOrRightButtonOnMouseUpDown"](e)) {
            this._dragging = false;
            var cursorStyle = this._decideCursorStyle(e, e.offsetX, e.offsetY, true);
            if (cursorStyle) {
                zr.setCursorStyle(cursorStyle);
            }
        }
    };
    RoamController.prototype._mousewheelHandler = function(e) {
        if (eventConsumed(e)) {
            return;
        }
        var shouldZoom = isAvailableBehavior('zoomOnMouseWheel', e, this._opt);
        var shouldMove = isAvailableBehavior('moveOnMouseWheel', e, this._opt);
        var wheelDelta = e.wheelDelta;
        var absWheelDeltaDelta = Math.abs(wheelDelta);
        var originX = e.offsetX;
        var originY = e.offsetY;
        // wheelDelta maybe -0 in chrome mac.
        if (wheelDelta === 0 || !shouldZoom && !shouldMove) {
            return;
        }
        // If both `shouldZoom` and `shouldMove` is true, trigger
        // their event both, and the final behavior is determined
        // by event listener themselves.
        if (shouldZoom) {
            // Convenience:
            // Mac and VM Windows on Mac: scroll up: zoom out.
            // Windows: scroll up: zoom in.
            // FIXME: Should do more test in different environment.
            // wheelDelta is too complicated in difference nvironment
            // (https://developer.mozilla.org/en-US/docs/Web/Events/mousewheel),
            // although it has been normallized by zrender.
            // wheelDelta of mouse wheel is bigger than touch pad.
            var factor = absWheelDeltaDelta > 3 ? 1.4 : absWheelDeltaDelta > 1 ? 1.2 : 1.1;
            var scale = wheelDelta > 0 ? factor : 1 / factor;
            this._checkTriggerMoveZoom(this, 'zoom', 'zoomOnMouseWheel', e, {
                scale: scale,
                originX: originX,
                originY: originY,
                isAvailableBehavior: null
            });
        }
        if (shouldMove) {
            // FIXME: Should do more test in different environment.
            var absDelta = Math.abs(wheelDelta);
            // wheelDelta of mouse wheel is bigger than touch pad.
            var scrollDelta = (wheelDelta > 0 ? 1 : -1) * (absDelta > 3 ? 0.4 : absDelta > 1 ? 0.15 : 0.05);
            this._checkTriggerMoveZoom(this, 'scrollMove', 'moveOnMouseWheel', e, {
                scrollDelta: scrollDelta,
                originX: originX,
                originY: originY,
                isAvailableBehavior: null
            });
        }
    };
    RoamController.prototype._pinchHandler = function(e) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$interactionMutex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTaken"](this._zr, 'globalPan') || eventConsumed(e)) {
            return;
        }
        var scale = e.pinchScale > 1 ? 1.1 : 1 / 1.1;
        this._checkTriggerMoveZoom(this, 'zoom', null, e, {
            scale: scale,
            originX: e.pinchX,
            originY: e.pinchY,
            isAvailableBehavior: null
        });
    };
    RoamController.prototype._checkTriggerMoveZoom = function(controller, eventName, behaviorToCheck, e, contollerEvent) {
        if (controller._checkPointer(e, contollerEvent.originX, contollerEvent.originY)) {
            // When mouse is out of roamController rect,
            // default befavoius should not be be disabled, otherwise
            // page sliding is disabled, contrary to expectation.
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["stop"](e.event);
            e.__ecRoamConsumed = true;
            trigger(controller, eventName, behaviorToCheck, e, contollerEvent);
        }
    };
    return RoamController;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$Eventful$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
function eventConsumed(e) {
    return e.__ecRoamConsumed;
}
var innerZrStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeInner"])();
function ensureZrStore(zr) {
    var store = innerZrStore(zr);
    store.roam = store.roam || {};
    store.uniform = store.uniform || {};
    return store;
}
/**
 * Listeners are sorted by z2/z/zlevel in descending order.
 * This decides the precedence between different roam controllers if they are overlapped.
 *
 * [MEMO]: It's not easy to perfectly reconcile the conflicts caused by overlap.
 *  - Consider cases:
 *    - Multiple roam controllers overlapped.
 *      - Usually only the topmost can trigger roam.
 *    - Roam controllers overlap with other zr elements:
 *      - zr elements are relevant or irrelevent to the host of the roam controller. e.g., axis split line
 *        or series elements is relevant to a cartesian and should trigger roam.
 *      - zr elements is above or below the roam controller host, which affects the precedence of interaction.
 *      - zr elements may not silent only for triggering tooltip by hovering, which is available to roam;
 *        or may not silent for click, where roam is not preferable.
 *  - Approach - `addRoamZrListener+pointerChecker+onIrrelevantElement` (currently used):
 *    - Resolve the precedence between different roam controllers
 *    - But cannot prevent the handling on other zr elements that under the roam controller in z-order.
 *  - Approach - "use an invisible zr elements to receive the zr events to trigger roam":
 *    - More complicated in impl.
 *    - May cause bad cases where zr event cannot be receive due to other non-silient zr elements covering it.
 */ function addRoamZrListener(zr, eventType, listener, zInfoParsed) {
    var store = ensureZrStore(zr);
    var roam = store.roam;
    var listenerList = roam[eventType] = roam[eventType] || [];
    var idx = 0;
    for(; idx < listenerList.length; idx++){
        var currZInfo = listenerList[idx].zInfoParsed;
        if ((currZInfo.zlevel - zInfoParsed.zlevel || currZInfo.z - zInfoParsed.z || currZInfo.z2 - zInfoParsed.z2) <= 0) {
            break;
        }
    }
    listenerList.splice(idx, 0, {
        listener: listener,
        zInfoParsed: zInfoParsed
    });
    ensureUniformListener(zr, eventType);
}
function removeRoamZrListener(zr, eventType, listener) {
    var store = ensureZrStore(zr);
    var listenerList = store.roam[eventType] || [];
    for(var idx = 0; idx < listenerList.length; idx++){
        if (listenerList[idx].listener === listener) {
            listenerList.splice(idx, 1);
            if (!listenerList.length) {
                removeUniformListener(zr, eventType);
            }
            return;
        }
    }
}
function ensureUniformListener(zr, eventType) {
    var store = ensureZrStore(zr);
    if (!store.uniform[eventType]) {
        zr.on(eventType, store.uniform[eventType] = function(event) {
            var listenerList = store.roam[eventType];
            if (listenerList) {
                for(var i = 0; i < listenerList.length; i++){
                    listenerList[i].listener(event);
                }
            }
        });
    }
}
function removeUniformListener(zr, eventType) {
    var store = ensureZrStore(zr);
    var uniform = store.uniform;
    if (uniform[eventType]) {
        zr.off(eventType, uniform[eventType]);
        uniform[eventType] = null;
    }
}
function trigger(controller, eventName, behaviorToCheck, e, contollerEvent) {
    // Also provide behavior checker for event listener, for some case that
    // multiple components share one listener.
    contollerEvent.isAvailableBehavior = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bind"])(isAvailableBehavior, null, behaviorToCheck, e);
    // TODO should not have type issue.
    controller.trigger(eventName, contollerEvent);
}
// settings: {
//     zoomOnMouseWheel
//     moveOnMouseMove
//     moveOnMouseWheel
// }
// The value can be: true / false / 'shift' / 'ctrl' / 'alt'.
function isAvailableBehavior(behaviorToCheck, e, settings) {
    var setting = settings[behaviorToCheck];
    return !behaviorToCheck || setting && (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"])(setting) || e.event[setting + 'Key']);
}
const __TURBOPACK__default__export__ = RoamController;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/helper/roamHelper.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    "clampByZoomLimit",
    ()=>clampByZoomLimit,
    "updateCenterAndZoomInAction",
    ()=>updateCenterAndZoomInAction,
    "updateController",
    ()=>updateController,
    "updateViewOnPan",
    ()=>updateViewOnPan,
    "updateViewOnZoom",
    ()=>updateViewOnZoom
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$BoundingRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BoundingRect$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/BoundingRect.js [app-client] (ecmascript) <export default as BoundingRect>");
;
function updateViewOnPan(controllerHost, dx, dy) {
    var target = controllerHost.target;
    target.x += dx;
    target.y += dy;
    target.dirty();
}
function updateViewOnZoom(controllerHost, zoomDelta, zoomX, zoomY) {
    var target = controllerHost.target;
    var zoomLimit = controllerHost.zoomLimit;
    var newZoom = controllerHost.zoom = controllerHost.zoom || 1;
    newZoom *= zoomDelta;
    newZoom = clampByZoomLimit(newZoom, zoomLimit);
    var zoomScale = newZoom / controllerHost.zoom;
    controllerHost.zoom = newZoom;
    zoomTransformableByOrigin(target, zoomX, zoomY, zoomScale);
    target.dirty();
}
function updateController(seriesModel, api, pointerCheckerEl, controller, controllerHost, clipRect) {
    var tmpRect = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$BoundingRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BoundingRect$3e$__["BoundingRect"](0, 0, 0, 0);
    controller.enable(seriesModel.get('roam'), {
        api: api,
        zInfo: {
            component: seriesModel
        },
        triggerInfo: {
            roamTrigger: seriesModel.get('roamTrigger'),
            isInSelf: function(e, x, y) {
                tmpRect.copy(pointerCheckerEl.getBoundingRect());
                tmpRect.applyTransform(pointerCheckerEl.getComputedTransform());
                return tmpRect.contain(x, y);
            },
            isInClip: function(e, x, y) {
                return !clipRect || clipRect.contain(x, y);
            }
        }
    });
    controllerHost.zoomLimit = seriesModel.get('scaleLimit');
    var coordinate = seriesModel.coordinateSystem;
    controllerHost.zoom = coordinate ? coordinate.getZoom() : 1;
    var type = seriesModel.subType + 'Roam';
    controller.off('pan').off('zoom').on('pan', function(e) {
        updateViewOnPan(controllerHost, e.dx, e.dy);
        api.dispatchAction({
            seriesId: seriesModel.id,
            type: type,
            dx: e.dx,
            dy: e.dy
        });
    }).on('zoom', function(e) {
        /**
     * FIXME: should do nothing except `api.dispatchAction` here, the other logic
     *  should be performed in the action handler and `updateTransform`; otherwise,
     *  they are inconsistent if user triggers this action explicitly.
     */ updateViewOnZoom(controllerHost, e.scale, e.originX, e.originY);
        api.dispatchAction({
            seriesId: seriesModel.id,
            type: type,
            zoom: e.scale,
            originX: e.originX,
            originY: e.originY
        });
        // Only update label layout on zoom
        api.updateLabelLayout();
    });
}
function getCenterCoord(view, point) {
    // Use projected coord as center because it's linear.
    return view.pointToProjected ? view.pointToProjected(point) : view.pointToData(point);
}
function updateCenterAndZoomInAction(view, payload, zoomLimit) {
    var previousZoom = view.getZoom();
    var center = view.getCenter();
    var deltaZoom = payload.zoom;
    var point = view.projectedToPoint ? view.projectedToPoint(center) : view.dataToPoint(center);
    if (payload.dx != null && payload.dy != null) {
        point[0] -= payload.dx;
        point[1] -= payload.dy;
        view.setCenter(getCenterCoord(view, point));
    }
    if (deltaZoom != null) {
        deltaZoom = clampByZoomLimit(previousZoom * deltaZoom, zoomLimit) / previousZoom;
        zoomTransformableByOrigin(view, payload.originX, payload.originY, deltaZoom);
        view.updateTransform();
        // [NOTICE] Tricky: `getCetnerCoord` uses `this.invTransform` modified by the `updateTransform` above.
        view.setCenter(getCenterCoord(view, point));
        view.setZoom(deltaZoom * previousZoom);
    }
    return {
        center: view.getCenter(),
        zoom: view.getZoom()
    };
}
function zoomTransformableByOrigin(target, originX, originY, deltaZoom) {
    // Keep the mouse center when scaling.
    target.x -= (originX - target.x) * (deltaZoom - 1);
    target.y -= (originY - target.y) * (deltaZoom - 1);
    target.scaleX *= deltaZoom;
    target.scaleY *= deltaZoom;
}
function clampByZoomLimit(zoom, zoomLimit) {
    if (zoomLimit) {
        var zoomMin = zoomLimit.min || 0;
        var zoomMax = zoomLimit.max || Infinity;
        zoom = Math.max(Math.min(zoomMax, zoom), zoomMin);
    }
    return zoom;
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/helper/MapDraw.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$RoamController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/helper/RoamController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$roamHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/helper/roamHelper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Rect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rect$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Rect.js [app-client] (ecmascript) <export default as Rect>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/animation/basicTransition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Group.js [app-client] (ecmascript) <export default as Group>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Polyline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Polyline$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Polyline.js [app-client] (ecmascript) <export default as Polyline>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Polygon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Polygon$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Polygon.js [app-client] (ecmascript) <export default as Polygon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$CompoundPath$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CompoundPath$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/CompoundPath.js [app-client] (ecmascript) <export default as CompoundPath>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/graphic.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/states.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$geo$2f$geoSourceManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/geo/geoSourceManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/component.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/label/labelStyle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/innerStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$decal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/decal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Displayable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Displayable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js [app-client] (ecmascript)");
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
/**
 * Only these tags enable use `itemStyle` if they are named in SVG.
 * Other tags like <text> <tspan> <image> might not suitable for `itemStyle`.
 * They will not be considered to be styled until some requirements come.
 */ var OPTION_STYLE_ENABLED_TAGS = [
    'rect',
    'circle',
    'line',
    'ellipse',
    'polygon',
    'polyline',
    'path'
];
var OPTION_STYLE_ENABLED_TAG_MAP = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createHashMap"](OPTION_STYLE_ENABLED_TAGS);
var STATE_TRIGGER_TAG_MAP = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createHashMap"](OPTION_STYLE_ENABLED_TAGS.concat([
    'g'
]));
var LABEL_HOST_MAP = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createHashMap"](OPTION_STYLE_ENABLED_TAGS.concat([
    'g'
]));
var mapLabelRaw = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeInner"])();
function getFixedItemStyle(model) {
    var itemStyle = model.getItemStyle();
    var areaColor = model.get('areaColor');
    // If user want the color not to be changed when hover,
    // they should both set areaColor and color to be null.
    if (areaColor != null) {
        itemStyle.fill = areaColor;
    }
    return itemStyle;
}
// Only stroke can be used for line.
// Using fill in style if stroke not exits.
// TODO Not sure yet. Perhaps a separate `lineStyle`?
function fixLineStyle(styleHost) {
    var style = styleHost.style;
    if (style) {
        style.stroke = style.stroke || style.fill;
        style.fill = null;
    }
}
var MapDraw = /** @class */ function() {
    function MapDraw(api) {
        var group = this.group = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__["Group"]();
        var transformGroup = this._transformGroup = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__["Group"]();
        group.add(transformGroup);
        this.uid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUID"])('ec_map_draw');
        this._controller = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$RoamController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](api.getZr());
        this._controllerHost = {
            target: transformGroup
        };
        transformGroup.add(this._regionsGroup = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__["Group"]());
        transformGroup.add(this._svgGroup = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__["Group"]());
    }
    MapDraw.prototype.draw = function(mapOrGeoModel, ecModel, api, fromView, payload) {
        var isGeo = mapOrGeoModel.mainType === 'geo';
        // Map series has data. GEO model that controlled by map series
        // will be assigned with map data. Other GEO model has no data.
        var data = mapOrGeoModel.getData && mapOrGeoModel.getData();
        isGeo && ecModel.eachComponent({
            mainType: 'series',
            subType: 'map'
        }, function(mapSeries) {
            if (!data && mapSeries.getHostGeoModel() === mapOrGeoModel) {
                data = mapSeries.getData();
            }
        });
        var geo = mapOrGeoModel.coordinateSystem;
        var regionsGroup = this._regionsGroup;
        var transformGroup = this._transformGroup;
        var transformInfo = geo.getTransformInfo();
        var transformInfoRaw = transformInfo.raw;
        var transformInfoRoam = transformInfo.roam;
        // No animation when first draw or in action
        var isFirstDraw = !regionsGroup.childAt(0) || payload;
        var clip = mapOrGeoModel.getShallow('clip', true);
        var clipRect;
        if (clip) {
            clipRect = geo.getViewRect().clone();
            this.group.setClipPath(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Rect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rect$3e$__["Rect"]({
                shape: clipRect.clone()
            }));
        } else {
            this.group.removeClipPath();
        }
        if (isFirstDraw) {
            transformGroup.x = transformInfoRoam.x;
            transformGroup.y = transformInfoRoam.y;
            transformGroup.scaleX = transformInfoRoam.scaleX;
            transformGroup.scaleY = transformInfoRoam.scaleY;
            transformGroup.dirty();
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateProps"](transformGroup, transformInfoRoam, mapOrGeoModel);
        }
        var isVisualEncodedByVisualMap = data && data.getVisual('visualMeta') && data.getVisual('visualMeta').length > 0;
        var viewBuildCtx = {
            api: api,
            geo: geo,
            mapOrGeoModel: mapOrGeoModel,
            data: data,
            isVisualEncodedByVisualMap: isVisualEncodedByVisualMap,
            isGeo: isGeo,
            transformInfoRaw: transformInfoRaw
        };
        if (geo.resourceType === 'geoJSON') {
            this._buildGeoJSON(viewBuildCtx);
        } else if (geo.resourceType === 'geoSVG') {
            this._buildSVG(viewBuildCtx);
        }
        this._updateController(mapOrGeoModel, clipRect, ecModel, api);
        this._updateMapSelectHandler(mapOrGeoModel, regionsGroup, api, fromView);
    };
    MapDraw.prototype._buildGeoJSON = function(viewBuildCtx) {
        var regionsGroupByName = this._regionsGroupByName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createHashMap"]();
        var regionsInfoByName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createHashMap"]();
        var regionsGroup = this._regionsGroup;
        var transformInfoRaw = viewBuildCtx.transformInfoRaw;
        var mapOrGeoModel = viewBuildCtx.mapOrGeoModel;
        var data = viewBuildCtx.data;
        var projection = viewBuildCtx.geo.projection;
        var projectionStream = projection && projection.stream;
        function transformPoint(point, project) {
            if (project) {
                // projection may return null point.
                point = project(point);
            }
            return point && [
                point[0] * transformInfoRaw.scaleX + transformInfoRaw.x,
                point[1] * transformInfoRaw.scaleY + transformInfoRaw.y
            ];
        }
        ;
        function transformPolygonPoints(inPoints) {
            var outPoints = [];
            // If projectionStream is provided. Use it instead of single point project.
            var project = !projectionStream && projection && projection.project;
            for(var i = 0; i < inPoints.length; ++i){
                var newPt = transformPoint(inPoints[i], project);
                newPt && outPoints.push(newPt);
            }
            return outPoints;
        }
        function getPolyShape(points) {
            return {
                shape: {
                    points: transformPolygonPoints(points)
                }
            };
        }
        regionsGroup.removeAll();
        // Only when the resource is GeoJSON, there is `geo.regions`.
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"](viewBuildCtx.geo.regions, function(region) {
            var regionName = region.name;
            // Consider in GeoJson properties.name may be duplicated, for example,
            // there is multiple region named "United Kindom" or "France" (so many
            // colonies). And it is not appropriate to merge them in geo, which
            // will make them share the same label and bring trouble in label
            // location calculation.
            var regionGroup = regionsGroupByName.get(regionName);
            var _a = regionsInfoByName.get(regionName) || {}, dataIdx = _a.dataIdx, regionModel = _a.regionModel;
            if (!regionGroup) {
                regionGroup = regionsGroupByName.set(regionName, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__["Group"]());
                regionsGroup.add(regionGroup);
                dataIdx = data ? data.indexOfName(regionName) : null;
                regionModel = viewBuildCtx.isGeo ? mapOrGeoModel.getRegionModel(regionName) : data ? data.getItemModel(dataIdx) : null;
                var silent = regionModel.get('silent', true);
                silent != null && (regionGroup.silent = silent);
                regionsInfoByName.set(regionName, {
                    dataIdx: dataIdx,
                    regionModel: regionModel
                });
            }
            var polygonSubpaths = [];
            var polylineSubpaths = [];
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"](region.geometries, function(geometry) {
                // Polygon and MultiPolygon
                if (geometry.type === 'polygon') {
                    var polys = [
                        geometry.exterior
                    ].concat(geometry.interiors || []);
                    if (projectionStream) {
                        polys = projectPolys(polys, projectionStream);
                    }
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"](polys, function(poly) {
                        polygonSubpaths.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Polygon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Polygon$3e$__["Polygon"](getPolyShape(poly)));
                    });
                } else {
                    var points = geometry.points;
                    if (projectionStream) {
                        points = projectPolys(points, projectionStream, true);
                    }
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"](points, function(points) {
                        polylineSubpaths.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Polyline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Polyline$3e$__["Polyline"](getPolyShape(points)));
                    });
                }
            });
            var centerPt = transformPoint(region.getCenter(), projection && projection.project);
            function createCompoundPath(subpaths, isLine) {
                if (!subpaths.length) {
                    return;
                }
                var compoundPath = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$CompoundPath$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CompoundPath$3e$__["CompoundPath"]({
                    culling: true,
                    segmentIgnoreThreshold: 1,
                    shape: {
                        paths: subpaths
                    }
                });
                regionGroup.add(compoundPath);
                applyOptionStyleForRegion(viewBuildCtx, compoundPath, dataIdx, regionModel);
                resetLabelForRegion(viewBuildCtx, compoundPath, regionName, regionModel, mapOrGeoModel, dataIdx, centerPt);
                if (isLine) {
                    fixLineStyle(compoundPath);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"](compoundPath.states, fixLineStyle);
                }
            }
            createCompoundPath(polygonSubpaths);
            createCompoundPath(polylineSubpaths, true);
        });
        // Ensure children have been added to `regionGroup` before calling them.
        regionsGroupByName.each(function(regionGroup, regionName) {
            var _a = regionsInfoByName.get(regionName), dataIdx = _a.dataIdx, regionModel = _a.regionModel;
            resetEventTriggerForRegion(viewBuildCtx, regionGroup, regionName, regionModel, mapOrGeoModel, dataIdx);
            resetTooltipForRegion(viewBuildCtx, regionGroup, regionName, regionModel, mapOrGeoModel);
            resetStateTriggerForRegion(viewBuildCtx, regionGroup, regionName, regionModel, mapOrGeoModel);
        }, this);
    };
    MapDraw.prototype._buildSVG = function(viewBuildCtx) {
        var mapName = viewBuildCtx.geo.map;
        var transformInfoRaw = viewBuildCtx.transformInfoRaw;
        this._svgGroup.x = transformInfoRaw.x;
        this._svgGroup.y = transformInfoRaw.y;
        this._svgGroup.scaleX = transformInfoRaw.scaleX;
        this._svgGroup.scaleY = transformInfoRaw.scaleY;
        if (this._svgResourceChanged(mapName)) {
            this._freeSVG();
            this._useSVG(mapName);
        }
        var svgDispatcherMap = this._svgDispatcherMap = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createHashMap"]();
        var focusSelf = false;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"](this._svgGraphicRecord.named, function(namedItem) {
            // Note that we also allow different elements have the same name.
            // For example, a glyph of a city and the label of the city have
            // the same name and their tooltip info can be defined in a single
            // region option.
            var regionName = namedItem.name;
            var mapOrGeoModel = viewBuildCtx.mapOrGeoModel;
            var data = viewBuildCtx.data;
            var svgNodeTagLower = namedItem.svgNodeTagLower;
            var el = namedItem.el;
            var dataIdx = data ? data.indexOfName(regionName) : null;
            var regionModel = mapOrGeoModel.getRegionModel(regionName);
            if (OPTION_STYLE_ENABLED_TAG_MAP.get(svgNodeTagLower) != null && el instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Displayable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) {
                applyOptionStyleForRegion(viewBuildCtx, el, dataIdx, regionModel);
            }
            if (el instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Displayable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) {
                el.culling = true;
            }
            var silent = regionModel.get('silent', true);
            silent != null && (el.silent = silent);
            // We do not know how the SVG like so we'd better not to change z2.
            // Otherwise it might bring some unexpected result. For example,
            // an area hovered that make some inner city can not be clicked.
            el.z2EmphasisLift = 0;
            // If self named:
            if (!namedItem.namedFrom) {
                // label should batter to be displayed based on the center of <g>
                // if it is named rather than displayed on each child.
                if (LABEL_HOST_MAP.get(svgNodeTagLower) != null) {
                    resetLabelForRegion(viewBuildCtx, el, regionName, regionModel, mapOrGeoModel, dataIdx, null);
                }
                resetEventTriggerForRegion(viewBuildCtx, el, regionName, regionModel, mapOrGeoModel, dataIdx);
                resetTooltipForRegion(viewBuildCtx, el, regionName, regionModel, mapOrGeoModel);
                if (STATE_TRIGGER_TAG_MAP.get(svgNodeTagLower) != null) {
                    var focus_1 = resetStateTriggerForRegion(viewBuildCtx, el, regionName, regionModel, mapOrGeoModel);
                    if (focus_1 === 'self') {
                        focusSelf = true;
                    }
                    var els = svgDispatcherMap.get(regionName) || svgDispatcherMap.set(regionName, []);
                    els.push(el);
                }
            }
        }, this);
        this._enableBlurEntireSVG(focusSelf, viewBuildCtx);
    };
    MapDraw.prototype._enableBlurEntireSVG = function(focusSelf, viewBuildCtx) {
        // It's a little complicated to support blurring the entire geoSVG in series-map.
        // So do not support it until some requirements come.
        // At present, in series-map, only regions can be blurred.
        if (focusSelf && viewBuildCtx.isGeo) {
            var blurStyle = viewBuildCtx.mapOrGeoModel.getModel([
                'blur',
                'itemStyle'
            ]).getItemStyle();
            // Only support `opacity` here. Because not sure that other props are suitable for
            // all of the elements generated by SVG (especially for Text/TSpan/Image/... ).
            var opacity_1 = blurStyle.opacity;
            this._svgGraphicRecord.root.traverse(function(el) {
                if (!el.isGroup) {
                    // PENDING: clear those settings to SVG elements when `_freeSVG`.
                    // (Currently it happen not to be needed.)
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDefaultStateProxy"])(el);
                    var style = el.ensureState('blur').style || {};
                    // Do not overwrite the region style that already set from region option.
                    if (style.opacity == null && opacity_1 != null) {
                        style.opacity = opacity_1;
                    }
                    // If `ensureState('blur').style = {}`, there will be default opacity.
                    // Enable `stateTransition` (animation).
                    el.ensureState('emphasis');
                }
            });
        }
    };
    MapDraw.prototype.remove = function() {
        this._regionsGroup.removeAll();
        this._regionsGroupByName = null;
        this._svgGroup.removeAll();
        this._freeSVG();
        this._controller.dispose();
        this._controllerHost = null;
    };
    MapDraw.prototype.findHighDownDispatchers = function(name, geoModel) {
        if (name == null) {
            return [];
        }
        var geo = geoModel.coordinateSystem;
        if (geo.resourceType === 'geoJSON') {
            var regionsGroupByName = this._regionsGroupByName;
            if (regionsGroupByName) {
                var regionGroup = regionsGroupByName.get(name);
                return regionGroup ? [
                    regionGroup
                ] : [];
            }
        } else if (geo.resourceType === 'geoSVG') {
            return this._svgDispatcherMap && this._svgDispatcherMap.get(name) || [];
        }
    };
    MapDraw.prototype._svgResourceChanged = function(mapName) {
        return this._svgMapName !== mapName;
    };
    MapDraw.prototype._useSVG = function(mapName) {
        var resource = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$geo$2f$geoSourceManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getGeoResource(mapName);
        if (resource && resource.type === 'geoSVG') {
            var svgGraphic = resource.useGraphic(this.uid);
            this._svgGroup.add(svgGraphic.root);
            this._svgGraphicRecord = svgGraphic;
            this._svgMapName = mapName;
        }
    };
    MapDraw.prototype._freeSVG = function() {
        var mapName = this._svgMapName;
        if (mapName == null) {
            return;
        }
        var resource = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$geo$2f$geoSourceManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getGeoResource(mapName);
        if (resource && resource.type === 'geoSVG') {
            resource.freeGraphic(this.uid);
        }
        this._svgGraphicRecord = null;
        this._svgDispatcherMap = null;
        this._svgGroup.removeAll();
        this._svgMapName = null;
    };
    MapDraw.prototype._updateController = function(mapOrGeoModel, clipRect, ecModel, api) {
        var geo = mapOrGeoModel.coordinateSystem;
        var controller = this._controller;
        var controllerHost = this._controllerHost;
        controllerHost.zoomLimit = mapOrGeoModel.get('scaleLimit');
        controllerHost.zoom = geo.getZoom();
        // roamType is will be set default true if it is null
        controller.enable(mapOrGeoModel.get('roam') || false, {
            api: api,
            zInfo: {
                component: mapOrGeoModel
            },
            triggerInfo: {
                roamTrigger: mapOrGeoModel.get('roamTrigger'),
                isInSelf: function(e, x, y) {
                    return geo.containPoint([
                        x,
                        y
                    ]);
                },
                isInClip: function(e, x, y) {
                    return !clipRect || clipRect.contain(x, y);
                }
            }
        });
        var mainType = mapOrGeoModel.mainType;
        function makeActionBase() {
            var action = {
                type: 'geoRoam',
                componentType: mainType
            };
            action[mainType + 'Id'] = mapOrGeoModel.id;
            return action;
        }
        controller.off('pan').on('pan', function(e) {
            this._mouseDownFlag = false;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$roamHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateViewOnPan"](controllerHost, e.dx, e.dy);
            api.dispatchAction(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extend"](makeActionBase(), {
                dx: e.dx,
                dy: e.dy,
                animation: {
                    duration: 0
                }
            }));
        }, this);
        controller.off('zoom').on('zoom', function(e) {
            this._mouseDownFlag = false;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$roamHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateViewOnZoom"](controllerHost, e.scale, e.originX, e.originY);
            api.dispatchAction(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extend"](makeActionBase(), {
                totalZoom: controllerHost.zoom,
                zoom: e.scale,
                originX: e.originX,
                originY: e.originY,
                animation: {
                    duration: 0
                }
            }));
        }, this);
    };
    /**
   * FIXME: this is a temporarily workaround.
   * When `geoRoam` the elements need to be reset in `MapView['render']`, because the props like
   * `ignore` might have been modified by `LabelManager`, and `LabelManager#addLabelsOfSeries`
   * will subsequently cache `defaultAttr` like `ignore`. If do not do this reset, the modified
   * props will have no chance to be restored.
   * Note: This reset should be after `clearStates` in `renderSeries` because `useStates` in
   * `renderSeries` will cache the modified `ignore` to `el._normalState`.
   * TODO:
   * Use clone/immutable in `LabelManager`?
   */ MapDraw.prototype.resetForLabelLayout = function() {
        this.group.traverse(function(el) {
            var label = el.getTextContent();
            if (label) {
                label.ignore = mapLabelRaw(label).ignore;
            }
        });
    };
    MapDraw.prototype._updateMapSelectHandler = function(mapOrGeoModel, regionsGroup, api, fromView) {
        var mapDraw = this;
        regionsGroup.off('mousedown');
        regionsGroup.off('click');
        // @ts-ignore FIXME:TS resolve type conflict
        if (mapOrGeoModel.get('selectedMode')) {
            regionsGroup.on('mousedown', function() {
                mapDraw._mouseDownFlag = true;
            });
            regionsGroup.on('click', function(e) {
                if (!mapDraw._mouseDownFlag) {
                    return;
                }
                mapDraw._mouseDownFlag = false;
            });
        }
    };
    return MapDraw;
}();
;
function applyOptionStyleForRegion(viewBuildCtx, el, dataIndex, regionModel) {
    // All of the path are using `itemStyle`, because
    // (1) Some SVG also use fill on polyline (The different between
    // polyline and polygon is "open" or "close" but not fill or not).
    // (2) For the common props like opacity, if some use itemStyle
    // and some use `lineStyle`, it might confuse users.
    // (3) Most SVG use <path>, where can not detect whether to draw a "line"
    // or a filled shape, so use `itemStyle` for <path>.
    var normalStyleModel = regionModel.getModel('itemStyle');
    var emphasisStyleModel = regionModel.getModel([
        'emphasis',
        'itemStyle'
    ]);
    var blurStyleModel = regionModel.getModel([
        'blur',
        'itemStyle'
    ]);
    var selectStyleModel = regionModel.getModel([
        'select',
        'itemStyle'
    ]);
    // NOTE: DON'T use 'style' in visual when drawing map.
    // This component is used for drawing underlying map for both geo component and map series.
    var normalStyle = getFixedItemStyle(normalStyleModel);
    var emphasisStyle = getFixedItemStyle(emphasisStyleModel);
    var selectStyle = getFixedItemStyle(selectStyleModel);
    var blurStyle = getFixedItemStyle(blurStyleModel);
    // Update the itemStyle if has data visual
    var data = viewBuildCtx.data;
    if (data) {
        // Only visual color of each item will be used. It can be encoded by visualMap
        // But visual color of series is used in symbol drawing
        // Visual color for each series is for the symbol draw
        var style = data.getItemVisual(dataIndex, 'style');
        var decal = data.getItemVisual(dataIndex, 'decal');
        if (viewBuildCtx.isVisualEncodedByVisualMap && style.fill) {
            normalStyle.fill = style.fill;
        }
        if (decal) {
            normalStyle.decal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$decal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createOrUpdatePatternFromDecal"])(decal, viewBuildCtx.api);
        }
    }
    // SVG text, tspan and image can be named but not supporeted
    // to be styled by region option yet.
    el.setStyle(normalStyle);
    el.style.strokeNoScale = true;
    el.ensureState('emphasis').style = emphasisStyle;
    el.ensureState('select').style = selectStyle;
    el.ensureState('blur').style = blurStyle;
    // Enable blur
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDefaultStateProxy"])(el);
}
function resetLabelForRegion(viewBuildCtx, el, regionName, regionModel, mapOrGeoModel, // Exist only if `viewBuildCtx.data` exists.
dataIdx, // If labelXY not provided, use `textConfig.position: 'inside'`
labelXY) {
    var data = viewBuildCtx.data;
    var isGeo = viewBuildCtx.isGeo;
    var isDataNaN = data && isNaN(data.get(data.mapDimension('value'), dataIdx));
    var itemLayout = data && data.getItemLayout(dataIdx);
    // In the following cases label will be drawn
    // 1. In map series and data value is NaN
    // 2. In geo component
    // 3. Region has no series legendIcon, which will be add a showLabel flag in mapSymbolLayout
    if (isGeo || isDataNaN || itemLayout && itemLayout.showLabel) {
        var query = !isGeo ? dataIdx : regionName;
        var labelFetcher = void 0;
        // Consider dataIdx not found.
        if (!data || dataIdx >= 0) {
            labelFetcher = mapOrGeoModel;
        }
        var specifiedTextOpt = labelXY ? {
            normal: {
                align: 'center',
                verticalAlign: 'middle'
            }
        } : null;
        // Caveat: must be called after `setDefaultStateProxy(el);` called.
        // because textContent will be assign with `el.stateProxy` inside.
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setLabelStyle"])(el, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLabelStatesModels"])(regionModel), {
            labelFetcher: labelFetcher,
            labelDataIndex: query,
            defaultText: regionName
        }, specifiedTextOpt);
        var textEl = el.getTextContent();
        if (textEl) {
            mapLabelRaw(textEl).ignore = textEl.ignore;
            if (el.textConfig && labelXY) {
                // Compute a relative offset based on the el bounding rect.
                var rect = el.getBoundingRect().clone();
                // Need to make sure the percent position base on the same rect in normal and
                // emphasis state. Otherwise if using boundingRect of el, but the emphasis state
                // has borderWidth (even 0.5px), the text position will be changed obviously
                // if the position is very big like ['1234%', '1345%'].
                el.textConfig.layoutRect = rect;
                el.textConfig.position = [
                    (labelXY[0] - rect.x) / rect.width * 100 + '%',
                    (labelXY[1] - rect.y) / rect.height * 100 + '%'
                ];
            }
        }
        // PENDING:
        // If labelLayout is enabled (test/label-layout.html), el.dataIndex should be specified.
        // But el.dataIndex is also used to determine whether user event should be triggered,
        // where el.seriesIndex or el.dataModel must be specified. At present for a single el
        // there is not case that "only label layout enabled but user event disabled", so here
        // we depends `resetEventTriggerForRegion` to do the job of setting `el.dataIndex`.
        el.disableLabelAnimation = true;
    } else {
        el.removeTextContent();
        el.removeTextConfig();
        el.disableLabelAnimation = null;
    }
}
function resetEventTriggerForRegion(viewBuildCtx, eventTrigger, regionName, regionModel, mapOrGeoModel, // Exist only if `viewBuildCtx.data` exists.
dataIdx) {
    // setItemGraphicEl, setHoverStyle after all polygons and labels
    // are added to the regionGroup
    if (viewBuildCtx.data) {
        // FIXME: when series-map use a SVG map, and there are duplicated name specified
        // on different SVG elements, after `data.setItemGraphicEl(...)`:
        // (1) all of them will be mounted with `dataIndex`, `seriesIndex`, so that tooltip
        // can be triggered only mouse hover. That's correct.
        // (2) only the last element will be kept in `data`, so that if trigger tooltip
        // by `dispatchAction`, only the last one can be found and triggered. That might be
        // not correct. We will fix it in future if anyone demanding that.
        viewBuildCtx.data.setItemGraphicEl(dataIdx, eventTrigger);
    } else {
        // Package custom mouse event for geo component
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getECData"])(eventTrigger).eventData = {
            componentType: 'geo',
            componentIndex: mapOrGeoModel.componentIndex,
            geoIndex: mapOrGeoModel.componentIndex,
            name: regionName,
            region: regionModel && regionModel.option || {}
        };
    }
}
function resetTooltipForRegion(viewBuildCtx, el, regionName, regionModel, mapOrGeoModel) {
    if (!viewBuildCtx.data) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["setTooltipConfig"]({
            el: el,
            componentModel: mapOrGeoModel,
            itemName: regionName,
            // @ts-ignore FIXME:TS fix the "compatible with each other"?
            itemTooltipOption: regionModel.get('tooltip')
        });
    }
}
function resetStateTriggerForRegion(viewBuildCtx, el, regionName, regionModel, mapOrGeoModel) {
    // @ts-ignore FIXME:TS fix the "compatible with each other"?
    el.highDownSilentOnTouch = !!mapOrGeoModel.get('selectedMode');
    // @ts-ignore FIXME:TS fix the "compatible with each other"?
    var emphasisModel = regionModel.getModel('emphasis');
    var focus = emphasisModel.get('focus');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toggleHoverEmphasis"])(el, focus, emphasisModel.get('blurScope'), emphasisModel.get('disabled'));
    if (viewBuildCtx.isGeo) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enableComponentHighDownFeatures"])(el, mapOrGeoModel, regionName);
    }
    return focus;
}
function projectPolys(rings, // Polygons include exterior and interiors. Or polylines.
createStream, isLine) {
    var polygons = [];
    var curPoly;
    function startPolygon() {
        curPoly = [];
    }
    function endPolygon() {
        if (curPoly.length) {
            polygons.push(curPoly);
            curPoly = [];
        }
    }
    var stream = createStream({
        polygonStart: startPolygon,
        polygonEnd: endPolygon,
        lineStart: startPolygon,
        lineEnd: endPolygon,
        point: function(x, y) {
            // May have NaN values from stream.
            if (isFinite(x) && isFinite(y)) {
                curPoly.push([
                    x,
                    y
                ]);
            }
        },
        sphere: function() {}
    });
    !isLine && stream.polygonStart();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"](rings, function(ring) {
        stream.lineStart();
        for(var i = 0; i < ring.length; i++){
            stream.point(ring[i][0], ring[i][1]);
        }
        stream.lineEnd();
    });
    !isLine && stream.polygonEnd();
    return polygons;
}
const __TURBOPACK__default__export__ = MapDraw;
 // @ts-ignore FIXME:TS fix the "compatible with each other"?
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/helper/thumbnailBridge.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    "getThumbnailBridge",
    ()=>getThumbnailBridge,
    "injectThumbnailBridge",
    ()=>injectThumbnailBridge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js [app-client] (ecmascript)");
;
/**
 * @caveat Do not import other `src/component/thumbnail/*` files.
 *  This file should be decoupled from them for sake of the size consideration.
 */ /**
 * FIXME: This is a temporary implmentation. May need refactor to decouple
 *  the direct call from series.graph to thumbnail.
 */ var inner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeInner"])();
function getThumbnailBridge(model) {
    if (model) {
        return inner(model).bridge;
    }
}
function injectThumbnailBridge(model, thumbnailBridge) {
    if (model) {
        inner(model).bridge = thumbnailBridge;
    }
}
;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/helper/BrushController.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$Eventful$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/Eventful.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Group.js [app-client] (ecmascript) <export default as Group>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Rect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rect$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Rect.js [app-client] (ecmascript) <export default as Rect>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/graphic.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Polyline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Polyline$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Polyline.js [app-client] (ecmascript) <export default as Polyline>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Polygon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Polygon$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Polygon.js [app-client] (ecmascript) <export default as Polygon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$interactionMutex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/helper/interactionMutex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$DataDiffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/data/DataDiffer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/tokens.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
var BRUSH_PANEL_GLOBAL = true;
var mathMin = Math.min;
var mathMax = Math.max;
var mathPow = Math.pow;
var COVER_Z = 10000;
var UNSELECT_THRESHOLD = 6;
var MIN_RESIZE_LINE_WIDTH = 6;
var MUTEX_RESOURCE_KEY = 'globalPan';
var DIRECTION_MAP = {
    w: [
        0,
        0
    ],
    e: [
        0,
        1
    ],
    n: [
        1,
        0
    ],
    s: [
        1,
        1
    ]
};
var CURSOR_MAP = {
    w: 'ew',
    e: 'ew',
    n: 'ns',
    s: 'ns',
    ne: 'nesw',
    sw: 'nesw',
    nw: 'nwse',
    se: 'nwse'
};
var DEFAULT_BRUSH_OPT = {
    brushStyle: {
        lineWidth: 2,
        stroke: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].color.backgroundTint,
        fill: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].color.borderTint
    },
    transformable: true,
    brushMode: 'single',
    removeOnClick: false
};
var baseUID = 0;
/**
 * params:
 *     areas: Array.<Array>, coord relates to container group,
 *                             If no container specified, to global.
 *     opt {
 *         isEnd: boolean,
 *         removeOnClick: boolean
 *     }
 */ var BrushController = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(BrushController, _super);
    function BrushController(zr) {
        var _this = _super.call(this) || this;
        /**
     * @internal
     */ _this._track = [];
        /**
     * @internal
     */ _this._covers = [];
        _this._handlers = {};
        if ("TURBOPACK compile-time truthy", 1) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(zr);
        }
        _this._zr = zr;
        _this.group = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__["Group"]();
        _this._uid = 'brushController_' + baseUID++;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(pointerHandlers, function(handler, eventName) {
            this._handlers[eventName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bind"])(handler, this);
        }, _this);
        return _this;
    }
    /**
   * If set to `false`, select disabled.
   */ BrushController.prototype.enableBrush = function(brushOption) {
        if ("TURBOPACK compile-time truthy", 1) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this._mounted);
        }
        this._brushType && this._doDisableBrush();
        brushOption.brushType && this._doEnableBrush(brushOption);
        return this;
    };
    BrushController.prototype._doEnableBrush = function(brushOption) {
        var zr = this._zr;
        // Consider roam, which takes globalPan too.
        if (!this._enableGlobalPan) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$interactionMutex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["take"](zr, MUTEX_RESOURCE_KEY, this._uid);
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(this._handlers, function(handler, eventName) {
            zr.on(eventName, handler);
        });
        this._brushType = brushOption.brushType;
        this._brushOption = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["merge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clone"])(DEFAULT_BRUSH_OPT), brushOption, true);
    };
    BrushController.prototype._doDisableBrush = function() {
        var zr = this._zr;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$interactionMutex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["release"](zr, MUTEX_RESOURCE_KEY, this._uid);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(this._handlers, function(handler, eventName) {
            zr.off(eventName, handler);
        });
        this._brushType = this._brushOption = null;
    };
    /**
   * @param panelOpts If not pass, it is global brush.
   */ BrushController.prototype.setPanels = function(panelOpts) {
        if (panelOpts && panelOpts.length) {
            var panels_1 = this._panels = {};
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(panelOpts, function(panelOpts) {
                panels_1[panelOpts.panelId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clone"])(panelOpts);
            });
        } else {
            this._panels = null;
        }
        return this;
    };
    BrushController.prototype.mount = function(opt) {
        opt = opt || {};
        if ("TURBOPACK compile-time truthy", 1) {
            this._mounted = true; // should be at first.
        }
        this._enableGlobalPan = opt.enableGlobalPan;
        var thisGroup = this.group;
        this._zr.add(thisGroup);
        thisGroup.attr({
            x: opt.x || 0,
            y: opt.y || 0,
            rotation: opt.rotation || 0,
            scaleX: opt.scaleX || 1,
            scaleY: opt.scaleY || 1
        });
        this._transform = thisGroup.getLocalTransform();
        return this;
    };
    // eachCover(cb, context): void {
    //     each(this._covers, cb, context);
    // }
    /**
   * Update covers.
   * @param coverConfigList
   *        If coverConfigList is null/undefined, all covers removed.
   */ BrushController.prototype.updateCovers = function(coverConfigList) {
        if ("TURBOPACK compile-time truthy", 1) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this._mounted);
        }
        coverConfigList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"])(coverConfigList, function(coverConfig) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["merge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clone"])(DEFAULT_BRUSH_OPT), coverConfig, true);
        });
        var tmpIdPrefix = '\0-brush-index-';
        var oldCovers = this._covers;
        var newCovers = this._covers = [];
        var controller = this;
        var creatingCover = this._creatingCover;
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$DataDiffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](oldCovers, coverConfigList, oldGetKey, getKey).add(addOrUpdate).update(addOrUpdate).remove(remove).execute();
        return this;
        //TURBOPACK unreachable
        ;
        function getKey(brushOption, index) {
            return (brushOption.id != null ? brushOption.id : tmpIdPrefix + index) + '-' + brushOption.brushType;
        }
        function oldGetKey(cover, index) {
            return getKey(cover.__brushOption, index);
        }
        function addOrUpdate(newIndex, oldIndex) {
            var newBrushInternal = coverConfigList[newIndex];
            // Consider setOption in event listener of brushSelect,
            // where updating cover when creating should be forbidden.
            if (oldIndex != null && oldCovers[oldIndex] === creatingCover) {
                newCovers[newIndex] = oldCovers[oldIndex];
            } else {
                var cover = newCovers[newIndex] = oldIndex != null ? (oldCovers[oldIndex].__brushOption = newBrushInternal, oldCovers[oldIndex]) : endCreating(controller, createCover(controller, newBrushInternal));
                updateCoverAfterCreation(controller, cover);
            }
        }
        function remove(oldIndex) {
            if (oldCovers[oldIndex] !== creatingCover) {
                controller.group.remove(oldCovers[oldIndex]);
            }
        }
    };
    BrushController.prototype.unmount = function() {
        if ("TURBOPACK compile-time truthy", 1) {
            if (!this._mounted) {
                return;
            }
        }
        this.enableBrush(false);
        // container may 'removeAll' outside.
        clearCovers(this);
        this._zr.remove(this.group);
        if ("TURBOPACK compile-time truthy", 1) {
            this._mounted = false; // should be at last.
        }
        return this;
    };
    BrushController.prototype.dispose = function() {
        this.unmount();
        this.off();
    };
    return BrushController;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$Eventful$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
function createCover(controller, brushOption) {
    var cover = coverRenderers[brushOption.brushType].createCover(controller, brushOption);
    cover.__brushOption = brushOption;
    updateZ(cover, brushOption);
    controller.group.add(cover);
    return cover;
}
function endCreating(controller, creatingCover) {
    var coverRenderer = getCoverRenderer(creatingCover);
    if (coverRenderer.endCreating) {
        coverRenderer.endCreating(controller, creatingCover);
        updateZ(creatingCover, creatingCover.__brushOption);
    }
    return creatingCover;
}
function updateCoverShape(controller, cover) {
    var brushOption = cover.__brushOption;
    getCoverRenderer(cover).updateCoverShape(controller, cover, brushOption.range, brushOption);
}
function updateZ(cover, brushOption) {
    var z = brushOption.z;
    z == null && (z = COVER_Z);
    cover.traverse(function(el) {
        el.z = z;
        el.z2 = z; // Consider in given container.
    });
}
function updateCoverAfterCreation(controller, cover) {
    getCoverRenderer(cover).updateCommon(controller, cover);
    updateCoverShape(controller, cover);
}
function getCoverRenderer(cover) {
    return coverRenderers[cover.__brushOption.brushType];
}
// return target panel or `true` (means global panel)
function getPanelByPoint(controller, e, localCursorPoint) {
    var panels = controller._panels;
    if (!panels) {
        return BRUSH_PANEL_GLOBAL; // Global panel
    }
    var panel;
    var transform = controller._transform;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(panels, function(pn) {
        pn.isTargetByCursor(e, localCursorPoint, transform) && (panel = pn);
    });
    return panel;
}
// Return a panel or true
function getPanelByCover(controller, cover) {
    var panels = controller._panels;
    if (!panels) {
        return BRUSH_PANEL_GLOBAL; // Global panel
    }
    var panelId = cover.__brushOption.panelId;
    // User may give cover without coord sys info,
    // which is then treated as global panel.
    return panelId != null ? panels[panelId] : BRUSH_PANEL_GLOBAL;
}
function clearCovers(controller) {
    var covers = controller._covers;
    var originalLength = covers.length;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(covers, function(cover) {
        controller.group.remove(cover);
    }, controller);
    covers.length = 0;
    return !!originalLength;
}
function trigger(controller, opt) {
    var areas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"])(controller._covers, function(cover) {
        var brushOption = cover.__brushOption;
        var range = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clone"])(brushOption.range);
        return {
            brushType: brushOption.brushType,
            panelId: brushOption.panelId,
            range: range
        };
    });
    controller.trigger('brush', {
        areas: areas,
        isEnd: !!opt.isEnd,
        removeOnClick: !!opt.removeOnClick
    });
}
function shouldShowCover(controller) {
    var track = controller._track;
    if (!track.length) {
        return false;
    }
    var p2 = track[track.length - 1];
    var p1 = track[0];
    var dx = p2[0] - p1[0];
    var dy = p2[1] - p1[1];
    var dist = mathPow(dx * dx + dy * dy, 0.5);
    return dist > UNSELECT_THRESHOLD;
}
function getTrackEnds(track) {
    var tail = track.length - 1;
    tail < 0 && (tail = 0);
    return [
        track[0],
        track[tail]
    ];
}
;
function createBaseRectCover(rectRangeConverter, controller, brushOption, edgeNameSequences) {
    var cover = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__["Group"]();
    cover.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Rect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rect$3e$__["Rect"]({
        name: 'main',
        style: makeStyle(brushOption),
        silent: true,
        draggable: true,
        cursor: 'move',
        drift: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["curry"])(driftRect, rectRangeConverter, controller, cover, [
            'n',
            's',
            'w',
            'e'
        ]),
        ondragend: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["curry"])(trigger, controller, {
            isEnd: true
        })
    }));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(edgeNameSequences, function(nameSequence) {
        cover.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Rect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rect$3e$__["Rect"]({
            name: nameSequence.join(''),
            style: {
                opacity: 0
            },
            draggable: true,
            silent: true,
            invisible: true,
            drift: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["curry"])(driftRect, rectRangeConverter, controller, cover, nameSequence),
            ondragend: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["curry"])(trigger, controller, {
                isEnd: true
            })
        }));
    });
    return cover;
}
function updateBaseRect(controller, cover, localRange, brushOption) {
    var lineWidth = brushOption.brushStyle.lineWidth || 0;
    var handleSize = mathMax(lineWidth, MIN_RESIZE_LINE_WIDTH);
    var x = localRange[0][0];
    var y = localRange[1][0];
    var xa = x - lineWidth / 2;
    var ya = y - lineWidth / 2;
    var x2 = localRange[0][1];
    var y2 = localRange[1][1];
    var x2a = x2 - handleSize + lineWidth / 2;
    var y2a = y2 - handleSize + lineWidth / 2;
    var width = x2 - x;
    var height = y2 - y;
    var widtha = width + lineWidth;
    var heighta = height + lineWidth;
    updateRectShape(controller, cover, 'main', x, y, width, height);
    if (brushOption.transformable) {
        updateRectShape(controller, cover, 'w', xa, ya, handleSize, heighta);
        updateRectShape(controller, cover, 'e', x2a, ya, handleSize, heighta);
        updateRectShape(controller, cover, 'n', xa, ya, widtha, handleSize);
        updateRectShape(controller, cover, 's', xa, y2a, widtha, handleSize);
        updateRectShape(controller, cover, 'nw', xa, ya, handleSize, handleSize);
        updateRectShape(controller, cover, 'ne', x2a, ya, handleSize, handleSize);
        updateRectShape(controller, cover, 'sw', xa, y2a, handleSize, handleSize);
        updateRectShape(controller, cover, 'se', x2a, y2a, handleSize, handleSize);
    }
}
function updateCommon(controller, cover) {
    var brushOption = cover.__brushOption;
    var transformable = brushOption.transformable;
    var mainEl = cover.childAt(0);
    mainEl.useStyle(makeStyle(brushOption));
    mainEl.attr({
        silent: !transformable,
        cursor: transformable ? 'move' : 'default'
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])([
        [
            'w'
        ],
        [
            'e'
        ],
        [
            'n'
        ],
        [
            's'
        ],
        [
            's',
            'e'
        ],
        [
            's',
            'w'
        ],
        [
            'n',
            'e'
        ],
        [
            'n',
            'w'
        ]
    ], function(nameSequence) {
        var el = cover.childOfName(nameSequence.join(''));
        var globalDir = nameSequence.length === 1 ? getGlobalDirection1(controller, nameSequence[0]) : getGlobalDirection2(controller, nameSequence);
        el && el.attr({
            silent: !transformable,
            invisible: !transformable,
            cursor: transformable ? CURSOR_MAP[globalDir] + '-resize' : null
        });
    });
}
function updateRectShape(controller, cover, name, x, y, w, h) {
    var el = cover.childOfName(name);
    el && el.setShape(pointsToRect(clipByPanel(controller, cover, [
        [
            x,
            y
        ],
        [
            x + w,
            y + h
        ]
    ])));
}
function makeStyle(brushOption) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaults"])({
        strokeNoScale: true
    }, brushOption.brushStyle);
}
function formatRectRange(x, y, x2, y2) {
    var min = [
        mathMin(x, x2),
        mathMin(y, y2)
    ];
    var max = [
        mathMax(x, x2),
        mathMax(y, y2)
    ];
    return [
        [
            min[0],
            max[0]
        ],
        [
            min[1],
            max[1]
        ] // y range
    ];
}
function getTransform(controller) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getTransform"](controller.group);
}
function getGlobalDirection1(controller, localDirName) {
    var map = {
        w: 'left',
        e: 'right',
        n: 'top',
        s: 'bottom'
    };
    var inverseMap = {
        left: 'w',
        right: 'e',
        top: 'n',
        bottom: 's'
    };
    var dir = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["transformDirection"](map[localDirName], getTransform(controller));
    return inverseMap[dir];
}
function getGlobalDirection2(controller, localDirNameSeq) {
    var globalDir = [
        getGlobalDirection1(controller, localDirNameSeq[0]),
        getGlobalDirection1(controller, localDirNameSeq[1])
    ];
    (globalDir[0] === 'e' || globalDir[0] === 'w') && globalDir.reverse();
    return globalDir.join('');
}
function driftRect(rectRangeConverter, controller, cover, dirNameSequence, dx, dy) {
    var brushOption = cover.__brushOption;
    var rectRange = rectRangeConverter.toRectRange(brushOption.range);
    var localDelta = toLocalDelta(controller, dx, dy);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(dirNameSequence, function(dirName) {
        var ind = DIRECTION_MAP[dirName];
        rectRange[ind[0]][ind[1]] += localDelta[ind[0]];
    });
    brushOption.range = rectRangeConverter.fromRectRange(formatRectRange(rectRange[0][0], rectRange[1][0], rectRange[0][1], rectRange[1][1]));
    updateCoverAfterCreation(controller, cover);
    trigger(controller, {
        isEnd: false
    });
}
function driftPolygon(controller, cover, dx, dy) {
    var range = cover.__brushOption.range;
    var localDelta = toLocalDelta(controller, dx, dy);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(range, function(point) {
        point[0] += localDelta[0];
        point[1] += localDelta[1];
    });
    updateCoverAfterCreation(controller, cover);
    trigger(controller, {
        isEnd: false
    });
}
function toLocalDelta(controller, dx, dy) {
    var thisGroup = controller.group;
    var localD = thisGroup.transformCoordToLocal(dx, dy);
    var localZero = thisGroup.transformCoordToLocal(0, 0);
    return [
        localD[0] - localZero[0],
        localD[1] - localZero[1]
    ];
}
function clipByPanel(controller, cover, data) {
    var panel = getPanelByCover(controller, cover);
    return panel && panel !== BRUSH_PANEL_GLOBAL ? panel.clipPath(data, controller._transform) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clone"])(data);
}
function pointsToRect(points) {
    var xmin = mathMin(points[0][0], points[1][0]);
    var ymin = mathMin(points[0][1], points[1][1]);
    var xmax = mathMax(points[0][0], points[1][0]);
    var ymax = mathMax(points[0][1], points[1][1]);
    return {
        x: xmin,
        y: ymin,
        width: xmax - xmin,
        height: ymax - ymin
    };
}
function resetCursor(controller, e, localCursorPoint) {
    if (// Check active
    !controller._brushType || isOutsideZrArea(controller, e.offsetX, e.offsetY)) {
        return;
    }
    var zr = controller._zr;
    var covers = controller._covers;
    var currPanel = getPanelByPoint(controller, e, localCursorPoint);
    // Check whether in covers.
    if (!controller._dragging) {
        for(var i = 0; i < covers.length; i++){
            var brushOption = covers[i].__brushOption;
            if (currPanel && (currPanel === BRUSH_PANEL_GLOBAL || brushOption.panelId === currPanel.panelId) && coverRenderers[brushOption.brushType].contain(covers[i], localCursorPoint[0], localCursorPoint[1])) {
                // Use cursor style set on cover.
                return;
            }
        }
    }
    currPanel && zr.setCursorStyle('crosshair');
}
function preventDefault(e) {
    var rawE = e.event;
    rawE.preventDefault && rawE.preventDefault();
}
function mainShapeContain(cover, x, y) {
    return cover.childOfName('main').contain(x, y);
}
function updateCoverByMouse(controller, e, localCursorPoint, isEnd) {
    var creatingCover = controller._creatingCover;
    var panel = controller._creatingPanel;
    var thisBrushOption = controller._brushOption;
    var eventParams;
    controller._track.push(localCursorPoint.slice());
    if (shouldShowCover(controller) || creatingCover) {
        if (panel && !creatingCover) {
            thisBrushOption.brushMode === 'single' && clearCovers(controller);
            var brushOption = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clone"])(thisBrushOption);
            brushOption.brushType = determineBrushType(brushOption.brushType, panel);
            brushOption.panelId = panel === BRUSH_PANEL_GLOBAL ? null : panel.panelId;
            creatingCover = controller._creatingCover = createCover(controller, brushOption);
            controller._covers.push(creatingCover);
        }
        if (creatingCover) {
            var coverRenderer = coverRenderers[determineBrushType(controller._brushType, panel)];
            var coverBrushOption = creatingCover.__brushOption;
            coverBrushOption.range = coverRenderer.getCreatingRange(clipByPanel(controller, creatingCover, controller._track));
            if (isEnd) {
                endCreating(controller, creatingCover);
                coverRenderer.updateCommon(controller, creatingCover);
            }
            updateCoverShape(controller, creatingCover);
            eventParams = {
                isEnd: isEnd
            };
        }
    } else if (isEnd && thisBrushOption.brushMode === 'single' && thisBrushOption.removeOnClick) {
        // Help user to remove covers easily, only by a tiny drag, in 'single' mode.
        // But a single click do not clear covers, because user may have casual
        // clicks (for example, click on other component and do not expect covers
        // disappear).
        // Only some cover removed, trigger action, but not every click trigger action.
        if (getPanelByPoint(controller, e, localCursorPoint) && clearCovers(controller)) {
            eventParams = {
                isEnd: isEnd,
                removeOnClick: true
            };
        }
    }
    return eventParams;
}
function determineBrushType(brushType, panel) {
    if (brushType === 'auto') {
        if ("TURBOPACK compile-time truthy", 1) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(panel && panel.defaultBrushType, 'MUST have defaultBrushType when brushType is "atuo"');
        }
        return panel.defaultBrushType;
    }
    return brushType;
}
var pointerHandlers = {
    mousedown: function(e) {
        if (this._dragging) {
            // In case some browser do not support globalOut,
            // and release mouse out side the browser.
            handleDragEnd(this, e);
        } else if (!e.target || !e.target.draggable) {
            preventDefault(e);
            var localCursorPoint = this.group.transformCoordToLocal(e.offsetX, e.offsetY);
            this._creatingCover = null;
            var panel = this._creatingPanel = getPanelByPoint(this, e, localCursorPoint);
            if (panel) {
                this._dragging = true;
                this._track = [
                    localCursorPoint.slice()
                ];
            }
        }
    },
    mousemove: function(e) {
        var x = e.offsetX;
        var y = e.offsetY;
        var localCursorPoint = this.group.transformCoordToLocal(x, y);
        resetCursor(this, e, localCursorPoint);
        if (this._dragging) {
            preventDefault(e);
            var eventParams = updateCoverByMouse(this, e, localCursorPoint, false);
            eventParams && trigger(this, eventParams);
        }
    },
    mouseup: function(e) {
        handleDragEnd(this, e);
    }
};
function handleDragEnd(controller, e) {
    if (controller._dragging) {
        preventDefault(e);
        var x = e.offsetX;
        var y = e.offsetY;
        var localCursorPoint = controller.group.transformCoordToLocal(x, y);
        var eventParams = updateCoverByMouse(controller, e, localCursorPoint, true);
        controller._dragging = false;
        controller._track = [];
        controller._creatingCover = null;
        // trigger event should be at final, after procedure will be nested.
        eventParams && trigger(controller, eventParams);
    }
}
function isOutsideZrArea(controller, x, y) {
    var zr = controller._zr;
    return x < 0 || x > zr.getWidth() || y < 0 || y > zr.getHeight();
}
/**
 * key: brushType
 */ var coverRenderers = {
    lineX: getLineRenderer(0),
    lineY: getLineRenderer(1),
    rect: {
        createCover: function(controller, brushOption) {
            function returnInput(range) {
                return range;
            }
            return createBaseRectCover({
                toRectRange: returnInput,
                fromRectRange: returnInput
            }, controller, brushOption, [
                [
                    'w'
                ],
                [
                    'e'
                ],
                [
                    'n'
                ],
                [
                    's'
                ],
                [
                    's',
                    'e'
                ],
                [
                    's',
                    'w'
                ],
                [
                    'n',
                    'e'
                ],
                [
                    'n',
                    'w'
                ]
            ]);
        },
        getCreatingRange: function(localTrack) {
            var ends = getTrackEnds(localTrack);
            return formatRectRange(ends[1][0], ends[1][1], ends[0][0], ends[0][1]);
        },
        updateCoverShape: function(controller, cover, localRange, brushOption) {
            updateBaseRect(controller, cover, localRange, brushOption);
        },
        updateCommon: updateCommon,
        contain: mainShapeContain
    },
    polygon: {
        createCover: function(controller, brushOption) {
            var cover = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__["Group"]();
            // Do not use graphic.Polygon because graphic.Polyline do not close the
            // border of the shape when drawing, which is a better experience for user.
            cover.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Polyline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Polyline$3e$__["Polyline"]({
                name: 'main',
                style: makeStyle(brushOption),
                silent: true
            }));
            return cover;
        },
        getCreatingRange: function(localTrack) {
            return localTrack;
        },
        endCreating: function(controller, cover) {
            cover.remove(cover.childAt(0));
            // Use graphic.Polygon close the shape.
            cover.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Polygon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Polygon$3e$__["Polygon"]({
                name: 'main',
                draggable: true,
                drift: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["curry"])(driftPolygon, controller, cover),
                ondragend: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["curry"])(trigger, controller, {
                    isEnd: true
                })
            }));
        },
        updateCoverShape: function(controller, cover, localRange, brushOption) {
            cover.childAt(0).setShape({
                points: clipByPanel(controller, cover, localRange)
            });
        },
        updateCommon: updateCommon,
        contain: mainShapeContain
    }
};
function getLineRenderer(xyIndex) {
    return {
        createCover: function(controller, brushOption) {
            return createBaseRectCover({
                toRectRange: function(range) {
                    var rectRange = [
                        range,
                        [
                            0,
                            100
                        ]
                    ];
                    xyIndex && rectRange.reverse();
                    return rectRange;
                },
                fromRectRange: function(rectRange) {
                    return rectRange[xyIndex];
                }
            }, controller, brushOption, [
                [
                    [
                        'w'
                    ],
                    [
                        'e'
                    ]
                ],
                [
                    [
                        'n'
                    ],
                    [
                        's'
                    ]
                ]
            ][xyIndex]);
        },
        getCreatingRange: function(localTrack) {
            var ends = getTrackEnds(localTrack);
            var min = mathMin(ends[0][xyIndex], ends[1][xyIndex]);
            var max = mathMax(ends[0][xyIndex], ends[1][xyIndex]);
            return [
                min,
                max
            ];
        },
        updateCoverShape: function(controller, cover, localRange, brushOption) {
            var otherExtent;
            // If brushWidth not specified, fit the panel.
            var panel = getPanelByCover(controller, cover);
            if (panel !== BRUSH_PANEL_GLOBAL && panel.getLinearBrushOtherExtent) {
                otherExtent = panel.getLinearBrushOtherExtent(xyIndex);
            } else {
                var zr = controller._zr;
                otherExtent = [
                    0,
                    [
                        zr.getWidth(),
                        zr.getHeight()
                    ][1 - xyIndex]
                ];
            }
            var rectRange = [
                localRange,
                otherExtent
            ];
            xyIndex && rectRange.reverse();
            updateBaseRect(controller, cover, rectRange, brushOption);
        },
        updateCommon: updateCommon,
        contain: mainShapeContain
    };
}
const __TURBOPACK__default__export__ = BrushController;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/helper/brushHelper.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    "makeLinearBrushOtherExtent",
    ()=>makeLinearBrushOtherExtent,
    "makeRectIsTargetByCursor",
    ()=>makeRectIsTargetByCursor,
    "makeRectPanelClipPath",
    ()=>makeRectPanelClipPath
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$BoundingRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/BoundingRect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$cursorHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/helper/cursorHelper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/graphic.js [app-client] (ecmascript) <locals>");
;
;
;
function makeRectPanelClipPath(rect) {
    rect = normalizeRect(rect);
    return function(localPoints) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["clipPointsByRect"](localPoints, rect);
    };
}
function makeLinearBrushOtherExtent(rect, specifiedXYIndex) {
    rect = normalizeRect(rect);
    return function(xyIndex) {
        var idx = specifiedXYIndex != null ? specifiedXYIndex : xyIndex;
        var brushWidth = idx ? rect.width : rect.height;
        var base = idx ? rect.x : rect.y;
        return [
            base,
            base + (brushWidth || 0)
        ];
    };
}
function makeRectIsTargetByCursor(rect, api, targetModel) {
    var boundingRect = normalizeRect(rect);
    return function(e, localCursorPoint) {
        return boundingRect.contain(localCursorPoint[0], localCursorPoint[1]) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$cursorHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onIrrelevantElement"])(e, api, targetModel);
    };
}
// Consider width/height is negative.
function normalizeRect(rect) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$BoundingRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create(rect);
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/helper/BrushTargetManager.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/graphic.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$brushHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/helper/brushHelper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js [app-client] (ecmascript)");
;
;
;
;
// FIXME
// how to genarialize to more coordinate systems.
var INCLUDE_FINDER_MAIN_TYPES = [
    'grid',
    'xAxis',
    'yAxis',
    'geo',
    'graph',
    'polar',
    'radiusAxis',
    'angleAxis',
    'bmap'
];
var BrushTargetManager = /** @class */ function() {
    /**
   * @param finder contains Index/Id/Name of xAxis/yAxis/geo/grid
   *        Each can be {number|Array.<number>}. like: {xAxisIndex: [3, 4]}
   * @param opt.include include coordinate system types.
   */ function BrushTargetManager(finder, ecModel, opt) {
        var _this = this;
        this._targetInfoList = [];
        var foundCpts = parseFinder(ecModel, finder);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(targetInfoBuilders, function(builder, type) {
            if (!opt || !opt.include || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["indexOf"])(opt.include, type) >= 0) {
                builder(foundCpts, _this._targetInfoList);
            }
        });
    }
    BrushTargetManager.prototype.setOutputRanges = function(areas, ecModel) {
        this.matchOutputRanges(areas, ecModel, function(area, coordRange, coordSys) {
            (area.coordRanges || (area.coordRanges = [])).push(coordRange);
            // area.coordRange is the first of area.coordRanges
            if (!area.coordRange) {
                area.coordRange = coordRange;
                // In 'category' axis, coord to pixel is not reversible, so we can not
                // rebuild range by coordRange accrately, which may bring trouble when
                // brushing only one item. So we use __rangeOffset to rebuilding range
                // by coordRange. And this it only used in brush component so it is no
                // need to be adapted to coordRanges.
                var result = coordConvert[area.brushType](0, coordSys, coordRange);
                area.__rangeOffset = {
                    offset: diffProcessor[area.brushType](result.values, area.range, [
                        1,
                        1
                    ]),
                    xyMinMax: result.xyMinMax
                };
            }
        });
        return areas;
    };
    BrushTargetManager.prototype.matchOutputRanges = function(areas, ecModel, cb) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(areas, function(area) {
            var targetInfo = this.findTargetInfo(area, ecModel);
            if (targetInfo && targetInfo !== true) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(targetInfo.coordSyses, function(coordSys) {
                    var result = coordConvert[area.brushType](1, coordSys, area.range, true);
                    cb(area, result.values, coordSys, ecModel);
                });
            }
        }, this);
    };
    /**
   * the `areas` is `BrushModel.areas`.
   * Called in layout stage.
   * convert `area.coordRange` to global range and set panelId to `area.range`.
   */ BrushTargetManager.prototype.setInputRanges = function(areas, ecModel) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(areas, function(area) {
            var targetInfo = this.findTargetInfo(area, ecModel);
            if ("TURBOPACK compile-time truthy", 1) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(!targetInfo || targetInfo === true || area.coordRange, 'coordRange must be specified when coord index specified.');
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(!targetInfo || targetInfo !== true || area.range, 'range must be specified in global brush.');
            }
            area.range = area.range || [];
            // convert coordRange to global range and set panelId.
            if (targetInfo && targetInfo !== true) {
                area.panelId = targetInfo.panelId;
                // (1) area.range should always be calculate from coordRange but does
                // not keep its original value, for the sake of the dataZoom scenario,
                // where area.coordRange remains unchanged but area.range may be changed.
                // (2) Only support converting one coordRange to pixel range in brush
                // component. So do not consider `coordRanges`.
                // (3) About __rangeOffset, see comment above.
                var result = coordConvert[area.brushType](0, targetInfo.coordSys, area.coordRange);
                var rangeOffset = area.__rangeOffset;
                area.range = rangeOffset ? diffProcessor[area.brushType](result.values, rangeOffset.offset, getScales(result.xyMinMax, rangeOffset.xyMinMax)) : result.values;
            }
        }, this);
    };
    BrushTargetManager.prototype.makePanelOpts = function(api, getDefaultBrushType) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"])(this._targetInfoList, function(targetInfo) {
            var rect = targetInfo.getPanelRect();
            return {
                panelId: targetInfo.panelId,
                defaultBrushType: getDefaultBrushType ? getDefaultBrushType(targetInfo) : null,
                clipPath: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$brushHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeRectPanelClipPath"](rect),
                isTargetByCursor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$brushHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeRectIsTargetByCursor"](rect, api, targetInfo.coordSysModel),
                getLinearBrushOtherExtent: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$brushHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeLinearBrushOtherExtent"](rect)
            };
        });
    };
    BrushTargetManager.prototype.controlSeries = function(area, seriesModel, ecModel) {
        // Check whether area is bound in coord, and series do not belong to that coord.
        // If do not do this check, some brush (like lineX) will controll all axes.
        var targetInfo = this.findTargetInfo(area, ecModel);
        return targetInfo === true || targetInfo && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["indexOf"])(targetInfo.coordSyses, seriesModel.coordinateSystem) >= 0;
    };
    /**
   * If return Object, a coord found.
   * If return true, global found.
   * Otherwise nothing found.
   */ BrushTargetManager.prototype.findTargetInfo = function(area, ecModel) {
        var targetInfoList = this._targetInfoList;
        var foundCpts = parseFinder(ecModel, area);
        for(var i = 0; i < targetInfoList.length; i++){
            var targetInfo = targetInfoList[i];
            var areaPanelId = area.panelId;
            if (areaPanelId) {
                if (targetInfo.panelId === areaPanelId) {
                    return targetInfo;
                }
            } else {
                for(var j = 0; j < targetInfoMatchers.length; j++){
                    if (targetInfoMatchers[j](foundCpts, targetInfo)) {
                        return targetInfo;
                    }
                }
            }
        }
        return true;
    };
    return BrushTargetManager;
}();
function formatMinMax(minMax) {
    minMax[0] > minMax[1] && minMax.reverse();
    return minMax;
}
function parseFinder(ecModel, finder) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseFinder"])(ecModel, finder, {
        includeMainTypes: INCLUDE_FINDER_MAIN_TYPES
    });
}
var targetInfoBuilders = {
    grid: function(foundCpts, targetInfoList) {
        var xAxisModels = foundCpts.xAxisModels;
        var yAxisModels = foundCpts.yAxisModels;
        var gridModels = foundCpts.gridModels;
        // Remove duplicated.
        var gridModelMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createHashMap"])();
        var xAxesHas = {};
        var yAxesHas = {};
        if (!xAxisModels && !yAxisModels && !gridModels) {
            return;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(xAxisModels, function(axisModel) {
            var gridModel = axisModel.axis.grid.model;
            gridModelMap.set(gridModel.id, gridModel);
            xAxesHas[gridModel.id] = true;
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(yAxisModels, function(axisModel) {
            var gridModel = axisModel.axis.grid.model;
            gridModelMap.set(gridModel.id, gridModel);
            yAxesHas[gridModel.id] = true;
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(gridModels, function(gridModel) {
            gridModelMap.set(gridModel.id, gridModel);
            xAxesHas[gridModel.id] = true;
            yAxesHas[gridModel.id] = true;
        });
        gridModelMap.each(function(gridModel) {
            var grid = gridModel.coordinateSystem;
            var cartesians = [];
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(grid.getCartesians(), function(cartesian, index) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["indexOf"])(xAxisModels, cartesian.getAxis('x').model) >= 0 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["indexOf"])(yAxisModels, cartesian.getAxis('y').model) >= 0) {
                    cartesians.push(cartesian);
                }
            });
            targetInfoList.push({
                panelId: 'grid--' + gridModel.id,
                gridModel: gridModel,
                coordSysModel: gridModel,
                // Use the first one as the representitive coordSys.
                coordSys: cartesians[0],
                coordSyses: cartesians,
                getPanelRect: panelRectBuilders.grid,
                xAxisDeclared: xAxesHas[gridModel.id],
                yAxisDeclared: yAxesHas[gridModel.id]
            });
        });
    },
    geo: function(foundCpts, targetInfoList) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(foundCpts.geoModels, function(geoModel) {
            var coordSys = geoModel.coordinateSystem;
            targetInfoList.push({
                panelId: 'geo--' + geoModel.id,
                geoModel: geoModel,
                coordSysModel: geoModel,
                coordSys: coordSys,
                coordSyses: [
                    coordSys
                ],
                getPanelRect: panelRectBuilders.geo
            });
        });
    }
};
var targetInfoMatchers = [
    // grid
    function(foundCpts, targetInfo) {
        var xAxisModel = foundCpts.xAxisModel;
        var yAxisModel = foundCpts.yAxisModel;
        var gridModel = foundCpts.gridModel;
        !gridModel && xAxisModel && (gridModel = xAxisModel.axis.grid.model);
        !gridModel && yAxisModel && (gridModel = yAxisModel.axis.grid.model);
        return gridModel && gridModel === targetInfo.gridModel;
    },
    // geo
    function(foundCpts, targetInfo) {
        var geoModel = foundCpts.geoModel;
        return geoModel && geoModel === targetInfo.geoModel;
    }
];
var panelRectBuilders = {
    grid: function() {
        // grid is not Transformable.
        return this.coordSys.master.getRect().clone();
    },
    geo: function() {
        var coordSys = this.coordSys;
        var rect = coordSys.getBoundingRect().clone();
        // geo roam and zoom transform
        rect.applyTransform(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getTransform"](coordSys));
        return rect;
    }
};
var coordConvert = {
    lineX: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["curry"])(axisConvert, 0),
    lineY: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["curry"])(axisConvert, 1),
    rect: function(to, coordSys, rangeOrCoordRange, clamp) {
        var xminymin = to ? coordSys.pointToData([
            rangeOrCoordRange[0][0],
            rangeOrCoordRange[1][0]
        ], clamp) : coordSys.dataToPoint([
            rangeOrCoordRange[0][0],
            rangeOrCoordRange[1][0]
        ], clamp);
        var xmaxymax = to ? coordSys.pointToData([
            rangeOrCoordRange[0][1],
            rangeOrCoordRange[1][1]
        ], clamp) : coordSys.dataToPoint([
            rangeOrCoordRange[0][1],
            rangeOrCoordRange[1][1]
        ], clamp);
        var values = [
            formatMinMax([
                xminymin[0],
                xmaxymax[0]
            ]),
            formatMinMax([
                xminymin[1],
                xmaxymax[1]
            ])
        ];
        return {
            values: values,
            xyMinMax: values
        };
    },
    polygon: function(to, coordSys, rangeOrCoordRange, clamp) {
        var xyMinMax = [
            [
                Infinity,
                -Infinity
            ],
            [
                Infinity,
                -Infinity
            ]
        ];
        var values = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"])(rangeOrCoordRange, function(item) {
            var p = to ? coordSys.pointToData(item, clamp) : coordSys.dataToPoint(item, clamp);
            xyMinMax[0][0] = Math.min(xyMinMax[0][0], p[0]);
            xyMinMax[1][0] = Math.min(xyMinMax[1][0], p[1]);
            xyMinMax[0][1] = Math.max(xyMinMax[0][1], p[0]);
            xyMinMax[1][1] = Math.max(xyMinMax[1][1], p[1]);
            return p;
        });
        return {
            values: values,
            xyMinMax: xyMinMax
        };
    }
};
function axisConvert(axisNameIndex, to, coordSys, rangeOrCoordRange) {
    if ("TURBOPACK compile-time truthy", 1) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(coordSys.type === 'cartesian2d', 'lineX/lineY brush is available only in cartesian2d.');
    }
    var axis = coordSys.getAxis([
        'x',
        'y'
    ][axisNameIndex]);
    var values = formatMinMax((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"])([
        0,
        1
    ], function(i) {
        return to ? axis.coordToData(axis.toLocalCoord(rangeOrCoordRange[i]), true) : axis.toGlobalCoord(axis.dataToCoord(rangeOrCoordRange[i]));
    }));
    var xyMinMax = [];
    xyMinMax[axisNameIndex] = values;
    xyMinMax[1 - axisNameIndex] = [
        NaN,
        NaN
    ];
    return {
        values: values,
        xyMinMax: xyMinMax
    };
}
var diffProcessor = {
    lineX: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["curry"])(axisDiffProcessor, 0),
    lineY: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["curry"])(axisDiffProcessor, 1),
    rect: function(values, refer, scales) {
        return [
            [
                values[0][0] - scales[0] * refer[0][0],
                values[0][1] - scales[0] * refer[0][1]
            ],
            [
                values[1][0] - scales[1] * refer[1][0],
                values[1][1] - scales[1] * refer[1][1]
            ]
        ];
    },
    polygon: function(values, refer, scales) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"])(values, function(item, idx) {
            return [
                item[0] - scales[0] * refer[idx][0],
                item[1] - scales[1] * refer[idx][1]
            ];
        });
    }
};
function axisDiffProcessor(axisNameIndex, values, refer, scales) {
    return [
        values[0] - scales[axisNameIndex] * refer[0],
        values[1] - scales[axisNameIndex] * refer[1]
    ];
}
// We have to process scale caused by dataZoom manually,
// although it might be not accurate.
// Return [0~1, 0~1]
function getScales(xyMinMaxCurr, xyMinMaxOrigin) {
    var sizeCurr = getSize(xyMinMaxCurr);
    var sizeOrigin = getSize(xyMinMaxOrigin);
    var scales = [
        sizeCurr[0] / sizeOrigin[0],
        sizeCurr[1] / sizeOrigin[1]
    ];
    isNaN(scales[0]) && (scales[0] = 1);
    isNaN(scales[1]) && (scales[1] = 1);
    return scales;
}
function getSize(xyMinMax) {
    return xyMinMax ? [
        xyMinMax[0][1] - xyMinMax[0][0],
        xyMinMax[1][1] - xyMinMax[1][0]
    ] : [
        NaN,
        NaN
    ];
}
const __TURBOPACK__default__export__ = BrushTargetManager;
}),
]);

//# sourceMappingURL=6e80b_echarts_lib_component_helper_17f2fba0._.js.map