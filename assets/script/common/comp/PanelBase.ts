import { Logger } from "../../utils/logger";
import { Utils } from "../../utils/Utils";
import { GlobalEvent } from "../Global";


export class EventOnPanelClose extends cc.Event.EventCustom {
    public static readonly NAME: string = "EventOnPanelClose";
    viewName: string;
    public constructor(viewName: string) {
        super(EventOnPanelClose.NAME, true);
        this.viewName = viewName;
    }
}


const { ccclass, property } = cc._decorator;

@ccclass
export default class PanelBase extends cc.Component {
    static Panels: { [key: string]: boolean };
    static async ShowPanel(url: string): Promise<cc.Node> {
        if (this.Panels[url]) {
            Logger.debug("[PanelBase] 该弹窗工作中");
            return undefined;
        }
        this.Panels[url] = true;
        let prefab = await Utils.loadPefab(url);
        let insNode: cc.Node = cc.instantiate(prefab);
        let panel = insNode.getComponent(PanelBase);
        panel._url = url;
        return insNode;
    }

    static onSwitchScene(){
        this.Panels = {};
    }

    public _url: string;

    close() {
        PanelBase.Panels[this._url] = false;
        let name = this.node?.name;
        Utils.removeNode(this.node);
        GlobalEvent.dispatchEvent(new EventOnPanelClose(name));
    }
}
