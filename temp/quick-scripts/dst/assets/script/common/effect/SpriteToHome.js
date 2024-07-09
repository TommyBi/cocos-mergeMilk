
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/common/effect/SpriteToHome.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvY29tbW9uL2VmZmVjdC9TcHJpdGVUb0hvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsa0RBQWlEO0FBQ2pELDJDQUEwQztBQUVwQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUEwQyxnQ0FBWTtJQUF0RDtRQUFBLHFFQThHQztRQWpERyxVQUFJLEdBQVksSUFBSSxDQUFDO1FBQ3JCLGtCQUFZLEdBQVksS0FBSyxDQUFDO1FBQzlCLGtCQUFZLEdBQVksU0FBUyxDQUFDO1FBQ2xDLFVBQUksR0FBVyxFQUFFLENBQUM7UUFDbEIsVUFBSSxHQUFXLEVBQUUsQ0FBQztRQUNsQixlQUFTLEdBQVcsQ0FBQyxDQUFDO1FBQ3RCLFlBQU0sR0FBWSxTQUFTLENBQUM7UUFDNUIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUN2QixVQUFJLEdBQWEsU0FBUyxDQUFDO1FBQzNCLGFBQU8sR0FBVyxDQUFDLENBQUM7UUFDcEIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7O0lBdUMvQixDQUFDO3FCQTlHb0IsWUFBWTtJQUU3QixNQUFNO0lBQ04sNkJBQTZCO0lBQzdCOzs7OztPQUtHO0lBQ2lCLDBCQUFhLEdBQWpDLFVBQWtDLE1BQWUsRUFBRSxhQUFzQixFQUFFLFdBQW9CLEVBQUUsWUFBcUIsRUFBRSxJQUFjOzs7O2dCQUM5SCxPQUFPLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQzVCLE9BQU8sQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztnQkFDN0IsT0FBTyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO2dCQUMvQixPQUFPLENBQUMsUUFBUSxHQUFHLGFBQWEsQ0FB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QUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNYLEtBQUksQ0FBQyxJQUFJLElBQUksS0FBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRVgsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztTQUN6QjtRQUVELHNEQUFzRDtRQUN0RCwyQkFBMkI7UUFDM0IsdUJBQXVCO1FBQ3ZCLElBQUk7UUFDSixvRkFBb0Y7UUFDcEYsb0JBQW9CO1FBQ3BCLCtCQUErQjtRQUMvQiwwQkFBMEI7UUFDMUIsUUFBUTtRQUNSLG1GQUFtRjtRQUNuRixjQUFjO1FBQ2Qsa0RBQWtEO1FBQ2xELElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNqQixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7aUJBQ2QsRUFBRSxDQUFDLFlBQVksR0FBRyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO2lCQUNwRSxFQUFFLENBQUMsWUFBWSxHQUFHLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO2lCQUM5RCxLQUFLLEVBQUUsQ0FBQztTQUNoQjtJQUNMLENBQUM7O0lBN0dnQixZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBOEdoQztJQUFELG1CQUFDO0NBOUdELEFBOEdDLENBOUd5QyxFQUFFLENBQUMsU0FBUyxHQThHckQ7a0JBOUdvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2FtZVV0aWxzIH0gZnJvbSBcIi4uLy4uL2dhbWUvR2FtZVV0aWxzXCI7XG5pbXBvcnQgeyBVdGlscyB9IGZyb20gXCIuLi8uLi91dGlscy9VdGlsc1wiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3ByaXRlVG9Ib21lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIC8v5YWo5bGA6K6h5pWwXG4gICAgLy8gcHJpdmF0ZSBzdGF0aWMgTnVtQWxsID0gMDtcbiAgICAvKipcbiAgICAgKiDliJvlu7rkuIDkuKrovb3kvZPvvIzlubbmjILovb3kuIDkuKrkuZjlrqJcbiAgICAgKiBAcGFyYW0gcGFzc2VuZ2VyIFxuICAgICAqIEBwYXJhbSBzdGFydFdvcmxkUG9zIFxuICAgICAqIEBwYXJhbSBlbmRXb3JsZFBvcyBcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGNyZWF0ZVZlaGljbGUocGFzc2VyOiBjYy5Ob2RlLCBzdGFydFdvcmxkUG9zOiBjYy5WZWMyLCBlbmRXb3JsZFBvczogY2MuVmVjMiwgd2l0aFJvdGF0aW9uOiBib29sZWFuLCBuZXh0OiBGdW5jdGlvbikge1xuICAgICAgICBsZXQgdmVoaWNsZSA9IG5ldyBjYy5Ob2RlKCk7XG4gICAgICAgIHZlaGljbGUud2lkdGggPSBwYXNzZXIud2lkdGg7XG4gICAgICAgIHZlaGljbGUuaGVpZ2h0ID0gcGFzc2VyLmhlaWdodDtcbiAgICAgICAgdmVoaWNsZS5wb3NpdGlvbiA9IHN0YXJ0V29ybGRQb3M7XG5cbiAgICAgICAgbGV0IHBhc3NlbmdlciA9IGNjLmluc3RhbnRpYXRlKHBhc3Nlcik7XG4gICAgICAgIHBhc3Nlbmdlci5yZW1vdmVDb21wb25lbnQoY2MuV2lkZ2V0KTtcbiAgICAgICAgcGFzc2VuZ2VyLnggPSAwO1xuICAgICAgICBwYXNzZW5nZXIueSA9IDA7XG4gICAgICAgIHBhc3Nlbmdlci5wYXJlbnQgPSB2ZWhpY2xlO1xuXG4gICAgICAgIGxldCBzY3JpcHQ6IFNwcml0ZVRvSG9tZSA9IHZlaGljbGUuYWRkQ29tcG9uZW50KFNwcml0ZVRvSG9tZSk7XG4gICAgICAgIHNjcmlwdC5uZXh0ID0gbmV4dDtcbiAgICAgICAgc2NyaXB0LndpdGhSb3RhdGlvbiA9IHdpdGhSb3RhdGlvbjtcbiAgICAgICAgc2NyaXB0LmVuZEVmZmVjdFBvcyA9IEdhbWVVdGlscy5lZmZlY3RMYXllci5jb252ZXJ0VG9Ob2RlU3BhY2VBUihlbmRXb3JsZFBvcyk7XG4gICAgICAgIHNjcmlwdC5pY29uID0gcGFzc2VuZ2VyO1xuICAgICAgICBHYW1lVXRpbHMuYWRkRWZmZWN0QVIodmVoaWNsZSk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBjcmVhdGUoc3ByaXRlRnJhbWU6IGNjLlNwcml0ZUZyYW1lLCBzdGFydFdvcmxkUG9zOiBjYy5WZWMyLCBlbmRXb3JsZFBvczogY2MuVmVjMiwgd2l0aFJvdGF0aW9uOiBib29sZWFuLCBuZXh0PzogRnVuY3Rpb24sIHNjYWxlOiBudW1iZXIgPSAxKSB7XG4gICAgICAgIGxldCBub2RlID0gbmV3IGNjLk5vZGUoKTtcbiAgICAgICAgbGV0IGljb24gPSBuZXcgY2MuTm9kZSgpO1xuICAgICAgICBub2RlLmFkZENoaWxkKGljb24pO1xuICAgICAgICBsZXQgc3ByaXRlID0gaWNvbi5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgaWNvbi5zY2FsZSA9IHNjYWxlO1xuICAgICAgICBzcHJpdGUuc2l6ZU1vZGUgPSBjYy5TcHJpdGUuU2l6ZU1vZGUuUkFXO1xuICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcbiAgICAgICAgbGV0IHNjcmlwdDogU3ByaXRlVG9Ib21lID0gbm9kZS5hZGRDb21wb25lbnQoU3ByaXRlVG9Ib21lKTtcbiAgICAgICAgc2NyaXB0LndpdGhSb3RhdGlvbiA9IHdpdGhSb3RhdGlvbjtcbiAgICAgICAgc2NyaXB0Lm5leHQgPSBuZXh0O1xuICAgICAgICBub2RlLnBvc2l0aW9uID0gc3RhcnRXb3JsZFBvcztcbiAgICAgICAgc2NyaXB0LmVuZEVmZmVjdFBvcyA9IEdhbWVVdGlscy5lZmZlY3RMYXllci5jb252ZXJ0VG9Ob2RlU3BhY2VBUihlbmRXb3JsZFBvcyk7XG4gICAgICAgIEdhbWVVdGlscy5hZGRFZmZlY3RBUihub2RlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGNyZWF0ZU5vZGUoZWZmTm9kZTogY2MuTm9kZSwgc3RhcnRXb3JsZFBvczogY2MuVmVjMiwgZW5kV29ybGRQb3M6IGNjLlZlYzIsIHdpdGhSb3RhdGlvbjogYm9vbGVhbiwgbmV4dD86IEZ1bmN0aW9uLCB0b1NjYWxlOiBudW1iZXIgPSAxLCBhbmlCYWNrT3V0OiBib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBsZXQgbm9kZSA9IG5ldyBjYy5Ob2RlKFwiZWZmZWN0Tm9kZVwiKTtcblxuICAgICAgICBlZmZOb2RlLnBhcmVudCA9IG5vZGU7XG4gICAgICAgIGVmZk5vZGUucG9zaXRpb24gPSBjYy52MigwLCAwKTtcbiAgICAgICAgbm9kZS5wb3NpdGlvbiA9IHN0YXJ0V29ybGRQb3M7XG4gICAgICAgIGxldCBzY3JpcHQ6IFNwcml0ZVRvSG9tZSA9IG5vZGUuYWRkQ29tcG9uZW50KFNwcml0ZVRvSG9tZSk7XG4gICAgICAgIHNjcmlwdC53aXRoUm90YXRpb24gPSB3aXRoUm90YXRpb247XG4gICAgICAgIHNjcmlwdC5lbmRFZmZlY3RQb3MgPSBHYW1lVXRpbHMuZWZmZWN0TGF5ZXIuY29udmVydFRvTm9kZVNwYWNlQVIoZW5kV29ybGRQb3MpO1xuICAgICAgICBzY3JpcHQubmV4dCA9IG5leHQ7XG4gICAgICAgIHNjcmlwdC50b1NjYWxlID0gdG9TY2FsZTtcbiAgICAgICAgc2NyaXB0LmFuaUJhY2tPdXQgPSBhbmlCYWNrT3V0O1xuICAgICAgICBHYW1lVXRpbHMuYWRkRWZmZWN0QVIobm9kZSk7XG4gICAgfVxuXG4gICAgaWNvbjogY2MuTm9kZSA9IG51bGw7XG4gICAgd2l0aFJvdGF0aW9uOiBib29sZWFuID0gZmFsc2U7XG4gICAgZW5kRWZmZWN0UG9zOiBjYy5WZWMyID0gdW5kZWZpbmVkO1xuICAgIHNwZHg6IG51bWJlciA9IDMwO1xuICAgIHNwZHk6IG51bWJlciA9IDEwO1xuICAgIGdyb3VuZE51bTogbnVtYmVyID0gMDtcbiAgICBjZW50ZXI6IGNjLlZlYzIgPSB1bmRlZmluZWQ7XG4gICAgc3RhdHVzOiBib29sZWFuID0gdHJ1ZTtcbiAgICBuZXh0OiBGdW5jdGlvbiA9IHVuZGVmaW5lZDtcbiAgICB0b1NjYWxlOiBudW1iZXIgPSAxO1xuICAgIGFuaUJhY2tPdXQ6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICAvLyBTcHJpdGVUb0hvbWUuTnVtQWxsKys7XG4gICAgICAgIHRoaXMuaWNvbiA9IHRoaXMubm9kZS5jaGlsZHJlblswXTtcbiAgICAgICAgbGV0IGhvbWVEdXJhdGlvbiA9IDAuODsvLyBVdGlscy5yYW5kb21GbG9hdCgwLjUsIDEuNSk7XG4gICAgICAgIHRoaXMubm9kZS5zY2FsZSA9IFV0aWxzLnJhbmRvbUZsb2F0KDAuOSwgMS4xKTtcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKS50byhob21lRHVyYXRpb24sIHsgcG9zaXRpb246IHRoaXMuZW5kRWZmZWN0UG9zLCBzY2FsZTogdGhpcy50b1NjYWxlIH0sIHsgZWFzaW5nOiBjYy5lYXNpbmcuc2luZUluIH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKS50bygwLjIsIHsgb3BhY2l0eTogMCwgc2NhbGU6IDEuNCB9LCB7IGVhc2luZzogY2MuZWFzaW5nLnNpbmVPdXQgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pY29uLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgICAgICAgICAgVXRpbHMucmVtb3ZlTm9kZSh0aGlzLm5vZGUpO1xuICAgICAgICAgICAgfSkuc3RhcnQoKTtcbiAgICAgICAgICAgIHRoaXMubmV4dCAmJiB0aGlzLm5leHQoKTtcbiAgICAgICAgfSkuc3RhcnQoKTtcblxuICAgICAgICBpZiAodGhpcy53aXRoUm90YXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuaWNvbi5hbmdsZSA9IDE4MDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGxldCBwID0geyB4OiBVdGlscy5yYW5kb21JbnRJbmNsdXNpdmUoLTE1MCwgMTUwKSB9O1xuICAgICAgICAvLyBpZiAodGhpcy53aXRoUm90YXRpb24pIHtcbiAgICAgICAgLy8gICAgIHBbXCJhbmdsZVwiXSA9IDkwO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGNjLnR3ZWVuKHRoaXMuaWNvbikudG8oaG9tZUR1cmF0aW9uICogMC4zLCBwLCB7IGVhc2luZzogXCJzaW5lT3V0XCIgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgIC8vICAgICBwID0geyB4OiAwIH07XG4gICAgICAgIC8vICAgICBpZiAodGhpcy53aXRoUm90YXRpb24pIHtcbiAgICAgICAgLy8gICAgICAgICBwW1wiYW5nbGVcIl0gPSAwO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyAgICAgY2MudHdlZW4odGhpcy5pY29uKS50byhob21lRHVyYXRpb24gKiAwLjcsIHAsIHsgZWFzaW5nOiBcInNpbmVJblwiIH0pLnN0YXJ0KCk7XG4gICAgICAgIC8vIH0pLnN0YXJ0KCk7XG4gICAgICAgIC8vIGxldCBkZWx0YVYgPSB0aGlzLmVuZEVmZmVjdFBvcy55IC0gdGhpcy5ub2RlLnk7XG4gICAgICAgIGlmICh0aGlzLmFuaUJhY2tPdXQpIHtcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuaWNvbilcbiAgICAgICAgICAgICAgICAudG8oaG9tZUR1cmF0aW9uICogMC4zLCB7IHk6IC0yMDAgfSwgeyBlYXNpbmc6IGNjLmVhc2luZy5zaW5lSW5PdXQgfSlcbiAgICAgICAgICAgICAgICAudG8oaG9tZUR1cmF0aW9uICogMC43LCB7IHk6IDAgfSwgeyBlYXNpbmc6IGNjLmVhc2luZy5zaW5lSW4gfSlcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==