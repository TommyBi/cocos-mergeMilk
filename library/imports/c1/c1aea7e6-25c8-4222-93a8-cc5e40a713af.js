"use strict";
cc._RF.push(module, 'c1aeafmJchCIpOozF5ApxOv', 'bl_Config');
// script/game/ui/bl_Config.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bc = exports.bl_Config = void 0;
// 不太知道是什么，但看上去像是管理一些常量的空间
var bl_Config = /** @class */ (function () {
    function bl_Config() {
        this.guideStep = 0;
        this.maxId = 10;
        this.country = "6";
        this.moneyAbbr = "$";
        this.forceNum = -1;
    }
    bl_Config.prototype.getEmptyCount = function (list) {
        var arr = list.filter(function (value) {
            return value == 0;
        });
        if (arr.length > 2)
            return true;
        return false;
    };
    /**
     * 获取强制弹出视频规则
     * @param data
     */
    bl_Config.prototype.getForceCfgs = function (data) {
        this.forceCfgs = data;
    };
    bl_Config.Instance = new bl_Config();
    return bl_Config;
}());
exports.bl_Config = bl_Config;
exports.bc = bl_Config.Instance;

cc._RF.pop();