// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { GlobalEvent } from "../../common/Global";
import { EventBallClick } from "../../common/GlobalEvents";
import { Utils } from "../../utils/Utils";
import { GameUtils } from "../GameUtils";

const { ccclass, property } = cc._decorator;

@ccclass
export default class bl_ball extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    @property(cc.Node)
    lb: cc.Node = null;
    @property(sp.Skeleton)
    eff: sp.Skeleton = null;
    id: number;
    rId: string;

    THRESHOLD = 0.08;
    rigidbody: cc.RigidBody;

    isDestory: boolean = false;
    isDrop = false;
    onLoad() {
        this.rigidbody = this.node.getComponent(cc.RigidBody);
    }
    start() {
    }

    update(dt) {
        // if (this.isDrop && this.rigidbody) {
        //     if (Math.abs(this.rigidbody.linearVelocity.x) < this.THRESHOLD && Math.abs(this.rigidbody.linearVelocity.y) < this.THRESHOLD) {
        //         // 刚体几乎已经停止运动  
        //         GameUtils.playDrop();
        //         this.isDrop = false;
        //     }
        // }
        this.lb.angle = -this.node.angle;
    }

    onClick() {
        if (Utils.btnLock()) {
            return;
        }
        // GameUtils.playSoundBtnClicked();
        GlobalEvent.dispatchEvent(new EventBallClick(this.id, this.rId));
    }

    init(id, isDrop) {
        this.isDrop = isDrop;
        this.id = id;
        this.rId = Utils.nextRandomId();
    }

    playHide(callBack) {
        this.eff.node.active = true;
        GameUtils.playCompose();
        cc.tween(this.node).delay(0).to(.1, { scale: 1.3 }).to(.1, { scale: 0 }).call(() => {
            if (callBack) callBack();
            this.delete();
        }).start();
    }
    playShow() {
        // this.node.active = true;
        cc.tween(this.node).to(.1, { scale: 1 }).start();
    }

    removeRigidbody() {
        this.node.removeComponent(cc.RigidBody);
    }

    protected onDestroy(): void {

    }

    delete() {
        this.isDestory = true;
        this.node.destroy();
    }
}
