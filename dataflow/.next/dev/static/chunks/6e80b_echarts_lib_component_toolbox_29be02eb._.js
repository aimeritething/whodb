(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/toolbox/featureManager.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    "ToolboxFeature",
    ()=>ToolboxFeature,
    "getFeature",
    ()=>getFeature,
    "registerFeature",
    ()=>registerFeature
]);
var ToolboxFeature = /** @class */ function() {
    function ToolboxFeature() {}
    return ToolboxFeature;
}();
;
var features = {};
function registerFeature(name, ctor) {
    features[name] = ctor;
}
function getFeature(name) {
    return features[name];
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/toolbox/ToolboxModel.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$featureManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/toolbox/featureManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/Component.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/tokens.js [app-client] (ecmascript)");
;
;
;
;
;
var ToolboxModel = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(ToolboxModel, _super);
    function ToolboxModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = ToolboxModel.type;
        return _this;
    }
    ToolboxModel.prototype.optionUpdated = function() {
        _super.prototype.optionUpdated.apply(this, arguments);
        var ecModel = this.ecModel;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"](this.option.feature, function(featureOpt, featureName) {
            var Feature = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$featureManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFeature"](featureName);
            if (Feature) {
                if (Feature.getDefaultOption) {
                    Feature.defaultOption = Feature.getDefaultOption(ecModel);
                }
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["merge"](featureOpt, Feature.defaultOption);
            }
        });
    };
    ToolboxModel.type = 'toolbox';
    ToolboxModel.layoutMode = {
        type: 'box',
        ignoreSize: true
    };
    ToolboxModel.defaultOption = {
        show: true,
        z: 6,
        // zlevel: 0,
        orient: 'horizontal',
        left: 'right',
        top: 'top',
        // right
        // bottom
        backgroundColor: 'transparent',
        borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].color.border,
        borderRadius: 0,
        borderWidth: 0,
        padding: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].size.m,
        itemSize: 15,
        itemGap: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].size.s,
        showTitle: true,
        iconStyle: {
            borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].color.accent50,
            color: 'none'
        },
        emphasis: {
            iconStyle: {
                borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].color.accent50
            }
        },
        // textStyle: {},
        // feature
        tooltip: {
            show: false,
            position: 'bottom'
        }
    };
    return ToolboxModel;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = ToolboxModel;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/toolbox/ToolboxView.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$contain$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/contain/text.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/graphic.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/states.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/Model.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$DataDiffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/data/DataDiffer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$listComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/helper/listComponent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/view/Component.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$featureManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/toolbox/featureManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/component.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Text.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/label/labelStyle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/layout.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/tokens.js [app-client] (ecmascript)");
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
var ToolboxView = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(ToolboxView, _super);
    function ToolboxView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ToolboxView.prototype.render = function(toolboxModel, ecModel, api, payload) {
        var group = this.group;
        group.removeAll();
        if (!toolboxModel.get('show')) {
            return;
        }
        var itemSize = +toolboxModel.get('itemSize');
        var isVertical = toolboxModel.get('orient') === 'vertical';
        var featureOpts = toolboxModel.get('feature') || {};
        var features = this._features || (this._features = {});
        var featureNames = [];
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"](featureOpts, function(opt, name) {
            featureNames.push(name);
        });
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$DataDiffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](this._featureNames || [], featureNames).add(processFeature).update(processFeature).remove(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["curry"](processFeature, null)).execute();
        // Keep for diff.
        this._featureNames = featureNames;
        function processFeature(newIndex, oldIndex) {
            var featureName = featureNames[newIndex];
            var oldName = featureNames[oldIndex];
            var featureOpt = featureOpts[featureName];
            var featureModel = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](featureOpt, toolboxModel, toolboxModel.ecModel);
            var feature;
            // FIX#11236, merge feature title from MagicType newOption. TODO: consider seriesIndex ?
            if (payload && payload.newTitle != null && payload.featureName === featureName) {
                featureOpt.title = payload.newTitle;
            }
            if (featureName && !oldName) {
                // Create
                if (isUserFeatureName(featureName)) {
                    feature = {
                        onclick: featureModel.option.onclick,
                        featureName: featureName
                    };
                } else {
                    var Feature = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$featureManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFeature"])(featureName);
                    if (!Feature) {
                        return;
                    }
                    feature = new Feature();
                }
                features[featureName] = feature;
            } else {
                feature = features[oldName];
                // If feature does not exist.
                if (!feature) {
                    return;
                }
            }
            feature.uid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUID"])('toolbox-feature');
            feature.model = featureModel;
            feature.ecModel = ecModel;
            feature.api = api;
            var isToolboxFeature = feature instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$featureManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToolboxFeature"];
            if (!featureName && oldName) {
                isToolboxFeature && feature.dispose && feature.dispose(ecModel, api);
                return;
            }
            if (!featureModel.get('show') || isToolboxFeature && feature.unusable) {
                isToolboxFeature && feature.remove && feature.remove(ecModel, api);
                return;
            }
            createIconPaths(featureModel, feature, featureName);
            featureModel.setIconStatus = function(iconName, status) {
                var option = this.option;
                var iconPaths = this.iconPaths;
                option.iconStatus = option.iconStatus || {};
                option.iconStatus[iconName] = status;
                if (iconPaths[iconName]) {
                    (status === 'emphasis' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enterEmphasis"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["leaveEmphasis"])(iconPaths[iconName]);
                }
            };
            if (feature instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$featureManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToolboxFeature"]) {
                if (feature.render) {
                    feature.render(featureModel, ecModel, api, payload);
                }
            }
        }
        function createIconPaths(featureModel, feature, featureName) {
            var iconStyleModel = featureModel.getModel('iconStyle');
            var iconStyleEmphasisModel = featureModel.getModel([
                'emphasis',
                'iconStyle'
            ]);
            // If one feature has multiple icons, they are organized as
            // {
            //     icon: {
            //         foo: '',
            //         bar: ''
            //     },
            //     title: {
            //         foo: '',
            //         bar: ''
            //     }
            // }
            var icons = feature instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$featureManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToolboxFeature"] && feature.getIcons ? feature.getIcons() : featureModel.get('icon');
            var titles = featureModel.get('title') || {};
            var iconsMap;
            var titlesMap;
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"](icons)) {
                iconsMap = {};
                iconsMap[featureName] = icons;
            } else {
                iconsMap = icons;
            }
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"](titles)) {
                titlesMap = {};
                titlesMap[featureName] = titles;
            } else {
                titlesMap = titles;
            }
            var iconPaths = featureModel.iconPaths = {};
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"](iconsMap, function(iconStr, iconName) {
                var path = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createIcon"](iconStr, {}, {
                    x: -itemSize / 2,
                    y: -itemSize / 2,
                    width: itemSize,
                    height: itemSize
                }); // TODO handling image
                path.setStyle(iconStyleModel.getItemStyle());
                var pathEmphasisState = path.ensureState('emphasis');
                pathEmphasisState.style = iconStyleEmphasisModel.getItemStyle();
                // Text position calculation
                // TODO: extract `textStyle` from `iconStyle` and use `createTextStyle`
                var textContent = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
                    style: {
                        text: titlesMap[iconName],
                        align: iconStyleEmphasisModel.get('textAlign'),
                        borderRadius: iconStyleEmphasisModel.get('textBorderRadius'),
                        padding: iconStyleEmphasisModel.get('textPadding'),
                        fill: null,
                        font: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFont"])({
                            fontStyle: iconStyleEmphasisModel.get('textFontStyle'),
                            fontFamily: iconStyleEmphasisModel.get('textFontFamily'),
                            fontSize: iconStyleEmphasisModel.get('textFontSize'),
                            fontWeight: iconStyleEmphasisModel.get('textFontWeight')
                        }, ecModel)
                    },
                    ignore: true
                });
                path.setTextContent(textContent);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["setTooltipConfig"]({
                    el: path,
                    componentModel: toolboxModel,
                    itemName: iconName,
                    formatterParamsExtra: {
                        title: titlesMap[iconName]
                    }
                });
                path.__title = titlesMap[iconName];
                path.on('mouseover', function() {
                    // Should not reuse above hoverStyle, which might be modified.
                    var hoverStyle = iconStyleEmphasisModel.getItemStyle();
                    var defaultTextPosition = isVertical ? toolboxModel.get('right') == null && toolboxModel.get('left') !== 'right' ? 'right' : 'left' : toolboxModel.get('bottom') == null && toolboxModel.get('top') !== 'bottom' ? 'bottom' : 'top';
                    textContent.setStyle({
                        fill: iconStyleEmphasisModel.get('textFill') || hoverStyle.fill || hoverStyle.stroke || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].color.neutral99,
                        backgroundColor: iconStyleEmphasisModel.get('textBackgroundColor')
                    });
                    path.setTextConfig({
                        position: iconStyleEmphasisModel.get('textPosition') || defaultTextPosition
                    });
                    textContent.ignore = !toolboxModel.get('showTitle');
                    // Use enterEmphasis and leaveEmphasis provide by ec.
                    // There are flags managed by the echarts.
                    api.enterEmphasis(this);
                }).on('mouseout', function() {
                    if (featureModel.get([
                        'iconStatus',
                        iconName
                    ]) !== 'emphasis') {
                        api.leaveEmphasis(this);
                    }
                    textContent.hide();
                });
                (featureModel.get([
                    'iconStatus',
                    iconName
                ]) === 'emphasis' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enterEmphasis"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["leaveEmphasis"])(path);
                group.add(path);
                path.on('click', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bind"](feature.onclick, feature, ecModel, api, iconName));
                iconPaths[iconName] = path;
            });
        }
        var refContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBoxLayoutReference"])(toolboxModel, api).refContainer;
        var boxLayoutParams = toolboxModel.getBoxLayoutParams();
        var padding = toolboxModel.get('padding');
        var viewRect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLayoutRect"])(boxLayoutParams, refContainer, padding);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["box"])(toolboxModel.get('orient'), group, toolboxModel.get('itemGap'), viewRect.width, viewRect.height);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["positionElement"])(group, boxLayoutParams, refContainer, padding);
        // Render background after group is layout
        // FIXME
        group.add(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$listComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeBackground"](group.getBoundingRect(), toolboxModel));
        // Adjust icon title positions to avoid them out of screen
        isVertical || group.eachChild(function(icon) {
            var titleText = icon.__title;
            // const hoverStyle = icon.hoverStyle;
            // TODO simplify code?
            var emphasisState = icon.ensureState('emphasis');
            var emphasisTextConfig = emphasisState.textConfig || (emphasisState.textConfig = {});
            var textContent = icon.getTextContent();
            var emphasisTextState = textContent && textContent.ensureState('emphasis');
            // May be background element
            if (emphasisTextState && !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"](emphasisTextState) && titleText) {
                var emphasisTextStyle = emphasisTextState.style || (emphasisTextState.style = {});
                var rect = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$contain$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBoundingRect"](titleText, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].makeFont(emphasisTextStyle));
                var offsetX = icon.x + group.x;
                var offsetY = icon.y + group.y + itemSize;
                var needPutOnTop = false;
                if (offsetY + rect.height > api.getHeight()) {
                    emphasisTextConfig.position = 'top';
                    needPutOnTop = true;
                }
                var topOffset = needPutOnTop ? -5 - rect.height : itemSize + 10;
                if (offsetX + rect.width / 2 > api.getWidth()) {
                    emphasisTextConfig.position = [
                        '100%',
                        topOffset
                    ];
                    emphasisTextStyle.align = 'right';
                } else if (offsetX - rect.width / 2 < 0) {
                    emphasisTextConfig.position = [
                        0,
                        topOffset
                    ];
                    emphasisTextStyle.align = 'left';
                }
            }
        });
    };
    ToolboxView.prototype.updateView = function(toolboxModel, ecModel, api, payload) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"](this._features, function(feature) {
            feature instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$featureManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToolboxFeature"] && feature.updateView && feature.updateView(feature.model, ecModel, api, payload);
        });
    };
    // updateLayout(toolboxModel, ecModel, api, payload) {
    //     zrUtil.each(this._features, function (feature) {
    //         feature.updateLayout && feature.updateLayout(feature.model, ecModel, api, payload);
    //     });
    // },
    ToolboxView.prototype.remove = function(ecModel, api) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"](this._features, function(feature) {
            feature instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$featureManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToolboxFeature"] && feature.remove && feature.remove(ecModel, api);
        });
        this.group.removeAll();
    };
    ToolboxView.prototype.dispose = function(ecModel, api) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"](this._features, function(feature) {
            feature instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$featureManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToolboxFeature"] && feature.dispose && feature.dispose(ecModel, api);
        });
    };
    ToolboxView.type = 'toolbox';
    return ToolboxView;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
