module.exports = [
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/grid/installSimple.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/view/Component.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$cartesian$2f$GridModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/cartesian/GridModel.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Rect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Rect$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Rect.js [app-ssr] (ecmascript) <export default as Rect>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$cartesian$2f$AxisModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/cartesian/AxisModel.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisModelCreator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/axisModelCreator.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$cartesian$2f$Grid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/cartesian/Grid.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$CartesianAxisView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axis/CartesianAxisView.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
// Grid view
var GridView = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(GridView, _super);
    function GridView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'grid';
        return _this;
    }
    GridView.prototype.render = function(gridModel, ecModel) {
        this.group.removeAll();
        if (gridModel.get('show')) {
            this.group.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Rect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Rect$3e$__["Rect"]({
                shape: gridModel.coordinateSystem.getRect(),
                style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaults"])({
                    fill: gridModel.get('backgroundColor')
                }, gridModel.getItemStyle()),
                silent: true,
                z2: -1
            }));
        }
    };
    GridView.type = 'grid';
    return GridView;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
var extraOption = {
    // gridIndex: 0,
    // gridId: '',
    offset: 0
};
function install(registers) {
    registers.registerComponentView(GridView);
    registers.registerComponentModel(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$cartesian$2f$GridModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    registers.registerCoordinateSystem('cartesian2d', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$cartesian$2f$Grid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisModelCreator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(registers, 'x', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$cartesian$2f$AxisModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CartesianAxisModel"], extraOption);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisModelCreator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(registers, 'y', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$cartesian$2f$AxisModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CartesianAxisModel"], extraOption);
    registers.registerComponentView(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$CartesianAxisView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CartesianXAxisView"]);
    registers.registerComponentView(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$CartesianAxisView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CartesianYAxisView"]);
    registers.registerPreprocessor(function(option) {
        // Only create grid when need
        if (option.xAxis && option.yAxis && !option.grid) {
            option.grid = {};
        }
    });
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/grid/install.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$grid$2f$installSimple$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/grid/installSimple.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$install$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axisPointer/install.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/extension.js [app-ssr] (ecmascript)");
;
;
;
function install(registers) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["use"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$grid$2f$installSimple$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["install"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["use"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$install$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["install"]);
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/grid/install.js [app-ssr] (ecmascript) <export install as GridComponent>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GridComponent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$grid$2f$install$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["install"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$grid$2f$install$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/grid/install.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/title/install.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Text$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Text.js [app-ssr] (ecmascript) <export default as Text>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Rect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Rect$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Rect.js [app-ssr] (ecmascript) <export default as Rect>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/innerStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/label/labelStyle.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/layout.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/Component.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/view/Component.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/format.js [app-ssr] (ecmascript) <locals>");
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
var TitleModel = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(TitleModel, _super);
    function TitleModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = TitleModel.type;
        _this.layoutMode = {
            type: 'box',
            ignoreSize: true
        };
        return _this;
    }
    TitleModel.type = 'title';
    TitleModel.defaultOption = {
        // zlevel: 0,
        z: 6,
        show: true,
        text: '',
        target: 'blank',
        subtext: '',
        subtarget: 'blank',
        left: 'center',
        top: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].size.m,
        backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].color.transparent,
        borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].color.primary,
        borderWidth: 0,
        padding: 5,
        itemGap: 10,
        textStyle: {
            fontSize: 18,
            fontWeight: 'bold',
            color: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].color.primary
        },
        subtextStyle: {
            fontSize: 12,
            color: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].color.quaternary
        }
    };
    return TitleModel;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
// View
var TitleView = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(TitleView, _super);
    function TitleView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = TitleView.type;
        return _this;
    }
    TitleView.prototype.render = function(titleModel, ecModel, api) {
        this.group.removeAll();
        if (!titleModel.get('show')) {
            return;
        }
        var group = this.group;
        var textStyleModel = titleModel.getModel('textStyle');
        var subtextStyleModel = titleModel.getModel('subtextStyle');
        var textAlign = titleModel.get('textAlign');
        var textVerticalAlign = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["retrieve2"](titleModel.get('textBaseline'), titleModel.get('textVerticalAlign'));
        var textEl = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Text$3e$__["Text"]({
            style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createTextStyle"])(textStyleModel, {
                text: titleModel.get('text'),
                fill: textStyleModel.getTextColor()
            }, {
                disableBox: true
            }),
            z2: 10
        });
        var textRect = textEl.getBoundingRect();
        var subText = titleModel.get('subtext');
        var subTextEl = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Text$3e$__["Text"]({
            style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createTextStyle"])(subtextStyleModel, {
                text: subText,
                fill: subtextStyleModel.getTextColor(),
                y: textRect.height + titleModel.get('itemGap'),
                verticalAlign: 'top'
            }, {
                disableBox: true
            }),
            z2: 10
        });
        var link = titleModel.get('link');
        var sublink = titleModel.get('sublink');
        var triggerEvent = titleModel.get('triggerEvent', true);
        textEl.silent = !link && !triggerEvent;
        subTextEl.silent = !sublink && !triggerEvent;
        if (link) {
            textEl.on('click', function() {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["windowOpen"])(link, '_' + titleModel.get('target'));
            });
        }
        if (sublink) {
            subTextEl.on('click', function() {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["windowOpen"])(sublink, '_' + titleModel.get('subtarget'));
            });
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getECData"])(textEl).eventData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getECData"])(subTextEl).eventData = triggerEvent ? {
            componentType: 'title',
            componentIndex: titleModel.componentIndex
        } : null;
        group.add(textEl);
        subText && group.add(subTextEl);
        // If no subText, but add subTextEl, there will be an empty line.
        var groupRect = group.getBoundingRect();
        var layoutOption = titleModel.getBoxLayoutParams();
        layoutOption.width = groupRect.width;
        layoutOption.height = groupRect.height;
        var layoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createBoxLayoutReference"])(titleModel, api);
        var layoutRect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLayoutRect"])(layoutOption, layoutRef.refContainer, titleModel.get('padding'));
        // Adjust text align based on position
        if (!textAlign) {
            // Align left if title is on the left. center and right is same
            textAlign = titleModel.get('left') || titleModel.get('right');
            // @ts-ignore
            if (textAlign === 'middle') {
                textAlign = 'center';
            }
            // Adjust layout by text align
            if (textAlign === 'right') {
                layoutRect.x += layoutRect.width;
            } else if (textAlign === 'center') {
                layoutRect.x += layoutRect.width / 2;
            }
        }
        if (!textVerticalAlign) {
            textVerticalAlign = titleModel.get('top') || titleModel.get('bottom');
            // @ts-ignore
            if (textVerticalAlign === 'center') {
                textVerticalAlign = 'middle';
            }
            if (textVerticalAlign === 'bottom') {
                layoutRect.y += layoutRect.height;
            } else if (textVerticalAlign === 'middle') {
                layoutRect.y += layoutRect.height / 2;
            }
            textVerticalAlign = textVerticalAlign || 'top';
        }
        group.x = layoutRect.x;
        group.y = layoutRect.y;
        group.markRedraw();
        var alignStyle = {
            align: textAlign,
            verticalAlign: textVerticalAlign
        };
        textEl.setStyle(alignStyle);
        subTextEl.setStyle(alignStyle);
        // Render background
        // Get groupRect again because textAlign has been changed
        groupRect = group.getBoundingRect();
        var padding = layoutRect.margin;
        var style = titleModel.getItemStyle([
            'color',
            'opacity'
        ]);
        style.fill = titleModel.get('backgroundColor');
        var rect = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Rect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Rect$3e$__["Rect"]({
            shape: {
                x: groupRect.x - padding[3],
                y: groupRect.y - padding[0],
                width: groupRect.width + padding[1] + padding[3],
                height: groupRect.height + padding[0] + padding[2],
                r: titleModel.get('borderRadius')
            },
            style: style,
            subPixelOptimize: true,
            silent: true
        });
        group.add(rect);
    };
    TitleView.type = 'title';
    return TitleView;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
function install(registers) {
    registers.registerComponentModel(TitleModel);
    registers.registerComponentView(TitleView);
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/title/install.js [app-ssr] (ecmascript) <export install as TitleComponent>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TitleComponent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$title$2f$install$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["install"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$title$2f$install$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/title/install.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/radar/RadarView.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Polyline$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Polyline$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Polyline.js [app-ssr] (ecmascript) <export default as Polyline>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Polygon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Polygon$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Polygon.js [app-ssr] (ecmascript) <export default as Polygon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Circle.js [app-ssr] (ecmascript) <export default as Circle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Ring$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Ring$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Ring.js [app-ssr] (ecmascript) <export default as Ring>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/graphic.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/view/Component.js [app-ssr] (ecmascript)");
;
;
;
;
;
var RadarView = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(RadarView, _super);
    function RadarView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = RadarView.type;
        return _this;
    }
    RadarView.prototype.render = function(radarModel, ecModel, api) {
        var group = this.group;
        group.removeAll();
        this._buildAxes(radarModel, api);
        this._buildSplitLineAndArea(radarModel);
    };
    RadarView.prototype._buildAxes = function(radarModel, api) {
        var radar = radarModel.coordinateSystem;
        var indicatorAxes = radar.getIndicatorAxes();
        var axisBuilders = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["map"](indicatorAxes, function(indicatorAxis) {
            var axisName = indicatorAxis.model.get('showName') ? indicatorAxis.name : ''; // hide name
            var axisBuilder = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$AxisBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](indicatorAxis.model, api, {
                axisName: axisName,
                position: [
                    radar.cx,
                    radar.cy
                ],
                rotation: indicatorAxis.angle,
                labelDirection: -1,
                tickDirection: -1,
                nameDirection: 1
            });
            return axisBuilder;
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"](axisBuilders, function(axisBuilder) {
            axisBuilder.build();
            this.group.add(axisBuilder.group);
        }, this);
    };
    RadarView.prototype._buildSplitLineAndArea = function(radarModel) {
        var radar = radarModel.coordinateSystem;
        var indicatorAxes = radar.getIndicatorAxes();
        if (!indicatorAxes.length) {
            return;
        }
        var shape = radarModel.get('shape');
        var splitLineModel = radarModel.getModel('splitLine');
        var splitAreaModel = radarModel.getModel('splitArea');
        var lineStyleModel = splitLineModel.getModel('lineStyle');
        var areaStyleModel = splitAreaModel.getModel('areaStyle');
        var showSplitLine = splitLineModel.get('show');
        var showSplitArea = splitAreaModel.get('show');
        var splitLineColors = lineStyleModel.get('color');
        var splitAreaColors = areaStyleModel.get('color');
        var splitLineColorsArr = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isArray"](splitLineColors) ? splitLineColors : [
            splitLineColors
        ];
        var splitAreaColorsArr = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isArray"](splitAreaColors) ? splitAreaColors : [
            splitAreaColors
        ];
        var splitLines = [];
        var splitAreas = [];
        function getColorIndex(areaOrLine, areaOrLineColorList, idx) {
            var colorIndex = idx % areaOrLineColorList.length;
            areaOrLine[colorIndex] = areaOrLine[colorIndex] || [];
            return colorIndex;
        }
        if (shape === 'circle') {
            var ticksRadius = indicatorAxes[0].getTicksCoords();
            var cx = radar.cx;
            var cy = radar.cy;
            for(var i = 0; i < ticksRadius.length; i++){
                if (showSplitLine) {
                    var colorIndex = getColorIndex(splitLines, splitLineColorsArr, i);
                    splitLines[colorIndex].push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__["Circle"]({
                        shape: {
                            cx: cx,
                            cy: cy,
                            r: ticksRadius[i].coord
                        }
                    }));
                }
                if (showSplitArea && i < ticksRadius.length - 1) {
                    var colorIndex = getColorIndex(splitAreas, splitAreaColorsArr, i);
                    splitAreas[colorIndex].push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Ring$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Ring$3e$__["Ring"]({
                        shape: {
                            cx: cx,
                            cy: cy,
                            r0: ticksRadius[i].coord,
                            r: ticksRadius[i + 1].coord
                        }
                    }));
                }
            }
        } else {
            var realSplitNumber_1;
            var axesTicksPoints = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["map"](indicatorAxes, function(indicatorAxis, idx) {
                var ticksCoords = indicatorAxis.getTicksCoords();
                realSplitNumber_1 = realSplitNumber_1 == null ? ticksCoords.length - 1 : Math.min(ticksCoords.length - 1, realSplitNumber_1);
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["map"](ticksCoords, function(tickCoord) {
                    return radar.coordToPoint(tickCoord.coord, idx);
                });
            });
            var prevPoints = [];
            for(var i = 0; i <= realSplitNumber_1; i++){
                var points = [];
                for(var j = 0; j < indicatorAxes.length; j++){
                    points.push(axesTicksPoints[j][i]);
                }
                // Close
                if (points[0]) {
                    points.push(points[0].slice());
                } else {
                    if ("TURBOPACK compile-time truthy", 1) {
                        console.error('Can\'t draw value axis ' + i);
                    }
                }
                if (showSplitLine) {
                    var colorIndex = getColorIndex(splitLines, splitLineColorsArr, i);
                    splitLines[colorIndex].push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Polyline$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Polyline$3e$__["Polyline"]({
                        shape: {
                            points: points
                        }
                    }));
                }
                if (showSplitArea && prevPoints) {
                    var colorIndex = getColorIndex(splitAreas, splitAreaColorsArr, i - 1);
                    splitAreas[colorIndex].push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Polygon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Polygon$3e$__["Polygon"]({
                        shape: {
                            points: points.concat(prevPoints)
                        }
                    }));
                }
                prevPoints = points.slice().reverse();
            }
        }
        var lineStyle = lineStyleModel.getLineStyle();
        var areaStyle = areaStyleModel.getAreaStyle();
        // Add splitArea before splitLine
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"](splitAreas, function(splitAreas, idx) {
            this.group.add(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["mergePath"](splitAreas, {
                style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaults"]({
                    stroke: 'none',
                    fill: splitAreaColorsArr[idx % splitAreaColorsArr.length]
                }, areaStyle),
                silent: true
            }));
        }, this);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"](splitLines, function(splitLines, idx) {
            this.group.add(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["mergePath"](splitLines, {
                style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaults"]({
                    fill: 'none',
                    stroke: splitLineColorsArr[idx % splitLineColorsArr.length]
                }, lineStyle),
                silent: true
            }));
        }, this);
    };
    RadarView.type = 'radar';
    return RadarView;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = RadarView;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/radar/install.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$radar$2f$RadarModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/radar/RadarModel.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$radar$2f$RadarView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/radar/RadarView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$radar$2f$Radar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/radar/Radar.js [app-ssr] (ecmascript)");
