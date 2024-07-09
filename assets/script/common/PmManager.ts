export default class PmManager {
    private static _platform: PmManager;
    private constructor() { }

    public static get platform(): PmManager {
        if (!this._platform) {
            this._platform = new PmManager();
        }
        return this._platform;
    }

    Get(key: string): string {
        let obj = cc.sys.localStorage.getItem(key);
        if (!obj) return null;
        let value = JSON.parse(obj);
        return value;
    };
    Set(key: string, value: string): void {
        cc.sys.localStorage.setItem(key, JSON.stringify(value));
        // cc.sys.localStorage.setItem(key, value);
    };
}

export const pm = PmManager.platform;