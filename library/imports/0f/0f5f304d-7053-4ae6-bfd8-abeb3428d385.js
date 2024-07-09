"use strict";
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