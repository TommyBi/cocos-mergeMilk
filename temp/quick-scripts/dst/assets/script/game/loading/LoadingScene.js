
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/game/loading/LoadingScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '09589HoK21BH5rQwy41scZZ', 'LoadingScene');
// script/game/loading/LoadingScene.ts

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
var SceneLoadingUI_1 = require("../../common/comp/SceneLoadingUI");
var GlobalDefines_1 = require("../../common/consts/GlobalDefines");
var Ball_Main_1 = require("../../common/Ball_Main");
var SceneManager_1 = require("../../common/SceneManager");
var Ball_MainScene_1 = require("../ui/Ball_MainScene");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LoadingScene = /** @class */ (function (_super) {
    __extends(LoadingScene, _super);
    function LoadingScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lb_ver = null;
        return _this;
    }
    LoadingScene_1 = LoadingScene;
    LoadingScene.GetType = function () {
        return SceneManager_1.SceneType.Loading;
    };
    LoadingScene.prototype.onLoad = function () {
        // initSource("zh",this.config.json.language['zh']);
    };
    LoadingScene.prototype.startLoading = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Ball_Main_1.default.instance.isInited = false;
                        SceneManager_1.sm.curScene = this;
                        return [4 /*yield*/, this.initScene()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoadingScene.prototype.getNode = function () {
        return this.node;
    };
    LoadingScene.prototype.loadRes = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, SceneLoadingUI_1.default.preLoad()];
                                case 1:
                                    _a.sent();
                                    SceneLoadingUI_1.default.show();
                                    return [4 /*yield*/, Ball_Main_1.default.instance.initGame()];
                                case 2:
                                    _a.sent();
                                    resolve(GlobalDefines_1.LoadStatus.Success);
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    LoadingScene.prototype.initScene = function () {
        return __awaiter(this, void 0, void 0, function () {
            var resStatus;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Ball_Main_1.default.instance.isInited = false;
                        cc.debug.setDisplayStats(false);
                        resStatus = GlobalDefines_1.LoadStatus.Doing;
                        _a.label = 1;
                    case 1: return [4 /*yield*/, this.loadRes().then(function (status) {
                            resStatus = status;
                        })];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        if (resStatus == GlobalDefines_1.LoadStatus.Doing) return [3 /*break*/, 1];
                        _a.label = 4;
                    case 4:
                        if (resStatus == GlobalDefines_1.LoadStatus.GameOut) {
                            return [2 /*return*/];
                        }
                        //立即结束这次同步任务
                        setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                // sm.switchScene(SelectScene,undefined,true);     
                                // if (dm.player.initTimes <= 1) {
                                // }else{
                                SceneManager_1.sm.switchScene(Ball_MainScene_1.default, undefined, true);
                                return [2 /*return*/];
                            });
                        }); }, 0);
                        Ball_Main_1.default.instance.isInited = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    LoadingScene.prototype.getType = function () {
        return LoadingScene_1.GetType();
    };
    LoadingScene.prototype.removeScene = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    var LoadingScene_1;
    LoadingScene.Prefab_Name = "prefab/game/scene/loading_scene";
    __decorate([
        property(cc.Label)
    ], LoadingScene.prototype, "lb_ver", void 0);
    LoadingScene = LoadingScene_1 = __decorate([
        ccclass
    ], LoadingScene);
    return LoadingScene;
}(SceneManager_1.GameScene));
exports.default = LoadingScene;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZ2FtZS9sb2FkaW5nL0xvYWRpbmdTY2VuZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtRUFBOEQ7QUFDOUQsbUVBQStEO0FBRS9ELG9EQUErQztBQUMvQywwREFBcUU7QUFLckUsdURBQWtEO0FBRzVDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTBDLGdDQUFTO0lBQW5EO1FBQUEscUVBdUVDO1FBaEVHLFlBQU0sR0FBYSxJQUFJLENBQUM7O0lBZ0U1QixDQUFDO3FCQXZFb0IsWUFBWTtJQUV0QixvQkFBTyxHQUFkO1FBQ0ksT0FBTyx3QkFBUyxDQUFDLE9BQU8sQ0FBQztJQUM3QixDQUFDO0lBS1MsNkJBQU0sR0FBaEI7UUFDSSxvREFBb0Q7SUFDeEQsQ0FBQztJQUVLLG1DQUFZLEdBQWxCOzs7Ozt3QkFFSSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO3dCQUNwQyxpQkFBRSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7d0JBRW5CLHFCQUFNLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBQTs7d0JBQXRCLFNBQXNCLENBQUM7Ozs7O0tBQzFCO0lBRUQsOEJBQU8sR0FBUDtRQUNJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNyQixDQUFDO0lBR0ssOEJBQU8sR0FBYjs7OztnQkFDSSxzQkFBTyxJQUFJLE9BQU8sQ0FBQyxVQUFPLE9BQU8sRUFBRSxNQUFNOzs7d0NBQ3JDLHFCQUFNLHdCQUFjLENBQUMsT0FBTyxFQUFFLEVBQUE7O29DQUE5QixTQUE4QixDQUFDO29DQUMvQix3QkFBYyxDQUFDLElBQUksRUFBRSxDQUFDO29DQUN0QixxQkFBTSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsRUFBQTs7b0NBQW5DLFNBQW1DLENBQUM7b0NBQ3BDLE9BQU8sQ0FBQywwQkFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDOzs7O3lCQUMvQixDQUFDLEVBQUM7OztLQUNOO0lBSUssZ0NBQVMsR0FBZjs7Ozs7Ozt3QkFDSSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO3dCQUVwQyxFQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFFNUIsU0FBUyxHQUFXLDBCQUFVLENBQUMsS0FBSyxDQUFDOzs0QkFFckMscUJBQU0sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQWM7NEJBQ3JDLFNBQVMsR0FBRyxNQUFNLENBQUM7d0JBQ3ZCLENBQUMsQ0FBQyxFQUFBOzt3QkFGRixTQUVFLENBQUM7Ozs0QkFDRSxTQUFTLElBQUksMEJBQVUsQ0FBQyxLQUFLOzs7d0JBQ3RDLElBQUksU0FBUyxJQUFJLDBCQUFVLENBQUMsT0FBTyxFQUFFOzRCQUNqQyxzQkFBTzt5QkFDVjt3QkFFRCxZQUFZO3dCQUNaLFVBQVUsQ0FBQzs7Z0NBQ1AsbURBQW1EO2dDQUNuRCxrQ0FBa0M7Z0NBRWxDLFNBQVM7Z0NBQ1QsaUJBQUUsQ0FBQyxXQUFXLENBQUMsd0JBQWMsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7Ozs2QkFFbkQsRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDTixtQkFBUyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDOzs7OztLQUd0QztJQUNELDhCQUFPLEdBQVA7UUFDSSxPQUFPLGNBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUssa0NBQVcsR0FBakI7Ozs7OztLQUNDOztJQXJFYSx3QkFBVyxHQUFHLGlDQUFpQyxDQUFDO0lBTTlEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7Z0RBQ0s7SUFQUCxZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBdUVoQztJQUFELG1CQUFDO0NBdkVELEFBdUVDLENBdkV5Qyx3QkFBUyxHQXVFbEQ7a0JBdkVvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNjZW5lTG9hZGluZ1VJIGZyb20gXCIuLi8uLi9jb21tb24vY29tcC9TY2VuZUxvYWRpbmdVSVwiO1xuaW1wb3J0IHsgTG9hZFN0YXR1cyB9IGZyb20gXCIuLi8uLi9jb21tb24vY29uc3RzL0dsb2JhbERlZmluZXNcIjtcbmltcG9ydCB7IGRtIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9EYXRhTWFuYWdlclwiO1xuaW1wb3J0IEJhbGxfTWFpbiBmcm9tIFwiLi4vLi4vY29tbW9uL0JhbGxfTWFpblwiO1xuaW1wb3J0IHsgR2FtZVNjZW5lLCBTY2VuZVR5cGUsIHNtIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9TY2VuZU1hbmFnZXJcIjtcbmltcG9ydCB7IGluaXRTb3VyY2UgfSBmcm9tIFwiLi4vLi4vbGFuZy9MYW5ndWFnZURhdGFcIjtcbmltcG9ydCBTREtNYW5hZ2VyIGZyb20gXCIuLi8uLi91dGlscy9TREtNYW5hZ2VyXCI7XG5pbXBvcnQgeyBVdGlscyB9IGZyb20gXCIuLi8uLi91dGlscy9VdGlsc1wiO1xuaW1wb3J0IHsgYmMgfSBmcm9tIFwiLi4vdWkvYmxfQ29uZmlnXCI7XG5pbXBvcnQgQmFsbF9NYWluU2NlbmUgZnJvbSBcIi4uL3VpL0JhbGxfTWFpblNjZW5lXCI7XG5cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvYWRpbmdTY2VuZSBleHRlbmRzIEdhbWVTY2VuZSB7XG4gICAgcHVibGljIHN0YXRpYyBQcmVmYWJfTmFtZSA9IFwicHJlZmFiL2dhbWUvc2NlbmUvbG9hZGluZ19zY2VuZVwiO1xuICAgIHN0YXRpYyBHZXRUeXBlKCkge1xuICAgICAgICByZXR1cm4gU2NlbmVUeXBlLkxvYWRpbmc7XG4gICAgfVxuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiX3ZlcjogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcbiAgICAgICAgLy8gaW5pdFNvdXJjZShcInpoXCIsdGhpcy5jb25maWcuanNvbi5sYW5ndWFnZVsnemgnXSk7XG4gICAgfVxuXG4gICAgYXN5bmMgc3RhcnRMb2FkaW5nKCkge1xuXG4gICAgICAgIEJhbGxfTWFpbi5pbnN0YW5jZS5pc0luaXRlZCA9IGZhbHNlO1xuICAgICAgICBzbS5jdXJTY2VuZSA9IHRoaXM7XG5cbiAgICAgICAgYXdhaXQgdGhpcy5pbml0U2NlbmUoKTtcbiAgICB9XG5cbiAgICBnZXROb2RlKCk6IGNjLk5vZGUge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2RlO1xuICAgIH1cblxuXG4gICAgYXN5bmMgbG9hZFJlcygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGF3YWl0IFNjZW5lTG9hZGluZ1VJLnByZUxvYWQoKTtcbiAgICAgICAgICAgIFNjZW5lTG9hZGluZ1VJLnNob3coKTtcbiAgICAgICAgICAgIGF3YWl0IEJhbGxfTWFpbi5pbnN0YW5jZS5pbml0R2FtZSgpO1xuICAgICAgICAgICAgcmVzb2x2ZShMb2FkU3RhdHVzLlN1Y2Nlc3MpO1xuICAgICAgICB9KTtcbiAgICB9XG5cblxuXG4gICAgYXN5bmMgaW5pdFNjZW5lKCkge1xuICAgICAgICBCYWxsX01haW4uaW5zdGFuY2UuaXNJbml0ZWQgPSBmYWxzZTtcblxuICAgICAgICBjYy5kZWJ1Zy5zZXREaXNwbGF5U3RhdHMoZmFsc2UpO1xuICAgICAgICAvLzQg6LWE5rqQ5Yqg6L29IOWmguaenOWksei0pe+8jOavj+malOS4gOenkuaMgee7reWwneivlVxuICAgICAgICBsZXQgcmVzU3RhdHVzOiBudW1iZXIgPSBMb2FkU3RhdHVzLkRvaW5nOy8vLTE65ZCM5q2l5aSx6LSlIDA65ZCM5q2l5oiQ5YqfIDE66YCA5Ye65ri45oiPXG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMubG9hZFJlcygpLnRoZW4oKHN0YXR1czogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzU3RhdHVzID0gc3RhdHVzO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gd2hpbGUgKHJlc1N0YXR1cyA9PSBMb2FkU3RhdHVzLkRvaW5nKVxuICAgICAgICBpZiAocmVzU3RhdHVzID09IExvYWRTdGF0dXMuR2FtZU91dCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy/nq4vljbPnu5PmnZ/ov5nmrKHlkIzmraXku7vliqFcbiAgICAgICAgc2V0VGltZW91dChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAvLyBzbS5zd2l0Y2hTY2VuZShTZWxlY3RTY2VuZSx1bmRlZmluZWQsdHJ1ZSk7ICAgICBcbiAgICAgICAgICAgIC8vIGlmIChkbS5wbGF5ZXIuaW5pdFRpbWVzIDw9IDEpIHtcblxuICAgICAgICAgICAgLy8gfWVsc2V7XG4gICAgICAgICAgICBzbS5zd2l0Y2hTY2VuZShCYWxsX01haW5TY2VuZSwgdW5kZWZpbmVkLCB0cnVlKTtcbiAgICAgICAgICAgIC8vIH0gXG4gICAgICAgIH0sIDApO1xuICAgICAgICBCYWxsX01haW4uaW5zdGFuY2UuaXNJbml0ZWQgPSB0cnVlO1xuXG4gICAgICAgIC8vIENvbW1vblV0aWxzLkdhbWVMb2dpbihmYWxzZSx1bmRlZmluZWQpO1xuICAgIH1cbiAgICBnZXRUeXBlKCkge1xuICAgICAgICByZXR1cm4gTG9hZGluZ1NjZW5lLkdldFR5cGUoKTtcbiAgICB9XG5cbiAgICBhc3luYyByZW1vdmVTY2VuZSgpIHtcbiAgICB9XG59Il19