
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/plugin_boosts/gamesys/Device.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b88b4v3H5tF7ozLVLmzIPqR', 'Device');
// framework/plugin_boosts/gamesys/Device.ts

Object.defineProperty(exports, "__esModule", { value: true });
var SoundHelper_1 = require("../../qqsdk/SoundHelper");
var Device = /** @class */ (function () {
    function Device() {
    }
    Device.setSoundsEnable = function (b) {
        Device.setSFXEnable(b);
        Device.setBGMEnable(b);
    };
    Device.setSFXEnable = function (b) {
        cc.audioEngine.setEffectsVolume(b == true ? 1 : 0);
        Device.isSfxEnabled = b;
        if (!b) {
            cc.audioEngine.pauseAllEffects();
        }
        else {
            cc.audioEngine.resumeAllEffects();
        }
    };
    Device.useCCAudioEngine = function () {
        this._useCCAudioEngine = true;
    };
    Device.useDefaultAudioEngine = function () {
        this._useCCAudioEngine = false;
    };
    Device.setBGMEnable = function (b) {
        cc.audioEngine.setMusicVolume(b == true ? 1 : 0);
        Device.isBgmEnabled = b;
        if (!b) {
            cc.audioEngine.pauseMusic();
        }
        else {
            cc.audioEngine.resumeMusic();
        }
    };
    Device.playEffect = function (clip, loop) {
        if (loop === void 0) { loop = false; }
        if (Device.isSfxEnabled) {
            if (cc.sys.platform == cc.sys.QQ_PLAY) {
                if (this._useCCAudioEngine) {
                    return cc.audioEngine.playEffect(clip, loop);
                }
                else {
                    SoundHelper_1.default.playSound(clip);
                }
            }
            else
                return cc.audioEngine.playEffect(clip, loop);
        }
    };
    Device.stopMusic = function () {
        cc.audioEngine.stopMusic();
    };
    Device.playMusic = function (clip, loop) {
        if (loop === void 0) { loop = true; }
        if (Device.isBgmEnabled) {
            return cc.audioEngine.playMusic(clip, loop);
        }
    };
    Device.vibrate = function () {
        if (cc.sys.WECHAT_GAME == cc.sys.platform) {
            wx.vibrateShort();
        }
        else {
            console.log("not support vibrate on except-wx platfrom ");
        }
    };
    Device.isSfxEnabled = true;
    Device.isBgmEnabled = true;
    Device._useCCAudioEngine = false;
    return Device;
}());
exports.default = Device;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxwbHVnaW5fYm9vc3RzXFxnYW1lc3lzXFxEZXZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVEQUFrRDtBQUVsRDtJQUFBO0lBeUZBLENBQUM7SUFsRlUsc0JBQWUsR0FBdEIsVUFBdUIsQ0FBUztRQUU1QixNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3RCLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVNLG1CQUFZLEdBQW5CLFVBQW9CLENBQUM7UUFFakIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFBLENBQUMsQ0FBQSxDQUFDLENBQUEsQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDO1FBQy9DLE1BQU0sQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLElBQUcsQ0FBQyxDQUFDLEVBQ0w7WUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLGVBQWUsRUFBRSxDQUFBO1NBQ25DO2FBQUk7WUFDRCxFQUFFLENBQUMsV0FBVyxDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDckM7SUFDTCxDQUFDO0lBSU0sdUJBQWdCLEdBQXZCO1FBRUksSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztJQUNsQyxDQUFDO0lBRU0sNEJBQXFCLEdBQTVCO1FBRUksSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztJQUNuQyxDQUFDO0lBRU0sbUJBQVksR0FBbkIsVUFBb0IsQ0FBQztRQUVqQixFQUFFLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFBLENBQUMsQ0FBQSxDQUFDLENBQUEsQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDO1FBQzdDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLElBQUcsQ0FBQyxDQUFDLEVBQ0w7WUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFBO1NBQzlCO2FBQUk7WUFDRCxFQUFFLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFBO1NBQy9CO0lBQ0wsQ0FBQztJQUdNLGlCQUFVLEdBQWpCLFVBQWtCLElBQUksRUFBQyxJQUFZO1FBQVoscUJBQUEsRUFBQSxZQUFZO1FBRS9CLElBQUcsTUFBTSxDQUFDLFlBQVksRUFDdEI7WUFDSSxJQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUNwQztnQkFDSSxJQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFDekI7b0JBQ0ksT0FBTyxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLENBQUE7aUJBQzlDO3FCQUFJO29CQUNELHFCQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUMvQjthQUNKOztnQkFDRyxPQUFPLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsQ0FBQTtTQUNsRDtJQUNMLENBQUM7SUFFTSxnQkFBUyxHQUFoQjtRQUVJLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVNLGdCQUFTLEdBQWhCLFVBQWlCLElBQUksRUFBQyxJQUFXO1FBQVgscUJBQUEsRUFBQSxXQUFXO1FBRTdCLElBQUcsTUFBTSxDQUFDLFlBQVksRUFDdEI7WUFDSSxPQUFPLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsQ0FBQztTQUM5QztJQUNMLENBQUM7SUFFTSxjQUFPLEdBQWQ7UUFFSSxJQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUN4QztZQUNJLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQTtTQUNwQjthQUFJO1lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFBO1NBQzVEO0lBQ0wsQ0FBQztJQXJGTSxtQkFBWSxHQUFHLElBQUksQ0FBQztJQUVwQixtQkFBWSxHQUFHLElBQUksQ0FBQztJQW9CcEIsd0JBQWlCLEdBQUcsS0FBSyxDQUFDO0lBZ0VyQyxhQUFDO0NBekZELEFBeUZDLElBQUE7a0JBekZvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNvdW5kSGVscGVyIGZyb20gXCIuLi8uLi9xcXNkay9Tb3VuZEhlbHBlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGV2aWNlIFxyXG57XHJcblxyXG4gICAgc3RhdGljIGlzU2Z4RW5hYmxlZCA9IHRydWU7XHJcblxyXG4gICAgc3RhdGljIGlzQmdtRW5hYmxlZCA9IHRydWU7XHJcblxyXG4gICAgc3RhdGljIHNldFNvdW5kc0VuYWJsZShiOmJvb2xlYW4pXHJcbiAgICB7XHJcbiAgICAgICAgRGV2aWNlLnNldFNGWEVuYWJsZShiKVxyXG4gICAgICAgIERldmljZS5zZXRCR01FbmFibGUoYik7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNldFNGWEVuYWJsZShiKVxyXG4gICAge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldEVmZmVjdHNWb2x1bWUoYiA9PSB0cnVlPzE6MCk7XHJcbiAgICAgICAgRGV2aWNlLmlzU2Z4RW5hYmxlZCA9IGI7XHJcbiAgICAgICAgaWYoIWIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wYXVzZUFsbEVmZmVjdHMoKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5yZXN1bWVBbGxFZmZlY3RzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBfdXNlQ0NBdWRpb0VuZ2luZSA9IGZhbHNlO1xyXG5cclxuICAgIHN0YXRpYyB1c2VDQ0F1ZGlvRW5naW5lKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLl91c2VDQ0F1ZGlvRW5naW5lID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgdXNlRGVmYXVsdEF1ZGlvRW5naW5lKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLl91c2VDQ0F1ZGlvRW5naW5lID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNldEJHTUVuYWJsZShiKVxyXG4gICAge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldE11c2ljVm9sdW1lKGIgPT0gdHJ1ZT8xOjApO1xyXG4gICAgICAgIERldmljZS5pc0JnbUVuYWJsZWQgPSBiO1xyXG4gICAgICAgIGlmKCFiKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGF1c2VNdXNpYygpXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnJlc3VtZU11c2ljKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHN0YXRpYyBwbGF5RWZmZWN0KGNsaXAsbG9vcCA9IGZhbHNlKVxyXG4gICAge1xyXG4gICAgICAgIGlmKERldmljZS5pc1NmeEVuYWJsZWQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZihjYy5zeXMucGxhdGZvcm0gPT0gY2Muc3lzLlFRX1BMQVkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuX3VzZUNDQXVkaW9FbmdpbmUpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QoY2xpcCxsb29wKVxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgU291bmRIZWxwZXIucGxheVNvdW5kKGNsaXApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ZWxzZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QoY2xpcCxsb29wKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc3RvcE11c2ljKClcclxuICAgIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wTXVzaWMoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcGxheU11c2ljKGNsaXAsbG9vcCA9IHRydWUpXHJcbiAgICB7XHJcbiAgICAgICAgaWYoRGV2aWNlLmlzQmdtRW5hYmxlZClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWMoY2xpcCxsb29wKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHZpYnJhdGUoKVxyXG4gICAge1xyXG4gICAgICAgIGlmKGNjLnN5cy5XRUNIQVRfR0FNRSA9PSBjYy5zeXMucGxhdGZvcm0pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB3eC52aWJyYXRlU2hvcnQoKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5vdCBzdXBwb3J0IHZpYnJhdGUgb24gZXhjZXB0LXd4IHBsYXRmcm9tIFwiKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==