
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/ui/HbDialog.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ec5aa26/dhLhpV83mVeVmkA', 'HbDialog');
// Game/Scripts/ui/HbDialog.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Platform_1 = require("../../../framework/Platform");
var ViewManager_1 = require("../../../framework/plugin_boosts/ui/ViewManager");
var ToastManager_1 = require("../../../framework/plugin_boosts/ui/ToastManager");
var Res_1 = require("../hex-lines-game/Res");
var Info_1 = require("../Info");
var Device_1 = require("../../../framework/plugin_boosts/gamesys/Device");
var View_1 = require("../../../framework/plugin_boosts/ui/View");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var HbDialog = /** @class */ (function (_super) {
    __extends(HbDialog, _super);
    function HbDialog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HbDialog.prototype.onLoad = function () { };
    HbDialog.prototype.start = function () { };
    HbDialog.prototype.click = function () {
        var choise = Info_1.UserInfo.getChoice(Info_1.ChoiceType.HB);
        if (choise == 1) {
            Platform_1.default.share(this.share_suc, this);
        }
        else {
            Platform_1.default.watch_video(this.share_suc, this);
        }
    };
    HbDialog.prototype.share_suc = function () {
        var cfg = Res_1.R.skinConfig.json[3];
        ToastManager_1.Toast.make("恭喜获得皮肤 ：" + cfg.text);
        Device_1.default.playEffect(Res_1.R.audio_unlock);
        Info_1.UserInfo.unlock(cfg.id);
        Info_1.UserInfo.selectedSkin = cfg.id;
        Info_1.UserInfo.save();
        ViewManager_1.default.instance.show("Game/ShopDialog");
        this.getComponent(View_1.default).hide();
    };
    HbDialog = __decorate([
        ccclass
    ], HbDialog);
    return HbDialog;
}(cc.Component));
exports.default = HbDialog;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcdWlcXEhiRGlhbG9nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3REFBbUQ7QUFFbkQsK0VBQTBFO0FBQzFFLGlGQUF5RTtBQUN6RSw2Q0FBMEM7QUFDMUMsZ0NBQStDO0FBQy9DLDBFQUFxRTtBQUNyRSxpRUFBNEQ7QUFFdEQsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7O0lBMkJBLENBQUM7SUF6QkcseUJBQU0sR0FBTixjQUFXLENBQUM7SUFDWix3QkFBSyxHQUFMLGNBQVUsQ0FBQztJQUNYLHdCQUFLLEdBQUw7UUFFSSxJQUFJLE1BQU0sR0FBRyxlQUFRLENBQUMsU0FBUyxDQUFDLGlCQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDL0MsSUFBRyxNQUFNLElBQUksQ0FBQyxFQUNkO1lBQ0ksa0JBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBQyxJQUFJLENBQUMsQ0FBQTtTQUN0QzthQUFLO1lBQ0Ysa0JBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBQyxJQUFJLENBQUMsQ0FBQztTQUM3QztJQUVMLENBQUM7SUFFRCw0QkFBUyxHQUFUO1FBRUksSUFBSSxHQUFHLEdBQUcsT0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDOUIsb0JBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNqQyxnQkFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFDLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDbEMsZUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDeEIsZUFBUSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUMsRUFBRSxDQUFDO1FBQy9CLGVBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNoQixxQkFBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtRQUM1QyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ25DLENBQUM7SUExQmdCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0EyQjVCO0lBQUQsZUFBQztDQTNCRCxBQTJCQyxDQTNCcUMsRUFBRSxDQUFDLFNBQVMsR0EyQmpEO2tCQTNCb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQbGF0Zm9ybSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL1BsYXRmb3JtXCI7XHJcbmltcG9ydCBMdWNreURpYWxvZyBmcm9tIFwiLi9MdWNreURpYWxvZ1wiO1xyXG5pbXBvcnQgVmlld01hbmFnZXIgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9wbHVnaW5fYm9vc3RzL3VpL1ZpZXdNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IFRvYXN0IH0gZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9wbHVnaW5fYm9vc3RzL3VpL1RvYXN0TWFuYWdlclwiO1xyXG5pbXBvcnQgeyBSIH0gZnJvbSBcIi4uL2hleC1saW5lcy1nYW1lL1Jlc1wiO1xyXG5pbXBvcnQgeyBVc2VySW5mbywgQ2hvaWNlVHlwZSB9IGZyb20gXCIuLi9JbmZvXCI7XHJcbmltcG9ydCBEZXZpY2UgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9wbHVnaW5fYm9vc3RzL2dhbWVzeXMvRGV2aWNlXCI7XHJcbmltcG9ydCBWaWV3IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvcGx1Z2luX2Jvb3N0cy91aS9WaWV3XCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhiRGlhbG9nIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBvbkxvYWQgKCkge31cclxuICAgIHN0YXJ0ICgpIHt9XHJcbiAgICBjbGljaygpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGNob2lzZSA9IFVzZXJJbmZvLmdldENob2ljZShDaG9pY2VUeXBlLkhCKTtcclxuICAgICAgICBpZihjaG9pc2UgPT0gMSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFBsYXRmb3JtLnNoYXJlKHRoaXMuc2hhcmVfc3VjLHRoaXMpXHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICBQbGF0Zm9ybS53YXRjaF92aWRlbyh0aGlzLnNoYXJlX3N1Yyx0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgc2hhcmVfc3VjKClcclxuICAgIHtcclxuICAgICAgICBsZXQgY2ZnID0gUi5za2luQ29uZmlnLmpzb25bM11cclxuICAgICAgICBUb2FzdC5tYWtlKFwi5oGt5Zac6I635b6X55qu6IKkIO+8mlwiICsgY2ZnLnRleHQpIFxyXG4gICAgICAgIERldmljZS5wbGF5RWZmZWN0KFIuYXVkaW9fdW5sb2NrKTtcclxuICAgICAgICBVc2VySW5mby51bmxvY2soY2ZnLmlkKTtcclxuICAgICAgICBVc2VySW5mby5zZWxlY3RlZFNraW4gPSBjZmcuaWQ7XHJcbiAgICAgICAgVXNlckluZm8uc2F2ZSgpO1xyXG4gICAgICAgIFZpZXdNYW5hZ2VyLmluc3RhbmNlLnNob3coXCJHYW1lL1Nob3BEaWFsb2dcIilcclxuICAgICAgICB0aGlzLmdldENvbXBvbmVudChWaWV3KS5oaWRlKCk7XHJcbiAgICB9XHJcbn0iXX0=