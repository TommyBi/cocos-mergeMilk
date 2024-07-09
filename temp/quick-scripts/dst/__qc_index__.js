
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/script/common/AudioManager');
require('./assets/script/common/Ball_Main');
require('./assets/script/common/BasePanel');
require('./assets/script/common/DataManager');
require('./assets/script/common/Global');
require('./assets/script/common/GlobalEvents');
require('./assets/script/common/PmManager');
require('./assets/script/common/SaveData');
require('./assets/script/common/SceneManager');
require('./assets/script/common/comp/HurryLoading');
require('./assets/script/common/comp/NumberAction');
require('./assets/script/common/comp/PanelBase');
require('./assets/script/common/comp/SceneLoadingUI');
require('./assets/script/common/comp/reward/RewardUtils');
require('./assets/script/common/comp/toast/Toast');
require('./assets/script/common/consts/GlobalDefines');
require('./assets/script/common/effect/Jumpjump3d');
require('./assets/script/common/effect/SpriteToHome');
require('./assets/script/game/GameUtils');
require('./assets/script/game/common/BundleResource');
require('./assets/script/game/common/BundleResourceList');
require('./assets/script/game/common/UIManager');
require('./assets/script/game/consts/GameConsts');
require('./assets/script/game/data/PlayerInfo');
require('./assets/script/game/data/SaveDataConfig');
require('./assets/script/game/loading/LoadingScene');
require('./assets/script/game/ui/Ball_MainScene');
require('./assets/script/game/ui/bl_Config');
require('./assets/script/game/ui/bl_Logic');
require('./assets/script/game/ui/bl_ball');
require('./assets/script/game/ui/bl_tipsPanel');
require('./assets/script/game/ui/bl_top');
require('./assets/script/game/ui/bl_txPanel');
require('./assets/script/game/ui/bl_txToggle');
require('./assets/script/lang/LanguageData');
require('./assets/script/lang/LocalizedLabel');
require('./assets/script/lang/LocalizedSprite');
require('./assets/script/merge/dataModule/DataModule');
require('./assets/script/merge/dataModule/GameModule');
require('./assets/script/merge/dataModule/PlayerModule');
require('./assets/script/merge/define/TypeDefine');
require('./assets/script/merge/game/Coin');
require('./assets/script/merge/game/Game');
require('./assets/script/merge/game/MergeScene');
require('./assets/script/merge/game/Slot');
require('./assets/script/merge/manager/Define');
require('./assets/script/merge/manager/Uimanager');
require('./assets/script/merge/pulicCom/TouchEffect');
require('./assets/script/merge/util/EventManager');
require('./assets/script/merge/util/Utils');
require('./assets/script/utils/AniUtil');
require('./assets/script/utils/SDKManager');
require('./assets/script/utils/Utils');
require('./assets/script/utils/logger');

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