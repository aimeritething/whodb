(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/animation/basicTransition.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    "getAnimationConfig",
    ()=>getAnimationConfig,
    "getOldStyle",
    ()=>getOldStyle,
    "initProps",
    ()=>initProps,
    "isElementRemoved",
    ()=>isElementRemoved,
    "removeElement",
    ()=>removeElement,
    "removeElementWithFadeOut",
    ()=>removeElementWithFadeOut,
    "saveOldStyle",
    ()=>saveOldStyle,
    "transitionStore",
    ()=>transitionStore,
    "updateProps",
    ()=>updateProps
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js [app-client] (ecmascript)");
;
;
var transitionStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeInner"])();
function getAnimationConfig(animationType, animatableModel, dataIndex, // Extra opts can override the option in animatable model.
extraOpts, // TODO It's only for pictorial bar now.
extraDelayParams) {
    var animationPayload;
    // Check if there is global animation configuration from dataZoom/resize can override the config in option.
    // If animation is enabled. Will use this animation config in payload.
    // If animation is disabled. Just ignore it.
    if (animatableModel && animatableModel.ecModel) {
        var updatePayload = animatableModel.ecModel.getUpdatePayload();
        animationPayload = updatePayload && updatePayload.animation;
    }
    var animationEnabled = animatableModel && animatableModel.isAnimationEnabled();
    var isUpdate = animationType === 'update';
    if (animationEnabled) {
        var duration = void 0;
        var easing = void 0;
        var delay = void 0;
        if (extraOpts) {
            duration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["retrieve2"])(extraOpts.duration, 200);
            easing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["retrieve2"])(extraOpts.easing, 'cubicOut');
            delay = 0;
        } else {
            duration = animatableModel.getShallow(isUpdate ? 'animationDurationUpdate' : 'animationDuration');
            easing = animatableModel.getShallow(isUpdate ? 'animationEasingUpdate' : 'animationEasing');
            delay = animatableModel.getShallow(isUpdate ? 'animationDelayUpdate' : 'animationDelay');
        }
        // animation from payload has highest priority.
        if (animationPayload) {
            animationPayload.duration != null && (duration = animationPayload.duration);
            animationPayload.easing != null && (easing = animationPayload.easing);
            animationPayload.delay != null && (delay = animationPayload.delay);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(delay)) {
            delay = delay(dataIndex, extraDelayParams);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(duration)) {
            duration = duration(dataIndex);
        }
        var config = {
            duration: duration || 0,
            delay: delay,
            easing: easing
        };
        return config;
    } else {
        return null;
    }
}
function animateOrSetProps(animationType, el, props, animatableModel, dataIndex, cb, during) {
    var isFrom = false;
    var removeOpt;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(dataIndex)) {
        during = cb;
        cb = dataIndex;
        dataIndex = null;
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"])(dataIndex)) {
        cb = dataIndex.cb;
        during = dataIndex.during;
        isFrom = dataIndex.isFrom;
        removeOpt = dataIndex.removeOpt;
        dataIndex = dataIndex.dataIndex;
    }
    var isRemove = animationType === 'leave';
    if (!isRemove) {
        // Must stop the remove animation.
        el.stopAnimation('leave');
    }
    var animationConfig = getAnimationConfig(animationType, animatableModel, dataIndex, isRemove ? removeOpt || {} : null, animatableModel && animatableModel.getAnimationDelayParams ? animatableModel.getAnimationDelayParams(el, dataIndex) : null);
    if (animationConfig && animationConfig.duration > 0) {
        var duration = animationConfig.duration;
        var animationDelay = animationConfig.delay;
        var animationEasing = animationConfig.easing;
        var animateConfig = {
            duration: duration,
            delay: animationDelay || 0,
            easing: animationEasing,
            done: cb,
            force: !!cb || !!during,
            // Set to final state in update/init animation.
            // So the post processing based on the path shape can be done correctly.
            setToFinal: !isRemove,
            scope: animationType,
            during: during
        };
        isFrom ? el.animateFrom(props, animateConfig) : el.animateTo(props, animateConfig);
    } else {
        el.stopAnimation();
        // If `isFrom`, the props is the "from" props.
        !isFrom && el.attr(props);
        // Call during at least once.
        during && during(1);
        cb && cb();
    }
}
/**
 * Update graphic element properties with or without animation according to the
 * configuration in series.
 *
 * Caution: this method will stop previous animation.
 * So do not use this method to one element twice before
 * animation starts, unless you know what you are doing.
 * @example
 *     graphic.updateProps(el, {
 *         position: [100, 100]
 *     }, seriesModel, dataIndex, function () { console.log('Animation done!'); });
 *     // Or
 *     graphic.updateProps(el, {
 *         position: [100, 100]
 *     }, seriesModel, function () { console.log('Animation done!'); });
 */ function updateProps(el, props, // TODO: TYPE AnimatableModel
animatableModel, dataIndex, cb, during) {
    animateOrSetProps('update', el, props, animatableModel, dataIndex, cb, during);
}
;
function initProps(el, props, animatableModel, dataIndex, cb, during) {
    animateOrSetProps('enter', el, props, animatableModel, dataIndex, cb, during);
}
function isElementRemoved(el) {
    if (!el.__zr) {
        return true;
    }
    for(var i = 0; i < el.animators.length; i++){
        var animator = el.animators[i];
        if (animator.scope === 'leave') {
            return true;
        }
    }
    return false;
}
function removeElement(el, props, animatableModel, dataIndex, cb, during) {
    // Don't do remove animation twice.
    if (isElementRemoved(el)) {
        return;
    }
    animateOrSetProps('leave', el, props, animatableModel, dataIndex, cb, during);
}
function fadeOutDisplayable(el, animatableModel, dataIndex, done) {
    el.removeTextContent();
    el.removeTextGuideLine();
    removeElement(el, {
        style: {
            opacity: 0
        }
    }, animatableModel, dataIndex, done);
}
function removeElementWithFadeOut(el, animatableModel, dataIndex) {
    function doRemove() {
        el.parent && el.parent.remove(el);
    }
    // Hide label and labelLine first
    // TODO Also use fade out animation?
    if (!el.isGroup) {
        fadeOutDisplayable(el, animatableModel, dataIndex, doRemove);
    } else {
        el.traverse(function(disp) {
            if (!disp.isGroup) {
                // Can invoke doRemove multiple times.
                fadeOutDisplayable(disp, animatableModel, dataIndex, doRemove);
            }
        });
    }
}
function saveOldStyle(el) {
    transitionStore(el).oldStyle = el.style;
}
function getOldStyle(el) {
    return transitionStore(el).oldStyle;
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/animation/customGraphicTransition.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    "ELEMENT_ANIMATABLE_PROPS",
    ()=>ELEMENT_ANIMATABLE_PROPS,
    "applyLeaveTransition",
    ()=>applyLeaveTransition,
    "applyUpdateTransition",
    ()=>applyUpdateTransition,
    "isTransitionAll",
    ()=>isTransitionAll,
    "updateLeaveTo",
    ()=>updateLeaveTo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.29.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$animation$2f$Animator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/animation/Animator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Displayable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Displayable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/animation/basicTransition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Path$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Path$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Path.js [app-client] (ecmascript) <export default as Path>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/log.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$Transformable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/Transformable.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
var LEGACY_TRANSFORM_PROPS_MAP = {
    position: [
        'x',
        'y'
    ],
    scale: [
        'scaleX',
        'scaleY'
    ],
    origin: [
        'originX',
        'originY'
    ]
};
var LEGACY_TRANSFORM_PROPS = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keys"])(LEGACY_TRANSFORM_PROPS_MAP);
var TRANSFORM_PROPS_MAP = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reduce"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$Transformable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSFORMABLE_PROPS"], function(obj, key) {
    obj[key] = 1;
    return obj;
}, {});
var transformPropNamesStr = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$Transformable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSFORMABLE_PROPS"].join(', ');
var ELEMENT_ANIMATABLE_PROPS = [
    '',
    'style',
    'shape',
    'extra'
];
;
var transitionInnerStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeInner"])();
;
function getElementAnimationConfig(animationType, el, elOption, parentModel, dataIndex) {
    var animationProp = animationType + "Animation";
    var config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAnimationConfig"])(animationType, parentModel, dataIndex) || {};
    var userDuring = transitionInnerStore(el).userDuring;
    // Only set when duration is > 0 and it's need to be animated.
    if (config.duration > 0) {
        // For simplicity, if during not specified, the previous during will not work any more.
        config.during = userDuring ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bind"])(duringCall, {
            el: el,
            userDuring: userDuring
        }) : null;
        config.setToFinal = true;
        config.scope = animationType;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extend"])(config, elOption[animationProp]);
    return config;
}
function applyUpdateTransition(el, elOption, animatableModel, opts) {
    opts = opts || {};
    var dataIndex = opts.dataIndex, isInit = opts.isInit, clearStyle = opts.clearStyle;
    var hasAnimation = animatableModel.isAnimationEnabled();
    // Save the meta info for further morphing. Like apply on the sub morphing elements.
    var store = transitionInnerStore(el);
    var styleOpt = elOption.style;
    store.userDuring = elOption.during;
    var transFromProps = {};
    var propsToSet = {};
    prepareTransformAllPropsFinal(el, elOption, propsToSet);
    if (el.type === 'compound') {
        /**
     * We cannot directly clone shape for compoundPath,
     * because it makes the path to be an object instead of a Path instance,
     * and thus missing `buildPath` method.
     */ var paths = el.shape.paths;
        var optionPaths = elOption.shape.paths;
        for(var i = 0; i < optionPaths.length; i++){
            var path = optionPaths[i];
            prepareShapeOrExtraAllPropsFinal('shape', path, paths[i]);
        }
    } else {
        prepareShapeOrExtraAllPropsFinal('shape', elOption, propsToSet);
        prepareShapeOrExtraAllPropsFinal('extra', elOption, propsToSet);
    }
    if (!isInit && hasAnimation) {
        prepareTransformTransitionFrom(el, elOption, transFromProps);
        prepareShapeOrExtraTransitionFrom('shape', el, elOption, transFromProps);
        prepareShapeOrExtraTransitionFrom('extra', el, elOption, transFromProps);
        prepareStyleTransitionFrom(el, elOption, styleOpt, transFromProps);
    }
    propsToSet.style = styleOpt;
    applyPropsDirectly(el, propsToSet, clearStyle);
    applyMiscProps(el, elOption);
    if (hasAnimation) {
        if (isInit) {
            var enterFromProps_1 = {};
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(ELEMENT_ANIMATABLE_PROPS, function(propName) {
                var prop = propName ? elOption[propName] : elOption;
                if (prop && prop.enterFrom) {
                    if (propName) {
                        enterFromProps_1[propName] = enterFromProps_1[propName] || {};
                    }
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extend"])(propName ? enterFromProps_1[propName] : enterFromProps_1, prop.enterFrom);
                }
            });
            var config = getElementAnimationConfig('enter', el, elOption, animatableModel, dataIndex);
            if (config.duration > 0) {
                el.animateFrom(enterFromProps_1, config);
            }
        } else {
            applyPropsTransition(el, elOption, dataIndex || 0, animatableModel, transFromProps);
        }
    }
    // Store leave to be used in leave transition.
    updateLeaveTo(el, elOption);
    styleOpt ? el.dirty() : el.markRedraw();
}
function updateLeaveTo(el, elOption) {
    // Try merge to previous set leaveTo
    var leaveToProps = transitionInnerStore(el).leaveToProps;
    for(var i = 0; i < ELEMENT_ANIMATABLE_PROPS.length; i++){
        var propName = ELEMENT_ANIMATABLE_PROPS[i];
        var prop = propName ? elOption[propName] : elOption;
        if (prop && prop.leaveTo) {
            if (!leaveToProps) {
                leaveToProps = transitionInnerStore(el).leaveToProps = {};
            }
            if (propName) {
                leaveToProps[propName] = leaveToProps[propName] || {};
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extend"])(propName ? leaveToProps[propName] : leaveToProps, prop.leaveTo);
        }
    }
}
function applyLeaveTransition(el, elOption, animatableModel, onRemove) {
    if (el) {
        var parent_1 = el.parent;
        var leaveToProps = transitionInnerStore(el).leaveToProps;
        if (leaveToProps) {
            // TODO TODO use leave after leaveAnimation in series is introduced
            // TODO Data index?
            var config = getElementAnimationConfig('update', el, elOption, animatableModel, 0);
            config.done = function() {
                parent_1 && parent_1.remove(el);
                onRemove && onRemove();
            };
            el.animateTo(leaveToProps, config);
        } else {
            parent_1 && parent_1.remove(el);
            onRemove && onRemove();
        }
    }
}
function isTransitionAll(transition) {
    return transition === 'all';
}
function applyPropsDirectly(el, // Can be null/undefined
allPropsFinal, clearStyle) {
    var styleOpt = allPropsFinal.style;
    if (!el.isGroup && styleOpt) {
        if (clearStyle) {
            el.useStyle({});
            // When style object changed, how to trade the existing animation?
            // It is probably complicated and not needed to cover all the cases.
            // But still need consider the case:
            // (1) When using init animation on `style.opacity`, and before the animation
            //     ended users triggers an update by mousewhel. At that time the init
            //     animation should better be continued rather than terminated.
            //     So after `useStyle` called, we should change the animation target manually
            //     to continue the effect of the init animation.
            // (2) PENDING: If the previous animation targeted at a `val1`, and currently we need
            //     to update the value to `val2` and no animation declared, should be terminate
            //     the previous animation or just modify the target of the animation?
            //     Therotically That will happen not only on `style` but also on `shape` and
            //     `transfrom` props. But we haven't handle this case at present yet.
            // (3) PENDING: Is it proper to visit `animators` and `targetName`?
            var animators = el.animators;
            for(var i = 0; i < animators.length; i++){
                var animator = animators[i];
                // targetName is the "topKey".
                if (animator.targetName === 'style') {
                    animator.changeTarget(el.style);
                }
            }
        }
        el.setStyle(styleOpt);
    }
    if (allPropsFinal) {
        // Not set style here.
        allPropsFinal.style = null;
        // Set el to the final state firstly.
        allPropsFinal && el.attr(allPropsFinal);
        allPropsFinal.style = styleOpt;
    }
}
function applyPropsTransition(el, elOption, dataIndex, model, // Can be null/undefined
transFromProps) {
    if (transFromProps) {
        var config = getElementAnimationConfig('update', el, elOption, model, dataIndex);
        if (config.duration > 0) {
            el.animateFrom(transFromProps, config);
        }
    }
}
function applyMiscProps(el, elOption) {
    // Merge by default.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasOwn"])(elOption, 'silent') && (el.silent = elOption.silent);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasOwn"])(elOption, 'ignore') && (el.ignore = elOption.ignore);
    if (el instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Displayable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasOwn"])(elOption, 'invisible') && (el.invisible = elOption.invisible);
    }
    if (el instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Path$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Path$3e$__["Path"]) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasOwn"])(elOption, 'autoBatch') && (el.autoBatch = elOption.autoBatch);
    }
}
// Use it to avoid it be exposed to user.
var tmpDuringScope = {};
var transitionDuringAPI = {
    // Usually other props do not need to be changed in animation during.
    setTransform: function(key, val) {
        if ("TURBOPACK compile-time truthy", 1) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasOwn"])(TRANSFORM_PROPS_MAP, key), 'Only ' + transformPropNamesStr + ' available in `setTransform`.');
        }
        tmpDuringScope.el[key] = val;
        return this;
    },
    getTransform: function(key) {
        if ("TURBOPACK compile-time truthy", 1) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasOwn"])(TRANSFORM_PROPS_MAP, key), 'Only ' + transformPropNamesStr + ' available in `getTransform`.');
        }
        return tmpDuringScope.el[key];
    },
    setShape: function(key, val) {
        if ("TURBOPACK compile-time truthy", 1) {
            assertNotReserved(key);
        }
        var el = tmpDuringScope.el;
        var shape = el.shape || (el.shape = {});
        shape[key] = val;
        el.dirtyShape && el.dirtyShape();
        return this;
    },
    getShape: function(key) {
        if ("TURBOPACK compile-time truthy", 1) {
            assertNotReserved(key);
        }
        var shape = tmpDuringScope.el.shape;
        if (shape) {
            return shape[key];
        }
    },
    setStyle: function(key, val) {
        if ("TURBOPACK compile-time truthy", 1) {
            assertNotReserved(key);
        }
        var el = tmpDuringScope.el;
        var style = el.style;
        if (style) {
            if ("TURBOPACK compile-time truthy", 1) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eqNaN"])(val)) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["warn"])('style.' + key + ' must not be assigned with NaN.');
                }
            }
            style[key] = val;
            el.dirtyStyle && el.dirtyStyle();
        }
        return this;
    },
    getStyle: function(key) {
        if ("TURBOPACK compile-time truthy", 1) {
            assertNotReserved(key);
        }
        var style = tmpDuringScope.el.style;
        if (style) {
            return style[key];
        }
    },
    setExtra: function(key, val) {
        if ("TURBOPACK compile-time truthy", 1) {
            assertNotReserved(key);
        }
        var extra = tmpDuringScope.el.extra || (tmpDuringScope.el.extra = {});
        extra[key] = val;
        return this;
    },
    getExtra: function(key) {
        if ("TURBOPACK compile-time truthy", 1) {
            assertNotReserved(key);
        }
        var extra = tmpDuringScope.el.extra;
        if (extra) {
            return extra[key];
        }
    }
};
function assertNotReserved(key) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (key === 'transition' || key === 'enterFrom' || key === 'leaveTo') {
            throw new Error('key must not be "' + key + '"');
        }
    }
}
function duringCall() {
    // Do not provide "percent" until some requirements come.
    // Because consider thies case:
    // enterFrom: {x: 100, y: 30}, transition: 'x'.
    // And enter duration is different from update duration.
    // Thus it might be confused about the meaning of "percent" in during callback.
    var scope = this;
    var el = scope.el;
    if (!el) {
        return;
    }
    // If el is remove from zr by reason like legend, during still need to called,
    // because el will be added back to zr and the prop value should not be incorrect.
    var latestUserDuring = transitionInnerStore(el).userDuring;
    var scopeUserDuring = scope.userDuring;
    // Ensured a during is only called once in each animation frame.
    // If a during is called multiple times in one frame, maybe some users' calculation logic
    // might be wrong (not sure whether this usage exists).
    // The case of a during might be called twice can be: by default there is a animator for
    // 'x', 'y' when init. Before the init animation finished, call `setOption` to start
    // another animators for 'style'/'shape'/'extra'.
    if (latestUserDuring !== scopeUserDuring) {
        // release
        scope.el = scope.userDuring = null;
        return;
    }
    tmpDuringScope.el = el;
    // Give no `this` to user in "during" calling.
    scopeUserDuring(transitionDuringAPI);
// FIXME: if in future meet the case that some prop will be both modified in `during` and `state`,
// consider the issue that the prop might be incorrect when return to "normal" state.
}
function prepareShapeOrExtraTransitionFrom(mainAttr, fromEl, elOption, transFromProps) {
    var attrOpt = elOption[mainAttr];
    if (!attrOpt) {
        return;
    }
    var elPropsInAttr = fromEl[mainAttr];
    var transFromPropsInAttr;
    if (elPropsInAttr) {
        var transition = elOption.transition;
        var attrTransition = attrOpt.transition;
        if (attrTransition) {
            !transFromPropsInAttr && (transFromPropsInAttr = transFromProps[mainAttr] = {});
            if (isTransitionAll(attrTransition)) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extend"])(transFromPropsInAttr, elPropsInAttr);
            } else {
                var transitionKeys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeToArray"])(attrTransition);
                for(var i = 0; i < transitionKeys.length; i++){
                    var key = transitionKeys[i];
                    var elVal = elPropsInAttr[key];
                    transFromPropsInAttr[key] = elVal;
                }
            }
        } else if (isTransitionAll(transition) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["indexOf"])(transition, mainAttr) >= 0) {
            !transFromPropsInAttr && (transFromPropsInAttr = transFromProps[mainAttr] = {});
            var elPropsInAttrKeys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keys"])(elPropsInAttr);
            for(var i = 0; i < elPropsInAttrKeys.length; i++){
                var key = elPropsInAttrKeys[i];
                var elVal = elPropsInAttr[key];
                if (isNonStyleTransitionEnabled(attrOpt[key], elVal)) {
                    transFromPropsInAttr[key] = elVal;
                }
            }
        }
    }
}
function prepareShapeOrExtraAllPropsFinal(mainAttr, elOption, allProps) {
    var attrOpt = elOption[mainAttr];
    if (!attrOpt) {
        return;
    }
    var allPropsInAttr = allProps[mainAttr] = {};
    var keysInAttr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keys"])(attrOpt);
    for(var i = 0; i < keysInAttr.length; i++){
        var key = keysInAttr[i];
        // To avoid share one object with different element, and
        // to avoid user modify the object inexpectedly, have to clone.
        allPropsInAttr[key] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$animation$2f$Animator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneValue"])(attrOpt[key]);
    }
}
function prepareTransformTransitionFrom(el, elOption, transFromProps) {
    var transition = elOption.transition;
    var transitionKeys = isTransitionAll(transition) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$Transformable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSFORMABLE_PROPS"] : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeToArray"])(transition || []);
    for(var i = 0; i < transitionKeys.length; i++){
        var key = transitionKeys[i];
        if (key === 'style' || key === 'shape' || key === 'extra') {
            continue;
        }
        var elVal = el[key];
        if ("TURBOPACK compile-time truthy", 1) {
            checkTransformPropRefer(key, 'el.transition');
        }
        // Do not clone, animator will perform that clone.
        transFromProps[key] = elVal;
    }
}
function prepareTransformAllPropsFinal(el, elOption, allProps) {
    for(var i = 0; i < LEGACY_TRANSFORM_PROPS.length; i++){
        var legacyName = LEGACY_TRANSFORM_PROPS[i];
        var xyName = LEGACY_TRANSFORM_PROPS_MAP[legacyName];
        var legacyArr = elOption[legacyName];
        if (legacyArr) {
            allProps[xyName[0]] = legacyArr[0];
            allProps[xyName[1]] = legacyArr[1];
        }
    }
    for(var i = 0; i < __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$Transformable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSFORMABLE_PROPS"].length; i++){
        var key = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$Transformable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSFORMABLE_PROPS"][i];
        if (elOption[key] != null) {
            allProps[key] = elOption[key];
        }
    }
}
function prepareStyleTransitionFrom(fromEl, elOption, styleOpt, transFromProps) {
    if (!styleOpt) {
        return;
    }
    var fromElStyle = fromEl.style;
    var transFromStyleProps;
    if (fromElStyle) {
        var styleTransition = styleOpt.transition;
        var elTransition = elOption.transition;
        if (styleTransition && !isTransitionAll(styleTransition)) {
            var transitionKeys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeToArray"])(styleTransition);
            !transFromStyleProps && (transFromStyleProps = transFromProps.style = {});
            for(var i = 0; i < transitionKeys.length; i++){
                var key = transitionKeys[i];
                var elVal = fromElStyle[key];
                // Do not clone, see `checkNonStyleTansitionRefer`.
                transFromStyleProps[key] = elVal;
            }
        } else if (fromEl.getAnimationStyleProps && (isTransitionAll(elTransition) || isTransitionAll(styleTransition) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["indexOf"])(elTransition, 'style') >= 0)) {
            var animationProps = fromEl.getAnimationStyleProps();
            var animationStyleProps = animationProps ? animationProps.style : null;
            if (animationStyleProps) {
                !transFromStyleProps && (transFromStyleProps = transFromProps.style = {});
                var styleKeys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keys"])(styleOpt);
                for(var i = 0; i < styleKeys.length; i++){
                    var key = styleKeys[i];
                    if (animationStyleProps[key]) {
                        var elVal = fromElStyle[key];
                        transFromStyleProps[key] = elVal;
                    }
                }
            }
        }
    }
}
function isNonStyleTransitionEnabled(optVal, elVal) {
    // The same as `checkNonStyleTansitionRefer`.
    return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArrayLike"])(optVal) ? optVal != null && isFinite(optVal) : optVal !== elVal;
}
var checkTransformPropRefer;
if ("TURBOPACK compile-time truthy", 1) {
    checkTransformPropRefer = function(key, usedIn) {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasOwn"])(TRANSFORM_PROPS_MAP, key)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["warn"])('Prop `' + key + '` is not a permitted in `' + usedIn + '`. ' + 'Only `' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keys"])(TRANSFORM_PROPS_MAP).join('`, `') + '` are permitted.');
        }
    };
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/animation/customGraphicKeyframeAnimation.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    "applyKeyframeAnimation",
    ()=>applyKeyframeAnimation,
    "stopPreviousKeyframeAnimationAndRestore",
    ()=>stopPreviousKeyframeAnimationAndRestore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.29.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$customGraphicTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/animation/customGraphicTransition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/animation/basicTransition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/log.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js [app-client] (ecmascript)");
