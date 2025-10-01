
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/network/MessageHandler.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'af7b1a7LUJIBaVXazyQWhWN', 'MessageHandler');
// framework/network/MessageHandler.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageHandler = void 0;
var Message_1 = require("./Message");
var MessageType_1 = require("./MessageType");
var MessageDispatch_1 = require("./MessageDispatch");
var MessageHandler = /** @class */ (function () {
    function MessageHandler(webSocket) {
        this._writeMessage = null;
        this._messages = null;
        this._messages = [];
        this._heartbeatTime = 0;
        this._writeMessage = [];
        this._webSocket = webSocket;
        this.setHeartbeatInterval(30); //30秒
        this._isEnableHeartbeat = false;
    }
    Object.defineProperty(MessageHandler.prototype, "enableHeartbeat", {
        get: function () {
            return this._isEnableHeartbeat;
        },
        set: function (flag) {
            this._isEnableHeartbeat = flag;
        },
        enumerable: false,
        configurable: true
    });
    MessageHandler.prototype.setHeartbeatInterval = function (time) {
        if (time <= 0)
            time = 1;
        this._heartbeatInterval = time * 1000;
    };
    MessageHandler.prototype.onUpdate = function (timeStamp) {
        if (this._writeMessage.length > 0) {
            var msg = this._writeMessage[0];
            var message = msg.pack();
            if (this._webSocket.readyState == WebSocket.OPEN) {
                console.log("size: " + message.byteLength);
                this._webSocket.send(message);
                this._writeMessage.shift();
            }
        }
        if (this._messages.length > 0) {
            var msg = this._messages.shift();
            this.dispatchMessage(msg);
        }
        if (this._isEnableHeartbeat)
            this.checkHeartbeat();
        return false;
    };
    MessageHandler.prototype.checkHeartbeat = function () {
        var diff = new Date().getTime() - this._heartbeatTime;
        if (diff >= this._heartbeatInterval) {
            this.sendMessage(new Message_1.Message(game.Command.Heartbeat));
            this._heartbeatTime = new Date().getTime();
        }
    };
    MessageHandler.prototype.dispatchMessage = function (msg) {
        var dispatch = MessageDispatch_1.MessageDispatch.getInstance();
        if (!dispatch.onMessage(msg)) {
            this._messages.push(msg);
        }
    };
    MessageHandler.prototype.dispatchSocket = function (type) {
        var obj = { type: type };
        this.dispatchMessage(obj);
    };
    MessageHandler.prototype.dispatch = function (type, msg) {
        var _this = this;
        if (type == MessageType_1.SocketTag.KSOCKET_OPEN) {
            // cc.director.getScheduler().unschedule(this.onUpdate,this)
            // cc.director.getScheduler().schedule(this.onUpdate,this,0);
            clearInterval(this.updateTimer);
            this.updateTimer = setInterval(function (dt) { return _this.onUpdate(dt); }, 1000 / 60);
            this.dispatchSocket(type);
        }
        else if (type == MessageType_1.SocketTag.KSOCKET_CLOSE) {
            clearInterval(this.updateTimer);
            this.dispatchSocket(type);
        }
        else if (type == MessageType_1.SocketTag.KSOCKET_ERROR) {
            clearInterval(this.updateTimer);
            this.dispatchSocket(type);
        }
        else if (type == MessageType_1.SocketTag.KSOCKET_MESSAGE) {
            var obj = { type: type, msg: msg };
            this.dispatchMessage(obj);
        }
    };
    MessageHandler.prototype.clearWriteMessage = function () {
        this._writeMessage = [];
    };
    MessageHandler.prototype.clearMessage = function () {
        this._messages = [];
    };
    MessageHandler.prototype.sendMessage = function (msg) {
        this._writeMessage.push(msg);
    };
    return MessageHandler;
}());
exports.MessageHandler = MessageHandler;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxuZXR3b3JrXFxNZXNzYWdlSGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFDQUFvQztBQUNwQyw2Q0FBdUM7QUFDdkMscURBQWlEO0FBQ2pEO0lBUUMsd0JBQW1CLFNBQWM7UUFOekIsa0JBQWEsR0FBYyxJQUFJLENBQUM7UUFDaEMsY0FBUyxHQUFVLElBQUksQ0FBQztRQU0vQixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztRQUM1QixJQUFJLENBQUMsb0JBQW9CLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQSxLQUFLO1FBQ25DLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7SUFDakMsQ0FBQztJQUVELHNCQUFXLDJDQUFlO2FBSTFCO1lBQ0MsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUM7UUFDaEMsQ0FBQzthQU5ELFVBQTJCLElBQWE7WUFDdkMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQztRQUNoQyxDQUFDOzs7T0FBQTtJQU1NLDZDQUFvQixHQUEzQixVQUE0QixJQUFZO1FBQ3ZDLElBQUcsSUFBSSxJQUFJLENBQUM7WUFBRSxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3ZDLENBQUM7SUFFTyxpQ0FBUSxHQUFoQixVQUFpQixTQUFpQjtRQUNqQyxJQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBQztZQUNoQyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLElBQUksT0FB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QUFHLEVBQUUsR0FBRyxFQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUMxQjtJQUNGLENBQUM7SUFFTSwwQ0FBaUIsR0FBeEI7UUFDQyxJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRU0scUNBQVksR0FBbkI7UUFDQyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRU0sb0NBQVcsR0FBbEIsVUFBbUIsR0FBWTtRQUM5QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBQ0YscUJBQUM7QUFBRCxDQW5HQSxBQW1HQyxJQUFBO0FBbkdZLHdDQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gXCIuL01lc3NhZ2VcIjtcclxuaW1wb3J0IHtTb2NrZXRUYWd9IGZyb20gXCIuL01lc3NhZ2VUeXBlXCJcclxuaW1wb3J0IHtNZXNzYWdlRGlzcGF0Y2h9IGZyb20gXCIuL01lc3NhZ2VEaXNwYXRjaFwiXHJcbmV4cG9ydCBjbGFzcyBNZXNzYWdlSGFuZGxlciB7XHJcblx0cHJpdmF0ZSBfd2ViU29ja2V0OiBXZWJTb2NrZXQ7XHJcblx0cHJpdmF0ZSBfd3JpdGVNZXNzYWdlOiBNZXNzYWdlW10gPSBudWxsO1xyXG5cdHByaXZhdGUgX21lc3NhZ2VzOiBhbnlbXSA9IG51bGw7XHJcblx0cHJpdmF0ZSBfaGVhcnRiZWF0SW50ZXJ2YWw6IG51bWJlcjtcclxuXHRwcml2YXRlIF9oZWFydGJlYXRUaW1lOiBudW1iZXI7XHJcblx0cHJpdmF0ZSBfaXNFbmFibGVIZWFydGJlYXQ6IGJvb2xlYW47XHJcblx0cHJpdmF0ZSB1cGRhdGVUaW1lcjpudW1iZXI7XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKHdlYlNvY2tldDogYW55KXtcclxuXHRcdHRoaXMuX21lc3NhZ2VzID0gW107XHJcblx0XHR0aGlzLl9oZWFydGJlYXRUaW1lID0gMDtcclxuXHRcdHRoaXMuX3dyaXRlTWVzc2FnZSA9IFtdO1xyXG5cdFx0dGhpcy5fd2ViU29ja2V0ID0gd2ViU29ja2V0O1xyXG5cdFx0dGhpcy5zZXRIZWFydGJlYXRJbnRlcnZhbCgzMCk7Ly8zMOenklxyXG5cdFx0dGhpcy5faXNFbmFibGVIZWFydGJlYXQgPSBmYWxzZTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXQgZW5hYmxlSGVhcnRiZWF0KGZsYWc6IGJvb2xlYW4pe1xyXG5cdFx0dGhpcy5faXNFbmFibGVIZWFydGJlYXQgPSBmbGFnO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCBlbmFibGVIZWFydGJlYXQoKTogYm9vbGVhbiB7XHJcblx0XHRyZXR1cm4gdGhpcy5faXNFbmFibGVIZWFydGJlYXQ7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0SGVhcnRiZWF0SW50ZXJ2YWwodGltZTogbnVtYmVyKXsvL+enklxyXG5cdFx0aWYodGltZSA8PSAwKSB0aW1lID0gMTtcclxuXHRcdHRoaXMuX2hlYXJ0YmVhdEludGVydmFsID0gdGltZSAqIDEwMDA7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIG9uVXBkYXRlKHRpbWVTdGFtcDogbnVtYmVyKTogYm9vbGVhbntcclxuXHRcdGlmKHRoaXMuX3dyaXRlTWVzc2FnZS5sZW5ndGggPiAwKXtcclxuXHRcdFx0bGV0IG1zZyA9IHRoaXMuX3dyaXRlTWVzc2FnZVswXTtcclxuXHRcdFx0bGV0IG1lc3NhZ2UgPSBtc2cucGFjaygpO1xyXG5cdFx0XHRpZih0aGlzLl93ZWJTb2NrZXQucmVhZHlTdGF0ZSA9PSBXZWJTb2NrZXQuT1BFTil7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCJzaXplOiBcIiArIG1lc3NhZ2UuYnl0ZUxlbmd0aCk7XHJcblx0XHRcdFx0dGhpcy5fd2ViU29ja2V0LnNlbmQobWVzc2FnZSk7XHJcblx0XHRcdFx0dGhpcy5fd3JpdGVNZXNzYWdlLnNoaWZ0KCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmKHRoaXMuX21lc3NhZ2VzLmxlbmd0aCA+IDApe1xyXG5cdFx0XHRsZXQgbXNnID0gdGhpcy5fbWVzc2FnZXMuc2hpZnQoKTtcclxuXHRcdFx0dGhpcy5kaXNwYXRjaE1lc3NhZ2UobXNnKTtcclxuXHRcdH1cclxuXHRcdGlmKHRoaXMuX2lzRW5hYmxlSGVhcnRiZWF0KVxyXG5cdFx0XHR0aGlzLmNoZWNrSGVhcnRiZWF0KCk7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGNoZWNrSGVhcnRiZWF0KCl7XHJcblx0XHRsZXQgZGlmZiA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gdGhpcy5faGVhcnRiZWF0VGltZTtcclxuXHRcdGlmKCBkaWZmID49IHRoaXMuX2hlYXJ0YmVhdEludGVydmFsKXtcclxuXHRcdFx0dGhpcy5zZW5kTWVzc2FnZShuZXcgTWVzc2FnZShnYW1lLkNvbW1hbmQuSGVhcnRiZWF0KSk7XHJcblx0XHRcdHRoaXMuX2hlYXJ0YmVhdFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBkaXNwYXRjaE1lc3NhZ2UobXNnOiBhbnkpe1xyXG5cdFx0bGV0IGRpc3BhdGNoID0gTWVzc2FnZURpc3BhdGNoLmdldEluc3RhbmNlKCk7XHJcblx0XHRpZighZGlzcGF0Y2gub25NZXNzYWdlKG1zZykpIHtcclxuXHRcdFx0dGhpcy5fbWVzc2FnZXMucHVzaChtc2cpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBkaXNwYXRjaFNvY2tldCh0eXBlOiBTb2NrZXRUYWcpe1xyXG5cdFx0bGV0IG9iaiA9IHt0eXBlOiB0eXBlfTtcclxuXHRcdHRoaXMuZGlzcGF0Y2hNZXNzYWdlKG9iaik7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZGlzcGF0Y2godHlwZTogU29ja2V0VGFnLCBtc2c6IGFueSl7XHJcblx0XHRpZih0eXBlID09IFNvY2tldFRhZy5LU09DS0VUX09QRU4pe1xyXG5cdFx0XHQvLyBjYy5kaXJlY3Rvci5nZXRTY2hlZHVsZXIoKS51bnNjaGVkdWxlKHRoaXMub25VcGRhdGUsdGhpcylcclxuXHRcdFx0Ly8gY2MuZGlyZWN0b3IuZ2V0U2NoZWR1bGVyKCkuc2NoZWR1bGUodGhpcy5vblVwZGF0ZSx0aGlzLDApO1xyXG5cdFx0XHRjbGVhckludGVydmFsKHRoaXMudXBkYXRlVGltZXIpO1xyXG5cdFx0XHR0aGlzLnVwZGF0ZVRpbWVyID0gc2V0SW50ZXJ2YWwoZHQ9PnRoaXMub25VcGRhdGUoZHQpLCAxMDAwLzYwKTtcclxuXHRcdFx0dGhpcy5kaXNwYXRjaFNvY2tldCh0eXBlKTtcclxuXHRcdH1lbHNlIGlmKHR5cGUgPT0gU29ja2V0VGFnLktTT0NLRVRfQ0xPU0Upe1xyXG5cdFx0XHRjbGVhckludGVydmFsKHRoaXMudXBkYXRlVGltZXIpO1xyXG5cdFx0XHR0aGlzLmRpc3BhdGNoU29ja2V0KHR5cGUpO1xyXG5cdFx0fWVsc2UgaWYodHlwZSA9PSBTb2NrZXRUYWcuS1NPQ0tFVF9FUlJPUil7XHJcblx0XHRcdGNsZWFySW50ZXJ2YWwodGhpcy51cGRhdGVUaW1lcik7XHJcblx0XHRcdHRoaXMuZGlzcGF0Y2hTb2NrZXQodHlwZSk7XHJcblx0XHR9ZWxzZSBpZih0eXBlID09IFNvY2tldFRhZy5LU09DS0VUX01FU1NBR0Upe1xyXG5cdFx0XHRsZXQgb2JqID0ge3R5cGU6IHR5cGUsIG1zZzogbXNnfTtcclxuXHRcdFx0dGhpcy5kaXNwYXRjaE1lc3NhZ2Uob2JqKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBjbGVhcldyaXRlTWVzc2FnZSgpe1xyXG5cdFx0dGhpcy5fd3JpdGVNZXNzYWdlID0gW107XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgY2xlYXJNZXNzYWdlKCl7XHJcblx0XHR0aGlzLl9tZXNzYWdlcyA9IFtdO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNlbmRNZXNzYWdlKG1zZzogTWVzc2FnZSl7XHJcblx0XHR0aGlzLl93cml0ZU1lc3NhZ2UucHVzaChtc2cpO1xyXG5cdH1cclxufSJdfQ==