function isUserFeatureName(featureName) {
    return featureName.indexOf('my') === 0;
}
const __TURBOPACK__default__export__ = ToolboxView;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/toolbox/feature/SaveAsImage.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
/* global window, Uint8Array, document */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/env.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$featureManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/toolbox/featureManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/tokens.js [app-client] (ecmascript)");
;
;
;
;
var SaveAsImage = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(SaveAsImage, _super);
    function SaveAsImage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SaveAsImage.prototype.onclick = function(ecModel, api) {
        var model = this.model;
        var title = model.get('name') || ecModel.get('title.0.text') || 'echarts';
        var isSvg = api.getZr().painter.getType() === 'svg';
        var type = isSvg ? 'svg' : model.get('type', true) || 'png';
        var url = api.getConnectedDataURL({
            type: type,
            backgroundColor: model.get('backgroundColor', true) || ecModel.get('backgroundColor') || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].color.neutral00,
            connectedBackgroundColor: model.get('connectedBackgroundColor'),
            excludeComponents: model.get('excludeComponents'),
            pixelRatio: model.get('pixelRatio')
        });
        var browser = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].browser;
        // Chrome, Firefox, New Edge
        if (typeof MouseEvent === 'function' && (browser.newEdge || !browser.ie && !browser.edge)) {
            var $a = document.createElement('a');
            $a.download = title + '.' + type;
            $a.target = '_blank';
            $a.href = url;
            var evt = new MouseEvent('click', {
                // some micro front-end framework， window maybe is a Proxy
                view: document.defaultView,
                bubbles: true,
                cancelable: false
            });
            $a.dispatchEvent(evt);
        } else {
            // @ts-ignore
            if (window.navigator.msSaveOrOpenBlob || isSvg) {
                var parts = url.split(',');
                // data:[<mime type>][;charset=<charset>][;base64],<encoded data>
                var base64Encoded = parts[0].indexOf('base64') > -1;
                var bstr = isSvg ? decodeURIComponent(parts[1]) : parts[1];
                // only `atob` when the data uri is encoded with base64
                // otherwise, like `svg` data uri exported by zrender,
                // there will be an error, for it's not encoded with base64.
                // (just a url-encoded string through `encodeURIComponent`)
                base64Encoded && (bstr = window.atob(bstr));
                var filename = title + '.' + type;
                // @ts-ignore
                if (window.navigator.msSaveOrOpenBlob) {
                    var n = bstr.length;
                    var u8arr = new Uint8Array(n);
                    while(n--){
                        u8arr[n] = bstr.charCodeAt(n);
                    }
                    var blob = new Blob([
                        u8arr
                    ]); // @ts-ignore
                    window.navigator.msSaveOrOpenBlob(blob, filename);
                } else {
                    var frame = document.createElement('iframe');
                    document.body.appendChild(frame);
                    var cw = frame.contentWindow;
                    var doc = cw.document;
                    doc.open('image/svg+xml', 'replace');
                    doc.write(bstr);
                    doc.close();
                    cw.focus();
                    doc.execCommand('SaveAs', true, filename);
                    document.body.removeChild(frame);
                }
            } else {
                var lang = model.get('lang');
                var html = '' + '<body style="margin:0;">' + '<img src="' + url + '" style="max-width:100%;" title="' + (lang && lang[0] || '') + '" />' + '</body>';
                var tab = window.open();
                tab.document.write(html);
                tab.document.title = title;
            }
        }
    };
    SaveAsImage.getDefaultOption = function(ecModel) {
        var defaultOption = {
            show: true,
            icon: 'M4.7,22.9L29.3,45.5L54.7,23.4M4.6,43.6L4.6,58L53.8,58L53.8,43.6M29.2,45.1L29.2,0',
            title: ecModel.getLocaleModel().get([
                'toolbox',
                'saveAsImage',
                'title'
            ]),
            type: 'png',
            // Default use option.backgroundColor
            // backgroundColor: '#fff',
            connectedBackgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].color.neutral00,
            name: '',
            excludeComponents: [
                'toolbox'
            ],
            // use current pixel ratio of device by default
            // pixelRatio: 1,
            lang: ecModel.getLocaleModel().get([
                'toolbox',
                'saveAsImage',
                'lang'
            ])
        };
        return defaultOption;
    };
    return SaveAsImage;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$featureManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToolboxFeature"]);
