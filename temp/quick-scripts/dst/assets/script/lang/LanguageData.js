
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/lang/LanguageData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '49c46i7jj9HfLDrEiP0omdn', 'LanguageData');
// script/lang/LanguageData.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSceneRenderers = exports.t = exports.initSource = exports.init = exports.ready = exports._language = void 0;
exports._language = 'zh';
exports.ready = false;
/**
 * 初始化
 * @param language
 */
function init(language) {
    exports.ready = true;
    exports._language = language;
}
exports.init = init;
function initSource(language, languages) {
    init(language);
    var win = window;
    win.languages = {};
    win.languages[exports._language] = languages;
}
exports.initSource = initSource;
/**
 * 翻译数据
 * @param key
 */
function t(key, option) {
    var win = window;
    if (!win.languages) {
        return key;
    }
    var data = win.languages[exports._language];
    var result = key;
    if (!data || !data[key]) {
        return result;
    }
    result = data[key];
    if (option) {
        var regexp = /{\d}/g;
        var matchArr = result.matchAll(regexp);
        if (matchArr) {
            // const fetchArr = [...matchArr];
            var fetchArr = [];
            for (var _i = 0, matchArr_1 = matchArr; _i < matchArr_1.length; _i++) {
                var iterator = matchArr_1[_i];
                fetchArr.push(iterator);
            }
            // console.log(fetchArr,'+++++++++',matchArr);
            for (var index = 0; index < option.length; index++) {
                var element = fetchArr[index];
                if (element) {
                    result = result.replace(element[0], option[index]);
                }
            }
            return result;
        }
    }
    return result;
    // const searcher = key.split('.');
    // let data = win.languages[_language];
    // for (let i = 0; i < searcher.length; i++) {
    //     data = data[searcher[i]];
    //     if (!data) {
    //         return '';
    //     }
    // }
    // return data || '';
}
exports.t = t;
function updateSceneRenderers() {
    var rootNodes = cc.director.getScene().children;
    // walk all nodes with localize label and update
    var allLocalizedLabels = [];
    for (var i = 0; i < rootNodes.length; ++i) {
        var labels = rootNodes[i].getComponentsInChildren('LocalizedLabel');
        Array.prototype.push.apply(allLocalizedLabels, labels);
    }
    for (var i = 0; i < allLocalizedLabels.length; ++i) {
        var label = allLocalizedLabels[i];
        // if(!label.node.active)continue;
        label.updateLabel();
    }
    // walk all nodes with localize sprite and update
    var allLocalizedSprites = [];
    for (var i = 0; i < rootNodes.length; ++i) {
        var sprites = rootNodes[i].getComponentsInChildren('LocalizedSprite');
        Array.prototype.push.apply(allLocalizedSprites, sprites);
    }
    for (var i = 0; i < allLocalizedSprites.length; ++i) {
        var sprite = allLocalizedSprites[i];
        if (!sprite.node.active)
            continue;
        sprite.updateSprite();
    }
}
exports.updateSceneRenderers = updateSceneRenderers;
// 供插件查询当前语言使用
var win = window;
win.initSource = initSource;
win._languageData = {
    get language() {
        return exports._language;
    },
    init: function (lang) {
        init(lang);
    },
    updateSceneRenderers: function () {
        updateSceneRenderers();
    },
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvbGFuZy9MYW5ndWFnZURhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ1csUUFBQSxTQUFTLEdBQUcsSUFBSSxDQUFDO0FBRWpCLFFBQUEsS0FBSyxHQUFZLEtBQUssQ0FBQztBQUVsQzs7O0dBR0c7QUFDSCxTQUFnQixJQUFJLENBQUMsUUFBZ0I7SUFDakMsYUFBSyxHQUFHLElBQUksQ0FBQztJQUNiLGlCQUFTLEdBQUcsUUFBUSxDQUFDO0FBQ3pCLENBQUM7QUFIRCxvQkFHQztBQUVELFNBQWdCLFVBQVUsQ0FBQyxRQUFnQixFQUFDLFNBQWE7SUFFckQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2YsSUFBTSxHQUFHLEdBQVEsTUFBTSxDQUFDO0lBQ3hCLEdBQUcsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ25CLEdBQUcsQ0FBQyxTQUFTLENBQUMsaUJBQVMsQ0FBQyxHQUFHLFNBQVMsQ0FBQztBQUN6QyxDQUFDO0FBTkQsZ0NBTUM7QUFFRDs7O0dBR0c7QUFDSCxTQUFnQixDQUFDLENBQUMsR0FBVyxFQUFDLE1BQWtCO0lBQzVDLElBQU0sR0FBRyxHQUFRLE1BQU0sQ0FBQztJQUV4QixJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRTtRQUNoQixPQUFPLEdBQUcsQ0FBQztLQUNkO0lBRUQsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQyxpQkFBUyxDQUFDLENBQUM7SUFDcEMsSUFBSSxNQUFNLEdBQUcsR0FBRyxDQUFDO0lBQ2pCLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQ3ZCO1FBQ0ksT0FBTyxNQUFNLENBQUM7S0FDakI7SUFFRCxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRW5CLElBQUksTUFBTSxFQUNWO1FBQ0ksSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQU0s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QUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7QUFDNUIsR0FBRyxDQUFDLGFBQWEsR0FBRztJQUNoQixJQUFJLFFBQVE7UUFDUixPQUFPLGlCQUFTLENBQUM7SUFDckIsQ0FBQztJQUNELElBQUksRUFBSixVQUFLLElBQVk7UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDZixDQUFDO0lBQ0Qsb0JBQW9CO1FBQ2hCLG9CQUFvQixFQUFFLENBQUM7SUFDM0IsQ0FBQztDQUNKLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBsZXQgX2xhbmd1YWdlID0gJ3poJztcblxuZXhwb3J0IGxldCByZWFkeTogYm9vbGVhbiA9IGZhbHNlO1xuXG4vKipcbiAqIOWIneWni+WMllxuICogQHBhcmFtIGxhbmd1YWdlIFxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5pdChsYW5ndWFnZTogc3RyaW5nKSB7XG4gICAgcmVhZHkgPSB0cnVlO1xuICAgIF9sYW5ndWFnZSA9IGxhbmd1YWdlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdFNvdXJjZShsYW5ndWFnZTogc3RyaW5nLGxhbmd1YWdlczphbnkpXG57XG4gICAgaW5pdChsYW5ndWFnZSk7XG4gICAgY29uc3Qgd2luOiBhbnkgPSB3aW5kb3c7XG4gICAgd2luLmxhbmd1YWdlcyA9IHt9O1xuICAgIHdpbi5sYW5ndWFnZXNbX2xhbmd1YWdlXSA9IGxhbmd1YWdlcztcbn1cblxuLyoqXG4gKiDnv7vor5HmlbDmja5cbiAqIEBwYXJhbSBrZXkgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0KGtleTogc3RyaW5nLG9wdGlvbj86QXJyYXk8YW55Pikge1xuICAgIGNvbnN0IHdpbjogYW55ID0gd2luZG93O1xuICAgIFxuICAgIGlmICghd2luLmxhbmd1YWdlcykge1xuICAgICAgICByZXR1cm4ga2V5O1xuICAgIH1cblxuICAgIGxldCBkYXRhID0gd2luLmxhbmd1YWdlc1tfbGFuZ3VhZ2VdO1xuICAgIGxldCByZXN1bHQgPSBrZXk7XG4gICAgaWYgKCFkYXRhIHx8ICFkYXRhW2tleV0pIFxuICAgIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICByZXN1bHQgPSBkYXRhW2tleV07XG5cbiAgICBpZiAob3B0aW9uKSBcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlZ2V4cCA9IC97XFxkfS9nO1xuICAgICAgICBjb25zdCBtYXRjaEFyciA9IHJlc3VsdC5tYXRjaEFsbChyZWdleHApO1xuICAgICAgICBpZiAobWF0Y2hBcnIpIHtcbiAgICAgICAgICAgIC8vIGNvbnN0IGZldGNoQXJyID0gWy4uLm1hdGNoQXJyXTtcbiAgICAgICAgICAgIGxldCBmZXRjaEFyciA9IFtdO1xuICAgICAgICAgICAgZm9yIChjb25zdCBpdGVyYXRvciBvZiBtYXRjaEFycikgXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmV0Y2hBcnIucHVzaChpdGVyYXRvcik7ICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZmV0Y2hBcnIsJysrKysrKysrKycsbWF0Y2hBcnIpO1xuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG9wdGlvbi5sZW5ndGg7IGluZGV4KyspIFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBmZXRjaEFycltpbmRleF07XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LnJlcGxhY2UoZWxlbWVudFswXSxvcHRpb25baW5kZXhdKTsgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICAgIC8vIGNvbnN0IHNlYXJjaGVyID0ga2V5LnNwbGl0KCcuJyk7XG4gICAgXG4gICAgLy8gbGV0IGRhdGEgPSB3aW4ubGFuZ3VhZ2VzW19sYW5ndWFnZV07XG4gICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBzZWFyY2hlci5sZW5ndGg7IGkrKykge1xuICAgIC8vICAgICBkYXRhID0gZGF0YVtzZWFyY2hlcltpXV07XG4gICAgLy8gICAgIGlmICghZGF0YSkge1xuICAgIC8vICAgICAgICAgcmV0dXJuICcnO1xuICAgIC8vICAgICB9XG4gICAgLy8gfVxuICAgIC8vIHJldHVybiBkYXRhIHx8ICcnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlU2NlbmVSZW5kZXJlcnMoKSB7IC8vIHZlcnkgY29zdGx5IGl0ZXJhdGlvbnNcbiAgICBcbiAgICBjb25zdCByb290Tm9kZXMgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpIS5jaGlsZHJlbjtcbiAgICAvLyB3YWxrIGFsbCBub2RlcyB3aXRoIGxvY2FsaXplIGxhYmVsIGFuZCB1cGRhdGVcbiAgICBjb25zdCBhbGxMb2NhbGl6ZWRMYWJlbHM6IGFueVtdID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb290Tm9kZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgbGV0IGxhYmVscyA9IHJvb3ROb2Rlc1tpXS5nZXRDb21wb25lbnRzSW5DaGlsZHJlbignTG9jYWxpemVkTGFiZWwnKTtcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoYWxsTG9jYWxpemVkTGFiZWxzLCBsYWJlbHMpO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbExvY2FsaXplZExhYmVscy5sZW5ndGg7ICsraSkge1xuICAgICAgICBsZXQgbGFiZWwgPSBhbGxMb2NhbGl6ZWRMYWJlbHNbaV07XG4gICAgICAgIC8vIGlmKCFsYWJlbC5ub2RlLmFjdGl2ZSljb250aW51ZTtcbiAgICAgICAgbGFiZWwudXBkYXRlTGFiZWwoKTtcbiAgICB9XG4gICAgLy8gd2FsayBhbGwgbm9kZXMgd2l0aCBsb2NhbGl6ZSBzcHJpdGUgYW5kIHVwZGF0ZVxuICAgIGNvbnN0IGFsbExvY2FsaXplZFNwcml0ZXM6IGFueVtdID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb290Tm9kZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgbGV0IHNwcml0ZXMgPSByb290Tm9kZXNbaV0uZ2V0Q29tcG9uZW50c0luQ2hpbGRyZW4oJ0xvY2FsaXplZFNwcml0ZScpO1xuICAgICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShhbGxMb2NhbGl6ZWRTcHJpdGVzLCBzcHJpdGVzKTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxMb2NhbGl6ZWRTcHJpdGVzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGxldCBzcHJpdGUgPSBhbGxMb2NhbGl6ZWRTcHJpdGVzW2ldO1xuICAgICAgICBpZighc3ByaXRlLm5vZGUuYWN0aXZlKWNvbnRpbnVlO1xuICAgICAgICBzcHJpdGUudXBkYXRlU3ByaXRlKCk7XG4gICAgfVxufVxuLy8g5L6b5o+S5Lu25p+l6K+i5b2T5YmN6K+t6KiA5L2/55SoXG5jb25zdCB3aW4gPSB3aW5kb3cgYXMgYW55O1xud2luLmluaXRTb3VyY2UgPSBpbml0U291cmNlO1xud2luLl9sYW5ndWFnZURhdGEgPSB7XG4gICAgZ2V0IGxhbmd1YWdlKCkge1xuICAgICAgICByZXR1cm4gX2xhbmd1YWdlO1xuICAgIH0sXG4gICAgaW5pdChsYW5nOiBzdHJpbmcpIHtcbiAgICAgICAgaW5pdChsYW5nKTtcbiAgICB9LFxuICAgIHVwZGF0ZVNjZW5lUmVuZGVyZXJzKCkge1xuICAgICAgICB1cGRhdGVTY2VuZVJlbmRlcmVycygpO1xuICAgIH0sXG59O1xuIl19