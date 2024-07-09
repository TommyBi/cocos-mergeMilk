"use strict";
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