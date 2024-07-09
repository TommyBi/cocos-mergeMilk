
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