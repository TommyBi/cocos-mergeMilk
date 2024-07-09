
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