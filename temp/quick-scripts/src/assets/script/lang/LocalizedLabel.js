"use strict";
cc._RF.push(module, 'aee9e3EK5VPOqFXZ4hHrUaV', 'LocalizedLabel');
// script/lang/LocalizedLabel.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalizedLabel = void 0;
var i18n = require("./LanguageData");
// import { _decorator, Component, Label, Font, RichText } from 'cc';
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode;
// const { ccclass, property, executeInEditMode } = _decorator;
var LocalizedFontItem = /** @class */ (function () {
    function LocalizedFontItem() {
        this.language = 'zh';
        this.font = null;
    }
    __decorate([
        property(cc.String)
    ], LocalizedFontItem.prototype, "language", void 0);
    __decorate([
        property(cc.Font)
    ], LocalizedFontItem.prototype, "font", void 0);
    LocalizedFontItem = __decorate([
        ccclass("LocalizedFontItem")
    ], LocalizedFontItem);
    return LocalizedFontItem;
}());
var LocalizedLabel = /** @class */ (function (_super) {
    __extends(LocalizedLabel, _super);
    function LocalizedLabel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.isRickText = false;
        _this.key = '';
        _this.fontList = [];
        // 多语言参数
        _this.param = null;
        return _this;
    }
    Object.defineProperty(LocalizedLabel.prototype, "_key", {
        get: function () {
            return this.key;
        },
        set: function (str) {
            this.updateLabel();
            this.key = str;
        },
        enumerable: false,
        configurable: true
    });
    LocalizedLabel.prototype.onLoad = function () {
        if (!i18n.ready) {
            i18n.init('zh');
        }
        this.fetchRender();
    };
    LocalizedLabel.prototype.fetchRender = function () {
        var label = null;
        if (this.isRickText) {
            label = this.getComponent(cc.RichText);
        }
        else {
            label = this.getComponent(cc.Label);
        }
        if (label) {
            this.label = label;
            this.updateLabel();
            return;
        }
    };
    LocalizedLabel.prototype.updateLabel = function () {
        for (var i = 0; i < this.fontList.length; i++) {
            var font = this.fontList[i];
            if (font.language === i18n._language) {
                if (this.label && font) {
                    this.label.font = font.font;
                }
                break;
            }
        }
        if (this.label) {
            if (this.key) {
                this.label.string = i18n.t(this.key, this.param);
            }
        }
        // this.label && (this.label.string = i18n.t(this.key));
    };
    __decorate([
        property({ visible: true })
    ], LocalizedLabel.prototype, "isRickText", void 0);
    __decorate([
        property({ visible: false })
    ], LocalizedLabel.prototype, "key", void 0);
    __decorate([
        property({ displayName: 'Key', visible: true })
    ], LocalizedLabel.prototype, "_key", null);
    __decorate([
        property({ type: LocalizedFontItem, serializable: false })
    ], LocalizedLabel.prototype, "fontList", void 0);
    LocalizedLabel = __decorate([
        ccclass,
        executeInEditMode
    ], LocalizedLabel);
    return LocalizedLabel;
}(cc.Component));
exports.LocalizedLabel = LocalizedLabel;

cc._RF.pop();