;
;
;
function install(registers) {
    registers.registerCoordinateSystem('radar', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$radar$2f$Radar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    registers.registerComponentModel(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$radar$2f$RadarModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    registers.registerComponentView(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$radar$2f$RadarView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    registers.registerVisual({
        seriesType: 'radar',
        reset: function(seriesModel) {
            var data = seriesModel.getData();
            // itemVisual symbol is for selected data
            data.each(function(idx) {
                data.setItemVisual(idx, 'legendIcon', 'roundRect');
            });
            // visual is for unselected data
            data.setVisual('legendIcon', 'roundRect');
        }
    });
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/geo/GeoView.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$MapDraw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/helper/MapDraw.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/view/Component.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/innerStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$event$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/event.js [app-ssr] (ecmascript)");
;
;
;
;
;
var GeoView = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(GeoView, _super);
    function GeoView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = GeoView.type;
        _this.focusBlurEnabled = true;
        return _this;
    }
    GeoView.prototype.init = function(ecModel, api) {
        this._api = api;
    };
    GeoView.prototype.render = function(geoModel, ecModel, api, payload) {
        this._model = geoModel;
        if (!geoModel.get('show')) {
            this._mapDraw && this._mapDraw.remove();
            this._mapDraw = null;
            return;
        }
        if (!this._mapDraw) {
            this._mapDraw = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$MapDraw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](api);
        }
        var mapDraw = this._mapDraw;
        mapDraw.draw(geoModel, ecModel, api, this, payload);
        mapDraw.group.on('click', this._handleRegionClick, this);
        mapDraw.group.silent = geoModel.get('silent');
        this.group.add(mapDraw.group);
        this.updateSelectStatus(geoModel, ecModel, api);
    };
    GeoView.prototype._handleRegionClick = function(e) {
        var eventData;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$event$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findEventDispatcher"])(e.target, function(current) {
            return (eventData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getECData"])(current).eventData) != null;
        }, true);
        if (eventData) {
            this._api.dispatchAction({
                type: 'geoToggleSelect',
                geoId: this._model.id,
                name: eventData.name
            });
        }
    };
    GeoView.prototype.updateSelectStatus = function(model, ecModel, api) {
        var _this = this;
        this._mapDraw.group.traverse(function(node) {
            var eventData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getECData"])(node).eventData;
            if (eventData) {
                _this._model.isSelected(eventData.name) ? api.enterSelect(node) : api.leaveSelect(node);
                // No need to traverse children.
                return true;
            }
        });
    };
    GeoView.prototype.findHighDownDispatchers = function(name) {
        return this._mapDraw && this._mapDraw.findHighDownDispatchers(name, this._model);
    };
    GeoView.prototype.dispose = function() {
        this._mapDraw && this._mapDraw.remove();
    };
    GeoView.type = 'geo';
    return GeoView;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = GeoView;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/geo/install.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$geo$2f$GeoModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/geo/GeoModel.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$geo$2f$geoCreator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/geo/geoCreator.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$roamHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/helper/roamHelper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$geo$2f$GeoView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/geo/GeoView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$geo$2f$geoSourceManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/geo/geoSourceManager.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
function registerMap(mapName, geoJson, specialAreas) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$geo$2f$geoSourceManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].registerMap(mapName, geoJson, specialAreas);
}
function install(registers) {
    registers.registerCoordinateSystem('geo', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$geo$2f$geoCreator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    registers.registerComponentModel(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$geo$2f$GeoModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    registers.registerComponentView(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$geo$2f$GeoView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    registers.registerImpl('registerMap', registerMap);
    registers.registerImpl('getMap', function(mapName) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$geo$2f$geoSourceManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getMapForUser(mapName);
    });
    function makeAction(method, actionInfo) {
        actionInfo.update = 'geo:updateSelectStatus';
        registers.registerAction(actionInfo, function(payload, ecModel) {
            var selected = {};
            var allSelected = [];
            ecModel.eachComponent({
                mainType: 'geo',
                query: payload
            }, function(geoModel) {
                geoModel[method](payload.name);
                var geo = geoModel.coordinateSystem;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(geo.regions, function(region) {
                    selected[region.name] = geoModel.isSelected(region.name) || false;
                });
                // Notice: there might be duplicated name in different regions.
                var names = [];
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(selected, function(v, name) {
                    selected[name] && names.push(name);
                });
                allSelected.push({
                    geoIndex: geoModel.componentIndex,
                    // Use singular, the same naming convention as the event `selectchanged`.
                    name: names
                });
            });
            return {
                selected: selected,
                allSelected: allSelected,
                name: payload.name
            };
        });
    }
    makeAction('toggleSelected', {
        type: 'geoToggleSelect',
        event: 'geoselectchanged'
    });
    makeAction('select', {
        type: 'geoSelect',
        event: 'geoselected'
    });
    makeAction('unSelect', {
        type: 'geoUnSelect',
        event: 'geounselected'
    });
    /**
   * @payload
   * @property {string} [componentType=series]
   * @property {number} [dx]
   * @property {number} [dy]
   * @property {number} [zoom]
   * @property {number} [originX]
   * @property {number} [originY]
   */ registers.registerAction({
        type: 'geoRoam',
        event: 'geoRoam',
        update: 'updateTransform'
    }, function(payload, ecModel, api) {
        var componentType = payload.componentType;
        if (!componentType) {
            // backward compat, but `payload.componentType` is deprecated.
            if (payload.geoId != null) {
                componentType = 'geo';
            } else if (payload.seriesId != null) {
                componentType = 'series';
            }
        }
        if (!componentType) {
            componentType = 'series';
        }
        // FIXME: payload.geoId/payload.seriesId should be required, but historically
        //  it is not mandatory, causing that all of the geo or series can be queried below,
        //  which is not reasonable.
        ecModel.eachComponent({
            mainType: componentType,
            query: payload
        }, function(componentModel) {
            var geo = componentModel.coordinateSystem;
            if (geo.type !== 'geo') {
                return;
            }
            var res = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$roamHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateCenterAndZoomInAction"])(geo, payload, componentModel.get('scaleLimit'));
            componentModel.setCenter && componentModel.setCenter(res.center);
            componentModel.setZoom && componentModel.setZoom(res.zoom);
            // All map series with same `map` use the same geo coordinate system
            // So the center and zoom must be in sync. Include the series not selected by legend
            if (componentType === 'series') {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(componentModel.seriesGroup, function(seriesModel) {
                    seriesModel.setCenter(res.center);
                    seriesModel.setZoom(res.zoom);
                });
            }
        });
    });
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/geo/install.js [app-ssr] (ecmascript) <export install as GeoComponent>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GeoComponent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$geo$2f$install$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["install"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$geo$2f$install$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/geo/install.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/parallel/ParallelView.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$throttle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/throttle.js [app-ssr] (ecmascript)");
;
;
;
;
var CLICK_THRESHOLD = 5; // > 4
var ParallelView = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(ParallelView, _super);
    function ParallelView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = ParallelView.type;
        return _this;
    }
    ParallelView.prototype.render = function(parallelModel, ecModel, api) {
        this._model = parallelModel;
        this._api = api;
        if (!this._handlers) {
            this._handlers = {};
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(handlers, function(handler, eventName) {
                api.getZr().on(eventName, this._handlers[eventName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bind"])(handler, this));
            }, this);
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$throttle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createOrUpdate"])(this, '_throttledDispatchExpand', parallelModel.get('axisExpandRate'), 'fixRate');
    };
    ParallelView.prototype.dispose = function(ecModel, api) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$throttle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clear"])(this, '_throttledDispatchExpand');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(this._handlers, function(handler, eventName) {
            api.getZr().off(eventName, handler);
        });
        this._handlers = null;
    };
    /**
   * @internal
   * @param {Object} [opt] If null, cancel the last action triggering for debounce.
   */ ParallelView.prototype._throttledDispatchExpand = function(opt) {
        this._dispatchExpand(opt);
    };
    /**
   * @internal
   */ ParallelView.prototype._dispatchExpand = function(opt) {
        opt && this._api.dispatchAction((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extend"])({
            type: 'parallelAxisExpand'
        }, opt));
    };
    ParallelView.type = 'parallel';
    return ParallelView;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
var handlers = {
    mousedown: function(e) {
        if (checkTrigger(this, 'click')) {
            this._mouseDownPoint = [
                e.offsetX,
                e.offsetY
            ];
        }
    },
    mouseup: function(e) {
        var mouseDownPoint = this._mouseDownPoint;
        if (checkTrigger(this, 'click') && mouseDownPoint) {
            var point = [
                e.offsetX,
                e.offsetY
            ];
            var dist = Math.pow(mouseDownPoint[0] - point[0], 2) + Math.pow(mouseDownPoint[1] - point[1], 2);
            if (dist > CLICK_THRESHOLD) {
                return;
            }
            var result = this._model.coordinateSystem.getSlidedAxisExpandWindow([
                e.offsetX,
                e.offsetY
            ]);
            result.behavior !== 'none' && this._dispatchExpand({
                axisExpandWindow: result.axisExpandWindow
            });
        }
        this._mouseDownPoint = null;
    },
    mousemove: function(e) {
        // Should do nothing when brushing.
        if (this._mouseDownPoint || !checkTrigger(this, 'mousemove')) {
            return;
        }
        var model = this._model;
        var result = model.coordinateSystem.getSlidedAxisExpandWindow([
            e.offsetX,
            e.offsetY
        ]);
        var behavior = result.behavior;
        behavior === 'jump' && this._throttledDispatchExpand.debounceNextCall(model.get('axisExpandDebounce'));
        this._throttledDispatchExpand(behavior === 'none' ? null // Cancel the last trigger, in case that mouse slide out of the area quickly.
         : {
            axisExpandWindow: result.axisExpandWindow,
            // Jumping uses animation, and sliding suppresses animation.
            animation: behavior === 'jump' ? null : {
                duration: 0 // Disable animation.
            }
        });
    }
};
function checkTrigger(view, triggerOn) {
    var model = view._model;
    return model.get('axisExpandable') && model.get('axisExpandTriggerOn') === triggerOn;
}
const __TURBOPACK__default__export__ = ParallelView;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/parallel/install.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$parallel$2f$parallelPreprocessor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/parallel/parallelPreprocessor.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$parallel$2f$ParallelView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/parallel/ParallelView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$parallel$2f$ParallelModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/parallel/ParallelModel.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$parallel$2f$parallelCreator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/parallel/parallelCreator.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisModelCreator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/axisModelCreator.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$parallel$2f$AxisModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/parallel/AxisModel.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$ParallelAxisView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axis/ParallelAxisView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$parallelAxisAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axis/parallelAxisAction.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
var defaultAxisOption = {
    type: 'value',
    areaSelectStyle: {
        width: 20,
        borderWidth: 1,
        borderColor: 'rgba(160,197,232)',
        color: 'rgba(160,197,232)',
        opacity: 0.3
    },
    realtime: true,
    z: 10
};
function install(registers) {
    registers.registerComponentView(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$parallel$2f$ParallelView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    registers.registerComponentModel(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$parallel$2f$ParallelModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    registers.registerCoordinateSystem('parallel', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$parallel$2f$parallelCreator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    registers.registerPreprocessor(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$parallel$2f$parallelPreprocessor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    registers.registerComponentModel(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$parallel$2f$AxisModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    registers.registerComponentView(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$ParallelAxisView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisModelCreator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(registers, 'parallel', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$parallel$2f$AxisModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], defaultAxisOption);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$parallelAxisAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["installParallelActions"])(registers);
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/parallel/install.js [app-ssr] (ecmascript) <export install as ParallelComponent>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ParallelComponent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$parallel$2f$install$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["install"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$parallel$2f$install$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/parallel/install.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/polar/install.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/extension.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$AxisView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axis/AxisView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$PolarAxisPointer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axisPointer/PolarAxisPointer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$install$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axisPointer/install.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$polar$2f$PolarModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/polar/PolarModel.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisModelCreator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/axisModelCreator.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$polar$2f$AxisModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/polar/AxisModel.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$polar$2f$polarCreator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/polar/polarCreator.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$AngleAxisView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axis/AngleAxisView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$RadiusAxisView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axis/RadiusAxisView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/view/Component.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$layout$2f$barPolar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/layout/barPolar.js [app-ssr] (ecmascript)");
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
var angleAxisExtraOption = {
    startAngle: 90,
    clockwise: true,
    splitNumber: 12,
    axisLabel: {
        rotate: 0
    }
};
var radiusAxisExtraOption = {
    splitNumber: 5
};
var PolarView = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(PolarView, _super);
    function PolarView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = PolarView.type;
        return _this;
    }
    PolarView.type = 'polar';
    return PolarView;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
function install(registers) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["use"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$install$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["install"]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$AxisView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].registerAxisPointerClass('PolarAxisPointer', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$PolarAxisPointer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    registers.registerCoordinateSystem('polar', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$polar$2f$polarCreator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    registers.registerComponentModel(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$polar$2f$PolarModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    registers.registerComponentView(PolarView);
    // Model and view for angleAxis and radiusAxis
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisModelCreator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(registers, 'angle', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$polar$2f$AxisModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AngleAxisModel"], angleAxisExtraOption);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisModelCreator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(registers, 'radius', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$polar$2f$AxisModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RadiusAxisModel"], radiusAxisExtraOption);
    registers.registerComponentView(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$AngleAxisView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    registers.registerComponentView(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$RadiusAxisView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    registers.registerLayout((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["curry"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$layout$2f$barPolar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], 'bar'));
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/polar/install.js [app-ssr] (ecmascript) <export install as PolarComponent>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PolarComponent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$polar$2f$install$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["install"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$polar$2f$install$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/polar/install.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/singleAxis/install.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/extension.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/view/Component.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$SingleAxisView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axis/SingleAxisView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisModelCreator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/axisModelCreator.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$single$2f$AxisModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/single/AxisModel.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$single$2f$singleCreator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/single/singleCreator.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$install$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axisPointer/install.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$AxisView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axis/AxisView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$SingleAxisPointer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axisPointer/SingleAxisPointer.js [app-ssr] (ecmascript)");
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
var SingleView = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(SingleView, _super);
    function SingleView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = SingleView.type;
        return _this;
    }
    SingleView.type = 'single';
    return SingleView;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
function install(registers) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["use"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$install$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["install"]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$AxisView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].registerAxisPointerClass('SingleAxisPointer', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$SingleAxisPointer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    registers.registerComponentView(SingleView);
    // Axis
    registers.registerComponentView(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$SingleAxisView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    registers.registerComponentModel(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$single$2f$AxisModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisModelCreator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(registers, 'single', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$single$2f$AxisModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$single$2f$AxisModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].defaultOption);
    registers.registerCoordinateSystem('single', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$single$2f$singleCreator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/singleAxis/install.js [app-ssr] (ecmascript) <export install as SingleAxisComponent>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SingleAxisComponent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$singleAxis$2f$install$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["install"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$singleAxis$2f$install$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/singleAxis/install.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/calendar/CalendarView.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Rect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Rect$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Rect.js [app-ssr] (ecmascript) <export default as Rect>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Polyline$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Polyline$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Polyline.js [app-ssr] (ecmascript) <export default as Polyline>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Text$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Text.js [app-ssr] (ecmascript) <export default as Text>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/label/labelStyle.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/format.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/number.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/view/Component.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$locale$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/core/locale.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
var CalendarView = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(CalendarView, _super);
    function CalendarView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = CalendarView.type;
        return _this;
    }
    CalendarView.prototype.render = function(calendarModel, ecModel, api) {
        var group = this.group;
        group.removeAll();
        var coordSys = calendarModel.coordinateSystem;
        // range info
        var rangeData = coordSys.getRangeInfo();
        var orient = coordSys.getOrient();
        // locale
        var localeModel = ecModel.getLocaleModel();
        this._renderDayRect(calendarModel, rangeData, group);
        // _renderLines must be called prior to following function
        this._renderLines(calendarModel, rangeData, orient, group);
        this._renderYearText(calendarModel, rangeData, orient, group);
        this._renderMonthText(calendarModel, localeModel, orient, group);
        this._renderWeekText(calendarModel, localeModel, rangeData, orient, group);
    };
    // render day rect
    CalendarView.prototype._renderDayRect = function(calendarModel, rangeData, group) {
        var coordSys = calendarModel.coordinateSystem;
        var itemRectStyleModel = calendarModel.getModel('itemStyle').getItemStyle();
        var sw = coordSys.getCellWidth();
        var sh = coordSys.getCellHeight();
        for(var i = rangeData.start.time; i <= rangeData.end.time; i = coordSys.getNextNDay(i, 1).time){
            var point = coordSys.dataToCalendarLayout([
                i
            ], false).tl;
            // every rect
            var rect = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Rect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Rect$3e$__["Rect"]({
                shape: {
                    x: point[0],
                    y: point[1],
                    width: sw,
                    height: sh
                },
                cursor: 'default',
                style: itemRectStyleModel
            });
            group.add(rect);
        }
    };
    // render separate line
    CalendarView.prototype._renderLines = function(calendarModel, rangeData, orient, group) {
        var self = this;
        var coordSys = calendarModel.coordinateSystem;
        var lineStyleModel = calendarModel.getModel([
            'splitLine',
            'lineStyle'
        ]).getLineStyle();
        var show = calendarModel.get([
            'splitLine',
            'show'
        ]);
        var lineWidth = lineStyleModel.lineWidth;
        this._tlpoints = [];
        this._blpoints = [];
        this._firstDayOfMonth = [];
        this._firstDayPoints = [];
        var firstDay = rangeData.start;
        for(var i = 0; firstDay.time <= rangeData.end.time; i++){
            addPoints(firstDay.formatedDate);
            if (i === 0) {
                firstDay = coordSys.getDateInfo(rangeData.start.y + '-' + rangeData.start.m);
            }
            var date = firstDay.date;
            date.setMonth(date.getMonth() + 1);
            firstDay = coordSys.getDateInfo(date);
        }
        addPoints(coordSys.getNextNDay(rangeData.end.time, 1).formatedDate);
        function addPoints(date) {
            self._firstDayOfMonth.push(coordSys.getDateInfo(date));
            self._firstDayPoints.push(coordSys.dataToCalendarLayout([
                date
            ], false).tl);
            var points = self._getLinePointsOfOneWeek(calendarModel, date, orient);
            self._tlpoints.push(points[0]);
            self._blpoints.push(points[points.length - 1]);
            show && self._drawSplitline(points, lineStyleModel, group);
        }
        // render top/left line
        show && this._drawSplitline(self._getEdgesPoints(self._tlpoints, lineWidth, orient), lineStyleModel, group);
        // render bottom/right line
        show && this._drawSplitline(self._getEdgesPoints(self._blpoints, lineWidth, orient), lineStyleModel, group);
    };
    // get points at both ends
    CalendarView.prototype._getEdgesPoints = function(points, lineWidth, orient) {
        var rs = [
            points[0].slice(),
            points[points.length - 1].slice()
        ];
        var idx = orient === 'horizontal' ? 0 : 1;
        // both ends of the line are extend half lineWidth
        rs[0][idx] = rs[0][idx] - lineWidth / 2;
        rs[1][idx] = rs[1][idx] + lineWidth / 2;
        return rs;
    };
    // render split line
    CalendarView.prototype._drawSplitline = function(points, lineStyle, group) {
        var poyline = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Polyline$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Polyline$3e$__["Polyline"]({
            z2: 20,
            shape: {
                points: points
            },
            style: lineStyle
        });
        group.add(poyline);
    };
    // render month line of one week points
    CalendarView.prototype._getLinePointsOfOneWeek = function(calendarModel, date, orient) {
        var coordSys = calendarModel.coordinateSystem;
        var parsedDate = coordSys.getDateInfo(date);
        var points = [];
        for(var i = 0; i < 7; i++){
            var tmpD = coordSys.getNextNDay(parsedDate.time, i);
            var point = coordSys.dataToCalendarLayout([
                tmpD.time
            ], false);
            points[2 * tmpD.day] = point.tl;
            points[2 * tmpD.day + 1] = point[orient === 'horizontal' ? 'bl' : 'tr'];
        }
        return points;
    };
    CalendarView.prototype._formatterLabel = function(formatter, params) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(formatter) && formatter) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["formatTplSimple"])(formatter, params);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFunction"])(formatter)) {
            return formatter(params);
        }
        return params.nameMap;
    };
    CalendarView.prototype._yearTextPositionControl = function(textEl, point, orient, position, margin) {
        var x = point[0];
        var y = point[1];
        var aligns = [
            'center',
            'bottom'
        ];
        if (position === 'bottom') {
            y += margin;
            aligns = [
                'center',
                'top'
            ];
        } else if (position === 'left') {
            x -= margin;
        } else if (position === 'right') {
            x += margin;
            aligns = [
                'center',
                'top'
            ];
        } else {
            // top
            y -= margin;
        }
        var rotate = 0;
        if (position === 'left' || position === 'right') {
            rotate = Math.PI / 2;
        }
        return {
            rotation: rotate,
            x: x,
            y: y,
            style: {
                align: aligns[0],
                verticalAlign: aligns[1]
            }
        };
    };
    // render year
    CalendarView.prototype._renderYearText = function(calendarModel, rangeData, orient, group) {
        var yearLabel = calendarModel.getModel('yearLabel');
        if (!yearLabel.get('show')) {
            return;
        }
        var margin = yearLabel.get('margin');
        var pos = yearLabel.get('position');
        if (!pos) {
            pos = orient !== 'horizontal' ? 'top' : 'left';
        }
        var points = [
            this._tlpoints[this._tlpoints.length - 1],
            this._blpoints[0]
        ];
        var xc = (points[0][0] + points[1][0]) / 2;
        var yc = (points[0][1] + points[1][1]) / 2;
        var idx = orient === 'horizontal' ? 0 : 1;
        var posPoints = {
            top: [
                xc,
                points[idx][1]
            ],
            bottom: [
                xc,
                points[1 - idx][1]
            ],
            left: [
                points[1 - idx][0],
                yc
            ],
            right: [
                points[idx][0],
                yc
            ]
        };
        var name = rangeData.start.y;
        if (+rangeData.end.y > +rangeData.start.y) {
            name = name + '-' + rangeData.end.y;
        }
        var formatter = yearLabel.get('formatter');
        var params = {
            start: rangeData.start.y,
            end: rangeData.end.y,
            nameMap: name
        };
        var content = this._formatterLabel(formatter, params);
        var yearText = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Text$3e$__["Text"]({
            z2: 30,
            style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createTextStyle"])(yearLabel, {
                text: content
            }),
            silent: yearLabel.get('silent')
        });
        yearText.attr(this._yearTextPositionControl(yearText, posPoints[pos], orient, pos, margin));
        group.add(yearText);
    };
    CalendarView.prototype._monthTextPositionControl = function(point, isCenter, orient, position, margin) {
        var align = 'left';
        var vAlign = 'top';
        var x = point[0];
        var y = point[1];
        if (orient === 'horizontal') {
            y = y + margin;
            if (isCenter) {
                align = 'center';
            }
            if (position === 'start') {
                vAlign = 'bottom';
            }
        } else {
            x = x + margin;
            if (isCenter) {
                vAlign = 'middle';
            }
            if (position === 'start') {
                align = 'right';
            }
        }
        return {
            x: x,
            y: y,
            align: align,
            verticalAlign: vAlign
        };
    };
    // render month and year text
    CalendarView.prototype._renderMonthText = function(calendarModel, localeModel, orient, group) {
        var monthLabel = calendarModel.getModel('monthLabel');
        if (!monthLabel.get('show')) {
            return;
        }
        var nameMap = monthLabel.get('nameMap');
        var margin = monthLabel.get('margin');
        var pos = monthLabel.get('position');
        var align = monthLabel.get('align');
        var termPoints = [
            this._tlpoints,
            this._blpoints
        ];
        if (!nameMap || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(nameMap)) {
            if (nameMap) {
                // case-sensitive
                localeModel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$locale$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLocaleModel"])(nameMap) || localeModel;
            }
            // PENDING
            // for ZH locale, original form is `一月` but current form is `1月`
            nameMap = localeModel.get([
                'time',
                'monthAbbr'
            ]) || [];
        }
        var idx = pos === 'start' ? 0 : 1;
        var axis = orient === 'horizontal' ? 0 : 1;
        margin = pos === 'start' ? -margin : margin;
        var isCenter = align === 'center';
        var labelSilent = monthLabel.get('silent');
        for(var i = 0; i < termPoints[idx].length - 1; i++){
            var tmp = termPoints[idx][i].slice();
            var firstDay = this._firstDayOfMonth[i];
            if (isCenter) {
                var firstDayPoints = this._firstDayPoints[i];
                tmp[axis] = (firstDayPoints[axis] + termPoints[0][i + 1][axis]) / 2;
            }
            var formatter = monthLabel.get('formatter');
            var name_1 = nameMap[+firstDay.m - 1];
            var params = {
                yyyy: firstDay.y,
                yy: (firstDay.y + '').slice(2),
                MM: firstDay.m,
                M: +firstDay.m,
                nameMap: name_1
            };
            var content = this._formatterLabel(formatter, params);
            var monthText = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Text$3e$__["Text"]({
                z2: 30,
                style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extend"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createTextStyle"])(monthLabel, {
                    text: content
                }), this._monthTextPositionControl(tmp, isCenter, orient, pos, margin)),
                silent: labelSilent
            });
            group.add(monthText);
        }
    };
    CalendarView.prototype._weekTextPositionControl = function(point, orient, position, margin, cellSize) {
        var align = 'center';
        var vAlign = 'middle';
        var x = point[0];
        var y = point[1];
        var isStart = position === 'start';
        if (orient === 'horizontal') {
            x = x + margin + (isStart ? 1 : -1) * cellSize[0] / 2;
            align = isStart ? 'right' : 'left';
        } else {
            y = y + margin + (isStart ? 1 : -1) * cellSize[1] / 2;
            vAlign = isStart ? 'bottom' : 'top';
        }
        return {
            x: x,
            y: y,
            align: align,
            verticalAlign: vAlign
        };
    };
    // render weeks
    CalendarView.prototype._renderWeekText = function(calendarModel, localeModel, rangeData, orient, group) {
        var dayLabel = calendarModel.getModel('dayLabel');
        if (!dayLabel.get('show')) {
            return;
        }
        var coordSys = calendarModel.coordinateSystem;
        var pos = dayLabel.get('position');
        var nameMap = dayLabel.get('nameMap');
        var margin = dayLabel.get('margin');
        var firstDayOfWeek = coordSys.getFirstDayOfWeek();
        if (!nameMap || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(nameMap)) {
            if (nameMap) {
                // case-sensitive
                localeModel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$locale$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLocaleModel"])(nameMap) || localeModel;
            }
            // Use the first letter of `dayOfWeekAbbr` if `dayOfWeekShort` doesn't exist in the locale file
            var dayOfWeekShort = localeModel.get([
                'time',
                'dayOfWeekShort'
            ]);
            nameMap = dayOfWeekShort || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["map"])(localeModel.get([
                'time',
                'dayOfWeekAbbr'
            ]), function(val) {
                return val[0];
            });
        }
        var start = coordSys.getNextNDay(rangeData.end.time, 7 - rangeData.lweek).time;
        var cellSize = [
            coordSys.getCellWidth(),
            coordSys.getCellHeight()
        ];
        margin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parsePercent"])(margin, Math.min(cellSize[1], cellSize[0]));
        if (pos === 'start') {
            start = coordSys.getNextNDay(rangeData.start.time, -(7 + rangeData.fweek)).time;
            margin = -margin;
        }
        var labelSilent = dayLabel.get('silent');
        for(var i = 0; i < 7; i++){
            var tmpD = coordSys.getNextNDay(start, i);
            var point = coordSys.dataToCalendarLayout([
                tmpD.time
            ], false).center;
            var day = i;
            day = Math.abs((i + firstDayOfWeek) % 7);
            var weekText = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Text$3e$__["Text"]({
                z2: 30,
                style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extend"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createTextStyle"])(dayLabel, {
                    text: nameMap[day]
                }), this._weekTextPositionControl(point, orient, pos, margin, cellSize)),
                silent: labelSilent
            });
            group.add(weekText);
        }
    };
    CalendarView.type = 'calendar';
    return CalendarView;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = CalendarView;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/calendar/install.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$calendar$2f$CalendarModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/calendar/CalendarModel.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$calendar$2f$CalendarView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/calendar/CalendarView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$calendar$2f$Calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/calendar/Calendar.js [app-ssr] (ecmascript)");
;
;
;
function install(registers) {
    registers.registerComponentModel(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$calendar$2f$CalendarModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    registers.registerComponentView(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$calendar$2f$CalendarView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    registers.registerCoordinateSystem('calendar', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$calendar$2f$Calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/calendar/install.js [app-ssr] (ecmascript) <export install as CalendarComponent>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CalendarComponent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$calendar$2f$install$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["install"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$calendar$2f$install$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/calendar/install.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/matrix/MatrixView.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/Model.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$BoundingRect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/BoundingRect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$helper$2f$subPixelOptimize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/helper/subPixelOptimize.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Rect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Rect$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Rect.js [app-ssr] (ecmascript) <export default as Rect>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Line$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Line.js [app-ssr] (ecmascript) <export default as Line>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/graphic.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$matrix$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/matrix.js [app-ssr] (ecmascript)");
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
var round = Math.round;
var Z2_BACKGROUND = 0;
var Z2_OUTER_BORDER = 99;
var Z2_BODY_CORNER_CELL_DEFAULT = {
    normal: 25,
    special: 100
};
var Z2_DIMENSION_CELL_DEFAULT = {
    normal: 50,
    special: 125
};
var MatrixView = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(MatrixView, _super);
    function MatrixView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = MatrixView.type;
        return _this;
    }
    MatrixView.prototype.render = function(matrixModel, ecModel) {
        this.group.removeAll();
        var group = this.group;
        var coordSys = matrixModel.coordinateSystem;
        var rect = coordSys.getRect();
        var xDimModel = matrixModel.getDimensionModel('x');
        var yDimModel = matrixModel.getDimensionModel('y');
        var xDim = xDimModel.dim;
        var yDim = yDimModel.dim;
        // PENDING:
        //  reuse the existing text and rect elements for performance?
        renderDimensionCells(group, matrixModel, ecModel);
        createBodyAndCorner(group, matrixModel, xDim, yDim, ecModel);
        var borderZ2Option = matrixModel.getShallow('borderZ2', true);
        var outerBorderZ2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["retrieve2"])(borderZ2Option, Z2_OUTER_BORDER);
        var dividerLineZ2 = outerBorderZ2 - 1;
        // Outer border and overall background. Use separate elements because of z-order:
        // The overall background should appear below any other elements.
        // But in most cases, the outer border and the divider line should be above the normal cell borders -
        // especially when cell borders have different colors. But users may highlight some specific cells by
        // overstirking their border, in which case it should be above the outer border.
        var bgStyle = matrixModel.getModel('backgroundStyle').getItemStyle([
            'borderWidth'
        ]);
        bgStyle.lineWidth = 0;
        var borderStyle = matrixModel.getModel('backgroundStyle').getItemStyle([
            'color',
            'decal',
            'shadowColor',
            'shadowBlur',
            'shadowOffsetX',
            'shadowOffsetY'
        ]);
        borderStyle.fill = 'none';
        var bgRect = createMatrixRect(rect.clone(), bgStyle, Z2_BACKGROUND);
        var borderRect = createMatrixRect(rect.clone(), borderStyle, outerBorderZ2);
        bgRect.silent = true;
        borderRect.silent = true;
        group.add(bgRect);
        group.add(borderRect);
        // Header split line.
        var xDimCell0 = xDim.getUnitLayoutInfo(0, 0);
        var yDimCell0 = yDim.getUnitLayoutInfo(1, 0);
        if (xDimCell0 && yDimCell0) {
            if (xDim.shouldShow()) {
                group.add(createMatrixLine({
                    x1: rect.x,
                    y1: yDimCell0.xy,
                    x2: rect.x + rect.width,
                    y2: yDimCell0.xy
                }, xDimModel.getModel('dividerLineStyle').getLineStyle(), dividerLineZ2));
            }
            if (yDim.shouldShow()) {
                group.add(createMatrixLine({
                    x1: xDimCell0.xy,
                    y1: rect.y,
                    x2: xDimCell0.xy,
                    y2: rect.y + rect.height
                }, yDimModel.getModel('dividerLineStyle').getLineStyle(), dividerLineZ2));
            }
        }
    };
    MatrixView.type = 'matrix';
    return MatrixView;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
function renderDimensionCells(group, matrixModel, ecModel) {
    renderOnDimension(0);
    renderOnDimension(1);
    function renderOnDimension(dimIdx) {
        var thisDimModel = matrixModel.getDimensionModel(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["XY"][dimIdx]);
        var thisDim = thisDimModel.dim;
        if (!thisDim.shouldShow()) {
            return;
        }
        var thisDimBgStyleModel = thisDimModel.getModel('itemStyle');
        var thisDimLabelModel = thisDimModel.getModel('label');
        var tooltipOption = matrixModel.getShallow('tooltip', true);
        var xyLocator = [];
        for(var it_1 = thisDim.resetCellIterator(); it_1.next();){
            var dimCell = it_1.item;
            var shape = {};
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$BoundingRect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].copy(shape, dimCell.rect);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["set"](xyLocator, dimCell.id.x, dimCell.id.y);
            createMatrixCell(xyLocator, matrixModel, group, ecModel, dimCell.option, thisDimBgStyleModel, thisDimLabelModel, thisDimModel, shape, dimCell.option.value, Z2_DIMENSION_CELL_DEFAULT, tooltipOption);
        }
    }
}
function createBodyAndCorner(group, matrixModel, xDim, yDim, ecModel) {
    createBodyOrCornerCells('body', matrixModel.getBody(), xDim, yDim);
    if (xDim.shouldShow() && yDim.shouldShow()) {
        createBodyOrCornerCells('corner', matrixModel.getCorner(), yDim, xDim);
    }
    function createBodyOrCornerCells(bodyCornerOptionRoot, bodyOrCorner, dimForCoordX, // Can be `matrix.y` (transposed) for corners.
    dimForCoordY) {
        // Prevent inheriting from ancestor.
        var parentCellModel = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](matrixModel.getShallow(bodyCornerOptionRoot, true));
        var parentItemStyleModel = parentCellModel.getModel('itemStyle');
        var parentLabelModel = parentCellModel.getModel('label');
        var itx = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ListIterator"]();
        var ity = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ListIterator"]();
        var xyLocator = [];
        var tooltipOption = matrixModel.getShallow('tooltip', true);
        for(dimForCoordY.resetLayoutIterator(ity, 1); ity.next();){
            for(dimForCoordX.resetLayoutIterator(itx, 0); itx.next();){
                var xLayout = itx.item;
                var yLayout = ity.item;
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["set"](xyLocator, xLayout.id.x, yLayout.id.y);
                var bodyCornerCell = bodyOrCorner.getCell(xyLocator);
                // If in span of an other body or corner cell, never render it.
                if (bodyCornerCell && bodyCornerCell.inSpanOf && bodyCornerCell.inSpanOf !== bodyCornerCell) {
                    continue;
                }
                var shape = {};
                if (bodyCornerCell && bodyCornerCell.span) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$BoundingRect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].copy(shape, bodyCornerCell.spanRect);
                } else {
                    xLayout.dim.getLayout(shape, 0, xyLocator[0]);
                    yLayout.dim.getLayout(shape, 1, xyLocator[1]);
                }
                var bodyCornerCellOption = bodyCornerCell ? bodyCornerCell.option : null;
                createMatrixCell(xyLocator, matrixModel, group, ecModel, bodyCornerCellOption, parentItemStyleModel, parentLabelModel, parentCellModel, shape, bodyCornerCellOption ? bodyCornerCellOption.value : null, Z2_BODY_CORNER_CELL_DEFAULT, tooltipOption);
            }
        }
    } // End of createBodyOrCornerCells
}
function createMatrixCell(xyLocator, matrixModel, group, ecModel, cellOption, parentItemStyleModel, parentLabelModel, parentCellModel, shape, textValue, zrCellDefault, tooltipOption) {
    var _a;
    // Do not use getModel for handy performance optimization.
    _tmpCellItemStyleModel.option = cellOption ? cellOption.itemStyle : null;
    _tmpCellItemStyleModel.parentModel = parentItemStyleModel;
    _tmpCellModel.option = cellOption;
    _tmpCellModel.parentModel = parentCellModel;
    // Use different z2 because special border may be defined in itemStyle.
    var z2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["retrieve2"])(_tmpCellModel.getShallow('z2'), cellOption && cellOption.itemStyle ? zrCellDefault.special : zrCellDefault.normal);
    var tooltipOptionShow = tooltipOption && tooltipOption.show;
    var cellRect = createMatrixRect(shape, _tmpCellItemStyleModel.getItemStyle(), z2);
    group.add(cellRect);
    var cursorOption = _tmpCellModel.get('cursor');
    if (cursorOption != null) {
        cellRect.attr('cursor', cursorOption);
    }
    var cellText;
    if (textValue != null) {
        var text = textValue + '';
        _tmpCellLabelModel.option = cellOption ? cellOption.label : null;
        _tmpCellLabelModel.parentModel = parentLabelModel;
        // This is to accept `option.textStyle` as the default.
        _tmpCellLabelModel.ecModel = ecModel;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setLabelStyle"])(cellRect, // Currently do not support other states (`emphasis`, `select`, `blur`)
        {
            normal: _tmpCellLabelModel
        }, {
            defaultText: text,
            autoOverflowArea: true,
            // By default based on boundingRect. But boundingRect contains borderWidth,
            // and borderWidth is half outside the cell. Thus specific `layoutRect` explicitly.
            layoutRect: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clone"])(cellRect.shape)
        });
        cellText = cellRect.getTextContent();
        if (cellText) {
            cellText.z2 = z2 + 1;
            var style = cellText.style;
            if (style && style.overflow && style.overflow !== 'none' && style.lineOverflow) {
                // `overflow: 'break'/'breakAll'/'truncate'` does not guarantee prevention of overflow
                // when space is insufficient. Use a `clipPath` in such case.
                var clipShape = {};
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$BoundingRect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].copy(clipShape, shape);
                // `lineWidth` is half outside half inside the bounding rect.
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["expandOrShrinkRect"])(clipShape, (((_a = cellRect.style) === null || _a === void 0 ? void 0 : _a.lineWidth) || 0) / 2, true, true);
                cellRect.updateInnerText();
                cellText.getLocalTransform(_tmpInnerTextTrans);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$matrix$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invert"])(_tmpInnerTextTrans, _tmpInnerTextTrans);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$BoundingRect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].applyTransform(clipShape, clipShape, _tmpInnerTextTrans);
                cellText.setClipPath(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Rect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Rect$3e$__["Rect"]({
                    shape: clipShape
                }));
            }
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["setTooltipConfig"])({
            el: cellRect,
            componentModel: matrixModel,
            itemName: text,
            itemTooltipOption: tooltipOption,
            formatterParamsExtra: {
                xyLocator: xyLocator.slice()
            }
        });
    }
    // Set silent
    if (cellText) {
        var labelSilent = _tmpCellLabelModel.get('silent');
        // auto, tooltip of text cells need silient: false, but non-text cells
        // do not need a special cursor in most cases.
        if (labelSilent == null) {
            labelSilent = !tooltipOptionShow;
        }
        cellText.silent = labelSilent;
        cellText.ignoreHostSilent = true;
    }
    var rectSilent = _tmpCellModel.get('silent');
    if (rectSilent == null) {
        rectSilent = // If no background color in cell, set `rect.silent: false` will cause that only
        // the border response to mouse hovering, which is probably weird.
        !cellRect.style || cellRect.style.fill === 'none' || !cellRect.style.fill;
    }
    cellRect.silent = rectSilent;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearTmpModel"])(_tmpCellModel);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearTmpModel"])(_tmpCellItemStyleModel);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearTmpModel"])(_tmpCellLabelModel);
}
var _tmpCellModel = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]();
var _tmpCellItemStyleModel = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]();
var _tmpCellLabelModel = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]();
var _tmpInnerTextTrans = [];
// FIXME: move all of the subpixel process to Matrix.ts resize, otherwise the result of
// `dataToLayout` is not consistent with this rendering, and the caller (like heatmap) can
// not precisely align with the matrix border.
function createMatrixRect(shape, style, z2) {
    // Currently `subPixelOptimizeRect` can not be used here because it will break rect alignment.
    // Optimize line and rect with the same direction.
    var lineWidth = style.lineWidth;
    if (lineWidth) {
        var x2Original = shape.x + shape.width;
        var y2Original = shape.y + shape.height;
        shape.x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$helper$2f$subPixelOptimize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["subPixelOptimize"])(shape.x, lineWidth, true);
        shape.y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$helper$2f$subPixelOptimize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["subPixelOptimize"])(shape.y, lineWidth, true);
        shape.width = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$helper$2f$subPixelOptimize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["subPixelOptimize"])(x2Original, lineWidth, true) - shape.x;
        shape.height = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$helper$2f$subPixelOptimize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["subPixelOptimize"])(y2Original, lineWidth, true) - shape.y;
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Rect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Rect$3e$__["Rect"]({
        shape: shape,
        style: style,
        z2: z2
    });
}
function createMatrixLine(shape, style, z2) {
    var lineWidth = style.lineWidth;
    if (lineWidth) {
        if (round(shape.x1 * 2) === round(shape.x2 * 2)) {
            shape.x1 = shape.x2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$helper$2f$subPixelOptimize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["subPixelOptimize"])(shape.x1, lineWidth, true);
        }
        if (round(shape.y1 * 2) === round(shape.y2 * 2)) {
            shape.y1 = shape.y2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$helper$2f$subPixelOptimize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["subPixelOptimize"])(shape.y1, lineWidth, true);
        }
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Line$3e$__["Line"]({
        shape: shape,
        style: style,
        silent: true,
        z2: z2
    });
}
const __TURBOPACK__default__export__ = MatrixView;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/matrix/install.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$matrix$2f$MatrixModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/matrix/MatrixModel.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$matrix$2f$MatrixView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/matrix/MatrixView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$matrix$2f$Matrix$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/matrix/Matrix.js [app-ssr] (ecmascript)");
;
;
;
function install(registers) {
    registers.registerComponentModel(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$matrix$2f$MatrixModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    registers.registerComponentView(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$matrix$2f$MatrixView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    registers.registerCoordinateSystem('matrix', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$matrix$2f$Matrix$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/matrix/install.js [app-ssr] (ecmascript) <export install as MatrixComponent>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MatrixComponent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$matrix$2f$install$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["install"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$matrix$2f$install$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/matrix/install.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/graphic/GraphicModel.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    "GraphicComponentModel",
    ()=>GraphicComponentModel,
    "setKeyInfoToNewElOption",
    ()=>setKeyInfoToNewElOption
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/Component.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/layout.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
function setKeyInfoToNewElOption(resultItem, newElOption) {
    var existElOption = resultItem.existing;
    // Set id and type after id assigned.
    newElOption.id = resultItem.keyInfo.id;
    !newElOption.type && existElOption && (newElOption.type = existElOption.type);
    // Set parent id if not specified
    if (newElOption.parentId == null) {
        var newElParentOption = newElOption.parentOption;
        if (newElParentOption) {
            newElOption.parentId = newElParentOption.id;
        } else if (existElOption) {
            newElOption.parentId = existElOption.parentId;
        }
    }
    // Clear
    newElOption.parentOption = null;
}
function isSetLoc(obj, props) {
    var isSet;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"](props, function(prop) {
        obj[prop] != null && obj[prop] !== 'auto' && (isSet = true);
    });
    return isSet;
}
function mergeNewElOptionToExist(existList, index, newElOption) {
    // Update existing options, for `getOption` feature.
    var newElOptCopy = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extend"]({}, newElOption);
    var existElOption = existList[index];
    var $action = newElOption.$action || 'merge';
    if ($action === 'merge') {
        if (existElOption) {
            if ("TURBOPACK compile-time truthy", 1) {
                var newType = newElOption.type;
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"](!newType || existElOption.type === newType, 'Please set $action: "replace" to change `type`');
            }
            // We can ensure that newElOptCopy and existElOption are not
            // the same object, so `merge` will not change newElOptCopy.
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["merge"](existElOption, newElOptCopy, true);
            // Rigid body, use ignoreSize.
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeLayoutParam"])(existElOption, newElOptCopy, {
                ignoreSize: true
            });
            // Will be used in render.
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["copyLayoutParams"])(newElOption, existElOption);
            // Copy transition info to new option so it can be used in the transition.
            // DO IT AFTER merge
            copyTransitionInfo(newElOption, existElOption);
            copyTransitionInfo(newElOption, existElOption, 'shape');
            copyTransitionInfo(newElOption, existElOption, 'style');
            copyTransitionInfo(newElOption, existElOption, 'extra');
            // Copy clipPath
            newElOption.clipPath = existElOption.clipPath;
        } else {
            existList[index] = newElOptCopy;
        }
    } else if ($action === 'replace') {
        existList[index] = newElOptCopy;
    } else if ($action === 'remove') {
        // null will be cleaned later.
        existElOption && (existList[index] = null);
    }
}
var TRANSITION_PROPS_TO_COPY = [
    'transition',
    'enterFrom',
    'leaveTo'
];
var ROOT_TRANSITION_PROPS_TO_COPY = TRANSITION_PROPS_TO_COPY.concat([
    'enterAnimation',
    'updateAnimation',
    'leaveAnimation'
]);
function copyTransitionInfo(target, source, targetProp) {
    if (targetProp) {
        if (!target[targetProp] && source[targetProp]) {
            // TODO avoid creating this empty object when there is no transition configuration.
            target[targetProp] = {};
        }
        target = target[targetProp];
        source = source[targetProp];
    }
    if (!target || !source) {
        return;
    }
    var props = targetProp ? TRANSITION_PROPS_TO_COPY : ROOT_TRANSITION_PROPS_TO_COPY;
    for(var i = 0; i < props.length; i++){
        var prop = props[i];
        if (target[prop] == null && source[prop] != null) {
            target[prop] = source[prop];
        }
    }
}
function setLayoutInfoToExist(existItem, newElOption) {
    if (!existItem) {
        return;
    }
    existItem.hv = newElOption.hv = [
        // Rigid body, don't care about `width`.
        isSetLoc(newElOption, [
            'left',
            'right'
        ]),
        // Rigid body, don't care about `height`.
        isSetLoc(newElOption, [
            'top',
            'bottom'
        ])
    ];
    // Give default group size. Otherwise layout error may occur.
    if (existItem.type === 'group') {
        var existingGroupOpt = existItem;
        var newGroupOpt = newElOption;
        existingGroupOpt.width == null && (existingGroupOpt.width = newGroupOpt.width = 0);
        existingGroupOpt.height == null && (existingGroupOpt.height = newGroupOpt.height = 0);
    }
}
var GraphicComponentModel = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(GraphicComponentModel, _super);
    function GraphicComponentModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = GraphicComponentModel.type;
        _this.preventAutoZ = true;
        return _this;
    }
    GraphicComponentModel.prototype.mergeOption = function(option, ecModel) {
        // Prevent default merge to elements
        var elements = this.option.elements;
        this.option.elements = null;
        _super.prototype.mergeOption.call(this, option, ecModel);
        this.option.elements = elements;
    };
    GraphicComponentModel.prototype.optionUpdated = function(newOption, isInit) {
        var thisOption = this.option;
        var newList = (isInit ? thisOption : newOption).elements;
        var existList = thisOption.elements = isInit ? [] : thisOption.elements;
        var flattenedList = [];
        this._flatten(newList, flattenedList, null);
        var mappingResult = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mappingToExists"](existList, flattenedList, 'normalMerge');
        // Clear elOptionsToUpdate
        var elOptionsToUpdate = this._elOptionsToUpdate = [];
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"](mappingResult, function(resultItem, index) {
            var newElOption = resultItem.newOption;
            if ("TURBOPACK compile-time truthy", 1) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isObject"](newElOption) || resultItem.existing, 'Empty graphic option definition');
            }
            if (!newElOption) {
                return;
            }
            elOptionsToUpdate.push(newElOption);
            setKeyInfoToNewElOption(resultItem, newElOption);
            mergeNewElOptionToExist(existList, index, newElOption);
            setLayoutInfoToExist(existList[index], newElOption);
        }, this);
        // Clean
        thisOption.elements = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filter"](existList, function(item) {
            // $action should be volatile, otherwise option gotten from
            // `getOption` will contain unexpected $action.
            item && delete item.$action;
            return item != null;
        });
    };
    /**
   * Convert
   * [{
   *  type: 'group',
   *  id: 'xx',
   *  children: [{type: 'circle'}, {type: 'polygon'}]
   * }]
   * to
   * [
   *  {type: 'group', id: 'xx'},
   *  {type: 'circle', parentId: 'xx'},
   *  {type: 'polygon', parentId: 'xx'}
   * ]
   */ GraphicComponentModel.prototype._flatten = function(optionList, result, parentOption) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"](optionList, function(option) {
            if (!option) {
                return;
            }
            if (parentOption) {
                option.parentOption = parentOption;
            }
            result.push(option);
            var children = option.children;
            // here we don't judge if option.type is `group`
            // when new option doesn't provide `type`, it will cause that the children can't be updated.
            if (children && children.length) {
                this._flatten(children, result, option);
            }
            // Deleting for JSON output, and for not affecting group creation.
            delete option.children;
        }, this);
    };
    // FIXME
    // Pass to view using payload? setOption has a payload?
    GraphicComponentModel.prototype.useElOptionsToUpdate = function() {
        var els = this._elOptionsToUpdate;
        // Clear to avoid render duplicately when zooming.
        this._elOptionsToUpdate = null;
        return els;
    };
    GraphicComponentModel.type = 'graphic';
    GraphicComponentModel.defaultOption = {
        elements: []
    };
    return GraphicComponentModel;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/graphic/GraphicView.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    "GraphicComponentView",
    ()=>GraphicComponentView,
    "inner",
    ()=>inner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Displayable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Displayable.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Group.js [app-ssr] (ecmascript) <export default as Group>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Image.js [app-ssr] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Text$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Text.js [app-ssr] (ecmascript) <export default as Text>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/graphic.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/layout.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/number.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/view/Component.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/innerStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$styleCompat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/styleCompat.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$customGraphicTransition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/animation/customGraphicTransition.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/animation/basicTransition.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$customGraphicKeyframeAnimation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/animation/customGraphicKeyframeAnimation.js [app-ssr] (ecmascript)");
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
var nonShapeGraphicElements = {
    // Reserved but not supported in graphic component.
    path: null,
    compoundPath: null,
    // Supported in graphic component.
    group: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__["Group"],
    image: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"],
    text: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Text$3e$__["Text"]
};
var inner = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeInner"]();
// ------------------------
// View
// ------------------------
var GraphicComponentView = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(GraphicComponentView, _super);
    function GraphicComponentView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = GraphicComponentView.type;
        return _this;
    }
    GraphicComponentView.prototype.init = function() {
        this._elMap = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createHashMap"]();
    };
    GraphicComponentView.prototype.render = function(graphicModel, ecModel, api) {
        // Having leveraged between use cases and algorithm complexity, a very
        // simple layout mechanism is used:
        // The size(width/height) can be determined by itself or its parent (not
        // implemented yet), but can not by its children. (Top-down travel)
        // The location(x/y) can be determined by the bounding rect of itself
        // (can including its descendants or not) and the size of its parent.
        // (Bottom-up travel)
        // When `chart.clear()` or `chart.setOption({...}, true)` with the same id,
        // view will be reused.
        if (graphicModel !== this._lastGraphicModel) {
            this._clear();
        }
        this._lastGraphicModel = graphicModel;
        this._updateElements(graphicModel);
        this._relocate(graphicModel, api);
    };
    /**
   * Update graphic elements.
   */ GraphicComponentView.prototype._updateElements = function(graphicModel) {
        var elOptionsToUpdate = graphicModel.useElOptionsToUpdate();
        if (!elOptionsToUpdate) {
            return;
        }
        var elMap = this._elMap;
        var rootGroup = this.group;
        var globalZ = graphicModel.get('z');
        var globalZLevel = graphicModel.get('zlevel');
        // Top-down tranverse to assign graphic settings to each elements.
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"](elOptionsToUpdate, function(elOption) {
            var id = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertOptionIdName"](elOption.id, null);
            var elExisting = id != null ? elMap.get(id) : null;
            var parentId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertOptionIdName"](elOption.parentId, null);
            var targetElParent = parentId != null ? elMap.get(parentId) : rootGroup;
            var elType = elOption.type;
            var elOptionStyle = elOption.style;
            if (elType === 'text' && elOptionStyle) {
                // In top/bottom mode, textVerticalAlign should not be used, which cause
                // inaccurately locating.
                if (elOption.hv && elOption.hv[1]) {
                    elOptionStyle.textVerticalAlign = elOptionStyle.textBaseline = elOptionStyle.verticalAlign = elOptionStyle.align = null;
                }
            }
            var textContentOption = elOption.textContent;
            var textConfig = elOption.textConfig;
            if (elOptionStyle && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$styleCompat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isEC4CompatibleStyle"])(elOptionStyle, elType, !!textConfig, !!textContentOption)) {
                var convertResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$styleCompat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertFromEC4CompatibleStyle"])(elOptionStyle, elType, true);
                if (!textConfig && convertResult.textConfig) {
                    textConfig = elOption.textConfig = convertResult.textConfig;
                }
                if (!textContentOption && convertResult.textContent) {
                    textContentOption = convertResult.textContent;
                }
            }
            // Remove unnecessary props to avoid potential problems.
            var elOptionCleaned = getCleanedElOption(elOption);
            // For simple, do not support parent change, otherwise reorder is needed.
            if ("TURBOPACK compile-time truthy", 1) {
                elExisting && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"](targetElParent === elExisting.parent, 'Changing parent is not supported.');
            }
            var $action = elOption.$action || 'merge';
            var isMerge = $action === 'merge';
            var isReplace = $action === 'replace';
            if (isMerge) {
                var isInit = !elExisting;
                var el_1 = elExisting;
                if (isInit) {
                    el_1 = createEl(id, targetElParent, elOption.type, elMap);
                } else {
                    el_1 && (inner(el_1).isNew = false);
                    // Stop and restore before update any other attributes.
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$customGraphicKeyframeAnimation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stopPreviousKeyframeAnimationAndRestore"])(el_1);
                }
                if (el_1) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$customGraphicTransition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["applyUpdateTransition"])(el_1, elOptionCleaned, graphicModel, {
                        isInit: isInit
                    });
                    updateCommonAttrs(el_1, elOption, globalZ, globalZLevel);
                }
            } else if (isReplace) {
                removeEl(elExisting, elOption, elMap, graphicModel);
                var el_2 = createEl(id, targetElParent, elOption.type, elMap);
                if (el_2) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$customGraphicTransition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["applyUpdateTransition"])(el_2, elOptionCleaned, graphicModel, {
                        isInit: true
                    });
                    updateCommonAttrs(el_2, elOption, globalZ, globalZLevel);
                }
            } else if ($action === 'remove') {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$customGraphicTransition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateLeaveTo"])(elExisting, elOption);
                removeEl(elExisting, elOption, elMap, graphicModel);
            }
            var el = elMap.get(id);
            if (el && textContentOption) {
                if (isMerge) {
                    var textContentExisting = el.getTextContent();
                    textContentExisting ? textContentExisting.attr(textContentOption) : el.setTextContent(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Text$3e$__["Text"](textContentOption));
                } else if (isReplace) {
                    el.setTextContent(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Text$3e$__["Text"](textContentOption));
                }
            }
            if (el) {
                var clipPathOption = elOption.clipPath;
                if (clipPathOption) {
                    var clipPathType = clipPathOption.type;
                    var clipPath = void 0;
                    var isInit = false;
                    if (isMerge) {
                        var oldClipPath = el.getClipPath();
                        isInit = !oldClipPath || inner(oldClipPath).type !== clipPathType;
                        clipPath = isInit ? newEl(clipPathType) : oldClipPath;
                    } else if (isReplace) {
                        isInit = true;
                        clipPath = newEl(clipPathType);
                    }
                    el.setClipPath(clipPath);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$customGraphicTransition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["applyUpdateTransition"])(clipPath, clipPathOption, graphicModel, {
                        isInit: isInit
                    });
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$customGraphicKeyframeAnimation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["applyKeyframeAnimation"])(clipPath, clipPathOption.keyframeAnimation, graphicModel);
                }
                var elInner = inner(el);
                el.setTextConfig(textConfig);
                elInner.option = elOption;
                setEventData(el, graphicModel, elOption);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["setTooltipConfig"]({
                    el: el,
                    componentModel: graphicModel,
                    itemName: el.name,
                    itemTooltipOption: elOption.tooltip
                });
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$customGraphicKeyframeAnimation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["applyKeyframeAnimation"])(el, elOption.keyframeAnimation, graphicModel);
            }
        });
    };
    /**
   * Locate graphic elements.
   */ GraphicComponentView.prototype._relocate = function(graphicModel, api) {
        var elOptions = graphicModel.option.elements;
        var rootGroup = this.group;
        var elMap = this._elMap;
        var apiWidth = api.getWidth();
        var apiHeight = api.getHeight();
        var xy = [
            'x',
            'y'
        ];
        // Top-down to calculate percentage width/height of group
        for(var i = 0; i < elOptions.length; i++){
            var elOption = elOptions[i];
            var id = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertOptionIdName"](elOption.id, null);
            var el = id != null ? elMap.get(id) : null;
            if (!el || !el.isGroup) {
                continue;
            }
            var parentEl = el.parent;
            var isParentRoot = parentEl === rootGroup;
            // Like 'position:absolut' in css, default 0.
            var elInner = inner(el);
            var parentElInner = inner(parentEl);
            elInner.width = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parsePercent"])(elInner.option.width, isParentRoot ? apiWidth : parentElInner.width) || 0;
            elInner.height = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parsePercent"])(elInner.option.height, isParentRoot ? apiHeight : parentElInner.height) || 0;
        }
        // Bottom-up tranvese all elements (consider ec resize) to locate elements.
        for(var i = elOptions.length - 1; i >= 0; i--){
            var elOption = elOptions[i];
            var id = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertOptionIdName"](elOption.id, null);
            var el = id != null ? elMap.get(id) : null;
            if (!el) {
                continue;
            }
            var parentEl = el.parent;
            var parentElInner = inner(parentEl);
            var containerInfo = parentEl === rootGroup ? {
                width: apiWidth,
                height: apiHeight
            } : {
                width: parentElInner.width,
                height: parentElInner.height
            };
            // PENDING
            // Currently, when `bounding: 'all'`, the union bounding rect of the group
            // does not include the rect of [0, 0, group.width, group.height], which
            // is probably weird for users. Should we make a break change for it?
            var layoutPos = {};
            var layouted = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["positionElement"](el, elOption, containerInfo, null, {
                hv: elOption.hv,
                boundingMode: elOption.bounding
            }, layoutPos);
            if (!inner(el).isNew && layouted) {
                var transition = elOption.transition;
                var animatePos = {};
                for(var k = 0; k < xy.length; k++){
                    var key = xy[k];
                    var val = layoutPos[key];
                    if (transition && ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$customGraphicTransition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTransitionAll"])(transition) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["indexOf"](transition, key) >= 0)) {
                        animatePos[key] = val;
                    } else {
                        el[key] = val;
                    }
                }
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateProps"])(el, animatePos, graphicModel, 0);
            } else {
                el.attr(layoutPos);
            }
        }
    };
    /**
   * Clear all elements.
   */ GraphicComponentView.prototype._clear = function() {
        var _this = this;
        var elMap = this._elMap;
        elMap.each(function(el) {
            removeEl(el, inner(el).option, elMap, _this._lastGraphicModel);
        });
        this._elMap = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createHashMap"]();
    };
    GraphicComponentView.prototype.dispose = function() {
        this._clear();
    };
    GraphicComponentView.type = 'graphic';
    return GraphicComponentView;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
