import { EventType } from '../manager/Define';
import { eventManager, GameEvent } from '../util/EventManager';
import NewUtils from '../util/NewUtils';
import DataModule from './DataModule';

export default class GameModule extends DataModule {
    // 用户的筹码槽位数据 1~10
    public slotData = [
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [2, 2, 2, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 2, 2, 0, 0, 0, 0, 0, 0],
        [2, 2, 2, 3, 3, 0, 0, 0, 0, 0],
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
    // 合成引用计数
    mergeLock: number = 0;
    // 生成筹码效果引用计数
    produceLock: number = 0;

    constructor() {
        super();
    }

    parseData(data: any): void {
        super.parseData(data);
    }

    // 交互操作的检测，当前如果有正在发生的交互行为，则不允许触发更多的行为
    get canOperate(): boolean {
        // 正在有移动行为发生
        if (this.moveLock) {
            console.log('正在进行移动操作');
            return false;
        }

        // 正在进行合成操作
        if (this.mergeLock !== 0) {
            console.log('正在进行合成操作');
            return false;
        }

        if (this.produceLock !== 0) {
            console.log('正在发放筹码操作');
            return false;
        }

        return true;
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
        eventManager.dispatch(EventType.MOVE_END, ed);

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
                if (minValue === -1 && this.slotData[i][j] !== 0) {
                    minValue = this.slotData[i][j];
                }
                if (this.slotData[i][j] < minValue && this.slotData[i][j] !== 0) {
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

        return 0;
    }

    // 获取当前剩余空间
    getSpace(): number {
        let space = 0;
        for (let i = 0; i < 8; i++) {
            space += this.getSpaceBySlot(i);
        }
        return space;
    }

    //TODO: 生成新的筹码数据 服务器逻辑
    produceNewCoinData(): number[][] {
        // return [
        //     [1], [1], [1], [1], [1], [1], [1], [1]
        // ]

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

        if (maxValue < 5) {
            return this.produceStrategyOne(maxValue, space);
        } else if (maxValue < 10) {
            return this.produceStrategyTwo(maxValue, space);
        } else if (maxValue < 14) {
            return this.produceStrategyThree(maxValue, space);
        } else if (maxValue < 15) {
            return this.produceStrategyFour(maxValue, space);
        }
    }

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
    produceStrategyOne(max: number, space: number): number[][] {
        console.log('策略1:<5');
        // 场景中最小值
        let min = Math.min(1, this.getMinValue());

        // 总共需要生成的数字数量
        let totalCnt = Math.floor(Math.min(25, space * 0.6));
        if (totalCnt === 0) totalCnt = 1;

        // 新生成的数字类型限定在比当前场景中最大的数字小1
        const limitMax = max - 1 > 0 ? max - 1 : 1;

        // 生成数字的类型数量 1、2、3、4
        let typeCnt = totalCnt >= 4 ? 4 : totalCnt;
        typeCnt = Math.min(typeCnt, limitMax - min + 1);

        // 数字种类
        const types = NewUtils.randomIntArrFromSection(typeCnt, min, limitMax);

        // 生成全部的随机筹码值
        let allNewCoin = NewUtils.randomIntArrFromArr(totalCnt, types);

        // 确定当前的剩余空间情况
        let spaceInfo = [];
        for (let i = 0; i < 8; i++) {
            const perSlotSpace = this.getSpaceBySlot(i);
            spaceInfo.push(perSlotSpace);
        }

        // 随机将已经生成的数字填充到相应的空位置处(一定是可以放得下的，剩余空间>=生成的数字数量)
        const result = [[], [], [], [], [], [], [], []];
        do {
            const slotIdx = NewUtils.randomIntInclusive(0, 7);
            if (spaceInfo[slotIdx] === 0) continue;

            result[slotIdx].push(allNewCoin.shift());
            spaceInfo[slotIdx]--;
        } while (allNewCoin.length > 0)

        return result;
    }

    // 小于10的策略
    produceStrategyTwo(max: number, space: number): number[][] {
        console.log('策略2:5<=x<10');

        // 场景中最小值
        let min = Math.min(3, this.getMinValue());

        // 总共需要生成的数字数量
        let totalCnt = Math.floor(Math.min(22, space * 0.6));
        if (totalCnt === 0) totalCnt = 1;

        // 最大值 7
        const limitMax = Math.min(max - 1, 7);

        // 生成数字的类型数量(既不能超过可生成的总数量，也不能超过当前允许出现的类型上限)
        let typeCnt = totalCnt >= 3 ? 3 : totalCnt;
        typeCnt = Math.min(typeCnt, limitMax - min + 1);

        // 实际生成的种类
        const types = NewUtils.randomIntArrFromSection(typeCnt, min, limitMax);

        // 生成全部的随机筹码值
        let allNewCoin = NewUtils.randomIntArrFromArr(totalCnt, types);

        // 确定当前的剩余空间情况
        let spaceInfo = [];
        for (let i = 0; i < 8; i++) {
            const perSlotSpace = this.getSpaceBySlot(i);
            spaceInfo.push(perSlotSpace);
        }

        // 随机将已经生成的数字填充到相应的空位置处(一定是可以放得下的，剩余空间>=生成的数字数量)
        const result = [[], [], [], [], [], [], [], []];
        do {
            const slotIdx = NewUtils.randomIntInclusive(0, 7);
            if (spaceInfo[slotIdx] === 0) continue;

            result[slotIdx].push(allNewCoin.shift());
            spaceInfo[slotIdx]--;
        } while (allNewCoin.length > 0)

        return result;

    }

    // 小于14的策略
    produceStrategyThree(max: number, space: number): number[][] {
        console.log('策略3: 10<x<14');

        // 场景中最小值
        let min = Math.min(8, this.getMinValue());

        // 总共需要生成的数字数量
        let totalCnt = Math.floor(Math.min(20, space * 0.6));
        if (totalCnt === 0) totalCnt = 1;

        // 最大值 9~11
        const limitMax = Math.min(max - 1, 11);

        // 生成数字的类型数量(既不能超过可生成的总数量，也不能超过当前允许出现的类型上限)
        let typeCnt = totalCnt >= 3 ? 3 : totalCnt;
        typeCnt = Math.min(typeCnt, limitMax - min + 1);

        // 数字种类
        const types = NewUtils.randomIntArrFromSection(typeCnt, min, limitMax);

        // 生成全部的随机筹码值
        let allNewCoin = NewUtils.randomIntArrFromArr(totalCnt, types);

        // 确定当前的剩余空间情况
        let spaceInfo = [];
        for (let i = 0; i < 8; i++) {
            const perSlotSpace = this.getSpaceBySlot(i);
            spaceInfo.push(perSlotSpace);
        }

        // 随机将已经生成的数字填充到相应的空位置处(一定是可以放得下的，剩余空间>=生成的数字数量)
        const result = [[], [], [], [], [], [], [], []];
        do {
            const slotIdx = NewUtils.randomIntInclusive(0, 7);
            if (spaceInfo[slotIdx] === 0) continue;

            result[slotIdx].push(allNewCoin.shift());
            spaceInfo[slotIdx]--;
        } while (allNewCoin.length > 0)

        return result;
    }

    // 小于15的策略
    produceStrategyFour(max: number, space: number): number[][] {
        console.log('策略1:<15');

        // 场景中最小值
        let min = Math.min(11, this.getMinValue());

        // 总共需要生成的数字数量
        let totalCnt = Math.floor(Math.min(25, space * 0.8));
        if (totalCnt === 0) totalCnt = 1;

        // 最大值11~13
        const limitMax = Math.min(max - 1, 11);

        // 生成数字的类型数量 min~9
        let typeCnt = totalCnt >= 3 ? 3 : totalCnt;

        // 数字种类
        const types = NewUtils.randomIntArrFromSection(typeCnt, min, limitMax);

        // 生成全部的随机筹码值
        let allNewCoin = NewUtils.randomIntArrFromArr(totalCnt, types);

        // 确定当前的剩余空间情况
        let spaceInfo = [];
        for (let i = 0; i < 8; i++) {
            const perSlotSpace = this.getSpaceBySlot(i);
            spaceInfo.push(perSlotSpace);
        }

        // 随机将已经生成的数字填充到相应的空位置处(一定是可以放得下的，剩余空间>=生成的数字数量)
        const result = [[], [], [], [], [], [], [], []];
        do {
            const slotIdx = NewUtils.randomIntInclusive(0, 7);
            if (spaceInfo[slotIdx] === 0) continue;

            result[slotIdx].push(allNewCoin.shift());
            spaceInfo[slotIdx]--;
        } while (allNewCoin.length > 0)

        return result;
    }

    // TODO: 新生成的数据和原有数据进行合成
    mergeProduceData(newData: number[][]): void {
        for (let slotIdx = 0; slotIdx < 8; slotIdx++) {
            const newSlotData = NewUtils.deepClone(newData[slotIdx]);
            for (let j = 0; j < 10; j++) {
                if (this.slotData[slotIdx][j] === 0 && newSlotData.length > 0) {
                    const newCoinData = newSlotData.shift();
                    this.slotData[slotIdx][j] = newCoinData;
                }
            }
        }
    }

    /*
     * TODO: 梳理棋盘数据
     * @description: 保留场景中最大的8个种类数，每种数最多保留10个，其余都扔掉
     */
    tidyData(): void {
        // 1、记录每种类型数字的持有总数
        const dataMap = {};
        for (let i = 0; i < this.slotData.length; i++) {
            for (let j = 0; j < 10; j++) {
                if (this.slotData[i][j] !== 0) {
                    if (dataMap[`${this.slotData[i][j]}`]) {
                        dataMap[`${this.slotData[i][j]}`] += 1;
                    } else {
                        dataMap[`${this.slotData[i][j]}`] = 1;
                    }
                }
            }
        }
        console.log('dataMap:', dataMap);

        // 2、根据每种数字类型，创建一个长度为10的类型，数量不足10补足0
        const allData: number[][] = [];
        for (const key in dataMap) {
            if (dataMap[key] > 10) {
                dataMap[key] = 10;
            }

            const perTypeData = [];
            for (let i = 0; i < 10; i++) {
                if (i <= dataMap[key] - 1) {
                    perTypeData.push(Number(key));
                } else {
                    perTypeData.push(0);
                }
            }

            allData.push(perTypeData);
        }

        // 3、将所有类型的数组从大到小有序排列
        allData.sort((a, b) => {
            return b[0] - a[0];
        });

        // 最终标准格式化
        if (allData.length > 8) {
            // 类型超过8种 取前八
            this.slotData = allData.slice(0, 7);
        } else {
            // 不足8种，补足8种
            for (let i = 0; i < 8; i++) {
                if (allData.length <= i) {
                    allData.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                }
            }

            this.slotData = allData;
        }

        console.log('整理后的slotData:', allData, this.slotData);
    }
}
export const gameModule = new GameModule();
