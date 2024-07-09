
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/common/BasePanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6307aGkrx5FS5pt8QTsKdZJ', 'BasePanel');
// script/common/BasePanel.ts

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
var Utils_1 = require("../utils/Utils");
var GlobalDefines_1 = require("./consts/GlobalDefines");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BasePanel = /** @class */ (function (_super) {
    __extends(BasePanel, _super);
    function BasePanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btn_back = null;
        return _this;
    }
    BasePanel.prototype.onLoad = function () {
        this.btn_back && (this.btn_back.scale = 0);
    };
    BasePanel.prototype.start = function () {
        this.initBackBtn();
    };
    BasePanel.prototype.initBackBtn = function () {
        if (this.btn_back) {
            var top = GlobalDefines_1.GlobalDefines.MenuButtonLogic.top;
            var height = GlobalDefines_1.GlobalDefines.MenuButtonLogic.height;
            this.btn_back.y = GlobalDefines_1.GlobalDefines.ScreenHeight / 2 - top - height / 2;
            this.btn_back.x = -330;
            cc.tween(this.btn_back)
                .to(0.3, { scale: 1 }, { easing: cc.easing.backOut })
                .start();
        }
    };
    BasePanel.prototype.onDisable = function () {
    };
    BasePanel.prototype.close = function () {
        Utils_1.Utils.removeNode(this.node);
    };
    BasePanel.prototype.onBtnBackClicked = function (e) {
        if (Utils_1.Utils.btnLock()) {
            return;
        }
        this.close();
    };
    __decorate([
        property(cc.Node)
    ], BasePanel.prototype, "btn_back", void 0);
    BasePanel = __decorate([
        ccclass
    ], BasePanel);
    return BasePanel;
}(cc.Component));
exports.default = BasePanel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvY29tbW9uL0Jhc2VQYW5lbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3Q0FBdUM7QUFDdkMsd0RBQXVEO0FBRWpELElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBc0NDO1FBbkNHLGNBQVEsR0FBVyxJQUFJLENBQUM7O0lBbUM1QixDQUFDO0lBakNhLDBCQUFNLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFUyx5QkFBSyxHQUFmO1FBQ0ksSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCwrQkFBVyxHQUFYO1FBQ0ksSUFBRyxJQUFJLENBQUMsUUFBUSxFQUFDO1lBQ2IsSUFBSSxHQUFHLEdBQUcsNkJBQWEsQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDO1lBQzVDLElBQUksTUFBTSxHQUFHLDZCQUFhLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQztZQUNsRCxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyw2QkFBYSxDQUFDLFlBQVksR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDcEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7WUFDdkIsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO2lCQUN0QixFQUFFLENBQUMsR0FBRyxFQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsTUFBTSxFQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFDLENBQUM7aUJBQzVDLEtBQUssRUFBRSxDQUFDO1NBQ1o7SUFDTCxDQUFDO0lBRVMsNkJBQVMsR0FBbkI7SUFDQSxDQUFDO0lBRUQseUJBQUssR0FBTDtRQUNJLGFBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxvQ0FBZ0IsR0FBaEIsVUFBaUIsQ0FBc0I7UUFDbkMsSUFBSSxhQUFLLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDakIsT0FBTztTQUNWO1FBQ0QsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFsQ0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDTTtJQUhQLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0FzQzdCO0lBQUQsZ0JBQUM7Q0F0Q0QsQUFzQ0MsQ0F0Q3NDLEVBQUUsQ0FBQyxTQUFTLEdBc0NsRDtrQkF0Q29CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVdGlscyB9IGZyb20gXCIuLi91dGlscy9VdGlsc1wiO1xuaW1wb3J0IHsgR2xvYmFsRGVmaW5lcyB9IGZyb20gXCIuL2NvbnN0cy9HbG9iYWxEZWZpbmVzXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZVBhbmVsIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBidG5fYmFjazpjYy5Ob2RlID0gbnVsbDtcblxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYnRuX2JhY2sgJiYgKHRoaXMuYnRuX2JhY2suc2NhbGUgPSAwKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaW5pdEJhY2tCdG4oKTtcbiAgICB9XG5cbiAgICBpbml0QmFja0J0bigpe1xuICAgICAgICBpZih0aGlzLmJ0bl9iYWNrKXtcbiAgICAgICAgICAgIGxldCB0b3AgPSBHbG9iYWxEZWZpbmVzLk1lbnVCdXR0b25Mb2dpYy50b3A7XG4gICAgICAgICAgICBsZXQgaGVpZ2h0ID0gR2xvYmFsRGVmaW5lcy5NZW51QnV0dG9uTG9naWMuaGVpZ2h0O1xuICAgICAgICAgICAgdGhpcy5idG5fYmFjay55ID0gR2xvYmFsRGVmaW5lcy5TY3JlZW5IZWlnaHQgLyAyIC0gdG9wIC0gaGVpZ2h0IC8gMjtcbiAgICAgICAgICAgIHRoaXMuYnRuX2JhY2sueCA9IC0zMzA7XG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLmJ0bl9iYWNrKVxuICAgICAgICAgICAgLnRvKDAuMyx7c2NhbGU6MX0se2Vhc2luZzpjYy5lYXNpbmcuYmFja091dH0pXG4gICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbkRpc2FibGUoKTogdm9pZCB7XG4gICAgfVxuXG4gICAgY2xvc2UoKXtcbiAgICAgICAgVXRpbHMucmVtb3ZlTm9kZSh0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIG9uQnRuQmFja0NsaWNrZWQoZTogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xuICAgICAgICBpZiAoVXRpbHMuYnRuTG9jaygpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cbn1cbiJdfQ==