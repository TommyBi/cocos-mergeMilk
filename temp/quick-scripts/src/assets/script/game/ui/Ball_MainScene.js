"use strict";
cc._RF.push(module, '4ef50J9y+JBl46mZn7sNPUY', 'Ball_MainScene');
// script/game/ui/Ball_MainScene.ts

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
var AudioManager_1 = require("../../common/AudioManager");
var SceneManager_1 = require("../../common/SceneManager");
var bl_Config_1 = require("./bl_Config");
var bl_Logic_1 = require("./bl_Logic");
var bl_top_1 = require("./bl_top");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Ball_MainScene = /** @class */ (function (_super) {
    __extends(Ball_MainScene, _super);
    function Ball_MainScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.logic = null;
        _this.top_content = null;
        _this.topPre = null;
        return _this;
    }
    Ball_MainScene_1 = Ball_MainScene;
    Ball_MainScene.GetType = function () {
        return SceneManager_1.SceneType.Stage;
    };
    Ball_MainScene.prototype.getType = function () {
        return Ball_MainScene_1.GetType();
    };
    Ball_MainScene.prototype.getNode = function () {
        return this.node;
    };
    Ball_MainScene.prototype.initScene = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.logic.init()];
                    case 1:
                        _a.sent();
                        AudioManager_1.sd.playBGM("sounds/bg", true);
                        return [2 /*return*/];
                }
            });
        });
    };
    Ball_MainScene.prototype.removeScene = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    Ball_MainScene.prototype.onLoad = function () {
        cc.director.getPhysicsManager().enabled = true;
        // cc.director.getPhysicsManager().debugDrawFlags = cc.PhysicsManager.DrawBits.e_aabbBit |
        //     cc.PhysicsManager.DrawBits.e_jointBit |
        //     cc.PhysicsManager.DrawBits.e_shapeBit;
        this.addTop();
    };
    Ball_MainScene.prototype.addTop = function () {
        var top = cc.instantiate(this.topPre);
        top.parent = this.top_content;
        top.y = this.node.height / 2 - top.height / 2;
        bl_Config_1.bc.top = this.top = top.getComponent(bl_top_1.default);
    };
    Ball_MainScene.prototype.onEnable = function () {
    };
    Ball_MainScene.prototype.onDisable = function () {
    };
    var Ball_MainScene_1;
    Ball_MainScene.Prefab_Name = "prefab/game/scene/main";
    __decorate([
        property(bl_Logic_1.default)
    ], Ball_MainScene.prototype, "logic", void 0);
    __decorate([
        property(cc.Node)
    ], Ball_MainScene.prototype, "top_content", void 0);
    __decorate([
        property(cc.Prefab)
    ], Ball_MainScene.prototype, "topPre", void 0);
    Ball_MainScene = Ball_MainScene_1 = __decorate([
        ccclass
    ], Ball_MainScene);
    return Ball_MainScene;
}(SceneManager_1.GameScene));
exports.default = Ball_MainScene;

cc._RF.pop();