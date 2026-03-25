(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/label/labelStyle.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    "LabelMarginType",
    ()=>LabelMarginType,
    "animateLabelValue",
    ()=>animateLabelValue,
    "createTextConfig",
    ()=>createTextConfig,
    "createTextStyle",
    ()=>createTextStyle,
    "getFont",
    ()=>getFont,
    "getLabelStatesModels",
    ()=>getLabelStatesModels,
    "labelInner",
    ()=>labelInner,
    "setLabelStyle",
    ()=>setLabelStyle,
    "setLabelText",
    ()=>setLabelText,
    "setLabelValueAnimation",
    ()=>setLabelValueAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.29.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Text.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/states.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/log.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/animation/basicTransition.js [app-client] (ecmascript)");
;
;
;
;
;
;
var EMPTY_OBJ = {};
function setLabelText(label, labelTexts) {
    for(var i = 0; i < __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPECIAL_STATES"].length; i++){
        var stateName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPECIAL_STATES"][i];
        var text = labelTexts[stateName];
        var state = label.ensureState(stateName);
        state.style = state.style || {};
        state.style.text = text;
    }
    var oldStates = label.currentStates.slice();
    label.clearStates(true);
    label.setStyle({
        text: labelTexts.normal
    });
    label.useStates(oldStates, true);
}
function getLabelText(opt, stateModels, interpolatedValue) {
    var labelFetcher = opt.labelFetcher;
    var labelDataIndex = opt.labelDataIndex;
    var labelDimIndex = opt.labelDimIndex;
    var normalModel = stateModels.normal;
    var baseText;
    if (labelFetcher) {
        baseText = labelFetcher.getFormattedLabel(labelDataIndex, 'normal', null, labelDimIndex, normalModel && normalModel.get('formatter'), interpolatedValue != null ? {
            interpolatedValue: interpolatedValue
        } : null);
    }
    if (baseText == null) {
        baseText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(opt.defaultText) ? opt.defaultText(labelDataIndex, opt, interpolatedValue) : opt.defaultText;
    }
    var statesText = {
        normal: baseText
    };
    for(var i = 0; i < __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPECIAL_STATES"].length; i++){
        var stateName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPECIAL_STATES"][i];
        var stateModel = stateModels[stateName];
        statesText[stateName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["retrieve2"])(labelFetcher ? labelFetcher.getFormattedLabel(labelDataIndex, stateName, null, labelDimIndex, stateModel && stateModel.get('formatter')) : null, baseText);
    }
    return statesText;
}
function setLabelStyle(targetEl, labelStatesModels, opt, stateSpecified) {
    opt = opt || EMPTY_OBJ;
    var isSetOnText = targetEl instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
    var needsCreateText = false;
    for(var i = 0; i < __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DISPLAY_STATES"].length; i++){
        var stateModel = labelStatesModels[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DISPLAY_STATES"][i]];
        if (stateModel && stateModel.getShallow('show')) {
            needsCreateText = true;
            break;
        }
    }
    var textContent = isSetOnText ? targetEl : targetEl.getTextContent();
    if (needsCreateText) {
        if (!isSetOnText) {
            // Reuse the previous
            if (!textContent) {
                textContent = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]();
                targetEl.setTextContent(textContent);
            }
            // Use same state proxy
            if (targetEl.stateProxy) {
                textContent.stateProxy = targetEl.stateProxy;
            }
        }
        var labelStatesTexts = getLabelText(opt, labelStatesModels);
        var normalModel = labelStatesModels.normal;
        var showNormal = !!normalModel.getShallow('show');
        var normalStyle = createTextStyle(normalModel, stateSpecified && stateSpecified.normal, opt, false, !isSetOnText);
        normalStyle.text = labelStatesTexts.normal;
        if (!isSetOnText) {
            // Always create new
            targetEl.setTextConfig(createTextConfig(normalModel, opt, false));
        }
        for(var i = 0; i < __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPECIAL_STATES"].length; i++){
            var stateName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPECIAL_STATES"][i];
            var stateModel = labelStatesModels[stateName];
            if (stateModel) {
                var stateObj = textContent.ensureState(stateName);
                var stateShow = !!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["retrieve2"])(stateModel.getShallow('show'), showNormal);
                if (stateShow !== showNormal) {
                    stateObj.ignore = !stateShow;
                }
                stateObj.style = createTextStyle(stateModel, stateSpecified && stateSpecified[stateName], opt, true, !isSetOnText);
                stateObj.style.text = labelStatesTexts[stateName];
                if (!isSetOnText) {
                    var targetElEmphasisState = targetEl.ensureState(stateName);
                    targetElEmphasisState.textConfig = createTextConfig(stateModel, opt, true);
                }
            }
        }
        // PENDING: if there is many requirements that emphasis position
        // need to be different from normal position, we might consider
        // auto silent is those cases.
        textContent.silent = !!normalModel.getShallow('silent');
        // Keep x and y
        if (textContent.style.x != null) {
            normalStyle.x = textContent.style.x;
        }
        if (textContent.style.y != null) {
            normalStyle.y = textContent.style.y;
        }
        textContent.ignore = !showNormal;
        // Always create new style.
        textContent.useStyle(normalStyle);
        textContent.dirty();
        if (opt.enableTextSetter) {
            labelInner(textContent).setLabelText = function(interpolatedValue) {
                var labelStatesTexts = getLabelText(opt, labelStatesModels, interpolatedValue);
                setLabelText(textContent, labelStatesTexts);
            };
        }
    } else if (textContent) {
        // Not display rich text.
        textContent.ignore = true;
    }
    targetEl.dirty();
}
;
function getLabelStatesModels(itemModel, labelName) {
    labelName = labelName || 'label';
    var statesModels = {
        normal: itemModel.getModel(labelName)
    };
    for(var i = 0; i < __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPECIAL_STATES"].length; i++){
        var stateName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPECIAL_STATES"][i];
        statesModels[stateName] = itemModel.getModel([
            stateName,
            labelName
        ]);
    }
    return statesModels;
}
function createTextStyle(textStyleModel, specifiedTextStyle, // Fixed style in the code. Can't be set by model.
opt, isNotNormal, isAttached // If text is attached on an element. If so, auto color will handling in zrender.
) {
    var textStyle = {};
    setTextStyleCommon(textStyle, textStyleModel, opt, isNotNormal, isAttached);
    specifiedTextStyle && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extend"])(textStyle, specifiedTextStyle);
    // textStyle.host && textStyle.host.dirty && textStyle.host.dirty(false);
    return textStyle;
}
function createTextConfig(textStyleModel, opt, isNotNormal) {
    opt = opt || {};
    var textConfig = {};
    var labelPosition;
    var labelRotate = textStyleModel.getShallow('rotate');
    var labelDistance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["retrieve2"])(textStyleModel.getShallow('distance'), isNotNormal ? null : 5);
    var labelOffset = textStyleModel.getShallow('offset');
    labelPosition = textStyleModel.getShallow('position') || (isNotNormal ? null : 'inside');
    // 'outside' is not a valid zr textPostion value, but used
    // in bar series, and magic type should be considered.
    labelPosition === 'outside' && (labelPosition = opt.defaultOutsidePosition || 'top');
    if (labelPosition != null) {
        textConfig.position = labelPosition;
    }
    if (labelOffset != null) {
        textConfig.offset = labelOffset;
    }
    if (labelRotate != null) {
        labelRotate *= Math.PI / 180;
        textConfig.rotation = labelRotate;
    }
    if (labelDistance != null) {
        textConfig.distance = labelDistance;
    }
    // fill and auto is determined by the color of path fill if it's not specified by developers.
    textConfig.outsideFill = textStyleModel.get('color') === 'inherit' ? opt.inheritColor || null : 'auto';
    if (opt.autoOverflowArea != null) {
        textConfig.autoOverflowArea = opt.autoOverflowArea;
    }
    if (opt.layoutRect != null) {
        textConfig.layoutRect = opt.layoutRect;
    }
    return textConfig;
}
/**
 * The uniform entry of set text style, that is, retrieve style definitions
 * from `model` and set to `textStyle` object.
 *
 * Never in merge mode, but in overwrite mode, that is, all of the text style
 * properties will be set. (Consider the states of normal and emphasis and
 * default value can be adopted, merge would make the logic too complicated
 * to manage.)
 */ function setTextStyleCommon(textStyle, textStyleModel, opt, isNotNormal, isAttached) {
    // Consider there will be abnormal when merge hover style to normal style if given default value.
    opt = opt || EMPTY_OBJ;
    var ecModel = textStyleModel.ecModel;
    var globalTextStyle = ecModel && ecModel.option.textStyle;
    // Consider case:
    // {
    //     data: [{
    //         value: 12,
    //         label: {
    //             rich: {
    //                 // no 'a' here but using parent 'a'.
    //             }
    //         }
    //     }],
    //     rich: {
    //         a: { ... }
    //     }
    // }
    var richItemNames = getRichItemNames(textStyleModel);
    var richResult;
    if (richItemNames) {
        richResult = {};
        var richInheritPlainLabelOptionName = 'richInheritPlainLabel';
        var richInheritPlainLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["retrieve2"])(textStyleModel.get(richInheritPlainLabelOptionName), ecModel ? ecModel.get(richInheritPlainLabelOptionName) : undefined);
        for(var name_1 in richItemNames){
            if (richItemNames.hasOwnProperty(name_1)) {
                // Cascade is supported in rich.
                var richTextStyle = textStyleModel.getModel([
                    'rich',
                    name_1
                ]);
                // In rich, never `disableBox`.
                // consider `label: {formatter: '{a|xx}', color: 'blue', rich: {a: {}}}`,
                // the default color `'blue'` will not be adopted if no color declared in `rich`.
                // That might confuses users. So probably we should put `textStyleModel` as the
                // root ancestor of the `richTextStyle`. But that would be a break change.
                // Since v6, the rich style inherits plain label by default
                // but this behavior can be disabled by setting `richInheritPlainLabel` to `false`.
                setTokenTextStyle(richResult[name_1] = {}, richTextStyle, globalTextStyle, textStyleModel, richInheritPlainLabel, opt, isNotNormal, isAttached, false, true);
            }
        }
    }
    if (richResult) {
        textStyle.rich = richResult;
    }
    var overflow = textStyleModel.get('overflow');
    if (overflow) {
        textStyle.overflow = overflow;
    }
    var lineOverflow = textStyleModel.get('lineOverflow');
    if (lineOverflow) {
        textStyle.lineOverflow = lineOverflow;
    }
    var labelTextStyle = textStyle;
    // `minMargin` has a higher precedence than `textMargin`, because `textMargin` is allowed
    // to be set in `defaultOption`.
    var minMargin = textStyleModel.get('minMargin');
    if (minMargin != null) {
        // `minMargin` only support number value.
        minMargin = !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(minMargin) ? 0 : minMargin / 2;
        labelTextStyle.margin = [
            minMargin,
            minMargin,
            minMargin,
            minMargin
        ];
        labelTextStyle.__marginType = LabelMarginType.minMargin;
    } else {
        var textMargin = textStyleModel.get('textMargin');
        if (textMargin != null) {
            labelTextStyle.margin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeCssArray"])(textMargin);
            labelTextStyle.__marginType = LabelMarginType.textMargin;
        }
    }
    setTokenTextStyle(textStyle, textStyleModel, globalTextStyle, null, null, opt, isNotNormal, isAttached, true, false);
}
// Consider case:
// {
//     data: [{
//         value: 12,
//         label: {
//             rich: {
//                 // no 'a' here but using parent 'a'.
//             }
//         }
//     }],
//     rich: {
//         a: { ... }
//     }
// }
// TODO TextStyleModel
function getRichItemNames(textStyleModel) {
    // Use object to remove duplicated names.
    var richItemNameMap;
    while(textStyleModel && textStyleModel !== textStyleModel.ecModel){
        var rich = (textStyleModel.option || EMPTY_OBJ).rich;
        if (rich) {
            richItemNameMap = richItemNameMap || {};
            var richKeys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keys"])(rich);
            for(var i = 0; i < richKeys.length; i++){
                var richKey = richKeys[i];
                richItemNameMap[richKey] = 1;
            }
        }
        textStyleModel = textStyleModel.parentModel;
    }
    return richItemNameMap;
}
var TEXT_PROPS_WITH_GLOBAL = [
    'fontStyle',
    'fontWeight',
    'fontSize',
    'fontFamily',
    'textShadowColor',
    'textShadowBlur',
    'textShadowOffsetX',
    'textShadowOffsetY'
];
var TEXT_PROPS_SELF = [
    'align',
    'lineHeight',
    'width',
    'height',
    'tag',
    'verticalAlign',
    'ellipsis'
];
var TEXT_PROPS_BOX = [
    'padding',
    'borderWidth',
    'borderRadius',
    'borderDashOffset',
    'backgroundColor',
    'borderColor',
    'shadowColor',
    'shadowBlur',
    'shadowOffsetX',
    'shadowOffsetY'
];
function setTokenTextStyle(textStyle, // FIXME: check/refactor for ellipsis handling of rich text.
textStyleModel, globalTextStyle, plainTextModel, richInheritPlainLabel, opt, isNotNormal, isAttached, isBlock, inRich) {
    // In merge mode, default value should not be given.
    globalTextStyle = !isNotNormal && globalTextStyle || EMPTY_OBJ;
    var inheritColor = opt && opt.inheritColor;
    var fillColor = textStyleModel.getShallow('color');
    var strokeColor = textStyleModel.getShallow('textBorderColor');
    var opacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["retrieve2"])(textStyleModel.getShallow('opacity'), globalTextStyle.opacity);
    if (fillColor === 'inherit' || fillColor === 'auto') {
        if ("TURBOPACK compile-time truthy", 1) {
            if (fillColor === 'auto') {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deprecateReplaceLog"])('color: \'auto\'', 'color: \'inherit\'');
            }
        }
        if (inheritColor) {
            fillColor = inheritColor;
        } else {
            fillColor = null;
        }
    }
    if (strokeColor === 'inherit' || strokeColor === 'auto') {
        if ("TURBOPACK compile-time truthy", 1) {
            if (strokeColor === 'auto') {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deprecateReplaceLog"])('color: \'auto\'', 'color: \'inherit\'');
            }
        }
        if (inheritColor) {
            strokeColor = inheritColor;
        } else {
            strokeColor = null;
        }
    }
    if (!isAttached) {
        // Only use default global textStyle.color if text is individual.
        // Otherwise it will use the strategy of attached text color because text may be on a path.
        fillColor = fillColor || globalTextStyle.color;
        strokeColor = strokeColor || globalTextStyle.textBorderColor;
    }
    if (fillColor != null) {
        // Might not be a string, e.g, it's a function in axisLabel case; but assume that it will
        // be erased by a correct value outside.
        textStyle.fill = fillColor;
    }
    if (strokeColor != null) {
        textStyle.stroke = strokeColor;
    }
    var textBorderWidth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["retrieve2"])(textStyleModel.getShallow('textBorderWidth'), globalTextStyle.textBorderWidth);
    if (textBorderWidth != null) {
        textStyle.lineWidth = textBorderWidth;
    }
    var textBorderType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["retrieve2"])(textStyleModel.getShallow('textBorderType'), globalTextStyle.textBorderType);
    if (textBorderType != null) {
        textStyle.lineDash = textBorderType;
    }
    var textBorderDashOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["retrieve2"])(textStyleModel.getShallow('textBorderDashOffset'), globalTextStyle.textBorderDashOffset);
    if (textBorderDashOffset != null) {
        textStyle.lineDashOffset = textBorderDashOffset;
    }
    if (!isNotNormal && opacity == null && !inRich) {
        opacity = opt && opt.defaultOpacity;
    }
    if (opacity != null) {
        textStyle.opacity = opacity;
    }
    // TODO
    if (!isNotNormal && !isAttached) {
        // Set default finally.
        if (textStyle.fill == null && opt.inheritColor) {
            textStyle.fill = opt.inheritColor;
        }
    }
    // Do not use `getFont` here, because merge should be supported, where
    // part of these properties may be changed in emphasis style, and the
    // others should remain their original value got from normal style.
    for(var i = 0; i < TEXT_PROPS_WITH_GLOBAL.length; i++){
        var key = TEXT_PROPS_WITH_GLOBAL[i];
        // props width, height, padding, margin, tag, backgroundColor, borderColor,
        // borderWidth, borderRadius, shadowColor, shadowBlur, shadowOffsetX, shadowOffsetY
        // may inappropriate to inherit from plainTextStyle.
        // And if some props is specified in default options, users may have to reset them one by one.
        // Therefore, we only allow these props to inherit from plainTextStyle.
        // `richInheritPlainLabel` is switch for backward compatibility
        var val = richInheritPlainLabel !== false && plainTextModel ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["retrieve3"])(textStyleModel.getShallow(key), plainTextModel.getShallow(key), globalTextStyle[key]) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["retrieve2"])(textStyleModel.getShallow(key), globalTextStyle[key]);
        if (val != null) {
            textStyle[key] = val;
        }
    }
    for(var i = 0; i < TEXT_PROPS_SELF.length; i++){
        var key = TEXT_PROPS_SELF[i];
        var val = textStyleModel.getShallow(key);
        if (val != null) {
            textStyle[key] = val;
        }
    }
    if (textStyle.verticalAlign == null) {
        var baseline = textStyleModel.getShallow('baseline');
        if (baseline != null) {
            textStyle.verticalAlign = baseline;
        }
    }
    if (!isBlock || !opt.disableBox) {
        for(var i = 0; i < TEXT_PROPS_BOX.length; i++){
            var key = TEXT_PROPS_BOX[i];
            var val = textStyleModel.getShallow(key);
            if (val != null) {
                textStyle[key] = val;
            }
        }
        var borderType = textStyleModel.getShallow('borderType');
        if (borderType != null) {
            textStyle.borderDash = borderType;
        }
        if ((textStyle.backgroundColor === 'auto' || textStyle.backgroundColor === 'inherit') && inheritColor) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (textStyle.backgroundColor === 'auto') {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deprecateReplaceLog"])('backgroundColor: \'auto\'', 'backgroundColor: \'inherit\'');
                }
            }
            textStyle.backgroundColor = inheritColor;
        }
        if ((textStyle.borderColor === 'auto' || textStyle.borderColor === 'inherit') && inheritColor) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (textStyle.borderColor === 'auto') {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deprecateReplaceLog"])('borderColor: \'auto\'', 'borderColor: \'inherit\'');
                }
            }
            textStyle.borderColor = inheritColor;
        }
    }
}
function getFont(opt, ecModel) {
    var gTextStyleModel = ecModel && ecModel.getModel('textStyle');
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trim"])([
        // FIXME in node-canvas fontWeight is before fontStyle
        opt.fontStyle || gTextStyleModel && gTextStyleModel.getShallow('fontStyle') || '',
        opt.fontWeight || gTextStyleModel && gTextStyleModel.getShallow('fontWeight') || '',
        (opt.fontSize || gTextStyleModel && gTextStyleModel.getShallow('fontSize') || 12) + 'px',
        opt.fontFamily || gTextStyleModel && gTextStyleModel.getShallow('fontFamily') || 'sans-serif'
    ].join(' '));
}
var labelInner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeInner"])();
function setLabelValueAnimation(label, labelStatesModels, value, getDefaultText) {
    if (!label) {
        return;
    }
    var obj = labelInner(label);
    obj.prevValue = obj.value;
    obj.value = value;
    var normalLabelModel = labelStatesModels.normal;
    obj.valueAnimation = normalLabelModel.get('valueAnimation');
    if (obj.valueAnimation) {
        obj.precision = normalLabelModel.get('precision');
        obj.defaultInterpolatedText = getDefaultText;
        obj.statesModels = labelStatesModels;
    }
}
function animateLabelValue(textEl, dataIndex, data, animatableModel, labelFetcher) {
    var labelInnerStore = labelInner(textEl);
    if (!labelInnerStore.valueAnimation || labelInnerStore.prevValue === labelInnerStore.value) {
        // Value not changed, no new label animation
        return;
    }
    var defaultInterpolatedText = labelInnerStore.defaultInterpolatedText;
    // Consider the case that being animating, do not use the `obj.value`,
    // Otherwise it will jump to the `obj.value` when this new animation started.
    var currValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["retrieve2"])(labelInnerStore.interpolatedValue, labelInnerStore.prevValue);
    var targetValue = labelInnerStore.value;
    function during(percent) {
        var interpolated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["interpolateRawValues"])(data, labelInnerStore.precision, currValue, targetValue, percent);
        labelInnerStore.interpolatedValue = percent === 1 ? null : interpolated;
        var labelText = getLabelText({
            labelDataIndex: dataIndex,
            labelFetcher: labelFetcher,
            defaultText: defaultInterpolatedText ? defaultInterpolatedText(interpolated) : interpolated + ''
        }, labelInnerStore.statesModels, interpolated);
        setLabelText(textEl, labelText);
    }
    textEl.percent = 0;
    (labelInnerStore.prevValue == null ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initProps"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateProps"])(textEl, {
        // percent is used to prevent animation from being aborted #15916
        percent: 1
    }, animatableModel, dataIndex, null, during);
}
var LabelMarginType = {
    minMargin: 1,
    textMargin: 2
};
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/label/sectorLabel.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    "createSectorCalculateTextPosition",
    ()=>createSectorCalculateTextPosition,
    "setSectorTextRotation",
    ()=>setSectorTextRotation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$contain$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/contain/text.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