;
;
;
;
;
var getStateToRestore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeInner"])();
var KEYFRAME_EXCLUDE_KEYS = [
    'percent',
    'easing',
    'shape',
    'style',
    'extra'
];
function stopPreviousKeyframeAnimationAndRestore(el) {
    // Stop previous keyframe animation.
    el.stopAnimation('keyframe');
    // Restore
    el.attr(getStateToRestore(el));
}
function applyKeyframeAnimation(el, animationOpts, animatableModel) {
    if (!animatableModel.isAnimationEnabled() || !animationOpts) {
        return;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"])(animationOpts)) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(animationOpts, function(singleAnimationOpts) {
            applyKeyframeAnimation(el, singleAnimationOpts, animatableModel);
        });
        return;
    }
    var keyframes = animationOpts.keyframes;
    var duration = animationOpts.duration;
    if (animatableModel && duration == null) {
        // Default to use duration of config.
        // NOTE: animation config from payload will be ignored because they are mainly for transitions.
        var config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAnimationConfig"])('enter', animatableModel, 0);
        duration = config && config.duration;
    }
    if (!keyframes || !duration) {
        return;
    }
    var stateToRestore = getStateToRestore(el);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$customGraphicTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ELEMENT_ANIMATABLE_PROPS"], function(targetPropName) {
        if (targetPropName && !el[targetPropName]) {
            return;
        }
        var animator;
        var endFrameIsSet = false;
        // Sort keyframes by percent.
        keyframes.sort(function(a, b) {
            return a.percent - b.percent;
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(keyframes, function(kf) {
            // Stop current animation.
            var animators = el.animators;
            var kfValues = targetPropName ? kf[targetPropName] : kf;
            if ("TURBOPACK compile-time truthy", 1) {
                if (kf.percent >= 1) {
                    endFrameIsSet = true;
                }
            }
            if (!kfValues) {
                return;
            }
            var propKeys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keys"])(kfValues);
            if (!targetPropName) {
                // PENDING performance?
                propKeys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filter"])(propKeys, function(key) {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["indexOf"])(KEYFRAME_EXCLUDE_KEYS, key) < 0;
                });
            }
            if (!propKeys.length) {
                return;
            }
            if (!animator) {
                animator = el.animate(targetPropName, animationOpts.loop, true);
                animator.scope = 'keyframe';
            }
            for(var i = 0; i < animators.length; i++){
                // Stop all other animation that is not keyframe.
                if (animators[i] !== animator && animators[i].targetName === animator.targetName) {
                    animators[i].stopTracks(propKeys);
                }
            }
            targetPropName && (stateToRestore[targetPropName] = stateToRestore[targetPropName] || {});
            var savedTarget = targetPropName ? stateToRestore[targetPropName] : stateToRestore;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(propKeys, function(key) {
                // Save original value.
                savedTarget[key] = ((targetPropName ? el[targetPropName] : el) || {})[key];
            });
            animator.whenWithKeys(duration * kf.percent, kfValues, propKeys, kf.easing);
        });
        if (!animator) {
            return;
        }
        if ("TURBOPACK compile-time truthy", 1) {
            if (!endFrameIsSet) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["warn"])('End frame with percent: 1 is missing in the keyframeAnimation.', true);
            }
        }
        animator.delay(animationOpts.delay || 0).duration(duration).start(animationOpts.easing);
    });
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/animation/morphTransitionHelper.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    "applyMorphAnimation",
    ()=>applyMorphAnimation,
    "getPathList",
    ()=>getPathList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$tool$2f$morphPath$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/tool/morphPath.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Path$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Path$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Path.js [app-client] (ecmascript) <export default as Path>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/animation/basicTransition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$tool$2f$path$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/tool/path.js [app-client] (ecmascript)");
