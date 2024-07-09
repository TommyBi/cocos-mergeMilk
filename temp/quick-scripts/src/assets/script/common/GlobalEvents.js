"use strict";
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