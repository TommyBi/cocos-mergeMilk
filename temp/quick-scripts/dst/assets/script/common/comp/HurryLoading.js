
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/common/comp/HurryLoading.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5f7afcopOxGz5p29l+d+sXS', 'HurryLoading');
// script/common/comp/HurryLoading.ts

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
var HurryLoading = /** @class */ (function (_super) {
    __extends(HurryLoading, _super);
    function HurryLoading() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lb_loading = null;
        _this.timeOut = -1;
        return _this;
    }
    HurryLoading.prototype.show = function () {
        this.node.active = true;
    };
    HurryLoading.prototype.hide = function () {
        this.lb_loading.node.stopAllActions();
        this.node.active = false;
    };
    HurryLoading.prototype.onEnable = function () {
        // this.icon.active = false;
        // this.timeOut = setTimeout(() => {
        //      if (cc.isValid(this.node)) {
        //         this.btn_back.active = true;
        //         this.icon.active = true;
        //     }
        // }, 3000);
        var _this = this;
        this.lb_loading.node.stopAllActions();
        cc.tween(this.lb_loading.node)
            .delay(0.5)
            .call(function () {
            _this.lb_loading.string = "加 载 中 . ";
        })
            .delay(0.5)
            .call(function () {
            _this.lb_loading.string = "加 载 中 . . ";
        })
            .delay(0.5)
            .call(function () {
            _this.lb_loading.string = "加 载 中 . . .";
        })
            .union()
            .repeatForever()
            .start();
    };
    HurryLoading.prototype.onDisable = function () {
        clearTimeout(this.timeOut);
    };
    __decorate([
        property(cc.Label)
    ], HurryLoading.prototype, "lb_loading", void 0);
    HurryLoading = __decorate([
        ccclass
    ], HurryLoading);
    return HurryLoading;
}(cc.Component));
exports.default = HurryLoading;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvY29tbW9uL2NvbXAvSHVycnlMb2FkaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTBDLGdDQUFZO0lBQXREO1FBQUEscUVBOENDO1FBM0NHLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBQ3BCLGFBQU8sR0FBVyxDQUFDLENBQUMsQ0FBQzs7SUEwQ2pDLENBQUM7SUF4Q0csMkJBQUksR0FBSjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUM1QixDQUFDO0lBRUQsMkJBQUksR0FBSjtRQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBRUQsK0JBQVEsR0FBUjtRQUNJLDRCQUE0QjtRQUM1QixvQ0FBb0M7UUFDcEMsb0NBQW9DO1FBQ3BDLHVDQUF1QztRQUN2QyxtQ0FBbUM7UUFDbkMsUUFBUTtRQUNSLFlBQVk7UUFQaEIsaUJBMEJDO1FBakJHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7YUFDekIsS0FBSyxDQUFDLEdBQUcsQ0FBQzthQUNWLElBQUksQ0FBQztZQUNGLEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQztRQUN4QyxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsR0FBRyxDQUFDO2FBQ1YsSUFBSSxDQUFDO1lBQ0YsS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDO1FBQzFDLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxHQUFHLENBQUM7YUFDVixJQUFJLENBQUM7WUFDRixLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUM7UUFDM0MsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxFQUFFO2FBQ1AsYUFBYSxFQUFFO2FBQ2YsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELGdDQUFTLEdBQVQ7UUFDSSxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUExQ0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztvREFDUztJQUhYLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0E4Q2hDO0lBQUQsbUJBQUM7Q0E5Q0QsQUE4Q0MsQ0E5Q3lDLEVBQUUsQ0FBQyxTQUFTLEdBOENyRDtrQkE5Q29CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIdXJyeUxvYWRpbmcgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiX2xvYWRpbmc6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBwcml2YXRlIHRpbWVPdXQ6IG51bWJlciA9IC0xO1xuXG4gICAgc2hvdygpIHtcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgaGlkZSgpIHtcbiAgICAgICAgdGhpcy5sYl9sb2FkaW5nLm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIG9uRW5hYmxlKCkge1xuICAgICAgICAvLyB0aGlzLmljb24uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIC8vIHRoaXMudGltZU91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAvLyAgICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMubm9kZSkpIHtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmJ0bl9iYWNrLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5pY29uLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH0sIDMwMDApO1xuXG4gICAgICAgIHRoaXMubGJfbG9hZGluZy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubGJfbG9hZGluZy5ub2RlKVxuICAgICAgICAgICAgLmRlbGF5KDAuNSlcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxiX2xvYWRpbmcuc3RyaW5nID0gXCLliqAg6L29IOS4rSAuIFwiO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5kZWxheSgwLjUpXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5sYl9sb2FkaW5nLnN0cmluZyA9IFwi5YqgIOi9vSDkuK0gLiAuIFwiO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5kZWxheSgwLjUpXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5sYl9sb2FkaW5nLnN0cmluZyA9IFwi5YqgIOi9vSDkuK0gLiAuIC5cIjtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudW5pb24oKVxuICAgICAgICAgICAgLnJlcGVhdEZvcmV2ZXIoKVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgb25EaXNhYmxlKCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lT3V0KTtcbiAgICB9XG59XG4iXX0=