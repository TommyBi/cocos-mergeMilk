"use strict";
cc._RF.push(module, '74ad3RfvBFIzYEhcaj3J1Rx', 'GameUtils');
// script/game/GameUtils.ts

"use strict";
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
exports.GameUtils = void 0;
var AudioManager_1 = require("../common/AudioManager");
var Toast_1 = require("../common/comp/toast/Toast");
var Ball_Main_1 = require("../common/Ball_Main");
var Utils_1 = require("../utils/Utils");
var UIManager_1 = require("./common/UIManager");
var GameUtils = /** @class */ (function () {
    function GameUtils() {
    }
    Object.defineProperty(GameUtils, "popLayer", {
        get: function () {
            return UIManager_1.ui.getLayer(UIManager_1.UILayer.Panel);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameUtils, "effectLayer", {
        get: function () {
            return UIManager_1.ui.getLayer(UIManager_1.UILayer.Effect);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameUtils, "loadingLayer", {
        get: function () {
            return UIManager_1.ui.getLayer(UIManager_1.UILayer.LoadingBar);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameUtils, "bannerLayer", {
        get: function () {
            return UIManager_1.ui.getLayer(UIManager_1.UILayer.Banner);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameUtils, "xLayer", {
        get: function () {
            return UIManager_1.ui.getLayer(UIManager_1.UILayer.X);
        },
        enumerable: false,
        configurable: true
    });
    GameUtils.popView = function (view, insert) {
        if (insert === void 0) { insert = false; }
        UIManager_1.ui.popView(view, insert);
    };
    GameUtils.addEffectAR = function (node) {
        UIManager_1.ui.addEffectAR(node);
    };
    GameUtils.playClick = function () {
        this.playSFX("click"); //("Button_click");
    };
    GameUtils.playDrop = function () {
        this.playSFX("drop"); //("Button_click");
    };
    GameUtils.playCompose = function () {
        this.playSFX("compose");
    };
    GameUtils.playFlyCoin = function () {
        this.playSFX("rise_1");
    };
    GameUtils.playSFX = function (sndName, ext) {
        if (ext === void 0) { ext = ".mp3"; }
        AudioManager_1.sd.playSFX("sounds/" + sndName, 1, ext);
    };
    GameUtils.showToast = function (context, ico) {
        Toast_1.default.show(UIManager_1.ui.getLayer(UIManager_1.UILayer.Tip), context, ico ? ico : Toast_1.TipIco.Tip);
    };
    GameUtils.showToast_noCoin = function () {
        this.showToast("金币不足", Toast_1.TipIco.Coin);
    };
    GameUtils.addEffBoom = function (wpos) {
        var boom = cc.instantiate(Ball_Main_1.default.instance.resList.prefab_eff_boom);
        boom.position = wpos;
        GameUtils.addEffectAR(boom);
        setTimeout(function () {
            Utils_1.Utils.removeNode(boom);
        }, 3000);
    };
    GameUtils.loadConfigFromAli = function (fileName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    GameUtils.createNodeByFrame = function (frame, scale, url) {
        var node = new cc.Node();
        var ico = new cc.Node();
        ico.scale = scale;
        ico.parent = node;
        var spr = ico.addComponent(cc.Sprite);
        spr.spriteFrame = frame;
        spr.sizeMode = cc.Sprite.SizeMode.RAW;
        if (url) {
            Utils_1.Utils.updateNodeSpriteFrame(url, ico, false);
        }
        return node;
    };
    return GameUtils;
}());
exports.GameUtils = GameUtils;

cc._RF.pop();