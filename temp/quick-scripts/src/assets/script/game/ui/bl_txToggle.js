"use strict";
cc._RF.push(module, 'b1dcaoxaO1FSYftKozqMwoc', 'bl_txToggle');
// script/game/ui/bl_txToggle.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
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
var bl_Config_1 = require("./bl_Config");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var bl_txToggle = /** @class */ (function (_super) {
    __extends(bl_txToggle, _super);
    function bl_txToggle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lb_count = null;
        return _this;
        // update (dt) {}
    }
    bl_txToggle.prototype.init = function (data) {
        this.data = data;
        this.refresh();
    };
    bl_txToggle.prototype.onLoad = function () {
        this.lb_count = this.node.getComponentInChildren(cc.Label);
    };
    bl_txToggle.prototype.refresh = function () {
        this.lb_count.string = bl_Config_1.bc.moneyAbbr + this.data.drawBal;
    };
    bl_txToggle = __decorate([
        ccclass
    ], bl_txToggle);
    return bl_txToggle;
}(cc.Component));
exports.default = bl_txToggle;

cc._RF.pop();