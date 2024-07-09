
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/common/comp/NumberAction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7ec2d0pX1BF85jcim699QoK', 'NumberAction');
// script/common/comp/NumberAction.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = require("../../utils/Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NumberAction = /** @class */ (function (_super) {
    __extends(NumberAction, _super);
    function NumberAction() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.targetNumber = 0;
        _this.startNum = 0;
        _this.startTime = 0;
        _this.duration = 0;
        _this.playing = false;
        _this.colorBackup = null;
        _this.scaleBackup = null;
        _this.targetColor = null;
        return _this;
    }
    NumberAction_1 = NumberAction;
    /**
     *
     * @param labelNode label所在的node
     * @param targetNumber 目标数字
     * @param duration 毫秒
     */
    NumberAction.prototype.onLoad = function () {
        // this.label = this.node.getComponent(cc.Label);
        // this.colorBackup = this.label.node.color;
        // this.scaleBackup = cc.v2(this.label.node.scaleX, this.label.node.scaleY);
    };
    NumberAction.numberTo = function (labelNode, targetNumber, duration, color) {
        if (duration === void 0) { duration = 300; }
        var label = labelNode.getComponent(cc.Label);
        if (!label) {
            return;
        }
        var numberAction = labelNode.getComponent(NumberAction_1);
        if (!numberAction) {
            numberAction = labelNode.addComponent(NumberAction_1);
        }
        numberAction.numberTo(targetNumber, duration, color);
    };
    NumberAction.prototype.numberTo = function (targetNumber, duration, color) {
        if (duration === void 0) { duration = 300; }
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
        this.startNum = Utils_1.Utils.isNum(this.label.string) ? Number(this.label.string) : 0;
        this.startTime = (new Date()).getTime();
        this.playing = true;
        if (!!color) {
            this.targetColor = color;
            this.label.node.color = color;
            this.label.node.scaleX = this.scaleBackup.x * 1.2;
            this.label.node.scaleY = this.scaleBackup.y * 1.2;
        }
    };
    NumberAction.prototype.checkColor = function (c1, c2) {
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
    };
    NumberAction.prototype.update = function (dt) {
        if (!this.label) {
            return;
        }
        if (!this.playing) {
            return;
        }
        var curTime = (new Date()).getTime();
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
        var ratio = (curTime - this.startTime) / this.duration;
        var curNum = this.startNum + (this.targetNumber - this.startNum) * ratio;
        this.label.string = "" + Math.floor(curNum);
    };
    var NumberAction_1;
    NumberAction = NumberAction_1 = __decorate([
        ccclass
    ], NumberAction);
    return NumberAction;
}(cc.Component));
exports.default = NumberAction;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvY29tbW9uL2NvbXAvTnVtYmVyQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUEwQztBQUVwQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUEwQyxnQ0FBWTtJQUF0RDtRQUFBLHFFQWdHQztRQS9GVSxXQUFLLEdBQWEsSUFBSSxDQUFDO1FBQ3ZCLGtCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBQ3pCLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsZUFBUyxHQUFXLENBQUMsQ0FBQztRQUN0QixjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBQ3JCLGFBQU8sR0FBWSxLQUFLLENBQUM7UUFDekIsaUJBQVcsR0FBYSxJQUFJLENBQUM7UUFDN0IsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFDNUIsaUJBQVcsR0FBYSxJQUFJLENBQUM7O0lBdUZ4QyxDQUFDO3FCQWhHb0IsWUFBWTtJQVU3Qjs7Ozs7T0FLRztJQUNILDZCQUFNLEdBQU47UUFDSSxpREFBaUQ7UUFDakQsNENBQTRDO1FBQzVDLDRFQUE0RTtJQUNoRixDQUFDO0lBQ2EscUJBQVEsR0FBdEIsVUFBdUIsU0FBa0IsRUFBRSxZQUFvQixFQUFFLFFBQXNCLEVBQUUsS0FBZ0I7UUFBeEMseUJBQUEsRUFBQSxjQUFzQjtRQUNuRixJQUFJLEtBQUssR0FBRyxTQUFTLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1IsT0FBTztTQUNWO1FBQ0QsSUFBSSxZQUFZLEdBQUcsU0FBUyxDQUFDLFlBQVksQ0FBQyxjQUFZLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ2YsWUFBWSxHQUFHLFNBQVMsQ0FBQyxZQUFZLENBQUMsY0FB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c291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVdGlscyB9IGZyb20gXCIuLi8uLi91dGlscy9VdGlsc1wiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTnVtYmVyQWN0aW9uIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBwdWJsaWMgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBwdWJsaWMgdGFyZ2V0TnVtYmVyOiBudW1iZXIgPSAwO1xuICAgIHB1YmxpYyBzdGFydE51bTogbnVtYmVyID0gMDtcbiAgICBwdWJsaWMgc3RhcnRUaW1lOiBudW1iZXIgPSAwO1xuICAgIHB1YmxpYyBkdXJhdGlvbjogbnVtYmVyID0gMDtcbiAgICBwdWJsaWMgcGxheWluZzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHB1YmxpYyBjb2xvckJhY2t1cDogY2MuQ29sb3IgPSBudWxsO1xuICAgIHB1YmxpYyBzY2FsZUJhY2t1cDogY2MuVmVjMiA9IG51bGw7XG4gICAgcHVibGljIHRhcmdldENvbG9yOiBjYy5Db2xvciA9IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHBhcmFtIGxhYmVsTm9kZSBsYWJlbOaJgOWcqOeahG5vZGVcbiAgICAgKiBAcGFyYW0gdGFyZ2V0TnVtYmVyIOebruagh+aVsOWtl1xuICAgICAqIEBwYXJhbSBkdXJhdGlvbiDmr6vnp5JcbiAgICAgKi9cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIC8vIHRoaXMubGFiZWwgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgLy8gdGhpcy5jb2xvckJhY2t1cCA9IHRoaXMubGFiZWwubm9kZS5jb2xvcjtcbiAgICAgICAgLy8gdGhpcy5zY2FsZUJhY2t1cCA9IGNjLnYyKHRoaXMubGFiZWwubm9kZS5zY2FsZVgsIHRoaXMubGFiZWwubm9kZS5zY2FsZVkpO1xuICAgIH1cbiAgICBwdWJsaWMgc3RhdGljIG51bWJlclRvKGxhYmVsTm9kZTogY2MuTm9kZSwgdGFyZ2V0TnVtYmVyOiBudW1iZXIsIGR1cmF0aW9uOiBudW1iZXIgPSAzMDAsIGNvbG9yPzogY2MuQ29sb3IpIHtcbiAgICAgICAgbGV0IGxhYmVsID0gbGFiZWxOb2RlLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgIGlmICghbGFiZWwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbnVtYmVyQWN0aW9uID0gbGFiZWxOb2RlLmdldENvbXBvbmVudChOdW1iZXJBY3Rpb24pO1xuICAgICAgICBpZiAoIW51bWJlckFjdGlvbikge1xuICAgICAgICAgICAgbnVtYmVyQWN0aW9uID0gbGFiZWxOb2RlLmFkZENvbXBvbmVudChOdW1iZXJBY3Rpb24pO1xuICAgICAgICB9XG4gICAgICAgIG51bWJlckFjdGlvbi5udW1iZXJUbyh0YXJnZXROdW1iZXIsIGR1cmF0aW9uLCBjb2xvcik7XG4gICAgfVxuXG4gICAgcHVibGljIG51bWJlclRvKHRhcmdldE51bWJlcjogbnVtYmVyLCBkdXJhdGlvbjogbnVtYmVyID0gMzAwLCBjb2xvcj86IGNjLkNvbG9yKSB7XG4gICAgICAgIGlmICghdGhpcy5sYWJlbCkge1xuICAgICAgICAgICAgdGhpcy5sYWJlbCA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAgICAgdGhpcy5jb2xvckJhY2t1cCA9IHRoaXMubGFiZWwubm9kZS5jb2xvcjtcbiAgICAgICAgICAgIHRoaXMuc2NhbGVCYWNrdXAgPSBjYy52Mih0aGlzLmxhYmVsLm5vZGUuc2NhbGVYLCB0aGlzLmxhYmVsLm5vZGUuc2NhbGVZKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGFyZ2V0TnVtYmVyID09IH5+dGhpcy5sYWJlbC5zdHJpbmcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRhcmdldE51bWJlciA9IHRhcmdldE51bWJlcjtcbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IGR1cmF0aW9uO1xuXG4gICAgICAgIHRoaXMuc3RhcnROdW0gPSBVdGlscy5pc051bSh0aGlzLmxhYmVsLnN0cmluZykgPyBOdW1iZXIodGhpcy5sYWJlbC5zdHJpbmcpIDogMDtcbiAgICAgICAgdGhpcy5zdGFydFRpbWUgPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpO1xuICAgICAgICB0aGlzLnBsYXlpbmcgPSB0cnVlO1xuICAgICAgICBpZiAoISFjb2xvcikge1xuICAgICAgICAgICAgdGhpcy50YXJnZXRDb2xvciA9IGNvbG9yO1xuICAgICAgICAgICAgdGhpcy5sYWJlbC5ub2RlLmNvbG9yID0gY29sb3I7XG5cbiAgICAgICAgICAgIHRoaXMubGFiZWwubm9kZS5zY2FsZVggPSB0aGlzLnNjYWxlQmFja3VwLnggKiAxLjI7XG4gICAgICAgICAgICB0aGlzLmxhYmVsLm5vZGUuc2NhbGVZID0gdGhpcy5zY2FsZUJhY2t1cC55ICogMS4yO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tDb2xvcihjMTogY2MuQ29sb3IsIGMyOiBjYy5Db2xvcikge1xuICAgICAgICBpZiAoYzEuZ2V0QSgpICE9IGMyLmdldEEoKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjMS5nZXRCKCkgIT0gYzIuZ2V0QigpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGMxLmdldEcoKSAhPSBjMi5nZXRHKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYzEuZ2V0UigpICE9IGMyLmdldFIoKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVwZGF0ZShkdDogTnVtYmVyKSB7XG4gICAgICAgIGlmICghdGhpcy5sYWJlbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5wbGF5aW5nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGN1clRpbWUgPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpO1xuICAgICAgICBpZiAoY3VyVGltZSA+PSB0aGlzLnN0YXJ0VGltZSArIHRoaXMuZHVyYXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMubGFiZWwubm9kZS5jb2xvciA9IHRoaXMuY29sb3JCYWNrdXA7XG4gICAgICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9IFwiXCIgKyB0aGlzLnRhcmdldE51bWJlcjtcbiAgICAgICAgICAgIHRoaXMubGFiZWwubm9kZS5zY2FsZVggPSB0aGlzLnNjYWxlQmFja3VwLng7XG4gICAgICAgICAgICB0aGlzLmxhYmVsLm5vZGUuc2NhbGVZID0gdGhpcy5zY2FsZUJhY2t1cC55O1xuICAgICAgICAgICAgdGhpcy5wbGF5aW5nID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy90b2RvOjrkuLrku4DkuYjopoHmr4/moaLpg73orr7nva7nm67moIfoibLmiY3og73lrp7njrDlj5jljJbmmK/lj5joibLvvIzmmK/osIHlnKjmjaPkubFcbiAgICAgICAgaWYgKCEhdGhpcy50YXJnZXRDb2xvcikge1xuICAgICAgICAgICAgdGhpcy5sYWJlbC5ub2RlLmNvbG9yID0gdGhpcy50YXJnZXRDb2xvcjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmF0aW8gPSAoY3VyVGltZSAtIHRoaXMuc3RhcnRUaW1lKSAvIHRoaXMuZHVyYXRpb247XG4gICAgICAgIGxldCBjdXJOdW0gPSB0aGlzLnN0YXJ0TnVtICsgKHRoaXMudGFyZ2V0TnVtYmVyIC0gdGhpcy5zdGFydE51bSkgKiByYXRpbztcbiAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSBcIlwiICsgTWF0aC5mbG9vcihjdXJOdW0pO1xuICAgIH1cblxufVxuIl19