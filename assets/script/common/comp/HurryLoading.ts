
const { ccclass, property } = cc._decorator;

@ccclass
export default class HurryLoading extends cc.Component {

    @property(cc.Label)
    lb_loading: cc.Label = null;
    private timeOut: number = -1;

    show() {
        this.node.active = true;
    }

    hide() {
        this.lb_loading.node.stopAllActions();
        this.node.active = false;
    }

    onEnable() {
        // this.icon.active = false;
        // this.timeOut = setTimeout(() => {
        //      if (cc.isValid(this.node)) {
        //         this.btn_back.active = true;
        //         this.icon.active = true;
        //     }
        // }, 3000);

        this.lb_loading.node.stopAllActions();
        cc.tween(this.lb_loading.node)
            .delay(0.5)
            .call(() => {
                this.lb_loading.string = "加 载 中 . ";
            })
            .delay(0.5)
            .call(() => {
                this.lb_loading.string = "加 载 中 . . ";
            })
            .delay(0.5)
            .call(() => {
                this.lb_loading.string = "加 载 中 . . .";
            })
            .union()
            .repeatForever()
            .start();
    }

    onDisable() {
        clearTimeout(this.timeOut);
    }
}
