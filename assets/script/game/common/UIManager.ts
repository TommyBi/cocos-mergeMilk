import HurryLoading from "../../common/comp/HurryLoading";
import PanelBase from "../../common/comp/PanelBase";
import { GlobalDefines } from "../../common/consts/GlobalDefines";
import { Logger } from "../../utils/logger";
import { Utils } from "../../utils/Utils";


export enum UILayer {
    Topres = 0,
    Panel,
    LoadingBar,
    MessageBox,
    Guide,
    Banner,
    X,
    Tip,
    Effect,
    Effect2,
}

export default class UIManager {
    private static _ins: UIManager;
    public static get ins() {
        if (!this._ins) {
            this._ins = new UIManager();
        }
        return this._ins;
    }

    private node: cc.Node;
    private alert: cc.Node;

    hurryLoading: HurryLoading = null;

    private constructor() { }

    public onLoad(node: cc.Node, hurryLoading: HurryLoading) {
        this.node = node;
        this.hurryLoading = hurryLoading;
    }

    onInit() {
        this.hideLoading();
    }

    /**
     * 显示加载菊花
     * @param title 
     */
    public showLoading(title?: string) {
        this.hurryLoading.show();
    }
    /**
     * 隐藏加载菊花
     * @param title 
     */
    public hideLoading() {
        this.hurryLoading.hide();
    }

    /**
     * 在场景中构建UI结构
     */
    public checkNode() {
        Logger.warn("[UIManager checkNode] width:", this.node.width, "/height:", this.node.height);

        for (var key in UILayer) {
            var keyToAny: any = key;
            //判断是否是数字
            if (isNaN(keyToAny)) {
                this.addNullNode(this.node, key);
            }
        }
    }

    private addNullNode(baseNode: cc.Node, nodeName: string): cc.Node {
        if (!baseNode) {
            console.warn(`[UIManager addNullNode] ${baseNode}不存在`);
            return undefined;
        }
        let node = baseNode.getChildByName(nodeName);
        if (!!node) {
            console.warn(`[UIManager addNullNode] 节点${nodeName}已经存在`);
            return node;
        }
        let newNode = new cc.Node(nodeName);
        baseNode.addChild(newNode);
        newNode.width = newNode.parent.width;
        newNode.height = newNode.parent.height;
        newNode.x = 0;
        newNode.y = 0;
        return newNode;
    }

    getLayer(layerId: UILayer): cc.Node {
        let name = UILayer[layerId];
        let node = this.node.getChildByName(name);
        return node;
    }

    public addGuide(view: cc.Node) {
        view.x = 0;
        view.y = 0;
        view.width = GlobalDefines.ScreenWidth;
        view.height = GlobalDefines.ScreenHeight;
        this.getLayer(UILayer.Guide).addChild(view);
    }

    public popView(view: cc.Node, insert: boolean = false) {
        view.x = 0;
        view.y = 0;
        view.width = GlobalDefines.ScreenWidth;
        view.height = GlobalDefines.ScreenHeight;
        if (insert) {
            this.getLayer(UILayer.Panel).insertChild(view, 0);
        } else {
            view.parent = this.getLayer(UILayer.Panel);
        }
    }


    public tip(node: cc.Node) {
        node.parent = this.getLayer(UILayer.Tip)
    }

    public layerClear(layerId: UILayer) {
        Utils.removeAllChildren(this.getLayer(layerId));
    }

    public addEffect(effect: cc.Node) {
        if (this.getLayer(UILayer.Effect).childrenCount >= 200) {
            Utils.removeNode(this.getLayer(UILayer.Effect).children[0]);
        }
        effect.parent = this.getLayer(UILayer.Effect);
    }

    /**
     * 约定effect.postion为worldAR座标
     * @param effectByWorldAR 
     */
    public addEffectAR(effectByWorldAR: cc.Node) {
        let posOfEffect = this.getLayer(UILayer.Effect).convertToNodeSpaceAR(effectByWorldAR.position);
        effectByWorldAR.position = posOfEffect;
        this.addEffect(effectByWorldAR);
    }

    public onSwitchScene() {
        PanelBase.onSwitchScene();
        this.layerClear(UILayer.Panel);
        this.layerClear(UILayer.Tip);
    }

    public get safeAreaTop() {
        return GlobalDefines.MenuButtonLogic.top + GlobalDefines.MenuButtonLogic.height + (100 - GlobalDefines.MenuButtonLogic.height) / 2;
    }

    alignmentToMenu(node: cc.Node) {
        let menuTop = GlobalDefines.MenuButtonLogic.top;
        let menuHeight = GlobalDefines.MenuButtonLogic.height;
        let screenHeight = GlobalDefines.ScreenHeight;
        node.y = screenHeight / 2 - menuTop - menuHeight / 2;//中心与胶囊中心对齐   
        Logger.debug("[BattleOptionWord alignmentToMenu] bar.y:", node.y, "ScreenHeight:", GlobalDefines.ScreenHeight);
    }
}
export const ui = UIManager.ins;