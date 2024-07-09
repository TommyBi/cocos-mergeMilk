import { GlobalDefines } from '../common/consts/GlobalDefines';
import { Logger } from './logger';

export class Utils {
    static async sleep(thisObj: any, duration: number) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this.invokeCallback(resolve);
            }, thisObj, duration);
        }).catch((reason) => { });
    }

    static invokeCallback(cb: Function, ...optionalParams: any[]) {
        if (cb && typeof (cb) === 'function') {
            cb.apply(null, optionalParams);
        }
    }

    static safeCallFunc(fn, thisObj) {
        if (fn && typeof fn === 'function') {
            fn.apply(thisObj);
        }
    }

    // Returns a random integer between min (included) and max (excluded)
    static randomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    // Returns a random integer between min (included) and max (included)
    static randomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    static randomFloat(min, max) {
        return Math.random() * (max - min) + min;
    }

    static randomByList(rateList: Array<number>) {
        rateList.map((value, index, array) => (array[index] = ~~array[index - 1] + value));
        const r = this.randomIntInclusive(1, rateList[rateList.length - 1]);
        for (let i = rateList.length - 1; i >= 0; i--) {
            const cur = rateList[i];
            const last = ~~rateList[i - 1];
            if (last < r && r <= cur) {
                return i;
            }
        }

        return -1;
    }
    // 获得数组内的随机值
    static getRandomByArr(arr) {
        const index = this.randomInt(0, arr.length);
        return arr[index];
    }

    static modByLimit(num: number, limit: number) {
        return (num - 1) % limit + 1;
    }

    static isNullOrEmpty(str: string): boolean {
        return !str || str == '' || str == 'null';
    }

    static qrSceneOption(data: any): any {
        if (!data) {
            return {};
        }

        const scene = decodeURIComponent(data);
        const option = {};
        for (const t of scene.split('&')) {
            const l = t.split('=');
            option[l[0]] = l[1];
        }

        return option;
    }

    static formatTimeExt(sec: any, showHour = false) {
        if (~~sec <= 0) {
            return showHour ? '00时00分00秒' : '00分00秒';
        }

        const hour = Math.floor(sec / 3600).toString();
        const second = Math.floor(sec % 3600 % 60).toString();
        const minute = showHour ? Math.floor(sec % 3600 / 60) : Math.floor(sec / 60).toString();
        if (showHour) {
            const arr = [hour, minute, second].map((n) => (`${n}`[1] ? n : `0${n}`));
            return `${arr[0]}时${arr[1]}分${arr[2]}秒`;
        }

        const arr = [minute, second].map((n) => (`${n}`[1] ? n : `0${n}`));
        return `${arr[0]}分${arr[1]}秒`;
    }

    static formatMilTime(time) {
        if (time > 0) {
            const tmp = Math.ceil(time * 1000);
            return `${Math.floor(tmp / 1000)}″${tmp % 1000}`;
        }

        return '0″000';
    }

    static formatTime(sec: any, showHour = false) {
        if (~~sec <= 0) {
            return showHour ? '00:00:00' : '00:00';
        }

        const hour = Math.floor(sec / 3600).toString();
        const second = Math.floor(sec % 3600 % 60).toString();
        const minute = showHour ? Math.floor(sec % 3600 / 60) : Math.floor(sec / 60).toString();
        if (showHour) {
            return [hour, minute, second].map((n) => (`${n}`[1] ? n : `0${n}`)).join(':')
        }

        return [minute, second].map((n) => (`${n}`[1] ? n : `0${n}`)).join(':')
    }

    static formatTime_Date(sec: any, showYear: boolean) {
        const d = new Date(sec * 1000);
        // Logger.debug("-------", sec, d);
        const month = (d.getMonth() + 1).toString();
        // Logger.debug("--", month);
        const date = d.getDate();
        // Logger.debug("--", date);
        if (showYear) {
            const year = d.getFullYear().toString();
            return [year, month, date].map((n) => (`${n}`[1] ? n : `0${n}`)).join('.')
        }

        return [month, date].map((n) => (`${n}`[1] ? n : `0${n}`)).join('.')
    }

    static getWeekNumberNow(ss: number) {
        const now = new Date(ss);
        return this.getWeekNumber(now);
    }

    static getWeekNumber(d: Date) {
        // Copy date so don't modify original
        d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
        /*
         * Set to nearest Thursday: current date + 4 - current day number
         * Make Sunday's day number 7
         */
        d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
        // Get first day of year
        const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
        // Calculate full weeks to nearest Thursday
        const weekNo = Math.ceil((((d.getTime() - yearStart.getTime()) / 86400000) + 1) / 7);
        // Return array of year and week number
        return weekNo;
    }

    static getMonthM(y, m) { // 计算哪年哪月 有多少天 月份从1开始
        if (m == 4 || m == 6 || m == 9 || m == 11) return 30;
        if (m == 2) return (y % 4 == 0 && y % 100 != 0) || y % 400 == 0 ? 29 : 28;
        return 31;
    }

    /**
     * 当前本地时间戳
     */
    static getTimestamp() {
        return (new Date()).getTime();
    }

    /**
     *时间字任串传换成秒
     * timeStr:string "2020,8,27,0,0" 年，月，日，时，分
     */
    static getOSSTime(timeStr: string) {
        if (this.isEmpty(timeStr)) {
            return 0;
        }

        const arr = timeStr.split(',');

        const date: Date = new Date(parseInt(arr[0]), parseInt(arr[1]) - 1, parseInt(arr[2]), parseInt(arr[3]), parseInt(arr[4]), 0);
        const time = Math.floor(date.getTime() / 1000);
        return time;
    }

    static solveString(str: string, len: number): string {
        if (!str) {
            return '';
        }

        let currentlen = 0
        let currentStr = ''
        for (let i = 0; i < str.length; i++) {
            if (str.charCodeAt(i) > 127 || str.charCodeAt(i) == 94) {
                currentlen += 2
            } else {
                currentlen++
            }

            if (currentlen > len) {
                return `${currentStr}...`;
            }

            currentStr += str.charAt(i)
        }

        return currentStr;
    }

    // 获取中英文混合字符串长度
    public static mixedStrLen(str: string) {
        let strLen = 0;
        for (let i = 0; i < str.length; i++) {
            if (str.substr(i, 1).charCodeAt(0) > 255) {
                strLen += 2;
            } else {
                strLen++;
            }
        }

        return strLen;
    }

    static angleToRadian(angle: number): number {
        return angle * Math.PI / 180;
    }

    static updateNodeSpriteFrame(url: string, node: cc.Node, isFromNet: boolean = false, next: Function = undefined, ext: string = 'png') {
        if (Utils.isNullOrEmpty(url)) {
            return;
        }

        if (isFromNet) {
            if (!url.startsWith('https://')) {
                return;
            }

            cc.assetManager.loadRemote(url, { ext: `.${ext}` }, (err, texture: cc.Texture2D) => {
                if (err) {
                    console.error('[Utils updateNodeSpriteFrame isFromNet] url:', url, '/err:', err);
                    return;
                }

                if (!cc.isValid(node)) {
                    return;
                }

                Logger.debug('[Utils updateNodeSpriteFrame] texture:', texture);
                const spriteFrame = new cc.SpriteFrame(texture);
                const spr = node.getComponent(cc.Sprite);
                if (spr) {
                    spr.spriteFrame = spriteFrame;
                }

                if (!!next) {
                    next(spriteFrame);
                }
            });
        } else {
            cc.resources.load(url, cc.SpriteFrame, ((err, spriteFrame: cc.SpriteFrame) => {
                if (err) {
                    console.error('[Utils updateNodeSpriteFrame isNotFromNet] url:', url, '/err:');
                    return;
                }

                if (!cc.isValid(node)) {
                    return;
                }

                const spr = node.getComponent(cc.Sprite);
                if (spr) {
                    spr.spriteFrame = spriteFrame;
                }

                if (!!next) {
                    next(spriteFrame);
                }
            }));
        }
    }

    /**
     * 远程加载spine
     * 注：约定spine资源文件与所在文件夹名字统一
     */
    public static loadSpine(url: string, node: cc.Node, success?: Function, fail?: Function) {
        // let url = `${GameConfig.OSS_URL_BASE}${folder}/${name}`;
        cc.assetManager.loadRemote(`${url}.json`, (err, jsonAsset: cc.JsonAsset) => {
            if (err) {
                fail && fail('加载json失败');
                return;
            }

            Logger.debug('[加载Json] date:', (new Date()).getTime());
            cc.assetManager.loadRemote(`${url}.atlas`, (err, textAsset: cc.TextAsset) => {
                if (err) {
                    fail && fail('加载atlas失败');
                    return;
                }

                Logger.debug('[加载atlas] date:', (new Date()).getTime());
                cc.assetManager.loadRemote(`${url}.png`, (err, texture2D: cc.Texture2D) => {
                    if (err) {
                        fail && fail('加载png失败');
                        return;
                    }

                    Logger.debug('[加载png] date:', (new Date()).getTime());
                    const res = { skeletonJson: jsonAsset.json, atlasText: textAsset.text, textures: [texture2D], uuid: `${url}.json`, textureNames: [`${name}.png`] };
                    success && success(res);
                })
            })
        })
    }

    public static updateSpineRes(name: string, node: cc.Node, res: { skeletonJson: any, atlasText: string, textures: cc.Texture2D[], uuid: string, textureNames: string[] }) {
        let skeleton: sp.Skeleton = node.getComponent(sp.Skeleton);//
        if (!skeleton) {
            skeleton = node.addComponent('sp.Skeleton');
        }

        const asset = new sp.SkeletonData();
        asset['_uuid'] = res.uuid;
        asset.skeletonJson = res.skeletonJson
        asset.atlasText = res.atlasText;
        asset.textures = res.textures;
        asset['textureNames'] = res.textureNames;
        skeleton.skeletonData = asset;
        skeleton.setAnimation(0, name, true);
    }

    static secondsToClock(seconds) {
        seconds = Number(seconds);
        const secs = seconds % 60;
        let mins = (seconds - secs) / 60;
        const hours = Math.floor(mins / 60);
        if (hours > 0) {
            mins %= 60;
        }

        return `${hours > 9 ? hours : `0${hours}`}:${mins > 9 ? mins : `0${mins}`}:${secs > 9 ? secs : `0${secs}`}`;
    }

    static isEmpty(v) { return v == undefined || v == '' || v == null }

    public static loadSimpleBone(folder: string, name: string, next: Function) {
        const path = `bones/${folder}/`;
        const resources = [
            `${path + name}_ske`,
            `${path + name}_atlas`,
            `${path + name}_tex`,
        ];

        cc.resources.load(resources, (err, assets) => {
            if (err) {
                Logger.debug('[Utils loadSimpleBone] 加载失败:', folder, '/', name);
                return;
            }

            next(assets[0], assets[1]);
        });
    }

    /**
     * 加载主角龙骨资源
     * @param name
     * @param isHomeCourt 是否主场
     */
    public static loadPlayerBone(name: string, isHomeCourt: boolean, success: Function, fail?: Function) {
        const path = 'bones/finn/';
        const resources = [
            path + name + (isHomeCourt ? '_ske' : '_pk_ske'),
            path + name + (isHomeCourt ? '_atlas' : '_pk_atlas'),
            path + name + (isHomeCourt ? '_tex' : '_pk_tex'),
        ];

        cc.resources.load(resources, (err, assets) => {
            if (err) {
                Logger.debug('[Utils loadSimpleBone] 加载失败:', name);
                fail && fail(`加载失败 ${name}`);
                return;
            }

            success(assets[0], assets[1], assets[2]);
        });
    }

    static async releaseRes(asset: cc.Asset) {
        cc.assetManager.releaseAsset(asset);
    }

    /**
     * 预制件加载
     * @param path
     */
    static async loadPefab(path: string, needRelease: boolean = false): Promise<any> {
        return new Promise(async (resolve, reject) => {
            /*
             * if (this.prefab_need_release[path]) {
             *     resolve(this.prefab_need_release[path]);
             *     return;
             * }
             */
            const load = async () => new Promise((rsv, rjt) => {
                const tot = setTimeout(() => {
                    Logger.debug(`[Utils oadPefab] ${path}加载超时`)
                    rjt(`oadPefab 连接超时${path}`);
                }, 10000);
                cc.resources.load(path, (err, res) => {
                    clearTimeout(tot);

                    if (err) {
                        rjt(err);
                    } else {
                        rsv(res);
                    }
                });
            })

            await load().then((res) => {
                // }
                resolve(res);
            })
                .catch((err) => {
                    reject(err);
                });
        });
    }

    /**
     * 工具方法：同步读取json文件 返回JS对像
     * @param fileName
     */
    static async loadConfigFromAli(url: string) {
        /*
         * baseUrl = baseUrl || GameConfig.OSS_URL_BASE;
         * let url = `${baseUrl}` + fileName + ".json?" + Math.random();
         */
        return new Promise((resolve, reject) => {
            cc.assetManager.loadRemote(url, (err, jsonAsset: cc.JsonAsset) => {
                if (err) {
                    Logger.debug(`[DataManager loadConfig[${url}]] err:`, err);
                    reject(`加载失败${url}`);
                    return;
                }

                resolve(jsonAsset.json);
            })
        });
    }

    /**
     * 判断给定字符串是否可转换为数字
     * 如果给定参数为null undefine 则视其为0
     * @param str
     */
    static isNum(value) {
        if (value === '0' || value === undefined || value === null) {
            return true;
        }

        const n = Number(value)
        if (!isNaN(n)) {
            return true;
        }

        return false;
    }

    // 获取时间戳 秒
    static getCurTime() {
        return Math.floor(this.getCurMillisecond() / 1000)
    }

    static getCurMillisecond() {
        return (new Date()).getTime();
    }

    static getymd(sec: number): { year: number, month: number, date: number, hour: number, minute: number, second: number, milliseconds: number } {
        const d = new Date(sec * 1000);
        const month = (d.getMonth() + 1);
        const date = d.getDate();
        const year = d.getFullYear();
        const hour = d.getHours();
        const minute = d.getMinutes();
        const second = d.getSeconds();
        const milliseconds = d.getMilliseconds();
        return { year, month, date, hour, minute, second, milliseconds };
    }
    static isToday(sec: number) {
        const curTime = this.getCurTime();
        const inputParm = Utils.getymd(sec);
        const curParm = Utils.getymd(curTime);
        if (inputParm.year != curParm.year) {
            return false;
        }

        if (inputParm.month != curParm.month) {
            return false;
        }

        if (inputParm.date != curParm.date) {
            return false;
        }

        return true;
    }

    /*
     * static getDayBeginTime(sec: number) {
     *     let parm = Utils.getymd(sec);
     *     let tmpDate = new Date();
     *     tmpDate.setFullYear(parm.year);
     *     tmpDate.setMonth(parm.month - 1);
     *     tmpDate.setDate(parm.date);
     *     tmpDate.setHours(0);
     *     tmpDate.setSeconds(0);
     *     tmpDate.setMinutes(0);
     *     tmpDate.setMilliseconds(0);
     *     return tmpDate.getTime() / 1000;
     * }
     */

    static getDayBeginTime(milliseconds: number) {
        const tmpDate = new Date(milliseconds);
        tmpDate.setHours(0);
        tmpDate.setSeconds(0);
        tmpDate.setMinutes(0);
        tmpDate.setMilliseconds(0);
        return tmpDate.getTime();
    }

    static waiting(time: number): Promise<void> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, time);
        });
    }
    // 获取剩余时间
    secondsToClock(seconds) {
        seconds = Number(seconds);
        const secs = seconds % 60;
        let mins = (seconds - secs) / 60;
        const hours = Math.floor(mins / 60);
        if (hours > 0) {
            mins %= 60;
        }

        return `${hours > 9 ? hours : `0${hours}`}:${mins > 9 ? mins : `0${mins}`}:${secs > 9 ? secs : `0${secs}`}`;
    }

    /**
     * 工具方法：同步读取json文件 返回JS对像
     * @param fileName
     */
    static async loadConfig(fileName: string) {
        const url = `config/${fileName}`;
        /*
         * return new Promise((resolve, reject) => {
         *     cc.resources.load(url, (err, jsonAsset: cc.JsonAsset) => {
         *         if (err) {
         *             Logger.debug(`[DataManager loadConfig[${fileName}]]  err:`, err);
         *             reject();
         *         }else{
         *             resolve(jsonAsset.json);
         *         }
         *     });
         */

        // });
        try {
            const rst = await this.LoadRes<cc.JsonAsset>(url);
            return rst;
        } catch (err) {
            return undefined;
        }
    }

    public static LoadRes<T extends cc.Asset>(path: string): Promise<T> {
        return new Promise((resolve, reject) => {
            cc.resources.load(path, (err: any, res: T) => {
                if (err) {
                    reject(err.message || err);
                } else {
                    resolve(res);
                }
            });
        });
    }

    private static _btnLock: boolean = false;
    static btnLock(time: number = 500): boolean {
        if (this._btnLock) {
            return true;
        }

        this._btnLock = true;
        setTimeout(() => {
            this._btnLock = false;
        }, time);
        return false;
    }

    public static removeNode(node: cc.Node) {
        if (!node || !node.parent) {
            return;
        }

        node.removeFromParent();
        node.destroy();
        // node.removeFromParent();
    }

    public static removeAllChildren(node: cc.Node) {
        if (!node) {
            return;
        }

        // node.destroyAllChildren();
        node.removeAllChildren();
    }

    /**
     * 置灰
     */
    public static toGrey(spr: cc.RenderComponent) {
        if (!spr) return;
        const matName = '2d-gray-sprite';
        const variant1 = cc.MaterialVariant.getBuiltinMaterial(matName);
        spr.setMaterial(0, variant1);
    }

    /**
     * 恢复彩色
     */
    public static toColor(spr: cc.RenderComponent) {
        if (!spr) return;
        const matName = '2d-sprite';
        const variant1 = cc.MaterialVariant.getBuiltinMaterial(matName);
        spr.setMaterial(0, variant1);
    }

    /**
     * 指定节点下所有图片 置灰
     */
    public static toGreyNode(node: cc.Node) {
        if (!node) return;
        const sprs = node.getComponentsInChildren(cc.RenderComponent);
        for (let i = 0; i < sprs.length; i++) {
            const eachSpr = sprs[i];
            this.toGrey(eachSpr);
        }
    }
    /**
     * 指定节点下所有图片 置灰
     */
    public static toColorNode(node: cc.Node) {
        if (!node) return;
        const sprs = node.getComponentsInChildren(cc.RenderComponent);
        for (let i = 0; i < sprs.length; i++) {
            const eachSpr = sprs[i];
            this.toColor(eachSpr);
        }
    }

    // 洗牌
    public static shuffle(arr) {
        let len = arr.length;
        let randomIndex; let
            temp;
        while (len) {
            randomIndex = Math.floor(Math.random() * (len--));
            temp = arr[randomIndex];
            arr[randomIndex] = arr[len];
            arr[len] = temp;
        }

        return arr;
    }

    public static shuffle2(arr: Array<number>) {
        let arr1: Array<number> = [];
        let arr2: Array<number> = [];

        const h = arr.length / 2;
        for (let i = 0; i < arr.length; i++) {
            if (i <= h) {
                arr1.push(arr[i]);
            } else {
                arr2.push(arr[i]);
            }
        }

        arr1 = this.shuffle(arr1);
        arr2 = this.shuffle(arr2);
        return [...arr2, ...arr1];
    }
    // 去重并移除逗号
    static ilterRepeatStr(str) {
        const rs = [].filter.call(str, (s, i, o) => o.indexOf(s) == i).join('');
        return rs.toString().replace(/,/g, '');
    }

    static getValue(root: any, key: string) {
        const keys = key.split('.');
        try {
            let value = root[keys[0]];
            for (let i = 1; i < keys.length; i++) {
                value = value[keys[i]];
            }

            return value;
        } catch (err) {
            return undefined;
        }
    }

    /**
     * 停留在动画的第一帧
     * @param anim
     * @param name
     */
    static animationGotoStart(anim: cc.Animation, name: string | number): void {
        let anim_name = name;
        if (typeof name === 'number') {
            anim_name = anim.getClips()[name].name;
        }

        anim.play(String(anim_name), 0);
        anim.sample(String(anim_name));
        anim.stop();
    }
    /**
     * 停留在动画的最后一帧
     * @param anim
     * @param name
     */
    static animationGotoEnd(anim: cc.Animation, name: string | number): void {
        let anim_key = name;
        let anim_value = name;
        if (typeof name === 'string') {
            for (const key in anim.getClips()) {
                if (anim.getClips()[key].name === name) {
                    anim_key = key;
                    break;
                }
            }
        } else if (typeof name === 'number') {
            anim_value = anim.getClips()[name].name;
        }

        const anim_time = anim.getClips()[anim_key].duration;
        anim.play(String(anim_value), anim_time);
    }

    /**
     * 指定日期的星座信息
     * @param m 月份 1~
     * @param d 日期 1~
     * @returns {index:星座编号(0~11) sZodiac:星座名 sBetween:所在日期区间}
     */
    public static GetZodiac(m: number, d: number): { index: number, sZodiac: string, sBetween: string } {
        const s = '魔羯水瓶双鱼牡羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯';
        const arr = [20, 19, 21, 21, 21, 22, 23, 23, 23, 23, 22, 22];
        let index = m - (d < arr[m - 1] ? 1 : 0);
        index = index == 12 ? 0 : index
        const sZodiac = `${s.substr(index * 2, 2)}座`;
        const preMonth = (m - 2) < 0 ? 11 : +(m - 2);
        const backMonth = (m + 1) > 12 ? 1 : +(m + 1);
        const front = (d < arr[m - 1] ? (`${preMonth + 1}.${arr[preMonth]}`) : (`${m}.${arr[m - 1]}`));
        const back = (d < arr[m - 1] ? `${m}.${arr[index] - 1}` : `${backMonth}.${arr[backMonth - 1] - 1}`);
        const sBetween = `${front}-${back}`

        // console.log((index + " " + sZodiac + " " + sBetween));

        return { index, sZodiac, sBetween }
    }

    /**
     * 基于某模块激活时间后的 周几 1~
     */
    static getGameDay(timeStart: number) {
        timeStart = Utils.getDayBeginTime(timeStart);
        const timeCur = Utils.getDayBeginTime(Utils.getCurTime());

        const second_of_week = (timeCur - timeStart) % (7 * GlobalDefines.Second_Day);
        const day = Math.floor(second_of_week / GlobalDefines.Second_Day) + 1;
        return day;
    }

    /**
     * 基于某模块激活时间后的 第几周 0~
     */
    static getWeek(theTime: number, timeStart: number) {
        timeStart = Utils.getDayBeginTime(timeStart);
        theTime = Utils.getDayBeginTime(theTime);

        const week = Math.floor((theTime - timeStart) / (7 * GlobalDefines.Second_Day * 1000));
        return week;
    }

    public static twoPointDistance(pos1, pos2) {       // 从form的表单中分别提取两个点的横、纵坐标
        const x1 = pos1.x;   // 第一个点的横坐标
        const y1 = pos1.y;   // 第一个点的纵坐标
        const x2 = pos2.x;   // 第二个点的横坐标
        const y2 = pos2.y;   // 第二个点的纵坐标
        const xdiff = x2 - x1;            // 计算两个点的横坐标之差
        const ydiff = y2 - y1;            // 计算两个点的纵坐标之差
        return Math.pow((xdiff * xdiff + ydiff * ydiff), 0.5);   // 计算两点之间的距离，并将结果返回表单元素
    }

    static adaptiveNoteLayout() {
        const winSize = cc.winSize;// 获取当前游戏窗口大小
        cc.log(`--当前游戏窗口大小  w:${winSize.width}   h:${winSize.height}`);

        const viewSize = cc.view.getFrameSize();
        cc.log(`--视图边框尺寸：w:${viewSize.width}  h:${viewSize.height}`);

        const canvasSize = cc.view.getCanvasSize();// 视图中canvas尺寸
        cc.log(`--视图中canvas尺寸  w:${canvasSize.width}  H:${canvasSize.height}`);

        const visibleSize = cc.view.getVisibleSize();
        cc.log(`--视图中窗口可见区域的尺寸 w:${visibleSize.width}   h:${visibleSize.height}`);

        const designSize = cc.view.getDesignResolutionSize();
        cc.log(`--设计分辨率：${designSize.width}    h: ${designSize.height}`);
    }

    public static findNodeByName(root, name) {
        if (root) {
            let widget = root.getChildByName(name);
            if (widget) {
                return widget
            }

            const children = root.children
            for (const c of children) {
                widget = Utils.findNodeByName(c, name)
                if (widget) {
                    return widget
                }
            }

            return null
        }

        return null
    }

    static getAngle(start, end) {
        // 计算出朝向
        const dx = end.x - start.x;
        const dy = end.y - start.y;
        const dir = cc.v2(dx, dy);

        // 根据朝向计算出夹角弧度
        const angle = dir.signAngle(cc.v2(1, 0));

        // 将弧度转换为欧拉角
        const degree = angle / Math.PI * 180;

        return degree
    }

    // 把一个节点下的坐标转成另一个节点的坐标
    static convertNodeToNodeSpace(node, targetParent) {
        if (cc.isValid(node)) {
            if (!!node.parent) {
                const wpos = node.parent.convertToWorldSpaceAR(node.getPosition());

                if (cc.isValid(targetParent)) {
                    return targetParent.convertToNodeSpaceAR(wpos);
                }
            }
        }

        cc.log('坐标转换有问题');
        return cc.v2(0, 0);
    }
    static randomByWeightList(weightArr: Array<number>) {
        let allWeight = 0;
        for (let i = 0; i < weightArr.length; i++) {
            allWeight += weightArr[i];
        }

        const rd = Utils.randomFloat(0, allWeight);

        let tmp = 0;
        for (let i = 0; i < weightArr.length; i++) {
            tmp += weightArr[i];
            if (rd < tmp) {
                return i;
            }
        }

        return 0;
    }

    // 数组copy
    static arrayCopy(sourceArr: Array<any>, destArr: Array<any>) {
        if (!!sourceArr && !!destArr) {
            for (let index = 0; index < sourceArr.length; index++) {
                const element = sourceArr[index];
                destArr.push(element);
            }
        }
    }

    /**
     * 改变节点颜色
     * @param node
     * @param color
     */
    static changeColor(node: cc.Node, color: string) {
        node.color = new cc.Color().fromHEX(color);
    }

    // 解密
    static decodeAtoB(value) {
        return decodeURIComponent(atob(value));
    }

    // 加密
    static encodeBtoA(value) {
        return btoa(encodeURIComponent(value));
    }

    /**
     * 简单生成一个唯一ID
     * @returns
     */
    static RandomIdString: string = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_'
    static nextRandomId() {
        /*
         * let date = (new Date()).getTime();//获取时间戳
         * if (isSimple) {
         *     return date + "";
         * }
         */
        const len = 8;// 机器码有多少位
        let pwd = '';// 定义空变量用来接收机器码
        for (let i = 0; i < len; i++) {
            pwd += Utils.RandomIdString.charAt(Math.floor(Math.random() * Utils.RandomIdString.length));// 循环机器码位数随机填充
        }

        return pwd;
    }

    static distanceByV2(a: cc.Vec2, b: cc.Vec2) {
        const distance = a.sub(b).mag();
        return distance;
    }
    static distanceByNode(a: cc.Node, b: cc.Node) {
        const p1 = a.getPosition();
        const p2 = b.getPosition();
        const distance = p1.sub(p2).mag();
        return distance;
    }
    // 根据长度获取随机概率数组
    static getRandomRates(len) {
        const probabilities = Array.from({ length: len }, () => Math.random());
        const sum = probabilities.reduce((a, b) => a + b, 0);
        return probabilities.map((p) => p / sum);
    }
}
