
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/game/ui/bl_Logic.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZ2FtZS91aS9ibF9Mb2dpYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBMEM7QUFDMUMsd0RBQThDO0FBQzlDLG1FQUFrRTtBQUNsRSxxQ0FBZ0M7QUFDaEMsOENBQWtEO0FBQ2xELDBEQUEyRTtBQUMzRSw2Q0FBNEM7QUFDNUMseUNBQWlDO0FBQ2pDLCtDQUEwQztBQUMxQyxvRUFBbUU7QUFHN0QsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUErVEM7UUE1VEcsU0FBRyxHQUFZLElBQUksQ0FBQztRQUVwQixhQUFPLEdBQUcsRUFBRSxDQUFDO1FBRWIsZUFBUyxHQUFHLEVBQUUsQ0FBQztRQUVmLG1CQUFhLEdBQUcsRUFBRSxDQUFDO1FBRW5CLGVBQVMsR0FBYyxFQUFFLENBQUM7UUFFMUIsa0JBQVksR0FBRyxLQUFLLENBQUM7UUEwRXJCLGVBQVMsR0FBYyxFQUFFLENBQUM7O0lBd085QixDQUFDO0lBalRHLHlCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDbEcsQ0FBQztJQUVELDJCQUFRLEdBQVI7UUFDSSxvQkFBVyxDQUFDLEVBQUUsQ0FBQyw2QkFBYyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUNELDRCQUFT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VUFBVSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDdkosb0JBQVcsQ0FBQyxhQUFhLENBQUMsSUFBSSw2QkFBYyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hELENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBRWYsQ0FBQztJQXhURDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lDQUNFO0lBSEgsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQStUNUI7SUFBRCxlQUFDO0NBL1RELEFBK1RDLENBL1RxQyxFQUFFLENBQUMsU0FBUyxHQStUakQ7a0JBL1RvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVXRpbHMgfSBmcm9tIFwiLi4vLi4vdXRpbHMvVXRpbHNcIjtcbmltcG9ydCB7IGRtIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9EYXRhTWFuYWdlclwiO1xuaW1wb3J0IHsgR2xvYmFsRGVmaW5lcyB9IGZyb20gXCIuLi8uLi9jb21tb24vY29uc3RzL0dsb2JhbERlZmluZXNcIjtcbmltcG9ydCBibF9iYWxsIGZyb20gXCIuL2JsX2JhbGxcIjtcbmltcG9ydCB7IEdsb2JhbEV2ZW50IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9HbG9iYWxcIjtcbmltcG9ydCB7IEV2ZW50QmFsbENsaWNrLCBFdmVudENoYW5nZVRvcCB9IGZyb20gXCIuLi8uLi9jb21tb24vR2xvYmFsRXZlbnRzXCI7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiLi4vLi4vdXRpbHMvbG9nZ2VyXCI7XG5pbXBvcnQgeyBiYyB9IGZyb20gXCIuL2JsX0NvbmZpZ1wiO1xuaW1wb3J0IGJsX3RpcHNQYW5lbCBmcm9tIFwiLi9ibF90aXBzUGFuZWxcIjtcbmltcG9ydCB7IFJld2FyZFV0aWxzIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9jb21wL3Jld2FyZC9SZXdhcmRVdGlsc1wiO1xuaW1wb3J0IHsgc20gfSBmcm9tIFwiLi4vLi4vY29tbW9uL1NjZW5lTWFuYWdlclwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgYmxfTG9naWMgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgaWNvOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIGJsX2xpc3QgPSBbXTtcblxuICAgIGJsX2Ryb3BYcyA9IFtdO1xuXG4gICAgYmxfY2xvbmVEcm9weCA9IFtdO1xuXG4gICAgYmxfc2NMaXN0OiBibF9iYWxsW10gPSBbXTtcblxuICAgIGlzQ29tcG9zZUluZyA9IGZhbHNlO1xuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5ibF9kcm9wWHMgPSB0aGlzLmJsX2luaXREcm9wWCgtdGhpcy5ub2RlLndpZHRoIC8gMiArIDIwMCwgdGhpcy5ub2RlLndpZHRoIC8gMiAtIDIwMCwgMTApO1xuICAgIH1cblxuICAgIG9uRW5hYmxlKCkge1xuICAgICAgICBHbG9iYWxFdmVudC5vbihFdmVudEJhbGxDbGljay5OQU1FLCB0aGlzLm9uRXZlbnRCYWxsQ2xpY2ssIHRoaXMpO1xuICAgIH1cbiAgICBvbkRpc2FibGUoKSB7XG4gICAgICAgIEdsb2JhbEV2ZW50Lm9mZihFdmVudEJhbGxDbGljay5OQU1FLCB0aGlzLm9uRXZlbnRCYWxsQ2xpY2ssIHRoaXMpO1xuICAgIH1cblxuXG4gICAgc3RhcnQoKSB7XG5cbiAgICB9XG4gICAgYXN5bmMgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5ibF9saXN0ID0gZG0ucGxheWVyLmFycjtcbiAgICAgICAgVXRpbHMuYXJyYXlDb3B5KHRoaXMuYmxfZHJvcFhzLCB0aGlzLmJsX2Nsb25lRHJvcHgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYmxfbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHBvaW50ID0gdGhpcy5ibF9nZXRQb2ludCh0aGlzLmJsX2xpc3RbaV0pO1xuICAgICAgICAgICAgbGV0IG5vZGUgPSBhd2FpdCB0aGlzLmJsX2NyZWF0ZUJhbGwodGhpcy5ibF9saXN0W2ldLCBwb2ludCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgc2NyID0gbm9kZS5nZXRDb21wb25lbnQoYmxfYmFsbClcbiAgICAgICAgICAgIHRoaXMuYmxfc2NMaXN0LnB1c2goc2NyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLy/ojrflvpfnrbnnoIHpooTliLbku7ZcbiAgICBhc3luYyBibF9jcmVhdGVCYWxsKGlkeCwgcG9pbnQsIGlzRHJvcD8pIHtcbiAgICAgICAgbGV0IHVybCA9ICdwcmVmYWIvZ2FtZS9iYWxsLycgKyBpZHg7XG4gICAgICAgIGxldCBwID0gYXdhaXQgVXRpbHMubG9hZFBlZmFiKHVybCk7XG4gICAgICAgIGxldCBiOiBjYy5Ob2RlID0gY2MuaW5zdGFudGlhdGUocCk7XG4gICAgICAgIGIucGFyZW50ID0gdGhpcy5ub2RlO1xuICAgICAgICBsZXQgc2NyID0gYi5nZXRDb21wb25lbnQoYmxfYmFsbClcbiAgICAgICAgLy8gdGhpcy5ibF9zY0xpc3QucHVzaChzY3IpO1xuICAgICAgICBzY3IuaW5pdChpZHgsIGlzRHJvcCk7XG4gICAgICAgIGIuc2V0UG9zaXRpb24ocG9pbnQpO1xuXG4gICAgICAgIHJldHVybiBiO1xuICAgIH1cblxuICAgIGJsX2dldFBvaW50KGlkeCkge1xuICAgICAgICBsZXQgeSA9IEdsb2JhbERlZmluZXMuU2NyZWVuSGVpZ2h0IC8gMjtcbiAgICAgICAgeSArPSBNYXRoLnJhbmRvbSgpICogMjAwICogaWR4O1xuICAgICAgICBsZXQgeCA9IFV0aWxzLmdldFJhbmRvbUJ5QXJyKHRoaXMuYmxfY2xvbmVEcm9weCk7XG4gICAgICAgIHJldHVybiBjYy52Mih4LCB5KTtcbiAgICB9XG5cbiAgICBibF9pbml0RHJvcFgobWluLCBtYXgsIGNvdW50KSB7XG4gICAgICAgIGNvbnN0IHRvdGFsUmFuZ2UgPSBtYXggLSBtaW4gKyAxO1xuICAgICAgICBjb25zdCBhdmVyYWdlU3BhY2UgPSB0b3RhbFJhbmdlIC8gY291bnQ7IC8vIOavj+S4queCueW6lOivpeWNoOaNrueahOW5s+Wdh+epuumXtCAgXG4gICAgICAgIC8vIGNvbnN0IHJlbWFpbmRlciA9IHRvdGFsUmFuZ2UgJSBjb3VudDsgLy8g5peg5rOV5Z2H5YyA5YiG6YWN55qE5L2Z5pWwICBcblxuICAgICAgICBsZXQgcG9pbnRzID0gW107XG4gICAgICAgIGxldCBjdXJyZW50UG9pbnQgPSBtaW47XG5cbiAgICAgICAgLy8g6aaW5YWI5YiG6YWN5a6M5pW055qE5bmz5Z2H56m66Ze0ICBcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBwb2ludHMucHVzaChjdXJyZW50UG9pbnQpO1xuICAgICAgICAgICAgY3VycmVudFBvaW50ICs9IGF2ZXJhZ2VTcGFjZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBhcnIxID0gcG9pbnRzLmZpbHRlcih2YWx1ZSA9PiB2YWx1ZSA+PSAwKTtcbiAgICAgICAgbGV0IGFycjIgPSBwb2ludHMuZmlsdGVyKHZhbHVlID0+IHZhbHVlIDwgMCk7XG5cbiAgICAgICAgYXJyMS5zb3J0KChhLCBiKSA9PiBhIC0gYik7XG4gICAgICAgIGFycjIuc29ydCgoYSwgYikgPT4gYiAtIGEpO1xuXG4gICAgICAgIHBvaW50cyA9IGFycjEuY29uY2F0KGFycjIpO1xuXG4gICAgICAgIHJldHVybiBwb2ludHM7XG4gICAgfVxuXG4gICAgY3VyckJhbGxzOiBibF9iYWxsW10gPSBbXTtcbiAgICBjdXJyVGFyZ2V0OiBibF9iYWxsO1xuICAgIG9uRXZlbnRCYWxsQ2xpY2soZXZ0OiBFdmVudEJhbGxDbGljaykge1xuICAgICAgICBpZiAodGhpcy5pc0NvbXBvc2VJbmcpIHJldHVybjtcbiAgICAgICAgbGV0IGFyciA9IHRoaXMuYmxfc2NMaXN0LmZpbHRlcigodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS5ySWQgPT0gZXZ0LnJJZDtcbiAgICAgICAgfSlcbiAgICAgICAgaWYgKGFyci5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJCYWxscyA9IHRoaXMuYmxfc2NMaXN0LmZpbHRlcigodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUuaWQgPT0gZXZ0LmlkO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRoaXMuY3VyclRhcmdldCA9IGFyclswXTtcbiAgICAgICAgICAgIGxldCBhbGxzID0gdGhpcy5ibF9maW5kQmFsbCgpO1xuICAgICAgICAgICAgaWYgKGFsbHMuc2l6ZSA9PSAwKSByZXR1cm47XG4gICAgICAgICAgICBsZXQgYXJyMSA9IEFycmF5LmZyb20oYWxscyk7XG4gICAgICAgICAgICBhcnIxLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgZDEgPSBVdGlscy5kaXN0YW5jZUJ5Tm9kZSh0aGlzLmN1cnJUYXJnZXQubm9kZSwgYS5ub2RlKVxuICAgICAgICAgICAgICAgIGxldCBkMiA9IFV0aWxzLmRpc3RhbmNlQnlOb2RlKHRoaXMuY3VyclRhcmdldC5ub2RlLCBiLm5vZGUpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGQxIC0gZDI7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgYXJyMS51bnNoaWZ0KHRoaXMuY3VyclRhcmdldCk7XG4gICAgICAgICAgICB0aGlzLmJsX2NvbXBvc2UoYXJyMSlcbiAgICAgICAgICAgIExvZ2dlci5kZWJ1ZyhcIuWQiOaIkO+8mlwiLCBhcnIxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGJsX2NvbXBvc2UoYXJyOiBibF9iYWxsW10pIHtcbiAgICAgICAgdGhpcy5pc0NvbXBvc2VJbmcgPSB0cnVlO1xuICAgICAgICAvLyBsZXQgdGFyZ2V0czogYmxfYmFsbFtdID0gYXJyLmZpbHRlcigodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAgIC8vICAgICByZXR1cm4gaW5kZXggJSAyID09IDA7XG4gICAgICAgIC8vIH0pXG4gICAgICAgIGxldCB0YXJnZXRzID0gW107XG4gICAgICAgIGxldCBkZWxldGVzID0gW107XG4gICAgICAgIGFyci5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKGluZGV4ICUgMiA9PSAwICYmIGluZGV4ICE9IGFyci5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0cy5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkZWxldGVzLnB1c2goZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGVsZXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZGVsZXRlc1tpXS5kZWxldGUoKTtcbiAgICAgICAgfVxuICAgICAgICBkZWxldGVzID0gbnVsbDtcbiAgICAgICAgLy8gaWYgKHRhcmdldHMubGVuZ3RoICUgMiA9PSAwKSB7XG4gICAgICAgIC8vICAgICBsZXQgbmVlZERlbGV0ZSA9IHRhcmdldHNbdGFyZ2V0cy5sZW5ndGggLSAxXTtcbiAgICAgICAgLy8gICAgIHRhcmdldHMuc3BsaWNlKHRhcmdldHMubGVuZ3RoIC0gMSwgMSk7XG4gICAgICAgIC8vICAgICBuZWVkRGVsZXRlLmRlbGV0ZSgpO1xuICAgICAgICAvLyAgICAgdGFyZ2V0cy51bnNoaWZ0KHRoaXMuY3VyclRhcmdldCk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgdGhpcy5ibF9yZXNldEJhbGxMaXN0KCk7XG4gICAgICAgIGxldCBuZXdMaXN0ID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFyZ2V0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IG5vZGU6IGNjLk5vZGUgPSB0YXJnZXRzW2ldLm5vZGVcbiAgICAgICAgICAgIGlmIChub2RlKSBub2RlLnJlbW92ZUNvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xuICAgICAgICAgICAgbGV0IHBvaW50ID0gdGFyZ2V0c1tpXS5ub2RlLmdldFBvc2l0aW9uKCk7XG4gICAgICAgICAgICAvLyB0aGlzLmJsX2NyZWF0ZUJhbGwodGFyZ2V0c1tpXS5pZCAqIDIsIHBvaW50KTtcblxuICAgICAgICAgICAgbGV0IG5ld05vZGUgPSBhd2FpdCB0aGlzLmJsX2NyZWF0ZUJhbGwodGFyZ2V0c1tpXS5pZCArIDEsIHBvaW50KTtcbiAgICAgICAgICAgIGxldCBzY3IgPSBuZXdOb2RlLmdldENvbXBvbmVudChibF9iYWxsKTtcbiAgICAgICAgICAgIHRoaXMuYmxfc2NMaXN0LnB1c2goc2NyKTtcbiAgICAgICAgICAgIG5ld05vZGUuc2NhbGUgPSAwO1xuICAgICAgICAgICAgbmV3TGlzdC5wdXNoKHNjcik7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbnVtID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXJnZXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0YXJnZXRzW2ldLnBsYXlIaWRlKCgpID0+IHtcbiAgICAgICAgICAgICAgICBudW0rKztcbiAgICAgICAgICAgICAgICBpZiAobnVtID49IHRhcmdldHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmV3TGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3TGlzdFtpXS5wbGF5U2hvdygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldHMgPSBudWxsO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ibF9yZXNldEJhbGxMaXN0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXdMaXN0WzBdLmlkID09IGJjLm1heElkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBiZXN0ID0gbmV3TGlzdFtpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVzdC5yZW1vdmVSaWdpZGJvZHkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mbHlCZXN0KGJlc3Qubm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3TGlzdC5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmxfY29tcG9zZShuZXdMaXN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBibF90aXBzUGFuZWwuU2hvdygyMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmx5SWNvKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNDb21wb3NlSW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmxfZHJvcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJsX2NhY2hlTGlzdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgLjIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGJsX2NhY2hlTGlzdCgpIHtcbiAgICAgICAgbGV0IGFyciA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYmxfc2NMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcnIucHVzaCh0aGlzLmJsX3NjTGlzdFtpXS5pZCk7XG4gICAgICAgIH1cbiAgICAgICAgZG0ucGxheWVyLmFyciA9IGFycjtcbiAgICB9XG5cbiAgICBibF9yZXNldEJhbGxMaXN0KCkge1xuICAgICAgICB0aGlzLmN1cnJCYWxscyA9IFtdO1xuICAgICAgICBsZXQgYXJyID0gdGhpcy5ibF9zY0xpc3QuZmlsdGVyKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlICYmICF2YWx1ZS5pc0Rlc3Rvcnk7XG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuYmxfc2NMaXN0ID0gYXJyO1xuICAgIH1cblxuICAgIGJsX2ZpbmRCYWxsKCkge1xuICAgICAgICBsZXQgbmVhcmJ5UG9pbnRzID0gdGhpcy5ibF9nZXRDYW5CYWxsKHRoaXMuY3VyclRhcmdldCk7XG4gICAgICAgIGxldCB2aXNpdGVkUG9pbnRzID0gbmV3IFNldChuZWFyYnlQb2ludHMpOyAvLyDkvb/nlKhTZXTmnaXlrZjlgqjlt7Lorr/pl67nmoTngrkgIFxuXG4gICAgICAgIC8vIOi/reS7o+afpeivoiAgXG4gICAgICAgIHdoaWxlIChuZWFyYnlQb2ludHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGV0IG5ld05lYXJieVBvaW50cyA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgYmFsbCBvZiBuZWFyYnlQb2ludHMpIHtcbiAgICAgICAgICAgICAgICAvLyDmn6Xor6Lot53nprvlvZPliY3ngrnkuLo15Liq5Y2V5L2N5YaF55qE54K577yM5L2G5o6S6Zmk5bey6K6/6Zeu6L+H55qE54K5ICBcbiAgICAgICAgICAgICAgICBsZXQgdGVtcE5lYXJieVBvaW50cyA9IHRoaXMuYmxfZ2V0Q2FuQmFsbChiYWxsKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB0ZW1wUG9pbnQgb2YgdGVtcE5lYXJieVBvaW50cykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXZpc2l0ZWRQb2ludHMuaGFzKHRlbXBQb2ludCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld05lYXJieVBvaW50cy5wdXNoKHRlbXBQb2ludCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2aXNpdGVkUG9pbnRzLmFkZCh0ZW1wUG9pbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmVhcmJ5UG9pbnRzID0gbmV3TmVhcmJ5UG9pbnRzOyAvLyDmm7TmlrDpnIDopoHmn6Xor6LnmoTngrkgIFxuICAgICAgICB9XG5cbiAgICAgICAgLy8g6L+U5Zue5omA5pyJ5om+5Yiw55qE54K577yI5YyF5ous5Yid5aeL5p+l6K+i5ZKM6L+t5Luj5p+l6K+i55qE57uT5p6c77yJICBcbiAgICAgICAgcmV0dXJuIHZpc2l0ZWRQb2ludHM7XG4gICAgfVxuXG4gICAgYmxfZ2V0Q2FuQmFsbCh0YXJnZXQpIHtcbiAgICAgICAgbGV0IGFyciA9IHRoaXMuY3VyckJhbGxzLmZpbHRlcigodmFsdWUpID0+IHtcbiAgICAgICAgICAgIGxldCBkaXMgPSBVdGlscy5kaXN0YW5jZUJ5Tm9kZSh0YXJnZXQubm9kZSwgdmFsdWUubm9kZSk7XG4gICAgICAgICAgICByZXR1cm4gZGlzIDwgdGFyZ2V0Lm5vZGUud2lkdGggKyAyMCAmJiB2YWx1ZS5ySWQgIT0gdGhpcy5jdXJyVGFyZ2V0LnJJZDtcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGFycjtcbiAgICB9XG5cbiAgICBhc3luYyBibF9kcm9wKCkge1xuXG4gICAgICAgIGxldCBtYXhZID0gdGhpcy5ibF9jaGVja01heFBvaW50WSgpO1xuICAgICAgICBpZiAobWF4WSA+IHRoaXMubm9kZS5oZWlnaHQgLyAyIC0gMjAwKSByZXR1cm47XG4gICAgICAgIGlmIChtYXhZID4gdGhpcy5ub2RlLmhlaWdodCAvIDQpIHtcbiAgICAgICAgICAgIGxldCByYW5kb20gPSBVdGlscy5yYW5kb21GbG9hdCgwLCAxKTtcbiAgICAgICAgICAgIGlmIChyYW5kb20gPCAuNSkgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBsZW4gPSBVdGlscy5yYW5kb21JbnQoMSwgMTUpXG4gICAgICAgIGlmIChtYXhZID4gdGhpcy5ub2RlLmhlaWdodCAvIDQgKyAxMDApIHtcbiAgICAgICAgICAgIGxlbiA9IFV0aWxzLnJhbmRvbUludCgxLCAxMClcbiAgICAgICAgfVxuXG5cbiAgICAgICAgbGV0IG1heElkID0gdGhpcy5ibF9jaGVja01heElkKCk7XG4gICAgICAgIG1heElkID0gbWF4SWQgPiAzID8gMyA6IG1heElkO1xuXG4gICAgICAgIGxldCB0eXBlTnVtID0gVXRpbHMucmFuZG9tSW50SW5jbHVzaXZlKDEsIG1heElkKTtcbiAgICAgICAgbGV0IHJhdGVzID0gVXRpbHMuZ2V0UmFuZG9tUmF0ZXModHlwZU51bSk7XG4gICAgICAgIGxldCBpZHMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gdHlwZU51bTsgaSsrKSB7XG4gICAgICAgICAgICBpZHMucHVzaChpKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgaW5kZXggPSBVdGlscy5yYW5kb21CeVdlaWdodExpc3QocmF0ZXMpO1xuICAgICAgICAgICAgbGV0IGlkID0gaWRzW2luZGV4XTtcbiAgICAgICAgICAgIGxldCBwb2ludCA9IHRoaXMuYmxfZ2V0UG9pbnQoaWQpO1xuICAgICAgICAgICAgbGV0IG5vZGUgPSBhd2FpdCB0aGlzLmJsX2NyZWF0ZUJhbGwoaWQsIHBvaW50LCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBzY3IgPSBub2RlLmdldENvbXBvbmVudChibF9iYWxsKVxuICAgICAgICAgICAgdGhpcy5ibF9zY0xpc3QucHVzaChzY3IpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYmxfY2FjaGVMaXN0KCk7XG4gICAgfVxuICAgIC8v5qOA5rWL5b2T5YmN5pyA5aSn5YC8XG4gICAgYmxfY2hlY2tNYXhJZCgpIHtcbiAgICAgICAgbGV0IGZsYWcgPSAwO1xuICAgICAgICB0aGlzLmJsX3NjTGlzdC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5pZCA+IGZsYWcpIGZsYWcgPSBlbGVtZW50LmlkO1xuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gZmxhZztcbiAgICB9XG5cbiAgICBibF9jaGVja01heFBvaW50WSgpIHtcbiAgICAgICAgbGV0IGZsYWcgPSAwO1xuICAgICAgICB0aGlzLmJsX3NjTGlzdC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5ub2RlLnkgPiBmbGFnKSBmbGFnID0gZWxlbWVudC5ub2RlLnk7XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBmbGFnO1xuICAgIH1cblxuICAgIC8v5Yi35pawXG4gICAgYmxfb25SZWZyZXNoKCkge1xuICAgICAgICBpZiAoVXRpbHMuYnRuTG9jaygpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveUFsbENoaWxkcmVuKCk7XG4gICAgICAgIHRoaXMuYmxfc2NMaXN0ID0gW107XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuXG4gICAgfVxuXG4gICAgZmx5SWNvKCkge1xuICAgICAgICBsZXQgdGFyZ2V0ID0gYmMudG9wLmljbzI7XG4gICAgICAgIFJld2FyZFV0aWxzLnJlc0Jvb21CeU5vZGUodGhpcy5pY28sIHRhcmdldCwgMTApO1xuXG4gICAgfVxuXG4gICAgZmx5QmVzdChub2RlKSB7XG4gICAgICAgIGxldCB0YXJnZXQgPSBiYy50b3AuaWNvMTtcbiAgICAgICAgbGV0IHAxID0gdGFyZ2V0LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAwKSk7XG4gICAgICAgIGxldCBwMiA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwMSk7XG4gICAgICAgIGNjLnR3ZWVuKG5vZGUpLnRvKC4yLCB7IHg6IDAsIHk6IDAsIHNjYWxlOiAxLjEgfSkuZGVsYXkoMSkudG8oLjUsIHsgcG9zaXRpb246IHAyLCBzY2FsZTogLjUgfSwgY2MuZWFzZVNpbmVJbigpKS50byguMiwgeyBzY2FsZTogMCB9LCBjYy5lYXNlU2luZUluKCkpLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgR2xvYmFsRXZlbnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnRDaGFuZ2VUb3AoMiwgMSkpO1xuICAgICAgICB9KS5zdGFydCgpO1xuXG4gICAgfVxuXG5cblxufVxuIl19