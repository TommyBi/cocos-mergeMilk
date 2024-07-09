"use strict";
cc._RF.push(module, '3ffb16hFyNCiZ8W02iaH924', 'bl_Logic');
// script/game/ui/bl_Logic.ts

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
var Utils_1 = require("../../utils/Utils");
var DataManager_1 = require("../../common/DataManager");
var GlobalDefines_1 = require("../../common/consts/GlobalDefines");
var bl_ball_1 = require("./bl_ball");
var Global_1 = require("../../common/Global");
var GlobalEvents_1 = require("../../common/GlobalEvents");
var logger_1 = require("../../utils/logger");
var bl_Config_1 = require("./bl_Config");
var bl_tipsPanel_1 = require("./bl_tipsPanel");
var RewardUtils_1 = require("../../common/comp/reward/RewardUtils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var bl_Logic = /** @class */ (function (_super) {
    __extends(bl_Logic, _super);
    function bl_Logic() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ico = null;
        _this.bl_list = [];
        _this.bl_dropXs = [];
        _this.bl_cloneDropx = [];
        _this.bl_scList = [];
        _this.isComposeIng = false;
        _this.currBalls = [];
        return _this;
    }
    bl_Logic.prototype.onLoad = function () {
        this.bl_dropXs = this.bl_initDropX(-this.node.width / 2 + 200, this.node.width / 2 - 200, 10);
    };
    bl_Logic.prototype.onEnable = function () {
        Global_1.GlobalEvent.on(GlobalEvents_1.EventBallClick.NAME, this.onEventBallClick, this);
    };
    bl_Logic.prototype.onDisable = function () {
        Global_1.GlobalEvent.off(GlobalEvents_1.EventBallClick.NAME, this.onEventBallClick, this);
    };
    bl_Logic.prototype.start = function () {
    };
    bl_Logic.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var i, point, node, scr;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.bl_list = DataManager_1.dm.player.arr;
                        Utils_1.Utils.arrayCopy(this.bl_dropXs, this.bl_cloneDropx);
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < this.bl_list.length)) return [3 /*break*/, 4];
                        point = this.bl_getPoint(this.bl_list[i]);
                        return [4 /*yield*/, this.bl_createBall(this.bl_list[i], point, true)];
                    case 2:
                        node = _a.sent();
                        scr = node.getComponent(bl_ball_1.default);
                        this.bl_scList.push(scr);
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    //获得筹码预制件
    bl_Logic.prototype.bl_createBall = function (idx, point, isDrop) {
        return __awaiter(this, void 0, void 0, function () {
            var url, p, b, scr;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = 'prefab/game/ball/' + idx;
                        return [4 /*yield*/, Utils_1.Utils.loadPefab(url)];
                    case 1:
                        p = _a.sent();
                        b = cc.instantiate(p);
                        b.parent = this.node;
                        scr = b.getComponent(bl_ball_1.default);
                        // this.bl_scList.push(scr);
                        scr.init(idx, isDrop);
                        b.setPosition(point);
                        return [2 /*return*/, b];
                }
            });
        });
    };
    bl_Logic.prototype.bl_getPoint = function (idx) {
        var y = GlobalDefines_1.GlobalDefines.ScreenHeight / 2;
        y += Math.random() * 200 * idx;
        var x = Utils_1.Utils.getRandomByArr(this.bl_cloneDropx);
        return cc.v2(x, y);
    };
    bl_Logic.prototype.bl_initDropX = function (min, max, count) {
        var totalRange = max - min + 1;
        var averageSpace = totalRange / count; // 每个点应该占据的平均空间  
        // const remainder = totalRange % count; // 无法均匀分配的余数  
        var points = [];
        var currentPoint = min;
        // 首先分配完整的平均空间  
        for (var i = 0; i < count; i++) {
            points.push(currentPoint);
            currentPoint += averageSpace;
        }
        var arr1 = points.filter(function (value) { return value >= 0; });
        var arr2 = points.filter(function (value) { return value < 0; });
        arr1.sort(function (a, b) { return a - b; });
        arr2.sort(function (a, b) { return b - a; });
        points = arr1.concat(arr2);
        return points;
    };
    bl_Logic.prototype.onEventBallClick = function (evt) {
        var _this = this;
        if (this.isComposeIng)
            return;
        var arr = this.bl_scList.filter(function (value) {
            return value.rId == evt.rId;
        });
        if (arr.length > 0) {
            this.currBalls = this.bl_scList.filter(function (value) {
                return value.id == evt.id;
            });
            this.currTarget = arr[0];
            var alls = this.bl_findBall();
            if (alls.size == 0)
                return;
            var arr1 = Array.from(alls);
            arr1.sort(function (a, b) {
                var d1 = Utils_1.Utils.distanceByNode(_this.currTarget.node, a.node);
                var d2 = Utils_1.Utils.distanceByNode(_this.currTarget.node, b.node);
                return d1 - d2;
            });
            arr1.unshift(this.currTarget);
            this.bl_compose(arr1);
            logger_1.Logger.debug("合成：", arr1);
        }
    };
    bl_Logic.prototype.bl_compose = function (arr) {
        return __awaiter(this, void 0, void 0, function () {
            var targets, deletes, i, newList, i, node, point, newNode, scr, num, i;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isComposeIng = true;
                        targets = [];
                        deletes = [];
                        arr.forEach(function (element, index) {
                            if (index % 2 == 0 && index != arr.length - 1) {
                                targets.push(element);
                            }
                            else {
                                deletes.push(element);
                            }
                        });
                        for (i = 0; i < deletes.length; i++) {
                            deletes[i].delete();
                        }
                        deletes = null;
                        // if (targets.length % 2 == 0) {
                        //     let needDelete = targets[targets.length - 1];
                        //     targets.splice(targets.length - 1, 1);
                        //     needDelete.delete();
                        //     targets.unshift(this.currTarget);
                        // }
                        this.bl_resetBallList();
                        newList = [];
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < targets.length)) return [3 /*break*/, 4];
                        node = targets[i].node;
                        if (node)
                            node.removeComponent(cc.RigidBody);
                        point = targets[i].node.getPosition();
                        return [4 /*yield*/, this.bl_createBall(targets[i].id + 1, point)];
                    case 2:
                        newNode = _a.sent();
                        scr = newNode.getComponent(bl_ball_1.default);
                        this.bl_scList.push(scr);
                        newNode.scale = 0;
                        newList.push(scr);
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4:
                        num = 0;
                        for (i = 0; i < targets.length; i++) {
                            targets[i].playHide(function () {
                                num++;
                                if (num >= targets.length) {
                                    for (var i_1 = 0; i_1 < newList.length; i_1++) {
                                        newList[i_1].playShow();
                                    }
                                    targets = null;
                                    _this.scheduleOnce(function () {
                                        _this.bl_resetBallList();
                                        if (newList[0].id == bl_Config_1.bc.maxId) {
                                            for (var i_2 = 0; i_2 < newList.length; i_2++) {
                                                var best = newList[i_2];
                                                best.removeRigidbody();
                                                _this.flyBest(best.node);
                                            }
                                        }
                                        else {
                                            if (newList.length > 1) {
                                                _this.bl_compose(newList);
                                            }
                                            else {
                                                bl_tipsPanel_1.default.Show(21);
                                                _this.flyIco();
                                                _this.isComposeIng = false;
                                                _this.bl_drop();
                                                _this.bl_cacheList();
                                            }
                                        }
                                    }, .2);
                                }
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    bl_Logic.prototype.bl_cacheList = function () {
        var arr = [];
        for (var i = 0; i < this.bl_scList.length; i++) {
            arr.push(this.bl_scList[i].id);
        }
        DataManager_1.dm.player.arr = arr;
    };
    bl_Logic.prototype.bl_resetBallList = function () {
        this.currBalls = [];
        var arr = this.bl_scList.filter(function (value) {
            return value && !value.isDestory;
        });
        this.bl_scList = arr;
    };
    bl_Logic.prototype.bl_findBall = function () {
        var nearbyPoints = this.bl_getCanBall(this.currTarget);
        var visitedPoints = new Set(nearbyPoints); // 使用Set来存储已访问的点  
        // 迭代查询  
        while (nearbyPoints.length > 0) {
            var newNearbyPoints = [];
            for (var _i = 0, nearbyPoints_1 = nearbyPoints; _i < nearbyPoints_1.length; _i++) {
                var ball = nearbyPoints_1[_i];
                // 查询距离当前点为5个单位内的点，但排除已访问过的点  
                var tempNearbyPoints = this.bl_getCanBall(ball);
                for (var _a = 0, tempNearbyPoints_1 = tempNearbyPoints; _a < tempNearbyPoints_1.length; _a++) {
                    var tempPoint = tempNearbyPoints_1[_a];
                    if (!visitedPoints.has(tempPoint)) {
                        newNearbyPoints.push(tempPoint);
                        visitedPoints.add(tempPoint);
                    }
                }
            }
            nearbyPoints = newNearbyPoints; // 更新需要查询的点  
        }
        // 返回所有找到的点（包括初始查询和迭代查询的结果）  
        return visitedPoints;
    };
    bl_Logic.prototype.bl_getCanBall = function (target) {
        var _this = this;
        var arr = this.currBalls.filter(function (value) {
            var dis = Utils_1.Utils.distanceByNode(target.node, value.node);
            return dis < target.node.width + 20 && value.rId != _this.currTarget.rId;
        });
        return arr;
    };
    bl_Logic.prototype.bl_drop = function () {
        return __awaiter(this, void 0, void 0, function () {
            var maxY, random, len, maxId, typeNum, rates, ids, i, i, index, id, point, node, scr;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        maxY = this.bl_checkMaxPointY();
                        if (maxY > this.node.height / 2 - 200)
                            return [2 /*return*/];
                        if (maxY > this.node.height / 4) {
                            random = Utils_1.Utils.randomFloat(0, 1);
                            if (random < .5)
                                return [2 /*return*/];
                        }
                        len = Utils_1.Utils.randomInt(1, 15);
                        if (maxY > this.node.height / 4 + 100) {
                            len = Utils_1.Utils.randomInt(1, 10);
                        }
                        maxId = this.bl_checkMaxId();
                        maxId = maxId > 3 ? 3 : maxId;
                        typeNum = Utils_1.Utils.randomIntInclusive(1, maxId);
                        rates = Utils_1.Utils.getRandomRates(typeNum);
                        ids = [];
                        for (i = 1; i <= typeNum; i++) {
                            ids.push(i);
                        }
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < len)) return [3 /*break*/, 4];
                        index = Utils_1.Utils.randomByWeightList(rates);
                        id = ids[index];
                        point = this.bl_getPoint(id);
                        return [4 /*yield*/, this.bl_createBall(id, point, true)];
                    case 2:
                        node = _a.sent();
                        scr = node.getComponent(bl_ball_1.default);
                        this.bl_scList.push(scr);
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4:
                        this.bl_cacheList();
                        return [2 /*return*/];
                }
            });
        });
    };
    //检测当前最大值
    bl_Logic.prototype.bl_checkMaxId = function () {
        var flag = 0;
        this.bl_scList.forEach(function (element) {
            if (element.id > flag)
                flag = element.id;
        });
        return flag;
    };
    bl_Logic.prototype.bl_checkMaxPointY = function () {
        var flag = 0;
        this.bl_scList.forEach(function (element) {
            if (element.node.y > flag)
                flag = element.node.y;
        });
        return flag;
    };
    //刷新
    bl_Logic.prototype.bl_onRefresh = function () {
        if (Utils_1.Utils.btnLock()) {
            return;
        }
        this.node.destroyAllChildren();
        this.bl_scList = [];
        this.init();
    };
    bl_Logic.prototype.flyIco = function () {
        var target = bl_Config_1.bc.top.ico2;
        RewardUtils_1.RewardUtils.resBoomByNode(this.ico, target, 10);
    };
    bl_Logic.prototype.flyBest = function (node) {
        var target = bl_Config_1.bc.top.ico1;
        var p1 = target.convertToWorldSpaceAR(cc.v2(0, 0));
        var p2 = this.node.convertToNodeSpaceAR(p1);
        cc.tween(node).to(.2, { x: 0, y: 0, scale: 1.1 }).delay(1).to(.5, { position: p2, scale: .5 }, cc.easeSineIn()).to(.2, { scale: 0 }, cc.easeSineIn()).call(function () {
            Global_1.GlobalEvent.dispatchEvent(new GlobalEvents_1.EventChangeTop(2, 1));
        }).start();
    };
    __decorate([
        property(cc.Node)
    ], bl_Logic.prototype, "ico", void 0);
    bl_Logic = __decorate([
        ccclass
    ], bl_Logic);
    return bl_Logic;
}(cc.Component));
exports.default = bl_Logic;

cc._RF.pop();