module.exports = [
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/scale/break.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    "getScaleBreakHelper",
    ()=>getScaleBreakHelper,
    "registerScaleBreakHelperImpl",
    ()=>registerScaleBreakHelperImpl
]);
;
var _impl = null;
function registerScaleBreakHelperImpl(impl) {
    if (!_impl) {
        _impl = impl;
    }
}
function getScaleBreakHelper() {
    return _impl;
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/scale/helper.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    "ScaleCalculator",
    ()=>ScaleCalculator,
    "contain",
    ()=>contain,
    "fixExtent",
    ()=>fixExtent,
    "getIntervalPrecision",
    ()=>getIntervalPrecision,
    "increaseInterval",
    ()=>increaseInterval,
    "intervalScaleNiceTicks",
    ()=>intervalScaleNiceTicks,
    "isIntervalOrLogScale",
    ()=>isIntervalOrLogScale,
    "isValueNice",
    ()=>isValueNice,
    "logTransform",
    ()=>logTransform
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/number.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
;
;
function isValueNice(val) {
    var exp10 = Math.pow(10, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["quantityExponent"])(Math.abs(val)));
    var f = Math.abs(val / exp10);
    return f === 0 || f === 1 || f === 2 || f === 3 || f === 5;
}
function isIntervalOrLogScale(scale) {
    return scale.type === 'interval' || scale.type === 'log';
}
function intervalScaleNiceTicks(extent, spanWithBreaks, splitNumber, minInterval, maxInterval) {
    var result = {};
    var interval = result.interval = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nice"])(spanWithBreaks / splitNumber, true);
    if (minInterval != null && interval < minInterval) {
        interval = result.interval = minInterval;
    }
    if (maxInterval != null && interval > maxInterval) {
        interval = result.interval = maxInterval;
    }
    // Tow more digital for tick.
    var precision = result.intervalPrecision = getIntervalPrecision(interval);
    // Niced extent inside original extent
    var niceTickExtent = result.niceTickExtent = [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["round"])(Math.ceil(extent[0] / interval) * interval, precision),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["round"])(Math.floor(extent[1] / interval) * interval, precision)
    ];
    fixExtent(niceTickExtent, extent);
    return result;
}
function increaseInterval(interval) {
    var exp10 = Math.pow(10, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["quantityExponent"])(interval));
    // Increase interval
    var f = interval / exp10;
    if (!f) {
        f = 1;
    } else if (f === 2) {
        f = 3;
    } else if (f === 3) {
        f = 5;
    } else {
        // f is 1 or 5
        f *= 2;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["round"])(f * exp10);
}
function getIntervalPrecision(interval) {
    // Tow more digital for tick.
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrecision"])(interval) + 2;
}
function clamp(niceTickExtent, idx, extent) {
    niceTickExtent[idx] = Math.max(Math.min(niceTickExtent[idx], extent[1]), extent[0]);
}
function fixExtent(niceTickExtent, extent) {
    !isFinite(niceTickExtent[0]) && (niceTickExtent[0] = extent[0]);
    !isFinite(niceTickExtent[1]) && (niceTickExtent[1] = extent[1]);
    clamp(niceTickExtent, 0, extent);
    clamp(niceTickExtent, 1, extent);
    if (niceTickExtent[0] > niceTickExtent[1]) {
        niceTickExtent[0] = niceTickExtent[1];
    }
}
function contain(val, extent) {
    return val >= extent[0] && val <= extent[1];
}
var ScaleCalculator = /** @class */ function() {
    function ScaleCalculator() {
        this.normalize = normalize;
        this.scale = scale;
    }
    ScaleCalculator.prototype.updateMethods = function(brkCtx) {
        if (brkCtx.hasBreaks()) {
            this.normalize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bind"])(brkCtx.normalize, brkCtx);
            this.scale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bind"])(brkCtx.scale, brkCtx);
        } else {
            this.normalize = normalize;
            this.scale = scale;
        }
    };
    return ScaleCalculator;
}();
;
function normalize(val, extent) {
    if (extent[1] === extent[0]) {
        return 0.5;
    }
    return (val - extent[0]) / (extent[1] - extent[0]);
}
function scale(val, extent) {
    return val * (extent[1] - extent[0]) + extent[0];
}
function logTransform(base, extent, noClampNegative) {
    var loggedBase = Math.log(base);
    return [
        // log(negative) is NaN, so safe guard here.
        // PENDING: But even getting a -Infinity still does not make sense in extent.
        //  Just keep it as is, getting a NaN to make some previous cases works by coincidence.
        Math.log(noClampNegative ? extent[0] : Math.max(0, extent[0])) / loggedBase,
        Math.log(noClampNegative ? extent[1] : Math.max(0, extent[1])) / loggedBase
    ];
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/scale/Scale.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$clazz$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/clazz.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/scale/helper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$break$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/scale/break.js [app-ssr] (ecmascript)");
;
;
;
;
var Scale = /** @class */ function() {
    function Scale(setting) {
        this._calculator = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScaleCalculator"]();
        this._setting = setting || {};
        this._extent = [
            Infinity,
            -Infinity
        ];
        var scaleBreakHelper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$break$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getScaleBreakHelper"])();
        if (scaleBreakHelper) {
            this._brkCtx = scaleBreakHelper.createScaleBreakContext();
            this._brkCtx.update(this._extent);
        }
    }
    Scale.prototype.getSetting = function(name) {
        return this._setting[name];
    };
    /**
   * [CAVEAT]: It should not be overridden!
   */ Scale.prototype._innerUnionExtent = function(other) {
        var extent = this._extent;
        // Considered that number could be NaN and should not write into the extent.
        this._innerSetExtent(other[0] < extent[0] ? other[0] : extent[0], other[1] > extent[1] ? other[1] : extent[1]);
    };
    /**
   * Set extent from data
   */ Scale.prototype.unionExtentFromData = function(data, dim) {
        this._innerUnionExtent(data.getApproximateExtent(dim));
    };
    /**
   * Get a new slice of extent.
   * Extent is always in increase order.
   */ Scale.prototype.getExtent = function() {
        return this._extent.slice();
    };
    Scale.prototype.setExtent = function(start, end) {
        this._innerSetExtent(start, end);
    };
    /**
   * [CAVEAT]: It should not be overridden!
   */ Scale.prototype._innerSetExtent = function(start, end) {
        var thisExtent = this._extent;
        if (!isNaN(start)) {
            thisExtent[0] = start;
        }
        if (!isNaN(end)) {
            thisExtent[1] = end;
        }
        this._brkCtx && this._brkCtx.update(thisExtent);
    };
    /**
   * Prerequisite: Scale#parse is ready.
   */ Scale.prototype.setBreaksFromOption = function(breakOptionList) {
        var scaleBreakHelper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$break$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getScaleBreakHelper"])();
        if (scaleBreakHelper) {
            this._innerSetBreak(scaleBreakHelper.parseAxisBreakOption(breakOptionList, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bind"])(this.parse, this)));
        }
    };
    /**
   * [CAVEAT]: It should not be overridden!
   */ Scale.prototype._innerSetBreak = function(parsed) {
        if (this._brkCtx) {
            this._brkCtx.setBreaks(parsed);
            this._calculator.updateMethods(this._brkCtx);
            this._brkCtx.update(this._extent);
        }
    };
    /**
   * [CAVEAT]: It should not be overridden!
   */ Scale.prototype._innerGetBreaks = function() {
        return this._brkCtx ? this._brkCtx.breaks : [];
    };
    /**
   * Do not expose the internal `_breaks` unless necessary.
   */ Scale.prototype.hasBreaks = function() {
        return this._brkCtx ? this._brkCtx.hasBreaks() : false;
    };
    Scale.prototype._getExtentSpanWithBreaks = function() {
        return this._brkCtx && this._brkCtx.hasBreaks() ? this._brkCtx.getExtentSpan() : this._extent[1] - this._extent[0];
    };
    /**
   * If value is in extent range
   */ Scale.prototype.isInExtentRange = function(value) {
        return this._extent[0] <= value && this._extent[1] >= value;
    };
    /**
   * When axis extent depends on data and no data exists,
   * axis ticks should not be drawn, which is named 'blank'.
   */ Scale.prototype.isBlank = function() {
        return this._isBlank;
    };
    /**
   * When axis extent depends on data and no data exists,
   * axis ticks should not be drawn, which is named 'blank'.
   */ Scale.prototype.setBlank = function(isBlank) {
        this._isBlank = isBlank;
    };
    return Scale;
}();
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$clazz$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["enableClassManagement"](Scale);
const __TURBOPACK__default__export__ = Scale;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/scale/Ordinal.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
 * Linear continuous scale
 * http://en.wikipedia.org/wiki/Level_of_measurement
 */ // FIXME only one data
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$Scale$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/scale/Scale.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$OrdinalMeta$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/data/OrdinalMeta.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/scale/helper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
;
;
;
;
;
var OrdinalScale = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(OrdinalScale, _super);
    function OrdinalScale(setting) {
        var _this = _super.call(this, setting) || this;
        _this.type = 'ordinal';
        var ordinalMeta = _this.getSetting('ordinalMeta');
        // Caution: Should not use instanceof, consider ec-extensions using
        // import approach to get OrdinalMeta class.
        if (!ordinalMeta) {
            ordinalMeta = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$OrdinalMeta$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]({});
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isArray"])(ordinalMeta)) {
            ordinalMeta = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$OrdinalMeta$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]({
                categories: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["map"])(ordinalMeta, function(item) {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isObject"])(item) ? item.value : item;
                })
            });
        }
        _this._ordinalMeta = ordinalMeta;
        _this._extent = _this.getSetting('extent') || [
            0,
            ordinalMeta.categories.length - 1
        ];
        return _this;
    }
    OrdinalScale.prototype.parse = function(val) {
        // Caution: Math.round(null) will return `0` rather than `NaN`
        if (val == null) {
            return NaN;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(val) ? this._ordinalMeta.getOrdinal(val) : Math.round(val);
    };
    OrdinalScale.prototype.contain = function(val) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["contain"](val, this._extent) && val >= 0 && val < this._ordinalMeta.categories.length;
    };
    /**
   * Normalize given rank or name to linear [0, 1]
   * @param val raw ordinal number.
   * @return normalized value in [0, 1].
   */ OrdinalScale.prototype.normalize = function(val) {
        val = this._getTickNumber(val);
        return this._calculator.normalize(val, this._extent);
    };
    /**
   * @param val normalized value in [0, 1].
   * @return raw ordinal number.
   */ OrdinalScale.prototype.scale = function(val) {
        val = Math.round(this._calculator.scale(val, this._extent));
        return this.getRawOrdinalNumber(val);
    };
    OrdinalScale.prototype.getTicks = function() {
        var ticks = [];
        var extent = this._extent;
        var rank = extent[0];
        while(rank <= extent[1]){
            ticks.push({
                value: rank
            });
            rank++;
        }
        return ticks;
    };
    OrdinalScale.prototype.getMinorTicks = function(splitNumber) {
        // Not support.
        return;
    };
    /**
   * @see `Ordinal['_ordinalNumbersByTick']`
   */ OrdinalScale.prototype.setSortInfo = function(info) {
        if (info == null) {
            this._ordinalNumbersByTick = this._ticksByOrdinalNumber = null;
            return;
        }
        var infoOrdinalNumbers = info.ordinalNumbers;
        var ordinalsByTick = this._ordinalNumbersByTick = [];
        var ticksByOrdinal = this._ticksByOrdinalNumber = [];
        // Unnecessary support negative tick in `realtimeSort`.
        var tickNum = 0;
        var allCategoryLen = this._ordinalMeta.categories.length;
        for(var len = Math.min(allCategoryLen, infoOrdinalNumbers.length); tickNum < len; ++tickNum){
            var ordinalNumber = infoOrdinalNumbers[tickNum];
            ordinalsByTick[tickNum] = ordinalNumber;
            ticksByOrdinal[ordinalNumber] = tickNum;
        }
        // Handle that `series.data` only covers part of the `axis.category.data`.
        var unusedOrdinal = 0;
        for(; tickNum < allCategoryLen; ++tickNum){
            while(ticksByOrdinal[unusedOrdinal] != null){
                unusedOrdinal++;
            }
            ;
            ordinalsByTick.push(unusedOrdinal);
            ticksByOrdinal[unusedOrdinal] = tickNum;
        }
    };
    OrdinalScale.prototype._getTickNumber = function(ordinal) {
        var ticksByOrdinalNumber = this._ticksByOrdinalNumber;
        // also support ordinal out of range of `ordinalMeta.categories.length`,
        // where ordinal numbers are used as tick value directly.
        return ticksByOrdinalNumber && ordinal >= 0 && ordinal < ticksByOrdinalNumber.length ? ticksByOrdinalNumber[ordinal] : ordinal;
    };
    /**
   * @usage
   * ```js
   * const ordinalNumber = ordinalScale.getRawOrdinalNumber(tickVal);
   *
   * // case0
   * const rawOrdinalValue = axisModel.getCategories()[ordinalNumber];
   * // case1
   * const rawOrdinalValue = this._ordinalMeta.categories[ordinalNumber];
   * // case2
   * const coord = axis.dataToCoord(ordinalNumber);
   * ```
   *
   * @param {OrdinalNumber} tickNumber index of display
   */ OrdinalScale.prototype.getRawOrdinalNumber = function(tickNumber) {
        var ordinalNumbersByTick = this._ordinalNumbersByTick;
        // tickNumber may be out of range, e.g., when axis max is larger than `ordinalMeta.categories.length`.,
        // where ordinal numbers are used as tick value directly.
        return ordinalNumbersByTick && tickNumber >= 0 && tickNumber < ordinalNumbersByTick.length ? ordinalNumbersByTick[tickNumber] : tickNumber;
    };
    /**
   * Get item on tick
   */ OrdinalScale.prototype.getLabel = function(tick) {
        if (!this.isBlank()) {
            var ordinalNumber = this.getRawOrdinalNumber(tick.value);
            var cateogry = this._ordinalMeta.categories[ordinalNumber];
            // Note that if no data, ordinalMeta.categories is an empty array.
            // Return empty if it's not exist.
            return cateogry == null ? '' : cateogry + '';
        }
    };
    OrdinalScale.prototype.count = function() {
        return this._extent[1] - this._extent[0] + 1;
    };
    /**
   * @override
   * If value is in extent range
   */ OrdinalScale.prototype.isInExtentRange = function(value) {
        value = this._getTickNumber(value);
        return this._extent[0] <= value && this._extent[1] >= value;
    };
    OrdinalScale.prototype.getOrdinalMeta = function() {
        return this._ordinalMeta;
    };
    OrdinalScale.prototype.calcNiceTicks = function() {};
    OrdinalScale.prototype.calcNiceExtent = function() {};
    OrdinalScale.type = 'ordinal';
    return OrdinalScale;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$Scale$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$Scale$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].registerClass(OrdinalScale);
