
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcdWlcXFNob3BEaWFsb2cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVEQUFrRDtBQUNsRCwyRkFBc0Y7QUFDdEYsNkNBQTBDO0FBQzFDLHdEQUFtRDtBQUNuRCxnQ0FBK0M7QUFDL0MsaUZBQXlFO0FBQ3pFLCtFQUEwRTtBQUMxRSwwRUFBcUU7QUFDckUsZ0NBQTJCO0FBR3JCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXdDLDhCQUFZO0lBQXBEO1FBQUEscUVBZ0dDO1FBN0ZHLGdCQUFVLEdBQWtCLElBQUksQ0FBQztRQUdqQyxzQkFBZ0IsR0FBYSxJQUFJLENBQUM7UUFHbEMsb0JBQWMsR0FBYyxJQUFJLENBQUM7O0lBdUZyQyxDQUFDO0lBckZHLDJCQUFNLEdBQU47UUFDSSxrQkFBa0I7SUFDdEIsQ0FBQztJQUdELDRCQUFPLEdBQVA7UUFBQSxpQkFrQkM7UUFqQkcsc0RBQXNEO1FBQ3RELElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFVBQUMsSUFBYSxFQUFFLElBQVMsRUFBRSxDQUFTO1lBQ3pELHVCQUF1QjtZQUN2QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLDBCQUFnQixDQUFDLENBQUM7WUFDL0MsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDakIsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUNyQyxJQUFJLFFBQVEsR0FBRyxDQUFDLGVBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQTtZQUNqQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUM7WUFD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QUFJLENBQUMsSUFBSSxFQUFFO1lBQy9CLGVBQVEsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQztZQUM5QixlQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ25CLG9CQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtZQUMvQyxnQkFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFDLENBQUMsWUFBWSxDQUFDLENBQUE7WUFDakMsSUFBSSxjQUFJLENBQUMsUUFBUTtnQkFDYixjQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFLENBQUE7U0FDdkM7YUFBTTtZQUNILG9CQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBQ2xCLGdCQUFNLENBQUMsVUFBVSxDQUFDLE9BQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQTtTQUNyQztJQUNMLENBQUM7SUEzRkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQztrREFDUztJQUdqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3dEQUNlO0lBR2xDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7c0RBQ2E7SUFUaEIsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQWdHOUI7SUFBRCxpQkFBQztDQWhHRCxBQWdHQyxDQWhHdUMsRUFBRSxDQUFDLFNBQVMsR0FnR25EO2tCQWhHb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTaG9wSXRlbVRlbXBsYXRlIGZyb20gXCIuL1Nob3BJdGVtVGVtcGxhdGVcIjtcbmltcG9ydCBTcHJpdGVGcmFtZUNhY2hlIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvcGx1Z2luX2Jvb3N0cy9taXNjL1Nwcml0ZUZyYW1lQ2FjaGVcIjtcbmltcG9ydCB7IFIgfSBmcm9tIFwiLi4vaGV4LWxpbmVzLWdhbWUvUmVzXCI7XG5pbXBvcnQgUGxhdGZvcm0gZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9QbGF0Zm9ybVwiO1xuaW1wb3J0IHsgVXNlckluZm8sIENob2ljZVR5cGUgfSBmcm9tIFwiLi4vSW5mb1wiO1xuaW1wb3J0IHsgVG9hc3QgfSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3BsdWdpbl9ib29zdHMvdWkvVG9hc3RNYW5hZ2VyXCI7XG5pbXBvcnQgVUlGdW5jdGlvbnMgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9wbHVnaW5fYm9vc3RzL3VpL1VJRnVuY3Rpb25zXCI7XG5pbXBvcnQgRGV2aWNlIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvcGx1Z2luX2Jvb3N0cy9nYW1lc3lzL0RldmljZVwiO1xuaW1wb3J0IE1haW4gZnJvbSBcIi4uL01haW5cIjtcbmltcG9ydCBMYW5ndWFnZU1hbmFnZXIsIHsgTGFuZ3VhZ2VNb2RlIH0gZnJvbSBcIi4uL0xhbmd1YWdlTWFuYWdlclwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hvcERpYWxvZyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuU2Nyb2xsVmlldylcbiAgICBzY3JvbGxWaWV3OiBjYy5TY3JvbGxWaWV3ID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBmcmVlRGlhbW9uZExhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAgIGZyZWVEaWFtb25kQnRuOiBjYy5CdXR0b24gPSBudWxsO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICAvLyB0aGlzLnNjcm9sbHZpZXdcbiAgICB9XG5cblxuICAgIG9uU2hvd24oKSB7XG4gICAgICAgIC8vIHtcImlkXCI6XCIxXCIsXCJtaW5pX2ltZ1wiOlwiYTFcIixcImltZ1wiOlwiYTJcIixcImNvc3RcIjpcIjEwMFwifSxcbiAgICAgICAgdGhpcy5zY3JvbGx2aWV3LnNob3dsaXN0KChub2RlOiBjYy5Ob2RlLCBkYXRhOiBhbnksIGk6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaSxkYXRhKTtcbiAgICAgICAgICAgIGxldCBpdGVtID0gbm9kZS5nZXRDb21wb25lbnQoU2hvcEl0ZW1UZW1wbGF0ZSk7XG4gICAgICAgICAgICBpdGVtLmRhdGEgPSBkYXRhO1xuICAgICAgICAgICAgaXRlbS5kaWFtb25kTGFiZWwuc3RyaW5nID0gZGF0YS5jb3N0O1xuICAgICAgICAgICAgbGV0IGlzTG9ja2VkID0gIVVzZXJJbmZvLmlzVW5sb2NrKGRhdGEuaWQpO1xuICAgICAgICAgICAgaXRlbS5idG5CdXlOb2RlLmFjdGl2ZSA9IGlzTG9ja2VkXG4gICAgICAgICAgICBpdGVtLm1hc2tOb2RlLmFjdGl2ZSA9IGlzTG9ja2VkO1xuICAgICAgICAgICAgaXRlbS5ib3JkZXJOb2RlLmNvbG9yID0gY2MuQ29sb3IuV0hJVEU7XG4gICAgICAgICAgICBpdGVtLnRpdGxlTGFiZWwuc3RyaW5nID0gZGF0YS50ZXh0O1xuICAgICAgICAgICAgaXRlbS5zZWxlY3RlZEZsYWcuYWN0aXZlID0gVXNlckluZm8uc2VsZWN0ZWRTa2luID09IGRhdGEuaWQ7XG4gICAgICAgICAgICBpdGVtLmJ0blNpZ25hbC5hZGQodGhpcy5jbGlja191bmxvY2ssIHRoaXMpXG4gICAgICAgICAgICBTcHJpdGVGcmFtZUNhY2hlLmluc3RhbmNlLmdldFNwcml0ZUZyYW1lKFwiR2FtZS9UZXh0dXJlcy9UaHVtYkJncy9cIiArIGRhdGEubWluaV9pbWcgKyBcIi5qcGdcIikudGhlbihzZiA9PiBpdGVtLmJnbWluaS5zcHJpdGVGcmFtZSA9IHNmKVxuICAgICAgICB9LCBSLnNraW5Db25maWcuanNvbilcblxuICAgICAgICB0aGlzLnJlZnJlc2hCdG5TdGF0dXMoKTtcbiAgICB9XG5cbiAgICByZWZyZXNoQnRuU3RhdHVzKCkge1xuICAgICAgICBpZiAoZy5pc05leHREYXkoVXNlckluZm8uc2hvcEZyZWVEaWFtb25kVGltZSkpIHtcbiAgICAgICAgICAgIHRoaXMuZnJlZURpYW1vbmRMYWJlbC5zdHJpbmcgPSBcIuWFjei0ueW+lzUwXCJcbiAgICAgICAgICAgIFVJRnVuY3Rpb25zLnNldEJ1dHRvbkVuYWJsZWQodGhpcy5mcmVlRGlhbW9uZEJ0biwgdHJ1ZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZnJlZURpYW1vbmRMYWJlbC5zdHJpbmcgPSBcIuW3sumihuWPllwiXG4gICAgICAgICAgICBVSUZ1bmN0aW9ucy5zZXRCdXR0b25FbmFibGVkKHRoaXMuZnJlZURpYW1vbmRCdG4sIGZhbHNlKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xpY2tfY2xvc2UoKSB7XG5cbiAgICB9XG5cbiAgICBzaGFyZV9zdWNjKCkge1xuICAgICAgICBVc2VySW5mby5hZGREaWFtb25kKDUwKTtcbiAgICAgICAgVXNlckluZm8uc2hvcEZyZWVEaWFtb25kVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICBVc2VySW5mby5zYXZlKClcbiAgICAgICAgdGhpcy5yZWZyZXNoQnRuU3RhdHVzKCk7XG4gICAgfVxuXG4gICAgY2xpY2tfZnJlZSgpIHtcbiAgICAgICAgbGV0IGNob2ljZSA9IFVzZXJJbmZvLmdldENob2ljZShDaG9pY2VUeXBlLlNob3ApXG4gICAgICAgIGlmIChjaG9pY2UgPT0gMSkge1xuICAgICAgICAgICAgUGxhdGZvcm0uc2hhcmUodGhpcy5zaGFyZV9zdWNjLCB0aGlzKVxuICAgICAgICB9IGVsc2UgaWYgKGNob2ljZSA9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnNoYXJlX3N1Y2MoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy92aWRlb1xuICAgICAgICAgICAgUGxhdGZvcm0ud2F0Y2hfdmlkZW8odGhpcy5zaGFyZV9zdWNjLCB0aGlzKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2VsZWN0QmcoZGF0YSkge1xuICAgICAgICBVc2VySW5mby5zZWxlY3RlZFNraW4gPSBkYXRhLmlkO1xuICAgICAgICBVc2VySW5mby5zYXZlKClcbiAgICAgICAgdGhpcy5vblNob3duKCk7XG4gICAgfVxuXG4gICAgY2xpY2tfdW5sb2NrKGRhdGEpIHtcbiAgICAgICAgaWYgKFVzZXJJbmZvLmlzVW5sb2NrKGRhdGEuaWQpKSB7XG4gICAgICAgICAgICAvL3NlbGVjdCBcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0QmcoZGF0YSk7XG4gICAgICAgICAgICBUb2FzdC5tYWtlKFwi5bey6YCJ5oupIFwiICsgZGF0YS50ZXh0KVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChVc2VySW5mby5kaWFtb25kID49IGRhdGEuY29zdCkge1xuICAgICAgICAgICAgVXNlckluZm8uZGlhbW9uZCAtPSBkYXRhLmNvc3Q7XG4gICAgICAgICAgICBVc2VySW5mby51bmxvY2soZGF0YS5pZCk7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdEJnKGRhdGEpXG4gICAgICAgICAgICBUb2FzdC5tYWtlKGNjLmpzLmZvcm1hdFN0cihcIiVz5bey6Kej6ZSBXCIsIGRhdGEudGV4dCkpXG4gICAgICAgICAgICBEZXZpY2UucGxheUVmZmVjdChSLmF1ZGlvX3VubG9jaylcbiAgICAgICAgICAgIGlmIChNYWluLmluc3RhbmNlKVxuICAgICAgICAgICAgICAgIE1haW4uaW5zdGFuY2UucmVmcmVzaFJlZHBvaW50cygpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBUb2FzdC5tYWtlKFwi6ZK755+z5LiN6LazXCIpXG4gICAgICAgICAgICBEZXZpY2UucGxheUVmZmVjdChSLmF1ZGlvX2ludmFsaWQpXG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiJdfQ==