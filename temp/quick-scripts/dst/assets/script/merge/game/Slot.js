
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvbWVyZ2UvZ2FtZS9TbG90LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVEQUFzRDtBQUN0RCw0Q0FBOEM7QUFDOUMsa0RBQWlEO0FBQ2pELHFEQUFvRDtBQUNwRCwrQkFBMEI7QUFFcEIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUFnWUM7UUEvWEcsWUFBWTtRQUNaLFNBQUcsR0FBVyxDQUFDLENBQUM7UUFDaEIsVUFBVTtRQUNWLHFCQUFlLEdBQWU7WUFDMUIsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDO1lBQ1QsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDO1lBQ1QsQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDO1lBQ1gsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDO1lBQ1QsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDO1lBQ1QsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDO1lBQ1QsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO1lBQ1IsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO1lBQ1IsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO1lBQ1IsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO1NBQ1gsQ0FBQztRQUdGLFdBQUssR0FBWSxJQUFJLENBQUM7UUFHdEIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUd0QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBR3RCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFHdEIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUd0QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBR3RCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFHdEIsV0FBSyxHQUFZLElBQUks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b3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnYW1lTW9kdWxlIH0gZnJvbSAnLi4vZGF0YU1vZHVsZS9HYW1lTW9kdWxlJztcbmltcG9ydCB7IEV2ZW50VHlwZSB9IGZyb20gJy4uL21hbmFnZXIvRGVmaW5lJztcbmltcG9ydCB7IHVpbWFuYWdlciB9IGZyb20gJy4uL21hbmFnZXIvVWltYW5hZ2VyJztcbmltcG9ydCB7IGV2ZW50TWFuYWdlciB9IGZyb20gJy4uL3V0aWwvRXZlbnRNYW5hZ2VyJztcbmltcG9ydCBDb2luIGZyb20gJy4vQ29pbic7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbG90IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICAvLyDlvZPliY3nrbnnoIHmp73kvY3nmoTntKLlvJVcbiAgICBpZHg6IG51bWJlciA9IDA7XG4gICAgLy8g562556CB55qE5Z2Q5qCH5L2N572uXG4gICAgY29pbk9yaWdpbmFsUG9zOiBudW1iZXJbXVtdID0gW1xuICAgICAgICBbNTgsIDE5N10sXG4gICAgICAgIFs1OCwgMTc4XSxcbiAgICAgICAgWzU4LCAxNTkuM10sXG4gICAgICAgIFs1OCwgMTQwXSxcbiAgICAgICAgWzU4LCAxMjFdLFxuICAgICAgICBbNTgsIDEwMl0sXG4gICAgICAgIFs1OCwgODNdLFxuICAgICAgICBbNTgsIDY0XSxcbiAgICAgICAgWzU4LCA0NV0sXG4gICAgICAgIFs1OCwgMjZdLFxuICAgIF07XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjb2luMDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjb2luMTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjb2luMjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjb2luMzogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjb2luNDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjb2luNTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjb2luNjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjb2luNzogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjb2luODogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjb2luOTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB1SW1nU2xvdFNlbGVjdDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB1SW1nU2xvdE1lcmdlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgLy8g5re75Yqg54K55Ye75LqL5Lu2XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMuc2VsZWN0QWN0aW9uLCB0aGlzKTtcbiAgICAgICAgZXZlbnRNYW5hZ2VyLm9uKEV2ZW50VHlwZS5NT1ZFX0NPSU4sIHRoaXMub25Nb3ZlLCB0aGlzKTtcbiAgICAgICAgZXZlbnRNYW5hZ2VyLm9uKEV2ZW50VHlwZS5NT1ZFX0VORCwgdGhpcy5vbk1vdmVFbmQsIHRoaXMpO1xuICAgICAgICBldmVudE1hbmFnZXIub24oRXZlbnRUeXBlLkNIRUNLX01FUkdFLCB0aGlzLm9uVXBkYXRlTWVyZ2VTdGF0dXMsIHRoaXMpO1xuICAgICAgICBldmVudE1hbmFnZXIub24oRXZlbnRUeXBlLk1FUkdFX0NPSU4sIHRoaXMub25NZXJnZSwgdGhpcyk7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgfVxuXG4gICAgZm9ybWF0RGF0YShpZHg6IG51bWJlciwgZGF0YTogbnVtYmVyW10pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pZHggPSBpZHg7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICAvLyBkYXRhXG4gICAgICAgICAgICBpZiAoZGF0YVtpXSAhPT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXNbYGNvaW4ke2l9YF0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzW2Bjb2luJHtpfWBdLmdldENvbXBvbmVudChDb2luKS5pbml0KHRoaXMuaWR4LCBkYXRhW2ldKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpc1tgY29pbiR7aX1gXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gcG9zXG4gICAgICAgICAgICB0aGlzW2Bjb2luJHtpfWBdLnNldFBvc2l0aW9uKGNjLnYyKHRoaXMuY29pbk9yaWdpbmFsUG9zW2ldWzBdLCB0aGlzLmNvaW5PcmlnaW5hbFBvc1tpXVsxXSkpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm5vZGUuc2V0U2libGluZ0luZGV4KHRoaXMuaWR4KTtcbiAgICB9XG5cbiAgICAvLyDpgInmi6nooYzkuLpcbiAgICBzZWxlY3RBY3Rpb24oKSB7XG4gICAgICAgIGlmIChnYW1lTW9kdWxlLmN1clNlbGVjdFNsb3RJZHggPT09IC0xKSB7XG4gICAgICAgICAgICAvLyDliJ3mrKHpgInmi6nooYzkuLpcbiAgICAgICAgICAgIHRoaXMub25TZWxlY3QoKTtcbiAgICAgICAgfSBlbHNlIGlmIChnYW1lTW9kdWxlLmN1clNlbGVjdFNsb3RJZHggPT09IHRoaXMuaWR4KSB7XG4gICAgICAgICAgICAvLyDlj5bmtojpgInmi6nooYzkuLpcbiAgICAgICAgICAgIHRoaXMub25EZVNlbGVjdCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8g56e75Yqo6KGM5Li6IOW9k+WJjeiKgueCueS4uuebruagh+iKgueCuVxuICAgICAgICAgICAgdGhpcy5vbkNoZWNrTW92ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8g6YCJ5Lit5b2T5YmN5qe95L2NXG4gICAgb25TZWxlY3QoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHNsb3REYXRhID0gZ2FtZU1vZHVsZS5zbG90RGF0YVt0aGlzLmlkeF07XG5cbiAgICAgICAgLy8g6YCJ5Lit5LqG56m655qE5qe95L2NXG4gICAgICAgIGlmIChzbG90RGF0YVswXSA9PT0gMCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ+mAieS4reS6huepuueahOanveS9jScpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5ZCI5bm25pWI5p6c5Lit77yM5LiN5Y+v6YCJ5LitXG4gICAgICAgIGlmIChnYW1lTW9kdWxlLm1lcmdlTG9jaykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ+ato+WcqOWQiOW5tuS4re+8jOaXoOazlemAieS4rScpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZ2FtZU1vZHVsZS5jdXJTZWxlY3RTbG90SWR4ID0gdGhpcy5pZHg7XG4gICAgICAgIHRoaXMudUltZ1Nsb3RTZWxlY3QuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5ub2RlLnNldFNpYmxpbmdJbmRleCg4KTtcblxuICAgICAgICAvLyDmjJHpgInlvoXmk43kvZznrbnnoIHnmoTntKLlvJVcbiAgICAgICAgZ2FtZU1vZHVsZS5jdXJTZWxlY3RDb2luSWR4cyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gOTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGlmIChzbG90RGF0YVtpXSA9PT0gMCkgY29udGludWU7XG5cbiAgICAgICAgICAgIGlmIChnYW1lTW9kdWxlLmN1clNlbGVjdENvaW5JZHhzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGdhbWVNb2R1bGUuY3VyU2VsZWN0Q29pbklkeHMucHVzaChpKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2xvdERhdGFbaV0gPT09IHNsb3REYXRhW2dhbWVNb2R1bGUuY3VyU2VsZWN0Q29pbklkeHNbZ2FtZU1vZHVsZS5jdXJTZWxlY3RDb2luSWR4cy5sZW5ndGggLSAxXV0pIHtcbiAgICAgICAgICAgICAgICBnYW1lTW9kdWxlLmN1clNlbGVjdENvaW5JZHhzLnB1c2goaSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2coYOmAieS4reS6huesrCR7dGhpcy5pZHh95Liq5qe955qEYCwgZ2FtZU1vZHVsZS5jdXJTZWxlY3RDb2luSWR4cyk7XG5cbiAgICAgICAgLy8g5a+55b6F5pON5L2c562556CB55qE5pi+56S65pWI5p6c6L+b6KGM5bGV56S6XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2FtZU1vZHVsZS5jdXJTZWxlY3RDb2luSWR4cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgdGFyUG9zWSA9IHRoaXMuY29pbk9yaWdpbmFsUG9zW2dhbWVNb2R1bGUuY3VyU2VsZWN0Q29pbklkeHNbaV1dWzFdICsgMjU7XG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzW2Bjb2luJHtnYW1lTW9kdWxlLmN1clNlbGVjdENvaW5JZHhzW2ldfWBdKVxuICAgICAgICAgICAgICAgIC50bygwLjUsIHsgeTogdGFyUG9zWSB9LCB7IGVhc2luZzogJ2JhY2tPdXQnIH0pXG4gICAgICAgICAgICAgICAgLnN0YXJ0KClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIOWPlua2iOmAieS4rVxuICAgIG9uRGVTZWxlY3QoKTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKCflj5bmtojpgInmi6knKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICAvLyBkYXRhXG4gICAgICAgICAgICBjb25zdCB0YXJQb3NZID0gdGhpcy5jb2luT3JpZ2luYWxQb3NbaV1bMV07XG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzW2Bjb2luJHtpfWBdKVxuICAgICAgICAgICAgICAgIC50bygwLjUsIHsgeTogdGFyUG9zWSB9LCB7IGVhc2luZzogJ2JhY2tPdXQnIH0pXG4gICAgICAgICAgICAgICAgLnN0YXJ0KClcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudUltZ1Nsb3RTZWxlY3QuYWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgZ2FtZU1vZHVsZS5jdXJTZWxlY3RTbG90SWR4ID0gLTE7XG4gICAgfVxuXG4gICAgLy8g56e75YqoXG4gICAgb25DaGVja01vdmUoKTogdm9pZCB7XG4gICAgICAgIC8vIOWmguaenOW9k+WJjeanveS9jeW3sua7oeWImeS4jeWFgeiuuOenu+WKqFxuICAgICAgICBpZiAoZ2FtZU1vZHVsZS5zbG90RGF0YVt0aGlzLmlkeF0uaW5kZXhPZigwKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfnrbnnoIHmlbDph4/lt7Lmu6HvvIzkuI3lj6/np7vliqgnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOWmguaenOW9k+WJjeanveS9jeacgOi/keeahOetueeggeS4juW9k+WJjemAieS4reeahOW+heenu+WKqOetueeggeexu+Wei+S4jeS4gOiHtCDkuI3lhYHorrjnp7vliqhcbiAgICAgICAgY29uc3QgY3VyU2xvdEluZm8gPSBnYW1lTW9kdWxlLmdldEZpcnN0VmFpbGROdW1CeVNsb3RJZHgodGhpcy5pZHgpO1xuICAgICAgICBjb25zdCBjdXJTZWxlY3RDb2luSW5mbyA9IGdhbWVNb2R1bGUuZ2V0Q3VyU2VsZWN0U2xvdEluZm8oKTtcbiAgICAgICAgaWYgKGN1clNsb3RJbmZvLnZhaWxkTnVtICE9PSAtMSAmJiBjdXJTbG90SW5mby52YWlsZE51bSAhPT0gY3VyU2VsZWN0Q29pbkluZm8ubnVtKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygn562556CB57G75Z6L5LiN5LiA6Ie0LCDkuI3lj6/np7vliqgnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChnYW1lTW9kdWxlLm1vdmVMb2NrKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygn5q2j5Zyo56e75Yqo5Lit77yM5peg5rOV5Lqn55Sf5pu05aSa56e75YqoJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyDnoa7lrprlj6/ku6Xnp7vliqjnmoTnrbnnoIHmlbDph49cbiAgICAgICAgY29uc3QgbW92ZUNudCA9IE1hdGgubWluKGN1clNsb3RJbmZvLnZhaWxkU3BhY2UsIGN1clNlbGVjdENvaW5JbmZvLmNudCk7XG5cbiAgICAgICAgLy8g56Gu5a6a56e75Yqo5Yiw55qE55uu5qCH5L2N572uXG4gICAgICAgIGNvbnN0IHRhclBvczogY2MuVmVjMltdID0gW107XG5cbiAgICAgICAgLy8g55uu5qCH5qe95L2N5Y+R55Sf5pWw5o2u5Y+Y5Yqo55qE5L2N572u57Si5byV6ZuGXG4gICAgICAgIGNvbnN0IHRhcklkeEFycjogbnVtYmVyW10gPSBbXTtcbiAgICAgICAgLy8g5Y6f5qe95L2N5Y+R55Sf5pWw5o2u5Y+Y5Yqo55qE5qe95L2N57Si5byV6ZuGXG4gICAgICAgIGNvbnN0IHNyY0lkeEFycjogbnVtYmVyW10gPSBbXTtcblxuICAgICAgICBsZXQgc3RhcnRQb3NJZHg6IG51bWJlciA9IGN1clNsb3RJbmZvLnZhaWxkSWR4ICsgMTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb3ZlQ250OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IG9yaVBvc1ggPSB0aGlzLmNvaW5PcmlnaW5hbFBvc1tzdGFydFBvc0lkeF1bMF07XG4gICAgICAgICAgICBjb25zdCBvcmlQb3NZID0gdGhpcy5jb2luT3JpZ2luYWxQb3Nbc3RhcnRQb3NJZHhdWzFdO1xuICAgICAgICAgICAgY29uc3QgZ2xvYmFsUG9zID0gdGhpcy5ub2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MihvcmlQb3NYLCBvcmlQb3NZKSk7XG4gICAgICAgICAgICB0YXJQb3MucHVzaChnbG9iYWxQb3MpO1xuICAgICAgICAgICAgdGFySWR4QXJyLnB1c2goc3RhcnRQb3NJZHgpO1xuICAgICAgICAgICAgc3JjSWR4QXJyLnB1c2goZ2FtZU1vZHVsZS5jdXJTZWxlY3RDb2luSWR4c1tpXSk7XG4gICAgICAgICAgICBzdGFydFBvc0lkeCsrO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g6YCa55+l5b6F56e75Yqo55qE5qe95L2N6L+b6KGM562556CB56e75YqoXG4gICAgICAgIGNvbnN0IGV2ZW50RGF0YSA9IHtcbiAgICAgICAgICAgIC8vIOWunumZheenu+WKqOaVsOmHj1xuICAgICAgICAgICAgbW92ZUNudCxcbiAgICAgICAgICAgIC8vIOebruagh+enu+WKqOeahOiKgueCueWvueW6lOS9jee9rijkvY4tPumrmClcbiAgICAgICAgICAgIHRhclBvcyxcbiAgICAgICAgICAgIC8vIOebruagh+anveS9jeWunumZheWPkeeUn+aVsOaNruWPmOWKqOeahOetueeggee0ouW8lembhijkvY4tPuS9jilcbiAgICAgICAgICAgIHRhcklkeEFycixcbiAgICAgICAgICAgIC8vIOWOn+anveS9jeWunumZheWPkeeUn+enu+WKqOeahOetueeggee0ouW8lembhijpq5gtPuS9jilcbiAgICAgICAgICAgIHNyY0lkeEFycixcbiAgICAgICAgICAgIC8vIOWunumZheWPkeeUn+eahOetueeggeexu+Wei1xuICAgICAgICAgICAgbnVtVHlwZTogY3VyU2VsZWN0Q29pbkluZm8ubnVtLFxuICAgICAgICAgICAgLy8g55uu5qCH5qe95L2N57Si5byVXG4gICAgICAgICAgICB0YXJTbG90SWR4OiB0aGlzLmlkeCxcbiAgICAgICAgfVxuICAgICAgICBldmVudE1hbmFnZXIuZGlzcGF0Y2goRXZlbnRUeXBlLk1PVkVfQ09JTiwgZXZlbnREYXRhKTtcbiAgICB9XG5cbiAgICAvLyDlvIDlp4vov5vooYznp7vliqhcbiAgICBvbk1vdmUoZSkge1xuICAgICAgICBjb25zdCBldmVudERhdGEgPSBlLmRhdGE7XG4gICAgICAgIGlmICh0aGlzLmlkeCAhPT0gZ2FtZU1vZHVsZS5jdXJTZWxlY3RTbG90SWR4KSByZXR1cm47XG4gICAgICAgIGNvbnNvbGUubG9nKGBvbk1vdmU6ICR7Z2FtZU1vZHVsZS5jdXJTZWxlY3RTbG90SWR4fSAtPiAke2V2ZW50RGF0YS50YXJTbG90SWR4fWApO1xuXG4gICAgICAgIGdhbWVNb2R1bGUubW92ZUxvY2sgPSB0cnVlO1xuXG4gICAgICAgIGNvbnN0IG1vdmVDbnQgPSBldmVudERhdGEubW92ZUNudDtcbiAgICAgICAgY29uc3QgdGFyV29ybGRQb3M6IGNjLlZlYzJbXSA9IGV2ZW50RGF0YS50YXJQb3M7XG4gICAgICAgIGNvbnN0IHRhckxvY2FsUG9zOiBjYy5WZWMyW10gPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IHRhcldvcmxkUG9zLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICB0YXJMb2NhbFBvcy5wdXNoKHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUih0YXJXb3JsZFBvc1tpXSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g55Sx6auY5Yiw5L2O55qE6L+b6KGM56e75YqoXG4gICAgICAgIGxldCBzdGFydElkeCA9IGdhbWVNb2R1bGUuY3VyU2VsZWN0Q29pbklkeHNbMF07XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbW92ZUNudDsgaSsrKSB7XG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzW2Bjb2luJHtzdGFydElkeH1gXSlcbiAgICAgICAgICAgICAgICAuZGVsYXkoMC4wMyAqIGkpXG4gICAgICAgICAgICAgICAgLnRvKDAuMSwgeyBwb3NpdGlvbjogdGFyTG9jYWxQb3NbaV0gfSlcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpID09PSBtb3ZlQ250IC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU1vZHVsZS50aWR5U2xvdERhdGEoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhclNsb3RJZHg6IGV2ZW50RGF0YS50YXJTbG90SWR4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bVR5cGU6IGV2ZW50RGF0YS5udW1UeXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyY0lkeEFycjogZXZlbnREYXRhLnNyY0lkeEFycixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJJZHhBcnI6IGV2ZW50RGF0YS50YXJJZHhBcnIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25EZVNlbGVjdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU1vZHVsZS5tb3ZlTG9jayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuc3RhcnQoKVxuXG4gICAgICAgICAgICBzdGFydElkeC0tO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Nb3ZlRW5kKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnb25Nb3ZlRW5kJyk7XG4gICAgICAgIHRoaXMuZm9ybWF0RGF0YSh0aGlzLmlkeCwgZ2FtZU1vZHVsZS5zbG90RGF0YVt0aGlzLmlkeF0pO1xuICAgIH1cblxuICAgIC8vIOWIt+aWsOWQiOaIkOeKtuaAgVxuICAgIG9uVXBkYXRlTWVyZ2VTdGF0dXMoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGNhbk1lcmdlID0gZ2FtZU1vZHVsZS5jaGVja0Nhbk1lcmdlQnlTbG90KHRoaXMuaWR4KTtcbiAgICAgICAgdGhpcy51SW1nU2xvdE1lcmdlLmFjdGl2ZSA9IGNhbk1lcmdlO1xuICAgICAgICB0aGlzLnNob3dNZXJnZUhpbnRBY3Rpb24oY2FuTWVyZ2UpO1xuICAgIH1cblxuICAgIC8vIOaPkOekuuWQiOaIkFxuICAgIHNob3dNZXJnZUhpbnRBY3Rpb24oY2FuTWVyZ2U6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgaWYgKGNhbk1lcmdlKSB7XG4gICAgICAgICAgICB0aGlzLnVJbWdTbG90TWVyZ2Uub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLnVJbWdTbG90TWVyZ2UpXG4gICAgICAgICAgICAgICAgLnRvKDEsIHsgb3BhY2l0eTogMjU1IH0pXG4gICAgICAgICAgICAgICAgLnRvKDEsIHsgb3BhY2l0eTogMCB9KVxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHsgdGhpcy5zaG93TWVyZ2VIaW50QWN0aW9uKGNhbk1lcmdlKSB9KVxuICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2MudHdlZW4odGhpcy51SW1nU2xvdE1lcmdlKS5zdG9wKCk7XG4gICAgICAgICAgICB0aGlzLnVJbWdTbG90TWVyZ2UuYWN0aXZlID0gY2FuTWVyZ2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDlkIjmiJBcbiAgICBvbk1lcmdlKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBjYW5NZXJnZSA9IGdhbWVNb2R1bGUuY2hlY2tDYW5NZXJnZUJ5U2xvdCh0aGlzLmlkeCk7XG4gICAgICAgIGlmICghY2FuTWVyZ2UpIHJldHVybjtcblxuICAgICAgICBnYW1lTW9kdWxlLm1lcmdlTG9jayArPSAxO1xuXG4gICAgICAgIC8vIOWQiOaIkOaViOaenFxuICAgICAgICBmb3IgKGxldCBpID0gOTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXNbYGNvaW4ke2l9YF0pXG4gICAgICAgICAgICAgICAgLmRlbGF5KDAuMDUgKiAoOSAtIGkpKVxuICAgICAgICAgICAgICAgIC50bygwLjEsIHsgc2NhbGU6IDAgfSlcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXNbYGNvaW4ke2l9YF0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXNbYGNvaW4ke2l9YF0uc2NhbGUgPSAxO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PT0gMCkgeyB0aGlzLm9uTWVyZ2VGaW5pc2goKTsgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDlkIjmiJDnu5PmnZ9cbiAgICBvbk1lcmdlRmluaXNoKCk6IHZvaWQge1xuICAgICAgICAvLyDlkIjmiJDnm67moIflgLxcbiAgICAgICAgY29uc3QgbWVyZ2VUYXJnZXRWYWx1ZSA9IGdhbWVNb2R1bGUuc2xvdERhdGFbdGhpcy5pZHhdWzBdICsgMTtcblxuICAgICAgICAvLyDlkIjmiJDlkI7nmoTmlbDmja5cbiAgICAgICAgZ2FtZU1vZHVsZS5zbG90RGF0YVt0aGlzLmlkeF0gPSBbbWVyZ2VUYXJnZXRWYWx1ZSwgbWVyZ2VUYXJnZXRWYWx1ZSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF07XG5cbiAgICAgICAgY29uc29sZS5sb2coYOanvSR7dGhpcy5pZHh9IOWQiOaIkCR7bWVyZ2VUYXJnZXRWYWx1ZX1gKTtcblxuICAgICAgICBnYW1lTW9kdWxlLm1lcmdlTG9jayAtPSAxO1xuICAgICAgICB0aGlzLmNvaW4wLnNjYWxlID0gMDtcbiAgICAgICAgdGhpcy5jb2luMS5zY2FsZSA9IDA7XG4gICAgICAgIHRoaXMuY29pbjAuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jb2luMS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmNvaW4wLmdldENvbXBvbmVudChDb2luKS5pbml0KHRoaXMuaWR4LCBtZXJnZVRhcmdldFZhbHVlKTtcbiAgICAgICAgdGhpcy5jb2luMS5nZXRDb21wb25lbnQoQ29pbikuaW5pdCh0aGlzLmlkeCwgbWVyZ2VUYXJnZXRWYWx1ZSk7XG5cbiAgICAgICAgY2MudHdlZW4odGhpcy5jb2luMClcbiAgICAgICAgICAgIC50bygwLjUsIHsgc2NhbGU6IDEgfSwgeyBlYXNpbmc6ICdiYWNrT3V0JyB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuY29pbjEpXG4gICAgICAgICAgICAudG8oMC41LCB7IHNjYWxlOiAxIH0sIHsgZWFzaW5nOiAnYmFja091dCcgfSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuXG4gICAgICAgIHRoaXMudUltZ1Nsb3RNZXJnZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyDnlJ/miJDnrbnnoIFcbiAgICBhc3luYyBwcm9kdWNlKG5ld0NvaW46IG51bWJlcltdLCBzdGFydEdsb2JhbFBvczogY2MuVmVjMiwgc3RhcnRQb3NJZHg6IG51bWJlcikge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmlkeCwgbmV3Q29pbik7XG4gICAgICAgIC8vIOS4jemcgOimgeeUn+aIkOWwseS4jeaTjeS9nOS6hlxuICAgICAgICBpZiAobmV3Q29pbi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMuaWR4feanveaXoOaWsOetueeggWApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy5pZHh9IOeUn+aIkOS6hmAsIG5ld0NvaW4pO1xuXG4gICAgICAgIC8vIOa0vuWPkeetueeggeaViOaenOeahOi1t+Wni+S9jee9rlxuICAgICAgICBjb25zdCBsb2NhbFBvc1NyYyA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihzdGFydEdsb2JhbFBvcyk7XG4gICAgICAgIC8vIOW3sue7j+WkhOeQhueahOetueeggVxuICAgICAgICBsZXQgZGVhbENudCA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmV3Q29pbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLy8g55Sf5oiQ5LiA5Liq6KGo546w55So55qE5paw562556CBXG4gICAgICAgICAgICBjb25zdCBuZXdDb2luTm9kZSA9IGF3YWl0IHRoaXMucHJvZHVjZUNvaW4oKTtcbiAgICAgICAgICAgIGNvbnN0IGNvaW4gPSBuZXdDb2luTm9kZS5nZXRDb21wb25lbnQoQ29pbik7XG4gICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobmV3Q29pbk5vZGUpO1xuICAgICAgICAgICAgY29pbi5ub2RlLnNldFBvc2l0aW9uKGxvY2FsUG9zU3JjKTtcbiAgICAgICAgICAgIGNvaW4ubm9kZS5zY2FsZSA9IDA7XG4gICAgICAgICAgICBjb2luLm5vZGUub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICBjb2luLmluaXQodGhpcy5pZHgsIG5ld0NvaW5baV0pO1xuXG4gICAgICAgICAgICAvLyDnoa7lrpropoHpo57nmoTnm67nmoTlnLDlnZDmoIdcbiAgICAgICAgICAgIGNvbnN0IHRhclBvc0lkeCA9IHN0YXJ0UG9zSWR4ICsgZGVhbENudDtcbiAgICAgICAgICAgIGNvbnN0IHBvc1RhciA9IHRoaXMuY29pbk9yaWdpbmFsUG9zW3N0YXJ0UG9zSWR4ICsgZGVhbENudF07XG4gICAgICAgICAgICBjb25zdCB0YXJQb3MgPSBjYy52Mihwb3NUYXJbMF0sIHBvc1RhclsxXSk7XG4gICAgICAgICAgICBjYy50d2Vlbihjb2luLm5vZGUpXG4gICAgICAgICAgICAgICAgLmRlbGF5KDAuMSAqIGRlYWxDbnQpXG4gICAgICAgICAgICAgICAgLnRvKDAuNSwgeyBzY2FsZTogMSwgb3BhY2l0eTogMjU1LCBwb3NpdGlvbjogdGFyUG9zIH0sIHsgZWFzaW5nOiAnY3ViaWNJbk91dCcgfSlcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvaW4ubm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXNbYGNvaW4ke3RhclBvc0lkeH1gXS5nZXRDb21wb25lbnQoQ29pbikuaW5pdCh0aGlzLmlkeCwgbmV3Q29pbltpXSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXNbYGNvaW4ke3RhclBvc0lkeH1gXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICBkZWFsQ250Kys7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBwcm9kdWNlQ29pbigpOiBQcm9taXNlPGNjLk5vZGU+IHtcbiAgICAgICAgY29uc3QgY29pblByZWZhYiA9IGF3YWl0IHVpbWFuYWdlci5sb2FkUHJlZmFiKCdwcmVmYWIvbWVyZ2UvY29pbicpO1xuICAgICAgICBjb25zdCBjb2luID0gY2MuaW5zdGFudGlhdGUoY29pblByZWZhYik7XG4gICAgICAgIHJldHVybiBjb2luO1xuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=