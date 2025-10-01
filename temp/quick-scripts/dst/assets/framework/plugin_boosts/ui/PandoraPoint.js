
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/plugin_boosts/ui/PandoraPoint.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3f36aidibxFPY2TBTu8gRyi', 'PandoraPoint');
// framework/plugin_boosts/ui/PandoraPoint.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PandoraPoint = /** @class */ (function (_super) {
    __extends(PandoraPoint, _super);
    function PandoraPoint() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.numberVisible = true;
        return _this;
        // update (dt) {}
    }
    PandoraPoint.prototype.onLoad = function () {
        this.sprite = this.getComponent(cc.Sprite);
        this.label = this.getComponentInChildren(cc.Label);
        this.label.node.active = this.numberVisible;
    };
    PandoraPoint.prototype.start = function () {
    };
    PandoraPoint.prototype.setNumber = function (n) {
        if (this.numberVisible) {
            this.label.string = n + "";
        }
        if (this.numberVisible) {
            this.label.node.active = n != 0;
        }
        this.sprite.enabled = n != 0;
    };
    __decorate([
        property
    ], PandoraPoint.prototype, "numberVisible", void 0);
    PandoraPoint = __decorate([
        ccclass
    ], PandoraPoint);
    return PandoraPoint;
}(cc.Component));
exports.default = PandoraPoint;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxwbHVnaW5fYm9vc3RzXFx1aVxcUGFuZG9yYVBvaW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUEwQyxnQ0FBWTtJQUF0RDtRQUFBLHFFQWlDQztRQTVCRyxtQkFBYSxHQUFXLElBQUksQ0FBQzs7UUEyQjdCLGlCQUFpQjtJQUNyQixDQUFDO0lBeEJHLDZCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUNoRCxDQUFDO0lBRUQsNEJBQUssR0FBTDtJQUVBLENBQUM7SUFFRCxnQ0FBUyxHQUFULFVBQVUsQ0FBUTtRQUVkLElBQUcsSUFBSSxDQUFDLGFBQWEsRUFDckI7WUFDSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUUsRUFBRSxDQUFBO1NBQzVCO1FBQ0QsSUFBRyxJQUFJLENBQUMsYUFBYSxFQUNyQjtZQUNJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBSSxDQUFDLElBQUUsQ0FBQyxDQUFDO1NBQ2xDO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFHLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBekJEO1FBREMsUUFBUTt1REFDb0I7SUFMWixZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBaUNoQztJQUFELG1CQUFDO0NBakNELEFBaUNDLENBakN5QyxFQUFFLENBQUMsU0FBUyxHQWlDckQ7a0JBakNvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYW5kb3JhUG9pbnQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIGxhYmVsOmNjLkxhYmVsO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgbnVtYmVyVmlzaWJsZTpib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBzcHJpdGU6Y2MuU3ByaXRlXHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICB0aGlzLnNwcml0ZSA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgdGhpcy5sYWJlbCA9IHRoaXMuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5MYWJlbCk7XHJcbiAgICAgICAgdGhpcy5sYWJlbC5ub2RlLmFjdGl2ZSA9IHRoaXMubnVtYmVyVmlzaWJsZTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNldE51bWJlcihuOm51bWJlcilcclxuICAgIHtcclxuICAgICAgICBpZih0aGlzLm51bWJlclZpc2libGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9IG4gK1wiXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5udW1iZXJWaXNpYmxlKSBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWwubm9kZS5hY3RpdmUgPSAgbiE9MDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zcHJpdGUuZW5hYmxlZCA9IG4gIT0wO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19