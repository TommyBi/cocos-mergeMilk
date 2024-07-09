
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/lang/LocalizedLabel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvbGFuZy9Mb2NhbGl6ZWRMYWJlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EscUNBQXVDO0FBRXZDLHFFQUFxRTtBQUMvRCxJQUFBLEtBQXdDLEVBQUUsQ0FBQyxVQUFVLEVBQXBELE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBQSxFQUFDLGlCQUFpQix1QkFBaUIsQ0FBQztBQUM1RCwrREFBK0Q7QUFHL0Q7SUFBQTtRQUVJLGFBQVEsR0FBVyxJQUFJLENBQUM7UUFHeEIsU0FBSSxHQUFtQixJQUFJLENBQUM7SUFDaEMsQ0FBQztJQUpHO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7dURBQ0k7SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDVTtJQUwxQixpQkFBaUI7UUFEdEIsT0FBTyxDQUFDLG1CQUFtQixDQUFDO09BQ3ZCLGlCQUFpQixDQU10QjtJQUFELHdCQUFDO0NBTkQsQUFNQyxJQUFBO0FBSUQ7SUFBb0Msa0NBQVk7SUFBaEQ7UUFBQSxxRUFrRUM7UUFqRUcsV0FBSyxHQUEyQixJQUFJLENBQUM7UUFHckMsZ0JBQVUsR0FBWSxLQUFLLENBQUM7UUFHNUIsU0FBRyxHQUFXLEVBQUUsQ0FBQztRQVlqQixjQUFRLEdBQXVCLEVBQUUsQ0FBQztRQUVsQyxRQUFRO1FBQ0QsV0FBSyxHQUFjLElBQUksQ0FBQzs7SUE0Q25DLENBQUM7SUF4REcsc0JBQUksZ0NBQUk7YUFBUjtZQUNJLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUNwQixDQUFDO2FBQ0QsVUFBUyxHQUFXO1lBQ2hCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNuQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNuQixDQUFDOzs7T0FKQTtJQVdELCtCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbkI7UUFDRCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELG9DQUFXLEdBQVg7UUFDSSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2pCLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUMxQzthQUFNO1lBQ0gsS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3ZDO1FBRUQsSUFBSSxLQUFLLEVBQUU7WUFDUCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNuQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbkIsT0FBTztTQUNWO0lBQ0wsQ0FBQztJQUVELG9DQUFXLEdBQVg7UUFFSSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQzdDO1lBQ0ksSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QixJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDbEMsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksRUFDdEI7b0JBQ0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztpQkFDL0I7Z0JBQ0QsTUFBTTthQUNUO1NBQ0o7UUFDRCxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDWixJQUFJLElBQUksQ0FBQyxHQUFHLEVBQ1o7Z0JBQ0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNuRDtTQUNKO1FBQ0Qsd0RBQXdEO0lBQzVELENBQUM7SUE3REQ7UUFEQyxRQUFRLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUM7c0RBQ0E7SUFHNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUM7K0NBQ1o7SUFHakI7UUFEQyxRQUFRLENBQUMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQzs4Q0FHL0M7SUFPRDtRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxpQkFBaUIsRUFBQyxZQUFZLEVBQUMsS0FBSyxFQUFDLENBQUM7b0RBQ3JCO0lBbkJ6QixjQUFjO1FBRjFCLE9BQU87UUFDUCxpQkFBaUI7T0FDTCxjQUFjLENBa0UxQjtJQUFELHFCQUFDO0NBbEVELEFBa0VDLENBbEVtQyxFQUFFLENBQUMsU0FBUyxHQWtFL0M7QUFsRVksd0NBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCAqIGFzIGkxOG4gZnJvbSAnLi9MYW5ndWFnZURhdGEnO1xuXG4vLyBpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIExhYmVsLCBGb250LCBSaWNoVGV4dCB9IGZyb20gJ2NjJztcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eSxleGVjdXRlSW5FZGl0TW9kZX0gPSBjYy5fZGVjb3JhdG9yO1xuLy8gY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSwgZXhlY3V0ZUluRWRpdE1vZGUgfSA9IF9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKFwiTG9jYWxpemVkRm9udEl0ZW1cIilcbmNsYXNzIExvY2FsaXplZEZvbnRJdGVtIHtcbiAgICBAcHJvcGVydHkoY2MuU3RyaW5nKVxuICAgIGxhbmd1YWdlOiBzdHJpbmcgPSAnemgnO1xuXG4gICAgQHByb3BlcnR5KGNjLkZvbnQpXG4gICAgZm9udDogY2MuRm9udCB8IG51bGwgPSBudWxsO1xufVxuXG5AY2NjbGFzc1xuQGV4ZWN1dGVJbkVkaXRNb2RlXG5leHBvcnQgY2xhc3MgTG9jYWxpemVkTGFiZWwgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIGxhYmVsOiBjYy5MYWJlbCB8IGNjLlJpY2hUZXh0ID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eSh7IHZpc2libGU6IHRydWUgfSlcbiAgICBpc1JpY2tUZXh0OiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBAcHJvcGVydHkoeyB2aXNpYmxlOiBmYWxzZSB9KVxuICAgIGtleTogc3RyaW5nID0gJyc7XG5cbiAgICBAcHJvcGVydHkoeyBkaXNwbGF5TmFtZTogJ0tleScsIHZpc2libGU6IHRydWUgfSlcbiAgICBnZXQgX2tleSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMua2V5O1xuICAgIH1cbiAgICBzZXQgX2tleShzdHI6IHN0cmluZykge1xuICAgICAgICB0aGlzLnVwZGF0ZUxhYmVsKCk7XG4gICAgICAgIHRoaXMua2V5ID0gc3RyO1xuICAgIH1cblxuICAgIEBwcm9wZXJ0eSh7dHlwZTogTG9jYWxpemVkRm9udEl0ZW0sc2VyaWFsaXphYmxlOmZhbHNlfSlcbiAgICBmb250TGlzdDpMb2NhbGl6ZWRGb250SXRlbVtdID0gW107XG5cbiAgICAvLyDlpJror63oqIDlj4LmlbBcbiAgICBwdWJsaWMgcGFyYW06QXJyYXk8YW55PiA9IG51bGw7XG4gICAgb25Mb2FkKCkge1xuICAgICAgICBpZiAoIWkxOG4ucmVhZHkpIHtcbiAgICAgICAgICAgIGkxOG4uaW5pdCgnemgnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZldGNoUmVuZGVyKCk7XG4gICAgfVxuXG4gICAgZmV0Y2hSZW5kZXIgKCkge1xuICAgICAgICBsZXQgbGFiZWwgPSBudWxsO1xuICAgICAgICBpZiAodGhpcy5pc1JpY2tUZXh0KSB7XG4gICAgICAgICAgICBsYWJlbCA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLlJpY2hUZXh0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxhYmVsID0gdGhpcy5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAobGFiZWwpIHtcbiAgICAgICAgICAgIHRoaXMubGFiZWwgPSBsYWJlbDtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTGFiZWwoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBcbiAgICB9XG5cbiAgICB1cGRhdGVMYWJlbCAoKSB7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmZvbnRMaXN0Lmxlbmd0aDsgaSsrKSBcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgZm9udCA9IHRoaXMuZm9udExpc3RbaV07XG4gICAgICAgICAgICBpZiAoZm9udC5sYW5ndWFnZSA9PT0gaTE4bi5fbGFuZ3VhZ2UpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sYWJlbCAmJiBmb250KSBcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFiZWwuZm9udCA9IGZvbnQuZm9udDsgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmxhYmVsKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5rZXkpIFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gaTE4bi50KHRoaXMua2V5LHRoaXMucGFyYW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIHRoaXMubGFiZWwgJiYgKHRoaXMubGFiZWwuc3RyaW5nID0gaTE4bi50KHRoaXMua2V5KSk7XG4gICAgfVxufVxuIl19