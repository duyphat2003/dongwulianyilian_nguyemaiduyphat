
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/ui/ShopDialog.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1b7cbT64WtHxpoRfvlVr4EN', 'ShopDialog');
// Game/Scripts/ui/ShopDialog.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ShopItemTemplate_1 = require("./ShopItemTemplate");
var SpriteFrameCache_1 = require("../../../framework/plugin_boosts/misc/SpriteFrameCache");
var Res_1 = require("../hex-lines-game/Res");
var Platform_1 = require("../../../framework/Platform");
var Info_1 = require("../Info");
var ToastManager_1 = require("../../../framework/plugin_boosts/ui/ToastManager");
var UIFunctions_1 = require("../../../framework/plugin_boosts/ui/UIFunctions");
var Device_1 = require("../../../framework/plugin_boosts/gamesys/Device");
var Main_1 = require("../Main");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ShopDialog = /** @class */ (function (_super) {
    __extends(ShopDialog, _super);
    function ShopDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.scrollView = null;
        _this.freeDiamondLabel = null;
        _this.freeDiamondBtn = null;
        return _this;
    }
    ShopDialog.prototype.onLoad = function () {
        // this.scrollview
    };
    ShopDialog.prototype.onShown = function () {
        var _this = this;
        // {"id":"1","mini_img":"a1","img":"a2","cost":"100"},
        this.scrollview.showlist(function (node, data, i) {
            // console.log(i,data);
            var item = node.getComponent(ShopItemTemplate_1.default);
            item.data = data;
            item.diamondLabel.string = data.cost;
            var isLocked = !Info_1.UserInfo.isUnlock(data.id);
            item.btnBuyNode.active = isLocked;
            item.maskNode.active = isLocked;
            item.borderNode.color = cc.Color.WHITE;
            item.titleLabel.string = data.text;
            item.selectedFlag.active = Info_1.UserInfo.selectedSkin == data.id;
            item.btnSignal.add(_this.click_unlock, _this);
            SpriteFrameCache_1.default.instance.getSpriteFrame("Game/Textures/ThumbBgs/" + data.mini_img + ".jpg").then(function (sf) { return item.bgmini.spriteFrame = sf; });
        }, Res_1.R.skinConfig.json);
        this.refreshBtnStatus();
    };
    ShopDialog.prototype.refreshBtnStatus = function () {
        if (g.isNextDay(Info_1.UserInfo.shopFreeDiamondTime)) {
            this.freeDiamondLabel.string = "免费得50";
            UIFunctions_1.default.setButtonEnabled(this.freeDiamondBtn, true);
        }
        else {
            this.freeDiamondLabel.string = "已领取";
            UIFunctions_1.default.setButtonEnabled(this.freeDiamondBtn, false);
        }
    };
    ShopDialog.prototype.click_close = function () {
    };
    ShopDialog.prototype.share_succ = function () {
        Info_1.UserInfo.addDiamond(50);
        Info_1.UserInfo.shopFreeDiamondTime = new Date().getTime();
        Info_1.UserInfo.save();
        this.refreshBtnStatus();
    };
    ShopDialog.prototype.click_free = function () {
        var choice = Info_1.UserInfo.getChoice(Info_1.ChoiceType.Shop);
        if (choice == 1) {
            Platform_1.default.share(this.share_succ, this);
        }
        else if (choice == 0) {
            this.share_succ();
        }
        else {
            //video
            Platform_1.default.watch_video(this.share_succ, this);
        }
    };
    ShopDialog.prototype.selectBg = function (data) {
        Info_1.UserInfo.selectedSkin = data.id;
        Info_1.UserInfo.save();
        this.onShown();
    };
    ShopDialog.prototype.click_unlock = function (data) {
        if (Info_1.UserInfo.isUnlock(data.id)) {
            //select 
            this.selectBg(data);
            ToastManager_1.Toast.make("已选择 " + data.text);
            return;
        }
        if (Info_1.UserInfo.diamond >= data.cost) {
            Info_1.UserInfo.diamond -= data.cost;
            Info_1.UserInfo.unlock(data.id);
            this.selectBg(data);
            ToastManager_1.Toast.make(cc.js.formatStr("%s已解锁", data.text));
            Device_1.default.playEffect(Res_1.R.audio_unlock);
            if (Main_1.default.instance)
                Main_1.default.instance.refreshRedpoints();
        }
        else {
            ToastManager_1.Toast.make("钻石不足");
            Device_1.default.playEffect(Res_1.R.audio_invalid);
        }
    };
    __decorate([
        property(cc.ScrollView)
    ], ShopDialog.prototype, "scrollView", void 0);
    __decorate([
        property(cc.Label)
    ], ShopDialog.prototype, "freeDiamondLabel", void 0);
    __decorate([
        property(cc.Button)
    ], ShopDialog.prototype, "freeDiamondBtn", void 0);
    ShopDialog = __decorate([
        ccclass
    ], ShopDialog);
    return ShopDialog;
}(cc.Component));
exports.default = ShopDialog;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcdWlcXFNob3BEaWFsb2cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVEQUFrRDtBQUNsRCwyRkFBc0Y7QUFDdEYsNkNBQTBDO0FBQzFDLHdEQUFtRDtBQUNuRCxnQ0FBK0M7QUFDL0MsaUZBQXlFO0FBQ3pFLCtFQUEwRTtBQUMxRSwwRUFBcUU7QUFDckUsZ0NBQTJCO0FBR3JCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXdDLDhCQUFZO0lBQXBEO1FBQUEscUVBZ0dDO1FBN0ZHLGdCQUFVLEdBQWtCLElBQUksQ0FBQztRQUdqQyxzQkFBZ0IsR0FBYSxJQUFJLENBQUM7UUFHbEMsb0JBQWMsR0FBYyxJQUFJLENBQUM7O0lBdUZyQyxDQUFDO0lBckZHLDJCQUFNLEdBQU47UUFDSSxrQkFBa0I7SUFDdEIsQ0FBQztJQUdELDRCQUFPLEdBQVA7UUFBQSxpQkFrQkM7UUFqQkcsc0RBQXNEO1FBQ3RELElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFVBQUMsSUFBYSxFQUFFLElBQVMsRUFBRSxDQUFTO1lBQ3pELHVCQUF1QjtZQUN2QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLDBCQUFnQixDQUFDLENBQUM7WUFDL0MsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDakIsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUNyQyxJQUFJLFFBQVEsR0FBRyxDQUFDLGVBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQTtZQUNqQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUM7WUFD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QUFJLENBQUMsSUFBSSxFQUFFO1lBQy9CLGVBQVEsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQztZQUM5QixlQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ25CLG9CQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtZQUMvQyxnQkFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFDLENBQUMsWUFBWSxDQUFDLENBQUE7WUFDakMsSUFBSSxjQUFJLENBQUMsUUFBUTtnQkFDYixjQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFLENBQUE7U0FDdkM7YUFBTTtZQUNILG9CQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBQ2xCLGdCQUFNLENBQUMsVUFBVSxDQUFDLE9BQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQTtTQUNyQztJQUNMLENBQUM7SUEzRkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQztrREFDUztJQUdqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3dEQUNlO0lBR2xDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7c0RBQ2E7SUFUaEIsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQWdHOUI7SUFBRCxpQkFBQztDQWhHRCxBQWdHQyxDQWhHdUMsRUFBRSxDQUFDLFNBQVMsR0FnR25EO2tCQWhHb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTaG9wSXRlbVRlbXBsYXRlIGZyb20gXCIuL1Nob3BJdGVtVGVtcGxhdGVcIjtcclxuaW1wb3J0IFNwcml0ZUZyYW1lQ2FjaGUgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9wbHVnaW5fYm9vc3RzL21pc2MvU3ByaXRlRnJhbWVDYWNoZVwiO1xyXG5pbXBvcnQgeyBSIH0gZnJvbSBcIi4uL2hleC1saW5lcy1nYW1lL1Jlc1wiO1xyXG5pbXBvcnQgUGxhdGZvcm0gZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9QbGF0Zm9ybVwiO1xyXG5pbXBvcnQgeyBVc2VySW5mbywgQ2hvaWNlVHlwZSB9IGZyb20gXCIuLi9JbmZvXCI7XHJcbmltcG9ydCB7IFRvYXN0IH0gZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9wbHVnaW5fYm9vc3RzL3VpL1RvYXN0TWFuYWdlclwiO1xyXG5pbXBvcnQgVUlGdW5jdGlvbnMgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9wbHVnaW5fYm9vc3RzL3VpL1VJRnVuY3Rpb25zXCI7XHJcbmltcG9ydCBEZXZpY2UgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9wbHVnaW5fYm9vc3RzL2dhbWVzeXMvRGV2aWNlXCI7XHJcbmltcG9ydCBNYWluIGZyb20gXCIuLi9NYWluXCI7XHJcbmltcG9ydCBMYW5ndWFnZU1hbmFnZXIsIHsgTGFuZ3VhZ2VNb2RlIH0gZnJvbSBcIi4uL0xhbmd1YWdlTWFuYWdlclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNob3BEaWFsb2cgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TY3JvbGxWaWV3KVxyXG4gICAgc2Nyb2xsVmlldzogY2MuU2Nyb2xsVmlldyA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgZnJlZURpYW1vbmRMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBmcmVlRGlhbW9uZEJ0bjogY2MuQnV0dG9uID0gbnVsbDtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5zY3JvbGx2aWV3XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG9uU2hvd24oKSB7XHJcbiAgICAgICAgLy8ge1wiaWRcIjpcIjFcIixcIm1pbmlfaW1nXCI6XCJhMVwiLFwiaW1nXCI6XCJhMlwiLFwiY29zdFwiOlwiMTAwXCJ9LFxyXG4gICAgICAgIHRoaXMuc2Nyb2xsdmlldy5zaG93bGlzdCgobm9kZTogY2MuTm9kZSwgZGF0YTogYW55LCBpOiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaSxkYXRhKTtcclxuICAgICAgICAgICAgbGV0IGl0ZW0gPSBub2RlLmdldENvbXBvbmVudChTaG9wSXRlbVRlbXBsYXRlKTtcclxuICAgICAgICAgICAgaXRlbS5kYXRhID0gZGF0YTtcclxuICAgICAgICAgICAgaXRlbS5kaWFtb25kTGFiZWwuc3RyaW5nID0gZGF0YS5jb3N0O1xyXG4gICAgICAgICAgICBsZXQgaXNMb2NrZWQgPSAhVXNlckluZm8uaXNVbmxvY2soZGF0YS5pZCk7XHJcbiAgICAgICAgICAgIGl0ZW0uYnRuQnV5Tm9kZS5hY3RpdmUgPSBpc0xvY2tlZFxyXG4gICAgICAgICAgICBpdGVtLm1hc2tOb2RlLmFjdGl2ZSA9IGlzTG9ja2VkO1xyXG4gICAgICAgICAgICBpdGVtLmJvcmRlck5vZGUuY29sb3IgPSBjYy5Db2xvci5XSElURTtcclxuICAgICAgICAgICAgaXRlbS50aXRsZUxhYmVsLnN0cmluZyA9IGRhdGEudGV4dDtcclxuICAgICAgICAgICAgaXRlbS5zZWxlY3RlZEZsYWcuYWN0aXZlID0gVXNlckluZm8uc2VsZWN0ZWRTa2luID09IGRhdGEuaWQ7XHJcbiAgICAgICAgICAgIGl0ZW0uYnRuU2lnbmFsLmFkZCh0aGlzLmNsaWNrX3VubG9jaywgdGhpcylcclxuICAgICAgICAgICAgU3ByaXRlRnJhbWVDYWNoZS5pbnN0YW5jZS5nZXRTcHJpdGVGcmFtZShcIkdhbWUvVGV4dHVyZXMvVGh1bWJCZ3MvXCIgKyBkYXRhLm1pbmlfaW1nICsgXCIuanBnXCIpLnRoZW4oc2YgPT4gaXRlbS5iZ21pbmkuc3ByaXRlRnJhbWUgPSBzZilcclxuICAgICAgICB9LCBSLnNraW5Db25maWcuanNvbilcclxuXHJcbiAgICAgICAgdGhpcy5yZWZyZXNoQnRuU3RhdHVzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVmcmVzaEJ0blN0YXR1cygpIHtcclxuICAgICAgICBpZiAoZy5pc05leHREYXkoVXNlckluZm8uc2hvcEZyZWVEaWFtb25kVGltZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5mcmVlRGlhbW9uZExhYmVsLnN0cmluZyA9IFwi5YWN6LS55b6XNTBcIlxyXG4gICAgICAgICAgICBVSUZ1bmN0aW9ucy5zZXRCdXR0b25FbmFibGVkKHRoaXMuZnJlZURpYW1vbmRCdG4sIHRydWUpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5mcmVlRGlhbW9uZExhYmVsLnN0cmluZyA9IFwi5bey6aKG5Y+WXCJcclxuICAgICAgICAgICAgVUlGdW5jdGlvbnMuc2V0QnV0dG9uRW5hYmxlZCh0aGlzLmZyZWVEaWFtb25kQnRuLCBmYWxzZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2xpY2tfY2xvc2UoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNoYXJlX3N1Y2MoKSB7XHJcbiAgICAgICAgVXNlckluZm8uYWRkRGlhbW9uZCg1MCk7XHJcbiAgICAgICAgVXNlckluZm8uc2hvcEZyZWVEaWFtb25kVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgIFVzZXJJbmZvLnNhdmUoKVxyXG4gICAgICAgIHRoaXMucmVmcmVzaEJ0blN0YXR1cygpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsaWNrX2ZyZWUoKSB7XHJcbiAgICAgICAgbGV0IGNob2ljZSA9IFVzZXJJbmZvLmdldENob2ljZShDaG9pY2VUeXBlLlNob3ApXHJcbiAgICAgICAgaWYgKGNob2ljZSA9PSAxKSB7XHJcbiAgICAgICAgICAgIFBsYXRmb3JtLnNoYXJlKHRoaXMuc2hhcmVfc3VjYywgdGhpcylcclxuICAgICAgICB9IGVsc2UgaWYgKGNob2ljZSA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hhcmVfc3VjYygpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy92aWRlb1xyXG4gICAgICAgICAgICBQbGF0Zm9ybS53YXRjaF92aWRlbyh0aGlzLnNoYXJlX3N1Y2MsIHRoaXMpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdEJnKGRhdGEpIHtcclxuICAgICAgICBVc2VySW5mby5zZWxlY3RlZFNraW4gPSBkYXRhLmlkO1xyXG4gICAgICAgIFVzZXJJbmZvLnNhdmUoKVxyXG4gICAgICAgIHRoaXMub25TaG93bigpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsaWNrX3VubG9jayhkYXRhKSB7XHJcbiAgICAgICAgaWYgKFVzZXJJbmZvLmlzVW5sb2NrKGRhdGEuaWQpKSB7XHJcbiAgICAgICAgICAgIC8vc2VsZWN0IFxyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdEJnKGRhdGEpO1xyXG4gICAgICAgICAgICBUb2FzdC5tYWtlKFwi5bey6YCJ5oupIFwiICsgZGF0YS50ZXh0KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChVc2VySW5mby5kaWFtb25kID49IGRhdGEuY29zdCkge1xyXG4gICAgICAgICAgICBVc2VySW5mby5kaWFtb25kIC09IGRhdGEuY29zdDtcclxuICAgICAgICAgICAgVXNlckluZm8udW5sb2NrKGRhdGEuaWQpO1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdEJnKGRhdGEpXHJcbiAgICAgICAgICAgIFRvYXN0Lm1ha2UoY2MuanMuZm9ybWF0U3RyKFwiJXPlt7Lop6PplIFcIiwgZGF0YS50ZXh0KSlcclxuICAgICAgICAgICAgRGV2aWNlLnBsYXlFZmZlY3QoUi5hdWRpb191bmxvY2spXHJcbiAgICAgICAgICAgIGlmIChNYWluLmluc3RhbmNlKVxyXG4gICAgICAgICAgICAgICAgTWFpbi5pbnN0YW5jZS5yZWZyZXNoUmVkcG9pbnRzKClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBUb2FzdC5tYWtlKFwi6ZK755+z5LiN6LazXCIpXHJcbiAgICAgICAgICAgIERldmljZS5wbGF5RWZmZWN0KFIuYXVkaW9faW52YWxpZClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==