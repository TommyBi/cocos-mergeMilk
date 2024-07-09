import { ui } from "../game/common/UIManager";
import { Logger } from "../utils/logger";
import { Utils } from "../utils/Utils";
import SceneLoadingUI from "./comp/SceneLoadingUI";
import { GlobalEvent } from "./Global";
import { EventOnSwitchScene } from "./GlobalEvents";

export enum SceneType {
    None = -1,
    Loading = 0,
    Stage = 1,
    Select = 2,
    Main = 3,
}

export class GameScene extends cc.Component {
    initScene(param: any = undefined): any { }
    removeScene(): any { }
    getNode(): cc.Node { return }
    getType(): SceneType { return -1 }
}

export default class SceneManager {
    private static _ins: SceneManager;
    public static get ins() {
        return this._ins || new SceneManager();
    }
    public node: cc.Node = null;
    public curScene: GameScene = null;

    public lastSceneType: SceneType = -1;
    public nextSceneType: SceneType = -1;

    public isSceneLoading: boolean = false;

    private constructor() { }

    onLoad(node: cc.Node) {
        this.node = node;
    }

    async switchScene<T extends GameScene>(T, params: object = undefined, showProgressBar: boolean = false) {
        this.isSceneLoading = true;
        let sceneType: SceneType = T.GetType();
        // if(sceneType == this.curScene.getType()){
        //     return;
        // }
        this.nextSceneType = sceneType;
        Logger.debug("[Ball_Main swtichScene]>>>>>>>>>", sceneType);

        let oldScene = this.curScene;
        if (oldScene) {
            ui.onSwitchScene();
            oldScene.removeScene();
        }
        this.curScene = await this.createScene(T);

        if (this.curScene) {
            let curSceneNode: cc.Node = null;
            curSceneNode = this.curScene.getNode();
            this.node.destroyAllChildren();
            this.node.addChild(curSceneNode);

            GlobalEvent.dispatchEvent(new EventOnSwitchScene());
        }

        if (showProgressBar) {
            SceneLoadingUI.setProgress(1);
        }

        if (this.curScene) {
            await this.curScene.initScene(params);
        }
        this.lastSceneType = this.nextSceneType;
        this.isSceneLoading = false;
    }

    async createScene<T extends GameScene>(T): Promise<GameScene> {
        let prefab = await Utils.loadPefab(T.Prefab_Name);
        let ins: cc.Node = cc.instantiate(prefab);
        ins.width = this.node.width;
        ins.height = this.node.height;
        ins.x = 0;
        ins.y = 0;
        let comps = ins.getComponentsInChildren(cc.Component);
        for (let i = 0; i < comps.length; i++) {
            if (comps[i] instanceof (GameScene)) {
                return comps[i] as GameScene;
            }
        }
        return undefined;
    }
}
export const sm = SceneManager.ins;
