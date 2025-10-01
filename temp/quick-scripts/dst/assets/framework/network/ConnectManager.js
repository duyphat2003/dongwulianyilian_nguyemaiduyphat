
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/network/ConnectManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ac5faec2blDKJorwXTfZFZx', 'ConnectManager');
// framework/network/ConnectManager.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.connManager = void 0;
var Socket_1 = require("./Socket");
var ConnectManager = /** @class */ (function () {
    function ConnectManager() {
        this._allConns = null;
        this._allConns = {};
    }
    ConnectManager.getInstance = function () {
        if (this._instance == null) {
            this._instance = new ConnectManager();
        }
        return this._instance;
    };
    ConnectManager.prototype.create = function (name, conf) {
        if (this._allConns[name] == null) {
            var socket = new Socket_1.Socket(conf);
            this._allConns[name] = socket;
            if (this._defaultKey == null)
                this._defaultKey = name;
        }
    };
    ConnectManager.prototype.setDefaultKey = function (key) {
        if (key != null && this._allConns[key]) {
            this._defaultKey = key;
        }
    };
    ConnectManager.prototype.getDefault = function () {
        return this.getConn(this._defaultKey);
    };
    ConnectManager.prototype.getConn = function (name) {
        if (name == null)
            return null;
        if (this._allConns[name] != null) {
            return this._allConns[name];
        }
        return null;
    };
    ConnectManager.prototype.sendMessage = function (msg, name) {
        if (name == null)
            name = this._defaultKey;
        var conn = this.getConn(name);
        if (conn != null) {
            conn.sendMessage(msg);
        }
    };
    ConnectManager.prototype.enableHeartbeat = function (name) {
        var conn = this.getConn(name);
        conn.enableHeartbeat(true);
    };
    ConnectManager.prototype.sendCustomMessage = function (msg) {
        var conn = this.getConn(this._defaultKey);
        if (conn != null)
            conn.sendCustomMessage(msg);
    };
    ConnectManager.prototype.remove = function (name) {
        var conn = this.getConn(name);
        if (conn != null) {
            delete this._allConns[name];
            conn.close();
        }
    };
    ConnectManager._instance = null;
    return ConnectManager;
}());
exports.connManager = ConnectManager.getInstance();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxuZXR3b3JrXFxDb25uZWN0TWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1DQUFrQztBQUlsQztJQWFDO1FBRlEsY0FBUyxHQUE2QixJQUFJLENBQUM7UUFHbEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQVphLDBCQUFXLEdBQXpCO1FBQ0MsSUFBRyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksRUFBQztZQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksY0FBYyxFQUFFLENBQUM7U0FDdEM7UUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDdkIsQ0FBQztJQVNNLCtCQUFNLEdBQWIsVUFBYyxJQUFZLEVBQUUsSUFBUztRQUNwQyxJQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFDO1lBQy9CLElBQUksTUFBTSxHQUFHLElBQUksZUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDO1lBQzlCLElBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJO2dCQUMxQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztTQUN6QjtJQUNGLENBQUM7SUFFTSxzQ0FBYSxHQUFwQixVQUFxQixHQUFXO1FBQy9CLElBQUcsR0FBRyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO1NBQ3ZCO0lBQ0YsQ0FBQztJQUVNLG1DQUFVLEdBQWpCO1FBQ0MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRU0sZ0NBQU8sR0FBZCxVQUFlLElBQVk7UUFDMUIsSUFBRyxJQUFJLElBQUksSUFBSTtZQUFFLE9BQU8sSUFBSSxDQUFDO1FBQzdCLElBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUM7WUFDL0IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzVCO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO0lBRU0sb0NBQVcsR0FBbEIsVUFBbUIsR0FBWSxFQUFFLElBQWE7UUFDN0MsSUFBRyxJQUFJLElBQUksSUFBSTtZQUFFLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3pDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUIsSUFBRyxJQUFJLElBQUksSUFBSSxFQUFDO1lBQ2YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN0QjtJQUNGLENBQUM7SUFFTSx3Q0FBZSxHQUF0QixVQUF1QixJQUFZO1FBQ2xDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRU0sMENBQWlCLEdBQXhCLFVBQXlCLEdBQVk7UUFDcEMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDMUMsSUFBSSxJQUFJLElBQUksSUFBSTtZQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRU0sK0JBQU0sR0FBYixVQUFjLElBQVk7UUFDekIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QixJQUFHLElBQUksSUFBSSxJQUFJLEVBQUM7WUFDZixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDNUIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2I7SUFDRixDQUFDO0lBbEVjLHdCQUFTLEdBQW1CLElBQUksQ0FBQztJQW9FakQscUJBQUM7Q0F0RUQsQUFzRUMsSUFBQTtBQUVVLFFBQUEsV0FBVyxHQUFtQixjQUFjLENBQUMsV0FBVyxFQUFFLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTb2NrZXQgfSBmcm9tIFwiLi9Tb2NrZXRcIjtcclxuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gXCIuL01lc3NhZ2VcIjtcclxuXHJcblxyXG5jbGFzcyBDb25uZWN0TWFuYWdlciB7XHJcblx0XHJcblx0cHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBDb25uZWN0TWFuYWdlciA9IG51bGw7XHJcblx0cHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBDb25uZWN0TWFuYWdlcntcclxuXHRcdGlmKHRoaXMuX2luc3RhbmNlID09IG51bGwpe1xyXG5cdFx0XHR0aGlzLl9pbnN0YW5jZSA9IG5ldyBDb25uZWN0TWFuYWdlcigpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRoaXMuX2luc3RhbmNlO1xyXG5cdH1cclxuXHRcclxuXHRwcml2YXRlIF9kZWZhdWx0S2V5OiBzdHJpbmc7XHJcblx0cHJpdmF0ZSBfYWxsQ29ubnM6IHsgW25hbWU6c3RyaW5nXTogU29ja2V0fSA9IG51bGw7XHJcblxyXG5cdHB1YmxpYyBjb25zdHJ1Y3Rvcigpe1xyXG5cdFx0dGhpcy5fYWxsQ29ubnMgPSB7fTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBjcmVhdGUobmFtZTogc3RyaW5nLCBjb25mOiBhbnkpe1xyXG5cdFx0aWYodGhpcy5fYWxsQ29ubnNbbmFtZV0gPT0gbnVsbCl7XHJcblx0XHRcdGxldCBzb2NrZXQgPSBuZXcgU29ja2V0KGNvbmYpO1xyXG5cdFx0XHR0aGlzLl9hbGxDb25uc1tuYW1lXSA9IHNvY2tldDtcclxuXHRcdFx0aWYodGhpcy5fZGVmYXVsdEtleSA9PSBudWxsKVxyXG5cdFx0XHRcdHRoaXMuX2RlZmF1bHRLZXkgPSBuYW1lO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHVibGljIHNldERlZmF1bHRLZXkoa2V5OiBzdHJpbmcpe1xyXG5cdFx0aWYoa2V5ICE9IG51bGwgJiYgdGhpcy5fYWxsQ29ubnNba2V5XSkge1xyXG5cdFx0XHR0aGlzLl9kZWZhdWx0S2V5ID0ga2V5O1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHVibGljIGdldERlZmF1bHQoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5nZXRDb25uKHRoaXMuX2RlZmF1bHRLZXkpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldENvbm4obmFtZTogc3RyaW5nKXtcclxuXHRcdGlmKG5hbWUgPT0gbnVsbCkgcmV0dXJuIG51bGw7XHJcblx0XHRpZih0aGlzLl9hbGxDb25uc1tuYW1lXSAhPSBudWxsKXtcclxuXHRcdFx0cmV0dXJuIHRoaXMuX2FsbENvbm5zW25hbWVdO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2VuZE1lc3NhZ2UobXNnOiBNZXNzYWdlLCBuYW1lPzogc3RyaW5nKXtcclxuXHRcdGlmKG5hbWUgPT0gbnVsbCkgbmFtZSA9IHRoaXMuX2RlZmF1bHRLZXk7XHJcblx0XHRsZXQgY29ubiA9IHRoaXMuZ2V0Q29ubihuYW1lKTtcclxuXHRcdGlmKGNvbm4gIT0gbnVsbCl7XHJcblx0XHRcdGNvbm4uc2VuZE1lc3NhZ2UobXNnKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBlbmFibGVIZWFydGJlYXQobmFtZTogc3RyaW5nKSB7XHJcblx0XHRsZXQgY29ubiA9IHRoaXMuZ2V0Q29ubihuYW1lKTtcclxuXHRcdGNvbm4uZW5hYmxlSGVhcnRiZWF0KHRydWUpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNlbmRDdXN0b21NZXNzYWdlKG1zZzogTWVzc2FnZSl7XHJcblx0XHRsZXQgY29ubiA9IHRoaXMuZ2V0Q29ubih0aGlzLl9kZWZhdWx0S2V5KTtcclxuXHRcdGlmIChjb25uICE9IG51bGwpIGNvbm4uc2VuZEN1c3RvbU1lc3NhZ2UobXNnKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyByZW1vdmUobmFtZTogc3RyaW5nKXtcclxuXHRcdGxldCBjb25uID0gdGhpcy5nZXRDb25uKG5hbWUpO1xyXG5cdFx0aWYoY29ubiAhPSBudWxsKXtcclxuXHRcdFx0ZGVsZXRlIHRoaXMuX2FsbENvbm5zW25hbWVdO1xyXG5cdFx0XHRjb25uLmNsb3NlKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG59XHJcblxyXG5leHBvcnQgdmFyIGNvbm5NYW5hZ2VyOiBDb25uZWN0TWFuYWdlciA9IENvbm5lY3RNYW5hZ2VyLmdldEluc3RhbmNlKCk7Il19