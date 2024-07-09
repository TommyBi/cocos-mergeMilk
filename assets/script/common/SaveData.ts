import { Utils } from "../utils/Utils";
import { GlobalEvent } from "./Global";
import { EventOnDataChange } from "./GlobalEvents";
import { pm } from "./PmManager";


export default class SaveData {
    private _saveKey: string;
    public get saveKey() {
        return this._saveKey + "_" + 1;
    }

    list: Map<string, DataNode> = new Map();
    nodeConfig: { [key: string]: SaveNodeConfig } = {};

    constructor(saveKey: string, nodeConfig: { [key: string]: SaveNodeConfig }) {
        this._saveKey = saveKey;
        this.nodeConfig = nodeConfig;
    }

    init() {
        let data: string = pm.Get(this.saveKey);
        let res
        if (!!data) {
            if (typeof (data) != "string") {
                res = data;
            } else res = JSON.parse(data)
        } else res = {};
        // let res = !!data ? JSON.parse(data) : {};
        // let res = data || {};
        for (let key in this.nodeConfig) {
            let cfg = this.nodeConfig[key];
            let node = new DataNode(cfg, res);
            this.addNode(node);
        }
    }

    save() {
        let rst = {};
        this.list.forEach(element => {
            let obj = element.saveObj;
            rst[element.key] = obj;
        });
        // (let key in this.list) {
        //     let node: DataNode = this.list[key];
        //     let obj = node.saveObj;
        //     rst[key] = obj;
        // }
        pm.Set(this.saveKey, JSON.stringify(rst))
    }

    addNode(node: DataNode) {
        this.list.set(node.key, node);
    }

    getNode(key: string): DataNode {
        return this.list.get(key)
    }

    getValue(key: string): any {
        return this.getNode(key).value;
    }

    setValue(key: string, value: any, save: boolean = true) {
        let node = this.getNode(key);
        node.value = value;
        GlobalEvent.dispatchEvent(new EventOnDataChange({ model: this.saveKey, key: key, value: node.value }));
        save && this.save();
    }
}

export class DataNode {
    key: string;
    daily: boolean;
    saveTime: number;

    normal: any;

    _value: any;
    get value() {
        if (this.daily) {
            let curTime = Utils.getCurTime();
            if (!Utils.isToday(this.saveTime))
            // if (curTime - this.saveTime >= GlobalDefines.Second_Day) 
            {
                this._value = this.normal;
                this.saveTime = curTime;
            }
        }
        return this._value;
    }
    set value(v: any) {
        this._value = v;
        if (this.daily) {
            this.saveTime = Utils.getCurTime();
        }
    }

    constructor(cfg: SaveNodeConfig, res: object) {
        this.key = cfg.key;
        this.normal = cfg.normal;
        this.daily = cfg.daily;

        if (!res || !res[this.key]) {
            this._value = this.normal;
        } else {
            let node = res[this.key];
            this._value = node.v == undefined ? this.normal : node.v;
            this.saveTime = node.t || 0;
        }
    }

    get saveObj() {
        let rst = {};
        rst["v"] = this._value;
        if (this.daily) {
            rst["t"] = this.saveTime;
        }
        return rst;
    }
}

export class SaveNodeConfig {
    key: string;
    normal: any;
    daily: boolean
    constructor(key: string, normal: any, daily: boolean) {
        this.key = key;
        this.normal = normal;
        this.daily = daily;
    }
}



