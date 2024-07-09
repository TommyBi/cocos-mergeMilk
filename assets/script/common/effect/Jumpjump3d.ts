import { GameUtils } from "../../game/GameUtils";
import { Utils } from "../../utils/Utils";
import Ball_Main from "../Ball_Main";
import { GlobalEvent } from "../Global";

/*
* 飞抵最终目的地
*/
export class EventOnBoom extends cc.Event.EventCustom {
    public static readonly NAME: string = "EventOnBoom";
    public tType: number;
    public constructor(tType: number) {
        super(EventOnBoom.NAME, true);
        this.tType = tType;
    }
}


const { ccclass, property } = cc._decorator;

@ccclass
export default class Jumpjump3d extends cc.Component {
    public static async createBySpr(shadowFrame: cc.SpriteFrame, spriteFrame: cc.SpriteFrame, startWorldPos: cc.Vec2, groundLine: number, scale: number, tWPos?: cc.Vec2, tType?: number) {
        let icon = new cc.Node();
        let sprite = icon.addComponent(cc.Sprite);
        sprite.sizeMode = cc.Sprite.SizeMode.RAW;
        sprite.spriteFrame = spriteFrame;
        sprite.node.y = sprite.node.height / 2;//下边缘对齐

        this._create(shadowFrame, icon, startWorldPos, groundLine, scale, tWPos, tType);
    }

    public static async createByStr(shadowFrame: cc.SpriteFrame, str: string, startWorldPos: cc.Vec2, groundLine: number, scale: number, tWPos?: cc.Vec2, tType?: number) {
        let icon = new cc.Node();
        icon.color = cc.color(249, 229, 114, 255);
        let lb = icon.addComponent(cc.Label);
        lb.fontSize = 40;
        lb.enableBold = true;
        lb.string = str;
        // lb.node.y = lb.node.height / 2;//下边缘对齐

        this._create(shadowFrame, icon, startWorldPos, groundLine, scale, tWPos, tType);
    }

    private static async _create(shadowFrame: cc.SpriteFrame, nodeActor: cc.Node, startWorldPos: cc.Vec2, groundLine: number, scale: number, tWPos?: cc.Vec2, tType?: number) {
        let node = new cc.Node();

        let shadow = new cc.Node();
        shadow.y = groundLine;
        shadow.scaleY = 0.2;
        shadow.scaleX = 0.3
        shadow.color = cc.Color.BLACK;
        let spr = shadow.addComponent(cc.Sprite);
        if (shadowFrame) {
            spr.spriteFrame = shadowFrame;
            shadow.opacity = 90;
        } else {
            shadow.opacity = 0;
        }
        node.addChild(shadow);

        node.addChild(nodeActor);

        let script: Jumpjump3d = node.addComponent(Jumpjump3d);
        node.position = startWorldPos;
        script.groundLine = groundLine;
        script.scale = scale == undefined ? Utils.randomFloat(0.8, 1.2) : scale;
        script.tWPos = tWPos;
        script.tType = tType;
        GameUtils.addEffectAR(node);
    }

    dx: number = 0;
    dy: number = 0;
    dz: number = 170;
    rate: number = 0.45;
    groundLine: number = 0;
    scale: number = 1;

    icon: cc.Node = null;

    isFading: boolean = false;

    curStatus: number = 0;
    nextStatus: number = 0;
    tWPos: cc.Vec2 = undefined;
    tType: number;

    onLoad() {
        this.dz = Utils.randomIntInclusive(this.dz / 2, this.dz);
        let dr = this.dz / this.rate;
        this.dx = Utils.randomIntInclusive(-dr, dr);
        this.dy = Utils.randomIntInclusive(-dr, dr) * 0.6;
        this.node.scale = this.scale;
        this.icon = this.node.children[1];
        let delayTime = Utils.randomFloat(0.15, 0.25);
        let duration = Utils.randomFloat(0.2, 0.4);
        cc.tween(this.node)
            .by(duration, { x: this.dx, y: this.dy }, { easing: cc.easing.sineOut })
            .delay(delayTime)
            .call(() => {
                if (!!this.tWPos) {
                    //飞向金猪                    
                    let tNPos = this.node.parent.convertToNodeSpaceAR(this.tWPos);
                    let scale = this.node.scale;
                    cc.tween(this.node)
                        .delay(0.3)
                        .to(0.4, { position: tNPos, scale: scale * 0.8 })
                        .call(() => {
                            GameUtils.playFlyCoin();
                            GlobalEvent.dispatchEvent(new EventOnBoom(this.tType));
                            this.close();
                        })
                        .start();
                } else {
                    //消失
                    cc.tween(this.node)
                        .to(0.15, { opacity: 0 })
                        .call(() => {
                            this.close();
                        })
                        .start();
                }
            })
            .start();
        // this.jump(duration, this.dx > 0 ? 1 : -1);
    }
    jump(duration: number, dir: number) {
        let durationJump = Utils.randomFloat(0.13, 0.19);
        let durationSlide = Math.max(0, duration - durationJump * 2);
        cc.tween(this.icon)
            .to(durationJump, { y: this.dz, angle: 95 * dir, scale: 1.5 }, { easing: cc.easing.sineOut })
            .to(durationJump, { y: this.groundLine, angle: 185 * dir, scale: 1.3 }, { easing: cc.easing.sineIn })
            .to(durationSlide, { angle: 0 }, { easing: cc.easing.sineOut })
            .start();
    }

    close() {
        Utils.removeNode(this.node);
    }



    // update() {
    //     if (this.nextStatus != -1) {
    //         this.curStatus = this.nextStatus;
    //         this.nextStatus = -1;
    //         switch (this.curStatus) {
    //             case 0: {
    //                 this.spdx = Utils.randomIntInclusive(-this.spdx, this.spdx);
    //                 this.spdy = Utils.randomIntInclusive(0, this.spdy);
    //                 break;
    //             }
    //             // case 1: {
    //             //     this.node.y = this.groundLine;
    //             //     this.spdy = Math.abs(this.spdy) * Utils.randomFloat(0.4, 0.6);
    //             //     break;
    //             // }
    //             case 2: {
    //                 this.close();
    //                 break;
    //             }
    //         }
    //     }
    //     switch (this.curStatus) {
    //         case 0: {
    //             if (this.node.y < this.groundLine) {
    //                 this.nextStatus = 1;
    //             }
    //             this.spdy -= .5;
    //             this.node.x += this.spdx;
    //             this.node.y += this.spdy;
    //             this.icon.y += this.spdz;
    //             break;
    //         }
    //         // case 1: {
    //         //     if (this.node.y < -Ball_Main.instance.uiManager.ScreenHeight / 2) {
    //         //         this.nextStatus = 2;
    //         //     }
    //         //     this.spdy -= .5;
    //         //     this.node.x += this.spdx;
    //         //     this.node.y += this.spdy;
    //         //     break;
    //         // }
    //     }
    // }
}
