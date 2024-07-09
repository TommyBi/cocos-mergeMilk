
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