const __TURBOPACK__default__export__ = SaveAsImage;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/toolbox/feature/MagicType.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/core/echarts.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$featureManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/toolbox/featureManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js [app-client] (ecmascript)");
;
;
;
;
;
var INNER_STACK_KEYWORD = '__ec_magicType_stack__';
var ICON_TYPES = [
    'line',
    'bar',
    'stack'
];
// stack and tiled appears in pair for the title
var TITLE_TYPES = [
    'line',
    'bar',
    'stack',
    'tiled'
];
var radioTypes = [
    [
        'line',
        'bar'
    ],
    [
        'stack'
    ]
];
var MagicType = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(MagicType, _super);
    function MagicType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MagicType.prototype.getIcons = function() {
        var model = this.model;
        var availableIcons = model.get('icon');
        var icons = {};
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"](model.get('type'), function(type) {
            if (availableIcons[type]) {
                icons[type] = availableIcons[type];
            }
        });
        return icons;
    };
    MagicType.getDefaultOption = function(ecModel) {
        var defaultOption = {
            show: true,
            type: [],
            // Icon group
            icon: {
                line: 'M4.1,28.9h7.1l9.3-22l7.4,38l9.7-19.7l3,12.8h14.9M4.1,58h51.4',
                bar: 'M6.7,22.9h10V48h-10V22.9zM24.9,13h10v35h-10V13zM43.2,2h10v46h-10V2zM3.1,58h53.7',
                // eslint-disable-next-line
                stack: 'M8.2,38.4l-8.4,4.1l30.6,15.3L60,42.5l-8.1-4.1l-21.5,11L8.2,38.4z M51.9,30l-8.1,4.2l-13.4,6.9l-13.9-6.9L8.2,30l-8.4,4.2l8.4,4.2l22.2,11l21.5-11l8.1-4.2L51.9,30z M51.9,21.7l-8.1,4.2L35.7,30l-5.3,2.8L24.9,30l-8.4-4.1l-8.3-4.2l-8.4,4.2L8.2,30l8.3,4.2l13.9,6.9l13.4-6.9l8.1-4.2l8.1-4.1L51.9,21.7zM30.4,2.2L-0.2,17.5l8.4,4.1l8.3,4.2l8.4,4.2l5.5,2.7l5.3-2.7l8.1-4.2l8.1-4.2l8.1-4.1L30.4,2.2z' // jshint ignore:line
            },
            // `line`, `bar`, `stack`, `tiled`
            title: ecModel.getLocaleModel().get([
                'toolbox',
                'magicType',
                'title'
            ]),
            option: {},
            seriesIndex: {}
        };
        return defaultOption;
    };
    MagicType.prototype.onclick = function(ecModel, api, type) {
        var model = this.model;
        var seriesIndex = model.get([
            'seriesIndex',
            type
        ]);
        // Not supported magicType
        if (!seriesOptGenreator[type]) {
            return;
        }
        var newOption = {
            series: []
        };
        var generateNewSeriesTypes = function(seriesModel) {
            var seriesType = seriesModel.subType;
            var seriesId = seriesModel.id;
            var newSeriesOpt = seriesOptGenreator[type](seriesType, seriesId, seriesModel, model);
            if (newSeriesOpt) {
                // PENDING If merge original option?
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaults"](newSeriesOpt, seriesModel.option);
                newOption.series.push(newSeriesOpt);
            }
            // Modify boundaryGap
            var coordSys = seriesModel.coordinateSystem;
            if (coordSys && coordSys.type === 'cartesian2d' && (type === 'line' || type === 'bar')) {
                var categoryAxis = coordSys.getAxesByScale('ordinal')[0];
                if (categoryAxis) {
                    var axisDim = categoryAxis.dim;
                    var axisType = axisDim + 'Axis';
                    var axisModel = seriesModel.getReferringComponents(axisType, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SINGLE_REFERRING"]).models[0];
                    var axisIndex = axisModel.componentIndex;
                    newOption[axisType] = newOption[axisType] || [];
                    for(var i = 0; i <= axisIndex; i++){
                        newOption[axisType][axisIndex] = newOption[axisType][axisIndex] || {};
                    }
                    newOption[axisType][axisIndex].boundaryGap = type === 'bar';
                }
            }
        };
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"](radioTypes, function(radio) {
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["indexOf"](radio, type) >= 0) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"](radio, function(item) {
                    model.setIconStatus(item, 'normal');
                });
            }
        });
        model.setIconStatus(type, 'emphasis');
        ecModel.eachComponent({
            mainType: 'series',
            query: seriesIndex == null ? null : {
                seriesIndex: seriesIndex
            }
        }, generateNewSeriesTypes);
        var newTitle;
        var currentType = type;
        // Change title of stack
        if (type === 'stack') {
            // use titles in model instead of ecModel
            // as stack and tiled appears in pair, just flip them
            // no need of checking stack state
            newTitle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["merge"]({
                stack: model.option.title.tiled,
                tiled: model.option.title.stack
            }, model.option.title);
            if (model.get([
                'iconStatus',
                type
            ]) !== 'emphasis') {
                currentType = 'tiled';
            }
        }
        api.dispatchAction({
            type: 'changeMagicType',
            currentType: currentType,
            newOption: newOption,
            newTitle: newTitle,
            featureName: 'magicType'
        });
    };
    return MagicType;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$featureManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToolboxFeature"]);
