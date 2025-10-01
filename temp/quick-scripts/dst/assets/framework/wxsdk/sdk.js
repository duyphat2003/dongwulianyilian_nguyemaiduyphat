
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/wxsdk/sdk.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '39d4a0B6RRGXqBM/1udBqAy', 'sdk');
// framework/wxsdk/sdk.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.wxsdk = void 0;
var EventManager_1 = require("../plugin_boosts/utils/EventManager");
var GameConfigs_1 = require("./GameConfigs");
var Global = /** @class */ (function () {
    function Global() {
    }
    Global.videoAd = undefined;
    Global.bannerAd = undefined;
    Global.videoAdLoadCount = 0; //视频广告加载次数
    Global.bannerAdLoadCount = 0; //banner广告加载次数
    return Global;
}());
var WxSdk = /** @class */ (function () {
    function WxSdk() {
    }
    Object.defineProperty(WxSdk.prototype, "Ver", {
        get: function () { return this._version; },
        enumerable: false,
        configurable: true
    });
    WxSdk.prototype.init = function () {
        if (g.iswxgame()) {
            if (this._version == null) {
                this._systemInfo = wx.getSystemInfoSync();
                var ver = this._systemInfo.SDKVersion.replace(/\./g, "");
                this._version = parseInt(ver);
            }
        }
    };
    WxSdk.prototype.requestDB = function (tbname, callback, target) {
        this._db.collection(tbname).get({
            success: function (res) {
                console.log("get " + tbname + " succ:", res.data);
                // self._shareConfig = res.data;
                if (callback)
                    callback.call(target, res.data);
            },
            fail: function (res) {
                console.log("get " + tbname + " fail:");
                if (callback)
                    callback.call(target);
            }
        });
    };
    WxSdk.prototype.requestConfig = function (callback) {
        this._db.collection("t_conf").get({
            success: function (res) {
                console.log("get configs succ:", res.data);
                // self._shareConfig = res.data;
                if (callback)
                    callback(res.data);
            },
            fail: function (res) {
                console.log("get configs fail:", res);
                if (callback)
                    callback(null);
            }
        });
    };
    WxSdk.prototype.requestShareContent = function (callback) {
        var self = this;
        if (this._shareConfig == null) {
            this._db.collection("t_share").get({
                success: function (res) {
                    console.log("share configs succ:", res.data);
                    self._shareConfig = res.data;
                    if (res.data && res.data.length > 0) {
                        var len = res.data.length;
                        var info = res.data[g.randomInt(0, len)];
                        if (callback)
                            callback(info);
                    }
                    else {
                        if (callback)
                            callback(null);
                    }
                }, fail: function (res) {
                    console.log("share configs fail:", res);
                    if (callback)
                        callback(null);
                }
            });
        }
        else {
            var len = this._shareConfig.length;
            var info = this._shareConfig[g.randomInt(0, len)];
            if (callback)
                callback(info);
        }
    };
    WxSdk.prototype.getShareContentSync = function () {
        if (this._shareConfig && this._shareConfig.length > 0) {
            var len = this._shareConfig.length;
            var info = this._shareConfig[g.randomInt(0, len)];
            return info;
        }
        else {
            return { title: GameConfigs_1.GameConfig.default_share_title, imageUrl: cc.url.raw(GameConfigs_1.GameConfig.deafult_share_imgUrl) };
        }
    };
    WxSdk.prototype.getShareContent = function (title) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.requestShareContent(function (info) {
                if (info)
                    resolve(info);
                else {
                    // reject("share config get failed!")
                    var ret = {
                        title: title || GameConfigs_1.GameConfig.default_share_title,
                        imageUrl: cc.url.raw(GameConfigs_1.GameConfig.deafult_share_imgUrl),
                    };
                    resolve(ret);
                }
            });
        });
    };
    WxSdk.prototype.openShare = function (title, uuid, extra) {
        if (extra === void 0) { extra = ""; }
        return __awaiter(this, void 0, void 0, function () {
            var info;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!g.iswxgame())
                            return [2 /*return*/];
                        return [4 /*yield*/, this.getShareContent(title)];
                    case 1:
                        info = _a.sent();
                        console.log(info);
                        if (info != null) {
                            // if(this._userInfo && this._userInfo.openId)
                            uuid = uuid || (this._userInfo && this._userInfo.openId) || 0;
                            info.query = "share_id=" + uuid + "&time=" + new Date().getTime() + "&" + extra;
                            // info.callback = ret=>{
                            //     console.error("=>>>>>>>share:" ,ret);
                            // }
                            console.log("open Share", info.query);
                            wx.shareAppMessage(info);
                            // this.recordShare(Share.GAME, uuid);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    WxSdk.prototype.createButton = function (callback, x, y, width, height) {
        console.log("-------------createButton");
        var button = wx.createUserInfoButton({
            type: "text",
            text: "     ",
            style: {
                x: x || 0, y: y || 0,
                width: width || cc.winSize.width,
                height: height || cc.winSize.height,
                lineHeight: 40,
                backgroundColor: '#00000000',
                color: '#ffffff'
            }
        });
        button.onTap(function (res) {
            button.destroy();
            if (res && res.userInfo) {
                if (callback)
                    callback(res);
            }
            else if (callback)
                callback(null);
        });
    };
    Object.defineProperty(WxSdk.prototype, "userInfo", {
        get: function () {
            return this._userInfo.userInfo;
        },
        enumerable: false,
        configurable: true
    });
    WxSdk.prototype.getUserInfo = function (callback) {
        console.log("-------------getUserInfo");
        wx.getUserInfo({
            withCredentials: true,
            lang: "zh_CN",
            success: function (res) {
                console.log("getUserInfo success.", res);
                if (callback)
                    callback(res);
            }, fail: function (res) {
                console.log("getUserInfo:", res);
                if (callback)
                    callback(null);
            },
            complete: null
        });
    };
    WxSdk.prototype.oldAuthUser = function (callback) {
        wx.authorize({
            scope: "scope.userInfo",
            success: function (res) {
                console.log(res);
                if (callback)
                    callback(true);
            }, fail: function (res) {
                console.log(res);
                if (callback)
                    callback(false);
            },
            complete: null
        });
    };
    WxSdk.prototype.authUserInfo = function (callback) {
        this.wxLogin(function (isLogin) {
            if (!isLogin)
                return;
            wx.getSetting({
                success: function (res) {
                    var auth = res.authSetting;
                    if (auth["scope.userInfo"]) {
                        if (callback)
                            callback(true);
                    }
                    else if (callback)
                        callback(false);
                },
                fail: null,
                complete: null,
            });
        });
    };
    WxSdk.prototype.showShareMenu = function () {
        var self = this;
        wx.showShareMenu({
            withShareTicket: true,
            success: function (res) {
                console.log(res);
            }, fail: function (res) {
                console.log(res);
            },
            complete: null
        });
        wx.onShareAppMessage(function () {
            var content = self.getShareContentSync();
            return content;
        });
    };
    WxSdk.prototype.wxLogin = function (callback) {
        wx.login({
            success: function (res) {
                console.log("code ", res.code);
                if (callback)
                    callback(true);
            }, fail: function (res) {
                if (callback)
                    callback(false);
            },
            complete: null
        });
    };
    WxSdk.prototype.loginToServer = function (userInfo) {
        if (userInfo == null)
            userInfo = {};
        this._userInfo = userInfo;
        userInfo.parentId = this._parentId;
        this.showShareMenu();
        EventManager_1.event.emit("wxlogin");
    };
    WxSdk.prototype.login = function (x, y, width, height) {
        if (!g.iswxgame())
            return;
        var self = this;
        wx.cloud.init({ traceUser: true });
        // this._db = wx.cloud.database({env: "release-2c87c4"});//测试环境
        this._db = wx.cloud.database();
        self.authUserInfo(function (isAuth) {
            if (self._userInfo == null ||
                self._userInfo.userInfo == null) {
                if (self._version >= 220 && !isAuth) {
                    self.createButton(function (userInfo) {
                        self.loginToServer(userInfo);
                    }, x, y, width, height);
                }
                else {
                    if (!isAuth) {
                        self.oldAuthUser(function (isAuth) {
                            if (isAuth) {
                                self.getUserInfo(function (userInfo) {
                                    self.loginToServer(userInfo);
                                });
                            }
                            else
                                self.loginToServer(null);
                        });
                    }
                    else
                        self.getUserInfo(function (userInfo) {
                            self.loginToServer(userInfo);
                        });
                }
            }
        });
    };
    WxSdk.prototype.getParent = function () {
        if (!g.iswxgame())
            return "";
        var info = wx.getLaunchOptionsSync();
        if (info.scene == 1007 || info.scene == 1008) { //通过分享进入游戏
            var openId = info.query["user_id"];
            return openId;
        }
        return ""; //默认
    };
    //发送消息到子域
    WxSdk.prototype.postMessage = function (cmd, data) {
        if (g.iswxgame()) {
            wx.getOpenDataContext().postMessage({
                cmd: cmd,
                data: data
            });
        }
    };
    WxSdk.prototype.uploadScore = function (score, callback) {
        var kvDataList = new Array();
        kvDataList.push({
            key: "score",
            value: score + ""
        });
        var obj = {
            KVDataList: kvDataList,
            success: function (d) {
                if (callback)
                    callback(d);
            },
            fail: function () { },
            complete: function () { },
        };
        wx.setUserCloudStorage(obj);
        // "wxgame": {
        //     "score": 16,
        //     "update_time": 1513080573
        // },
        // "cost_ms": 36500
    };
    WxSdk.prototype.loadBannerAd = function (callback) {
        var _this = this;
        if (Global.bannerAd) {
            Global.bannerAd.destroy();
        }
        if (!this._systemInfo)
            this._systemInfo = wx.getSystemInfoSync();
        var bannerAd = wx.createBannerAd({
            adUnitId: 'adunit-fe3c074ad86d1b59',
            style: {
                left: 0,
                top: 0,
                width: this._systemInfo.windowWidth
            }
        });
        bannerAd.onLoad(function () {
            Global.bannerAd = bannerAd;
            Global.bannerAdLoadCount = 0;
            bannerAd.style.left = _this._systemInfo.windowWidth / 2 - bannerAd.style.realWidth / 2;
            bannerAd.style.top = _this._systemInfo.windowHeight - bannerAd.style.realHeight;
            if (callback)
                callback("load", bannerAd);
        });
        bannerAd.onError(function (err) {
            //加载失败
            console.log("wxsdk onError code:" + err.code + " msg:" + err.msg);
            Global.bannerAdLoadCount += 1;
            if (Global.bannerAdLoadCount < 4) {
                _this.loadBannerAd(callback);
            }
            if (callback)
                callback("error");
        });
    };
    WxSdk.prototype.showBannerAd = function () {
        var _this = this;
        console.log("Wxsdk 显示banner广告", Global.bannerAd);
        if (Global.bannerAd) {
            Global.bannerAd.show();
        }
        else {
            console.log("Wxsdk 不存在banner资源....");
            this.loadBannerAd(function (v, ad) {
                if (v == "load") {
                    _this.showBannerAd();
                }
            });
        }
    };
    WxSdk.prototype.hideBannerAd = function () {
        if (Global.bannerAd) {
            Global.bannerAd.hide();
            // Global.bannerAd = null;
        }
    };
    WxSdk.prototype.loadVideoAd = function (callback) {
        var _this = this;
        console.log("============wxsdk.loadVideoAD");
        // if (!Global.videoAd ) { //如果没有广告资源就加载新的视频广告
        var videoAd = wx.createRewardedVideoAd({
            adUnitId: 'adunit-5214efbe348a768c'
        });
        this.hideBannerAd();
        videoAd.load().then(function () { videoAd.show(); });
        videoAd.onError(function (err) {
            //加载失败
            Global.videoAdLoadCount += 1;
            //尝试4次
            if (Global.videoAdLoadCount < 4) {
                _this.loadVideoAd(callback);
            }
            if (callback)
                callback("error");
        });
        videoAd.onClose(function (ret) {
            //播放结束
            console.log("wxsdk onClose...");
            if (callback)
                callback("close", ret.isEnded);
            Global.videoAd = null;
        });
        videoAd.onLoad(function () {
            //加载成功
            console.log("wxsdk onLoad");
            Global.videoAd = videoAd;
            Global.videoAdLoadCount = 0;
            _this.showBannerAd();
            if (callback)
                callback("load", videoAd);
        });
    };
    return WxSdk;
}());
exports.wxsdk = new WxSdk();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFx3eHNka1xcc2RrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0VBQTREO0FBQzVELDZDQUEyQztBQUUzQztJQUFBO0lBT0EsQ0FBQztJQUxVLGNBQU8sR0FBRSxTQUFTLENBQUE7SUFDbEIsZUFBUSxHQUFFLFNBQVMsQ0FBQTtJQUVuQix1QkFBZ0IsR0FBRSxDQUFDLENBQUEsQ0FBQyxVQUFVO0lBQzlCLHdCQUFpQixHQUFFLENBQUMsQ0FBQSxDQUFDLGNBQWM7SUFDOUMsYUFBQztDQVBELEFBT0MsSUFBQTtBQUNEO0lBQUE7SUE0WUEsQ0FBQztJQW5ZRyxzQkFBVyxzQkFBRzthQUFkLGNBQTJCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBQ2xELG9CQUFJLEdBQUo7UUFDSSxJQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUNiLElBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLEVBQ3hCO2dCQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLGlCQUFpQixFQUFFLENBQUM7Z0JBQzFDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUE7Z0JBQ3hELElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ2pDO1NBQ0o7SUFDTCxDQUFDO0lBRUQseUJBQVMsR0FBVCxVQUFVLE1BQU0sRUFBQyxRQUFRLEVBQUMsTUFBTTtRQUU1QixJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUM7WUFDNUIsT0FBTyxFQUFFLFVBQVMsR0FBRztnQkFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUUsTUFBTSxHQUFFLFFBQVEsRUFBRyxHQUFHLENBQUMsSUFB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LENBQUMsTUFBTSxFQUFHLE9BQU8sQ0FBQyxDQUFBO1FBQzNDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVMLFlBQUM7QUFBRCxDQTVZQSxBQTRZQyxJQUFBO0FBRVUsUUFBQSxLQUFLLEdBQVMsSUFBSSxLQUFLLEVBQUUsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGV2ZW50IH0gZnJvbSBcIi4uL3BsdWdpbl9ib29zdHMvdXRpbHMvRXZlbnRNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IEdhbWVDb25maWcgfSBmcm9tIFwiLi9HYW1lQ29uZmlnc1wiO1xyXG5cclxuY2xhc3MgR2xvYmFsXHJcbntcclxuICAgIHN0YXRpYyB2aWRlb0FkPSB1bmRlZmluZWRcclxuICAgIHN0YXRpYyBiYW5uZXJBZD0gdW5kZWZpbmVkXHJcblxyXG4gICAgc3RhdGljIHZpZGVvQWRMb2FkQ291bnQ9IDAgLy/op4bpopHlub/lkYrliqDovb3mrKHmlbBcclxuICAgIHN0YXRpYyBiYW5uZXJBZExvYWRDb3VudD0gMCAvL2Jhbm5lcuW5v+WRiuWKoOi9veasoeaVsFxyXG59XHJcbmNsYXNzIFd4U2RrIHtcclxuICAgIFxyXG4gICAgX3VzZXJJbmZvOiBhbnk7XHJcbiAgICBfcGFyZW50SWQ6IGFueTtcclxuICAgIF9zaGFyZUNvbmZpZzogYW55O1xyXG4gICAgX2RiOmFueTtcclxuICAgIF92ZXJzaW9uOiBudW1iZXI7XHJcbiAgICBfc3lzdGVtSW5mbzphbnk7XHJcblxyXG4gICAgcHVibGljIGdldCBWZXIoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX3ZlcnNpb247IH1cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgaWYoZy5pc3d4Z2FtZSgpKSB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuX3ZlcnNpb24gPT0gbnVsbClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3lzdGVtSW5mbyA9IHd4LmdldFN5c3RlbUluZm9TeW5jKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgdmVyID0gdGhpcy5fc3lzdGVtSW5mby5TREtWZXJzaW9uLnJlcGxhY2UoL1xcLi9nLCBcIlwiKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fdmVyc2lvbiA9IHBhcnNlSW50KHZlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVxdWVzdERCKHRibmFtZSxjYWxsYmFjayx0YXJnZXQpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5fZGIuY29sbGVjdGlvbih0Ym5hbWUpLmdldCh7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcyl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImdldCBcIisgdGJuYW1lICtcIiBzdWNjOlwiICwgcmVzLmRhdGEpXHJcbiAgICAgICAgICAgICAgICAvLyBzZWxmLl9zaGFyZUNvbmZpZyA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgaWYoY2FsbGJhY2spY2FsbGJhY2suY2FsbCh0YXJnZXQscmVzLmRhdGEpO1xyXG4gICAgICAgICAgICB9LCBmYWlsOiAocmVzKT0+e1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJnZXQgXCIrIHRibmFtZSArXCIgZmFpbDpcIilcclxuICAgICAgICAgICAgICAgIGlmKGNhbGxiYWNrKSBjYWxsYmFjay5jYWxsKHRhcmdldClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlcXVlc3RDb25maWcoY2FsbGJhY2spXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5fZGIuY29sbGVjdGlvbihcInRfY29uZlwiKS5nZXQoe1xyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJnZXQgY29uZmlncyBzdWNjOlwiICwgcmVzLmRhdGEpXHJcbiAgICAgICAgICAgICAgICAvLyBzZWxmLl9zaGFyZUNvbmZpZyA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgaWYoY2FsbGJhY2spY2FsbGJhY2socmVzLmRhdGEpO1xyXG4gICAgICAgICAgICB9LCBmYWlsOiAocmVzKT0+e1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJnZXQgY29uZmlncyBmYWlsOlwiICwgcmVzKVxyXG4gICAgICAgICAgICAgICAgaWYoY2FsbGJhY2spIGNhbGxiYWNrKG51bGwpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlcXVlc3RTaGFyZUNvbnRlbnQoY2FsbGJhY2spIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgaWYodGhpcy5fc2hhcmVDb25maWcgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLl9kYi5jb2xsZWN0aW9uKFwidF9zaGFyZVwiKS5nZXQoe1xyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNoYXJlIGNvbmZpZ3Mgc3VjYzpcIiAsIHJlcy5kYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuX3NoYXJlQ29uZmlnID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzLmRhdGEgJiYgcmVzLmRhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGVuID0gcmVzLmRhdGEubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5mbyA9IHJlcy5kYXRhW2cucmFuZG9tSW50KDAsIGxlbildO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihjYWxsYmFjayljYWxsYmFjayhpbmZvKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNhbGxiYWNrKSBjYWxsYmFjayhudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sIGZhaWw6IChyZXMpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzaGFyZSBjb25maWdzIGZhaWw6XCIgLCByZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoY2FsbGJhY2spIGNhbGxiYWNrKG51bGwpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBsZW4gPSB0aGlzLl9zaGFyZUNvbmZpZy5sZW5ndGg7XHJcbiAgICAgICAgICAgIGxldCBpbmZvID0gdGhpcy5fc2hhcmVDb25maWdbZy5yYW5kb21JbnQoMCwgbGVuKV07XHJcbiAgICAgICAgICAgIGlmKGNhbGxiYWNrKSBjYWxsYmFjayhpbmZvKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U2hhcmVDb250ZW50U3luYygpXHJcbiAgICB7XHJcbiAgICAgICAgaWYodGhpcy5fc2hhcmVDb25maWcgJiYgdGhpcy5fc2hhcmVDb25maWcubGVuZ3RoID4gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBsZW4gPSB0aGlzLl9zaGFyZUNvbmZpZy5sZW5ndGg7XHJcbiAgICAgICAgICAgIGxldCBpbmZvID0gdGhpcy5fc2hhcmVDb25maWdbZy5yYW5kb21JbnQoMCwgbGVuKV07XHJcbiAgICAgICAgICAgIHJldHVybiBpbmZvXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiB7dGl0bGU6R2FtZUNvbmZpZy5kZWZhdWx0X3NoYXJlX3RpdGxlLGltYWdlVXJsOmNjLnVybC5yYXcoR2FtZUNvbmZpZy5kZWFmdWx0X3NoYXJlX2ltZ1VybCl9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0U2hhcmVDb250ZW50KHRpdGxlPyk6UHJvbWlzZTx7dGl0bGU6c3RyaW5nLGltYWdlVXJsOnN0cmluZyxxdWVyeT86c3RyaW5nLHN1Y2Nlc3M/OihyZXM6YW55KT0+dm9pZH0+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e1xyXG4gICAgICAgICAgICB0aGlzLnJlcXVlc3RTaGFyZUNvbnRlbnQoaW5mbz0+e1xyXG4gICAgICAgICAgICAgICAgaWYoaW5mbylcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGluZm8pXHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyByZWplY3QoXCJzaGFyZSBjb25maWcgZ2V0IGZhaWxlZCFcIilcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmV0PSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aXRsZSB8fCBHYW1lQ29uZmlnLmRlZmF1bHRfc2hhcmVfdGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlVXJsOiBjYy51cmwucmF3KEdhbWVDb25maWcuZGVhZnVsdF9zaGFyZV9pbWdVcmwpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpbWFnZVVybDogXCJodHRwczovLzc0NjUtdGVzLTMxM2Y1Ni0xMjU3NjMwMTgwLnRjYi5xY2xvdWQubGEvc2hhcmUveHVhbmNodWFuXzEucG5nP3NpZ249NjUxMzA2ZGRjZDlkZDJmMjRlYTE0ZDI0ZTFkYWRjMGUmdD0xNTM3MDI0NTU4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmV0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIG9wZW5TaGFyZSh0aXRsZT8gLHV1aWQ/LGV4dHJhID0gXCJcIikge1xyXG4gICAgICAgIGlmKCFnLmlzd3hnYW1lKCkpIHJldHVybjtcclxuICAgICAgICBsZXQgaW5mbyA9IGF3YWl0IHRoaXMuZ2V0U2hhcmVDb250ZW50KHRpdGxlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhpbmZvKTtcclxuICAgICAgICBpZihpbmZvICE9IG51bGwpIHtcclxuICAgICAgICAgICAgLy8gaWYodGhpcy5fdXNlckluZm8gJiYgdGhpcy5fdXNlckluZm8ub3BlbklkKVxyXG4gICAgICAgICAgICB1dWlkID0gdXVpZCB8fCAodGhpcy5fdXNlckluZm8gJiZ0aGlzLl91c2VySW5mby5vcGVuSWQpIHx8IDBcclxuICAgICAgICAgICAgaW5mby5xdWVyeSA9IFwic2hhcmVfaWQ9XCIrdXVpZCArIFwiJnRpbWU9XCIrIG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgXCImXCIgK2V4dHJhO1xyXG4gICAgICAgICAgICAvLyBpbmZvLmNhbGxiYWNrID0gcmV0PT57XHJcbiAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmVycm9yKFwiPT4+Pj4+Pj5zaGFyZTpcIiAscmV0KTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9wZW4gU2hhcmVcIixpbmZvLnF1ZXJ5KVxyXG4gICAgICAgICAgICB3eC5zaGFyZUFwcE1lc3NhZ2UoaW5mbyk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMucmVjb3JkU2hhcmUoU2hhcmUuR0FNRSwgdXVpZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlQnV0dG9uKGNhbGxiYWNrLCB4PywgeT8sIHdpZHRoPywgaGVpZ2h0Pykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLWNyZWF0ZUJ1dHRvblwiKTtcclxuICAgICAgICBsZXQgYnV0dG9uID0gd3guY3JlYXRlVXNlckluZm9CdXR0b24oe1xyXG4gICAgICAgICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgICAgICAgdGV4dDpcIiAgICAgXCIsXHJcbiAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICB4OiB4IHx8IDAsIHk6IHkgfHwgMCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiB3aWR0aCB8fCBjYy53aW5TaXplLndpZHRoLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHQgfHwgY2Mud2luU2l6ZS5oZWlnaHQsXHJcbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OjQwLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOicjMDAwMDAwMDAnLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6JyNmZmZmZmYnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBidXR0b24ub25UYXAoZnVuY3Rpb24ocmVzKXtcclxuICAgICAgICAgICAgYnV0dG9uLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgaWYocmVzICYmIHJlcy51c2VySW5mbykge1xyXG4gICAgICAgICAgICAgICAgaWYoY2FsbGJhY2spIGNhbGxiYWNrKHJlcyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZihjYWxsYmFjaykgY2FsbGJhY2sobnVsbCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHVzZXJJbmZvKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VzZXJJbmZvLnVzZXJJbmZvO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0VXNlckluZm8oY2FsbGJhY2spIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS1nZXRVc2VySW5mb1wiKTtcclxuICAgICAgICB3eC5nZXRVc2VySW5mbyh7XHJcbiAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICAgICAgICAgICAgbGFuZzogXCJ6aF9DTlwiLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiAocmVzKT0+e1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJnZXRVc2VySW5mbyBzdWNjZXNzLlwiLCByZXMpO1xyXG4gICAgICAgICAgICAgICAgaWYoY2FsbGJhY2spIGNhbGxiYWNrKHJlcyk7XHJcbiAgICAgICAgICAgIH0sIGZhaWw6IChyZXMpPT57XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImdldFVzZXJJbmZvOlwiLCByZXMpO1xyXG4gICAgICAgICAgICAgICAgaWYoY2FsbGJhY2spIGNhbGxiYWNrKG51bGwpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb21wbGV0ZTogbnVsbFxyXG4gICAgICAgIH0pOyAgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIG9sZEF1dGhVc2VyKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgd3guYXV0aG9yaXplKHtcclxuICAgICAgICAgICAgc2NvcGU6IFwic2NvcGUudXNlckluZm9cIixcclxuICAgICAgICAgICAgc3VjY2VzczogKHJlcyk9PntcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgICAgICBpZihjYWxsYmFjaykgY2FsbGJhY2sodHJ1ZSk7XHJcbiAgICAgICAgICAgIH0sIGZhaWw6IChyZXMpPT57XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICAgICAgaWYoY2FsbGJhY2spIGNhbGxiYWNrKGZhbHNlKTtcclxuICAgICAgICAgICAgfSwgY29tcGxldGU6IG51bGxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhdXRoVXNlckluZm8oY2FsbGJhY2spIHtcclxuXHJcbiAgICAgICAgdGhpcy53eExvZ2luKChpc0xvZ2luKT0+e1xyXG4gICAgICAgICAgICBpZighaXNMb2dpbikgcmV0dXJuO1xyXG4gICAgICAgICAgICB3eC5nZXRTZXR0aW5nKHtcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGF1dGggPSByZXMuYXV0aFNldHRpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoYXV0aFtcInNjb3BlLnVzZXJJbmZvXCJdKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoY2FsbGJhY2spIGNhbGxiYWNrKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihjYWxsYmFjaykgY2FsbGJhY2soZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfSwgZmFpbDogbnVsbCxcclxuICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBudWxsLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgc2hvd1NoYXJlTWVudSgpIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgd3guc2hvd1NoYXJlTWVudSh7XHJcbiAgICAgICAgICAgIHdpdGhTaGFyZVRpY2tldDogdHJ1ZSxcclxuICAgICAgICAgICAgc3VjY2VzczogKHJlcyk9PntcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgIH0sZmFpbDogKHJlcyk9PntcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgIH0sY29tcGxldGU6IG51bGxcclxuICAgICAgICB9KTtcclxuICAgICAgICB3eC5vblNoYXJlQXBwTWVzc2FnZShmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBsZXQgY29udGVudCA9IHNlbGYuZ2V0U2hhcmVDb250ZW50U3luYygpO1xyXG4gICAgICAgICAgICByZXR1cm4gY29udGVudDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSB3eExvZ2luKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgd3gubG9naW4oe1xyXG4gICAgICAgICAgICBzdWNjZXNzOiAocmVzKT0+e1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjb2RlIFwiLCByZXMuY29kZSk7XHJcbiAgICAgICAgICAgICAgICBpZihjYWxsYmFjaykgY2FsbGJhY2sodHJ1ZSk7XHJcbiAgICAgICAgICAgIH0sIGZhaWw6IChyZXMpPT57XHJcbiAgICAgICAgICAgICAgICBpZihjYWxsYmFjaykgY2FsbGJhY2soZmFsc2UpO1xyXG4gICAgICAgICAgICB9LCBjb21wbGV0ZTogbnVsbFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGxvZ2luVG9TZXJ2ZXIodXNlckluZm8pIHtcclxuICAgICAgICBpZih1c2VySW5mbz09bnVsbCkgdXNlckluZm89e307XHJcbiAgICAgICAgdGhpcy5fdXNlckluZm8gPSB1c2VySW5mbztcclxuICAgICAgICB1c2VySW5mby5wYXJlbnRJZCA9IHRoaXMuX3BhcmVudElkO1xyXG4gICAgICAgIHRoaXMuc2hvd1NoYXJlTWVudSgpO1xyXG4gICAgICAgIGV2ZW50LmVtaXQoXCJ3eGxvZ2luXCIpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2dpbih4PywgeT8sIHdpZHRoPywgaGVpZ2h0Pyl7XHJcbiAgICAgICAgaWYoIWcuaXN3eGdhbWUoKSlyZXR1cm5cclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgd3guY2xvdWQuaW5pdCh7dHJhY2VVc2VyOiB0cnVlfSk7XHJcbiAgICAgICAgLy8gdGhpcy5fZGIgPSB3eC5jbG91ZC5kYXRhYmFzZSh7ZW52OiBcInJlbGVhc2UtMmM4N2M0XCJ9KTsvL+a1i+ivleeOr+Wig1xyXG4gICAgICAgIHRoaXMuX2RiID0gd3guY2xvdWQuZGF0YWJhc2UoKTtcclxuXHJcbiAgICAgICAgc2VsZi5hdXRoVXNlckluZm8oKGlzQXV0aCk9PntcclxuICAgICAgICAgICAgaWYoc2VsZi5fdXNlckluZm8gPT0gbnVsbCB8fCBcclxuICAgICAgICAgICAgICAgIHNlbGYuX3VzZXJJbmZvLnVzZXJJbmZvID09IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgaWYoc2VsZi5fdmVyc2lvbiA+PSAyMjAgJiYgIWlzQXV0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY3JlYXRlQnV0dG9uKCh1c2VySW5mbyk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5sb2dpblRvU2VydmVyKHVzZXJJbmZvKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCB4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIWlzQXV0aCl7IHNlbGYub2xkQXV0aFVzZXIoKGlzQXV0aCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoaXNBdXRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmdldFVzZXJJbmZvKCh1c2VySW5mbyk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmxvZ2luVG9TZXJ2ZXIodXNlckluZm8pOyAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2Ugc2VsZi5sb2dpblRvU2VydmVyKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pfSBlbHNlIHNlbGYuZ2V0VXNlckluZm8oKHVzZXJJbmZvKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmxvZ2luVG9TZXJ2ZXIodXNlckluZm8pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFBhcmVudCgpIHtcclxuICAgICAgICBpZighZy5pc3d4Z2FtZSgpKSByZXR1cm4gXCJcIlxyXG4gICAgICAgIGxldCBpbmZvID0gd3guZ2V0TGF1bmNoT3B0aW9uc1N5bmMoKTtcclxuICAgICAgICBpZihpbmZvLnNjZW5lID09IDEwMDcgfHwgaW5mby5zY2VuZSA9PSAxMDA4KSB7Ly/pgJrov4fliIbkuqvov5vlhaXmuLjmiI9cclxuICAgICAgICAgICAgbGV0IG9wZW5JZCA9IGluZm8ucXVlcnlbXCJ1c2VyX2lkXCJdO1xyXG4gICAgICAgICAgICByZXR1cm4gb3BlbklkXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBcIlwiOyAvL+m7mOiupFxyXG4gICAgfVxyXG5cclxuICAgIC8v5Y+R6YCB5raI5oGv5Yiw5a2Q5Z+fXHJcbiAgICBwdWJsaWMgcG9zdE1lc3NhZ2UoY21kLCBkYXRhPykge1xyXG4gICAgICAgIGlmKGcuaXN3eGdhbWUoKSkge1xyXG4gICAgICAgICAgICB3eC5nZXRPcGVuRGF0YUNvbnRleHQoKS5wb3N0TWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICBjbWQ6IGNtZCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGxvYWRTY29yZShzY29yZSxjYWxsYmFjaz8pXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIGt2RGF0YUxpc3Q9bmV3IEFycmF5KCk7XHJcbiAgICAgICAga3ZEYXRhTGlzdC5wdXNoKHtcclxuICAgICAgICAgICAga2V5Olwic2NvcmVcIixcclxuICAgICAgICAgICAgdmFsdWU6c2NvcmUrXCJcIlxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgb2JqID0ge1xyXG4gICAgICAgICAgICBLVkRhdGFMaXN0Omt2RGF0YUxpc3QsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6ZnVuY3Rpb24oZCl7XHJcbiAgICAgICAgICAgICAgICBpZihjYWxsYmFjaykgY2FsbGJhY2soZClcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmFpbDpmdW5jdGlvbigpe30sXHJcbiAgICAgICAgICAgIGNvbXBsZXRlOmZ1bmN0aW9uKCl7fSxcclxuICAgICAgICB9XHJcbiAgICAgICAgd3guc2V0VXNlckNsb3VkU3RvcmFnZShvYmopXHJcbiAgICAgICAgLy8gXCJ3eGdhbWVcIjoge1xyXG4gICAgICAgIC8vICAgICBcInNjb3JlXCI6IDE2LFxyXG4gICAgICAgIC8vICAgICBcInVwZGF0ZV90aW1lXCI6IDE1MTMwODA1NzNcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIFwiY29zdF9tc1wiOiAzNjUwMFxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2FkQmFubmVyQWQoY2FsbGJhY2s/KXtcclxuICAgICAgICBpZihHbG9iYWwuYmFubmVyQWQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBHbG9iYWwuYmFubmVyQWQuZGVzdHJveSgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCF0aGlzLl9zeXN0ZW1JbmZvKVxyXG4gICAgICAgICAgICB0aGlzLl9zeXN0ZW1JbmZvID0gd3guZ2V0U3lzdGVtSW5mb1N5bmMoKTtcclxuICAgICAgICBsZXQgYmFubmVyQWQgPSB3eC5jcmVhdGVCYW5uZXJBZCh7XHJcbiAgICAgICAgICAgIGFkVW5pdElkOiAnYWR1bml0LWZlM2MwNzRhZDg2ZDFiNTknLFxyXG4gICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMCxcclxuICAgICAgICAgICAgICAgIHRvcDogMCwvL2NjLnZpc2libGVSZWN0LmhlaWdodFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IHRoaXMuX3N5c3RlbUluZm8ud2luZG93V2lkdGhcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYmFubmVyQWQub25Mb2FkKCgpPT57XHJcbiAgICAgICAgICAgIEdsb2JhbC5iYW5uZXJBZCA9IGJhbm5lckFkO1xyXG4gICAgICAgICAgICBHbG9iYWwuYmFubmVyQWRMb2FkQ291bnQgPSAwO1xyXG4gICAgICAgICAgICBiYW5uZXJBZC5zdHlsZS5sZWZ0ID0gdGhpcy5fc3lzdGVtSW5mby53aW5kb3dXaWR0aC8yIC0gYmFubmVyQWQuc3R5bGUucmVhbFdpZHRoLzI7XHJcbiAgICAgICAgICAgIGJhbm5lckFkLnN0eWxlLnRvcCA9IHRoaXMuX3N5c3RlbUluZm8ud2luZG93SGVpZ2h0IC0gYmFubmVyQWQuc3R5bGUucmVhbEhlaWdodDtcclxuICAgICAgICAgICAgaWYoY2FsbGJhY2spIGNhbGxiYWNrKFwibG9hZFwiICxiYW5uZXJBZClcclxuICAgICAgICB9KVxyXG4gICAgICAgIGJhbm5lckFkLm9uRXJyb3IoKGVycikgPT57XHJcbiAgICAgICAgICAgIC8v5Yqg6L295aSx6LSlXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwid3hzZGsgb25FcnJvciBjb2RlOlwiICsgZXJyLmNvZGUgKyBcIiBtc2c6XCIgKyBlcnIubXNnKTtcclxuICAgICAgICAgICAgR2xvYmFsLmJhbm5lckFkTG9hZENvdW50ICs9IDE7XHJcbiAgICAgICAgICAgIGlmIChHbG9iYWwuYmFubmVyQWRMb2FkQ291bnQgPCA0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRCYW5uZXJBZChjYWxsYmFjayk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoY2FsbGJhY2spIGNhbGxiYWNrKFwiZXJyb3JcIilcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2hvd0Jhbm5lckFkKCk6IGFueSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJXeHNkayDmmL7npLpiYW5uZXLlub/lkYpcIixHbG9iYWwuYmFubmVyQWQpXHJcbiAgICAgICAgaWYgKEdsb2JhbC5iYW5uZXJBZCkge1xyXG4gICAgICAgICAgICBHbG9iYWwuYmFubmVyQWQuc2hvdygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiV3hzZGsg5LiN5a2Y5ZyoYmFubmVy6LWE5rqQLi4uLlwiKTtcclxuICAgICAgICAgICAgdGhpcy5sb2FkQmFubmVyQWQoKHYsYWQpPT57XHJcbiAgICAgICAgICAgICAgICBpZih2PT1cImxvYWRcIilcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dCYW5uZXJBZCgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoaWRlQmFubmVyQWQoKSB7XHJcbiAgICAgICAgaWYgKEdsb2JhbC5iYW5uZXJBZCkge1xyXG4gICAgICAgICAgICBHbG9iYWwuYmFubmVyQWQuaGlkZSgpO1xyXG4gICAgICAgICAgICAvLyBHbG9iYWwuYmFubmVyQWQgPSBudWxsO1xyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcblxyXG4gICAgbG9hZFZpZGVvQWQoY2FsbGJhY2spIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIj09PT09PT09PT09PXd4c2RrLmxvYWRWaWRlb0FEXCIpO1xyXG4gICAgICAgIC8vIGlmICghR2xvYmFsLnZpZGVvQWQgKSB7IC8v5aaC5p6c5rKh5pyJ5bm/5ZGK6LWE5rqQ5bCx5Yqg6L295paw55qE6KeG6aKR5bm/5ZGKXHJcbiAgICAgICAgbGV0IHZpZGVvQWQgPSB3eC5jcmVhdGVSZXdhcmRlZFZpZGVvQWQoe1xyXG4gICAgICAgICAgICBhZFVuaXRJZDogJ2FkdW5pdC01MjE0ZWZiZTM0OGE3NjhjJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5oaWRlQmFubmVyQWQoKTtcclxuICAgICAgICB2aWRlb0FkLmxvYWQoKS50aGVuKCgpPT57dmlkZW9BZC5zaG93KCk7fSk7XHJcbiAgICAgICAgdmlkZW9BZC5vbkVycm9yKGVycj0+IHtcclxuICAgICAgICAgICAgLy/liqDovb3lpLHotKVcclxuICAgICAgICAgICAgR2xvYmFsLnZpZGVvQWRMb2FkQ291bnQgKz0gMTtcclxuICAgICAgICAgICAgLy/lsJ3or5U05qyhXHJcbiAgICAgICAgICAgIGlmIChHbG9iYWwudmlkZW9BZExvYWRDb3VudCA8IDQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZFZpZGVvQWQoY2FsbGJhY2spO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGNhbGxiYWNrKSBjYWxsYmFjayhcImVycm9yXCIpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHZpZGVvQWQub25DbG9zZShmdW5jdGlvbiAocmV0KSB7XHJcbiAgICAgICAgICAgIC8v5pKt5pS+57uT5p2fXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwid3hzZGsgb25DbG9zZS4uLlwiKTtcclxuICAgICAgICAgICAgaWYoY2FsbGJhY2spIGNhbGxiYWNrKFwiY2xvc2VcIixyZXQuaXNFbmRlZClcclxuICAgICAgICAgICAgR2xvYmFsLnZpZGVvQWQgPSBudWxsO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB2aWRlb0FkLm9uTG9hZCgoKT0+e1xyXG4gICAgICAgICAgICAvL+WKoOi9veaIkOWKn1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInd4c2RrIG9uTG9hZFwiKTtcclxuICAgICAgICAgICAgR2xvYmFsLnZpZGVvQWQgPSB2aWRlb0FkO1xyXG4gICAgICAgICAgICBHbG9iYWwudmlkZW9BZExvYWRDb3VudCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0Jhbm5lckFkKCk7XHJcbiAgICAgICAgICAgIGlmKGNhbGxiYWNrKSBjYWxsYmFjayhcImxvYWRcIiAsIHZpZGVvQWQpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgbGV0IHd4c2RrOld4U2RrID0gbmV3IFd4U2RrKCk7Il19