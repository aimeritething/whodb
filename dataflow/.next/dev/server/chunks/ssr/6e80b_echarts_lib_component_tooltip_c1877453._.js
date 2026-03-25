module.exports = [
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/tooltip/tooltipMarkup.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    "TooltipMarkupStyleCreator",
    ()=>TooltipMarkupStyleCreator,
    "buildTooltipMarkup",
    ()=>buildTooltipMarkup,
    "createTooltipMarkup",
    ()=>createTooltipMarkup,
    "getPaddingFromTooltipModel",
    ()=>getPaddingFromTooltipModel,
    "retrieveVisualColorForTooltipMarker",
    ()=>retrieveVisualColorForTooltipMarker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/format.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$dataValueHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/data/helper/dataValueHelper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/number.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/tokens.js [app-ssr] (ecmascript)");
;
;
;
;
;
var TOOLTIP_LINE_HEIGHT_CSS = 'line-height:1';
function getTooltipLineHeight(textStyle) {
    var lineHeight = textStyle.lineHeight;
    if (lineHeight == null) {
        return TOOLTIP_LINE_HEIGHT_CSS;
    } else {
        return "line-height:" + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeHTML"])(lineHeight + '') + "px";
    }
}
// TODO: more textStyle option
function getTooltipTextStyle(textStyle, renderMode) {
    var nameFontColor = textStyle.color || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].color.tertiary;
    var nameFontSize = textStyle.fontSize || 12;
    var nameFontWeight = textStyle.fontWeight || '400';
    var valueFontColor = textStyle.color || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].color.secondary;
    var valueFontSize = textStyle.fontSize || 14;
    var valueFontWeight = textStyle.fontWeight || '900';
    if (renderMode === 'html') {
        // `textStyle` is probably from user input, should be encoded to reduce security risk.
        return {
            // eslint-disable-next-line max-len
            nameStyle: "font-size:" + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeHTML"])(nameFontSize + '') + "px;color:" + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeHTML"])(nameFontColor) + ";font-weight:" + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeHTML"])(nameFontWeight + ''),
            // eslint-disable-next-line max-len
            valueStyle: "font-size:" + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeHTML"])(valueFontSize + '') + "px;color:" + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeHTML"])(valueFontColor) + ";font-weight:" + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeHTML"])(valueFontWeight + '')
        };
    } else {
        return {
            nameStyle: {
                fontSize: nameFontSize,
                fill: nameFontColor,
                fontWeight: nameFontWeight
            },
            valueStyle: {
                fontSize: valueFontSize,
                fill: valueFontColor,
                fontWeight: valueFontWeight
            }
        };
    }
}
// See `TooltipMarkupLayoutIntent['innerGapLevel']`.
// (value from UI design)
var HTML_GAPS = [
    0,
    10,
    20,
    30
];
var RICH_TEXT_GAPS = [
    '',
    '\n',
    '\n\n',
    '\n\n\n'
];
function createTooltipMarkup(type, option) {
    option.type = type;
    return option;
}
function isSectionFragment(frag) {
    return frag.type === 'section';
}
function getBuilder(frag) {
    return isSectionFragment(frag) ? buildSection : buildNameValue;
}
function getBlockGapLevel(frag) {
    if (isSectionFragment(frag)) {
        var gapLevel_1 = 0;
        var subBlockLen = frag.blocks.length;
        var hasInnerGap_1 = subBlockLen > 1 || subBlockLen > 0 && !frag.noHeader;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(frag.blocks, function(subBlock) {
            var subGapLevel = getBlockGapLevel(subBlock);
            // If the some of the sub-blocks have some gaps (like 10px) inside, this block
            // should use a larger gap (like 20px) to distinguish those sub-blocks.
            if (subGapLevel >= gapLevel_1) {
                gapLevel_1 = subGapLevel + +(hasInnerGap_1 && (// 0 always can not be readable gap level.
                !subGapLevel || isSectionFragment(subBlock) && !subBlock.noHeader));
            }
        });
        return gapLevel_1;
    }
    return 0;
}
function buildSection(ctx, fragment, topMarginForOuterGap, toolTipTextStyle) {
    var noHeader = fragment.noHeader;
    var gaps = getGap(getBlockGapLevel(fragment));
    var subMarkupTextList = [];
    var subBlocks = fragment.blocks || [];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(!subBlocks || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isArray"])(subBlocks));
    subBlocks = subBlocks || [];
    var orderMode = ctx.orderMode;
    if (fragment.sortBlocks && orderMode) {
        subBlocks = subBlocks.slice();
        var orderMap = {
            valueAsc: 'asc',
            valueDesc: 'desc'
        };
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasOwn"])(orderMap, orderMode)) {
            var comparator_1 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$dataValueHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SortOrderComparator"](orderMap[orderMode], null);
            subBlocks.sort(function(a, b) {
                return comparator_1.evaluate(a.sortParam, b.sortParam);
            });
        } else if (orderMode === 'seriesDesc') {
            subBlocks.reverse();
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(subBlocks, function(subBlock, idx) {
        var valueFormatter = fragment.valueFormatter;
        var subMarkupText = getBuilder(subBlock)(// Inherit valueFormatter
        valueFormatter ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extend"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extend"])({}, ctx), {
            valueFormatter: valueFormatter
        }) : ctx, subBlock, idx > 0 ? gaps.html : 0, toolTipTextStyle);
        subMarkupText != null && subMarkupTextList.push(subMarkupText);
    });
    var subMarkupText = ctx.renderMode === 'richText' ? subMarkupTextList.join(gaps.richText) : wrapBlockHTML(toolTipTextStyle, subMarkupTextList.join(''), noHeader ? topMarginForOuterGap : gaps.html);
    if (noHeader) {
        return subMarkupText;
    }
    var displayableHeader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["makeValueReadable"])(fragment.header, 'ordinal', ctx.useUTC);
    var nameStyle = getTooltipTextStyle(toolTipTextStyle, ctx.renderMode).nameStyle;
    var tooltipLineHeight = getTooltipLineHeight(toolTipTextStyle);
    if (ctx.renderMode === 'richText') {
        return wrapInlineNameRichText(ctx, displayableHeader, nameStyle) + gaps.richText + subMarkupText;
    } else {
        return wrapBlockHTML(toolTipTextStyle, "<div style=\"" + nameStyle + ";" + tooltipLineHeight + ";\">" + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeHTML"])(displayableHeader) + '</div>' + subMarkupText, topMarginForOuterGap);
    }
}
function buildNameValue(ctx, fragment, topMarginForOuterGap, toolTipTextStyle) {
    var renderMode = ctx.renderMode;
    var noName = fragment.noName;
    var noValue = fragment.noValue;
    var noMarker = !fragment.markerType;
    var name = fragment.name;
    var useUTC = ctx.useUTC;
    var valueFormatter = fragment.valueFormatter || ctx.valueFormatter || function(value) {
        value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isArray"])(value) ? value : [
            value
        ];
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["map"])(value, function(val, idx) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["makeValueReadable"])(val, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isArray"])(valueTypeOption) ? valueTypeOption[idx] : valueTypeOption, useUTC);
        });
    };
    if (noName && noValue) {
        return;
    }
    var markerStr = noMarker ? '' : ctx.markupStyleCreator.makeTooltipMarker(fragment.markerType, fragment.markerColor || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].color.secondary, renderMode);
    var readableName = noName ? '' : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["makeValueReadable"])(name, 'ordinal', useUTC);
    var valueTypeOption = fragment.valueType;
    var readableValueList = noValue ? [] : valueFormatter(fragment.value, fragment.dataIndex);
    var valueAlignRight = !noMarker || !noName;
    // It little weird if only value next to marker but far from marker.
    var valueCloseToMarker = !noMarker && noName;
    var _a = getTooltipTextStyle(toolTipTextStyle, renderMode), nameStyle = _a.nameStyle, valueStyle = _a.valueStyle;
    return renderMode === 'richText' ? (noMarker ? '' : markerStr) + (noName ? '' : wrapInlineNameRichText(ctx, readableName, nameStyle)) + (noValue ? '' : wrapInlineValueRichText(ctx, readableValueList, valueAlignRight, valueCloseToMarker, valueStyle)) : wrapBlockHTML(toolTipTextStyle, (noMarker ? '' : markerStr) + (noName ? '' : wrapInlineNameHTML(readableName, !noMarker, nameStyle)) + (noValue ? '' : wrapInlineValueHTML(readableValueList, valueAlignRight, valueCloseToMarker, valueStyle)), topMarginForOuterGap);
}
function buildTooltipMarkup(fragment, markupStyleCreator, renderMode, orderMode, useUTC, toolTipTextStyle) {
    if (!fragment) {
        return;
    }
    var builder = getBuilder(fragment);
    var ctx = {
        useUTC: useUTC,
        renderMode: renderMode,
        orderMode: orderMode,
        markupStyleCreator: markupStyleCreator,
        valueFormatter: fragment.valueFormatter
    };
    return builder(ctx, fragment, 0, toolTipTextStyle);
}
function getGap(gapLevel) {
    return {
        html: HTML_GAPS[gapLevel],
        richText: RICH_TEXT_GAPS[gapLevel]
    };
}
function wrapBlockHTML(textStyle, encodedContent, topGap) {
    var clearfix = '<div style="clear:both"></div>';
    var marginCSS = "margin: " + topGap + "px 0 0";
    var tooltipLineHeight = getTooltipLineHeight(textStyle);
    return "<div style=\"" + marginCSS + ";" + tooltipLineHeight + ";\">" + encodedContent + clearfix + '</div>';
}
function wrapInlineNameHTML(name, leftHasMarker, style) {
    var marginCss = leftHasMarker ? 'margin-left:2px' : '';
    return "<span style=\"" + style + ";" + marginCss + "\">" + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeHTML"])(name) + '</span>';
}
function wrapInlineValueHTML(valueList, alignRight, valueCloseToMarker, style) {
    // Do not too close to marker, considering there are multiple values separated by spaces.
    var paddingStr = valueCloseToMarker ? '10px' : '20px';
    var alignCSS = alignRight ? "float:right;margin-left:" + paddingStr : '';
    valueList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isArray"])(valueList) ? valueList : [
        valueList
    ];
    return "<span style=\"" + alignCSS + ";" + style + "\">" + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["map"])(valueList, function(value) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeHTML"])(value);
    }).join('&nbsp;&nbsp;') + '</span>';
}
function wrapInlineNameRichText(ctx, name, style) {
    return ctx.markupStyleCreator.wrapRichTextStyle(name, style);
}
function wrapInlineValueRichText(ctx, values, alignRight, valueCloseToMarker, style) {
    var styles = [
        style
    ];
    var paddingLeft = valueCloseToMarker ? 10 : 20;
    alignRight && styles.push({
        padding: [
            0,
            0,
            0,
            paddingLeft
        ],
        align: 'right'
    });
    // Value has commas inside, so use '  ' as delimiter for multiple values.
    return ctx.markupStyleCreator.wrapRichTextStyle((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isArray"])(values) ? values.join('  ') : values, styles);
}
function retrieveVisualColorForTooltipMarker(series, dataIndex) {
    var style = series.getData().getItemVisual(dataIndex, 'style');
    var color = style[series.visualDrawType];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["convertToColorString"])(color);
}
function getPaddingFromTooltipModel(model, renderMode) {
    var padding = model.get('padding');
    return padding != null ? padding : renderMode === 'richText' ? [
        8,
        10
    ] : 10;
}
/**
 * The major feature is generate styles for `renderMode: 'richText'`.
 * But it also serves `renderMode: 'html'` to provide
 * "renderMode-independent" API.
 */ var TooltipMarkupStyleCreator = /** @class */ function() {
    function TooltipMarkupStyleCreator() {
        this.richTextStyles = {};
        // Notice that "generate a style name" usually happens repeatedly when mouse is moving and
        // a tooltip is displayed. So we put the `_nextStyleNameId` as a member of each creator
        // rather than static shared by all creators (which will cause it increase to fast).
        this._nextStyleNameId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRandomIdBase"])();
    }
    TooltipMarkupStyleCreator.prototype._generateStyleName = function() {
        return '__EC_aUTo_' + this._nextStyleNameId++;
    };
    TooltipMarkupStyleCreator.prototype.makeTooltipMarker = function(markerType, colorStr, renderMode) {
        var markerId = renderMode === 'richText' ? this._generateStyleName() : null;
        var marker = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getTooltipMarker"])({
            color: colorStr,
            type: markerType,
            renderMode: renderMode,
            markerId: markerId
        });
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(marker)) {
            return marker;
        } else {
            if ("TURBOPACK compile-time truthy", 1) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(markerId);
            }
            this.richTextStyles[markerId] = marker.style;
            return marker.content;
        }
    };
    /**
   * @usage
   * ```ts
   * const styledText = markupStyleCreator.wrapRichTextStyle([
   *     // The styles will be auto merged.
   *     {
   *         fontSize: 12,
   *         color: 'blue'
   *     },
   *     {
   *         padding: 20
   *     }
   * ]);
   * ```
   */ TooltipMarkupStyleCreator.prototype.wrapRichTextStyle = function(text, styles) {
        var finalStl = {};
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isArray"])(styles)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(styles, function(stl) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extend"])(finalStl, stl);
            });
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extend"])(finalStl, styles);
        }
        var styleName = this._generateStyleName();
        this.richTextStyles[styleName] = finalStl;
        return "{" + styleName + "|" + text + "}";
    };
    return TooltipMarkupStyleCreator;
}();
;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/tooltip/seriesFormatTooltip.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    "defaultSeriesFormatTooltip",
    ()=>defaultSeriesFormatTooltip
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$tooltipMarkup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/tooltip/tooltipMarkup.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$dataProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/data/helper/dataProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js [app-ssr] (ecmascript)");
;
;
;
;
function defaultSeriesFormatTooltip(opt) {
    var series = opt.series;
    var dataIndex = opt.dataIndex;
    var multipleSeries = opt.multipleSeries;
    var data = series.getData();
    var tooltipDims = data.mapDimensionsAll('defaultedTooltip');
    var tooltipDimLen = tooltipDims.length;
    var value = series.getRawValue(dataIndex);
    var isValueArr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isArray"])(value);
    var markerColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$tooltipMarkup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["retrieveVisualColorForTooltipMarker"])(series, dataIndex);
    // Complicated rule for pretty tooltip.
    var inlineValue;
    var inlineValueType;
    var subBlocks;
    var sortParam;
    if (tooltipDimLen > 1 || isValueArr && !tooltipDimLen) {
        var formatArrResult = formatTooltipArrayValue(value, series, dataIndex, tooltipDims, markerColor);
        inlineValue = formatArrResult.inlineValues;
        inlineValueType = formatArrResult.inlineValueTypes;
        subBlocks = formatArrResult.blocks;
        // Only support tooltip sort by the first inline value. It's enough in most cases.
        sortParam = formatArrResult.inlineValues[0];
    } else if (tooltipDimLen) {
        var dimInfo = data.getDimensionInfo(tooltipDims[0]);
        sortParam = inlineValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$dataProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["retrieveRawValue"])(data, dataIndex, tooltipDims[0]);
        inlineValueType = dimInfo.type;
    } else {
        sortParam = inlineValue = isValueArr ? value[0] : value;
    }
    // Do not show generated series name. It might not be readable.
    var seriesNameSpecified = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNameSpecified"])(series);
    var seriesName = seriesNameSpecified && series.name || '';
    var itemName = data.getName(dataIndex);
    var inlineName = multipleSeries ? seriesName : itemName;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$tooltipMarkup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createTooltipMarkup"])('section', {
        header: seriesName,
        // When series name is not specified, do not show a header line with only '-'.
        // This case always happens in tooltip.trigger: 'item'.
        noHeader: multipleSeries || !seriesNameSpecified,
        sortParam: sortParam,
        blocks: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$tooltipMarkup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createTooltipMarkup"])('nameValue', {
                markerType: 'item',
                markerColor: markerColor,
                // Do not mix display seriesName and itemName in one tooltip,
                // which might confuses users.
                name: inlineName,
                // name dimension might be auto assigned, where the name might
                // be not readable. So we check trim here.
                noName: !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trim"])(inlineName),
                value: inlineValue,
                valueType: inlineValueType,
                dataIndex: dataIndex
            })
        ].concat(subBlocks || [])
    });
}
function formatTooltipArrayValue(value, series, dataIndex, tooltipDims, colorStr) {
    // check: category-no-encode-has-axis-data in dataset.html
    var data = series.getData();
    var isValueMultipleLine = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reduce"])(value, function(isValueMultipleLine, val, idx) {
        var dimItem = data.getDimensionInfo(idx);
        return isValueMultipleLine = isValueMultipleLine || dimItem && dimItem.tooltip !== false && dimItem.displayName != null;
    }, false);
    var inlineValues = [];
    var inlineValueTypes = [];
    var blocks = [];
    tooltipDims.length ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(tooltipDims, function(dim) {
        setEachItem((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$dataProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["retrieveRawValue"])(data, dataIndex, dim), dim);
    }) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(value, setEachItem);
    function setEachItem(val, dim) {
        var dimInfo = data.getDimensionInfo(dim);
        // If `dimInfo.tooltip` is not set, show tooltip.
        if (!dimInfo || dimInfo.otherDims.tooltip === false) {
            return;
        }
        if (isValueMultipleLine) {
            blocks.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$tooltipMarkup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createTooltipMarkup"])('nameValue', {
                markerType: 'subItem',
                markerColor: colorStr,
                name: dimInfo.displayName,
                value: val,
                valueType: dimInfo.type
            }));
        } else {
            inlineValues.push(val);
            inlineValueTypes.push(dimInfo.type);
        }
    }
    return {
        inlineValues: inlineValues,
        inlineValueTypes: inlineValueTypes,
        blocks: blocks
    };
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/tooltip/TooltipModel.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/Component.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/tokens.js [app-ssr] (ecmascript)");
;
;
;
var TooltipModel = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(TooltipModel, _super);
    function TooltipModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = TooltipModel.type;
        return _this;
    }
    TooltipModel.type = 'tooltip';
    TooltipModel.dependencies = [
        'axisPointer'
    ];
    TooltipModel.defaultOption = {
        // zlevel: 0,
        z: 60,
        show: true,
        // tooltip main content
        showContent: true,
        // 'trigger' only works on coordinate system.
        // 'item' | 'axis' | 'none'
        trigger: 'item',
        // 'click' | 'mousemove' | 'none'
        triggerOn: 'mousemove|click',
        alwaysShowContent: false,
        renderMode: 'auto',
        // whether restraint content inside viewRect.
        // If renderMode: 'richText', default true.
        // If renderMode: 'html', defaults to `false` (for backward compat).
        confine: null,
        showDelay: 0,
        hideDelay: 100,
        // Animation transition time, unit is second
        transitionDuration: 0.4,
        displayTransition: true,
        enterable: false,
        backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].color.neutral00,
        // box shadow
        shadowBlur: 10,
        shadowColor: 'rgba(0, 0, 0, .2)',
        shadowOffsetX: 1,
        shadowOffsetY: 2,
        // tooltip border radius, unit is px, default is 4
        borderRadius: 4,
        // tooltip border width, unit is px, default is 0 (no border)
        borderWidth: 1,
        defaultBorderColor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].color.border,
        // Tooltip inside padding, default is 5 for all direction
        // Array is allowed to set up, right, bottom, left, same with css
        // The default value: See `tooltip/tooltipMarkup.ts#getPaddingFromTooltipModel`.
        padding: null,
        // Extra css text
        extraCssText: '',
        // axis indicator, trigger by axis
        axisPointer: {
            // default is line
            // legal values: 'line' | 'shadow' | 'cross'
            type: 'line',
            // Valid when type is line, appoint tooltip line locate on which line. Optional
            // legal values: 'x' | 'y' | 'angle' | 'radius' | 'auto'
            // default is 'auto', chose the axis which type is category.
            // for multiply y axis, cartesian coord chose x axis, polar chose angle axis
            axis: 'auto',
            animation: 'auto',
            animationDurationUpdate: 200,
            animationEasingUpdate: 'exponentialOut',
            crossStyle: {
                color: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].color.borderShade,
                width: 1,
                type: 'dashed',
                // TODO formatter
                textStyle: {}
            }
        },
        textStyle: {
            color: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].color.tertiary,
            fontSize: 14
        }
    };
    return TooltipModel;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = TooltipModel;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/tooltip/helper.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    "TRANSFORM_VENDOR",
    ()=>TRANSFORM_VENDOR,
    "TRANSITION_VENDOR",
    ()=>TRANSITION_VENDOR,
    "getComputedStyle",
    ()=>getComputedStyle,
    "shouldTooltipConfine",
    ()=>shouldTooltipConfine,
    "toCSSVendorPrefix",
    ()=>toCSSVendorPrefix
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/format.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$env$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/env.js [app-ssr] (ecmascript)");
;
;
function shouldTooltipConfine(tooltipModel) {
    var confineOption = tooltipModel.get('confine');
    return confineOption != null ? !!confineOption : tooltipModel.get('renderMode') === 'richText';
}
function testStyle(styleProps) {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$env$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].domSupported) {
        return;
    }
    var style = document.documentElement.style;
    for(var i = 0, len = styleProps.length; i < len; i++){
        if (styleProps[i] in style) {
            return styleProps[i];
        }
    }
}
var TRANSFORM_VENDOR = testStyle([
    'transform',
    'webkitTransform',
    'OTransform',
    'MozTransform',
    'msTransform'
]);
var TRANSITION_VENDOR = testStyle([
    'webkitTransition',
    'transition',
    'OTransition',
    'MozTransition',
    'msTransition'
]);
function toCSSVendorPrefix(styleVendor, styleProp) {
    if (!styleVendor) {
        return styleProp;
    }
    styleProp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toCamelCase"])(styleProp, true);
    var idx = styleVendor.indexOf(styleProp);
    styleVendor = idx === -1 ? styleProp : "-" + styleVendor.slice(0, idx) + "-" + styleProp;
    return styleVendor.toLowerCase();
}
function getComputedStyle(el, style) {
    var stl = el.currentStyle || document.defaultView && document.defaultView.getComputedStyle(el);
    return stl ? style ? stl[style] : stl : null;
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/tooltip/TooltipHTMLContent.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$event$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/event.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$env$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/env.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/format.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/tooltip/helper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$tooltipMarkup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/tooltip/tooltipMarkup.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
/* global document, window */ var CSS_TRANSITION_VENDOR = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toCSSVendorPrefix"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TRANSITION_VENDOR"], 'transition');
var CSS_TRANSFORM_VENDOR = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toCSSVendorPrefix"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TRANSFORM_VENDOR"], 'transform');
// eslint-disable-next-line
var gCssText = "position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:9999999;" + (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$env$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].transform3dSupported ? 'will-change:transform;' : '');
function mirrorPos(pos) {
    pos = pos === 'left' ? 'right' : pos === 'right' ? 'left' : pos === 'top' ? 'bottom' : 'top';
    return pos;
}
function assembleArrow(tooltipModel, borderColor, arrowPosition) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(arrowPosition) || arrowPosition === 'inside') {
        return '';
    }
    var backgroundColor = tooltipModel.get('backgroundColor');
    var borderWidth = tooltipModel.get('borderWidth');
    borderColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["convertToColorString"])(borderColor);
    var arrowPos = mirrorPos(arrowPosition);
    var arrowSize = Math.max(Math.round(borderWidth) * 1.5, 6);
    var positionStyle = '';
    var transformStyle = CSS_TRANSFORM_VENDOR + ':';
    var rotateDeg;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["indexOf"])([
        'left',
        'right'
    ], arrowPos) > -1) {
        positionStyle += 'top:50%';
        transformStyle += "translateY(-50%) rotate(" + (rotateDeg = arrowPos === 'left' ? -225 : -45) + "deg)";
    } else {
        positionStyle += 'left:50%';
        transformStyle += "translateX(-50%) rotate(" + (rotateDeg = arrowPos === 'top' ? 225 : 45) + "deg)";
    }
    var rotateRadian = rotateDeg * Math.PI / 180;
    var arrowWH = arrowSize + borderWidth;
    var rotatedWH = arrowWH * Math.abs(Math.cos(rotateRadian)) + arrowWH * Math.abs(Math.sin(rotateRadian));
    var arrowOffset = Math.round(((rotatedWH - Math.SQRT2 * borderWidth) / 2 + Math.SQRT2 * borderWidth - (rotatedWH - arrowWH) / 2) * 100) / 100;
    positionStyle += ";" + arrowPos + ":-" + arrowOffset + "px";
    var borderStyle = borderColor + " solid " + borderWidth + "px;";
    var styleCss = [
        "position:absolute;width:" + arrowSize + "px;height:" + arrowSize + "px;z-index:-1;",
        positionStyle + ";" + transformStyle + ";",
        "border-bottom:" + borderStyle,
        "border-right:" + borderStyle,
        "background-color:" + backgroundColor + ";"
    ];
    return "<div style=\"" + styleCss.join('') + "\"></div>";
}
function assembleTransition(duration, onlyFadeTransition, enableDisplayTransition) {
    var transitionCurve = 'cubic-bezier(0.23,1,0.32,1)';
    var transitionOption = '';
    var transitionText = '';
    if (enableDisplayTransition) {
        transitionOption = " " + duration / 2 + "s " + transitionCurve;
        transitionText = "opacity" + transitionOption + ",visibility" + transitionOption;
    }
    if (!onlyFadeTransition) {
        transitionOption = " " + duration + "s " + transitionCurve;
        transitionText += (transitionText.length ? ',' : '') + (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$env$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].transformSupported ? "" + CSS_TRANSFORM_VENDOR + transitionOption : ",left" + transitionOption + ",top" + transitionOption);
    }
    return CSS_TRANSITION_VENDOR + ':' + transitionText;
}
function assembleTransform(x, y, toString) {
    // If using float on style, the final width of the dom might
    // keep changing slightly while mouse move. So `toFixed(0)` them.
    var x0 = x.toFixed(0) + 'px';
    var y0 = y.toFixed(0) + 'px';
    // not support transform, use `left` and `top` instead.
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$env$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].transformSupported) {
        return toString ? "top:" + y0 + ";left:" + x0 + ";" : [
            [
                'top',
                y0
            ],
            [
                'left',
                x0
            ]
        ];
    }
    // support transform
    var is3d = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$env$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].transform3dSupported;
    var translate = "translate" + (is3d ? '3d' : '') + "(" + x0 + "," + y0 + (is3d ? ',0' : '') + ")";
    return toString ? 'top:0;left:0;' + CSS_TRANSFORM_VENDOR + ':' + translate + ';' : [
        [
            'top',
            0
        ],
        [
            'left',
            0
        ],
        [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TRANSFORM_VENDOR"],
            translate
        ]
    ];
}
/**
 * @param {Object} textStyle
 * @return {string}
 * @inner
 */ function assembleFont(textStyleModel) {
    var cssText = [];
    var fontSize = textStyleModel.get('fontSize');
    var color = textStyleModel.getTextColor();
    color && cssText.push('color:' + color);
    cssText.push('font:' + textStyleModel.getFont());
    // @ts-ignore, leave it to the tooltip refactor.
    var lineHeight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["retrieve2"])(textStyleModel.get('lineHeight'), Math.round(fontSize * 3 / 2));
    fontSize && cssText.push('line-height:' + lineHeight + 'px');
    var shadowColor = textStyleModel.get('textShadowColor');
    var shadowBlur = textStyleModel.get('textShadowBlur') || 0;
    var shadowOffsetX = textStyleModel.get('textShadowOffsetX') || 0;
    var shadowOffsetY = textStyleModel.get('textShadowOffsetY') || 0;
    shadowColor && shadowBlur && cssText.push('text-shadow:' + shadowOffsetX + 'px ' + shadowOffsetY + 'px ' + shadowBlur + 'px ' + shadowColor);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])([
        'decoration',
        'align'
    ], function(name) {
        var val = textStyleModel.get(name);
        val && cssText.push('text-' + name + ':' + val);
    });
    return cssText.join(';');
}
function assembleCssText(tooltipModel, enableTransition, onlyFadeTransition, enableDisplayTransition) {
    var cssText = [];
    var transitionDuration = tooltipModel.get('transitionDuration');
    var backgroundColor = tooltipModel.get('backgroundColor');
    var shadowBlur = tooltipModel.get('shadowBlur');
    var shadowColor = tooltipModel.get('shadowColor');
    var shadowOffsetX = tooltipModel.get('shadowOffsetX');
    var shadowOffsetY = tooltipModel.get('shadowOffsetY');
    var textStyleModel = tooltipModel.getModel('textStyle');
    var padding = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$tooltipMarkup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPaddingFromTooltipModel"])(tooltipModel, 'html');
    var boxShadow = shadowOffsetX + "px " + shadowOffsetY + "px " + shadowBlur + "px " + shadowColor;
    cssText.push('box-shadow:' + boxShadow);
    // Animation transition. Do not animate when transitionDuration <= 0.
    enableTransition && transitionDuration > 0 && cssText.push(assembleTransition(transitionDuration, onlyFadeTransition, enableDisplayTransition));
    if (backgroundColor) {
        cssText.push('background-color:' + backgroundColor);
    }
    // Border style
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])([
        'width',
        'color',
        'radius'
    ], function(name) {
        var borderName = 'border-' + name;
        var camelCase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toCamelCase"])(borderName);
        var val = tooltipModel.get(camelCase);
        val != null && cssText.push(borderName + ':' + val + (name === 'color' ? '' : 'px'));
    });
    // Text style
    cssText.push(assembleFont(textStyleModel));
    // Padding
    if (padding != null) {
        cssText.push('padding:' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["normalizeCssArray"])(padding).join('px ') + 'px');
    }
    return cssText.join(';') + ';';
}
// If not able to make, do not modify the input `out`.
function makeStyleCoord(out, zr, container, zrX, zrY) {
    var zrPainter = zr && zr.painter;
    if (container) {
        var zrViewportRoot = zrPainter && zrPainter.getViewportRoot();
        if (zrViewportRoot) {
            // Some APPs might use scale on body, so we support CSS transform here.
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformLocalCoord"])(out, zrViewportRoot, container, zrX, zrY);
        }
    } else {
        out[0] = zrX;
        out[1] = zrY;
        // xy should be based on canvas root. But tooltipContent is
        // the sibling of canvas root. So padding of ec container
        // should be considered here.
        var viewportRootOffset = zrPainter && zrPainter.getViewportRootOffset();
        if (viewportRootOffset) {
            out[0] += viewportRootOffset.offsetLeft;
            out[1] += viewportRootOffset.offsetTop;
        }
    }
    out[2] = out[0] / zr.getWidth();
    out[3] = out[1] / zr.getHeight();
}
var TooltipHTMLContent = /** @class */ function() {
    function TooltipHTMLContent(api, opt) {
        this._show = false;
        this._styleCoord = [
            0,
            0,
            0,
            0
        ];
        this._enterable = true;
        this._alwaysShowContent = false;
        this._firstShow = true;
        this._longHide = true;
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$env$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].wxa) {
            return null;
        }
        var el = document.createElement('div');
        // TODO: TYPE
        el.domBelongToZr = true;
        this.el = el;
        var zr = this._zr = api.getZr();
        var appendTo = opt.appendTo;
        var container = appendTo && ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(appendTo) ? document.querySelector(appendTo) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDom"])(appendTo) ? appendTo : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFunction"])(appendTo) && appendTo(api.getDom()));
        makeStyleCoord(this._styleCoord, zr, container, api.getWidth() / 2, api.getHeight() / 2);
        (container || api.getDom()).appendChild(el);
        this._api = api;
        this._container = container;
        // FIXME
        // Is it needed to trigger zr event manually if
        // the browser do not support `pointer-events: none`.
        var self = this;
        el.onmouseenter = function() {
            // clear the timeout in hideLater and keep showing tooltip
            if (self._enterable) {
                clearTimeout(self._hideTimeout);
                self._show = true;
            }
            self._inContent = true;
        };
        el.onmousemove = function(e) {
            e = e || window.event;
            if (!self._enterable) {
                // `pointer-events: none` is set to tooltip content div
                // if `enterable` is set as `false`, and `el.onmousemove`
                // can not be triggered. But in browser that do not
                // support `pointer-events`, we need to do this:
                // Try trigger zrender event to avoid mouse
                // in and out shape too frequently
                var handler = zr.handler;
                var zrViewportRoot = zr.painter.getViewportRoot();
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$event$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["normalizeEvent"])(zrViewportRoot, e, true);
                handler.dispatch('mousemove', e);
            }
        };
        el.onmouseleave = function() {
            // set `_inContent` to `false` before `hideLater`
            self._inContent = false;
            if (self._enterable) {
                if (self._show) {
                    self.hideLater(self._hideDelay);
                }
            }
        };
    }
    /**
   * Update when tooltip is rendered
   */ TooltipHTMLContent.prototype.update = function(tooltipModel) {
        // FIXME
        // Move this logic to ec main?
        if (!this._container) {
            var container = this._api.getDom();
            var position = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getComputedStyle"])(container, 'position');
            var domStyle = container.style;
            if (domStyle.position !== 'absolute' && position !== 'absolute') {
                domStyle.position = 'relative';
            }
        }
        // move tooltip if chart resized
        var alwaysShowContent = tooltipModel.get('alwaysShowContent');
        alwaysShowContent && this._moveIfResized();
        // update alwaysShowContent
        this._alwaysShowContent = alwaysShowContent;
        this._enableDisplayTransition = tooltipModel.get('displayTransition') && tooltipModel.get('transitionDuration') > 0;
        // update className
        this.el.className = tooltipModel.get('className') || '';
    // Hide the tooltip
    // PENDING
    // this.hide();
    };
    TooltipHTMLContent.prototype.show = function(tooltipModel, nearPointColor) {
        clearTimeout(this._hideTimeout);
        clearTimeout(this._longHideTimeout);
        var el = this.el;
        var style = el.style;
        var styleCoord = this._styleCoord;
        if (!el.innerHTML) {
            style.display = 'none';
        } else {
            style.cssText = gCssText + assembleCssText(tooltipModel, !this._firstShow, this._longHide, this._enableDisplayTransition) + assembleTransform(styleCoord[0], styleCoord[1], true) + ("border-color:" + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["convertToColorString"])(nearPointColor) + ";") + (tooltipModel.get('extraCssText') || '') + (";pointer-events:" + (this._enterable ? 'auto' : 'none'));
        }
        this._show = true;
        this._firstShow = false;
        this._longHide = false;
    };
    TooltipHTMLContent.prototype.setContent = function(content, markers, tooltipModel, borderColor, arrowPosition) {
        var el = this.el;
        if (content == null) {
            el.innerHTML = '';
            return;
        }
        var arrow = '';
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(arrowPosition) && tooltipModel.get('trigger') === 'item' && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shouldTooltipConfine"])(tooltipModel)) {
            arrow = assembleArrow(tooltipModel, borderColor, arrowPosition);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(content)) {
            el.innerHTML = content + arrow;
        } else if (content) {
            // Clear previous
            el.innerHTML = '';
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isArray"])(content)) {
                content = [
                    content
                ];
            }
            for(var i = 0; i < content.length; i++){
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDom"])(content[i]) && content[i].parentNode !== el) {
                    el.appendChild(content[i]);
                }
            }
            // no arrow if empty
            if (arrow && el.childNodes.length) {
                // no need to create a new parent element, but it's not supported by IE 10 and older.
                // const arrowEl = document.createRange().createContextualFragment(arrow);
                var arrowEl = document.createElement('div');
                arrowEl.innerHTML = arrow;
                el.appendChild(arrowEl);
            }
        }
    };
    TooltipHTMLContent.prototype.setEnterable = function(enterable) {
        this._enterable = enterable;
    };
    TooltipHTMLContent.prototype.getSize = function() {
        var el = this.el;
        return el ? [
            el.offsetWidth,
            el.offsetHeight
        ] : [
            0,
            0
        ];
    };
    TooltipHTMLContent.prototype.moveTo = function(zrX, zrY) {
        if (!this.el) {
            return;
        }
        var styleCoord = this._styleCoord;
        makeStyleCoord(styleCoord, this._zr, this._container, zrX, zrY);
        if (styleCoord[0] != null && styleCoord[1] != null) {
            var style_1 = this.el.style;
            var transforms = assembleTransform(styleCoord[0], styleCoord[1]);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(transforms, function(transform) {
                style_1[transform[0]] = transform[1];
            });
        }
    };
    /**
   * when `alwaysShowContent` is true,
   * move the tooltip after chart resized
   */ TooltipHTMLContent.prototype._moveIfResized = function() {
        // The ratio of left to width
        var ratioX = this._styleCoord[2];
        // The ratio of top to height
        var ratioY = this._styleCoord[3];
        this.moveTo(ratioX * this._zr.getWidth(), ratioY * this._zr.getHeight());
    };
    TooltipHTMLContent.prototype.hide = function() {
        var _this = this;
        var style = this.el.style;
        if (this._enableDisplayTransition) {
            style.visibility = 'hidden';
            style.opacity = '0';
        } else {
            style.display = 'none';
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$env$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].transform3dSupported && (style.willChange = '');
        this._show = false;
        this._longHideTimeout = setTimeout(function() {
            return _this._longHide = true;
        }, 500);
    };
    TooltipHTMLContent.prototype.hideLater = function(time) {
        if (this._show && !(this._inContent && this._enterable) && !this._alwaysShowContent) {
            if (time) {
                this._hideDelay = time;
                // Set show false to avoid invoke hideLater multiple times
                this._show = false;
                this._hideTimeout = setTimeout((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bind"])(this.hide, this), time);
            } else {
                this.hide();
            }
        }
    };
    TooltipHTMLContent.prototype.isShow = function() {
        return this._show;
    };
    TooltipHTMLContent.prototype.dispose = function() {
        clearTimeout(this._hideTimeout);
        clearTimeout(this._longHideTimeout);
        var zr = this._zr;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformLocalCoordClear"])(zr && zr.painter && zr.painter.getViewportRoot(), this._container);
        var el = this.el;
        if (el) {
            el.onmouseenter = el.onmousemove = el.onmouseleave = null;
            var parentNode = el.parentNode;
            parentNode && parentNode.removeChild(el);
        }
        this.el = this._container = null;
    };
    return TooltipHTMLContent;
}();
const __TURBOPACK__default__export__ = TooltipHTMLContent;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/tooltip/TooltipRichContent.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Text.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$tooltipMarkup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/tooltip/tooltipMarkup.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/log.js [app-ssr] (ecmascript)");
;
;
;
;
var TooltipRichContent = /** @class */ function() {
    function TooltipRichContent(api) {
        this._show = false;
        this._styleCoord = [
            0,
            0,
            0,
            0
        ];
        this._alwaysShowContent = false;
        this._enterable = true;
        this._zr = api.getZr();
        makeStyleCoord(this._styleCoord, this._zr, api.getWidth() / 2, api.getHeight() / 2);
    }
    /**
   * Update when tooltip is rendered
   */ TooltipRichContent.prototype.update = function(tooltipModel) {
        var alwaysShowContent = tooltipModel.get('alwaysShowContent');
        alwaysShowContent && this._moveIfResized();
        // update alwaysShowContent
        this._alwaysShowContent = alwaysShowContent;
    };
    TooltipRichContent.prototype.show = function() {
        if (this._hideTimeout) {
            clearTimeout(this._hideTimeout);
        }
        this.el.show();
        this._show = true;
    };
    /**
   * Set tooltip content
   */ TooltipRichContent.prototype.setContent = function(content, markupStyleCreator, tooltipModel, borderColor, arrowPosition) {
        var _this = this;
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isObject"](content)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["throwError"])(("TURBOPACK compile-time truthy", 1) ? 'Passing DOM nodes as content is not supported in richText tooltip!' : "TURBOPACK unreachable");
        }
        if (this.el) {
            this._zr.remove(this.el);
        }
        var textStyleModel = tooltipModel.getModel('textStyle');
        this.el = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]({
            style: {
                rich: markupStyleCreator.richTextStyles,
                text: content,
                lineHeight: 22,
                borderWidth: 1,
                borderColor: borderColor,
                textShadowColor: textStyleModel.get('textShadowColor'),
                fill: tooltipModel.get([
                    'textStyle',
                    'color'
                ]),
                padding: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$tooltipMarkup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPaddingFromTooltipModel"])(tooltipModel, 'richText'),
                verticalAlign: 'top',
                align: 'left'
            },
            z: tooltipModel.get('z')
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"]([
            'backgroundColor',
            'borderRadius',
            'shadowColor',
            'shadowBlur',
            'shadowOffsetX',
            'shadowOffsetY'
        ], function(propName) {
            _this.el.style[propName] = tooltipModel.get(propName);
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"]([
            'textShadowBlur',
            'textShadowOffsetX',
            'textShadowOffsetY'
        ], function(propName) {
            _this.el.style[propName] = textStyleModel.get(propName) || 0;
        });
        this._zr.add(this.el);
        var self = this;
        this.el.on('mouseover', function() {
            // clear the timeout in hideLater and keep showing tooltip
            if (self._enterable) {
                clearTimeout(self._hideTimeout);
                self._show = true;
            }
            self._inContent = true;
        });
        this.el.on('mouseout', function() {
            if (self._enterable) {
                if (self._show) {
                    self.hideLater(self._hideDelay);
                }
            }
            self._inContent = false;
        });
    };
    TooltipRichContent.prototype.setEnterable = function(enterable) {
        this._enterable = enterable;
    };
    TooltipRichContent.prototype.getSize = function() {
        var el = this.el;
        var bounding = this.el.getBoundingRect();
        // bounding rect does not include shadow. For renderMode richText,
        // if overflow, it will be cut. So calculate them accurately.
        var shadowOuterSize = calcShadowOuterSize(el.style);
        return [
            bounding.width + shadowOuterSize.left + shadowOuterSize.right,
            bounding.height + shadowOuterSize.top + shadowOuterSize.bottom
        ];
    };
    TooltipRichContent.prototype.moveTo = function(x, y) {
        var el = this.el;
        if (el) {
            var styleCoord = this._styleCoord;
            makeStyleCoord(styleCoord, this._zr, x, y);
            x = styleCoord[0];
            y = styleCoord[1];
            var style = el.style;
            var borderWidth = mathMaxWith0(style.borderWidth || 0);
            var shadowOuterSize = calcShadowOuterSize(style);
            // rich text x, y do not include border.
            el.x = x + borderWidth + shadowOuterSize.left;
            el.y = y + borderWidth + shadowOuterSize.top;
            el.markRedraw();
        }
    };
    /**
   * when `alwaysShowContent` is true,
   * move the tooltip after chart resized
   */ TooltipRichContent.prototype._moveIfResized = function() {
        // The ratio of left to width
        var ratioX = this._styleCoord[2];
        // The ratio of top to height
        var ratioY = this._styleCoord[3];
        this.moveTo(ratioX * this._zr.getWidth(), ratioY * this._zr.getHeight());
    };
    TooltipRichContent.prototype.hide = function() {
        if (this.el) {
            this.el.hide();
        }
        this._show = false;
    };
    TooltipRichContent.prototype.hideLater = function(time) {
        if (this._show && !(this._inContent && this._enterable) && !this._alwaysShowContent) {
            if (time) {
                this._hideDelay = time;
                // Set show false to avoid invoke hideLater multiple times
                this._show = false;
                this._hideTimeout = setTimeout(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bind"](this.hide, this), time);
            } else {
                this.hide();
            }
        }
    };
    TooltipRichContent.prototype.isShow = function() {
        return this._show;
    };
    TooltipRichContent.prototype.dispose = function() {
        this._zr.remove(this.el);
    };
    return TooltipRichContent;
}();
function mathMaxWith0(val) {
    return Math.max(0, val);
}
function calcShadowOuterSize(style) {
    var shadowBlur = mathMaxWith0(style.shadowBlur || 0);
    var shadowOffsetX = mathMaxWith0(style.shadowOffsetX || 0);
    var shadowOffsetY = mathMaxWith0(style.shadowOffsetY || 0);
    return {
        left: mathMaxWith0(shadowBlur - shadowOffsetX),
        right: mathMaxWith0(shadowBlur + shadowOffsetX),
        top: mathMaxWith0(shadowBlur - shadowOffsetY),
        bottom: mathMaxWith0(shadowBlur + shadowOffsetY)
    };
}
function makeStyleCoord(out, zr, zrX, zrY) {
    out[0] = zrX;
    out[1] = zrY;
    out[2] = out[0] / zr.getWidth();
    out[3] = out[1] / zr.getHeight();
}
const __TURBOPACK__default__export__ = TooltipRichContent;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/tooltip/TooltipView.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-ssr] (ecmascript)");
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
*/ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$env$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/env.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$TooltipHTMLContent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/tooltip/TooltipHTMLContent.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$TooltipRichContent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/tooltip/TooltipRichContent.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/format.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/number.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Rect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Rect$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Rect.js [app-ssr] (ecmascript) <export default as Rect>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$findPointFromSeries$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axisPointer/findPointFromSeries.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/layout.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/Model.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$globalListener$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axisPointer/globalListener.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/axisHelper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$viewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axisPointer/viewHelper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/view/Component.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/time.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/innerStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/tooltip/helper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$mixin$2f$dataFormat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/mixin/dataFormat.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$tooltipMarkup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/tooltip/tooltipMarkup.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$event$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/event.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$throttle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/throttle.js [app-ssr] (ecmascript)");
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
var proxyRect = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Rect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Rect$3e$__["Rect"]({
    shape: {
        x: -1,
        y: -1,
        width: 2,
        height: 2
    }
});
var TooltipView = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(TooltipView, _super);
    function TooltipView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = TooltipView.type;
        return _this;
    }
    TooltipView.prototype.init = function(ecModel, api) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$env$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].node || !api.getDom()) {
            return;
        }
        var tooltipModel = ecModel.getComponent('tooltip');
        var renderMode = this._renderMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTooltipRenderMode"])(tooltipModel.get('renderMode'));
        this._tooltipContent = renderMode === 'richText' ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$TooltipRichContent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](api) : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$TooltipHTMLContent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](api, {
            appendTo: tooltipModel.get('appendToBody', true) ? 'body' : tooltipModel.get('appendTo', true)
        });
    };
    TooltipView.prototype.render = function(tooltipModel, ecModel, api) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$env$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].node || !api.getDom()) {
            return;
        }
        // Reset
        this.group.removeAll();
        this._tooltipModel = tooltipModel;
        this._ecModel = ecModel;
        this._api = api;
        var tooltipContent = this._tooltipContent;
        tooltipContent.update(tooltipModel);
        tooltipContent.setEnterable(tooltipModel.get('enterable'));
        this._initGlobalListener();
        this._keepShow();
        // PENDING
        // `mousemove` event will be triggered very frequently when the mouse moves fast,
        // which causes that the `updatePosition` function was also called frequently.
        // In Chrome with devtools open and Firefox, tooltip looks laggy and shakes. See #14695 #16101
        // To avoid frequent triggering,
        // consider throttling it in 50ms when transition is enabled
        if (this._renderMode !== 'richText' && tooltipModel.get('transitionDuration')) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$throttle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createOrUpdate"])(this, '_updatePosition', 50, 'fixRate');
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$throttle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clear"])(this, '_updatePosition');
        }
    };
    TooltipView.prototype._initGlobalListener = function() {
        var tooltipModel = this._tooltipModel;
        var triggerOn = tooltipModel.get('triggerOn');
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$globalListener$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["register"]('itemTooltip', this._api, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bind"])(function(currTrigger, e, dispatchAction) {
            // If 'none', it is not controlled by mouse totally.
            if (triggerOn !== 'none') {
                if (triggerOn.indexOf(currTrigger) >= 0) {
                    this._tryShow(e, dispatchAction);
                } else if (currTrigger === 'leave') {
                    this._hide(dispatchAction);
                }
            }
        }, this));
    };
    TooltipView.prototype._keepShow = function() {
        var tooltipModel = this._tooltipModel;
        var ecModel = this._ecModel;
        var api = this._api;
        var triggerOn = tooltipModel.get('triggerOn');
        // Try to keep the tooltip show when refreshing
        if (this._lastX != null && this._lastY != null && triggerOn !== 'none' && triggerOn !== 'click') {
            var self_1 = this;
            clearTimeout(this._refreshUpdateTimeout);
            this._refreshUpdateTimeout = setTimeout(function() {
                // Show tip next tick after other charts are rendered
                // In case highlight action has wrong result
                // FIXME
                !api.isDisposed() && self_1.manuallyShowTip(tooltipModel, ecModel, api, {
                    x: self_1._lastX,
                    y: self_1._lastY,
                    dataByCoordSys: self_1._lastDataByCoordSys
                });
            });
        }
    };
    /**
   * Show tip manually by
   * dispatchAction({
   *     type: 'showTip',
   *     x: 10,
   *     y: 10
   * });
   * Or
   * dispatchAction({
   *      type: 'showTip',
   *      seriesIndex: 0,
   *      dataIndex or dataIndexInside or name
   * });
   *
   *  TODO Batch
   */ TooltipView.prototype.manuallyShowTip = function(tooltipModel, ecModel, api, payload) {
        if (payload.from === this.uid || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$env$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].node || !api.getDom()) {
            return;
        }
        var dispatchAction = makeDispatchAction(payload, api);
        // Reset ticket
        this._ticket = '';
        // When triggered from axisPointer.
        var dataByCoordSys = payload.dataByCoordSys;
        var cmptRef = findComponentReference(payload, ecModel, api);
        if (cmptRef) {
            var rect = cmptRef.el.getBoundingRect().clone();
            rect.applyTransform(cmptRef.el.transform);
            this._tryShow({
                offsetX: rect.x + rect.width / 2,
                offsetY: rect.y + rect.height / 2,
                target: cmptRef.el,
                position: payload.position,
                // When manully trigger, the mouse is not on the el, so we'd better to
                // position tooltip on the bottom of the el and display arrow is possible.
                positionDefault: 'bottom'
            }, dispatchAction);
        } else if (payload.tooltip && payload.x != null && payload.y != null) {
            var el = proxyRect;
            el.x = payload.x;
            el.y = payload.y;
            el.update();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getECData"])(el).tooltipConfig = {
                name: null,
                option: payload.tooltip
            };
            // Manually show tooltip while view is not using zrender elements.
            this._tryShow({
                offsetX: payload.x,
                offsetY: payload.y,
                target: el
            }, dispatchAction);
        } else if (dataByCoordSys) {
            this._tryShow({
                offsetX: payload.x,
                offsetY: payload.y,
                position: payload.position,
                dataByCoordSys: dataByCoordSys,
                tooltipOption: payload.tooltipOption
            }, dispatchAction);
        } else if (payload.seriesIndex != null) {
            if (this._manuallyAxisShowTip(tooltipModel, ecModel, api, payload)) {
                return;
            }
            var pointInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$findPointFromSeries$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(payload, ecModel);
            var cx = pointInfo.point[0];
            var cy = pointInfo.point[1];
            if (cx != null && cy != null) {
                this._tryShow({
                    offsetX: cx,
                    offsetY: cy,
                    target: pointInfo.el,
                    position: payload.position,
                    // When manully trigger, the mouse is not on the el, so we'd better to
                    // position tooltip on the bottom of the el and display arrow is possible.
                    positionDefault: 'bottom'
                }, dispatchAction);
            }
        } else if (payload.x != null && payload.y != null) {
            // FIXME
            // should wrap dispatchAction like `axisPointer/globalListener` ?
            api.dispatchAction({
                type: 'updateAxisPointer',
                x: payload.x,
                y: payload.y
            });
            this._tryShow({
                offsetX: payload.x,
                offsetY: payload.y,
                position: payload.position,
                target: api.getZr().findHover(payload.x, payload.y).target
            }, dispatchAction);
        }
    };
    TooltipView.prototype.manuallyHideTip = function(tooltipModel, ecModel, api, payload) {
        var tooltipContent = this._tooltipContent;
        if (this._tooltipModel) {
            tooltipContent.hideLater(this._tooltipModel.get('hideDelay'));
        }
        this._lastX = this._lastY = this._lastDataByCoordSys = null;
        if (payload.from !== this.uid) {
            this._hide(makeDispatchAction(payload, api));
        }
    };
    // Be compatible with previous design, that is, when tooltip.type is 'axis' and
    // dispatchAction 'showTip' with seriesIndex and dataIndex will trigger axis pointer
    // and tooltip.
    TooltipView.prototype._manuallyAxisShowTip = function(tooltipModel, ecModel, api, payload) {
        var seriesIndex = payload.seriesIndex;
        var dataIndex = payload.dataIndex;
        // @ts-ignore
        var coordSysAxesInfo = ecModel.getComponent('axisPointer').coordSysAxesInfo;
        if (seriesIndex == null || dataIndex == null || coordSysAxesInfo == null) {
            return;
        }
        var seriesModel = ecModel.getSeriesByIndex(seriesIndex);
        if (!seriesModel) {
            return;
        }
        var data = seriesModel.getData();
        var tooltipCascadedModel = buildTooltipModel([
            data.getItemModel(dataIndex),
            seriesModel,
            (seriesModel.coordinateSystem || {}).model
        ], this._tooltipModel);
        if (tooltipCascadedModel.get('trigger') !== 'axis') {
            return;
        }
        api.dispatchAction({
            type: 'updateAxisPointer',
            seriesIndex: seriesIndex,
            dataIndex: dataIndex,
            position: payload.position
        });
        return true;
    };
    TooltipView.prototype._tryShow = function(e, dispatchAction) {
        var el = e.target;
        var tooltipModel = this._tooltipModel;
        if (!tooltipModel) {
            return;
        }
        // Save mouse x, mouse y. So we can try to keep showing the tip if chart is refreshed
        this._lastX = e.offsetX;
        this._lastY = e.offsetY;
        var dataByCoordSys = e.dataByCoordSys;
        if (dataByCoordSys && dataByCoordSys.length) {
            this._showAxisTooltip(dataByCoordSys, e);
        } else if (el) {
            var ecData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getECData"])(el);
            if (ecData.ssrType === 'legend') {
                // Don't trigger tooltip for legend tooltip item
                return;
            }
            this._lastDataByCoordSys = null;
            var seriesDispatcher_1;
            var cmptDispatcher_1;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$event$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findEventDispatcher"])(el, function(target) {
                if (target.tooltipDisabled) {
                    seriesDispatcher_1 = cmptDispatcher_1 = null;
                    return true;
                }
                if (seriesDispatcher_1 || cmptDispatcher_1) {
                    return;
                }
                // Always show item tooltip if mouse is on the element with dataIndex
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getECData"])(target).dataIndex != null) {
                    seriesDispatcher_1 = target;
                } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getECData"])(target).tooltipConfig != null) {
                    cmptDispatcher_1 = target;
                }
            }, true);
            if (seriesDispatcher_1) {
                this._showSeriesItemTooltip(e, seriesDispatcher_1, dispatchAction);
            } else if (cmptDispatcher_1) {
                this._showComponentItemTooltip(e, cmptDispatcher_1, dispatchAction);
            } else {
                this._hide(dispatchAction);
            }
        } else {
            this._lastDataByCoordSys = null;
            this._hide(dispatchAction);
        }
    };
    TooltipView.prototype._showOrMove = function(tooltipModel, cb) {
        // showDelay is used in this case: tooltip.enterable is set
        // as true. User intent to move mouse into tooltip and click
        // something. `showDelay` makes it easier to enter the content
        // but tooltip do not move immediately.
        var delay = tooltipModel.get('showDelay');
        cb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bind"])(cb, this);
        clearTimeout(this._showTimout);
        delay > 0 ? this._showTimout = setTimeout(cb, delay) : cb();
    };
    TooltipView.prototype._showAxisTooltip = function(dataByCoordSys, e) {
        var ecModel = this._ecModel;
        var globalTooltipModel = this._tooltipModel;
        var point = [
            e.offsetX,
            e.offsetY
        ];
        var singleTooltipModel = buildTooltipModel([
            e.tooltipOption
        ], globalTooltipModel);
        var renderMode = this._renderMode;
        var cbParamsList = [];
        var articleMarkup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$tooltipMarkup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createTooltipMarkup"])('section', {
            blocks: [],
            noHeader: true
        });
        // Only for legacy: `Serise['formatTooltip']` returns a string.
        var markupTextArrLegacy = [];
        var markupStyleCreator = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$tooltipMarkup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TooltipMarkupStyleCreator"]();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(dataByCoordSys, function(itemCoordSys) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(itemCoordSys.dataByAxis, function(axisItem) {
                var axisModel = ecModel.getComponent(axisItem.axisDim + 'Axis', axisItem.axisIndex);
                var axisValue = axisItem.value;
                if (!axisModel || axisValue == null) {
                    return;
                }
                // FIXME: when using `tooltip.trigger: 'axis'`, the precision of the axis value displayed in tooltip
                //  should match the original series values rather than using the default stretegy in Interval.ts
                //  (getPrecision(interval) + 2); otherwise it may cuase confusion.
                var axisValueLabel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$viewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getValueLabel"](axisValue, axisModel.axis, ecModel, axisItem.seriesDataIndices, axisItem.valueLabelOpt);
                var axisSectionMarkup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$tooltipMarkup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createTooltipMarkup"])('section', {
                    header: axisValueLabel,
                    noHeader: !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trim"])(axisValueLabel),
                    sortBlocks: true,
                    blocks: []
                });
                articleMarkup.blocks.push(axisSectionMarkup);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(axisItem.seriesDataIndices, function(idxItem) {
                    var series = ecModel.getSeriesByIndex(idxItem.seriesIndex);
                    var dataIndex = idxItem.dataIndexInside;
                    var cbParams = series.getDataParams(dataIndex);
                    // Can't find data.
                    if (cbParams.dataIndex < 0) {
                        return;
                    }
                    cbParams.axisDim = axisItem.axisDim;
                    cbParams.axisIndex = axisItem.axisIndex;
                    cbParams.axisType = axisItem.axisType;
                    cbParams.axisId = axisItem.axisId;
                    cbParams.axisValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAxisRawValue"](axisModel.axis, {
                        value: axisValue
                    });
                    cbParams.axisValueLabel = axisValueLabel;
                    // Pre-create marker style for makers. Users can assemble richText
                    // text in `formatter` callback and use those markers style.
                    cbParams.marker = markupStyleCreator.makeTooltipMarker('item', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["convertToColorString"])(cbParams.color), renderMode);
                    var seriesTooltipResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$mixin$2f$dataFormat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeTooltipFormatResult"])(series.formatTooltip(dataIndex, true, null));
                    var frag = seriesTooltipResult.frag;
                    if (frag) {
                        var valueFormatter = buildTooltipModel([
                            series
                        ], globalTooltipModel).get('valueFormatter');
                        axisSectionMarkup.blocks.push(valueFormatter ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extend"])({
                            valueFormatter: valueFormatter
                        }, frag) : frag);
                    }
                    if (seriesTooltipResult.text) {
                        markupTextArrLegacy.push(seriesTooltipResult.text);
                    }
                    cbParamsList.push(cbParams);
                });
            });
        });
        // In most cases, the second axis is displays upper on the first one.
        // So we reverse it to look better.
        articleMarkup.blocks.reverse();
        markupTextArrLegacy.reverse();
        var positionExpr = e.position;
        var orderMode = singleTooltipModel.get('order');
        var builtMarkupText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$tooltipMarkup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildTooltipMarkup"])(articleMarkup, markupStyleCreator, renderMode, orderMode, ecModel.get('useUTC'), singleTooltipModel.get('textStyle'));
        builtMarkupText && markupTextArrLegacy.unshift(builtMarkupText);
        var blockBreak = renderMode === 'richText' ? '\n\n' : '<br/>';
        var allMarkupText = markupTextArrLegacy.join(blockBreak);
        this._showOrMove(singleTooltipModel, function() {
            if (this._updateContentNotChangedOnAxis(dataByCoordSys, cbParamsList)) {
                this._updatePosition(singleTooltipModel, positionExpr, point[0], point[1], this._tooltipContent, cbParamsList);
            } else {
                this._showTooltipContent(singleTooltipModel, allMarkupText, cbParamsList, Math.random() + '', point[0], point[1], positionExpr, null, markupStyleCreator);
            }
        });
    // Do not trigger events here, because this branch only be entered
    // from dispatchAction.
    };
    TooltipView.prototype._showSeriesItemTooltip = function(e, dispatcher, dispatchAction) {
        var ecModel = this._ecModel;
        var ecData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getECData"])(dispatcher);
        // Use dataModel in element if possible
        // Used when mouseover on a element like markPoint or edge
        // In which case, the data is not main data in series.
        var seriesIndex = ecData.seriesIndex;
        var seriesModel = ecModel.getSeriesByIndex(seriesIndex);
        // For example, graph link.
        var dataModel = ecData.dataModel || seriesModel;
        var dataIndex = ecData.dataIndex;
        var dataType = ecData.dataType;
        var data = dataModel.getData(dataType);
        var renderMode = this._renderMode;
        var positionDefault = e.positionDefault;
        var tooltipModel = buildTooltipModel([
            data.getItemModel(dataIndex),
            dataModel,
            seriesModel && (seriesModel.coordinateSystem || {}).model
        ], this._tooltipModel, positionDefault ? {
            position: positionDefault
        } : null);
        var tooltipTrigger = tooltipModel.get('trigger');
        if (tooltipTrigger != null && tooltipTrigger !== 'item') {
            return;
        }
        var params = dataModel.getDataParams(dataIndex, dataType);
        var markupStyleCreator = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$tooltipMarkup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TooltipMarkupStyleCreator"]();
        // Pre-create marker style for makers. Users can assemble richText
        // text in `formatter` callback and use those markers style.
        params.marker = markupStyleCreator.makeTooltipMarker('item', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["convertToColorString"])(params.color), renderMode);
        var seriesTooltipResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$mixin$2f$dataFormat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeTooltipFormatResult"])(dataModel.formatTooltip(dataIndex, false, dataType));
        var orderMode = tooltipModel.get('order');
        var valueFormatter = tooltipModel.get('valueFormatter');
        var frag = seriesTooltipResult.frag;
        var markupText = frag ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$tooltipMarkup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildTooltipMarkup"])(valueFormatter ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extend"])({
            valueFormatter: valueFormatter
        }, frag) : frag, markupStyleCreator, renderMode, orderMode, ecModel.get('useUTC'), tooltipModel.get('textStyle')) : seriesTooltipResult.text;
        var asyncTicket = 'item_' + dataModel.name + '_' + dataIndex;
        this._showOrMove(tooltipModel, function() {
            this._showTooltipContent(tooltipModel, markupText, params, asyncTicket, e.offsetX, e.offsetY, e.position, e.target, markupStyleCreator);
        });
        // FIXME
        // duplicated showtip if manuallyShowTip is called from dispatchAction.
        dispatchAction({
            type: 'showTip',
            dataIndexInside: dataIndex,
            dataIndex: data.getRawIndex(dataIndex),
            seriesIndex: seriesIndex,
            from: this.uid
        });
    };
    TooltipView.prototype._showComponentItemTooltip = function(e, el, dispatchAction) {
        var isHTMLRenderMode = this._renderMode === 'html';
        var ecData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getECData"])(el);
        var tooltipConfig = ecData.tooltipConfig;
        var tooltipOpt = tooltipConfig.option || {};
        var encodeHTMLContent = tooltipOpt.encodeHTMLContent;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(tooltipOpt)) {
            var content = tooltipOpt;
            tooltipOpt = {
                content: content,
                // Fixed formatter
                formatter: content
            };
            // when `tooltipConfig.option` is a string rather than an object,
            // we can't know if the content needs to be encoded
            // for the sake of security, encode it by default.
            encodeHTMLContent = true;
        }
        if (encodeHTMLContent && isHTMLRenderMode && tooltipOpt.content) {
            // clone might be unnecessary?
            tooltipOpt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clone"])(tooltipOpt);
            tooltipOpt.content = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeHTML"])(tooltipOpt.content);
        }
        var tooltipModelCascade = [
            tooltipOpt
        ];
        var cmpt = this._ecModel.getComponent(ecData.componentMainType, ecData.componentIndex);
        if (cmpt) {
            tooltipModelCascade.push(cmpt);
        }
        // In most cases, component tooltip formatter has different params with series tooltip formatter,
        // so that they cannot share the same formatter. Since the global tooltip formatter is used for series
        // by convention, we do not use it as the default formatter for component.
        tooltipModelCascade.push({
            formatter: tooltipOpt.content
        });
        var positionDefault = e.positionDefault;
        var subTooltipModel = buildTooltipModel(tooltipModelCascade, this._tooltipModel, positionDefault ? {
            position: positionDefault
        } : null);
        var defaultHtml = subTooltipModel.get('content');
        var asyncTicket = Math.random() + '';
        // PENDING: this case do not support richText style yet.
        var markupStyleCreator = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$tooltipMarkup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TooltipMarkupStyleCreator"]();
        // Do not check whether `trigger` is 'none' here, because `trigger`
        // only works on coordinate system. In fact, we have not found case
        // that requires setting `trigger` nothing on component yet.
        this._showOrMove(subTooltipModel, function() {
            // Use formatterParams from element defined in component
            // Avoid users modify it.
            var formatterParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clone"])(subTooltipModel.get('formatterParams') || {});
            this._showTooltipContent(subTooltipModel, defaultHtml, formatterParams, asyncTicket, e.offsetX, e.offsetY, e.position, el, markupStyleCreator);
        });
        // If not dispatch showTip, tip may be hide triggered by axis.
        dispatchAction({
            type: 'showTip',
            from: this.uid
        });
    };
    TooltipView.prototype._showTooltipContent = function(// Use Model<TooltipOption> insteadof TooltipModel because this model may be from series or other options.
    // Instead of top level tooltip.
    tooltipModel, defaultHtml, params, asyncTicket, x, y, positionExpr, el, markupStyleCreator) {
        // Reset ticket
        this._ticket = '';
        if (!tooltipModel.get('showContent') || !tooltipModel.get('show')) {
            return;
        }
        var tooltipContent = this._tooltipContent;
        tooltipContent.setEnterable(tooltipModel.get('enterable'));
        var formatter = tooltipModel.get('formatter');
        positionExpr = positionExpr || tooltipModel.get('position');
        var html = defaultHtml;
        var nearPoint = this._getNearestPoint([
            x,
            y
        ], params, tooltipModel.get('trigger'), tooltipModel.get('borderColor'), tooltipModel.get('defaultBorderColor', true));
        var nearPointColor = nearPoint.color;
        if (formatter) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(formatter)) {
                var useUTC = tooltipModel.ecModel.get('useUTC');
                var params0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isArray"])(params) ? params[0] : params;
                var isTimeAxis = params0 && params0.axisType && params0.axisType.indexOf('time') >= 0;
                html = formatter;
                if (isTimeAxis) {
                    html = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])(params0.axisValue, html, useUTC);
                }
                html = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["formatTpl"])(html, params, true);
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFunction"])(formatter)) {
                var callback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bind"])(function(cbTicket, html) {
                    if (cbTicket === this._ticket) {
                        tooltipContent.setContent(html, markupStyleCreator, tooltipModel, nearPointColor, positionExpr);
                        this._updatePosition(tooltipModel, positionExpr, x, y, tooltipContent, params, el);
                    }
                }, this);
                this._ticket = asyncTicket;
                html = formatter(params, asyncTicket, callback);
            } else {
                html = formatter;
            }
        }
        tooltipContent.setContent(html, markupStyleCreator, tooltipModel, nearPointColor, positionExpr);
        tooltipContent.show(tooltipModel, nearPointColor);
        this._updatePosition(tooltipModel, positionExpr, x, y, tooltipContent, params, el);
    };
    TooltipView.prototype._getNearestPoint = function(point, tooltipDataParams, trigger, borderColor, defaultBorderColor) {
        if (trigger === 'axis' || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isArray"])(tooltipDataParams)) {
            return {
                color: borderColor || defaultBorderColor
            };
        }
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isArray"])(tooltipDataParams)) {
            return {
                color: borderColor || tooltipDataParams.color || tooltipDataParams.borderColor
            };
        }
    };
    TooltipView.prototype._updatePosition = function(tooltipModel, positionExpr, x, // Mouse x
    y, // Mouse y
    content, params, el) {
        var viewWidth = this._api.getWidth();
        var viewHeight = this._api.getHeight();
        positionExpr = positionExpr || tooltipModel.get('position');
        var contentSize = content.getSize();
        var align = tooltipModel.get('align');
        var vAlign = tooltipModel.get('verticalAlign');
        var rect = el && el.getBoundingRect().clone();
        el && rect.applyTransform(el.transform);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFunction"])(positionExpr)) {
            // Callback of position can be an array or a string specify the position
            positionExpr = positionExpr([
                x,
                y
            ], params, content.el, rect, {
                viewSize: [
                    viewWidth,
                    viewHeight
                ],
                contentSize: contentSize.slice()
            });
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isArray"])(positionExpr)) {
            x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parsePercent"])(positionExpr[0], viewWidth);
            y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parsePercent"])(positionExpr[1], viewHeight);
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isObject"])(positionExpr)) {
            var boxLayoutPosition = positionExpr;
            boxLayoutPosition.width = contentSize[0];
            boxLayoutPosition.height = contentSize[1];
            var layoutRect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLayoutRect"])(boxLayoutPosition, {
                width: viewWidth,
                height: viewHeight
            });
            x = layoutRect.x;
            y = layoutRect.y;
            align = null;
            // When positionExpr is left/top/right/bottom,
            // align and verticalAlign will not work.
            vAlign = null;
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(positionExpr) && el) {
            var pos = calcTooltipPosition(positionExpr, rect, contentSize, tooltipModel.get('borderWidth'));
            x = pos[0];
            y = pos[1];
        } else {
            var pos = refixTooltipPosition(x, y, content, viewWidth, viewHeight, align ? null : 20, vAlign ? null : 20);
            x = pos[0];
            y = pos[1];
        }
        align && (x -= isCenterAlign(align) ? contentSize[0] / 2 : align === 'right' ? contentSize[0] : 0);
        vAlign && (y -= isCenterAlign(vAlign) ? contentSize[1] / 2 : vAlign === 'bottom' ? contentSize[1] : 0);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shouldTooltipConfine"])(tooltipModel)) {
            var pos = confineTooltipPosition(x, y, content, viewWidth, viewHeight);
            x = pos[0];
            y = pos[1];
        }
        content.moveTo(x, y);
    };
    // FIXME
    // Should we remove this but leave this to user?
    TooltipView.prototype._updateContentNotChangedOnAxis = function(dataByCoordSys, cbParamsList) {
        var lastCoordSys = this._lastDataByCoordSys;
        var lastCbParamsList = this._cbParamsList;
        var contentNotChanged = !!lastCoordSys && lastCoordSys.length === dataByCoordSys.length;
        contentNotChanged && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(lastCoordSys, function(lastItemCoordSys, indexCoordSys) {
            var lastDataByAxis = lastItemCoordSys.dataByAxis || [];
            var thisItemCoordSys = dataByCoordSys[indexCoordSys] || {};
            var thisDataByAxis = thisItemCoordSys.dataByAxis || [];
            contentNotChanged = contentNotChanged && lastDataByAxis.length === thisDataByAxis.length;
            contentNotChanged && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(lastDataByAxis, function(lastItem, indexAxis) {
                var thisItem = thisDataByAxis[indexAxis] || {};
                var lastIndices = lastItem.seriesDataIndices || [];
                var newIndices = thisItem.seriesDataIndices || [];
                contentNotChanged = contentNotChanged && lastItem.value === thisItem.value && lastItem.axisType === thisItem.axisType && lastItem.axisId === thisItem.axisId && lastIndices.length === newIndices.length;
                contentNotChanged && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(lastIndices, function(lastIdxItem, j) {
                    var newIdxItem = newIndices[j];
                    contentNotChanged = contentNotChanged && lastIdxItem.seriesIndex === newIdxItem.seriesIndex && lastIdxItem.dataIndex === newIdxItem.dataIndex;
                });
                // check is cbParams data value changed
                lastCbParamsList && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(lastItem.seriesDataIndices, function(idxItem) {
                    var seriesIdx = idxItem.seriesIndex;
                    var cbParams = cbParamsList[seriesIdx];
                    var lastCbParams = lastCbParamsList[seriesIdx];
                    if (cbParams && lastCbParams && lastCbParams.data !== cbParams.data) {
                        contentNotChanged = false;
                    }
                });
            });
        });
        this._lastDataByCoordSys = dataByCoordSys;
        this._cbParamsList = cbParamsList;
        return !!contentNotChanged;
    };
    TooltipView.prototype._hide = function(dispatchAction) {
        // Do not directly hideLater here, because this behavior may be prevented
        // in dispatchAction when showTip is dispatched.
        // FIXME
        // duplicated hideTip if manuallyHideTip is called from dispatchAction.
        this._lastDataByCoordSys = null;
        dispatchAction({
            type: 'hideTip',
            from: this.uid
        });
    };
    TooltipView.prototype.dispose = function(ecModel, api) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$env$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].node || !api.getDom()) {
            return;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$throttle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clear"])(this, '_updatePosition');
        this._tooltipContent.dispose();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$globalListener$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unregister"]('itemTooltip', api);
    };
    TooltipView.type = 'tooltip';
    return TooltipView;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
