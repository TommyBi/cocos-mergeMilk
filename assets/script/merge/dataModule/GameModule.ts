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

    // 生成新的筹码数据
    produceNewCoinData(): number[][] {
        const newData = [
            [],
            [],
            [],
            [],
            [],
            [1, 1, 2, 2],
            [1, 1, 1, 1],
            [3, 3, 4, 4],
        ];
        return newData;
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