;
function newEl(graphicType) {
    if ("TURBOPACK compile-time truthy", 1) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"](graphicType, 'graphic type MUST be set');
    }
    var Clz = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasOwn"](nonShapeGraphicElements, graphicType) ? nonShapeGraphicElements[graphicType] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getShapeClass"](graphicType);
    if ("TURBOPACK compile-time truthy", 1) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"](Clz, "graphic type " + graphicType + " can not be found");
    }
    var el = new Clz({});
    inner(el).type = graphicType;
    return el;
}
function createEl(id, targetElParent, graphicType, elMap) {
    var el = newEl(graphicType);
    targetElParent.add(el);
    elMap.set(id, el);
    inner(el).id = id;
    inner(el).isNew = true;
    return el;
}
function removeEl(elExisting, elOption, elMap, graphicModel) {
    var existElParent = elExisting && elExisting.parent;
    if (existElParent) {
        elExisting.type === 'group' && elExisting.traverse(function(el) {
            removeEl(el, elOption, elMap, graphicModel);
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$customGraphicTransition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["applyLeaveTransition"])(elExisting, elOption, graphicModel);
        elMap.removeKey(inner(elExisting).id);
    }
}
function updateCommonAttrs(el, elOption, defaultZ, defaultZlevel) {
    if (!el.isGroup) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"]([
            [
                'cursor',
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Displayable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].prototype.cursor
            ],
            // We should not support configure z and zlevel in the element level.
            // But seems we didn't limit it previously. So here still use it to avoid breaking.
            [
                'zlevel',
                defaultZlevel || 0
            ],
            [
                'z',
                defaultZ || 0
            ],
            // z2 must not be null/undefined, otherwise sort error may occur.
            [
                'z2',
                0
            ]
        ], function(item) {
            var prop = item[0];
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasOwn"](elOption, prop)) {
                el[prop] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["retrieve2"](elOption[prop], item[1]);
            } else if (el[prop] == null) {
                el[prop] = item[1];
            }
        });
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keys"](elOption), function(key) {
        // Assign event handlers.
        // PENDING: should enumerate all event names or use pattern matching?
        if (key.indexOf('on') === 0) {
            var val = elOption[key];
            el[key] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFunction"](val) ? val : null;
        }
    });
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasOwn"](elOption, 'draggable')) {
        el.draggable = elOption.draggable;
    }
    // Other attributes
    elOption.name != null && (el.name = elOption.name);
    elOption.id != null && (el.id = elOption.id);
}
// Remove unnecessary props to avoid potential problems.
function getCleanedElOption(elOption) {
    elOption = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extend"]({}, elOption);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"]([
        'id',
        'parentId',
        '$action',
        'hv',
        'bounding',
        'textContent',
        'clipPath'
    ].concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LOCATION_PARAMS"]), function(name) {
        delete elOption[name];
    });
    return elOption;
}
function setEventData(el, graphicModel, elOption) {
    var eventData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getECData"])(el).eventData;
    // Simple optimize for large amount of elements that no need event.
    if (!el.silent && !el.ignore && !eventData) {
        eventData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getECData"])(el).eventData = {
            componentType: 'graphic',
            componentIndex: graphicModel.componentIndex,
            name: el.name
        };
    }
    // `elOption.info` enables user to mount some info on
    // elements and use them in event handlers.
    if (eventData) {
        eventData.info = elOption.info;
    }
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/graphic/install.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$graphic$2f$GraphicModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/graphic/GraphicModel.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$graphic$2f$GraphicView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/graphic/GraphicView.js [app-ssr] (ecmascript)");
;
;
;
function install(registers) {
    registers.registerComponentModel(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$graphic$2f$GraphicModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GraphicComponentModel"]);
    registers.registerComponentView(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$graphic$2f$GraphicView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GraphicComponentView"]);
    registers.registerPreprocessor(function(option) {
        var graphicOption = option.graphic;
        // Convert
        // {graphic: [{left: 10, type: 'circle'}, ...]}
        // or
        // {graphic: {left: 10, type: 'circle'}}
        // to
        // {graphic: [{elements: [{left: 10, type: 'circle'}, ...]}]}
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isArray"])(graphicOption)) {
            if (!graphicOption[0] || !graphicOption[0].elements) {
                option.graphic = [
                    {
                        elements: graphicOption
                    }
                ];
            } else {
                // Only one graphic instance can be instantiated. (We don't
                // want that too many views are created in echarts._viewMap.)
                option.graphic = [
                    option.graphic[0]
                ];
            }
        } else if (graphicOption && !graphicOption.elements) {
            option.graphic = [
                {
                    elements: [
                        graphicOption
                    ]
                }
            ];
        }
    });
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/graphic/install.js [app-ssr] (ecmascript) <export install as GraphicComponent>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GraphicComponent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$graphic$2f$install$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["install"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$graphic$2f$install$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/graphic/install.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/brush/preprocessor.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    ()=>brushPreprocessor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js [app-ssr] (ecmascript)");
;
;
var DEFAULT_TOOLBOX_BTNS = [
    'rect',
    'polygon',
    'keep',
    'clear'
];
function brushPreprocessor(option, isNew) {
    var brushComponents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeToArray"])(option ? option.brush : []);
    if (!brushComponents.length) {
        return;
    }
    var brushComponentSpecifiedBtns = [];
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"](brushComponents, function(brushOpt) {
        var tbs = brushOpt.hasOwnProperty('toolbox') ? brushOpt.toolbox : [];
        if (tbs instanceof Array) {
            brushComponentSpecifiedBtns = brushComponentSpecifiedBtns.concat(tbs);
        }
    });
    var toolbox = option && option.toolbox;
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isArray"](toolbox)) {
        toolbox = toolbox[0];
    }
    if (!toolbox) {
        toolbox = {
            feature: {}
        };
        option.toolbox = [
            toolbox
        ];
    }
    var toolboxFeature = toolbox.feature || (toolbox.feature = {});
    var toolboxBrush = toolboxFeature.brush || (toolboxFeature.brush = {});
    var brushTypes = toolboxBrush.type || (toolboxBrush.type = []);
    brushTypes.push.apply(brushTypes, brushComponentSpecifiedBtns);
    removeDuplicate(brushTypes);
    if (isNew && !brushTypes.length) {
        brushTypes.push.apply(brushTypes, DEFAULT_TOOLBOX_BTNS);
    }
}
function removeDuplicate(arr) {
    var map = {};
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"](arr, function(val) {
        map[val] = 1;
    });
    arr.length = 0;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"](map, function(flag, val) {
        arr.push(val);
    });
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/brush/selector.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    "makeBrushCommonSelectorForSeries",
    ()=>makeBrushCommonSelectorForSeries
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$contain$2f$polygon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/contain/polygon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$BoundingRect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/BoundingRect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/graphic.js [app-ssr] (ecmascript) <locals>");
;
;
;
function makeBrushCommonSelectorForSeries(area) {
    var brushType = area.brushType;
    // Do not use function binding or curry for performance.
    var selectors = {
        point: function(itemLayout) {
            return selector[brushType].point(itemLayout, selectors, area);
        },
        rect: function(itemLayout) {
            return selector[brushType].rect(itemLayout, selectors, area);
        }
    };
    return selectors;
}
var selector = {
    lineX: getLineSelectors(0),
    lineY: getLineSelectors(1),
    rect: {
        point: function(itemLayout, selectors, area) {
            return itemLayout && area.boundingRect.contain(itemLayout[0], itemLayout[1]);
        },
        rect: function(itemLayout, selectors, area) {
            return itemLayout && area.boundingRect.intersect(itemLayout);
        }
    },
    polygon: {
        point: function(itemLayout, selectors, area) {
            return itemLayout && area.boundingRect.contain(itemLayout[0], itemLayout[1]) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$contain$2f$polygon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["contain"](area.range, itemLayout[0], itemLayout[1]);
        },
        rect: function(itemLayout, selectors, area) {
            var points = area.range;
            if (!itemLayout || points.length <= 1) {
                return false;
            }
            var x = itemLayout.x;
            var y = itemLayout.y;
            var width = itemLayout.width;
            var height = itemLayout.height;
            var p = points[0];
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$contain$2f$polygon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["contain"](points, x, y) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$contain$2f$polygon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["contain"](points, x + width, y) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$contain$2f$polygon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["contain"](points, x, y + height) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$contain$2f$polygon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["contain"](points, x + width, y + height) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$BoundingRect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].create(itemLayout).contain(p[0], p[1]) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["linePolygonIntersect"])(x, y, x + width, y, points) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["linePolygonIntersect"])(x, y, x, y + height, points) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["linePolygonIntersect"])(x + width, y, x + width, y + height, points) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["linePolygonIntersect"])(x, y + height, x + width, y + height, points)) {
                return true;
            }
        }
    }
};
function getLineSelectors(xyIndex) {
    var xy = [
        'x',
        'y'
    ];
    var wh = [
        'width',
        'height'
    ];
    return {
        point: function(itemLayout, selectors, area) {
            if (itemLayout) {
                var range = area.range;
                var p = itemLayout[xyIndex];
                return inLineRange(p, range);
            }
        },
        rect: function(itemLayout, selectors, area) {
            if (itemLayout) {
                var range = area.range;
                var layoutRange = [
                    itemLayout[xy[xyIndex]],
                    itemLayout[xy[xyIndex]] + itemLayout[wh[xyIndex]]
                ];
                layoutRange[1] < layoutRange[0] && layoutRange.reverse();
                return inLineRange(layoutRange[0], range) || inLineRange(layoutRange[1], range) || inLineRange(range[0], layoutRange) || inLineRange(range[1], layoutRange);
            }
        }
    };
}
function inLineRange(p, range) {
    return range[0] <= p && p <= range[1];
}
const __TURBOPACK__default__export__ = selector;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/brush/visualEncoding.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    ()=>brushVisual,
    "layoutCovers",
    ()=>layoutCovers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$BoundingRect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/BoundingRect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$visualSolution$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/visualSolution.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$brush$2f$selector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/brush/selector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$throttle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/throttle.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$BrushTargetManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/helper/BrushTargetManager.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
