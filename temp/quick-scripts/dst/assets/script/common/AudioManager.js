
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvY29tbW9uL0F1ZGlvTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwQ0FBeUM7QUFFekM7SUFHSTtRQUdRLGFBQVEsR0FBRyxFQUVsQixDQUFDO1FBQ00sYUFBUSxHQUFDLEVBQUUsQ0FBQztRQUlaLGNBQVMsR0FBUSxJQUFJLENBQUE7UUFDckIsY0FBUyxHQUFRLElBQUksQ0FBQTtRQUNyQixlQUFVLEdBQVEsSUFBSSxDQUFBO1FBRXRCLGNBQVMsR0FBUSxJQUFJLENBQUM7UUFDdEIsZ0JBQVcsR0FBWSxJQUFJLENBQUM7UUFDNUIsZ0JBQVcsR0FBWSxJQUFJLENBQUMsQ0FBQSxvQkFBb0I7SUFmeEQsQ0FBQztJQWlCRCxzQkFBVyxvQ0FBVTthQUdyQjtZQUNJLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUM1QixDQUFDO2FBTEQsVUFBc0IsS0FBYztZQUNoQyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUM3QixDQUFDOzs7T0FBQTtJQUtELHNCQUFXLG9DQUFVO2FBR3JCO1lBQ0ksT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzVCLENBQUM7YUFMRCxVQUFzQixPQUFnQjtZQUNsQyxJQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQztRQUMvQixDQUFDOzs7T0FBQTtJQUtELDJCQUFJLEdBQUo7UUFDSSxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBRXRCLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFckIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJ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QUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELCtCQUFRLEdBQVI7UUFDSSxlQUFNLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDaEMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRUQsZ0NBQVMsR0FBVDtRQUNJLGVBQU0sQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNoQyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFRCw4QkFBTyxHQUFQO1FBQ0ksRUFBRSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsNEJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUF0TWEscUJBQVEsR0FBaUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQXVNOUQsbUJBQUM7Q0F4TUQsQUF3TUMsSUFBQTtrQkF4TW9CLFlBQVk7QUF5TXBCLFFBQUEsRUFBRSxHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiLi4vdXRpbHMvbG9nZ2VyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1ZGlvTWFuYWdlciB7XG4gICAgcHVibGljIHN0YXRpYyBJbnN0YW5jZTogQXVkaW9NYW5hZ2VyID0gbmV3IEF1ZGlvTWFuYWdlcigpO1xuXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHsgICAgICAgXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzb3VuZExpYiA9IHtcblxuICAgIH07XG4gICAgcHJpdmF0ZSBhdWRpb0lkcz17fTtcblxuICAgIHByaXZhdGUgaGFzU2hvd0lPU1dlYk1hc2s6IG51bGxcblxuICAgIHByaXZhdGUgYmdtVm9sdW1lOiBhbnkgPSBudWxsXG4gICAgcHJpdmF0ZSBzZnhWb2x1bWU6IGFueSA9IG51bGxcbiAgICBwcml2YXRlIGJnbUF1ZGlvSUQ6IGFueSA9IG51bGxcblxuICAgIHByaXZhdGUgY3VyQkdNVXJsOiBhbnkgPSBudWxsO1xuICAgIHByaXZhdGUgX2JnbUVuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHByaXZhdGUgX3NmeEVuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlOy8vIUdhbWVDb25maWcuREVCVUc7XG5cbiAgICBwdWJsaWMgc2V0IHNmeEVuYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5fc2Z4RW5hYmxlZCA9IHZhbHVlO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IHNmeEVuYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZnhFbmFibGVkO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgYmdtRW5hYmxlZChlbmFibGVkOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2JnbUVuYWJsZWQgPSBlbmFibGVkO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGJnbUVuYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9iZ21FbmFibGVkO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIGNjLmxvZyhcImF1ZGlvIGluaXRcIik7XG4gICAgICAgIHRoaXMuY3VyQkdNVXJsID0gbnVsbDtcblxuICAgICAgICB0aGlzLmJnbVZvbHVtZSA9IDAuMjtcbiAgICAgICAgdGhpcy5zZnhWb2x1bWUgPSAxLjA7XG4gICAgICAgIHRoaXMuYmdtQXVkaW9JRCA9IC0xO1xuXG4gICAgICAgIHRoaXMuX2JnbUVuYWJsZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLl9zZnhFbmFibGVkID0gdHJ1ZTtcblxuXG5cbiAgICB9XG5cbiAgICAvLyDpn7PkuZBcbiAgICBwdWJsaWMgcGxheUJHTSh1cmwsIGZvcmNlKSB7XG4gICAgICAgIC8vIOWmguaenOW3sue7j+aSreaUvuedgOWwseS4jeaSreaUvuS6hlxuICAgICAgICBpZiAodGhpcy5jdXJCR01VcmwgJiYgdGhpcy5jdXJCR01VcmwgPT0gdXJsICYmIHRoaXMuYmdtQXVkaW9JRCAmJiAhZm9yY2UpIHJldHVybjtcblxuICAgICAgICB0aGlzLmN1ckJHTVVybCA9IHVybDtcbiAgICAgICAgaWYgKHRoaXMuX2JnbUVuYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcEJHTSgpO1xuICAgICAgICAgICAgLy9jYy51cmwucmF3KHVybClcbiAgICAgICAgICAgIGNjLnJlc291cmNlcy5sb2FkKHVybCwgZnVuY3Rpb24gKGVyciwgY2xpcCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1ckJHTVVybCA9PSB1cmwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEFsbCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJnbUF1ZGlvSUQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5KGNsaXAsIHRydWUsIHRoaXMuYmdtVm9sdW1lKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaSreaUvuiDjOaZr+mfs+S5kOWksei0pTpcIiwgZXJyKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RvcEJHTSgpIHtcbiAgICAgICAgaWYgKHRoaXMuYmdtQXVkaW9JRCA+PSAwKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wKHRoaXMuYmdtQXVkaW9JRCk7XG4gICAgICAgICAgICB0aGlzLmJnbUF1ZGlvSUQgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5ZCM5q2l5Yqg6L295aOw6Z+z6LWE5rqQXG4gICAgICogQHBhcmFtIHVybCBcbiAgICAgKi9cbiAgICBhc3luYyBwcmVsb2FkQXVkaW9DbGlwKHNvdW5kTmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGlmICghdGhpcy5fc2Z4RW5hYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjYy5yZXNvdXJjZXMucHJlbG9hZChgc291bmRzLyR7c291bmROYW1lfWAsY2MuQXVkaW9DbGlwKVxuICAgIH1cblxuICAgIC8vIOmfs+aViFxuICAgIHB1YmxpYyBwbGF5U0ZYKHVybDogc3RyaW5nLCBzZnhWb2x1bWU6IGFueSA9IHRoaXMuc2Z4Vm9sdW1lLGV4dDpzdHJpbmcgPSBcIi5tcDNcIiwgbG9vcDogYm9vbGVhbiA9IGZhbHNlLCBpc0Zyb21OZXQ6IGJvb2xlYW4gPSBmYWxzZSxvblN0YXJ0PzpGdW5jdGlvbikge1xuICAgICAgICBpZiAodGhpcy5fc2Z4RW5hYmxlZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc291bmRMaWJbYCR7dXJsfWBdKSB7XG4gICAgICAgICAgICAgICAgLy8gTG9nZ2VyLmRlYnVnKFwiW0F1ZGlvTWFuYWdlciBwbGF5U0ZYXSBcIiwgdXJsKTtcbiAgICAgICAgICAgICAgICBjb25zdCBhdWRpb0lkID0gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kTGliW2Ake3VybH1gXSwgbG9vcCwgc2Z4Vm9sdW1lKTtcbiAgICAgICAgICAgICAgICBvblN0YXJ0ICYmIG9uU3RhcnQoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzRnJvbU5ldCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXVybC5zdGFydHNXaXRoKFwiaHR0cHM6Ly9cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU3RhcnQgJiYgb25TdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkUmVtb3RlKHVybCwgeyBleHQ6IGV4dCB9LCAoZXJyLCBjbGlwOiBjYy5BdWRpb0NsaXApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTG9nZ2VyLmRlYnVnKFwiW0F1ZGlvTWFuYWdlciBwbGF5U0ZYXSBcIiwgdXJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhdWRpb0lkID0gY2MuYXVkaW9FbmdpbmUucGxheShjbGlwLCBsb29wLCBzZnhWb2x1bWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXVkaW9JZHNbdXJsXSA9IGF1ZGlvSWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZ2dlci5kZWJ1ZyhlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25TdGFydCAmJiBvblN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNjLnJlc291cmNlcy5sb2FkKHVybCwgKChlcnIsIGNsaXA6IGNjLkF1ZGlvQ2xpcCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBMb2dnZXIuZGVidWcoXCJbQXVkaW9NYW5hZ2VyIHBsYXlTRlhdIFwiLCB1cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGF1ZGlvSWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5KGNsaXAsIGxvb3AsIHNmeFZvbHVtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zb3VuZExpYltgJHt1cmx9YF0gPSBjbGlwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXVkaW9JZHNbdXJsXSA9IGF1ZGlvSWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZ2dlci5kZWJ1ZyhlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25TdGFydCAmJiBvblN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgb25TdGFydCAmJiBvblN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIHN0b3BTZnhCeVVybCh1cmwpe1xuICAgICAgICBsZXQgYXVkaW9JZCA9IHRoaXMuYXVkaW9JZHNbdXJsXTtcbiAgICAgICAgaWYgKGF1ZGlvSWQgIT0gbnVsbCkge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcChhdWRpb0lkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzdG9wU0ZYKGF1ZGlvSWQpIHtcbiAgICAgICAgTG9nZ2VyLmRlYnVnKFwiYXVkaW9JZFwiLCBhdWRpb0lkKVxuICAgICAgICBpZiAoYXVkaW9JZCAhPSBudWxsKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wKGF1ZGlvSWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy9jaGFuZ2VcbiAgICBwdWJsaWMgZ2V0U0ZYRW5hYmxlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2Z4RW5hYmxlZDtcbiAgICB9XG5cblxuICAgIHB1YmxpYyBnZXRCR01FbmFibGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5iZ21FbmFibGVkO1xuICAgIH1cblxuICAgIC8vIOaaguWBnFxuICAgIHB1YmxpYyBwYXVzZUJHTSgpIHtcbiAgICAgICAgaWYgKHRoaXMuYmdtQXVkaW9JRCA+PSAwKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wYXVzZSh0aGlzLmJnbUF1ZGlvSUQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8g5oGi5aSNXG4gICAgcHVibGljIHJlc3VtZUJHTSgpIHtcbiAgICAgICAgaWYgKHRoaXMuYmdtQXVkaW9JRCA+PSAwKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5yZXN1bWUodGhpcy5iZ21BdWRpb0lEKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIOWNuOi9vemfs+aViFxuICAgIHVuY2FjaGUodXJsKSB7XG4gICAgICAgIGNvbnN0IGF1ZGlvVXJsOiBhbnkgPSBjYy51cmwucmF3KHVybCk7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnVuY2FjaGUoYXVkaW9VcmwpO1xuICAgICAgICB0aGlzLnNvdW5kTGliW2Ake3VybH1gXSA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICB1bmNhY2hlQWxsKCkge1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS51bmNhY2hlQWxsKCk7XG4gICAgICAgIHRoaXMuc291bmRMaWIgPSB7fTtcbiAgICB9XG5cbiAgICBwYXVzZUFsbCgpIHtcbiAgICAgICAgTG9nZ2VyLmRlYnVnKCdQYXVzZSBBbGwgU291bmQnKTtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGF1c2VBbGwoKTtcbiAgICB9XG5cbiAgICByZXN1bWVBbGwoKSB7XG4gICAgICAgIExvZ2dlci5kZWJ1ZygnUmVzdW0gQWxsIFNvdW5kJyk7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnJlc3VtZUFsbCgpO1xuICAgIH1cblxuICAgIHN0b3BBbGwoKSB7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGwoKTtcbiAgICB9XG5cbiAgICBjbGVhbigpIHtcbiAgICAgICAgdGhpcy5zdG9wQWxsKCk7XG4gICAgICAgIHRoaXMudW5jYWNoZUFsbCgpO1xuICAgICAgICB0aGlzLmN1ckJHTVVybCA9IG51bGw7XG4gICAgICAgIHRoaXMuYmdtQXVkaW9JRCA9IC0xO1xuICAgIH1cbn1cbmV4cG9ydCBjb25zdCBzZCA9IEF1ZGlvTWFuYWdlci5JbnN0YW5jZTsiXX0=