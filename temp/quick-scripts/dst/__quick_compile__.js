
(function () {
var scripts = [{"deps":{"./assets/script/common/DataManager":34,"./assets/script/common/Global":5,"./assets/script/common/GlobalEvents":26,"./assets/script/common/PmManager":29,"./assets/script/common/SaveData":21,"./assets/script/common/SceneManager":19,"./assets/script/common/AudioManager":20,"./assets/script/common/comp/NumberAction":6,"./assets/script/common/comp/PanelBase":22,"./assets/script/common/comp/SceneLoadingUI":23,"./assets/script/common/comp/HurryLoading":25,"./assets/script/common/comp/reward/RewardUtils":3,"./assets/script/common/comp/toast/Toast":9,"./assets/script/common/consts/GlobalDefines":10,"./assets/script/common/effect/SpriteToHome":8,"./assets/script/common/effect/Jumpjump3d":27,"./assets/script/game/GameUtils":40,"./assets/script/game/common/BundleResourceList":7,"./assets/script/game/common/UIManager":35,"./assets/script/game/common/BundleResource":30,"./assets/script/game/consts/GameConsts":11,"./assets/script/game/data/SaveDataConfig":12,"./assets/script/game/data/PlayerInfo":32,"./assets/script/game/loading/LoadingScene":15,"./assets/script/game/ui/bl_Config":13,"./assets/script/game/ui/bl_Logic":31,"./assets/script/game/ui/bl_ball":33,"./assets/script/game/ui/bl_tipsPanel":37,"./assets/script/game/ui/bl_top":38,"./assets/script/game/ui/bl_txPanel":36,"./assets/script/game/ui/bl_txToggle":39,"./assets/script/game/ui/Ball_MainScene":41,"./assets/script/lang/LocalizedLabel":14,"./assets/script/lang/LocalizedSprite":42,"./assets/script/lang/LanguageData":44,"./assets/script/utils/SDKManager":16,"./assets/script/utils/Utils":47,"./assets/script/utils/logger":43,"./assets/script/utils/AniUtil":45,"./assets/script/common/Ball_Main":53,"./assets/script/merge/dataModule/PlayerModule":46,"./assets/script/merge/dataModule/DataModule":51,"./assets/script/merge/define/TypeDefine":17,"./assets/script/merge/game/Game":48,"./assets/script/merge/game/MergeScene":18,"./assets/script/merge/game/Slot":50,"./assets/script/merge/game/Coin":52,"./assets/script/merge/manager/Uimanager":24,"./assets/script/merge/manager/Define":49,"./assets/script/merge/pulicCom/TouchEffect":28,"./assets/script/merge/util/EventManager":2,"./assets/script/common/BasePanel":1,"./assets/script/merge/dataModule/GameModule":4},"path":"preview-scripts/__qc_index__.js"},{"deps":{"../utils/Utils":47,"./consts/GlobalDefines":10},"path":"preview-scripts/assets/script/common/BasePanel.js"},{"deps":{},"path":"preview-scripts/assets/script/merge/util/EventManager.js"},{"deps":{"../../../game/GameUtils":40,"../../effect/Jumpjump3d":27},"path":"preview-scripts/assets/script/common/comp/reward/RewardUtils.js"},{"deps":{"../manager/Define":49,"../util/EventManager":2,"./DataModule":51,"../util/NewUtils":54},"path":"preview-scripts/assets/script/merge/dataModule/GameModule.js"},{"deps":{},"path":"preview-scripts/assets/script/common/Global.js"},{"deps":{"../../utils/Utils":47},"path":"preview-scripts/assets/script/common/comp/NumberAction.js"},{"deps":{},"path":"preview-scripts/assets/script/game/common/BundleResourceList.js"},{"deps":{"../../game/GameUtils":40,"../../utils/Utils":47},"path":"preview-scripts/assets/script/common/effect/SpriteToHome.js"},{"deps":{},"path":"preview-scripts/assets/script/common/comp/toast/Toast.js"},{"deps":{},"path":"preview-scripts/assets/script/common/consts/GlobalDefines.js"},{"deps":{},"path":"preview-scripts/assets/script/game/consts/GameConsts.js"},{"deps":{},"path":"preview-scripts/assets/script/game/data/SaveDataConfig.js"},{"deps":{},"path":"preview-scripts/assets/script/game/ui/bl_Config.js"},{"deps":{"./LanguageData":44},"path":"preview-scripts/assets/script/lang/LocalizedLabel.js"},{"deps":{"../../common/comp/SceneLoadingUI":23,"../../common/consts/GlobalDefines":10,"../../common/Ball_Main":53,"../../common/SceneManager":19,"../ui/Ball_MainScene":41},"path":"preview-scripts/assets/script/game/loading/LoadingScene.js"},{"deps":{"../common/Ball_Main":53,"../game/GameUtils":40,"../game/ui/bl_Config":13},"path":"preview-scripts/assets/script/utils/SDKManager.js"},{"deps":{},"path":"preview-scripts/assets/script/merge/define/TypeDefine.js"},{"deps":{"../dataModule/PlayerModule":46,"../define/TypeDefine":17,"../manager/Uimanager":24},"path":"preview-scripts/assets/script/merge/game/MergeScene.js"},{"deps":{"../game/common/UIManager":35,"../utils/logger":43,"../utils/Utils":47,"./comp/SceneLoadingUI":23,"./Global":5,"./GlobalEvents":26},"path":"preview-scripts/assets/script/common/SceneManager.js"},{"deps":{"../utils/logger":43},"path":"preview-scripts/assets/script/common/AudioManager.js"},{"deps":{"../utils/Utils":47,"./Global":5,"./GlobalEvents":26,"./PmManager":29},"path":"preview-scripts/assets/script/common/SaveData.js"},{"deps":{"../../utils/logger":43,"../../utils/Utils":47,"../Global":5},"path":"preview-scripts/assets/script/common/comp/PanelBase.js"},{"deps":{"../../game/GameUtils":40,"../../utils/logger":43,"../../utils/Utils":47,"./NumberAction":6},"path":"preview-scripts/assets/script/common/comp/SceneLoadingUI.js"},{"deps":{"../define/TypeDefine":17},"path":"preview-scripts/assets/script/merge/manager/Uimanager.js"},{"deps":{},"path":"preview-scripts/assets/script/common/comp/HurryLoading.js"},{"deps":{},"path":"preview-scripts/assets/script/common/GlobalEvents.js"},{"deps":{"../../game/GameUtils":40,"../../utils/Utils":47,"../Global":5},"path":"preview-scripts/assets/script/common/effect/Jumpjump3d.js"},{"deps":{},"path":"preview-scripts/assets/script/merge/pulicCom/TouchEffect.js"},{"deps":{},"path":"preview-scripts/assets/script/common/PmManager.js"},{"deps":{},"path":"preview-scripts/assets/script/game/common/BundleResource.js"},{"deps":{"../../utils/Utils":47,"../../common/DataManager":34,"../../common/consts/GlobalDefines":10,"./bl_ball":33,"../../common/Global":5,"../../common/GlobalEvents":26,"../../utils/logger":43,"./bl_Config":13,"./bl_tipsPanel":37,"../../common/comp/reward/RewardUtils":3},"path":"preview-scripts/assets/script/game/ui/bl_Logic.js"},{"deps":{"../../common/SaveData":21,"./SaveDataConfig":12},"path":"preview-scripts/assets/script/game/data/PlayerInfo.js"},{"deps":{"../../common/Global":5,"../../common/GlobalEvents":26,"../../utils/Utils":47,"../GameUtils":40},"path":"preview-scripts/assets/script/game/ui/bl_ball.js"},{"deps":{"../game/data/PlayerInfo":32},"path":"preview-scripts/assets/script/common/DataManager.js"},{"deps":{"../../common/comp/PanelBase":22,"../../common/consts/GlobalDefines":10,"../../utils/logger":43,"../../utils/Utils":47},"path":"preview-scripts/assets/script/game/common/UIManager.js"},{"deps":{"../../common/comp/PanelBase":22,"../GameUtils":40},"path":"preview-scripts/assets/script/game/ui/bl_txPanel.js"},{"deps":{"../../common/Global":5,"../../common/GlobalEvents":26,"../../common/comp/PanelBase":22,"../GameUtils":40,"./bl_Config":13},"path":"preview-scripts/assets/script/game/ui/bl_tipsPanel.js"},{"deps":{"../../common/Global":5,"../../common/GlobalEvents":26,"./bl_txPanel":36},"path":"preview-scripts/assets/script/game/ui/bl_top.js"},{"deps":{"./bl_Config":13},"path":"preview-scripts/assets/script/game/ui/bl_txToggle.js"},{"deps":{"../common/AudioManager":20,"../common/comp/toast/Toast":9,"../common/Ball_Main":53,"../utils/Utils":47,"./common/UIManager":35},"path":"preview-scripts/assets/script/game/GameUtils.js"},{"deps":{"../../common/AudioManager":20,"../../common/SceneManager":19,"./bl_Config":13,"./bl_Logic":31,"./bl_top":38},"path":"preview-scripts/assets/script/game/ui/Ball_MainScene.js"},{"deps":{"./LanguageData":44},"path":"preview-scripts/assets/script/lang/LocalizedSprite.js"},{"deps":{},"path":"preview-scripts/assets/script/utils/logger.js"},{"deps":{},"path":"preview-scripts/assets/script/lang/LanguageData.js"},{"deps":{"../common/effect/SpriteToHome":8,"../game/common/UIManager":35,"../game/GameUtils":40,"./Utils":47},"path":"preview-scripts/assets/script/utils/AniUtil.js"},{"deps":{"./DataModule":51},"path":"preview-scripts/assets/script/merge/dataModule/PlayerModule.js"},{"deps":{"../common/consts/GlobalDefines":10,"./logger":43},"path":"preview-scripts/assets/script/utils/Utils.js"},{"deps":{"../dataModule/GameModule":4,"../manager/Define":49,"../manager/Uimanager":24,"../util/EventManager":2,"./Slot":50},"path":"preview-scripts/assets/script/merge/game/Game.js"},{"deps":{},"path":"preview-scripts/assets/script/merge/manager/Define.js"},{"deps":{"../dataModule/GameModule":4,"../manager/Define":49,"../manager/Uimanager":24,"../util/EventManager":2,"./Coin":52},"path":"preview-scripts/assets/script/merge/game/Slot.js"},{"deps":{},"path":"preview-scripts/assets/script/merge/dataModule/DataModule.js"},{"deps":{},"path":"preview-scripts/assets/script/merge/game/Coin.js"},{"deps":{"../game/ui/bl_Config":13,"../game/common/BundleResourceList":7,"../game/common/UIManager":35,"../game/loading/LoadingScene":15,"../lang/LanguageData":44,"../utils/SDKManager":16,"../utils/Utils":47,"./AudioManager":20,"./comp/HurryLoading":25,"./comp/SceneLoadingUI":23,"./consts/GlobalDefines":10,"./DataManager":34,"./SceneManager":19},"path":"preview-scripts/assets/script/common/Ball_Main.js"},{"deps":{},"path":"preview-scripts/assets/script/merge/util/NewUtils.js"}];
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
    