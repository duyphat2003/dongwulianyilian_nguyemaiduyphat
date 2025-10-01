
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/plugin_boosts/misc/SpriteFrameCache.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8756by7qCVIPpJ06/9qmobv', 'SpriteFrameCache');
// framework/plugin_boosts/misc/SpriteFrameCache.ts

Object.defineProperty(exports, "__esModule", { value: true });
var SpriteFrameCache = /** @class */ (function () {
    function SpriteFrameCache() {
        this.frames = {};
    }
    Object.defineProperty(SpriteFrameCache, "instance", {
        get: function () {
            if (this._instance == null) {
                this._instance = new SpriteFrameCache();
            }
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    SpriteFrameCache.prototype.getSpriteFrame = function (url) {
        return __awaiter(this, void 0, Promise, function () {
            var frame;
            var _this = this;
            return __generator(this, function (_a) {
                frame = this.frames[url];
                if (frame == null) {
                    return [2 /*return*/, new Promise(function (resolve, reject) {
                            // console.log("[SpriteFrameCache] request image:" + url)
                            if (!url || url == "") {
                                reject("empty-url");
                                return;
                            }
                            if (url.indexOf("http") == -1) {
                                cc.loader.loadRes(url, cc.SpriteFrame, function (error, frame) {
                                    if (error) {
                                        reject();
                                        return;
                                    }
                                    if (frame) {
                                        _this.addSpriteFrame(url, frame);
                                        resolve(frame);
                                    }
                                    else {
                                        reject();
                                    }
                                });
                            }
                            else {
                                cc.loader.load({ url: url, type: 'png' }, function (error, texture) {
                                    if (error) {
                                        reject();
                                        return;
                                    }
                                    if (texture) {
                                        frame = new cc.SpriteFrame(texture);
                                        _this.addSpriteFrame(url, frame);
                                        resolve(frame);
                                    }
                                    else {
                                        reject();
                                    }
                                });
                            }
                        })];
                }
                return [2 /*return*/, new Promise(function (resolve, reject) { return resolve(frame); })];
            });
        });
    };
    SpriteFrameCache.prototype.addSpriteFrame = function (url, frame) {
        this.frames[url] = frame;
        return frame;
    };
    SpriteFrameCache.prototype.clear = function () {
        for (var k in this.frames) {
            var frame = this.frames[k];
            cc.loader.release(frame);
            delete this.frames[k];
        }
    };
    SpriteFrameCache.prototype.remove = function (k) {
        var frame = this.frames[k];
        cc.loader.release(frame);
        delete this.frames[k];
    };
    return SpriteFrameCache;
}());
exports.default = SpriteFrameCache;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxwbHVnaW5fYm9vc3RzXFxtaXNjXFxTcHJpdGVGcmFtZUNhY2hlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO1FBYVksV0FBTSxHQUFtQyxFQUFFLENBQUM7SUFrRXhELENBQUM7SUEzRUcsc0JBQVcsNEJBQVE7YUFBbkI7WUFFSSxJQUFHLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxFQUN6QjtnQkFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksZ0JBQWdCLEVBQUUsQ0FBQzthQUMzQztZQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQUdLLHlDQUFjLEdBQXBCLFVBQXFCLEdBQVU7dUNBQUUsT0FBTzs7OztnQkFFaEMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUE7Z0JBQzVCLElBQUcsS0FBSyxJQUFJLElBQUksRUFDaEI7b0JBQ0ksc0JBQU8sSUFBSSxPQUFPLENBQWlCLFVBQUMsT0FBTyxFQUFDLE1BQU07NEJBQzlDLHlEQUF5RDs0QkFDekQsSUFBRyxDQUFDLEdBQUcsSUFBRyxHQUFHLElBQUksRUFBRSxFQUFFO2dDQUNqQixNQUFNLENBQUMsV0FBVyxDQUFDLENBQUE7Z0NBQ25CLE9BQU87NkJBQ1Y7NEJBQ0QsSUFBSyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUM5QjtnQ0FDSSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUMsRUFBRSxDQUFDLFdBQVcsRUFBQyxVQUFDLEtBQUssRUFBQyxLQUFLO29DQUM3QyxJQUFHLEtBQUssRUFBQzt3Q0FBQyxNQUFNLEVBQUUsQ0FBQzt3Q0FBQSxPQUFNO3FDQUFDO29DQUMxQixJQUFHLEtBQUssRUFDUjt3Q0FDSSxLQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQTt3Q0FDL0IsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFBO3FDQUNqQjt5Q0FBSTt3Q0FDRCxNQUFNLEVBQUUsQ0FBQTtxQ0FDWDtnQ0FDTCxDQUFDLENBQUMsQ0FBQTs2QkFDTDtpQ0FBSTtnQ0FDRCxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBQyxFQUFFLFVBQUMsS0FBSyxFQUFFLE9BQU87b0NBQ25ELElBQUcsS0FBSyxFQUFDO3dDQUFDLE1BQU0sRUFBRSxDQUFDO3dDQUFBLE9BQU07cUNBQUM7b0NBQzFCLElBQUcsT0FBTyxFQUNWO3dDQUNJLEtBQUssR0FBRyxJQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7d0NBQ3BDLEtBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFBO3dDQUMvQixPQUFPLENBQUMsS0FBSyxDQUFDLENBQUE7cUNBQ2pCO3lDQUFJO3dDQUNELE1BQU0sRUFBRSxDQUFBO3FDQUNYO2dDQUNMLENBQUMsQ0FBQyxDQUFDOzZCQUNOO3dCQUNMLENBQUMsQ0FBQyxFQUFBO2lCQUNMO2dCQUNELHNCQUFPLElBQUksT0FBTyxDQUFpQixVQUFDLE9BQU8sRUFBQyxNQUFNLElBQUcsT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQWQsQ0FBYyxDQUFDLEVBQUM7OztLQUV4RTtJQUVELHlDQUFjLEdBQWQsVUFBZSxHQUFXLEVBQUUsS0FBVTtRQUNsQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUN6QixPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBR0QsZ0NBQUssR0FBTDtRQUVJLEtBQUssSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sRUFDekI7WUFDSSxJQUFJLEtBQUssR0FBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQzNCLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3pCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQTtTQUN4QjtJQUNMLENBQUM7SUFFRCxpQ0FBTSxHQUFOLFVBQU8sQ0FBQztRQUVKLElBQUksS0FBSyxHQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDM0IsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ3pCLENBQUM7SUFFTCx1QkFBQztBQUFELENBL0VBLEFBK0VDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBTcHJpdGVGcmFtZUNhY2hlXHJcbntcclxuICAgIHN0YXRpYyBfaW5zdGFuY2U6U3ByaXRlRnJhbWVDYWNoZTtcclxuXHJcbiAgICBzdGF0aWMgZ2V0IGluc3RhbmNlKClcclxuICAgIHtcclxuICAgICAgICBpZih0aGlzLl9pbnN0YW5jZSA9PSBudWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgU3ByaXRlRnJhbWVDYWNoZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmcmFtZXM6e1tpbmRleDpzdHJpbmddOmNjLlNwcml0ZUZyYW1lfSA9IHt9O1xyXG4gICAgYXN5bmMgZ2V0U3ByaXRlRnJhbWUodXJsOnN0cmluZyk6UHJvbWlzZTxjYy5TcHJpdGVGcmFtZT5cclxuICAgIHtcclxuICAgICAgICBsZXQgZnJhbWUgPSB0aGlzLmZyYW1lc1t1cmxdXHJcbiAgICAgICAgaWYoZnJhbWUgPT0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxjYy5TcHJpdGVGcmFtZT4oKHJlc29sdmUscmVqZWN0KT0+e1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJbU3ByaXRlRnJhbWVDYWNoZV0gcmVxdWVzdCBpbWFnZTpcIiArIHVybClcclxuICAgICAgICAgICAgICAgIGlmKCF1cmwgfHx1cmwgPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChcImVtcHR5LXVybFwiKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICggdXJsLmluZGV4T2YoXCJodHRwXCIpID09IC0xKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKHVybCxjYy5TcHJpdGVGcmFtZSwoZXJyb3IsZnJhbWUpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGVycm9yKXtyZWplY3QoKTtyZXR1cm59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGZyYW1lKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFNwcml0ZUZyYW1lKHVybCAsZnJhbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGZyYW1lKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MubG9hZGVyLmxvYWQoe3VybDogdXJsLCB0eXBlOiAncG5nJ30sIChlcnJvciwgdGV4dHVyZSkgPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGVycm9yKXtyZWplY3QoKTtyZXR1cm59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRleHR1cmUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRTcHJpdGVGcmFtZSh1cmwgLGZyYW1lKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShmcmFtZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxjYy5TcHJpdGVGcmFtZT4oKHJlc29sdmUscmVqZWN0KT0+cmVzb2x2ZShmcmFtZSkpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGFkZFNwcml0ZUZyYW1lKHVybDogc3RyaW5nLCBmcmFtZTogYW55KTogYW55IHtcclxuICAgICAgICB0aGlzLmZyYW1lc1t1cmxdID0gZnJhbWU7XHJcbiAgICAgICAgcmV0dXJuIGZyYW1lO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjbGVhcigpXHJcbiAgICB7XHJcbiAgICAgICAgZm9yICh2YXIgayBpbiB0aGlzLmZyYW1lcylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBmcmFtZSA9ICB0aGlzLmZyYW1lc1trXVxyXG4gICAgICAgICAgICBjYy5sb2FkZXIucmVsZWFzZShmcmFtZSk7XHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmZyYW1lc1trXVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW1vdmUoaylcclxuICAgIHtcclxuICAgICAgICBsZXQgZnJhbWUgPSAgdGhpcy5mcmFtZXNba11cclxuICAgICAgICBjYy5sb2FkZXIucmVsZWFzZShmcmFtZSk7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMuZnJhbWVzW2tdXHJcbiAgICB9XHJcblxyXG59Il19