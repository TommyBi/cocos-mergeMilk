"use strict";
cc._RF.push(module, '71ed07UJHdNSa3l8ryArFta', 'Jumpjump3d');
// script/common/effect/Jumpjump3d.ts

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventOnBoom = void 0;
var GameUtils_1 = require("../../game/GameUtils");
var Utils_1 = require("../../utils/Utils");
var Global_1 = require("../Global");
/*
* 飞抵最终目的地
*/
var EventOnBoom = /** @class */ (function (_super) {
    __extends(EventOnBoom, _super);
    function EventOnBoom(tType) {
        var _this = _super.call(this, EventOnBoom.NAME, true) || this;
        _this.tType = tType;
        return _this;
    }
    EventOnBoom.NAME = "EventOnBoom";
    return EventOnBoom;
}(cc.Event.EventCustom));
exports.EventOnBoom = EventOnBoom;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Jumpjump3d = /** @class */ (function (_super) {
    __extends(Jumpjump3d, _super);
    function Jumpjump3d() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dx = 0;
        _this.dy = 0;
        _this.dz = 170;
        _this.rate = 0.45;
        _this.groundLine = 0;
        _this.scale = 1;
        _this.icon = null;
        _this.isFading = false;
        _this.curStatus = 0;
        _this.nextStatus = 0;
        _this.tWPos = undefined;
        return _this;
        // update() {
        //     if (this.nextStatus != -1) {
        //         this.curStatus = this.nextStatus;
        //         this.nextStatus = -1;
        //         switch (this.curStatus) {
        //             case 0: {
        //                 this.spdx = Utils.randomIntInclusive(-this.spdx, this.spdx);
        //                 this.spdy = Utils.randomIntInclusive(0, this.spdy);
        //                 break;
        //             }
        //             // case 1: {
        //             //     this.node.y = this.groundLine;
        //             //     this.spdy = Math.abs(this.spdy) * Utils.randomFloat(0.4, 0.6);
        //             //     break;
        //             // }
        //             case 2: {
        //                 this.close();
        //                 break;
        //             }
        //         }
        //     }
        //     switch (this.curStatus) {
        //         case 0: {
        //             if (this.node.y < this.groundLine) {
        //                 this.nextStatus = 1;
        //             }
        //             this.spdy -= .5;
        //             this.node.x += this.spdx;
        //             this.node.y += this.spdy;
        //             this.icon.y += this.spdz;
        //             break;
        //         }
        //         // case 1: {
        //         //     if (this.node.y < -Ball_Main.instance.uiManager.ScreenHeight / 2) {
        //         //         this.nextStatus = 2;
        //         //     }
        //         //     this.spdy -= .5;
        //         //     this.node.x += this.spdx;
        //         //     this.node.y += this.spdy;
        //         //     break;
        //         // }
        //     }
        // }
    }
    Jumpjump3d_1 = Jumpjump3d;
    Jumpjump3d.createBySpr = function (shadowFrame, spriteFrame, startWorldPos, groundLine, scale, tWPos, tType) {
        return __awaiter(this, void 0, void 0, function () {
            var icon, sprite;
            return __generator(this, function (_a) {
                icon = new cc.Node();
                sprite = icon.addComponent(cc.Sprite);
                sprite.sizeMode = cc.Sprite.SizeMode.RAW;
                sprite.spriteFrame = spriteFrame;
                sprite.node.y = sprite.node.height / 2; //下边缘对齐
                this._create(shadowFrame, icon, startWorldPos, groundLine, scale, tWPos, tType);
                return [2 /*return*/];
            });
        });
    };
    Jumpjump3d.createByStr = function (shadowFrame, str, startWorldPos, groundLine, scale, tWPos, tType) {
        return __awaiter(this, void 0, void 0, function () {
            var icon, lb;
            return __generator(this, function (_a) {
                icon = new cc.Node();
                icon.color = cc.color(249, 229, 114, 255);
                lb = icon.addComponent(cc.Label);
                lb.fontSize = 40;
                lb.enableBold = true;
                lb.string = str;
                // lb.node.y = lb.node.height / 2;//下边缘对齐
                this._create(shadowFrame, icon, startWorldPos, groundLine, scale, tWPos, tType);
                return [2 /*return*/];
            });
        });
    };
    Jumpjump3d._create = function (shadowFrame, nodeActor, startWorldPos, groundLine, scale, tWPos, tType) {
        return __awaiter(this, void 0, void 0, function () {
            var node, shadow, spr, script;
            return __generator(this, function (_a) {
                node = new cc.Node();
                shadow = new cc.Node();
                shadow.y = groundLine;
                shadow.scaleY = 0.2;
                shadow.scaleX = 0.3;
                shadow.color = cc.Color.BLACK;
                spr = shadow.addComponent(cc.Sprite);
                if (shadowFrame) {
                    spr.spriteFrame = shadowFrame;
                    shadow.opacity = 90;
                }
                else {
                    shadow.opacity = 0;
                }
                node.addChild(shadow);
                node.addChild(nodeActor);
                script = node.addComponent(Jumpjump3d_1);
                node.position = startWorldPos;
                script.groundLine = groundLine;
                script.scale = scale == undefined ? Utils_1.Utils.randomFloat(0.8, 1.2) : scale;
                script.tWPos = tWPos;
                script.tType = tType;
                GameUtils_1.GameUtils.addEffectAR(node);
                return [2 /*return*/];
            });
        });
    };
    Jumpjump3d.prototype.onLoad = function () {
        var _this = this;
        this.dz = Utils_1.Utils.randomIntInclusive(this.dz / 2, this.dz);
        var dr = this.dz / this.rate;
        this.dx = Utils_1.Utils.randomIntInclusive(-dr, dr);
        this.dy = Utils_1.Utils.randomIntInclusive(-dr, dr) * 0.6;
        this.node.scale = this.scale;
        this.icon = this.node.children[1];
        var delayTime = Utils_1.Utils.randomFloat(0.15, 0.25);
        var duration = Utils_1.Utils.randomFloat(0.2, 0.4);
        cc.tween(this.node)
            .by(duration, { x: this.dx, y: this.dy }, { easing: cc.easing.sineOut })
            .delay(delayTime)
            .call(function () {
            if (!!_this.tWPos) {
                //飞向金猪                    
                var tNPos = _this.node.parent.convertToNodeSpaceAR(_this.tWPos);
                var scale = _this.node.scale;
                cc.tween(_this.node)
                    .delay(0.3)
                    .to(0.4, { position: tNPos, scale: scale * 0.8 })
                    .call(function () {
                    GameUtils_1.GameUtils.playFlyCoin();
                    Global_1.GlobalEvent.dispatchEvent(new EventOnBoom(_this.tType));
                    _this.close();
                })
                    .start();
            }
            else {
                //消失
                cc.tween(_this.node)
                    .to(0.15, { opacity: 0 })
                    .call(function () {
                    _this.close();
                })
                    .start();
            }
        })
            .start();
        // this.jump(duration, this.dx > 0 ? 1 : -1);
    };
    Jumpjump3d.prototype.jump = function (duration, dir) {
        var durationJump = Utils_1.Utils.randomFloat(0.13, 0.19);
        var durationSlide = Math.max(0, duration - durationJump * 2);
        cc.tween(this.icon)
            .to(durationJump, { y: this.dz, angle: 95 * dir, scale: 1.5 }, { easing: cc.easing.sineOut })
            .to(durationJump, { y: this.groundLine, angle: 185 * dir, scale: 1.3 }, { easing: cc.easing.sineIn })
            .to(durationSlide, { angle: 0 }, { easing: cc.easing.sineOut })
            .start();
    };
    Jumpjump3d.prototype.close = function () {
        Utils_1.Utils.removeNode(this.node);
    };
    var Jumpjump3d_1;
    Jumpjump3d = Jumpjump3d_1 = __decorate([
        ccclass
    ], Jumpjump3d);
    return Jumpjump3d;
}(cc.Component));
exports.default = Jumpjump3d;

cc._RF.pop();