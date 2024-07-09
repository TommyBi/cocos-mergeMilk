
const { ccclass, property } = cc._decorator;

export enum TipIco {
    NetErr = 0,
    Error,
    Tip,
    Flower,
    Coin,
}

@ccclass
export default class Toast extends cc.Component {
    public static Prefab_Name = "prefab/common/toast/toast";
    public static prefab: any = null;
    public static async preLoad() {
        Toast.prefab = await Toast.loadPefab(Toast.Prefab_Name).catch(err => {
            throw err;
        });
    }

    public static showNum(tipLayer: cc.Node, title: string, ico: TipIco, num: string) {
        this._show(tipLayer, title, ico, num + "");
    }

    public static show(tipLayer: cc.Node, msg: string, ico: TipIco = TipIco.Tip) {
        this._show(tipLayer, msg, ico, undefined, 2);
    }
    /**
     * 
     * @param duration 秒
     */
    public static async _show(tipLayer: cc.Node, msg: string, iconIndex: number, num?: string, duration: number = 2) {
        if (!this.prefab) {
            await this.preLoad();
        }
        let instance: cc.Node = cc.instantiate(Toast.prefab);
        let t: Toast = instance.getComponent(Toast);
        t._show(msg, iconIndex, num, duration);
        instance.parent = tipLayer;
        return instance;
    }
    /**
     * 预制件加载
     * @param path 
     */
    static async loadPefab(path: string, needRelease: boolean = false): Promise<any> {
        return new Promise(async (resolve, reject) => {
            // if (this.prefab_need_release[path]) {
            //     resolve(this.prefab_need_release[path]);
            //     return;
            // }
            let load = async () => {
                return new Promise((rsv, rjt) => {
                    var tot = setTimeout(() => {
                        rjt("oadPefab 连接超时" + path);
                    }, 10000);
                    cc.resources.load(path, (err, res) => {
                        clearTimeout(tot);

                        if (err) {
                            rjt(err);
                        } else {
                            rsv(res);
                        }
                    });
                });
            }

            let times = 3;
            while (times > 0) {
                await load().then((res) => {
                    times = 0;
                    // if (needRelease) {
                    //     this.prefab_need_release[path] = res;
                    // }
                    resolve(res);
                }).catch(err => {
                    times--;
                    if (times <= 0) {
                        reject(err);
                    }
                });
            }
        });
    }
    @property([cc.SpriteFrame])
    icon_frames: Array<cc.SpriteFrame> = [];

    @property(cc.Label)
    lb_msg: cc.Label = null;

    @property(cc.Sprite)
    img_icon: cc.Sprite = null;

    @property(cc.Label)
    lb_num: cc.Label = null;

    public startTime: number = 0;
    public timer;
    public duration: number = 2;

    public iconIndex: number = 0;

    public _show(msg: string, iconIndex: number, num: string, duration: number = 2) {
        this.iconIndex = iconIndex;
        this.startTime = (new Date()).getTime();
        if (iconIndex < 0) {
            this.img_icon.node.active = false;
            this.node.width = 354;
        } else {
            this.img_icon.node.active = true;
            this.img_icon.spriteFrame = this.icon_frames[iconIndex];
            this.node.width = 400;
        }
        if (!num) {
            this.lb_num.node.active = false;
            this.node.height = 84;
        } else {
            this.lb_num.node.active = true;
            this.lb_num.string = num;
            this.node.height = 154;
        }
        this.duration = duration;
        this.lb_msg.string = msg;
        this.node.y = -50;
        this.node.opacity = 0;

    }

    onLoad() {
        cc.tween(this.node).to(0.3, { y: 0, opacity: 255 }, { easing: cc.easing.sineOut }).start();

        this.timer = setTimeout(() => {
            cc.tween(this.node)
                .to(0.3, { y: this.node.y + 50, opacity: 0 }, { easing: cc.easing.sineOut })
                .call(() => {
                    this.node.removeFromParent();
                    this.node.destroy();
                })
                .start();
        }, this.duration * 1000);
    }
    onDestroy() {
        clearTimeout(this.timer);
    }
}
