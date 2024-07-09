"use strict";
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