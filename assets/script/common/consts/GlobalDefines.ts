

export class GlobalDefines {
    //每一天的秒数
    static Second_Day = 24 * 60 * 60;
    static isIos: boolean = true;
    //屏幕相关
    static PixelRatio = 2;
    static WindowHeight = 667;
    static WindowWidth = 375;
    static MenuButtonLogic = {
        width: 174,
        height: 64, //64
        top: 16 * 2,
        right: 730,
        bottom: 80,
        left: 556
    };
    //wx.getSystemInfoSync时赋值
    static SDKVersion: string = "";
    static platform: string = "";

    static Design_Width: number = 750;
    static Design_Height: number = 1334;

    public static get ScreenWidth() {
        return this.Design_Width;
    }

    public static get ScreenHeight() {
        let rate = this.Design_Width / this.WindowWidth;
        return this.WindowHeight * rate;
    }

    public static get SafeAreaHeight(){
        return this.ScreenHeight - this.MenuButtonLogic.top - this.MenuButtonLogic.height;
    }

    public static get wsRate() {
        return this.WindowWidth / this.ScreenWidth;
    }

}
//资源加载状态
export enum LoadStatus {
    Doing = -1,
    Success,
    GameOut,
}