var STATE_LIST = [
    'inBrush',
    'outOfBrush'
];
var DISPATCH_METHOD = '__ecBrushSelect';
var DISPATCH_FLAG = '__ecInBrushSelectEvent';
;
function layoutCovers(ecModel) {
    ecModel.eachComponent({
        mainType: 'brush'
    }, function(brushModel) {
        var brushTargetManager = brushModel.brushTargetManager = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$BrushTargetManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](brushModel.option, ecModel);
        brushTargetManager.setInputRanges(brushModel.areas, ecModel);
    });
}
function brushVisual(ecModel, api, payload) {
    var brushSelected = [];
    var throttleType;
    var throttleDelay;
    ecModel.eachComponent({
        mainType: 'brush'
    }, function(brushModel) {
        payload && payload.type === 'takeGlobalCursor' && brushModel.setBrushOption(payload.key === 'brush' ? payload.brushOption : {
            brushType: false
        });
    });
    layoutCovers(ecModel);
    ecModel.eachComponent({
        mainType: 'brush'
    }, function(brushModel, brushIndex) {
        var thisBrushSelected = {
            brushId: brushModel.id,
            brushIndex: brushIndex,
            brushName: brushModel.name,
            areas: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clone"](brushModel.areas),
            selected: []
        };
        // Every brush component exists in event params, convenient
        // for user to find by index.
        brushSelected.push(thisBrushSelected);
        var brushOption = brushModel.option;
        var brushLink = brushOption.brushLink;
        var linkedSeriesMap = [];
        var selectedDataIndexForLink = [];
        var rangeInfoBySeries = [];
        var hasBrushExists = false;
        if (!brushIndex) {
            // Only the first throttle setting works.
            throttleType = brushOption.throttleType;
            throttleDelay = brushOption.throttleDelay;
        }
        // Add boundingRect and selectors to range.
        var areas = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["map"](brushModel.areas, function(area) {
            var builder = boundingRectBuilders[area.brushType];
            var selectableArea = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaults"]({
                boundingRect: builder ? builder(area) : void 0
            }, area);
            selectableArea.selectors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$brush$2f$selector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeBrushCommonSelectorForSeries"])(selectableArea);
            return selectableArea;
        });
        var visualMappings = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$visualSolution$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVisualMappings"](brushModel.option, STATE_LIST, function(mappingOption) {
            mappingOption.mappingMethod = 'fixed';
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isArray"](brushLink) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"](brushLink, function(seriesIndex) {
            linkedSeriesMap[seriesIndex] = 1;
        });
        function linkOthers(seriesIndex) {
            return brushLink === 'all' || !!linkedSeriesMap[seriesIndex];
        }
        // If no supported brush or no brush on the series,
        // all visuals should be in original state.
        function brushed(rangeInfoList) {
            return !!rangeInfoList.length;
        }
        /**
     * Logic for each series: (If the logic has to be modified one day, do it carefully!)
     *
     * ( brushed ┬ && ┬hasBrushExist ┬ && linkOthers  ) => StepA: ┬record, ┬ StepB: ┬visualByRecord.
     *   !brushed┘    ├hasBrushExist ┤                            └nothing,┘        ├visualByRecord.
     *                └!hasBrushExist┘                                              └nothing.
     * ( !brushed  && ┬hasBrushExist ┬ && linkOthers  ) => StepA:  nothing,  StepB: ┬visualByRecord.
     *                └!hasBrushExist┘                                              └nothing.
     * ( brushed ┬ &&                     !linkOthers ) => StepA:  nothing,  StepB: ┬visualByCheck.
     *   !brushed┘                                                                  └nothing.
     * ( !brushed  &&                     !linkOthers ) => StepA:  nothing,  StepB:  nothing.
     */ // Step A
        ecModel.eachSeries(function(seriesModel, seriesIndex) {
            var rangeInfoList = rangeInfoBySeries[seriesIndex] = [];
            seriesModel.subType === 'parallel' ? stepAParallel(seriesModel, seriesIndex) : stepAOthers(seriesModel, seriesIndex, rangeInfoList);
        });
        function stepAParallel(seriesModel, seriesIndex) {
            var coordSys = seriesModel.coordinateSystem;
            hasBrushExists = hasBrushExists || coordSys.hasAxisBrushed();
            linkOthers(seriesIndex) && coordSys.eachActiveState(seriesModel.getData(), function(activeState, dataIndex) {
                activeState === 'active' && (selectedDataIndexForLink[dataIndex] = 1);
            });
        }
        function stepAOthers(seriesModel, seriesIndex, rangeInfoList) {
            if (!seriesModel.brushSelector || brushModelNotControll(brushModel, seriesIndex)) {
                return;
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"](areas, function(area) {
                if (brushModel.brushTargetManager.controlSeries(area, seriesModel, ecModel)) {
                    rangeInfoList.push(area);
                }
                hasBrushExists = hasBrushExists || brushed(rangeInfoList);
            });
            if (linkOthers(seriesIndex) && brushed(rangeInfoList)) {
                var data_1 = seriesModel.getData();
                data_1.each(function(dataIndex) {
                    if (checkInRange(seriesModel, rangeInfoList, data_1, dataIndex)) {
                        selectedDataIndexForLink[dataIndex] = 1;
                    }
                });
            }
        }
        // Step B
        ecModel.eachSeries(function(seriesModel, seriesIndex) {
            var seriesBrushSelected = {
                seriesId: seriesModel.id,
                seriesIndex: seriesIndex,
                seriesName: seriesModel.name,
                dataIndex: []
            };
            // Every series exists in event params, convenient
            // for user to find series by seriesIndex.
            thisBrushSelected.selected.push(seriesBrushSelected);
            var rangeInfoList = rangeInfoBySeries[seriesIndex];
            var data = seriesModel.getData();
            var getValueState = linkOthers(seriesIndex) ? function(dataIndex) {
                return selectedDataIndexForLink[dataIndex] ? (seriesBrushSelected.dataIndex.push(data.getRawIndex(dataIndex)), 'inBrush') : 'outOfBrush';
            } : function(dataIndex) {
                return checkInRange(seriesModel, rangeInfoList, data, dataIndex) ? (seriesBrushSelected.dataIndex.push(data.getRawIndex(dataIndex)), 'inBrush') : 'outOfBrush';
            };
            // If no supported brush or no brush, all visuals are in original state.
            (linkOthers(seriesIndex) ? hasBrushExists : brushed(rangeInfoList)) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$visualSolution$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["applyVisual"](STATE_LIST, visualMappings, data, getValueState);
        });
    });
    dispatchAction(api, throttleType, throttleDelay, brushSelected, payload);
}
;
function dispatchAction(api, throttleType, throttleDelay, brushSelected, payload) {
    // This event will not be triggered when `setOpion`, otherwise dead lock may
    // triggered when do `setOption` in event listener, which we do not find
    // satisfactory way to solve yet. Some considered resolutions:
    // (a) Diff with prevoius selected data ant only trigger event when changed.
    // But store previous data and diff precisely (i.e., not only by dataIndex, but
    // also detect value changes in selected data) might bring complexity or fragility.
    // (b) Use spectial param like `silent` to suppress event triggering.
    // But such kind of volatile param may be weird in `setOption`.
    if (!payload) {
        return;
    }
    var zr = api.getZr();
    if (zr[DISPATCH_FLAG]) {
        return;
    }
    if (!zr[DISPATCH_METHOD]) {
        zr[DISPATCH_METHOD] = doDispatch;
    }
    var fn = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$throttle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createOrUpdate"](zr, DISPATCH_METHOD, throttleDelay, throttleType);
    fn(api, brushSelected);
}
function doDispatch(api, brushSelected) {
    if (!api.isDisposed()) {
        var zr = api.getZr();
        zr[DISPATCH_FLAG] = true;
        api.dispatchAction({
            type: 'brushSelect',
            batch: brushSelected
        });
        zr[DISPATCH_FLAG] = false;
    }
}
function checkInRange(seriesModel, rangeInfoList, data, dataIndex) {
    for(var i = 0, len = rangeInfoList.length; i < len; i++){
        var area = rangeInfoList[i];
        if (seriesModel.brushSelector(dataIndex, data, area.selectors, area)) {
            return true;
        }
    }
}
function brushModelNotControll(brushModel, seriesIndex) {
    var seriesIndices = brushModel.option.seriesIndex;
    return seriesIndices != null && seriesIndices !== 'all' && (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isArray"](seriesIndices) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["indexOf"](seriesIndices, seriesIndex) < 0 : seriesIndex !== seriesIndices);
}
var boundingRectBuilders = {
    rect: function(area) {
        return getBoundingRectFromMinMax(area.range);
    },
    polygon: function(area) {
        var minMax;
        var range = area.range;
        for(var i = 0, len = range.length; i < len; i++){
            minMax = minMax || [
                [
                    Infinity,
                    -Infinity
                ],
                [
                    Infinity,
                    -Infinity
                ]
            ];
            var rg = range[i];
            rg[0] < minMax[0][0] && (minMax[0][0] = rg[0]);
            rg[0] > minMax[0][1] && (minMax[0][1] = rg[0]);
            rg[1] < minMax[1][0] && (minMax[1][0] = rg[1]);
            rg[1] > minMax[1][1] && (minMax[1][1] = rg[1]);
        }
        return minMax && getBoundingRectFromMinMax(minMax);
    }
};
function getBoundingRectFromMinMax(minMax) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$BoundingRect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](minMax[0][0], minMax[1][0], minMax[0][1] - minMax[0][0], minMax[1][1] - minMax[1][0]);
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/brush/BrushView.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$BrushController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/helper/BrushController.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$brush$2f$visualEncoding$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/brush/visualEncoding.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/view/Component.js [app-ssr] (ecmascript)");
;
;
;
;
;
var BrushView = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(BrushView, _super);
    function BrushView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = BrushView.type;
        return _this;
    }
    BrushView.prototype.init = function(ecModel, api) {
        this.ecModel = ecModel;
        this.api = api;
        this.model;
        (this._brushController = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$BrushController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](api.getZr())).on('brush', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bind"](this._onBrush, this)).mount();
    };
    BrushView.prototype.render = function(brushModel, ecModel, api, payload) {
        this.model = brushModel;
        this._updateController(brushModel, ecModel, api, payload);
    };
    BrushView.prototype.updateTransform = function(brushModel, ecModel, api, payload) {
        // PENDING: `updateTransform` is a little tricky, whose layout need
        // to be calculate mandatorily and other stages will not be performed.
        // Take care the correctness of the logic. See #11754 .
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$brush$2f$visualEncoding$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["layoutCovers"])(ecModel);
        this._updateController(brushModel, ecModel, api, payload);
    };
    BrushView.prototype.updateVisual = function(brushModel, ecModel, api, payload) {
        this.updateTransform(brushModel, ecModel, api, payload);
    };
    BrushView.prototype.updateView = function(brushModel, ecModel, api, payload) {
        this._updateController(brushModel, ecModel, api, payload);
    };
    BrushView.prototype._updateController = function(brushModel, ecModel, api, payload) {
        // Do not update controller when drawing.
        (!payload || payload.$from !== brushModel.id) && this._brushController.setPanels(brushModel.brushTargetManager.makePanelOpts(api)).enableBrush(brushModel.brushOption).updateCovers(brushModel.areas.slice());
    };
    // updateLayout: updateController,
    // updateVisual: updateController,
    BrushView.prototype.dispose = function() {
        this._brushController.dispose();
    };
    BrushView.prototype._onBrush = function(eventParam) {
        var modelId = this.model.id;
        var areas = this.model.brushTargetManager.setOutputRanges(eventParam.areas, this.ecModel);
        // Action is not dispatched on drag end, because the drag end
        // emits the same params with the last drag move event, and
        // may have some delay when using touch pad, which makes
        // animation not smooth (when using debounce).
        (!eventParam.isEnd || eventParam.removeOnClick) && this.api.dispatchAction({
            type: 'brush',
            brushId: modelId,
            areas: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clone"](areas),
            $from: modelId
        });
        eventParam.isEnd && this.api.dispatchAction({
            type: 'brushEnd',
            brushId: modelId,
            areas: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clone"](areas),
            $from: modelId
        });
    };
    BrushView.type = 'brush';
    return BrushView;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = BrushView;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/brush/BrushModel.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$visualSolution$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/visualSolution.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/Model.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/Component.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/tokens.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
