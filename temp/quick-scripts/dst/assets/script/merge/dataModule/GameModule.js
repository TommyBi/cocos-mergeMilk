
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
var NewUtils_1 = require("../util/NewUtils");
var DataModule_1 = require("./DataModule");
var GameModule = /** @class */ (function (_super) {
    __extends(GameModule, _super);
    function GameModule() {
        var _this = _super.call(this) || this;
        // 用户的筹码槽位数据 1~10
        _this.slotData = [
            [1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
            [2, 2, 2, 0, 0, 0, 0, 0, 0, 0],
            [1, 1, 2, 2, 0, 0, 0, 0, 0, 0],
            [2, 2, 2, 3, 3, 0, 0, 0, 0, 0],
            [5, 5, 0, 0, 0, 0, 0, 0, 0, 0],
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
                if (minValue === -1 && this.slotData[i][j] !== 0) {
                    minValue = this.slotData[i][j];
                }
                if (this.slotData[i][j] < minValue && this.slotData[i][j] !== 0) {
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
        return 0;
    };
    // 获取当前剩余空间
    GameModule.prototype.getSpace = function () {
        var space = 0;
        for (var i = 0; i < 8; i++) {
            space += this.getSpaceBySlot(i);
        }
        return space;
    };
    // 生成新的筹码数据
    GameModule.prototype.produceNewCoinData = function () {
        // return [
        //     [1], [1], [1], [1], [1], [1], [1], [1]
        // ]
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
        if (maxValue < 5) {
            return this.produceStrategyOne(maxValue, space);
        }
        else if (maxValue < 10) {
            return this.produceStrategyTwo(maxValue, space);
        }
        else if (maxValue < 14) {
            return this.produceStrategyThree(maxValue, space);
        }
        else if (maxValue < 15) {
            return this.produceStrategyFour(maxValue, space);
        }
    };
    /**
     * @description 小于5 策略
     * 1、生成数量 min(space*30,8);
     * 2、生成类型 <= 3
     * 3、最小数 = 当前场景最小数-1
     *
     * @param max: 当前场景中最大的筹码数值
     * @param space: 当前总的空间数
     * @returns
     */
    GameModule.prototype.produceStrategyOne = function (max, space) {
        console.log('策略1:<5');
        // 场景中最小值
        var min = this.getMinValue();
        // 总共需要生成的数字数量
        var totalCnt = Math.floor(Math.min(20, space * 0.5));
        if (totalCnt === 0)
            totalCnt = 1;
        // 新生成的数字类型限定在比当前场景中最大的数字小1
        var limitMax = max - 1 > 0 ? max - 1 : 1;
        // 生成数字的类型数量 1、2、3、4、5
        var typeCnt = totalCnt >= 4 ? 4 : totalCnt;
        // 实际取数类型区间小于typeCnt，那么纠正typeCnt为较小的类型，确保不会出现场内未出现的数
        if (limitMax - min + 1 < typeCnt)
            typeCnt = limitMax - min + 1;
        // 数字种类
        var types = NewUtils_1.default.randomIntArrFromSection(typeCnt, min, limitMax);
        // 生成全部的随机筹码值
        var allNewCoin = NewUtils_1.default.randomIntArrFromArr(totalCnt, types);
        // 确定当前的剩余空间情况
        var spaceInfo = [];
        for (var i = 0; i < 8; i++) {
            var perSlotSpace = this.getSpaceBySlot(i);
            spaceInfo.push(perSlotSpace);
        }
        // 随机将已经生成的数字填充到相应的空位置处(一定是可以放得下的，剩余空间>=生成的数字数量)
        var result = [[], [], [], [], [], [], [], []];
        do {
            var slotIdx = NewUtils_1.default.randomIntInclusive(0, 7);
            if (spaceInfo[slotIdx] === 0)
                continue;
            result[slotIdx].push(allNewCoin.shift());
            spaceInfo[slotIdx]--;
        } while (allNewCoin.length > 0);
        return result;
    };
    // 小于10的策略
    GameModule.prototype.produceStrategyTwo = function (max, space) {
        console.log('策略2:<10');
        // 场景中最小值
        var min = Math.min(3, this.getMinValue());
        // 总共需要生成的数字数量
        var totalCnt = Math.floor(Math.min(20, space * 0.6));
        if (totalCnt === 0)
            totalCnt = 1;
        var limitMax = Math.min(max - 1, 7);
        // 生成数字的类型数量 min~7
        var typeCnt = totalCnt >= 3 ? 3 : totalCnt;
        // 数字种类
        var types = NewUtils_1.default.randomIntArrFromSection(typeCnt, min, limitMax);
        // 生成全部的随机筹码值
        var allNewCoin = NewUtils_1.default.randomIntArrFromArr(totalCnt, types);
        // 确定当前的剩余空间情况
        var spaceInfo = [];
        for (var i = 0; i < 8; i++) {
            var perSlotSpace = this.getSpaceBySlot(i);
            spaceInfo.push(perSlotSpace);
        }
        // 随机将已经生成的数字填充到相应的空位置处(一定是可以放得下的，剩余空间>=生成的数字数量)
        var result = [[], [], [], [], [], [], [], []];
        do {
            var slotIdx = NewUtils_1.default.randomIntInclusive(0, 7);
            if (spaceInfo[slotIdx] === 0)
                continue;
            result[slotIdx].push(allNewCoin.shift());
            spaceInfo[slotIdx]--;
        } while (allNewCoin.length > 0);
        return result;
    };
    // 小于14的策略
    GameModule.prototype.produceStrategyThree = function (max, space) {
        console.log('策略3:<14');
        // 场景中最小值
        var min = Math.min(8, this.getMinValue());
        // 总共需要生成的数字数量
        var totalCnt = Math.floor(Math.min(20, space * 0.6));
        if (totalCnt === 0)
            totalCnt = 1;
        var limitMax = Math.min(max - 1, 10);
        // 生成数字的类型数量 min~10
        var typeCnt = totalCnt >= 3 ? 3 : totalCnt;
        // 数字种类
        var types = NewUtils_1.default.randomIntArrFromSection(typeCnt, min, limitMax);
        // 生成全部的随机筹码值
        var allNewCoin = NewUtils_1.default.randomIntArrFromArr(totalCnt, types);
        // 确定当前的剩余空间情况
        var spaceInfo = [];
        for (var i = 0; i < 8; i++) {
            var perSlotSpace = this.getSpaceBySlot(i);
            spaceInfo.push(perSlotSpace);
        }
        // 随机将已经生成的数字填充到相应的空位置处(一定是可以放得下的，剩余空间>=生成的数字数量)
        var result = [[], [], [], [], [], [], [], []];
        do {
            var slotIdx = NewUtils_1.default.randomIntInclusive(0, 7);
            if (spaceInfo[slotIdx] === 0)
                continue;
            result[slotIdx].push(allNewCoin.shift());
            spaceInfo[slotIdx]--;
        } while (allNewCoin.length > 0);
        return result;
    };
    // 小于15的策略
    GameModule.prototype.produceStrategyFour = function (max, space) {
        console.log('策略1:<15');
        // 场景中最小值
        var min = Math.min(6, this.getMinValue());
        // 总共需要生成的数字数量
        var totalCnt = Math.floor(Math.min(20, space * 0.7));
        if (totalCnt === 0)
            totalCnt = 1;
        var limitMax = Math.min(max - 1, 9);
        // 生成数字的类型数量 min~9
        var typeCnt = totalCnt >= 3 ? 3 : totalCnt;
        // 数字种类
        var types = NewUtils_1.default.randomIntArrFromSection(typeCnt, min, limitMax);
        // 生成全部的随机筹码值
        var allNewCoin = NewUtils_1.default.randomIntArrFromArr(totalCnt, types);
        // 确定当前的剩余空间情况
        var spaceInfo = [];
        for (var i = 0; i < 8; i++) {
            var perSlotSpace = this.getSpaceBySlot(i);
            spaceInfo.push(perSlotSpace);
        }
        // 随机将已经生成的数字填充到相应的空位置处(一定是可以放得下的，剩余空间>=生成的数字数量)
        var result = [[], [], [], [], [], [], [], []];
        do {
            var slotIdx = NewUtils_1.default.randomIntInclusive(0, 7);
            if (spaceInfo[slotIdx] === 0)
                continue;
            result[slotIdx].push(allNewCoin.shift());
            spaceInfo[slotIdx]--;
        } while (allNewCoin.length > 0);
        return result;
    };
    // TODO: 新生成的数据和原有数据进行合成
    GameModule.prototype.mergeProduceData = function (newData) {
        for (var slotIdx = 0; slotIdx < 8; slotIdx++) {
            var newSlotData = NewUtils_1.default.deepClone(newData[slotIdx]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvbWVyZ2UvZGF0YU1vZHVsZS9HYW1lTW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0Q0FBOEM7QUFDOUMscURBQStEO0FBQy9ELDZDQUF3QztBQUN4QywyQ0FBc0M7QUFFdEM7SUFBd0MsOEJBQVU7SUFzQjlDO1FBQUEsWUFDSSxpQkFBTyxTQUNWO1FBdkJELGlCQUFpQjtRQUNWLGNBQVEsR0FBRztZQUNkLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFD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Q0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQzNELElBQU0sV0FBVyxHQUFHLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztvQkFDeEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUM7aUJBQzNDO2FBQ0o7U0FDSjtJQUNMLENBQUM7SUFDTCxpQkFBQztBQUFELENBdFlBLEFBc1lDLENBdFl1QyxvQkFBVSxHQXNZakQ7O0FBQ1ksUUFBQSxVQUFVLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50VHlwZSB9IGZyb20gJy4uL21hbmFnZXIvRGVmaW5lJztcbmltcG9ydCB7IGV2ZW50TWFuYWdlciwgR2FtZUV2ZW50IH0gZnJvbSAnLi4vdXRpbC9FdmVudE1hbmFnZXInO1xuaW1wb3J0IE5ld1V0aWxzIGZyb20gJy4uL3V0aWwvTmV3VXRpbHMnO1xuaW1wb3J0IERhdGFNb2R1bGUgZnJvbSAnLi9EYXRhTW9kdWxlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU1vZHVsZSBleHRlbmRzIERhdGFNb2R1bGUge1xuICAgIC8vIOeUqOaIt+eahOetueeggeanveS9jeaVsOaNriAxfjEwXG4gICAgcHVibGljIHNsb3REYXRhID0gW1xuICAgICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgICAgIFsyLCAyLCAyLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgWzEsIDEsIDIsIDIsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgICBbMiwgMiwgMiwgMywgMywgMCwgMCwgMCwgMCwgMF0sXG4gICAgICAgIFs1LCA1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICBdXG5cbiAgICAvLyDlvZPliY3mraPlnKjpgInkuK3nmoTnrbnnoIHmp73kvY1cbiAgICBjdXJTZWxlY3RTbG90SWR4OiBudW1iZXIgPSAtMTtcbiAgICAvLyDlvZPliY3pgInkuK3nmoTnrbnnoIHkv6Hmga9cbiAgICBjdXJTZWxlY3RDb2luSWR4czogbnVtYmVyW10gPSBbXTtcblxuICAgIC8vIOenu+WKqOmUgVxuICAgIG1vdmVMb2NrOiBib29sZWFuID0gZmFsc2U7XG4gICAgbWVyZ2VMb2NrOiBudW1iZXIgPSAwO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgcGFyc2VEYXRhKGRhdGE6IGFueSk6IHZvaWQge1xuICAgICAgICBzdXBlci5wYXJzZURhdGEoZGF0YSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOmAmui/h+anvWlkIOiOt+WPluesrOS4gOS4quacieaViOeahOetueeggeS/oeaBr1xuICAgICAqIEBwYXJhbSBzbG90SWR4OiDpnIDopoHojrflj5bnrKzkuIDkuKrmnInmlYjnmoTnrbnnoIHkv6Hmga/nmoTmp71pZFxuICAgICAqIEByZXR1cm4gdmFpbGROdW06IOivpeanveS9jeeahOacieaViOaVsOWtl+OAgXZhaWxkSWR4OiDmnInmlYjmlbDlrZfnmoTntKLlvJXjgIF2YWlsZFNQYWNlOiDliankvZnlj6/lrrnnurPnmoTnrbnnoIHnqbrpl7RcbiAgICAgKi9cbiAgICBnZXRGaXJzdFZhaWxkTnVtQnlTbG90SWR4KHNsb3RJZHg6IG51bWJlcik6IHsgdmFpbGROdW06IG51bWJlciwgdmFpbGRJZHg6IG51bWJlciwgdmFpbGRTcGFjZTogbnVtYmVyIH0ge1xuICAgICAgICBjb25zdCBzbG90RGF0YSA9IHRoaXMuc2xvdERhdGFbc2xvdElkeF07XG5cbiAgICAgICAgbGV0IHZhaWxkTnVtOiBudW1iZXIgPSAtMTtcbiAgICAgICAgbGV0IHZhaWxkSWR4OiBudW1iZXIgPSAtMTtcbiAgICAgICAgbGV0IHZhaWxkU3BhY2U6IG51bWJlciA9IDEwO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSA5OyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgaWYgKHNsb3REYXRhW2ldID09PSAwKSBjb250aW51ZTtcblxuICAgICAgICAgICAgdmFpbGROdW0gPSBzbG90RGF0YVtpXTtcbiAgICAgICAgICAgIHZhaWxkSWR4ID0gaTtcbiAgICAgICAgICAgIHZhaWxkU3BhY2UgPSA5IC0gaTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgdmFpbGROdW0sIHZhaWxkSWR4LCB2YWlsZFNwYWNlIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOiOt+WPluW9k+WJjemAieS4reeahOW+heenu+WKqOeahOanveS9jeetueeggeS/oeaBr1xuICAgICAqIEByZXR1cm5zIHNsb3RJZHg6IOW9k+WJjemAieS4reeahOanveS9jee0ouW8leOAgSAgY250OiDlvoXnp7vliqjnmoTnrbnnoIHmlbDph4/jgIEgIG51bTog5b6F56e75Yqo55qE5pWw5a2X57G75Z6LXG4gICAgICovXG4gICAgZ2V0Q3VyU2VsZWN0U2xvdEluZm8oKTogeyBzbG90SWR4OiBudW1iZXIsIGNudDogbnVtYmVyLCBudW06IG51bWJlciB9IHtcbiAgICAgICAgaWYgKHRoaXMuY3VyU2VsZWN0U2xvdElkeCA9PT0gLTEpIHJldHVybiBudWxsO1xuICAgICAgICBjb25zdCBjbnQgPSB0aGlzLmN1clNlbGVjdENvaW5JZHhzLmxlbmd0aDtcbiAgICAgICAgY29uc3QgbnVtID0gdGhpcy5zbG90RGF0YVt0aGlzLmN1clNlbGVjdFNsb3RJZHhdW3RoaXMuY3VyU2VsZWN0Q29pbklkeHNbMF1dO1xuICAgICAgICByZXR1cm4geyBzbG90SWR4OiB0aGlzLmN1clNlbGVjdFNsb3RJZHgsIGNudCwgbnVtIH07XG4gICAgfVxuXG4gICAgLy8g6YeN572u5b2T5YmN562556CB6YCJ5oup54q25oCBXG4gICAgcmVzZXRTZWxlY3RTdGF0dXMoKTogdm9pZCB7XG4gICAgICAgIGdhbWVNb2R1bGUuY3VyU2VsZWN0U2xvdElkeCA9IC0xO1xuICAgICAgICBnYW1lTW9kdWxlLmN1clNlbGVjdENvaW5JZHhzID0gW107XG4gICAgfVxuXG4gICAgLy8g562556CB56e75Yqo5a6M5oiQ77yM5pW055CG56e75Yqo5ZCO55qE5pWw5o2uXG4gICAgdGlkeVNsb3REYXRhKGVkOiB7IHRhclNsb3RJZHg6IG51bWJlciwgbnVtVHlwZTogbnVtYmVyLCBzcmNJZHhBcnI6IG51bWJlcltdLCB0YXJJZHhBcnI6IG51bWJlcltdIH0pIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlZC5zcmNJZHhBcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuc2xvdERhdGFbdGhpcy5jdXJTZWxlY3RTbG90SWR4XVtlZC5zcmNJZHhBcnJbaV1dID0gMDtcbiAgICAgICAgICAgIHRoaXMuc2xvdERhdGFbZWQudGFyU2xvdElkeF1bZWQudGFySWR4QXJyW2ldXSA9IGVkLm51bVR5cGU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDliLfmlrDnrbnnoIHmmL7npLrmg4XlhrVcbiAgICAgICAgZXZlbnRNYW5hZ2VyLmRpc3BhdGNoRXZlbnQobmV3IEdhbWVFdmVudChFdmVudFR5cGUuTU9WRV9FTkQsIGVkKSk7XG5cbiAgICAgICAgLy8g6YeN572u5b2T5YmN6YCJ5Lit54q25oCBXG4gICAgICAgIHRoaXMucmVzZXRTZWxlY3RTdGF0dXMoKTtcblxuICAgICAgICAvLyDmo4DmtYvmmK/lkKblj6/ku6XlkIjmiJBcbiAgICAgICAgZXZlbnRNYW5hZ2VyLmRpc3BhdGNoKEV2ZW50VHlwZS5DSEVDS19NRVJHRSk7XG4gICAgfVxuXG4gICAgLy8g5qOA5rWL5piv5ZCm5pyJ5Y+v5Lul5ZCI5oiQ55qE5qe95L2NXG4gICAgY2hlY2tDYW5NZXJnZSgpOiBudW1iZXJbXSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY2FuID0gdGhpcy5jaGVja0Nhbk1lcmdlQnlTbG90KGkpO1xuICAgICAgICAgICAgaWYgKGNhbikgcmVzdWx0LnB1c2goaSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIC8vIOmAmui/h+anveS9jeadpeajgOa1i+aYr+WQpuWPr+S7pei/m+ihjOWQiOaIkFxuICAgIGNoZWNrQ2FuTWVyZ2VCeVNsb3Qoc2xvdElkOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3Qgc2xvdERhdGEgPSB0aGlzLnNsb3REYXRhW3Nsb3RJZF07XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgaWYgKHNsb3REYXRhW2ldID09PSAwKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBpZiAoaSA9PT0gMCkgY29udGludWU7XG4gICAgICAgICAgICBpZiAoc2xvdERhdGFbaV0gIT09IHNsb3REYXRhW2kgLSAxXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIOiOt+WPluW9k+WJjeacgOWkp+aVsOWtl1xuICAgIGdldE1heFZhbHVlKCk6IG51bWJlciB7XG4gICAgICAgIGxldCBtYXhWYWx1ZSA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zbG90RGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLnNsb3REYXRhW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2xvdERhdGFbaV1bal0gPiBtYXhWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBtYXhWYWx1ZSA9IHRoaXMuc2xvdERhdGFbaV1bal07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWF4VmFsdWU7XG4gICAgfVxuXG4gICAgLy8g6I635Y+W5b2T5YmN5pyA5bCP5pWw5a2XXG4gICAgZ2V0TWluVmFsdWUoKTogbnVtYmVyIHtcbiAgICAgICAgbGV0IG1pblZhbHVlID0gLTE7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zbG90RGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLnNsb3REYXRhW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1pblZhbHVlID09PSAtMSAmJiB0aGlzLnNsb3REYXRhW2ldW2pdICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG1pblZhbHVlID0gdGhpcy5zbG90RGF0YVtpXVtqXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2xvdERhdGFbaV1bal0gPCBtaW5WYWx1ZSAmJiB0aGlzLnNsb3REYXRhW2ldW2pdICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG1pblZhbHVlID0gdGhpcy5zbG90RGF0YVtpXVtqXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtaW5WYWx1ZTtcbiAgICB9XG5cbiAgICBnZXRTcGFjZUJ5U2xvdChpZDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgaWYgKCF0aGlzLnNsb3REYXRhW2lkXSkgcmV0dXJuO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2xvdERhdGFbaWRdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zbG90RGF0YVtpZF1baV0gPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMTAgLSBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgLy8g6I635Y+W5b2T5YmN5Ymp5L2Z56m66Ze0XG4gICAgZ2V0U3BhY2UoKTogbnVtYmVyIHtcbiAgICAgICAgbGV0IHNwYWNlID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcbiAgICAgICAgICAgIHNwYWNlICs9IHRoaXMuZ2V0U3BhY2VCeVNsb3QoaSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNwYWNlO1xuICAgIH1cblxuICAgIC8vIOeUn+aIkOaWsOeahOetueeggeaVsOaNrlxuICAgIHByb2R1Y2VOZXdDb2luRGF0YSgpOiBudW1iZXJbXVtdIHtcbiAgICAgICAgLy8gcmV0dXJuIFtcbiAgICAgICAgLy8gICAgIFsxXSwgWzFdLCBbMV0sIFsxXSwgWzFdLCBbMV0sIFsxXSwgWzFdXG4gICAgICAgIC8vIF1cblxuICAgICAgICBjb25zdCBtYXhWYWx1ZSA9IHRoaXMuZ2V0TWF4VmFsdWUoKTtcbiAgICAgICAgY29uc3Qgc3BhY2UgPSB0aGlzLmdldFNwYWNlKCk7XG5cbiAgICAgICAgaWYgKG1heFZhbHVlID49IDE1KSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ+W9k+WJjeW3suWQiOaIkDE1Jyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3BhY2UgPT09IDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2Fybign5rKh5pyJ5Ymp5L2Z56m66Ze077yM5peg5rOV55Sf5oiQ5paw5pWw5a2XJylcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtYXhWYWx1ZSA8IDUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2R1Y2VTdHJhdGVneU9uZShtYXhWYWx1ZSwgc3BhY2UpO1xuICAgICAgICB9IGVsc2UgaWYgKG1heFZhbHVlIDwgMTApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2R1Y2VTdHJhdGVneVR3byhtYXhWYWx1ZSwgc3BhY2UpO1xuICAgICAgICB9IGVsc2UgaWYgKG1heFZhbHVlIDwgMTQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2R1Y2VTdHJhdGVneVRocmVlKG1heFZhbHVlLCBzcGFjZSk7XG4gICAgICAgIH0gZWxzZSBpZiAobWF4VmFsdWUgPCAxNSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvZHVjZVN0cmF0ZWd5Rm91cihtYXhWYWx1ZSwgc3BhY2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOWwj+S6jjUg562W55WlXG4gICAgICogMeOAgeeUn+aIkOaVsOmHjyBtaW4oc3BhY2UqMzAsOCk7XG4gICAgICogMuOAgeeUn+aIkOexu+WeiyA8PSAzXG4gICAgICogM+OAgeacgOWwj+aVsCA9IOW9k+WJjeWcuuaZr+acgOWwj+aVsC0xXG4gICAgICogXG4gICAgICogQHBhcmFtIG1heDog5b2T5YmN5Zy65pmv5Lit5pyA5aSn55qE562556CB5pWw5YC8XG4gICAgICogQHBhcmFtIHNwYWNlOiDlvZPliY3mgLvnmoTnqbrpl7TmlbBcbiAgICAgKiBAcmV0dXJucyBcbiAgICAgKi9cbiAgICBwcm9kdWNlU3RyYXRlZ3lPbmUobWF4OiBudW1iZXIsIHNwYWNlOiBudW1iZXIpOiBudW1iZXJbXVtdIHtcbiAgICAgICAgY29uc29sZS5sb2coJ+etlueVpTE6PDUnKTtcbiAgICAgICAgLy8g5Zy65pmv5Lit5pyA5bCP5YC8XG4gICAgICAgIGNvbnN0IG1pbiA9IHRoaXMuZ2V0TWluVmFsdWUoKTtcblxuICAgICAgICAvLyDmgLvlhbHpnIDopoHnlJ/miJDnmoTmlbDlrZfmlbDph49cbiAgICAgICAgbGV0IHRvdGFsQ250ID0gTWF0aC5mbG9vcihNYXRoLm1pbigyMCwgc3BhY2UgKiAwLjUpKTtcbiAgICAgICAgaWYgKHRvdGFsQ250ID09PSAwKSB0b3RhbENudCA9IDE7XG5cbiAgICAgICAgLy8g5paw55Sf5oiQ55qE5pWw5a2X57G75Z6L6ZmQ5a6a5Zyo5q+U5b2T5YmN5Zy65pmv5Lit5pyA5aSn55qE5pWw5a2X5bCPMVxuICAgICAgICBjb25zdCBsaW1pdE1heCA9IG1heCAtIDEgPiAwID8gbWF4IC0gMSA6IDE7XG5cbiAgICAgICAgLy8g55Sf5oiQ5pWw5a2X55qE57G75Z6L5pWw6YePIDHjgIEy44CBM+OAgTTjgIE1XG4gICAgICAgIGxldCB0eXBlQ250ID0gdG90YWxDbnQgPj0gNCA/IDQgOiB0b3RhbENudDtcblxuICAgICAgICAvLyDlrp7pmYXlj5bmlbDnsbvlnovljLrpl7TlsI/kuo50eXBlQ25077yM6YKj5LmI57qg5q2jdHlwZUNudOS4uui+g+Wwj+eahOexu+Wei++8jOehruS/neS4jeS8muWHuueOsOWcuuWGheacquWHuueOsOeahOaVsFxuICAgICAgICBpZiAobGltaXRNYXggLSBtaW4gKyAxIDwgdHlwZUNudCkgdHlwZUNudCA9IGxpbWl0TWF4IC0gbWluICsgMTtcblxuICAgICAgICAvLyDmlbDlrZfnp43nsbtcbiAgICAgICAgY29uc3QgdHlwZXMgPSBOZXdVdGlscy5yYW5kb21JbnRBcnJGcm9tU2VjdGlvbih0eXBlQ250LCBtaW4sIGxpbWl0TWF4KTtcblxuICAgICAgICAvLyDnlJ/miJDlhajpg6jnmoTpmo/mnLrnrbnnoIHlgLxcbiAgICAgICAgbGV0IGFsbE5ld0NvaW4gPSBOZXdVdGlscy5yYW5kb21JbnRBcnJGcm9tQXJyKHRvdGFsQ250LCB0eXBlcyk7XG5cbiAgICAgICAgLy8g56Gu5a6a5b2T5YmN55qE5Ymp5L2Z56m66Ze05oOF5Ya1XG4gICAgICAgIGxldCBzcGFjZUluZm8gPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHBlclNsb3RTcGFjZSA9IHRoaXMuZ2V0U3BhY2VCeVNsb3QoaSk7XG4gICAgICAgICAgICBzcGFjZUluZm8ucHVzaChwZXJTbG90U3BhY2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g6ZqP5py65bCG5bey57uP55Sf5oiQ55qE5pWw5a2X5aGr5YWF5Yiw55u45bqU55qE56m65L2N572u5aSEKOS4gOWumuaYr+WPr+S7peaUvuW+l+S4i+eahO+8jOWJqeS9meepuumXtD4955Sf5oiQ55qE5pWw5a2X5pWw6YePKVxuICAgICAgICBjb25zdCByZXN1bHQgPSBbW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdXTtcbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgY29uc3Qgc2xvdElkeCA9IE5ld1V0aWxzLnJhbmRvbUludEluY2x1c2l2ZSgwLCA3KTtcbiAgICAgICAgICAgIGlmIChzcGFjZUluZm9bc2xvdElkeF0gPT09IDApIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICByZXN1bHRbc2xvdElkeF0ucHVzaChhbGxOZXdDb2luLnNoaWZ0KCkpO1xuICAgICAgICAgICAgc3BhY2VJbmZvW3Nsb3RJZHhdLS07XG4gICAgICAgIH0gd2hpbGUgKGFsbE5ld0NvaW4ubGVuZ3RoID4gMClcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIC8vIOWwj+S6jjEw55qE562W55WlXG4gICAgcHJvZHVjZVN0cmF0ZWd5VHdvKG1heDogbnVtYmVyLCBzcGFjZTogbnVtYmVyKTogbnVtYmVyW11bXSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCfnrZbnlaUyOjwxMCcpO1xuXG4gICAgICAgIC8vIOWcuuaZr+S4reacgOWwj+WAvFxuICAgICAgICBsZXQgbWluID0gTWF0aC5taW4oMywgdGhpcy5nZXRNaW5WYWx1ZSgpKTtcblxuICAgICAgICAvLyDmgLvlhbHpnIDopoHnlJ/miJDnmoTmlbDlrZfmlbDph49cbiAgICAgICAgbGV0IHRvdGFsQ250ID0gTWF0aC5mbG9vcihNYXRoLm1pbigyMCwgc3BhY2UgKiAwLjYpKTtcbiAgICAgICAgaWYgKHRvdGFsQ250ID09PSAwKSB0b3RhbENudCA9IDE7XG5cbiAgICAgICAgY29uc3QgbGltaXRNYXggPSBNYXRoLm1pbihtYXgtMSwgNyk7XG5cbiAgICAgICAgLy8g55Sf5oiQ5pWw5a2X55qE57G75Z6L5pWw6YePIG1pbn43XG4gICAgICAgIGxldCB0eXBlQ250ID0gdG90YWxDbnQgPj0gMyA/IDMgOiB0b3RhbENudDtcblxuICAgICAgICAvLyDmlbDlrZfnp43nsbtcbiAgICAgICAgY29uc3QgdHlwZXMgPSBOZXdVdGlscy5yYW5kb21JbnRBcnJGcm9tU2VjdGlvbih0eXBlQ250LCBtaW4sIGxpbWl0TWF4KTtcblxuICAgICAgICAvLyDnlJ/miJDlhajpg6jnmoTpmo/mnLrnrbnnoIHlgLxcbiAgICAgICAgbGV0IGFsbE5ld0NvaW4gPSBOZXdVdGlscy5yYW5kb21JbnRBcnJGcm9tQXJyKHRvdGFsQ250LCB0eXBlcyk7XG5cbiAgICAgICAgLy8g56Gu5a6a5b2T5YmN55qE5Ymp5L2Z56m66Ze05oOF5Ya1XG4gICAgICAgIGxldCBzcGFjZUluZm8gPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHBlclNsb3RTcGFjZSA9IHRoaXMuZ2V0U3BhY2VCeVNsb3QoaSk7XG4gICAgICAgICAgICBzcGFjZUluZm8ucHVzaChwZXJTbG90U3BhY2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g6ZqP5py65bCG5bey57uP55Sf5oiQ55qE5pWw5a2X5aGr5YWF5Yiw55u45bqU55qE56m65L2N572u5aSEKOS4gOWumuaYr+WPr+S7peaUvuW+l+S4i+eahO+8jOWJqeS9meepuumXtD4955Sf5oiQ55qE5pWw5a2X5pWw6YePKVxuICAgICAgICBjb25zdCByZXN1bHQgPSBbW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdXTtcbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgY29uc3Qgc2xvdElkeCA9IE5ld1V0aWxzLnJhbmRvbUludEluY2x1c2l2ZSgwLCA3KTtcbiAgICAgICAgICAgIGlmIChzcGFjZUluZm9bc2xvdElkeF0gPT09IDApIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICByZXN1bHRbc2xvdElkeF0ucHVzaChhbGxOZXdDb2luLnNoaWZ0KCkpO1xuICAgICAgICAgICAgc3BhY2VJbmZvW3Nsb3RJZHhdLS07XG4gICAgICAgIH0gd2hpbGUgKGFsbE5ld0NvaW4ubGVuZ3RoID4gMClcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuXG4gICAgfVxuXG4gICAgLy8g5bCP5LqOMTTnmoTnrZbnlaVcbiAgICBwcm9kdWNlU3RyYXRlZ3lUaHJlZShtYXg6IG51bWJlciwgc3BhY2U6IG51bWJlcik6IG51bWJlcltdW10ge1xuICAgICAgICBjb25zb2xlLmxvZygn562W55WlMzo8MTQnKTtcblxuICAgICAgICAvLyDlnLrmma/kuK3mnIDlsI/lgLxcbiAgICAgICAgbGV0IG1pbiA9IE1hdGgubWluKDgsIHRoaXMuZ2V0TWluVmFsdWUoKSk7XG5cbiAgICAgICAgLy8g5oC75YWx6ZyA6KaB55Sf5oiQ55qE5pWw5a2X5pWw6YePXG4gICAgICAgIGxldCB0b3RhbENudCA9IE1hdGguZmxvb3IoTWF0aC5taW4oMjAsIHNwYWNlICogMC42KSk7XG4gICAgICAgIGlmICh0b3RhbENudCA9PT0gMCkgdG90YWxDbnQgPSAxO1xuXG4gICAgICAgIGNvbnN0IGxpbWl0TWF4ID0gTWF0aC5taW4obWF4LTEsIDEwKTtcblxuICAgICAgICAvLyDnlJ/miJDmlbDlrZfnmoTnsbvlnovmlbDph48gbWlufjEwXG4gICAgICAgIGxldCB0eXBlQ250ID0gdG90YWxDbnQgPj0gMyA/IDMgOiB0b3RhbENudDtcblxuICAgICAgICAvLyDmlbDlrZfnp43nsbtcbiAgICAgICAgY29uc3QgdHlwZXMgPSBOZXdVdGlscy5yYW5kb21JbnRBcnJGcm9tU2VjdGlvbih0eXBlQ250LCBtaW4sIGxpbWl0TWF4KTtcblxuICAgICAgICAvLyDnlJ/miJDlhajpg6jnmoTpmo/mnLrnrbnnoIHlgLxcbiAgICAgICAgbGV0IGFsbE5ld0NvaW4gPSBOZXdVdGlscy5yYW5kb21JbnRBcnJGcm9tQXJyKHRvdGFsQ250LCB0eXBlcyk7XG5cbiAgICAgICAgLy8g56Gu5a6a5b2T5YmN55qE5Ymp5L2Z56m66Ze05oOF5Ya1XG4gICAgICAgIGxldCBzcGFjZUluZm8gPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHBlclNsb3RTcGFjZSA9IHRoaXMuZ2V0U3BhY2VCeVNsb3QoaSk7XG4gICAgICAgICAgICBzcGFjZUluZm8ucHVzaChwZXJTbG90U3BhY2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g6ZqP5py65bCG5bey57uP55Sf5oiQ55qE5pWw5a2X5aGr5YWF5Yiw55u45bqU55qE56m65L2N572u5aSEKOS4gOWumuaYr+WPr+S7peaUvuW+l+S4i+eahO+8jOWJqeS9meepuumXtD4955Sf5oiQ55qE5pWw5a2X5pWw6YePKVxuICAgICAgICBjb25zdCByZXN1bHQgPSBbW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdXTtcbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgY29uc3Qgc2xvdElkeCA9IE5ld1V0aWxzLnJhbmRvbUludEluY2x1c2l2ZSgwLCA3KTtcbiAgICAgICAgICAgIGlmIChzcGFjZUluZm9bc2xvdElkeF0gPT09IDApIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICByZXN1bHRbc2xvdElkeF0ucHVzaChhbGxOZXdDb2luLnNoaWZ0KCkpO1xuICAgICAgICAgICAgc3BhY2VJbmZvW3Nsb3RJZHhdLS07XG4gICAgICAgIH0gd2hpbGUgKGFsbE5ld0NvaW4ubGVuZ3RoID4gMClcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuXG4gICAgfVxuXG4gICAgLy8g5bCP5LqOMTXnmoTnrZbnlaVcbiAgICBwcm9kdWNlU3RyYXRlZ3lGb3VyKG1heDogbnVtYmVyLCBzcGFjZTogbnVtYmVyKTogbnVtYmVyW11bXSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCfnrZbnlaUxOjwxNScpO1xuXG4gICAgICAgIC8vIOWcuuaZr+S4reacgOWwj+WAvFxuICAgICAgICBsZXQgbWluID0gTWF0aC5taW4oNiwgdGhpcy5nZXRNaW5WYWx1ZSgpKTtcblxuICAgICAgICAvLyDmgLvlhbHpnIDopoHnlJ/miJDnmoTmlbDlrZfmlbDph49cbiAgICAgICAgbGV0IHRvdGFsQ250ID0gTWF0aC5mbG9vcihNYXRoLm1pbigyMCwgc3BhY2UgKiAwLjcpKTtcbiAgICAgICAgaWYgKHRvdGFsQ250ID09PSAwKSB0b3RhbENudCA9IDE7XG5cbiAgICAgICAgY29uc3QgbGltaXRNYXggPSBNYXRoLm1pbihtYXgtMSwgOSk7XG5cbiAgICAgICAgLy8g55Sf5oiQ5pWw5a2X55qE57G75Z6L5pWw6YePIG1pbn45XG4gICAgICAgIGxldCB0eXBlQ250ID0gdG90YWxDbnQgPj0gMyA/IDMgOiB0b3RhbENudDtcblxuICAgICAgICAvLyDmlbDlrZfnp43nsbtcbiAgICAgICAgY29uc3QgdHlwZXMgPSBOZXdVdGlscy5yYW5kb21JbnRBcnJGcm9tU2VjdGlvbih0eXBlQ250LCBtaW4sIGxpbWl0TWF4KTtcblxuICAgICAgICAvLyDnlJ/miJDlhajpg6jnmoTpmo/mnLrnrbnnoIHlgLxcbiAgICAgICAgbGV0IGFsbE5ld0NvaW4gPSBOZXdVdGlscy5yYW5kb21JbnRBcnJGcm9tQXJyKHRvdGFsQ250LCB0eXBlcyk7XG5cbiAgICAgICAgLy8g56Gu5a6a5b2T5YmN55qE5Ymp5L2Z56m66Ze05oOF5Ya1XG4gICAgICAgIGxldCBzcGFjZUluZm8gPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHBlclNsb3RTcGFjZSA9IHRoaXMuZ2V0U3BhY2VCeVNsb3QoaSk7XG4gICAgICAgICAgICBzcGFjZUluZm8ucHVzaChwZXJTbG90U3BhY2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g6ZqP5py65bCG5bey57uP55Sf5oiQ55qE5pWw5a2X5aGr5YWF5Yiw55u45bqU55qE56m65L2N572u5aSEKOS4gOWumuaYr+WPr+S7peaUvuW+l+S4i+eahO+8jOWJqeS9meepuumXtD4955Sf5oiQ55qE5pWw5a2X5pWw6YePKVxuICAgICAgICBjb25zdCByZXN1bHQgPSBbW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdXTtcbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgY29uc3Qgc2xvdElkeCA9IE5ld1V0aWxzLnJhbmRvbUludEluY2x1c2l2ZSgwLCA3KTtcbiAgICAgICAgICAgIGlmIChzcGFjZUluZm9bc2xvdElkeF0gPT09IDApIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICByZXN1bHRbc2xvdElkeF0ucHVzaChhbGxOZXdDb2luLnNoaWZ0KCkpO1xuICAgICAgICAgICAgc3BhY2VJbmZvW3Nsb3RJZHhdLS07XG4gICAgICAgIH0gd2hpbGUgKGFsbE5ld0NvaW4ubGVuZ3RoID4gMClcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIC8vIFRPRE86IOaWsOeUn+aIkOeahOaVsOaNruWSjOWOn+acieaVsOaNrui/m+ihjOWQiOaIkFxuICAgIG1lcmdlUHJvZHVjZURhdGEobmV3RGF0YTogbnVtYmVyW11bXSk6IHZvaWQge1xuICAgICAgICBmb3IgKGxldCBzbG90SWR4ID0gMDsgc2xvdElkeCA8IDg7IHNsb3RJZHgrKykge1xuICAgICAgICAgICAgY29uc3QgbmV3U2xvdERhdGEgPSBOZXdVdGlscy5kZWVwQ2xvbmUobmV3RGF0YVtzbG90SWR4XSk7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zbG90RGF0YVtzbG90SWR4XVtqXSA9PT0gMCAmJiBuZXdTbG90RGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0NvaW5EYXRhID0gbmV3U2xvdERhdGEuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zbG90RGF0YVtzbG90SWR4XVtqXSA9IG5ld0NvaW5EYXRhO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBjb25zdCBnYW1lTW9kdWxlID0gbmV3IEdhbWVNb2R1bGUoKTtcbiJdfQ==