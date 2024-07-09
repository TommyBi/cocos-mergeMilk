
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/merge/util/Utils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1bcfeB+jAVGBKBOImiR+nLU', 'Utils');
// script/merge/util/Utils.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utils = /** @class */ (function () {
    function Utils() {
    }
    /**
     * 深拷贝
     * @example
     * let src = { a: 123, b: { c: [1, 2, 3], d: "ceshi" } };
     * let tar = Util.deepClone(src);
     * tar.b.c[0] = 2;
     * console.log(`obj:`, tar, `src:`, src);
     */
    Utils.deepClone = function (obj, cache) {
        if (cache === void 0) { cache = new WeakMap(); }
        // 普通类型，直接返回
        if (typeof obj !== 'object')
            return obj;
        if (obj === null)
            return obj;
        // 防止循环引用，程序进入死循环
        if (cache.get(obj))
            return cache.get(obj);
        if (obj instanceof Date)
            return new Date(obj);
        if (obj instanceof RegExp)
            return new RegExp(obj);
        // 找到所属原型上的constructor，所属原型上的constructor指向当前对象的构造函数
        var cloneObj = new obj.constructor();
        // 缓存拷贝的对象，用于处理循环引用的情况
        cache.set(obj, cloneObj);
        for (var key in obj) {
            if (obj[key]) {
                cloneObj[key] = this.deepClone(obj[key], cache); // 递归拷贝
            }
        }
        return cloneObj;
    };
    return Utils;
}());
exports.default = Utils;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvbWVyZ2UvdXRpbC9VdGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQUE7SUErQkEsQ0FBQztJQTlCRzs7Ozs7OztPQU9HO0lBQ0ksZUFBUyxHQUFoQixVQUFpQixHQUFHLEVBQUUsS0FBcUI7UUFBckIsc0JBQUEsRUFBQSxZQUFZLE9BQU8sRUFBRTtRQUN2QyxZQUFZO1FBQ1osSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRO1lBQUUsT0FBTyxHQUFHLENBQUM7UUFDeEMsSUFBSSxHQUFHLEtBQUssSUFBSTtZQUFFLE9BQU8sR0FBRyxDQUFDO1FBRTdCLGlCQUFpQjtRQUNqQixJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO1lBQUUsT0FBTyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFDLElBQUksR0FBRyxZQUFZLElBQUk7WUFBRSxPQUFPLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzlDLElBQUksR0FBRyxZQUFZLE1BQU07WUFBRSxPQUFPLElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRWxELG1EQUFtRDtRQUNuRCxJQUFNLFFBQVEsR0FBRyxJQUFJLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN2QyxzQkFBc0I7UUFDdEIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDekIsS0FBSyxJQUFNLEdBQUcsSUFBSSxHQUFHLEVBQUU7WUFDbkIsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ1YsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTzthQUMzRDtTQUNKO1FBRUQsT0FBTyxRQUFRLENBQUM7SUFDcEIsQ0FBQztJQUNMLFlBQUM7QUFBRCxDQS9CQSxBQStCQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXRpbHMge1xuICAgIC8qKlxuICAgICAqIOa3seaLt+i0nVxuICAgICAqIEBleGFtcGxlXG4gICAgICogbGV0IHNyYyA9IHsgYTogMTIzLCBiOiB7IGM6IFsxLCAyLCAzXSwgZDogXCJjZXNoaVwiIH0gfTtcbiAgICAgKiBsZXQgdGFyID0gVXRpbC5kZWVwQ2xvbmUoc3JjKTtcbiAgICAgKiB0YXIuYi5jWzBdID0gMjtcbiAgICAgKiBjb25zb2xlLmxvZyhgb2JqOmAsIHRhciwgYHNyYzpgLCBzcmMpO1xuICAgICAqL1xuICAgIHN0YXRpYyBkZWVwQ2xvbmUob2JqLCBjYWNoZSA9IG5ldyBXZWFrTWFwKCkpIHtcbiAgICAgICAgLy8g5pmu6YCa57G75Z6L77yM55u05o6l6L+U5ZueXG4gICAgICAgIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0JykgcmV0dXJuIG9iajtcbiAgICAgICAgaWYgKG9iaiA9PT0gbnVsbCkgcmV0dXJuIG9iajtcblxuICAgICAgICAvLyDpmLLmraLlvqrnjq/lvJXnlKjvvIznqIvluo/ov5vlhaXmrbvlvqrnjq9cbiAgICAgICAgaWYgKGNhY2hlLmdldChvYmopKSByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gICAgICAgIGlmIChvYmogaW5zdGFuY2VvZiBEYXRlKSByZXR1cm4gbmV3IERhdGUob2JqKTtcbiAgICAgICAgaWYgKG9iaiBpbnN0YW5jZW9mIFJlZ0V4cCkgcmV0dXJuIG5ldyBSZWdFeHAob2JqKTtcblxuICAgICAgICAvLyDmib7liLDmiYDlsZ7ljp/lnovkuIrnmoRjb25zdHJ1Y3Rvcu+8jOaJgOWxnuWOn+Wei+S4iueahGNvbnN0cnVjdG9y5oyH5ZCR5b2T5YmN5a+56LGh55qE5p6E6YCg5Ye95pWwXG4gICAgICAgIGNvbnN0IGNsb25lT2JqID0gbmV3IG9iai5jb25zdHJ1Y3RvcigpO1xuICAgICAgICAvLyDnvJPlrZjmi7fotJ3nmoTlr7nosaHvvIznlKjkuo7lpITnkIblvqrnjq/lvJXnlKjnmoTmg4XlhrVcbiAgICAgICAgY2FjaGUuc2V0KG9iaiwgY2xvbmVPYmopO1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBvYmopIHtcbiAgICAgICAgICAgIGlmIChvYmpba2V5XSkge1xuICAgICAgICAgICAgICAgIGNsb25lT2JqW2tleV0gPSB0aGlzLmRlZXBDbG9uZShvYmpba2V5XSwgY2FjaGUpOyAvLyDpgJLlvZLmi7fotJ1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjbG9uZU9iajtcbiAgICB9XG59XG4iXX0=