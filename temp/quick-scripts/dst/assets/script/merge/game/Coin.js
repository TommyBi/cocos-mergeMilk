
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/merge/game/Coin.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6cba59FrPtA0YaVzatN4FVJ', 'Coin');
// script/merge/game/Coin.ts

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
var Coin = /** @class */ (function (_super) {
    __extends(Coin, _super);
    function Coin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ulblNum = null;
        _this.uImgBg = null;
        return _this;
        // update (dt) {}
    }
    Coin.prototype.onLoad = function () {
        this.ulblNum.string = '-';
    };
    Coin.prototype.init = function (slotIdx, cnt) {
        var _this = this;
        var url = "images/coin/" + cnt;
        cc.resources.load(url, cc.SpriteFrame, (function (err, spriteFrame) {
            if (err) {
                console.error('url:', url, '/err:');
                return;
            }
            _this.uImgBg.spriteFrame = spriteFrame;
        }));
        // this.ulblNum.string = `${slotIdx}-${cnt}`;
        this.ulblNum.string = "" + cnt;
    };
    Coin.prototype.start = function () {
    };
    __decorate([
        property(cc.Label)
    ], Coin.prototype, "ulblNum", void 0);
    __decorate([
        property(cc.Sprite)
    ], Coin.prototype, "uImgBg", void 0);
    Coin = __decorate([
        ccclass
    ], Coin);
    return Coin;
}(cc.Component));
exports.default = Coin;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvbWVyZ2UvZ2FtZS9Db2luLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWtDLHdCQUFZO0lBQTlDO1FBQUEscUVBK0JDO1FBN0JPLGFBQU8sR0FBYSxJQUFJLENBQUM7UUFHekIsWUFBTSxHQUFjLElBQUksQ0FBQzs7UUF5QjdCLGlCQUFpQjtJQUNyQixDQUFDO0lBeEJHLHFCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7SUFDOUIsQ0FBQztJQUVELG1CQUFJLEdBQUosVUFBSyxPQUFlLEVBQUUsR0FBVztRQUFqQyxpQkFhQztRQVpHLElBQU0sR0FBRyxHQUFXLGlCQUFlLEdBQUssQ0FBQztRQUN6QyxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQUMsR0FBRyxFQUFFLFdBQTJCO1lBQ3JFLElBQUksR0FBRyxFQUFFO2dCQUNMLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFDcEMsT0FBTzthQUNWO1lBRUQsS0FBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQzFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFSiw2Q0FBNkM7UUFDN0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsS0FBRyxHQUFLLENBQUM7SUFDbkMsQ0FBQztJQUVELG9CQUFLLEdBQUw7SUFFQSxDQUFDO0lBMUJHO1FBREgsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7eUNBQ1U7SUFHekI7UUFESCxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt3Q0FDUztJQUxaLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0ErQnhCO0lBQUQsV0FBQztDQS9CRCxBQStCQyxDQS9CaUMsRUFBRSxDQUFDLFNBQVMsR0ErQjdDO2tCQS9Cb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2luIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgICAgIHVsYmxOdW06IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgICAgIHVJbWdCZzogY2MuU3ByaXRlID0gbnVsbDtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy51bGJsTnVtLnN0cmluZyA9ICctJztcbiAgICB9XG5cbiAgICBpbml0KHNsb3RJZHg6IG51bWJlciwgY250OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdXJsOiBzdHJpbmcgPSBgaW1hZ2VzL2NvaW4vJHtjbnR9YDtcbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQodXJsLCBjYy5TcHJpdGVGcmFtZSwgKChlcnIsIHNwcml0ZUZyYW1lOiBjYy5TcHJpdGVGcmFtZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ3VybDonLCB1cmwsICcvZXJyOicpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy51SW1nQmcuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIC8vIHRoaXMudWxibE51bS5zdHJpbmcgPSBgJHtzbG90SWR4fS0ke2NudH1gO1xuICAgICAgICB0aGlzLnVsYmxOdW0uc3RyaW5nID0gYCR7Y250fWA7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG5cbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19