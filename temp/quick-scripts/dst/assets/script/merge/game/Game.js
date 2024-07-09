
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
        // update (dt) {}
    }
    Game.prototype.onLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.uBtnMerge.on(cc.Node.EventType.TOUCH_END, this.onMerge, this);
                        this.uBtnProduce.on(cc.Node.EventType.TOUCH_END, this.onProduce, this);
                        this.uBtnTidyUp.on(cc.Node.EventType.TOUCH_END, this.onTidyUp, this);
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
            EventManager_1.eventManager.dispatch(Define_1.EventType.CHECK_MERGE);
        }
    };
    // 更新按钮的显示状态
    Game.prototype.updateBtn = function () {
        var canMerge = GameModule_1.gameModule.checkCanMerge();
        this.uBtnMerge.active = canMerge.length > 0;
    };
    // 合成
    Game.prototype.onMerge = function () {
        EventManager_1.eventManager.dispatch(Define_1.EventType.MERGE_COIN);
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
    };
    // 整理
    Game.prototype.onTidyUp = function () { };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvbWVyZ2UvZ2FtZS9HYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVEQUFzRDtBQUN0RCw0Q0FBOEM7QUFDOUMsa0RBQWlEO0FBQ2pELHFEQUFvRDtBQUNwRCwrQkFBMEI7QUFFcEIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUF3R0M7UUF0R0csY0FBUSxHQUFZLElBQUksQ0FBQztRQUd6QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUc1QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUczQixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLFVBQVU7UUFDRixXQUFLLEdBQVcsRUFBRSxDQUFDOztRQXlGM0IsaUJBQWlCO0lBQ3JCLENBQUM7SUF4RlMscUJBQU0sR0FBWjs7Ozs7d0JBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7d0JBQ25FLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO3dCQUN2RSxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQzt3QkFFckUsMkJBQVksQ0FBQyxFQUFFLENBQUMsa0JBQVMsQ0FBQyxXQUFXLEVBQUUsSUFB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bXBvcnQgeyBnYW1lTW9kdWxlIH0gZnJvbSAnLi4vZGF0YU1vZHVsZS9HYW1lTW9kdWxlJztcbmltcG9ydCB7IEV2ZW50VHlwZSB9IGZyb20gJy4uL21hbmFnZXIvRGVmaW5lJztcbmltcG9ydCB7IHVpbWFuYWdlciB9IGZyb20gJy4uL21hbmFnZXIvVWltYW5hZ2VyJztcbmltcG9ydCB7IGV2ZW50TWFuYWdlciB9IGZyb20gJy4uL3V0aWwvRXZlbnRNYW5hZ2VyJztcbmltcG9ydCBTbG90IGZyb20gJy4vU2xvdCc7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB1Qm94U2xvdDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB1QnRuUHJvZHVjZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB1QnRuVGlkeVVwOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHVCdG5NZXJnZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICAvLyDnvJPlrZjmp73kvY3nmoToioLngrlcbiAgICBwcml2YXRlIHNsb3RzOiBTbG90W10gPSBbXTtcblxuICAgIGFzeW5jIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy51QnRuTWVyZ2Uub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uTWVyZ2UsIHRoaXMpO1xuICAgICAgICB0aGlzLnVCdG5Qcm9kdWNlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblByb2R1Y2UsIHRoaXMpO1xuICAgICAgICB0aGlzLnVCdG5UaWR5VXAub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVGlkeVVwLCB0aGlzKTtcblxuICAgICAgICBldmVudE1hbmFnZXIub24oRXZlbnRUeXBlLkNIRUNLX01FUkdFLCB0aGlzLnVwZGF0ZUJ0biwgdGhpcyk7XG5cbiAgICAgICAgYXdhaXQgdGhpcy5hZGRTbG90KCk7XG4gICAgICAgIHRoaXMuZm9ybWF0U2xvdERhdGEoKTtcbiAgICAgICAgdGhpcy51cGRhdGVCdG4oKTtcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcblxuICAgIH1cblxuICAgIC8vIOWIneWni+WMlumihOWItue7hOS7tlxuICAgIGFzeW5jIGFkZFNsb3QoKSB7XG4gICAgICAgIGNvbnN0IHNsb3RXID0gMTE2O1xuICAgICAgICBjb25zdCBzbG90SCA9IDIxMjtcbiAgICAgICAgY29uc3QgZHggPSAoNjA4IC0gc2xvdFcgKiA0KSAvIDM7XG4gICAgICAgIGNvbnN0IGR5ID0gKHRoaXMudUJveFNsb3QuaGVpZ2h0IC0gc2xvdEggKiAyKSArIHNsb3RIO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCByb3cgPSBNYXRoLmZsb29yKGkgLyA0KTtcbiAgICAgICAgICAgIGNvbnN0IGNvbCA9IGkgJSA0O1xuXG4gICAgICAgICAgICBjb25zdCBzbG90UHJlZmFiID0gYXdhaXQgdWltYW5hZ2VyLmxvYWRQcmVmYWIoJ3ByZWZhYi9tZXJnZS9zbG90Jyk7XG4gICAgICAgICAgICBjb25zdCBzbG90ID0gY2MuaW5zdGFudGlhdGUoc2xvdFByZWZhYik7XG4gICAgICAgICAgICB0aGlzLnVCb3hTbG90LmFkZENoaWxkKHNsb3QpO1xuICAgICAgICAgICAgc2xvdC54ID0gY29sICogc2xvdFcgKyBkeCAqIGNvbDtcbiAgICAgICAgICAgIHNsb3QueSA9IC1zbG90SCAtIGR5ICogcm93O1xuXG4gICAgICAgICAgICB0aGlzLnNsb3RzLnB1c2goc2xvdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDmoLzlvI/ljJbloavlhYXmuLjmiI/mlbDmja5cbiAgICBwcml2YXRlIGZvcm1hdFNsb3REYXRhKCk6IHZvaWQge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5zbG90c1tpXS5nZXRDb21wb25lbnQoU2xvdCkuZm9ybWF0RGF0YShpLCBnYW1lTW9kdWxlLnNsb3REYXRhW2ldKTtcbiAgICAgICAgICAgIGV2ZW50TWFuYWdlci5kaXNwYXRjaChFdmVudFR5cGUuQ0hFQ0tfTUVSR0UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8g5pu05paw5oyJ6ZKu55qE5pi+56S654q25oCBXG4gICAgdXBkYXRlQnRuKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBjYW5NZXJnZSA9IGdhbWVNb2R1bGUuY2hlY2tDYW5NZXJnZSgpO1xuICAgICAgICB0aGlzLnVCdG5NZXJnZS5hY3RpdmUgPSBjYW5NZXJnZS5sZW5ndGggPiAwO1xuICAgIH1cblxuICAgIC8vIOWQiOaIkFxuICAgIG9uTWVyZ2UoKSB7XG4gICAgICAgIGV2ZW50TWFuYWdlci5kaXNwYXRjaChFdmVudFR5cGUuTUVSR0VfQ09JTik7XG4gICAgfVxuXG4gICAgLy8g5Y+R54mMXG4gICAgb25Qcm9kdWNlKCkge1xuICAgICAgICBjb25zdCBzdGFydFBvc0lkeHM6IG51bWJlcltdID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoZ2FtZU1vZHVsZS5zbG90RGF0YVtpXVtqXSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBzdGFydFBvc0lkeHMucHVzaChqKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGogPT09IDkpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRQb3NJZHhzLnB1c2goOSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbmV3Q29pbkRhdGEgPSBnYW1lTW9kdWxlLnByb2R1Y2VOZXdDb2luRGF0YSgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2xvdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuc2xvdHNbaV0uZ2V0Q29tcG9uZW50KFNsb3QpLnByb2R1Y2UoXG4gICAgICAgICAgICAgICAgbmV3Q29pbkRhdGFbaV0sXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLnVCdG5Qcm9kdWNlLmdldFBvc2l0aW9uKCkpLFxuICAgICAgICAgICAgICAgIHN0YXJ0UG9zSWR4c1tpXVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdhbWVNb2R1bGUubWVyZ2VQcm9kdWNlRGF0YShuZXdDb2luRGF0YSk7XG4gICAgfVxuXG4gICAgLy8g5pW055CGXG4gICAgb25UaWR5VXAoKSB7IH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=