var seriesOptGenreator = {
    'line': function(seriesType, seriesId, seriesModel, model) {
        if (seriesType === 'bar') {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["merge"]({
                id: seriesId,
                type: 'line',
                // Preserve data related option
                data: seriesModel.get('data'),
                stack: seriesModel.get('stack'),
                markPoint: seriesModel.get('markPoint'),
                markLine: seriesModel.get('markLine')
            }, model.get([
                'option',
                'line'
            ]) || {}, true);
        }
    },
    'bar': function(seriesType, seriesId, seriesModel, model) {
        if (seriesType === 'line') {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["merge"]({
                id: seriesId,
                type: 'bar',
                // Preserve data related option
                data: seriesModel.get('data'),
                stack: seriesModel.get('stack'),
                markPoint: seriesModel.get('markPoint'),
                markLine: seriesModel.get('markLine')
            }, model.get([
                'option',
                'bar'
            ]) || {}, true);
        }
    },
    'stack': function(seriesType, seriesId, seriesModel, model) {
        var isStack = seriesModel.get('stack') === INNER_STACK_KEYWORD;
        if (seriesType === 'line' || seriesType === 'bar') {
            model.setIconStatus('stack', isStack ? 'normal' : 'emphasis');
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["merge"]({
                id: seriesId,
                stack: isStack ? '' : INNER_STACK_KEYWORD
            }, model.get([
                'option',
                'stack'
            ]) || {}, true);
        }
    }
};
// TODO: SELF REGISTERED.
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["registerAction"]({
    type: 'changeMagicType',
    event: 'magicTypeChanged',
    update: 'prepareAndUpdate'
}, function(payload, ecModel) {
    ecModel.mergeOption(payload.newOption);
});
const __TURBOPACK__default__export__ = MagicType;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/toolbox/feature/DataView.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
/* global document */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/core/echarts.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$featureManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/toolbox/featureManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/event.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/log.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/tokens.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
/* global document */ var BLOCK_SPLITER = new Array(60).join('-');
var ITEM_SPLITER = '\t';
/**
 * Group series into two types
 *  1. on category axis, like line, bar
 *  2. others, like scatter, pie
 */ function groupSeries(ecModel) {
    var seriesGroupByCategoryAxis = {};
    var otherSeries = [];
    var meta = [];
    ecModel.eachRawSeries(function(seriesModel) {
        var coordSys = seriesModel.coordinateSystem;
        if (coordSys && (coordSys.type === 'cartesian2d' || coordSys.type === 'polar')) {
            // TODO: TYPE Consider polar? Include polar may increase unecessary bundle size.
            var baseAxis = coordSys.getBaseAxis();
            if (baseAxis.type === 'category') {
                var key = baseAxis.dim + '_' + baseAxis.index;
                if (!seriesGroupByCategoryAxis[key]) {
                    seriesGroupByCategoryAxis[key] = {
                        categoryAxis: baseAxis,
                        valueAxis: coordSys.getOtherAxis(baseAxis),
                        series: []
                    };
                    meta.push({
                        axisDim: baseAxis.dim,
                        axisIndex: baseAxis.index
                    });
                }
                seriesGroupByCategoryAxis[key].series.push(seriesModel);
            } else {
                otherSeries.push(seriesModel);
            }
        } else {
            otherSeries.push(seriesModel);
        }
    });
    return {
        seriesGroupByCategoryAxis: seriesGroupByCategoryAxis,
        other: otherSeries,
        meta: meta
    };
}
/**
 * Assemble content of series on cateogory axis
 * @inner
 */ function assembleSeriesWithCategoryAxis(groups) {
    var tables = [];
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"](groups, function(group, key) {
        var categoryAxis = group.categoryAxis;
        var valueAxis = group.valueAxis;
        var valueAxisDim = valueAxis.dim;
        var headers = [
            ' '
        ].concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"](group.series, function(series) {
            return series.name;
        }));
        // @ts-ignore TODO Polar
        var columns = [
            categoryAxis.model.getCategories()
        ];
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"](group.series, function(series) {
            var rawData = series.getRawData();
            columns.push(series.getRawData().mapArray(rawData.mapDimension(valueAxisDim), function(val) {
                return val;
            }));
        });
        // Assemble table content
        var lines = [
            headers.join(ITEM_SPLITER)
        ];
        for(var i = 0; i < columns[0].length; i++){
            var items = [];
            for(var j = 0; j < columns.length; j++){
                items.push(columns[j][i]);
            }
            lines.push(items.join(ITEM_SPLITER));
        }
        tables.push(lines.join('\n'));
    });
    return tables.join('\n\n' + BLOCK_SPLITER + '\n\n');
}
/**
 * Assemble content of other series
 */ function assembleOtherSeries(series) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"](series, function(series) {
        var data = series.getRawData();
        var lines = [
            series.name
        ];
        var vals = [];
        data.each(data.dimensions, function() {
            var argLen = arguments.length;
            var dataIndex = arguments[argLen - 1];
            var name = data.getName(dataIndex);
            for(var i = 0; i < argLen - 1; i++){
                vals[i] = arguments[i];
            }
            lines.push((name ? name + ITEM_SPLITER : '') + vals.join(ITEM_SPLITER));
        });
        return lines.join('\n');
    }).join('\n\n' + BLOCK_SPLITER + '\n\n');
}
function getContentFromModel(ecModel) {
    var result = groupSeries(ecModel);
    return {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filter"]([
            assembleSeriesWithCategoryAxis(result.seriesGroupByCategoryAxis),
            assembleOtherSeries(result.other)
        ], function(str) {
            return !!str.replace(/[\n\t\s]/g, '');
        }).join('\n\n' + BLOCK_SPLITER + '\n\n'),
        meta: result.meta
    };
}
function trim(str) {
    return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
}
/**
 * If a block is tsv format
 */ function isTSVFormat(block) {
    // Simple method to find out if a block is tsv format
    var firstLine = block.slice(0, block.indexOf('\n'));
    if (firstLine.indexOf(ITEM_SPLITER) >= 0) {
        return true;
    }
}
var itemSplitRegex = new RegExp('[' + ITEM_SPLITER + ']+', 'g');
/**
 * @param {string} tsv
 * @return {Object}
 */ function parseTSVContents(tsv) {
    var tsvLines = tsv.split(/\n+/g);
    var headers = trim(tsvLines.shift()).split(itemSplitRegex);
    var categories = [];
    var series = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"](headers, function(header) {
        return {
            name: header,
            data: []
        };
    });
    for(var i = 0; i < tsvLines.length; i++){
        var items = trim(tsvLines[i]).split(itemSplitRegex);
        categories.push(items.shift());
        for(var j = 0; j < items.length; j++){
            series[j] && (series[j].data[i] = items[j]);
        }
    }
    return {
        series: series,
        categories: categories
    };
}
function parseListContents(str) {
    var lines = str.split(/\n+/g);
    var seriesName = trim(lines.shift());
    var data = [];
    for(var i = 0; i < lines.length; i++){
        // if line is empty, ignore it.
        // there is a case that a user forgot to delete `\n`.
        var line = trim(lines[i]);
        if (!line) {
            continue;
        }
        var items = line.split(itemSplitRegex);
        var name_1 = '';
        var value = void 0;
        var hasName = false;
        if (isNaN(items[0])) {
            // First item is name
            hasName = true;
            name_1 = items[0];
            items = items.slice(1);
            data[i] = {
                name: name_1,
                value: []
            };
            value = data[i].value;
        } else {
            value = data[i] = [];
        }
        for(var j = 0; j < items.length; j++){
            value.push(+items[j]);
        }
        if (value.length === 1) {
            hasName ? data[i].value = value[0] : data[i] = value[0];
        }
    }
    return {
        name: seriesName,
        data: data
    };
}
function parseContents(str, blockMetaList) {
    var blocks = str.split(new RegExp('\n*' + BLOCK_SPLITER + '\n*', 'g'));
    var newOption = {
        series: []
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"](blocks, function(block, idx) {
        if (isTSVFormat(block)) {
            var result = parseTSVContents(block);
            var blockMeta = blockMetaList[idx];
            var axisKey = blockMeta.axisDim + 'Axis';
            if (blockMeta) {
                newOption[axisKey] = newOption[axisKey] || [];
                newOption[axisKey][blockMeta.axisIndex] = {
                    data: result.categories
                };
                newOption.series = newOption.series.concat(result.series);
            }
        } else {
            var result = parseListContents(block);
            newOption.series.push(result);
        }
    });
    return newOption;
}
var DataView = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(DataView, _super);
    function DataView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DataView.prototype.onclick = function(ecModel, api) {
        // FIXME: better way?
        setTimeout(function() {
            api.dispatchAction({
                type: 'hideTip'
            });
        });
        var container = api.getDom();
        var model = this.model;
        if (this._dom) {
            container.removeChild(this._dom);
        }
        var root = document.createElement('div');
        // use padding to avoid 5px whitespace
        root.style.cssText = 'position:absolute;top:0;bottom:0;left:0;right:0;padding:5px';
        root.style.backgroundColor = model.get('backgroundColor') || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].color.neutral00;
        // Create elements
        var header = document.createElement('h4');
        var lang = model.get('lang') || [];
        header.innerHTML = lang[0] || model.get('title');
        header.style.cssText = 'margin:10px 20px';
        header.style.color = model.get('textColor');
        var viewMain = document.createElement('div');
        var textarea = document.createElement('textarea');
        viewMain.style.cssText = 'overflow:auto';
        var optionToContent = model.get('optionToContent');
        var contentToOption = model.get('contentToOption');
        var result = getContentFromModel(ecModel);
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"](optionToContent)) {
            var htmlOrDom = optionToContent(api.getOption());
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"](htmlOrDom)) {
                viewMain.innerHTML = htmlOrDom;
            } else if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDom"](htmlOrDom)) {
                viewMain.appendChild(htmlOrDom);
            }
        } else {
            // Use default textarea
            textarea.readOnly = model.get('readOnly');
            var style = textarea.style;
            // eslint-disable-next-line max-len
            style.cssText = 'display:block;width:100%;height:100%;font-family:monospace;font-size:14px;line-height:1.6rem;resize:none;box-sizing:border-box;outline:none';
            style.color = model.get('textColor');
            style.borderColor = model.get('textareaBorderColor');
            style.backgroundColor = model.get('textareaColor');
            textarea.value = result.value;
            viewMain.appendChild(textarea);
        }
        var blockMetaList = result.meta;
        var buttonContainer = document.createElement('div');
        buttonContainer.style.cssText = 'position:absolute;bottom:5px;left:0;right:0';
        // eslint-disable-next-line max-len
        var buttonStyle = 'float:right;margin-right:20px;border:none;cursor:pointer;padding:2px 5px;font-size:12px;border-radius:3px';
        var closeButton = document.createElement('div');
        var refreshButton = document.createElement('div');
        buttonStyle += ';background-color:' + model.get('buttonColor');
        buttonStyle += ';color:' + model.get('buttonTextColor');
        var self = this;
        function close() {
            container.removeChild(root);
            self._dom = null;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["addEventListener"])(closeButton, 'click', close);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["addEventListener"])(refreshButton, 'click', function() {
            if (contentToOption == null && optionToContent != null || contentToOption != null && optionToContent == null) {
                if ("TURBOPACK compile-time truthy", 1) {
                    // eslint-disable-next-line
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["warn"])('It seems you have just provided one of `contentToOption` and `optionToContent` functions but missed the other one. Data change is ignored.');
                }
                close();
                return;
            }
            var newOption;
            try {
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"](contentToOption)) {
                    newOption = contentToOption(viewMain, api.getOption());
                } else {
                    newOption = parseContents(textarea.value, blockMetaList);
                }
            } catch (e) {
                close();
                throw new Error('Data view format error ' + e);
            }
            if (newOption) {
                api.dispatchAction({
                    type: 'changeDataView',
                    newOption: newOption
                });
            }
            close();
        });
        closeButton.innerHTML = lang[1];
        refreshButton.innerHTML = lang[2];
        refreshButton.style.cssText = closeButton.style.cssText = buttonStyle;
        !model.get('readOnly') && buttonContainer.appendChild(refreshButton);
        buttonContainer.appendChild(closeButton);
        root.appendChild(header);
        root.appendChild(viewMain);
        root.appendChild(buttonContainer);
        viewMain.style.height = container.clientHeight - 80 + 'px';
        container.appendChild(root);
        this._dom = root;
    };
    DataView.prototype.remove = function(ecModel, api) {
        this._dom && api.getDom().removeChild(this._dom);
    };
    DataView.prototype.dispose = function(ecModel, api) {
        this.remove(ecModel, api);
    };
    DataView.getDefaultOption = function(ecModel) {
        var defaultOption = {
            show: true,
            readOnly: false,
            optionToContent: null,
            contentToOption: null,
            // eslint-disable-next-line
            icon: 'M17.5,17.3H33 M17.5,17.3H33 M45.4,29.5h-28 M11.5,2v56H51V14.8L38.4,2H11.5z M38.4,2.2v12.7H51 M45.4,41.7h-28',
            title: ecModel.getLocaleModel().get([
                'toolbox',
                'dataView',
                'title'
            ]),
            lang: ecModel.getLocaleModel().get([
                'toolbox',
                'dataView',
                'lang'
            ]),
            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].color.background,
            textColor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].color.primary,
            textareaColor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].color.background,
            textareaBorderColor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].color.border,
            buttonColor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].color.accent50,
            buttonTextColor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].color.neutral00
        };
        return defaultOption;
    };
    return DataView;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$featureManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToolboxFeature"]);
