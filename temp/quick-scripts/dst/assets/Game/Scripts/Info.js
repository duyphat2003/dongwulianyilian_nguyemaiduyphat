
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/Info.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '894ddeHxZNOMqD6BW+YheZr', 'Info');
// Game/Scripts/Info.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInfo = exports.ChoiceType = void 0;
var DataCenter_1 = require("../../framework/plugin_boosts/misc/DataCenter");
var Res_1 = require("./hex-lines-game/Res");
var ToastManager_1 = require("../../framework/plugin_boosts/ui/ToastManager");
var Device_1 = require("../../framework/plugin_boosts/gamesys/Device");
var Platform_1 = require("../../framework/Platform");
var MoreGameManager_1 = require("../../framework/wxsdk/MoreGameManager");
var ChoiceType;
(function (ChoiceType) {
    ChoiceType[ChoiceType["DailyGet"] = 0] = "DailyGet";
    ChoiceType[ChoiceType["Levelup"] = 1] = "Levelup";
    ChoiceType[ChoiceType["Get"] = 2] = "Get";
    ChoiceType[ChoiceType["Shop"] = 3] = "Shop";
    ChoiceType[ChoiceType["BannerAdRefresh"] = 4] = "BannerAdRefresh";
    ChoiceType[ChoiceType["HB"] = 5] = "HB";
})(ChoiceType = exports.ChoiceType || (exports.ChoiceType = {}));
var UserInfoClass = /** @class */ (function (_super) {
    __extends(UserInfoClass, _super);
    function UserInfoClass() {
        var _this = _super.call(this) || this;
        _this.choices = [];
        _this.version = "6";
        _this.level = 1;
        _this.selectedSkin = "2";
        _this.dailyGetTime = new Date(2018, 1, 1).getTime();
        _this.freedrawTime = _this.dailyGetTime;
        _this.luckyVideoWatchTime = _this.dailyGetTime;
        _this.shopFreeDiamondTime = _this.dailyGetTime;
        _this.diamond = 0;
        _this.sfx_enabled = true;
        _this.firstTimeReach = false;
        _this.luckyVideoWatchCount = 0;
        _this.timePassed = 0;
        _this.stepUsed = 0;
        _this.currentLevel = 1;
        _this.unlock(_this.selectedSkin);
        setTimeout(function () {
            _this.save();
        }, 60 * 1000);
        return _this;
        // onexit game =>save
    }
    // ret: 0:directly-get 1:share 2:video
    UserInfoClass.prototype.getChoice = function (slotId) {
        return this.choices[slotId] || 0;
    };
    UserInfoClass.prototype.init = function () {
        Platform_1.default.configGetSignal.on(this.onGetConfig, this);
        Platform_1.default.requestServerConfigs("t_games", this.onGetGames, this);
    };
    UserInfoClass.prototype.onGetGames = function (data) {
        MoreGameManager_1.default.instance.addList(data);
    };
    UserInfoClass.prototype.onGetConfig = function (data) {
        if (data) {
            var record = data[0];
            if (record) {
                this.choices = JSON.parse(record[this.version]);
            }
        }
        Platform_1.default.initBannerAd(this.getChoice(ChoiceType.BannerAdRefresh));
    };
    UserInfoClass.prototype.addDiamond = function (d, b) {
        if (b === void 0) { b = true; }
        if (typeof (d) == "number")
            this.diamond += d;
        else
            this.diamond += parseInt(d);
        if (b) {
            ToastManager_1.Toast.make("获得钻石 x" + d);
            Device_1.default.playEffect(Res_1.R.audio_get_diamond);
        }
        if (!this.firstTimeReach) {
            if (this.diamond >= 500) {
                ToastManager_1.Toast.make("哇可以买皮肤了，快去皮肤商店看看吧!", 2);
                this.firstTimeReach = true;
                exports.UserInfo.save();
            }
        }
    };
    UserInfoClass.prototype.isUnlock = function (skin_id) {
        var carUnlocked = localStorage.getItem("unlocked_" + skin_id);
        if (!carUnlocked) {
            return false;
        }
        else {
            return carUnlocked == "1";
        }
    };
    UserInfoClass.prototype.isAllUnlocked = function () {
        var c = 0;
        for (var i = 0; i < Res_1.R.skinConfig.json.length; i++) {
            var v = Res_1.R.skinConfig.json[i];
            if (exports.UserInfo.isUnlock(v.id)) {
                c++;
            }
        }
        return c == Res_1.R.skinConfig.json.length;
    };
    UserInfoClass.prototype.getSkinById = function (id) {
        var res = Res_1.R.skinConfig.json.filter(function (v) { return v.id == id; });
        return res[0];
    };
    UserInfoClass.prototype.unlock = function (skin_id) {
        localStorage.setItem("unlocked_" + skin_id, "1");
    };
    __decorate([
        DataCenter_1.field()
    ], UserInfoClass.prototype, "level", void 0);
    __decorate([
        DataCenter_1.field()
    ], UserInfoClass.prototype, "selectedSkin", void 0);
    __decorate([
        DataCenter_1.field()
    ], UserInfoClass.prototype, "dailyGetTime", void 0);
    __decorate([
        DataCenter_1.field()
    ], UserInfoClass.prototype, "freedrawTime", void 0);
    __decorate([
        DataCenter_1.field()
    ], UserInfoClass.prototype, "luckyVideoWatchTime", void 0);
    __decorate([
        DataCenter_1.field()
    ], UserInfoClass.prototype, "shopFreeDiamondTime", void 0);
    __decorate([
        DataCenter_1.field()
    ], UserInfoClass.prototype, "diamond", void 0);
    __decorate([
        DataCenter_1.field()
    ], UserInfoClass.prototype, "sfx_enabled", void 0);
    __decorate([
        DataCenter_1.field()
    ], UserInfoClass.prototype, "firstTimeReach", void 0);
    __decorate([
        DataCenter_1.field()
    ], UserInfoClass.prototype, "luckyVideoWatchCount", void 0);
    UserInfoClass = __decorate([
        DataCenter_1.dc("Info")
    ], UserInfoClass);
    return UserInfoClass;
}(DataCenter_1.default));
exports.default = UserInfoClass;
exports.UserInfo = DataCenter_1.default.register(UserInfoClass);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcSW5mby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDRFQUFzRjtBQUN0Riw0Q0FBeUM7QUFDekMsOEVBQXNFO0FBQ3RFLHVFQUFrRTtBQUNsRSxxREFBZ0Q7QUFDaEQseUVBQW9FO0FBR3BFLElBQVksVUFPWDtBQVBELFdBQVksVUFBVTtJQUNsQixtREFBUSxDQUFBO0lBQ1IsaURBQU8sQ0FBQTtJQUNQLHlDQUFHLENBQUE7SUFDSCwyQ0FBSSxDQUFBO0lBQ0osaUVBQWUsQ0FBQTtJQUNmLHVDQUFFLENBQUE7QUFDTixDQUFDLEVBUFcsVUFBVSxHQUFWLGtCQUFVLEtBQVYsa0JBQVUsUUFPckI7QUFHRDtJQUEyQyxpQ0FBVTtJQXdGakQ7UUFBQSxZQUVJLGlCQUFPLFNBTVY7UUE5RkQsYUFBTyxHQUFNLEVBQUUsQ0FBQTtRQUNmLGFBQU8sR0FBVSxHQUFHLENBQUM7UUFnQ3JCLFdBQUssR0FBVSxDQUFDLENBQUM7UUFHakIsa0JBQVksR0FBVSxHQUFHLENBQUM7UUFHMUIsa0JBQVksR0FBVyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBR3BELGtCQUFZLEdBQVUsS0FBSSxDQUFDLFlBQVksQ0FBQztRQUd4Qyx5QkFBbUIsR0FBVSxLQUFJLENBQUMsWUFBWSxDQUFBO1FBRzlDLHlCQUFtQixHQUFVLEtBQUksQ0FBQyxZQUFZLENBQUM7UUFHL0MsYUFBTyxHQUFVLENBQUMsQ0FBQztRQUduQixpQkFBVyxHQUFXLElBQUksQ0FBQztRQUczQixvQkFBYyxHQUFXLEtBQUssQ0FBQztRQUcvQiwwQkFBb0IsR0FBVSxDQUFDLENBQUM7UUFDaEMsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFDdkIsY0FBUSxHQUFXLENBQUMsQ0FBQztRQXNCckIsa0JBQVksR0FBVSxDQUFDLENBQUM7UUFLcEIsS0FBSSxDQUFD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c291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERhdGFDZW50ZXIsIHsgZGMsIGZpZWxkIH0gZnJvbSBcIi4uLy4uL2ZyYW1ld29yay9wbHVnaW5fYm9vc3RzL21pc2MvRGF0YUNlbnRlclwiO1xyXG5pbXBvcnQgeyBSIH0gZnJvbSBcIi4vaGV4LWxpbmVzLWdhbWUvUmVzXCI7XHJcbmltcG9ydCB7IFRvYXN0IH0gZnJvbSBcIi4uLy4uL2ZyYW1ld29yay9wbHVnaW5fYm9vc3RzL3VpL1RvYXN0TWFuYWdlclwiO1xyXG5pbXBvcnQgRGV2aWNlIGZyb20gXCIuLi8uLi9mcmFtZXdvcmsvcGx1Z2luX2Jvb3N0cy9nYW1lc3lzL0RldmljZVwiO1xyXG5pbXBvcnQgUGxhdGZvcm0gZnJvbSBcIi4uLy4uL2ZyYW1ld29yay9QbGF0Zm9ybVwiO1xyXG5pbXBvcnQgTW9yZUdhbWVNYW5hZ2VyIGZyb20gXCIuLi8uLi9mcmFtZXdvcmsvd3hzZGsvTW9yZUdhbWVNYW5hZ2VyXCI7XHJcblxyXG5cclxuZXhwb3J0IGVudW0gQ2hvaWNlVHlwZSAge1xyXG4gICAgRGFpbHlHZXQsXHJcbiAgICBMZXZlbHVwLFxyXG4gICAgR2V0LFxyXG4gICAgU2hvcCxcclxuICAgIEJhbm5lckFkUmVmcmVzaCxcclxuICAgIEhCLFxyXG59XHJcblxyXG5AZGMoXCJJbmZvXCIpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJJbmZvQ2xhc3MgZXh0ZW5kcyBEYXRhQ2VudGVyXHJcbntcclxuICAgIGNob2ljZXM6W10gPSBbXVxyXG4gICAgdmVyc2lvbjpzdHJpbmcgPSBcIjZcIjtcclxuICAgIC8vIHJldDogMDpkaXJlY3RseS1nZXQgMTpzaGFyZSAyOnZpZGVvXHJcbiAgICBnZXRDaG9pY2Uoc2xvdElkKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNob2ljZXNbc2xvdElkXSB8fCAwO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKVxyXG4gICAge1xyXG4gICAgICAgIFBsYXRmb3JtLmNvbmZpZ0dldFNpZ25hbC5vbih0aGlzLm9uR2V0Q29uZmlnLHRoaXMpO1xyXG4gICAgICAgIFBsYXRmb3JtLnJlcXVlc3RTZXJ2ZXJDb25maWdzKFwidF9nYW1lc1wiLHRoaXMub25HZXRHYW1lcyx0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIG9uR2V0R2FtZXMoZGF0YSlcclxuICAgIHtcclxuICAgICAgICBNb3JlR2FtZU1hbmFnZXIuaW5zdGFuY2UuYWRkTGlzdChkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkdldENvbmZpZyhkYXRhKVxyXG4gICAge1xyXG4gICAgICAgIGlmKGRhdGEpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgcmVjb3JkID0gZGF0YVswXVxyXG4gICAgICAgICAgICBpZihyZWNvcmQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hvaWNlcyA9IEpTT04ucGFyc2UocmVjb3JkW3RoaXMudmVyc2lvbl0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IFxyXG4gICAgICAgIFBsYXRmb3JtLmluaXRCYW5uZXJBZCh0aGlzLmdldENob2ljZShDaG9pY2VUeXBlLkJhbm5lckFkUmVmcmVzaCkpXHJcbiAgICB9XHJcblxyXG4gICAgQGZpZWxkKClcclxuICAgIGxldmVsOm51bWJlciA9IDE7XHJcblxyXG4gICAgQGZpZWxkKClcclxuICAgIHNlbGVjdGVkU2tpbjpzdHJpbmcgPSBcIjJcIjtcclxuXHJcbiAgICBAZmllbGQoKVxyXG4gICAgZGFpbHlHZXRUaW1lOm51bWJlciA9ICBuZXcgRGF0ZSgyMDE4LDEsMSkuZ2V0VGltZSgpO1xyXG5cclxuICAgIEBmaWVsZCgpXHJcbiAgICBmcmVlZHJhd1RpbWU6bnVtYmVyID0gdGhpcy5kYWlseUdldFRpbWU7XHJcblxyXG4gICAgQGZpZWxkKClcclxuICAgIGx1Y2t5VmlkZW9XYXRjaFRpbWU6bnVtYmVyID0gdGhpcy5kYWlseUdldFRpbWVcclxuXHJcbiAgICBAZmllbGQoKVxyXG4gICAgc2hvcEZyZWVEaWFtb25kVGltZTpudW1iZXIgPSB0aGlzLmRhaWx5R2V0VGltZTtcclxuXHJcbiAgICBAZmllbGQoKVxyXG4gICAgZGlhbW9uZDpudW1iZXIgPSAwO1xyXG5cclxuICAgIEBmaWVsZCgpXHJcbiAgICBzZnhfZW5hYmxlZDpib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBAZmllbGQoKVxyXG4gICAgZmlyc3RUaW1lUmVhY2g6Ym9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIEBmaWVsZCgpXHJcbiAgICBsdWNreVZpZGVvV2F0Y2hDb3VudDpudW1iZXIgPSAwO1xyXG4gICAgdGltZVBhc3NlZDogbnVtYmVyID0gMDtcclxuICAgIHN0ZXBVc2VkOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIGFkZERpYW1vbmQoZCxiID0gdHJ1ZSlcclxuICAgIHtcclxuICAgICAgICBpZih0eXBlb2YoZCkgPT0gXCJudW1iZXJcIikgdGhpcy5kaWFtb25kICs9IGQ7XHJcbiAgICAgICAgZWxzZSB0aGlzLmRpYW1vbmQgKz0gcGFyc2VJbnQoZCk7XHJcbiAgICAgICAgaWYoYilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFRvYXN0Lm1ha2UoXCLojrflvpfpkrvnn7MgeFwiICsgZClcclxuICAgICAgICAgICAgRGV2aWNlLnBsYXlFZmZlY3QoUi5hdWRpb19nZXRfZGlhbW9uZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCF0aGlzLmZpcnN0VGltZVJlYWNoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYodGhpcy5kaWFtb25kID49IDUwMClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgVG9hc3QubWFrZShcIuWTh+WPr+S7peS5sOearuiCpOS6hu+8jOW/q+WOu+earuiCpOWVhuW6l+eci+eci+WQpyFcIiwyKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5maXJzdFRpbWVSZWFjaCA9IHRydWVcclxuICAgICAgICAgICAgICAgIFVzZXJJbmZvLnNhdmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjdXJyZW50TGV2ZWw6bnVtYmVyID0gMTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnVubG9jayh0aGlzLnNlbGVjdGVkU2tpbik7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLnNhdmUoKTtcclxuICAgICAgICB9LCA2MCAqIDEwMDApXHJcbiAgICAgICAgLy8gb25leGl0IGdhbWUgPT5zYXZlXHJcbiAgICB9XHJcblxyXG4gICAgaXNVbmxvY2soc2tpbl9pZClcclxuICAgIHtcclxuICAgICAgICBsZXQgY2FyVW5sb2NrZWQgPSAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1bmxvY2tlZF9cIitza2luX2lkKTtcclxuICAgICAgICBpZighY2FyVW5sb2NrZWQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9ZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNhclVubG9ja2VkID09IFwiMVwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlzQWxsVW5sb2NrZWQoKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBjID0gMDtcclxuICAgICAgICBmb3IodmFyIGkgPSAwIDtpIDxSLnNraW5Db25maWcuanNvbi5sZW5ndGg7aSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIHYgPSBSLnNraW5Db25maWcuanNvbltpXVxyXG4gICAgICAgICAgICBpZihVc2VySW5mby5pc1VubG9jayh2LmlkKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYyArK1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSAgIFxyXG4gICAgICAgIHJldHVybiBjID09IFIuc2tpbkNvbmZpZy5qc29uLmxlbmd0aFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBnZXRTa2luQnlJZChpZDogYW55KTogYW55IHtcclxuICAgICAgICBsZXQgcmVzID0gUi5za2luQ29uZmlnLmpzb24uZmlsdGVyKHY9PntyZXR1cm4gdi5pZCA9PSBpZH0pO1xyXG4gICAgICAgIHJldHVybiByZXNbMF1cclxuICAgIH1cclxuXHJcblxyXG4gICAgdW5sb2NrKHNraW5faWQpXHJcbiAgICB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1bmxvY2tlZF9cIitza2luX2lkICwgXCIxXCIpXHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCB2YXIgVXNlckluZm86VXNlckluZm9DbGFzcyA9IERhdGFDZW50ZXIucmVnaXN0ZXIoVXNlckluZm9DbGFzcykiXX0=