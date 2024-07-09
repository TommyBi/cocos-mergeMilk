"use strict";
cc._RF.push(module, 'ab3d3iRW4xCjJdkwDFbYQEr', 'bl_top');
// script/game/ui/bl_top.ts

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
var Global_1 = require("../../common/Global");
var GlobalEvents_1 = require("../../common/GlobalEvents");
var bl_txPanel_1 = require("./bl_txPanel");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var bl_top = /** @class */ (function (_super) {
    __extends(bl_top, _super);
    function bl_top() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lb_bestNum1 = null;
        _this.lb_bestNum2 = null;
        _this.lb_num = null;
        _this.ico1 = null;
        _this.ico2 = null;
        _this.num1 = 0;
        _this.num = 0;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    bl_top.prototype.onLoad = function () {
        this.bl_refrehUI();
    };
    bl_top.prototype.start = function () {
    };
    bl_top.prototype.onEnable = function () {
        Global_1.GlobalEvent.on(GlobalEvents_1.EventChangeTop.NAME, this.onChange, this);
    };
    bl_top.prototype.bl_refrehUI = function () {
        this.lb_num.string = this.num + "";
        this.lb_bestNum1.string = "已合成 x" + this.num1 + "";
        this.lb_bestNum2.string = this.num1 + "";
    };
    bl_top.prototype.onChange = function (evt) {
        if (evt.mtype == 1) {
            this.num += evt.num;
        }
        else {
            this.num1 += evt.num;
        }
        this.bl_refrehUI();
    };
    bl_top.prototype.bl_showtx = function () {
        bl_txPanel_1.default.Show();
    };
    __decorate([
        property(cc.Label)
    ], bl_top.prototype, "lb_bestNum1", void 0);
    __decorate([
        property(cc.Label)
    ], bl_top.prototype, "lb_bestNum2", void 0);
    __decorate([
        property(cc.Label)
    ], bl_top.prototype, "lb_num", void 0);
    __decorate([
        property(cc.Node)
    ], bl_top.prototype, "ico1", void 0);
    __decorate([
        property(cc.Node)
    ], bl_top.prototype, "ico2", void 0);
    bl_top = __decorate([
        ccclass
    ], bl_top);
    return bl_top;
}(cc.Component));
exports.default = bl_top;

cc._RF.pop();