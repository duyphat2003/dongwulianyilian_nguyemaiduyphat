
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/qqsdk/BKTool.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '313f56eFUNNW6GE0RObNSkH', 'BKTool');
// framework/qqsdk/BKTool.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Global = /** @class */ (function () {
    function Global() {
    }
    Global.PUIN = "2896237320";
    Global.headUrl = "";
    Global.nickName = "";
    Global.videoAd = undefined;
    Global.bannerAd = undefined;
    Global.videoAdLoadCount = 0; //视频广告加载次数
    Global.viewAdLoadCount = 0;
    Global.bannerAdLoadCount = 0; //banner广告加载次数
    return Global;
}());
// GameStatusInfo.src 其他取值
// 场景值（src）	场景描述	期望体验
// 100	AIO面板点击开始游戏	进入游戏大厅
// 108	AIO面板点击大面板小房子按钮	进入游戏大厅
// 110	AIO消息流文字识别	进入游戏大厅
// 202	热聊folder中点击进入游戏按钮	进入游戏大厅
// 207	旧版玩一玩WEB页面启动游戏	进入游戏大厅
// 208	新版玩一玩WEB页面启动游戏	进入游戏大厅
// 209	厘米城WEB页面启动游戏	进入游戏大厅
// 220	扫描二维码打开游戏	进入游戏大厅
// 200	点击AIO游戏邀请消息	"判断roomid若可加入则直接加入游戏不可加入相应提示后打开大厅"
// 204	在微信点击游戏邀请后打开手Q后启动游戏	同200
// 203	同200	将在手Q7.6.0后废弃
// 201	点击AIO游戏分享消息	根据拓展数据做相应处理
var BKTool = /** @class */ (function () {
    function BKTool() {
    }
    // static BKGet(url, callback, custom) {
    //     let httpUtil = new BK.HttpUtil(url);
    //     httpUtil.setHttpMethod("get");
    //     httpUtil.custom = custom;
    //     //绑定回调对象
    //     httpUtil.requestAsync(callback.bind(httpUtil));
    // }
    /**
     * 跳转到其他游戏
     * @param {Number} gameId
     */
    BKTool.skipGame = function (gameId) {
        BK.QQ.skipGame(gameId, "IJPay");
    };
    /**
     * 判断手Q版本
     * @param {String} ver1 7.9.0.3820 当前版本
     * @param {String} ver2 7.8.5 指定版本
     */
    BKTool.versionCompare = function (ver1, ver2) {
        ver1 = parseInt(ver1.replace(/\./g, "").substring(0, 3));
        ver2 = parseInt(ver2.replace(/\./g, "").substring(0, 3));
        if (ver1 >= ver2) {
            return true;
        }
        else {
            return false;
        }
    };
    BKTool.shareToArk = function () {
        BK.Share.share({
            qqImgUrl: 'http://hudong.qq.com/docs/engine/img/848B76B5530AA7EE7B38E9A1267D7086.png',
            isToFriend: true,
            summary: '单渠道分享-By Javen',
            extendInfo: 'IJPay',
            success: function (succObj) {
                console.log('分享成功', succObj.code, JSON.stringify(succObj.data));
            },
            fail: function (failObj) {
                console.log('分享失败', failObj.code, JSON.stringify(failObj.msg));
            },
            complete: function () {
                console.log('分享完成，不论成功失败');
            }
        });
    };
    BKTool.share = function (callback) {
        BK.Share.share({
            qqImgUrl: 'http://hudong.qq.com/docs/engine/img/848B76B5530AA7EE7B38E9A1267D7086.png',
            socialPicPath: 'GameRes://qrcode.png',
            title: '测试轻游戏',
            summary: '多渠道分享-By Javen',
            extendInfo: 'IJPay',
            // isToFriend:"false",
            success: function (succObj) {
                //{"reqCode":1,"ret":0,"gameId":3603,"aioType":1,"shareTo":0,"isFirstTimeShare":0}
                //ret成功：0；失败：1；取消：2
                //shareTo 分享渠道：QQ：0；QZone：1；微信：2；朋友圈：3
                console.log('分享成功', succObj.code, JSON.stringify(succObj.data));
                if (succObj.data.ret == 0) {
                    callback && callback("success", succObj.data);
                }
                else {
                    callback && callback("fail", succObj.data);
                }
            },
            fail: function (failObj) {
                console.log('分享失败', failObj.code, JSON.stringify(failObj.msg));
                callback && callback("fail");
            },
            complete: function () {
                console.log('分享完成，不论成功失败');
            }
        });
    };
    BKTool.shareLink = function () {
        BK.Share.share({
            qqImgUrl: 'http://hudong.qq.com/docs/engine/img/848B76B5530AA7EE7B38E9A1267D7086.png',
            msgUrl: 'https://gitee.com/javen205/Brickengine_Guide?',
            title: '测试轻游戏',
            summary: 'H5链接分享-By Javen',
        });
    };
    BKTool.screenShotShare = function () {
        //实际像素
        var pixelSize = BK.Director.screenPixelSize;
        var pWidth = pixelSize.width;
        var pWheight = pixelSize.height;
        BK.Share.share({
            range: {
                x: pWidth / 2,
                y: pWheight / 2,
                width: pWidth,
                height: pWheight
            },
            qqImgUrl: "",
            title: '测试轻游戏',
            summary: "截图分享-By Javen",
            extendInfo: 'IJPay',
            success: function (succObj) {
                console.log('分享成功', succObj.code, JSON.stringify(succObj.data));
            },
            fail: function (failObj) {
                console.log('分享失败', failObj.code, JSON.stringify(failObj.msg));
            },
            complete: function () {
                console.log('分享完成,不论成功失败');
            }
        });
    };
    BKTool.follow = function () {
        console.log("Global.PUIN>" + Global.PUIN);
        BK.QQ.enterPubAccountCard(Global.PUIN);
    };
    BKTool.getNick = function () {
        return Global.nickName;
    };
    BKTool.createShortCut = function () {
        var extendInfo = ""; //扩展字段
        BK.QQ.createShortCut(extendInfo);
    };
    BKTool.getHead = function () {
        return Global.headUrl;
    };
    /**
        打开一个网页
    */
    BKTool.prototype.openUrl = function (url) {
        BK.MQQ.Webview.open(url);
    };
    /**
* 存储游戏个人私有数据
* @param data 要存储的数据.
*/
    BKTool.prototype.saveGameData = function (data) {
        // 存储游戏个人私有数据
        // var data = {
        //     maxScore: 100,              // 一个历史最高积分
        //     // 不同游戏模式下存的数据，列表来的，可以根据自身需求使用，这里面的数据，后台不做任何处理，怎么来怎么回
        //     modeDatas:[
        //         {       // 字段都是自己定义的，后台不做任何处理
        //             maxScore: 1,
        //             mode: 1,
        //         },
        //         {       // 字段都是自己定义的，后台不做任何处理
        //             maxScore: 2,
        //             mode: 2,
        //         },
        //     ],
        // }
        return new Promise(function (resolve) {
            // 保存个人数据
            BK.QQ.saveGameData(data, function (errCode, cmd, data) {
                BK.Console.log(1, 1, 'saveGameData : ' + errCode + ', ' + cmd + ', ' + data);
                resolve({ errCode: errCode, cmd: cmd, data: data });
            });
        });
    };
    /**
    * 拉取游戏个人私有数据
    */
    BKTool.prototype.loadGameData = function () {
        return new Promise(function (resolve) {
            BK.QQ.loadGameData(function (errCode, cmd, data) {
                // 这里返回的 data，就是上面存储游戏个人私有数据时候传入的 data
                BK.Console.log(1, 1, 'loadGameData : ' + errCode + ', ' + cmd + ', ' + data);
                resolve({ errCode: errCode, cmd: cmd, data: data });
            });
        });
    };
    /**
  * 派发红包
  * @param {string} extendInfo 扩展的信息..
  */
    BKTool.prototype.sendB2CRedPacket = function (extendInfo) {
        return new Promise(function (resolve) {
            // var extendInfo = "xxxxxxx";
            BK.QQ.sendB2CRedPacket(extendInfo, function (errCode, cmd, data) {
                BK.Script.log(1, 1, 'sendB2CRedPacket : ' + errCode + ', ' + cmd + ', ' + JSON.stringify(data));
                if (errCode == 0) {
                    //派发成功
                }
                else {
                    //派发失败
                }
                resolve({ errCode: errCode, cmd: cmd, data: data });
            });
        });
    };
    BKTool.login = function () {
        BK.MQQ.Account.getHead(GameStatusInfo.openId, function (openId, imgPath) {
            // resolve(imgPath)
            Global.headUrl = imgPath;
        });
        BK.MQQ.Account.getNick(GameStatusInfo.openId, function (openId, nickName) {
            Global.nickName = nickName;
        });
    };
    BKTool.test = function () {
        // BK.QQ.fetchOpenKey(function (errCode, cmd, data) {
        // 	console.log("[fetchOpenKey]",errCode, cmd, data)
        //     if (errCode == 0) {
        //          var openKey = data.openKey;
        //      }
        // });
        var openId = GameStatusInfo.openId;
        console.log("openId:", openId);
        var systemInfo = BK.getSystemInfoSync();
        BK.Console.log('游戏版本号:' + systemInfo.gameVersion);
        BK.Console.log('是否房主:' + systemInfo.isMaster); //使用厘米秀房间时才有效
        BK.Console.log('房间号:' + systemInfo.roomId); //使用厘米秀房间时才有效
        BK.Console.log('系统版本:' + systemInfo.osVersion);
        BK.Console.log('网络类型:' + systemInfo.networkType);
        BK.Console.log('平台:' + systemInfo.platform);
        BK.Console.log('当前用户的标识:' + systemInfo.openId);
        BK.Console.log('手机qq版本:' + systemInfo.QQVer);
        BK.Console.log('是否首次安装:' + systemInfo.isFirstInstall);
        BK.Console.log('当前聊天窗类型:' + systemInfo.aioType);
        BK.Console.log('游戏启动入口:' + systemInfo.src);
        BK.Console.log('是否为管理账号:' + systemInfo.isWhiteUser);
        BK.Console.log('游戏类型:' + systemInfo.gameType);
        BK.Console.log('具体机型:' + systemInfo.model);
        BK.Console.log('性别:' + systemInfo.sex);
    };
    /**
     * 成绩上报
     * @param {*} level
     * @param {*} callback
     */
    BKTool.uploadScore = function (score, callback) {
        var data = {
            userData: [{
                    openId: GameStatusInfo.openId,
                    startMs: (new Date().getTime() - 60 * 5 * 1000).toString(),
                    endMs: ((new Date()).getTime()).toString(),
                    scoreInfo: {
                        score: score,
                    },
                },],
            attr: {
                score: {
                    type: 'rank',
                    order: 1,
                }
            },
        };
        BK.QQ.uploadScoreWithoutRoom(1, data, function (errCode, cmd, data) {
            console.log("-------------uploadScoreWithoutRoom callback  cmd" + cmd + " errCode:" + errCode + "  data:" + JSON.stringify(data));
            if (callback) {
                callback(errCode, data);
            }
        });
    };
    /**
     * 拉取排行榜数据
     * @param {*} callback [code,list]
     */
    BKTool.getRankList = function (callback) {
        var attr = "score";
        var order = 1; //排序的方法：[ 1: 从大到小(单局)，2: 从小到大(单局)，3: 由大到小(累积)]
        var rankType = 0; //要查询的排行榜类型，0: 好友排行榜
        BK.QQ.getRankListWithoutRoom(attr, order, rankType, function (errCode, cmd, data) {
            console.log("--------------------getRankListWithoutRoom callback  cmd" + cmd + " errCode:" + errCode);
            if (errCode != 0) {
                callback && callback(errCode);
                return;
            }
            if (data) {
                var rankList = data.data.ranking_list;
                console.log("=====data not null " + rankList.length);
                //{"data":{"ranking_list":["nick":"Damon Ren","score":304,"selfFlag":1,"url":"","seqId":0]}}
                console.log(JSON.stringify(data));
                if (callback) {
                    callback(errCode, rankList);
                }
            }
        });
    };
    /**
     * //展示广告 Global.videoAd.show();
     * 预加载视频广告
     */
    BKTool.loadVideoAd = function (callback) {
        console.log("============BKTOOl.loadVideoAD", Global.videoAd);
        // if (!Global.videoAd ) { //如果没有广告资源就加载新的视频广告
        var videoAd = BK.Advertisement.createVideoAd();
        videoAd.onError(function (err) {
            //加载失败
            console.log(">>>>>>>>>BKTools onError code:" + err.code + " msg:" + err.msg);
            Global.viewAdLoadCount += 1;
            //尝试4次
            if (Global.viewAdLoadCount < 4) {
                BKTool.loadVideoAd(callback);
            }
            if (callback)
                callback("error");
        });
        videoAd.onPlayFinish(function () {
            //播放结束
            console.log("BKTools onPlayFinish...");
            Global.videoAd = undefined;
            if (callback)
                callback("finish");
        });
        videoAd.onClose(function () {
            //播放结束
            console.log("BKTools onClose...");
            if (callback)
                callback("close");
            Global.videoAd = undefined;
        });
        videoAd.onLoad(function () {
            //加载成功
            console.log("BKTools onLoad");
            Global.videoAd = videoAd;
            Global.videoAdLoadCount = 0;
            if (callback)
                callback("load", videoAd);
        });
    };
    //  else {
    //     console.log("BKTools 已存在广告资源 或者 非QQ玩一玩平台....");
    // }
    /**
     * //展示广告 Global.bannerAd.show();
     * 预加载banner广告
     * 1001静态banner，1002动态banner，1003 广点通banner(7.8.0)
     */
    BKTool.loadBannerAd = function (callback, viewId) {
        if (!viewId) {
            var qqVer = BK.getSystemInfoSync().QQVer;
            console.log("当前手Q版本:" + qqVer);
            var isBig = BKTool.versionCompare(qqVer, "7.8.5"); //如果大于7.8.5
            console.log("当前版本大于7.8.5:" + isBig);
            if (isBig) {
                viewId = 1003;
            }
            else {
                viewId = 1002;
            }
        }
        console.log("loadBannerAd viewId:" + viewId);
        var bannerAd = BK.Advertisement.createBannerAd({
            viewId: viewId,
        });
        bannerAd.onError(function (err) {
            //加载失败
            console.log("BKTools onError code:" + err.code + " msg:" + err.msg);
            Global.bannerAdLoadCount += 1;
            if (Global.bannerAdLoadCount < 4) {
                BKTool.loadBannerAd(callback, viewId);
            }
            if (callback)
                callback("error");
        });
        bannerAd.onLoad(function () {
            //加载成功
            console.log("BKTools onLoad");
            Global.bannerAd = bannerAd;
            Global.viewAdLoadCount = 0;
            if (callback)
                callback("load", bannerAd);
        });
    };
    BKTool.showBannerAd = function () {
        console.log("BKTools 显示banner广告");
        if (Global.bannerAd) {
            Global.bannerAd.show();
        }
        else {
            console.log("BKTools 不存在banner资源....");
            BKTool.loadBannerAd(function (v, ad) {
                if (v == "load") {
                    BKTool.showBannerAd();
                }
            });
        }
    };
    BKTool.hideBannerAd = function () {
        if (Global.bannerAd) {
            Global.bannerAd.hide();
            Global.bannerAd = undefined;
        }
        else {
            console.log("BKTools 不存在banner资源无法关闭....");
        }
    };
    BKTool.showToast = function (title, duration) {
        if (!duration) {
            duration = 3000;
        }
        if (cc.sys.platform == cc.sys.QQ_PLAY) {
            BK.UI.showToast({
                title: title,
                duration: duration,
                complete: function () {
                    console.log("BKTools showToast complete:" + title);
                }
            });
        }
    };
    /**
     * 开启屏幕常亮
     */
    BKTool.keepScreenOn = function () {
        BK.Device.keepScreenOn({
            isKeepOn: true
        });
    };
    /**
     * 取消屏幕常亮
     */
    BKTool.cancelKeepScreenOn = function () {
        BK.Device.keepScreenOn({
            isKeepOn: false
        });
    };
    return BKTool;
}());
exports.default = BKTool;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxxcXNka1xcQktUb29sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO0lBWUEsQ0FBQztJQVZVLFdBQUksR0FBRSxZQUFZLENBQUE7SUFFbEIsY0FBTyxHQUFHLEVBQUUsQ0FBQTtJQUNaLGVBQVEsR0FBRyxFQUFFLENBQUM7SUFDZCxjQUFPLEdBQUUsU0FBUyxDQUFBO0lBQ2xCLGVBQVEsR0FBRSxTQUFTLENBQUE7SUFFbkIsdUJBQWdCLEdBQUUsQ0FBQyxDQUFBLENBQUMsVUFBVTtJQUM5QixzQkFBZSxHQUFHLENBQUMsQ0FBQTtJQUNuQix3QkFBaUIsR0FBRSxDQUFDLENBQUEsQ0FBQyxjQUFjO0lBQzlDLGFBQUM7Q0FaRCxBQVlDLElBQUE7QUFDRCwwQkFBMEI7QUFDMUIscUJBQXFCO0FBQ3JCLHlCQUF5QjtBQUN6Qiw2QkFBNkI7QUFDN0Isd0JBQXdCO0FBQ3hCLCtCQUErQjtBQUMvQiw0QkFBNEI7QUFDNUIsNEJBQTRCO0FBQzVCLDBCQUEwQjtBQUMxQix1QkFBdUI7QUFDdkIscURBQXFEO0FBQ3JELCtCQUErQjtBQUMvQix3QkFBd0I7QUFDeEIsOEJBQThCO0FBRTlCO0lBQUE7SUFnY0EsQ0FBQztJQTdiRyx3Q0FBd0M7SUFDeEMsMkNBQTJDO0lBQzNDLHFDQUFxQztJQUNyQyxnQ0FBZ0M7SUFDaEMsZUFBZTtJQUNmLHNEQUFzRDtJQUN0RCxJQUFJO0lBRUo7OztPQUdHO0lBQ0ksZUFBUSxHQUFmLFVBQWdCLE1BQU07UUFDbEIsRUFBRSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFDRDs7OztPQUlHO0lBQ0kscUJBQWMsR0FBckIsVUFBc0IsSUFBSSxFQUFFLElBQUk7UUFDNUIsSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxT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QUFPLEdBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzdDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFL0MsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMxQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFM0MsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNwRCxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDekMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNsRCxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEdBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUduQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLGtCQUFXLEdBQWxCLFVBQW1CLEtBQUssRUFBRSxRQUFTO1FBQy9CLElBQUksSUFBSSxHQUFHO1lBQ1AsUUFBUSxFQUFFLENBQUM7b0JBQ1AsTUFBTSxFQUFFLGNBQWMsQ0FBQyxNQUFNO29CQUM3QixPQUFPLEVBQUUsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFO29CQUMxRCxLQUFLLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRTtvQkFDMUMsU0FBUyxFQUFFO3dCQUNQLEtBQUssRUFBRSxLQUFLO3FCQUNmO2lCQUNKLEVBQUc7WUFDSixJQUFJLEVBQUU7Z0JBQ0YsS0FBSyxFQUFFO29CQUNILElBQUksRUFBRSxNQUFNO29CQUNaLEtBQUssRUFBRSxDQUFDO2lCQUNYO2FBQ0o7U0FDSixDQUFDO1FBQ0YsRUFBRSxDQUFDLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsT0FBTyxFQUFFLEdBQUcsRUFBRSxJQUFJO1lBQzlELE9BQU8sQ0FBQyxHQUFHLENBQUMsbURBQW1ELEdBQUcsR0FBRyxHQUFHLFdBQVcsR0FBRyxPQUFPLEdBQUcsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNsSSxJQUFJLFFBQVEsRUFBRTtnQkFDVixRQUFRLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQzNCO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0Q7OztPQUdHO0lBQ0ksa0JBQVcsR0FBbEIsVUFBbUIsUUFBUTtRQUN2QixJQUFJLElBQUksR0FBRyxPQUFPLENBQUM7UUFDbkIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsOENBQThDO1FBQzdELElBQUksUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFBLG9CQUFvQjtRQUNyQyxFQUFFLENBQUMsRUFBRSxDQUFDLHNCQUFzQixDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFVBQVUsT0FBTyxFQUFFLEdBQUcsRUFBRSxJQUFJO1lBQzVFLE9BQU8sQ0FBQyxHQUFHLENBQUMsMERBQTBELEdBQUcsR0FBRyxHQUFHLFdBQVcsR0FBRyxPQUFPLENBQUMsQ0FBQztZQUN0RyxJQUFJLE9BQU8sSUFBSSxDQUFDLEVBQUU7Z0JBQ2QsUUFBUSxJQUFJLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDOUIsT0FBTzthQUNWO1lBQ0QsSUFBSSxJQUFJLEVBQUU7Z0JBQ04sSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNyRCw0RkFBNEY7Z0JBQzVGLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNsQyxJQUFJLFFBQVEsRUFBRTtvQkFDVixRQUFRLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO2lCQUMvQjthQUNKO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0Q7OztPQUdHO0lBQ0ksa0JBQVcsR0FBbEIsVUFBbUIsUUFBUTtRQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxFQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUUvRCw4Q0FBOEM7UUFDOUMsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUMvQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRztZQUN6QixNQUFNO1lBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsR0FBRyxHQUFHLENBQUMsSUFBSSxHQUFHLE9BQU8sR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDN0UsTUFBTSxDQUFDLGVBQWUsSUFBSSxDQUFDLENBQUM7WUFDNUIsTUFBTTtZQUNOLElBQUksTUFBTSxDQUFDLGVBQWUsR0FBRyxDQUFDLEVBQUU7Z0JBQzVCLE1BQU0sQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDaEM7WUFDRCxJQUFHLFFBQVE7Z0JBQUUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ2xDLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxDQUFDLFlBQVksQ0FBQztZQUNqQixNQUFNO1lBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1lBQ3ZDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO1lBQzNCLElBQUcsUUFBUTtnQkFBRSxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDbkMsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLENBQUMsT0FBTyxDQUFDO1lBQ1osTUFBTTtZQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztZQUNsQyxJQUFHLFFBQVE7Z0JBQUUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBQzlCLE1BQU0sQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO1FBQy9CLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUNYLE1BQU07WUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDOUIsTUFBTSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7WUFDekIsTUFBTSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztZQUM1QixJQUFHLFFBQVE7Z0JBQUUsUUFBUSxDQUFDLE1BQU0sRUFBRyxPQUFPLENBQUMsQ0FBQTtRQUMzQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDRyxVQUFVO0lBQ1Ysc0RBQXNEO0lBQ3RELElBQUk7SUFFUjs7OztPQUlHO0lBQ0ksbUJBQVksR0FBbkIsVUFBb0IsUUFBUyxFQUFFLE1BQU87UUFDbEMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNULElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsQ0FBQztZQUMvQixJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLFdBQVc7WUFDOUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDLENBQUM7WUFDcEMsSUFBSSxLQUFLLEVBQUU7Z0JBQ1AsTUFBTSxHQUFHLElBQUksQ0FBQzthQUNqQjtpQkFBTTtnQkFDSCxNQUFNLEdBQUcsSUFBSSxDQUFDO2FBQ2pCO1NBQ0o7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixHQUFHLE1BQU0sQ0FBQyxDQUFDO1FBQzdDLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDO1lBQzNDLE1BQU0sRUFBRSxNQUFNO1NBQ2pCLENBQUMsQ0FBQztRQUNILFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHO1lBQzFCLE1BQU07WUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixHQUFHLEdBQUcsQ0FBQyxJQUFJLEdBQUcsT0FBTyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNwRSxNQUFNLENBQUMsaUJBQWlCLElBQUksQ0FBQyxDQUFDO1lBQzlCLElBQUksTUFBTSxDQUFDLGlCQUFpQixHQUFHLENBQUMsRUFBRTtnQkFDOUIsTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUMsTUFBTSxDQUFDLENBQUM7YUFDeEM7WUFDRCxJQUFHLFFBQVE7Z0JBQUUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ2xDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUNaLE1BQU07WUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDOUIsTUFBTSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7WUFDM0IsTUFBTSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUM7WUFDM0IsSUFBRyxRQUFRO2dCQUFFLFFBQVEsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUE7UUFDM0MsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sbUJBQVksR0FBbkI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUE7UUFDakMsSUFBSSxNQUFNLENBQUMsUUFBUSxFQUFFO1lBQ2pCLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDMUI7YUFBTTtZQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztZQUN2QyxNQUFNLENBQUMsWUFBWSxDQUFDLFVBQUMsQ0FBQyxFQUFDLEVBQUU7Z0JBQ3JCLElBQUcsQ0FBQyxJQUFFLE1BQU0sRUFDWjtvQkFDSSxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUE7aUJBQ3hCO1lBQ0wsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFFTSxtQkFBWSxHQUFuQjtRQUNJLElBQUksTUFBTSxDQUFDLFFBQVEsRUFBRTtZQUNqQixNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3ZCLE1BQU0sQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDO1NBQy9CO2FBQU07WUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUM7U0FDOUM7SUFDTCxDQUFDO0lBRU0sZ0JBQVMsR0FBaEIsVUFBaUIsS0FBSyxFQUFFLFFBQVE7UUFDNUIsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNYLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FDbkI7UUFDRCxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFO1lBQ25DLEVBQUUsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2dCQUNaLEtBQUssRUFBRSxLQUFLO2dCQUNaLFFBQVEsRUFBRSxRQUFRO2dCQUNsQixRQUFRLEVBQUU7b0JBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsR0FBRyxLQUFLLENBQUMsQ0FBQztnQkFDdkQsQ0FBQzthQUNKLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQztJQUNEOztPQUVHO0lBQ0ksbUJBQVksR0FBbkI7UUFDSSxFQUFFLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQztZQUNuQixRQUFRLEVBQUUsSUFBSTtTQUNqQixDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0Q7O09BRUc7SUFDSSx5QkFBa0IsR0FBekI7UUFDSSxFQUFFLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQztZQUNuQixRQUFRLEVBQUUsS0FBSztTQUNsQixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUwsYUFBQztBQUFELENBaGNBLEFBZ2NDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBHbG9iYWxcclxue1xyXG4gICAgc3RhdGljIFBVSU49IFwiMjg5NjIzNzMyMFwiXHJcblxyXG4gICAgc3RhdGljIGhlYWRVcmwgPSBcIlwiXHJcbiAgICBzdGF0aWMgbmlja05hbWUgPSBcIlwiO1xyXG4gICAgc3RhdGljIHZpZGVvQWQ9IHVuZGVmaW5lZFxyXG4gICAgc3RhdGljIGJhbm5lckFkPSB1bmRlZmluZWRcclxuXHJcbiAgICBzdGF0aWMgdmlkZW9BZExvYWRDb3VudD0gMCAvL+inhumikeW5v+WRiuWKoOi9veasoeaVsFxyXG4gICAgc3RhdGljIHZpZXdBZExvYWRDb3VudCA9IDAgXHJcbiAgICBzdGF0aWMgYmFubmVyQWRMb2FkQ291bnQ9IDAgLy9iYW5uZXLlub/lkYrliqDovb3mrKHmlbBcclxufVxyXG4vLyBHYW1lU3RhdHVzSW5mby5zcmMg5YW25LuW5Y+W5YC8XHJcbi8vIOWcuuaZr+WAvO+8iHNyY++8iVx05Zy65pmv5o+P6L+wXHTmnJ/mnJvkvZPpqoxcclxuLy8gMTAwXHRBSU/pnaLmnb/ngrnlh7vlvIDlp4vmuLjmiI9cdOi/m+WFpea4uOaIj+Wkp+WOhVxyXG4vLyAxMDhcdEFJT+mdouadv+eCueWHu+Wkp+mdouadv+Wwj+aIv+WtkOaMiemSrlx06L+b5YWl5ri45oiP5aSn5Y6FXHJcbi8vIDExMFx0QUlP5raI5oGv5rWB5paH5a2X6K+G5YirXHTov5vlhaXmuLjmiI/lpKfljoVcclxuLy8gMjAyXHTng63ogYpmb2xkZXLkuK3ngrnlh7vov5vlhaXmuLjmiI/mjInpkq5cdOi/m+WFpea4uOaIj+Wkp+WOhVxyXG4vLyAyMDdcdOaXp+eJiOeOqeS4gOeOqVdFQumhtemdouWQr+WKqOa4uOaIj1x06L+b5YWl5ri45oiP5aSn5Y6FXHJcbi8vIDIwOFx05paw54mI546p5LiA546pV0VC6aG16Z2i5ZCv5Yqo5ri45oiPXHTov5vlhaXmuLjmiI/lpKfljoVcclxuLy8gMjA5XHTljpjnsbPln45XRULpobXpnaLlkK/liqjmuLjmiI9cdOi/m+WFpea4uOaIj+Wkp+WOhVxyXG4vLyAyMjBcdOaJq+aPj+S6jOe7tOeggeaJk+W8gOa4uOaIj1x06L+b5YWl5ri45oiP5aSn5Y6FXHJcbi8vIDIwMFx054K55Ye7QUlP5ri45oiP6YKA6K+35raI5oGvXHRcIuWIpOaWrXJvb21pZOiLpeWPr+WKoOWFpeWImeebtOaOpeWKoOWFpea4uOaIj+S4jeWPr+WKoOWFpeebuOW6lOaPkOekuuWQjuaJk+W8gOWkp+WOhVwiXHJcbi8vIDIwNFx05Zyo5b6u5L+h54K55Ye75ri45oiP6YKA6K+35ZCO5omT5byA5omLUeWQjuWQr+WKqOa4uOaIj1x05ZCMMjAwXHJcbi8vIDIwM1x05ZCMMjAwXHTlsIblnKjmiYtRNy42LjDlkI7lup/lvINcclxuLy8gMjAxXHTngrnlh7tBSU/muLjmiI/liIbkuqvmtojmga9cdOagueaNruaLk+WxleaVsOaNruWBmuebuOW6lOWkhOeQhlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQktUb29sXHJcbntcclxuXHJcbiAgICAvLyBzdGF0aWMgQktHZXQodXJsLCBjYWxsYmFjaywgY3VzdG9tKSB7XHJcbiAgICAvLyAgICAgbGV0IGh0dHBVdGlsID0gbmV3IEJLLkh0dHBVdGlsKHVybCk7XHJcbiAgICAvLyAgICAgaHR0cFV0aWwuc2V0SHR0cE1ldGhvZChcImdldFwiKTtcclxuICAgIC8vICAgICBodHRwVXRpbC5jdXN0b20gPSBjdXN0b207XHJcbiAgICAvLyAgICAgLy/nu5Hlrprlm57osIPlr7nosaFcclxuICAgIC8vICAgICBodHRwVXRpbC5yZXF1ZXN0QXN5bmMoY2FsbGJhY2suYmluZChodHRwVXRpbCkpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6Lez6L2s5Yiw5YW25LuW5ri45oiPXHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gZ2FtZUlkIFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgc2tpcEdhbWUoZ2FtZUlkKSB7XHJcbiAgICAgICAgQksuUVEuc2tpcEdhbWUoZ2FtZUlkLCBcIklKUGF5XCIpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDliKTmlq3miYtR54mI5pysXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmVyMSA3LjkuMC4zODIwIOW9k+WJjeeJiOacrFxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZlcjIgNy44LjUg5oyH5a6a54mI5pysXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyB2ZXJzaW9uQ29tcGFyZSh2ZXIxLCB2ZXIyKSB7XHJcbiAgICAgICAgdmVyMSA9IHBhcnNlSW50KHZlcjEucmVwbGFjZSgvXFwuL2csIFwiXCIpLnN1YnN0cmluZygwLCAzKSk7XHJcbiAgICAgICAgdmVyMiA9IHBhcnNlSW50KHZlcjIucmVwbGFjZSgvXFwuL2csIFwiXCIpLnN1YnN0cmluZygwLCAzKSk7XHJcbiAgICAgICAgaWYgKHZlcjEgPj0gdmVyMikge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzaGFyZVRvQXJrKCkge1xyXG4gICAgICAgIEJLLlNoYXJlLnNoYXJlKHtcclxuICAgICAgICAgICAgcXFJbWdVcmw6ICdodHRwOi8vaHVkb25nLnFxLmNvbS9kb2NzL2VuZ2luZS9pbWcvODQ4Qjc2QjU1MzBBQTdFRTdCMzhFOUExMjY3RDcwODYucG5nJyxcclxuICAgICAgICAgICAgaXNUb0ZyaWVuZDogdHJ1ZSxcclxuICAgICAgICAgICAgc3VtbWFyeTogJ+WNlea4oOmBk+WIhuS6qy1CeSBKYXZlbicsXHJcbiAgICAgICAgICAgIGV4dGVuZEluZm86ICdJSlBheScsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChzdWNjT2JqKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5YiG5Lqr5oiQ5YqfJywgc3VjY09iai5jb2RlLCBKU09OLnN0cmluZ2lmeShzdWNjT2JqLmRhdGEpKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24gKGZhaWxPYmopIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfliIbkuqvlpLHotKUnLCBmYWlsT2JqLmNvZGUsIEpTT04uc3RyaW5naWZ5KGZhaWxPYmoubXNnKSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbXBsZXRlOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5YiG5Lqr5a6M5oiQ77yMXGLkuI3orrrmiJDlip/lpLHotKUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzaGFyZShjYWxsYmFjaykge1xyXG4gICAgICAgIEJLLlNoYXJlLnNoYXJlKHtcclxuICAgICAgICAgICAgcXFJbWdVcmw6ICdodHRwOi8vaHVkb25nLnFxLmNvbS9kb2NzL2VuZ2luZS9pbWcvODQ4Qjc2QjU1MzBBQTdFRTdCMzhFOUExMjY3RDcwODYucG5nJyxcclxuICAgICAgICAgICAgc29jaWFsUGljUGF0aDogJ0dhbWVSZXM6Ly9xcmNvZGUucG5nJyxcclxuICAgICAgICAgICAgdGl0bGU6ICfmtYvor5XovbvmuLjmiI8nLFxyXG4gICAgICAgICAgICBzdW1tYXJ5OiAn5aSa5rig6YGT5YiG5LqrLUJ5IEphdmVuJyxcclxuICAgICAgICAgICAgZXh0ZW5kSW5mbzogJ0lKUGF5JyxcclxuICAgICAgICAgICAgLy8gaXNUb0ZyaWVuZDpcImZhbHNlXCIsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChzdWNjT2JqKSB7XHJcbiAgICAgICAgICAgICAgICAvL3tcInJlcUNvZGVcIjoxLFwicmV0XCI6MCxcImdhbWVJZFwiOjM2MDMsXCJhaW9UeXBlXCI6MSxcInNoYXJlVG9cIjowLFwiaXNGaXJzdFRpbWVTaGFyZVwiOjB9XHJcbiAgICAgICAgICAgICAgICAvL3JldOaIkOWKn++8mjDvvJvlpLHotKXvvJox77yb5Y+W5raI77yaMlxyXG4gICAgICAgICAgICAgICAgLy9zaGFyZVRvIOWIhuS6q+a4oOmBk++8mlFR77yaMO+8m1Fab25l77yaMe+8m+W+ruS/oe+8mjLvvJvmnIvlj4vlnIjvvJozXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5YiG5Lqr5oiQ5YqfJywgc3VjY09iai5jb2RlLCBKU09OLnN0cmluZ2lmeShzdWNjT2JqLmRhdGEpKTtcclxuICAgICAgICAgICAgICAgIGlmKHN1Y2NPYmouZGF0YS5yZXQgPT0gMClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjayhcInN1Y2Nlc3NcIixzdWNjT2JqLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soXCJmYWlsXCIsc3VjY09iai5kYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24gKGZhaWxPYmopIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfliIbkuqvlpLHotKUnLCBmYWlsT2JqLmNvZGUsIEpTT04uc3RyaW5naWZ5KGZhaWxPYmoubXNnKSk7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjayhcImZhaWxcIik7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbXBsZXRlOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5YiG5Lqr5a6M5oiQ77yMXGLkuI3orrrmiJDlip/lpLHotKUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzaGFyZUxpbmsoKSB7XHJcbiAgICAgICAgQksuU2hhcmUuc2hhcmUoe1xyXG4gICAgICAgICAgICBxcUltZ1VybDogJ2h0dHA6Ly9odWRvbmcucXEuY29tL2RvY3MvZW5naW5lL2ltZy84NDhCNzZCNTUzMEFBN0VFN0IzOEU5QTEyNjdENzA4Ni5wbmcnLFxyXG4gICAgICAgICAgICBtc2dVcmw6ICdodHRwczovL2dpdGVlLmNvbS9qYXZlbjIwNS9Ccmlja2VuZ2luZV9HdWlkZT8nLCAvL+S4jeWKoOmXruWPt+WIhuS6q+eahOmTvuaOpeaXoOazleebtOaOpeiuv+mXrlxyXG4gICAgICAgICAgICB0aXRsZTogJ+a1i+ivlei9u+a4uOaIjycsXHJcbiAgICAgICAgICAgIHN1bW1hcnk6ICdINemTvuaOpeWIhuS6qy1CeSBKYXZlbicsXHJcbiAgICAgICAgICAgIC8v5YiG5Lqr5Ye65Y6755qE6ZO+5o6l5Li6XHJcbiAgICAgICAgICAgIC8vaHR0cHM6Ly9naXRlZS5jb20vamF2ZW4yMDUvQnJpY2tlbmdpbmVfR3VpZGU/JmdhbWVJZD3muLjmiI9JRCZyb29tSWQ95oi/6Ze0SUQmZ2FtZVZlcnNpb2495ri45oiP54mI5pys5Y+3JnVpbj1RUeWPt+eggVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzY3JlZW5TaG90U2hhcmUoKSB7XHJcbiAgICAgICAgLy/lrp7pmYXlg4/ntKBcclxuICAgICAgICB2YXIgcGl4ZWxTaXplID0gQksuRGlyZWN0b3Iuc2NyZWVuUGl4ZWxTaXplO1xyXG4gICAgICAgIHZhciBwV2lkdGggPSBwaXhlbFNpemUud2lkdGg7XHJcbiAgICAgICAgdmFyIHBXaGVpZ2h0ID0gcGl4ZWxTaXplLmhlaWdodDtcclxuXHJcbiAgICAgICAgQksuU2hhcmUuc2hhcmUoe1xyXG4gICAgICAgICAgICByYW5nZToge1xyXG4gICAgICAgICAgICAgICAgeDogcFdpZHRoIC8gMixcclxuICAgICAgICAgICAgICAgIHk6IHBXaGVpZ2h0IC8gMixcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBwV2lkdGgsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHBXaGVpZ2h0XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHFxSW1nVXJsOlwiXCIsLy8g5YiG5Lqr5YiwUVHnmoTlm77niYfnvZHnu5zpk77mjqXvvIzlv4XpgInvvIzku4XmlK/mjIHnvZHnu5zpk77mjqVcclxuICAgICAgICAgICAgdGl0bGU6ICfmtYvor5XovbvmuLjmiI8nLFxyXG4gICAgICAgICAgICBzdW1tYXJ5OiBcIuaIquWbvuWIhuS6qy1CeSBKYXZlblwiLFxyXG4gICAgICAgICAgICBleHRlbmRJbmZvOiAnSUpQYXknLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoc3VjY09iaikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+WIhuS6q+aIkOWKnycsIHN1Y2NPYmouY29kZSwgSlNPTi5zdHJpbmdpZnkoc3VjY09iai5kYXRhKSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uIChmYWlsT2JqKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5YiG5Lqr5aSx6LSlJywgZmFpbE9iai5jb2RlLCBKU09OLnN0cmluZ2lmeShmYWlsT2JqLm1zZykpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb21wbGV0ZTogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+WIhuS6q+WujOaIkCzkuI3orrrmiJDlip/lpLHotKUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBmb2xsb3coKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJHbG9iYWwuUFVJTj5cIiArIEdsb2JhbC5QVUlOKTtcclxuICAgICAgICBCSy5RUS5lbnRlclB1YkFjY291bnRDYXJkKEdsb2JhbC5QVUlOKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0TmljaygpIHtcclxuICAgICAgICByZXR1cm4gR2xvYmFsLm5pY2tOYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjcmVhdGVTaG9ydEN1dCgpXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIGV4dGVuZEluZm8gPSBcIlwiOy8v5omp5bGV5a2X5q61XHJcbiAgICAgICAgQksuUVEuY3JlYXRlU2hvcnRDdXQoZXh0ZW5kSW5mbylcclxuICAgIH1cclxuXHJcblxyXG4gICAgc3RhdGljIGdldEhlYWQoKXtcclxuICAgIFx0cmV0dXJuIEdsb2JhbC5oZWFkVXJsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgXHTmiZPlvIDkuIDkuKrnvZHpobVcclxuICAgICovXHJcbiAgICBvcGVuVXJsKHVybCl7XHJcbiAgICBcdEJLLk1RUS5XZWJ2aWV3Lm9wZW4odXJsKTtcclxuICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAqIOWtmOWCqOa4uOaIj+S4quS6uuengeacieaVsOaNrlxyXG4gICAgKiBAcGFyYW0gZGF0YSDopoHlrZjlgqjnmoTmlbDmja4uXHJcbiAgICAqL1xyXG4gICAgc2F2ZUdhbWVEYXRhKGRhdGEpe1xyXG4gICAgICAgIC8vIOWtmOWCqOa4uOaIj+S4quS6uuengeacieaVsOaNrlxyXG4gICAgICAgIC8vIHZhciBkYXRhID0ge1xyXG4gICAgICAgIC8vICAgICBtYXhTY29yZTogMTAwLCAgICAgICAgICAgICAgLy8g5LiA5Liq5Y6G5Y+y5pyA6auY56ev5YiGXHJcbiAgICAgICAgLy8gICAgIC8vIOS4jeWQjOa4uOaIj+aooeW8j+S4i+WtmOeahOaVsOaNru+8jOWIl+ihqOadpeeahO+8jOWPr+S7peagueaNruiHqui6q+mcgOaxguS9v+eUqO+8jOi/memHjOmdoueahOaVsOaNru+8jOWQjuWPsOS4jeWBmuS7u+S9leWkhOeQhu+8jOaAjuS5iOadpeaAjuS5iOWbnlxyXG4gICAgICAgIC8vICAgICBtb2RlRGF0YXM6W1xyXG4gICAgICAgIC8vICAgICAgICAgeyAgICAgICAvLyDlrZfmrrXpg73mmK/oh6rlt7HlrprkuYnnmoTvvIzlkI7lj7DkuI3lgZrku7vkvZXlpITnkIZcclxuICAgICAgICAvLyAgICAgICAgICAgICBtYXhTY29yZTogMSxcclxuICAgICAgICAvLyAgICAgICAgICAgICBtb2RlOiAxLFxyXG4gICAgICAgIC8vICAgICAgICAgfSxcclxuICAgICAgICAvLyAgICAgICAgIHsgICAgICAgLy8g5a2X5q616YO95piv6Ieq5bex5a6a5LmJ55qE77yM5ZCO5Y+w5LiN5YGa5Lu75L2V5aSE55CGXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgbWF4U2NvcmU6IDIsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgbW9kZTogMixcclxuICAgICAgICAvLyAgICAgICAgIH0sXHJcbiAgICAgICAgLy8gICAgIF0sXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSk9PntcclxuICAgICAgICAgICAgLy8g5L+d5a2Y5Liq5Lq65pWw5o2uXHJcbiAgICAgICAgICAgIEJLLlFRLnNhdmVHYW1lRGF0YShkYXRhLCAoZXJyQ29kZSwgY21kLCBkYXRhKT0+e1xyXG4gICAgICAgICAgICAgICAgQksuQ29uc29sZS5sb2coMSwgMSwgJ3NhdmVHYW1lRGF0YSA6ICcgKyBlcnJDb2RlICsgJywgJyArIGNtZCArICcsICcgKyBkYXRhKTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoe2VyckNvZGU6ZXJyQ29kZSwgY21kOmNtZCwgZGF0YTpkYXRhfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICog5ouJ5Y+W5ri45oiP5Liq5Lq656eB5pyJ5pWw5o2uXHJcbiAgICAqL1xyXG4gICAgbG9hZEdhbWVEYXRhKCl7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKT0+e1xyXG4gICAgICAgICAgICBCSy5RUS5sb2FkR2FtZURhdGEoKGVyckNvZGUsIGNtZCwgZGF0YSk9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyDov5nph4zov5Tlm57nmoQgZGF0Ye+8jOWwseaYr+S4iumdouWtmOWCqOa4uOaIj+S4quS6uuengeacieaVsOaNruaXtuWAmeS8oOWFpeeahCBkYXRhXHJcbiAgICAgICAgICAgICAgICBCSy5Db25zb2xlLmxvZygxLCAxLCAnbG9hZEdhbWVEYXRhIDogJyArIGVyckNvZGUgKyAnLCAnICsgY21kICsgJywgJyArIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh7ZXJyQ29kZTplcnJDb2RlLCBjbWQ6Y21kLCBkYXRhOmRhdGF9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgICAvKipcclxuICAgICog5rS+5Y+R57qi5YyFXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBleHRlbmRJbmZvIOaJqeWxleeahOS/oeaBry4uXHJcbiAgICAqL1xyXG4gICAgc2VuZEIyQ1JlZFBhY2tldChleHRlbmRJbmZvKXtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpPT57XHJcbiAgICAgICAgICAgIC8vIHZhciBleHRlbmRJbmZvID0gXCJ4eHh4eHh4XCI7XHJcbiAgICAgICAgICAgIEJLLlFRLnNlbmRCMkNSZWRQYWNrZXQoZXh0ZW5kSW5mbyxmdW5jdGlvbihlcnJDb2RlLCBjbWQsIGRhdGEpe1xyXG4gICAgICAgICAgICAgICAgQksuU2NyaXB0LmxvZygxLCAxLCAnc2VuZEIyQ1JlZFBhY2tldCA6ICcgKyBlcnJDb2RlICsgJywgJyArIGNtZCArICcsICcgKyBKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgICAgICAgICAgICAgICBpZihlcnJDb2RlID09IDApe1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5rS+5Y+R5oiQ5YqfXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAvL+a0vuWPkeWksei0pVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJlc29sdmUoe2VyckNvZGU6ZXJyQ29kZSwgY21kOmNtZCwgZGF0YTpkYXRhfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBsb2dpbigpXHJcbiAgICB7XHJcbiAgICAgICAgQksuTVFRLkFjY291bnQuZ2V0SGVhZChHYW1lU3RhdHVzSW5mby5vcGVuSWQsKG9wZW5JZCwgaW1nUGF0aCk9PiB7XHJcbiAgICAgICAgICAgIC8vIHJlc29sdmUoaW1nUGF0aClcclxuICAgICAgICAgICAgR2xvYmFsLmhlYWRVcmwgPSBpbWdQYXRoO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIEJLLk1RUS5BY2NvdW50LmdldE5pY2soR2FtZVN0YXR1c0luZm8ub3BlbklkLCAob3BlbklkLG5pY2tOYW1lKT0+e1xyXG4gICAgICAgICAgICBHbG9iYWwubmlja05hbWUgPSBuaWNrTmFtZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgdGVzdCgpe1xyXG5cdFx0Ly8gQksuUVEuZmV0Y2hPcGVuS2V5KGZ1bmN0aW9uIChlcnJDb2RlLCBjbWQsIGRhdGEpIHtcclxuXHRcdC8vIFx0Y29uc29sZS5sb2coXCJbZmV0Y2hPcGVuS2V5XVwiLGVyckNvZGUsIGNtZCwgZGF0YSlcclxuXHRcdC8vICAgICBpZiAoZXJyQ29kZSA9PSAwKSB7XHJcblx0XHQvLyAgICAgICAgICB2YXIgb3BlbktleSA9IGRhdGEub3BlbktleTtcclxuXHRcdC8vICAgICAgfVxyXG5cdFx0Ly8gfSk7XHJcblx0XHR2YXIgb3BlbklkID0gR2FtZVN0YXR1c0luZm8ub3BlbklkO1xyXG5cdFx0Y29uc29sZS5sb2coXCJvcGVuSWQ6XCIsb3BlbklkKTtcclxuICAgIFx0dmFyIHN5c3RlbUluZm8gPSBCSy5nZXRTeXN0ZW1JbmZvU3luYygpO1xyXG5cclxuXHRcdEJLLkNvbnNvbGUubG9nKCfmuLjmiI/niYjmnKzlj7c6JytzeXN0ZW1JbmZvLmdhbWVWZXJzaW9uKTtcclxuXHRcdEJLLkNvbnNvbGUubG9nKCfmmK/lkKbmiL/kuLs6JytzeXN0ZW1JbmZvLmlzTWFzdGVyKTsgICAvL+S9v+eUqOWOmOexs+engOaIv+mXtOaXtuaJjeacieaViFxyXG5cdFx0QksuQ29uc29sZS5sb2coJ+aIv+mXtOWPtzonK3N5c3RlbUluZm8ucm9vbUlkKTsgLy/kvb/nlKjljpjnsbPnp4DmiL/pl7Tml7bmiY3mnInmlYhcclxuXHRcdEJLLkNvbnNvbGUubG9nKCfns7vnu5/niYjmnKw6JytzeXN0ZW1JbmZvLm9zVmVyc2lvbik7XHJcblx0XHRCSy5Db25zb2xlLmxvZygn572R57uc57G75Z6LOicrc3lzdGVtSW5mby5uZXR3b3JrVHlwZSk7XHJcblxyXG5cdFx0QksuQ29uc29sZS5sb2coJ+W5s+WPsDonK3N5c3RlbUluZm8ucGxhdGZvcm0pO1xyXG5cdFx0QksuQ29uc29sZS5sb2coJ+W9k+WJjeeUqOaIt+eahOagh+ivhjonK3N5c3RlbUluZm8ub3BlbklkKTtcclxuXHRcdEJLLkNvbnNvbGUubG9nKCfmiYvmnLpxceeJiOacrDonK3N5c3RlbUluZm8uUVFWZXIpO1xyXG5cclxuXHRcdEJLLkNvbnNvbGUubG9nKCfmmK/lkKbpppbmrKHlronoo4U6JytzeXN0ZW1JbmZvLmlzRmlyc3RJbnN0YWxsKTtcclxuXHRcdEJLLkNvbnNvbGUubG9nKCflvZPliY3ogYrlpKnnqpfnsbvlnos6JytzeXN0ZW1JbmZvLmFpb1R5cGUpO1xyXG5cdFx0QksuQ29uc29sZS5sb2coJ+a4uOaIj+WQr+WKqOWFpeWPozonK3N5c3RlbUluZm8uc3JjKTtcclxuXHRcdEJLLkNvbnNvbGUubG9nKCfmmK/lkKbkuLrnrqHnkIbotKblj7c6JytzeXN0ZW1JbmZvLmlzV2hpdGVVc2VyKTtcclxuXHRcdEJLLkNvbnNvbGUubG9nKCfmuLjmiI/nsbvlnos6JytzeXN0ZW1JbmZvLmdhbWVUeXBlKTtcclxuXHRcdEJLLkNvbnNvbGUubG9nKCflhbfkvZPmnLrlnos6JytzeXN0ZW1JbmZvLm1vZGVsKTtcclxuXHRcdEJLLkNvbnNvbGUubG9nKCfmgKfliKs6JytzeXN0ZW1JbmZvLnNleCk7XHJcblxyXG4gICAgXHRcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaIkOe7qeS4iuaKpVxyXG4gICAgICogQHBhcmFtIHsqfSBsZXZlbCBcclxuICAgICAqIEBwYXJhbSB7Kn0gY2FsbGJhY2sgXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyB1cGxvYWRTY29yZShzY29yZSwgY2FsbGJhY2s/KSB7XHJcbiAgICAgICAgdmFyIGRhdGEgPSB7XHJcbiAgICAgICAgICAgIHVzZXJEYXRhOiBbe1xyXG4gICAgICAgICAgICAgICAgb3BlbklkOiBHYW1lU3RhdHVzSW5mby5vcGVuSWQsXHJcbiAgICAgICAgICAgICAgICBzdGFydE1zOiAobmV3IERhdGUoKS5nZXRUaW1lKCkgLSA2MCAqIDUgKiAxMDAwKS50b1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgZW5kTXM6ICgobmV3IERhdGUoKSkuZ2V0VGltZSgpKS50b1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgc2NvcmVJbmZvOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2NvcmU6IHNjb3JlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSwgXSxcclxuICAgICAgICAgICAgYXR0cjoge1xyXG4gICAgICAgICAgICAgICAgc2NvcmU6IHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAncmFuaycsXHJcbiAgICAgICAgICAgICAgICAgICAgb3JkZXI6IDEsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgICAgICBCSy5RUS51cGxvYWRTY29yZVdpdGhvdXRSb29tKDEsIGRhdGEsIGZ1bmN0aW9uIChlcnJDb2RlLCBjbWQsIGRhdGEpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tdXBsb2FkU2NvcmVXaXRob3V0Um9vbSBjYWxsYmFjayAgY21kXCIgKyBjbWQgKyBcIiBlcnJDb2RlOlwiICsgZXJyQ29kZSArIFwiICBkYXRhOlwiICsgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVyckNvZGUsIGRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOaLieWPluaOkuihjOamnOaVsOaNrlxyXG4gICAgICogQHBhcmFtIHsqfSBjYWxsYmFjayBbY29kZSxsaXN0XVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0UmFua0xpc3QoY2FsbGJhY2spIHtcclxuICAgICAgICBsZXQgYXR0ciA9IFwic2NvcmVcIjtcclxuICAgICAgICBsZXQgb3JkZXIgPSAxOyAvL+aOkuW6j+eahOaWueazle+8mlsgMTog5LuO5aSn5Yiw5bCPKOWNleWxgCnvvIwyOiDku47lsI/liLDlpKco5Y2V5bGAKe+8jDM6IOeUseWkp+WIsOWwjyjntK/np68pXVxyXG4gICAgICAgIGxldCByYW5rVHlwZSA9IDA7Ly/opoHmn6Xor6LnmoTmjpLooYzmppznsbvlnovvvIwwOiDlpb3lj4vmjpLooYzmppxcclxuICAgICAgICBCSy5RUS5nZXRSYW5rTGlzdFdpdGhvdXRSb29tKGF0dHIsIG9yZGVyLCByYW5rVHlwZSwgZnVuY3Rpb24gKGVyckNvZGUsIGNtZCwgZGF0YSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tZ2V0UmFua0xpc3RXaXRob3V0Um9vbSBjYWxsYmFjayAgY21kXCIgKyBjbWQgKyBcIiBlcnJDb2RlOlwiICsgZXJyQ29kZSk7XHJcbiAgICAgICAgICAgIGlmIChlcnJDb2RlICE9IDApIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKGVyckNvZGUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmFua0xpc3QgPSBkYXRhLmRhdGEucmFua2luZ19saXN0O1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCI9PT09PWRhdGEgbm90IG51bGwgXCIgKyByYW5rTGlzdC5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgLy97XCJkYXRhXCI6e1wicmFua2luZ19saXN0XCI6W1wibmlja1wiOlwiRGFtb24gUmVuXCIsXCJzY29yZVwiOjMwNCxcInNlbGZGbGFnXCI6MSxcInVybFwiOlwiXCIsXCJzZXFJZFwiOjBdfX1cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVyckNvZGUsIHJhbmtMaXN0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiAvL+WxleekuuW5v+WRiiBHbG9iYWwudmlkZW9BZC5zaG93KCk7XHJcbiAgICAgKiDpooTliqDovb3op4bpopHlub/lkYpcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGxvYWRWaWRlb0FkKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCI9PT09PT09PT09PT1CS1RPT2wubG9hZFZpZGVvQURcIiAsIEdsb2JhbC52aWRlb0FkKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBpZiAoIUdsb2JhbC52aWRlb0FkICkgeyAvL+WmguaenOayoeacieW5v+WRiui1hOa6kOWwseWKoOi9veaWsOeahOinhumikeW5v+WRilxyXG4gICAgICAgIGxldCB2aWRlb0FkID0gQksuQWR2ZXJ0aXNlbWVudC5jcmVhdGVWaWRlb0FkKCk7XHJcbiAgICAgICAgdmlkZW9BZC5vbkVycm9yKGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgLy/liqDovb3lpLHotKVcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCI+Pj4+Pj4+Pj5CS1Rvb2xzIG9uRXJyb3IgY29kZTpcIiArIGVyci5jb2RlICsgXCIgbXNnOlwiICsgZXJyLm1zZyk7XHJcbiAgICAgICAgICAgIEdsb2JhbC52aWV3QWRMb2FkQ291bnQgKz0gMTtcclxuICAgICAgICAgICAgLy/lsJ3or5U05qyhXHJcbiAgICAgICAgICAgIGlmIChHbG9iYWwudmlld0FkTG9hZENvdW50IDwgNCkge1xyXG4gICAgICAgICAgICAgICAgQktUb29sLmxvYWRWaWRlb0FkKGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihjYWxsYmFjaykgY2FsbGJhY2soXCJlcnJvclwiKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB2aWRlb0FkLm9uUGxheUZpbmlzaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8v5pKt5pS+57uT5p2fXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQktUb29scyBvblBsYXlGaW5pc2guLi5cIik7XHJcbiAgICAgICAgICAgIEdsb2JhbC52aWRlb0FkID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICBpZihjYWxsYmFjaykgY2FsbGJhY2soXCJmaW5pc2hcIilcclxuICAgICAgICB9KTtcclxuICAgICAgICB2aWRlb0FkLm9uQ2xvc2UoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvL+aSreaUvue7k+adn1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkJLVG9vbHMgb25DbG9zZS4uLlwiKTtcclxuICAgICAgICAgICAgaWYoY2FsbGJhY2spIGNhbGxiYWNrKFwiY2xvc2VcIilcclxuICAgICAgICAgICAgR2xvYmFsLnZpZGVvQWQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHZpZGVvQWQub25Mb2FkKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy/liqDovb3miJDlip9cclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJCS1Rvb2xzIG9uTG9hZFwiKTtcclxuICAgICAgICAgICAgR2xvYmFsLnZpZGVvQWQgPSB2aWRlb0FkO1xyXG4gICAgICAgICAgICBHbG9iYWwudmlkZW9BZExvYWRDb3VudCA9IDA7XHJcbiAgICAgICAgICAgIGlmKGNhbGxiYWNrKSBjYWxsYmFjayhcImxvYWRcIiAsIHZpZGVvQWQpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAgICAgLy8gIGVsc2Uge1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIkJLVG9vbHMg5bey5a2Y5Zyo5bm/5ZGK6LWE5rqQIOaIluiAhSDpnZ5RUeeOqeS4gOeOqeW5s+WPsC4uLi5cIik7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogLy/lsZXnpLrlub/lkYogR2xvYmFsLmJhbm5lckFkLnNob3coKTtcclxuICAgICAqIOmihOWKoOi9vWJhbm5lcuW5v+WRilxyXG4gICAgICogMTAwMemdmeaAgWJhbm5lcu+8jDEwMDLliqjmgIFiYW5uZXLvvIwxMDAzIOW5v+eCuemAmmJhbm5lcig3LjguMClcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGxvYWRCYW5uZXJBZChjYWxsYmFjaz8sIHZpZXdJZD8pIHtcclxuICAgICAgICBpZiAoIXZpZXdJZCkge1xyXG4gICAgICAgICAgICBsZXQgcXFWZXIgPSBCSy5nZXRTeXN0ZW1JbmZvU3luYygpLlFRVmVyO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuW9k+WJjeaJi1HniYjmnKw6XCIgKyBxcVZlcik7XHJcbiAgICAgICAgICAgIGxldCBpc0JpZyA9IEJLVG9vbC52ZXJzaW9uQ29tcGFyZShxcVZlciwgXCI3LjguNVwiKTsgLy/lpoLmnpzlpKfkuo43LjguNVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuW9k+WJjeeJiOacrOWkp+S6jjcuOC41OlwiICsgaXNCaWcpO1xyXG4gICAgICAgICAgICBpZiAoaXNCaWcpIHtcclxuICAgICAgICAgICAgICAgIHZpZXdJZCA9IDEwMDM7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2aWV3SWQgPSAxMDAyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibG9hZEJhbm5lckFkIHZpZXdJZDpcIiArIHZpZXdJZCk7XHJcbiAgICAgICAgbGV0IGJhbm5lckFkID0gQksuQWR2ZXJ0aXNlbWVudC5jcmVhdGVCYW5uZXJBZCh7XHJcbiAgICAgICAgICAgIHZpZXdJZDogdmlld0lkLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGJhbm5lckFkLm9uRXJyb3IoZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICAvL+WKoOi9veWksei0pVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkJLVG9vbHMgb25FcnJvciBjb2RlOlwiICsgZXJyLmNvZGUgKyBcIiBtc2c6XCIgKyBlcnIubXNnKTtcclxuICAgICAgICAgICAgR2xvYmFsLmJhbm5lckFkTG9hZENvdW50ICs9IDE7XHJcbiAgICAgICAgICAgIGlmIChHbG9iYWwuYmFubmVyQWRMb2FkQ291bnQgPCA0KSB7XHJcbiAgICAgICAgICAgICAgICBCS1Rvb2wubG9hZEJhbm5lckFkKGNhbGxiYWNrLHZpZXdJZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoY2FsbGJhY2spIGNhbGxiYWNrKFwiZXJyb3JcIilcclxuICAgICAgICB9KTtcclxuICAgICAgICBiYW5uZXJBZC5vbkxvYWQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvL+WKoOi9veaIkOWKn1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkJLVG9vbHMgb25Mb2FkXCIpO1xyXG4gICAgICAgICAgICBHbG9iYWwuYmFubmVyQWQgPSBiYW5uZXJBZDtcclxuICAgICAgICAgICAgR2xvYmFsLnZpZXdBZExvYWRDb3VudCA9IDA7XHJcbiAgICAgICAgICAgIGlmKGNhbGxiYWNrKSBjYWxsYmFjayhcImxvYWRcIiAsYmFubmVyQWQpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNob3dCYW5uZXJBZCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkJLVG9vbHMg5pi+56S6YmFubmVy5bm/5ZGKXCIpXHJcbiAgICAgICAgaWYgKEdsb2JhbC5iYW5uZXJBZCkge1xyXG4gICAgICAgICAgICBHbG9iYWwuYmFubmVyQWQuc2hvdygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQktUb29scyDkuI3lrZjlnKhiYW5uZXLotYTmupAuLi4uXCIpO1xyXG4gICAgICAgICAgICBCS1Rvb2wubG9hZEJhbm5lckFkKCh2LGFkKT0+e1xyXG4gICAgICAgICAgICAgICAgaWYodj09XCJsb2FkXCIpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgQktUb29sLnNob3dCYW5uZXJBZCgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaGlkZUJhbm5lckFkKCkge1xyXG4gICAgICAgIGlmIChHbG9iYWwuYmFubmVyQWQpIHtcclxuICAgICAgICAgICAgR2xvYmFsLmJhbm5lckFkLmhpZGUoKTtcclxuICAgICAgICAgICAgR2xvYmFsLmJhbm5lckFkID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQktUb29scyDkuI3lrZjlnKhiYW5uZXLotYTmupDml6Dms5XlhbPpl60uLi4uXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2hvd1RvYXN0KHRpdGxlLCBkdXJhdGlvbikge1xyXG4gICAgICAgIGlmICghZHVyYXRpb24pIHtcclxuICAgICAgICAgICAgZHVyYXRpb24gPSAzMDAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09IGNjLnN5cy5RUV9QTEFZKSB7XHJcbiAgICAgICAgICAgIEJLLlVJLnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogdGl0bGUsXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogZHVyYXRpb24sXHJcbiAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQktUb29scyBzaG93VG9hc3QgY29tcGxldGU6XCIgKyB0aXRsZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5byA5ZCv5bGP5bmV5bi45LquXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBrZWVwU2NyZWVuT24oKSB7XHJcbiAgICAgICAgQksuRGV2aWNlLmtlZXBTY3JlZW5Pbih7XHJcbiAgICAgICAgICAgIGlzS2VlcE9uOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOWPlua2iOWxj+W5leW4uOS6rlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY2FuY2VsS2VlcFNjcmVlbk9uKCkge1xyXG4gICAgICAgIEJLLkRldmljZS5rZWVwU2NyZWVuT24oe1xyXG4gICAgICAgICAgICBpc0tlZXBPbjogZmFsc2VcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19