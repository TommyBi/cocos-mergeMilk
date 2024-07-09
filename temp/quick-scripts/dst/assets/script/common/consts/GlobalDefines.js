
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/common/consts/GlobalDefines.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dbdbbGrYxVIuKj0/0ClKX3D', 'GlobalDefines');
// script/common/consts/GlobalDefines.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadStatus = exports.GlobalDefines = void 0;
var GlobalDefines = /** @class */ (function () {
    function GlobalDefines() {
    }
    Object.defineProperty(GlobalDefines, "ScreenWidth", {
        get: function () {
            return this.Design_Width;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlobalDefines, "ScreenHeight", {
        get: function () {
            var rate = this.Design_Width / this.WindowWidth;
            return this.WindowHeight * rate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlobalDefines, "SafeAreaHeight", {
        get: function () {
            return this.ScreenHeight - this.MenuButtonLogic.top - this.MenuButtonLogic.height;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlobalDefines, "wsRate", {
        get: function () {
            return this.WindowWidth / this.ScreenWidth;
        },
        enumerable: false,
        configurable: true
    });
    //每一天的秒数
    GlobalDefines.Second_Day = 24 * 60 * 60;
    GlobalDefines.isIos = true;
    //屏幕相关
    GlobalDefines.PixelRatio = 2;
    GlobalDefines.WindowHeight = 667;
    GlobalDefines.WindowWidth = 375;
    GlobalDefines.MenuButtonLogic = {
        width: 174,
        height: 64,
        top: 16 * 2,
        right: 730,
        bottom: 80,
        left: 556
    };
    //wx.getSystemInfoSync时赋值
    GlobalDefines.SDKVersion = "";
    GlobalDefines.platform = "";
    GlobalDefines.Design_Width = 750;
    GlobalDefines.Design_Height = 1334;
    return GlobalDefines;
}());
exports.GlobalDefines = GlobalDefines;
//资源加载状态
var LoadStatus;
(function (LoadStatus) {
    LoadStatus[LoadStatus["Doing"] = -1] = "Doing";
    LoadStatus[LoadStatus["Success"] = 0] = "Success";
    LoadStatus[LoadStatus["GameOut"] = 1] = "GameOut";
})(LoadStatus = exports.LoadStatus || (exports.LoadStatus = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvY29tbW9uL2NvbnN0cy9HbG9iYWxEZWZpbmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0lBQUE7SUF3Q0EsQ0FBQztJQWpCRyxzQkFBa0IsNEJBQVc7YUFBN0I7WUFDSSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDN0IsQ0FBQzs7O09BQUE7SUFFRCxzQkFBa0IsNkJBQVk7YUFBOUI7WUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7WUFDaEQsT0FBTyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUNwQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFrQiwrQkFBYzthQUFoQztZQUNJLE9BQU8sSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQztRQUN0RixDQUFDOzs7T0FBQTtJQUVELHNCQUFrQix1QkFBTTthQUF4QjtZQUNJLE9BQU8sSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQy9DLENBQUM7OztPQUFBO0lBckNELFFBQVE7SUFDRCx3QkFBVSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDO0lBQzFCLG1CQUFLLEdBQVksSUFBSSxDQUFDO0lBQzdCLE1BQU07SUFDQyx3QkFBVSxHQUFHLENBQUMsQ0FBQztJQUNmLDBCQUFZLEdBQUcsR0FBRyxDQUFDO0lBQ25CLHlCQUFXLEdBQUcsR0FBRyxDQUFDO0lBQ2xCLDZCQUFlLEdBQUc7UUFDckIsS0FBSyxFQUFFLEdBQUc7UUFDVixNQUFNLEVBQUUsRUFBRTtRQUNWLEdBQUcsRUFBRSxFQUFFLEdBQUcsQ0FBQztRQUNYLEtBQUssRUFBRSxHQUFHO1FBQ1YsTUFBTSxFQUFFLEVBQUU7UUFDVixJQUFJLEVBQUUsR0FBRztLQUNaLENBQUM7SUFDRix5QkFBeUI7SUFDbEIsd0JBQVUsR0FBVyxFQUFFLENBQUM7SUFDeEIsc0JBQVEsR0FBVyxFQUFFLENBQUM7SUFFdEIsMEJBQVksR0FBVyxHQUFHLENBQUM7SUFDM0IsMkJBQWEsR0FBVyxJQUFJLENBQUM7SUFtQnhDLG9CQUFDO0NBeENELEFBd0NDLElBQUE7QUF4Q1ksc0NBQWE7QUF5QzFCLFFBQVE7QUFDUixJQUFZLFVBSVg7QUFKRCxXQUFZLFVBQVU7SUFDbEIsOENBQVUsQ0FBQTtJQUNWLGlEQUFPLENBQUE7SUFDUCxpREFBTyxDQUFBO0FBQ1gsQ0FBQyxFQUpXLFVBQVUsR0FBVixrQkFBVSxLQUFWLGtCQUFVLFFBSXJCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmV4cG9ydCBjbGFzcyBHbG9iYWxEZWZpbmVzIHtcbiAgICAvL+avj+S4gOWkqeeahOenkuaVsFxuICAgIHN0YXRpYyBTZWNvbmRfRGF5ID0gMjQgKiA2MCAqIDYwO1xuICAgIHN0YXRpYyBpc0lvczogYm9vbGVhbiA9IHRydWU7XG4gICAgLy/lsY/luZXnm7jlhbNcbiAgICBzdGF0aWMgUGl4ZWxSYXRpbyA9IDI7XG4gICAgc3RhdGljIFdpbmRvd0hlaWdodCA9IDY2NztcbiAgICBzdGF0aWMgV2luZG93V2lkdGggPSAzNzU7XG4gICAgc3RhdGljIE1lbnVCdXR0b25Mb2dpYyA9IHtcbiAgICAgICAgd2lkdGg6IDE3NCxcbiAgICAgICAgaGVpZ2h0OiA2NCwgLy82NFxuICAgICAgICB0b3A6IDE2ICogMixcbiAgICAgICAgcmlnaHQ6IDczMCxcbiAgICAgICAgYm90dG9tOiA4MCxcbiAgICAgICAgbGVmdDogNTU2XG4gICAgfTtcbiAgICAvL3d4LmdldFN5c3RlbUluZm9TeW5j5pe26LWL5YC8XG4gICAgc3RhdGljIFNES1ZlcnNpb246IHN0cmluZyA9IFwiXCI7XG4gICAgc3RhdGljIHBsYXRmb3JtOiBzdHJpbmcgPSBcIlwiO1xuXG4gICAgc3RhdGljIERlc2lnbl9XaWR0aDogbnVtYmVyID0gNzUwO1xuICAgIHN0YXRpYyBEZXNpZ25fSGVpZ2h0OiBudW1iZXIgPSAxMzM0O1xuXG4gICAgcHVibGljIHN0YXRpYyBnZXQgU2NyZWVuV2lkdGgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLkRlc2lnbl9XaWR0aDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCBTY3JlZW5IZWlnaHQoKSB7XG4gICAgICAgIGxldCByYXRlID0gdGhpcy5EZXNpZ25fV2lkdGggLyB0aGlzLldpbmRvd1dpZHRoO1xuICAgICAgICByZXR1cm4gdGhpcy5XaW5kb3dIZWlnaHQgKiByYXRlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IFNhZmVBcmVhSGVpZ2h0KCl7XG4gICAgICAgIHJldHVybiB0aGlzLlNjcmVlbkhlaWdodCAtIHRoaXMuTWVudUJ1dHRvbkxvZ2ljLnRvcCAtIHRoaXMuTWVudUJ1dHRvbkxvZ2ljLmhlaWdodDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCB3c1JhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLldpbmRvd1dpZHRoIC8gdGhpcy5TY3JlZW5XaWR0aDtcbiAgICB9XG5cbn1cbi8v6LWE5rqQ5Yqg6L2954q25oCBXG5leHBvcnQgZW51bSBMb2FkU3RhdHVzIHtcbiAgICBEb2luZyA9IC0xLFxuICAgIFN1Y2Nlc3MsXG4gICAgR2FtZU91dCxcbn1cblxuIl19