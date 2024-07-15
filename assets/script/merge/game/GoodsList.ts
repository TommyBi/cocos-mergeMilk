import { uimanager } from "../manager/Uimanager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GoodsList extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property(cc.ScrollView)
    uPanel: cc.ScrollView = null;

    async onLoad() {
        for (let i = 0; i < 10; i++) {
            const goods = await this.produceGoods();
            this.uPanel.content.addChild(goods);
            goods.x = i * goods.width;
        }
    }

    async produceGoods(): Promise<cc.Node> {
        const coinPrefab = await uimanager.loadPrefab('prefab/merge/goodsCom');
        const coin = cc.instantiate(coinPrefab);
        return coin;
    }
}
