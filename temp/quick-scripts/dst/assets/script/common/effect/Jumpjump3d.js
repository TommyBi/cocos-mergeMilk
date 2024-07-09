
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/common/effect/Jumpjump3d.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvY29tbW9uL2VmZmVjdC9KdW1wanVtcDNkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrREFBaUQ7QUFDakQsMkNBQTBDO0FBRTFDLG9DQUF3QztBQUV4Qzs7RUFFRTtBQUNGO0lBQWlDLCtCQUFvQjtJQUdqRCxxQkFBbUIsS0FBYTtRQUFoQyxZQUNJLGtCQUFNLFdBQVcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBRWhDO1FBREcsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7O0lBQ3ZCLENBQUM7SUFMc0IsZ0JBQUksR0FBVyxhQUFhLENBQUM7SUFNeEQsa0JBQUM7Q0FQRCxBQU9DLENBUGdDLEVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVyxHQU9wRDtBQVBZLGtDQUFXO0FBVWxCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXdDLDhCQUFZO0lBQXBEO1FBQUEscUVBcUtDO1FBbEhHLFFBQUUsR0FBVyxDQUFDLENBQUM7UUFDZixRQUFFLEdBQVcsQ0FBQyxDQUFDO1FBQ2YsUUFBRSxHQUFXLEdBQUcsQ0FBQztRQUNqQixVQUFJLEdBQVcsSUFBSSxDQUFDO1FBQ3BCLGdCQUFVLEdBQVcsQ0FBQyxDQUFDO1FBQ3ZCLFdBQUssR0FBVyxDQUFDLENBQUM7UUFFbEIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixjQUFRLEdBQVksS0FBSyxDQUFDO1FBRTFCLGVBQVMsR0FBVyxDQUFDLENBQUM7UUFDdEIsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFDdkIsV0FBSyxHQUFZLFNBQVMsQ0FBQzs7UUEwRDNCLGFBQWE7UUFDYixtQ0FBbUM7UUFDbkMsNENBQTRDO1FBQzVDLGdDQUFnQztRQUNoQyxvQ0FB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RUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxHQUFHLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUM1RixFQUFFLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDcEcsRUFBRSxDQUFDLGFBQWEsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQzlELEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRCwwQkFBSyxHQUFMO1FBQ0ksYUFBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7SUF0SGdCLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0FxSzlCO0lBQUQsaUJBQUM7Q0FyS0QsQUFxS0MsQ0FyS3VDLEVBQUUsQ0FBQyxTQUFTLEdBcUtuRDtrQkFyS29CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHYW1lVXRpbHMgfSBmcm9tIFwiLi4vLi4vZ2FtZS9HYW1lVXRpbHNcIjtcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSBcIi4uLy4uL3V0aWxzL1V0aWxzXCI7XG5pbXBvcnQgQmFsbF9NYWluIGZyb20gXCIuLi9CYWxsX01haW5cIjtcbmltcG9ydCB7IEdsb2JhbEV2ZW50IH0gZnJvbSBcIi4uL0dsb2JhbFwiO1xuXG4vKlxuKiDpo57mirXmnIDnu4jnm67nmoTlnLBcbiovXG5leHBvcnQgY2xhc3MgRXZlbnRPbkJvb20gZXh0ZW5kcyBjYy5FdmVudC5FdmVudEN1c3RvbSB7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBOQU1FOiBzdHJpbmcgPSBcIkV2ZW50T25Cb29tXCI7XG4gICAgcHVibGljIHRUeXBlOiBudW1iZXI7XG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHRUeXBlOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoRXZlbnRPbkJvb20uTkFNRSwgdHJ1ZSk7XG4gICAgICAgIHRoaXMudFR5cGUgPSB0VHlwZTtcbiAgICB9XG59XG5cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEp1bXBqdW1wM2QgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgY3JlYXRlQnlTcHIoc2hhZG93RnJhbWU6IGNjLlNwcml0ZUZyYW1lLCBzcHJpdGVGcmFtZTogY2MuU3ByaXRlRnJhbWUsIHN0YXJ0V29ybGRQb3M6IGNjLlZlYzIsIGdyb3VuZExpbmU6IG51bWJlciwgc2NhbGU6IG51bWJlciwgdFdQb3M/OiBjYy5WZWMyLCB0VHlwZT86IG51bWJlcikge1xuICAgICAgICBsZXQgaWNvbiA9IG5ldyBjYy5Ob2RlKCk7XG4gICAgICAgIGxldCBzcHJpdGUgPSBpY29uLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICBzcHJpdGUuc2l6ZU1vZGUgPSBjYy5TcHJpdGUuU2l6ZU1vZGUuUkFXO1xuICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcbiAgICAgICAgc3ByaXRlLm5vZGUueSA9IHNwcml0ZS5ub2RlLmhlaWdodCAvIDI7Ly/kuIvovrnnvJjlr7npvZBcblxuICAgICAgICB0aGlzLl9jcmVhdGUoc2hhZG93RnJhbWUsIGljb24sIHN0YXJ0V29ybGRQb3MsIGdyb3VuZExpbmUsIHNjYWxlLCB0V1BvcywgdFR5cGUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgY3JlYXRlQnlTdHIoc2hhZG93RnJhbWU6IGNjLlNwcml0ZUZyYW1lLCBzdHI6IHN0cmluZywgc3RhcnRXb3JsZFBvczogY2MuVmVjMiwgZ3JvdW5kTGluZTogbnVtYmVyLCBzY2FsZTogbnVtYmVyLCB0V1Bvcz86IGNjLlZlYzIsIHRUeXBlPzogbnVtYmVyKSB7XG4gICAgICAgIGxldCBpY29uID0gbmV3IGNjLk5vZGUoKTtcbiAgICAgICAgaWNvbi5jb2xvciA9IGNjLmNvbG9yKDI0OSwgMjI5LCAxMTQsIDI1NSk7XG4gICAgICAgIGxldCBsYiA9IGljb24uYWRkQ29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgbGIuZm9udFNpemUgPSA0MDtcbiAgICAgICAgbGIuZW5hYmxlQm9sZCA9IHRydWU7XG4gICAgICAgIGxiLnN0cmluZyA9IHN0cjtcbiAgICAgICAgLy8gbGIubm9kZS55ID0gbGIubm9kZS5oZWlnaHQgLyAyOy8v5LiL6L6557yY5a+56b2QXG5cbiAgICAgICAgdGhpcy5fY3JlYXRlKHNoYWRvd0ZyYW1lLCBpY29uLCBzdGFydFdvcmxkUG9zLCBncm91bmRMaW5lLCBzY2FsZSwgdFdQb3MsIHRUeXBlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBhc3luYyBfY3JlYXRlKHNoYWRvd0ZyYW1lOiBjYy5TcHJpdGVGcmFtZSwgbm9kZUFjdG9yOiBjYy5Ob2RlLCBzdGFydFdvcmxkUG9zOiBjYy5WZWMyLCBncm91bmRMaW5lOiBudW1iZXIsIHNjYWxlOiBudW1iZXIsIHRXUG9zPzogY2MuVmVjMiwgdFR5cGU/OiBudW1iZXIpIHtcbiAgICAgICAgbGV0IG5vZGUgPSBuZXcgY2MuTm9kZSgpO1xuXG4gICAgICAgIGxldCBzaGFkb3cgPSBuZXcgY2MuTm9kZSgpO1xuICAgICAgICBzaGFkb3cueSA9IGdyb3VuZExpbmU7XG4gICAgICAgIHNoYWRvdy5zY2FsZVkgPSAwLjI7XG4gICAgICAgIHNoYWRvdy5zY2FsZVggPSAwLjNcbiAgICAgICAgc2hhZG93LmNvbG9yID0gY2MuQ29sb3IuQkxBQ0s7XG4gICAgICAgIGxldCBzcHIgPSBzaGFkb3cuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgIGlmIChzaGFkb3dGcmFtZSkge1xuICAgICAgICAgICAgc3ByLnNwcml0ZUZyYW1lID0gc2hhZG93RnJhbWU7XG4gICAgICAgICAgICBzaGFkb3cub3BhY2l0eSA9IDkwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2hhZG93Lm9wYWNpdHkgPSAwO1xuICAgICAgICB9XG4gICAgICAgIG5vZGUuYWRkQ2hpbGQoc2hhZG93KTtcblxuICAgICAgICBub2RlLmFkZENoaWxkKG5vZGVBY3Rvcik7XG5cbiAgICAgICAgbGV0IHNjcmlwdDogSnVtcGp1bXAzZCA9IG5vZGUuYWRkQ29tcG9uZW50KEp1bXBqdW1wM2QpO1xuICAgICAgICBub2RlLnBvc2l0aW9uID0gc3RhcnRXb3JsZFBvcztcbiAgICAgICAgc2NyaXB0Lmdyb3VuZExpbmUgPSBncm91bmRMaW5lO1xuICAgICAgICBzY3JpcHQuc2NhbGUgPSBzY2FsZSA9PSB1bmRlZmluZWQgPyBVdGlscy5yYW5kb21GbG9hdCgwLjgsIDEuMikgOiBzY2FsZTtcbiAgICAgICAgc2NyaXB0LnRXUG9zID0gdFdQb3M7XG4gICAgICAgIHNjcmlwdC50VHlwZSA9IHRUeXBlO1xuICAgICAgICBHYW1lVXRpbHMuYWRkRWZmZWN0QVIobm9kZSk7XG4gICAgfVxuXG4gICAgZHg6IG51bWJlciA9IDA7XG4gICAgZHk6IG51bWJlciA9IDA7XG4gICAgZHo6IG51bWJlciA9IDE3MDtcbiAgICByYXRlOiBudW1iZXIgPSAwLjQ1O1xuICAgIGdyb3VuZExpbmU6IG51bWJlciA9IDA7XG4gICAgc2NhbGU6IG51bWJlciA9IDE7XG5cbiAgICBpY29uOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIGlzRmFkaW5nOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBjdXJTdGF0dXM6IG51bWJlciA9IDA7XG4gICAgbmV4dFN0YXR1czogbnVtYmVyID0gMDtcbiAgICB0V1BvczogY2MuVmVjMiA9IHVuZGVmaW5lZDtcbiAgICB0VHlwZTogbnVtYmVyO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLmR6ID0gVXRpbHMucmFuZG9tSW50SW5jbHVzaXZlKHRoaXMuZHogLyAyLCB0aGlzLmR6KTtcbiAgICAgICAgbGV0IGRyID0gdGhpcy5keiAvIHRoaXMucmF0ZTtcbiAgICAgICAgdGhpcy5keCA9IFV0aWxzLnJhbmRvbUludEluY2x1c2l2ZSgtZHIsIGRyKTtcbiAgICAgICAgdGhpcy5keSA9IFV0aWxzLnJhbmRvbUludEluY2x1c2l2ZSgtZHIsIGRyKSAqIDAuNjtcbiAgICAgICAgdGhpcy5ub2RlLnNjYWxlID0gdGhpcy5zY2FsZTtcbiAgICAgICAgdGhpcy5pY29uID0gdGhpcy5ub2RlLmNoaWxkcmVuWzFdO1xuICAgICAgICBsZXQgZGVsYXlUaW1lID0gVXRpbHMucmFuZG9tRmxvYXQoMC4xNSwgMC4yNSk7XG4gICAgICAgIGxldCBkdXJhdGlvbiA9IFV0aWxzLnJhbmRvbUZsb2F0KDAuMiwgMC40KTtcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxuICAgICAgICAgICAgLmJ5KGR1cmF0aW9uLCB7IHg6IHRoaXMuZHgsIHk6IHRoaXMuZHkgfSwgeyBlYXNpbmc6IGNjLmVhc2luZy5zaW5lT3V0IH0pXG4gICAgICAgICAgICAuZGVsYXkoZGVsYXlUaW1lKVxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghIXRoaXMudFdQb3MpIHtcbiAgICAgICAgICAgICAgICAgICAgLy/po57lkJHph5HnjKogICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBsZXQgdE5Qb3MgPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHRoaXMudFdQb3MpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgc2NhbGUgPSB0aGlzLm5vZGUuc2NhbGU7XG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kZWxheSgwLjMpXG4gICAgICAgICAgICAgICAgICAgICAgICAudG8oMC40LCB7IHBvc2l0aW9uOiB0TlBvcywgc2NhbGU6IHNjYWxlICogMC44IH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR2FtZVV0aWxzLnBsYXlGbHlDb2luKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR2xvYmFsRXZlbnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnRPbkJvb20odGhpcy50VHlwZSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvL+a2iOWksVxuICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAudG8oMC4xNSwgeyBvcGFjaXR5OiAwIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgLy8gdGhpcy5qdW1wKGR1cmF0aW9uLCB0aGlzLmR4ID4gMCA/IDEgOiAtMSk7XG4gICAgfVxuICAgIGp1bXAoZHVyYXRpb246IG51bWJlciwgZGlyOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IGR1cmF0aW9uSnVtcCA9IFV0aWxzLnJhbmRvbUZsb2F0KDAuMTMsIDAuMTkpO1xuICAgICAgICBsZXQgZHVyYXRpb25TbGlkZSA9IE1hdGgubWF4KDAsIGR1cmF0aW9uIC0gZHVyYXRpb25KdW1wICogMik7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuaWNvbilcbiAgICAgICAgICAgIC50byhkdXJhdGlvbkp1bXAsIHsgeTogdGhpcy5keiwgYW5nbGU6IDk1ICogZGlyLCBzY2FsZTogMS41IH0sIHsgZWFzaW5nOiBjYy5lYXNpbmcuc2luZU91dCB9KVxuICAgICAgICAgICAgLnRvKGR1cmF0aW9uSnVtcCwgeyB5OiB0aGlzLmdyb3VuZExpbmUsIGFuZ2xlOiAxODUgKiBkaXIsIHNjYWxlOiAxLjMgfSwgeyBlYXNpbmc6IGNjLmVhc2luZy5zaW5lSW4gfSlcbiAgICAgICAgICAgIC50byhkdXJhdGlvblNsaWRlLCB7IGFuZ2xlOiAwIH0sIHsgZWFzaW5nOiBjYy5lYXNpbmcuc2luZU91dCB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgY2xvc2UoKSB7XG4gICAgICAgIFV0aWxzLnJlbW92ZU5vZGUodGhpcy5ub2RlKTtcbiAgICB9XG5cblxuXG4gICAgLy8gdXBkYXRlKCkge1xuICAgIC8vICAgICBpZiAodGhpcy5uZXh0U3RhdHVzICE9IC0xKSB7XG4gICAgLy8gICAgICAgICB0aGlzLmN1clN0YXR1cyA9IHRoaXMubmV4dFN0YXR1cztcbiAgICAvLyAgICAgICAgIHRoaXMubmV4dFN0YXR1cyA9IC0xO1xuICAgIC8vICAgICAgICAgc3dpdGNoICh0aGlzLmN1clN0YXR1cykge1xuICAgIC8vICAgICAgICAgICAgIGNhc2UgMDoge1xuICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLnNwZHggPSBVdGlscy5yYW5kb21JbnRJbmNsdXNpdmUoLXRoaXMuc3BkeCwgdGhpcy5zcGR4KTtcbiAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5zcGR5ID0gVXRpbHMucmFuZG9tSW50SW5jbHVzaXZlKDAsIHRoaXMuc3BkeSk7XG4gICAgLy8gICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICAvLyBjYXNlIDE6IHtcbiAgICAvLyAgICAgICAgICAgICAvLyAgICAgdGhpcy5ub2RlLnkgPSB0aGlzLmdyb3VuZExpbmU7XG4gICAgLy8gICAgICAgICAgICAgLy8gICAgIHRoaXMuc3BkeSA9IE1hdGguYWJzKHRoaXMuc3BkeSkgKiBVdGlscy5yYW5kb21GbG9hdCgwLjQsIDAuNik7XG4gICAgLy8gICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xuICAgIC8vICAgICAgICAgICAgIC8vIH1cbiAgICAvLyAgICAgICAgICAgICBjYXNlIDI6IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIC8vICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAvLyAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgc3dpdGNoICh0aGlzLmN1clN0YXR1cykge1xuICAgIC8vICAgICAgICAgY2FzZSAwOiB7XG4gICAgLy8gICAgICAgICAgICAgaWYgKHRoaXMubm9kZS55IDwgdGhpcy5ncm91bmRMaW5lKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgIHRoaXMubmV4dFN0YXR1cyA9IDE7XG4gICAgLy8gICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc3BkeSAtPSAuNTtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLm5vZGUueCArPSB0aGlzLnNwZHg7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5ub2RlLnkgKz0gdGhpcy5zcGR5O1xuICAgIC8vICAgICAgICAgICAgIHRoaXMuaWNvbi55ICs9IHRoaXMuc3BkejtcbiAgICAvLyAgICAgICAgICAgICBicmVhaztcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIC8vIGNhc2UgMToge1xuICAgIC8vICAgICAgICAgLy8gICAgIGlmICh0aGlzLm5vZGUueSA8IC1CYWxsX01haW4uaW5zdGFuY2UudWlNYW5hZ2VyLlNjcmVlbkhlaWdodCAvIDIpIHtcbiAgICAvLyAgICAgICAgIC8vICAgICAgICAgdGhpcy5uZXh0U3RhdHVzID0gMjtcbiAgICAvLyAgICAgICAgIC8vICAgICB9XG4gICAgLy8gICAgICAgICAvLyAgICAgdGhpcy5zcGR5IC09IC41O1xuICAgIC8vICAgICAgICAgLy8gICAgIHRoaXMubm9kZS54ICs9IHRoaXMuc3BkeDtcbiAgICAvLyAgICAgICAgIC8vICAgICB0aGlzLm5vZGUueSArPSB0aGlzLnNwZHk7XG4gICAgLy8gICAgICAgICAvLyAgICAgYnJlYWs7XG4gICAgLy8gICAgICAgICAvLyB9XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG59XG4iXX0=