;
;
;
;
;
function isMultiple(elements) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"])(elements[0]);
}
function prepareMorphBatches(one, many) {
    var batches = [];
    var batchCount = one.length;
    for(var i = 0; i < batchCount; i++){
        batches.push({
            one: one[i],
            many: []
        });
    }
    for(var i = 0; i < many.length; i++){
        var len = many[i].length;
        var k = void 0;
        for(k = 0; k < len; k++){
            batches[k % batchCount].many.push(many[i][k]);
        }
    }
    var off = 0;
    // If one has more paths than each one of many. average them.
    for(var i = batchCount - 1; i >= 0; i--){
        if (!batches[i].many.length) {
            var moveFrom = batches[off].many;
            if (moveFrom.length <= 1) {
                // Not enough
                // Start from the first one.
                if (off) {
                    off = 0;
                } else {
                    return batches;
                }
            }
            var len = moveFrom.length;
            var mid = Math.ceil(len / 2);
            batches[i].many = moveFrom.slice(mid, len);
            batches[off].many = moveFrom.slice(0, mid);
            off++;
        }
    }
    return batches;
}
var pathDividers = {
    clone: function(params) {
        var ret = [];
        // Fitting the alpha
        var approxOpacity = 1 - Math.pow(1 - params.path.style.opacity, 1 / params.count);
        for(var i = 0; i < params.count; i++){
            var cloned = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$tool$2f$path$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clonePath"])(params.path);
            cloned.setStyle('opacity', approxOpacity);
            ret.push(cloned);
        }
        return ret;
    },
    // Use the default divider
    split: null
};
function applyMorphAnimation(from, to, divideShape, seriesModel, dataIndex, animateOtherProps) {
    if (!from.length || !to.length) {
        return;
    }
    var updateAnimationCfg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAnimationConfig"])('update', seriesModel, dataIndex);
    if (!(updateAnimationCfg && updateAnimationCfg.duration > 0)) {
        return;
    }
    var animationDelay = seriesModel.getModel('universalTransition').get('delay');
    var animationCfg = Object.assign({
        // Need to setToFinal so the further calculation based on the style can be correct.
        // Like emphasis color.
        setToFinal: true
    }, updateAnimationCfg);
    var many;
    var one;
    if (isMultiple(from)) {
        // manyToOne
        many = from;
        one = to;
    }
    if (isMultiple(to)) {
        // oneToMany
        many = to;
        one = from;
    }
    function morphOneBatch(batch, fromIsMany, animateIndex, animateCount, forceManyOne) {
        var batchMany = batch.many;
        var batchOne = batch.one;
        if (batchMany.length === 1 && !forceManyOne) {
            // Is one to one
            var batchFrom = fromIsMany ? batchMany[0] : batchOne;
            var batchTo = fromIsMany ? batchOne : batchMany[0];
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$tool$2f$morphPath$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isCombineMorphing"])(batchFrom)) {
                // Keep doing combine animation.
                morphOneBatch({
                    many: [
                        batchFrom
                    ],
                    one: batchTo
                }, true, animateIndex, animateCount, true);
            } else {
                var individualAnimationCfg = animationDelay ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaults"])({
                    delay: animationDelay(animateIndex, animateCount)
                }, animationCfg) : animationCfg;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$tool$2f$morphPath$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["morphPath"])(batchFrom, batchTo, individualAnimationCfg);
                animateOtherProps(batchFrom, batchTo, batchFrom, batchTo, individualAnimationCfg);
            }
        } else {
            var separateAnimationCfg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaults"])({
                dividePath: pathDividers[divideShape],
                individualDelay: animationDelay && function(idx, count, fromPath, toPath) {
                    return animationDelay(idx + animateIndex, animateCount);
                }
            }, animationCfg);
            var _a = fromIsMany ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$tool$2f$morphPath$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["combineMorph"])(batchMany, batchOne, separateAnimationCfg) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$tool$2f$morphPath$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["separateMorph"])(batchOne, batchMany, separateAnimationCfg), fromIndividuals = _a.fromIndividuals, toIndividuals = _a.toIndividuals;
            var count = fromIndividuals.length;
            for(var k = 0; k < count; k++){
                var individualAnimationCfg = animationDelay ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaults"])({
                    delay: animationDelay(k, count)
                }, animationCfg) : animationCfg;
                animateOtherProps(fromIndividuals[k], toIndividuals[k], fromIsMany ? batchMany[k] : batch.one, fromIsMany ? batch.one : batchMany[k], individualAnimationCfg);
            }
        }
    }
    var fromIsMany = many ? many === from : from.length > to.length;
    var morphBatches = many ? prepareMorphBatches(one, many) : prepareMorphBatches(fromIsMany ? to : from, [
        fromIsMany ? from : to
    ]);
    var animateCount = 0;
    for(var i = 0; i < morphBatches.length; i++){
        animateCount += morphBatches[i].many.length;
    }
    var animateIndex = 0;
    for(var i = 0; i < morphBatches.length; i++){
        morphOneBatch(morphBatches[i], fromIsMany, animateIndex, animateCount);
        animateIndex += morphBatches[i].many.length;
    }
}
function getPathList(elements) {
    if (!elements) {
        return [];
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"])(elements)) {
        var pathList_1 = [];
        for(var i = 0; i < elements.length; i++){
            pathList_1.push(getPathList(elements[i]));
        }
        return pathList_1;
    }
    var pathList = [];
    elements.traverse(function(el) {
        if (el instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Path$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Path$3e$__["Path"] && !el.disableMorphing && !el.invisible && !el.ignore) {
            pathList.push(el);
        }
    });
    return pathList;
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/animation/universalTransition.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
*/ // Universal transitions that can animate between any shapes(series) and any properties in any amounts.
__turbopack_context__.s([
    "installUniversalTransition",
    ()=>installUniversalTransition
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.29.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Series$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/Series.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$morphTransitionHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/animation/morphTransitionHelper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Path$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Path.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/animation/basicTransition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$DataDiffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/data/DataDiffer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/log.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Displayable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Displayable.js [app-client] (ecmascript)");
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
var DATA_COUNT_THRESHOLD = 1e4;
var TRANSITION_NONE = 0;
var TRANSITION_P2C = 1;
var TRANSITION_C2P = 2;
;
var getUniversalTransitionGlobalStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeInner"])();
function getDimension(data, visualDimension) {
    var dimensions = data.dimensions;
    for(var i = 0; i < dimensions.length; i++){
        var dimInfo = data.getDimensionInfo(dimensions[i]);
        if (dimInfo && dimInfo.otherDims[visualDimension] === 0) {
            return dimensions[i];
        }
    }
}
// get value by dimension. (only get value of itemGroupId or childGroupId, so convert it to string)
function getValueByDimension(data, dataIndex, dimension) {
    var dimInfo = data.getDimensionInfo(dimension);
    var dimOrdinalMeta = dimInfo && dimInfo.ordinalMeta;
    if (dimInfo) {
        var value = data.get(dimInfo.name, dataIndex);
        if (dimOrdinalMeta) {
            return dimOrdinalMeta.categories[value] || value + '';
        }
        return value + '';
    }
}
function getGroupId(data, dataIndex, dataGroupId, isChild) {
    // try to get groupId from encode
    var visualDimension = isChild ? 'itemChildGroupId' : 'itemGroupId';
    var groupIdDim = getDimension(data, visualDimension);
    if (groupIdDim) {
        var groupId = getValueByDimension(data, dataIndex, groupIdDim);
        return groupId;
    }
    // try to get groupId from raw data item
    var rawDataItem = data.getRawDataItem(dataIndex);
    var property = isChild ? 'childGroupId' : 'groupId';
    if (rawDataItem && rawDataItem[property]) {
        return rawDataItem[property] + '';
    }
    // fallback
    if (isChild) {
        return;
    }
    // try to use series.dataGroupId as groupId, otherwise use dataItem's id as groupId
    return dataGroupId || data.getId(dataIndex);
}
// flatten all data items from different serieses into one arrary
function flattenDataDiffItems(list) {
    var items = [];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(list, function(seriesInfo) {
        var data = seriesInfo.data;
        var dataGroupId = seriesInfo.dataGroupId;
        if (data.count() > DATA_COUNT_THRESHOLD) {
            if ("TURBOPACK compile-time truthy", 1) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["warn"])('Universal transition is disabled on large data > 10k.');
            }
            return;
        }
        var indices = data.getIndices();
        for(var dataIndex = 0; dataIndex < indices.length; dataIndex++){
            items.push({
                data: data,
                groupId: getGroupId(data, dataIndex, dataGroupId, false),
                childGroupId: getGroupId(data, dataIndex, dataGroupId, true),
                divide: seriesInfo.divide,
                dataIndex: dataIndex
            });
        }
    });
    return items;
}
function fadeInElement(newEl, newSeries, newIndex) {
    newEl.traverse(function(el) {
        if (el instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Path$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) {
            // TODO use fade in animation for target element.
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initProps"])(el, {
                style: {
                    opacity: 0
                }
            }, newSeries, {
                dataIndex: newIndex,
                isFrom: true
            });
        }
    });
}
function removeEl(el) {
    if (el.parent) {
        // Bake parent transform to element.
        // So it can still have proper transform to transition after it's removed.
        var computedTransform = el.getComputedTransform();
        el.setLocalTransform(computedTransform);
        el.parent.remove(el);
    }
}
function stopAnimation(el) {
    el.stopAnimation();
    if (el.isGroup) {
        el.traverse(function(child) {
            child.stopAnimation();
        });
    }
}
function animateElementStyles(el, dataIndex, seriesModel) {
    var animationConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAnimationConfig"])('update', seriesModel, dataIndex);
    animationConfig && el.traverse(function(child) {
        if (child instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Displayable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) {
            var oldStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOldStyle"])(child);
            if (oldStyle) {
                child.animateFrom({
                    style: oldStyle
                }, animationConfig);
            }
        }
    });
}
function isAllIdSame(oldDiffItems, newDiffItems) {
    var len = oldDiffItems.length;
    if (len !== newDiffItems.length) {
        return false;
    }
    for(var i = 0; i < len; i++){
        var oldItem = oldDiffItems[i];
        var newItem = newDiffItems[i];
        if (oldItem.data.getId(oldItem.dataIndex) !== newItem.data.getId(newItem.dataIndex)) {
            return false;
        }
    }
    return true;
}
function transitionBetween(oldList, newList, api) {
    var oldDiffItems = flattenDataDiffItems(oldList);
    var newDiffItems = flattenDataDiffItems(newList);
    function updateMorphingPathProps(from, to, rawFrom, rawTo, animationCfg) {
        if (rawFrom || from) {
            to.animateFrom({
                style: rawFrom && rawFrom !== from ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extend"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extend"])({}, rawFrom.style), from.style) : from.style
            }, animationCfg);
        }
    }
    var hasMorphAnimation = false;
    /**
   * With groupId and childGroupId, we can build parent-child relationships between dataItems.
   * However, we should mind the parent-child "direction" between old and new options.
   *
   * For example, suppose we have two dataItems from two series.data:
   *
   * dataA: [                          dataB: [
   *   {                                 {
   *     value: 5,                         value: 3,
   *     groupId: 'creatures',             groupId: 'animals',
   *     childGroupId: 'animals'           childGroupId: 'dogs'
   *   },                                },
   *   ...                               ...
   * ]                                 ]
   *
   * where dataA is belong to optionA and dataB is belong to optionB.
   *
   * When we `setOption(optionB)` from optionA, we choose childGroupId of dataItemA and groupId of
   * dataItemB as keys so the two keys are matched (both are 'animals'), then universalTransition
   * will work. This derection is "parent -> child".
   *
   * If we `setOption(optionA)` from optionB, we also choose groupId of dataItemB and childGroupId
   * of dataItemA as keys and universalTransition will work. This derection is "child -> parent".
   *
   * If there is no childGroupId specified, which means no multiLevelDrillDown/Up is needed and no
   * parent-child relationship exists. This direction is "none".
   *
   * So we need to know whether to use groupId or childGroupId as the key when we call the keyGetter
   * functions. Thus, we need to decide the direction first.
   *
   * The rule is:
   *
   * if (all childGroupIds in oldDiffItems and all groupIds in newDiffItems have common value) {
   *   direction = 'parent -> child';
   * } else if (all groupIds in oldDiffItems and all childGroupIds in newDiffItems have common value) {
   *   direction = 'child -> parent';
   * } else {
   *   direction = 'none';
   * }
   */ var direction = TRANSITION_NONE;
    // find all groupIds and childGroupIds from oldDiffItems
    var oldGroupIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createHashMap"])();
    var oldChildGroupIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createHashMap"])();
    oldDiffItems.forEach(function(item) {
        item.groupId && oldGroupIds.set(item.groupId, true);
        item.childGroupId && oldChildGroupIds.set(item.childGroupId, true);
    });
    // traverse newDiffItems and decide the direction according to the rule
    for(var i = 0; i < newDiffItems.length; i++){
        var newGroupId = newDiffItems[i].groupId;
        if (oldChildGroupIds.get(newGroupId)) {
            direction = TRANSITION_P2C;
            break;
        }
        var newChildGroupId = newDiffItems[i].childGroupId;
        if (newChildGroupId && oldGroupIds.get(newChildGroupId)) {
            direction = TRANSITION_C2P;
            break;
        }
    }
    function createKeyGetter(isOld, onlyGetId) {
        return function(diffItem) {
            var data = diffItem.data;
            var dataIndex = diffItem.dataIndex;
            // TODO if specified dim
            if (onlyGetId) {
                return data.getId(dataIndex);
            }
            if (isOld) {
                return direction === TRANSITION_P2C ? diffItem.childGroupId : diffItem.groupId;
            } else {
                return direction === TRANSITION_C2P ? diffItem.childGroupId : diffItem.groupId;
            }
        };
    }
    // Use id if it's very likely to be an one to one animation
    // It's more robust than groupId
    // TODO Check if key dimension is specified.
    var useId = isAllIdSame(oldDiffItems, newDiffItems);
    var isElementStillInChart = {};
    if (!useId) {
        // We may have different diff strategy with basicTransition if we use other dimension as key.
        // If so, we can't simply check if oldEl is same with newEl. We need a map to check if oldEl is still being used in the new chart.
        // We can't use the elements that already being morphed. Let it keep it's original basic transition.
        for(var i = 0; i < newDiffItems.length; i++){
            var newItem = newDiffItems[i];
            var el = newItem.data.getItemGraphicEl(newItem.dataIndex);
            if (el) {
                isElementStillInChart[el.id] = true;
            }
        }
    }
    function updateOneToOne(newIndex, oldIndex) {
        var oldItem = oldDiffItems[oldIndex];
        var newItem = newDiffItems[newIndex];
        var newSeries = newItem.data.hostModel;
        // TODO Mark this elements is morphed and don't morph them anymore
        var oldEl = oldItem.data.getItemGraphicEl(oldItem.dataIndex);
        var newEl = newItem.data.getItemGraphicEl(newItem.dataIndex);
        // Can't handle same elements.
        if (oldEl === newEl) {
            newEl && animateElementStyles(newEl, newItem.dataIndex, newSeries);
            return;
        }
        if (// We can't use the elements that already being morphed
        oldEl && isElementStillInChart[oldEl.id]) {
            return;
        }
        if (newEl) {
            // TODO: If keep animating the group in case
            // some of the elements don't want to be morphed.
            // TODO Label?
            stopAnimation(newEl);
            if (oldEl) {
                stopAnimation(oldEl);
                // If old element is doing leaving animation. stop it and remove it immediately.
                removeEl(oldEl);
                hasMorphAnimation = true;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$morphTransitionHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyMorphAnimation"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$morphTransitionHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPathList"])(oldEl), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$morphTransitionHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPathList"])(newEl), newItem.divide, newSeries, newIndex, updateMorphingPathProps);
            } else {
                fadeInElement(newEl, newSeries, newIndex);
            }
        }
    // else keep oldEl leaving animation.
    }
    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$DataDiffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](oldDiffItems, newDiffItems, createKeyGetter(true, useId), createKeyGetter(false, useId), null, 'multiple').update(updateOneToOne).updateManyToOne(function(newIndex, oldIndices) {
        var newItem = newDiffItems[newIndex];
        var newData = newItem.data;
        var newSeries = newData.hostModel;
        var newEl = newData.getItemGraphicEl(newItem.dataIndex);
        var oldElsList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filter"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"])(oldIndices, function(idx) {
            return oldDiffItems[idx].data.getItemGraphicEl(oldDiffItems[idx].dataIndex);
        }), function(oldEl) {
            return oldEl && oldEl !== newEl && !isElementStillInChart[oldEl.id];
        });
        if (newEl) {
            stopAnimation(newEl);
            if (oldElsList.length) {
                // If old element is doing leaving animation. stop it and remove it immediately.
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(oldElsList, function(oldEl) {
                    stopAnimation(oldEl);
                    removeEl(oldEl);
                });
                hasMorphAnimation = true;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$morphTransitionHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyMorphAnimation"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$morphTransitionHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPathList"])(oldElsList), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$morphTransitionHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPathList"])(newEl), newItem.divide, newSeries, newIndex, updateMorphingPathProps);
            } else {
                fadeInElement(newEl, newSeries, newItem.dataIndex);
            }
        }
    // else keep oldEl leaving animation.
    }).updateOneToMany(function(newIndices, oldIndex) {
        var oldItem = oldDiffItems[oldIndex];
        var oldEl = oldItem.data.getItemGraphicEl(oldItem.dataIndex);
        // We can't use the elements that already being morphed
        if (oldEl && isElementStillInChart[oldEl.id]) {
            return;
        }
        var newElsList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filter"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"])(newIndices, function(idx) {
            return newDiffItems[idx].data.getItemGraphicEl(newDiffItems[idx].dataIndex);
        }), function(el) {
            return el && el !== oldEl;
        });
        var newSeris = newDiffItems[newIndices[0]].data.hostModel;
        if (newElsList.length) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(newElsList, function(newEl) {
                return stopAnimation(newEl);
            });
            if (oldEl) {
                stopAnimation(oldEl);
                // If old element is doing leaving animation. stop it and remove it immediately.
                removeEl(oldEl);
                hasMorphAnimation = true;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$morphTransitionHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyMorphAnimation"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$morphTransitionHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPathList"])(oldEl), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$morphTransitionHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPathList"])(newElsList), oldItem.divide, // Use divide on old.
                newSeris, newIndices[0], updateMorphingPathProps);
            } else {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(newElsList, function(newEl) {
                    return fadeInElement(newEl, newSeris, newIndices[0]);
                });
            }
        }
    // else keep oldEl leaving animation.
    }).updateManyToMany(function(newIndices, oldIndices) {
        // If two data are same and both have groupId.
        // Normally they should be diff by id.
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$DataDiffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](oldIndices, newIndices, function(rawIdx) {
            return oldDiffItems[rawIdx].data.getId(oldDiffItems[rawIdx].dataIndex);
        }, function(rawIdx) {
            return newDiffItems[rawIdx].data.getId(newDiffItems[rawIdx].dataIndex);
        }).update(function(newIndex, oldIndex) {
            // Use the original index
            updateOneToOne(newIndices[newIndex], oldIndices[oldIndex]);
        }).execute();
    }).execute();
    if (hasMorphAnimation) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(newList, function(_a) {
            var data = _a.data;
            var seriesModel = data.hostModel;
            var view = seriesModel && api.getViewOfSeriesModel(seriesModel);
            var animationCfg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAnimationConfig"])('update', seriesModel, 0); // use 0 index.
            if (view && seriesModel.isAnimationEnabled() && animationCfg && animationCfg.duration > 0) {
                view.group.traverse(function(el) {
                    if (el instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Path$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] && !el.animators.length) {
                        // We can't accept there still exists element that has no animation
                        // if universalTransition is enabled
                        el.animateFrom({
                            style: {
                                opacity: 0
                            }
                        }, animationCfg);
                    }
                });
            }
        });
    }
}
function getSeriesTransitionKey(series) {
    var seriesKey = series.getModel('universalTransition').get('seriesKey');
    if (!seriesKey) {
        // Use series id by default.
        return series.id;
    }
    return seriesKey;
}
function convertArraySeriesKeyToString(seriesKey) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"])(seriesKey)) {
        // Order independent.
        return seriesKey.sort().join(',');
    }
    return seriesKey;
}
function getDivideShapeFromData(data) {
    if (data.hostModel) {
        return data.hostModel.getModel('universalTransition').get('divideShape');
    }
}
function findTransitionSeriesBatches(globalStore, params) {
    var updateBatches = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createHashMap"])();
    var oldDataMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createHashMap"])();
    // Map that only store key in array seriesKey.
    // Which is used to query the old data when transition from one to multiple series.
    var oldDataMapForSplit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createHashMap"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(globalStore.oldSeries, function(series, idx) {
        var oldDataGroupId = globalStore.oldDataGroupIds[idx];
        var oldData = globalStore.oldData[idx];
        var transitionKey = getSeriesTransitionKey(series);
        var transitionKeyStr = convertArraySeriesKeyToString(transitionKey);
        oldDataMap.set(transitionKeyStr, {
            dataGroupId: oldDataGroupId,
            data: oldData
        });
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"])(transitionKey)) {
            // Same key can't in different array seriesKey.
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(transitionKey, function(key) {
                oldDataMapForSplit.set(key, {
                    key: transitionKeyStr,
                    dataGroupId: oldDataGroupId,
                    data: oldData
                });
            });
        }
    });
    function checkTransitionSeriesKeyDuplicated(transitionKeyStr) {
        if (updateBatches.get(transitionKeyStr)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["warn"])("Duplicated seriesKey in universalTransition " + transitionKeyStr);
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(params.updatedSeries, function(series) {
        if (series.isUniversalTransitionEnabled() && series.isAnimationEnabled()) {
            var newDataGroupId = series.get('dataGroupId');
            var newData = series.getData();
            var transitionKey = getSeriesTransitionKey(series);
            var transitionKeyStr = convertArraySeriesKeyToString(transitionKey);
            // Only transition between series with same id.
            var oldData = oldDataMap.get(transitionKeyStr);
            // string transition key is the best match.
            if (oldData) {
                if ("TURBOPACK compile-time truthy", 1) {
                    checkTransitionSeriesKeyDuplicated(transitionKeyStr);
                }
                // TODO check if data is same?
                updateBatches.set(transitionKeyStr, {
                    oldSeries: [
                        {
                            dataGroupId: oldData.dataGroupId,
                            divide: getDivideShapeFromData(oldData.data),
                            data: oldData.data
                        }
                    ],
                    newSeries: [
                        {
                            dataGroupId: newDataGroupId,
                            divide: getDivideShapeFromData(newData),
                            data: newData
                        }
                    ]
                });
            } else {
                // Transition from multiple series.
                // e.g. 'female', 'male' -> ['female', 'male']
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"])(transitionKey)) {
                    if ("TURBOPACK compile-time truthy", 1) {
                        checkTransitionSeriesKeyDuplicated(transitionKeyStr);
                    }
                    var oldSeries_1 = [];
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(transitionKey, function(key) {
                        var oldData = oldDataMap.get(key);
                        if (oldData.data) {
                            oldSeries_1.push({
                                dataGroupId: oldData.dataGroupId,
                                divide: getDivideShapeFromData(oldData.data),
                                data: oldData.data
                            });
                        }
                    });
                    if (oldSeries_1.length) {
                        updateBatches.set(transitionKeyStr, {
                            oldSeries: oldSeries_1,
                            newSeries: [
                                {
                                    dataGroupId: newDataGroupId,
                                    data: newData,
                                    divide: getDivideShapeFromData(newData)
                                }
                            ]
                        });
                    }
                } else {
                    // Try transition to multiple series.
                    // e.g. ['female', 'male'] -> 'female', 'male'
                    var oldData_1 = oldDataMapForSplit.get(transitionKey);
                    if (oldData_1) {
                        var batch = updateBatches.get(oldData_1.key);
                        if (!batch) {
                            batch = {
                                oldSeries: [
                                    {
                                        dataGroupId: oldData_1.dataGroupId,
                                        data: oldData_1.data,
                                        divide: getDivideShapeFromData(oldData_1.data)
                                    }
                                ],
                                newSeries: []
                            };
                            updateBatches.set(oldData_1.key, batch);
                        }
                        batch.newSeries.push({
                            dataGroupId: newDataGroupId,
                            data: newData,
                            divide: getDivideShapeFromData(newData)
                        });
                    }
                }
            }
        }
    });
    return updateBatches;
}
function querySeries(series, finder) {
    for(var i = 0; i < series.length; i++){
        var found = finder.seriesIndex != null && finder.seriesIndex === series[i].seriesIndex || finder.seriesId != null && finder.seriesId === series[i].id;
        if (found) {
            return i;
        }
    }
}
function transitionSeriesFromOpt(transitionOpt, globalStore, params, api) {
    var from = [];
    var to = [];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeToArray"])(transitionOpt.from), function(finder) {
        var idx = querySeries(globalStore.oldSeries, finder);
        if (idx >= 0) {
            from.push({
                dataGroupId: globalStore.oldDataGroupIds[idx],
                data: globalStore.oldData[idx],
                // TODO can specify divideShape in transition.
                divide: getDivideShapeFromData(globalStore.oldData[idx]),
                groupIdDim: finder.dimension
            });
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeToArray"])(transitionOpt.to), function(finder) {
        var idx = querySeries(params.updatedSeries, finder);
        if (idx >= 0) {
            var data = params.updatedSeries[idx].getData();
            to.push({
                dataGroupId: globalStore.oldDataGroupIds[idx],
                data: data,
                divide: getDivideShapeFromData(data),
                groupIdDim: finder.dimension
            });
        }
    });
    if (from.length > 0 && to.length > 0) {
        transitionBetween(from, to, api);
    }
}
function installUniversalTransition(registers) {
    registers.registerUpdateLifecycle('series:beforeupdate', function(ecMOdel, api, params) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeToArray"])(params.seriesTransition), function(transOpt) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeToArray"])(transOpt.to), function(finder) {
                var series = params.updatedSeries;
                for(var i = 0; i < series.length; i++){
                    if (finder.seriesIndex != null && finder.seriesIndex === series[i].seriesIndex || finder.seriesId != null && finder.seriesId === series[i].id) {
                        series[i][__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Series$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SERIES_UNIVERSAL_TRANSITION_PROP"]] = true;
                    }
                }
            });
        });
    });
    registers.registerUpdateLifecycle('series:transition', function(ecModel, api, params) {
        // TODO api provide an namespace that can save stuff per instance
        var globalStore = getUniversalTransitionGlobalStore(api);
        // TODO multiple to multiple series.
        if (globalStore.oldSeries && params.updatedSeries && params.optionChanged) {
            // TODO transitionOpt was used in an old implementation and can be removed now
            // Use give transition config if its' give;
            var transitionOpt = params.seriesTransition;
            if (transitionOpt) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeToArray"])(transitionOpt), function(opt) {
                    transitionSeriesFromOpt(opt, globalStore, params, api);
                });
            } else {
                // Else guess from series based on transition series key.
                var updateBatches_1 = findTransitionSeriesBatches(globalStore, params);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(updateBatches_1.keys(), function(key) {
                    var batch = updateBatches_1.get(key);
                    transitionBetween(batch.oldSeries, batch.newSeries, api);
                });
            }
            // Reset
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(params.updatedSeries, function(series) {
                // Reset;
                if (series[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Series$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SERIES_UNIVERSAL_TRANSITION_PROP"]]) {
                    series[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Series$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SERIES_UNIVERSAL_TRANSITION_PROP"]] = false;
                }
            });
        }
        // Save all series of current update. Not only the updated one.
        var allSeries = ecModel.getSeries();
        var savedSeries = globalStore.oldSeries = [];
        var savedDataGroupIds = globalStore.oldDataGroupIds = [];
        var savedData = globalStore.oldData = [];
        for(var i = 0; i < allSeries.length; i++){
            var data = allSeries[i].getData();
            // Only save the data that can have transition.
            // Avoid large data costing too much extra memory
            if (data.count() < DATA_COUNT_THRESHOLD) {
                savedSeries.push(allSeries[i]);
                savedDataGroupIds.push(allSeries[i].get('dataGroupId'));
                savedData.push(data);
            }
        }
    });
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/animation/universalTransition.js [app-client] (ecmascript) <export installUniversalTransition as UniversalTransition>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UniversalTransition",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$universalTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["installUniversalTransition"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$universalTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/animation/universalTransition.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/i18n/langEN.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
 * Language: English.
 */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    time: {
        month: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ],
        monthAbbr: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ],
        dayOfWeek: [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday'
        ],
        dayOfWeekAbbr: [
            'Sun',
            'Mon',
            'Tue',
            'Wed',
            'Thu',
            'Fri',
            'Sat'
        ]
    },
    legend: {
        selector: {
            all: 'All',
            inverse: 'Inv'
        }
    },
    toolbox: {
        brush: {
            title: {
                rect: 'Box Select',
                polygon: 'Lasso Select',
                lineX: 'Horizontally Select',
                lineY: 'Vertically Select',
                keep: 'Keep Selections',
                clear: 'Clear Selections'
            }
        },
        dataView: {
            title: 'Data View',
            lang: [
                'Data View',
                'Close',
                'Refresh'
            ]
        },
        dataZoom: {
            title: {
                zoom: 'Zoom',
                back: 'Zoom Reset'
            }
        },
        magicType: {
            title: {
                line: 'Switch to Line Chart',
                bar: 'Switch to Bar Chart',
                stack: 'Stack',
                tiled: 'Tile'
            }
        },
        restore: {
            title: 'Restore'
        },
        saveAsImage: {
            title: 'Save as Image',
            lang: [
                'Right Click to Save Image'
            ]
        }
    },
    series: {
        typeNames: {
            pie: 'Pie chart',
            bar: 'Bar chart',
            line: 'Line chart',
            scatter: 'Scatter plot',
            effectScatter: 'Ripple scatter plot',
            radar: 'Radar chart',
            tree: 'Tree',
            treemap: 'Treemap',
            boxplot: 'Boxplot',
            candlestick: 'Candlestick',
            k: 'K line chart',
            heatmap: 'Heat map',
            map: 'Map',
            parallel: 'Parallel coordinate map',
            lines: 'Line graph',
            graph: 'Relationship graph',
            sankey: 'Sankey diagram',
            funnel: 'Funnel chart',
            gauge: 'Gauge',
            pictorialBar: 'Pictorial bar',
            themeRiver: 'Theme River Map',
            sunburst: 'Sunburst',
            custom: 'Custom chart',
            chart: 'Chart'
        }
    },
    aria: {
        general: {
            withTitle: 'This is a chart about "{title}"',
            withoutTitle: 'This is a chart'
        },
        series: {
            single: {
                prefix: '',
                withName: ' with type {seriesType} named {seriesName}.',
                withoutName: ' with type {seriesType}.'
            },
            multiple: {
                prefix: '. It consists of {seriesCount} series count.',
                withName: ' The {seriesId} series is a {seriesType} representing {seriesName}.',
                withoutName: ' The {seriesId} series is a {seriesType}.',
                separator: {
                    middle: '',
                    end: ''
                }
            }
        },
        data: {
            allData: 'The data is as follows: ',
            partialData: 'The first {displayCnt} items are: ',
            withName: 'the data for {name} is {value}',
            withoutName: '{value}',
            separator: {
                middle: ', ',
                end: '. '
            }
        }
    }
};
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/i18n/langZH.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
const __TURBOPACK__default__export__ = {
    time: {
        month: [
            '一月',
            '二月',
            '三月',
            '四月',
            '五月',
            '六月',
            '七月',
            '八月',
            '九月',
            '十月',
            '十一月',
            '十二月'
        ],
        monthAbbr: [
            '1月',
            '2月',
            '3月',
            '4月',
            '5月',
            '6月',
            '7月',
            '8月',
            '9月',
            '10月',
            '11月',
            '12月'
        ],
        dayOfWeek: [
            '星期日',
            '星期一',
            '星期二',
            '星期三',
            '星期四',
            '星期五',
            '星期六'
        ],
        dayOfWeekAbbr: [
            '日',
            '一',
            '二',
            '三',
            '四',
            '五',
            '六'
        ]
    },
    legend: {
        selector: {
            all: '全选',
            inverse: '反选'
        }
    },
    toolbox: {
        brush: {
            title: {
                rect: '矩形选择',
                polygon: '圈选',
                lineX: '横向选择',
                lineY: '纵向选择',
                keep: '保持选择',
                clear: '清除选择'
            }
        },
        dataView: {
            title: '数据视图',
            lang: [
                '数据视图',
                '关闭',
                '刷新'
            ]
        },
        dataZoom: {
            title: {
                zoom: '区域缩放',
                back: '区域缩放还原'
            }
        },
        magicType: {
            title: {
                line: '切换为折线图',
                bar: '切换为柱状图',
                stack: '切换为堆叠',
                tiled: '切换为平铺'
            }
        },
        restore: {
            title: '还原'
        },
        saveAsImage: {
            title: '保存为图片',
            lang: [
                '右键另存为图片'
            ]
        }
    },
    series: {
        typeNames: {
            pie: '饼图',
            bar: '柱状图',
            line: '折线图',
            scatter: '散点图',
            effectScatter: '涟漪散点图',
            radar: '雷达图',
            tree: '树图',
            treemap: '矩形树图',
            boxplot: '箱型图',
            candlestick: 'K线图',
            k: 'K线图',
            heatmap: '热力图',
            map: '地图',
            parallel: '平行坐标图',
            lines: '线图',
            graph: '关系图',
            sankey: '桑基图',
            funnel: '漏斗图',
            gauge: '仪表盘图',
            pictorialBar: '象形柱图',
            themeRiver: '主题河流图',
            sunburst: '旭日图',
            custom: '自定义图表',
            chart: '图表'
        }
    },
    aria: {
        general: {
            withTitle: '这是一个关于“{title}”的图表。',
            withoutTitle: '这是一个图表，'
        },
        series: {
            single: {
                prefix: '',
                withName: '图表类型是{seriesType}，表示{seriesName}。',
                withoutName: '图表类型是{seriesType}。'
            },
            multiple: {
                prefix: '它由{seriesCount}个图表系列组成。',
                withName: '第{seriesId}个系列是一个表示{seriesName}的{seriesType}，',
                withoutName: '第{seriesId}个系列是一个{seriesType}，',
                separator: {
                    middle: '；',
                    end: '。'
                }
            }
        },
        data: {
            allData: '其数据是——',
            partialData: '其中，前{displayCnt}项是——',
            withName: '{name}的数据是{value}',
            withoutName: '{value}',
            separator: {
                middle: '，',
                end: ''
            }
        }
    }
};
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/tokens.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$tool$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/tool/color.js [app-client] (ecmascript)");
;
;
var tokens = {
    color: {},
    darkColor: {},
    size: {}
};
var color = tokens.color = {
    theme: [
        '#5070dd',
        '#b6d634',
        '#505372',
        '#ff994d',
        '#0ca8df',
        '#ffd10a',
        '#fb628b',
        '#785db0',
        '#3fbe95'
    ],
    neutral00: '#fff',
    neutral05: '#f4f7fd',
    neutral10: '#e8ebf0',
    neutral15: '#dbdee4',
    neutral20: '#cfd2d7',
    neutral25: '#c3c5cb',
    neutral30: '#b7b9be',
    neutral35: '#aaacb2',
    neutral40: '#9ea0a5',
    neutral45: '#929399',
    neutral50: '#86878c',
    neutral55: '#797b7f',
    neutral60: '#6d6e73',
    neutral65: '#616266',
    neutral70: '#54555a',
    neutral75: '#48494d',
    neutral80: '#3c3c41',
    neutral85: '#303034',
    neutral90: '#232328',
    neutral95: '#17171b',
    neutral99: '#000',
    accent05: '#eff1f9',
    accent10: '#e0e4f2',
    accent15: '#d0d6ec',
    accent20: '#c0c9e6',
    accent25: '#b1bbdf',
    accent30: '#a1aed9',
    accent35: '#91a0d3',
    accent40: '#8292cc',
    accent45: '#7285c6',
    accent50: '#6578ba',
    accent55: '#5c6da9',
    accent60: '#536298',
    accent65: '#4a5787',
    accent70: '#404c76',
    accent75: '#374165',
    accent80: '#2e3654',
    accent85: '#252b43',
    accent90: '#1b2032',
    accent95: '#121521',
    transparent: 'rgba(0,0,0,0)',
    highlight: 'rgba(255,231,130,0.8)'
};
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extend"])(color, {
    primary: color.neutral80,
    secondary: color.neutral70,
    tertiary: color.neutral60,
    quaternary: color.neutral50,
    disabled: color.neutral20,
    border: color.neutral30,
    borderTint: color.neutral20,
    borderShade: color.neutral40,
    background: color.neutral05,
    backgroundTint: 'rgba(234,237,245,0.5)',
    backgroundTransparent: 'rgba(255,255,255,0)',
    backgroundShade: color.neutral10,
    shadow: 'rgba(0,0,0,0.2)',
    shadowTint: 'rgba(129,130,136,0.2)',
    axisLine: color.neutral70,
    axisLineTint: color.neutral40,
    axisTick: color.neutral70,
    axisTickMinor: color.neutral60,
    axisLabel: color.neutral70,
    axisSplitLine: color.neutral15,
    axisMinorSplitLine: color.neutral05
});
for(var key in color){
    if (color.hasOwnProperty(key)) {
        var hex = color[key];
        if (key === 'theme') {
            // Don't modify theme colors.
            tokens.darkColor.theme = color.theme.slice();
        } else if (key === 'highlight') {
            tokens.darkColor.highlight = 'rgba(255,231,130,0.4)';
        } else if (key.indexOf('accent') === 0) {
            // Desaturate and lighten accent colors.
            tokens.darkColor[key] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$tool$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modifyHSL"])(hex, null, function(s) {
                return s * 0.5;
            }, function(l) {
                return Math.min(1, 1.3 - l);
            });
        } else {
            tokens.darkColor[key] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$tool$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modifyHSL"])(hex, null, function(s) {
                return s * 0.9;
            }, function(l) {
                return 1 - Math.pow(l, 1.5);
            });
        }
    }
}
tokens.size = {
    xxs: 2,
    xs: 5,
    s: 10,
    m: 15,
    l: 20,
    xl: 30,
    xxl: 40,
    xxxl: 50
};
const __TURBOPACK__default__export__ = tokens;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/style.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    "dataColorPaletteTask",
    ()=>dataColorPaletteTask,
    "dataStyleTask",
    ()=>dataStyleTask,
    "seriesStyleTask",
    ()=>seriesStyleTask
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$mixin$2f$makeStyleMapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/mixin/makeStyleMapper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$mixin$2f$itemStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/mixin/itemStyle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$mixin$2f$lineStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/mixin/lineStyle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/Model.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js [app-client] (ecmascript)");
;
;
;
;
;
;
var inner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeInner"])();
var defaultStyleMappers = {
    itemStyle: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$mixin$2f$makeStyleMapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$mixin$2f$itemStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ITEM_STYLE_KEY_MAP"], true),
    lineStyle: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$mixin$2f$makeStyleMapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$mixin$2f$lineStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LINE_STYLE_KEY_MAP"], true)
};
var defaultColorKey = {
    lineStyle: 'stroke',
    itemStyle: 'fill'
};
function getStyleMapper(seriesModel, stylePath) {
    var styleMapper = seriesModel.visualStyleMapper || defaultStyleMappers[stylePath];
    if (!styleMapper) {
        console.warn("Unknown style type '" + stylePath + "'.");
        return defaultStyleMappers.itemStyle;
    }
    return styleMapper;
}
function getDefaultColorKey(seriesModel, stylePath) {
    // return defaultColorKey[stylePath] ||
    var colorKey = seriesModel.visualDrawType || defaultColorKey[stylePath];
    if (!colorKey) {
        console.warn("Unknown style type '" + stylePath + "'.");
        return 'fill';
    }
    return colorKey;
}
var seriesStyleTask = {
    createOnAllSeries: true,
    performRawSeries: true,
    reset: function(seriesModel, ecModel) {
        var data = seriesModel.getData();
        var stylePath = seriesModel.visualStyleAccessPath || 'itemStyle';
        // Set in itemStyle
        var styleModel = seriesModel.getModel(stylePath);
        var getStyle = getStyleMapper(seriesModel, stylePath);
        var globalStyle = getStyle(styleModel);
        var decalOption = styleModel.getShallow('decal');
        if (decalOption) {
            data.setVisual('decal', decalOption);
            decalOption.dirty = true;
        }
        // TODO
        var colorKey = getDefaultColorKey(seriesModel, stylePath);
        var color = globalStyle[colorKey];
        // TODO style callback
        var colorCallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(color) ? color : null;
        var hasAutoColor = globalStyle.fill === 'auto' || globalStyle.stroke === 'auto';
        // Get from color palette by default.
        if (!globalStyle[colorKey] || colorCallback || hasAutoColor) {
            // Note: If some series has color specified (e.g., by itemStyle.color), we DO NOT
            // make it effect palette. Because some scenarios users need to make some series
            // transparent or as background, which should better not effect the palette.
            var colorPalette = seriesModel.getColorFromPalette(// TODO series count changed.
            seriesModel.name, null, ecModel.getSeriesCount());
            if (!globalStyle[colorKey]) {
                globalStyle[colorKey] = colorPalette;
                data.setVisual('colorFromPalette', true);
            }
            globalStyle.fill = globalStyle.fill === 'auto' || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(globalStyle.fill) ? colorPalette : globalStyle.fill;
            globalStyle.stroke = globalStyle.stroke === 'auto' || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(globalStyle.stroke) ? colorPalette : globalStyle.stroke;
        }
        data.setVisual('style', globalStyle);
        data.setVisual('drawType', colorKey);
        // Only visible series has each data be visual encoded
        if (!ecModel.isSeriesFiltered(seriesModel) && colorCallback) {
            data.setVisual('colorFromPalette', false);
            return {
                dataEach: function(data, idx) {
                    var dataParams = seriesModel.getDataParams(idx);
                    var itemStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extend"])({}, globalStyle);
                    itemStyle[colorKey] = colorCallback(dataParams);
                    data.setItemVisual(idx, 'style', itemStyle);
                }
            };
        }
    }
};
var sharedModel = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]();
var dataStyleTask = {
    createOnAllSeries: true,
    performRawSeries: true,
    reset: function(seriesModel, ecModel) {
        if (seriesModel.ignoreStyleOnData || ecModel.isSeriesFiltered(seriesModel)) {
            return;
        }
        var data = seriesModel.getData();
        var stylePath = seriesModel.visualStyleAccessPath || 'itemStyle';
        // Set in itemStyle
        var getStyle = getStyleMapper(seriesModel, stylePath);
        var colorKey = data.getVisual('drawType');
        return {
            dataEach: data.hasItemOption ? function(data, idx) {
                // Not use getItemModel for performance considuration
                var rawItem = data.getRawDataItem(idx);
                if (rawItem && rawItem[stylePath]) {
                    sharedModel.option = rawItem[stylePath];
                    var style = getStyle(sharedModel);
                    var existsStyle = data.ensureUniqueItemVisual(idx, 'style');
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extend"])(existsStyle, style);
                    if (sharedModel.option.decal) {
                        data.setItemVisual(idx, 'decal', sharedModel.option.decal);
                        sharedModel.option.decal.dirty = true;
                    }
                    if (colorKey in style) {
                        data.setItemVisual(idx, 'colorFromPalette', false);
                    }
                }
            } : null
        };
    }
};
// Pick color from palette for the data which has not been set with color yet.
// Note: do not support stream rendering. No such cases yet.
var dataColorPaletteTask = {
    performRawSeries: true,
    overallReset: function(ecModel) {
        // Each type of series uses one scope.
        // Pie and funnel are using different scopes.
        var paletteScopeGroupByType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createHashMap"])();
        ecModel.eachSeries(function(seriesModel) {
            var colorBy = seriesModel.getColorBy();
            if (seriesModel.isColorBySeries()) {
                return;
            }
            var key = seriesModel.type + '-' + colorBy;
            var colorScope = paletteScopeGroupByType.get(key);
            if (!colorScope) {
                colorScope = {};
                paletteScopeGroupByType.set(key, colorScope);
            }
            inner(seriesModel).scope = colorScope;
        });
        ecModel.eachSeries(function(seriesModel) {
            if (seriesModel.isColorBySeries() || ecModel.isSeriesFiltered(seriesModel)) {
                return;
            }
            var dataAll = seriesModel.getRawData();
            var idxMap = {};
            var data = seriesModel.getData();
            var colorScope = inner(seriesModel).scope;
            var stylePath = seriesModel.visualStyleAccessPath || 'itemStyle';
            var colorKey = getDefaultColorKey(seriesModel, stylePath);
            data.each(function(idx) {
                var rawIdx = data.getRawIndex(idx);
                idxMap[rawIdx] = idx;
            });
            // Iterate on data before filtered. To make sure color from palette can be
            // Consistent when toggling legend.
            dataAll.each(function(rawIdx) {
                var idx = idxMap[rawIdx];
                var fromPalette = data.getItemVisual(idx, 'colorFromPalette');
                // Get color from palette for each data only when the color is inherited from series color, which is
                // also picked from color palette. So following situation is not in the case:
                // 1. series.itemStyle.color is set
                // 2. color is encoded by visualMap
                if (fromPalette) {
                    var itemStyle = data.ensureUniqueItemVisual(idx, 'style');
                    var name_1 = dataAll.getName(rawIdx) || rawIdx + '';
                    var dataCount = dataAll.count();
                    itemStyle[colorKey] = seriesModel.getColorFromPalette(name_1, colorScope, dataCount);
                }
            });
        });
    }
};
;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/symbol.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    "dataSymbolTask",
    ()=>dataSymbolTask,
    "seriesSymbolTask",
    ()=>seriesSymbolTask
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
;
var SYMBOL_PROPS_WITH_CB = [
    'symbol',
    'symbolSize',
    'symbolRotate',
    'symbolOffset'
];
var SYMBOL_PROPS = SYMBOL_PROPS_WITH_CB.concat([
    'symbolKeepAspect'
]);
// Encoding visual for all series include which is filtered for legend drawing
var seriesSymbolTask = {
    createOnAllSeries: true,
    // For legend.
    performRawSeries: true,
    reset: function(seriesModel, ecModel) {
        var data = seriesModel.getData();
        if (seriesModel.legendIcon) {
            data.setVisual('legendIcon', seriesModel.legendIcon);
        }
        if (!seriesModel.hasSymbolVisual) {
            return;
        }
        var symbolOptions = {};
        var symbolOptionsCb = {};
        var hasCallback = false;
        for(var i = 0; i < SYMBOL_PROPS_WITH_CB.length; i++){
            var symbolPropName = SYMBOL_PROPS_WITH_CB[i];
            var val = seriesModel.get(symbolPropName);
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(val)) {
                hasCallback = true;
                symbolOptionsCb[symbolPropName] = val;
            } else {
                symbolOptions[symbolPropName] = val;
            }
        }
        symbolOptions.symbol = symbolOptions.symbol || seriesModel.defaultSymbol;
        data.setVisual((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extend"])({
            legendIcon: seriesModel.legendIcon || symbolOptions.symbol,
            symbolKeepAspect: seriesModel.get('symbolKeepAspect')
        }, symbolOptions));
        // Only visible series has each data be visual encoded
        if (ecModel.isSeriesFiltered(seriesModel)) {
            return;
        }
        var symbolPropsCb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keys"])(symbolOptionsCb);
        function dataEach(data, idx) {
            var rawValue = seriesModel.getRawValue(idx);
            var params = seriesModel.getDataParams(idx);
            for(var i = 0; i < symbolPropsCb.length; i++){
                var symbolPropName = symbolPropsCb[i];
                data.setItemVisual(idx, symbolPropName, symbolOptionsCb[symbolPropName](rawValue, params));
            }
        }
        return {
            dataEach: hasCallback ? dataEach : null
        };
    }
};
var dataSymbolTask = {
    createOnAllSeries: true,
    // For legend.
    performRawSeries: true,
    reset: function(seriesModel, ecModel) {
        if (!seriesModel.hasSymbolVisual) {
            return;
        }
        // Only visible series has each data be visual encoded
        if (ecModel.isSeriesFiltered(seriesModel)) {
            return;
        }
        var data = seriesModel.getData();
        function dataEach(data, idx) {
            var itemModel = data.getItemModel(idx);
            for(var i = 0; i < SYMBOL_PROPS.length; i++){
                var symbolPropName = SYMBOL_PROPS[i];
                var val = itemModel.getShallow(symbolPropName, true);
                if (val != null) {
                    data.setItemVisual(idx, symbolPropName, val);
                }
            }
        }
        return {
            dataEach: data.hasItemOption ? dataEach : null
        };
    }
};
;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/helper.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    "getItemVisualFromData",
    ()=>getItemVisualFromData,
    "getVisualFromData",
    ()=>getVisualFromData,
    "setItemVisualFromData",
    ()=>setItemVisualFromData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.29.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
