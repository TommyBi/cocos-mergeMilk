"use strict";
cc._RF.push(module, '6fb231fm49LNrCr/i4IuOWK', 'Ball_Main');
// script/common/Ball_Main.ts

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
var bl_Config_1 = require("../game/ui/bl_Config");
var BundleResourceList_1 = require("../game/common/BundleResourceList");
var UIManager_1 = require("../game/common/UIManager");
var LoadingScene_1 = require("../game/loading/LoadingScene");
var LanguageData_1 = require("../lang/LanguageData");
var SDKManager_1 = require("../utils/SDKManager");
var Utils_1 = require("../utils/Utils");
var AudioManager_1 = require("./AudioManager");
var HurryLoading_1 = require("./comp/HurryLoading");
var SceneLoadingUI_1 = require("./comp/SceneLoadingUI");
var GlobalDefines_1 = require("./consts/GlobalDefines");
var DataManager_1 = require("./DataManager");
var SceneManager_1 = require("./SceneManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Ball_Main = /** @class */ (function (_super) {
    __extends(Ball_Main, _super);
    function Ball_Main() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.uiNode = null;
        // 加载等待图标
        _this.hurryLoading = null;
        _this.uiCamera = null;
        _this.smNode = null;
        _this.resList = null;
        _this.config = null;
        //本地与服务器的时间差 秒
        _this.timeOffset_sec = 0;
        //本地与服务器的时间差 毫秒
        _this.timeOffset_msec = 0;
        _this.timeout_crossday = undefined;
        _this.isInited = false;
        _this.entryData = undefined;
        return _this;
    }
    Ball_Main_1 = Ball_Main;
    Object.defineProperty(Ball_Main, "instance", {
        get: function () {
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    Ball_Main.prototype.onShow = function (res) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.entryData = res;
                AudioManager_1.sd.resumeAll();
                if (!this.isInited) {
                    return [2 /*return*/];
                }
                return [2 /*return*/];
            });
        });
    };
    Ball_Main.prototype.onHide = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                AudioManager_1.sd.pauseAll();
                return [2 /*return*/];
            });
        });
    };
    Ball_Main.prototype.pase = function (country) {
        var jsonContent = this.config.json.language;
        //开始加密文本
        // for (let country in jsonContent) {
        var countryConfig = jsonContent[country];
        for (var key in countryConfig) {
            var text = countryConfig[key];
            console.log("开始解密文件==>", text);
            countryConfig[key] = decodeURIComponent(atob(text));
            console.log("解密后==>", countryConfig[key]);
        }
        // }
        // 将修改后的对象转换回JSON字符串
        // const modifiedJson = JSON.stringify(jsonContent, null, 2);
        return jsonContent[country];
    };
    // 游戏启动
    Ball_Main.prototype.onLoad = function () {
        window.addEventListener("unhandledrejection", function (e) {
            e.preventDefault();
            return true;
        });
        UIManager_1.ui.onLoad(this.uiNode, this.hurryLoading);
        // 挂载sceneManager操作的根节点
        SceneManager_1.sm.onLoad(this.smNode);
        // 获取国家
        bl_Config_1.bc.country = SDKManager_1.sdk.ball_getCountry();
        // 标记语言
        var langue;
        switch (bl_Config_1.bc.country) {
            case '2':
                langue = this.pase("pt");
                LanguageData_1.initSource("pt", langue);
                // initSource("pt", this.config.json.language['pt']);
                bl_Config_1.bc.moneyAbbr = "R$";
                break;
            case "10":
                langue = this.pase("en");
                LanguageData_1.initSource("en", langue);
                bl_Config_1.bc.moneyAbbr = "£";
                break;
            case "11":
                langue = this.pase("en");
                LanguageData_1.initSource("en", langue);
                bl_Config_1.bc.moneyAbbr = "R";
                break;
            case "12":
                langue = this.pase("en");
                LanguageData_1.initSource("en", langue);
                bl_Config_1.bc.moneyAbbr = "₦";
                break;
            case "13":
                // initSource("in", this.config.json.language['in']);
                langue = this.pase("in");
                LanguageData_1.initSource("in", langue);
                bl_Config_1.bc.moneyAbbr = "₹";
                break;
            default:
                langue = this.pase("en");
                LanguageData_1.initSource("en", langue);
                bl_Config_1.bc.moneyAbbr = "$";
                break;
        }
    };
    Ball_Main.prototype.start = function () {
        this.gameStart();
        // setTimeout(() => {
        //     sd.playBGM(`sounds/bg`,true);
        // }, 200);
    };
    /**
    * 微信监听好友定向分享回调
    * 返回分享成功与否
    * @param res
    */
    Ball_Main.prototype.onShareMessageToFriend = function (res) {
        // let event = new EventShareMessageToFriend();
        // event.res = res;
        // GlobalEvent.dispatchEvent(event);
        // Logger.debug("[Ball_Main onShareMessageToFriend] res:", res);
    };
    Ball_Main.prototype.gameStart = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // 获取时间（好像现在没法先有什么引用的地方）
                this.playtime = Utils_1.Utils.getCurTime();
                // 场景根节点的引用
                Ball_Main_1._instance = this;
                // 延迟调用
                setTimeout(function () {
                    // 添加游戏的各个层级节点，作为游戏场景根节点的子节点存在
                    UIManager_1.ui.checkNode();
                    // 加载场景初始化
                    var loadingScene = SceneManager_1.sm.node.getComponentInChildren(LoadingScene_1.default);
                    loadingScene.startLoading();
                }, 0);
                return [2 /*return*/];
            });
        });
    };
    Ball_Main.prototype.initGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        SceneLoadingUI_1.default.setProgress(0);
                        // dataManager 开始准备 - 登录接口调用
                        return [4 /*yield*/, DataManager_1.dm.onInit()];
                    case 1:
                        // dataManager 开始准备 - 登录接口调用
                        _a.sent();
                        SceneLoadingUI_1.default.setProgress(0.6);
                        Utils_1.Utils.waiting(0);
                        SceneLoadingUI_1.default.setProgress(0.7);
                        Utils_1.Utils.waiting(0);
                        SceneLoadingUI_1.default.setProgress(0.75);
                        Utils_1.Utils.waiting(0);
                        SceneLoadingUI_1.default.setProgress(0.8);
                        UIManager_1.ui.onInit();
                        Utils_1.Utils.waiting(0);
                        SceneLoadingUI_1.default.setProgress(0.85);
                        AudioManager_1.sd.init();
                        // await topres.onLoad(ui.getLayer(UILayer.Topres))
                        Utils_1.Utils.waiting(0);
                        SceneLoadingUI_1.default.setProgress(0.9);
                        Utils_1.Utils.waiting(0);
                        //进度条延时
                        // for (let i = 1; i <= 10; i++) {
                        //     SceneLoadingUI.setProgress(i / 10);
                        //     await Utils.waiting(20);
                        // }
                        this.registerCrossEvent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Ball_Main.prototype.GetScreenWHRate = function () {
        var screenSize = cc.view.getFrameSize();
        var currentScreenRate = screenSize.width / screenSize.height;
        return currentScreenRate;
    };
    //获取服务器时间戳 秒
    Ball_Main.prototype.getServerTime = function () {
        return Math.floor((new Date()).getTime() / 1000) + this.timeOffset_sec;
    };
    //获取服务器时间戳 毫秒
    Ball_Main.prototype.getServerTimeMsec = function () {
        return (new Date()).getTime() + this.timeOffset_msec;
    };
    /**
     * 时间同步检测
     * @param serverTime
     */
    Ball_Main.prototype.timeCheck = function (serverTime) {
        var curLocationTime = (new Date()).getTime();
        this.timeOffset_sec = serverTime - Math.floor(curLocationTime / 1000);
        this.timeOffset_msec = serverTime * 1000 - curLocationTime;
        return Math.abs(this.timeOffset_sec) < GlobalDefines_1.GlobalDefines.Second_Day;
    };
    /**
     * 注册跨天回调
     */
    Ball_Main.prototype.registerCrossEvent = function () {
        var _this = this;
        //同步时间后 注册跨天回调
        var curTime = this.getServerTimeMsec();
        var todyStartTime = Utils_1.Utils.getDayBeginTime(curTime);
        var tomorryStartTime = todyStartTime / 1000 + GlobalDefines_1.GlobalDefines.Second_Day;
        var offset = Utils_1.Utils.randomInt(0, 60 * 1); //1分钟错峰时间
        var deta = tomorryStartTime - curTime / 1000 + offset;
        clearTimeout(this.timeout_crossday);
        this.timeout_crossday = setTimeout(function () {
            _this.onCrossDay();
        }, deta * 1000);
    };
    /**
     * 跨天处理
     */
    Ball_Main.prototype.onCrossDay = function () {
        //跨天重登录
        SceneManager_1.sm.switchScene(LoadingScene_1.default);
    };
    var Ball_Main_1;
    __decorate([
        property(cc.Node)
    ], Ball_Main.prototype, "uiNode", void 0);
    __decorate([
        property(HurryLoading_1.default)
    ], Ball_Main.prototype, "hurryLoading", void 0);
    __decorate([
        property(cc.Camera)
    ], Ball_Main.prototype, "uiCamera", void 0);
    __decorate([
        property(cc.Node)
    ], Ball_Main.prototype, "smNode", void 0);
    __decorate([
        property(BundleResourceList_1.default)
    ], Ball_Main.prototype, "resList", void 0);
    __decorate([
        property(cc.JsonAsset)
    ], Ball_Main.prototype, "config", void 0);
    Ball_Main = Ball_Main_1 = __decorate([
        ccclass
    ], Ball_Main);
    return Ball_Main;
}(cc.Component));
exports.default = Ball_Main;

cc._RF.pop();