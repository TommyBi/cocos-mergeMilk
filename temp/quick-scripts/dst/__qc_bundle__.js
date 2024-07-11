
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/script/common/AudioManager');
require('./assets/script/common/Ball_Main');
require('./assets/script/common/BasePanel');
require('./assets/script/common/DataManager');
require('./assets/script/common/Global');
require('./assets/script/common/GlobalEvents');
require('./assets/script/common/PmManager');
require('./assets/script/common/SaveData');
require('./assets/script/common/SceneManager');
require('./assets/script/common/comp/HurryLoading');
require('./assets/script/common/comp/NumberAction');
require('./assets/script/common/comp/PanelBase');
require('./assets/script/common/comp/SceneLoadingUI');
require('./assets/script/common/comp/reward/RewardUtils');
require('./assets/script/common/comp/toast/Toast');
require('./assets/script/common/consts/GlobalDefines');
require('./assets/script/common/effect/Jumpjump3d');
require('./assets/script/common/effect/SpriteToHome');
require('./assets/script/game/GameUtils');
require('./assets/script/game/common/BundleResource');
require('./assets/script/game/common/BundleResourceList');
require('./assets/script/game/common/UIManager');
require('./assets/script/game/consts/GameConsts');
require('./assets/script/game/data/PlayerInfo');
require('./assets/script/game/data/SaveDataConfig');
require('./assets/script/game/loading/LoadingScene');
require('./assets/script/game/ui/Ball_MainScene');
require('./assets/script/game/ui/bl_Config');
require('./assets/script/game/ui/bl_Logic');
require('./assets/script/game/ui/bl_ball');
require('./assets/script/game/ui/bl_tipsPanel');
require('./assets/script/game/ui/bl_top');
require('./assets/script/game/ui/bl_txPanel');
require('./assets/script/game/ui/bl_txToggle');
require('./assets/script/lang/LanguageData');
require('./assets/script/lang/LocalizedLabel');
require('./assets/script/lang/LocalizedSprite');
require('./assets/script/merge/dataModule/DataModule');
require('./assets/script/merge/dataModule/GameModule');
require('./assets/script/merge/dataModule/PlayerModule');
require('./assets/script/merge/define/TypeDefine');
require('./assets/script/merge/game/Coin');
require('./assets/script/merge/game/Game');
require('./assets/script/merge/game/MergeScene');
require('./assets/script/merge/game/Slot');
require('./assets/script/merge/manager/Define');
require('./assets/script/merge/manager/Uimanager');
require('./assets/script/merge/pulicCom/TouchEffect');
require('./assets/script/merge/util/EventManager');
require('./assets/script/utils/AniUtil');
require('./assets/script/utils/SDKManager');
require('./assets/script/utils/Utils');
require('./assets/script/utils/logger');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/common/BasePanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6307aGkrx5FS5pt8QTsKdZJ', 'BasePanel');
// script/common/BasePanel.ts

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
var Utils_1 = require("../utils/Utils");
var GlobalDefines_1 = require("./consts/GlobalDefines");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BasePanel = /** @class */ (function (_super) {
    __extends(BasePanel, _super);
    function BasePanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btn_back = null;
        return _this;
    }
    BasePanel.prototype.onLoad = function () {
        this.btn_back && (this.btn_back.scale = 0);
    };
    BasePanel.prototype.start = function () {
        this.initBackBtn();
    };
    BasePanel.prototype.initBackBtn = function () {
        if (this.btn_back) {
            var top = GlobalDefines_1.GlobalDefines.MenuButtonLogic.top;
            var height = GlobalDefines_1.GlobalDefines.MenuButtonLogic.height;
            this.btn_back.y = GlobalDefines_1.GlobalDefines.ScreenHeight / 2 - top - height / 2;
            this.btn_back.x = -330;
            cc.tween(this.btn_back)
                .to(0.3, { scale: 1 }, { easing: cc.easing.backOut })
                .start();
        }
    };
    BasePanel.prototype.onDisable = function () {
    };
    BasePanel.prototype.close = function () {
        Utils_1.Utils.removeNode(this.node);
    };
    BasePanel.prototype.onBtnBackClicked = function (e) {
        if (Utils_1.Utils.btnLock()) {
            return;
        }
        this.close();
    };
    __decorate([
        property(cc.Node)
    ], BasePanel.prototype, "btn_back", void 0);
    BasePanel = __decorate([
        ccclass
    ], BasePanel);
    return BasePanel;
}(cc.Component));
exports.default = BasePanel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvY29tbW9uL0Jhc2VQYW5lbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3Q0FBdUM7QUFDdkMsd0RBQXVEO0FBRWpELElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBc0NDO1FBbkNHLGNBQVEsR0FBVyxJQUFJLENBQUM7O0lBbUM1QixDQUFDO0lBakNhLDBCQUFNLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFUyx5QkFBSyxHQUFmO1FBQ0ksSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCwrQkFBVyxHQUFYO1FBQ0ksSUFBRyxJQUFJLENBQUMsUUFBUSxFQUFDO1lBQ2IsSUFBSSxHQUFHLEdBQUcsNkJBQWEsQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDO1lBQzVDLElBQUksTUFBTSxHQUFHLDZCQUFhLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQztZQUNsRCxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyw2QkFBYSxDQUFDLFlBQVksR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDcEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7WUFDdkIsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO2lCQUN0QixFQUFFLENBQUMsR0FBRyxFQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsTUFBTSxFQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFDLENBQUM7aUJBQzVDLEtBQUssRUFBRSxDQUFDO1NBQ1o7SUFDTCxDQUFDO0lBRVMsNkJBQVMsR0FBbkI7SUFDQSxDQUFDO0lBRUQseUJBQUssR0FBTDtRQUNJLGFBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxvQ0FBZ0IsR0FBaEIsVUFBaUIsQ0FBc0I7UUFDbkMsSUFBSSxhQUFLLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDakIsT0FBTztTQUNWO1FBQ0QsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFsQ0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDTTtJQUhQLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0FzQzdCO0lBQUQsZ0JBQUM7Q0F0Q0QsQUFzQ0MsQ0F0Q3NDLEVBQUUsQ0FBQyxTQUFTLEdBc0NsRDtrQkF0Q29CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVdGlscyB9IGZyb20gXCIuLi91dGlscy9VdGlsc1wiO1xuaW1wb3J0IHsgR2xvYmFsRGVmaW5lcyB9IGZyb20gXCIuL2NvbnN0cy9HbG9iYWxEZWZpbmVzXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZVBhbmVsIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBidG5fYmFjazpjYy5Ob2RlID0gbnVsbDtcblxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYnRuX2JhY2sgJiYgKHRoaXMuYnRuX2JhY2suc2NhbGUgPSAwKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaW5pdEJhY2tCdG4oKTtcbiAgICB9XG5cbiAgICBpbml0QmFja0J0bigpe1xuICAgICAgICBpZih0aGlzLmJ0bl9iYWNrKXtcbiAgICAgICAgICAgIGxldCB0b3AgPSBHbG9iYWxEZWZpbmVzLk1lbnVCdXR0b25Mb2dpYy50b3A7XG4gICAgICAgICAgICBsZXQgaGVpZ2h0ID0gR2xvYmFsRGVmaW5lcy5NZW51QnV0dG9uTG9naWMuaGVpZ2h0O1xuICAgICAgICAgICAgdGhpcy5idG5fYmFjay55ID0gR2xvYmFsRGVmaW5lcy5TY3JlZW5IZWlnaHQgLyAyIC0gdG9wIC0gaGVpZ2h0IC8gMjtcbiAgICAgICAgICAgIHRoaXMuYnRuX2JhY2sueCA9IC0zMzA7XG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLmJ0bl9iYWNrKVxuICAgICAgICAgICAgLnRvKDAuMyx7c2NhbGU6MX0se2Vhc2luZzpjYy5lYXNpbmcuYmFja091dH0pXG4gICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbkRpc2FibGUoKTogdm9pZCB7XG4gICAgfVxuXG4gICAgY2xvc2UoKXtcbiAgICAgICAgVXRpbHMucmVtb3ZlTm9kZSh0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIG9uQnRuQmFja0NsaWNrZWQoZTogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xuICAgICAgICBpZiAoVXRpbHMuYnRuTG9jaygpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/merge/util/EventManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ea7fbBwaBVK96i8sl/y0ydr', 'EventManager');
// script/merge/util/EventManager.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventManager = exports.GameEvent = exports.EventManager = void 0;
var EventManager = /** @class */ (function (_super) {
    __extends(EventManager, _super);
    function EventManager() {
        return _super.call(this) || this;
    }
    EventManager.prototype.dispatch = function (type, data) {
        this.dispatchEvent(new GameEvent(type, data));
    };
    EventManager.Instance = new EventManager();
    return EventManager;
}(cc.EventTarget));
exports.EventManager = EventManager;
// 游戏事件
var GameEvent = /** @class */ (function (_super) {
    __extends(GameEvent, _super);
    function GameEvent(type, data) {
        if (data === void 0) { data = null; }
        var _this = _super.call(this, type, true) || this;
        _this.data = null;
        _this.type = '';
        _this.type = type;
        _this.data = data;
        return _this;
    }
    return GameEvent;
}(cc.Event.EventCustom));
exports.GameEvent = GameEvent;
exports.eventManager = EventManager.Instance;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvbWVyZ2UvdXRpbC9FdmVudE1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQWtDLGdDQUFjO0lBRzVDO2VBQ0ksaUJBQU87SUFDWCxDQUFDO0lBRUQsK0JBQVEsR0FBUixVQUFTLElBQVksRUFBRSxJQUFVO1FBQzdCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxTQUFTLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUE7SUFDakQsQ0FBQztJQVJzQixxQkFBUSxHQUFpQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBU3ZFLG1CQUFDO0NBVkQsQUFVQyxDQVZpQyxFQUFFLENBQUMsV0FBVyxHQVUvQztBQVZZLG9DQUFZO0FBWXpCLE9BQU87QUFDUDtJQUErQiw2QkFBb0I7SUFHL0MsbUJBQVksSUFBWSxFQUFFLElBQWdCO1FBQWhCLHFCQUFBLEVBQUEsV0FBZ0I7UUFBMUMsWUFDSSxrQkFBTSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBR3BCO1FBTk0sVUFBSSxHQUFRLElBQUksQ0FBQztRQUNqQixVQUFJLEdBQVcsRUFBRSxDQUFDO1FBR3JCLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDOztJQUNyQixDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQVJBLEFBUUMsQ0FSOEIsRUFBRSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBUWxEO0FBUlksOEJBQVM7QUFVVCxRQUFBLFlBQVksR0FBRyxZQUFZLENBQUMsUUFBUSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEV2ZW50TWFuYWdlciBleHRlbmRzIGNjLkV2ZW50VGFyZ2V0IHtcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEluc3RhbmNlOiBFdmVudE1hbmFnZXIgPSBuZXcgRXZlbnRNYW5hZ2VyKCk7XG5cbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIGRpc3BhdGNoKHR5cGU6IHN0cmluZywgZGF0YT86IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEdhbWVFdmVudCh0eXBlLCBkYXRhKSlcbiAgICB9XG59XG5cbi8vIOa4uOaIj+S6i+S7tlxuZXhwb3J0IGNsYXNzIEdhbWVFdmVudCBleHRlbmRzIGNjLkV2ZW50LkV2ZW50Q3VzdG9tIHtcbiAgICBwdWJsaWMgZGF0YTogYW55ID0gbnVsbDtcbiAgICBwdWJsaWMgdHlwZTogc3RyaW5nID0gJyc7XG4gICAgY29uc3RydWN0b3IodHlwZTogc3RyaW5nLCBkYXRhOiBhbnkgPSBudWxsKSB7XG4gICAgICAgIHN1cGVyKHR5cGUsIHRydWUpO1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGV2ZW50TWFuYWdlciA9IEV2ZW50TWFuYWdlci5JbnN0YW5jZTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/common/comp/reward/RewardUtils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b11c7Deuc5EwqrJWwNqtdlf', 'RewardUtils');
// script/common/comp/reward/RewardUtils.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RewardUtils = exports.RewardType = void 0;
var GameUtils_1 = require("../../../game/GameUtils");
var Jumpjump3d_1 = require("../../effect/Jumpjump3d");
var RewardType;
(function (RewardType) {
    RewardType[RewardType["Coin"] = 0] = "Coin";
})(RewardType = exports.RewardType || (exports.RewardType = {}));
var RewardUtils = /** @class */ (function () {
    function RewardUtils() {
    }
    RewardUtils.rewardsDataClose = function (rewardOpt) {
        switch (rewardOpt.type) {
            case RewardType.Coin: {
                break;
            }
        }
    };
    RewardUtils.resBoomByNode = function (icoNode, targetNode, num, scale) {
        if (scale === void 0) { scale = 0.5; }
        GameUtils_1.GameUtils.playSFX("coin");
        var wposTarget = targetNode.convertToWorldSpaceAR(cc.v2(0, 0));
        var wposStart = icoNode.convertToWorldSpaceAR(cc.v2(0, 0));
        GameUtils_1.GameUtils.addEffBoom(wposStart);
        var icoFrame = icoNode.getComponent(cc.Sprite).spriteFrame;
        for (var i = 0; i < num; i++) {
            Jumpjump3d_1.default.createBySpr(undefined, icoFrame, wposStart, 100, scale, wposTarget);
        }
    };
    return RewardUtils;
}());
exports.RewardUtils = RewardUtils;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvY29tbW9uL2NvbXAvcmV3YXJkL1Jld2FyZFV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFEQUFvRDtBQUNwRCxzREFBaUQ7QUFHakQsSUFBWSxVQUVYO0FBRkQsV0FBWSxVQUFVO0lBQ2xCLDJDQUFJLENBQUE7QUFDUixDQUFDLEVBRlcsVUFBVSxHQUFWLGtCQUFVLEtBQVYsa0JBQVUsUUFFckI7QUFpQkQ7SUFBQTtJQW9CQSxDQUFDO0lBbkJVLDRCQUFnQixHQUF2QixVQUF3QixTQUE2QjtRQUNqRCxRQUFRLFNBQVMsQ0FBQyxJQUFJLEVBQUU7WUFDcEIsS0FBSyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2xCLE1BQU07YUFDVDtTQUNKO0lBQ0wsQ0FBQztJQUdNLHlCQUFhLEdBQXBCLFVBQXFCLE9BQWdCLEVBQUUsVUFBbUIsRUFBRSxHQUFXLEVBQUUsS0FBbUI7UUFBbkIsc0JBQUEsRUFBQSxXQUFtQjtRQUN4RixxQkFBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQixJQUFJLFVBQVUsR0FBRyxVQUFVLENBQUMscUJBQXFCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvRCxJQUFJLFNBQVMsR0FBRyxPQUFPLENBQUMscUJBQXFCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzRCxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNoQyxJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUM7UUFDM0QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMxQixvQkFBVSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1NBQ2xGO0lBQ0wsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FwQkEsQUFvQkMsSUFBQTtBQXBCWSxrQ0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdhbWVVdGlscyB9IGZyb20gXCIuLi8uLi8uLi9nYW1lL0dhbWVVdGlsc1wiO1xuaW1wb3J0IEp1bXBqdW1wM2QgZnJvbSBcIi4uLy4uL2VmZmVjdC9KdW1wanVtcDNkXCI7XG5pbXBvcnQgQmFsbF9NYWluIGZyb20gXCIuLi8uLi9CYWxsX01haW5cIjtcblxuZXhwb3J0IGVudW0gUmV3YXJkVHlwZSB7XG4gICAgQ29pbixcbn1cblxuZXhwb3J0IHR5cGUgT3B0aW9uX1Jld2FyZF9DZWxsID0ge1xuICAgIHR5cGU6IFJld2FyZFR5cGUsXG4gICAgY291bnQ6IG51bWJlcixcbiAgICBpY286IGNjLk5vZGUsXG4gICAgW2luZGV4OiBzdHJpbmddOiBhbnlcbn1cblxuXG4vLyB0eXBlOiBSZXdhcmRUeXBlLCBjb3VudDogbnVtYmVyLCBpY286IGNjLk5vZGUsW2luZGV4OiBzdHJpbmddOiBhbnlcbmV4cG9ydCB0eXBlIE9wdGlvbl9SZXdhcmRfUGFuZWwgPSB7XG4gICAgcmV3YXJkOiBBcnJheTxPcHRpb25fUmV3YXJkX0NlbGw+LFxuICAgIG5leHQ6IEZ1bmN0aW9uLFxuICAgIG5lZWRDbGljazogYm9vbGVhblxufVxuXG5leHBvcnQgY2xhc3MgUmV3YXJkVXRpbHMge1xuICAgIHN0YXRpYyByZXdhcmRzRGF0YUNsb3NlKHJld2FyZE9wdDogT3B0aW9uX1Jld2FyZF9DZWxsKSB7XG4gICAgICAgIHN3aXRjaCAocmV3YXJkT3B0LnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgUmV3YXJkVHlwZS5Db2luOiB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHN0YXRpYyByZXNCb29tQnlOb2RlKGljb05vZGU6IGNjLk5vZGUsIHRhcmdldE5vZGU6IGNjLk5vZGUsIG51bTogbnVtYmVyLCBzY2FsZTogbnVtYmVyID0gMC41KSB7XG4gICAgICAgIEdhbWVVdGlscy5wbGF5U0ZYKFwiY29pblwiKTtcbiAgICAgICAgbGV0IHdwb3NUYXJnZXQgPSB0YXJnZXROb2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAwKSk7XG4gICAgICAgIGxldCB3cG9zU3RhcnQgPSBpY29Ob2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAwKSk7XG4gICAgICAgIEdhbWVVdGlscy5hZGRFZmZCb29tKHdwb3NTdGFydCk7XG4gICAgICAgIGxldCBpY29GcmFtZSA9IGljb05vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWU7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtOyBpKyspIHtcbiAgICAgICAgICAgIEp1bXBqdW1wM2QuY3JlYXRlQnlTcHIodW5kZWZpbmVkLCBpY29GcmFtZSwgd3Bvc1N0YXJ0LCAxMDAsIHNjYWxlLCB3cG9zVGFyZ2V0KTtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/merge/dataModule/GameModule.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '64566mmcFVMhZE7goFc3ntd', 'GameModule');
// script/merge/dataModule/GameModule.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameModule = void 0;
var Define_1 = require("../manager/Define");
var EventManager_1 = require("../util/EventManager");
var NewUtils_1 = require("../util/NewUtils");
var DataModule_1 = require("./DataModule");
var GameModule = /** @class */ (function (_super) {
    __extends(GameModule, _super);
    function GameModule() {
        var _this = _super.call(this) || this;
        // 用户的筹码槽位数据 1~10
        _this.slotData = [
            [1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
            [2, 2, 2, 0, 0, 0, 0, 0, 0, 0],
            [1, 1, 2, 2, 0, 0, 0, 0, 0, 0],
            [2, 2, 2, 3, 3, 0, 0, 0, 0, 0],
            [5, 5, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ];
        // 当前正在选中的筹码槽位
        _this.curSelectSlotIdx = -1;
        // 当前选中的筹码信息
        _this.curSelectCoinIdxs = [];
        // 移动锁
        _this.moveLock = false;
        _this.mergeLock = 0;
        return _this;
    }
    GameModule.prototype.parseData = function (data) {
        _super.prototype.parseData.call(this, data);
    };
    /**
     * @description 通过槽id 获取第一个有效的筹码信息
     * @param slotIdx: 需要获取第一个有效的筹码信息的槽id
     * @return vaildNum: 该槽位的有效数字、vaildIdx: 有效数字的索引、vaildSPace: 剩余可容纳的筹码空间
     */
    GameModule.prototype.getFirstVaildNumBySlotIdx = function (slotIdx) {
        var slotData = this.slotData[slotIdx];
        var vaildNum = -1;
        var vaildIdx = -1;
        var vaildSpace = 10;
        for (var i = 9; i >= 0; i--) {
            if (slotData[i] === 0)
                continue;
            vaildNum = slotData[i];
            vaildIdx = i;
            vaildSpace = 9 - i;
            break;
        }
        return { vaildNum: vaildNum, vaildIdx: vaildIdx, vaildSpace: vaildSpace };
    };
    /**
     * @description 获取当前选中的待移动的槽位筹码信息
     * @returns slotIdx: 当前选中的槽位索引、  cnt: 待移动的筹码数量、  num: 待移动的数字类型
     */
    GameModule.prototype.getCurSelectSlotInfo = function () {
        if (this.curSelectSlotIdx === -1)
            return null;
        var cnt = this.curSelectCoinIdxs.length;
        var num = this.slotData[this.curSelectSlotIdx][this.curSelectCoinIdxs[0]];
        return { slotIdx: this.curSelectSlotIdx, cnt: cnt, num: num };
    };
    // 重置当前筹码选择状态
    GameModule.prototype.resetSelectStatus = function () {
        exports.gameModule.curSelectSlotIdx = -1;
        exports.gameModule.curSelectCoinIdxs = [];
    };
    // 筹码移动完成，整理移动后的数据
    GameModule.prototype.tidySlotData = function (ed) {
        for (var i = 0; i < ed.srcIdxArr.length; i++) {
            this.slotData[this.curSelectSlotIdx][ed.srcIdxArr[i]] = 0;
            this.slotData[ed.tarSlotIdx][ed.tarIdxArr[i]] = ed.numType;
        }
        // 刷新筹码显示情况
        EventManager_1.eventManager.dispatchEvent(new EventManager_1.GameEvent(Define_1.EventType.MOVE_END, ed));
        // 重置当前选中状态
        this.resetSelectStatus();
        // 检测是否可以合成
        EventManager_1.eventManager.dispatch(Define_1.EventType.CHECK_MERGE);
    };
    // 检测是否有可以合成的槽位
    GameModule.prototype.checkCanMerge = function () {
        var result = [];
        for (var i = 0; i < 8; i++) {
            var can = this.checkCanMergeBySlot(i);
            if (can)
                result.push(i);
        }
        return result;
    };
    // 通过槽位来检测是否可以进行合成
    GameModule.prototype.checkCanMergeBySlot = function (slotId) {
        var slotData = this.slotData[slotId];
        for (var i = 0; i < 10; i++) {
            if (slotData[i] === 0)
                return false;
            if (i === 0)
                continue;
            if (slotData[i] !== slotData[i - 1]) {
                return false;
            }
        }
        return true;
    };
    // 获取当前最大数字
    GameModule.prototype.getMaxValue = function () {
        var maxValue = 0;
        for (var i = 0; i < this.slotData.length; i++) {
            for (var j = 0; j < this.slotData[i].length; j++) {
                if (this.slotData[i][j] > maxValue) {
                    maxValue = this.slotData[i][j];
                }
            }
        }
        return maxValue;
    };
    // 获取当前最小数字
    GameModule.prototype.getMinValue = function () {
        var minValue = -1;
        for (var i = 0; i < this.slotData.length; i++) {
            for (var j = 0; j < this.slotData[i].length; j++) {
                if (minValue === -1 && this.slotData[i][j] !== 0) {
                    minValue = this.slotData[i][j];
                }
                if (this.slotData[i][j] < minValue && this.slotData[i][j] !== 0) {
                    minValue = this.slotData[i][j];
                }
            }
        }
        return minValue;
    };
    GameModule.prototype.getSpaceBySlot = function (id) {
        if (!this.slotData[id])
            return;
        for (var i = 0; i < this.slotData[id].length; i++) {
            if (this.slotData[id][i] === 0) {
                return 10 - i;
            }
        }
        return 0;
    };
    // 获取当前剩余空间
    GameModule.prototype.getSpace = function () {
        var space = 0;
        for (var i = 0; i < 8; i++) {
            space += this.getSpaceBySlot(i);
        }
        return space;
    };
    // 生成新的筹码数据
    GameModule.prototype.produceNewCoinData = function () {
        // return [
        //     [1], [1], [1], [1], [1], [1], [1], [1]
        // ]
        var maxValue = this.getMaxValue();
        var space = this.getSpace();
        if (maxValue >= 15) {
            console.warn('当前已合成15');
            return;
        }
        if (space === 0) {
            console.warn('没有剩余空间，无法生成新数字');
            return;
        }
        if (maxValue < 5) {
            return this.produceStrategyOne(maxValue, space);
        }
        else if (maxValue < 10) {
            return this.produceStrategyTwo(maxValue, space);
        }
        else if (maxValue < 14) {
            return this.produceStrategyThree(maxValue, space);
        }
        else if (maxValue < 15) {
            return this.produceStrategyFour(maxValue, space);
        }
    };
    /**
     * @description 小于5 策略
     * 1、生成数量 min(space*30,8);
     * 2、生成类型 <= 3
     * 3、最小数 = 当前场景最小数-1
     *
     * @param max: 当前场景中最大的筹码数值
     * @param space: 当前总的空间数
     * @returns
     */
    GameModule.prototype.produceStrategyOne = function (max, space) {
        console.log('策略1:<5');
        // 场景中最小值
        var min = this.getMinValue();
        // 总共需要生成的数字数量
        var totalCnt = Math.floor(Math.min(20, space * 0.5));
        if (totalCnt === 0)
            totalCnt = 1;
        // 新生成的数字类型限定在比当前场景中最大的数字小1
        var limitMax = max - 1 > 0 ? max - 1 : 1;
        // 生成数字的类型数量 1、2、3、4、5
        var typeCnt = totalCnt >= 4 ? 4 : totalCnt;
        // 实际取数类型区间小于typeCnt，那么纠正typeCnt为较小的类型，确保不会出现场内未出现的数
        if (limitMax - min + 1 < typeCnt)
            typeCnt = limitMax - min + 1;
        // 数字种类
        var types = NewUtils_1.default.randomIntArrFromSection(typeCnt, min, limitMax);
        // 生成全部的随机筹码值
        var allNewCoin = NewUtils_1.default.randomIntArrFromArr(totalCnt, types);
        // 确定当前的剩余空间情况
        var spaceInfo = [];
        for (var i = 0; i < 8; i++) {
            var perSlotSpace = this.getSpaceBySlot(i);
            spaceInfo.push(perSlotSpace);
        }
        // 随机将已经生成的数字填充到相应的空位置处(一定是可以放得下的，剩余空间>=生成的数字数量)
        var result = [[], [], [], [], [], [], [], []];
        do {
            var slotIdx = NewUtils_1.default.randomIntInclusive(0, 7);
            if (spaceInfo[slotIdx] === 0)
                continue;
            result[slotIdx].push(allNewCoin.shift());
            spaceInfo[slotIdx]--;
        } while (allNewCoin.length > 0);
        return result;
    };
    // 小于10的策略
    GameModule.prototype.produceStrategyTwo = function (max, space) {
        console.log('策略2:<10');
        // 场景中最小值
        var min = Math.min(3, this.getMinValue());
        // 总共需要生成的数字数量
        var totalCnt = Math.floor(Math.min(20, space * 0.6));
        if (totalCnt === 0)
            totalCnt = 1;
        var limitMax = Math.min(max - 1, 7);
        // 生成数字的类型数量 min~7
        var typeCnt = totalCnt >= 3 ? 3 : totalCnt;
        // 数字种类
        var types = NewUtils_1.default.randomIntArrFromSection(typeCnt, min, limitMax);
        // 生成全部的随机筹码值
        var allNewCoin = NewUtils_1.default.randomIntArrFromArr(totalCnt, types);
        // 确定当前的剩余空间情况
        var spaceInfo = [];
        for (var i = 0; i < 8; i++) {
            var perSlotSpace = this.getSpaceBySlot(i);
            spaceInfo.push(perSlotSpace);
        }
        // 随机将已经生成的数字填充到相应的空位置处(一定是可以放得下的，剩余空间>=生成的数字数量)
        var result = [[], [], [], [], [], [], [], []];
        do {
            var slotIdx = NewUtils_1.default.randomIntInclusive(0, 7);
            if (spaceInfo[slotIdx] === 0)
                continue;
            result[slotIdx].push(allNewCoin.shift());
            spaceInfo[slotIdx]--;
        } while (allNewCoin.length > 0);
        return result;
    };
    // 小于14的策略
    GameModule.prototype.produceStrategyThree = function (max, space) {
        console.log('策略3:<14');
        // 场景中最小值
        var min = Math.min(8, this.getMinValue());
        // 总共需要生成的数字数量
        var totalCnt = Math.floor(Math.min(20, space * 0.6));
        if (totalCnt === 0)
            totalCnt = 1;
        var limitMax = Math.min(max - 1, 10);
        // 生成数字的类型数量 min~10
        var typeCnt = totalCnt >= 3 ? 3 : totalCnt;
        // 数字种类
        var types = NewUtils_1.default.randomIntArrFromSection(typeCnt, min, limitMax);
        // 生成全部的随机筹码值
        var allNewCoin = NewUtils_1.default.randomIntArrFromArr(totalCnt, types);
        // 确定当前的剩余空间情况
        var spaceInfo = [];
        for (var i = 0; i < 8; i++) {
            var perSlotSpace = this.getSpaceBySlot(i);
            spaceInfo.push(perSlotSpace);
        }
        // 随机将已经生成的数字填充到相应的空位置处(一定是可以放得下的，剩余空间>=生成的数字数量)
        var result = [[], [], [], [], [], [], [], []];
        do {
            var slotIdx = NewUtils_1.default.randomIntInclusive(0, 7);
            if (spaceInfo[slotIdx] === 0)
                continue;
            result[slotIdx].push(allNewCoin.shift());
            spaceInfo[slotIdx]--;
        } while (allNewCoin.length > 0);
        return result;
    };
    // 小于15的策略
    GameModule.prototype.produceStrategyFour = function (max, space) {
        console.log('策略1:<15');
        // 场景中最小值
        var min = Math.min(6, this.getMinValue());
        // 总共需要生成的数字数量
        var totalCnt = Math.floor(Math.min(20, space * 0.7));
        if (totalCnt === 0)
            totalCnt = 1;
        var limitMax = Math.min(max - 1, 9);
        // 生成数字的类型数量 min~9
        var typeCnt = totalCnt >= 3 ? 3 : totalCnt;
        // 数字种类
        var types = NewUtils_1.default.randomIntArrFromSection(typeCnt, min, limitMax);
        // 生成全部的随机筹码值
        var allNewCoin = NewUtils_1.default.randomIntArrFromArr(totalCnt, types);
        // 确定当前的剩余空间情况
        var spaceInfo = [];
        for (var i = 0; i < 8; i++) {
            var perSlotSpace = this.getSpaceBySlot(i);
            spaceInfo.push(perSlotSpace);
        }
        // 随机将已经生成的数字填充到相应的空位置处(一定是可以放得下的，剩余空间>=生成的数字数量)
        var result = [[], [], [], [], [], [], [], []];
        do {
            var slotIdx = NewUtils_1.default.randomIntInclusive(0, 7);
            if (spaceInfo[slotIdx] === 0)
                continue;
            result[slotIdx].push(allNewCoin.shift());
            spaceInfo[slotIdx]--;
        } while (allNewCoin.length > 0);
        return result;
    };
    // TODO: 新生成的数据和原有数据进行合成
    GameModule.prototype.mergeProduceData = function (newData) {
        for (var slotIdx = 0; slotIdx < 8; slotIdx++) {
            var newSlotData = NewUtils_1.default.deepClone(newData[slotIdx]);
            for (var j = 0; j < 10; j++) {
                if (this.slotData[slotIdx][j] === 0 && newSlotData.length > 0) {
                    var newCoinData = newSlotData.shift();
                    this.slotData[slotIdx][j] = newCoinData;
                }
            }
        }
    };
    return GameModule;
}(DataModule_1.default));
exports.default = GameModule;
exports.gameModule = new GameModule();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvbWVyZ2UvZGF0YU1vZHVsZS9HYW1lTW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0Q0FBOEM7QUFDOUMscURBQStEO0FBQy9ELDZDQUF3QztBQUN4QywyQ0FBc0M7QUFFdEM7SUFBd0MsOEJBQVU7SUFzQjlDO1FBQUEsWUFDSSxpQkFBTyxTQUNWO1FBdkJELGlCQUFpQjtRQUNWLGNBQVEsR0FBRztZQUNkLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFD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Q0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQzNELElBQU0sV0FBVyxHQUFHLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztvQkFDeEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUM7aUJBQzNDO2FBQ0o7U0FDSjtJQUNMLENBQUM7SUFDTCxpQkFBQztBQUFELENBdFlBLEFBc1lDLENBdFl1QyxvQkFBVSxHQXNZakQ7O0FBQ1ksUUFBQSxVQUFVLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50VHlwZSB9IGZyb20gJy4uL21hbmFnZXIvRGVmaW5lJztcbmltcG9ydCB7IGV2ZW50TWFuYWdlciwgR2FtZUV2ZW50IH0gZnJvbSAnLi4vdXRpbC9FdmVudE1hbmFnZXInO1xuaW1wb3J0IE5ld1V0aWxzIGZyb20gJy4uL3V0aWwvTmV3VXRpbHMnO1xuaW1wb3J0IERhdGFNb2R1bGUgZnJvbSAnLi9EYXRhTW9kdWxlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU1vZHVsZSBleHRlbmRzIERhdGFNb2R1bGUge1xuICAgIC8vIOeUqOaIt+eahOetueeggeanveS9jeaVsOaNriAxfjEwXG4gICAgcHVibGljIHNsb3REYXRhID0gW1xuICAgICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgICAgIFsyLCAyLCAyLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgWzEsIDEsIDIsIDIsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgICBbMiwgMiwgMiwgMywgMywgMCwgMCwgMCwgMCwgMF0sXG4gICAgICAgIFs1LCA1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICBdXG5cbiAgICAvLyDlvZPliY3mraPlnKjpgInkuK3nmoTnrbnnoIHmp73kvY1cbiAgICBjdXJTZWxlY3RTbG90SWR4OiBudW1iZXIgPSAtMTtcbiAgICAvLyDlvZPliY3pgInkuK3nmoTnrbnnoIHkv6Hmga9cbiAgICBjdXJTZWxlY3RDb2luSWR4czogbnVtYmVyW10gPSBbXTtcblxuICAgIC8vIOenu+WKqOmUgVxuICAgIG1vdmVMb2NrOiBib29sZWFuID0gZmFsc2U7XG4gICAgbWVyZ2VMb2NrOiBudW1iZXIgPSAwO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgcGFyc2VEYXRhKGRhdGE6IGFueSk6IHZvaWQge1xuICAgICAgICBzdXBlci5wYXJzZURhdGEoZGF0YSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOmAmui/h+anvWlkIOiOt+WPluesrOS4gOS4quacieaViOeahOetueeggeS/oeaBr1xuICAgICAqIEBwYXJhbSBzbG90SWR4OiDpnIDopoHojrflj5bnrKzkuIDkuKrmnInmlYjnmoTnrbnnoIHkv6Hmga/nmoTmp71pZFxuICAgICAqIEByZXR1cm4gdmFpbGROdW06IOivpeanveS9jeeahOacieaViOaVsOWtl+OAgXZhaWxkSWR4OiDmnInmlYjmlbDlrZfnmoTntKLlvJXjgIF2YWlsZFNQYWNlOiDliankvZnlj6/lrrnnurPnmoTnrbnnoIHnqbrpl7RcbiAgICAgKi9cbiAgICBnZXRGaXJzdFZhaWxkTnVtQnlTbG90SWR4KHNsb3RJZHg6IG51bWJlcik6IHsgdmFpbGROdW06IG51bWJlciwgdmFpbGRJZHg6IG51bWJlciwgdmFpbGRTcGFjZTogbnVtYmVyIH0ge1xuICAgICAgICBjb25zdCBzbG90RGF0YSA9IHRoaXMuc2xvdERhdGFbc2xvdElkeF07XG5cbiAgICAgICAgbGV0IHZhaWxkTnVtOiBudW1iZXIgPSAtMTtcbiAgICAgICAgbGV0IHZhaWxkSWR4OiBudW1iZXIgPSAtMTtcbiAgICAgICAgbGV0IHZhaWxkU3BhY2U6IG51bWJlciA9IDEwO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSA5OyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgaWYgKHNsb3REYXRhW2ldID09PSAwKSBjb250aW51ZTtcblxuICAgICAgICAgICAgdmFpbGROdW0gPSBzbG90RGF0YVtpXTtcbiAgICAgICAgICAgIHZhaWxkSWR4ID0gaTtcbiAgICAgICAgICAgIHZhaWxkU3BhY2UgPSA5IC0gaTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgdmFpbGROdW0sIHZhaWxkSWR4LCB2YWlsZFNwYWNlIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOiOt+WPluW9k+WJjemAieS4reeahOW+heenu+WKqOeahOanveS9jeetueeggeS/oeaBr1xuICAgICAqIEByZXR1cm5zIHNsb3RJZHg6IOW9k+WJjemAieS4reeahOanveS9jee0ouW8leOAgSAgY250OiDlvoXnp7vliqjnmoTnrbnnoIHmlbDph4/jgIEgIG51bTog5b6F56e75Yqo55qE5pWw5a2X57G75Z6LXG4gICAgICovXG4gICAgZ2V0Q3VyU2VsZWN0U2xvdEluZm8oKTogeyBzbG90SWR4OiBudW1iZXIsIGNudDogbnVtYmVyLCBudW06IG51bWJlciB9IHtcbiAgICAgICAgaWYgKHRoaXMuY3VyU2VsZWN0U2xvdElkeCA9PT0gLTEpIHJldHVybiBudWxsO1xuICAgICAgICBjb25zdCBjbnQgPSB0aGlzLmN1clNlbGVjdENvaW5JZHhzLmxlbmd0aDtcbiAgICAgICAgY29uc3QgbnVtID0gdGhpcy5zbG90RGF0YVt0aGlzLmN1clNlbGVjdFNsb3RJZHhdW3RoaXMuY3VyU2VsZWN0Q29pbklkeHNbMF1dO1xuICAgICAgICByZXR1cm4geyBzbG90SWR4OiB0aGlzLmN1clNlbGVjdFNsb3RJZHgsIGNudCwgbnVtIH07XG4gICAgfVxuXG4gICAgLy8g6YeN572u5b2T5YmN562556CB6YCJ5oup54q25oCBXG4gICAgcmVzZXRTZWxlY3RTdGF0dXMoKTogdm9pZCB7XG4gICAgICAgIGdhbWVNb2R1bGUuY3VyU2VsZWN0U2xvdElkeCA9IC0xO1xuICAgICAgICBnYW1lTW9kdWxlLmN1clNlbGVjdENvaW5JZHhzID0gW107XG4gICAgfVxuXG4gICAgLy8g562556CB56e75Yqo5a6M5oiQ77yM5pW055CG56e75Yqo5ZCO55qE5pWw5o2uXG4gICAgdGlkeVNsb3REYXRhKGVkOiB7IHRhclNsb3RJZHg6IG51bWJlciwgbnVtVHlwZTogbnVtYmVyLCBzcmNJZHhBcnI6IG51bWJlcltdLCB0YXJJZHhBcnI6IG51bWJlcltdIH0pIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlZC5zcmNJZHhBcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuc2xvdERhdGFbdGhpcy5jdXJTZWxlY3RTbG90SWR4XVtlZC5zcmNJZHhBcnJbaV1dID0gMDtcbiAgICAgICAgICAgIHRoaXMuc2xvdERhdGFbZWQudGFyU2xvdElkeF1bZWQudGFySWR4QXJyW2ldXSA9IGVkLm51bVR5cGU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDliLfmlrDnrbnnoIHmmL7npLrmg4XlhrVcbiAgICAgICAgZXZlbnRNYW5hZ2VyLmRpc3BhdGNoRXZlbnQobmV3IEdhbWVFdmVudChFdmVudFR5cGUuTU9WRV9FTkQsIGVkKSk7XG5cbiAgICAgICAgLy8g6YeN572u5b2T5YmN6YCJ5Lit54q25oCBXG4gICAgICAgIHRoaXMucmVzZXRTZWxlY3RTdGF0dXMoKTtcblxuICAgICAgICAvLyDmo4DmtYvmmK/lkKblj6/ku6XlkIjmiJBcbiAgICAgICAgZXZlbnRNYW5hZ2VyLmRpc3BhdGNoKEV2ZW50VHlwZS5DSEVDS19NRVJHRSk7XG4gICAgfVxuXG4gICAgLy8g5qOA5rWL5piv5ZCm5pyJ5Y+v5Lul5ZCI5oiQ55qE5qe95L2NXG4gICAgY2hlY2tDYW5NZXJnZSgpOiBudW1iZXJbXSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY2FuID0gdGhpcy5jaGVja0Nhbk1lcmdlQnlTbG90KGkpO1xuICAgICAgICAgICAgaWYgKGNhbikgcmVzdWx0LnB1c2goaSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIC8vIOmAmui/h+anveS9jeadpeajgOa1i+aYr+WQpuWPr+S7pei/m+ihjOWQiOaIkFxuICAgIGNoZWNrQ2FuTWVyZ2VCeVNsb3Qoc2xvdElkOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3Qgc2xvdERhdGEgPSB0aGlzLnNsb3REYXRhW3Nsb3RJZF07XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgaWYgKHNsb3REYXRhW2ldID09PSAwKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBpZiAoaSA9PT0gMCkgY29udGludWU7XG4gICAgICAgICAgICBpZiAoc2xvdERhdGFbaV0gIT09IHNsb3REYXRhW2kgLSAxXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIOiOt+WPluW9k+WJjeacgOWkp+aVsOWtl1xuICAgIGdldE1heFZhbHVlKCk6IG51bWJlciB7XG4gICAgICAgIGxldCBtYXhWYWx1ZSA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zbG90RGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLnNsb3REYXRhW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2xvdERhdGFbaV1bal0gPiBtYXhWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBtYXhWYWx1ZSA9IHRoaXMuc2xvdERhdGFbaV1bal07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWF4VmFsdWU7XG4gICAgfVxuXG4gICAgLy8g6I635Y+W5b2T5YmN5pyA5bCP5pWw5a2XXG4gICAgZ2V0TWluVmFsdWUoKTogbnVtYmVyIHtcbiAgICAgICAgbGV0IG1pblZhbHVlID0gLTE7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zbG90RGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLnNsb3REYXRhW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1pblZhbHVlID09PSAtMSAmJiB0aGlzLnNsb3REYXRhW2ldW2pdICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG1pblZhbHVlID0gdGhpcy5zbG90RGF0YVtpXVtqXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2xvdERhdGFbaV1bal0gPCBtaW5WYWx1ZSAmJiB0aGlzLnNsb3REYXRhW2ldW2pdICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG1pblZhbHVlID0gdGhpcy5zbG90RGF0YVtpXVtqXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtaW5WYWx1ZTtcbiAgICB9XG5cbiAgICBnZXRTcGFjZUJ5U2xvdChpZDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgaWYgKCF0aGlzLnNsb3REYXRhW2lkXSkgcmV0dXJuO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2xvdERhdGFbaWRdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zbG90RGF0YVtpZF1baV0gPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMTAgLSBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgLy8g6I635Y+W5b2T5YmN5Ymp5L2Z56m66Ze0XG4gICAgZ2V0U3BhY2UoKTogbnVtYmVyIHtcbiAgICAgICAgbGV0IHNwYWNlID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcbiAgICAgICAgICAgIHNwYWNlICs9IHRoaXMuZ2V0U3BhY2VCeVNsb3QoaSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNwYWNlO1xuICAgIH1cblxuICAgIC8vIOeUn+aIkOaWsOeahOetueeggeaVsOaNrlxuICAgIHByb2R1Y2VOZXdDb2luRGF0YSgpOiBudW1iZXJbXVtdIHtcbiAgICAgICAgLy8gcmV0dXJuIFtcbiAgICAgICAgLy8gICAgIFsxXSwgWzFdLCBbMV0sIFsxXSwgWzFdLCBbMV0sIFsxXSwgWzFdXG4gICAgICAgIC8vIF1cblxuICAgICAgICBjb25zdCBtYXhWYWx1ZSA9IHRoaXMuZ2V0TWF4VmFsdWUoKTtcbiAgICAgICAgY29uc3Qgc3BhY2UgPSB0aGlzLmdldFNwYWNlKCk7XG5cbiAgICAgICAgaWYgKG1heFZhbHVlID49IDE1KSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ+W9k+WJjeW3suWQiOaIkDE1Jyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3BhY2UgPT09IDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2Fybign5rKh5pyJ5Ymp5L2Z56m66Ze077yM5peg5rOV55Sf5oiQ5paw5pWw5a2XJylcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtYXhWYWx1ZSA8IDUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2R1Y2VTdHJhdGVneU9uZShtYXhWYWx1ZSwgc3BhY2UpO1xuICAgICAgICB9IGVsc2UgaWYgKG1heFZhbHVlIDwgMTApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2R1Y2VTdHJhdGVneVR3byhtYXhWYWx1ZSwgc3BhY2UpO1xuICAgICAgICB9IGVsc2UgaWYgKG1heFZhbHVlIDwgMTQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2R1Y2VTdHJhdGVneVRocmVlKG1heFZhbHVlLCBzcGFjZSk7XG4gICAgICAgIH0gZWxzZSBpZiAobWF4VmFsdWUgPCAxNSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvZHVjZVN0cmF0ZWd5Rm91cihtYXhWYWx1ZSwgc3BhY2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOWwj+S6jjUg562W55WlXG4gICAgICogMeOAgeeUn+aIkOaVsOmHjyBtaW4oc3BhY2UqMzAsOCk7XG4gICAgICogMuOAgeeUn+aIkOexu+WeiyA8PSAzXG4gICAgICogM+OAgeacgOWwj+aVsCA9IOW9k+WJjeWcuuaZr+acgOWwj+aVsC0xXG4gICAgICogXG4gICAgICogQHBhcmFtIG1heDog5b2T5YmN5Zy65pmv5Lit5pyA5aSn55qE562556CB5pWw5YC8XG4gICAgICogQHBhcmFtIHNwYWNlOiDlvZPliY3mgLvnmoTnqbrpl7TmlbBcbiAgICAgKiBAcmV0dXJucyBcbiAgICAgKi9cbiAgICBwcm9kdWNlU3RyYXRlZ3lPbmUobWF4OiBudW1iZXIsIHNwYWNlOiBudW1iZXIpOiBudW1iZXJbXVtdIHtcbiAgICAgICAgY29uc29sZS5sb2coJ+etlueVpTE6PDUnKTtcbiAgICAgICAgLy8g5Zy65pmv5Lit5pyA5bCP5YC8XG4gICAgICAgIGNvbnN0IG1pbiA9IHRoaXMuZ2V0TWluVmFsdWUoKTtcblxuICAgICAgICAvLyDmgLvlhbHpnIDopoHnlJ/miJDnmoTmlbDlrZfmlbDph49cbiAgICAgICAgbGV0IHRvdGFsQ250ID0gTWF0aC5mbG9vcihNYXRoLm1pbigyMCwgc3BhY2UgKiAwLjUpKTtcbiAgICAgICAgaWYgKHRvdGFsQ250ID09PSAwKSB0b3RhbENudCA9IDE7XG5cbiAgICAgICAgLy8g5paw55Sf5oiQ55qE5pWw5a2X57G75Z6L6ZmQ5a6a5Zyo5q+U5b2T5YmN5Zy65pmv5Lit5pyA5aSn55qE5pWw5a2X5bCPMVxuICAgICAgICBjb25zdCBsaW1pdE1heCA9IG1heCAtIDEgPiAwID8gbWF4IC0gMSA6IDE7XG5cbiAgICAgICAgLy8g55Sf5oiQ5pWw5a2X55qE57G75Z6L5pWw6YePIDHjgIEy44CBM+OAgTTjgIE1XG4gICAgICAgIGxldCB0eXBlQ250ID0gdG90YWxDbnQgPj0gNCA/IDQgOiB0b3RhbENudDtcblxuICAgICAgICAvLyDlrp7pmYXlj5bmlbDnsbvlnovljLrpl7TlsI/kuo50eXBlQ25077yM6YKj5LmI57qg5q2jdHlwZUNudOS4uui+g+Wwj+eahOexu+Wei++8jOehruS/neS4jeS8muWHuueOsOWcuuWGheacquWHuueOsOeahOaVsFxuICAgICAgICBpZiAobGltaXRNYXggLSBtaW4gKyAxIDwgdHlwZUNudCkgdHlwZUNudCA9IGxpbWl0TWF4IC0gbWluICsgMTtcblxuICAgICAgICAvLyDmlbDlrZfnp43nsbtcbiAgICAgICAgY29uc3QgdHlwZXMgPSBOZXdVdGlscy5yYW5kb21JbnRBcnJGcm9tU2VjdGlvbih0eXBlQ250LCBtaW4sIGxpbWl0TWF4KTtcblxuICAgICAgICAvLyDnlJ/miJDlhajpg6jnmoTpmo/mnLrnrbnnoIHlgLxcbiAgICAgICAgbGV0IGFsbE5ld0NvaW4gPSBOZXdVdGlscy5yYW5kb21JbnRBcnJGcm9tQXJyKHRvdGFsQ250LCB0eXBlcyk7XG5cbiAgICAgICAgLy8g56Gu5a6a5b2T5YmN55qE5Ymp5L2Z56m66Ze05oOF5Ya1XG4gICAgICAgIGxldCBzcGFjZUluZm8gPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHBlclNsb3RTcGFjZSA9IHRoaXMuZ2V0U3BhY2VCeVNsb3QoaSk7XG4gICAgICAgICAgICBzcGFjZUluZm8ucHVzaChwZXJTbG90U3BhY2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g6ZqP5py65bCG5bey57uP55Sf5oiQ55qE5pWw5a2X5aGr5YWF5Yiw55u45bqU55qE56m65L2N572u5aSEKOS4gOWumuaYr+WPr+S7peaUvuW+l+S4i+eahO+8jOWJqeS9meepuumXtD4955Sf5oiQ55qE5pWw5a2X5pWw6YePKVxuICAgICAgICBjb25zdCByZXN1bHQgPSBbW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdXTtcbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgY29uc3Qgc2xvdElkeCA9IE5ld1V0aWxzLnJhbmRvbUludEluY2x1c2l2ZSgwLCA3KTtcbiAgICAgICAgICAgIGlmIChzcGFjZUluZm9bc2xvdElkeF0gPT09IDApIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICByZXN1bHRbc2xvdElkeF0ucHVzaChhbGxOZXdDb2luLnNoaWZ0KCkpO1xuICAgICAgICAgICAgc3BhY2VJbmZvW3Nsb3RJZHhdLS07XG4gICAgICAgIH0gd2hpbGUgKGFsbE5ld0NvaW4ubGVuZ3RoID4gMClcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIC8vIOWwj+S6jjEw55qE562W55WlXG4gICAgcHJvZHVjZVN0cmF0ZWd5VHdvKG1heDogbnVtYmVyLCBzcGFjZTogbnVtYmVyKTogbnVtYmVyW11bXSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCfnrZbnlaUyOjwxMCcpO1xuXG4gICAgICAgIC8vIOWcuuaZr+S4reacgOWwj+WAvFxuICAgICAgICBsZXQgbWluID0gTWF0aC5taW4oMywgdGhpcy5nZXRNaW5WYWx1ZSgpKTtcblxuICAgICAgICAvLyDmgLvlhbHpnIDopoHnlJ/miJDnmoTmlbDlrZfmlbDph49cbiAgICAgICAgbGV0IHRvdGFsQ250ID0gTWF0aC5mbG9vcihNYXRoLm1pbigyMCwgc3BhY2UgKiAwLjYpKTtcbiAgICAgICAgaWYgKHRvdGFsQ250ID09PSAwKSB0b3RhbENudCA9IDE7XG5cbiAgICAgICAgY29uc3QgbGltaXRNYXggPSBNYXRoLm1pbihtYXgtMSwgNyk7XG5cbiAgICAgICAgLy8g55Sf5oiQ5pWw5a2X55qE57G75Z6L5pWw6YePIG1pbn43XG4gICAgICAgIGxldCB0eXBlQ250ID0gdG90YWxDbnQgPj0gMyA/IDMgOiB0b3RhbENudDtcblxuICAgICAgICAvLyDmlbDlrZfnp43nsbtcbiAgICAgICAgY29uc3QgdHlwZXMgPSBOZXdVdGlscy5yYW5kb21JbnRBcnJGcm9tU2VjdGlvbih0eXBlQ250LCBtaW4sIGxpbWl0TWF4KTtcblxuICAgICAgICAvLyDnlJ/miJDlhajpg6jnmoTpmo/mnLrnrbnnoIHlgLxcbiAgICAgICAgbGV0IGFsbE5ld0NvaW4gPSBOZXdVdGlscy5yYW5kb21JbnRBcnJGcm9tQXJyKHRvdGFsQ250LCB0eXBlcyk7XG5cbiAgICAgICAgLy8g56Gu5a6a5b2T5YmN55qE5Ymp5L2Z56m66Ze05oOF5Ya1XG4gICAgICAgIGxldCBzcGFjZUluZm8gPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHBlclNsb3RTcGFjZSA9IHRoaXMuZ2V0U3BhY2VCeVNsb3QoaSk7XG4gICAgICAgICAgICBzcGFjZUluZm8ucHVzaChwZXJTbG90U3BhY2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g6ZqP5py65bCG5bey57uP55Sf5oiQ55qE5pWw5a2X5aGr5YWF5Yiw55u45bqU55qE56m65L2N572u5aSEKOS4gOWumuaYr+WPr+S7peaUvuW+l+S4i+eahO+8jOWJqeS9meepuumXtD4955Sf5oiQ55qE5pWw5a2X5pWw6YePKVxuICAgICAgICBjb25zdCByZXN1bHQgPSBbW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdXTtcbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgY29uc3Qgc2xvdElkeCA9IE5ld1V0aWxzLnJhbmRvbUludEluY2x1c2l2ZSgwLCA3KTtcbiAgICAgICAgICAgIGlmIChzcGFjZUluZm9bc2xvdElkeF0gPT09IDApIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICByZXN1bHRbc2xvdElkeF0ucHVzaChhbGxOZXdDb2luLnNoaWZ0KCkpO1xuICAgICAgICAgICAgc3BhY2VJbmZvW3Nsb3RJZHhdLS07XG4gICAgICAgIH0gd2hpbGUgKGFsbE5ld0NvaW4ubGVuZ3RoID4gMClcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuXG4gICAgfVxuXG4gICAgLy8g5bCP5LqOMTTnmoTnrZbnlaVcbiAgICBwcm9kdWNlU3RyYXRlZ3lUaHJlZShtYXg6IG51bWJlciwgc3BhY2U6IG51bWJlcik6IG51bWJlcltdW10ge1xuICAgICAgICBjb25zb2xlLmxvZygn562W55WlMzo8MTQnKTtcblxuICAgICAgICAvLyDlnLrmma/kuK3mnIDlsI/lgLxcbiAgICAgICAgbGV0IG1pbiA9IE1hdGgubWluKDgsIHRoaXMuZ2V0TWluVmFsdWUoKSk7XG5cbiAgICAgICAgLy8g5oC75YWx6ZyA6KaB55Sf5oiQ55qE5pWw5a2X5pWw6YePXG4gICAgICAgIGxldCB0b3RhbENudCA9IE1hdGguZmxvb3IoTWF0aC5taW4oMjAsIHNwYWNlICogMC42KSk7XG4gICAgICAgIGlmICh0b3RhbENudCA9PT0gMCkgdG90YWxDbnQgPSAxO1xuXG4gICAgICAgIGNvbnN0IGxpbWl0TWF4ID0gTWF0aC5taW4obWF4LTEsIDEwKTtcblxuICAgICAgICAvLyDnlJ/miJDmlbDlrZfnmoTnsbvlnovmlbDph48gbWlufjEwXG4gICAgICAgIGxldCB0eXBlQ250ID0gdG90YWxDbnQgPj0gMyA/IDMgOiB0b3RhbENudDtcblxuICAgICAgICAvLyDmlbDlrZfnp43nsbtcbiAgICAgICAgY29uc3QgdHlwZXMgPSBOZXdVdGlscy5yYW5kb21JbnRBcnJGcm9tU2VjdGlvbih0eXBlQ250LCBtaW4sIGxpbWl0TWF4KTtcblxuICAgICAgICAvLyDnlJ/miJDlhajpg6jnmoTpmo/mnLrnrbnnoIHlgLxcbiAgICAgICAgbGV0IGFsbE5ld0NvaW4gPSBOZXdVdGlscy5yYW5kb21JbnRBcnJGcm9tQXJyKHRvdGFsQ250LCB0eXBlcyk7XG5cbiAgICAgICAgLy8g56Gu5a6a5b2T5YmN55qE5Ymp5L2Z56m66Ze05oOF5Ya1XG4gICAgICAgIGxldCBzcGFjZUluZm8gPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHBlclNsb3RTcGFjZSA9IHRoaXMuZ2V0U3BhY2VCeVNsb3QoaSk7XG4gICAgICAgICAgICBzcGFjZUluZm8ucHVzaChwZXJTbG90U3BhY2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g6ZqP5py65bCG5bey57uP55Sf5oiQ55qE5pWw5a2X5aGr5YWF5Yiw55u45bqU55qE56m65L2N572u5aSEKOS4gOWumuaYr+WPr+S7peaUvuW+l+S4i+eahO+8jOWJqeS9meepuumXtD4955Sf5oiQ55qE5pWw5a2X5pWw6YePKVxuICAgICAgICBjb25zdCByZXN1bHQgPSBbW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdXTtcbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgY29uc3Qgc2xvdElkeCA9IE5ld1V0aWxzLnJhbmRvbUludEluY2x1c2l2ZSgwLCA3KTtcbiAgICAgICAgICAgIGlmIChzcGFjZUluZm9bc2xvdElkeF0gPT09IDApIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICByZXN1bHRbc2xvdElkeF0ucHVzaChhbGxOZXdDb2luLnNoaWZ0KCkpO1xuICAgICAgICAgICAgc3BhY2VJbmZvW3Nsb3RJZHhdLS07XG4gICAgICAgIH0gd2hpbGUgKGFsbE5ld0NvaW4ubGVuZ3RoID4gMClcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuXG4gICAgfVxuXG4gICAgLy8g5bCP5LqOMTXnmoTnrZbnlaVcbiAgICBwcm9kdWNlU3RyYXRlZ3lGb3VyKG1heDogbnVtYmVyLCBzcGFjZTogbnVtYmVyKTogbnVtYmVyW11bXSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCfnrZbnlaUxOjwxNScpO1xuXG4gICAgICAgIC8vIOWcuuaZr+S4reacgOWwj+WAvFxuICAgICAgICBsZXQgbWluID0gTWF0aC5taW4oNiwgdGhpcy5nZXRNaW5WYWx1ZSgpKTtcblxuICAgICAgICAvLyDmgLvlhbHpnIDopoHnlJ/miJDnmoTmlbDlrZfmlbDph49cbiAgICAgICAgbGV0IHRvdGFsQ250ID0gTWF0aC5mbG9vcihNYXRoLm1pbigyMCwgc3BhY2UgKiAwLjcpKTtcbiAgICAgICAgaWYgKHRvdGFsQ250ID09PSAwKSB0b3RhbENudCA9IDE7XG5cbiAgICAgICAgY29uc3QgbGltaXRNYXggPSBNYXRoLm1pbihtYXgtMSwgOSk7XG5cbiAgICAgICAgLy8g55Sf5oiQ5pWw5a2X55qE57G75Z6L5pWw6YePIG1pbn45XG4gICAgICAgIGxldCB0eXBlQ250ID0gdG90YWxDbnQgPj0gMyA/IDMgOiB0b3RhbENudDtcblxuICAgICAgICAvLyDmlbDlrZfnp43nsbtcbiAgICAgICAgY29uc3QgdHlwZXMgPSBOZXdVdGlscy5yYW5kb21JbnRBcnJGcm9tU2VjdGlvbih0eXBlQ250LCBtaW4sIGxpbWl0TWF4KTtcblxuICAgICAgICAvLyDnlJ/miJDlhajpg6jnmoTpmo/mnLrnrbnnoIHlgLxcbiAgICAgICAgbGV0IGFsbE5ld0NvaW4gPSBOZXdVdGlscy5yYW5kb21JbnRBcnJGcm9tQXJyKHRvdGFsQ250LCB0eXBlcyk7XG5cbiAgICAgICAgLy8g56Gu5a6a5b2T5YmN55qE5Ymp5L2Z56m66Ze05oOF5Ya1XG4gICAgICAgIGxldCBzcGFjZUluZm8gPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHBlclNsb3RTcGFjZSA9IHRoaXMuZ2V0U3BhY2VCeVNsb3QoaSk7XG4gICAgICAgICAgICBzcGFjZUluZm8ucHVzaChwZXJTbG90U3BhY2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g6ZqP5py65bCG5bey57uP55Sf5oiQ55qE5pWw5a2X5aGr5YWF5Yiw55u45bqU55qE56m65L2N572u5aSEKOS4gOWumuaYr+WPr+S7peaUvuW+l+S4i+eahO+8jOWJqeS9meepuumXtD4955Sf5oiQ55qE5pWw5a2X5pWw6YePKVxuICAgICAgICBjb25zdCByZXN1bHQgPSBbW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdXTtcbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgY29uc3Qgc2xvdElkeCA9IE5ld1V0aWxzLnJhbmRvbUludEluY2x1c2l2ZSgwLCA3KTtcbiAgICAgICAgICAgIGlmIChzcGFjZUluZm9bc2xvdElkeF0gPT09IDApIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICByZXN1bHRbc2xvdElkeF0ucHVzaChhbGxOZXdDb2luLnNoaWZ0KCkpO1xuICAgICAgICAgICAgc3BhY2VJbmZvW3Nsb3RJZHhdLS07XG4gICAgICAgIH0gd2hpbGUgKGFsbE5ld0NvaW4ubGVuZ3RoID4gMClcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIC8vIFRPRE86IOaWsOeUn+aIkOeahOaVsOaNruWSjOWOn+acieaVsOaNrui/m+ihjOWQiOaIkFxuICAgIG1lcmdlUHJvZHVjZURhdGEobmV3RGF0YTogbnVtYmVyW11bXSk6IHZvaWQge1xuICAgICAgICBmb3IgKGxldCBzbG90SWR4ID0gMDsgc2xvdElkeCA8IDg7IHNsb3RJZHgrKykge1xuICAgICAgICAgICAgY29uc3QgbmV3U2xvdERhdGEgPSBOZXdVdGlscy5kZWVwQ2xvbmUobmV3RGF0YVtzbG90SWR4XSk7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zbG90RGF0YVtzbG90SWR4XVtqXSA9PT0gMCAmJiBuZXdTbG90RGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0NvaW5EYXRhID0gbmV3U2xvdERhdGEuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zbG90RGF0YVtzbG90SWR4XVtqXSA9IG5ld0NvaW5EYXRhO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBjb25zdCBnYW1lTW9kdWxlID0gbmV3IEdhbWVNb2R1bGUoKTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/common/Global.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e5a2eiI6s1HF571App3AA0M', 'Global');
// script/common/Global.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalEvent = exports.Global = void 0;
var Global = /** @class */ (function (_super) {
    __extends(Global, _super);
    function Global() {
        return _super.call(this) || this;
    }
    Global.Instance = new Global();
    return Global;
}(cc.EventTarget));
exports.Global = Global;
exports.GlobalEvent = Global.Instance;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvY29tbW9uL0dsb2JhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBNEIsMEJBQWM7SUFHdEM7ZUFDSSxpQkFBTztJQUNYLENBQUM7SUFKc0IsZUFBUSxHQUFVLElBQUksTUFBTSxFQUFFLENBQUM7SUFLMUQsYUFBQztDQU5ELEFBTUMsQ0FOMkIsRUFBRSxDQUFDLFdBQVcsR0FNekM7QUFOWSx3QkFBTTtBQVFOLFFBQUEsV0FBVyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgR2xvYmFsIGV4dGVuZHMgY2MuRXZlbnRUYXJnZXQge1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgSW5zdGFuY2U6R2xvYmFsID0gbmV3IEdsb2JhbCgpO1xuXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBHbG9iYWxFdmVudCA9IEdsb2JhbC5JbnN0YW5jZTsiXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/common/comp/NumberAction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7ec2d0pX1BF85jcim699QoK', 'NumberAction');
// script/common/comp/NumberAction.ts

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
var Utils_1 = require("../../utils/Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NumberAction = /** @class */ (function (_super) {
    __extends(NumberAction, _super);
    function NumberAction() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.targetNumber = 0;
        _this.startNum = 0;
        _this.startTime = 0;
        _this.duration = 0;
        _this.playing = false;
        _this.colorBackup = null;
        _this.scaleBackup = null;
        _this.targetColor = null;
        return _this;
    }
    NumberAction_1 = NumberAction;
    /**
     *
     * @param labelNode label所在的node
     * @param targetNumber 目标数字
     * @param duration 毫秒
     */
    NumberAction.prototype.onLoad = function () {
        // this.label = this.node.getComponent(cc.Label);
        // this.colorBackup = this.label.node.color;
        // this.scaleBackup = cc.v2(this.label.node.scaleX, this.label.node.scaleY);
    };
    NumberAction.numberTo = function (labelNode, targetNumber, duration, color) {
        if (duration === void 0) { duration = 300; }
        var label = labelNode.getComponent(cc.Label);
        if (!label) {
            return;
        }
        var numberAction = labelNode.getComponent(NumberAction_1);
        if (!numberAction) {
            numberAction = labelNode.addComponent(NumberAction_1);
        }
        numberAction.numberTo(targetNumber, duration, color);
    };
    NumberAction.prototype.numberTo = function (targetNumber, duration, color) {
        if (duration === void 0) { duration = 300; }
        if (!this.label) {
            this.label = this.node.getComponent(cc.Label);
            this.colorBackup = this.label.node.color;
            this.scaleBackup = cc.v2(this.label.node.scaleX, this.label.node.scaleY);
        }
        if (targetNumber == ~~this.label.string) {
            return;
        }
        this.targetNumber = targetNumber;
        this.duration = duration;
        this.startNum = Utils_1.Utils.isNum(this.label.string) ? Number(this.label.string) : 0;
        this.startTime = (new Date()).getTime();
        this.playing = true;
        if (!!color) {
            this.targetColor = color;
            this.label.node.color = color;
            this.label.node.scaleX = this.scaleBackup.x * 1.2;
            this.label.node.scaleY = this.scaleBackup.y * 1.2;
        }
    };
    NumberAction.prototype.checkColor = function (c1, c2) {
        if (c1.getA() != c2.getA()) {
            return false;
        }
        if (c1.getB() != c2.getB()) {
            return false;
        }
        if (c1.getG() != c2.getG()) {
            return false;
        }
        if (c1.getR() != c2.getR()) {
            return false;
        }
    };
    NumberAction.prototype.update = function (dt) {
        if (!this.label) {
            return;
        }
        if (!this.playing) {
            return;
        }
        var curTime = (new Date()).getTime();
        if (curTime >= this.startTime + this.duration) {
            this.label.node.color = this.colorBackup;
            this.label.string = "" + this.targetNumber;
            this.label.node.scaleX = this.scaleBackup.x;
            this.label.node.scaleY = this.scaleBackup.y;
            this.playing = false;
            return;
        }
        //todo::为什么要每桢都设置目标色才能实现变化是变色，是谁在捣乱
        if (!!this.targetColor) {
            this.label.node.color = this.targetColor;
        }
        var ratio = (curTime - this.startTime) / this.duration;
        var curNum = this.startNum + (this.targetNumber - this.startNum) * ratio;
        this.label.string = "" + Math.floor(curNum);
    };
    var NumberAction_1;
    NumberAction = NumberAction_1 = __decorate([
        ccclass
    ], NumberAction);
    return NumberAction;
}(cc.Component));
exports.default = NumberAction;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvY29tbW9uL2NvbXAvTnVtYmVyQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUEwQztBQUVwQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUEwQyxnQ0FBWTtJQUF0RDtRQUFBLHFFQWdHQztRQS9GVSxXQUFLLEdBQWEsSUFBSSxDQUFDO1FBQ3ZCLGtCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBQ3pCLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsZUFBUyxHQUFXLENBQUMsQ0FBQztRQUN0QixjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBQ3JCLGFBQU8sR0FBWSxLQUFLLENBQUM7UUFDekIsaUJBQVcsR0FBYSxJQUFJLENBQUM7UUFDN0IsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFDNUIsaUJBQVcsR0FBYSxJQUFJLENBQUM7O0lBdUZ4QyxDQUFDO3FCQWhHb0IsWUFBWTtJQVU3Qjs7Ozs7T0FLRztJQUNILDZCQUFNLEdBQU47UUFDSSxpREFBaUQ7UUFDakQsNENBQTRDO1FBQzVDLDRFQUE0RTtJQUNoRixDQUFDO0lBQ2EscUJBQVEsR0FBdEIsVUFBdUIsU0FBa0IsRUFBRSxZQUFvQixFQUFFLFFBQXNCLEVBQUUsS0FBZ0I7UUFBeEMseUJBQUEsRUFBQSxjQUFzQjtRQUNuRixJQUFJLEtBQUssR0FBRyxTQUFTLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1IsT0FBTztTQUNWO1FBQ0QsSUFBSSxZQUFZLEdBQUcsU0FBUyxDQUFDLFlBQVksQ0FBQyxjQUFZLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ2YsWUFBWSxHQUFHLFNBQVMsQ0FBQyxZQUFZLENBQUMsY0FB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c291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVdGlscyB9IGZyb20gXCIuLi8uLi91dGlscy9VdGlsc1wiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTnVtYmVyQWN0aW9uIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBwdWJsaWMgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBwdWJsaWMgdGFyZ2V0TnVtYmVyOiBudW1iZXIgPSAwO1xuICAgIHB1YmxpYyBzdGFydE51bTogbnVtYmVyID0gMDtcbiAgICBwdWJsaWMgc3RhcnRUaW1lOiBudW1iZXIgPSAwO1xuICAgIHB1YmxpYyBkdXJhdGlvbjogbnVtYmVyID0gMDtcbiAgICBwdWJsaWMgcGxheWluZzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHB1YmxpYyBjb2xvckJhY2t1cDogY2MuQ29sb3IgPSBudWxsO1xuICAgIHB1YmxpYyBzY2FsZUJhY2t1cDogY2MuVmVjMiA9IG51bGw7XG4gICAgcHVibGljIHRhcmdldENvbG9yOiBjYy5Db2xvciA9IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHBhcmFtIGxhYmVsTm9kZSBsYWJlbOaJgOWcqOeahG5vZGVcbiAgICAgKiBAcGFyYW0gdGFyZ2V0TnVtYmVyIOebruagh+aVsOWtl1xuICAgICAqIEBwYXJhbSBkdXJhdGlvbiDmr6vnp5JcbiAgICAgKi9cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIC8vIHRoaXMubGFiZWwgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgLy8gdGhpcy5jb2xvckJhY2t1cCA9IHRoaXMubGFiZWwubm9kZS5jb2xvcjtcbiAgICAgICAgLy8gdGhpcy5zY2FsZUJhY2t1cCA9IGNjLnYyKHRoaXMubGFiZWwubm9kZS5zY2FsZVgsIHRoaXMubGFiZWwubm9kZS5zY2FsZVkpO1xuICAgIH1cbiAgICBwdWJsaWMgc3RhdGljIG51bWJlclRvKGxhYmVsTm9kZTogY2MuTm9kZSwgdGFyZ2V0TnVtYmVyOiBudW1iZXIsIGR1cmF0aW9uOiBudW1iZXIgPSAzMDAsIGNvbG9yPzogY2MuQ29sb3IpIHtcbiAgICAgICAgbGV0IGxhYmVsID0gbGFiZWxOb2RlLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgIGlmICghbGFiZWwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbnVtYmVyQWN0aW9uID0gbGFiZWxOb2RlLmdldENvbXBvbmVudChOdW1iZXJBY3Rpb24pO1xuICAgICAgICBpZiAoIW51bWJlckFjdGlvbikge1xuICAgICAgICAgICAgbnVtYmVyQWN0aW9uID0gbGFiZWxOb2RlLmFkZENvbXBvbmVudChOdW1iZXJBY3Rpb24pO1xuICAgICAgICB9XG4gICAgICAgIG51bWJlckFjdGlvbi5udW1iZXJUbyh0YXJnZXROdW1iZXIsIGR1cmF0aW9uLCBjb2xvcik7XG4gICAgfVxuXG4gICAgcHVibGljIG51bWJlclRvKHRhcmdldE51bWJlcjogbnVtYmVyLCBkdXJhdGlvbjogbnVtYmVyID0gMzAwLCBjb2xvcj86IGNjLkNvbG9yKSB7XG4gICAgICAgIGlmICghdGhpcy5sYWJlbCkge1xuICAgICAgICAgICAgdGhpcy5sYWJlbCA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAgICAgdGhpcy5jb2xvckJhY2t1cCA9IHRoaXMubGFiZWwubm9kZS5jb2xvcjtcbiAgICAgICAgICAgIHRoaXMuc2NhbGVCYWNrdXAgPSBjYy52Mih0aGlzLmxhYmVsLm5vZGUuc2NhbGVYLCB0aGlzLmxhYmVsLm5vZGUuc2NhbGVZKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGFyZ2V0TnVtYmVyID09IH5+dGhpcy5sYWJlbC5zdHJpbmcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRhcmdldE51bWJlciA9IHRhcmdldE51bWJlcjtcbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IGR1cmF0aW9uO1xuXG4gICAgICAgIHRoaXMuc3RhcnROdW0gPSBVdGlscy5pc051bSh0aGlzLmxhYmVsLnN0cmluZykgPyBOdW1iZXIodGhpcy5sYWJlbC5zdHJpbmcpIDogMDtcbiAgICAgICAgdGhpcy5zdGFydFRpbWUgPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpO1xuICAgICAgICB0aGlzLnBsYXlpbmcgPSB0cnVlO1xuICAgICAgICBpZiAoISFjb2xvcikge1xuICAgICAgICAgICAgdGhpcy50YXJnZXRDb2xvciA9IGNvbG9yO1xuICAgICAgICAgICAgdGhpcy5sYWJlbC5ub2RlLmNvbG9yID0gY29sb3I7XG5cbiAgICAgICAgICAgIHRoaXMubGFiZWwubm9kZS5zY2FsZVggPSB0aGlzLnNjYWxlQmFja3VwLnggKiAxLjI7XG4gICAgICAgICAgICB0aGlzLmxhYmVsLm5vZGUuc2NhbGVZID0gdGhpcy5zY2FsZUJhY2t1cC55ICogMS4yO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tDb2xvcihjMTogY2MuQ29sb3IsIGMyOiBjYy5Db2xvcikge1xuICAgICAgICBpZiAoYzEuZ2V0QSgpICE9IGMyLmdldEEoKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjMS5nZXRCKCkgIT0gYzIuZ2V0QigpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGMxLmdldEcoKSAhPSBjMi5nZXRHKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYzEuZ2V0UigpICE9IGMyLmdldFIoKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVwZGF0ZShkdDogTnVtYmVyKSB7XG4gICAgICAgIGlmICghdGhpcy5sYWJlbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5wbGF5aW5nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGN1clRpbWUgPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpO1xuICAgICAgICBpZiAoY3VyVGltZSA+PSB0aGlzLnN0YXJ0VGltZSArIHRoaXMuZHVyYXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMubGFiZWwubm9kZS5jb2xvciA9IHRoaXMuY29sb3JCYWNrdXA7XG4gICAgICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9IFwiXCIgKyB0aGlzLnRhcmdldE51bWJlcjtcbiAgICAgICAgICAgIHRoaXMubGFiZWwubm9kZS5zY2FsZVggPSB0aGlzLnNjYWxlQmFja3VwLng7XG4gICAgICAgICAgICB0aGlzLmxhYmVsLm5vZGUuc2NhbGVZID0gdGhpcy5zY2FsZUJhY2t1cC55O1xuICAgICAgICAgICAgdGhpcy5wbGF5aW5nID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy90b2RvOjrkuLrku4DkuYjopoHmr4/moaLpg73orr7nva7nm67moIfoibLmiY3og73lrp7njrDlj5jljJbmmK/lj5joibLvvIzmmK/osIHlnKjmjaPkubFcbiAgICAgICAgaWYgKCEhdGhpcy50YXJnZXRDb2xvcikge1xuICAgICAgICAgICAgdGhpcy5sYWJlbC5ub2RlLmNvbG9yID0gdGhpcy50YXJnZXRDb2xvcjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmF0aW8gPSAoY3VyVGltZSAtIHRoaXMuc3RhcnRUaW1lKSAvIHRoaXMuZHVyYXRpb247XG4gICAgICAgIGxldCBjdXJOdW0gPSB0aGlzLnN0YXJ0TnVtICsgKHRoaXMudGFyZ2V0TnVtYmVyIC0gdGhpcy5zdGFydE51bSkgKiByYXRpbztcbiAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSBcIlwiICsgTWF0aC5mbG9vcihjdXJOdW0pO1xuICAgIH1cblxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/game/common/BundleResourceList.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7e07cozcFZNV69G9CojIjlx', 'BundleResourceList');
// script/game/common/BundleResourceList.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BundleResourceList = /** @class */ (function (_super) {
    __extends(BundleResourceList, _super);
    function BundleResourceList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.prefab_eff_boom = null;
        return _this;
    }
    __decorate([
        property(cc.Prefab)
    ], BundleResourceList.prototype, "prefab_eff_boom", void 0);
    BundleResourceList = __decorate([
        ccclass
    ], BundleResourceList);
    return BundleResourceList;
}(cc.Component));
exports.default = BundleResourceList;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZ2FtZS9jb21tb24vQnVuZGxlUmVzb3VyY2VMaXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWdELHNDQUFZO0lBQTVEO1FBQUEscUVBSUM7UUFERyxxQkFBZSxHQUFhLElBQUksQ0FBQzs7SUFDckMsQ0FBQztJQURHO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7K0RBQ2E7SUFIaEIsa0JBQWtCO1FBRHRDLE9BQU87T0FDYSxrQkFBa0IsQ0FJdEM7SUFBRCx5QkFBQztDQUpELEFBSUMsQ0FKK0MsRUFBRSxDQUFDLFNBQVMsR0FJM0Q7a0JBSm9CLGtCQUFrQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdW5kbGVSZXNvdXJjZUxpc3QgZXh0ZW5kcyBjYy5Db21wb25lbnQgeyAgIFxuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwcmVmYWJfZWZmX2Jvb206Y2MuUHJlZmFiID0gbnVsbDtcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/common/effect/SpriteToHome.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a568bfXKBlMAZhMOOrBp75A', 'SpriteToHome');
// script/common/effect/SpriteToHome.ts

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
var Utils_1 = require("../../utils/Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SpriteToHome = /** @class */ (function (_super) {
    __extends(SpriteToHome, _super);
    function SpriteToHome() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.icon = null;
        _this.withRotation = false;
        _this.endEffectPos = undefined;
        _this.spdx = 30;
        _this.spdy = 10;
        _this.groundNum = 0;
        _this.center = undefined;
        _this.status = true;
        _this.next = undefined;
        _this.toScale = 1;
        _this.aniBackOut = true;
        return _this;
    }
    SpriteToHome_1 = SpriteToHome;
    //全局计数
    // private static NumAll = 0;
    /**
     * 创建一个载体，并挂载一个乘客
     * @param passenger
     * @param startWorldPos
     * @param endWorldPos
     */
    SpriteToHome.createVehicle = function (passer, startWorldPos, endWorldPos, withRotation, next) {
        return __awaiter(this, void 0, void 0, function () {
            var vehicle, passenger, script;
            return __generator(this, function (_a) {
                vehicle = new cc.Node();
                vehicle.width = passer.width;
                vehicle.height = passer.height;
                vehicle.position = startWorldPos;
                passenger = cc.instantiate(passer);
                passenger.removeComponent(cc.Widget);
                passenger.x = 0;
                passenger.y = 0;
                passenger.parent = vehicle;
                script = vehicle.addComponent(SpriteToHome_1);
                script.next = next;
                script.withRotation = withRotation;
                script.endEffectPos = GameUtils_1.GameUtils.effectLayer.convertToNodeSpaceAR(endWorldPos);
                script.icon = passenger;
                GameUtils_1.GameUtils.addEffectAR(vehicle);
                return [2 /*return*/];
            });
        });
    };
    SpriteToHome.create = function (spriteFrame, startWorldPos, endWorldPos, withRotation, next, scale) {
        if (scale === void 0) { scale = 1; }
        return __awaiter(this, void 0, void 0, function () {
            var node, icon, sprite, script;
            return __generator(this, function (_a) {
                node = new cc.Node();
                icon = new cc.Node();
                node.addChild(icon);
                sprite = icon.addComponent(cc.Sprite);
                icon.scale = scale;
                sprite.sizeMode = cc.Sprite.SizeMode.RAW;
                sprite.spriteFrame = spriteFrame;
                script = node.addComponent(SpriteToHome_1);
                script.withRotation = withRotation;
                script.next = next;
                node.position = startWorldPos;
                script.endEffectPos = GameUtils_1.GameUtils.effectLayer.convertToNodeSpaceAR(endWorldPos);
                GameUtils_1.GameUtils.addEffectAR(node);
                return [2 /*return*/];
            });
        });
    };
    SpriteToHome.createNode = function (effNode, startWorldPos, endWorldPos, withRotation, next, toScale, aniBackOut) {
        if (toScale === void 0) { toScale = 1; }
        if (aniBackOut === void 0) { aniBackOut = true; }
        return __awaiter(this, void 0, void 0, function () {
            var node, script;
            return __generator(this, function (_a) {
                node = new cc.Node("effectNode");
                effNode.parent = node;
                effNode.position = cc.v2(0, 0);
                node.position = startWorldPos;
                script = node.addComponent(SpriteToHome_1);
                script.withRotation = withRotation;
                script.endEffectPos = GameUtils_1.GameUtils.effectLayer.convertToNodeSpaceAR(endWorldPos);
                script.next = next;
                script.toScale = toScale;
                script.aniBackOut = aniBackOut;
                GameUtils_1.GameUtils.addEffectAR(node);
                return [2 /*return*/];
            });
        });
    };
    SpriteToHome.prototype.onLoad = function () {
        var _this = this;
        // SpriteToHome.NumAll++;
        this.icon = this.node.children[0];
        var homeDuration = 0.8; // Utils.randomFloat(0.5, 1.5);
        this.node.scale = Utils_1.Utils.randomFloat(0.9, 1.1);
        cc.tween(this.node).to(homeDuration, { position: this.endEffectPos, scale: this.toScale }, { easing: cc.easing.sineIn }).call(function () {
            cc.tween(_this.node).to(0.2, { opacity: 0, scale: 1.4 }, { easing: cc.easing.sineOut }).call(function () {
                _this.icon.stopAllActions();
                _this.node.stopAllActions();
                Utils_1.Utils.removeNode(_this.node);
            }).start();
            _this.next && _this.next();
        }).start();
        if (this.withRotation) {
            this.icon.angle = 180;
        }
        // let p = { x: Utils.randomIntInclusive(-150, 150) };
        // if (this.withRotation) {
        //     p["angle"] = 90;
        // }
        // cc.tween(this.icon).to(homeDuration * 0.3, p, { easing: "sineOut" }).call(() => {
        //     p = { x: 0 };
        //     if (this.withRotation) {
        //         p["angle"] = 0;
        //     }
        //     cc.tween(this.icon).to(homeDuration * 0.7, p, { easing: "sineIn" }).start();
        // }).start();
        // let deltaV = this.endEffectPos.y - this.node.y;
        if (this.aniBackOut) {
            cc.tween(this.icon)
                .to(homeDuration * 0.3, { y: -200 }, { easing: cc.easing.sineInOut })
                .to(homeDuration * 0.7, { y: 0 }, { easing: cc.easing.sineIn })
                .start();
        }
    };
    var SpriteToHome_1;
    SpriteToHome = SpriteToHome_1 = __decorate([
        ccclass
    ], SpriteToHome);
    return SpriteToHome;
}(cc.Component));
exports.default = SpriteToHome;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvY29tbW9uL2VmZmVjdC9TcHJpdGVUb0hvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsa0RBQWlEO0FBQ2pELDJDQUEwQztBQUVwQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUEwQyxnQ0FBWTtJQUF0RDtRQUFBLHFFQThHQztRQWpERyxVQUFJLEdBQVksSUFBSSxDQUFDO1FBQ3JCLGtCQUFZLEdBQVksS0FBSyxDQUFDO1FBQzlCLGtCQUFZLEdBQVksU0FBUyxDQUFDO1FBQ2xDLFVBQUksR0FBVyxFQUFFLENBQUM7UUFDbEIsVUFBSSxHQUFXLEVBQUUsQ0FBQztRQUNsQixlQUFTLEdBQVcsQ0FBQyxDQUFDO1FBQ3RCLFlBQU0sR0FBWSxTQUFTLENBQUM7UUFDNUIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUN2QixVQUFJLEdBQWEsU0FBUyxDQUFDO1FBQzNCLGFBQU8sR0FBVyxDQUFDLENBQUM7UUFDcEIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7O0lBdUMvQixDQUFDO3FCQTlHb0IsWUFBWTtJQUU3QixNQUFNO0lBQ04sNkJBQTZCO0lBQzdCOzs7OztPQUtHO0lBQ2lCLDBCQUFhLEdBQWpDLFVBQWtDLE1BQWUsRUFBRSxhQUFzQixFQUFFLFdBQW9CLEVBQUUsWUFBcUIsRUFBRSxJQUFjOzs7O2dCQUM5SCxPQUFPLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQzVCLE9BQU8sQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztnQkFDN0IsT0FBTyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO2dCQUMvQixPQUFPLENBQUMsUUFBUSxHQUFHLGFBQWEsQ0FB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QUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNYLEtBQUksQ0FBQyxJQUFJLElBQUksS0FBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRVgsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztTQUN6QjtRQUVELHNEQUFzRDtRQUN0RCwyQkFBMkI7UUFDM0IsdUJBQXVCO1FBQ3ZCLElBQUk7UUFDSixvRkFBb0Y7UUFDcEYsb0JBQW9CO1FBQ3BCLCtCQUErQjtRQUMvQiwwQkFBMEI7UUFDMUIsUUFBUTtRQUNSLG1GQUFtRjtRQUNuRixjQUFjO1FBQ2Qsa0RBQWtEO1FBQ2xELElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNqQixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7aUJBQ2QsRUFBRSxDQUFDLFlBQVksR0FBRyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO2lCQUNwRSxFQUFFLENBQUMsWUFBWSxHQUFHLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO2lCQUM5RCxLQUFLLEVBQUUsQ0FBQztTQUNoQjtJQUNMLENBQUM7O0lBN0dnQixZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBOEdoQztJQUFELG1CQUFDO0NBOUdELEFBOEdDLENBOUd5QyxFQUFFLENBQUMsU0FBUyxHQThHckQ7a0JBOUdvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2FtZVV0aWxzIH0gZnJvbSBcIi4uLy4uL2dhbWUvR2FtZVV0aWxzXCI7XG5pbXBvcnQgeyBVdGlscyB9IGZyb20gXCIuLi8uLi91dGlscy9VdGlsc1wiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3ByaXRlVG9Ib21lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIC8v5YWo5bGA6K6h5pWwXG4gICAgLy8gcHJpdmF0ZSBzdGF0aWMgTnVtQWxsID0gMDtcbiAgICAvKipcbiAgICAgKiDliJvlu7rkuIDkuKrovb3kvZPvvIzlubbmjILovb3kuIDkuKrkuZjlrqJcbiAgICAgKiBAcGFyYW0gcGFzc2VuZ2VyIFxuICAgICAqIEBwYXJhbSBzdGFydFdvcmxkUG9zIFxuICAgICAqIEBwYXJhbSBlbmRXb3JsZFBvcyBcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGNyZWF0ZVZlaGljbGUocGFzc2VyOiBjYy5Ob2RlLCBzdGFydFdvcmxkUG9zOiBjYy5WZWMyLCBlbmRXb3JsZFBvczogY2MuVmVjMiwgd2l0aFJvdGF0aW9uOiBib29sZWFuLCBuZXh0OiBGdW5jdGlvbikge1xuICAgICAgICBsZXQgdmVoaWNsZSA9IG5ldyBjYy5Ob2RlKCk7XG4gICAgICAgIHZlaGljbGUud2lkdGggPSBwYXNzZXIud2lkdGg7XG4gICAgICAgIHZlaGljbGUuaGVpZ2h0ID0gcGFzc2VyLmhlaWdodDtcbiAgICAgICAgdmVoaWNsZS5wb3NpdGlvbiA9IHN0YXJ0V29ybGRQb3M7XG5cbiAgICAgICAgbGV0IHBhc3NlbmdlciA9IGNjLmluc3RhbnRpYXRlKHBhc3Nlcik7XG4gICAgICAgIHBhc3Nlbmdlci5yZW1vdmVDb21wb25lbnQoY2MuV2lkZ2V0KTtcbiAgICAgICAgcGFzc2VuZ2VyLnggPSAwO1xuICAgICAgICBwYXNzZW5nZXIueSA9IDA7XG4gICAgICAgIHBhc3Nlbmdlci5wYXJlbnQgPSB2ZWhpY2xlO1xuXG4gICAgICAgIGxldCBzY3JpcHQ6IFNwcml0ZVRvSG9tZSA9IHZlaGljbGUuYWRkQ29tcG9uZW50KFNwcml0ZVRvSG9tZSk7XG4gICAgICAgIHNjcmlwdC5uZXh0ID0gbmV4dDtcbiAgICAgICAgc2NyaXB0LndpdGhSb3RhdGlvbiA9IHdpdGhSb3RhdGlvbjtcbiAgICAgICAgc2NyaXB0LmVuZEVmZmVjdFBvcyA9IEdhbWVVdGlscy5lZmZlY3RMYXllci5jb252ZXJ0VG9Ob2RlU3BhY2VBUihlbmRXb3JsZFBvcyk7XG4gICAgICAgIHNjcmlwdC5pY29uID0gcGFzc2VuZ2VyO1xuICAgICAgICBHYW1lVXRpbHMuYWRkRWZmZWN0QVIodmVoaWNsZSk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBjcmVhdGUoc3ByaXRlRnJhbWU6IGNjLlNwcml0ZUZyYW1lLCBzdGFydFdvcmxkUG9zOiBjYy5WZWMyLCBlbmRXb3JsZFBvczogY2MuVmVjMiwgd2l0aFJvdGF0aW9uOiBib29sZWFuLCBuZXh0PzogRnVuY3Rpb24sIHNjYWxlOiBudW1iZXIgPSAxKSB7XG4gICAgICAgIGxldCBub2RlID0gbmV3IGNjLk5vZGUoKTtcbiAgICAgICAgbGV0IGljb24gPSBuZXcgY2MuTm9kZSgpO1xuICAgICAgICBub2RlLmFkZENoaWxkKGljb24pO1xuICAgICAgICBsZXQgc3ByaXRlID0gaWNvbi5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgaWNvbi5zY2FsZSA9IHNjYWxlO1xuICAgICAgICBzcHJpdGUuc2l6ZU1vZGUgPSBjYy5TcHJpdGUuU2l6ZU1vZGUuUkFXO1xuICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcbiAgICAgICAgbGV0IHNjcmlwdDogU3ByaXRlVG9Ib21lID0gbm9kZS5hZGRDb21wb25lbnQoU3ByaXRlVG9Ib21lKTtcbiAgICAgICAgc2NyaXB0LndpdGhSb3RhdGlvbiA9IHdpdGhSb3RhdGlvbjtcbiAgICAgICAgc2NyaXB0Lm5leHQgPSBuZXh0O1xuICAgICAgICBub2RlLnBvc2l0aW9uID0gc3RhcnRXb3JsZFBvcztcbiAgICAgICAgc2NyaXB0LmVuZEVmZmVjdFBvcyA9IEdhbWVVdGlscy5lZmZlY3RMYXllci5jb252ZXJ0VG9Ob2RlU3BhY2VBUihlbmRXb3JsZFBvcyk7XG4gICAgICAgIEdhbWVVdGlscy5hZGRFZmZlY3RBUihub2RlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGNyZWF0ZU5vZGUoZWZmTm9kZTogY2MuTm9kZSwgc3RhcnRXb3JsZFBvczogY2MuVmVjMiwgZW5kV29ybGRQb3M6IGNjLlZlYzIsIHdpdGhSb3RhdGlvbjogYm9vbGVhbiwgbmV4dD86IEZ1bmN0aW9uLCB0b1NjYWxlOiBudW1iZXIgPSAxLCBhbmlCYWNrT3V0OiBib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBsZXQgbm9kZSA9IG5ldyBjYy5Ob2RlKFwiZWZmZWN0Tm9kZVwiKTtcblxuICAgICAgICBlZmZOb2RlLnBhcmVudCA9IG5vZGU7XG4gICAgICAgIGVmZk5vZGUucG9zaXRpb24gPSBjYy52MigwLCAwKTtcbiAgICAgICAgbm9kZS5wb3NpdGlvbiA9IHN0YXJ0V29ybGRQb3M7XG4gICAgICAgIGxldCBzY3JpcHQ6IFNwcml0ZVRvSG9tZSA9IG5vZGUuYWRkQ29tcG9uZW50KFNwcml0ZVRvSG9tZSk7XG4gICAgICAgIHNjcmlwdC53aXRoUm90YXRpb24gPSB3aXRoUm90YXRpb247XG4gICAgICAgIHNjcmlwdC5lbmRFZmZlY3RQb3MgPSBHYW1lVXRpbHMuZWZmZWN0TGF5ZXIuY29udmVydFRvTm9kZVNwYWNlQVIoZW5kV29ybGRQb3MpO1xuICAgICAgICBzY3JpcHQubmV4dCA9IG5leHQ7XG4gICAgICAgIHNjcmlwdC50b1NjYWxlID0gdG9TY2FsZTtcbiAgICAgICAgc2NyaXB0LmFuaUJhY2tPdXQgPSBhbmlCYWNrT3V0O1xuICAgICAgICBHYW1lVXRpbHMuYWRkRWZmZWN0QVIobm9kZSk7XG4gICAgfVxuXG4gICAgaWNvbjogY2MuTm9kZSA9IG51bGw7XG4gICAgd2l0aFJvdGF0aW9uOiBib29sZWFuID0gZmFsc2U7XG4gICAgZW5kRWZmZWN0UG9zOiBjYy5WZWMyID0gdW5kZWZpbmVkO1xuICAgIHNwZHg6IG51bWJlciA9IDMwO1xuICAgIHNwZHk6IG51bWJlciA9IDEwO1xuICAgIGdyb3VuZE51bTogbnVtYmVyID0gMDtcbiAgICBjZW50ZXI6IGNjLlZlYzIgPSB1bmRlZmluZWQ7XG4gICAgc3RhdHVzOiBib29sZWFuID0gdHJ1ZTtcbiAgICBuZXh0OiBGdW5jdGlvbiA9IHVuZGVmaW5lZDtcbiAgICB0b1NjYWxlOiBudW1iZXIgPSAxO1xuICAgIGFuaUJhY2tPdXQ6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICAvLyBTcHJpdGVUb0hvbWUuTnVtQWxsKys7XG4gICAgICAgIHRoaXMuaWNvbiA9IHRoaXMubm9kZS5jaGlsZHJlblswXTtcbiAgICAgICAgbGV0IGhvbWVEdXJhdGlvbiA9IDAuODsvLyBVdGlscy5yYW5kb21GbG9hdCgwLjUsIDEuNSk7XG4gICAgICAgIHRoaXMubm9kZS5zY2FsZSA9IFV0aWxzLnJhbmRvbUZsb2F0KDAuOSwgMS4xKTtcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKS50byhob21lRHVyYXRpb24sIHsgcG9zaXRpb246IHRoaXMuZW5kRWZmZWN0UG9zLCBzY2FsZTogdGhpcy50b1NjYWxlIH0sIHsgZWFzaW5nOiBjYy5lYXNpbmcuc2luZUluIH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKS50bygwLjIsIHsgb3BhY2l0eTogMCwgc2NhbGU6IDEuNCB9LCB7IGVhc2luZzogY2MuZWFzaW5nLnNpbmVPdXQgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pY29uLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgICAgICAgICAgVXRpbHMucmVtb3ZlTm9kZSh0aGlzLm5vZGUpO1xuICAgICAgICAgICAgfSkuc3RhcnQoKTtcbiAgICAgICAgICAgIHRoaXMubmV4dCAmJiB0aGlzLm5leHQoKTtcbiAgICAgICAgfSkuc3RhcnQoKTtcblxuICAgICAgICBpZiAodGhpcy53aXRoUm90YXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuaWNvbi5hbmdsZSA9IDE4MDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGxldCBwID0geyB4OiBVdGlscy5yYW5kb21JbnRJbmNsdXNpdmUoLTE1MCwgMTUwKSB9O1xuICAgICAgICAvLyBpZiAodGhpcy53aXRoUm90YXRpb24pIHtcbiAgICAgICAgLy8gICAgIHBbXCJhbmdsZVwiXSA9IDkwO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGNjLnR3ZWVuKHRoaXMuaWNvbikudG8oaG9tZUR1cmF0aW9uICogMC4zLCBwLCB7IGVhc2luZzogXCJzaW5lT3V0XCIgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgIC8vICAgICBwID0geyB4OiAwIH07XG4gICAgICAgIC8vICAgICBpZiAodGhpcy53aXRoUm90YXRpb24pIHtcbiAgICAgICAgLy8gICAgICAgICBwW1wiYW5nbGVcIl0gPSAwO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyAgICAgY2MudHdlZW4odGhpcy5pY29uKS50byhob21lRHVyYXRpb24gKiAwLjcsIHAsIHsgZWFzaW5nOiBcInNpbmVJblwiIH0pLnN0YXJ0KCk7XG4gICAgICAgIC8vIH0pLnN0YXJ0KCk7XG4gICAgICAgIC8vIGxldCBkZWx0YVYgPSB0aGlzLmVuZEVmZmVjdFBvcy55IC0gdGhpcy5ub2RlLnk7XG4gICAgICAgIGlmICh0aGlzLmFuaUJhY2tPdXQpIHtcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuaWNvbilcbiAgICAgICAgICAgICAgICAudG8oaG9tZUR1cmF0aW9uICogMC4zLCB7IHk6IC0yMDAgfSwgeyBlYXNpbmc6IGNjLmVhc2luZy5zaW5lSW5PdXQgfSlcbiAgICAgICAgICAgICAgICAudG8oaG9tZUR1cmF0aW9uICogMC43LCB7IHk6IDAgfSwgeyBlYXNpbmc6IGNjLmVhc2luZy5zaW5lSW4gfSlcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/common/consts/GlobalDefines.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dbdbbGrYxVIuKj0/0ClKX3D', 'GlobalDefines');
// script/common/consts/GlobalDefines.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadStatus = exports.GlobalDefines = void 0;
var GlobalDefines = /** @class */ (function () {
    function GlobalDefines() {
    }
    Object.defineProperty(GlobalDefines, "ScreenWidth", {
        get: function () {
            return this.Design_Width;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlobalDefines, "ScreenHeight", {
        get: function () {
            var rate = this.Design_Width / this.WindowWidth;
            return this.WindowHeight * rate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlobalDefines, "SafeAreaHeight", {
        get: function () {
            return this.ScreenHeight - this.MenuButtonLogic.top - this.MenuButtonLogic.height;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlobalDefines, "wsRate", {
        get: function () {
            return this.WindowWidth / this.ScreenWidth;
        },
        enumerable: false,
        configurable: true
    });
    //每一天的秒数
    GlobalDefines.Second_Day = 24 * 60 * 60;
    GlobalDefines.isIos = true;
    //屏幕相关
    GlobalDefines.PixelRatio = 2;
    GlobalDefines.WindowHeight = 667;
    GlobalDefines.WindowWidth = 375;
    GlobalDefines.MenuButtonLogic = {
        width: 174,
        height: 64,
        top: 16 * 2,
        right: 730,
        bottom: 80,
        left: 556
    };
    //wx.getSystemInfoSync时赋值
    GlobalDefines.SDKVersion = "";
    GlobalDefines.platform = "";
    GlobalDefines.Design_Width = 750;
    GlobalDefines.Design_Height = 1334;
    return GlobalDefines;
}());
exports.GlobalDefines = GlobalDefines;
//资源加载状态
var LoadStatus;
(function (LoadStatus) {
    LoadStatus[LoadStatus["Doing"] = -1] = "Doing";
    LoadStatus[LoadStatus["Success"] = 0] = "Success";
    LoadStatus[LoadStatus["GameOut"] = 1] = "GameOut";
})(LoadStatus = exports.LoadStatus || (exports.LoadStatus = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvY29tbW9uL2NvbnN0cy9HbG9iYWxEZWZpbmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0lBQUE7SUF3Q0EsQ0FBQztJQWpCRyxzQkFBa0IsNEJBQVc7YUFBN0I7WUFDSSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDN0IsQ0FBQzs7O09BQUE7SUFFRCxzQkFBa0IsNkJBQVk7YUFBOUI7WUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7WUFDaEQsT0FBTyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUNwQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFrQiwrQkFBYzthQUFoQztZQUNJLE9BQU8sSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQztRQUN0RixDQUFDOzs7T0FBQTtJQUVELHNCQUFrQix1QkFBTTthQUF4QjtZQUNJLE9BQU8sSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQy9DLENBQUM7OztPQUFBO0lBckNELFFBQVE7SUFDRCx3QkFBVSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDO0lBQzFCLG1CQUFLLEdBQVksSUFBSSxDQUFDO0lBQzdCLE1BQU07SUFDQyx3QkFBVSxHQUFHLENBQUMsQ0FBQztJQUNmLDBCQUFZLEdBQUcsR0FBRyxDQUFDO0lBQ25CLHlCQUFXLEdBQUcsR0FBRyxDQUFDO0lBQ2xCLDZCQUFlLEdBQUc7UUFDckIsS0FBSyxFQUFFLEdBQUc7UUFDVixNQUFNLEVBQUUsRUFBRTtRQUNWLEdBQUcsRUFBRSxFQUFFLEdBQUcsQ0FBQztRQUNYLEtBQUssRUFBRSxHQUFHO1FBQ1YsTUFBTSxFQUFFLEVBQUU7UUFDVixJQUFJLEVBQUUsR0FBRztLQUNaLENBQUM7SUFDRix5QkFBeUI7SUFDbEIsd0JBQVUsR0FBVyxFQUFFLENBQUM7SUFDeEIsc0JBQVEsR0FBVyxFQUFFLENBQUM7SUFFdEIsMEJBQVksR0FBVyxHQUFHLENBQUM7SUFDM0IsMkJBQWEsR0FBVyxJQUFJLENBQUM7SUFtQnhDLG9CQUFDO0NBeENELEFBd0NDLElBQUE7QUF4Q1ksc0NBQWE7QUF5QzFCLFFBQVE7QUFDUixJQUFZLFVBSVg7QUFKRCxXQUFZLFVBQVU7SUFDbEIsOENBQVUsQ0FBQTtJQUNWLGlEQUFPLENBQUE7SUFDUCxpREFBTyxDQUFBO0FBQ1gsQ0FBQyxFQUpXLFVBQVUsR0FBVixrQkFBVSxLQUFWLGtCQUFVLFFBSXJCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmV4cG9ydCBjbGFzcyBHbG9iYWxEZWZpbmVzIHtcbiAgICAvL+avj+S4gOWkqeeahOenkuaVsFxuICAgIHN0YXRpYyBTZWNvbmRfRGF5ID0gMjQgKiA2MCAqIDYwO1xuICAgIHN0YXRpYyBpc0lvczogYm9vbGVhbiA9IHRydWU7XG4gICAgLy/lsY/luZXnm7jlhbNcbiAgICBzdGF0aWMgUGl4ZWxSYXRpbyA9IDI7XG4gICAgc3RhdGljIFdpbmRvd0hlaWdodCA9IDY2NztcbiAgICBzdGF0aWMgV2luZG93V2lkdGggPSAzNzU7XG4gICAgc3RhdGljIE1lbnVCdXR0b25Mb2dpYyA9IHtcbiAgICAgICAgd2lkdGg6IDE3NCxcbiAgICAgICAgaGVpZ2h0OiA2NCwgLy82NFxuICAgICAgICB0b3A6IDE2ICogMixcbiAgICAgICAgcmlnaHQ6IDczMCxcbiAgICAgICAgYm90dG9tOiA4MCxcbiAgICAgICAgbGVmdDogNTU2XG4gICAgfTtcbiAgICAvL3d4LmdldFN5c3RlbUluZm9TeW5j5pe26LWL5YC8XG4gICAgc3RhdGljIFNES1ZlcnNpb246IHN0cmluZyA9IFwiXCI7XG4gICAgc3RhdGljIHBsYXRmb3JtOiBzdHJpbmcgPSBcIlwiO1xuXG4gICAgc3RhdGljIERlc2lnbl9XaWR0aDogbnVtYmVyID0gNzUwO1xuICAgIHN0YXRpYyBEZXNpZ25fSGVpZ2h0OiBudW1iZXIgPSAxMzM0O1xuXG4gICAgcHVibGljIHN0YXRpYyBnZXQgU2NyZWVuV2lkdGgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLkRlc2lnbl9XaWR0aDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCBTY3JlZW5IZWlnaHQoKSB7XG4gICAgICAgIGxldCByYXRlID0gdGhpcy5EZXNpZ25fV2lkdGggLyB0aGlzLldpbmRvd1dpZHRoO1xuICAgICAgICByZXR1cm4gdGhpcy5XaW5kb3dIZWlnaHQgKiByYXRlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IFNhZmVBcmVhSGVpZ2h0KCl7XG4gICAgICAgIHJldHVybiB0aGlzLlNjcmVlbkhlaWdodCAtIHRoaXMuTWVudUJ1dHRvbkxvZ2ljLnRvcCAtIHRoaXMuTWVudUJ1dHRvbkxvZ2ljLmhlaWdodDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCB3c1JhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLldpbmRvd1dpZHRoIC8gdGhpcy5TY3JlZW5XaWR0aDtcbiAgICB9XG5cbn1cbi8v6LWE5rqQ5Yqg6L2954q25oCBXG5leHBvcnQgZW51bSBMb2FkU3RhdHVzIHtcbiAgICBEb2luZyA9IC0xLFxuICAgIFN1Y2Nlc3MsXG4gICAgR2FtZU91dCxcbn1cblxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/game/consts/GameConsts.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3605dN1XcxBhpTrTk3PxhYo', 'GameConsts');
// script/game/consts/GameConsts.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Slot_Cell_State = exports.Target_Cell_State = void 0;
var Target_Cell_State;
(function (Target_Cell_State) {
    Target_Cell_State[Target_Cell_State["lock"] = 0] = "lock";
    Target_Cell_State[Target_Cell_State["current"] = 1] = "current";
    Target_Cell_State[Target_Cell_State["complete"] = 2] = "complete";
    Target_Cell_State[Target_Cell_State["final"] = 3] = "final"; //最终目标
})(Target_Cell_State = exports.Target_Cell_State || (exports.Target_Cell_State = {}));
var Slot_Cell_State;
(function (Slot_Cell_State) {
    Slot_Cell_State[Slot_Cell_State["lock"] = 0] = "lock";
    Slot_Cell_State[Slot_Cell_State["nextVideoLock"] = 1] = "nextVideoLock";
    Slot_Cell_State[Slot_Cell_State["videoLock"] = 2] = "videoLock";
    Slot_Cell_State[Slot_Cell_State["unlockIng"] = 3] = "unlockIng";
    Slot_Cell_State[Slot_Cell_State["openIng"] = 4] = "openIng";
    Slot_Cell_State[Slot_Cell_State["open"] = 5] = "open";
})(Slot_Cell_State = exports.Slot_Cell_State || (exports.Slot_Cell_State = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZ2FtZS9jb25zdHMvR2FtZUNvbnN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFZLGlCQUtYO0FBTEQsV0FBWSxpQkFBaUI7SUFDekIseURBQUksQ0FBQTtJQUNKLCtEQUFPLENBQUE7SUFDUCxpRUFBUSxDQUFBO0lBQ1IsMkRBQUssQ0FBQSxDQUFBLE1BQU07QUFDZixDQUFDLEVBTFcsaUJBQWlCLEdBQWpCLHlCQUFpQixLQUFqQix5QkFBaUIsUUFLNUI7QUFNRCxJQUFZLGVBT1g7QUFQRCxXQUFZLGVBQWU7SUFDdkIscURBQUksQ0FBQTtJQUNKLHVFQUFhLENBQUE7SUFDYiwrREFBUyxDQUFBO0lBQ1QsK0RBQVMsQ0FBQTtJQUNULDJEQUFPLENBQUE7SUFDUCxxREFBSSxDQUFBO0FBQ1IsQ0FBQyxFQVBXLGVBQWUsR0FBZix1QkFBZSxLQUFmLHVCQUFlLFFBTzFCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGVudW0gVGFyZ2V0X0NlbGxfU3RhdGUge1xuICAgIGxvY2ssXG4gICAgY3VycmVudCxcbiAgICBjb21wbGV0ZSxcbiAgICBmaW5hbC8v5pyA57uI55uu5qCHXG59XG5cbmV4cG9ydCB0eXBlIFRhcmdldF9DZWxsID0ge1xuICAgIHN0YXRlOiBudW1iZXIsXG4gICAgY291bnQ6IG51bWJlclxufVxuZXhwb3J0IGVudW0gU2xvdF9DZWxsX1N0YXRlIHtcbiAgICBsb2NrLC8v5pyq6Kej6ZSBXG4gICAgbmV4dFZpZGVvTG9jaywvL+inhumikeino+mUgeWQjlxuICAgIHZpZGVvTG9jaywvL+inhumikeino+mUgVxuICAgIHVubG9ja0luZywvL+S4i+S4gOe6p+W+heino+mUgVxuICAgIG9wZW5JbmcsLy/lj6/op6PplIFcbiAgICBvcGVuLC8v5bey6Kej6ZSBXG59XG5leHBvcnQgdHlwZSBTbG90X0NlbGwgPSB7XG4gICAgc3RhdGU6IFNsb3RfQ2VsbF9TdGF0ZSxcbiAgICBpc1RpbWU6IGJvb2xlYW4sXG4gICAgbnVtTGlzdDogQXJyYXk8bnVtYmVyPixcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/game/data/SaveDataConfig.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '449fbQ+XVNOl7j7Me7ehKaA', 'SaveDataConfig');
// script/game/data/SaveDataConfig.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveKey = void 0;
var SaveKey;
(function (SaveKey) {
    SaveKey[SaveKey["Player"] = 0] = "Player";
    SaveKey[SaveKey["Level"] = 1] = "Level";
    SaveKey[SaveKey["Signin"] = 2] = "Signin";
})(SaveKey = exports.SaveKey || (exports.SaveKey = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZ2FtZS9kYXRhL1NhdmVEYXRhQ29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQVksT0FJWDtBQUpELFdBQVksT0FBTztJQUNmLHlDQUFVLENBQUE7SUFDVix1Q0FBSyxDQUFBO0lBQ0wseUNBQU0sQ0FBQTtBQUNWLENBQUMsRUFKVyxPQUFPLEdBQVAsZUFBTyxLQUFQLGVBQU8sUUFJbEIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBlbnVtIFNhdmVLZXkge1xuICAgIFBsYXllciA9IDAsXG4gICAgTGV2ZWwsXG4gICAgU2lnbmluLFxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/game/ui/bl_Config.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c1aeafmJchCIpOozF5ApxOv', 'bl_Config');
// script/game/ui/bl_Config.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bc = exports.bl_Config = void 0;
// 不太知道是什么，但看上去像是管理一些常量的空间
var bl_Config = /** @class */ (function () {
    function bl_Config() {
        this.guideStep = 0;
        this.maxId = 10;
        this.country = "6";
        this.moneyAbbr = "$";
        this.forceNum = -1;
    }
    bl_Config.prototype.getEmptyCount = function (list) {
        var arr = list.filter(function (value) {
            return value == 0;
        });
        if (arr.length > 2)
            return true;
        return false;
    };
    /**
     * 获取强制弹出视频规则
     * @param data
     */
    bl_Config.prototype.getForceCfgs = function (data) {
        this.forceCfgs = data;
    };
    bl_Config.Instance = new bl_Config();
    return bl_Config;
}());
exports.bl_Config = bl_Config;
exports.bc = bl_Config.Instance;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZ2FtZS91aS9ibF9Db25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUEsMEJBQTBCO0FBQzFCO0lBQUE7UUFHSSxjQUFTLEdBQUcsQ0FBQyxDQUFDO1FBRWQsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUVYLFlBQU8sR0FBRyxHQUFHLENBQUM7UUFFZCxjQUFTLEdBQUcsR0FBRyxDQUFBO1FBNENmLGFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQztJQVFsQixDQUFDO0lBaERHLGlDQUFhLEdBQWIsVUFBYyxJQUFJO1FBQ2QsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFDLEtBQUs7WUFDeEIsT0FBTyxLQUFLLElBQUksQ0FBQyxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUM7WUFBRSxPQUFPLElBQUksQ0FBQztRQUNoQyxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBbUNEOzs7T0FHRztJQUNILGdDQUFZLEdBQVosVUFBYSxJQUFJO1FBQ2IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFDMUIsQ0FBQztJQTNEc0Isa0JBQVEsR0FBYyxJQUFJLFNBQVMsRUFBRSxDQUFDO0lBNERqRSxnQkFBQztDQTdERCxBQTZEQyxJQUFBO0FBN0RZLDhCQUFTO0FBK0RULFFBQUEsRUFBRSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYmxfdG9wIGZyb20gXCIuL2JsX3RvcFwiO1xuXG5leHBvcnQgdHlwZSBGb3JjZUNvbmZpZ3MgPSB7IHRpYzogbnVtYmVyW10sIHJhdGU6IG51bWJlcltdIH1cblxuLy8g5LiN5aSq55+l6YGT5piv5LuA5LmI77yM5L2G55yL5LiK5Y675YOP5piv566h55CG5LiA5Lqb5bi46YeP55qE56m66Ze0XG5leHBvcnQgY2xhc3MgYmxfQ29uZmlnIHtcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEluc3RhbmNlOiBibF9Db25maWcgPSBuZXcgYmxfQ29uZmlnKCk7XG5cbiAgICBndWlkZVN0ZXAgPSAwO1xuXG4gICAgbWF4SWQgPSAxMDtcblxuICAgIGNvdW50cnkgPSBcIjZcIjtcblxuICAgIG1vbmV5QWJiciA9IFwiJFwiXG5cbiAgICB0b3A6IGJsX3RvcDtcblxuICAgIGdldEVtcHR5Q291bnQobGlzdCkge1xuICAgICAgICBsZXQgYXJyID0gbGlzdC5maWx0ZXIoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgPT0gMDtcbiAgICAgICAgfSlcbiAgICAgICAgaWYgKGFyci5sZW5ndGggPiAyKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyAvL+ino+aekOS9k+eOsOWIl+ihqFxuICAgIC8vIGRyYXdEYXRhOiB3aWR0aERyYXdhbF9jZmcgPSB7XG4gICAgLy8gICAgIG5vd0JhbFNob3c6IFwiMFwiLFxuICAgIC8vICAgICBuZXh0THZDb3VudDogMCxcbiAgICAvLyAgICAgbm93TGV2ZWw6IDAsXG4gICAgLy8gICAgIG5vd0xvZ0RheXM6IDAsXG4gICAgLy8gICAgIHRvZGF5R2F0ZXM6IDAsXG4gICAgLy8gICAgIGFjdENvdW50Q2ZnOiAwLFxuICAgIC8vICAgICBzaG93TGlzdDogW11cbiAgICAvLyB9O1xuICAgIC8vIHBhcnNlTGlzdChkYXRhOiB3aWR0aERyYXdhbF9jZmcsIGNhbGxiYWNrcykge1xuICAgIC8vICAgICB0aGlzLmRyYXdEYXRhID0gZGF0YTtcbiAgICAvLyAgICAgaWYgKGNhbGxiYWNrcykgY2FsbGJhY2tzKCk7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwiQEDmj5DnjrDliJfooajvvJpcIiwgdGhpcy5kcmF3RGF0YSlcbiAgICAvLyB9XG5cbiAgICAvLyBnZXROZXh0KCkge1xuICAgIC8vICAgICBsZXQgbnVtID0gcGFyc2VGbG9hdCh0aGlzLmRyYXdEYXRhLm5vd0JhbFNob3cpO1xuICAgIC8vICAgICBsZXQgbGlzdCA9IHRoaXMuZHJhd0RhdGEuc2hvd0xpc3Q7XG4gICAgLy8gICAgIGxldCBuZXh0ID0gMDtcbiAgICAvLyAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gICAgIC8vICAgICBpZiAobnVtIDwgcGFyc2VGbG9hdChsaXN0W2ldLm5lZWRCYWwpKSB7XG4gICAgLy8gICAgIC8vICAgICAgICAgbmV4dCA9IHBhcnNlRmxvYXQobGlzdFtpXS5uZWVkQmFsKTtcbiAgICAvLyAgICAgLy8gICAgICAgICBicmVhaztcbiAgICAvLyAgICAgLy8gICAgIH1cblxuICAgIC8vICAgICAvLyB9XG4gICAgLy8gICAgIG5leHQgPSBwYXJzZUZsb2F0KGxpc3RbMF0ubmVlZEJhbCk7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwiQEDmj5DnjrDmoaPkvY3ph5Hpop3vvJpcIiwgbmV4dCk7XG4gICAgLy8gICAgIHJldHVybiBuZXh0O1xuICAgIC8vIH1cblxuICAgIGZvcmNlQ2ZnczogRm9yY2VDb25maWdzW107XG4gICAgZm9yY2VOdW0gPSAtMTtcbiAgICAvKipcbiAgICAgKiDojrflj5blvLrliLblvLnlh7rop4bpopHop4TliJlcbiAgICAgKiBAcGFyYW0gZGF0YSBcbiAgICAgKi9cbiAgICBnZXRGb3JjZUNmZ3MoZGF0YSkge1xuICAgICAgICB0aGlzLmZvcmNlQ2ZncyA9IGRhdGE7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgYmMgPSBibF9Db25maWcuSW5zdGFuY2U7Il19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/game/loading/LoadingScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '09589HoK21BH5rQwy41scZZ', 'LoadingScene');
// script/game/loading/LoadingScene.ts

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
var SceneLoadingUI_1 = require("../../common/comp/SceneLoadingUI");
var GlobalDefines_1 = require("../../common/consts/GlobalDefines");
var Ball_Main_1 = require("../../common/Ball_Main");
var SceneManager_1 = require("../../common/SceneManager");
var Ball_MainScene_1 = require("../ui/Ball_MainScene");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LoadingScene = /** @class */ (function (_super) {
    __extends(LoadingScene, _super);
    function LoadingScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lb_ver = null;
        return _this;
    }
    LoadingScene_1 = LoadingScene;
    LoadingScene.GetType = function () {
        return SceneManager_1.SceneType.Loading;
    };
    LoadingScene.prototype.onLoad = function () {
        // initSource("zh",this.config.json.language['zh']);
    };
    LoadingScene.prototype.startLoading = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Ball_Main_1.default.instance.isInited = false;
                        SceneManager_1.sm.curScene = this;
                        return [4 /*yield*/, this.initScene()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoadingScene.prototype.getNode = function () {
        return this.node;
    };
    LoadingScene.prototype.loadRes = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, SceneLoadingUI_1.default.preLoad()];
                                case 1:
                                    _a.sent();
                                    SceneLoadingUI_1.default.show();
                                    return [4 /*yield*/, Ball_Main_1.default.instance.initGame()];
                                case 2:
                                    _a.sent();
                                    resolve(GlobalDefines_1.LoadStatus.Success);
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    LoadingScene.prototype.initScene = function () {
        return __awaiter(this, void 0, void 0, function () {
            var resStatus;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Ball_Main_1.default.instance.isInited = false;
                        cc.debug.setDisplayStats(false);
                        resStatus = GlobalDefines_1.LoadStatus.Doing;
                        _a.label = 1;
                    case 1: return [4 /*yield*/, this.loadRes().then(function (status) {
                            resStatus = status;
                        })];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        if (resStatus == GlobalDefines_1.LoadStatus.Doing) return [3 /*break*/, 1];
                        _a.label = 4;
                    case 4:
                        if (resStatus == GlobalDefines_1.LoadStatus.GameOut) {
                            return [2 /*return*/];
                        }
                        //立即结束这次同步任务
                        setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                // sm.switchScene(SelectScene,undefined,true);     
                                // if (dm.player.initTimes <= 1) {
                                // }else{
                                SceneManager_1.sm.switchScene(Ball_MainScene_1.default, undefined, true);
                                return [2 /*return*/];
                            });
                        }); }, 0);
                        Ball_Main_1.default.instance.isInited = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    LoadingScene.prototype.getType = function () {
        return LoadingScene_1.GetType();
    };
    LoadingScene.prototype.removeScene = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    var LoadingScene_1;
    LoadingScene.Prefab_Name = "prefab/game/scene/loading_scene";
    __decorate([
        property(cc.Label)
    ], LoadingScene.prototype, "lb_ver", void 0);
    LoadingScene = LoadingScene_1 = __decorate([
        ccclass
    ], LoadingScene);
    return LoadingScene;
}(SceneManager_1.GameScene));
exports.default = LoadingScene;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZ2FtZS9sb2FkaW5nL0xvYWRpbmdTY2VuZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtRUFBOEQ7QUFDOUQsbUVBQStEO0FBRS9ELG9EQUErQztBQUMvQywwREFBcUU7QUFLckUsdURBQWtEO0FBRzVDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTBDLGdDQUFTO0lBQW5EO1FBQUEscUVBdUVDO1FBaEVHLFlBQU0sR0FBYSxJQUFJLENBQUM7O0lBZ0U1QixDQUFDO3FCQXZFb0IsWUFBWTtJQUV0QixvQkFBTyxHQUFkO1FBQ0ksT0FBTyx3QkFBUyxDQUFDLE9BQU8sQ0FBQztJQUM3QixDQUFDO0lBS1MsNkJBQU0sR0FBaEI7UUFDSSxvREFBb0Q7SUFDeEQsQ0FBQztJQUVLLG1DQUFZLEdBQWxCOzs7Ozt3QkFFSSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO3dCQUNwQyxpQkFBRSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7d0JBRW5CLHFCQUFNLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBQTs7d0JBQXRCLFNBQXNCLENBQUM7Ozs7O0tBQzFCO0lBRUQsOEJBQU8sR0FBUDtRQUNJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNyQixDQUFDO0lBR0ssOEJBQU8sR0FBYjs7OztnQkFDSSxzQkFBTyxJQUFJLE9BQU8sQ0FBQyxVQUFPLE9BQU8sRUFBRSxNQUFNOzs7d0NBQ3JDLHFCQUFNLHdCQUFjLENBQUMsT0FBTyxFQUFFLEVBQUE7O29DQUE5QixTQUE4QixDQUFDO29DQUMvQix3QkFBYyxDQUFDLElBQUksRUFBRSxDQUFDO29DQUN0QixxQkFBTSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsRUFBQTs7b0NBQW5DLFNBQW1DLENBQUM7b0NBQ3BDLE9BQU8sQ0FBQywwQkFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDOzs7O3lCQUMvQixDQUFDLEVBQUM7OztLQUNOO0lBSUssZ0NBQVMsR0FBZjs7Ozs7Ozt3QkFDSSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO3dCQUVwQyxFQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFFNUIsU0FBUyxHQUFXLDBCQUFVLENBQUMsS0FBSyxDQUFDOzs0QkFFckMscUJBQU0sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQWM7NEJBQ3JDLFNBQVMsR0FBRyxNQUFNLENBQUM7d0JBQ3ZCLENBQUMsQ0FBQyxFQUFBOzt3QkFGRixTQUVFLENBQUM7Ozs0QkFDRSxTQUFTLElBQUksMEJBQVUsQ0FBQyxLQUFLOzs7d0JBQ3RDLElBQUksU0FBUyxJQUFJLDBCQUFVLENBQUMsT0FBTyxFQUFFOzRCQUNqQyxzQkFBTzt5QkFDVjt3QkFFRCxZQUFZO3dCQUNaLFVBQVUsQ0FBQzs7Z0NBQ1AsbURBQW1EO2dDQUNuRCxrQ0FBa0M7Z0NBRWxDLFNBQVM7Z0NBQ1QsaUJBQUUsQ0FBQyxXQUFXLENBQUMsd0JBQWMsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7Ozs2QkFFbkQsRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDTixtQkFBUyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDOzs7OztLQUd0QztJQUNELDhCQUFPLEdBQVA7UUFDSSxPQUFPLGNBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUssa0NBQVcsR0FBakI7Ozs7OztLQUNDOztJQXJFYSx3QkFBVyxHQUFHLGlDQUFpQyxDQUFDO0lBTTlEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7Z0RBQ0s7SUFQUCxZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBdUVoQztJQUFELG1CQUFDO0NBdkVELEFBdUVDLENBdkV5Qyx3QkFBUyxHQXVFbEQ7a0JBdkVvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNjZW5lTG9hZGluZ1VJIGZyb20gXCIuLi8uLi9jb21tb24vY29tcC9TY2VuZUxvYWRpbmdVSVwiO1xuaW1wb3J0IHsgTG9hZFN0YXR1cyB9IGZyb20gXCIuLi8uLi9jb21tb24vY29uc3RzL0dsb2JhbERlZmluZXNcIjtcbmltcG9ydCB7IGRtIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9EYXRhTWFuYWdlclwiO1xuaW1wb3J0IEJhbGxfTWFpbiBmcm9tIFwiLi4vLi4vY29tbW9uL0JhbGxfTWFpblwiO1xuaW1wb3J0IHsgR2FtZVNjZW5lLCBTY2VuZVR5cGUsIHNtIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9TY2VuZU1hbmFnZXJcIjtcbmltcG9ydCB7IGluaXRTb3VyY2UgfSBmcm9tIFwiLi4vLi4vbGFuZy9MYW5ndWFnZURhdGFcIjtcbmltcG9ydCBTREtNYW5hZ2VyIGZyb20gXCIuLi8uLi91dGlscy9TREtNYW5hZ2VyXCI7XG5pbXBvcnQgeyBVdGlscyB9IGZyb20gXCIuLi8uLi91dGlscy9VdGlsc1wiO1xuaW1wb3J0IHsgYmMgfSBmcm9tIFwiLi4vdWkvYmxfQ29uZmlnXCI7XG5pbXBvcnQgQmFsbF9NYWluU2NlbmUgZnJvbSBcIi4uL3VpL0JhbGxfTWFpblNjZW5lXCI7XG5cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvYWRpbmdTY2VuZSBleHRlbmRzIEdhbWVTY2VuZSB7XG4gICAgcHVibGljIHN0YXRpYyBQcmVmYWJfTmFtZSA9IFwicHJlZmFiL2dhbWUvc2NlbmUvbG9hZGluZ19zY2VuZVwiO1xuICAgIHN0YXRpYyBHZXRUeXBlKCkge1xuICAgICAgICByZXR1cm4gU2NlbmVUeXBlLkxvYWRpbmc7XG4gICAgfVxuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiX3ZlcjogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcbiAgICAgICAgLy8gaW5pdFNvdXJjZShcInpoXCIsdGhpcy5jb25maWcuanNvbi5sYW5ndWFnZVsnemgnXSk7XG4gICAgfVxuXG4gICAgYXN5bmMgc3RhcnRMb2FkaW5nKCkge1xuXG4gICAgICAgIEJhbGxfTWFpbi5pbnN0YW5jZS5pc0luaXRlZCA9IGZhbHNlO1xuICAgICAgICBzbS5jdXJTY2VuZSA9IHRoaXM7XG5cbiAgICAgICAgYXdhaXQgdGhpcy5pbml0U2NlbmUoKTtcbiAgICB9XG5cbiAgICBnZXROb2RlKCk6IGNjLk5vZGUge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2RlO1xuICAgIH1cblxuXG4gICAgYXN5bmMgbG9hZFJlcygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGF3YWl0IFNjZW5lTG9hZGluZ1VJLnByZUxvYWQoKTtcbiAgICAgICAgICAgIFNjZW5lTG9hZGluZ1VJLnNob3coKTtcbiAgICAgICAgICAgIGF3YWl0IEJhbGxfTWFpbi5pbnN0YW5jZS5pbml0R2FtZSgpO1xuICAgICAgICAgICAgcmVzb2x2ZShMb2FkU3RhdHVzLlN1Y2Nlc3MpO1xuICAgICAgICB9KTtcbiAgICB9XG5cblxuXG4gICAgYXN5bmMgaW5pdFNjZW5lKCkge1xuICAgICAgICBCYWxsX01haW4uaW5zdGFuY2UuaXNJbml0ZWQgPSBmYWxzZTtcblxuICAgICAgICBjYy5kZWJ1Zy5zZXREaXNwbGF5U3RhdHMoZmFsc2UpO1xuICAgICAgICAvLzQg6LWE5rqQ5Yqg6L29IOWmguaenOWksei0pe+8jOavj+malOS4gOenkuaMgee7reWwneivlVxuICAgICAgICBsZXQgcmVzU3RhdHVzOiBudW1iZXIgPSBMb2FkU3RhdHVzLkRvaW5nOy8vLTE65ZCM5q2l5aSx6LSlIDA65ZCM5q2l5oiQ5YqfIDE66YCA5Ye65ri45oiPXG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMubG9hZFJlcygpLnRoZW4oKHN0YXR1czogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzU3RhdHVzID0gc3RhdHVzO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gd2hpbGUgKHJlc1N0YXR1cyA9PSBMb2FkU3RhdHVzLkRvaW5nKVxuICAgICAgICBpZiAocmVzU3RhdHVzID09IExvYWRTdGF0dXMuR2FtZU91dCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy/nq4vljbPnu5PmnZ/ov5nmrKHlkIzmraXku7vliqFcbiAgICAgICAgc2V0VGltZW91dChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAvLyBzbS5zd2l0Y2hTY2VuZShTZWxlY3RTY2VuZSx1bmRlZmluZWQsdHJ1ZSk7ICAgICBcbiAgICAgICAgICAgIC8vIGlmIChkbS5wbGF5ZXIuaW5pdFRpbWVzIDw9IDEpIHtcblxuICAgICAgICAgICAgLy8gfWVsc2V7XG4gICAgICAgICAgICBzbS5zd2l0Y2hTY2VuZShCYWxsX01haW5TY2VuZSwgdW5kZWZpbmVkLCB0cnVlKTtcbiAgICAgICAgICAgIC8vIH0gXG4gICAgICAgIH0sIDApO1xuICAgICAgICBCYWxsX01haW4uaW5zdGFuY2UuaXNJbml0ZWQgPSB0cnVlO1xuXG4gICAgICAgIC8vIENvbW1vblV0aWxzLkdhbWVMb2dpbihmYWxzZSx1bmRlZmluZWQpO1xuICAgIH1cbiAgICBnZXRUeXBlKCkge1xuICAgICAgICByZXR1cm4gTG9hZGluZ1NjZW5lLkdldFR5cGUoKTtcbiAgICB9XG5cbiAgICBhc3luYyByZW1vdmVTY2VuZSgpIHtcbiAgICB9XG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/utils/SDKManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f964acTKuZLfZedEQIkOmh/', 'SDKManager');
// script/utils/SDKManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sdk = void 0;
var Ball_Main_1 = require("../common/Ball_Main");
var GameUtils_1 = require("../game/GameUtils");
var bl_Config_1 = require("../game/ui/bl_Config");
var SDKManager = /** @class */ (function () {
    function SDKManager() {
        this._adPath_ios = "Kiow_CsbAr_EErhViewcOntRoller"; //前缀：ball_tYiex，后缀：xiUk_egVjo
        // protected _adPath_ios = "Chi_PcaS_cAdE_ViewCon";//前缀：ball_tYiex，后缀：xiUk_egVjo
        this._baseCocos = "org/cocos2dx/javascript/AppActivity";
        this.testNum = 0;
    }
    SDKManager.getInstance = function () {
        if (SDKManager._instance == null) {
            SDKManager._instance = new SDKManager();
        }
        return SDKManager._instance;
    };
    Object.defineProperty(SDKManager.prototype, "isAndroid", {
        get: function () {
            // return false;
            return cc.sys.os == cc.sys.OS_ANDROID;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SDKManager.prototype, "isIphone", {
        get: function () {
            // return false;
            return cc.sys.os == cc.sys.OS_IOS;
        },
        enumerable: false,
        configurable: true
    });
    //保持屏幕常亮
    SDKManager.prototype.setKeep = function () {
        if (this.isIphone) {
            jsb["Device"].setKeepScreenOn(true);
        }
    };
    //- 统计事件接口
    SDKManager.prototype.onEvent = function (action, jsonData) {
        if (action === void 0) { action = "point_function"; }
        if (this.isIphone) {
            if (jsonData) {
                var data = JSON.stringify(jsonData);
                jsb.reflection.callStaticMethod("Chi_PcaS_cAdE_ViewCon", "ball_tYiexonEventxiUk_egVjo:jsonData:", action, data);
            }
            else
                jsb.reflection.callStaticMethod("Chi_PcaS_cAdE_ViewCon", "ball_tYiexonEventxiUk_egVjo:", action);
        }
    };
    //视频广告播放接口 
    SDKManager.prototype.ball_showAd = function (adConfig, force) {
        if (this.isIphone) {
            if (adConfig) {
                jsb.reflection.callStaticMethod(this._adPath_ios, "ball_tYiexshowAdxiUk_egVjo:force:", adConfig, force);
            }
        }
        else {
            var json = {
                ad_source: "getAward"
            };
            // GlobalEvent.dispatchEvent(new EventAdOverRequest(json.ad_source))
        }
    };
    //上报余额和当前提现档位金额 
    SDKManager.prototype.ball_Reponcendhdrawne = function (current, target) {
        if (this.isIphone) {
            jsb.reflection.callStaticMethod(this._adPath_ios, "ball_tYiexReponcendhdrawnexiUk_egVjo:withTXban:", current, target);
        }
    };
    //隐私政策
    SDKManager.prototype.ball_openPrivacy = function () {
        if (this.isIphone) {
            jsb.reflection.callStaticMethod(this._adPath_ios, "ball_tYiexopenPrivacyxiUk_egVjo");
        }
    };
    //用户协议
    SDKManager.prototype.ball_openUserService = function () {
        if (this.isIphone) {
            jsb.reflection.callStaticMethod(this._adPath_ios, "ball_tYiexopenUserServicexiUk_egVjo");
        }
    };
    //设备ID
    SDKManager.prototype.ball_getDeviceId = function () {
        var n = "";
        if (this.isIphone) {
            n = jsb.reflection.callStaticMethod(this._adPath_ios, "ball_tYiexgetDeviceIdxiUk_egVjo");
        }
        return n;
    };
    //国家
    SDKManager.prototype.ball_getCountry = function () {
        var n = "";
        if (this.isIphone) {
            n = jsb.reflection.callStaticMethod(this._adPath_ios, "ball_tYiexgetCountryxiUk_egVjo");
        }
        else {
            n = "6";
        }
        return n;
    };
    //强弹规则
    SDKManager.prototype.ball_getSpecialGear = function () {
        var n;
        if (this.isIphone) {
            n = jsb.reflection.callStaticMethod(this._adPath_ios, "ball_tYiexgetSpecialGearxiUk_egVjo");
        }
        else {
            n = [{ "tic": [-1, 20], "rate": [5, 5] }, { "tic": [21, 60], "rate": [4, 5] }, { "tic": [61, 150], "rate": [4, 3] }, { "tic": [151, -1], "rate": [3, 3] }];
        }
        var json = JSON.parse(n);
        // GlobalEvent.dispatchEvent(new EventConfigRequest(json));
        return n;
    };
    SDKManager.prototype.ball_SynsReport = function () {
        if (this.isIphone) {
            jsb.reflection.callStaticMethod(this._adPath_ios, "ball_tYiexSynsReportxiUk_egVjo");
        }
    };
    SDKManager.prototype.ball_gohpVcbaclok = function () {
        if (this.isIphone) {
            jsb.reflection.callStaticMethod(this._adPath_ios, "ball_tYiexgohpVcbaclokxiUk_egVjo");
        }
    };
    //震动
    SDKManager.prototype.vibrate = function (time) {
        if (this.isIphone) {
            jsb.reflection.callStaticMethod(this._baseCocos, "vibrate", "(I)V", time);
        }
        else {
        }
    };
    //复制
    SDKManager.prototype.copy = function (str) {
        if (this.isIphone) {
            jsb.reflection.callStaticMethod(this._adPath_ios, "ball_tYiexsetCopyxiUk_egVjo:", str);
        }
        else {
        }
    };
    /**
     * 奖励领取
     * @param drewTag 0,--当前领取方式 0表示普通领取，1表示视频（广告）领取
     */
    SDKManager.prototype.ball_getReward = function (drewTag) {
        if (drewTag === void 0) { drewTag = 0; }
        var obj = { drewTag: drewTag };
        var data = JSON.stringify(obj);
        this.ball_sendRequest("/qv2c/lt/aw", data);
    };
    /**
     * 抽奖
     * @param reqCount --抽奖次数，从1开始
     */
    SDKManager.prototype.ball_getWheelReward = function (reqCount) {
        var obj = { reqCount: reqCount };
        var data = JSON.stringify(obj);
        this.ball_sendRequest("/qv2c/lc/rdom/draw", data);
    };
    /**
     * 提现列表
     */
    SDKManager.prototype.ball_getWithdrawals = function () {
        this.ball_sendRequest("/qv2c/lc/awal/list");
    };
    //通信
    SDKManager.prototype.ball_sendRequest = function (action, requestData) {
        console.log("@@通信请求ball_sendRequest:", action, requestData);
        if (this.isIphone) {
            jsb.reflection.callStaticMethod(this._adPath_ios, "ball_tYiexsendRequestxiUk_egVjo:requestData:", action, requestData);
        }
        else {
            if (action == "/qv2c/lc/awal/list") { //提现列表
                if (this.testNum == 0) {
                    var message = " {\"errno\":\"0\",\"data\":{\"nowBalShow\":\"189.60\",\"nowLevel\":2,\"actCountCfg\":\"80\",\"nextLvCount\":10,\"nowLogDays\":4,\"todayGates\":1,\"showList\":[{\"needBal\":\"500\",\"drawBal\":\"500\",\"id\":2,\"newerTag\":2,\"needLevel\":41,\"left\":-1,\"needDays\":3},{\"needBal\":\"1000\",\"drawBal\":\"1000\",\"id\":3,\"newerTag\":2,\"needLevel\":42,\"left\":-1,\"needDays\":5},{\"needBal\":\"1500\",\"drawBal\":\"1500\",\"id\":4,\"newerTag\":2,\"needLevel\":43,\"left\":-1,\"needDays\":10},{\"needBal\":\"2000\",\"drawBal\":\"2000\",\"id\":5,\"newerTag\":2,\"needLevel\":44,\"left\":-1,\"needDays\":0}]},\"timeSign\":1713106575767,\"errmsg\":\"success\"}";
                    var json = JSON.parse(message);
                    var data = json.data;
                    // GlobalEvent.dispatchEvent(new EventListRequest(data))
                    this.testNum++;
                }
                else {
                    var message = " {\"errno\":\"0\",\"data\":{\"nowBalShow\":\"10489.60\",\"nowLevel\":2,\"actCountCfg\":\"80\",\"nextLvCount\":10,\"nowLogDays\":4,\"todayGates\":3,\"showList\":[{\"needBal\":\"500\",\"drawBal\":\"500\",\"id\":2,\"newerTag\":2,\"needLevel\":41,\"left\":-1,\"needDays\":3},{\"needBal\":\"1000\",\"drawBal\":\"1000\",\"id\":3,\"newerTag\":2,\"needLevel\":42,\"left\":-1,\"needDays\":5},{\"needBal\":\"1500\",\"drawBal\":\"1500\",\"id\":4,\"newerTag\":2,\"needLevel\":43,\"left\":-1,\"needDays\":10},{\"needBal\":\"2000\",\"drawBal\":\"2000\",\"id\":5,\"newerTag\":2,\"needLevel\":44,\"left\":-1,\"needDays\":0}]},\"timeSign\":1713106575767,\"errmsg\":\"success\"}";
                    var json = JSON.parse(message);
                    var data = json.data;
                    // GlobalEvent.dispatchEvent(new EventListRequest(data))
                }
            }
            else if (action == "/qv2c/lc/rdom/draw") { //转盘抽奖
                var json = {
                    data: {
                        "awardType": 1,
                        "awardShow": "20000",
                        "count": 1,
                        "balShow": "25400.00"
                    },
                };
                // GlobalEvent.dispatchEvent(new EventTurntable(json.data))
            }
            else if (action == "/qv2c/lt/aw") { //转盘抽奖
                var json = {
                    data: {
                        "amtShow": "5.2",
                        "balShow": "11.30",
                        "nowLevel": 1,
                        "nextLvCount": 88,
                        "todayGates": 5,
                        "allGates": 5 //--消除【总次数】
                    },
                };
                // GlobalEvent.dispatchEvent(new EventGetAwardRequest(json.data))
            }
        }
    };
    SDKManager._instance = null;
    return SDKManager;
}());
exports.default = SDKManager;
exports.sdk = SDKManager.getInstance();
window["XSSdkCallback"] = function (action, jsonStr) {
    console.log("***************前端收到消息***************", action + "   ", jsonStr);
    var json = JSON.parse(jsonStr);
    if (action == "ad_play") { //视频开始播放
        // EventDispath.send(EventType.VIDEO_BACK, 1);
    }
    else if (action == "ad_over") { //视频播放结束
        // GlobalEvent.dispatchEvent(new EventAdOverRequest(json.ad_source))
    }
    else if (action == "ad_error") { //视频播放出错
        var cfg = Ball_Main_1.default.instance.config;
        var tips = "";
        if (bl_Config_1.bc.country == "2") {
            tips = cfg.json.language['pt'].tips2;
        }
        else if (bl_Config_1.bc.country == "13") {
            tips = cfg.json.language['in'].tips2;
        }
        else {
            tips = cfg.json.language['en'].tips2;
        }
        GameUtils_1.GameUtils.showToast(tips);
    }
    else if (action == "ad_cd") { //视频播放视频冷却中
    }
    else if (action == "/qv2c/lt/aw") { //领取奖励
        // GlobalEvent.dispatchEvent(new EventGetAwardRequest(json.data));
        //    {
        //     "errno": "0",
        //         "errmsg": "success",
        //             "data": {
        //         "amtShow": "5.2", --- 领取的金额
        //         "balShow": "11.30", --当前余额
        //         "nowLevel": 1, -----> 当前用户【等级】
        //         "nextLvCount": 88, ----> 下一等级【需达到的总答题数】
        //         "todayGates": 5, --当天消除【次数】
        //         "allGates": 5--消除【总次数】
        //     },
        //     "timeSign": 1699427378861
    }
    else if (action == "/qv2c/lc/rdom/draw") { //转盘抽奖
        // GlobalEvent.dispatchEvent(new EventTurntable(json.data))
        //     {
        //     "errno": "0",
        //         "errmsg": "success",
        //             "data": {
        //         "awardType": 1, ----》固定类型，本版本忽略
        //         "awardShow": "20000", ----》奖励金额
        //         "count": 1, ----》抽奖次数
        //         "balShow": "25400.00"----》总余额
        //     },
        //     "timeSign": 1711638075665
    }
    else if (action == "/qv2c/lc/awal/list") { //提现列表
        // GlobalEvent.dispatchEvent(new EventListRequest(json.data))
        //         {
        //             "errno": "0",
        //                 "errmsg": "success",
        //                     "data": {
        //                 "nowLogDays": 0, --当前登录天数
        //                 "nowLevel": 0, --当前等级
        //                 "todayGates"：10, --今天消除次数
        //                 "nowBalShow": "25400.00", --- 当前余额
        //                 "actCountCfg": 80, --- 用于计算当天完成多少消除才算1天
        //                 "nextLvCount": 10, --下一等级需要达到的总数
        //                 //提现条件顺序：1,满足 750000 2，满足75000时开始计算累计登录天数，满足累计登录天数 3，达到的等级（达不到）
        //                 "showList": [
        //                     { "id": 2,-- -> 提现对应ID
        //                        "drawBal": "750000", ---> 提现目标
        //                          "needBal": "750000", ---> 需要达到的余额
        //                          "newerTag": 2, ---> 是否是新人提现，1是 2其它提现
        //                              "left": -1, ---》剩余可提现次数
        //                              "needDays": 3, ---》需要达到的登录天数
        //                          "needLevel": 41-- -》需要达到的等级
        // },
        //             {
        //                 "id": 3,
        //                     "drawBal": "1000000",
        //                         "needBal": "1000000",
        //                             "newerTag": 2,
        //                                 "left": -1,
        //                                     "needDays": 5,
        //                                         "needLevel": 42
        //             },
        //             {
        //                 "id": 4,
        //                     "drawBal": "3000000",
        //                         "needBal": "3000000",
        //                             "newerTag": 2,
        //                                 "left": -1,
        //                                     "needDays": 10,
        //                                         "needLevel": 43
        //             },
        //             {
        //                 "id": 5,
        //                     "drawBal": "5000000",
        //                         "needBal": "5000000",
        //                             "newerTag": 2,
        //                                 "left": -1,
        //                                     "needDays": 0,
        //                                         "needLevel": 44
        //             }]
        //         },
    }
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdXRpbHMvU0RLTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpREFBNEM7QUFFNUMsK0NBQThDO0FBQzlDLGtEQUEwQztBQUcxQztJQUFBO1FBRWMsZ0JBQVcsR0FBRywrQkFBK0IsQ0FBQyxDQUFBLDZCQUE2QjtRQUNyRixnRkFBZ0Y7UUFDdEUsZUFBVSxHQUFXLHFDQUFxQyxDQUFDO1FBbUpyRSxZQUFPLEdBQUcsQ0FBQyxDQUFDO0lBa0RoQixDQUFDO0lBbE1VLHNCQUFXLEdBQWxCO1FBQ0ksSUFBSSxVQUFVLENBQUMsU0FBUyxJQUFJLElBQUksRUFBRTtZQUM5QixVQUFVLENBQUMsU0FBUyxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7U0FDM0M7UUFDRCxPQUFPLFVBQVUsQ0FBQyxTQUFTLENBQUM7SUFDaEMsQ0FBQztJQUNELHNCQUFJLGlDQUFTO2FBQWI7WUFDSSxnQkFBZ0I7WUFDaEIsT0FBTyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQztRQUMxQyxDQUFDOzs7T0FBQTtJQUNELHNCQUFJLGdDQUFRO2FBQVo7WUFDSSxnQkFBZ0I7WUFDaEIsT0FBTyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztRQUN0QyxDQUFDOzs7T0FBQTtJQUNELFFBQVE7SUFDUiw0QkFBTyxHQUFQO1FBQ0ksSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2YsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN2QztJQUNMLENBQUM7SUFFRCxVQUFVO0lBQ1YsNEJBQU8sR0FBUCxVQUFRLE1BQXlCLEVBQUUsUUFBUztRQUFwQyx1QkFBQSxFQUFBLHlCQUF5QjtRQUM3QixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFD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Z0Q7UUFDaEQsNkNBQTZDO1FBQzdDLDhDQUE4QztRQUM5QyxzREFBc0Q7UUFDdEQsMERBQTBEO1FBQzFELGlCQUFpQjtRQUNqQixnQkFBZ0I7UUFDaEIsMkJBQTJCO1FBQzNCLDRDQUE0QztRQUM1QyxnREFBZ0Q7UUFDaEQsNkNBQTZDO1FBQzdDLDhDQUE4QztRQUM5QyxxREFBcUQ7UUFDckQsMERBQTBEO1FBQzFELGlCQUFpQjtRQUNqQixhQUFhO0tBQ2hCO0FBQ0wsQ0FBQyxDQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhbGxfTWFpbiBmcm9tIFwiLi4vY29tbW9uL0JhbGxfTWFpblwiO1xyXG5pbXBvcnQgeyBHbG9iYWxFdmVudCB9IGZyb20gXCIuLi9jb21tb24vR2xvYmFsXCI7XHJcbmltcG9ydCB7IEdhbWVVdGlscyB9IGZyb20gXCIuLi9nYW1lL0dhbWVVdGlsc1wiO1xyXG5pbXBvcnQgeyBiYyB9IGZyb20gXCIuLi9nYW1lL3VpL2JsX0NvbmZpZ1wiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNES01hbmFnZXIge1xyXG5cclxuICAgIHByb3RlY3RlZCBfYWRQYXRoX2lvcyA9IFwiS2lvd19Dc2JBcl9FRXJoVmlld2NPbnRSb2xsZXJcIjsvL+WJjee8gO+8mmJhbGxfdFlpZXjvvIzlkI7nvIDvvJp4aVVrX2VnVmpvXHJcbiAgICAvLyBwcm90ZWN0ZWQgX2FkUGF0aF9pb3MgPSBcIkNoaV9QY2FTX2NBZEVfVmlld0NvblwiOy8v5YmN57yA77yaYmFsbF90WWlleO+8jOWQjue8gO+8mnhpVWtfZWdWam9cclxuICAgIHByb3RlY3RlZCBfYmFzZUNvY29zOiBzdHJpbmcgPSBcIm9yZy9jb2NvczJkeC9qYXZhc2NyaXB0L0FwcEFjdGl2aXR5XCI7XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlID0gbnVsbDtcclxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBTREtNYW5hZ2VyIHtcclxuICAgICAgICBpZiAoU0RLTWFuYWdlci5faW5zdGFuY2UgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBTREtNYW5hZ2VyLl9pbnN0YW5jZSA9IG5ldyBTREtNYW5hZ2VyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBTREtNYW5hZ2VyLl9pbnN0YW5jZTtcclxuICAgIH1cclxuICAgIGdldCBpc0FuZHJvaWQoKSB7XHJcbiAgICAgICAgLy8gcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHJldHVybiBjYy5zeXMub3MgPT0gY2Muc3lzLk9TX0FORFJPSUQ7XHJcbiAgICB9XHJcbiAgICBnZXQgaXNJcGhvbmUoKSB7XHJcbiAgICAgICAgLy8gcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHJldHVybiBjYy5zeXMub3MgPT0gY2Muc3lzLk9TX0lPUztcclxuICAgIH1cclxuICAgIC8v5L+d5oyB5bGP5bmV5bi45LquXHJcbiAgICBzZXRLZWVwKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzSXBob25lKSB7XHJcbiAgICAgICAgICAgIGpzYltcIkRldmljZVwiXS5zZXRLZWVwU2NyZWVuT24odHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vLSDnu5/orqHkuovku7bmjqXlj6NcclxuICAgIG9uRXZlbnQoYWN0aW9uID0gXCJwb2ludF9mdW5jdGlvblwiLCBqc29uRGF0YT8pIHtcclxuICAgICAgICBpZiAodGhpcy5pc0lwaG9uZSkge1xyXG4gICAgICAgICAgICBpZiAoanNvbkRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gSlNPTi5zdHJpbmdpZnkoanNvbkRhdGEpO1xyXG4gICAgICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIkNoaV9QY2FTX2NBZEVfVmlld0NvblwiLCBcImJhbGxfdFlpZXhvbkV2ZW50eGlVa19lZ1Zqbzpqc29uRGF0YTpcIiwgYWN0aW9uLCBkYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJDaGlfUGNhU19jQWRFX1ZpZXdDb25cIiwgXCJiYWxsX3RZaWV4b25FdmVudHhpVWtfZWdWam86XCIsIGFjdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy/op4bpopHlub/lkYrmkq3mlL7mjqXlj6MgXHJcbiAgICBiYWxsX3Nob3dBZChhZENvbmZpZz8sIGZvcmNlPzogYm9vbGVhbikge1xyXG4gICAgICAgIGlmICh0aGlzLmlzSXBob25lKSB7XHJcbiAgICAgICAgICAgIGlmIChhZENvbmZpZykge1xyXG4gICAgICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZCh0aGlzLl9hZFBhdGhfaW9zLCBcImJhbGxfdFlpZXhzaG93QWR4aVVrX2VnVmpvOmZvcmNlOlwiLCBhZENvbmZpZywgZm9yY2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGpzb24gPSB7XHJcbiAgICAgICAgICAgICAgICBhZF9zb3VyY2U6IFwiZ2V0QXdhcmRcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIEdsb2JhbEV2ZW50LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50QWRPdmVyUmVxdWVzdChqc29uLmFkX3NvdXJjZSkpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy/kuIrmiqXkvZnpop3lkozlvZPliY3mj5DnjrDmoaPkvY3ph5Hpop0gXHJcbiAgICBiYWxsX1JlcG9uY2VuZGhkcmF3bmUoY3VycmVudD8sIHRhcmdldD8pIHtcclxuICAgICAgICBpZiAodGhpcy5pc0lwaG9uZSkge1xyXG4gICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKHRoaXMuX2FkUGF0aF9pb3MsIFwiYmFsbF90WWlleFJlcG9uY2VuZGhkcmF3bmV4aVVrX2VnVmpvOndpdGhUWGJhbjpcIiwgY3VycmVudCwgdGFyZ2V0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL+makOengeaUv+etllxyXG4gICAgYmFsbF9vcGVuUHJpdmFjeSgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0lwaG9uZSkge1xyXG4gICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKHRoaXMuX2FkUGF0aF9pb3MsIFwiYmFsbF90WWlleG9wZW5Qcml2YWN5eGlVa19lZ1Zqb1wiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL+eUqOaIt+WNj+iurlxyXG4gICAgYmFsbF9vcGVuVXNlclNlcnZpY2UoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNJcGhvbmUpIHtcclxuICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZCh0aGlzLl9hZFBhdGhfaW9zLCBcImJhbGxfdFlpZXhvcGVuVXNlclNlcnZpY2V4aVVrX2VnVmpvXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8v6K6+5aSHSURcclxuICAgIGJhbGxfZ2V0RGV2aWNlSWQoKSB7XHJcbiAgICAgICAgbGV0IG4gPSBcIlwiO1xyXG4gICAgICAgIGlmICh0aGlzLmlzSXBob25lKSB7XHJcbiAgICAgICAgICAgIG4gPSBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKHRoaXMuX2FkUGF0aF9pb3MsIFwiYmFsbF90WWlleGdldERldmljZUlkeGlVa19lZ1Zqb1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG47XHJcbiAgICB9XHJcbiAgICAvL+WbveWutlxyXG4gICAgYmFsbF9nZXRDb3VudHJ5KCkge1xyXG4gICAgICAgIGxldCBuID0gXCJcIjtcclxuICAgICAgICBpZiAodGhpcy5pc0lwaG9uZSkge1xyXG4gICAgICAgICAgICBuID0ganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZCh0aGlzLl9hZFBhdGhfaW9zLCBcImJhbGxfdFlpZXhnZXRDb3VudHJ5eGlVa19lZ1Zqb1wiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBuID0gXCI2XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuO1xyXG4gICAgfVxyXG4gICAgLy/lvLrlvLnop4TliJlcclxuICAgIGJhbGxfZ2V0U3BlY2lhbEdlYXIoKSB7XHJcbiAgICAgICAgbGV0IG47XHJcbiAgICAgICAgaWYgKHRoaXMuaXNJcGhvbmUpIHtcclxuICAgICAgICAgICAgbiA9IGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QodGhpcy5fYWRQYXRoX2lvcywgXCJiYWxsX3RZaWV4Z2V0U3BlY2lhbEdlYXJ4aVVrX2VnVmpvXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG4gPSBbeyBcInRpY1wiOiBbLTEsIDIwXSwgXCJyYXRlXCI6IFs1LCA1XSB9LCB7IFwidGljXCI6IFsyMSwgNjBdLCBcInJhdGVcIjogWzQsIDVdIH0sIHsgXCJ0aWNcIjogWzYxLCAxNTBdLCBcInJhdGVcIjogWzQsIDNdIH0sIHsgXCJ0aWNcIjogWzE1MSwgLTFdLCBcInJhdGVcIjogWzMsIDNdIH1dXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBqc29uID0gSlNPTi5wYXJzZShuKTtcclxuICAgICAgICAvLyBHbG9iYWxFdmVudC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudENvbmZpZ1JlcXVlc3QoanNvbikpO1xyXG4gICAgICAgIHJldHVybiBuO1xyXG4gICAgfVxyXG4gICAgYmFsbF9TeW5zUmVwb3J0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzSXBob25lKSB7XHJcbiAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QodGhpcy5fYWRQYXRoX2lvcywgXCJiYWxsX3RZaWV4U3luc1JlcG9ydHhpVWtfZWdWam9cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYmFsbF9nb2hwVmNiYWNsb2soKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNJcGhvbmUpIHtcclxuICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZCh0aGlzLl9hZFBhdGhfaW9zLCBcImJhbGxfdFlpZXhnb2hwVmNiYWNsb2t4aVVrX2VnVmpvXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL+mch+WKqFxyXG4gICAgdmlicmF0ZSh0aW1lOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0lwaG9uZSkge1xyXG4gICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKHRoaXMuX2Jhc2VDb2NvcywgXCJ2aWJyYXRlXCIsIFwiKEkpVlwiLCB0aW1lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL+WkjeWItlxyXG4gICAgY29weShzdHI6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLmlzSXBob25lKSB7XHJcbiAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QodGhpcy5fYWRQYXRoX2lvcywgXCJiYWxsX3RZaWV4c2V0Q29weXhpVWtfZWdWam86XCIsIHN0cik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlpZblirHpooblj5ZcclxuICAgICAqIEBwYXJhbSBkcmV3VGFnIDAsLS3lvZPliY3pooblj5bmlrnlvI8gMOihqOekuuaZrumAmumihuWPlu+8jDHooajnpLrop4bpopHvvIjlub/lkYrvvInpooblj5ZcclxuICAgICAqL1xyXG4gICAgYmFsbF9nZXRSZXdhcmQoZHJld1RhZyA9IDApIHtcclxuICAgICAgICBsZXQgb2JqID0geyBkcmV3VGFnOiBkcmV3VGFnIH07XHJcbiAgICAgICAgbGV0IGRhdGEgPSBKU09OLnN0cmluZ2lmeShvYmopXHJcbiAgICAgICAgdGhpcy5iYWxsX3NlbmRSZXF1ZXN0KFwiL3F2MmMvbHQvYXdcIiwgZGF0YSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOaKveWlllxyXG4gICAgICogQHBhcmFtIHJlcUNvdW50IC0t5oq95aWW5qyh5pWw77yM5LuOMeW8gOWni1xyXG4gICAgICovXHJcbiAgICBiYWxsX2dldFdoZWVsUmV3YXJkKHJlcUNvdW50KSB7XHJcbiAgICAgICAgbGV0IG9iaiA9IHsgcmVxQ291bnQ6IHJlcUNvdW50IH07XHJcbiAgICAgICAgbGV0IGRhdGEgPSBKU09OLnN0cmluZ2lmeShvYmopXHJcbiAgICAgICAgdGhpcy5iYWxsX3NlbmRSZXF1ZXN0KFwiL3F2MmMvbGMvcmRvbS9kcmF3XCIsIGRhdGEpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmj5DnjrDliJfooahcclxuICAgICAqL1xyXG4gICAgYmFsbF9nZXRXaXRoZHJhd2FscygpIHtcclxuICAgICAgICB0aGlzLmJhbGxfc2VuZFJlcXVlc3QoXCIvcXYyYy9sYy9hd2FsL2xpc3RcIik7XHJcbiAgICB9XHJcblxyXG4gICAgdGVzdE51bSA9IDA7XHJcbiAgICAvL+mAmuS/oVxyXG4gICAgYmFsbF9zZW5kUmVxdWVzdChhY3Rpb24sIHJlcXVlc3REYXRhPykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQEDpgJrkv6Hor7fmsYJiYWxsX3NlbmRSZXF1ZXN0OlwiLCBhY3Rpb24sIHJlcXVlc3REYXRhKTtcclxuICAgICAgICBpZiAodGhpcy5pc0lwaG9uZSkge1xyXG4gICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKHRoaXMuX2FkUGF0aF9pb3MsIFwiYmFsbF90WWlleHNlbmRSZXF1ZXN0eGlVa19lZ1ZqbzpyZXF1ZXN0RGF0YTpcIiwgYWN0aW9uLCByZXF1ZXN0RGF0YSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGFjdGlvbiA9PSBcIi9xdjJjL2xjL2F3YWwvbGlzdFwiKSB7ICAgICAvL+aPkOeOsOWIl+ihqFxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRlc3ROdW0gPT0gMCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZSA9IGAge1wiZXJybm9cIjpcIjBcIixcImRhdGFcIjp7XCJub3dCYWxTaG93XCI6XCIxODkuNjBcIixcIm5vd0xldmVsXCI6MixcImFjdENvdW50Q2ZnXCI6XCI4MFwiLFwibmV4dEx2Q291bnRcIjoxMCxcIm5vd0xvZ0RheXNcIjo0LFwidG9kYXlHYXRlc1wiOjEsXCJzaG93TGlzdFwiOlt7XCJuZWVkQmFsXCI6XCI1MDBcIixcImRyYXdCYWxcIjpcIjUwMFwiLFwiaWRcIjoyLFwibmV3ZXJUYWdcIjoyLFwibmVlZExldmVsXCI6NDEsXCJsZWZ0XCI6LTEsXCJuZWVkRGF5c1wiOjN9LHtcIm5lZWRCYWxcIjpcIjEwMDBcIixcImRyYXdCYWxcIjpcIjEwMDBcIixcImlkXCI6MyxcIm5ld2VyVGFnXCI6MixcIm5lZWRMZXZlbFwiOjQyLFwibGVmdFwiOi0xLFwibmVlZERheXNcIjo1fSx7XCJuZWVkQmFsXCI6XCIxNTAwXCIsXCJkcmF3QmFsXCI6XCIxNTAwXCIsXCJpZFwiOjQsXCJuZXdlclRhZ1wiOjIsXCJuZWVkTGV2ZWxcIjo0MyxcImxlZnRcIjotMSxcIm5lZWREYXlzXCI6MTB9LHtcIm5lZWRCYWxcIjpcIjIwMDBcIixcImRyYXdCYWxcIjpcIjIwMDBcIixcImlkXCI6NSxcIm5ld2VyVGFnXCI6MixcIm5lZWRMZXZlbFwiOjQ0LFwibGVmdFwiOi0xLFwibmVlZERheXNcIjowfV19LFwidGltZVNpZ25cIjoxNzEzMTA2NTc1NzY3LFwiZXJybXNnXCI6XCJzdWNjZXNzXCJ9YFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQganNvbiA9IEpTT04ucGFyc2UobWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBqc29uLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gR2xvYmFsRXZlbnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnRMaXN0UmVxdWVzdChkYXRhKSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRlc3ROdW0rKztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBgIHtcImVycm5vXCI6XCIwXCIsXCJkYXRhXCI6e1wibm93QmFsU2hvd1wiOlwiMTA0ODkuNjBcIixcIm5vd0xldmVsXCI6MixcImFjdENvdW50Q2ZnXCI6XCI4MFwiLFwibmV4dEx2Q291bnRcIjoxMCxcIm5vd0xvZ0RheXNcIjo0LFwidG9kYXlHYXRlc1wiOjMsXCJzaG93TGlzdFwiOlt7XCJuZWVkQmFsXCI6XCI1MDBcIixcImRyYXdCYWxcIjpcIjUwMFwiLFwiaWRcIjoyLFwibmV3ZXJUYWdcIjoyLFwibmVlZExldmVsXCI6NDEsXCJsZWZ0XCI6LTEsXCJuZWVkRGF5c1wiOjN9LHtcIm5lZWRCYWxcIjpcIjEwMDBcIixcImRyYXdCYWxcIjpcIjEwMDBcIixcImlkXCI6MyxcIm5ld2VyVGFnXCI6MixcIm5lZWRMZXZlbFwiOjQyLFwibGVmdFwiOi0xLFwibmVlZERheXNcIjo1fSx7XCJuZWVkQmFsXCI6XCIxNTAwXCIsXCJkcmF3QmFsXCI6XCIxNTAwXCIsXCJpZFwiOjQsXCJuZXdlclRhZ1wiOjIsXCJuZWVkTGV2ZWxcIjo0MyxcImxlZnRcIjotMSxcIm5lZWREYXlzXCI6MTB9LHtcIm5lZWRCYWxcIjpcIjIwMDBcIixcImRyYXdCYWxcIjpcIjIwMDBcIixcImlkXCI6NSxcIm5ld2VyVGFnXCI6MixcIm5lZWRMZXZlbFwiOjQ0LFwibGVmdFwiOi0xLFwibmVlZERheXNcIjowfV19LFwidGltZVNpZ25cIjoxNzEzMTA2NTc1NzY3LFwiZXJybXNnXCI6XCJzdWNjZXNzXCJ9YFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQganNvbiA9IEpTT04ucGFyc2UobWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBqc29uLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gR2xvYmFsRXZlbnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnRMaXN0UmVxdWVzdChkYXRhKSlcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYWN0aW9uID09IFwiL3F2MmMvbGMvcmRvbS9kcmF3XCIpIHsgICAgIC8v6L2s55uY5oq95aWWXHJcbiAgICAgICAgICAgICAgICBsZXQganNvbiA9IHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYXdhcmRUeXBlXCI6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYXdhcmRTaG93XCI6IFwiMjAwMDBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb3VudFwiOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImJhbFNob3dcIjogXCIyNTQwMC4wMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIEdsb2JhbEV2ZW50LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50VHVybnRhYmxlKGpzb24uZGF0YSkpXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYWN0aW9uID09IFwiL3F2MmMvbHQvYXdcIikgeyAgICAgLy/ovaznm5jmir3lpZZcclxuICAgICAgICAgICAgICAgIGxldCBqc29uID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhbXRTaG93XCI6IFwiNS4yXCIsLy8gLS0gLSDpooblj5bnmoTph5Hpop1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJiYWxTaG93XCI6IFwiMTEuMzBcIiwgLy8tLeW9k+WJjeS9meminVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5vd0xldmVsXCI6IDEsIC8vLS0tLS0+IOW9k+WJjeeUqOaIt+OAkOetiee6p+OAkVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5leHRMdkNvdW50XCI6IDg4LC8vLS0tLT4g5LiL5LiA562J57qn44CQ6ZyA6L6+5Yiw55qE5oC7562U6aKY5pWw44CRXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidG9kYXlHYXRlc1wiOiA1LCAvLy0t5b2T5aSp5raI6Zmk44CQ5qyh5pWw44CRXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYWxsR2F0ZXNcIjogNS8vLS3mtojpmaTjgJDmgLvmrKHmlbDjgJFcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gR2xvYmFsRXZlbnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnRHZXRBd2FyZFJlcXVlc3QoanNvbi5kYXRhKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnQgY29uc3Qgc2RrID0gU0RLTWFuYWdlci5nZXRJbnN0YW5jZSgpO1xyXG53aW5kb3dbXCJYU1Nka0NhbGxiYWNrXCJdID0gZnVuY3Rpb24gKGFjdGlvbiwganNvblN0cikge1xyXG4gICAgY29uc29sZS5sb2coXCIqKioqKioqKioqKioqKirliY3nq6/mlLbliLDmtojmga8qKioqKioqKioqKioqKipcIiwgYWN0aW9uICsgXCIgICBcIiwganNvblN0cik7XHJcbiAgICBsZXQganNvbiA9IEpTT04ucGFyc2UoanNvblN0cik7XHJcbiAgICBpZiAoYWN0aW9uID09IFwiYWRfcGxheVwiKSB7ICAgICAvL+inhumikeW8gOWni+aSreaUvlxyXG4gICAgICAgIC8vIEV2ZW50RGlzcGF0aC5zZW5kKEV2ZW50VHlwZS5WSURFT19CQUNLLCAxKTtcclxuICAgIH0gZWxzZSBpZiAoYWN0aW9uID09IFwiYWRfb3ZlclwiKSB7ICAgICAvL+inhumikeaSreaUvue7k+adn1xyXG4gICAgICAgIC8vIEdsb2JhbEV2ZW50LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50QWRPdmVyUmVxdWVzdChqc29uLmFkX3NvdXJjZSkpXHJcbiAgICB9IGVsc2UgaWYgKGFjdGlvbiA9PSBcImFkX2Vycm9yXCIpIHsgICAgIC8v6KeG6aKR5pKt5pS+5Ye66ZSZXHJcbiAgICAgICAgbGV0IGNmZyA9IEJhbGxfTWFpbi5pbnN0YW5jZS5jb25maWc7XHJcbiAgICAgICAgbGV0IHRpcHMgPSBcIlwiXHJcblxyXG4gICAgICAgIGlmIChiYy5jb3VudHJ5ID09IFwiMlwiKSB7XHJcblxyXG4gICAgICAgICAgICB0aXBzID0gY2ZnLmpzb24ubGFuZ3VhZ2VbJ3B0J10udGlwczI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChiYy5jb3VudHJ5ID09IFwiMTNcIikge1xyXG4gICAgICAgICAgICB0aXBzID0gY2ZnLmpzb24ubGFuZ3VhZ2VbJ2luJ10udGlwczI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGlwcyA9IGNmZy5qc29uLmxhbmd1YWdlWydlbiddLnRpcHMyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBHYW1lVXRpbHMuc2hvd1RvYXN0KHRpcHMpO1xyXG4gICAgfSBlbHNlIGlmIChhY3Rpb24gPT0gXCJhZF9jZFwiKSB7ICAgICAvL+inhumikeaSreaUvuinhumikeWGt+WNtOS4rVxyXG4gICAgfSBlbHNlIGlmIChhY3Rpb24gPT0gXCIvcXYyYy9sdC9hd1wiKSB7ICAgICAvL+mihuWPluWlluWKsVxyXG4gICAgICAgIC8vIEdsb2JhbEV2ZW50LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50R2V0QXdhcmRSZXF1ZXN0KGpzb24uZGF0YSkpO1xyXG4gICAgICAgIC8vICAgIHtcclxuICAgICAgICAvLyAgICAgXCJlcnJub1wiOiBcIjBcIixcclxuICAgICAgICAvLyAgICAgICAgIFwiZXJybXNnXCI6IFwic3VjY2Vzc1wiLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIFwiZGF0YVwiOiB7XHJcbiAgICAgICAgLy8gICAgICAgICBcImFtdFNob3dcIjogXCI1LjJcIiwgLS0tIOmihuWPlueahOmHkeminVxyXG4gICAgICAgIC8vICAgICAgICAgXCJiYWxTaG93XCI6IFwiMTEuMzBcIiwgLS3lvZPliY3kvZnpop1cclxuICAgICAgICAvLyAgICAgICAgIFwibm93TGV2ZWxcIjogMSwgLS0tLS0+IOW9k+WJjeeUqOaIt+OAkOetiee6p+OAkVxyXG4gICAgICAgIC8vICAgICAgICAgXCJuZXh0THZDb3VudFwiOiA4OCwgLS0tLT4g5LiL5LiA562J57qn44CQ6ZyA6L6+5Yiw55qE5oC7562U6aKY5pWw44CRXHJcbiAgICAgICAgLy8gICAgICAgICBcInRvZGF5R2F0ZXNcIjogNSwgLS3lvZPlpKnmtojpmaTjgJDmrKHmlbDjgJFcclxuICAgICAgICAvLyAgICAgICAgIFwiYWxsR2F0ZXNcIjogNS0t5raI6Zmk44CQ5oC75qyh5pWw44CRXHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gICAgIFwidGltZVNpZ25cIjogMTY5OTQyNzM3ODg2MVxyXG4gICAgfSBlbHNlIGlmIChhY3Rpb24gPT0gXCIvcXYyYy9sYy9yZG9tL2RyYXdcIikgeyAgICAgLy/ovaznm5jmir3lpZZcclxuICAgICAgICAvLyBHbG9iYWxFdmVudC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudFR1cm50YWJsZShqc29uLmRhdGEpKVxyXG4gICAgICAgIC8vICAgICB7XHJcbiAgICAgICAgLy8gICAgIFwiZXJybm9cIjogXCIwXCIsXHJcbiAgICAgICAgLy8gICAgICAgICBcImVycm1zZ1wiOiBcInN1Y2Nlc3NcIixcclxuICAgICAgICAvLyAgICAgICAgICAgICBcImRhdGFcIjoge1xyXG4gICAgICAgIC8vICAgICAgICAgXCJhd2FyZFR5cGVcIjogMSwgLS0tLeOAi+WbuuWumuexu+Wei++8jOacrOeJiOacrOW/veeVpVxyXG4gICAgICAgIC8vICAgICAgICAgXCJhd2FyZFNob3dcIjogXCIyMDAwMFwiLCAtLS0t44CL5aWW5Yqx6YeR6aKdXHJcbiAgICAgICAgLy8gICAgICAgICBcImNvdW50XCI6IDEsIC0tLS3jgIvmir3lpZbmrKHmlbBcclxuICAgICAgICAvLyAgICAgICAgIFwiYmFsU2hvd1wiOiBcIjI1NDAwLjAwXCItLS0t44CL5oC75L2Z6aKdXHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gICAgIFwidGltZVNpZ25cIjogMTcxMTYzODA3NTY2NVxyXG4gICAgfSBlbHNlIGlmIChhY3Rpb24gPT0gXCIvcXYyYy9sYy9hd2FsL2xpc3RcIikgeyAgICAgLy/mj5DnjrDliJfooahcclxuICAgICAgICAvLyBHbG9iYWxFdmVudC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudExpc3RSZXF1ZXN0KGpzb24uZGF0YSkpXHJcbiAgICAgICAgLy8gICAgICAgICB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgXCJlcnJub1wiOiBcIjBcIixcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgXCJlcnJtc2dcIjogXCJzdWNjZXNzXCIsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBcImRhdGFcIjoge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBcIm5vd0xvZ0RheXNcIjogMCwgLS3lvZPliY3nmbvlvZXlpKnmlbBcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgXCJub3dMZXZlbFwiOiAwLCAtLeW9k+WJjeetiee6p1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBcInRvZGF5R2F0ZXNcIu+8mjEwLCAtLeS7iuWkqea2iOmZpOasoeaVsFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBcIm5vd0JhbFNob3dcIjogXCIyNTQwMC4wMFwiLCAtLS0g5b2T5YmN5L2Z6aKdXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIFwiYWN0Q291bnRDZmdcIjogODAsIC0tLSDnlKjkuo7orqHnrpflvZPlpKnlrozmiJDlpJrlsJHmtojpmaTmiY3nrpcx5aSpXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIFwibmV4dEx2Q291bnRcIjogMTAsIC0t5LiL5LiA562J57qn6ZyA6KaB6L6+5Yiw55qE5oC75pWwXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIC8v5o+Q546w5p2h5Lu26aG65bqP77yaMSzmu6HotrMgNzUwMDAwIDLvvIzmu6HotrM3NTAwMOaXtuW8gOWni+iuoeeul+e0r+iuoeeZu+W9leWkqeaVsO+8jOa7oei2s+e0r+iuoeeZu+W9leWkqeaVsCAz77yM6L6+5Yiw55qE562J57qn77yI6L6+5LiN5Yiw77yJXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIFwic2hvd0xpc3RcIjogW1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgeyBcImlkXCI6IDIsLS0gLT4g5o+Q546w5a+55bqUSURcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgIFwiZHJhd0JhbFwiOiBcIjc1MDAwMFwiLCAtLS0+IOaPkOeOsOebruagh1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5lZWRCYWxcIjogXCI3NTAwMDBcIiwgLS0tPiDpnIDopoHovr7liLDnmoTkvZnpop1cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuZXdlclRhZ1wiOiAyLCAtLS0+IOaYr+WQpuaYr+aWsOS6uuaPkOeOsO+8jDHmmK8gMuWFtuWug+aPkOeOsFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsZWZ0XCI6IC0xLCAtLS3jgIvliankvZnlj6/mj5DnjrDmrKHmlbBcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmVlZERheXNcIjogMywgLS0t44CL6ZyA6KaB6L6+5Yiw55qE55m75b2V5aSp5pWwXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgIFwibmVlZExldmVsXCI6IDQxLS0gLeOAi+mcgOimgei+vuWIsOeahOetiee6p1xyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8gICAgICAgICAgICAge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBcImlkXCI6IDMsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBcImRyYXdCYWxcIjogXCIxMDAwMDAwXCIsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgXCJuZWVkQmFsXCI6IFwiMTAwMDAwMFwiLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5ld2VyVGFnXCI6IDIsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxlZnRcIjogLTEsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuZWVkRGF5c1wiOiA1LFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5lZWRMZXZlbFwiOiA0MlxyXG4gICAgICAgIC8vICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgLy8gICAgICAgICAgICAge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBcImlkXCI6IDQsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBcImRyYXdCYWxcIjogXCIzMDAwMDAwXCIsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgXCJuZWVkQmFsXCI6IFwiMzAwMDAwMFwiLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5ld2VyVGFnXCI6IDIsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxlZnRcIjogLTEsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuZWVkRGF5c1wiOiAxMCxcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuZWVkTGV2ZWxcIjogNDNcclxuICAgICAgICAvLyAgICAgICAgICAgICB9LFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgXCJpZFwiOiA1LFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgXCJkcmF3QmFsXCI6IFwiNTAwMDAwMFwiLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIFwibmVlZEJhbFwiOiBcIjUwMDAwMDBcIixcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuZXdlclRhZ1wiOiAyLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsZWZ0XCI6IC0xLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmVlZERheXNcIjogMCxcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuZWVkTGV2ZWxcIjogNDRcclxuICAgICAgICAvLyAgICAgICAgICAgICB9XVxyXG4gICAgICAgIC8vICAgICAgICAgfSxcclxuICAgIH1cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/merge/define/TypeDefine.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '26083HQUZhNsJndxpxVjML2', 'TypeDefine');
// script/merge/define/TypeDefine.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LAYER = void 0;
// 层级
var LAYER;
(function (LAYER) {
    LAYER["UI"] = "ui";
    LAYER["DIALOG"] = "dialog";
    LAYER["TIP"] = "tip";
    LAYER["GUIDE"] = "guide";
})(LAYER = exports.LAYER || (exports.LAYER = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvbWVyZ2UvZGVmaW5lL1R5cGVEZWZpbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsS0FBSztBQUNMLElBQVksS0FLWDtBQUxELFdBQVksS0FBSztJQUNiLGtCQUFTLENBQUE7SUFDVCwwQkFBaUIsQ0FBQTtJQUNqQixvQkFBVyxDQUFBO0lBQ1gsd0JBQWUsQ0FBQTtBQUNuQixDQUFDLEVBTFcsS0FBSyxHQUFMLGFBQUssS0FBTCxhQUFLLFFBS2hCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8g5bGC57qnXG5leHBvcnQgZW51bSBMQVlFUiB7XG4gICAgVUkgPSAndWknLFxuICAgIERJQUxPRyA9ICdkaWFsb2cnLFxuICAgIFRJUCA9ICd0aXAnLFxuICAgIEdVSURFID0gJ2d1aWRlJyxcbn1cblxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/merge/game/MergeScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0af54diud5JN6SYpIPIvcRc', 'MergeScene');
// script/merge/game/MergeScene.ts

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
var PlayerModule_1 = require("../dataModule/PlayerModule");
var TypeDefine_1 = require("../define/TypeDefine");
var Uimanager_1 = require("../manager/Uimanager");
var ccclass = cc._decorator.ccclass;
var MergeScene = /** @class */ (function (_super) {
    __extends(MergeScene, _super);
    function MergeScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MergeScene.prototype.onLoad = function () {
        console.log('load mergeScene');
    };
    MergeScene.prototype.start = function () {
        var _this = this;
        // 初始化界面层级
        Uimanager_1.uimanager.init(this.node);
        // login
        PlayerModule_1.playerModule.login(function () {
            // 添加游戏玩法界面
            _this.initGamePanel();
        });
    };
    MergeScene.prototype.update = function () {
        Uimanager_1.uimanager.udpateLayerShow();
    };
    MergeScene.prototype.initGamePanel = function () {
        return __awaiter(this, void 0, void 0, function () {
            var prefab, gameNode;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Uimanager_1.uimanager.loadPrefab('prefab/merge/game')];
                    case 1:
                        prefab = _a.sent();
                        gameNode = cc.instantiate(prefab);
                        Uimanager_1.uimanager.add(gameNode, TypeDefine_1.LAYER.UI);
                        gameNode.setPosition(new cc.Vec2(0, 0));
                        return [2 /*return*/];
                }
            });
        });
    };
    MergeScene = __decorate([
        ccclass
    ], MergeScene);
    return MergeScene;
}(cc.Component));
exports.default = MergeScene;
/**
 *      1、合成数字15获得1个星星，顶部显示当前星星持有总数；
 *          当合成8之前，每次发放5个，类型为2个，数字区间固定在1~7之间；
 *          当合成8之后，每次发放6个，类型为3个，数字区间固定在min~7之间；
 *          当合成10之后，每次发放7个，类型为4个，数字区间固定在min~8之间；
 *          当合成12之后，每次发放10个，类型为5个，数字区间固定在min~10之间；
 *
 *          防作弊：
 *          当今日全服合成星星总数量 > 100 || 当人单日合成总星星 > 5， 合成12后，每次发放15个，类型为7个，数字区间min~10;(趋近于无法继续达成，控制放出总量);
 *
 *
 *      2、清理规则
 *          每局可以免费整理一次；
 *          每局可以通过分享功能一次整理；
 *          每局可以通过看视频完成一次整理；
 *          以上所有方式用过后，还可以通过刷新道具整理；
 *          刷新道具可以通过邀请获得，每邀请1个人，赠送一个刷新道具，刷新道具也可以通过星星兑换获得；
 *      7、商品清单滚动播放：4个刷新道具需要1个星星、1箱金典牛奶29个星星，1包心相印湿巾需要5个星星，1本DK百科全书30个星星...商品横向滚动展示清单最右侧保留“更多奖励”按钮；
 *      8、选择实物兑换后，兑换页面填写“收件人、收件地址、联系方式”，并在确认兑换前，弹出确认收货信息的确认单以及不退不换的声明；
 *      9、添加规则页面，规则页面添加免责声明，以及不退换声明；
 *      10、添加历史星星总获得数排行榜；
 */

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvbWVyZ2UvZ2FtZS9NZXJnZVNjZW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJEQUEwRDtBQUMxRCxtREFBNkM7QUFDN0Msa0RBQWlEO0FBRXpDLElBQUEsT0FBTyxHQUFLLEVBQUUsQ0FBQyxVQUFVLFFBQWxCLENBQW1CO0FBR2xDO0lBQXdDLDhCQUFZO0lBQXBEOztJQTBCQSxDQUFDO0lBekJHLDJCQUFNLEdBQU47UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELDBCQUFLLEdBQUw7UUFBQSxpQkFTQztRQVJHLFVBQVU7UUFDVixxQkFBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFMUIsUUFBUTtRQUNSLDJCQUFZLENBQUMsS0FBSyxDQUFDO1lBQ2YsV0FBVztZQUNYLEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCwyQkFBTSxHQUFOO1FBQ0kscUJBQVMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBRUssa0NBQWEsR0FBbkI7Ozs7OzRCQUNtQixxQkFBTSxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFBOzt3QkFBeEQsTUFBTSxHQUFHLFNBQStDO3dCQUN4RCxRQUFRLEdBQVksRUFBRSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQzt3QkFDakQscUJBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLGtCQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7d0JBQ2xDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7OztLQUMzQztJQXpCZ0IsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQTBCOUI7SUFBRCxpQkFBQztDQTFCRCxBQTBCQyxDQTFCdUMsRUFBRSxDQUFDLFNBQVMsR0EwQm5EO2tCQTFCb0IsVUFBVTtBQTRCL0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXFCRyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHBsYXllck1vZHVsZSB9IGZyb20gJy4uL2RhdGFNb2R1bGUvUGxheWVyTW9kdWxlJztcbmltcG9ydCB7IExBWUVSIH0gZnJvbSAnLi4vZGVmaW5lL1R5cGVEZWZpbmUnO1xuaW1wb3J0IHsgdWltYW5hZ2VyIH0gZnJvbSAnLi4vbWFuYWdlci9VaW1hbmFnZXInO1xuXG5jb25zdCB7IGNjY2xhc3MgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXJnZVNjZW5lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdsb2FkIG1lcmdlU2NlbmUnKTtcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgLy8g5Yid5aeL5YyW55WM6Z2i5bGC57qnXG4gICAgICAgIHVpbWFuYWdlci5pbml0KHRoaXMubm9kZSk7XG5cbiAgICAgICAgLy8gbG9naW5cbiAgICAgICAgcGxheWVyTW9kdWxlLmxvZ2luKCgpID0+IHtcbiAgICAgICAgICAgIC8vIOa3u+WKoOa4uOaIj+eOqeazleeVjOmdolxuICAgICAgICAgICAgdGhpcy5pbml0R2FtZVBhbmVsKCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICB1aW1hbmFnZXIudWRwYXRlTGF5ZXJTaG93KCk7XG4gICAgfVxuXG4gICAgYXN5bmMgaW5pdEdhbWVQYW5lbCgpIHtcbiAgICAgICAgY29uc3QgcHJlZmFiID0gYXdhaXQgdWltYW5hZ2VyLmxvYWRQcmVmYWIoJ3ByZWZhYi9tZXJnZS9nYW1lJyk7XG4gICAgICAgIGNvbnN0IGdhbWVOb2RlOiBjYy5Ob2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcbiAgICAgICAgdWltYW5hZ2VyLmFkZChnYW1lTm9kZSwgTEFZRVIuVUkpO1xuICAgICAgICBnYW1lTm9kZS5zZXRQb3NpdGlvbihuZXcgY2MuVmVjMigwLCAwKSk7XG4gICAgfVxufVxuXG4vKipcbiAqICAgICAgMeOAgeWQiOaIkOaVsOWtlzE16I635b6XMeS4quaYn+aYn++8jOmhtumDqOaYvuekuuW9k+WJjeaYn+aYn+aMgeacieaAu+aVsO+8m1xuICogICAgICAgICAg5b2T5ZCI5oiQOOS5i+WJje+8jOavj+asoeWPkeaUvjXkuKrvvIznsbvlnovkuLoy5Liq77yM5pWw5a2X5Yy66Ze05Zu65a6a5ZyoMX435LmL6Ze077ybXG4gKiAgICAgICAgICDlvZPlkIjmiJA45LmL5ZCO77yM5q+P5qyh5Y+R5pS+NuS4qu+8jOexu+Wei+S4ujPkuKrvvIzmlbDlrZfljLrpl7Tlm7rlrprlnKhtaW5+N+S5i+mXtO+8m1xuICogICAgICAgICAg5b2T5ZCI5oiQMTDkuYvlkI7vvIzmr4/mrKHlj5HmlL435Liq77yM57G75Z6L5Li6NOS4qu+8jOaVsOWtl+WMuumXtOWbuuWumuWcqG1pbn445LmL6Ze077ybXG4gKiAgICAgICAgICDlvZPlkIjmiJAxMuS5i+WQju+8jOavj+asoeWPkeaUvjEw5Liq77yM57G75Z6L5Li6NeS4qu+8jOaVsOWtl+WMuumXtOWbuuWumuWcqG1pbn4xMOS5i+mXtO+8m1xuICpcbiAqICAgICAgICAgIOmYsuS9nOW8iu+8mlxuICogICAgICAgICAg5b2T5LuK5pel5YWo5pyN5ZCI5oiQ5pif5pif5oC75pWw6YePID4gMTAwIHx8IOW9k+S6uuWNleaXpeWQiOaIkOaAu+aYn+aYnyA+IDXvvIwg5ZCI5oiQMTLlkI7vvIzmr4/mrKHlj5HmlL4xNeS4qu+8jOexu+Wei+S4ujfkuKrvvIzmlbDlrZfljLrpl7RtaW5+MTA7KOi2i+i/keS6juaXoOazlee7p+e7rei+vuaIkO+8jOaOp+WItuaUvuWHuuaAu+mHjyk7XG4gKlxuICpcbiAqICAgICAgMuOAgea4heeQhuinhOWImVxuICogICAgICAgICAg5q+P5bGA5Y+v5Lul5YWN6LS55pW055CG5LiA5qyh77ybXG4gKiAgICAgICAgICDmr4/lsYDlj6/ku6XpgJrov4fliIbkuqvlip/og73kuIDmrKHmlbTnkIbvvJtcbiAqICAgICAgICAgIOavj+WxgOWPr+S7pemAmui/h+eci+inhumikeWujOaIkOS4gOasoeaVtOeQhu+8m1xuICogICAgICAgICAg5Lul5LiK5omA5pyJ5pa55byP55So6L+H5ZCO77yM6L+Y5Y+v5Lul6YCa6L+H5Yi35paw6YGT5YW35pW055CG77ybXG4gKiAgICAgICAgICDliLfmlrDpgZPlhbflj6/ku6XpgJrov4fpgoDor7fojrflvpfvvIzmr4/pgoDor7cx5Liq5Lq677yM6LWg6YCB5LiA5Liq5Yi35paw6YGT5YW377yM5Yi35paw6YGT5YW35Lmf5Y+v5Lul6YCa6L+H5pif5pif5YWR5o2i6I635b6X77ybXG4gKiAgICAgIDfjgIHllYblk4HmuIXljZXmu5rliqjmkq3mlL7vvJo05Liq5Yi35paw6YGT5YW36ZyA6KaBMeS4quaYn+aYn+OAgTHnrrHph5HlhbjniZvlpbYyOeS4quaYn+aYn++8jDHljIXlv4Pnm7jljbDmub/lt77pnIDopoE15Liq5pif5pif77yMMeacrERL55m+56eR5YWo5LmmMzDkuKrmmJ/mmJ8uLi7llYblk4HmqKrlkJHmu5rliqjlsZXnpLrmuIXljZXmnIDlj7Pkvqfkv53nlZnigJzmm7TlpJrlpZblirHigJ3mjInpkq7vvJtcbiAqICAgICAgOOOAgemAieaLqeWunueJqeWFkeaNouWQju+8jOWFkeaNoumhtemdouWhq+WGmeKAnOaUtuS7tuS6uuOAgeaUtuS7tuWcsOWdgOOAgeiBlOezu+aWueW8j+KAne+8jOW5tuWcqOehruiupOWFkeaNouWJje+8jOW8ueWHuuehruiupOaUtui0p+S/oeaBr+eahOehruiupOWNleS7peWPiuS4jemAgOS4jeaNoueahOWjsOaYju+8m1xuICogICAgICA544CB5re75Yqg6KeE5YiZ6aG16Z2i77yM6KeE5YiZ6aG16Z2i5re75Yqg5YWN6LSj5aOw5piO77yM5Lul5Y+K5LiN6YCA5o2i5aOw5piO77ybXG4gKiAgICAgIDEw44CB5re75Yqg5Y6G5Y+y5pif5pif5oC76I635b6X5pWw5o6S6KGM5qac77ybXG4gKi9cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/common/SceneManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fbeef/Ai/5LPqAeelQWHWQ8', 'SceneManager');
// script/common/SceneManager.ts

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
exports.sm = exports.GameScene = exports.SceneType = void 0;
var UIManager_1 = require("../game/common/UIManager");
var logger_1 = require("../utils/logger");
var Utils_1 = require("../utils/Utils");
var SceneLoadingUI_1 = require("./comp/SceneLoadingUI");
var Global_1 = require("./Global");
var GlobalEvents_1 = require("./GlobalEvents");
var SceneType;
(function (SceneType) {
    SceneType[SceneType["None"] = -1] = "None";
    SceneType[SceneType["Loading"] = 0] = "Loading";
    SceneType[SceneType["Stage"] = 1] = "Stage";
    SceneType[SceneType["Select"] = 2] = "Select";
    SceneType[SceneType["Main"] = 3] = "Main";
})(SceneType = exports.SceneType || (exports.SceneType = {}));
var GameScene = /** @class */ (function (_super) {
    __extends(GameScene, _super);
    function GameScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GameScene.prototype.initScene = function (param) {
        if (param === void 0) { param = undefined; }
    };
    GameScene.prototype.removeScene = function () { };
    GameScene.prototype.getNode = function () { return; };
    GameScene.prototype.getType = function () { return -1; };
    return GameScene;
}(cc.Component));
exports.GameScene = GameScene;
var SceneManager = /** @class */ (function () {
    function SceneManager() {
        this.node = null;
        this.curScene = null;
        this.lastSceneType = -1;
        this.nextSceneType = -1;
        this.isSceneLoading = false;
    }
    Object.defineProperty(SceneManager, "ins", {
        get: function () {
            return this._ins || new SceneManager();
        },
        enumerable: false,
        configurable: true
    });
    SceneManager.prototype.onLoad = function (node) {
        this.node = node;
    };
    SceneManager.prototype.switchScene = function (T, params, showProgressBar) {
        if (params === void 0) { params = undefined; }
        if (showProgressBar === void 0) { showProgressBar = false; }
        return __awaiter(this, void 0, void 0, function () {
            var sceneType, oldScene, _a, curSceneNode;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.isSceneLoading = true;
                        sceneType = T.GetType();
                        // if(sceneType == this.curScene.getType()){
                        //     return;
                        // }
                        this.nextSceneType = sceneType;
                        logger_1.Logger.debug("[Ball_Main swtichScene]>>>>>>>>>", sceneType);
                        oldScene = this.curScene;
                        if (oldScene) {
                            UIManager_1.ui.onSwitchScene();
                            oldScene.removeScene();
                        }
                        _a = this;
                        return [4 /*yield*/, this.createScene(T)];
                    case 1:
                        _a.curScene = _b.sent();
                        if (this.curScene) {
                            curSceneNode = null;
                            curSceneNode = this.curScene.getNode();
                            this.node.destroyAllChildren();
                            this.node.addChild(curSceneNode);
                            Global_1.GlobalEvent.dispatchEvent(new GlobalEvents_1.EventOnSwitchScene());
                        }
                        if (showProgressBar) {
                            SceneLoadingUI_1.default.setProgress(1);
                        }
                        if (!this.curScene) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.curScene.initScene(params)];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        this.lastSceneType = this.nextSceneType;
                        this.isSceneLoading = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    SceneManager.prototype.createScene = function (T) {
        return __awaiter(this, void 0, Promise, function () {
            var prefab, ins, comps, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Utils_1.Utils.loadPefab(T.Prefab_Name)];
                    case 1:
                        prefab = _a.sent();
                        ins = cc.instantiate(prefab);
                        ins.width = this.node.width;
                        ins.height = this.node.height;
                        ins.x = 0;
                        ins.y = 0;
                        comps = ins.getComponentsInChildren(cc.Component);
                        for (i = 0; i < comps.length; i++) {
                            if (comps[i] instanceof (GameScene)) {
                                return [2 /*return*/, comps[i]];
                            }
                        }
                        return [2 /*return*/, undefined];
                }
            });
        });
    };
    return SceneManager;
}());
exports.default = SceneManager;
exports.sm = SceneManager.ins;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvY29tbW9uL1NjZW5lTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0RBQThDO0FBQzlDLDBDQUF5QztBQUN6Qyx3Q0FBdUM7QUFDdkMsd0RBQW1EO0FBQ25ELG1DQUF1QztBQUN2QywrQ0FBb0Q7QUFFcEQsSUFBWSxTQU1YO0FBTkQsV0FBWSxTQUFTO0lBQ2pCLDBDQUFTLENBQUE7SUFDVCwrQ0FBVyxDQUFBO0lBQ1gsMkNBQVMsQ0FBQTtJQUNULDZDQUFVLENBQUE7SUFDVix5Q0FBUSxDQUFBO0FBQ1osQ0FBQyxFQU5XLFNBQVMsR0FBVCxpQkFBUyxLQUFULGlCQUFTLFFBTXBCO0FBRUQ7SUFBK0IsNkJBQVk7SUFBM0M7O0lBS0EsQ0FBQztJQUpHLDZCQUFTLEdBQVQsVUFBVSxLQUFzQjtRQUF0QixzQkFBQSxFQUFBLGlCQUFzQjtJQUFTLENBQUM7SUFDMUMsK0JBQVcsR0FBWCxjQUFxQixDQUFDO0lBQ3RCLDJCQUFPLEdBQVAsY0FBcUIsT0FBTSxDQUFDLENBQUM7SUFDN0IsMkJBQU8sR0FBUCxjQUF1QixPQUFPLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUN0QyxnQkFBQztBQUFELENBTEEsQUFLQyxDQUw4QixFQUFFLENBQUMsU0FBUyxHQUsxQztBQUxZLDhCQUFTO0FBT3RCO0lBYUk7UUFSTyxTQUFJLEdBQVksSUFBSSxDQUFDO1FBQ3JCLGFBQVEsR0FBYyxJQUFJLENBQUM7UUFFM0Isa0JBQWEsR0FBYyxDQUFDLENBQUMsQ0FBQztRQUM5QixrQkFBYSxHQUFjLENBQUMsQ0FBQyxDQUFDO1FBRTlCLG1CQUFjLEdBQVksS0FBSyxDQUFDO0lBRWYsQ0FBQztJQVh6QixzQkFBa0IsbUJBQUc7YUFBckI7WUFDSSxPQUFPLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxZQUFZLEVB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QUFPLFNBQVMsRUFBQzs7OztLQUNwQjtJQUNMLG1CQUFDO0FBQUQsQ0F0RUEsQUFzRUMsSUFBQTs7QUFDWSxRQUFBLEVBQUUsR0FBRyxZQUFZLENBQUMsR0FBRyxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdWkgfSBmcm9tIFwiLi4vZ2FtZS9jb21tb24vVUlNYW5hZ2VyXCI7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiLi4vdXRpbHMvbG9nZ2VyXCI7XG5pbXBvcnQgeyBVdGlscyB9IGZyb20gXCIuLi91dGlscy9VdGlsc1wiO1xuaW1wb3J0IFNjZW5lTG9hZGluZ1VJIGZyb20gXCIuL2NvbXAvU2NlbmVMb2FkaW5nVUlcIjtcbmltcG9ydCB7IEdsb2JhbEV2ZW50IH0gZnJvbSBcIi4vR2xvYmFsXCI7XG5pbXBvcnQgeyBFdmVudE9uU3dpdGNoU2NlbmUgfSBmcm9tIFwiLi9HbG9iYWxFdmVudHNcIjtcblxuZXhwb3J0IGVudW0gU2NlbmVUeXBlIHtcbiAgICBOb25lID0gLTEsXG4gICAgTG9hZGluZyA9IDAsXG4gICAgU3RhZ2UgPSAxLFxuICAgIFNlbGVjdCA9IDIsXG4gICAgTWFpbiA9IDMsXG59XG5cbmV4cG9ydCBjbGFzcyBHYW1lU2NlbmUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIGluaXRTY2VuZShwYXJhbTogYW55ID0gdW5kZWZpbmVkKTogYW55IHsgfVxuICAgIHJlbW92ZVNjZW5lKCk6IGFueSB7IH1cbiAgICBnZXROb2RlKCk6IGNjLk5vZGUgeyByZXR1cm4gfVxuICAgIGdldFR5cGUoKTogU2NlbmVUeXBlIHsgcmV0dXJuIC0xIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NlbmVNYW5hZ2VyIHtcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zOiBTY2VuZU1hbmFnZXI7XG4gICAgcHVibGljIHN0YXRpYyBnZXQgaW5zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faW5zIHx8IG5ldyBTY2VuZU1hbmFnZXIoKTtcbiAgICB9XG4gICAgcHVibGljIG5vZGU6IGNjLk5vZGUgPSBudWxsO1xuICAgIHB1YmxpYyBjdXJTY2VuZTogR2FtZVNjZW5lID0gbnVsbDtcblxuICAgIHB1YmxpYyBsYXN0U2NlbmVUeXBlOiBTY2VuZVR5cGUgPSAtMTtcbiAgICBwdWJsaWMgbmV4dFNjZW5lVHlwZTogU2NlbmVUeXBlID0gLTE7XG5cbiAgICBwdWJsaWMgaXNTY2VuZUxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIG9uTG9hZChub2RlOiBjYy5Ob2RlKSB7XG4gICAgICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgfVxuXG4gICAgYXN5bmMgc3dpdGNoU2NlbmU8VCBleHRlbmRzIEdhbWVTY2VuZT4oVCwgcGFyYW1zOiBvYmplY3QgPSB1bmRlZmluZWQsIHNob3dQcm9ncmVzc0JhcjogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuaXNTY2VuZUxvYWRpbmcgPSB0cnVlO1xuICAgICAgICBsZXQgc2NlbmVUeXBlOiBTY2VuZVR5cGUgPSBULkdldFR5cGUoKTtcbiAgICAgICAgLy8gaWYoc2NlbmVUeXBlID09IHRoaXMuY3VyU2NlbmUuZ2V0VHlwZSgpKXtcbiAgICAgICAgLy8gICAgIHJldHVybjtcbiAgICAgICAgLy8gfVxuICAgICAgICB0aGlzLm5leHRTY2VuZVR5cGUgPSBzY2VuZVR5cGU7XG4gICAgICAgIExvZ2dlci5kZWJ1ZyhcIltCYWxsX01haW4gc3d0aWNoU2NlbmVdPj4+Pj4+Pj4+XCIsIHNjZW5lVHlwZSk7XG5cbiAgICAgICAgbGV0IG9sZFNjZW5lID0gdGhpcy5jdXJTY2VuZTtcbiAgICAgICAgaWYgKG9sZFNjZW5lKSB7XG4gICAgICAgICAgICB1aS5vblN3aXRjaFNjZW5lKCk7XG4gICAgICAgICAgICBvbGRTY2VuZS5yZW1vdmVTY2VuZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3VyU2NlbmUgPSBhd2FpdCB0aGlzLmNyZWF0ZVNjZW5lKFQpO1xuXG4gICAgICAgIGlmICh0aGlzLmN1clNjZW5lKSB7XG4gICAgICAgICAgICBsZXQgY3VyU2NlbmVOb2RlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICAgICAgICAgIGN1clNjZW5lTm9kZSA9IHRoaXMuY3VyU2NlbmUuZ2V0Tm9kZSgpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3lBbGxDaGlsZHJlbigpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGN1clNjZW5lTm9kZSk7XG5cbiAgICAgICAgICAgIEdsb2JhbEV2ZW50LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50T25Td2l0Y2hTY2VuZSgpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzaG93UHJvZ3Jlc3NCYXIpIHtcbiAgICAgICAgICAgIFNjZW5lTG9hZGluZ1VJLnNldFByb2dyZXNzKDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY3VyU2NlbmUpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuY3VyU2NlbmUuaW5pdFNjZW5lKHBhcmFtcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sYXN0U2NlbmVUeXBlID0gdGhpcy5uZXh0U2NlbmVUeXBlO1xuICAgICAgICB0aGlzLmlzU2NlbmVMb2FkaW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgYXN5bmMgY3JlYXRlU2NlbmU8VCBleHRlbmRzIEdhbWVTY2VuZT4oVCk6IFByb21pc2U8R2FtZVNjZW5lPiB7XG4gICAgICAgIGxldCBwcmVmYWIgPSBhd2FpdCBVdGlscy5sb2FkUGVmYWIoVC5QcmVmYWJfTmFtZSk7XG4gICAgICAgIGxldCBpbnM6IGNjLk5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xuICAgICAgICBpbnMud2lkdGggPSB0aGlzLm5vZGUud2lkdGg7XG4gICAgICAgIGlucy5oZWlnaHQgPSB0aGlzLm5vZGUuaGVpZ2h0O1xuICAgICAgICBpbnMueCA9IDA7XG4gICAgICAgIGlucy55ID0gMDtcbiAgICAgICAgbGV0IGNvbXBzID0gaW5zLmdldENvbXBvbmVudHNJbkNoaWxkcmVuKGNjLkNvbXBvbmVudCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29tcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChjb21wc1tpXSBpbnN0YW5jZW9mIChHYW1lU2NlbmUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbXBzW2ldIGFzIEdhbWVTY2VuZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbn1cbmV4cG9ydCBjb25zdCBzbSA9IFNjZW5lTWFuYWdlci5pbnM7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/common/AudioManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a4aafbJat5JYKLldpFrdTPc', 'AudioManager');
// script/common/AudioManager.ts

"use strict";
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
exports.sd = void 0;
var logger_1 = require("../utils/logger");
var AudioManager = /** @class */ (function () {
    function AudioManager() {
        this.soundLib = {};
        this.audioIds = {};
        this.bgmVolume = null;
        this.sfxVolume = null;
        this.bgmAudioID = null;
        this.curBGMUrl = null;
        this._bgmEnabled = true;
        this._sfxEnabled = true; //!GameConfig.DEBUG;
    }
    Object.defineProperty(AudioManager.prototype, "sfxEnabled", {
        get: function () {
            return this._sfxEnabled;
        },
        set: function (value) {
            this._sfxEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AudioManager.prototype, "bgmEnabled", {
        get: function () {
            return this._bgmEnabled;
        },
        set: function (enabled) {
            this._bgmEnabled = enabled;
        },
        enumerable: false,
        configurable: true
    });
    AudioManager.prototype.init = function () {
        cc.log("audio init");
        this.curBGMUrl = null;
        this.bgmVolume = 0.2;
        this.sfxVolume = 1.0;
        this.bgmAudioID = -1;
        this._bgmEnabled = true;
        this._sfxEnabled = true;
    };
    // 音乐
    AudioManager.prototype.playBGM = function (url, force) {
        // 如果已经播放着就不播放了
        if (this.curBGMUrl && this.curBGMUrl == url && this.bgmAudioID && !force)
            return;
        this.curBGMUrl = url;
        if (this._bgmEnabled) {
            this.stopBGM();
            //cc.url.raw(url)
            cc.resources.load(url, function (err, clip) {
                if (this.curBGMUrl == url) {
                    cc.audioEngine.stopAll();
                    this.bgmAudioID = cc.audioEngine.play(clip, true, this.bgmVolume);
                }
                else {
                    console.log("播放背景音乐失败:", err);
                }
            }.bind(this));
        }
    };
    AudioManager.prototype.stopBGM = function () {
        if (this.bgmAudioID >= 0) {
            cc.audioEngine.stop(this.bgmAudioID);
            this.bgmAudioID = null;
        }
    };
    /**
     * 同步加载声音资源
     * @param url
     */
    AudioManager.prototype.preloadAudioClip = function (soundName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!this._sfxEnabled) {
                    return [2 /*return*/];
                }
                cc.resources.preload("sounds/" + soundName, cc.AudioClip);
                return [2 /*return*/];
            });
        });
    };
    // 音效
    AudioManager.prototype.playSFX = function (url, sfxVolume, ext, loop, isFromNet, onStart) {
        var _this = this;
        if (sfxVolume === void 0) { sfxVolume = this.sfxVolume; }
        if (ext === void 0) { ext = ".mp3"; }
        if (loop === void 0) { loop = false; }
        if (isFromNet === void 0) { isFromNet = false; }
        if (this._sfxEnabled) {
            if (this.soundLib["" + url]) {
                // Logger.debug("[AudioManager playSFX] ", url);
                var audioId = cc.audioEngine.play(this.soundLib["" + url], loop, sfxVolume);
                onStart && onStart();
            }
            else {
                if (isFromNet) {
                    if (!url.startsWith("https://")) {
                        onStart && onStart();
                        return;
                    }
                    cc.assetManager.loadRemote(url, { ext: ext }, function (err, clip) {
                        if (!err) {
                            // Logger.debug("[AudioManager playSFX] ", url);
                            var audioId = cc.audioEngine.play(clip, loop, sfxVolume);
                            _this.audioIds[url] = audioId;
                        }
                        else {
                            logger_1.Logger.debug(err);
                        }
                        onStart && onStart();
                    });
                }
                else {
                    cc.resources.load(url, (function (err, clip) {
                        if (!err) {
                            // Logger.debug("[AudioManager playSFX] ", url);
                            var audioId = cc.audioEngine.play(clip, loop, sfxVolume);
                            _this.soundLib["" + url] = clip;
                            _this.audioIds[url] = audioId;
                        }
                        else {
                            logger_1.Logger.debug(err);
                        }
                        onStart && onStart();
                    }));
                }
            }
        }
        else {
            onStart && onStart();
        }
    };
    AudioManager.prototype.stopSfxByUrl = function (url) {
        var audioId = this.audioIds[url];
        if (audioId != null) {
            cc.audioEngine.stop(audioId);
        }
    };
    AudioManager.prototype.stopSFX = function (audioId) {
        logger_1.Logger.debug("audioId", audioId);
        if (audioId != null) {
            cc.audioEngine.stop(audioId);
        }
    };
    //change
    AudioManager.prototype.getSFXEnabled = function () {
        return this.sfxEnabled;
    };
    AudioManager.prototype.getBGMEnabled = function () {
        return this.bgmEnabled;
    };
    // 暂停
    AudioManager.prototype.pauseBGM = function () {
        if (this.bgmAudioID >= 0) {
            cc.audioEngine.pause(this.bgmAudioID);
        }
    };
    // 恢复
    AudioManager.prototype.resumeBGM = function () {
        if (this.bgmAudioID >= 0) {
            cc.audioEngine.resume(this.bgmAudioID);
        }
    };
    // 卸载音效
    AudioManager.prototype.uncache = function (url) {
        var audioUrl = cc.url.raw(url);
        cc.audioEngine.uncache(audioUrl);
        this.soundLib["" + url] = undefined;
    };
    AudioManager.prototype.uncacheAll = function () {
        cc.audioEngine.uncacheAll();
        this.soundLib = {};
    };
    AudioManager.prototype.pauseAll = function () {
        logger_1.Logger.debug('Pause All Sound');
        cc.audioEngine.pauseAll();
    };
    AudioManager.prototype.resumeAll = function () {
        logger_1.Logger.debug('Resum All Sound');
        cc.audioEngine.resumeAll();
    };
    AudioManager.prototype.stopAll = function () {
        cc.audioEngine.stopAll();
    };
    AudioManager.prototype.clean = function () {
        this.stopAll();
        this.uncacheAll();
        this.curBGMUrl = null;
        this.bgmAudioID = -1;
    };
    AudioManager.Instance = new AudioManager();
    return AudioManager;
}());
exports.default = AudioManager;
exports.sd = AudioManager.Instance;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvY29tbW9uL0F1ZGlvTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwQ0FBeUM7QUFFekM7SUFHSTtRQUdRLGFBQVEsR0FBRyxFQUVsQixDQUFDO1FBQ00sYUFBUSxHQUFDLEVBQUUsQ0FBQztRQUlaLGNBQVMsR0FBUSxJQUFJLENBQUE7UUFDckIsY0FBUyxHQUFRLElBQUksQ0FBQTtRQUNyQixlQUFVLEdBQVEsSUFBSSxDQUFBO1FBRXRCLGNBQVMsR0FBUSxJQUFJLENBQUM7UUFDdEIsZ0JBQVcsR0FBWSxJQUFJLENBQUM7UUFDNUIsZ0JBQVcsR0FBWSxJQUFJLENBQUMsQ0FBQSxvQkFBb0I7SUFmeEQsQ0FBQztJQWlCRCxzQkFBVyxvQ0FBVTthQUdyQjtZQUNJLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUM1QixDQUFDO2FBTEQsVUFBc0IsS0FBYztZQUNoQyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUM3QixDQUFDOzs7T0FBQTtJQUtELHNCQUFXLG9DQUFVO2FBR3JCO1lBQ0ksT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzVCLENBQUM7YUFMRCxVQUFzQixPQUFnQjtZQUNsQyxJQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQztRQUMvQixDQUFDOzs7T0FBQTtJQUtELDJCQUFJLEdBQUo7UUFDSSxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBRXRCLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFckIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJ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QUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELCtCQUFRLEdBQVI7UUFDSSxlQUFNLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDaEMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRUQsZ0NBQVMsR0FBVDtRQUNJLGVBQU0sQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNoQyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFRCw4QkFBTyxHQUFQO1FBQ0ksRUFBRSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsNEJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUF0TWEscUJBQVEsR0FBaUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQXVNOUQsbUJBQUM7Q0F4TUQsQUF3TUMsSUFBQTtrQkF4TW9CLFlBQVk7QUF5TXBCLFFBQUEsRUFBRSxHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiLi4vdXRpbHMvbG9nZ2VyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1ZGlvTWFuYWdlciB7XG4gICAgcHVibGljIHN0YXRpYyBJbnN0YW5jZTogQXVkaW9NYW5hZ2VyID0gbmV3IEF1ZGlvTWFuYWdlcigpO1xuXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHsgICAgICAgXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzb3VuZExpYiA9IHtcblxuICAgIH07XG4gICAgcHJpdmF0ZSBhdWRpb0lkcz17fTtcblxuICAgIHByaXZhdGUgaGFzU2hvd0lPU1dlYk1hc2s6IG51bGxcblxuICAgIHByaXZhdGUgYmdtVm9sdW1lOiBhbnkgPSBudWxsXG4gICAgcHJpdmF0ZSBzZnhWb2x1bWU6IGFueSA9IG51bGxcbiAgICBwcml2YXRlIGJnbUF1ZGlvSUQ6IGFueSA9IG51bGxcblxuICAgIHByaXZhdGUgY3VyQkdNVXJsOiBhbnkgPSBudWxsO1xuICAgIHByaXZhdGUgX2JnbUVuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHByaXZhdGUgX3NmeEVuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlOy8vIUdhbWVDb25maWcuREVCVUc7XG5cbiAgICBwdWJsaWMgc2V0IHNmeEVuYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5fc2Z4RW5hYmxlZCA9IHZhbHVlO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IHNmeEVuYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZnhFbmFibGVkO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgYmdtRW5hYmxlZChlbmFibGVkOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2JnbUVuYWJsZWQgPSBlbmFibGVkO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGJnbUVuYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9iZ21FbmFibGVkO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIGNjLmxvZyhcImF1ZGlvIGluaXRcIik7XG4gICAgICAgIHRoaXMuY3VyQkdNVXJsID0gbnVsbDtcblxuICAgICAgICB0aGlzLmJnbVZvbHVtZSA9IDAuMjtcbiAgICAgICAgdGhpcy5zZnhWb2x1bWUgPSAxLjA7XG4gICAgICAgIHRoaXMuYmdtQXVkaW9JRCA9IC0xO1xuXG4gICAgICAgIHRoaXMuX2JnbUVuYWJsZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLl9zZnhFbmFibGVkID0gdHJ1ZTtcblxuXG5cbiAgICB9XG5cbiAgICAvLyDpn7PkuZBcbiAgICBwdWJsaWMgcGxheUJHTSh1cmwsIGZvcmNlKSB7XG4gICAgICAgIC8vIOWmguaenOW3sue7j+aSreaUvuedgOWwseS4jeaSreaUvuS6hlxuICAgICAgICBpZiAodGhpcy5jdXJCR01VcmwgJiYgdGhpcy5jdXJCR01VcmwgPT0gdXJsICYmIHRoaXMuYmdtQXVkaW9JRCAmJiAhZm9yY2UpIHJldHVybjtcblxuICAgICAgICB0aGlzLmN1ckJHTVVybCA9IHVybDtcbiAgICAgICAgaWYgKHRoaXMuX2JnbUVuYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcEJHTSgpO1xuICAgICAgICAgICAgLy9jYy51cmwucmF3KHVybClcbiAgICAgICAgICAgIGNjLnJlc291cmNlcy5sb2FkKHVybCwgZnVuY3Rpb24gKGVyciwgY2xpcCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1ckJHTVVybCA9PSB1cmwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEFsbCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJnbUF1ZGlvSUQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5KGNsaXAsIHRydWUsIHRoaXMuYmdtVm9sdW1lKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaSreaUvuiDjOaZr+mfs+S5kOWksei0pTpcIiwgZXJyKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RvcEJHTSgpIHtcbiAgICAgICAgaWYgKHRoaXMuYmdtQXVkaW9JRCA+PSAwKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wKHRoaXMuYmdtQXVkaW9JRCk7XG4gICAgICAgICAgICB0aGlzLmJnbUF1ZGlvSUQgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5ZCM5q2l5Yqg6L295aOw6Z+z6LWE5rqQXG4gICAgICogQHBhcmFtIHVybCBcbiAgICAgKi9cbiAgICBhc3luYyBwcmVsb2FkQXVkaW9DbGlwKHNvdW5kTmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGlmICghdGhpcy5fc2Z4RW5hYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjYy5yZXNvdXJjZXMucHJlbG9hZChgc291bmRzLyR7c291bmROYW1lfWAsY2MuQXVkaW9DbGlwKVxuICAgIH1cblxuICAgIC8vIOmfs+aViFxuICAgIHB1YmxpYyBwbGF5U0ZYKHVybDogc3RyaW5nLCBzZnhWb2x1bWU6IGFueSA9IHRoaXMuc2Z4Vm9sdW1lLGV4dDpzdHJpbmcgPSBcIi5tcDNcIiwgbG9vcDogYm9vbGVhbiA9IGZhbHNlLCBpc0Zyb21OZXQ6IGJvb2xlYW4gPSBmYWxzZSxvblN0YXJ0PzpGdW5jdGlvbikge1xuICAgICAgICBpZiAodGhpcy5fc2Z4RW5hYmxlZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc291bmRMaWJbYCR7dXJsfWBdKSB7XG4gICAgICAgICAgICAgICAgLy8gTG9nZ2VyLmRlYnVnKFwiW0F1ZGlvTWFuYWdlciBwbGF5U0ZYXSBcIiwgdXJsKTtcbiAgICAgICAgICAgICAgICBjb25zdCBhdWRpb0lkID0gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kTGliW2Ake3VybH1gXSwgbG9vcCwgc2Z4Vm9sdW1lKTtcbiAgICAgICAgICAgICAgICBvblN0YXJ0ICYmIG9uU3RhcnQoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzRnJvbU5ldCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXVybC5zdGFydHNXaXRoKFwiaHR0cHM6Ly9cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU3RhcnQgJiYgb25TdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkUmVtb3RlKHVybCwgeyBleHQ6IGV4dCB9LCAoZXJyLCBjbGlwOiBjYy5BdWRpb0NsaXApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTG9nZ2VyLmRlYnVnKFwiW0F1ZGlvTWFuYWdlciBwbGF5U0ZYXSBcIiwgdXJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhdWRpb0lkID0gY2MuYXVkaW9FbmdpbmUucGxheShjbGlwLCBsb29wLCBzZnhWb2x1bWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXVkaW9JZHNbdXJsXSA9IGF1ZGlvSWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZ2dlci5kZWJ1ZyhlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25TdGFydCAmJiBvblN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNjLnJlc291cmNlcy5sb2FkKHVybCwgKChlcnIsIGNsaXA6IGNjLkF1ZGlvQ2xpcCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBMb2dnZXIuZGVidWcoXCJbQXVkaW9NYW5hZ2VyIHBsYXlTRlhdIFwiLCB1cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGF1ZGlvSWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5KGNsaXAsIGxvb3AsIHNmeFZvbHVtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zb3VuZExpYltgJHt1cmx9YF0gPSBjbGlwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXVkaW9JZHNbdXJsXSA9IGF1ZGlvSWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZ2dlci5kZWJ1ZyhlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25TdGFydCAmJiBvblN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgb25TdGFydCAmJiBvblN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIHN0b3BTZnhCeVVybCh1cmwpe1xuICAgICAgICBsZXQgYXVkaW9JZCA9IHRoaXMuYXVkaW9JZHNbdXJsXTtcbiAgICAgICAgaWYgKGF1ZGlvSWQgIT0gbnVsbCkge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcChhdWRpb0lkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzdG9wU0ZYKGF1ZGlvSWQpIHtcbiAgICAgICAgTG9nZ2VyLmRlYnVnKFwiYXVkaW9JZFwiLCBhdWRpb0lkKVxuICAgICAgICBpZiAoYXVkaW9JZCAhPSBudWxsKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wKGF1ZGlvSWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy9jaGFuZ2VcbiAgICBwdWJsaWMgZ2V0U0ZYRW5hYmxlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2Z4RW5hYmxlZDtcbiAgICB9XG5cblxuICAgIHB1YmxpYyBnZXRCR01FbmFibGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5iZ21FbmFibGVkO1xuICAgIH1cblxuICAgIC8vIOaaguWBnFxuICAgIHB1YmxpYyBwYXVzZUJHTSgpIHtcbiAgICAgICAgaWYgKHRoaXMuYmdtQXVkaW9JRCA+PSAwKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wYXVzZSh0aGlzLmJnbUF1ZGlvSUQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8g5oGi5aSNXG4gICAgcHVibGljIHJlc3VtZUJHTSgpIHtcbiAgICAgICAgaWYgKHRoaXMuYmdtQXVkaW9JRCA+PSAwKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5yZXN1bWUodGhpcy5iZ21BdWRpb0lEKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIOWNuOi9vemfs+aViFxuICAgIHVuY2FjaGUodXJsKSB7XG4gICAgICAgIGNvbnN0IGF1ZGlvVXJsOiBhbnkgPSBjYy51cmwucmF3KHVybCk7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnVuY2FjaGUoYXVkaW9VcmwpO1xuICAgICAgICB0aGlzLnNvdW5kTGliW2Ake3VybH1gXSA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICB1bmNhY2hlQWxsKCkge1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS51bmNhY2hlQWxsKCk7XG4gICAgICAgIHRoaXMuc291bmRMaWIgPSB7fTtcbiAgICB9XG5cbiAgICBwYXVzZUFsbCgpIHtcbiAgICAgICAgTG9nZ2VyLmRlYnVnKCdQYXVzZSBBbGwgU291bmQnKTtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGF1c2VBbGwoKTtcbiAgICB9XG5cbiAgICByZXN1bWVBbGwoKSB7XG4gICAgICAgIExvZ2dlci5kZWJ1ZygnUmVzdW0gQWxsIFNvdW5kJyk7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnJlc3VtZUFsbCgpO1xuICAgIH1cblxuICAgIHN0b3BBbGwoKSB7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGwoKTtcbiAgICB9XG5cbiAgICBjbGVhbigpIHtcbiAgICAgICAgdGhpcy5zdG9wQWxsKCk7XG4gICAgICAgIHRoaXMudW5jYWNoZUFsbCgpO1xuICAgICAgICB0aGlzLmN1ckJHTVVybCA9IG51bGw7XG4gICAgICAgIHRoaXMuYmdtQXVkaW9JRCA9IC0xO1xuICAgIH1cbn1cbmV4cG9ydCBjb25zdCBzZCA9IEF1ZGlvTWFuYWdlci5JbnN0YW5jZTsiXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/common/SaveData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '07c48c7ygpP3q5vLT30sW7g', 'SaveData');
// script/common/SaveData.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveNodeConfig = exports.DataNode = void 0;
var Utils_1 = require("../utils/Utils");
var Global_1 = require("./Global");
var GlobalEvents_1 = require("./GlobalEvents");
var PmManager_1 = require("./PmManager");
var SaveData = /** @class */ (function () {
    function SaveData(saveKey, nodeConfig) {
        this.list = new Map();
        this.nodeConfig = {};
        this._saveKey = saveKey;
        this.nodeConfig = nodeConfig;
    }
    Object.defineProperty(SaveData.prototype, "saveKey", {
        get: function () {
            return this._saveKey + "_" + 1;
        },
        enumerable: false,
        configurable: true
    });
    SaveData.prototype.init = function () {
        var data = PmManager_1.pm.Get(this.saveKey);
        var res;
        if (!!data) {
            if (typeof (data) != "string") {
                res = data;
            }
            else
                res = JSON.parse(data);
        }
        else
            res = {};
        // let res = !!data ? JSON.parse(data) : {};
        // let res = data || {};
        for (var key in this.nodeConfig) {
            var cfg = this.nodeConfig[key];
            var node = new DataNode(cfg, res);
            this.addNode(node);
        }
    };
    SaveData.prototype.save = function () {
        var rst = {};
        this.list.forEach(function (element) {
            var obj = element.saveObj;
            rst[element.key] = obj;
        });
        // (let key in this.list) {
        //     let node: DataNode = this.list[key];
        //     let obj = node.saveObj;
        //     rst[key] = obj;
        // }
        PmManager_1.pm.Set(this.saveKey, JSON.stringify(rst));
    };
    SaveData.prototype.addNode = function (node) {
        this.list.set(node.key, node);
    };
    SaveData.prototype.getNode = function (key) {
        return this.list.get(key);
    };
    SaveData.prototype.getValue = function (key) {
        return this.getNode(key).value;
    };
    SaveData.prototype.setValue = function (key, value, save) {
        if (save === void 0) { save = true; }
        var node = this.getNode(key);
        node.value = value;
        Global_1.GlobalEvent.dispatchEvent(new GlobalEvents_1.EventOnDataChange({ model: this.saveKey, key: key, value: node.value }));
        save && this.save();
    };
    return SaveData;
}());
exports.default = SaveData;
var DataNode = /** @class */ (function () {
    function DataNode(cfg, res) {
        this.key = cfg.key;
        this.normal = cfg.normal;
        this.daily = cfg.daily;
        if (!res || !res[this.key]) {
            this._value = this.normal;
        }
        else {
            var node = res[this.key];
            this._value = node.v == undefined ? this.normal : node.v;
            this.saveTime = node.t || 0;
        }
    }
    Object.defineProperty(DataNode.prototype, "value", {
        get: function () {
            if (this.daily) {
                var curTime = Utils_1.Utils.getCurTime();
                if (!Utils_1.Utils.isToday(this.saveTime)) 
                // if (curTime - this.saveTime >= GlobalDefines.Second_Day) 
                {
                    this._value = this.normal;
                    this.saveTime = curTime;
                }
            }
            return this._value;
        },
        set: function (v) {
            this._value = v;
            if (this.daily) {
                this.saveTime = Utils_1.Utils.getCurTime();
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataNode.prototype, "saveObj", {
        get: function () {
            var rst = {};
            rst["v"] = this._value;
            if (this.daily) {
                rst["t"] = this.saveTime;
            }
            return rst;
        },
        enumerable: false,
        configurable: true
    });
    return DataNode;
}());
exports.DataNode = DataNode;
var SaveNodeConfig = /** @class */ (function () {
    function SaveNodeConfig(key, normal, daily) {
        this.key = key;
        this.normal = normal;
        this.daily = daily;
    }
    return SaveNodeConfig;
}());
exports.SaveNodeConfig = SaveNodeConfig;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvY29tbW9uL1NhdmVEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdDQUF1QztBQUN2QyxtQ0FBdUM7QUFDdkMsK0NBQW1EO0FBQ25ELHlDQUFpQztBQUdqQztJQVNJLGtCQUFZLE9BQWUsRUFBRSxVQUE2QztRQUgxRSxTQUFJLEdBQTBCLElBQUksR0FBRyxFQUFFLENBQUM7UUFDeEMsZUFBVSxHQUFzQyxFQUFFLENBQUM7UUFHL0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7UUFDeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7SUFDakMsQ0FBQztJQVZELHNCQUFXLDZCQUFPO2FBQWxCO1lBQ0ksT0FBTyxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDbkMsQ0FBQzs7O09BQUE7SUFVRCx1QkFBSSxHQUFKO1FBQ0ksSUFBSSxJQUFJLEdBQVcsY0FBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDeEMsSUFBSSxHQUFHLENBQUE7UUFDUCxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUU7WUFDUixJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxRQUFRLEVBQUU7Z0JBQzNCLEdBQUcsR0FBRyxJQUFJLENBQUM7YUFDZDs7Z0JBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7U0FDaEM7O1lBQU0sR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUNoQiw0Q0FBNEM7UUFDNUMsd0JBQXdCO1FBQ3hCLEtBQUssSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUM3QixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQy9CLElBQUksSUFBSSxHQUFHLElBQUksUUFBUSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNsQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3RCO0lBQ0wsQ0FBQztJQUVELHVCQUFJLEdBQUo7UUFDSSxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFBLE9BQU87WUFDckIsSUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQztZQUMxQixHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztRQUNILDJCQUEyQjtRQUMzQiwyQ0FBMkM7UUFDM0MsOEJBQThCO1FBQzlCLHNCQUFzQjtRQUN0QixJQUFJO1FBQ0osY0FBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtJQUM3QyxDQUFDO0lBRUQsMEJBQU8sR0FBUCxVQUFRLElBQWM7UUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsMEJBQU8sR0FBUCxVQUFRLEdBQVc7UUFDZixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQzdCLENBQUM7SUFFRCwyQkFBUSxHQUFSLFVBQVMsR0FBVztRQUNoQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ25DLENBQUM7SUFFRCwyQkFBUSxHQUFSLFVBQVMsR0FBVyxFQUFFLEtBQVUsRUFBRSxJQUFvQjtRQUFwQixxQkFBQSxFQUFBLFdBQW9CO1FBQ2xELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsb0JBQVcsQ0FBQyxhQUFhLENBQUMsSUFBSSxnQ0FBaUIsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdkcsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBQ0wsZUFBQztBQUFELENBL0RBLEFBK0RDLElBQUE7O0FBRUQ7SUEyQkksa0JBQVksR0FBbUIsRUFBRSxHQUFXO1FBQ3hDLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7UUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO1FBRXZCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUM3QjthQUFNO1lBQ0gsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3pELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDL0I7SUFDTCxDQUFDO0lBL0JELHNCQUFJLDJCQUFLO2FBQVQ7WUFDSSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ1osSUFBSSxPQUFPLEdBQUcsYUFBSyxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUNqQyxJQUFJLENBQUMsYUFBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUNqQyw0REFBNEQ7Z0JBQzVEO29CQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztvQkFDMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7aUJBQzNCO2FBQ0o7WUFDRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkIsQ0FBQzthQUNELFVBQVUsQ0FBTTtZQUNaLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ2hCLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDWixJQUFJLENBQUMsUUFBUSxHQUFHLGFBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQzthQUN0QztRQUNMLENBQUM7OztPQU5BO0lBc0JELHNCQUFJLDZCQUFPO2FBQVg7WUFDSSxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7WUFDYixHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUN2QixJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ1osR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7YUFDNUI7WUFDRCxPQUFPLEdBQUcsQ0FBQztRQUNmLENBQUM7OztPQUFBO0lBQ0wsZUFBQztBQUFELENBakRBLEFBaURDLElBQUE7QUFqRFksNEJBQVE7QUFtRHJCO0lBSUksd0JBQVksR0FBVyxFQUFFLE1BQVcsRUFBRSxLQUFjO1FBQ2hELElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FUQSxBQVNDLElBQUE7QUFUWSx3Q0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFV0aWxzIH0gZnJvbSBcIi4uL3V0aWxzL1V0aWxzXCI7XG5pbXBvcnQgeyBHbG9iYWxFdmVudCB9IGZyb20gXCIuL0dsb2JhbFwiO1xuaW1wb3J0IHsgRXZlbnRPbkRhdGFDaGFuZ2UgfSBmcm9tIFwiLi9HbG9iYWxFdmVudHNcIjtcbmltcG9ydCB7IHBtIH0gZnJvbSBcIi4vUG1NYW5hZ2VyXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2F2ZURhdGEge1xuICAgIHByaXZhdGUgX3NhdmVLZXk6IHN0cmluZztcbiAgICBwdWJsaWMgZ2V0IHNhdmVLZXkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zYXZlS2V5ICsgXCJfXCIgKyAxO1xuICAgIH1cblxuICAgIGxpc3Q6IE1hcDxzdHJpbmcsIERhdGFOb2RlPiA9IG5ldyBNYXAoKTtcbiAgICBub2RlQ29uZmlnOiB7IFtrZXk6IHN0cmluZ106IFNhdmVOb2RlQ29uZmlnIH0gPSB7fTtcblxuICAgIGNvbnN0cnVjdG9yKHNhdmVLZXk6IHN0cmluZywgbm9kZUNvbmZpZzogeyBba2V5OiBzdHJpbmddOiBTYXZlTm9kZUNvbmZpZyB9KSB7XG4gICAgICAgIHRoaXMuX3NhdmVLZXkgPSBzYXZlS2V5O1xuICAgICAgICB0aGlzLm5vZGVDb25maWcgPSBub2RlQ29uZmlnO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIGxldCBkYXRhOiBzdHJpbmcgPSBwbS5HZXQodGhpcy5zYXZlS2V5KTtcbiAgICAgICAgbGV0IHJlc1xuICAgICAgICBpZiAoISFkYXRhKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIChkYXRhKSAhPSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgcmVzID0gZGF0YTtcbiAgICAgICAgICAgIH0gZWxzZSByZXMgPSBKU09OLnBhcnNlKGRhdGEpXG4gICAgICAgIH0gZWxzZSByZXMgPSB7fTtcbiAgICAgICAgLy8gbGV0IHJlcyA9ICEhZGF0YSA/IEpTT04ucGFyc2UoZGF0YSkgOiB7fTtcbiAgICAgICAgLy8gbGV0IHJlcyA9IGRhdGEgfHwge307XG4gICAgICAgIGZvciAobGV0IGtleSBpbiB0aGlzLm5vZGVDb25maWcpIHtcbiAgICAgICAgICAgIGxldCBjZmcgPSB0aGlzLm5vZGVDb25maWdba2V5XTtcbiAgICAgICAgICAgIGxldCBub2RlID0gbmV3IERhdGFOb2RlKGNmZywgcmVzKTtcbiAgICAgICAgICAgIHRoaXMuYWRkTm9kZShub2RlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNhdmUoKSB7XG4gICAgICAgIGxldCByc3QgPSB7fTtcbiAgICAgICAgdGhpcy5saXN0LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBsZXQgb2JqID0gZWxlbWVudC5zYXZlT2JqO1xuICAgICAgICAgICAgcnN0W2VsZW1lbnQua2V5XSA9IG9iajtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIChsZXQga2V5IGluIHRoaXMubGlzdCkge1xuICAgICAgICAvLyAgICAgbGV0IG5vZGU6IERhdGFOb2RlID0gdGhpcy5saXN0W2tleV07XG4gICAgICAgIC8vICAgICBsZXQgb2JqID0gbm9kZS5zYXZlT2JqO1xuICAgICAgICAvLyAgICAgcnN0W2tleV0gPSBvYmo7XG4gICAgICAgIC8vIH1cbiAgICAgICAgcG0uU2V0KHRoaXMuc2F2ZUtleSwgSlNPTi5zdHJpbmdpZnkocnN0KSlcbiAgICB9XG5cbiAgICBhZGROb2RlKG5vZGU6IERhdGFOb2RlKSB7XG4gICAgICAgIHRoaXMubGlzdC5zZXQobm9kZS5rZXksIG5vZGUpO1xuICAgIH1cblxuICAgIGdldE5vZGUoa2V5OiBzdHJpbmcpOiBEYXRhTm9kZSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxpc3QuZ2V0KGtleSlcbiAgICB9XG5cbiAgICBnZXRWYWx1ZShrZXk6IHN0cmluZyk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldE5vZGUoa2V5KS52YWx1ZTtcbiAgICB9XG5cbiAgICBzZXRWYWx1ZShrZXk6IHN0cmluZywgdmFsdWU6IGFueSwgc2F2ZTogYm9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgbGV0IG5vZGUgPSB0aGlzLmdldE5vZGUoa2V5KTtcbiAgICAgICAgbm9kZS52YWx1ZSA9IHZhbHVlO1xuICAgICAgICBHbG9iYWxFdmVudC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudE9uRGF0YUNoYW5nZSh7IG1vZGVsOiB0aGlzLnNhdmVLZXksIGtleToga2V5LCB2YWx1ZTogbm9kZS52YWx1ZSB9KSk7XG4gICAgICAgIHNhdmUgJiYgdGhpcy5zYXZlKCk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YU5vZGUge1xuICAgIGtleTogc3RyaW5nO1xuICAgIGRhaWx5OiBib29sZWFuO1xuICAgIHNhdmVUaW1lOiBudW1iZXI7XG5cbiAgICBub3JtYWw6IGFueTtcblxuICAgIF92YWx1ZTogYW55O1xuICAgIGdldCB2YWx1ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZGFpbHkpIHtcbiAgICAgICAgICAgIGxldCBjdXJUaW1lID0gVXRpbHMuZ2V0Q3VyVGltZSgpO1xuICAgICAgICAgICAgaWYgKCFVdGlscy5pc1RvZGF5KHRoaXMuc2F2ZVRpbWUpKVxuICAgICAgICAgICAgLy8gaWYgKGN1clRpbWUgLSB0aGlzLnNhdmVUaW1lID49IEdsb2JhbERlZmluZXMuU2Vjb25kX0RheSkgXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdmFsdWUgPSB0aGlzLm5vcm1hbDtcbiAgICAgICAgICAgICAgICB0aGlzLnNhdmVUaW1lID0gY3VyVGltZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgfVxuICAgIHNldCB2YWx1ZSh2OiBhbnkpIHtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSB2O1xuICAgICAgICBpZiAodGhpcy5kYWlseSkge1xuICAgICAgICAgICAgdGhpcy5zYXZlVGltZSA9IFV0aWxzLmdldEN1clRpbWUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKGNmZzogU2F2ZU5vZGVDb25maWcsIHJlczogb2JqZWN0KSB7XG4gICAgICAgIHRoaXMua2V5ID0gY2ZnLmtleTtcbiAgICAgICAgdGhpcy5ub3JtYWwgPSBjZmcubm9ybWFsO1xuICAgICAgICB0aGlzLmRhaWx5ID0gY2ZnLmRhaWx5O1xuXG4gICAgICAgIGlmICghcmVzIHx8ICFyZXNbdGhpcy5rZXldKSB7XG4gICAgICAgICAgICB0aGlzLl92YWx1ZSA9IHRoaXMubm9ybWFsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IG5vZGUgPSByZXNbdGhpcy5rZXldO1xuICAgICAgICAgICAgdGhpcy5fdmFsdWUgPSBub2RlLnYgPT0gdW5kZWZpbmVkID8gdGhpcy5ub3JtYWwgOiBub2RlLnY7XG4gICAgICAgICAgICB0aGlzLnNhdmVUaW1lID0gbm9kZS50IHx8IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgc2F2ZU9iaigpIHtcbiAgICAgICAgbGV0IHJzdCA9IHt9O1xuICAgICAgICByc3RbXCJ2XCJdID0gdGhpcy5fdmFsdWU7XG4gICAgICAgIGlmICh0aGlzLmRhaWx5KSB7XG4gICAgICAgICAgICByc3RbXCJ0XCJdID0gdGhpcy5zYXZlVGltZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcnN0O1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNhdmVOb2RlQ29uZmlnIHtcbiAgICBrZXk6IHN0cmluZztcbiAgICBub3JtYWw6IGFueTtcbiAgICBkYWlseTogYm9vbGVhblxuICAgIGNvbnN0cnVjdG9yKGtleTogc3RyaW5nLCBub3JtYWw6IGFueSwgZGFpbHk6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5rZXkgPSBrZXk7XG4gICAgICAgIHRoaXMubm9ybWFsID0gbm9ybWFsO1xuICAgICAgICB0aGlzLmRhaWx5ID0gZGFpbHk7XG4gICAgfVxufVxuXG5cblxuIl19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/merge/manager/Uimanager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f6b0eaEb8lOraTr9sfkeyyf', 'Uimanager');
// script/merge/manager/Uimanager.ts

"use strict";
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
exports.uimanager = void 0;
var TypeDefine_1 = require("../define/TypeDefine");
var Uimanager = /** @class */ (function () {
    function Uimanager() {
        // 层级依托的场景
        this.scene = null;
        // 层级
        this.layerArr = [];
    }
    Object.defineProperty(Uimanager, "instance", {
        get: function () {
            if (!this._ins) {
                this._ins = new Uimanager();
            }
            return this._ins;
        },
        enumerable: false,
        configurable: true
    });
    Uimanager.prototype.init = function (node) {
        this.scene = node;
        this.initLayer();
    };
    Uimanager.prototype.initLayer = function () {
        this.layerArr = [];
        // UI层
        var node_ui = new cc.Node(TypeDefine_1.LAYER.UI);
        node_ui.width = this.scene.width;
        node_ui.height = this.scene.height;
        this.scene.addChild(node_ui);
        this.layerArr.push(node_ui);
        // 弹窗层
        var node_dialog = new cc.Node(TypeDefine_1.LAYER.DIALOG);
        node_dialog.width = this.scene.width;
        node_dialog.height = this.scene.height;
        this.scene.addChild(node_dialog);
        this.layerArr.push(node_dialog);
        // 提示层
        var node_tip = new cc.Node(TypeDefine_1.LAYER.TIP);
        node_tip.width = this.scene.width;
        node_tip.height = this.scene.height;
        this.scene.addChild(node_tip);
        this.layerArr.push(node_tip);
        // 引导层
        var node_guide = new cc.Node(TypeDefine_1.LAYER.GUIDE);
        node_guide.width = this.scene.width;
        node_guide.height = this.scene.height;
        this.scene.addChild(node_guide);
        this.layerArr.push(node_guide);
    };
    Uimanager.prototype.getLayer = function (name) {
        var node = this.scene.getChildByName(name);
        return node;
    };
    Uimanager.prototype.add = function (node, layerType) {
        var layerNode = this.getLayer(layerType);
        if (!layerNode) {
            console.warn('UIManager: 没有这个层级', layerType);
            return;
        }
        layerNode.addChild(node);
    };
    // 动态显示需要的层级
    Uimanager.prototype.udpateLayerShow = function () {
        for (var i = 0; i < this.layerArr.length; i++) {
            this.layerArr[i].active = this.layerArr[i].childrenCount > 0;
        }
    };
    /**
     * 预制件加载
     * @param path
     */
    Uimanager.prototype.loadPrefab = function (path) {
        return __awaiter(this, void 0, Promise, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var load;
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    load = function () { return __awaiter(_this, void 0, void 0, function () {
                                        return __generator(this, function (_a) {
                                            return [2 /*return*/, new Promise(function (rsv, rjt) {
                                                    var tot = setTimeout(function () {
                                                        console.debug("[loadPefab timeout] " + path + "\u52A0\u8F7D\u8D85\u65F6");
                                                        rjt("loadPefab \u8FDE\u63A5\u8D85\u65F6" + path);
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
                                    return [4 /*yield*/, load().then(function (res) {
                                            resolve(res);
                                        })
                                            .catch(function (err) {
                                            reject(err);
                                        })];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    return Uimanager;
}());
exports.default = Uimanager;
exports.uimanager = Uimanager.instance;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvbWVyZ2UvbWFuYWdlci9VaW1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQTZDO0FBRTdDO0lBZ0JJO1FBTkEsVUFBVTtRQUNWLFVBQUssR0FBWSxJQUFJLENBQUM7UUFFdEIsS0FBSztRQUNMLGFBQVEsR0FBYyxFQUFFLENBQUM7SUFFVCxDQUFDO0lBZGpCLHNCQUFrQixxQkFBUTthQUExQjtZQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUNaLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQzthQUMvQjtZQUVELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztRQUNyQixDQUFDOzs7T0FBQTtJQVVELHdCQUFJLEdBQUosVUFBSyxJQUFhO1FBQ2QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCw2QkFBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFFbkIsTUFBTTtRQUNOLElBQU0sT0FBTyxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxrQkFBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3RDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDakMsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUNuQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUU1QixNQUFNO1FBQ04sSUFBTSxXQUFXLEdBQUcsSUFBSSxFQUFF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QUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFVBQUMsR0FBRyxFQUFFLEdBQUc7d0RBQzdCLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQzt3REFFbEIsSUFBSSxHQUFHLEVBQUU7NERBQ0wsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3lEQUNaOzZEQUFNOzREQUNILEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzt5REFDWjtvREFDTCxDQUFDLENBQUMsQ0FBQztnREFDUCxDQUFDLENBQUMsRUFBQTs7eUNBQUEsQ0FBQTtvQ0FFRixxQkFBTSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFHOzRDQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7d0NBQ2pCLENBQUMsQ0FBQzs2Q0FDRyxLQUFLLENBQUMsVUFBQyxHQUFHOzRDQUNQLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQzt3Q0FDaEIsQ0FBQyxDQUFDLEVBQUE7O29DQUxOLFNBS00sQ0FBQzs7Ozt5QkFDVixDQUFDLEVBQUM7OztLQUNOO0lBQ0wsZ0JBQUM7QUFBRCxDQTVHQSxBQTRHQyxJQUFBOztBQUNZLFFBQUEsU0FBUyxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMQVlFUiB9IGZyb20gJy4uL2RlZmluZS9UeXBlRGVmaW5lJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVWltYW5hZ2VyIHtcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zOiBVaW1hbmFnZXI7XG4gICAgcHVibGljIHN0YXRpYyBnZXQgaW5zdGFuY2UoKSB7XG4gICAgICAgIGlmICghdGhpcy5faW5zKSB7XG4gICAgICAgICAgICB0aGlzLl9pbnMgPSBuZXcgVWltYW5hZ2VyKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5faW5zO1xuICAgIH1cblxuICAgIC8vIOWxgue6p+S+neaJmOeahOWcuuaZr1xuICAgIHNjZW5lOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIC8vIOWxgue6p1xuICAgIGxheWVyQXJyOiBjYy5Ob2RlW10gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICBpbml0KG5vZGU6IGNjLk5vZGUpIHtcbiAgICAgICAgdGhpcy5zY2VuZSA9IG5vZGU7XG4gICAgICAgIHRoaXMuaW5pdExheWVyKCk7XG4gICAgfVxuXG4gICAgaW5pdExheWVyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmxheWVyQXJyID0gW107XG5cbiAgICAgICAgLy8gVUnlsYJcbiAgICAgICAgY29uc3Qgbm9kZV91aSA9IG5ldyBjYy5Ob2RlKExBWUVSLlVJKTtcbiAgICAgICAgbm9kZV91aS53aWR0aCA9IHRoaXMuc2NlbmUud2lkdGg7XG4gICAgICAgIG5vZGVfdWkuaGVpZ2h0ID0gdGhpcy5zY2VuZS5oZWlnaHQ7XG4gICAgICAgIHRoaXMuc2NlbmUuYWRkQ2hpbGQobm9kZV91aSk7XG4gICAgICAgIHRoaXMubGF5ZXJBcnIucHVzaChub2RlX3VpKTtcblxuICAgICAgICAvLyDlvLnnqpflsYJcbiAgICAgICAgY29uc3Qgbm9kZV9kaWFsb2cgPSBuZXcgY2MuTm9kZShMQVlFUi5ESUFMT0cpO1xuICAgICAgICBub2RlX2RpYWxvZy53aWR0aCA9IHRoaXMuc2NlbmUud2lkdGg7XG4gICAgICAgIG5vZGVfZGlhbG9nLmhlaWdodCA9IHRoaXMuc2NlbmUuaGVpZ2h0O1xuICAgICAgICB0aGlzLnNjZW5lLmFkZENoaWxkKG5vZGVfZGlhbG9nKTtcbiAgICAgICAgdGhpcy5sYXllckFyci5wdXNoKG5vZGVfZGlhbG9nKTtcblxuICAgICAgICAvLyDmj5DnpLrlsYJcbiAgICAgICAgY29uc3Qgbm9kZV90aXAgPSBuZXcgY2MuTm9kZShMQVlFUi5USVApO1xuICAgICAgICBub2RlX3RpcC53aWR0aCA9IHRoaXMuc2NlbmUud2lkdGg7XG4gICAgICAgIG5vZGVfdGlwLmhlaWdodCA9IHRoaXMuc2NlbmUuaGVpZ2h0O1xuICAgICAgICB0aGlzLnNjZW5lLmFkZENoaWxkKG5vZGVfdGlwKTtcbiAgICAgICAgdGhpcy5sYXllckFyci5wdXNoKG5vZGVfdGlwKTtcblxuICAgICAgICAvLyDlvJXlr7zlsYJcbiAgICAgICAgY29uc3Qgbm9kZV9ndWlkZSA9IG5ldyBjYy5Ob2RlKExBWUVSLkdVSURFKTtcbiAgICAgICAgbm9kZV9ndWlkZS53aWR0aCA9IHRoaXMuc2NlbmUud2lkdGg7XG4gICAgICAgIG5vZGVfZ3VpZGUuaGVpZ2h0ID0gdGhpcy5zY2VuZS5oZWlnaHQ7XG4gICAgICAgIHRoaXMuc2NlbmUuYWRkQ2hpbGQobm9kZV9ndWlkZSk7XG4gICAgICAgIHRoaXMubGF5ZXJBcnIucHVzaChub2RlX2d1aWRlKTtcbiAgICB9XG5cbiAgICBnZXRMYXllcihuYW1lOiBMQVlFUik6IGNjLk5vZGUge1xuICAgICAgICBjb25zdCBub2RlID0gdGhpcy5zY2VuZS5nZXRDaGlsZEJ5TmFtZShuYW1lKTtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuXG4gICAgYWRkKG5vZGU6IGNjLk5vZGUsIGxheWVyVHlwZTogTEFZRVIpIHtcbiAgICAgICAgY29uc3QgbGF5ZXJOb2RlID0gdGhpcy5nZXRMYXllcihsYXllclR5cGUpO1xuXG4gICAgICAgIGlmICghbGF5ZXJOb2RlKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ1VJTWFuYWdlcjog5rKh5pyJ6L+Z5Liq5bGC57qnJywgbGF5ZXJUeXBlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxheWVyTm9kZS5hZGRDaGlsZChub2RlKTtcbiAgICB9XG5cbiAgICAvLyDliqjmgIHmmL7npLrpnIDopoHnmoTlsYLnuqdcbiAgICB1ZHBhdGVMYXllclNob3coKTogdm9pZCB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sYXllckFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5sYXllckFycltpXS5hY3RpdmUgPSB0aGlzLmxheWVyQXJyW2ldLmNoaWxkcmVuQ291bnQgPiAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6aKE5Yi25Lu25Yqg6L29XG4gICAgICogQHBhcmFtIHBhdGhcbiAgICAgKi9cbiAgICBhc3luYyBsb2FkUHJlZmFiKHBhdGg6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsb2FkID0gYXN5bmMgKCkgPT4gbmV3IFByb21pc2UoKHJzdiwgcmp0KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdG90ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoYFtsb2FkUGVmYWIgdGltZW91dF0gJHtwYXRofeWKoOi9vei2heaXtmApXG4gICAgICAgICAgICAgICAgICAgIHJqdChgbG9hZFBlZmFiIOi/nuaOpei2heaXtiR7cGF0aH1gKTtcbiAgICAgICAgICAgICAgICB9LCAxMDAwMCk7XG4gICAgICAgICAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQocGF0aCwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0b3QpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJqdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcnN2KHJlcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGF3YWl0IGxvYWQoKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlcyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnQgY29uc3QgdWltYW5hZ2VyID0gVWltYW5hZ2VyLmluc3RhbmNlO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/common/comp/HurryLoading.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5f7afcopOxGz5p29l+d+sXS', 'HurryLoading');
// script/common/comp/HurryLoading.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var HurryLoading = /** @class */ (function (_super) {
    __extends(HurryLoading, _super);
    function HurryLoading() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lb_loading = null;
        _this.timeOut = -1;
        return _this;
    }
    HurryLoading.prototype.show = function () {
        this.node.active = true;
    };
    HurryLoading.prototype.hide = function () {
        this.lb_loading.node.stopAllActions();
        this.node.active = false;
    };
    HurryLoading.prototype.onEnable = function () {
        // this.icon.active = false;
        // this.timeOut = setTimeout(() => {
        //      if (cc.isValid(this.node)) {
        //         this.btn_back.active = true;
        //         this.icon.active = true;
        //     }
        // }, 3000);
        var _this = this;
        this.lb_loading.node.stopAllActions();
        cc.tween(this.lb_loading.node)
            .delay(0.5)
            .call(function () {
            _this.lb_loading.string = "加 载 中 . ";
        })
            .delay(0.5)
            .call(function () {
            _this.lb_loading.string = "加 载 中 . . ";
        })
            .delay(0.5)
            .call(function () {
            _this.lb_loading.string = "加 载 中 . . .";
        })
            .union()
            .repeatForever()
            .start();
    };
    HurryLoading.prototype.onDisable = function () {
        clearTimeout(this.timeOut);
    };
    __decorate([
        property(cc.Label)
    ], HurryLoading.prototype, "lb_loading", void 0);
    HurryLoading = __decorate([
        ccclass
    ], HurryLoading);
    return HurryLoading;
}(cc.Component));
exports.default = HurryLoading;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvY29tbW9uL2NvbXAvSHVycnlMb2FkaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTBDLGdDQUFZO0lBQXREO1FBQUEscUVBOENDO1FBM0NHLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBQ3BCLGFBQU8sR0FBVyxDQUFDLENBQUMsQ0FBQzs7SUEwQ2pDLENBQUM7SUF4Q0csMkJBQUksR0FBSjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUM1QixDQUFDO0lBRUQsMkJBQUksR0FBSjtRQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBRUQsK0JBQVEsR0FBUjtRQUNJLDRCQUE0QjtRQUM1QixvQ0FBb0M7UUFDcEMsb0NBQW9DO1FBQ3BDLHVDQUF1QztRQUN2QyxtQ0FBbUM7UUFDbkMsUUFBUTtRQUNSLFlBQVk7UUFQaEIsaUJBMEJDO1FBakJHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7YUFDekIsS0FBSyxDQUFDLEdBQUcsQ0FBQzthQUNWLElBQUksQ0FBQztZQUNGLEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQztRQUN4QyxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsR0FBRyxDQUFDO2FBQ1YsSUFBSSxDQUFDO1lBQ0YsS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDO1FBQzFDLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxHQUFHLENBQUM7YUFDVixJQUFJLENBQUM7WUFDRixLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUM7UUFDM0MsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxFQUFFO2FBQ1AsYUFBYSxFQUFFO2FBQ2YsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELGdDQUFTLEdBQVQ7UUFDSSxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUExQ0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztvREFDUztJQUhYLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0E4Q2hDO0lBQUQsbUJBQUM7Q0E5Q0QsQUE4Q0MsQ0E5Q3lDLEVBQUUsQ0FBQyxTQUFTLEdBOENyRDtrQkE5Q29CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIdXJyeUxvYWRpbmcgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiX2xvYWRpbmc6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBwcml2YXRlIHRpbWVPdXQ6IG51bWJlciA9IC0xO1xuXG4gICAgc2hvdygpIHtcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgaGlkZSgpIHtcbiAgICAgICAgdGhpcy5sYl9sb2FkaW5nLm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIG9uRW5hYmxlKCkge1xuICAgICAgICAvLyB0aGlzLmljb24uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIC8vIHRoaXMudGltZU91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAvLyAgICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMubm9kZSkpIHtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmJ0bl9iYWNrLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5pY29uLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH0sIDMwMDApO1xuXG4gICAgICAgIHRoaXMubGJfbG9hZGluZy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubGJfbG9hZGluZy5ub2RlKVxuICAgICAgICAgICAgLmRlbGF5KDAuNSlcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxiX2xvYWRpbmcuc3RyaW5nID0gXCLliqAg6L29IOS4rSAuIFwiO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5kZWxheSgwLjUpXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5sYl9sb2FkaW5nLnN0cmluZyA9IFwi5YqgIOi9vSDkuK0gLiAuIFwiO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5kZWxheSgwLjUpXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5sYl9sb2FkaW5nLnN0cmluZyA9IFwi5YqgIOi9vSDkuK0gLiAuIC5cIjtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudW5pb24oKVxuICAgICAgICAgICAgLnJlcGVhdEZvcmV2ZXIoKVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgb25EaXNhYmxlKCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lT3V0KTtcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/common/GlobalEvents.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '02d77ioYsBB467lgK8KcnX9', 'GlobalEvents');
// script/common/GlobalEvents.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventChangeTop = exports.EventBallClick = exports.EventOnDataChange = exports.EventOnSwitchScene = void 0;
var EventOnSwitchScene = /** @class */ (function (_super) {
    __extends(EventOnSwitchScene, _super);
    function EventOnSwitchScene() {
        return _super.call(this, EventOnSwitchScene.NAME, true) || this;
    }
    EventOnSwitchScene.NAME = "EventOnSwitchScene";
    return EventOnSwitchScene;
}(cc.Event.EventCustom));
exports.EventOnSwitchScene = EventOnSwitchScene;
var EventOnDataChange = /** @class */ (function (_super) {
    __extends(EventOnDataChange, _super);
    function EventOnDataChange(obj) {
        var _this = _super.call(this, EventOnDataChange.NAME, true) || this;
        _this.obj = obj;
        return _this;
    }
    EventOnDataChange.NAME = "EventOnDataChange";
    return EventOnDataChange;
}(cc.Event.EventCustom));
exports.EventOnDataChange = EventOnDataChange;
var EventBallClick = /** @class */ (function (_super) {
    __extends(EventBallClick, _super);
    function EventBallClick(id, rId) {
        var _this = _super.call(this, EventBallClick.NAME, true) || this;
        _this.id = id;
        _this.rId = rId;
        return _this;
    }
    EventBallClick.NAME = "EventBallClick";
    return EventBallClick;
}(cc.Event.EventCustom));
exports.EventBallClick = EventBallClick;
var EventChangeTop = /** @class */ (function (_super) {
    __extends(EventChangeTop, _super);
    function EventChangeTop(mtype, num) {
        var _this = _super.call(this, EventChangeTop.NAME, true) || this;
        _this.mtype = mtype;
        _this.num = num;
        return _this;
    }
    EventChangeTop.NAME = "EventChangeTop";
    return EventChangeTop;
}(cc.Event.EventCustom));
exports.EventChangeTop = EventChangeTop;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvY29tbW9uL0dsb2JhbEV2ZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7SUFBd0Msc0NBQW9CO0lBRXhEO2VBQ0ksa0JBQU0sa0JBQWtCLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQztJQUN4QyxDQUFDO0lBSHNCLHVCQUFJLEdBQVcsb0JBQW9CLENBQUM7SUFJL0QseUJBQUM7Q0FMRCxBQUtDLENBTHVDLEVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUszRDtBQUxZLGdEQUFrQjtBQU8vQjtJQUF1QyxxQ0FBb0I7SUFHdkQsMkJBQW1CLEdBQStDO1FBQWxFLFlBQ0ksa0JBQU0saUJBQWlCLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUV0QztRQURHLEtBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDOztJQUNuQixDQUFDO0lBTHNCLHNCQUFJLEdBQVcsbUJBQW1CLENBQUM7SUFNOUQsd0JBQUM7Q0FQRCxBQU9DLENBUHNDLEVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVyxHQU8xRDtBQVBZLDhDQUFpQjtBQVE5QjtJQUFvQyxrQ0FBb0I7SUFJcEQsd0JBQW1CLEVBQVUsRUFBRSxHQUFXO1FBQTFDLFlBQ0ksa0JBQU0sY0FBYyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsU0FHbkM7UUFGRyxLQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLEtBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDOztJQUNuQixDQUFDO0lBUHNCLG1CQUFJLEdBQVcsZ0JBQWdCLENBQUM7SUFRM0QscUJBQUM7Q0FURCxBQVNDLENBVG1DLEVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVyxHQVN2RDtBQVRZLHdDQUFjO0FBVTNCO0lBQW9DLGtDQUFvQjtJQUlwRCx3QkFBbUIsS0FBYSxFQUFFLEdBQVc7UUFBN0MsWUFDSSxrQkFBTSxjQUFjLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUduQztRQUZHLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLEtBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDOztJQUNuQixDQUFDO0lBUHNCLG1CQUFJLEdBQVcsZ0JBQWdCLENBQUM7SUFRM0QscUJBQUM7Q0FURCxBQVNDLENBVG1DLEVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVyxHQVN2RDtBQVRZLHdDQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmV4cG9ydCBjbGFzcyBFdmVudE9uU3dpdGNoU2NlbmUgZXh0ZW5kcyBjYy5FdmVudC5FdmVudEN1c3RvbSB7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBOQU1FOiBzdHJpbmcgPSBcIkV2ZW50T25Td2l0Y2hTY2VuZVwiO1xuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoRXZlbnRPblN3aXRjaFNjZW5lLk5BTUUsIHRydWUpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEV2ZW50T25EYXRhQ2hhbmdlIGV4dGVuZHMgY2MuRXZlbnQuRXZlbnRDdXN0b20ge1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgTkFNRTogc3RyaW5nID0gXCJFdmVudE9uRGF0YUNoYW5nZVwiO1xuICAgIHB1YmxpYyBvYmo6IHsgbW9kZWw6IHN0cmluZywga2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkgfTtcbiAgICBwdWJsaWMgY29uc3RydWN0b3Iob2JqOiB7IG1vZGVsOiBzdHJpbmcsIGtleTogc3RyaW5nLCB2YWx1ZTogYW55IH0pIHtcbiAgICAgICAgc3VwZXIoRXZlbnRPbkRhdGFDaGFuZ2UuTkFNRSwgdHJ1ZSk7XG4gICAgICAgIHRoaXMub2JqID0gb2JqO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBFdmVudEJhbGxDbGljayBleHRlbmRzIGNjLkV2ZW50LkV2ZW50Q3VzdG9tIHtcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IE5BTUU6IHN0cmluZyA9IFwiRXZlbnRCYWxsQ2xpY2tcIjtcbiAgICBwdWJsaWMgaWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgcklkOiBzdHJpbmc7XG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIsIHJJZDogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKEV2ZW50QmFsbENsaWNrLk5BTUUsIHRydWUpO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMucklkID0gcklkO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBFdmVudENoYW5nZVRvcCBleHRlbmRzIGNjLkV2ZW50LkV2ZW50Q3VzdG9tIHtcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IE5BTUU6IHN0cmluZyA9IFwiRXZlbnRDaGFuZ2VUb3BcIjtcbiAgICBwdWJsaWMgbXR5cGU6IG51bWJlcjtcbiAgICBwdWJsaWMgbnVtOiBudW1iZXI7XG4gICAgcHVibGljIGNvbnN0cnVjdG9yKG10eXBlOiBudW1iZXIsIG51bTogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKEV2ZW50Q2hhbmdlVG9wLk5BTUUsIHRydWUpO1xuICAgICAgICB0aGlzLm10eXBlID0gbXR5cGU7XG4gICAgICAgIHRoaXMubnVtID0gbnVtO1xuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/common/effect/Jumpjump3d.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '71ed07UJHdNSa3l8ryArFta', 'Jumpjump3d');
// script/common/effect/Jumpjump3d.ts

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
exports.EventOnBoom = void 0;
var GameUtils_1 = require("../../game/GameUtils");
var Utils_1 = require("../../utils/Utils");
var Global_1 = require("../Global");
/*
* 飞抵最终目的地
*/
var EventOnBoom = /** @class */ (function (_super) {
    __extends(EventOnBoom, _super);
    function EventOnBoom(tType) {
        var _this = _super.call(this, EventOnBoom.NAME, true) || this;
        _this.tType = tType;
        return _this;
    }
    EventOnBoom.NAME = "EventOnBoom";
    return EventOnBoom;
}(cc.Event.EventCustom));
exports.EventOnBoom = EventOnBoom;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Jumpjump3d = /** @class */ (function (_super) {
    __extends(Jumpjump3d, _super);
    function Jumpjump3d() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dx = 0;
        _this.dy = 0;
        _this.dz = 170;
        _this.rate = 0.45;
        _this.groundLine = 0;
        _this.scale = 1;
        _this.icon = null;
        _this.isFading = false;
        _this.curStatus = 0;
        _this.nextStatus = 0;
        _this.tWPos = undefined;
        return _this;
        // update() {
        //     if (this.nextStatus != -1) {
        //         this.curStatus = this.nextStatus;
        //         this.nextStatus = -1;
        //         switch (this.curStatus) {
        //             case 0: {
        //                 this.spdx = Utils.randomIntInclusive(-this.spdx, this.spdx);
        //                 this.spdy = Utils.randomIntInclusive(0, this.spdy);
        //                 break;
        //             }
        //             // case 1: {
        //             //     this.node.y = this.groundLine;
        //             //     this.spdy = Math.abs(this.spdy) * Utils.randomFloat(0.4, 0.6);
        //             //     break;
        //             // }
        //             case 2: {
        //                 this.close();
        //                 break;
        //             }
        //         }
        //     }
        //     switch (this.curStatus) {
        //         case 0: {
        //             if (this.node.y < this.groundLine) {
        //                 this.nextStatus = 1;
        //             }
        //             this.spdy -= .5;
        //             this.node.x += this.spdx;
        //             this.node.y += this.spdy;
        //             this.icon.y += this.spdz;
        //             break;
        //         }
        //         // case 1: {
        //         //     if (this.node.y < -Ball_Main.instance.uiManager.ScreenHeight / 2) {
        //         //         this.nextStatus = 2;
        //         //     }
        //         //     this.spdy -= .5;
        //         //     this.node.x += this.spdx;
        //         //     this.node.y += this.spdy;
        //         //     break;
        //         // }
        //     }
        // }
    }
    Jumpjump3d_1 = Jumpjump3d;
    Jumpjump3d.createBySpr = function (shadowFrame, spriteFrame, startWorldPos, groundLine, scale, tWPos, tType) {
        return __awaiter(this, void 0, void 0, function () {
            var icon, sprite;
            return __generator(this, function (_a) {
                icon = new cc.Node();
                sprite = icon.addComponent(cc.Sprite);
                sprite.sizeMode = cc.Sprite.SizeMode.RAW;
                sprite.spriteFrame = spriteFrame;
                sprite.node.y = sprite.node.height / 2; //下边缘对齐
                this._create(shadowFrame, icon, startWorldPos, groundLine, scale, tWPos, tType);
                return [2 /*return*/];
            });
        });
    };
    Jumpjump3d.createByStr = function (shadowFrame, str, startWorldPos, groundLine, scale, tWPos, tType) {
        return __awaiter(this, void 0, void 0, function () {
            var icon, lb;
            return __generator(this, function (_a) {
                icon = new cc.Node();
                icon.color = cc.color(249, 229, 114, 255);
                lb = icon.addComponent(cc.Label);
                lb.fontSize = 40;
                lb.enableBold = true;
                lb.string = str;
                // lb.node.y = lb.node.height / 2;//下边缘对齐
                this._create(shadowFrame, icon, startWorldPos, groundLine, scale, tWPos, tType);
                return [2 /*return*/];
            });
        });
    };
    Jumpjump3d._create = function (shadowFrame, nodeActor, startWorldPos, groundLine, scale, tWPos, tType) {
        return __awaiter(this, void 0, void 0, function () {
            var node, shadow, spr, script;
            return __generator(this, function (_a) {
                node = new cc.Node();
                shadow = new cc.Node();
                shadow.y = groundLine;
                shadow.scaleY = 0.2;
                shadow.scaleX = 0.3;
                shadow.color = cc.Color.BLACK;
                spr = shadow.addComponent(cc.Sprite);
                if (shadowFrame) {
                    spr.spriteFrame = shadowFrame;
                    shadow.opacity = 90;
                }
                else {
                    shadow.opacity = 0;
                }
                node.addChild(shadow);
                node.addChild(nodeActor);
                script = node.addComponent(Jumpjump3d_1);
                node.position = startWorldPos;
                script.groundLine = groundLine;
                script.scale = scale == undefined ? Utils_1.Utils.randomFloat(0.8, 1.2) : scale;
                script.tWPos = tWPos;
                script.tType = tType;
                GameUtils_1.GameUtils.addEffectAR(node);
                return [2 /*return*/];
            });
        });
    };
    Jumpjump3d.prototype.onLoad = function () {
        var _this = this;
        this.dz = Utils_1.Utils.randomIntInclusive(this.dz / 2, this.dz);
        var dr = this.dz / this.rate;
        this.dx = Utils_1.Utils.randomIntInclusive(-dr, dr);
        this.dy = Utils_1.Utils.randomIntInclusive(-dr, dr) * 0.6;
        this.node.scale = this.scale;
        this.icon = this.node.children[1];
        var delayTime = Utils_1.Utils.randomFloat(0.15, 0.25);
        var duration = Utils_1.Utils.randomFloat(0.2, 0.4);
        cc.tween(this.node)
            .by(duration, { x: this.dx, y: this.dy }, { easing: cc.easing.sineOut })
            .delay(delayTime)
            .call(function () {
            if (!!_this.tWPos) {
                //飞向金猪                    
                var tNPos = _this.node.parent.convertToNodeSpaceAR(_this.tWPos);
                var scale = _this.node.scale;
                cc.tween(_this.node)
                    .delay(0.3)
                    .to(0.4, { position: tNPos, scale: scale * 0.8 })
                    .call(function () {
                    GameUtils_1.GameUtils.playFlyCoin();
                    Global_1.GlobalEvent.dispatchEvent(new EventOnBoom(_this.tType));
                    _this.close();
                })
                    .start();
            }
            else {
                //消失
                cc.tween(_this.node)
                    .to(0.15, { opacity: 0 })
                    .call(function () {
                    _this.close();
                })
                    .start();
            }
        })
            .start();
        // this.jump(duration, this.dx > 0 ? 1 : -1);
    };
    Jumpjump3d.prototype.jump = function (duration, dir) {
        var durationJump = Utils_1.Utils.randomFloat(0.13, 0.19);
        var durationSlide = Math.max(0, duration - durationJump * 2);
        cc.tween(this.icon)
            .to(durationJump, { y: this.dz, angle: 95 * dir, scale: 1.5 }, { easing: cc.easing.sineOut })
            .to(durationJump, { y: this.groundLine, angle: 185 * dir, scale: 1.3 }, { easing: cc.easing.sineIn })
            .to(durationSlide, { angle: 0 }, { easing: cc.easing.sineOut })
            .start();
    };
    Jumpjump3d.prototype.close = function () {
        Utils_1.Utils.removeNode(this.node);
    };
    var Jumpjump3d_1;
    Jumpjump3d = Jumpjump3d_1 = __decorate([
        ccclass
    ], Jumpjump3d);
    return Jumpjump3d;
}(cc.Component));
exports.default = Jumpjump3d;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvY29tbW9uL2VmZmVjdC9KdW1wanVtcDNkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrREFBaUQ7QUFDakQsMkNBQTBDO0FBRTFDLG9DQUF3QztBQUV4Qzs7RUFFRTtBQUNGO0lBQWlDLCtCQUFvQjtJQUdqRCxxQkFBbUIsS0FBYTtRQUFoQyxZQUNJLGtCQUFNLFdBQVcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBRWhDO1FBREcsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7O0lBQ3ZCLENBQUM7SUFMc0IsZ0JBQUksR0FBVyxhQUFhLENBQUM7SUFNeEQsa0JBQUM7Q0FQRCxBQU9DLENBUGdDLEVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVyxHQU9wRDtBQVBZLGtDQUFXO0FBVWxCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXdDLDhCQUFZO0lBQXBEO1FBQUEscUVBcUtDO1FBbEhHLFFBQUUsR0FBVyxDQUFDLENBQUM7UUFDZixRQUFFLEdBQVcsQ0FBQyxDQUFDO1FBQ2YsUUFBRSxHQUFXLEdBQUcsQ0FBQztRQUNqQixVQUFJLEdBQVcsSUFBSSxDQUFDO1FBQ3BCLGdCQUFVLEdBQVcsQ0FBQyxDQUFDO1FBQ3ZCLFdBQUssR0FBVyxDQUFDLENBQUM7UUFFbEIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixjQUFRLEdBQVksS0FBSyxDQUFDO1FBRTFCLGVBQVMsR0FBVyxDQUFDLENBQUM7UUFDdEIsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFDdkIsV0FBSyxHQUFZLFNBQVMsQ0FBQzs7UUEwRDNCLGFBQWE7UUFDYixtQ0FBbUM7UUFDbkMsNENBQTRDO1FBQzVDLGdDQUFnQztRQUNoQyxvQ0FB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RUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxHQUFHLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUM1RixFQUFFLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDcEcsRUFBRSxDQUFDLGFBQWEsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQzlELEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRCwwQkFBSyxHQUFMO1FBQ0ksYUFBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7SUF0SGdCLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0FxSzlCO0lBQUQsaUJBQUM7Q0FyS0QsQUFxS0MsQ0FyS3VDLEVBQUUsQ0FBQyxTQUFTLEdBcUtuRDtrQkFyS29CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHYW1lVXRpbHMgfSBmcm9tIFwiLi4vLi4vZ2FtZS9HYW1lVXRpbHNcIjtcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSBcIi4uLy4uL3V0aWxzL1V0aWxzXCI7XG5pbXBvcnQgQmFsbF9NYWluIGZyb20gXCIuLi9CYWxsX01haW5cIjtcbmltcG9ydCB7IEdsb2JhbEV2ZW50IH0gZnJvbSBcIi4uL0dsb2JhbFwiO1xuXG4vKlxuKiDpo57mirXmnIDnu4jnm67nmoTlnLBcbiovXG5leHBvcnQgY2xhc3MgRXZlbnRPbkJvb20gZXh0ZW5kcyBjYy5FdmVudC5FdmVudEN1c3RvbSB7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBOQU1FOiBzdHJpbmcgPSBcIkV2ZW50T25Cb29tXCI7XG4gICAgcHVibGljIHRUeXBlOiBudW1iZXI7XG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHRUeXBlOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoRXZlbnRPbkJvb20uTkFNRSwgdHJ1ZSk7XG4gICAgICAgIHRoaXMudFR5cGUgPSB0VHlwZTtcbiAgICB9XG59XG5cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEp1bXBqdW1wM2QgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgY3JlYXRlQnlTcHIoc2hhZG93RnJhbWU6IGNjLlNwcml0ZUZyYW1lLCBzcHJpdGVGcmFtZTogY2MuU3ByaXRlRnJhbWUsIHN0YXJ0V29ybGRQb3M6IGNjLlZlYzIsIGdyb3VuZExpbmU6IG51bWJlciwgc2NhbGU6IG51bWJlciwgdFdQb3M/OiBjYy5WZWMyLCB0VHlwZT86IG51bWJlcikge1xuICAgICAgICBsZXQgaWNvbiA9IG5ldyBjYy5Ob2RlKCk7XG4gICAgICAgIGxldCBzcHJpdGUgPSBpY29uLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICBzcHJpdGUuc2l6ZU1vZGUgPSBjYy5TcHJpdGUuU2l6ZU1vZGUuUkFXO1xuICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcbiAgICAgICAgc3ByaXRlLm5vZGUueSA9IHNwcml0ZS5ub2RlLmhlaWdodCAvIDI7Ly/kuIvovrnnvJjlr7npvZBcblxuICAgICAgICB0aGlzLl9jcmVhdGUoc2hhZG93RnJhbWUsIGljb24sIHN0YXJ0V29ybGRQb3MsIGdyb3VuZExpbmUsIHNjYWxlLCB0V1BvcywgdFR5cGUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgY3JlYXRlQnlTdHIoc2hhZG93RnJhbWU6IGNjLlNwcml0ZUZyYW1lLCBzdHI6IHN0cmluZywgc3RhcnRXb3JsZFBvczogY2MuVmVjMiwgZ3JvdW5kTGluZTogbnVtYmVyLCBzY2FsZTogbnVtYmVyLCB0V1Bvcz86IGNjLlZlYzIsIHRUeXBlPzogbnVtYmVyKSB7XG4gICAgICAgIGxldCBpY29uID0gbmV3IGNjLk5vZGUoKTtcbiAgICAgICAgaWNvbi5jb2xvciA9IGNjLmNvbG9yKDI0OSwgMjI5LCAxMTQsIDI1NSk7XG4gICAgICAgIGxldCBsYiA9IGljb24uYWRkQ29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgbGIuZm9udFNpemUgPSA0MDtcbiAgICAgICAgbGIuZW5hYmxlQm9sZCA9IHRydWU7XG4gICAgICAgIGxiLnN0cmluZyA9IHN0cjtcbiAgICAgICAgLy8gbGIubm9kZS55ID0gbGIubm9kZS5oZWlnaHQgLyAyOy8v5LiL6L6557yY5a+56b2QXG5cbiAgICAgICAgdGhpcy5fY3JlYXRlKHNoYWRvd0ZyYW1lLCBpY29uLCBzdGFydFdvcmxkUG9zLCBncm91bmRMaW5lLCBzY2FsZSwgdFdQb3MsIHRUeXBlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBhc3luYyBfY3JlYXRlKHNoYWRvd0ZyYW1lOiBjYy5TcHJpdGVGcmFtZSwgbm9kZUFjdG9yOiBjYy5Ob2RlLCBzdGFydFdvcmxkUG9zOiBjYy5WZWMyLCBncm91bmRMaW5lOiBudW1iZXIsIHNjYWxlOiBudW1iZXIsIHRXUG9zPzogY2MuVmVjMiwgdFR5cGU/OiBudW1iZXIpIHtcbiAgICAgICAgbGV0IG5vZGUgPSBuZXcgY2MuTm9kZSgpO1xuXG4gICAgICAgIGxldCBzaGFkb3cgPSBuZXcgY2MuTm9kZSgpO1xuICAgICAgICBzaGFkb3cueSA9IGdyb3VuZExpbmU7XG4gICAgICAgIHNoYWRvdy5zY2FsZVkgPSAwLjI7XG4gICAgICAgIHNoYWRvdy5zY2FsZVggPSAwLjNcbiAgICAgICAgc2hhZG93LmNvbG9yID0gY2MuQ29sb3IuQkxBQ0s7XG4gICAgICAgIGxldCBzcHIgPSBzaGFkb3cuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgIGlmIChzaGFkb3dGcmFtZSkge1xuICAgICAgICAgICAgc3ByLnNwcml0ZUZyYW1lID0gc2hhZG93RnJhbWU7XG4gICAgICAgICAgICBzaGFkb3cub3BhY2l0eSA9IDkwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2hhZG93Lm9wYWNpdHkgPSAwO1xuICAgICAgICB9XG4gICAgICAgIG5vZGUuYWRkQ2hpbGQoc2hhZG93KTtcblxuICAgICAgICBub2RlLmFkZENoaWxkKG5vZGVBY3Rvcik7XG5cbiAgICAgICAgbGV0IHNjcmlwdDogSnVtcGp1bXAzZCA9IG5vZGUuYWRkQ29tcG9uZW50KEp1bXBqdW1wM2QpO1xuICAgICAgICBub2RlLnBvc2l0aW9uID0gc3RhcnRXb3JsZFBvcztcbiAgICAgICAgc2NyaXB0Lmdyb3VuZExpbmUgPSBncm91bmRMaW5lO1xuICAgICAgICBzY3JpcHQuc2NhbGUgPSBzY2FsZSA9PSB1bmRlZmluZWQgPyBVdGlscy5yYW5kb21GbG9hdCgwLjgsIDEuMikgOiBzY2FsZTtcbiAgICAgICAgc2NyaXB0LnRXUG9zID0gdFdQb3M7XG4gICAgICAgIHNjcmlwdC50VHlwZSA9IHRUeXBlO1xuICAgICAgICBHYW1lVXRpbHMuYWRkRWZmZWN0QVIobm9kZSk7XG4gICAgfVxuXG4gICAgZHg6IG51bWJlciA9IDA7XG4gICAgZHk6IG51bWJlciA9IDA7XG4gICAgZHo6IG51bWJlciA9IDE3MDtcbiAgICByYXRlOiBudW1iZXIgPSAwLjQ1O1xuICAgIGdyb3VuZExpbmU6IG51bWJlciA9IDA7XG4gICAgc2NhbGU6IG51bWJlciA9IDE7XG5cbiAgICBpY29uOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIGlzRmFkaW5nOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBjdXJTdGF0dXM6IG51bWJlciA9IDA7XG4gICAgbmV4dFN0YXR1czogbnVtYmVyID0gMDtcbiAgICB0V1BvczogY2MuVmVjMiA9IHVuZGVmaW5lZDtcbiAgICB0VHlwZTogbnVtYmVyO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLmR6ID0gVXRpbHMucmFuZG9tSW50SW5jbHVzaXZlKHRoaXMuZHogLyAyLCB0aGlzLmR6KTtcbiAgICAgICAgbGV0IGRyID0gdGhpcy5keiAvIHRoaXMucmF0ZTtcbiAgICAgICAgdGhpcy5keCA9IFV0aWxzLnJhbmRvbUludEluY2x1c2l2ZSgtZHIsIGRyKTtcbiAgICAgICAgdGhpcy5keSA9IFV0aWxzLnJhbmRvbUludEluY2x1c2l2ZSgtZHIsIGRyKSAqIDAuNjtcbiAgICAgICAgdGhpcy5ub2RlLnNjYWxlID0gdGhpcy5zY2FsZTtcbiAgICAgICAgdGhpcy5pY29uID0gdGhpcy5ub2RlLmNoaWxkcmVuWzFdO1xuICAgICAgICBsZXQgZGVsYXlUaW1lID0gVXRpbHMucmFuZG9tRmxvYXQoMC4xNSwgMC4yNSk7XG4gICAgICAgIGxldCBkdXJhdGlvbiA9IFV0aWxzLnJhbmRvbUZsb2F0KDAuMiwgMC40KTtcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxuICAgICAgICAgICAgLmJ5KGR1cmF0aW9uLCB7IHg6IHRoaXMuZHgsIHk6IHRoaXMuZHkgfSwgeyBlYXNpbmc6IGNjLmVhc2luZy5zaW5lT3V0IH0pXG4gICAgICAgICAgICAuZGVsYXkoZGVsYXlUaW1lKVxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghIXRoaXMudFdQb3MpIHtcbiAgICAgICAgICAgICAgICAgICAgLy/po57lkJHph5HnjKogICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBsZXQgdE5Qb3MgPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHRoaXMudFdQb3MpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgc2NhbGUgPSB0aGlzLm5vZGUuc2NhbGU7XG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kZWxheSgwLjMpXG4gICAgICAgICAgICAgICAgICAgICAgICAudG8oMC40LCB7IHBvc2l0aW9uOiB0TlBvcywgc2NhbGU6IHNjYWxlICogMC44IH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR2FtZVV0aWxzLnBsYXlGbHlDb2luKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR2xvYmFsRXZlbnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnRPbkJvb20odGhpcy50VHlwZSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvL+a2iOWksVxuICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAudG8oMC4xNSwgeyBvcGFjaXR5OiAwIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgLy8gdGhpcy5qdW1wKGR1cmF0aW9uLCB0aGlzLmR4ID4gMCA/IDEgOiAtMSk7XG4gICAgfVxuICAgIGp1bXAoZHVyYXRpb246IG51bWJlciwgZGlyOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IGR1cmF0aW9uSnVtcCA9IFV0aWxzLnJhbmRvbUZsb2F0KDAuMTMsIDAuMTkpO1xuICAgICAgICBsZXQgZHVyYXRpb25TbGlkZSA9IE1hdGgubWF4KDAsIGR1cmF0aW9uIC0gZHVyYXRpb25KdW1wICogMik7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuaWNvbilcbiAgICAgICAgICAgIC50byhkdXJhdGlvbkp1bXAsIHsgeTogdGhpcy5keiwgYW5nbGU6IDk1ICogZGlyLCBzY2FsZTogMS41IH0sIHsgZWFzaW5nOiBjYy5lYXNpbmcuc2luZU91dCB9KVxuICAgICAgICAgICAgLnRvKGR1cmF0aW9uSnVtcCwgeyB5OiB0aGlzLmdyb3VuZExpbmUsIGFuZ2xlOiAxODUgKiBkaXIsIHNjYWxlOiAxLjMgfSwgeyBlYXNpbmc6IGNjLmVhc2luZy5zaW5lSW4gfSlcbiAgICAgICAgICAgIC50byhkdXJhdGlvblNsaWRlLCB7IGFuZ2xlOiAwIH0sIHsgZWFzaW5nOiBjYy5lYXNpbmcuc2luZU91dCB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgY2xvc2UoKSB7XG4gICAgICAgIFV0aWxzLnJlbW92ZU5vZGUodGhpcy5ub2RlKTtcbiAgICB9XG5cblxuXG4gICAgLy8gdXBkYXRlKCkge1xuICAgIC8vICAgICBpZiAodGhpcy5uZXh0U3RhdHVzICE9IC0xKSB7XG4gICAgLy8gICAgICAgICB0aGlzLmN1clN0YXR1cyA9IHRoaXMubmV4dFN0YXR1cztcbiAgICAvLyAgICAgICAgIHRoaXMubmV4dFN0YXR1cyA9IC0xO1xuICAgIC8vICAgICAgICAgc3dpdGNoICh0aGlzLmN1clN0YXR1cykge1xuICAgIC8vICAgICAgICAgICAgIGNhc2UgMDoge1xuICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLnNwZHggPSBVdGlscy5yYW5kb21JbnRJbmNsdXNpdmUoLXRoaXMuc3BkeCwgdGhpcy5zcGR4KTtcbiAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5zcGR5ID0gVXRpbHMucmFuZG9tSW50SW5jbHVzaXZlKDAsIHRoaXMuc3BkeSk7XG4gICAgLy8gICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICAvLyBjYXNlIDE6IHtcbiAgICAvLyAgICAgICAgICAgICAvLyAgICAgdGhpcy5ub2RlLnkgPSB0aGlzLmdyb3VuZExpbmU7XG4gICAgLy8gICAgICAgICAgICAgLy8gICAgIHRoaXMuc3BkeSA9IE1hdGguYWJzKHRoaXMuc3BkeSkgKiBVdGlscy5yYW5kb21GbG9hdCgwLjQsIDAuNik7XG4gICAgLy8gICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xuICAgIC8vICAgICAgICAgICAgIC8vIH1cbiAgICAvLyAgICAgICAgICAgICBjYXNlIDI6IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIC8vICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAvLyAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgc3dpdGNoICh0aGlzLmN1clN0YXR1cykge1xuICAgIC8vICAgICAgICAgY2FzZSAwOiB7XG4gICAgLy8gICAgICAgICAgICAgaWYgKHRoaXMubm9kZS55IDwgdGhpcy5ncm91bmRMaW5lKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgIHRoaXMubmV4dFN0YXR1cyA9IDE7XG4gICAgLy8gICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc3BkeSAtPSAuNTtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLm5vZGUueCArPSB0aGlzLnNwZHg7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5ub2RlLnkgKz0gdGhpcy5zcGR5O1xuICAgIC8vICAgICAgICAgICAgIHRoaXMuaWNvbi55ICs9IHRoaXMuc3BkejtcbiAgICAvLyAgICAgICAgICAgICBicmVhaztcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIC8vIGNhc2UgMToge1xuICAgIC8vICAgICAgICAgLy8gICAgIGlmICh0aGlzLm5vZGUueSA8IC1CYWxsX01haW4uaW5zdGFuY2UudWlNYW5hZ2VyLlNjcmVlbkhlaWdodCAvIDIpIHtcbiAgICAvLyAgICAgICAgIC8vICAgICAgICAgdGhpcy5uZXh0U3RhdHVzID0gMjtcbiAgICAvLyAgICAgICAgIC8vICAgICB9XG4gICAgLy8gICAgICAgICAvLyAgICAgdGhpcy5zcGR5IC09IC41O1xuICAgIC8vICAgICAgICAgLy8gICAgIHRoaXMubm9kZS54ICs9IHRoaXMuc3BkeDtcbiAgICAvLyAgICAgICAgIC8vICAgICB0aGlzLm5vZGUueSArPSB0aGlzLnNwZHk7XG4gICAgLy8gICAgICAgICAvLyAgICAgYnJlYWs7XG4gICAgLy8gICAgICAgICAvLyB9XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/merge/pulicCom/TouchEffect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ba1070sT7NPqKINxiKgj14u', 'TouchEffect');
// script/merge/pulicCom/TouchEffect.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TouchEffect = /** @class */ (function (_super) {
    __extends(TouchEffect, _super);
    function TouchEffect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.scaleTime = 0.07;
        _this.initScaleX = 1;
        _this.initScaleY = 1;
        _this.dS = 0.9;
        return _this;
        // update (dt) {}
    }
    TouchEffect.prototype.onLoad = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
    };
    TouchEffect.prototype.start = function () {
        this.initScaleX = this.node.scaleX;
        this.initScaleY = this.node.scaleY;
        cc.tween(this.node).stop();
    };
    TouchEffect.prototype.onTouchStart = function () {
        var tarScaleX = this.node.scaleX * 0.9;
        var tarScaleY = this.node.scaleY * 0.9;
        cc.tween(this.node)
            .to(this.scaleTime, { scaleX: tarScaleX, scaleY: tarScaleY })
            .start();
    };
    TouchEffect.prototype.onTouchEnd = function () {
        cc.tween(this.node)
            .to(this.scaleTime, { scaleX: this.initScaleX, scaleY: this.initScaleY })
            .start();
    };
    __decorate([
        property()
    ], TouchEffect.prototype, "scaleTime", void 0);
    TouchEffect = __decorate([
        ccclass
    ], TouchEffect);
    return TouchEffect;
}(cc.Component));
exports.default = TouchEffect;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvbWVyZ2UvcHVsaWNDb20vVG91Y2hFZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBeUMsK0JBQVk7SUFBckQ7UUFBQSxxRUFtQ0M7UUFqQ1csZUFBUyxHQUFXLElBQUksQ0FBQztRQUV6QixnQkFBVSxHQUFHLENBQUMsQ0FBQztRQUNmLGdCQUFVLEdBQUcsQ0FBQyxDQUFDO1FBRWYsUUFBRSxHQUFHLEdBQUcsQ0FBQzs7UUEyQmpCLGlCQUFpQjtJQUNyQixDQUFDO0lBMUJHLDRCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBRUQsMkJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDbkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNuQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRUQsa0NBQVksR0FBWjtRQUNJLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUN6QyxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDekMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ2QsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsQ0FBQzthQUM1RCxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQsZ0NBQVUsR0FBVjtRQUNJLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNkLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzthQUN4RSxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBOUJEO1FBREMsUUFBUSxFQUFFO2tEQUNzQjtJQUZoQixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBbUMvQjtJQUFELGtCQUFDO0NBbkNELEFBbUNDLENBbkN3QyxFQUFFLENBQUMsU0FBUyxHQW1DcEQ7a0JBbkNvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvdWNoRWZmZWN0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoKVxuICAgIHByaXZhdGUgc2NhbGVUaW1lOiBudW1iZXIgPSAwLjA3O1xuXG4gICAgcHJpdmF0ZSBpbml0U2NhbGVYID0gMTtcbiAgICBwcml2YXRlIGluaXRTY2FsZVkgPSAxO1xuXG4gICAgcHJpdmF0ZSBkUyA9IDAuOTtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuaW5pdFNjYWxlWCA9IHRoaXMubm9kZS5zY2FsZVg7XG4gICAgICAgIHRoaXMuaW5pdFNjYWxlWSA9IHRoaXMubm9kZS5zY2FsZVk7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkuc3RvcCgpO1xuICAgIH1cblxuICAgIG9uVG91Y2hTdGFydCgpIHtcbiAgICAgICAgY29uc3QgdGFyU2NhbGVYID0gdGhpcy5ub2RlLnNjYWxlWCAqIDAuOTtcbiAgICAgICAgY29uc3QgdGFyU2NhbGVZID0gdGhpcy5ub2RlLnNjYWxlWSAqIDAuOTtcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxuICAgICAgICAgICAgLnRvKHRoaXMuc2NhbGVUaW1lLCB7IHNjYWxlWDogdGFyU2NhbGVYLCBzY2FsZVk6IHRhclNjYWxlWSB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgb25Ub3VjaEVuZCgpIHtcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxuICAgICAgICAgICAgLnRvKHRoaXMuc2NhbGVUaW1lLCB7IHNjYWxlWDogdGhpcy5pbml0U2NhbGVYLCBzY2FsZVk6IHRoaXMuaW5pdFNjYWxlWSB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/common/PmManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c59fbE/B0tCqLlrT4Ke6NFc', 'PmManager');
// script/common/PmManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pm = void 0;
var PmManager = /** @class */ (function () {
    function PmManager() {
    }
    Object.defineProperty(PmManager, "platform", {
        get: function () {
            if (!this._platform) {
                this._platform = new PmManager();
            }
            return this._platform;
        },
        enumerable: false,
        configurable: true
    });
    PmManager.prototype.Get = function (key) {
        var obj = cc.sys.localStorage.getItem(key);
        if (!obj)
            return null;
        var value = JSON.parse(obj);
        return value;
    };
    ;
    PmManager.prototype.Set = function (key, value) {
        cc.sys.localStorage.setItem(key, JSON.stringify(value));
        // cc.sys.localStorage.setItem(key, value);
    };
    ;
    return PmManager;
}());
exports.default = PmManager;
exports.pm = PmManager.platform;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvY29tbW9uL1BtTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUVJO0lBQXdCLENBQUM7SUFFekIsc0JBQWtCLHFCQUFRO2FBQTFCO1lBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQzthQUNwQztZQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQUVELHVCQUFHLEdBQUgsVUFBSSxHQUFXO1FBQ1gsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxHQUFHO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFDdEIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM1QixPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBQUEsQ0FBQztJQUNGLHVCQUFHLEdBQUgsVUFBSSxHQUFXLEVBQUUsS0FBYTtRQUMxQixFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN4RCwyQ0FBMkM7SUFDL0MsQ0FBQztJQUFBLENBQUM7SUFDTixnQkFBQztBQUFELENBckJBLEFBcUJDLElBQUE7O0FBRVksUUFBQSxFQUFFLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBtTWFuYWdlciB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgX3BsYXRmb3JtOiBQbU1hbmFnZXI7XG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXQgcGxhdGZvcm0oKTogUG1NYW5hZ2VyIHtcbiAgICAgICAgaWYgKCF0aGlzLl9wbGF0Zm9ybSkge1xuICAgICAgICAgICAgdGhpcy5fcGxhdGZvcm0gPSBuZXcgUG1NYW5hZ2VyKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3BsYXRmb3JtO1xuICAgIH1cblxuICAgIEdldChrZXk6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGxldCBvYmogPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcbiAgICAgICAgaWYgKCFvYmopIHJldHVybiBudWxsO1xuICAgICAgICBsZXQgdmFsdWUgPSBKU09OLnBhcnNlKG9iaik7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuICAgIFNldChrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuICAgICAgICAvLyBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XG4gICAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IHBtID0gUG1NYW5hZ2VyLnBsYXRmb3JtOyJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/game/common/BundleResource.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'adca97uZdZJs7CuuM2zT5ky', 'BundleResource');
// script/game/common/BundleResource.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BundleResource = /** @class */ (function (_super) {
    __extends(BundleResource, _super);
    function BundleResource() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sceneAsset = null;
        return _this;
    }
    __decorate([
        property(cc.SceneAsset)
    ], BundleResource.prototype, "sceneAsset", void 0);
    BundleResource = __decorate([
        ccclass
    ], BundleResource);
    return BundleResource;
}(cc.Component));
exports.default = BundleResource;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZ2FtZS9jb21tb24vQnVuZGxlUmVzb3VyY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBNEMsa0NBQVk7SUFBeEQ7UUFBQSxxRUFJQztRQUZVLGdCQUFVLEdBQWlCLElBQUksQ0FBQTs7SUFFMUMsQ0FBQztJQUZHO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUM7c0RBQ2M7SUFGckIsY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQUlsQztJQUFELHFCQUFDO0NBSkQsQUFJQyxDQUoyQyxFQUFFLENBQUMsU0FBUyxHQUl2RDtrQkFKb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnVuZGxlUmVzb3VyY2UgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShjYy5TY2VuZUFzc2V0KVxuICAgIHB1YmxpYyBzY2VuZUFzc2V0OiBjYy5TY2VuZUFzc2V0ID1udWxsXG4gICAgXG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/game/ui/bl_Logic.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3ffb16hFyNCiZ8W02iaH924', 'bl_Logic');
// script/game/ui/bl_Logic.ts

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
var Utils_1 = require("../../utils/Utils");
var DataManager_1 = require("../../common/DataManager");
var GlobalDefines_1 = require("../../common/consts/GlobalDefines");
var bl_ball_1 = require("./bl_ball");
var Global_1 = require("../../common/Global");
var GlobalEvents_1 = require("../../common/GlobalEvents");
var logger_1 = require("../../utils/logger");
var bl_Config_1 = require("./bl_Config");
var bl_tipsPanel_1 = require("./bl_tipsPanel");
var RewardUtils_1 = require("../../common/comp/reward/RewardUtils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var bl_Logic = /** @class */ (function (_super) {
    __extends(bl_Logic, _super);
    function bl_Logic() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ico = null;
        _this.bl_list = [];
        _this.bl_dropXs = [];
        _this.bl_cloneDropx = [];
        _this.bl_scList = [];
        _this.isComposeIng = false;
        _this.currBalls = [];
        return _this;
    }
    bl_Logic.prototype.onLoad = function () {
        this.bl_dropXs = this.bl_initDropX(-this.node.width / 2 + 200, this.node.width / 2 - 200, 10);
    };
    bl_Logic.prototype.onEnable = function () {
        Global_1.GlobalEvent.on(GlobalEvents_1.EventBallClick.NAME, this.onEventBallClick, this);
    };
    bl_Logic.prototype.onDisable = function () {
        Global_1.GlobalEvent.off(GlobalEvents_1.EventBallClick.NAME, this.onEventBallClick, this);
    };
    bl_Logic.prototype.start = function () {
    };
    bl_Logic.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var i, point, node, scr;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.bl_list = DataManager_1.dm.player.arr;
                        Utils_1.Utils.arrayCopy(this.bl_dropXs, this.bl_cloneDropx);
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < this.bl_list.length)) return [3 /*break*/, 4];
                        point = this.bl_getPoint(this.bl_list[i]);
                        return [4 /*yield*/, this.bl_createBall(this.bl_list[i], point, true)];
                    case 2:
                        node = _a.sent();
                        scr = node.getComponent(bl_ball_1.default);
                        this.bl_scList.push(scr);
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    //获得筹码预制件
    bl_Logic.prototype.bl_createBall = function (idx, point, isDrop) {
        return __awaiter(this, void 0, void 0, function () {
            var url, p, b, scr;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = 'prefab/game/ball/' + idx;
                        return [4 /*yield*/, Utils_1.Utils.loadPefab(url)];
                    case 1:
                        p = _a.sent();
                        b = cc.instantiate(p);
                        b.parent = this.node;
                        scr = b.getComponent(bl_ball_1.default);
                        // this.bl_scList.push(scr);
                        scr.init(idx, isDrop);
                        b.setPosition(point);
                        return [2 /*return*/, b];
                }
            });
        });
    };
    bl_Logic.prototype.bl_getPoint = function (idx) {
        var y = GlobalDefines_1.GlobalDefines.ScreenHeight / 2;
        y += Math.random() * 200 * idx;
        var x = Utils_1.Utils.getRandomByArr(this.bl_cloneDropx);
        return cc.v2(x, y);
    };
    bl_Logic.prototype.bl_initDropX = function (min, max, count) {
        var totalRange = max - min + 1;
        var averageSpace = totalRange / count; // 每个点应该占据的平均空间  
        // const remainder = totalRange % count; // 无法均匀分配的余数  
        var points = [];
        var currentPoint = min;
        // 首先分配完整的平均空间  
        for (var i = 0; i < count; i++) {
            points.push(currentPoint);
            currentPoint += averageSpace;
        }
        var arr1 = points.filter(function (value) { return value >= 0; });
        var arr2 = points.filter(function (value) { return value < 0; });
        arr1.sort(function (a, b) { return a - b; });
        arr2.sort(function (a, b) { return b - a; });
        points = arr1.concat(arr2);
        return points;
    };
    bl_Logic.prototype.onEventBallClick = function (evt) {
        var _this = this;
        if (this.isComposeIng)
            return;
        var arr = this.bl_scList.filter(function (value) {
            return value.rId == evt.rId;
        });
        if (arr.length > 0) {
            this.currBalls = this.bl_scList.filter(function (value) {
                return value.id == evt.id;
            });
            this.currTarget = arr[0];
            var alls = this.bl_findBall();
            if (alls.size == 0)
                return;
            var arr1 = Array.from(alls);
            arr1.sort(function (a, b) {
                var d1 = Utils_1.Utils.distanceByNode(_this.currTarget.node, a.node);
                var d2 = Utils_1.Utils.distanceByNode(_this.currTarget.node, b.node);
                return d1 - d2;
            });
            arr1.unshift(this.currTarget);
            this.bl_compose(arr1);
            logger_1.Logger.debug("合成：", arr1);
        }
    };
    bl_Logic.prototype.bl_compose = function (arr) {
        return __awaiter(this, void 0, void 0, function () {
            var targets, deletes, i, newList, i, node, point, newNode, scr, num, i;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isComposeIng = true;
                        targets = [];
                        deletes = [];
                        arr.forEach(function (element, index) {
                            if (index % 2 == 0 && index != arr.length - 1) {
                                targets.push(element);
                            }
                            else {
                                deletes.push(element);
                            }
                        });
                        for (i = 0; i < deletes.length; i++) {
                            deletes[i].delete();
                        }
                        deletes = null;
                        // if (targets.length % 2 == 0) {
                        //     let needDelete = targets[targets.length - 1];
                        //     targets.splice(targets.length - 1, 1);
                        //     needDelete.delete();
                        //     targets.unshift(this.currTarget);
                        // }
                        this.bl_resetBallList();
                        newList = [];
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < targets.length)) return [3 /*break*/, 4];
                        node = targets[i].node;
                        if (node)
                            node.removeComponent(cc.RigidBody);
                        point = targets[i].node.getPosition();
                        return [4 /*yield*/, this.bl_createBall(targets[i].id + 1, point)];
                    case 2:
                        newNode = _a.sent();
                        scr = newNode.getComponent(bl_ball_1.default);
                        this.bl_scList.push(scr);
                        newNode.scale = 0;
                        newList.push(scr);
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4:
                        num = 0;
                        for (i = 0; i < targets.length; i++) {
                            targets[i].playHide(function () {
                                num++;
                                if (num >= targets.length) {
                                    for (var i_1 = 0; i_1 < newList.length; i_1++) {
                                        newList[i_1].playShow();
                                    }
                                    targets = null;
                                    _this.scheduleOnce(function () {
                                        _this.bl_resetBallList();
                                        if (newList[0].id == bl_Config_1.bc.maxId) {
                                            for (var i_2 = 0; i_2 < newList.length; i_2++) {
                                                var best = newList[i_2];
                                                best.removeRigidbody();
                                                _this.flyBest(best.node);
                                            }
                                        }
                                        else {
                                            if (newList.length > 1) {
                                                _this.bl_compose(newList);
                                            }
                                            else {
                                                bl_tipsPanel_1.default.Show(21);
                                                _this.flyIco();
                                                _this.isComposeIng = false;
                                                _this.bl_drop();
                                                _this.bl_cacheList();
                                            }
                                        }
                                    }, .2);
                                }
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    bl_Logic.prototype.bl_cacheList = function () {
        var arr = [];
        for (var i = 0; i < this.bl_scList.length; i++) {
            arr.push(this.bl_scList[i].id);
        }
        DataManager_1.dm.player.arr = arr;
    };
    bl_Logic.prototype.bl_resetBallList = function () {
        this.currBalls = [];
        var arr = this.bl_scList.filter(function (value) {
            return value && !value.isDestory;
        });
        this.bl_scList = arr;
    };
    bl_Logic.prototype.bl_findBall = function () {
        var nearbyPoints = this.bl_getCanBall(this.currTarget);
        var visitedPoints = new Set(nearbyPoints); // 使用Set来存储已访问的点  
        // 迭代查询  
        while (nearbyPoints.length > 0) {
            var newNearbyPoints = [];
            for (var _i = 0, nearbyPoints_1 = nearbyPoints; _i < nearbyPoints_1.length; _i++) {
                var ball = nearbyPoints_1[_i];
                // 查询距离当前点为5个单位内的点，但排除已访问过的点  
                var tempNearbyPoints = this.bl_getCanBall(ball);
                for (var _a = 0, tempNearbyPoints_1 = tempNearbyPoints; _a < tempNearbyPoints_1.length; _a++) {
                    var tempPoint = tempNearbyPoints_1[_a];
                    if (!visitedPoints.has(tempPoint)) {
                        newNearbyPoints.push(tempPoint);
                        visitedPoints.add(tempPoint);
                    }
                }
            }
            nearbyPoints = newNearbyPoints; // 更新需要查询的点  
        }
        // 返回所有找到的点（包括初始查询和迭代查询的结果）  
        return visitedPoints;
    };
    bl_Logic.prototype.bl_getCanBall = function (target) {
        var _this = this;
        var arr = this.currBalls.filter(function (value) {
            var dis = Utils_1.Utils.distanceByNode(target.node, value.node);
            return dis < target.node.width + 20 && value.rId != _this.currTarget.rId;
        });
        return arr;
    };
    bl_Logic.prototype.bl_drop = function () {
        return __awaiter(this, void 0, void 0, function () {
            var maxY, random, len, maxId, typeNum, rates, ids, i, i, index, id, point, node, scr;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        maxY = this.bl_checkMaxPointY();
                        if (maxY > this.node.height / 2 - 200)
                            return [2 /*return*/];
                        if (maxY > this.node.height / 4) {
                            random = Utils_1.Utils.randomFloat(0, 1);
                            if (random < .5)
                                return [2 /*return*/];
                        }
                        len = Utils_1.Utils.randomInt(1, 15);
                        if (maxY > this.node.height / 4 + 100) {
                            len = Utils_1.Utils.randomInt(1, 10);
                        }
                        maxId = this.bl_checkMaxId();
                        maxId = maxId > 3 ? 3 : maxId;
                        typeNum = Utils_1.Utils.randomIntInclusive(1, maxId);
                        rates = Utils_1.Utils.getRandomRates(typeNum);
                        ids = [];
                        for (i = 1; i <= typeNum; i++) {
                            ids.push(i);
                        }
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < len)) return [3 /*break*/, 4];
                        index = Utils_1.Utils.randomByWeightList(rates);
                        id = ids[index];
                        point = this.bl_getPoint(id);
                        return [4 /*yield*/, this.bl_createBall(id, point, true)];
                    case 2:
                        node = _a.sent();
                        scr = node.getComponent(bl_ball_1.default);
                        this.bl_scList.push(scr);
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4:
                        this.bl_cacheList();
                        return [2 /*return*/];
                }
            });
        });
    };
    //检测当前最大值
    bl_Logic.prototype.bl_checkMaxId = function () {
        var flag = 0;
        this.bl_scList.forEach(function (element) {
            if (element.id > flag)
                flag = element.id;
        });
        return flag;
    };
    bl_Logic.prototype.bl_checkMaxPointY = function () {
        var flag = 0;
        this.bl_scList.forEach(function (element) {
            if (element.node.y > flag)
                flag = element.node.y;
        });
        return flag;
    };
    //刷新
    bl_Logic.prototype.bl_onRefresh = function () {
        if (Utils_1.Utils.btnLock()) {
            return;
        }
        this.node.destroyAllChildren();
        this.bl_scList = [];
        this.init();
    };
    bl_Logic.prototype.flyIco = function () {
        var target = bl_Config_1.bc.top.ico2;
        RewardUtils_1.RewardUtils.resBoomByNode(this.ico, target, 10);
    };
    bl_Logic.prototype.flyBest = function (node) {
        var target = bl_Config_1.bc.top.ico1;
        var p1 = target.convertToWorldSpaceAR(cc.v2(0, 0));
        var p2 = this.node.convertToNodeSpaceAR(p1);
        cc.tween(node).to(.2, { x: 0, y: 0, scale: 1.1 }).delay(1).to(.5, { position: p2, scale: .5 }, cc.easeSineIn()).to(.2, { scale: 0 }, cc.easeSineIn()).call(function () {
            Global_1.GlobalEvent.dispatchEvent(new GlobalEvents_1.EventChangeTop(2, 1));
        }).start();
    };
    __decorate([
        property(cc.Node)
    ], bl_Logic.prototype, "ico", void 0);
    bl_Logic = __decorate([
        ccclass
    ], bl_Logic);
    return bl_Logic;
}(cc.Component));
exports.default = bl_Logic;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZ2FtZS91aS9ibF9Mb2dpYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBMEM7QUFDMUMsd0RBQThDO0FBQzlDLG1FQUFrRTtBQUNsRSxxQ0FBZ0M7QUFDaEMsOENBQWtEO0FBQ2xELDBEQUEyRTtBQUMzRSw2Q0FBNEM7QUFDNUMseUNBQWlDO0FBQ2pDLCtDQUEwQztBQUMxQyxvRUFBbUU7QUFHN0QsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUErVEM7UUE1VEcsU0FBRyxHQUFZLElBQUksQ0FBQztRQUVwQixhQUFPLEdBQUcsRUFBRSxDQUFDO1FBRWIsZUFBUyxHQUFHLEVBQUUsQ0FBQztRQUVmLG1CQUFhLEdBQUcsRUFBRSxDQUFDO1FBRW5CLGVBQVMsR0FBYyxFQUFFLENBQUM7UUFFMUIsa0JBQVksR0FBRyxLQUFLLENBQUM7UUEwRXJCLGVBQVMsR0FBYyxFQUFFLENBQUM7O0lBd085QixDQUFDO0lBalRHLHlCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDbEcsQ0FBQztJQUVELDJCQUFRLEdBQVI7UUFDSSxvQkFBVyxDQUFDLEVBQUUsQ0FBQyw2QkFBYyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUNELDRCQUFT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VUFBVSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDdkosb0JBQVcsQ0FBQyxhQUFhLENBQUMsSUFBSSw2QkFBYyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hELENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBRWYsQ0FBQztJQXhURDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lDQUNFO0lBSEgsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQStUNUI7SUFBRCxlQUFDO0NBL1RELEFBK1RDLENBL1RxQyxFQUFFLENBQUMsU0FBUyxHQStUakQ7a0JBL1RvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVXRpbHMgfSBmcm9tIFwiLi4vLi4vdXRpbHMvVXRpbHNcIjtcbmltcG9ydCB7IGRtIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9EYXRhTWFuYWdlclwiO1xuaW1wb3J0IHsgR2xvYmFsRGVmaW5lcyB9IGZyb20gXCIuLi8uLi9jb21tb24vY29uc3RzL0dsb2JhbERlZmluZXNcIjtcbmltcG9ydCBibF9iYWxsIGZyb20gXCIuL2JsX2JhbGxcIjtcbmltcG9ydCB7IEdsb2JhbEV2ZW50IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9HbG9iYWxcIjtcbmltcG9ydCB7IEV2ZW50QmFsbENsaWNrLCBFdmVudENoYW5nZVRvcCB9IGZyb20gXCIuLi8uLi9jb21tb24vR2xvYmFsRXZlbnRzXCI7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiLi4vLi4vdXRpbHMvbG9nZ2VyXCI7XG5pbXBvcnQgeyBiYyB9IGZyb20gXCIuL2JsX0NvbmZpZ1wiO1xuaW1wb3J0IGJsX3RpcHNQYW5lbCBmcm9tIFwiLi9ibF90aXBzUGFuZWxcIjtcbmltcG9ydCB7IFJld2FyZFV0aWxzIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9jb21wL3Jld2FyZC9SZXdhcmRVdGlsc1wiO1xuaW1wb3J0IHsgc20gfSBmcm9tIFwiLi4vLi4vY29tbW9uL1NjZW5lTWFuYWdlclwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgYmxfTG9naWMgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgaWNvOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIGJsX2xpc3QgPSBbXTtcblxuICAgIGJsX2Ryb3BYcyA9IFtdO1xuXG4gICAgYmxfY2xvbmVEcm9weCA9IFtdO1xuXG4gICAgYmxfc2NMaXN0OiBibF9iYWxsW10gPSBbXTtcblxuICAgIGlzQ29tcG9zZUluZyA9IGZhbHNlO1xuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5ibF9kcm9wWHMgPSB0aGlzLmJsX2luaXREcm9wWCgtdGhpcy5ub2RlLndpZHRoIC8gMiArIDIwMCwgdGhpcy5ub2RlLndpZHRoIC8gMiAtIDIwMCwgMTApO1xuICAgIH1cblxuICAgIG9uRW5hYmxlKCkge1xuICAgICAgICBHbG9iYWxFdmVudC5vbihFdmVudEJhbGxDbGljay5OQU1FLCB0aGlzLm9uRXZlbnRCYWxsQ2xpY2ssIHRoaXMpO1xuICAgIH1cbiAgICBvbkRpc2FibGUoKSB7XG4gICAgICAgIEdsb2JhbEV2ZW50Lm9mZihFdmVudEJhbGxDbGljay5OQU1FLCB0aGlzLm9uRXZlbnRCYWxsQ2xpY2ssIHRoaXMpO1xuICAgIH1cblxuXG4gICAgc3RhcnQoKSB7XG5cbiAgICB9XG4gICAgYXN5bmMgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5ibF9saXN0ID0gZG0ucGxheWVyLmFycjtcbiAgICAgICAgVXRpbHMuYXJyYXlDb3B5KHRoaXMuYmxfZHJvcFhzLCB0aGlzLmJsX2Nsb25lRHJvcHgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYmxfbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHBvaW50ID0gdGhpcy5ibF9nZXRQb2ludCh0aGlzLmJsX2xpc3RbaV0pO1xuICAgICAgICAgICAgbGV0IG5vZGUgPSBhd2FpdCB0aGlzLmJsX2NyZWF0ZUJhbGwodGhpcy5ibF9saXN0W2ldLCBwb2ludCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgc2NyID0gbm9kZS5nZXRDb21wb25lbnQoYmxfYmFsbClcbiAgICAgICAgICAgIHRoaXMuYmxfc2NMaXN0LnB1c2goc2NyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLy/ojrflvpfnrbnnoIHpooTliLbku7ZcbiAgICBhc3luYyBibF9jcmVhdGVCYWxsKGlkeCwgcG9pbnQsIGlzRHJvcD8pIHtcbiAgICAgICAgbGV0IHVybCA9ICdwcmVmYWIvZ2FtZS9iYWxsLycgKyBpZHg7XG4gICAgICAgIGxldCBwID0gYXdhaXQgVXRpbHMubG9hZFBlZmFiKHVybCk7XG4gICAgICAgIGxldCBiOiBjYy5Ob2RlID0gY2MuaW5zdGFudGlhdGUocCk7XG4gICAgICAgIGIucGFyZW50ID0gdGhpcy5ub2RlO1xuICAgICAgICBsZXQgc2NyID0gYi5nZXRDb21wb25lbnQoYmxfYmFsbClcbiAgICAgICAgLy8gdGhpcy5ibF9zY0xpc3QucHVzaChzY3IpO1xuICAgICAgICBzY3IuaW5pdChpZHgsIGlzRHJvcCk7XG4gICAgICAgIGIuc2V0UG9zaXRpb24ocG9pbnQpO1xuXG4gICAgICAgIHJldHVybiBiO1xuICAgIH1cblxuICAgIGJsX2dldFBvaW50KGlkeCkge1xuICAgICAgICBsZXQgeSA9IEdsb2JhbERlZmluZXMuU2NyZWVuSGVpZ2h0IC8gMjtcbiAgICAgICAgeSArPSBNYXRoLnJhbmRvbSgpICogMjAwICogaWR4O1xuICAgICAgICBsZXQgeCA9IFV0aWxzLmdldFJhbmRvbUJ5QXJyKHRoaXMuYmxfY2xvbmVEcm9weCk7XG4gICAgICAgIHJldHVybiBjYy52Mih4LCB5KTtcbiAgICB9XG5cbiAgICBibF9pbml0RHJvcFgobWluLCBtYXgsIGNvdW50KSB7XG4gICAgICAgIGNvbnN0IHRvdGFsUmFuZ2UgPSBtYXggLSBtaW4gKyAxO1xuICAgICAgICBjb25zdCBhdmVyYWdlU3BhY2UgPSB0b3RhbFJhbmdlIC8gY291bnQ7IC8vIOavj+S4queCueW6lOivpeWNoOaNrueahOW5s+Wdh+epuumXtCAgXG4gICAgICAgIC8vIGNvbnN0IHJlbWFpbmRlciA9IHRvdGFsUmFuZ2UgJSBjb3VudDsgLy8g5peg5rOV5Z2H5YyA5YiG6YWN55qE5L2Z5pWwICBcblxuICAgICAgICBsZXQgcG9pbnRzID0gW107XG4gICAgICAgIGxldCBjdXJyZW50UG9pbnQgPSBtaW47XG5cbiAgICAgICAgLy8g6aaW5YWI5YiG6YWN5a6M5pW055qE5bmz5Z2H56m66Ze0ICBcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBwb2ludHMucHVzaChjdXJyZW50UG9pbnQpO1xuICAgICAgICAgICAgY3VycmVudFBvaW50ICs9IGF2ZXJhZ2VTcGFjZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBhcnIxID0gcG9pbnRzLmZpbHRlcih2YWx1ZSA9PiB2YWx1ZSA+PSAwKTtcbiAgICAgICAgbGV0IGFycjIgPSBwb2ludHMuZmlsdGVyKHZhbHVlID0+IHZhbHVlIDwgMCk7XG5cbiAgICAgICAgYXJyMS5zb3J0KChhLCBiKSA9PiBhIC0gYik7XG4gICAgICAgIGFycjIuc29ydCgoYSwgYikgPT4gYiAtIGEpO1xuXG4gICAgICAgIHBvaW50cyA9IGFycjEuY29uY2F0KGFycjIpO1xuXG4gICAgICAgIHJldHVybiBwb2ludHM7XG4gICAgfVxuXG4gICAgY3VyckJhbGxzOiBibF9iYWxsW10gPSBbXTtcbiAgICBjdXJyVGFyZ2V0OiBibF9iYWxsO1xuICAgIG9uRXZlbnRCYWxsQ2xpY2soZXZ0OiBFdmVudEJhbGxDbGljaykge1xuICAgICAgICBpZiAodGhpcy5pc0NvbXBvc2VJbmcpIHJldHVybjtcbiAgICAgICAgbGV0IGFyciA9IHRoaXMuYmxfc2NMaXN0LmZpbHRlcigodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS5ySWQgPT0gZXZ0LnJJZDtcbiAgICAgICAgfSlcbiAgICAgICAgaWYgKGFyci5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJCYWxscyA9IHRoaXMuYmxfc2NMaXN0LmZpbHRlcigodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUuaWQgPT0gZXZ0LmlkO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRoaXMuY3VyclRhcmdldCA9IGFyclswXTtcbiAgICAgICAgICAgIGxldCBhbGxzID0gdGhpcy5ibF9maW5kQmFsbCgpO1xuICAgICAgICAgICAgaWYgKGFsbHMuc2l6ZSA9PSAwKSByZXR1cm47XG4gICAgICAgICAgICBsZXQgYXJyMSA9IEFycmF5LmZyb20oYWxscyk7XG4gICAgICAgICAgICBhcnIxLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgZDEgPSBVdGlscy5kaXN0YW5jZUJ5Tm9kZSh0aGlzLmN1cnJUYXJnZXQubm9kZSwgYS5ub2RlKVxuICAgICAgICAgICAgICAgIGxldCBkMiA9IFV0aWxzLmRpc3RhbmNlQnlOb2RlKHRoaXMuY3VyclRhcmdldC5ub2RlLCBiLm5vZGUpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGQxIC0gZDI7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgYXJyMS51bnNoaWZ0KHRoaXMuY3VyclRhcmdldCk7XG4gICAgICAgICAgICB0aGlzLmJsX2NvbXBvc2UoYXJyMSlcbiAgICAgICAgICAgIExvZ2dlci5kZWJ1ZyhcIuWQiOaIkO+8mlwiLCBhcnIxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGJsX2NvbXBvc2UoYXJyOiBibF9iYWxsW10pIHtcbiAgICAgICAgdGhpcy5pc0NvbXBvc2VJbmcgPSB0cnVlO1xuICAgICAgICAvLyBsZXQgdGFyZ2V0czogYmxfYmFsbFtdID0gYXJyLmZpbHRlcigodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAgIC8vICAgICByZXR1cm4gaW5kZXggJSAyID09IDA7XG4gICAgICAgIC8vIH0pXG4gICAgICAgIGxldCB0YXJnZXRzID0gW107XG4gICAgICAgIGxldCBkZWxldGVzID0gW107XG4gICAgICAgIGFyci5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKGluZGV4ICUgMiA9PSAwICYmIGluZGV4ICE9IGFyci5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0cy5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkZWxldGVzLnB1c2goZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGVsZXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZGVsZXRlc1tpXS5kZWxldGUoKTtcbiAgICAgICAgfVxuICAgICAgICBkZWxldGVzID0gbnVsbDtcbiAgICAgICAgLy8gaWYgKHRhcmdldHMubGVuZ3RoICUgMiA9PSAwKSB7XG4gICAgICAgIC8vICAgICBsZXQgbmVlZERlbGV0ZSA9IHRhcmdldHNbdGFyZ2V0cy5sZW5ndGggLSAxXTtcbiAgICAgICAgLy8gICAgIHRhcmdldHMuc3BsaWNlKHRhcmdldHMubGVuZ3RoIC0gMSwgMSk7XG4gICAgICAgIC8vICAgICBuZWVkRGVsZXRlLmRlbGV0ZSgpO1xuICAgICAgICAvLyAgICAgdGFyZ2V0cy51bnNoaWZ0KHRoaXMuY3VyclRhcmdldCk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgdGhpcy5ibF9yZXNldEJhbGxMaXN0KCk7XG4gICAgICAgIGxldCBuZXdMaXN0ID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFyZ2V0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IG5vZGU6IGNjLk5vZGUgPSB0YXJnZXRzW2ldLm5vZGVcbiAgICAgICAgICAgIGlmIChub2RlKSBub2RlLnJlbW92ZUNvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xuICAgICAgICAgICAgbGV0IHBvaW50ID0gdGFyZ2V0c1tpXS5ub2RlLmdldFBvc2l0aW9uKCk7XG4gICAgICAgICAgICAvLyB0aGlzLmJsX2NyZWF0ZUJhbGwodGFyZ2V0c1tpXS5pZCAqIDIsIHBvaW50KTtcblxuICAgICAgICAgICAgbGV0IG5ld05vZGUgPSBhd2FpdCB0aGlzLmJsX2NyZWF0ZUJhbGwodGFyZ2V0c1tpXS5pZCArIDEsIHBvaW50KTtcbiAgICAgICAgICAgIGxldCBzY3IgPSBuZXdOb2RlLmdldENvbXBvbmVudChibF9iYWxsKTtcbiAgICAgICAgICAgIHRoaXMuYmxfc2NMaXN0LnB1c2goc2NyKTtcbiAgICAgICAgICAgIG5ld05vZGUuc2NhbGUgPSAwO1xuICAgICAgICAgICAgbmV3TGlzdC5wdXNoKHNjcik7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbnVtID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXJnZXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0YXJnZXRzW2ldLnBsYXlIaWRlKCgpID0+IHtcbiAgICAgICAgICAgICAgICBudW0rKztcbiAgICAgICAgICAgICAgICBpZiAobnVtID49IHRhcmdldHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmV3TGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3TGlzdFtpXS5wbGF5U2hvdygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldHMgPSBudWxsO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ibF9yZXNldEJhbGxMaXN0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXdMaXN0WzBdLmlkID09IGJjLm1heElkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBiZXN0ID0gbmV3TGlzdFtpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVzdC5yZW1vdmVSaWdpZGJvZHkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mbHlCZXN0KGJlc3Qubm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3TGlzdC5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmxfY29tcG9zZShuZXdMaXN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBibF90aXBzUGFuZWwuU2hvdygyMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmx5SWNvKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNDb21wb3NlSW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmxfZHJvcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJsX2NhY2hlTGlzdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgLjIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGJsX2NhY2hlTGlzdCgpIHtcbiAgICAgICAgbGV0IGFyciA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYmxfc2NMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcnIucHVzaCh0aGlzLmJsX3NjTGlzdFtpXS5pZCk7XG4gICAgICAgIH1cbiAgICAgICAgZG0ucGxheWVyLmFyciA9IGFycjtcbiAgICB9XG5cbiAgICBibF9yZXNldEJhbGxMaXN0KCkge1xuICAgICAgICB0aGlzLmN1cnJCYWxscyA9IFtdO1xuICAgICAgICBsZXQgYXJyID0gdGhpcy5ibF9zY0xpc3QuZmlsdGVyKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlICYmICF2YWx1ZS5pc0Rlc3Rvcnk7XG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuYmxfc2NMaXN0ID0gYXJyO1xuICAgIH1cblxuICAgIGJsX2ZpbmRCYWxsKCkge1xuICAgICAgICBsZXQgbmVhcmJ5UG9pbnRzID0gdGhpcy5ibF9nZXRDYW5CYWxsKHRoaXMuY3VyclRhcmdldCk7XG4gICAgICAgIGxldCB2aXNpdGVkUG9pbnRzID0gbmV3IFNldChuZWFyYnlQb2ludHMpOyAvLyDkvb/nlKhTZXTmnaXlrZjlgqjlt7Lorr/pl67nmoTngrkgIFxuXG4gICAgICAgIC8vIOi/reS7o+afpeivoiAgXG4gICAgICAgIHdoaWxlIChuZWFyYnlQb2ludHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGV0IG5ld05lYXJieVBvaW50cyA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgYmFsbCBvZiBuZWFyYnlQb2ludHMpIHtcbiAgICAgICAgICAgICAgICAvLyDmn6Xor6Lot53nprvlvZPliY3ngrnkuLo15Liq5Y2V5L2N5YaF55qE54K577yM5L2G5o6S6Zmk5bey6K6/6Zeu6L+H55qE54K5ICBcbiAgICAgICAgICAgICAgICBsZXQgdGVtcE5lYXJieVBvaW50cyA9IHRoaXMuYmxfZ2V0Q2FuQmFsbChiYWxsKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB0ZW1wUG9pbnQgb2YgdGVtcE5lYXJieVBvaW50cykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXZpc2l0ZWRQb2ludHMuaGFzKHRlbXBQb2ludCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld05lYXJieVBvaW50cy5wdXNoKHRlbXBQb2ludCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2aXNpdGVkUG9pbnRzLmFkZCh0ZW1wUG9pbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmVhcmJ5UG9pbnRzID0gbmV3TmVhcmJ5UG9pbnRzOyAvLyDmm7TmlrDpnIDopoHmn6Xor6LnmoTngrkgIFxuICAgICAgICB9XG5cbiAgICAgICAgLy8g6L+U5Zue5omA5pyJ5om+5Yiw55qE54K577yI5YyF5ous5Yid5aeL5p+l6K+i5ZKM6L+t5Luj5p+l6K+i55qE57uT5p6c77yJICBcbiAgICAgICAgcmV0dXJuIHZpc2l0ZWRQb2ludHM7XG4gICAgfVxuXG4gICAgYmxfZ2V0Q2FuQmFsbCh0YXJnZXQpIHtcbiAgICAgICAgbGV0IGFyciA9IHRoaXMuY3VyckJhbGxzLmZpbHRlcigodmFsdWUpID0+IHtcbiAgICAgICAgICAgIGxldCBkaXMgPSBVdGlscy5kaXN0YW5jZUJ5Tm9kZSh0YXJnZXQubm9kZSwgdmFsdWUubm9kZSk7XG4gICAgICAgICAgICByZXR1cm4gZGlzIDwgdGFyZ2V0Lm5vZGUud2lkdGggKyAyMCAmJiB2YWx1ZS5ySWQgIT0gdGhpcy5jdXJyVGFyZ2V0LnJJZDtcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGFycjtcbiAgICB9XG5cbiAgICBhc3luYyBibF9kcm9wKCkge1xuXG4gICAgICAgIGxldCBtYXhZID0gdGhpcy5ibF9jaGVja01heFBvaW50WSgpO1xuICAgICAgICBpZiAobWF4WSA+IHRoaXMubm9kZS5oZWlnaHQgLyAyIC0gMjAwKSByZXR1cm47XG4gICAgICAgIGlmIChtYXhZID4gdGhpcy5ub2RlLmhlaWdodCAvIDQpIHtcbiAgICAgICAgICAgIGxldCByYW5kb20gPSBVdGlscy5yYW5kb21GbG9hdCgwLCAxKTtcbiAgICAgICAgICAgIGlmIChyYW5kb20gPCAuNSkgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBsZW4gPSBVdGlscy5yYW5kb21JbnQoMSwgMTUpXG4gICAgICAgIGlmIChtYXhZID4gdGhpcy5ub2RlLmhlaWdodCAvIDQgKyAxMDApIHtcbiAgICAgICAgICAgIGxlbiA9IFV0aWxzLnJhbmRvbUludCgxLCAxMClcbiAgICAgICAgfVxuXG5cbiAgICAgICAgbGV0IG1heElkID0gdGhpcy5ibF9jaGVja01heElkKCk7XG4gICAgICAgIG1heElkID0gbWF4SWQgPiAzID8gMyA6IG1heElkO1xuXG4gICAgICAgIGxldCB0eXBlTnVtID0gVXRpbHMucmFuZG9tSW50SW5jbHVzaXZlKDEsIG1heElkKTtcbiAgICAgICAgbGV0IHJhdGVzID0gVXRpbHMuZ2V0UmFuZG9tUmF0ZXModHlwZU51bSk7XG4gICAgICAgIGxldCBpZHMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gdHlwZU51bTsgaSsrKSB7XG4gICAgICAgICAgICBpZHMucHVzaChpKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgaW5kZXggPSBVdGlscy5yYW5kb21CeVdlaWdodExpc3QocmF0ZXMpO1xuICAgICAgICAgICAgbGV0IGlkID0gaWRzW2luZGV4XTtcbiAgICAgICAgICAgIGxldCBwb2ludCA9IHRoaXMuYmxfZ2V0UG9pbnQoaWQpO1xuICAgICAgICAgICAgbGV0IG5vZGUgPSBhd2FpdCB0aGlzLmJsX2NyZWF0ZUJhbGwoaWQsIHBvaW50LCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBzY3IgPSBub2RlLmdldENvbXBvbmVudChibF9iYWxsKVxuICAgICAgICAgICAgdGhpcy5ibF9zY0xpc3QucHVzaChzY3IpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYmxfY2FjaGVMaXN0KCk7XG4gICAgfVxuICAgIC8v5qOA5rWL5b2T5YmN5pyA5aSn5YC8XG4gICAgYmxfY2hlY2tNYXhJZCgpIHtcbiAgICAgICAgbGV0IGZsYWcgPSAwO1xuICAgICAgICB0aGlzLmJsX3NjTGlzdC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5pZCA+IGZsYWcpIGZsYWcgPSBlbGVtZW50LmlkO1xuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gZmxhZztcbiAgICB9XG5cbiAgICBibF9jaGVja01heFBvaW50WSgpIHtcbiAgICAgICAgbGV0IGZsYWcgPSAwO1xuICAgICAgICB0aGlzLmJsX3NjTGlzdC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5ub2RlLnkgPiBmbGFnKSBmbGFnID0gZWxlbWVudC5ub2RlLnk7XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBmbGFnO1xuICAgIH1cblxuICAgIC8v5Yi35pawXG4gICAgYmxfb25SZWZyZXNoKCkge1xuICAgICAgICBpZiAoVXRpbHMuYnRuTG9jaygpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveUFsbENoaWxkcmVuKCk7XG4gICAgICAgIHRoaXMuYmxfc2NMaXN0ID0gW107XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuXG4gICAgfVxuXG4gICAgZmx5SWNvKCkge1xuICAgICAgICBsZXQgdGFyZ2V0ID0gYmMudG9wLmljbzI7XG4gICAgICAgIFJld2FyZFV0aWxzLnJlc0Jvb21CeU5vZGUodGhpcy5pY28sIHRhcmdldCwgMTApO1xuXG4gICAgfVxuXG4gICAgZmx5QmVzdChub2RlKSB7XG4gICAgICAgIGxldCB0YXJnZXQgPSBiYy50b3AuaWNvMTtcbiAgICAgICAgbGV0IHAxID0gdGFyZ2V0LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAwKSk7XG4gICAgICAgIGxldCBwMiA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwMSk7XG4gICAgICAgIGNjLnR3ZWVuKG5vZGUpLnRvKC4yLCB7IHg6IDAsIHk6IDAsIHNjYWxlOiAxLjEgfSkuZGVsYXkoMSkudG8oLjUsIHsgcG9zaXRpb246IHAyLCBzY2FsZTogLjUgfSwgY2MuZWFzZVNpbmVJbigpKS50byguMiwgeyBzY2FsZTogMCB9LCBjYy5lYXNlU2luZUluKCkpLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgR2xvYmFsRXZlbnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnRDaGFuZ2VUb3AoMiwgMSkpO1xuICAgICAgICB9KS5zdGFydCgpO1xuXG4gICAgfVxuXG5cblxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/game/data/PlayerInfo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c55bacUffpAV4PZsWmi2Q6F', 'PlayerInfo');
// script/game/data/PlayerInfo.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var SaveData_1 = require("../../common/SaveData");
var SaveDataConfig_1 = require("./SaveDataConfig");
var Configo = /** @class */ (function (_super) {
    __extends(Configo, _super);
    function Configo() {
        return _super.call(this, SaveDataConfig_1.SaveKey[SaveDataConfig_1.SaveKey.Player], Configo.Config) || this;
    }
    Object.defineProperty(Configo.prototype, "arr", {
        get: function () {
            return this.getValue(Configo.Config.a.key);
        },
        set: function (value) {
            this.setValue(Configo.Config.a.key, value);
        },
        enumerable: false,
        configurable: true
    });
    Configo.prototype.init = function () {
        _super.prototype.init.call(this);
    };
    /**数据配置 */
    Configo.Config = {
        // "a": new SaveNodeConfig("a", [9, 9], false),
        "a": new SaveData_1.SaveNodeConfig("a", [1, 1, 1, 1, 1, 1, 1, 1], false),
    };
    return Configo;
}(SaveData_1.default));
exports.default = Configo;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZ2FtZS9kYXRhL1BsYXllckluZm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0Esa0RBQWlFO0FBQ2pFLG1EQUEyQztBQUUzQztJQUFxQywyQkFBUTtJQWdCekM7ZUFDSSxrQkFBTSx3QkFBTyxDQUFDLHdCQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQztJQUNsRCxDQUFDO0lBVkQsc0JBQUksd0JBQUc7YUFBUDtZQUNJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUM5QyxDQUFDO2FBQ0QsVUFBUSxLQUFLO1lBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDL0MsQ0FBQzs7O09BSEE7SUFVRCxzQkFBSSxHQUFKO1FBQ0ksaUJBQU0sSUFBSSxXQUFFLENBQUM7SUFDakIsQ0FBQztJQXBCRCxVQUFVO0lBQ0ksY0FBTSxHQUFHO1FBQ25CLCtDQUErQztRQUMvQyxHQUFHLEVBQUUsSUFBSSx5QkFBYyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUM7S0FDaEUsQ0FBQTtJQWlCTCxjQUFDO0NBdkJELEFBdUJDLENBdkJvQyxrQkFBUSxHQXVCNUM7a0JBdkJvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgU2F2ZURhdGEsIHsgU2F2ZU5vZGVDb25maWcgfSBmcm9tIFwiLi4vLi4vY29tbW9uL1NhdmVEYXRhXCI7XG5pbXBvcnQgeyBTYXZlS2V5IH0gZnJvbSBcIi4vU2F2ZURhdGFDb25maWdcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uZmlnbyBleHRlbmRzIFNhdmVEYXRhIHtcblxuICAgIC8qKuaVsOaNrumFjee9riAqL1xuICAgIHB1YmxpYyBzdGF0aWMgQ29uZmlnID0ge1xuICAgICAgICAvLyBcImFcIjogbmV3IFNhdmVOb2RlQ29uZmlnKFwiYVwiLCBbOSwgOV0sIGZhbHNlKSxcbiAgICAgICAgXCJhXCI6IG5ldyBTYXZlTm9kZUNvbmZpZyhcImFcIiwgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLCBmYWxzZSksXG4gICAgfVxuXG4gICAgZ2V0IGFycigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWUoQ29uZmlnby5Db25maWcuYS5rZXkpXG4gICAgfVxuICAgIHNldCBhcnIodmFsdWUpIHtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZShDb25maWdvLkNvbmZpZy5hLmtleSwgdmFsdWUpO1xuICAgIH1cblxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKFNhdmVLZXlbU2F2ZUtleS5QbGF5ZXJdLCBDb25maWdvLkNvbmZpZyk7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgc3VwZXIuaW5pdCgpO1xuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/game/ui/bl_ball.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd74faY83gVBFq74+7t4+thB', 'bl_ball');
// script/game/ui/bl_ball.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
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
var Global_1 = require("../../common/Global");
var GlobalEvents_1 = require("../../common/GlobalEvents");
var Utils_1 = require("../../utils/Utils");
var GameUtils_1 = require("../GameUtils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var bl_ball = /** @class */ (function (_super) {
    __extends(bl_ball, _super);
    function bl_ball() {
        // LIFE-CYCLE CALLBACKS:
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lb = null;
        _this.eff = null;
        _this.THRESHOLD = 0.08;
        _this.isDestory = false;
        _this.isDrop = false;
        return _this;
    }
    bl_ball.prototype.onLoad = function () {
        this.rigidbody = this.node.getComponent(cc.RigidBody);
    };
    bl_ball.prototype.start = function () {
    };
    bl_ball.prototype.update = function (dt) {
        // if (this.isDrop && this.rigidbody) {
        //     if (Math.abs(this.rigidbody.linearVelocity.x) < this.THRESHOLD && Math.abs(this.rigidbody.linearVelocity.y) < this.THRESHOLD) {
        //         // 刚体几乎已经停止运动  
        //         GameUtils.playDrop();
        //         this.isDrop = false;
        //     }
        // }
        this.lb.angle = -this.node.angle;
    };
    bl_ball.prototype.onClick = function () {
        if (Utils_1.Utils.btnLock()) {
            return;
        }
        // GameUtils.playSoundBtnClicked();
        Global_1.GlobalEvent.dispatchEvent(new GlobalEvents_1.EventBallClick(this.id, this.rId));
    };
    bl_ball.prototype.init = function (id, isDrop) {
        this.isDrop = isDrop;
        this.id = id;
        this.rId = Utils_1.Utils.nextRandomId();
    };
    bl_ball.prototype.playHide = function (callBack) {
        var _this = this;
        this.eff.node.active = true;
        GameUtils_1.GameUtils.playCompose();
        cc.tween(this.node).delay(0).to(.1, { scale: 1.3 }).to(.1, { scale: 0 }).call(function () {
            if (callBack)
                callBack();
            _this.delete();
        }).start();
    };
    bl_ball.prototype.playShow = function () {
        // this.node.active = true;
        cc.tween(this.node).to(.1, { scale: 1 }).start();
    };
    bl_ball.prototype.removeRigidbody = function () {
        this.node.removeComponent(cc.RigidBody);
    };
    bl_ball.prototype.onDestroy = function () {
    };
    bl_ball.prototype.delete = function () {
        this.isDestory = true;
        this.node.destroy();
    };
    __decorate([
        property(cc.Node)
    ], bl_ball.prototype, "lb", void 0);
    __decorate([
        property(sp.Skeleton)
    ], bl_ball.prototype, "eff", void 0);
    bl_ball = __decorate([
        ccclass
    ], bl_ball);
    return bl_ball;
}(cc.Component));
exports.default = bl_ball;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZ2FtZS91aS9ibF9iYWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRGLDhDQUFrRDtBQUNsRCwwREFBMkQ7QUFDM0QsMkNBQTBDO0FBQzFDLDBDQUF5QztBQUVuQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFxQywyQkFBWTtJQUFqRDtRQUVJLHdCQUF3QjtRQUY1QixxRUF3RUM7UUFuRUcsUUFBRSxHQUFZLElBQUksQ0FBQztRQUVuQixTQUFHLEdBQWdCLElBQUksQ0FBQztRQUl4QixlQUFTLEdBQUcsSUFBSSxDQUFDO1FBR2pCLGVBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsWUFBTSxHQUFHLEtBQUssQ0FBQzs7SUF5RG5CLENBQUM7SUF4REcsd0JBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFDRCx1QkFBSyxHQUFMO0lBQ0EsQ0FBQztJQUVELHdCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ0wsdUNBQXVDO1FBQ3ZDLHNJQUFzSTtRQUN0SSwwQkFBMEI7UUFDMUIsZ0NBQWdDO1FBQ2hDLCtCQUErQjtRQUMvQixRQUFRO1FBQ1IsSUFBSTtRQUNKLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDckMsQ0FBQztJQUVELHlCQUFPLEdBQVA7UUFDSSxJQUFJLGFBQUssQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUNqQixPQUFPO1NBQ1Y7UUFDRCxtQ0FBbUM7UUFDbkMsb0JBQVcsQ0FBQyxhQUFhLENBQUMsSUFBSSw2QkFBYyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUVELHNCQUFJLEdBQUosVUFBSyxFQUFFLEVBQUUsTUFBTTtRQUNYLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEdBQUcsR0FBRyxhQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUVELDBCQUFRLEdBQVIsVUFBUyxRQUFRO1FBQWpCLGlCQU9DO1FBTkcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUM1QixxQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3hCLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUMxRSxJQUFJLFFBQVE7Z0JBQUUsUUFBUSxFQUFFLENBQUM7WUFDekIsS0FBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2xCLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUNELDBCQUFRLEdBQVI7UUFDSSwyQkFBMkI7UUFDM0IsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3JELENBQUM7SUFFRCxpQ0FBZSxHQUFmO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFUywyQkFBUyxHQUFuQjtJQUVBLENBQUM7SUFFRCx3QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBbEVEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7dUNBQ0M7SUFFbkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQzt3Q0FDRTtJQVBQLE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0F3RTNCO0lBQUQsY0FBQztDQXhFRCxBQXdFQyxDQXhFb0MsRUFBRSxDQUFDLFNBQVMsR0F3RWhEO2tCQXhFb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgeyBHbG9iYWxFdmVudCB9IGZyb20gXCIuLi8uLi9jb21tb24vR2xvYmFsXCI7XG5pbXBvcnQgeyBFdmVudEJhbGxDbGljayB9IGZyb20gXCIuLi8uLi9jb21tb24vR2xvYmFsRXZlbnRzXCI7XG5pbXBvcnQgeyBVdGlscyB9IGZyb20gXCIuLi8uLi91dGlscy9VdGlsc1wiO1xuaW1wb3J0IHsgR2FtZVV0aWxzIH0gZnJvbSBcIi4uL0dhbWVVdGlsc1wiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgYmxfYmFsbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGxiOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXG4gICAgZWZmOiBzcC5Ta2VsZXRvbiA9IG51bGw7XG4gICAgaWQ6IG51bWJlcjtcbiAgICBySWQ6IHN0cmluZztcblxuICAgIFRIUkVTSE9MRCA9IDAuMDg7XG4gICAgcmlnaWRib2R5OiBjYy5SaWdpZEJvZHk7XG5cbiAgICBpc0Rlc3Rvcnk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpc0Ryb3AgPSBmYWxzZTtcbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMucmlnaWRib2R5ID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xuICAgIH1cbiAgICBzdGFydCgpIHtcbiAgICB9XG5cbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgLy8gaWYgKHRoaXMuaXNEcm9wICYmIHRoaXMucmlnaWRib2R5KSB7XG4gICAgICAgIC8vICAgICBpZiAoTWF0aC5hYnModGhpcy5yaWdpZGJvZHkubGluZWFyVmVsb2NpdHkueCkgPCB0aGlzLlRIUkVTSE9MRCAmJiBNYXRoLmFicyh0aGlzLnJpZ2lkYm9keS5saW5lYXJWZWxvY2l0eS55KSA8IHRoaXMuVEhSRVNIT0xEKSB7XG4gICAgICAgIC8vICAgICAgICAgLy8g5Yia5L2T5Yeg5LmO5bey57uP5YGc5q2i6L+Q5YqoICBcbiAgICAgICAgLy8gICAgICAgICBHYW1lVXRpbHMucGxheURyb3AoKTtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmlzRHJvcCA9IGZhbHNlO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG4gICAgICAgIHRoaXMubGIuYW5nbGUgPSAtdGhpcy5ub2RlLmFuZ2xlO1xuICAgIH1cblxuICAgIG9uQ2xpY2soKSB7XG4gICAgICAgIGlmIChVdGlscy5idG5Mb2NrKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBHYW1lVXRpbHMucGxheVNvdW5kQnRuQ2xpY2tlZCgpO1xuICAgICAgICBHbG9iYWxFdmVudC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudEJhbGxDbGljayh0aGlzLmlkLCB0aGlzLnJJZCkpO1xuICAgIH1cblxuICAgIGluaXQoaWQsIGlzRHJvcCkge1xuICAgICAgICB0aGlzLmlzRHJvcCA9IGlzRHJvcDtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnJJZCA9IFV0aWxzLm5leHRSYW5kb21JZCgpO1xuICAgIH1cblxuICAgIHBsYXlIaWRlKGNhbGxCYWNrKSB7XG4gICAgICAgIHRoaXMuZWZmLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgR2FtZVV0aWxzLnBsYXlDb21wb3NlKCk7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkuZGVsYXkoMCkudG8oLjEsIHsgc2NhbGU6IDEuMyB9KS50byguMSwgeyBzY2FsZTogMCB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgIGlmIChjYWxsQmFjaykgY2FsbEJhY2soKTtcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlKCk7XG4gICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfVxuICAgIHBsYXlTaG93KCkge1xuICAgICAgICAvLyB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKS50byguMSwgeyBzY2FsZTogMSB9KS5zdGFydCgpO1xuICAgIH1cblxuICAgIHJlbW92ZVJpZ2lkYm9keSgpIHtcbiAgICAgICAgdGhpcy5ub2RlLnJlbW92ZUNvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbkRlc3Ryb3koKTogdm9pZCB7XG5cbiAgICB9XG5cbiAgICBkZWxldGUoKSB7XG4gICAgICAgIHRoaXMuaXNEZXN0b3J5ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/common/DataManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e0d7d5FTGJIwJ5DrVKvwSzx', 'DataManager');
// script/common/DataManager.ts

"use strict";
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
exports.dm = void 0;
var PlayerInfo_1 = require("../game/data/PlayerInfo");
var DataManager = /** @class */ (function () {
    function DataManager() {
        this.player = new PlayerInfo_1.default();
    }
    Object.defineProperty(DataManager, "ins", {
        get: function () {
            if (!this._ins) {
                this._ins = new DataManager();
            }
            return this._ins;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 同步初始化数据
     */
    DataManager.prototype.onInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.player.init();
                return [2 /*return*/];
            });
        });
    };
    DataManager.prototype.onLogin = function (data) {
    };
    return DataManager;
}());
exports.default = DataManager;
exports.dm = DataManager.ins;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvY29tbW9uL0RhdGFNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNEQUFpRDtBQUVqRDtJQWNDO1FBSE8sV0FBTSxHQUFlLElBQUksb0JBQVUsRUFBRSxDQUFDO0lBSzdDLENBQUM7SUFiRCxzQkFBa0Isa0JBQUc7YUFBckI7WUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDZixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7YUFDOUI7WUFDRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDbEIsQ0FBQzs7O09BQUE7SUFTRDs7T0FFRztJQUNHLDRCQUFNLEdBQVo7OztnQkFFQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDOzs7O0tBRW5CO0lBRUQsNkJBQU8sR0FBUCxVQUFRLElBQUk7SUFDWixDQUFDO0lBSUYsa0JBQUM7QUFBRCxDQS9CQSxBQStCQyxJQUFBOztBQUNZLFFBQUEsRUFBRSxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGxheWVySW5mbyBmcm9tIFwiLi4vZ2FtZS9kYXRhL1BsYXllckluZm9cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0YU1hbmFnZXIge1xuXG5cdHByaXZhdGUgc3RhdGljIF9pbnM6IERhdGFNYW5hZ2VyO1xuXHRwdWJsaWMgc3RhdGljIGdldCBpbnMoKSB7XG5cdFx0aWYgKCF0aGlzLl9pbnMpIHtcblx0XHRcdHRoaXMuX2lucyA9IG5ldyBEYXRhTWFuYWdlcigpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5faW5zO1xuXHR9XG5cblxuXHRwdWJsaWMgcGxheWVyOiBQbGF5ZXJJbmZvID0gbmV3IFBsYXllckluZm8oKTtcblxuXG5cdHByaXZhdGUgY29uc3RydWN0b3IoKSB7XG5cdFx0XG5cdH1cblx0LyoqXG5cdCAqIOWQjOatpeWIneWni+WMluaVsOaNrlxuXHQgKi9cblx0YXN5bmMgb25Jbml0KCkge1xuXG5cdFx0dGhpcy5wbGF5ZXIuaW5pdCgpO1xuXG5cdH1cblxuXHRvbkxvZ2luKGRhdGEpIHtcblx0fVxuXG5cblxufVxuZXhwb3J0IGNvbnN0IGRtID0gRGF0YU1hbmFnZXIuaW5zOyJdfQ==
//------QC-SOURCE-SPLIT------

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZ2FtZS9jb21tb24vVUlNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHlEQUFvRDtBQUNwRCxtRUFBa0U7QUFDbEUsNkNBQTRDO0FBQzVDLDJDQUEwQztBQUcxQyxJQUFZLE9BV1g7QUFYRCxXQUFZLE9BQU87SUFDZix5Q0FBVSxDQUFBO0lBQ1YsdUNBQUssQ0FBQTtJQUNMLGlEQUFVLENBQUE7SUFDVixpREFBVSxDQUFBO0lBQ1YsdUNBQUssQ0FBQTtJQUNMLHlDQUFNLENBQUE7SUFDTiwrQkFBQyxDQUFBO0lBQ0QsbUNBQUcsQ0FBQTtJQUNILHlDQUFNLENBQUE7SUFDTiwyQ0FBTyxDQUFBO0FBQ1gsQ0FBQyxFQVhXLE9BQU8sR0FBUCxlQUFPLEtBQVAsZUFBTyxRQVdsQjtBQUVEO0lBY0k7UUFGQSxpQkFBWSxHQUFpQixJQUFJLENBQUM7SUFFVixDQUFDO0lBWnpCLHNCQUFrQixnQkFBRzthQUFyQjtZQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUNaLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQzthQUMvQjtZQUNELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztRQUNyQixDQUFDOzs7T0FBQTtJQVNNLDBCQUFNLEdBQWIsVUFBYyxJQUFhLEVBQUUsWUFBMEI7UUFDbkQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7SUFDckMsQ0FBQztJQUVELDBCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVEOzs7T0FHRztJQUNJLCtCQUFXLEdBQWxCLFVBQW1CLEtBQWM7UUFDN0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBQ0Q7OztPQUdHO0lBQ0ksK0JBQVcsR0FBbEI7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QUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxzQkFBVyxrQ0FBVzthQUF0QjtZQUNJLE9BQU8sNkJBQWEsQ0FBQyxlQUFlLENBQUMsR0FBRyxHQUFHLDZCQUFhLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsR0FBRyw2QkFBYSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkksQ0FBQzs7O09BQUE7SUFFRCxtQ0FBZSxHQUFmLFVBQWdCLElBQWE7UUFDekIsSUFBSSxPQUFPLEdBQUcsNkJBQWEsQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDO1FBQ2hELElBQUksVUFBVSxHQUFHLDZCQUFhLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQztRQUN0RCxJQUFJLFlBQVksR0FBRyw2QkFBYSxDQUFDLFlBQVksQ0FBQztRQUM5QyxJQUFJLENBQUMsQ0FBQyxHQUFHLFlBQVksR0FBRyxDQUFDLEdBQUcsT0FBTyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQSxjQUFjO1FBQ25FLGVBQU0sQ0FBQyxLQUFLLENBQUMsMkNBQTJDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxlQUFlLEVBQUUsNkJBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNuSCxDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQS9JQSxBQStJQyxJQUFBOztBQUNZLFFBQUEsRUFBRSxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSHVycnlMb2FkaW5nIGZyb20gXCIuLi8uLi9jb21tb24vY29tcC9IdXJyeUxvYWRpbmdcIjtcbmltcG9ydCBQYW5lbEJhc2UgZnJvbSBcIi4uLy4uL2NvbW1vbi9jb21wL1BhbmVsQmFzZVwiO1xuaW1wb3J0IHsgR2xvYmFsRGVmaW5lcyB9IGZyb20gXCIuLi8uLi9jb21tb24vY29uc3RzL0dsb2JhbERlZmluZXNcIjtcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gXCIuLi8uLi91dGlscy9sb2dnZXJcIjtcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSBcIi4uLy4uL3V0aWxzL1V0aWxzXCI7XG5cblxuZXhwb3J0IGVudW0gVUlMYXllciB7XG4gICAgVG9wcmVzID0gMCxcbiAgICBQYW5lbCxcbiAgICBMb2FkaW5nQmFyLFxuICAgIE1lc3NhZ2VCb3gsXG4gICAgR3VpZGUsXG4gICAgQmFubmVyLFxuICAgIFgsXG4gICAgVGlwLFxuICAgIEVmZmVjdCxcbiAgICBFZmZlY3QyLFxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSU1hbmFnZXIge1xuICAgIHByaXZhdGUgc3RhdGljIF9pbnM6IFVJTWFuYWdlcjtcbiAgICBwdWJsaWMgc3RhdGljIGdldCBpbnMoKSB7XG4gICAgICAgIGlmICghdGhpcy5faW5zKSB7XG4gICAgICAgICAgICB0aGlzLl9pbnMgPSBuZXcgVUlNYW5hZ2VyKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2lucztcbiAgICB9XG5cbiAgICBwcml2YXRlIG5vZGU6IGNjLk5vZGU7XG4gICAgcHJpdmF0ZSBhbGVydDogY2MuTm9kZTtcblxuICAgIGh1cnJ5TG9hZGluZzogSHVycnlMb2FkaW5nID0gbnVsbDtcblxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIHB1YmxpYyBvbkxvYWQobm9kZTogY2MuTm9kZSwgaHVycnlMb2FkaW5nOiBIdXJyeUxvYWRpbmcpIHtcbiAgICAgICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICAgICAgdGhpcy5odXJyeUxvYWRpbmcgPSBodXJyeUxvYWRpbmc7XG4gICAgfVxuXG4gICAgb25Jbml0KCkge1xuICAgICAgICB0aGlzLmhpZGVMb2FkaW5nKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5pi+56S65Yqg6L296I+K6IqxXG4gICAgICogQHBhcmFtIHRpdGxlIFxuICAgICAqL1xuICAgIHB1YmxpYyBzaG93TG9hZGluZyh0aXRsZT86IHN0cmluZykge1xuICAgICAgICB0aGlzLmh1cnJ5TG9hZGluZy5zaG93KCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOmakOiXj+WKoOi9veiPiuiKsVxuICAgICAqIEBwYXJhbSB0aXRsZSBcbiAgICAgKi9cbiAgICBwdWJsaWMgaGlkZUxvYWRpbmcoKSB7XG4gICAgICAgIHRoaXMuaHVycnlMb2FkaW5nLmhpZGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlnKjlnLrmma/kuK3mnoTlu7pVSee7k+aehFxuICAgICAqL1xuICAgIHB1YmxpYyBjaGVja05vZGUoKSB7XG4gICAgICAgIExvZ2dlci53YXJuKFwiW1VJTWFuYWdlciBjaGVja05vZGVdIHdpZHRoOlwiLCB0aGlzLm5vZGUud2lkdGgsIFwiL2hlaWdodDpcIiwgdGhpcy5ub2RlLmhlaWdodCk7XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIFVJTGF5ZXIpIHtcbiAgICAgICAgICAgIHZhciBrZXlUb0FueTogYW55ID0ga2V5O1xuICAgICAgICAgICAgLy/liKTmlq3mmK/lkKbmmK/mlbDlrZdcbiAgICAgICAgICAgIGlmIChpc05hTihrZXlUb0FueSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZE51bGxOb2RlKHRoaXMubm9kZSwga2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgYWRkTnVsbE5vZGUoYmFzZU5vZGU6IGNjLk5vZGUsIG5vZGVOYW1lOiBzdHJpbmcpOiBjYy5Ob2RlIHtcbiAgICAgICAgaWYgKCFiYXNlTm9kZSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBbVUlNYW5hZ2VyIGFkZE51bGxOb2RlXSAke2Jhc2VOb2RlfeS4jeWtmOWcqGApO1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbm9kZSA9IGJhc2VOb2RlLmdldENoaWxkQnlOYW1lKG5vZGVOYW1lKTtcbiAgICAgICAgaWYgKCEhbm9kZSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBbVUlNYW5hZ2VyIGFkZE51bGxOb2RlXSDoioLngrkke25vZGVOYW1lfeW3sue7j+WtmOWcqGApO1xuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG5ld05vZGUgPSBuZXcgY2MuTm9kZShub2RlTmFtZSk7XG4gICAgICAgIGJhc2VOb2RlLmFkZENoaWxkKG5ld05vZGUpO1xuICAgICAgICBuZXdOb2RlLndpZHRoID0gbmV3Tm9kZS5wYXJlbnQud2lkdGg7XG4gICAgICAgIG5ld05vZGUuaGVpZ2h0ID0gbmV3Tm9kZS5wYXJlbnQuaGVpZ2h0O1xuICAgICAgICBuZXdOb2RlLnggPSAwO1xuICAgICAgICBuZXdOb2RlLnkgPSAwO1xuICAgICAgICByZXR1cm4gbmV3Tm9kZTtcbiAgICB9XG5cbiAgICBnZXRMYXllcihsYXllcklkOiBVSUxheWVyKTogY2MuTm9kZSB7XG4gICAgICAgIGxldCBuYW1lID0gVUlMYXllcltsYXllcklkXTtcbiAgICAgICAgbGV0IG5vZGUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUobmFtZSk7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRHdWlkZSh2aWV3OiBjYy5Ob2RlKSB7XG4gICAgICAgIHZpZXcueCA9IDA7XG4gICAgICAgIHZpZXcueSA9IDA7XG4gICAgICAgIHZpZXcud2lkdGggPSBHbG9iYWxEZWZpbmVzLlNjcmVlbldpZHRoO1xuICAgICAgICB2aWV3LmhlaWdodCA9IEdsb2JhbERlZmluZXMuU2NyZWVuSGVpZ2h0O1xuICAgICAgICB0aGlzLmdldExheWVyKFVJTGF5ZXIuR3VpZGUpLmFkZENoaWxkKHZpZXcpO1xuICAgIH1cblxuICAgIHB1YmxpYyBwb3BWaWV3KHZpZXc6IGNjLk5vZGUsIGluc2VydDogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIHZpZXcueCA9IDA7XG4gICAgICAgIHZpZXcueSA9IDA7XG4gICAgICAgIHZpZXcud2lkdGggPSBHbG9iYWxEZWZpbmVzLlNjcmVlbldpZHRoO1xuICAgICAgICB2aWV3LmhlaWdodCA9IEdsb2JhbERlZmluZXMuU2NyZWVuSGVpZ2h0O1xuICAgICAgICBpZiAoaW5zZXJ0KSB7XG4gICAgICAgICAgICB0aGlzLmdldExheWVyKFVJTGF5ZXIuUGFuZWwpLmluc2VydENoaWxkKHZpZXcsIDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmlldy5wYXJlbnQgPSB0aGlzLmdldExheWVyKFVJTGF5ZXIuUGFuZWwpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBwdWJsaWMgdGlwKG5vZGU6IGNjLk5vZGUpIHtcbiAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLmdldExheWVyKFVJTGF5ZXIuVGlwKVxuICAgIH1cblxuICAgIHB1YmxpYyBsYXllckNsZWFyKGxheWVySWQ6IFVJTGF5ZXIpIHtcbiAgICAgICAgVXRpbHMucmVtb3ZlQWxsQ2hpbGRyZW4odGhpcy5nZXRMYXllcihsYXllcklkKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGFkZEVmZmVjdChlZmZlY3Q6IGNjLk5vZGUpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0TGF5ZXIoVUlMYXllci5FZmZlY3QpLmNoaWxkcmVuQ291bnQgPj0gMjAwKSB7XG4gICAgICAgICAgICBVdGlscy5yZW1vdmVOb2RlKHRoaXMuZ2V0TGF5ZXIoVUlMYXllci5FZmZlY3QpLmNoaWxkcmVuWzBdKTtcbiAgICAgICAgfVxuICAgICAgICBlZmZlY3QucGFyZW50ID0gdGhpcy5nZXRMYXllcihVSUxheWVyLkVmZmVjdCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog57qm5a6aZWZmZWN0LnBvc3Rpb27kuLp3b3JsZEFS5bqn5qCHXG4gICAgICogQHBhcmFtIGVmZmVjdEJ5V29ybGRBUiBcbiAgICAgKi9cbiAgICBwdWJsaWMgYWRkRWZmZWN0QVIoZWZmZWN0QnlXb3JsZEFSOiBjYy5Ob2RlKSB7XG4gICAgICAgIGxldCBwb3NPZkVmZmVjdCA9IHRoaXMuZ2V0TGF5ZXIoVUlMYXllci5FZmZlY3QpLmNvbnZlcnRUb05vZGVTcGFjZUFSKGVmZmVjdEJ5V29ybGRBUi5wb3NpdGlvbik7XG4gICAgICAgIGVmZmVjdEJ5V29ybGRBUi5wb3NpdGlvbiA9IHBvc09mRWZmZWN0O1xuICAgICAgICB0aGlzLmFkZEVmZmVjdChlZmZlY3RCeVdvcmxkQVIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvblN3aXRjaFNjZW5lKCkge1xuICAgICAgICBQYW5lbEJhc2Uub25Td2l0Y2hTY2VuZSgpO1xuICAgICAgICB0aGlzLmxheWVyQ2xlYXIoVUlMYXllci5QYW5lbCk7XG4gICAgICAgIHRoaXMubGF5ZXJDbGVhcihVSUxheWVyLlRpcCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBzYWZlQXJlYVRvcCgpIHtcbiAgICAgICAgcmV0dXJuIEdsb2JhbERlZmluZXMuTWVudUJ1dHRvbkxvZ2ljLnRvcCArIEdsb2JhbERlZmluZXMuTWVudUJ1dHRvbkxvZ2ljLmhlaWdodCArICgxMDAgLSBHbG9iYWxEZWZpbmVzLk1lbnVCdXR0b25Mb2dpYy5oZWlnaHQpIC8gMjtcbiAgICB9XG5cbiAgICBhbGlnbm1lbnRUb01lbnUobm9kZTogY2MuTm9kZSkge1xuICAgICAgICBsZXQgbWVudVRvcCA9IEdsb2JhbERlZmluZXMuTWVudUJ1dHRvbkxvZ2ljLnRvcDtcbiAgICAgICAgbGV0IG1lbnVIZWlnaHQgPSBHbG9iYWxEZWZpbmVzLk1lbnVCdXR0b25Mb2dpYy5oZWlnaHQ7XG4gICAgICAgIGxldCBzY3JlZW5IZWlnaHQgPSBHbG9iYWxEZWZpbmVzLlNjcmVlbkhlaWdodDtcbiAgICAgICAgbm9kZS55ID0gc2NyZWVuSGVpZ2h0IC8gMiAtIG1lbnVUb3AgLSBtZW51SGVpZ2h0IC8gMjsvL+S4reW/g+S4juiDtuWbiuS4reW/g+Wvuem9kCAgIFxuICAgICAgICBMb2dnZXIuZGVidWcoXCJbQmF0dGxlT3B0aW9uV29yZCBhbGlnbm1lbnRUb01lbnVdIGJhci55OlwiLCBub2RlLnksIFwiU2NyZWVuSGVpZ2h0OlwiLCBHbG9iYWxEZWZpbmVzLlNjcmVlbkhlaWdodCk7XG4gICAgfVxufVxuZXhwb3J0IGNvbnN0IHVpID0gVUlNYW5hZ2VyLmluczsiXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/game/ui/bl_txPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3e5fc4h2hlDc7L1lICiHdKz', 'bl_txPanel');
// script/game/ui/bl_txPanel.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
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
var PanelBase_1 = require("../../common/comp/PanelBase");
var GameUtils_1 = require("../GameUtils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var bl_txPanel = /** @class */ (function (_super) {
    __extends(bl_txPanel, _super);
    function bl_txPanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lb_num = null;
        _this.lb_tipsNum = null;
        _this.pro = null;
        _this.toggle_content = null;
        _this.ui_tips1 = null;
        _this.rich1 = null;
        _this.rich2 = null;
        _this.ui_tips2 = null;
        _this.rich3 = null;
        _this.rich4 = null;
        _this.rich5 = null;
        _this.ui_tips3 = null;
        _this.rich6 = null;
        _this.rich7 = null;
        // LIFE-CYCLE CALLBACKS:
        _this.currIndex = 0;
        return _this;
        // update (dt) {}
    }
    bl_txPanel.Show = function () {
        return __awaiter(this, void 0, void 0, function () {
            var insNode;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, PanelBase_1.default.ShowPanel(this.Prefab_Name)];
                    case 1:
                        insNode = _a.sent();
                        if (!insNode) {
                            return [2 /*return*/];
                        }
                        GameUtils_1.GameUtils.popView(insNode);
                        return [2 /*return*/];
                }
            });
        });
    };
    bl_txPanel.prototype.onLoad = function () {
        this.init();
    };
    bl_txPanel.prototype.init = function () {
        // this.showList = bc.drawData.showList;
        // for (let i = 0; i < this.toggle_content.childrenCount; i++) {
        //     let node = this.toggle_content.children[i];
        //     let toggle = node.addComponent(WithdrawalToggle);
        //     toggle.init(this.showList[i]);
        // }
        // this.lb_num.string = bc.moneyAbbr + bc.drawData.nowBalShow;
        this.kiIU_refreshUI();
    };
    bl_txPanel.prototype.onEnable = function () {
    };
    bl_txPanel.prototype.onDisable = function () {
    };
    bl_txPanel.prototype.kiIU_refreshUI = function () {
        this.reset();
        // this.currData = this.showList[this.currIndex];
        // let now = parseFloat(bc.drawData.nowBalShow)
        // let curr = parseFloat(this.currData.drawBal)
        // if (now < curr) {
        //     this.ui_tips1.active = true;
        //     this.pro.progress = now / curr;
        //     this.lb_tipsNum.string = bc.moneyAbbr + curr;
        //     this.rich1.getComponent(LocalizedLabel).key = "condition1";
        //     this.rich1.getComponent(LocalizedLabel).fetchRender();
        //     this.rich2.getComponent(LocalizedLabel).key = "current1";
        //     this.rich2.getComponent(LocalizedLabel).fetchRender();
        //     this.scheduleOnce(() => {
        //         this.kiIU_changeRich1();
        //     }, .1)
        // } else {
        //     let nowDay = Number(bc.drawData.nowLogDays)
        //     let currDay = Number(this.currData.needDays)
        //     if (nowDay < currDay) {
        //         this.ui_tips2.active = true;
        //         this.rich3.getComponent(LocalizedLabel).key = "condition2";
        //         this.rich3.getComponent(LocalizedLabel).fetchRender();
        //         this.rich4.getComponent(LocalizedLabel).key = "current2";
        //         this.rich4.getComponent(LocalizedLabel).fetchRender();
        //         this.rich5.getComponent(LocalizedLabel).key = "xc";
        //         this.rich5.getComponent(LocalizedLabel).fetchRender();
        //         this.scheduleOnce(() => {
        //             this.kiIU_changeRich2();
        //         }, .1)
        //         // this.pro.progress = nowDay / currDay;
        //     } else {
        //         let nowLv = Number(bc.drawData.nowLevel)
        //         let currLv = Number(this.currData.needLevel)
        //         if (nowLv < currLv) {
        //             this.ui_tips3.active = true;
        //             this.rich6.getComponent(LocalizedLabel).key = "condition3";
        //             this.rich6.getComponent(LocalizedLabel).fetchRender();
        //             this.rich7.getComponent(LocalizedLabel).key = "current3";
        //             this.rich7.getComponent(LocalizedLabel).fetchRender();
        //             this.scheduleOnce(() => {
        //                 this.kiIU_changeRich3();
        //             }, .1)
        //             this.pro.progress = nowLv / currLv;
        //         }
        //     }
        // }
    };
    bl_txPanel.prototype.onToggle = function (evt) {
        this.rich1.string = "";
        this.rich2.string = "";
        var toggleName = evt.node.name;
        this.currIndex = Number(toggleName) - 1;
        this.kiIU_refreshUI();
    };
    bl_txPanel.prototype.kiIU_onBtnTx = function () {
        // if (dm.player.isFirstTx) {
        //     SDKManager.kiIU_gohpVcbaclok();
        //     dm.player.isFirstTx = 0;
        // } else {
        //     let cfg = GameManager.instance.config;
        //     let tips = ""
        //     if (bc.country == "2") {
        //         tips = cfg.json.language['pt'].tips2;
        //     } else if (bc.country == "13") {
        //         tips = cfg.json.language['in'].tips2;
        //     } else {
        //         tips = cfg.json.language['en'].tips2;
        //     }
        //     GameUtils.showToast(tips);
        // }
    };
    bl_txPanel.prototype.kiIU_changeRich1 = function () {
        // let now = Number(bc.drawData.nowBalShow)
        // let curr = Number(this.currData.drawBal)
        // let str1 = this.rich1.string;
        // str1 = str1.replace(/\$/g, bc.moneyAbbr)
        // str1 = str1.replace(/\!/g, this.currData.drawBal)
        // this.rich1.string = str1;
        // let str2 = this.rich2.string;
        // str2 = str2.replace(/\$/g, bc.moneyAbbr)
        // str2 = str2.replace(/\!/g, bc.drawData.nowBalShow)
        // str2 = str2.replace(/\*/g, (curr - now).toFixed(2))
        // this.rich2.string = str2;
    };
    bl_txPanel.prototype.kiIU_changeRich2 = function () {
        // let now = Number(bc.drawData.nowLogDays)
        // let curr = Number(this.currData.needDays)
        // let str1 = this.rich3.string;
        // str1 = str1.replace(/\!/g, this.currData.needDays + "")
        // str1 = str1.replace(/\*/g, bc.drawData.actCountCfg + "")
        // this.rich3.string = str1;
        // let str2 = this.rich4.string;
        // str2 = str2.replace(/\!/g, bc.drawData.nowLogDays + "")
        // this.rich4.string = str2;
        // let str3 = this.rich5.string;
        // str3 = str3.replace(/\!/g, bc.drawData.todayGates + "")
        // this.rich5.string = str3;
    };
    bl_txPanel.prototype.kiIU_changeRich3 = function () {
        // let now = Number(bc.drawData.nowLevel)
        // let curr = Number(this.currData.needLevel)
        // let str1 = this.rich6.string;
        // str1 = str1.replace(/\!/g, this.currData.needLevel + "")
        // this.rich6.string = str1;
        // let str2 = this.rich7.string;
        // str2 = str2.replace(/\!/g, bc.drawData.nowLevel + "")
        // str2 = str2.replace(/\*/g, (curr - now) + "")
        // this.rich7.string = str2;
    };
    bl_txPanel.prototype.reset = function () {
        this.ui_tips1.active = false;
        this.ui_tips2.active = false;
        this.ui_tips3.active = false;
    };
    bl_txPanel.Prefab_Name = "prefab/game/ui/bl_txPanel";
    __decorate([
        property(cc.Label)
    ], bl_txPanel.prototype, "lb_num", void 0);
    __decorate([
        property(cc.Label)
    ], bl_txPanel.prototype, "lb_tipsNum", void 0);
    __decorate([
        property(cc.ProgressBar)
    ], bl_txPanel.prototype, "pro", void 0);
    __decorate([
        property(cc.Node)
    ], bl_txPanel.prototype, "toggle_content", void 0);
    __decorate([
        property(cc.Node)
    ], bl_txPanel.prototype, "ui_tips1", void 0);
    __decorate([
        property(cc.RichText)
    ], bl_txPanel.prototype, "rich1", void 0);
    __decorate([
        property(cc.RichText)
    ], bl_txPanel.prototype, "rich2", void 0);
    __decorate([
        property(cc.Node)
    ], bl_txPanel.prototype, "ui_tips2", void 0);
    __decorate([
        property(cc.RichText)
    ], bl_txPanel.prototype, "rich3", void 0);
    __decorate([
        property(cc.RichText)
    ], bl_txPanel.prototype, "rich4", void 0);
    __decorate([
        property(cc.RichText)
    ], bl_txPanel.prototype, "rich5", void 0);
    __decorate([
        property(cc.Node)
    ], bl_txPanel.prototype, "ui_tips3", void 0);
    __decorate([
        property(cc.RichText)
    ], bl_txPanel.prototype, "rich6", void 0);
    __decorate([
        property(cc.RichText)
    ], bl_txPanel.prototype, "rich7", void 0);
    bl_txPanel = __decorate([
        ccclass
    ], bl_txPanel);
    return bl_txPanel;
}(PanelBase_1.default));
exports.default = bl_txPanel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZ2FtZS91aS9ibF90eFBhbmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3RGLHlEQUFvRDtBQUdwRCwwQ0FBeUM7QUFJbkMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUF3QjVDO0lBQXdDLDhCQUFTO0lBQWpEO1FBQUEscUVBbU5DO1FBdk1HLFlBQU0sR0FBYSxJQUFJLENBQUM7UUFFeEIsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFHNUIsU0FBRyxHQUFtQixJQUFJLENBQUM7UUFFM0Isb0JBQWMsR0FBWSxJQUFJLENBQUM7UUFHL0IsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixXQUFLLEdBQWdCLElBQUksQ0FBQztRQUUxQixXQUFLLEdBQWdCLElBQUksQ0FBQztRQUcxQixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLFdBQUssR0FBZ0IsSUFBSSxDQUFDO1FBRTFCLFdBQUssR0FBZ0IsSUFBSSxDQUFDO1FBRTFCLFdBQUssR0FBZ0IsSUFBSSxDQUFDO1FBRzFCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsV0FBSyxHQUFnQixJQUFJLENBQUM7UUFFMUIsV0FBSyxHQUFnQixJQUFJLENBQUM7UUFHMUIsd0JBQXdCO1FBQ3hCLGVBQVMsR0FBRyxDQUFDLENBQUM7O1FBb0tkLGlCQUFpQjtJQUNyQixDQUFDO0lBaE51QixlQUFJLEdBQXhCOzs7Ozs0QkFDMkIscUJBQU0sbUJBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFBOzt3QkFBOUQsT0FBTyxH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QUFFLENBQUMsSUFBSSxDQUFDO2dEQUNPO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7NkNBQ0k7SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQzs2Q0FDSTtJQTFDVCxVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBbU45QjtJQUFELGlCQUFDO0NBbk5ELEFBbU5DLENBbk51QyxtQkFBUyxHQW1OaEQ7a0JBbk5vQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBCYXNlUGFuZWwgZnJvbSBcIi4uLy4uL2NvbW1vbi9CYXNlUGFuZWxcIjtcbmltcG9ydCB7IGRtIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9EYXRhTWFuYWdlclwiO1xuaW1wb3J0IHsgR2xvYmFsRXZlbnQgfSBmcm9tIFwiLi4vLi4vY29tbW9uL0dsb2JhbFwiO1xuaW1wb3J0IFBhbmVsQmFzZSBmcm9tIFwiLi4vLi4vY29tbW9uL2NvbXAvUGFuZWxCYXNlXCI7XG5pbXBvcnQgeyBMb2NhbGl6ZWRMYWJlbCB9IGZyb20gXCIuLi8uLi9sYW5nL0xvY2FsaXplZExhYmVsXCI7XG5pbXBvcnQgU0RLTWFuYWdlciBmcm9tIFwiLi4vLi4vdXRpbHMvU0RLTWFuYWdlclwiO1xuaW1wb3J0IHsgR2FtZVV0aWxzIH0gZnJvbSBcIi4uL0dhbWVVdGlsc1wiO1xuaW1wb3J0IHsgYmMgfSBmcm9tIFwiLi9ibF9Db25maWdcIjtcbmltcG9ydCBXaXRoZHJhd2FsVG9nZ2xlIGZyb20gXCIuL2JsX3R4VG9nZ2xlXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbmV4cG9ydCB0eXBlIHR4X2NmZyA9IHtcbiAgICBub3dMb2dEYXlzOiBudW1iZXI7Ly/lvZPliY3nmbvlvZXlpKnmlbBcbiAgICBub3dMZXZlbDogbnVtYmVyOy8v5b2T5YmN562J57qnXG4gICAgdG9kYXlHYXRlczogbnVtYmVyOy8v5LuK5aSp5raI6Zmk5qyh5pWwXG4gICAgbm93QmFsU2hvdzogc3RyaW5nOy8v5b2T5YmN5L2Z6aKdXG4gICAgYWN0Q291bnRDZmc6IG51bWJlcjsvL+eUqOS6juiuoeeul+W9k+WkqeWujOaIkOWkmuWwkea2iOmZpOaJjeeulzHlpKlcbiAgICBuZXh0THZDb3VudDogbnVtYmVyOy8v5LiL5LiA562J57qn6ZyA6KaB6L6+5Yiw55qE5oC75pWwXG4gICAgc2hvd0xpc3Q6IHR4X2xpc3RbXVxuXG59XG5cbmV4cG9ydCB0eXBlIHR4X2xpc3QgPSB7XG4gICAgaWQ6IG51bWJlci8v5o+Q546w5a+55bqUSURcbiAgICBkcmF3QmFsOiBzdHJpbmcgLy8g5o+Q546w55uu5qCHXG4gICAgbmVlZEJhbDogc3RyaW5nIC8vIOmcgOimgei+vuWIsOeahOS9meminVxuICAgIG5ld2VyVGFnOiBudW1iZXIgLy8g5piv5ZCm5piv5paw5Lq65o+Q546w77yMMeaYryAy5YW25a6D5o+Q546wXG4gICAgbGVmdDogbnVtYmVyLy/liankvZnlj6/mj5DnjrDmrKHmlbBcbiAgICBuZWVkRGF5czogbnVtYmVyLy/pnIDopoHovr7liLDnmoTnmbvlvZXlpKnmlbBcbiAgICBuZWVkTGV2ZWw6IG51bWJlci8v6ZyA6KaB6L6+5Yiw55qE562J57qnXG59XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBibF90eFBhbmVsIGV4dGVuZHMgUGFuZWxCYXNlIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgUHJlZmFiX05hbWUgPSBcInByZWZhYi9nYW1lL3VpL2JsX3R4UGFuZWxcIjtcbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIFNob3coKSB7XG4gICAgICAgIGxldCBpbnNOb2RlOiBjYy5Ob2RlID0gYXdhaXQgUGFuZWxCYXNlLlNob3dQYW5lbCh0aGlzLlByZWZhYl9OYW1lKTtcbiAgICAgICAgaWYgKCFpbnNOb2RlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgR2FtZVV0aWxzLnBvcFZpZXcoaW5zTm9kZSk7XG4gICAgfVxuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiX251bTogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYl90aXBzTnVtOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJvZ3Jlc3NCYXIpXG4gICAgcHJvOiBjYy5Qcm9ncmVzc0JhciA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgdG9nZ2xlX2NvbnRlbnQ6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgdWlfdGlwczE6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5SaWNoVGV4dClcbiAgICByaWNoMTogY2MuUmljaFRleHQgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5SaWNoVGV4dClcbiAgICByaWNoMjogY2MuUmljaFRleHQgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgdWlfdGlwczI6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5SaWNoVGV4dClcbiAgICByaWNoMzogY2MuUmljaFRleHQgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5SaWNoVGV4dClcbiAgICByaWNoNDogY2MuUmljaFRleHQgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5SaWNoVGV4dClcbiAgICByaWNoNTogY2MuUmljaFRleHQgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgdWlfdGlwczM6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5SaWNoVGV4dClcbiAgICByaWNoNjogY2MuUmljaFRleHQgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5SaWNoVGV4dClcbiAgICByaWNoNzogY2MuUmljaFRleHQgPSBudWxsO1xuXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcbiAgICBjdXJySW5kZXggPSAwO1xuXG4gICAgc2hvd0xpc3Q6IHR4X2xpc3RbXTtcbiAgICBjdXJyRGF0YTogdHhfbGlzdDtcbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIC8vIHRoaXMuc2hvd0xpc3QgPSBiYy5kcmF3RGF0YS5zaG93TGlzdDtcbiAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRvZ2dsZV9jb250ZW50LmNoaWxkcmVuQ291bnQ7IGkrKykge1xuICAgICAgICAvLyAgICAgbGV0IG5vZGUgPSB0aGlzLnRvZ2dsZV9jb250ZW50LmNoaWxkcmVuW2ldO1xuICAgICAgICAvLyAgICAgbGV0IHRvZ2dsZSA9IG5vZGUuYWRkQ29tcG9uZW50KFdpdGhkcmF3YWxUb2dnbGUpO1xuICAgICAgICAvLyAgICAgdG9nZ2xlLmluaXQodGhpcy5zaG93TGlzdFtpXSk7XG4gICAgICAgIC8vIH1cblxuICAgICAgICAvLyB0aGlzLmxiX251bS5zdHJpbmcgPSBiYy5tb25leUFiYnIgKyBiYy5kcmF3RGF0YS5ub3dCYWxTaG93O1xuICAgICAgICB0aGlzLmtpSVVfcmVmcmVzaFVJKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uRW5hYmxlKCk6IHZvaWQge1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgb25EaXNhYmxlKCk6IHZvaWQge1xuXG4gICAgfVxuXG4gICAga2lJVV9yZWZyZXNoVUkoKSB7XG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgLy8gdGhpcy5jdXJyRGF0YSA9IHRoaXMuc2hvd0xpc3RbdGhpcy5jdXJySW5kZXhdO1xuICAgICAgICAvLyBsZXQgbm93ID0gcGFyc2VGbG9hdChiYy5kcmF3RGF0YS5ub3dCYWxTaG93KVxuICAgICAgICAvLyBsZXQgY3VyciA9IHBhcnNlRmxvYXQodGhpcy5jdXJyRGF0YS5kcmF3QmFsKVxuICAgICAgICAvLyBpZiAobm93IDwgY3Vycikge1xuICAgICAgICAvLyAgICAgdGhpcy51aV90aXBzMS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAvLyAgICAgdGhpcy5wcm8ucHJvZ3Jlc3MgPSBub3cgLyBjdXJyO1xuICAgICAgICAvLyAgICAgdGhpcy5sYl90aXBzTnVtLnN0cmluZyA9IGJjLm1vbmV5QWJiciArIGN1cnI7XG4gICAgICAgIC8vICAgICB0aGlzLnJpY2gxLmdldENvbXBvbmVudChMb2NhbGl6ZWRMYWJlbCkua2V5ID0gXCJjb25kaXRpb24xXCI7XG4gICAgICAgIC8vICAgICB0aGlzLnJpY2gxLmdldENvbXBvbmVudChMb2NhbGl6ZWRMYWJlbCkuZmV0Y2hSZW5kZXIoKTtcbiAgICAgICAgLy8gICAgIHRoaXMucmljaDIuZ2V0Q29tcG9uZW50KExvY2FsaXplZExhYmVsKS5rZXkgPSBcImN1cnJlbnQxXCI7XG4gICAgICAgIC8vICAgICB0aGlzLnJpY2gyLmdldENvbXBvbmVudChMb2NhbGl6ZWRMYWJlbCkuZmV0Y2hSZW5kZXIoKTtcbiAgICAgICAgLy8gICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmtpSVVfY2hhbmdlUmljaDEoKTtcbiAgICAgICAgLy8gICAgIH0sIC4xKVxuICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgbGV0IG5vd0RheSA9IE51bWJlcihiYy5kcmF3RGF0YS5ub3dMb2dEYXlzKVxuICAgICAgICAvLyAgICAgbGV0IGN1cnJEYXkgPSBOdW1iZXIodGhpcy5jdXJyRGF0YS5uZWVkRGF5cylcbiAgICAgICAgLy8gICAgIGlmIChub3dEYXkgPCBjdXJyRGF5KSB7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy51aV90aXBzMi5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMucmljaDMuZ2V0Q29tcG9uZW50KExvY2FsaXplZExhYmVsKS5rZXkgPSBcImNvbmRpdGlvbjJcIjtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnJpY2gzLmdldENvbXBvbmVudChMb2NhbGl6ZWRMYWJlbCkuZmV0Y2hSZW5kZXIoKTtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnJpY2g0LmdldENvbXBvbmVudChMb2NhbGl6ZWRMYWJlbCkua2V5ID0gXCJjdXJyZW50MlwiO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMucmljaDQuZ2V0Q29tcG9uZW50KExvY2FsaXplZExhYmVsKS5mZXRjaFJlbmRlcigpO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMucmljaDUuZ2V0Q29tcG9uZW50KExvY2FsaXplZExhYmVsKS5rZXkgPSBcInhjXCI7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5yaWNoNS5nZXRDb21wb25lbnQoTG9jYWxpemVkTGFiZWwpLmZldGNoUmVuZGVyKCk7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLmtpSVVfY2hhbmdlUmljaDIoKTtcbiAgICAgICAgLy8gICAgICAgICB9LCAuMSlcbiAgICAgICAgLy8gICAgICAgICAvLyB0aGlzLnByby5wcm9ncmVzcyA9IG5vd0RheSAvIGN1cnJEYXk7XG4gICAgICAgIC8vICAgICB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgICAgIGxldCBub3dMdiA9IE51bWJlcihiYy5kcmF3RGF0YS5ub3dMZXZlbClcbiAgICAgICAgLy8gICAgICAgICBsZXQgY3Vyckx2ID0gTnVtYmVyKHRoaXMuY3VyckRhdGEubmVlZExldmVsKVxuXG4gICAgICAgIC8vICAgICAgICAgaWYgKG5vd0x2IDwgY3Vyckx2KSB7XG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMudWlfdGlwczMuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5yaWNoNi5nZXRDb21wb25lbnQoTG9jYWxpemVkTGFiZWwpLmtleSA9IFwiY29uZGl0aW9uM1wiO1xuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLnJpY2g2LmdldENvbXBvbmVudChMb2NhbGl6ZWRMYWJlbCkuZmV0Y2hSZW5kZXIoKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5yaWNoNy5nZXRDb21wb25lbnQoTG9jYWxpemVkTGFiZWwpLmtleSA9IFwiY3VycmVudDNcIjtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5yaWNoNy5nZXRDb21wb25lbnQoTG9jYWxpemVkTGFiZWwpLmZldGNoUmVuZGVyKCk7XG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRoaXMua2lJVV9jaGFuZ2VSaWNoMygpO1xuICAgICAgICAvLyAgICAgICAgICAgICB9LCAuMSlcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5wcm8ucHJvZ3Jlc3MgPSBub3dMdiAvIGN1cnJMdjtcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cblxuICAgIH1cblxuICAgIG9uVG9nZ2xlKGV2dDogY2MuVG9nZ2xlKSB7XG4gICAgICAgIHRoaXMucmljaDEuc3RyaW5nID0gXCJcIjtcbiAgICAgICAgdGhpcy5yaWNoMi5zdHJpbmcgPSBcIlwiO1xuICAgICAgICBsZXQgdG9nZ2xlTmFtZSA9IGV2dC5ub2RlLm5hbWU7XG4gICAgICAgIHRoaXMuY3VyckluZGV4ID0gTnVtYmVyKHRvZ2dsZU5hbWUpIC0gMTtcbiAgICAgICAgdGhpcy5raUlVX3JlZnJlc2hVSSgpO1xuICAgIH1cblxuICAgIGtpSVVfb25CdG5UeCgpIHtcbiAgICAgICAgLy8gaWYgKGRtLnBsYXllci5pc0ZpcnN0VHgpIHtcbiAgICAgICAgLy8gICAgIFNES01hbmFnZXIua2lJVV9nb2hwVmNiYWNsb2soKTtcbiAgICAgICAgLy8gICAgIGRtLnBsYXllci5pc0ZpcnN0VHggPSAwO1xuICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgbGV0IGNmZyA9IEdhbWVNYW5hZ2VyLmluc3RhbmNlLmNvbmZpZztcbiAgICAgICAgLy8gICAgIGxldCB0aXBzID0gXCJcIlxuXG4gICAgICAgIC8vICAgICBpZiAoYmMuY291bnRyeSA9PSBcIjJcIikge1xuXG4gICAgICAgIC8vICAgICAgICAgdGlwcyA9IGNmZy5qc29uLmxhbmd1YWdlWydwdCddLnRpcHMyO1xuICAgICAgICAvLyAgICAgfSBlbHNlIGlmIChiYy5jb3VudHJ5ID09IFwiMTNcIikge1xuICAgICAgICAvLyAgICAgICAgIHRpcHMgPSBjZmcuanNvbi5sYW5ndWFnZVsnaW4nXS50aXBzMjtcbiAgICAgICAgLy8gICAgIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICAgICAgdGlwcyA9IGNmZy5qc29uLmxhbmd1YWdlWydlbiddLnRpcHMyO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyAgICAgR2FtZVV0aWxzLnNob3dUb2FzdCh0aXBzKTtcbiAgICAgICAgLy8gfVxuICAgIH1cblxuICAgIGtpSVVfY2hhbmdlUmljaDEoKSB7XG4gICAgICAgIC8vIGxldCBub3cgPSBOdW1iZXIoYmMuZHJhd0RhdGEubm93QmFsU2hvdylcbiAgICAgICAgLy8gbGV0IGN1cnIgPSBOdW1iZXIodGhpcy5jdXJyRGF0YS5kcmF3QmFsKVxuXG5cbiAgICAgICAgLy8gbGV0IHN0cjEgPSB0aGlzLnJpY2gxLnN0cmluZztcbiAgICAgICAgLy8gc3RyMSA9IHN0cjEucmVwbGFjZSgvXFwkL2csIGJjLm1vbmV5QWJicilcbiAgICAgICAgLy8gc3RyMSA9IHN0cjEucmVwbGFjZSgvXFwhL2csIHRoaXMuY3VyckRhdGEuZHJhd0JhbClcblxuICAgICAgICAvLyB0aGlzLnJpY2gxLnN0cmluZyA9IHN0cjE7XG5cbiAgICAgICAgLy8gbGV0IHN0cjIgPSB0aGlzLnJpY2gyLnN0cmluZztcbiAgICAgICAgLy8gc3RyMiA9IHN0cjIucmVwbGFjZSgvXFwkL2csIGJjLm1vbmV5QWJicilcbiAgICAgICAgLy8gc3RyMiA9IHN0cjIucmVwbGFjZSgvXFwhL2csIGJjLmRyYXdEYXRhLm5vd0JhbFNob3cpXG4gICAgICAgIC8vIHN0cjIgPSBzdHIyLnJlcGxhY2UoL1xcKi9nLCAoY3VyciAtIG5vdykudG9GaXhlZCgyKSlcbiAgICAgICAgLy8gdGhpcy5yaWNoMi5zdHJpbmcgPSBzdHIyO1xuICAgIH1cbiAgICBraUlVX2NoYW5nZVJpY2gyKCkge1xuICAgICAgICAvLyBsZXQgbm93ID0gTnVtYmVyKGJjLmRyYXdEYXRhLm5vd0xvZ0RheXMpXG4gICAgICAgIC8vIGxldCBjdXJyID0gTnVtYmVyKHRoaXMuY3VyckRhdGEubmVlZERheXMpXG5cblxuICAgICAgICAvLyBsZXQgc3RyMSA9IHRoaXMucmljaDMuc3RyaW5nO1xuICAgICAgICAvLyBzdHIxID0gc3RyMS5yZXBsYWNlKC9cXCEvZywgdGhpcy5jdXJyRGF0YS5uZWVkRGF5cyArIFwiXCIpXG4gICAgICAgIC8vIHN0cjEgPSBzdHIxLnJlcGxhY2UoL1xcKi9nLCBiYy5kcmF3RGF0YS5hY3RDb3VudENmZyArIFwiXCIpXG5cbiAgICAgICAgLy8gdGhpcy5yaWNoMy5zdHJpbmcgPSBzdHIxO1xuXG4gICAgICAgIC8vIGxldCBzdHIyID0gdGhpcy5yaWNoNC5zdHJpbmc7XG4gICAgICAgIC8vIHN0cjIgPSBzdHIyLnJlcGxhY2UoL1xcIS9nLCBiYy5kcmF3RGF0YS5ub3dMb2dEYXlzICsgXCJcIilcbiAgICAgICAgLy8gdGhpcy5yaWNoNC5zdHJpbmcgPSBzdHIyO1xuXG4gICAgICAgIC8vIGxldCBzdHIzID0gdGhpcy5yaWNoNS5zdHJpbmc7XG4gICAgICAgIC8vIHN0cjMgPSBzdHIzLnJlcGxhY2UoL1xcIS9nLCBiYy5kcmF3RGF0YS50b2RheUdhdGVzICsgXCJcIilcbiAgICAgICAgLy8gdGhpcy5yaWNoNS5zdHJpbmcgPSBzdHIzO1xuICAgIH1cbiAgICBraUlVX2NoYW5nZVJpY2gzKCkge1xuICAgICAgICAvLyBsZXQgbm93ID0gTnVtYmVyKGJjLmRyYXdEYXRhLm5vd0xldmVsKVxuICAgICAgICAvLyBsZXQgY3VyciA9IE51bWJlcih0aGlzLmN1cnJEYXRhLm5lZWRMZXZlbClcblxuXG4gICAgICAgIC8vIGxldCBzdHIxID0gdGhpcy5yaWNoNi5zdHJpbmc7XG4gICAgICAgIC8vIHN0cjEgPSBzdHIxLnJlcGxhY2UoL1xcIS9nLCB0aGlzLmN1cnJEYXRhLm5lZWRMZXZlbCArIFwiXCIpXG5cbiAgICAgICAgLy8gdGhpcy5yaWNoNi5zdHJpbmcgPSBzdHIxO1xuXG4gICAgICAgIC8vIGxldCBzdHIyID0gdGhpcy5yaWNoNy5zdHJpbmc7XG4gICAgICAgIC8vIHN0cjIgPSBzdHIyLnJlcGxhY2UoL1xcIS9nLCBiYy5kcmF3RGF0YS5ub3dMZXZlbCArIFwiXCIpXG4gICAgICAgIC8vIHN0cjIgPSBzdHIyLnJlcGxhY2UoL1xcKi9nLCAoY3VyciAtIG5vdykgKyBcIlwiKVxuICAgICAgICAvLyB0aGlzLnJpY2g3LnN0cmluZyA9IHN0cjI7XG4gICAgfVxuXG4gICAgcmVzZXQoKSB7XG5cbiAgICAgICAgdGhpcy51aV90aXBzMS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy51aV90aXBzMi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy51aV90aXBzMy5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/game/ui/bl_tipsPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '07798WBMcNMTZDbLlPBzBUn', 'bl_tipsPanel');
// script/game/ui/bl_tipsPanel.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
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
var Global_1 = require("../../common/Global");
var GlobalEvents_1 = require("../../common/GlobalEvents");
var PanelBase_1 = require("../../common/comp/PanelBase");
var GameUtils_1 = require("../GameUtils");
var bl_Config_1 = require("./bl_Config");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var bl_tipsPanel = /** @class */ (function (_super) {
    __extends(bl_tipsPanel, _super);
    function bl_tipsPanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lb_num = null;
        _this.num = 0;
        return _this;
        // update (dt) {}
    }
    bl_tipsPanel_1 = bl_tipsPanel;
    bl_tipsPanel.Show = function (reward, callbacks) {
        return __awaiter(this, void 0, void 0, function () {
            var insNode, comp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, PanelBase_1.default.ShowPanel(this.Prefab_Name)];
                    case 1:
                        insNode = _a.sent();
                        if (!insNode) {
                            return [2 /*return*/];
                        }
                        comp = insNode.getComponent(bl_tipsPanel_1);
                        comp.init(reward, callbacks);
                        GameUtils_1.GameUtils.popView(insNode);
                        return [2 /*return*/];
                }
            });
        });
    };
    bl_tipsPanel.prototype.onLoad = function () {
        var _this = this;
        this.lb_num.string = bl_Config_1.bc.moneyAbbr + this.num.toString();
        this.scheduleOnce(function () {
            _this.onClose();
        }, 1.5);
    };
    bl_tipsPanel.prototype.init = function (num, callbacks) {
        this.callbacks = callbacks;
        this.num = num;
    };
    bl_tipsPanel.prototype.onClose = function () {
        if (this.callbacks)
            this.callbacks();
        Global_1.GlobalEvent.dispatchEvent(new GlobalEvents_1.EventChangeTop(1, this.num));
        this.close();
    };
    var bl_tipsPanel_1;
    bl_tipsPanel.Prefab_Name = "prefab/game/ui/bl_tipsPanel";
    __decorate([
        property(cc.Label)
    ], bl_tipsPanel.prototype, "lb_num", void 0);
    bl_tipsPanel = bl_tipsPanel_1 = __decorate([
        ccclass
    ], bl_tipsPanel);
    return bl_tipsPanel;
}(PanelBase_1.default));
exports.default = bl_tipsPanel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZ2FtZS91aS9ibF90aXBzUGFuZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHdEYsOENBQWtEO0FBQ2xELDBEQUEyRDtBQUMzRCx5REFBb0Q7QUFFcEQsMENBQXlDO0FBQ3pDLHlDQUFpQztBQUUzQixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUEwQyxnQ0FBUztJQUFuRDtRQUFBLHFFQXNDQztRQXhCRyxZQUFNLEdBQWEsSUFBSSxDQUFDO1FBSXhCLFNBQUcsR0FBRyxDQUFDLENBQUM7O1FBbUJSLGlCQUFpQjtJQUNyQixDQUFDO3FCQXRDb0IsWUFBWTtJQUdULGlCQUFJLEdBQXhCLFVBQXlCLE1BQWMsRUFBRSxTQUFvQjs7Ozs7NEJBQ2xDLHFCQUFNLG1CQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBQTs7d0JBQTlELE9BQU8sR0FBWSxTQUEyQzt3QkFDbEUsSUFBSSxDQUFDLE9BQU8sRUFBRTs0QkFDVixzQkFBTzt5QkFDVjt3QkFDRyxJQUFJLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxjQUFZLENBQUMsQ0FBQzt3QkFDOUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7d0JBQzdCLHFCQUFTLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDOzs7OztLQUM5QjtJQVFELDZCQUFNLEdBQU47UUFBQSxpQkFLQztRQUpHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLGNBQUUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN4RCxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ25CLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtJQUNYLENBQUM7SUFFRCwyQkFBSSxHQUFKLFVBQUssR0FBVyxFQUFFLFNBQVM7UUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDbkIsQ0FBQztJQUVELDhCQUFPLEdBQVA7UUFDSSxJQUFJLElBQUksQ0FBQyxTQUFTO1lBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3JDLG9CQUFXLENBQUMsYUFBYSxDQUFDLElBQUksNkJBQWMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7O0lBakNhLHdCQUFXLEdBQUcsNkJBQTZCLENBQUM7SUFZMUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztnREFDSztJQWRQLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0FzQ2hDO0lBQUQsbUJBQUM7Q0F0Q0QsQUFzQ0MsQ0F0Q3lDLG1CQUFTLEdBc0NsRDtrQkF0Q29CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IEJhc2VQYW5lbCBmcm9tIFwiLi4vLi4vY29tbW9uL0Jhc2VQYW5lbFwiO1xuaW1wb3J0IHsgR2xvYmFsRXZlbnQgfSBmcm9tIFwiLi4vLi4vY29tbW9uL0dsb2JhbFwiO1xuaW1wb3J0IHsgRXZlbnRDaGFuZ2VUb3AgfSBmcm9tIFwiLi4vLi4vY29tbW9uL0dsb2JhbEV2ZW50c1wiO1xuaW1wb3J0IFBhbmVsQmFzZSBmcm9tIFwiLi4vLi4vY29tbW9uL2NvbXAvUGFuZWxCYXNlXCI7XG5pbXBvcnQgeyBSZXdhcmRVdGlscyB9IGZyb20gXCIuLi8uLi9jb21tb24vY29tcC9yZXdhcmQvUmV3YXJkVXRpbHNcIjtcbmltcG9ydCB7IEdhbWVVdGlscyB9IGZyb20gXCIuLi9HYW1lVXRpbHNcIjtcbmltcG9ydCB7IGJjIH0gZnJvbSBcIi4vYmxfQ29uZmlnXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBibF90aXBzUGFuZWwgZXh0ZW5kcyBQYW5lbEJhc2Uge1xuXG4gICAgcHVibGljIHN0YXRpYyBQcmVmYWJfTmFtZSA9IFwicHJlZmFiL2dhbWUvdWkvYmxfdGlwc1BhbmVsXCI7XG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBTaG93KHJld2FyZDogbnVtYmVyLCBjYWxsYmFja3M/OiBGdW5jdGlvbikge1xuICAgICAgICBsZXQgaW5zTm9kZTogY2MuTm9kZSA9IGF3YWl0IFBhbmVsQmFzZS5TaG93UGFuZWwodGhpcy5QcmVmYWJfTmFtZSk7XG4gICAgICAgIGlmICghaW5zTm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjb21wID0gaW5zTm9kZS5nZXRDb21wb25lbnQoYmxfdGlwc1BhbmVsKTtcbiAgICAgICAgY29tcC5pbml0KHJld2FyZCwgY2FsbGJhY2tzKTtcbiAgICAgICAgR2FtZVV0aWxzLnBvcFZpZXcoaW5zTm9kZSk7XG4gICAgfVxuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiX251bTogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG4gICAgY2FsbGJhY2tzO1xuICAgIG51bSA9IDA7XG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLmxiX251bS5zdHJpbmcgPSBiYy5tb25leUFiYnIgKyB0aGlzLm51bS50b1N0cmluZygpO1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9uQ2xvc2UoKTtcbiAgICAgICAgfSwgMS41KVxuICAgIH1cblxuICAgIGluaXQobnVtOiBudW1iZXIsIGNhbGxiYWNrcykge1xuICAgICAgICB0aGlzLmNhbGxiYWNrcyA9IGNhbGxiYWNrcztcbiAgICAgICAgdGhpcy5udW0gPSBudW07XG4gICAgfVxuXG4gICAgb25DbG9zZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuY2FsbGJhY2tzKSB0aGlzLmNhbGxiYWNrcygpO1xuICAgICAgICBHbG9iYWxFdmVudC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudENoYW5nZVRvcCgxLCB0aGlzLm51bSkpO1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/game/ui/bl_top.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ab3d3iRW4xCjJdkwDFbYQEr', 'bl_top');
// script/game/ui/bl_top.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
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
var Global_1 = require("../../common/Global");
var GlobalEvents_1 = require("../../common/GlobalEvents");
var bl_txPanel_1 = require("./bl_txPanel");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var bl_top = /** @class */ (function (_super) {
    __extends(bl_top, _super);
    function bl_top() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lb_bestNum1 = null;
        _this.lb_bestNum2 = null;
        _this.lb_num = null;
        _this.ico1 = null;
        _this.ico2 = null;
        _this.num1 = 0;
        _this.num = 0;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    bl_top.prototype.onLoad = function () {
        this.bl_refrehUI();
    };
    bl_top.prototype.start = function () {
    };
    bl_top.prototype.onEnable = function () {
        Global_1.GlobalEvent.on(GlobalEvents_1.EventChangeTop.NAME, this.onChange, this);
    };
    bl_top.prototype.bl_refrehUI = function () {
        this.lb_num.string = this.num + "";
        this.lb_bestNum1.string = "已合成 x" + this.num1 + "";
        this.lb_bestNum2.string = this.num1 + "";
    };
    bl_top.prototype.onChange = function (evt) {
        if (evt.mtype == 1) {
            this.num += evt.num;
        }
        else {
            this.num1 += evt.num;
        }
        this.bl_refrehUI();
    };
    bl_top.prototype.bl_showtx = function () {
        bl_txPanel_1.default.Show();
    };
    __decorate([
        property(cc.Label)
    ], bl_top.prototype, "lb_bestNum1", void 0);
    __decorate([
        property(cc.Label)
    ], bl_top.prototype, "lb_bestNum2", void 0);
    __decorate([
        property(cc.Label)
    ], bl_top.prototype, "lb_num", void 0);
    __decorate([
        property(cc.Node)
    ], bl_top.prototype, "ico1", void 0);
    __decorate([
        property(cc.Node)
    ], bl_top.prototype, "ico2", void 0);
    bl_top = __decorate([
        ccclass
    ], bl_top);
    return bl_top;
}(cc.Component));
exports.default = bl_top;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZ2FtZS91aS9ibF90b3AudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEYsOENBQWtEO0FBQ2xELDBEQUEyRDtBQUMzRCwyQ0FBc0M7QUFFaEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBb0MsMEJBQVk7SUFBaEQ7UUFBQSxxRUFrREM7UUEvQ0csaUJBQVcsR0FBYSxJQUFJLENBQUM7UUFFN0IsaUJBQVcsR0FBYSxJQUFJLENBQUM7UUFFN0IsWUFBTSxHQUFhLElBQUksQ0FBQztRQUd4QixVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFHckIsVUFBSSxHQUFHLENBQUMsQ0FBQztRQUNULFNBQUcsR0FBRyxDQUFDLENBQUM7O1FBaUNSLGlCQUFpQjtJQUNyQixDQUFDO0lBakNHLHdCQUF3QjtJQUV4Qix1QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxzQkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVTLHlCQUFRLEdBQWxCO1FBQ0ksb0JBQVcsQ0FBQyxFQUFFLENBQUMsNkJBQWMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBQ0QsNEJBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ25DLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNuRCxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUM3QyxDQUFDO0lBQ0QseUJBQVEsR0FBUixVQUFTLEdBQW1CO1FBQ3hCLElBQUksR0FBRyxDQUFDLEtBQUssSUFBSSxDQUFDLEVBQUU7WUFDaEIsSUFBSSxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDO1NBQ3ZCO2FBQU07WUFDSCxJQUFJLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUM7U0FDeEI7UUFFRCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELDBCQUFTLEdBQVQ7UUFDSSxvQkFBVSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUE1Q0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsrQ0FDVTtJQUU3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOytDQUNVO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MENBQ0s7SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt3Q0FDRztJQUVyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3dDQUNHO0lBWkosTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQWtEMUI7SUFBRCxhQUFDO0NBbERELEFBa0RDLENBbERtQyxFQUFFLENBQUMsU0FBUyxHQWtEL0M7a0JBbERvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCB7IEdsb2JhbEV2ZW50IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9HbG9iYWxcIjtcbmltcG9ydCB7IEV2ZW50Q2hhbmdlVG9wIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9HbG9iYWxFdmVudHNcIjtcbmltcG9ydCBibF90eFBhbmVsIGZyb20gXCIuL2JsX3R4UGFuZWxcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGJsX3RvcCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJfYmVzdE51bTE6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJfYmVzdE51bTI6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJfbnVtOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBpY28xOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBpY28yOiBjYy5Ob2RlID0gbnVsbDtcblxuXG4gICAgbnVtMSA9IDA7XG4gICAgbnVtID0gMDtcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5ibF9yZWZyZWhVSSgpO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uRW5hYmxlKCk6IHZvaWQge1xuICAgICAgICBHbG9iYWxFdmVudC5vbihFdmVudENoYW5nZVRvcC5OQU1FLCB0aGlzLm9uQ2hhbmdlLCB0aGlzKTtcbiAgICB9XG4gICAgYmxfcmVmcmVoVUkoKSB7XG4gICAgICAgIHRoaXMubGJfbnVtLnN0cmluZyA9IHRoaXMubnVtICsgXCJcIjtcbiAgICAgICAgdGhpcy5sYl9iZXN0TnVtMS5zdHJpbmcgPSBcIuW3suWQiOaIkCB4XCIgKyB0aGlzLm51bTEgKyBcIlwiO1xuICAgICAgICB0aGlzLmxiX2Jlc3ROdW0yLnN0cmluZyA9IHRoaXMubnVtMSArIFwiXCI7XG4gICAgfVxuICAgIG9uQ2hhbmdlKGV2dDogRXZlbnRDaGFuZ2VUb3ApIHtcbiAgICAgICAgaWYgKGV2dC5tdHlwZSA9PSAxKSB7XG4gICAgICAgICAgICB0aGlzLm51bSArPSBldnQubnVtO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5udW0xICs9IGV2dC5udW07XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmJsX3JlZnJlaFVJKCk7XG4gICAgfVxuXG4gICAgYmxfc2hvd3R4KCkge1xuICAgICAgICBibF90eFBhbmVsLlNob3coKTtcbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/game/ui/bl_txToggle.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b1dcaoxaO1FSYftKozqMwoc', 'bl_txToggle');
// script/game/ui/bl_txToggle.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
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
var bl_Config_1 = require("./bl_Config");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var bl_txToggle = /** @class */ (function (_super) {
    __extends(bl_txToggle, _super);
    function bl_txToggle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lb_count = null;
        return _this;
        // update (dt) {}
    }
    bl_txToggle.prototype.init = function (data) {
        this.data = data;
        this.refresh();
    };
    bl_txToggle.prototype.onLoad = function () {
        this.lb_count = this.node.getComponentInChildren(cc.Label);
    };
    bl_txToggle.prototype.refresh = function () {
        this.lb_count.string = bl_Config_1.bc.moneyAbbr + this.data.drawBal;
    };
    bl_txToggle = __decorate([
        ccclass
    ], bl_txToggle);
    return bl_txToggle;
}(cc.Component));
exports.default = bl_txToggle;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZ2FtZS91aS9ibF90eFRvZ2dsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0Rix5Q0FBaUM7QUFLM0IsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBeUMsK0JBQVk7SUFBckQ7UUFBQSxxRUFrQkM7UUFoQkcsY0FBUSxHQUFhLElBQUksQ0FBQzs7UUFlMUIsaUJBQWlCO0lBQ3JCLENBQUM7SUFiRywwQkFBSSxHQUFKLFVBQUssSUFBYTtRQUNkLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBQ0QsNEJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVELDZCQUFPLEdBQVA7UUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxjQUFFLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQzVELENBQUM7SUFmZ0IsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQWtCL0I7SUFBRCxrQkFBQztDQWxCRCxBQWtCQyxDQWxCd0MsRUFBRSxDQUFDLFNBQVMsR0FrQnBEO2tCQWxCb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgeyBiYyB9IGZyb20gXCIuL2JsX0NvbmZpZ1wiO1xuaW1wb3J0IHsgdHhfbGlzdCB9IGZyb20gXCIuL2JsX3R4UGFuZWxcIjtcblxuXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBibF90eFRvZ2dsZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBsYl9jb3VudDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgZGF0YTogdHhfbGlzdDtcbiAgICBpbml0KGRhdGE6IHR4X2xpc3QpIHtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgfVxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5sYl9jb3VudCA9IHRoaXMubm9kZS5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLkxhYmVsKTtcbiAgICB9XG5cbiAgICByZWZyZXNoKCkge1xuICAgICAgICB0aGlzLmxiX2NvdW50LnN0cmluZyA9IGJjLm1vbmV5QWJiciArIHRoaXMuZGF0YS5kcmF3QmFsO1xuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/game/GameUtils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '74ad3RfvBFIzYEhcaj3J1Rx', 'GameUtils');
// script/game/GameUtils.ts

"use strict";
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
exports.GameUtils = void 0;
var AudioManager_1 = require("../common/AudioManager");
var Toast_1 = require("../common/comp/toast/Toast");
var Ball_Main_1 = require("../common/Ball_Main");
var Utils_1 = require("../utils/Utils");
var UIManager_1 = require("./common/UIManager");
var GameUtils = /** @class */ (function () {
    function GameUtils() {
    }
    Object.defineProperty(GameUtils, "popLayer", {
        get: function () {
            return UIManager_1.ui.getLayer(UIManager_1.UILayer.Panel);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameUtils, "effectLayer", {
        get: function () {
            return UIManager_1.ui.getLayer(UIManager_1.UILayer.Effect);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameUtils, "loadingLayer", {
        get: function () {
            return UIManager_1.ui.getLayer(UIManager_1.UILayer.LoadingBar);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameUtils, "bannerLayer", {
        get: function () {
            return UIManager_1.ui.getLayer(UIManager_1.UILayer.Banner);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameUtils, "xLayer", {
        get: function () {
            return UIManager_1.ui.getLayer(UIManager_1.UILayer.X);
        },
        enumerable: false,
        configurable: true
    });
    GameUtils.popView = function (view, insert) {
        if (insert === void 0) { insert = false; }
        UIManager_1.ui.popView(view, insert);
    };
    GameUtils.addEffectAR = function (node) {
        UIManager_1.ui.addEffectAR(node);
    };
    GameUtils.playClick = function () {
        this.playSFX("click"); //("Button_click");
    };
    GameUtils.playDrop = function () {
        this.playSFX("drop"); //("Button_click");
    };
    GameUtils.playCompose = function () {
        this.playSFX("compose");
    };
    GameUtils.playFlyCoin = function () {
        this.playSFX("rise_1");
    };
    GameUtils.playSFX = function (sndName, ext) {
        if (ext === void 0) { ext = ".mp3"; }
        AudioManager_1.sd.playSFX("sounds/" + sndName, 1, ext);
    };
    GameUtils.showToast = function (context, ico) {
        Toast_1.default.show(UIManager_1.ui.getLayer(UIManager_1.UILayer.Tip), context, ico ? ico : Toast_1.TipIco.Tip);
    };
    GameUtils.showToast_noCoin = function () {
        this.showToast("金币不足", Toast_1.TipIco.Coin);
    };
    GameUtils.addEffBoom = function (wpos) {
        var boom = cc.instantiate(Ball_Main_1.default.instance.resList.prefab_eff_boom);
        boom.position = wpos;
        GameUtils.addEffectAR(boom);
        setTimeout(function () {
            Utils_1.Utils.removeNode(boom);
        }, 3000);
    };
    GameUtils.loadConfigFromAli = function (fileName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    GameUtils.createNodeByFrame = function (frame, scale, url) {
        var node = new cc.Node();
        var ico = new cc.Node();
        ico.scale = scale;
        ico.parent = node;
        var spr = ico.addComponent(cc.Sprite);
        spr.spriteFrame = frame;
        spr.sizeMode = cc.Sprite.SizeMode.RAW;
        if (url) {
            Utils_1.Utils.updateNodeSpriteFrame(url, ico, false);
        }
        return node;
    };
    return GameUtils;
}());
exports.GameUtils = GameUtils;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZ2FtZS9HYW1lVXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdURBQTRDO0FBQzVDLG9EQUEyRDtBQUUzRCxpREFBNEM7QUFFNUMsd0NBQXVDO0FBQ3ZDLGdEQUFpRDtBQUVqRDtJQUFBO0lBZ0ZBLENBQUM7SUEvRUcsc0JBQVcscUJBQVE7YUFBbkI7WUFDSSxPQUFPLGNBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0QyxDQUFDOzs7T0FBQTtJQUNELHNCQUFXLHdCQUFXO2FBQXRCO1lBQ0ksT0FBTyxjQUFFLENBQUMsUUFBUSxDQUFDLG1CQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkMsQ0FBQzs7O09BQUE7SUFDRCxzQkFBVyx5QkFBWTthQUF2QjtZQUNJLE9BQU8sY0FBRSxDQUFDLFFBQVEsQ0FBQyxtQkFBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzNDLENBQUM7OztPQUFBO0lBQ0Qsc0JBQVcsd0JBQVc7YUFBdEI7WUFDSSxPQUFPLGNBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2QyxDQUFDOzs7T0FBQTtJQUVELHNCQUFXLG1CQUFNO2FBQWpCO1lBQ0ksT0FBTyxjQUFFLENBQUMsUUFBUSxDQUFDLG1CQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEMsQ0FBQzs7O09BQUE7SUFFTSxpQkFBTyxHQUFkLFVBQWUsSUFBYSxFQUFFLE1BQXVCO1FBQXZCLHVCQUFBLEVBQUEsY0FBdUI7UUFDakQsY0FBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVNLHFCQUFXLEdBQWxCLFVBQW1CLElBQUk7UUFDbkIsY0FBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRU0sbUJBQVMsR0FBaEI7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUEsbUJBQW1CO0lBQzdDLENBQUM7SUFDTSxrQkFBUSxHQUFmO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBLG1CQUFtQjtJQUM1QyxDQUFDO0lBRU0scUJBQVcsR0FBbEI7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQzNCLENBQUM7SUFFTSxxQkFBVyxHQUFsQjtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDMUIsQ0FBQztJQUNNLGlCQUFPLEdBQWQsVUFBZSxPQUFlLEVBQUUsR0FBb0I7UUFBcEIsb0JBQUEsRUFBQSxZQUFvQjtRQUNoRCxpQkFBRSxDQUFDLE9BQU8sQ0FBQyxZQUFVLE9BQVMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVNLG1CQUFTLEdBQWhCLFVBQWlCLE9BQWUsRUFBRSxHQUFZO1FBQzFDLGVBQUssQ0FBQyxJQUFJLENBQUMsY0FBRSxDQUFDLFFBQVEsQ0FBQyxtQkFBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsY0FBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFFTSwwQkFBZ0IsR0FBdkI7UUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxjQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUdNLG9CQUFVLEdBQWpCLFVBQWtCLElBQWE7UUFDM0IsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QixVQUFVLENBQUM7WUFDUCxhQUFLLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQzFCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNiLENBQUM7SUFFWSwyQkFBaUIsR0FBOUIsVUFBK0IsUUFBZ0I7Ozs7OztLQUc5QztJQUVNLDJCQUFpQixHQUF4QixVQUF5QixLQUFxQixFQUFFLEtBQWEsRUFBRSxHQUFZO1FBQ3ZFLElBQUksSUFBSSxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3pCLElBQUksR0FBRyxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3hCLEdBQUcsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLEdBQUcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLEdBQUcsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDO1FBQ3RDLElBQUksR0FBRyxFQUFFO1lBQ0wsYUFBSyxDQUFDLHFCQUFxQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDaEQ7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQWhGQSxBQWdGQyxJQUFBO0FBaEZZLDhCQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2QgfSBmcm9tIFwiLi4vY29tbW9uL0F1ZGlvTWFuYWdlclwiO1xuaW1wb3J0IFRvYXN0LCB7IFRpcEljbyB9IGZyb20gXCIuLi9jb21tb24vY29tcC90b2FzdC9Ub2FzdFwiO1xuaW1wb3J0IHsgZG0gfSBmcm9tIFwiLi4vY29tbW9uL0RhdGFNYW5hZ2VyXCI7XG5pbXBvcnQgQmFsbF9NYWluIGZyb20gXCIuLi9jb21tb24vQmFsbF9NYWluXCI7XG5pbXBvcnQgeyBTY2VuZVR5cGUsIHNtIH0gZnJvbSBcIi4uL2NvbW1vbi9TY2VuZU1hbmFnZXJcIjtcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSBcIi4uL3V0aWxzL1V0aWxzXCI7XG5pbXBvcnQgeyB1aSwgVUlMYXllciB9IGZyb20gXCIuL2NvbW1vbi9VSU1hbmFnZXJcIjtcblxuZXhwb3J0IGNsYXNzIEdhbWVVdGlscyB7XG4gICAgc3RhdGljIGdldCBwb3BMYXllcigpIHtcbiAgICAgICAgcmV0dXJuIHVpLmdldExheWVyKFVJTGF5ZXIuUGFuZWwpO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IGVmZmVjdExheWVyKCkge1xuICAgICAgICByZXR1cm4gdWkuZ2V0TGF5ZXIoVUlMYXllci5FZmZlY3QpO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IGxvYWRpbmdMYXllcigpIHtcbiAgICAgICAgcmV0dXJuIHVpLmdldExheWVyKFVJTGF5ZXIuTG9hZGluZ0Jhcik7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgYmFubmVyTGF5ZXIoKSB7XG4gICAgICAgIHJldHVybiB1aS5nZXRMYXllcihVSUxheWVyLkJhbm5lcik7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCB4TGF5ZXIoKSB7XG4gICAgICAgIHJldHVybiB1aS5nZXRMYXllcihVSUxheWVyLlgpO1xuICAgIH1cblxuICAgIHN0YXRpYyBwb3BWaWV3KHZpZXc6IGNjLk5vZGUsIGluc2VydDogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIHVpLnBvcFZpZXcodmlldywgaW5zZXJ0KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYWRkRWZmZWN0QVIobm9kZSkge1xuICAgICAgICB1aS5hZGRFZmZlY3RBUihub2RlKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcGxheUNsaWNrKCkge1xuICAgICAgICB0aGlzLnBsYXlTRlgoXCJjbGlja1wiKTsvLyhcIkJ1dHRvbl9jbGlja1wiKTtcbiAgICB9XG4gICAgc3RhdGljIHBsYXlEcm9wKCkge1xuICAgICAgICB0aGlzLnBsYXlTRlgoXCJkcm9wXCIpOy8vKFwiQnV0dG9uX2NsaWNrXCIpO1xuICAgIH1cblxuICAgIHN0YXRpYyBwbGF5Q29tcG9zZSgpIHtcbiAgICAgICAgdGhpcy5wbGF5U0ZYKFwiY29tcG9zZVwiKVxuICAgIH1cblxuICAgIHN0YXRpYyBwbGF5Rmx5Q29pbigpIHtcbiAgICAgICAgdGhpcy5wbGF5U0ZYKFwicmlzZV8xXCIpXG4gICAgfVxuICAgIHN0YXRpYyBwbGF5U0ZYKHNuZE5hbWU6IHN0cmluZywgZXh0OiBzdHJpbmcgPSBcIi5tcDNcIikge1xuICAgICAgICBzZC5wbGF5U0ZYKGBzb3VuZHMvJHtzbmROYW1lfWAsIDEsIGV4dCk7XG4gICAgfVxuXG4gICAgc3RhdGljIHNob3dUb2FzdChjb250ZXh0OiBzdHJpbmcsIGljbz86IFRpcEljbykge1xuICAgICAgICBUb2FzdC5zaG93KHVpLmdldExheWVyKFVJTGF5ZXIuVGlwKSwgY29udGV4dCwgaWNvID8gaWNvIDogVGlwSWNvLlRpcCk7XG4gICAgfVxuXG4gICAgc3RhdGljIHNob3dUb2FzdF9ub0NvaW4oKSB7XG4gICAgICAgIHRoaXMuc2hvd1RvYXN0KFwi6YeR5biB5LiN6LazXCIsIFRpcEljby5Db2luKTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBhZGRFZmZCb29tKHdwb3M6IGNjLlZlYzIpIHtcbiAgICAgICAgbGV0IGJvb20gPSBjYy5pbnN0YW50aWF0ZShCYWxsX01haW4uaW5zdGFuY2UucmVzTGlzdC5wcmVmYWJfZWZmX2Jvb20pO1xuICAgICAgICBib29tLnBvc2l0aW9uID0gd3BvcztcbiAgICAgICAgR2FtZVV0aWxzLmFkZEVmZmVjdEFSKGJvb20pO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIFV0aWxzLnJlbW92ZU5vZGUoYm9vbSlcbiAgICAgICAgfSwgMzAwMCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGFzeW5jIGxvYWRDb25maWdGcm9tQWxpKGZpbGVOYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgLy8gbGV0IHVybCA9IGAke0dhbWVDb25maWcuT1NTX1VSTF9CQVNFfSR7ZmlsZU5hbWV9Lmpzb25gOy8vJHtNYXRoLnJhbmRvbSgpfVxuICAgICAgICAvLyByZXR1cm4gVXRpbHMubG9hZENvbmZpZ0Zyb21BbGkodXJsKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlTm9kZUJ5RnJhbWUoZnJhbWU6IGNjLlNwcml0ZUZyYW1lLCBzY2FsZTogbnVtYmVyLCB1cmw/OiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IG5vZGUgPSBuZXcgY2MuTm9kZSgpO1xuICAgICAgICBsZXQgaWNvID0gbmV3IGNjLk5vZGUoKTtcbiAgICAgICAgaWNvLnNjYWxlID0gc2NhbGU7XG4gICAgICAgIGljby5wYXJlbnQgPSBub2RlO1xuICAgICAgICBsZXQgc3ByID0gaWNvLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICBzcHIuc3ByaXRlRnJhbWUgPSBmcmFtZTtcbiAgICAgICAgc3ByLnNpemVNb2RlID0gY2MuU3ByaXRlLlNpemVNb2RlLlJBVztcbiAgICAgICAgaWYgKHVybCkge1xuICAgICAgICAgICAgVXRpbHMudXBkYXRlTm9kZVNwcml0ZUZyYW1lKHVybCwgaWNvLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/game/ui/Ball_MainScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4ef50J9y+JBl46mZn7sNPUY', 'Ball_MainScene');
// script/game/ui/Ball_MainScene.ts

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
var AudioManager_1 = require("../../common/AudioManager");
var SceneManager_1 = require("../../common/SceneManager");
var bl_Config_1 = require("./bl_Config");
var bl_Logic_1 = require("./bl_Logic");
var bl_top_1 = require("./bl_top");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Ball_MainScene = /** @class */ (function (_super) {
    __extends(Ball_MainScene, _super);
    function Ball_MainScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.logic = null;
        _this.top_content = null;
        _this.topPre = null;
        return _this;
    }
    Ball_MainScene_1 = Ball_MainScene;
    Ball_MainScene.GetType = function () {
        return SceneManager_1.SceneType.Stage;
    };
    Ball_MainScene.prototype.getType = function () {
        return Ball_MainScene_1.GetType();
    };
    Ball_MainScene.prototype.getNode = function () {
        return this.node;
    };
    Ball_MainScene.prototype.initScene = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.logic.init()];
                    case 1:
                        _a.sent();
                        AudioManager_1.sd.playBGM("sounds/bg", true);
                        return [2 /*return*/];
                }
            });
        });
    };
    Ball_MainScene.prototype.removeScene = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    Ball_MainScene.prototype.onLoad = function () {
        cc.director.getPhysicsManager().enabled = true;
        // cc.director.getPhysicsManager().debugDrawFlags = cc.PhysicsManager.DrawBits.e_aabbBit |
        //     cc.PhysicsManager.DrawBits.e_jointBit |
        //     cc.PhysicsManager.DrawBits.e_shapeBit;
        this.addTop();
    };
    Ball_MainScene.prototype.addTop = function () {
        var top = cc.instantiate(this.topPre);
        top.parent = this.top_content;
        top.y = this.node.height / 2 - top.height / 2;
        bl_Config_1.bc.top = this.top = top.getComponent(bl_top_1.default);
    };
    Ball_MainScene.prototype.onEnable = function () {
    };
    Ball_MainScene.prototype.onDisable = function () {
    };
    var Ball_MainScene_1;
    Ball_MainScene.Prefab_Name = "prefab/game/scene/main";
    __decorate([
        property(bl_Logic_1.default)
    ], Ball_MainScene.prototype, "logic", void 0);
    __decorate([
        property(cc.Node)
    ], Ball_MainScene.prototype, "top_content", void 0);
    __decorate([
        property(cc.Prefab)
    ], Ball_MainScene.prototype, "topPre", void 0);
    Ball_MainScene = Ball_MainScene_1 = __decorate([
        ccclass
    ], Ball_MainScene);
    return Ball_MainScene;
}(SceneManager_1.GameScene));
exports.default = Ball_MainScene;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZ2FtZS91aS9CYWxsX01haW5TY2VuZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSwwREFBK0M7QUFDL0MsMERBQWlFO0FBQ2pFLHlDQUFpQztBQUNqQyx1Q0FBa0M7QUFDbEMsbUNBQThCO0FBRXhCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTRDLGtDQUFTO0lBQXJEO1FBQUEscUVBd0RDO1FBeENHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFHNUIsWUFBTSxHQUFjLElBQUksQ0FBQzs7SUFrQzdCLENBQUM7dUJBeERvQixjQUFjO0lBR3hCLHNCQUFPLEdBQWQ7UUFDSSxPQUFPLHdCQUFTLENBQUMsS0FBSyxDQUFDO0lBQzNCLENBQUM7SUFFRCxnQ0FBTyxHQUFQO1FBQ0ksT0FBTyxnQkFBYyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3BDLENBQUM7SUFFRCxnQ0FBTyxHQUFQO1FBQ0ksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFhSyxrQ0FBUyxHQUFmLFVBQWdCLEtBQVU7Ozs7NEJBQ3RCLHFCQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEVBQUE7O3dCQUF2QixTQUF1QixDQUFDO3dCQUN4QixpQkFBRSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7Ozs7O0tBQ2pDO0lBRUssb0NBQVcsR0FBakI7Ozs7OztLQUNDO0lBRVMsK0JBQU0sR0FBaEI7UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUMvQywwRkFBMEY7UUFDMUYsOENBQThDO1FBQzlDLDZDQUE2QztRQUM3QyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVELCtCQUFNLEdBQU47UUFDSSxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0QyxHQUFHLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFFOUIsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFFOUMsY0FBRSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUMsZ0JBQU0sQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCxpQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVELGtDQUFTLEdBQVQ7SUFDQSxDQUFDOztJQXREYSwwQkFBVyxHQUFHLHdCQUF3QixDQUFDO0lBZXJEO1FBREMsUUFBUSxDQUFDLGtCQUFRLENBQUM7aURBQ0k7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt1REFDVTtJQUc1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2tEQUNLO0lBdEJSLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0F3RGxDO0lBQUQscUJBQUM7Q0F4REQsQUF3REMsQ0F4RDJDLHdCQUFTLEdBd0RwRDtrQkF4RG9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IHNkIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9BdWRpb01hbmFnZXJcIjtcbmltcG9ydCB7IEdhbWVTY2VuZSwgU2NlbmVUeXBlIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9TY2VuZU1hbmFnZXJcIjtcbmltcG9ydCB7IGJjIH0gZnJvbSBcIi4vYmxfQ29uZmlnXCI7XG5pbXBvcnQgYmxfTG9naWMgZnJvbSBcIi4vYmxfTG9naWNcIjtcbmltcG9ydCBibF90b3AgZnJvbSBcIi4vYmxfdG9wXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYWxsX01haW5TY2VuZSBleHRlbmRzIEdhbWVTY2VuZSB7XG4gICAgcHVibGljIHN0YXRpYyBQcmVmYWJfTmFtZSA9IFwicHJlZmFiL2dhbWUvc2NlbmUvbWFpblwiO1xuXG4gICAgc3RhdGljIEdldFR5cGUoKSB7XG4gICAgICAgIHJldHVybiBTY2VuZVR5cGUuU3RhZ2U7XG4gICAgfVxuXG4gICAgZ2V0VHlwZSgpIHtcbiAgICAgICAgcmV0dXJuIEJhbGxfTWFpblNjZW5lLkdldFR5cGUoKTtcbiAgICB9XG5cbiAgICBnZXROb2RlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2RlO1xuICAgIH1cblxuICAgIEBwcm9wZXJ0eShibF9Mb2dpYylcbiAgICBsb2dpYzogYmxfTG9naWMgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgdG9wX2NvbnRlbnQ6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICB0b3BQcmU6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICB0b3A6IGJsX3RvcDtcblxuICAgIGFzeW5jIGluaXRTY2VuZShwYXJhbTogYW55KSB7XG4gICAgICAgIGF3YWl0IHRoaXMubG9naWMuaW5pdCgpO1xuICAgICAgICBzZC5wbGF5QkdNKFwic291bmRzL2JnXCIsIHRydWUpO1xuICAgIH1cblxuICAgIGFzeW5jIHJlbW92ZVNjZW5lKCkge1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIC8vIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZGVidWdEcmF3RmxhZ3MgPSBjYy5QaHlzaWNzTWFuYWdlci5EcmF3Qml0cy5lX2FhYmJCaXQgfFxuICAgICAgICAvLyAgICAgY2MuUGh5c2ljc01hbmFnZXIuRHJhd0JpdHMuZV9qb2ludEJpdCB8XG4gICAgICAgIC8vICAgICBjYy5QaHlzaWNzTWFuYWdlci5EcmF3Qml0cy5lX3NoYXBlQml0O1xuICAgICAgICB0aGlzLmFkZFRvcCgpO1xuICAgIH1cblxuICAgIGFkZFRvcCgpIHtcbiAgICAgICAgbGV0IHRvcCA9IGNjLmluc3RhbnRpYXRlKHRoaXMudG9wUHJlKTtcbiAgICAgICAgdG9wLnBhcmVudCA9IHRoaXMudG9wX2NvbnRlbnQ7XG5cbiAgICAgICAgdG9wLnkgPSB0aGlzLm5vZGUuaGVpZ2h0IC8gMiAtIHRvcC5oZWlnaHQgLyAyO1xuXG4gICAgICAgIGJjLnRvcCA9IHRoaXMudG9wID0gdG9wLmdldENvbXBvbmVudChibF90b3ApO1xuICAgIH1cblxuICAgIG9uRW5hYmxlKCkge1xuICAgIH1cblxuICAgIG9uRGlzYWJsZSgpIHtcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/utils/logger.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c564bGIDhdEs7DC7bFq7AMX', 'logger');
// script/utils/logger.ts

"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.Init = function (isDebug) {
        this.DEBUG_LOG = isDebug;
    };
    Logger.debug = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (Logger.DEBUG_LOG) {
            console.log.apply(console, args);
        }
    };
    Logger.info = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log.apply(console, args);
    };
    Logger.warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (Logger.DEBUG_LOG) {
            console.warn.apply(console, args);
        }
    };
    Logger.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.error.apply(console, args);
    };
    Logger.assert = function (assertion, message) {
        var optionalParams = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            optionalParams[_i - 2] = arguments[_i];
        }
        if (Logger.DEBUG_LOG) {
            console.assert.apply(console, __spreadArrays([assertion, message], optionalParams));
        }
    };
    Logger.DEBUG_LOG = true; //打印
    return Logger;
}());
exports.Logger = Logger;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdXRpbHMvbG9nZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtJQUFBO0lBaUNBLENBQUM7SUE3QlEsV0FBSSxHQUFYLFVBQVksT0FBZTtRQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztJQUMzQixDQUFDO0lBRU0sWUFBSyxHQUFaO1FBQWEsY0FBYzthQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7WUFBZCx5QkFBYzs7UUFDekIsSUFBSSxNQUFNLENBQUMsU0FBUyxFQUFFO1lBQ3BCLE9BQU8sQ0FBQyxHQUFHLE9BQVgsT0FBTyxFQUFRLElBQUksRUFBRTtTQUN0QjtJQUNILENBQUM7SUFFTSxXQUFJLEdBQVg7UUFBWSxjQUFjO2FBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztZQUFkLHlCQUFjOztRQUN4QixPQUFPLENBQUMsR0FBRyxPQUFYLE9BQU8sRUFBUSxJQUFJLEVBQUU7SUFDdkIsQ0FBQztJQUVNLFdBQUksR0FBWDtRQUFZLGNBQWM7YUFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO1lBQWQseUJBQWM7O1FBQ3hCLElBQUksTUFBTSxDQUFDLFNBQVMsRUFBRTtZQUNwQixPQUFPLENBQUMsSUFBSSxPQUFaLE9BQU8sRUFBUyxJQUFJLEVBQUU7U0FDdkI7SUFDSCxDQUFDO0lBRU0sWUFBSyxHQUFaO1FBQWEsY0FBYzthQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7WUFBZCx5QkFBYzs7UUFDekIsT0FBTyxDQUFDLEtBQUssT0FBYixPQUFPLEVBQVUsSUFBSSxFQUFFO0lBQ3pCLENBQUM7SUFFTSxhQUFNLEdBQWIsVUFBYyxTQUFtQixFQUFFLE9BQWdCO1FBQUUsd0JBQXdCO2FBQXhCLFVBQXdCLEVBQXhCLHFCQUF3QixFQUF4QixJQUF3QjtZQUF4Qix1Q0FBd0I7O1FBQzNFLElBQUksTUFBTSxDQUFDLFNBQVMsRUFBRTtZQUNwQixPQUFPLENBQUMsTUFBTSxPQUFkLE9BQU8sa0JBQVEsU0FBUyxFQUFFLE9BQU8sR0FBSyxjQUFjLEdBQUU7U0FDdkQ7SUFDSCxDQUFDO0lBOUJjLGdCQUFTLEdBQVcsSUFBSSxDQUFDLENBQUEsSUFBSTtJQStCOUMsYUFBQztDQWpDRCxBQWlDQyxJQUFBO0FBakNZLHdCQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgY2xhc3MgTG9nZ2VyIHtcblxuICBwcml2YXRlIHN0YXRpYyBERUJVR19MT0c6Ym9vbGVhbiA9IHRydWU7Ly/miZPljbBcblxuICBzdGF0aWMgSW5pdChpc0RlYnVnOmJvb2xlYW4pe1xuICAgIHRoaXMuREVCVUdfTE9HID0gaXNEZWJ1ZztcbiAgfVxuXG4gIHN0YXRpYyBkZWJ1ZyguLi5hcmdzOiBhbnlbXSkge1xuICAgIGlmIChMb2dnZXIuREVCVUdfTE9HKSB7XG4gICAgICBjb25zb2xlLmxvZyguLi5hcmdzKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgaW5mbyguLi5hcmdzOiBhbnlbXSkge1xuICAgIGNvbnNvbGUubG9nKC4uLmFyZ3MpO1xuICB9XG5cbiAgc3RhdGljIHdhcm4oLi4uYXJnczogYW55W10pIHtcbiAgICBpZiAoTG9nZ2VyLkRFQlVHX0xPRykge1xuICAgICAgY29uc29sZS53YXJuKC4uLmFyZ3MpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBlcnJvciguLi5hcmdzOiBhbnlbXSkge1xuICAgIGNvbnNvbGUuZXJyb3IoLi4uYXJncyk7XG4gIH1cblxuICBzdGF0aWMgYXNzZXJ0KGFzc2VydGlvbj86IGJvb2xlYW4sIG1lc3NhZ2U/OiBzdHJpbmcsIC4uLm9wdGlvbmFsUGFyYW1zOiBhbnlbXSk6IHZvaWQge1xuICAgIGlmIChMb2dnZXIuREVCVUdfTE9HKSB7XG4gICAgICBjb25zb2xlLmFzc2VydChhc3NlcnRpb24sIG1lc3NhZ2UsIC4uLm9wdGlvbmFsUGFyYW1zKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/lang/LanguageData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '49c46i7jj9HfLDrEiP0omdn', 'LanguageData');
// script/lang/LanguageData.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSceneRenderers = exports.t = exports.initSource = exports.init = exports.ready = exports._language = void 0;
exports._language = 'zh';
exports.ready = false;
/**
 * 初始化
 * @param language
 */
function init(language) {
    exports.ready = true;
    exports._language = language;
}
exports.init = init;
function initSource(language, languages) {
    init(language);
    var win = window;
    win.languages = {};
    win.languages[exports._language] = languages;
}
exports.initSource = initSource;
/**
 * 翻译数据
 * @param key
 */
function t(key, option) {
    var win = window;
    if (!win.languages) {
        return key;
    }
    var data = win.languages[exports._language];
    var result = key;
    if (!data || !data[key]) {
        return result;
    }
    result = data[key];
    if (option) {
        var regexp = /{\d}/g;
        var matchArr = result.matchAll(regexp);
        if (matchArr) {
            // const fetchArr = [...matchArr];
            var fetchArr = [];
            for (var _i = 0, matchArr_1 = matchArr; _i < matchArr_1.length; _i++) {
                var iterator = matchArr_1[_i];
                fetchArr.push(iterator);
            }
            // console.log(fetchArr,'+++++++++',matchArr);
            for (var index = 0; index < option.length; index++) {
                var element = fetchArr[index];
                if (element) {
                    result = result.replace(element[0], option[index]);
                }
            }
            return result;
        }
    }
    return result;
    // const searcher = key.split('.');
    // let data = win.languages[_language];
    // for (let i = 0; i < searcher.length; i++) {
    //     data = data[searcher[i]];
    //     if (!data) {
    //         return '';
    //     }
    // }
    // return data || '';
}
exports.t = t;
function updateSceneRenderers() {
    var rootNodes = cc.director.getScene().children;
    // walk all nodes with localize label and update
    var allLocalizedLabels = [];
    for (var i = 0; i < rootNodes.length; ++i) {
        var labels = rootNodes[i].getComponentsInChildren('LocalizedLabel');
        Array.prototype.push.apply(allLocalizedLabels, labels);
    }
    for (var i = 0; i < allLocalizedLabels.length; ++i) {
        var label = allLocalizedLabels[i];
        // if(!label.node.active)continue;
        label.updateLabel();
    }
    // walk all nodes with localize sprite and update
    var allLocalizedSprites = [];
    for (var i = 0; i < rootNodes.length; ++i) {
        var sprites = rootNodes[i].getComponentsInChildren('LocalizedSprite');
        Array.prototype.push.apply(allLocalizedSprites, sprites);
    }
    for (var i = 0; i < allLocalizedSprites.length; ++i) {
        var sprite = allLocalizedSprites[i];
        if (!sprite.node.active)
            continue;
        sprite.updateSprite();
    }
}
exports.updateSceneRenderers = updateSceneRenderers;
// 供插件查询当前语言使用
var win = window;
win.initSource = initSource;
win._languageData = {
    get language() {
        return exports._language;
    },
    init: function (lang) {
        init(lang);
    },
    updateSceneRenderers: function () {
        updateSceneRenderers();
    },
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvbGFuZy9MYW5ndWFnZURhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ1csUUFBQSxTQUFTLEdBQUcsSUFBSSxDQUFDO0FBRWpCLFFBQUEsS0FBSyxHQUFZLEtBQUssQ0FBQztBQUVsQzs7O0dBR0c7QUFDSCxTQUFnQixJQUFJLENBQUMsUUFBZ0I7SUFDakMsYUFBSyxHQUFHLElBQUksQ0FBQztJQUNiLGlCQUFTLEdBQUcsUUFBUSxDQUFDO0FBQ3pCLENBQUM7QUFIRCxvQkFHQztBQUVELFNBQWdCLFVBQVUsQ0FBQyxRQUFnQixFQUFDLFNBQWE7SUFFckQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2YsSUFBTSxHQUFHLEdBQVEsTUFBTSxDQUFDO0lBQ3hCLEdBQUcsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ25CLEdBQUcsQ0FBQyxTQUFTLENBQUMsaUJBQVMsQ0FBQyxHQUFHLFNBQVMsQ0FBQztBQUN6QyxDQUFDO0FBTkQsZ0NBTUM7QUFFRDs7O0dBR0c7QUFDSCxTQUFnQixDQUFDLENBQUMsR0FBVyxFQUFDLE1BQWtCO0lBQzVDLElBQU0sR0FBRyxHQUFRLE1BQU0sQ0FBQztJQUV4QixJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRTtRQUNoQixPQUFPLEdBQUcsQ0FBQztLQUNkO0lBRUQsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQyxpQkFBUyxDQUFDLENBQUM7SUFDcEMsSUFBSSxNQUFNLEdBQUcsR0FBRyxDQUFDO0lBQ2pCLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQ3ZCO1FBQ0ksT0FBTyxNQUFNLENBQUM7S0FDakI7SUFFRCxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRW5CLElBQUksTUFBTSxFQUNWO1FBQ0ksSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQU0s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QUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7QUFDNUIsR0FBRyxDQUFDLGFBQWEsR0FBRztJQUNoQixJQUFJLFFBQVE7UUFDUixPQUFPLGlCQUFTLENBQUM7SUFDckIsQ0FBQztJQUNELElBQUksRUFBSixVQUFLLElBQVk7UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDZixDQUFDO0lBQ0Qsb0JBQW9CO1FBQ2hCLG9CQUFvQixFQUFFLENBQUM7SUFDM0IsQ0FBQztDQUNKLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBsZXQgX2xhbmd1YWdlID0gJ3poJztcblxuZXhwb3J0IGxldCByZWFkeTogYm9vbGVhbiA9IGZhbHNlO1xuXG4vKipcbiAqIOWIneWni+WMllxuICogQHBhcmFtIGxhbmd1YWdlIFxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5pdChsYW5ndWFnZTogc3RyaW5nKSB7XG4gICAgcmVhZHkgPSB0cnVlO1xuICAgIF9sYW5ndWFnZSA9IGxhbmd1YWdlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdFNvdXJjZShsYW5ndWFnZTogc3RyaW5nLGxhbmd1YWdlczphbnkpXG57XG4gICAgaW5pdChsYW5ndWFnZSk7XG4gICAgY29uc3Qgd2luOiBhbnkgPSB3aW5kb3c7XG4gICAgd2luLmxhbmd1YWdlcyA9IHt9O1xuICAgIHdpbi5sYW5ndWFnZXNbX2xhbmd1YWdlXSA9IGxhbmd1YWdlcztcbn1cblxuLyoqXG4gKiDnv7vor5HmlbDmja5cbiAqIEBwYXJhbSBrZXkgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0KGtleTogc3RyaW5nLG9wdGlvbj86QXJyYXk8YW55Pikge1xuICAgIGNvbnN0IHdpbjogYW55ID0gd2luZG93O1xuICAgIFxuICAgIGlmICghd2luLmxhbmd1YWdlcykge1xuICAgICAgICByZXR1cm4ga2V5O1xuICAgIH1cblxuICAgIGxldCBkYXRhID0gd2luLmxhbmd1YWdlc1tfbGFuZ3VhZ2VdO1xuICAgIGxldCByZXN1bHQgPSBrZXk7XG4gICAgaWYgKCFkYXRhIHx8ICFkYXRhW2tleV0pIFxuICAgIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICByZXN1bHQgPSBkYXRhW2tleV07XG5cbiAgICBpZiAob3B0aW9uKSBcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlZ2V4cCA9IC97XFxkfS9nO1xuICAgICAgICBjb25zdCBtYXRjaEFyciA9IHJlc3VsdC5tYXRjaEFsbChyZWdleHApO1xuICAgICAgICBpZiAobWF0Y2hBcnIpIHtcbiAgICAgICAgICAgIC8vIGNvbnN0IGZldGNoQXJyID0gWy4uLm1hdGNoQXJyXTtcbiAgICAgICAgICAgIGxldCBmZXRjaEFyciA9IFtdO1xuICAgICAgICAgICAgZm9yIChjb25zdCBpdGVyYXRvciBvZiBtYXRjaEFycikgXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmV0Y2hBcnIucHVzaChpdGVyYXRvcik7ICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZmV0Y2hBcnIsJysrKysrKysrKycsbWF0Y2hBcnIpO1xuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG9wdGlvbi5sZW5ndGg7IGluZGV4KyspIFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBmZXRjaEFycltpbmRleF07XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LnJlcGxhY2UoZWxlbWVudFswXSxvcHRpb25baW5kZXhdKTsgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICAgIC8vIGNvbnN0IHNlYXJjaGVyID0ga2V5LnNwbGl0KCcuJyk7XG4gICAgXG4gICAgLy8gbGV0IGRhdGEgPSB3aW4ubGFuZ3VhZ2VzW19sYW5ndWFnZV07XG4gICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBzZWFyY2hlci5sZW5ndGg7IGkrKykge1xuICAgIC8vICAgICBkYXRhID0gZGF0YVtzZWFyY2hlcltpXV07XG4gICAgLy8gICAgIGlmICghZGF0YSkge1xuICAgIC8vICAgICAgICAgcmV0dXJuICcnO1xuICAgIC8vICAgICB9XG4gICAgLy8gfVxuICAgIC8vIHJldHVybiBkYXRhIHx8ICcnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlU2NlbmVSZW5kZXJlcnMoKSB7IC8vIHZlcnkgY29zdGx5IGl0ZXJhdGlvbnNcbiAgICBcbiAgICBjb25zdCByb290Tm9kZXMgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpIS5jaGlsZHJlbjtcbiAgICAvLyB3YWxrIGFsbCBub2RlcyB3aXRoIGxvY2FsaXplIGxhYmVsIGFuZCB1cGRhdGVcbiAgICBjb25zdCBhbGxMb2NhbGl6ZWRMYWJlbHM6IGFueVtdID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb290Tm9kZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgbGV0IGxhYmVscyA9IHJvb3ROb2Rlc1tpXS5nZXRDb21wb25lbnRzSW5DaGlsZHJlbignTG9jYWxpemVkTGFiZWwnKTtcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoYWxsTG9jYWxpemVkTGFiZWxzLCBsYWJlbHMpO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbExvY2FsaXplZExhYmVscy5sZW5ndGg7ICsraSkge1xuICAgICAgICBsZXQgbGFiZWwgPSBhbGxMb2NhbGl6ZWRMYWJlbHNbaV07XG4gICAgICAgIC8vIGlmKCFsYWJlbC5ub2RlLmFjdGl2ZSljb250aW51ZTtcbiAgICAgICAgbGFiZWwudXBkYXRlTGFiZWwoKTtcbiAgICB9XG4gICAgLy8gd2FsayBhbGwgbm9kZXMgd2l0aCBsb2NhbGl6ZSBzcHJpdGUgYW5kIHVwZGF0ZVxuICAgIGNvbnN0IGFsbExvY2FsaXplZFNwcml0ZXM6IGFueVtdID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb290Tm9kZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgbGV0IHNwcml0ZXMgPSByb290Tm9kZXNbaV0uZ2V0Q29tcG9uZW50c0luQ2hpbGRyZW4oJ0xvY2FsaXplZFNwcml0ZScpO1xuICAgICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShhbGxMb2NhbGl6ZWRTcHJpdGVzLCBzcHJpdGVzKTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxMb2NhbGl6ZWRTcHJpdGVzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGxldCBzcHJpdGUgPSBhbGxMb2NhbGl6ZWRTcHJpdGVzW2ldO1xuICAgICAgICBpZighc3ByaXRlLm5vZGUuYWN0aXZlKWNvbnRpbnVlO1xuICAgICAgICBzcHJpdGUudXBkYXRlU3ByaXRlKCk7XG4gICAgfVxufVxuLy8g5L6b5o+S5Lu25p+l6K+i5b2T5YmN6K+t6KiA5L2/55SoXG5jb25zdCB3aW4gPSB3aW5kb3cgYXMgYW55O1xud2luLmluaXRTb3VyY2UgPSBpbml0U291cmNlO1xud2luLl9sYW5ndWFnZURhdGEgPSB7XG4gICAgZ2V0IGxhbmd1YWdlKCkge1xuICAgICAgICByZXR1cm4gX2xhbmd1YWdlO1xuICAgIH0sXG4gICAgaW5pdChsYW5nOiBzdHJpbmcpIHtcbiAgICAgICAgaW5pdChsYW5nKTtcbiAgICB9LFxuICAgIHVwZGF0ZVNjZW5lUmVuZGVyZXJzKCkge1xuICAgICAgICB1cGRhdGVTY2VuZVJlbmRlcmVycygpO1xuICAgIH0sXG59O1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/utils/AniUtil.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e51ebQiMxlHk5J6Gc5jaRvq', 'AniUtil');
// script/utils/AniUtil.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AniUtil = void 0;
var SpriteToHome_1 = require("../common/effect/SpriteToHome");
var UIManager_1 = require("../game/common/UIManager");
var GameUtils_1 = require("../game/GameUtils");
var Utils_1 = require("./Utils");
var AniUtil = /** @class */ (function () {
    function AniUtil() {
    }
    AniUtil.JumpTo2 = function (player, wPosOfTarget, top, scaleFrom, scaleTo, effboom, end) {
        if (top === void 0) { top = 300; }
        if (scaleFrom === void 0) { scaleFrom = 1; }
        if (scaleTo === void 0) { scaleTo = 1; }
        if (effboom === void 0) { effboom = false; }
        var wPosOfPlayer = player.convertToWorldSpaceAR(cc.v2(0, 0));
        var wPosOfStart = cc.v2(wPosOfPlayer.x, wPosOfTarget.y);
        var skin_x = new cc.Node("skin_x");
        skin_x.position = wPosOfStart;
        UIManager_1.ui.addEffectAR(skin_x);
        var skin_y = new cc.Node("skin_y");
        skin_y.position = cc.v2(0, wPosOfPlayer.y - wPosOfTarget.y);
        skin_y.parent = skin_x;
        var cloneIcon = cc.instantiate(player);
        cloneIcon.active = true;
        cloneIcon.scale = scaleFrom;
        cloneIcon.position = cc.v2(0, 0);
        cloneIcon.parent = skin_y;
        var step = 3;
        var tryRemoveClone = function () {
            if (--step <= 0) {
                end && end();
                if (effboom) {
                    GameUtils_1.GameUtils.addEffBoom(wPosOfTarget);
                }
                Utils_1.Utils.removeNode(skin_x);
            }
        };
        var tx = skin_x.x + (wPosOfTarget.x - wPosOfStart.x);
        var ty = skin_y.y < 0 ? top : skin_y.y + top; //起点位置与终点位置谁高谁低
        cc.tween(skin_x).to(0.5, { x: tx })
            .call(function () {
            tryRemoveClone();
        })
            .start();
        cc.tween(skin_y)
            .to(0.25, { y: ty }, { easing: cc.easing.sineOut })
            .to(0.25, { y: 0 }, { easing: cc.easing.sineIn })
            .call(function () {
            tryRemoveClone();
        }).start();
        cc.tween(cloneIcon)
            .to(0.5, { scale: scaleTo })
            // .to(0.3, { scale: scaleFrom })
            .call(function () {
            tryRemoveClone();
        })
            .start();
    };
    AniUtil.JumpTo = function (player, wPosOfTarget, scale, soundEffcet, easingBack) {
        if (scale === void 0) { scale = 1; }
        if (easingBack === void 0) { easingBack = false; }
        var wPosOfPlayer = player.convertToWorldSpaceAR(cc.v2(0, 0));
        var wPosOfStart = cc.v2(wPosOfPlayer.x, wPosOfTarget.y);
        var cloneIcon = cc.instantiate(player);
        cloneIcon.position = cc.v2(0, wPosOfPlayer.y - wPosOfTarget.y);
        cloneIcon.scale = scale;
        var skin = new cc.Node("skin");
        skin.addChild(cloneIcon);
        skin.position = wPosOfStart;
        UIManager_1.ui.addEffectAR(skin);
        var step = 2;
        var tryRemoveClone = function () {
            if (--step <= 0) {
                soundEffcet && soundEffcet();
                skin.removeFromParent();
            }
        };
        var tx = skin.x + (wPosOfTarget.x - wPosOfStart.x);
        var ty = cloneIcon.y < 0 ? 300 : cloneIcon.y + 300; //起点位置与终点位置谁高谁低
        cc.tween(skin).to(0.6, { x: tx })
            .call(function () {
            tryRemoveClone();
        })
            .start();
        if (easingBack) {
            cc.tween(cloneIcon)
                .to(0.3, { y: ty }, { easing: cc.easing.sineOut })
                .to(0.3, { y: -50, scale: 1 }, { easing: cc.easing.sineIn })
                .to(0.2, { y: 10, scale: 1 }, { easing: cc.easing.sineOut })
                .to(0.15, { y: 0, scale: 1 }, { easing: cc.easing.sineOut })
                .call(function () {
                tryRemoveClone();
            })
                .start();
        }
        else {
            cc.tween(cloneIcon)
                .to(0.3, { y: ty }, { easing: cc.easing.sineOut })
                .to(0.3, { y: 0, scale: 1 }, { easing: cc.easing.sineIn })
                .call(function () {
                tryRemoveClone();
            })
                .start();
        }
    };
    /**
   * 收获金币或钻石的特效
   * @param spriteFrames
   * @param targetNode
   */
    AniUtil.createEffectSpriteHome = function (startNode, targetNode, spriteFrames, callback, num, scale) {
        if (num === void 0) { num = 5; }
        if (scale === void 0) { scale = 1; }
        var effNum = num; //Utils.randomInt(num, num * 2);
        var startBattleWorldPos = startNode.convertToWorldSpaceAR(cc.v2(0, 0));
        var worldEndPos = targetNode.convertToWorldSpaceAR(new cc.Vec2(0, 0));
        for (var i = 0; i < effNum; i++) {
            var time = Utils_1.Utils.randomInt(0, 300);
            setTimeout(function () {
                var index = Utils_1.Utils.randomInt(0, spriteFrames.length);
                var frame = spriteFrames[index];
                SpriteToHome_1.default.create(frame, cc.v2(startBattleWorldPos.x, startBattleWorldPos.y), worldEndPos, false, callback, scale);
            }, time);
        }
    };
    // /**
    //  * 入库的金币
    //  * @param startNode 起始点
    //  */
    // public static effectCollectCoins(startNode: cc.Node,targetNode:cc.Node) {
    //     if (!startNode) {
    //         // startNode = new cc.Node();
    //         // startNode.x = 0;
    //         // startNode.y = 0;
    //         // ui.node_effect.addChild(startNode);
    //         // this.createEffectSpriteHome(startNode, UIManager.instance.topResView.icon_coin, UIManager.instance.spriteFramesManager.coins, () => {
    //         // });
    //         // startNode.removeFromParent();
    //     } else {                    
    //         let frames = [startNode.getComponent(cc.Sprite).spriteFrame];
    //         this.createEffectSpriteHome(startNode, targetNode, frames, () => {
    //         });
    //     }
    //     setTimeout(() => {
    //         Utils.PlayCoinsFlySound(3);
    //     }, 1000);
    // }
    //     /**
    //      * 入库的钻石
    //      * @param startNode 起始点
    //      */
    //     public static effectCollectDiamond(startNode: cc.Node) {
    //         if (!startNode) {
    //             startNode = new cc.Node();
    //             startNode.x = 0;
    //             startNode.y = 0;
    //             UIManager.instance.node_effect.addChild(startNode);
    //             this.createEffectSpriteHome(startNode, UIManager.instance.topResView.icon_diamond, UIManager.instance.spriteFramesManager.diamonds, () => {
    //                 //播放钻石入库音效
    //             });
    //             startNode.removeFromParent();
    //         } else {
    //             this.createEffectSpriteHome(startNode, UIManager.instance.topResView.icon_diamond, UIManager.instance.spriteFramesManager.diamonds, () => {
    //                 //播放钻石入库音效
    //             });
    //         }
    //         setTimeout(() => {
    //             Utils.PlayCoinsFlySound(3);
    //         }, 1000);
    //     }
    AniUtil.aniWillShow = function (node) {
        node.opacity = 0;
        node.scale = 0.7;
    };
    AniUtil.aniShow = function (node, next) {
        node.stopAllActions();
        node.scale = 0.3;
        cc.tween(node).to(0.3, { opacity: 255, scale: 1 }, { easing: cc.easing.backOut })
            .call(function () {
            next && next();
        })
            .start();
    };
    AniUtil.aniHide = function (node, next) {
        node.stopAllActions();
        cc.tween(node).to(0.3, { opacity: 0, scale: 0.3 }, { easing: cc.easing.sineOut })
            .call(function () {
            next && next();
        })
            .start();
    };
    AniUtil.aniShaking = function (node, isReprat) {
        if (isReprat === void 0) { isReprat = true; }
        node.stopAllActions();
        node.angle = 0;
        if (isReprat) {
            cc.tween(node)
                .repeatForever(cc.tween(node)
                .to(0.1, { angle: -8 }, { easing: cc.easing.sineOut })
                .to(0.1, { angle: 5 }, { easing: cc.easing.sineOut })
                .to(0.1, { angle: -3 }, { easing: cc.easing.sineOut })
                .to(0.1, { angle: 1.5 }, { easing: cc.easing.sineOut })
                .to(0.1, { angle: 0 }, { easing: cc.easing.sineOut })
                .delay(0.5))
                .start();
        }
        else {
            cc.tween(node)
                .to(0.1, { angle: -8 }, { easing: cc.easing.sineOut })
                .to(0.1, { angle: 5 }, { easing: cc.easing.sineOut })
                .to(0.1, { angle: -3 }, { easing: cc.easing.sineOut })
                .to(0.1, { angle: 1.5 }, { easing: cc.easing.sineOut })
                .to(0.1, { angle: 0 }, { easing: cc.easing.sineOut })
                .delay(0.5)
                .start();
        }
    };
    AniUtil.aniHeart = function (node, cyc, constant) {
        if (cyc === void 0) { cyc = 0.2; }
        node.stopAllActions();
        node.angle = 0;
        cc.tween(node)
            .repeatForever(cc.tween(node)
            .to(constant ? cyc : cyc / 2, { scale: 1.2 }, { easing: cc.easing.sineOut })
            .to(cyc, { scale: 1 }, { easing: cc.easing.sineOut })
            .delay(constant ? 0 : 0.5))
            .start();
    };
    AniUtil.aniHeartHappy = function (node) {
        node.stopAllActions();
        var by = node.y;
        var ty = node.y + 30;
        cc.tween(node)
            .repeatForever(cc.tween(node)
            .to(0.1, { scaleX: 1.1, scaleY: 0.8 }, { easing: cc.easing.sineOut })
            .to(0.1, { scaleX: 1, scaleY: 1, y: ty }, { easing: cc.easing.sineOut })
            .to(0.1, { scaleX: 1, scaleY: 1, y: by }, { easing: cc.easing.sineIn })
            .to(0.1, { scaleX: 1.1, scaleY: 0.8 }, { easing: cc.easing.sineOut })
            .to(0.1, { scaleX: 1, scaleY: 1 }, { easing: cc.easing.sineIn })
            .delay(0.2))
            .start();
    };
    AniUtil.aniDou = function (node, next) {
        cc.tween(node)
            .to(0.1, { scaleY: 1.4, scaleX: 0.7 }, { easing: cc.easing.sineOut })
            .to(0.05, { scaleY: 0.9, scaleX: 1.1 }, { easing: cc.easing.sineOut })
            .to(0.08, { scaleY: 1.1, scaleX: 0.9 }, { easing: cc.easing.sineOut })
            .to(0.08, { scaleY: 1, scaleX: 1 }, { easing: cc.easing.sineOut })
            .call(function () {
            next && next();
        })
            .start();
    };
    AniUtil.aniShakeHead = function (node, next) {
        cc.tween(node)
            .to(0.05, { x: -6 }, { easing: cc.easing.sineOut })
            .to(0.08, { x: 6 }, { easing: cc.easing.sineOut })
            .to(0.07, { x: -5 }, { easing: cc.easing.sineOut })
            .to(0.06, { x: 4 }, { easing: cc.easing.sineOut })
            .to(0.05, { x: -3 }, { easing: cc.easing.sineOut })
            .to(0.04, { x: 2 }, { easing: cc.easing.sineOut })
            .to(0.03, { x: -1 }, { easing: cc.easing.sineOut })
            .to(0.02, { x: 0 }, { easing: cc.easing.sineOut })
            .call(function () {
            next && next();
        })
            .start();
    };
    //上下浮动
    AniUtil.aniUpDown = function (node, time, y) {
        if (time === void 0) { time = 0.5; }
        if (y === void 0) { y = 20; }
        if (cc.isValid(node)) {
            node.stopAllActions();
            var pos = cc.v2(node.x, node.y);
            cc.tween(node)
                .repeatForever(cc.tween(node)
                .to(time, { y: pos.y + y })
                .to(time, { y: pos.y }))
                .start();
        }
    };
    //
    AniUtil.rotation = function (node, time) {
        if (time === void 0) { time = 0.5; }
        if (cc.isValid(node)) {
            node.stopAllActions();
            cc.tween(node)
                .repeatForever(cc.tween(node)
                .to(time, { angle: 360 })
                .to(0, { angle: 0 }))
                .start();
        }
    };
    return AniUtil;
}());
exports.AniUtil = AniUtil;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdXRpbHMvQW5pVXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4REFBeUQ7QUFDekQsc0RBQThDO0FBQzlDLCtDQUE4QztBQUM5QyxpQ0FBZ0M7QUFFaEM7SUFBQTtJQTJTQSxDQUFDO0lBMVNpQixlQUFPLEdBQXJCLFVBQXNCLE1BQWUsRUFBRSxZQUFxQixFQUFFLEdBQWlCLEVBQUUsU0FBcUIsRUFBRSxPQUFtQixFQUFFLE9BQXdCLEVBQUUsR0FBYztRQUF2RyxvQkFBQSxFQUFBLFNBQWlCO1FBQUUsMEJBQUEsRUFBQSxhQUFxQjtRQUFFLHdCQUFBLEVBQUEsV0FBbUI7UUFBRSx3QkFBQSxFQUFBLGVBQXdCO1FBQ2pKLElBQUksWUFBWSxHQUFHLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdELElBQUksV0FBVyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFeEQsSUFBSSxNQUFNLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ25DLE1BQU0sQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDO1FBQzlCLGNBQUUsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFdkIsSUFBSSxNQUFNLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ25DLE1BQU0sQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsWUFBWSxDQUFDLENBQUMsR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUQsTUFBTSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFFdkIsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFD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QUMsSUFBSSxDQUFDO2lCQUNULEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztpQkFDMUIsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FDOUI7aUJBQ0EsS0FBSyxFQUFFLENBQUM7U0FDaEI7SUFDTCxDQUFDO0lBQ0QsRUFBRTtJQUNZLGdCQUFRLEdBQXRCLFVBQXVCLElBQWEsRUFBRSxJQUFrQjtRQUFsQixxQkFBQSxFQUFBLFVBQWtCO1FBQ3BELElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNsQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDdEIsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7aUJBQ1QsYUFBYSxDQUNWLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO2lCQUNULEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUM7aUJBQ3hCLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FDM0I7aUJBQ0EsS0FBSyxFQUFFLENBQUM7U0FDaEI7SUFDTCxDQUFDO0lBQ0wsY0FBQztBQUFELENBM1NBLEFBMlNDLElBQUE7QUEzU1ksMEJBQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3ByaXRlVG9Ib21lIGZyb20gXCIuLi9jb21tb24vZWZmZWN0L1Nwcml0ZVRvSG9tZVwiO1xuaW1wb3J0IHsgdWkgfSBmcm9tIFwiLi4vZ2FtZS9jb21tb24vVUlNYW5hZ2VyXCI7XG5pbXBvcnQgeyBHYW1lVXRpbHMgfSBmcm9tIFwiLi4vZ2FtZS9HYW1lVXRpbHNcIjtcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSBcIi4vVXRpbHNcIjtcblxuZXhwb3J0IGNsYXNzIEFuaVV0aWwge1xuICAgIHB1YmxpYyBzdGF0aWMgSnVtcFRvMihwbGF5ZXI6IGNjLk5vZGUsIHdQb3NPZlRhcmdldDogY2MuVmVjMiwgdG9wOiBudW1iZXIgPSAzMDAsIHNjYWxlRnJvbTogbnVtYmVyID0gMSwgc2NhbGVUbzogbnVtYmVyID0gMSwgZWZmYm9vbTogYm9vbGVhbiA9IGZhbHNlLCBlbmQ/OiBGdW5jdGlvbikge1xuICAgICAgICBsZXQgd1Bvc09mUGxheWVyID0gcGxheWVyLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAwKSk7XG4gICAgICAgIGxldCB3UG9zT2ZTdGFydCA9IGNjLnYyKHdQb3NPZlBsYXllci54LCB3UG9zT2ZUYXJnZXQueSk7XG5cbiAgICAgICAgbGV0IHNraW5feCA9IG5ldyBjYy5Ob2RlKFwic2tpbl94XCIpO1xuICAgICAgICBza2luX3gucG9zaXRpb24gPSB3UG9zT2ZTdGFydDtcbiAgICAgICAgdWkuYWRkRWZmZWN0QVIoc2tpbl94KTtcblxuICAgICAgICBsZXQgc2tpbl95ID0gbmV3IGNjLk5vZGUoXCJza2luX3lcIik7XG4gICAgICAgIHNraW5feS5wb3NpdGlvbiA9IGNjLnYyKDAsIHdQb3NPZlBsYXllci55IC0gd1Bvc09mVGFyZ2V0LnkpO1xuICAgICAgICBza2luX3kucGFyZW50ID0gc2tpbl94O1xuXG4gICAgICAgIGxldCBjbG9uZUljb24gPSBjYy5pbnN0YW50aWF0ZShwbGF5ZXIpO1xuICAgICAgICBjbG9uZUljb24uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgY2xvbmVJY29uLnNjYWxlID0gc2NhbGVGcm9tO1xuICAgICAgICBjbG9uZUljb24ucG9zaXRpb24gPSBjYy52MigwLCAwKTtcbiAgICAgICAgY2xvbmVJY29uLnBhcmVudCA9IHNraW5feTtcblxuICAgICAgICBsZXQgc3RlcCA9IDM7XG4gICAgICAgIGxldCB0cnlSZW1vdmVDbG9uZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmICgtLXN0ZXAgPD0gMCkge1xuICAgICAgICAgICAgICAgIGVuZCAmJiBlbmQoKTtcbiAgICAgICAgICAgICAgICBpZiAoZWZmYm9vbSkge1xuICAgICAgICAgICAgICAgICAgICBHYW1lVXRpbHMuYWRkRWZmQm9vbSh3UG9zT2ZUYXJnZXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBVdGlscy5yZW1vdmVOb2RlKHNraW5feCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdHggPSBza2luX3gueCArICh3UG9zT2ZUYXJnZXQueCAtIHdQb3NPZlN0YXJ0LngpO1xuICAgICAgICBsZXQgdHkgPSBza2luX3kueSA8IDAgPyB0b3AgOiBza2luX3kueSArIHRvcDsvL+i1t+eCueS9jee9ruS4jue7iOeCueS9jee9ruiwgemrmOiwgeS9jlxuXG4gICAgICAgIGNjLnR3ZWVuKHNraW5feCkudG8oMC41LCB7IHg6IHR4IH0pXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdHJ5UmVtb3ZlQ2xvbmUoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgY2MudHdlZW4oc2tpbl95KVxuICAgICAgICAgICAgLnRvKDAuMjUsIHsgeTogdHkgfSwgeyBlYXNpbmc6IGNjLmVhc2luZy5zaW5lT3V0IH0pXG4gICAgICAgICAgICAudG8oMC4yNSwgeyB5OiAwIH0sIHsgZWFzaW5nOiBjYy5lYXNpbmcuc2luZUluIH0pXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdHJ5UmVtb3ZlQ2xvbmUoKTtcbiAgICAgICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgICAgIGNjLnR3ZWVuKGNsb25lSWNvbilcbiAgICAgICAgICAgIC50bygwLjUsIHsgc2NhbGU6IHNjYWxlVG8gfSlcbiAgICAgICAgICAgIC8vIC50bygwLjMsIHsgc2NhbGU6IHNjYWxlRnJvbSB9KVxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRyeVJlbW92ZUNsb25lKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBKdW1wVG8ocGxheWVyOiBjYy5Ob2RlLCB3UG9zT2ZUYXJnZXQ6IGNjLlZlYzIsIHNjYWxlOiBudW1iZXIgPSAxLCBzb3VuZEVmZmNldDogRnVuY3Rpb24sIGVhc2luZ0JhY2s6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICBsZXQgd1Bvc09mUGxheWVyID0gcGxheWVyLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAwKSk7XG4gICAgICAgIGxldCB3UG9zT2ZTdGFydCA9IGNjLnYyKHdQb3NPZlBsYXllci54LCB3UG9zT2ZUYXJnZXQueSk7XG5cbiAgICAgICAgbGV0IGNsb25lSWNvbiA9IGNjLmluc3RhbnRpYXRlKHBsYXllcik7XG4gICAgICAgIGNsb25lSWNvbi5wb3NpdGlvbiA9IGNjLnYyKDAsIHdQb3NPZlBsYXllci55IC0gd1Bvc09mVGFyZ2V0LnkpO1xuICAgICAgICBjbG9uZUljb24uc2NhbGUgPSBzY2FsZTtcbiAgICAgICAgbGV0IHNraW4gPSBuZXcgY2MuTm9kZShcInNraW5cIik7XG4gICAgICAgIHNraW4uYWRkQ2hpbGQoY2xvbmVJY29uKTtcbiAgICAgICAgc2tpbi5wb3NpdGlvbiA9IHdQb3NPZlN0YXJ0O1xuICAgICAgICB1aS5hZGRFZmZlY3RBUihza2luKTtcblxuICAgICAgICBsZXQgc3RlcCA9IDI7XG4gICAgICAgIGxldCB0cnlSZW1vdmVDbG9uZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmICgtLXN0ZXAgPD0gMCkge1xuICAgICAgICAgICAgICAgIHNvdW5kRWZmY2V0ICYmIHNvdW5kRWZmY2V0KCk7XG4gICAgICAgICAgICAgICAgc2tpbi5yZW1vdmVGcm9tUGFyZW50KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdHggPSBza2luLnggKyAod1Bvc09mVGFyZ2V0LnggLSB3UG9zT2ZTdGFydC54KTtcbiAgICAgICAgbGV0IHR5ID0gY2xvbmVJY29uLnkgPCAwID8gMzAwIDogY2xvbmVJY29uLnkgKyAzMDA7Ly/otbfngrnkvY3nva7kuI7nu4jngrnkvY3nva7osIHpq5josIHkvY5cbiAgICAgICAgY2MudHdlZW4oc2tpbikudG8oMC42LCB7IHg6IHR4IH0pXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdHJ5UmVtb3ZlQ2xvbmUoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgaWYgKGVhc2luZ0JhY2spIHtcbiAgICAgICAgICAgIGNjLnR3ZWVuKGNsb25lSWNvbilcbiAgICAgICAgICAgICAgICAudG8oMC4zLCB7IHk6IHR5IH0sIHsgZWFzaW5nOiBjYy5lYXNpbmcuc2luZU91dCB9KVxuICAgICAgICAgICAgICAgIC50bygwLjMsIHsgeTogLTUwLCBzY2FsZTogMSB9LCB7IGVhc2luZzogY2MuZWFzaW5nLnNpbmVJbiB9KVxuICAgICAgICAgICAgICAgIC50bygwLjIsIHsgeTogMTAsIHNjYWxlOiAxIH0sIHsgZWFzaW5nOiBjYy5lYXNpbmcuc2luZU91dCB9KVxuICAgICAgICAgICAgICAgIC50bygwLjE1LCB7IHk6IDAsIHNjYWxlOiAxIH0sIHsgZWFzaW5nOiBjYy5lYXNpbmcuc2luZU91dCB9KVxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5UmVtb3ZlQ2xvbmUoKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2MudHdlZW4oY2xvbmVJY29uKVxuICAgICAgICAgICAgICAgIC50bygwLjMsIHsgeTogdHkgfSwgeyBlYXNpbmc6IGNjLmVhc2luZy5zaW5lT3V0IH0pXG4gICAgICAgICAgICAgICAgLnRvKDAuMywgeyB5OiAwLCBzY2FsZTogMSB9LCB7IGVhc2luZzogY2MuZWFzaW5nLnNpbmVJbiB9KVxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5UmVtb3ZlQ2xvbmUoKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICog5pS26I636YeR5biB5oiW6ZK755+z55qE54m55pWIXG4gICAqIEBwYXJhbSBzcHJpdGVGcmFtZXMgXG4gICAqIEBwYXJhbSB0YXJnZXROb2RlIFxuICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZUVmZmVjdFNwcml0ZUhvbWUoc3RhcnROb2RlOiBjYy5Ob2RlLCB0YXJnZXROb2RlOiBjYy5Ob2RlLCBzcHJpdGVGcmFtZXM6IEFycmF5PGNjLlNwcml0ZUZyYW1lPiwgY2FsbGJhY2s6IEZ1bmN0aW9uLCBudW06IG51bWJlciA9IDUsIHNjYWxlOiBudW1iZXIgPSAxKSB7XG4gICAgICAgIGxldCBlZmZOdW0gPSBudW0vL1V0aWxzLnJhbmRvbUludChudW0sIG51bSAqIDIpO1xuICAgICAgICBsZXQgc3RhcnRCYXR0bGVXb3JsZFBvcyA9IHN0YXJ0Tm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpO1xuICAgICAgICBsZXQgd29ybGRFbmRQb3MgPSB0YXJnZXROb2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihuZXcgY2MuVmVjMigwLCAwKSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWZmTnVtOyBpKyspIHtcbiAgICAgICAgICAgIGxldCB0aW1lID0gVXRpbHMucmFuZG9tSW50KDAsIDMwMCk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBVdGlscy5yYW5kb21JbnQoMCwgc3ByaXRlRnJhbWVzLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgbGV0IGZyYW1lID0gc3ByaXRlRnJhbWVzW2luZGV4XTtcbiAgICAgICAgICAgICAgICBTcHJpdGVUb0hvbWUuY3JlYXRlKGZyYW1lLCBjYy52MihzdGFydEJhdHRsZVdvcmxkUG9zLngsIHN0YXJ0QmF0dGxlV29ybGRQb3MueSksIHdvcmxkRW5kUG9zLCBmYWxzZSwgY2FsbGJhY2ssIHNjYWxlKTtcbiAgICAgICAgICAgIH0sIHRpbWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIC8qKlxuICAgIC8vICAqIOWFpeW6k+eahOmHkeW4gVxuICAgIC8vICAqIEBwYXJhbSBzdGFydE5vZGUg6LW35aeL54K5XG4gICAgLy8gICovXG4gICAgLy8gcHVibGljIHN0YXRpYyBlZmZlY3RDb2xsZWN0Q29pbnMoc3RhcnROb2RlOiBjYy5Ob2RlLHRhcmdldE5vZGU6Y2MuTm9kZSkge1xuICAgIC8vICAgICBpZiAoIXN0YXJ0Tm9kZSkge1xuICAgIC8vICAgICAgICAgLy8gc3RhcnROb2RlID0gbmV3IGNjLk5vZGUoKTtcbiAgICAvLyAgICAgICAgIC8vIHN0YXJ0Tm9kZS54ID0gMDtcbiAgICAvLyAgICAgICAgIC8vIHN0YXJ0Tm9kZS55ID0gMDtcbiAgICAvLyAgICAgICAgIC8vIHVpLm5vZGVfZWZmZWN0LmFkZENoaWxkKHN0YXJ0Tm9kZSk7XG4gICAgLy8gICAgICAgICAvLyB0aGlzLmNyZWF0ZUVmZmVjdFNwcml0ZUhvbWUoc3RhcnROb2RlLCBVSU1hbmFnZXIuaW5zdGFuY2UudG9wUmVzVmlldy5pY29uX2NvaW4sIFVJTWFuYWdlci5pbnN0YW5jZS5zcHJpdGVGcmFtZXNNYW5hZ2VyLmNvaW5zLCAoKSA9PiB7XG5cbiAgICAvLyAgICAgICAgIC8vIH0pO1xuICAgIC8vICAgICAgICAgLy8gc3RhcnROb2RlLnJlbW92ZUZyb21QYXJlbnQoKTtcbiAgICAvLyAgICAgfSBlbHNlIHsgICAgICAgICAgICAgICAgICAgIFxuXG4gICAgLy8gICAgICAgICBsZXQgZnJhbWVzID0gW3N0YXJ0Tm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZV07XG4gICAgLy8gICAgICAgICB0aGlzLmNyZWF0ZUVmZmVjdFNwcml0ZUhvbWUoc3RhcnROb2RlLCB0YXJnZXROb2RlLCBmcmFtZXMsICgpID0+IHtcbiAgICAvLyAgICAgICAgIH0pO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIC8vICAgICAgICAgVXRpbHMuUGxheUNvaW5zRmx5U291bmQoMyk7XG4gICAgLy8gICAgIH0sIDEwMDApO1xuICAgIC8vIH1cbiAgICAvLyAgICAgLyoqXG4gICAgLy8gICAgICAqIOWFpeW6k+eahOmSu+efs1xuICAgIC8vICAgICAgKiBAcGFyYW0gc3RhcnROb2RlIOi1t+Wni+eCuVxuICAgIC8vICAgICAgKi9cbiAgICAvLyAgICAgcHVibGljIHN0YXRpYyBlZmZlY3RDb2xsZWN0RGlhbW9uZChzdGFydE5vZGU6IGNjLk5vZGUpIHtcbiAgICAvLyAgICAgICAgIGlmICghc3RhcnROb2RlKSB7XG4gICAgLy8gICAgICAgICAgICAgc3RhcnROb2RlID0gbmV3IGNjLk5vZGUoKTtcbiAgICAvLyAgICAgICAgICAgICBzdGFydE5vZGUueCA9IDA7XG4gICAgLy8gICAgICAgICAgICAgc3RhcnROb2RlLnkgPSAwO1xuICAgIC8vICAgICAgICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5ub2RlX2VmZmVjdC5hZGRDaGlsZChzdGFydE5vZGUpO1xuICAgIC8vICAgICAgICAgICAgIHRoaXMuY3JlYXRlRWZmZWN0U3ByaXRlSG9tZShzdGFydE5vZGUsIFVJTWFuYWdlci5pbnN0YW5jZS50b3BSZXNWaWV3Lmljb25fZGlhbW9uZCwgVUlNYW5hZ2VyLmluc3RhbmNlLnNwcml0ZUZyYW1lc01hbmFnZXIuZGlhbW9uZHMsICgpID0+IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgLy/mkq3mlL7pkrvnn7PlhaXlupPpn7PmlYhcbiAgICAvLyAgICAgICAgICAgICB9KTtcbiAgICAvLyAgICAgICAgICAgICBzdGFydE5vZGUucmVtb3ZlRnJvbVBhcmVudCgpO1xuICAgIC8vICAgICAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmNyZWF0ZUVmZmVjdFNwcml0ZUhvbWUoc3RhcnROb2RlLCBVSU1hbmFnZXIuaW5zdGFuY2UudG9wUmVzVmlldy5pY29uX2RpYW1vbmQsIFVJTWFuYWdlci5pbnN0YW5jZS5zcHJpdGVGcmFtZXNNYW5hZ2VyLmRpYW1vbmRzLCAoKSA9PiB7XG4gICAgLy8gICAgICAgICAgICAgICAgIC8v5pKt5pS+6ZK755+z5YWl5bqT6Z+z5pWIXG4gICAgLy8gICAgICAgICAgICAgfSk7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAvLyAgICAgICAgICAgICBVdGlscy5QbGF5Q29pbnNGbHlTb3VuZCgzKTtcbiAgICAvLyAgICAgICAgIH0sIDEwMDApO1xuICAgIC8vICAgICB9XG4gICAgcHVibGljIHN0YXRpYyBhbmlXaWxsU2hvdyhub2RlOiBjYy5Ob2RlKSB7XG4gICAgICAgIG5vZGUub3BhY2l0eSA9IDA7XG4gICAgICAgIG5vZGUuc2NhbGUgPSAwLjc7XG4gICAgfVxuICAgIHB1YmxpYyBzdGF0aWMgYW5pU2hvdyhub2RlOiBjYy5Ob2RlLCBuZXh0PzogRnVuY3Rpb24pIHtcbiAgICAgICAgbm9kZS5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICBub2RlLnNjYWxlID0gMC4zO1xuICAgICAgICBjYy50d2Vlbihub2RlKS50bygwLjMsIHsgb3BhY2l0eTogMjU1LCBzY2FsZTogMSB9LCB7IGVhc2luZzogY2MuZWFzaW5nLmJhY2tPdXQgfSlcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICBuZXh0ICYmIG5leHQoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhcnQoKTtcbiAgICB9XG4gICAgcHVibGljIHN0YXRpYyBhbmlIaWRlKG5vZGU6IGNjLk5vZGUsIG5leHQ/OiBGdW5jdGlvbikge1xuICAgICAgICBub2RlLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIGNjLnR3ZWVuKG5vZGUpLnRvKDAuMywgeyBvcGFjaXR5OiAwLCBzY2FsZTogMC4zIH0sIHsgZWFzaW5nOiBjYy5lYXNpbmcuc2luZU91dCB9KVxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIG5leHQgJiYgbmV4dCgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgYW5pU2hha2luZyhub2RlOiBjYy5Ob2RlLCBpc1JlcHJhdCA9IHRydWUpIHtcbiAgICAgICAgbm9kZS5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICBub2RlLmFuZ2xlID0gMDtcbiAgICAgICAgaWYgKGlzUmVwcmF0KSB7XG5cbiAgICAgICAgICAgIGNjLnR3ZWVuKG5vZGUpXG4gICAgICAgICAgICAgICAgLnJlcGVhdEZvcmV2ZXIoXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKG5vZGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAudG8oMC4xLCB7IGFuZ2xlOiAtOCB9LCB7IGVhc2luZzogY2MuZWFzaW5nLnNpbmVPdXQgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjEsIHsgYW5nbGU6IDUgfSwgeyBlYXNpbmc6IGNjLmVhc2luZy5zaW5lT3V0IH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAudG8oMC4xLCB7IGFuZ2xlOiAtMyB9LCB7IGVhc2luZzogY2MuZWFzaW5nLnNpbmVPdXQgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjEsIHsgYW5nbGU6IDEuNSB9LCB7IGVhc2luZzogY2MuZWFzaW5nLnNpbmVPdXQgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjEsIHsgYW5nbGU6IDAgfSwgeyBlYXNpbmc6IGNjLmVhc2luZy5zaW5lT3V0IH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAuZGVsYXkoMC41KVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNjLnR3ZWVuKG5vZGUpXG4gICAgICAgICAgICAgICAgLnRvKDAuMSwgeyBhbmdsZTogLTggfSwgeyBlYXNpbmc6IGNjLmVhc2luZy5zaW5lT3V0IH0pXG4gICAgICAgICAgICAgICAgLnRvKDAuMSwgeyBhbmdsZTogNSB9LCB7IGVhc2luZzogY2MuZWFzaW5nLnNpbmVPdXQgfSlcbiAgICAgICAgICAgICAgICAudG8oMC4xLCB7IGFuZ2xlOiAtMyB9LCB7IGVhc2luZzogY2MuZWFzaW5nLnNpbmVPdXQgfSlcbiAgICAgICAgICAgICAgICAudG8oMC4xLCB7IGFuZ2xlOiAxLjUgfSwgeyBlYXNpbmc6IGNjLmVhc2luZy5zaW5lT3V0IH0pXG4gICAgICAgICAgICAgICAgLnRvKDAuMSwgeyBhbmdsZTogMCB9LCB7IGVhc2luZzogY2MuZWFzaW5nLnNpbmVPdXQgfSlcbiAgICAgICAgICAgICAgICAuZGVsYXkoMC41KVxuICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBzdGF0aWMgYW5pSGVhcnQobm9kZTogY2MuTm9kZSwgY3ljOiBudW1iZXIgPSAwLjIsIGNvbnN0YW50PzogYm9vbGVhbikge1xuICAgICAgICBub2RlLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIG5vZGUuYW5nbGUgPSAwO1xuICAgICAgICBjYy50d2Vlbihub2RlKVxuICAgICAgICAgICAgLnJlcGVhdEZvcmV2ZXIoXG4gICAgICAgICAgICAgICAgY2MudHdlZW4obm9kZSlcbiAgICAgICAgICAgICAgICAgICAgLnRvKGNvbnN0YW50ID8gY3ljIDogY3ljIC8gMiwgeyBzY2FsZTogMS4yIH0sIHsgZWFzaW5nOiBjYy5lYXNpbmcuc2luZU91dCB9KVxuICAgICAgICAgICAgICAgICAgICAudG8oY3ljLCB7IHNjYWxlOiAxIH0sIHsgZWFzaW5nOiBjYy5lYXNpbmcuc2luZU91dCB9KVxuICAgICAgICAgICAgICAgICAgICAuZGVsYXkoY29uc3RhbnQgPyAwIDogMC41KVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBhbmlIZWFydEhhcHB5KG5vZGU6IGNjLk5vZGUpIHtcbiAgICAgICAgbm9kZS5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICBsZXQgYnkgPSBub2RlLnk7XG4gICAgICAgIGxldCB0eSA9IG5vZGUueSArIDMwO1xuICAgICAgICBjYy50d2Vlbihub2RlKVxuICAgICAgICAgICAgLnJlcGVhdEZvcmV2ZXIoXG4gICAgICAgICAgICAgICAgY2MudHdlZW4obm9kZSlcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuMSwgeyBzY2FsZVg6IDEuMSwgc2NhbGVZOiAwLjggfSwgeyBlYXNpbmc6IGNjLmVhc2luZy5zaW5lT3V0IH0pXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjEsIHsgc2NhbGVYOiAxLCBzY2FsZVk6IDEsIHk6IHR5IH0sIHsgZWFzaW5nOiBjYy5lYXNpbmcuc2luZU91dCB9KVxuICAgICAgICAgICAgICAgICAgICAudG8oMC4xLCB7IHNjYWxlWDogMSwgc2NhbGVZOiAxLCB5OiBieSB9LCB7IGVhc2luZzogY2MuZWFzaW5nLnNpbmVJbiB9KVxuICAgICAgICAgICAgICAgICAgICAudG8oMC4xLCB7IHNjYWxlWDogMS4xLCBzY2FsZVk6IDAuOCB9LCB7IGVhc2luZzogY2MuZWFzaW5nLnNpbmVPdXQgfSlcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuMSwgeyBzY2FsZVg6IDEsIHNjYWxlWTogMSB9LCB7IGVhc2luZzogY2MuZWFzaW5nLnNpbmVJbiB9KVxuICAgICAgICAgICAgICAgICAgICAuZGVsYXkoMC4yKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgfVxuICAgIHB1YmxpYyBzdGF0aWMgYW5pRG91KG5vZGU6IGNjLk5vZGUsIG5leHQ/OiBGdW5jdGlvbikge1xuICAgICAgICBjYy50d2Vlbihub2RlKVxuICAgICAgICAgICAgLnRvKDAuMSwgeyBzY2FsZVk6IDEuNCwgc2NhbGVYOiAwLjcgfSwgeyBlYXNpbmc6IGNjLmVhc2luZy5zaW5lT3V0IH0pXG4gICAgICAgICAgICAudG8oMC4wNSwgeyBzY2FsZVk6IDAuOSwgc2NhbGVYOiAxLjEgfSwgeyBlYXNpbmc6IGNjLmVhc2luZy5zaW5lT3V0IH0pXG4gICAgICAgICAgICAudG8oMC4wOCwgeyBzY2FsZVk6IDEuMSwgc2NhbGVYOiAwLjkgfSwgeyBlYXNpbmc6IGNjLmVhc2luZy5zaW5lT3V0IH0pXG4gICAgICAgICAgICAudG8oMC4wOCwgeyBzY2FsZVk6IDEsIHNjYWxlWDogMSB9LCB7IGVhc2luZzogY2MuZWFzaW5nLnNpbmVPdXQgfSlcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICBuZXh0ICYmIG5leHQoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhcnQoKTtcbiAgICB9XG4gICAgcHVibGljIHN0YXRpYyBhbmlTaGFrZUhlYWQobm9kZTogY2MuTm9kZSwgbmV4dD86IEZ1bmN0aW9uKSB7XG4gICAgICAgIGNjLnR3ZWVuKG5vZGUpXG4gICAgICAgICAgICAudG8oMC4wNSwgeyB4OiAtNiB9LCB7IGVhc2luZzogY2MuZWFzaW5nLnNpbmVPdXQgfSlcbiAgICAgICAgICAgIC50bygwLjA4LCB7IHg6IDYgfSwgeyBlYXNpbmc6IGNjLmVhc2luZy5zaW5lT3V0IH0pXG4gICAgICAgICAgICAudG8oMC4wNywgeyB4OiAtNSB9LCB7IGVhc2luZzogY2MuZWFzaW5nLnNpbmVPdXQgfSlcbiAgICAgICAgICAgIC50bygwLjA2LCB7IHg6IDQgfSwgeyBlYXNpbmc6IGNjLmVhc2luZy5zaW5lT3V0IH0pXG4gICAgICAgICAgICAudG8oMC4wNSwgeyB4OiAtMyB9LCB7IGVhc2luZzogY2MuZWFzaW5nLnNpbmVPdXQgfSlcbiAgICAgICAgICAgIC50bygwLjA0LCB7IHg6IDIgfSwgeyBlYXNpbmc6IGNjLmVhc2luZy5zaW5lT3V0IH0pXG4gICAgICAgICAgICAudG8oMC4wMywgeyB4OiAtMSB9LCB7IGVhc2luZzogY2MuZWFzaW5nLnNpbmVPdXQgfSlcbiAgICAgICAgICAgIC50bygwLjAyLCB7IHg6IDAgfSwgeyBlYXNpbmc6IGNjLmVhc2luZy5zaW5lT3V0IH0pXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgbmV4dCAmJiBuZXh0KCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgLy/kuIrkuIvmta7liqhcbiAgICBwdWJsaWMgc3RhdGljIGFuaVVwRG93bihub2RlOiBjYy5Ob2RlLCB0aW1lOiBudW1iZXIgPSAwLjUsIHk6IG51bWJlciA9IDIwKTogdm9pZCB7XG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKG5vZGUpKSB7XG4gICAgICAgICAgICBub2RlLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgICAgICBsZXQgcG9zID0gY2MudjIobm9kZS54LCBub2RlLnkpXG4gICAgICAgICAgICBjYy50d2Vlbihub2RlKVxuICAgICAgICAgICAgICAgIC5yZXBlYXRGb3JldmVyKFxuICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbihub2RlKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvKHRpbWUsIHsgeTogcG9zLnkgKyB5IH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAudG8odGltZSwgeyB5OiBwb3MueSB9KVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvL1xuICAgIHB1YmxpYyBzdGF0aWMgcm90YXRpb24obm9kZTogY2MuTm9kZSwgdGltZTogbnVtYmVyID0gMC41KTogdm9pZCB7XG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKG5vZGUpKSB7XG4gICAgICAgICAgICBub2RlLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgICAgICBjYy50d2Vlbihub2RlKVxuICAgICAgICAgICAgICAgIC5yZXBlYXRGb3JldmVyKFxuICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbihub2RlKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvKHRpbWUsIHsgYW5nbGU6IDM2MCB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDAsIHsgYW5nbGU6IDAgfSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/merge/dataModule/PlayerModule.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b9091AjnB9Hj67aGxm4Vaq5', 'PlayerModule');
// script/merge/dataModule/PlayerModule.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.playerModule = void 0;
var DataModule_1 = require("./DataModule");
var PlayerModule = /** @class */ (function (_super) {
    __extends(PlayerModule, _super);
    function PlayerModule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PlayerModule.prototype.parseData = function (data) {
        _super.prototype.parseData.call(this, data);
    };
    PlayerModule.prototype.login = function (cb) {
        cb && cb();
    };
    return PlayerModule;
}(DataModule_1.default));
exports.default = PlayerModule;
exports.playerModule = new PlayerModule();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvbWVyZ2UvZGF0YU1vZHVsZS9QbGF5ZXJNb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUFzQztBQUV0QztJQUEwQyxnQ0FBVTtJQUFwRDs7SUFRQSxDQUFDO0lBUEcsZ0NBQVMsR0FBVCxVQUFVLElBQVM7UUFDZixpQkFBTSxTQUFTLFlBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELDRCQUFLLEdBQUwsVUFBTSxFQUFZO1FBQ2QsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUNMLG1CQUFDO0FBQUQsQ0FSQSxBQVFDLENBUnlDLG9CQUFVLEdBUW5EOztBQUNZLFFBQUEsWUFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGF0YU1vZHVsZSBmcm9tICcuL0RhdGFNb2R1bGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXJNb2R1bGUgZXh0ZW5kcyBEYXRhTW9kdWxlIHtcbiAgICBwYXJzZURhdGEoZGF0YTogYW55KTogdm9pZCB7XG4gICAgICAgIHN1cGVyLnBhcnNlRGF0YShkYXRhKTtcbiAgICB9XG5cbiAgICBsb2dpbihjYjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgY2IgJiYgY2IoKTtcbiAgICB9XG59XG5leHBvcnQgY29uc3QgcGxheWVyTW9kdWxlID0gbmV3IFBsYXllck1vZHVsZSgpO1xuXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/utils/Utils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0b537WzEsNMpqZojXSEjccf', 'Utils');
// script/utils/Utils.ts

"use strict";
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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
var GlobalDefines_1 = require("../common/consts/GlobalDefines");
var logger_1 = require("./logger");
var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.sleep = function (thisObj, duration) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        setTimeout(function () {
                            _this.invokeCallback(resolve);
                        }, thisObj, duration);
                    }).catch(function (reason) { })];
            });
        });
    };
    Utils.invokeCallback = function (cb) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        if (cb && typeof (cb) === 'function') {
            cb.apply(null, optionalParams);
        }
    };
    Utils.safeCallFunc = function (fn, thisObj) {
        if (fn && typeof fn === 'function') {
            fn.apply(thisObj);
        }
    };
    // Returns a random integer between min (included) and max (excluded)
    Utils.randomInt = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };
    // Returns a random integer between min (included) and max (included)
    Utils.randomIntInclusive = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    Utils.randomFloat = function (min, max) {
        return Math.random() * (max - min) + min;
    };
    Utils.randomByList = function (rateList) {
        rateList.map(function (value, index, array) { return (array[index] = ~~array[index - 1] + value); });
        var r = this.randomIntInclusive(1, rateList[rateList.length - 1]);
        for (var i = rateList.length - 1; i >= 0; i--) {
            var cur = rateList[i];
            var last = ~~rateList[i - 1];
            if (last < r && r <= cur) {
                return i;
            }
        }
        return -1;
    };
    // 获得数组内的随机值
    Utils.getRandomByArr = function (arr) {
        var index = this.randomInt(0, arr.length);
        return arr[index];
    };
    Utils.modByLimit = function (num, limit) {
        return (num - 1) % limit + 1;
    };
    Utils.isNullOrEmpty = function (str) {
        return !str || str == '' || str == 'null';
    };
    Utils.qrSceneOption = function (data) {
        if (!data) {
            return {};
        }
        var scene = decodeURIComponent(data);
        var option = {};
        for (var _i = 0, _a = scene.split('&'); _i < _a.length; _i++) {
            var t = _a[_i];
            var l = t.split('=');
            option[l[0]] = l[1];
        }
        return option;
    };
    Utils.formatTimeExt = function (sec, showHour) {
        if (showHour === void 0) { showHour = false; }
        if (~~sec <= 0) {
            return showHour ? '00时00分00秒' : '00分00秒';
        }
        var hour = Math.floor(sec / 3600).toString();
        var second = Math.floor(sec % 3600 % 60).toString();
        var minute = showHour ? Math.floor(sec % 3600 / 60) : Math.floor(sec / 60).toString();
        if (showHour) {
            var arr_1 = [hour, minute, second].map(function (n) { return (("" + n)[1] ? n : "0" + n); });
            return arr_1[0] + "\u65F6" + arr_1[1] + "\u5206" + arr_1[2] + "\u79D2";
        }
        var arr = [minute, second].map(function (n) { return (("" + n)[1] ? n : "0" + n); });
        return arr[0] + "\u5206" + arr[1] + "\u79D2";
    };
    Utils.formatMilTime = function (time) {
        if (time > 0) {
            var tmp = Math.ceil(time * 1000);
            return Math.floor(tmp / 1000) + "\u2033" + tmp % 1000;
        }
        return '0″000';
    };
    Utils.formatTime = function (sec, showHour) {
        if (showHour === void 0) { showHour = false; }
        if (~~sec <= 0) {
            return showHour ? '00:00:00' : '00:00';
        }
        var hour = Math.floor(sec / 3600).toString();
        var second = Math.floor(sec % 3600 % 60).toString();
        var minute = showHour ? Math.floor(sec % 3600 / 60) : Math.floor(sec / 60).toString();
        if (showHour) {
            return [hour, minute, second].map(function (n) { return (("" + n)[1] ? n : "0" + n); }).join(':');
        }
        return [minute, second].map(function (n) { return (("" + n)[1] ? n : "0" + n); }).join(':');
    };
    Utils.formatTime_Date = function (sec, showYear) {
        var d = new Date(sec * 1000);
        // Logger.debug("-------", sec, d);
        var month = (d.getMonth() + 1).toString();
        // Logger.debug("--", month);
        var date = d.getDate();
        // Logger.debug("--", date);
        if (showYear) {
            var year = d.getFullYear().toString();
            return [year, month, date].map(function (n) { return (("" + n)[1] ? n : "0" + n); }).join('.');
        }
        return [month, date].map(function (n) { return (("" + n)[1] ? n : "0" + n); }).join('.');
    };
    Utils.getWeekNumberNow = function (ss) {
        var now = new Date(ss);
        return this.getWeekNumber(now);
    };
    Utils.getWeekNumber = function (d) {
        // Copy date so don't modify original
        d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
        /*
         * Set to nearest Thursday: current date + 4 - current day number
         * Make Sunday's day number 7
         */
        d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
        // Get first day of year
        var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
        // Calculate full weeks to nearest Thursday
        var weekNo = Math.ceil((((d.getTime() - yearStart.getTime()) / 86400000) + 1) / 7);
        // Return array of year and week number
        return weekNo;
    };
    Utils.getMonthM = function (y, m) {
        if (m == 4 || m == 6 || m == 9 || m == 11)
            return 30;
        if (m == 2)
            return (y % 4 == 0 && y % 100 != 0) || y % 400 == 0 ? 29 : 28;
        return 31;
    };
    /**
     * 当前本地时间戳
     */
    Utils.getTimestamp = function () {
        return (new Date()).getTime();
    };
    /**
     *时间字任串传换成秒
     * timeStr:string "2020,8,27,0,0" 年，月，日，时，分
     */
    Utils.getOSSTime = function (timeStr) {
        if (this.isEmpty(timeStr)) {
            return 0;
        }
        var arr = timeStr.split(',');
        var date = new Date(parseInt(arr[0]), parseInt(arr[1]) - 1, parseInt(arr[2]), parseInt(arr[3]), parseInt(arr[4]), 0);
        var time = Math.floor(date.getTime() / 1000);
        return time;
    };
    Utils.solveString = function (str, len) {
        if (!str) {
            return '';
        }
        var currentlen = 0;
        var currentStr = '';
        for (var i = 0; i < str.length; i++) {
            if (str.charCodeAt(i) > 127 || str.charCodeAt(i) == 94) {
                currentlen += 2;
            }
            else {
                currentlen++;
            }
            if (currentlen > len) {
                return currentStr + "...";
            }
            currentStr += str.charAt(i);
        }
        return currentStr;
    };
    // 获取中英文混合字符串长度
    Utils.mixedStrLen = function (str) {
        var strLen = 0;
        for (var i = 0; i < str.length; i++) {
            if (str.substr(i, 1).charCodeAt(0) > 255) {
                strLen += 2;
            }
            else {
                strLen++;
            }
        }
        return strLen;
    };
    Utils.angleToRadian = function (angle) {
        return angle * Math.PI / 180;
    };
    Utils.updateNodeSpriteFrame = function (url, node, isFromNet, next, ext) {
        if (isFromNet === void 0) { isFromNet = false; }
        if (next === void 0) { next = undefined; }
        if (ext === void 0) { ext = 'png'; }
        if (Utils.isNullOrEmpty(url)) {
            return;
        }
        if (isFromNet) {
            if (!url.startsWith('https://')) {
                return;
            }
            cc.assetManager.loadRemote(url, { ext: "." + ext }, function (err, texture) {
                if (err) {
                    console.error('[Utils updateNodeSpriteFrame isFromNet] url:', url, '/err:', err);
                    return;
                }
                if (!cc.isValid(node)) {
                    return;
                }
                logger_1.Logger.debug('[Utils updateNodeSpriteFrame] texture:', texture);
                var spriteFrame = new cc.SpriteFrame(texture);
                var spr = node.getComponent(cc.Sprite);
                if (spr) {
                    spr.spriteFrame = spriteFrame;
                }
                if (!!next) {
                    next(spriteFrame);
                }
            });
        }
        else {
            cc.resources.load(url, cc.SpriteFrame, (function (err, spriteFrame) {
                if (err) {
                    console.error('[Utils updateNodeSpriteFrame isNotFromNet] url:', url, '/err:');
                    return;
                }
                if (!cc.isValid(node)) {
                    return;
                }
                var spr = node.getComponent(cc.Sprite);
                if (spr) {
                    spr.spriteFrame = spriteFrame;
                }
                if (!!next) {
                    next(spriteFrame);
                }
            }));
        }
    };
    /**
     * 远程加载spine
     * 注：约定spine资源文件与所在文件夹名字统一
     */
    Utils.loadSpine = function (url, node, success, fail) {
        // let url = `${GameConfig.OSS_URL_BASE}${folder}/${name}`;
        cc.assetManager.loadRemote(url + ".json", function (err, jsonAsset) {
            if (err) {
                fail && fail('加载json失败');
                return;
            }
            logger_1.Logger.debug('[加载Json] date:', (new Date()).getTime());
            cc.assetManager.loadRemote(url + ".atlas", function (err, textAsset) {
                if (err) {
                    fail && fail('加载atlas失败');
                    return;
                }
                logger_1.Logger.debug('[加载atlas] date:', (new Date()).getTime());
                cc.assetManager.loadRemote(url + ".png", function (err, texture2D) {
                    if (err) {
                        fail && fail('加载png失败');
                        return;
                    }
                    logger_1.Logger.debug('[加载png] date:', (new Date()).getTime());
                    var res = { skeletonJson: jsonAsset.json, atlasText: textAsset.text, textures: [texture2D], uuid: url + ".json", textureNames: [name + ".png"] };
                    success && success(res);
                });
            });
        });
    };
    Utils.updateSpineRes = function (name, node, res) {
        var skeleton = node.getComponent(sp.Skeleton); //
        if (!skeleton) {
            skeleton = node.addComponent('sp.Skeleton');
        }
        var asset = new sp.SkeletonData();
        asset['_uuid'] = res.uuid;
        asset.skeletonJson = res.skeletonJson;
        asset.atlasText = res.atlasText;
        asset.textures = res.textures;
        asset['textureNames'] = res.textureNames;
        skeleton.skeletonData = asset;
        skeleton.setAnimation(0, name, true);
    };
    Utils.secondsToClock = function (seconds) {
        seconds = Number(seconds);
        var secs = seconds % 60;
        var mins = (seconds - secs) / 60;
        var hours = Math.floor(mins / 60);
        if (hours > 0) {
            mins %= 60;
        }
        return (hours > 9 ? hours : "0" + hours) + ":" + (mins > 9 ? mins : "0" + mins) + ":" + (secs > 9 ? secs : "0" + secs);
    };
    Utils.isEmpty = function (v) { return v == undefined || v == '' || v == null; };
    Utils.loadSimpleBone = function (folder, name, next) {
        var path = "bones/" + folder + "/";
        var resources = [
            path + name + "_ske",
            path + name + "_atlas",
            path + name + "_tex",
        ];
        cc.resources.load(resources, function (err, assets) {
            if (err) {
                logger_1.Logger.debug('[Utils loadSimpleBone] 加载失败:', folder, '/', name);
                return;
            }
            next(assets[0], assets[1]);
        });
    };
    /**
     * 加载主角龙骨资源
     * @param name
     * @param isHomeCourt 是否主场
     */
    Utils.loadPlayerBone = function (name, isHomeCourt, success, fail) {
        var path = 'bones/finn/';
        var resources = [
            path + name + (isHomeCourt ? '_ske' : '_pk_ske'),
            path + name + (isHomeCourt ? '_atlas' : '_pk_atlas'),
            path + name + (isHomeCourt ? '_tex' : '_pk_tex'),
        ];
        cc.resources.load(resources, function (err, assets) {
            if (err) {
                logger_1.Logger.debug('[Utils loadSimpleBone] 加载失败:', name);
                fail && fail("\u52A0\u8F7D\u5931\u8D25 " + name);
                return;
            }
            success(assets[0], assets[1], assets[2]);
        });
    };
    Utils.releaseRes = function (asset) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                cc.assetManager.releaseAsset(asset);
                return [2 /*return*/];
            });
        });
    };
    /**
     * 预制件加载
     * @param path
     */
    Utils.loadPefab = function (path, needRelease) {
        if (needRelease === void 0) { needRelease = false; }
        return __awaiter(this, void 0, Promise, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var load;
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    load = function () { return __awaiter(_this, void 0, void 0, function () {
                                        return __generator(this, function (_a) {
                                            return [2 /*return*/, new Promise(function (rsv, rjt) {
                                                    var tot = setTimeout(function () {
                                                        logger_1.Logger.debug("[Utils oadPefab] " + path + "\u52A0\u8F7D\u8D85\u65F6");
                                                        rjt("oadPefab \u8FDE\u63A5\u8D85\u65F6" + path);
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
                                    return [4 /*yield*/, load().then(function (res) {
                                            // }
                                            resolve(res);
                                        })
                                            .catch(function (err) {
                                            reject(err);
                                        })];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    /**
     * 工具方法：同步读取json文件 返回JS对像
     * @param fileName
     */
    Utils.loadConfigFromAli = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                /*
                 * baseUrl = baseUrl || GameConfig.OSS_URL_BASE;
                 * let url = `${baseUrl}` + fileName + ".json?" + Math.random();
                 */
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        cc.assetManager.loadRemote(url, function (err, jsonAsset) {
                            if (err) {
                                logger_1.Logger.debug("[DataManager loadConfig[" + url + "]] err:", err);
                                reject("\u52A0\u8F7D\u5931\u8D25" + url);
                                return;
                            }
                            resolve(jsonAsset.json);
                        });
                    })];
            });
        });
    };
    /**
     * 判断给定字符串是否可转换为数字
     * 如果给定参数为null undefine 则视其为0
     * @param str
     */
    Utils.isNum = function (value) {
        if (value === '0' || value === undefined || value === null) {
            return true;
        }
        var n = Number(value);
        if (!isNaN(n)) {
            return true;
        }
        return false;
    };
    // 获取时间戳 秒
    Utils.getCurTime = function () {
        return Math.floor(this.getCurMillisecond() / 1000);
    };
    Utils.getCurMillisecond = function () {
        return (new Date()).getTime();
    };
    Utils.getymd = function (sec) {
        var d = new Date(sec * 1000);
        var month = (d.getMonth() + 1);
        var date = d.getDate();
        var year = d.getFullYear();
        var hour = d.getHours();
        var minute = d.getMinutes();
        var second = d.getSeconds();
        var milliseconds = d.getMilliseconds();
        return { year: year, month: month, date: date, hour: hour, minute: minute, second: second, milliseconds: milliseconds };
    };
    Utils.isToday = function (sec) {
        var curTime = this.getCurTime();
        var inputParm = Utils.getymd(sec);
        var curParm = Utils.getymd(curTime);
        if (inputParm.year != curParm.year) {
            return false;
        }
        if (inputParm.month != curParm.month) {
            return false;
        }
        if (inputParm.date != curParm.date) {
            return false;
        }
        return true;
    };
    /*
     * static getDayBeginTime(sec: number) {
     *     let parm = Utils.getymd(sec);
     *     let tmpDate = new Date();
     *     tmpDate.setFullYear(parm.year);
     *     tmpDate.setMonth(parm.month - 1);
     *     tmpDate.setDate(parm.date);
     *     tmpDate.setHours(0);
     *     tmpDate.setSeconds(0);
     *     tmpDate.setMinutes(0);
     *     tmpDate.setMilliseconds(0);
     *     return tmpDate.getTime() / 1000;
     * }
     */
    Utils.getDayBeginTime = function (milliseconds) {
        var tmpDate = new Date(milliseconds);
        tmpDate.setHours(0);
        tmpDate.setSeconds(0);
        tmpDate.setMinutes(0);
        tmpDate.setMilliseconds(0);
        return tmpDate.getTime();
    };
    Utils.waiting = function (time) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve();
            }, time);
        });
    };
    // 获取剩余时间
    Utils.prototype.secondsToClock = function (seconds) {
        seconds = Number(seconds);
        var secs = seconds % 60;
        var mins = (seconds - secs) / 60;
        var hours = Math.floor(mins / 60);
        if (hours > 0) {
            mins %= 60;
        }
        return (hours > 9 ? hours : "0" + hours) + ":" + (mins > 9 ? mins : "0" + mins) + ":" + (secs > 9 ? secs : "0" + secs);
    };
    /**
     * 工具方法：同步读取json文件 返回JS对像
     * @param fileName
     */
    Utils.loadConfig = function (fileName) {
        return __awaiter(this, void 0, void 0, function () {
            var url, rst, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "config/" + fileName;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.LoadRes(url)];
                    case 2:
                        rst = _a.sent();
                        return [2 /*return*/, rst];
                    case 3:
                        err_1 = _a.sent();
                        return [2 /*return*/, undefined];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Utils.LoadRes = function (path) {
        return new Promise(function (resolve, reject) {
            cc.resources.load(path, function (err, res) {
                if (err) {
                    reject(err.message || err);
                }
                else {
                    resolve(res);
                }
            });
        });
    };
    Utils.btnLock = function (time) {
        var _this = this;
        if (time === void 0) { time = 500; }
        if (this._btnLock) {
            return true;
        }
        this._btnLock = true;
        setTimeout(function () {
            _this._btnLock = false;
        }, time);
        return false;
    };
    Utils.removeNode = function (node) {
        if (!node || !node.parent) {
            return;
        }
        node.removeFromParent();
        node.destroy();
        // node.removeFromParent();
    };
    Utils.removeAllChildren = function (node) {
        if (!node) {
            return;
        }
        // node.destroyAllChildren();
        node.removeAllChildren();
    };
    /**
     * 置灰
     */
    Utils.toGrey = function (spr) {
        if (!spr)
            return;
        var matName = '2d-gray-sprite';
        var variant1 = cc.MaterialVariant.getBuiltinMaterial(matName);
        spr.setMaterial(0, variant1);
    };
    /**
     * 恢复彩色
     */
    Utils.toColor = function (spr) {
        if (!spr)
            return;
        var matName = '2d-sprite';
        var variant1 = cc.MaterialVariant.getBuiltinMaterial(matName);
        spr.setMaterial(0, variant1);
    };
    /**
     * 指定节点下所有图片 置灰
     */
    Utils.toGreyNode = function (node) {
        if (!node)
            return;
        var sprs = node.getComponentsInChildren(cc.RenderComponent);
        for (var i = 0; i < sprs.length; i++) {
            var eachSpr = sprs[i];
            this.toGrey(eachSpr);
        }
    };
    /**
     * 指定节点下所有图片 置灰
     */
    Utils.toColorNode = function (node) {
        if (!node)
            return;
        var sprs = node.getComponentsInChildren(cc.RenderComponent);
        for (var i = 0; i < sprs.length; i++) {
            var eachSpr = sprs[i];
            this.toColor(eachSpr);
        }
    };
    // 洗牌
    Utils.shuffle = function (arr) {
        var len = arr.length;
        var randomIndex;
        var temp;
        while (len) {
            randomIndex = Math.floor(Math.random() * (len--));
            temp = arr[randomIndex];
            arr[randomIndex] = arr[len];
            arr[len] = temp;
        }
        return arr;
    };
    Utils.shuffle2 = function (arr) {
        var arr1 = [];
        var arr2 = [];
        var h = arr.length / 2;
        for (var i = 0; i < arr.length; i++) {
            if (i <= h) {
                arr1.push(arr[i]);
            }
            else {
                arr2.push(arr[i]);
            }
        }
        arr1 = this.shuffle(arr1);
        arr2 = this.shuffle(arr2);
        return __spreadArrays(arr2, arr1);
    };
    // 去重并移除逗号
    Utils.ilterRepeatStr = function (str) {
        var rs = [].filter.call(str, function (s, i, o) { return o.indexOf(s) == i; }).join('');
        return rs.toString().replace(/,/g, '');
    };
    Utils.getValue = function (root, key) {
        var keys = key.split('.');
        try {
            var value = root[keys[0]];
            for (var i = 1; i < keys.length; i++) {
                value = value[keys[i]];
            }
            return value;
        }
        catch (err) {
            return undefined;
        }
    };
    /**
     * 停留在动画的第一帧
     * @param anim
     * @param name
     */
    Utils.animationGotoStart = function (anim, name) {
        var anim_name = name;
        if (typeof name === 'number') {
            anim_name = anim.getClips()[name].name;
        }
        anim.play(String(anim_name), 0);
        anim.sample(String(anim_name));
        anim.stop();
    };
    /**
     * 停留在动画的最后一帧
     * @param anim
     * @param name
     */
    Utils.animationGotoEnd = function (anim, name) {
        var anim_key = name;
        var anim_value = name;
        if (typeof name === 'string') {
            for (var key in anim.getClips()) {
                if (anim.getClips()[key].name === name) {
                    anim_key = key;
                    break;
                }
            }
        }
        else if (typeof name === 'number') {
            anim_value = anim.getClips()[name].name;
        }
        var anim_time = anim.getClips()[anim_key].duration;
        anim.play(String(anim_value), anim_time);
    };
    /**
     * 指定日期的星座信息
     * @param m 月份 1~
     * @param d 日期 1~
     * @returns {index:星座编号(0~11) sZodiac:星座名 sBetween:所在日期区间}
     */
    Utils.GetZodiac = function (m, d) {
        var s = '魔羯水瓶双鱼牡羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯';
        var arr = [20, 19, 21, 21, 21, 22, 23, 23, 23, 23, 22, 22];
        var index = m - (d < arr[m - 1] ? 1 : 0);
        index = index == 12 ? 0 : index;
        var sZodiac = s.substr(index * 2, 2) + "\u5EA7";
        var preMonth = (m - 2) < 0 ? 11 : +(m - 2);
        var backMonth = (m + 1) > 12 ? 1 : +(m + 1);
        var front = (d < arr[m - 1] ? (preMonth + 1 + "." + arr[preMonth]) : (m + "." + arr[m - 1]));
        var back = (d < arr[m - 1] ? m + "." + (arr[index] - 1) : backMonth + "." + (arr[backMonth - 1] - 1));
        var sBetween = front + "-" + back;
        // console.log((index + " " + sZodiac + " " + sBetween));
        return { index: index, sZodiac: sZodiac, sBetween: sBetween };
    };
    /**
     * 基于某模块激活时间后的 周几 1~
     */
    Utils.getGameDay = function (timeStart) {
        timeStart = Utils.getDayBeginTime(timeStart);
        var timeCur = Utils.getDayBeginTime(Utils.getCurTime());
        var second_of_week = (timeCur - timeStart) % (7 * GlobalDefines_1.GlobalDefines.Second_Day);
        var day = Math.floor(second_of_week / GlobalDefines_1.GlobalDefines.Second_Day) + 1;
        return day;
    };
    /**
     * 基于某模块激活时间后的 第几周 0~
     */
    Utils.getWeek = function (theTime, timeStart) {
        timeStart = Utils.getDayBeginTime(timeStart);
        theTime = Utils.getDayBeginTime(theTime);
        var week = Math.floor((theTime - timeStart) / (7 * GlobalDefines_1.GlobalDefines.Second_Day * 1000));
        return week;
    };
    Utils.twoPointDistance = function (pos1, pos2) {
        var x1 = pos1.x; // 第一个点的横坐标
        var y1 = pos1.y; // 第一个点的纵坐标
        var x2 = pos2.x; // 第二个点的横坐标
        var y2 = pos2.y; // 第二个点的纵坐标
        var xdiff = x2 - x1; // 计算两个点的横坐标之差
        var ydiff = y2 - y1; // 计算两个点的纵坐标之差
        return Math.pow((xdiff * xdiff + ydiff * ydiff), 0.5); // 计算两点之间的距离，并将结果返回表单元素
    };
    Utils.adaptiveNoteLayout = function () {
        var winSize = cc.winSize; // 获取当前游戏窗口大小
        cc.log("--\u5F53\u524D\u6E38\u620F\u7A97\u53E3\u5927\u5C0F  w:" + winSize.width + "   h:" + winSize.height);
        var viewSize = cc.view.getFrameSize();
        cc.log("--\u89C6\u56FE\u8FB9\u6846\u5C3A\u5BF8\uFF1Aw:" + viewSize.width + "  h:" + viewSize.height);
        var canvasSize = cc.view.getCanvasSize(); // 视图中canvas尺寸
        cc.log("--\u89C6\u56FE\u4E2Dcanvas\u5C3A\u5BF8  w:" + canvasSize.width + "  H:" + canvasSize.height);
        var visibleSize = cc.view.getVisibleSize();
        cc.log("--\u89C6\u56FE\u4E2D\u7A97\u53E3\u53EF\u89C1\u533A\u57DF\u7684\u5C3A\u5BF8 w:" + visibleSize.width + "   h:" + visibleSize.height);
        var designSize = cc.view.getDesignResolutionSize();
        cc.log("--\u8BBE\u8BA1\u5206\u8FA8\u7387\uFF1A" + designSize.width + "    h: " + designSize.height);
    };
    Utils.findNodeByName = function (root, name) {
        if (root) {
            var widget = root.getChildByName(name);
            if (widget) {
                return widget;
            }
            var children = root.children;
            for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                var c = children_1[_i];
                widget = Utils.findNodeByName(c, name);
                if (widget) {
                    return widget;
                }
            }
            return null;
        }
        return null;
    };
    Utils.getAngle = function (start, end) {
        // 计算出朝向
        var dx = end.x - start.x;
        var dy = end.y - start.y;
        var dir = cc.v2(dx, dy);
        // 根据朝向计算出夹角弧度
        var angle = dir.signAngle(cc.v2(1, 0));
        // 将弧度转换为欧拉角
        var degree = angle / Math.PI * 180;
        return degree;
    };
    // 把一个节点下的坐标转成另一个节点的坐标
    Utils.convertNodeToNodeSpace = function (node, targetParent) {
        if (cc.isValid(node)) {
            if (!!node.parent) {
                var wpos = node.parent.convertToWorldSpaceAR(node.getPosition());
                if (cc.isValid(targetParent)) {
                    return targetParent.convertToNodeSpaceAR(wpos);
                }
            }
        }
        cc.log('坐标转换有问题');
        return cc.v2(0, 0);
    };
    Utils.randomByWeightList = function (weightArr) {
        var allWeight = 0;
        for (var i = 0; i < weightArr.length; i++) {
            allWeight += weightArr[i];
        }
        var rd = Utils.randomFloat(0, allWeight);
        var tmp = 0;
        for (var i = 0; i < weightArr.length; i++) {
            tmp += weightArr[i];
            if (rd < tmp) {
                return i;
            }
        }
        return 0;
    };
    // 数组copy
    Utils.arrayCopy = function (sourceArr, destArr) {
        if (!!sourceArr && !!destArr) {
            for (var index = 0; index < sourceArr.length; index++) {
                var element = sourceArr[index];
                destArr.push(element);
            }
        }
    };
    /**
     * 改变节点颜色
     * @param node
     * @param color
     */
    Utils.changeColor = function (node, color) {
        node.color = new cc.Color().fromHEX(color);
    };
    // 解密
    Utils.decodeAtoB = function (value) {
        return decodeURIComponent(atob(value));
    };
    // 加密
    Utils.encodeBtoA = function (value) {
        return btoa(encodeURIComponent(value));
    };
    Utils.nextRandomId = function () {
        /*
         * let date = (new Date()).getTime();//获取时间戳
         * if (isSimple) {
         *     return date + "";
         * }
         */
        var len = 8; // 机器码有多少位
        var pwd = ''; // 定义空变量用来接收机器码
        for (var i = 0; i < len; i++) {
            pwd += Utils.RandomIdString.charAt(Math.floor(Math.random() * Utils.RandomIdString.length)); // 循环机器码位数随机填充
        }
        return pwd;
    };
    Utils.distanceByV2 = function (a, b) {
        var distance = a.sub(b).mag();
        return distance;
    };
    Utils.distanceByNode = function (a, b) {
        var p1 = a.getPosition();
        var p2 = b.getPosition();
        var distance = p1.sub(p2).mag();
        return distance;
    };
    // 根据长度获取随机概率数组
    Utils.getRandomRates = function (len) {
        var probabilities = Array.from({ length: len }, function () { return Math.random(); });
        var sum = probabilities.reduce(function (a, b) { return a + b; }, 0);
        return probabilities.map(function (p) { return p / sum; });
    };
    Utils._btnLock = false;
    /**
     * 简单生成一个唯一ID
     * @returns
     */
    Utils.RandomIdString = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_';
    return Utils;
}());
exports.Utils = Utils;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdXRpbHMvVXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUErRDtBQUMvRCxtQ0FBa0M7QUFFbEM7SUFBQTtJQXM4QkEsQ0FBQztJQXI4QmdCLFdBQUssR0FBbEIsVUFBbUIsT0FBWSxFQUFFLFFBQWdCOzs7O2dCQUM3QyxzQkFBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO3dCQUMvQixVQUFVLENBQUM7NEJBQ1AsS0FBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFDakMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztvQkFDMUIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUMsTUFBTSxJQUFPLENBQUMsQ0FBQyxFQUFDOzs7S0FDN0I7SUFFTSxvQkFBYyxHQUFyQixVQUFzQixFQUFZO1FBQUUsd0JBQXdCO2FBQXhCLFVBQXdCLEVBQXhCLHFCQUF3QixFQUF4QixJQUF3QjtZQUF4Qix1Q0FBd0I7O1FBQ3hELElBQUksRUFBRSxJQUFJLE9BQU8sQ0FBQyxFQUFFLENBQUMsS0FBSyxVQUFVLEVBQUU7WUFDbEMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsY0FBYyxDQUFDLENBQUM7U0FDbEM7SUFDTCxDQUFDO0lBRU0sa0JBQVksR0FBbkIsVUFBb0IsRUFBRSxFQUFFLE9BQU87UUFDM0IsSUFBSSxFQUFFLElBQUksT0FBTyxFQUFFLEtBQUssVUFBVSxFQUFFO1lBQ2hDLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDckI7SUFDTCxDQUFDO0lBRUQscUVBQXFFO0lBQzlELGVBQVMsR0FBaEIsVUFBaUIsR0FBRyxFQUFFLEdBQUc7UUFDckIsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFD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QUFFLENBQUMsQ0FBQztRQUM3RCxJQUFJLEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6QyxLQUFLLEdBQUcsS0FBSyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUE7UUFDL0IsSUFBTSxPQUFPLEdBQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxXQUFHLENBQUM7UUFDN0MsSUFBTSxRQUFRLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0MsSUFBTSxTQUFTLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDOUMsSUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBSSxRQUFRLEdBQUcsQ0FBQyxTQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFJLENBQUMsU0FBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBRyxDQUFDLENBQUMsQ0FBQztRQUMvRixJQUFNLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBSSxDQUFDLFVBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBRSxDQUFDLENBQUMsQ0FBSSxTQUFT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dkUsSUFBTSxHQUFHLEdBQUcsYUFBYSxDQUFDLE1BQU0sQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssT0FBQSxDQUFDLEdBQUcsQ0FBQyxFQUFMLENBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNyRCxPQUFPLGFBQWEsQ0FBQyxHQUFHLENBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxDQUFDLEdBQUcsR0FBRyxFQUFQLENBQU8sQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFyWGMsY0FBUSxHQUFZLEtBQUssQ0FBQztJQWlWekM7OztPQUdHO0lBQ0ksb0JBQWMsR0FBVyxpRUFBaUUsQ0FBQTtJQWlDckcsWUFBQztDQXQ4QkQsQUFzOEJDLElBQUE7QUF0OEJZLHNCQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2xvYmFsRGVmaW5lcyB9IGZyb20gJy4uL2NvbW1vbi9jb25zdHMvR2xvYmFsRGVmaW5lcyc7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuL2xvZ2dlcic7XG5cbmV4cG9ydCBjbGFzcyBVdGlscyB7XG4gICAgc3RhdGljIGFzeW5jIHNsZWVwKHRoaXNPYmo6IGFueSwgZHVyYXRpb246IG51bWJlcikge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnZva2VDYWxsYmFjayhyZXNvbHZlKTtcbiAgICAgICAgICAgIH0sIHRoaXNPYmosIGR1cmF0aW9uKTtcbiAgICAgICAgfSkuY2F0Y2goKHJlYXNvbikgPT4geyB9KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaW52b2tlQ2FsbGJhY2soY2I6IEZ1bmN0aW9uLCAuLi5vcHRpb25hbFBhcmFtczogYW55W10pIHtcbiAgICAgICAgaWYgKGNiICYmIHR5cGVvZiAoY2IpID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYi5hcHBseShudWxsLCBvcHRpb25hbFBhcmFtcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgc2FmZUNhbGxGdW5jKGZuLCB0aGlzT2JqKSB7XG4gICAgICAgIGlmIChmbiAmJiB0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGZuLmFwcGx5KHRoaXNPYmopO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJucyBhIHJhbmRvbSBpbnRlZ2VyIGJldHdlZW4gbWluIChpbmNsdWRlZCkgYW5kIG1heCAoZXhjbHVkZWQpXG4gICAgc3RhdGljIHJhbmRvbUludChtaW4sIG1heCkge1xuICAgICAgICBtaW4gPSBNYXRoLmNlaWwobWluKTtcbiAgICAgICAgbWF4ID0gTWF0aC5mbG9vcihtYXgpO1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikpICsgbWluO1xuICAgIH1cblxuICAgIC8vIFJldHVybnMgYSByYW5kb20gaW50ZWdlciBiZXR3ZWVuIG1pbiAoaW5jbHVkZWQpIGFuZCBtYXggKGluY2x1ZGVkKVxuICAgIHN0YXRpYyByYW5kb21JbnRJbmNsdXNpdmUobWluLCBtYXgpIHtcbiAgICAgICAgbWluID0gTWF0aC5jZWlsKG1pbik7XG4gICAgICAgIG1heCA9IE1hdGguZmxvb3IobWF4KTtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG4gICAgfVxuICAgIHN0YXRpYyByYW5kb21GbG9hdChtaW4sIG1heCkge1xuICAgICAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xuICAgIH1cblxuICAgIHN0YXRpYyByYW5kb21CeUxpc3QocmF0ZUxpc3Q6IEFycmF5PG51bWJlcj4pIHtcbiAgICAgICAgcmF0ZUxpc3QubWFwKCh2YWx1ZSwgaW5kZXgsIGFycmF5KSA9PiAoYXJyYXlbaW5kZXhdID0gfn5hcnJheVtpbmRleCAtIDFdICsgdmFsdWUpKTtcbiAgICAgICAgY29uc3QgciA9IHRoaXMucmFuZG9tSW50SW5jbHVzaXZlKDEsIHJhdGVMaXN0W3JhdGVMaXN0Lmxlbmd0aCAtIDFdKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IHJhdGVMaXN0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBjb25zdCBjdXIgPSByYXRlTGlzdFtpXTtcbiAgICAgICAgICAgIGNvbnN0IGxhc3QgPSB+fnJhdGVMaXN0W2kgLSAxXTtcbiAgICAgICAgICAgIGlmIChsYXN0IDwgciAmJiByIDw9IGN1cikge1xuICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICAvLyDojrflvpfmlbDnu4TlhoXnmoTpmo/mnLrlgLxcbiAgICBzdGF0aWMgZ2V0UmFuZG9tQnlBcnIoYXJyKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5yYW5kb21JbnQoMCwgYXJyLmxlbmd0aCk7XG4gICAgICAgIHJldHVybiBhcnJbaW5kZXhdO1xuICAgIH1cblxuICAgIHN0YXRpYyBtb2RCeUxpbWl0KG51bTogbnVtYmVyLCBsaW1pdDogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiAobnVtIC0gMSkgJSBsaW1pdCArIDE7XG4gICAgfVxuXG4gICAgc3RhdGljIGlzTnVsbE9yRW1wdHkoc3RyOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICFzdHIgfHwgc3RyID09ICcnIHx8IHN0ciA9PSAnbnVsbCc7XG4gICAgfVxuXG4gICAgc3RhdGljIHFyU2NlbmVPcHRpb24oZGF0YTogYW55KTogYW55IHtcbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzY2VuZSA9IGRlY29kZVVSSUNvbXBvbmVudChkYXRhKTtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0ge307XG4gICAgICAgIGZvciAoY29uc3QgdCBvZiBzY2VuZS5zcGxpdCgnJicpKSB7XG4gICAgICAgICAgICBjb25zdCBsID0gdC5zcGxpdCgnPScpO1xuICAgICAgICAgICAgb3B0aW9uW2xbMF1dID0gbFsxXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvcHRpb247XG4gICAgfVxuXG4gICAgc3RhdGljIGZvcm1hdFRpbWVFeHQoc2VjOiBhbnksIHNob3dIb3VyID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKH5+c2VjIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybiBzaG93SG91ciA/ICcwMOaXtjAw5YiGMDDnp5InIDogJzAw5YiGMDDnp5InO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaG91ciA9IE1hdGguZmxvb3Ioc2VjIC8gMzYwMCkudG9TdHJpbmcoKTtcbiAgICAgICAgY29uc3Qgc2Vjb25kID0gTWF0aC5mbG9vcihzZWMgJSAzNjAwICUgNjApLnRvU3RyaW5nKCk7XG4gICAgICAgIGNvbnN0IG1pbnV0ZSA9IHNob3dIb3VyID8gTWF0aC5mbG9vcihzZWMgJSAzNjAwIC8gNjApIDogTWF0aC5mbG9vcihzZWMgLyA2MCkudG9TdHJpbmcoKTtcbiAgICAgICAgaWYgKHNob3dIb3VyKSB7XG4gICAgICAgICAgICBjb25zdCBhcnIgPSBbaG91ciwgbWludXRlLCBzZWNvbmRdLm1hcCgobikgPT4gKGAke259YFsxXSA/IG4gOiBgMCR7bn1gKSk7XG4gICAgICAgICAgICByZXR1cm4gYCR7YXJyWzBdfeaXtiR7YXJyWzFdfeWIhiR7YXJyWzJdfeenkmA7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhcnIgPSBbbWludXRlLCBzZWNvbmRdLm1hcCgobikgPT4gKGAke259YFsxXSA/IG4gOiBgMCR7bn1gKSk7XG4gICAgICAgIHJldHVybiBgJHthcnJbMF195YiGJHthcnJbMV1956eSYDtcbiAgICB9XG5cbiAgICBzdGF0aWMgZm9ybWF0TWlsVGltZSh0aW1lKSB7XG4gICAgICAgIGlmICh0aW1lID4gMCkge1xuICAgICAgICAgICAgY29uc3QgdG1wID0gTWF0aC5jZWlsKHRpbWUgKiAxMDAwKTtcbiAgICAgICAgICAgIHJldHVybiBgJHtNYXRoLmZsb29yKHRtcCAvIDEwMDApfeKAsyR7dG1wICUgMTAwMH1gO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICcw4oCzMDAwJztcbiAgICB9XG5cbiAgICBzdGF0aWMgZm9ybWF0VGltZShzZWM6IGFueSwgc2hvd0hvdXIgPSBmYWxzZSkge1xuICAgICAgICBpZiAofn5zZWMgPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHNob3dIb3VyID8gJzAwOjAwOjAwJyA6ICcwMDowMCc7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBob3VyID0gTWF0aC5mbG9vcihzZWMgLyAzNjAwKS50b1N0cmluZygpO1xuICAgICAgICBjb25zdCBzZWNvbmQgPSBNYXRoLmZsb29yKHNlYyAlIDM2MDAgJSA2MCkudG9TdHJpbmcoKTtcbiAgICAgICAgY29uc3QgbWludXRlID0gc2hvd0hvdXIgPyBNYXRoLmZsb29yKHNlYyAlIDM2MDAgLyA2MCkgOiBNYXRoLmZsb29yKHNlYyAvIDYwKS50b1N0cmluZygpO1xuICAgICAgICBpZiAoc2hvd0hvdXIpIHtcbiAgICAgICAgICAgIHJldHVybiBbaG91ciwgbWludXRlLCBzZWNvbmRdLm1hcCgobikgPT4gKGAke259YFsxXSA/IG4gOiBgMCR7bn1gKSkuam9pbignOicpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gW21pbnV0ZSwgc2Vjb25kXS5tYXAoKG4pID0+IChgJHtufWBbMV0gPyBuIDogYDAke259YCkpLmpvaW4oJzonKVxuICAgIH1cblxuICAgIHN0YXRpYyBmb3JtYXRUaW1lX0RhdGUoc2VjOiBhbnksIHNob3dZZWFyOiBib29sZWFuKSB7XG4gICAgICAgIGNvbnN0IGQgPSBuZXcgRGF0ZShzZWMgKiAxMDAwKTtcbiAgICAgICAgLy8gTG9nZ2VyLmRlYnVnKFwiLS0tLS0tLVwiLCBzZWMsIGQpO1xuICAgICAgICBjb25zdCBtb250aCA9IChkLmdldE1vbnRoKCkgKyAxKS50b1N0cmluZygpO1xuICAgICAgICAvLyBMb2dnZXIuZGVidWcoXCItLVwiLCBtb250aCk7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBkLmdldERhdGUoKTtcbiAgICAgICAgLy8gTG9nZ2VyLmRlYnVnKFwiLS1cIiwgZGF0ZSk7XG4gICAgICAgIGlmIChzaG93WWVhcikge1xuICAgICAgICAgICAgY29uc3QgeWVhciA9IGQuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpO1xuICAgICAgICAgICAgcmV0dXJuIFt5ZWFyLCBtb250aCwgZGF0ZV0ubWFwKChuKSA9PiAoYCR7bn1gWzFdID8gbiA6IGAwJHtufWApKS5qb2luKCcuJylcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBbbW9udGgsIGRhdGVdLm1hcCgobikgPT4gKGAke259YFsxXSA/IG4gOiBgMCR7bn1gKSkuam9pbignLicpXG4gICAgfVxuXG4gICAgc3RhdGljIGdldFdlZWtOdW1iZXJOb3coc3M6IG51bWJlcikge1xuICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZShzcyk7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFdlZWtOdW1iZXIobm93KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0V2Vla051bWJlcihkOiBEYXRlKSB7XG4gICAgICAgIC8vIENvcHkgZGF0ZSBzbyBkb24ndCBtb2RpZnkgb3JpZ2luYWxcbiAgICAgICAgZCA9IG5ldyBEYXRlKERhdGUuVVRDKGQuZ2V0RnVsbFllYXIoKSwgZC5nZXRNb250aCgpLCBkLmdldERhdGUoKSkpO1xuICAgICAgICAvKlxuICAgICAgICAgKiBTZXQgdG8gbmVhcmVzdCBUaHVyc2RheTogY3VycmVudCBkYXRlICsgNCAtIGN1cnJlbnQgZGF5IG51bWJlclxuICAgICAgICAgKiBNYWtlIFN1bmRheSdzIGRheSBudW1iZXIgN1xuICAgICAgICAgKi9cbiAgICAgICAgZC5zZXRVVENEYXRlKGQuZ2V0VVRDRGF0ZSgpICsgNCAtIChkLmdldFVUQ0RheSgpIHx8IDcpKTtcbiAgICAgICAgLy8gR2V0IGZpcnN0IGRheSBvZiB5ZWFyXG4gICAgICAgIGNvbnN0IHllYXJTdGFydCA9IG5ldyBEYXRlKERhdGUuVVRDKGQuZ2V0VVRDRnVsbFllYXIoKSwgMCwgMSkpO1xuICAgICAgICAvLyBDYWxjdWxhdGUgZnVsbCB3ZWVrcyB0byBuZWFyZXN0IFRodXJzZGF5XG4gICAgICAgIGNvbnN0IHdlZWtObyA9IE1hdGguY2VpbCgoKChkLmdldFRpbWUoKSAtIHllYXJTdGFydC5nZXRUaW1lKCkpIC8gODY0MDAwMDApICsgMSkgLyA3KTtcbiAgICAgICAgLy8gUmV0dXJuIGFycmF5IG9mIHllYXIgYW5kIHdlZWsgbnVtYmVyXG4gICAgICAgIHJldHVybiB3ZWVrTm87XG4gICAgfVxuXG4gICAgc3RhdGljIGdldE1vbnRoTSh5LCBtKSB7IC8vIOiuoeeul+WTquW5tOWTquaciCDmnInlpJrlsJHlpKkg5pyI5Lu95LuOMeW8gOWni1xuICAgICAgICBpZiAobSA9PSA0IHx8IG0gPT0gNiB8fCBtID09IDkgfHwgbSA9PSAxMSkgcmV0dXJuIDMwO1xuICAgICAgICBpZiAobSA9PSAyKSByZXR1cm4gKHkgJSA0ID09IDAgJiYgeSAlIDEwMCAhPSAwKSB8fCB5ICUgNDAwID09IDAgPyAyOSA6IDI4O1xuICAgICAgICByZXR1cm4gMzE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5b2T5YmN5pys5Zyw5pe26Ze05oizXG4gICAgICovXG4gICAgc3RhdGljIGdldFRpbWVzdGFtcCgpIHtcbiAgICAgICAgcmV0dXJuIChuZXcgRGF0ZSgpKS5nZXRUaW1lKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICrml7bpl7TlrZfku7vkuLLkvKDmjaLmiJDnp5JcbiAgICAgKiB0aW1lU3RyOnN0cmluZyBcIjIwMjAsOCwyNywwLDBcIiDlubTvvIzmnIjvvIzml6XvvIzml7bvvIzliIZcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0T1NTVGltZSh0aW1lU3RyOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNFbXB0eSh0aW1lU3RyKSkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhcnIgPSB0aW1lU3RyLnNwbGl0KCcsJyk7XG5cbiAgICAgICAgY29uc3QgZGF0ZTogRGF0ZSA9IG5ldyBEYXRlKHBhcnNlSW50KGFyclswXSksIHBhcnNlSW50KGFyclsxXSkgLSAxLCBwYXJzZUludChhcnJbMl0pLCBwYXJzZUludChhcnJbM10pLCBwYXJzZUludChhcnJbNF0pLCAwKTtcbiAgICAgICAgY29uc3QgdGltZSA9IE1hdGguZmxvb3IoZGF0ZS5nZXRUaW1lKCkgLyAxMDAwKTtcbiAgICAgICAgcmV0dXJuIHRpbWU7XG4gICAgfVxuXG4gICAgc3RhdGljIHNvbHZlU3RyaW5nKHN0cjogc3RyaW5nLCBsZW46IG51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIGlmICghc3RyKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY3VycmVudGxlbiA9IDBcbiAgICAgICAgbGV0IGN1cnJlbnRTdHIgPSAnJ1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHN0ci5jaGFyQ29kZUF0KGkpID4gMTI3IHx8IHN0ci5jaGFyQ29kZUF0KGkpID09IDk0KSB7XG4gICAgICAgICAgICAgICAgY3VycmVudGxlbiArPSAyXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRsZW4rK1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY3VycmVudGxlbiA+IGxlbikge1xuICAgICAgICAgICAgICAgIHJldHVybiBgJHtjdXJyZW50U3RyfS4uLmA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGN1cnJlbnRTdHIgKz0gc3RyLmNoYXJBdChpKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGN1cnJlbnRTdHI7XG4gICAgfVxuXG4gICAgLy8g6I635Y+W5Lit6Iux5paH5re35ZCI5a2X56ym5Liy6ZW/5bqmXG4gICAgcHVibGljIHN0YXRpYyBtaXhlZFN0ckxlbihzdHI6IHN0cmluZykge1xuICAgICAgICBsZXQgc3RyTGVuID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChzdHIuc3Vic3RyKGksIDEpLmNoYXJDb2RlQXQoMCkgPiAyNTUpIHtcbiAgICAgICAgICAgICAgICBzdHJMZW4gKz0gMjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3RyTGVuKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3RyTGVuO1xuICAgIH1cblxuICAgIHN0YXRpYyBhbmdsZVRvUmFkaWFuKGFuZ2xlOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gYW5nbGUgKiBNYXRoLlBJIC8gMTgwO1xuICAgIH1cblxuICAgIHN0YXRpYyB1cGRhdGVOb2RlU3ByaXRlRnJhbWUodXJsOiBzdHJpbmcsIG5vZGU6IGNjLk5vZGUsIGlzRnJvbU5ldDogYm9vbGVhbiA9IGZhbHNlLCBuZXh0OiBGdW5jdGlvbiA9IHVuZGVmaW5lZCwgZXh0OiBzdHJpbmcgPSAncG5nJykge1xuICAgICAgICBpZiAoVXRpbHMuaXNOdWxsT3JFbXB0eSh1cmwpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNGcm9tTmV0KSB7XG4gICAgICAgICAgICBpZiAoIXVybC5zdGFydHNXaXRoKCdodHRwczovLycpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYy5hc3NldE1hbmFnZXIubG9hZFJlbW90ZSh1cmwsIHsgZXh0OiBgLiR7ZXh0fWAgfSwgKGVyciwgdGV4dHVyZTogY2MuVGV4dHVyZTJEKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdbVXRpbHMgdXBkYXRlTm9kZVNwcml0ZUZyYW1lIGlzRnJvbU5ldF0gdXJsOicsIHVybCwgJy9lcnI6JywgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghY2MuaXNWYWxpZChub2RlKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgTG9nZ2VyLmRlYnVnKCdbVXRpbHMgdXBkYXRlTm9kZVNwcml0ZUZyYW1lXSB0ZXh0dXJlOicsIHRleHR1cmUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNwciA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgICAgICAgICAgaWYgKHNwcikge1xuICAgICAgICAgICAgICAgICAgICBzcHIuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoISFuZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHQoc3ByaXRlRnJhbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQodXJsLCBjYy5TcHJpdGVGcmFtZSwgKChlcnIsIHNwcml0ZUZyYW1lOiBjYy5TcHJpdGVGcmFtZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignW1V0aWxzIHVwZGF0ZU5vZGVTcHJpdGVGcmFtZSBpc05vdEZyb21OZXRdIHVybDonLCB1cmwsICcvZXJyOicpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCFjYy5pc1ZhbGlkKG5vZGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBzcHIgPSBub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICAgICAgICAgIGlmIChzcHIpIHtcbiAgICAgICAgICAgICAgICAgICAgc3ByLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCEhbmV4dCkge1xuICAgICAgICAgICAgICAgICAgICBuZXh0KHNwcml0ZUZyYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDov5znqIvliqDovb1zcGluZVxuICAgICAqIOazqO+8mue6puWumnNwaW5l6LWE5rqQ5paH5Lu25LiO5omA5Zyo5paH5Lu25aS55ZCN5a2X57uf5LiAXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBsb2FkU3BpbmUodXJsOiBzdHJpbmcsIG5vZGU6IGNjLk5vZGUsIHN1Y2Nlc3M/OiBGdW5jdGlvbiwgZmFpbD86IEZ1bmN0aW9uKSB7XG4gICAgICAgIC8vIGxldCB1cmwgPSBgJHtHYW1lQ29uZmlnLk9TU19VUkxfQkFTRX0ke2ZvbGRlcn0vJHtuYW1lfWA7XG4gICAgICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkUmVtb3RlKGAke3VybH0uanNvbmAsIChlcnIsIGpzb25Bc3NldDogY2MuSnNvbkFzc2V0KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgZmFpbCAmJiBmYWlsKCfliqDovb1qc29u5aSx6LSlJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBMb2dnZXIuZGVidWcoJ1vliqDovb1Kc29uXSBkYXRlOicsIChuZXcgRGF0ZSgpKS5nZXRUaW1lKCkpO1xuICAgICAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLmxvYWRSZW1vdGUoYCR7dXJsfS5hdGxhc2AsIChlcnIsIHRleHRBc3NldDogY2MuVGV4dEFzc2V0KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICBmYWlsICYmIGZhaWwoJ+WKoOi9vWF0bGFz5aSx6LSlJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBMb2dnZXIuZGVidWcoJ1vliqDovb1hdGxhc10gZGF0ZTonLCAobmV3IERhdGUoKSkuZ2V0VGltZSgpKTtcbiAgICAgICAgICAgICAgICBjYy5hc3NldE1hbmFnZXIubG9hZFJlbW90ZShgJHt1cmx9LnBuZ2AsIChlcnIsIHRleHR1cmUyRDogY2MuVGV4dHVyZTJEKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhaWwgJiYgZmFpbCgn5Yqg6L29cG5n5aSx6LSlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBMb2dnZXIuZGVidWcoJ1vliqDovb1wbmddIGRhdGU6JywgKG5ldyBEYXRlKCkpLmdldFRpbWUoKSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IHsgc2tlbGV0b25Kc29uOiBqc29uQXNzZXQuanNvbiwgYXRsYXNUZXh0OiB0ZXh0QXNzZXQudGV4dCwgdGV4dHVyZXM6IFt0ZXh0dXJlMkRdLCB1dWlkOiBgJHt1cmx9Lmpzb25gLCB0ZXh0dXJlTmFtZXM6IFtgJHtuYW1lfS5wbmdgXSB9O1xuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzICYmIHN1Y2Nlc3MocmVzKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHVwZGF0ZVNwaW5lUmVzKG5hbWU6IHN0cmluZywgbm9kZTogY2MuTm9kZSwgcmVzOiB7IHNrZWxldG9uSnNvbjogYW55LCBhdGxhc1RleHQ6IHN0cmluZywgdGV4dHVyZXM6IGNjLlRleHR1cmUyRFtdLCB1dWlkOiBzdHJpbmcsIHRleHR1cmVOYW1lczogc3RyaW5nW10gfSkge1xuICAgICAgICBsZXQgc2tlbGV0b246IHNwLlNrZWxldG9uID0gbm9kZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pOy8vXG4gICAgICAgIGlmICghc2tlbGV0b24pIHtcbiAgICAgICAgICAgIHNrZWxldG9uID0gbm9kZS5hZGRDb21wb25lbnQoJ3NwLlNrZWxldG9uJyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhc3NldCA9IG5ldyBzcC5Ta2VsZXRvbkRhdGEoKTtcbiAgICAgICAgYXNzZXRbJ191dWlkJ10gPSByZXMudXVpZDtcbiAgICAgICAgYXNzZXQuc2tlbGV0b25Kc29uID0gcmVzLnNrZWxldG9uSnNvblxuICAgICAgICBhc3NldC5hdGxhc1RleHQgPSByZXMuYXRsYXNUZXh0O1xuICAgICAgICBhc3NldC50ZXh0dXJlcyA9IHJlcy50ZXh0dXJlcztcbiAgICAgICAgYXNzZXRbJ3RleHR1cmVOYW1lcyddID0gcmVzLnRleHR1cmVOYW1lcztcbiAgICAgICAgc2tlbGV0b24uc2tlbGV0b25EYXRhID0gYXNzZXQ7XG4gICAgICAgIHNrZWxldG9uLnNldEFuaW1hdGlvbigwLCBuYW1lLCB0cnVlKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgc2Vjb25kc1RvQ2xvY2soc2Vjb25kcykge1xuICAgICAgICBzZWNvbmRzID0gTnVtYmVyKHNlY29uZHMpO1xuICAgICAgICBjb25zdCBzZWNzID0gc2Vjb25kcyAlIDYwO1xuICAgICAgICBsZXQgbWlucyA9IChzZWNvbmRzIC0gc2VjcykgLyA2MDtcbiAgICAgICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKG1pbnMgLyA2MCk7XG4gICAgICAgIGlmIChob3VycyA+IDApIHtcbiAgICAgICAgICAgIG1pbnMgJT0gNjA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYCR7aG91cnMgPiA5ID8gaG91cnMgOiBgMCR7aG91cnN9YH06JHttaW5zID4gOSA/IG1pbnMgOiBgMCR7bWluc31gfToke3NlY3MgPiA5ID8gc2VjcyA6IGAwJHtzZWNzfWB9YDtcbiAgICB9XG5cbiAgICBzdGF0aWMgaXNFbXB0eSh2KSB7IHJldHVybiB2ID09IHVuZGVmaW5lZCB8fCB2ID09ICcnIHx8IHYgPT0gbnVsbCB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGxvYWRTaW1wbGVCb25lKGZvbGRlcjogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIG5leHQ6IEZ1bmN0aW9uKSB7XG4gICAgICAgIGNvbnN0IHBhdGggPSBgYm9uZXMvJHtmb2xkZXJ9L2A7XG4gICAgICAgIGNvbnN0IHJlc291cmNlcyA9IFtcbiAgICAgICAgICAgIGAke3BhdGggKyBuYW1lfV9za2VgLFxuICAgICAgICAgICAgYCR7cGF0aCArIG5hbWV9X2F0bGFzYCxcbiAgICAgICAgICAgIGAke3BhdGggKyBuYW1lfV90ZXhgLFxuICAgICAgICBdO1xuXG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkKHJlc291cmNlcywgKGVyciwgYXNzZXRzKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgTG9nZ2VyLmRlYnVnKCdbVXRpbHMgbG9hZFNpbXBsZUJvbmVdIOWKoOi9veWksei0pTonLCBmb2xkZXIsICcvJywgbmFtZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBuZXh0KGFzc2V0c1swXSwgYXNzZXRzWzFdKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Yqg6L295Li76KeS6b6Z6aqo6LWE5rqQXG4gICAgICogQHBhcmFtIG5hbWVcbiAgICAgKiBAcGFyYW0gaXNIb21lQ291cnQg5piv5ZCm5Li75Zy6XG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBsb2FkUGxheWVyQm9uZShuYW1lOiBzdHJpbmcsIGlzSG9tZUNvdXJ0OiBib29sZWFuLCBzdWNjZXNzOiBGdW5jdGlvbiwgZmFpbD86IEZ1bmN0aW9uKSB7XG4gICAgICAgIGNvbnN0IHBhdGggPSAnYm9uZXMvZmlubi8nO1xuICAgICAgICBjb25zdCByZXNvdXJjZXMgPSBbXG4gICAgICAgICAgICBwYXRoICsgbmFtZSArIChpc0hvbWVDb3VydCA/ICdfc2tlJyA6ICdfcGtfc2tlJyksXG4gICAgICAgICAgICBwYXRoICsgbmFtZSArIChpc0hvbWVDb3VydCA/ICdfYXRsYXMnIDogJ19wa19hdGxhcycpLFxuICAgICAgICAgICAgcGF0aCArIG5hbWUgKyAoaXNIb21lQ291cnQgPyAnX3RleCcgOiAnX3BrX3RleCcpLFxuICAgICAgICBdO1xuXG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkKHJlc291cmNlcywgKGVyciwgYXNzZXRzKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgTG9nZ2VyLmRlYnVnKCdbVXRpbHMgbG9hZFNpbXBsZUJvbmVdIOWKoOi9veWksei0pTonLCBuYW1lKTtcbiAgICAgICAgICAgICAgICBmYWlsICYmIGZhaWwoYOWKoOi9veWksei0pSAke25hbWV9YCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzdWNjZXNzKGFzc2V0c1swXSwgYXNzZXRzWzFdLCBhc3NldHNbMl0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYXN5bmMgcmVsZWFzZVJlcyhhc3NldDogY2MuQXNzZXQpIHtcbiAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLnJlbGVhc2VBc3NldChhc3NldCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6aKE5Yi25Lu25Yqg6L29XG4gICAgICogQHBhcmFtIHBhdGhcbiAgICAgKi9cbiAgICBzdGF0aWMgYXN5bmMgbG9hZFBlZmFiKHBhdGg6IHN0cmluZywgbmVlZFJlbGVhc2U6IGJvb2xlYW4gPSBmYWxzZSk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgICogaWYgKHRoaXMucHJlZmFiX25lZWRfcmVsZWFzZVtwYXRoXSkge1xuICAgICAgICAgICAgICogICAgIHJlc29sdmUodGhpcy5wcmVmYWJfbmVlZF9yZWxlYXNlW3BhdGhdKTtcbiAgICAgICAgICAgICAqICAgICByZXR1cm47XG4gICAgICAgICAgICAgKiB9XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGNvbnN0IGxvYWQgPSBhc3luYyAoKSA9PiBuZXcgUHJvbWlzZSgocnN2LCByanQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0b3QgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgTG9nZ2VyLmRlYnVnKGBbVXRpbHMgb2FkUGVmYWJdICR7cGF0aH3liqDovb3otoXml7ZgKVxuICAgICAgICAgICAgICAgICAgICByanQoYG9hZFBlZmFiIOi/nuaOpei2heaXtiR7cGF0aH1gKTtcbiAgICAgICAgICAgICAgICB9LCAxMDAwMCk7XG4gICAgICAgICAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQocGF0aCwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0b3QpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJqdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcnN2KHJlcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGF3YWl0IGxvYWQoKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5bel5YW35pa55rOV77ya5ZCM5q2l6K+75Y+WanNvbuaWh+S7tiDov5Tlm55KU+WvueWDj1xuICAgICAqIEBwYXJhbSBmaWxlTmFtZVxuICAgICAqL1xuICAgIHN0YXRpYyBhc3luYyBsb2FkQ29uZmlnRnJvbUFsaSh1cmw6IHN0cmluZykge1xuICAgICAgICAvKlxuICAgICAgICAgKiBiYXNlVXJsID0gYmFzZVVybCB8fCBHYW1lQ29uZmlnLk9TU19VUkxfQkFTRTtcbiAgICAgICAgICogbGV0IHVybCA9IGAke2Jhc2VVcmx9YCArIGZpbGVOYW1lICsgXCIuanNvbj9cIiArIE1hdGgucmFuZG9tKCk7XG4gICAgICAgICAqL1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLmxvYWRSZW1vdGUodXJsLCAoZXJyLCBqc29uQXNzZXQ6IGNjLkpzb25Bc3NldCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgTG9nZ2VyLmRlYnVnKGBbRGF0YU1hbmFnZXIgbG9hZENvbmZpZ1ske3VybH1dXSBlcnI6YCwgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGDliqDovb3lpLHotKUke3VybH1gKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJlc29sdmUoanNvbkFzc2V0Lmpzb24pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Yik5pat57uZ5a6a5a2X56ym5Liy5piv5ZCm5Y+v6L2s5o2i5Li65pWw5a2XXG4gICAgICog5aaC5p6c57uZ5a6a5Y+C5pWw5Li6bnVsbCB1bmRlZmluZSDliJnop4blhbbkuLowXG4gICAgICogQHBhcmFtIHN0clxuICAgICAqL1xuICAgIHN0YXRpYyBpc051bSh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgPT09ICcwJyB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG4gPSBOdW1iZXIodmFsdWUpXG4gICAgICAgIGlmICghaXNOYU4obikpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIOiOt+WPluaXtumXtOaIsyDnp5JcbiAgICBzdGF0aWMgZ2V0Q3VyVGltZSgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IodGhpcy5nZXRDdXJNaWxsaXNlY29uZCgpIC8gMTAwMClcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0Q3VyTWlsbGlzZWNvbmQoKSB7XG4gICAgICAgIHJldHVybiAobmV3IERhdGUoKSkuZ2V0VGltZSgpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXR5bWQoc2VjOiBudW1iZXIpOiB7IHllYXI6IG51bWJlciwgbW9udGg6IG51bWJlciwgZGF0ZTogbnVtYmVyLCBob3VyOiBudW1iZXIsIG1pbnV0ZTogbnVtYmVyLCBzZWNvbmQ6IG51bWJlciwgbWlsbGlzZWNvbmRzOiBudW1iZXIgfSB7XG4gICAgICAgIGNvbnN0IGQgPSBuZXcgRGF0ZShzZWMgKiAxMDAwKTtcbiAgICAgICAgY29uc3QgbW9udGggPSAoZC5nZXRNb250aCgpICsgMSk7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBkLmdldERhdGUoKTtcbiAgICAgICAgY29uc3QgeWVhciA9IGQuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgY29uc3QgaG91ciA9IGQuZ2V0SG91cnMoKTtcbiAgICAgICAgY29uc3QgbWludXRlID0gZC5nZXRNaW51dGVzKCk7XG4gICAgICAgIGNvbnN0IHNlY29uZCA9IGQuZ2V0U2Vjb25kcygpO1xuICAgICAgICBjb25zdCBtaWxsaXNlY29uZHMgPSBkLmdldE1pbGxpc2Vjb25kcygpO1xuICAgICAgICByZXR1cm4geyB5ZWFyLCBtb250aCwgZGF0ZSwgaG91ciwgbWludXRlLCBzZWNvbmQsIG1pbGxpc2Vjb25kcyB9O1xuICAgIH1cbiAgICBzdGF0aWMgaXNUb2RheShzZWM6IG51bWJlcikge1xuICAgICAgICBjb25zdCBjdXJUaW1lID0gdGhpcy5nZXRDdXJUaW1lKCk7XG4gICAgICAgIGNvbnN0IGlucHV0UGFybSA9IFV0aWxzLmdldHltZChzZWMpO1xuICAgICAgICBjb25zdCBjdXJQYXJtID0gVXRpbHMuZ2V0eW1kKGN1clRpbWUpO1xuICAgICAgICBpZiAoaW5wdXRQYXJtLnllYXIgIT0gY3VyUGFybS55ZWFyKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5wdXRQYXJtLm1vbnRoICE9IGN1clBhcm0ubW9udGgpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbnB1dFBhcm0uZGF0ZSAhPSBjdXJQYXJtLmRhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogc3RhdGljIGdldERheUJlZ2luVGltZShzZWM6IG51bWJlcikge1xuICAgICAqICAgICBsZXQgcGFybSA9IFV0aWxzLmdldHltZChzZWMpO1xuICAgICAqICAgICBsZXQgdG1wRGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICogICAgIHRtcERhdGUuc2V0RnVsbFllYXIocGFybS55ZWFyKTtcbiAgICAgKiAgICAgdG1wRGF0ZS5zZXRNb250aChwYXJtLm1vbnRoIC0gMSk7XG4gICAgICogICAgIHRtcERhdGUuc2V0RGF0ZShwYXJtLmRhdGUpO1xuICAgICAqICAgICB0bXBEYXRlLnNldEhvdXJzKDApO1xuICAgICAqICAgICB0bXBEYXRlLnNldFNlY29uZHMoMCk7XG4gICAgICogICAgIHRtcERhdGUuc2V0TWludXRlcygwKTtcbiAgICAgKiAgICAgdG1wRGF0ZS5zZXRNaWxsaXNlY29uZHMoMCk7XG4gICAgICogICAgIHJldHVybiB0bXBEYXRlLmdldFRpbWUoKSAvIDEwMDA7XG4gICAgICogfVxuICAgICAqL1xuXG4gICAgc3RhdGljIGdldERheUJlZ2luVGltZShtaWxsaXNlY29uZHM6IG51bWJlcikge1xuICAgICAgICBjb25zdCB0bXBEYXRlID0gbmV3IERhdGUobWlsbGlzZWNvbmRzKTtcbiAgICAgICAgdG1wRGF0ZS5zZXRIb3VycygwKTtcbiAgICAgICAgdG1wRGF0ZS5zZXRTZWNvbmRzKDApO1xuICAgICAgICB0bXBEYXRlLnNldE1pbnV0ZXMoMCk7XG4gICAgICAgIHRtcERhdGUuc2V0TWlsbGlzZWNvbmRzKDApO1xuICAgICAgICByZXR1cm4gdG1wRGF0ZS5nZXRUaW1lKCk7XG4gICAgfVxuXG4gICAgc3RhdGljIHdhaXRpbmcodGltZTogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9LCB0aW1lKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIOiOt+WPluWJqeS9meaXtumXtFxuICAgIHNlY29uZHNUb0Nsb2NrKHNlY29uZHMpIHtcbiAgICAgICAgc2Vjb25kcyA9IE51bWJlcihzZWNvbmRzKTtcbiAgICAgICAgY29uc3Qgc2VjcyA9IHNlY29uZHMgJSA2MDtcbiAgICAgICAgbGV0IG1pbnMgPSAoc2Vjb25kcyAtIHNlY3MpIC8gNjA7XG4gICAgICAgIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcihtaW5zIC8gNjApO1xuICAgICAgICBpZiAoaG91cnMgPiAwKSB7XG4gICAgICAgICAgICBtaW5zICU9IDYwO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGAke2hvdXJzID4gOSA/IGhvdXJzIDogYDAke2hvdXJzfWB9OiR7bWlucyA+IDkgPyBtaW5zIDogYDAke21pbnN9YH06JHtzZWNzID4gOSA/IHNlY3MgOiBgMCR7c2Vjc31gfWA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5bel5YW35pa55rOV77ya5ZCM5q2l6K+75Y+WanNvbuaWh+S7tiDov5Tlm55KU+WvueWDj1xuICAgICAqIEBwYXJhbSBmaWxlTmFtZVxuICAgICAqL1xuICAgIHN0YXRpYyBhc3luYyBsb2FkQ29uZmlnKGZpbGVOYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgdXJsID0gYGNvbmZpZy8ke2ZpbGVOYW1lfWA7XG4gICAgICAgIC8qXG4gICAgICAgICAqIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAqICAgICBjYy5yZXNvdXJjZXMubG9hZCh1cmwsIChlcnIsIGpzb25Bc3NldDogY2MuSnNvbkFzc2V0KSA9PiB7XG4gICAgICAgICAqICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgKiAgICAgICAgICAgICBMb2dnZXIuZGVidWcoYFtEYXRhTWFuYWdlciBsb2FkQ29uZmlnWyR7ZmlsZU5hbWV9XV0gIGVycjpgLCBlcnIpO1xuICAgICAgICAgKiAgICAgICAgICAgICByZWplY3QoKTtcbiAgICAgICAgICogICAgICAgICB9ZWxzZXtcbiAgICAgICAgICogICAgICAgICAgICAgcmVzb2x2ZShqc29uQXNzZXQuanNvbik7XG4gICAgICAgICAqICAgICAgICAgfVxuICAgICAgICAgKiAgICAgfSk7XG4gICAgICAgICAqL1xuXG4gICAgICAgIC8vIH0pO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcnN0ID0gYXdhaXQgdGhpcy5Mb2FkUmVzPGNjLkpzb25Bc3NldD4odXJsKTtcbiAgICAgICAgICAgIHJldHVybiByc3Q7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgTG9hZFJlczxUIGV4dGVuZHMgY2MuQXNzZXQ+KHBhdGg6IHN0cmluZyk6IFByb21pc2U8VD4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQocGF0aCwgKGVycjogYW55LCByZXM6IFQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIubWVzc2FnZSB8fCBlcnIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2J0bkxvY2s6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBzdGF0aWMgYnRuTG9jayh0aW1lOiBudW1iZXIgPSA1MDApOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMuX2J0bkxvY2spIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fYnRuTG9jayA9IHRydWU7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fYnRuTG9jayA9IGZhbHNlO1xuICAgICAgICB9LCB0aW1lKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgcmVtb3ZlTm9kZShub2RlOiBjYy5Ob2RlKSB7XG4gICAgICAgIGlmICghbm9kZSB8fCAhbm9kZS5wYXJlbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIG5vZGUucmVtb3ZlRnJvbVBhcmVudCgpO1xuICAgICAgICBub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgLy8gbm9kZS5yZW1vdmVGcm9tUGFyZW50KCk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyByZW1vdmVBbGxDaGlsZHJlbihub2RlOiBjYy5Ob2RlKSB7XG4gICAgICAgIGlmICghbm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbm9kZS5kZXN0cm95QWxsQ2hpbGRyZW4oKTtcbiAgICAgICAgbm9kZS5yZW1vdmVBbGxDaGlsZHJlbigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOe9rueBsFxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgdG9HcmV5KHNwcjogY2MuUmVuZGVyQ29tcG9uZW50KSB7XG4gICAgICAgIGlmICghc3ByKSByZXR1cm47XG4gICAgICAgIGNvbnN0IG1hdE5hbWUgPSAnMmQtZ3JheS1zcHJpdGUnO1xuICAgICAgICBjb25zdCB2YXJpYW50MSA9IGNjLk1hdGVyaWFsVmFyaWFudC5nZXRCdWlsdGluTWF0ZXJpYWwobWF0TmFtZSk7XG4gICAgICAgIHNwci5zZXRNYXRlcmlhbCgwLCB2YXJpYW50MSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5oGi5aSN5b2p6ImyXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyB0b0NvbG9yKHNwcjogY2MuUmVuZGVyQ29tcG9uZW50KSB7XG4gICAgICAgIGlmICghc3ByKSByZXR1cm47XG4gICAgICAgIGNvbnN0IG1hdE5hbWUgPSAnMmQtc3ByaXRlJztcbiAgICAgICAgY29uc3QgdmFyaWFudDEgPSBjYy5NYXRlcmlhbFZhcmlhbnQuZ2V0QnVpbHRpbk1hdGVyaWFsKG1hdE5hbWUpO1xuICAgICAgICBzcHIuc2V0TWF0ZXJpYWwoMCwgdmFyaWFudDEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOaMh+WumuiKgueCueS4i+aJgOacieWbvueJhyDnva7ngbBcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHRvR3JleU5vZGUobm9kZTogY2MuTm9kZSkge1xuICAgICAgICBpZiAoIW5vZGUpIHJldHVybjtcbiAgICAgICAgY29uc3Qgc3BycyA9IG5vZGUuZ2V0Q29tcG9uZW50c0luQ2hpbGRyZW4oY2MuUmVuZGVyQ29tcG9uZW50KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcHJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBlYWNoU3ByID0gc3Byc1tpXTtcbiAgICAgICAgICAgIHRoaXMudG9HcmV5KGVhY2hTcHIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOaMh+WumuiKgueCueS4i+aJgOacieWbvueJhyDnva7ngbBcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHRvQ29sb3JOb2RlKG5vZGU6IGNjLk5vZGUpIHtcbiAgICAgICAgaWYgKCFub2RlKSByZXR1cm47XG4gICAgICAgIGNvbnN0IHNwcnMgPSBub2RlLmdldENvbXBvbmVudHNJbkNoaWxkcmVuKGNjLlJlbmRlckNvbXBvbmVudCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3Bycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZWFjaFNwciA9IHNwcnNbaV07XG4gICAgICAgICAgICB0aGlzLnRvQ29sb3IoZWFjaFNwcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDmtJfniYxcbiAgICBwdWJsaWMgc3RhdGljIHNodWZmbGUoYXJyKSB7XG4gICAgICAgIGxldCBsZW4gPSBhcnIubGVuZ3RoO1xuICAgICAgICBsZXQgcmFuZG9tSW5kZXg7IGxldFxuICAgICAgICAgICAgdGVtcDtcbiAgICAgICAgd2hpbGUgKGxlbikge1xuICAgICAgICAgICAgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobGVuLS0pKTtcbiAgICAgICAgICAgIHRlbXAgPSBhcnJbcmFuZG9tSW5kZXhdO1xuICAgICAgICAgICAgYXJyW3JhbmRvbUluZGV4XSA9IGFycltsZW5dO1xuICAgICAgICAgICAgYXJyW2xlbl0gPSB0ZW1wO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFycjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHNodWZmbGUyKGFycjogQXJyYXk8bnVtYmVyPikge1xuICAgICAgICBsZXQgYXJyMTogQXJyYXk8bnVtYmVyPiA9IFtdO1xuICAgICAgICBsZXQgYXJyMjogQXJyYXk8bnVtYmVyPiA9IFtdO1xuXG4gICAgICAgIGNvbnN0IGggPSBhcnIubGVuZ3RoIC8gMjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpIDw9IGgpIHtcbiAgICAgICAgICAgICAgICBhcnIxLnB1c2goYXJyW2ldKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYXJyMi5wdXNoKGFycltpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBhcnIxID0gdGhpcy5zaHVmZmxlKGFycjEpO1xuICAgICAgICBhcnIyID0gdGhpcy5zaHVmZmxlKGFycjIpO1xuICAgICAgICByZXR1cm4gWy4uLmFycjIsIC4uLmFycjFdO1xuICAgIH1cbiAgICAvLyDljrvph43lubbnp7vpmaTpgJflj7dcbiAgICBzdGF0aWMgaWx0ZXJSZXBlYXRTdHIoc3RyKSB7XG4gICAgICAgIGNvbnN0IHJzID0gW10uZmlsdGVyLmNhbGwoc3RyLCAocywgaSwgbykgPT4gby5pbmRleE9mKHMpID09IGkpLmpvaW4oJycpO1xuICAgICAgICByZXR1cm4gcnMudG9TdHJpbmcoKS5yZXBsYWNlKC8sL2csICcnKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0VmFsdWUocm9vdDogYW55LCBrZXk6IHN0cmluZykge1xuICAgICAgICBjb25zdCBrZXlzID0ga2V5LnNwbGl0KCcuJyk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSByb290W2tleXNbMF1dO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZVtrZXlzW2ldXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlgZznlZnlnKjliqjnlLvnmoTnrKzkuIDluKdcbiAgICAgKiBAcGFyYW0gYW5pbVxuICAgICAqIEBwYXJhbSBuYW1lXG4gICAgICovXG4gICAgc3RhdGljIGFuaW1hdGlvbkdvdG9TdGFydChhbmltOiBjYy5BbmltYXRpb24sIG5hbWU6IHN0cmluZyB8IG51bWJlcik6IHZvaWQge1xuICAgICAgICBsZXQgYW5pbV9uYW1lID0gbmFtZTtcbiAgICAgICAgaWYgKHR5cGVvZiBuYW1lID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgYW5pbV9uYW1lID0gYW5pbS5nZXRDbGlwcygpW25hbWVdLm5hbWU7XG4gICAgICAgIH1cblxuICAgICAgICBhbmltLnBsYXkoU3RyaW5nKGFuaW1fbmFtZSksIDApO1xuICAgICAgICBhbmltLnNhbXBsZShTdHJpbmcoYW5pbV9uYW1lKSk7XG4gICAgICAgIGFuaW0uc3RvcCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDlgZznlZnlnKjliqjnlLvnmoTmnIDlkI7kuIDluKdcbiAgICAgKiBAcGFyYW0gYW5pbVxuICAgICAqIEBwYXJhbSBuYW1lXG4gICAgICovXG4gICAgc3RhdGljIGFuaW1hdGlvbkdvdG9FbmQoYW5pbTogY2MuQW5pbWF0aW9uLCBuYW1lOiBzdHJpbmcgfCBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgbGV0IGFuaW1fa2V5ID0gbmFtZTtcbiAgICAgICAgbGV0IGFuaW1fdmFsdWUgPSBuYW1lO1xuICAgICAgICBpZiAodHlwZW9mIG5hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBhbmltLmdldENsaXBzKCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoYW5pbS5nZXRDbGlwcygpW2tleV0ubmFtZSA9PT0gbmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBhbmltX2tleSA9IGtleTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBuYW1lID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgYW5pbV92YWx1ZSA9IGFuaW0uZ2V0Q2xpcHMoKVtuYW1lXS5uYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYW5pbV90aW1lID0gYW5pbS5nZXRDbGlwcygpW2FuaW1fa2V5XS5kdXJhdGlvbjtcbiAgICAgICAgYW5pbS5wbGF5KFN0cmluZyhhbmltX3ZhbHVlKSwgYW5pbV90aW1lKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmjIflrprml6XmnJ/nmoTmmJ/luqfkv6Hmga9cbiAgICAgKiBAcGFyYW0gbSDmnIjku70gMX5cbiAgICAgKiBAcGFyYW0gZCDml6XmnJ8gMX5cbiAgICAgKiBAcmV0dXJucyB7aW5kZXg65pif5bqn57yW5Y+3KDB+MTEpIHNab2RpYWM65pif5bqn5ZCNIHNCZXR3ZWVuOuaJgOWcqOaXpeacn+WMuumXtH1cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIEdldFpvZGlhYyhtOiBudW1iZXIsIGQ6IG51bWJlcik6IHsgaW5kZXg6IG51bWJlciwgc1pvZGlhYzogc3RyaW5nLCBzQmV0d2Vlbjogc3RyaW5nIH0ge1xuICAgICAgICBjb25zdCBzID0gJ+mtlOe+r+awtOeTtuWPjOmxvOeJoee+iumHkeeJm+WPjOWtkOW3qOifueeLruWtkOWkhOWls+WkqeenpOWkqeidjuWwhOaJi+mtlOe+ryc7XG4gICAgICAgIGNvbnN0IGFyciA9IFsyMCwgMTksIDIxLCAyMSwgMjEsIDIyLCAyMywgMjMsIDIzLCAyMywgMjIsIDIyXTtcbiAgICAgICAgbGV0IGluZGV4ID0gbSAtIChkIDwgYXJyW20gLSAxXSA/IDEgOiAwKTtcbiAgICAgICAgaW5kZXggPSBpbmRleCA9PSAxMiA/IDAgOiBpbmRleFxuICAgICAgICBjb25zdCBzWm9kaWFjID0gYCR7cy5zdWJzdHIoaW5kZXggKiAyLCAyKX3luqdgO1xuICAgICAgICBjb25zdCBwcmVNb250aCA9IChtIC0gMikgPCAwID8gMTEgOiArKG0gLSAyKTtcbiAgICAgICAgY29uc3QgYmFja01vbnRoID0gKG0gKyAxKSA+IDEyID8gMSA6ICsobSArIDEpO1xuICAgICAgICBjb25zdCBmcm9udCA9IChkIDwgYXJyW20gLSAxXSA/IChgJHtwcmVNb250aCArIDF9LiR7YXJyW3ByZU1vbnRoXX1gKSA6IChgJHttfS4ke2FyclttIC0gMV19YCkpO1xuICAgICAgICBjb25zdCBiYWNrID0gKGQgPCBhcnJbbSAtIDFdID8gYCR7bX0uJHthcnJbaW5kZXhdIC0gMX1gIDogYCR7YmFja01vbnRofS4ke2FycltiYWNrTW9udGggLSAxXSAtIDF9YCk7XG4gICAgICAgIGNvbnN0IHNCZXR3ZWVuID0gYCR7ZnJvbnR9LSR7YmFja31gXG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coKGluZGV4ICsgXCIgXCIgKyBzWm9kaWFjICsgXCIgXCIgKyBzQmV0d2VlbikpO1xuXG4gICAgICAgIHJldHVybiB7IGluZGV4LCBzWm9kaWFjLCBzQmV0d2VlbiB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Z+65LqO5p+Q5qih5Z2X5r+A5rS75pe26Ze05ZCO55qEIOWRqOWHoCAxflxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRHYW1lRGF5KHRpbWVTdGFydDogbnVtYmVyKSB7XG4gICAgICAgIHRpbWVTdGFydCA9IFV0aWxzLmdldERheUJlZ2luVGltZSh0aW1lU3RhcnQpO1xuICAgICAgICBjb25zdCB0aW1lQ3VyID0gVXRpbHMuZ2V0RGF5QmVnaW5UaW1lKFV0aWxzLmdldEN1clRpbWUoKSk7XG5cbiAgICAgICAgY29uc3Qgc2Vjb25kX29mX3dlZWsgPSAodGltZUN1ciAtIHRpbWVTdGFydCkgJSAoNyAqIEdsb2JhbERlZmluZXMuU2Vjb25kX0RheSk7XG4gICAgICAgIGNvbnN0IGRheSA9IE1hdGguZmxvb3Ioc2Vjb25kX29mX3dlZWsgLyBHbG9iYWxEZWZpbmVzLlNlY29uZF9EYXkpICsgMTtcbiAgICAgICAgcmV0dXJuIGRheTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDln7rkuo7mn5DmqKHlnZfmv4DmtLvml7bpl7TlkI7nmoQg56ys5Yeg5ZGoIDB+XG4gICAgICovXG4gICAgc3RhdGljIGdldFdlZWsodGhlVGltZTogbnVtYmVyLCB0aW1lU3RhcnQ6IG51bWJlcikge1xuICAgICAgICB0aW1lU3RhcnQgPSBVdGlscy5nZXREYXlCZWdpblRpbWUodGltZVN0YXJ0KTtcbiAgICAgICAgdGhlVGltZSA9IFV0aWxzLmdldERheUJlZ2luVGltZSh0aGVUaW1lKTtcblxuICAgICAgICBjb25zdCB3ZWVrID0gTWF0aC5mbG9vcigodGhlVGltZSAtIHRpbWVTdGFydCkgLyAoNyAqIEdsb2JhbERlZmluZXMuU2Vjb25kX0RheSAqIDEwMDApKTtcbiAgICAgICAgcmV0dXJuIHdlZWs7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyB0d29Qb2ludERpc3RhbmNlKHBvczEsIHBvczIpIHvCoMKgwqDCoMKgwqAgLy8g5LuOZm9ybeeahOihqOWNleS4reWIhuWIq+aPkOWPluS4pOS4queCueeahOaoquOAgee6teWdkOagh1xuICAgICAgICBjb25zdCB4MSA9IHBvczEueDvCoMKgIC8vIOesrOS4gOS4queCueeahOaoquWdkOagh1xuICAgICAgICBjb25zdCB5MSA9IHBvczEueTvCoMKgIC8vIOesrOS4gOS4queCueeahOe6teWdkOagh1xuICAgICAgICBjb25zdCB4MiA9IHBvczIueDvCoMKgIC8vIOesrOS6jOS4queCueeahOaoquWdkOagh1xuICAgICAgICBjb25zdCB5MiA9IHBvczIueTvCoMKgIC8vIOesrOS6jOS4queCueeahOe6teWdkOagh1xuICAgICAgICBjb25zdCB4ZGlmZiA9IHgyIC0geDE7wqDCoMKgwqDCoMKgwqDCoMKgwqDCoCAvLyDorqHnrpfkuKTkuKrngrnnmoTmqKrlnZDmoIfkuYvlt65cbiAgICAgICAgY29uc3QgeWRpZmYgPSB5MiAtIHkxO8KgwqDCoMKgwqDCoMKgwqDCoMKgwqAgLy8g6K6h566X5Lik5Liq54K555qE57q15Z2Q5qCH5LmL5beuXG4gICAgICAgIHJldHVybiBNYXRoLnBvdygoeGRpZmYgKiB4ZGlmZiArIHlkaWZmICogeWRpZmYpLCAwLjUpO8KgwqAgLy8g6K6h566X5Lik54K55LmL6Ze055qE6Led56a777yM5bm25bCG57uT5p6c6L+U5Zue6KGo5Y2V5YWD57SgXG4gICAgfVxuXG4gICAgc3RhdGljIGFkYXB0aXZlTm90ZUxheW91dCgpIHtcbiAgICAgICAgY29uc3Qgd2luU2l6ZSA9IGNjLndpblNpemU7Ly8g6I635Y+W5b2T5YmN5ri45oiP56qX5Y+j5aSn5bCPXG4gICAgICAgIGNjLmxvZyhgLS3lvZPliY3muLjmiI/nqpflj6PlpKflsI8gIHc6JHt3aW5TaXplLndpZHRofSAgIGg6JHt3aW5TaXplLmhlaWdodH1gKTtcblxuICAgICAgICBjb25zdCB2aWV3U2l6ZSA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCk7XG4gICAgICAgIGNjLmxvZyhgLS3op4blm77ovrnmoYblsLrlr7jvvJp3OiR7dmlld1NpemUud2lkdGh9ICBoOiR7dmlld1NpemUuaGVpZ2h0fWApO1xuXG4gICAgICAgIGNvbnN0IGNhbnZhc1NpemUgPSBjYy52aWV3LmdldENhbnZhc1NpemUoKTsvLyDop4blm77kuK1jYW52YXPlsLrlr7hcbiAgICAgICAgY2MubG9nKGAtLeinhuWbvuS4rWNhbnZhc+WwuuWvuCAgdzoke2NhbnZhc1NpemUud2lkdGh9ICBIOiR7Y2FudmFzU2l6ZS5oZWlnaHR9YCk7XG5cbiAgICAgICAgY29uc3QgdmlzaWJsZVNpemUgPSBjYy52aWV3LmdldFZpc2libGVTaXplKCk7XG4gICAgICAgIGNjLmxvZyhgLS3op4blm77kuK3nqpflj6Plj6/op4HljLrln5/nmoTlsLrlr7ggdzoke3Zpc2libGVTaXplLndpZHRofSAgIGg6JHt2aXNpYmxlU2l6ZS5oZWlnaHR9YCk7XG5cbiAgICAgICAgY29uc3QgZGVzaWduU2l6ZSA9IGNjLnZpZXcuZ2V0RGVzaWduUmVzb2x1dGlvblNpemUoKTtcbiAgICAgICAgY2MubG9nKGAtLeiuvuiuoeWIhui+qOeOh++8miR7ZGVzaWduU2l6ZS53aWR0aH0gICAgaDogJHtkZXNpZ25TaXplLmhlaWdodH1gKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGZpbmROb2RlQnlOYW1lKHJvb3QsIG5hbWUpIHtcbiAgICAgICAgaWYgKHJvb3QpIHtcbiAgICAgICAgICAgIGxldCB3aWRnZXQgPSByb290LmdldENoaWxkQnlOYW1lKG5hbWUpO1xuICAgICAgICAgICAgaWYgKHdpZGdldCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB3aWRnZXRcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgY2hpbGRyZW4gPSByb290LmNoaWxkcmVuXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGMgb2YgY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICB3aWRnZXQgPSBVdGlscy5maW5kTm9kZUJ5TmFtZShjLCBuYW1lKVxuICAgICAgICAgICAgICAgIGlmICh3aWRnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdpZGdldFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgc3RhdGljIGdldEFuZ2xlKHN0YXJ0LCBlbmQpIHtcbiAgICAgICAgLy8g6K6h566X5Ye65pyd5ZCRXG4gICAgICAgIGNvbnN0IGR4ID0gZW5kLnggLSBzdGFydC54O1xuICAgICAgICBjb25zdCBkeSA9IGVuZC55IC0gc3RhcnQueTtcbiAgICAgICAgY29uc3QgZGlyID0gY2MudjIoZHgsIGR5KTtcblxuICAgICAgICAvLyDmoLnmja7mnJ3lkJHorqHnrpflh7rlpLnop5LlvKfluqZcbiAgICAgICAgY29uc3QgYW5nbGUgPSBkaXIuc2lnbkFuZ2xlKGNjLnYyKDEsIDApKTtcblxuICAgICAgICAvLyDlsIblvKfluqbovazmjaLkuLrmrKfmi4nop5JcbiAgICAgICAgY29uc3QgZGVncmVlID0gYW5nbGUgLyBNYXRoLlBJICogMTgwO1xuXG4gICAgICAgIHJldHVybiBkZWdyZWVcbiAgICB9XG5cbiAgICAvLyDmiorkuIDkuKroioLngrnkuIvnmoTlnZDmoIfovazmiJDlj6bkuIDkuKroioLngrnnmoTlnZDmoIdcbiAgICBzdGF0aWMgY29udmVydE5vZGVUb05vZGVTcGFjZShub2RlLCB0YXJnZXRQYXJlbnQpIHtcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQobm9kZSkpIHtcbiAgICAgICAgICAgIGlmICghIW5vZGUucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgd3BvcyA9IG5vZGUucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihub2RlLmdldFBvc2l0aW9uKCkpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNjLmlzVmFsaWQodGFyZ2V0UGFyZW50KSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0UGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHdwb3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNjLmxvZygn5Z2Q5qCH6L2s5o2i5pyJ6Zeu6aKYJyk7XG4gICAgICAgIHJldHVybiBjYy52MigwLCAwKTtcbiAgICB9XG4gICAgc3RhdGljIHJhbmRvbUJ5V2VpZ2h0TGlzdCh3ZWlnaHRBcnI6IEFycmF5PG51bWJlcj4pIHtcbiAgICAgICAgbGV0IGFsbFdlaWdodCA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd2VpZ2h0QXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhbGxXZWlnaHQgKz0gd2VpZ2h0QXJyW2ldO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmQgPSBVdGlscy5yYW5kb21GbG9hdCgwLCBhbGxXZWlnaHQpO1xuXG4gICAgICAgIGxldCB0bXAgPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdlaWdodEFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdG1wICs9IHdlaWdodEFycltpXTtcbiAgICAgICAgICAgIGlmIChyZCA8IHRtcCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgLy8g5pWw57uEY29weVxuICAgIHN0YXRpYyBhcnJheUNvcHkoc291cmNlQXJyOiBBcnJheTxhbnk+LCBkZXN0QXJyOiBBcnJheTxhbnk+KSB7XG4gICAgICAgIGlmICghIXNvdXJjZUFyciAmJiAhIWRlc3RBcnIpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBzb3VyY2VBcnIubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHNvdXJjZUFycltpbmRleF07XG4gICAgICAgICAgICAgICAgZGVzdEFyci5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5pS55Y+Y6IqC54K56aKc6ImyXG4gICAgICogQHBhcmFtIG5vZGVcbiAgICAgKiBAcGFyYW0gY29sb3JcbiAgICAgKi9cbiAgICBzdGF0aWMgY2hhbmdlQ29sb3Iobm9kZTogY2MuTm9kZSwgY29sb3I6IHN0cmluZykge1xuICAgICAgICBub2RlLmNvbG9yID0gbmV3IGNjLkNvbG9yKCkuZnJvbUhFWChjb2xvcik7XG4gICAgfVxuXG4gICAgLy8g6Kej5a+GXG4gICAgc3RhdGljIGRlY29kZUF0b0IodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChhdG9iKHZhbHVlKSk7XG4gICAgfVxuXG4gICAgLy8g5Yqg5a+GXG4gICAgc3RhdGljIGVuY29kZUJ0b0EodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGJ0b2EoZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog566A5Y2V55Sf5oiQ5LiA5Liq5ZSv5LiASURcbiAgICAgKiBAcmV0dXJuc1xuICAgICAqL1xuICAgIHN0YXRpYyBSYW5kb21JZFN0cmluZzogc3RyaW5nID0gJzEyMzQ1Njc4OTBBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6XydcbiAgICBzdGF0aWMgbmV4dFJhbmRvbUlkKCkge1xuICAgICAgICAvKlxuICAgICAgICAgKiBsZXQgZGF0ZSA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCk7Ly/ojrflj5bml7bpl7TmiLNcbiAgICAgICAgICogaWYgKGlzU2ltcGxlKSB7XG4gICAgICAgICAqICAgICByZXR1cm4gZGF0ZSArIFwiXCI7XG4gICAgICAgICAqIH1cbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IGxlbiA9IDg7Ly8g5py65Zmo56CB5pyJ5aSa5bCR5L2NXG4gICAgICAgIGxldCBwd2QgPSAnJzsvLyDlrprkuYnnqbrlj5jph4/nlKjmnaXmjqXmlLbmnLrlmajnoIFcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgcHdkICs9IFV0aWxzLlJhbmRvbUlkU3RyaW5nLmNoYXJBdChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBVdGlscy5SYW5kb21JZFN0cmluZy5sZW5ndGgpKTsvLyDlvqrnjq/mnLrlmajnoIHkvY3mlbDpmo/mnLrloavlhYVcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwd2Q7XG4gICAgfVxuXG4gICAgc3RhdGljIGRpc3RhbmNlQnlWMihhOiBjYy5WZWMyLCBiOiBjYy5WZWMyKSB7XG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gYS5zdWIoYikubWFnKCk7XG4gICAgICAgIHJldHVybiBkaXN0YW5jZTtcbiAgICB9XG4gICAgc3RhdGljIGRpc3RhbmNlQnlOb2RlKGE6IGNjLk5vZGUsIGI6IGNjLk5vZGUpIHtcbiAgICAgICAgY29uc3QgcDEgPSBhLmdldFBvc2l0aW9uKCk7XG4gICAgICAgIGNvbnN0IHAyID0gYi5nZXRQb3NpdGlvbigpO1xuICAgICAgICBjb25zdCBkaXN0YW5jZSA9IHAxLnN1YihwMikubWFnKCk7XG4gICAgICAgIHJldHVybiBkaXN0YW5jZTtcbiAgICB9XG4gICAgLy8g5qC55o2u6ZW/5bqm6I635Y+W6ZqP5py65qaC546H5pWw57uEXG4gICAgc3RhdGljIGdldFJhbmRvbVJhdGVzKGxlbikge1xuICAgICAgICBjb25zdCBwcm9iYWJpbGl0aWVzID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogbGVuIH0sICgpID0+IE1hdGgucmFuZG9tKCkpO1xuICAgICAgICBjb25zdCBzdW0gPSBwcm9iYWJpbGl0aWVzLnJlZHVjZSgoYSwgYikgPT4gYSArIGIsIDApO1xuICAgICAgICByZXR1cm4gcHJvYmFiaWxpdGllcy5tYXAoKHApID0+IHAgLyBzdW0pO1xuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/merge/game/Game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '650a2ldzTZM6Joa8EAO498E', 'Game');
// script/merge/game/Game.ts

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
var GameModule_1 = require("../dataModule/GameModule");
var Define_1 = require("../manager/Define");
var Uimanager_1 = require("../manager/Uimanager");
var EventManager_1 = require("../util/EventManager");
var Slot_1 = require("./Slot");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Game = /** @class */ (function (_super) {
    __extends(Game, _super);
    function Game() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.uBoxSlot = null;
        _this.uBtnProduce = null;
        _this.uBtnTidyUp = null;
        _this.uBtnMerge = null;
        // 缓存槽位的节点
        _this.slots = [];
        return _this;
    }
    Game.prototype.onLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.uBtnMerge.on(cc.Node.EventType.TOUCH_END, this.onMerge, this);
                        this.uBtnProduce.on(cc.Node.EventType.TOUCH_END, this.onProduce, this);
                        this.uBtnTidyUp.on(cc.Node.EventType.TOUCH_END, this.onTidyUp, this);
                        EventManager_1.eventManager.on(Define_1.EventType.CHECK_MERGE, this.updateBtn, this);
                        return [4 /*yield*/, this.addSlot()];
                    case 1:
                        _a.sent();
                        this.formatSlotData();
                        this.updateBtn();
                        return [2 /*return*/];
                }
            });
        });
    };
    Game.prototype.start = function () {
    };
    // 初始化预制组件
    Game.prototype.addSlot = function () {
        return __awaiter(this, void 0, void 0, function () {
            var slotW, slotH, dx, dy, i, row, col, slotPrefab, slot;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        slotW = 116;
                        slotH = 212;
                        dx = (608 - slotW * 4) / 3;
                        dy = (this.uBoxSlot.height - slotH * 2) + slotH;
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < 8)) return [3 /*break*/, 4];
                        row = Math.floor(i / 4);
                        col = i % 4;
                        return [4 /*yield*/, Uimanager_1.uimanager.loadPrefab('prefab/merge/slot')];
                    case 2:
                        slotPrefab = _a.sent();
                        slot = cc.instantiate(slotPrefab);
                        this.uBoxSlot.addChild(slot);
                        slot.x = col * slotW + dx * col;
                        slot.y = -slotH - dy * row;
                        this.slots.push(slot);
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    // 格式化填充游戏数据
    Game.prototype.formatSlotData = function () {
        for (var i = 0; i < 8; i++) {
            this.slots[i].getComponent(Slot_1.default).formatData(i, GameModule_1.gameModule.slotData[i]);
            EventManager_1.eventManager.dispatch(Define_1.EventType.CHECK_MERGE);
        }
    };
    // 更新按钮的显示状态
    Game.prototype.updateBtn = function () {
        var canMerge = GameModule_1.gameModule.checkCanMerge();
        this.uBtnMerge.active = canMerge.length > 0;
    };
    // 合成
    Game.prototype.onMerge = function () {
        EventManager_1.eventManager.dispatch(Define_1.EventType.MERGE_COIN);
    };
    // 发牌
    Game.prototype.onProduce = function () {
        var startPosIdxs = [];
        for (var i = 0; i < 8; i++) {
            for (var j = 0; j < 10; j++) {
                if (GameModule_1.gameModule.slotData[i][j] === 0) {
                    startPosIdxs.push(j);
                    break;
                }
                if (j === 9) {
                    startPosIdxs.push(9);
                }
            }
        }
        var newCoinData = GameModule_1.gameModule.produceNewCoinData();
        for (var i = 0; i < this.slots.length; i++) {
            this.slots[i].getComponent(Slot_1.default).produce(newCoinData[i], this.node.convertToWorldSpaceAR(this.uBtnProduce.getPosition()), startPosIdxs[i]);
        }
        GameModule_1.gameModule.mergeProduceData(newCoinData);
    };
    // 整理
    Game.prototype.onTidyUp = function () { };
    __decorate([
        property(cc.Node)
    ], Game.prototype, "uBoxSlot", void 0);
    __decorate([
        property(cc.Node)
    ], Game.prototype, "uBtnProduce", void 0);
    __decorate([
        property(cc.Node)
    ], Game.prototype, "uBtnTidyUp", void 0);
    __decorate([
        property(cc.Node)
    ], Game.prototype, "uBtnMerge", void 0);
    Game = __decorate([
        ccclass
    ], Game);
    return Game;
}(cc.Component));
exports.default = Game;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvbWVyZ2UvZ2FtZS9HYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVEQUFzRDtBQUN0RCw0Q0FBOEM7QUFDOUMsa0RBQWlEO0FBQ2pELHFEQUFvRDtBQUNwRCwrQkFBMEI7QUFFcEIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUFzR0M7UUFwR0csY0FBUSxHQUFZLElBQUksQ0FBQztRQUd6QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUc1QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUczQixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLFVBQVU7UUFDRixXQUFLLEdBQVcsRUFBRSxDQUFDOztJQXdGL0IsQ0FBQztJQXRGUyxxQkFBTSxHQUFaOzs7Ozt3QkFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQzt3QkFDbkUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7d0JBQ3ZFLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO3dCQUVyRSwyQkFBWSxDQUFDLEVBQUUsQ0FBQyxrQkFBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBUyxF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b2R1bGUgfSBmcm9tICcuLi9kYXRhTW9kdWxlL0dhbWVNb2R1bGUnO1xuaW1wb3J0IHsgRXZlbnRUeXBlIH0gZnJvbSAnLi4vbWFuYWdlci9EZWZpbmUnO1xuaW1wb3J0IHsgdWltYW5hZ2VyIH0gZnJvbSAnLi4vbWFuYWdlci9VaW1hbmFnZXInO1xuaW1wb3J0IHsgZXZlbnRNYW5hZ2VyIH0gZnJvbSAnLi4vdXRpbC9FdmVudE1hbmFnZXInO1xuaW1wb3J0IFNsb3QgZnJvbSAnLi9TbG90JztcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHVCb3hTbG90OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHVCdG5Qcm9kdWNlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHVCdG5UaWR5VXA6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgdUJ0bk1lcmdlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIC8vIOe8k+WtmOanveS9jeeahOiKgueCuVxuICAgIHByaXZhdGUgc2xvdHM6IFNsb3RbXSA9IFtdO1xuXG4gICAgYXN5bmMgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLnVCdG5NZXJnZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25NZXJnZSwgdGhpcyk7XG4gICAgICAgIHRoaXMudUJ0blByb2R1Y2Uub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uUHJvZHVjZSwgdGhpcyk7XG4gICAgICAgIHRoaXMudUJ0blRpZHlVcC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25UaWR5VXAsIHRoaXMpO1xuXG4gICAgICAgIGV2ZW50TWFuYWdlci5vbihFdmVudFR5cGUuQ0hFQ0tfTUVSR0UsIHRoaXMudXBkYXRlQnRuLCB0aGlzKTtcblxuICAgICAgICBhd2FpdCB0aGlzLmFkZFNsb3QoKTtcbiAgICAgICAgdGhpcy5mb3JtYXRTbG90RGF0YSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZUJ0bigpO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuXG4gICAgfVxuXG4gICAgLy8g5Yid5aeL5YyW6aKE5Yi257uE5Lu2XG4gICAgYXN5bmMgYWRkU2xvdCgpIHtcbiAgICAgICAgY29uc3Qgc2xvdFcgPSAxMTY7XG4gICAgICAgIGNvbnN0IHNsb3RIID0gMjEyO1xuICAgICAgICBjb25zdCBkeCA9ICg2MDggLSBzbG90VyAqIDQpIC8gMztcbiAgICAgICAgY29uc3QgZHkgPSAodGhpcy51Qm94U2xvdC5oZWlnaHQgLSBzbG90SCAqIDIpICsgc2xvdEg7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IE1hdGguZmxvb3IoaSAvIDQpO1xuICAgICAgICAgICAgY29uc3QgY29sID0gaSAlIDQ7XG5cbiAgICAgICAgICAgIGNvbnN0IHNsb3RQcmVmYWIgPSBhd2FpdCB1aW1hbmFnZXIubG9hZFByZWZhYigncHJlZmFiL21lcmdlL3Nsb3QnKTtcbiAgICAgICAgICAgIGNvbnN0IHNsb3QgPSBjYy5pbnN0YW50aWF0ZShzbG90UHJlZmFiKTtcbiAgICAgICAgICAgIHRoaXMudUJveFNsb3QuYWRkQ2hpbGQoc2xvdCk7XG4gICAgICAgICAgICBzbG90LnggPSBjb2wgKiBzbG90VyArIGR4ICogY29sO1xuICAgICAgICAgICAgc2xvdC55ID0gLXNsb3RIIC0gZHkgKiByb3c7XG5cbiAgICAgICAgICAgIHRoaXMuc2xvdHMucHVzaChzbG90KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIOagvOW8j+WMluWhq+WFhea4uOaIj+aVsOaNrlxuICAgIHByaXZhdGUgZm9ybWF0U2xvdERhdGEoKTogdm9pZCB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnNsb3RzW2ldLmdldENvbXBvbmVudChTbG90KS5mb3JtYXREYXRhKGksIGdhbWVNb2R1bGUuc2xvdERhdGFbaV0pO1xuICAgICAgICAgICAgZXZlbnRNYW5hZ2VyLmRpc3BhdGNoKEV2ZW50VHlwZS5DSEVDS19NRVJHRSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDmm7TmlrDmjInpkq7nmoTmmL7npLrnirbmgIFcbiAgICB1cGRhdGVCdG4oKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGNhbk1lcmdlID0gZ2FtZU1vZHVsZS5jaGVja0Nhbk1lcmdlKCk7XG4gICAgICAgIHRoaXMudUJ0bk1lcmdlLmFjdGl2ZSA9IGNhbk1lcmdlLmxlbmd0aCA+IDA7XG4gICAgfVxuXG4gICAgLy8g5ZCI5oiQXG4gICAgb25NZXJnZSgpIHtcbiAgICAgICAgZXZlbnRNYW5hZ2VyLmRpc3BhdGNoKEV2ZW50VHlwZS5NRVJHRV9DT0lOKTtcbiAgICB9XG5cbiAgICAvLyDlj5HniYxcbiAgICBvblByb2R1Y2UoKSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0UG9zSWR4czogbnVtYmVyW10gPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChnYW1lTW9kdWxlLnNsb3REYXRhW2ldW2pdID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0UG9zSWR4cy5wdXNoKGopO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoaiA9PT0gOSkge1xuICAgICAgICAgICAgICAgICAgICBzdGFydFBvc0lkeHMucHVzaCg5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBuZXdDb2luRGF0YSA9IGdhbWVNb2R1bGUucHJvZHVjZU5ld0NvaW5EYXRhKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zbG90cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5zbG90c1tpXS5nZXRDb21wb25lbnQoU2xvdCkucHJvZHVjZShcbiAgICAgICAgICAgICAgICBuZXdDb2luRGF0YVtpXSxcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMudUJ0blByb2R1Y2UuZ2V0UG9zaXRpb24oKSksXG4gICAgICAgICAgICAgICAgc3RhcnRQb3NJZHhzW2ldXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgZ2FtZU1vZHVsZS5tZXJnZVByb2R1Y2VEYXRhKG5ld0NvaW5EYXRhKTtcbiAgICB9XG5cbiAgICAvLyDmlbTnkIZcbiAgICBvblRpZHlVcCgpIHsgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/merge/manager/Define.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b316ef97uJJrLtjj1+6n+lc', 'Define');
// script/merge/manager/Define.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventType = void 0;
var EventType;
(function (EventType) {
    EventType["MOVE_COIN"] = "move_coin";
    EventType["MOVE_END"] = "move_end";
    EventType["CHECK_MERGE"] = "check_merge";
    EventType["MERGE_COIN"] = "merge_coin";
})(EventType = exports.EventType || (exports.EventType = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvbWVyZ2UvbWFuYWdlci9EZWZpbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBWSxTQUtYO0FBTEQsV0FBWSxTQUFTO0lBQ2pCLG9DQUF1QixDQUFBO0lBQ3ZCLGtDQUFxQixDQUFBO0lBQ3JCLHdDQUEyQixDQUFBO0lBQzNCLHNDQUF5QixDQUFBO0FBQzdCLENBQUMsRUFMVyxTQUFTLEdBQVQsaUJBQVMsS0FBVCxpQkFBUyxRQUtwQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBlbnVtIEV2ZW50VHlwZSB7XG4gICAgTU9WRV9DT0lOID0gJ21vdmVfY29pbicsXG4gICAgTU9WRV9FTkQgPSAnbW92ZV9lbmQnLFxuICAgIENIRUNLX01FUkdFID0gJ2NoZWNrX21lcmdlJyxcbiAgICBNRVJHRV9DT0lOID0gJ21lcmdlX2NvaW4nLFxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/merge/game/Slot.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dcad5zWGmVAHYWaggo3w0WB', 'Slot');
// script/merge/game/Slot.ts

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
var GameModule_1 = require("../dataModule/GameModule");
var Define_1 = require("../manager/Define");
var Uimanager_1 = require("../manager/Uimanager");
var EventManager_1 = require("../util/EventManager");
var Coin_1 = require("./Coin");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Slot = /** @class */ (function (_super) {
    __extends(Slot, _super);
    function Slot() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // 当前筹码槽位的索引
        _this.idx = 0;
        // 筹码的坐标位置
        _this.coinOriginalPos = [
            [58, 197],
            [58, 178],
            [58, 159.3],
            [58, 140],
            [58, 121],
            [58, 102],
            [58, 83],
            [58, 64],
            [58, 45],
            [58, 26],
        ];
        _this.coin0 = null;
        _this.coin1 = null;
        _this.coin2 = null;
        _this.coin3 = null;
        _this.coin4 = null;
        _this.coin5 = null;
        _this.coin6 = null;
        _this.coin7 = null;
        _this.coin8 = null;
        _this.coin9 = null;
        _this.uImgSlotSelect = null;
        _this.uImgSlotMerge = null;
        return _this;
        // update (dt) {}
    }
    Slot.prototype.onLoad = function () {
        // 添加点击事件
        this.node.on(cc.Node.EventType.TOUCH_END, this.selectAction, this);
        EventManager_1.eventManager.on(Define_1.EventType.MOVE_COIN, this.onMove, this);
        EventManager_1.eventManager.on(Define_1.EventType.MOVE_END, this.onMoveEnd, this);
        EventManager_1.eventManager.on(Define_1.EventType.CHECK_MERGE, this.onUpdateMergeStatus, this);
        EventManager_1.eventManager.on(Define_1.EventType.MERGE_COIN, this.onMerge, this);
    };
    Slot.prototype.start = function () {
    };
    Slot.prototype.formatData = function (idx, data) {
        this.idx = idx;
        for (var i = 0; i < 10; i++) {
            // data
            if (data[i] !== 0) {
                this["coin" + i].active = true;
                this["coin" + i].getComponent(Coin_1.default).init(this.idx, data[i]);
            }
            else {
                this["coin" + i].active = false;
            }
            // pos
            this["coin" + i].setPosition(cc.v2(this.coinOriginalPos[i][0], this.coinOriginalPos[i][1]));
        }
        this.node.setSiblingIndex(this.idx);
    };
    // 选择行为
    Slot.prototype.selectAction = function () {
        if (GameModule_1.gameModule.curSelectSlotIdx === -1) {
            // 初次选择行为
            this.onSelect();
        }
        else if (GameModule_1.gameModule.curSelectSlotIdx === this.idx) {
            // 取消选择行为
            this.onDeSelect();
        }
        else {
            // 移动行为 当前节点为目标节点
            this.onCheckMove();
        }
    };
    // 选中当前槽位
    Slot.prototype.onSelect = function () {
        var slotData = GameModule_1.gameModule.slotData[this.idx];
        // 选中了空的槽位
        if (slotData[0] === 0) {
            console.log('选中了空的槽位');
            return;
        }
        // 合并效果中，不可选中
        if (GameModule_1.gameModule.mergeLock) {
            console.log('正在合并中，无法选中');
            return;
        }
        GameModule_1.gameModule.curSelectSlotIdx = this.idx;
        this.uImgSlotSelect.active = true;
        this.node.setSiblingIndex(8);
        // 挑选待操作筹码的索引
        GameModule_1.gameModule.curSelectCoinIdxs = [];
        for (var i = 9; i >= 0; i--) {
            if (slotData[i] === 0)
                continue;
            if (GameModule_1.gameModule.curSelectCoinIdxs.length === 0) {
                GameModule_1.gameModule.curSelectCoinIdxs.push(i);
            }
            else if (slotData[i] === slotData[GameModule_1.gameModule.curSelectCoinIdxs[GameModule_1.gameModule.curSelectCoinIdxs.length - 1]]) {
                GameModule_1.gameModule.curSelectCoinIdxs.push(i);
            }
            else {
                break;
            }
        }
        console.log("\u9009\u4E2D\u4E86\u7B2C" + this.idx + "\u4E2A\u69FD\u7684", GameModule_1.gameModule.curSelectCoinIdxs);
        // 对待操作筹码的显示效果进行展示
        for (var i = 0; i < GameModule_1.gameModule.curSelectCoinIdxs.length; i++) {
            var tarPosY = this.coinOriginalPos[GameModule_1.gameModule.curSelectCoinIdxs[i]][1] + 25;
            cc.tween(this["coin" + GameModule_1.gameModule.curSelectCoinIdxs[i]])
                .to(0.5, { y: tarPosY }, { easing: 'backOut' })
                .start();
        }
    };
    // 取消选中
    Slot.prototype.onDeSelect = function () {
        console.log('取消选择');
        for (var i = 0; i < 10; i++) {
            // data
            var tarPosY = this.coinOriginalPos[i][1];
            cc.tween(this["coin" + i])
                .to(0.5, { y: tarPosY }, { easing: 'backOut' })
                .start();
        }
        this.uImgSlotSelect.active = false;
        // 重置选中状态
        GameModule_1.gameModule.curSelectSlotIdx = -1;
    };
    // 移动
    Slot.prototype.onCheckMove = function () {
        // 如果当前槽位已满则不允许移动
        if (GameModule_1.gameModule.slotData[this.idx].indexOf(0) === -1) {
            console.log('筹码数量已满，不可移动');
            return;
        }
        // 如果当前槽位最近的筹码与当前选中的待移动筹码类型不一致 不允许移动
        var curSlotInfo = GameModule_1.gameModule.getFirstVaildNumBySlotIdx(this.idx);
        var curSelectCoinInfo = GameModule_1.gameModule.getCurSelectSlotInfo();
        if (curSlotInfo.vaildNum !== -1 && curSlotInfo.vaildNum !== curSelectCoinInfo.num) {
            console.log('筹码类型不一致, 不可移动');
            return;
        }
        if (GameModule_1.gameModule.moveLock) {
            console.log('正在移动中，无法产生更多移动');
            return;
        }
        // 确定可以移动的筹码数量
        var moveCnt = Math.min(curSlotInfo.vaildSpace, curSelectCoinInfo.cnt);
        // 确定移动到的目标位置
        var tarPos = [];
        // 目标槽位发生数据变动的位置索引集
        var tarIdxArr = [];
        // 原槽位发生数据变动的槽位索引集
        var srcIdxArr = [];
        var startPosIdx = curSlotInfo.vaildIdx + 1;
        for (var i = 0; i < moveCnt; i++) {
            var oriPosX = this.coinOriginalPos[startPosIdx][0];
            var oriPosY = this.coinOriginalPos[startPosIdx][1];
            var globalPos = this.node.convertToWorldSpaceAR(cc.v2(oriPosX, oriPosY));
            tarPos.push(globalPos);
            tarIdxArr.push(startPosIdx);
            srcIdxArr.push(GameModule_1.gameModule.curSelectCoinIdxs[i]);
            startPosIdx++;
        }
        // 通知待移动的槽位进行筹码移动
        var eventData = {
            // 实际移动数量
            moveCnt: moveCnt,
            // 目标移动的节点对应位置(低->高)
            tarPos: tarPos,
            // 目标槽位实际发生数据变动的筹码索引集(低->低)
            tarIdxArr: tarIdxArr,
            // 原槽位实际发生移动的筹码索引集(高->低)
            srcIdxArr: srcIdxArr,
            // 实际发生的筹码类型
            numType: curSelectCoinInfo.num,
            // 目标槽位索引
            tarSlotIdx: this.idx,
        };
        EventManager_1.eventManager.dispatch(Define_1.EventType.MOVE_COIN, eventData);
    };
    // 开始进行移动
    Slot.prototype.onMove = function (e) {
        var _this = this;
        var eventData = e.data;
        if (this.idx !== GameModule_1.gameModule.curSelectSlotIdx)
            return;
        console.log("onMove: " + GameModule_1.gameModule.curSelectSlotIdx + " -> " + eventData.tarSlotIdx);
        GameModule_1.gameModule.moveLock = true;
        var moveCnt = eventData.moveCnt;
        var tarWorldPos = eventData.tarPos;
        var tarLocalPos = [];
        for (var i = tarWorldPos.length - 1; i >= 0; i--) {
            tarLocalPos.push(this.node.convertToNodeSpaceAR(tarWorldPos[i]));
        }
        // 由高到低的进行移动
        var startIdx = GameModule_1.gameModule.curSelectCoinIdxs[0];
        var _loop_1 = function (i) {
            cc.tween(this_1["coin" + startIdx])
                .delay(0.03 * i)
                .to(0.1, { position: tarLocalPos[i] })
                .call(function () {
                if (i === moveCnt - 1) {
                    GameModule_1.gameModule.tidySlotData({
                        tarSlotIdx: eventData.tarSlotIdx,
                        numType: eventData.numType,
                        srcIdxArr: eventData.srcIdxArr,
                        tarIdxArr: eventData.tarIdxArr,
                    });
                    _this.onDeSelect();
                    GameModule_1.gameModule.moveLock = false;
                }
            })
                .start();
            startIdx--;
        };
        var this_1 = this;
        for (var i = 0; i < moveCnt; i++) {
            _loop_1(i);
        }
    };
    Slot.prototype.onMoveEnd = function () {
        console.log('onMoveEnd');
        this.formatData(this.idx, GameModule_1.gameModule.slotData[this.idx]);
    };
    // 刷新合成状态
    Slot.prototype.onUpdateMergeStatus = function () {
        var canMerge = GameModule_1.gameModule.checkCanMergeBySlot(this.idx);
        this.uImgSlotMerge.active = canMerge;
        this.showMergeHintAction(canMerge);
    };
    // 提示合成
    Slot.prototype.showMergeHintAction = function (canMerge) {
        var _this = this;
        if (canMerge) {
            this.uImgSlotMerge.opacity = 0;
            cc.tween(this.uImgSlotMerge)
                .to(1, { opacity: 255 })
                .to(1, { opacity: 0 })
                .call(function () { _this.showMergeHintAction(canMerge); })
                .start();
        }
        else {
            cc.tween(this.uImgSlotMerge).stop();
            this.uImgSlotMerge.active = canMerge;
        }
    };
    // 合成
    Slot.prototype.onMerge = function () {
        var _this = this;
        var canMerge = GameModule_1.gameModule.checkCanMergeBySlot(this.idx);
        if (!canMerge)
            return;
        GameModule_1.gameModule.mergeLock += 1;
        var _loop_2 = function (i) {
            cc.tween(this_2["coin" + i])
                .delay(0.05 * (9 - i))
                .to(0.1, { scale: 0 })
                .call(function () {
                _this["coin" + i].active = false;
                _this["coin" + i].scale = 1;
                if (i === 0) {
                    _this.onMergeFinish();
                }
            })
                .start();
        };
        var this_2 = this;
        // 合成效果
        for (var i = 9; i >= 0; i--) {
            _loop_2(i);
        }
    };
    // 合成结束
    Slot.prototype.onMergeFinish = function () {
        // 合成目标值
        var mergeTargetValue = GameModule_1.gameModule.slotData[this.idx][0] + 1;
        // 合成后的数据
        GameModule_1.gameModule.slotData[this.idx] = [mergeTargetValue, mergeTargetValue, 0, 0, 0, 0, 0, 0, 0, 0];
        console.log("\u69FD" + this.idx + " \u5408\u6210" + mergeTargetValue);
        GameModule_1.gameModule.mergeLock -= 1;
        this.coin0.scale = 0;
        this.coin1.scale = 0;
        this.coin0.active = true;
        this.coin1.active = true;
        this.coin0.getComponent(Coin_1.default).init(this.idx, mergeTargetValue);
        this.coin1.getComponent(Coin_1.default).init(this.idx, mergeTargetValue);
        cc.tween(this.coin0)
            .to(0.5, { scale: 1 }, { easing: 'backOut' })
            .start();
        cc.tween(this.coin1)
            .to(0.5, { scale: 1 }, { easing: 'backOut' })
            .start();
        this.uImgSlotMerge.active = false;
    };
    // 生成筹码
    Slot.prototype.produce = function (newCoin, startGlobalPos, startPosIdx) {
        return __awaiter(this, void 0, void 0, function () {
            var localPosSrc, dealCnt, _loop_3, this_3, i;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(this.idx, newCoin);
                        // 不需要生成就不操作了
                        if (newCoin.length === 0) {
                            console.log(this.idx + "\u69FD\u65E0\u65B0\u7B79\u7801");
                            return [2 /*return*/];
                        }
                        console.log(this.idx + " \u751F\u6210\u4E86", newCoin);
                        localPosSrc = this.node.convertToNodeSpaceAR(startGlobalPos);
                        dealCnt = 0;
                        _loop_3 = function (i) {
                            var newCoinNode, coin, tarPosIdx, posTar, tarPos;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this_3.produceCoin()];
                                    case 1:
                                        newCoinNode = _a.sent();
                                        coin = newCoinNode.getComponent(Coin_1.default);
                                        this_3.node.addChild(newCoinNode);
                                        coin.node.setPosition(localPosSrc);
                                        coin.node.scale = 0;
                                        coin.node.opacity = 0;
                                        coin.init(this_3.idx, newCoin[i]);
                                        tarPosIdx = startPosIdx + dealCnt;
                                        posTar = this_3.coinOriginalPos[startPosIdx + dealCnt];
                                        tarPos = cc.v2(posTar[0], posTar[1]);
                                        cc.tween(coin.node)
                                            .delay(0.1 * dealCnt)
                                            .to(0.5, { scale: 1, opacity: 255, position: tarPos }, { easing: 'cubicInOut' })
                                            .call(function () {
                                            coin.node.destroy();
                                            _this["coin" + tarPosIdx].getComponent(Coin_1.default).init(_this.idx, newCoin[i]);
                                            _this["coin" + tarPosIdx].active = true;
                                        })
                                            .start();
                                        dealCnt++;
                                        return [2 /*return*/];
                                }
                            });
                        };
                        this_3 = this;
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < newCoin.length)) return [3 /*break*/, 4];
                        return [5 /*yield**/, _loop_3(i)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Slot.prototype.produceCoin = function () {
        return __awaiter(this, void 0, Promise, function () {
            var coinPrefab, coin;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Uimanager_1.uimanager.loadPrefab('prefab/merge/coin')];
                    case 1:
                        coinPrefab = _a.sent();
                        coin = cc.instantiate(coinPrefab);
                        return [2 /*return*/, coin];
                }
            });
        });
    };
    __decorate([
        property(cc.Node)
    ], Slot.prototype, "coin0", void 0);
    __decorate([
        property(cc.Node)
    ], Slot.prototype, "coin1", void 0);
    __decorate([
        property(cc.Node)
    ], Slot.prototype, "coin2", void 0);
    __decorate([
        property(cc.Node)
    ], Slot.prototype, "coin3", void 0);
    __decorate([
        property(cc.Node)
    ], Slot.prototype, "coin4", void 0);
    __decorate([
        property(cc.Node)
    ], Slot.prototype, "coin5", void 0);
    __decorate([
        property(cc.Node)
    ], Slot.prototype, "coin6", void 0);
    __decorate([
        property(cc.Node)
    ], Slot.prototype, "coin7", void 0);
    __decorate([
        property(cc.Node)
    ], Slot.prototype, "coin8", void 0);
    __decorate([
        property(cc.Node)
    ], Slot.prototype, "coin9", void 0);
    __decorate([
        property(cc.Node)
    ], Slot.prototype, "uImgSlotSelect", void 0);
    __decorate([
        property(cc.Node)
    ], Slot.prototype, "uImgSlotMerge", void 0);
    Slot = __decorate([
        ccclass
    ], Slot);
    return Slot;
}(cc.Component));
exports.default = Slot;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvbWVyZ2UvZ2FtZS9TbG90LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVEQUFzRDtBQUN0RCw0Q0FBOEM7QUFDOUMsa0RBQWlEO0FBQ2pELHFEQUFvRDtBQUNwRCwrQkFBMEI7QUFFcEIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUFpWUM7UUFoWUcsWUFBWTtRQUNaLFNBQUcsR0FBVyxDQUFDLENBQUM7UUFDaEIsVUFBVTtRQUNWLHFCQUFlLEdBQWU7WUFDMUIsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDO1lBQ1QsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDO1lBQ1QsQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDO1lBQ1gsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDO1lBQ1QsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDO1lBQ1QsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDO1lBQ1QsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO1lBQ1IsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO1lBQ1IsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO1lBQ1IsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO1NBQ1gsQ0FBQztRQUdGLFdBQUssR0FBWSxJQUFJLENBQUM7UUFHdEIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUd0QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBR3RCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFHdEIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUd0QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBR3RCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFHdEIsV0FBSyxHQUFZLElBQUks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b3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2FtZU1vZHVsZSB9IGZyb20gJy4uL2RhdGFNb2R1bGUvR2FtZU1vZHVsZSc7XG5pbXBvcnQgeyBFdmVudFR5cGUgfSBmcm9tICcuLi9tYW5hZ2VyL0RlZmluZSc7XG5pbXBvcnQgeyB1aW1hbmFnZXIgfSBmcm9tICcuLi9tYW5hZ2VyL1VpbWFuYWdlcic7XG5pbXBvcnQgeyBldmVudE1hbmFnZXIgfSBmcm9tICcuLi91dGlsL0V2ZW50TWFuYWdlcic7XG5pbXBvcnQgQ29pbiBmcm9tICcuL0NvaW4nO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xvdCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgLy8g5b2T5YmN562556CB5qe95L2N55qE57Si5byVXG4gICAgaWR4OiBudW1iZXIgPSAwO1xuICAgIC8vIOetueeggeeahOWdkOagh+S9jee9rlxuICAgIGNvaW5PcmlnaW5hbFBvczogbnVtYmVyW11bXSA9IFtcbiAgICAgICAgWzU4LCAxOTddLFxuICAgICAgICBbNTgsIDE3OF0sXG4gICAgICAgIFs1OCwgMTU5LjNdLFxuICAgICAgICBbNTgsIDE0MF0sXG4gICAgICAgIFs1OCwgMTIxXSxcbiAgICAgICAgWzU4LCAxMDJdLFxuICAgICAgICBbNTgsIDgzXSxcbiAgICAgICAgWzU4LCA2NF0sXG4gICAgICAgIFs1OCwgNDVdLFxuICAgICAgICBbNTgsIDI2XSxcbiAgICBdO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY29pbjA6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY29pbjE6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY29pbjI6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY29pbjM6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY29pbjQ6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY29pbjU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY29pbjY6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY29pbjc6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY29pbjg6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY29pbjk6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgdUltZ1Nsb3RTZWxlY3Q6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgdUltZ1Nsb3RNZXJnZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIC8vIOa3u+WKoOeCueWHu+S6i+S7tlxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLnNlbGVjdEFjdGlvbiwgdGhpcyk7XG4gICAgICAgIGV2ZW50TWFuYWdlci5vbihFdmVudFR5cGUuTU9WRV9DT0lOLCB0aGlzLm9uTW92ZSwgdGhpcyk7XG4gICAgICAgIGV2ZW50TWFuYWdlci5vbihFdmVudFR5cGUuTU9WRV9FTkQsIHRoaXMub25Nb3ZlRW5kLCB0aGlzKTtcbiAgICAgICAgZXZlbnRNYW5hZ2VyLm9uKEV2ZW50VHlwZS5DSEVDS19NRVJHRSwgdGhpcy5vblVwZGF0ZU1lcmdlU3RhdHVzLCB0aGlzKTtcbiAgICAgICAgZXZlbnRNYW5hZ2VyLm9uKEV2ZW50VHlwZS5NRVJHRV9DT0lOLCB0aGlzLm9uTWVyZ2UsIHRoaXMpO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgIH1cblxuICAgIGZvcm1hdERhdGEoaWR4OiBudW1iZXIsIGRhdGE6IG51bWJlcltdKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaWR4ID0gaWR4O1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgLy8gZGF0YVxuICAgICAgICAgICAgaWYgKGRhdGFbaV0gIT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzW2Bjb2luJHtpfWBdLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpc1tgY29pbiR7aX1gXS5nZXRDb21wb25lbnQoQ29pbikuaW5pdCh0aGlzLmlkeCwgZGF0YVtpXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXNbYGNvaW4ke2l9YF0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHBvc1xuICAgICAgICAgICAgdGhpc1tgY29pbiR7aX1gXS5zZXRQb3NpdGlvbihjYy52Mih0aGlzLmNvaW5PcmlnaW5hbFBvc1tpXVswXSwgdGhpcy5jb2luT3JpZ2luYWxQb3NbaV1bMV0pKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ub2RlLnNldFNpYmxpbmdJbmRleCh0aGlzLmlkeCk7XG4gICAgfVxuXG4gICAgLy8g6YCJ5oup6KGM5Li6XG4gICAgc2VsZWN0QWN0aW9uKCkge1xuICAgICAgICBpZiAoZ2FtZU1vZHVsZS5jdXJTZWxlY3RTbG90SWR4ID09PSAtMSkge1xuICAgICAgICAgICAgLy8g5Yid5qyh6YCJ5oup6KGM5Li6XG4gICAgICAgICAgICB0aGlzLm9uU2VsZWN0KCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZ2FtZU1vZHVsZS5jdXJTZWxlY3RTbG90SWR4ID09PSB0aGlzLmlkeCkge1xuICAgICAgICAgICAgLy8g5Y+W5raI6YCJ5oup6KGM5Li6XG4gICAgICAgICAgICB0aGlzLm9uRGVTZWxlY3QoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIOenu+WKqOihjOS4uiDlvZPliY3oioLngrnkuLrnm67moIfoioLngrlcbiAgICAgICAgICAgIHRoaXMub25DaGVja01vdmUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIOmAieS4reW9k+WJjeanveS9jVxuICAgIG9uU2VsZWN0KCk6IHZvaWQge1xuICAgICAgICBjb25zdCBzbG90RGF0YSA9IGdhbWVNb2R1bGUuc2xvdERhdGFbdGhpcy5pZHhdO1xuXG4gICAgICAgIC8vIOmAieS4reS6huepuueahOanveS9jVxuICAgICAgICBpZiAoc2xvdERhdGFbMF0gPT09IDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfpgInkuK3kuobnqbrnmoTmp73kvY0nKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOWQiOW5tuaViOaenOS4re+8jOS4jeWPr+mAieS4rVxuICAgICAgICBpZiAoZ2FtZU1vZHVsZS5tZXJnZUxvY2spIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmraPlnKjlkIjlubbkuK3vvIzml6Dms5XpgInkuK0nKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGdhbWVNb2R1bGUuY3VyU2VsZWN0U2xvdElkeCA9IHRoaXMuaWR4O1xuICAgICAgICB0aGlzLnVJbWdTbG90U2VsZWN0LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMubm9kZS5zZXRTaWJsaW5nSW5kZXgoOCk7XG5cbiAgICAgICAgLy8g5oyR6YCJ5b6F5pON5L2c562556CB55qE57Si5byVXG4gICAgICAgIGdhbWVNb2R1bGUuY3VyU2VsZWN0Q29pbklkeHMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDk7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBpZiAoc2xvdERhdGFbaV0gPT09IDApIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBpZiAoZ2FtZU1vZHVsZS5jdXJTZWxlY3RDb2luSWR4cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBnYW1lTW9kdWxlLmN1clNlbGVjdENvaW5JZHhzLnB1c2goaSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNsb3REYXRhW2ldID09PSBzbG90RGF0YVtnYW1lTW9kdWxlLmN1clNlbGVjdENvaW5JZHhzW2dhbWVNb2R1bGUuY3VyU2VsZWN0Q29pbklkeHMubGVuZ3RoIC0gMV1dKSB7XG4gICAgICAgICAgICAgICAgZ2FtZU1vZHVsZS5jdXJTZWxlY3RDb2luSWR4cy5wdXNoKGkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKGDpgInkuK3kuobnrKwke3RoaXMuaWR4feS4quanveeahGAsIGdhbWVNb2R1bGUuY3VyU2VsZWN0Q29pbklkeHMpO1xuXG4gICAgICAgIC8vIOWvueW+heaTjeS9nOetueeggeeahOaYvuekuuaViOaenOi/m+ihjOWxleekulxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdhbWVNb2R1bGUuY3VyU2VsZWN0Q29pbklkeHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHRhclBvc1kgPSB0aGlzLmNvaW5PcmlnaW5hbFBvc1tnYW1lTW9kdWxlLmN1clNlbGVjdENvaW5JZHhzW2ldXVsxXSArIDI1O1xuICAgICAgICAgICAgY2MudHdlZW4odGhpc1tgY29pbiR7Z2FtZU1vZHVsZS5jdXJTZWxlY3RDb2luSWR4c1tpXX1gXSlcbiAgICAgICAgICAgICAgICAudG8oMC41LCB7IHk6IHRhclBvc1kgfSwgeyBlYXNpbmc6ICdiYWNrT3V0JyB9KVxuICAgICAgICAgICAgICAgIC5zdGFydCgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDlj5bmtojpgInkuK1cbiAgICBvbkRlU2VsZWN0KCk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZygn5Y+W5raI6YCJ5oupJyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgLy8gZGF0YVxuICAgICAgICAgICAgY29uc3QgdGFyUG9zWSA9IHRoaXMuY29pbk9yaWdpbmFsUG9zW2ldWzFdO1xuICAgICAgICAgICAgY2MudHdlZW4odGhpc1tgY29pbiR7aX1gXSlcbiAgICAgICAgICAgICAgICAudG8oMC41LCB7IHk6IHRhclBvc1kgfSwgeyBlYXNpbmc6ICdiYWNrT3V0JyB9KVxuICAgICAgICAgICAgICAgIC5zdGFydCgpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVJbWdTbG90U2VsZWN0LmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgIC8vIOmHjee9rumAieS4reeKtuaAgVxuICAgICAgICBnYW1lTW9kdWxlLmN1clNlbGVjdFNsb3RJZHggPSAtMTtcbiAgICB9XG5cbiAgICAvLyDnp7vliqhcbiAgICBvbkNoZWNrTW92ZSgpOiB2b2lkIHtcbiAgICAgICAgLy8g5aaC5p6c5b2T5YmN5qe95L2N5bey5ruh5YiZ5LiN5YWB6K6456e75YqoXG4gICAgICAgIGlmIChnYW1lTW9kdWxlLnNsb3REYXRhW3RoaXMuaWR4XS5pbmRleE9mKDApID09PSAtMSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ+etueeggeaVsOmHj+W3sua7oe+8jOS4jeWPr+enu+WKqCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5aaC5p6c5b2T5YmN5qe95L2N5pyA6L+R55qE562556CB5LiO5b2T5YmN6YCJ5Lit55qE5b6F56e75Yqo562556CB57G75Z6L5LiN5LiA6Ie0IOS4jeWFgeiuuOenu+WKqFxuICAgICAgICBjb25zdCBjdXJTbG90SW5mbyA9IGdhbWVNb2R1bGUuZ2V0Rmlyc3RWYWlsZE51bUJ5U2xvdElkeCh0aGlzLmlkeCk7XG4gICAgICAgIGNvbnN0IGN1clNlbGVjdENvaW5JbmZvID0gZ2FtZU1vZHVsZS5nZXRDdXJTZWxlY3RTbG90SW5mbygpO1xuICAgICAgICBpZiAoY3VyU2xvdEluZm8udmFpbGROdW0gIT09IC0xICYmIGN1clNsb3RJbmZvLnZhaWxkTnVtICE9PSBjdXJTZWxlY3RDb2luSW5mby5udW0pIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfnrbnnoIHnsbvlnovkuI3kuIDoh7QsIOS4jeWPr+enu+WKqCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGdhbWVNb2R1bGUubW92ZUxvY2spIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmraPlnKjnp7vliqjkuK3vvIzml6Dms5XkuqfnlJ/mm7TlpJrnp7vliqgnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOehruWumuWPr+S7peenu+WKqOeahOetueeggeaVsOmHj1xuICAgICAgICBjb25zdCBtb3ZlQ250ID0gTWF0aC5taW4oY3VyU2xvdEluZm8udmFpbGRTcGFjZSwgY3VyU2VsZWN0Q29pbkluZm8uY250KTtcblxuICAgICAgICAvLyDnoa7lrprnp7vliqjliLDnmoTnm67moIfkvY3nva5cbiAgICAgICAgY29uc3QgdGFyUG9zOiBjYy5WZWMyW10gPSBbXTtcblxuICAgICAgICAvLyDnm67moIfmp73kvY3lj5HnlJ/mlbDmja7lj5jliqjnmoTkvY3nva7ntKLlvJXpm4ZcbiAgICAgICAgY29uc3QgdGFySWR4QXJyOiBudW1iZXJbXSA9IFtdO1xuICAgICAgICAvLyDljp/mp73kvY3lj5HnlJ/mlbDmja7lj5jliqjnmoTmp73kvY3ntKLlvJXpm4ZcbiAgICAgICAgY29uc3Qgc3JjSWR4QXJyOiBudW1iZXJbXSA9IFtdO1xuXG4gICAgICAgIGxldCBzdGFydFBvc0lkeDogbnVtYmVyID0gY3VyU2xvdEluZm8udmFpbGRJZHggKyAxO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1vdmVDbnQ7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgb3JpUG9zWCA9IHRoaXMuY29pbk9yaWdpbmFsUG9zW3N0YXJ0UG9zSWR4XVswXTtcbiAgICAgICAgICAgIGNvbnN0IG9yaVBvc1kgPSB0aGlzLmNvaW5PcmlnaW5hbFBvc1tzdGFydFBvc0lkeF1bMV07XG4gICAgICAgICAgICBjb25zdCBnbG9iYWxQb3MgPSB0aGlzLm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKG9yaVBvc1gsIG9yaVBvc1kpKTtcbiAgICAgICAgICAgIHRhclBvcy5wdXNoKGdsb2JhbFBvcyk7XG4gICAgICAgICAgICB0YXJJZHhBcnIucHVzaChzdGFydFBvc0lkeCk7XG4gICAgICAgICAgICBzcmNJZHhBcnIucHVzaChnYW1lTW9kdWxlLmN1clNlbGVjdENvaW5JZHhzW2ldKTtcbiAgICAgICAgICAgIHN0YXJ0UG9zSWR4Kys7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDpgJrnn6XlvoXnp7vliqjnmoTmp73kvY3ov5vooYznrbnnoIHnp7vliqhcbiAgICAgICAgY29uc3QgZXZlbnREYXRhID0ge1xuICAgICAgICAgICAgLy8g5a6e6ZmF56e75Yqo5pWw6YePXG4gICAgICAgICAgICBtb3ZlQ250LFxuICAgICAgICAgICAgLy8g55uu5qCH56e75Yqo55qE6IqC54K55a+55bqU5L2N572uKOS9ji0+6auYKVxuICAgICAgICAgICAgdGFyUG9zLFxuICAgICAgICAgICAgLy8g55uu5qCH5qe95L2N5a6e6ZmF5Y+R55Sf5pWw5o2u5Y+Y5Yqo55qE562556CB57Si5byV6ZuGKOS9ji0+5L2OKVxuICAgICAgICAgICAgdGFySWR4QXJyLFxuICAgICAgICAgICAgLy8g5Y6f5qe95L2N5a6e6ZmF5Y+R55Sf56e75Yqo55qE562556CB57Si5byV6ZuGKOmrmC0+5L2OKVxuICAgICAgICAgICAgc3JjSWR4QXJyLFxuICAgICAgICAgICAgLy8g5a6e6ZmF5Y+R55Sf55qE562556CB57G75Z6LXG4gICAgICAgICAgICBudW1UeXBlOiBjdXJTZWxlY3RDb2luSW5mby5udW0sXG4gICAgICAgICAgICAvLyDnm67moIfmp73kvY3ntKLlvJVcbiAgICAgICAgICAgIHRhclNsb3RJZHg6IHRoaXMuaWR4LFxuICAgICAgICB9XG4gICAgICAgIGV2ZW50TWFuYWdlci5kaXNwYXRjaChFdmVudFR5cGUuTU9WRV9DT0lOLCBldmVudERhdGEpO1xuICAgIH1cblxuICAgIC8vIOW8gOWni+i/m+ihjOenu+WKqFxuICAgIG9uTW92ZShlKSB7XG4gICAgICAgIGNvbnN0IGV2ZW50RGF0YSA9IGUuZGF0YTtcbiAgICAgICAgaWYgKHRoaXMuaWR4ICE9PSBnYW1lTW9kdWxlLmN1clNlbGVjdFNsb3RJZHgpIHJldHVybjtcbiAgICAgICAgY29uc29sZS5sb2coYG9uTW92ZTogJHtnYW1lTW9kdWxlLmN1clNlbGVjdFNsb3RJZHh9IC0+ICR7ZXZlbnREYXRhLnRhclNsb3RJZHh9YCk7XG5cbiAgICAgICAgZ2FtZU1vZHVsZS5tb3ZlTG9jayA9IHRydWU7XG5cbiAgICAgICAgY29uc3QgbW92ZUNudCA9IGV2ZW50RGF0YS5tb3ZlQ250O1xuICAgICAgICBjb25zdCB0YXJXb3JsZFBvczogY2MuVmVjMltdID0gZXZlbnREYXRhLnRhclBvcztcbiAgICAgICAgY29uc3QgdGFyTG9jYWxQb3M6IGNjLlZlYzJbXSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gdGFyV29ybGRQb3MubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIHRhckxvY2FsUG9zLnB1c2godGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHRhcldvcmxkUG9zW2ldKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDnlLHpq5jliLDkvY7nmoTov5vooYznp7vliqhcbiAgICAgICAgbGV0IHN0YXJ0SWR4ID0gZ2FtZU1vZHVsZS5jdXJTZWxlY3RDb2luSWR4c1swXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb3ZlQ250OyBpKyspIHtcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXNbYGNvaW4ke3N0YXJ0SWR4fWBdKVxuICAgICAgICAgICAgICAgIC5kZWxheSgwLjAzICogaSlcbiAgICAgICAgICAgICAgICAudG8oMC4xLCB7IHBvc2l0aW9uOiB0YXJMb2NhbFBvc1tpXSB9KVxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT09IG1vdmVDbnQgLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lTW9kdWxlLnRpZHlTbG90RGF0YSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyU2xvdElkeDogZXZlbnREYXRhLnRhclNsb3RJZHgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtVHlwZTogZXZlbnREYXRhLm51bVR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjSWR4QXJyOiBldmVudERhdGEuc3JjSWR4QXJyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcklkeEFycjogZXZlbnREYXRhLnRhcklkeEFycixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkRlU2VsZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lTW9kdWxlLm1vdmVMb2NrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5zdGFydCgpXG5cbiAgICAgICAgICAgIHN0YXJ0SWR4LS07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbk1vdmVFbmQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdvbk1vdmVFbmQnKTtcbiAgICAgICAgdGhpcy5mb3JtYXREYXRhKHRoaXMuaWR4LCBnYW1lTW9kdWxlLnNsb3REYXRhW3RoaXMuaWR4XSk7XG4gICAgfVxuXG4gICAgLy8g5Yi35paw5ZCI5oiQ54q25oCBXG4gICAgb25VcGRhdGVNZXJnZVN0YXR1cygpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgY2FuTWVyZ2UgPSBnYW1lTW9kdWxlLmNoZWNrQ2FuTWVyZ2VCeVNsb3QodGhpcy5pZHgpO1xuICAgICAgICB0aGlzLnVJbWdTbG90TWVyZ2UuYWN0aXZlID0gY2FuTWVyZ2U7XG4gICAgICAgIHRoaXMuc2hvd01lcmdlSGludEFjdGlvbihjYW5NZXJnZSk7XG4gICAgfVxuXG4gICAgLy8g5o+Q56S65ZCI5oiQXG4gICAgc2hvd01lcmdlSGludEFjdGlvbihjYW5NZXJnZTogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICBpZiAoY2FuTWVyZ2UpIHtcbiAgICAgICAgICAgIHRoaXMudUltZ1Nsb3RNZXJnZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMudUltZ1Nsb3RNZXJnZSlcbiAgICAgICAgICAgICAgICAudG8oMSwgeyBvcGFjaXR5OiAyNTUgfSlcbiAgICAgICAgICAgICAgICAudG8oMSwgeyBvcGFjaXR5OiAwIH0pXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4geyB0aGlzLnNob3dNZXJnZUhpbnRBY3Rpb24oY2FuTWVyZ2UpIH0pXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLnVJbWdTbG90TWVyZ2UpLnN0b3AoKTtcbiAgICAgICAgICAgIHRoaXMudUltZ1Nsb3RNZXJnZS5hY3RpdmUgPSBjYW5NZXJnZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIOWQiOaIkFxuICAgIG9uTWVyZ2UoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGNhbk1lcmdlID0gZ2FtZU1vZHVsZS5jaGVja0Nhbk1lcmdlQnlTbG90KHRoaXMuaWR4KTtcbiAgICAgICAgaWYgKCFjYW5NZXJnZSkgcmV0dXJuO1xuXG4gICAgICAgIGdhbWVNb2R1bGUubWVyZ2VMb2NrICs9IDE7XG5cbiAgICAgICAgLy8g5ZCI5oiQ5pWI5p6cXG4gICAgICAgIGZvciAobGV0IGkgPSA5OyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgY2MudHdlZW4odGhpc1tgY29pbiR7aX1gXSlcbiAgICAgICAgICAgICAgICAuZGVsYXkoMC4wNSAqICg5IC0gaSkpXG4gICAgICAgICAgICAgICAgLnRvKDAuMSwgeyBzY2FsZTogMCB9KVxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpc1tgY29pbiR7aX1gXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpc1tgY29pbiR7aX1gXS5zY2FsZSA9IDE7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpID09PSAwKSB7IHRoaXMub25NZXJnZUZpbmlzaCgpOyB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIOWQiOaIkOe7k+adn1xuICAgIG9uTWVyZ2VGaW5pc2goKTogdm9pZCB7XG4gICAgICAgIC8vIOWQiOaIkOebruagh+WAvFxuICAgICAgICBjb25zdCBtZXJnZVRhcmdldFZhbHVlID0gZ2FtZU1vZHVsZS5zbG90RGF0YVt0aGlzLmlkeF1bMF0gKyAxO1xuXG4gICAgICAgIC8vIOWQiOaIkOWQjueahOaVsOaNrlxuICAgICAgICBnYW1lTW9kdWxlLnNsb3REYXRhW3RoaXMuaWR4XSA9IFttZXJnZVRhcmdldFZhbHVlLCBtZXJnZVRhcmdldFZhbHVlLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXTtcblxuICAgICAgICBjb25zb2xlLmxvZyhg5qe9JHt0aGlzLmlkeH0g5ZCI5oiQJHttZXJnZVRhcmdldFZhbHVlfWApO1xuXG4gICAgICAgIGdhbWVNb2R1bGUubWVyZ2VMb2NrIC09IDE7XG4gICAgICAgIHRoaXMuY29pbjAuc2NhbGUgPSAwO1xuICAgICAgICB0aGlzLmNvaW4xLnNjYWxlID0gMDtcbiAgICAgICAgdGhpcy5jb2luMC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmNvaW4xLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuY29pbjAuZ2V0Q29tcG9uZW50KENvaW4pLmluaXQodGhpcy5pZHgsIG1lcmdlVGFyZ2V0VmFsdWUpO1xuICAgICAgICB0aGlzLmNvaW4xLmdldENvbXBvbmVudChDb2luKS5pbml0KHRoaXMuaWR4LCBtZXJnZVRhcmdldFZhbHVlKTtcblxuICAgICAgICBjYy50d2Vlbih0aGlzLmNvaW4wKVxuICAgICAgICAgICAgLnRvKDAuNSwgeyBzY2FsZTogMSB9LCB7IGVhc2luZzogJ2JhY2tPdXQnIH0pXG4gICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgY2MudHdlZW4odGhpcy5jb2luMSlcbiAgICAgICAgICAgIC50bygwLjUsIHsgc2NhbGU6IDEgfSwgeyBlYXNpbmc6ICdiYWNrT3V0JyB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG5cbiAgICAgICAgdGhpcy51SW1nU2xvdE1lcmdlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8vIOeUn+aIkOetueeggVxuICAgIGFzeW5jIHByb2R1Y2UobmV3Q29pbjogbnVtYmVyW10sIHN0YXJ0R2xvYmFsUG9zOiBjYy5WZWMyLCBzdGFydFBvc0lkeDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaWR4LCBuZXdDb2luKTtcbiAgICAgICAgLy8g5LiN6ZyA6KaB55Sf5oiQ5bCx5LiN5pON5L2c5LqGXG4gICAgICAgIGlmIChuZXdDb2luLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy5pZHh95qe95peg5paw562556CBYCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLmlkeH0g55Sf5oiQ5LqGYCwgbmV3Q29pbik7XG5cbiAgICAgICAgLy8g5rS+5Y+R562556CB5pWI5p6c55qE6LW35aeL5L2N572uXG4gICAgICAgIGNvbnN0IGxvY2FsUG9zU3JjID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHN0YXJ0R2xvYmFsUG9zKTtcbiAgICAgICAgLy8g5bey57uP5aSE55CG55qE562556CBXG4gICAgICAgIGxldCBkZWFsQ250ID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdDb2luLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvLyDnlJ/miJDkuIDkuKrooajnjrDnlKjnmoTmlrDnrbnnoIFcbiAgICAgICAgICAgIGNvbnN0IG5ld0NvaW5Ob2RlID0gYXdhaXQgdGhpcy5wcm9kdWNlQ29pbigpO1xuICAgICAgICAgICAgY29uc3QgY29pbiA9IG5ld0NvaW5Ob2RlLmdldENvbXBvbmVudChDb2luKTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChuZXdDb2luTm9kZSk7XG4gICAgICAgICAgICBjb2luLm5vZGUuc2V0UG9zaXRpb24obG9jYWxQb3NTcmMpO1xuICAgICAgICAgICAgY29pbi5ub2RlLnNjYWxlID0gMDtcbiAgICAgICAgICAgIGNvaW4ubm9kZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgIGNvaW4uaW5pdCh0aGlzLmlkeCwgbmV3Q29pbltpXSk7XG5cbiAgICAgICAgICAgIC8vIOehruWumuimgemjnueahOebrueahOWcsOWdkOagh1xuICAgICAgICAgICAgY29uc3QgdGFyUG9zSWR4ID0gc3RhcnRQb3NJZHggKyBkZWFsQ250O1xuICAgICAgICAgICAgY29uc3QgcG9zVGFyID0gdGhpcy5jb2luT3JpZ2luYWxQb3Nbc3RhcnRQb3NJZHggKyBkZWFsQ250XTtcbiAgICAgICAgICAgIGNvbnN0IHRhclBvcyA9IGNjLnYyKHBvc1RhclswXSwgcG9zVGFyWzFdKTtcbiAgICAgICAgICAgIGNjLnR3ZWVuKGNvaW4ubm9kZSlcbiAgICAgICAgICAgICAgICAuZGVsYXkoMC4xICogZGVhbENudClcbiAgICAgICAgICAgICAgICAudG8oMC41LCB7IHNjYWxlOiAxLCBvcGFjaXR5OiAyNTUsIHBvc2l0aW9uOiB0YXJQb3MgfSwgeyBlYXNpbmc6ICdjdWJpY0luT3V0JyB9KVxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29pbi5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpc1tgY29pbiR7dGFyUG9zSWR4fWBdLmdldENvbXBvbmVudChDb2luKS5pbml0KHRoaXMuaWR4LCBuZXdDb2luW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpc1tgY29pbiR7dGFyUG9zSWR4fWBdLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgICAgIGRlYWxDbnQrKztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIHByb2R1Y2VDb2luKCk6IFByb21pc2U8Y2MuTm9kZT4ge1xuICAgICAgICBjb25zdCBjb2luUHJlZmFiID0gYXdhaXQgdWltYW5hZ2VyLmxvYWRQcmVmYWIoJ3ByZWZhYi9tZXJnZS9jb2luJyk7XG4gICAgICAgIGNvbnN0IGNvaW4gPSBjYy5pbnN0YW50aWF0ZShjb2luUHJlZmFiKTtcbiAgICAgICAgcmV0dXJuIGNvaW47XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/merge/dataModule/DataModule.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a9783XxZiJAGobx47+4NsqL', 'DataModule');
// script/merge/dataModule/DataModule.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DataModule = /** @class */ (function () {
    function DataModule() {
        this.mData = null;
    }
    DataModule.prototype.parseData = function (data) {
        this.mData = data;
    };
    return DataModule;
}());
exports.default = DataModule;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvbWVyZ2UvZGF0YU1vZHVsZS9EYXRhTW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFHSTtRQUZPLFVBQUssR0FBRyxJQUFJLENBQUM7SUFFRyxDQUFDO0lBRXhCLDhCQUFTLEdBQVQsVUFBVSxJQUFTO1FBQ2YsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDdEIsQ0FBQztJQUNMLGlCQUFDO0FBQUQsQ0FSQSxBQVFDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRhTW9kdWxlIHtcbiAgICBwdWJsaWMgbURhdGEgPSBudWxsO1xuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICBwYXJzZURhdGEoZGF0YTogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMubURhdGEgPSBkYXRhO1xuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/merge/game/Coin.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6cba59FrPtA0YaVzatN4FVJ', 'Coin');
// script/merge/game/Coin.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Coin = /** @class */ (function (_super) {
    __extends(Coin, _super);
    function Coin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ulblNum = null;
        _this.uImgBg = null;
        return _this;
        // update (dt) {}
    }
    Coin.prototype.onLoad = function () {
        this.ulblNum.string = '-';
    };
    Coin.prototype.init = function (slotIdx, cnt) {
        var _this = this;
        var url = "images/coin/" + cnt;
        cc.resources.load(url, cc.SpriteFrame, (function (err, spriteFrame) {
            if (err) {
                console.error('url:', url, '/err:');
                return;
            }
            _this.uImgBg.spriteFrame = spriteFrame;
        }));
        // this.ulblNum.string = `${slotIdx}-${cnt}`;
        this.ulblNum.string = "" + cnt;
    };
    Coin.prototype.start = function () {
    };
    __decorate([
        property(cc.Label)
    ], Coin.prototype, "ulblNum", void 0);
    __decorate([
        property(cc.Sprite)
    ], Coin.prototype, "uImgBg", void 0);
    Coin = __decorate([
        ccclass
    ], Coin);
    return Coin;
}(cc.Component));
exports.default = Coin;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvbWVyZ2UvZ2FtZS9Db2luLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWtDLHdCQUFZO0lBQTlDO1FBQUEscUVBK0JDO1FBN0JPLGFBQU8sR0FBYSxJQUFJLENBQUM7UUFHekIsWUFBTSxHQUFjLElBQUksQ0FBQzs7UUF5QjdCLGlCQUFpQjtJQUNyQixDQUFDO0lBeEJHLHFCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7SUFDOUIsQ0FBQztJQUVELG1CQUFJLEdBQUosVUFBSyxPQUFlLEVBQUUsR0FBVztRQUFqQyxpQkFhQztRQVpHLElBQU0sR0FBRyxHQUFXLGlCQUFlLEdBQUssQ0FBQztRQUN6QyxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQUMsR0FBRyxFQUFFLFdBQTJCO1lBQ3JFLElBQUksR0FBRyxFQUFFO2dCQUNMLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFDcEMsT0FBTzthQUNWO1lBRUQsS0FBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQzFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFSiw2Q0FBNkM7UUFDN0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsS0FBRyxHQUFLLENBQUM7SUFDbkMsQ0FBQztJQUVELG9CQUFLLEdBQUw7SUFFQSxDQUFDO0lBMUJHO1FBREgsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7eUNBQ1U7SUFHekI7UUFESCxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt3Q0FDUztJQUxaLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0ErQnhCO0lBQUQsV0FBQztDQS9CRCxBQStCQyxDQS9CaUMsRUFBRSxDQUFDLFNBQVMsR0ErQjdDO2tCQS9Cb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2luIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgICAgIHVsYmxOdW06IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgICAgIHVJbWdCZzogY2MuU3ByaXRlID0gbnVsbDtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy51bGJsTnVtLnN0cmluZyA9ICctJztcbiAgICB9XG5cbiAgICBpbml0KHNsb3RJZHg6IG51bWJlciwgY250OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdXJsOiBzdHJpbmcgPSBgaW1hZ2VzL2NvaW4vJHtjbnR9YDtcbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQodXJsLCBjYy5TcHJpdGVGcmFtZSwgKChlcnIsIHNwcml0ZUZyYW1lOiBjYy5TcHJpdGVGcmFtZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ3VybDonLCB1cmwsICcvZXJyOicpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy51SW1nQmcuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIC8vIHRoaXMudWxibE51bS5zdHJpbmcgPSBgJHtzbG90SWR4fS0ke2NudH1gO1xuICAgICAgICB0aGlzLnVsYmxOdW0uc3RyaW5nID0gYCR7Y250fWA7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG5cbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/common/Ball_Main.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6fb231fm49LNrCr/i4IuOWK', 'Ball_Main');
// script/common/Ball_Main.ts

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
var bl_Config_1 = require("../game/ui/bl_Config");
var BundleResourceList_1 = require("../game/common/BundleResourceList");
var UIManager_1 = require("../game/common/UIManager");
var LoadingScene_1 = require("../game/loading/LoadingScene");
var LanguageData_1 = require("../lang/LanguageData");
var SDKManager_1 = require("../utils/SDKManager");
var Utils_1 = require("../utils/Utils");
var AudioManager_1 = require("./AudioManager");
var HurryLoading_1 = require("./comp/HurryLoading");
var SceneLoadingUI_1 = require("./comp/SceneLoadingUI");
var GlobalDefines_1 = require("./consts/GlobalDefines");
var DataManager_1 = require("./DataManager");
var SceneManager_1 = require("./SceneManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Ball_Main = /** @class */ (function (_super) {
    __extends(Ball_Main, _super);
    function Ball_Main() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.uiNode = null;
        // 加载等待图标
        _this.hurryLoading = null;
        _this.uiCamera = null;
        _this.smNode = null;
        _this.resList = null;
        _this.config = null;
        //本地与服务器的时间差 秒
        _this.timeOffset_sec = 0;
        //本地与服务器的时间差 毫秒
        _this.timeOffset_msec = 0;
        _this.timeout_crossday = undefined;
        _this.isInited = false;
        _this.entryData = undefined;
        return _this;
    }
    Ball_Main_1 = Ball_Main;
    Object.defineProperty(Ball_Main, "instance", {
        get: function () {
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    Ball_Main.prototype.onShow = function (res) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.entryData = res;
                AudioManager_1.sd.resumeAll();
                if (!this.isInited) {
                    return [2 /*return*/];
                }
                return [2 /*return*/];
            });
        });
    };
    Ball_Main.prototype.onHide = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                AudioManager_1.sd.pauseAll();
                return [2 /*return*/];
            });
        });
    };
    Ball_Main.prototype.pase = function (country) {
        var jsonContent = this.config.json.language;
        //开始加密文本
        // for (let country in jsonContent) {
        var countryConfig = jsonContent[country];
        for (var key in countryConfig) {
            var text = countryConfig[key];
            console.log("开始解密文件==>", text);
            countryConfig[key] = decodeURIComponent(atob(text));
            console.log("解密后==>", countryConfig[key]);
        }
        // }
        // 将修改后的对象转换回JSON字符串
        // const modifiedJson = JSON.stringify(jsonContent, null, 2);
        return jsonContent[country];
    };
    // 游戏启动
    Ball_Main.prototype.onLoad = function () {
        window.addEventListener("unhandledrejection", function (e) {
            e.preventDefault();
            return true;
        });
        UIManager_1.ui.onLoad(this.uiNode, this.hurryLoading);
        // 挂载sceneManager操作的根节点
        SceneManager_1.sm.onLoad(this.smNode);
        // 获取国家
        bl_Config_1.bc.country = SDKManager_1.sdk.ball_getCountry();
        // 标记语言
        var langue;
        switch (bl_Config_1.bc.country) {
            case '2':
                langue = this.pase("pt");
                LanguageData_1.initSource("pt", langue);
                // initSource("pt", this.config.json.language['pt']);
                bl_Config_1.bc.moneyAbbr = "R$";
                break;
            case "10":
                langue = this.pase("en");
                LanguageData_1.initSource("en", langue);
                bl_Config_1.bc.moneyAbbr = "£";
                break;
            case "11":
                langue = this.pase("en");
                LanguageData_1.initSource("en", langue);
                bl_Config_1.bc.moneyAbbr = "R";
                break;
            case "12":
                langue = this.pase("en");
                LanguageData_1.initSource("en", langue);
                bl_Config_1.bc.moneyAbbr = "₦";
                break;
            case "13":
                // initSource("in", this.config.json.language['in']);
                langue = this.pase("in");
                LanguageData_1.initSource("in", langue);
                bl_Config_1.bc.moneyAbbr = "₹";
                break;
            default:
                langue = this.pase("en");
                LanguageData_1.initSource("en", langue);
                bl_Config_1.bc.moneyAbbr = "$";
                break;
        }
    };
    Ball_Main.prototype.start = function () {
        this.gameStart();
        // setTimeout(() => {
        //     sd.playBGM(`sounds/bg`,true);
        // }, 200);
    };
    /**
    * 微信监听好友定向分享回调
    * 返回分享成功与否
    * @param res
    */
    Ball_Main.prototype.onShareMessageToFriend = function (res) {
        // let event = new EventShareMessageToFriend();
        // event.res = res;
        // GlobalEvent.dispatchEvent(event);
        // Logger.debug("[Ball_Main onShareMessageToFriend] res:", res);
    };
    Ball_Main.prototype.gameStart = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // 获取时间（好像现在没法先有什么引用的地方）
                this.playtime = Utils_1.Utils.getCurTime();
                // 场景根节点的引用
                Ball_Main_1._instance = this;
                // 延迟调用
                setTimeout(function () {
                    // 添加游戏的各个层级节点，作为游戏场景根节点的子节点存在
                    UIManager_1.ui.checkNode();
                    // 加载场景初始化
                    var loadingScene = SceneManager_1.sm.node.getComponentInChildren(LoadingScene_1.default);
                    loadingScene.startLoading();
                }, 0);
                return [2 /*return*/];
            });
        });
    };
    Ball_Main.prototype.initGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        SceneLoadingUI_1.default.setProgress(0);
                        // dataManager 开始准备 - 登录接口调用
                        return [4 /*yield*/, DataManager_1.dm.onInit()];
                    case 1:
                        // dataManager 开始准备 - 登录接口调用
                        _a.sent();
                        SceneLoadingUI_1.default.setProgress(0.6);
                        Utils_1.Utils.waiting(0);
                        SceneLoadingUI_1.default.setProgress(0.7);
                        Utils_1.Utils.waiting(0);
                        SceneLoadingUI_1.default.setProgress(0.75);
                        Utils_1.Utils.waiting(0);
                        SceneLoadingUI_1.default.setProgress(0.8);
                        UIManager_1.ui.onInit();
                        Utils_1.Utils.waiting(0);
                        SceneLoadingUI_1.default.setProgress(0.85);
                        AudioManager_1.sd.init();
                        // await topres.onLoad(ui.getLayer(UILayer.Topres))
                        Utils_1.Utils.waiting(0);
                        SceneLoadingUI_1.default.setProgress(0.9);
                        Utils_1.Utils.waiting(0);
                        //进度条延时
                        // for (let i = 1; i <= 10; i++) {
                        //     SceneLoadingUI.setProgress(i / 10);
                        //     await Utils.waiting(20);
                        // }
                        this.registerCrossEvent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Ball_Main.prototype.GetScreenWHRate = function () {
        var screenSize = cc.view.getFrameSize();
        var currentScreenRate = screenSize.width / screenSize.height;
        return currentScreenRate;
    };
    //获取服务器时间戳 秒
    Ball_Main.prototype.getServerTime = function () {
        return Math.floor((new Date()).getTime() / 1000) + this.timeOffset_sec;
    };
    //获取服务器时间戳 毫秒
    Ball_Main.prototype.getServerTimeMsec = function () {
        return (new Date()).getTime() + this.timeOffset_msec;
    };
    /**
     * 时间同步检测
     * @param serverTime
     */
    Ball_Main.prototype.timeCheck = function (serverTime) {
        var curLocationTime = (new Date()).getTime();
        this.timeOffset_sec = serverTime - Math.floor(curLocationTime / 1000);
        this.timeOffset_msec = serverTime * 1000 - curLocationTime;
        return Math.abs(this.timeOffset_sec) < GlobalDefines_1.GlobalDefines.Second_Day;
    };
    /**
     * 注册跨天回调
     */
    Ball_Main.prototype.registerCrossEvent = function () {
        var _this = this;
        //同步时间后 注册跨天回调
        var curTime = this.getServerTimeMsec();
        var todyStartTime = Utils_1.Utils.getDayBeginTime(curTime);
        var tomorryStartTime = todyStartTime / 1000 + GlobalDefines_1.GlobalDefines.Second_Day;
        var offset = Utils_1.Utils.randomInt(0, 60 * 1); //1分钟错峰时间
        var deta = tomorryStartTime - curTime / 1000 + offset;
        clearTimeout(this.timeout_crossday);
        this.timeout_crossday = setTimeout(function () {
            _this.onCrossDay();
        }, deta * 1000);
    };
    /**
     * 跨天处理
     */
    Ball_Main.prototype.onCrossDay = function () {
        //跨天重登录
        SceneManager_1.sm.switchScene(LoadingScene_1.default);
    };
    var Ball_Main_1;
    __decorate([
        property(cc.Node)
    ], Ball_Main.prototype, "uiNode", void 0);
    __decorate([
        property(HurryLoading_1.default)
    ], Ball_Main.prototype, "hurryLoading", void 0);
    __decorate([
        property(cc.Camera)
    ], Ball_Main.prototype, "uiCamera", void 0);
    __decorate([
        property(cc.Node)
    ], Ball_Main.prototype, "smNode", void 0);
    __decorate([
        property(BundleResourceList_1.default)
    ], Ball_Main.prototype, "resList", void 0);
    __decorate([
        property(cc.JsonAsset)
    ], Ball_Main.prototype, "config", void 0);
    Ball_Main = Ball_Main_1 = __decorate([
        ccclass
    ], Ball_Main);
    return Ball_Main;
}(cc.Component));
exports.default = Ball_Main;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvY29tbW9uL0JhbGxfTWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrREFBMEM7QUFDMUMsd0VBQW1FO0FBQ25FLHNEQUE4QztBQUM5Qyw2REFBd0Q7QUFDeEQscURBQWtEO0FBQ2xELGtEQUEwQztBQUMxQyx3Q0FBdUM7QUFDdkMsK0NBQW9DO0FBQ3BDLG9EQUErQztBQUMvQyx3REFBbUQ7QUFDbkQsd0RBQXVEO0FBQ3ZELDZDQUFtQztBQUNuQywrQ0FBb0M7QUFFOUIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBdUMsNkJBQVk7SUFBbkQ7UUFBQSxxRUE4UEM7UUF2UEcsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixTQUFTO1FBRVQsa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBR2xDLGNBQVEsR0FBYyxJQUFJLENBQUM7UUFHM0IsWUFBTSxHQUFZLElBQUksQ0FBQztRQUd2QixhQUFPLEdBQXVCLElBQUksQ0FBQztRQUduQyxZQUFNLEdBQWlCLElBQUksQ0FBQztRQUU1QixjQUFjO1FBQ1Asb0JBQWMsR0FBVyxDQUFDLENBQUM7UUFDbEMsZUFBZTtRQUNQLHFCQUFlLEdBQVcsQ0FBQyxDQUFDO1FBRTVCLHNCQUFnQixHQUFRLFNBQVMsQ0FBQztRQUVuQyxjQUFRLEdBQVksS0FBSyxDQUFDO1FBRTFCLGVBQVMsR0FBUSxTQUFTLENBQUM7O0lBNE50QyxDQUFDO2tCQTlQb0IsU0FBUztJQUUxQixzQkFBa0IscUJBQVE7YUFBMUI7WUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzs7O09BQUE7SUFvQ0ssMEJBQU0sR0FBWixVQUFhLEdBQVE7OztnQkFDakIsSUFBSSxDQUFDLFNB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QUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBLFNBQVM7UUFDakQsSUFBSSxJQUFJLEdBQUcsZ0JBQWdCLEdBQUcsT0FBTyxHQUFHLElBQUksR0FBRyxNQUFNLENBQUM7UUFDdEQsWUFBWSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxVQUFVLENBQUM7WUFDL0IsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3RCLENBQUMsRUFBRSxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsOEJBQVUsR0FBVjtRQUNJLE9BQU87UUFDUCxpQkFBRSxDQUFDLFdBQVcsQ0FBQyxzQkFBWSxDQUFDLENBQUM7SUFDakMsQ0FBQzs7SUFwUEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDSztJQUl2QjtRQURDLFFBQVEsQ0FBQyxzQkFBWSxDQUFDO21EQUNXO0lBR2xDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7K0NBQ087SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDSztJQUd2QjtRQURDLFFBQVEsQ0FBQyw0QkFBa0IsQ0FBQzs4Q0FDTTtJQUduQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzZDQUNLO0lBdkJYLFNBQVM7UUFGN0IsT0FBTztPQUVhLFNBQVMsQ0E4UDdCO0lBQUQsZ0JBQUM7Q0E5UEQsQUE4UEMsQ0E5UHNDLEVBQUUsQ0FBQyxTQUFTLEdBOFBsRDtrQkE5UG9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBiYyB9IGZyb20gXCIuLi9nYW1lL3VpL2JsX0NvbmZpZ1wiO1xuaW1wb3J0IEJ1bmRsZVJlc291cmNlTGlzdCBmcm9tIFwiLi4vZ2FtZS9jb21tb24vQnVuZGxlUmVzb3VyY2VMaXN0XCI7XG5pbXBvcnQgeyB1aSB9IGZyb20gXCIuLi9nYW1lL2NvbW1vbi9VSU1hbmFnZXJcIjtcbmltcG9ydCBMb2FkaW5nU2NlbmUgZnJvbSBcIi4uL2dhbWUvbG9hZGluZy9Mb2FkaW5nU2NlbmVcIjtcbmltcG9ydCB7IGluaXRTb3VyY2UgfSBmcm9tIFwiLi4vbGFuZy9MYW5ndWFnZURhdGFcIjtcbmltcG9ydCB7IHNkayB9IGZyb20gXCIuLi91dGlscy9TREtNYW5hZ2VyXCI7XG5pbXBvcnQgeyBVdGlscyB9IGZyb20gXCIuLi91dGlscy9VdGlsc1wiO1xuaW1wb3J0IHsgc2QgfSBmcm9tIFwiLi9BdWRpb01hbmFnZXJcIjtcbmltcG9ydCBIdXJyeUxvYWRpbmcgZnJvbSBcIi4vY29tcC9IdXJyeUxvYWRpbmdcIjtcbmltcG9ydCBTY2VuZUxvYWRpbmdVSSBmcm9tIFwiLi9jb21wL1NjZW5lTG9hZGluZ1VJXCI7XG5pbXBvcnQgeyBHbG9iYWxEZWZpbmVzIH0gZnJvbSBcIi4vY29uc3RzL0dsb2JhbERlZmluZXNcIjtcbmltcG9ydCB7IGRtIH0gZnJvbSBcIi4vRGF0YU1hbmFnZXJcIjtcbmltcG9ydCB7IHNtIH0gZnJvbSBcIi4vU2NlbmVNYW5hZ2VyXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5AY2NjbGFzc1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYWxsX01haW4gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIHB1YmxpYyBzdGF0aWMgX2luc3RhbmNlOiBCYWxsX01haW47XG4gICAgcHVibGljIHN0YXRpYyBnZXQgaW5zdGFuY2UoKTogQmFsbF9NYWluIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xuICAgIH1cblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHVpTm9kZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICAvLyDliqDovb3nrYnlvoXlm77moIdcbiAgICBAcHJvcGVydHkoSHVycnlMb2FkaW5nKVxuICAgIGh1cnJ5TG9hZGluZzogSHVycnlMb2FkaW5nID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5DYW1lcmEpXG4gICAgdWlDYW1lcmE6IGNjLkNhbWVyYSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBzbU5vZGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KEJ1bmRsZVJlc291cmNlTGlzdClcbiAgICByZXNMaXN0OiBCdW5kbGVSZXNvdXJjZUxpc3QgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkpzb25Bc3NldClcbiAgICBjb25maWc6IGNjLkpzb25Bc3NldCA9IG51bGw7XG5cbiAgICAvL+acrOWcsOS4juacjeWKoeWZqOeahOaXtumXtOW3riDnp5JcbiAgICBwdWJsaWMgdGltZU9mZnNldF9zZWM6IG51bWJlciA9IDA7XG4gICAgLy/mnKzlnLDkuI7mnI3liqHlmajnmoTml7bpl7Tlt64g5q+r56eSXG4gICAgcHJpdmF0ZSB0aW1lT2Zmc2V0X21zZWM6IG51bWJlciA9IDA7XG5cbiAgICBwcml2YXRlIHRpbWVvdXRfY3Jvc3NkYXk6IGFueSA9IHVuZGVmaW5lZDtcblxuICAgIHB1YmxpYyBpc0luaXRlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgcHVibGljIGVudHJ5RGF0YTogYW55ID0gdW5kZWZpbmVkO1xuXG4gICAgcHVibGljIHRvQmFja2dyb3VuZE9TVGltZTogbnVtYmVyO1xuXG4gICAgcHVibGljIHBsYXl0aW1lOiBudW1iZXI7XG5cbiAgICBhc3luYyBvblNob3cocmVzOiBhbnkpIHtcbiAgICAgICAgdGhpcy5lbnRyeURhdGEgPSByZXM7XG5cbiAgICAgICAgc2QucmVzdW1lQWxsKCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLmlzSW5pdGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gd2FsbC5sb2FkVGFzaygpO1xuICAgIH1cblxuICAgIGFzeW5jIG9uSGlkZSgpIHtcbiAgICAgICAgc2QucGF1c2VBbGwoKTtcbiAgICB9XG5cbiAgICBwYXNlKGNvdW50cnkpIHtcbiAgICAgICAgY29uc3QganNvbkNvbnRlbnQgPSB0aGlzLmNvbmZpZy5qc29uLmxhbmd1YWdlO1xuICAgICAgICAvL+W8gOWni+WKoOWvhuaWh+acrFxuICAgICAgICAvLyBmb3IgKGxldCBjb3VudHJ5IGluIGpzb25Db250ZW50KSB7XG4gICAgICAgIGxldCBjb3VudHJ5Q29uZmlnID0ganNvbkNvbnRlbnRbY291bnRyeV1cbiAgICAgICAgZm9yIChsZXQga2V5IGluIGNvdW50cnlDb25maWcpIHtcbiAgICAgICAgICAgIGxldCB0ZXh0ID0gY291bnRyeUNvbmZpZ1trZXldXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuW8gOWni+ino+WvhuaWh+S7tj09PlwiLCB0ZXh0KVxuICAgICAgICAgICAgY291bnRyeUNvbmZpZ1trZXldID0gZGVjb2RlVVJJQ29tcG9uZW50KGF0b2IodGV4dCkpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLop6Plr4blkI49PT5cIiwgY291bnRyeUNvbmZpZ1trZXldKVxuICAgICAgICB9XG4gICAgICAgIC8vIH1cblxuICAgICAgICAvLyDlsIbkv67mlLnlkI7nmoTlr7nosaHovazmjaLlm55KU09O5a2X56ym5LiyXG4gICAgICAgIC8vIGNvbnN0IG1vZGlmaWVkSnNvbiA9IEpTT04uc3RyaW5naWZ5KGpzb25Db250ZW50LCBudWxsLCAyKTtcbiAgICAgICAgcmV0dXJuIGpzb25Db250ZW50W2NvdW50cnldO1xuICAgIH1cblxuICAgIC8vIOa4uOaIj+WQr+WKqFxuICAgIG9uTG9hZCgpIHtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInVuaGFuZGxlZHJlamVjdGlvblwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHVpLm9uTG9hZCh0aGlzLnVpTm9kZSwgdGhpcy5odXJyeUxvYWRpbmcpO1xuXG4gICAgICAgIC8vIOaMgui9vXNjZW5lTWFuYWdlcuaTjeS9nOeahOagueiKgueCuVxuICAgICAgICBzbS5vbkxvYWQodGhpcy5zbU5vZGUpO1xuXG4gICAgICAgIC8vIOiOt+WPluWbveWutlxuICAgICAgICBiYy5jb3VudHJ5ID0gc2RrLmJhbGxfZ2V0Q291bnRyeSgpO1xuXG4gICAgICAgIC8vIOagh+iusOivreiogFxuICAgICAgICBsZXQgbGFuZ3VlO1xuICAgICAgICBzd2l0Y2ggKGJjLmNvdW50cnkpIHtcbiAgICAgICAgICAgIGNhc2UgJzInOlxuICAgICAgICAgICAgICAgIGxhbmd1ZSA9IHRoaXMucGFzZShcInB0XCIpO1xuICAgICAgICAgICAgICAgIGluaXRTb3VyY2UoXCJwdFwiLCBsYW5ndWUpO1xuICAgICAgICAgICAgICAgIC8vIGluaXRTb3VyY2UoXCJwdFwiLCB0aGlzLmNvbmZpZy5qc29uLmxhbmd1YWdlWydwdCddKTtcbiAgICAgICAgICAgICAgICBiYy5tb25leUFiYnIgPSBcIlIkXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiMTBcIjpcbiAgICAgICAgICAgICAgICBsYW5ndWUgPSB0aGlzLnBhc2UoXCJlblwiKTtcbiAgICAgICAgICAgICAgICBpbml0U291cmNlKFwiZW5cIiwgbGFuZ3VlKTtcbiAgICAgICAgICAgICAgICBiYy5tb25leUFiYnIgPSBcIsKjXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiMTFcIjpcbiAgICAgICAgICAgICAgICBsYW5ndWUgPSB0aGlzLnBhc2UoXCJlblwiKTtcbiAgICAgICAgICAgICAgICBpbml0U291cmNlKFwiZW5cIiwgbGFuZ3VlKTtcbiAgICAgICAgICAgICAgICBiYy5tb25leUFiYnIgPSBcIlJcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCIxMlwiOlxuICAgICAgICAgICAgICAgIGxhbmd1ZSA9IHRoaXMucGFzZShcImVuXCIpO1xuICAgICAgICAgICAgICAgIGluaXRTb3VyY2UoXCJlblwiLCBsYW5ndWUpO1xuICAgICAgICAgICAgICAgIGJjLm1vbmV5QWJiciA9IFwi4oKmXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiMTNcIjpcbiAgICAgICAgICAgICAgICAvLyBpbml0U291cmNlKFwiaW5cIiwgdGhpcy5jb25maWcuanNvbi5sYW5ndWFnZVsnaW4nXSk7XG4gICAgICAgICAgICAgICAgbGFuZ3VlID0gdGhpcy5wYXNlKFwiaW5cIik7XG4gICAgICAgICAgICAgICAgaW5pdFNvdXJjZShcImluXCIsIGxhbmd1ZSk7XG4gICAgICAgICAgICAgICAgYmMubW9uZXlBYmJyID0gXCLigrlcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgbGFuZ3VlID0gdGhpcy5wYXNlKFwiZW5cIik7XG4gICAgICAgICAgICAgICAgaW5pdFNvdXJjZShcImVuXCIsIGxhbmd1ZSk7XG4gICAgICAgICAgICAgICAgYmMubW9uZXlBYmJyID0gXCIkXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5nYW1lU3RhcnQoKTtcbiAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIC8vICAgICBzZC5wbGF5QkdNKGBzb3VuZHMvYmdgLHRydWUpO1xuICAgICAgICAvLyB9LCAyMDApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICog5b6u5L+h55uR5ZCs5aW95Y+L5a6a5ZCR5YiG5Lqr5Zue6LCDXG4gICAgKiDov5Tlm57liIbkuqvmiJDlip/kuI7lkKZcbiAgICAqIEBwYXJhbSByZXMgXG4gICAgKi9cbiAgICBvblNoYXJlTWVzc2FnZVRvRnJpZW5kKHJlczogeyBzdWNjZXNzOiBib29sZWFuLCBlcnJNc2c6IHN0cmluZyB9KSB7XG4gICAgICAgIC8vIGxldCBldmVudCA9IG5ldyBFdmVudFNoYXJlTWVzc2FnZVRvRnJpZW5kKCk7XG4gICAgICAgIC8vIGV2ZW50LnJlcyA9IHJlcztcbiAgICAgICAgLy8gR2xvYmFsRXZlbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICAgIC8vIExvZ2dlci5kZWJ1ZyhcIltCYWxsX01haW4gb25TaGFyZU1lc3NhZ2VUb0ZyaWVuZF0gcmVzOlwiLCByZXMpO1xuICAgIH1cblxuICAgIGFzeW5jIGdhbWVTdGFydCgpIHtcbiAgICAgICAgLy8g6I635Y+W5pe26Ze077yI5aW95YOP546w5Zyo5rKh5rOV5YWI5pyJ5LuA5LmI5byV55So55qE5Zyw5pa577yJXG4gICAgICAgIHRoaXMucGxheXRpbWUgPSBVdGlscy5nZXRDdXJUaW1lKCk7XG5cbiAgICAgICAgLy8g5Zy65pmv5qC56IqC54K555qE5byV55SoXG4gICAgICAgIEJhbGxfTWFpbi5faW5zdGFuY2UgPSB0aGlzO1xuXG4gICAgICAgIC8vIOW7tui/n+iwg+eUqFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcblxuICAgICAgICAgICAgLy8g5re75Yqg5ri45oiP55qE5ZCE5Liq5bGC57qn6IqC54K577yM5L2c5Li65ri45oiP5Zy65pmv5qC56IqC54K555qE5a2Q6IqC54K55a2Y5ZyoXG4gICAgICAgICAgICB1aS5jaGVja05vZGUoKTtcblxuICAgICAgICAgICAgLy8g5Yqg6L295Zy65pmv5Yid5aeL5YyWXG4gICAgICAgICAgICBsZXQgbG9hZGluZ1NjZW5lOiBMb2FkaW5nU2NlbmUgPSBzbS5ub2RlLmdldENvbXBvbmVudEluQ2hpbGRyZW4oTG9hZGluZ1NjZW5lKTtcbiAgICAgICAgICAgIGxvYWRpbmdTY2VuZS5zdGFydExvYWRpbmcoKTtcbiAgICAgICAgfSwgMCk7XG4gICAgfVxuXG4gICAgYXN5bmMgaW5pdEdhbWUoKSB7XG4gICAgICAgIFNjZW5lTG9hZGluZ1VJLnNldFByb2dyZXNzKDApO1xuXG4gICAgICAgIC8vIGRhdGFNYW5hZ2VyIOW8gOWni+WHhuWkhyAtIOeZu+W9leaOpeWPo+iwg+eUqFxuICAgICAgICBhd2FpdCBkbS5vbkluaXQoKTtcbiAgICAgICAgU2NlbmVMb2FkaW5nVUkuc2V0UHJvZ3Jlc3MoMC42KTtcblxuICAgICAgICBVdGlscy53YWl0aW5nKDApO1xuICAgICAgICBTY2VuZUxvYWRpbmdVSS5zZXRQcm9ncmVzcygwLjcpO1xuXG4gICAgICAgIFV0aWxzLndhaXRpbmcoMCk7XG4gICAgICAgIFNjZW5lTG9hZGluZ1VJLnNldFByb2dyZXNzKDAuNzUpO1xuXG4gICAgICAgIFV0aWxzLndhaXRpbmcoMCk7XG4gICAgICAgIFNjZW5lTG9hZGluZ1VJLnNldFByb2dyZXNzKDAuOCk7XG5cbiAgICAgICAgdWkub25Jbml0KCk7XG5cbiAgICAgICAgVXRpbHMud2FpdGluZygwKTtcbiAgICAgICAgU2NlbmVMb2FkaW5nVUkuc2V0UHJvZ3Jlc3MoMC44NSk7XG5cbiAgICAgICAgc2QuaW5pdCgpO1xuXG4gICAgICAgIC8vIGF3YWl0IHRvcHJlcy5vbkxvYWQodWkuZ2V0TGF5ZXIoVUlMYXllci5Ub3ByZXMpKVxuXG4gICAgICAgIFV0aWxzLndhaXRpbmcoMCk7XG4gICAgICAgIFNjZW5lTG9hZGluZ1VJLnNldFByb2dyZXNzKDAuOSk7XG4gICAgICAgIFV0aWxzLndhaXRpbmcoMCk7XG4gICAgICAgIC8v6L+b5bqm5p2h5bu25pe2XG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAxOyBpIDw9IDEwOyBpKyspIHtcbiAgICAgICAgLy8gICAgIFNjZW5lTG9hZGluZ1VJLnNldFByb2dyZXNzKGkgLyAxMCk7XG4gICAgICAgIC8vICAgICBhd2FpdCBVdGlscy53YWl0aW5nKDIwKTtcbiAgICAgICAgLy8gfVxuICAgICAgICB0aGlzLnJlZ2lzdGVyQ3Jvc3NFdmVudCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBHZXRTY3JlZW5XSFJhdGUoKSB7XG4gICAgICAgIHZhciBzY3JlZW5TaXplID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKTtcbiAgICAgICAgdmFyIGN1cnJlbnRTY3JlZW5SYXRlID0gc2NyZWVuU2l6ZS53aWR0aCAvIHNjcmVlblNpemUuaGVpZ2h0O1xuICAgICAgICByZXR1cm4gY3VycmVudFNjcmVlblJhdGU7XG4gICAgfVxuXG4gICAgLy/ojrflj5bmnI3liqHlmajml7bpl7TmiLMg56eSXG4gICAgZ2V0U2VydmVyVGltZSgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoKG5ldyBEYXRlKCkpLmdldFRpbWUoKSAvIDEwMDApICsgdGhpcy50aW1lT2Zmc2V0X3NlYztcbiAgICB9XG5cbiAgICAvL+iOt+WPluacjeWKoeWZqOaXtumXtOaIsyDmr6vnp5JcbiAgICBnZXRTZXJ2ZXJUaW1lTXNlYygpIHtcbiAgICAgICAgcmV0dXJuIChuZXcgRGF0ZSgpKS5nZXRUaW1lKCkgKyB0aGlzLnRpbWVPZmZzZXRfbXNlYztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDml7bpl7TlkIzmraXmo4DmtYtcbiAgICAgKiBAcGFyYW0gc2VydmVyVGltZSBcbiAgICAgKi9cbiAgICB0aW1lQ2hlY2soc2VydmVyVGltZTogbnVtYmVyKSB7XG4gICAgICAgIGxldCBjdXJMb2NhdGlvblRpbWUgPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpO1xuICAgICAgICB0aGlzLnRpbWVPZmZzZXRfc2VjID0gc2VydmVyVGltZSAtIE1hdGguZmxvb3IoY3VyTG9jYXRpb25UaW1lIC8gMTAwMCk7XG4gICAgICAgIHRoaXMudGltZU9mZnNldF9tc2VjID0gc2VydmVyVGltZSAqIDEwMDAgLSBjdXJMb2NhdGlvblRpbWU7XG5cbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKHRoaXMudGltZU9mZnNldF9zZWMpIDwgR2xvYmFsRGVmaW5lcy5TZWNvbmRfRGF5O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOazqOWGjOi3qOWkqeWbnuiwg1xuICAgICAqL1xuICAgIHJlZ2lzdGVyQ3Jvc3NFdmVudCgpIHtcbiAgICAgICAgLy/lkIzmraXml7bpl7TlkI4g5rOo5YaM6Leo5aSp5Zue6LCDXG4gICAgICAgIGxldCBjdXJUaW1lID0gdGhpcy5nZXRTZXJ2ZXJUaW1lTXNlYygpO1xuICAgICAgICBsZXQgdG9keVN0YXJ0VGltZSA9IFV0aWxzLmdldERheUJlZ2luVGltZShjdXJUaW1lKTtcbiAgICAgICAgbGV0IHRvbW9ycnlTdGFydFRpbWUgPSB0b2R5U3RhcnRUaW1lIC8gMTAwMCArIEdsb2JhbERlZmluZXMuU2Vjb25kX0RheTtcbiAgICAgICAgbGV0IG9mZnNldCA9IFV0aWxzLnJhbmRvbUludCgwLCA2MCAqIDEpOy8vMeWIhumSn+mUmeWzsOaXtumXtFxuICAgICAgICBsZXQgZGV0YSA9IHRvbW9ycnlTdGFydFRpbWUgLSBjdXJUaW1lIC8gMTAwMCArIG9mZnNldDtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dF9jcm9zc2RheSk7XG4gICAgICAgIHRoaXMudGltZW91dF9jcm9zc2RheSA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vbkNyb3NzRGF5KCk7XG4gICAgICAgIH0sIGRldGEgKiAxMDAwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDot6jlpKnlpITnkIZcbiAgICAgKi9cbiAgICBvbkNyb3NzRGF5KCkge1xuICAgICAgICAvL+i3qOWkqemHjeeZu+W9lVxuICAgICAgICBzbS5zd2l0Y2hTY2VuZShMb2FkaW5nU2NlbmUpO1xuICAgIH1cblxuXG59XG5cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/merge/util/NewUtils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fbca9WkjONC8LMMFvmI+toG', 'NewUtils');
// script/merge/util/NewUtils.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NewUtils = /** @class */ (function () {
    function NewUtils() {
    }
    /**
     * 深拷贝
     * @example
     * let src = { a: 123, b: { c: [1, 2, 3], d: "ceshi" } };
     * let tar = Util.deepClone(src);
     * tar.b.c[0] = 2;
     * console.log(`obj:`, tar, `src:`, src);
     */
    NewUtils.deepClone = function (obj, cache) {
        if (cache === void 0) { cache = new WeakMap(); }
        // 普通类型，直接返回
        if (typeof obj !== 'object')
            return obj;
        if (obj === null)
            return obj;
        // 防止循环引用，程序进入死循环
        if (cache.get(obj))
            return cache.get(obj);
        if (obj instanceof Date)
            return new Date(obj);
        if (obj instanceof RegExp)
            return new RegExp(obj);
        // 找到所属原型上的constructor，所属原型上的constructor指向当前对象的构造函数
        var cloneObj = new obj.constructor();
        // 缓存拷贝的对象，用于处理循环引用的情况
        cache.set(obj, cloneObj);
        for (var key in obj) {
            if (obj[key]) {
                cloneObj[key] = this.deepClone(obj[key], cache); // 递归拷贝
            }
        }
        return cloneObj;
    };
    NewUtils.randomIntInclusive = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    // 去重 - 随机生成指定数量指定区间的数组
    NewUtils.randomIntArrFromSection = function (cnt, min, max) {
        var result = [];
        do {
            var v = this.randomIntInclusive(min, max);
            if (result.indexOf(v) === -1) {
                result.push(v);
            }
        } while (result.length < cnt);
        return result;
    };
    // 不去重 - 随机生成指定数量指定区间的数组
    NewUtils.randomIntArrInclusive = function (cnt, min, max) {
        var result = [];
        do {
            result.push(this.randomIntInclusive(min, max));
        } while (result.length < cnt);
        return result;
    };
    // 从给定的数组中随机生成一组指定数量的数组
    NewUtils.randomIntArrFromArr = function (cnt, srcArr) {
        var result = [];
        do {
            var index = this.randomIntInclusive(0, srcArr.length - 1);
            result.push(srcArr[index]);
        } while (result.length < cnt);
        return result;
    };
    return NewUtils;
}());
exports.default = NewUtils;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvbWVyZ2UvdXRpbC9OZXdVdGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQUE7SUFxRUEsQ0FBQztJQXBFRzs7Ozs7OztPQU9HO0lBQ0ksa0JBQVMsR0FBaEIsVUFBaUIsR0FBRyxFQUFFLEtBQXFCO1FBQXJCLHNCQUFBLEVBQUEsWUFBWSxPQUFPLEVBQUU7UUFDdkMsWUFBWTtRQUNaLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUTtZQUFFLE9BQU8sR0FBRyxDQUFDO1FBQ3hDLElBQUksR0FBRyxLQUFLLElBQUk7WUFBRSxPQUFPLEdBQUcsQ0FBQztRQUU3QixpQkFBaUI7UUFDakIsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztZQUFFLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxQyxJQUFJLEdBQUcsWUFBWSxJQUFJO1lBQUUsT0FBTyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM5QyxJQUFJLEdBQUcsWUFBWSxNQUFNO1lBQUUsT0FBTyxJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVsRCxtREFBbUQ7UUFDbkQsSUFBTSxRQUFRLEdBQUcsSUFBSSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDdkMsc0JBQXNCO1FBQ3RCLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3pCLEtBQUssSUFBTSxHQUFHLElBQUksR0FBRyxFQUFFO1lBQ25CLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNWLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU87YUFDM0Q7U0FDSjtRQUVELE9BQU8sUUFBUSxDQUFDO0lBQ3BCLENBQUM7SUFFTSwyQkFBa0IsR0FBekIsVUFBMEIsR0FBRyxFQUFFLEdBQUc7UUFDOUIsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckIsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7SUFDN0QsQ0FBQztJQUVELHVCQUF1QjtJQUNoQixnQ0FBdUIsR0FBOUIsVUFBK0IsR0FBVyxFQUFFLEdBQVcsRUFBRSxHQUFXO1FBQ2hFLElBQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNsQixHQUFHO1lBQ0MsSUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUM1QyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7Z0JBQzFCLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDbEI7U0FDSixRQUFRLE1BQU0sQ0FBQyxNQUFNLEdBQUcsR0FBRyxFQUFFO1FBRTlCLE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFFRCx3QkFBd0I7SUFDakIsOEJBQXFCLEdBQTVCLFVBQTZCLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRztRQUN0QyxJQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDbEIsR0FBRztZQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ2xELFFBQVEsTUFBTSxDQUFDLE1BQU0sR0FBRyxHQUFHLEVBQUU7UUFDOUIsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUVELHVCQUF1QjtJQUNoQiw0QkFBbUIsR0FBMUIsVUFBMkIsR0FBRyxFQUFFLE1BQU07UUFDbEMsSUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLEdBQUc7WUFDQyxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDNUQsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUM5QixRQUFRLE1BQU0sQ0FBQyxNQUFNLEdBQUcsR0FBRyxFQUFFO1FBQzlCLE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0FyRUEsQUFxRUMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld1V0aWxzIHtcbiAgICAvKipcbiAgICAgKiDmt7Hmi7fotJ1cbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIGxldCBzcmMgPSB7IGE6IDEyMywgYjogeyBjOiBbMSwgMiwgM10sIGQ6IFwiY2VzaGlcIiB9IH07XG4gICAgICogbGV0IHRhciA9IFV0aWwuZGVlcENsb25lKHNyYyk7XG4gICAgICogdGFyLmIuY1swXSA9IDI7XG4gICAgICogY29uc29sZS5sb2coYG9iajpgLCB0YXIsIGBzcmM6YCwgc3JjKTtcbiAgICAgKi9cbiAgICBzdGF0aWMgZGVlcENsb25lKG9iaiwgY2FjaGUgPSBuZXcgV2Vha01hcCgpKSB7XG4gICAgICAgIC8vIOaZrumAmuexu+Wei++8jOebtOaOpei/lOWbnlxuICAgICAgICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHJldHVybiBvYmo7XG4gICAgICAgIGlmIChvYmogPT09IG51bGwpIHJldHVybiBvYmo7XG5cbiAgICAgICAgLy8g6Ziy5q2i5b6q546v5byV55So77yM56iL5bqP6L+b5YWl5q275b6q546vXG4gICAgICAgIGlmIChjYWNoZS5nZXQob2JqKSkgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICAgICAgICBpZiAob2JqIGluc3RhbmNlb2YgRGF0ZSkgcmV0dXJuIG5ldyBEYXRlKG9iaik7XG4gICAgICAgIGlmIChvYmogaW5zdGFuY2VvZiBSZWdFeHApIHJldHVybiBuZXcgUmVnRXhwKG9iaik7XG5cbiAgICAgICAgLy8g5om+5Yiw5omA5bGe5Y6f5Z6L5LiK55qEY29uc3RydWN0b3LvvIzmiYDlsZ7ljp/lnovkuIrnmoRjb25zdHJ1Y3RvcuaMh+WQkeW9k+WJjeWvueixoeeahOaehOmAoOWHveaVsFxuICAgICAgICBjb25zdCBjbG9uZU9iaiA9IG5ldyBvYmouY29uc3RydWN0b3IoKTtcbiAgICAgICAgLy8g57yT5a2Y5ou36LSd55qE5a+56LGh77yM55So5LqO5aSE55CG5b6q546v5byV55So55qE5oOF5Ya1XG4gICAgICAgIGNhY2hlLnNldChvYmosIGNsb25lT2JqKTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gb2JqKSB7XG4gICAgICAgICAgICBpZiAob2JqW2tleV0pIHtcbiAgICAgICAgICAgICAgICBjbG9uZU9ialtrZXldID0gdGhpcy5kZWVwQ2xvbmUob2JqW2tleV0sIGNhY2hlKTsgLy8g6YCS5b2S5ou36LSdXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2xvbmVPYmo7XG4gICAgfVxuXG4gICAgc3RhdGljIHJhbmRvbUludEluY2x1c2l2ZShtaW4sIG1heCkge1xuICAgICAgICBtaW4gPSBNYXRoLmNlaWwobWluKTtcbiAgICAgICAgbWF4ID0gTWF0aC5mbG9vcihtYXgpO1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcbiAgICB9XG5cbiAgICAvLyDljrvph40gLSDpmo/mnLrnlJ/miJDmjIflrprmlbDph4/mjIflrprljLrpl7TnmoTmlbDnu4RcbiAgICBzdGF0aWMgcmFuZG9tSW50QXJyRnJvbVNlY3Rpb24oY250OiBudW1iZXIsIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlcltdIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIGNvbnN0IHYgPSB0aGlzLnJhbmRvbUludEluY2x1c2l2ZShtaW4sIG1heCk7XG4gICAgICAgICAgICBpZiAocmVzdWx0LmluZGV4T2YodikgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2godik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gd2hpbGUgKHJlc3VsdC5sZW5ndGggPCBjbnQpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgLy8g5LiN5Y676YeNIC0g6ZqP5py655Sf5oiQ5oyH5a6a5pWw6YeP5oyH5a6a5Yy66Ze055qE5pWw57uEXG4gICAgc3RhdGljIHJhbmRvbUludEFyckluY2x1c2l2ZShjbnQsIG1pbiwgbWF4KTogbnVtYmVyW10ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2godGhpcy5yYW5kb21JbnRJbmNsdXNpdmUobWluLCBtYXgpKTtcbiAgICAgICAgfSB3aGlsZSAocmVzdWx0Lmxlbmd0aCA8IGNudCk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgLy8g5LuO57uZ5a6a55qE5pWw57uE5Lit6ZqP5py655Sf5oiQ5LiA57uE5oyH5a6a5pWw6YeP55qE5pWw57uEXG4gICAgc3RhdGljIHJhbmRvbUludEFyckZyb21BcnIoY250LCBzcmNBcnIpOiBudW1iZXJbXSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgICAgICBkbyB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMucmFuZG9tSW50SW5jbHVzaXZlKDAsIHNyY0Fyci5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHNyY0FycltpbmRleF0pO1xuICAgICAgICB9IHdoaWxlIChyZXN1bHQubGVuZ3RoIDwgY250KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------
