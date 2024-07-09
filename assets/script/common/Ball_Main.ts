import { bc } from "../game/ui/bl_Config";
import BundleResourceList from "../game/common/BundleResourceList";
import { ui } from "../game/common/UIManager";
import LoadingScene from "../game/loading/LoadingScene";
import { initSource } from "../lang/LanguageData";
import { sdk } from "../utils/SDKManager";
import { Utils } from "../utils/Utils";
import { sd } from "./AudioManager";
import HurryLoading from "./comp/HurryLoading";
import SceneLoadingUI from "./comp/SceneLoadingUI";
import { GlobalDefines } from "./consts/GlobalDefines";
import { dm } from "./DataManager";
import { sm } from "./SceneManager";

const { ccclass, property } = cc._decorator;
@ccclass

export default class Ball_Main extends cc.Component {
    public static _instance: Ball_Main;
    public static get instance(): Ball_Main {
        return this._instance;
    }

    @property(cc.Node)
    uiNode: cc.Node = null;

    // 加载等待图标
    @property(HurryLoading)
    hurryLoading: HurryLoading = null;

    @property(cc.Camera)
    uiCamera: cc.Camera = null;

    @property(cc.Node)
    smNode: cc.Node = null;

    @property(BundleResourceList)
    resList: BundleResourceList = null;

    @property(cc.JsonAsset)
    config: cc.JsonAsset = null;

    //本地与服务器的时间差 秒
    public timeOffset_sec: number = 0;
    //本地与服务器的时间差 毫秒
    private timeOffset_msec: number = 0;

    private timeout_crossday: any = undefined;

    public isInited: boolean = false;

    public entryData: any = undefined;

    public toBackgroundOSTime: number;

    public playtime: number;

    async onShow(res: any) {
        this.entryData = res;

        sd.resumeAll();

        if (!this.isInited) {
            return;
        }
        // wall.loadTask();
    }

    async onHide() {
        sd.pauseAll();
    }

    pase(country) {
        const jsonContent = this.config.json.language;
        //开始加密文本
        // for (let country in jsonContent) {
        let countryConfig = jsonContent[country]
        for (let key in countryConfig) {
            let text = countryConfig[key]
            console.log("开始解密文件==>", text)
            countryConfig[key] = decodeURIComponent(atob(text));
            console.log("解密后==>", countryConfig[key])
        }
        // }

        // 将修改后的对象转换回JSON字符串
        // const modifiedJson = JSON.stringify(jsonContent, null, 2);
        return jsonContent[country];
    }

    // 游戏启动
    onLoad() {

        window.addEventListener("unhandledrejection", function (e) {
            e.preventDefault();
            return true;
        });

        ui.onLoad(this.uiNode, this.hurryLoading);

        // 挂载sceneManager操作的根节点
        sm.onLoad(this.smNode);

        // 获取国家
        bc.country = sdk.ball_getCountry();

        // 标记语言
        let langue;
        switch (bc.country) {
            case '2':
                langue = this.pase("pt");
                initSource("pt", langue);
                // initSource("pt", this.config.json.language['pt']);
                bc.moneyAbbr = "R$";
                break;
            case "10":
                langue = this.pase("en");
                initSource("en", langue);
                bc.moneyAbbr = "£";
                break;
            case "11":
                langue = this.pase("en");
                initSource("en", langue);
                bc.moneyAbbr = "R";
                break;
            case "12":
                langue = this.pase("en");
                initSource("en", langue);
                bc.moneyAbbr = "₦";
                break;
            case "13":
                // initSource("in", this.config.json.language['in']);
                langue = this.pase("in");
                initSource("in", langue);
                bc.moneyAbbr = "₹";
                break;
            default:
                langue = this.pase("en");
                initSource("en", langue);
                bc.moneyAbbr = "$";
                break;
        }
    }

    start() {
        this.gameStart();
        // setTimeout(() => {
        //     sd.playBGM(`sounds/bg`,true);
        // }, 200);
    }

    /**
    * 微信监听好友定向分享回调
    * 返回分享成功与否
    * @param res 
    */
    onShareMessageToFriend(res: { success: boolean, errMsg: string }) {
        // let event = new EventShareMessageToFriend();
        // event.res = res;
        // GlobalEvent.dispatchEvent(event);
        // Logger.debug("[Ball_Main onShareMessageToFriend] res:", res);
    }

    async gameStart() {
        // 获取时间（好像现在没法先有什么引用的地方）
        this.playtime = Utils.getCurTime();

        // 场景根节点的引用
        Ball_Main._instance = this;

        // 延迟调用
        setTimeout(() => {

            // 添加游戏的各个层级节点，作为游戏场景根节点的子节点存在
            ui.checkNode();

            // 加载场景初始化
            let loadingScene: LoadingScene = sm.node.getComponentInChildren(LoadingScene);
            loadingScene.startLoading();
        }, 0);
    }

    async initGame() {
        SceneLoadingUI.setProgress(0);

        // dataManager 开始准备 - 登录接口调用
        await dm.onInit();
        SceneLoadingUI.setProgress(0.6);

        Utils.waiting(0);
        SceneLoadingUI.setProgress(0.7);

        Utils.waiting(0);
        SceneLoadingUI.setProgress(0.75);

        Utils.waiting(0);
        SceneLoadingUI.setProgress(0.8);

        ui.onInit();

        Utils.waiting(0);
        SceneLoadingUI.setProgress(0.85);

        sd.init();

        // await topres.onLoad(ui.getLayer(UILayer.Topres))

        Utils.waiting(0);
        SceneLoadingUI.setProgress(0.9);
        Utils.waiting(0);
        //进度条延时
        // for (let i = 1; i <= 10; i++) {
        //     SceneLoadingUI.setProgress(i / 10);
        //     await Utils.waiting(20);
        // }
        this.registerCrossEvent();
    }

    public GetScreenWHRate() {
        var screenSize = cc.view.getFrameSize();
        var currentScreenRate = screenSize.width / screenSize.height;
        return currentScreenRate;
    }

    //获取服务器时间戳 秒
    getServerTime() {
        return Math.floor((new Date()).getTime() / 1000) + this.timeOffset_sec;
    }

    //获取服务器时间戳 毫秒
    getServerTimeMsec() {
        return (new Date()).getTime() + this.timeOffset_msec;
    }

    /**
     * 时间同步检测
     * @param serverTime 
     */
    timeCheck(serverTime: number) {
        let curLocationTime = (new Date()).getTime();
        this.timeOffset_sec = serverTime - Math.floor(curLocationTime / 1000);
        this.timeOffset_msec = serverTime * 1000 - curLocationTime;

        return Math.abs(this.timeOffset_sec) < GlobalDefines.Second_Day;
    }

    /**
     * 注册跨天回调
     */
    registerCrossEvent() {
        //同步时间后 注册跨天回调
        let curTime = this.getServerTimeMsec();
        let todyStartTime = Utils.getDayBeginTime(curTime);
        let tomorryStartTime = todyStartTime / 1000 + GlobalDefines.Second_Day;
        let offset = Utils.randomInt(0, 60 * 1);//1分钟错峰时间
        let deta = tomorryStartTime - curTime / 1000 + offset;
        clearTimeout(this.timeout_crossday);
        this.timeout_crossday = setTimeout(() => {
            this.onCrossDay();
        }, deta * 1000);
    }

    /**
     * 跨天处理
     */
    onCrossDay() {
        //跨天重登录
        sm.switchScene(LoadingScene);
    }


}

