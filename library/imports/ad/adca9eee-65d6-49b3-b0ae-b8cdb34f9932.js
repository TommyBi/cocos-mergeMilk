"use strict";
cc._RF.push(module, 'adca97uZdZJs7CuuM2zT5ky', 'BundleResource');
// script/game/common/BundleResource.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BundleResource = /** @class */ (function (_super) {
    __extends(BundleResource, _super);
    function BundleResource() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sceneAsset = null;
        return _this;
    }
    __decorate([
        property(cc.SceneAsset)
    ], BundleResource.prototype, "sceneAsset", void 0);
    BundleResource = __decorate([
        ccclass
    ], BundleResource);
    return BundleResource;
}(cc.Component));
exports.default = BundleResource;

cc._RF.pop();