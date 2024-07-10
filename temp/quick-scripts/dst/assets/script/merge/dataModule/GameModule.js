
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/merge/dataModule/GameModule.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '64566mmcFVMhZE7goFc3ntd', 'GameModule');
// script/merge/dataModule/GameModule.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameModule = void 0;
var Define_1 = require("../manager/Define");
var EventManager_1 = require("../util/EventManager");
var Utils_1 = require("../util/Utils");
var DataModule_1 = require("./DataModule");
var GameModule = /** @class */ (function (_super) {
    __extends(GameModule, _super);
    function GameModule() {
        var _this = _super.call(this) || this;
        // 用户的筹码槽位数据 1~10
        _this.slotData = [
            [1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
            [1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
            [1, 1, 2, 2, 3, 3, 4, 4, 5, 5],
            [2, 2, 3, 1, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ];
        // 当前正在选中的筹码槽位
        _this.curSelectSlotIdx = -1;
        // 当前选中的筹码信息
        _this.curSelectCoinIdxs = [];
        // 移动锁
        _this.moveLock = false;
        _this.mergeLock = 0;
        return _this;
    }
    GameModule.prototype.parseData = function (data) {
        _super.prototype.parseData.call(this, data);
    };
    /**
     * @description 通过槽id 获取第一个有效的筹码信息
     * @param slotIdx: 需要获取第一个有效的筹码信息的槽id
     * @return vaildNum: 该槽位的有效数字、vaildIdx: 有效数字的索引、vaildSPace: 剩余可容纳的筹码空间
     */
    GameModule.prototype.getFirstVaildNumBySlotIdx = function (slotIdx) {
        var slotData = this.slotData[slotIdx];
        var vaildNum = -1;
        var vaildIdx = -1;
        var vaildSpace = 10;
        for (var i = 9; i >= 0; i--) {
            if (slotData[i] === 0)
                continue;
            vaildNum = slotData[i];
            vaildIdx = i;
            vaildSpace = 9 - i;
            break;
        }
        return { vaildNum: vaildNum, vaildIdx: vaildIdx, vaildSpace: vaildSpace };
    };
    /**
     * @description 获取当前选中的待移动的槽位筹码信息
     * @returns slotIdx: 当前选中的槽位索引、  cnt: 待移动的筹码数量、  num: 待移动的数字类型
     */
    GameModule.prototype.getCurSelectSlotInfo = function () {
        if (this.curSelectSlotIdx === -1)
            return null;
        var cnt = this.curSelectCoinIdxs.length;
        var num = this.slotData[this.curSelectSlotIdx][this.curSelectCoinIdxs[0]];
        return { slotIdx: this.curSelectSlotIdx, cnt: cnt, num: num };
    };
    // 重置当前筹码选择状态
    GameModule.prototype.resetSelectStatus = function () {
        exports.gameModule.curSelectSlotIdx = -1;
        exports.gameModule.curSelectCoinIdxs = [];
    };
    // 筹码移动完成，整理移动后的数据
    GameModule.prototype.tidySlotData = function (ed) {
        for (var i = 0; i < ed.srcIdxArr.length; i++) {
            this.slotData[this.curSelectSlotIdx][ed.srcIdxArr[i]] = 0;
            this.slotData[ed.tarSlotIdx][ed.tarIdxArr[i]] = ed.numType;
        }
        // 刷新筹码显示情况
        EventManager_1.eventManager.dispatchEvent(new EventManager_1.GameEvent(Define_1.EventType.MOVE_END, ed));
        // 重置当前选中状态
        this.resetSelectStatus();
        // 检测是否可以合成
        EventManager_1.eventManager.dispatch(Define_1.EventType.CHECK_MERGE);
    };
    // 检测是否有可以合成的槽位
    GameModule.prototype.checkCanMerge = function () {
        var result = [];
        for (var i = 0; i < 8; i++) {
            var can = this.checkCanMergeBySlot(i);
            if (can)
                result.push(i);
        }
        return result;
    };
    // 通过槽位来检测是否可以进行合成
    GameModule.prototype.checkCanMergeBySlot = function (slotId) {
        var slotData = this.slotData[slotId];
        for (var i = 0; i < 10; i++) {
            if (slotData[i] === 0)
                return false;
            if (i === 0)
                continue;
            if (slotData[i] !== slotData[i - 1]) {
                return false;
            }
        }
        return true;
    };
    // 获取当前最大数字
    GameModule.prototype.getMaxValue = function () {
        var maxValue = 0;
        for (var i = 0; i < this.slotData.length; i++) {
            for (var j = 0; j < this.slotData[i].length; j++) {
                if (this.slotData[i][j] > maxValue) {
                    maxValue = this.slotData[i][j];
                }
            }
        }
        return maxValue;
    };
    // 获取当前最小数字
    GameModule.prototype.getMinValue = function () {
        var minValue = -1;
        for (var i = 0; i < this.slotData.length; i++) {
            for (var j = 0; j < this.slotData[i].length; j++) {
                if (minValue === -1) {
                    minValue = this.slotData[i][j];
                }
                if (this.slotData[i][j] < minValue) {
                    minValue = this.slotData[i][j];
                }
            }
        }
        return minValue;
    };
    GameModule.prototype.getSpaceBySlot = function (id) {
        if (!this.slotData[id])
            return;
        for (var i = 0; i < this.slotData[id].length; i++) {
            if (this.slotData[id][i] === 0) {
                return 10 - i;
            }
        }
    };
    // 获取当前剩余空间
    GameModule.prototype.getSpace = function () {
        var space = 0;
        for (var i = 0; i < 10; i++) {
            space += this.getSpaceBySlot(i);
        }
        return space;
    };
    // 生成新的筹码数据
    GameModule.prototype.produceNewCoinData = function () {
        return [
            [1], [1], [1], [1], [1], [1], [1], [1]
        ];
        var maxValue = this.getMaxValue();
        var space = this.getSpace();
        if (maxValue >= 15) {
            console.warn('当前已合成15');
            return;
        }
        if (space === 0) {
            console.warn('没有剩余空间，无法生成新数字');
            return;
        }
        if (maxValue < 8) {
            return this.produceStrategyOne(maxValue, space);
        }
        else if (maxValue < 10) {
            return this.produceStrategyTwo(maxValue, space);
        }
        else if (maxValue < 12) {
            return this.produceStrategyThree(maxValue, space);
        }
        else if (maxValue < 15) {
            return this.produceStrategyFour(maxValue, space);
        }
    };
    // 仅剩一个空余位置的场景
    GameModule.prototype.produceOnlyOne = function () {
        return;
    };
    /**
     * @description 小于8 策略
     * 1、生成数量 min(space*30,5);
     * 2、生成类型 <= 2
     * 3、最小数 = 当前场景最小数-1
     * @returns
     */
    GameModule.prototype.produceStrategyOne = function (max, space) {
        console.log('策略1:<8');
        if (space === 1) {
            return this.produceOnlyOne();
        }
        var min = this.getMinValue();
        // 确定需要生成的数量
        var cnt = Math.max(Math.floor(Math.min(5, space * 0.3)), 2);
        // 确定需要生成的数字种类
        var types = Utils_1.default.randomIntArrFromSection(cnt, min, max);
        // 根据种类和数量进行填充
        return;
    };
    // 小于10的策略
    GameModule.prototype.produceStrategyTwo = function (max, space) {
        console.log('策略2:<10');
        return;
    };
    // 小于12的策略
    GameModule.prototype.produceStrategyThree = function (max, space) {
        console.log('策略1:<12');
        return;
    };
    // 小于15的策略
    GameModule.prototype.produceStrategyFour = function (max, space) {
        console.log('策略1:<15');
        return;
    };
    // TODO: 新生成的数据和原有数据进行合成
    GameModule.prototype.mergeProduceData = function (newData) {
        for (var slotIdx = 0; slotIdx < 8; slotIdx++) {
            var newSlotData = Utils_1.default.deepClone(newData[slotIdx]);
            for (var j = 0; j < 10; j++) {
                if (this.slotData[slotIdx][j] === 0 && newSlotData.length > 0) {
                    var newCoinData = newSlotData.shift();
                    this.slotData[slotIdx][j] = newCoinData;
                }
            }
        }
    };
    return GameModule;
}(DataModule_1.default));
exports.default = GameModule;
exports.gameModule = new GameModule();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvbWVyZ2UvZGF0YU1vZHVsZS9HYW1lTW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0Q0FBOEM7QUFDOUMscURBQStEO0FBQy9ELHVDQUFrQztBQUNsQywyQ0FBc0M7QUFFdEM7SUFBd0MsOEJBQVU7SUFzQjlDO1FBQUEsWUFDSSxpQkFBTyxTQUNWO1FBdkJELGlCQUFpQjtRQUNWLGNBQVEsR0FBRztZQUNkLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFD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QUU7b0JBQzNELElBQU0sV0FBVyxHQUFHLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztvQkFDeEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUM7aUJBQzNDO2FBQ0o7U0FDSjtJQUNMLENBQUM7SUFDTCxpQkFBQztBQUFELENBL1BBLEFBK1BDLENBL1B1QyxvQkFBVSxHQStQakQ7O0FBQ1ksUUFBQSxVQUFVLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50VHlwZSB9IGZyb20gJy4uL21hbmFnZXIvRGVmaW5lJztcbmltcG9ydCB7IGV2ZW50TWFuYWdlciwgR2FtZUV2ZW50IH0gZnJvbSAnLi4vdXRpbC9FdmVudE1hbmFnZXInO1xuaW1wb3J0IFV0aWxzIGZyb20gJy4uL3V0aWwvVXRpbHMnO1xuaW1wb3J0IERhdGFNb2R1bGUgZnJvbSAnLi9EYXRhTW9kdWxlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU1vZHVsZSBleHRlbmRzIERhdGFNb2R1bGUge1xuICAgIC8vIOeUqOaIt+eahOetueeggeanveS9jeaVsOaNriAxfjEwXG4gICAgcHVibGljIHNsb3REYXRhID0gW1xuICAgICAgICBbMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMF0sXG4gICAgICAgIFsxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgWzEsIDEsIDIsIDIsIDMsIDMsIDQsIDQsIDUsIDVdLFxuICAgICAgICBbMiwgMiwgMywgMSwgMSwgMCwgMCwgMCwgMCwgMF0sXG4gICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICBdXG5cbiAgICAvLyDlvZPliY3mraPlnKjpgInkuK3nmoTnrbnnoIHmp73kvY1cbiAgICBjdXJTZWxlY3RTbG90SWR4OiBudW1iZXIgPSAtMTtcbiAgICAvLyDlvZPliY3pgInkuK3nmoTnrbnnoIHkv6Hmga9cbiAgICBjdXJTZWxlY3RDb2luSWR4czogbnVtYmVyW10gPSBbXTtcblxuICAgIC8vIOenu+WKqOmUgVxuICAgIG1vdmVMb2NrOiBib29sZWFuID0gZmFsc2U7XG4gICAgbWVyZ2VMb2NrOiBudW1iZXIgPSAwO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgcGFyc2VEYXRhKGRhdGE6IGFueSk6IHZvaWQge1xuICAgICAgICBzdXBlci5wYXJzZURhdGEoZGF0YSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOmAmui/h+anvWlkIOiOt+WPluesrOS4gOS4quacieaViOeahOetueeggeS/oeaBr1xuICAgICAqIEBwYXJhbSBzbG90SWR4OiDpnIDopoHojrflj5bnrKzkuIDkuKrmnInmlYjnmoTnrbnnoIHkv6Hmga/nmoTmp71pZFxuICAgICAqIEByZXR1cm4gdmFpbGROdW06IOivpeanveS9jeeahOacieaViOaVsOWtl+OAgXZhaWxkSWR4OiDmnInmlYjmlbDlrZfnmoTntKLlvJXjgIF2YWlsZFNQYWNlOiDliankvZnlj6/lrrnnurPnmoTnrbnnoIHnqbrpl7RcbiAgICAgKi9cbiAgICBnZXRGaXJzdFZhaWxkTnVtQnlTbG90SWR4KHNsb3RJZHg6IG51bWJlcik6IHsgdmFpbGROdW06IG51bWJlciwgdmFpbGRJZHg6IG51bWJlciwgdmFpbGRTcGFjZTogbnVtYmVyIH0ge1xuICAgICAgICBjb25zdCBzbG90RGF0YSA9IHRoaXMuc2xvdERhdGFbc2xvdElkeF07XG5cbiAgICAgICAgbGV0IHZhaWxkTnVtOiBudW1iZXIgPSAtMTtcbiAgICAgICAgbGV0IHZhaWxkSWR4OiBudW1iZXIgPSAtMTtcbiAgICAgICAgbGV0IHZhaWxkU3BhY2U6IG51bWJlciA9IDEwO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSA5OyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgaWYgKHNsb3REYXRhW2ldID09PSAwKSBjb250aW51ZTtcblxuICAgICAgICAgICAgdmFpbGROdW0gPSBzbG90RGF0YVtpXTtcbiAgICAgICAgICAgIHZhaWxkSWR4ID0gaTtcbiAgICAgICAgICAgIHZhaWxkU3BhY2UgPSA5IC0gaTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgdmFpbGROdW0sIHZhaWxkSWR4LCB2YWlsZFNwYWNlIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOiOt+WPluW9k+WJjemAieS4reeahOW+heenu+WKqOeahOanveS9jeetueeggeS/oeaBr1xuICAgICAqIEByZXR1cm5zIHNsb3RJZHg6IOW9k+WJjemAieS4reeahOanveS9jee0ouW8leOAgSAgY250OiDlvoXnp7vliqjnmoTnrbnnoIHmlbDph4/jgIEgIG51bTog5b6F56e75Yqo55qE5pWw5a2X57G75Z6LXG4gICAgICovXG4gICAgZ2V0Q3VyU2VsZWN0U2xvdEluZm8oKTogeyBzbG90SWR4OiBudW1iZXIsIGNudDogbnVtYmVyLCBudW06IG51bWJlciB9IHtcbiAgICAgICAgaWYgKHRoaXMuY3VyU2VsZWN0U2xvdElkeCA9PT0gLTEpIHJldHVybiBudWxsO1xuICAgICAgICBjb25zdCBjbnQgPSB0aGlzLmN1clNlbGVjdENvaW5JZHhzLmxlbmd0aDtcbiAgICAgICAgY29uc3QgbnVtID0gdGhpcy5zbG90RGF0YVt0aGlzLmN1clNlbGVjdFNsb3RJZHhdW3RoaXMuY3VyU2VsZWN0Q29pbklkeHNbMF1dO1xuICAgICAgICByZXR1cm4geyBzbG90SWR4OiB0aGlzLmN1clNlbGVjdFNsb3RJZHgsIGNudCwgbnVtIH07XG4gICAgfVxuXG4gICAgLy8g6YeN572u5b2T5YmN562556CB6YCJ5oup54q25oCBXG4gICAgcmVzZXRTZWxlY3RTdGF0dXMoKTogdm9pZCB7XG4gICAgICAgIGdhbWVNb2R1bGUuY3VyU2VsZWN0U2xvdElkeCA9IC0xO1xuICAgICAgICBnYW1lTW9kdWxlLmN1clNlbGVjdENvaW5JZHhzID0gW107XG4gICAgfVxuXG4gICAgLy8g562556CB56e75Yqo5a6M5oiQ77yM5pW055CG56e75Yqo5ZCO55qE5pWw5o2uXG4gICAgdGlkeVNsb3REYXRhKGVkOiB7IHRhclNsb3RJZHg6IG51bWJlciwgbnVtVHlwZTogbnVtYmVyLCBzcmNJZHhBcnI6IG51bWJlcltdLCB0YXJJZHhBcnI6IG51bWJlcltdIH0pIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlZC5zcmNJZHhBcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuc2xvdERhdGFbdGhpcy5jdXJTZWxlY3RTbG90SWR4XVtlZC5zcmNJZHhBcnJbaV1dID0gMDtcbiAgICAgICAgICAgIHRoaXMuc2xvdERhdGFbZWQudGFyU2xvdElkeF1bZWQudGFySWR4QXJyW2ldXSA9IGVkLm51bVR5cGU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDliLfmlrDnrbnnoIHmmL7npLrmg4XlhrVcbiAgICAgICAgZXZlbnRNYW5hZ2VyLmRpc3BhdGNoRXZlbnQobmV3IEdhbWVFdmVudChFdmVudFR5cGUuTU9WRV9FTkQsIGVkKSk7XG5cbiAgICAgICAgLy8g6YeN572u5b2T5YmN6YCJ5Lit54q25oCBXG4gICAgICAgIHRoaXMucmVzZXRTZWxlY3RTdGF0dXMoKTtcblxuICAgICAgICAvLyDmo4DmtYvmmK/lkKblj6/ku6XlkIjmiJBcbiAgICAgICAgZXZlbnRNYW5hZ2VyLmRpc3BhdGNoKEV2ZW50VHlwZS5DSEVDS19NRVJHRSk7XG4gICAgfVxuXG4gICAgLy8g5qOA5rWL5piv5ZCm5pyJ5Y+v5Lul5ZCI5oiQ55qE5qe95L2NXG4gICAgY2hlY2tDYW5NZXJnZSgpOiBudW1iZXJbXSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY2FuID0gdGhpcy5jaGVja0Nhbk1lcmdlQnlTbG90KGkpO1xuICAgICAgICAgICAgaWYgKGNhbikgcmVzdWx0LnB1c2goaSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIC8vIOmAmui/h+anveS9jeadpeajgOa1i+aYr+WQpuWPr+S7pei/m+ihjOWQiOaIkFxuICAgIGNoZWNrQ2FuTWVyZ2VCeVNsb3Qoc2xvdElkOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3Qgc2xvdERhdGEgPSB0aGlzLnNsb3REYXRhW3Nsb3RJZF07XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgaWYgKHNsb3REYXRhW2ldID09PSAwKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBpZiAoaSA9PT0gMCkgY29udGludWU7XG4gICAgICAgICAgICBpZiAoc2xvdERhdGFbaV0gIT09IHNsb3REYXRhW2kgLSAxXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIOiOt+WPluW9k+WJjeacgOWkp+aVsOWtl1xuICAgIGdldE1heFZhbHVlKCk6IG51bWJlciB7XG4gICAgICAgIGxldCBtYXhWYWx1ZSA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zbG90RGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLnNsb3REYXRhW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2xvdERhdGFbaV1bal0gPiBtYXhWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBtYXhWYWx1ZSA9IHRoaXMuc2xvdERhdGFbaV1bal07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWF4VmFsdWU7XG4gICAgfVxuXG4gICAgLy8g6I635Y+W5b2T5YmN5pyA5bCP5pWw5a2XXG4gICAgZ2V0TWluVmFsdWUoKTogbnVtYmVyIHtcbiAgICAgICAgbGV0IG1pblZhbHVlID0gLTE7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zbG90RGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLnNsb3REYXRhW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1pblZhbHVlID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBtaW5WYWx1ZSA9IHRoaXMuc2xvdERhdGFbaV1bal07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNsb3REYXRhW2ldW2pdIDwgbWluVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgbWluVmFsdWUgPSB0aGlzLnNsb3REYXRhW2ldW2pdO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1pblZhbHVlO1xuICAgIH1cblxuICAgIGdldFNwYWNlQnlTbG90KGlkOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICBpZiAoIXRoaXMuc2xvdERhdGFbaWRdKSByZXR1cm47XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zbG90RGF0YVtpZF0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNsb3REYXRhW2lkXVtpXSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAxMCAtIGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDojrflj5blvZPliY3liankvZnnqbrpl7RcbiAgICBnZXRTcGFjZSgpOiBudW1iZXIge1xuICAgICAgICBsZXQgc3BhY2UgPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgIHNwYWNlICs9IHRoaXMuZ2V0U3BhY2VCeVNsb3QoaSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNwYWNlO1xuICAgIH1cblxuICAgIC8vIOeUn+aIkOaWsOeahOetueeggeaVsOaNrlxuICAgIHByb2R1Y2VOZXdDb2luRGF0YSgpOiBudW1iZXJbXVtdIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIFsxXSxbMV0sWzFdLFsxXSxbMV0sWzFdLFsxXSxbMV1cbiAgICAgICAgXVxuXG4gICAgICAgIGNvbnN0IG1heFZhbHVlID0gdGhpcy5nZXRNYXhWYWx1ZSgpO1xuICAgICAgICBjb25zdCBzcGFjZSA9IHRoaXMuZ2V0U3BhY2UoKTtcblxuICAgICAgICBpZiAobWF4VmFsdWUgPj0gMTUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2Fybign5b2T5YmN5bey5ZCI5oiQMTUnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzcGFjZSA9PT0gMCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCfmsqHmnInliankvZnnqbrpl7TvvIzml6Dms5XnlJ/miJDmlrDmlbDlrZcnKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1heFZhbHVlIDwgOCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvZHVjZVN0cmF0ZWd5T25lKG1heFZhbHVlLCBzcGFjZSk7XG4gICAgICAgIH0gZWxzZSBpZiAobWF4VmFsdWUgPCAxMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvZHVjZVN0cmF0ZWd5VHdvKG1heFZhbHVlLCBzcGFjZSk7XG4gICAgICAgIH0gZWxzZSBpZiAobWF4VmFsdWUgPCAxMikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvZHVjZVN0cmF0ZWd5VGhyZWUobWF4VmFsdWUsIHNwYWNlKTtcbiAgICAgICAgfSBlbHNlIGlmIChtYXhWYWx1ZSA8IDE1KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9kdWNlU3RyYXRlZ3lGb3VyKG1heFZhbHVlLCBzcGFjZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDku4XliankuIDkuKrnqbrkvZnkvY3nva7nmoTlnLrmma9cbiAgICBwcm9kdWNlT25seU9uZSgpOiBudW1iZXJbXVtdIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDlsI/kuo44IOetlueVpVxuICAgICAqIDHjgIHnlJ/miJDmlbDph48gbWluKHNwYWNlKjMwLDUpO1xuICAgICAqIDLjgIHnlJ/miJDnsbvlnosgPD0gMlxuICAgICAqIDPjgIHmnIDlsI/mlbAgPSDlvZPliY3lnLrmma/mnIDlsI/mlbAtMVxuICAgICAqIEByZXR1cm5zIFxuICAgICAqL1xuICAgIHByb2R1Y2VTdHJhdGVneU9uZShtYXg6IG51bWJlciwgc3BhY2U6IG51bWJlcik6IG51bWJlcltdW10ge1xuICAgICAgICBjb25zb2xlLmxvZygn562W55WlMTo8OCcpO1xuICAgICAgICBpZiAoc3BhY2UgPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2R1Y2VPbmx5T25lKCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtaW4gPSB0aGlzLmdldE1pblZhbHVlKCk7XG5cbiAgICAgICAgLy8g56Gu5a6a6ZyA6KaB55Sf5oiQ55qE5pWw6YePXG4gICAgICAgIGNvbnN0IGNudCA9IE1hdGgubWF4KE1hdGguZmxvb3IoTWF0aC5taW4oNSwgc3BhY2UgKiAwLjMpKSwgMik7XG5cbiAgICAgICAgLy8g56Gu5a6a6ZyA6KaB55Sf5oiQ55qE5pWw5a2X56eN57G7XG4gICAgICAgIGNvbnN0IHR5cGVzID0gVXRpbHMucmFuZG9tSW50QXJyRnJvbVNlY3Rpb24oY250LCBtaW4sIG1heCk7XG4gICAgICAgIFxuICAgICAgICAvLyDmoLnmja7np43nsbvlkozmlbDph4/ov5vooYzloavlhYVcbiAgICAgICAgXG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyDlsI/kuo4xMOeahOetlueVpVxuICAgIHByb2R1Y2VTdHJhdGVneVR3byhtYXg6IG51bWJlciwgc3BhY2U6IG51bWJlcik6IG51bWJlcltdW10ge1xuICAgICAgICBjb25zb2xlLmxvZygn562W55WlMjo8MTAnKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIOWwj+S6jjEy55qE562W55WlXG4gICAgcHJvZHVjZVN0cmF0ZWd5VGhyZWUobWF4OiBudW1iZXIsIHNwYWNlOiBudW1iZXIpOiBudW1iZXJbXVtdIHtcbiAgICAgICAgY29uc29sZS5sb2coJ+etlueVpTE6PDEyJyk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyDlsI/kuo4xNeeahOetlueVpVxuICAgIHByb2R1Y2VTdHJhdGVneUZvdXIobWF4OiBudW1iZXIsIHNwYWNlOiBudW1iZXIpOiBudW1iZXJbXVtdIHtcbiAgICAgICAgY29uc29sZS5sb2coJ+etlueVpTE6PDE1Jyk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBUT0RPOiDmlrDnlJ/miJDnmoTmlbDmja7lkozljp/mnInmlbDmja7ov5vooYzlkIjmiJBcbiAgICBtZXJnZVByb2R1Y2VEYXRhKG5ld0RhdGE6IG51bWJlcltdW10pOiB2b2lkIHtcbiAgICAgICAgZm9yIChsZXQgc2xvdElkeCA9IDA7IHNsb3RJZHggPCA4OyBzbG90SWR4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1Nsb3REYXRhID0gVXRpbHMuZGVlcENsb25lKG5ld0RhdGFbc2xvdElkeF0pO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2xvdERhdGFbc2xvdElkeF1bal0gPT09IDAgJiYgbmV3U2xvdERhdGEubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdDb2luRGF0YSA9IG5ld1Nsb3REYXRhLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2xvdERhdGFbc2xvdElkeF1bal0gPSBuZXdDb2luRGF0YTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgY29uc3QgZ2FtZU1vZHVsZSA9IG5ldyBHYW1lTW9kdWxlKCk7XG4iXX0=