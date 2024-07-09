import { Utils } from "../utils/Utils";
import { GlobalDefines } from "./consts/GlobalDefines";

const {ccclass, property} = cc._decorator;

@ccclass
export default class BasePanel extends cc.Component {
    
    @property(cc.Node)
    btn_back:cc.Node = null;

    protected onLoad(): void {
        this.btn_back && (this.btn_back.scale = 0);
    }

    protected start(): void {
        this.initBackBtn();
    }

    initBackBtn(){
        if(this.btn_back){
            let top = GlobalDefines.MenuButtonLogic.top;
            let height = GlobalDefines.MenuButtonLogic.height;
            this.btn_back.y = GlobalDefines.ScreenHeight / 2 - top - height / 2;
            this.btn_back.x = -330;
            cc.tween(this.btn_back)
            .to(0.3,{scale:1},{easing:cc.easing.backOut})
            .start();
        }
    }

    protected onDisable(): void {
    }

    close(){
        Utils.removeNode(this.node);
    }

    onBtnBackClicked(e: cc.Event.EventTouch) {
        if (Utils.btnLock()) {
            return;
        }
        this.close();
    }
}
