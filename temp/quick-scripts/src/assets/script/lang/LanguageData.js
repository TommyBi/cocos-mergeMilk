"use strict";
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