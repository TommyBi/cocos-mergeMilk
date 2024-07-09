
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/common/comp/reward/RewardUtils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvY29tbW9uL2NvbXAvcmV3YXJkL1Jld2FyZFV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFEQUFvRDtBQUNwRCxzREFBaUQ7QUFHakQsSUFBWSxVQUVYO0FBRkQsV0FBWSxVQUFVO0lBQ2xCLDJDQUFJLENBQUE7QUFDUixDQUFDLEVBRlcsVUFBVSxHQUFWLGtCQUFVLEtBQVYsa0JBQVUsUUFFckI7QUFpQkQ7SUFBQTtJQW9CQSxDQUFDO0lBbkJVLDRCQUFnQixHQUF2QixVQUF3QixTQUE2QjtRQUNqRCxRQUFRLFNBQVMsQ0FBQyxJQUFJLEVBQUU7WUFDcEIsS0FBSyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2xCLE1BQU07YUFDVDtTQUNKO0lBQ0wsQ0FBQztJQUdNLHlCQUFhLEdBQXBCLFVBQXFCLE9BQWdCLEVBQUUsVUFBbUIsRUFBRSxHQUFXLEVBQUUsS0FBbUI7UUFBbkIsc0JBQUEsRUFBQSxXQUFtQjtRQUN4RixxQkFBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQixJQUFJLFVBQVUsR0FBRyxVQUFVLENBQUMscUJBQXFCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvRCxJQUFJLFNBQVMsR0FBRyxPQUFPLENBQUMscUJBQXFCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzRCxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNoQyxJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUM7UUFDM0QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMxQixvQkFBVSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1NBQ2xGO0lBQ0wsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FwQkEsQUFvQkMsSUFBQTtBQXBCWSxrQ0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdhbWVVdGlscyB9IGZyb20gXCIuLi8uLi8uLi9nYW1lL0dhbWVVdGlsc1wiO1xuaW1wb3J0IEp1bXBqdW1wM2QgZnJvbSBcIi4uLy4uL2VmZmVjdC9KdW1wanVtcDNkXCI7XG5pbXBvcnQgQmFsbF9NYWluIGZyb20gXCIuLi8uLi9CYWxsX01haW5cIjtcblxuZXhwb3J0IGVudW0gUmV3YXJkVHlwZSB7XG4gICAgQ29pbixcbn1cblxuZXhwb3J0IHR5cGUgT3B0aW9uX1Jld2FyZF9DZWxsID0ge1xuICAgIHR5cGU6IFJld2FyZFR5cGUsXG4gICAgY291bnQ6IG51bWJlcixcbiAgICBpY286IGNjLk5vZGUsXG4gICAgW2luZGV4OiBzdHJpbmddOiBhbnlcbn1cblxuXG4vLyB0eXBlOiBSZXdhcmRUeXBlLCBjb3VudDogbnVtYmVyLCBpY286IGNjLk5vZGUsW2luZGV4OiBzdHJpbmddOiBhbnlcbmV4cG9ydCB0eXBlIE9wdGlvbl9SZXdhcmRfUGFuZWwgPSB7XG4gICAgcmV3YXJkOiBBcnJheTxPcHRpb25fUmV3YXJkX0NlbGw+LFxuICAgIG5leHQ6IEZ1bmN0aW9uLFxuICAgIG5lZWRDbGljazogYm9vbGVhblxufVxuXG5leHBvcnQgY2xhc3MgUmV3YXJkVXRpbHMge1xuICAgIHN0YXRpYyByZXdhcmRzRGF0YUNsb3NlKHJld2FyZE9wdDogT3B0aW9uX1Jld2FyZF9DZWxsKSB7XG4gICAgICAgIHN3aXRjaCAocmV3YXJkT3B0LnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgUmV3YXJkVHlwZS5Db2luOiB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHN0YXRpYyByZXNCb29tQnlOb2RlKGljb05vZGU6IGNjLk5vZGUsIHRhcmdldE5vZGU6IGNjLk5vZGUsIG51bTogbnVtYmVyLCBzY2FsZTogbnVtYmVyID0gMC41KSB7XG4gICAgICAgIEdhbWVVdGlscy5wbGF5U0ZYKFwiY29pblwiKTtcbiAgICAgICAgbGV0IHdwb3NUYXJnZXQgPSB0YXJnZXROb2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAwKSk7XG4gICAgICAgIGxldCB3cG9zU3RhcnQgPSBpY29Ob2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAwKSk7XG4gICAgICAgIEdhbWVVdGlscy5hZGRFZmZCb29tKHdwb3NTdGFydCk7XG4gICAgICAgIGxldCBpY29GcmFtZSA9IGljb05vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWU7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtOyBpKyspIHtcbiAgICAgICAgICAgIEp1bXBqdW1wM2QuY3JlYXRlQnlTcHIodW5kZWZpbmVkLCBpY29GcmFtZSwgd3Bvc1N0YXJ0LCAxMDAsIHNjYWxlLCB3cG9zVGFyZ2V0KTtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0=