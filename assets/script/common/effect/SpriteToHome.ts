import { GameUtils } from "../../game/GameUtils";
import { Utils } from "../../utils/Utils";

const { ccclass, property } = cc._decorator;

@ccclass
export default class SpriteToHome extends cc.Component {

    //全局计数
    // private static NumAll = 0;
    /**
     * 创建一个载体，并挂载一个乘客
     * @param passenger 
     * @param startWorldPos 
     * @param endWorldPos 
     */
    public static async createVehicle(passer: cc.Node, startWorldPos: cc.Vec2, endWorldPos: cc.Vec2, withRotation: boolean, next: Function) {
        let vehicle = new cc.Node();
        vehicle.width = passer.width;
        vehicle.height = passer.height;
        vehicle.position = startWorldPos;

        let passenger = cc.instantiate(passer);
        passenger.removeComponent(cc.Widget);
        passenger.x = 0;
        passenger.y = 0;
        passenger.parent = vehicle;

        let script: SpriteToHome = vehicle.addComponent(SpriteToHome);
        script.next = next;
        script.withRotation = withRotation;
        script.endEffectPos = GameUtils.effectLayer.convertToNodeSpaceAR(endWorldPos);
        script.icon = passenger;
        GameUtils.addEffectAR(vehicle);
    }

    public static async create(spriteFrame: cc.SpriteFrame, startWorldPos: cc.Vec2, endWorldPos: cc.Vec2, withRotation: boolean, next?: Function, scale: number = 1) {
        let node = new cc.Node();
        let icon = new cc.Node();
        node.addChild(icon);
        let sprite = icon.addComponent(cc.Sprite);
        icon.scale = scale;
        sprite.sizeMode = cc.Sprite.SizeMode.RAW;
        sprite.spriteFrame = spriteFrame;
        let script: SpriteToHome = node.addComponent(SpriteToHome);
        script.withRotation = withRotation;
        script.next = next;
        node.position = startWorldPos;
        script.endEffectPos = GameUtils.effectLayer.convertToNodeSpaceAR(endWorldPos);
        GameUtils.addEffectAR(node);
    }

    public static async createNode(effNode: cc.Node, startWorldPos: cc.Vec2, endWorldPos: cc.Vec2, withRotation: boolean, next?: Function, toScale: number = 1, aniBackOut: boolean = true) {
        let node = new cc.Node("effectNode");

        effNode.parent = node;
        effNode.position = cc.v2(0, 0);
        node.position = startWorldPos;
        let script: SpriteToHome = node.addComponent(SpriteToHome);
        script.withRotation = withRotation;
        script.endEffectPos = GameUtils.effectLayer.convertToNodeSpaceAR(endWorldPos);
        script.next = next;
        script.toScale = toScale;
        script.aniBackOut = aniBackOut;
        GameUtils.addEffectAR(node);
    }

    icon: cc.Node = null;
    withRotation: boolean = false;
    endEffectPos: cc.Vec2 = undefined;
    spdx: number = 30;
    spdy: number = 10;
    groundNum: number = 0;
    center: cc.Vec2 = undefined;
    status: boolean = true;
    next: Function = undefined;
    toScale: number = 1;
    aniBackOut: boolean = true;

    onLoad() {
        // SpriteToHome.NumAll++;
        this.icon = this.node.children[0];
        let homeDuration = 0.8;// Utils.randomFloat(0.5, 1.5);
        this.node.scale = Utils.randomFloat(0.9, 1.1);
        cc.tween(this.node).to(homeDuration, { position: this.endEffectPos, scale: this.toScale }, { easing: cc.easing.sineIn }).call(() => {
            cc.tween(this.node).to(0.2, { opacity: 0, scale: 1.4 }, { easing: cc.easing.sineOut }).call(() => {
                this.icon.stopAllActions();
                this.node.stopAllActions();
                Utils.removeNode(this.node);
            }).start();
            this.next && this.next();
        }).start();

        if (this.withRotation) {
            this.icon.angle = 180;
        }

        // let p = { x: Utils.randomIntInclusive(-150, 150) };
        // if (this.withRotation) {
        //     p["angle"] = 90;
        // }
        // cc.tween(this.icon).to(homeDuration * 0.3, p, { easing: "sineOut" }).call(() => {
        //     p = { x: 0 };
        //     if (this.withRotation) {
        //         p["angle"] = 0;
        //     }
        //     cc.tween(this.icon).to(homeDuration * 0.7, p, { easing: "sineIn" }).start();
        // }).start();
        // let deltaV = this.endEffectPos.y - this.node.y;
        if (this.aniBackOut) {
            cc.tween(this.icon)
                .to(homeDuration * 0.3, { y: -200 }, { easing: cc.easing.sineInOut })
                .to(homeDuration * 0.7, { y: 0 }, { easing: cc.easing.sineIn })
                .start();
        }
    }
}
