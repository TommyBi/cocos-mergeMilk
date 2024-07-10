
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
    // 去重 - 随机生成指定数量指定区间的数组
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
    // 不去重 - 随机生成指定数量指定区间的数组
    Utils.randomIntArrInclusive = function (cnt, min, max) {
        var result = [];
        do {
            result.push(this.randomIntInclusive(min, max));
        } while (result.length < cnt);
        return result;
    };
    // 从给定的数组中随机生成一组指定数量的数组
    Utils.randomIntArrFromArr = function (cnt, srcArr) {
        var result = [];
        do {
            var index = this.randomIntInclusive(0, srcArr.length - 1);
            result.push(srcArr[index]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvbWVyZ2UvdXRpbC9VdGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQUE7SUFxRUEsQ0FBQztJQXBFRzs7Ozs7OztPQU9HO0lBQ0ksZUFBUyxHQUFoQixVQUFpQixHQUFHLEVBQUUsS0FBcUI7UUFBckIsc0JBQUEsRUFBQSxZQUFZLE9BQU8sRUFBRTtRQUN2QyxZQUFZO1FBQ1osSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRO1lBQUUsT0FBTyxHQUFHLENBQUM7UUFDeEMsSUFBSSxHQUFHLEtBQUssSUFBSTtZQUFFLE9BQU8sR0FBRyxDQUFDO1FBRTdCLGlCQUFpQjtRQUNqQixJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO1lBQUUsT0FBTyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFDLElBQUksR0FBRyxZQUFZLElBQUk7WUFBRSxPQUFPLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzlDLElBQUksR0FBRyxZQUFZLE1BQU07WUFBRSxPQUFPLElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRWxELG1EQUFtRDtRQUNuRCxJQUFNLFFBQVEsR0FBRyxJQUFJLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN2QyxzQkFBc0I7UUFDdEIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDekIsS0FBSyxJQUFNLEdBQUcsSUFBSSxHQUFHLEVBQUU7WUFDbkIsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ1YsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTzthQUMzRDtTQUNKO1FBRUQsT0FBTyxRQUFRLENBQUM7SUFDcEIsQ0FBQztJQUVNLHdCQUFrQixHQUF6QixVQUEwQixHQUFHLEVBQUUsR0FBRztRQUM5QixHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQixHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUM3RCxDQUFDO0lBRUQsdUJBQXVCO0lBQ2hCLDZCQUF1QixHQUE5QixVQUErQixHQUFXLEVBQUUsR0FBVyxFQUFFLEdBQVc7UUFDaEUsSUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLEdBQUc7WUFDQyxJQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQzVDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtnQkFDMUIsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNsQjtTQUNKLFFBQVEsTUFBTSxDQUFDLE1BQU0sR0FBRyxHQUFHLEVBQUU7UUFFOUIsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUVELHdCQUF3QjtJQUNqQiwyQkFBcUIsR0FBNUIsVUFBNkIsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO1FBQ3RDLElBQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNsQixHQUFHO1lBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDbEQsUUFBUSxNQUFNLENBQUMsTUFBTSxHQUFHLEdBQUcsRUFBRTtRQUM5QixPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRUQsdUJBQXVCO0lBQ2hCLHlCQUFtQixHQUExQixVQUEyQixHQUFHLEVBQUUsTUFBTTtRQUNsQyxJQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDbEIsR0FBRztZQUNDLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztZQUM1RCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQzlCLFFBQVEsTUFBTSxDQUFDLE1BQU0sR0FBRyxHQUFHLEVBQUU7UUFDOUIsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUNMLFlBQUM7QUFBRCxDQXJFQSxBQXFFQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXRpbHMge1xuICAgIC8qKlxuICAgICAqIOa3seaLt+i0nVxuICAgICAqIEBleGFtcGxlXG4gICAgICogbGV0IHNyYyA9IHsgYTogMTIzLCBiOiB7IGM6IFsxLCAyLCAzXSwgZDogXCJjZXNoaVwiIH0gfTtcbiAgICAgKiBsZXQgdGFyID0gVXRpbC5kZWVwQ2xvbmUoc3JjKTtcbiAgICAgKiB0YXIuYi5jWzBdID0gMjtcbiAgICAgKiBjb25zb2xlLmxvZyhgb2JqOmAsIHRhciwgYHNyYzpgLCBzcmMpO1xuICAgICAqL1xuICAgIHN0YXRpYyBkZWVwQ2xvbmUob2JqLCBjYWNoZSA9IG5ldyBXZWFrTWFwKCkpIHtcbiAgICAgICAgLy8g5pmu6YCa57G75Z6L77yM55u05o6l6L+U5ZueXG4gICAgICAgIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0JykgcmV0dXJuIG9iajtcbiAgICAgICAgaWYgKG9iaiA9PT0gbnVsbCkgcmV0dXJuIG9iajtcblxuICAgICAgICAvLyDpmLLmraLlvqrnjq/lvJXnlKjvvIznqIvluo/ov5vlhaXmrbvlvqrnjq9cbiAgICAgICAgaWYgKGNhY2hlLmdldChvYmopKSByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gICAgICAgIGlmIChvYmogaW5zdGFuY2VvZiBEYXRlKSByZXR1cm4gbmV3IERhdGUob2JqKTtcbiAgICAgICAgaWYgKG9iaiBpbnN0YW5jZW9mIFJlZ0V4cCkgcmV0dXJuIG5ldyBSZWdFeHAob2JqKTtcblxuICAgICAgICAvLyDmib7liLDmiYDlsZ7ljp/lnovkuIrnmoRjb25zdHJ1Y3Rvcu+8jOaJgOWxnuWOn+Wei+S4iueahGNvbnN0cnVjdG9y5oyH5ZCR5b2T5YmN5a+56LGh55qE5p6E6YCg5Ye95pWwXG4gICAgICAgIGNvbnN0IGNsb25lT2JqID0gbmV3IG9iai5jb25zdHJ1Y3RvcigpO1xuICAgICAgICAvLyDnvJPlrZjmi7fotJ3nmoTlr7nosaHvvIznlKjkuo7lpITnkIblvqrnjq/lvJXnlKjnmoTmg4XlhrVcbiAgICAgICAgY2FjaGUuc2V0KG9iaiwgY2xvbmVPYmopO1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBvYmopIHtcbiAgICAgICAgICAgIGlmIChvYmpba2V5XSkge1xuICAgICAgICAgICAgICAgIGNsb25lT2JqW2tleV0gPSB0aGlzLmRlZXBDbG9uZShvYmpba2V5XSwgY2FjaGUpOyAvLyDpgJLlvZLmi7fotJ1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjbG9uZU9iajtcbiAgICB9XG5cbiAgICBzdGF0aWMgcmFuZG9tSW50SW5jbHVzaXZlKG1pbiwgbWF4KSB7XG4gICAgICAgIG1pbiA9IE1hdGguY2VpbChtaW4pO1xuICAgICAgICBtYXggPSBNYXRoLmZsb29yKG1heCk7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xuICAgIH1cblxuICAgIC8vIOWOu+mHjSAtIOmaj+acuueUn+aIkOaMh+WumuaVsOmHj+aMh+WumuWMuumXtOeahOaVsOe7hFxuICAgIHN0YXRpYyByYW5kb21JbnRBcnJGcm9tU2VjdGlvbihjbnQ6IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyW10ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgY29uc3QgdiA9IHRoaXMucmFuZG9tSW50SW5jbHVzaXZlKG1pbiwgbWF4KTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQuaW5kZXhPZih2KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaCh2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSB3aGlsZSAocmVzdWx0Lmxlbmd0aCA8IGNudCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvLyDkuI3ljrvph40gLSDpmo/mnLrnlJ/miJDmjIflrprmlbDph4/mjIflrprljLrpl7TnmoTmlbDnu4RcbiAgICBzdGF0aWMgcmFuZG9tSW50QXJySW5jbHVzaXZlKGNudCwgbWluLCBtYXgpOiBudW1iZXJbXSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgICAgICBkbyB7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh0aGlzLnJhbmRvbUludEluY2x1c2l2ZShtaW4sIG1heCkpO1xuICAgICAgICB9IHdoaWxlIChyZXN1bHQubGVuZ3RoIDwgY250KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvLyDku47nu5nlrprnmoTmlbDnu4TkuK3pmo/mnLrnlJ/miJDkuIDnu4TmjIflrprmlbDph4/nmoTmlbDnu4RcbiAgICBzdGF0aWMgcmFuZG9tSW50QXJyRnJvbUFycihjbnQsIHNyY0Fycik6IG51bWJlcltdIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5yYW5kb21JbnRJbmNsdXNpdmUoMCwgc3JjQXJyLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goc3JjQXJyW2luZGV4XSk7XG4gICAgICAgIH0gd2hpbGUgKHJlc3VsdC5sZW5ndGggPCBjbnQpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cbiJdfQ==