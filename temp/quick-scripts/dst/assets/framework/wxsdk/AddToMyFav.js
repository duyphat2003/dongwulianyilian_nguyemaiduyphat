
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/wxsdk/AddToMyFav.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b7431S0vqlPiqNKDpwvWLTc', 'AddToMyFav');
// framework/wxsdk/AddToMyFav.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Platform_1 = require("../Platform");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PositionType;
(function (PositionType) {
    PositionType[PositionType["left"] = 0] = "left";
    PositionType[PositionType["bottom"] = 1] = "bottom";
    PositionType[PositionType["auto"] = 2] = "auto";
})(PositionType || (PositionType = {}));
var AddToMyFav = /** @class */ (function (_super) {
    __extends(AddToMyFav, _super);
    function AddToMyFav() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pointer = null;
        _this.posType = PositionType.auto;
        _this.hideAfterSec = 30;
        _this.widget = null;
        return _this;
    }
    AddToMyFav.prototype.onLoad = function () {
        this.widget = this.getComponent(cc.Widget);
    };
    AddToMyFav.prototype.start = function () {
        if (cc.sys.platform == cc.sys.WECHAT_GAME) {
            var options = Platform_1.default.getLaunchOptions();
            console.log("场景值 :", options);
            if (options.scene == 1001 || options.scene == 1089) {
                this.node.active = false;
                return;
            }
        }
        // if(g.isNextDay(UserInfo.showAddFavTime) )
        // {
        //     UserInfo.showAddFavTime = new Date().getTime();
        // }else{
        //     this.node.active = false;
        //     return;
        // }
        if (this.posType == PositionType.auto) {
            var ratio = cc.winSize.height / cc.winSize.width;
            if (ratio > 1.98) {
                this.showStyle2();
            }
            else {
                this.showStyle1();
            }
        }
        else if (this.posType == PositionType.bottom) {
            this.showStyle1();
        }
        else if (this.posType == PositionType.left) {
            this.showStyle2();
        }
        this.scheduleOnce(this.click_hide, this.hideAfterSec);
    };
    AddToMyFav.prototype.click_hide = function () {
        this.node.active = false;
    };
    AddToMyFav.prototype.showStyle1 = function () {
        this.pointer.rotation = 0;
        this.widget.top = 128;
        this.widget.right = 140;
        this.widget.updateAlignment();
    };
    AddToMyFav.prototype.showStyle2 = function () {
        this.pointer.rotation = 90;
        this.widget.top = 40;
        this.widget.right = 300;
        this.widget.updateAlignment();
    };
    __decorate([
        property(cc.Node)
    ], AddToMyFav.prototype, "pointer", void 0);
    __decorate([
        property({ type: cc.Enum(PositionType) })
    ], AddToMyFav.prototype, "posType", void 0);
    __decorate([
        property()
    ], AddToMyFav.prototype, "hideAfterSec", void 0);
    AddToMyFav = __decorate([
        ccclass
    ], AddToMyFav);
    return AddToMyFav;
}(cc.Component));
exports.default = AddToMyFav;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFx3eHNka1xcQWRkVG9NeUZhdi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0Esd0NBQW1DO0FBRTdCLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDLElBQUssWUFLSjtBQUxELFdBQUssWUFBWTtJQUViLCtDQUFJLENBQUE7SUFDSixtREFBTSxDQUFBO0lBQ04sK0NBQUksQ0FBQTtBQUNSLENBQUMsRUFMSSxZQUFZLEtBQVosWUFBWSxRQUtoQjtBQUdEO0lBQXdDLDhCQUFZO0lBQXBEO1FBQUEscUVBNkVDO1FBMUVHLGFBQU8sR0FBVyxJQUFJLENBQUM7UUFHdkIsYUFBTyxHQUFnQixZQUFZLENBQUMsSUFBSSxDQUFDO1FBR3pDLGtCQUFZLEdBQVUsRUFBRSxDQUFDO1FBRXpCLFlBQU0sR0FBYSxJQUFJLENBQUM7O0lBa0U1QixDQUFDO0lBaEVHLDJCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCwwQkFBSyxHQUFMO1FBQ0ksSUFBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFDeEM7WUFDSSxJQUFJLE9BQU8sR0FBRyxrQkFBUSxDQUFDLGdCQUFnQixFQUFFLENBQUE7WUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDOUIsSUFBRyxPQUFPLENBQUMsS0FBSyxJQUFJLElBQUksSUFBSSxPQUFPLENBQUMsS0FBSyxJQUFJLElBQUksRUFDakQ7Z0JBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUN6QixPQUFPO2FBQ1Y7U0FDSjtRQUNELDRDQUE0QztRQUM1QyxJQUFJO1FBQ0osc0RBQXNEO1FBQ3RELFNBQVM7UUFDVCxnQ0FBZ0M7UUFDaEMsY0FBYztRQUNkLElBQUk7UUFDSixJQUFHLElBQUksQ0FBQyxPQUFPLElBQUksWUFBWSxDQUFDLElBQUksRUFDcEM7WUFDSSxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUMvQyxJQUFHLEtBQUssR0FBRyxJQUFJLEVBQ2Y7Z0JBQ0ksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2FBQ3JCO2lCQUFJO2dCQUNELElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzthQUNyQjtTQUNKO2FBQUssSUFBRyxJQUFJLENBQUMsT0FBTyxJQUFJLFlBQVksQ0FBQyxNQUFNLEVBQzVDO1lBQ0ksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO1NBQ3BCO2FBQ0ksSUFBRyxJQUFJLENBQUMsT0FBTyxJQUFJLFlBQVksQ0FBQyxJQUFJLEVBQ3pDO1lBQ0ksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO1NBQ3BCO1FBRUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRUQsK0JBQVUsR0FBVjtRQUVJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBRUQsK0JBQVUsR0FBVjtRQUVJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUE7SUFDakMsQ0FBQztJQUdELCtCQUFVLEdBQVY7UUFFSSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztRQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFBO0lBQ2pDLENBQUM7SUF6RUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDSztJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFDLENBQUM7K0NBQ0U7SUFHekM7UUFEQyxRQUFRLEVBQUU7b0RBQ2M7SUFUUixVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBNkU5QjtJQUFELGlCQUFDO0NBN0VELEFBNkVDLENBN0V1QyxFQUFFLENBQUMsU0FBUyxHQTZFbkQ7a0JBN0VvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVXNlckluZm8gfSBmcm9tIFwiLi4vLi4vR2FtZS9TY3JpcHRzL0luZm9cIjtcclxuaW1wb3J0IFBsYXRmb3JtIGZyb20gXCIuLi9QbGF0Zm9ybVwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5cclxuZW51bSBQb3NpdGlvblR5cGVcclxue1xyXG4gICAgbGVmdCxcclxuICAgIGJvdHRvbSxcclxuICAgIGF1dG8sXHJcbn1cclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFkZFRvTXlGYXYgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcG9pbnRlcjpjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoe3R5cGU6Y2MuRW51bShQb3NpdGlvblR5cGUpfSlcclxuICAgIHBvc1R5cGU6UG9zaXRpb25UeXBlID0gUG9zaXRpb25UeXBlLmF1dG87XHJcblxyXG4gICAgQHByb3BlcnR5KClcclxuICAgIGhpZGVBZnRlclNlYzpudW1iZXIgPSAzMDtcclxuXHJcbiAgICB3aWRnZXQ6Y2MuV2lkZ2V0ID0gbnVsbDtcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIHRoaXMud2lkZ2V0ID0gdGhpcy5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgaWYoY2Muc3lzLnBsYXRmb3JtID09IGNjLnN5cy5XRUNIQVRfR0FNRSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBvcHRpb25zID0gUGxhdGZvcm0uZ2V0TGF1bmNoT3B0aW9ucygpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5Zy65pmv5YC8IDpcIiAsb3B0aW9ucyk7XHJcbiAgICAgICAgICAgIGlmKG9wdGlvbnMuc2NlbmUgPT0gMTAwMSB8fCBvcHRpb25zLnNjZW5lID09IDEwODkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBpZihnLmlzTmV4dERheShVc2VySW5mby5zaG93QWRkRmF2VGltZSkgKVxyXG4gICAgICAgIC8vIHtcclxuICAgICAgICAvLyAgICAgVXNlckluZm8uc2hvd0FkZEZhdlRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICAvLyB9ZWxzZXtcclxuICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIC8vICAgICByZXR1cm47XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIGlmKHRoaXMucG9zVHlwZSA9PSBQb3NpdGlvblR5cGUuYXV0bylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCByYXRpbyA9IGNjLndpblNpemUuaGVpZ2h0L2NjLndpblNpemUud2lkdGg7XHJcbiAgICAgICAgICAgIGlmKHJhdGlvID4gMS45OClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93U3R5bGUyKCk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93U3R5bGUxKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZSBpZih0aGlzLnBvc1R5cGUgPT0gUG9zaXRpb25UeXBlLmJvdHRvbSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd1N0eWxlMSgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYodGhpcy5wb3NUeXBlID09IFBvc2l0aW9uVHlwZS5sZWZ0KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93U3R5bGUyKClcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UodGhpcy5jbGlja19oaWRlLHRoaXMuaGlkZUFmdGVyU2VjKTtcclxuICAgIH1cclxuXHJcbiAgICBjbGlja19oaWRlKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1N0eWxlMSgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5wb2ludGVyLnJvdGF0aW9uID0gMDtcclxuICAgICAgICB0aGlzLndpZGdldC50b3AgPSAxMjg7XHJcbiAgICAgICAgdGhpcy53aWRnZXQucmlnaHQgPSAxNDA7XHJcbiAgICAgICAgdGhpcy53aWRnZXQudXBkYXRlQWxpZ25tZW50KClcclxuICAgIH1cclxuXHJcblxyXG4gICAgc2hvd1N0eWxlMigpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5wb2ludGVyLnJvdGF0aW9uID0gOTA7XHJcbiAgICAgICAgdGhpcy53aWRnZXQudG9wID0gNDA7XHJcbiAgICAgICAgdGhpcy53aWRnZXQucmlnaHQgPSAzMDA7XHJcbiAgICAgICAgdGhpcy53aWRnZXQudXBkYXRlQWxpZ25tZW50KClcclxuICAgIH1cclxufSJdfQ==