function getItemVisualFromData(data, dataIndex, key) {
    switch(key){
        case 'color':
            var style = data.getItemVisual(dataIndex, 'style');
            return style[data.getVisual('drawType')];
        case 'opacity':
            return data.getItemVisual(dataIndex, 'style').opacity;
        case 'symbol':
        case 'symbolSize':
        case 'liftZ':
            return data.getItemVisual(dataIndex, key);
        default:
            if ("TURBOPACK compile-time truthy", 1) {
                console.warn("Unknown visual type " + key);
            }
    }
}
function getVisualFromData(data, key) {
    switch(key){
        case 'color':
            var style = data.getVisual('style');
            return style[data.getVisual('drawType')];
        case 'opacity':
            return data.getVisual('style').opacity;
        case 'symbol':
        case 'symbolSize':
        case 'liftZ':
            return data.getVisual(key);
        default:
            if ("TURBOPACK compile-time truthy", 1) {
                console.warn("Unknown visual type " + key);
            }
    }
}
function setItemVisualFromData(data, dataIndex, key, value) {
    switch(key){
        case 'color':
            // Make sure not sharing style object.
            var style = data.ensureUniqueItemVisual(dataIndex, 'style');
            style[data.getVisual('drawType')] = value;
            // Mark the color has been changed, not from palette anymore
            data.setItemVisual(dataIndex, 'colorFromPalette', false);
            break;
        case 'opacity':
            data.ensureUniqueItemVisual(dataIndex, 'style').opacity = value;
            break;
        case 'symbol':
        case 'symbolSize':
        case 'liftZ':
            data.setItemVisual(dataIndex, key, value);
            break;
        default:
            if ("TURBOPACK compile-time truthy", 1) {
                console.warn("Unknown visual type " + key);
            }
    }
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/decal.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    ()=>decalVisual
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$decal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/decal.js [app-client] (ecmascript)");
;
function decalVisual(ecModel, api) {
    ecModel.eachRawSeries(function(seriesModel) {
        if (ecModel.isSeriesFiltered(seriesModel)) {
            return;
        }
        var data = seriesModel.getData();
        if (data.hasItemVisual()) {
            data.each(function(idx) {
                var decal = data.getItemVisual(idx, 'decal');
                if (decal) {
                    var itemStyle = data.ensureUniqueItemVisual(idx, 'style');
                    itemStyle.decal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$decal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createOrUpdatePatternFromDecal"])(decal, api);
                }
            });
        }
        var decal = data.getVisual('decal');
        if (decal) {
            var style = data.getVisual('style');
            style.decal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$decal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createOrUpdatePatternFromDecal"])(decal, api);
        }
    });
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/LegendVisualProvider.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
 * LegendVisualProvider is an bridge that pick encoded color from data and
 * provide to the legend component.
 */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var LegendVisualProvider = /** @class */ function() {
    function LegendVisualProvider(// Function to get data after filtered. It stores all the encoding info
    getDataWithEncodedVisual, // Function to get raw data before filtered.
    getRawData) {
        this._getDataWithEncodedVisual = getDataWithEncodedVisual;
        this._getRawData = getRawData;
    }
    LegendVisualProvider.prototype.getAllNames = function() {
        var rawData = this._getRawData();
        // We find the name from the raw data. In case it's filtered by the legend component.
        // Normally, the name can be found in rawData, but can't be found in filtered data will display as gray.
        return rawData.mapArray(rawData.getName);
    };
    LegendVisualProvider.prototype.containName = function(name) {
        var rawData = this._getRawData();
        return rawData.indexOfName(name) >= 0;
    };
    LegendVisualProvider.prototype.indexOfName = function(name) {
        // Only get data when necessary.
        // Because LegendVisualProvider constructor may be new in the stage that data is not prepared yet.
        // Invoking Series#getData immediately will throw an error.
        var dataWithEncodedVisual = this._getDataWithEncodedVisual();
        return dataWithEncodedVisual.indexOfName(name);
    };
    LegendVisualProvider.prototype.getItemVisual = function(dataIndex, key) {
        // Get encoded visual properties from final filtered data.
        var dataWithEncodedVisual = this._getDataWithEncodedVisual();
        return dataWithEncodedVisual.getItemVisual(dataIndex, key);
    };
    return LegendVisualProvider;
}();
const __TURBOPACK__default__export__ = LegendVisualProvider;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/VisualMapping.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$tool$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/tool/color.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/number.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/log.js [app-client] (ecmascript)");
;
;
;
;
var each = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"];
var isObject = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"];
var CATEGORY_DEFAULT_VISUAL_INDEX = -1;
var VisualMapping = /** @class */ function() {
    function VisualMapping(option) {
        var mappingMethod = option.mappingMethod;
        var visualType = option.type;
        var thisOption = this.option = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clone"](option);
        this.type = visualType;
        this.mappingMethod = mappingMethod;
        this._normalizeData = normalizers[mappingMethod];
        var visualHandler = VisualMapping.visualHandlers[visualType];
        this.applyVisual = visualHandler.applyVisual;
        this.getColorMapper = visualHandler.getColorMapper;
        this._normalizedToVisual = visualHandler._normalizedToVisual[mappingMethod];
        if (mappingMethod === 'piecewise') {
            normalizeVisualRange(thisOption);
            preprocessForPiecewise(thisOption);
        } else if (mappingMethod === 'category') {
            thisOption.categories ? preprocessForSpecifiedCategory(thisOption) : normalizeVisualRange(thisOption, true);
        } else {
            // mappingMethod === 'linear' or 'fixed'
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"](mappingMethod !== 'linear' || thisOption.dataExtent);
            normalizeVisualRange(thisOption);
        }
    }
    VisualMapping.prototype.mapValueToVisual = function(value) {
        var normalized = this._normalizeData(value);
        return this._normalizedToVisual(normalized, value);
    };
    VisualMapping.prototype.getNormalizer = function() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bind"](this._normalizeData, this);
    };
    /**
   * List available visual types.
   *
   * @public
   * @return {Array.<string>}
   */ VisualMapping.listVisualTypes = function() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keys"](VisualMapping.visualHandlers);
    };
    // /**
    //  * @public
    //  */
    // static addVisualHandler(name, handler) {
    //     visualHandlers[name] = handler;
    // }
    /**
   * @public
   */ VisualMapping.isValidType = function(visualType) {
        return VisualMapping.visualHandlers.hasOwnProperty(visualType);
    };
    /**
   * Convenient method.
   * Visual can be Object or Array or primary type.
   */ VisualMapping.eachVisual = function(visual, callback, context) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"](visual)) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"](visual, callback, context);
        } else {
            callback.call(context, visual);
        }
    };
    VisualMapping.mapVisual = function(visual, callback, context) {
        var isPrimary;
        var newVisual = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"](visual) ? [] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"](visual) ? {} : (isPrimary = true, null);
        VisualMapping.eachVisual(visual, function(v, key) {
            var newVal = callback.call(context, v, key);
            isPrimary ? newVisual = newVal : newVisual[key] = newVal;
        });
        return newVisual;
    };
    /**
   * Retrieve visual properties from given object.
   */ VisualMapping.retrieveVisuals = function(obj) {
        var ret = {};
        var hasVisual;
        obj && each(VisualMapping.visualHandlers, function(h, visualType) {
            if (obj.hasOwnProperty(visualType)) {
                ret[visualType] = obj[visualType];
                hasVisual = true;
            }
        });
        return hasVisual ? ret : null;
    };
    /**
   * Give order to visual types, considering colorSaturation, colorAlpha depends on color.
   *
   * @public
   * @param {(Object|Array)} visualTypes If Object, like: {color: ..., colorSaturation: ...}
   *                                     IF Array, like: ['color', 'symbol', 'colorSaturation']
   * @return {Array.<string>} Sorted visual types.
   */ VisualMapping.prepareVisualTypes = function(visualTypes) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"](visualTypes)) {
            visualTypes = visualTypes.slice();
        } else if (isObject(visualTypes)) {
            var types_1 = [];
            each(visualTypes, function(item, type) {
                types_1.push(type);
            });
            visualTypes = types_1;
        } else {
            return [];
        }
        visualTypes.sort(function(type1, type2) {
            // color should be front of colorSaturation, colorAlpha, ...
            // symbol and symbolSize do not matter.
            return type2 === 'color' && type1 !== 'color' && type1.indexOf('color') === 0 ? 1 : -1;
        });
        return visualTypes;
    };
    /**
   * 'color', 'colorSaturation', 'colorAlpha', ... are depends on 'color'.
   * Other visuals are only depends on themself.
   */ VisualMapping.dependsOn = function(visualType1, visualType2) {
        return visualType2 === 'color' ? !!(visualType1 && visualType1.indexOf(visualType2) === 0) : visualType1 === visualType2;
    };
    /**
   * @param value
   * @param pieceList [{value: ..., interval: [min, max]}, ...]
   *                         Always from small to big.
   * @param findClosestWhenOutside Default to be false
   * @return index
   */ VisualMapping.findPieceIndex = function(value, pieceList, findClosestWhenOutside) {
        var possibleI;
        var abs = Infinity;
        // value has the higher priority.
        for(var i = 0, len = pieceList.length; i < len; i++){
            var pieceValue = pieceList[i].value;
            if (pieceValue != null) {
                if (pieceValue === value || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"](pieceValue) && pieceValue === value + '') {
                    return i;
                }
                findClosestWhenOutside && updatePossible(pieceValue, i);
            }
        }
        for(var i = 0, len = pieceList.length; i < len; i++){
            var piece = pieceList[i];
            var interval = piece.interval;
            var close_1 = piece.close;
            if (interval) {
                if (interval[0] === -Infinity) {
                    if (littleThan(close_1[1], value, interval[1])) {
                        return i;
                    }
                } else if (interval[1] === Infinity) {
                    if (littleThan(close_1[0], interval[0], value)) {
                        return i;
                    }
                } else if (littleThan(close_1[0], interval[0], value) && littleThan(close_1[1], value, interval[1])) {
                    return i;
                }
                findClosestWhenOutside && updatePossible(interval[0], i);
                findClosestWhenOutside && updatePossible(interval[1], i);
            }
        }
        if (findClosestWhenOutside) {
            return value === Infinity ? pieceList.length - 1 : value === -Infinity ? 0 : possibleI;
        }
        function updatePossible(val, index) {
            var newAbs = Math.abs(val - value);
            if (newAbs < abs) {
                abs = newAbs;
                possibleI = index;
            }
        }
    };
    VisualMapping.visualHandlers = {
        color: {
            applyVisual: makeApplyVisual('color'),
            getColorMapper: function() {
                var thisOption = this.option;
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bind"](thisOption.mappingMethod === 'category' ? function(value, isNormalized) {
                    !isNormalized && (value = this._normalizeData(value));
                    return doMapCategory.call(this, value);
                } : function(value, isNormalized, out) {
                    // If output rgb array
                    // which will be much faster and useful in pixel manipulation
                    var returnRGBArray = !!out;
                    !isNormalized && (value = this._normalizeData(value));
                    out = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$tool$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fastLerp"](value, thisOption.parsedVisual, out);
                    return returnRGBArray ? out : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$tool$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringify"](out, 'rgba');
                }, this);
            },
            _normalizedToVisual: {
                linear: function(normalized) {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$tool$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringify"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$tool$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fastLerp"](normalized, this.option.parsedVisual), 'rgba');
                },
                category: doMapCategory,
                piecewise: function(normalized, value) {
                    var result = getSpecifiedVisual.call(this, value);
                    if (result == null) {
                        result = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$tool$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringify"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$tool$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fastLerp"](normalized, this.option.parsedVisual), 'rgba');
                    }
                    return result;
                },
                fixed: doMapFixed
            }
        },
        colorHue: makePartialColorVisualHandler(function(color, value) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$tool$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modifyHSL"](color, value);
        }),
        colorSaturation: makePartialColorVisualHandler(function(color, value) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$tool$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modifyHSL"](color, null, value);
        }),
        colorLightness: makePartialColorVisualHandler(function(color, value) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$tool$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modifyHSL"](color, null, null, value);
        }),
        colorAlpha: makePartialColorVisualHandler(function(color, value) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$tool$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modifyAlpha"](color, value);
        }),
        decal: {
            applyVisual: makeApplyVisual('decal'),
            _normalizedToVisual: {
                linear: null,
                category: doMapCategory,
                piecewise: null,
                fixed: null
            }
        },
        opacity: {
            applyVisual: makeApplyVisual('opacity'),
            _normalizedToVisual: createNormalizedToNumericVisual([
                0,
                1
            ])
        },
        liftZ: {
            applyVisual: makeApplyVisual('liftZ'),
            _normalizedToVisual: {
                linear: doMapFixed,
                category: doMapFixed,
                piecewise: doMapFixed,
                fixed: doMapFixed
            }
        },
        symbol: {
            applyVisual: function(value, getter, setter) {
                var symbolCfg = this.mapValueToVisual(value);
                setter('symbol', symbolCfg);
            },
            _normalizedToVisual: {
                linear: doMapToArray,
                category: doMapCategory,
                piecewise: function(normalized, value) {
                    var result = getSpecifiedVisual.call(this, value);
                    if (result == null) {
                        result = doMapToArray.call(this, normalized);
                    }
                    return result;
                },
                fixed: doMapFixed
            }
        },
        symbolSize: {
            applyVisual: makeApplyVisual('symbolSize'),
            _normalizedToVisual: createNormalizedToNumericVisual([
                0,
                1
            ])
        }
    };
    return VisualMapping;
}();
function preprocessForPiecewise(thisOption) {
    var pieceList = thisOption.pieceList;
    thisOption.hasSpecialVisual = false;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"](pieceList, function(piece, index) {
        piece.originIndex = index;
        // piece.visual is "result visual value" but not
        // a visual range, so it does not need to be normalized.
        if (piece.visual != null) {
            thisOption.hasSpecialVisual = true;
        }
    });
}
function preprocessForSpecifiedCategory(thisOption) {
    // Hash categories.
    var categories = thisOption.categories;
    var categoryMap = thisOption.categoryMap = {};
    var visual = thisOption.visual;
    each(categories, function(cate, index) {
        categoryMap[cate] = index;
    });
    // Process visual map input.
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"](visual)) {
        var visualArr_1 = [];
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"](visual)) {
            each(visual, function(v, cate) {
                var index = categoryMap[cate];
                visualArr_1[index != null ? index : CATEGORY_DEFAULT_VISUAL_INDEX] = v;
            });
        } else {
            // Is primary type, represents default visual.
            visualArr_1[CATEGORY_DEFAULT_VISUAL_INDEX] = visual;
        }
        visual = setVisualToOption(thisOption, visualArr_1);
    }
    // Remove categories that has no visual,
    // then we can mapping them to CATEGORY_DEFAULT_VISUAL_INDEX.
    for(var i = categories.length - 1; i >= 0; i--){
        if (visual[i] == null) {
            delete categoryMap[categories[i]];
            categories.pop();
        }
    }
}
function normalizeVisualRange(thisOption, isCategory) {
    var visual = thisOption.visual;
    var visualArr = [];
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"](visual)) {
        each(visual, function(v) {
            visualArr.push(v);
        });
    } else if (visual != null) {
        visualArr.push(visual);
    }
    var doNotNeedPair = {
        color: 1,
        symbol: 1
    };
    if (!isCategory && visualArr.length === 1 && !doNotNeedPair.hasOwnProperty(thisOption.type)) {
        // Do not care visualArr.length === 0, which is illegal.
        visualArr[1] = visualArr[0];
    }
    setVisualToOption(thisOption, visualArr);
}
function makePartialColorVisualHandler(applyValue) {
    return {
        applyVisual: function(value, getter, setter) {
            // Only used in HSL
            var colorChannel = this.mapValueToVisual(value);
            // Must not be array value
            setter('color', applyValue(getter('color'), colorChannel));
        },
        _normalizedToVisual: createNormalizedToNumericVisual([
            0,
            1
        ])
    };
}
function doMapToArray(normalized) {
    var visual = this.option.visual;
    return visual[Math.round((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["linearMap"])(normalized, [
        0,
        1
    ], [
        0,
        visual.length - 1
    ], true))] || {}; // TODO {}?
}
function makeApplyVisual(visualType) {
    return function(value, getter, setter) {
        setter(visualType, this.mapValueToVisual(value));
    };
}
function doMapCategory(normalized) {
    var visual = this.option.visual;
    return visual[this.option.loop && normalized !== CATEGORY_DEFAULT_VISUAL_INDEX ? normalized % visual.length : normalized];
}
function doMapFixed() {
    // visual will be convert to array.
    return this.option.visual[0];
}
/**
 * Create mapped to numeric visual
 */ function createNormalizedToNumericVisual(sourceExtent) {
    return {
        linear: function(normalized) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["linearMap"])(normalized, sourceExtent, this.option.visual, true);
        },
        category: doMapCategory,
        piecewise: function(normalized, value) {
            var result = getSpecifiedVisual.call(this, value);
            if (result == null) {
                result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["linearMap"])(normalized, sourceExtent, this.option.visual, true);
            }
            return result;
        },
        fixed: doMapFixed
    };
}
function getSpecifiedVisual(value) {
    var thisOption = this.option;
    var pieceList = thisOption.pieceList;
    if (thisOption.hasSpecialVisual) {
        var pieceIndex = VisualMapping.findPieceIndex(value, pieceList);
        var piece = pieceList[pieceIndex];
        if (piece && piece.visual) {
            return piece.visual[this.type];
        }
    }
}
function setVisualToOption(thisOption, visualArr) {
    thisOption.visual = visualArr;
    if (thisOption.type === 'color') {
        thisOption.parsedVisual = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"](visualArr, function(item) {
            var color = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$tool$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"](item);
            if (!color && ("TURBOPACK compile-time value", "development") !== 'production') {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["warn"])("'" + item + "' is an illegal color, fallback to '#000000'", true);
            }
            return color || [
                0,
                0,
                0,
                1
            ];
        });
    }
    return visualArr;
}
/**
 * Normalizers by mapping methods.
 */ var normalizers = {
    linear: function(value) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["linearMap"])(value, this.option.dataExtent, [
            0,
            1
        ], true);
    },
    piecewise: function(value) {
        var pieceList = this.option.pieceList;
        var pieceIndex = VisualMapping.findPieceIndex(value, pieceList, true);
        if (pieceIndex != null) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["linearMap"])(pieceIndex, [
                0,
                pieceList.length - 1
            ], [
                0,
                1
            ], true);
        }
    },
    category: function(value) {
        var index = this.option.categories ? this.option.categoryMap[value] : value; // ordinal value
        return index == null ? CATEGORY_DEFAULT_VISUAL_INDEX : index;
    },
    fixed: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"]
};
function littleThan(close, a, b) {
    return close ? a <= b : a < b;
}
const __TURBOPACK__default__export__ = VisualMapping;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/visualSolution.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
 * @file Visual solution, for consistent option specification.
 */ __turbopack_context__.s([
    "applyVisual",
    ()=>applyVisual,
    "createVisualMappings",
    ()=>createVisualMappings,
    "incrementalApplyVisual",
    ()=>incrementalApplyVisual,
    "replaceVisualOption",
    ()=>replaceVisualOption
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$VisualMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/VisualMapping.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/helper.js [app-client] (ecmascript)");
;
;
;
var each = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"];
function hasKeys(obj) {
    if (obj) {
        for(var name_1 in obj){
            if (obj.hasOwnProperty(name_1)) {
                return true;
            }
        }
    }
}
function createVisualMappings(option, stateList, supplementVisualOption) {
    var visualMappings = {};
    each(stateList, function(state) {
        var mappings = visualMappings[state] = createMappings();
        each(option[state], function(visualData, visualType) {
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$VisualMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isValidType(visualType)) {
                return;
            }
            var mappingOption = {
                type: visualType,
                visual: visualData
            };
            supplementVisualOption && supplementVisualOption(mappingOption, state);
            mappings[visualType] = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$VisualMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](mappingOption);
            // Prepare a alpha for opacity, for some case that opacity
            // is not supported, such as rendering using gradient color.
            if (visualType === 'opacity') {
                mappingOption = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clone"](mappingOption);
                mappingOption.type = 'colorAlpha';
                mappings.__hidden.__alphaForOpacity = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$VisualMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](mappingOption);
            }
        });
    });
    return visualMappings;
    //TURBOPACK unreachable
    ;
    function createMappings() {
        var Creater = function() {};
        // Make sure hidden fields will not be visited by
        // object iteration (with hasOwnProperty checking).
        Creater.prototype.__hidden = Creater.prototype;
        var obj = new Creater();
        return obj;
    }
}
function replaceVisualOption(thisOption, newOption, keys) {
    // Visual attributes merge is not supported, otherwise it
    // brings overcomplicated merge logic. See #2853. So if
    // newOption has anyone of these keys, all of these keys
    // will be reset. Otherwise, all keys remain.
    var has;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"](keys, function(key) {
        if (newOption.hasOwnProperty(key) && hasKeys(newOption[key])) {
            has = true;
        }
    });
    has && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"](keys, function(key) {
        if (newOption.hasOwnProperty(key) && hasKeys(newOption[key])) {
            thisOption[key] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clone"](newOption[key]);
        } else {
            delete thisOption[key];
        }
    });
}
function applyVisual(stateList, visualMappings, data, getValueState, scope, dimension) {
    var visualTypesMap = {};
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"](stateList, function(state) {
        var visualTypes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$VisualMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].prepareVisualTypes(visualMappings[state]);
        visualTypesMap[state] = visualTypes;
    });
    var dataIndex;
    function getVisual(key) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getItemVisualFromData"])(data, dataIndex, key);
    }
    function setVisual(key, value) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setItemVisualFromData"])(data, dataIndex, key, value);
    }
    if (dimension == null) {
        data.each(eachItem);
    } else {
        data.each([
            dimension
        ], eachItem);
    }
    function eachItem(valueOrIndex, index) {
        dataIndex = dimension == null ? valueOrIndex // First argument is index
         : index;
        var rawDataItem = data.getRawDataItem(dataIndex);
        // Consider performance
        // @ts-ignore
        if (rawDataItem && rawDataItem.visualMap === false) {
            return;
        }
        var valueState = getValueState.call(scope, valueOrIndex);
        var mappings = visualMappings[valueState];
        var visualTypes = visualTypesMap[valueState];
        for(var i = 0, len = visualTypes.length; i < len; i++){
            var type = visualTypes[i];
            mappings[type] && mappings[type].applyVisual(valueOrIndex, getVisual, setVisual);
        }
    }
}
function incrementalApplyVisual(stateList, visualMappings, getValueState, dim) {
    var visualTypesMap = {};
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"](stateList, function(state) {
        var visualTypes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$VisualMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].prepareVisualTypes(visualMappings[state]);
        visualTypesMap[state] = visualTypes;
    });
    return {
        progress: function progress(params, data) {
            var dimIndex;
            if (dim != null) {
                dimIndex = data.getDimensionIndex(dim);
            }
            function getVisual(key) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getItemVisualFromData"])(data, dataIndex, key);
            }
            function setVisual(key, value) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setItemVisualFromData"])(data, dataIndex, key, value);
            }
            var dataIndex;
            var store = data.getStore();
            while((dataIndex = params.next()) != null){
                var rawDataItem = data.getRawDataItem(dataIndex);
                // Consider performance
                // @ts-ignore
                if (rawDataItem && rawDataItem.visualMap === false) {
                    continue;
                }
                var value = dim != null ? store.get(dimIndex, dataIndex) : dataIndex;
                var valueState = getValueState(value);
                var mappings = visualMappings[valueState];
                var visualTypes = visualTypesMap[valueState];
                for(var i = 0, len = visualTypes.length; i < len; i++){
                    var type = visualTypes[i];
                    mappings[type] && mappings[type].applyVisual(value, getVisual, setVisual);
                }
            }
        }
    };
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/visualDefault.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
 * @file Visual mapping.
 */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/tokens.js [app-client] (ecmascript)");
