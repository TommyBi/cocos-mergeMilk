
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/common/AudioManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvY29tbW9uL0F1ZGlvTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwQ0FBeUM7QUFFekM7SUFHSTtRQUdRLGFBQVEsR0FBRyxFQUVsQixDQUFDO1FBQ00sYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUlkLGNBQVMsR0FBUSxJQUFJLENBQUE7UUFDckIsY0FBUyxHQUFRLElBQUksQ0FBQTtRQUNyQixlQUFVLEdBQVEsSUFBSSxDQUFBO1FBRXRCLGNBQVMsR0FBUSxJQUFJLENBQUM7UUFDdEIsZ0JBQVcsR0FBWSxJQUFJLENBQUM7UUFDNUIsZ0JBQVcsR0FBWSxJQUFJLENBQUMsQ0FBQSxvQkFBb0I7SUFmeEQsQ0FBQztJQWlCRCxzQkFBVyxvQ0FBVTthQUdyQjtZQUNJLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUM1QixDQUFDO2FBTEQsVUFBc0IsS0FBYztZQUNoQyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUM3QixDQUFDOzs7T0FBQTtJQUtELHNCQUFXLG9DQUFVO2FBR3JCO1lBQ0ksT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzVCLENBQUM7YUFMRCxVQUFzQixPQUFnQjtZQUNsQyxJQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQztRQUMvQixDQUFDOzs7T0FBQTtJQUtELDJCQUFJLEdBQUo7UUFDSSxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBRXRCLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFckIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJ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QUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELCtCQUFRLEdBQVI7UUFDSSxlQUFNLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDaEMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRUQsZ0NBQVMsR0FBVDtRQUNJLGVBQU0sQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNoQyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFRCw4QkFBTyxHQUFQO1FBQ0ksRUFBRSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsNEJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUF0TWEscUJBQVEsR0FBaUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQXVNOUQsbUJBQUM7Q0F4TUQsQUF3TUMsSUFBQTtrQkF4TW9CLFlBQVk7QUF5TXBCLFFBQUEsRUFBRSxHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiLi4vdXRpbHMvbG9nZ2VyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1ZGlvTWFuYWdlciB7XG4gICAgcHVibGljIHN0YXRpYyBJbnN0YW5jZTogQXVkaW9NYW5hZ2VyID0gbmV3IEF1ZGlvTWFuYWdlcigpO1xuXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNvdW5kTGliID0ge1xuXG4gICAgfTtcbiAgICBwcml2YXRlIGF1ZGlvSWRzID0ge307XG5cbiAgICBwcml2YXRlIGhhc1Nob3dJT1NXZWJNYXNrOiBudWxsXG5cbiAgICBwcml2YXRlIGJnbVZvbHVtZTogYW55ID0gbnVsbFxuICAgIHByaXZhdGUgc2Z4Vm9sdW1lOiBhbnkgPSBudWxsXG4gICAgcHJpdmF0ZSBiZ21BdWRpb0lEOiBhbnkgPSBudWxsXG5cbiAgICBwcml2YXRlIGN1ckJHTVVybDogYW55ID0gbnVsbDtcbiAgICBwcml2YXRlIF9iZ21FbmFibGVkOiBib29sZWFuID0gdHJ1ZTtcbiAgICBwcml2YXRlIF9zZnhFbmFibGVkOiBib29sZWFuID0gdHJ1ZTsvLyFHYW1lQ29uZmlnLkRFQlVHO1xuXG4gICAgcHVibGljIHNldCBzZnhFbmFibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX3NmeEVuYWJsZWQgPSB2YWx1ZTtcbiAgICB9XG4gICAgcHVibGljIGdldCBzZnhFbmFibGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2Z4RW5hYmxlZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGJnbUVuYWJsZWQoZW5hYmxlZDogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9iZ21FbmFibGVkID0gZW5hYmxlZDtcbiAgICB9XG4gICAgcHVibGljIGdldCBiZ21FbmFibGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fYmdtRW5hYmxlZDtcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICBjYy5sb2coXCJhdWRpbyBpbml0XCIpO1xuICAgICAgICB0aGlzLmN1ckJHTVVybCA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5iZ21Wb2x1bWUgPSAwLjI7XG4gICAgICAgIHRoaXMuc2Z4Vm9sdW1lID0gMS4wO1xuICAgICAgICB0aGlzLmJnbUF1ZGlvSUQgPSAtMTtcblxuICAgICAgICB0aGlzLl9iZ21FbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fc2Z4RW5hYmxlZCA9IHRydWU7XG5cblxuXG4gICAgfVxuXG4gICAgLy8g6Z+z5LmQXG4gICAgcHVibGljIHBsYXlCR00odXJsLCBmb3JjZSkge1xuICAgICAgICAvLyDlpoLmnpzlt7Lnu4/mkq3mlL7nnYDlsLHkuI3mkq3mlL7kuoZcbiAgICAgICAgaWYgKHRoaXMuY3VyQkdNVXJsICYmIHRoaXMuY3VyQkdNVXJsID09IHVybCAmJiB0aGlzLmJnbUF1ZGlvSUQgJiYgIWZvcmNlKSByZXR1cm47XG5cbiAgICAgICAgdGhpcy5jdXJCR01VcmwgPSB1cmw7XG4gICAgICAgIGlmICh0aGlzLl9iZ21FbmFibGVkKSB7XG4gICAgICAgICAgICB0aGlzLnN0b3BCR00oKTtcbiAgICAgICAgICAgIC8vY2MudXJsLnJhdyh1cmwpXG4gICAgICAgICAgICBjYy5yZXNvdXJjZXMubG9hZCh1cmwsIGZ1bmN0aW9uIChlcnIsIGNsaXApIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJCR01VcmwgPT0gdXJsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGwoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iZ21BdWRpb0lEID0gY2MuYXVkaW9FbmdpbmUucGxheShjbGlwLCB0cnVlLCB0aGlzLmJnbVZvbHVtZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmkq3mlL7og4zmma/pn7PkuZDlpLHotKU6XCIsIGVycilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHN0b3BCR00oKSB7XG4gICAgICAgIGlmICh0aGlzLmJnbUF1ZGlvSUQgPj0gMCkge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcCh0aGlzLmJnbUF1ZGlvSUQpO1xuICAgICAgICAgICAgdGhpcy5iZ21BdWRpb0lEID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWQjOatpeWKoOi9veWjsOmfs+i1hOa6kFxuICAgICAqIEBwYXJhbSB1cmwgXG4gICAgICovXG4gICAgYXN5bmMgcHJlbG9hZEF1ZGlvQ2xpcChzb3VuZE5hbWU6IHN0cmluZykge1xuICAgICAgICBpZiAoIXRoaXMuX3NmeEVuYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNjLnJlc291cmNlcy5wcmVsb2FkKGBzb3VuZHMvJHtzb3VuZE5hbWV9YCwgY2MuQXVkaW9DbGlwKVxuICAgIH1cblxuICAgIC8vIOmfs+aViFxuICAgIHB1YmxpYyBwbGF5U0ZYKHVybDogc3RyaW5nLCBzZnhWb2x1bWU6IGFueSA9IHRoaXMuc2Z4Vm9sdW1lLCBleHQ6IHN0cmluZyA9IFwiLm1wM1wiLCBsb29wOiBib29sZWFuID0gZmFsc2UsIGlzRnJvbU5ldDogYm9vbGVhbiA9IGZhbHNlLCBvblN0YXJ0PzogRnVuY3Rpb24pIHtcbiAgICAgICAgaWYgKHRoaXMuX3NmeEVuYWJsZWQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNvdW5kTGliW2Ake3VybH1gXSkge1xuICAgICAgICAgICAgICAgIC8vIExvZ2dlci5kZWJ1ZyhcIltBdWRpb01hbmFnZXIgcGxheVNGWF0gXCIsIHVybCk7XG4gICAgICAgICAgICAgICAgY29uc3QgYXVkaW9JZCA9IGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZExpYltgJHt1cmx9YF0sIGxvb3AsIHNmeFZvbHVtZSk7XG4gICAgICAgICAgICAgICAgb25TdGFydCAmJiBvblN0YXJ0KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChpc0Zyb21OZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF1cmwuc3RhcnRzV2l0aChcImh0dHBzOi8vXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvblN0YXJ0ICYmIG9uU3RhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYy5hc3NldE1hbmFnZXIubG9hZFJlbW90ZSh1cmwsIHsgZXh0OiBleHQgfSwgKGVyciwgY2xpcDogY2MuQXVkaW9DbGlwKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIExvZ2dlci5kZWJ1ZyhcIltBdWRpb01hbmFnZXIgcGxheVNGWF0gXCIsIHVybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXVkaW9JZCA9IGNjLmF1ZGlvRW5naW5lLnBsYXkoY2xpcCwgbG9vcCwgc2Z4Vm9sdW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmF1ZGlvSWRzW3VybF0gPSBhdWRpb0lkO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2dnZXIuZGVidWcoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU3RhcnQgJiYgb25TdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjYy5yZXNvdXJjZXMubG9hZCh1cmwsICgoZXJyLCBjbGlwOiBjYy5BdWRpb0NsaXApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTG9nZ2VyLmRlYnVnKFwiW0F1ZGlvTWFuYWdlciBwbGF5U0ZYXSBcIiwgdXJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhdWRpb0lkID0gY2MuYXVkaW9FbmdpbmUucGxheShjbGlwLCBsb29wLCBzZnhWb2x1bWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc291bmRMaWJbYCR7dXJsfWBdID0gY2xpcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmF1ZGlvSWRzW3VybF0gPSBhdWRpb0lkO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2dnZXIuZGVidWcoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU3RhcnQgJiYgb25TdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb25TdGFydCAmJiBvblN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIHN0b3BTZnhCeVVybCh1cmwpIHtcbiAgICAgICAgbGV0IGF1ZGlvSWQgPSB0aGlzLmF1ZGlvSWRzW3VybF07XG4gICAgICAgIGlmIChhdWRpb0lkICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3AoYXVkaW9JZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RvcFNGWChhdWRpb0lkKSB7XG4gICAgICAgIExvZ2dlci5kZWJ1ZyhcImF1ZGlvSWRcIiwgYXVkaW9JZClcbiAgICAgICAgaWYgKGF1ZGlvSWQgIT0gbnVsbCkge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcChhdWRpb0lkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vY2hhbmdlXG4gICAgcHVibGljIGdldFNGWEVuYWJsZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNmeEVuYWJsZWQ7XG4gICAgfVxuXG5cbiAgICBwdWJsaWMgZ2V0QkdNRW5hYmxlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmdtRW5hYmxlZDtcbiAgICB9XG5cbiAgICAvLyDmmoLlgZxcbiAgICBwdWJsaWMgcGF1c2VCR00oKSB7XG4gICAgICAgIGlmICh0aGlzLmJnbUF1ZGlvSUQgPj0gMCkge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGF1c2UodGhpcy5iZ21BdWRpb0lEKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIOaBouWkjVxuICAgIHB1YmxpYyByZXN1bWVCR00oKSB7XG4gICAgICAgIGlmICh0aGlzLmJnbUF1ZGlvSUQgPj0gMCkge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucmVzdW1lKHRoaXMuYmdtQXVkaW9JRCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDljbjovb3pn7PmlYhcbiAgICB1bmNhY2hlKHVybCkge1xuICAgICAgICBjb25zdCBhdWRpb1VybDogYW55ID0gY2MudXJsLnJhdyh1cmwpO1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS51bmNhY2hlKGF1ZGlvVXJsKTtcbiAgICAgICAgdGhpcy5zb3VuZExpYltgJHt1cmx9YF0gPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgdW5jYWNoZUFsbCgpIHtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUudW5jYWNoZUFsbCgpO1xuICAgICAgICB0aGlzLnNvdW5kTGliID0ge307XG4gICAgfVxuXG4gICAgcGF1c2VBbGwoKSB7XG4gICAgICAgIExvZ2dlci5kZWJ1ZygnUGF1c2UgQWxsIFNvdW5kJyk7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBhdXNlQWxsKCk7XG4gICAgfVxuXG4gICAgcmVzdW1lQWxsKCkge1xuICAgICAgICBMb2dnZXIuZGVidWcoJ1Jlc3VtIEFsbCBTb3VuZCcpO1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5yZXN1bWVBbGwoKTtcbiAgICB9XG5cbiAgICBzdG9wQWxsKCkge1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsKCk7XG4gICAgfVxuXG4gICAgY2xlYW4oKSB7XG4gICAgICAgIHRoaXMuc3RvcEFsbCgpO1xuICAgICAgICB0aGlzLnVuY2FjaGVBbGwoKTtcbiAgICAgICAgdGhpcy5jdXJCR01VcmwgPSBudWxsO1xuICAgICAgICB0aGlzLmJnbUF1ZGlvSUQgPSAtMTtcbiAgICB9XG59XG5leHBvcnQgY29uc3Qgc2QgPSBBdWRpb01hbmFnZXIuSW5zdGFuY2U7Il19