/**
 * From top to bottom. (the last one should be globalTooltipModel);
 */ function buildTooltipModel(modelCascade, globalTooltipModel, defaultTooltipOption) {
    // Last is always tooltip model.
    var ecModel = globalTooltipModel.ecModel;
    var resultModel;
    if (defaultTooltipOption) {
        resultModel = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](defaultTooltipOption, ecModel, ecModel);
        resultModel = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](globalTooltipModel.option, resultModel, ecModel);
    } else {
        resultModel = globalTooltipModel;
    }
    for(var i = modelCascade.length - 1; i >= 0; i--){
        var tooltipOpt = modelCascade[i];
        if (tooltipOpt) {
            if (tooltipOpt instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]) {
                tooltipOpt = tooltipOpt.get('tooltip', true);
            }
            // In each data item tooltip can be simply write:
            // {
            //  value: 10,
            //  tooltip: 'Something you need to know'
            // }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(tooltipOpt)) {
                tooltipOpt = {
                    formatter: tooltipOpt
                };
            }
            if (tooltipOpt) {
                resultModel = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](tooltipOpt, resultModel, ecModel);
            }
        }
    }
    return resultModel;
}
function makeDispatchAction(payload, api) {
    return payload.dispatchAction || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bind"])(api.dispatchAction, api);
}
function refixTooltipPosition(x, y, content, viewWidth, viewHeight, gapH, gapV) {
    var size = content.getSize();
    var width = size[0];
    var height = size[1];
    if (gapH != null) {
        // Add extra 2 pixels for this case:
        // At present the "values" in default tooltip are using CSS `float: right`.
        // When the right edge of the tooltip box is on the right side of the
        // viewport, the `float` layout might push the "values" to the second line.
        if (x + width + gapH + 2 > viewWidth) {
            x -= width + gapH;
        } else {
            x += gapH;
        }
    }
    if (gapV != null) {
        if (y + height + gapV > viewHeight) {
            y -= height + gapV;
        } else {
            y += gapV;
        }
    }
    return [
        x,
        y
    ];
}
function confineTooltipPosition(x, y, content, viewWidth, viewHeight) {
    var size = content.getSize();
    var width = size[0];
    var height = size[1];
    x = Math.min(x + width, viewWidth) - width;
    y = Math.min(y + height, viewHeight) - height;
    x = Math.max(x, 0);
    y = Math.max(y, 0);
    return [
        x,
        y
    ];
}
function calcTooltipPosition(position, rect, contentSize, borderWidth) {
    var domWidth = contentSize[0];
    var domHeight = contentSize[1];
    var offset = Math.ceil(Math.SQRT2 * borderWidth) + 8;
    var x = 0;
    var y = 0;
    var rectWidth = rect.width;
    var rectHeight = rect.height;
    switch(position){
        case 'inside':
            x = rect.x + rectWidth / 2 - domWidth / 2;
            y = rect.y + rectHeight / 2 - domHeight / 2;
            break;
        case 'top':
            x = rect.x + rectWidth / 2 - domWidth / 2;
            y = rect.y - domHeight - offset;
            break;
        case 'bottom':
            x = rect.x + rectWidth / 2 - domWidth / 2;
            y = rect.y + rectHeight + offset;
            break;
        case 'left':
            x = rect.x - domWidth - offset;
            y = rect.y + rectHeight / 2 - domHeight / 2;
            break;
        case 'right':
            x = rect.x + rectWidth + offset;
            y = rect.y + rectHeight / 2 - domHeight / 2;
    }
    return [
        x,
        y
    ];
}
function isCenterAlign(align) {
    return align === 'center' || align === 'middle';
}
/**
 * Find target component by payload like:
 * ```js
 * { legendId: 'some_id', name: 'xxx' }
 * { toolboxIndex: 1, name: 'xxx' }
 * { geoName: 'some_name', name: 'xxx' }
 * ```
 * PENDING: at present only
 *
 * If not found, return null/undefined.
 */ function findComponentReference(payload, ecModel, api) {
    var queryOptionMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["preParseFinder"])(payload).queryOptionMap;
    var componentMainType = queryOptionMap.keys()[0];
    if (!componentMainType || componentMainType === 'series') {
        return;
    }
    var queryResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["queryReferringComponents"])(ecModel, componentMainType, queryOptionMap.get(componentMainType), {
        useDefault: false,
        enableAll: false,
        enableNone: false
    });
    var model = queryResult.models[0];
    if (!model) {
        return;
    }
    var view = api.getViewOfComponentModel(model);
    var el;
    view.group.traverse(function(subEl) {
        var tooltipConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getECData"])(subEl).tooltipConfig;
        if (tooltipConfig && tooltipConfig.name === payload.name) {
            el = subEl;
            return true; // stop
        }
    });
    if (el) {
        return {
            componentMainType: componentMainType,
            componentIndex: model.componentIndex,
            el: el
        };
    }
}
const __TURBOPACK__default__export__ = TooltipView;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/tooltip/install.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$install$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axisPointer/install.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/extension.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$TooltipModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/tooltip/TooltipModel.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$TooltipView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/tooltip/TooltipView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
;
;
;
;
;
function install(registers) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["use"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$install$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["install"]);
    registers.registerComponentModel(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$TooltipModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    registers.registerComponentView(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$TooltipView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    /**
   * @action
   * @property {string} type
   * @property {number} seriesIndex
   * @property {number} dataIndex
   * @property {number} [x]
   * @property {number} [y]
   */ registers.registerAction({
        type: 'showTip',
        event: 'showTip',
        update: 'tooltip:manuallyShowTip'
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"]);
    registers.registerAction({
        type: 'hideTip',
        event: 'hideTip',
        update: 'tooltip:manuallyHideTip'
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"]);
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/tooltip/install.js [app-ssr] (ecmascript) <export install as TooltipComponent>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TooltipComponent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$install$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["install"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$install$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/tooltip/install.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=6e80b_echarts_lib_component_tooltip_c1877453._.js.map