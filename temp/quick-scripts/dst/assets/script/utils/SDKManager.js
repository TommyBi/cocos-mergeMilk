
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/utils/SDKManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f964acTKuZLfZedEQIkOmh/', 'SDKManager');
// script/utils/SDKManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sdk = void 0;
var Ball_Main_1 = require("../common/Ball_Main");
var GameUtils_1 = require("../game/GameUtils");
var bl_Config_1 = require("../game/ui/bl_Config");
var SDKManager = /** @class */ (function () {
    function SDKManager() {
        this._adPath_ios = "Kiow_CsbAr_EErhViewcOntRoller"; //前缀：ball_tYiex，后缀：xiUk_egVjo
        // protected _adPath_ios = "Chi_PcaS_cAdE_ViewCon";//前缀：ball_tYiex，后缀：xiUk_egVjo
        this._baseCocos = "org/cocos2dx/javascript/AppActivity";
        this.testNum = 0;
    }
    SDKManager.getInstance = function () {
        if (SDKManager._instance == null) {
            SDKManager._instance = new SDKManager();
        }
        return SDKManager._instance;
    };
    Object.defineProperty(SDKManager.prototype, "isAndroid", {
        get: function () {
            // return false;
            return cc.sys.os == cc.sys.OS_ANDROID;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SDKManager.prototype, "isIphone", {
        get: function () {
            // return false;
            return cc.sys.os == cc.sys.OS_IOS;
        },
        enumerable: false,
        configurable: true
    });
    //保持屏幕常亮
    SDKManager.prototype.setKeep = function () {
        if (this.isIphone) {
            jsb["Device"].setKeepScreenOn(true);
        }
    };
    //- 统计事件接口
    SDKManager.prototype.onEvent = function (action, jsonData) {
        if (action === void 0) { action = "point_function"; }
        if (this.isIphone) {
            if (jsonData) {
                var data = JSON.stringify(jsonData);
                jsb.reflection.callStaticMethod("Chi_PcaS_cAdE_ViewCon", "ball_tYiexonEventxiUk_egVjo:jsonData:", action, data);
            }
            else
                jsb.reflection.callStaticMethod("Chi_PcaS_cAdE_ViewCon", "ball_tYiexonEventxiUk_egVjo:", action);
        }
    };
    //视频广告播放接口 
    SDKManager.prototype.ball_showAd = function (adConfig, force) {
        if (this.isIphone) {
            if (adConfig) {
                jsb.reflection.callStaticMethod(this._adPath_ios, "ball_tYiexshowAdxiUk_egVjo:force:", adConfig, force);
            }
        }
        else {
            var json = {
                ad_source: "getAward"
            };
            // GlobalEvent.dispatchEvent(new EventAdOverRequest(json.ad_source))
        }
    };
    //上报余额和当前提现档位金额 
    SDKManager.prototype.ball_Reponcendhdrawne = function (current, target) {
        if (this.isIphone) {
            jsb.reflection.callStaticMethod(this._adPath_ios, "ball_tYiexReponcendhdrawnexiUk_egVjo:withTXban:", current, target);
        }
    };
    //隐私政策
    SDKManager.prototype.ball_openPrivacy = function () {
        if (this.isIphone) {
            jsb.reflection.callStaticMethod(this._adPath_ios, "ball_tYiexopenPrivacyxiUk_egVjo");
        }
    };
    //用户协议
    SDKManager.prototype.ball_openUserService = function () {
        if (this.isIphone) {
            jsb.reflection.callStaticMethod(this._adPath_ios, "ball_tYiexopenUserServicexiUk_egVjo");
        }
    };
    //设备ID
    SDKManager.prototype.ball_getDeviceId = function () {
        var n = "";
        if (this.isIphone) {
            n = jsb.reflection.callStaticMethod(this._adPath_ios, "ball_tYiexgetDeviceIdxiUk_egVjo");
        }
        return n;
    };
    //国家
    SDKManager.prototype.ball_getCountry = function () {
        var n = "";
        if (this.isIphone) {
            n = jsb.reflection.callStaticMethod(this._adPath_ios, "ball_tYiexgetCountryxiUk_egVjo");
        }
        else {
            n = "6";
        }
        return n;
    };
    //强弹规则
    SDKManager.prototype.ball_getSpecialGear = function () {
        var n;
        if (this.isIphone) {
            n = jsb.reflection.callStaticMethod(this._adPath_ios, "ball_tYiexgetSpecialGearxiUk_egVjo");
        }
        else {
            n = [{ "tic": [-1, 20], "rate": [5, 5] }, { "tic": [21, 60], "rate": [4, 5] }, { "tic": [61, 150], "rate": [4, 3] }, { "tic": [151, -1], "rate": [3, 3] }];
        }
        var json = JSON.parse(n);
        // GlobalEvent.dispatchEvent(new EventConfigRequest(json));
        return n;
    };
    SDKManager.prototype.ball_SynsReport = function () {
        if (this.isIphone) {
            jsb.reflection.callStaticMethod(this._adPath_ios, "ball_tYiexSynsReportxiUk_egVjo");
        }
    };
    SDKManager.prototype.ball_gohpVcbaclok = function () {
        if (this.isIphone) {
            jsb.reflection.callStaticMethod(this._adPath_ios, "ball_tYiexgohpVcbaclokxiUk_egVjo");
        }
    };
    //震动
    SDKManager.prototype.vibrate = function (time) {
        if (this.isIphone) {
            jsb.reflection.callStaticMethod(this._baseCocos, "vibrate", "(I)V", time);
        }
        else {
        }
    };
    //复制
    SDKManager.prototype.copy = function (str) {
        if (this.isIphone) {
            jsb.reflection.callStaticMethod(this._adPath_ios, "ball_tYiexsetCopyxiUk_egVjo:", str);
        }
        else {
        }
    };
    /**
     * 奖励领取
     * @param drewTag 0,--当前领取方式 0表示普通领取，1表示视频（广告）领取
     */
    SDKManager.prototype.ball_getReward = function (drewTag) {
        if (drewTag === void 0) { drewTag = 0; }
        var obj = { drewTag: drewTag };
        var data = JSON.stringify(obj);
        this.ball_sendRequest("/qv2c/lt/aw", data);
    };
    /**
     * 抽奖
     * @param reqCount --抽奖次数，从1开始
     */
    SDKManager.prototype.ball_getWheelReward = function (reqCount) {
        var obj = { reqCount: reqCount };
        var data = JSON.stringify(obj);
        this.ball_sendRequest("/qv2c/lc/rdom/draw", data);
    };
    /**
     * 提现列表
     */
    SDKManager.prototype.ball_getWithdrawals = function () {
        this.ball_sendRequest("/qv2c/lc/awal/list");
    };
    //通信
    SDKManager.prototype.ball_sendRequest = function (action, requestData) {
        console.log("@@通信请求ball_sendRequest:", action, requestData);
        if (this.isIphone) {
            jsb.reflection.callStaticMethod(this._adPath_ios, "ball_tYiexsendRequestxiUk_egVjo:requestData:", action, requestData);
        }
        else {
            if (action == "/qv2c/lc/awal/list") { //提现列表
                if (this.testNum == 0) {
                    var message = " {\"errno\":\"0\",\"data\":{\"nowBalShow\":\"189.60\",\"nowLevel\":2,\"actCountCfg\":\"80\",\"nextLvCount\":10,\"nowLogDays\":4,\"todayGates\":1,\"showList\":[{\"needBal\":\"500\",\"drawBal\":\"500\",\"id\":2,\"newerTag\":2,\"needLevel\":41,\"left\":-1,\"needDays\":3},{\"needBal\":\"1000\",\"drawBal\":\"1000\",\"id\":3,\"newerTag\":2,\"needLevel\":42,\"left\":-1,\"needDays\":5},{\"needBal\":\"1500\",\"drawBal\":\"1500\",\"id\":4,\"newerTag\":2,\"needLevel\":43,\"left\":-1,\"needDays\":10},{\"needBal\":\"2000\",\"drawBal\":\"2000\",\"id\":5,\"newerTag\":2,\"needLevel\":44,\"left\":-1,\"needDays\":0}]},\"timeSign\":1713106575767,\"errmsg\":\"success\"}";
                    var json = JSON.parse(message);
                    var data = json.data;
                    // GlobalEvent.dispatchEvent(new EventListRequest(data))
                    this.testNum++;
                }
                else {
                    var message = " {\"errno\":\"0\",\"data\":{\"nowBalShow\":\"10489.60\",\"nowLevel\":2,\"actCountCfg\":\"80\",\"nextLvCount\":10,\"nowLogDays\":4,\"todayGates\":3,\"showList\":[{\"needBal\":\"500\",\"drawBal\":\"500\",\"id\":2,\"newerTag\":2,\"needLevel\":41,\"left\":-1,\"needDays\":3},{\"needBal\":\"1000\",\"drawBal\":\"1000\",\"id\":3,\"newerTag\":2,\"needLevel\":42,\"left\":-1,\"needDays\":5},{\"needBal\":\"1500\",\"drawBal\":\"1500\",\"id\":4,\"newerTag\":2,\"needLevel\":43,\"left\":-1,\"needDays\":10},{\"needBal\":\"2000\",\"drawBal\":\"2000\",\"id\":5,\"newerTag\":2,\"needLevel\":44,\"left\":-1,\"needDays\":0}]},\"timeSign\":1713106575767,\"errmsg\":\"success\"}";
                    var json = JSON.parse(message);
                    var data = json.data;
                    // GlobalEvent.dispatchEvent(new EventListRequest(data))
                }
            }
            else if (action == "/qv2c/lc/rdom/draw") { //转盘抽奖
                var json = {
                    data: {
                        "awardType": 1,
                        "awardShow": "20000",
                        "count": 1,
                        "balShow": "25400.00"
                    },
                };
                // GlobalEvent.dispatchEvent(new EventTurntable(json.data))
            }
            else if (action == "/qv2c/lt/aw") { //转盘抽奖
                var json = {
                    data: {
                        "amtShow": "5.2",
                        "balShow": "11.30",
                        "nowLevel": 1,
                        "nextLvCount": 88,
                        "todayGates": 5,
                        "allGates": 5 //--消除【总次数】
                    },
                };
                // GlobalEvent.dispatchEvent(new EventGetAwardRequest(json.data))
            }
        }
    };
    SDKManager._instance = null;
    return SDKManager;
}());
exports.default = SDKManager;
exports.sdk = SDKManager.getInstance();
window["XSSdkCallback"] = function (action, jsonStr) {
    console.log("***************前端收到消息***************", action + "   ", jsonStr);
    var json = JSON.parse(jsonStr);
    if (action == "ad_play") { //视频开始播放
        // EventDispath.send(EventType.VIDEO_BACK, 1);
    }
    else if (action == "ad_over") { //视频播放结束
        // GlobalEvent.dispatchEvent(new EventAdOverRequest(json.ad_source))
    }
    else if (action == "ad_error") { //视频播放出错
        var cfg = Ball_Main_1.default.instance.config;
        var tips = "";
        if (bl_Config_1.bc.country == "2") {
            tips = cfg.json.language['pt'].tips2;
        }
        else if (bl_Config_1.bc.country == "13") {
            tips = cfg.json.language['in'].tips2;
        }
        else {
            tips = cfg.json.language['en'].tips2;
        }
        GameUtils_1.GameUtils.showToast(tips);
    }
    else if (action == "ad_cd") { //视频播放视频冷却中
    }
    else if (action == "/qv2c/lt/aw") { //领取奖励
        // GlobalEvent.dispatchEvent(new EventGetAwardRequest(json.data));
        //    {
        //     "errno": "0",
        //         "errmsg": "success",
        //             "data": {
        //         "amtShow": "5.2", --- 领取的金额
        //         "balShow": "11.30", --当前余额
        //         "nowLevel": 1, -----> 当前用户【等级】
        //         "nextLvCount": 88, ----> 下一等级【需达到的总答题数】
        //         "todayGates": 5, --当天消除【次数】
        //         "allGates": 5--消除【总次数】
        //     },
        //     "timeSign": 1699427378861
    }
    else if (action == "/qv2c/lc/rdom/draw") { //转盘抽奖
        // GlobalEvent.dispatchEvent(new EventTurntable(json.data))
        //     {
        //     "errno": "0",
        //         "errmsg": "success",
        //             "data": {
        //         "awardType": 1, ----》固定类型，本版本忽略
        //         "awardShow": "20000", ----》奖励金额
        //         "count": 1, ----》抽奖次数
        //         "balShow": "25400.00"----》总余额
        //     },
        //     "timeSign": 1711638075665
    }
    else if (action == "/qv2c/lc/awal/list") { //提现列表
        // GlobalEvent.dispatchEvent(new EventListRequest(json.data))
        //         {
        //             "errno": "0",
        //                 "errmsg": "success",
        //                     "data": {
        //                 "nowLogDays": 0, --当前登录天数
        //                 "nowLevel": 0, --当前等级
        //                 "todayGates"：10, --今天消除次数
        //                 "nowBalShow": "25400.00", --- 当前余额
        //                 "actCountCfg": 80, --- 用于计算当天完成多少消除才算1天
        //                 "nextLvCount": 10, --下一等级需要达到的总数
        //                 //提现条件顺序：1,满足 750000 2，满足75000时开始计算累计登录天数，满足累计登录天数 3，达到的等级（达不到）
        //                 "showList": [
        //                     { "id": 2,-- -> 提现对应ID
        //                        "drawBal": "750000", ---> 提现目标
        //                          "needBal": "750000", ---> 需要达到的余额
        //                          "newerTag": 2, ---> 是否是新人提现，1是 2其它提现
        //                              "left": -1, ---》剩余可提现次数
        //                              "needDays": 3, ---》需要达到的登录天数
        //                          "needLevel": 41-- -》需要达到的等级
        // },
        //             {
        //                 "id": 3,
        //                     "drawBal": "1000000",
        //                         "needBal": "1000000",
        //                             "newerTag": 2,
        //                                 "left": -1,
        //                                     "needDays": 5,
        //                                         "needLevel": 42
        //             },
        //             {
        //                 "id": 4,
        //                     "drawBal": "3000000",
        //                         "needBal": "3000000",
        //                             "newerTag": 2,
        //                                 "left": -1,
        //                                     "needDays": 10,
        //                                         "needLevel": 43
        //             },
        //             {
        //                 "id": 5,
        //                     "drawBal": "5000000",
        //                         "needBal": "5000000",
        //                             "newerTag": 2,
        //                                 "left": -1,
        //                                     "needDays": 0,
        //                                         "needLevel": 44
        //             }]
        //         },
    }
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdXRpbHMvU0RLTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpREFBNEM7QUFFNUMsK0NBQThDO0FBQzlDLGtEQUEwQztBQUcxQztJQUFBO1FBRWMsZ0JBQVcsR0FBRywrQkFBK0IsQ0FBQyxDQUFBLDZCQUE2QjtRQUNyRixnRkFBZ0Y7UUFDdEUsZUFBVSxHQUFXLHFDQUFxQyxDQUFDO1FBbUpyRSxZQUFPLEdBQUcsQ0FBQyxDQUFDO0lBa0RoQixDQUFDO0lBbE1VLHNCQUFXLEdBQWxCO1FBQ0ksSUFBSSxVQUFVLENBQUMsU0FBUyxJQUFJLElBQUksRUFBRTtZQUM5QixVQUFVLENBQUMsU0FBUyxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7U0FDM0M7UUFDRCxPQUFPLFVBQVUsQ0FBQyxTQUFTLENBQUM7SUFDaEMsQ0FBQztJQUNELHNCQUFJLGlDQUFTO2FBQWI7WUFDSSxnQkFBZ0I7WUFDaEIsT0FBTyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQztRQUMxQyxDQUFDOzs7T0FBQTtJQUNELHNCQUFJLGdDQUFRO2FBQVo7WUFDSSxnQkFBZ0I7WUFDaEIsT0FBTyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztRQUN0QyxDQUFDOzs7T0FBQTtJQUNELFFBQVE7SUFDUiw0QkFBTyxHQUFQO1FBQ0ksSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2YsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN2QztJQUNMLENBQUM7SUFFRCxVQUFVO0lBQ1YsNEJBQU8sR0FBUCxVQUFRLE1BQXlCLEVBQUUsUUFBUztRQUFwQyx1QkFBQSxFQUFBLHlCQUF5QjtRQUM3QixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFD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Z0Q7UUFDaEQsNkNBQTZDO1FBQzdDLDhDQUE4QztRQUM5QyxzREFBc0Q7UUFDdEQsMERBQTBEO1FBQzFELGlCQUFpQjtRQUNqQixnQkFBZ0I7UUFDaEIsMkJBQTJCO1FBQzNCLDRDQUE0QztRQUM1QyxnREFBZ0Q7UUFDaEQsNkNBQTZDO1FBQzdDLDhDQUE4QztRQUM5QyxxREFBcUQ7UUFDckQsMERBQTBEO1FBQzFELGlCQUFpQjtRQUNqQixhQUFhO0tBQ2hCO0FBQ0wsQ0FBQyxDQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhbGxfTWFpbiBmcm9tIFwiLi4vY29tbW9uL0JhbGxfTWFpblwiO1xyXG5pbXBvcnQgeyBHbG9iYWxFdmVudCB9IGZyb20gXCIuLi9jb21tb24vR2xvYmFsXCI7XHJcbmltcG9ydCB7IEdhbWVVdGlscyB9IGZyb20gXCIuLi9nYW1lL0dhbWVVdGlsc1wiO1xyXG5pbXBvcnQgeyBiYyB9IGZyb20gXCIuLi9nYW1lL3VpL2JsX0NvbmZpZ1wiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNES01hbmFnZXIge1xyXG5cclxuICAgIHByb3RlY3RlZCBfYWRQYXRoX2lvcyA9IFwiS2lvd19Dc2JBcl9FRXJoVmlld2NPbnRSb2xsZXJcIjsvL+WJjee8gO+8mmJhbGxfdFlpZXjvvIzlkI7nvIDvvJp4aVVrX2VnVmpvXHJcbiAgICAvLyBwcm90ZWN0ZWQgX2FkUGF0aF9pb3MgPSBcIkNoaV9QY2FTX2NBZEVfVmlld0NvblwiOy8v5YmN57yA77yaYmFsbF90WWlleO+8jOWQjue8gO+8mnhpVWtfZWdWam9cclxuICAgIHByb3RlY3RlZCBfYmFzZUNvY29zOiBzdHJpbmcgPSBcIm9yZy9jb2NvczJkeC9qYXZhc2NyaXB0L0FwcEFjdGl2aXR5XCI7XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlID0gbnVsbDtcclxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBTREtNYW5hZ2VyIHtcclxuICAgICAgICBpZiAoU0RLTWFuYWdlci5faW5zdGFuY2UgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBTREtNYW5hZ2VyLl9pbnN0YW5jZSA9IG5ldyBTREtNYW5hZ2VyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBTREtNYW5hZ2VyLl9pbnN0YW5jZTtcclxuICAgIH1cclxuICAgIGdldCBpc0FuZHJvaWQoKSB7XHJcbiAgICAgICAgLy8gcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHJldHVybiBjYy5zeXMub3MgPT0gY2Muc3lzLk9TX0FORFJPSUQ7XHJcbiAgICB9XHJcbiAgICBnZXQgaXNJcGhvbmUoKSB7XHJcbiAgICAgICAgLy8gcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHJldHVybiBjYy5zeXMub3MgPT0gY2Muc3lzLk9TX0lPUztcclxuICAgIH1cclxuICAgIC8v5L+d5oyB5bGP5bmV5bi45LquXHJcbiAgICBzZXRLZWVwKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzSXBob25lKSB7XHJcbiAgICAgICAgICAgIGpzYltcIkRldmljZVwiXS5zZXRLZWVwU2NyZWVuT24odHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vLSDnu5/orqHkuovku7bmjqXlj6NcclxuICAgIG9uRXZlbnQoYWN0aW9uID0gXCJwb2ludF9mdW5jdGlvblwiLCBqc29uRGF0YT8pIHtcclxuICAgICAgICBpZiAodGhpcy5pc0lwaG9uZSkge1xyXG4gICAgICAgICAgICBpZiAoanNvbkRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gSlNPTi5zdHJpbmdpZnkoanNvbkRhdGEpO1xyXG4gICAgICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIkNoaV9QY2FTX2NBZEVfVmlld0NvblwiLCBcImJhbGxfdFlpZXhvbkV2ZW50eGlVa19lZ1Zqbzpqc29uRGF0YTpcIiwgYWN0aW9uLCBkYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJDaGlfUGNhU19jQWRFX1ZpZXdDb25cIiwgXCJiYWxsX3RZaWV4b25FdmVudHhpVWtfZWdWam86XCIsIGFjdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy/op4bpopHlub/lkYrmkq3mlL7mjqXlj6MgXHJcbiAgICBiYWxsX3Nob3dBZChhZENvbmZpZz8sIGZvcmNlPzogYm9vbGVhbikge1xyXG4gICAgICAgIGlmICh0aGlzLmlzSXBob25lKSB7XHJcbiAgICAgICAgICAgIGlmIChhZENvbmZpZykge1xyXG4gICAgICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZCh0aGlzLl9hZFBhdGhfaW9zLCBcImJhbGxfdFlpZXhzaG93QWR4aVVrX2VnVmpvOmZvcmNlOlwiLCBhZENvbmZpZywgZm9yY2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGpzb24gPSB7XHJcbiAgICAgICAgICAgICAgICBhZF9zb3VyY2U6IFwiZ2V0QXdhcmRcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIEdsb2JhbEV2ZW50LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50QWRPdmVyUmVxdWVzdChqc29uLmFkX3NvdXJjZSkpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy/kuIrmiqXkvZnpop3lkozlvZPliY3mj5DnjrDmoaPkvY3ph5Hpop0gXHJcbiAgICBiYWxsX1JlcG9uY2VuZGhkcmF3bmUoY3VycmVudD8sIHRhcmdldD8pIHtcclxuICAgICAgICBpZiAodGhpcy5pc0lwaG9uZSkge1xyXG4gICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKHRoaXMuX2FkUGF0aF9pb3MsIFwiYmFsbF90WWlleFJlcG9uY2VuZGhkcmF3bmV4aVVrX2VnVmpvOndpdGhUWGJhbjpcIiwgY3VycmVudCwgdGFyZ2V0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL+makOengeaUv+etllxyXG4gICAgYmFsbF9vcGVuUHJpdmFjeSgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0lwaG9uZSkge1xyXG4gICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKHRoaXMuX2FkUGF0aF9pb3MsIFwiYmFsbF90WWlleG9wZW5Qcml2YWN5eGlVa19lZ1Zqb1wiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL+eUqOaIt+WNj+iurlxyXG4gICAgYmFsbF9vcGVuVXNlclNlcnZpY2UoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNJcGhvbmUpIHtcclxuICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZCh0aGlzLl9hZFBhdGhfaW9zLCBcImJhbGxfdFlpZXhvcGVuVXNlclNlcnZpY2V4aVVrX2VnVmpvXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8v6K6+5aSHSURcclxuICAgIGJhbGxfZ2V0RGV2aWNlSWQoKSB7XHJcbiAgICAgICAgbGV0IG4gPSBcIlwiO1xyXG4gICAgICAgIGlmICh0aGlzLmlzSXBob25lKSB7XHJcbiAgICAgICAgICAgIG4gPSBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKHRoaXMuX2FkUGF0aF9pb3MsIFwiYmFsbF90WWlleGdldERldmljZUlkeGlVa19lZ1Zqb1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG47XHJcbiAgICB9XHJcbiAgICAvL+WbveWutlxyXG4gICAgYmFsbF9nZXRDb3VudHJ5KCkge1xyXG4gICAgICAgIGxldCBuID0gXCJcIjtcclxuICAgICAgICBpZiAodGhpcy5pc0lwaG9uZSkge1xyXG4gICAgICAgICAgICBuID0ganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZCh0aGlzLl9hZFBhdGhfaW9zLCBcImJhbGxfdFlpZXhnZXRDb3VudHJ5eGlVa19lZ1Zqb1wiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBuID0gXCI2XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuO1xyXG4gICAgfVxyXG4gICAgLy/lvLrlvLnop4TliJlcclxuICAgIGJhbGxfZ2V0U3BlY2lhbEdlYXIoKSB7XHJcbiAgICAgICAgbGV0IG47XHJcbiAgICAgICAgaWYgKHRoaXMuaXNJcGhvbmUpIHtcclxuICAgICAgICAgICAgbiA9IGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QodGhpcy5fYWRQYXRoX2lvcywgXCJiYWxsX3RZaWV4Z2V0U3BlY2lhbEdlYXJ4aVVrX2VnVmpvXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG4gPSBbeyBcInRpY1wiOiBbLTEsIDIwXSwgXCJyYXRlXCI6IFs1LCA1XSB9LCB7IFwidGljXCI6IFsyMSwgNjBdLCBcInJhdGVcIjogWzQsIDVdIH0sIHsgXCJ0aWNcIjogWzYxLCAxNTBdLCBcInJhdGVcIjogWzQsIDNdIH0sIHsgXCJ0aWNcIjogWzE1MSwgLTFdLCBcInJhdGVcIjogWzMsIDNdIH1dXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBqc29uID0gSlNPTi5wYXJzZShuKTtcclxuICAgICAgICAvLyBHbG9iYWxFdmVudC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudENvbmZpZ1JlcXVlc3QoanNvbikpO1xyXG4gICAgICAgIHJldHVybiBuO1xyXG4gICAgfVxyXG4gICAgYmFsbF9TeW5zUmVwb3J0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzSXBob25lKSB7XHJcbiAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QodGhpcy5fYWRQYXRoX2lvcywgXCJiYWxsX3RZaWV4U3luc1JlcG9ydHhpVWtfZWdWam9cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYmFsbF9nb2hwVmNiYWNsb2soKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNJcGhvbmUpIHtcclxuICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZCh0aGlzLl9hZFBhdGhfaW9zLCBcImJhbGxfdFlpZXhnb2hwVmNiYWNsb2t4aVVrX2VnVmpvXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL+mch+WKqFxyXG4gICAgdmlicmF0ZSh0aW1lOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0lwaG9uZSkge1xyXG4gICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKHRoaXMuX2Jhc2VDb2NvcywgXCJ2aWJyYXRlXCIsIFwiKEkpVlwiLCB0aW1lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL+WkjeWItlxyXG4gICAgY29weShzdHI6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLmlzSXBob25lKSB7XHJcbiAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QodGhpcy5fYWRQYXRoX2lvcywgXCJiYWxsX3RZaWV4c2V0Q29weXhpVWtfZWdWam86XCIsIHN0cik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlpZblirHpooblj5ZcclxuICAgICAqIEBwYXJhbSBkcmV3VGFnIDAsLS3lvZPliY3pooblj5bmlrnlvI8gMOihqOekuuaZrumAmumihuWPlu+8jDHooajnpLrop4bpopHvvIjlub/lkYrvvInpooblj5ZcclxuICAgICAqL1xyXG4gICAgYmFsbF9nZXRSZXdhcmQoZHJld1RhZyA9IDApIHtcclxuICAgICAgICBsZXQgb2JqID0geyBkcmV3VGFnOiBkcmV3VGFnIH07XHJcbiAgICAgICAgbGV0IGRhdGEgPSBKU09OLnN0cmluZ2lmeShvYmopXHJcbiAgICAgICAgdGhpcy5iYWxsX3NlbmRSZXF1ZXN0KFwiL3F2MmMvbHQvYXdcIiwgZGF0YSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOaKveWlllxyXG4gICAgICogQHBhcmFtIHJlcUNvdW50IC0t5oq95aWW5qyh5pWw77yM5LuOMeW8gOWni1xyXG4gICAgICovXHJcbiAgICBiYWxsX2dldFdoZWVsUmV3YXJkKHJlcUNvdW50KSB7XHJcbiAgICAgICAgbGV0IG9iaiA9IHsgcmVxQ291bnQ6IHJlcUNvdW50IH07XHJcbiAgICAgICAgbGV0IGRhdGEgPSBKU09OLnN0cmluZ2lmeShvYmopXHJcbiAgICAgICAgdGhpcy5iYWxsX3NlbmRSZXF1ZXN0KFwiL3F2MmMvbGMvcmRvbS9kcmF3XCIsIGRhdGEpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmj5DnjrDliJfooahcclxuICAgICAqL1xyXG4gICAgYmFsbF9nZXRXaXRoZHJhd2FscygpIHtcclxuICAgICAgICB0aGlzLmJhbGxfc2VuZFJlcXVlc3QoXCIvcXYyYy9sYy9hd2FsL2xpc3RcIik7XHJcbiAgICB9XHJcblxyXG4gICAgdGVzdE51bSA9IDA7XHJcbiAgICAvL+mAmuS/oVxyXG4gICAgYmFsbF9zZW5kUmVxdWVzdChhY3Rpb24sIHJlcXVlc3REYXRhPykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQEDpgJrkv6Hor7fmsYJiYWxsX3NlbmRSZXF1ZXN0OlwiLCBhY3Rpb24sIHJlcXVlc3REYXRhKTtcclxuICAgICAgICBpZiAodGhpcy5pc0lwaG9uZSkge1xyXG4gICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKHRoaXMuX2FkUGF0aF9pb3MsIFwiYmFsbF90WWlleHNlbmRSZXF1ZXN0eGlVa19lZ1ZqbzpyZXF1ZXN0RGF0YTpcIiwgYWN0aW9uLCByZXF1ZXN0RGF0YSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGFjdGlvbiA9PSBcIi9xdjJjL2xjL2F3YWwvbGlzdFwiKSB7ICAgICAvL+aPkOeOsOWIl+ihqFxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRlc3ROdW0gPT0gMCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZSA9IGAge1wiZXJybm9cIjpcIjBcIixcImRhdGFcIjp7XCJub3dCYWxTaG93XCI6XCIxODkuNjBcIixcIm5vd0xldmVsXCI6MixcImFjdENvdW50Q2ZnXCI6XCI4MFwiLFwibmV4dEx2Q291bnRcIjoxMCxcIm5vd0xvZ0RheXNcIjo0LFwidG9kYXlHYXRlc1wiOjEsXCJzaG93TGlzdFwiOlt7XCJuZWVkQmFsXCI6XCI1MDBcIixcImRyYXdCYWxcIjpcIjUwMFwiLFwiaWRcIjoyLFwibmV3ZXJUYWdcIjoyLFwibmVlZExldmVsXCI6NDEsXCJsZWZ0XCI6LTEsXCJuZWVkRGF5c1wiOjN9LHtcIm5lZWRCYWxcIjpcIjEwMDBcIixcImRyYXdCYWxcIjpcIjEwMDBcIixcImlkXCI6MyxcIm5ld2VyVGFnXCI6MixcIm5lZWRMZXZlbFwiOjQyLFwibGVmdFwiOi0xLFwibmVlZERheXNcIjo1fSx7XCJuZWVkQmFsXCI6XCIxNTAwXCIsXCJkcmF3QmFsXCI6XCIxNTAwXCIsXCJpZFwiOjQsXCJuZXdlclRhZ1wiOjIsXCJuZWVkTGV2ZWxcIjo0MyxcImxlZnRcIjotMSxcIm5lZWREYXlzXCI6MTB9LHtcIm5lZWRCYWxcIjpcIjIwMDBcIixcImRyYXdCYWxcIjpcIjIwMDBcIixcImlkXCI6NSxcIm5ld2VyVGFnXCI6MixcIm5lZWRMZXZlbFwiOjQ0LFwibGVmdFwiOi0xLFwibmVlZERheXNcIjowfV19LFwidGltZVNpZ25cIjoxNzEzMTA2NTc1NzY3LFwiZXJybXNnXCI6XCJzdWNjZXNzXCJ9YFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQganNvbiA9IEpTT04ucGFyc2UobWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBqc29uLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gR2xvYmFsRXZlbnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnRMaXN0UmVxdWVzdChkYXRhKSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRlc3ROdW0rKztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBgIHtcImVycm5vXCI6XCIwXCIsXCJkYXRhXCI6e1wibm93QmFsU2hvd1wiOlwiMTA0ODkuNjBcIixcIm5vd0xldmVsXCI6MixcImFjdENvdW50Q2ZnXCI6XCI4MFwiLFwibmV4dEx2Q291bnRcIjoxMCxcIm5vd0xvZ0RheXNcIjo0LFwidG9kYXlHYXRlc1wiOjMsXCJzaG93TGlzdFwiOlt7XCJuZWVkQmFsXCI6XCI1MDBcIixcImRyYXdCYWxcIjpcIjUwMFwiLFwiaWRcIjoyLFwibmV3ZXJUYWdcIjoyLFwibmVlZExldmVsXCI6NDEsXCJsZWZ0XCI6LTEsXCJuZWVkRGF5c1wiOjN9LHtcIm5lZWRCYWxcIjpcIjEwMDBcIixcImRyYXdCYWxcIjpcIjEwMDBcIixcImlkXCI6MyxcIm5ld2VyVGFnXCI6MixcIm5lZWRMZXZlbFwiOjQyLFwibGVmdFwiOi0xLFwibmVlZERheXNcIjo1fSx7XCJuZWVkQmFsXCI6XCIxNTAwXCIsXCJkcmF3QmFsXCI6XCIxNTAwXCIsXCJpZFwiOjQsXCJuZXdlclRhZ1wiOjIsXCJuZWVkTGV2ZWxcIjo0MyxcImxlZnRcIjotMSxcIm5lZWREYXlzXCI6MTB9LHtcIm5lZWRCYWxcIjpcIjIwMDBcIixcImRyYXdCYWxcIjpcIjIwMDBcIixcImlkXCI6NSxcIm5ld2VyVGFnXCI6MixcIm5lZWRMZXZlbFwiOjQ0LFwibGVmdFwiOi0xLFwibmVlZERheXNcIjowfV19LFwidGltZVNpZ25cIjoxNzEzMTA2NTc1NzY3LFwiZXJybXNnXCI6XCJzdWNjZXNzXCJ9YFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQganNvbiA9IEpTT04ucGFyc2UobWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBqc29uLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gR2xvYmFsRXZlbnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnRMaXN0UmVxdWVzdChkYXRhKSlcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYWN0aW9uID09IFwiL3F2MmMvbGMvcmRvbS9kcmF3XCIpIHsgICAgIC8v6L2s55uY5oq95aWWXHJcbiAgICAgICAgICAgICAgICBsZXQganNvbiA9IHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYXdhcmRUeXBlXCI6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYXdhcmRTaG93XCI6IFwiMjAwMDBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb3VudFwiOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImJhbFNob3dcIjogXCIyNTQwMC4wMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIEdsb2JhbEV2ZW50LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50VHVybnRhYmxlKGpzb24uZGF0YSkpXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYWN0aW9uID09IFwiL3F2MmMvbHQvYXdcIikgeyAgICAgLy/ovaznm5jmir3lpZZcclxuICAgICAgICAgICAgICAgIGxldCBqc29uID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhbXRTaG93XCI6IFwiNS4yXCIsLy8gLS0gLSDpooblj5bnmoTph5Hpop1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJiYWxTaG93XCI6IFwiMTEuMzBcIiwgLy8tLeW9k+WJjeS9meminVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5vd0xldmVsXCI6IDEsIC8vLS0tLS0+IOW9k+WJjeeUqOaIt+OAkOetiee6p+OAkVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5leHRMdkNvdW50XCI6IDg4LC8vLS0tLT4g5LiL5LiA562J57qn44CQ6ZyA6L6+5Yiw55qE5oC7562U6aKY5pWw44CRXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidG9kYXlHYXRlc1wiOiA1LCAvLy0t5b2T5aSp5raI6Zmk44CQ5qyh5pWw44CRXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYWxsR2F0ZXNcIjogNS8vLS3mtojpmaTjgJDmgLvmrKHmlbDjgJFcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gR2xvYmFsRXZlbnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnRHZXRBd2FyZFJlcXVlc3QoanNvbi5kYXRhKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnQgY29uc3Qgc2RrID0gU0RLTWFuYWdlci5nZXRJbnN0YW5jZSgpO1xyXG53aW5kb3dbXCJYU1Nka0NhbGxiYWNrXCJdID0gZnVuY3Rpb24gKGFjdGlvbiwganNvblN0cikge1xyXG4gICAgY29uc29sZS5sb2coXCIqKioqKioqKioqKioqKirliY3nq6/mlLbliLDmtojmga8qKioqKioqKioqKioqKipcIiwgYWN0aW9uICsgXCIgICBcIiwganNvblN0cik7XHJcbiAgICBsZXQganNvbiA9IEpTT04ucGFyc2UoanNvblN0cik7XHJcbiAgICBpZiAoYWN0aW9uID09IFwiYWRfcGxheVwiKSB7ICAgICAvL+inhumikeW8gOWni+aSreaUvlxyXG4gICAgICAgIC8vIEV2ZW50RGlzcGF0aC5zZW5kKEV2ZW50VHlwZS5WSURFT19CQUNLLCAxKTtcclxuICAgIH0gZWxzZSBpZiAoYWN0aW9uID09IFwiYWRfb3ZlclwiKSB7ICAgICAvL+inhumikeaSreaUvue7k+adn1xyXG4gICAgICAgIC8vIEdsb2JhbEV2ZW50LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50QWRPdmVyUmVxdWVzdChqc29uLmFkX3NvdXJjZSkpXHJcbiAgICB9IGVsc2UgaWYgKGFjdGlvbiA9PSBcImFkX2Vycm9yXCIpIHsgICAgIC8v6KeG6aKR5pKt5pS+5Ye66ZSZXHJcbiAgICAgICAgbGV0IGNmZyA9IEJhbGxfTWFpbi5pbnN0YW5jZS5jb25maWc7XHJcbiAgICAgICAgbGV0IHRpcHMgPSBcIlwiXHJcblxyXG4gICAgICAgIGlmIChiYy5jb3VudHJ5ID09IFwiMlwiKSB7XHJcblxyXG4gICAgICAgICAgICB0aXBzID0gY2ZnLmpzb24ubGFuZ3VhZ2VbJ3B0J10udGlwczI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChiYy5jb3VudHJ5ID09IFwiMTNcIikge1xyXG4gICAgICAgICAgICB0aXBzID0gY2ZnLmpzb24ubGFuZ3VhZ2VbJ2luJ10udGlwczI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGlwcyA9IGNmZy5qc29uLmxhbmd1YWdlWydlbiddLnRpcHMyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBHYW1lVXRpbHMuc2hvd1RvYXN0KHRpcHMpO1xyXG4gICAgfSBlbHNlIGlmIChhY3Rpb24gPT0gXCJhZF9jZFwiKSB7ICAgICAvL+inhumikeaSreaUvuinhumikeWGt+WNtOS4rVxyXG4gICAgfSBlbHNlIGlmIChhY3Rpb24gPT0gXCIvcXYyYy9sdC9hd1wiKSB7ICAgICAvL+mihuWPluWlluWKsVxyXG4gICAgICAgIC8vIEdsb2JhbEV2ZW50LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50R2V0QXdhcmRSZXF1ZXN0KGpzb24uZGF0YSkpO1xyXG4gICAgICAgIC8vICAgIHtcclxuICAgICAgICAvLyAgICAgXCJlcnJub1wiOiBcIjBcIixcclxuICAgICAgICAvLyAgICAgICAgIFwiZXJybXNnXCI6IFwic3VjY2Vzc1wiLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIFwiZGF0YVwiOiB7XHJcbiAgICAgICAgLy8gICAgICAgICBcImFtdFNob3dcIjogXCI1LjJcIiwgLS0tIOmihuWPlueahOmHkeminVxyXG4gICAgICAgIC8vICAgICAgICAgXCJiYWxTaG93XCI6IFwiMTEuMzBcIiwgLS3lvZPliY3kvZnpop1cclxuICAgICAgICAvLyAgICAgICAgIFwibm93TGV2ZWxcIjogMSwgLS0tLS0+IOW9k+WJjeeUqOaIt+OAkOetiee6p+OAkVxyXG4gICAgICAgIC8vICAgICAgICAgXCJuZXh0THZDb3VudFwiOiA4OCwgLS0tLT4g5LiL5LiA562J57qn44CQ6ZyA6L6+5Yiw55qE5oC7562U6aKY5pWw44CRXHJcbiAgICAgICAgLy8gICAgICAgICBcInRvZGF5R2F0ZXNcIjogNSwgLS3lvZPlpKnmtojpmaTjgJDmrKHmlbDjgJFcclxuICAgICAgICAvLyAgICAgICAgIFwiYWxsR2F0ZXNcIjogNS0t5raI6Zmk44CQ5oC75qyh5pWw44CRXHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gICAgIFwidGltZVNpZ25cIjogMTY5OTQyNzM3ODg2MVxyXG4gICAgfSBlbHNlIGlmIChhY3Rpb24gPT0gXCIvcXYyYy9sYy9yZG9tL2RyYXdcIikgeyAgICAgLy/ovaznm5jmir3lpZZcclxuICAgICAgICAvLyBHbG9iYWxFdmVudC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudFR1cm50YWJsZShqc29uLmRhdGEpKVxyXG4gICAgICAgIC8vICAgICB7XHJcbiAgICAgICAgLy8gICAgIFwiZXJybm9cIjogXCIwXCIsXHJcbiAgICAgICAgLy8gICAgICAgICBcImVycm1zZ1wiOiBcInN1Y2Nlc3NcIixcclxuICAgICAgICAvLyAgICAgICAgICAgICBcImRhdGFcIjoge1xyXG4gICAgICAgIC8vICAgICAgICAgXCJhd2FyZFR5cGVcIjogMSwgLS0tLeOAi+WbuuWumuexu+Wei++8jOacrOeJiOacrOW/veeVpVxyXG4gICAgICAgIC8vICAgICAgICAgXCJhd2FyZFNob3dcIjogXCIyMDAwMFwiLCAtLS0t44CL5aWW5Yqx6YeR6aKdXHJcbiAgICAgICAgLy8gICAgICAgICBcImNvdW50XCI6IDEsIC0tLS3jgIvmir3lpZbmrKHmlbBcclxuICAgICAgICAvLyAgICAgICAgIFwiYmFsU2hvd1wiOiBcIjI1NDAwLjAwXCItLS0t44CL5oC75L2Z6aKdXHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gICAgIFwidGltZVNpZ25cIjogMTcxMTYzODA3NTY2NVxyXG4gICAgfSBlbHNlIGlmIChhY3Rpb24gPT0gXCIvcXYyYy9sYy9hd2FsL2xpc3RcIikgeyAgICAgLy/mj5DnjrDliJfooahcclxuICAgICAgICAvLyBHbG9iYWxFdmVudC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudExpc3RSZXF1ZXN0KGpzb24uZGF0YSkpXHJcbiAgICAgICAgLy8gICAgICAgICB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgXCJlcnJub1wiOiBcIjBcIixcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgXCJlcnJtc2dcIjogXCJzdWNjZXNzXCIsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBcImRhdGFcIjoge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBcIm5vd0xvZ0RheXNcIjogMCwgLS3lvZPliY3nmbvlvZXlpKnmlbBcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgXCJub3dMZXZlbFwiOiAwLCAtLeW9k+WJjeetiee6p1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBcInRvZGF5R2F0ZXNcIu+8mjEwLCAtLeS7iuWkqea2iOmZpOasoeaVsFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBcIm5vd0JhbFNob3dcIjogXCIyNTQwMC4wMFwiLCAtLS0g5b2T5YmN5L2Z6aKdXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIFwiYWN0Q291bnRDZmdcIjogODAsIC0tLSDnlKjkuo7orqHnrpflvZPlpKnlrozmiJDlpJrlsJHmtojpmaTmiY3nrpcx5aSpXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIFwibmV4dEx2Q291bnRcIjogMTAsIC0t5LiL5LiA562J57qn6ZyA6KaB6L6+5Yiw55qE5oC75pWwXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIC8v5o+Q546w5p2h5Lu26aG65bqP77yaMSzmu6HotrMgNzUwMDAwIDLvvIzmu6HotrM3NTAwMOaXtuW8gOWni+iuoeeul+e0r+iuoeeZu+W9leWkqeaVsO+8jOa7oei2s+e0r+iuoeeZu+W9leWkqeaVsCAz77yM6L6+5Yiw55qE562J57qn77yI6L6+5LiN5Yiw77yJXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIFwic2hvd0xpc3RcIjogW1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgeyBcImlkXCI6IDIsLS0gLT4g5o+Q546w5a+55bqUSURcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgIFwiZHJhd0JhbFwiOiBcIjc1MDAwMFwiLCAtLS0+IOaPkOeOsOebruagh1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5lZWRCYWxcIjogXCI3NTAwMDBcIiwgLS0tPiDpnIDopoHovr7liLDnmoTkvZnpop1cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuZXdlclRhZ1wiOiAyLCAtLS0+IOaYr+WQpuaYr+aWsOS6uuaPkOeOsO+8jDHmmK8gMuWFtuWug+aPkOeOsFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsZWZ0XCI6IC0xLCAtLS3jgIvliankvZnlj6/mj5DnjrDmrKHmlbBcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmVlZERheXNcIjogMywgLS0t44CL6ZyA6KaB6L6+5Yiw55qE55m75b2V5aSp5pWwXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgIFwibmVlZExldmVsXCI6IDQxLS0gLeOAi+mcgOimgei+vuWIsOeahOetiee6p1xyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8gICAgICAgICAgICAge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBcImlkXCI6IDMsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBcImRyYXdCYWxcIjogXCIxMDAwMDAwXCIsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgXCJuZWVkQmFsXCI6IFwiMTAwMDAwMFwiLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5ld2VyVGFnXCI6IDIsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxlZnRcIjogLTEsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuZWVkRGF5c1wiOiA1LFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5lZWRMZXZlbFwiOiA0MlxyXG4gICAgICAgIC8vICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgLy8gICAgICAgICAgICAge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBcImlkXCI6IDQsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBcImRyYXdCYWxcIjogXCIzMDAwMDAwXCIsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgXCJuZWVkQmFsXCI6IFwiMzAwMDAwMFwiLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5ld2VyVGFnXCI6IDIsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxlZnRcIjogLTEsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuZWVkRGF5c1wiOiAxMCxcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuZWVkTGV2ZWxcIjogNDNcclxuICAgICAgICAvLyAgICAgICAgICAgICB9LFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgXCJpZFwiOiA1LFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgXCJkcmF3QmFsXCI6IFwiNTAwMDAwMFwiLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIFwibmVlZEJhbFwiOiBcIjUwMDAwMDBcIixcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuZXdlclRhZ1wiOiAyLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsZWZ0XCI6IC0xLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmVlZERheXNcIjogMCxcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuZWVkTGV2ZWxcIjogNDRcclxuICAgICAgICAvLyAgICAgICAgICAgICB9XVxyXG4gICAgICAgIC8vICAgICAgICAgfSxcclxuICAgIH1cclxufSJdfQ==