var BrushModel = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(BrushModel, _super);
    function BrushModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = BrushModel.type;
        /**
     * @readOnly
     */ _this.areas = [];
        /**
     * Current brush painting area settings.
     * @readOnly
     */ _this.brushOption = {};
        return _this;
    }
    BrushModel.prototype.optionUpdated = function(newOption, isInit) {
        var thisOption = this.option;
        !isInit && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$visualSolution$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replaceVisualOption"](thisOption, newOption, [
            'inBrush',
            'outOfBrush'
        ]);
        var inBrush = thisOption.inBrush = thisOption.inBrush || {};
        // Always give default visual, consider setOption at the second time.
        thisOption.outOfBrush = thisOption.outOfBrush || {
            color: this.option.defaultOutOfBrushColor
        };
        if (!inBrush.hasOwnProperty('liftZ')) {
            // Bigger than the highlight z lift, otherwise it will
            // be effected by the highlight z when brush.
            inBrush.liftZ = 5;
        }
    };
    /**
   * If `areas` is null/undefined, range state remain.
   */ BrushModel.prototype.setAreas = function(areas) {
        if ("TURBOPACK compile-time truthy", 1) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isArray"](areas));
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"](areas, function(area) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"](area.brushType, 'Illegal areas');
            });
        }
        // If areas is null/undefined, range state remain.
        // This helps user to dispatchAction({type: 'brush'}) with no areas
        // set but just want to get the current brush select info from a `brush` event.
        if (!areas) {
            return;
        }
        this.areas = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["map"](areas, function(area) {
            return generateBrushOption(this.option, area);
        }, this);
    };
    /**
   * Set the current painting brush option.
   */ BrushModel.prototype.setBrushOption = function(brushOption) {
        this.brushOption = generateBrushOption(this.option, brushOption);
        this.brushType = this.brushOption.brushType;
    };
    BrushModel.type = 'brush';
    BrushModel.dependencies = [
        'geo',
        'grid',
        'xAxis',
        'yAxis',
        'parallel',
        'series'
    ];
    BrushModel.defaultOption = {
        seriesIndex: 'all',
        brushType: 'rect',
        brushMode: 'single',
        transformable: true,
        brushStyle: {
            borderWidth: 1,
            color: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].color.backgroundTint,
            borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].color.borderTint
        },
        throttleType: 'fixRate',
        throttleDelay: 0,
        removeOnClick: true,
        z: 10000,
        defaultOutOfBrushColor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].color.disabled
    };
    return BrushModel;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
