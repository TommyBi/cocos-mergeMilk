"use strict";
cc._RF.push(module, '7ec2d0pX1BF85jcim699QoK', 'NumberAction');
// script/common/comp/NumberAction.ts

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
var Utils_1 = require("../../utils/Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NumberAction = /** @class */ (function (_super) {
    __extends(NumberAction, _super);
    function NumberAction() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.targetNumber = 0;
        _this.startNum = 0;
        _this.startTime = 0;
        _this.duration = 0;
        _this.playing = false;
        _this.colorBackup = null;
        _this.scaleBackup = null;
        _this.targetColor = null;
        return _this;
    }
    NumberAction_1 = NumberAction;
    /**
     *
     * @param labelNode label所在的node
     * @param targetNumber 目标数字
     * @param duration 毫秒
     */
    NumberAction.prototype.onLoad = function () {
        // this.label = this.node.getComponent(cc.Label);
        // this.colorBackup = this.label.node.color;
        // this.scaleBackup = cc.v2(this.label.node.scaleX, this.label.node.scaleY);
    };
    NumberAction.numberTo = function (labelNode, targetNumber, duration, color) {
        if (duration === void 0) { duration = 300; }
        var label = labelNode.getComponent(cc.Label);
        if (!label) {
            return;
        }
        var numberAction = labelNode.getComponent(NumberAction_1);
        if (!numberAction) {
            numberAction = labelNode.addComponent(NumberAction_1);
        }
        numberAction.numberTo(targetNumber, duration, color);
    };
    NumberAction.prototype.numberTo = function (targetNumber, duration, color) {
        if (duration === void 0) { duration = 300; }
        if (!this.label) {
            this.label = this.node.getComponent(cc.Label);
            this.colorBackup = this.label.node.color;
            this.scaleBackup = cc.v2(this.label.node.scaleX, this.label.node.scaleY);
        }
        if (targetNumber == ~~this.label.string) {
            return;
        }
        this.targetNumber = targetNumber;
        this.duration = duration;
        this.startNum = Utils_1.Utils.isNum(this.label.string) ? Number(this.label.string) : 0;
        this.startTime = (new Date()).getTime();
        this.playing = true;
        if (!!color) {
            this.targetColor = color;
            this.label.node.color = color;
            this.label.node.scaleX = this.scaleBackup.x * 1.2;
            this.label.node.scaleY = this.scaleBackup.y * 1.2;
        }
    };
    NumberAction.prototype.checkColor = function (c1, c2) {
        if (c1.getA() != c2.getA()) {
            return false;
        }
        if (c1.getB() != c2.getB()) {
            return false;
        }
        if (c1.getG() != c2.getG()) {
            return false;
        }
        if (c1.getR() != c2.getR()) {
            return false;
        }
    };
    NumberAction.prototype.update = function (dt) {
        if (!this.label) {
            return;
        }
        if (!this.playing) {
            return;
        }
        var curTime = (new Date()).getTime();
        if (curTime >= this.startTime + this.duration) {
            this.label.node.color = this.colorBackup;
            this.label.string = "" + this.targetNumber;
            this.label.node.scaleX = this.scaleBackup.x;
            this.label.node.scaleY = this.scaleBackup.y;
            this.playing = false;
            return;
        }
        //todo::为什么要每桢都设置目标色才能实现变化是变色，是谁在捣乱
        if (!!this.targetColor) {
            this.label.node.color = this.targetColor;
        }
        var ratio = (curTime - this.startTime) / this.duration;
        var curNum = this.startNum + (this.targetNumber - this.startNum) * ratio;
        this.label.string = "" + Math.floor(curNum);
    };
    var NumberAction_1;
    NumberAction = NumberAction_1 = __decorate([
        ccclass
    ], NumberAction);
    return NumberAction;
}(cc.Component));
exports.default = NumberAction;

cc._RF.pop();