;
;
var visualDefault = {
    /**
   * @public
   */ get: function(visualType, key, isCategory) {
        var value = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clone"]((defaultOption[visualType] || {})[key]);
        return isCategory ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"](value) ? value[value.length - 1] : value : value;
    }
};
var defaultOption = {
    color: {
        active: [
            '#006edd',
            '#e0ffff'
        ],
        inactive: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].color.transparent
        ]
    },
    colorHue: {
        active: [
            0,
            360
        ],
        inactive: [
            0,
            0
        ]
    },
    colorSaturation: {
        active: [
            0.3,
            1
        ],
        inactive: [
            0,
            0
        ]
    },
    colorLightness: {
        active: [
            0.9,
            0.5
        ],
        inactive: [
            0,
            0
        ]
    },
    colorAlpha: {
        active: [
            0.3,
            1
        ],
        inactive: [
            0,
            0
        ]
    },
    opacity: {
        active: [
            0.3,
            1
        ],
        inactive: [
            0,
            0
        ]
    },
    symbol: {
        active: [
            'circle',
            'roundRect',
            'diamond'
        ],
        inactive: [
            'none'
        ]
    },
    symbolSize: {
        active: [
            10,
            50
        ],
        inactive: [
            0,
            0
        ]
    }
};
const __TURBOPACK__default__export__ = visualDefault;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/aria.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    ()=>ariaVisual
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$mixin$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/mixin/palette.js [app-client] (ecmascript)");
;
;
;
var DEFAULT_OPTION = {
    label: {
        enabled: true
    },
    decal: {
        show: false
    }
};
var inner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeInner"])();
var decalPaletteScope = {};
function ariaVisual(ecModel, api) {
    var ariaModel = ecModel.getModel('aria');
    // See "area enabled" detection code in `GlobalModel.ts`.
    if (!ariaModel.get('enabled')) {
        return;
    }
    var defaultOption = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clone"](DEFAULT_OPTION);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["merge"](defaultOption.label, ecModel.getLocaleModel().get('aria'), false);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["merge"](ariaModel.option, defaultOption, false);
    setDecal();
    setLabel();
    function setDecal() {
        var decalModel = ariaModel.getModel('decal');
        var useDecal = decalModel.get('show');
        if (useDecal) {
            // Each type of series use one scope.
            // Pie and funnel are using different scopes.
            var paletteScopeGroupByType_1 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createHashMap"]();
            ecModel.eachSeries(function(seriesModel) {
                if (seriesModel.isColorBySeries()) {
                    return;
                }
                var decalScope = paletteScopeGroupByType_1.get(seriesModel.type);
                if (!decalScope) {
                    decalScope = {};
                    paletteScopeGroupByType_1.set(seriesModel.type, decalScope);
                }
                inner(seriesModel).scope = decalScope;
            });
            ecModel.eachRawSeries(function(seriesModel) {
                if (ecModel.isSeriesFiltered(seriesModel)) {
                    return;
                }
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"](seriesModel.enableAriaDecal)) {
                    // Let series define how to use decal palette on data
                    seriesModel.enableAriaDecal();
                    return;
                }
                var data = seriesModel.getData();
                if (!seriesModel.isColorBySeries()) {
                    var dataAll_1 = seriesModel.getRawData();
                    var idxMap_1 = {};
                    var decalScope_1 = inner(seriesModel).scope;
                    data.each(function(idx) {
                        var rawIdx = data.getRawIndex(idx);
                        idxMap_1[rawIdx] = idx;
                    });
                    var dataCount_1 = dataAll_1.count();
                    dataAll_1.each(function(rawIdx) {
                        var idx = idxMap_1[rawIdx];
                        var name = dataAll_1.getName(rawIdx) || rawIdx + '';
                        var paletteDecal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$mixin$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDecalFromPalette"])(seriesModel.ecModel, name, decalScope_1, dataCount_1);
                        var specifiedDecal = data.getItemVisual(idx, 'decal');
                        data.setItemVisual(idx, 'decal', mergeDecal(specifiedDecal, paletteDecal));
                    });
                } else {
                    var paletteDecal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$mixin$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDecalFromPalette"])(seriesModel.ecModel, seriesModel.name, decalPaletteScope, ecModel.getSeriesCount());
                    var specifiedDecal = data.getVisual('decal');
                    data.setVisual('decal', mergeDecal(specifiedDecal, paletteDecal));
                }
                function mergeDecal(specifiedDecal, paletteDecal) {
                    // Merge decal from palette to decal from itemStyle.
                    // User do not need to specify all of the decal props.
                    var resultDecal = specifiedDecal ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extend"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extend"]({}, paletteDecal), specifiedDecal) : paletteDecal;
                    resultDecal.dirty = true;
                    return resultDecal;
                }
            });
        }
    }
    function setLabel() {
        var dom = api.getZr().dom;
        // TODO: support for SSR
        if (!dom) {
            return;
        }
        var labelLocale = ecModel.getLocaleModel().get('aria');
        var labelModel = ariaModel.getModel('label');
        labelModel.option = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaults"](labelModel.option, labelLocale);
        if (!labelModel.get('enabled')) {
            return;
        }
        dom.setAttribute('role', 'img');
        if (labelModel.get('description')) {
            dom.setAttribute('aria-label', labelModel.get('description'));
            return;
        }
        var seriesCnt = ecModel.getSeriesCount();
        var maxDataCnt = labelModel.get([
            'data',
            'maxCount'
        ]) || 10;
        var maxSeriesCnt = labelModel.get([
            'series',
            'maxCount'
        ]) || 10;
        var displaySeriesCnt = Math.min(seriesCnt, maxSeriesCnt);
        var ariaLabel;
        if (seriesCnt < 1) {
            // No series, no aria label
            return;
        } else {
            var title = getTitle();
            if (title) {
                var withTitle = labelModel.get([
                    'general',
                    'withTitle'
                ]);
                ariaLabel = replace(withTitle, {
                    title: title
                });
            } else {
                ariaLabel = labelModel.get([
                    'general',
                    'withoutTitle'
                ]);
            }
            var seriesLabels_1 = [];
            var prefix = seriesCnt > 1 ? labelModel.get([
                'series',
                'multiple',
                'prefix'
            ]) : labelModel.get([
                'series',
                'single',
                'prefix'
            ]);
            ariaLabel += replace(prefix, {
                seriesCount: seriesCnt
            });
            ecModel.eachSeries(function(seriesModel, idx) {
                if (idx < displaySeriesCnt) {
                    var seriesLabel = void 0;
                    var seriesName = seriesModel.get('name');
                    var withName = seriesName ? 'withName' : 'withoutName';
                    seriesLabel = seriesCnt > 1 ? labelModel.get([
                        'series',
                        'multiple',
                        withName
                    ]) : labelModel.get([
                        'series',
                        'single',
                        withName
                    ]);
                    seriesLabel = replace(seriesLabel, {
                        seriesId: seriesModel.seriesIndex,
                        seriesName: seriesModel.get('name'),
                        seriesType: getSeriesTypeName(seriesModel.subType)
                    });
                    var data = seriesModel.getData();
                    if (data.count() > maxDataCnt) {
                        // Show part of data
                        var partialLabel = labelModel.get([
                            'data',
                            'partialData'
                        ]);
                        seriesLabel += replace(partialLabel, {
                            displayCnt: maxDataCnt
                        });
                    } else {
                        seriesLabel += labelModel.get([
                            'data',
                            'allData'
                        ]);
                    }
                    var middleSeparator_1 = labelModel.get([
                        'data',
                        'separator',
                        'middle'
                    ]);
                    var endSeparator_1 = labelModel.get([
                        'data',
                        'separator',
                        'end'
                    ]);
                    var excludeDimensionId_1 = labelModel.get([
                        'data',
                        'excludeDimensionId'
                    ]);
                    var dataLabels = [];
                    for(var i = 0; i < data.count(); i++){
                        if (i < maxDataCnt) {
                            var name_1 = data.getName(i);
                            var value = !excludeDimensionId_1 ? data.getValues(i) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filter"](data.getValues(i), function(v, j) {
                                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["indexOf"](excludeDimensionId_1, j) === -1;
                            });
                            var dataLabel = labelModel.get([
                                'data',
                                name_1 ? 'withName' : 'withoutName'
                            ]);
                            dataLabels.push(replace(dataLabel, {
                                name: name_1,
                                value: value.join(middleSeparator_1)
                            }));
                        }
                    }
                    seriesLabel += dataLabels.join(middleSeparator_1) + endSeparator_1;
                    seriesLabels_1.push(seriesLabel);
                }
            });
            var separatorModel = labelModel.getModel([
                'series',
                'multiple',
                'separator'
            ]);
            var middleSeparator = separatorModel.get('middle');
            var endSeparator = separatorModel.get('end');
            ariaLabel += seriesLabels_1.join(middleSeparator) + endSeparator;
            dom.setAttribute('aria-label', ariaLabel);
        }
    }
    function replace(str, keyValues) {
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"](str)) {
            return str;
        }
        var result = str;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"](keyValues, function(value, key) {
            result = result.replace(new RegExp('\\{\\s*' + key + '\\s*\\}', 'g'), value);
        });
        return result;
    }
    function getTitle() {
        var title = ecModel.get('title');
        if (title && title.length) {
            title = title[0];
        }
        return title && title.text;
    }
    function getSeriesTypeName(type) {
        var typeNames = ecModel.getLocaleModel().get([
            'series',
            'typeNames'
        ]);
        return typeNames[type] || typeNames.chart;
    }
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/preprocessor/helper/compatStyle.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    ()=>globalCompatStyle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.29.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/log.js [app-client] (ecmascript)");
;
;
;
var each = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"];
var isObject = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"];
var POSSIBLE_STYLES = [
    'areaStyle',
    'lineStyle',
    'nodeStyle',
    'linkStyle',
    'chordStyle',
    'label',
    'labelLine'
];
function compatEC2ItemStyle(opt) {
    var itemStyleOpt = opt && opt.itemStyle;
    if (!itemStyleOpt) {
        return;
    }
    for(var i = 0, len = POSSIBLE_STYLES.length; i < len; i++){
        var styleName = POSSIBLE_STYLES[i];
        var normalItemStyleOpt = itemStyleOpt.normal;
        var emphasisItemStyleOpt = itemStyleOpt.emphasis;
        if (normalItemStyleOpt && normalItemStyleOpt[styleName]) {
            if ("TURBOPACK compile-time truthy", 1) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deprecateReplaceLog"])("itemStyle.normal." + styleName, styleName);
            }
            opt[styleName] = opt[styleName] || {};
            if (!opt[styleName].normal) {
                opt[styleName].normal = normalItemStyleOpt[styleName];
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["merge"](opt[styleName].normal, normalItemStyleOpt[styleName]);
            }
            normalItemStyleOpt[styleName] = null;
        }
        if (emphasisItemStyleOpt && emphasisItemStyleOpt[styleName]) {
            if ("TURBOPACK compile-time truthy", 1) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deprecateReplaceLog"])("itemStyle.emphasis." + styleName, "emphasis." + styleName);
            }
            opt[styleName] = opt[styleName] || {};
            if (!opt[styleName].emphasis) {
                opt[styleName].emphasis = emphasisItemStyleOpt[styleName];
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["merge"](opt[styleName].emphasis, emphasisItemStyleOpt[styleName]);
            }
            emphasisItemStyleOpt[styleName] = null;
        }
    }
}
function convertNormalEmphasis(opt, optType, useExtend) {
    if (opt && opt[optType] && (opt[optType].normal || opt[optType].emphasis)) {
        var normalOpt = opt[optType].normal;
        var emphasisOpt = opt[optType].emphasis;
        if (normalOpt) {
            if ("TURBOPACK compile-time truthy", 1) {
                // eslint-disable-next-line max-len
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deprecateLog"])("'normal' hierarchy in " + optType + " has been removed since 4.0. All style properties are configured in " + optType + " directly now.");
            }
            // Timeline controlStyle has other properties besides normal and emphasis
            if (useExtend) {
                opt[optType].normal = opt[optType].emphasis = null;
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaults"](opt[optType], normalOpt);
            } else {
                opt[optType] = normalOpt;
            }
        }
        if (emphasisOpt) {
            if ("TURBOPACK compile-time truthy", 1) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deprecateLog"])(optType + ".emphasis has been changed to emphasis." + optType + " since 4.0");
            }
            opt.emphasis = opt.emphasis || {};
            opt.emphasis[optType] = emphasisOpt;
            // Also compat the case user mix the style and focus together in ec3 style
            // for example: { itemStyle: { normal: {}, emphasis: {focus, shadowBlur} } }
            if (emphasisOpt.focus) {
                opt.emphasis.focus = emphasisOpt.focus;
            }
            if (emphasisOpt.blurScope) {
                opt.emphasis.blurScope = emphasisOpt.blurScope;
            }
        }
    }
}
function removeEC3NormalStatus(opt) {
    convertNormalEmphasis(opt, 'itemStyle');
    convertNormalEmphasis(opt, 'lineStyle');
    convertNormalEmphasis(opt, 'areaStyle');
    convertNormalEmphasis(opt, 'label');
    convertNormalEmphasis(opt, 'labelLine');
    // treemap
    convertNormalEmphasis(opt, 'upperLabel');
    // graph
    convertNormalEmphasis(opt, 'edgeLabel');
}
function compatTextStyle(opt, propName) {
    // Check whether is not object (string\null\undefined ...)
    var labelOptSingle = isObject(opt) && opt[propName];
    var textStyle = isObject(labelOptSingle) && labelOptSingle.textStyle;
    if (textStyle) {
        if ("TURBOPACK compile-time truthy", 1) {
            // eslint-disable-next-line max-len
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deprecateLog"])("textStyle hierarchy in " + propName + " has been removed since 4.0. All textStyle properties are configured in " + propName + " directly now.");
        }
        for(var i = 0, len = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TEXT_STYLE_OPTIONS"].length; i < len; i++){
            var textPropName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TEXT_STYLE_OPTIONS"][i];
            if (textStyle.hasOwnProperty(textPropName)) {
                labelOptSingle[textPropName] = textStyle[textPropName];
            }
        }
    }
}
function compatEC3CommonStyles(opt) {
    if (opt) {
        removeEC3NormalStatus(opt);
        compatTextStyle(opt, 'label');
        opt.emphasis && compatTextStyle(opt.emphasis, 'label');
    }
}
function processSeries(seriesOpt) {
    if (!isObject(seriesOpt)) {
        return;
    }
    compatEC2ItemStyle(seriesOpt);
    removeEC3NormalStatus(seriesOpt);
    compatTextStyle(seriesOpt, 'label');
    // treemap
    compatTextStyle(seriesOpt, 'upperLabel');
    // graph
    compatTextStyle(seriesOpt, 'edgeLabel');
    if (seriesOpt.emphasis) {
        compatTextStyle(seriesOpt.emphasis, 'label');
        // treemap
        compatTextStyle(seriesOpt.emphasis, 'upperLabel');
        // graph
        compatTextStyle(seriesOpt.emphasis, 'edgeLabel');
    }
    var markPoint = seriesOpt.markPoint;
    if (markPoint) {
        compatEC2ItemStyle(markPoint);
        compatEC3CommonStyles(markPoint);
    }
    var markLine = seriesOpt.markLine;
    if (markLine) {
        compatEC2ItemStyle(markLine);
        compatEC3CommonStyles(markLine);
    }
    var markArea = seriesOpt.markArea;
    if (markArea) {
        compatEC3CommonStyles(markArea);
    }
    var data = seriesOpt.data;
    // Break with ec3: if `setOption` again, there may be no `type` in option,
    // then the backward compat based on option type will not be performed.
    if (seriesOpt.type === 'graph') {
        data = data || seriesOpt.nodes;
        var edgeData = seriesOpt.links || seriesOpt.edges;
        if (edgeData && !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTypedArray"](edgeData)) {
            for(var i = 0; i < edgeData.length; i++){
                compatEC3CommonStyles(edgeData[i]);
            }
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"](seriesOpt.categories, function(opt) {
            removeEC3NormalStatus(opt);
        });
    }
    if (data && !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTypedArray"](data)) {
        for(var i = 0; i < data.length; i++){
            compatEC3CommonStyles(data[i]);
        }
    }
    // mark point data
    markPoint = seriesOpt.markPoint;
    if (markPoint && markPoint.data) {
        var mpData = markPoint.data;
        for(var i = 0; i < mpData.length; i++){
            compatEC3CommonStyles(mpData[i]);
        }
    }
    // mark line data
    markLine = seriesOpt.markLine;
    if (markLine && markLine.data) {
        var mlData = markLine.data;
        for(var i = 0; i < mlData.length; i++){
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"](mlData[i])) {
                compatEC3CommonStyles(mlData[i][0]);
                compatEC3CommonStyles(mlData[i][1]);
            } else {
                compatEC3CommonStyles(mlData[i]);
            }
        }
    }
    // Series
    if (seriesOpt.type === 'gauge') {
        compatTextStyle(seriesOpt, 'axisLabel');
        compatTextStyle(seriesOpt, 'title');
        compatTextStyle(seriesOpt, 'detail');
    } else if (seriesOpt.type === 'treemap') {
        convertNormalEmphasis(seriesOpt.breadcrumb, 'itemStyle');
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"](seriesOpt.levels, function(opt) {
            removeEC3NormalStatus(opt);
        });
    } else if (seriesOpt.type === 'tree') {
        removeEC3NormalStatus(seriesOpt.leaves);
    }
// sunburst starts from ec4, so it does not need to compat levels.
}
function toArr(o) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"](o) ? o : o ? [
        o
    ] : [];
}
function toObj(o) {
    return (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"](o) ? o[0] : o) || {};
}
function globalCompatStyle(option, isTheme) {
    each(toArr(option.series), function(seriesOpt) {
        isObject(seriesOpt) && processSeries(seriesOpt);
    });
    var axes = [
        'xAxis',
        'yAxis',
        'radiusAxis',
        'angleAxis',
        'singleAxis',
        'parallelAxis',
        'radar'
    ];
    isTheme && axes.push('valueAxis', 'categoryAxis', 'logAxis', 'timeAxis');
    each(axes, function(axisName) {
        each(toArr(option[axisName]), function(axisOpt) {
            if (axisOpt) {
                compatTextStyle(axisOpt, 'axisLabel');
                compatTextStyle(axisOpt.axisPointer, 'label');
            }
        });
    });
    each(toArr(option.parallel), function(parallelOpt) {
        var parallelAxisDefault = parallelOpt && parallelOpt.parallelAxisDefault;
        compatTextStyle(parallelAxisDefault, 'axisLabel');
        compatTextStyle(parallelAxisDefault && parallelAxisDefault.axisPointer, 'label');
    });
    each(toArr(option.calendar), function(calendarOpt) {
        convertNormalEmphasis(calendarOpt, 'itemStyle');
        compatTextStyle(calendarOpt, 'dayLabel');
        compatTextStyle(calendarOpt, 'monthLabel');
        compatTextStyle(calendarOpt, 'yearLabel');
    });
    // radar.name.textStyle
    each(toArr(option.radar), function(radarOpt) {
        compatTextStyle(radarOpt, 'name');
        // Use axisName instead of name because component has name property
        if (radarOpt.name && radarOpt.axisName == null) {
            radarOpt.axisName = radarOpt.name;
            delete radarOpt.name;
            if ("TURBOPACK compile-time truthy", 1) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deprecateLog"])('name property in radar component has been changed to axisName');
            }
        }
        if (radarOpt.nameGap != null && radarOpt.axisNameGap == null) {
            radarOpt.axisNameGap = radarOpt.nameGap;
            delete radarOpt.nameGap;
            if ("TURBOPACK compile-time truthy", 1) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deprecateLog"])('nameGap property in radar component has been changed to axisNameGap');
            }
        }
        if ("TURBOPACK compile-time truthy", 1) {
            each(radarOpt.indicator, function(indicatorOpt) {
                if (indicatorOpt.text) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deprecateReplaceLog"])('text', 'name', 'radar.indicator');
                }
            });
        }
    });
    each(toArr(option.geo), function(geoOpt) {
        if (isObject(geoOpt)) {
            compatEC3CommonStyles(geoOpt);
            each(toArr(geoOpt.regions), function(regionObj) {
                compatEC3CommonStyles(regionObj);
            });
        }
    });
    each(toArr(option.timeline), function(timelineOpt) {
        compatEC3CommonStyles(timelineOpt);
        convertNormalEmphasis(timelineOpt, 'label');
        convertNormalEmphasis(timelineOpt, 'itemStyle');
        convertNormalEmphasis(timelineOpt, 'controlStyle', true);
        var data = timelineOpt.data;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"](data) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"](data, function(item) {
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"](item)) {
                convertNormalEmphasis(item, 'label');
                convertNormalEmphasis(item, 'itemStyle');
            }
        });
    });
    each(toArr(option.toolbox), function(toolboxOpt) {
        convertNormalEmphasis(toolboxOpt, 'iconStyle');
        each(toolboxOpt.feature, function(featureOpt) {
            convertNormalEmphasis(featureOpt, 'iconStyle');
        });
    });
    compatTextStyle(toObj(option.axisPointer), 'label');
    compatTextStyle(toObj(option.tooltip).axisPointer, 'label');
