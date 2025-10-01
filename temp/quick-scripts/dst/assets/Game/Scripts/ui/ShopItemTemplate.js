
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/ui/ShopItemTemplate.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0b667/xvIZJapTB+ZTBqkHL', 'ShopItemTemplate');
// Game/Scripts/ui/ShopItemTemplate.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Signal_1 = require("../../../framework/plugin_boosts/misc/Signal");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ShopItemTemplate = /** @class */ (function (_super) {
    __extends(ShopItemTemplate, _super);
    function ShopItemTemplate() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.titleLabel = null;
        _this.selectedFlag = null;
        _this.bgmini = null;
        _this.btnBuyNode = null;
        _this.maskNode = null;
        _this.borderNode = null;
        _this.diamondLabel = null;
        _this.btnSignal = new Signal_1.default();
        _this.data = null;
        return _this;
    }
    ShopItemTemplate.prototype.onLoad = function () { };
    ShopItemTemplate.prototype.start = function () { };
    ShopItemTemplate.prototype.click_unlock = function () {
        this.btnSignal.fire(this.data);
    };
    __decorate([
        property(cc.Label)
    ], ShopItemTemplate.prototype, "titleLabel", void 0);
    __decorate([
        property(cc.Node)
    ], ShopItemTemplate.prototype, "selectedFlag", void 0);
    __decorate([
        property(cc.Sprite)
    ], ShopItemTemplate.prototype, "bgmini", void 0);
    __decorate([
        property(cc.Node)
    ], ShopItemTemplate.prototype, "btnBuyNode", void 0);
    __decorate([
        property(cc.Node)
    ], ShopItemTemplate.prototype, "maskNode", void 0);
    __decorate([
        property(cc.Node)
    ], ShopItemTemplate.prototype, "borderNode", void 0);
    __decorate([
        property(cc.Label)
    ], ShopItemTemplate.prototype, "diamondLabel", void 0);
    ShopItemTemplate = __decorate([
        ccclass
    ], ShopItemTemplate);
    return ShopItemTemplate;
}(cc.Component));
exports.default = ShopItemTemplate;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcdWlcXFNob3BJdGVtVGVtcGxhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVFQUFrRTtBQUU1RCxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE4QyxvQ0FBWTtJQUExRDtRQUFBLHFFQWtDQztRQTNCRyxnQkFBVSxHQUFZLElBQUksQ0FBQztRQUczQixrQkFBWSxHQUFXLElBQUksQ0FBQztRQUc1QixZQUFNLEdBQWEsSUFBSSxDQUFDO1FBRXhCLGdCQUFVLEdBQVcsSUFBSSxDQUFDO1FBRzFCLGNBQVEsR0FBVyxJQUFJLENBQUM7UUFHeEIsZ0JBQVUsR0FBVyxJQUFJLENBQUM7UUFHMUIsa0JBQVksR0FBWSxJQUFJLENBQUM7UUFFN0IsZUFBUyxHQUFVLElBQUksZ0JBQU0sRUFBRSxDQUFDO1FBRWhDLFVBQUksR0FBTyxJQUFJLENBQUM7O0lBTXBCLENBQUM7SUFoQ0csaUNBQU0sR0FBTixjQUFXLENBQUM7SUFDWixnQ0FBSyxHQUFMLGNBQVUsQ0FBQztJQTJCWCx1Q0FBWSxHQUFaO1FBRUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUExQkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzt3REFDUTtJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBEQUNVO0lBRzVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7b0RBQ0k7SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt3REFDUTtJQUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3NEQUNNO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7d0RBQ1E7SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzswREFDVTtJQXhCWixnQkFBZ0I7UUFEcEMsT0FBTztPQUNhLGdCQUFnQixDQWtDcEM7SUFBRCx1QkFBQztDQWxDRCxBQWtDQyxDQWxDNkMsRUFBRSxDQUFDLFNBQVMsR0FrQ3pEO2tCQWxDb0IsZ0JBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNpZ25hbCBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3BsdWdpbl9ib29zdHMvbWlzYy9TaWduYWxcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hvcEl0ZW1UZW1wbGF0ZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgb25Mb2FkICgpIHt9XHJcbiAgICBzdGFydCAoKSB7fVxyXG5cclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICB0aXRsZUxhYmVsOmNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHNlbGVjdGVkRmxhZzpjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxyXG4gICAgYmdtaW5pOmNjLlNwcml0ZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0bkJ1eU5vZGU6Y2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBtYXNrTm9kZTpjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJvcmRlck5vZGU6Y2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgZGlhbW9uZExhYmVsOmNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBidG5TaWduYWw6U2lnbmFsID0gbmV3IFNpZ25hbCgpO1xyXG5cclxuICAgIGRhdGE6YW55ID0gbnVsbDtcclxuICAgIFxyXG4gICAgY2xpY2tfdW5sb2NrKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmJ0blNpZ25hbC5maXJlKHRoaXMuZGF0YSk7XHJcbiAgICB9XHJcbn0iXX0=