
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/common/comp/PanelBase.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f740aSBwwFD/pu0YoVtKRyE', 'PanelBase');
// script/common/comp/PanelBase.ts

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
exports.EventOnPanelClose = void 0;
var logger_1 = require("../../utils/logger");
var Utils_1 = require("../../utils/Utils");
var Global_1 = require("../Global");
var EventOnPanelClose = /** @class */ (function (_super) {
    __extends(EventOnPanelClose, _super);
    function EventOnPanelClose(viewName) {
        var _this = _super.call(this, EventOnPanelClose.NAME, true) || this;
        _this.viewName = viewName;
        return _this;
    }
    EventOnPanelClose.NAME = "EventOnPanelClose";
    return EventOnPanelClose;
}(cc.Event.EventCustom));
exports.EventOnPanelClose = EventOnPanelClose;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PanelBase = /** @class */ (function (_super) {
    __extends(PanelBase, _super);
    function PanelBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PanelBase_1 = PanelBase;
    PanelBase.ShowPanel = function (url) {
        return __awaiter(this, void 0, Promise, function () {
            var prefab, insNode, panel;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.Panels[url]) {
                            logger_1.Logger.debug("[PanelBase] 该弹窗工作中");
                            return [2 /*return*/, undefined];
                        }
                        this.Panels[url] = true;
                        return [4 /*yield*/, Utils_1.Utils.loadPefab(url)];
                    case 1:
                        prefab = _a.sent();
                        insNode = cc.instantiate(prefab);
                        panel = insNode.getComponent(PanelBase_1);
                        panel._url = url;
                        return [2 /*return*/, insNode];
                }
            });
        });
    };
    PanelBase.onSwitchScene = function () {
        this.Panels = {};
    };
    PanelBase.prototype.close = function () {
        var _a;
        PanelBase_1.Panels[this._url] = false;
        var name = (_a = this.node) === null || _a === void 0 ? void 0 : _a.name;
        Utils_1.Utils.removeNode(this.node);
        Global_1.GlobalEvent.dispatchEvent(new EventOnPanelClose(name));
    };
    var PanelBase_1;
    PanelBase = PanelBase_1 = __decorate([
        ccclass
    ], PanelBase);
    return PanelBase;
}(cc.Component));
exports.default = PanelBase;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvY29tbW9uL2NvbXAvUGFuZWxCYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBNEM7QUFDNUMsMkNBQTBDO0FBQzFDLG9DQUF3QztBQUd4QztJQUF1QyxxQ0FBb0I7SUFHdkQsMkJBQW1CLFFBQWdCO1FBQW5DLFlBQ0ksa0JBQU0saUJBQWlCLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUV0QztRQURHLEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDOztJQUM3QixDQUFDO0lBTHNCLHNCQUFJLEdBQVcsbUJBQW1CLENBQUM7SUFNOUQsd0JBQUM7Q0FQRCxBQU9DLENBUHNDLEVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVyxHQU8xRDtBQVBZLDhDQUFpQjtBQVV4QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF1Qyw2QkFBWTtJQUFuRDs7SUEyQkEsQ0FBQztrQkEzQm9CLFNBQVM7SUFFYixtQkFBUyxHQUF0QixVQUF1QixHQUFXO3VDQUFHLE9BQU87Ozs7O3dCQUN4QyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUU7NEJBQ2xCLGVBQU0sQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQzs0QkFDbkMsc0JBQU8sU0FBUyxFQUFDO3lCQUNwQjt3QkFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQzt3QkFDWCxxQkFBTSxhQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFBOzt3QkFBbkMsTUFBTSxHQUFHLFNBQTBCO3dCQUNuQyxPQUFPLEdBQVksRUFBRSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQzt3QkFDMUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsV0FBUyxDQUFDLENBQUM7d0JBQzVDLEtBQUssQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO3dCQUNqQixzQkFBTyxPQUFPLEVBQUM7Ozs7S0FDbEI7SUFFTSx1QkFBYSxHQUFwQjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFJRCx5QkFBSyxHQUFMOztRQUNJLFdBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUNwQyxJQUFJLElBQUksU0FBRyxJQUFJLENBQUMsSUFBSSwwQ0FBRSxJQUFJLENBQUM7UUFDM0IsYUFBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUIsb0JBQVcsQ0FBQyxhQUFhLENBQUMsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7O0lBMUJnQixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBMkI3QjtJQUFELGdCQUFDO0NBM0JELEFBMkJDLENBM0JzQyxFQUFFLENBQUMsU0FBUyxHQTJCbEQ7a0JBM0JvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2xvZ2dlclwiO1xuaW1wb3J0IHsgVXRpbHMgfSBmcm9tIFwiLi4vLi4vdXRpbHMvVXRpbHNcIjtcbmltcG9ydCB7IEdsb2JhbEV2ZW50IH0gZnJvbSBcIi4uL0dsb2JhbFwiO1xuXG5cbmV4cG9ydCBjbGFzcyBFdmVudE9uUGFuZWxDbG9zZSBleHRlbmRzIGNjLkV2ZW50LkV2ZW50Q3VzdG9tIHtcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IE5BTUU6IHN0cmluZyA9IFwiRXZlbnRPblBhbmVsQ2xvc2VcIjtcbiAgICB2aWV3TmFtZTogc3RyaW5nO1xuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcih2aWV3TmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKEV2ZW50T25QYW5lbENsb3NlLk5BTUUsIHRydWUpO1xuICAgICAgICB0aGlzLnZpZXdOYW1lID0gdmlld05hbWU7XG4gICAgfVxufVxuXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYW5lbEJhc2UgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIHN0YXRpYyBQYW5lbHM6IHsgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9O1xuICAgIHN0YXRpYyBhc3luYyBTaG93UGFuZWwodXJsOiBzdHJpbmcpOiBQcm9taXNlPGNjLk5vZGU+IHtcbiAgICAgICAgaWYgKHRoaXMuUGFuZWxzW3VybF0pIHtcbiAgICAgICAgICAgIExvZ2dlci5kZWJ1ZyhcIltQYW5lbEJhc2VdIOivpeW8ueeql+W3peS9nOS4rVwiKTtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5QYW5lbHNbdXJsXSA9IHRydWU7XG4gICAgICAgIGxldCBwcmVmYWIgPSBhd2FpdCBVdGlscy5sb2FkUGVmYWIodXJsKTtcbiAgICAgICAgbGV0IGluc05vZGU6IGNjLk5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xuICAgICAgICBsZXQgcGFuZWwgPSBpbnNOb2RlLmdldENvbXBvbmVudChQYW5lbEJhc2UpO1xuICAgICAgICBwYW5lbC5fdXJsID0gdXJsO1xuICAgICAgICByZXR1cm4gaW5zTm9kZTtcbiAgICB9XG5cbiAgICBzdGF0aWMgb25Td2l0Y2hTY2VuZSgpe1xuICAgICAgICB0aGlzLlBhbmVscyA9IHt9O1xuICAgIH1cblxuICAgIHB1YmxpYyBfdXJsOiBzdHJpbmc7XG5cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgUGFuZWxCYXNlLlBhbmVsc1t0aGlzLl91cmxdID0gZmFsc2U7XG4gICAgICAgIGxldCBuYW1lID0gdGhpcy5ub2RlPy5uYW1lO1xuICAgICAgICBVdGlscy5yZW1vdmVOb2RlKHRoaXMubm9kZSk7XG4gICAgICAgIEdsb2JhbEV2ZW50LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50T25QYW5lbENsb3NlKG5hbWUpKTtcbiAgICB9XG59XG4iXX0=