/**
 * @inner
 */ function tryMergeDataOption(newData, originalData) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"](newData, function(newVal, idx) {
        var original = originalData && originalData[idx];
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"](original) && !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"](original)) {
            var newValIsObject = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"](newVal) && !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"](newVal);
            if (!newValIsObject) {
                newVal = {
                    value: newVal
                };
            }
            // original data has name but new data has no name
            var shouldDeleteName = original.name != null && newVal.name == null;
            // Original data has option
            newVal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaults"](newVal, original);
            shouldDeleteName && delete newVal.name;
            return newVal;
        } else {
            return newVal;
        }
    });
}
// TODO: SELF REGISTERED.
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["registerAction"]({
    type: 'changeDataView',
    event: 'dataViewChanged',
    update: 'prepareAndUpdate'
}, function(payload, ecModel) {
    var newSeriesOptList = [];
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"](payload.newOption.series, function(seriesOpt) {
        var seriesModel = ecModel.getSeriesByName(seriesOpt.name)[0];
        if (!seriesModel) {
            // New created series
            // Geuss the series type
            newSeriesOptList.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extend"]({
                // Default is scatter
                type: 'scatter'
            }, seriesOpt));
        } else {
            var originalData = seriesModel.get('data');
            newSeriesOptList.push({
                name: seriesOpt.name,
                data: tryMergeDataOption(seriesOpt.data, originalData)
            });
        }
    });
    ecModel.mergeOption(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaults"]({
        series: newSeriesOptList
    }, payload.newOption));
});
const __TURBOPACK__default__export__ = DataView;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/toolbox/feature/Restore.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/core/echarts.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataZoom/history.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$featureManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/toolbox/featureManager.js [app-client] (ecmascript)");
;
;
;
;
var RestoreOption = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(RestoreOption, _super);
    function RestoreOption() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RestoreOption.prototype.onclick = function(ecModel, api) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clear"](ecModel);
        api.dispatchAction({
            type: 'restore',
            from: this.uid
        });
    };
    RestoreOption.getDefaultOption = function(ecModel) {
        var defaultOption = {
            show: true,
            // eslint-disable-next-line
            icon: 'M3.8,33.4 M47,18.9h9.8V8.7 M56.3,20.1 C52.1,9,40.5,0.6,26.8,2.1C12.6,3.7,1.6,16.2,2.1,30.6 M13,41.1H3.1v10.2 M3.7,39.9c4.2,11.1,15.8,19.5,29.5,18 c14.2-1.6,25.2-14.1,24.7-28.5',
            title: ecModel.getLocaleModel().get([
                'toolbox',
                'restore',
                'title'
            ])
        };
        return defaultOption;
    };
    return RestoreOption;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$featureManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToolboxFeature"]);
