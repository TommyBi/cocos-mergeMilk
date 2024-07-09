"use strict";
cc._RF.push(module, '5f7afcopOxGz5p29l+d+sXS', 'HurryLoading');
// script/common/comp/HurryLoading.ts

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
var HurryLoading = /** @class */ (function (_super) {
    __extends(HurryLoading, _super);
    function HurryLoading() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lb_loading = null;
        _this.timeOut = -1;
        return _this;
    }
    HurryLoading.prototype.show = function () {
        this.node.active = true;
    };
    HurryLoading.prototype.hide = function () {
        this.lb_loading.node.stopAllActions();
        this.node.active = false;
    };
    HurryLoading.prototype.onEnable = function () {
        // this.icon.active = false;
        // this.timeOut = setTimeout(() => {
        //      if (cc.isValid(this.node)) {
        //         this.btn_back.active = true;
        //         this.icon.active = true;
        //     }
        // }, 3000);
        var _this = this;
        this.lb_loading.node.stopAllActions();
        cc.tween(this.lb_loading.node)
            .delay(0.5)
            .call(function () {
            _this.lb_loading.string = "加 载 中 . ";
        })
            .delay(0.5)
            .call(function () {
            _this.lb_loading.string = "加 载 中 . . ";
        })
            .delay(0.5)
            .call(function () {
            _this.lb_loading.string = "加 载 中 . . .";
        })
            .union()
            .repeatForever()
            .start();
    };
    HurryLoading.prototype.onDisable = function () {
        clearTimeout(this.timeOut);
    };
    __decorate([
        property(cc.Label)
    ], HurryLoading.prototype, "lb_loading", void 0);
    HurryLoading = __decorate([
        ccclass
    ], HurryLoading);
    return HurryLoading;
}(cc.Component));
exports.default = HurryLoading;

cc._RF.pop();