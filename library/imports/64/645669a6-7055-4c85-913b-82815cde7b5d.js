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