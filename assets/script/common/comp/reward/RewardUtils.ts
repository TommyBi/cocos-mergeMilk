import { GameUtils } from "../../../game/GameUtils";
import Jumpjump3d from "../../effect/Jumpjump3d";
import Ball_Main from "../../Ball_Main";

export enum RewardType {
    Coin,
}

export type Option_Reward_Cell = {
    type: RewardType,
    count: number,
    ico: cc.Node,
    [index: string]: any
}


// type: RewardType, count: number, ico: cc.Node,[index: string]: any
export type Option_Reward_Panel = {
    reward: Array<Option_Reward_Cell>,
    next: Function,
    needClick: boolean
}

export class RewardUtils {
    static rewardsDataClose(rewardOpt: Option_Reward_Cell) {
        switch (rewardOpt.type) {
            case RewardType.Coin: {
                break;
            }
        }
    }


    static resBoomByNode(icoNode: cc.Node, targetNode: cc.Node, num: number, scale: number = 0.5) {
        GameUtils.playSFX("coin");
        let wposTarget = targetNode.convertToWorldSpaceAR(cc.v2(0, 0));
        let wposStart = icoNode.convertToWorldSpaceAR(cc.v2(0, 0));
        GameUtils.addEffBoom(wposStart);
        let icoFrame = icoNode.getComponent(cc.Sprite).spriteFrame;
        for (let i = 0; i < num; i++) {
            Jumpjump3d.createBySpr(undefined, icoFrame, wposStart, 100, scale, wposTarget);
        }
    }
}