
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/common/SceneManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fbeef/Ai/5LPqAeelQWHWQ8', 'SceneManager');
// script/common/SceneManager.ts

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
exports.sm = exports.GameScene = exports.SceneType = void 0;
var UIManager_1 = require("../game/common/UIManager");
var logger_1 = require("../utils/logger");
var Utils_1 = require("../utils/Utils");
var SceneLoadingUI_1 = require("./comp/SceneLoadingUI");
var Global_1 = require("./Global");
var GlobalEvents_1 = require("./GlobalEvents");
var SceneType;
(function (SceneType) {
    SceneType[SceneType["None"] = -1] = "None";
    SceneType[SceneType["Loading"] = 0] = "Loading";
    SceneType[SceneType["Stage"] = 1] = "Stage";
    SceneType[SceneType["Select"] = 2] = "Select";
    SceneType[SceneType["Main"] = 3] = "Main";
})(SceneType = exports.SceneType || (exports.SceneType = {}));
var GameScene = /** @class */ (function (_super) {
    __extends(GameScene, _super);
    function GameScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GameScene.prototype.initScene = function (param) {
        if (param === void 0) { param = undefined; }
    };
    GameScene.prototype.removeScene = function () { };
    GameScene.prototype.getNode = function () { return; };
    GameScene.prototype.getType = function () { return -1; };
    return GameScene;
}(cc.Component));
exports.GameScene = GameScene;
var SceneManager = /** @class */ (function () {
    function SceneManager() {
        this.node = null;
        this.curScene = null;
        this.lastSceneType = -1;
        this.nextSceneType = -1;
        this.isSceneLoading = false;
    }
    Object.defineProperty(SceneManager, "ins", {
        get: function () {
            return this._ins || new SceneManager();
        },
        enumerable: false,
        configurable: true
    });
    SceneManager.prototype.onLoad = function (node) {
        this.node = node;
    };
    SceneManager.prototype.switchScene = function (T, params, showProgressBar) {
        if (params === void 0) { params = undefined; }
        if (showProgressBar === void 0) { showProgressBar = false; }
        return __awaiter(this, void 0, void 0, function () {
            var sceneType, oldScene, _a, curSceneNode;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.isSceneLoading = true;
                        sceneType = T.GetType();
                        // if(sceneType == this.curScene.getType()){
                        //     return;
                        // }
                        this.nextSceneType = sceneType;
                        logger_1.Logger.debug("[Ball_Main swtichScene]>>>>>>>>>", sceneType);
                        oldScene = this.curScene;
                        if (oldScene) {
                            UIManager_1.ui.onSwitchScene();
                            oldScene.removeScene();
                        }
                        _a = this;
                        return [4 /*yield*/, this.createScene(T)];
                    case 1:
                        _a.curScene = _b.sent();
                        if (this.curScene) {
                            curSceneNode = null;
                            curSceneNode = this.curScene.getNode();
                            this.node.destroyAllChildren();
                            this.node.addChild(curSceneNode);
                            Global_1.GlobalEvent.dispatchEvent(new GlobalEvents_1.EventOnSwitchScene());
                        }
                        if (showProgressBar) {
                            SceneLoadingUI_1.default.setProgress(1);
                        }
                        if (!this.curScene) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.curScene.initScene(params)];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        this.lastSceneType = this.nextSceneType;
                        this.isSceneLoading = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    SceneManager.prototype.createScene = function (T) {
        return __awaiter(this, void 0, Promise, function () {
            var prefab, ins, comps, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Utils_1.Utils.loadPefab(T.Prefab_Name)];
                    case 1:
                        prefab = _a.sent();
                        ins = cc.instantiate(prefab);
                        ins.width = this.node.width;
                        ins.height = this.node.height;
                        ins.x = 0;
                        ins.y = 0;
                        comps = ins.getComponentsInChildren(cc.Component);
                        for (i = 0; i < comps.length; i++) {
                            if (comps[i] instanceof (GameScene)) {
                                return [2 /*return*/, comps[i]];
                            }
                        }
                        return [2 /*return*/, undefined];
                }
            });
        });
    };
    return SceneManager;
}());
exports.default = SceneManager;
exports.sm = SceneManager.ins;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvY29tbW9uL1NjZW5lTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0RBQThDO0FBQzlDLDBDQUF5QztBQUN6Qyx3Q0FBdUM7QUFDdkMsd0RBQW1EO0FBQ25ELG1DQUF1QztBQUN2QywrQ0FBb0Q7QUFFcEQsSUFBWSxTQU1YO0FBTkQsV0FBWSxTQUFTO0lBQ2pCLDBDQUFTLENBQUE7SUFDVCwrQ0FBVyxDQUFBO0lBQ1gsMkNBQVMsQ0FBQTtJQUNULDZDQUFVLENBQUE7SUFDVix5Q0FBUSxDQUFBO0FBQ1osQ0FBQyxFQU5XLFNBQVMsR0FBVCxpQkFBUyxLQUFULGlCQUFTLFFBTXBCO0FBRUQ7SUFBK0IsNkJBQVk7SUFBM0M7O0lBS0EsQ0FBQztJQUpHLDZCQUFTLEdBQVQsVUFBVSxLQUFzQjtRQUF0QixzQkFBQSxFQUFBLGlCQUFzQjtJQUFTLENBQUM7SUFDMUMsK0JBQVcsR0FBWCxjQUFxQixDQUFDO0lBQ3RCLDJCQUFPLEdBQVAsY0FBcUIsT0FBTSxDQUFDLENBQUM7SUFDN0IsMkJBQU8sR0FBUCxjQUF1QixPQUFPLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUN0QyxnQkFBQztBQUFELENBTEEsQUFLQyxDQUw4QixFQUFFLENBQUMsU0FBUyxHQUsxQztBQUxZLDhCQUFTO0FBT3RCO0lBYUk7UUFSTyxTQUFJLEdBQVksSUFBSSxDQUFDO1FBQ3JCLGFBQVEsR0FBYyxJQUFJLENBQUM7UUFFM0Isa0JBQWEsR0FBYyxDQUFDLENBQUMsQ0FBQztRQUM5QixrQkFBYSxHQUFjLENBQUMsQ0FBQyxDQUFDO1FBRTlCLG1CQUFjLEdBQVksS0FBSyxDQUFDO0lBRWYsQ0FBQztJQVh6QixzQkFBa0IsbUJBQUc7YUFBckI7WUFDSSxPQUFPLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxZQUFZLEVB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QUFPLFNBQVMsRUFBQzs7OztLQUNwQjtJQUNMLG1CQUFDO0FBQUQsQ0F0RUEsQUFzRUMsSUFBQTs7QUFDWSxRQUFBLEVBQUUsR0FBRyxZQUFZLENBQUMsR0FBRyxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdWkgfSBmcm9tIFwiLi4vZ2FtZS9jb21tb24vVUlNYW5hZ2VyXCI7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiLi4vdXRpbHMvbG9nZ2VyXCI7XG5pbXBvcnQgeyBVdGlscyB9IGZyb20gXCIuLi91dGlscy9VdGlsc1wiO1xuaW1wb3J0IFNjZW5lTG9hZGluZ1VJIGZyb20gXCIuL2NvbXAvU2NlbmVMb2FkaW5nVUlcIjtcbmltcG9ydCB7IEdsb2JhbEV2ZW50IH0gZnJvbSBcIi4vR2xvYmFsXCI7XG5pbXBvcnQgeyBFdmVudE9uU3dpdGNoU2NlbmUgfSBmcm9tIFwiLi9HbG9iYWxFdmVudHNcIjtcblxuZXhwb3J0IGVudW0gU2NlbmVUeXBlIHtcbiAgICBOb25lID0gLTEsXG4gICAgTG9hZGluZyA9IDAsXG4gICAgU3RhZ2UgPSAxLFxuICAgIFNlbGVjdCA9IDIsXG4gICAgTWFpbiA9IDMsXG59XG5cbmV4cG9ydCBjbGFzcyBHYW1lU2NlbmUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIGluaXRTY2VuZShwYXJhbTogYW55ID0gdW5kZWZpbmVkKTogYW55IHsgfVxuICAgIHJlbW92ZVNjZW5lKCk6IGFueSB7IH1cbiAgICBnZXROb2RlKCk6IGNjLk5vZGUgeyByZXR1cm4gfVxuICAgIGdldFR5cGUoKTogU2NlbmVUeXBlIHsgcmV0dXJuIC0xIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NlbmVNYW5hZ2VyIHtcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zOiBTY2VuZU1hbmFnZXI7XG4gICAgcHVibGljIHN0YXRpYyBnZXQgaW5zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faW5zIHx8IG5ldyBTY2VuZU1hbmFnZXIoKTtcbiAgICB9XG4gICAgcHVibGljIG5vZGU6IGNjLk5vZGUgPSBudWxsO1xuICAgIHB1YmxpYyBjdXJTY2VuZTogR2FtZVNjZW5lID0gbnVsbDtcblxuICAgIHB1YmxpYyBsYXN0U2NlbmVUeXBlOiBTY2VuZVR5cGUgPSAtMTtcbiAgICBwdWJsaWMgbmV4dFNjZW5lVHlwZTogU2NlbmVUeXBlID0gLTE7XG5cbiAgICBwdWJsaWMgaXNTY2VuZUxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIG9uTG9hZChub2RlOiBjYy5Ob2RlKSB7XG4gICAgICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgfVxuXG4gICAgYXN5bmMgc3dpdGNoU2NlbmU8VCBleHRlbmRzIEdhbWVTY2VuZT4oVCwgcGFyYW1zOiBvYmplY3QgPSB1bmRlZmluZWQsIHNob3dQcm9ncmVzc0JhcjogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuaXNTY2VuZUxvYWRpbmcgPSB0cnVlO1xuICAgICAgICBsZXQgc2NlbmVUeXBlOiBTY2VuZVR5cGUgPSBULkdldFR5cGUoKTtcbiAgICAgICAgLy8gaWYoc2NlbmVUeXBlID09IHRoaXMuY3VyU2NlbmUuZ2V0VHlwZSgpKXtcbiAgICAgICAgLy8gICAgIHJldHVybjtcbiAgICAgICAgLy8gfVxuICAgICAgICB0aGlzLm5leHRTY2VuZVR5cGUgPSBzY2VuZVR5cGU7XG4gICAgICAgIExvZ2dlci5kZWJ1ZyhcIltCYWxsX01haW4gc3d0aWNoU2NlbmVdPj4+Pj4+Pj4+XCIsIHNjZW5lVHlwZSk7XG5cbiAgICAgICAgbGV0IG9sZFNjZW5lID0gdGhpcy5jdXJTY2VuZTtcbiAgICAgICAgaWYgKG9sZFNjZW5lKSB7XG4gICAgICAgICAgICB1aS5vblN3aXRjaFNjZW5lKCk7XG4gICAgICAgICAgICBvbGRTY2VuZS5yZW1vdmVTY2VuZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3VyU2NlbmUgPSBhd2FpdCB0aGlzLmNyZWF0ZVNjZW5lKFQpO1xuXG4gICAgICAgIGlmICh0aGlzLmN1clNjZW5lKSB7XG4gICAgICAgICAgICBsZXQgY3VyU2NlbmVOb2RlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICAgICAgICAgIGN1clNjZW5lTm9kZSA9IHRoaXMuY3VyU2NlbmUuZ2V0Tm9kZSgpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3lBbGxDaGlsZHJlbigpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGN1clNjZW5lTm9kZSk7XG5cbiAgICAgICAgICAgIEdsb2JhbEV2ZW50LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50T25Td2l0Y2hTY2VuZSgpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzaG93UHJvZ3Jlc3NCYXIpIHtcbiAgICAgICAgICAgIFNjZW5lTG9hZGluZ1VJLnNldFByb2dyZXNzKDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY3VyU2NlbmUpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuY3VyU2NlbmUuaW5pdFNjZW5lKHBhcmFtcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sYXN0U2NlbmVUeXBlID0gdGhpcy5uZXh0U2NlbmVUeXBlO1xuICAgICAgICB0aGlzLmlzU2NlbmVMb2FkaW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgYXN5bmMgY3JlYXRlU2NlbmU8VCBleHRlbmRzIEdhbWVTY2VuZT4oVCk6IFByb21pc2U8R2FtZVNjZW5lPiB7XG4gICAgICAgIGxldCBwcmVmYWIgPSBhd2FpdCBVdGlscy5sb2FkUGVmYWIoVC5QcmVmYWJfTmFtZSk7XG4gICAgICAgIGxldCBpbnM6IGNjLk5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xuICAgICAgICBpbnMud2lkdGggPSB0aGlzLm5vZGUud2lkdGg7XG4gICAgICAgIGlucy5oZWlnaHQgPSB0aGlzLm5vZGUuaGVpZ2h0O1xuICAgICAgICBpbnMueCA9IDA7XG4gICAgICAgIGlucy55ID0gMDtcbiAgICAgICAgbGV0IGNvbXBzID0gaW5zLmdldENvbXBvbmVudHNJbkNoaWxkcmVuKGNjLkNvbXBvbmVudCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29tcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChjb21wc1tpXSBpbnN0YW5jZW9mIChHYW1lU2NlbmUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbXBzW2ldIGFzIEdhbWVTY2VuZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbn1cbmV4cG9ydCBjb25zdCBzbSA9IFNjZW5lTWFuYWdlci5pbnM7XG4iXX0=