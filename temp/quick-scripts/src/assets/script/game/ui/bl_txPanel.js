"use strict";
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