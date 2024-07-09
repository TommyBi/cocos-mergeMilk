import SpriteToHome from "../common/effect/SpriteToHome";
import { ui } from "../game/common/UIManager";
import { GameUtils } from "../game/GameUtils";
import { Utils } from "./Utils";

export class AniUtil {
    public static JumpTo2(player: cc.Node, wPosOfTarget: cc.Vec2, top: number = 300, scaleFrom: number = 1, scaleTo: number = 1, effboom: boolean = false, end?: Function) {
        let wPosOfPlayer = player.convertToWorldSpaceAR(cc.v2(0, 0));
        let wPosOfStart = cc.v2(wPosOfPlayer.x, wPosOfTarget.y);

        let skin_x = new cc.Node("skin_x");
        skin_x.position = wPosOfStart;
        ui.addEffectAR(skin_x);

        let skin_y = new cc.Node("skin_y");
        skin_y.position = cc.v2(0, wPosOfPlayer.y - wPosOfTarget.y);
        skin_y.parent = skin_x;

        let cloneIcon = cc.instantiate(player);
        cloneIcon.active = true;
        cloneIcon.scale = scaleFrom;
        cloneIcon.position = cc.v2(0, 0);
        cloneIcon.parent = skin_y;

        let step = 3;
        let tryRemoveClone = () => {
            if (--step <= 0) {
                end && end();
                if (effboom) {
                    GameUtils.addEffBoom(wPosOfTarget);
                }
                Utils.removeNode(skin_x);
            }
        }

        let tx = skin_x.x + (wPosOfTarget.x - wPosOfStart.x);
        let ty = skin_y.y < 0 ? top : skin_y.y + top;//起点位置与终点位置谁高谁低

        cc.tween(skin_x).to(0.5, { x: tx })
            .call(() => {
                tryRemoveClone();
            })
            .start();
        cc.tween(skin_y)
            .to(0.25, { y: ty }, { easing: cc.easing.sineOut })
            .to(0.25, { y: 0 }, { easing: cc.easing.sineIn })
            .call(() => {
                tryRemoveClone();
            }).start();
        cc.tween(cloneIcon)
            .to(0.5, { scale: scaleTo })
            // .to(0.3, { scale: scaleFrom })
            .call(() => {
                tryRemoveClone();
            })
            .start();
    }

    public static JumpTo(player: cc.Node, wPosOfTarget: cc.Vec2, scale: number = 1, soundEffcet: Function, easingBack: boolean = false) {
        let wPosOfPlayer = player.convertToWorldSpaceAR(cc.v2(0, 0));
        let wPosOfStart = cc.v2(wPosOfPlayer.x, wPosOfTarget.y);

        let cloneIcon = cc.instantiate(player);
        cloneIcon.position = cc.v2(0, wPosOfPlayer.y - wPosOfTarget.y);
        cloneIcon.scale = scale;
        let skin = new cc.Node("skin");
        skin.addChild(cloneIcon);
        skin.position = wPosOfStart;
        ui.addEffectAR(skin);

        let step = 2;
        let tryRemoveClone = () => {
            if (--step <= 0) {
                soundEffcet && soundEffcet();
                skin.removeFromParent();
            }
        }

        let tx = skin.x + (wPosOfTarget.x - wPosOfStart.x);
        let ty = cloneIcon.y < 0 ? 300 : cloneIcon.y + 300;//起点位置与终点位置谁高谁低
        cc.tween(skin).to(0.6, { x: tx })
            .call(() => {
                tryRemoveClone();
            })
            .start();
        if (easingBack) {
            cc.tween(cloneIcon)
                .to(0.3, { y: ty }, { easing: cc.easing.sineOut })
                .to(0.3, { y: -50, scale: 1 }, { easing: cc.easing.sineIn })
                .to(0.2, { y: 10, scale: 1 }, { easing: cc.easing.sineOut })
                .to(0.15, { y: 0, scale: 1 }, { easing: cc.easing.sineOut })
                .call(() => {
                    tryRemoveClone();
                })
                .start();
        } else {
            cc.tween(cloneIcon)
                .to(0.3, { y: ty }, { easing: cc.easing.sineOut })
                .to(0.3, { y: 0, scale: 1 }, { easing: cc.easing.sineIn })
                .call(() => {
                    tryRemoveClone();
                })
                .start();
        }
    }


