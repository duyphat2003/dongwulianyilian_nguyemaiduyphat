
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/network/MessageBase.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dde8btrP25FeqHeKW+G4Pfb', 'MessageBase');
// framework/network/MessageBase.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageBase = void 0;
var MessageType_1 = require("./MessageType");
var Message_1 = require("./Message");
var ConnectManager_1 = require("./ConnectManager");
var MessageBase = /** @class */ (function () {
    function MessageBase() {
        this.Cmd = {};
        this.Error = {};
        this._allFuncs = {};
        for (var i in game.Command) {
            var v = game.Command[i];
            this.Cmd[v] = i;
        }
        for (var i in game.ErrorCode) {
            var v = game.ErrorCode[i];
            this.Error[v] = i;
        }
    }
    MessageBase.prototype.useSocketKey = function (key) {
        this._socketKey = key;
    };
    MessageBase.prototype.addListener = function (cmd, func) {
        this._allFuncs[cmd] = func;
    };
    MessageBase.prototype.removeListener = function (cmd) {
        if (this._allFuncs[cmd] != null) {
            this._allFuncs[cmd] = null;
        }
    };
    MessageBase.prototype.onMessage = function (obj) {
        if (obj.type == MessageType_1.SocketTag.KSOCKET_MESSAGE) {
            var int8a = new Uint8Array(obj.msg);
            var buffer = new flatbuffers.ByteBuffer(int8a);
            var msg = game.Package.getRootAsPackage(buffer);
            if (this._allFuncs[msg.cmd()] != null) {
                return this._allFuncs[msg.cmd()].call(this, msg);
            }
            else
                return this.onHandler(msg);
        }
        else {
            this.onSocket(obj.type);
            return true;
        }
    };
    /**
     * 处理socket消息
     * @param type
     */
    MessageBase.prototype.onSocket = function (type) {
    };
    /**
     * 重写消息处理函数
     * return 消息处理结果，处理完成返回真，否则返回假(消息会入消息队列，等待下次处理)
     */
    MessageBase.prototype.onHandler = function (msg) {
        return false;
    };
    MessageBase.prototype.sendMessage = function (msg) {
        ConnectManager_1.connManager.sendMessage(msg, this._socketKey);
    };
    MessageBase.prototype.onDestory = function () {
        this._allFuncs = null;
    };
    MessageBase.prototype.send = function (cmd, cmdstr, procedure, build) {
        if (cmdstr === void 0) { cmdstr = ""; }
        if (procedure === void 0) { procedure = null; }
        if (build === void 0) { build = null; }
        console.log("Send Message : [" + this.Cmd[cmd] + "]");
        var socket = ConnectManager_1.connManager.getDefault();
        var msg = new Message_1.Message(cmd);
        var ds = game[cmdstr];
        if (ds != null) {
            if (build == null) {
                build = this.createBuilder();
            }
            var startFunc = ds["start" + cmdstr];
            var endFunc = ds["end" + cmdstr];
            startFunc.call(ds, build);
            if (procedure) {
                procedure(build);
                //game[cmd].addTaskId(build,task_id);
            }
            build.finish(endFunc.call(ds, build));
            msg.addBuilder(build);
        }
        else {
            msg.addString(cmdstr);
        }
        socket.sendMessage(msg);
    };
    MessageBase.prototype.createBuilder = function () {
        return new flatbuffers.Builder();
    };
    return MessageBase;
}());
exports.MessageBase = MessageBase;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxuZXR3b3JrXFxNZXNzYWdlQmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZDQUF1QztBQUN2QyxxQ0FBaUM7QUFDakMsbURBQStDO0FBQy9DO0lBT0M7UUFGQSxRQUFHLEdBQUksRUFBRSxDQUFBO1FBQ1QsVUFBSyxHQUFHLEVBQUUsQ0FBQTtRQUVULElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBRXBCLEtBQUssSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFDcEI7WUFDSSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQ3ZCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3pCO1FBQ0QsS0FBSyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUN0QjtZQUNJLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDM0I7SUFFRixDQUFDO0lBRU0sa0NBQVksR0FBbkIsVUFBb0IsR0FBVztRQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQztJQUN2QixDQUFDO0lBRU0saUNBQVcsR0FBbEIsVUFBbUIsR0FBUSxFQUFFLElBQWM7UUFDMUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7SUFDNUIsQ0FBQztJQUVNLG9DQUFjLEdBQXJCLFVBQXNCLEdBQVE7UUFDN0IsSUFBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksRUFBQztZQUM5QixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztTQUMzQjtJQUNGLENBQUM7SUFF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YSxHQUFiO1FBRUksT0FBTyxJQUFJLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBRUwsa0JBQUM7QUFBRCxDQTdHQSxBQTZHQyxJQUFBO0FBN0dZLGtDQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTb2NrZXRUYWd9IGZyb20gXCIuL01lc3NhZ2VUeXBlXCJcclxuaW1wb3J0IHtNZXNzYWdlfSBmcm9tIFwiLi9NZXNzYWdlXCJcclxuaW1wb3J0IHsgY29ubk1hbmFnZXIgfSBmcm9tIFwiLi9Db25uZWN0TWFuYWdlclwiO1xyXG5leHBvcnQgY2xhc3MgTWVzc2FnZUJhc2Uge1xyXG5cclxuXHRwcml2YXRlIF9zb2NrZXRLZXk6IHN0cmluZztcclxuXHRwcml2YXRlIF9hbGxGdW5jczoge1tjbWQ6IG51bWJlcl06IEZ1bmN0aW9ufTtcclxuXHJcblx0Q21kICA9IHt9XHJcblx0RXJyb3IgPSB7fVxyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuX2FsbEZ1bmNzID0ge307XHJcblxyXG5cdFx0Zm9yICh2YXIgaSBpbiBnYW1lLkNvbW1hbmQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgdiA9IGdhbWUuQ29tbWFuZFtpXVxyXG4gICAgICAgICAgICB0aGlzLkNtZFt2XSA9IGk7XHJcblx0XHR9XHJcblx0XHRmb3IgKHZhciBpIGluIGdhbWUuRXJyb3JDb2RlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHYgPSBnYW1lLkVycm9yQ29kZVtpXVxyXG4gICAgICAgICAgICB0aGlzLkVycm9yW3ZdID0gaTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdH1cclxuXHJcblx0cHVibGljIHVzZVNvY2tldEtleShrZXk6IHN0cmluZyl7XHJcblx0XHR0aGlzLl9zb2NrZXRLZXkgPSBrZXk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgYWRkTGlzdGVuZXIoY21kOiBhbnksIGZ1bmM6IEZ1bmN0aW9uKXtcclxuXHRcdHRoaXMuX2FsbEZ1bmNzW2NtZF0gPSBmdW5jO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHJlbW92ZUxpc3RlbmVyKGNtZDogYW55KXtcclxuXHRcdGlmKHRoaXMuX2FsbEZ1bmNzW2NtZF0gIT0gbnVsbCl7XHJcblx0XHRcdHRoaXMuX2FsbEZ1bmNzW2NtZF0gPSBudWxsO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHVibGljIG9uTWVzc2FnZShvYmo6IGFueSl7XHJcblx0XHRpZihvYmoudHlwZSA9PSBTb2NrZXRUYWcuS1NPQ0tFVF9NRVNTQUdFKXtcclxuXHRcdFx0bGV0IGludDhhID0gbmV3IFVpbnQ4QXJyYXkob2JqLm1zZyk7XHJcblx0XHRcdGxldCBidWZmZXIgPSBuZXcgZmxhdGJ1ZmZlcnMuQnl0ZUJ1ZmZlcihpbnQ4YSk7XHJcblx0XHRcdGxldCBtc2c6YW55ID0gZ2FtZS5QYWNrYWdlLmdldFJvb3RBc1BhY2thZ2UoYnVmZmVyKTtcclxuXHRcdFx0aWYodGhpcy5fYWxsRnVuY3NbbXNnLmNtZCgpXSAhPSBudWxsKXtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5fYWxsRnVuY3NbbXNnLmNtZCgpXS5jYWxsKHRoaXMsIG1zZyk7XHJcblx0XHRcdH1lbHNlIHJldHVybiB0aGlzLm9uSGFuZGxlcihtc2cpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5vblNvY2tldChvYmoudHlwZSk7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICog5aSE55CGc29ja2V05raI5oGvXHJcblx0ICogQHBhcmFtIHR5cGUgXHJcblx0ICovXHJcblx0cHVibGljIG9uU29ja2V0KHR5cGU6IFNvY2tldFRhZyl7XHJcblxyXG5cdH1cclxuXHRcclxuXHQvKipcclxuXHQgKiDph43lhpnmtojmga/lpITnkIblh73mlbBcclxuXHQgKiByZXR1cm4g5raI5oGv5aSE55CG57uT5p6c77yM5aSE55CG5a6M5oiQ6L+U5Zue55yf77yM5ZCm5YiZ6L+U5Zue5YGHKOa2iOaBr+S8muWFpea2iOaBr+mYn+WIl++8jOetieW+heS4i+asoeWkhOeQhilcclxuXHQgKi9cclxuXHRwdWJsaWMgb25IYW5kbGVyKG1zZzogZ2FtZS5QYWNrYWdlKXtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNlbmRNZXNzYWdlKG1zZzogTWVzc2FnZSl7XHJcblx0XHRjb25uTWFuYWdlci5zZW5kTWVzc2FnZShtc2csIHRoaXMuX3NvY2tldEtleSk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgb25EZXN0b3J5KCl7XHJcblx0XHR0aGlzLl9hbGxGdW5jcyA9IG51bGw7XHJcblx0fVxyXG5cclxuXHRzZW5kKGNtZCxjbWRzdHI9XCJcIixwcm9jZWR1cmU9bnVsbCxidWlsZCA9IG51bGwpXHJcblx0e1xyXG5cdFx0Y29uc29sZS5sb2coXCJTZW5kIE1lc3NhZ2UgOiBbXCIgKyB0aGlzLkNtZFtjbWRdICtcIl1cIilcclxuICAgICAgICBsZXQgc29ja2V0ID0gY29ubk1hbmFnZXIuZ2V0RGVmYXVsdCgpO1xyXG5cdFx0bGV0IG1zZyA9IG5ldyBNZXNzYWdlKGNtZCk7XHJcblx0XHRsZXQgZHMgPSBnYW1lW2NtZHN0cl0gXHJcbiAgICAgICAgaWYoZHMgIT0gbnVsbClcclxuICAgICAgICB7XHJcblx0XHRcdGlmKGJ1aWxkID09IG51bGwpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRidWlsZCA9IHRoaXMuY3JlYXRlQnVpbGRlcigpO1xyXG5cdFx0XHR9XHJcbiAgICAgICAgICAgIGxldCBzdGFydEZ1bmMgPSBkc1tcInN0YXJ0XCIgKyBjbWRzdHJdIFxyXG5cdFx0XHRsZXQgZW5kRnVuYyA9IGRzW1wiZW5kXCIgKyBjbWRzdHJdIFxyXG5cdFx0XHRzdGFydEZ1bmMuY2FsbChkcywgYnVpbGQpO1xyXG4gICAgICAgICAgICBpZihwcm9jZWR1cmUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHByb2NlZHVyZShidWlsZClcclxuICAgICAgICAgICAgICAgIC8vZ2FtZVtjbWRdLmFkZFRhc2tJZChidWlsZCx0YXNrX2lkKTtcclxuICAgICAgICAgICAgfVxyXG5cdFx0XHRidWlsZC5maW5pc2goZW5kRnVuYy5jYWxsKGRzLGJ1aWxkKSlcclxuXHRcdFx0bXNnLmFkZEJ1aWxkZXIoYnVpbGQpO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdG1zZy5hZGRTdHJpbmcoY21kc3RyKTtcclxuXHRcdH1cclxuICAgICAgICBzb2NrZXQuc2VuZE1lc3NhZ2UobXNnKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVCdWlsZGVyKClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gbmV3IGZsYXRidWZmZXJzLkJ1aWxkZXIoKTtcclxuICAgIH1cclxuXHRcclxufSJdfQ==