"use strict";
cc._RF.push(module, 'e51ebQiMxlHk5J6Gc5jaRvq', 'AniUtil');
// script/utils/AniUtil.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AniUtil = void 0;
var SpriteToHome_1 = require("../common/effect/SpriteToHome");
var UIManager_1 = require("../game/common/UIManager");
var GameUtils_1 = require("../game/GameUtils");
var Utils_1 = require("./Utils");
var AniUtil = /** @class */ (function () {
    function AniUtil() {
    }
    AniUtil.JumpTo2 = function (player, wPosOfTarget, top, scaleFrom, scaleTo, effboom, end) {
        if (top === void 0) { top = 300; }
        if (scaleFrom === void 0) { scaleFrom = 1; }
        if (scaleTo === void 0) { scaleTo = 1; }
        if (effboom === void 0) { effboom = false; }
        var wPosOfPlayer = player.convertToWorldSpaceAR(cc.v2(0, 0));
        var wPosOfStart = cc.v2(wPosOfPlayer.x, wPosOfTarget.y);
        var skin_x = new cc.Node("skin_x");
        skin_x.position = wPosOfStart;
        UIManager_1.ui.addEffectAR(skin_x);
        var skin_y = new cc.Node("skin_y");
        skin_y.position = cc.v2(0, wPosOfPlayer.y - wPosOfTarget.y);
        skin_y.parent = skin_x;
        var cloneIcon = cc.instantiate(player);
        cloneIcon.active = true;
        cloneIcon.scale = scaleFrom;
        cloneIcon.position = cc.v2(0, 0);
        cloneIcon.parent = skin_y;
        var step = 3;
        var tryRemoveClone = function () {
            if (--step <= 0) {
                end && end();
                if (effboom) {
                    GameUtils_1.GameUtils.addEffBoom(wPosOfTarget);
                }
                Utils_1.Utils.removeNode(skin_x);
            }
        };
        var tx = skin_x.x + (wPosOfTarget.x - wPosOfStart.x);
        var ty = skin_y.y < 0 ? top : skin_y.y + top; //起点位置与终点位置谁高谁低
        cc.tween(skin_x).to(0.5, { x: tx })
            .call(function () {
            tryRemoveClone();
        })
            .start();
        cc.tween(skin_y)
            .to(0.25, { y: ty }, { easing: cc.easing.sineOut })
            .to(0.25, { y: 0 }, { easing: cc.easing.sineIn })
            .call(function () {
            tryRemoveClone();
        }).start();
        cc.tween(cloneIcon)
            .to(0.5, { scale: scaleTo })
            // .to(0.3, { scale: scaleFrom })
            .call(function () {
            tryRemoveClone();
        })
            .start();
    };
    AniUtil.JumpTo = function (player, wPosOfTarget, scale, soundEffcet, easingBack) {
        if (scale === void 0) { scale = 1; }
        if (easingBack === void 0) { easingBack = false; }
        var wPosOfPlayer = player.convertToWorldSpaceAR(cc.v2(0, 0));
        var wPosOfStart = cc.v2(wPosOfPlayer.x, wPosOfTarget.y);
        var cloneIcon = cc.instantiate(player);
        cloneIcon.position = cc.v2(0, wPosOfPlayer.y - wPosOfTarget.y);
        cloneIcon.scale = scale;
        var skin = new cc.Node("skin");
        skin.addChild(cloneIcon);
        skin.position = wPosOfStart;
        UIManager_1.ui.addEffectAR(skin);
        var step = 2;
        var tryRemoveClone = function () {
            if (--step <= 0) {
                soundEffcet && soundEffcet();
                skin.removeFromParent();
            }
        };
        var tx = skin.x + (wPosOfTarget.x - wPosOfStart.x);
        var ty = cloneIcon.y < 0 ? 300 : cloneIcon.y + 300; //起点位置与终点位置谁高谁低
        cc.tween(skin).to(0.6, { x: tx })
            .call(function () {
            tryRemoveClone();
        })
            .start();
        if (easingBack) {
            cc.tween(cloneIcon)
                .to(0.3, { y: ty }, { easing: cc.easing.sineOut })
                .to(0.3, { y: -50, scale: 1 }, { easing: cc.easing.sineIn })
                .to(0.2, { y: 10, scale: 1 }, { easing: cc.easing.sineOut })
                .to(0.15, { y: 0, scale: 1 }, { easing: cc.easing.sineOut })
                .call(function () {
                tryRemoveClone();
            })
                .start();
        }
        else {
            cc.tween(cloneIcon)
                .to(0.3, { y: ty }, { easing: cc.easing.sineOut })
                .to(0.3, { y: 0, scale: 1 }, { easing: cc.easing.sineIn })
                .call(function () {
                tryRemoveClone();
            })
                .start();
        }
    };
    /**
   * 收获金币或钻石的特效
   * @param spriteFrames
   * @param targetNode
   */
    AniUtil.createEffectSpriteHome = function (startNode, targetNode, spriteFrames, callback, num, scale) {
        if (num === void 0) { num = 5; }
        if (scale === void 0) { scale = 1; }
        var effNum = num; //Utils.randomInt(num, num * 2);
        var startBattleWorldPos = startNode.convertToWorldSpaceAR(cc.v2(0, 0));
        var worldEndPos = targetNode.convertToWorldSpaceAR(new cc.Vec2(0, 0));
        for (var i = 0; i < effNum; i++) {
            var time = Utils_1.Utils.randomInt(0, 300);
            setTimeout(function () {
                var index = Utils_1.Utils.randomInt(0, spriteFrames.length);
                var frame = spriteFrames[index];
                SpriteToHome_1.default.create(frame, cc.v2(startBattleWorldPos.x, startBattleWorldPos.y), worldEndPos, false, callback, scale);
            }, time);
        }
    };
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
    AniUtil.aniWillShow = function (node) {
        node.opacity = 0;
        node.scale = 0.7;
    };
    AniUtil.aniShow = function (node, next) {
        node.stopAllActions();
        node.scale = 0.3;
        cc.tween(node).to(0.3, { opacity: 255, scale: 1 }, { easing: cc.easing.backOut })
            .call(function () {
            next && next();
        })
            .start();
    };
    AniUtil.aniHide = function (node, next) {
        node.stopAllActions();
        cc.tween(node).to(0.3, { opacity: 0, scale: 0.3 }, { easing: cc.easing.sineOut })
            .call(function () {
            next && next();
        })
            .start();
    };
    AniUtil.aniShaking = function (node, isReprat) {
        if (isReprat === void 0) { isReprat = true; }
        node.stopAllActions();
        node.angle = 0;
        if (isReprat) {
            cc.tween(node)
                .repeatForever(cc.tween(node)
                .to(0.1, { angle: -8 }, { easing: cc.easing.sineOut })
                .to(0.1, { angle: 5 }, { easing: cc.easing.sineOut })
                .to(0.1, { angle: -3 }, { easing: cc.easing.sineOut })
                .to(0.1, { angle: 1.5 }, { easing: cc.easing.sineOut })
                .to(0.1, { angle: 0 }, { easing: cc.easing.sineOut })
                .delay(0.5))
                .start();
        }
        else {
            cc.tween(node)
                .to(0.1, { angle: -8 }, { easing: cc.easing.sineOut })
                .to(0.1, { angle: 5 }, { easing: cc.easing.sineOut })
                .to(0.1, { angle: -3 }, { easing: cc.easing.sineOut })
                .to(0.1, { angle: 1.5 }, { easing: cc.easing.sineOut })
                .to(0.1, { angle: 0 }, { easing: cc.easing.sineOut })
                .delay(0.5)
                .start();
        }
    };
    AniUtil.aniHeart = function (node, cyc, constant) {
        if (cyc === void 0) { cyc = 0.2; }
        node.stopAllActions();
        node.angle = 0;
        cc.tween(node)
            .repeatForever(cc.tween(node)
            .to(constant ? cyc : cyc / 2, { scale: 1.2 }, { easing: cc.easing.sineOut })
            .to(cyc, { scale: 1 }, { easing: cc.easing.sineOut })
            .delay(constant ? 0 : 0.5))
            .start();
    };
    AniUtil.aniHeartHappy = function (node) {
        node.stopAllActions();
        var by = node.y;
        var ty = node.y + 30;
        cc.tween(node)
            .repeatForever(cc.tween(node)
            .to(0.1, { scaleX: 1.1, scaleY: 0.8 }, { easing: cc.easing.sineOut })
            .to(0.1, { scaleX: 1, scaleY: 1, y: ty }, { easing: cc.easing.sineOut })
            .to(0.1, { scaleX: 1, scaleY: 1, y: by }, { easing: cc.easing.sineIn })
            .to(0.1, { scaleX: 1.1, scaleY: 0.8 }, { easing: cc.easing.sineOut })
            .to(0.1, { scaleX: 1, scaleY: 1 }, { easing: cc.easing.sineIn })
            .delay(0.2))
            .start();
    };
    AniUtil.aniDou = function (node, next) {
        cc.tween(node)
            .to(0.1, { scaleY: 1.4, scaleX: 0.7 }, { easing: cc.easing.sineOut })
            .to(0.05, { scaleY: 0.9, scaleX: 1.1 }, { easing: cc.easing.sineOut })
            .to(0.08, { scaleY: 1.1, scaleX: 0.9 }, { easing: cc.easing.sineOut })
            .to(0.08, { scaleY: 1, scaleX: 1 }, { easing: cc.easing.sineOut })
            .call(function () {
            next && next();
        })
            .start();
    };
    AniUtil.aniShakeHead = function (node, next) {
        cc.tween(node)
            .to(0.05, { x: -6 }, { easing: cc.easing.sineOut })
            .to(0.08, { x: 6 }, { easing: cc.easing.sineOut })
            .to(0.07, { x: -5 }, { easing: cc.easing.sineOut })
            .to(0.06, { x: 4 }, { easing: cc.easing.sineOut })
            .to(0.05, { x: -3 }, { easing: cc.easing.sineOut })
            .to(0.04, { x: 2 }, { easing: cc.easing.sineOut })
            .to(0.03, { x: -1 }, { easing: cc.easing.sineOut })
            .to(0.02, { x: 0 }, { easing: cc.easing.sineOut })
            .call(function () {
            next && next();
        })
            .start();
    };
    //上下浮动
    AniUtil.aniUpDown = function (node, time, y) {
        if (time === void 0) { time = 0.5; }
        if (y === void 0) { y = 20; }
        if (cc.isValid(node)) {
            node.stopAllActions();
            var pos = cc.v2(node.x, node.y);
            cc.tween(node)
                .repeatForever(cc.tween(node)
                .to(time, { y: pos.y + y })
                .to(time, { y: pos.y }))
                .start();
        }
    };
    //
    AniUtil.rotation = function (node, time) {
        if (time === void 0) { time = 0.5; }
        if (cc.isValid(node)) {
            node.stopAllActions();
            cc.tween(node)
                .repeatForever(cc.tween(node)
                .to(time, { angle: 360 })
                .to(0, { angle: 0 }))
                .start();
        }
    };
    return AniUtil;
}());
exports.AniUtil = AniUtil;

cc._RF.pop();