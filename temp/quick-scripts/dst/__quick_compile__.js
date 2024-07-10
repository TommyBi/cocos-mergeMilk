
(function () {
var scripts = [{"deps":{"./assets/script/common/DataManager":4,"./assets/script/common/Global":24,"./assets/script/common/GlobalEvents":29,"./assets/script/common/PmManager":17,"./assets/script/common/SaveData":16,"./assets/script/common/SceneManager":26,"./assets/script/common/AudioManager":19,"./assets/script/common/comp/NumberAction":5,"./assets/script/common/comp/PanelBase":20,"./assets/script/common/comp/SceneLoadingUI":21,"./assets/script/common/comp/HurryLoading":23,"./assets/script/common/comp/reward/RewardUtils":1,"./assets/script/common/comp/toast/Toast":6,"./assets/script/common/consts/GlobalDefines":10,"./assets/script/common/effect/SpriteToHome":8,"./assets/script/common/effect/Jumpjump3d":39,"./assets/script/game/GameUtils":32,"./assets/script/game/common/BundleResourceList":25,"./assets/script/game/common/UIManager":2,"./assets/script/game/common/BundleResource":28,"./assets/script/game/consts/GameConsts":9,"./assets/script/game/data/SaveDataConfig":37,"./assets/script/game/data/PlayerInfo":7,"./assets/script/game/loading/LoadingScene":12,"./assets/script/game/ui/bl_Config":11,"./assets/script/game/ui/bl_Logic":36,"./assets/script/game/ui/bl_ball":47,"./assets/script/game/ui/bl_tipsPanel":30,"./assets/script/game/ui/bl_top":35,"./assets/script/game/ui/bl_txPanel":34,"./assets/script/game/ui/bl_txToggle":33,"./assets/script/game/ui/Ball_MainScene":42,"./assets/script/lang/LocalizedLabel":31,"./assets/script/lang/LocalizedSprite":45,"./assets/script/lang/LanguageData":41,"./assets/script/utils/SDKManager":38,"./assets/script/utils/Utils":13,"./assets/script/utils/logger":44,"./assets/script/utils/AniUtil":43,"./assets/script/common/Ball_Main":40,"./assets/script/merge/dataModule/PlayerModule":3,"./assets/script/merge/dataModule/DataModule":52,"./assets/script/merge/define/TypeDefine":15,"./assets/script/merge/game/Game":51,"./assets/script/merge/game/MergeScene":14,"./assets/script/merge/game/Slot":54,"./assets/script/merge/game/Coin":50,"./assets/script/merge/manager/Uimanager":46,"./assets/script/merge/manager/Define":27,"./assets/script/merge/pulicCom/TouchEffect":18,"./assets/script/merge/util/Utils":22,"./assets/script/merge/util/EventManager":48,"./assets/script/merge/dataModule/GameModule":49,"./assets/script/common/BasePanel":53},"path":"preview-scripts/__qc_index__.js"},{"deps":{"../../../game/GameUtils":32,"../../effect/Jumpjump3d":39},"path":"preview-scripts/assets/script/common/comp/reward/RewardUtils.js"},{"deps":{"../../common/comp/PanelBase":20,"../../common/consts/GlobalDefines":10,"../../utils/logger":44,"../../utils/Utils":13},"path":"preview-scripts/assets/script/game/common/UIManager.js"},{"deps":{"./DataModule":52},"path":"preview-scripts/assets/script/merge/dataModule/PlayerModule.js"},{"deps":{"../game/data/PlayerInfo":7},"path":"preview-scripts/assets/script/common/DataManager.js"},{"deps":{"../../utils/Utils":13},"path":"preview-scripts/assets/script/common/comp/NumberAction.js"},{"deps":{},"path":"preview-scripts/assets/script/common/comp/toast/Toast.js"},{"deps":{"../../common/SaveData":16,"./SaveDataConfig":37},"path":"preview-scripts/assets/script/game/data/PlayerInfo.js"},{"deps":{"../../game/GameUtils":32,"../../utils/Utils":13},"path":"preview-scripts/assets/script/common/effect/SpriteToHome.js"},{"deps":{},"path":"preview-scripts/assets/script/game/consts/GameConsts.js"},{"deps":{},"path":"preview-scripts/assets/script/common/consts/GlobalDefines.js"},{"deps":{},"path":"preview-scripts/assets/script/game/ui/bl_Config.js"},{"deps":{"../../common/comp/SceneLoadingUI":21,"../../common/consts/GlobalDefines":10,"../../common/Ball_Main":40,"../../common/SceneManager":26,"../ui/Ball_MainScene":42},"path":"preview-scripts/assets/script/game/loading/LoadingScene.js"},{"deps":{"../common/consts/GlobalDefines":10,"./logger":44},"path":"preview-scripts/assets/script/utils/Utils.js"},{"deps":{"../dataModule/PlayerModule":3,"../define/TypeDefine":15,"../manager/Uimanager":46},"path":"preview-scripts/assets/script/merge/game/MergeScene.js"},{"deps":{},"path":"preview-scripts/assets/script/merge/define/TypeDefine.js"},{"deps":{"../utils/Utils":13,"./Global":24,"./GlobalEvents":29,"./PmManager":17},"path":"preview-scripts/assets/script/common/SaveData.js"},{"deps":{},"path":"preview-scripts/assets/script/common/PmManager.js"},{"deps":{},"path":"preview-scripts/assets/script/merge/pulicCom/TouchEffect.js"},{"deps":{"../utils/logger":44},"path":"preview-scripts/assets/script/common/AudioManager.js"},{"deps":{"../../utils/logger":44,"../../utils/Utils":13,"../Global":24},"path":"preview-scripts/assets/script/common/comp/PanelBase.js"},{"deps":{"../../game/GameUtils":32,"../../utils/logger":44,"../../utils/Utils":13,"./NumberAction":5},"path":"preview-scripts/assets/script/common/comp/SceneLoadingUI.js"},{"deps":{},"path":"preview-scripts/assets/script/merge/util/Utils.js"},{"deps":{},"path":"preview-scripts/assets/script/common/comp/HurryLoading.js"},{"deps":{},"path":"preview-scripts/assets/script/common/Global.js"},{"deps":{},"path":"preview-scripts/assets/script/game/common/BundleResourceList.js"},{"deps":{"../game/common/UIManager":2,"../utils/logger":44,"../utils/Utils":13,"./comp/SceneLoadingUI":21,"./Global":24,"./GlobalEvents":29},"path":"preview-scripts/assets/script/common/SceneManager.js"},{"deps":{},"path":"preview-scripts/assets/script/merge/manager/Define.js"},{"deps":{},"path":"preview-scripts/assets/script/game/common/BundleResource.js"},{"deps":{},"path":"preview-scripts/assets/script/common/GlobalEvents.js"},{"deps":{"../../common/Global":24,"../../common/GlobalEvents":29,"../../common/comp/PanelBase":20,"../GameUtils":32,"./bl_Config":11},"path":"preview-scripts/assets/script/game/ui/bl_tipsPanel.js"},{"deps":{"./LanguageData":41},"path":"preview-scripts/assets/script/lang/LocalizedLabel.js"},{"deps":{"../common/AudioManager":19,"../common/comp/toast/Toast":6,"../common/Ball_Main":40,"../utils/Utils":13,"./common/UIManager":2},"path":"preview-scripts/assets/script/game/GameUtils.js"},{"deps":{"./bl_Config":11},"path":"preview-scripts/assets/script/game/ui/bl_txToggle.js"},{"deps":{"../../common/comp/PanelBase":20,"../GameUtils":32},"path":"preview-scripts/assets/script/game/ui/bl_txPanel.js"},{"deps":{"../../common/Global":24,"../../common/GlobalEvents":29,"./bl_txPanel":34},"path":"preview-scripts/assets/script/game/ui/bl_top.js"},{"deps":{"../../utils/Utils":13,"../../common/DataManager":4,"../../common/consts/GlobalDefines":10,"./bl_ball":47,"../../common/Global":24,"../../common/GlobalEvents":29,"../../utils/logger":44,"./bl_Config":11,"./bl_tipsPanel":30,"../../common/comp/reward/RewardUtils":1},"path":"preview-scripts/assets/script/game/ui/bl_Logic.js"},{"deps":{},"path":"preview-scripts/assets/script/game/data/SaveDataConfig.js"},{"deps":{"../common/Ball_Main":40,"../game/GameUtils":32,"../game/ui/bl_Config":11},"path":"preview-scripts/assets/script/utils/SDKManager.js"},{"deps":{"../../game/GameUtils":32,"../../utils/Utils":13,"../Global":24},"path":"preview-scripts/assets/script/common/effect/Jumpjump3d.js"},{"deps":{"../game/ui/bl_Config":11,"../game/common/BundleResourceList":25,"../game/common/UIManager":2,"../game/loading/LoadingScene":12,"../lang/LanguageData":41,"../utils/SDKManager":38,"../utils/Utils":13,"./AudioManager":19,"./comp/HurryLoading":23,"./comp/SceneLoadingUI":21,"./consts/GlobalDefines":10,"./DataManager":4,"./SceneManager":26},"path":"preview-scripts/assets/script/common/Ball_Main.js"},{"deps":{},"path":"preview-scripts/assets/script/lang/LanguageData.js"},{"deps":{"../../common/AudioManager":19,"../../common/SceneManager":26,"./bl_Config":11,"./bl_Logic":36,"./bl_top":35},"path":"preview-scripts/assets/script/game/ui/Ball_MainScene.js"},{"deps":{"../common/effect/SpriteToHome":8,"../game/common/UIManager":2,"../game/GameUtils":32,"./Utils":13},"path":"preview-scripts/assets/script/utils/AniUtil.js"},{"deps":{},"path":"preview-scripts/assets/script/utils/logger.js"},{"deps":{"./LanguageData":41},"path":"preview-scripts/assets/script/lang/LocalizedSprite.js"},{"deps":{"../define/TypeDefine":15},"path":"preview-scripts/assets/script/merge/manager/Uimanager.js"},{"deps":{"../../common/Global":24,"../../common/GlobalEvents":29,"../../utils/Utils":13,"../GameUtils":32},"path":"preview-scripts/assets/script/game/ui/bl_ball.js"},{"deps":{},"path":"preview-scripts/assets/script/merge/util/EventManager.js"},{"deps":{"./DataModule":52,"../manager/Define":27,"../util/Utils":22,"../util/EventManager":48},"path":"preview-scripts/assets/script/merge/dataModule/GameModule.js"},{"deps":{},"path":"preview-scripts/assets/script/merge/game/Coin.js"},{"deps":{"./Slot":54,"../dataModule/GameModule":49,"../manager/Uimanager":46,"../manager/Define":27,"../util/EventManager":48},"path":"preview-scripts/assets/script/merge/game/Game.js"},{"deps":{},"path":"preview-scripts/assets/script/merge/dataModule/DataModule.js"},{"deps":{"../utils/Utils":13,"./consts/GlobalDefines":10},"path":"preview-scripts/assets/script/common/BasePanel.js"},{"deps":{"./Coin":50,"../dataModule/GameModule":49,"../manager/Uimanager":46,"../manager/Define":27,"../util/EventManager":48},"path":"preview-scripts/assets/script/merge/game/Slot.js"}];
var entries = ["preview-scripts/__qc_index__.js"];
var bundleScript = 'preview-scripts/__qc_bundle__.js';

/**
 * Notice: This file can not use ES6 (for IE 11)
 */
var modules = {};
var name2path = {};

// Will generated by module.js plugin
// var scripts = ${scripts};
// var entries = ${entries};
// var bundleScript = ${bundleScript};

if (typeof global === 'undefined') {
    window.global = window;
}

var isJSB = typeof jsb !== 'undefined';

function getXMLHttpRequest () {
    return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject('MSXML2.XMLHTTP');
}

function downloadText(url, callback) {
    if (isJSB) {
        var result = jsb.fileUtils.getStringFromFile(url);
        callback(null, result);
        return;
    }

    var xhr = getXMLHttpRequest(),
        errInfo = 'Load text file failed: ' + url;
    xhr.open('GET', url, true);
    if (xhr.overrideMimeType) xhr.overrideMimeType('text\/plain; charset=utf-8');
    xhr.onload = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
                callback(null, xhr.responseText);
            }
            else {
                callback({status:xhr.status, errorMessage:errInfo + ', status: ' + xhr.status});
            }
        }
        else {
            callback({status:xhr.status, errorMessage:errInfo + '(wrong readyState)'});
        }
    };
    xhr.onerror = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(error)'});
    };
    xhr.ontimeout = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(time out)'});
    };
    xhr.send(null);
};

function loadScript (src, cb) {
    if (typeof require !== 'undefined') {
        require(src);
        return cb();
    }

    // var timer = 'load ' + src;
    // console.time(timer);

    var scriptElement = document.createElement('script');

    function done() {
        // console.timeEnd(timer);
        // deallocation immediate whatever
        scriptElement.remove();
    }

    scriptElement.onload = function () {
        done();
        cb();
    };
    scriptElement.onerror = function () {
        done();
        var error = 'Failed to load ' + src;
        console.error(error);
        cb(new Error(error));
    };
    scriptElement.setAttribute('type','text/javascript');
    scriptElement.setAttribute('charset', 'utf-8');
    scriptElement.setAttribute('src', src);

    document.head.appendChild(scriptElement);
}

function loadScripts (srcs, cb) {
    var n = srcs.length;

    srcs.forEach(function (src) {
        loadScript(src, function () {
            n--;
            if (n === 0) {
                cb();
            }
        });
    })
}

function formatPath (path) {
    let destPath = window.__quick_compile_project__.destPath;
    if (destPath) {
        let prefix = 'preview-scripts';
        if (destPath[destPath.length - 1] === '/') {
            prefix += '/';
        }
        path = path.replace(prefix, destPath);
    }
    return path;
}

window.__quick_compile_project__ = {
    destPath: '',

    registerModule: function (path, module) {
        path = formatPath(path);
        modules[path].module = module;
    },

    registerModuleFunc: function (path, func) {
        path = formatPath(path);
        modules[path].func = func;

        var sections = path.split('/');
        var name = sections[sections.length - 1];
        name = name.replace(/\.(?:js|ts|json)$/i, '');
        name2path[name] = path;
    },

    require: function (request, path) {
        var m, requestScript;

        path = formatPath(path);
        if (path) {
            m = modules[path];
            if (!m) {
                console.warn('Can not find module for path : ' + path);
                return null;
            }
        }

        if (m) {
            let depIndex = m.deps[request];
            // dependence script was excluded
            if (depIndex === -1) {
                return null;
            }
            else {
                requestScript = scripts[ m.deps[request] ];
            }
        }
        
        let requestPath = '';
        if (!requestScript) {
            // search from name2path when request is a dynamic module name
            if (/^[\w- .]*$/.test(request)) {
                requestPath = name2path[request];
            }

            if (!requestPath) {
                if (CC_JSB) {
                    return require(request);
                }
                else {
                    console.warn('Can not find deps [' + request + '] for path : ' + path);
                    return null;
                }
            }
        }
        else {
            requestPath = formatPath(requestScript.path);
        }

        let requestModule = modules[requestPath];
        if (!requestModule) {
            console.warn('Can not find request module for path : ' + requestPath);
            return null;
        }

        if (!requestModule.module && requestModule.func) {
            requestModule.func();
        }

        if (!requestModule.module) {
            console.warn('Can not find requestModule.module for path : ' + path);
            return null;
        }

        return requestModule.module.exports;
    },

    run: function () {
        entries.forEach(function (entry) {
            entry = formatPath(entry);
            var module = modules[entry];
            if (!module.module) {
                module.func();
            }
        });
    },

    load: function (cb) {
        var self = this;

        var srcs = scripts.map(function (script) {
            var path = formatPath(script.path);
            modules[path] = script;

            if (script.mtime) {
                path += ("?mtime=" + script.mtime);
            }
            return path;
        });

        console.time && console.time('load __quick_compile_project__');
        // jsb can not analysis sourcemap, so keep separate files.
        if (bundleScript && !isJSB) {
            downloadText(formatPath(bundleScript), function (err, bundleSource) {
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                if (err) {
                    console.error(err);
                    return;
                }

                let evalTime = 'eval __quick_compile_project__ : ' + srcs.length + ' files';
                console.time && console.time(evalTime);
                var sources = bundleSource.split('\n//------QC-SOURCE-SPLIT------\n');
                for (var i = 0; i < sources.length; i++) {
                    if (sources[i]) {
                        window.eval(sources[i]);
                        // not sure why new Function cannot set breakpoints precisely
                        // new Function(sources[i])()
                    }
                }
                self.run();
                console.timeEnd && console.timeEnd(evalTime);
                cb();
            })
        }
        else {
            loadScripts(srcs, function () {
                self.run();
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                cb();
            });
        }
    }
};

// Polyfill for IE 11
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
})();
    