
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
    Utils.randomIntInclusive = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    Utils.randomIntArrFromSection = function (cnt, min, max) {
        var result = [];
        do {
            var v = this.randomIntInclusive(min, max);
            if (result.indexOf(v) === -1) {
                result.push(v);
            }
        } while (result.length < cnt);
        return result;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvbWVyZ2UvdXRpbC9VdGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQUE7SUFpREEsQ0FBQztJQWhERzs7Ozs7OztPQU9HO0lBQ0ksZUFBUyxHQUFoQixVQUFpQixHQUFHLEVBQUUsS0FBcUI7UUFBckIsc0JBQUEsRUFBQSxZQUFZLE9BQU8sRUFBRTtRQUN2QyxZQUFZO1FBQ1osSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRO1lBQUUsT0FBTyxHQUFHLENBQUM7UUFDeEMsSUFBSSxHQUFHLEtBQUssSUFBSTtZQUFFLE9BQU8sR0FBRyxDQUFDO1FBRTdCLGlCQUFpQjtRQUNqQixJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO1lBQUUsT0FBTyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFDLElBQUksR0FBRyxZQUFZLElBQUk7WUFBRSxPQUFPLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzlDLElBQUksR0FBRyxZQUFZLE1BQU07WUFBRSxPQUFPLElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRWxELG1EQUFtRDtRQUNuRCxJQUFNLFFBQVEsR0FBRyxJQUFJLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN2QyxzQkFBc0I7UUFDdEIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDekIsS0FBSyxJQUFNLEdBQUcsSUFBSSxHQUFHLEVBQUU7WUFDbkIsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ1YsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTzthQUMzRDtTQUNKO1FBRUQsT0FBTyxRQUFRLENBQUM7SUFDcEIsQ0FBQztJQUVNLHdCQUFrQixHQUF6QixVQUEwQixHQUFHLEVBQUUsR0FBRztRQUM5QixHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQixHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUM3RCxDQUFDO0lBRU0sNkJBQXVCLEdBQTlCLFVBQStCLEdBQVcsRUFBRSxHQUFXLEVBQUUsR0FBVztRQUNoRSxJQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDbEIsR0FBRztZQUNDLElBQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDNUMsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO2dCQUMxQixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2xCO1NBQ0osUUFBUSxNQUFNLENBQUMsTUFBTSxHQUFHLEdBQUcsRUFBRTtRQUU5QixPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBQ0wsWUFBQztBQUFELENBakRBLEFBaURDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBVdGlscyB7XG4gICAgLyoqXG4gICAgICog5rex5ou36LSdXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBsZXQgc3JjID0geyBhOiAxMjMsIGI6IHsgYzogWzEsIDIsIDNdLCBkOiBcImNlc2hpXCIgfSB9O1xuICAgICAqIGxldCB0YXIgPSBVdGlsLmRlZXBDbG9uZShzcmMpO1xuICAgICAqIHRhci5iLmNbMF0gPSAyO1xuICAgICAqIGNvbnNvbGUubG9nKGBvYmo6YCwgdGFyLCBgc3JjOmAsIHNyYyk7XG4gICAgICovXG4gICAgc3RhdGljIGRlZXBDbG9uZShvYmosIGNhY2hlID0gbmV3IFdlYWtNYXAoKSkge1xuICAgICAgICAvLyDmma7pgJrnsbvlnovvvIznm7TmjqXov5Tlm55cbiAgICAgICAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSByZXR1cm4gb2JqO1xuICAgICAgICBpZiAob2JqID09PSBudWxsKSByZXR1cm4gb2JqO1xuXG4gICAgICAgIC8vIOmYsuatouW+queOr+W8leeUqO+8jOeoi+W6j+i/m+WFpeatu+W+queOr1xuICAgICAgICBpZiAoY2FjaGUuZ2V0KG9iaikpIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgICAgICAgaWYgKG9iaiBpbnN0YW5jZW9mIERhdGUpIHJldHVybiBuZXcgRGF0ZShvYmopO1xuICAgICAgICBpZiAob2JqIGluc3RhbmNlb2YgUmVnRXhwKSByZXR1cm4gbmV3IFJlZ0V4cChvYmopO1xuXG4gICAgICAgIC8vIOaJvuWIsOaJgOWxnuWOn+Wei+S4iueahGNvbnN0cnVjdG9y77yM5omA5bGe5Y6f5Z6L5LiK55qEY29uc3RydWN0b3LmjIflkJHlvZPliY3lr7nosaHnmoTmnoTpgKDlh73mlbBcbiAgICAgICAgY29uc3QgY2xvbmVPYmogPSBuZXcgb2JqLmNvbnN0cnVjdG9yKCk7XG4gICAgICAgIC8vIOe8k+WtmOaLt+i0neeahOWvueixoe+8jOeUqOS6juWkhOeQhuW+queOr+W8leeUqOeahOaDheWGtVxuICAgICAgICBjYWNoZS5zZXQob2JqLCBjbG9uZU9iaik7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIG9iaikge1xuICAgICAgICAgICAgaWYgKG9ialtrZXldKSB7XG4gICAgICAgICAgICAgICAgY2xvbmVPYmpba2V5XSA9IHRoaXMuZGVlcENsb25lKG9ialtrZXldLCBjYWNoZSk7IC8vIOmAkuW9kuaLt+i0nVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNsb25lT2JqO1xuICAgIH1cblxuICAgIHN0YXRpYyByYW5kb21JbnRJbmNsdXNpdmUobWluLCBtYXgpIHtcbiAgICAgICAgbWluID0gTWF0aC5jZWlsKG1pbik7XG4gICAgICAgIG1heCA9IE1hdGguZmxvb3IobWF4KTtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG4gICAgfVxuXG4gICAgc3RhdGljIHJhbmRvbUludEFyckZyb21TZWN0aW9uKGNudDogbnVtYmVyLCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXJbXSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgICAgICBkbyB7XG4gICAgICAgICAgICBjb25zdCB2ID0gdGhpcy5yYW5kb21JbnRJbmNsdXNpdmUobWluLCBtYXgpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdC5pbmRleE9mKHYpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IHdoaWxlIChyZXN1bHQubGVuZ3RoIDwgY250KTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cbiJdfQ==