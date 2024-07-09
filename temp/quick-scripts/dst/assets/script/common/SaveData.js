
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/common/SaveData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvY29tbW9uL1NhdmVEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdDQUF1QztBQUN2QyxtQ0FBdUM7QUFDdkMsK0NBQW1EO0FBQ25ELHlDQUFpQztBQUdqQztJQVNJLGtCQUFZLE9BQWUsRUFBRSxVQUE2QztRQUgxRSxTQUFJLEdBQTBCLElBQUksR0FBRyxFQUFFLENBQUM7UUFDeEMsZUFBVSxHQUFzQyxFQUFFLENBQUM7UUFHL0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7UUFDeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7SUFDakMsQ0FBQztJQVZELHNCQUFXLDZCQUFPO2FBQWxCO1lBQ0ksT0FBTyxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDbkMsQ0FBQzs7O09BQUE7SUFVRCx1QkFBSSxHQUFKO1FBQ0ksSUFBSSxJQUFJLEdBQVcsY0FBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDeEMsSUFBSSxHQUFHLENBQUE7UUFDUCxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUU7WUFDUixJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxRQUFRLEVBQUU7Z0JBQzNCLEdBQUcsR0FBRyxJQUFJLENBQUM7YUFDZDs7Z0JBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7U0FDaEM7O1lBQU0sR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUNoQiw0Q0FBNEM7UUFDNUMsd0JBQXdCO1FBQ3hCLEtBQUssSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUM3QixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQy9CLElBQUksSUFBSSxHQUFHLElBQUksUUFBUSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMs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O2dCQUNqQyw0REFBNEQ7Z0JBQzVEO29CQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztvQkFDMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7aUJBQzNCO2FBQ0o7WUFDRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkIsQ0FBQzthQUNELFVBQVUsQ0FBTTtZQUNaLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ2hCLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDWixJQUFJLENBQUMsUUFBUSxHQUFHLGFBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQzthQUN0QztRQUNMLENBQUM7OztPQU5BO0lBc0JELHNCQUFJLDZCQUFPO2FBQVg7WUFDSSxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7WUFDYixHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUN2QixJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ1osR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7YUFDNUI7WUFDRCxPQUFPLEdBQUcsQ0FBQztRQUNmLENBQUM7OztPQUFBO0lBQ0wsZUFBQztBQUFELENBakRBLEFBaURDLElBQUE7QUFqRFksNEJBQVE7QUFtRHJCO0lBSUksd0JBQVksR0FBVyxFQUFFLE1BQVcsRUFBRSxLQUFjO1FBQ2hELElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FUQSxBQVNDLElBQUE7QUFUWSx3Q0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFV0aWxzIH0gZnJvbSBcIi4uL3V0aWxzL1V0aWxzXCI7XG5pbXBvcnQgeyBHbG9iYWxFdmVudCB9IGZyb20gXCIuL0dsb2JhbFwiO1xuaW1wb3J0IHsgRXZlbnRPbkRhdGFDaGFuZ2UgfSBmcm9tIFwiLi9HbG9iYWxFdmVudHNcIjtcbmltcG9ydCB7IHBtIH0gZnJvbSBcIi4vUG1NYW5hZ2VyXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2F2ZURhdGEge1xuICAgIHByaXZhdGUgX3NhdmVLZXk6IHN0cmluZztcbiAgICBwdWJsaWMgZ2V0IHNhdmVLZXkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zYXZlS2V5ICsgXCJfXCIgKyAxO1xuICAgIH1cblxuICAgIGxpc3Q6IE1hcDxzdHJpbmcsIERhdGFOb2RlPiA9IG5ldyBNYXAoKTtcbiAgICBub2RlQ29uZmlnOiB7IFtrZXk6IHN0cmluZ106IFNhdmVOb2RlQ29uZmlnIH0gPSB7fTtcblxuICAgIGNvbnN0cnVjdG9yKHNhdmVLZXk6IHN0cmluZywgbm9kZUNvbmZpZzogeyBba2V5OiBzdHJpbmddOiBTYXZlTm9kZUNvbmZpZyB9KSB7XG4gICAgICAgIHRoaXMuX3NhdmVLZXkgPSBzYXZlS2V5O1xuICAgICAgICB0aGlzLm5vZGVDb25maWcgPSBub2RlQ29uZmlnO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIGxldCBkYXRhOiBzdHJpbmcgPSBwbS5HZXQodGhpcy5zYXZlS2V5KTtcbiAgICAgICAgbGV0IHJlc1xuICAgICAgICBpZiAoISFkYXRhKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIChkYXRhKSAhPSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgcmVzID0gZGF0YTtcbiAgICAgICAgICAgIH0gZWxzZSByZXMgPSBKU09OLnBhcnNlKGRhdGEpXG4gICAgICAgIH0gZWxzZSByZXMgPSB7fTtcbiAgICAgICAgLy8gbGV0IHJlcyA9ICEhZGF0YSA/IEpTT04ucGFyc2UoZGF0YSkgOiB7fTtcbiAgICAgICAgLy8gbGV0IHJlcyA9IGRhdGEgfHwge307XG4gICAgICAgIGZvciAobGV0IGtleSBpbiB0aGlzLm5vZGVDb25maWcpIHtcbiAgICAgICAgICAgIGxldCBjZmcgPSB0aGlzLm5vZGVDb25maWdba2V5XTtcbiAgICAgICAgICAgIGxldCBub2RlID0gbmV3IERhdGFOb2RlKGNmZywgcmVzKTtcbiAgICAgICAgICAgIHRoaXMuYWRkTm9kZShub2RlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNhdmUoKSB7XG4gICAgICAgIGxldCByc3QgPSB7fTtcbiAgICAgICAgdGhpcy5saXN0LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBsZXQgb2JqID0gZWxlbWVudC5zYXZlT2JqO1xuICAgICAgICAgICAgcnN0W2VsZW1lbnQua2V5XSA9IG9iajtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIChsZXQga2V5IGluIHRoaXMubGlzdCkge1xuICAgICAgICAvLyAgICAgbGV0IG5vZGU6IERhdGFOb2RlID0gdGhpcy5saXN0W2tleV07XG4gICAgICAgIC8vICAgICBsZXQgb2JqID0gbm9kZS5zYXZlT2JqO1xuICAgICAgICAvLyAgICAgcnN0W2tleV0gPSBvYmo7XG4gICAgICAgIC8vIH1cbiAgICAgICAgcG0uU2V0KHRoaXMuc2F2ZUtleSwgSlNPTi5zdHJpbmdpZnkocnN0KSlcbiAgICB9XG5cbiAgICBhZGROb2RlKG5vZGU6IERhdGFOb2RlKSB7XG4gICAgICAgIHRoaXMubGlzdC5zZXQobm9kZS5rZXksIG5vZGUpO1xuICAgIH1cblxuICAgIGdldE5vZGUoa2V5OiBzdHJpbmcpOiBEYXRhTm9kZSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxpc3QuZ2V0KGtleSlcbiAgICB9XG5cbiAgICBnZXRWYWx1ZShrZXk6IHN0cmluZyk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldE5vZGUoa2V5KS52YWx1ZTtcbiAgICB9XG5cbiAgICBzZXRWYWx1ZShrZXk6IHN0cmluZywgdmFsdWU6IGFueSwgc2F2ZTogYm9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgbGV0IG5vZGUgPSB0aGlzLmdldE5vZGUoa2V5KTtcbiAgICAgICAgbm9kZS52YWx1ZSA9IHZhbHVlO1xuICAgICAgICBHbG9iYWxFdmVudC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudE9uRGF0YUNoYW5nZSh7IG1vZGVsOiB0aGlzLnNhdmVLZXksIGtleToga2V5LCB2YWx1ZTogbm9kZS52YWx1ZSB9KSk7XG4gICAgICAgIHNhdmUgJiYgdGhpcy5zYXZlKCk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YU5vZGUge1xuICAgIGtleTogc3RyaW5nO1xuICAgIGRhaWx5OiBib29sZWFuO1xuICAgIHNhdmVUaW1lOiBudW1iZXI7XG5cbiAgICBub3JtYWw6IGFueTtcblxuICAgIF92YWx1ZTogYW55O1xuICAgIGdldCB2YWx1ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZGFpbHkpIHtcbiAgICAgICAgICAgIGxldCBjdXJUaW1lID0gVXRpbHMuZ2V0Q3VyVGltZSgpO1xuICAgICAgICAgICAgaWYgKCFVdGlscy5pc1RvZGF5KHRoaXMuc2F2ZVRpbWUpKVxuICAgICAgICAgICAgLy8gaWYgKGN1clRpbWUgLSB0aGlzLnNhdmVUaW1lID49IEdsb2JhbERlZmluZXMuU2Vjb25kX0RheSkgXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdmFsdWUgPSB0aGlzLm5vcm1hbDtcbiAgICAgICAgICAgICAgICB0aGlzLnNhdmVUaW1lID0gY3VyVGltZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgfVxuICAgIHNldCB2YWx1ZSh2OiBhbnkpIHtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSB2O1xuICAgICAgICBpZiAodGhpcy5kYWlseSkge1xuICAgICAgICAgICAgdGhpcy5zYXZlVGltZSA9IFV0aWxzLmdldEN1clRpbWUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKGNmZzogU2F2ZU5vZGVDb25maWcsIHJlczogb2JqZWN0KSB7XG4gICAgICAgIHRoaXMua2V5ID0gY2ZnLmtleTtcbiAgICAgICAgdGhpcy5ub3JtYWwgPSBjZmcubm9ybWFsO1xuICAgICAgICB0aGlzLmRhaWx5ID0gY2ZnLmRhaWx5O1xuXG4gICAgICAgIGlmICghcmVzIHx8ICFyZXNbdGhpcy5rZXldKSB7XG4gICAgICAgICAgICB0aGlzLl92YWx1ZSA9IHRoaXMubm9ybWFsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IG5vZGUgPSByZXNbdGhpcy5rZXldO1xuICAgICAgICAgICAgdGhpcy5fdmFsdWUgPSBub2RlLnYgPT0gdW5kZWZpbmVkID8gdGhpcy5ub3JtYWwgOiBub2RlLnY7XG4gICAgICAgICAgICB0aGlzLnNhdmVUaW1lID0gbm9kZS50IHx8IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgc2F2ZU9iaigpIHtcbiAgICAgICAgbGV0IHJzdCA9IHt9O1xuICAgICAgICByc3RbXCJ2XCJdID0gdGhpcy5fdmFsdWU7XG4gICAgICAgIGlmICh0aGlzLmRhaWx5KSB7XG4gICAgICAgICAgICByc3RbXCJ0XCJdID0gdGhpcy5zYXZlVGltZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcnN0O1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNhdmVOb2RlQ29uZmlnIHtcbiAgICBrZXk6IHN0cmluZztcbiAgICBub3JtYWw6IGFueTtcbiAgICBkYWlseTogYm9vbGVhblxuICAgIGNvbnN0cnVjdG9yKGtleTogc3RyaW5nLCBub3JtYWw6IGFueSwgZGFpbHk6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5rZXkgPSBrZXk7XG4gICAgICAgIHRoaXMubm9ybWFsID0gbm9ybWFsO1xuICAgICAgICB0aGlzLmRhaWx5ID0gZGFpbHk7XG4gICAgfVxufVxuXG5cblxuIl19