
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/game/ui/bl_txPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3e5fc4h2hlDc7L1lICiHdKz', 'bl_txPanel');
// script/game/ui/bl_txPanel.ts

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var PanelBase_1 = require("../../common/comp/PanelBase");
var GameUtils_1 = require("../GameUtils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var bl_txPanel = /** @class */ (function (_super) {
    __extends(bl_txPanel, _super);
    function bl_txPanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lb_num = null;
        _this.lb_tipsNum = null;
        _this.pro = null;
        _this.toggle_content = null;
        _this.ui_tips1 = null;
        _this.rich1 = null;
        _this.rich2 = null;
        _this.ui_tips2 = null;
        _this.rich3 = null;
        _this.rich4 = null;
        _this.rich5 = null;
        _this.ui_tips3 = null;
        _this.rich6 = null;
        _this.rich7 = null;
        // LIFE-CYCLE CALLBACKS:
        _this.currIndex = 0;
        return _this;
        // update (dt) {}
    }
    bl_txPanel.Show = function () {
        return __awaiter(this, void 0, void 0, function () {
            var insNode;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, PanelBase_1.default.ShowPanel(this.Prefab_Name)];
                    case 1:
                        insNode = _a.sent();
                        if (!insNode) {
                            return [2 /*return*/];
                        }
                        GameUtils_1.GameUtils.popView(insNode);
                        return [2 /*return*/];
                }
            });
        });
    };
    bl_txPanel.prototype.onLoad = function () {
        this.init();
    };
    bl_txPanel.prototype.init = function () {
        // this.showList = bc.drawData.showList;
        // for (let i = 0; i < this.toggle_content.childrenCount; i++) {
        //     let node = this.toggle_content.children[i];
        //     let toggle = node.addComponent(WithdrawalToggle);
        //     toggle.init(this.showList[i]);
        // }
        // this.lb_num.string = bc.moneyAbbr + bc.drawData.nowBalShow;
        this.kiIU_refreshUI();
    };
    bl_txPanel.prototype.onEnable = function () {
    };
    bl_txPanel.prototype.onDisable = function () {
    };
    bl_txPanel.prototype.kiIU_refreshUI = function () {
        this.reset();
        // this.currData = this.showList[this.currIndex];
        // let now = parseFloat(bc.drawData.nowBalShow)
        // let curr = parseFloat(this.currData.drawBal)
        // if (now < curr) {
        //     this.ui_tips1.active = true;
        //     this.pro.progress = now / curr;
        //     this.lb_tipsNum.string = bc.moneyAbbr + curr;
        //     this.rich1.getComponent(LocalizedLabel).key = "condition1";
        //     this.rich1.getComponent(LocalizedLabel).fetchRender();
        //     this.rich2.getComponent(LocalizedLabel).key = "current1";
        //     this.rich2.getComponent(LocalizedLabel).fetchRender();
        //     this.scheduleOnce(() => {
        //         this.kiIU_changeRich1();
        //     }, .1)
        // } else {
        //     let nowDay = Number(bc.drawData.nowLogDays)
        //     let currDay = Number(this.currData.needDays)
        //     if (nowDay < currDay) {
        //         this.ui_tips2.active = true;
        //         this.rich3.getComponent(LocalizedLabel).key = "condition2";
        //         this.rich3.getComponent(LocalizedLabel).fetchRender();
        //         this.rich4.getComponent(LocalizedLabel).key = "current2";
        //         this.rich4.getComponent(LocalizedLabel).fetchRender();
        //         this.rich5.getComponent(LocalizedLabel).key = "xc";
        //         this.rich5.getComponent(LocalizedLabel).fetchRender();
        //         this.scheduleOnce(() => {
        //             this.kiIU_changeRich2();
        //         }, .1)
        //         // this.pro.progress = nowDay / currDay;
        //     } else {
        //         let nowLv = Number(bc.drawData.nowLevel)
        //         let currLv = Number(this.currData.needLevel)
        //         if (nowLv < currLv) {
        //             this.ui_tips3.active = true;
        //             this.rich6.getComponent(LocalizedLabel).key = "condition3";
        //             this.rich6.getComponent(LocalizedLabel).fetchRender();
        //             this.rich7.getComponent(LocalizedLabel).key = "current3";
        //             this.rich7.getComponent(LocalizedLabel).fetchRender();
        //             this.scheduleOnce(() => {
        //                 this.kiIU_changeRich3();
        //             }, .1)
        //             this.pro.progress = nowLv / currLv;
        //         }
        //     }
        // }
    };
    bl_txPanel.prototype.onToggle = function (evt) {
        this.rich1.string = "";
        this.rich2.string = "";
        var toggleName = evt.node.name;
        this.currIndex = Number(toggleName) - 1;
        this.kiIU_refreshUI();
    };
    bl_txPanel.prototype.kiIU_onBtnTx = function () {
        // if (dm.player.isFirstTx) {
        //     SDKManager.kiIU_gohpVcbaclok();
        //     dm.player.isFirstTx = 0;
        // } else {
        //     let cfg = GameManager.instance.config;
        //     let tips = ""
        //     if (bc.country == "2") {
        //         tips = cfg.json.language['pt'].tips2;
        //     } else if (bc.country == "13") {
        //         tips = cfg.json.language['in'].tips2;
        //     } else {
        //         tips = cfg.json.language['en'].tips2;
        //     }
        //     GameUtils.showToast(tips);
        // }
    };
    bl_txPanel.prototype.kiIU_changeRich1 = function () {
        // let now = Number(bc.drawData.nowBalShow)
        // let curr = Number(this.currData.drawBal)
        // let str1 = this.rich1.string;
        // str1 = str1.replace(/\$/g, bc.moneyAbbr)
        // str1 = str1.replace(/\!/g, this.currData.drawBal)
        // this.rich1.string = str1;
        // let str2 = this.rich2.string;
        // str2 = str2.replace(/\$/g, bc.moneyAbbr)
        // str2 = str2.replace(/\!/g, bc.drawData.nowBalShow)
        // str2 = str2.replace(/\*/g, (curr - now).toFixed(2))
        // this.rich2.string = str2;
    };
    bl_txPanel.prototype.kiIU_changeRich2 = function () {
        // let now = Number(bc.drawData.nowLogDays)
        // let curr = Number(this.currData.needDays)
        // let str1 = this.rich3.string;
        // str1 = str1.replace(/\!/g, this.currData.needDays + "")
        // str1 = str1.replace(/\*/g, bc.drawData.actCountCfg + "")
        // this.rich3.string = str1;
        // let str2 = this.rich4.string;
        // str2 = str2.replace(/\!/g, bc.drawData.nowLogDays + "")
        // this.rich4.string = str2;
        // let str3 = this.rich5.string;
        // str3 = str3.replace(/\!/g, bc.drawData.todayGates + "")
        // this.rich5.string = str3;
    };
    bl_txPanel.prototype.kiIU_changeRich3 = function () {
        // let now = Number(bc.drawData.nowLevel)
        // let curr = Number(this.currData.needLevel)
        // let str1 = this.rich6.string;
        // str1 = str1.replace(/\!/g, this.currData.needLevel + "")
        // this.rich6.string = str1;
        // let str2 = this.rich7.string;
        // str2 = str2.replace(/\!/g, bc.drawData.nowLevel + "")
        // str2 = str2.replace(/\*/g, (curr - now) + "")
        // this.rich7.string = str2;
    };
    bl_txPanel.prototype.reset = function () {
        this.ui_tips1.active = false;
        this.ui_tips2.active = false;
        this.ui_tips3.active = false;
    };
    bl_txPanel.Prefab_Name = "prefab/game/ui/bl_txPanel";
    __decorate([
        property(cc.Label)
    ], bl_txPanel.prototype, "lb_num", void 0);
    __decorate([
        property(cc.Label)
    ], bl_txPanel.prototype, "lb_tipsNum", void 0);
    __decorate([
        property(cc.ProgressBar)
    ], bl_txPanel.prototype, "pro", void 0);
    __decorate([
        property(cc.Node)
    ], bl_txPanel.prototype, "toggle_content", void 0);
    __decorate([
        property(cc.Node)
    ], bl_txPanel.prototype, "ui_tips1", void 0);
    __decorate([
        property(cc.RichText)
    ], bl_txPanel.prototype, "rich1", void 0);
    __decorate([
        property(cc.RichText)
    ], bl_txPanel.prototype, "rich2", void 0);
    __decorate([
        property(cc.Node)
    ], bl_txPanel.prototype, "ui_tips2", void 0);
    __decorate([
        property(cc.RichText)
    ], bl_txPanel.prototype, "rich3", void 0);
    __decorate([
        property(cc.RichText)
    ], bl_txPanel.prototype, "rich4", void 0);
    __decorate([
        property(cc.RichText)
    ], bl_txPanel.prototype, "rich5", void 0);
    __decorate([
        property(cc.Node)
    ], bl_txPanel.prototype, "ui_tips3", void 0);
    __decorate([
        property(cc.RichText)
    ], bl_txPanel.prototype, "rich6", void 0);
    __decorate([
        property(cc.RichText)
    ], bl_txPanel.prototype, "rich7", void 0);
    bl_txPanel = __decorate([
        ccclass
    ], bl_txPanel);
    return bl_txPanel;
}(PanelBase_1.default));
exports.default = bl_txPanel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZ2FtZS91aS9ibF90eFBhbmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3RGLHlEQUFvRDtBQUdwRCwwQ0FBeUM7QUFJbkMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUF3QjVDO0lBQXdDLDhCQUFTO0lBQWpEO1FBQUEscUVBbU5DO1FBdk1HLFlBQU0sR0FBYSxJQUFJLENBQUM7UUFFeEIsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFHNUIsU0FBRyxHQUFtQixJQUFJLENBQUM7UUFFM0Isb0JBQWMsR0FBWSxJQUFJLENBQUM7UUFHL0IsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixXQUFLLEdBQWdCLElBQUksQ0FBQztRQUUxQixXQUFLLEdBQWdCLElBQUksQ0FBQztRQUcxQixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLFdBQUssR0FBZ0IsSUFBSSxDQUFDO1FBRTFCLFdBQUssR0FBZ0IsSUFBSSxDQUFDO1FBRTFCLFdBQUssR0FBZ0IsSUFBSSxDQUFDO1FBRzFCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsV0FBSyxHQUFnQixJQUFJLENBQUM7UUFFMUIsV0FBSyxHQUFnQixJQUFJLENBQUM7UUFHMUIsd0JBQXdCO1FBQ3hCLGVBQVMsR0FBRyxDQUFDLENBQUM7O1FBb0tkLGlCQUFpQjtJQUNyQixDQUFDO0lBaE51QixlQUFJLEdBQXhCOzs7Ozs0QkFDMkIscUJBQU0sbUJBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFBOzt3QkFBOUQsT0FBTyxH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QUFFLENBQUMsSUFBSSxDQUFDO2dEQUNPO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7NkNBQ0k7SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQzs2Q0FDSTtJQTFDVCxVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBbU45QjtJQUFELGlCQUFDO0NBbk5ELEFBbU5DLENBbk51QyxtQkFBUyxHQW1OaEQ7a0JBbk5vQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBCYXNlUGFuZWwgZnJvbSBcIi4uLy4uL2NvbW1vbi9CYXNlUGFuZWxcIjtcbmltcG9ydCB7IGRtIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9EYXRhTWFuYWdlclwiO1xuaW1wb3J0IHsgR2xvYmFsRXZlbnQgfSBmcm9tIFwiLi4vLi4vY29tbW9uL0dsb2JhbFwiO1xuaW1wb3J0IFBhbmVsQmFzZSBmcm9tIFwiLi4vLi4vY29tbW9uL2NvbXAvUGFuZWxCYXNlXCI7XG5pbXBvcnQgeyBMb2NhbGl6ZWRMYWJlbCB9IGZyb20gXCIuLi8uLi9sYW5nL0xvY2FsaXplZExhYmVsXCI7XG5pbXBvcnQgU0RLTWFuYWdlciBmcm9tIFwiLi4vLi4vdXRpbHMvU0RLTWFuYWdlclwiO1xuaW1wb3J0IHsgR2FtZVV0aWxzIH0gZnJvbSBcIi4uL0dhbWVVdGlsc1wiO1xuaW1wb3J0IHsgYmMgfSBmcm9tIFwiLi9ibF9Db25maWdcIjtcbmltcG9ydCBXaXRoZHJhd2FsVG9nZ2xlIGZyb20gXCIuL2JsX3R4VG9nZ2xlXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbmV4cG9ydCB0eXBlIHR4X2NmZyA9IHtcbiAgICBub3dMb2dEYXlzOiBudW1iZXI7Ly/lvZPliY3nmbvlvZXlpKnmlbBcbiAgICBub3dMZXZlbDogbnVtYmVyOy8v5b2T5YmN562J57qnXG4gICAgdG9kYXlHYXRlczogbnVtYmVyOy8v5LuK5aSp5raI6Zmk5qyh5pWwXG4gICAgbm93QmFsU2hvdzogc3RyaW5nOy8v5b2T5YmN5L2Z6aKdXG4gICAgYWN0Q291bnRDZmc6IG51bWJlcjsvL+eUqOS6juiuoeeul+W9k+WkqeWujOaIkOWkmuWwkea2iOmZpOaJjeeulzHlpKlcbiAgICBuZXh0THZDb3VudDogbnVtYmVyOy8v5LiL5LiA562J57qn6ZyA6KaB6L6+5Yiw55qE5oC75pWwXG4gICAgc2hvd0xpc3Q6IHR4X2xpc3RbXVxuXG59XG5cbmV4cG9ydCB0eXBlIHR4X2xpc3QgPSB7XG4gICAgaWQ6IG51bWJlci8v5o+Q546w5a+55bqUSURcbiAgICBkcmF3QmFsOiBzdHJpbmcgLy8g5o+Q546w55uu5qCHXG4gICAgbmVlZEJhbDogc3RyaW5nIC8vIOmcgOimgei+vuWIsOeahOS9meminVxuICAgIG5ld2VyVGFnOiBudW1iZXIgLy8g5piv5ZCm5piv5paw5Lq65o+Q546w77yMMeaYryAy5YW25a6D5o+Q546wXG4gICAgbGVmdDogbnVtYmVyLy/liankvZnlj6/mj5DnjrDmrKHmlbBcbiAgICBuZWVkRGF5czogbnVtYmVyLy/pnIDopoHovr7liLDnmoTnmbvlvZXlpKnmlbBcbiAgICBuZWVkTGV2ZWw6IG51bWJlci8v6ZyA6KaB6L6+5Yiw55qE562J57qnXG59XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBibF90eFBhbmVsIGV4dGVuZHMgUGFuZWxCYXNlIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgUHJlZmFiX05hbWUgPSBcInByZWZhYi9nYW1lL3VpL2JsX3R4UGFuZWxcIjtcbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIFNob3coKSB7XG4gICAgICAgIGxldCBpbnNOb2RlOiBjYy5Ob2RlID0gYXdhaXQgUGFuZWxCYXNlLlNob3dQYW5lbCh0aGlzLlByZWZhYl9OYW1lKTtcbiAgICAgICAgaWYgKCFpbnNOb2RlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgR2FtZVV0aWxzLnBvcFZpZXcoaW5zTm9kZSk7XG4gICAgfVxuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiX251bTogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYl90aXBzTnVtOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJvZ3Jlc3NCYXIpXG4gICAgcHJvOiBjYy5Qcm9ncmVzc0JhciA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgdG9nZ2xlX2NvbnRlbnQ6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgdWlfdGlwczE6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5SaWNoVGV4dClcbiAgICByaWNoMTogY2MuUmljaFRleHQgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5SaWNoVGV4dClcbiAgICByaWNoMjogY2MuUmljaFRleHQgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgdWlfdGlwczI6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5SaWNoVGV4dClcbiAgICByaWNoMzogY2MuUmljaFRleHQgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5SaWNoVGV4dClcbiAgICByaWNoNDogY2MuUmljaFRleHQgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5SaWNoVGV4dClcbiAgICByaWNoNTogY2MuUmljaFRleHQgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgdWlfdGlwczM6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5SaWNoVGV4dClcbiAgICByaWNoNjogY2MuUmljaFRleHQgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5SaWNoVGV4dClcbiAgICByaWNoNzogY2MuUmljaFRleHQgPSBudWxsO1xuXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcbiAgICBjdXJySW5kZXggPSAwO1xuXG4gICAgc2hvd0xpc3Q6IHR4X2xpc3RbXTtcbiAgICBjdXJyRGF0YTogdHhfbGlzdDtcbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIC8vIHRoaXMuc2hvd0xpc3QgPSBiYy5kcmF3RGF0YS5zaG93TGlzdDtcbiAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRvZ2dsZV9jb250ZW50LmNoaWxkcmVuQ291bnQ7IGkrKykge1xuICAgICAgICAvLyAgICAgbGV0IG5vZGUgPSB0aGlzLnRvZ2dsZV9jb250ZW50LmNoaWxkcmVuW2ldO1xuICAgICAgICAvLyAgICAgbGV0IHRvZ2dsZSA9IG5vZGUuYWRkQ29tcG9uZW50KFdpdGhkcmF3YWxUb2dnbGUpO1xuICAgICAgICAvLyAgICAgdG9nZ2xlLmluaXQodGhpcy5zaG93TGlzdFtpXSk7XG4gICAgICAgIC8vIH1cblxuICAgICAgICAvLyB0aGlzLmxiX251bS5zdHJpbmcgPSBiYy5tb25leUFiYnIgKyBiYy5kcmF3RGF0YS5ub3dCYWxTaG93O1xuICAgICAgICB0aGlzLmtpSVVfcmVmcmVzaFVJKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uRW5hYmxlKCk6IHZvaWQge1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgb25EaXNhYmxlKCk6IHZvaWQge1xuXG4gICAgfVxuXG4gICAga2lJVV9yZWZyZXNoVUkoKSB7XG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgLy8gdGhpcy5jdXJyRGF0YSA9IHRoaXMuc2hvd0xpc3RbdGhpcy5jdXJySW5kZXhdO1xuICAgICAgICAvLyBsZXQgbm93ID0gcGFyc2VGbG9hdChiYy5kcmF3RGF0YS5ub3dCYWxTaG93KVxuICAgICAgICAvLyBsZXQgY3VyciA9IHBhcnNlRmxvYXQodGhpcy5jdXJyRGF0YS5kcmF3QmFsKVxuICAgICAgICAvLyBpZiAobm93IDwgY3Vycikge1xuICAgICAgICAvLyAgICAgdGhpcy51aV90aXBzMS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAvLyAgICAgdGhpcy5wcm8ucHJvZ3Jlc3MgPSBub3cgLyBjdXJyO1xuICAgICAgICAvLyAgICAgdGhpcy5sYl90aXBzTnVtLnN0cmluZyA9IGJjLm1vbmV5QWJiciArIGN1cnI7XG4gICAgICAgIC8vICAgICB0aGlzLnJpY2gxLmdldENvbXBvbmVudChMb2NhbGl6ZWRMYWJlbCkua2V5ID0gXCJjb25kaXRpb24xXCI7XG4gICAgICAgIC8vICAgICB0aGlzLnJpY2gxLmdldENvbXBvbmVudChMb2NhbGl6ZWRMYWJlbCkuZmV0Y2hSZW5kZXIoKTtcbiAgICAgICAgLy8gICAgIHRoaXMucmljaDIuZ2V0Q29tcG9uZW50KExvY2FsaXplZExhYmVsKS5rZXkgPSBcImN1cnJlbnQxXCI7XG4gICAgICAgIC8vICAgICB0aGlzLnJpY2gyLmdldENvbXBvbmVudChMb2NhbGl6ZWRMYWJlbCkuZmV0Y2hSZW5kZXIoKTtcbiAgICAgICAgLy8gICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmtpSVVfY2hhbmdlUmljaDEoKTtcbiAgICAgICAgLy8gICAgIH0sIC4xKVxuICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgbGV0IG5vd0RheSA9IE51bWJlcihiYy5kcmF3RGF0YS5ub3dMb2dEYXlzKVxuICAgICAgICAvLyAgICAgbGV0IGN1cnJEYXkgPSBOdW1iZXIodGhpcy5jdXJyRGF0YS5uZWVkRGF5cylcbiAgICAgICAgLy8gICAgIGlmIChub3dEYXkgPCBjdXJyRGF5KSB7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy51aV90aXBzMi5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMucmljaDMuZ2V0Q29tcG9uZW50KExvY2FsaXplZExhYmVsKS5rZXkgPSBcImNvbmRpdGlvbjJcIjtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnJpY2gzLmdldENvbXBvbmVudChMb2NhbGl6ZWRMYWJlbCkuZmV0Y2hSZW5kZXIoKTtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnJpY2g0LmdldENvbXBvbmVudChMb2NhbGl6ZWRMYWJlbCkua2V5ID0gXCJjdXJyZW50MlwiO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMucmljaDQuZ2V0Q29tcG9uZW50KExvY2FsaXplZExhYmVsKS5mZXRjaFJlbmRlcigpO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMucmljaDUuZ2V0Q29tcG9uZW50KExvY2FsaXplZExhYmVsKS5rZXkgPSBcInhjXCI7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5yaWNoNS5nZXRDb21wb25lbnQoTG9jYWxpemVkTGFiZWwpLmZldGNoUmVuZGVyKCk7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLmtpSVVfY2hhbmdlUmljaDIoKTtcbiAgICAgICAgLy8gICAgICAgICB9LCAuMSlcbiAgICAgICAgLy8gICAgICAgICAvLyB0aGlzLnByby5wcm9ncmVzcyA9IG5vd0RheSAvIGN1cnJEYXk7XG4gICAgICAgIC8vICAgICB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgICAgIGxldCBub3dMdiA9IE51bWJlcihiYy5kcmF3RGF0YS5ub3dMZXZlbClcbiAgICAgICAgLy8gICAgICAgICBsZXQgY3Vyckx2ID0gTnVtYmVyKHRoaXMuY3VyckRhdGEubmVlZExldmVsKVxuXG4gICAgICAgIC8vICAgICAgICAgaWYgKG5vd0x2IDwgY3Vyckx2KSB7XG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMudWlfdGlwczMuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5yaWNoNi5nZXRDb21wb25lbnQoTG9jYWxpemVkTGFiZWwpLmtleSA9IFwiY29uZGl0aW9uM1wiO1xuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLnJpY2g2LmdldENvbXBvbmVudChMb2NhbGl6ZWRMYWJlbCkuZmV0Y2hSZW5kZXIoKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5yaWNoNy5nZXRDb21wb25lbnQoTG9jYWxpemVkTGFiZWwpLmtleSA9IFwiY3VycmVudDNcIjtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5yaWNoNy5nZXRDb21wb25lbnQoTG9jYWxpemVkTGFiZWwpLmZldGNoUmVuZGVyKCk7XG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRoaXMua2lJVV9jaGFuZ2VSaWNoMygpO1xuICAgICAgICAvLyAgICAgICAgICAgICB9LCAuMSlcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5wcm8ucHJvZ3Jlc3MgPSBub3dMdiAvIGN1cnJMdjtcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cblxuICAgIH1cblxuICAgIG9uVG9nZ2xlKGV2dDogY2MuVG9nZ2xlKSB7XG4gICAgICAgIHRoaXMucmljaDEuc3RyaW5nID0gXCJcIjtcbiAgICAgICAgdGhpcy5yaWNoMi5zdHJpbmcgPSBcIlwiO1xuICAgICAgICBsZXQgdG9nZ2xlTmFtZSA9IGV2dC5ub2RlLm5hbWU7XG4gICAgICAgIHRoaXMuY3VyckluZGV4ID0gTnVtYmVyKHRvZ2dsZU5hbWUpIC0gMTtcbiAgICAgICAgdGhpcy5raUlVX3JlZnJlc2hVSSgpO1xuICAgIH1cblxuICAgIGtpSVVfb25CdG5UeCgpIHtcbiAgICAgICAgLy8gaWYgKGRtLnBsYXllci5pc0ZpcnN0VHgpIHtcbiAgICAgICAgLy8gICAgIFNES01hbmFnZXIua2lJVV9nb2hwVmNiYWNsb2soKTtcbiAgICAgICAgLy8gICAgIGRtLnBsYXllci5pc0ZpcnN0VHggPSAwO1xuICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgbGV0IGNmZyA9IEdhbWVNYW5hZ2VyLmluc3RhbmNlLmNvbmZpZztcbiAgICAgICAgLy8gICAgIGxldCB0aXBzID0gXCJcIlxuXG4gICAgICAgIC8vICAgICBpZiAoYmMuY291bnRyeSA9PSBcIjJcIikge1xuXG4gICAgICAgIC8vICAgICAgICAgdGlwcyA9IGNmZy5qc29uLmxhbmd1YWdlWydwdCddLnRpcHMyO1xuICAgICAgICAvLyAgICAgfSBlbHNlIGlmIChiYy5jb3VudHJ5ID09IFwiMTNcIikge1xuICAgICAgICAvLyAgICAgICAgIHRpcHMgPSBjZmcuanNvbi5sYW5ndWFnZVsnaW4nXS50aXBzMjtcbiAgICAgICAgLy8gICAgIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICAgICAgdGlwcyA9IGNmZy5qc29uLmxhbmd1YWdlWydlbiddLnRpcHMyO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyAgICAgR2FtZVV0aWxzLnNob3dUb2FzdCh0aXBzKTtcbiAgICAgICAgLy8gfVxuICAgIH1cblxuICAgIGtpSVVfY2hhbmdlUmljaDEoKSB7XG4gICAgICAgIC8vIGxldCBub3cgPSBOdW1iZXIoYmMuZHJhd0RhdGEubm93QmFsU2hvdylcbiAgICAgICAgLy8gbGV0IGN1cnIgPSBOdW1iZXIodGhpcy5jdXJyRGF0YS5kcmF3QmFsKVxuXG5cbiAgICAgICAgLy8gbGV0IHN0cjEgPSB0aGlzLnJpY2gxLnN0cmluZztcbiAgICAgICAgLy8gc3RyMSA9IHN0cjEucmVwbGFjZSgvXFwkL2csIGJjLm1vbmV5QWJicilcbiAgICAgICAgLy8gc3RyMSA9IHN0cjEucmVwbGFjZSgvXFwhL2csIHRoaXMuY3VyckRhdGEuZHJhd0JhbClcblxuICAgICAgICAvLyB0aGlzLnJpY2gxLnN0cmluZyA9IHN0cjE7XG5cbiAgICAgICAgLy8gbGV0IHN0cjIgPSB0aGlzLnJpY2gyLnN0cmluZztcbiAgICAgICAgLy8gc3RyMiA9IHN0cjIucmVwbGFjZSgvXFwkL2csIGJjLm1vbmV5QWJicilcbiAgICAgICAgLy8gc3RyMiA9IHN0cjIucmVwbGFjZSgvXFwhL2csIGJjLmRyYXdEYXRhLm5vd0JhbFNob3cpXG4gICAgICAgIC8vIHN0cjIgPSBzdHIyLnJlcGxhY2UoL1xcKi9nLCAoY3VyciAtIG5vdykudG9GaXhlZCgyKSlcbiAgICAgICAgLy8gdGhpcy5yaWNoMi5zdHJpbmcgPSBzdHIyO1xuICAgIH1cbiAgICBraUlVX2NoYW5nZVJpY2gyKCkge1xuICAgICAgICAvLyBsZXQgbm93ID0gTnVtYmVyKGJjLmRyYXdEYXRhLm5vd0xvZ0RheXMpXG4gICAgICAgIC8vIGxldCBjdXJyID0gTnVtYmVyKHRoaXMuY3VyckRhdGEubmVlZERheXMpXG5cblxuICAgICAgICAvLyBsZXQgc3RyMSA9IHRoaXMucmljaDMuc3RyaW5nO1xuICAgICAgICAvLyBzdHIxID0gc3RyMS5yZXBsYWNlKC9cXCEvZywgdGhpcy5jdXJyRGF0YS5uZWVkRGF5cyArIFwiXCIpXG4gICAgICAgIC8vIHN0cjEgPSBzdHIxLnJlcGxhY2UoL1xcKi9nLCBiYy5kcmF3RGF0YS5hY3RDb3VudENmZyArIFwiXCIpXG5cbiAgICAgICAgLy8gdGhpcy5yaWNoMy5zdHJpbmcgPSBzdHIxO1xuXG4gICAgICAgIC8vIGxldCBzdHIyID0gdGhpcy5yaWNoNC5zdHJpbmc7XG4gICAgICAgIC8vIHN0cjIgPSBzdHIyLnJlcGxhY2UoL1xcIS9nLCBiYy5kcmF3RGF0YS5ub3dMb2dEYXlzICsgXCJcIilcbiAgICAgICAgLy8gdGhpcy5yaWNoNC5zdHJpbmcgPSBzdHIyO1xuXG4gICAgICAgIC8vIGxldCBzdHIzID0gdGhpcy5yaWNoNS5zdHJpbmc7XG4gICAgICAgIC8vIHN0cjMgPSBzdHIzLnJlcGxhY2UoL1xcIS9nLCBiYy5kcmF3RGF0YS50b2RheUdhdGVzICsgXCJcIilcbiAgICAgICAgLy8gdGhpcy5yaWNoNS5zdHJpbmcgPSBzdHIzO1xuICAgIH1cbiAgICBraUlVX2NoYW5nZVJpY2gzKCkge1xuICAgICAgICAvLyBsZXQgbm93ID0gTnVtYmVyKGJjLmRyYXdEYXRhLm5vd0xldmVsKVxuICAgICAgICAvLyBsZXQgY3VyciA9IE51bWJlcih0aGlzLmN1cnJEYXRhLm5lZWRMZXZlbClcblxuXG4gICAgICAgIC8vIGxldCBzdHIxID0gdGhpcy5yaWNoNi5zdHJpbmc7XG4gICAgICAgIC8vIHN0cjEgPSBzdHIxLnJlcGxhY2UoL1xcIS9nLCB0aGlzLmN1cnJEYXRhLm5lZWRMZXZlbCArIFwiXCIpXG5cbiAgICAgICAgLy8gdGhpcy5yaWNoNi5zdHJpbmcgPSBzdHIxO1xuXG4gICAgICAgIC8vIGxldCBzdHIyID0gdGhpcy5yaWNoNy5zdHJpbmc7XG4gICAgICAgIC8vIHN0cjIgPSBzdHIyLnJlcGxhY2UoL1xcIS9nLCBiYy5kcmF3RGF0YS5ub3dMZXZlbCArIFwiXCIpXG4gICAgICAgIC8vIHN0cjIgPSBzdHIyLnJlcGxhY2UoL1xcKi9nLCAoY3VyciAtIG5vdykgKyBcIlwiKVxuICAgICAgICAvLyB0aGlzLnJpY2g3LnN0cmluZyA9IHN0cjI7XG4gICAgfVxuXG4gICAgcmVzZXQoKSB7XG5cbiAgICAgICAgdGhpcy51aV90aXBzMS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy51aV90aXBzMi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy51aV90aXBzMy5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19