function generateBrushOption(option, brushOption) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["merge"]({
        brushType: option.brushType,
        brushMode: option.brushMode,
        transformable: option.transformable,
        brushStyle: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](option.brushStyle).getItemStyle(),
        removeOnClick: option.removeOnClick,
        z: option.z
    }, brushOption, true);
}
const __TURBOPACK__default__export__ = BrushModel;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/brush/install.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$brush$2f$preprocessor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/brush/preprocessor.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$brush$2f$BrushView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/brush/BrushView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$brush$2f$BrushModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/brush/BrushModel.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$brush$2f$visualEncoding$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/brush/visualEncoding.js [app-ssr] (ecmascript)");
// TODO
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$feature$2f$Brush$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/toolbox/feature/Brush.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$featureManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/toolbox/featureManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
function install(registers) {
    registers.registerComponentView(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$brush$2f$BrushView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    registers.registerComponentModel(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$brush$2f$BrushModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    registers.registerPreprocessor(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$brush$2f$preprocessor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    registers.registerVisual(registers.PRIORITY.VISUAL.BRUSH, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$brush$2f$visualEncoding$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    registers.registerAction({
        type: 'brush',
        event: 'brush',
        update: 'updateVisual'
    }, function(payload, ecModel) {
        ecModel.eachComponent({
            mainType: 'brush',
            query: payload
        }, function(brushModel) {
            brushModel.setAreas(payload.areas);
        });
    });
    /**
   * payload: {
   *      brushComponents: [
   *          {
   *              brushId,
   *              brushIndex,
   *              brushName,
   *              series: [
   *                  {
   *                      seriesId,
   *                      seriesIndex,
   *                      seriesName,
   *                      rawIndices: [21, 34, ...]
   *                  },
   *                  ...
   *              ]
   *          },
   *          ...
   *      ]
   * }
   */ registers.registerAction({
        type: 'brushSelect',
        event: 'brushSelected',
        update: 'none'
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"]);
    registers.registerAction({
        type: 'brushEnd',
        event: 'brushEnd',
        update: 'none'
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$featureManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerFeature"])('brush', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$feature$2f$Brush$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/brush/install.js [app-ssr] (ecmascript) <export install as BrushComponent>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BrushComponent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$brush$2f$install$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["install"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$brush$2f$install$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/brush/install.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/timeline/TimelineModel.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$SeriesData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/data/SeriesData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/tokens.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
var TimelineModel = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(TimelineModel, _super);
    function TimelineModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = TimelineModel.type;
        _this.layoutMode = 'box';
        return _this;
    }
    /**
   * @override
   */ TimelineModel.prototype.init = function(option, parentModel, ecModel) {
        this.mergeDefaultAndTheme(option, ecModel);
        this._initData();
    };
    /**
   * @override
   */ TimelineModel.prototype.mergeOption = function(option) {
        _super.prototype.mergeOption.apply(this, arguments);
        this._initData();
    };
    TimelineModel.prototype.setCurrentIndex = function(currentIndex) {
        if (currentIndex == null) {
            currentIndex = this.option.currentIndex;
        }
        var count = this._data.count();
        if (this.option.loop) {
            currentIndex = (currentIndex % count + count) % count;
        } else {
            currentIndex >= count && (currentIndex = count - 1);
            currentIndex < 0 && (currentIndex = 0);
        }
        this.option.currentIndex = currentIndex;
    };
    /**
   * @return {number} currentIndex
   */ TimelineModel.prototype.getCurrentIndex = function() {
        return this.option.currentIndex;
    };
    /**
   * @return {boolean}
   */ TimelineModel.prototype.isIndexMax = function() {
        return this.getCurrentIndex() >= this._data.count() - 1;
    };
    /**
   * @param {boolean} state true: play, false: stop
   */ TimelineModel.prototype.setPlayState = function(state) {
        this.option.autoPlay = !!state;
    };
    /**
   * @return {boolean} true: play, false: stop
   */ TimelineModel.prototype.getPlayState = function() {
        return !!this.option.autoPlay;
    };
    /**
   * @private
   */ TimelineModel.prototype._initData = function() {
        var thisOption = this.option;
        var dataArr = thisOption.data || [];
        var axisType = thisOption.axisType;
        var names = this._names = [];
        var processedDataArr;
        if (axisType === 'category') {
            processedDataArr = [];
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(dataArr, function(item, index) {
                var value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertOptionIdName"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDataItemValue"])(item), '');
                var newItem;
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isObject"])(item)) {
                    newItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clone"])(item);
                    newItem.value = index;
                } else {
                    newItem = index;
                }
                processedDataArr.push(newItem);
                names.push(value);
            });
        } else {
            processedDataArr = dataArr;
        }
        var dimType = {
            category: 'ordinal',
            time: 'time',
            value: 'number'
        }[axisType] || 'number';
        var data = this._data = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$SeriesData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]([
            {
                name: 'value',
                type: dimType
            }
        ], this);
        data.initData(processedDataArr, names);
    };
    TimelineModel.prototype.getData = function() {
        return this._data;
    };
    /**
   * @public
   * @return {Array.<string>} categoreis
   */ TimelineModel.prototype.getCategories = function() {
        if (this.get('axisType') === 'category') {
            return this._names.slice();
        }
    };
    TimelineModel.type = 'timeline';
    /**
   * @protected
   */ TimelineModel.defaultOption = {
        // zlevel: 0,                  // 一级层叠
        z: 4,
        show: true,
        axisType: 'time',
        realtime: true,
        left: '20%',
        top: null,
        right: '20%',
        bottom: 0,
        width: null,
        height: 40,
        padding: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].size.m,
        controlPosition: 'left',
        autoPlay: false,
        rewind: false,
        loop: true,
        playInterval: 2000,
        currentIndex: 0,
        itemStyle: {},
        label: {
            color: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].color.secondary
        },
        data: []
    };
    return TimelineModel;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = TimelineModel;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/timeline/SliderTimelineModel.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$timeline$2f$TimelineModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/timeline/TimelineModel.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$mixin$2f$dataFormat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/mixin/dataFormat.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/component.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/tokens.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
var SliderTimelineModel = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(SliderTimelineModel, _super);
    function SliderTimelineModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = SliderTimelineModel.type;
        return _this;
    }
    SliderTimelineModel.type = 'timeline.slider';
    /**
   * @protected
   */ SliderTimelineModel.defaultOption = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["inheritDefaultOption"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$timeline$2f$TimelineModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].defaultOption, {
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].color.border,
        borderWidth: 0,
        orient: 'horizontal',
        inverse: false,
        tooltip: {
            trigger: 'item' // data item may also have tootip attr.
        },
        symbol: 'circle',
        symbolSize: 12,
        lineStyle: {
            show: true,
            width: 2,
            color: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].color.accent10
        },
        label: {
            position: 'auto',
            // When using number, label position is not
            // restricted by viewRect.
            // positive: right/bottom, negative: left/top
            show: true,
            interval: 'auto',
            rotate: 0,
            // formatter: null,
            // 其余属性默认使用全局文本样式，详见TEXTSTYLE
            color: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].color.tertiary
        },
        itemStyle: {
            color: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].color.accent20,
            borderWidth: 0
        },
        checkpointStyle: {
            symbol: 'circle',
            symbolSize: 15,
            color: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].color.accent50,
            borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].color.accent50,
            borderWidth: 0,
            shadowBlur: 0,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowColor: 'rgba(0, 0, 0, 0)',
            // borderColor: 'rgba(194,53,49, 0.5)',
            animation: true,
            animationDuration: 300,
            animationEasing: 'quinticInOut'
        },
        controlStyle: {
            show: true,
            showPlayBtn: true,
            showPrevBtn: true,
            showNextBtn: true,
            itemSize: 24,
            itemGap: 12,
            position: 'left',
            playIcon: 'path://M15 0C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15C0 6.71573 6.71573 0 15 0ZM15 3C8.37258 3 3 8.37258 3 15C3 21.6274 8.37258 27 15 27C21.6274 27 27 21.6274 27 15C27 8.37258 21.6274 3 15 3ZM11.5 10.6699C11.5 9.90014 12.3333 9.41887 13 9.80371L20.5 14.1338C21.1667 14.5187 21.1667 15.4813 20.5 15.8662L13 20.1963C12.3333 20.5811 11.5 20.0999 11.5 19.3301V10.6699Z',
            stopIcon: 'path://M15 0C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15C0 6.71573 6.71573 0 15 0ZM15 3C8.37258 3 3 8.37258 3 15C3 21.6274 8.37258 27 15 27C21.6274 27 27 21.6274 27 15C27 8.37258 21.6274 3 15 3ZM11.5 10C12.3284 10 13 10.6716 13 11.5V18.5C13 19.3284 12.3284 20 11.5 20C10.6716 20 10 19.3284 10 18.5V11.5C10 10.6716 10.6716 10 11.5 10ZM18.5 10C19.3284 10 20 10.6716 20 11.5V18.5C20 19.3284 19.3284 20 18.5 20C17.6716 20 17 19.3284 17 18.5V11.5C17 10.6716 17.6716 10 18.5 10Z',
            // eslint-disable-next-line max-len
            nextIcon: 'path://M0.838834 18.7383C0.253048 18.1525 0.253048 17.2028 0.838834 16.617L7.55635 9.89949L0.838834 3.18198C0.253048 2.59619 0.253048 1.64645 0.838834 1.06066C1.42462 0.474874 2.37437 0.474874 2.96015 1.06066L10.7383 8.83883L10.8412 8.95277C11.2897 9.50267 11.2897 10.2963 10.8412 10.8462L10.7383 10.9602L2.96015 18.7383C2.37437 19.3241 1.42462 19.3241 0.838834 18.7383Z',
            // eslint-disable-next-line max-len
            prevIcon: 'path://M10.9602 1.06066C11.5459 1.64645 11.5459 2.59619 10.9602 3.18198L4.24264 9.89949L10.9602 16.617C11.5459 17.2028 11.5459 18.1525 10.9602 18.7383C10.3744 19.3241 9.42462 19.3241 8.83883 18.7383L1.06066 10.9602L0.957771 10.8462C0.509245 10.2963 0.509245 9.50267 0.957771 8.95277L1.06066 8.83883L8.83883 1.06066C9.42462 0.474874 10.3744 0.474874 10.9602 1.06066Z',
            prevBtnSize: 18,
            nextBtnSize: 18,
            color: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].color.accent50,
            borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].color.accent50,
            borderWidth: 0
        },
        emphasis: {
            label: {
                show: true,
                // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                color: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].color.accent60
            },
            itemStyle: {
                color: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].color.accent60,
                borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].color.accent60
            },
            controlStyle: {
                color: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].color.accent70,
                borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].color.accent70
            }
        },
        progress: {
            lineStyle: {
                color: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].color.accent30
            },
            itemStyle: {
                color: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].color.accent40
            }
        },
        data: []
    });
    return SliderTimelineModel;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$timeline$2f$TimelineModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mixin"])(SliderTimelineModel, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$mixin$2f$dataFormat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DataFormatMixin"].prototype);
const __TURBOPACK__default__export__ = SliderTimelineModel;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/timeline/TimelineView.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
;
;
var TimelineView = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(TimelineView, _super);
    function TimelineView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = TimelineView.type;
        return _this;
    }
    TimelineView.type = 'timeline';
    return TimelineView;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = TimelineView;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/timeline/TimelineAxis.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$Axis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/Axis.js [app-ssr] (ecmascript)");
;
;
/**
 * Extend axis 2d
 */ var TimelineAxis = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(TimelineAxis, _super);
    function TimelineAxis(dim, scale, coordExtent, axisType) {
        var _this = _super.call(this, dim, scale, coordExtent) || this;
        _this.type = axisType || 'value';
        return _this;
    }
    /**
   * @override
   */ TimelineAxis.prototype.getLabelModel = function() {
        // Force override
        return this.model.getModel('label');
    };
    /**
   * @override
   */ TimelineAxis.prototype.isHorizontal = function() {
        return this.model.get('orient') === 'horizontal';
    };
    return TimelineAxis;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$Axis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = TimelineAxis;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/timeline/SliderTimelineView.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$BoundingRect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/BoundingRect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$matrix$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/matrix.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Group.js [app-ssr] (ecmascript) <export default as Group>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Line$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Line.js [app-ssr] (ecmascript) <export default as Line>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Text$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Text.js [app-ssr] (ecmascript) <export default as Text>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/graphic.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/label/labelStyle.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/layout.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$timeline$2f$TimelineView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/timeline/TimelineView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$timeline$2f$TimelineAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/timeline/TimelineAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$symbol$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/symbol.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/number.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$Ordinal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/scale/Ordinal.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$Time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/scale/Time.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$Interval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/scale/Interval.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$contain$2f$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/contain/text.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/innerStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/states.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$tooltipMarkup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/tooltip/tooltipMarkup.js [app-ssr] (ecmascript)");
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
var labelDataIndexStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeInner"])();
var SliderTimelineView = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(SliderTimelineView, _super);
    function SliderTimelineView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = SliderTimelineView.type;
        return _this;
    }
    SliderTimelineView.prototype.init = function(ecModel, api) {
        this.api = api;
    };
    /**
   * @override
   */ SliderTimelineView.prototype.render = function(timelineModel, ecModel, api) {
        this.model = timelineModel;
        this.api = api;
        this.ecModel = ecModel;
        this.group.removeAll();
        if (timelineModel.get('show', true)) {
            var layoutInfo_1 = this._layout(timelineModel, api);
            var mainGroup_1 = this._createGroup('_mainGroup');
            var labelGroup = this._createGroup('_labelGroup');
            var axis_1 = this._axis = this._createAxis(layoutInfo_1, timelineModel);
            timelineModel.formatTooltip = function(dataIndex) {
                var name = axis_1.scale.getLabel({
                    value: dataIndex
                });
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$tooltipMarkup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createTooltipMarkup"])('nameValue', {
                    noName: true,
                    value: name
                });
            };
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])([
                'AxisLine',
                'AxisTick',
                'Control',
                'CurrentPointer'
            ], function(name) {
                this['_render' + name](layoutInfo_1, mainGroup_1, axis_1, timelineModel);
            }, this);
            this._renderAxisLabel(layoutInfo_1, labelGroup, axis_1, timelineModel);
            this._position(layoutInfo_1, timelineModel);
        }
        this._doPlayStop();
        this._updateTicksStatus();
    };
    /**
   * @override
   */ SliderTimelineView.prototype.remove = function() {
        this._clearTimer();
        this.group.removeAll();
    };
    /**
   * @override
   */ SliderTimelineView.prototype.dispose = function() {
        this._clearTimer();
    };
    SliderTimelineView.prototype._layout = function(timelineModel, api) {
        var labelPosOpt = timelineModel.get([
            'label',
            'position'
        ]);
        var orient = timelineModel.get('orient');
        var viewRect = getViewRect(timelineModel, api);
        var parsedLabelPos;
        // Auto label offset.
        if (labelPosOpt == null || labelPosOpt === 'auto') {
            parsedLabelPos = orient === 'horizontal' ? viewRect.y + viewRect.height / 2 < api.getHeight() / 2 ? '-' : '+' : viewRect.x + viewRect.width / 2 < api.getWidth() / 2 ? '+' : '-';
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(labelPosOpt)) {
            parsedLabelPos = ({
                horizontal: {
                    top: '-',
                    bottom: '+'
                },
                vertical: {
                    left: '-',
                    right: '+'
                }
            })[orient][labelPosOpt];
        } else {
            // is number
            parsedLabelPos = labelPosOpt;
        }
        var labelAlignMap = {
            horizontal: 'center',
            vertical: parsedLabelPos >= 0 || parsedLabelPos === '+' ? 'left' : 'right'
        };
        var labelBaselineMap = {
            horizontal: parsedLabelPos >= 0 || parsedLabelPos === '+' ? 'top' : 'bottom',
            vertical: 'middle'
        };
        var rotationMap = {
            horizontal: 0,
            vertical: PI / 2
        };
        // Position
        var mainLength = orient === 'vertical' ? viewRect.height : viewRect.width;
        var controlModel = timelineModel.getModel('controlStyle');
        var showControl = controlModel.get('show', true);
        var controlSize = showControl ? controlModel.get('itemSize') : 0;
        var controlGap = showControl ? controlModel.get('itemGap') : 0;
        var sizePlusGap = controlSize + controlGap;
        // Special label rotate.
        var labelRotation = timelineModel.get([
            'label',
            'rotate'
        ]) || 0;
        labelRotation = labelRotation * PI / 180; // To radian.
        var playPosition;
        var prevBtnPosition;
        var nextBtnPosition;
        var controlPosition = controlModel.get('position', true);
        var showPlayBtn = showControl && controlModel.get('showPlayBtn', true);
        var showPrevBtn = showControl && controlModel.get('showPrevBtn', true);
        var showNextBtn = showControl && controlModel.get('showNextBtn', true);
        var xLeft = 0;
        var xRight = mainLength;
        // position[0] means left, position[1] means middle.
        if (controlPosition === 'left' || controlPosition === 'bottom') {
            showPlayBtn && (playPosition = [
                0,
                0
            ], xLeft += sizePlusGap);
            showPrevBtn && (prevBtnPosition = [
                xLeft,
                0
            ], xLeft += sizePlusGap);
            showNextBtn && (nextBtnPosition = [
                xRight - controlSize,
                0
            ], xRight -= sizePlusGap);
        } else {
            // 'top' 'right'
            showPlayBtn && (playPosition = [
                xRight - controlSize,
                0
            ], xRight -= sizePlusGap);
            showPrevBtn && (prevBtnPosition = [
                0,
                0
            ], xLeft += sizePlusGap);
            showNextBtn && (nextBtnPosition = [
                xRight - controlSize,
                0
            ], xRight -= sizePlusGap);
        }
        var axisExtent = [
            xLeft,
            xRight
        ];
        if (timelineModel.get('inverse')) {
            axisExtent.reverse();
        }
        return {
            viewRect: viewRect,
            mainLength: mainLength,
            orient: orient,
            rotation: rotationMap[orient],
            labelRotation: labelRotation,
            labelPosOpt: parsedLabelPos,
            labelAlign: timelineModel.get([
                'label',
                'align'
            ]) || labelAlignMap[orient],
            labelBaseline: timelineModel.get([
                'label',
                'verticalAlign'
            ]) || timelineModel.get([
                'label',
                'baseline'
            ]) || labelBaselineMap[orient],
            // Based on mainGroup.
            playPosition: playPosition,
            prevBtnPosition: prevBtnPosition,
            nextBtnPosition: nextBtnPosition,
            axisExtent: axisExtent,
            controlSize: controlSize,
            controlGap: controlGap
        };
    };
    SliderTimelineView.prototype._position = function(layoutInfo, timelineModel) {
        // Position is be called finally, because bounding rect is needed for
        // adapt content to fill viewRect (auto adapt offset).
        // Timeline may be not all in the viewRect when 'offset' is specified
        // as a number, because it is more appropriate that label aligns at
        // 'offset' but not the other edge defined by viewRect.
        var mainGroup = this._mainGroup;
        var labelGroup = this._labelGroup;
        var viewRect = layoutInfo.viewRect;
        if (layoutInfo.orient === 'vertical') {
            // transform to horizontal, inverse rotate by left-top point.
            var m = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$matrix$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"]();
            var rotateOriginX = viewRect.x;
            var rotateOriginY = viewRect.y + viewRect.height;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$matrix$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translate"](m, m, [
                -rotateOriginX,
                -rotateOriginY
            ]);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$matrix$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotate"](m, m, -PI / 2);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$matrix$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translate"](m, m, [
                rotateOriginX,
                rotateOriginY
            ]);
            viewRect = viewRect.clone();
            viewRect.applyTransform(m);
        }
        var viewBound = getBound(viewRect);
        var mainBound = getBound(mainGroup.getBoundingRect());
        var labelBound = getBound(labelGroup.getBoundingRect());
        var mainPosition = [
            mainGroup.x,
            mainGroup.y
        ];
        var labelsPosition = [
            labelGroup.x,
            labelGroup.y
        ];
        labelsPosition[0] = mainPosition[0] = viewBound[0][0];
        var labelPosOpt = layoutInfo.labelPosOpt;
        if (labelPosOpt == null || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(labelPosOpt)) {
            // '+' or '-'
            var mainBoundIdx = labelPosOpt === '+' ? 0 : 1;
            toBound(mainPosition, mainBound, viewBound, 1, mainBoundIdx);
            toBound(labelsPosition, labelBound, viewBound, 1, 1 - mainBoundIdx);
        } else {
            var mainBoundIdx = labelPosOpt >= 0 ? 0 : 1;
            toBound(mainPosition, mainBound, viewBound, 1, mainBoundIdx);
            labelsPosition[1] = mainPosition[1] + labelPosOpt;
        }
        mainGroup.setPosition(mainPosition);
        labelGroup.setPosition(labelsPosition);
        mainGroup.rotation = labelGroup.rotation = layoutInfo.rotation;
        setOrigin(mainGroup);
        setOrigin(labelGroup);
        function setOrigin(targetGroup) {
            targetGroup.originX = viewBound[0][0] - targetGroup.x;
            targetGroup.originY = viewBound[1][0] - targetGroup.y;
        }
        function getBound(rect) {
            // [[xmin, xmax], [ymin, ymax]]
            return [
                [
                    rect.x,
                    rect.x + rect.width
                ],
                [
                    rect.y,
                    rect.y + rect.height
                ]
            ];
        }
        function toBound(fromPos, from, to, dimIdx, boundIdx) {
            fromPos[dimIdx] += to[dimIdx][boundIdx] - from[dimIdx][boundIdx];
        }
    };
    SliderTimelineView.prototype._createAxis = function(layoutInfo, timelineModel) {
        var data = timelineModel.getData();
        var axisType = timelineModel.get('axisType');
        var scale = createScaleByModel(timelineModel, axisType);
        // Customize scale. The `tickValue` is `dataIndex`.
        scale.getTicks = function() {
            return data.mapArray([
                'value'
            ], function(value) {
                return {
                    value: value
                };
            });
        };
        var dataExtent = data.getDataExtent('value');
        scale.setExtent(dataExtent[0], dataExtent[1]);
        scale.calcNiceTicks();
        var axis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$timeline$2f$TimelineAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]('value', scale, layoutInfo.axisExtent, axisType);
        axis.model = timelineModel;
        return axis;
    };
    SliderTimelineView.prototype._createGroup = function(key) {
        var newGroup = this[key] = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__["Group"]();
        this.group.add(newGroup);
        return newGroup;
    };
    SliderTimelineView.prototype._renderAxisLine = function(layoutInfo, group, axis, timelineModel) {
        var axisExtent = axis.getExtent();
        if (!timelineModel.get([
            'lineStyle',
            'show'
        ])) {
            return;
        }
        var line = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Line$3e$__["Line"]({
            shape: {
                x1: axisExtent[0],
                y1: 0,
                x2: axisExtent[1],
                y2: 0
            },
            style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extend"])({
                lineCap: 'round'
            }, timelineModel.getModel('lineStyle').getLineStyle()),
            silent: true,
            z2: 1
        });
        group.add(line);
        var progressLine = this._progressLine = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Line$3e$__["Line"]({
            shape: {
                x1: axisExtent[0],
                x2: this._currentPointer ? this._currentPointer.x : axisExtent[0],
                y1: 0,
                y2: 0
            },
            style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaults"])({
                lineCap: 'round',
                lineWidth: line.style.lineWidth
            }, timelineModel.getModel([
                'progress',
                'lineStyle'
            ]).getLineStyle()),
            silent: true,
            z2: 1
        });
        group.add(progressLine);
    };
    SliderTimelineView.prototype._renderAxisTick = function(layoutInfo, group, axis, timelineModel) {
        var _this = this;
        var data = timelineModel.getData();
        // Show all ticks, despite ignoring strategy.
        var ticks = axis.scale.getTicks();
        this._tickSymbols = [];
        // The value is dataIndex, see the customized scale.
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(ticks, function(tick) {
            var tickCoord = axis.dataToCoord(tick.value);
            var itemModel = data.getItemModel(tick.value);
            var itemStyleModel = itemModel.getModel('itemStyle');
            var hoverStyleModel = itemModel.getModel([
                'emphasis',
                'itemStyle'
            ]);
            var progressStyleModel = itemModel.getModel([
                'progress',
                'itemStyle'
            ]);
            var symbolOpt = {
                x: tickCoord,
                y: 0,
                onclick: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bind"])(_this._changeTimeline, _this, tick.value)
            };
            var el = giveSymbol(itemModel, itemStyleModel, group, symbolOpt);
            el.ensureState('emphasis').style = hoverStyleModel.getItemStyle();
            el.ensureState('progress').style = progressStyleModel.getItemStyle();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["enableHoverEmphasis"])(el);
            var ecData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getECData"])(el);
            if (itemModel.get('tooltip')) {
                ecData.dataIndex = tick.value;
                ecData.dataModel = timelineModel;
            } else {
                ecData.dataIndex = ecData.dataModel = null;
            }
            _this._tickSymbols.push(el);
        });
    };
    SliderTimelineView.prototype._renderAxisLabel = function(layoutInfo, group, axis, timelineModel) {
        var _this = this;
        var labelModel = axis.getLabelModel();
        if (!labelModel.get('show')) {
            return;
        }
        var data = timelineModel.getData();
        var labels = axis.getViewLabels();
        this._tickLabels = [];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(labels, function(labelItem) {
            // The tickValue is dataIndex, see the customized scale.
            var dataIndex = labelItem.tickValue;
            var itemModel = data.getItemModel(dataIndex);
            var normalLabelModel = itemModel.getModel('label');
            var hoverLabelModel = itemModel.getModel([
                'emphasis',
                'label'
            ]);
            var progressLabelModel = itemModel.getModel([
                'progress',
                'label'
            ]);
            var tickCoord = axis.dataToCoord(labelItem.tickValue);
            var textEl = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Text$3e$__["Text"]({
                x: tickCoord,
                y: 0,
                rotation: layoutInfo.labelRotation - layoutInfo.rotation,
                onclick: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bind"])(_this._changeTimeline, _this, dataIndex),
                silent: false,
                style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createTextStyle"])(normalLabelModel, {
                    text: labelItem.formattedLabel,
                    align: layoutInfo.labelAlign,
                    verticalAlign: layoutInfo.labelBaseline
                })
            });
            textEl.ensureState('emphasis').style = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createTextStyle"])(hoverLabelModel);
            textEl.ensureState('progress').style = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createTextStyle"])(progressLabelModel);
            group.add(textEl);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["enableHoverEmphasis"])(textEl);
            labelDataIndexStore(textEl).dataIndex = dataIndex;
            _this._tickLabels.push(textEl);
        });
    };
    SliderTimelineView.prototype._renderControl = function(layoutInfo, group, axis, timelineModel) {
        var controlSize = layoutInfo.controlSize;
        var rotation = layoutInfo.rotation;
        var itemStyle = timelineModel.getModel('controlStyle').getItemStyle();
        var hoverStyle = timelineModel.getModel([
            'emphasis',
            'controlStyle'
        ]).getItemStyle();
        var playState = timelineModel.getPlayState();
        var inverse = timelineModel.get('inverse', true);
        makeBtn(layoutInfo.nextBtnPosition, 'next', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bind"])(this._changeTimeline, this, inverse ? '-' : '+'));
        makeBtn(layoutInfo.prevBtnPosition, 'prev', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bind"])(this._changeTimeline, this, inverse ? '+' : '-'));
        makeBtn(layoutInfo.playPosition, playState ? 'stop' : 'play', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bind"])(this._handlePlayClick, this, !playState), true);
        function makeBtn(position, iconName, onclick, willRotate) {
            if (!position) {
                return;
            }
            var iconSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$contain$2f$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parsePercent"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["retrieve2"])(timelineModel.get([
                'controlStyle',
                iconName + 'BtnSize'
            ]), controlSize), controlSize);
            var rect = [
                0,
                -iconSize / 2,
                iconSize,
                iconSize
            ];
            var btn = makeControlIcon(timelineModel, iconName + 'Icon', rect, {
                x: position[0],
                y: position[1],
                originX: controlSize / 2,
                originY: 0,
                rotation: willRotate ? -rotation : 0,
                rectHover: true,
                style: itemStyle,
                onclick: onclick
            });
            btn.ensureState('emphasis').style = hoverStyle;
            group.add(btn);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["enableHoverEmphasis"])(btn);
        }
    };
    SliderTimelineView.prototype._renderCurrentPointer = function(layoutInfo, group, axis, timelineModel) {
        var data = timelineModel.getData();
        var currentIndex = timelineModel.getCurrentIndex();
        var pointerModel = data.getItemModel(currentIndex).getModel('checkpointStyle');
        var me = this;
        var callback = {
            onCreate: function(pointer) {
                pointer.draggable = true;
                pointer.drift = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bind"])(me._handlePointerDrag, me);
                pointer.ondragend = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bind"])(me._handlePointerDragend, me);
                pointerMoveTo(pointer, me._progressLine, currentIndex, axis, timelineModel, true);
            },
            onUpdate: function(pointer) {
                pointerMoveTo(pointer, me._progressLine, currentIndex, axis, timelineModel);
            }
        };
        // Reuse when exists, for animation and drag.
        this._currentPointer = giveSymbol(pointerModel, pointerModel, this._mainGroup, {}, this._currentPointer, callback);
    };
    SliderTimelineView.prototype._handlePlayClick = function(nextState) {
        this._clearTimer();
        this.api.dispatchAction({
            type: 'timelinePlayChange',
            playState: nextState,
            from: this.uid
        });
    };
    SliderTimelineView.prototype._handlePointerDrag = function(dx, dy, e) {
        this._clearTimer();
        this._pointerChangeTimeline([
            e.offsetX,
            e.offsetY
        ]);
    };
    SliderTimelineView.prototype._handlePointerDragend = function(e) {
        this._pointerChangeTimeline([
            e.offsetX,
            e.offsetY
        ], true);
    };
    SliderTimelineView.prototype._pointerChangeTimeline = function(mousePos, trigger) {
        var toCoord = this._toAxisCoord(mousePos)[0];
        var axis = this._axis;
        var axisExtent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["asc"](axis.getExtent().slice());
        toCoord > axisExtent[1] && (toCoord = axisExtent[1]);
        toCoord < axisExtent[0] && (toCoord = axisExtent[0]);
        this._currentPointer.x = toCoord;
        this._currentPointer.markRedraw();
        var progressLine = this._progressLine;
        if (progressLine) {
            progressLine.shape.x2 = toCoord;
            progressLine.dirty();
        }
        var targetDataIndex = this._findNearestTick(toCoord);
        var timelineModel = this.model;
        if (trigger || targetDataIndex !== timelineModel.getCurrentIndex() && timelineModel.get('realtime')) {
            this._changeTimeline(targetDataIndex);
        }
    };
    SliderTimelineView.prototype._doPlayStop = function() {
        var _this = this;
        this._clearTimer();
        if (this.model.getPlayState()) {
            this._timer = setTimeout(function() {
                // Do not cache
                var timelineModel = _this.model;
                _this._changeTimeline(timelineModel.getCurrentIndex() + (timelineModel.get('rewind', true) ? -1 : 1));
            }, this.model.get('playInterval'));
        }
    };
    SliderTimelineView.prototype._toAxisCoord = function(vertex) {
        var trans = this._mainGroup.getLocalTransform();
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["applyTransform"](vertex, trans, true);
    };
    SliderTimelineView.prototype._findNearestTick = function(axisCoord) {
        var data = this.model.getData();
        var dist = Infinity;
        var targetDataIndex;
        var axis = this._axis;
        data.each([
            'value'
        ], function(value, dataIndex) {
            var coord = axis.dataToCoord(value);
            var d = Math.abs(coord - axisCoord);
            if (d < dist) {
                dist = d;
                targetDataIndex = dataIndex;
            }
        });
        return targetDataIndex;
    };
    SliderTimelineView.prototype._clearTimer = function() {
        if (this._timer) {
            clearTimeout(this._timer);
            this._timer = null;
        }
    };
    SliderTimelineView.prototype._changeTimeline = function(nextIndex) {
        var currentIndex = this.model.getCurrentIndex();
        if (nextIndex === '+') {
            nextIndex = currentIndex + 1;
        } else if (nextIndex === '-') {
            nextIndex = currentIndex - 1;
        }
        this.api.dispatchAction({
            type: 'timelineChange',
            currentIndex: nextIndex,
            from: this.uid
        });
    };
    SliderTimelineView.prototype._updateTicksStatus = function() {
        var currentIndex = this.model.getCurrentIndex();
        var tickSymbols = this._tickSymbols;
        var tickLabels = this._tickLabels;
        if (tickSymbols) {
            for(var i = 0; i < tickSymbols.length; i++){
                tickSymbols && tickSymbols[i] && tickSymbols[i].toggleState('progress', i < currentIndex);
            }
        }
        if (tickLabels) {
            for(var i = 0; i < tickLabels.length; i++){
                tickLabels && tickLabels[i] && tickLabels[i].toggleState('progress', labelDataIndexStore(tickLabels[i]).dataIndex <= currentIndex);
            }
        }
    };
    SliderTimelineView.type = 'timeline.slider';
    return SliderTimelineView;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$timeline$2f$TimelineView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
