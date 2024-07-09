
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/game/GameUtils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '74ad3RfvBFIzYEhcaj3J1Rx', 'GameUtils');
// script/game/GameUtils.ts

"use strict";
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
exports.GameUtils = void 0;
var AudioManager_1 = require("../common/AudioManager");
var Toast_1 = require("../common/comp/toast/Toast");
var Ball_Main_1 = require("../common/Ball_Main");
var Utils_1 = require("../utils/Utils");
var UIManager_1 = require("./common/UIManager");
var GameUtils = /** @class */ (function () {
    function GameUtils() {
    }
    Object.defineProperty(GameUtils, "popLayer", {
        get: function () {
            return UIManager_1.ui.getLayer(UIManager_1.UILayer.Panel);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameUtils, "effectLayer", {
        get: function () {
            return UIManager_1.ui.getLayer(UIManager_1.UILayer.Effect);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameUtils, "loadingLayer", {
        get: function () {
            return UIManager_1.ui.getLayer(UIManager_1.UILayer.LoadingBar);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameUtils, "bannerLayer", {
        get: function () {
            return UIManager_1.ui.getLayer(UIManager_1.UILayer.Banner);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameUtils, "xLayer", {
        get: function () {
            return UIManager_1.ui.getLayer(UIManager_1.UILayer.X);
        },
        enumerable: false,
        configurable: true
    });
    GameUtils.popView = function (view, insert) {
        if (insert === void 0) { insert = false; }
        UIManager_1.ui.popView(view, insert);
    };
    GameUtils.addEffectAR = function (node) {
        UIManager_1.ui.addEffectAR(node);
    };
    GameUtils.playClick = function () {
        this.playSFX("click"); //("Button_click");
    };
    GameUtils.playDrop = function () {
        this.playSFX("drop"); //("Button_click");
    };
    GameUtils.playCompose = function () {
        this.playSFX("compose");
    };
    GameUtils.playFlyCoin = function () {
        this.playSFX("rise_1");
    };
    GameUtils.playSFX = function (sndName, ext) {
        if (ext === void 0) { ext = ".mp3"; }
        AudioManager_1.sd.playSFX("sounds/" + sndName, 1, ext);
    };
    GameUtils.showToast = function (context, ico) {
        Toast_1.default.show(UIManager_1.ui.getLayer(UIManager_1.UILayer.Tip), context, ico ? ico : Toast_1.TipIco.Tip);
    };
    GameUtils.showToast_noCoin = function () {
        this.showToast("金币不足", Toast_1.TipIco.Coin);
    };
    GameUtils.addEffBoom = function (wpos) {
        var boom = cc.instantiate(Ball_Main_1.default.instance.resList.prefab_eff_boom);
        boom.position = wpos;
        GameUtils.addEffectAR(boom);
        setTimeout(function () {
            Utils_1.Utils.removeNode(boom);
        }, 3000);
    };
    GameUtils.loadConfigFromAli = function (fileName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    GameUtils.createNodeByFrame = function (frame, scale, url) {
        var node = new cc.Node();
        var ico = new cc.Node();
        ico.scale = scale;
        ico.parent = node;
        var spr = ico.addComponent(cc.Sprite);
        spr.spriteFrame = frame;
        spr.sizeMode = cc.Sprite.SizeMode.RAW;
        if (url) {
            Utils_1.Utils.updateNodeSpriteFrame(url, ico, false);
        }
        return node;
    };
    return GameUtils;
}());
exports.GameUtils = GameUtils;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZ2FtZS9HYW1lVXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdURBQTRDO0FBQzVDLG9EQUEyRDtBQUUzRCxpREFBNEM7QUFFNUMsd0NBQXVDO0FBQ3ZDLGdEQUFpRDtBQUVqRDtJQUFBO0lBZ0ZBLENBQUM7SUEvRUcsc0JBQVcscUJBQVE7YUFBbkI7WUFDSSxPQUFPLGNBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0QyxDQUFDOzs7T0FBQTtJQUNELHNCQUFXLHdCQUFXO2FBQXRCO1lBQ0ksT0FBTyxjQUFFLENBQUMsUUFBUSxDQUFDLG1CQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkMsQ0FBQzs7O09BQUE7SUFDRCxzQkFBVyx5QkFBWTthQUF2QjtZQUNJLE9BQU8sY0FBRSxDQUFDLFFBQVEsQ0FBQyxtQkFBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzNDLENBQUM7OztPQUFBO0lBQ0Qsc0JBQVcsd0JBQVc7YUFBdEI7WUFDSSxPQUFPLGNBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2QyxDQUFDOzs7T0FBQTtJQUVELHNCQUFXLG1CQUFNO2FBQWpCO1lBQ0ksT0FBTyxjQUFFLENBQUMsUUFBUSxDQUFDLG1CQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEMsQ0FBQzs7O09BQUE7SUFFTSxpQkFBTyxHQUFkLFVBQWUsSUFBYSxFQUFFLE1BQXVCO1FBQXZCLHVCQUFBLEVBQUEsY0FBdUI7UUFDakQsY0FBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVNLHFCQUFXLEdBQWxCLFVBQW1CLElBQUk7UUFDbkIsY0FBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRU0sbUJBQVMsR0FBaEI7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUEsbUJBQW1CO0lBQzdDLENBQUM7SUFDTSxrQkFBUSxHQUFmO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBLG1CQUFtQjtJQUM1QyxDQUFDO0lBRU0scUJBQVcsR0FBbEI7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQzNCLENBQUM7SUFFTSxxQkFBVyxHQUFsQjtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDMUIsQ0FBQztJQUNNLGlCQUFPLEdBQWQsVUFBZSxPQUFlLEVBQUUsR0FBb0I7UUFBcEIsb0JBQUEsRUFBQSxZQUFvQjtRQUNoRCxpQkFBRSxDQUFDLE9BQU8sQ0FBQyxZQUFVLE9BQVMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVNLG1CQUFTLEdBQWhCLFVBQWlCLE9BQWUsRUFBRSxHQUFZO1FBQzFDLGVBQUssQ0FBQyxJQUFJLENBQUMsY0FBRSxDQUFDLFFBQVEsQ0FBQyxtQkFBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsY0FBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFFTSwwQkFBZ0IsR0FBdkI7UUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxjQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUdNLG9CQUFVLEdBQWpCLFVBQWtCLElBQWE7UUFDM0IsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QixVQUFVLENBQUM7WUFDUCxhQUFLLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQzFCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNiLENBQUM7SUFFWSwyQkFBaUIsR0FBOUIsVUFBK0IsUUFBZ0I7Ozs7OztLQUc5QztJQUVNLDJCQUFpQixHQUF4QixVQUF5QixLQUFxQixFQUFFLEtBQWEsRUFBRSxHQUFZO1FBQ3ZFLElBQUksSUFBSSxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3pCLElBQUksR0FBRyxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3hCLEdBQUcsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLEdBQUcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLEdBQUcsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDO1FBQ3RDLElBQUksR0FBRyxFQUFFO1lBQ0wsYUFBSyxDQUFDLHFCQUFxQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDaEQ7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQWhGQSxBQWdGQyxJQUFBO0FBaEZZLDhCQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2QgfSBmcm9tIFwiLi4vY29tbW9uL0F1ZGlvTWFuYWdlclwiO1xuaW1wb3J0IFRvYXN0LCB7IFRpcEljbyB9IGZyb20gXCIuLi9jb21tb24vY29tcC90b2FzdC9Ub2FzdFwiO1xuaW1wb3J0IHsgZG0gfSBmcm9tIFwiLi4vY29tbW9uL0RhdGFNYW5hZ2VyXCI7XG5pbXBvcnQgQmFsbF9NYWluIGZyb20gXCIuLi9jb21tb24vQmFsbF9NYWluXCI7XG5pbXBvcnQgeyBTY2VuZVR5cGUsIHNtIH0gZnJvbSBcIi4uL2NvbW1vbi9TY2VuZU1hbmFnZXJcIjtcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSBcIi4uL3V0aWxzL1V0aWxzXCI7XG5pbXBvcnQgeyB1aSwgVUlMYXllciB9IGZyb20gXCIuL2NvbW1vbi9VSU1hbmFnZXJcIjtcblxuZXhwb3J0IGNsYXNzIEdhbWVVdGlscyB7XG4gICAgc3RhdGljIGdldCBwb3BMYXllcigpIHtcbiAgICAgICAgcmV0dXJuIHVpLmdldExheWVyKFVJTGF5ZXIuUGFuZWwpO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IGVmZmVjdExheWVyKCkge1xuICAgICAgICByZXR1cm4gdWkuZ2V0TGF5ZXIoVUlMYXllci5FZmZlY3QpO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IGxvYWRpbmdMYXllcigpIHtcbiAgICAgICAgcmV0dXJuIHVpLmdldExheWVyKFVJTGF5ZXIuTG9hZGluZ0Jhcik7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgYmFubmVyTGF5ZXIoKSB7XG4gICAgICAgIHJldHVybiB1aS5nZXRMYXllcihVSUxheWVyLkJhbm5lcik7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCB4TGF5ZXIoKSB7XG4gICAgICAgIHJldHVybiB1aS5nZXRMYXllcihVSUxheWVyLlgpO1xuICAgIH1cblxuICAgIHN0YXRpYyBwb3BWaWV3KHZpZXc6IGNjLk5vZGUsIGluc2VydDogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIHVpLnBvcFZpZXcodmlldywgaW5zZXJ0KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYWRkRWZmZWN0QVIobm9kZSkge1xuICAgICAgICB1aS5hZGRFZmZlY3RBUihub2RlKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcGxheUNsaWNrKCkge1xuICAgICAgICB0aGlzLnBsYXlTRlgoXCJjbGlja1wiKTsvLyhcIkJ1dHRvbl9jbGlja1wiKTtcbiAgICB9XG4gICAgc3RhdGljIHBsYXlEcm9wKCkge1xuICAgICAgICB0aGlzLnBsYXlTRlgoXCJkcm9wXCIpOy8vKFwiQnV0dG9uX2NsaWNrXCIpO1xuICAgIH1cblxuICAgIHN0YXRpYyBwbGF5Q29tcG9zZSgpIHtcbiAgICAgICAgdGhpcy5wbGF5U0ZYKFwiY29tcG9zZVwiKVxuICAgIH1cblxuICAgIHN0YXRpYyBwbGF5Rmx5Q29pbigpIHtcbiAgICAgICAgdGhpcy5wbGF5U0ZYKFwicmlzZV8xXCIpXG4gICAgfVxuICAgIHN0YXRpYyBwbGF5U0ZYKHNuZE5hbWU6IHN0cmluZywgZXh0OiBzdHJpbmcgPSBcIi5tcDNcIikge1xuICAgICAgICBzZC5wbGF5U0ZYKGBzb3VuZHMvJHtzbmROYW1lfWAsIDEsIGV4dCk7XG4gICAgfVxuXG4gICAgc3RhdGljIHNob3dUb2FzdChjb250ZXh0OiBzdHJpbmcsIGljbz86IFRpcEljbykge1xuICAgICAgICBUb2FzdC5zaG93KHVpLmdldExheWVyKFVJTGF5ZXIuVGlwKSwgY29udGV4dCwgaWNvID8gaWNvIDogVGlwSWNvLlRpcCk7XG4gICAgfVxuXG4gICAgc3RhdGljIHNob3dUb2FzdF9ub0NvaW4oKSB7XG4gICAgICAgIHRoaXMuc2hvd1RvYXN0KFwi6YeR5biB5LiN6LazXCIsIFRpcEljby5Db2luKTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBhZGRFZmZCb29tKHdwb3M6IGNjLlZlYzIpIHtcbiAgICAgICAgbGV0IGJvb20gPSBjYy5pbnN0YW50aWF0ZShCYWxsX01haW4uaW5zdGFuY2UucmVzTGlzdC5wcmVmYWJfZWZmX2Jvb20pO1xuICAgICAgICBib29tLnBvc2l0aW9uID0gd3BvcztcbiAgICAgICAgR2FtZVV0aWxzLmFkZEVmZmVjdEFSKGJvb20pO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIFV0aWxzLnJlbW92ZU5vZGUoYm9vbSlcbiAgICAgICAgfSwgMzAwMCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGFzeW5jIGxvYWRDb25maWdGcm9tQWxpKGZpbGVOYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgLy8gbGV0IHVybCA9IGAke0dhbWVDb25maWcuT1NTX1VSTF9CQVNFfSR7ZmlsZU5hbWV9Lmpzb25gOy8vJHtNYXRoLnJhbmRvbSgpfVxuICAgICAgICAvLyByZXR1cm4gVXRpbHMubG9hZENvbmZpZ0Zyb21BbGkodXJsKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlTm9kZUJ5RnJhbWUoZnJhbWU6IGNjLlNwcml0ZUZyYW1lLCBzY2FsZTogbnVtYmVyLCB1cmw/OiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IG5vZGUgPSBuZXcgY2MuTm9kZSgpO1xuICAgICAgICBsZXQgaWNvID0gbmV3IGNjLk5vZGUoKTtcbiAgICAgICAgaWNvLnNjYWxlID0gc2NhbGU7XG4gICAgICAgIGljby5wYXJlbnQgPSBub2RlO1xuICAgICAgICBsZXQgc3ByID0gaWNvLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICBzcHIuc3ByaXRlRnJhbWUgPSBmcmFtZTtcbiAgICAgICAgc3ByLnNpemVNb2RlID0gY2MuU3ByaXRlLlNpemVNb2RlLlJBVztcbiAgICAgICAgaWYgKHVybCkge1xuICAgICAgICAgICAgVXRpbHMudXBkYXRlTm9kZVNwcml0ZUZyYW1lKHVybCwgaWNvLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxufVxuIl19