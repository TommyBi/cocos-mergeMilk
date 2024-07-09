
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/game/ui/bl_top.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ab3d3iRW4xCjJdkwDFbYQEr', 'bl_top');
// script/game/ui/bl_top.ts

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
var bl_txPanel_1 = require("./bl_txPanel");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var bl_top = /** @class */ (function (_super) {
    __extends(bl_top, _super);
    function bl_top() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lb_bestNum1 = null;
        _this.lb_bestNum2 = null;
        _this.lb_num = null;
        _this.ico1 = null;
        _this.ico2 = null;
        _this.num1 = 0;
        _this.num = 0;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    bl_top.prototype.onLoad = function () {
        this.bl_refrehUI();
    };
    bl_top.prototype.start = function () {
    };
    bl_top.prototype.onEnable = function () {
        Global_1.GlobalEvent.on(GlobalEvents_1.EventChangeTop.NAME, this.onChange, this);
    };
    bl_top.prototype.bl_refrehUI = function () {
        this.lb_num.string = this.num + "";
        this.lb_bestNum1.string = "已合成 x" + this.num1 + "";
        this.lb_bestNum2.string = this.num1 + "";
    };
    bl_top.prototype.onChange = function (evt) {
        if (evt.mtype == 1) {
            this.num += evt.num;
        }
        else {
            this.num1 += evt.num;
        }
        this.bl_refrehUI();
    };
    bl_top.prototype.bl_showtx = function () {
        bl_txPanel_1.default.Show();
    };
    __decorate([
        property(cc.Label)
    ], bl_top.prototype, "lb_bestNum1", void 0);
    __decorate([
        property(cc.Label)
    ], bl_top.prototype, "lb_bestNum2", void 0);
    __decorate([
        property(cc.Label)
    ], bl_top.prototype, "lb_num", void 0);
    __decorate([
        property(cc.Node)
    ], bl_top.prototype, "ico1", void 0);
    __decorate([
        property(cc.Node)
    ], bl_top.prototype, "ico2", void 0);
    bl_top = __decorate([
        ccclass
    ], bl_top);
    return bl_top;
}(cc.Component));
exports.default = bl_top;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZ2FtZS91aS9ibF90b3AudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEYsOENBQWtEO0FBQ2xELDBEQUEyRDtBQUMzRCwyQ0FBc0M7QUFFaEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBb0MsMEJBQVk7SUFBaEQ7UUFBQSxxRUFrREM7UUEvQ0csaUJBQVcsR0FBYSxJQUFJLENBQUM7UUFFN0IsaUJBQVcsR0FBYSxJQUFJLENBQUM7UUFFN0IsWUFBTSxHQUFhLElBQUksQ0FBQztRQUd4QixVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFHckIsVUFBSSxHQUFHLENBQUMsQ0FBQztRQUNULFNBQUcsR0FBRyxDQUFDLENBQUM7O1FBaUNSLGlCQUFpQjtJQUNyQixDQUFDO0lBakNHLHdCQUF3QjtJQUV4Qix1QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxzQkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVTLHlCQUFRLEdBQWxCO1FBQ0ksb0JBQVcsQ0FBQyxFQUFFLENBQUMsNkJBQWMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBQ0QsNEJBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ25DLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNuRCxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUM3QyxDQUFDO0lBQ0QseUJBQVEsR0FBUixVQUFTLEdBQW1CO1FBQ3hCLElBQUksR0FBRyxDQUFDLEtBQUssSUFBSSxDQUFDLEVBQUU7WUFDaEIsSUFBSSxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDO1NBQ3ZCO2FBQU07WUFDSCxJQUFJLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUM7U0FDeEI7UUFFRCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELDBCQUFTLEdBQVQ7UUFDSSxvQkFBVSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUE1Q0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsrQ0FDVTtJQUU3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOytDQUNVO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MENBQ0s7SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt3Q0FDRztJQUVyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3dDQUNHO0lBWkosTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQWtEMUI7SUFBRCxhQUFDO0NBbERELEFBa0RDLENBbERtQyxFQUFFLENBQUMsU0FBUyxHQWtEL0M7a0JBbERvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCB7IEdsb2JhbEV2ZW50IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9HbG9iYWxcIjtcbmltcG9ydCB7IEV2ZW50Q2hhbmdlVG9wIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9HbG9iYWxFdmVudHNcIjtcbmltcG9ydCBibF90eFBhbmVsIGZyb20gXCIuL2JsX3R4UGFuZWxcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGJsX3RvcCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJfYmVzdE51bTE6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJfYmVzdE51bTI6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJfbnVtOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBpY28xOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBpY28yOiBjYy5Ob2RlID0gbnVsbDtcblxuXG4gICAgbnVtMSA9IDA7XG4gICAgbnVtID0gMDtcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5ibF9yZWZyZWhVSSgpO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uRW5hYmxlKCk6IHZvaWQge1xuICAgICAgICBHbG9iYWxFdmVudC5vbihFdmVudENoYW5nZVRvcC5OQU1FLCB0aGlzLm9uQ2hhbmdlLCB0aGlzKTtcbiAgICB9XG4gICAgYmxfcmVmcmVoVUkoKSB7XG4gICAgICAgIHRoaXMubGJfbnVtLnN0cmluZyA9IHRoaXMubnVtICsgXCJcIjtcbiAgICAgICAgdGhpcy5sYl9iZXN0TnVtMS5zdHJpbmcgPSBcIuW3suWQiOaIkCB4XCIgKyB0aGlzLm51bTEgKyBcIlwiO1xuICAgICAgICB0aGlzLmxiX2Jlc3ROdW0yLnN0cmluZyA9IHRoaXMubnVtMSArIFwiXCI7XG4gICAgfVxuICAgIG9uQ2hhbmdlKGV2dDogRXZlbnRDaGFuZ2VUb3ApIHtcbiAgICAgICAgaWYgKGV2dC5tdHlwZSA9PSAxKSB7XG4gICAgICAgICAgICB0aGlzLm51bSArPSBldnQubnVtO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5udW0xICs9IGV2dC5udW07XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmJsX3JlZnJlaFVJKCk7XG4gICAgfVxuXG4gICAgYmxfc2hvd3R4KCkge1xuICAgICAgICBibF90eFBhbmVsLlNob3coKTtcbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19