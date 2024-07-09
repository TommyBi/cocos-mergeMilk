
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