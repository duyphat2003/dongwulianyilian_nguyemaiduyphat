
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/wxsdk/MoreGameItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b9f111MRGFKg7CINn50/KaQ', 'MoreGameItem');
// framework/wxsdk/MoreGameItem.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MoreGameItem = /** @class */ (function (_super) {
    __extends(MoreGameItem, _super);
    function MoreGameItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.title = null;
        _this.content = null;
        _this.icon = null;
        _this.btn = null;
        _this.btnSelf = null;
        _this.star_progress = null;
        _this.player_num = null;
        return _this;
    }
    MoreGameItem.prototype.setStar = function (c) {
        this.star_progress.width = 125 / 5 * c;
    };
    MoreGameItem.prototype.onLoad = function () {
        this.btnSelf = this.getComponent(cc.Button);
    };
    __decorate([
        property(cc.Label)
    ], MoreGameItem.prototype, "title", void 0);
    __decorate([
        property(cc.Label)
    ], MoreGameItem.prototype, "content", void 0);
    __decorate([
        property(cc.Sprite)
    ], MoreGameItem.prototype, "icon", void 0);
    __decorate([
        property(cc.Button)
    ], MoreGameItem.prototype, "btn", void 0);
    __decorate([
        property(cc.Node)
    ], MoreGameItem.prototype, "star_progress", void 0);
    __decorate([
        property(cc.Label)
    ], MoreGameItem.prototype, "player_num", void 0);
    MoreGameItem = __decorate([
        ccclass
    ], MoreGameItem);
    return MoreGameItem;
}(cc.Component));
exports.default = MoreGameItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFx3eHNka1xcTW9yZUdhbWVJdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUEwQyxnQ0FBWTtJQUF0RDtRQUFBLHFFQWlDQztRQTlCRyxXQUFLLEdBQVksSUFBSSxDQUFDO1FBR3RCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsVUFBSSxHQUFhLElBQUksQ0FBQztRQUd0QixTQUFHLEdBQWEsSUFBSSxDQUFDO1FBRXJCLGFBQU8sR0FBYSxJQUFJLENBQUM7UUFJekIsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFHOUIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7O0lBWS9CLENBQUM7SUFWRyw4QkFBTyxHQUFQLFVBQVEsQ0FBQztRQUVMLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLEdBQUcsR0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFHRCw2QkFBTSxHQUFOO1FBRUksSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBN0JEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7K0NBQ0c7SUFHdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztpREFDSztJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzhDQUNFO0lBR3RCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NkNBQ0M7SUFNckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt1REFDWTtJQUc5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO29EQUNRO0lBckJWLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0FpQ2hDO0lBQUQsbUJBQUM7Q0FqQ0QsQUFpQ0MsQ0FqQ3lDLEVBQUUsQ0FBQyxTQUFTLEdBaUNyRDtrQkFqQ29CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vcmVHYW1lSXRlbSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgdGl0bGU6Y2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGNvbnRlbnQ6Y2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICBpY29uOmNjLlNwcml0ZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIGJ0bjpjYy5CdXR0b24gPSBudWxsO1xyXG5cclxuICAgIGJ0blNlbGY6Y2MuQnV0dG9uID0gbnVsbDtcclxuXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBzdGFyX3Byb2dyZXNzOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBwbGF5ZXJfbnVtOmNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBzZXRTdGFyKGMpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zdGFyX3Byb2dyZXNzLndpZHRoID0gMTI1LzUgKiBjO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgb25Mb2FkKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmJ0blNlbGYgPSB0aGlzLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xyXG4gICAgfVxyXG59Il19