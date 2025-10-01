
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/network/Socket.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8cfb4mvQk5BQqbWZvml7K36', 'Socket');
// framework/network/Socket.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Socket = void 0;
var MessageHandler_1 = require("./MessageHandler");
var MessageType_1 = require("./MessageType");
/**
* name
*/
var Socket = /** @class */ (function () {
    function Socket(conf) {
        this._config = null;
        this._reconnetTimes = 200;
        this._defaultTimeout = 10000;
        this.retryTimer = 0;
        this.initSocket(conf);
    }
    Socket.prototype.initSocket = function (conf) {
        this._config = conf;
        if (!this._config.timeout)
            this._config.timeout = this._defaultTimeout;
        if (this._config.retime)
            this._reconnetTimes = this._config.retime;
        this.connect();
    };
    Socket.prototype.connect = function () {
        var _this = this;
        var addr = this._config.host;
        if (this._config.port) {
            addr = this._config.host + ":" + this._config.port;
        }
        console.log("start connect server>>>>", addr);
        this._webSocket = new WebSocket(addr);
        this._messageHandler = new MessageHandler_1.MessageHandler(this._webSocket);
        // this._webSocket.endian = Laya.Byte.BIG_ENDIAN;
        // if(this._config.timeout)this._webSocket.timeout=this._config.timeout;
        this._webSocket.onopen = function (event) { return _this.onSocketOpen(); };
        this._webSocket.onmessage = function (event) { return _this.onReceiveMessage(event); };
        this._webSocket.onclose = function (event) { return _this.onSocketClose(); };
        this._webSocket.onerror = function (event) { return _this.onSocketError(); };
    };
    Socket.prototype.close = function () {
        if (this._webSocket) {
            // this._webSocket.offAll(null);
            this._webSocket.close();
        }
    };
    Socket.prototype.flush = function () {
        // if(this._webSocket.connected){
        // this._webSocket.flush();
        // }
    };
    Socket.prototype.enableHeartbeat = function (enable) {
        this._messageHandler.enableHeartbeat = enable;
    };
    Socket.prototype.onSocketOpen = function () {
        console.log("connect " + this._config.host + " success");
        this._messageHandler.dispatch(MessageType_1.SocketTag.KSOCKET_OPEN, "");
    };
    Socket.prototype.onReceiveMessage = function (event) {
        var _this = this;
        if (event === void 0) { event = null; }
        console.log("websocket receive message:" + event.data);
        if (typeof (wx) == "undefined") {
            this.toArrayBuffer(event.data).then(function (arrbuf) {
                _this._messageHandler.dispatch(MessageType_1.SocketTag.KSOCKET_MESSAGE, arrbuf);
            });
        }
        else {
            this._messageHandler.dispatch(MessageType_1.SocketTag.KSOCKET_MESSAGE, event.data);
        }
    };
    Socket.prototype.toArrayBuffer = function (blob) {
        //将Blob 对象转换成 ArrayBuffer
        var arrayBuffer;
        var reader = new FileReader();
        reader.readAsArrayBuffer(blob);
        return new Promise(function (resolve, reject) {
            reader.onload = function (e) {
                arrayBuffer = reader.result;
                resolve(arrayBuffer);
            };
        });
    };
    Socket.prototype.sendMessage = function (msg) {
        if (this._webSocket.readyState == WebSocket.OPEN) {
            this._messageHandler.sendMessage(msg);
            return true;
        }
        return false;
    };
    Socket.prototype.sendCustomMessage = function (msg) {
        this._messageHandler.dispatchMessage(msg);
    };
    Socket.prototype.reconnect = function () {
        var _this = this;
        // cc.director.getScheduler().unscheduleAllForTarget(this);
        if (Socket.count >= 2 || this._webSocket.readyState == WebSocket.OPEN) {
            clearTimeout(this.retryTimer);
        }
        else {
            if (this._webSocket.readyState == WebSocket.CLOSED) {
                this.connect();
            }
            this.retryTimer = setTimeout(function () {
                _this.reconnect();
            }, this._reconnetTimes);
        }
    };
    Socket.prototype.onSocketClose = function (e) {
        if (e === void 0) { e = null; }
        this._messageHandler.dispatch(MessageType_1.SocketTag.KSOCKET_CLOSE, "");
        console.log("websocket connect close.", this._webSocket.readyState);
        this.close();
        this.reconnect();
    };
    Socket.prototype.onSocketError = function (e) {
        if (e === void 0) { e = null; }
        this._messageHandler.dispatch(MessageType_1.SocketTag.KSOCKET_ERROR, "");
        console.log("websocket io error.");
        // this.reconnect(true);
    };
    Socket.count = 0;
    return Socket;
}());
exports.Socket = Socket;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxuZXR3b3JrXFxTb2NrZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtREFBa0Q7QUFDbEQsNkNBQXVDO0FBRXZDOztFQUVFO0FBRUY7SUFPQyxnQkFBbUIsSUFBSTtRQU5mLFlBQU8sR0FBUSxJQUFJLENBQUM7UUFHcEIsbUJBQWMsR0FBVSxHQUFHLENBQUM7UUFDNUIsb0JBQWUsR0FBVyxLQUFLLENBQUM7UUFDeEMsZUFBVSxHQUFVLENBQUMsQ0FBQztRQUVyQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFHTywyQkFBVSxHQUFsQixVQUFtQixJQUFRO1FBQzFCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU87WUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO1FBQ3RFLElBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNO1lBQUUsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztRQUNsRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUE7SUFDZixDQUFDO0lBRU8sd0JBQU8sR0FBZjtRQUFBLGlCQWlCQztRQWhCQSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztRQUM3QixJQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUNwQjtZQUNDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRSxHQUFHLEdBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUE7U0FDaEQ7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixFQUFHLElBQUksQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLCtCQUFjLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzNELGlEQUFpRDtRQUNqRCx3RUFBd0U7UUFFeEUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsVUFBQyxLQUFLLElBQUcsT0FBQSxLQUFJLENBQUMsWUFBWSxFQUFFLEVBQW5CLENBQW1CLENBQUM7UUFDdEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsVUFBQyxLQUFLLElBQUcsT0FBQSxLQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLEVBQTVCLENBQTRCLENBQUM7UUFDbEUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEdBQUcsVUFBQyxLQUFLLElBQUcsT0FBQSxLQUFJLENBQUMsYUFBYSxFQUFFLEVBQXBCLENBQW9CLENBQUM7UUFDeEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEdBQUcsVUFBQyxLQUFLLElBQUcsT0FBQSxLQUFJLENBQUMsYUFBYSxFQUFFLEVBQXBCLENBQW9CLENBQUM7SUFFekQsQ0FBQztJQUVNLHNCQUFLLEdBQVo7UUFDQyxJQUFHLElBQUksQ0FBQyxVQUFVLEVBQUM7WUFDbEIsZ0NBQWdDO1lBQ2hDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDeEI7SUFDRixDQUFDO0lBRU0sc0JBQUssR0FBWjtRQUNDLGlDQUFpQztRQUNoQywyQkFBMkI7UUFDNUIsSUFBSTtJQUNMLENBQUM7SUFFTSxnQ0FBZSxHQUF0QixVQUF1QixNQUFNO1FBQzVCLElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQztJQUMvQyxDQUFDO0lBRU8sNkJBQVksR0FBcEI7UUFDQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRSxVQUFVLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyx1QkFBUyxDQUFDLFlBQVksRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRU8saUNBQWdCLEdBQXhCLFVBQXlCLEtBQWlCO1FBQTFDLGlCQVVDO1FBVndCLHNCQUFBLEVBQUEsWUFBaUI7UUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkQsSUFBSSxPQUFNLENBQUMsRUFBRSxDQUFDLElBQUksV0FBVyxFQUM3QjtZQUNDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLE1BQU07Z0JBQ3pDLEtBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLHVCQUFTLENBQUMsZUFBZSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ2xFLENBQUMsQ0FBQyxDQUFBO1NBQ0Y7YUFBSTtZQUNKLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLHVCQUFTLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNyRTtJQUNGLENBQUM7SUFFTyw4QkFBYSxHQUFyQixVQUFzQixJQUFJO1FBRXpCLHlCQUF5QjtRQUN6QixJQUFJLFdBQVcsQ0FBQztRQUNoQixJQUFJLE1BQU0sR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO1FBQzlCLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFDLE1BQU07WUFDakMsTUFBTSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUM7Z0JBQzFCLFdBQVcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO2dCQUM1QixPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDdEIsQ0FBQyxDQUFBO1FBQ0YsQ0FBQyxDQUFDLENBQUE7SUFDSCxDQUFDO0lBR00sNEJBQVcsR0FBbEIsVUFBbUIsR0FBWTtRQUM5QixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxJQUFJLFNBQVMsQ0FBQyxJQUFJLEVBQUU7WUFDakQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdEMsT0FBTyxJQUFJLENBQUM7U0FDWjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2QsQ0FBQztJQUVNLGtDQUFpQixHQUF4QixVQUF5QixHQUFZO1FBQ3BDLElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFJTywwQkFBUyxHQUFqQjtRQUFBLGlCQWNDO1FBYkEsMkRBQTJEO1FBQzNELElBQUcsTUFBTSxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLElBQUksU0FBUyxDQUFDLElBQUksRUFDbEU7WUFDQyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQzlCO2FBQUk7WUFDSixJQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxJQUFJLFNBQVMsQ0FBQyxNQUFNLEVBQ2pEO2dCQUNDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUNmO1lBQ0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7Z0JBQzVCLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNsQixDQUFDLEVBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFBO1NBQ3RCO0lBQ0YsQ0FBQztJQUVNLDhCQUFhLEdBQXBCLFVBQXFCLENBQWE7UUFBYixrQkFBQSxFQUFBLFFBQWE7UUFDakMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsdUJBQVMsQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDM0QsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3BFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRU0sOEJBQWEsR0FBcEIsVUFBcUIsQ0FBYTtRQUFiLGtCQUFBLEVBQUEsUUFBYTtRQUNqQyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyx1QkFBUyxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUMzRCxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDbkMsd0JBQXdCO0lBQ3pCLENBQUM7SUE3Qk0sWUFBSyxHQUFHLENBQUMsQ0FBQztJQThCbEIsYUFBQztDQWpJRCxBQWlJQyxJQUFBO0FBaklZLHdCQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWVzc2FnZUhhbmRsZXIgfSBmcm9tIFwiLi9NZXNzYWdlSGFuZGxlclwiO1xyXG5pbXBvcnQge1NvY2tldFRhZ30gZnJvbSBcIi4vTWVzc2FnZVR5cGVcIlxyXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSBcIi4vTWVzc2FnZVwiO1xyXG4vKipcclxuKiBuYW1lIFxyXG4qL1xyXG5cclxuZXhwb3J0IGNsYXNzIFNvY2tldHtcclxuXHRwcml2YXRlIF9jb25maWc6IGFueSA9IG51bGw7XHJcblx0cHJpdmF0ZSBfd2ViU29ja2V0OiBXZWJTb2NrZXQ7XHJcblx0cHJpdmF0ZSBfbWVzc2FnZUhhbmRsZXI6IE1lc3NhZ2VIYW5kbGVyO1xyXG5cdHByaXZhdGUgX3JlY29ubmV0VGltZXM6bnVtYmVyID0gMjAwO1xyXG5cdHByaXZhdGUgX2RlZmF1bHRUaW1lb3V0OiBudW1iZXIgPSAxMDAwMDtcclxuXHRyZXRyeVRpbWVyOm51bWJlciA9IDA7XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKGNvbmYpIHtcclxuXHRcdHRoaXMuaW5pdFNvY2tldChjb25mKTtcclxuXHR9XHJcblxyXG5cclxuXHRwcml2YXRlIGluaXRTb2NrZXQoY29uZjphbnkpe1xyXG5cdFx0dGhpcy5fY29uZmlnID0gY29uZjtcclxuXHRcdGlmKCF0aGlzLl9jb25maWcudGltZW91dCkgdGhpcy5fY29uZmlnLnRpbWVvdXQgPSB0aGlzLl9kZWZhdWx0VGltZW91dDtcclxuXHRcdGlmKHRoaXMuX2NvbmZpZy5yZXRpbWUpIHRoaXMuX3JlY29ubmV0VGltZXMgPSB0aGlzLl9jb25maWcucmV0aW1lO1xyXG5cdFx0dGhpcy5jb25uZWN0KClcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgY29ubmVjdCgpe1xyXG5cdFx0bGV0IGFkZHIgPSB0aGlzLl9jb25maWcuaG9zdDtcclxuXHRcdGlmKHRoaXMuX2NvbmZpZy5wb3J0KVxyXG5cdFx0e1xyXG5cdFx0XHRhZGRyID0gdGhpcy5fY29uZmlnLmhvc3QgK1wiOlwiICt0aGlzLl9jb25maWcucG9ydFxyXG5cdFx0fVxyXG5cdFx0Y29uc29sZS5sb2coXCJzdGFydCBjb25uZWN0IHNlcnZlcj4+Pj5cIiAsIGFkZHIpO1xyXG5cdFx0dGhpcy5fd2ViU29ja2V0ID0gbmV3IFdlYlNvY2tldChhZGRyKTtcclxuXHRcdHRoaXMuX21lc3NhZ2VIYW5kbGVyID0gbmV3IE1lc3NhZ2VIYW5kbGVyKHRoaXMuX3dlYlNvY2tldCk7XHJcblx0XHQvLyB0aGlzLl93ZWJTb2NrZXQuZW5kaWFuID0gTGF5YS5CeXRlLkJJR19FTkRJQU47XHJcblx0XHQvLyBpZih0aGlzLl9jb25maWcudGltZW91dCl0aGlzLl93ZWJTb2NrZXQudGltZW91dD10aGlzLl9jb25maWcudGltZW91dDtcclxuXHRcdFxyXG5cdFx0dGhpcy5fd2ViU29ja2V0Lm9ub3BlbiA9IChldmVudCk9PnRoaXMub25Tb2NrZXRPcGVuKCk7XHJcblx0XHR0aGlzLl93ZWJTb2NrZXQub25tZXNzYWdlID0gKGV2ZW50KT0+dGhpcy5vblJlY2VpdmVNZXNzYWdlKGV2ZW50KTtcclxuXHRcdHRoaXMuX3dlYlNvY2tldC5vbmNsb3NlID0gKGV2ZW50KT0+dGhpcy5vblNvY2tldENsb3NlKCk7XHJcblx0XHR0aGlzLl93ZWJTb2NrZXQub25lcnJvciA9IChldmVudCk9PnRoaXMub25Tb2NrZXRFcnJvcigpO1xyXG5cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBjbG9zZSgpe1xyXG5cdFx0aWYodGhpcy5fd2ViU29ja2V0KXtcclxuXHRcdFx0Ly8gdGhpcy5fd2ViU29ja2V0Lm9mZkFsbChudWxsKTtcclxuXHRcdFx0dGhpcy5fd2ViU29ja2V0LmNsb3NlKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZmx1c2goKXtcclxuXHRcdC8vIGlmKHRoaXMuX3dlYlNvY2tldC5jb25uZWN0ZWQpe1xyXG5cdFx0XHQvLyB0aGlzLl93ZWJTb2NrZXQuZmx1c2goKTtcclxuXHRcdC8vIH1cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBlbmFibGVIZWFydGJlYXQoZW5hYmxlKSB7XHJcblx0XHR0aGlzLl9tZXNzYWdlSGFuZGxlci5lbmFibGVIZWFydGJlYXQgPSBlbmFibGU7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIG9uU29ja2V0T3BlbigpOiB2b2lke1xyXG5cdFx0Y29uc29sZS5sb2coXCJjb25uZWN0IFwiICsgdGhpcy5fY29uZmlnLmhvc3QgK1wiIHN1Y2Nlc3NcIik7XHJcblx0XHR0aGlzLl9tZXNzYWdlSGFuZGxlci5kaXNwYXRjaChTb2NrZXRUYWcuS1NPQ0tFVF9PUEVOLCBcIlwiKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgb25SZWNlaXZlTWVzc2FnZShldmVudDogYW55ID0gbnVsbCk6IHZvaWR7XHJcblx0XHRjb25zb2xlLmxvZyhcIndlYnNvY2tldCByZWNlaXZlIG1lc3NhZ2U6XCIgKyBldmVudC5kYXRhKTtcclxuXHRcdGlmICh0eXBlb2Yod3gpID09IFwidW5kZWZpbmVkXCIpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMudG9BcnJheUJ1ZmZlcihldmVudC5kYXRhKS50aGVuKGFycmJ1Zj0+e1xyXG5cdFx0XHRcdHRoaXMuX21lc3NhZ2VIYW5kbGVyLmRpc3BhdGNoKFNvY2tldFRhZy5LU09DS0VUX01FU1NBR0UsIGFycmJ1Zik7XHJcblx0XHRcdH0pXHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0dGhpcy5fbWVzc2FnZUhhbmRsZXIuZGlzcGF0Y2goU29ja2V0VGFnLktTT0NLRVRfTUVTU0FHRSwgZXZlbnQuZGF0YSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHRvQXJyYXlCdWZmZXIoYmxvYik6UHJvbWlzZTxBcnJheUJ1ZmZlcj5cclxuXHR7XHJcblx0XHQvL+WwhkJsb2Ig5a+56LGh6L2s5o2i5oiQIEFycmF5QnVmZmVyXHJcblx0XHR2YXIgYXJyYXlCdWZmZXI7XHJcblx0XHR2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuXHRcdHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihibG9iKTtcclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57XHJcblx0XHRcdHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRcdGFycmF5QnVmZmVyID0gcmVhZGVyLnJlc3VsdDtcclxuXHRcdFx0XHRyZXNvbHZlKGFycmF5QnVmZmVyKTtcclxuXHRcdFx0fVxyXG5cdFx0fSlcclxuXHR9XHJcblxyXG5cdFxyXG5cdHB1YmxpYyBzZW5kTWVzc2FnZShtc2c6IE1lc3NhZ2UpOiBib29sZWFue1xyXG5cdFx0aWYoIHRoaXMuX3dlYlNvY2tldC5yZWFkeVN0YXRlID09IFdlYlNvY2tldC5PUEVOICl7XHJcblx0XHRcdHRoaXMuX21lc3NhZ2VIYW5kbGVyLnNlbmRNZXNzYWdlKG1zZyk7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNlbmRDdXN0b21NZXNzYWdlKG1zZzogTWVzc2FnZSkge1xyXG5cdFx0dGhpcy5fbWVzc2FnZUhhbmRsZXIuZGlzcGF0Y2hNZXNzYWdlKG1zZyk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgY291bnQgPSAwO1xyXG5cclxuXHRwcml2YXRlIHJlY29ubmVjdCgpe1xyXG5cdFx0Ly8gY2MuZGlyZWN0b3IuZ2V0U2NoZWR1bGVyKCkudW5zY2hlZHVsZUFsbEZvclRhcmdldCh0aGlzKTtcclxuXHRcdGlmKFNvY2tldC5jb3VudCA+PSAyfHx0aGlzLl93ZWJTb2NrZXQucmVhZHlTdGF0ZSA9PSBXZWJTb2NrZXQuT1BFTilcclxuXHRcdHtcclxuXHRcdFx0Y2xlYXJUaW1lb3V0KHRoaXMucmV0cnlUaW1lcik7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0aWYodGhpcy5fd2ViU29ja2V0LnJlYWR5U3RhdGUgPT0gV2ViU29ja2V0LkNMT1NFRClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMuY29ubmVjdCgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMucmV0cnlUaW1lciA9IHNldFRpbWVvdXQoKCk9PntcclxuXHRcdFx0XHR0aGlzLnJlY29ubmVjdCgpO1xyXG5cdFx0XHR9LHRoaXMuX3JlY29ubmV0VGltZXMpXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgb25Tb2NrZXRDbG9zZShlOiBhbnkgPSBudWxsKXtcclxuXHRcdHRoaXMuX21lc3NhZ2VIYW5kbGVyLmRpc3BhdGNoKFNvY2tldFRhZy5LU09DS0VUX0NMT1NFLCBcIlwiKTtcclxuXHRcdGNvbnNvbGUubG9nKFwid2Vic29ja2V0IGNvbm5lY3QgY2xvc2UuXCIgLHRoaXMuX3dlYlNvY2tldC5yZWFkeVN0YXRlKTtcclxuXHRcdHRoaXMuY2xvc2UoKTtcclxuXHRcdHRoaXMucmVjb25uZWN0KCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgb25Tb2NrZXRFcnJvcihlOiBhbnkgPSBudWxsKXtcclxuXHRcdHRoaXMuX21lc3NhZ2VIYW5kbGVyLmRpc3BhdGNoKFNvY2tldFRhZy5LU09DS0VUX0VSUk9SLCBcIlwiKTtcclxuXHRcdGNvbnNvbGUubG9nKFwid2Vic29ja2V0IGlvIGVycm9yLlwiKTtcclxuXHRcdC8vIHRoaXMucmVjb25uZWN0KHRydWUpO1xyXG5cdH1cclxufSJdfQ==