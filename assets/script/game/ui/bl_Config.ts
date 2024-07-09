import bl_top from "./bl_top";

export type ForceConfigs = { tic: number[], rate: number[] }

// 不太知道是什么，但看上去像是管理一些常量的空间
export class bl_Config {
    public static readonly Instance: bl_Config = new bl_Config();

    guideStep = 0;

    maxId = 10;

    country = "6";

    moneyAbbr = "$"

    top: bl_top;

    getEmptyCount(list) {
        let arr = list.filter((value) => {
            return value == 0;
        })
        if (arr.length > 2) return true;
        return false;
    }
    // //解析体现列表
    // drawData: widthDrawal_cfg = {
    //     nowBalShow: "0",
    //     nextLvCount: 0,
    //     nowLevel: 0,
    //     nowLogDays: 0,
    //     todayGates: 0,
    //     actCountCfg: 0,
    //     showList: []
    // };
    // parseList(data: widthDrawal_cfg, callbacks) {
    //     this.drawData = data;
    //     if (callbacks) callbacks();
    //     console.log("@@提现列表：", this.drawData)
    // }

    // getNext() {
    //     let num = parseFloat(this.drawData.nowBalShow);
    //     let list = this.drawData.showList;
    //     let next = 0;
    //     // for (let i = 0; i < list.length; i++) {
    //     //     if (num < parseFloat(list[i].needBal)) {
    //     //         next = parseFloat(list[i].needBal);
    //     //         break;
    //     //     }

    //     // }
    //     next = parseFloat(list[0].needBal);
    //     console.log("@@提现档位金额：", next);
    //     return next;
    // }

    forceCfgs: ForceConfigs[];
    forceNum = -1;
    /**
     * 获取强制弹出视频规则
     * @param data 
     */
    getForceCfgs(data) {
        this.forceCfgs = data;
    }
}

export const bc = bl_Config.Instance;