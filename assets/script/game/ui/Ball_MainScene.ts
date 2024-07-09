
import { sd } from "../../common/AudioManager";
import { GameScene, SceneType } from "../../common/SceneManager";
import { bc } from "./bl_Config";
import bl_Logic from "./bl_Logic";
import bl_top from "./bl_top";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Ball_MainScene extends GameScene {
    public static Prefab_Name = "prefab/game/scene/main";

    static GetType() {
        return SceneType.Stage;
    }

    getType() {
        return Ball_MainScene.GetType();
    }

    getNode() {
        return this.node;
    }

    @property(bl_Logic)
    logic: bl_Logic = null;

    @property(cc.Node)
    top_content: cc.Node = null;

    @property(cc.Prefab)
    topPre: cc.Prefab = null;

    top: bl_top;

    async initScene(param: any) {
        await this.logic.init();
        sd.playBGM("sounds/bg", true);
    }

    async removeScene() {
    }

    protected onLoad(): void {
        cc.director.getPhysicsManager().enabled = true;
        // cc.director.getPhysicsManager().debugDrawFlags = cc.PhysicsManager.DrawBits.e_aabbBit |
        //     cc.PhysicsManager.DrawBits.e_jointBit |
        //     cc.PhysicsManager.DrawBits.e_shapeBit;
        this.addTop();
    }

    addTop() {
        let top = cc.instantiate(this.topPre);
        top.parent = this.top_content;

        top.y = this.node.height / 2 - top.height / 2;

        bc.top = this.top = top.getComponent(bl_top);
    }

    onEnable() {
    }

    onDisable() {
    }
}
