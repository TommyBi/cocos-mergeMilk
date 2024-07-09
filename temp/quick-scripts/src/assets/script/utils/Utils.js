"use strict";
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