function createScaleByModel(model, axisType) {
    axisType = axisType || model.get('type');
    if (axisType) {
        switch(axisType){
            // Buildin scale
            case 'category':
                return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$Ordinal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]({
                    ordinalMeta: model.getCategories(),
                    extent: [
                        Infinity,
                        -Infinity
                    ]
                });
            case 'time':
                return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$Time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]({
                    locale: model.ecModel.getLocaleModel(),
                    useUTC: model.ecModel.get('useUTC')
                });
            default:
                // default to be value
                return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$Interval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]();
        }
    }
}
function getViewRect(model, api) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLayoutRect"](model.getBoxLayoutParams(), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createBoxLayoutReference"](model, api).refContainer, model.get('padding'));
}
function makeControlIcon(timelineModel, objPath, rect, opts) {
    var style = opts.style;
    var icon = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createIcon"](timelineModel.get([
        'controlStyle',
        objPath
    ]), opts || {}, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$BoundingRect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](rect[0], rect[1], rect[2], rect[3]));
    // TODO createIcon won't use style in opt.
    if (style) {
        icon.setStyle(style);
    }
    return icon;
}
/**
 * Create symbol or update symbol
 * opt: basic position and event handlers
 */ function giveSymbol(hostModel, itemStyleModel, group, opt, symbol, callback) {
    var color = itemStyleModel.get('color');
    if (!symbol) {
        var symbolType = hostModel.get('symbol');
        symbol = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$symbol$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSymbol"])(symbolType, -1, -1, 2, 2, color);
        symbol.setStyle('strokeNoScale', true);
        group.add(symbol);
        callback && callback.onCreate(symbol);
    } else {
        symbol.setColor(color);
        group.add(symbol); // Group may be new, also need to add.
        callback && callback.onUpdate(symbol);
    }
    // Style
    var itemStyle = itemStyleModel.getItemStyle([
        'color'
    ]);
    symbol.setStyle(itemStyle);
    // Transform and events.
    opt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["merge"])({
        rectHover: true,
        z2: 100
    }, opt, true);
    var symbolSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$symbol$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeSymbolSize"])(hostModel.get('symbolSize'));
    opt.scaleX = symbolSize[0] / 2;
    opt.scaleY = symbolSize[1] / 2;
    var symbolOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$symbol$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeSymbolOffset"])(hostModel.get('symbolOffset'), symbolSize);
    if (symbolOffset) {
        opt.x = (opt.x || 0) + symbolOffset[0];
        opt.y = (opt.y || 0) + symbolOffset[1];
    }
    var symbolRotate = hostModel.get('symbolRotate');
    opt.rotation = (symbolRotate || 0) * Math.PI / 180 || 0;
    symbol.attr(opt);
    // FIXME
    // (1) When symbol.style.strokeNoScale is true and updateTransform is not performed,
    // getBoundingRect will return wrong result.
    // (This is supposed to be resolved in zrender, but it is a little difficult to
    // leverage performance and auto updateTransform)
    // (2) All of ancesters of symbol do not scale, so we can just updateTransform symbol.
    symbol.updateTransform();
    return symbol;
}
function pointerMoveTo(pointer, progressLine, dataIndex, axis, timelineModel, noAnimation) {
    if (pointer.dragging) {
        return;
    }
    var pointerModel = timelineModel.getModel('checkpointStyle');
    var toCoord = axis.dataToCoord(timelineModel.getData().get('value', dataIndex));
    if (noAnimation || !pointerModel.get('animation', true)) {
        pointer.attr({
            x: toCoord,
            y: 0
        });
        progressLine && progressLine.attr({
            shape: {
                x2: toCoord
            }
        });
    } else {
        var animationCfg = {
            duration: pointerModel.get('animationDuration', true),
            easing: pointerModel.get('animationEasing', true)
        };
        pointer.stopAnimation(null, true);
        pointer.animateTo({
            x: toCoord,
            y: 0
        }, animationCfg);
        progressLine && progressLine.animateTo({
            shape: {
                x2: toCoord
            }
        }, animationCfg);
    }
}
const __TURBOPACK__default__export__ = SliderTimelineView;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/timeline/timelineAction.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    "installTimelineAction",
    ()=>installTimelineAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
;
function installTimelineAction(registers) {
    registers.registerAction({
        type: 'timelineChange',
        event: 'timelineChanged',
        update: 'prepareAndUpdate'
    }, function(payload, ecModel, api) {
        var timelineModel = ecModel.getComponent('timeline');
        if (timelineModel && payload.currentIndex != null) {
            timelineModel.setCurrentIndex(payload.currentIndex);
            if (!timelineModel.get('loop', true) && timelineModel.isIndexMax() && timelineModel.getPlayState()) {
                timelineModel.setPlayState(false);
                // The timeline has played to the end, trigger event
                api.dispatchAction({
                    type: 'timelinePlayChange',
                    playState: false,
                    from: payload.from
                });
            }
        }
        // Set normalized currentIndex to payload.
        ecModel.resetOption('timeline', {
            replaceMerge: timelineModel.get('replaceMerge', true)
        });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaults"])({
            currentIndex: timelineModel.option.currentIndex
        }, payload);
    });
    registers.registerAction({
        type: 'timelinePlayChange',
        event: 'timelinePlayChanged',
        update: 'update'
    }, function(payload, ecModel) {
        var timelineModel = ecModel.getComponent('timeline');
        if (timelineModel && payload.playState != null) {
            timelineModel.setPlayState(payload.playState);
        }
    });
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/timeline/preprocessor.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
*/ // @ts-nocheck
__turbopack_context__.s([
    "default",
    ()=>timelinePreprocessor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
;
function timelinePreprocessor(option) {
    var timelineOpt = option && option.timeline;
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isArray"](timelineOpt)) {
        timelineOpt = timelineOpt ? [
            timelineOpt
        ] : [];
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"](timelineOpt, function(opt) {
        if (!opt) {
            return;
        }
        compatibleEC2(opt);
    });
}
function compatibleEC2(opt) {
    var type = opt.type;
    var ec2Types = {
        'number': 'value',
        'time': 'time'
    };
    // Compatible with ec2
    if (ec2Types[type]) {
        opt.axisType = ec2Types[type];
        delete opt.type;
    }
    transferItem(opt);
    if (has(opt, 'controlPosition')) {
        var controlStyle = opt.controlStyle || (opt.controlStyle = {});
        if (!has(controlStyle, 'position')) {
            controlStyle.position = opt.controlPosition;
        }
        if (controlStyle.position === 'none' && !has(controlStyle, 'show')) {
            controlStyle.show = false;
            delete controlStyle.position;
        }
        delete opt.controlPosition;
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"](opt.data || [], function(dataItem) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isObject"](dataItem) && !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isArray"](dataItem)) {
            if (!has(dataItem, 'value') && has(dataItem, 'name')) {
                // In ec2, using name as value.
                dataItem.value = dataItem.name;
            }
            transferItem(dataItem);
        }
    });
}
function transferItem(opt) {
    var itemStyle = opt.itemStyle || (opt.itemStyle = {});
    var itemStyleEmphasis = itemStyle.emphasis || (itemStyle.emphasis = {});
    // Transfer label out
    var label = opt.label || opt.label || {};
    var labelNormal = label.normal || (label.normal = {});
    var excludeLabelAttr = {
        normal: 1,
        emphasis: 1
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"](label, function(value, name) {
        if (!excludeLabelAttr[name] && !has(labelNormal, name)) {
            labelNormal[name] = value;
        }
    });
    if (itemStyleEmphasis.label && !has(label, 'emphasis')) {
        label.emphasis = itemStyleEmphasis.label;
        delete itemStyleEmphasis.label;
    }
}
function has(obj, attr) {
    return obj.hasOwnProperty(attr);
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/timeline/install.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$timeline$2f$SliderTimelineModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/timeline/SliderTimelineModel.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$timeline$2f$SliderTimelineView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/timeline/SliderTimelineView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$timeline$2f$timelineAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/timeline/timelineAction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$timeline$2f$preprocessor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/timeline/preprocessor.js [app-ssr] (ecmascript)");
;
;
;
;
function install(registers) {
    registers.registerComponentModel(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$timeline$2f$SliderTimelineModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    registers.registerComponentView(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$timeline$2f$SliderTimelineView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    registers.registerSubTypeDefaulter('timeline', function() {
        // Only slider now.
        return 'slider';
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$timeline$2f$timelineAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["installTimelineAction"])(registers);
    registers.registerPreprocessor(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$timeline$2f$preprocessor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/timeline/install.js [app-ssr] (ecmascript) <export install as TimelineComponent>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TimelineComponent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$timeline$2f$install$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["install"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$timeline$2f$install$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/timeline/install.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/thumbnail/ThumbnailBridgeImpl.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    "ThumbnailBridgeImpl",
    ()=>ThumbnailBridgeImpl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/graphic.js [app-ssr] (ecmascript) <locals>");
;
/**
 * [CAVEAT]: the call order of `ThumbnailView['render']` and other
 *  `ChartView['render']/ComponentView['render']` is not guaranteed.
 */ var ThumbnailBridgeImpl = /** @class */ function() {
    function ThumbnailBridgeImpl(thumbnailModel) {
        this._thumbnailModel = thumbnailModel;
    }
    ThumbnailBridgeImpl.prototype.reset = function(api) {
        this._renderVersion = api.getMainProcessVersion();
    };
    ThumbnailBridgeImpl.prototype.renderContent = function(opt) {
        var thumbnailView = opt.api.getViewOfComponentModel(this._thumbnailModel);
        if (!thumbnailView) {
            return;
        }
        opt.group.silent = true;
        thumbnailView.renderContent({
            group: opt.group,
            targetTrans: opt.targetTrans,
            z2Range: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["calcZ2Range"])(opt.group),
            roamType: opt.roamType,
            viewportRect: opt.viewportRect,
            renderVersion: this._renderVersion
        });
    };
    ThumbnailBridgeImpl.prototype.updateWindow = function(targetTrans, api) {
        var thumbnailView = api.getViewOfComponentModel(this._thumbnailModel);
        if (!thumbnailView) {
            return;
        }
        thumbnailView.updateWindow({
            targetTrans: targetTrans,
            renderVersion: this._renderVersion
        });
    };
    return ThumbnailBridgeImpl;
}();
;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/thumbnail/ThumbnailModel.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    "ThumbnailModel",
    ()=>ThumbnailModel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/Component.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/log.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/tokens.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$thumbnailBridge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/helper/thumbnailBridge.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$thumbnail$2f$ThumbnailBridgeImpl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/thumbnail/ThumbnailBridgeImpl.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
var ThumbnailModel = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(ThumbnailModel, _super);
    function ThumbnailModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = ThumbnailModel.type;
        _this.preventAutoZ = true;
        return _this;
    }
    ThumbnailModel.prototype.optionUpdated = function(newCptOption, isInit) {
        this._updateBridge();
    };
    ThumbnailModel.prototype._updateBridge = function() {
        var bridge = this._birdge = this._birdge || new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$thumbnail$2f$ThumbnailBridgeImpl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThumbnailBridgeImpl"](this);
        // Clear all, in case of option changed.
        this._target = null;
        this.ecModel.eachSeries(function(series) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$thumbnailBridge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["injectThumbnailBridge"])(series, null);
        });
        if (this.shouldShow()) {
            var target = this.getTarget();
            // If a component is targeted by more than one thumbnails, simply only the last one works.
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$thumbnailBridge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["injectThumbnailBridge"])(target.baseMapProvider, bridge);
        }
    };
    ThumbnailModel.prototype.shouldShow = function() {
        return this.getShallow('show', true);
    };
    ThumbnailModel.prototype.getBridge = function() {
        return this._birdge;
    };
    ThumbnailModel.prototype.getTarget = function() {
        if (this._target) {
            return this._target;
        }
        // Find by `seriesId`/`seriesIndex`.
        var series = this.getReferringComponents('series', {
            useDefault: false,
            enableAll: false,
            enableNone: false
        }).models[0];
        if (series) {
            if (series.subType !== 'graph') {
                series = null;
                if ("TURBOPACK compile-time truthy", 1) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["error"])("series." + series.subType + " is not supported in thumbnail.", true);
                }
            }
        } else {
            // If no xxxId and xxxIndex specified, find the first series.graph. If other components,
            // such as geo, is supported in future, the default stretagy may be extended.
            series = this.ecModel.queryComponents({
                mainType: 'series',
                subType: 'graph'
            })[0];
        }
        this._target = {
            baseMapProvider: series
        };
        return this._target;
    };
    ThumbnailModel.type = 'thumbnail';
    ThumbnailModel.layoutMode = 'box';
    // All the supported components should be added here.
    ThumbnailModel.dependencies = [
        'series',
        'geo'
    ];
    ThumbnailModel.defaultOption = {
        show: true,
        right: 1,
        bottom: 1,
        height: '25%',
        width: '25%',
        itemStyle: {
            // Use echarts option.backgorundColor by default.
            borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].color.border,
            borderWidth: 2
        },
        windowStyle: {
            borderWidth: 1,
            color: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].color.neutral30,
            borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].color.neutral40,
            opacity: 0.3
        },
        z: 10
    };
    return ThumbnailModel;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
