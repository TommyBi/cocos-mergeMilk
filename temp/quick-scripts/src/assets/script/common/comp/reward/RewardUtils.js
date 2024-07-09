"use strict";
cc._RF.push(module, 'b11c7Deuc5EwqrJWwNqtdlf', 'RewardUtils');
// script/common/comp/reward/RewardUtils.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RewardUtils = exports.RewardType = void 0;
var GameUtils_1 = require("../../../game/GameUtils");
var Jumpjump3d_1 = require("../../effect/Jumpjump3d");
var RewardType;
(function (RewardType) {
    RewardType[RewardType["Coin"] = 0] = "Coin";
})(RewardType = exports.RewardType || (exports.RewardType = {}));
var RewardUtils = /** @class */ (function () {
    function RewardUtils() {
    }
    RewardUtils.rewardsDataClose = function (rewardOpt) {
        switch (rewardOpt.type) {
            case RewardType.Coin: {
                break;
            }
        }
    };
    RewardUtils.resBoomByNode = function (icoNode, targetNode, num, scale) {
        if (scale === void 0) { scale = 0.5; }
        GameUtils_1.GameUtils.playSFX("coin");
        var wposTarget = targetNode.convertToWorldSpaceAR(cc.v2(0, 0));
        var wposStart = icoNode.convertToWorldSpaceAR(cc.v2(0, 0));
        GameUtils_1.GameUtils.addEffBoom(wposStart);
        var icoFrame = icoNode.getComponent(cc.Sprite).spriteFrame;
        for (var i = 0; i < num; i++) {
            Jumpjump3d_1.default.createBySpr(undefined, icoFrame, wposStart, 100, scale, wposTarget);
        }
    };
    return RewardUtils;
}());
exports.RewardUtils = RewardUtils;

cc._RF.pop();