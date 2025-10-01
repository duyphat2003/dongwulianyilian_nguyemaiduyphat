
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/Platform.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8fc52zVaq1FVrE4//XvMzeK', 'Platform');
// framework/Platform.ts

Object.defineProperty(exports, "__esModule", { value: true });
var sdk_1 = require("./wxsdk/sdk");
var ToastManager_1 = require("./plugin_boosts/ui/ToastManager");
var BKTool_1 = require("./qqsdk/BKTool");
var SpriteFrameCache_1 = require("./plugin_boosts/misc/SpriteFrameCache");
var Signal_1 = require("./plugin_boosts/misc/Signal");
var EventManager_1 = require("./plugin_boosts/utils/EventManager");
var WxCommands;
(function (WxCommands) {
    WxCommands[WxCommands["Hide"] = 99] = "Hide";
    WxCommands[WxCommands["Next"] = 100] = "Next";
    WxCommands[WxCommands["RankSmall"] = 101] = "RankSmall";
    WxCommands[WxCommands["Rank"] = 102] = "Rank";
})(WxCommands || (WxCommands = {}));
var Platform = /** @class */ (function () {
    function Platform() {
    }
    Platform.getOpenID = function () {
        if (cc.sys.WECHAT_GAME == cc.sys.platform) {
            // wechat 
            var userInfo = sdk_1.wxsdk.userInfo;
            if (userInfo && userInfo.openID) {
                return userInfo.openID;
            }
            else {
                return "";
            }
        }
        else if (cc.sys.QQ_PLAY == cc.sys.platform) {
            return GameStatusInfo.openId;
        }
        else {
            return "123";
        }
    };
    Platform.getNick = function () {
        if (cc.sys.QQ_PLAY == cc.sys.platform) {
            return BKTool_1.default.getNick();
        }
        else if (cc.sys.WECHAT_GAME == cc.sys.platform) {
            return (sdk_1.wxsdk.userInfo && sdk_1.wxsdk.userInfo.nickName) || "自已";
        }
        else {
            return "玩家自已";
        }
    };
    Platform.getHead = function () {
        if (cc.sys.QQ_PLAY == cc.sys.platform) {
            return BKTool_1.default.getHead();
        }
        else if (cc.sys.WECHAT_GAME == cc.sys.platform) {
            // avatarUrl:"https://wx.qlogo.cn/mmopen/vi_32/QlHaicGZOD7do9LuX5W4APHYSrUBqVaGULuwISLUf35IyOOYZ3IXl7nF5mW36JiaQ9snziawrAvkknX41SmeYa9AQ/132"city:""country:""gender:1language:"zh_CN"nickName:"Damon Ren⁶⁶⁶"province:""
            var userInfo = sdk_1.wxsdk.userInfo;
            if (userInfo && userInfo.avatarUrl) {
                return userInfo.avatarUrl;
            }
            else {
                return "https://tank.wdfunny.com/speed_logo/2.jpg";
            }
        }
        return "https://tank.wdfunny.com/speed_logo/1.jpg";
    };
    Platform.loadHeadQQ = function (sp) {
        var self = this;
        var absolutePath = "GameSandBox://_head/" + GameStatusInfo.openId + ".jpg";
        var isExit = BK.FileUtil.isFileExist(absolutePath);
        cc.log(absolutePath + " is exit :" + isExit);
        //如果指定目录中存在此图像就直接显示否则从网络获取
        if (isExit) {
            cc.loader.load(absolutePath, function (err, texture) {
                if (err == null) {
                    sp.spriteFrame = new cc.SpriteFrame(texture);
                }
            });
        }
        else {
            BK.MQQ.Account.getHeadEx(GameStatusInfo.openId, function (oId, imgPath) {
                cc.log("openId:" + oId + " imgPath:" + imgPath);
                var image = new Image();
                image.onload = function () {
                    var tex = new cc.Texture2D();
                    tex.initWithElement(image);
                    tex.handleLoadedTexture();
                    sp.spriteFrame = new cc.SpriteFrame(tex);
                };
                image.src = imgPath;
            });
        }
    };
    Platform.loadSelfHead = function (sprite) {
        if (cc.sys.QQ_PLAY == cc.sys.platform) {
            this.loadHeadQQ(sprite);
        }
        else {
            SpriteFrameCache_1.default.instance.getSpriteFrame(Platform.getHead()).then(function (sf) { return sprite.spriteFrame = sf; });
        }
    };
    Platform.exit = function () {
        if (cc.sys.WECHAT_GAME == cc.sys.platform) {
            wx.offShow(Platform.onEnterForeground);
            wx.offHide(Platform.onEnterBackground);
        }
        else if (cc.sys.QQ_PLAY == cc.sys.platform) {
        }
    };
    Platform.login = function () {
        var _this = this;
        this.isAndroid = cc.sys.os == "Android";
        console.log("================= os", cc.sys.os);
        this.isIOS = cc.sys.os == "iOS";
        if (cc.sys.WECHAT_GAME == cc.sys.platform) {
            sdk_1.wxsdk.login();
            sdk_1.wxsdk.requestConfig(function (data) {
                _this.configGetSignal.fire(data);
            });
            // get conf 
            wx.onShow(Platform.onEnterForeground);
            wx.onHide(Platform.onEnterBackground);
        }
        else if (cc.sys.QQ_PLAY == cc.sys.platform) {
            BKTool_1.default.login();
            BK.onEnterForeground(Platform.onEnterForeground);
            BK.onEnterBackground(Platform.onEnterBackground);
        }
    };
    Platform.requestServerConfigs = function (name, callback, target) {
        if (cc.sys.WECHAT_GAME == cc.sys.platform) {
            sdk_1.wxsdk.requestDB(name, callback, target);
        }
    };
    Platform.getGameID = function () {
        if (cc.sys.QQ_PLAY == cc.sys.platform) {
            GameStatusInfo.gameId;
        }
        return "speed_wanyiwan";
    };
    Platform.getLaunchOptions = function () {
        if (cc.sys.WECHAT_GAME == cc.sys.platform) {
            return wx.getLaunchOptionsSync();
        }
        return {};
    };
    Platform.getCity = function () {
        return "";
    };
    Platform.share = function (callback, target) {
        console.log("######开始分享");
        if (cc.sys.WECHAT_GAME == cc.sys.platform) {
            sdk_1.wxsdk.openShare();
            var t_1 = new Date().getTime();
            Platform.onEnterForegroundSignal.on(function () {
                Platform.onEnterForegroundSignal.clear();
                var d = new Date().getTime() - t_1;
                if (d > 2333) {
                    setTimeout(function (_) {
                        if (callback)
                            callback.call(target);
                    }, 500);
                }
                else {
                    //用户及时返回分享失败 
                    ToastManager_1.Toast.make("分享失败,请尝试换其它群分享");
                }
            });
        }
        else if (cc.sys.QQ_PLAY == cc.sys.platform) {
            BKTool_1.default.share(function (v) {
                if (v == "success") {
                    callback && callback.call(target);
                }
                else {
                    // Toast.make("分享失败")
                }
            });
        }
        else {
            callback && callback.call(target);
        }
    };
    Platform.watch_video = function (callback, target) {
        console.log("######开始看视频");
        if (cc.sys.WECHAT_GAME == cc.sys.platform) {
            sdk_1.wxsdk.loadVideoAd(function (code, isEnded) {
                if (code == "load") {
                    cc.audioEngine.pauseMusic();
                    Platform.bannnerRefreshEnabled = false;
                }
                else if (code == "close") {
                    Platform.bannnerRefreshEnabled = true;
                    if (!isEnded)
                        ToastManager_1.Toast.make("必须看完视频,才能获取奖励");
                    else
                        callback && callback.call(target);
                }
            });
        }
        else if (cc.sys.QQ_PLAY == cc.sys.platform) {
            //关闭背景
            cc.audioEngine.pauseMusic();
            var isFinish_1 = false;
            BKTool_1.default.loadVideoAd(function (v, video) {
                if (v == "load") {
                    video.show();
                }
                else if (v == "finish") {
                    isFinish_1 = true;
                }
                else if (v == "close") {
                    if (!isFinish_1)
                        ToastManager_1.Toast.make("必须看完视频,才能获取奖励");
                    else
                        callback && callback.call(target);
                }
            });
        }
        else {
            callback && callback.call(target);
        }
    };
    Platform.showBannerAd = function () {
        console.log("######显示Banner广告");
        if (cc.sys.WECHAT_GAME == cc.sys.platform) {
            sdk_1.wxsdk.showBannerAd();
        }
        else if (cc.sys.QQ_PLAY == cc.sys.platform) {
            BKTool_1.default.showBannerAd();
        }
        else {
        }
    };
    Platform.initBannerAd = function (b) {
        if (b === void 0) { b = 1; }
        if (b == 0)
            return;
        if (cc.sys.QQ_PLAY == cc.sys.platform) {
            setInterval(function (_) {
                console.log("######加载Banner广告");
                BKTool_1.default.hideBannerAd();
                BKTool_1.default.loadBannerAd(function (v) {
                    v == "load" && BKTool_1.default.showBannerAd();
                });
            }, 30000);
        }
        else if (cc.sys.WECHAT_GAME == cc.sys.platform) {
            setInterval(function (_) {
                if (Platform.bannnerRefreshEnabled) {
                    console.log("######加载Banner广告");
                    sdk_1.wxsdk.hideBannerAd();
                    sdk_1.wxsdk.loadBannerAd(function (v) {
                        v == "load" && sdk_1.wxsdk.showBannerAd();
                    });
                }
            }, 40000);
        }
    };
    Platform.jumpTo = function () {
        // var desGameId = 1234; //跳转的gameid，必须为数字
        // var extendInfo = ""; //额外参数，必须为字符串
        // BK.QQ.skipGame(desGameId, extendInfo);
    };
    Platform.showRankDialog = function () {
        console.log("[Platform]#showRankDialog");
        ToastManager_1.Toast.make("#[Platform]#showRankDialog");
        // ViewManager.instance.show("Game/RankDialog")
    };
    // Andriod 发送游戏快捷方式到桌面
    Platform.onEnterForeground = function () {
        console.log("=====================onEnterForeground=====================");
        if (cc.sys.platform == cc.sys.QQ_PLAY) {
            //onEnterForeground
            // Device.resumeMusic()
            cc.audioEngine.resumeMusic();
        }
        else {
            cc.audioEngine.resumeMusic();
        }
        Platform.onEnterForegroundSignal.fire();
        EventManager_1.event.emit("onEnterForeground");
    };
    Platform.onEnterBackground = function () {
        // BK.onEnterBackground(enterBackgroundListener);
        EventManager_1.event.emit("onEnterBackground");
    };
    Platform.onGameExit = function () {
        // BK.onGameClose(gameCloseListener);
    };
    Platform.showSmallRank = function () {
        sdk_1.wxsdk.postMessage(WxCommands.RankSmall);
    };
    Platform.showRank = function () {
        sdk_1.wxsdk.postMessage(WxCommands.Rank);
    };
    Platform.hideRank = function () {
        sdk_1.wxsdk.postMessage(WxCommands.RankSmall);
    };
    Platform.getRankList = function (callback, target) {
        console.log("[Platform]#获取排行榜数据");
        if (cc.sys.platform == cc.sys.QQ_PLAY) {
            return BKTool_1.default.getRankList(function (errorCode, list) {
                callback && callback.call(target, errorCode, list);
            });
        }
        else if (cc.sys.platform == cc.sys.WECHAT_GAME) {
        }
    };
    Platform.uploadScore = function (score) {
        console.log("[Platform]#上传分数");
        if (!score) {
            console.log("score 上传失败：null");
            return;
        }
        if (cc.sys.platform == cc.sys.QQ_PLAY) {
            BKTool_1.default.uploadScore(score);
        }
        else if (cc.sys.WECHAT_GAME == cc.sys.platform) {
            // wxsdk.postMessage(WxCommands., score);
            sdk_1.wxsdk.uploadScore(score);
        }
        else {
            // Toast.make("#[Platform]#uploadScore")
        }
    };
    Platform.bannnerRefreshEnabled = true;
    Platform.onEnterForegroundSignal = new Signal_1.default();
    Platform.isAndroid = false;
    Platform.isIOS = false;
    Platform.configGetSignal = new Signal_1.default();
    return Platform;
}());
exports.default = Platform;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxQbGF0Zm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQW9DO0FBQ3BDLGdFQUF3RDtBQUN4RCx5Q0FBb0M7QUFFcEMsMEVBQXFFO0FBQ3JFLHNEQUFpRDtBQUNqRCxtRUFBMkQ7QUFFM0QsSUFBSyxVQU1KO0FBTkQsV0FBSyxVQUFVO0lBRVgsNENBQVMsQ0FBQTtJQUNULDZDQUFJLENBQUE7SUFDSix1REFBUyxDQUFBO0lBQ1QsNkNBQUksQ0FBQTtBQUNSLENBQUMsRUFOSSxVQUFVLEtBQVYsVUFBVSxRQU1kO0FBRUQ7SUFBQTtJQTJYQSxDQUFDO0lBblhVLGtCQUFTLEdBQWhCO1FBRUksSUFBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFDeEM7WUFDSSxVQUFVO1lBQ1YsSUFBSSxRQUFRLEdBQUcsV0FBSyxDQUFDLFFBQVEsQ0FBQTtZQUM3QixJQUFHLFFBQVEsSUFBSSxRQUFRLENBQUMsTUFBTSxFQUM5QjtnQkFDSSxPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUE7YUFDekI7aUJBQUk7Z0JBQ0QsT0FBTyxFQUFFLENBQUE7YUFDWjtTQUNKO2FBQUssSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFDM0M7WUFDSSxPQUFPLGNBQWMsQ0FBQyxNQUFNLENBQUM7U0FDaEM7YUFBSTtZQUNELE9BQU8sS0FBSyxDQUFBO1NBQ2Y7SUFDTCxDQUFDO0lBRU0sZ0JBQU8sR0FBZDtRQUVJLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQ3JDO1lBQ0ksT0FBTyxnQkFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQzNCO2FBQUssSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsSUFBSSxFQUFF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LEdBQUcsQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQ3BDO1lBQ0ksZ0JBQU0sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDN0I7YUFBSyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO1lBQzdDLHlDQUF5QztZQUN6QyxXQUFLLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFBO1NBQzNCO2FBQUk7WUFDRCx3Q0FBd0M7U0FDM0M7SUFDTCxDQUFDO0lBdlhNLDhCQUFxQixHQUFHLElBQUksQ0FBQztJQUM3QixnQ0FBdUIsR0FBRyxJQUFJLGdCQUFNLEVBQUUsQ0FBQztJQUV2QyxrQkFBUyxHQUFHLEtBQUssQ0FBQTtJQUNqQixjQUFLLEdBQUcsS0FBSyxDQUFDO0lBd0dkLHdCQUFlLEdBQVUsSUFBSSxnQkFBTSxFQUFFLENBQUM7SUE2UWpELGVBQUM7Q0EzWEQsQUEyWEMsSUFBQTtrQkEzWG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB3eHNkayB9IGZyb20gXCIuL3d4c2RrL3Nka1wiO1xyXG5pbXBvcnQgeyBUb2FzdCB9IGZyb20gXCIuL3BsdWdpbl9ib29zdHMvdWkvVG9hc3RNYW5hZ2VyXCI7XHJcbmltcG9ydCBCS1Rvb2wgZnJvbSBcIi4vcXFzZGsvQktUb29sXCI7XHJcbmltcG9ydCBEZXZpY2UgZnJvbSBcIi4vcGx1Z2luX2Jvb3N0cy9nYW1lc3lzL0RldmljZVwiO1xyXG5pbXBvcnQgU3ByaXRlRnJhbWVDYWNoZSBmcm9tIFwiLi9wbHVnaW5fYm9vc3RzL21pc2MvU3ByaXRlRnJhbWVDYWNoZVwiO1xyXG5pbXBvcnQgU2lnbmFsIGZyb20gXCIuL3BsdWdpbl9ib29zdHMvbWlzYy9TaWduYWxcIjtcclxuaW1wb3J0IHsgZXZlbnQgfSBmcm9tIFwiLi9wbHVnaW5fYm9vc3RzL3V0aWxzL0V2ZW50TWFuYWdlclwiO1xyXG5cclxuZW51bSBXeENvbW1hbmRzXHJcbntcclxuICAgIEhpZGUgPSA5OSxcclxuICAgIE5leHQsXHJcbiAgICBSYW5rU21hbGwsXHJcbiAgICBSYW5rLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF0Zm9ybVxyXG57XHJcbiAgICBzdGF0aWMgYmFubm5lclJlZnJlc2hFbmFibGVkID0gdHJ1ZTtcclxuICAgIHN0YXRpYyBvbkVudGVyRm9yZWdyb3VuZFNpZ25hbCA9IG5ldyBTaWduYWwoKTtcclxuXHJcbiAgICBzdGF0aWMgaXNBbmRyb2lkID0gZmFsc2VcclxuICAgIHN0YXRpYyBpc0lPUyA9IGZhbHNlO1xyXG5cclxuICAgIHN0YXRpYyBnZXRPcGVuSUQoKVxyXG4gICAge1xyXG4gICAgICAgIGlmKGNjLnN5cy5XRUNIQVRfR0FNRSA9PSBjYy5zeXMucGxhdGZvcm0pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyB3ZWNoYXQgXHJcbiAgICAgICAgICAgIGxldCB1c2VySW5mbyA9IHd4c2RrLnVzZXJJbmZvXHJcbiAgICAgICAgICAgIGlmKHVzZXJJbmZvICYmIHVzZXJJbmZvLm9wZW5JRCApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB1c2VySW5mby5vcGVuSURcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2UgaWYgKGNjLnN5cy5RUV9QTEFZID09IGNjLnN5cy5wbGF0Zm9ybSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBHYW1lU3RhdHVzSW5mby5vcGVuSWQ7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiBcIjEyM1wiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXROaWNrKClcclxuICAgIHtcclxuICAgICAgICBpZiAoY2Muc3lzLlFRX1BMQVkgPT0gY2Muc3lzLnBsYXRmb3JtKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIEJLVG9vbC5nZXROaWNrKCk7XHJcbiAgICAgICAgfWVsc2UgaWYgKGNjLnN5cy5XRUNIQVRfR0FNRSA9PSBjYy5zeXMucGxhdGZvcm0pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gICh3eHNkay51c2VySW5mbyAmJiB3eHNkay51c2VySW5mby5uaWNrTmFtZSkgIHx8IFwi6Ieq5beyXCJcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuIFwi546p5a626Ieq5beyXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldEhlYWQoKVxyXG4gICAge1xyXG4gICAgICAgIGlmIChjYy5zeXMuUVFfUExBWSA9PSBjYy5zeXMucGxhdGZvcm0pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gQktUb29sLmdldEhlYWQoKTtcclxuICAgICAgICB9ZWxzZSBpZiAoY2Muc3lzLldFQ0hBVF9HQU1FID09IGNjLnN5cy5wbGF0Zm9ybSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIGF2YXRhclVybDpcImh0dHBzOi8vd3gucWxvZ28uY24vbW1vcGVuL3ZpXzMyL1FsSGFpY0daT0Q3ZG85THVYNVc0QVBIWVNyVUJxVmFHVUx1d0lTTFVmMzVJeU9PWVozSVhsN25GNW1XMzZKaWFROXNuemlhd3JBdmtrblg0MVNtZVlhOUFRLzEzMlwiY2l0eTpcIlwiY291bnRyeTpcIlwiZ2VuZGVyOjFsYW5ndWFnZTpcInpoX0NOXCJuaWNrTmFtZTpcIkRhbW9uIFJlbuKBtuKBtuKBtlwicHJvdmluY2U6XCJcIlxyXG4gICAgICAgICAgICBsZXQgdXNlckluZm8gPSB3eHNkay51c2VySW5mb1xyXG4gICAgICAgICAgICBpZih1c2VySW5mbyAmJiB1c2VySW5mby5hdmF0YXJVcmwgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlckluZm8uYXZhdGFyVXJsXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiaHR0cHM6Ly90YW5rLndkZnVubnkuY29tL3NwZWVkX2xvZ28vMi5qcGdcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBcImh0dHBzOi8vdGFuay53ZGZ1bm55LmNvbS9zcGVlZF9sb2dvLzEuanBnXCJcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBsb2FkSGVhZFFRKHNwKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBsZXQgYWJzb2x1dGVQYXRoID0gXCJHYW1lU2FuZEJveDovL19oZWFkL1wiICsgR2FtZVN0YXR1c0luZm8ub3BlbklkICsgXCIuanBnXCI7XHJcbiAgICAgICAgbGV0IGlzRXhpdCA9IEJLLkZpbGVVdGlsLmlzRmlsZUV4aXN0KGFic29sdXRlUGF0aCk7XHJcbiAgICAgICAgY2MubG9nKGFic29sdXRlUGF0aCArIFwiIGlzIGV4aXQgOlwiICsgaXNFeGl0KTtcclxuICAgICAgICAvL+WmguaenOaMh+WumuebruW9leS4reWtmOWcqOatpOWbvuWDj+WwseebtOaOpeaYvuekuuWQpuWImeS7jue9kee7nOiOt+WPllxyXG4gICAgICAgIGlmIChpc0V4aXQpIHtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWQoYWJzb2x1dGVQYXRoLCBmdW5jdGlvbiAoZXJyLCB0ZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBzcC5zcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgQksuTVFRLkFjY291bnQuZ2V0SGVhZEV4KEdhbWVTdGF0dXNJbmZvLm9wZW5JZCwgZnVuY3Rpb24gKG9JZCwgaW1nUGF0aCkge1xyXG4gICAgICAgICAgICAgICAgY2MubG9nKFwib3BlbklkOlwiICsgb0lkICsgXCIgaW1nUGF0aDpcIiArIGltZ1BhdGgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgICAgICAgICBpbWFnZS5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRleCA9IG5ldyBjYy5UZXh0dXJlMkQoKTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXguaW5pdFdpdGhFbGVtZW50KGltYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXguaGFuZGxlTG9hZGVkVGV4dHVyZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNwLnNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpbWFnZS5zcmMgPSBpbWdQYXRoO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGxvYWRTZWxmSGVhZChzcHJpdGUpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKGNjLnN5cy5RUV9QTEFZID09IGNjLnN5cy5wbGF0Zm9ybSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZEhlYWRRUShzcHJpdGUpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBTcHJpdGVGcmFtZUNhY2hlLmluc3RhbmNlLmdldFNwcml0ZUZyYW1lKFBsYXRmb3JtLmdldEhlYWQoKSkudGhlbihzZj0+c3ByaXRlLnNwcml0ZUZyYW1lID0gc2YpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBleGl0KClcclxuICAgIHtcclxuICAgICAgICBpZihjYy5zeXMuV0VDSEFUX0dBTUUgPT0gY2Muc3lzLnBsYXRmb3JtKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgd3gub2ZmU2hvdyhQbGF0Zm9ybS5vbkVudGVyRm9yZWdyb3VuZClcclxuICAgICAgICAgICAgd3gub2ZmSGlkZShQbGF0Zm9ybS5vbkVudGVyQmFja2dyb3VuZClcclxuICAgICAgICB9ZWxzZSBpZiAoY2Muc3lzLlFRX1BMQVkgPT0gY2Muc3lzLnBsYXRmb3JtKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjb25maWdHZXRTaWduYWw6U2lnbmFsID0gbmV3IFNpZ25hbCgpO1xyXG5cclxuICAgIHN0YXRpYyBsb2dpbigpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5pc0FuZHJvaWQgPSBjYy5zeXMub3MgPT0gXCJBbmRyb2lkXCJcclxuICAgICAgICBjb25zb2xlLmxvZyhcIj09PT09PT09PT09PT09PT09IG9zXCIgLCBjYy5zeXMub3MpO1xyXG4gICAgICAgIHRoaXMuaXNJT1MgPSBjYy5zeXMub3MgPT0gXCJpT1NcIlxyXG4gICAgICAgIGlmKGNjLnN5cy5XRUNIQVRfR0FNRSA9PSBjYy5zeXMucGxhdGZvcm0pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB3eHNkay5sb2dpbigpXHJcbiAgICAgICAgICAgIHd4c2RrLnJlcXVlc3RDb25maWcoZGF0YT0+e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWdHZXRTaWduYWwuZmlyZShkYXRhKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAvLyBnZXQgY29uZiBcclxuICAgICAgICAgICAgd3gub25TaG93KFBsYXRmb3JtLm9uRW50ZXJGb3JlZ3JvdW5kKVxyXG4gICAgICAgICAgICB3eC5vbkhpZGUoUGxhdGZvcm0ub25FbnRlckJhY2tncm91bmQpXHJcbiAgICAgICAgfWVsc2UgaWYgKGNjLnN5cy5RUV9QTEFZID09IGNjLnN5cy5wbGF0Zm9ybSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEJLVG9vbC5sb2dpbigpO1xyXG4gICAgICAgICAgICBCSy5vbkVudGVyRm9yZWdyb3VuZChQbGF0Zm9ybS5vbkVudGVyRm9yZWdyb3VuZCk7XHJcbiAgICAgICAgICAgIEJLLm9uRW50ZXJCYWNrZ3JvdW5kKFBsYXRmb3JtLm9uRW50ZXJCYWNrZ3JvdW5kKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHJlcXVlc3RTZXJ2ZXJDb25maWdzKG5hbWUsY2FsbGJhY2ssdGFyZ2V0KVxyXG4gICAge1xyXG4gICAgICAgIGlmKGNjLnN5cy5XRUNIQVRfR0FNRSA9PSBjYy5zeXMucGxhdGZvcm0pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB3eHNkay5yZXF1ZXN0REIobmFtZSxjYWxsYmFjayx0YXJnZXQpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRHYW1lSUQoKVxyXG4gICAge1xyXG4gICAgICAgIGlmIChjYy5zeXMuUVFfUExBWSA9PSBjYy5zeXMucGxhdGZvcm0pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBHYW1lU3RhdHVzSW5mby5nYW1lSWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBcInNwZWVkX3dhbnlpd2FuXCI7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHN0YXRpYyBnZXRMYXVuY2hPcHRpb25zKClcclxuICAgIHtcclxuICAgICAgICBpZihjYy5zeXMuV0VDSEFUX0dBTUUgPT0gY2Muc3lzLnBsYXRmb3JtKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHd4LmdldExhdW5jaE9wdGlvbnNTeW5jKClcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHt9XHJcbiAgICB9XHJcblxyXG4gICAgXHJcblxyXG5cclxuICAgIHN0YXRpYyBnZXRDaXR5KClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gXCJcIlxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzaGFyZShjYWxsYmFjaz8sdGFyZ2V0PylcclxuICAgIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIiMjIyMjI+W8gOWni+WIhuS6q1wiKVxyXG4gICAgICAgIGlmKGNjLnN5cy5XRUNIQVRfR0FNRSA9PSBjYy5zeXMucGxhdGZvcm0pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB3eHNkay5vcGVuU2hhcmUoKTtcclxuICAgICAgICAgICAgbGV0IHQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKVxyXG4gICAgICAgICAgICBQbGF0Zm9ybS5vbkVudGVyRm9yZWdyb3VuZFNpZ25hbC5vbigoKT0+e1xyXG4gICAgICAgICAgICAgICAgUGxhdGZvcm0ub25FbnRlckZvcmVncm91bmRTaWduYWwuY2xlYXIoKTtcclxuICAgICAgICAgICAgICAgIGxldCBkID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSB0O1xyXG4gICAgICAgICAgICAgICAgaWYoZCA+IDIzMzMpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChfPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNhbGxiYWNrKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0YXJnZXQpXHJcbiAgICAgICAgICAgICAgICAgICAgfSw1MDApXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAvL+eUqOaIt+WPiuaXtui/lOWbnuWIhuS6q+Wksei0pSBcclxuICAgICAgICAgICAgICAgICAgICBUb2FzdC5tYWtlKFwi5YiG5Lqr5aSx6LSlLOivt+WwneivleaNouWFtuWug+e+pOWIhuS6q1wiKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1lbHNlIGlmKGNjLnN5cy5RUV9QTEFZID09IGNjLnN5cy5wbGF0Zm9ybSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEJLVG9vbC5zaGFyZSh2PT57XHJcbiAgICAgICAgICAgICAgICBpZih2PT1cInN1Y2Nlc3NcIilcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayAmJiAgY2FsbGJhY2suY2FsbCh0YXJnZXQpXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAvLyBUb2FzdC5tYWtlKFwi5YiG5Lqr5aSx6LSlXCIpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrICYmICBjYWxsYmFjay5jYWxsKHRhcmdldClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHdhdGNoX3ZpZGVvKGNhbGxiYWNrLHRhcmdldD8pXHJcbiAgICB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCIjIyMjIyPlvIDlp4vnnIvop4bpopFcIilcclxuICAgICAgICBpZihjYy5zeXMuV0VDSEFUX0dBTUUgPT0gY2Muc3lzLnBsYXRmb3JtKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgd3hzZGsubG9hZFZpZGVvQWQoKGNvZGUsaXNFbmRlZCk9PntcclxuICAgICAgICAgICAgICAgIGlmKGNvZGUgPT0gXCJsb2FkXCIpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGF1c2VNdXNpYygpO1xyXG4gICAgICAgICAgICAgICAgICAgIFBsYXRmb3JtLmJhbm5uZXJSZWZyZXNoRW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZihjb2RlID09IFwiY2xvc2VcIilcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBQbGF0Zm9ybS5iYW5ubmVyUmVmcmVzaEVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCFpc0VuZGVkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUb2FzdC5tYWtlKFwi5b+F6aG755yL5a6M6KeG6aKRLOaJjeiDveiOt+WPluWlluWKsVwiKVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2suY2FsbCh0YXJnZXQpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfWVsc2UgaWYoY2Muc3lzLlFRX1BMQVkgPT0gY2Muc3lzLnBsYXRmb3JtKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy/lhbPpl63og4zmma9cclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGF1c2VNdXNpYygpO1xyXG4gICAgICAgICAgICBsZXQgaXNGaW5pc2ggPSBmYWxzZTtcclxuICAgICAgICAgICAgQktUb29sLmxvYWRWaWRlb0FkKCh2LHZpZGVvKT0+e1xyXG4gICAgICAgICAgICAgICAgaWYodiA9PSBcImxvYWRcIilcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB2aWRlby5zaG93KClcclxuICAgICAgICAgICAgICAgIH1lbHNlIGlmICh2ID09IFwiZmluaXNoXCIpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNGaW5pc2ggPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYgKHY9PVwiY2xvc2VcIilcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZighaXNGaW5pc2gpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0Lm1ha2UoXCLlv4XpobvnnIvlrozop4bpopEs5omN6IO96I635Y+W5aWW5YqxXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjay5jYWxsKHRhcmdldClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrICYmICBjYWxsYmFjay5jYWxsKHRhcmdldClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNob3dCYW5uZXJBZCgpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCIjIyMjIyPmmL7npLpCYW5uZXLlub/lkYpcIilcclxuICAgICAgICBpZihjYy5zeXMuV0VDSEFUX0dBTUUgPT0gY2Muc3lzLnBsYXRmb3JtKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgd3hzZGsuc2hvd0Jhbm5lckFkKCk7XHJcbiAgICAgICAgfWVsc2UgaWYoY2Muc3lzLlFRX1BMQVkgPT0gY2Muc3lzLnBsYXRmb3JtKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQktUb29sLnNob3dCYW5uZXJBZCgpO1xyXG4gICAgICAgIH1lbHNle1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGluaXRCYW5uZXJBZChiID0gMSlcclxuICAgIHtcclxuICAgICAgICBpZihiID09IDApIHJldHVybjtcclxuICAgICAgICBpZihjYy5zeXMuUVFfUExBWSA9PSBjYy5zeXMucGxhdGZvcm0pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzZXRJbnRlcnZhbChfPT57XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIiMjIyMjI+WKoOi9vUJhbm5lcuW5v+WRilwiKVxyXG4gICAgICAgICAgICAgICAgQktUb29sLmhpZGVCYW5uZXJBZCgpXHJcbiAgICAgICAgICAgICAgICBCS1Rvb2wubG9hZEJhbm5lckFkKHY9PntcclxuICAgICAgICAgICAgICAgICAgICB2ID09IFwibG9hZFwiICYmIEJLVG9vbC5zaG93QmFubmVyQWQoKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0gLCAzMDAwMCApXHJcbiAgICAgICAgfWVsc2UgaWYgKGNjLnN5cy5XRUNIQVRfR0FNRSA9PSBjYy5zeXMucGxhdGZvcm0pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzZXRJbnRlcnZhbChfPT57XHJcbiAgICAgICAgICAgICAgICBpZihQbGF0Zm9ybS5iYW5ubmVyUmVmcmVzaEVuYWJsZWQpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIjIyMjIyPliqDovb1CYW5uZXLlub/lkYpcIilcclxuICAgICAgICAgICAgICAgICAgICB3eHNkay5oaWRlQmFubmVyQWQoKVxyXG4gICAgICAgICAgICAgICAgICAgIHd4c2RrLmxvYWRCYW5uZXJBZCh2PT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYgPT0gXCJsb2FkXCIgJiYgd3hzZGsuc2hvd0Jhbm5lckFkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSAsIDQwMDAwIClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGp1bXBUbygpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gdmFyIGRlc0dhbWVJZCA9IDEyMzQ7IC8v6Lez6L2s55qEZ2FtZWlk77yM5b+F6aG75Li65pWw5a2XXHJcbiAgICAgICAgLy8gdmFyIGV4dGVuZEluZm8gPSBcIlwiOyAvL+mineWkluWPguaVsO+8jOW/hemhu+S4uuWtl+espuS4slxyXG4gICAgICAgIC8vIEJLLlFRLnNraXBHYW1lKGRlc0dhbWVJZCwgZXh0ZW5kSW5mbyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNob3dSYW5rRGlhbG9nKClcclxuICAgIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIltQbGF0Zm9ybV0jc2hvd1JhbmtEaWFsb2dcIik7XHJcbiAgICAgICAgVG9hc3QubWFrZShcIiNbUGxhdGZvcm1dI3Nob3dSYW5rRGlhbG9nXCIpXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gVmlld01hbmFnZXIuaW5zdGFuY2Uuc2hvdyhcIkdhbWUvUmFua0RpYWxvZ1wiKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEFuZHJpb2Qg5Y+R6YCB5ri45oiP5b+r5o235pa55byP5Yiw5qGM6Z2iXHJcblxyXG4gICAgc3RhdGljIG9uRW50ZXJGb3JlZ3JvdW5kKClcclxuICAgIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIj09PT09PT09PT09PT09PT09PT09PW9uRW50ZXJGb3JlZ3JvdW5kPT09PT09PT09PT09PT09PT09PT09XCIpXHJcbiAgICAgICAgaWYoY2Muc3lzLnBsYXRmb3JtID09IGNjLnN5cy5RUV9QTEFZKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy9vbkVudGVyRm9yZWdyb3VuZFxyXG4gICAgICAgICAgICAvLyBEZXZpY2UucmVzdW1lTXVzaWMoKVxyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5yZXN1bWVNdXNpYygpXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnJlc3VtZU11c2ljKClcclxuICAgICAgICB9XHJcbiAgICAgICAgUGxhdGZvcm0ub25FbnRlckZvcmVncm91bmRTaWduYWwuZmlyZSgpO1xyXG4gICAgICAgIGV2ZW50LmVtaXQoXCJvbkVudGVyRm9yZWdyb3VuZFwiKVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBvbkVudGVyQmFja2dyb3VuZCgpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gQksub25FbnRlckJhY2tncm91bmQoZW50ZXJCYWNrZ3JvdW5kTGlzdGVuZXIpO1xyXG4gICAgICAgIGV2ZW50LmVtaXQoXCJvbkVudGVyQmFja2dyb3VuZFwiKVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyAgb25HYW1lRXhpdCgpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gQksub25HYW1lQ2xvc2UoZ2FtZUNsb3NlTGlzdGVuZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzaG93U21hbGxSYW5rKClcclxuICAgIHtcclxuICAgICAgICB3eHNkay5wb3N0TWVzc2FnZShXeENvbW1hbmRzLlJhbmtTbWFsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNob3dSYW5rKClcclxuICAgIHtcclxuICAgICAgICB3eHNkay5wb3N0TWVzc2FnZShXeENvbW1hbmRzLlJhbmspO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBoaWRlUmFuaygpXHJcbiAgICB7XHJcbiAgICAgICAgd3hzZGsucG9zdE1lc3NhZ2UoV3hDb21tYW5kcy5SYW5rU21hbGwpXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldFJhbmtMaXN0KGNhbGxiYWNrLHRhcmdldD8pXHJcbiAgICB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJbUGxhdGZvcm1dI+iOt+WPluaOkuihjOamnOaVsOaNrlwiKTtcclxuICAgICAgICBpZihjYy5zeXMucGxhdGZvcm0gPT0gY2Muc3lzLlFRX1BMQVkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gQktUb29sLmdldFJhbmtMaXN0KChlcnJvckNvZGUsbGlzdCk9PntcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrLmNhbGwodGFyZ2V0LGVycm9yQ29kZSxsaXN0KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9ZWxzZSBpZihjYy5zeXMucGxhdGZvcm0gPT0gY2Muc3lzLldFQ0hBVF9HQU1FKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyB1cGxvYWRTY29yZShzY29yZSlcclxuICAgIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIltQbGF0Zm9ybV0j5LiK5Lyg5YiG5pWwXCIpO1xyXG4gICAgICAgIGlmKCFzY29yZSkgeyBjb25zb2xlLmxvZyhcInNjb3JlIOS4iuS8oOWksei0pe+8mm51bGxcIik7IHJldHVybn1cclxuICAgICAgICBpZihjYy5zeXMucGxhdGZvcm0gPT0gY2Muc3lzLlFRX1BMQVkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBCS1Rvb2wudXBsb2FkU2NvcmUoc2NvcmUpO1xyXG4gICAgICAgIH1lbHNlIGlmIChjYy5zeXMuV0VDSEFUX0dBTUUgPT0gY2Muc3lzLnBsYXRmb3JtKSB7XHJcbiAgICAgICAgICAgIC8vIHd4c2RrLnBvc3RNZXNzYWdlKFd4Q29tbWFuZHMuLCBzY29yZSk7XHJcbiAgICAgICAgICAgIHd4c2RrLnVwbG9hZFNjb3JlKHNjb3JlKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAvLyBUb2FzdC5tYWtlKFwiI1tQbGF0Zm9ybV0jdXBsb2FkU2NvcmVcIilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59Il19