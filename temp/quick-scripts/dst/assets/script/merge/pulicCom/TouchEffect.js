
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/merge/pulicCom/TouchEffect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ba1070sT7NPqKINxiKgj14u', 'TouchEffect');
// script/merge/pulicCom/TouchEffect.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TouchEffect = /** @class */ (function (_super) {
    __extends(TouchEffect, _super);
    function TouchEffect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.scaleTime = 0.07;
        _this.initScaleX = 1;
        _this.initScaleY = 1;
        _this.dS = 0.9;
        return _this;
        // update (dt) {}
    }
    TouchEffect.prototype.onLoad = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
    };
    TouchEffect.prototype.start = function () {
        this.initScaleX = this.node.scaleX;
        this.initScaleY = this.node.scaleY;
        cc.tween(this.node).stop();
    };
    TouchEffect.prototype.onTouchStart = function () {
        var tarScaleX = this.node.scaleX * 0.9;
        var tarScaleY = this.node.scaleY * 0.9;
        cc.tween(this.node)
            .to(this.scaleTime, { scaleX: tarScaleX, scaleY: tarScaleY })
            .start();
    };
    TouchEffect.prototype.onTouchEnd = function () {
        cc.tween(this.node)
            .to(this.scaleTime, { scaleX: this.initScaleX, scaleY: this.initScaleY })
            .start();
    };
    __decorate([
        property()
    ], TouchEffect.prototype, "scaleTime", void 0);
    TouchEffect = __decorate([
        ccclass
    ], TouchEffect);
    return TouchEffect;
}(cc.Component));
exports.default = TouchEffect;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvbWVyZ2UvcHVsaWNDb20vVG91Y2hFZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBeUMsK0JBQVk7SUFBckQ7UUFBQSxxRUFtQ0M7UUFqQ1csZUFBUyxHQUFXLElBQUksQ0FBQztRQUV6QixnQkFBVSxHQUFHLENBQUMsQ0FBQztRQUNmLGdCQUFVLEdBQUcsQ0FBQyxDQUFDO1FBRWYsUUFBRSxHQUFHLEdBQUcsQ0FBQzs7UUEyQmpCLGlCQUFpQjtJQUNyQixDQUFDO0lBMUJHLDRCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBRUQsMkJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDbkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNuQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRUQsa0NBQVksR0FBWjtRQUNJLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUN6QyxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDekMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ2QsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsQ0FBQzthQUM1RCxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQsZ0NBQVUsR0FBVjtRQUNJLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNkLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzthQUN4RSxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBOUJEO1FBREMsUUFBUSxFQUFFO2tEQUNzQjtJQUZoQixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBbUMvQjtJQUFELGtCQUFDO0NBbkNELEFBbUNDLENBbkN3QyxFQUFFLENBQUMsU0FBUyxHQW1DcEQ7a0JBbkNvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvdWNoRWZmZWN0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoKVxuICAgIHByaXZhdGUgc2NhbGVUaW1lOiBudW1iZXIgPSAwLjA3O1xuXG4gICAgcHJpdmF0ZSBpbml0U2NhbGVYID0gMTtcbiAgICBwcml2YXRlIGluaXRTY2FsZVkgPSAxO1xuXG4gICAgcHJpdmF0ZSBkUyA9IDAuOTtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuaW5pdFNjYWxlWCA9IHRoaXMubm9kZS5zY2FsZVg7XG4gICAgICAgIHRoaXMuaW5pdFNjYWxlWSA9IHRoaXMubm9kZS5zY2FsZVk7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkuc3RvcCgpO1xuICAgIH1cblxuICAgIG9uVG91Y2hTdGFydCgpIHtcbiAgICAgICAgY29uc3QgdGFyU2NhbGVYID0gdGhpcy5ub2RlLnNjYWxlWCAqIDAuOTtcbiAgICAgICAgY29uc3QgdGFyU2NhbGVZID0gdGhpcy5ub2RlLnNjYWxlWSAqIDAuOTtcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxuICAgICAgICAgICAgLnRvKHRoaXMuc2NhbGVUaW1lLCB7IHNjYWxlWDogdGFyU2NhbGVYLCBzY2FsZVk6IHRhclNjYWxlWSB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgb25Ub3VjaEVuZCgpIHtcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxuICAgICAgICAgICAgLnRvKHRoaXMuc2NhbGVUaW1lLCB7IHNjYWxlWDogdGhpcy5pbml0U2NhbGVYLCBzY2FsZVk6IHRoaXMuaW5pdFNjYWxlWSB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==