const __TURBOPACK__default__export__ = OrdinalScale;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/scale/Interval.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/number.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/format.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$Scale$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/scale/Scale.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/scale/helper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$break$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/scale/break.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
var roundNumber = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["round"];
var IntervalScale = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(IntervalScale, _super);
    function IntervalScale() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'interval';
        // Step is calculated in adjustExtent.
        _this._interval = 0;
        _this._intervalPrecision = 2;
        return _this;
    }
    IntervalScale.prototype.parse = function(val) {
        // `Scale#parse` (and its overrids) are typically applied at the axis values input
        // in echarts option. e.g., `axis.min/max`, `dataZoom.min/max`, etc.
        // but `series.data` is not included, which uses `dataValueHelper.ts`#`parseDataValue`.
        // `Scale#parse` originally introduced in fb8c813215098b9d2458966229bb95c510883d5e
        // at 2016 for dataZoom start/end settings (See `parseAxisModelMinMax`).
        //
        // Historically `scale/Interval.ts` returns the input value directly. But numeric
        // values (such as a number-like string '123') effectively passed through here and
        // were involved in calculations, which was error-prone and inconsistent with the
        // declared TS return type. Previously such issues are fixed separately in different
        // places case by case (such as #2475).
        //
        // Now, we perform actual parse to ensure its `number` type here. The parsing rule
        // follows the series data parsing rule (`dataValueHelper.ts`#`parseDataValue`)
        // and maintains compatibility as much as possible (thus a more strict parsing
        // `number.ts`#`numericToNumber` is not used here.)
        //
        // FIXME: `ScaleDataValue` also need to be modified to include numeric string type,
        //  since it effectively does.
        return val == null || val === '' ? NaN : Number(val);
    };
    IntervalScale.prototype.contain = function(val) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["contain"](val, this._extent);
    };
    IntervalScale.prototype.normalize = function(val) {
        return this._calculator.normalize(val, this._extent);
    };
    IntervalScale.prototype.scale = function(val) {
        return this._calculator.scale(val, this._extent);
    };
    IntervalScale.prototype.getInterval = function() {
        return this._interval;
    };
    IntervalScale.prototype.setInterval = function(interval) {
        this._interval = interval;
        // Dropped auto calculated niceExtent and use user-set extent.
        // We assume user wants to set both interval, min, max to get a better result.
        this._niceExtent = this._extent.slice();
        this._intervalPrecision = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getIntervalPrecision"](interval);
    };
    /**
   * @override
   */ IntervalScale.prototype.getTicks = function(opt) {
        opt = opt || {};
        var interval = this._interval;
        var extent = this._extent;
        var niceTickExtent = this._niceExtent;
        var intervalPrecision = this._intervalPrecision;
        var scaleBreakHelper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$break$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getScaleBreakHelper"])();
        var ticks = [];
        // If interval is 0, return [];
        if (!interval) {
            return ticks;
        }
        if (opt.breakTicks === 'only_break' && scaleBreakHelper) {
            scaleBreakHelper.addBreaksToTicks(ticks, this._brkCtx.breaks, this._extent);
            return ticks;
        }
        // Consider this case: using dataZoom toolbox, zoom and zoom.
        var safeLimit = 10000;
        if (extent[0] < niceTickExtent[0]) {
            if (opt.expandToNicedExtent) {
                ticks.push({
                    value: roundNumber(niceTickExtent[0] - interval, intervalPrecision)
                });
            } else {
                ticks.push({
                    value: extent[0]
                });
            }
        }
        var estimateNiceMultiple = function(tickVal, targetTick) {
            return Math.round((targetTick - tickVal) / interval);
        };
        var tick = niceTickExtent[0];
        while(tick <= niceTickExtent[1]){
            ticks.push({
                value: tick
            });
            // Avoid rounding error
            tick = roundNumber(tick + interval, intervalPrecision);
            if (this._brkCtx) {
                var moreMultiple = this._brkCtx.calcNiceTickMultiple(tick, estimateNiceMultiple);
                if (moreMultiple >= 0) {
                    tick = roundNumber(tick + moreMultiple * interval, intervalPrecision);
                }
            }
            if (ticks.length > 0 && tick === ticks[ticks.length - 1].value) {
                break;
            }
            if (ticks.length > safeLimit) {
                return [];
            }
        }
        // Consider this case: the last item of ticks is smaller
        // than niceTickExtent[1] and niceTickExtent[1] === extent[1].
        var lastNiceTick = ticks.length ? ticks[ticks.length - 1].value : niceTickExtent[1];
        if (extent[1] > lastNiceTick) {
            if (opt.expandToNicedExtent) {
                ticks.push({
                    value: roundNumber(lastNiceTick + interval, intervalPrecision)
                });
            } else {
                ticks.push({
                    value: extent[1]
                });
            }
        }
        if (scaleBreakHelper) {
            scaleBreakHelper.pruneTicksByBreak(opt.pruneByBreak, ticks, this._brkCtx.breaks, function(item) {
                return item.value;
            }, this._interval, this._extent);
        }
        if (opt.breakTicks !== 'none' && scaleBreakHelper) {
            scaleBreakHelper.addBreaksToTicks(ticks, this._brkCtx.breaks, this._extent);
        }
        return ticks;
    };
    IntervalScale.prototype.getMinorTicks = function(splitNumber) {
        var ticks = this.getTicks({
            expandToNicedExtent: true
        });
        // NOTE: In log-scale, do not support minor ticks when breaks exist.
        //  because currently log-scale minor ticks is calculated based on raw values
        //  rather than log-transformed value, due to an odd effect when breaks exist.
        var minorTicks = [];
        var extent = this.getExtent();
        for(var i = 1; i < ticks.length; i++){
            var nextTick = ticks[i];
            var prevTick = ticks[i - 1];
            if (prevTick["break"] || nextTick["break"]) {
                continue;
            }
            var count = 0;
            var minorTicksGroup = [];
            var interval = nextTick.value - prevTick.value;
            var minorInterval = interval / splitNumber;
            var minorIntervalPrecision = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getIntervalPrecision"](minorInterval);
            while(count < splitNumber - 1){
                var minorTick = roundNumber(prevTick.value + (count + 1) * minorInterval, minorIntervalPrecision);
                // For the first and last interval. The count may be less than splitNumber.
                if (minorTick > extent[0] && minorTick < extent[1]) {
                    minorTicksGroup.push(minorTick);
                }
                count++;
            }
            var scaleBreakHelper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$break$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getScaleBreakHelper"])();
            scaleBreakHelper && scaleBreakHelper.pruneTicksByBreak('auto', minorTicksGroup, this._getNonTransBreaks(), function(value) {
                return value;
            }, this._interval, extent);
            minorTicks.push(minorTicksGroup);
        }
        return minorTicks;
    };
    IntervalScale.prototype._getNonTransBreaks = function() {
        return this._brkCtx ? this._brkCtx.breaks : [];
    };
    /**
   * @param opt.precision If 'auto', use nice presision.
   * @param opt.pad returns 1.50 but not 1.5 if precision is 2.
   */ IntervalScale.prototype.getLabel = function(data, opt) {
        if (data == null) {
            return '';
        }
        var precision = opt && opt.precision;
        if (precision == null) {
            precision = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrecision"](data.value) || 0;
        } else if (precision === 'auto') {
            // Should be more precise then tick.
            precision = this._intervalPrecision;
        }
        // (1) If `precision` is set, 12.005 should be display as '12.00500'.
        // (2) Use roundNumber (toFixed) to avoid scientific notation like '3.5e-7'.
        var dataNum = roundNumber(data.value, precision, true);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["addCommas"](dataNum);
    };
    /**
   * FIXME: refactor - disallow override, use composition instead.
   *
   * The override of `calcNiceTicks` should ensure these members are provided:
   *  this._intervalPrecision
   *  this._interval
   *
   * @param splitNumber By default `5`.
   */ IntervalScale.prototype.calcNiceTicks = function(splitNumber, minInterval, maxInterval) {
        splitNumber = splitNumber || 5;
        var extent = this._extent.slice();
        var span = this._getExtentSpanWithBreaks();
        if (!isFinite(span)) {
            return;
        }
        // User may set axis min 0 and data are all negative
        // FIXME If it needs to reverse ?
        if (span < 0) {
            span = -span;
            extent.reverse();
            this._innerSetExtent(extent[0], extent[1]);
            extent = this._extent.slice();
        }
        var result = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["intervalScaleNiceTicks"](extent, span, splitNumber, minInterval, maxInterval);
        this._intervalPrecision = result.intervalPrecision;
        this._interval = result.interval;
        this._niceExtent = result.niceTickExtent;
    };
    IntervalScale.prototype.calcNiceExtent = function(opt) {
        var extent = this._extent.slice();
        // If extent start and end are same, expand them
        if (extent[0] === extent[1]) {
            if (extent[0] !== 0) {
                // Expand extent
                // Note that extents can be both negative. See #13154
                var expandSize = Math.abs(extent[0]);
                // In the fowllowing case
                //      Axis has been fixed max 100
                //      Plus data are all 100 and axis extent are [100, 100].
                // Extend to the both side will cause expanded max is larger than fixed max.
                // So only expand to the smaller side.
                if (!opt.fixMax) {
                    extent[1] += expandSize / 2;
                    extent[0] -= expandSize / 2;
                } else {
                    extent[0] -= expandSize / 2;
                }
            } else {
                extent[1] = 1;
            }
        }
        var span = extent[1] - extent[0];
        // If there are no data and extent are [Infinity, -Infinity]
        if (!isFinite(span)) {
            extent[0] = 0;
            extent[1] = 1;
        }
        this._innerSetExtent(extent[0], extent[1]);
        extent = this._extent.slice();
        this.calcNiceTicks(opt.splitNumber, opt.minInterval, opt.maxInterval);
        var interval = this._interval;
        var intervalPrecition = this._intervalPrecision;
        if (!opt.fixMin) {
            extent[0] = roundNumber(Math.floor(extent[0] / interval) * interval, intervalPrecition);
        }
        if (!opt.fixMax) {
            extent[1] = roundNumber(Math.ceil(extent[1] / interval) * interval, intervalPrecition);
        }
        this._innerSetExtent(extent[0], extent[1]);
    };
    IntervalScale.prototype.setNiceExtent = function(min, max) {
        this._niceExtent = [
            min,
            max
        ];
    };
    IntervalScale.type = 'interval';
    return IntervalScale;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$Scale$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$Scale$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].registerClass(IntervalScale);
