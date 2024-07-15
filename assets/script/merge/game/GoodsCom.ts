const { ccclass, property } = cc._decorator;

@ccclass
export default class GoodsCom extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    onLoad() { }
}
