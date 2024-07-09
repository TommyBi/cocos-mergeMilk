
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/common/Global.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e5a2eiI6s1HF571App3AA0M', 'Global');
// script/common/Global.ts

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
exports.GlobalEvent = exports.Global = void 0;
var Global = /** @class */ (function (_super) {
    __extends(Global, _super);
    function Global() {
        return _super.call(this) || this;
    }
    Global.Instance = new Global();
    return Global;
}(cc.EventTarget));
exports.Global = Global;
exports.GlobalEvent = Global.Instance;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvY29tbW9uL0dsb2JhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBNEIsMEJBQWM7SUFHdEM7ZUFDSSxpQkFBTztJQUNYLENBQUM7SUFKc0IsZUFBUSxHQUFVLElBQUksTUFBTSxFQUFFLENBQUM7SUFLMUQsYUFBQztDQU5ELEFBTUMsQ0FOMkIsRUFBRSxDQUFDLFdBQVcsR0FNekM7QUFOWSx3QkFBTTtBQVFOLFFBQUEsV0FBVyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgR2xvYmFsIGV4dGVuZHMgY2MuRXZlbnRUYXJnZXQge1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgSW5zdGFuY2U6R2xvYmFsID0gbmV3IEdsb2JhbCgpO1xuXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBHbG9iYWxFdmVudCA9IEdsb2JhbC5JbnN0YW5jZTsiXX0=