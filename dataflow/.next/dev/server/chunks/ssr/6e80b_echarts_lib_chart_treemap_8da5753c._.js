module.exports = [
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/treemap/treemapAction.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    "installTreemapAction",
    ()=>installTreemapAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$treeHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/helper/treeHelper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
;
;
var actionTypes = [
    'treemapZoomToNode',
    'treemapRender',
    'treemapMove'
];
function installTreemapAction(registers) {
    for(var i = 0; i < actionTypes.length; i++){
        registers.registerAction({
            type: actionTypes[i],
            update: 'updateView'
        }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"]);
    }
    registers.registerAction({
        type: 'treemapRootToNode',
        update: 'updateView'
    }, function(payload, ecModel) {
        ecModel.eachComponent({
            mainType: 'series',
            subType: 'treemap',
            query: payload
        }, handleRootToNode);
        function handleRootToNode(model, index) {
            var types = [
                'treemapZoomToNode',
                'treemapRootToNode'
            ];
            var targetInfo = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$treeHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["retrieveTargetInfo"](payload, types, model);
            if (targetInfo) {
                var originViewRoot = model.getViewRoot();
                if (originViewRoot) {
                    payload.direction = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$treeHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["aboveViewRoot"](originViewRoot, targetInfo.node) ? 'rollUp' : 'drillDown';
                }
                model.resetViewRoot(targetInfo.node);
            }
        }
    });
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/treemap/TreemapSeries.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Series$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/Series.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$Tree$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/data/Tree.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/Model.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$treeHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/helper/treeHelper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$tooltipMarkup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/tooltip/tooltipMarkup.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$enableAriaDecalForTree$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/helper/enableAriaDecalForTree.js [app-ssr] (ecmascript)");
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
var TreemapSeriesModel = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(TreemapSeriesModel, _super);
    function TreemapSeriesModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = TreemapSeriesModel.type;
        _this.preventUsingHoverLayer = true;
        return _this;
    }
    /**
   * @override
   */ TreemapSeriesModel.prototype.getInitialData = function(option, ecModel) {
        // Create a virtual root.
        var root = {
            name: option.name,
            children: option.data
        };
        completeTreeValue(root);
        var levels = option.levels || [];
        // Used in "visual priority" in `treemapVisual.js`.
        // This way is a little tricky, must satisfy the precondition:
        //   1. There is no `treeNode.getModel('itemStyle.xxx')` used.
        //   2. The `Model.prototype.getModel()` will not use any clone-like way.
        var designatedVisualItemStyle = this.designatedVisualItemStyle = {};
        var designatedVisualModel = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]({
            itemStyle: designatedVisualItemStyle
        }, this, ecModel);
        levels = option.levels = setDefault(levels, ecModel);
        var levelModels = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["map"](levels || [], function(levelDefine) {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](levelDefine, designatedVisualModel, ecModel);
        }, this);
        // Make sure always a new tree is created when setOption,
        // in TreemapView, we check whether oldTree === newTree
        // to choose mappings approach among old shapes and new shapes.
        var tree = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$Tree$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createTree(root, this, beforeLink);
        function beforeLink(nodeData) {
            nodeData.wrapMethod('getItemModel', function(model, idx) {
                var node = tree.getNodeByDataIndex(idx);
                var levelModel = node ? levelModels[node.depth] : null;
                // If no levelModel, we also need `designatedVisualModel`.
                model.parentModel = levelModel || designatedVisualModel;
                return model;
            });
        }
        return tree.data;
    };
    TreemapSeriesModel.prototype.optionUpdated = function() {
        this.resetViewRoot();
    };
    /**
   * @override
   * @param {number} dataIndex
   * @param {boolean} [mutipleSeries=false]
   */ TreemapSeriesModel.prototype.formatTooltip = function(dataIndex, multipleSeries, dataType) {
        var data = this.getData();
        var value = this.getRawValue(dataIndex);
        var name = data.getName(dataIndex);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$tooltipMarkup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createTooltipMarkup"])('nameValue', {
            name: name,
            value: value
        });
    };
    /**
   * Add tree path to tooltip param
   *
   * @override
   * @param {number} dataIndex
   * @return {Object}
   */ TreemapSeriesModel.prototype.getDataParams = function(dataIndex) {
        var params = _super.prototype.getDataParams.apply(this, arguments);
        var node = this.getData().tree.getNodeByDataIndex(dataIndex);
        params.treeAncestors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$treeHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["wrapTreePathInfo"])(node, this);
        // compatitable the previous code.
        params.treePathInfo = params.treeAncestors;
        return params;
    };
    /**
   * @public
   * @param {Object} layoutInfo {
   *                                x: containerGroup x
   *                                y: containerGroup y
   *                                width: containerGroup width
   *                                height: containerGroup height
   *                            }
   */ TreemapSeriesModel.prototype.setLayoutInfo = function(layoutInfo) {
        /**
     * @readOnly
     * @type {Object}
     */ this.layoutInfo = this.layoutInfo || {};
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extend"](this.layoutInfo, layoutInfo);
    };
    /**
   * @param  {string} id
   * @return {number} index
   */ TreemapSeriesModel.prototype.mapIdToIndex = function(id) {
        // A feature is implemented:
        // index is monotone increasing with the sequence of
        // input id at the first time.
        // This feature can make sure that each data item and its
        // mapped color have the same index between data list and
        // color list at the beginning, which is useful for user
        // to adjust data-color mapping.
        /**
     * @private
     * @type {Object}
     */ var idIndexMap = this._idIndexMap;
        if (!idIndexMap) {
            idIndexMap = this._idIndexMap = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createHashMap"]();
            /**
       * @private
       * @type {number}
       */ this._idIndexMapCount = 0;
        }
        var index = idIndexMap.get(id);
        if (index == null) {
            idIndexMap.set(id, index = this._idIndexMapCount++);
        }
        return index;
    };
    TreemapSeriesModel.prototype.getViewRoot = function() {
        return this._viewRoot;
    };
    TreemapSeriesModel.prototype.resetViewRoot = function(viewRoot) {
        viewRoot ? this._viewRoot = viewRoot : viewRoot = this._viewRoot;
        var root = this.getRawData().tree.root;
        if (!viewRoot || viewRoot !== root && !root.contains(viewRoot)) {
            this._viewRoot = root;
        }
    };
    TreemapSeriesModel.prototype.enableAriaDecal = function() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$enableAriaDecalForTree$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(this);
    };
    TreemapSeriesModel.type = 'series.treemap';
    TreemapSeriesModel.layoutMode = 'box';
    TreemapSeriesModel.defaultOption = {
        // Disable progressive rendering
        progressive: 0,
        // size: ['80%', '80%'],            // deprecated, compatible with ec2.
        // `coordinateSystem` can be declared as 'matrix', 'calendar',
        //  which provides box layout container.
        coordinateSystemUsage: 'box',
        left: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].size.l,
        top: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].size.xxxl,
        right: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].size.l,
        bottom: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].size.xxxl,
        sort: true,
        clipWindow: 'origin',
        squareRatio: 0.5 * (1 + Math.sqrt(5)),
        leafDepth: null,
        drillDownIcon: '▶',
        // to align specialized icon. ▷▶❒❐▼✚
        zoomToNodeRatio: 0.32 * 0.32,
        scaleLimit: {
            max: 5,
            min: 0.2
        },
        roam: true,
        roamTrigger: 'global',
        nodeClick: 'zoomToNode',
        animation: true,
        animationDurationUpdate: 900,
        animationEasing: 'quinticInOut',
        breadcrumb: {
            show: true,
            height: 22,
            left: 'center',
            bottom: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].size.m,
            // right
            // bottom
            emptyItemWidth: 25,
            itemStyle: {
                color: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].color.backgroundShade,
                textStyle: {
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].color.secondary
                }
            },
            emphasis: {
                itemStyle: {
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].color.background
                }
            }
        },
        label: {
            show: true,
            // Do not use textDistance, for ellipsis rect just the same as treemap node rect.
            distance: 0,
            padding: 5,
            position: 'inside',
            // formatter: null,
            color: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].color.neutral00,
            overflow: 'truncate'
        },
        upperLabel: {
            show: false,
            position: [
                0,
                '50%'
            ],
            height: 20,
            // formatter: null,
            // color: '#fff',
            overflow: 'truncate',
            // align: null,
            verticalAlign: 'middle'
        },
        itemStyle: {
            color: null,
            colorAlpha: null,
            colorSaturation: null,
            borderWidth: 0,
            gapWidth: 0,
            borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].color.neutral00,
            borderColorSaturation: null // If specified, borderColor will be ineffective, and the
        },
        emphasis: {
            upperLabel: {
                show: true,
                position: [
                    0,
                    '50%'
                ],
                overflow: 'truncate',
                verticalAlign: 'middle'
            }
        },
        visualDimension: 0,
        visualMin: null,
        visualMax: null,
        color: [],
        // level[n].color (if necessary).
        // + Specify color list of each level. level[0].color would be global
        // color list if not specified. (see method `setDefault`).
        // + But set as a empty array to forbid fetch color from global palette
        // when using nodeModel.get('color'), otherwise nodes on deep level
        // will always has color palette set and are not able to inherit color
        // from parent node.
        // + TreemapSeries.color can not be set as 'none', otherwise effect
        // legend color fetching (see seriesColor.js).
        colorAlpha: null,
        colorSaturation: null,
        colorMappingBy: 'index',
        visibleMin: 10,
        // be rendered. Only works when sort is 'asc' or 'desc'.
        childrenVisibleMin: null,
        // grandchildren will not show.
        // Why grandchildren? If not grandchildren but children,
        // some siblings show children and some not,
        // the appearance may be mess and not consistent,
        levels: [] // Each item: {
    };
    return TreemapSeriesModel;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Series$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
