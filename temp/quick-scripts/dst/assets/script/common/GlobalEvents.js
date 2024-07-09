
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