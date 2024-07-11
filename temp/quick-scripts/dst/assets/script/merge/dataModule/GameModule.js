
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
        var types = Utils_1.default.randomIntArrFromSection(typeCnt, min, limitMax);
        // 生成全部的随机筹码值
        var allNewCoin = Utils_1.default.randomIntArrFromArr(totalCnt, types);
        // 确定当前的剩余空间情况
        var spaceInfo = [];
        for (var i = 0; i < 8; i++) {
            var perSlotSpace = this.getSpaceBySlot(i);
            spaceInfo.push(perSlotSpace);
        }
        // 随机将已经生成的数字填充到相应的空位置处(一定是可以放得下的，剩余空间>=生成的数字数量)
        var result = [[], [], [], [], [], [], [], []];
        do {
            var slotIdx = Utils_1.default.randomIntInclusive(0, 7);
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
        var types = Utils_1.default.randomIntArrFromSection(typeCnt, min, limitMax);
        // 生成全部的随机筹码值
        var allNewCoin = Utils_1.default.randomIntArrFromArr(totalCnt, types);
        // 确定当前的剩余空间情况
        var spaceInfo = [];
        for (var i = 0; i < 8; i++) {
            var perSlotSpace = this.getSpaceBySlot(i);
            spaceInfo.push(perSlotSpace);
        }
        // 随机将已经生成的数字填充到相应的空位置处(一定是可以放得下的，剩余空间>=生成的数字数量)
        var result = [[], [], [], [], [], [], [], []];
        do {
            var slotIdx = Utils_1.default.randomIntInclusive(0, 7);
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
        var types = Utils_1.default.randomIntArrFromSection(typeCnt, min, limitMax);
        // 生成全部的随机筹码值
        var allNewCoin = Utils_1.default.randomIntArrFromArr(totalCnt, types);
        // 确定当前的剩余空间情况
        var spaceInfo = [];
        for (var i = 0; i < 8; i++) {
            var perSlotSpace = this.getSpaceBySlot(i);
            spaceInfo.push(perSlotSpace);
        }
        // 随机将已经生成的数字填充到相应的空位置处(一定是可以放得下的，剩余空间>=生成的数字数量)
        var result = [[], [], [], [], [], [], [], []];
        do {
            var slotIdx = Utils_1.default.randomIntInclusive(0, 7);
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
        var types = Utils_1.default.randomIntArrFromSection(typeCnt, min, limitMax);
        // 生成全部的随机筹码值
        var allNewCoin = Utils_1.default.randomIntArrFromArr(totalCnt, types);
        // 确定当前的剩余空间情况
        var spaceInfo = [];
        for (var i = 0; i < 8; i++) {
            var perSlotSpace = this.getSpaceBySlot(i);
            spaceInfo.push(perSlotSpace);
        }
        // 随机将已经生成的数字填充到相应的空位置处(一定是可以放得下的，剩余空间>=生成的数字数量)
        var result = [[], [], [], [], [], [], [], []];
        do {
            var slotIdx = Utils_1.default.randomIntInclusive(0, 7);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvbWVyZ2UvZGF0YU1vZHVsZS9HYW1lTW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0Q0FBOEM7QUFDOUMscURBQStEO0FBQy9ELHVDQUFrQztBQUNsQywyQ0FBc0M7QUFFdEM7SUFBd0MsOEJBQVU7SUFzQjlDO1FBQUEsWUFDSSxpQkFBTyxTQUNWO1FBdkJELGlCQUFpQjtRQUNWLGNBQVEsR0FBRztZQUNkLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFD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QyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFDM0QsSUFBTSxXQUFXLEdBQUcsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUN4QyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQztpQkFDM0M7YUFDSjtTQUNKO0lBQ0wsQ0FBQztJQUNMLGlCQUFDO0FBQUQsQ0F0WUEsQUFzWUMsQ0F0WXVDLG9CQUFVLEdBc1lqRDs7QUFDWSxRQUFBLFVBQVUsR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRUeXBlIH0gZnJvbSAnLi4vbWFuYWdlci9EZWZpbmUnO1xuaW1wb3J0IHsgZXZlbnRNYW5hZ2VyLCBHYW1lRXZlbnQgfSBmcm9tICcuLi91dGlsL0V2ZW50TWFuYWdlcic7XG5pbXBvcnQgVXRpbHMgZnJvbSAnLi4vdXRpbC9VdGlscyc7XG5pbXBvcnQgRGF0YU1vZHVsZSBmcm9tICcuL0RhdGFNb2R1bGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lTW9kdWxlIGV4dGVuZHMgRGF0YU1vZHVsZSB7XG4gICAgLy8g55So5oi355qE562556CB5qe95L2N5pWw5o2uIDF+MTBcbiAgICBwdWJsaWMgc2xvdERhdGEgPSBbXG4gICAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgWzIsIDIsIDIsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgICBbMSwgMSwgMiwgMiwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgICAgIFsyLCAyLCAyLCAzLCAzLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgWzUsIDUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgIF1cblxuICAgIC8vIOW9k+WJjeato+WcqOmAieS4reeahOetueeggeanveS9jVxuICAgIGN1clNlbGVjdFNsb3RJZHg6IG51bWJlciA9IC0xO1xuICAgIC8vIOW9k+WJjemAieS4reeahOetueeggeS/oeaBr1xuICAgIGN1clNlbGVjdENvaW5JZHhzOiBudW1iZXJbXSA9IFtdO1xuXG4gICAgLy8g56e75Yqo6ZSBXG4gICAgbW92ZUxvY2s6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBtZXJnZUxvY2s6IG51bWJlciA9IDA7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBwYXJzZURhdGEoZGF0YTogYW55KTogdm9pZCB7XG4gICAgICAgIHN1cGVyLnBhcnNlRGF0YShkYXRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g6YCa6L+H5qe9aWQg6I635Y+W56ys5LiA5Liq5pyJ5pWI55qE562556CB5L+h5oGvXG4gICAgICogQHBhcmFtIHNsb3RJZHg6IOmcgOimgeiOt+WPluesrOS4gOS4quacieaViOeahOetueeggeS/oeaBr+eahOanvWlkXG4gICAgICogQHJldHVybiB2YWlsZE51bTog6K+l5qe95L2N55qE5pyJ5pWI5pWw5a2X44CBdmFpbGRJZHg6IOacieaViOaVsOWtl+eahOe0ouW8leOAgXZhaWxkU1BhY2U6IOWJqeS9meWPr+Wuuee6s+eahOetueeggeepuumXtFxuICAgICAqL1xuICAgIGdldEZpcnN0VmFpbGROdW1CeVNsb3RJZHgoc2xvdElkeDogbnVtYmVyKTogeyB2YWlsZE51bTogbnVtYmVyLCB2YWlsZElkeDogbnVtYmVyLCB2YWlsZFNwYWNlOiBudW1iZXIgfSB7XG4gICAgICAgIGNvbnN0IHNsb3REYXRhID0gdGhpcy5zbG90RGF0YVtzbG90SWR4XTtcblxuICAgICAgICBsZXQgdmFpbGROdW06IG51bWJlciA9IC0xO1xuICAgICAgICBsZXQgdmFpbGRJZHg6IG51bWJlciA9IC0xO1xuICAgICAgICBsZXQgdmFpbGRTcGFjZTogbnVtYmVyID0gMTA7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDk7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBpZiAoc2xvdERhdGFbaV0gPT09IDApIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICB2YWlsZE51bSA9IHNsb3REYXRhW2ldO1xuICAgICAgICAgICAgdmFpbGRJZHggPSBpO1xuICAgICAgICAgICAgdmFpbGRTcGFjZSA9IDkgLSBpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4geyB2YWlsZE51bSwgdmFpbGRJZHgsIHZhaWxkU3BhY2UgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g6I635Y+W5b2T5YmN6YCJ5Lit55qE5b6F56e75Yqo55qE5qe95L2N562556CB5L+h5oGvXG4gICAgICogQHJldHVybnMgc2xvdElkeDog5b2T5YmN6YCJ5Lit55qE5qe95L2N57Si5byV44CBICBjbnQ6IOW+heenu+WKqOeahOetueeggeaVsOmHj+OAgSAgbnVtOiDlvoXnp7vliqjnmoTmlbDlrZfnsbvlnotcbiAgICAgKi9cbiAgICBnZXRDdXJTZWxlY3RTbG90SW5mbygpOiB7IHNsb3RJZHg6IG51bWJlciwgY250OiBudW1iZXIsIG51bTogbnVtYmVyIH0ge1xuICAgICAgICBpZiAodGhpcy5jdXJTZWxlY3RTbG90SWR4ID09PSAtMSkgcmV0dXJuIG51bGw7XG4gICAgICAgIGNvbnN0IGNudCA9IHRoaXMuY3VyU2VsZWN0Q29pbklkeHMubGVuZ3RoO1xuICAgICAgICBjb25zdCBudW0gPSB0aGlzLnNsb3REYXRhW3RoaXMuY3VyU2VsZWN0U2xvdElkeF1bdGhpcy5jdXJTZWxlY3RDb2luSWR4c1swXV07XG4gICAgICAgIHJldHVybiB7IHNsb3RJZHg6IHRoaXMuY3VyU2VsZWN0U2xvdElkeCwgY250LCBudW0gfTtcbiAgICB9XG5cbiAgICAvLyDph43nva7lvZPliY3nrbnnoIHpgInmi6nnirbmgIFcbiAgICByZXNldFNlbGVjdFN0YXR1cygpOiB2b2lkIHtcbiAgICAgICAgZ2FtZU1vZHVsZS5jdXJTZWxlY3RTbG90SWR4ID0gLTE7XG4gICAgICAgIGdhbWVNb2R1bGUuY3VyU2VsZWN0Q29pbklkeHMgPSBbXTtcbiAgICB9XG5cbiAgICAvLyDnrbnnoIHnp7vliqjlrozmiJDvvIzmlbTnkIbnp7vliqjlkI7nmoTmlbDmja5cbiAgICB0aWR5U2xvdERhdGEoZWQ6IHsgdGFyU2xvdElkeDogbnVtYmVyLCBudW1UeXBlOiBudW1iZXIsIHNyY0lkeEFycjogbnVtYmVyW10sIHRhcklkeEFycjogbnVtYmVyW10gfSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVkLnNyY0lkeEFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5zbG90RGF0YVt0aGlzLmN1clNlbGVjdFNsb3RJZHhdW2VkLnNyY0lkeEFycltpXV0gPSAwO1xuICAgICAgICAgICAgdGhpcy5zbG90RGF0YVtlZC50YXJTbG90SWR4XVtlZC50YXJJZHhBcnJbaV1dID0gZWQubnVtVHlwZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOWIt+aWsOetueeggeaYvuekuuaDheWGtVxuICAgICAgICBldmVudE1hbmFnZXIuZGlzcGF0Y2hFdmVudChuZXcgR2FtZUV2ZW50KEV2ZW50VHlwZS5NT1ZFX0VORCwgZWQpKTtcblxuICAgICAgICAvLyDph43nva7lvZPliY3pgInkuK3nirbmgIFcbiAgICAgICAgdGhpcy5yZXNldFNlbGVjdFN0YXR1cygpO1xuXG4gICAgICAgIC8vIOajgOa1i+aYr+WQpuWPr+S7peWQiOaIkFxuICAgICAgICBldmVudE1hbmFnZXIuZGlzcGF0Y2goRXZlbnRUeXBlLkNIRUNLX01FUkdFKTtcbiAgICB9XG5cbiAgICAvLyDmo4DmtYvmmK/lkKbmnInlj6/ku6XlkIjmiJDnmoTmp73kvY1cbiAgICBjaGVja0Nhbk1lcmdlKCk6IG51bWJlcltdIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBjYW4gPSB0aGlzLmNoZWNrQ2FuTWVyZ2VCeVNsb3QoaSk7XG4gICAgICAgICAgICBpZiAoY2FuKSByZXN1bHQucHVzaChpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgLy8g6YCa6L+H5qe95L2N5p2l5qOA5rWL5piv5ZCm5Y+v5Lul6L+b6KGM5ZCI5oiQXG4gICAgY2hlY2tDYW5NZXJnZUJ5U2xvdChzbG90SWQ6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBzbG90RGF0YSA9IHRoaXMuc2xvdERhdGFbc2xvdElkXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoc2xvdERhdGFbaV0gPT09IDApIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGlmIChpID09PSAwKSBjb250aW51ZTtcbiAgICAgICAgICAgIGlmIChzbG90RGF0YVtpXSAhPT0gc2xvdERhdGFbaSAtIDFdKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8g6I635Y+W5b2T5YmN5pyA5aSn5pWw5a2XXG4gICAgZ2V0TWF4VmFsdWUoKTogbnVtYmVyIHtcbiAgICAgICAgbGV0IG1heFZhbHVlID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNsb3REYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuc2xvdERhdGFbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zbG90RGF0YVtpXVtqXSA+IG1heFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIG1heFZhbHVlID0gdGhpcy5zbG90RGF0YVtpXVtqXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtYXhWYWx1ZTtcbiAgICB9XG5cbiAgICAvLyDojrflj5blvZPliY3mnIDlsI/mlbDlrZdcbiAgICBnZXRNaW5WYWx1ZSgpOiBudW1iZXIge1xuICAgICAgICBsZXQgbWluVmFsdWUgPSAtMTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNsb3REYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuc2xvdERhdGFbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAobWluVmFsdWUgPT09IC0xICYmIHRoaXMuc2xvdERhdGFbaV1bal0gIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbWluVmFsdWUgPSB0aGlzLnNsb3REYXRhW2ldW2pdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zbG90RGF0YVtpXVtqXSA8IG1pblZhbHVlICYmIHRoaXMuc2xvdERhdGFbaV1bal0gIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbWluVmFsdWUgPSB0aGlzLnNsb3REYXRhW2ldW2pdO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1pblZhbHVlO1xuICAgIH1cblxuICAgIGdldFNwYWNlQnlTbG90KGlkOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICBpZiAoIXRoaXMuc2xvdERhdGFbaWRdKSByZXR1cm47XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zbG90RGF0YVtpZF0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNsb3REYXRhW2lkXVtpXSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAxMCAtIGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICAvLyDojrflj5blvZPliY3liankvZnnqbrpl7RcbiAgICBnZXRTcGFjZSgpOiBudW1iZXIge1xuICAgICAgICBsZXQgc3BhY2UgPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xuICAgICAgICAgICAgc3BhY2UgKz0gdGhpcy5nZXRTcGFjZUJ5U2xvdChpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3BhY2U7XG4gICAgfVxuXG4gICAgLy8g55Sf5oiQ5paw55qE562556CB5pWw5o2uXG4gICAgcHJvZHVjZU5ld0NvaW5EYXRhKCk6IG51bWJlcltdW10ge1xuICAgICAgICAvLyByZXR1cm4gW1xuICAgICAgICAvLyAgICAgWzFdLCBbMV0sIFsxXSwgWzFdLCBbMV0sIFsxXSwgWzFdLCBbMV1cbiAgICAgICAgLy8gXVxuXG4gICAgICAgIGNvbnN0IG1heFZhbHVlID0gdGhpcy5nZXRNYXhWYWx1ZSgpO1xuICAgICAgICBjb25zdCBzcGFjZSA9IHRoaXMuZ2V0U3BhY2UoKTtcblxuICAgICAgICBpZiAobWF4VmFsdWUgPj0gMTUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2Fybign5b2T5YmN5bey5ZCI5oiQMTUnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzcGFjZSA9PT0gMCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCfmsqHmnInliankvZnnqbrpl7TvvIzml6Dms5XnlJ/miJDmlrDmlbDlrZcnKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1heFZhbHVlIDwgNSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvZHVjZVN0cmF0ZWd5T25lKG1heFZhbHVlLCBzcGFjZSk7XG4gICAgICAgIH0gZWxzZSBpZiAobWF4VmFsdWUgPCAxMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvZHVjZVN0cmF0ZWd5VHdvKG1heFZhbHVlLCBzcGFjZSk7XG4gICAgICAgIH0gZWxzZSBpZiAobWF4VmFsdWUgPCAxNCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvZHVjZVN0cmF0ZWd5VGhyZWUobWF4VmFsdWUsIHNwYWNlKTtcbiAgICAgICAgfSBlbHNlIGlmIChtYXhWYWx1ZSA8IDE1KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9kdWNlU3RyYXRlZ3lGb3VyKG1heFZhbHVlLCBzcGFjZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5bCP5LqONSDnrZbnlaVcbiAgICAgKiAx44CB55Sf5oiQ5pWw6YePIG1pbihzcGFjZSozMCw4KTtcbiAgICAgKiAy44CB55Sf5oiQ57G75Z6LIDw9IDNcbiAgICAgKiAz44CB5pyA5bCP5pWwID0g5b2T5YmN5Zy65pmv5pyA5bCP5pWwLTFcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gbWF4OiDlvZPliY3lnLrmma/kuK3mnIDlpKfnmoTnrbnnoIHmlbDlgLxcbiAgICAgKiBAcGFyYW0gc3BhY2U6IOW9k+WJjeaAu+eahOepuumXtOaVsFxuICAgICAqIEByZXR1cm5zIFxuICAgICAqL1xuICAgIHByb2R1Y2VTdHJhdGVneU9uZShtYXg6IG51bWJlciwgc3BhY2U6IG51bWJlcik6IG51bWJlcltdW10ge1xuICAgICAgICBjb25zb2xlLmxvZygn562W55WlMTo8NScpO1xuICAgICAgICAvLyDlnLrmma/kuK3mnIDlsI/lgLxcbiAgICAgICAgY29uc3QgbWluID0gdGhpcy5nZXRNaW5WYWx1ZSgpO1xuXG4gICAgICAgIC8vIOaAu+WFsemcgOimgeeUn+aIkOeahOaVsOWtl+aVsOmHj1xuICAgICAgICBsZXQgdG90YWxDbnQgPSBNYXRoLmZsb29yKE1hdGgubWluKDIwLCBzcGFjZSAqIDAuNSkpO1xuICAgICAgICBpZiAodG90YWxDbnQgPT09IDApIHRvdGFsQ250ID0gMTtcblxuICAgICAgICAvLyDmlrDnlJ/miJDnmoTmlbDlrZfnsbvlnovpmZDlrprlnKjmr5TlvZPliY3lnLrmma/kuK3mnIDlpKfnmoTmlbDlrZflsI8xXG4gICAgICAgIGNvbnN0IGxpbWl0TWF4ID0gbWF4IC0gMSA+IDAgPyBtYXggLSAxIDogMTtcblxuICAgICAgICAvLyDnlJ/miJDmlbDlrZfnmoTnsbvlnovmlbDph48gMeOAgTLjgIEz44CBNOOAgTVcbiAgICAgICAgbGV0IHR5cGVDbnQgPSB0b3RhbENudCA+PSA0ID8gNCA6IHRvdGFsQ250O1xuXG4gICAgICAgIC8vIOWunumZheWPluaVsOexu+Wei+WMuumXtOWwj+S6jnR5cGVDbnTvvIzpgqPkuYjnuqDmraN0eXBlQ2505Li66L6D5bCP55qE57G75Z6L77yM56Gu5L+d5LiN5Lya5Ye6546w5Zy65YaF5pyq5Ye6546w55qE5pWwXG4gICAgICAgIGlmIChsaW1pdE1heCAtIG1pbiArIDEgPCB0eXBlQ250KSB0eXBlQ250ID0gbGltaXRNYXggLSBtaW4gKyAxO1xuXG4gICAgICAgIC8vIOaVsOWtl+enjeexu1xuICAgICAgICBjb25zdCB0eXBlcyA9IFV0aWxzLnJhbmRvbUludEFyckZyb21TZWN0aW9uKHR5cGVDbnQsIG1pbiwgbGltaXRNYXgpO1xuXG4gICAgICAgIC8vIOeUn+aIkOWFqOmDqOeahOmaj+acuuetueeggeWAvFxuICAgICAgICBsZXQgYWxsTmV3Q29pbiA9IFV0aWxzLnJhbmRvbUludEFyckZyb21BcnIodG90YWxDbnQsIHR5cGVzKTtcblxuICAgICAgICAvLyDnoa7lrprlvZPliY3nmoTliankvZnnqbrpl7Tmg4XlhrVcbiAgICAgICAgbGV0IHNwYWNlSW5mbyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgcGVyU2xvdFNwYWNlID0gdGhpcy5nZXRTcGFjZUJ5U2xvdChpKTtcbiAgICAgICAgICAgIHNwYWNlSW5mby5wdXNoKHBlclNsb3RTcGFjZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDpmo/mnLrlsIblt7Lnu4/nlJ/miJDnmoTmlbDlrZfloavlhYXliLDnm7jlupTnmoTnqbrkvY3nva7lpIQo5LiA5a6a5piv5Y+v5Lul5pS+5b6X5LiL55qE77yM5Ymp5L2Z56m66Ze0Pj3nlJ/miJDnmoTmlbDlrZfmlbDph48pXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW11dO1xuICAgICAgICBkbyB7XG4gICAgICAgICAgICBjb25zdCBzbG90SWR4ID0gVXRpbHMucmFuZG9tSW50SW5jbHVzaXZlKDAsIDcpO1xuICAgICAgICAgICAgaWYgKHNwYWNlSW5mb1tzbG90SWR4XSA9PT0gMCkgY29udGludWU7XG5cbiAgICAgICAgICAgIHJlc3VsdFtzbG90SWR4XS5wdXNoKGFsbE5ld0NvaW4uc2hpZnQoKSk7XG4gICAgICAgICAgICBzcGFjZUluZm9bc2xvdElkeF0tLTtcbiAgICAgICAgfSB3aGlsZSAoYWxsTmV3Q29pbi5sZW5ndGggPiAwKVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgLy8g5bCP5LqOMTDnmoTnrZbnlaVcbiAgICBwcm9kdWNlU3RyYXRlZ3lUd28obWF4OiBudW1iZXIsIHNwYWNlOiBudW1iZXIpOiBudW1iZXJbXVtdIHtcbiAgICAgICAgY29uc29sZS5sb2coJ+etlueVpTI6PDEwJyk7XG5cbiAgICAgICAgLy8g5Zy65pmv5Lit5pyA5bCP5YC8XG4gICAgICAgIGxldCBtaW4gPSBNYXRoLm1pbigzLCB0aGlzLmdldE1pblZhbHVlKCkpO1xuXG4gICAgICAgIC8vIOaAu+WFsemcgOimgeeUn+aIkOeahOaVsOWtl+aVsOmHj1xuICAgICAgICBsZXQgdG90YWxDbnQgPSBNYXRoLmZsb29yKE1hdGgubWluKDIwLCBzcGFjZSAqIDAuNikpO1xuICAgICAgICBpZiAodG90YWxDbnQgPT09IDApIHRvdGFsQ250ID0gMTtcblxuICAgICAgICBjb25zdCBsaW1pdE1heCA9IE1hdGgubWluKG1heC0xLCA3KTtcblxuICAgICAgICAvLyDnlJ/miJDmlbDlrZfnmoTnsbvlnovmlbDph48gbWlufjdcbiAgICAgICAgbGV0IHR5cGVDbnQgPSB0b3RhbENudCA+PSAzID8gMyA6IHRvdGFsQ250O1xuXG4gICAgICAgIC8vIOaVsOWtl+enjeexu1xuICAgICAgICBjb25zdCB0eXBlcyA9IFV0aWxzLnJhbmRvbUludEFyckZyb21TZWN0aW9uKHR5cGVDbnQsIG1pbiwgbGltaXRNYXgpO1xuXG4gICAgICAgIC8vIOeUn+aIkOWFqOmDqOeahOmaj+acuuetueeggeWAvFxuICAgICAgICBsZXQgYWxsTmV3Q29pbiA9IFV0aWxzLnJhbmRvbUludEFyckZyb21BcnIodG90YWxDbnQsIHR5cGVzKTtcblxuICAgICAgICAvLyDnoa7lrprlvZPliY3nmoTliankvZnnqbrpl7Tmg4XlhrVcbiAgICAgICAgbGV0IHNwYWNlSW5mbyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgcGVyU2xvdFNwYWNlID0gdGhpcy5nZXRTcGFjZUJ5U2xvdChpKTtcbiAgICAgICAgICAgIHNwYWNlSW5mby5wdXNoKHBlclNsb3RTcGFjZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDpmo/mnLrlsIblt7Lnu4/nlJ/miJDnmoTmlbDlrZfloavlhYXliLDnm7jlupTnmoTnqbrkvY3nva7lpIQo5LiA5a6a5piv5Y+v5Lul5pS+5b6X5LiL55qE77yM5Ymp5L2Z56m66Ze0Pj3nlJ/miJDnmoTmlbDlrZfmlbDph48pXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW11dO1xuICAgICAgICBkbyB7XG4gICAgICAgICAgICBjb25zdCBzbG90SWR4ID0gVXRpbHMucmFuZG9tSW50SW5jbHVzaXZlKDAsIDcpO1xuICAgICAgICAgICAgaWYgKHNwYWNlSW5mb1tzbG90SWR4XSA9PT0gMCkgY29udGludWU7XG5cbiAgICAgICAgICAgIHJlc3VsdFtzbG90SWR4XS5wdXNoKGFsbE5ld0NvaW4uc2hpZnQoKSk7XG4gICAgICAgICAgICBzcGFjZUluZm9bc2xvdElkeF0tLTtcbiAgICAgICAgfSB3aGlsZSAoYWxsTmV3Q29pbi5sZW5ndGggPiAwKVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG5cbiAgICB9XG5cbiAgICAvLyDlsI/kuo4xNOeahOetlueVpVxuICAgIHByb2R1Y2VTdHJhdGVneVRocmVlKG1heDogbnVtYmVyLCBzcGFjZTogbnVtYmVyKTogbnVtYmVyW11bXSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCfnrZbnlaUzOjwxNCcpO1xuXG4gICAgICAgIC8vIOWcuuaZr+S4reacgOWwj+WAvFxuICAgICAgICBsZXQgbWluID0gTWF0aC5taW4oOCwgdGhpcy5nZXRNaW5WYWx1ZSgpKTtcblxuICAgICAgICAvLyDmgLvlhbHpnIDopoHnlJ/miJDnmoTmlbDlrZfmlbDph49cbiAgICAgICAgbGV0IHRvdGFsQ250ID0gTWF0aC5mbG9vcihNYXRoLm1pbigyMCwgc3BhY2UgKiAwLjYpKTtcbiAgICAgICAgaWYgKHRvdGFsQ250ID09PSAwKSB0b3RhbENudCA9IDE7XG5cbiAgICAgICAgY29uc3QgbGltaXRNYXggPSBNYXRoLm1pbihtYXgtMSwgMTApO1xuXG4gICAgICAgIC8vIOeUn+aIkOaVsOWtl+eahOexu+Wei+aVsOmHjyBtaW5+MTBcbiAgICAgICAgbGV0IHR5cGVDbnQgPSB0b3RhbENudCA+PSAzID8gMyA6IHRvdGFsQ250O1xuXG4gICAgICAgIC8vIOaVsOWtl+enjeexu1xuICAgICAgICBjb25zdCB0eXBlcyA9IFV0aWxzLnJhbmRvbUludEFyckZyb21TZWN0aW9uKHR5cGVDbnQsIG1pbiwgbGltaXRNYXgpO1xuXG4gICAgICAgIC8vIOeUn+aIkOWFqOmDqOeahOmaj+acuuetueeggeWAvFxuICAgICAgICBsZXQgYWxsTmV3Q29pbiA9IFV0aWxzLnJhbmRvbUludEFyckZyb21BcnIodG90YWxDbnQsIHR5cGVzKTtcblxuICAgICAgICAvLyDnoa7lrprlvZPliY3nmoTliankvZnnqbrpl7Tmg4XlhrVcbiAgICAgICAgbGV0IHNwYWNlSW5mbyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgcGVyU2xvdFNwYWNlID0gdGhpcy5nZXRTcGFjZUJ5U2xvdChpKTtcbiAgICAgICAgICAgIHNwYWNlSW5mby5wdXNoKHBlclNsb3RTcGFjZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDpmo/mnLrlsIblt7Lnu4/nlJ/miJDnmoTmlbDlrZfloavlhYXliLDnm7jlupTnmoTnqbrkvY3nva7lpIQo5LiA5a6a5piv5Y+v5Lul5pS+5b6X5LiL55qE77yM5Ymp5L2Z56m66Ze0Pj3nlJ/miJDnmoTmlbDlrZfmlbDph48pXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW11dO1xuICAgICAgICBkbyB7XG4gICAgICAgICAgICBjb25zdCBzbG90SWR4ID0gVXRpbHMucmFuZG9tSW50SW5jbHVzaXZlKDAsIDcpO1xuICAgICAgICAgICAgaWYgKHNwYWNlSW5mb1tzbG90SWR4XSA9PT0gMCkgY29udGludWU7XG5cbiAgICAgICAgICAgIHJlc3VsdFtzbG90SWR4XS5wdXNoKGFsbE5ld0NvaW4uc2hpZnQoKSk7XG4gICAgICAgICAgICBzcGFjZUluZm9bc2xvdElkeF0tLTtcbiAgICAgICAgfSB3aGlsZSAoYWxsTmV3Q29pbi5sZW5ndGggPiAwKVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG5cbiAgICB9XG5cbiAgICAvLyDlsI/kuo4xNeeahOetlueVpVxuICAgIHByb2R1Y2VTdHJhdGVneUZvdXIobWF4OiBudW1iZXIsIHNwYWNlOiBudW1iZXIpOiBudW1iZXJbXVtdIHtcbiAgICAgICAgY29uc29sZS5sb2coJ+etlueVpTE6PDE1Jyk7XG5cbiAgICAgICAgLy8g5Zy65pmv5Lit5pyA5bCP5YC8XG4gICAgICAgIGxldCBtaW4gPSBNYXRoLm1pbig2LCB0aGlzLmdldE1pblZhbHVlKCkpO1xuXG4gICAgICAgIC8vIOaAu+WFsemcgOimgeeUn+aIkOeahOaVsOWtl+aVsOmHj1xuICAgICAgICBsZXQgdG90YWxDbnQgPSBNYXRoLmZsb29yKE1hdGgubWluKDIwLCBzcGFjZSAqIDAuNykpO1xuICAgICAgICBpZiAodG90YWxDbnQgPT09IDApIHRvdGFsQ250ID0gMTtcblxuICAgICAgICBjb25zdCBsaW1pdE1heCA9IE1hdGgubWluKG1heC0xLCA5KTtcblxuICAgICAgICAvLyDnlJ/miJDmlbDlrZfnmoTnsbvlnovmlbDph48gbWlufjlcbiAgICAgICAgbGV0IHR5cGVDbnQgPSB0b3RhbENudCA+PSAzID8gMyA6IHRvdGFsQ250O1xuXG4gICAgICAgIC8vIOaVsOWtl+enjeexu1xuICAgICAgICBjb25zdCB0eXBlcyA9IFV0aWxzLnJhbmRvbUludEFyckZyb21TZWN0aW9uKHR5cGVDbnQsIG1pbiwgbGltaXRNYXgpO1xuXG4gICAgICAgIC8vIOeUn+aIkOWFqOmDqOeahOmaj+acuuetueeggeWAvFxuICAgICAgICBsZXQgYWxsTmV3Q29pbiA9IFV0aWxzLnJhbmRvbUludEFyckZyb21BcnIodG90YWxDbnQsIHR5cGVzKTtcblxuICAgICAgICAvLyDnoa7lrprlvZPliY3nmoTliankvZnnqbrpl7Tmg4XlhrVcbiAgICAgICAgbGV0IHNwYWNlSW5mbyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgcGVyU2xvdFNwYWNlID0gdGhpcy5nZXRTcGFjZUJ5U2xvdChpKTtcbiAgICAgICAgICAgIHNwYWNlSW5mby5wdXNoKHBlclNsb3RTcGFjZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDpmo/mnLrlsIblt7Lnu4/nlJ/miJDnmoTmlbDlrZfloavlhYXliLDnm7jlupTnmoTnqbrkvY3nva7lpIQo5LiA5a6a5piv5Y+v5Lul5pS+5b6X5LiL55qE77yM5Ymp5L2Z56m66Ze0Pj3nlJ/miJDnmoTmlbDlrZfmlbDph48pXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW11dO1xuICAgICAgICBkbyB7XG4gICAgICAgICAgICBjb25zdCBzbG90SWR4ID0gVXRpbHMucmFuZG9tSW50SW5jbHVzaXZlKDAsIDcpO1xuICAgICAgICAgICAgaWYgKHNwYWNlSW5mb1tzbG90SWR4XSA9PT0gMCkgY29udGludWU7XG5cbiAgICAgICAgICAgIHJlc3VsdFtzbG90SWR4XS5wdXNoKGFsbE5ld0NvaW4uc2hpZnQoKSk7XG4gICAgICAgICAgICBzcGFjZUluZm9bc2xvdElkeF0tLTtcbiAgICAgICAgfSB3aGlsZSAoYWxsTmV3Q29pbi5sZW5ndGggPiAwKVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgLy8gVE9ETzog5paw55Sf5oiQ55qE5pWw5o2u5ZKM5Y6f5pyJ5pWw5o2u6L+b6KGM5ZCI5oiQXG4gICAgbWVyZ2VQcm9kdWNlRGF0YShuZXdEYXRhOiBudW1iZXJbXVtdKTogdm9pZCB7XG4gICAgICAgIGZvciAobGV0IHNsb3RJZHggPSAwOyBzbG90SWR4IDwgODsgc2xvdElkeCsrKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdTbG90RGF0YSA9IFV0aWxzLmRlZXBDbG9uZShuZXdEYXRhW3Nsb3RJZHhdKTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNsb3REYXRhW3Nsb3RJZHhdW2pdID09PSAwICYmIG5ld1Nsb3REYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3Q29pbkRhdGEgPSBuZXdTbG90RGF0YS5zaGlmdCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNsb3REYXRhW3Nsb3RJZHhdW2pdID0gbmV3Q29pbkRhdGE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGNvbnN0IGdhbWVNb2R1bGUgPSBuZXcgR2FtZU1vZHVsZSgpO1xuIl19