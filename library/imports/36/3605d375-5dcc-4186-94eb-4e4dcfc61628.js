"use strict";
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