import { Utils } from "../../utils/Utils";
import { dm } from "../../common/DataManager";
import { GlobalDefines } from "../../common/consts/GlobalDefines";
import bl_ball from "./bl_ball";
import { GlobalEvent } from "../../common/Global";
import { EventBallClick, EventChangeTop } from "../../common/GlobalEvents";
import { Logger } from "../../utils/logger";
import { bc } from "./bl_Config";
import bl_tipsPanel from "./bl_tipsPanel";
import { RewardUtils } from "../../common/comp/reward/RewardUtils";
import { sm } from "../../common/SceneManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class bl_Logic extends cc.Component {

    @property(cc.Node)
    ico: cc.Node = null;

    bl_list = [];

    bl_dropXs = [];

    bl_cloneDropx = [];

    bl_scList: bl_ball[] = [];

    isComposeIng = false;
    onLoad() {
        this.bl_dropXs = this.bl_initDropX(-this.node.width / 2 + 200, this.node.width / 2 - 200, 10);
    }

    onEnable() {
        GlobalEvent.on(EventBallClick.NAME, this.onEventBallClick, this);
    }
    onDisable() {
        GlobalEvent.off(EventBallClick.NAME, this.onEventBallClick, this);
    }


    start() {

    }
    async init() {
        this.bl_list = dm.player.arr;
        Utils.arrayCopy(this.bl_dropXs, this.bl_cloneDropx);
        for (let i = 0; i < this.bl_list.length; i++) {
            let point = this.bl_getPoint(this.bl_list[i]);
            let node = await this.bl_createBall(this.bl_list[i], point, true);
            let scr = node.getComponent(bl_ball)
            this.bl_scList.push(scr);
        }
    }


    //获得筹码预制件
    async bl_createBall(idx, point, isDrop?) {
        let url = 'prefab/game/ball/' + idx;
        let p = await Utils.loadPefab(url);
        let b: cc.Node = cc.instantiate(p);
        b.parent = this.node;
        let scr = b.getComponent(bl_ball)
        // this.bl_scList.push(scr);
        scr.init(idx, isDrop);
        b.setPosition(point);

        return b;
    }

    bl_getPoint(idx) {
        let y = GlobalDefines.ScreenHeight / 2;
        y += Math.random() * 200 * idx;
        let x = Utils.getRandomByArr(this.bl_cloneDropx);
        return cc.v2(x, y);
    }

    bl_initDropX(min, max, count) {
        const totalRange = max - min + 1;
        const averageSpace = totalRange / count; // 每个点应该占据的平均空间  
        // const remainder = totalRange % count; // 无法均匀分配的余数  

        let points = [];
        let currentPoint = min;

        // 首先分配完整的平均空间  
        for (let i = 0; i < count; i++) {
            points.push(currentPoint);
            currentPoint += averageSpace;
        }

        let arr1 = points.filter(value => value >= 0);
        let arr2 = points.filter(value => value < 0);

        arr1.sort((a, b) => a - b);
        arr2.sort((a, b) => b - a);

        points = arr1.concat(arr2);

        return points;
    }

    currBalls: bl_ball[] = [];
    currTarget: bl_ball;
    onEventBallClick(evt: EventBallClick) {
        if (this.isComposeIng) return;
        let arr = this.bl_scList.filter((value) => {
            return value.rId == evt.rId;
        })
        if (arr.length > 0) {
            this.currBalls = this.bl_scList.filter((value) => {
                return value.id == evt.id;
            })
            this.currTarget = arr[0];
            let alls = this.bl_findBall();
            if (alls.size == 0) return;
            let arr1 = Array.from(alls);
            arr1.sort((a, b) => {
                let d1 = Utils.distanceByNode(this.currTarget.node, a.node)
                let d2 = Utils.distanceByNode(this.currTarget.node, b.node)
                return d1 - d2;
            })
            arr1.unshift(this.currTarget);
            this.bl_compose(arr1)
            Logger.debug("合成：", arr1);
        }
    }

    async bl_compose(arr: bl_ball[]) {
        this.isComposeIng = true;
        // let targets: bl_ball[] = arr.filter((value, index) => {
        //     return index % 2 == 0;
        // })
        let targets = [];
        let deletes = [];
        arr.forEach((element, index) => {
            if (index % 2 == 0 && index != arr.length - 1) {
                targets.push(element);
            } else {
                deletes.push(element);
            }
        });

        for (let i = 0; i < deletes.length; i++) {
            deletes[i].delete();
        }
        deletes = null;
        // if (targets.length % 2 == 0) {
        //     let needDelete = targets[targets.length - 1];
        //     targets.splice(targets.length - 1, 1);
        //     needDelete.delete();
        //     targets.unshift(this.currTarget);
        // }
        this.bl_resetBallList();
        let newList = [];
        for (let i = 0; i < targets.length; i++) {
            let node: cc.Node = targets[i].node
            if (node) node.removeComponent(cc.RigidBody);
            let point = targets[i].node.getPosition();
            // this.bl_createBall(targets[i].id * 2, point);

            let newNode = await this.bl_createBall(targets[i].id + 1, point);
            let scr = newNode.getComponent(bl_ball);
            this.bl_scList.push(scr);
            newNode.scale = 0;
            newList.push(scr);
        }

        let num = 0;
        for (let i = 0; i < targets.length; i++) {
            targets[i].playHide(() => {
                num++;
                if (num >= targets.length) {
                    for (let i = 0; i < newList.length; i++) {
                        newList[i].playShow();
                    }
                    targets = null;


                    this.scheduleOnce(() => {
                        this.bl_resetBallList();

                        if (newList[0].id == bc.maxId) {
                            for (let i = 0; i < newList.length; i++) {
                                let best = newList[i];
                                best.removeRigidbody();
                                this.flyBest(best.node);
                            }
                        } else {
                            if (newList.length > 1) {
                                this.bl_compose(newList);
                            } else {
                                bl_tipsPanel.Show(21);
                                this.flyIco();
                                this.isComposeIng = false;
                                this.bl_drop();
                                this.bl_cacheList();
                            }
                        }
                    }, .2)
                }
            });
        }

    }

    bl_cacheList() {
        let arr = [];
        for (let i = 0; i < this.bl_scList.length; i++) {
            arr.push(this.bl_scList[i].id);
        }
        dm.player.arr = arr;
    }

    bl_resetBallList() {
        this.currBalls = [];
        let arr = this.bl_scList.filter((value) => {
            return value && !value.isDestory;
        })
        this.bl_scList = arr;
    }

    bl_findBall() {
        let nearbyPoints = this.bl_getCanBall(this.currTarget);
        let visitedPoints = new Set(nearbyPoints); // 使用Set来存储已访问的点  

        // 迭代查询  
        while (nearbyPoints.length > 0) {
            let newNearbyPoints = [];
            for (let ball of nearbyPoints) {
                // 查询距离当前点为5个单位内的点，但排除已访问过的点  
                let tempNearbyPoints = this.bl_getCanBall(ball);
                for (let tempPoint of tempNearbyPoints) {
                    if (!visitedPoints.has(tempPoint)) {
                        newNearbyPoints.push(tempPoint);
                        visitedPoints.add(tempPoint);
                    }
                }
            }
            nearbyPoints = newNearbyPoints; // 更新需要查询的点  
        }

        // 返回所有找到的点（包括初始查询和迭代查询的结果）  
        return visitedPoints;
    }

    bl_getCanBall(target) {
        let arr = this.currBalls.filter((value) => {
            let dis = Utils.distanceByNode(target.node, value.node);
            return dis < target.node.width + 20 && value.rId != this.currTarget.rId;
        })
        return arr;
    }

    async bl_drop() {

        let maxY = this.bl_checkMaxPointY();
        if (maxY > this.node.height / 2 - 200) return;
        if (maxY > this.node.height / 4) {
            let random = Utils.randomFloat(0, 1);
            if (random < .5) return;
        }
        let len = Utils.randomInt(1, 15)
        if (maxY > this.node.height / 4 + 100) {
            len = Utils.randomInt(1, 10)
        }


        let maxId = this.bl_checkMaxId();
        maxId = maxId > 3 ? 3 : maxId;

        let typeNum = Utils.randomIntInclusive(1, maxId);
        let rates = Utils.getRandomRates(typeNum);
        let ids = [];
        for (let i = 1; i <= typeNum; i++) {
            ids.push(i);
        }
        for (let i = 0; i < len; i++) {
            let index = Utils.randomByWeightList(rates);
            let id = ids[index];
            let point = this.bl_getPoint(id);
            let node = await this.bl_createBall(id, point, true);
            let scr = node.getComponent(bl_ball)
            this.bl_scList.push(scr);
        }
        this.bl_cacheList();
    }
    //检测当前最大值
    bl_checkMaxId() {
        let flag = 0;
        this.bl_scList.forEach((element) => {
            if (element.id > flag) flag = element.id;
        })
        return flag;
    }

    bl_checkMaxPointY() {
        let flag = 0;
        this.bl_scList.forEach((element) => {
            if (element.node.y > flag) flag = element.node.y;
        })
        return flag;
    }

    //刷新
    bl_onRefresh() {
        if (Utils.btnLock()) {
            return;
        }

        this.node.destroyAllChildren();
        this.bl_scList = [];
        this.init();

    }

    flyIco() {
        let target = bc.top.ico2;
        RewardUtils.resBoomByNode(this.ico, target, 10);

    }

    flyBest(node) {
        let target = bc.top.ico1;
        let p1 = target.convertToWorldSpaceAR(cc.v2(0, 0));
        let p2 = this.node.convertToNodeSpaceAR(p1);
        cc.tween(node).to(.2, { x: 0, y: 0, scale: 1.1 }).delay(1).to(.5, { position: p2, scale: .5 }, cc.easeSineIn()).to(.2, { scale: 0 }, cc.easeSineIn()).call(() => {
            GlobalEvent.dispatchEvent(new EventChangeTop(2, 1));
        }).start();

    }



}
