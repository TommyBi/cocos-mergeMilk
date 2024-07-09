
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/game/ui/bl_Config.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c1aeafmJchCIpOozF5ApxOv', 'bl_Config');
// script/game/ui/bl_Config.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bc = exports.bl_Config = void 0;
// 不太知道是什么，但看上去像是管理一些常量的空间
var bl_Config = /** @class */ (function () {
    function bl_Config() {
        this.guideStep = 0;
        this.maxId = 10;
        this.country = "6";
        this.moneyAbbr = "$";
        this.forceNum = -1;
    }
    bl_Config.prototype.getEmptyCount = function (list) {
        var arr = list.filter(function (value) {
            return value == 0;
        });
        if (arr.length > 2)
            return true;
        return false;
    };
    /**
     * 获取强制弹出视频规则
     * @param data
     */
    bl_Config.prototype.getForceCfgs = function (data) {
        this.forceCfgs = data;
    };
    bl_Config.Instance = new bl_Config();
    return bl_Config;
}());
exports.bl_Config = bl_Config;
exports.bc = bl_Config.Instance;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZ2FtZS91aS9ibF9Db25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUEsMEJBQTBCO0FBQzFCO0lBQUE7UUFHSSxjQUFTLEdBQUcsQ0FBQyxDQUFDO1FBRWQsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUVYLFlBQU8sR0FBRyxHQUFHLENBQUM7UUFFZCxjQUFTLEdBQUcsR0FBRyxDQUFBO1FBNENmLGFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQztJQVFsQixDQUFDO0lBaERHLGlDQUFhLEdBQWIsVUFBYyxJQUFJO1FBQ2QsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFDLEtBQUs7WUFDeEIsT0FBTyxLQUFLLElBQUksQ0FBQyxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUM7WUFBRSxPQUFPLElBQUksQ0FBQztRQUNoQyxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBbUNEOzs7T0FHRztJQUNILGdDQUFZLEdBQVosVUFBYSxJQUFJO1FBQ2IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFDMUIsQ0FBQztJQTNEc0Isa0JBQVEsR0FBYyxJQUFJLFNBQVMsRUFBRSxDQUFDO0lBNERqRSxnQkFBQztDQTdERCxBQTZEQyxJQUFBO0FBN0RZLDhCQUFTO0FBK0RULFFBQUEsRUFBRSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYmxfdG9wIGZyb20gXCIuL2JsX3RvcFwiO1xuXG5leHBvcnQgdHlwZSBGb3JjZUNvbmZpZ3MgPSB7IHRpYzogbnVtYmVyW10sIHJhdGU6IG51bWJlcltdIH1cblxuLy8g5LiN5aSq55+l6YGT5piv5LuA5LmI77yM5L2G55yL5LiK5Y675YOP5piv566h55CG5LiA5Lqb5bi46YeP55qE56m66Ze0XG5leHBvcnQgY2xhc3MgYmxfQ29uZmlnIHtcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEluc3RhbmNlOiBibF9Db25maWcgPSBuZXcgYmxfQ29uZmlnKCk7XG5cbiAgICBndWlkZVN0ZXAgPSAwO1xuXG4gICAgbWF4SWQgPSAxMDtcblxuICAgIGNvdW50cnkgPSBcIjZcIjtcblxuICAgIG1vbmV5QWJiciA9IFwiJFwiXG5cbiAgICB0b3A6IGJsX3RvcDtcblxuICAgIGdldEVtcHR5Q291bnQobGlzdCkge1xuICAgICAgICBsZXQgYXJyID0gbGlzdC5maWx0ZXIoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgPT0gMDtcbiAgICAgICAgfSlcbiAgICAgICAgaWYgKGFyci5sZW5ndGggPiAyKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyAvL+ino+aekOS9k+eOsOWIl+ihqFxuICAgIC8vIGRyYXdEYXRhOiB3aWR0aERyYXdhbF9jZmcgPSB7XG4gICAgLy8gICAgIG5vd0JhbFNob3c6IFwiMFwiLFxuICAgIC8vICAgICBuZXh0THZDb3VudDogMCxcbiAgICAvLyAgICAgbm93TGV2ZWw6IDAsXG4gICAgLy8gICAgIG5vd0xvZ0RheXM6IDAsXG4gICAgLy8gICAgIHRvZGF5R2F0ZXM6IDAsXG4gICAgLy8gICAgIGFjdENvdW50Q2ZnOiAwLFxuICAgIC8vICAgICBzaG93TGlzdDogW11cbiAgICAvLyB9O1xuICAgIC8vIHBhcnNlTGlzdChkYXRhOiB3aWR0aERyYXdhbF9jZmcsIGNhbGxiYWNrcykge1xuICAgIC8vICAgICB0aGlzLmRyYXdEYXRhID0gZGF0YTtcbiAgICAvLyAgICAgaWYgKGNhbGxiYWNrcykgY2FsbGJhY2tzKCk7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwiQEDmj5DnjrDliJfooajvvJpcIiwgdGhpcy5kcmF3RGF0YSlcbiAgICAvLyB9XG5cbiAgICAvLyBnZXROZXh0KCkge1xuICAgIC8vICAgICBsZXQgbnVtID0gcGFyc2VGbG9hdCh0aGlzLmRyYXdEYXRhLm5vd0JhbFNob3cpO1xuICAgIC8vICAgICBsZXQgbGlzdCA9IHRoaXMuZHJhd0RhdGEuc2hvd0xpc3Q7XG4gICAgLy8gICAgIGxldCBuZXh0ID0gMDtcbiAgICAvLyAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gICAgIC8vICAgICBpZiAobnVtIDwgcGFyc2VGbG9hdChsaXN0W2ldLm5lZWRCYWwpKSB7XG4gICAgLy8gICAgIC8vICAgICAgICAgbmV4dCA9IHBhcnNlRmxvYXQobGlzdFtpXS5uZWVkQmFsKTtcbiAgICAvLyAgICAgLy8gICAgICAgICBicmVhaztcbiAgICAvLyAgICAgLy8gICAgIH1cblxuICAgIC8vICAgICAvLyB9XG4gICAgLy8gICAgIG5leHQgPSBwYXJzZUZsb2F0KGxpc3RbMF0ubmVlZEJhbCk7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwiQEDmj5DnjrDmoaPkvY3ph5Hpop3vvJpcIiwgbmV4dCk7XG4gICAgLy8gICAgIHJldHVybiBuZXh0O1xuICAgIC8vIH1cblxuICAgIGZvcmNlQ2ZnczogRm9yY2VDb25maWdzW107XG4gICAgZm9yY2VOdW0gPSAtMTtcbiAgICAvKipcbiAgICAgKiDojrflj5blvLrliLblvLnlh7rop4bpopHop4TliJlcbiAgICAgKiBAcGFyYW0gZGF0YSBcbiAgICAgKi9cbiAgICBnZXRGb3JjZUNmZ3MoZGF0YSkge1xuICAgICAgICB0aGlzLmZvcmNlQ2ZncyA9IGRhdGE7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgYmMgPSBibF9Db25maWcuSW5zdGFuY2U7Il19