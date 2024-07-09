// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import BasePanel from "../../common/BasePanel";
import { dm } from "../../common/DataManager";
import { GlobalEvent } from "../../common/Global";
import PanelBase from "../../common/comp/PanelBase";
import { LocalizedLabel } from "../../lang/LocalizedLabel";
import SDKManager from "../../utils/SDKManager";
import { GameUtils } from "../GameUtils";
import { bc } from "./bl_Config";
import WithdrawalToggle from "./bl_txToggle";

const { ccclass, property } = cc._decorator;

export type tx_cfg = {
    nowLogDays: number;//当前登录天数
    nowLevel: number;//当前等级
    todayGates: number;//今天消除次数
    nowBalShow: string;//当前余额
    actCountCfg: number;//用于计算当天完成多少消除才算1天
    nextLvCount: number;//下一等级需要达到的总数
    showList: tx_list[]

}

export type tx_list = {
    id: number//提现对应ID
    drawBal: string // 提现目标
    needBal: string // 需要达到的余额
    newerTag: number // 是否是新人提现，1是 2其它提现
    left: number//剩余可提现次数
    needDays: number//需要达到的登录天数
    needLevel: number//需要达到的等级
}

@ccclass
export default class bl_txPanel extends PanelBase {

    public static Prefab_Name = "prefab/game/ui/bl_txPanel";
    public static async Show() {
        let insNode: cc.Node = await PanelBase.ShowPanel(this.Prefab_Name);
        if (!insNode) {
            return;
        }
        GameUtils.popView(insNode);
    }

    @property(cc.Label)
    lb_num: cc.Label = null;
    @property(cc.Label)
    lb_tipsNum: cc.Label = null;

    @property(cc.ProgressBar)
    pro: cc.ProgressBar = null;
    @property(cc.Node)
    toggle_content: cc.Node = null;

    @property(cc.Node)
    ui_tips1: cc.Node = null;
    @property(cc.RichText)
    rich1: cc.RichText = null;
    @property(cc.RichText)
    rich2: cc.RichText = null;

    @property(cc.Node)
    ui_tips2: cc.Node = null;
    @property(cc.RichText)
    rich3: cc.RichText = null;
    @property(cc.RichText)
    rich4: cc.RichText = null;
    @property(cc.RichText)
    rich5: cc.RichText = null;

    @property(cc.Node)
    ui_tips3: cc.Node = null;
    @property(cc.RichText)
    rich6: cc.RichText = null;
    @property(cc.RichText)
    rich7: cc.RichText = null;


    // LIFE-CYCLE CALLBACKS:
    currIndex = 0;

    showList: tx_list[];
    currData: tx_list;
    onLoad() {
        this.init();
    }

    init() {
        // this.showList = bc.drawData.showList;
        // for (let i = 0; i < this.toggle_content.childrenCount; i++) {
        //     let node = this.toggle_content.children[i];
        //     let toggle = node.addComponent(WithdrawalToggle);
        //     toggle.init(this.showList[i]);
        // }

        // this.lb_num.string = bc.moneyAbbr + bc.drawData.nowBalShow;
        this.kiIU_refreshUI();
    }

    protected onEnable(): void {
    }
    protected onDisable(): void {

    }