;
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/thumbnail/ThumbnailView.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    "ThumbnailView",
    ()=>ThumbnailView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/view/Component.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$BoundingRect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/BoundingRect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$matrix$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/matrix.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$RoamController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/helper/RoamController.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/tokens.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/layout.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/graphic.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Rect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Rect$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Rect.js [app-ssr] (ecmascript) <export default as Rect>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Group.js [app-ssr] (ecmascript) <export default as Group>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$View$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/View.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
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
var ThumbnailView = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(ThumbnailView, _super);
    function ThumbnailView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = ThumbnailView.type;
        return _this;
    }
    ThumbnailView.prototype.render = function(thumbnailModel, ecModel, api) {
        this._api = api;
        this._model = thumbnailModel;
        if (!this._coordSys) {
            this._coordSys = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$View$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]();
        }
        if (!this._isEnabled()) {
            this._clear();
            return;
        }
        this._renderVersion = api.getMainProcessVersion();
        var group = this.group;
        group.removeAll();
        var itemStyleModel = thumbnailModel.getModel('itemStyle');
        var itemStyle = itemStyleModel.getItemStyle();
        if (itemStyle.fill == null) {
            itemStyle.fill = ecModel.get('backgroundColor') || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].color.neutral00;
        }
        var refContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createBoxLayoutReference"])(thumbnailModel, api).refContainer;
        var boxRect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLayoutRect"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBoxLayoutParams"])(thumbnailModel, true), refContainer);
        var boxBorderWidth = itemStyle.lineWidth || 0;
        var contentRect = this._contentRect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["expandOrShrinkRect"])(boxRect.clone(), boxBorderWidth / 2, true, true);
        var contentGroup = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__["Group"]();
        group.add(contentGroup);
        contentGroup.setClipPath(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Rect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Rect$3e$__["Rect"]({
            shape: contentRect.plain()
        }));
        var targetGroup = this._targetGroup = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__["Group"]();
        contentGroup.add(targetGroup);
        // Draw border and background and shadow of thumbnail box.
        var borderShape = boxRect.plain();
        borderShape.r = itemStyleModel.getShallow('borderRadius', true);
        group.add(this._bgRect = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Rect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Rect$3e$__["Rect"]({
            style: itemStyle,
            shape: borderShape,
            silent: false,
            cursor: 'grab'
        }));
        var windowStyleModel = thumbnailModel.getModel('windowStyle');
        var windowR = windowStyleModel.getShallow('borderRadius', true);
        contentGroup.add(this._windowRect = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Rect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Rect$3e$__["Rect"]({
            shape: {
                x: 0,
                y: 0,
                width: 0,
                height: 0,
                r: windowR
            },
            style: windowStyleModel.getItemStyle(),
            silent: false,
            cursor: 'grab'
        }));
        this._dealRenderContent();
        this._dealUpdateWindow();
        updateZ(thumbnailModel, this);
    };
    /**
   * Can be called asynchronously directly.
   * This method should be idempotent.
   */ ThumbnailView.prototype.renderContent = function(bridgeRendered) {
        this._bridgeRendered = bridgeRendered;
        if (this._isEnabled()) {
            this._dealRenderContent();
            this._dealUpdateWindow();
            updateZ(this._model, this);
        }
    };
    ThumbnailView.prototype._dealRenderContent = function() {
        var bridgeRendered = this._bridgeRendered;
        if (!bridgeRendered || bridgeRendered.renderVersion !== this._renderVersion) {
            return;
        }
        var targetGroup = this._targetGroup;
        var coordSys = this._coordSys;
        var contentRect = this._contentRect;
        targetGroup.removeAll();
        if (!bridgeRendered) {
            return;
        }
        var bridgeGroup = bridgeRendered.group;
        var bridgeRect = bridgeGroup.getBoundingRect();
        targetGroup.add(bridgeGroup);
        this._bgRect.z2 = bridgeRendered.z2Range.min - 10;
        coordSys.setBoundingRect(bridgeRect.x, bridgeRect.y, bridgeRect.width, bridgeRect.height);
        // Use `getLayoutRect` is just to find an approperiate rect in thumbnail.
        var viewRect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLayoutRect"])({
            left: 'center',
            top: 'center',
            aspect: bridgeRect.width / bridgeRect.height
        }, contentRect);
        coordSys.setViewRect(viewRect.x, viewRect.y, viewRect.width, viewRect.height);
        bridgeGroup.attr(coordSys.getTransformInfo().raw);
        this._windowRect.z2 = bridgeRendered.z2Range.max + 10;
        this._resetRoamController(bridgeRendered.roamType);
    };
    /**
   * Can be called from action handler directly.
   * This method should be idempotent.
   */ ThumbnailView.prototype.updateWindow = function(param) {
        var bridgeRendered = this._bridgeRendered;
        if (bridgeRendered && bridgeRendered.renderVersion === param.renderVersion) {
            bridgeRendered.targetTrans = param.targetTrans;
        }
        if (this._isEnabled()) {
            this._dealUpdateWindow();
        }
    };
    ThumbnailView.prototype._dealUpdateWindow = function() {
        var bridgeRendered = this._bridgeRendered;
        if (!bridgeRendered || bridgeRendered.renderVersion !== this._renderVersion) {
            return;
        }
        var invTargetTrans = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$matrix$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invert"]([], bridgeRendered.targetTrans);
        var transTargetToThis = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$matrix$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mul"]([], this._coordSys.transform, invTargetTrans);
        this._transThisToTarget = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$matrix$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invert"]([], transTargetToThis);
        var viewportRect = bridgeRendered.viewportRect;
        if (!viewportRect) {
            viewportRect = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$BoundingRect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](0, 0, this._api.getWidth(), this._api.getHeight());
        } else {
            viewportRect = viewportRect.clone();
        }
        viewportRect.applyTransform(transTargetToThis);
        var windowRect = this._windowRect;
        var r = windowRect.shape.r;
        windowRect.setShape((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaults"])({
            r: r
        }, viewportRect));
    };
    ThumbnailView.prototype._resetRoamController = function(roamType) {
        var _this = this;
        var api = this._api;
        var roamController = this._roamController;
        if (!roamController) {
            roamController = this._roamController = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$RoamController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](api.getZr());
        }
        if (!roamType || !this._isEnabled()) {
            roamController.disable();
            return;
        }
        roamController.enable(roamType, {
            api: api,
            zInfo: {
                component: this._model
            },
            triggerInfo: {
                roamTrigger: null,
                isInSelf: function(e, x, y) {
                    return _this._contentRect.contain(x, y);
                }
            }
        });
        roamController.off('pan').off('zoom').on('pan', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bind"])(this._onPan, this)).on('zoom', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bind"])(this._onZoom, this));
    };
    ThumbnailView.prototype._onPan = function(event) {
        var trans = this._transThisToTarget;
        if (!this._isEnabled() || !trans) {
            return;
        }
        var oldOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["applyTransform"])([], [
            event.oldX,
            event.oldY
        ], trans);
        var newOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["applyTransform"])([], [
            event.oldX - event.dx,
            event.oldY - event.dy
        ], trans);
        this._api.dispatchAction(makeRoamPayload(this._model.getTarget().baseMapProvider, {
            dx: newOffset[0] - oldOffset[0],
            dy: newOffset[1] - oldOffset[1]
        }));
    };
    ThumbnailView.prototype._onZoom = function(event) {
        var trans = this._transThisToTarget;
        if (!this._isEnabled() || !trans) {
            return;
        }
        var offset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["applyTransform"])([], [
            event.originX,
            event.originY
        ], trans);
        this._api.dispatchAction(makeRoamPayload(this._model.getTarget().baseMapProvider, {
            zoom: 1 / event.scale,
            originX: offset[0],
            originY: offset[1]
        }));
    };
    /**
   * This method is also responsible for check enable in asynchronous situation,
   * e.g., in event listeners that is supposed to be outdated but not be removed.
   */ ThumbnailView.prototype._isEnabled = function() {
        var thumbnailModel = this._model;
        if (!thumbnailModel || !thumbnailModel.shouldShow()) {
            return false;
        }
        var baseMapProvider = thumbnailModel.getTarget().baseMapProvider;
        if (!baseMapProvider) {
            return false;
        }
        return true;
    };
    ThumbnailView.prototype._clear = function() {
        this.group.removeAll();
        this._bridgeRendered = null;
        if (this._roamController) {
            this._roamController.disable();
        }
    };
    ThumbnailView.prototype.remove = function() {
        this._clear();
    };
    ThumbnailView.prototype.dispose = function() {
        this._clear();
    };
    ThumbnailView.type = 'thumbnail';
    return ThumbnailView;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
;
function makeRoamPayload(baseMapProvider, params) {
    var type = baseMapProvider.mainType === 'series' ? baseMapProvider.subType + "Roam" // e.g. 'graphRoam'
     : baseMapProvider.mainType + "Roam"; // e.g., 'geoRoam'
    var payload = {
        type: type
    };
    payload[baseMapProvider.mainType + "Id"] = baseMapProvider.id;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extend"])(payload, params);
    return payload;
}
function updateZ(thumbnailModel, thumbnailView) {
    var zInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["retrieveZInfo"])(thumbnailModel);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["traverseUpdateZ"])(thumbnailView.group, zInfo.z, zInfo.zlevel);
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/thumbnail/install.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$thumbnail$2f$ThumbnailModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/thumbnail/ThumbnailModel.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$thumbnail$2f$ThumbnailView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/thumbnail/ThumbnailView.js [app-ssr] (ecmascript)");
;
;
function install(registers) {
    registers.registerComponentModel(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$thumbnail$2f$ThumbnailModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThumbnailModel"]);
    registers.registerComponentView(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$thumbnail$2f$ThumbnailView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThumbnailView"]);
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/thumbnail/install.js [app-ssr] (ecmascript) <export install as ThumbnailComponent>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThumbnailComponent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$thumbnail$2f$install$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["install"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$thumbnail$2f$install$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/thumbnail/install.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/aria/preprocessor.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    ()=>ariaPreprocessor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
;
function ariaPreprocessor(option) {
    if (!option || !option.aria) {
        return;
    }
    var aria = option.aria;
    // aria.show is deprecated and should use aria.enabled instead
    if (aria.show != null) {
        aria.enabled = aria.show;
    }
    aria.label = aria.label || {};
    // move description, general, series, data to be under aria.label
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"]([
        'description',
        'general',
        'series',
        'data'
    ], function(name) {
        if (aria[name] != null) {
            aria.label[name] = aria[name];
        }
    });
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/aria/install.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$aria$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/aria.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$aria$2f$preprocessor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/aria/preprocessor.js [app-ssr] (ecmascript)");
;
;
function install(registers) {
    registers.registerPreprocessor(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$aria$2f$preprocessor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    registers.registerVisual(registers.PRIORITY.VISUAL.ARIA, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$aria$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/aria/install.js [app-ssr] (ecmascript) <export install as AriaComponent>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AriaComponent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$aria$2f$install$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["install"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$aria$2f$install$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/aria/install.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataset/install.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    "DatasetModel",
    ()=>DatasetModel,
    "install",
    ()=>install
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-ssr] (ecmascript)");
/**
 * This module is imported by echarts directly.
 *
 * Notice:
 * Always keep this file exists for backward compatibility.
 * Because before 4.1.0, dataset is an optional component,
 * some users may import this module manually.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/Component.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/view/Component.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/types.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$sourceManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/data/helper/sourceManager.js [app-ssr] (ecmascript)");
;
;
;
;
;
var DatasetModel = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(DatasetModel, _super);
    function DatasetModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'dataset';
        return _this;
    }
    DatasetModel.prototype.init = function(option, parentModel, ecModel) {
        _super.prototype.init.call(this, option, parentModel, ecModel);
        this._sourceManager = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$sourceManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SourceManager"](this);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$sourceManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["disableTransformOptionMerge"])(this);
    };
    DatasetModel.prototype.mergeOption = function(newOption, ecModel) {
        _super.prototype.mergeOption.call(this, newOption, ecModel);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$sourceManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["disableTransformOptionMerge"])(this);
    };
    DatasetModel.prototype.optionUpdated = function() {
        this._sourceManager.dirty();
    };
    DatasetModel.prototype.getSourceManager = function() {
        return this._sourceManager;
    };
    DatasetModel.type = 'dataset';
    DatasetModel.defaultOption = {
        seriesLayoutBy: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SERIES_LAYOUT_BY_COLUMN"]
    };
    return DatasetModel;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
;
var DatasetView = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(DatasetView, _super);
    function DatasetView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'dataset';
        return _this;
    }
    DatasetView.type = 'dataset';
    return DatasetView;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
function install(registers) {
    registers.registerComponentModel(DatasetModel);
    registers.registerComponentView(DatasetView);
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataset/install.js [app-ssr] (ecmascript) <export install as DatasetComponent>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DatasetComponent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataset$2f$install$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["install"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataset$2f$install$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataset/install.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/transform/filterTransform.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    "filterTransform",
    ()=>filterTransform
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$conditionalExpression$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/conditionalExpression.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/log.js [app-ssr] (ecmascript)");
;
;
;
var filterTransform = {
    type: 'echarts:filter',
    // PENDING: enhance to filter by index rather than create new data
    transform: function(params) {
        // [Caveat] Fail-Fast:
        // Do not return the whole dataset unless user config indicates it explicitly.
        // For example, if no condition is specified by mistake, returning an empty result
        // is better than returning the entire raw source for the user to find the mistake.
        var upstream = params.upstream;
        var rawItem;
        var condition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$conditionalExpression$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseConditionalExpression"])(params.config, {
            valueGetterAttrMap: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createHashMap"])({
                dimension: true
            }),
            prepareGetValue: function(exprOption) {
                var errMsg = '';
                var dimLoose = exprOption.dimension;
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasOwn"])(exprOption, 'dimension')) {
                    if ("TURBOPACK compile-time truthy", 1) {
                        errMsg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makePrintable"])('Relation condition must has prop "dimension" specified.', 'Illegal condition:', exprOption);
                    }
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["throwError"])(errMsg);
                }
                var dimInfo = upstream.getDimensionInfo(dimLoose);
                if (!dimInfo) {
                    if ("TURBOPACK compile-time truthy", 1) {
                        errMsg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makePrintable"])('Can not find dimension info via: ' + dimLoose + '.\n', 'Existing dimensions: ', upstream.cloneAllDimensionInfo(), '.\n', 'Illegal condition:', exprOption, '.\n');
                    }
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["throwError"])(errMsg);
                }
                return {
                    dimIdx: dimInfo.index
                };
            },
            getValue: function(param) {
                return upstream.retrieveValueFromItem(rawItem, param.dimIdx);
            }
        });
        var resultData = [];
        for(var i = 0, len = upstream.count(); i < len; i++){
            rawItem = upstream.getRawDataItem(i);
            if (condition.evaluate()) {
                resultData.push(rawItem);
            }
        }
        return {
            data: resultData
        };
    }
};
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/transform/sortTransform.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    "sortTransform",
    ()=>sortTransform
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/types.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/log.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$dataValueHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/data/helper/dataValueHelper.js [app-ssr] (ecmascript)");
;
;
;
;
;
var sampleLog = '';
if ("TURBOPACK compile-time truthy", 1) {
    sampleLog = [
        'Valid config is like:',
        '{ dimension: "age", order: "asc" }',
        'or [{ dimension: "age", order: "asc"], { dimension: "date", order: "desc" }]'
    ].join(' ');
}
var sortTransform = {
    type: 'echarts:sort',
    transform: function(params) {
        var upstream = params.upstream;
        var config = params.config;
        var errMsg = '';
        // Normalize
        // const orderExprList: OrderExpression[] = isArray(config[0])
        //     ? config as OrderExpression[]
        //     : [config as OrderExpression];
        var orderExprList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeToArray"])(config);
        if (!orderExprList.length) {
            if (("TURBOPACK compile-time value", "development") !== 'production') {
                errMsg = 'Empty `config` in sort transform.';
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["throwError"])(errMsg);
        }
        var orderDefList = [];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(orderExprList, function(orderExpr) {
            var dimLoose = orderExpr.dimension;
            var order = orderExpr.order;
            var parserName = orderExpr.parser;
            var incomparable = orderExpr.incomparable;
            if (dimLoose == null) {
                if (("TURBOPACK compile-time value", "development") !== 'production') {
                    errMsg = 'Sort transform config must has "dimension" specified.' + sampleLog;
                }
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["throwError"])(errMsg);
            }
            if (order !== 'asc' && order !== 'desc') {
                if (("TURBOPACK compile-time value", "development") !== 'production') {
                    errMsg = 'Sort transform config must has "order" specified.' + sampleLog;
                }
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["throwError"])(errMsg);
            }
            if (incomparable && incomparable !== 'min' && incomparable !== 'max') {
                var errMsg_1 = '';
                if (("TURBOPACK compile-time value", "development") !== 'production') {
                    errMsg_1 = 'incomparable must be "min" or "max" rather than "' + incomparable + '".';
                }
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["throwError"])(errMsg_1);
            }
            if (order !== 'asc' && order !== 'desc') {
                var errMsg_2 = '';
                if (("TURBOPACK compile-time value", "development") !== 'production') {
                    errMsg_2 = 'order must be "asc" or "desc" rather than "' + order + '".';
                }
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["throwError"])(errMsg_2);
            }
            var dimInfo = upstream.getDimensionInfo(dimLoose);
            if (!dimInfo) {
                if ("TURBOPACK compile-time truthy", 1) {
                    errMsg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makePrintable"])('Can not find dimension info via: ' + dimLoose + '.\n', 'Existing dimensions: ', upstream.cloneAllDimensionInfo(), '.\n', 'Illegal config:', orderExpr, '.\n');
                }
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["throwError"])(errMsg);
            }
            var parser = parserName ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$dataValueHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRawValueParser"])(parserName) : null;
            if (parserName && !parser) {
                if ("TURBOPACK compile-time truthy", 1) {
                    errMsg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makePrintable"])('Invalid parser name ' + parserName + '.\n', 'Illegal config:', orderExpr, '.\n');
                }
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["throwError"])(errMsg);
            }
            orderDefList.push({
                dimIdx: dimInfo.index,
                parser: parser,
                comparator: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$dataValueHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SortOrderComparator"](order, incomparable)
            });
        });
        // TODO: support it?
        var sourceFormat = upstream.sourceFormat;
        if (sourceFormat !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOURCE_FORMAT_ARRAY_ROWS"] && sourceFormat !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOURCE_FORMAT_OBJECT_ROWS"]) {
            if (("TURBOPACK compile-time value", "development") !== 'production') {
                errMsg = 'sourceFormat "' + sourceFormat + '" is not supported yet';
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["throwError"])(errMsg);
        }
        // Other upstream format are all array.
        var resultData = [];
        for(var i = 0, len = upstream.count(); i < len; i++){
            resultData.push(upstream.getRawDataItem(i));
        }
        resultData.sort(function(item0, item1) {
            for(var i = 0; i < orderDefList.length; i++){
                var orderDef = orderDefList[i];
                var val0 = upstream.retrieveValueFromItem(item0, orderDef.dimIdx);
                var val1 = upstream.retrieveValueFromItem(item1, orderDef.dimIdx);
                if (orderDef.parser) {
                    val0 = orderDef.parser(val0);
                    val1 = orderDef.parser(val1);
                }
                var result = orderDef.comparator.evaluate(val0, val1);
                if (result !== 0) {
                    return result;
                }
            }
            return 0;
        });
        return {
            data: resultData
        };
    }
};
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/transform/install.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$transform$2f$filterTransform$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/transform/filterTransform.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$transform$2f$sortTransform$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/transform/sortTransform.js [app-ssr] (ecmascript)");
;
;
function install(registers) {
    registers.registerTransform(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$transform$2f$filterTransform$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filterTransform"]);
    registers.registerTransform(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$transform$2f$sortTransform$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sortTransform"]);
}
}),
"[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/transform/install.js [app-ssr] (ecmascript) <export install as TransformComponent>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TransformComponent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$transform$2f$install$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["install"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$transform$2f$install$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/transform/install.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=6e80b_echarts_lib_component_d652a903._.js.map