// Clean logs
// storedLogs = {};
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/preprocessor/backwardCompat.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    ()=>globalBackwardCompat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.29.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$preprocessor$2f$helper$2f$compatStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/preprocessor/helper/compatStyle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/log.js [app-client] (ecmascript)");
;
;
;
;
function get(opt, path) {
    var pathArr = path.split(',');
    var obj = opt;
    for(var i = 0; i < pathArr.length; i++){
        obj = obj && obj[pathArr[i]];
        if (obj == null) {
            break;
        }
    }
    return obj;
}
function set(opt, path, val, overwrite) {
    var pathArr = path.split(',');
    var obj = opt;
    var key;
    var i = 0;
    for(; i < pathArr.length - 1; i++){
        key = pathArr[i];
        if (obj[key] == null) {
            obj[key] = {};
        }
        obj = obj[key];
    }
    if (overwrite || obj[pathArr[i]] == null) {
        obj[pathArr[i]] = val;
    }
}
function compatLayoutProperties(option) {
    option && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(LAYOUT_PROPERTIES, function(prop) {
        if (prop[0] in option && !(prop[1] in option)) {
            option[prop[1]] = option[prop[0]];
        }
    });
}
var LAYOUT_PROPERTIES = [
    [
        'x',
        'left'
    ],
    [
        'y',
        'top'
    ],
    [
        'x2',
        'right'
    ],
    [
        'y2',
        'bottom'
    ]
];
var COMPATITABLE_COMPONENTS = [
    'grid',
    'geo',
    'parallel',
    'legend',
    'toolbox',
    'title',
    'visualMap',
    'dataZoom',
    'timeline'
];
var BAR_ITEM_STYLE_MAP = [
    [
        'borderRadius',
        'barBorderRadius'
    ],
    [
        'borderColor',
        'barBorderColor'
    ],
    [
        'borderWidth',
        'barBorderWidth'
    ]
];
function compatBarItemStyle(option) {
    var itemStyle = option && option.itemStyle;
    if (itemStyle) {
        for(var i = 0; i < BAR_ITEM_STYLE_MAP.length; i++){
            var oldName = BAR_ITEM_STYLE_MAP[i][1];
            var newName = BAR_ITEM_STYLE_MAP[i][0];
            if (itemStyle[oldName] != null) {
                itemStyle[newName] = itemStyle[oldName];
                if ("TURBOPACK compile-time truthy", 1) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deprecateReplaceLog"])(oldName, newName);
                }
            }
        }
    }
}
function compatPieLabel(option) {
    if (!option) {
        return;
    }
    if (option.alignTo === 'edge' && option.margin != null && option.edgeDistance == null) {
        if ("TURBOPACK compile-time truthy", 1) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deprecateReplaceLog"])('label.margin', 'label.edgeDistance', 'pie');
        }
        option.edgeDistance = option.margin;
    }
}
function compatSunburstState(option) {
    if (!option) {
        return;
    }
    if (option.downplay && !option.blur) {
        option.blur = option.downplay;
        if ("TURBOPACK compile-time truthy", 1) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deprecateReplaceLog"])('downplay', 'blur', 'sunburst');
        }
    }
}
function compatGraphFocus(option) {
    if (!option) {
        return;
    }
    if (option.focusNodeAdjacency != null) {
        option.emphasis = option.emphasis || {};
        if (option.emphasis.focus == null) {
            if ("TURBOPACK compile-time truthy", 1) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deprecateReplaceLog"])('focusNodeAdjacency', 'emphasis: { focus: \'adjacency\'}', 'graph/sankey');
            }
            option.emphasis.focus = 'adjacency';
        }
    }
}
function traverseTree(data, cb) {
    if (data) {
        for(var i = 0; i < data.length; i++){
            cb(data[i]);
            data[i] && traverseTree(data[i].children, cb);
        }
    }
}
function globalBackwardCompat(option, isTheme) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$preprocessor$2f$helper$2f$compatStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(option, isTheme);
    // Make sure series array for model initialization.
    option.series = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeToArray"])(option.series);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(option.series, function(seriesOpt) {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"])(seriesOpt)) {
            return;
        }
        var seriesType = seriesOpt.type;
        if (seriesType === 'line') {
            if (seriesOpt.clipOverflow != null) {
                seriesOpt.clip = seriesOpt.clipOverflow;
                if ("TURBOPACK compile-time truthy", 1) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deprecateReplaceLog"])('clipOverflow', 'clip', 'line');
                }
            }
        } else if (seriesType === 'pie' || seriesType === 'gauge') {
            if (seriesOpt.clockWise != null) {
                seriesOpt.clockwise = seriesOpt.clockWise;
                if ("TURBOPACK compile-time truthy", 1) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deprecateReplaceLog"])('clockWise', 'clockwise');
                }
            }
            compatPieLabel(seriesOpt.label);
            var data = seriesOpt.data;
            if (data && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTypedArray"])(data)) {
                for(var i = 0; i < data.length; i++){
                    compatPieLabel(data[i]);
                }
            }
            if (seriesOpt.hoverOffset != null) {
                seriesOpt.emphasis = seriesOpt.emphasis || {};
                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                ;
            }
        } else if (seriesType === 'gauge') {
            var pointerColor = get(seriesOpt, 'pointer.color');
            pointerColor != null && set(seriesOpt, 'itemStyle.color', pointerColor);
        } else if (seriesType === 'bar') {
            compatBarItemStyle(seriesOpt);
            compatBarItemStyle(seriesOpt.backgroundStyle);
            compatBarItemStyle(seriesOpt.emphasis);
            var data = seriesOpt.data;
            if (data && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTypedArray"])(data)) {
                for(var i = 0; i < data.length; i++){
                    if (typeof data[i] === 'object') {
                        compatBarItemStyle(data[i]);
                        compatBarItemStyle(data[i] && data[i].emphasis);
                    }
                }
            }
        } else if (seriesType === 'sunburst') {
            var highlightPolicy = seriesOpt.highlightPolicy;
            if (highlightPolicy) {
                seriesOpt.emphasis = seriesOpt.emphasis || {};
                if (!seriesOpt.emphasis.focus) {
                    seriesOpt.emphasis.focus = highlightPolicy;
                    if ("TURBOPACK compile-time truthy", 1) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deprecateReplaceLog"])('highlightPolicy', 'emphasis.focus', 'sunburst');
                    }
                }
            }
            compatSunburstState(seriesOpt);
            traverseTree(seriesOpt.data, compatSunburstState);
        } else if (seriesType === 'graph' || seriesType === 'sankey') {
            compatGraphFocus(seriesOpt);
        // TODO nodes, edges?
        } else if (seriesType === 'map') {
            if (seriesOpt.mapType && !seriesOpt.map) {
                if ("TURBOPACK compile-time truthy", 1) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deprecateReplaceLog"])('mapType', 'map', 'map');
                }
                seriesOpt.map = seriesOpt.mapType;
            }
            if (seriesOpt.mapLocation) {
                if ("TURBOPACK compile-time truthy", 1) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deprecateLog"])('`mapLocation` is not used anymore.');
                }
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaults"])(seriesOpt, seriesOpt.mapLocation);
            }
        }
        if (seriesOpt.hoverAnimation != null) {
            seriesOpt.emphasis = seriesOpt.emphasis || {};
            if (seriesOpt.emphasis && seriesOpt.emphasis.scale == null) {
                if ("TURBOPACK compile-time truthy", 1) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deprecateReplaceLog"])('hoverAnimation', 'emphasis.scale');
                }
                seriesOpt.emphasis.scale = seriesOpt.hoverAnimation;
            }
        }
        compatLayoutProperties(seriesOpt);
    });
    // dataRange has changed to visualMap
    if (option.dataRange) {
        option.visualMap = option.dataRange;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(COMPATITABLE_COMPONENTS, function(componentName) {
        var options = option[componentName];
        if (options) {
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"])(options)) {
                options = [
                    options
                ];
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(options, function(option) {
                compatLayoutProperties(option);
            });
        }
    });
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/processor/dataStack.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    ()=>dataStack
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/number.js [app-client] (ecmascript)");
;
;
function dataStack(ecModel) {
    var stackInfoMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createHashMap"])();
    ecModel.eachSeries(function(seriesModel) {
        var stack = seriesModel.get('stack');
        // Compatible: when `stack` is set as '', do not stack.
        if (stack) {
            var stackInfoList = stackInfoMap.get(stack) || stackInfoMap.set(stack, []);
            var data = seriesModel.getData();
            var stackInfo = {
                // Used for calculate axis extent automatically.
                // TODO: Type getCalculationInfo return more specific type?
                stackResultDimension: data.getCalculationInfo('stackResultDimension'),
                stackedOverDimension: data.getCalculationInfo('stackedOverDimension'),
                stackedDimension: data.getCalculationInfo('stackedDimension'),
                stackedByDimension: data.getCalculationInfo('stackedByDimension'),
                isStackedByIndex: data.getCalculationInfo('isStackedByIndex'),
                data: data,
                seriesModel: seriesModel
            };
            // If stacked on axis that do not support data stack.
            if (!stackInfo.stackedDimension || !(stackInfo.isStackedByIndex || stackInfo.stackedByDimension)) {
                return;
            }
            stackInfoList.push(stackInfo);
        }
    });
    // Process each stack group
    stackInfoMap.each(function(stackInfoList) {
        if (stackInfoList.length === 0) {
            return;
        }
        // Check if stack order needs to be reversed
        var firstSeries = stackInfoList[0].seriesModel;
        var stackOrder = firstSeries.get('stackOrder') || 'seriesAsc';
        if (stackOrder === 'seriesDesc') {
            stackInfoList.reverse();
        }
        // Set stackedOnSeries for each series in the final order
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(stackInfoList, function(stackInfo, index) {
            stackInfo.data.setCalculationInfo('stackedOnSeries', index > 0 ? stackInfoList[index - 1].seriesModel : null);
        });
        // Calculate stack values
        calculateStack(stackInfoList);
    });
}
function calculateStack(stackInfoList) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(stackInfoList, function(targetStackInfo, idxInStack) {
        var resultVal = [];
        var resultNaN = [
            NaN,
            NaN
        ];
        var dims = [
            targetStackInfo.stackResultDimension,
            targetStackInfo.stackedOverDimension
        ];
        var targetData = targetStackInfo.data;
        var isStackedByIndex = targetStackInfo.isStackedByIndex;
        var stackStrategy = targetStackInfo.seriesModel.get('stackStrategy') || 'samesign';
        // Should not write on raw data, because stack series model list changes
        // depending on legend selection.
        targetData.modify(dims, function(v0, v1, dataIndex) {
            var sum = targetData.get(targetStackInfo.stackedDimension, dataIndex);
            // Consider `connectNulls` of line area, if value is NaN, stackedOver
            // should also be NaN, to draw a appropriate belt area.
            if (isNaN(sum)) {
                return resultNaN;
            }
            var byValue;
            var stackedDataRawIndex;
            if (isStackedByIndex) {
                stackedDataRawIndex = targetData.getRawIndex(dataIndex);
            } else {
                byValue = targetData.get(targetStackInfo.stackedByDimension, dataIndex);
            }
            // If stackOver is NaN, chart view will render point on value start.
            var stackedOver = NaN;
            for(var j = idxInStack - 1; j >= 0; j--){
                var stackInfo = stackInfoList[j];
                // Has been optimized by inverted indices on `stackedByDimension`.
                if (!isStackedByIndex) {
                    stackedDataRawIndex = stackInfo.data.rawIndexOf(stackInfo.stackedByDimension, byValue);
                }
                if (stackedDataRawIndex >= 0) {
                    var val = stackInfo.data.getByRawIndex(stackInfo.stackResultDimension, stackedDataRawIndex);
                    // Considering positive stack, negative stack and empty data
                    if (stackStrategy === 'all' // single stack group
                     || stackStrategy === 'positive' && val > 0 || stackStrategy === 'negative' && val < 0 || stackStrategy === 'samesign' && sum >= 0 && val > 0 // All positive stack
                     || stackStrategy === 'samesign' && sum <= 0 && val < 0 // All negative stack
                    ) {
                        // The sum has to be very small to be affected by the
                        // floating arithmetic problem. An incorrect result will probably
                        // cause axis min/max to be filtered incorrectly.
                        sum = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addSafe"])(sum, val);
                        stackedOver = val;
                        break;
                    }
                }
            }
            resultVal[0] = sum;
            resultVal[1] = stackedOver;
            return resultVal;
        });
    });
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/processor/dataSample.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    ()=>dataSample
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
;
var samplers = {
    average: function(frame) {
        var sum = 0;
        var count = 0;
        for(var i = 0; i < frame.length; i++){
            if (!isNaN(frame[i])) {
                sum += frame[i];
                count++;
            }
        }
        // Return NaN if count is 0
        return count === 0 ? NaN : sum / count;
    },
    sum: function(frame) {
        var sum = 0;
        for(var i = 0; i < frame.length; i++){
            // Ignore NaN
            sum += frame[i] || 0;
        }
        return sum;
    },
    max: function(frame) {
        var max = -Infinity;
        for(var i = 0; i < frame.length; i++){
            frame[i] > max && (max = frame[i]);
        }
        // NaN will cause illegal axis extent.
        return isFinite(max) ? max : NaN;
    },
    min: function(frame) {
        var min = Infinity;
        for(var i = 0; i < frame.length; i++){
            frame[i] < min && (min = frame[i]);
        }
        // NaN will cause illegal axis extent.
        return isFinite(min) ? min : NaN;
    },
    // TODO
    // Median
    nearest: function(frame) {
        return frame[0];
    }
};
var indexSampler = function(frame) {
    return Math.round(frame.length / 2);
};
function dataSample(seriesType) {
    return {
        seriesType: seriesType,
        // FIXME:TS never used, so comment it
        // modifyOutputEnd: true,
        reset: function(seriesModel, ecModel, api) {
            var data = seriesModel.getData();
            var sampling = seriesModel.get('sampling');
            var coordSys = seriesModel.coordinateSystem;
            var count = data.count();
            // Only cartesian2d support down sampling. Disable it when there is few data.
            if (count > 10 && coordSys.type === 'cartesian2d' && sampling) {
                var baseAxis = coordSys.getBaseAxis();
                var valueAxis = coordSys.getOtherAxis(baseAxis);
                var extent = baseAxis.getExtent();
                var dpr = api.getDevicePixelRatio();
                // Coordinste system has been resized
                var size = Math.abs(extent[1] - extent[0]) * (dpr || 1);
                var rate = Math.round(count / size);
                if (isFinite(rate) && rate > 1) {
                    if (sampling === 'lttb') {
                        seriesModel.setData(data.lttbDownSample(data.mapDimension(valueAxis.dim), 1 / rate));
                    } else if (sampling === 'minmax') {
                        seriesModel.setData(data.minmaxDownSample(data.mapDimension(valueAxis.dim), 1 / rate));
                    }
                    var sampler = void 0;
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"])(sampling)) {
                        sampler = samplers[sampling];
                    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(sampling)) {
                        sampler = sampling;
                    }
                    if (sampler) {
                        // Only support sample the first dim mapped from value axis.
                        seriesModel.setData(data.downSample(data.mapDimension(valueAxis.dim), 1 / rate, sampler, indexSampler));
                    }
                }
            }
        }
    };
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/processor/dataFilter.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    ()=>dataFilter
]);
function dataFilter(seriesType) {
    return {
        seriesType: seriesType,
        reset: function(seriesModel, ecModel) {
            var legendModels = ecModel.findComponents({
                mainType: 'legend'
            });
            if (!legendModels || !legendModels.length) {
                return;
            }
            var data = seriesModel.getData();
            data.filterSelf(function(idx) {
                var name = data.getName(idx);
                // If in any legend component the status is not selected.
                for(var i = 0; i < legendModels.length; i++){
                    // @ts-ignore FIXME: LegendModel
                    if (!legendModels[i].isSelected(name)) {
                        return false;
                    }
                }
                return true;
            });
        }
    };
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/processor/negativeDataFilter.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    ()=>negativeDataFilter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
;
function negativeDataFilter(seriesType) {
    return {
        seriesType: seriesType,
        reset: function(seriesModel, ecModel) {
            var data = seriesModel.getData();
            data.filterSelf(function(idx) {
                // handle negative value condition
                var valueDim = data.mapDimension('value');
                var curValue = data.get(valueDim, idx);
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(curValue) && !isNaN(curValue) && curValue < 0) {
                    return false;
                }
                return true;
            });
        }
    };
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/view/Component.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Group.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/component.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$clazz$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/clazz.js [app-client] (ecmascript)");
;
;
;
var ComponentView = /** @class */ function() {
    function ComponentView() {
        this.group = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]();
        this.uid = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUID"]('viewComponent');
    }
    ComponentView.prototype.init = function(ecModel, api) {};
    ComponentView.prototype.render = function(model, ecModel, api, payload) {};
    ComponentView.prototype.dispose = function(ecModel, api) {};
    ComponentView.prototype.updateView = function(model, ecModel, api, payload) {
    // Do nothing;
    };
    ComponentView.prototype.updateLayout = function(model, ecModel, api, payload) {
    // Do nothing;
    };
    ComponentView.prototype.updateVisual = function(model, ecModel, api, payload) {
    // Do nothing;
    };
    /**
   * Hook for toggle blur target series.
   * Can be used in marker for blur or leave blur the markers
   */ ComponentView.prototype.toggleBlurSeries = function(seriesModels, isBlur, ecModel) {
    // Do nothing;
    };
    /**
   * Traverse the new rendered elements.
   *
   * It will traverse the new added element in progressive rendering.
   * And traverse all in normal rendering.
   */ ComponentView.prototype.eachRendered = function(cb) {
        var group = this.group;
        if (group) {
            group.traverse(cb);
        }
    };
    return ComponentView;
}();
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$clazz$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enableClassExtend"](ComponentView);
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$clazz$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enableClassManagement"](ComponentView);
const __TURBOPACK__default__export__ = ComponentView;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/view/Chart.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Group.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/component.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$clazz$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/clazz.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/states.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$task$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/core/task.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$createRenderPlanner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/helper/createRenderPlanner.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/graphic.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/log.js [app-client] (ecmascript)");
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
var inner = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeInner"]();
var renderPlanner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$createRenderPlanner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
var ChartView = /** @class */ function() {
    function ChartView() {
        this.group = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]();
        this.uid = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUID"]('viewChart');
        this.renderTask = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$task$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createTask"])({
            plan: renderTaskPlan,
            reset: renderTaskReset
        });
        this.renderTask.context = {
            view: this
        };
    }
    ChartView.prototype.init = function(ecModel, api) {};
    ChartView.prototype.render = function(seriesModel, ecModel, api, payload) {
        if ("TURBOPACK compile-time truthy", 1) {
            throw new Error('render method must been implemented');
        }
    };
    /**
   * Highlight series or specified data item.
   */ ChartView.prototype.highlight = function(seriesModel, ecModel, api, payload) {
        var data = seriesModel.getData(payload && payload.dataType);
        if (!data) {
            if ("TURBOPACK compile-time truthy", 1) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["error"])("Unknown dataType " + payload.dataType);
            }
            return;
        }
        toggleHighlight(data, payload, 'emphasis');
    };
    /**
   * Downplay series or specified data item.
   */ ChartView.prototype.downplay = function(seriesModel, ecModel, api, payload) {
        var data = seriesModel.getData(payload && payload.dataType);
        if (!data) {
            if ("TURBOPACK compile-time truthy", 1) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["error"])("Unknown dataType " + payload.dataType);
            }
            return;
        }
        toggleHighlight(data, payload, 'normal');
    };
    /**
   * Remove self.
   */ ChartView.prototype.remove = function(ecModel, api) {
        this.group.removeAll();
    };
    /**
   * Dispose self.
   */ ChartView.prototype.dispose = function(ecModel, api) {};
    ChartView.prototype.updateView = function(seriesModel, ecModel, api, payload) {
        this.render(seriesModel, ecModel, api, payload);
    };
    // FIXME never used?
    ChartView.prototype.updateLayout = function(seriesModel, ecModel, api, payload) {
        this.render(seriesModel, ecModel, api, payload);
    };
    // FIXME never used?
    ChartView.prototype.updateVisual = function(seriesModel, ecModel, api, payload) {
        this.render(seriesModel, ecModel, api, payload);
    };
    /**
   * Traverse the new rendered elements.
   *
   * It will traverse the new added element in progressive rendering.
   * And traverse all in normal rendering.
   */ ChartView.prototype.eachRendered = function(cb) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["traverseElements"])(this.group, cb);
    };
    ChartView.markUpdateMethod = function(payload, methodName) {
        inner(payload).updateMethod = methodName;
    };
    ChartView.protoInitialize = function() {
        var proto = ChartView.prototype;
        proto.type = 'chart';
    }();
    return ChartView;
}();
;
/**
 * Set state of single element
 */ function elSetState(el, state, highlightDigit) {
    if (el && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHighDownDispatcher"])(el)) {
        (state === 'emphasis' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enterEmphasis"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["leaveEmphasis"])(el, highlightDigit);
    }
}
function toggleHighlight(data, payload, state) {
    var dataIndex = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryDataIndex"](data, payload);
    var highlightDigit = payload && payload.highlightKey != null ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHighlightDigit"])(payload.highlightKey) : null;
    if (dataIndex != null) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeToArray"](dataIndex), function(dataIdx) {
            elSetState(data.getItemGraphicEl(dataIdx), state, highlightDigit);
        });
    } else {
        data.eachItemGraphicEl(function(el) {
            elSetState(el, state, highlightDigit);
        });
    }
}
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$clazz$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enableClassExtend"](ChartView, [
    'dispose'
]);
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$clazz$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enableClassManagement"](ChartView);
function renderTaskPlan(context) {
    return renderPlanner(context.model);
}
function renderTaskReset(context) {
    var seriesModel = context.model;
    var ecModel = context.ecModel;
    var api = context.api;
    var payload = context.payload;
    // FIXME: remove updateView updateVisual
    var progressiveRender = seriesModel.pipelineContext.progressiveRender;
    var view = context.view;
    var updateMethod = payload && inner(payload).updateMethod;
    var methodName = progressiveRender ? 'incrementalPrepareRender' : updateMethod && view[updateMethod] ? updateMethod : 'render';
    if (methodName !== 'render') {
        view[methodName](seriesModel, ecModel, api, payload);
    }
    return progressMethodMap[methodName];
}
var progressMethodMap = {
    incrementalPrepareRender: {
        progress: function(params, context) {
            context.view.incrementalRender(params, context.model, context.ecModel, context.api, context.payload);
        }
    },
    render: {
        // Put view.render in `progress` to support appendData. But in this case
        // view.render should not be called in reset, otherwise it will be called
        // twise. Use `forceFirstProgress` to make sure that view.render is called
        // in any cases.
        forceFirstProgress: true,
        progress: function(params, context) {
            context.view.render(context.model, context.ecModel, context.api, context.payload);
        }
    }
};
const __TURBOPACK__default__export__ = ChartView;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/loading/default.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    ()=>defaultLoading
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Group.js [app-client] (ecmascript) <export default as Group>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Rect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rect$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Rect.js [app-client] (ecmascript) <export default as Rect>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Text$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Text.js [app-client] (ecmascript) <export default as Text>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Arc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Arc$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Arc.js [app-client] (ecmascript) <export default as Arc>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/tokens.js [app-client] (ecmascript)");
;
;
;
var PI = Math.PI;
function defaultLoading(api, opts) {
    opts = opts || {};
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaults"](opts, {
        text: 'loading',
        textColor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].color.primary,
        fontSize: 12,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontFamily: 'sans-serif',
        maskColor: 'rgba(255,255,255,0.8)',
        showSpinner: true,
        color: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].color.theme[0],
        spinnerRadius: 10,
        lineWidth: 5,
        zlevel: 0
    });
    var group = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__["Group"]();
    var mask = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Rect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rect$3e$__["Rect"]({
        style: {
            fill: opts.maskColor
        },
        zlevel: opts.zlevel,
        z: 10000
    });
    group.add(mask);
    var textContent = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Text$3e$__["Text"]({
        style: {
            text: opts.text,
            fill: opts.textColor,
            fontSize: opts.fontSize,
            fontWeight: opts.fontWeight,
            fontStyle: opts.fontStyle,
            fontFamily: opts.fontFamily
        },
        zlevel: opts.zlevel,
        z: 10001
    });
    var labelRect = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Rect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rect$3e$__["Rect"]({
        style: {
            fill: 'none'
        },
        textContent: textContent,
        textConfig: {
            position: 'right',
            distance: 10
        },
        zlevel: opts.zlevel,
        z: 10001
    });
    group.add(labelRect);
    var arc;
    if (opts.showSpinner) {
        arc = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Arc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Arc$3e$__["Arc"]({
            shape: {
                startAngle: -PI / 2,
                endAngle: -PI / 2 + 0.1,
                r: opts.spinnerRadius
            },
            style: {
                stroke: opts.color,
                lineCap: 'round',
                lineWidth: opts.lineWidth
            },
            zlevel: opts.zlevel,
            z: 10001
        });
        arc.animateShape(true).when(1000, {
            endAngle: PI * 3 / 2
        }).start('circularInOut');
        arc.animateShape(true).when(1000, {
            startAngle: PI * 3 / 2
        }).delay(300).start('circularInOut');
        group.add(arc);
    }
    // Inject resize
    group.resize = function() {
        var textWidth = textContent.getBoundingRect().width;
        var r = opts.showSpinner ? opts.spinnerRadius : 0;
        // cx = (containerWidth - arcDiameter - textDistance - textWidth) / 2
        // textDistance needs to be calculated when both animation and text exist
        var cx = (api.getWidth() - r * 2 - (opts.showSpinner && textWidth ? 10 : 0) - textWidth) / 2 - (opts.showSpinner && textWidth ? 0 : 5 + textWidth / 2) + (opts.showSpinner ? 0 : textWidth / 2) + (textWidth ? 0 : r);
        var cy = api.getHeight() / 2;
        opts.showSpinner && arc.setShape({
            cx: cx,
            cy: cy
        });
        labelRect.setShape({
            x: cx - r,
            y: cy - r,
            width: r * 2,
            height: r * 2
        });
        mask.setShape({
            x: 0,
            y: 0,
            width: api.getWidth(),
            height: api.getHeight()
        });
    };
    group.resize();
    return group;
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/theme/dark.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/tokens.js [app-client] (ecmascript)");
;
var color = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].darkColor;
var backgroundColor = color.background;
var axisCommon = function() {
    return {
        axisLine: {
            lineStyle: {
                color: color.axisLine
            }
        },
        splitLine: {
            lineStyle: {
                color: color.axisSplitLine
            }
        },
        splitArea: {
            areaStyle: {
                color: [
                    color.backgroundTint,
                    color.backgroundTransparent
                ]
            }
        },
        minorSplitLine: {
            lineStyle: {
                color: color.axisMinorSplitLine
            }
        },
        axisLabel: {
            color: color.axisLabel
        },
        axisName: {}
    };
};
var matrixAxis = {
    label: {
        color: color.secondary
    },
    itemStyle: {
        borderColor: color.borderTint
    },
    dividerLineStyle: {
        color: color.border
    }
};
var theme = {
    darkMode: true,
    color: color.theme,
    backgroundColor: backgroundColor,
    axisPointer: {
        lineStyle: {
            color: color.border
        },
        crossStyle: {
            color: color.borderShade
        },
        label: {
            color: color.tertiary
        }
    },
    legend: {
        textStyle: {
            color: color.secondary
        },
        pageTextStyle: {
            color: color.tertiary
        }
    },
    textStyle: {
        color: color.secondary
    },
    title: {
        textStyle: {
            color: color.primary
        },
        subtextStyle: {
            color: color.quaternary
        }
    },
    toolbox: {
        iconStyle: {
            borderColor: color.accent50
        }
    },
    tooltip: {
        backgroundColor: color.neutral20,
        defaultBorderColor: color.border,
        textStyle: {
            color: color.tertiary
        }
    },
    dataZoom: {
        borderColor: color.accent10,
        textStyle: {
            color: color.tertiary
        },
        brushStyle: {
            color: color.backgroundTint
        },
        handleStyle: {
            color: color.neutral00,
            borderColor: color.accent20
        },
        moveHandleStyle: {
            color: color.accent40
        },
        emphasis: {
            handleStyle: {
                borderColor: color.accent50
            }
        },
        dataBackground: {
            lineStyle: {
                color: color.accent30
            },
            areaStyle: {
                color: color.accent20
            }
        },
        selectedDataBackground: {
            lineStyle: {
                color: color.accent50
            },
            areaStyle: {
                color: color.accent30
            }
        }
    },
    visualMap: {
        textStyle: {
            color: color.secondary
        },
        handleStyle: {
            borderColor: color.neutral30
        }
    },
    timeline: {
        lineStyle: {
            color: color.accent10
        },
        label: {
            color: color.tertiary
        },
        controlStyle: {
            color: color.accent30,
            borderColor: color.accent30
        }
    },
    calendar: {
        itemStyle: {
            color: color.neutral00,
            borderColor: color.neutral20
        },
        dayLabel: {
            color: color.tertiary
        },
        monthLabel: {
            color: color.secondary
        },
        yearLabel: {
            color: color.secondary
        }
    },
    matrix: {
        x: matrixAxis,
        y: matrixAxis,
        backgroundColor: {
            borderColor: color.axisLine
        },
        body: {
            itemStyle: {
                borderColor: color.borderTint
            }
        }
    },
    timeAxis: axisCommon(),
    logAxis: axisCommon(),
    valueAxis: axisCommon(),
    categoryAxis: axisCommon(),
    line: {
        symbol: 'circle'
    },
    graph: {
        color: color.theme
    },
    gauge: {
        title: {
            color: color.secondary
        },
        axisLine: {
            lineStyle: {
                color: [
                    [
                        1,
                        color.neutral05
                    ]
                ]
            }
        },
        axisLabel: {
            color: color.axisLabel
        },
        detail: {
            color: color.primary
        }
    },
    candlestick: {
        itemStyle: {
            color: '#f64e56',
            color0: '#54ea92',
            borderColor: '#f64e56',
            borderColor0: '#54ea92'
        }
    },
    funnel: {
        itemStyle: {
            borderColor: color.background
        }
    },
    radar: function() {
        var radar = axisCommon();
        radar.axisName = {
            color: color.axisLabel
        };
        radar.axisLine.lineStyle.color = color.neutral20;
        return radar;
    }(),
    treemap: {
        breadcrumb: {
            itemStyle: {
                color: color.neutral20,
                textStyle: {
                    color: color.secondary
                }
            },
            emphasis: {
                itemStyle: {
                    color: color.neutral30
                }
            }
        }
    },
    sunburst: {
        itemStyle: {
            borderColor: color.background
        }
    },
    map: {
        itemStyle: {
            borderColor: color.border,
            areaColor: color.neutral10
        },
        label: {
            color: color.tertiary
        },
        emphasis: {
            label: {
                color: color.primary
            },
            itemStyle: {
                areaColor: color.highlight
            }
        },
        select: {
            label: {
                color: color.primary
            },
            itemStyle: {
                areaColor: color.highlight
            }
        }
    },
    geo: {
        itemStyle: {
            borderColor: color.border,
            areaColor: color.neutral10
        },
        emphasis: {
            label: {
                color: color.primary
            },
            itemStyle: {
                areaColor: color.highlight
            }
        },
        select: {
            label: {
                color: color.primary
            },
            itemStyle: {
                color: color.highlight
            }
        }
    }
};
theme.categoryAxis.splitLine.show = false;
const __TURBOPACK__default__export__ = theme;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/legacy/dataSelectAction.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    "createLegacyDataSelectAction",
    ()=>createLegacyDataSelectAction,
    "handleLegacySelectEvents",
    ()=>handleLegacySelectEvents
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.29.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/log.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js [app-client] (ecmascript)");
;
;
;
function createLegacyDataSelectAction(seriesType, ecRegisterAction) {
    function getSeriesIndices(ecModel, payload) {
        var seriesIndices = [];
        ecModel.eachComponent({
            mainType: 'series',
            subType: seriesType,
            query: payload
        }, function(seriesModel) {
            seriesIndices.push(seriesModel.seriesIndex);
        });
        return seriesIndices;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])([
        [
            seriesType + 'ToggleSelect',
            'toggleSelect'
        ],
        [
            seriesType + 'Select',
            'select'
        ],
        [
            seriesType + 'UnSelect',
            'unselect'
        ]
    ], function(eventsMap) {
        ecRegisterAction(eventsMap[0], function(payload, ecModel, api) {
            payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extend"])({}, payload);
            if ("TURBOPACK compile-time truthy", 1) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deprecateReplaceLog"])(payload.type, eventsMap[1]);
            }
            api.dispatchAction((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extend"])(payload, {
                type: eventsMap[1],
                seriesIndex: getSeriesIndices(ecModel, payload)
            }));
        });
    });
}
function handleSeriesLegacySelectEvents(type, eventPostfix, ecIns, ecModel, payload) {
    var legacyEventName = type + eventPostfix;
    if (!ecIns.isSilent(legacyEventName)) {
        if ("TURBOPACK compile-time truthy", 1) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deprecateLog"])("event " + legacyEventName + " is deprecated.");
        }
        ecModel.eachComponent({
            mainType: 'series',
            subType: 'pie'
        }, function(seriesModel) {
            var seriesIndex = seriesModel.seriesIndex;
            var selectedMap = seriesModel.option.selectedMap;
            var selected = payload.selected;
            for(var i = 0; i < selected.length; i++){
                if (selected[i].seriesIndex === seriesIndex) {
                    var data = seriesModel.getData();
                    var dataIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryDataIndex"])(data, payload.fromActionPayload);
                    ecIns.trigger(legacyEventName, {
                        type: legacyEventName,
                        seriesId: seriesModel.id,
                        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"])(dataIndex) ? data.getName(dataIndex[0]) : data.getName(dataIndex),
                        selected: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"])(selectedMap) ? selectedMap : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extend"])({}, selectedMap)
                    });
                }
            }
        });
    }
}
function handleLegacySelectEvents(messageCenter, ecIns, api) {
    messageCenter.on('selectchanged', function(params) {
        var ecModel = api.getModel();
        if (params.isFromClick) {
            handleSeriesLegacySelectEvents('map', 'selectchanged', ecIns, ecModel, params);
            handleSeriesLegacySelectEvents('pie', 'selectchanged', ecIns, ecModel, params);
        } else if (params.fromAction === 'select') {
            handleSeriesLegacySelectEvents('map', 'selected', ecIns, ecModel, params);
            handleSeriesLegacySelectEvents('pie', 'selected', ecIns, ecModel, params);
        } else if (params.fromAction === 'unselect') {
            handleSeriesLegacySelectEvents('map', 'unselected', ecIns, ecModel, params);
            handleSeriesLegacySelectEvents('pie', 'unselected', ecIns, ecModel, params);
        }
    });
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/legacy/getTextRect.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    "getTextRect",
    ()=>getTextRect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Text$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Text.js [app-client] (ecmascript) <export default as Text>");
;
function getTextRect(text, font, align, verticalAlign, padding, rich, truncate, lineHeight) {
    var textEl = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Text$3e$__["Text"]({
        style: {
            text: text,
            font: font,
            align: align,
            verticalAlign: verticalAlign,
            padding: padding,
            rich: rich,
            overflow: truncate ? 'truncate' : null,
            lineHeight: lineHeight
        }
    });
    return textEl.getBoundingRect();
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/extension.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    "use",
    ()=>use
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/core/echarts.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/view/Component.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/view/Chart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/Component.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Series$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/Series.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$impl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/core/impl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$zrender$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/zrender.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$custom$2f$customSeriesRegister$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/custom/customSeriesRegister.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
var extensions = [];
var extensionRegisters = {
    registerPreprocessor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["registerPreprocessor"],
    registerProcessor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["registerProcessor"],
    registerPostInit: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["registerPostInit"],
    registerPostUpdate: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["registerPostUpdate"],
    registerUpdateLifecycle: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["registerUpdateLifecycle"],
    registerAction: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["registerAction"],
    registerCoordinateSystem: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["registerCoordinateSystem"],
    registerLayout: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["registerLayout"],
    registerVisual: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["registerVisual"],
    registerTransform: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["registerTransform"],
    registerLoading: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["registerLoading"],
    registerMap: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["registerMap"],
    registerImpl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$impl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerImpl"],
    PRIORITY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PRIORITY"],
    ComponentModel: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    ComponentView: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    SeriesModel: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Series$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    ChartView: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    // TODO Use ComponentModel and SeriesModel instead of Constructor
    registerComponentModel: function(ComponentModelClass) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].registerClass(ComponentModelClass);
    },
    registerComponentView: function(ComponentViewClass) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].registerClass(ComponentViewClass);
    },
    registerSeriesModel: function(SeriesModelClass) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Series$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].registerClass(SeriesModelClass);
    },
    registerChartView: function(ChartViewClass) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].registerClass(ChartViewClass);
    },
    registerCustomSeries: function(seriesType, renderItem) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$custom$2f$customSeriesRegister$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerCustomSeries"])(seriesType, renderItem);
    },
    registerSubTypeDefaulter: function(componentType, defaulter) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].registerSubTypeDefaulter(componentType, defaulter);
    },
    registerPainter: function(painterType, PainterCtor) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$zrender$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerPainter"])(painterType, PainterCtor);
    }
};
function use(ext) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"])(ext)) {
        // use([ChartLine, ChartBar]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(ext, function(singleExt) {
            use(singleExt);
        });
        return;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["indexOf"])(extensions, ext) >= 0) {
        return;
    }
    extensions.push(ext);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(ext)) {
        ext = {
            install: ext
        };
    }
    ext.install(extensionRegisters);
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/layout/barGrid.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    "createProgressiveLayout",
    ()=>createProgressiveLayout,
    "getLayoutOnAxis",
    ()=>getLayoutOnAxis,
    "layout",
    ()=>layout,
    "makeColumnLayout",
    ()=>makeColumnLayout,
    "prepareLayoutBarSeries",
    ()=>prepareLayoutBarSeries,
    "retrieveColumnLayout",
    ()=>retrieveColumnLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/number.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$dataStackHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/data/helper/dataStackHelper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$createRenderPlanner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/helper/createRenderPlanner.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$vendor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/vendor.js [app-client] (ecmascript)");
