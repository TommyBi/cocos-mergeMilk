import { gameModule } from '../dataModule/GameModule';
import { EventType } from '../manager/Define';
import { uimanager } from '../manager/Uimanager';
import { eventManager } from '../util/EventManager';
import Slot from './Slot';

const { ccclass, property } = cc._decorator;

@ccclass
export default class Game extends cc.Component {
    @property(cc.Node)
    uBoxSlot: cc.Node = null;

    @property(cc.Node)
    uBtnProduce: cc.Node = null;

    @property(cc.Node)
    uBtnTidyUp: cc.Node = null;

    @property(cc.Node)
    uBtnMerge: cc.Node = null;

    // 缓存槽位的节点
    private slots: Slot[] = [];

    async onLoad() {
        this.uBtnMerge.on(cc.Node.EventType.TOUCH_END, this.onMerge, this);
        this.uBtnProduce.on(cc.Node.EventType.TOUCH_END, this.onProduce, this);
        this.uBtnTidyUp.on(cc.Node.EventType.TOUCH_END, this.onTidy, this);

        eventManager.on(EventType.CHECK_MERGE, this.updateBtn, this);

        await this.addSlot();
        this.formatSlotData();
        this.updateBtn();
    }

    start() {

    }

    // 初始化预制组件
    async addSlot() {
        const slotW = 116;
        const slotH = 212;
        const dx = (608 - slotW * 4) / 3;
        const dy = (this.uBoxSlot.height - slotH * 2) + slotH;

        for (let i = 0; i < 8; i++) {
            const row = Math.floor(i / 4);
            const col = i % 4;

            const slotPrefab = await uimanager.loadPrefab('prefab/merge/slot');
            const slot = cc.instantiate(slotPrefab);
            this.uBoxSlot.addChild(slot);
            slot.x = col * slotW + dx * col;
            slot.y = -slotH - dy * row;

            this.slots.push(slot);
        }
    }

    // 格式化填充游戏数据
    private formatSlotData(): void {
        for (let i = 0; i < 8; i++) {
            this.slots[i].getComponent(Slot).formatData(i, gameModule.slotData[i]);
        }
        eventManager.dispatch(EventType.CHECK_MERGE);
    }

    // 更新按钮的显示状态
    updateBtn(): void {
        const canMerge = gameModule.checkCanMerge();
        this.uBtnMerge.active = canMerge.length > 0;
    }

    // 合成
    onMerge() {
        if (!gameModule.canOperate) return;

        eventManager.dispatch(EventType.MERGE_COIN);
        // 点击合成后，提前主动隐藏掉“合成”按钮避免连点
        this.uBtnMerge.active = false;
    }

    // 发牌
    onProduce() {
        if (!gameModule.canOperate) return;

        const startPosIdxs: number[] = [];
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 10; j++) {
                if (gameModule.slotData[i][j] === 0) {
                    startPosIdxs.push(j);
                    break;
                }

                if (j === 9) {
                    startPosIdxs.push(9);
                }
            }
        }

        const newCoinData = gameModule.produceNewCoinData();
        for (let i = 0; i < this.slots.length; i++) {
            this.slots[i].getComponent(Slot).produce(
                newCoinData[i],
                this.node.convertToWorldSpaceAR(this.uBtnProduce.getPosition()),
                startPosIdxs[i]
            );
        }

        gameModule.mergeProduceData(newCoinData);

        // 发牌完成，检测是否可以合成
        eventManager.dispatch(EventType.CHECK_MERGE);
    }

    // 整理
    onTidy() {
        if (!gameModule.canOperate) return;

        gameModule.tidyData();
        this.formatSlotData();
    }
}
