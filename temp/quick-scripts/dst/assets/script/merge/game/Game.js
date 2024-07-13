
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/merge/game/Game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '650a2ldzTZM6Joa8EAO498E', 'Game');
// script/merge/game/Game.ts

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
var GameModule_1 = require("../dataModule/GameModule");
var Define_1 = require("../manager/Define");
var Uimanager_1 = require("../manager/Uimanager");
var EventManager_1 = require("../util/EventManager");
var Slot_1 = require("./Slot");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Game = /** @class */ (function (_super) {
    __extends(Game, _super);
    function Game() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.uBoxSlot = null;
        _this.uBtnProduce = null;
        _this.uBtnTidyUp = null;
        _this.uBtnMerge = null;
        // 缓存槽位的节点
        _this.slots = [];
        return _this;
    }
    Game.prototype.onLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.uBtnMerge.on(cc.Node.EventType.TOUCH_END, this.onMerge, this);
                        this.uBtnProduce.on(cc.Node.EventType.TOUCH_END, this.onProduce, this);
                        this.uBtnTidyUp.on(cc.Node.EventType.TOUCH_END, this.onTidy, this);
                        EventManager_1.eventManager.on(Define_1.EventType.CHECK_MERGE, this.updateBtn, this);
                        return [4 /*yield*/, this.addSlot()];
                    case 1:
                        _a.sent();
                        this.formatSlotData();
                        this.updateBtn();
                        return [2 /*return*/];
                }
            });
        });
    };
    Game.prototype.start = function () {
    };
    // 初始化预制组件
    Game.prototype.addSlot = function () {
        return __awaiter(this, void 0, void 0, function () {
            var slotW, slotH, dx, dy, i, row, col, slotPrefab, slot;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        slotW = 116;
                        slotH = 212;
                        dx = (608 - slotW * 4) / 3;
                        dy = (this.uBoxSlot.height - slotH * 2) + slotH;
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < 8)) return [3 /*break*/, 4];
                        row = Math.floor(i / 4);
                        col = i % 4;
                        return [4 /*yield*/, Uimanager_1.uimanager.loadPrefab('prefab/merge/slot')];
                    case 2:
                        slotPrefab = _a.sent();
                        slot = cc.instantiate(slotPrefab);
                        this.uBoxSlot.addChild(slot);
                        slot.x = col * slotW + dx * col;
                        slot.y = -slotH - dy * row;
                        this.slots.push(slot);
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    // 格式化填充游戏数据
    Game.prototype.formatSlotData = function () {
        for (var i = 0; i < 8; i++) {
            this.slots[i].getComponent(Slot_1.default).formatData(i, GameModule_1.gameModule.slotData[i]);
        }
        EventManager_1.eventManager.dispatch(Define_1.EventType.CHECK_MERGE);
    };
    // 更新按钮的显示状态
    Game.prototype.updateBtn = function () {
        var canMerge = GameModule_1.gameModule.checkCanMerge();
        this.uBtnMerge.active = canMerge.length > 0;
    };
    // 合成
    Game.prototype.onMerge = function () {
        EventManager_1.eventManager.dispatch(Define_1.EventType.MERGE_COIN);
        // 点击合成后，提前主动隐藏掉“合成”按钮避免连点
        this.uBtnMerge.active = false;
    };
    // 发牌
    Game.prototype.onProduce = function () {
        var startPosIdxs = [];
        for (var i = 0; i < 8; i++) {
            for (var j = 0; j < 10; j++) {
                if (GameModule_1.gameModule.slotData[i][j] === 0) {
                    startPosIdxs.push(j);
                    break;
                }
                if (j === 9) {
                    startPosIdxs.push(9);
                }
            }
        }
        var newCoinData = GameModule_1.gameModule.produceNewCoinData();
        for (var i = 0; i < this.slots.length; i++) {
            this.slots[i].getComponent(Slot_1.default).produce(newCoinData[i], this.node.convertToWorldSpaceAR(this.uBtnProduce.getPosition()), startPosIdxs[i]);
        }
        GameModule_1.gameModule.mergeProduceData(newCoinData);
        // 发牌完成，检测是否可以合成
        EventManager_1.eventManager.dispatch(Define_1.EventType.CHECK_MERGE);
    };
    // 整理
    Game.prototype.onTidy = function () {
        GameModule_1.gameModule.tidyData();
        this.formatSlotData();
    };
    __decorate([
        property(cc.Node)
    ], Game.prototype, "uBoxSlot", void 0);
    __decorate([
        property(cc.Node)
    ], Game.prototype, "uBtnProduce", void 0);
    __decorate([
        property(cc.Node)
    ], Game.prototype, "uBtnTidyUp", void 0);
    __decorate([
        property(cc.Node)
    ], Game.prototype, "uBtnMerge", void 0);
    Game = __decorate([
        ccclass
    ], Game);
    return Game;
}(cc.Component));
exports.default = Game;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvbWVyZ2UvZ2FtZS9HYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVEQUFzRDtBQUN0RCw0Q0FBOEM7QUFDOUMsa0RBQWlEO0FBQ2pELHFEQUFvRDtBQUNwRCwrQkFBMEI7QUFFcEIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUErR0M7UUE3R0csY0FBUSxHQUFZLElBQUksQ0FBQztRQUd6QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUc1QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUczQixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLFVBQVU7UUFDRixXQUFLLEdBQVcsRUFBRSxDQUFDOztJQWlHL0IsQ0FBQztJQS9GUyxxQkFBTSxHQUFaOzs7Ozt3QkFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQzt3QkFDbkUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7d0JBQ3ZFLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO3dCQUVuRSwyQkFBWSxDQUFDLEVBQUUsQ0FBQyxrQkFBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBUyxF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QUFFLENBQUMsSUFBSSxDQUFDOzJDQUNRO0lBWFQsSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQStHeEI7SUFBRCxXQUFDO0NBL0dELEFBK0dDLENBL0dpQyxFQUFFLENBQUMsU0FBUyxHQStHN0M7a0JBL0dvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2FtZU1vZHVsZSB9IGZyb20gJy4uL2RhdGFNb2R1bGUvR2FtZU1vZHVsZSc7XG5pbXBvcnQgeyBFdmVudFR5cGUgfSBmcm9tICcuLi9tYW5hZ2VyL0RlZmluZSc7XG5pbXBvcnQgeyB1aW1hbmFnZXIgfSBmcm9tICcuLi9tYW5hZ2VyL1VpbWFuYWdlcic7XG5pbXBvcnQgeyBldmVudE1hbmFnZXIgfSBmcm9tICcuLi91dGlsL0V2ZW50TWFuYWdlcic7XG5pbXBvcnQgU2xvdCBmcm9tICcuL1Nsb3QnO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgdUJveFNsb3Q6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgdUJ0blByb2R1Y2U6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgdUJ0blRpZHlVcDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB1QnRuTWVyZ2U6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgLy8g57yT5a2Y5qe95L2N55qE6IqC54K5XG4gICAgcHJpdmF0ZSBzbG90czogU2xvdFtdID0gW107XG5cbiAgICBhc3luYyBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMudUJ0bk1lcmdlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vbk1lcmdlLCB0aGlzKTtcbiAgICAgICAgdGhpcy51QnRuUHJvZHVjZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Qcm9kdWNlLCB0aGlzKTtcbiAgICAgICAgdGhpcy51QnRuVGlkeVVwLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblRpZHksIHRoaXMpO1xuXG4gICAgICAgIGV2ZW50TWFuYWdlci5vbihFdmVudFR5cGUuQ0hFQ0tfTUVSR0UsIHRoaXMudXBkYXRlQnRuLCB0aGlzKTtcblxuICAgICAgICBhd2FpdCB0aGlzLmFkZFNsb3QoKTtcbiAgICAgICAgdGhpcy5mb3JtYXRTbG90RGF0YSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZUJ0bigpO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuXG4gICAgfVxuXG4gICAgLy8g5Yid5aeL5YyW6aKE5Yi257uE5Lu2XG4gICAgYXN5bmMgYWRkU2xvdCgpIHtcbiAgICAgICAgY29uc3Qgc2xvdFcgPSAxMTY7XG4gICAgICAgIGNvbnN0IHNsb3RIID0gMjEyO1xuICAgICAgICBjb25zdCBkeCA9ICg2MDggLSBzbG90VyAqIDQpIC8gMztcbiAgICAgICAgY29uc3QgZHkgPSAodGhpcy51Qm94U2xvdC5oZWlnaHQgLSBzbG90SCAqIDIpICsgc2xvdEg7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IE1hdGguZmxvb3IoaSAvIDQpO1xuICAgICAgICAgICAgY29uc3QgY29sID0gaSAlIDQ7XG5cbiAgICAgICAgICAgIGNvbnN0IHNsb3RQcmVmYWIgPSBhd2FpdCB1aW1hbmFnZXIubG9hZFByZWZhYigncHJlZmFiL21lcmdlL3Nsb3QnKTtcbiAgICAgICAgICAgIGNvbnN0IHNsb3QgPSBjYy5pbnN0YW50aWF0ZShzbG90UHJlZmFiKTtcbiAgICAgICAgICAgIHRoaXMudUJveFNsb3QuYWRkQ2hpbGQoc2xvdCk7XG4gICAgICAgICAgICBzbG90LnggPSBjb2wgKiBzbG90VyArIGR4ICogY29sO1xuICAgICAgICAgICAgc2xvdC55ID0gLXNsb3RIIC0gZHkgKiByb3c7XG5cbiAgICAgICAgICAgIHRoaXMuc2xvdHMucHVzaChzbG90KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIOagvOW8j+WMluWhq+WFhea4uOaIj+aVsOaNrlxuICAgIHByaXZhdGUgZm9ybWF0U2xvdERhdGEoKTogdm9pZCB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnNsb3RzW2ldLmdldENvbXBvbmVudChTbG90KS5mb3JtYXREYXRhKGksIGdhbWVNb2R1bGUuc2xvdERhdGFbaV0pO1xuICAgICAgICB9XG4gICAgICAgIGV2ZW50TWFuYWdlci5kaXNwYXRjaChFdmVudFR5cGUuQ0hFQ0tfTUVSR0UpO1xuICAgIH1cblxuICAgIC8vIOabtOaWsOaMiemSrueahOaYvuekuueKtuaAgVxuICAgIHVwZGF0ZUJ0bigpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgY2FuTWVyZ2UgPSBnYW1lTW9kdWxlLmNoZWNrQ2FuTWVyZ2UoKTtcbiAgICAgICAgdGhpcy51QnRuTWVyZ2UuYWN0aXZlID0gY2FuTWVyZ2UubGVuZ3RoID4gMDtcbiAgICB9XG5cbiAgICAvLyDlkIjmiJBcbiAgICBvbk1lcmdlKCkge1xuICAgICAgICBldmVudE1hbmFnZXIuZGlzcGF0Y2goRXZlbnRUeXBlLk1FUkdFX0NPSU4pO1xuICAgICAgICAvLyDngrnlh7vlkIjmiJDlkI7vvIzmj5DliY3kuLvliqjpmpDol4/mjonigJzlkIjmiJDigJ3mjInpkq7pgb/lhY3ov57ngrlcbiAgICAgICAgdGhpcy51QnRuTWVyZ2UuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8g5Y+R54mMXG4gICAgb25Qcm9kdWNlKCkge1xuICAgICAgICBjb25zdCBzdGFydFBvc0lkeHM6IG51bWJlcltdID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoZ2FtZU1vZHVsZS5zbG90RGF0YVtpXVtqXSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBzdGFydFBvc0lkeHMucHVzaChqKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGogPT09IDkpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRQb3NJZHhzLnB1c2goOSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbmV3Q29pbkRhdGEgPSBnYW1lTW9kdWxlLnByb2R1Y2VOZXdDb2luRGF0YSgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2xvdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuc2xvdHNbaV0uZ2V0Q29tcG9uZW50KFNsb3QpLnByb2R1Y2UoXG4gICAgICAgICAgICAgICAgbmV3Q29pbkRhdGFbaV0sXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLnVCdG5Qcm9kdWNlLmdldFBvc2l0aW9uKCkpLFxuICAgICAgICAgICAgICAgIHN0YXJ0UG9zSWR4c1tpXVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdhbWVNb2R1bGUubWVyZ2VQcm9kdWNlRGF0YShuZXdDb2luRGF0YSk7XG5cbiAgICAgICAgLy8g5Y+R54mM5a6M5oiQ77yM5qOA5rWL5piv5ZCm5Y+v5Lul5ZCI5oiQXG4gICAgICAgIGV2ZW50TWFuYWdlci5kaXNwYXRjaChFdmVudFR5cGUuQ0hFQ0tfTUVSR0UpO1xuICAgIH1cblxuICAgIC8vIOaVtOeQhlxuICAgIG9uVGlkeSgpIHtcbiAgICAgICAgZ2FtZU1vZHVsZS50aWR5RGF0YSgpO1xuXG4gICAgICAgIHRoaXMuZm9ybWF0U2xvdERhdGEoKTtcbiAgICB9XG59XG4iXX0=