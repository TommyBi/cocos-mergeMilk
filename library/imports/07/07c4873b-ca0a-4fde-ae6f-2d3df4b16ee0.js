"use strict";
cc._RF.push(module, '07c48c7ygpP3q5vLT30sW7g', 'SaveData');
// script/common/SaveData.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveNodeConfig = exports.DataNode = void 0;
var Utils_1 = require("../utils/Utils");
var Global_1 = require("./Global");
var GlobalEvents_1 = require("./GlobalEvents");
var PmManager_1 = require("./PmManager");
var SaveData = /** @class */ (function () {
    function SaveData(saveKey, nodeConfig) {
        this.list = new Map();
        this.nodeConfig = {};
        this._saveKey = saveKey;
        this.nodeConfig = nodeConfig;
    }
    Object.defineProperty(SaveData.prototype, "saveKey", {
        get: function () {
            return this._saveKey + "_" + 1;
        },
        enumerable: false,
        configurable: true
    });
    SaveData.prototype.init = function () {
        var data = PmManager_1.pm.Get(this.saveKey);
        var res;
        if (!!data) {
            if (typeof (data) != "string") {
                res = data;
            }
            else
                res = JSON.parse(data);
        }
        else
            res = {};
        // let res = !!data ? JSON.parse(data) : {};
        // let res = data || {};
        for (var key in this.nodeConfig) {
            var cfg = this.nodeConfig[key];
            var node = new DataNode(cfg, res);
            this.addNode(node);
        }
    };
    SaveData.prototype.save = function () {
        var rst = {};
        this.list.forEach(function (element) {
            var obj = element.saveObj;
            rst[element.key] = obj;
        });
        // (let key in this.list) {
        //     let node: DataNode = this.list[key];
        //     let obj = node.saveObj;
        //     rst[key] = obj;
        // }
        PmManager_1.pm.Set(this.saveKey, JSON.stringify(rst));
    };
    SaveData.prototype.addNode = function (node) {
        this.list.set(node.key, node);
    };
    SaveData.prototype.getNode = function (key) {
        return this.list.get(key);
    };
    SaveData.prototype.getValue = function (key) {
        return this.getNode(key).value;
    };
    SaveData.prototype.setValue = function (key, value, save) {
        if (save === void 0) { save = true; }
        var node = this.getNode(key);
        node.value = value;
        Global_1.GlobalEvent.dispatchEvent(new GlobalEvents_1.EventOnDataChange({ model: this.saveKey, key: key, value: node.value }));
        save && this.save();
    };
    return SaveData;
}());
exports.default = SaveData;
var DataNode = /** @class */ (function () {
    function DataNode(cfg, res) {
        this.key = cfg.key;
        this.normal = cfg.normal;
        this.daily = cfg.daily;
        if (!res || !res[this.key]) {
            this._value = this.normal;
        }
        else {
            var node = res[this.key];
            this._value = node.v == undefined ? this.normal : node.v;
            this.saveTime = node.t || 0;
        }
    }
    Object.defineProperty(DataNode.prototype, "value", {
        get: function () {
            if (this.daily) {
                var curTime = Utils_1.Utils.getCurTime();
                if (!Utils_1.Utils.isToday(this.saveTime)) 
                // if (curTime - this.saveTime >= GlobalDefines.Second_Day) 
                {
                    this._value = this.normal;
                    this.saveTime = curTime;
                }
            }
            return this._value;
        },
        set: function (v) {
            this._value = v;
            if (this.daily) {
                this.saveTime = Utils_1.Utils.getCurTime();
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataNode.prototype, "saveObj", {
        get: function () {
            var rst = {};
            rst["v"] = this._value;
            if (this.daily) {
                rst["t"] = this.saveTime;
            }
            return rst;
        },
        enumerable: false,
        configurable: true
    });
    return DataNode;
}());
exports.DataNode = DataNode;
var SaveNodeConfig = /** @class */ (function () {
    function SaveNodeConfig(key, normal, daily) {
        this.key = key;
        this.normal = normal;
        this.daily = daily;
    }
    return SaveNodeConfig;
}());
exports.SaveNodeConfig = SaveNodeConfig;

cc._RF.pop();