    /**
   * 收获金币或钻石的特效
   * @param spriteFrames 
   * @param targetNode 
   */
    public static createEffectSpriteHome(startNode: cc.Node, targetNode: cc.Node, spriteFrames: Array<cc.SpriteFrame>, callback: Function, num: number = 5, scale: number = 1) {
        let effNum = num//Utils.randomInt(num, num * 2);
        let startBattleWorldPos = startNode.convertToWorldSpaceAR(cc.v2(0, 0));
        let worldEndPos = targetNode.convertToWorldSpaceAR(new cc.Vec2(0, 0));
        for (let i = 0; i < effNum; i++) {
            let time = Utils.randomInt(0, 300);
            setTimeout(() => {
                let index = Utils.randomInt(0, spriteFrames.length);
                let frame = spriteFrames[index];
                SpriteToHome.create(frame, cc.v2(startBattleWorldPos.x, startBattleWorldPos.y), worldEndPos, false, callback, scale);
            }, time);
        }
    }
    // /**
    //  * 入库的金币
    //  * @param startNode 起始点
    //  */
    // public static effectCollectCoins(startNode: cc.Node,targetNode:cc.Node) {
    //     if (!startNode) {
    //         // startNode = new cc.Node();
    //         // startNode.x = 0;
    //         // startNode.y = 0;
    //         // ui.node_effect.addChild(startNode);
    //         // this.createEffectSpriteHome(startNode, UIManager.instance.topResView.icon_coin, UIManager.instance.spriteFramesManager.coins, () => {

    //         // });
    //         // startNode.removeFromParent();
    //     } else {                    

    //         let frames = [startNode.getComponent(cc.Sprite).spriteFrame];
    //         this.createEffectSpriteHome(startNode, targetNode, frames, () => {
    //         });
    //     }
    //     setTimeout(() => {
    //         Utils.PlayCoinsFlySound(3);
    //     }, 1000);
    // }
    //     /**
    //      * 入库的钻石
    //      * @param startNode 起始点
    //      */
    //     public static effectCollectDiamond(startNode: cc.Node) {
    //         if (!startNode) {
    //             startNode = new cc.Node();
    //             startNode.x = 0;
    //             startNode.y = 0;
    //             UIManager.instance.node_effect.addChild(startNode);
    //             this.createEffectSpriteHome(startNode, UIManager.instance.topResView.icon_diamond, UIManager.instance.spriteFramesManager.diamonds, () => {
    //                 //播放钻石入库音效
    //             });
    //             startNode.removeFromParent();
    //         } else {
    //             this.createEffectSpriteHome(startNode, UIManager.instance.topResView.icon_diamond, UIManager.instance.spriteFramesManager.diamonds, () => {
    //                 //播放钻石入库音效
    //             });
    //         }
    //         setTimeout(() => {
    //             Utils.PlayCoinsFlySound(3);
    //         }, 1000);
    //     }
    public static aniWillShow(node: cc.Node) {
        node.opacity = 0;
        node.scale = 0.7;
    }
    public static aniShow(node: cc.Node, next?: Function) {
        node.stopAllActions();
        node.scale = 0.3;
        cc.tween(node).to(0.3, { opacity: 255, scale: 1 }, { easing: cc.easing.backOut })
            .call(() => {
                next && next();
            })
            .start();
    }
    public static aniHide(node: cc.Node, next?: Function) {
        node.stopAllActions();
        cc.tween(node).to(0.3, { opacity: 0, scale: 0.3 }, { easing: cc.easing.sineOut })
            .call(() => {
                next && next();
            })
            .start();
    }

