"use strict";
cc._RF.push(module, 'd74faY83gVBFq74+7t4+thB', 'bl_ball');
// script/game/ui/bl_ball.ts

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
var Utils_1 = require("../../utils/Utils");
var GameUtils_1 = require("../GameUtils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var bl_ball = /** @class */ (function (_super) {
    __extends(bl_ball, _super);
    function bl_ball() {
        // LIFE-CYCLE CALLBACKS:
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lb = null;
        _this.eff = null;
        _this.THRESHOLD = 0.08;
        _this.isDestory = false;
        _this.isDrop = false;
        return _this;
    }
    bl_ball.prototype.onLoad = function () {
        this.rigidbody = this.node.getComponent(cc.RigidBody);
    };
    bl_ball.prototype.start = function () {
    };
    bl_ball.prototype.update = function (dt) {
        // if (this.isDrop && this.rigidbody) {
        //     if (Math.abs(this.rigidbody.linearVelocity.x) < this.THRESHOLD && Math.abs(this.rigidbody.linearVelocity.y) < this.THRESHOLD) {
        //         // 刚体几乎已经停止运动  
        //         GameUtils.playDrop();
        //         this.isDrop = false;
        //     }
        // }
        this.lb.angle = -this.node.angle;
    };
    bl_ball.prototype.onClick = function () {
        if (Utils_1.Utils.btnLock()) {
            return;
        }
        // GameUtils.playSoundBtnClicked();
        Global_1.GlobalEvent.dispatchEvent(new GlobalEvents_1.EventBallClick(this.id, this.rId));
    };
    bl_ball.prototype.init = function (id, isDrop) {
        this.isDrop = isDrop;
        this.id = id;
        this.rId = Utils_1.Utils.nextRandomId();
    };
    bl_ball.prototype.playHide = function (callBack) {
        var _this = this;
        this.eff.node.active = true;
        GameUtils_1.GameUtils.playCompose();
        cc.tween(this.node).delay(0).to(.1, { scale: 1.3 }).to(.1, { scale: 0 }).call(function () {
            if (callBack)
                callBack();
            _this.delete();
        }).start();
    };
    bl_ball.prototype.playShow = function () {
        // this.node.active = true;
        cc.tween(this.node).to(.1, { scale: 1 }).start();
    };
    bl_ball.prototype.removeRigidbody = function () {
        this.node.removeComponent(cc.RigidBody);
    };
    bl_ball.prototype.onDestroy = function () {
    };
    bl_ball.prototype.delete = function () {
        this.isDestory = true;
        this.node.destroy();
    };
    __decorate([
        property(cc.Node)
    ], bl_ball.prototype, "lb", void 0);
    __decorate([
        property(sp.Skeleton)
    ], bl_ball.prototype, "eff", void 0);
    bl_ball = __decorate([
        ccclass
    ], bl_ball);
    return bl_ball;
}(cc.Component));
exports.default = bl_ball;

cc._RF.pop();