;
;
function createSectorCalculateTextPosition(positionMapping, opts) {
    opts = opts || {};
    var isRoundCap = opts.isRoundCap;
    return function(out, opts, boundingRect) {
        var textPosition = opts.position;
        if (!textPosition || textPosition instanceof Array) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$contain$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateTextPosition"])(out, opts, boundingRect);
        }
        var mappedSectorPosition = positionMapping(textPosition);
        var distance = opts.distance != null ? opts.distance : 5;
        var sector = this.shape;
        var cx = sector.cx;
        var cy = sector.cy;
        var r = sector.r;
        var r0 = sector.r0;
        var middleR = (r + r0) / 2;
        var startAngle = sector.startAngle;
        var endAngle = sector.endAngle;
        var middleAngle = (startAngle + endAngle) / 2;
        var extraDist = isRoundCap ? Math.abs(r - r0) / 2 : 0;
        var mathCos = Math.cos;
        var mathSin = Math.sin;
        // base position: top-left
        var x = cx + r * mathCos(startAngle);
        var y = cy + r * mathSin(startAngle);
        var textAlign = 'left';
        var textVerticalAlign = 'top';
        switch(mappedSectorPosition){
            case 'startArc':
                x = cx + (r0 - distance) * mathCos(middleAngle);
                y = cy + (r0 - distance) * mathSin(middleAngle);
                textAlign = 'center';
                textVerticalAlign = 'top';
                break;
            case 'insideStartArc':
                x = cx + (r0 + distance) * mathCos(middleAngle);
                y = cy + (r0 + distance) * mathSin(middleAngle);
                textAlign = 'center';
                textVerticalAlign = 'bottom';
                break;
            case 'startAngle':
                x = cx + middleR * mathCos(startAngle) + adjustAngleDistanceX(startAngle, distance + extraDist, false);
                y = cy + middleR * mathSin(startAngle) + adjustAngleDistanceY(startAngle, distance + extraDist, false);
                textAlign = 'right';
                textVerticalAlign = 'middle';
                break;
            case 'insideStartAngle':
                x = cx + middleR * mathCos(startAngle) + adjustAngleDistanceX(startAngle, -distance + extraDist, false);
                y = cy + middleR * mathSin(startAngle) + adjustAngleDistanceY(startAngle, -distance + extraDist, false);
                textAlign = 'left';
                textVerticalAlign = 'middle';
                break;
            case 'middle':
                x = cx + middleR * mathCos(middleAngle);
                y = cy + middleR * mathSin(middleAngle);
                textAlign = 'center';
                textVerticalAlign = 'middle';
                break;
            case 'endArc':
                x = cx + (r + distance) * mathCos(middleAngle);
                y = cy + (r + distance) * mathSin(middleAngle);
                textAlign = 'center';
                textVerticalAlign = 'bottom';
                break;
            case 'insideEndArc':
                x = cx + (r - distance) * mathCos(middleAngle);
                y = cy + (r - distance) * mathSin(middleAngle);
                textAlign = 'center';
                textVerticalAlign = 'top';
                break;
            case 'endAngle':
                x = cx + middleR * mathCos(endAngle) + adjustAngleDistanceX(endAngle, distance + extraDist, true);
                y = cy + middleR * mathSin(endAngle) + adjustAngleDistanceY(endAngle, distance + extraDist, true);
                textAlign = 'left';
                textVerticalAlign = 'middle';
                break;
            case 'insideEndAngle':
                x = cx + middleR * mathCos(endAngle) + adjustAngleDistanceX(endAngle, -distance + extraDist, true);
                y = cy + middleR * mathSin(endAngle) + adjustAngleDistanceY(endAngle, -distance + extraDist, true);
                textAlign = 'right';
                textVerticalAlign = 'middle';
                break;
            default:
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$contain$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateTextPosition"])(out, opts, boundingRect);
        }
        out = out || {};
        out.x = x;
        out.y = y;
        out.align = textAlign;
        out.verticalAlign = textVerticalAlign;
        return out;
    };
}
function setSectorTextRotation(sector, textPosition, positionMapping, rotateType) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(rotateType)) {
        // user-set rotation
        sector.setTextConfig({
            rotation: rotateType
        });
        return;
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"])(textPosition)) {
        // user-set position, use 0 as auto rotation
        sector.setTextConfig({
            rotation: 0
        });
        return;
    }
    var shape = sector.shape;
    var startAngle = shape.clockwise ? shape.startAngle : shape.endAngle;
    var endAngle = shape.clockwise ? shape.endAngle : shape.startAngle;
    var middleAngle = (startAngle + endAngle) / 2;
    var anchorAngle;
    var mappedSectorPosition = positionMapping(textPosition);
    switch(mappedSectorPosition){
        case 'startArc':
        case 'insideStartArc':
        case 'middle':
        case 'insideEndArc':
        case 'endArc':
            anchorAngle = middleAngle;
            break;
        case 'startAngle':
        case 'insideStartAngle':
            anchorAngle = startAngle;
            break;
        case 'endAngle':
        case 'insideEndAngle':
            anchorAngle = endAngle;
            break;
        default:
            sector.setTextConfig({
                rotation: 0
            });
            return;
    }
    var rotate = Math.PI * 1.5 - anchorAngle;
    /**
   * TODO: labels with rotate > Math.PI / 2 should be rotate another
   * half round flipped to increase readability. However, only middle
   * position supports this for now, because in other positions, the
   * anchor point is not at the center of the text, so the positions
   * after rotating is not as expected.
   */ if (mappedSectorPosition === 'middle' && rotate > Math.PI / 2 && rotate < Math.PI * 1.5) {
        rotate -= Math.PI;
    }
    sector.setTextConfig({
        rotation: rotate
    });
}
function adjustAngleDistanceX(angle, distance, isEnd) {
    return distance * Math.sin(angle) * (isEnd ? -1 : 1);
}
function adjustAngleDistanceY(angle, distance, isEnd) {
    return distance * Math.cos(angle) * (isEnd ? 1 : -1);
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/label/labelGuideHelper.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    "getLabelLineStatesModels",
    ()=>getLabelLineStatesModels,
    "limitSurfaceAngle",
    ()=>limitSurfaceAngle,
    "limitTurnAngle",
    ()=>limitTurnAngle,
    "setLabelLineStyle",
    ()=>setLabelLineStyle,
    "updateLabelLinePoints",
    ()=>updateLabelLinePoints
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Point$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/Point.js [app-client] (ecmascript) <export default as Point>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Path$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Path$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Path.js [app-client] (ecmascript) <export default as Path>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Polyline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Polyline$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Polyline.js [app-client] (ecmascript) <export default as Polyline>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$PathProxy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/PathProxy.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$contain$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/contain/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$curve$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/curve.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$matrix$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/matrix.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/states.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
var PI2 = Math.PI * 2;
var CMD = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$PathProxy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].CMD;
var DEFAULT_SEARCH_SPACE = [
    'top',
    'right',
    'bottom',
    'left'
];
function getCandidateAnchor(pos, distance, rect, outPt, outDir) {
    var width = rect.width;
    var height = rect.height;
    switch(pos){
        case 'top':
            outPt.set(rect.x + width / 2, rect.y - distance);
            outDir.set(0, -1);
            break;
        case 'bottom':
            outPt.set(rect.x + width / 2, rect.y + height + distance);
            outDir.set(0, 1);
            break;
        case 'left':
            outPt.set(rect.x - distance, rect.y + height / 2);
            outDir.set(-1, 0);
            break;
        case 'right':
            outPt.set(rect.x + width + distance, rect.y + height / 2);
            outDir.set(1, 0);
            break;
    }
}
function projectPointToArc(cx, cy, r, startAngle, endAngle, anticlockwise, x, y, out) {
    x -= cx;
    y -= cy;
    var d = Math.sqrt(x * x + y * y);
    x /= d;
    y /= d;
    // Intersect point.
    var ox = x * r + cx;
    var oy = y * r + cy;
    if (Math.abs(startAngle - endAngle) % PI2 < 1e-4) {
        // Is a circle
        out[0] = ox;
        out[1] = oy;
        return d - r;
    }
    if (anticlockwise) {
        var tmp = startAngle;
        startAngle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$contain$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeRadian"])(endAngle);
        endAngle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$contain$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeRadian"])(tmp);
    } else {
        startAngle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$contain$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeRadian"])(startAngle);
        endAngle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$contain$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeRadian"])(endAngle);
    }
    if (startAngle > endAngle) {
        endAngle += PI2;
    }
    var angle = Math.atan2(y, x);
    if (angle < 0) {
        angle += PI2;
    }
    if (angle >= startAngle && angle <= endAngle || angle + PI2 >= startAngle && angle + PI2 <= endAngle) {
        // Project point is on the arc.
        out[0] = ox;
        out[1] = oy;
        return d - r;
    }
    var x1 = r * Math.cos(startAngle) + cx;
    var y1 = r * Math.sin(startAngle) + cy;
    var x2 = r * Math.cos(endAngle) + cx;
    var y2 = r * Math.sin(endAngle) + cy;
    var d1 = (x1 - x) * (x1 - x) + (y1 - y) * (y1 - y);
    var d2 = (x2 - x) * (x2 - x) + (y2 - y) * (y2 - y);
    if (d1 < d2) {
        out[0] = x1;
        out[1] = y1;
        return Math.sqrt(d1);
    } else {
        out[0] = x2;
        out[1] = y2;
        return Math.sqrt(d2);
    }
}
function projectPointToLine(x1, y1, x2, y2, x, y, out, limitToEnds) {
    var dx = x - x1;
    var dy = y - y1;
    var dx1 = x2 - x1;
    var dy1 = y2 - y1;
    var lineLen = Math.sqrt(dx1 * dx1 + dy1 * dy1);
    dx1 /= lineLen;
    dy1 /= lineLen;
    // dot product
    var projectedLen = dx * dx1 + dy * dy1;
    var t = projectedLen / lineLen;
    if (limitToEnds) {
        t = Math.min(Math.max(t, 0), 1);
    }
    t *= lineLen;
    var ox = out[0] = x1 + t * dx1;
    var oy = out[1] = y1 + t * dy1;
    return Math.sqrt((ox - x) * (ox - x) + (oy - y) * (oy - y));
}
function projectPointToRect(x1, y1, width, height, x, y, out) {
    if (width < 0) {
        x1 = x1 + width;
        width = -width;
    }
    if (height < 0) {
        y1 = y1 + height;
        height = -height;
    }
    var x2 = x1 + width;
    var y2 = y1 + height;
    var ox = out[0] = Math.min(Math.max(x, x1), x2);
    var oy = out[1] = Math.min(Math.max(y, y1), y2);
    return Math.sqrt((ox - x) * (ox - x) + (oy - y) * (oy - y));
}
var tmpPt = [];
function nearestPointOnRect(pt, rect, out) {
    var dist = projectPointToRect(rect.x, rect.y, rect.width, rect.height, pt.x, pt.y, tmpPt);
    out.set(tmpPt[0], tmpPt[1]);
    return dist;
}
/**
 * Calculate min distance corresponding point.
 * This method won't evaluate if point is in the path.
 */ function nearestPointOnPath(pt, path, out) {
    var xi = 0;
    var yi = 0;
    var x0 = 0;
    var y0 = 0;
    var x1;
    var y1;
    var minDist = Infinity;
    var data = path.data;
    var x = pt.x;
    var y = pt.y;
    for(var i = 0; i < data.length;){
        var cmd = data[i++];
        if (i === 1) {
            xi = data[i];
            yi = data[i + 1];
            x0 = xi;
            y0 = yi;
        }
        var d = minDist;
        switch(cmd){
            case CMD.M:
                // moveTo 命令重新创建一个新的 subpath, 并且更新新的起点
                // 在 closePath 的时候使用
                x0 = data[i++];
                y0 = data[i++];
                xi = x0;
                yi = y0;
                break;
            case CMD.L:
                d = projectPointToLine(xi, yi, data[i], data[i + 1], x, y, tmpPt, true);
                xi = data[i++];
                yi = data[i++];
                break;
            case CMD.C:
                d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$curve$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cubicProjectPoint"])(xi, yi, data[i++], data[i++], data[i++], data[i++], data[i], data[i + 1], x, y, tmpPt);
                xi = data[i++];
                yi = data[i++];
                break;
            case CMD.Q:
                d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$curve$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["quadraticProjectPoint"])(xi, yi, data[i++], data[i++], data[i], data[i + 1], x, y, tmpPt);
                xi = data[i++];
                yi = data[i++];
                break;
            case CMD.A:
                // TODO Arc 判断的开销比较大
                var cx = data[i++];
                var cy = data[i++];
                var rx = data[i++];
                var ry = data[i++];
                var theta = data[i++];
                var dTheta = data[i++];
                // TODO Arc 旋转
                i += 1;
                var anticlockwise = !!(1 - data[i++]);
                x1 = Math.cos(theta) * rx + cx;
                y1 = Math.sin(theta) * ry + cy;
                // 不是直接使用 arc 命令
                if (i <= 1) {
                    // 第一个命令起点还未定义
                    x0 = x1;
                    y0 = y1;
                }
                // zr 使用scale来模拟椭圆, 这里也对x做一定的缩放
                var _x = (x - cx) * ry / rx + cx;
                d = projectPointToArc(cx, cy, ry, theta, theta + dTheta, anticlockwise, _x, y, tmpPt);
                xi = Math.cos(theta + dTheta) * rx + cx;
                yi = Math.sin(theta + dTheta) * ry + cy;
                break;
            case CMD.R:
                x0 = xi = data[i++];
                y0 = yi = data[i++];
                var width = data[i++];
                var height = data[i++];
                d = projectPointToRect(x0, y0, width, height, x, y, tmpPt);
                break;
            case CMD.Z:
                d = projectPointToLine(xi, yi, x0, y0, x, y, tmpPt, true);
                xi = x0;
                yi = y0;
                break;
        }
        if (d < minDist) {
            minDist = d;
            out.set(tmpPt[0], tmpPt[1]);
        }
    }
    return minDist;
}
// Temporal variable for intermediate usage.
var pt0 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Point$3e$__["Point"]();
var pt1 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Point$3e$__["Point"]();
var pt2 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Point$3e$__["Point"]();
var dir = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Point$3e$__["Point"]();
var dir2 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Point$3e$__["Point"]();
function updateLabelLinePoints(target, labelLineModel) {
    if (!target) {
        return;
    }
    var labelLine = target.getTextGuideLine();
    var label = target.getTextContent();
    // Needs to create text guide in each charts.
    if (!(label && labelLine)) {
        return;
    }
    var labelGuideConfig = target.textGuideLineConfig || {};
    var points = [
        [
            0,
            0
        ],
        [
            0,
            0
        ],
        [
            0,
            0
        ]
    ];
    var searchSpace = labelGuideConfig.candidates || DEFAULT_SEARCH_SPACE;
    var labelRect = label.getBoundingRect().clone();
    labelRect.applyTransform(label.getComputedTransform());
    var minDist = Infinity;
    var anchorPoint = labelGuideConfig.anchor;
    var targetTransform = target.getComputedTransform();
    var targetInversedTransform = targetTransform && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$matrix$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invert"])([], targetTransform);
    var len = labelLineModel.get('length2') || 0;
    if (anchorPoint) {
        pt2.copy(anchorPoint);
    }
    for(var i = 0; i < searchSpace.length; i++){
        var candidate = searchSpace[i];
        getCandidateAnchor(candidate, 0, labelRect, pt0, dir);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Point$3e$__["Point"].scaleAndAdd(pt1, pt0, dir, len);
        // Transform to target coord space.
        pt1.transform(targetInversedTransform);
        // Note: getBoundingRect will ensure the `path` being created.
        var boundingRect = target.getBoundingRect();
        var dist = anchorPoint ? anchorPoint.distance(pt1) : target instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Path$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Path$3e$__["Path"] ? nearestPointOnPath(pt1, target.path, pt2) : nearestPointOnRect(pt1, boundingRect, pt2);
        // TODO pt2 is in the path
        if (dist < minDist) {
            minDist = dist;
            // Transform back to global space.
            pt1.transform(targetTransform);
            pt2.transform(targetTransform);
            pt2.toArray(points[0]);
            pt1.toArray(points[1]);
            pt0.toArray(points[2]);
        }
    }
    limitTurnAngle(points, labelLineModel.get('minTurnAngle'));
    labelLine.setShape({
        points: points
    });
}
// Temporal variable for the limitTurnAngle function
var tmpArr = [];
var tmpProjPoint = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Point$3e$__["Point"]();
function limitTurnAngle(linePoints, minTurnAngle) {
    if (!(minTurnAngle <= 180 && minTurnAngle > 0)) {
        return;
    }
    minTurnAngle = minTurnAngle / 180 * Math.PI;
    // The line points can be
    //      /pt1----pt2 (label)
    //     /
    // pt0/
    pt0.fromArray(linePoints[0]);
    pt1.fromArray(linePoints[1]);
    pt2.fromArray(linePoints[2]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Point$3e$__["Point"].sub(dir, pt0, pt1);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Point$3e$__["Point"].sub(dir2, pt2, pt1);
    var len1 = dir.len();
    var len2 = dir2.len();
    if (len1 < 1e-3 || len2 < 1e-3) {
        return;
    }
    dir.scale(1 / len1);
    dir2.scale(1 / len2);
    var angleCos = dir.dot(dir2);
    var minTurnAngleCos = Math.cos(minTurnAngle);
    if (minTurnAngleCos < angleCos) {
        // Smaller than minTurnAngle
        // Calculate project point of pt0 on pt1-pt2
        var d = projectPointToLine(pt1.x, pt1.y, pt2.x, pt2.y, pt0.x, pt0.y, tmpArr, false);
        tmpProjPoint.fromArray(tmpArr);
        // Calculate new projected length with limited minTurnAngle and get the new connect point
        tmpProjPoint.scaleAndAdd(dir2, d / Math.tan(Math.PI - minTurnAngle));
        // Limit the new calculated connect point between pt1 and pt2.
        var t = pt2.x !== pt1.x ? (tmpProjPoint.x - pt1.x) / (pt2.x - pt1.x) : (tmpProjPoint.y - pt1.y) / (pt2.y - pt1.y);
        if (isNaN(t)) {
            return;
        }
        if (t < 0) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Point$3e$__["Point"].copy(tmpProjPoint, pt1);
        } else if (t > 1) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Point$3e$__["Point"].copy(tmpProjPoint, pt2);
        }
        tmpProjPoint.toArray(linePoints[1]);
    }
}
function limitSurfaceAngle(linePoints, surfaceNormal, maxSurfaceAngle) {
    if (!(maxSurfaceAngle <= 180 && maxSurfaceAngle > 0)) {
        return;
    }
    maxSurfaceAngle = maxSurfaceAngle / 180 * Math.PI;
    pt0.fromArray(linePoints[0]);
    pt1.fromArray(linePoints[1]);
    pt2.fromArray(linePoints[2]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Point$3e$__["Point"].sub(dir, pt1, pt0);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Point$3e$__["Point"].sub(dir2, pt2, pt1);
    var len1 = dir.len();
    var len2 = dir2.len();
    if (len1 < 1e-3 || len2 < 1e-3) {
        return;
    }
    dir.scale(1 / len1);
    dir2.scale(1 / len2);
    var angleCos = dir.dot(surfaceNormal);
    var maxSurfaceAngleCos = Math.cos(maxSurfaceAngle);
    if (angleCos < maxSurfaceAngleCos) {
        // Calculate project point of pt0 on pt1-pt2
        var d = projectPointToLine(pt1.x, pt1.y, pt2.x, pt2.y, pt0.x, pt0.y, tmpArr, false);
        tmpProjPoint.fromArray(tmpArr);
        var HALF_PI = Math.PI / 2;
        var angle2 = Math.acos(dir2.dot(surfaceNormal));
        var newAngle = HALF_PI + angle2 - maxSurfaceAngle;
        if (newAngle >= HALF_PI) {
            // parallel
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Point$3e$__["Point"].copy(tmpProjPoint, pt2);
        } else {
            // Calculate new projected length with limited minTurnAngle and get the new connect point
            tmpProjPoint.scaleAndAdd(dir2, d / Math.tan(Math.PI / 2 - newAngle));
            // Limit the new calculated connect point between pt1 and pt2.
            var t = pt2.x !== pt1.x ? (tmpProjPoint.x - pt1.x) / (pt2.x - pt1.x) : (tmpProjPoint.y - pt1.y) / (pt2.y - pt1.y);
            if (isNaN(t)) {
                return;
            }
            if (t < 0) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Point$3e$__["Point"].copy(tmpProjPoint, pt1);
            } else if (t > 1) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Point$3e$__["Point"].copy(tmpProjPoint, pt2);
            }
        }
        tmpProjPoint.toArray(linePoints[1]);
    }
}
function setLabelLineState(labelLine, ignore, stateName, stateModel) {
    var isNormal = stateName === 'normal';
    var stateObj = isNormal ? labelLine : labelLine.ensureState(stateName);
    // Make sure display.
    stateObj.ignore = ignore;
    // Set smooth
    var smooth = stateModel.get('smooth');
    if (smooth && smooth === true) {
        smooth = 0.3;
    }
    stateObj.shape = stateObj.shape || {};
    if (smooth > 0) {
        stateObj.shape.smooth = smooth;
    }
    var styleObj = stateModel.getModel('lineStyle').getLineStyle();
    isNormal ? labelLine.useStyle(styleObj) : stateObj.style = styleObj;
}
function buildLabelLinePath(path, shape) {
    var smooth = shape.smooth;
    var points = shape.points;
    if (!points) {
        return;
    }
    path.moveTo(points[0][0], points[0][1]);
    if (smooth > 0 && points.length >= 3) {
        var len1 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dist"](points[0], points[1]);
        var len2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dist"](points[1], points[2]);
        if (!len1 || !len2) {
            path.lineTo(points[1][0], points[1][1]);
            path.lineTo(points[2][0], points[2][1]);
            return;
        }
        var moveLen = Math.min(len1, len2) * smooth;
        var midPoint0 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lerp"]([], points[1], points[0], moveLen / len1);
        var midPoint2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lerp"]([], points[1], points[2], moveLen / len2);
        var midPoint1 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lerp"]([], midPoint0, midPoint2, 0.5);
        path.bezierCurveTo(midPoint0[0], midPoint0[1], midPoint0[0], midPoint0[1], midPoint1[0], midPoint1[1]);
        path.bezierCurveTo(midPoint2[0], midPoint2[1], midPoint2[0], midPoint2[1], points[2][0], points[2][1]);
    } else {
        for(var i = 1; i < points.length; i++){
            path.lineTo(points[i][0], points[i][1]);
        }
    }
}
function setLabelLineStyle(targetEl, statesModels, defaultStyle) {
    var labelLine = targetEl.getTextGuideLine();
    var label = targetEl.getTextContent();
    if (!label) {
        // Not show label line if there is no label.
        if (labelLine) {
            targetEl.removeTextGuideLine();
        }
        return;
    }
    var normalModel = statesModels.normal;
    var showNormal = normalModel.get('show');
    var labelIgnoreNormal = label.ignore;
    for(var i = 0; i < __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DISPLAY_STATES"].length; i++){
        var stateName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DISPLAY_STATES"][i];
        var stateModel = statesModels[stateName];
        var isNormal = stateName === 'normal';
        if (stateModel) {
            var stateShow = stateModel.get('show');
            var isLabelIgnored = isNormal ? labelIgnoreNormal : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["retrieve2"])(label.states[stateName] && label.states[stateName].ignore, labelIgnoreNormal);
            if (isLabelIgnored // Not show when label is not shown in this state.
             || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["retrieve2"])(stateShow, showNormal) // Use normal state by default if not set.
            ) {
                var stateObj = isNormal ? labelLine : labelLine && labelLine.states[stateName];
                if (stateObj) {
                    stateObj.ignore = true;
                }
                if (!!labelLine) {
                    setLabelLineState(labelLine, true, stateName, stateModel);
                }
                continue;
            }
            // Create labelLine if not exists
            if (!labelLine) {
                labelLine = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Polyline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Polyline$3e$__["Polyline"]();
                targetEl.setTextGuideLine(labelLine);
                // Reset state of normal because it's new created.
                // NOTE: NORMAL should always been the first!
                if (!isNormal && (labelIgnoreNormal || !showNormal)) {
                    setLabelLineState(labelLine, true, 'normal', statesModels.normal);
                }
                // Use same state proxy.
                if (targetEl.stateProxy) {
                    labelLine.stateProxy = targetEl.stateProxy;
                }
            }
            setLabelLineState(labelLine, false, stateName, stateModel);
        }
    }
    if (labelLine) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaults"])(labelLine.style, defaultStyle);
        // Not fill.
        labelLine.style.fill = null;
        var showAbove = normalModel.get('showAbove');
        var labelLineConfig = targetEl.textGuideLineConfig = targetEl.textGuideLineConfig || {};
        labelLineConfig.showAbove = showAbove || false;
        // Custom the buildPath.
        labelLine.buildPath = buildLabelLinePath;
    }
}
function getLabelLineStatesModels(itemModel, labelLineName) {
    labelLineName = labelLineName || 'labelLine';
    var statesModels = {
        normal: itemModel.getModel(labelLineName)
    };
    for(var i = 0; i < __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPECIAL_STATES"].length; i++){
        var stateName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPECIAL_STATES"][i];
        statesModels[stateName] = itemModel.getModel([
            stateName,
            labelLineName
        ]);
    }
    return statesModels;
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/label/labelLayoutHelper.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    "computeLabelGeometry",
    ()=>computeLabelGeometry,
    "computeLabelGeometry2",
    ()=>computeLabelGeometry2,
    "ensureLabelLayoutWithGeometry",
    ()=>ensureLabelLayoutWithGeometry,
    "hideOverlap",
    ()=>hideOverlap,
    "labelIntersect",
    ()=>labelIntersect,
    "labelLayoutApplyTranslation",
    ()=>labelLayoutApplyTranslation,
    "newLabelLayoutWithGeometry",
    ()=>newLabelLayoutWithGeometry,
    "restoreIgnore",
    ()=>restoreIgnore,
    "setLabelLayoutDirty",
    ()=>setLabelLayoutDirty,
    "shiftLayoutOnXY",
    ()=>shiftLayoutOnXY
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$OrientedBoundingRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__OrientedBoundingRect$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/OrientedBoundingRect.js [app-client] (ecmascript) <export default as OrientedBoundingRect>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/graphic.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/label/labelStyle.js [app-client] (ecmascript)");
;
;
var LABEL_LAYOUT_BASE_PROPS = [
    'label',
    'labelLine',
    'layoutOption',
    'priority',
    'defaultAttr',
    'marginForce',
    'minMarginForce',
    'marginDefault',
    'suggestIgnore'
];
var LABEL_LAYOUT_DIRTY_BIT_OTHERS = 1;
var LABEL_LAYOUT_DIRTY_BIT_OBB = 2;
var LABEL_LAYOUT_DIRTY_ALL = LABEL_LAYOUT_DIRTY_BIT_OTHERS | LABEL_LAYOUT_DIRTY_BIT_OBB;
function setLabelLayoutDirty(labelGeometry, dirtyOrClear, dirtyBits) {
    dirtyBits = dirtyBits || LABEL_LAYOUT_DIRTY_ALL;
    dirtyOrClear ? labelGeometry.dirty |= dirtyBits : labelGeometry.dirty &= ~dirtyBits;
}
function isLabelLayoutDirty(labelGeometry, dirtyBits) {
    dirtyBits = dirtyBits || LABEL_LAYOUT_DIRTY_ALL;
    return labelGeometry.dirty == null || !!(labelGeometry.dirty & dirtyBits);
}
function ensureLabelLayoutWithGeometry(labelLayout) {
    if (!labelLayout) {
        return;
    }
    if (isLabelLayoutDirty(labelLayout)) {
        computeLabelGeometry(labelLayout, labelLayout.label, labelLayout);
    }
    return labelLayout;
}
function computeLabelGeometry(out, label, opt) {
    // [CAUTION] These props may be modified directly for performance consideration,
    //  therefore, do not output the internal data structure of zrender Element.
    var rawTransform = label.getComputedTransform();
    out.transform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ensureCopyTransform"])(out.transform, rawTransform);
    // NOTE: should call `getBoundingRect` after `getComputedTransform`, or may get an inaccurate bounding rect.
    //  The reason is that `getComputedTransform` calls `__host.updateInnerText()` internally, which updates the label
    //  by `textConfig` mounted on the host.
    // PENDING: add a dirty bit for that in zrender?
    var outLocalRect = out.localRect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ensureCopyRect"])(out.localRect, label.getBoundingRect());
    var labelStyleExt = label.style;
    var margin = labelStyleExt.margin;
    var marginForce = opt && opt.marginForce;
    var minMarginForce = opt && opt.minMarginForce;
    var marginDefault = opt && opt.marginDefault;
    var marginType = labelStyleExt.__marginType;
    if (marginType == null && marginDefault) {
        margin = marginDefault;
        marginType = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LabelMarginType"].textMargin;
    }
    // `textMargin` and `minMargin` can not exist both.
    for(var i = 0; i < 4; i++){
        _tmpLabelMargin[i] = marginType === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LabelMarginType"].minMargin && minMarginForce && minMarginForce[i] != null ? minMarginForce[i] : marginForce && marginForce[i] != null ? marginForce[i] : margin ? margin[i] : 0;
    }
    if (marginType === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LabelMarginType"].textMargin) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["expandOrShrinkRect"])(outLocalRect, _tmpLabelMargin, false, false);
    }
    var outGlobalRect = out.rect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ensureCopyRect"])(out.rect, outLocalRect);
    if (rawTransform) {
        outGlobalRect.applyTransform(rawTransform);
    }
    // Notice: label.style.margin is actually `minMargin / 2`, handled by `setTextStyleCommon`.
    if (marginType === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LabelMarginType"].minMargin) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["expandOrShrinkRect"])(outGlobalRect, _tmpLabelMargin, false, false);
    }
    out.axisAligned = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isBoundingRectAxisAligned"])(rawTransform);
    (out.label = out.label || {}).ignore = label.ignore;
    setLabelLayoutDirty(out, false);
    setLabelLayoutDirty(out, true, LABEL_LAYOUT_DIRTY_BIT_OBB);
    // Do not remove `obb` (if existing) for reuse, just reset the dirty bit.
    return out;
}
var _tmpLabelMargin = [
    0,
    0,
    0,
    0
];
function computeLabelGeometry2(out, rawLocalRect, rawTransform) {
    out.transform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ensureCopyTransform"])(out.transform, rawTransform);
    out.localRect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ensureCopyRect"])(out.localRect, rawLocalRect);
    out.rect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ensureCopyRect"])(out.rect, rawLocalRect);
    if (rawTransform) {
        out.rect.applyTransform(rawTransform);
    }
    out.axisAligned = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isBoundingRectAxisAligned"])(rawTransform);
    out.obb = undefined; // Reset to undefined, will be created by `ensureOBB` when using.
    (out.label = out.label || {}).ignore = false;
    return out;
}
function labelLayoutApplyTranslation(labelLayout, offset) {
    if (!labelLayout) {
        return;
    }
    labelLayout.label.x += offset.x;
    labelLayout.label.y += offset.y;
    labelLayout.label.markRedraw();
    var transform = labelLayout.transform;
    if (transform) {
        transform[4] += offset.x;
        transform[5] += offset.y;
    }
    var globalRect = labelLayout.rect;
    if (globalRect) {
        globalRect.x += offset.x;
        globalRect.y += offset.y;
    }
    var obb = labelLayout.obb;
    if (obb) {
        obb.fromBoundingRect(labelLayout.localRect, transform);
    }
}
function newLabelLayoutWithGeometry(newBaseWithDefaults, source) {
    for(var i = 0; i < LABEL_LAYOUT_BASE_PROPS.length; i++){
        var prop = LABEL_LAYOUT_BASE_PROPS[i];
        if (newBaseWithDefaults[prop] == null) {
            newBaseWithDefaults[prop] = source[prop];
        }
    }
    return ensureLabelLayoutWithGeometry(newBaseWithDefaults);
}
/**
 * Create obb if no one, can cache it.
 */ function ensureOBB(labelGeometry) {
    var obb = labelGeometry.obb;
    if (!obb || isLabelLayoutDirty(labelGeometry, LABEL_LAYOUT_DIRTY_BIT_OBB)) {
        labelGeometry.obb = obb = obb || new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$OrientedBoundingRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__OrientedBoundingRect$3e$__["OrientedBoundingRect"]();
        obb.fromBoundingRect(labelGeometry.localRect, labelGeometry.transform);
        setLabelLayoutDirty(labelGeometry, false, LABEL_LAYOUT_DIRTY_BIT_OBB);
    }
    return obb;
}
function shiftLayoutOnXY(list, xyDimIdx, // 0 for x, 1 for y
minBound, // for x, leftBound; for y, topBound
maxBound, // for x, rightBound; for y, bottomBound
// If average the shifts on all labels and add them to 0
// TODO: Not sure if should enable it.
// Pros: The angle of lines will distribute more equally
// Cons: In some layout. It may not what user wanted. like in pie. the label of last sector is usually changed unexpectedly.
balanceShift) {
    var len = list.length;
    var xyDim = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["XY"][xyDimIdx];
    var sizeDim = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WH"][xyDimIdx];
    if (len < 2) {
        return false;
    }
    list.sort(function(a, b) {
        return a.rect[xyDim] - b.rect[xyDim];
    });
    var lastPos = 0;
    var delta;
    var adjusted = false;
    // const shifts = [];
    var totalShifts = 0;
    for(var i = 0; i < len; i++){
        var item = list[i];
        var rect = item.rect;
        delta = rect[xyDim] - lastPos;
        if (delta < 0) {
            // shiftForward(i, len, -delta);
            rect[xyDim] -= delta;
            item.label[xyDim] -= delta;
            adjusted = true;
        }
        var shift = Math.max(-delta, 0);
        // shifts.push(shift);
        totalShifts += shift;
        lastPos = rect[xyDim] + rect[sizeDim];
    }
    if (totalShifts > 0 && balanceShift) {
        // Shift back to make the distribution more equally.
        shiftList(-totalShifts / len, 0, len);
    }
    // TODO bleedMargin?
    var first = list[0];
    var last = list[len - 1];
    var minGap;
    var maxGap;
    updateMinMaxGap();
    // If ends exceed two bounds, squeeze at most 80%, then take the gap of two bounds.
    minGap < 0 && squeezeGaps(-minGap, 0.8);
    maxGap < 0 && squeezeGaps(maxGap, 0.8);
    updateMinMaxGap();
    takeBoundsGap(minGap, maxGap, 1);
    takeBoundsGap(maxGap, minGap, -1);
    // Handle bailout when there is not enough space.
    updateMinMaxGap();
    if (minGap < 0) {
        squeezeWhenBailout(-minGap);
    }
    if (maxGap < 0) {
        squeezeWhenBailout(maxGap);
    }
    function updateMinMaxGap() {
        minGap = first.rect[xyDim] - minBound;
        maxGap = maxBound - last.rect[xyDim] - last.rect[sizeDim];
    }
    function takeBoundsGap(gapThisBound, gapOtherBound, moveDir) {
        if (gapThisBound < 0) {
            // Move from other gap if can.
            var moveFromMaxGap = Math.min(gapOtherBound, -gapThisBound);
            if (moveFromMaxGap > 0) {
                shiftList(moveFromMaxGap * moveDir, 0, len);
                var remained = moveFromMaxGap + gapThisBound;
                if (remained < 0) {
                    squeezeGaps(-remained * moveDir, 1);
                }
            } else {
                squeezeGaps(-gapThisBound * moveDir, 1);
            }
        }
    }
    function shiftList(delta, start, end) {
        if (delta !== 0) {
            adjusted = true;
        }
        for(var i = start; i < end; i++){
            var item = list[i];
            var rect = item.rect;
            rect[xyDim] += delta;
            item.label[xyDim] += delta;
        }
    }
    // Squeeze gaps if the labels exceed margin.
    function squeezeGaps(delta, maxSqeezePercent) {
        var gaps = [];
        var totalGaps = 0;
        for(var i = 1; i < len; i++){
            var prevItemRect = list[i - 1].rect;
            var gap = Math.max(list[i].rect[xyDim] - prevItemRect[xyDim] - prevItemRect[sizeDim], 0);
            gaps.push(gap);
            totalGaps += gap;
        }
        if (!totalGaps) {
            return;
        }
        var squeezePercent = Math.min(Math.abs(delta) / totalGaps, maxSqeezePercent);
        if (delta > 0) {
            for(var i = 0; i < len - 1; i++){
                // Distribute the shift delta to all gaps.
                var movement = gaps[i] * squeezePercent;
                // Forward
                shiftList(movement, 0, i + 1);
            }
        } else {
            // Backward
            for(var i = len - 1; i > 0; i--){
                // Distribute the shift delta to all gaps.
                var movement = gaps[i - 1] * squeezePercent;
                shiftList(-movement, i, len);
            }
        }
    }
    /**
   * Squeeze to allow overlap if there is no more space available.
   * Let other overlapping strategy like hideOverlap do the job instead of keep exceeding the bounds.
   */ function squeezeWhenBailout(delta) {
        var dir = delta < 0 ? -1 : 1;
        delta = Math.abs(delta);
        var moveForEachLabel = Math.ceil(delta / (len - 1));
        for(var i = 0; i < len - 1; i++){
            if (dir > 0) {
                // Forward
                shiftList(moveForEachLabel, 0, i + 1);
            } else {
                // Backward
                shiftList(-moveForEachLabel, len - i - 1, len);
            }
            delta -= moveForEachLabel;
            if (delta <= 0) {
                return;
            }
        }
    }
    return adjusted;
}
function restoreIgnore(labelList) {
    for(var i = 0; i < labelList.length; i++){
        var labelItem = labelList[i];
        var defaultAttr = labelItem.defaultAttr;
        var labelLine = labelItem.labelLine;
        labelItem.label.attr('ignore', defaultAttr.ignore);
        labelLine && labelLine.attr('ignore', defaultAttr.labelGuideIgnore);
    }
}
function hideOverlap(labelList) {
    var displayedLabels = [];
    // TODO, render overflow visible first, put in the displayedLabels.
    labelList.sort(function(a, b) {
        return (b.suggestIgnore ? 1 : 0) - (a.suggestIgnore ? 1 : 0) || b.priority - a.priority;
    });
    function hideEl(el) {
        if (!el.ignore) {
            // Show on emphasis.
            var emphasisState = el.ensureState('emphasis');
            if (emphasisState.ignore == null) {
                emphasisState.ignore = false;
            }
        }
        el.ignore = true;
    }
    for(var i = 0; i < labelList.length; i++){
        var labelItem = ensureLabelLayoutWithGeometry(labelList[i]);
        // The current `el.ignore` is involved, since some previous overlap
        // resolving strategies may have set `el.ignore` to true.
        if (labelItem.label.ignore) {
            continue;
        }
        var label = labelItem.label;
        var labelLine = labelItem.labelLine;
        // NOTICE: even when the with/height of globalRect of a label is 0, the label line should
        // still be displayed, since we should follow the concept of "truncation", meaning that
        // something exists even if it cannot be fully displayed. A visible label line is necessary
        // to allow users to get a tooltip with label info on hover.
        var overlapped = false;
        for(var j = 0; j < displayedLabels.length; j++){
            if (labelIntersect(labelItem, displayedLabels[j], null, {
                touchThreshold: 0.05
            })) {
                overlapped = true;
                break;
            }
        }
        // TODO Callback to determine if this overlap should be handled?
        if (overlapped) {
            hideEl(label);
            labelLine && hideEl(labelLine);
        } else {
            displayedLabels.push(labelItem);
        }
    }
}
function labelIntersect(baseLayoutInfo, targetLayoutInfo, mtv, intersectOpt) {
    if (!baseLayoutInfo || !targetLayoutInfo) {
        return false;
    }
    if (baseLayoutInfo.label && baseLayoutInfo.label.ignore || targetLayoutInfo.label && targetLayoutInfo.label.ignore) {
        return false;
    }
    // Fast rejection.
    if (!baseLayoutInfo.rect.intersect(targetLayoutInfo.rect, mtv, intersectOpt)) {
        return false;
    }
    if (baseLayoutInfo.axisAligned && targetLayoutInfo.axisAligned) {
        return true; // obb is the same as the normal bounding rect.
    }
    return ensureOBB(baseLayoutInfo).intersect(ensureOBB(targetLayoutInfo), mtv, intersectOpt);
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/label/LabelManager.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
*/ // TODO: move labels out of viewport.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$BoundingRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BoundingRect$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/BoundingRect.js [app-client] (ecmascript) <export default as BoundingRect>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/animation/basicTransition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/innerStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/number.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$Transformable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/Transformable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelGuideHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/label/labelGuideHelper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelLayoutHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/label/labelLayoutHelper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/label/labelStyle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$contain$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/contain/util.js [app-client] (ecmascript)");
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
function cloneArr(points) {
    if (points) {
        var newPoints = [];
        for(var i = 0; i < points.length; i++){
            newPoints.push(points[i].slice());
        }
        return newPoints;
    }
}
function prepareLayoutCallbackParams(labelItem, hostEl) {
    var label = labelItem.label;
    var labelLine = hostEl && hostEl.getTextGuideLine();
    return {
        dataIndex: labelItem.dataIndex,
        dataType: labelItem.dataType,
        seriesIndex: labelItem.seriesModel.seriesIndex,
        text: labelItem.label.style.text,
        rect: labelItem.hostRect,
        labelRect: labelItem.rect,
        // x: labelAttr.x,
        // y: labelAttr.y,
        align: label.style.align,
        verticalAlign: label.style.verticalAlign,
        labelLinePoints: cloneArr(labelLine && labelLine.shape.points)
    };
}
var LABEL_OPTION_TO_STYLE_KEYS = [
    'align',
    'verticalAlign',
    'width',
    'height',
    'fontSize'
];
var dummyTransformable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$Transformable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]();
var labelLayoutInnerStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeInner"])();
var labelLineAnimationStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeInner"])();
function extendWithKeys(target, source, keys) {
    for(var i = 0; i < keys.length; i++){
        var key = keys[i];
        if (source[key] != null) {
            target[key] = source[key];
        }
    }
}
var LABEL_LAYOUT_PROPS = [
    'x',
    'y',
    'rotation'
];
var LabelManager = /** @class */ function() {
    function LabelManager() {
        this._labelList = [];
        this._chartViewList = [];
    }
    LabelManager.prototype.clearLabels = function() {
        this._labelList = [];
        this._chartViewList = [];
    };
    /**
   * Add label to manager
   */ LabelManager.prototype._addLabel = function(dataIndex, dataType, seriesModel, label, layoutOptionOrCb) {
        var labelStyle = label.style;
        var hostEl = label.__hostTarget;
        var textConfig = hostEl.textConfig || {};
        // TODO: If label is in other state.
        var labelTransform = label.getComputedTransform();
        var labelRect = label.getBoundingRect().plain();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$BoundingRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BoundingRect$3e$__["BoundingRect"].applyTransform(labelRect, labelRect, labelTransform);
        if (labelTransform) {
            dummyTransformable.setLocalTransform(labelTransform);
        } else {
            // Identity transform.
            dummyTransformable.x = dummyTransformable.y = dummyTransformable.rotation = dummyTransformable.originX = dummyTransformable.originY = 0;
            dummyTransformable.scaleX = dummyTransformable.scaleY = 1;
        }
        dummyTransformable.rotation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$contain$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeRadian"])(dummyTransformable.rotation);
        var host = label.__hostTarget;
        var hostRect;
        if (host) {
            hostRect = host.getBoundingRect().plain();
            var transform = host.getComputedTransform();
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$BoundingRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BoundingRect$3e$__["BoundingRect"].applyTransform(hostRect, hostRect, transform);
        }
        var labelGuide = hostRect && host.getTextGuideLine();
        this._labelList.push({
            label: label,
            labelLine: labelGuide,
            seriesModel: seriesModel,
            dataIndex: dataIndex,
            dataType: dataType,
            layoutOptionOrCb: layoutOptionOrCb,
            layoutOption: null,
            rect: labelRect,
            hostRect: hostRect,
            // Label with lower priority will be hidden when overlapped
            // Use rect size as default priority
            priority: hostRect ? hostRect.width * hostRect.height : 0,
            // Save default label attributes.
            // For restore if developers want get back to default value in callback.
            defaultAttr: {
                ignore: label.ignore,
                labelGuideIgnore: labelGuide && labelGuide.ignore,
                x: dummyTransformable.x,
                y: dummyTransformable.y,
                scaleX: dummyTransformable.scaleX,
                scaleY: dummyTransformable.scaleY,
                rotation: dummyTransformable.rotation,
                style: {
                    x: labelStyle.x,
                    y: labelStyle.y,
                    align: labelStyle.align,
                    verticalAlign: labelStyle.verticalAlign,
                    width: labelStyle.width,
                    height: labelStyle.height,
                    fontSize: labelStyle.fontSize
                },
                cursor: label.cursor,
                attachedPos: textConfig.position,
                attachedRot: textConfig.rotation
            }
        });
    };
    LabelManager.prototype.addLabelsOfSeries = function(chartView) {
        var _this = this;
        this._chartViewList.push(chartView);
        var seriesModel = chartView.__model;
        var layoutOption = seriesModel.get('labelLayout');
        /**
     * Ignore layouting if it's not specified anything.
     */ if (!((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(layoutOption) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keys"])(layoutOption).length)) {
            return;
        }
        chartView.group.traverse(function(child) {
            if (child.ignore) {
                return true; // Stop traverse descendants.
            }
            // Only support label being hosted on graphic elements.
            var textEl = child.getTextContent();
            var ecData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getECData"])(child);
            // Can only attach the text on the element with dataIndex
            if (textEl && !textEl.disableLabelLayout) {
                _this._addLabel(ecData.dataIndex, ecData.dataType, seriesModel, textEl, layoutOption);
            }
        });
    };
    LabelManager.prototype.updateLayoutConfig = function(api) {
        var width = api.getWidth();
        var height = api.getHeight();
        function createDragHandler(el, labelLineModel) {
            return function() {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelGuideHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateLabelLinePoints"])(el, labelLineModel);
            };
        }
        for(var i = 0; i < this._labelList.length; i++){
            var labelItem = this._labelList[i];
            var label = labelItem.label;
            var hostEl = label.__hostTarget;
            var defaultLabelAttr = labelItem.defaultAttr;
            var layoutOption = void 0;
            // TODO A global layout option?
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(labelItem.layoutOptionOrCb)) {
                layoutOption = labelItem.layoutOptionOrCb(prepareLayoutCallbackParams(labelItem, hostEl));
            } else {
                layoutOption = labelItem.layoutOptionOrCb;
            }
            layoutOption = layoutOption || {};
            labelItem.layoutOption = layoutOption;
            var degreeToRadian = Math.PI / 180;
            // TODO hostEl should always exists.
            // Or label should not have parent because the x, y is all in global space.
            if (hostEl) {
                hostEl.setTextConfig({
                    // Force to set local false.
                    local: false,
                    // Ignore position and rotation config on the host el if x or y is changed.
                    position: layoutOption.x != null || layoutOption.y != null ? null : defaultLabelAttr.attachedPos,
                    // Ignore rotation config on the host el if rotation is changed.
                    rotation: layoutOption.rotate != null ? layoutOption.rotate * degreeToRadian : defaultLabelAttr.attachedRot,
                    offset: [
                        layoutOption.dx || 0,
                        layoutOption.dy || 0
                    ]
                });
            }
            var needsUpdateLabelLine = false;
            if (layoutOption.x != null) {
                // TODO width of chart view.
                label.x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parsePercent"])(layoutOption.x, width);
                label.setStyle('x', 0); // Ignore movement in style. TODO: origin.
                needsUpdateLabelLine = true;
            } else {
                label.x = defaultLabelAttr.x;
                label.setStyle('x', defaultLabelAttr.style.x);
            }
            if (layoutOption.y != null) {
                // TODO height of chart view.
                label.y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parsePercent"])(layoutOption.y, height);
                label.setStyle('y', 0); // Ignore movement in style.
                needsUpdateLabelLine = true;
            } else {
                label.y = defaultLabelAttr.y;
                label.setStyle('y', defaultLabelAttr.style.y);
            }
            if (layoutOption.labelLinePoints) {
                var guideLine = hostEl.getTextGuideLine();
                if (guideLine) {
                    guideLine.setShape({
                        points: layoutOption.labelLinePoints
                    });
                    // Not update
                    needsUpdateLabelLine = false;
                }
            }
            var labelLayoutStore = labelLayoutInnerStore(label);
            labelLayoutStore.needsUpdateLabelLine = needsUpdateLabelLine;
            label.rotation = layoutOption.rotate != null ? layoutOption.rotate * degreeToRadian : defaultLabelAttr.rotation;
            label.scaleX = defaultLabelAttr.scaleX;
            label.scaleY = defaultLabelAttr.scaleY;
            for(var k = 0; k < LABEL_OPTION_TO_STYLE_KEYS.length; k++){
                var key = LABEL_OPTION_TO_STYLE_KEYS[k];
                label.setStyle(key, layoutOption[key] != null ? layoutOption[key] : defaultLabelAttr.style[key]);
            }
            if (layoutOption.draggable) {
                label.draggable = true;
                label.cursor = 'move';
                if (hostEl) {
                    var hostModel = labelItem.seriesModel;
                    if (labelItem.dataIndex != null) {
                        var data = labelItem.seriesModel.getData(labelItem.dataType);
                        hostModel = data.getItemModel(labelItem.dataIndex);
                    }
                    label.on('drag', createDragHandler(hostEl, hostModel.getModel('labelLine')));
                }
            } else {
                // TODO Other drag functions?
                label.off('drag');
                label.cursor = defaultLabelAttr.cursor;
            }
        }
    };
    LabelManager.prototype.layout = function(api) {
        var width = api.getWidth();
        var height = api.getHeight();
        var labelList = [];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(this._labelList, function(inputItem) {
            if (!inputItem.defaultAttr.ignore) {
                labelList.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelLayoutHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["newLabelLayoutWithGeometry"])({}, inputItem));
            }
        });
        var labelsNeedsAdjustOnX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filter"])(labelList, function(item) {
            return item.layoutOption.moveOverlap === 'shiftX';
        });
        var labelsNeedsAdjustOnY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filter"])(labelList, function(item) {
            return item.layoutOption.moveOverlap === 'shiftY';
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelLayoutHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shiftLayoutOnXY"])(labelsNeedsAdjustOnX, 0, 0, width);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelLayoutHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shiftLayoutOnXY"])(labelsNeedsAdjustOnY, 1, 0, height);
        var labelsNeedsHideOverlap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filter"])(labelList, function(item) {
            return item.layoutOption.hideOverlap;
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelLayoutHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["restoreIgnore"])(labelsNeedsHideOverlap);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelLayoutHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hideOverlap"])(labelsNeedsHideOverlap);
    };
    /**
   * Process all labels. Not only labels with layoutOption.
   */ LabelManager.prototype.processLabelsOverall = function() {
        var _this = this;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(this._chartViewList, function(chartView) {
            var seriesModel = chartView.__model;
            var ignoreLabelLineUpdate = chartView.ignoreLabelLineUpdate;
            var animationEnabled = seriesModel.isAnimationEnabled();
            chartView.group.traverse(function(child) {
                if (child.ignore && !child.forceLabelAnimation) {
                    return true; // Stop traverse descendants.
                }
                var needsUpdateLabelLine = !ignoreLabelLineUpdate;
                var label = child.getTextContent();
                if (!needsUpdateLabelLine && label) {
                    needsUpdateLabelLine = labelLayoutInnerStore(label).needsUpdateLabelLine;
                }
                if (needsUpdateLabelLine) {
                    _this._updateLabelLine(child, seriesModel);
                }
                if (animationEnabled) {
                    _this._animateLabels(child, seriesModel);
                }
            });
        });
    };
    LabelManager.prototype._updateLabelLine = function(el, seriesModel) {
        // Only support label being hosted on graphic elements.
        var textEl = el.getTextContent();
        // Update label line style.
        var ecData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getECData"])(el);
        var dataIndex = ecData.dataIndex;
        // Only support labelLine on the labels represent data.
        if (textEl && dataIndex != null) {
            var data = seriesModel.getData(ecData.dataType);
            var itemModel = data.getItemModel(dataIndex);
            var defaultStyle = {};
            var visualStyle = data.getItemVisual(dataIndex, 'style');
            if (visualStyle) {
                var visualType = data.getVisual('drawType');
                // Default to be same with main color
                defaultStyle.stroke = visualStyle[visualType];
            }
            var labelLineModel = itemModel.getModel('labelLine');
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelGuideHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setLabelLineStyle"])(el, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelGuideHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLabelLineStatesModels"])(itemModel), defaultStyle);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelGuideHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateLabelLinePoints"])(el, labelLineModel);
        }
    };
    LabelManager.prototype._animateLabels = function(el, seriesModel) {
        var textEl = el.getTextContent();
        var guideLine = el.getTextGuideLine();
        // Animate
        if (textEl && (el.forceLabelAnimation || !textEl.ignore && !textEl.invisible && !el.disableLabelAnimation && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElementRemoved"])(el))) {
            var layoutStore = labelLayoutInnerStore(textEl);
            var oldLayout = layoutStore.oldLayout;
            var ecData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getECData"])(el);
            var dataIndex = ecData.dataIndex;
            var newProps = {
                x: textEl.x,
                y: textEl.y,
                rotation: textEl.rotation
            };
            var data = seriesModel.getData(ecData.dataType);
            if (!oldLayout) {
                textEl.attr(newProps);
                // Disable fade in animation if value animation is enabled.
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["labelInner"])(textEl).valueAnimation) {
                    var oldOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["retrieve2"])(textEl.style.opacity, 1);
                    // Fade in animation
                    textEl.style.opacity = 0;
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initProps"])(textEl, {
                        style: {
                            opacity: oldOpacity
                        }
                    }, seriesModel, dataIndex);
                }
            } else {
                textEl.attr(oldLayout);
                // Make sure the animation from is in the right status.
                var prevStates = el.prevStates;
                if (prevStates) {
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["indexOf"])(prevStates, 'select') >= 0) {
                        textEl.attr(layoutStore.oldLayoutSelect);
                    }
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["indexOf"])(prevStates, 'emphasis') >= 0) {
                        textEl.attr(layoutStore.oldLayoutEmphasis);
                    }
                }
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateProps"])(textEl, newProps, seriesModel, dataIndex);
            }
            layoutStore.oldLayout = newProps;
            if (textEl.states.select) {
                var layoutSelect = layoutStore.oldLayoutSelect = {};
                extendWithKeys(layoutSelect, newProps, LABEL_LAYOUT_PROPS);
                extendWithKeys(layoutSelect, textEl.states.select, LABEL_LAYOUT_PROPS);
            }
            if (textEl.states.emphasis) {
                var layoutEmphasis = layoutStore.oldLayoutEmphasis = {};
                extendWithKeys(layoutEmphasis, newProps, LABEL_LAYOUT_PROPS);
                extendWithKeys(layoutEmphasis, textEl.states.emphasis, LABEL_LAYOUT_PROPS);
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animateLabelValue"])(textEl, dataIndex, data, seriesModel, seriesModel);
        }
        if (guideLine && !guideLine.ignore && !guideLine.invisible) {
            var layoutStore = labelLineAnimationStore(guideLine);
            var oldLayout = layoutStore.oldLayout;
            var newLayout = {
                points: guideLine.shape.points
            };
            if (!oldLayout) {
                guideLine.setShape(newLayout);
                guideLine.style.strokePercent = 0;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initProps"])(guideLine, {
                    style: {
                        strokePercent: 1
                    }
                }, seriesModel);
            } else {
                guideLine.attr({
                    shape: oldLayout
                });
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateProps"])(guideLine, {
                    shape: newLayout
                }, seriesModel);
            }
            layoutStore.oldLayout = newLayout;
        }
    };
    return LabelManager;
}();
const __TURBOPACK__default__export__ = LabelManager;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/label/installLabelLayout.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    "installLabelLayout",
    ()=>installLabelLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$LabelManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/label/LabelManager.js [app-client] (ecmascript)");
;
;
var getLabelManager = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeInner"])();
function installLabelLayout(registers) {
    registers.registerUpdateLifecycle('series:beforeupdate', function(ecModel, api, params) {
        // TODO api provide an namespace that can save stuff per instance
        var labelManager = getLabelManager(api).labelManager;
        if (!labelManager) {
            labelManager = getLabelManager(api).labelManager = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$LabelManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]();
        }
        labelManager.clearLabels();
    });
    registers.registerUpdateLifecycle('series:layoutlabels', function(ecModel, api, params) {
        var labelManager = getLabelManager(api).labelManager;
        params.updatedSeries.forEach(function(series) {
            labelManager.addLabelsOfSeries(api.getViewOfSeriesModel(series));
        });
        labelManager.updateLayoutConfig(api);
        labelManager.layout(api);
        labelManager.processLabelsOverall();
    });
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/label/installLabelLayout.js [app-client] (ecmascript) <export installLabelLayout as LabelLayout>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LabelLayout",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$installLabelLayout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["installLabelLayout"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$installLabelLayout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/label/installLabelLayout.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=6e80b_echarts_lib_label_643a085c._.js.map