    kiIU_refreshUI() {
        this.reset();
        // this.currData = this.showList[this.currIndex];
        // let now = parseFloat(bc.drawData.nowBalShow)
        // let curr = parseFloat(this.currData.drawBal)
        // if (now < curr) {
        //     this.ui_tips1.active = true;
        //     this.pro.progress = now / curr;
        //     this.lb_tipsNum.string = bc.moneyAbbr + curr;
        //     this.rich1.getComponent(LocalizedLabel).key = "condition1";
        //     this.rich1.getComponent(LocalizedLabel).fetchRender();
        //     this.rich2.getComponent(LocalizedLabel).key = "current1";
        //     this.rich2.getComponent(LocalizedLabel).fetchRender();
        //     this.scheduleOnce(() => {
        //         this.kiIU_changeRich1();
        //     }, .1)
        // } else {
        //     let nowDay = Number(bc.drawData.nowLogDays)
        //     let currDay = Number(this.currData.needDays)
        //     if (nowDay < currDay) {
        //         this.ui_tips2.active = true;
        //         this.rich3.getComponent(LocalizedLabel).key = "condition2";
        //         this.rich3.getComponent(LocalizedLabel).fetchRender();
        //         this.rich4.getComponent(LocalizedLabel).key = "current2";
        //         this.rich4.getComponent(LocalizedLabel).fetchRender();
        //         this.rich5.getComponent(LocalizedLabel).key = "xc";
        //         this.rich5.getComponent(LocalizedLabel).fetchRender();
        //         this.scheduleOnce(() => {
        //             this.kiIU_changeRich2();
        //         }, .1)
        //         // this.pro.progress = nowDay / currDay;
        //     } else {
        //         let nowLv = Number(bc.drawData.nowLevel)
        //         let currLv = Number(this.currData.needLevel)

        //         if (nowLv < currLv) {
        //             this.ui_tips3.active = true;
        //             this.rich6.getComponent(LocalizedLabel).key = "condition3";
        //             this.rich6.getComponent(LocalizedLabel).fetchRender();
        //             this.rich7.getComponent(LocalizedLabel).key = "current3";
        //             this.rich7.getComponent(LocalizedLabel).fetchRender();
        //             this.scheduleOnce(() => {
        //                 this.kiIU_changeRich3();
        //             }, .1)
        //             this.pro.progress = nowLv / currLv;
        //         }
        //     }
        // }

    }

    onToggle(evt: cc.Toggle) {
        this.rich1.string = "";
        this.rich2.string = "";
        let toggleName = evt.node.name;
        this.currIndex = Number(toggleName) - 1;
        this.kiIU_refreshUI();
    }

    kiIU_onBtnTx() {
        // if (dm.player.isFirstTx) {
        //     SDKManager.kiIU_gohpVcbaclok();
        //     dm.player.isFirstTx = 0;
        // } else {
        //     let cfg = GameManager.instance.config;
        //     let tips = ""

        //     if (bc.country == "2") {

        //         tips = cfg.json.language['pt'].tips2;
        //     } else if (bc.country == "13") {
        //         tips = cfg.json.language['in'].tips2;
        //     } else {
        //         tips = cfg.json.language['en'].tips2;
        //     }
        //     GameUtils.showToast(tips);
        // }
    }

    kiIU_changeRich1() {
        // let now = Number(bc.drawData.nowBalShow)
        // let curr = Number(this.currData.drawBal)


        // let str1 = this.rich1.string;
        // str1 = str1.replace(/\$/g, bc.moneyAbbr)
        // str1 = str1.replace(/\!/g, this.currData.drawBal)

        // this.rich1.string = str1;

        // let str2 = this.rich2.string;
        // str2 = str2.replace(/\$/g, bc.moneyAbbr)
        // str2 = str2.replace(/\!/g, bc.drawData.nowBalShow)
        // str2 = str2.replace(/\*/g, (curr - now).toFixed(2))
        // this.rich2.string = str2;
    }
    kiIU_changeRich2() {
        // let now = Number(bc.drawData.nowLogDays)
        // let curr = Number(this.currData.needDays)


        // let str1 = this.rich3.string;
        // str1 = str1.replace(/\!/g, this.currData.needDays + "")
        // str1 = str1.replace(/\*/g, bc.drawData.actCountCfg + "")

        // this.rich3.string = str1;

        // let str2 = this.rich4.string;
        // str2 = str2.replace(/\!/g, bc.drawData.nowLogDays + "")
        // this.rich4.string = str2;

        // let str3 = this.rich5.string;
        // str3 = str3.replace(/\!/g, bc.drawData.todayGates + "")
        // this.rich5.string = str3;
    }
    kiIU_changeRich3() {
        // let now = Number(bc.drawData.nowLevel)
        // let curr = Number(this.currData.needLevel)


        // let str1 = this.rich6.string;
        // str1 = str1.replace(/\!/g, this.currData.needLevel + "")

        // this.rich6.string = str1;

        // let str2 = this.rich7.string;
        // str2 = str2.replace(/\!/g, bc.drawData.nowLevel + "")
        // str2 = str2.replace(/\*/g, (curr - now) + "")
        // this.rich7.string = str2;
    }

    reset() {

        this.ui_tips1.active = false;
        this.ui_tips2.active = false;
        this.ui_tips3.active = false;
    }

    // update (dt) {}
}
