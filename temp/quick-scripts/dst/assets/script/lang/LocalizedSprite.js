
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/lang/LocalizedSprite.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '40dd9j3WaFI/bvwDYMEM/u/', 'LocalizedSprite');
// script/lang/LocalizedSprite.ts

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
exports.LocalizedSprite = void 0;
var i18n = require("./LanguageData");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode;
var LocalizedSpriteItem = /** @class */ (function () {
    function LocalizedSpriteItem() {
        this.language = 'zh';
        this.spriteFrame = null;
    }
    __decorate([
        property(cc.String)
    ], LocalizedSpriteItem.prototype, "language", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], LocalizedSpriteItem.prototype, "spriteFrame", void 0);
    LocalizedSpriteItem = __decorate([
        ccclass("LocalizedSpriteItem")
    ], LocalizedSpriteItem);
    return LocalizedSpriteItem;
}());
var LocalizedSprite = /** @class */ (function (_super) {
    __extends(LocalizedSprite, _super);
    function LocalizedSprite() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sprite = null;
        _this.spriteList = [];
        return _this;
    }
    LocalizedSprite.prototype.onLoad = function () {
        if (!i18n.ready) {
            i18n.init('zh');
        }
        this.fetchRender();
    };
    LocalizedSprite.prototype.fetchRender = function () {
        var sprite = this.getComponent('cc.Sprite');
        if (sprite) {
            this.sprite = sprite;
            this.updateSprite();
            return;
        }
    };
    LocalizedSprite.prototype.updateSprite = function () {
        for (var i = 0; i < this.spriteList.length; i++) {
            var item = this.spriteList[i];
            // @ts-ignore
            if (item.language === i18n._language) {
                // @ts-ignore
                if (this.sprite && item) {
                    this.sprite.spriteFrame = item.spriteFrame;
                }
                break;
            }
        }
    };
    __decorate([
        property({ type: LocalizedSpriteItem, serializable: true })
    ], LocalizedSprite.prototype, "spriteList", void 0);
    LocalizedSprite = __decorate([
        ccclass,
        executeInEditMode
    ], LocalizedSprite);
    return LocalizedSprite;
}(cc.Component));
exports.LocalizedSprite = LocalizedSprite;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvbGFuZy9Mb2NhbGl6ZWRTcHJpdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHFDQUF1QztBQUVqQyxJQUFBLEtBQXdDLEVBQUUsQ0FBQyxVQUFVLEVBQXBELE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBQSxFQUFDLGlCQUFpQix1QkFBaUIsQ0FBQztBQUc1RDtJQUFBO1FBR0ksYUFBUSxHQUFXLElBQUksQ0FBQztRQUV4QixnQkFBVyxHQUEwQixJQUFJLENBQUM7SUFFOUMsQ0FBQztJQUpHO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7eURBQ0k7SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzs0REFDaUI7SUFMeEMsbUJBQW1CO1FBRHhCLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQztPQUN6QixtQkFBbUIsQ0FPeEI7SUFBRCwwQkFBQztDQVBELEFBT0MsSUFBQTtBQUlEO0lBQXFDLG1DQUFZO0lBQWpEO1FBQUEscUVBbUNDO1FBbENHLFlBQU0sR0FBcUIsSUFBSSxDQUFDO1FBR2hDLGdCQUFVLEdBQXlCLEVBQUUsQ0FBQzs7SUErQjFDLENBQUM7SUE3QkcsZ0NBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNuQjtRQUNELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQscUNBQVcsR0FBWDtRQUNJLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFjLENBQUM7UUFDekQsSUFBSSxNQUFNLEVBQUU7WUFDUixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUNyQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDcEIsT0FBTztTQUNWO0lBQ0wsQ0FBQztJQUVELHNDQUFZLEdBQVo7UUFDSSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDN0MsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoQyxhQUFhO1lBQ2IsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ2xDLGFBQWE7Z0JBQ2IsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksRUFBRTtvQkFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztpQkFDOUM7Z0JBQ0QsTUFBTTthQUNUO1NBQ0o7SUFDTCxDQUFDO0lBOUJEO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLG1CQUFtQixFQUFDLFlBQVksRUFBQyxJQUFJLEVBQUMsQ0FBQzt1REFDbEI7SUFKN0IsZUFBZTtRQUYzQixPQUFPO1FBQ1AsaUJBQWlCO09BQ0wsZUFBZSxDQW1DM0I7SUFBRCxzQkFBQztDQW5DRCxBQW1DQyxDQW5Db0MsRUFBRSxDQUFDLFNBQVMsR0FtQ2hEO0FBbkNZLDBDQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgKiBhcyBpMThuIGZyb20gJy4vTGFuZ3VhZ2VEYXRhJztcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5LGV4ZWN1dGVJbkVkaXRNb2RlfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKFwiTG9jYWxpemVkU3ByaXRlSXRlbVwiKVxuY2xhc3MgTG9jYWxpemVkU3ByaXRlSXRlbSBcbntcbiAgICBAcHJvcGVydHkoY2MuU3RyaW5nKVxuICAgIGxhbmd1YWdlOiBzdHJpbmcgPSAnemgnO1xuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgICBzcHJpdGVGcmFtZTogY2MuU3ByaXRlRnJhbWUgfCBudWxsID0gbnVsbDtcblxufVxuXG5AY2NjbGFzc1xuQGV4ZWN1dGVJbkVkaXRNb2RlXG5leHBvcnQgY2xhc3MgTG9jYWxpemVkU3ByaXRlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBzcHJpdGU6IGNjLlNwcml0ZSB8IG51bGwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KHt0eXBlOiBMb2NhbGl6ZWRTcHJpdGVJdGVtLHNlcmlhbGl6YWJsZTp0cnVlfSlcbiAgICBzcHJpdGVMaXN0OkxvY2FsaXplZFNwcml0ZUl0ZW1bXSA9IFtdO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBpZiAoIWkxOG4ucmVhZHkpIHtcbiAgICAgICAgICAgIGkxOG4uaW5pdCgnemgnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZldGNoUmVuZGVyKCk7XG4gICAgfVxuXG4gICAgZmV0Y2hSZW5kZXIgKCkge1xuICAgICAgICBsZXQgc3ByaXRlID0gdGhpcy5nZXRDb21wb25lbnQoJ2NjLlNwcml0ZScpIGFzIGNjLlNwcml0ZTtcbiAgICAgICAgaWYgKHNwcml0ZSkge1xuICAgICAgICAgICAgdGhpcy5zcHJpdGUgPSBzcHJpdGU7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNwcml0ZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IFxuICAgIH1cblxuICAgIHVwZGF0ZVNwcml0ZSAoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zcHJpdGVMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5zcHJpdGVMaXN0W2ldO1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgaWYgKGl0ZW0ubGFuZ3VhZ2UgPT09IGkxOG4uX2xhbmd1YWdlKSB7XG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNwcml0ZSAmJiBpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3ByaXRlLnNwcml0ZUZyYW1lID0gaXRlbS5zcHJpdGVGcmFtZTsgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl19