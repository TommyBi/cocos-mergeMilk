import { sd } from "../common/AudioManager";
import Toast, { TipIco } from "../common/comp/toast/Toast";
import { dm } from "../common/DataManager";
import Ball_Main from "../common/Ball_Main";
import { SceneType, sm } from "../common/SceneManager";
import { Utils } from "../utils/Utils";
import { ui, UILayer } from "./common/UIManager";

export class GameUtils {
    static get popLayer() {
        return ui.getLayer(UILayer.Panel);
    }
    static get effectLayer() {
        return ui.getLayer(UILayer.Effect);
    }
    static get loadingLayer() {
        return ui.getLayer(UILayer.LoadingBar);
    }
    static get bannerLayer() {
        return ui.getLayer(UILayer.Banner);
    }

    static get xLayer() {
        return ui.getLayer(UILayer.X);
    }

    static popView(view: cc.Node, insert: boolean = false) {
        ui.popView(view, insert);
    }

    static addEffectAR(node) {
        ui.addEffectAR(node);
    }

    static playClick() {
        this.playSFX("click");//("Button_click");
    }
    static playDrop() {
        this.playSFX("drop");//("Button_click");
    }

    static playCompose() {
        this.playSFX("compose")
    }

    static playFlyCoin() {
        this.playSFX("rise_1")
    }
    static playSFX(sndName: string, ext: string = ".mp3") {
        sd.playSFX(`sounds/${sndName}`, 1, ext);
    }

    static showToast(context: string, ico?: TipIco) {
        Toast.show(ui.getLayer(UILayer.Tip), context, ico ? ico : TipIco.Tip);
    }

    static showToast_noCoin() {
        this.showToast("金币不足", TipIco.Coin);
    }


    static addEffBoom(wpos: cc.Vec2) {
        let boom = cc.instantiate(Ball_Main.instance.resList.prefab_eff_boom);
        boom.position = wpos;
        GameUtils.addEffectAR(boom);
        setTimeout(() => {
            Utils.removeNode(boom)
        }, 3000);
    }

    static async loadConfigFromAli(fileName: string) {
        // let url = `${GameConfig.OSS_URL_BASE}${fileName}.json`;//${Math.random()}
        // return Utils.loadConfigFromAli(url);
    }

    static createNodeByFrame(frame: cc.SpriteFrame, scale: number, url?: string) {
        let node = new cc.Node();
        let ico = new cc.Node();
        ico.scale = scale;
        ico.parent = node;
        let spr = ico.addComponent(cc.Sprite);
        spr.spriteFrame = frame;
        spr.sizeMode = cc.Sprite.SizeMode.RAW;
        if (url) {
            Utils.updateNodeSpriteFrame(url, ico, false);
        }
        return node;
    }
}