/**
 * @param {Object} dataNode
 */ function completeTreeValue(dataNode) {
    // Postorder travel tree.
    // If value of none-leaf node is not set,
    // calculate it by suming up the value of all children.
    var sum = 0;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"](dataNode.children, function(child) {
        completeTreeValue(child);
        var childValue = child.value;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isArray"](childValue) && (childValue = childValue[0]);
        sum += childValue;
    });
    var thisValue = dataNode.value;
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isArray"](thisValue)) {
        thisValue = thisValue[0];
    }
    if (thisValue == null || isNaN(thisValue)) {
        thisValue = sum;
    }
    // Value should not less than 0.
    if (thisValue < 0) {
        thisValue = 0;
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isArray"](dataNode.value) ? dataNode.value[0] = thisValue : dataNode.value = thisValue;
}
/**
 * set default to level configuration
 */ function setDefault(levels, ecModel) {
    var globalColorList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeToArray"])(ecModel.get('color'));
    var globalDecalList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeToArray"])(ecModel.get([
        'aria',
        'decal',
        'decals'
    ]));
    if (!globalColorList) {
        return;
    }
    levels = levels || [];
    var hasColorDefine;
    var hasDecalDefine;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"](levels, function(levelDefine) {
        var model = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](levelDefine);
        var modelColor = model.get('color');
        var modelDecal = model.get('decal');
        if (model.get([
            'itemStyle',
            'color'
        ]) || modelColor && modelColor !== 'none') {
            hasColorDefine = true;
        }
        if (model.get([
            'itemStyle',
            'decal'
        ]) || modelDecal && modelDecal !== 'none') {
            hasDecalDefine = true;
        }
    });
    var level0 = levels[0] || (levels[0] = {});
    if (!hasColorDefine) {
        level0.color = globalColorList.slice();
    }
    if (!hasDecalDefine && globalDecalList) {
        level0.decal = globalDecalList.slice();
    }
    return levels;
}
const __TURBOPACK__default__export__ = TreemapSeriesModel;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/treemap/Breadcrumb.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Polygon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Polygon$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Polygon.js [app-ssr] (ecmascript) <export default as Polygon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Text$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Text.js [app-ssr] (ecmascript) <export default as Text>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Group.js [app-ssr] (ecmascript) <export default as Group>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/innerStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/layout.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$treeHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/helper/treeHelper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/states.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/label/labelStyle.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
var TEXT_PADDING = 8;
var ITEM_GAP = 8;
var ARRAY_LENGTH = 5;
var Breadcrumb = /** @class */ function() {
    function Breadcrumb(containerGroup) {
        this.group = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__["Group"]();
        containerGroup.add(this.group);
    }
    Breadcrumb.prototype.render = function(seriesModel, api, targetNode, onSelect) {
        var model = seriesModel.getModel('breadcrumb');
        var thisGroup = this.group;
        thisGroup.removeAll();
        if (!model.get('show') || !targetNode) {
            return;
        }
        var normalStyleModel = model.getModel('itemStyle');
        var emphasisModel = model.getModel('emphasis');
        var textStyleModel = normalStyleModel.getModel('textStyle');
        var emphasisTextStyleModel = emphasisModel.getModel([
            'itemStyle',
            'textStyle'
        ]);
        var refContainer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createBoxLayoutReference"](seriesModel, api).refContainer;
        var boxLayoutParams = {
            left: model.get('left'),
            right: model.get('right'),
            top: model.get('top'),
            bottom: model.get('bottom')
        };
        var layoutParam = {
            emptyItemWidth: model.get('emptyItemWidth'),
            totalWidth: 0,
            renderList: []
        };
        var availableSize = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLayoutRect"](boxLayoutParams, refContainer);
        this._prepare(targetNode, layoutParam, textStyleModel);
        this._renderContent(seriesModel, layoutParam, availableSize, normalStyleModel, emphasisModel, textStyleModel, emphasisTextStyleModel, onSelect);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["positionElement"](thisGroup, boxLayoutParams, refContainer);
    };
    /**
   * Prepare render list and total width
   * @private
   */ Breadcrumb.prototype._prepare = function(targetNode, layoutParam, textStyleModel) {
        for(var node = targetNode; node; node = node.parentNode){
            var text = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertOptionIdName"])(node.getModel().get('name'), '');
            var textRect = textStyleModel.getTextRect(text);
            var itemWidth = Math.max(textRect.width + TEXT_PADDING * 2, layoutParam.emptyItemWidth);
            layoutParam.totalWidth += itemWidth + ITEM_GAP;
            layoutParam.renderList.push({
                node: node,
                text: text,
                width: itemWidth
            });
        }
    };
    /**
   * @private
   */ Breadcrumb.prototype._renderContent = function(seriesModel, layoutParam, availableSize, normalStyleModel, emphasisModel, textStyleModel, emphasisTextStyleModel, onSelect) {
        // Start rendering.
        var lastX = 0;
        var emptyItemWidth = layoutParam.emptyItemWidth;
        var height = seriesModel.get([
            'breadcrumb',
            'height'
        ]);
        var totalWidth = layoutParam.totalWidth;
        var renderList = layoutParam.renderList;
        var emphasisItemStyle = emphasisModel.getModel('itemStyle').getItemStyle();
        for(var i = renderList.length - 1; i >= 0; i--){
            var item = renderList[i];
            var itemNode = item.node;
            var itemWidth = item.width;
            var text = item.text;
            // Hdie text and shorten width if necessary.
            if (totalWidth > availableSize.width) {
                totalWidth -= itemWidth - emptyItemWidth;
                itemWidth = emptyItemWidth;
                text = null;
            }
            var el = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Polygon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Polygon$3e$__["Polygon"]({
                shape: {
                    points: makeItemPoints(lastX, 0, itemWidth, height, i === renderList.length - 1, i === 0)
                },
                style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaults"])(normalStyleModel.getItemStyle(), {
                    lineJoin: 'bevel'
                }),
                textContent: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Text$3e$__["Text"]({
                    style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createTextStyle"])(textStyleModel, {
                        text: text
                    })
                }),
                textConfig: {
                    position: 'inside'
                },
                z2: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Z2_EMPHASIS_LIFT"] * 1e4,
                onclick: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["curry"])(onSelect, itemNode)
            });
            el.disableLabelAnimation = true;
            el.getTextContent().ensureState('emphasis').style = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createTextStyle"])(emphasisTextStyleModel, {
                text: text
            });
            el.ensureState('emphasis').style = emphasisItemStyle;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toggleHoverEmphasis"])(el, emphasisModel.get('focus'), emphasisModel.get('blurScope'), emphasisModel.get('disabled'));
            this.group.add(el);
            packEventData(el, seriesModel, itemNode);
            lastX += itemWidth + ITEM_GAP;
        }
    };
    Breadcrumb.prototype.remove = function() {
        this.group.removeAll();
    };
    return Breadcrumb;
}();
function makeItemPoints(x, y, itemWidth, itemHeight, head, tail) {
    var points = [
        [
            head ? x : x - ARRAY_LENGTH,
            y
        ],
        [
            x + itemWidth,
            y
        ],
        [
            x + itemWidth,
            y + itemHeight
        ],
        [
            head ? x : x - ARRAY_LENGTH,
            y + itemHeight
        ]
    ];
    !tail && points.splice(2, 0, [
        x + itemWidth + ARRAY_LENGTH,
        y + itemHeight / 2
    ]);
    !head && points.push([
        x,
        y + itemHeight / 2
    ]);
    return points;
}
// Package custom mouse event.
function packEventData(el, seriesModel, itemNode) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getECData"])(el).eventData = {
        componentType: 'series',
        componentSubType: 'treemap',
        componentIndex: seriesModel.componentIndex,
        seriesIndex: seriesModel.seriesIndex,
        seriesName: seriesModel.name,
        seriesType: 'treemap',
        selfType: 'breadcrumb',
        nodeData: {
            dataIndex: itemNode && itemNode.dataIndex,
            name: itemNode && itemNode.name
        },
        treePathInfo: itemNode && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$treeHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["wrapTreePathInfo"])(itemNode, seriesModel)
    };
}
const __TURBOPACK__default__export__ = Breadcrumb;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/treemap/TreemapView.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Group.js [app-ssr] (ecmascript) <export default as Group>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Rect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Rect$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Rect.js [app-ssr] (ecmascript) <export default as Rect>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/innerStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/states.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$DataDiffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/data/DataDiffer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$treeHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/helper/treeHelper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$treemap$2f$Breadcrumb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/treemap/Breadcrumb.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$RoamController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/helper/RoamController.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$BoundingRect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/BoundingRect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$matrix$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/matrix.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$animation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/animation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$mixin$2f$makeStyleMapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/mixin/makeStyleMapper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/view/Chart.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Displayable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Displayable.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/format.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/label/labelStyle.js [app-ssr] (ecmascript)");
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
var Group = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__["Group"];
var Rect = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Rect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Rect$3e$__["Rect"];
var DRAG_THRESHOLD = 3;
var PATH_LABEL_NOAMAL = 'label';
var PATH_UPPERLABEL_NORMAL = 'upperLabel';
// Should larger than emphasis states lift z
var Z2_BASE = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Z2_EMPHASIS_LIFT"] * 10; // Should bigger than every z2.
var Z2_BG = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Z2_EMPHASIS_LIFT"] * 2;
var Z2_CONTENT = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Z2_EMPHASIS_LIFT"] * 3;
var getStateItemStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$mixin$2f$makeStyleMapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])([
    [
        'fill',
        'color'
    ],
    // `borderColor` and `borderWidth` has been occupied,
    // so use `stroke` to indicate the stroke of the rect.
    [
        'stroke',
        'strokeColor'
    ],
    [
        'lineWidth',
        'strokeWidth'
    ],
    [
        'shadowBlur'
    ],
    [
        'shadowOffsetX'
    ],
    [
        'shadowOffsetY'
    ],
    [
        'shadowColor'
    ]
]);
var getItemStyleNormal = function(model) {
    // Normal style props should include emphasis style props.
    var itemStyle = getStateItemStyle(model);
    // Clear styles set by emphasis.
    itemStyle.stroke = itemStyle.fill = itemStyle.lineWidth = null;
    return itemStyle;
};
var inner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeInner"])();
var TreemapView = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(TreemapView, _super);
    function TreemapView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = TreemapView.type;
        _this._state = 'ready';
        _this._storage = createStorage();
        return _this;
    }
    /**
   * @override
   */ TreemapView.prototype.render = function(seriesModel, ecModel, api, payload) {
        var models = ecModel.findComponents({
            mainType: 'series',
            subType: 'treemap',
            query: payload
        });
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["indexOf"])(models, seriesModel) < 0) {
            return;
        }
        this.seriesModel = seriesModel;
        this.api = api;
        this.ecModel = ecModel;
        var types = [
            'treemapZoomToNode',
            'treemapRootToNode'
        ];
        var targetInfo = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$treeHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["retrieveTargetInfo"](payload, types, seriesModel);
        var payloadType = payload && payload.type;
        var layoutInfo = seriesModel.layoutInfo;
        var isInit = !this._oldTree;
        var thisStorage = this._storage;
        // Mark new root when action is treemapRootToNode.
        var reRoot = payloadType === 'treemapRootToNode' && targetInfo && thisStorage ? {
            rootNodeGroup: thisStorage.nodeGroup[targetInfo.node.getRawIndex()],
            direction: payload.direction
        } : null;
        var containerGroup = this._giveContainerGroup(layoutInfo);
        var hasAnimation = seriesModel.get('animation');
        var renderResult = this._doRender(containerGroup, seriesModel, reRoot);
        hasAnimation && !isInit && (!payloadType || payloadType === 'treemapZoomToNode' || payloadType === 'treemapRootToNode') ? this._doAnimation(containerGroup, renderResult, seriesModel, reRoot) : renderResult.renderFinally();
        this._resetController(api);
        this._renderBreadcrumb(seriesModel, api, targetInfo);
    };
    TreemapView.prototype._giveContainerGroup = function(layoutInfo) {
        var containerGroup = this._containerGroup;
        if (!containerGroup) {
            // FIXME
            // 加一层containerGroup是为了clip，但是现在clip功能并没有实现。
            containerGroup = this._containerGroup = new Group();
            this._initEvents(containerGroup);
            this.group.add(containerGroup);
        }
        containerGroup.x = layoutInfo.x;
        containerGroup.y = layoutInfo.y;
        return containerGroup;
    };
    TreemapView.prototype._doRender = function(containerGroup, seriesModel, reRoot) {
        var thisTree = seriesModel.getData().tree;
        var oldTree = this._oldTree;
        // Clear last shape records.
        var lastsForAnimation = createStorage();
        var thisStorage = createStorage();
        var oldStorage = this._storage;
        var willInvisibleEls = [];
        function doRenderNode(thisNode, oldNode, parentGroup, depth) {
            return renderNode(seriesModel, thisStorage, oldStorage, reRoot, lastsForAnimation, willInvisibleEls, thisNode, oldNode, parentGroup, depth);
        }
        // Notice: When thisTree and oldTree are the same tree (see list.cloneShallow),
        // the oldTree is actually losted, so we cannot find all of the old graphic
        // elements from tree. So we use this strategy: make element storage, move
        // from old storage to new storage, clear old storage.
        dualTravel(thisTree.root ? [
            thisTree.root
        ] : [], oldTree && oldTree.root ? [
            oldTree.root
        ] : [], containerGroup, thisTree === oldTree || !oldTree, 0);
        // Process all removing.
        var willDeleteEls = clearStorage(oldStorage);
        this._oldTree = thisTree;
        this._storage = thisStorage;
        if (this._controllerHost) {
            var _oldRootLayout = this.seriesModel.layoutInfo;
            var rootLayout = thisTree.root.getLayout();
            if (rootLayout.width === _oldRootLayout.width && rootLayout.height === _oldRootLayout.height) {
                this._controllerHost.zoom = 1;
            }
        }
        return {
            lastsForAnimation: lastsForAnimation,
            willDeleteEls: willDeleteEls,
            renderFinally: renderFinally
        };
        //TURBOPACK unreachable
        ;
        function dualTravel(thisViewChildren, oldViewChildren, parentGroup, sameTree, depth) {
            // When 'render' is triggered by action,
            // 'this' and 'old' may be the same tree,
            // we use rawIndex in that case.
            if (sameTree) {
                oldViewChildren = thisViewChildren;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(thisViewChildren, function(child, index) {
                    !child.isRemoved() && processNode(index, index);
                });
            } else {
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$DataDiffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](oldViewChildren, thisViewChildren, getKey, getKey).add(processNode).update(processNode).remove((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["curry"])(processNode, null)).execute();
            }
            function getKey(node) {
                // Identify by name or raw index.
                return node.getId();
            }
            function processNode(newIndex, oldIndex) {
                var thisNode = newIndex != null ? thisViewChildren[newIndex] : null;
                var oldNode = oldIndex != null ? oldViewChildren[oldIndex] : null;
                var group = doRenderNode(thisNode, oldNode, parentGroup, depth);
                group && dualTravel(thisNode && thisNode.viewChildren || [], oldNode && oldNode.viewChildren || [], group, sameTree, depth + 1);
            }
        }
        function clearStorage(storage) {
            var willDeleteEls = createStorage();
            storage && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(storage, function(store, storageName) {
                var delEls = willDeleteEls[storageName];
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(store, function(el) {
                    el && (delEls.push(el), inner(el).willDelete = true);
                });
            });
            return willDeleteEls;
        }
        function renderFinally() {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(willDeleteEls, function(els) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(els, function(el) {
                    el.parent && el.parent.remove(el);
                });
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(willInvisibleEls, function(el) {
                el.invisible = true;
                // Setting invisible is for optimizing, so no need to set dirty,
                // just mark as invisible.
                el.dirty();
            });
        }
    };
    TreemapView.prototype._doAnimation = function(containerGroup, renderResult, seriesModel, reRoot) {
        var durationOption = seriesModel.get('animationDurationUpdate');
        var easingOption = seriesModel.get('animationEasing');
        // TODO: do not support function until necessary.
        var duration = ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFunction"])(durationOption) ? 0 : durationOption) || 0;
        var easing = ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFunction"])(easingOption) ? null : easingOption) || 'cubicOut';
        var animationWrap = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$animation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWrap"]();
        // Make delete animations.
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(renderResult.willDeleteEls, function(store, storageName) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(store, function(el, rawIndex) {
                if (el.invisible) {
                    return;
                }
                var parent = el.parent; // Always has parent, and parent is nodeGroup.
                var target;
                var innerStore = inner(parent);
                if (reRoot && reRoot.direction === 'drillDown') {
                    target = parent === reRoot.rootNodeGroup ? {
                        shape: {
                            x: 0,
                            y: 0,
                            width: innerStore.nodeWidth,
                            height: innerStore.nodeHeight
                        },
                        style: {
                            opacity: 0
                        }
                    } : {
                        style: {
                            opacity: 0
                        }
                    };
                } else {
                    var targetX = 0;
                    var targetY = 0;
                    if (!innerStore.willDelete) {
                        // Let node animate to right-bottom corner, cooperating with fadeout,
                        // which is appropriate for user understanding.
                        // Divided by 2 for reRoot rolling up effect.
                        targetX = innerStore.nodeWidth / 2;
                        targetY = innerStore.nodeHeight / 2;
                    }
                    target = storageName === 'nodeGroup' ? {
                        x: targetX,
                        y: targetY,
                        style: {
                            opacity: 0
                        }
                    } : {
                        shape: {
                            x: targetX,
                            y: targetY,
                            width: 0,
                            height: 0
                        },
                        style: {
                            opacity: 0
                        }
                    };
                }
                // TODO: do not support delay until necessary.
                target && animationWrap.add(el, target, duration, 0, easing);
            });
        });
        // Make other animations
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(this._storage, function(store, storageName) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(store, function(el, rawIndex) {
                var last = renderResult.lastsForAnimation[storageName][rawIndex];
                var target = {};
                if (!last) {
                    return;
                }
                if (el instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__["Group"]) {
                    if (last.oldX != null) {
                        target.x = el.x;
                        target.y = el.y;
                        el.x = last.oldX;
                        el.y = last.oldY;
                    }
                } else {
                    if (last.oldShape) {
                        target.shape = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extend"])({}, el.shape);
                        el.setShape(last.oldShape);
                    }
                    if (last.fadein) {
                        el.setStyle('opacity', 0);
                        target.style = {
                            opacity: 1
                        };
                    } else if (el.style.opacity !== 1) {
                        target.style = {
                            opacity: 1
                        };
                    }
                }
                animationWrap.add(el, target, duration, 0, easing);
            });
        }, this);
        this._state = 'animating';
        animationWrap.finished((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bind"])(function() {
            this._state = 'ready';
            renderResult.renderFinally();
        }, this)).start();
    };
    TreemapView.prototype._resetController = function(api) {
        var _this = this;
        var controller = this._controller;
        var controllerHost = this._controllerHost;
        if (!controllerHost) {
            this._controllerHost = {
                target: this.group
            };
            controllerHost = this._controllerHost;
        }
        var seriesModel = this.seriesModel;
        // Init controller.
        if (!controller) {
            controller = this._controller = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$RoamController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](api.getZr());
            controller.on('pan', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bind"])(this._onPan, this));
            controller.on('zoom', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bind"])(this._onZoom, this));
        }
        controller.enable(seriesModel.get('roam'), {
            api: api,
            zInfo: {
                component: seriesModel
            },
            triggerInfo: {
                roamTrigger: seriesModel.get('roamTrigger'),
                isInSelf: function(e, x, y) {
                    var containerGroup = _this._containerGroup;
                    return containerGroup ? containerGroup.getBoundingRect().contain(x - containerGroup.x, y - containerGroup.y) : false;
                }
            }
        });
        controllerHost.zoomLimit = seriesModel.get('scaleLimit');
        controllerHost.zoom = seriesModel.get('zoom');
    };
    TreemapView.prototype._clearController = function() {
        var controller = this._controller;
        this._controllerHost = null;
        if (controller) {
            controller.dispose();
            controller = null;
        }
    };
    TreemapView.prototype._onPan = function(e) {
        if (this._state !== 'animating' && (Math.abs(e.dx) > DRAG_THRESHOLD || Math.abs(e.dy) > DRAG_THRESHOLD)) {
            // These param must not be cached.
            var root = this.seriesModel.getData().tree.root;
            if (!root) {
                return;
            }
            var rootLayout = root.getLayout();
            if (!rootLayout) {
                return;
            }
            this.api.dispatchAction({
                type: 'treemapMove',
                from: this.uid,
                seriesId: this.seriesModel.id,
                rootRect: {
                    x: rootLayout.x + e.dx,
                    y: rootLayout.y + e.dy,
                    width: rootLayout.width,
                    height: rootLayout.height
                }
            });
        }
    };
    TreemapView.prototype._onZoom = function(e) {
        var mouseX = e.originX;
        var mouseY = e.originY;
        var zoomDelta = e.scale;
        if (this._state !== 'animating') {
            // These param must not be cached.
            var root = this.seriesModel.getData().tree.root;
            if (!root) {
                return;
            }
            var rootLayout = root.getLayout();
            if (!rootLayout) {
                return;
            }
            var rect = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$BoundingRect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](rootLayout.x, rootLayout.y, rootLayout.width, rootLayout.height);
            // scaleLimit
            var zoomLimit = null;
            var _controllerHost = this._controllerHost;
            zoomLimit = _controllerHost.zoomLimit;
            var newZoom = _controllerHost.zoom = _controllerHost.zoom || 1;
            newZoom *= zoomDelta;
            if (zoomLimit) {
                var zoomMin = zoomLimit.min || 0;
                var zoomMax = zoomLimit.max || Infinity;
                newZoom = Math.max(Math.min(zoomMax, newZoom), zoomMin);
            }
            var zoomScale = newZoom / _controllerHost.zoom;
            _controllerHost.zoom = newZoom;
            var layoutInfo = this.seriesModel.layoutInfo;
            // Transform mouse coord from global to containerGroup.
            mouseX -= layoutInfo.x;
            mouseY -= layoutInfo.y;
            // Scale root bounding rect.
            var m = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$matrix$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"]();
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$matrix$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translate"](m, m, [
                -mouseX,
                -mouseY
            ]);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$matrix$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["scale"](m, m, [
                zoomScale,
                zoomScale
            ]);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$matrix$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translate"](m, m, [
                mouseX,
                mouseY
            ]);
            rect.applyTransform(m);
            this.api.dispatchAction({
                type: 'treemapRender',
                from: this.uid,
                seriesId: this.seriesModel.id,
                rootRect: {
                    x: rect.x,
                    y: rect.y,
                    width: rect.width,
                    height: rect.height
                }
            });
        }
    };
    TreemapView.prototype._initEvents = function(containerGroup) {
        var _this = this;
        containerGroup.on('click', function(e) {
            if (_this._state !== 'ready') {
                return;
            }
            var nodeClick = _this.seriesModel.get('nodeClick', true);
            if (!nodeClick) {
                return;
            }
            var targetInfo = _this.findTarget(e.offsetX, e.offsetY);
            if (!targetInfo) {
                return;
            }
            var node = targetInfo.node;
            if (node.getLayout().isLeafRoot) {
                _this._rootToNode(targetInfo);
            } else {
                if (nodeClick === 'zoomToNode') {
                    _this._zoomToNode(targetInfo);
                } else if (nodeClick === 'link') {
                    var itemModel = node.hostTree.data.getItemModel(node.dataIndex);
                    var link = itemModel.get('link', true);
                    var linkTarget = itemModel.get('target', true) || 'blank';
                    link && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["windowOpen"])(link, linkTarget);
                }
            }
        }, this);
    };
    TreemapView.prototype._renderBreadcrumb = function(seriesModel, api, targetInfo) {
        var _this = this;
        if (!targetInfo) {
            targetInfo = seriesModel.get('leafDepth', true) != null ? {
                node: seriesModel.getViewRoot()
            } : this.findTarget(api.getWidth() / 2, api.getHeight() / 2);
            if (!targetInfo) {
                targetInfo = {
                    node: seriesModel.getData().tree.root
                };
            }
        }
        (this._breadcrumb || (this._breadcrumb = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$treemap$2f$Breadcrumb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](this.group))).render(seriesModel, api, targetInfo.node, function(node) {
            if (_this._state !== 'animating') {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$treeHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["aboveViewRoot"](seriesModel.getViewRoot(), node) ? _this._rootToNode({
                    node: node
                }) : _this._zoomToNode({
                    node: node
                });
            }
        });
    };
    /**
   * @override
   */ TreemapView.prototype.remove = function() {
        this._clearController();
        this._containerGroup && this._containerGroup.removeAll();
        this._storage = createStorage();
        this._state = 'ready';
        this._breadcrumb && this._breadcrumb.remove();
    };
    TreemapView.prototype.dispose = function() {
        this._clearController();
    };
    TreemapView.prototype._zoomToNode = function(targetInfo) {
        this.api.dispatchAction({
            type: 'treemapZoomToNode',
            from: this.uid,
            seriesId: this.seriesModel.id,
            targetNode: targetInfo.node
        });
    };
    TreemapView.prototype._rootToNode = function(targetInfo) {
        this.api.dispatchAction({
            type: 'treemapRootToNode',
            from: this.uid,
            seriesId: this.seriesModel.id,
            targetNode: targetInfo.node
        });
    };
    /**
   * @param x Global coord x.
   * @param y Global coord y.
   * @return info If not found, return undefined;
   * @return info.node Target node.
   * @return info.offsetX x refer to target node.
   * @return info.offsetY y refer to target node.
   */ TreemapView.prototype.findTarget = function(x, y) {
        var targetInfo;
        var viewRoot = this.seriesModel.getViewRoot();
        viewRoot.eachNode({
            attr: 'viewChildren',
            order: 'preorder'
        }, function(node) {
            var bgEl = this._storage.background[node.getRawIndex()];
            // If invisible, there might be no element.
            if (bgEl) {
                var point = bgEl.transformCoordToLocal(x, y);
                var shape = bgEl.shape;
                // For performance consideration, don't use 'getBoundingRect'.
                if (shape.x <= point[0] && point[0] <= shape.x + shape.width && shape.y <= point[1] && point[1] <= shape.y + shape.height) {
                    targetInfo = {
                        node: node,
                        offsetX: point[0],
                        offsetY: point[1]
                    };
                } else {
                    return false; // Suppress visit subtree.
                }
            }
        }, this);
        return targetInfo;
    };
    TreemapView.type = 'treemap';
    return TreemapView;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