;
;
;
;
;
var STACK_PREFIX = '__ec_stack_';
function getSeriesStackId(seriesModel) {
    return seriesModel.get('stack') || STACK_PREFIX + seriesModel.seriesIndex;
}
function getAxisKey(axis) {
    return axis.dim + axis.index;
}
function getLayoutOnAxis(opt) {
    var params = [];
    var baseAxis = opt.axis;
    var axisKey = 'axis0';
    if (baseAxis.type !== 'category') {
        return;
    }
    var bandWidth = baseAxis.getBandWidth();
    for(var i = 0; i < opt.count || 0; i++){
        params.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaults"])({
            bandWidth: bandWidth,
            axisKey: axisKey,
            stackId: STACK_PREFIX + i
        }, opt));
    }
    var widthAndOffsets = doCalBarWidthAndOffset(params);
    var result = [];
    for(var i = 0; i < opt.count; i++){
        var item = widthAndOffsets[axisKey][STACK_PREFIX + i];
        item.offsetCenter = item.offset + item.width / 2;
        result.push(item);
    }
    return result;
}
function prepareLayoutBarSeries(seriesType, ecModel) {
    var seriesModels = [];
    ecModel.eachSeriesByType(seriesType, function(seriesModel) {
        // Check series coordinate, do layout for cartesian2d only
        if (isOnCartesian(seriesModel)) {
            seriesModels.push(seriesModel);
        }
    });
    return seriesModels;
}
/**
 * Map from (baseAxis.dim + '_' + baseAxis.index) to min gap of two adjacent
 * values.
 * This works for time axes, value axes, and log axes.
 * For a single time axis, return value is in the form like
 * {'x_0': [1000000]}.
 * The value of 1000000 is in milliseconds.
 */ function getValueAxesMinGaps(barSeries) {
    /**
   * Map from axis.index to values.
   * For a single time axis, axisValues is in the form like
   * {'x_0': [1495555200000, 1495641600000, 1495728000000]}.
   * Items in axisValues[x], e.g. 1495555200000, are time values of all
   * series.
   */ var axisValues = {};
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(barSeries, function(seriesModel) {
        var cartesian = seriesModel.coordinateSystem;
        var baseAxis = cartesian.getBaseAxis();
        if (baseAxis.type !== 'time' && baseAxis.type !== 'value') {
            return;
        }
        var data = seriesModel.getData();
        var key = baseAxis.dim + '_' + baseAxis.index;
        var dimIdx = data.getDimensionIndex(data.mapDimension(baseAxis.dim));
        var store = data.getStore();
        for(var i = 0, cnt = store.count(); i < cnt; ++i){
            var value = store.get(dimIdx, i);
            if (!axisValues[key]) {
                // No previous data for the axis
                axisValues[key] = [
                    value
                ];
            } else {
                // No value in previous series
                axisValues[key].push(value);
            }
        // Ignore duplicated time values in the same axis
        }
    });
    var axisMinGaps = {};
    for(var key in axisValues){
        if (axisValues.hasOwnProperty(key)) {
            var valuesInAxis = axisValues[key];
            if (valuesInAxis) {
                // Sort axis values into ascending order to calculate gaps
                valuesInAxis.sort(function(a, b) {
                    return a - b;
                });
                var min = null;
                for(var j = 1; j < valuesInAxis.length; ++j){
                    var delta = valuesInAxis[j] - valuesInAxis[j - 1];
                    if (delta > 0) {
                        // Ignore 0 delta because they are of the same axis value
                        min = min === null ? delta : Math.min(min, delta);
                    }
                }
                // Set to null if only have one data
                axisMinGaps[key] = min;
            }
        }
    }
    return axisMinGaps;
}
function makeColumnLayout(barSeries) {
    var axisMinGaps = getValueAxesMinGaps(barSeries);
    var seriesInfoList = [];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(barSeries, function(seriesModel) {
        var cartesian = seriesModel.coordinateSystem;
        var baseAxis = cartesian.getBaseAxis();
        var axisExtent = baseAxis.getExtent();
        var bandWidth;
        if (baseAxis.type === 'category') {
            bandWidth = baseAxis.getBandWidth();
        } else if (baseAxis.type === 'value' || baseAxis.type === 'time') {
            var key = baseAxis.dim + '_' + baseAxis.index;
            var minGap = axisMinGaps[key];
            var extentSpan = Math.abs(axisExtent[1] - axisExtent[0]);
            var scale = baseAxis.scale.getExtent();
            var scaleSpan = Math.abs(scale[1] - scale[0]);
            bandWidth = minGap ? extentSpan / scaleSpan * minGap : extentSpan; // When there is only one data value
        } else {
            var data = seriesModel.getData();
            bandWidth = Math.abs(axisExtent[1] - axisExtent[0]) / data.count();
        }
        var barWidth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parsePercent"])(seriesModel.get('barWidth'), bandWidth);
        var barMaxWidth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parsePercent"])(seriesModel.get('barMaxWidth'), bandWidth);
        var barMinWidth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parsePercent"])(// barMinWidth by default is 0.5 / 1 in cartesian. Because in value axis,
        // the auto-calculated bar width might be less than 0.5 / 1.
        seriesModel.get('barMinWidth') || (isInLargeMode(seriesModel) ? 0.5 : 1), bandWidth);
        var barGap = seriesModel.get('barGap');
        var barCategoryGap = seriesModel.get('barCategoryGap');
        var defaultBarGap = seriesModel.get('defaultBarGap');
        seriesInfoList.push({
            bandWidth: bandWidth,
            barWidth: barWidth,
            barMaxWidth: barMaxWidth,
            barMinWidth: barMinWidth,
            barGap: barGap,
            barCategoryGap: barCategoryGap,
            defaultBarGap: defaultBarGap,
            axisKey: getAxisKey(baseAxis),
            stackId: getSeriesStackId(seriesModel)
        });
    });
    return doCalBarWidthAndOffset(seriesInfoList);
}
function doCalBarWidthAndOffset(seriesInfoList) {
    // Columns info on each category axis. Key is cartesian name
    var columnsMap = {};
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(seriesInfoList, function(seriesInfo, idx) {
        var axisKey = seriesInfo.axisKey;
        var bandWidth = seriesInfo.bandWidth;
        var columnsOnAxis = columnsMap[axisKey] || {
            bandWidth: bandWidth,
            remainedWidth: bandWidth,
            autoWidthCount: 0,
            categoryGap: null,
            gap: seriesInfo.defaultBarGap || 0,
            stacks: {}
        };
        var stacks = columnsOnAxis.stacks;
        columnsMap[axisKey] = columnsOnAxis;
        var stackId = seriesInfo.stackId;
        if (!stacks[stackId]) {
            columnsOnAxis.autoWidthCount++;
        }
        stacks[stackId] = stacks[stackId] || {
            width: 0,
            maxWidth: 0
        };
        // Caution: In a single coordinate system, these barGrid attributes
        // will be shared by series. Consider that they have default values,
        // only the attributes set on the last series will work.
        // Do not change this fact unless there will be a break change.
        var barWidth = seriesInfo.barWidth;
        if (barWidth && !stacks[stackId].width) {
            // See #6312, do not restrict width.
            stacks[stackId].width = barWidth;
            barWidth = Math.min(columnsOnAxis.remainedWidth, barWidth);
            columnsOnAxis.remainedWidth -= barWidth;
        }
        var barMaxWidth = seriesInfo.barMaxWidth;
        barMaxWidth && (stacks[stackId].maxWidth = barMaxWidth);
        var barMinWidth = seriesInfo.barMinWidth;
        barMinWidth && (stacks[stackId].minWidth = barMinWidth);
        var barGap = seriesInfo.barGap;
        barGap != null && (columnsOnAxis.gap = barGap);
        var barCategoryGap = seriesInfo.barCategoryGap;
        barCategoryGap != null && (columnsOnAxis.categoryGap = barCategoryGap);
    });
    var result = {};
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(columnsMap, function(columnsOnAxis, coordSysName) {
        result[coordSysName] = {};
        var stacks = columnsOnAxis.stacks;
        var bandWidth = columnsOnAxis.bandWidth;
        var categoryGapPercent = columnsOnAxis.categoryGap;
        if (categoryGapPercent == null) {
            var columnCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keys"])(stacks).length;
            // More columns in one group
            // the spaces between group is smaller. Or the column will be too thin.
            categoryGapPercent = Math.max(35 - columnCount * 4, 15) + '%';
        }
        var categoryGap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parsePercent"])(categoryGapPercent, bandWidth);
        var barGapPercent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parsePercent"])(columnsOnAxis.gap, 1);
        var remainedWidth = columnsOnAxis.remainedWidth;
        var autoWidthCount = columnsOnAxis.autoWidthCount;
        var autoWidth = (remainedWidth - categoryGap) / (autoWidthCount + (autoWidthCount - 1) * barGapPercent);
        autoWidth = Math.max(autoWidth, 0);
        // Find if any auto calculated bar exceeded maxBarWidth
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(stacks, function(column) {
            var maxWidth = column.maxWidth;
            var minWidth = column.minWidth;
            if (!column.width) {
                var finalWidth = autoWidth;
                if (maxWidth && maxWidth < finalWidth) {
                    finalWidth = Math.min(maxWidth, remainedWidth);
                }
                // `minWidth` has higher priority. `minWidth` decide that whether the
                // bar is able to be visible. So `minWidth` should not be restricted
                // by `maxWidth` or `remainedWidth` (which is from `bandWidth`). In
                // the extreme cases for `value` axis, bars are allowed to overlap
                // with each other if `minWidth` specified.
                if (minWidth && minWidth > finalWidth) {
                    finalWidth = minWidth;
                }
                if (finalWidth !== autoWidth) {
                    column.width = finalWidth;
                    remainedWidth -= finalWidth + barGapPercent * finalWidth;
                    autoWidthCount--;
                }
            } else {
                // `barMinWidth/barMaxWidth` has higher priority than `barWidth`, as
                // CSS does. Because barWidth can be a percent value, where
                // `barMaxWidth` can be used to restrict the final width.
                var finalWidth = column.width;
                if (maxWidth) {
                    finalWidth = Math.min(finalWidth, maxWidth);
                }
                // `minWidth` has higher priority, as described above
                if (minWidth) {
                    finalWidth = Math.max(finalWidth, minWidth);
                }
                column.width = finalWidth;
                remainedWidth -= finalWidth + barGapPercent * finalWidth;
                autoWidthCount--;
            }
        });
        // Recalculate width again
        autoWidth = (remainedWidth - categoryGap) / (autoWidthCount + (autoWidthCount - 1) * barGapPercent);
        autoWidth = Math.max(autoWidth, 0);
        var widthSum = 0;
        var lastColumn;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(stacks, function(column, idx) {
            if (!column.width) {
                column.width = autoWidth;
            }
            lastColumn = column;
            widthSum += column.width * (1 + barGapPercent);
        });
        if (lastColumn) {
            widthSum -= lastColumn.width * barGapPercent;
        }
        var offset = -widthSum / 2;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(stacks, function(column, stackId) {
            result[coordSysName][stackId] = result[coordSysName][stackId] || {
                bandWidth: bandWidth,
                offset: offset,
                width: column.width
            };
            offset += column.width * (1 + barGapPercent);
        });
    });
    return result;
}
function retrieveColumnLayout(barWidthAndOffset, axis, seriesModel) {
    if (barWidthAndOffset && axis) {
        var result = barWidthAndOffset[getAxisKey(axis)];
        if (result != null && seriesModel != null) {
            return result[getSeriesStackId(seriesModel)];
        }
        return result;
    }
}
;
function layout(seriesType, ecModel) {
    var seriesModels = prepareLayoutBarSeries(seriesType, ecModel);
    var barWidthAndOffset = makeColumnLayout(seriesModels);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(seriesModels, function(seriesModel) {
        var data = seriesModel.getData();
        var cartesian = seriesModel.coordinateSystem;
        var baseAxis = cartesian.getBaseAxis();
        var stackId = getSeriesStackId(seriesModel);
        var columnLayoutInfo = barWidthAndOffset[getAxisKey(baseAxis)][stackId];
        var columnOffset = columnLayoutInfo.offset;
        var columnWidth = columnLayoutInfo.width;
        data.setLayout({
            bandWidth: columnLayoutInfo.bandWidth,
            offset: columnOffset,
            size: columnWidth
        });
    });
}
function createProgressiveLayout(seriesType) {
    return {
        seriesType: seriesType,
        plan: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$createRenderPlanner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(),
        reset: function(seriesModel) {
            if (!isOnCartesian(seriesModel)) {
                return;
            }
            var data = seriesModel.getData();
            var cartesian = seriesModel.coordinateSystem;
            var baseAxis = cartesian.getBaseAxis();
            var valueAxis = cartesian.getOtherAxis(baseAxis);
            var valueDimIdx = data.getDimensionIndex(data.mapDimension(valueAxis.dim));
            var baseDimIdx = data.getDimensionIndex(data.mapDimension(baseAxis.dim));
            var drawBackground = seriesModel.get('showBackground', true);
            var valueDim = data.mapDimension(valueAxis.dim);
            var stackResultDim = data.getCalculationInfo('stackResultDimension');
            var stacked = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$dataStackHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDimensionStacked"])(data, valueDim) && !!data.getCalculationInfo('stackedOnSeries');
            var isValueAxisH = valueAxis.isHorizontal();
            var valueAxisStart = getValueAxisStart(baseAxis, valueAxis);
            var isLarge = isInLargeMode(seriesModel);
            var barMinHeight = seriesModel.get('barMinHeight') || 0;
            var stackedDimIdx = stackResultDim && data.getDimensionIndex(stackResultDim);
            // Layout info.
            var columnWidth = data.getLayout('size');
            var columnOffset = data.getLayout('offset');
            return {
                progress: function(params, data) {
                    var count = params.count;
                    var largePoints = isLarge && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$vendor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createFloat32Array"])(count * 3);
                    var largeBackgroundPoints = isLarge && drawBackground && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$vendor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createFloat32Array"])(count * 3);
                    var largeDataIndices = isLarge && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$vendor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createFloat32Array"])(count);
                    var coordLayout = cartesian.master.getRect();
                    var bgSize = isValueAxisH ? coordLayout.width : coordLayout.height;
                    var dataIndex;
                    var store = data.getStore();
                    var idxOffset = 0;
                    while((dataIndex = params.next()) != null){
                        var value = store.get(stacked ? stackedDimIdx : valueDimIdx, dataIndex);
                        var baseValue = store.get(baseDimIdx, dataIndex);
                        var baseCoord = valueAxisStart;
                        var stackStartValue = void 0;
                        // Because of the barMinHeight, we can not use the value in
                        // stackResultDimension directly.
                        if (stacked) {
                            stackStartValue = +value - store.get(valueDimIdx, dataIndex);
                        }
                        var x = void 0;
                        var y = void 0;
                        var width = void 0;
                        var height = void 0;
                        if (isValueAxisH) {
                            var coord = cartesian.dataToPoint([
                                value,
                                baseValue
                            ]);
                            if (stacked) {
                                var startCoord = cartesian.dataToPoint([
                                    stackStartValue,
                                    baseValue
                                ]);
                                baseCoord = startCoord[0];
                            }
                            x = baseCoord;
                            y = coord[1] + columnOffset;
                            width = coord[0] - baseCoord;
                            height = columnWidth;
                            if (Math.abs(width) < barMinHeight) {
                                width = (width < 0 ? -1 : 1) * barMinHeight;
                            }
                        } else {
                            var coord = cartesian.dataToPoint([
                                baseValue,
                                value
                            ]);
                            if (stacked) {
                                var startCoord = cartesian.dataToPoint([
                                    baseValue,
                                    stackStartValue
                                ]);
                                baseCoord = startCoord[1];
                            }
                            x = coord[0] + columnOffset;
                            y = baseCoord;
                            width = columnWidth;
                            height = coord[1] - baseCoord;
                            if (Math.abs(height) < barMinHeight) {
                                // Include zero to has a positive bar
                                height = (height <= 0 ? -1 : 1) * barMinHeight;
                            }
                        }
                        if (!isLarge) {
                            data.setItemLayout(dataIndex, {
                                x: x,
                                y: y,
                                width: width,
                                height: height
                            });
                        } else {
                            largePoints[idxOffset] = x;
                            largePoints[idxOffset + 1] = y;
                            largePoints[idxOffset + 2] = isValueAxisH ? width : height;
                            if (largeBackgroundPoints) {
                                largeBackgroundPoints[idxOffset] = isValueAxisH ? coordLayout.x : x;
                                largeBackgroundPoints[idxOffset + 1] = isValueAxisH ? y : coordLayout.y;
                                largeBackgroundPoints[idxOffset + 2] = bgSize;
                            }
                            largeDataIndices[dataIndex] = dataIndex;
                        }
                        idxOffset += 3;
                    }
                    if (isLarge) {
                        data.setLayout({
                            largePoints: largePoints,
                            largeDataIndices: largeDataIndices,
                            largeBackgroundPoints: largeBackgroundPoints,
                            valueAxisHorizontal: isValueAxisH
                        });
                    }
                }
            };
        }
    };
}
function isOnCartesian(seriesModel) {
    return seriesModel.coordinateSystem && seriesModel.coordinateSystem.type === 'cartesian2d';
}
function isInLargeMode(seriesModel) {
    return seriesModel.pipelineContext && seriesModel.pipelineContext.large;
}
// See cases in `test/bar-start.html` and `#7412`, `#8747`.
function getValueAxisStart(baseAxis, valueAxis) {
    var startValue = valueAxis.model.get('startValue');
    if (!startValue) {
        startValue = 0;
    }
    return valueAxis.toGlobalCoord(valueAxis.dataToCoord(valueAxis.type === 'log' ? startValue > 0 ? startValue : 1 : startValue));
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/layout/points.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    ()=>pointsLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$createRenderPlanner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/helper/createRenderPlanner.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$dataStackHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/data/helper/dataStackHelper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$vendor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/vendor.js [app-client] (ecmascript)");
;
;
;
;
function pointsLayout(seriesType, forceStoreInTypedArray) {
    return {
        seriesType: seriesType,
        plan: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$createRenderPlanner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(),
        reset: function(seriesModel) {
            var data = seriesModel.getData();
            var coordSys = seriesModel.coordinateSystem;
            var pipelineContext = seriesModel.pipelineContext;
            var useTypedArray = forceStoreInTypedArray || pipelineContext.large;
            if (!coordSys) {
                return;
            }
            var dims = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"])(coordSys.dimensions, function(dim) {
                return data.mapDimension(dim);
            }).slice(0, 2);
            var dimLen = dims.length;
            var stackResultDim = data.getCalculationInfo('stackResultDimension');
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$dataStackHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDimensionStacked"])(data, dims[0])) {
                dims[0] = stackResultDim;
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$dataStackHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDimensionStacked"])(data, dims[1])) {
                dims[1] = stackResultDim;
            }
            var store = data.getStore();
            var dimIdx0 = data.getDimensionIndex(dims[0]);
            var dimIdx1 = data.getDimensionIndex(dims[1]);
            return dimLen && {
                progress: function(params, data) {
                    var segCount = params.end - params.start;
                    var points = useTypedArray && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$vendor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createFloat32Array"])(segCount * dimLen);
                    var tmpIn = [];
                    var tmpOut = [];
                    for(var i = params.start, offset = 0; i < params.end; i++){
                        var point = void 0;
                        if (dimLen === 1) {
                            var x = store.get(dimIdx0, i);
                            // NOTE: Make sure the second parameter is null to use default strategy.
                            point = coordSys.dataToPoint(x, null, tmpOut);
                        } else {
                            tmpIn[0] = store.get(dimIdx0, i);
                            tmpIn[1] = store.get(dimIdx1, i);
                            // Let coordinate system to handle the NaN data.
                            point = coordSys.dataToPoint(tmpIn, null, tmpOut);
                        }
                        if (useTypedArray) {
                            points[offset++] = point[0];
                            points[offset++] = point[1];
                        } else {
                            data.setItemLayout(i, point.slice());
                        }
                    }
                    useTypedArray && data.setLayout('points', points);
                }
            };
        }
    };
}
;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/layout/barPolar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/number.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$dataStackHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/data/helper/dataStackHelper.js [app-client] (ecmascript)");
;
;
;
function getSeriesStackId(seriesModel) {
    return seriesModel.get('stack') || '__ec_stack_' + seriesModel.seriesIndex;
}
function getAxisKey(polar, axis) {
    return axis.dim + polar.model.componentIndex;
}
function barLayoutPolar(seriesType, ecModel, api) {
    var lastStackCoords = {};
    var barWidthAndOffset = calRadialBar(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filter"](ecModel.getSeriesByType(seriesType), function(seriesModel) {
        return !ecModel.isSeriesFiltered(seriesModel) && seriesModel.coordinateSystem && seriesModel.coordinateSystem.type === 'polar';
    }));
    ecModel.eachSeriesByType(seriesType, function(seriesModel) {
        // Check series coordinate, do layout for polar only
        if (seriesModel.coordinateSystem.type !== 'polar') {
            return;
        }
        var data = seriesModel.getData();
        var polar = seriesModel.coordinateSystem;
        var baseAxis = polar.getBaseAxis();
        var axisKey = getAxisKey(polar, baseAxis);
        var stackId = getSeriesStackId(seriesModel);
        var columnLayoutInfo = barWidthAndOffset[axisKey][stackId];
        var columnOffset = columnLayoutInfo.offset;
        var columnWidth = columnLayoutInfo.width;
        var valueAxis = polar.getOtherAxis(baseAxis);
        var cx = seriesModel.coordinateSystem.cx;
        var cy = seriesModel.coordinateSystem.cy;
        var barMinHeight = seriesModel.get('barMinHeight') || 0;
        var barMinAngle = seriesModel.get('barMinAngle') || 0;
        lastStackCoords[stackId] = lastStackCoords[stackId] || [];
        var valueDim = data.mapDimension(valueAxis.dim);
        var baseDim = data.mapDimension(baseAxis.dim);
        var stacked = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$dataStackHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDimensionStacked"])(data, valueDim /* , baseDim */ );
        var clampLayout = baseAxis.dim !== 'radius' || !seriesModel.get('roundCap', true);
        var valueAxisModel = valueAxis.model;
        var startValue = valueAxisModel.get('startValue');
        var valueAxisStart = valueAxis.dataToCoord(startValue || 0);
        for(var idx = 0, len = data.count(); idx < len; idx++){
            var value = data.get(valueDim, idx);
            var baseValue = data.get(baseDim, idx);
            var sign = value >= 0 ? 'p' : 'n';
            var baseCoord = valueAxisStart;
            // Because of the barMinHeight, we can not use the value in
            // stackResultDimension directly.
            // Only ordinal axis can be stacked.
            if (stacked) {
                if (!lastStackCoords[stackId][baseValue]) {
                    lastStackCoords[stackId][baseValue] = {
                        p: valueAxisStart,
                        n: valueAxisStart // Negative stack
                    };
                }
                // Should also consider #4243
                baseCoord = lastStackCoords[stackId][baseValue][sign];
            }
            var r0 = void 0;
            var r = void 0;
            var startAngle = void 0;
            var endAngle = void 0;
            // radial sector
            if (valueAxis.dim === 'radius') {
                var radiusSpan = valueAxis.dataToCoord(value) - valueAxisStart;
                var angle = baseAxis.dataToCoord(baseValue);
                if (Math.abs(radiusSpan) < barMinHeight) {
                    radiusSpan = (radiusSpan < 0 ? -1 : 1) * barMinHeight;
                }
                r0 = baseCoord;
                r = baseCoord + radiusSpan;
                startAngle = angle - columnOffset;
                endAngle = startAngle - columnWidth;
                stacked && (lastStackCoords[stackId][baseValue][sign] = r);
            } else {
                var angleSpan = valueAxis.dataToCoord(value, clampLayout) - valueAxisStart;
                var radius = baseAxis.dataToCoord(baseValue);
                if (Math.abs(angleSpan) < barMinAngle) {
                    angleSpan = (angleSpan < 0 ? -1 : 1) * barMinAngle;
                }
                r0 = radius + columnOffset;
                r = r0 + columnWidth;
                startAngle = baseCoord;
                endAngle = baseCoord + angleSpan;
                // if the previous stack is at the end of the ring,
                // add a round to differentiate it from origin
                // let extent = angleAxis.getExtent();
                // let stackCoord = angle;
                // if (stackCoord === extent[0] && value > 0) {
                //     stackCoord = extent[1];
                // }
                // else if (stackCoord === extent[1] && value < 0) {
                //     stackCoord = extent[0];
                // }
                stacked && (lastStackCoords[stackId][baseValue][sign] = endAngle);
            }
            data.setItemLayout(idx, {
                cx: cx,
                cy: cy,
                r0: r0,
                r: r,
                // Consider that positive angle is anti-clockwise,
                // while positive radian of sector is clockwise
                startAngle: -startAngle * Math.PI / 180,
                endAngle: -endAngle * Math.PI / 180,
                /**
         * Keep the same logic with bar in catesion: use end value to
         * control direction. Notice that if clockwise is true (by
         * default), the sector will always draw clockwisely, no matter
         * whether endAngle is greater or less than startAngle.
         */ clockwise: startAngle >= endAngle
            });
        }
    });
}
/**
 * Calculate bar width and offset for radial bar charts
 */ function calRadialBar(barSeries) {
    // Columns info on each category axis. Key is polar name
    var columnsMap = {};
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"](barSeries, function(seriesModel, idx) {
        var data = seriesModel.getData();
        var polar = seriesModel.coordinateSystem;
        var baseAxis = polar.getBaseAxis();
        var axisKey = getAxisKey(polar, baseAxis);
        var axisExtent = baseAxis.getExtent();
        var bandWidth = baseAxis.type === 'category' ? baseAxis.getBandWidth() : Math.abs(axisExtent[1] - axisExtent[0]) / data.count();
        var columnsOnAxis = columnsMap[axisKey] || {
            bandWidth: bandWidth,
            remainedWidth: bandWidth,
            autoWidthCount: 0,
            categoryGap: '20%',
            gap: '30%',
            stacks: {}
        };
        var stacks = columnsOnAxis.stacks;
        columnsMap[axisKey] = columnsOnAxis;
        var stackId = getSeriesStackId(seriesModel);
        if (!stacks[stackId]) {
            columnsOnAxis.autoWidthCount++;
        }
        stacks[stackId] = stacks[stackId] || {
            width: 0,
            maxWidth: 0
        };
        var barWidth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parsePercent"])(seriesModel.get('barWidth'), bandWidth);
        var barMaxWidth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parsePercent"])(seriesModel.get('barMaxWidth'), bandWidth);
        var barGap = seriesModel.get('barGap');
        var barCategoryGap = seriesModel.get('barCategoryGap');
        if (barWidth && !stacks[stackId].width) {
            barWidth = Math.min(columnsOnAxis.remainedWidth, barWidth);
            stacks[stackId].width = barWidth;
            columnsOnAxis.remainedWidth -= barWidth;
        }
        barMaxWidth && (stacks[stackId].maxWidth = barMaxWidth);
        barGap != null && (columnsOnAxis.gap = barGap);
        barCategoryGap != null && (columnsOnAxis.categoryGap = barCategoryGap);
    });
    var result = {};
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"](columnsMap, function(columnsOnAxis, coordSysName) {
        result[coordSysName] = {};
        var stacks = columnsOnAxis.stacks;
        var bandWidth = columnsOnAxis.bandWidth;
        var categoryGap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parsePercent"])(columnsOnAxis.categoryGap, bandWidth);
        var barGapPercent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parsePercent"])(columnsOnAxis.gap, 1);
        var remainedWidth = columnsOnAxis.remainedWidth;
        var autoWidthCount = columnsOnAxis.autoWidthCount;
        var autoWidth = (remainedWidth - categoryGap) / (autoWidthCount + (autoWidthCount - 1) * barGapPercent);
        autoWidth = Math.max(autoWidth, 0);
        // Find if any auto calculated bar exceeded maxBarWidth
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"](stacks, function(column, stack) {
            var maxWidth = column.maxWidth;
            if (maxWidth && maxWidth < autoWidth) {
                maxWidth = Math.min(maxWidth, remainedWidth);
                if (column.width) {
                    maxWidth = Math.min(maxWidth, column.width);
                }
                remainedWidth -= maxWidth;
                column.width = maxWidth;
                autoWidthCount--;
            }
        });
        // Recalculate width again
        autoWidth = (remainedWidth - categoryGap) / (autoWidthCount + (autoWidthCount - 1) * barGapPercent);
        autoWidth = Math.max(autoWidth, 0);
        var widthSum = 0;
        var lastColumn;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"](stacks, function(column, idx) {
            if (!column.width) {
                column.width = autoWidth;
            }
            lastColumn = column;
            widthSum += column.width * (1 + barGapPercent);
        });
        if (lastColumn) {
            widthSum -= lastColumn.width * barGapPercent;
        }
        var offset = -widthSum / 2;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"](stacks, function(column, stackId) {
            result[coordSysName][stackId] = result[coordSysName][stackId] || {
                offset: offset,
                width: column.width
            };
            offset += column.width * (1 + barGapPercent);
        });
    });
    return result;
}
const __TURBOPACK__default__export__ = barLayoutPolar;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/renderer/installSVGRenderer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$svg$2f$Painter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/svg/Painter.js [app-client] (ecmascript)");
;
function install(registers) {
    registers.registerPainter('svg', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$svg$2f$Painter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/renderer/installSVGRenderer.js [app-client] (ecmascript) <export install as SVGRenderer>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SVGRenderer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$renderer$2f$installSVGRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["install"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$renderer$2f$installSVGRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/renderer/installSVGRenderer.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/renderer/installCanvasRenderer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$canvas$2f$Painter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/canvas/Painter.js [app-client] (ecmascript)");
;
function install(registers) {
    registers.registerPainter('canvas', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$canvas$2f$Painter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/renderer/installCanvasRenderer.js [app-client] (ecmascript) <export install as CanvasRenderer>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CanvasRenderer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$renderer$2f$installCanvasRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["install"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$renderer$2f$installCanvasRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/renderer/installCanvasRenderer.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/export/core.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
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
*/ // Core API from echarts/src/echarts
__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/extension.js [app-client] (ecmascript)");
// Import label layout by default.
// TODO will be treeshaked.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$installLabelLayout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/label/installLabelLayout.js [app-client] (ecmascript)");
;
;
;
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$installLabelLayout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["installLabelLayout"]);
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/export/api/helper.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
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
 * This module exposes helper functions for developing extensions.
 */ __turbopack_context__.s([
    "createList",
    ()=>createList,
    "createScale",
    ()=>createScale,
    "createTextStyle",
    ()=>createTextStyle,
    "dataStack",
    ()=>dataStack,
    "mixinAxisModelCommonMethods",
    ()=>mixinAxisModelCommonMethods
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$createSeriesData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/helper/createSeriesData.js [app-client] (ecmascript)");
// import createGraphFromNodeEdge from './chart/helper/createGraphFromNodeEdge.js';
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/axisHelper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisModelCommonMixin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/axisModelCommonMixin.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/Model.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/layout.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$dataStackHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/data/helper/dataStackHelper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/innerStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/label/labelStyle.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
function createList(seriesModel) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$createSeriesData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(null, seriesModel);
}
;
;
var dataStack = {
    isDimensionStacked: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$dataStackHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDimensionStacked"],
    enableDataStack: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$dataStackHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enableDataStack"],
    getStackedDimension: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$dataStackHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStackedDimension"]
};
;
function createScale(dataExtent, option) {
    var axisModel = option;
    if (!(option instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])) {
        axisModel = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](option);
    // FIXME
    // Currently AxisModelCommonMixin has nothing to do with the
    // the requirements of `axisHelper.createScaleByModel`. For
    // example the methods `getCategories` and `getOrdinalMeta`
    // are required for `'category'` axis, and ecModel is required
    // for `'time'` axis. But occasionally echarts-gl happened
    // to only use `'value'` axis.
    // zrUtil.mixin(axisModel, AxisModelCommonMixin);
    }
    var scale = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createScaleByModel"](axisModel);
    scale.setExtent(dataExtent[0], dataExtent[1]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["niceScaleExtent"](scale, axisModel);
    return scale;
}
function mixinAxisModelCommonMethods(Model) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixin"](Model, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisModelCommonMixin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AxisModelCommonMixin"]);
}
;
;
function createTextStyle(textStyleModel, opts) {
    opts = opts || {};
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createTextStyle"])(textStyleModel, null, null, opts.state !== 'normal');
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/export/api/helper.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createDimensions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$createDimensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDimensions"],
    "createList",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createList"],
    "createScale",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createScale"],
    "createSymbol",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$symbol$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSymbol"],
    "createTextStyle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createTextStyle"],
    "dataStack",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["dataStack"],
    "enableHoverEmphasis",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enableHoverEmphasis"],
    "getECData",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getECData"],
    "getLayoutRect",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLayoutRect"],
    "mixinAxisModelCommonMethods",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["mixinAxisModelCommonMethods"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/export/api/helper.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/layout.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/innerStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$createDimensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/data/helper/createDimensions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$symbol$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/symbol.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/states.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/export/api/number.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
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
*/ __turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/export/api/number.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MAX_SAFE_INTEGER",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_SAFE_INTEGER"],
    "asc",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asc"],
    "getPercentWithPrecision",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPercentWithPrecision"],
    "getPixelPrecision",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPixelPrecision"],
    "getPrecision",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrecision"],
    "getPrecisionSafe",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrecisionSafe"],
    "isNumeric",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumeric"],
    "isRadianAroundZero",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRadianAroundZero"],
    "linearMap",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["linearMap"],
    "nice",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nice"],
    "numericToNumber",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numericToNumber"],
    "parseDate",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseDate"],
    "parsePercent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parsePercent"],
    "quantile",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["quantile"],
    "quantity",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["quantity"],
    "quantityExponent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["quantityExponent"],
    "reformIntervals",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reformIntervals"],
    "remRadian",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["remRadian"],
    "round",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["round"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/export/api/number.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/number.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/export/api/time.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
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
*/ __turbopack_context__.s([]);
;
;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/export/api/time.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "format",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["format"],
    "parse",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseDate"],
    "roundTime",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["roundTime"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/export/api/time.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/number.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/time.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/export/api/graphic.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
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
*/ __turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/export/api/graphic.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Arc",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Arc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Arc$3e$__["Arc"],
    "BezierCurve",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$BezierCurve$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BezierCurve$3e$__["BezierCurve"],
    "BoundingRect",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$BoundingRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BoundingRect$3e$__["BoundingRect"],
    "Circle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__["Circle"],
    "CompoundPath",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$CompoundPath$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CompoundPath$3e$__["CompoundPath"],
    "Ellipse",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Ellipse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ellipse$3e$__["Ellipse"],
    "Group",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__["Group"],
    "Image",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"],
    "IncrementalDisplayable",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$IncrementalDisplayable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IncrementalDisplayable$3e$__["IncrementalDisplayable"],
    "Line",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Line$3e$__["Line"],
    "LinearGradient",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$LinearGradient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LinearGradient$3e$__["LinearGradient"],
    "Polygon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Polygon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Polygon$3e$__["Polygon"],
    "Polyline",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Polyline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Polyline$3e$__["Polyline"],
    "RadialGradient",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$RadialGradient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RadialGradient$3e$__["RadialGradient"],
    "Rect",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Rect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rect$3e$__["Rect"],
    "Ring",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Ring$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ring$3e$__["Ring"],
    "Sector",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Sector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sector$3e$__["Sector"],
    "Text",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Text$3e$__["Text"],
    "clipPointsByRect",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["clipPointsByRect"],
    "clipRectByRect",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["clipRectByRect"],
    "createIcon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createIcon"],
    "extendPath",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["extendPath"],
    "extendShape",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["extendShape"],
    "getShapeClass",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getShapeClass"],
    "getTransform",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getTransform"],
    "initProps",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initProps"],
    "makeImage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["makeImage"],
    "makePath",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["makePath"],
    "mergePath",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["mergePath"],
    "registerShape",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["registerShape"],
    "resizePath",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["resizePath"],
    "updateProps",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateProps"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/export/api/graphic.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/graphic.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/animation/basicTransition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Group.js [app-client] (ecmascript) <export default as Group>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Image.js [app-client] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Text$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Text.js [app-client] (ecmascript) <export default as Text>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Circle.js [app-client] (ecmascript) <export default as Circle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Ellipse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ellipse$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Ellipse.js [app-client] (ecmascript) <export default as Ellipse>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Sector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sector$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Sector.js [app-client] (ecmascript) <export default as Sector>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Ring$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ring$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Ring.js [app-client] (ecmascript) <export default as Ring>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Polygon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Polygon$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Polygon.js [app-client] (ecmascript) <export default as Polygon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Polyline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Polyline$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Polyline.js [app-client] (ecmascript) <export default as Polyline>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Rect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rect$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Rect.js [app-client] (ecmascript) <export default as Rect>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Line$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Line.js [app-client] (ecmascript) <export default as Line>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$BezierCurve$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BezierCurve$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/BezierCurve.js [app-client] (ecmascript) <export default as BezierCurve>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Arc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Arc$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Arc.js [app-client] (ecmascript) <export default as Arc>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$IncrementalDisplayable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IncrementalDisplayable$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/IncrementalDisplayable.js [app-client] (ecmascript) <export default as IncrementalDisplayable>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$CompoundPath$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CompoundPath$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/CompoundPath.js [app-client] (ecmascript) <export default as CompoundPath>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$LinearGradient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LinearGradient$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/LinearGradient.js [app-client] (ecmascript) <export default as LinearGradient>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$RadialGradient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RadialGradient$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/RadialGradient.js [app-client] (ecmascript) <export default as RadialGradient>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$BoundingRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BoundingRect$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/BoundingRect.js [app-client] (ecmascript) <export default as BoundingRect>");
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/export/api/format.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
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
*/ __turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/export/api/format.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addCommas",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["addCommas"],
    "capitalFirst",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["capitalFirst"],
    "encodeHTML",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeHTML"],
    "formatTime",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["formatTime"],
    "formatTpl",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["formatTpl"],
    "getTextRect",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$legacy$2f$getTextRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTextRect"],
    "getTooltipMarker",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getTooltipMarker"],
    "normalizeCssArray",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["normalizeCssArray"],
    "toCamelCase",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toCamelCase"],
    "truncateText",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$helper$2f$parseText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["truncateText"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/export/api/format.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/format.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/dom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$helper$2f$parseText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/helper/parseText.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$legacy$2f$getTextRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/legacy/getTextRect.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/export/api/util.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
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
*/ __turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/export/api/util.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "bind",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bind"],
    "clone",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clone"],
    "curry",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["curry"],
    "defaults",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaults"],
    "each",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"],
    "extend",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extend"],
    "filter",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filter"],
    "indexOf",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["indexOf"],
    "inherits",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inherits"],
    "isArray",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"],
    "isFunction",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"],
    "isObject",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"],
    "isString",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"],
    "map",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"],
    "merge",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["merge"],
    "reduce",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reduce"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/export/api/util.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/export/api.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
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
*/ // These APIs are for more advanced usages
// For example extend charts and components, creating graphic elements, formatting.
__turbopack_context__.s([
    "extendChartView",
    ()=>extendChartView,
    "extendComponentModel",
    ()=>extendComponentModel,
    "extendComponentView",
    ()=>extendComponentView,
    "extendSeriesModel",
    ()=>extendSeriesModel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/Component.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/view/Component.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Series$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/Series.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/view/Chart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$SeriesData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/data/SeriesData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$zrender$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/zrender.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$matrix$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/matrix.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$tool$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/tool/color.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/export/api/helper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/export/api/number.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/export/api/time.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/export/api/graphic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/export/api/format.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/export/api/util.js [app-client] (ecmascript)");
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
function extendComponentModel(proto) {
    var Model = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].extend(proto);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].registerClass(Model);
    return Model;
}
function extendComponentView(proto) {
    var View = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].extend(proto);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].registerClass(View);
    return View;
}
function extendSeriesModel(proto) {
    var Model = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Series$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].extend(proto);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Series$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].registerClass(Model);
    return Model;
}
function extendChartView(proto) {
    var View = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].extend(proto);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].registerClass(View);
    return View;
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/export/api.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Axis",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$Axis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "ChartView",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "ComponentModel",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "ComponentView",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "List",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$SeriesData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "Model",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "SeriesModel",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Series$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "color",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$tool$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__,
    "env",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "extendChartView",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["extendChartView"],
    "extendComponentModel",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["extendComponentModel"],
    "extendComponentView",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["extendComponentView"],
    "extendSeriesModel",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["extendSeriesModel"],
    "format",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__,
    "graphic",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__,
    "helper",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__,
    "innerDrawElementOnCanvas",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$canvas$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brushSingle"],
    "matrix",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$matrix$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__,
    "number",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__,
    "parseGeoJSON",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$geo$2f$parseGeoJson$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "parseGeoJson",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$geo$2f$parseGeoJson$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "setPlatformAPI",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setPlatformAPI"],
    "throttle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$throttle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["throttle"],
    "time",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__,
    "use",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"],
    "util",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__,
    "vector",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__,
    "zrUtil",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__,
    "zrender",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$zrender$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/export/api.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/Component.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/view/Component.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Series$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/Series.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/view/Chart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$SeriesData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/data/SeriesData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$zrender$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/zrender.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$matrix$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/matrix.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$tool$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/tool/color.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$throttle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/throttle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/export/api/helper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/extension.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/platform.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$geo$2f$parseGeoJson$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/geo/parseGeoJson.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/export/api/number.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/export/api/time.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/export/api/graphic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/export/api/format.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/export/api/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/env.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/Model.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$Axis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/Axis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$canvas$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/canvas/graphic.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/export/core.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Axis",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Axis"],
    "ChartView",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartView"],
    "ComponentModel",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentModel"],
    "ComponentView",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentView"],
    "List",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["List"],
    "Model",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Model"],
    "PRIORITY",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRIORITY"],
    "SeriesModel",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SeriesModel"],
    "color",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["color"],
    "connect",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["connect"],
    "dataTool",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataTool"],
    "dependencies",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dependencies"],
    "disConnect",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["disConnect"],
    "disconnect",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["disconnect"],
    "dispose",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dispose"],
    "env",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"],
    "extendChartView",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extendChartView"],
    "extendComponentModel",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extendComponentModel"],
    "extendComponentView",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extendComponentView"],
    "extendSeriesModel",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extendSeriesModel"],
    "format",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["format"],
    "getCoordinateSystemDimensions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoordinateSystemDimensions"],
    "getInstanceByDom",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInstanceByDom"],
    "getInstanceById",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInstanceById"],
    "getMap",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMap"],
    "graphic",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["graphic"],
    "helper",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["helper"],
    "init",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["init"],
    "innerDrawElementOnCanvas",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["innerDrawElementOnCanvas"],
    "matrix",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["matrix"],
    "number",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
    "parseGeoJSON",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseGeoJSON"],
    "parseGeoJson",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseGeoJson"],
    "registerAction",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerAction"],
    "registerCoordinateSystem",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerCoordinateSystem"],
    "registerCustomSeries",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerCustomSeries"],
    "registerLayout",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerLayout"],
    "registerLoading",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerLoading"],
    "registerLocale",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerLocale"],
    "registerMap",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerMap"],
    "registerPostInit",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerPostInit"],
    "registerPostUpdate",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerPostUpdate"],
    "registerPreprocessor",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerPreprocessor"],
    "registerProcessor",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerProcessor"],
    "registerTheme",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerTheme"],
    "registerTransform",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerTransform"],
    "registerUpdateLifecycle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerUpdateLifecycle"],
    "registerVisual",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerVisual"],
    "setCanvasCreator",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setCanvasCreator"],
    "setPlatformAPI",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setPlatformAPI"],
    "throttle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["throttle"],
    "time",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["time"],
    "use",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"],
    "util",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["util"],
    "vector",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vector"],
    "version",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["version"],
    "zrUtil",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zrUtil"],
    "zrender",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zrender"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/export/core.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/core/echarts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/export/api.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=6e80b_echarts_lib_05ada422._.js.map