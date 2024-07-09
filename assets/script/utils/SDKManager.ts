import Ball_Main from "../common/Ball_Main";
import { GlobalEvent } from "../common/Global";
import { GameUtils } from "../game/GameUtils";
import { bc } from "../game/ui/bl_Config";


export default class SDKManager {

    protected _adPath_ios = "Kiow_CsbAr_EErhViewcOntRoller";//前缀：ball_tYiex，后缀：xiUk_egVjo
    // protected _adPath_ios = "Chi_PcaS_cAdE_ViewCon";//前缀：ball_tYiex，后缀：xiUk_egVjo
    protected _baseCocos: string = "org/cocos2dx/javascript/AppActivity";

    private static _instance = null;
    static getInstance(): SDKManager {
        if (SDKManager._instance == null) {
            SDKManager._instance = new SDKManager();
        }
        return SDKManager._instance;
    }
    get isAndroid() {
        // return false;
        return cc.sys.os == cc.sys.OS_ANDROID;
    }
    get isIphone() {
        // return false;
        return cc.sys.os == cc.sys.OS_IOS;
    }
    //保持屏幕常亮
    setKeep() {
        if (this.isIphone) {
            jsb["Device"].setKeepScreenOn(true);
        }
    }

    //- 统计事件接口
    onEvent(action = "point_function", jsonData?) {
        if (this.isIphone) {
            if (jsonData) {
                let data = JSON.stringify(jsonData);
                jsb.reflection.callStaticMethod("Chi_PcaS_cAdE_ViewCon", "ball_tYiexonEventxiUk_egVjo:jsonData:", action, data);
            }
            else jsb.reflection.callStaticMethod("Chi_PcaS_cAdE_ViewCon", "ball_tYiexonEventxiUk_egVjo:", action);
        }
    }
    //视频广告播放接口 
    ball_showAd(adConfig?, force?: boolean) {
        if (this.isIphone) {
            if (adConfig) {
                jsb.reflection.callStaticMethod(this._adPath_ios, "ball_tYiexshowAdxiUk_egVjo:force:", adConfig, force);
            }
        } else {
            let json = {
                ad_source: "getAward"
            }
            // GlobalEvent.dispatchEvent(new EventAdOverRequest(json.ad_source))
        }
    }
    //上报余额和当前提现档位金额 
    ball_Reponcendhdrawne(current?, target?) {
        if (this.isIphone) {
            jsb.reflection.callStaticMethod(this._adPath_ios, "ball_tYiexReponcendhdrawnexiUk_egVjo:withTXban:", current, target);
        }
    }
    //隐私政策
    ball_openPrivacy() {
        if (this.isIphone) {
            jsb.reflection.callStaticMethod(this._adPath_ios, "ball_tYiexopenPrivacyxiUk_egVjo");
        }
    }
    //用户协议
    ball_openUserService() {
        if (this.isIphone) {
            jsb.reflection.callStaticMethod(this._adPath_ios, "ball_tYiexopenUserServicexiUk_egVjo");
        }
    }
    //设备ID
    ball_getDeviceId() {
        let n = "";
        if (this.isIphone) {
            n = jsb.reflection.callStaticMethod(this._adPath_ios, "ball_tYiexgetDeviceIdxiUk_egVjo");
        }
        return n;
    }
    //国家
    ball_getCountry() {
        let n = "";
        if (this.isIphone) {
            n = jsb.reflection.callStaticMethod(this._adPath_ios, "ball_tYiexgetCountryxiUk_egVjo");
        } else {
            n = "6";
        }
        return n;
    }
    //强弹规则
    ball_getSpecialGear() {
        let n;
        if (this.isIphone) {
            n = jsb.reflection.callStaticMethod(this._adPath_ios, "ball_tYiexgetSpecialGearxiUk_egVjo");
        } else {
            n = [{ "tic": [-1, 20], "rate": [5, 5] }, { "tic": [21, 60], "rate": [4, 5] }, { "tic": [61, 150], "rate": [4, 3] }, { "tic": [151, -1], "rate": [3, 3] }]
        }
        let json = JSON.parse(n);
        // GlobalEvent.dispatchEvent(new EventConfigRequest(json));
        return n;
    }
    ball_SynsReport() {
        if (this.isIphone) {
            jsb.reflection.callStaticMethod(this._adPath_ios, "ball_tYiexSynsReportxiUk_egVjo");
        }
    }
    ball_gohpVcbaclok() {
        if (this.isIphone) {
            jsb.reflection.callStaticMethod(this._adPath_ios, "ball_tYiexgohpVcbaclokxiUk_egVjo");
        }
    }