function createStorage() {
    return {
        nodeGroup: [],
        background: [],
        content: []
    };
}
/**
 * @return Return undefined means do not travel further.
 */ function renderNode(seriesModel, thisStorage, oldStorage, reRoot, lastsForAnimation, willInvisibleEls, thisNode, oldNode, parentGroup, depth) {
    // Whether under viewRoot.
    if (!thisNode) {
        // Deleting nodes will be performed finally. This method just find
        // element from old storage, or create new element, set them to new
        // storage, and set styles.
        return;
    }
    // -------------------------------------------------------------------
    // Start of closure variables available in "Procedures in renderNode".
    var thisLayout = thisNode.getLayout();
    var data = seriesModel.getData();
    var nodeModel = thisNode.getModel();
    // Only for enabling highlight/downplay. Clear firstly.
    // Because some node will not be rendered.
    data.setItemGraphicEl(thisNode.dataIndex, null);
    if (!thisLayout || !thisLayout.isInView) {
        return;
    }
    var thisWidth = thisLayout.width;
    var thisHeight = thisLayout.height;
    var borderWidth = thisLayout.borderWidth;
    var thisInvisible = thisLayout.invisible;
    var thisRawIndex = thisNode.getRawIndex();
    var oldRawIndex = oldNode && oldNode.getRawIndex();
    var thisViewChildren = thisNode.viewChildren;
    var upperHeight = thisLayout.upperHeight;
    var isParent = thisViewChildren && thisViewChildren.length;
    var itemStyleNormalModel = nodeModel.getModel('itemStyle');
    var itemStyleEmphasisModel = nodeModel.getModel([
        'emphasis',
        'itemStyle'
    ]);
    var itemStyleBlurModel = nodeModel.getModel([
        'blur',
        'itemStyle'
    ]);
    var itemStyleSelectModel = nodeModel.getModel([
        'select',
        'itemStyle'
    ]);
    var borderRadius = itemStyleNormalModel.get('borderRadius') || 0;
    // End of closure ariables available in "Procedures in renderNode".
    // -----------------------------------------------------------------
    // Node group
    var group = giveGraphic('nodeGroup', Group);
    if (!group) {
        return;
    }
    parentGroup.add(group);
    // x,y are not set when el is above view root.
    group.x = thisLayout.x || 0;
    group.y = thisLayout.y || 0;
    group.markRedraw();
    inner(group).nodeWidth = thisWidth;
    inner(group).nodeHeight = thisHeight;
    if (thisLayout.isAboveViewRoot) {
        return group;
    }
    // Background
    var bg = giveGraphic('background', Rect, depth, Z2_BG);
    bg && renderBackground(group, bg, isParent && thisLayout.upperLabelHeight);
    var emphasisModel = nodeModel.getModel('emphasis');
    var focus = emphasisModel.get('focus');
    var blurScope = emphasisModel.get('blurScope');
    var isDisabled = emphasisModel.get('disabled');
    var focusOrIndices = focus === 'ancestor' ? thisNode.getAncestorsIndices() : focus === 'descendant' ? thisNode.getDescendantIndices() : focus;
    // No children, render content.
    if (isParent) {
        // Because of the implementation about "traverse" in graphic hover style, we
        // can not set hover listener on the "group" of non-leaf node. Otherwise the
        // hover event from the descendents will be listenered.
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHighDownDispatcher"])(group)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setAsHighDownDispatcher"])(group, false);
        }
        if (bg) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setAsHighDownDispatcher"])(bg, !isDisabled);
            // Only for enabling highlight/downplay.
            data.setItemGraphicEl(thisNode.dataIndex, bg);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["enableHoverFocus"])(bg, focusOrIndices, blurScope);
        }
    } else {
        var content = giveGraphic('content', Rect, depth, Z2_CONTENT);
        content && renderContent(group, content);
        bg.disableMorphing = true;
        if (bg && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHighDownDispatcher"])(bg)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setAsHighDownDispatcher"])(bg, false);
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setAsHighDownDispatcher"])(group, !isDisabled);
        // Only for enabling highlight/downplay.
        data.setItemGraphicEl(thisNode.dataIndex, group);
        var cursorStyle = nodeModel.getShallow('cursor');
        cursorStyle && content.attr('cursor', cursorStyle);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["enableHoverFocus"])(group, focusOrIndices, blurScope);
    }
    return group;
    //TURBOPACK unreachable
    ;
    // ----------------------------
    // | Procedures in renderNode |
    // ----------------------------
    function renderBackground(group, bg, useUpperLabel) {
        var ecData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getECData"])(bg);
        // For tooltip.
        ecData.dataIndex = thisNode.dataIndex;
        ecData.seriesIndex = seriesModel.seriesIndex;
        bg.setShape({
            x: 0,
            y: 0,
            width: thisWidth,
            height: thisHeight,
            r: borderRadius
        });
        if (thisInvisible) {
            // If invisible, do not set visual, otherwise the element will
            // change immediately before animation. We think it is OK to
            // remain its origin color when moving out of the view window.
            processInvisible(bg);
        } else {
            bg.invisible = false;
            var style = thisNode.getVisual('style');
            var visualBorderColor = style.stroke;
            var normalStyle = getItemStyleNormal(itemStyleNormalModel);
            normalStyle.fill = visualBorderColor;
            var emphasisStyle = getStateItemStyle(itemStyleEmphasisModel);
            emphasisStyle.fill = itemStyleEmphasisModel.get('borderColor');
            var blurStyle = getStateItemStyle(itemStyleBlurModel);
            blurStyle.fill = itemStyleBlurModel.get('borderColor');
            var selectStyle = getStateItemStyle(itemStyleSelectModel);
            selectStyle.fill = itemStyleSelectModel.get('borderColor');
            if (useUpperLabel) {
                var upperLabelWidth = thisWidth - 2 * borderWidth;
                prepareText(// PENDING: convert ZRColor to ColorString for text.
                bg, visualBorderColor, style.opacity, {
                    x: borderWidth,
                    y: 0,
                    width: upperLabelWidth,
                    height: upperHeight
                });
            } else {
                bg.removeTextContent();
            }
            bg.setStyle(normalStyle);
            bg.ensureState('emphasis').style = emphasisStyle;
            bg.ensureState('blur').style = blurStyle;
            bg.ensureState('select').style = selectStyle;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setDefaultStateProxy"])(bg);
        }
        group.add(bg);
    }
    function renderContent(group, content) {
        var ecData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getECData"])(content);
        // For tooltip.
        ecData.dataIndex = thisNode.dataIndex;
        ecData.seriesIndex = seriesModel.seriesIndex;
        var contentWidth = Math.max(thisWidth - 2 * borderWidth, 0);
        var contentHeight = Math.max(thisHeight - 2 * borderWidth, 0);
        content.culling = true;
        content.setShape({
            x: borderWidth,
            y: borderWidth,
            width: contentWidth,
            height: contentHeight,
            r: borderRadius
        });
        if (thisInvisible) {
            // If invisible, do not set visual, otherwise the element will
            // change immediately before animation. We think it is OK to
            // remain its origin color when moving out of the view window.
            processInvisible(content);
        } else {
            content.invisible = false;
            var nodeStyle = thisNode.getVisual('style');
            var visualColor = nodeStyle.fill;
            var normalStyle = getItemStyleNormal(itemStyleNormalModel);
            normalStyle.fill = visualColor;
            normalStyle.decal = nodeStyle.decal;
            var emphasisStyle = getStateItemStyle(itemStyleEmphasisModel);
            var blurStyle = getStateItemStyle(itemStyleBlurModel);
            var selectStyle = getStateItemStyle(itemStyleSelectModel);
            // PENDING: convert ZRColor to ColorString for text.
            prepareText(content, visualColor, nodeStyle.opacity, null);
            content.setStyle(normalStyle);
            content.ensureState('emphasis').style = emphasisStyle;
            content.ensureState('blur').style = blurStyle;
            content.ensureState('select').style = selectStyle;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setDefaultStateProxy"])(content);
        }
        group.add(content);
    }
    function processInvisible(element) {
        // Delay invisible setting utill animation finished,
        // avoid element vanish suddenly before animation.
        !element.invisible && willInvisibleEls.push(element);
    }
    function prepareText(rectEl, visualColor, visualOpacity, // Can be null/undefined
    upperLabelRect) {
        var normalLabelModel = nodeModel.getModel(upperLabelRect ? PATH_UPPERLABEL_NORMAL : PATH_LABEL_NOAMAL);
        var defaultText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertOptionIdName"])(nodeModel.get('name'), null);
        var isShow = normalLabelModel.getShallow('show');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setLabelStyle"])(rectEl, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLabelStatesModels"])(nodeModel, upperLabelRect ? PATH_UPPERLABEL_NORMAL : PATH_LABEL_NOAMAL), {
            defaultText: isShow ? defaultText : null,
            inheritColor: visualColor,
            defaultOpacity: visualOpacity,
            labelFetcher: seriesModel,
            labelDataIndex: thisNode.dataIndex
        });
        var textEl = rectEl.getTextContent();
        if (!textEl) {
            return;
        }
        var textStyle = textEl.style;
        var textPadding = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeCssArray"])(textStyle.padding || 0);
        if (upperLabelRect) {
            rectEl.setTextConfig({
                layoutRect: upperLabelRect
            });
            textEl.disableLabelLayout = true;
        }
        textEl.beforeUpdate = function() {
            var width = Math.max((upperLabelRect ? upperLabelRect.width : rectEl.shape.width) - textPadding[1] - textPadding[3], 0);
            var height = Math.max((upperLabelRect ? upperLabelRect.height : rectEl.shape.height) - textPadding[0] - textPadding[2], 0);
            if (textStyle.width !== width || textStyle.height !== height) {
                textEl.setStyle({
                    width: width,
                    height: height
                });
            }
        };
        textStyle.truncateMinChar = 2;
        textStyle.lineOverflow = 'truncate';
        addDrillDownIcon(textStyle, upperLabelRect, thisLayout);
        var textEmphasisState = textEl.getState('emphasis');
        addDrillDownIcon(textEmphasisState ? textEmphasisState.style : null, upperLabelRect, thisLayout);
    }
    function addDrillDownIcon(style, upperLabelRect, thisLayout) {
        var text = style ? style.text : null;
        if (!upperLabelRect && thisLayout.isLeafRoot && text != null) {
            var iconChar = seriesModel.get('drillDownIcon', true);
            style.text = iconChar ? iconChar + ' ' + text : text;
        }
    }
    function giveGraphic(storageName, Ctor, depth, z) {
        var element = oldRawIndex != null && oldStorage[storageName][oldRawIndex];
        var lasts = lastsForAnimation[storageName];
        if (element) {
            // Remove from oldStorage
            oldStorage[storageName][oldRawIndex] = null;
            prepareAnimationWhenHasOld(lasts, element);
        } else if (!thisInvisible) {
            element = new Ctor();
            if (element instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Displayable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]) {
                element.z2 = calculateZ2(depth, z);
            }
            prepareAnimationWhenNoOld(lasts, element);
        }
        // Set to thisStorage
        return thisStorage[storageName][thisRawIndex] = element;
    }
    function prepareAnimationWhenHasOld(lasts, element) {
        var lastCfg = lasts[thisRawIndex] = {};
        if (element instanceof Group) {
            lastCfg.oldX = element.x;
            lastCfg.oldY = element.y;
        } else {
            lastCfg.oldShape = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extend"])({}, element.shape);
        }
    }
    // If a element is new, we need to find the animation start point carefully,
    // otherwise it will looks strange when 'zoomToNode'.
    function prepareAnimationWhenNoOld(lasts, element) {
        var lastCfg = lasts[thisRawIndex] = {};
        var parentNode = thisNode.parentNode;
        var isGroup = element instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__["Group"];
        if (parentNode && (!reRoot || reRoot.direction === 'drillDown')) {
            var parentOldX = 0;
            var parentOldY = 0;
            // New nodes appear from right-bottom corner in 'zoomToNode' animation.
            // For convenience, get old bounding rect from background.
            var parentOldBg = lastsForAnimation.background[parentNode.getRawIndex()];
            if (!reRoot && parentOldBg && parentOldBg.oldShape) {
                parentOldX = parentOldBg.oldShape.width;
                parentOldY = parentOldBg.oldShape.height;
            }
            // When no parent old shape found, its parent is new too,
            // so we can just use {x:0, y:0}.
            if (isGroup) {
                lastCfg.oldX = 0;
                lastCfg.oldY = parentOldY;
            } else {
                lastCfg.oldShape = {
                    x: parentOldX,
                    y: parentOldY,
                    width: 0,
                    height: 0
                };
            }
        }
        // Fade in, user can be aware that these nodes are new.
        lastCfg.fadein = !isGroup;
    }
}
// We cannot set all background with the same z, because the behaviour of
// drill down and roll up differ background creation sequence from tree
// hierarchy sequence, which cause lower background elements to overlap
// upper ones. So we calculate z based on depth.
// Moreover, we try to shrink down z interval to [0, 1] to avoid that
// treemap with large z overlaps other components.
function calculateZ2(depth, z2InLevel) {
    return depth * Z2_BASE + z2InLevel;
}
const __TURBOPACK__default__export__ = TreemapView;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/treemap/treemapVisual.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$VisualMapping$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/VisualMapping.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$tool$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/tool/color.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js [app-ssr] (ecmascript)");
;
;
;
;
var ITEM_STYLE_NORMAL = 'itemStyle';
var inner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeInner"])();
const __TURBOPACK__default__export__ = {
    seriesType: 'treemap',
    reset: function(seriesModel) {
        var tree = seriesModel.getData().tree;
        var root = tree.root;
        if (root.isRemoved()) {
            return;
        }
        travelTree(root, // Visual should calculate from tree root but not view root.
        {}, seriesModel.getViewRoot().getAncestors(), seriesModel);
    }
};
function travelTree(node, designatedVisual, viewRootAncestors, seriesModel) {
    var nodeModel = node.getModel();
    var nodeLayout = node.getLayout();
    var data = node.hostTree.data;
    // Optimize
    if (!nodeLayout || nodeLayout.invisible || !nodeLayout.isInView) {
        return;
    }
    var nodeItemStyleModel = nodeModel.getModel(ITEM_STYLE_NORMAL);
    var visuals = buildVisuals(nodeItemStyleModel, designatedVisual, seriesModel);
    var existsStyle = data.ensureUniqueItemVisual(node.dataIndex, 'style');
    // calculate border color
    var borderColor = nodeItemStyleModel.get('borderColor');
    var borderColorSaturation = nodeItemStyleModel.get('borderColorSaturation');
    var thisNodeColor;
    if (borderColorSaturation != null) {
        // For performance, do not always execute 'calculateColor'.
        thisNodeColor = calculateColor(visuals);
        borderColor = calculateBorderColor(borderColorSaturation, thisNodeColor);
    }
    existsStyle.stroke = borderColor;
    var viewChildren = node.viewChildren;
    if (!viewChildren || !viewChildren.length) {
        thisNodeColor = calculateColor(visuals);
        // Apply visual to this node.
        existsStyle.fill = thisNodeColor;
    } else {
        var mapping_1 = buildVisualMapping(node, nodeModel, nodeLayout, nodeItemStyleModel, visuals, viewChildren);
        // Designate visual to children.
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(viewChildren, function(child, index) {
            // If higher than viewRoot, only ancestors of viewRoot is needed to visit.
            if (child.depth >= viewRootAncestors.length || child === viewRootAncestors[child.depth]) {
                var childVisual = mapVisual(nodeModel, visuals, child, index, mapping_1, seriesModel);
                travelTree(child, childVisual, viewRootAncestors, seriesModel);
            }
        });
    }
}
function buildVisuals(nodeItemStyleModel, designatedVisual, seriesModel) {
    var visuals = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extend"])({}, designatedVisual);
    var designatedVisualItemStyle = seriesModel.designatedVisualItemStyle;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])([
        'color',
        'colorAlpha',
        'colorSaturation'
    ], function(visualName) {
        // Priority: thisNode > thisLevel > parentNodeDesignated > seriesModel
        designatedVisualItemStyle[visualName] = designatedVisual[visualName];
        var val = nodeItemStyleModel.get(visualName);
        designatedVisualItemStyle[visualName] = null;
        val != null && (visuals[visualName] = val);
    });
    return visuals;
}
function calculateColor(visuals) {
    var color = getValueVisualDefine(visuals, 'color');
    if (color) {
        var colorAlpha = getValueVisualDefine(visuals, 'colorAlpha');
        var colorSaturation = getValueVisualDefine(visuals, 'colorSaturation');
        if (colorSaturation) {
            color = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$tool$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["modifyHSL"])(color, null, null, colorSaturation);
        }
        if (colorAlpha) {
            color = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$tool$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["modifyAlpha"])(color, colorAlpha);
        }
        return color;
    }
}
function calculateBorderColor(borderColorSaturation, thisNodeColor) {
    return thisNodeColor != null ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$tool$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["modifyHSL"])(thisNodeColor, null, null, borderColorSaturation) : null;
}
function getValueVisualDefine(visuals, name) {
    var value = visuals[name];
    if (value != null && value !== 'none') {
        return value;
    }
}
function buildVisualMapping(node, nodeModel, nodeLayout, nodeItemStyleModel, visuals, viewChildren) {
    if (!viewChildren || !viewChildren.length) {
        return;
    }
    var rangeVisual = getRangeVisual(nodeModel, 'color') || visuals.color != null && visuals.color !== 'none' && (getRangeVisual(nodeModel, 'colorAlpha') || getRangeVisual(nodeModel, 'colorSaturation'));
    if (!rangeVisual) {
        return;
    }
    var visualMin = nodeModel.get('visualMin');
    var visualMax = nodeModel.get('visualMax');
    var dataExtent = nodeLayout.dataExtent.slice();
    visualMin != null && visualMin < dataExtent[0] && (dataExtent[0] = visualMin);
    visualMax != null && visualMax > dataExtent[1] && (dataExtent[1] = visualMax);
    var colorMappingBy = nodeModel.get('colorMappingBy');
    var opt = {
        type: rangeVisual.name,
        dataExtent: dataExtent,
        visual: rangeVisual.range
    };
    if (opt.type === 'color' && (colorMappingBy === 'index' || colorMappingBy === 'id')) {
        opt.mappingMethod = 'category';
        opt.loop = true;
    // categories is ordinal, so do not set opt.categories.
    } else {
        opt.mappingMethod = 'linear';
    }
    var mapping = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$VisualMapping$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](opt);
    inner(mapping).drColorMappingBy = colorMappingBy;
    return mapping;
}
// Notice: If we don't have the attribute 'colorRange', but only use
// attribute 'color' to represent both concepts of 'colorRange' and 'color',
// (It means 'colorRange' when 'color' is Array, means 'color' when not array),
// this problem will be encountered:
// If a level-1 node doesn't have children, and its siblings have children,
// and colorRange is set on level-1, then the node cannot be colored.
// So we separate 'colorRange' and 'color' to different attributes.
function getRangeVisual(nodeModel, name) {
    // 'colorRange', 'colorARange', 'colorSRange'.
    // If not exists on this node, fetch from levels and series.
    var range = nodeModel.get(name);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isArray"])(range) && range.length ? {
        name: name,
        range: range
    } : null;
}
function mapVisual(nodeModel, visuals, child, index, mapping, seriesModel) {
    var childVisuals = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extend"])({}, visuals);
    if (mapping) {
        // Only support color, colorAlpha, colorSaturation.
        var mappingType = mapping.type;
        var colorMappingBy = mappingType === 'color' && inner(mapping).drColorMappingBy;
        var value = colorMappingBy === 'index' ? index : colorMappingBy === 'id' ? seriesModel.mapIdToIndex(child.getId()) : child.getValue(nodeModel.get('visualDimension'));
        childVisuals[mappingType] = mapping.mapValueToVisual(value);
    }
    return childVisuals;
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/treemap/treemapLayout.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
*/ /*
* A third-party license is embedded for some of the code in this file:
* The treemap layout implementation was originally copied from
* "d3.js" with some modifications made for this project.
* (See more details in the comment of the method "squarify" below.)
* The use of the source code of this file is also subject to the terms
* and consitions of the license of "d3.js" (BSD-3Clause, see
* </licenses/LICENSE-d3>).
*/ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$BoundingRect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/BoundingRect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/number.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/layout.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$treeHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/helper/treeHelper.js [app-ssr] (ecmascript)");
;
;
;
;
;
var mathMax = Math.max;
var mathMin = Math.min;
var retrieveValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["retrieve"];
var each = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"];
var PATH_BORDER_WIDTH = [
    'itemStyle',
    'borderWidth'
];
var PATH_GAP_WIDTH = [
    'itemStyle',
    'gapWidth'
];
var PATH_UPPER_LABEL_SHOW = [
    'upperLabel',
    'show'
];
var PATH_UPPER_LABEL_HEIGHT = [
    'upperLabel',
    'height'
];
;
const __TURBOPACK__default__export__ = {
    seriesType: 'treemap',
    reset: function(seriesModel, ecModel, api, payload) {
        // Layout result in each node:
        // {x, y, width, height, area, borderWidth}
        var seriesOption = seriesModel.option;
        var refContainer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createBoxLayoutReference"](seriesModel, api).refContainer;
        var layoutInfo = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLayoutRect"](seriesModel.getBoxLayoutParams(), refContainer);
        var size = seriesOption.size || []; // Compatible with ec2.
        var containerWidth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parsePercent"])(retrieveValue(layoutInfo.width, size[0]), refContainer.width);
        var containerHeight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parsePercent"])(retrieveValue(layoutInfo.height, size[1]), refContainer.height);
        // Fetch payload info.
        var payloadType = payload && payload.type;
        var types = [
            'treemapZoomToNode',
            'treemapRootToNode'
        ];
        var targetInfo = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$treeHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["retrieveTargetInfo"](payload, types, seriesModel);
        var rootRect = payloadType === 'treemapRender' || payloadType === 'treemapMove' ? payload.rootRect : null;
        var viewRoot = seriesModel.getViewRoot();
        var viewAbovePath = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$treeHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPathToRoot"](viewRoot);
        if (payloadType !== 'treemapMove') {
            var rootSize = payloadType === 'treemapZoomToNode' ? estimateRootSize(seriesModel, targetInfo, viewRoot, containerWidth, containerHeight) : rootRect ? [
                rootRect.width,
                rootRect.height
            ] : [
                containerWidth,
                containerHeight
            ];
            var sort_1 = seriesOption.sort;
            if (sort_1 && sort_1 !== 'asc' && sort_1 !== 'desc') {
                // Default to be desc order.
                sort_1 = 'desc';
            }
            var options = {
                squareRatio: seriesOption.squareRatio,
                sort: sort_1,
                leafDepth: seriesOption.leafDepth
            };
            // layout should be cleared because using updateView but not update.
            viewRoot.hostTree.clearLayouts();
            // TODO
            // optimize: if out of view clip, do not layout.
            // But take care that if do not render node out of view clip,
            // how to calculate start po
            var viewRootLayout_1 = {
                x: 0,
                y: 0,
                width: rootSize[0],
                height: rootSize[1],
                area: rootSize[0] * rootSize[1]
            };
            viewRoot.setLayout(viewRootLayout_1);
            squarify(viewRoot, options, false, 0);
            // Supplement layout.
            viewRootLayout_1 = viewRoot.getLayout();
            each(viewAbovePath, function(node, index) {
                var childValue = (viewAbovePath[index + 1] || viewRoot).getValue();
                node.setLayout(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extend"]({
                    dataExtent: [
                        childValue,
                        childValue
                    ],
                    borderWidth: 0,
                    upperHeight: 0
                }, viewRootLayout_1));
            });
        }
        var treeRoot = seriesModel.getData().tree.root;
        treeRoot.setLayout(calculateRootPosition(layoutInfo, rootRect, targetInfo), true);
        seriesModel.setLayoutInfo(layoutInfo);
        // FIXME: narrow down pruning boungding rect.
        // Currently ec width/height is used becuases clip is not supported.
        prunning(treeRoot, // Transform to base element coordinate system.
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$BoundingRect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](-layoutInfo.x, -layoutInfo.y, api.getWidth(), api.getHeight()), viewAbovePath, viewRoot, 0);
    }
};
/**
 * Layout treemap with squarify algorithm.
 * The original presentation of this algorithm
 * was made by Mark Bruls, Kees Huizing, and Jarke J. van Wijk
 * <https://graphics.ethz.ch/teaching/scivis_common/Literature/squarifiedTreeMaps.pdf>.
 * The implementation of this algorithm was originally copied from "d3.js"
 * <https://github.com/d3/d3/blob/9cc9a875e636a1dcf36cc1e07bdf77e1ad6e2c74/src/layout/treemap.js>
 * with some modifications made for this program.
 * See the license statement at the head of this file.
 *
 * @protected
 * @param {module:echarts/data/Tree~TreeNode} node
 * @param {Object} options
 * @param {string} options.sort 'asc' or 'desc'
 * @param {number} options.squareRatio
 * @param {boolean} hideChildren
 * @param {number} depth
 */ function squarify(node, options, hideChildren, depth) {
    var width;
    var height;
    if (node.isRemoved()) {
        return;
    }
    var thisLayout = node.getLayout();
    width = thisLayout.width;
    height = thisLayout.height;
    // Considering border and gap
    var nodeModel = node.getModel();
    var borderWidth = nodeModel.get(PATH_BORDER_WIDTH);
    var halfGapWidth = nodeModel.get(PATH_GAP_WIDTH) / 2;
    var upperLabelHeight = getUpperLabelHeight(nodeModel);
    var upperHeight = Math.max(borderWidth, upperLabelHeight);
    var layoutOffset = borderWidth - halfGapWidth;
    var layoutOffsetUpper = upperHeight - halfGapWidth;
    node.setLayout({
        borderWidth: borderWidth,
        upperHeight: upperHeight,
        upperLabelHeight: upperLabelHeight
    }, true);
    width = mathMax(width - 2 * layoutOffset, 0);
    height = mathMax(height - layoutOffset - layoutOffsetUpper, 0);
    var totalArea = width * height;
    var viewChildren = initChildren(node, nodeModel, totalArea, options, hideChildren, depth);
    if (!viewChildren.length) {
        return;
    }
    var rect = {
        x: layoutOffset,
        y: layoutOffsetUpper,
        width: width,
        height: height
    };
    var rowFixedLength = mathMin(width, height);
    var best = Infinity; // the best row score so far
    var row = [];
    row.area = 0;
    for(var i = 0, len = viewChildren.length; i < len;){
        var child = viewChildren[i];
        row.push(child);
        row.area += child.getLayout().area;
        var score = worst(row, rowFixedLength, options.squareRatio);
        // continue with this orientation
        if (score <= best) {
            i++;
            best = score;
        } else {
            row.area -= row.pop().getLayout().area;
            position(row, rowFixedLength, rect, halfGapWidth, false);
            rowFixedLength = mathMin(rect.width, rect.height);
            row.length = row.area = 0;
            best = Infinity;
        }
    }
    if (row.length) {
        position(row, rowFixedLength, rect, halfGapWidth, true);
    }
    if (!hideChildren) {
        var childrenVisibleMin = nodeModel.get('childrenVisibleMin');
        if (childrenVisibleMin != null && totalArea < childrenVisibleMin) {
            hideChildren = true;
        }
    }
    for(var i = 0, len = viewChildren.length; i < len; i++){
        squarify(viewChildren[i], options, hideChildren, depth + 1);
    }
}
/**
 * Set area to each child, and calculate data extent for visual coding.
 */ function initChildren(node, nodeModel, totalArea, options, hideChildren, depth) {
    var viewChildren = node.children || [];
    var orderBy = options.sort;
    orderBy !== 'asc' && orderBy !== 'desc' && (orderBy = null);
    var overLeafDepth = options.leafDepth != null && options.leafDepth <= depth;
    // leafDepth has higher priority.
    if (hideChildren && !overLeafDepth) {
        return node.viewChildren = [];
    }
    // Sort children, order by desc.
    viewChildren = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filter"](viewChildren, function(child) {
        return !child.isRemoved();
    });
    sort(viewChildren, orderBy);
    var info = statistic(nodeModel, viewChildren, orderBy);
    if (info.sum === 0) {
        return node.viewChildren = [];
    }
    info.sum = filterByThreshold(nodeModel, totalArea, info.sum, orderBy, viewChildren);
    if (info.sum === 0) {
        return node.viewChildren = [];
    }
    // Set area to each child.
    for(var i = 0, len = viewChildren.length; i < len; i++){
        var area = viewChildren[i].getValue() / info.sum * totalArea;
        // Do not use setLayout({...}, true), because it is needed to clear last layout.
        viewChildren[i].setLayout({
            area: area
        });
    }
    if (overLeafDepth) {
        viewChildren.length && node.setLayout({
            isLeafRoot: true
        }, true);
        viewChildren.length = 0;
    }
    node.viewChildren = viewChildren;
    node.setLayout({
        dataExtent: info.dataExtent
    }, true);
    return viewChildren;
}
/**
 * Consider 'visibleMin'. Modify viewChildren and get new sum.
 */ function filterByThreshold(nodeModel, totalArea, sum, orderBy, orderedChildren) {
    // visibleMin is not supported yet when no option.sort.
    if (!orderBy) {
        return sum;
    }
    var visibleMin = nodeModel.get('visibleMin');
    var len = orderedChildren.length;
    var deletePoint = len;
    // Always travel from little value to big value.
    for(var i = len - 1; i >= 0; i--){
        var value = orderedChildren[orderBy === 'asc' ? len - i - 1 : i].getValue();
        if (value / sum * totalArea < visibleMin) {
            deletePoint = i;
            sum -= value;
        }
    }
    orderBy === 'asc' ? orderedChildren.splice(0, len - deletePoint) : orderedChildren.splice(deletePoint, len - deletePoint);
    return sum;
}
/**
 * Sort
 */ function sort(viewChildren, orderBy) {
    if (orderBy) {
        viewChildren.sort(function(a, b) {
            var diff = orderBy === 'asc' ? a.getValue() - b.getValue() : b.getValue() - a.getValue();
            return diff === 0 ? orderBy === 'asc' ? a.dataIndex - b.dataIndex : b.dataIndex - a.dataIndex : diff;
        });
    }
    return viewChildren;
}
/**
 * Statistic
 */ function statistic(nodeModel, children, orderBy) {
    // Calculate sum.
    var sum = 0;
    for(var i = 0, len = children.length; i < len; i++){
        sum += children[i].getValue();
    }
    // Statistic data extent for latter visual coding.
    // Notice: data extent should be calculate based on raw children
    // but not filtered view children, otherwise visual mapping will not
    // be stable when zoom (where children is filtered by visibleMin).
    var dimension = nodeModel.get('visualDimension');
    var dataExtent;
    // The same as area dimension.
    if (!children || !children.length) {
        dataExtent = [
            NaN,
            NaN
        ];
    } else if (dimension === 'value' && orderBy) {
        dataExtent = [
            children[children.length - 1].getValue(),
            children[0].getValue()
        ];
        orderBy === 'asc' && dataExtent.reverse();
    } else {
        dataExtent = [
            Infinity,
            -Infinity
        ];
        each(children, function(child) {
            var value = child.getValue(dimension);
            value < dataExtent[0] && (dataExtent[0] = value);
            value > dataExtent[1] && (dataExtent[1] = value);
        });
    }
    return {
        sum: sum,
        dataExtent: dataExtent
    };
}
/**
 * Computes the score for the specified row,
 * as the worst aspect ratio.
 */ function worst(row, rowFixedLength, ratio) {
    var areaMax = 0;
    var areaMin = Infinity;
    for(var i = 0, area = void 0, len = row.length; i < len; i++){
        area = row[i].getLayout().area;
        if (area) {
            area < areaMin && (areaMin = area);
            area > areaMax && (areaMax = area);
        }
    }
    var squareArea = row.area * row.area;
    var f = rowFixedLength * rowFixedLength * ratio;
    return squareArea ? mathMax(f * areaMax / squareArea, squareArea / (f * areaMin)) : Infinity;
}
/**
 * Positions the specified row of nodes. Modifies `rect`.
 */ function position(row, rowFixedLength, rect, halfGapWidth, flush) {
    // When rowFixedLength === rect.width,
    // it is horizontal subdivision,
    // rowFixedLength is the width of the subdivision,
    // rowOtherLength is the height of the subdivision,
    // and nodes will be positioned from left to right.
    // wh[idx0WhenH] means: when horizontal,
    //      wh[idx0WhenH] => wh[0] => 'width'.
    //      xy[idx1WhenH] => xy[1] => 'y'.
    var idx0WhenH = rowFixedLength === rect.width ? 0 : 1;
    var idx1WhenH = 1 - idx0WhenH;
    var xy = [
        'x',
        'y'
    ];
    var wh = [
        'width',
        'height'
    ];
    var last = rect[xy[idx0WhenH]];
    var rowOtherLength = rowFixedLength ? row.area / rowFixedLength : 0;
    if (flush || rowOtherLength > rect[wh[idx1WhenH]]) {
        rowOtherLength = rect[wh[idx1WhenH]]; // over+underflow
    }
    for(var i = 0, rowLen = row.length; i < rowLen; i++){
        var node = row[i];
        var nodeLayout = {};
        var step = rowOtherLength ? node.getLayout().area / rowOtherLength : 0;
        var wh1 = nodeLayout[wh[idx1WhenH]] = mathMax(rowOtherLength - 2 * halfGapWidth, 0);
        // We use Math.max/min to avoid negative width/height when considering gap width.
        var remain = rect[xy[idx0WhenH]] + rect[wh[idx0WhenH]] - last;
        var modWH = i === rowLen - 1 || remain < step ? remain : step;
        var wh0 = nodeLayout[wh[idx0WhenH]] = mathMax(modWH - 2 * halfGapWidth, 0);
        nodeLayout[xy[idx1WhenH]] = rect[xy[idx1WhenH]] + mathMin(halfGapWidth, wh1 / 2);
        nodeLayout[xy[idx0WhenH]] = last + mathMin(halfGapWidth, wh0 / 2);
        last += modWH;
        node.setLayout(nodeLayout, true);
    }
    rect[xy[idx1WhenH]] += rowOtherLength;
    rect[wh[idx1WhenH]] -= rowOtherLength;
}
// Return [containerWidth, containerHeight] as default.
function estimateRootSize(seriesModel, targetInfo, viewRoot, containerWidth, containerHeight) {
    // If targetInfo.node exists, we zoom to the node,
    // so estimate whole width and height by target node.
    var currNode = (targetInfo || {}).node;
    var defaultSize = [
        containerWidth,
        containerHeight
    ];
    if (!currNode || currNode === viewRoot) {
        return defaultSize;
    }
    var parent;
    var viewArea = containerWidth * containerHeight;
    var area = viewArea * seriesModel.option.zoomToNodeRatio;
    while(parent = currNode.parentNode){
        // jshint ignore:line
        var sum = 0;
        var siblings = parent.children;
        for(var i = 0, len = siblings.length; i < len; i++){
            sum += siblings[i].getValue();
        }
        var currNodeValue = currNode.getValue();
        if (currNodeValue === 0) {
            return defaultSize;
        }
        area *= sum / currNodeValue;
        // Considering border, suppose aspect ratio is 1.
        var parentModel = parent.getModel();
        var borderWidth = parentModel.get(PATH_BORDER_WIDTH);
        var upperHeight = Math.max(borderWidth, getUpperLabelHeight(parentModel));
        area += 4 * borderWidth * borderWidth + (3 * borderWidth + upperHeight) * Math.pow(area, 0.5);
        area > __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MAX_SAFE_INTEGER"] && (area = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MAX_SAFE_INTEGER"]);
        currNode = parent;
    }
    area < viewArea && (area = viewArea);
    var scale = Math.pow(area / viewArea, 0.5);
    return [
        containerWidth * scale,
        containerHeight * scale
    ];
}
// Root position based on coord of containerGroup
function calculateRootPosition(layoutInfo, rootRect, targetInfo) {
    if (rootRect) {
        return {
            x: rootRect.x,
            y: rootRect.y
        };
    }
    var defaultPosition = {
        x: 0,
        y: 0
    };
    if (!targetInfo) {
        return defaultPosition;
    }
    // If targetInfo is fetched by 'retrieveTargetInfo',
    // old tree and new tree are the same tree,
    // so the node still exists and we can visit it.
    var targetNode = targetInfo.node;
    var layout = targetNode.getLayout();
    if (!layout) {
        return defaultPosition;
    }
    // Transform coord from local to container.
    var targetCenter = [
        layout.width / 2,
        layout.height / 2
    ];
    var node = targetNode;
    while(node){
        var nodeLayout = node.getLayout();
        targetCenter[0] += nodeLayout.x;
        targetCenter[1] += nodeLayout.y;
        node = node.parentNode;
    }
    return {
        x: layoutInfo.width / 2 - targetCenter[0],
        y: layoutInfo.height / 2 - targetCenter[1]
    };
}
// Mark nodes visible for prunning when visual coding and rendering.
// Prunning depends on layout and root position, so we have to do it after layout.
function prunning(node, clipRect, viewAbovePath, viewRoot, depth) {
    var nodeLayout = node.getLayout();
    var nodeInViewAbovePath = viewAbovePath[depth];
    var isAboveViewRoot = nodeInViewAbovePath && nodeInViewAbovePath === node;
    if (nodeInViewAbovePath && !isAboveViewRoot || depth === viewAbovePath.length && node !== viewRoot) {
        return;
    }
    node.setLayout({
        // isInView means: viewRoot sub tree + viewAbovePath
        isInView: true,
        // invisible only means: outside view clip so that the node can not
        // see but still layout for animation preparation but not render.
        invisible: !isAboveViewRoot && !clipRect.intersect(nodeLayout),
        isAboveViewRoot: isAboveViewRoot
    }, true);
    // Transform to child coordinate.
    var childClipRect = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$BoundingRect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](clipRect.x - nodeLayout.x, clipRect.y - nodeLayout.y, clipRect.width, clipRect.height);
    each(node.viewChildren || [], function(child) {
        prunning(child, childClipRect, viewAbovePath, viewRoot, depth + 1);
    });
}
function getUpperLabelHeight(model) {
    return model.get(PATH_UPPER_LABEL_SHOW) ? model.get(PATH_UPPER_LABEL_HEIGHT) : 0;
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/treemap/install.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$treemap$2f$treemapAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/treemap/treemapAction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$treemap$2f$TreemapSeries$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/treemap/TreemapSeries.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$treemap$2f$TreemapView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/treemap/TreemapView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$treemap$2f$treemapVisual$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/treemap/treemapVisual.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$treemap$2f$treemapLayout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/treemap/treemapLayout.js [app-ssr] (ecmascript)");
;
;
;
;
;
function install(registers) {
    registers.registerSeriesModel(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$treemap$2f$TreemapSeries$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    registers.registerChartView(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$treemap$2f$TreemapView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    registers.registerVisual(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$treemap$2f$treemapVisual$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    registers.registerLayout(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$treemap$2f$treemapLayout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$treemap$2f$treemapAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["installTreemapAction"])(registers);
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/treemap/install.js [app-ssr] (ecmascript) <export install as TreemapChart>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TreemapChart",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$treemap$2f$install$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["install"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$treemap$2f$install$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/treemap/install.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=6e80b_echarts_lib_chart_treemap_8da5753c._.js.map