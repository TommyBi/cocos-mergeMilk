
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/common/comp/toast/Toast.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0f5f3BNcFNK5r/Yq+s0KNOF', 'Toast');
// script/common/comp/toast/Toast.ts

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
exports.TipIco = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TipIco;
(function (TipIco) {
    TipIco[TipIco["NetErr"] = 0] = "NetErr";
    TipIco[TipIco["Error"] = 1] = "Error";
    TipIco[TipIco["Tip"] = 2] = "Tip";
    TipIco[TipIco["Flower"] = 3] = "Flower";
    TipIco[TipIco["Coin"] = 4] = "Coin";
})(TipIco = exports.TipIco || (exports.TipIco = {}));
var Toast = /** @class */ (function (_super) {
    __extends(Toast, _super);
    function Toast() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.icon_frames = [];
        _this.lb_msg = null;
        _this.img_icon = null;
        _this.lb_num = null;
        _this.startTime = 0;
        _this.duration = 2;
        _this.iconIndex = 0;
        return _this;
    }
    Toast_1 = Toast;
    Toast.preLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = Toast_1;
                        return [4 /*yield*/, Toast_1.loadPefab(Toast_1.Prefab_Name).catch(function (err) {
                                throw err;
                            })];
                    case 1:
                        _a.prefab = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Toast.showNum = function (tipLayer, title, ico, num) {
        this._show(tipLayer, title, ico, num + "");
    };
    Toast.show = function (tipLayer, msg, ico) {
        if (ico === void 0) { ico = TipIco.Tip; }
        this._show(tipLayer, msg, ico, undefined, 2);
    };
    /**
     *
     * @param duration 秒
     */
    Toast._show = function (tipLayer, msg, iconIndex, num, duration) {
        if (duration === void 0) { duration = 2; }
        return __awaiter(this, void 0, void 0, function () {
            var instance, t;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.prefab) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.preLoad()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        instance = cc.instantiate(Toast_1.prefab);
                        t = instance.getComponent(Toast_1);
                        t._show(msg, iconIndex, num, duration);
                        instance.parent = tipLayer;
                        return [2 /*return*/, instance];
                }
            });
        });
    };
    /**
     * 预制件加载
     * @param path
     */
    Toast.loadPefab = function (path, needRelease) {
        if (needRelease === void 0) { needRelease = false; }
        return __awaiter(this, void 0, Promise, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var load, times;
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    load = function () { return __awaiter(_this, void 0, void 0, function () {
                                        return __generator(this, function (_a) {
                                            return [2 /*return*/, new Promise(function (rsv, rjt) {
                                                    var tot = setTimeout(function () {
                                                        rjt("oadPefab 连接超时" + path);
                                                    }, 10000);
                                                    cc.resources.load(path, function (err, res) {
                                                        clearTimeout(tot);
                                                        if (err) {
                                                            rjt(err);
                                                        }
                                                        else {
                                                            rsv(res);
                                                        }
                                                    });
                                                })];
                                        });
                                    }); };
                                    times = 3;
                                    _a.label = 1;
                                case 1:
                                    if (!(times > 0)) return [3 /*break*/, 3];
                                    return [4 /*yield*/, load().then(function (res) {
                                            times = 0;
                                            // if (needRelease) {
                                            //     this.prefab_need_release[path] = res;
                                            // }
                                            resolve(res);
                                        }).catch(function (err) {
                                            times--;
                                            if (times <= 0) {
                                                reject(err);
                                            }
                                        })];
                                case 2:
                                    _a.sent();
                                    return [3 /*break*/, 1];
                                case 3: return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    Toast.prototype._show = function (msg, iconIndex, num, duration) {
        if (duration === void 0) { duration = 2; }
        this.iconIndex = iconIndex;
        this.startTime = (new Date()).getTime();
        if (iconIndex < 0) {
            this.img_icon.node.active = false;
            this.node.width = 354;
        }
        else {
            this.img_icon.node.active = true;
            this.img_icon.spriteFrame = this.icon_frames[iconIndex];
            this.node.width = 400;
        }
        if (!num) {
            this.lb_num.node.active = false;
            this.node.height = 84;
        }
        else {
            this.lb_num.node.active = true;
            this.lb_num.string = num;
            this.node.height = 154;
        }
        this.duration = duration;
        this.lb_msg.string = msg;
        this.node.y = -50;
        this.node.opacity = 0;
    };
    Toast.prototype.onLoad = function () {
        var _this = this;
        cc.tween(this.node).to(0.3, { y: 0, opacity: 255 }, { easing: cc.easing.sineOut }).start();
        this.timer = setTimeout(function () {
            cc.tween(_this.node)
                .to(0.3, { y: _this.node.y + 50, opacity: 0 }, { easing: cc.easing.sineOut })
                .call(function () {
                _this.node.removeFromParent();
                _this.node.destroy();
            })
                .start();
        }, this.duration * 1000);
    };
    Toast.prototype.onDestroy = function () {
        clearTimeout(this.timer);
    };
    var Toast_1;
    Toast.Prefab_Name = "prefab/common/toast/toast";
    Toast.prefab = null;
    __decorate([
        property([cc.SpriteFrame])
    ], Toast.prototype, "icon_frames", void 0);
    __decorate([
        property(cc.Label)
    ], Toast.prototype, "lb_msg", void 0);
    __decorate([
        property(cc.Sprite)
    ], Toast.prototype, "img_icon", void 0);
    __decorate([
        property(cc.Label)
    ], Toast.prototype, "lb_num", void 0);
    Toast = Toast_1 = __decorate([
        ccclass
    ], Toast);
    return Toast;
}(cc.Component));
exports.default = Toast;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvY29tbW9uL2NvbXAvdG9hc3QvVG9hc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDLElBQVksTUFNWDtBQU5ELFdBQVksTUFBTTtJQUNkLHVDQUFVLENBQUE7SUFDVixxQ0FBSyxDQUFBO0lBQ0wsaUNBQUcsQ0FBQTtJQUNILHVDQUFNLENBQUE7SUFDTixtQ0FBSSxDQUFBO0FBQ1IsQ0FBQyxFQU5XLE1BQU0sR0FBTixjQUFNLEtBQU4sY0FBTSxRQU1qQjtBQUdEO0lBQW1DLHlCQUFZO0lBQS9DO1FBQUEscUVBc0lDO1FBM0RHLGlCQUFXLEdBQTBCLEVBQUUsQ0FBQztRQUd4QyxZQUFNLEdBQWEsSUFBSSxDQUFDO1FBR3hCLGNBQVEsR0FBYyxJQUFJLENBQUM7UUFHM0IsWUFBTSxHQUFhLElBQUksQ0FBQztRQUVqQixlQUFTLEdBQVcsQ0FBQyxDQUFDO1FBRXRCLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFFckIsZUFBUyxHQUFXLENBQUMsQ0FBQzs7SUE0Q2pDLENBQUM7Y0F0SW9CLEtBQUs7SUFHRixhQUFPLEdBQTNCOzs7Ozs7d0JBQ0ksS0FBQSxPQUFLLENBQUE7d0JBQVUscUJBQU0sT0FBSyxDQUFDLFNBQVMsQ0FBQyxPQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUEsR0FBRztnQ0FDN0QsTUFBTSxHQUFHLENBQUM7NEJBQ2QsQ0FBQyxDQUFDLEVBQUE7O3dCQUZGLEdBQU0sTUFBTSxHQUFHLFNBRWIsQ0FBQzs7Ozs7S0FDTjtJQUVhLGFBQU8sR0FBckIsVUFBc0IsUUFBaUIsRUFBRSxLQUFhLEVBQUUsR0FBVyxFQUFFLEdBQVc7UUFDNUUs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QUFDOzJDQUNPO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7eUNBQ0s7SUFwRlAsS0FBSztRQUR6QixPQUFPO09BQ2EsS0FBSyxDQXNJekI7SUFBRCxZQUFDO0NBdElELEFBc0lDLENBdElrQyxFQUFFLENBQUMsU0FBUyxHQXNJOUM7a0JBdElvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5leHBvcnQgZW51bSBUaXBJY28ge1xuICAgIE5ldEVyciA9IDAsXG4gICAgRXJyb3IsXG4gICAgVGlwLFxuICAgIEZsb3dlcixcbiAgICBDb2luLFxufVxuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9hc3QgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIHB1YmxpYyBzdGF0aWMgUHJlZmFiX05hbWUgPSBcInByZWZhYi9jb21tb24vdG9hc3QvdG9hc3RcIjtcbiAgICBwdWJsaWMgc3RhdGljIHByZWZhYjogYW55ID0gbnVsbDtcbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIHByZUxvYWQoKSB7XG4gICAgICAgIFRvYXN0LnByZWZhYiA9IGF3YWl0IFRvYXN0LmxvYWRQZWZhYihUb2FzdC5QcmVmYWJfTmFtZSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBzaG93TnVtKHRpcExheWVyOiBjYy5Ob2RlLCB0aXRsZTogc3RyaW5nLCBpY286IFRpcEljbywgbnVtOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fc2hvdyh0aXBMYXllciwgdGl0bGUsIGljbywgbnVtICsgXCJcIik7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBzaG93KHRpcExheWVyOiBjYy5Ob2RlLCBtc2c6IHN0cmluZywgaWNvOiBUaXBJY28gPSBUaXBJY28uVGlwKSB7XG4gICAgICAgIHRoaXMuX3Nob3codGlwTGF5ZXIsIG1zZywgaWNvLCB1bmRlZmluZWQsIDIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gZHVyYXRpb24g56eSXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBfc2hvdyh0aXBMYXllcjogY2MuTm9kZSwgbXNnOiBzdHJpbmcsIGljb25JbmRleDogbnVtYmVyLCBudW0/OiBzdHJpbmcsIGR1cmF0aW9uOiBudW1iZXIgPSAyKSB7XG4gICAgICAgIGlmICghdGhpcy5wcmVmYWIpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucHJlTG9hZCgpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBpbnN0YW5jZTogY2MuTm9kZSA9IGNjLmluc3RhbnRpYXRlKFRvYXN0LnByZWZhYik7XG4gICAgICAgIGxldCB0OiBUb2FzdCA9IGluc3RhbmNlLmdldENvbXBvbmVudChUb2FzdCk7XG4gICAgICAgIHQuX3Nob3cobXNnLCBpY29uSW5kZXgsIG51bSwgZHVyYXRpb24pO1xuICAgICAgICBpbnN0YW5jZS5wYXJlbnQgPSB0aXBMYXllcjtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDpooTliLbku7bliqDovb1cbiAgICAgKiBAcGFyYW0gcGF0aCBcbiAgICAgKi9cbiAgICBzdGF0aWMgYXN5bmMgbG9hZFBlZmFiKHBhdGg6IHN0cmluZywgbmVlZFJlbGVhc2U6IGJvb2xlYW4gPSBmYWxzZSk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAvLyBpZiAodGhpcy5wcmVmYWJfbmVlZF9yZWxlYXNlW3BhdGhdKSB7XG4gICAgICAgICAgICAvLyAgICAgcmVzb2x2ZSh0aGlzLnByZWZhYl9uZWVkX3JlbGVhc2VbcGF0aF0pO1xuICAgICAgICAgICAgLy8gICAgIHJldHVybjtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIGxldCBsb2FkID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocnN2LCByanQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRvdCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmp0KFwib2FkUGVmYWIg6L+e5o6l6LaF5pe2XCIgKyBwYXRoKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMTAwMDApO1xuICAgICAgICAgICAgICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChwYXRoLCAoZXJyLCByZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0b3QpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmp0KGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJzdihyZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHRpbWVzID0gMztcbiAgICAgICAgICAgIHdoaWxlICh0aW1lcyA+IDApIHtcbiAgICAgICAgICAgICAgICBhd2FpdCBsb2FkKCkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRpbWVzID0gMDtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgKG5lZWRSZWxlYXNlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLnByZWZhYl9uZWVkX3JlbGVhc2VbcGF0aF0gPSByZXM7XG4gICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRpbWVzLS07XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aW1lcyA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgQHByb3BlcnR5KFtjYy5TcHJpdGVGcmFtZV0pXG4gICAgaWNvbl9mcmFtZXM6IEFycmF5PGNjLlNwcml0ZUZyYW1lPiA9IFtdO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiX21zZzogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBpbWdfaWNvbjogY2MuU3ByaXRlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYl9udW06IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIHB1YmxpYyBzdGFydFRpbWU6IG51bWJlciA9IDA7XG4gICAgcHVibGljIHRpbWVyO1xuICAgIHB1YmxpYyBkdXJhdGlvbjogbnVtYmVyID0gMjtcblxuICAgIHB1YmxpYyBpY29uSW5kZXg6IG51bWJlciA9IDA7XG5cbiAgICBwdWJsaWMgX3Nob3cobXNnOiBzdHJpbmcsIGljb25JbmRleDogbnVtYmVyLCBudW06IHN0cmluZywgZHVyYXRpb246IG51bWJlciA9IDIpIHtcbiAgICAgICAgdGhpcy5pY29uSW5kZXggPSBpY29uSW5kZXg7XG4gICAgICAgIHRoaXMuc3RhcnRUaW1lID0gKG5ldyBEYXRlKCkpLmdldFRpbWUoKTtcbiAgICAgICAgaWYgKGljb25JbmRleCA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuaW1nX2ljb24ubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMubm9kZS53aWR0aCA9IDM1NDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaW1nX2ljb24ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5pbWdfaWNvbi5zcHJpdGVGcmFtZSA9IHRoaXMuaWNvbl9mcmFtZXNbaWNvbkluZGV4XTtcbiAgICAgICAgICAgIHRoaXMubm9kZS53aWR0aCA9IDQwMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIW51bSkge1xuICAgICAgICAgICAgdGhpcy5sYl9udW0ubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5oZWlnaHQgPSA4NDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubGJfbnVtLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubGJfbnVtLnN0cmluZyA9IG51bTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5oZWlnaHQgPSAxNTQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IGR1cmF0aW9uO1xuICAgICAgICB0aGlzLmxiX21zZy5zdHJpbmcgPSBtc2c7XG4gICAgICAgIHRoaXMubm9kZS55ID0gLTUwO1xuICAgICAgICB0aGlzLm5vZGUub3BhY2l0eSA9IDA7XG5cbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkudG8oMC4zLCB7IHk6IDAsIG9wYWNpdHk6IDI1NSB9LCB7IGVhc2luZzogY2MuZWFzaW5nLnNpbmVPdXQgfSkuc3RhcnQoKTtcblxuICAgICAgICB0aGlzLnRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXG4gICAgICAgICAgICAgICAgLnRvKDAuMywgeyB5OiB0aGlzLm5vZGUueSArIDUwLCBvcGFjaXR5OiAwIH0sIHsgZWFzaW5nOiBjYy5lYXNpbmcuc2luZU91dCB9KVxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnJlbW92ZUZyb21QYXJlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICB9LCB0aGlzLmR1cmF0aW9uICogMTAwMCk7XG4gICAgfVxuICAgIG9uRGVzdHJveSgpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xuICAgIH1cbn1cbiJdfQ==