
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/network/Message.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fb4e0zpbzJB4YN77Kns7y3M', 'Message');
// framework/network/Message.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
var Message = /** @class */ (function () {
    function Message(cmd) {
        this._cmd = cmd;
        this._data = null;
    }
    Message.prototype.addBuilder = function (data) {
        this._data = data.asUint8Array();
    };
    Message.prototype.addString = function (data) {
        this._data = data;
    };
    Message.prototype.pack = function () {
        var build = this.toString();
        var buf = build.asUint8Array();
        var newBuf = new Uint8Array(buf);
        console.log("send message: " + newBuf);
        return newBuf.buffer;
    };
    Message.prototype.toString = function () {
        var build = new flatbuffers.Builder();
        var data = null;
        if (this._data != null)
            data = build.createString(this._data);
        game.Package.startPackage(build);
        game.Package.addCmd(build, this._cmd);
        if (this._data != null)
            game.Package.addData(build, data);
        var pack = game.Package.endPackage(build);
        build.finish(pack);
        return build;
    };
    return Message;
}());
exports.Message = Message;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxuZXR3b3JrXFxNZXNzYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7SUFLQyxpQkFBbUIsR0FBUTtRQUMxQixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztRQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztJQUNuQixDQUFDO0lBRU0sNEJBQVUsR0FBakIsVUFBa0IsSUFBeUI7UUFDMUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVNLDJCQUFTLEdBQWhCLFVBQWlCLElBQVk7UUFDNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUVNLHNCQUFJLEdBQVg7UUFDQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDNUIsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQy9CLElBQUksTUFBTSxHQUFHLElBQUksVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLENBQUM7UUFDdkMsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ3RCLENBQUM7SUFFTywwQkFBUSxHQUFoQjtRQUNDLElBQUksS0FBSyxHQUFHLElBQUksV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3RDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFHLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSTtZQUNwQixJQUFJLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QyxJQUFHLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSTtZQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQixPQUFPLEtBQUssQ0FBQztJQUNkLENBQUM7SUFDRixjQUFDO0FBQUQsQ0F2Q0EsQUF1Q0MsSUFBQTtBQXZDWSwwQkFBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5leHBvcnQgY2xhc3MgTWVzc2FnZSB7XHJcblxyXG5cdHByaXZhdGUgX2NtZDogYW55O1xyXG5cdHByaXZhdGUgX2RhdGE6IGFueTtcclxuXHJcblx0cHVibGljIGNvbnN0cnVjdG9yKGNtZDogYW55KSB7XHJcblx0XHR0aGlzLl9jbWQgPSBjbWQ7XHJcblx0XHR0aGlzLl9kYXRhID0gbnVsbDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBhZGRCdWlsZGVyKGRhdGE6IGZsYXRidWZmZXJzLkJ1aWxkZXIpIHtcclxuXHRcdHRoaXMuX2RhdGEgPSBkYXRhLmFzVWludDhBcnJheSgpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGFkZFN0cmluZyhkYXRhOiBTdHJpbmcpIHtcclxuXHRcdHRoaXMuX2RhdGEgPSBkYXRhO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHBhY2soKTogQXJyYXlCdWZmZXIge1xyXG5cdFx0bGV0IGJ1aWxkID0gdGhpcy50b1N0cmluZygpO1xyXG5cdFx0bGV0IGJ1ZiA9IGJ1aWxkLmFzVWludDhBcnJheSgpO1xyXG5cdFx0bGV0IG5ld0J1ZiA9IG5ldyBVaW50OEFycmF5KGJ1Zik7XHJcblx0XHRjb25zb2xlLmxvZyhcInNlbmQgbWVzc2FnZTogXCIgKyBuZXdCdWYpO1xyXG5cdFx0cmV0dXJuIG5ld0J1Zi5idWZmZXI7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHRvU3RyaW5nKCk6IGZsYXRidWZmZXJzLkJ1aWxkZXIge1xyXG5cdFx0bGV0IGJ1aWxkID0gbmV3IGZsYXRidWZmZXJzLkJ1aWxkZXIoKTtcclxuXHRcdGxldCBkYXRhID0gbnVsbDtcclxuXHRcdGlmKHRoaXMuX2RhdGEgIT0gbnVsbCkgXHJcblx0XHRcdGRhdGEgPSBidWlsZC5jcmVhdGVTdHJpbmcodGhpcy5fZGF0YSk7XHJcblx0XHRnYW1lLlBhY2thZ2Uuc3RhcnRQYWNrYWdlKGJ1aWxkKTtcclxuXHRcdGdhbWUuUGFja2FnZS5hZGRDbWQoYnVpbGQsIHRoaXMuX2NtZCk7XHJcblx0XHRpZih0aGlzLl9kYXRhICE9IG51bGwpXHJcblx0XHRcdGdhbWUuUGFja2FnZS5hZGREYXRhKGJ1aWxkLCBkYXRhKTtcclxuXHRcdGxldCBwYWNrID0gZ2FtZS5QYWNrYWdlLmVuZFBhY2thZ2UoYnVpbGQpO1xyXG5cdFx0YnVpbGQuZmluaXNoKHBhY2spO1xyXG5cdFx0cmV0dXJuIGJ1aWxkO1xyXG5cdH1cclxufSJdfQ==