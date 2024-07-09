// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import BasePanel from "../../common/BasePanel";
import { GlobalEvent } from "../../common/Global";
import { EventChangeTop } from "../../common/GlobalEvents";
import PanelBase from "../../common/comp/PanelBase";
import { RewardUtils } from "../../common/comp/reward/RewardUtils";
import { GameUtils } from "../GameUtils";
import { bc } from "./bl_Config";

const { ccclass, property } = cc._decorator;

@ccclass
export default class bl_tipsPanel extends PanelBase {

    public static Prefab_Name = "prefab/game/ui/bl_tipsPanel";
    public static async Show(reward: number, callbacks?: Function) {
        let insNode: cc.Node = await PanelBase.ShowPanel(this.Prefab_Name);
        if (!insNode) {
            return;
        }
        let comp = insNode.getComponent(bl_tipsPanel);
        comp.init(reward, callbacks);
        GameUtils.popView(insNode);
    }

    @property(cc.Label)
    lb_num: cc.Label = null;

    // LIFE-CYCLE CALLBACKS:
    callbacks;
    num = 0;
    onLoad() {
        this.lb_num.string = bc.moneyAbbr + this.num.toString();
        this.scheduleOnce(() => {
            this.onClose();
        }, 1.5)
    }

    init(num: number, callbacks) {
        this.callbacks = callbacks;
        this.num = num;
    }

    onClose() {
        if (this.callbacks) this.callbacks();
        GlobalEvent.dispatchEvent(new EventChangeTop(1, this.num));
        this.close();
    }

    // update (dt) {}
}
