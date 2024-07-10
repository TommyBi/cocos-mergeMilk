
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/merge/game/Slot.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dcad5zWGmVAHYWaggo3w0WB', 'Slot');
// script/merge/game/Slot.ts

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
var Coin_1 = require("./Coin");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Slot = /** @class */ (function (_super) {
    __extends(Slot, _super);
    function Slot() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // 当前筹码槽位的索引
        _this.idx = 0;
        // 筹码的坐标位置
        _this.coinOriginalPos = [
            [58, 197],
            [58, 178],
            [58, 159.3],
            [58, 140],
            [58, 121],
            [58, 102],
            [58, 83],
            [58, 64],
            [58, 45],
            [58, 26],
        ];
        _this.coin0 = null;
        _this.coin1 = null;
        _this.coin2 = null;
        _this.coin3 = null;
        _this.coin4 = null;
        _this.coin5 = null;
        _this.coin6 = null;
        _this.coin7 = null;
        _this.coin8 = null;
        _this.coin9 = null;
        _this.uImgSlotSelect = null;
        _this.uImgSlotMerge = null;
        return _this;
        // update (dt) {}
    }
    Slot.prototype.onLoad = function () {
        // 添加点击事件
        this.node.on(cc.Node.EventType.TOUCH_END, this.selectAction, this);
        EventManager_1.eventManager.on(Define_1.EventType.MOVE_COIN, this.onMove, this);
        EventManager_1.eventManager.on(Define_1.EventType.MOVE_END, this.onMoveEnd, this);
        EventManager_1.eventManager.on(Define_1.EventType.CHECK_MERGE, this.onUpdateMergeStatus, this);
        EventManager_1.eventManager.on(Define_1.EventType.MERGE_COIN, this.onMerge, this);
    };
    Slot.prototype.start = function () {
    };
    Slot.prototype.formatData = function (idx, data) {
        this.idx = idx;
        for (var i = 0; i < 10; i++) {
            // data
            if (data[i] !== 0) {
                this["coin" + i].active = true;
                this["coin" + i].getComponent(Coin_1.default).init(this.idx, data[i]);
            }
            else {
                this["coin" + i].active = false;
            }
            // pos
            this["coin" + i].setPosition(cc.v2(this.coinOriginalPos[i][0], this.coinOriginalPos[i][1]));
        }
        this.node.setSiblingIndex(this.idx);
    };
    // 选择行为
    Slot.prototype.selectAction = function () {
        if (GameModule_1.gameModule.curSelectSlotIdx === -1) {
            // 初次选择行为
            this.onSelect();
        }
        else if (GameModule_1.gameModule.curSelectSlotIdx === this.idx) {
            // 取消选择行为
            this.onDeSelect();
        }
        else {
            // 移动行为 当前节点为目标节点
            this.onCheckMove();
        }
    };
    // 选中当前槽位
    Slot.prototype.onSelect = function () {
        var slotData = GameModule_1.gameModule.slotData[this.idx];
        // 选中了空的槽位
        if (slotData[0] === 0) {
            console.log('选中了空的槽位');
            return;
        }
        // 合并效果中，不可选中
        if (GameModule_1.gameModule.mergeLock) {
            console.log('正在合并中，无法选中');
            return;
        }
        GameModule_1.gameModule.curSelectSlotIdx = this.idx;
        this.uImgSlotSelect.active = true;
        this.node.setSiblingIndex(8);
        // 挑选待操作筹码的索引
        GameModule_1.gameModule.curSelectCoinIdxs = [];
        for (var i = 9; i >= 0; i--) {
            if (slotData[i] === 0)
                continue;
            if (GameModule_1.gameModule.curSelectCoinIdxs.length === 0) {
                GameModule_1.gameModule.curSelectCoinIdxs.push(i);
            }
            else if (slotData[i] === slotData[GameModule_1.gameModule.curSelectCoinIdxs[GameModule_1.gameModule.curSelectCoinIdxs.length - 1]]) {
                GameModule_1.gameModule.curSelectCoinIdxs.push(i);
            }
            else {
                break;
            }
        }
        console.log("\u9009\u4E2D\u4E86\u7B2C" + this.idx + "\u4E2A\u69FD\u7684", GameModule_1.gameModule.curSelectCoinIdxs);
        // 对待操作筹码的显示效果进行展示
        for (var i = 0; i < GameModule_1.gameModule.curSelectCoinIdxs.length; i++) {
            var tarPosY = this.coinOriginalPos[GameModule_1.gameModule.curSelectCoinIdxs[i]][1] + 25;
            cc.tween(this["coin" + GameModule_1.gameModule.curSelectCoinIdxs[i]])
                .to(0.5, { y: tarPosY }, { easing: 'backOut' })
                .start();
        }
    };
    // 取消选中
    Slot.prototype.onDeSelect = function () {
        console.log('取消选择');
        for (var i = 0; i < 10; i++) {
            // data
            var tarPosY = this.coinOriginalPos[i][1];
            cc.tween(this["coin" + i])
                .to(0.5, { y: tarPosY }, { easing: 'backOut' })
                .start();
        }
        this.uImgSlotSelect.active = false;
        // 重置选中状态
        GameModule_1.gameModule.curSelectSlotIdx = -1;
    };
    // 移动
    Slot.prototype.onCheckMove = function () {
        // 如果当前槽位已满则不允许移动
        if (GameModule_1.gameModule.slotData[this.idx].indexOf(0) === -1) {
            console.log('筹码数量已满，不可移动');
            return;
        }
        // 如果当前槽位最近的筹码与当前选中的待移动筹码类型不一致 不允许移动
        var curSlotInfo = GameModule_1.gameModule.getFirstVaildNumBySlotIdx(this.idx);
        var curSelectCoinInfo = GameModule_1.gameModule.getCurSelectSlotInfo();
        if (curSlotInfo.vaildNum !== -1 && curSlotInfo.vaildNum !== curSelectCoinInfo.num) {
            console.log('筹码类型不一致, 不可移动');
            return;
        }
        if (GameModule_1.gameModule.moveLock) {
            console.log('正在移动中，无法产生更多移动');
            return;
        }
        // 确定可以移动的筹码数量
        var moveCnt = Math.min(curSlotInfo.vaildSpace, curSelectCoinInfo.cnt);
        // 确定移动到的目标位置
        var tarPos = [];
        // 目标槽位发生数据变动的位置索引集
        var tarIdxArr = [];
        // 原槽位发生数据变动的槽位索引集
        var srcIdxArr = [];
        var startPosIdx = curSlotInfo.vaildIdx + 1;
        for (var i = 0; i < moveCnt; i++) {
            var oriPosX = this.coinOriginalPos[startPosIdx][0];
            var oriPosY = this.coinOriginalPos[startPosIdx][1];
            var globalPos = this.node.convertToWorldSpaceAR(cc.v2(oriPosX, oriPosY));
            tarPos.push(globalPos);
            tarIdxArr.push(startPosIdx);
            srcIdxArr.push(GameModule_1.gameModule.curSelectCoinIdxs[i]);
            startPosIdx++;
        }
        // 通知待移动的槽位进行筹码移动
        var eventData = {
            // 实际移动数量
            moveCnt: moveCnt,
            // 目标移动的节点对应位置(低->高)
            tarPos: tarPos,
            // 目标槽位实际发生数据变动的筹码索引集(低->低)
            tarIdxArr: tarIdxArr,
            // 原槽位实际发生移动的筹码索引集(高->低)
            srcIdxArr: srcIdxArr,
            // 实际发生的筹码类型
            numType: curSelectCoinInfo.num,
            // 目标槽位索引
            tarSlotIdx: this.idx,
        };
        EventManager_1.eventManager.dispatch(Define_1.EventType.MOVE_COIN, eventData);
    };
    // 开始进行移动
    Slot.prototype.onMove = function (e) {
        var _this = this;
        var eventData = e.data;
        if (this.idx !== GameModule_1.gameModule.curSelectSlotIdx)
            return;
        console.log("onMove: " + GameModule_1.gameModule.curSelectSlotIdx + " -> " + eventData.tarSlotIdx);
        GameModule_1.gameModule.moveLock = true;
        var moveCnt = eventData.moveCnt;
        var tarWorldPos = eventData.tarPos;
        var tarLocalPos = [];
        for (var i = tarWorldPos.length - 1; i >= 0; i--) {
            tarLocalPos.push(this.node.convertToNodeSpaceAR(tarWorldPos[i]));
        }
        // 由高到低的进行移动
        var startIdx = GameModule_1.gameModule.curSelectCoinIdxs[0];
        var _loop_1 = function (i) {
            cc.tween(this_1["coin" + startIdx])
                .delay(0.03 * i)
                .to(0.1, { position: tarLocalPos[i] })
                .call(function () {
                if (i === moveCnt - 1) {
                    GameModule_1.gameModule.tidySlotData({
                        tarSlotIdx: eventData.tarSlotIdx,
                        numType: eventData.numType,
                        srcIdxArr: eventData.srcIdxArr,
                        tarIdxArr: eventData.tarIdxArr,
                    });
                    _this.onDeSelect();
                    GameModule_1.gameModule.moveLock = false;
                }
            })
                .start();
            startIdx--;
        };
        var this_1 = this;
        for (var i = 0; i < moveCnt; i++) {
            _loop_1(i);
        }
    };
    Slot.prototype.onMoveEnd = function () {
        console.log('onMoveEnd');
        this.formatData(this.idx, GameModule_1.gameModule.slotData[this.idx]);
    };
    // 刷新合成状态
    Slot.prototype.onUpdateMergeStatus = function () {
        var canMerge = GameModule_1.gameModule.checkCanMergeBySlot(this.idx);
        this.uImgSlotMerge.active = canMerge;
        this.showMergeHintAction(canMerge);
    };
    // 提示合成
    Slot.prototype.showMergeHintAction = function (canMerge) {
        var _this = this;
        if (canMerge) {
            this.uImgSlotMerge.opacity = 0;
            cc.tween(this.uImgSlotMerge)
                .to(1, { opacity: 255 })
                .to(1, { opacity: 0 })
                .call(function () { _this.showMergeHintAction(canMerge); })
                .start();
        }
        else {
            cc.tween(this.uImgSlotMerge).stop();
            this.uImgSlotMerge.active = canMerge;
        }
    };
    // 合成
    Slot.prototype.onMerge = function () {
        var _this = this;
        var canMerge = GameModule_1.gameModule.checkCanMergeBySlot(this.idx);
        if (!canMerge)
            return;
        GameModule_1.gameModule.mergeLock += 1;
        var _loop_2 = function (i) {
            cc.tween(this_2["coin" + i])
                .delay(0.05 * (9 - i))
                .to(0.1, { scale: 0 })
                .call(function () {
                _this["coin" + i].active = false;
                _this["coin" + i].scale = 1;
                if (i === 0) {
                    _this.onMergeFinish();
                }
            })
                .start();
        };
        var this_2 = this;
        // 合成效果
        for (var i = 9; i >= 0; i--) {
            _loop_2(i);
        }
    };
    // 合成结束
    Slot.prototype.onMergeFinish = function () {
        // 合成目标值
        var mergeTargetValue = GameModule_1.gameModule.slotData[this.idx][0] + 1;
        // 合成后的数据
        GameModule_1.gameModule.slotData[this.idx] = [mergeTargetValue, mergeTargetValue, 0, 0, 0, 0, 0, 0, 0, 0];
        console.log("\u69FD" + this.idx + " \u5408\u6210" + mergeTargetValue);
        GameModule_1.gameModule.mergeLock -= 1;
        this.coin0.scale = 0;
        this.coin1.scale = 0;
        this.coin0.active = true;
        this.coin1.active = true;
        this.coin0.getComponent(Coin_1.default).init(this.idx, mergeTargetValue);
        this.coin1.getComponent(Coin_1.default).init(this.idx, mergeTargetValue);
        cc.tween(this.coin0)
            .to(0.5, { scale: 1 }, { easing: 'backOut' })
            .start();
        cc.tween(this.coin1)
            .to(0.5, { scale: 1 }, { easing: 'backOut' })
            .start();
        this.uImgSlotMerge.active = false;
    };
    // 生成筹码
    Slot.prototype.produce = function (newCoin, startGlobalPos, startPosIdx) {
        return __awaiter(this, void 0, void 0, function () {
            var localPosSrc, dealCnt, _loop_3, this_3, i;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(this.idx, newCoin);
                        // 不需要生成就不操作了
                        if (newCoin.length === 0) {
                            console.log(this.idx + "\u69FD\u65E0\u65B0\u7B79\u7801");
                            return [2 /*return*/];
                        }
                        console.log(this.idx + " \u751F\u6210\u4E86", newCoin);
                        localPosSrc = this.node.convertToNodeSpaceAR(startGlobalPos);
                        dealCnt = 0;
                        _loop_3 = function (i) {
                            var newCoinNode, coin, tarPosIdx, posTar, tarPos;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this_3.produceCoin()];
                                    case 1:
                                        newCoinNode = _a.sent();
                                        coin = newCoinNode.getComponent(Coin_1.default);
                                        this_3.node.addChild(newCoinNode);
                                        coin.node.setPosition(localPosSrc);
                                        coin.node.scale = 0;
                                        coin.node.opacity = 0;
                                        coin.init(this_3.idx, newCoin[i]);
                                        tarPosIdx = startPosIdx + dealCnt;
                                        posTar = this_3.coinOriginalPos[startPosIdx + dealCnt];
                                        tarPos = cc.v2(posTar[0], posTar[1]);
                                        cc.tween(coin.node)
                                            .delay(0.1 * dealCnt)
                                            .to(0.5, { scale: 1, opacity: 255, position: tarPos }, { easing: 'cubicInOut' })
                                            .call(function () {
                                            coin.node.destroy();
                                            _this["coin" + tarPosIdx].getComponent(Coin_1.default).init(_this.idx, newCoin[i]);
                                            _this["coin" + tarPosIdx].active = true;
                                        })
                                            .start();
                                        dealCnt++;
                                        return [2 /*return*/];
                                }
                            });
                        };
                        this_3 = this;
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < newCoin.length)) return [3 /*break*/, 4];
                        return [5 /*yield**/, _loop_3(i)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Slot.prototype.produceCoin = function () {
        return __awaiter(this, void 0, Promise, function () {
            var coinPrefab, coin;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Uimanager_1.uimanager.loadPrefab('prefab/merge/coin')];
                    case 1:
                        coinPrefab = _a.sent();
                        coin = cc.instantiate(coinPrefab);
                        return [2 /*return*/, coin];
                }
            });
        });
    };
    __decorate([
        property(cc.Node)
    ], Slot.prototype, "coin0", void 0);
    __decorate([
        property(cc.Node)
    ], Slot.prototype, "coin1", void 0);
    __decorate([
        property(cc.Node)
    ], Slot.prototype, "coin2", void 0);
    __decorate([
        property(cc.Node)
    ], Slot.prototype, "coin3", void 0);
    __decorate([
        property(cc.Node)
    ], Slot.prototype, "coin4", void 0);
    __decorate([
        property(cc.Node)
    ], Slot.prototype, "coin5", void 0);
    __decorate([
        property(cc.Node)
    ], Slot.prototype, "coin6", void 0);
    __decorate([
        property(cc.Node)
    ], Slot.prototype, "coin7", void 0);
    __decorate([
        property(cc.Node)
    ], Slot.prototype, "coin8", void 0);
    __decorate([
        property(cc.Node)
    ], Slot.prototype, "coin9", void 0);
    __decorate([
        property(cc.Node)
    ], Slot.prototype, "uImgSlotSelect", void 0);
    __decorate([
        property(cc.Node)
    ], Slot.prototype, "uImgSlotMerge", void 0);
    Slot = __decorate([
        ccclass
    ], Slot);
    return Slot;
}(cc.Component));
exports.default = Slot;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvbWVyZ2UvZ2FtZS9TbG90LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVEQUFzRDtBQUN0RCw0Q0FBOEM7QUFDOUMsa0RBQWlEO0FBQ2pELHFEQUFvRDtBQUNwRCwrQkFBMEI7QUFFcEIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUFpWUM7UUFoWUcsWUFBWTtRQUNaLFNBQUcsR0FBVyxDQUFDLENBQUM7UUFDaEIsVUFBVTtRQUNWLHFCQUFlLEdBQWU7WUFDMUIsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDO1lBQ1QsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDO1lBQ1QsQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDO1lBQ1gsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDO1lBQ1QsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDO1lBQ1QsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDO1lBQ1QsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO1lBQ1IsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO1lBQ1IsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO1lBQ1IsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO1NBQ1gsQ0FBQztRQUdGLFdBQUssR0FBWSxJQUFJLENBQUM7UUFHdEIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUd0QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBR3RCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFHdEIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUd0QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBR3RCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFHdEIsV0FBSyxHQUFZLElBQUks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b3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2FtZU1vZHVsZSB9IGZyb20gJy4uL2RhdGFNb2R1bGUvR2FtZU1vZHVsZSc7XG5pbXBvcnQgeyBFdmVudFR5cGUgfSBmcm9tICcuLi9tYW5hZ2VyL0RlZmluZSc7XG5pbXBvcnQgeyB1aW1hbmFnZXIgfSBmcm9tICcuLi9tYW5hZ2VyL1VpbWFuYWdlcic7XG5pbXBvcnQgeyBldmVudE1hbmFnZXIgfSBmcm9tICcuLi91dGlsL0V2ZW50TWFuYWdlcic7XG5pbXBvcnQgQ29pbiBmcm9tICcuL0NvaW4nO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xvdCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgLy8g5b2T5YmN562556CB5qe95L2N55qE57Si5byVXG4gICAgaWR4OiBudW1iZXIgPSAwO1xuICAgIC8vIOetueeggeeahOWdkOagh+S9jee9rlxuICAgIGNvaW5PcmlnaW5hbFBvczogbnVtYmVyW11bXSA9IFtcbiAgICAgICAgWzU4LCAxOTddLFxuICAgICAgICBbNTgsIDE3OF0sXG4gICAgICAgIFs1OCwgMTU5LjNdLFxuICAgICAgICBbNTgsIDE0MF0sXG4gICAgICAgIFs1OCwgMTIxXSxcbiAgICAgICAgWzU4LCAxMDJdLFxuICAgICAgICBbNTgsIDgzXSxcbiAgICAgICAgWzU4LCA2NF0sXG4gICAgICAgIFs1OCwgNDVdLFxuICAgICAgICBbNTgsIDI2XSxcbiAgICBdO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY29pbjA6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY29pbjE6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY29pbjI6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY29pbjM6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY29pbjQ6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY29pbjU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY29pbjY6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY29pbjc6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY29pbjg6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY29pbjk6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgdUltZ1Nsb3RTZWxlY3Q6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgdUltZ1Nsb3RNZXJnZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIC8vIOa3u+WKoOeCueWHu+S6i+S7tlxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLnNlbGVjdEFjdGlvbiwgdGhpcyk7XG4gICAgICAgIGV2ZW50TWFuYWdlci5vbihFdmVudFR5cGUuTU9WRV9DT0lOLCB0aGlzLm9uTW92ZSwgdGhpcyk7XG4gICAgICAgIGV2ZW50TWFuYWdlci5vbihFdmVudFR5cGUuTU9WRV9FTkQsIHRoaXMub25Nb3ZlRW5kLCB0aGlzKTtcbiAgICAgICAgZXZlbnRNYW5hZ2VyLm9uKEV2ZW50VHlwZS5DSEVDS19NRVJHRSwgdGhpcy5vblVwZGF0ZU1lcmdlU3RhdHVzLCB0aGlzKTtcbiAgICAgICAgZXZlbnRNYW5hZ2VyLm9uKEV2ZW50VHlwZS5NRVJHRV9DT0lOLCB0aGlzLm9uTWVyZ2UsIHRoaXMpO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgIH1cblxuICAgIGZvcm1hdERhdGEoaWR4OiBudW1iZXIsIGRhdGE6IG51bWJlcltdKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaWR4ID0gaWR4O1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgLy8gZGF0YVxuICAgICAgICAgICAgaWYgKGRhdGFbaV0gIT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzW2Bjb2luJHtpfWBdLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpc1tgY29pbiR7aX1gXS5nZXRDb21wb25lbnQoQ29pbikuaW5pdCh0aGlzLmlkeCwgZGF0YVtpXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXNbYGNvaW4ke2l9YF0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHBvc1xuICAgICAgICAgICAgdGhpc1tgY29pbiR7aX1gXS5zZXRQb3NpdGlvbihjYy52Mih0aGlzLmNvaW5PcmlnaW5hbFBvc1tpXVswXSwgdGhpcy5jb2luT3JpZ2luYWxQb3NbaV1bMV0pKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ub2RlLnNldFNpYmxpbmdJbmRleCh0aGlzLmlkeCk7XG4gICAgfVxuXG4gICAgLy8g6YCJ5oup6KGM5Li6XG4gICAgc2VsZWN0QWN0aW9uKCkge1xuICAgICAgICBpZiAoZ2FtZU1vZHVsZS5jdXJTZWxlY3RTbG90SWR4ID09PSAtMSkge1xuICAgICAgICAgICAgLy8g5Yid5qyh6YCJ5oup6KGM5Li6XG4gICAgICAgICAgICB0aGlzLm9uU2VsZWN0KCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZ2FtZU1vZHVsZS5jdXJTZWxlY3RTbG90SWR4ID09PSB0aGlzLmlkeCkge1xuICAgICAgICAgICAgLy8g5Y+W5raI6YCJ5oup6KGM5Li6XG4gICAgICAgICAgICB0aGlzLm9uRGVTZWxlY3QoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIOenu+WKqOihjOS4uiDlvZPliY3oioLngrnkuLrnm67moIfoioLngrlcbiAgICAgICAgICAgIHRoaXMub25DaGVja01vdmUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIOmAieS4reW9k+WJjeanveS9jVxuICAgIG9uU2VsZWN0KCk6IHZvaWQge1xuICAgICAgICBjb25zdCBzbG90RGF0YSA9IGdhbWVNb2R1bGUuc2xvdERhdGFbdGhpcy5pZHhdO1xuXG4gICAgICAgIC8vIOmAieS4reS6huepuueahOanveS9jVxuICAgICAgICBpZiAoc2xvdERhdGFbMF0gPT09IDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfpgInkuK3kuobnqbrnmoTmp73kvY0nKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOWQiOW5tuaViOaenOS4re+8jOS4jeWPr+mAieS4rVxuICAgICAgICBpZiAoZ2FtZU1vZHVsZS5tZXJnZUxvY2spIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmraPlnKjlkIjlubbkuK3vvIzml6Dms5XpgInkuK0nKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGdhbWVNb2R1bGUuY3VyU2VsZWN0U2xvdElkeCA9IHRoaXMuaWR4O1xuICAgICAgICB0aGlzLnVJbWdTbG90U2VsZWN0LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMubm9kZS5zZXRTaWJsaW5nSW5kZXgoOCk7XG5cbiAgICAgICAgLy8g5oyR6YCJ5b6F5pON5L2c562556CB55qE57Si5byVXG4gICAgICAgIGdhbWVNb2R1bGUuY3VyU2VsZWN0Q29pbklkeHMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDk7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBpZiAoc2xvdERhdGFbaV0gPT09IDApIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBpZiAoZ2FtZU1vZHVsZS5jdXJTZWxlY3RDb2luSWR4cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBnYW1lTW9kdWxlLmN1clNlbGVjdENvaW5JZHhzLnB1c2goaSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNsb3REYXRhW2ldID09PSBzbG90RGF0YVtnYW1lTW9kdWxlLmN1clNlbGVjdENvaW5JZHhzW2dhbWVNb2R1bGUuY3VyU2VsZWN0Q29pbklkeHMubGVuZ3RoIC0gMV1dKSB7XG4gICAgICAgICAgICAgICAgZ2FtZU1vZHVsZS5jdXJTZWxlY3RDb2luSWR4cy5wdXNoKGkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKGDpgInkuK3kuobnrKwke3RoaXMuaWR4feS4quanveeahGAsIGdhbWVNb2R1bGUuY3VyU2VsZWN0Q29pbklkeHMpO1xuXG4gICAgICAgIC8vIOWvueW+heaTjeS9nOetueeggeeahOaYvuekuuaViOaenOi/m+ihjOWxleekulxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdhbWVNb2R1bGUuY3VyU2VsZWN0Q29pbklkeHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHRhclBvc1kgPSB0aGlzLmNvaW5PcmlnaW5hbFBvc1tnYW1lTW9kdWxlLmN1clNlbGVjdENvaW5JZHhzW2ldXVsxXSArIDI1O1xuICAgICAgICAgICAgY2MudHdlZW4odGhpc1tgY29pbiR7Z2FtZU1vZHVsZS5jdXJTZWxlY3RDb2luSWR4c1tpXX1gXSlcbiAgICAgICAgICAgICAgICAudG8oMC41LCB7IHk6IHRhclBvc1kgfSwgeyBlYXNpbmc6ICdiYWNrT3V0JyB9KVxuICAgICAgICAgICAgICAgIC5zdGFydCgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDlj5bmtojpgInkuK1cbiAgICBvbkRlU2VsZWN0KCk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZygn5Y+W5raI6YCJ5oupJyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgLy8gZGF0YVxuICAgICAgICAgICAgY29uc3QgdGFyUG9zWSA9IHRoaXMuY29pbk9yaWdpbmFsUG9zW2ldWzFdO1xuICAgICAgICAgICAgY2MudHdlZW4odGhpc1tgY29pbiR7aX1gXSlcbiAgICAgICAgICAgICAgICAudG8oMC41LCB7IHk6IHRhclBvc1kgfSwgeyBlYXNpbmc6ICdiYWNrT3V0JyB9KVxuICAgICAgICAgICAgICAgIC5zdGFydCgpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVJbWdTbG90U2VsZWN0LmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgIC8vIOmHjee9rumAieS4reeKtuaAgVxuICAgICAgICBnYW1lTW9kdWxlLmN1clNlbGVjdFNsb3RJZHggPSAtMTtcbiAgICB9XG5cbiAgICAvLyDnp7vliqhcbiAgICBvbkNoZWNrTW92ZSgpOiB2b2lkIHtcbiAgICAgICAgLy8g5aaC5p6c5b2T5YmN5qe95L2N5bey5ruh5YiZ5LiN5YWB6K6456e75YqoXG4gICAgICAgIGlmIChnYW1lTW9kdWxlLnNsb3REYXRhW3RoaXMuaWR4XS5pbmRleE9mKDApID09PSAtMSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ+etueeggeaVsOmHj+W3sua7oe+8jOS4jeWPr+enu+WKqCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5aaC5p6c5b2T5YmN5qe95L2N5pyA6L+R55qE562556CB5LiO5b2T5YmN6YCJ5Lit55qE5b6F56e75Yqo562556CB57G75Z6L5LiN5LiA6Ie0IOS4jeWFgeiuuOenu+WKqFxuICAgICAgICBjb25zdCBjdXJTbG90SW5mbyA9IGdhbWVNb2R1bGUuZ2V0Rmlyc3RWYWlsZE51bUJ5U2xvdElkeCh0aGlzLmlkeCk7XG4gICAgICAgIGNvbnN0IGN1clNlbGVjdENvaW5JbmZvID0gZ2FtZU1vZHVsZS5nZXRDdXJTZWxlY3RTbG90SW5mbygpO1xuICAgICAgICBpZiAoY3VyU2xvdEluZm8udmFpbGROdW0gIT09IC0xICYmIGN1clNsb3RJbmZvLnZhaWxkTnVtICE9PSBjdXJTZWxlY3RDb2luSW5mby5udW0pIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfnrbnnoIHnsbvlnovkuI3kuIDoh7QsIOS4jeWPr+enu+WKqCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGdhbWVNb2R1bGUubW92ZUxvY2spIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmraPlnKjnp7vliqjkuK3vvIzml6Dms5XkuqfnlJ/mm7TlpJrnp7vliqgnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOehruWumuWPr+S7peenu+WKqOeahOetueeggeaVsOmHj1xuICAgICAgICBjb25zdCBtb3ZlQ250ID0gTWF0aC5taW4oY3VyU2xvdEluZm8udmFpbGRTcGFjZSwgY3VyU2VsZWN0Q29pbkluZm8uY250KTtcblxuICAgICAgICAvLyDnoa7lrprnp7vliqjliLDnmoTnm67moIfkvY3nva5cbiAgICAgICAgY29uc3QgdGFyUG9zOiBjYy5WZWMyW10gPSBbXTtcblxuICAgICAgICAvLyDnm67moIfmp73kvY3lj5HnlJ/mlbDmja7lj5jliqjnmoTkvY3nva7ntKLlvJXpm4ZcbiAgICAgICAgY29uc3QgdGFySWR4QXJyOiBudW1iZXJbXSA9IFtdO1xuICAgICAgICAvLyDljp/mp73kvY3lj5HnlJ/mlbDmja7lj5jliqjnmoTmp73kvY3ntKLlvJXpm4ZcbiAgICAgICAgY29uc3Qgc3JjSWR4QXJyOiBudW1iZXJbXSA9IFtdO1xuXG4gICAgICAgIGxldCBzdGFydFBvc0lkeDogbnVtYmVyID0gY3VyU2xvdEluZm8udmFpbGRJZHggKyAxO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1vdmVDbnQ7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgb3JpUG9zWCA9IHRoaXMuY29pbk9yaWdpbmFsUG9zW3N0YXJ0UG9zSWR4XVswXTtcbiAgICAgICAgICAgIGNvbnN0IG9yaVBvc1kgPSB0aGlzLmNvaW5PcmlnaW5hbFBvc1tzdGFydFBvc0lkeF1bMV07XG4gICAgICAgICAgICBjb25zdCBnbG9iYWxQb3MgPSB0aGlzLm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKG9yaVBvc1gsIG9yaVBvc1kpKTtcbiAgICAgICAgICAgIHRhclBvcy5wdXNoKGdsb2JhbFBvcyk7XG4gICAgICAgICAgICB0YXJJZHhBcnIucHVzaChzdGFydFBvc0lkeCk7XG4gICAgICAgICAgICBzcmNJZHhBcnIucHVzaChnYW1lTW9kdWxlLmN1clNlbGVjdENvaW5JZHhzW2ldKTtcbiAgICAgICAgICAgIHN0YXJ0UG9zSWR4Kys7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDpgJrnn6XlvoXnp7vliqjnmoTmp73kvY3ov5vooYznrbnnoIHnp7vliqhcbiAgICAgICAgY29uc3QgZXZlbnREYXRhID0ge1xuICAgICAgICAgICAgLy8g5a6e6ZmF56e75Yqo5pWw6YePXG4gICAgICAgICAgICBtb3ZlQ250LFxuICAgICAgICAgICAgLy8g55uu5qCH56e75Yqo55qE6IqC54K55a+55bqU5L2N572uKOS9ji0+6auYKVxuICAgICAgICAgICAgdGFyUG9zLFxuICAgICAgICAgICAgLy8g55uu5qCH5qe95L2N5a6e6ZmF5Y+R55Sf5pWw5o2u5Y+Y5Yqo55qE562556CB57Si5byV6ZuGKOS9ji0+5L2OKVxuICAgICAgICAgICAgdGFySWR4QXJyLFxuICAgICAgICAgICAgLy8g5Y6f5qe95L2N5a6e6ZmF5Y+R55Sf56e75Yqo55qE562556CB57Si5byV6ZuGKOmrmC0+5L2OKVxuICAgICAgICAgICAgc3JjSWR4QXJyLFxuICAgICAgICAgICAgLy8g5a6e6ZmF5Y+R55Sf55qE562556CB57G75Z6LXG4gICAgICAgICAgICBudW1UeXBlOiBjdXJTZWxlY3RDb2luSW5mby5udW0sXG4gICAgICAgICAgICAvLyDnm67moIfmp73kvY3ntKLlvJVcbiAgICAgICAgICAgIHRhclNsb3RJZHg6IHRoaXMuaWR4LFxuICAgICAgICB9XG4gICAgICAgIGV2ZW50TWFuYWdlci5kaXNwYXRjaChFdmVudFR5cGUuTU9WRV9DT0lOLCBldmVudERhdGEpO1xuICAgIH1cblxuICAgIC8vIOW8gOWni+i/m+ihjOenu+WKqFxuICAgIG9uTW92ZShlKSB7XG4gICAgICAgIGNvbnN0IGV2ZW50RGF0YSA9IGUuZGF0YTtcbiAgICAgICAgaWYgKHRoaXMuaWR4ICE9PSBnYW1lTW9kdWxlLmN1clNlbGVjdFNsb3RJZHgpIHJldHVybjtcbiAgICAgICAgY29uc29sZS5sb2coYG9uTW92ZTogJHtnYW1lTW9kdWxlLmN1clNlbGVjdFNsb3RJZHh9IC0+ICR7ZXZlbnREYXRhLnRhclNsb3RJZHh9YCk7XG5cbiAgICAgICAgZ2FtZU1vZHVsZS5tb3ZlTG9jayA9IHRydWU7XG5cbiAgICAgICAgY29uc3QgbW92ZUNudCA9IGV2ZW50RGF0YS5tb3ZlQ250O1xuICAgICAgICBjb25zdCB0YXJXb3JsZFBvczogY2MuVmVjMltdID0gZXZlbnREYXRhLnRhclBvcztcbiAgICAgICAgY29uc3QgdGFyTG9jYWxQb3M6IGNjLlZlYzJbXSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gdGFyV29ybGRQb3MubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIHRhckxvY2FsUG9zLnB1c2godGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHRhcldvcmxkUG9zW2ldKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDnlLHpq5jliLDkvY7nmoTov5vooYznp7vliqhcbiAgICAgICAgbGV0IHN0YXJ0SWR4ID0gZ2FtZU1vZHVsZS5jdXJTZWxlY3RDb2luSWR4c1swXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb3ZlQ250OyBpKyspIHtcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXNbYGNvaW4ke3N0YXJ0SWR4fWBdKVxuICAgICAgICAgICAgICAgIC5kZWxheSgwLjAzICogaSlcbiAgICAgICAgICAgICAgICAudG8oMC4xLCB7IHBvc2l0aW9uOiB0YXJMb2NhbFBvc1tpXSB9KVxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT09IG1vdmVDbnQgLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lTW9kdWxlLnRpZHlTbG90RGF0YSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyU2xvdElkeDogZXZlbnREYXRhLnRhclNsb3RJZHgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtVHlwZTogZXZlbnREYXRhLm51bVR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjSWR4QXJyOiBldmVudERhdGEuc3JjSWR4QXJyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcklkeEFycjogZXZlbnREYXRhLnRhcklkeEFycixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkRlU2VsZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lTW9kdWxlLm1vdmVMb2NrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5zdGFydCgpXG5cbiAgICAgICAgICAgIHN0YXJ0SWR4LS07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbk1vdmVFbmQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdvbk1vdmVFbmQnKTtcbiAgICAgICAgdGhpcy5mb3JtYXREYXRhKHRoaXMuaWR4LCBnYW1lTW9kdWxlLnNsb3REYXRhW3RoaXMuaWR4XSk7XG4gICAgfVxuXG4gICAgLy8g5Yi35paw5ZCI5oiQ54q25oCBXG4gICAgb25VcGRhdGVNZXJnZVN0YXR1cygpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgY2FuTWVyZ2UgPSBnYW1lTW9kdWxlLmNoZWNrQ2FuTWVyZ2VCeVNsb3QodGhpcy5pZHgpO1xuICAgICAgICB0aGlzLnVJbWdTbG90TWVyZ2UuYWN0aXZlID0gY2FuTWVyZ2U7XG4gICAgICAgIHRoaXMuc2hvd01lcmdlSGludEFjdGlvbihjYW5NZXJnZSk7XG4gICAgfVxuXG4gICAgLy8g5o+Q56S65ZCI5oiQXG4gICAgc2hvd01lcmdlSGludEFjdGlvbihjYW5NZXJnZTogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICBpZiAoY2FuTWVyZ2UpIHtcbiAgICAgICAgICAgIHRoaXMudUltZ1Nsb3RNZXJnZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMudUltZ1Nsb3RNZXJnZSlcbiAgICAgICAgICAgICAgICAudG8oMSwgeyBvcGFjaXR5OiAyNTUgfSlcbiAgICAgICAgICAgICAgICAudG8oMSwgeyBvcGFjaXR5OiAwIH0pXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4geyB0aGlzLnNob3dNZXJnZUhpbnRBY3Rpb24oY2FuTWVyZ2UpIH0pXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLnVJbWdTbG90TWVyZ2UpLnN0b3AoKTtcbiAgICAgICAgICAgIHRoaXMudUltZ1Nsb3RNZXJnZS5hY3RpdmUgPSBjYW5NZXJnZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIOWQiOaIkFxuICAgIG9uTWVyZ2UoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGNhbk1lcmdlID0gZ2FtZU1vZHVsZS5jaGVja0Nhbk1lcmdlQnlTbG90KHRoaXMuaWR4KTtcbiAgICAgICAgaWYgKCFjYW5NZXJnZSkgcmV0dXJuO1xuXG4gICAgICAgIGdhbWVNb2R1bGUubWVyZ2VMb2NrICs9IDE7XG5cbiAgICAgICAgLy8g5ZCI5oiQ5pWI5p6cXG4gICAgICAgIGZvciAobGV0IGkgPSA5OyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgY2MudHdlZW4odGhpc1tgY29pbiR7aX1gXSlcbiAgICAgICAgICAgICAgICAuZGVsYXkoMC4wNSAqICg5IC0gaSkpXG4gICAgICAgICAgICAgICAgLnRvKDAuMSwgeyBzY2FsZTogMCB9KVxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpc1tgY29pbiR7aX1gXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpc1tgY29pbiR7aX1gXS5zY2FsZSA9IDE7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpID09PSAwKSB7IHRoaXMub25NZXJnZUZpbmlzaCgpOyB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIOWQiOaIkOe7k+adn1xuICAgIG9uTWVyZ2VGaW5pc2goKTogdm9pZCB7XG4gICAgICAgIC8vIOWQiOaIkOebruagh+WAvFxuICAgICAgICBjb25zdCBtZXJnZVRhcmdldFZhbHVlID0gZ2FtZU1vZHVsZS5zbG90RGF0YVt0aGlzLmlkeF1bMF0gKyAxO1xuXG4gICAgICAgIC8vIOWQiOaIkOWQjueahOaVsOaNrlxuICAgICAgICBnYW1lTW9kdWxlLnNsb3REYXRhW3RoaXMuaWR4XSA9IFttZXJnZVRhcmdldFZhbHVlLCBtZXJnZVRhcmdldFZhbHVlLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXTtcblxuICAgICAgICBjb25zb2xlLmxvZyhg5qe9JHt0aGlzLmlkeH0g5ZCI5oiQJHttZXJnZVRhcmdldFZhbHVlfWApO1xuXG4gICAgICAgIGdhbWVNb2R1bGUubWVyZ2VMb2NrIC09IDE7XG4gICAgICAgIHRoaXMuY29pbjAuc2NhbGUgPSAwO1xuICAgICAgICB0aGlzLmNvaW4xLnNjYWxlID0gMDtcbiAgICAgICAgdGhpcy5jb2luMC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmNvaW4xLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuY29pbjAuZ2V0Q29tcG9uZW50KENvaW4pLmluaXQodGhpcy5pZHgsIG1lcmdlVGFyZ2V0VmFsdWUpO1xuICAgICAgICB0aGlzLmNvaW4xLmdldENvbXBvbmVudChDb2luKS5pbml0KHRoaXMuaWR4LCBtZXJnZVRhcmdldFZhbHVlKTtcblxuICAgICAgICBjYy50d2Vlbih0aGlzLmNvaW4wKVxuICAgICAgICAgICAgLnRvKDAuNSwgeyBzY2FsZTogMSB9LCB7IGVhc2luZzogJ2JhY2tPdXQnIH0pXG4gICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgY2MudHdlZW4odGhpcy5jb2luMSlcbiAgICAgICAgICAgIC50bygwLjUsIHsgc2NhbGU6IDEgfSwgeyBlYXNpbmc6ICdiYWNrT3V0JyB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG5cbiAgICAgICAgdGhpcy51SW1nU2xvdE1lcmdlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8vIOeUn+aIkOetueeggVxuICAgIGFzeW5jIHByb2R1Y2UobmV3Q29pbjogbnVtYmVyW10sIHN0YXJ0R2xvYmFsUG9zOiBjYy5WZWMyLCBzdGFydFBvc0lkeDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaWR4LCBuZXdDb2luKTtcbiAgICAgICAgLy8g5LiN6ZyA6KaB55Sf5oiQ5bCx5LiN5pON5L2c5LqGXG4gICAgICAgIGlmIChuZXdDb2luLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy5pZHh95qe95peg5paw562556CBYCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLmlkeH0g55Sf5oiQ5LqGYCwgbmV3Q29pbik7XG5cbiAgICAgICAgLy8g5rS+5Y+R562556CB5pWI5p6c55qE6LW35aeL5L2N572uXG4gICAgICAgIGNvbnN0IGxvY2FsUG9zU3JjID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHN0YXJ0R2xvYmFsUG9zKTtcbiAgICAgICAgLy8g5bey57uP5aSE55CG55qE562556CBXG4gICAgICAgIGxldCBkZWFsQ250ID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdDb2luLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvLyDnlJ/miJDkuIDkuKrooajnjrDnlKjnmoTmlrDnrbnnoIFcbiAgICAgICAgICAgIGNvbnN0IG5ld0NvaW5Ob2RlID0gYXdhaXQgdGhpcy5wcm9kdWNlQ29pbigpO1xuICAgICAgICAgICAgY29uc3QgY29pbiA9IG5ld0NvaW5Ob2RlLmdldENvbXBvbmVudChDb2luKTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChuZXdDb2luTm9kZSk7XG4gICAgICAgICAgICBjb2luLm5vZGUuc2V0UG9zaXRpb24obG9jYWxQb3NTcmMpO1xuICAgICAgICAgICAgY29pbi5ub2RlLnNjYWxlID0gMDtcbiAgICAgICAgICAgIGNvaW4ubm9kZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgIGNvaW4uaW5pdCh0aGlzLmlkeCwgbmV3Q29pbltpXSk7XG5cbiAgICAgICAgICAgIC8vIOehruWumuimgemjnueahOebrueahOWcsOWdkOagh1xuICAgICAgICAgICAgY29uc3QgdGFyUG9zSWR4ID0gc3RhcnRQb3NJZHggKyBkZWFsQ250O1xuICAgICAgICAgICAgY29uc3QgcG9zVGFyID0gdGhpcy5jb2luT3JpZ2luYWxQb3Nbc3RhcnRQb3NJZHggKyBkZWFsQ250XTtcbiAgICAgICAgICAgIGNvbnN0IHRhclBvcyA9IGNjLnYyKHBvc1RhclswXSwgcG9zVGFyWzFdKTtcbiAgICAgICAgICAgIGNjLnR3ZWVuKGNvaW4ubm9kZSlcbiAgICAgICAgICAgICAgICAuZGVsYXkoMC4xICogZGVhbENudClcbiAgICAgICAgICAgICAgICAudG8oMC41LCB7IHNjYWxlOiAxLCBvcGFjaXR5OiAyNTUsIHBvc2l0aW9uOiB0YXJQb3MgfSwgeyBlYXNpbmc6ICdjdWJpY0luT3V0JyB9KVxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29pbi5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpc1tgY29pbiR7dGFyUG9zSWR4fWBdLmdldENvbXBvbmVudChDb2luKS5pbml0KHRoaXMuaWR4LCBuZXdDb2luW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpc1tgY29pbiR7dGFyUG9zSWR4fWBdLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgICAgIGRlYWxDbnQrKztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIHByb2R1Y2VDb2luKCk6IFByb21pc2U8Y2MuTm9kZT4ge1xuICAgICAgICBjb25zdCBjb2luUHJlZmFiID0gYXdhaXQgdWltYW5hZ2VyLmxvYWRQcmVmYWIoJ3ByZWZhYi9tZXJnZS9jb2luJyk7XG4gICAgICAgIGNvbnN0IGNvaW4gPSBjYy5pbnN0YW50aWF0ZShjb2luUHJlZmFiKTtcbiAgICAgICAgcmV0dXJuIGNvaW47XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==