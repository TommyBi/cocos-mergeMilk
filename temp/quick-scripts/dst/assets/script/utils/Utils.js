
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/utils/Utils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0b537WzEsNMpqZojXSEjccf', 'Utils');
// script/utils/Utils.ts

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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
var GlobalDefines_1 = require("../common/consts/GlobalDefines");
var logger_1 = require("./logger");
var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.sleep = function (thisObj, duration) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        setTimeout(function () {
                            _this.invokeCallback(resolve);
                        }, thisObj, duration);
                    }).catch(function (reason) { })];
            });
        });
    };
    Utils.invokeCallback = function (cb) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        if (cb && typeof (cb) === 'function') {
            cb.apply(null, optionalParams);
        }
    };
    Utils.safeCallFunc = function (fn, thisObj) {
        if (fn && typeof fn === 'function') {
            fn.apply(thisObj);
        }
    };
    // Returns a random integer between min (included) and max (excluded)
    Utils.randomInt = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };
    // Returns a random integer between min (included) and max (included)
    Utils.randomIntInclusive = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    Utils.randomFloat = function (min, max) {
        return Math.random() * (max - min) + min;
    };
    Utils.randomByList = function (rateList) {
        rateList.map(function (value, index, array) { return (array[index] = ~~array[index - 1] + value); });
        var r = this.randomIntInclusive(1, rateList[rateList.length - 1]);
        for (var i = rateList.length - 1; i >= 0; i--) {
            var cur = rateList[i];
            var last = ~~rateList[i - 1];
            if (last < r && r <= cur) {
                return i;
            }
        }
        return -1;
    };
    // 获得数组内的随机值
    Utils.getRandomByArr = function (arr) {
        var index = this.randomInt(0, arr.length);
        return arr[index];
    };
    Utils.modByLimit = function (num, limit) {
        return (num - 1) % limit + 1;
    };
    Utils.isNullOrEmpty = function (str) {
        return !str || str == '' || str == 'null';
    };
    Utils.qrSceneOption = function (data) {
        if (!data) {
            return {};
        }
        var scene = decodeURIComponent(data);
        var option = {};
        for (var _i = 0, _a = scene.split('&'); _i < _a.length; _i++) {
            var t = _a[_i];
            var l = t.split('=');
            option[l[0]] = l[1];
        }
        return option;
    };
    Utils.formatTimeExt = function (sec, showHour) {
        if (showHour === void 0) { showHour = false; }
        if (~~sec <= 0) {
            return showHour ? '00时00分00秒' : '00分00秒';
        }
        var hour = Math.floor(sec / 3600).toString();
        var second = Math.floor(sec % 3600 % 60).toString();
        var minute = showHour ? Math.floor(sec % 3600 / 60) : Math.floor(sec / 60).toString();
        if (showHour) {
            var arr_1 = [hour, minute, second].map(function (n) { return (("" + n)[1] ? n : "0" + n); });
            return arr_1[0] + "\u65F6" + arr_1[1] + "\u5206" + arr_1[2] + "\u79D2";
        }
        var arr = [minute, second].map(function (n) { return (("" + n)[1] ? n : "0" + n); });
        return arr[0] + "\u5206" + arr[1] + "\u79D2";
    };
    Utils.formatMilTime = function (time) {
        if (time > 0) {
            var tmp = Math.ceil(time * 1000);
            return Math.floor(tmp / 1000) + "\u2033" + tmp % 1000;
        }
        return '0″000';
    };
    Utils.formatTime = function (sec, showHour) {
        if (showHour === void 0) { showHour = false; }
        if (~~sec <= 0) {
            return showHour ? '00:00:00' : '00:00';
        }
        var hour = Math.floor(sec / 3600).toString();
        var second = Math.floor(sec % 3600 % 60).toString();
        var minute = showHour ? Math.floor(sec % 3600 / 60) : Math.floor(sec / 60).toString();
        if (showHour) {
            return [hour, minute, second].map(function (n) { return (("" + n)[1] ? n : "0" + n); }).join(':');
        }
        return [minute, second].map(function (n) { return (("" + n)[1] ? n : "0" + n); }).join(':');
    };
    Utils.formatTime_Date = function (sec, showYear) {
        var d = new Date(sec * 1000);
        // Logger.debug("-------", sec, d);
        var month = (d.getMonth() + 1).toString();
        // Logger.debug("--", month);
        var date = d.getDate();
        // Logger.debug("--", date);
        if (showYear) {
            var year = d.getFullYear().toString();
            return [year, month, date].map(function (n) { return (("" + n)[1] ? n : "0" + n); }).join('.');
        }
        return [month, date].map(function (n) { return (("" + n)[1] ? n : "0" + n); }).join('.');
    };
    Utils.getWeekNumberNow = function (ss) {
        var now = new Date(ss);
        return this.getWeekNumber(now);
    };
    Utils.getWeekNumber = function (d) {
        // Copy date so don't modify original
        d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
        /*
         * Set to nearest Thursday: current date + 4 - current day number
         * Make Sunday's day number 7
         */
        d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
        // Get first day of year
        var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
        // Calculate full weeks to nearest Thursday
        var weekNo = Math.ceil((((d.getTime() - yearStart.getTime()) / 86400000) + 1) / 7);
        // Return array of year and week number
        return weekNo;
    };
    Utils.getMonthM = function (y, m) {
        if (m == 4 || m == 6 || m == 9 || m == 11)
            return 30;
        if (m == 2)
            return (y % 4 == 0 && y % 100 != 0) || y % 400 == 0 ? 29 : 28;
        return 31;
    };
    /**
     * 当前本地时间戳
     */
    Utils.getTimestamp = function () {
        return (new Date()).getTime();
    };
    /**
     *时间字任串传换成秒
     * timeStr:string "2020,8,27,0,0" 年，月，日，时，分
     */
    Utils.getOSSTime = function (timeStr) {
        if (this.isEmpty(timeStr)) {
            return 0;
        }
        var arr = timeStr.split(',');
        var date = new Date(parseInt(arr[0]), parseInt(arr[1]) - 1, parseInt(arr[2]), parseInt(arr[3]), parseInt(arr[4]), 0);
        var time = Math.floor(date.getTime() / 1000);
        return time;
    };
    Utils.solveString = function (str, len) {
        if (!str) {
            return '';
        }
        var currentlen = 0;
        var currentStr = '';
        for (var i = 0; i < str.length; i++) {
            if (str.charCodeAt(i) > 127 || str.charCodeAt(i) == 94) {
                currentlen += 2;
            }
            else {
                currentlen++;
            }
            if (currentlen > len) {
                return currentStr + "...";
            }
            currentStr += str.charAt(i);
        }
        return currentStr;
    };
    // 获取中英文混合字符串长度
    Utils.mixedStrLen = function (str) {
        var strLen = 0;
        for (var i = 0; i < str.length; i++) {
            if (str.substr(i, 1).charCodeAt(0) > 255) {
                strLen += 2;
            }
            else {
                strLen++;
            }
        }
        return strLen;
    };
    Utils.angleToRadian = function (angle) {
        return angle * Math.PI / 180;
    };
    Utils.updateNodeSpriteFrame = function (url, node, isFromNet, next, ext) {
        if (isFromNet === void 0) { isFromNet = false; }
        if (next === void 0) { next = undefined; }
        if (ext === void 0) { ext = 'png'; }
        if (Utils.isNullOrEmpty(url)) {
            return;
        }
        if (isFromNet) {
            if (!url.startsWith('https://')) {
                return;
            }
            cc.assetManager.loadRemote(url, { ext: "." + ext }, function (err, texture) {
                if (err) {
                    console.error('[Utils updateNodeSpriteFrame isFromNet] url:', url, '/err:', err);
                    return;
                }
                if (!cc.isValid(node)) {
                    return;
                }
                logger_1.Logger.debug('[Utils updateNodeSpriteFrame] texture:', texture);
                var spriteFrame = new cc.SpriteFrame(texture);
                var spr = node.getComponent(cc.Sprite);
                if (spr) {
                    spr.spriteFrame = spriteFrame;
                }
                if (!!next) {
                    next(spriteFrame);
                }
            });
        }
        else {
            cc.resources.load(url, cc.SpriteFrame, (function (err, spriteFrame) {
                if (err) {
                    console.error('[Utils updateNodeSpriteFrame isNotFromNet] url:', url, '/err:');
                    return;
                }
                if (!cc.isValid(node)) {
                    return;
                }
                var spr = node.getComponent(cc.Sprite);
                if (spr) {
                    spr.spriteFrame = spriteFrame;
                }
                if (!!next) {
                    next(spriteFrame);
                }
            }));
        }
    };
    /**
     * 远程加载spine
     * 注：约定spine资源文件与所在文件夹名字统一
     */
    Utils.loadSpine = function (url, node, success, fail) {
        // let url = `${GameConfig.OSS_URL_BASE}${folder}/${name}`;
        cc.assetManager.loadRemote(url + ".json", function (err, jsonAsset) {
            if (err) {
                fail && fail('加载json失败');
                return;
            }
            logger_1.Logger.debug('[加载Json] date:', (new Date()).getTime());
            cc.assetManager.loadRemote(url + ".atlas", function (err, textAsset) {
                if (err) {
                    fail && fail('加载atlas失败');
                    return;
                }
                logger_1.Logger.debug('[加载atlas] date:', (new Date()).getTime());
                cc.assetManager.loadRemote(url + ".png", function (err, texture2D) {
                    if (err) {
                        fail && fail('加载png失败');
                        return;
                    }
                    logger_1.Logger.debug('[加载png] date:', (new Date()).getTime());
                    var res = { skeletonJson: jsonAsset.json, atlasText: textAsset.text, textures: [texture2D], uuid: url + ".json", textureNames: [name + ".png"] };
                    success && success(res);
                });
            });
        });
    };
    Utils.updateSpineRes = function (name, node, res) {
        var skeleton = node.getComponent(sp.Skeleton); //
        if (!skeleton) {
            skeleton = node.addComponent('sp.Skeleton');
        }
        var asset = new sp.SkeletonData();
        asset['_uuid'] = res.uuid;
        asset.skeletonJson = res.skeletonJson;
        asset.atlasText = res.atlasText;
        asset.textures = res.textures;
        asset['textureNames'] = res.textureNames;
        skeleton.skeletonData = asset;
        skeleton.setAnimation(0, name, true);
    };
    Utils.secondsToClock = function (seconds) {
        seconds = Number(seconds);
        var secs = seconds % 60;
        var mins = (seconds - secs) / 60;
        var hours = Math.floor(mins / 60);
        if (hours > 0) {
            mins %= 60;
        }
        return (hours > 9 ? hours : "0" + hours) + ":" + (mins > 9 ? mins : "0" + mins) + ":" + (secs > 9 ? secs : "0" + secs);
    };
    Utils.isEmpty = function (v) { return v == undefined || v == '' || v == null; };
    Utils.loadSimpleBone = function (folder, name, next) {
        var path = "bones/" + folder + "/";
        var resources = [
            path + name + "_ske",
            path + name + "_atlas",
            path + name + "_tex",
        ];
        cc.resources.load(resources, function (err, assets) {
            if (err) {
                logger_1.Logger.debug('[Utils loadSimpleBone] 加载失败:', folder, '/', name);
                return;
            }
            next(assets[0], assets[1]);
        });
    };
    /**
     * 加载主角龙骨资源
     * @param name
     * @param isHomeCourt 是否主场
     */
    Utils.loadPlayerBone = function (name, isHomeCourt, success, fail) {
        var path = 'bones/finn/';
        var resources = [
            path + name + (isHomeCourt ? '_ske' : '_pk_ske'),
            path + name + (isHomeCourt ? '_atlas' : '_pk_atlas'),
            path + name + (isHomeCourt ? '_tex' : '_pk_tex'),
        ];
        cc.resources.load(resources, function (err, assets) {
            if (err) {
                logger_1.Logger.debug('[Utils loadSimpleBone] 加载失败:', name);
                fail && fail("\u52A0\u8F7D\u5931\u8D25 " + name);
                return;
            }
            success(assets[0], assets[1], assets[2]);
        });
    };
    Utils.releaseRes = function (asset) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                cc.assetManager.releaseAsset(asset);
                return [2 /*return*/];
            });
        });
    };
    /**
     * 预制件加载
     * @param path
     */
    Utils.loadPefab = function (path, needRelease) {
        if (needRelease === void 0) { needRelease = false; }
        return __awaiter(this, void 0, Promise, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var load;
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    load = function () { return __awaiter(_this, void 0, void 0, function () {
                                        return __generator(this, function (_a) {
                                            return [2 /*return*/, new Promise(function (rsv, rjt) {
                                                    var tot = setTimeout(function () {
                                                        logger_1.Logger.debug("[Utils oadPefab] " + path + "\u52A0\u8F7D\u8D85\u65F6");
                                                        rjt("oadPefab \u8FDE\u63A5\u8D85\u65F6" + path);
                                                    }, 10000);
                                                    cc.resources.load(path, function (err, res) {
                                                        clearTimeout(tot);
                                                        if (err) {
                                                            rjt(err);
                                                        }
                                                        else {
                                                            rsv(res);
                                                        }
                                                    });
                                                })];
                                        });
                                    }); };
                                    return [4 /*yield*/, load().then(function (res) {
                                            // }
                                            resolve(res);
                                        })
                                            .catch(function (err) {
                                            reject(err);
                                        })];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    /**
     * 工具方法：同步读取json文件 返回JS对像
     * @param fileName
     */
    Utils.loadConfigFromAli = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                /*
                 * baseUrl = baseUrl || GameConfig.OSS_URL_BASE;
                 * let url = `${baseUrl}` + fileName + ".json?" + Math.random();
                 */
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        cc.assetManager.loadRemote(url, function (err, jsonAsset) {
                            if (err) {
                                logger_1.Logger.debug("[DataManager loadConfig[" + url + "]] err:", err);
                                reject("\u52A0\u8F7D\u5931\u8D25" + url);
                                return;
                            }
                            resolve(jsonAsset.json);
                        });
                    })];
            });
        });
    };
    /**
     * 判断给定字符串是否可转换为数字
     * 如果给定参数为null undefine 则视其为0
     * @param str
     */
    Utils.isNum = function (value) {
        if (value === '0' || value === undefined || value === null) {
            return true;
        }
        var n = Number(value);
        if (!isNaN(n)) {
            return true;
        }
        return false;
    };
    // 获取时间戳 秒
    Utils.getCurTime = function () {
        return Math.floor(this.getCurMillisecond() / 1000);
    };
    Utils.getCurMillisecond = function () {
        return (new Date()).getTime();
    };
    Utils.getymd = function (sec) {
        var d = new Date(sec * 1000);
        var month = (d.getMonth() + 1);
        var date = d.getDate();
        var year = d.getFullYear();
        var hour = d.getHours();
        var minute = d.getMinutes();
        var second = d.getSeconds();
        var milliseconds = d.getMilliseconds();
        return { year: year, month: month, date: date, hour: hour, minute: minute, second: second, milliseconds: milliseconds };
    };
    Utils.isToday = function (sec) {
        var curTime = this.getCurTime();
        var inputParm = Utils.getymd(sec);
        var curParm = Utils.getymd(curTime);
        if (inputParm.year != curParm.year) {
            return false;
        }
        if (inputParm.month != curParm.month) {
            return false;
        }
        if (inputParm.date != curParm.date) {
            return false;
        }
        return true;
    };
    /*
     * static getDayBeginTime(sec: number) {
     *     let parm = Utils.getymd(sec);
     *     let tmpDate = new Date();
     *     tmpDate.setFullYear(parm.year);
     *     tmpDate.setMonth(parm.month - 1);
     *     tmpDate.setDate(parm.date);
     *     tmpDate.setHours(0);
     *     tmpDate.setSeconds(0);
     *     tmpDate.setMinutes(0);
     *     tmpDate.setMilliseconds(0);
     *     return tmpDate.getTime() / 1000;
     * }
     */
    Utils.getDayBeginTime = function (milliseconds) {
        var tmpDate = new Date(milliseconds);
        tmpDate.setHours(0);
        tmpDate.setSeconds(0);
        tmpDate.setMinutes(0);
        tmpDate.setMilliseconds(0);
        return tmpDate.getTime();
    };
    Utils.waiting = function (time) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve();
            }, time);
        });
    };
    // 获取剩余时间
    Utils.prototype.secondsToClock = function (seconds) {
        seconds = Number(seconds);
        var secs = seconds % 60;
        var mins = (seconds - secs) / 60;
        var hours = Math.floor(mins / 60);
        if (hours > 0) {
            mins %= 60;
        }
        return (hours > 9 ? hours : "0" + hours) + ":" + (mins > 9 ? mins : "0" + mins) + ":" + (secs > 9 ? secs : "0" + secs);
    };
    /**
     * 工具方法：同步读取json文件 返回JS对像
     * @param fileName
     */
    Utils.loadConfig = function (fileName) {
        return __awaiter(this, void 0, void 0, function () {
            var url, rst, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "config/" + fileName;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.LoadRes(url)];
                    case 2:
                        rst = _a.sent();
                        return [2 /*return*/, rst];
                    case 3:
                        err_1 = _a.sent();
                        return [2 /*return*/, undefined];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Utils.LoadRes = function (path) {
        return new Promise(function (resolve, reject) {
            cc.resources.load(path, function (err, res) {
                if (err) {
                    reject(err.message || err);
                }
                else {
                    resolve(res);
                }
            });
        });
    };
    Utils.btnLock = function (time) {
        var _this = this;
        if (time === void 0) { time = 500; }
        if (this._btnLock) {
            return true;
        }
        this._btnLock = true;
        setTimeout(function () {
            _this._btnLock = false;
        }, time);
        return false;
    };
    Utils.removeNode = function (node) {
        if (!node || !node.parent) {
            return;
        }
        node.removeFromParent();
        node.destroy();
        // node.removeFromParent();
    };
    Utils.removeAllChildren = function (node) {
        if (!node) {
            return;
        }
        // node.destroyAllChildren();
        node.removeAllChildren();
    };
    /**
     * 置灰
     */
    Utils.toGrey = function (spr) {
        if (!spr)
            return;
        var matName = '2d-gray-sprite';
        var variant1 = cc.MaterialVariant.getBuiltinMaterial(matName);
        spr.setMaterial(0, variant1);
    };
    /**
     * 恢复彩色
     */
    Utils.toColor = function (spr) {
        if (!spr)
            return;
        var matName = '2d-sprite';
        var variant1 = cc.MaterialVariant.getBuiltinMaterial(matName);
        spr.setMaterial(0, variant1);
    };
    /**
     * 指定节点下所有图片 置灰
     */
    Utils.toGreyNode = function (node) {
        if (!node)
            return;
        var sprs = node.getComponentsInChildren(cc.RenderComponent);
        for (var i = 0; i < sprs.length; i++) {
            var eachSpr = sprs[i];
            this.toGrey(eachSpr);
        }
    };
    /**
     * 指定节点下所有图片 置灰
     */
    Utils.toColorNode = function (node) {
        if (!node)
            return;
        var sprs = node.getComponentsInChildren(cc.RenderComponent);
        for (var i = 0; i < sprs.length; i++) {
            var eachSpr = sprs[i];
            this.toColor(eachSpr);
        }
    };
    // 洗牌
    Utils.shuffle = function (arr) {
        var len = arr.length;
        var randomIndex;
        var temp;
        while (len) {
            randomIndex = Math.floor(Math.random() * (len--));
            temp = arr[randomIndex];
            arr[randomIndex] = arr[len];
            arr[len] = temp;
        }
        return arr;
    };
    Utils.shuffle2 = function (arr) {
        var arr1 = [];
        var arr2 = [];
        var h = arr.length / 2;
        for (var i = 0; i < arr.length; i++) {
            if (i <= h) {
                arr1.push(arr[i]);
            }
            else {
                arr2.push(arr[i]);
            }
        }
        arr1 = this.shuffle(arr1);
        arr2 = this.shuffle(arr2);
        return __spreadArrays(arr2, arr1);
    };
    // 去重并移除逗号
    Utils.ilterRepeatStr = function (str) {
        var rs = [].filter.call(str, function (s, i, o) { return o.indexOf(s) == i; }).join('');
        return rs.toString().replace(/,/g, '');
    };
    Utils.getValue = function (root, key) {
        var keys = key.split('.');
        try {
            var value = root[keys[0]];
            for (var i = 1; i < keys.length; i++) {
                value = value[keys[i]];
            }
            return value;
        }
        catch (err) {
            return undefined;
        }
    };
    /**
     * 停留在动画的第一帧
     * @param anim
     * @param name
     */
    Utils.animationGotoStart = function (anim, name) {
        var anim_name = name;
        if (typeof name === 'number') {
            anim_name = anim.getClips()[name].name;
        }
        anim.play(String(anim_name), 0);
        anim.sample(String(anim_name));
        anim.stop();
    };
    /**
     * 停留在动画的最后一帧
     * @param anim
     * @param name
     */
    Utils.animationGotoEnd = function (anim, name) {
        var anim_key = name;
        var anim_value = name;
        if (typeof name === 'string') {
            for (var key in anim.getClips()) {
                if (anim.getClips()[key].name === name) {
                    anim_key = key;
                    break;
                }
            }
        }
        else if (typeof name === 'number') {
            anim_value = anim.getClips()[name].name;
        }
        var anim_time = anim.getClips()[anim_key].duration;
        anim.play(String(anim_value), anim_time);
    };
    /**
     * 指定日期的星座信息
     * @param m 月份 1~
     * @param d 日期 1~
     * @returns {index:星座编号(0~11) sZodiac:星座名 sBetween:所在日期区间}
     */
    Utils.GetZodiac = function (m, d) {
        var s = '魔羯水瓶双鱼牡羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯';
        var arr = [20, 19, 21, 21, 21, 22, 23, 23, 23, 23, 22, 22];
        var index = m - (d < arr[m - 1] ? 1 : 0);
        index = index == 12 ? 0 : index;
        var sZodiac = s.substr(index * 2, 2) + "\u5EA7";
        var preMonth = (m - 2) < 0 ? 11 : +(m - 2);
        var backMonth = (m + 1) > 12 ? 1 : +(m + 1);
        var front = (d < arr[m - 1] ? (preMonth + 1 + "." + arr[preMonth]) : (m + "." + arr[m - 1]));
        var back = (d < arr[m - 1] ? m + "." + (arr[index] - 1) : backMonth + "." + (arr[backMonth - 1] - 1));
        var sBetween = front + "-" + back;
        // console.log((index + " " + sZodiac + " " + sBetween));
        return { index: index, sZodiac: sZodiac, sBetween: sBetween };
    };
    /**
     * 基于某模块激活时间后的 周几 1~
     */
    Utils.getGameDay = function (timeStart) {
        timeStart = Utils.getDayBeginTime(timeStart);
        var timeCur = Utils.getDayBeginTime(Utils.getCurTime());
        var second_of_week = (timeCur - timeStart) % (7 * GlobalDefines_1.GlobalDefines.Second_Day);
        var day = Math.floor(second_of_week / GlobalDefines_1.GlobalDefines.Second_Day) + 1;
        return day;
    };
    /**
     * 基于某模块激活时间后的 第几周 0~
     */
    Utils.getWeek = function (theTime, timeStart) {
        timeStart = Utils.getDayBeginTime(timeStart);
        theTime = Utils.getDayBeginTime(theTime);
        var week = Math.floor((theTime - timeStart) / (7 * GlobalDefines_1.GlobalDefines.Second_Day * 1000));
        return week;
    };
    Utils.twoPointDistance = function (pos1, pos2) {
        var x1 = pos1.x; // 第一个点的横坐标
        var y1 = pos1.y; // 第一个点的纵坐标
        var x2 = pos2.x; // 第二个点的横坐标
        var y2 = pos2.y; // 第二个点的纵坐标
        var xdiff = x2 - x1; // 计算两个点的横坐标之差
        var ydiff = y2 - y1; // 计算两个点的纵坐标之差
        return Math.pow((xdiff * xdiff + ydiff * ydiff), 0.5); // 计算两点之间的距离，并将结果返回表单元素
    };
    Utils.adaptiveNoteLayout = function () {
        var winSize = cc.winSize; // 获取当前游戏窗口大小
        cc.log("--\u5F53\u524D\u6E38\u620F\u7A97\u53E3\u5927\u5C0F  w:" + winSize.width + "   h:" + winSize.height);
        var viewSize = cc.view.getFrameSize();
        cc.log("--\u89C6\u56FE\u8FB9\u6846\u5C3A\u5BF8\uFF1Aw:" + viewSize.width + "  h:" + viewSize.height);
        var canvasSize = cc.view.getCanvasSize(); // 视图中canvas尺寸
        cc.log("--\u89C6\u56FE\u4E2Dcanvas\u5C3A\u5BF8  w:" + canvasSize.width + "  H:" + canvasSize.height);
        var visibleSize = cc.view.getVisibleSize();
        cc.log("--\u89C6\u56FE\u4E2D\u7A97\u53E3\u53EF\u89C1\u533A\u57DF\u7684\u5C3A\u5BF8 w:" + visibleSize.width + "   h:" + visibleSize.height);
        var designSize = cc.view.getDesignResolutionSize();
        cc.log("--\u8BBE\u8BA1\u5206\u8FA8\u7387\uFF1A" + designSize.width + "    h: " + designSize.height);
    };
    Utils.findNodeByName = function (root, name) {
        if (root) {
            var widget = root.getChildByName(name);
            if (widget) {
                return widget;
            }
            var children = root.children;
            for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                var c = children_1[_i];
                widget = Utils.findNodeByName(c, name);
                if (widget) {
                    return widget;
                }
            }
            return null;
        }
        return null;
    };
    Utils.getAngle = function (start, end) {
        // 计算出朝向
        var dx = end.x - start.x;
        var dy = end.y - start.y;
        var dir = cc.v2(dx, dy);
        // 根据朝向计算出夹角弧度
        var angle = dir.signAngle(cc.v2(1, 0));
        // 将弧度转换为欧拉角
        var degree = angle / Math.PI * 180;
        return degree;
    };
    // 把一个节点下的坐标转成另一个节点的坐标
    Utils.convertNodeToNodeSpace = function (node, targetParent) {
        if (cc.isValid(node)) {
            if (!!node.parent) {
                var wpos = node.parent.convertToWorldSpaceAR(node.getPosition());
                if (cc.isValid(targetParent)) {
                    return targetParent.convertToNodeSpaceAR(wpos);
                }
            }
        }
        cc.log('坐标转换有问题');
        return cc.v2(0, 0);
    };
    Utils.randomByWeightList = function (weightArr) {
        var allWeight = 0;
        for (var i = 0; i < weightArr.length; i++) {
            allWeight += weightArr[i];
        }
        var rd = Utils.randomFloat(0, allWeight);
        var tmp = 0;
        for (var i = 0; i < weightArr.length; i++) {
            tmp += weightArr[i];
            if (rd < tmp) {
                return i;
            }
        }
        return 0;
    };
    // 数组copy
    Utils.arrayCopy = function (sourceArr, destArr) {
        if (!!sourceArr && !!destArr) {
            for (var index = 0; index < sourceArr.length; index++) {
                var element = sourceArr[index];
                destArr.push(element);
            }
        }
    };
    /**
     * 改变节点颜色
     * @param node
     * @param color
     */
    Utils.changeColor = function (node, color) {
        node.color = new cc.Color().fromHEX(color);
    };
    // 解密
    Utils.decodeAtoB = function (value) {
        return decodeURIComponent(atob(value));
    };
    // 加密
    Utils.encodeBtoA = function (value) {
        return btoa(encodeURIComponent(value));
    };
    Utils.nextRandomId = function () {
        /*
         * let date = (new Date()).getTime();//获取时间戳
         * if (isSimple) {
         *     return date + "";
         * }
         */
        var len = 8; // 机器码有多少位
        var pwd = ''; // 定义空变量用来接收机器码
        for (var i = 0; i < len; i++) {
            pwd += Utils.RandomIdString.charAt(Math.floor(Math.random() * Utils.RandomIdString.length)); // 循环机器码位数随机填充
        }
        return pwd;
    };
    Utils.distanceByV2 = function (a, b) {
        var distance = a.sub(b).mag();
        return distance;
    };
    Utils.distanceByNode = function (a, b) {
        var p1 = a.getPosition();
        var p2 = b.getPosition();
        var distance = p1.sub(p2).mag();
        return distance;
    };
    // 根据长度获取随机概率数组
    Utils.getRandomRates = function (len) {
        var probabilities = Array.from({ length: len }, function () { return Math.random(); });
        var sum = probabilities.reduce(function (a, b) { return a + b; }, 0);
        return probabilities.map(function (p) { return p / sum; });
    };
    Utils._btnLock = false;
    /**
     * 简单生成一个唯一ID
     * @returns
     */
    Utils.RandomIdString = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_';
    return Utils;
}());
exports.Utils = Utils;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdXRpbHMvVXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUErRDtBQUMvRCxtQ0FBa0M7QUFFbEM7SUFBQTtJQXM4QkEsQ0FBQztJQXI4QmdCLFdBQUssR0FBbEIsVUFBbUIsT0FBWSxFQUFFLFFBQWdCOzs7O2dCQUM3QyxzQkFBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO3dCQUMvQixVQUFVLENBQUM7NEJBQ1AsS0FBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFDakMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztvQkFDMUIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUMsTUFBTSxJQUFPLENBQUMsQ0FBQyxFQUFDOzs7S0FDN0I7SUFFTSxvQkFBYyxHQUFyQixVQUFzQixFQUFZO1FBQUUsd0JBQXdCO2FBQXhCLFVBQXdCLEVBQXhCLHFCQUF3QixFQUF4QixJQUF3QjtZQUF4Qix1Q0FBd0I7O1FBQ3hELElBQUksRUFBRSxJQUFJLE9BQU8sQ0FBQyxFQUFFLENBQUMsS0FBSyxVQUFVLEVBQUU7WUFDbEMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsY0FBYyxDQUFDLENBQUM7U0FDbEM7SUFDTCxDQUFDO0lBRU0sa0JBQVksR0FBbkIsVUFBb0IsRUFBRSxFQUFFLE9BQU87UUFDM0IsSUFBSSxFQUFFLElBQUksT0FBTyxFQUFFLEtBQUssVUFBVSxFQUFFO1lBQ2hDLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDckI7SUFDTCxDQUFDO0lBRUQscUVBQXFFO0lBQzlELGVBQVMsR0FBaEIsVUFBaUIsR0FBRyxFQUFFLEdBQUc7UUFDckIsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFD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QUFFLENBQUMsQ0FBQztRQUM3RCxJQUFJLEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6QyxLQUFLLEdBQUcsS0FBSyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUE7UUFDL0IsSUFBTSxPQUFPLEdBQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxXQUFHLENBQUM7UUFDN0MsSUFBTSxRQUFRLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0MsSUFBTSxTQUFTLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDOUMsSUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBSSxRQUFRLEdBQUcsQ0FBQyxTQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFJLENBQUMsU0FBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBRyxDQUFDLENBQUMsQ0FBQztRQUMvRixJQUFNLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBSSxDQUFDLFVBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBRSxDQUFDLENBQUMsQ0FBSSxTQUFT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dkUsSUFBTSxHQUFHLEdBQUcsYUFBYSxDQUFDLE1BQU0sQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssT0FBQSxDQUFDLEdBQUcsQ0FBQyxFQUFMLENBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNyRCxPQUFPLGFBQWEsQ0FBQyxHQUFHLENBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxDQUFDLEdBQUcsR0FBRyxFQUFQLENBQU8sQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFyWGMsY0FBUSxHQUFZLEtBQUssQ0FBQztJQWlWekM7OztPQUdHO0lBQ0ksb0JBQWMsR0FBVyxpRUFBaUUsQ0FBQTtJQWlDckcsWUFBQztDQXQ4QkQsQUFzOEJDLElBQUE7QUF0OEJZLHNCQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2xvYmFsRGVmaW5lcyB9IGZyb20gJy4uL2NvbW1vbi9jb25zdHMvR2xvYmFsRGVmaW5lcyc7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuL2xvZ2dlcic7XG5cbmV4cG9ydCBjbGFzcyBVdGlscyB7XG4gICAgc3RhdGljIGFzeW5jIHNsZWVwKHRoaXNPYmo6IGFueSwgZHVyYXRpb246IG51bWJlcikge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnZva2VDYWxsYmFjayhyZXNvbHZlKTtcbiAgICAgICAgICAgIH0sIHRoaXNPYmosIGR1cmF0aW9uKTtcbiAgICAgICAgfSkuY2F0Y2goKHJlYXNvbikgPT4geyB9KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaW52b2tlQ2FsbGJhY2soY2I6IEZ1bmN0aW9uLCAuLi5vcHRpb25hbFBhcmFtczogYW55W10pIHtcbiAgICAgICAgaWYgKGNiICYmIHR5cGVvZiAoY2IpID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYi5hcHBseShudWxsLCBvcHRpb25hbFBhcmFtcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgc2FmZUNhbGxGdW5jKGZuLCB0aGlzT2JqKSB7XG4gICAgICAgIGlmIChmbiAmJiB0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGZuLmFwcGx5KHRoaXNPYmopO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJucyBhIHJhbmRvbSBpbnRlZ2VyIGJldHdlZW4gbWluIChpbmNsdWRlZCkgYW5kIG1heCAoZXhjbHVkZWQpXG4gICAgc3RhdGljIHJhbmRvbUludChtaW4sIG1heCkge1xuICAgICAgICBtaW4gPSBNYXRoLmNlaWwobWluKTtcbiAgICAgICAgbWF4ID0gTWF0aC5mbG9vcihtYXgpO1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikpICsgbWluO1xuICAgIH1cblxuICAgIC8vIFJldHVybnMgYSByYW5kb20gaW50ZWdlciBiZXR3ZWVuIG1pbiAoaW5jbHVkZWQpIGFuZCBtYXggKGluY2x1ZGVkKVxuICAgIHN0YXRpYyByYW5kb21JbnRJbmNsdXNpdmUobWluLCBtYXgpIHtcbiAgICAgICAgbWluID0gTWF0aC5jZWlsKG1pbik7XG4gICAgICAgIG1heCA9IE1hdGguZmxvb3IobWF4KTtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG4gICAgfVxuICAgIHN0YXRpYyByYW5kb21GbG9hdChtaW4sIG1heCkge1xuICAgICAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xuICAgIH1cblxuICAgIHN0YXRpYyByYW5kb21CeUxpc3QocmF0ZUxpc3Q6IEFycmF5PG51bWJlcj4pIHtcbiAgICAgICAgcmF0ZUxpc3QubWFwKCh2YWx1ZSwgaW5kZXgsIGFycmF5KSA9PiAoYXJyYXlbaW5kZXhdID0gfn5hcnJheVtpbmRleCAtIDFdICsgdmFsdWUpKTtcbiAgICAgICAgY29uc3QgciA9IHRoaXMucmFuZG9tSW50SW5jbHVzaXZlKDEsIHJhdGVMaXN0W3JhdGVMaXN0Lmxlbmd0aCAtIDFdKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IHJhdGVMaXN0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBjb25zdCBjdXIgPSByYXRlTGlzdFtpXTtcbiAgICAgICAgICAgIGNvbnN0IGxhc3QgPSB+fnJhdGVMaXN0W2kgLSAxXTtcbiAgICAgICAgICAgIGlmIChsYXN0IDwgciAmJiByIDw9IGN1cikge1xuICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICAvLyDojrflvpfmlbDnu4TlhoXnmoTpmo/mnLrlgLxcbiAgICBzdGF0aWMgZ2V0UmFuZG9tQnlBcnIoYXJyKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5yYW5kb21JbnQoMCwgYXJyLmxlbmd0aCk7XG4gICAgICAgIHJldHVybiBhcnJbaW5kZXhdO1xuICAgIH1cblxuICAgIHN0YXRpYyBtb2RCeUxpbWl0KG51bTogbnVtYmVyLCBsaW1pdDogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiAobnVtIC0gMSkgJSBsaW1pdCArIDE7XG4gICAgfVxuXG4gICAgc3RhdGljIGlzTnVsbE9yRW1wdHkoc3RyOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICFzdHIgfHwgc3RyID09ICcnIHx8IHN0ciA9PSAnbnVsbCc7XG4gICAgfVxuXG4gICAgc3RhdGljIHFyU2NlbmVPcHRpb24oZGF0YTogYW55KTogYW55IHtcbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzY2VuZSA9IGRlY29kZVVSSUNvbXBvbmVudChkYXRhKTtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0ge307XG4gICAgICAgIGZvciAoY29uc3QgdCBvZiBzY2VuZS5zcGxpdCgnJicpKSB7XG4gICAgICAgICAgICBjb25zdCBsID0gdC5zcGxpdCgnPScpO1xuICAgICAgICAgICAgb3B0aW9uW2xbMF1dID0gbFsxXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvcHRpb247XG4gICAgfVxuXG4gICAgc3RhdGljIGZvcm1hdFRpbWVFeHQoc2VjOiBhbnksIHNob3dIb3VyID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKH5+c2VjIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybiBzaG93SG91ciA/ICcwMOaXtjAw5YiGMDDnp5InIDogJzAw5YiGMDDnp5InO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaG91ciA9IE1hdGguZmxvb3Ioc2VjIC8gMzYwMCkudG9TdHJpbmcoKTtcbiAgICAgICAgY29uc3Qgc2Vjb25kID0gTWF0aC5mbG9vcihzZWMgJSAzNjAwICUgNjApLnRvU3RyaW5nKCk7XG4gICAgICAgIGNvbnN0IG1pbnV0ZSA9IHNob3dIb3VyID8gTWF0aC5mbG9vcihzZWMgJSAzNjAwIC8gNjApIDogTWF0aC5mbG9vcihzZWMgLyA2MCkudG9TdHJpbmcoKTtcbiAgICAgICAgaWYgKHNob3dIb3VyKSB7XG4gICAgICAgICAgICBjb25zdCBhcnIgPSBbaG91ciwgbWludXRlLCBzZWNvbmRdLm1hcCgobikgPT4gKGAke259YFsxXSA/IG4gOiBgMCR7bn1gKSk7XG4gICAgICAgICAgICByZXR1cm4gYCR7YXJyWzBdfeaXtiR7YXJyWzFdfeWIhiR7YXJyWzJdfeenkmA7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhcnIgPSBbbWludXRlLCBzZWNvbmRdLm1hcCgobikgPT4gKGAke259YFsxXSA/IG4gOiBgMCR7bn1gKSk7XG4gICAgICAgIHJldHVybiBgJHthcnJbMF195YiGJHthcnJbMV1956eSYDtcbiAgICB9XG5cbiAgICBzdGF0aWMgZm9ybWF0TWlsVGltZSh0aW1lKSB7XG4gICAgICAgIGlmICh0aW1lID4gMCkge1xuICAgICAgICAgICAgY29uc3QgdG1wID0gTWF0aC5jZWlsKHRpbWUgKiAxMDAwKTtcbiAgICAgICAgICAgIHJldHVybiBgJHtNYXRoLmZsb29yKHRtcCAvIDEwMDApfeKAsyR7dG1wICUgMTAwMH1gO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICcw4oCzMDAwJztcbiAgICB9XG5cbiAgICBzdGF0aWMgZm9ybWF0VGltZShzZWM6IGFueSwgc2hvd0hvdXIgPSBmYWxzZSkge1xuICAgICAgICBpZiAofn5zZWMgPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHNob3dIb3VyID8gJzAwOjAwOjAwJyA6ICcwMDowMCc7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBob3VyID0gTWF0aC5mbG9vcihzZWMgLyAzNjAwKS50b1N0cmluZygpO1xuICAgICAgICBjb25zdCBzZWNvbmQgPSBNYXRoLmZsb29yKHNlYyAlIDM2MDAgJSA2MCkudG9TdHJpbmcoKTtcbiAgICAgICAgY29uc3QgbWludXRlID0gc2hvd0hvdXIgPyBNYXRoLmZsb29yKHNlYyAlIDM2MDAgLyA2MCkgOiBNYXRoLmZsb29yKHNlYyAvIDYwKS50b1N0cmluZygpO1xuICAgICAgICBpZiAoc2hvd0hvdXIpIHtcbiAgICAgICAgICAgIHJldHVybiBbaG91ciwgbWludXRlLCBzZWNvbmRdLm1hcCgobikgPT4gKGAke259YFsxXSA/IG4gOiBgMCR7bn1gKSkuam9pbignOicpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gW21pbnV0ZSwgc2Vjb25kXS5tYXAoKG4pID0+IChgJHtufWBbMV0gPyBuIDogYDAke259YCkpLmpvaW4oJzonKVxuICAgIH1cblxuICAgIHN0YXRpYyBmb3JtYXRUaW1lX0RhdGUoc2VjOiBhbnksIHNob3dZZWFyOiBib29sZWFuKSB7XG4gICAgICAgIGNvbnN0IGQgPSBuZXcgRGF0ZShzZWMgKiAxMDAwKTtcbiAgICAgICAgLy8gTG9nZ2VyLmRlYnVnKFwiLS0tLS0tLVwiLCBzZWMsIGQpO1xuICAgICAgICBjb25zdCBtb250aCA9IChkLmdldE1vbnRoKCkgKyAxKS50b1N0cmluZygpO1xuICAgICAgICAvLyBMb2dnZXIuZGVidWcoXCItLVwiLCBtb250aCk7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBkLmdldERhdGUoKTtcbiAgICAgICAgLy8gTG9nZ2VyLmRlYnVnKFwiLS1cIiwgZGF0ZSk7XG4gICAgICAgIGlmIChzaG93WWVhcikge1xuICAgICAgICAgICAgY29uc3QgeWVhciA9IGQuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpO1xuICAgICAgICAgICAgcmV0dXJuIFt5ZWFyLCBtb250aCwgZGF0ZV0ubWFwKChuKSA9PiAoYCR7bn1gWzFdID8gbiA6IGAwJHtufWApKS5qb2luKCcuJylcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBbbW9udGgsIGRhdGVdLm1hcCgobikgPT4gKGAke259YFsxXSA/IG4gOiBgMCR7bn1gKSkuam9pbignLicpXG4gICAgfVxuXG4gICAgc3RhdGljIGdldFdlZWtOdW1iZXJOb3coc3M6IG51bWJlcikge1xuICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZShzcyk7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFdlZWtOdW1iZXIobm93KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0V2Vla051bWJlcihkOiBEYXRlKSB7XG4gICAgICAgIC8vIENvcHkgZGF0ZSBzbyBkb24ndCBtb2RpZnkgb3JpZ2luYWxcbiAgICAgICAgZCA9IG5ldyBEYXRlKERhdGUuVVRDKGQuZ2V0RnVsbFllYXIoKSwgZC5nZXRNb250aCgpLCBkLmdldERhdGUoKSkpO1xuICAgICAgICAvKlxuICAgICAgICAgKiBTZXQgdG8gbmVhcmVzdCBUaHVyc2RheTogY3VycmVudCBkYXRlICsgNCAtIGN1cnJlbnQgZGF5IG51bWJlclxuICAgICAgICAgKiBNYWtlIFN1bmRheSdzIGRheSBudW1iZXIgN1xuICAgICAgICAgKi9cbiAgICAgICAgZC5zZXRVVENEYXRlKGQuZ2V0VVRDRGF0ZSgpICsgNCAtIChkLmdldFVUQ0RheSgpIHx8IDcpKTtcbiAgICAgICAgLy8gR2V0IGZpcnN0IGRheSBvZiB5ZWFyXG4gICAgICAgIGNvbnN0IHllYXJTdGFydCA9IG5ldyBEYXRlKERhdGUuVVRDKGQuZ2V0VVRDRnVsbFllYXIoKSwgMCwgMSkpO1xuICAgICAgICAvLyBDYWxjdWxhdGUgZnVsbCB3ZWVrcyB0byBuZWFyZXN0IFRodXJzZGF5XG4gICAgICAgIGNvbnN0IHdlZWtObyA9IE1hdGguY2VpbCgoKChkLmdldFRpbWUoKSAtIHllYXJTdGFydC5nZXRUaW1lKCkpIC8gODY0MDAwMDApICsgMSkgLyA3KTtcbiAgICAgICAgLy8gUmV0dXJuIGFycmF5IG9mIHllYXIgYW5kIHdlZWsgbnVtYmVyXG4gICAgICAgIHJldHVybiB3ZWVrTm87XG4gICAgfVxuXG4gICAgc3RhdGljIGdldE1vbnRoTSh5LCBtKSB7IC8vIOiuoeeul+WTquW5tOWTquaciCDmnInlpJrlsJHlpKkg5pyI5Lu95LuOMeW8gOWni1xuICAgICAgICBpZiAobSA9PSA0IHx8IG0gPT0gNiB8fCBtID09IDkgfHwgbSA9PSAxMSkgcmV0dXJuIDMwO1xuICAgICAgICBpZiAobSA9PSAyKSByZXR1cm4gKHkgJSA0ID09IDAgJiYgeSAlIDEwMCAhPSAwKSB8fCB5ICUgNDAwID09IDAgPyAyOSA6IDI4O1xuICAgICAgICByZXR1cm4gMzE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5b2T5YmN5pys5Zyw5pe26Ze05oizXG4gICAgICovXG4gICAgc3RhdGljIGdldFRpbWVzdGFtcCgpIHtcbiAgICAgICAgcmV0dXJuIChuZXcgRGF0ZSgpKS5nZXRUaW1lKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICrml7bpl7TlrZfku7vkuLLkvKDmjaLmiJDnp5JcbiAgICAgKiB0aW1lU3RyOnN0cmluZyBcIjIwMjAsOCwyNywwLDBcIiDlubTvvIzmnIjvvIzml6XvvIzml7bvvIzliIZcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0T1NTVGltZSh0aW1lU3RyOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNFbXB0eSh0aW1lU3RyKSkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhcnIgPSB0aW1lU3RyLnNwbGl0KCcsJyk7XG5cbiAgICAgICAgY29uc3QgZGF0ZTogRGF0ZSA9IG5ldyBEYXRlKHBhcnNlSW50KGFyclswXSksIHBhcnNlSW50KGFyclsxXSkgLSAxLCBwYXJzZUludChhcnJbMl0pLCBwYXJzZUludChhcnJbM10pLCBwYXJzZUludChhcnJbNF0pLCAwKTtcbiAgICAgICAgY29uc3QgdGltZSA9IE1hdGguZmxvb3IoZGF0ZS5nZXRUaW1lKCkgLyAxMDAwKTtcbiAgICAgICAgcmV0dXJuIHRpbWU7XG4gICAgfVxuXG4gICAgc3RhdGljIHNvbHZlU3RyaW5nKHN0cjogc3RyaW5nLCBsZW46IG51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIGlmICghc3RyKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY3VycmVudGxlbiA9IDBcbiAgICAgICAgbGV0IGN1cnJlbnRTdHIgPSAnJ1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHN0ci5jaGFyQ29kZUF0KGkpID4gMTI3IHx8IHN0ci5jaGFyQ29kZUF0KGkpID09IDk0KSB7XG4gICAgICAgICAgICAgICAgY3VycmVudGxlbiArPSAyXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRsZW4rK1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY3VycmVudGxlbiA+IGxlbikge1xuICAgICAgICAgICAgICAgIHJldHVybiBgJHtjdXJyZW50U3RyfS4uLmA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGN1cnJlbnRTdHIgKz0gc3RyLmNoYXJBdChpKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGN1cnJlbnRTdHI7XG4gICAgfVxuXG4gICAgLy8g6I635Y+W5Lit6Iux5paH5re35ZCI5a2X56ym5Liy6ZW/5bqmXG4gICAgcHVibGljIHN0YXRpYyBtaXhlZFN0ckxlbihzdHI6IHN0cmluZykge1xuICAgICAgICBsZXQgc3RyTGVuID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChzdHIuc3Vic3RyKGksIDEpLmNoYXJDb2RlQXQoMCkgPiAyNTUpIHtcbiAgICAgICAgICAgICAgICBzdHJMZW4gKz0gMjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3RyTGVuKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3RyTGVuO1xuICAgIH1cblxuICAgIHN0YXRpYyBhbmdsZVRvUmFkaWFuKGFuZ2xlOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gYW5nbGUgKiBNYXRoLlBJIC8gMTgwO1xuICAgIH1cblxuICAgIHN0YXRpYyB1cGRhdGVOb2RlU3ByaXRlRnJhbWUodXJsOiBzdHJpbmcsIG5vZGU6IGNjLk5vZGUsIGlzRnJvbU5ldDogYm9vbGVhbiA9IGZhbHNlLCBuZXh0OiBGdW5jdGlvbiA9IHVuZGVmaW5lZCwgZXh0OiBzdHJpbmcgPSAncG5nJykge1xuICAgICAgICBpZiAoVXRpbHMuaXNOdWxsT3JFbXB0eSh1cmwpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNGcm9tTmV0KSB7XG4gICAgICAgICAgICBpZiAoIXVybC5zdGFydHNXaXRoKCdodHRwczovLycpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYy5hc3NldE1hbmFnZXIubG9hZFJlbW90ZSh1cmwsIHsgZXh0OiBgLiR7ZXh0fWAgfSwgKGVyciwgdGV4dHVyZTogY2MuVGV4dHVyZTJEKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdbVXRpbHMgdXBkYXRlTm9kZVNwcml0ZUZyYW1lIGlzRnJvbU5ldF0gdXJsOicsIHVybCwgJy9lcnI6JywgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghY2MuaXNWYWxpZChub2RlKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgTG9nZ2VyLmRlYnVnKCdbVXRpbHMgdXBkYXRlTm9kZVNwcml0ZUZyYW1lXSB0ZXh0dXJlOicsIHRleHR1cmUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNwciA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgICAgICAgICAgaWYgKHNwcikge1xuICAgICAgICAgICAgICAgICAgICBzcHIuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoISFuZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHQoc3ByaXRlRnJhbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQodXJsLCBjYy5TcHJpdGVGcmFtZSwgKChlcnIsIHNwcml0ZUZyYW1lOiBjYy5TcHJpdGVGcmFtZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignW1V0aWxzIHVwZGF0ZU5vZGVTcHJpdGVGcmFtZSBpc05vdEZyb21OZXRdIHVybDonLCB1cmwsICcvZXJyOicpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCFjYy5pc1ZhbGlkKG5vZGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBzcHIgPSBub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICAgICAgICAgIGlmIChzcHIpIHtcbiAgICAgICAgICAgICAgICAgICAgc3ByLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCEhbmV4dCkge1xuICAgICAgICAgICAgICAgICAgICBuZXh0KHNwcml0ZUZyYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDov5znqIvliqDovb1zcGluZVxuICAgICAqIOazqO+8mue6puWumnNwaW5l6LWE5rqQ5paH5Lu25LiO5omA5Zyo5paH5Lu25aS55ZCN5a2X57uf5LiAXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBsb2FkU3BpbmUodXJsOiBzdHJpbmcsIG5vZGU6IGNjLk5vZGUsIHN1Y2Nlc3M/OiBGdW5jdGlvbiwgZmFpbD86IEZ1bmN0aW9uKSB7XG4gICAgICAgIC8vIGxldCB1cmwgPSBgJHtHYW1lQ29uZmlnLk9TU19VUkxfQkFTRX0ke2ZvbGRlcn0vJHtuYW1lfWA7XG4gICAgICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkUmVtb3RlKGAke3VybH0uanNvbmAsIChlcnIsIGpzb25Bc3NldDogY2MuSnNvbkFzc2V0KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgZmFpbCAmJiBmYWlsKCfliqDovb1qc29u5aSx6LSlJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBMb2dnZXIuZGVidWcoJ1vliqDovb1Kc29uXSBkYXRlOicsIChuZXcgRGF0ZSgpKS5nZXRUaW1lKCkpO1xuICAgICAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLmxvYWRSZW1vdGUoYCR7dXJsfS5hdGxhc2AsIChlcnIsIHRleHRBc3NldDogY2MuVGV4dEFzc2V0KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICBmYWlsICYmIGZhaWwoJ+WKoOi9vWF0bGFz5aSx6LSlJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBMb2dnZXIuZGVidWcoJ1vliqDovb1hdGxhc10gZGF0ZTonLCAobmV3IERhdGUoKSkuZ2V0VGltZSgpKTtcbiAgICAgICAgICAgICAgICBjYy5hc3NldE1hbmFnZXIubG9hZFJlbW90ZShgJHt1cmx9LnBuZ2AsIChlcnIsIHRleHR1cmUyRDogY2MuVGV4dHVyZTJEKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhaWwgJiYgZmFpbCgn5Yqg6L29cG5n5aSx6LSlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBMb2dnZXIuZGVidWcoJ1vliqDovb1wbmddIGRhdGU6JywgKG5ldyBEYXRlKCkpLmdldFRpbWUoKSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IHsgc2tlbGV0b25Kc29uOiBqc29uQXNzZXQuanNvbiwgYXRsYXNUZXh0OiB0ZXh0QXNzZXQudGV4dCwgdGV4dHVyZXM6IFt0ZXh0dXJlMkRdLCB1dWlkOiBgJHt1cmx9Lmpzb25gLCB0ZXh0dXJlTmFtZXM6IFtgJHtuYW1lfS5wbmdgXSB9O1xuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzICYmIHN1Y2Nlc3MocmVzKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHVwZGF0ZVNwaW5lUmVzKG5hbWU6IHN0cmluZywgbm9kZTogY2MuTm9kZSwgcmVzOiB7IHNrZWxldG9uSnNvbjogYW55LCBhdGxhc1RleHQ6IHN0cmluZywgdGV4dHVyZXM6IGNjLlRleHR1cmUyRFtdLCB1dWlkOiBzdHJpbmcsIHRleHR1cmVOYW1lczogc3RyaW5nW10gfSkge1xuICAgICAgICBsZXQgc2tlbGV0b246IHNwLlNrZWxldG9uID0gbm9kZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pOy8vXG4gICAgICAgIGlmICghc2tlbGV0b24pIHtcbiAgICAgICAgICAgIHNrZWxldG9uID0gbm9kZS5hZGRDb21wb25lbnQoJ3NwLlNrZWxldG9uJyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhc3NldCA9IG5ldyBzcC5Ta2VsZXRvbkRhdGEoKTtcbiAgICAgICAgYXNzZXRbJ191dWlkJ10gPSByZXMudXVpZDtcbiAgICAgICAgYXNzZXQuc2tlbGV0b25Kc29uID0gcmVzLnNrZWxldG9uSnNvblxuICAgICAgICBhc3NldC5hdGxhc1RleHQgPSByZXMuYXRsYXNUZXh0O1xuICAgICAgICBhc3NldC50ZXh0dXJlcyA9IHJlcy50ZXh0dXJlcztcbiAgICAgICAgYXNzZXRbJ3RleHR1cmVOYW1lcyddID0gcmVzLnRleHR1cmVOYW1lcztcbiAgICAgICAgc2tlbGV0b24uc2tlbGV0b25EYXRhID0gYXNzZXQ7XG4gICAgICAgIHNrZWxldG9uLnNldEFuaW1hdGlvbigwLCBuYW1lLCB0cnVlKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgc2Vjb25kc1RvQ2xvY2soc2Vjb25kcykge1xuICAgICAgICBzZWNvbmRzID0gTnVtYmVyKHNlY29uZHMpO1xuICAgICAgICBjb25zdCBzZWNzID0gc2Vjb25kcyAlIDYwO1xuICAgICAgICBsZXQgbWlucyA9IChzZWNvbmRzIC0gc2VjcykgLyA2MDtcbiAgICAgICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKG1pbnMgLyA2MCk7XG4gICAgICAgIGlmIChob3VycyA+IDApIHtcbiAgICAgICAgICAgIG1pbnMgJT0gNjA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYCR7aG91cnMgPiA5ID8gaG91cnMgOiBgMCR7aG91cnN9YH06JHttaW5zID4gOSA/IG1pbnMgOiBgMCR7bWluc31gfToke3NlY3MgPiA5ID8gc2VjcyA6IGAwJHtzZWNzfWB9YDtcbiAgICB9XG5cbiAgICBzdGF0aWMgaXNFbXB0eSh2KSB7IHJldHVybiB2ID09IHVuZGVmaW5lZCB8fCB2ID09ICcnIHx8IHYgPT0gbnVsbCB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGxvYWRTaW1wbGVCb25lKGZvbGRlcjogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIG5leHQ6IEZ1bmN0aW9uKSB7XG4gICAgICAgIGNvbnN0IHBhdGggPSBgYm9uZXMvJHtmb2xkZXJ9L2A7XG4gICAgICAgIGNvbnN0IHJlc291cmNlcyA9IFtcbiAgICAgICAgICAgIGAke3BhdGggKyBuYW1lfV9za2VgLFxuICAgICAgICAgICAgYCR7cGF0aCArIG5hbWV9X2F0bGFzYCxcbiAgICAgICAgICAgIGAke3BhdGggKyBuYW1lfV90ZXhgLFxuICAgICAgICBdO1xuXG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkKHJlc291cmNlcywgKGVyciwgYXNzZXRzKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgTG9nZ2VyLmRlYnVnKCdbVXRpbHMgbG9hZFNpbXBsZUJvbmVdIOWKoOi9veWksei0pTonLCBmb2xkZXIsICcvJywgbmFtZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBuZXh0KGFzc2V0c1swXSwgYXNzZXRzWzFdKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Yqg6L295Li76KeS6b6Z6aqo6LWE5rqQXG4gICAgICogQHBhcmFtIG5hbWVcbiAgICAgKiBAcGFyYW0gaXNIb21lQ291cnQg5piv5ZCm5Li75Zy6XG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBsb2FkUGxheWVyQm9uZShuYW1lOiBzdHJpbmcsIGlzSG9tZUNvdXJ0OiBib29sZWFuLCBzdWNjZXNzOiBGdW5jdGlvbiwgZmFpbD86IEZ1bmN0aW9uKSB7XG4gICAgICAgIGNvbnN0IHBhdGggPSAnYm9uZXMvZmlubi8nO1xuICAgICAgICBjb25zdCByZXNvdXJjZXMgPSBbXG4gICAgICAgICAgICBwYXRoICsgbmFtZSArIChpc0hvbWVDb3VydCA/ICdfc2tlJyA6ICdfcGtfc2tlJyksXG4gICAgICAgICAgICBwYXRoICsgbmFtZSArIChpc0hvbWVDb3VydCA/ICdfYXRsYXMnIDogJ19wa19hdGxhcycpLFxuICAgICAgICAgICAgcGF0aCArIG5hbWUgKyAoaXNIb21lQ291cnQgPyAnX3RleCcgOiAnX3BrX3RleCcpLFxuICAgICAgICBdO1xuXG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkKHJlc291cmNlcywgKGVyciwgYXNzZXRzKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgTG9nZ2VyLmRlYnVnKCdbVXRpbHMgbG9hZFNpbXBsZUJvbmVdIOWKoOi9veWksei0pTonLCBuYW1lKTtcbiAgICAgICAgICAgICAgICBmYWlsICYmIGZhaWwoYOWKoOi9veWksei0pSAke25hbWV9YCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzdWNjZXNzKGFzc2V0c1swXSwgYXNzZXRzWzFdLCBhc3NldHNbMl0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYXN5bmMgcmVsZWFzZVJlcyhhc3NldDogY2MuQXNzZXQpIHtcbiAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLnJlbGVhc2VBc3NldChhc3NldCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6aKE5Yi25Lu25Yqg6L29XG4gICAgICogQHBhcmFtIHBhdGhcbiAgICAgKi9cbiAgICBzdGF0aWMgYXN5bmMgbG9hZFBlZmFiKHBhdGg6IHN0cmluZywgbmVlZFJlbGVhc2U6IGJvb2xlYW4gPSBmYWxzZSk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgICogaWYgKHRoaXMucHJlZmFiX25lZWRfcmVsZWFzZVtwYXRoXSkge1xuICAgICAgICAgICAgICogICAgIHJlc29sdmUodGhpcy5wcmVmYWJfbmVlZF9yZWxlYXNlW3BhdGhdKTtcbiAgICAgICAgICAgICAqICAgICByZXR1cm47XG4gICAgICAgICAgICAgKiB9XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGNvbnN0IGxvYWQgPSBhc3luYyAoKSA9PiBuZXcgUHJvbWlzZSgocnN2LCByanQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0b3QgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgTG9nZ2VyLmRlYnVnKGBbVXRpbHMgb2FkUGVmYWJdICR7cGF0aH3liqDovb3otoXml7ZgKVxuICAgICAgICAgICAgICAgICAgICByanQoYG9hZFBlZmFiIOi/nuaOpei2heaXtiR7cGF0aH1gKTtcbiAgICAgICAgICAgICAgICB9LCAxMDAwMCk7XG4gICAgICAgICAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQocGF0aCwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0b3QpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJqdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcnN2KHJlcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGF3YWl0IGxvYWQoKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5bel5YW35pa55rOV77ya5ZCM5q2l6K+75Y+WanNvbuaWh+S7tiDov5Tlm55KU+WvueWDj1xuICAgICAqIEBwYXJhbSBmaWxlTmFtZVxuICAgICAqL1xuICAgIHN0YXRpYyBhc3luYyBsb2FkQ29uZmlnRnJvbUFsaSh1cmw6IHN0cmluZykge1xuICAgICAgICAvKlxuICAgICAgICAgKiBiYXNlVXJsID0gYmFzZVVybCB8fCBHYW1lQ29uZmlnLk9TU19VUkxfQkFTRTtcbiAgICAgICAgICogbGV0IHVybCA9IGAke2Jhc2VVcmx9YCArIGZpbGVOYW1lICsgXCIuanNvbj9cIiArIE1hdGgucmFuZG9tKCk7XG4gICAgICAgICAqL1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLmxvYWRSZW1vdGUodXJsLCAoZXJyLCBqc29uQXNzZXQ6IGNjLkpzb25Bc3NldCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgTG9nZ2VyLmRlYnVnKGBbRGF0YU1hbmFnZXIgbG9hZENvbmZpZ1ske3VybH1dXSBlcnI6YCwgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGDliqDovb3lpLHotKUke3VybH1gKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJlc29sdmUoanNvbkFzc2V0Lmpzb24pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Yik5pat57uZ5a6a5a2X56ym5Liy5piv5ZCm5Y+v6L2s5o2i5Li65pWw5a2XXG4gICAgICog5aaC5p6c57uZ5a6a5Y+C5pWw5Li6bnVsbCB1bmRlZmluZSDliJnop4blhbbkuLowXG4gICAgICogQHBhcmFtIHN0clxuICAgICAqL1xuICAgIHN0YXRpYyBpc051bSh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgPT09ICcwJyB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG4gPSBOdW1iZXIodmFsdWUpXG4gICAgICAgIGlmICghaXNOYU4obikpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIOiOt+WPluaXtumXtOaIsyDnp5JcbiAgICBzdGF0aWMgZ2V0Q3VyVGltZSgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IodGhpcy5nZXRDdXJNaWxsaXNlY29uZCgpIC8gMTAwMClcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0Q3VyTWlsbGlzZWNvbmQoKSB7XG4gICAgICAgIHJldHVybiAobmV3IERhdGUoKSkuZ2V0VGltZSgpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXR5bWQoc2VjOiBudW1iZXIpOiB7IHllYXI6IG51bWJlciwgbW9udGg6IG51bWJlciwgZGF0ZTogbnVtYmVyLCBob3VyOiBudW1iZXIsIG1pbnV0ZTogbnVtYmVyLCBzZWNvbmQ6IG51bWJlciwgbWlsbGlzZWNvbmRzOiBudW1iZXIgfSB7XG4gICAgICAgIGNvbnN0IGQgPSBuZXcgRGF0ZShzZWMgKiAxMDAwKTtcbiAgICAgICAgY29uc3QgbW9udGggPSAoZC5nZXRNb250aCgpICsgMSk7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBkLmdldERhdGUoKTtcbiAgICAgICAgY29uc3QgeWVhciA9IGQuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgY29uc3QgaG91ciA9IGQuZ2V0SG91cnMoKTtcbiAgICAgICAgY29uc3QgbWludXRlID0gZC5nZXRNaW51dGVzKCk7XG4gICAgICAgIGNvbnN0IHNlY29uZCA9IGQuZ2V0U2Vjb25kcygpO1xuICAgICAgICBjb25zdCBtaWxsaXNlY29uZHMgPSBkLmdldE1pbGxpc2Vjb25kcygpO1xuICAgICAgICByZXR1cm4geyB5ZWFyLCBtb250aCwgZGF0ZSwgaG91ciwgbWludXRlLCBzZWNvbmQsIG1pbGxpc2Vjb25kcyB9O1xuICAgIH1cbiAgICBzdGF0aWMgaXNUb2RheShzZWM6IG51bWJlcikge1xuICAgICAgICBjb25zdCBjdXJUaW1lID0gdGhpcy5nZXRDdXJUaW1lKCk7XG4gICAgICAgIGNvbnN0IGlucHV0UGFybSA9IFV0aWxzLmdldHltZChzZWMpO1xuICAgICAgICBjb25zdCBjdXJQYXJtID0gVXRpbHMuZ2V0eW1kKGN1clRpbWUpO1xuICAgICAgICBpZiAoaW5wdXRQYXJtLnllYXIgIT0gY3VyUGFybS55ZWFyKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5wdXRQYXJtLm1vbnRoICE9IGN1clBhcm0ubW9udGgpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbnB1dFBhcm0uZGF0ZSAhPSBjdXJQYXJtLmRhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogc3RhdGljIGdldERheUJlZ2luVGltZShzZWM6IG51bWJlcikge1xuICAgICAqICAgICBsZXQgcGFybSA9IFV0aWxzLmdldHltZChzZWMpO1xuICAgICAqICAgICBsZXQgdG1wRGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICogICAgIHRtcERhdGUuc2V0RnVsbFllYXIocGFybS55ZWFyKTtcbiAgICAgKiAgICAgdG1wRGF0ZS5zZXRNb250aChwYXJtLm1vbnRoIC0gMSk7XG4gICAgICogICAgIHRtcERhdGUuc2V0RGF0ZShwYXJtLmRhdGUpO1xuICAgICAqICAgICB0bXBEYXRlLnNldEhvdXJzKDApO1xuICAgICAqICAgICB0bXBEYXRlLnNldFNlY29uZHMoMCk7XG4gICAgICogICAgIHRtcERhdGUuc2V0TWludXRlcygwKTtcbiAgICAgKiAgICAgdG1wRGF0ZS5zZXRNaWxsaXNlY29uZHMoMCk7XG4gICAgICogICAgIHJldHVybiB0bXBEYXRlLmdldFRpbWUoKSAvIDEwMDA7XG4gICAgICogfVxuICAgICAqL1xuXG4gICAgc3RhdGljIGdldERheUJlZ2luVGltZShtaWxsaXNlY29uZHM6IG51bWJlcikge1xuICAgICAgICBjb25zdCB0bXBEYXRlID0gbmV3IERhdGUobWlsbGlzZWNvbmRzKTtcbiAgICAgICAgdG1wRGF0ZS5zZXRIb3VycygwKTtcbiAgICAgICAgdG1wRGF0ZS5zZXRTZWNvbmRzKDApO1xuICAgICAgICB0bXBEYXRlLnNldE1pbnV0ZXMoMCk7XG4gICAgICAgIHRtcERhdGUuc2V0TWlsbGlzZWNvbmRzKDApO1xuICAgICAgICByZXR1cm4gdG1wRGF0ZS5nZXRUaW1lKCk7XG4gICAgfVxuXG4gICAgc3RhdGljIHdhaXRpbmcodGltZTogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9LCB0aW1lKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIOiOt+WPluWJqeS9meaXtumXtFxuICAgIHNlY29uZHNUb0Nsb2NrKHNlY29uZHMpIHtcbiAgICAgICAgc2Vjb25kcyA9IE51bWJlcihzZWNvbmRzKTtcbiAgICAgICAgY29uc3Qgc2VjcyA9IHNlY29uZHMgJSA2MDtcbiAgICAgICAgbGV0IG1pbnMgPSAoc2Vjb25kcyAtIHNlY3MpIC8gNjA7XG4gICAgICAgIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcihtaW5zIC8gNjApO1xuICAgICAgICBpZiAoaG91cnMgPiAwKSB7XG4gICAgICAgICAgICBtaW5zICU9IDYwO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGAke2hvdXJzID4gOSA/IGhvdXJzIDogYDAke2hvdXJzfWB9OiR7bWlucyA+IDkgPyBtaW5zIDogYDAke21pbnN9YH06JHtzZWNzID4gOSA/IHNlY3MgOiBgMCR7c2Vjc31gfWA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5bel5YW35pa55rOV77ya5ZCM5q2l6K+75Y+WanNvbuaWh+S7tiDov5Tlm55KU+WvueWDj1xuICAgICAqIEBwYXJhbSBmaWxlTmFtZVxuICAgICAqL1xuICAgIHN0YXRpYyBhc3luYyBsb2FkQ29uZmlnKGZpbGVOYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgdXJsID0gYGNvbmZpZy8ke2ZpbGVOYW1lfWA7XG4gICAgICAgIC8qXG4gICAgICAgICAqIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAqICAgICBjYy5yZXNvdXJjZXMubG9hZCh1cmwsIChlcnIsIGpzb25Bc3NldDogY2MuSnNvbkFzc2V0KSA9PiB7XG4gICAgICAgICAqICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgKiAgICAgICAgICAgICBMb2dnZXIuZGVidWcoYFtEYXRhTWFuYWdlciBsb2FkQ29uZmlnWyR7ZmlsZU5hbWV9XV0gIGVycjpgLCBlcnIpO1xuICAgICAgICAgKiAgICAgICAgICAgICByZWplY3QoKTtcbiAgICAgICAgICogICAgICAgICB9ZWxzZXtcbiAgICAgICAgICogICAgICAgICAgICAgcmVzb2x2ZShqc29uQXNzZXQuanNvbik7XG4gICAgICAgICAqICAgICAgICAgfVxuICAgICAgICAgKiAgICAgfSk7XG4gICAgICAgICAqL1xuXG4gICAgICAgIC8vIH0pO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcnN0ID0gYXdhaXQgdGhpcy5Mb2FkUmVzPGNjLkpzb25Bc3NldD4odXJsKTtcbiAgICAgICAgICAgIHJldHVybiByc3Q7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgTG9hZFJlczxUIGV4dGVuZHMgY2MuQXNzZXQ+KHBhdGg6IHN0cmluZyk6IFByb21pc2U8VD4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQocGF0aCwgKGVycjogYW55LCByZXM6IFQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIubWVzc2FnZSB8fCBlcnIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2J0bkxvY2s6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBzdGF0aWMgYnRuTG9jayh0aW1lOiBudW1iZXIgPSA1MDApOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMuX2J0bkxvY2spIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fYnRuTG9jayA9IHRydWU7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fYnRuTG9jayA9IGZhbHNlO1xuICAgICAgICB9LCB0aW1lKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgcmVtb3ZlTm9kZShub2RlOiBjYy5Ob2RlKSB7XG4gICAgICAgIGlmICghbm9kZSB8fCAhbm9kZS5wYXJlbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIG5vZGUucmVtb3ZlRnJvbVBhcmVudCgpO1xuICAgICAgICBub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgLy8gbm9kZS5yZW1vdmVGcm9tUGFyZW50KCk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyByZW1vdmVBbGxDaGlsZHJlbihub2RlOiBjYy5Ob2RlKSB7XG4gICAgICAgIGlmICghbm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbm9kZS5kZXN0cm95QWxsQ2hpbGRyZW4oKTtcbiAgICAgICAgbm9kZS5yZW1vdmVBbGxDaGlsZHJlbigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOe9rueBsFxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgdG9HcmV5KHNwcjogY2MuUmVuZGVyQ29tcG9uZW50KSB7XG4gICAgICAgIGlmICghc3ByKSByZXR1cm47XG4gICAgICAgIGNvbnN0IG1hdE5hbWUgPSAnMmQtZ3JheS1zcHJpdGUnO1xuICAgICAgICBjb25zdCB2YXJpYW50MSA9IGNjLk1hdGVyaWFsVmFyaWFudC5nZXRCdWlsdGluTWF0ZXJpYWwobWF0TmFtZSk7XG4gICAgICAgIHNwci5zZXRNYXRlcmlhbCgwLCB2YXJpYW50MSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5oGi5aSN5b2p6ImyXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyB0b0NvbG9yKHNwcjogY2MuUmVuZGVyQ29tcG9uZW50KSB7XG4gICAgICAgIGlmICghc3ByKSByZXR1cm47XG4gICAgICAgIGNvbnN0IG1hdE5hbWUgPSAnMmQtc3ByaXRlJztcbiAgICAgICAgY29uc3QgdmFyaWFudDEgPSBjYy5NYXRlcmlhbFZhcmlhbnQuZ2V0QnVpbHRpbk1hdGVyaWFsKG1hdE5hbWUpO1xuICAgICAgICBzcHIuc2V0TWF0ZXJpYWwoMCwgdmFyaWFudDEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOaMh+WumuiKgueCueS4i+aJgOacieWbvueJhyDnva7ngbBcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHRvR3JleU5vZGUobm9kZTogY2MuTm9kZSkge1xuICAgICAgICBpZiAoIW5vZGUpIHJldHVybjtcbiAgICAgICAgY29uc3Qgc3BycyA9IG5vZGUuZ2V0Q29tcG9uZW50c0luQ2hpbGRyZW4oY2MuUmVuZGVyQ29tcG9uZW50KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcHJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBlYWNoU3ByID0gc3Byc1tpXTtcbiAgICAgICAgICAgIHRoaXMudG9HcmV5KGVhY2hTcHIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOaMh+WumuiKgueCueS4i+aJgOacieWbvueJhyDnva7ngbBcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHRvQ29sb3JOb2RlKG5vZGU6IGNjLk5vZGUpIHtcbiAgICAgICAgaWYgKCFub2RlKSByZXR1cm47XG4gICAgICAgIGNvbnN0IHNwcnMgPSBub2RlLmdldENvbXBvbmVudHNJbkNoaWxkcmVuKGNjLlJlbmRlckNvbXBvbmVudCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3Bycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZWFjaFNwciA9IHNwcnNbaV07XG4gICAgICAgICAgICB0aGlzLnRvQ29sb3IoZWFjaFNwcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDmtJfniYxcbiAgICBwdWJsaWMgc3RhdGljIHNodWZmbGUoYXJyKSB7XG4gICAgICAgIGxldCBsZW4gPSBhcnIubGVuZ3RoO1xuICAgICAgICBsZXQgcmFuZG9tSW5kZXg7IGxldFxuICAgICAgICAgICAgdGVtcDtcbiAgICAgICAgd2hpbGUgKGxlbikge1xuICAgICAgICAgICAgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobGVuLS0pKTtcbiAgICAgICAgICAgIHRlbXAgPSBhcnJbcmFuZG9tSW5kZXhdO1xuICAgICAgICAgICAgYXJyW3JhbmRvbUluZGV4XSA9IGFycltsZW5dO1xuICAgICAgICAgICAgYXJyW2xlbl0gPSB0ZW1wO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFycjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHNodWZmbGUyKGFycjogQXJyYXk8bnVtYmVyPikge1xuICAgICAgICBsZXQgYXJyMTogQXJyYXk8bnVtYmVyPiA9IFtdO1xuICAgICAgICBsZXQgYXJyMjogQXJyYXk8bnVtYmVyPiA9IFtdO1xuXG4gICAgICAgIGNvbnN0IGggPSBhcnIubGVuZ3RoIC8gMjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpIDw9IGgpIHtcbiAgICAgICAgICAgICAgICBhcnIxLnB1c2goYXJyW2ldKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYXJyMi5wdXNoKGFycltpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBhcnIxID0gdGhpcy5zaHVmZmxlKGFycjEpO1xuICAgICAgICBhcnIyID0gdGhpcy5zaHVmZmxlKGFycjIpO1xuICAgICAgICByZXR1cm4gWy4uLmFycjIsIC4uLmFycjFdO1xuICAgIH1cbiAgICAvLyDljrvph43lubbnp7vpmaTpgJflj7dcbiAgICBzdGF0aWMgaWx0ZXJSZXBlYXRTdHIoc3RyKSB7XG4gICAgICAgIGNvbnN0IHJzID0gW10uZmlsdGVyLmNhbGwoc3RyLCAocywgaSwgbykgPT4gby5pbmRleE9mKHMpID09IGkpLmpvaW4oJycpO1xuICAgICAgICByZXR1cm4gcnMudG9TdHJpbmcoKS5yZXBsYWNlKC8sL2csICcnKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0VmFsdWUocm9vdDogYW55LCBrZXk6IHN0cmluZykge1xuICAgICAgICBjb25zdCBrZXlzID0ga2V5LnNwbGl0KCcuJyk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSByb290W2tleXNbMF1dO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZVtrZXlzW2ldXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlgZznlZnlnKjliqjnlLvnmoTnrKzkuIDluKdcbiAgICAgKiBAcGFyYW0gYW5pbVxuICAgICAqIEBwYXJhbSBuYW1lXG4gICAgICovXG4gICAgc3RhdGljIGFuaW1hdGlvbkdvdG9TdGFydChhbmltOiBjYy5BbmltYXRpb24sIG5hbWU6IHN0cmluZyB8IG51bWJlcik6IHZvaWQge1xuICAgICAgICBsZXQgYW5pbV9uYW1lID0gbmFtZTtcbiAgICAgICAgaWYgKHR5cGVvZiBuYW1lID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgYW5pbV9uYW1lID0gYW5pbS5nZXRDbGlwcygpW25hbWVdLm5hbWU7XG4gICAgICAgIH1cblxuICAgICAgICBhbmltLnBsYXkoU3RyaW5nKGFuaW1fbmFtZSksIDApO1xuICAgICAgICBhbmltLnNhbXBsZShTdHJpbmcoYW5pbV9uYW1lKSk7XG4gICAgICAgIGFuaW0uc3RvcCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDlgZznlZnlnKjliqjnlLvnmoTmnIDlkI7kuIDluKdcbiAgICAgKiBAcGFyYW0gYW5pbVxuICAgICAqIEBwYXJhbSBuYW1lXG4gICAgICovXG4gICAgc3RhdGljIGFuaW1hdGlvbkdvdG9FbmQoYW5pbTogY2MuQW5pbWF0aW9uLCBuYW1lOiBzdHJpbmcgfCBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgbGV0IGFuaW1fa2V5ID0gbmFtZTtcbiAgICAgICAgbGV0IGFuaW1fdmFsdWUgPSBuYW1lO1xuICAgICAgICBpZiAodHlwZW9mIG5hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBhbmltLmdldENsaXBzKCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoYW5pbS5nZXRDbGlwcygpW2tleV0ubmFtZSA9PT0gbmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBhbmltX2tleSA9IGtleTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBuYW1lID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgYW5pbV92YWx1ZSA9IGFuaW0uZ2V0Q2xpcHMoKVtuYW1lXS5uYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYW5pbV90aW1lID0gYW5pbS5nZXRDbGlwcygpW2FuaW1fa2V5XS5kdXJhdGlvbjtcbiAgICAgICAgYW5pbS5wbGF5KFN0cmluZyhhbmltX3ZhbHVlKSwgYW5pbV90aW1lKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmjIflrprml6XmnJ/nmoTmmJ/luqfkv6Hmga9cbiAgICAgKiBAcGFyYW0gbSDmnIjku70gMX5cbiAgICAgKiBAcGFyYW0gZCDml6XmnJ8gMX5cbiAgICAgKiBAcmV0dXJucyB7aW5kZXg65pif5bqn57yW5Y+3KDB+MTEpIHNab2RpYWM65pif5bqn5ZCNIHNCZXR3ZWVuOuaJgOWcqOaXpeacn+WMuumXtH1cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIEdldFpvZGlhYyhtOiBudW1iZXIsIGQ6IG51bWJlcik6IHsgaW5kZXg6IG51bWJlciwgc1pvZGlhYzogc3RyaW5nLCBzQmV0d2Vlbjogc3RyaW5nIH0ge1xuICAgICAgICBjb25zdCBzID0gJ+mtlOe+r+awtOeTtuWPjOmxvOeJoee+iumHkeeJm+WPjOWtkOW3qOifueeLruWtkOWkhOWls+WkqeenpOWkqeidjuWwhOaJi+mtlOe+ryc7XG4gICAgICAgIGNvbnN0IGFyciA9IFsyMCwgMTksIDIxLCAyMSwgMjEsIDIyLCAyMywgMjMsIDIzLCAyMywgMjIsIDIyXTtcbiAgICAgICAgbGV0IGluZGV4ID0gbSAtIChkIDwgYXJyW20gLSAxXSA/IDEgOiAwKTtcbiAgICAgICAgaW5kZXggPSBpbmRleCA9PSAxMiA/IDAgOiBpbmRleFxuICAgICAgICBjb25zdCBzWm9kaWFjID0gYCR7cy5zdWJzdHIoaW5kZXggKiAyLCAyKX3luqdgO1xuICAgICAgICBjb25zdCBwcmVNb250aCA9IChtIC0gMikgPCAwID8gMTEgOiArKG0gLSAyKTtcbiAgICAgICAgY29uc3QgYmFja01vbnRoID0gKG0gKyAxKSA+IDEyID8gMSA6ICsobSArIDEpO1xuICAgICAgICBjb25zdCBmcm9udCA9IChkIDwgYXJyW20gLSAxXSA/IChgJHtwcmVNb250aCArIDF9LiR7YXJyW3ByZU1vbnRoXX1gKSA6IChgJHttfS4ke2FyclttIC0gMV19YCkpO1xuICAgICAgICBjb25zdCBiYWNrID0gKGQgPCBhcnJbbSAtIDFdID8gYCR7bX0uJHthcnJbaW5kZXhdIC0gMX1gIDogYCR7YmFja01vbnRofS4ke2FycltiYWNrTW9udGggLSAxXSAtIDF9YCk7XG4gICAgICAgIGNvbnN0IHNCZXR3ZWVuID0gYCR7ZnJvbnR9LSR7YmFja31gXG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coKGluZGV4ICsgXCIgXCIgKyBzWm9kaWFjICsgXCIgXCIgKyBzQmV0d2VlbikpO1xuXG4gICAgICAgIHJldHVybiB7IGluZGV4LCBzWm9kaWFjLCBzQmV0d2VlbiB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Z+65LqO5p+Q5qih5Z2X5r+A5rS75pe26Ze05ZCO55qEIOWRqOWHoCAxflxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRHYW1lRGF5KHRpbWVTdGFydDogbnVtYmVyKSB7XG4gICAgICAgIHRpbWVTdGFydCA9IFV0aWxzLmdldERheUJlZ2luVGltZSh0aW1lU3RhcnQpO1xuICAgICAgICBjb25zdCB0aW1lQ3VyID0gVXRpbHMuZ2V0RGF5QmVnaW5UaW1lKFV0aWxzLmdldEN1clRpbWUoKSk7XG5cbiAgICAgICAgY29uc3Qgc2Vjb25kX29mX3dlZWsgPSAodGltZUN1ciAtIHRpbWVTdGFydCkgJSAoNyAqIEdsb2JhbERlZmluZXMuU2Vjb25kX0RheSk7XG4gICAgICAgIGNvbnN0IGRheSA9IE1hdGguZmxvb3Ioc2Vjb25kX29mX3dlZWsgLyBHbG9iYWxEZWZpbmVzLlNlY29uZF9EYXkpICsgMTtcbiAgICAgICAgcmV0dXJuIGRheTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDln7rkuo7mn5DmqKHlnZfmv4DmtLvml7bpl7TlkI7nmoQg56ys5Yeg5ZGoIDB+XG4gICAgICovXG4gICAgc3RhdGljIGdldFdlZWsodGhlVGltZTogbnVtYmVyLCB0aW1lU3RhcnQ6IG51bWJlcikge1xuICAgICAgICB0aW1lU3RhcnQgPSBVdGlscy5nZXREYXlCZWdpblRpbWUodGltZVN0YXJ0KTtcbiAgICAgICAgdGhlVGltZSA9IFV0aWxzLmdldERheUJlZ2luVGltZSh0aGVUaW1lKTtcblxuICAgICAgICBjb25zdCB3ZWVrID0gTWF0aC5mbG9vcigodGhlVGltZSAtIHRpbWVTdGFydCkgLyAoNyAqIEdsb2JhbERlZmluZXMuU2Vjb25kX0RheSAqIDEwMDApKTtcbiAgICAgICAgcmV0dXJuIHdlZWs7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyB0d29Qb2ludERpc3RhbmNlKHBvczEsIHBvczIpIHvCoMKgwqDCoMKgwqAgLy8g5LuOZm9ybeeahOihqOWNleS4reWIhuWIq+aPkOWPluS4pOS4queCueeahOaoquOAgee6teWdkOagh1xuICAgICAgICBjb25zdCB4MSA9IHBvczEueDvCoMKgIC8vIOesrOS4gOS4queCueeahOaoquWdkOagh1xuICAgICAgICBjb25zdCB5MSA9IHBvczEueTvCoMKgIC8vIOesrOS4gOS4queCueeahOe6teWdkOagh1xuICAgICAgICBjb25zdCB4MiA9IHBvczIueDvCoMKgIC8vIOesrOS6jOS4queCueeahOaoquWdkOagh1xuICAgICAgICBjb25zdCB5MiA9IHBvczIueTvCoMKgIC8vIOesrOS6jOS4queCueeahOe6teWdkOagh1xuICAgICAgICBjb25zdCB4ZGlmZiA9IHgyIC0geDE7wqDCoMKgwqDCoMKgwqDCoMKgwqDCoCAvLyDorqHnrpfkuKTkuKrngrnnmoTmqKrlnZDmoIfkuYvlt65cbiAgICAgICAgY29uc3QgeWRpZmYgPSB5MiAtIHkxO8KgwqDCoMKgwqDCoMKgwqDCoMKgwqAgLy8g6K6h566X5Lik5Liq54K555qE57q15Z2Q5qCH5LmL5beuXG4gICAgICAgIHJldHVybiBNYXRoLnBvdygoeGRpZmYgKiB4ZGlmZiArIHlkaWZmICogeWRpZmYpLCAwLjUpO8KgwqAgLy8g6K6h566X5Lik54K55LmL6Ze055qE6Led56a777yM5bm25bCG57uT5p6c6L+U5Zue6KGo5Y2V5YWD57SgXG4gICAgfVxuXG4gICAgc3RhdGljIGFkYXB0aXZlTm90ZUxheW91dCgpIHtcbiAgICAgICAgY29uc3Qgd2luU2l6ZSA9IGNjLndpblNpemU7Ly8g6I635Y+W5b2T5YmN5ri45oiP56qX5Y+j5aSn5bCPXG4gICAgICAgIGNjLmxvZyhgLS3lvZPliY3muLjmiI/nqpflj6PlpKflsI8gIHc6JHt3aW5TaXplLndpZHRofSAgIGg6JHt3aW5TaXplLmhlaWdodH1gKTtcblxuICAgICAgICBjb25zdCB2aWV3U2l6ZSA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCk7XG4gICAgICAgIGNjLmxvZyhgLS3op4blm77ovrnmoYblsLrlr7jvvJp3OiR7dmlld1NpemUud2lkdGh9ICBoOiR7dmlld1NpemUuaGVpZ2h0fWApO1xuXG4gICAgICAgIGNvbnN0IGNhbnZhc1NpemUgPSBjYy52aWV3LmdldENhbnZhc1NpemUoKTsvLyDop4blm77kuK1jYW52YXPlsLrlr7hcbiAgICAgICAgY2MubG9nKGAtLeinhuWbvuS4rWNhbnZhc+WwuuWvuCAgdzoke2NhbnZhc1NpemUud2lkdGh9ICBIOiR7Y2FudmFzU2l6ZS5oZWlnaHR9YCk7XG5cbiAgICAgICAgY29uc3QgdmlzaWJsZVNpemUgPSBjYy52aWV3LmdldFZpc2libGVTaXplKCk7XG4gICAgICAgIGNjLmxvZyhgLS3op4blm77kuK3nqpflj6Plj6/op4HljLrln5/nmoTlsLrlr7ggdzoke3Zpc2libGVTaXplLndpZHRofSAgIGg6JHt2aXNpYmxlU2l6ZS5oZWlnaHR9YCk7XG5cbiAgICAgICAgY29uc3QgZGVzaWduU2l6ZSA9IGNjLnZpZXcuZ2V0RGVzaWduUmVzb2x1dGlvblNpemUoKTtcbiAgICAgICAgY2MubG9nKGAtLeiuvuiuoeWIhui+qOeOh++8miR7ZGVzaWduU2l6ZS53aWR0aH0gICAgaDogJHtkZXNpZ25TaXplLmhlaWdodH1gKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGZpbmROb2RlQnlOYW1lKHJvb3QsIG5hbWUpIHtcbiAgICAgICAgaWYgKHJvb3QpIHtcbiAgICAgICAgICAgIGxldCB3aWRnZXQgPSByb290LmdldENoaWxkQnlOYW1lKG5hbWUpO1xuICAgICAgICAgICAgaWYgKHdpZGdldCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB3aWRnZXRcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgY2hpbGRyZW4gPSByb290LmNoaWxkcmVuXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGMgb2YgY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICB3aWRnZXQgPSBVdGlscy5maW5kTm9kZUJ5TmFtZShjLCBuYW1lKVxuICAgICAgICAgICAgICAgIGlmICh3aWRnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdpZGdldFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgc3RhdGljIGdldEFuZ2xlKHN0YXJ0LCBlbmQpIHtcbiAgICAgICAgLy8g6K6h566X5Ye65pyd5ZCRXG4gICAgICAgIGNvbnN0IGR4ID0gZW5kLnggLSBzdGFydC54O1xuICAgICAgICBjb25zdCBkeSA9IGVuZC55IC0gc3RhcnQueTtcbiAgICAgICAgY29uc3QgZGlyID0gY2MudjIoZHgsIGR5KTtcblxuICAgICAgICAvLyDmoLnmja7mnJ3lkJHorqHnrpflh7rlpLnop5LlvKfluqZcbiAgICAgICAgY29uc3QgYW5nbGUgPSBkaXIuc2lnbkFuZ2xlKGNjLnYyKDEsIDApKTtcblxuICAgICAgICAvLyDlsIblvKfluqbovazmjaLkuLrmrKfmi4nop5JcbiAgICAgICAgY29uc3QgZGVncmVlID0gYW5nbGUgLyBNYXRoLlBJICogMTgwO1xuXG4gICAgICAgIHJldHVybiBkZWdyZWVcbiAgICB9XG5cbiAgICAvLyDmiorkuIDkuKroioLngrnkuIvnmoTlnZDmoIfovazmiJDlj6bkuIDkuKroioLngrnnmoTlnZDmoIdcbiAgICBzdGF0aWMgY29udmVydE5vZGVUb05vZGVTcGFjZShub2RlLCB0YXJnZXRQYXJlbnQpIHtcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQobm9kZSkpIHtcbiAgICAgICAgICAgIGlmICghIW5vZGUucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgd3BvcyA9IG5vZGUucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihub2RlLmdldFBvc2l0aW9uKCkpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNjLmlzVmFsaWQodGFyZ2V0UGFyZW50KSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0UGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHdwb3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNjLmxvZygn5Z2Q5qCH6L2s5o2i5pyJ6Zeu6aKYJyk7XG4gICAgICAgIHJldHVybiBjYy52MigwLCAwKTtcbiAgICB9XG4gICAgc3RhdGljIHJhbmRvbUJ5V2VpZ2h0TGlzdCh3ZWlnaHRBcnI6IEFycmF5PG51bWJlcj4pIHtcbiAgICAgICAgbGV0IGFsbFdlaWdodCA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd2VpZ2h0QXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhbGxXZWlnaHQgKz0gd2VpZ2h0QXJyW2ldO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmQgPSBVdGlscy5yYW5kb21GbG9hdCgwLCBhbGxXZWlnaHQpO1xuXG4gICAgICAgIGxldCB0bXAgPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdlaWdodEFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdG1wICs9IHdlaWdodEFycltpXTtcbiAgICAgICAgICAgIGlmIChyZCA8IHRtcCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgLy8g5pWw57uEY29weVxuICAgIHN0YXRpYyBhcnJheUNvcHkoc291cmNlQXJyOiBBcnJheTxhbnk+LCBkZXN0QXJyOiBBcnJheTxhbnk+KSB7XG4gICAgICAgIGlmICghIXNvdXJjZUFyciAmJiAhIWRlc3RBcnIpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBzb3VyY2VBcnIubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHNvdXJjZUFycltpbmRleF07XG4gICAgICAgICAgICAgICAgZGVzdEFyci5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5pS55Y+Y6IqC54K56aKc6ImyXG4gICAgICogQHBhcmFtIG5vZGVcbiAgICAgKiBAcGFyYW0gY29sb3JcbiAgICAgKi9cbiAgICBzdGF0aWMgY2hhbmdlQ29sb3Iobm9kZTogY2MuTm9kZSwgY29sb3I6IHN0cmluZykge1xuICAgICAgICBub2RlLmNvbG9yID0gbmV3IGNjLkNvbG9yKCkuZnJvbUhFWChjb2xvcik7XG4gICAgfVxuXG4gICAgLy8g6Kej5a+GXG4gICAgc3RhdGljIGRlY29kZUF0b0IodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChhdG9iKHZhbHVlKSk7XG4gICAgfVxuXG4gICAgLy8g5Yqg5a+GXG4gICAgc3RhdGljIGVuY29kZUJ0b0EodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGJ0b2EoZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog566A5Y2V55Sf5oiQ5LiA5Liq5ZSv5LiASURcbiAgICAgKiBAcmV0dXJuc1xuICAgICAqL1xuICAgIHN0YXRpYyBSYW5kb21JZFN0cmluZzogc3RyaW5nID0gJzEyMzQ1Njc4OTBBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6XydcbiAgICBzdGF0aWMgbmV4dFJhbmRvbUlkKCkge1xuICAgICAgICAvKlxuICAgICAgICAgKiBsZXQgZGF0ZSA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCk7Ly/ojrflj5bml7bpl7TmiLNcbiAgICAgICAgICogaWYgKGlzU2ltcGxlKSB7XG4gICAgICAgICAqICAgICByZXR1cm4gZGF0ZSArIFwiXCI7XG4gICAgICAgICAqIH1cbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IGxlbiA9IDg7Ly8g5py65Zmo56CB5pyJ5aSa5bCR5L2NXG4gICAgICAgIGxldCBwd2QgPSAnJzsvLyDlrprkuYnnqbrlj5jph4/nlKjmnaXmjqXmlLbmnLrlmajnoIFcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgcHdkICs9IFV0aWxzLlJhbmRvbUlkU3RyaW5nLmNoYXJBdChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBVdGlscy5SYW5kb21JZFN0cmluZy5sZW5ndGgpKTsvLyDlvqrnjq/mnLrlmajnoIHkvY3mlbDpmo/mnLrloavlhYVcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwd2Q7XG4gICAgfVxuXG4gICAgc3RhdGljIGRpc3RhbmNlQnlWMihhOiBjYy5WZWMyLCBiOiBjYy5WZWMyKSB7XG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gYS5zdWIoYikubWFnKCk7XG4gICAgICAgIHJldHVybiBkaXN0YW5jZTtcbiAgICB9XG4gICAgc3RhdGljIGRpc3RhbmNlQnlOb2RlKGE6IGNjLk5vZGUsIGI6IGNjLk5vZGUpIHtcbiAgICAgICAgY29uc3QgcDEgPSBhLmdldFBvc2l0aW9uKCk7XG4gICAgICAgIGNvbnN0IHAyID0gYi5nZXRQb3NpdGlvbigpO1xuICAgICAgICBjb25zdCBkaXN0YW5jZSA9IHAxLnN1YihwMikubWFnKCk7XG4gICAgICAgIHJldHVybiBkaXN0YW5jZTtcbiAgICB9XG4gICAgLy8g5qC55o2u6ZW/5bqm6I635Y+W6ZqP5py65qaC546H5pWw57uEXG4gICAgc3RhdGljIGdldFJhbmRvbVJhdGVzKGxlbikge1xuICAgICAgICBjb25zdCBwcm9iYWJpbGl0aWVzID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogbGVuIH0sICgpID0+IE1hdGgucmFuZG9tKCkpO1xuICAgICAgICBjb25zdCBzdW0gPSBwcm9iYWJpbGl0aWVzLnJlZHVjZSgoYSwgYikgPT4gYSArIGIsIDApO1xuICAgICAgICByZXR1cm4gcHJvYmFiaWxpdGllcy5tYXAoKHApID0+IHAgLyBzdW0pO1xuICAgIH1cbn1cbiJdfQ==