// TODO: SELF REGISTERED.
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["registerAction"]({
    type: 'restore',
    event: 'restore',
    update: 'prepareAndUpdate'
}, function(payload, ecModel) {
    ecModel.resetOption('recreate');
});
const __TURBOPACK__default__export__ = RestoreOption;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/toolbox/feature/DataZoom.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
// TODO depends on DataZoom and Brush
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$BrushController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/helper/BrushController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$BrushTargetManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/helper/BrushTargetManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataZoom/history.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$sliderMove$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/helper/sliderMove.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$featureManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/toolbox/featureManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$internalComponentCreator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/internalComponentCreator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/tokens.js [app-client] (ecmascript)");
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
var each = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"];
var DATA_ZOOM_ID_BASE = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeInternalComponentId"])('toolbox-dataZoom_');
var ICON_TYPES = [
    'zoom',
    'back'
];
var DataZoomFeature = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(DataZoomFeature, _super);
    function DataZoomFeature() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DataZoomFeature.prototype.render = function(featureModel, ecModel, api, payload) {
        if (!this._brushController) {
            this._brushController = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$BrushController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](api.getZr());
            this._brushController.on('brush', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bind"](this._onBrush, this)).mount();
        }
        updateZoomBtnStatus(featureModel, ecModel, this, payload, api);
        updateBackBtnStatus(featureModel, ecModel);
    };
    DataZoomFeature.prototype.onclick = function(ecModel, api, type) {
        handlers[type].call(this);
    };
    DataZoomFeature.prototype.remove = function(ecModel, api) {
        this._brushController && this._brushController.unmount();
    };
    DataZoomFeature.prototype.dispose = function(ecModel, api) {
        this._brushController && this._brushController.dispose();
    };
    DataZoomFeature.prototype._onBrush = function(eventParam) {
        var areas = eventParam.areas;
        if (!eventParam.isEnd || !areas.length) {
            return;
        }
        var snapshot = {};
        var ecModel = this.ecModel;
        this._brushController.updateCovers([]); // remove cover
        var brushTargetManager = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$BrushTargetManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](makeAxisFinder(this.model), ecModel, {
            include: [
                'grid'
            ]
        });
        brushTargetManager.matchOutputRanges(areas, ecModel, function(area, coordRange, coordSys) {
            if (coordSys.type !== 'cartesian2d') {
                return;
            }
            var brushType = area.brushType;
            if (brushType === 'rect') {
                setBatch('x', coordSys, coordRange[0]);
                setBatch('y', coordSys, coordRange[1]);
            } else {
                setBatch({
                    lineX: 'x',
                    lineY: 'y'
                }[brushType], coordSys, coordRange);
            }
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["push"](ecModel, snapshot);
        this._dispatchZoomAction(snapshot);
        function setBatch(dimName, coordSys, minMax) {
            var axis = coordSys.getAxis(dimName);
            var axisModel = axis.model;
            var dataZoomModel = findDataZoom(dimName, axisModel, ecModel);
            // Restrict range.
            var minMaxSpan = dataZoomModel.findRepresentativeAxisProxy(axisModel).getMinMaxSpan();
            if (minMaxSpan.minValueSpan != null || minMaxSpan.maxValueSpan != null) {
                minMax = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$sliderMove$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(0, minMax.slice(), axis.scale.getExtent(), 0, minMaxSpan.minValueSpan, minMaxSpan.maxValueSpan);
            }
            dataZoomModel && (snapshot[dataZoomModel.id] = {
                dataZoomId: dataZoomModel.id,
                startValue: minMax[0],
                endValue: minMax[1]
            });
        }
        function findDataZoom(dimName, axisModel, ecModel) {
            var found;
            ecModel.eachComponent({
                mainType: 'dataZoom',
                subType: 'select'
            }, function(dzModel) {
                var has = dzModel.getAxisModel(dimName, axisModel.componentIndex);
                has && (found = dzModel);
            });
            return found;
        }
    };
    ;
    DataZoomFeature.prototype._dispatchZoomAction = function(snapshot) {
        var batch = [];
        // Convert from hash map to array.
        each(snapshot, function(batchItem, dataZoomId) {
            batch.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clone"](batchItem));
        });
        batch.length && this.api.dispatchAction({
            type: 'dataZoom',
            from: this.uid,
            batch: batch
        });
    };
    DataZoomFeature.getDefaultOption = function(ecModel) {
        var defaultOption = {
            show: true,
            filterMode: 'filter',
            // Icon group
            icon: {
                zoom: 'M0,13.5h26.9 M13.5,26.9V0 M32.1,13.5H58V58H13.5 V32.1',
                back: 'M22,1.4L9.9,13.5l12.3,12.3 M10.3,13.5H54.9v44.6 H10.3v-26'
            },
            // `zoom`, `back`
            title: ecModel.getLocaleModel().get([
                'toolbox',
                'dataZoom',
                'title'
            ]),
            brushStyle: {
                borderWidth: 0,
                color: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].color.backgroundTint
            }
        };
        return defaultOption;
    };
    return DataZoomFeature;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$featureManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToolboxFeature"]);
