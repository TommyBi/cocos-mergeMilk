// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { bc } from "./bl_Config";
import { tx_list } from "./bl_txPanel";



const { ccclass, property } = cc._decorator;

@ccclass
export default class bl_txToggle extends cc.Component {

    lb_count: cc.Label = null;

    data: tx_list;
    init(data: tx_list) {
        this.data = data;
        this.refresh();
    }
    onLoad() {
        this.lb_count = this.node.getComponentInChildren(cc.Label);
    }

    refresh() {
        this.lb_count.string = bc.moneyAbbr + this.data.drawBal;
    }

    // update (dt) {}
}
