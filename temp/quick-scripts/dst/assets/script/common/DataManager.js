
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/common/DataManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e0d7d5FTGJIwJ5DrVKvwSzx', 'DataManager');
// script/common/DataManager.ts

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dm = void 0;
var PlayerInfo_1 = require("../game/data/PlayerInfo");
var DataManager = /** @class */ (function () {
    function DataManager() {
        this.player = new PlayerInfo_1.default();
    }
    Object.defineProperty(DataManager, "ins", {
        get: function () {
            if (!this._ins) {
                this._ins = new DataManager();
            }
            return this._ins;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 同步初始化数据
     */
    DataManager.prototype.onInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.player.init();
                return [2 /*return*/];
            });
        });
    };
    DataManager.prototype.onLogin = function (data) {
    };
    return DataManager;
}());
exports.default = DataManager;
exports.dm = DataManager.ins;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvY29tbW9uL0RhdGFNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNEQUFpRDtBQUVqRDtJQWNDO1FBSE8sV0FBTSxHQUFlLElBQUksb0JBQVUsRUFBRSxDQUFDO0lBSzdDLENBQUM7SUFiRCxzQkFBa0Isa0JBQUc7YUFBckI7WUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDZixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7YUFDOUI7WUFDRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDbEIsQ0FBQzs7O09BQUE7SUFTRDs7T0FFRztJQUNHLDRCQUFNLEdBQVo7OztnQkFFQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDOzs7O0tBRW5CO0lBRUQsNkJBQU8sR0FBUCxVQUFRLElBQUk7SUFDWixDQUFDO0lBSUYsa0JBQUM7QUFBRCxDQS9CQSxBQStCQyxJQUFBOztBQUNZLFFBQUEsRUFBRSxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGxheWVySW5mbyBmcm9tIFwiLi4vZ2FtZS9kYXRhL1BsYXllckluZm9cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0YU1hbmFnZXIge1xuXG5cdHByaXZhdGUgc3RhdGljIF9pbnM6IERhdGFNYW5hZ2VyO1xuXHRwdWJsaWMgc3RhdGljIGdldCBpbnMoKSB7XG5cdFx0aWYgKCF0aGlzLl9pbnMpIHtcblx0XHRcdHRoaXMuX2lucyA9IG5ldyBEYXRhTWFuYWdlcigpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5faW5zO1xuXHR9XG5cblxuXHRwdWJsaWMgcGxheWVyOiBQbGF5ZXJJbmZvID0gbmV3IFBsYXllckluZm8oKTtcblxuXG5cdHByaXZhdGUgY29uc3RydWN0b3IoKSB7XG5cdFx0XG5cdH1cblx0LyoqXG5cdCAqIOWQjOatpeWIneWni+WMluaVsOaNrlxuXHQgKi9cblx0YXN5bmMgb25Jbml0KCkge1xuXG5cdFx0dGhpcy5wbGF5ZXIuaW5pdCgpO1xuXG5cdH1cblxuXHRvbkxvZ2luKGRhdGEpIHtcblx0fVxuXG5cblxufVxuZXhwb3J0IGNvbnN0IGRtID0gRGF0YU1hbmFnZXIuaW5zOyJdfQ==