const __TURBOPACK__default__export__ = IntervalScale;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/scale/Time.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
/*
* A third-party license is embedded for some of the code in this file:
* The "scaleLevels" was originally copied from "d3.js" with some
* modifications made for this project.
* (See more details in the comment on the definition of "scaleLevels" below.)
* The use of the source code of this file is also subject to the terms
* and consitions of the license of "d3.js" (BSD-3Clause, see
* </licenses/LICENSE-d3>).
*/ // [About UTC and local time zone]:
// In most cases, `number.parseDate` will treat input data string as local time
// (except time zone is specified in time string). And `format.formateTime` returns
// local time by default. option.useUTC is false by default. This design has
// considered these common cases:
// (1) Time that is persistent in server is in UTC, but it is needed to be displayed
// in local time by default.
// (2) By default, the input data string (e.g., '2011-01-02') should be displayed
// as its original time, without any time difference.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/number.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/time.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/scale/helper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$Interval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/scale/Interval.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$Scale$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/scale/Scale.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/log.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$break$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/scale/break.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
// FIXME 公用？
var bisect = function(a, x, lo, hi) {
    while(lo < hi){
        var mid = lo + hi >>> 1;
        if (a[mid][1] < x) {
            lo = mid + 1;
        } else {
            hi = mid;
        }
    }
    return lo;
};
var TimeScale = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(TimeScale, _super);
    function TimeScale(settings) {
        var _this = _super.call(this, settings) || this;
        _this.type = 'time';
        return _this;
    }
    /**
   * Get label is mainly for other components like dataZoom, tooltip.
   */ TimeScale.prototype.getLabel = function(tick) {
        var useUTC = this.getSetting('useUTC');
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])(tick.value, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fullLeveledFormatter"][(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDefaultFormatPrecisionOfInterval"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrimaryTimeUnit"])(this._minLevelUnit))] || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fullLeveledFormatter"].second, useUTC, this.getSetting('locale'));
    };
    TimeScale.prototype.getFormattedLabel = function(tick, idx, labelFormatter) {
        var isUTC = this.getSetting('useUTC');
        var lang = this.getSetting('locale');
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["leveledFormat"])(tick, idx, labelFormatter, lang, isUTC);
    };
    /**
   * @override
   */ TimeScale.prototype.getTicks = function(opt) {
        opt = opt || {};
        var interval = this._interval;
        var extent = this._extent;
        var scaleBreakHelper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$break$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getScaleBreakHelper"])();
        var ticks = [];
        // If interval is 0, return [];
        if (!interval) {
            return ticks;
        }
        var useUTC = this.getSetting('useUTC');
        if (scaleBreakHelper && opt.breakTicks === 'only_break') {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$break$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getScaleBreakHelper"])().addBreaksToTicks(ticks, this._brkCtx.breaks, this._extent);
            return ticks;
        }
        var extent0Unit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUnitFromValue"])(extent[1], useUTC);
        ticks.push({
            value: extent[0],
            time: {
                level: 0,
                upperTimeUnit: extent0Unit,
                lowerTimeUnit: extent0Unit
            }
        });
        var innerTicks = getIntervalTicks(this._minLevelUnit, this._approxInterval, useUTC, extent, this._getExtentSpanWithBreaks(), this._brkCtx);
        ticks = ticks.concat(innerTicks);
        var extent1Unit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUnitFromValue"])(extent[1], useUTC);
        ticks.push({
            value: extent[1],
            time: {
                level: 0,
                upperTimeUnit: extent1Unit,
                lowerTimeUnit: extent1Unit
            }
        });
        var isUTC = this.getSetting('useUTC');
        var upperUnitIndex = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["primaryTimeUnits"].length - 1;
        var maxLevel = 0;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(ticks, function(tick) {
            upperUnitIndex = Math.min(upperUnitIndex, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["indexOf"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["primaryTimeUnits"], tick.time.upperTimeUnit));
            maxLevel = Math.max(maxLevel, tick.time.level);
        });
        if (scaleBreakHelper) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$break$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getScaleBreakHelper"])().pruneTicksByBreak(opt.pruneByBreak, ticks, this._brkCtx.breaks, function(item) {
                return item.value;
            }, this._approxInterval, this._extent);
        }
        if (scaleBreakHelper && opt.breakTicks !== 'none') {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$break$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getScaleBreakHelper"])().addBreaksToTicks(ticks, this._brkCtx.breaks, this._extent, function(trimmedBrk) {
                // @see `parseTimeAxisLabelFormatterDictionary`.
                var lowerBrkUnitIndex = Math.max((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["indexOf"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["primaryTimeUnits"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUnitFromValue"])(trimmedBrk.vmin, isUTC)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["indexOf"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["primaryTimeUnits"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUnitFromValue"])(trimmedBrk.vmax, isUTC)));
                var upperBrkUnitIndex = 0;
                for(var unitIdx = 0; unitIdx < __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["primaryTimeUnits"].length; unitIdx++){
                    if (!isPrimaryUnitValueAndGreaterSame(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["primaryTimeUnits"][unitIdx], trimmedBrk.vmin, trimmedBrk.vmax, isUTC)) {
                        upperBrkUnitIndex = unitIdx;
                        break;
                    }
                }
                var upperIdx = Math.min(upperBrkUnitIndex, upperUnitIndex);
                var lowerIdx = Math.max(upperIdx, lowerBrkUnitIndex);
                return {
                    level: maxLevel,
                    lowerTimeUnit: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["primaryTimeUnits"][lowerIdx],
                    upperTimeUnit: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["primaryTimeUnits"][upperIdx]
                };
            });
        }
        return ticks;
    };
    TimeScale.prototype.calcNiceExtent = function(opt) {
        var extent = this.getExtent();
        // If extent start and end are same, expand them
        if (extent[0] === extent[1]) {
            // Expand extent
            extent[0] -= __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ONE_DAY"];
            extent[1] += __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ONE_DAY"];
        }
        // If there are no data and extent are [Infinity, -Infinity]
        if (extent[1] === -Infinity && extent[0] === Infinity) {
            var d = new Date();
            extent[1] = +new Date(d.getFullYear(), d.getMonth(), d.getDate());
            extent[0] = extent[1] - __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ONE_DAY"];
        }
        this._innerSetExtent(extent[0], extent[1]);
        this.calcNiceTicks(opt.splitNumber, opt.minInterval, opt.maxInterval);
    };
    TimeScale.prototype.calcNiceTicks = function(approxTickNum, minInterval, maxInterval) {
        approxTickNum = approxTickNum || 10;
        var span = this._getExtentSpanWithBreaks();
        this._approxInterval = span / approxTickNum;
        if (minInterval != null && this._approxInterval < minInterval) {
            this._approxInterval = minInterval;
        }
        if (maxInterval != null && this._approxInterval > maxInterval) {
            this._approxInterval = maxInterval;
        }
        var scaleIntervalsLen = scaleIntervals.length;
        var idx = Math.min(bisect(scaleIntervals, this._approxInterval, 0, scaleIntervalsLen), scaleIntervalsLen - 1);
        // Interval that can be used to calculate ticks
        this._interval = scaleIntervals[idx][1];
        this._intervalPrecision = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getIntervalPrecision"](this._interval);
        // Min level used when picking ticks from top down.
        // We check one more level to avoid the ticks are to sparse in some case.
        this._minLevelUnit = scaleIntervals[Math.max(idx - 1, 0)][0];
    };
    TimeScale.prototype.parse = function(val) {
        // val might be float.
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNumber"])(val) ? val : +__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseDate"](val);
    };
    TimeScale.prototype.contain = function(val) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["contain"](val, this._extent);
    };
    TimeScale.prototype.normalize = function(val) {
        return this._calculator.normalize(val, this._extent);
    };
    TimeScale.prototype.scale = function(val) {
        return this._calculator.scale(val, this._extent);
    };
    TimeScale.type = 'time';
    return TimeScale;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$Interval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
