
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/game/common/UIManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f91a8WZcpVE26FSaQTEQD2d', 'UIManager');
// script/game/common/UIManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ui = exports.UILayer = void 0;
var PanelBase_1 = require("../../common/comp/PanelBase");
var GlobalDefines_1 = require("../../common/consts/GlobalDefines");
var logger_1 = require("../../utils/logger");
var Utils_1 = require("../../utils/Utils");
var UILayer;
(function (UILayer) {
    UILayer[UILayer["Topres"] = 0] = "Topres";
    UILayer[UILayer["Panel"] = 1] = "Panel";
    UILayer[UILayer["LoadingBar"] = 2] = "LoadingBar";
    UILayer[UILayer["MessageBox"] = 3] = "MessageBox";
    UILayer[UILayer["Guide"] = 4] = "Guide";
    UILayer[UILayer["Banner"] = 5] = "Banner";
    UILayer[UILayer["X"] = 6] = "X";
    UILayer[UILayer["Tip"] = 7] = "Tip";
    UILayer[UILayer["Effect"] = 8] = "Effect";
    UILayer[UILayer["Effect2"] = 9] = "Effect2";
})(UILayer = exports.UILayer || (exports.UILayer = {}));
var UIManager = /** @class */ (function () {
    function UIManager() {
        this.hurryLoading = null;
    }
    Object.defineProperty(UIManager, "ins", {
        get: function () {
            if (!this._ins) {
                this._ins = new UIManager();
            }
            return this._ins;
        },
        enumerable: false,
        configurable: true
    });
    UIManager.prototype.onLoad = function (node, hurryLoading) {
        this.node = node;
        this.hurryLoading = hurryLoading;
    };
    UIManager.prototype.onInit = function () {
        this.hideLoading();
    };
    /**
     * 显示加载菊花
     * @param title
     */
    UIManager.prototype.showLoading = function (title) {
        this.hurryLoading.show();
    };
    /**
     * 隐藏加载菊花
     * @param title
     */
    UIManager.prototype.hideLoading = function () {
        this.hurryLoading.hide();
    };
    /**
     * 在场景中构建UI结构
     */
    UIManager.prototype.checkNode = function () {
        logger_1.Logger.warn("[UIManager checkNode] width:", this.node.width, "/height:", this.node.height);
        for (var key in UILayer) {
            var keyToAny = key;
            //判断是否是数字
            if (isNaN(keyToAny)) {
                this.addNullNode(this.node, key);
            }
        }
    };
    UIManager.prototype.addNullNode = function (baseNode, nodeName) {
        if (!baseNode) {
            console.warn("[UIManager addNullNode] " + baseNode + "\u4E0D\u5B58\u5728");
            return undefined;
        }
        var node = baseNode.getChildByName(nodeName);
        if (!!node) {
            console.warn("[UIManager addNullNode] \u8282\u70B9" + nodeName + "\u5DF2\u7ECF\u5B58\u5728");
            return node;
        }
        var newNode = new cc.Node(nodeName);
        baseNode.addChild(newNode);
        newNode.width = newNode.parent.width;
        newNode.height = newNode.parent.height;
        newNode.x = 0;
        newNode.y = 0;
        return newNode;
    };
    UIManager.prototype.getLayer = function (layerId) {
        var name = UILayer[layerId];
        var node = this.node.getChildByName(name);
        return node;
    };
    UIManager.prototype.addGuide = function (view) {
        view.x = 0;
        view.y = 0;
        view.width = GlobalDefines_1.GlobalDefines.ScreenWidth;
        view.height = GlobalDefines_1.GlobalDefines.ScreenHeight;
        this.getLayer(UILayer.Guide).addChild(view);
    };
    UIManager.prototype.popView = function (view, insert) {
        if (insert === void 0) { insert = false; }
        view.x = 0;
        view.y = 0;
        view.width = GlobalDefines_1.GlobalDefines.ScreenWidth;
        view.height = GlobalDefines_1.GlobalDefines.ScreenHeight;
        if (insert) {
            this.getLayer(UILayer.Panel).insertChild(view, 0);
        }
        else {
            view.parent = this.getLayer(UILayer.Panel);
        }
    };
    UIManager.prototype.tip = function (node) {
        node.parent = this.getLayer(UILayer.Tip);
    };
    UIManager.prototype.layerClear = function (layerId) {
        Utils_1.Utils.removeAllChildren(this.getLayer(layerId));
    };
    UIManager.prototype.addEffect = function (effect) {
        if (this.getLayer(UILayer.Effect).childrenCount >= 200) {
            Utils_1.Utils.removeNode(this.getLayer(UILayer.Effect).children[0]);
        }
        effect.parent = this.getLayer(UILayer.Effect);
    };
    /**
     * 约定effect.postion为worldAR座标
     * @param effectByWorldAR
     */
    UIManager.prototype.addEffectAR = function (effectByWorldAR) {
        var posOfEffect = this.getLayer(UILayer.Effect).convertToNodeSpaceAR(effectByWorldAR.position);
        effectByWorldAR.position = posOfEffect;
        this.addEffect(effectByWorldAR);
    };
    UIManager.prototype.onSwitchScene = function () {
        PanelBase_1.default.onSwitchScene();
        this.layerClear(UILayer.Panel);
        this.layerClear(UILayer.Tip);
    };
    Object.defineProperty(UIManager.prototype, "safeAreaTop", {
        get: function () {
            return GlobalDefines_1.GlobalDefines.MenuButtonLogic.top + GlobalDefines_1.GlobalDefines.MenuButtonLogic.height + (100 - GlobalDefines_1.GlobalDefines.MenuButtonLogic.height) / 2;
        },
        enumerable: false,
        configurable: true
    });
    UIManager.prototype.alignmentToMenu = function (node) {
        var menuTop = GlobalDefines_1.GlobalDefines.MenuButtonLogic.top;
        var menuHeight = GlobalDefines_1.GlobalDefines.MenuButtonLogic.height;
        var screenHeight = GlobalDefines_1.GlobalDefines.ScreenHeight;
        node.y = screenHeight / 2 - menuTop - menuHeight / 2; //中心与胶囊中心对齐   
        logger_1.Logger.debug("[BattleOptionWord alignmentToMenu] bar.y:", node.y, "ScreenHeight:", GlobalDefines_1.GlobalDefines.ScreenHeight);
    };
    return UIManager;
}());
exports.default = UIManager;
exports.ui = UIManager.ins;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZ2FtZS9jb21tb24vVUlNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHlEQUFvRDtBQUNwRCxtRUFBa0U7QUFDbEUsNkNBQTRDO0FBQzVDLDJDQUEwQztBQUcxQyxJQUFZLE9BV1g7QUFYRCxXQUFZLE9BQU87SUFDZix5Q0FBVSxDQUFBO0lBQ1YsdUNBQUssQ0FBQTtJQUNMLGlEQUFVLENBQUE7SUFDVixpREFBVSxDQUFBO0lBQ1YsdUNBQUssQ0FBQTtJQUNMLHlDQUFNLENBQUE7SUFDTiwrQkFBQyxDQUFBO0lBQ0QsbUNBQUcsQ0FBQTtJQUNILHlDQUFNLENBQUE7SUFDTiwyQ0FBTyxDQUFBO0FBQ1gsQ0FBQyxFQVhXLE9BQU8sR0FBUCxlQUFPLEtBQVAsZUFBTyxRQVdsQjtBQUVEO0lBY0k7UUFGQSxpQkFBWSxHQUFpQixJQUFJLENBQUM7SUFFVixDQUFDO0lBWnpCLHNCQUFrQixnQkFBRzthQUFyQjtZQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUNaLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQzthQUMvQjtZQUNELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztRQUNyQixDQUFDOzs7T0FBQTtJQVNNLDBCQUFNLEdBQWIsVUFBYyxJQUFhLEVBQUUsWUFBMEI7UUFDbkQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7SUFDckMsQ0FBQztJQUVELDBCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVEOzs7T0FHRztJQUNJLCtCQUFXLEdBQWxCLFVBQW1CLEtBQWM7UUFDN0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBQ0Q7OztPQUdHO0lBQ0ksK0JBQVcsR0FBbEI7UUFDSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRDs7T0FFRztJQUNJLDZCQUFTLEdBQWhCO1FBQ0ksZUFBTSxDQUFDLElBQUksQ0FBQyw4QkFBOEIsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUUzRixLQUFLLElBQUksR0FBRyxJQUFJLE9BQU8sRUFBRTtZQUNyQixJQUFJLFFBQVEsR0FBUSxHQUFHLENBQUM7WUFDeEIsU0FBUztZQUNULElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUNqQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7YUFDcEM7U0FDSjtJQUNMLENBQUM7SUFFTywrQkFBVyxHQUFuQixVQUFvQixRQUFpQixFQUFFLFFBQWdCO1FBQ25ELElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDWCxPQUFPLENBQUMsSUFBSSxDQUFDLDZCQUEyQixRQUFRLHVCQUFLLENBQUMsQ0FBQztZQUN2RCxPQUFPLFNBQVMsQ0FBQztTQUNwQjtRQUNELElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFO1lBQ1IsT0FBTyxDQUFDLElBQUksQ0FBQyx5Q0FBNkIsUUFBUSw2QkFBTSxDQUFDLENBQUM7WUFDMUQsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUNELElBQUksT0FBTyxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwQyxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNCLE9BQU8sQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDckMsT0FBTyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUN2QyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNkLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsT0FBTyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQUVELDRCQUFRLEdBQVIsVUFBUyxPQUFnQjtRQUNyQixJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDNUIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUMsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLDRCQUFRLEdBQWYsVUFBZ0IsSUFBYTtRQUN6QixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNYLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsSUFBSSxDQUFDLEtBQUssR0FBRyw2QkFBYSxDQUFDLFdBQVcsQ0FBQztRQUN2QyxJQUFJLENBQUMsTUFBTSxHQUFHLDZCQUFhLENBQUMsWUFBWSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRU0sMkJBQU8sR0FBZCxVQUFlLElBQWEsRUFBRSxNQUF1QjtRQUF2Qix1QkFBQSxFQUFBLGNBQXVCO1FBQ2pELElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDWCxJQUFJLENBQUMsS0FBSyxHQUFHLDZCQUFhLENBQUMsV0FBVyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxNQUFNLEdBQUcsNkJBQWEsQ0FBQyxZQUFZLENBQUM7UUFDekMsSUFBSSxNQUFNLEVBQUU7WUFDUixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3JEO2FBQU07WUFDSCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzlDO0lBQ0wsQ0FBQztJQUdNLHVCQUFHLEdBQVYsVUFBVyxJQUFhO1FBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDNUMsQ0FBQztJQUVNLDhCQUFVLEdBQWpCLFVBQWtCLE9BQWdCO1FBQzlCLGFBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVNLDZCQUFTLEdBQWhCLFVBQWlCLE1BQWU7UUFDNUIsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxhQUFhLElBQUksR0FBRyxFQUFFO1lBQ3BELGFBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDL0Q7UUFDRCxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRDs7O09BR0c7SUFDSSwrQkFBVyxHQUFsQixVQUFtQixlQUF3QjtRQUN2QyxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDL0YsZUFBZSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUM7UUFDdkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRU0saUNBQWEsR0FBcEI7UUFDSSxtQkFBUyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxzQkFBVyxrQ0FBVzthQUF0QjtZQUNJLE9BQU8sNkJBQWEsQ0FBQyxlQUFlLENBQUMsR0FBRyxHQUFHLDZCQUFhLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsR0FBRyw2QkFBYSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkksQ0FBQzs7O09BQUE7SUFFRCxtQ0FBZSxHQUFmLFVBQWdCLElBQWE7UUFDekIsSUFBSSxPQUFPLEdBQUcsNkJBQWEsQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDO1FBQ2hELElBQUksVUFBVSxHQUFHLDZCQUFhLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQztRQUN0RCxJQUFJLFlBQVksR0FBRyw2QkFBYSxDQUFDLFlBQVksQ0FBQztRQUM5QyxJQUFJLENBQUMsQ0FBQyxHQUFHLFlBQVksR0FBRyxDQUFDLEdBQUcsT0FBTyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQSxjQUFjO1FBQ25FLGVBQU0sQ0FBQyxLQUFLLENBQUMsMkNBQTJDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxlQUFlLEVBQUUsNkJBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNuSCxDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQS9JQSxBQStJQyxJQUFBOztBQUNZLFFBQUEsRUFBRSxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSHVycnlMb2FkaW5nIGZyb20gXCIuLi8uLi9jb21tb24vY29tcC9IdXJyeUxvYWRpbmdcIjtcbmltcG9ydCBQYW5lbEJhc2UgZnJvbSBcIi4uLy4uL2NvbW1vbi9jb21wL1BhbmVsQmFzZVwiO1xuaW1wb3J0IHsgR2xvYmFsRGVmaW5lcyB9IGZyb20gXCIuLi8uLi9jb21tb24vY29uc3RzL0dsb2JhbERlZmluZXNcIjtcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gXCIuLi8uLi91dGlscy9sb2dnZXJcIjtcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSBcIi4uLy4uL3V0aWxzL1V0aWxzXCI7XG5cblxuZXhwb3J0IGVudW0gVUlMYXllciB7XG4gICAgVG9wcmVzID0gMCxcbiAgICBQYW5lbCxcbiAgICBMb2FkaW5nQmFyLFxuICAgIE1lc3NhZ2VCb3gsXG4gICAgR3VpZGUsXG4gICAgQmFubmVyLFxuICAgIFgsXG4gICAgVGlwLFxuICAgIEVmZmVjdCxcbiAgICBFZmZlY3QyLFxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSU1hbmFnZXIge1xuICAgIHByaXZhdGUgc3RhdGljIF9pbnM6IFVJTWFuYWdlcjtcbiAgICBwdWJsaWMgc3RhdGljIGdldCBpbnMoKSB7XG4gICAgICAgIGlmICghdGhpcy5faW5zKSB7XG4gICAgICAgICAgICB0aGlzLl9pbnMgPSBuZXcgVUlNYW5hZ2VyKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2lucztcbiAgICB9XG5cbiAgICBwcml2YXRlIG5vZGU6IGNjLk5vZGU7XG4gICAgcHJpdmF0ZSBhbGVydDogY2MuTm9kZTtcblxuICAgIGh1cnJ5TG9hZGluZzogSHVycnlMb2FkaW5nID0gbnVsbDtcblxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIHB1YmxpYyBvbkxvYWQobm9kZTogY2MuTm9kZSwgaHVycnlMb2FkaW5nOiBIdXJyeUxvYWRpbmcpIHtcbiAgICAgICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICAgICAgdGhpcy5odXJyeUxvYWRpbmcgPSBodXJyeUxvYWRpbmc7XG4gICAgfVxuXG4gICAgb25Jbml0KCkge1xuICAgICAgICB0aGlzLmhpZGVMb2FkaW5nKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5pi+56S65Yqg6L296I+K6IqxXG4gICAgICogQHBhcmFtIHRpdGxlIFxuICAgICAqL1xuICAgIHB1YmxpYyBzaG93TG9hZGluZyh0aXRsZT86IHN0cmluZykge1xuICAgICAgICB0aGlzLmh1cnJ5TG9hZGluZy5zaG93KCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOmakOiXj+WKoOi9veiPiuiKsVxuICAgICAqIEBwYXJhbSB0aXRsZSBcbiAgICAgKi9cbiAgICBwdWJsaWMgaGlkZUxvYWRpbmcoKSB7XG4gICAgICAgIHRoaXMuaHVycnlMb2FkaW5nLmhpZGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlnKjlnLrmma/kuK3mnoTlu7pVSee7k+aehFxuICAgICAqL1xuICAgIHB1YmxpYyBjaGVja05vZGUoKSB7XG4gICAgICAgIExvZ2dlci53YXJuKFwiW1VJTWFuYWdlciBjaGVja05vZGVdIHdpZHRoOlwiLCB0aGlzLm5vZGUud2lkdGgsIFwiL2hlaWdodDpcIiwgdGhpcy5ub2RlLmhlaWdodCk7XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIFVJTGF5ZXIpIHtcbiAgICAgICAgICAgIHZhciBrZXlUb0FueTogYW55ID0ga2V5O1xuICAgICAgICAgICAgLy/liKTmlq3mmK/lkKbmmK/mlbDlrZdcbiAgICAgICAgICAgIGlmIChpc05hTihrZXlUb0FueSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZE51bGxOb2RlKHRoaXMubm9kZSwga2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgYWRkTnVsbE5vZGUoYmFzZU5vZGU6IGNjLk5vZGUsIG5vZGVOYW1lOiBzdHJpbmcpOiBjYy5Ob2RlIHtcbiAgICAgICAgaWYgKCFiYXNlTm9kZSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBbVUlNYW5hZ2VyIGFkZE51bGxOb2RlXSAke2Jhc2VOb2RlfeS4jeWtmOWcqGApO1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbm9kZSA9IGJhc2VOb2RlLmdldENoaWxkQnlOYW1lKG5vZGVOYW1lKTtcbiAgICAgICAgaWYgKCEhbm9kZSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBbVUlNYW5hZ2VyIGFkZE51bGxOb2RlXSDoioLngrkke25vZGVOYW1lfeW3sue7j+WtmOWcqGApO1xuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG5ld05vZGUgPSBuZXcgY2MuTm9kZShub2RlTmFtZSk7XG4gICAgICAgIGJhc2VOb2RlLmFkZENoaWxkKG5ld05vZGUpO1xuICAgICAgICBuZXdOb2RlLndpZHRoID0gbmV3Tm9kZS5wYXJlbnQud2lkdGg7XG4gICAgICAgIG5ld05vZGUuaGVpZ2h0ID0gbmV3Tm9kZS5wYXJlbnQuaGVpZ2h0O1xuICAgICAgICBuZXdOb2RlLnggPSAwO1xuICAgICAgICBuZXdOb2RlLnkgPSAwO1xuICAgICAgICByZXR1cm4gbmV3Tm9kZTtcbiAgICB9XG5cbiAgICBnZXRMYXllcihsYXllcklkOiBVSUxheWVyKTogY2MuTm9kZSB7XG4gICAgICAgIGxldCBuYW1lID0gVUlMYXllcltsYXllcklkXTtcbiAgICAgICAgbGV0IG5vZGUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUobmFtZSk7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRHdWlkZSh2aWV3OiBjYy5Ob2RlKSB7XG4gICAgICAgIHZpZXcueCA9IDA7XG4gICAgICAgIHZpZXcueSA9IDA7XG4gICAgICAgIHZpZXcud2lkdGggPSBHbG9iYWxEZWZpbmVzLlNjcmVlbldpZHRoO1xuICAgICAgICB2aWV3LmhlaWdodCA9IEdsb2JhbERlZmluZXMuU2NyZWVuSGVpZ2h0O1xuICAgICAgICB0aGlzLmdldExheWVyKFVJTGF5ZXIuR3VpZGUpLmFkZENoaWxkKHZpZXcpO1xuICAgIH1cblxuICAgIHB1YmxpYyBwb3BWaWV3KHZpZXc6IGNjLk5vZGUsIGluc2VydDogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIHZpZXcueCA9IDA7XG4gICAgICAgIHZpZXcueSA9IDA7XG4gICAgICAgIHZpZXcud2lkdGggPSBHbG9iYWxEZWZpbmVzLlNjcmVlbldpZHRoO1xuICAgICAgICB2aWV3LmhlaWdodCA9IEdsb2JhbERlZmluZXMuU2NyZWVuSGVpZ2h0O1xuICAgICAgICBpZiAoaW5zZXJ0KSB7XG4gICAgICAgICAgICB0aGlzLmdldExheWVyKFVJTGF5ZXIuUGFuZWwpLmluc2VydENoaWxkKHZpZXcsIDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmlldy5wYXJlbnQgPSB0aGlzLmdldExheWVyKFVJTGF5ZXIuUGFuZWwpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBwdWJsaWMgdGlwKG5vZGU6IGNjLk5vZGUpIHtcbiAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLmdldExheWVyKFVJTGF5ZXIuVGlwKVxuICAgIH1cblxuICAgIHB1YmxpYyBsYXllckNsZWFyKGxheWVySWQ6IFVJTGF5ZXIpIHtcbiAgICAgICAgVXRpbHMucmVtb3ZlQWxsQ2hpbGRyZW4odGhpcy5nZXRMYXllcihsYXllcklkKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGFkZEVmZmVjdChlZmZlY3Q6IGNjLk5vZGUpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0TGF5ZXIoVUlMYXllci5FZmZlY3QpLmNoaWxkcmVuQ291bnQgPj0gMjAwKSB7XG4gICAgICAgICAgICBVdGlscy5yZW1vdmVOb2RlKHRoaXMuZ2V0TGF5ZXIoVUlMYXllci5FZmZlY3QpLmNoaWxkcmVuWzBdKTtcbiAgICAgICAgfVxuICAgICAgICBlZmZlY3QucGFyZW50ID0gdGhpcy5nZXRMYXllcihVSUxheWVyLkVmZmVjdCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog57qm5a6aZWZmZWN0LnBvc3Rpb27kuLp3b3JsZEFS5bqn5qCHXG4gICAgICogQHBhcmFtIGVmZmVjdEJ5V29ybGRBUiBcbiAgICAgKi9cbiAgICBwdWJsaWMgYWRkRWZmZWN0QVIoZWZmZWN0QnlXb3JsZEFSOiBjYy5Ob2RlKSB7XG4gICAgICAgIGxldCBwb3NPZkVmZmVjdCA9IHRoaXMuZ2V0TGF5ZXIoVUlMYXllci5FZmZlY3QpLmNvbnZlcnRUb05vZGVTcGFjZUFSKGVmZmVjdEJ5V29ybGRBUi5wb3NpdGlvbik7XG4gICAgICAgIGVmZmVjdEJ5V29ybGRBUi5wb3NpdGlvbiA9IHBvc09mRWZmZWN0O1xuICAgICAgICB0aGlzLmFkZEVmZmVjdChlZmZlY3RCeVdvcmxkQVIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvblN3aXRjaFNjZW5lKCkge1xuICAgICAgICBQYW5lbEJhc2Uub25Td2l0Y2hTY2VuZSgpO1xuICAgICAgICB0aGlzLmxheWVyQ2xlYXIoVUlMYXllci5QYW5lbCk7XG4gICAgICAgIHRoaXMubGF5ZXJDbGVhcihVSUxheWVyLlRpcCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBzYWZlQXJlYVRvcCgpIHtcbiAgICAgICAgcmV0dXJuIEdsb2JhbERlZmluZXMuTWVudUJ1dHRvbkxvZ2ljLnRvcCArIEdsb2JhbERlZmluZXMuTWVudUJ1dHRvbkxvZ2ljLmhlaWdodCArICgxMDAgLSBHbG9iYWxEZWZpbmVzLk1lbnVCdXR0b25Mb2dpYy5oZWlnaHQpIC8gMjtcbiAgICB9XG5cbiAgICBhbGlnbm1lbnRUb01lbnUobm9kZTogY2MuTm9kZSkge1xuICAgICAgICBsZXQgbWVudVRvcCA9IEdsb2JhbERlZmluZXMuTWVudUJ1dHRvbkxvZ2ljLnRvcDtcbiAgICAgICAgbGV0IG1lbnVIZWlnaHQgPSBHbG9iYWxEZWZpbmVzLk1lbnVCdXR0b25Mb2dpYy5oZWlnaHQ7XG4gICAgICAgIGxldCBzY3JlZW5IZWlnaHQgPSBHbG9iYWxEZWZpbmVzLlNjcmVlbkhlaWdodDtcbiAgICAgICAgbm9kZS55ID0gc2NyZWVuSGVpZ2h0IC8gMiAtIG1lbnVUb3AgLSBtZW51SGVpZ2h0IC8gMjsvL+S4reW/g+S4juiDtuWbiuS4reW/g+Wvuem9kCAgIFxuICAgICAgICBMb2dnZXIuZGVidWcoXCJbQmF0dGxlT3B0aW9uV29yZCBhbGlnbm1lbnRUb01lbnVdIGJhci55OlwiLCBub2RlLnksIFwiU2NyZWVuSGVpZ2h0OlwiLCBHbG9iYWxEZWZpbmVzLlNjcmVlbkhlaWdodCk7XG4gICAgfVxufVxuZXhwb3J0IGNvbnN0IHVpID0gVUlNYW5hZ2VyLmluczsiXX0=