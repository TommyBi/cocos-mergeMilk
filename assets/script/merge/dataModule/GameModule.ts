import { EventType } from '../manager/Define';
import { eventManager, GameEvent } from '../util/EventManager';
import Utils from '../util/Utils';
import DataModule from './DataModule';

export default class GameModule extends DataModule {
    // 用户的筹码槽位数据 1~10
    public slotData = [
        [1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [1, 1, 2, 2, 3, 3, 4, 4, 5, 5],
        [2, 2, 3, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]

    // 当前正在选中的筹码槽位
    curSelectSlotIdx: number = -1;
    // 当前选中的筹码信息
    curSelectCoinIdxs: number[] = [];

    // 移动锁
    moveLock: boolean = false;
    mergeLock: number = 0;

    constructor() {
        super();
    }

    parseData(data: any): void {
        super.parseData(data);
    }

    /**
     * @description 通过槽id 获取第一个有效的筹码信息
     * @param slotIdx: 需要获取第一个有效的筹码信息的槽id
     * @return vaildNum: 该槽位的有效数字、vaildIdx: 有效数字的索引、vaildSPace: 剩余可容纳的筹码空间
     */
    getFirstVaildNumBySlotIdx(slotIdx: number): { vaildNum: number, vaildIdx: number, vaildSpace: number } {
        const slotData = this.slotData[slotIdx];

        let vaildNum: number = -1;
        let vaildIdx: number = -1;
        let vaildSpace: number = 10;

        for (let i = 9; i >= 0; i--) {
            if (slotData[i] === 0) continue;

            vaildNum = slotData[i];
            vaildIdx = i;
            vaildSpace = 9 - i;
            break;
        }

        return { vaildNum, vaildIdx, vaildSpace };
    }

    /**
     * @description 获取当前选中的待移动的槽位筹码信息
     * @returns slotIdx: 当前选中的槽位索引、  cnt: 待移动的筹码数量、  num: 待移动的数字类型
     */
    getCurSelectSlotInfo(): { slotIdx: number, cnt: number, num: number } {
        if (this.curSelectSlotIdx === -1) return null;
        const cnt = this.curSelectCoinIdxs.length;
        const num = this.slotData[this.curSelectSlotIdx][this.curSelectCoinIdxs[0]];
        return { slotIdx: this.curSelectSlotIdx, cnt, num };
    }

    // 重置当前筹码选择状态
    resetSelectStatus(): void {
        gameModule.curSelectSlotIdx = -1;
        gameModule.curSelectCoinIdxs = [];
    }

    // 筹码移动完成，整理移动后的数据
    tidySlotData(ed: { tarSlotIdx: number, numType: number, srcIdxArr: number[], tarIdxArr: number[] }) {
        for (let i = 0; i < ed.srcIdxArr.length; i++) {
            this.slotData[this.curSelectSlotIdx][ed.srcIdxArr[i]] = 0;
            this.slotData[ed.tarSlotIdx][ed.tarIdxArr[i]] = ed.numType;
        }

        // 刷新筹码显示情况
        eventManager.dispatchEvent(new GameEvent(EventType.MOVE_END, ed));

        // 重置当前选中状态
        this.resetSelectStatus();

        // 检测是否可以合成
        eventManager.dispatch(EventType.CHECK_MERGE);
    }

    // 检测是否有可以合成的槽位
    checkCanMerge(): number[] {
        const result = [];
        for (let i = 0; i < 8; i++) {
            const can = this.checkCanMergeBySlot(i);
            if (can) result.push(i);
        }

        return result;
    }

    // 通过槽位来检测是否可以进行合成
    checkCanMergeBySlot(slotId: number): boolean {
        const slotData = this.slotData[slotId];
        for (let i = 0; i < 10; i++) {
            if (slotData[i] === 0) return false;
            if (i === 0) continue;
            if (slotData[i] !== slotData[i - 1]) {
                return false;
            }
        }

        return true;
    }

    // 获取当前最大数字
    getMaxValue(): number {
        let maxValue = 0;
        for (let i = 0; i < this.slotData.length; i++) {
            for (let j = 0; j < this.slotData[i].length; j++) {
                if (this.slotData[i][j] > maxValue) {
                    maxValue = this.slotData[i][j];
                }

            }

        }
        return maxValue;
    }

    // 获取当前最小数字
    getMinValue(): number {
        let minValue = -1;
        for (let i = 0; i < this.slotData.length; i++) {
            for (let j = 0; j < this.slotData[i].length; j++) {
                if (minValue === -1) {
                    minValue = this.slotData[i][j];
                }
                if (this.slotData[i][j] < minValue) {
                    minValue = this.slotData[i][j];
                }

            }

        }
        return minValue;
    }

    getSpaceBySlot(id: number): number {
        if (!this.slotData[id]) return;
        for (let i = 0; i < this.slotData[id].length; i++) {
            if (this.slotData[id][i] === 0) {
                return 10 - i;
            }
        }
    }

    // 获取当前剩余空间
    getSpace(): number {
        let space = 0;
        for (let i = 0; i < 10; i++) {
            space += this.getSpaceBySlot(i);
        }
        return space;
    }

    // 生成新的筹码数据
    produceNewCoinData(): number[][] {
        return [
            [1],[1],[1],[1],[1],[1],[1],[1]
        ]

        const maxValue = this.getMaxValue();
        const space = this.getSpace();

        if (maxValue >= 15) {
            console.warn('当前已合成15');
            return;
        }

        if (space === 0) {
            console.warn('没有剩余空间，无法生成新数字')
            return;
        }

        if (maxValue < 8) {
            return this.produceStrategyOne(maxValue, space);
        } else if (maxValue < 10) {
            return this.produceStrategyTwo(maxValue, space);
        } else if (maxValue < 12) {
            return this.produceStrategyThree(maxValue, space);
        } else if (maxValue < 15) {
            return this.produceStrategyFour(maxValue, space);
        }
    }

    // 仅剩一个空余位置的场景
    produceOnlyOne(): number[][] {
        return;
    }

    /**
     * @description 小于8 策略
     * 1、生成数量 min(space*30,5);
     * 2、生成类型 <= 2
     * 3、最小数 = 当前场景最小数-1
     * @returns 
     */
    produceStrategyOne(max: number, space: number): number[][] {
        console.log('策略1:<8');
        if (space === 1) {
            return this.produceOnlyOne();
        }

        const min = this.getMinValue();

        // 确定需要生成的数量
        const cnt = Math.max(Math.floor(Math.min(5, space * 0.3)), 2);

        // 确定需要生成的数字种类
        const types = Utils.randomIntArrFromSection(cnt, min, max);
        
        // 根据种类和数量进行填充
        
        return;
    }

    // 小于10的策略
    produceStrategyTwo(max: number, space: number): number[][] {
        console.log('策略2:<10');
        return;
    }

    // 小于12的策略
    produceStrategyThree(max: number, space: number): number[][] {
        console.log('策略1:<12');
        return;
    }

    // 小于15的策略
    produceStrategyFour(max: number, space: number): number[][] {
        console.log('策略1:<15');
        return;
    }

    // TODO: 新生成的数据和原有数据进行合成
    mergeProduceData(newData: number[][]): void {
        for (let slotIdx = 0; slotIdx < 8; slotIdx++) {
            const newSlotData = Utils.deepClone(newData[slotIdx]);
            for (let j = 0; j < 10; j++) {
                if (this.slotData[slotIdx][j] === 0 && newSlotData.length > 0) {
                    const newCoinData = newSlotData.shift();
                    this.slotData[slotIdx][j] = newCoinData;
                }
            }
        }
    }
}
export const gameModule = new GameModule();
