
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/common/Ball_Main.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvY29tbW9uL0JhbGxfTWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrREFBMEM7QUFDMUMsd0VBQW1FO0FBQ25FLHNEQUE4QztBQUM5Qyw2REFBd0Q7QUFDeEQscURBQWtEO0FBQ2xELGtEQUEwQztBQUMxQyx3Q0FBdUM7QUFDdkMsK0NBQW9DO0FBQ3BDLG9EQUErQztBQUMvQyx3REFBbUQ7QUFDbkQsd0RBQXVEO0FBQ3ZELDZDQUFtQztBQUNuQywrQ0FBb0M7QUFFOUIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBdUMsNkJBQVk7SUFBbkQ7UUFBQSxxRUE4UEM7UUF2UEcsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixTQUFTO1FBRVQsa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBR2xDLGNBQVEsR0FBYyxJQUFJLENBQUM7UUFHM0IsWUFBTSxHQUFZLElBQUksQ0FBQztRQUd2QixhQUFPLEdBQXVCLElBQUksQ0FBQztRQUduQyxZQUFNLEdBQWlCLElBQUksQ0FBQztRQUU1QixjQUFjO1FBQ1Asb0JBQWMsR0FBVyxDQUFDLENBQUM7UUFDbEMsZUFBZTtRQUNQLHFCQUFlLEdBQVcsQ0FBQyxDQUFDO1FBRTVCLHNCQUFnQixHQUFRLFNBQVMsQ0FBQztRQUVuQyxjQUFRLEdBQVksS0FBSyxDQUFDO1FBRTFCLGVBQVMsR0FBUSxTQUFTLENBQUM7O0lBNE50QyxDQUFDO2tCQTlQb0IsU0FBUztJQUUxQixzQkFBa0IscUJBQVE7YUFBMUI7WUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzs7O09BQUE7SUFvQ0ssMEJBQU0sR0FBWixVQUFhLEdBQVE7OztnQkFDakIsSUFBSSxDQUFDLFNB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QUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBLFNBQVM7UUFDakQsSUFBSSxJQUFJLEdBQUcsZ0JBQWdCLEdBQUcsT0FBTyxHQUFHLElBQUksR0FBRyxNQUFNLENBQUM7UUFDdEQsWUFBWSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxVQUFVLENBQUM7WUFDL0IsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3RCLENBQUMsRUFBRSxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsOEJBQVUsR0FBVjtRQUNJLE9BQU87UUFDUCxpQkFBRSxDQUFDLFdBQVcsQ0FBQyxzQkFBWSxDQUFDLENBQUM7SUFDakMsQ0FBQzs7SUFwUEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDSztJQUl2QjtRQURDLFFBQVEsQ0FBQyxzQkFBWSxDQUFDO21EQUNXO0lBR2xDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7K0NBQ087SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDSztJQUd2QjtRQURDLFFBQVEsQ0FBQyw0QkFBa0IsQ0FBQzs4Q0FDTTtJQUduQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzZDQUNLO0lBdkJYLFNBQVM7UUFGN0IsT0FBTztPQUVhLFNBQVMsQ0E4UDdCO0lBQUQsZ0JBQUM7Q0E5UEQsQUE4UEMsQ0E5UHNDLEVBQUUsQ0FBQyxTQUFTLEdBOFBsRDtrQkE5UG9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBiYyB9IGZyb20gXCIuLi9nYW1lL3VpL2JsX0NvbmZpZ1wiO1xuaW1wb3J0IEJ1bmRsZVJlc291cmNlTGlzdCBmcm9tIFwiLi4vZ2FtZS9jb21tb24vQnVuZGxlUmVzb3VyY2VMaXN0XCI7XG5pbXBvcnQgeyB1aSB9IGZyb20gXCIuLi9nYW1lL2NvbW1vbi9VSU1hbmFnZXJcIjtcbmltcG9ydCBMb2FkaW5nU2NlbmUgZnJvbSBcIi4uL2dhbWUvbG9hZGluZy9Mb2FkaW5nU2NlbmVcIjtcbmltcG9ydCB7IGluaXRTb3VyY2UgfSBmcm9tIFwiLi4vbGFuZy9MYW5ndWFnZURhdGFcIjtcbmltcG9ydCB7IHNkayB9IGZyb20gXCIuLi91dGlscy9TREtNYW5hZ2VyXCI7XG5pbXBvcnQgeyBVdGlscyB9IGZyb20gXCIuLi91dGlscy9VdGlsc1wiO1xuaW1wb3J0IHsgc2QgfSBmcm9tIFwiLi9BdWRpb01hbmFnZXJcIjtcbmltcG9ydCBIdXJyeUxvYWRpbmcgZnJvbSBcIi4vY29tcC9IdXJyeUxvYWRpbmdcIjtcbmltcG9ydCBTY2VuZUxvYWRpbmdVSSBmcm9tIFwiLi9jb21wL1NjZW5lTG9hZGluZ1VJXCI7XG5pbXBvcnQgeyBHbG9iYWxEZWZpbmVzIH0gZnJvbSBcIi4vY29uc3RzL0dsb2JhbERlZmluZXNcIjtcbmltcG9ydCB7IGRtIH0gZnJvbSBcIi4vRGF0YU1hbmFnZXJcIjtcbmltcG9ydCB7IHNtIH0gZnJvbSBcIi4vU2NlbmVNYW5hZ2VyXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5AY2NjbGFzc1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYWxsX01haW4gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIHB1YmxpYyBzdGF0aWMgX2luc3RhbmNlOiBCYWxsX01haW47XG4gICAgcHVibGljIHN0YXRpYyBnZXQgaW5zdGFuY2UoKTogQmFsbF9NYWluIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xuICAgIH1cblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHVpTm9kZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICAvLyDliqDovb3nrYnlvoXlm77moIdcbiAgICBAcHJvcGVydHkoSHVycnlMb2FkaW5nKVxuICAgIGh1cnJ5TG9hZGluZzogSHVycnlMb2FkaW5nID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5DYW1lcmEpXG4gICAgdWlDYW1lcmE6IGNjLkNhbWVyYSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBzbU5vZGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KEJ1bmRsZVJlc291cmNlTGlzdClcbiAgICByZXNMaXN0OiBCdW5kbGVSZXNvdXJjZUxpc3QgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkpzb25Bc3NldClcbiAgICBjb25maWc6IGNjLkpzb25Bc3NldCA9IG51bGw7XG5cbiAgICAvL+acrOWcsOS4juacjeWKoeWZqOeahOaXtumXtOW3riDnp5JcbiAgICBwdWJsaWMgdGltZU9mZnNldF9zZWM6IG51bWJlciA9IDA7XG4gICAgLy/mnKzlnLDkuI7mnI3liqHlmajnmoTml7bpl7Tlt64g5q+r56eSXG4gICAgcHJpdmF0ZSB0aW1lT2Zmc2V0X21zZWM6IG51bWJlciA9IDA7XG5cbiAgICBwcml2YXRlIHRpbWVvdXRfY3Jvc3NkYXk6IGFueSA9IHVuZGVmaW5lZDtcblxuICAgIHB1YmxpYyBpc0luaXRlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgcHVibGljIGVudHJ5RGF0YTogYW55ID0gdW5kZWZpbmVkO1xuXG4gICAgcHVibGljIHRvQmFja2dyb3VuZE9TVGltZTogbnVtYmVyO1xuXG4gICAgcHVibGljIHBsYXl0aW1lOiBudW1iZXI7XG5cbiAgICBhc3luYyBvblNob3cocmVzOiBhbnkpIHtcbiAgICAgICAgdGhpcy5lbnRyeURhdGEgPSByZXM7XG5cbiAgICAgICAgc2QucmVzdW1lQWxsKCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLmlzSW5pdGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gd2FsbC5sb2FkVGFzaygpO1xuICAgIH1cblxuICAgIGFzeW5jIG9uSGlkZSgpIHtcbiAgICAgICAgc2QucGF1c2VBbGwoKTtcbiAgICB9XG5cbiAgICBwYXNlKGNvdW50cnkpIHtcbiAgICAgICAgY29uc3QganNvbkNvbnRlbnQgPSB0aGlzLmNvbmZpZy5qc29uLmxhbmd1YWdlO1xuICAgICAgICAvL+W8gOWni+WKoOWvhuaWh+acrFxuICAgICAgICAvLyBmb3IgKGxldCBjb3VudHJ5IGluIGpzb25Db250ZW50KSB7XG4gICAgICAgIGxldCBjb3VudHJ5Q29uZmlnID0ganNvbkNvbnRlbnRbY291bnRyeV1cbiAgICAgICAgZm9yIChsZXQga2V5IGluIGNvdW50cnlDb25maWcpIHtcbiAgICAgICAgICAgIGxldCB0ZXh0ID0gY291bnRyeUNvbmZpZ1trZXldXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuW8gOWni+ino+WvhuaWh+S7tj09PlwiLCB0ZXh0KVxuICAgICAgICAgICAgY291bnRyeUNvbmZpZ1trZXldID0gZGVjb2RlVVJJQ29tcG9uZW50KGF0b2IodGV4dCkpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLop6Plr4blkI49PT5cIiwgY291bnRyeUNvbmZpZ1trZXldKVxuICAgICAgICB9XG4gICAgICAgIC8vIH1cblxuICAgICAgICAvLyDlsIbkv67mlLnlkI7nmoTlr7nosaHovazmjaLlm55KU09O5a2X56ym5LiyXG4gICAgICAgIC8vIGNvbnN0IG1vZGlmaWVkSnNvbiA9IEpTT04uc3RyaW5naWZ5KGpzb25Db250ZW50LCBudWxsLCAyKTtcbiAgICAgICAgcmV0dXJuIGpzb25Db250ZW50W2NvdW50cnldO1xuICAgIH1cblxuICAgIC8vIOa4uOaIj+WQr+WKqFxuICAgIG9uTG9hZCgpIHtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInVuaGFuZGxlZHJlamVjdGlvblwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHVpLm9uTG9hZCh0aGlzLnVpTm9kZSwgdGhpcy5odXJyeUxvYWRpbmcpO1xuXG4gICAgICAgIC8vIOaMgui9vXNjZW5lTWFuYWdlcuaTjeS9nOeahOagueiKgueCuVxuICAgICAgICBzbS5vbkxvYWQodGhpcy5zbU5vZGUpO1xuXG4gICAgICAgIC8vIOiOt+WPluWbveWutlxuICAgICAgICBiYy5jb3VudHJ5ID0gc2RrLmJhbGxfZ2V0Q291bnRyeSgpO1xuXG4gICAgICAgIC8vIOagh+iusOivreiogFxuICAgICAgICBsZXQgbGFuZ3VlO1xuICAgICAgICBzd2l0Y2ggKGJjLmNvdW50cnkpIHtcbiAgICAgICAgICAgIGNhc2UgJzInOlxuICAgICAgICAgICAgICAgIGxhbmd1ZSA9IHRoaXMucGFzZShcInB0XCIpO1xuICAgICAgICAgICAgICAgIGluaXRTb3VyY2UoXCJwdFwiLCBsYW5ndWUpO1xuICAgICAgICAgICAgICAgIC8vIGluaXRTb3VyY2UoXCJwdFwiLCB0aGlzLmNvbmZpZy5qc29uLmxhbmd1YWdlWydwdCddKTtcbiAgICAgICAgICAgICAgICBiYy5tb25leUFiYnIgPSBcIlIkXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiMTBcIjpcbiAgICAgICAgICAgICAgICBsYW5ndWUgPSB0aGlzLnBhc2UoXCJlblwiKTtcbiAgICAgICAgICAgICAgICBpbml0U291cmNlKFwiZW5cIiwgbGFuZ3VlKTtcbiAgICAgICAgICAgICAgICBiYy5tb25leUFiYnIgPSBcIsKjXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiMTFcIjpcbiAgICAgICAgICAgICAgICBsYW5ndWUgPSB0aGlzLnBhc2UoXCJlblwiKTtcbiAgICAgICAgICAgICAgICBpbml0U291cmNlKFwiZW5cIiwgbGFuZ3VlKTtcbiAgICAgICAgICAgICAgICBiYy5tb25leUFiYnIgPSBcIlJcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCIxMlwiOlxuICAgICAgICAgICAgICAgIGxhbmd1ZSA9IHRoaXMucGFzZShcImVuXCIpO1xuICAgICAgICAgICAgICAgIGluaXRTb3VyY2UoXCJlblwiLCBsYW5ndWUpO1xuICAgICAgICAgICAgICAgIGJjLm1vbmV5QWJiciA9IFwi4oKmXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiMTNcIjpcbiAgICAgICAgICAgICAgICAvLyBpbml0U291cmNlKFwiaW5cIiwgdGhpcy5jb25maWcuanNvbi5sYW5ndWFnZVsnaW4nXSk7XG4gICAgICAgICAgICAgICAgbGFuZ3VlID0gdGhpcy5wYXNlKFwiaW5cIik7XG4gICAgICAgICAgICAgICAgaW5pdFNvdXJjZShcImluXCIsIGxhbmd1ZSk7XG4gICAgICAgICAgICAgICAgYmMubW9uZXlBYmJyID0gXCLigrlcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgbGFuZ3VlID0gdGhpcy5wYXNlKFwiZW5cIik7XG4gICAgICAgICAgICAgICAgaW5pdFNvdXJjZShcImVuXCIsIGxhbmd1ZSk7XG4gICAgICAgICAgICAgICAgYmMubW9uZXlBYmJyID0gXCIkXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5nYW1lU3RhcnQoKTtcbiAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIC8vICAgICBzZC5wbGF5QkdNKGBzb3VuZHMvYmdgLHRydWUpO1xuICAgICAgICAvLyB9LCAyMDApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICog5b6u5L+h55uR5ZCs5aW95Y+L5a6a5ZCR5YiG5Lqr5Zue6LCDXG4gICAgKiDov5Tlm57liIbkuqvmiJDlip/kuI7lkKZcbiAgICAqIEBwYXJhbSByZXMgXG4gICAgKi9cbiAgICBvblNoYXJlTWVzc2FnZVRvRnJpZW5kKHJlczogeyBzdWNjZXNzOiBib29sZWFuLCBlcnJNc2c6IHN0cmluZyB9KSB7XG4gICAgICAgIC8vIGxldCBldmVudCA9IG5ldyBFdmVudFNoYXJlTWVzc2FnZVRvRnJpZW5kKCk7XG4gICAgICAgIC8vIGV2ZW50LnJlcyA9IHJlcztcbiAgICAgICAgLy8gR2xvYmFsRXZlbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICAgIC8vIExvZ2dlci5kZWJ1ZyhcIltCYWxsX01haW4gb25TaGFyZU1lc3NhZ2VUb0ZyaWVuZF0gcmVzOlwiLCByZXMpO1xuICAgIH1cblxuICAgIGFzeW5jIGdhbWVTdGFydCgpIHtcbiAgICAgICAgLy8g6I635Y+W5pe26Ze077yI5aW95YOP546w5Zyo5rKh5rOV5YWI5pyJ5LuA5LmI5byV55So55qE5Zyw5pa577yJXG4gICAgICAgIHRoaXMucGxheXRpbWUgPSBVdGlscy5nZXRDdXJUaW1lKCk7XG5cbiAgICAgICAgLy8g5Zy65pmv5qC56IqC54K555qE5byV55SoXG4gICAgICAgIEJhbGxfTWFpbi5faW5zdGFuY2UgPSB0aGlzO1xuXG4gICAgICAgIC8vIOW7tui/n+iwg+eUqFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcblxuICAgICAgICAgICAgLy8g5re75Yqg5ri45oiP55qE5ZCE5Liq5bGC57qn6IqC54K577yM5L2c5Li65ri45oiP5Zy65pmv5qC56IqC54K555qE5a2Q6IqC54K55a2Y5ZyoXG4gICAgICAgICAgICB1aS5jaGVja05vZGUoKTtcblxuICAgICAgICAgICAgLy8g5Yqg6L295Zy65pmv5Yid5aeL5YyWXG4gICAgICAgICAgICBsZXQgbG9hZGluZ1NjZW5lOiBMb2FkaW5nU2NlbmUgPSBzbS5ub2RlLmdldENvbXBvbmVudEluQ2hpbGRyZW4oTG9hZGluZ1NjZW5lKTtcbiAgICAgICAgICAgIGxvYWRpbmdTY2VuZS5zdGFydExvYWRpbmcoKTtcbiAgICAgICAgfSwgMCk7XG4gICAgfVxuXG4gICAgYXN5bmMgaW5pdEdhbWUoKSB7XG4gICAgICAgIFNjZW5lTG9hZGluZ1VJLnNldFByb2dyZXNzKDApO1xuXG4gICAgICAgIC8vIGRhdGFNYW5hZ2VyIOW8gOWni+WHhuWkhyAtIOeZu+W9leaOpeWPo+iwg+eUqFxuICAgICAgICBhd2FpdCBkbS5vbkluaXQoKTtcbiAgICAgICAgU2NlbmVMb2FkaW5nVUkuc2V0UHJvZ3Jlc3MoMC42KTtcblxuICAgICAgICBVdGlscy53YWl0aW5nKDApO1xuICAgICAgICBTY2VuZUxvYWRpbmdVSS5zZXRQcm9ncmVzcygwLjcpO1xuXG4gICAgICAgIFV0aWxzLndhaXRpbmcoMCk7XG4gICAgICAgIFNjZW5lTG9hZGluZ1VJLnNldFByb2dyZXNzKDAuNzUpO1xuXG4gICAgICAgIFV0aWxzLndhaXRpbmcoMCk7XG4gICAgICAgIFNjZW5lTG9hZGluZ1VJLnNldFByb2dyZXNzKDAuOCk7XG5cbiAgICAgICAgdWkub25Jbml0KCk7XG5cbiAgICAgICAgVXRpbHMud2FpdGluZygwKTtcbiAgICAgICAgU2NlbmVMb2FkaW5nVUkuc2V0UHJvZ3Jlc3MoMC44NSk7XG5cbiAgICAgICAgc2QuaW5pdCgpO1xuXG4gICAgICAgIC8vIGF3YWl0IHRvcHJlcy5vbkxvYWQodWkuZ2V0TGF5ZXIoVUlMYXllci5Ub3ByZXMpKVxuXG4gICAgICAgIFV0aWxzLndhaXRpbmcoMCk7XG4gICAgICAgIFNjZW5lTG9hZGluZ1VJLnNldFByb2dyZXNzKDAuOSk7XG4gICAgICAgIFV0aWxzLndhaXRpbmcoMCk7XG4gICAgICAgIC8v6L+b5bqm5p2h5bu25pe2XG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAxOyBpIDw9IDEwOyBpKyspIHtcbiAgICAgICAgLy8gICAgIFNjZW5lTG9hZGluZ1VJLnNldFByb2dyZXNzKGkgLyAxMCk7XG4gICAgICAgIC8vICAgICBhd2FpdCBVdGlscy53YWl0aW5nKDIwKTtcbiAgICAgICAgLy8gfVxuICAgICAgICB0aGlzLnJlZ2lzdGVyQ3Jvc3NFdmVudCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBHZXRTY3JlZW5XSFJhdGUoKSB7XG4gICAgICAgIHZhciBzY3JlZW5TaXplID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKTtcbiAgICAgICAgdmFyIGN1cnJlbnRTY3JlZW5SYXRlID0gc2NyZWVuU2l6ZS53aWR0aCAvIHNjcmVlblNpemUuaGVpZ2h0O1xuICAgICAgICByZXR1cm4gY3VycmVudFNjcmVlblJhdGU7XG4gICAgfVxuXG4gICAgLy/ojrflj5bmnI3liqHlmajml7bpl7TmiLMg56eSXG4gICAgZ2V0U2VydmVyVGltZSgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoKG5ldyBEYXRlKCkpLmdldFRpbWUoKSAvIDEwMDApICsgdGhpcy50aW1lT2Zmc2V0X3NlYztcbiAgICB9XG5cbiAgICAvL+iOt+WPluacjeWKoeWZqOaXtumXtOaIsyDmr6vnp5JcbiAgICBnZXRTZXJ2ZXJUaW1lTXNlYygpIHtcbiAgICAgICAgcmV0dXJuIChuZXcgRGF0ZSgpKS5nZXRUaW1lKCkgKyB0aGlzLnRpbWVPZmZzZXRfbXNlYztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDml7bpl7TlkIzmraXmo4DmtYtcbiAgICAgKiBAcGFyYW0gc2VydmVyVGltZSBcbiAgICAgKi9cbiAgICB0aW1lQ2hlY2soc2VydmVyVGltZTogbnVtYmVyKSB7XG4gICAgICAgIGxldCBjdXJMb2NhdGlvblRpbWUgPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpO1xuICAgICAgICB0aGlzLnRpbWVPZmZzZXRfc2VjID0gc2VydmVyVGltZSAtIE1hdGguZmxvb3IoY3VyTG9jYXRpb25UaW1lIC8gMTAwMCk7XG4gICAgICAgIHRoaXMudGltZU9mZnNldF9tc2VjID0gc2VydmVyVGltZSAqIDEwMDAgLSBjdXJMb2NhdGlvblRpbWU7XG5cbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKHRoaXMudGltZU9mZnNldF9zZWMpIDwgR2xvYmFsRGVmaW5lcy5TZWNvbmRfRGF5O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOazqOWGjOi3qOWkqeWbnuiwg1xuICAgICAqL1xuICAgIHJlZ2lzdGVyQ3Jvc3NFdmVudCgpIHtcbiAgICAgICAgLy/lkIzmraXml7bpl7TlkI4g5rOo5YaM6Leo5aSp5Zue6LCDXG4gICAgICAgIGxldCBjdXJUaW1lID0gdGhpcy5nZXRTZXJ2ZXJUaW1lTXNlYygpO1xuICAgICAgICBsZXQgdG9keVN0YXJ0VGltZSA9IFV0aWxzLmdldERheUJlZ2luVGltZShjdXJUaW1lKTtcbiAgICAgICAgbGV0IHRvbW9ycnlTdGFydFRpbWUgPSB0b2R5U3RhcnRUaW1lIC8gMTAwMCArIEdsb2JhbERlZmluZXMuU2Vjb25kX0RheTtcbiAgICAgICAgbGV0IG9mZnNldCA9IFV0aWxzLnJhbmRvbUludCgwLCA2MCAqIDEpOy8vMeWIhumSn+mUmeWzsOaXtumXtFxuICAgICAgICBsZXQgZGV0YSA9IHRvbW9ycnlTdGFydFRpbWUgLSBjdXJUaW1lIC8gMTAwMCArIG9mZnNldDtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dF9jcm9zc2RheSk7XG4gICAgICAgIHRoaXMudGltZW91dF9jcm9zc2RheSA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vbkNyb3NzRGF5KCk7XG4gICAgICAgIH0sIGRldGEgKiAxMDAwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDot6jlpKnlpITnkIZcbiAgICAgKi9cbiAgICBvbkNyb3NzRGF5KCkge1xuICAgICAgICAvL+i3qOWkqemHjeeZu+W9lVxuICAgICAgICBzbS5zd2l0Y2hTY2VuZShMb2FkaW5nU2NlbmUpO1xuICAgIH1cblxuXG59XG5cbiJdfQ==