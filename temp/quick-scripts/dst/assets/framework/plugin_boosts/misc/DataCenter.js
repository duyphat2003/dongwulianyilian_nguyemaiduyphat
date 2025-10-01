
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/plugin_boosts/misc/DataCenter.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2946dm7U5hPgIxciZRaL5Q+', 'DataCenter');
// framework/plugin_boosts/misc/DataCenter.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.field = exports.dc = void 0;
var EventManager_1 = require("../utils/EventManager");
var all_class_properties = {};
var all_registed_class = {};
function dc(name, serializable) {
    if (serializable === void 0) { serializable = true; }
    return function (target) {
        // target.endRegister(name);
        var proto = target['prototype'].constructor;
        // let cls = all_class_properties[proto]
        all_registed_class[target] = { name: name, serializable: serializable };
    };
}
exports.dc = dc;
function field(obj) {
    return function (target, propertyName) {
        if (obj && obj.default)
            target[propertyName] = obj.default;
        // target.register(propertyName,target[propertyName])
        var constructor = target.constructor;
        var cls = all_class_properties[constructor];
        if (cls == null) {
            cls = [];
            all_class_properties[constructor] = cls;
        }
        cls.push(propertyName);
    };
}
exports.field = field;
var DataCenter = /** @class */ (function () {
    function DataCenter() {
        this.__namespace = "DataCenter";
        this.kvs = {};
        this.kts = {};
        this.kvs = {};
        this.kts = {};
    }
    DataCenter.prototype.registerFields = function (namespace) {
        console.log(this);
        var target = this["__proto__"].constructor;
        var cls = all_class_properties[target];
        var cfg = all_registed_class[target];
        // let proto:any = target['prototype'];
        for (var i in cls) {
            var k = cls[i];
            if (typeof (k) == "function")
                continue;
            this.register(k, this[k]);
            delete this[k]; //删除默认属性 ,否则设置 setter getter 会失效
        }
        namespace = namespace || cfg.name;
        this.endRegister(namespace, cfg.serializable);
    };
    DataCenter.prototype.register = function (k, defaultValue) {
        var proto = this.constructor["prototype"];
        var self = this;
        proto.__defineGetter__(k, function () {
            return self.getData(k);
        });
        proto.__defineSetter__(k, function (s) {
            self.setData(k, s);
        });
        this.kvs[k] = defaultValue;
        var type = typeof (defaultValue);
        this.kts[k] = type;
        console.log("[DataCenter] register :" + k + ":" + defaultValue + "(" + type + ")");
    };
    DataCenter.prototype.setData = function (k, nv) {
        var v = this.kvs[k];
        if (v == nv)
            return;
        var type = this.kts[k];
        var kk = this._field_(k);
        if (type != typeof (nv)) {
            console.warn("[DataCenter] wrong type <" + typeof (nv) + "> for :" + kk + "<" + type + "> ,converting...");
            if (type == "number")
                nv = Number(nv);
            else if (type == "boolean") {
                nv = (nv == "true") ? true : false;
            }
        }
        this.kvs[k] = nv;
        console.log("[DataCenter] onValueChanged", kk, nv);
        EventManager_1.event.emit(kk, nv, v);
    };
    DataCenter.prototype._field_ = function (k) {
        return this.__namespace + "." + k;
    };
    DataCenter.prototype.getData = function (k) {
        return this.kvs[k];
    };
    DataCenter.prototype.limit = function (v, min, max) {
        if (v > max) {
            return max;
        }
        else if (v < min) {
            return 0;
        }
        else {
            return v;
        }
    };
    DataCenter.prototype.addData = function (k, c) {
        c = Number(c);
        if (c == null)
            return;
        var v = this.kvs[k];
        var nv = Number(v) + c;
        this.kvs[k] = nv;
        EventManager_1.event.emit(this._field_(k), nv, v);
    };
    DataCenter.prototype.load = function () {
        for (var k in this.kvs) {
            var fromstroage = localStorage.getItem(this._field_(k));
            var v = fromstroage;
            if (fromstroage) {
                var type = this.kts[k];
                if (type == "number") {
                    v = Number(fromstroage);
                }
                else if (type == "boolean") {
                    v = fromstroage == "true" ? true : false;
                }
            }
            else {
                v = this.getData(k);
            }
            this.kvs[k] = v;
        }
    };
    DataCenter.prototype.save = function () {
        console.log("[DataCenter] save :==================================");
        for (var k in this.kvs) {
            var v = this.kvs[k];
            var kk = this._field_(k);
            localStorage.setItem(kk, v.toString());
            console.log(cc.js.formatStr("%s:%s", kk, v));
        }
        console.log("[DataCenter] save succ :==================================");
        // localStorage.setItem("#1_coin",this.getData("coin"));
    };
    DataCenter.prototype.endRegister = function (s, serializable) {
        if (serializable === void 0) { serializable = true; }
        this.__namespace = s;
        DataCenter.alldata[s] = this;
        if (serializable) {
            this.load();
            this.save();
        }
    };
    DataCenter.off = function (k, callback, target) {
        EventManager_1.event.off(k, callback, target);
    };
    DataCenter.on = function (k, callback, target) {
        EventManager_1.event.on(k, callback, target);
        this.set(k, this.get(k));
    };
    DataCenter.get = function (k) {
        var strs = k.split(".");
        var namespace = strs[0];
        var name = strs[1];
        var target = DataCenter.alldata[namespace];
        if (target)
            return target[name];
        else
            return null;
    };
    DataCenter.set = function (k, v) {
        var strs = k.split(".");
        var namespace = strs[0];
        var name = strs[1];
        var target = DataCenter.alldata[namespace];
        if (target) {
            target[name] = v;
        }
    };
    DataCenter.register = function (cls) {
        var v = new cls();
        v.registerFields();
        return v;
    };
    DataCenter.alldata = {};
    return DataCenter;
}());
exports.default = DataCenter;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxwbHVnaW5fYm9vc3RzXFxtaXNjXFxEYXRhQ2VudGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0RBQThDO0FBRzlDLElBQU0sb0JBQW9CLEdBQUcsRUFBRSxDQUFBO0FBRS9CLElBQU0sa0JBQWtCLEdBQUcsRUFBRSxDQUFBO0FBQzdCLFNBQWdCLEVBQUUsQ0FBQyxJQUFJLEVBQUMsWUFBbUI7SUFBbkIsNkJBQUEsRUFBQSxtQkFBbUI7SUFFdkMsT0FBTyxVQUFVLE1BQVU7UUFFdkIsNEJBQTRCO1FBQzVCLElBQUksS0FBSyxHQUFPLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxXQUFXLENBQUM7UUFDaEQsd0NBQXdDO1FBQ3hDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUMsSUFBSSxNQUFBLEVBQUMsWUFBWSxjQUFBLEVBQUMsQ0FBQztJQUNyRCxDQUFDLENBQUE7QUFDTCxDQUFDO0FBVEQsZ0JBU0M7QUFDRCxTQUFnQixLQUFLLENBQUMsR0FBbUI7SUFDckMsT0FBTyxVQUFVLE1BQVcsRUFBRSxZQUFvQjtRQUM5QyxJQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsT0FBTztZQUNqQixNQUFNLENBQUMsWUFBWSxDQUFDLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQztRQUN2QyxxREFBcUQ7UUFDckQsSUFBSSxXQUFXLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQTtRQUNwQyxJQUFJLEdBQUcsR0FBRyxvQkFBb0IsQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUMzQyxJQUFHLEdBQUcsSUFBSSxJQUFJLEVBQ2Q7WUFDSSxHQUFHLEdBQUcsRUFBRSxDQUFBO1lBQ1Isb0JBQW9CLENBQUMsV0FBVyxDQUFDLEdBQUcsR0FBRyxDQUFDO1NBQzNDO1FBQ0QsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMzQixDQUFDLENBQUE7QUFDTCxDQUFDO0FBZEQsc0JB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TSxjQUFHLEdBQVYsVUFBVyxDQUFDO1FBRVIsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUN2QixJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25CLElBQUksTUFBTSxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDMUMsSUFBRyxNQUFNO1lBQ0wsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUE7O1lBRW5CLE9BQU8sSUFBSSxDQUFDO0lBQ3BCLENBQUM7SUFFTSxjQUFHLEdBQVYsVUFBVyxDQUFDLEVBQUMsQ0FBQztRQUVWLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDdkIsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuQixJQUFJLE1BQU0sR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQzFDLElBQUcsTUFBTSxFQUNUO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNwQjtJQUNMLENBQUM7SUFFTSxtQkFBUSxHQUFmLFVBQWdCLEdBQUc7UUFFZixJQUFJLENBQUMsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQTtRQUNsQixPQUFPLENBQUMsQ0FBQztJQUNiLENBQUM7SUExTE0sa0JBQU8sR0FBRyxFQUFFLENBQUE7SUEyTHZCLGlCQUFDO0NBOUxELEFBOExDLElBQUE7a0JBOUxvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXZlbnQgfSBmcm9tIFwiLi4vdXRpbHMvRXZlbnRNYW5hZ2VyXCI7XHJcblxyXG5cclxuY29uc3QgYWxsX2NsYXNzX3Byb3BlcnRpZXMgPSB7fVxyXG5cclxuY29uc3QgYWxsX3JlZ2lzdGVkX2NsYXNzID0ge31cclxuZXhwb3J0IGZ1bmN0aW9uIGRjKG5hbWUsc2VyaWFsaXphYmxlID0gdHJ1ZSk6RnVuY3Rpb25cclxue1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQ6YW55KVxyXG4gICAge1xyXG4gICAgICAgIC8vIHRhcmdldC5lbmRSZWdpc3RlcihuYW1lKTtcclxuICAgICAgICBsZXQgcHJvdG86YW55ID0gdGFyZ2V0Wydwcm90b3R5cGUnXS5jb25zdHJ1Y3RvcjtcclxuICAgICAgICAvLyBsZXQgY2xzID0gYWxsX2NsYXNzX3Byb3BlcnRpZXNbcHJvdG9dXHJcbiAgICAgICAgYWxsX3JlZ2lzdGVkX2NsYXNzW3RhcmdldF0gPSB7bmFtZSxzZXJpYWxpemFibGV9O1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBmaWVsZChvYmo/OntkZWZhdWx0Pzphbnl9KSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldDogYW55LCBwcm9wZXJ0eU5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIGlmKG9iaiAmJiBvYmouZGVmYXVsdClcclxuICAgICAgICAgICAgdGFyZ2V0W3Byb3BlcnR5TmFtZV0gPSBvYmouZGVmYXVsdDtcclxuICAgICAgICAvLyB0YXJnZXQucmVnaXN0ZXIocHJvcGVydHlOYW1lLHRhcmdldFtwcm9wZXJ0eU5hbWVdKVxyXG4gICAgICAgIGxldCBjb25zdHJ1Y3RvciA9IHRhcmdldC5jb25zdHJ1Y3RvclxyXG4gICAgICAgIGxldCBjbHMgPSBhbGxfY2xhc3NfcHJvcGVydGllc1tjb25zdHJ1Y3Rvcl1cclxuICAgICAgICBpZihjbHMgPT0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNscyA9IFtdXHJcbiAgICAgICAgICAgIGFsbF9jbGFzc19wcm9wZXJ0aWVzW2NvbnN0cnVjdG9yXSA9IGNscztcclxuICAgICAgICB9XHJcbiAgICAgICAgY2xzLnB1c2gocHJvcGVydHlOYW1lKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGFDZW50ZXJcclxue1xyXG4gICAgcHJpdmF0ZSBfX25hbWVzcGFjZTpzdHJpbmcgPSBcIkRhdGFDZW50ZXJcIlxyXG4gICAgc3RhdGljIGFsbGRhdGEgPSB7fVxyXG4gICAgcHJpdmF0ZSBrdnMgPSB7fVxyXG4gICAgcHJpdmF0ZSBrdHMgPSB7fVxyXG4gICAgY29uc3RydWN0b3IoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMua3ZzID0ge31cclxuICAgICAgICB0aGlzLmt0cyA9IHt9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZWdpc3RlckZpZWxkcyhuYW1lc3BhY2U/KVxyXG4gICAge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMpO1xyXG4gICAgICAgIGxldCB0YXJnZXQgPSB0aGlzW1wiX19wcm90b19fXCJdLmNvbnN0cnVjdG9yIFxyXG4gICAgICAgIGxldCBjbHMgPSBhbGxfY2xhc3NfcHJvcGVydGllc1t0YXJnZXRdXHJcbiAgICAgICAgbGV0IGNmZyA9IGFsbF9yZWdpc3RlZF9jbGFzc1t0YXJnZXRdXHJcbiAgICAgICAgLy8gbGV0IHByb3RvOmFueSA9IHRhcmdldFsncHJvdG90eXBlJ107XHJcbiAgICAgICAgZm9yKHZhciBpIGluIGNscylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBrID0gY2xzW2ldO1xyXG4gICAgICAgICAgICBpZih0eXBlb2YoaykgPT0gXCJmdW5jdGlvblwiKSBjb250aW51ZTtcclxuICAgICAgICAgICAgdGhpcy5yZWdpc3RlcihrLHRoaXNba10pXHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzW2tdOyAvL+WIoOmZpOm7mOiupOWxnuaApyAs5ZCm5YiZ6K6+572uIHNldHRlciBnZXR0ZXIg5Lya5aSx5pWIXHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5hbWVzcGFjZSA9IG5hbWVzcGFjZSB8fCAgY2ZnLm5hbWU7XHJcbiAgICAgICAgdGhpcy5lbmRSZWdpc3RlcihuYW1lc3BhY2UsY2ZnLnNlcmlhbGl6YWJsZSlcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RlcihrLGRlZmF1bHRWYWx1ZSlcclxuICAgIHtcclxuICAgICAgICBsZXQgcHJvdG86YW55ID0gdGhpcy5jb25zdHJ1Y3RvcltcInByb3RvdHlwZVwiXVxyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBwcm90by5fX2RlZmluZUdldHRlcl9fKGssZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgcmV0dXJuIHNlbGYuZ2V0RGF0YShrKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHByb3RvLl9fZGVmaW5lU2V0dGVyX18oayxmdW5jdGlvbihzKXtcclxuICAgICAgICAgICAgc2VsZi5zZXREYXRhKGsscylcclxuICAgICAgICB9KSBcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmt2c1trXSA9IGRlZmF1bHRWYWx1ZTtcclxuICAgICAgICBsZXQgdHlwZSA9IHR5cGVvZihkZWZhdWx0VmFsdWUpO1xyXG4gICAgICAgIHRoaXMua3RzW2tdID0gIHR5cGU7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJbRGF0YUNlbnRlcl0gcmVnaXN0ZXIgOlwiICsgayArIFwiOlwiICsgZGVmYXVsdFZhbHVlICtcIihcIit0eXBlK1wiKVwiKVxyXG4gICAgfVxyXG4gXHJcbiAgICBzZXREYXRhKGssbnYpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHYgPSB0aGlzLmt2c1trXVxyXG4gICAgICAgIGlmKHYgPT0gbnYgKSByZXR1cm47XHJcbiAgICAgICAgbGV0IHR5cGUgPSB0aGlzLmt0c1trXVxyXG4gICAgICAgIGxldCBrayA9dGhpcy5fZmllbGRfKGspXHJcbiAgICAgICAgaWYodHlwZSAhPSB0eXBlb2YobnYpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiW0RhdGFDZW50ZXJdIHdyb25nIHR5cGUgPFwiK3R5cGVvZihudikrXCI+IGZvciA6XCIgKyBrayArXCI8XCIrdHlwZStcIj4gLGNvbnZlcnRpbmcuLi5cIilcclxuICAgICAgICAgICAgaWYodHlwZSA9PSBcIm51bWJlclwiKVxyXG4gICAgICAgICAgICAgICAgbnYgPSBOdW1iZXIobnYpXHJcbiAgICAgICAgICAgIGVsc2UgaWYodHlwZSA9PSBcImJvb2xlYW5cIilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbnYgPSAobnYgPT0gXCJ0cnVlXCIpID8gdHJ1ZSA6ZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmt2c1trXSA9IG52O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiW0RhdGFDZW50ZXJdIG9uVmFsdWVDaGFuZ2VkXCIgLCBrayxudik7XHJcbiAgICAgICAgZXZlbnQuZW1pdChrayxudix2KVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2ZpZWxkXyhrKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9fbmFtZXNwYWNlICtcIi5cIiArIGtcclxuICAgIH1cclxuXHJcbiAgICBnZXREYXRhKGspXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMua3ZzW2tdO1xyXG4gICAgfVxyXG5cclxuICAgIGxpbWl0KHYsbWluLG1heClcclxuICAgIHtcclxuICAgICAgICBpZih2ID4gbWF4KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG1heDtcclxuICAgICAgICB9ZWxzZSBpZih2IDwgbWluKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiB2O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhZGREYXRhKGssYylcclxuICAgIHtcclxuICAgICAgICBjID0gTnVtYmVyKGMpXHJcbiAgICAgICAgaWYoYyA9PSBudWxsKSByZXR1cm47XHJcbiAgICAgICAgbGV0IHYgPSB0aGlzLmt2c1trXVxyXG4gICAgICAgIGxldCBudiA9ICBOdW1iZXIodikgKyBjXHJcbiAgICAgICAgdGhpcy5rdnNba10gPSBudlxyXG4gICAgICAgIGV2ZW50LmVtaXQodGhpcy5fZmllbGRfKGspLG52LHYpXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBsb2FkKClcclxuICAgIHtcclxuICAgICAgICBmb3IgKHZhciBrIGluIHRoaXMua3ZzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGZyb21zdHJvYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5fZmllbGRfKGspKVxyXG4gICAgICAgICAgICBsZXQgdjphbnkgPSBmcm9tc3Ryb2FnZVxyXG4gICAgICAgICAgICBpZihmcm9tc3Ryb2FnZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IHR5cGUgPSB0aGlzLmt0c1trXVxyXG4gICAgICAgICAgICAgICAgaWYodHlwZSA9PSBcIm51bWJlclwiKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHYgPSBOdW1iZXIoZnJvbXN0cm9hZ2UpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYodHlwZSA9PSBcImJvb2xlYW5cIilcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB2ID0gZnJvbXN0cm9hZ2UgPT0gXCJ0cnVlXCI/dHJ1ZTpmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB2ID0gdGhpcy5nZXREYXRhKGspO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMua3ZzW2tdID0gdjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZSgpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJbRGF0YUNlbnRlcl0gc2F2ZSA6PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVwiKVxyXG4gICAgICAgIGZvciAodmFyIGsgaW4gdGhpcy5rdnMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgdiA9IHRoaXMua3ZzW2tdXHJcbiAgICAgICAgICAgIGxldCBrayA9IHRoaXMuX2ZpZWxkXyhrKVxyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrayx2LnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjYy5qcy5mb3JtYXRTdHIoXCIlczolc1wiICxrayx2KSlcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJbRGF0YUNlbnRlcl0gc2F2ZSBzdWNjIDo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XCIpXHJcbiAgICAgICAgLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCIjMV9jb2luXCIsdGhpcy5nZXREYXRhKFwiY29pblwiKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBlbmRSZWdpc3RlcihzICxzZXJpYWxpemFibGUgPSB0cnVlKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuX19uYW1lc3BhY2UgPSBzO1xyXG4gICAgICAgIERhdGFDZW50ZXIuYWxsZGF0YVtzXSA9IHRoaXM7XHJcbiAgICAgICAgaWYoc2VyaWFsaXphYmxlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5sb2FkKClcclxuICAgICAgICAgICAgdGhpcy5zYXZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBvZmYoayxjYWxsYmFjayx0YXJnZXQ/KVxyXG4gICAge1xyXG4gICAgICAgIGV2ZW50Lm9mZihrLGNhbGxiYWNrLHRhcmdldCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIG9uKGssY2FsbGJhY2ssdGFyZ2V0PylcclxuICAgIHtcclxuICAgICAgIGV2ZW50Lm9uKGsgLGNhbGxiYWNrLHRhcmdldClcclxuICAgICAgIHRoaXMuc2V0KGssdGhpcy5nZXQoaykpIFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQoaylcclxuICAgIHtcclxuICAgICAgICBsZXQgc3RycyA9IGsuc3BsaXQoXCIuXCIpXHJcbiAgICAgICAgbGV0IG5hbWVzcGFjZSA9IHN0cnNbMF07XHJcbiAgICAgICAgbGV0IG5hbWUgPSBzdHJzWzFdO1xyXG4gICAgICAgIGxldCB0YXJnZXQgPSBEYXRhQ2VudGVyLmFsbGRhdGFbbmFtZXNwYWNlXVxyXG4gICAgICAgIGlmKHRhcmdldClcclxuICAgICAgICAgICAgcmV0dXJuIHRhcmdldFtuYW1lXVxyXG4gICAgICAgIGVsc2UgXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzZXQoayx2KVxyXG4gICAge1xyXG4gICAgICAgIGxldCBzdHJzID0gay5zcGxpdChcIi5cIilcclxuICAgICAgICBsZXQgbmFtZXNwYWNlID0gc3Ryc1swXTtcclxuICAgICAgICBsZXQgbmFtZSA9IHN0cnNbMV07XHJcbiAgICAgICAgbGV0IHRhcmdldCA9IERhdGFDZW50ZXIuYWxsZGF0YVtuYW1lc3BhY2VdXHJcbiAgICAgICAgaWYodGFyZ2V0KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGFyZ2V0W25hbWVdID0gdjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHJlZ2lzdGVyKGNscylcclxuICAgIHtcclxuICAgICAgICBsZXQgdiA9IG5ldyBjbHMoKTtcclxuICAgICAgICB2LnJlZ2lzdGVyRmllbGRzKClcclxuICAgICAgICByZXR1cm4gdjtcclxuICAgIH1cclxufSJdfQ==