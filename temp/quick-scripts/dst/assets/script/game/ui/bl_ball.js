
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/game/ui/bl_ball.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd74faY83gVBFq74+7t4+thB', 'bl_ball');
// script/game/ui/bl_ball.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
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
var Global_1 = require("../../common/Global");
var GlobalEvents_1 = require("../../common/GlobalEvents");
var Utils_1 = require("../../utils/Utils");
var GameUtils_1 = require("../GameUtils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var bl_ball = /** @class */ (function (_super) {
    __extends(bl_ball, _super);
    function bl_ball() {
        // LIFE-CYCLE CALLBACKS:
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lb = null;
        _this.eff = null;
        _this.THRESHOLD = 0.08;
        _this.isDestory = false;
        _this.isDrop = false;
        return _this;
    }
    bl_ball.prototype.onLoad = function () {
        this.rigidbody = this.node.getComponent(cc.RigidBody);
    };
    bl_ball.prototype.start = function () {
    };
    bl_ball.prototype.update = function (dt) {
        // if (this.isDrop && this.rigidbody) {
        //     if (Math.abs(this.rigidbody.linearVelocity.x) < this.THRESHOLD && Math.abs(this.rigidbody.linearVelocity.y) < this.THRESHOLD) {
        //         // 刚体几乎已经停止运动  
        //         GameUtils.playDrop();
        //         this.isDrop = false;
        //     }
        // }
        this.lb.angle = -this.node.angle;
    };
    bl_ball.prototype.onClick = function () {
        if (Utils_1.Utils.btnLock()) {
            return;
        }
        // GameUtils.playSoundBtnClicked();
        Global_1.GlobalEvent.dispatchEvent(new GlobalEvents_1.EventBallClick(this.id, this.rId));
    };
    bl_ball.prototype.init = function (id, isDrop) {
        this.isDrop = isDrop;
        this.id = id;
        this.rId = Utils_1.Utils.nextRandomId();
    };
    bl_ball.prototype.playHide = function (callBack) {
        var _this = this;
        this.eff.node.active = true;
        GameUtils_1.GameUtils.playCompose();
        cc.tween(this.node).delay(0).to(.1, { scale: 1.3 }).to(.1, { scale: 0 }).call(function () {
            if (callBack)
                callBack();
            _this.delete();
        }).start();
    };
    bl_ball.prototype.playShow = function () {
        // this.node.active = true;
        cc.tween(this.node).to(.1, { scale: 1 }).start();
    };
    bl_ball.prototype.removeRigidbody = function () {
        this.node.removeComponent(cc.RigidBody);
    };
    bl_ball.prototype.onDestroy = function () {
    };
    bl_ball.prototype.delete = function () {
        this.isDestory = true;
        this.node.destroy();
    };
    __decorate([
        property(cc.Node)
    ], bl_ball.prototype, "lb", void 0);
    __decorate([
        property(sp.Skeleton)
    ], bl_ball.prototype, "eff", void 0);
    bl_ball = __decorate([
        ccclass
    ], bl_ball);
    return bl_ball;
}(cc.Component));
exports.default = bl_ball;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZ2FtZS91aS9ibF9iYWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRGLDhDQUFrRDtBQUNsRCwwREFBMkQ7QUFDM0QsMkNBQTBDO0FBQzFDLDBDQUF5QztBQUVuQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFxQywyQkFBWTtJQUFqRDtRQUVJLHdCQUF3QjtRQUY1QixxRUF3RUM7UUFuRUcsUUFBRSxHQUFZLElBQUksQ0FBQztRQUVuQixTQUFHLEdBQWdCLElBQUksQ0FBQztRQUl4QixlQUFTLEdBQUcsSUFBSSxDQUFDO1FBR2pCLGVBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsWUFBTSxHQUFHLEtBQUssQ0FBQzs7SUF5RG5CLENBQUM7SUF4REcsd0JBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFDRCx1QkFBSyxHQUFMO0lBQ0EsQ0FBQztJQUVELHdCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ0wsdUNBQXVDO1FBQ3ZDLHNJQUFzSTtRQUN0SSwwQkFBMEI7UUFDMUIsZ0NBQWdDO1FBQ2hDLCtCQUErQjtRQUMvQixRQUFRO1FBQ1IsSUFBSTtRQUNKLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDckMsQ0FBQztJQUVELHlCQUFPLEdBQVA7UUFDSSxJQUFJLGFBQUssQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUNqQixPQUFPO1NBQ1Y7UUFDRCxtQ0FBbUM7UUFDbkMsb0JBQVcsQ0FBQyxhQUFhLENBQUMsSUFBSSw2QkFBYyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUVELHNCQUFJLEdBQUosVUFBSyxFQUFFLEVBQUUsTUFBTTtRQUNYLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEdBQUcsR0FBRyxhQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUVELDBCQUFRLEdBQVIsVUFBUyxRQUFRO1FBQWpCLGlCQU9DO1FBTkcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUM1QixxQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3hCLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUMxRSxJQUFJLFFBQVE7Z0JBQUUsUUFBUSxFQUFFLENBQUM7WUFDekIsS0FBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2xCLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUNELDBCQUFRLEdBQVI7UUFDSSwyQkFBMkI7UUFDM0IsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3JELENBQUM7SUFFRCxpQ0FBZSxHQUFmO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFUywyQkFBUyxHQUFuQjtJQUVBLENBQUM7SUFFRCx3QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBbEVEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7dUNBQ0M7SUFFbkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQzt3Q0FDRTtJQVBQLE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0F3RTNCO0lBQUQsY0FBQztDQXhFRCxBQXdFQyxDQXhFb0MsRUFBRSxDQUFDLFNBQVMsR0F3RWhEO2tCQXhFb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgeyBHbG9iYWxFdmVudCB9IGZyb20gXCIuLi8uLi9jb21tb24vR2xvYmFsXCI7XG5pbXBvcnQgeyBFdmVudEJhbGxDbGljayB9IGZyb20gXCIuLi8uLi9jb21tb24vR2xvYmFsRXZlbnRzXCI7XG5pbXBvcnQgeyBVdGlscyB9IGZyb20gXCIuLi8uLi91dGlscy9VdGlsc1wiO1xuaW1wb3J0IHsgR2FtZVV0aWxzIH0gZnJvbSBcIi4uL0dhbWVVdGlsc1wiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgYmxfYmFsbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGxiOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXG4gICAgZWZmOiBzcC5Ta2VsZXRvbiA9IG51bGw7XG4gICAgaWQ6IG51bWJlcjtcbiAgICBySWQ6IHN0cmluZztcblxuICAgIFRIUkVTSE9MRCA9IDAuMDg7XG4gICAgcmlnaWRib2R5OiBjYy5SaWdpZEJvZHk7XG5cbiAgICBpc0Rlc3Rvcnk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpc0Ryb3AgPSBmYWxzZTtcbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMucmlnaWRib2R5ID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xuICAgIH1cbiAgICBzdGFydCgpIHtcbiAgICB9XG5cbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgLy8gaWYgKHRoaXMuaXNEcm9wICYmIHRoaXMucmlnaWRib2R5KSB7XG4gICAgICAgIC8vICAgICBpZiAoTWF0aC5hYnModGhpcy5yaWdpZGJvZHkubGluZWFyVmVsb2NpdHkueCkgPCB0aGlzLlRIUkVTSE9MRCAmJiBNYXRoLmFicyh0aGlzLnJpZ2lkYm9keS5saW5lYXJWZWxvY2l0eS55KSA8IHRoaXMuVEhSRVNIT0xEKSB7XG4gICAgICAgIC8vICAgICAgICAgLy8g5Yia5L2T5Yeg5LmO5bey57uP5YGc5q2i6L+Q5YqoICBcbiAgICAgICAgLy8gICAgICAgICBHYW1lVXRpbHMucGxheURyb3AoKTtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmlzRHJvcCA9IGZhbHNlO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG4gICAgICAgIHRoaXMubGIuYW5nbGUgPSAtdGhpcy5ub2RlLmFuZ2xlO1xuICAgIH1cblxuICAgIG9uQ2xpY2soKSB7XG4gICAgICAgIGlmIChVdGlscy5idG5Mb2NrKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBHYW1lVXRpbHMucGxheVNvdW5kQnRuQ2xpY2tlZCgpO1xuICAgICAgICBHbG9iYWxFdmVudC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudEJhbGxDbGljayh0aGlzLmlkLCB0aGlzLnJJZCkpO1xuICAgIH1cblxuICAgIGluaXQoaWQsIGlzRHJvcCkge1xuICAgICAgICB0aGlzLmlzRHJvcCA9IGlzRHJvcDtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnJJZCA9IFV0aWxzLm5leHRSYW5kb21JZCgpO1xuICAgIH1cblxuICAgIHBsYXlIaWRlKGNhbGxCYWNrKSB7XG4gICAgICAgIHRoaXMuZWZmLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgR2FtZVV0aWxzLnBsYXlDb21wb3NlKCk7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkuZGVsYXkoMCkudG8oLjEsIHsgc2NhbGU6IDEuMyB9KS50byguMSwgeyBzY2FsZTogMCB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgIGlmIChjYWxsQmFjaykgY2FsbEJhY2soKTtcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlKCk7XG4gICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfVxuICAgIHBsYXlTaG93KCkge1xuICAgICAgICAvLyB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKS50byguMSwgeyBzY2FsZTogMSB9KS5zdGFydCgpO1xuICAgIH1cblxuICAgIHJlbW92ZVJpZ2lkYm9keSgpIHtcbiAgICAgICAgdGhpcy5ub2RlLnJlbW92ZUNvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbkRlc3Ryb3koKTogdm9pZCB7XG5cbiAgICB9XG5cbiAgICBkZWxldGUoKSB7XG4gICAgICAgIHRoaXMuaXNEZXN0b3J5ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICB9XG59XG4iXX0=