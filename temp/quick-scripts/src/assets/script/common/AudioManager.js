"use strict";
cc._RF.push(module, 'a4aafbJat5JYKLldpFrdTPc', 'AudioManager');
// script/common/AudioManager.ts

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sd = void 0;
var logger_1 = require("../utils/logger");
var AudioManager = /** @class */ (function () {
    function AudioManager() {
        this.soundLib = {};
        this.audioIds = {};
        this.bgmVolume = null;
        this.sfxVolume = null;
        this.bgmAudioID = null;
        this.curBGMUrl = null;
        this._bgmEnabled = true;
        this._sfxEnabled = true; //!GameConfig.DEBUG;
    }
    Object.defineProperty(AudioManager.prototype, "sfxEnabled", {
        get: function () {
            return this._sfxEnabled;
        },
        set: function (value) {
            this._sfxEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AudioManager.prototype, "bgmEnabled", {
        get: function () {
            return this._bgmEnabled;
        },
        set: function (enabled) {
            this._bgmEnabled = enabled;
        },
        enumerable: false,
        configurable: true
    });
    AudioManager.prototype.init = function () {
        cc.log("audio init");
        this.curBGMUrl = null;
        this.bgmVolume = 0.2;
        this.sfxVolume = 1.0;
        this.bgmAudioID = -1;
        this._bgmEnabled = true;
        this._sfxEnabled = true;
    };
    // 音乐
    AudioManager.prototype.playBGM = function (url, force) {
        // 如果已经播放着就不播放了
        if (this.curBGMUrl && this.curBGMUrl == url && this.bgmAudioID && !force)
            return;
        this.curBGMUrl = url;
        if (this._bgmEnabled) {
            this.stopBGM();
            //cc.url.raw(url)
            cc.resources.load(url, function (err, clip) {
                if (this.curBGMUrl == url) {
                    cc.audioEngine.stopAll();
                    this.bgmAudioID = cc.audioEngine.play(clip, true, this.bgmVolume);
                }
                else {
                    console.log("播放背景音乐失败:", err);
                }
            }.bind(this));
        }
    };
    AudioManager.prototype.stopBGM = function () {
        if (this.bgmAudioID >= 0) {
            cc.audioEngine.stop(this.bgmAudioID);
            this.bgmAudioID = null;
        }
    };
    /**
     * 同步加载声音资源
     * @param url
     */
    AudioManager.prototype.preloadAudioClip = function (soundName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!this._sfxEnabled) {
                    return [2 /*return*/];
                }
                cc.resources.preload("sounds/" + soundName, cc.AudioClip);
                return [2 /*return*/];
            });
        });
    };
    // 音效
    AudioManager.prototype.playSFX = function (url, sfxVolume, ext, loop, isFromNet, onStart) {
        var _this = this;
        if (sfxVolume === void 0) { sfxVolume = this.sfxVolume; }
        if (ext === void 0) { ext = ".mp3"; }
        if (loop === void 0) { loop = false; }
        if (isFromNet === void 0) { isFromNet = false; }
        if (this._sfxEnabled) {
            if (this.soundLib["" + url]) {
                // Logger.debug("[AudioManager playSFX] ", url);
                var audioId = cc.audioEngine.play(this.soundLib["" + url], loop, sfxVolume);
                onStart && onStart();
            }
            else {
                if (isFromNet) {
                    if (!url.startsWith("https://")) {
                        onStart && onStart();
                        return;
                    }
                    cc.assetManager.loadRemote(url, { ext: ext }, function (err, clip) {
                        if (!err) {
                            // Logger.debug("[AudioManager playSFX] ", url);
                            var audioId = cc.audioEngine.play(clip, loop, sfxVolume);
                            _this.audioIds[url] = audioId;
                        }
                        else {
                            logger_1.Logger.debug(err);
                        }
                        onStart && onStart();
                    });
                }
                else {
                    cc.resources.load(url, (function (err, clip) {
                        if (!err) {
                            // Logger.debug("[AudioManager playSFX] ", url);
                            var audioId = cc.audioEngine.play(clip, loop, sfxVolume);
                            _this.soundLib["" + url] = clip;
                            _this.audioIds[url] = audioId;
                        }
                        else {
                            logger_1.Logger.debug(err);
                        }
                        onStart && onStart();
                    }));
                }
            }
        }
        else {
            onStart && onStart();
        }
    };
    AudioManager.prototype.stopSfxByUrl = function (url) {
        var audioId = this.audioIds[url];
        if (audioId != null) {
            cc.audioEngine.stop(audioId);
        }
    };
    AudioManager.prototype.stopSFX = function (audioId) {
        logger_1.Logger.debug("audioId", audioId);
        if (audioId != null) {
            cc.audioEngine.stop(audioId);
        }
    };
    //change
    AudioManager.prototype.getSFXEnabled = function () {
        return this.sfxEnabled;
    };
    AudioManager.prototype.getBGMEnabled = function () {
        return this.bgmEnabled;
    };
    // 暂停
    AudioManager.prototype.pauseBGM = function () {
        if (this.bgmAudioID >= 0) {
            cc.audioEngine.pause(this.bgmAudioID);
        }
    };
    // 恢复
    AudioManager.prototype.resumeBGM = function () {
        if (this.bgmAudioID >= 0) {
            cc.audioEngine.resume(this.bgmAudioID);
        }
    };
    // 卸载音效
    AudioManager.prototype.uncache = function (url) {
        var audioUrl = cc.url.raw(url);
        cc.audioEngine.uncache(audioUrl);
        this.soundLib["" + url] = undefined;
    };
    AudioManager.prototype.uncacheAll = function () {
        cc.audioEngine.uncacheAll();
        this.soundLib = {};
    };
    AudioManager.prototype.pauseAll = function () {
        logger_1.Logger.debug('Pause All Sound');
        cc.audioEngine.pauseAll();
    };
    AudioManager.prototype.resumeAll = function () {
        logger_1.Logger.debug('Resum All Sound');
        cc.audioEngine.resumeAll();
    };
    AudioManager.prototype.stopAll = function () {
        cc.audioEngine.stopAll();
    };
    AudioManager.prototype.clean = function () {
        this.stopAll();
        this.uncacheAll();
        this.curBGMUrl = null;
        this.bgmAudioID = -1;
    };
    AudioManager.Instance = new AudioManager();
    return AudioManager;
}());
exports.default = AudioManager;
exports.sd = AudioManager.Instance;

cc._RF.pop();