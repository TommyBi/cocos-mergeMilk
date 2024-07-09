
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