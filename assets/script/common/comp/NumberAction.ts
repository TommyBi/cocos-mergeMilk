import { Utils } from "../../utils/Utils";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NumberAction extends cc.Component {
    public label: cc.Label = null;
    public targetNumber: number = 0;
    public startNum: number = 0;
    public startTime: number = 0;
    public duration: number = 0;
    public playing: boolean = false;
    public colorBackup: cc.Color = null;
    public scaleBackup: cc.Vec2 = null;
    public targetColor: cc.Color = null;
    /**
     * 
     * @param labelNode label所在的node
     * @param targetNumber 目标数字
     * @param duration 毫秒
     */
    onLoad() {
        // this.label = this.node.getComponent(cc.Label);
        // this.colorBackup = this.label.node.color;
        // this.scaleBackup = cc.v2(this.label.node.scaleX, this.label.node.scaleY);
    }
    public static numberTo(labelNode: cc.Node, targetNumber: number, duration: number = 300, color?: cc.Color) {
        let label = labelNode.getComponent(cc.Label);
        if (!label) {
            return;
        }
        let numberAction = labelNode.getComponent(NumberAction);
        if (!numberAction) {
            numberAction = labelNode.addComponent(NumberAction);
        }
        numberAction.numberTo(targetNumber, duration, color);
    }

    public numberTo(targetNumber: number, duration: number = 300, color?: cc.Color) {
        if (!this.label) {
            this.label = this.node.getComponent(cc.Label);
            this.colorBackup = this.label.node.color;
            this.scaleBackup = cc.v2(this.label.node.scaleX, this.label.node.scaleY);
        }
        if (targetNumber == ~~this.label.string) {
            return;
        }
        this.targetNumber = targetNumber;
        this.duration = duration;

        this.startNum = Utils.isNum(this.label.string) ? Number(this.label.string) : 0;
        this.startTime = (new Date()).getTime();
        this.playing = true;
        if (!!color) {
            this.targetColor = color;
            this.label.node.color = color;

            this.label.node.scaleX = this.scaleBackup.x * 1.2;
            this.label.node.scaleY = this.scaleBackup.y * 1.2;
        }
    }

    checkColor(c1: cc.Color, c2: cc.Color) {
        if (c1.getA() != c2.getA()) {
            return false;
        }
        if (c1.getB() != c2.getB()) {
            return false;
        }
        if (c1.getG() != c2.getG()) {
            return false;
        }
        if (c1.getR() != c2.getR()) {
            return false;
        }
    }
    update(dt: Number) {
        if (!this.label) {
            return;
        }
        if (!this.playing) {
            return;
        }
        let curTime = (new Date()).getTime();
        if (curTime >= this.startTime + this.duration) {
            this.label.node.color = this.colorBackup;
            this.label.string = "" + this.targetNumber;
            this.label.node.scaleX = this.scaleBackup.x;
            this.label.node.scaleY = this.scaleBackup.y;
            this.playing = false;
            return;
        }
        //todo::为什么要每桢都设置目标色才能实现变化是变色，是谁在捣乱
        if (!!this.targetColor) {
            this.label.node.color = this.targetColor;
        }
        let ratio = (curTime - this.startTime) / this.duration;
        let curNum = this.startNum + (this.targetNumber - this.startNum) * ratio;
        this.label.string = "" + Math.floor(curNum);
    }

}
