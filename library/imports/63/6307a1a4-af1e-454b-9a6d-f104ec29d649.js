"use strict";
cc._RF.push(module, '6307aGkrx5FS5pt8QTsKdZJ', 'BasePanel');
// script/common/BasePanel.ts

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
var Utils_1 = require("../utils/Utils");
var GlobalDefines_1 = require("./consts/GlobalDefines");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BasePanel = /** @class */ (function (_super) {
    __extends(BasePanel, _super);
    function BasePanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btn_back = null;
        return _this;
    }
    BasePanel.prototype.onLoad = function () {
        this.btn_back && (this.btn_back.scale = 0);
    };
    BasePanel.prototype.start = function () {
        this.initBackBtn();
    };
    BasePanel.prototype.initBackBtn = function () {
        if (this.btn_back) {
            var top = GlobalDefines_1.GlobalDefines.MenuButtonLogic.top;
            var height = GlobalDefines_1.GlobalDefines.MenuButtonLogic.height;
            this.btn_back.y = GlobalDefines_1.GlobalDefines.ScreenHeight / 2 - top - height / 2;
            this.btn_back.x = -330;
            cc.tween(this.btn_back)
                .to(0.3, { scale: 1 }, { easing: cc.easing.backOut })
                .start();
        }
    };
    BasePanel.prototype.onDisable = function () {
    };
    BasePanel.prototype.close = function () {
        Utils_1.Utils.removeNode(this.node);
    };
    BasePanel.prototype.onBtnBackClicked = function (e) {
        if (Utils_1.Utils.btnLock()) {
            return;
        }
        this.close();
    };
    __decorate([
        property(cc.Node)
    ], BasePanel.prototype, "btn_back", void 0);
    BasePanel = __decorate([
        ccclass
    ], BasePanel);
    return BasePanel;
}(cc.Component));
exports.default = BasePanel;

cc._RF.pop();