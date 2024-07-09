"use strict";
cc._RF.push(module, 'a568bfXKBlMAZhMOOrBp75A', 'SpriteToHome');
// script/common/effect/SpriteToHome.ts

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
var GameUtils_1 = require("../../game/GameUtils");
var Utils_1 = require("../../utils/Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SpriteToHome = /** @class */ (function (_super) {
    __extends(SpriteToHome, _super);
    function SpriteToHome() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.icon = null;
        _this.withRotation = false;
        _this.endEffectPos = undefined;
        _this.spdx = 30;
        _this.spdy = 10;
        _this.groundNum = 0;
        _this.center = undefined;
        _this.status = true;
        _this.next = undefined;
        _this.toScale = 1;
        _this.aniBackOut = true;
        return _this;
    }
    SpriteToHome_1 = SpriteToHome;
    //全局计数
    // private static NumAll = 0;
    /**
     * 创建一个载体，并挂载一个乘客
     * @param passenger
     * @param startWorldPos
     * @param endWorldPos
     */
    SpriteToHome.createVehicle = function (passer, startWorldPos, endWorldPos, withRotation, next) {
        return __awaiter(this, void 0, void 0, function () {
            var vehicle, passenger, script;
            return __generator(this, function (_a) {
                vehicle = new cc.Node();
                vehicle.width = passer.width;
                vehicle.height = passer.height;
                vehicle.position = startWorldPos;
                passenger = cc.instantiate(passer);
                passenger.removeComponent(cc.Widget);
                passenger.x = 0;
                passenger.y = 0;
                passenger.parent = vehicle;
                script = vehicle.addComponent(SpriteToHome_1);
                script.next = next;
                script.withRotation = withRotation;
                script.endEffectPos = GameUtils_1.GameUtils.effectLayer.convertToNodeSpaceAR(endWorldPos);
                script.icon = passenger;
                GameUtils_1.GameUtils.addEffectAR(vehicle);
                return [2 /*return*/];
            });
        });
    };
    SpriteToHome.create = function (spriteFrame, startWorldPos, endWorldPos, withRotation, next, scale) {
        if (scale === void 0) { scale = 1; }
        return __awaiter(this, void 0, void 0, function () {
            var node, icon, sprite, script;
            return __generator(this, function (_a) {
                node = new cc.Node();
                icon = new cc.Node();
                node.addChild(icon);
                sprite = icon.addComponent(cc.Sprite);
                icon.scale = scale;
                sprite.sizeMode = cc.Sprite.SizeMode.RAW;
                sprite.spriteFrame = spriteFrame;
                script = node.addComponent(SpriteToHome_1);
                script.withRotation = withRotation;
                script.next = next;
                node.position = startWorldPos;
                script.endEffectPos = GameUtils_1.GameUtils.effectLayer.convertToNodeSpaceAR(endWorldPos);
                GameUtils_1.GameUtils.addEffectAR(node);
                return [2 /*return*/];
            });
        });
    };
    SpriteToHome.createNode = function (effNode, startWorldPos, endWorldPos, withRotation, next, toScale, aniBackOut) {
        if (toScale === void 0) { toScale = 1; }
        if (aniBackOut === void 0) { aniBackOut = true; }
        return __awaiter(this, void 0, void 0, function () {
            var node, script;
            return __generator(this, function (_a) {
                node = new cc.Node("effectNode");
                effNode.parent = node;
                effNode.position = cc.v2(0, 0);
                node.position = startWorldPos;
                script = node.addComponent(SpriteToHome_1);
                script.withRotation = withRotation;
                script.endEffectPos = GameUtils_1.GameUtils.effectLayer.convertToNodeSpaceAR(endWorldPos);
                script.next = next;
                script.toScale = toScale;
                script.aniBackOut = aniBackOut;
                GameUtils_1.GameUtils.addEffectAR(node);
                return [2 /*return*/];
            });
        });
    };
    SpriteToHome.prototype.onLoad = function () {
        var _this = this;
        // SpriteToHome.NumAll++;
        this.icon = this.node.children[0];
        var homeDuration = 0.8; // Utils.randomFloat(0.5, 1.5);
        this.node.scale = Utils_1.Utils.randomFloat(0.9, 1.1);
        cc.tween(this.node).to(homeDuration, { position: this.endEffectPos, scale: this.toScale }, { easing: cc.easing.sineIn }).call(function () {
            cc.tween(_this.node).to(0.2, { opacity: 0, scale: 1.4 }, { easing: cc.easing.sineOut }).call(function () {
                _this.icon.stopAllActions();
                _this.node.stopAllActions();
                Utils_1.Utils.removeNode(_this.node);
            }).start();
            _this.next && _this.next();
        }).start();
        if (this.withRotation) {
            this.icon.angle = 180;
        }
        // let p = { x: Utils.randomIntInclusive(-150, 150) };
        // if (this.withRotation) {
        //     p["angle"] = 90;
        // }
        // cc.tween(this.icon).to(homeDuration * 0.3, p, { easing: "sineOut" }).call(() => {
        //     p = { x: 0 };
        //     if (this.withRotation) {
        //         p["angle"] = 0;
        //     }
        //     cc.tween(this.icon).to(homeDuration * 0.7, p, { easing: "sineIn" }).start();
        // }).start();
        // let deltaV = this.endEffectPos.y - this.node.y;
        if (this.aniBackOut) {
            cc.tween(this.icon)
                .to(homeDuration * 0.3, { y: -200 }, { easing: cc.easing.sineInOut })
                .to(homeDuration * 0.7, { y: 0 }, { easing: cc.easing.sineIn })
                .start();
        }
    };
    var SpriteToHome_1;
    SpriteToHome = SpriteToHome_1 = __decorate([
        ccclass
    ], SpriteToHome);
    return SpriteToHome;
}(cc.Component));
exports.default = SpriteToHome;

cc._RF.pop();