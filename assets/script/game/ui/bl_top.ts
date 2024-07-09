// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { GlobalEvent } from "../../common/Global";
import { EventChangeTop } from "../../common/GlobalEvents";
import bl_txPanel from "./bl_txPanel";

const { ccclass, property } = cc._decorator;

@ccclass
export default class bl_top extends cc.Component {

    @property(cc.Label)
    lb_bestNum1: cc.Label = null;
    @property(cc.Label)
    lb_bestNum2: cc.Label = null;
    @property(cc.Label)
    lb_num: cc.Label = null;

    @property(cc.Node)
    ico1: cc.Node = null;
    @property(cc.Node)
    ico2: cc.Node = null;


    num1 = 0;
    num = 0;
    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.bl_refrehUI();
    }

    start() {

    }

    protected onEnable(): void {
        GlobalEvent.on(EventChangeTop.NAME, this.onChange, this);
    }
    bl_refrehUI() {
        this.lb_num.string = this.num + "";
        this.lb_bestNum1.string = "已合成 x" + this.num1 + "";
        this.lb_bestNum2.string = this.num1 + "";
    }
    onChange(evt: EventChangeTop) {
        if (evt.mtype == 1) {
            this.num += evt.num;
        } else {
            this.num1 += evt.num;
        }

        this.bl_refrehUI();
    }

    bl_showtx() {
        bl_txPanel.Show();
    }

    // update (dt) {}
}
