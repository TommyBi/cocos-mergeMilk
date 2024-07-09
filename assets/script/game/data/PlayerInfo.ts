
import SaveData, { SaveNodeConfig } from "../../common/SaveData";
import { SaveKey } from "./SaveDataConfig";

export default class Configo extends SaveData {

    /**数据配置 */
    public static Config = {
        // "a": new SaveNodeConfig("a", [9, 9], false),
        "a": new SaveNodeConfig("a", [1, 1, 1, 1, 1, 1, 1, 1], false),
    }

    get arr() {
        return this.getValue(Configo.Config.a.key)
    }
    set arr(value) {
        this.setValue(Configo.Config.a.key, value);
    }


    constructor() {
        super(SaveKey[SaveKey.Player], Configo.Config);
    }

    init() {
        super.init();
    }
}
