
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/common/comp/SceneLoadingUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8eaa95GfXtNFY/MjapE2c4G', 'SceneLoadingUI');
// script/common/comp/SceneLoadingUI.ts

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
var GameUtils_1 = require("../../game/GameUtils");
var logger_1 = require("../../utils/logger");
var Utils_1 = require("../../utils/Utils");
var NumberAction_1 = require("./NumberAction");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SceneLoadingUI = /** @class */ (function (_super) {
    __extends(SceneLoadingUI, _super);
    function SceneLoadingUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lb_progress = null;
        _this.progressBar = null;
        return _this;
    }
    SceneLoadingUI_1 = SceneLoadingUI;
    SceneLoadingUI.hide = function () {
        // this.prefab = undefined;
        if (this._curUI) {
            Utils_1.Utils.removeNode(this._curUI.node);
            this._curUI = undefined;
        }
    };
    SceneLoadingUI.show = function () {
        if (this._curUI) {
            return;
        }
        var ins = cc.instantiate(SceneLoadingUI_1.prefab);
        ins.parent = GameUtils_1.GameUtils.loadingLayer;
    };
    SceneLoadingUI.preLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = SceneLoadingUI_1;
                        return [4 /*yield*/, Utils_1.Utils.loadPefab(SceneLoadingUI_1.Prefab_Name).catch(function (err) {
                                throw err;
                            })];
                    case 1:
                        _a.prefab = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SceneLoadingUI.setProgress = function (value) {
        if (!this._curUI) {
            return;
        }
        logger_1.Logger.debug("[SceneLoadingUI setProgress] value:", value);
        this._curUI._setPorgress(value);
    };
    SceneLoadingUI.prototype.init = function (data) {
        if (SceneLoadingUI_1._curUI) {
            Utils_1.Utils.removeNode(SceneLoadingUI_1._curUI.node);
        }
        SceneLoadingUI_1._curUI = this;
    };
    SceneLoadingUI.prototype._setPorgress = function (value) {
        value = Math.min(value, 1);
        cc.tween(this.progressBar)
            .to(0.2, { progress: value }, { easing: cc.easing.sineOut })
            .call(function () {
            if (value >= 1) {
                setTimeout(function () {
                    SceneLoadingUI_1.hide();
                }, 0);
            }
        })
            .start();
        var txt = Math.ceil(value * 100);
        NumberAction_1.default.numberTo(this.lb_progress.node, txt);
    };
    SceneLoadingUI.prototype.onLoad = function () {
        if (SceneLoadingUI_1._curUI) {
            return;
        }
        SceneLoadingUI_1._curUI = this;
        this.progressBar = this.node.getComponentInChildren(cc.ProgressBar);
        this._setPorgress(0);
    };
    var SceneLoadingUI_1;
    SceneLoadingUI._curUI = null;
    SceneLoadingUI.prefab = null;
    SceneLoadingUI.Prefab_Name = "prefab/common/SceneLoadingUI";
    __decorate([
        property(cc.Label)
    ], SceneLoadingUI.prototype, "lb_progress", void 0);
    SceneLoadingUI = SceneLoadingUI_1 = __decorate([
        ccclass
    ], SceneLoadingUI);
    return SceneLoadingUI;
}(cc.Component));
exports.default = SceneLoadingUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvY29tbW9uL2NvbXAvU2NlbmVMb2FkaW5nVUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsa0RBQWlEO0FBQ2pELDZDQUE0QztBQUM1QywyQ0FBMEM7QUFDMUMsK0NBQTBDO0FBRXBDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTRDLGtDQUFZO0lBQXhEO1FBQUEscUVBMEVDO1FBckNHLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRTVCLGlCQUFXLEdBQW1CLElBQUksQ0FBQzs7SUFtQ3ZDLENBQUM7dUJBMUVvQixjQUFjO0lBTWpCLG1CQUFJLEdBQWxCO1FBQ0ksMkJBQTJCO1FBQzNCLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNiLGFBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNuQyxJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztTQUMzQjtJQUNMLENBQUM7SUFFYSxtQkFBSSxHQUFsQjtRQUNJLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNiLE9BQU87U0FDVjtRQUNELElBQUksR0FBRyxHQUFZLEVBQUUsQ0FBQyxXQUFXLENBQUMsZ0JBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6RCxHQUFHLENBQUMsTUFBTSxHQUFHLHFCQUFTLENBQUMsWUFBWSxDQUFDO0lBQ3hDLENBQUM7SUFFbUIsc0JBQU8sR0FBM0I7Ozs7Ozt3QkFDSSxLQUFBLGdCQUFjLENBQUE7d0JBQVUscUJBQU0sYUFBSyxDQUFDLFNBQVMsQ0FBQyxnQkFBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFBLEdBQUc7Z0NBQy9FLE1BQU0sR0FBRyxDQUFDOzRCQUNkLENBQUMsQ0FBQyxFQUFBOzt3QkFGRixHQUFlLE1BQU0sR0FBRyxTQUV0QixDQUFDOzs7OztLQUNOO0lBRWEsMEJBQVcsR0FBekIsVUFBMEIsS0FBYTtRQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNkLE9BQU87U0FDVjtRQUNELGVBQU0sQ0FBQyxLQUFLLENBQUMscUNBQXFDLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQVFNLDZCQUFJLEdBQVgsVUFBWSxJQUFZO1FBQ3BCLElBQUksZ0JBQWMsQ0FBQyxNQUFNLEVBQUU7WUFDdkIsYUFBSyxDQUFDLFVBQVUsQ0FBQyxnQkFBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNoRDtRQUNELGdCQUFjLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUNqQyxDQUFDO0lBR08scUNBQVksR0FBcEIsVUFBcUIsS0FBYTtRQUM5QixLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDM0IsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ3JCLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUMzRCxJQUFJLENBQUM7WUFDRixJQUFJLEtBQUssSUFBSSxDQUFDLEVBQUU7Z0JBQ1osVUFBVSxDQUFDO29CQUNQLGdCQUFjLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQzFCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUNUO1FBQ0wsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxFQUFFLENBQUM7UUFDYixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQztRQUNqQyxzQkFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBQyxHQUFHLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsK0JBQU0sR0FBTjtRQUNJLElBQUksZ0JBQWMsQ0FBQyxNQUFNLEVBQUU7WUFDdkIsT0FBTztTQUNWO1FBQ0QsZ0JBQWMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQzdCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6QixDQUFDOztJQXZFYyxxQkFBTSxHQUFtQixJQUFJLENBQUM7SUFDL0IscUJBQU0sR0FBUSxJQUFJLENBQUM7SUFDbkIsMEJBQVcsR0FBRyw4QkFBOEIsQ0FBQztJQWlDM0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzt1REFDUztJQXJDWCxjQUFjO1FBRGxDLE9BQU87T0FDYSxjQUFjLENBMEVsQztJQUFELHFCQUFDO0NBMUVELEFBMEVDLENBMUUyQyxFQUFFLENBQUMsU0FBUyxHQTBFdkQ7a0JBMUVvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2FtZVV0aWxzIH0gZnJvbSBcIi4uLy4uL2dhbWUvR2FtZVV0aWxzXCI7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiLi4vLi4vdXRpbHMvbG9nZ2VyXCI7XG5pbXBvcnQgeyBVdGlscyB9IGZyb20gXCIuLi8uLi91dGlscy9VdGlsc1wiO1xuaW1wb3J0IE51bWJlckFjdGlvbiBmcm9tIFwiLi9OdW1iZXJBY3Rpb25cIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjZW5lTG9hZGluZ1VJIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIHByaXZhdGUgc3RhdGljIF9jdXJVSTogU2NlbmVMb2FkaW5nVUkgPSBudWxsO1xuICAgIHB1YmxpYyBzdGF0aWMgcHJlZmFiOiBhbnkgPSBudWxsO1xuICAgIHB1YmxpYyBzdGF0aWMgUHJlZmFiX05hbWUgPSBcInByZWZhYi9jb21tb24vU2NlbmVMb2FkaW5nVUlcIjtcblxuICAgIHB1YmxpYyBzdGF0aWMgaGlkZSgpIHtcbiAgICAgICAgLy8gdGhpcy5wcmVmYWIgPSB1bmRlZmluZWQ7XG4gICAgICAgIGlmICh0aGlzLl9jdXJVSSkge1xuICAgICAgICAgICAgVXRpbHMucmVtb3ZlTm9kZSh0aGlzLl9jdXJVSS5ub2RlKTtcbiAgICAgICAgICAgIHRoaXMuX2N1clVJID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBzaG93KCkge1xuICAgICAgICBpZiAodGhpcy5fY3VyVUkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgaW5zOiBjYy5Ob2RlID0gY2MuaW5zdGFudGlhdGUoU2NlbmVMb2FkaW5nVUkucHJlZmFiKTtcbiAgICAgICAgaW5zLnBhcmVudCA9IEdhbWVVdGlscy5sb2FkaW5nTGF5ZXI7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBwcmVMb2FkKCkge1xuICAgICAgICBTY2VuZUxvYWRpbmdVSS5wcmVmYWIgPSBhd2FpdCBVdGlscy5sb2FkUGVmYWIoU2NlbmVMb2FkaW5nVUkuUHJlZmFiX05hbWUpLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgc2V0UHJvZ3Jlc3ModmFsdWU6IG51bWJlcikge1xuICAgICAgICBpZiAoIXRoaXMuX2N1clVJKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgTG9nZ2VyLmRlYnVnKFwiW1NjZW5lTG9hZGluZ1VJIHNldFByb2dyZXNzXSB2YWx1ZTpcIiwgdmFsdWUpO1xuICAgICAgICB0aGlzLl9jdXJVSS5fc2V0UG9yZ3Jlc3ModmFsdWUpO1xuICAgIH1cblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYl9wcm9ncmVzczpjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBwcm9ncmVzc0JhcjogY2MuUHJvZ3Jlc3NCYXIgPSBudWxsO1xuXG5cbiAgICBwdWJsaWMgaW5pdChkYXRhOiBvYmplY3QpIHtcbiAgICAgICAgaWYgKFNjZW5lTG9hZGluZ1VJLl9jdXJVSSkge1xuICAgICAgICAgICAgVXRpbHMucmVtb3ZlTm9kZShTY2VuZUxvYWRpbmdVSS5fY3VyVUkubm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgU2NlbmVMb2FkaW5nVUkuX2N1clVJID0gdGhpcztcbiAgICB9XG5cblxuICAgIHByaXZhdGUgX3NldFBvcmdyZXNzKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdmFsdWUgPSBNYXRoLm1pbih2YWx1ZSwgMSk7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMucHJvZ3Jlc3NCYXIpXG4gICAgICAgICAgICAudG8oMC4yLCB7IHByb2dyZXNzOiB2YWx1ZSB9LCB7IGVhc2luZzogY2MuZWFzaW5nLnNpbmVPdXQgfSlcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPj0gMSkge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFNjZW5lTG9hZGluZ1VJLmhpZGUoKTsgICAgXG4gICAgICAgICAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgbGV0IHR4dCA9IE1hdGguY2VpbCh2YWx1ZSAqIDEwMCk7XG4gICAgICAgIE51bWJlckFjdGlvbi5udW1iZXJUbyh0aGlzLmxiX3Byb2dyZXNzLm5vZGUsdHh0KTtcbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIGlmIChTY2VuZUxvYWRpbmdVSS5fY3VyVUkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBTY2VuZUxvYWRpbmdVSS5fY3VyVUkgPSB0aGlzO1xuICAgICAgICB0aGlzLnByb2dyZXNzQmFyID0gdGhpcy5ub2RlLmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuUHJvZ3Jlc3NCYXIpO1xuICAgICAgICB0aGlzLl9zZXRQb3JncmVzcygwKTtcbiAgICB9XG59XG4iXX0=