import { GameUtils } from "../../game/GameUtils";
import { Logger } from "../../utils/logger";
import { Utils } from "../../utils/Utils";
import NumberAction from "./NumberAction";

const { ccclass, property } = cc._decorator;

@ccclass
export default class SceneLoadingUI extends cc.Component {

    private static _curUI: SceneLoadingUI = null;
    public static prefab: any = null;
    public static Prefab_Name = "prefab/common/SceneLoadingUI";

    public static hide() {
        // this.prefab = undefined;
        if (this._curUI) {
            Utils.removeNode(this._curUI.node);
            this._curUI = undefined;
        }
    }

    public static show() {
        if (this._curUI) {
            return;
        }
        let ins: cc.Node = cc.instantiate(SceneLoadingUI.prefab);
        ins.parent = GameUtils.loadingLayer;
    }

    public static async preLoad() {
        SceneLoadingUI.prefab = await Utils.loadPefab(SceneLoadingUI.Prefab_Name).catch(err => {
            throw err;
        });
    }

    public static setProgress(value: number) {
        if (!this._curUI) {
            return;
        }
        Logger.debug("[SceneLoadingUI setProgress] value:", value);
        this._curUI._setPorgress(value);
    }

    @property(cc.Label)
    lb_progress:cc.Label = null;

    progressBar: cc.ProgressBar = null;


    public init(data: object) {
        if (SceneLoadingUI._curUI) {
            Utils.removeNode(SceneLoadingUI._curUI.node);
        }
        SceneLoadingUI._curUI = this;
    }


    private _setPorgress(value: number) {
        value = Math.min(value, 1);
        cc.tween(this.progressBar)
            .to(0.2, { progress: value }, { easing: cc.easing.sineOut })
            .call(() => {
                if (value >= 1) {
                    setTimeout(() => {
                        SceneLoadingUI.hide();    
                    }, 0);
                }
            })
            .start();
        let txt = Math.ceil(value * 100);
        NumberAction.numberTo(this.lb_progress.node,txt);
    }

    onLoad() {
        if (SceneLoadingUI._curUI) {
            return;
        }
        SceneLoadingUI._curUI = this;
        this.progressBar = this.node.getComponentInChildren(cc.ProgressBar);
        this._setPorgress(0);
    }
}