var handlers = {
    zoom: function() {
        var nextActive = !this._isZoomActive;
        this.api.dispatchAction({
            type: 'takeGlobalCursor',
            key: 'dataZoomSelect',
            dataZoomSelectActive: nextActive
        });
    },
    back: function() {
        this._dispatchZoomAction(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pop"](this.ecModel));
    }
};
function makeAxisFinder(dzFeatureModel) {
    var setting = {
        xAxisIndex: dzFeatureModel.get('xAxisIndex', true),
        yAxisIndex: dzFeatureModel.get('yAxisIndex', true),
        xAxisId: dzFeatureModel.get('xAxisId', true),
        yAxisId: dzFeatureModel.get('yAxisId', true)
    };
    // If both `xAxisIndex` `xAxisId` not set, it means 'all'.
    // If both `yAxisIndex` `yAxisId` not set, it means 'all'.
    // Some old cases set like this below to close yAxis control but leave xAxis control:
    // `{ feature: { dataZoom: { yAxisIndex: false } }`.
    if (setting.xAxisIndex == null && setting.xAxisId == null) {
        setting.xAxisIndex = 'all';
    }
    if (setting.yAxisIndex == null && setting.yAxisId == null) {
        setting.yAxisIndex = 'all';
    }
    return setting;
}
function updateBackBtnStatus(featureModel, ecModel) {
    featureModel.setIconStatus('back', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["count"](ecModel) > 1 ? 'emphasis' : 'normal');
}
function updateZoomBtnStatus(featureModel, ecModel, view, payload, api) {
    var zoomActive = view._isZoomActive;
    if (payload && payload.type === 'takeGlobalCursor') {
        zoomActive = payload.key === 'dataZoomSelect' ? payload.dataZoomSelectActive : false;
    }
    view._isZoomActive = zoomActive;
    featureModel.setIconStatus('zoom', zoomActive ? 'emphasis' : 'normal');
    var brushTargetManager = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$BrushTargetManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](makeAxisFinder(featureModel), ecModel, {
        include: [
            'grid'
        ]
    });
    var panels = brushTargetManager.makePanelOpts(api, function(targetInfo) {
        return targetInfo.xAxisDeclared && !targetInfo.yAxisDeclared ? 'lineX' : !targetInfo.xAxisDeclared && targetInfo.yAxisDeclared ? 'lineY' : 'rect';
    });
    view._brushController.setPanels(panels).enableBrush(zoomActive && panels.length ? {
        brushType: 'auto',
        brushStyle: featureModel.getModel('brushStyle').getItemStyle()
    } : false);
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$internalComponentCreator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerInternalOptionCreator"])('dataZoom', function(ecModel) {
    var toolboxModel = ecModel.getComponent('toolbox', 0);
    var featureDataZoomPath = [
        'feature',
        'dataZoom'
    ];
    if (!toolboxModel || toolboxModel.get(featureDataZoomPath) == null) {
        return;
    }
    var dzFeatureModel = toolboxModel.getModel(featureDataZoomPath);
    var dzOptions = [];
    var finder = makeAxisFinder(dzFeatureModel);
    var finderResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseFinder"])(ecModel, finder);
    each(finderResult.xAxisModels, function(axisModel) {
        return buildInternalOptions(axisModel, 'xAxis', 'xAxisIndex');
    });
    each(finderResult.yAxisModels, function(axisModel) {
        return buildInternalOptions(axisModel, 'yAxis', 'yAxisIndex');
    });
    function buildInternalOptions(axisModel, axisMainType, axisIndexPropName) {
        var axisIndex = axisModel.componentIndex;
        var newOpt = {
            type: 'select',
            $fromToolbox: true,
            // Default to be filter
            filterMode: dzFeatureModel.get('filterMode', true) || 'filter',
            // Id for merge mapping.
            id: DATA_ZOOM_ID_BASE + axisMainType + axisIndex
        };
        newOpt[axisIndexPropName] = axisIndex;
        dzOptions.push(newOpt);
    }
    return dzOptions;
});
const __TURBOPACK__default__export__ = DataZoomFeature;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/toolbox/install.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/extension.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$installDataZoomSelect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataZoom/installDataZoomSelect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$ToolboxModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/toolbox/ToolboxModel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$ToolboxView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/toolbox/ToolboxView.js [app-client] (ecmascript)");
// TODOD: REGISTER IN INSTALL
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$featureManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/toolbox/featureManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$feature$2f$SaveAsImage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/toolbox/feature/SaveAsImage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$feature$2f$MagicType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/toolbox/feature/MagicType.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$feature$2f$DataView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/toolbox/feature/DataView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$feature$2f$Restore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/toolbox/feature/Restore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$feature$2f$DataZoom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/toolbox/feature/DataZoom.js [app-client] (ecmascript)");
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
function install(registers) {
    registers.registerComponentModel(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$ToolboxModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    registers.registerComponentView(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$ToolboxView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$featureManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerFeature"])('saveAsImage', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$feature$2f$SaveAsImage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$featureManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerFeature"])('magicType', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$feature$2f$MagicType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$featureManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerFeature"])('dataView', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$feature$2f$DataView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$featureManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerFeature"])('dataZoom', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$feature$2f$DataZoom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$featureManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerFeature"])('restore', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$feature$2f$Restore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$installDataZoomSelect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["install"]);
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/toolbox/install.js [app-client] (ecmascript) <export install as ToolboxComponent>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ToolboxComponent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["install"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/toolbox/install.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/toolbox/feature/Brush.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$featureManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/toolbox/featureManager.js [app-client] (ecmascript)");
;
;
;
var ICON_TYPES = [
    'rect',
    'polygon',
    'lineX',
    'lineY',
    'keep',
    'clear'
];
var BrushFeature = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(BrushFeature, _super);
    function BrushFeature() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BrushFeature.prototype.render = function(featureModel, ecModel, api) {
        var brushType;
        var brushMode;
        var isBrushed;
        ecModel.eachComponent({
            mainType: 'brush'
        }, function(brushModel) {
            brushType = brushModel.brushType;
            brushMode = brushModel.brushOption.brushMode || 'single';
            isBrushed = isBrushed || !!brushModel.areas.length;
        });
        this._brushType = brushType;
        this._brushMode = brushMode;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"](featureModel.get('type', true), function(type) {
            featureModel.setIconStatus(type, (type === 'keep' ? brushMode === 'multiple' : type === 'clear' ? isBrushed : type === brushType) ? 'emphasis' : 'normal');
        });
    };
    BrushFeature.prototype.updateView = function(featureModel, ecModel, api) {
        this.render(featureModel, ecModel, api);
    };
    BrushFeature.prototype.getIcons = function() {
        var model = this.model;
        var availableIcons = model.get('icon', true);
        var icons = {};
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"](model.get('type', true), function(type) {
            if (availableIcons[type]) {
                icons[type] = availableIcons[type];
            }
        });
        return icons;
    };
    ;
    BrushFeature.prototype.onclick = function(ecModel, api, type) {
        var brushType = this._brushType;
        var brushMode = this._brushMode;
        if (type === 'clear') {
            // Trigger parallel action firstly
            api.dispatchAction({
                type: 'axisAreaSelect',
                intervals: []
            });
            api.dispatchAction({
                type: 'brush',
                command: 'clear',
                // Clear all areas of all brush components.
                areas: []
            });
        } else {
            api.dispatchAction({
                type: 'takeGlobalCursor',
                key: 'brush',
                brushOption: {
                    brushType: type === 'keep' ? brushType : brushType === type ? false : type,
                    brushMode: type === 'keep' ? brushMode === 'multiple' ? 'single' : 'multiple' : brushMode
                }
            });
        }
    };
    ;
    BrushFeature.getDefaultOption = function(ecModel) {
        var defaultOption = {
            show: true,
            type: ICON_TYPES.slice(),
            icon: {
                /* eslint-disable */ rect: 'M7.3,34.7 M0.4,10V-0.2h9.8 M89.6,10V-0.2h-9.8 M0.4,60v10.2h9.8 M89.6,60v10.2h-9.8 M12.3,22.4V10.5h13.1 M33.6,10.5h7.8 M49.1,10.5h7.8 M77.5,22.4V10.5h-13 M12.3,31.1v8.2 M77.7,31.1v8.2 M12.3,47.6v11.9h13.1 M33.6,59.5h7.6 M49.1,59.5 h7.7 M77.5,47.6v11.9h-13',
                polygon: 'M55.2,34.9c1.7,0,3.1,1.4,3.1,3.1s-1.4,3.1-3.1,3.1 s-3.1-1.4-3.1-3.1S53.5,34.9,55.2,34.9z M50.4,51c1.7,0,3.1,1.4,3.1,3.1c0,1.7-1.4,3.1-3.1,3.1c-1.7,0-3.1-1.4-3.1-3.1 C47.3,52.4,48.7,51,50.4,51z M55.6,37.1l1.5-7.8 M60.1,13.5l1.6-8.7l-7.8,4 M59,19l-1,5.3 M24,16.1l6.4,4.9l6.4-3.3 M48.5,11.6 l-5.9,3.1 M19.1,12.8L9.7,5.1l1.1,7.7 M13.4,29.8l1,7.3l6.6,1.6 M11.6,18.4l1,6.1 M32.8,41.9 M26.6,40.4 M27.3,40.2l6.1,1.6 M49.9,52.1l-5.6-7.6l-4.9-1.2',
                lineX: 'M15.2,30 M19.7,15.6V1.9H29 M34.8,1.9H40.4 M55.3,15.6V1.9H45.9 M19.7,44.4V58.1H29 M34.8,58.1H40.4 M55.3,44.4 V58.1H45.9 M12.5,20.3l-9.4,9.6l9.6,9.8 M3.1,29.9h16.5 M62.5,20.3l9.4,9.6L62.3,39.7 M71.9,29.9H55.4',
                lineY: 'M38.8,7.7 M52.7,12h13.2v9 M65.9,26.6V32 M52.7,46.3h13.2v-9 M24.9,12H11.8v9 M11.8,26.6V32 M24.9,46.3H11.8v-9 M48.2,5.1l-9.3-9l-9.4,9.2 M38.9-3.9V12 M48.2,53.3l-9.3,9l-9.4-9.2 M38.9,62.3V46.4',
                keep: 'M4,10.5V1h10.3 M20.7,1h6.1 M33,1h6.1 M55.4,10.5V1H45.2 M4,17.3v6.6 M55.6,17.3v6.6 M4,30.5V40h10.3 M20.7,40 h6.1 M33,40h6.1 M55.4,30.5V40H45.2 M21,18.9h62.9v48.6H21V18.9z',
                clear: 'M22,14.7l30.9,31 M52.9,14.7L22,45.7 M4.7,16.8V4.2h13.1 M26,4.2h7.8 M41.6,4.2h7.8 M70.3,16.8V4.2H57.2 M4.7,25.9v8.6 M70.3,25.9v8.6 M4.7,43.2v12.6h13.1 M26,55.8h7.8 M41.6,55.8h7.8 M70.3,43.2v12.6H57.2' // jshint ignore:line
            },
            // `rect`, `polygon`, `lineX`, `lineY`, `keep`, `clear`
            title: ecModel.getLocaleModel().get([
                'toolbox',
                'brush',
                'title'
            ])
        };
        return defaultOption;
    };
    return BrushFeature;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$featureManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToolboxFeature"]);
const __TURBOPACK__default__export__ = BrushFeature;
}),
]);

//# sourceMappingURL=6e80b_echarts_lib_component_toolbox_29be02eb._.js.map