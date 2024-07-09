"use strict";
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