    //震动
    vibrate(time: number) {
        if (this.isIphone) {
            jsb.reflection.callStaticMethod(this._baseCocos, "vibrate", "(I)V", time);
        } else {

        }
    }
    //复制
    copy(str: string) {
        if (this.isIphone) {
            jsb.reflection.callStaticMethod(this._adPath_ios, "ball_tYiexsetCopyxiUk_egVjo:", str);
        } else {

        }
    }
    /**
     * 奖励领取
     * @param drewTag 0,--当前领取方式 0表示普通领取，1表示视频（广告）领取
     */
    ball_getReward(drewTag = 0) {
        let obj = { drewTag: drewTag };
        let data = JSON.stringify(obj)
        this.ball_sendRequest("/qv2c/lt/aw", data);
    }
    /**
     * 抽奖
     * @param reqCount --抽奖次数，从1开始
     */
    ball_getWheelReward(reqCount) {
        let obj = { reqCount: reqCount };
        let data = JSON.stringify(obj)
        this.ball_sendRequest("/qv2c/lc/rdom/draw", data);
    }
    /**
     * 提现列表
     */
    ball_getWithdrawals() {
        this.ball_sendRequest("/qv2c/lc/awal/list");
    }

    testNum = 0;
    //通信
    ball_sendRequest(action, requestData?) {
        console.log("@@通信请求ball_sendRequest:", action, requestData);
        if (this.isIphone) {
            jsb.reflection.callStaticMethod(this._adPath_ios, "ball_tYiexsendRequestxiUk_egVjo:requestData:", action, requestData);
        } else {
            if (action == "/qv2c/lc/awal/list") {     //提现列表

                if (this.testNum == 0) {

                    let message = ` {"errno":"0","data":{"nowBalShow":"189.60","nowLevel":2,"actCountCfg":"80","nextLvCount":10,"nowLogDays":4,"todayGates":1,"showList":[{"needBal":"500","drawBal":"500","id":2,"newerTag":2,"needLevel":41,"left":-1,"needDays":3},{"needBal":"1000","drawBal":"1000","id":3,"newerTag":2,"needLevel":42,"left":-1,"needDays":5},{"needBal":"1500","drawBal":"1500","id":4,"newerTag":2,"needLevel":43,"left":-1,"needDays":10},{"needBal":"2000","drawBal":"2000","id":5,"newerTag":2,"needLevel":44,"left":-1,"needDays":0}]},"timeSign":1713106575767,"errmsg":"success"}`

                    let json = JSON.parse(message);
                    let data = json.data;
                    // GlobalEvent.dispatchEvent(new EventListRequest(data))
                    this.testNum++;
                } else {
                    let message = ` {"errno":"0","data":{"nowBalShow":"10489.60","nowLevel":2,"actCountCfg":"80","nextLvCount":10,"nowLogDays":4,"todayGates":3,"showList":[{"needBal":"500","drawBal":"500","id":2,"newerTag":2,"needLevel":41,"left":-1,"needDays":3},{"needBal":"1000","drawBal":"1000","id":3,"newerTag":2,"needLevel":42,"left":-1,"needDays":5},{"needBal":"1500","drawBal":"1500","id":4,"newerTag":2,"needLevel":43,"left":-1,"needDays":10},{"needBal":"2000","drawBal":"2000","id":5,"newerTag":2,"needLevel":44,"left":-1,"needDays":0}]},"timeSign":1713106575767,"errmsg":"success"}`

                    let json = JSON.parse(message);
                    let data = json.data;
                    // GlobalEvent.dispatchEvent(new EventListRequest(data))

                }
            } else if (action == "/qv2c/lc/rdom/draw") {     //转盘抽奖
                let json = {
                    data: {
                        "awardType": 1,
                        "awardShow": "20000",
                        "count": 1,
                        "balShow": "25400.00"
                    },
                }
                // GlobalEvent.dispatchEvent(new EventTurntable(json.data))
            } else if (action == "/qv2c/lt/aw") {     //转盘抽奖
                let json = {
                    data: {
                        "amtShow": "5.2",// -- - 领取的金额
                        "balShow": "11.30", //--当前余额
                        "nowLevel": 1, //-----> 当前用户【等级】
                        "nextLvCount": 88,//----> 下一等级【需达到的总答题数】
                        "todayGates": 5, //--当天消除【次数】
                        "allGates": 5//--消除【总次数】
                    },
                }
                // GlobalEvent.dispatchEvent(new EventGetAwardRequest(json.data))
            }
        }
    }
}
export const sdk = SDKManager.getInstance();
window["XSSdkCallback"] = function (action, jsonStr) {
    console.log("***************前端收到消息***************", action + "   ", jsonStr);
    let json = JSON.parse(jsonStr);
    if (action == "ad_play") {     //视频开始播放
        // EventDispath.send(EventType.VIDEO_BACK, 1);
    } else if (action == "ad_over") {     //视频播放结束
        // GlobalEvent.dispatchEvent(new EventAdOverRequest(json.ad_source))
    } else if (action == "ad_error") {     //视频播放出错
        let cfg = Ball_Main.instance.config;
        let tips = ""

        if (bc.country == "2") {

            tips = cfg.json.language['pt'].tips2;
        } else if (bc.country == "13") {
            tips = cfg.json.language['in'].tips2;
        } else {
            tips = cfg.json.language['en'].tips2;
        }
        GameUtils.showToast(tips);
    } else if (action == "ad_cd") {     //视频播放视频冷却中
    } else if (action == "/qv2c/lt/aw") {     //领取奖励
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
    } else if (action == "/qv2c/lc/rdom/draw") {     //转盘抽奖
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
    } else if (action == "/qv2c/lc/awal/list") {     //提现列表
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
}