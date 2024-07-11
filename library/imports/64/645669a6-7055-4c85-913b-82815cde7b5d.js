"use strict";
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