/**
 * This implementation was originally copied from "d3.js"
 * <https://github.com/d3/d3/blob/b516d77fb8566b576088e73410437494717ada26/src/time/scale.js>
 * with some modifications made for this program.
 * See the license statement at the head of this file.
 */ var scaleIntervals = [
    // Format                           interval
    [
        'second',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ONE_SECOND"]
    ],
    [
        'minute',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ONE_MINUTE"]
    ],
    [
        'hour',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ONE_HOUR"]
    ],
    [
        'quarter-day',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ONE_HOUR"] * 6
    ],
    [
        'half-day',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ONE_HOUR"] * 12
    ],
    [
        'day',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ONE_DAY"] * 1.2
    ],
    [
        'half-week',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ONE_DAY"] * 3.5
    ],
    [
        'week',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ONE_DAY"] * 7
    ],
    [
        'month',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ONE_DAY"] * 31
    ],
    [
        'quarter',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ONE_DAY"] * 95
    ],
    [
        'half-year',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ONE_YEAR"] / 2
    ],
    [
        'year',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ONE_YEAR"]
    ] // 1Y
];
function isPrimaryUnitValueAndGreaterSame(unit, valueA, valueB, isUTC) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundTime"])(new Date(valueA), unit, isUTC).getTime() === (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundTime"])(new Date(valueB), unit, isUTC).getTime();
}
// function isUnitValueSame(
//     unit: PrimaryTimeUnit,
//     valueA: number,
//     valueB: number,
//     isUTC: boolean
// ): boolean {
//     const dateA = numberUtil.parseDate(valueA) as any;
//     const dateB = numberUtil.parseDate(valueB) as any;
//     const isSame = (unit: PrimaryTimeUnit) => {
//         return getUnitValue(dateA, unit, isUTC)
//             === getUnitValue(dateB, unit, isUTC);
//     };
//     const isSameYear = () => isSame('year');
//     // const isSameHalfYear = () => isSameYear() && isSame('half-year');
//     // const isSameQuater = () => isSameYear() && isSame('quarter');
//     const isSameMonth = () => isSameYear() && isSame('month');
//     const isSameDay = () => isSameMonth() && isSame('day');
//     // const isSameHalfDay = () => isSameDay() && isSame('half-day');
//     const isSameHour = () => isSameDay() && isSame('hour');
//     const isSameMinute = () => isSameHour() && isSame('minute');
//     const isSameSecond = () => isSameMinute() && isSame('second');
//     const isSameMilliSecond = () => isSameSecond() && isSame('millisecond');
//     switch (unit) {
//         case 'year':
//             return isSameYear();
//         case 'month':
//             return isSameMonth();
//         case 'day':
//             return isSameDay();
//         case 'hour':
//             return isSameHour();
//         case 'minute':
//             return isSameMinute();
//         case 'second':
//             return isSameSecond();
//         case 'millisecond':
//             return isSameMilliSecond();
//     }
// }
// const primaryUnitGetters = {
//     year: fullYearGetterName(),
//     month: monthGetterName(),
//     day: dateGetterName(),
//     hour: hoursGetterName(),
//     minute: minutesGetterName(),
//     second: secondsGetterName(),
//     millisecond: millisecondsGetterName()
// };
// const primaryUnitUTCGetters = {
//     year: fullYearGetterName(true),
//     month: monthGetterName(true),
//     day: dateGetterName(true),
//     hour: hoursGetterName(true),
//     minute: minutesGetterName(true),
//     second: secondsGetterName(true),
//     millisecond: millisecondsGetterName(true)
// };
// function moveTick(date: Date, unitName: TimeUnit, step: number, isUTC: boolean) {
//     step = step || 1;
//     switch (getPrimaryTimeUnit(unitName)) {
//         case 'year':
//             date[fullYearSetterName(isUTC)](date[fullYearGetterName(isUTC)]() + step);
//             break;
//         case 'month':
//             date[monthSetterName(isUTC)](date[monthGetterName(isUTC)]() + step);
//             break;
//         case 'day':
//             date[dateSetterName(isUTC)](date[dateGetterName(isUTC)]() + step);
//             break;
//         case 'hour':
//             date[hoursSetterName(isUTC)](date[hoursGetterName(isUTC)]() + step);
//             break;
//         case 'minute':
//             date[minutesSetterName(isUTC)](date[minutesGetterName(isUTC)]() + step);
//             break;
//         case 'second':
//             date[secondsSetterName(isUTC)](date[secondsGetterName(isUTC)]() + step);
//             break;
//         case 'millisecond':
//             date[millisecondsSetterName(isUTC)](date[millisecondsGetterName(isUTC)]() + step);
//             break;
//     }
//     return date.getTime();
// }
// const DATE_INTERVALS = [[8, 7.5], [4, 3.5], [2, 1.5]];
// const MONTH_INTERVALS = [[6, 5.5], [3, 2.5], [2, 1.5]];
// const MINUTES_SECONDS_INTERVALS = [[30, 30], [20, 20], [15, 15], [10, 10], [5, 5], [2, 2]];
function getDateInterval(approxInterval, daysInMonth) {
    approxInterval /= __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ONE_DAY"];
    return approxInterval > 16 ? 16 : approxInterval > 7.5 ? 7 // TODO week 7 or day 8?
     : approxInterval > 3.5 ? 4 : approxInterval > 1.5 ? 2 : 1;
}
function getMonthInterval(approxInterval) {
    var APPROX_ONE_MONTH = 30 * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ONE_DAY"];
    approxInterval /= APPROX_ONE_MONTH;
    return approxInterval > 6 ? 6 : approxInterval > 3 ? 3 : approxInterval > 2 ? 2 : 1;
}
function getHourInterval(approxInterval) {
    approxInterval /= __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ONE_HOUR"];
    return approxInterval > 12 ? 12 : approxInterval > 6 ? 6 : approxInterval > 3.5 ? 4 : approxInterval > 2 ? 2 : 1;
}
function getMinutesAndSecondsInterval(approxInterval, isMinutes) {
    approxInterval /= isMinutes ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ONE_MINUTE"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ONE_SECOND"];
    return approxInterval > 30 ? 30 : approxInterval > 20 ? 20 : approxInterval > 15 ? 15 : approxInterval > 10 ? 10 : approxInterval > 5 ? 5 : approxInterval > 2 ? 2 : 1;
}
function getMillisecondsInterval(approxInterval) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nice"](approxInterval, true);
}
// e.g., if the input unit is 'day', start calculate ticks from the first day of
// that month to make ticks "nice".
function getFirstTimestampOfUnit(timestamp, unitName, isUTC) {
    var upperUnitIdx = Math.max(0, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["indexOf"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["primaryTimeUnits"], unitName) - 1);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundTime"])(new Date(timestamp), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["primaryTimeUnits"][upperUnitIdx], isUTC).getTime();
}
function createEstimateNiceMultiple(setMethodName, dateMethodInterval) {
    var tmpDate = new Date(0);
    tmpDate[setMethodName](1);
    var tmpTime = tmpDate.getTime();
    tmpDate[setMethodName](1 + dateMethodInterval);
    var approxTimeInterval = tmpDate.getTime() - tmpTime;
    return function(tickVal, targetValue) {
        // Only in month that accurate result can not get by division of
        // timestamp interval, but no need accurate here.
        return Math.max(0, Math.round((targetValue - tickVal) / approxTimeInterval));
    };
}
function getIntervalTicks(bottomUnitName, approxInterval, isUTC, extent, extentSpanWithBreaks, brkCtx) {
    var safeLimit = 10000;
    var unitNames = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["timeUnits"];
    var iter = 0;
    function addTicksInSpan(interval, minTimestamp, maxTimestamp, getMethodName, setMethodName, isDate, out) {
        var estimateNiceMultiple = createEstimateNiceMultiple(setMethodName, interval);
        var dateTime = minTimestamp;
        var date = new Date(dateTime);
        // if (isDate) {
        //     d -= 1; // Starts with 0;   PENDING
        // }
        while(dateTime < maxTimestamp && dateTime <= extent[1]){
            out.push({
                value: dateTime
            });
            if (iter++ > safeLimit) {
                if ("TURBOPACK compile-time truthy", 1) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["warn"])('Exceed safe limit in time scale.');
                }
                break;
            }
            date[setMethodName](date[getMethodName]() + interval);
            dateTime = date.getTime();
            if (brkCtx) {
                var moreMultiple = brkCtx.calcNiceTickMultiple(dateTime, estimateNiceMultiple);
                if (moreMultiple > 0) {
                    date[setMethodName](date[getMethodName]() + moreMultiple * interval);
                    dateTime = date.getTime();
                }
            }
        }
        // This extra tick is for calcuating ticks of next level. Will not been added to the final result
        out.push({
            value: dateTime,
            notAdd: true
        });
    }
    function addLevelTicks(unitName, lastLevelTicks, levelTicks) {
        var newAddedTicks = [];
        var isFirstLevel = !lastLevelTicks.length;
        if (isPrimaryUnitValueAndGreaterSame((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrimaryTimeUnit"])(unitName), extent[0], extent[1], isUTC)) {
            return;
        }
        if (isFirstLevel) {
            lastLevelTicks = [
                {
                    value: getFirstTimestampOfUnit(extent[0], unitName, isUTC)
                },
                {
                    value: extent[1]
                }
            ];
        }
        for(var i = 0; i < lastLevelTicks.length - 1; i++){
            var startTick = lastLevelTicks[i].value;
            var endTick = lastLevelTicks[i + 1].value;
            if (startTick === endTick) {
                continue;
            }
            var interval = void 0;
            var getterName = void 0;
            var setterName = void 0;
            var isDate = false;
            switch(unitName){
                case 'year':
                    interval = Math.max(1, Math.round(approxInterval / __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ONE_DAY"] / 365));
                    getterName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fullYearGetterName"])(isUTC);
                    setterName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fullYearSetterName"])(isUTC);
                    break;
                case 'half-year':
                case 'quarter':
                case 'month':
                    interval = getMonthInterval(approxInterval);
                    getterName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["monthGetterName"])(isUTC);
                    setterName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["monthSetterName"])(isUTC);
                    break;
                case 'week':
                case 'half-week':
                case 'day':
                    interval = getDateInterval(approxInterval, 31); // Use 32 days and let interval been 16
                    getterName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dateGetterName"])(isUTC);
                    setterName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dateSetterName"])(isUTC);
                    isDate = true;
                    break;
                case 'half-day':
                case 'quarter-day':
                case 'hour':
                    interval = getHourInterval(approxInterval);
                    getterName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hoursGetterName"])(isUTC);
                    setterName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hoursSetterName"])(isUTC);
                    break;
                case 'minute':
                    interval = getMinutesAndSecondsInterval(approxInterval, true);
                    getterName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["minutesGetterName"])(isUTC);
                    setterName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["minutesSetterName"])(isUTC);
                    break;
                case 'second':
                    interval = getMinutesAndSecondsInterval(approxInterval, false);
                    getterName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["secondsGetterName"])(isUTC);
                    setterName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["secondsSetterName"])(isUTC);
                    break;
                case 'millisecond':
                    interval = getMillisecondsInterval(approxInterval);
                    getterName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["millisecondsGetterName"])(isUTC);
                    setterName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["millisecondsSetterName"])(isUTC);
                    break;
            }
            // Notice: This expansion by `getFirstTimestampOfUnit` may cause too many ticks and
            // iteration. e.g., when three levels of ticks is displayed, which can be caused by
            // data zoom and axis breaks. Thus trim them here.
            if (endTick >= extent[0] && startTick <= extent[1]) {
                addTicksInSpan(interval, startTick, endTick, getterName, setterName, isDate, newAddedTicks);
            }
            if (unitName === 'year' && levelTicks.length > 1 && i === 0) {
                // Add nearest years to the left extent.
                levelTicks.unshift({
                    value: levelTicks[0].value - interval
                });
            }
        }
        for(var i = 0; i < newAddedTicks.length; i++){
            levelTicks.push(newAddedTicks[i]);
        }
    }
    var levelsTicks = [];
    var currentLevelTicks = [];
    var tickCount = 0;
    var lastLevelTickCount = 0;
    for(var i = 0; i < unitNames.length; ++i){
        var primaryTimeUnit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrimaryTimeUnit"])(unitNames[i]);
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPrimaryTimeUnit"])(unitNames[i])) {
            continue;
        }
        addLevelTicks(unitNames[i], levelsTicks[levelsTicks.length - 1] || [], currentLevelTicks);
        var nextPrimaryTimeUnit = unitNames[i + 1] ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrimaryTimeUnit"])(unitNames[i + 1]) : null;
        if (primaryTimeUnit !== nextPrimaryTimeUnit) {
            if (currentLevelTicks.length) {
                lastLevelTickCount = tickCount;
                // Remove the duplicate so the tick count can be precisely.
                currentLevelTicks.sort(function(a, b) {
                    return a.value - b.value;
                });
                var levelTicksRemoveDuplicated = [];
                for(var i_1 = 0; i_1 < currentLevelTicks.length; ++i_1){
                    var tickValue = currentLevelTicks[i_1].value;
                    if (i_1 === 0 || currentLevelTicks[i_1 - 1].value !== tickValue) {
                        levelTicksRemoveDuplicated.push(currentLevelTicks[i_1]);
                        if (tickValue >= extent[0] && tickValue <= extent[1]) {
                            tickCount++;
                        }
                    }
                }
                var targetTickNum = extentSpanWithBreaks / approxInterval;
                // Added too much in this level and not too less in last level
                if (tickCount > targetTickNum * 1.5 && lastLevelTickCount > targetTickNum / 1.5) {
                    break;
                }
                // Only treat primary time unit as one level.
                levelsTicks.push(levelTicksRemoveDuplicated);
                if (tickCount > targetTickNum || bottomUnitName === unitNames[i]) {
                    break;
                }
            }
            // Reset if next unitName is primary
            currentLevelTicks = [];
        }
    }
    var levelsTicksInExtent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filter"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["map"])(levelsTicks, function(levelTicks) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filter"])(levelTicks, function(tick) {
            return tick.value >= extent[0] && tick.value <= extent[1] && !tick.notAdd;
        });
    }), function(levelTicks) {
        return levelTicks.length > 0;
    });
    var ticks = [];
    var maxLevel = levelsTicksInExtent.length - 1;
    for(var i = 0; i < levelsTicksInExtent.length; ++i){
        var levelTicks = levelsTicksInExtent[i];
        for(var k = 0; k < levelTicks.length; ++k){
            var unit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUnitFromValue"])(levelTicks[k].value, isUTC);
            ticks.push({
                value: levelTicks[k].value,
                time: {
                    level: maxLevel - i,
                    upperTimeUnit: unit,
                    lowerTimeUnit: unit
                }
            });
        }
    }
    ticks.sort(function(a, b) {
        return a.value - b.value;
    });
    // Remove duplicates
    var result = [];
    for(var i = 0; i < ticks.length; ++i){
        if (i === 0 || ticks[i].value !== ticks[i - 1].value) {
            result.push(ticks[i]);
        }
    }
    return result;
}
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$Scale$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].registerClass(TimeScale);
const __TURBOPACK__default__export__ = TimeScale;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/scale/Log.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$Scale$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/scale/Scale.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/number.js [app-ssr] (ecmascript)");
// Use some method of IntervalScale
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$Interval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/scale/Interval.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/scale/helper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$break$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/scale/break.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
var fixRound = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["round"];
var mathFloor = Math.floor;
var mathCeil = Math.ceil;
var mathPow = Math.pow;
var mathLog = Math.log;
var LogScale = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(LogScale, _super);
    function LogScale() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'log';
        _this.base = 10;
        _this._originalScale = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$Interval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]();
        return _this;
    }
    /**
   * @param Whether expand the ticks to niced extent.
   */ LogScale.prototype.getTicks = function(opt) {
        opt = opt || {};
        var extent = this._extent.slice();
        var originalExtent = this._originalScale.getExtent();
        var ticks = _super.prototype.getTicks.call(this, opt);
        var base = this.base;
        var originalBreaks = this._originalScale._innerGetBreaks();
        var scaleBreakHelper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$break$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getScaleBreakHelper"])();
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["map"](ticks, function(tick) {
            var val = tick.value;
            var roundingCriterion = null;
            var powVal = mathPow(base, val);
            // Fix #4158
            if (val === extent[0] && this._fixMin) {
                roundingCriterion = originalExtent[0];
            } else if (val === extent[1] && this._fixMax) {
                roundingCriterion = originalExtent[1];
            }
            var vBreak;
            if (scaleBreakHelper) {
                var transformed = scaleBreakHelper.getTicksLogTransformBreak(tick, base, originalBreaks, fixRoundingError);
                vBreak = transformed.vBreak;
                if (roundingCriterion == null) {
                    roundingCriterion = transformed.brkRoundingCriterion;
                }
            }
            if (roundingCriterion != null) {
                powVal = fixRoundingError(powVal, roundingCriterion);
            }
            return {
                value: powVal,
                "break": vBreak
            };
        }, this);
    };
    LogScale.prototype._getNonTransBreaks = function() {
        return this._originalScale._innerGetBreaks();
    };
    LogScale.prototype.setExtent = function(start, end) {
        this._originalScale.setExtent(start, end);
        var loggedExtent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logTransform"])(this.base, [
            start,
            end
        ]);
        _super.prototype.setExtent.call(this, loggedExtent[0], loggedExtent[1]);
    };
    /**
   * @return {number} end
   */ LogScale.prototype.getExtent = function() {
        var base = this.base;
        var extent = _super.prototype.getExtent.call(this);
        extent[0] = mathPow(base, extent[0]);
        extent[1] = mathPow(base, extent[1]);
        // Fix #4158
        var originalExtent = this._originalScale.getExtent();
        this._fixMin && (extent[0] = fixRoundingError(extent[0], originalExtent[0]));
        this._fixMax && (extent[1] = fixRoundingError(extent[1], originalExtent[1]));
        return extent;
    };
    LogScale.prototype.unionExtentFromData = function(data, dim) {
        this._originalScale.unionExtentFromData(data, dim);
        var loggedOther = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logTransform"])(this.base, data.getApproximateExtent(dim), true);
        this._innerUnionExtent(loggedOther);
    };
    /**
   * Update interval and extent of intervals for nice ticks
   * @param approxTickNum default 10 Given approx tick number
   */ LogScale.prototype.calcNiceTicks = function(approxTickNum) {
        approxTickNum = approxTickNum || 10;
        var extent = this._extent.slice();
        var span = this._getExtentSpanWithBreaks();
        if (!isFinite(span) || span <= 0) {
            return;
        }
        var interval = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["quantity"](span);
        var err = approxTickNum / span * interval;
        // Filter ticks to get closer to the desired count.
        if (err <= 0.5) {
            interval *= 10;
        }
        // Interval should be integer
        while(!isNaN(interval) && Math.abs(interval) < 1 && Math.abs(interval) > 0){
            interval *= 10;
        }
        var niceExtent = [
            fixRound(mathCeil(extent[0] / interval) * interval),
            fixRound(mathFloor(extent[1] / interval) * interval)
        ];
        this._interval = interval;
        this._intervalPrecision = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getIntervalPrecision"])(interval);
        this._niceExtent = niceExtent;
    };
    LogScale.prototype.calcNiceExtent = function(opt) {
        _super.prototype.calcNiceExtent.call(this, opt);
        this._fixMin = opt.fixMin;
        this._fixMax = opt.fixMax;
    };
    LogScale.prototype.contain = function(val) {
        val = mathLog(val) / mathLog(this.base);
        return _super.prototype.contain.call(this, val);
    };
    LogScale.prototype.normalize = function(val) {
        val = mathLog(val) / mathLog(this.base);
        return _super.prototype.normalize.call(this, val);
    };
    LogScale.prototype.scale = function(val) {
        val = _super.prototype.scale.call(this, val);
        return mathPow(this.base, val);
    };
    LogScale.prototype.setBreaksFromOption = function(breakOptionList) {
        var scaleBreakHelper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$break$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getScaleBreakHelper"])();
        if (!scaleBreakHelper) {
            return;
        }
        var _a = scaleBreakHelper.logarithmicParseBreaksFromOption(breakOptionList, this.base, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bind"](this.parse, this)), parsedOriginal = _a.parsedOriginal, parsedLogged = _a.parsedLogged;
        this._originalScale._innerSetBreak(parsedOriginal);
        this._innerSetBreak(parsedLogged);
    };
    LogScale.type = 'log';
    return LogScale;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$Interval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
function fixRoundingError(val, originalVal) {
    return fixRound(val, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrecision"](originalVal));
}
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$Scale$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].registerClass(LogScale);
const __TURBOPACK__default__export__ = LogScale;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/scale/breakImpl.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    "installScaleBreakHelper",
    ()=>installScaleBreakHelper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/log.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$break$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/scale/break.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/number.js [app-ssr] (ecmascript)");
;
;
;
;
/**
 * @caution
 *  Must not export anything except `installScaleBreakHelper`
 */ var ScaleBreakContextImpl = /** @class */ function() {
    function ScaleBreakContextImpl() {
        // [CAVEAT]: Should set only by `ScaleBreakContext#setBreaks`!
        this.breaks = [];
        // [CAVEAT]: Should update only by `ScaleBreakContext#update`!
        // They are the values that scaleExtent[0] and scaleExtent[1] are mapped to a numeric axis
        // that breaks are applied, primarily for optimization of `Scale#normalize`.
        this._elapsedExtent = [
            Infinity,
            -Infinity
        ];
    }
    ScaleBreakContextImpl.prototype.setBreaks = function(parsed) {
        // @ts-ignore
        this.breaks = parsed.breaks;
    };
    /**
   * [CAVEAT]: Must be called immediately each time scale extent and breaks are updated!
   */ ScaleBreakContextImpl.prototype.update = function(scaleExtent) {
        updateAxisBreakGapReal(this, scaleExtent);
        var elapsedExtent = this._elapsedExtent;
        elapsedExtent[0] = this.elapse(scaleExtent[0]);
        elapsedExtent[1] = this.elapse(scaleExtent[1]);
    };
    ScaleBreakContextImpl.prototype.hasBreaks = function() {
        return !!this.breaks.length;
    };
    /**
   * When iteratively generating ticks by nice interval, currently the `interval`, which is
   * calculated by break-elapsed extent span, is probably very small comparing to the original
   * extent, leading to a large number of iteration and tick generation, even over `safeLimit`.
   * Thus stepping over breaks is necessary in that loop.
   *
   * "Nice" should be ensured on ticks when step over the breaks. Thus this method returns
   * a integer multiple of the "nice tick interval".
   *
   * This method does little work; it is just for unifying and restricting the behavior.
   */ ScaleBreakContextImpl.prototype.calcNiceTickMultiple = function(tickVal, estimateNiceMultiple) {
        for(var idx = 0; idx < this.breaks.length; idx++){
            var brk = this.breaks[idx];
            if (brk.vmin < tickVal && tickVal < brk.vmax) {
                var multiple = estimateNiceMultiple(tickVal, brk.vmax);
                if ("TURBOPACK compile-time truthy", 1) {
                    // If not, it may cause dead loop or not nice tick.
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(multiple >= 0 && Math.round(multiple) === multiple);
                }
                return multiple;
            }
        }
        return 0;
    };
    ScaleBreakContextImpl.prototype.getExtentSpan = function() {
        return this._elapsedExtent[1] - this._elapsedExtent[0];
    };
    ScaleBreakContextImpl.prototype.normalize = function(val) {
        var elapsedSpan = this._elapsedExtent[1] - this._elapsedExtent[0];
        // The same logic as `Scale#normalize`.
        if (elapsedSpan === 0) {
            return 0.5;
        }
        return (this.elapse(val) - this._elapsedExtent[0]) / elapsedSpan;
    };
    ScaleBreakContextImpl.prototype.scale = function(val) {
        return this.unelapse(val * (this._elapsedExtent[1] - this._elapsedExtent[0]) + this._elapsedExtent[0]);
    };
    /**
   * Suppose:
   *    AXIS_BREAK_LAST_BREAK_END_BASE: 0
   *    AXIS_BREAK_ELAPSED_BASE: 0
   *    breaks: [
   *        {start: -400, end: -300, gap: 27},
   *        {start: -100, end: 100, gap: 10},
   *        {start: 200, end: 400, gap: 300},
   *    ]
   * The mapping will be:
   *        |        |
   *    400 +   ->   +  237
   *     |  |        |   |  (gap: 300)
   *    200 +   ->   + -63
   *        |        |
   *    100 +   ->   + -163
   *     |  |        |   |  (gap: 10)
   *   -100 +   ->   + -173
   *        |        |
   *   -300 +   ->   + -373
   *     |  |        |   |  (gap: 27)
   *   -400 +   ->   + -400
   *        |        |
   *   origianl     elapsed
   *
   * Note:
   *   The mapping has nothing to do with "scale extent".
   */ ScaleBreakContextImpl.prototype.elapse = function(val) {
        // If the value is in the break, return the normalized value in the break
        var elapsedVal = AXIS_BREAK_ELAPSED_BASE;
        var lastBreakEnd = AXIS_BREAK_LAST_BREAK_END_BASE;
        var stillOver = true;
        for(var i = 0; i < this.breaks.length; i++){
            var brk = this.breaks[i];
            if (val <= brk.vmax) {
                if (val > brk.vmin) {
                    elapsedVal += brk.vmin - lastBreakEnd + (val - brk.vmin) / (brk.vmax - brk.vmin) * brk.gapReal;
                } else {
                    elapsedVal += val - lastBreakEnd;
                }
                lastBreakEnd = brk.vmax;
                stillOver = false;
                break;
            }
            elapsedVal += brk.vmin - lastBreakEnd + brk.gapReal;
            lastBreakEnd = brk.vmax;
        }
        if (stillOver) {
            elapsedVal += val - lastBreakEnd;
        }
        return elapsedVal;
    };
    ScaleBreakContextImpl.prototype.unelapse = function(elapsedVal) {
        var lastElapsedEnd = AXIS_BREAK_ELAPSED_BASE;
        var lastBreakEnd = AXIS_BREAK_LAST_BREAK_END_BASE;
        var stillOver = true;
        var unelapsedVal = 0;
        for(var i = 0; i < this.breaks.length; i++){
            var brk = this.breaks[i];
            var elapsedStart = lastElapsedEnd + brk.vmin - lastBreakEnd;
            var elapsedEnd = elapsedStart + brk.gapReal;
            if (elapsedVal <= elapsedEnd) {
                if (elapsedVal > elapsedStart) {
                    unelapsedVal = brk.vmin + (elapsedVal - elapsedStart) / (elapsedEnd - elapsedStart) * (brk.vmax - brk.vmin);
                } else {
                    unelapsedVal = lastBreakEnd + elapsedVal - lastElapsedEnd;
                }
                lastBreakEnd = brk.vmax;
                stillOver = false;
                break;
            }
            lastElapsedEnd = elapsedEnd;
            lastBreakEnd = brk.vmax;
        }
        if (stillOver) {
            unelapsedVal = lastBreakEnd + elapsedVal - lastElapsedEnd;
        }
        return unelapsedVal;
    };
    return ScaleBreakContextImpl;
}();
;
function createScaleBreakContext() {
    return new ScaleBreakContextImpl();
}
// Both can start with any finite value, and are not necessaryily equal. But they need to
// be the same in `axisBreakElapse` and `axisBreakUnelapse` respectively.
var AXIS_BREAK_ELAPSED_BASE = 0;
var AXIS_BREAK_LAST_BREAK_END_BASE = 0;
/**
 * `gapReal` in brkCtx.breaks will be calculated.
 */ function updateAxisBreakGapReal(brkCtx, scaleExtent) {
    // Considered the effect:
    //  - Use dataZoom to move some of the breaks outside the extent.
    //  - Some scenarios that `series.clip: false`.
    //
    // How to calculate `prctBrksGapRealSum`:
    //  Based on the formula:
    //      xxx.span = brk.vmax - brk.vmin
    //      xxx.tpPrct.val / xxx.tpAbs.val means ParsedAxisBreak['gapParsed']['val']
    //      .S/.E means a break that is semi in scaleExtent[0] or scaleExtent[1]
    //      valP = (
    //          + (fullyInExtBrksSum.tpAbs.gapReal - fullyInExtBrksSum.tpAbs.span)
    //          + (semiInExtBrk.S.tpAbs.gapReal - semiInExtBrk.S.tpAbs.span) * semiInExtBrk.S.tpAbs.inExtFrac
    //          + (semiInExtBrk.E.tpAbs.gapReal - semiInExtBrk.E.tpAbs.span) * semiInExtBrk.E.tpAbs.inExtFrac
    //      )
    //      valQ = (
    //          - fullyInExtBrksSum.tpPrct.span
    //          - semiInExtBrk.S.tpPrct.span * semiInExtBrk.S.tpPrct.inExtFrac
    //          - semiInExtBrk.E.tpPrct.span * semiInExtBrk.E.tpPrct.inExtFrac
    //      )
    //      gapPrctSum = sum(xxx.tpPrct.val)
    //      gapPrctSum = prctBrksGapRealSum / (
    //          + (scaleExtent[1] - scaleExtent[0]) + valP + valQ
    //          + fullyInExtBrksSum.tpPrct.gapReal
    //          + semiInExtBrk.S.tpPrct.gapReal * semiInExtBrk.S.tpPrct.inExtFrac
    //          + semiInExtBrk.E.tpPrct.gapReal * semiInExtBrk.E.tpPrct.inExtFrac
    //      )
    //  Assume:
    //      xxx.tpPrct.gapReal = xxx.tpPrct.val / gapPrctSum * prctBrksGapRealSum
    //         (NOTE: This is not accurate when semi-in-extent break exist because its
    //         proportion is not linear, but this assumption approximately works.)
    //  Derived as follows:
    //      prctBrksGapRealSum = gapPrctSum * ( (scaleExtent[1] - scaleExtent[0]) + valP + valQ )
    //          / (1
    //              - fullyInExtBrksSum.tpPrct.val
    //              - semiInExtBrk.S.tpPrct.val * semiInExtBrk.S.tpPrct.inExtFrac
    //              - semiInExtBrk.E.tpPrct.val * semiInExtBrk.E.tpPrct.inExtFrac
    //          )
    var gapPrctSum = 0;
    var fullyInExtBrksSum = {
        tpAbs: {
            span: 0,
            val: 0
        },
        tpPrct: {
            span: 0,
            val: 0
        }
    };
    var init = function() {
        return {
            has: false,
            span: NaN,
            inExtFrac: NaN,
            val: NaN
        };
    };
    var semiInExtBrk = {
        S: {
            tpAbs: init(),
            tpPrct: init()
        },
        E: {
            tpAbs: init(),
            tpPrct: init()
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(brkCtx.breaks, function(brk) {
        var gapParsed = brk.gapParsed;
        if (gapParsed.type === 'tpPrct') {
            gapPrctSum += gapParsed.val;
        }
        var clampedBrk = clampBreakByExtent(brk, scaleExtent);
        if (clampedBrk) {
            var vminClamped = clampedBrk.vmin !== brk.vmin;
            var vmaxClamped = clampedBrk.vmax !== brk.vmax;
            var clampedSpan = clampedBrk.vmax - clampedBrk.vmin;
            if (vminClamped && vmaxClamped) {
            // Do nothing, which simply makes the result `gapReal` cover the entire scaleExtent.
            // This transform is not consistent with the other cases but practically works.
            } else if (vminClamped || vmaxClamped) {
                var sOrE = vminClamped ? 'S' : 'E';
                semiInExtBrk[sOrE][gapParsed.type].has = true;
                semiInExtBrk[sOrE][gapParsed.type].span = clampedSpan;
                semiInExtBrk[sOrE][gapParsed.type].inExtFrac = clampedSpan / (brk.vmax - brk.vmin);
                semiInExtBrk[sOrE][gapParsed.type].val = gapParsed.val;
            } else {
                fullyInExtBrksSum[gapParsed.type].span += clampedSpan;
                fullyInExtBrksSum[gapParsed.type].val += gapParsed.val;
            }
        }
    });
    var prctBrksGapRealSum = gapPrctSum * (0 + (scaleExtent[1] - scaleExtent[0]) + (fullyInExtBrksSum.tpAbs.val - fullyInExtBrksSum.tpAbs.span) + (semiInExtBrk.S.tpAbs.has ? (semiInExtBrk.S.tpAbs.val - semiInExtBrk.S.tpAbs.span) * semiInExtBrk.S.tpAbs.inExtFrac : 0) + (semiInExtBrk.E.tpAbs.has ? (semiInExtBrk.E.tpAbs.val - semiInExtBrk.E.tpAbs.span) * semiInExtBrk.E.tpAbs.inExtFrac : 0) - fullyInExtBrksSum.tpPrct.span - (semiInExtBrk.S.tpPrct.has ? semiInExtBrk.S.tpPrct.span * semiInExtBrk.S.tpPrct.inExtFrac : 0) - (semiInExtBrk.E.tpPrct.has ? semiInExtBrk.E.tpPrct.span * semiInExtBrk.E.tpPrct.inExtFrac : 0)) / (1 - fullyInExtBrksSum.tpPrct.val - (semiInExtBrk.S.tpPrct.has ? semiInExtBrk.S.tpPrct.val * semiInExtBrk.S.tpPrct.inExtFrac : 0) - (semiInExtBrk.E.tpPrct.has ? semiInExtBrk.E.tpPrct.val * semiInExtBrk.E.tpPrct.inExtFrac : 0));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(brkCtx.breaks, function(brk) {
        var gapParsed = brk.gapParsed;
        if (gapParsed.type === 'tpPrct') {
            brk.gapReal = gapPrctSum !== 0 ? Math.max(prctBrksGapRealSum, 0) * gapParsed.val / gapPrctSum : 0;
        }
        if (gapParsed.type === 'tpAbs') {
            brk.gapReal = gapParsed.val;
        }
        if (brk.gapReal == null) {
            brk.gapReal = 0;
        }
    });
}
function pruneTicksByBreak(pruneByBreak, ticks, breaks, getValue, interval, scaleExtent) {
    if (pruneByBreak === 'no') {
        return;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(breaks, function(brk) {
        // break.vmin/vmax that out of extent must not impact the visible of
        // normal ticks and labels.
        var clampedBrk = clampBreakByExtent(brk, scaleExtent);
        if (!clampedBrk) {
            return;
        }
        // Remove some normal ticks to avoid zigzag shapes overlapping with split lines
        // and to avoid break labels overlapping with normal tick labels (thouth it can
        // also be avoided by `axisLabel.hideOverlap`).
        // It's OK to O(n^2) since the number of `ticks` are small.
        for(var j = ticks.length - 1; j >= 0; j--){
            var tick = ticks[j];
            var val = getValue(tick);
            // 1. Ensure there is no ticks inside `break.vmin` and `break.vmax`.
            // 2. Use an empirically gap value here. Theoritically `zigzagAmplitude` is
            //  supposed to be involved to provide better precision but it will brings
            //  more complexity. The empirically gap value is conservative because break
            //  labels and normal tick lables are prone to overlapping.
            var gap = interval * 3 / 4;
            if (val > clampedBrk.vmin - gap && val < clampedBrk.vmax + gap && (pruneByBreak !== 'preserve_extent_bound' || val !== scaleExtent[0] && val !== scaleExtent[1])) {
                ticks.splice(j, 1);
            }
        }
    });
}
function addBreaksToTicks(// The input ticks should be in accending order.
ticks, breaks, scaleExtent, // Keep the break ends at the same level to avoid an awkward appearance.
getTimeProps) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(breaks, function(brk) {
        var clampedBrk = clampBreakByExtent(brk, scaleExtent);
        if (!clampedBrk) {
            return;
        }
        // - When neight `break.vmin` nor `break.vmax` is in scale extent,
        //  break label should not be displayed and we do not add them to the result.
        // - When only one of `break.vmin` and `break.vmax` is inside the extent and the
        //  other is outsite, we comply with the extent and display only part of the breaks area,
        //  because the extent might be determined by user settings (such as `axis.min/max`)
        ticks.push({
            value: clampedBrk.vmin,
            "break": {
                type: 'vmin',
                parsedBreak: clampedBrk
            },
            time: getTimeProps ? getTimeProps(clampedBrk) : undefined
        });
        // When gap is 0, start tick overlap with end tick, but we still count both of them. Break
        // area shape can address that overlapping. `axisLabel` need draw both start and end separately,
        // otherwise it brings complexity to the logic of label overlapping resolving (e.g., when label
        // rotated), and introduces inconsistency to users in `axisLabel.formatter` between gap is 0 or not.
        ticks.push({
            value: clampedBrk.vmax,
            "break": {
                type: 'vmax',
                parsedBreak: clampedBrk
            },
            time: getTimeProps ? getTimeProps(clampedBrk) : undefined
        });
    });
    if (breaks.length) {
        ticks.sort(function(a, b) {
            return a.value - b.value;
        });
    }
}
/**
 * If break and extent does not intersect, return null/undefined.
 * If the intersection is only a point at scaleExtent[0] or scaleExtent[1], return null/undefined.
 */ function clampBreakByExtent(brk, scaleExtent) {
    var vmin = Math.max(brk.vmin, scaleExtent[0]);
    var vmax = Math.min(brk.vmax, scaleExtent[1]);
    return vmin < vmax || vmin === vmax && vmin > scaleExtent[0] && vmin < scaleExtent[1] ? {
        vmin: vmin,
        vmax: vmax,
        breakOption: brk.breakOption,
        gapParsed: brk.gapParsed,
        gapReal: brk.gapReal
    } : null;
}
function parseAxisBreakOption(// raw user input breaks, retrieved from axis model.
breakOptionList, parse, opt) {
    var parsedBreaks = [];
    if (!breakOptionList) {
        return {
            breaks: parsedBreaks
        };
    }
    function validatePercent(normalizedPercent, msg) {
        if (normalizedPercent >= 0 && normalizedPercent < 1 - 1e-5) {
            // Avoid division error.
            return true;
        }
        if ("TURBOPACK compile-time truthy", 1) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["error"])(msg + " must be >= 0 and < 1, rather than " + normalizedPercent + " .");
        }
        return false;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(breakOptionList, function(brkOption) {
        if (!brkOption || brkOption.start == null || brkOption.end == null) {
            if ("TURBOPACK compile-time truthy", 1) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["error"])('The input axis breaks start/end should not be empty.');
            }
            return;
        }
        if (brkOption.isExpanded) {
            return;
        }
        var parsedBrk = {
            breakOption: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clone"])(brkOption),
            vmin: parse(brkOption.start),
            vmax: parse(brkOption.end),
            gapParsed: {
                type: 'tpAbs',
                val: 0
            },
            gapReal: null
        };
        if (brkOption.gap != null) {
            var isPrct = false;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(brkOption.gap)) {
                var trimmedGap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trim"])(brkOption.gap);
                if (trimmedGap.match(/%$/)) {
                    var normalizedPercent = parseFloat(trimmedGap) / 100;
                    if (!validatePercent(normalizedPercent, 'Percent gap')) {
                        normalizedPercent = 0;
                    }
                    parsedBrk.gapParsed.type = 'tpPrct';
                    parsedBrk.gapParsed.val = normalizedPercent;
                    isPrct = true;
                }
            }
            if (!isPrct) {
                var absolute = parse(brkOption.gap);
                if (!isFinite(absolute) || absolute < 0) {
                    if ("TURBOPACK compile-time truthy", 1) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["error"])("Axis breaks gap must positive finite rather than (" + brkOption.gap + ").");
                    }
                    absolute = 0;
                }
                parsedBrk.gapParsed.type = 'tpAbs';
                parsedBrk.gapParsed.val = absolute;
            }
        }
        if (parsedBrk.vmin === parsedBrk.vmax) {
            parsedBrk.gapParsed.type = 'tpAbs';
            parsedBrk.gapParsed.val = 0;
        }
        if (opt && opt.noNegative) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])([
                'vmin',
                'vmax'
            ], function(se) {
                if (parsedBrk[se] < 0) {
                    if ("TURBOPACK compile-time truthy", 1) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["error"])("Axis break." + se + " must not be negative.");
                    }
                    parsedBrk[se] = 0;
                }
            });
        }
        // Ascending numerical order is the prerequisite of the calculation in Scale#normalize.
        // User are allowed to input desending vmin/vmax for simplifying the usage.
        if (parsedBrk.vmin > parsedBrk.vmax) {
            var tmp = parsedBrk.vmax;
            parsedBrk.vmax = parsedBrk.vmin;
            parsedBrk.vmin = tmp;
        }
        parsedBreaks.push(parsedBrk);
    });
    // Ascending numerical order is the prerequisite of the calculation in Scale#normalize.
    parsedBreaks.sort(function(item1, item2) {
        return item1.vmin - item2.vmin;
    });
    // Make sure that the intervals in breaks are not overlap.
    var lastEnd = -Infinity;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(parsedBreaks, function(brk, idx) {
        if (lastEnd > brk.vmin) {
            if ("TURBOPACK compile-time truthy", 1) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["error"])('Axis breaks must not overlap.');
            }
            parsedBreaks[idx] = null;
        }
        lastEnd = brk.vmax;
    });
    return {
        breaks: parsedBreaks.filter(function(brk) {
            return !!brk;
        })
    };
}
function identifyAxisBreak(brk, identifier) {
    return serializeAxisBreakIdentifier(identifier) === serializeAxisBreakIdentifier(brk);
}
function serializeAxisBreakIdentifier(identifier) {
    // We use user input start/end to identify break. Considered cases like `start: new Date(xxx)`,
    // Theoretically `Scale#parse` should be used here, but not used currently to reduce dependencies,
    // since simply converting to string happens to be correct.
    return identifier.start + '_\0_' + identifier.end;
}
/**
 * - A break pair represents `[vmin, vmax]`,
 * - Only both vmin and vmax item exist, they are counted as a pair.
 */ function retrieveAxisBreakPairs(itemList, getVisualAxisBreak, returnIdx) {
    var idxPairList = [];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(itemList, function(el, idx) {
        var vBreak = getVisualAxisBreak(el);
        if (vBreak && vBreak.type === 'vmin') {
            idxPairList.push([
                idx
            ]);
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(itemList, function(el, idx) {
        var vBreak = getVisualAxisBreak(el);
        if (vBreak && vBreak.type === 'vmax') {
            var idxPair = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["find"])(idxPairList, // parsedBreak may be changed, can only use breakOption to match them.
            function(pr) {
                return identifyAxisBreak(getVisualAxisBreak(itemList[pr[0]]).parsedBreak.breakOption, vBreak.parsedBreak.breakOption);
            });
            idxPair && idxPair.push(idx);
        }
    });
    var result = [];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(idxPairList, function(idxPair) {
        if (idxPair.length === 2) {
            result.push(returnIdx ? idxPair : [
                itemList[idxPair[0]],
                itemList[idxPair[1]]
            ]);
        }
    });
    return result;
}
function getTicksLogTransformBreak(tick, logBase, logOriginalBreaks, fixRoundingError) {
    var vBreak;
    var brkRoundingCriterion;
    if (tick["break"]) {
        var brk = tick["break"].parsedBreak;
        var originalBreak = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["find"])(logOriginalBreaks, function(brk) {
            return identifyAxisBreak(brk.breakOption, tick["break"].parsedBreak.breakOption);
        });
        var vmin = fixRoundingError(Math.pow(logBase, brk.vmin), originalBreak.vmin);
        var vmax = fixRoundingError(Math.pow(logBase, brk.vmax), originalBreak.vmax);
        var gapParsed = {
            type: brk.gapParsed.type,
            val: brk.gapParsed.type === 'tpAbs' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["round"])(Math.pow(logBase, brk.vmin + brk.gapParsed.val)) - vmin : brk.gapParsed.val
        };
        vBreak = {
            type: tick["break"].type,
            parsedBreak: {
                breakOption: brk.breakOption,
                vmin: vmin,
                vmax: vmax,
                gapParsed: gapParsed,
                gapReal: brk.gapReal
            }
        };
        brkRoundingCriterion = originalBreak[tick["break"].type];
    }
    return {
        brkRoundingCriterion: brkRoundingCriterion,
        vBreak: vBreak
    };
}
function logarithmicParseBreaksFromOption(breakOptionList, logBase, parse) {
    var opt = {
        noNegative: true
    };
    var parsedOriginal = parseAxisBreakOption(breakOptionList, parse, opt);
    var parsedLogged = parseAxisBreakOption(breakOptionList, parse, opt);
    var loggedBase = Math.log(logBase);
    parsedLogged.breaks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["map"])(parsedLogged.breaks, function(brk) {
        var vmin = Math.log(brk.vmin) / loggedBase;
        var vmax = Math.log(brk.vmax) / loggedBase;
        var gapParsed = {
            type: brk.gapParsed.type,
            val: brk.gapParsed.type === 'tpAbs' ? Math.log(brk.vmin + brk.gapParsed.val) / loggedBase - vmin : brk.gapParsed.val
        };
        return {
            vmin: vmin,
            vmax: vmax,
            gapParsed: gapParsed,
            gapReal: brk.gapReal,
            breakOption: brk.breakOption
        };
    });
    return {
        parsedOriginal: parsedOriginal,
        parsedLogged: parsedLogged
    };
}
var BREAK_MIN_MAX_TO_PARAM = {
    vmin: 'start',
    vmax: 'end'
};
function makeAxisLabelFormatterParamBreak(extraParam, vBreak) {
    if (vBreak) {
        extraParam = extraParam || {};
        extraParam["break"] = {
            type: BREAK_MIN_MAX_TO_PARAM[vBreak.type],
            start: vBreak.parsedBreak.vmin,
            end: vBreak.parsedBreak.vmax
        };
    }
    return extraParam;
}
function installScaleBreakHelper() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$break$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerScaleBreakHelperImpl"])({
        createScaleBreakContext: createScaleBreakContext,
        pruneTicksByBreak: pruneTicksByBreak,
        addBreaksToTicks: addBreaksToTicks,
        parseAxisBreakOption: parseAxisBreakOption,
        identifyAxisBreak: identifyAxisBreak,
        serializeAxisBreakIdentifier: serializeAxisBreakIdentifier,
        retrieveAxisBreakPairs: retrieveAxisBreakPairs,
        getTicksLogTransformBreak: getTicksLogTransformBreak,
        logarithmicParseBreaksFromOption: logarithmicParseBreaksFromOption,
        makeAxisLabelFormatterParamBreak: makeAxisLabelFormatterParamBreak
    });
}
}),
];

//# sourceMappingURL=6e80b_echarts_lib_scale_e40f7d55._.js.map