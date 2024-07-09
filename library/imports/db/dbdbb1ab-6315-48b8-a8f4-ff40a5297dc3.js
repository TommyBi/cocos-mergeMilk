"use strict";
cc._RF.push(module, 'dbdbbGrYxVIuKj0/0ClKX3D', 'GlobalDefines');
// script/common/consts/GlobalDefines.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadStatus = exports.GlobalDefines = void 0;
var GlobalDefines = /** @class */ (function () {
    function GlobalDefines() {
    }
    Object.defineProperty(GlobalDefines, "ScreenWidth", {
        get: function () {
            return this.Design_Width;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlobalDefines, "ScreenHeight", {
        get: function () {
            var rate = this.Design_Width / this.WindowWidth;
            return this.WindowHeight * rate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlobalDefines, "SafeAreaHeight", {
        get: function () {
            return this.ScreenHeight - this.MenuButtonLogic.top - this.MenuButtonLogic.height;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlobalDefines, "wsRate", {
        get: function () {
            return this.WindowWidth / this.ScreenWidth;
        },
        enumerable: false,
        configurable: true
    });
    //每一天的秒数
    GlobalDefines.Second_Day = 24 * 60 * 60;
    GlobalDefines.isIos = true;
    //屏幕相关
    GlobalDefines.PixelRatio = 2;
    GlobalDefines.WindowHeight = 667;
    GlobalDefines.WindowWidth = 375;
    GlobalDefines.MenuButtonLogic = {
        width: 174,
        height: 64,
        top: 16 * 2,
        right: 730,
        bottom: 80,
        left: 556
    };
    //wx.getSystemInfoSync时赋值
    GlobalDefines.SDKVersion = "";
    GlobalDefines.platform = "";
    GlobalDefines.Design_Width = 750;
    GlobalDefines.Design_Height = 1334;
    return GlobalDefines;
}());
exports.GlobalDefines = GlobalDefines;
//资源加载状态
var LoadStatus;
(function (LoadStatus) {
    LoadStatus[LoadStatus["Doing"] = -1] = "Doing";
    LoadStatus[LoadStatus["Success"] = 0] = "Success";
    LoadStatus[LoadStatus["GameOut"] = 1] = "GameOut";
})(LoadStatus = exports.LoadStatus || (exports.LoadStatus = {}));

cc._RF.pop();