    public static aniShaking(node: cc.Node, isReprat = true) {
        node.stopAllActions();
        node.angle = 0;
        if (isReprat) {

            cc.tween(node)
                .repeatForever(
                    cc.tween(node)
                        .to(0.1, { angle: -8 }, { easing: cc.easing.sineOut })
                        .to(0.1, { angle: 5 }, { easing: cc.easing.sineOut })
                        .to(0.1, { angle: -3 }, { easing: cc.easing.sineOut })
                        .to(0.1, { angle: 1.5 }, { easing: cc.easing.sineOut })
                        .to(0.1, { angle: 0 }, { easing: cc.easing.sineOut })
                        .delay(0.5)
                )
                .start();
        } else {
            cc.tween(node)
                .to(0.1, { angle: -8 }, { easing: cc.easing.sineOut })
                .to(0.1, { angle: 5 }, { easing: cc.easing.sineOut })
                .to(0.1, { angle: -3 }, { easing: cc.easing.sineOut })
                .to(0.1, { angle: 1.5 }, { easing: cc.easing.sineOut })
                .to(0.1, { angle: 0 }, { easing: cc.easing.sineOut })
                .delay(0.5)
                .start();
        }
    }
    public static aniHeart(node: cc.Node, cyc: number = 0.2, constant?: boolean) {
        node.stopAllActions();
        node.angle = 0;
        cc.tween(node)
            .repeatForever(
                cc.tween(node)
                    .to(constant ? cyc : cyc / 2, { scale: 1.2 }, { easing: cc.easing.sineOut })
                    .to(cyc, { scale: 1 }, { easing: cc.easing.sineOut })
                    .delay(constant ? 0 : 0.5)
            )
            .start();
    }

    public static aniHeartHappy(node: cc.Node) {
        node.stopAllActions();
        let by = node.y;
        let ty = node.y + 30;
        cc.tween(node)
            .repeatForever(
                cc.tween(node)
                    .to(0.1, { scaleX: 1.1, scaleY: 0.8 }, { easing: cc.easing.sineOut })
                    .to(0.1, { scaleX: 1, scaleY: 1, y: ty }, { easing: cc.easing.sineOut })
                    .to(0.1, { scaleX: 1, scaleY: 1, y: by }, { easing: cc.easing.sineIn })
                    .to(0.1, { scaleX: 1.1, scaleY: 0.8 }, { easing: cc.easing.sineOut })
                    .to(0.1, { scaleX: 1, scaleY: 1 }, { easing: cc.easing.sineIn })
                    .delay(0.2)
            )
            .start();
    }
    public static aniDou(node: cc.Node, next?: Function) {
        cc.tween(node)
            .to(0.1, { scaleY: 1.4, scaleX: 0.7 }, { easing: cc.easing.sineOut })
            .to(0.05, { scaleY: 0.9, scaleX: 1.1 }, { easing: cc.easing.sineOut })
            .to(0.08, { scaleY: 1.1, scaleX: 0.9 }, { easing: cc.easing.sineOut })
            .to(0.08, { scaleY: 1, scaleX: 1 }, { easing: cc.easing.sineOut })
            .call(() => {
                next && next();
            })
            .start();
    }
    public static aniShakeHead(node: cc.Node, next?: Function) {
        cc.tween(node)
            .to(0.05, { x: -6 }, { easing: cc.easing.sineOut })
            .to(0.08, { x: 6 }, { easing: cc.easing.sineOut })
            .to(0.07, { x: -5 }, { easing: cc.easing.sineOut })
            .to(0.06, { x: 4 }, { easing: cc.easing.sineOut })
            .to(0.05, { x: -3 }, { easing: cc.easing.sineOut })
            .to(0.04, { x: 2 }, { easing: cc.easing.sineOut })
            .to(0.03, { x: -1 }, { easing: cc.easing.sineOut })
            .to(0.02, { x: 0 }, { easing: cc.easing.sineOut })
            .call(() => {
                next && next();
            })
            .start();
    }

    //上下浮动
    public static aniUpDown(node: cc.Node, time: number = 0.5, y: number = 20): void {
        if (cc.isValid(node)) {
            node.stopAllActions();
            let pos = cc.v2(node.x, node.y)
            cc.tween(node)
                .repeatForever(
                    cc.tween(node)
                        .to(time, { y: pos.y + y })
                        .to(time, { y: pos.y })
                )
                .start();
        }
    }
    //
    public static rotation(node: cc.Node, time: number = 0.5): void {
        if (cc.isValid(node)) {
            node.stopAllActions();
            cc.tween(node)
                .repeatForever(
                    cc.tween(node)
                        .to(time, { angle: 360 })
                        .to(0, { angle: 0 })
                )
                .start();
        }
    }
}
