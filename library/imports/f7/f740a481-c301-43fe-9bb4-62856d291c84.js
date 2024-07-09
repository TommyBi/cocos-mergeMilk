"use strict";
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