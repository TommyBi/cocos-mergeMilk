import SceneLoadingUI from "../../common/comp/SceneLoadingUI";
import { LoadStatus } from "../../common/consts/GlobalDefines";
import { dm } from "../../common/DataManager";
import Ball_Main from "../../common/Ball_Main";
import { GameScene, SceneType, sm } from "../../common/SceneManager";
import { initSource } from "../../lang/LanguageData";
import SDKManager from "../../utils/SDKManager";
import { Utils } from "../../utils/Utils";
import { bc } from "../ui/bl_Config";
import Ball_MainScene from "../ui/Ball_MainScene";


const { ccclass, property } = cc._decorator;

@ccclass
export default class LoadingScene extends GameScene {
    public static Prefab_Name = "prefab/game/scene/loading_scene";
    static GetType() {
        return SceneType.Loading;
    }

    @property(cc.Label)
    lb_ver: cc.Label = null;

    protected onLoad(): void {
        // initSource("zh",this.config.json.language['zh']);
    }

    async startLoading() {

        Ball_Main.instance.isInited = false;
        sm.curScene = this;

        await this.initScene();
    }

    getNode(): cc.Node {
        return this.node;
    }


    async loadRes() {
        return new Promise(async (resolve, reject) => {
            await SceneLoadingUI.preLoad();
            SceneLoadingUI.show();
            await Ball_Main.instance.initGame();
            resolve(LoadStatus.Success);
        });
    }



    async initScene() {
        Ball_Main.instance.isInited = false;

        cc.debug.setDisplayStats(false);
        //4 资源加载 如果失败，每隔一秒持续尝试
        let resStatus: number = LoadStatus.Doing;//-1:同步失败 0:同步成功 1:退出游戏
        do {
            await this.loadRes().then((status: number) => {
                resStatus = status;
            });
        } while (resStatus == LoadStatus.Doing)
        if (resStatus == LoadStatus.GameOut) {
            return;
        }

        //立即结束这次同步任务
        setTimeout(async () => {
            // sm.switchScene(SelectScene,undefined,true);     
            // if (dm.player.initTimes <= 1) {

            // }else{
            sm.switchScene(Ball_MainScene, undefined, true);
            // } 
        }, 0);
        Ball_Main.instance.isInited = true;

        // CommonUtils.GameLogin(false,undefined);
    }
    getType() {
        return LoadingScene.GetType();
    }

    async removeScene() {
    }
}