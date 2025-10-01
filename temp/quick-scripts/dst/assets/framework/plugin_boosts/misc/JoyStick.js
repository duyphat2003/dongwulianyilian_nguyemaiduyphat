
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/plugin_boosts/misc/JoyStick.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '297d6dgG6ZIJJ+ZjeNWq2ub', 'JoyStick');
// framework/plugin_boosts/misc/JoyStick.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var JoyStick = /** @class */ (function (_super) {
    __extends(JoyStick, _super);
    function JoyStick() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.outterCircle = null;
        _this.innerCircle = null;
        _this.radius = 250;
        _this.innerCircleRadius = 20;
        // 超出是否relase 
        _this.releaseAfterOver = false;
        // dynamic Joystick
        _this.dynamicJoystick = false;
        _this.autoRadius = false;
        _this.isReleased = false;
        _this._startPos = cc.Vec2.ZERO;
        return _this;
    }
    JoyStick.prototype.onLoad = function () {
        if (this.autoRadius) {
            this.radius = this.outterCircle.getBoundingBox().height / 2;
        }
        this.innerCircle.setPosition(0, 0);
        this.node.active = false;
    };
    JoyStick.prototype.start = function () {
        this.releaseStick();
    };
    JoyStick.prototype.releaseStick = function () {
        var move = cc.moveTo(0.5, cc.Vec2.ZERO);
        var action = move.easing(cc.easeExponentialOut());
        this.innerCircle.runAction(action);
        this.isReleased = true;
        if (this.dynamicJoystick) {
            this.scheduleOnce(this.delayClose, 1);
        }
    };
    JoyStick.prototype.delayClose = function () {
        this.node.active = false;
    };
    Object.defineProperty(JoyStick.prototype, "axis", {
        get: function () {
            if (this.isReleased)
                return cc.Vec2.ZERO;
            var vec = this.innerCircle.getPosition();
            vec.normalizeSelf();
            return vec;
        },
        enumerable: false,
        configurable: true
    });
    JoyStick.prototype.move = function (pos) {
        var mag = pos.mag();
        if (mag > this.radius) {
            if (this.releaseAfterOver)
                this.releaseStick();
            pos.normalizeSelf();
            pos.mulSelf(this.radius);
        }
        this.innerCircle.setPosition(pos);
    };
    // p : screen position
    JoyStick.prototype.touchStart = function (p) {
        if (!this.enabled)
            return;
        this.isReleased = false;
        this._startPos = p;
        this.unschedule(this.delayClose);
        this.node.active = true;
        if (this.dynamicJoystick) {
            // converto screen position
            var pos = this.node.getParent().convertToNodeSpaceAR(p);
            this.node.setPosition(pos);
            // this.node.opacity = 0;
            // this.node.runAction(cc.fadeIn(0.5));
        }
        this.move(cc.Vec2.ZERO);
    };
    JoyStick.prototype.touchMove = function (p) {
        if (!this.enabled)
            return;
        var vec = p.sub(this._startPos);
        this.move(vec);
    };
    JoyStick.prototype.touchEnd = function (p) {
        if (!this.enabled)
            return;
        // this.move(p);
        this.releaseStick();
    };
    __decorate([
        property(cc.Node)
    ], JoyStick.prototype, "outterCircle", void 0);
    __decorate([
        property(cc.Node)
    ], JoyStick.prototype, "innerCircle", void 0);
    __decorate([
        property
    ], JoyStick.prototype, "radius", void 0);
    __decorate([
        property
    ], JoyStick.prototype, "innerCircleRadius", void 0);
    __decorate([
        property
    ], JoyStick.prototype, "releaseAfterOver", void 0);
    __decorate([
        property
    ], JoyStick.prototype, "dynamicJoystick", void 0);
    __decorate([
        property
    ], JoyStick.prototype, "autoRadius", void 0);
    JoyStick = __decorate([
        ccclass
    ], JoyStick);
    return JoyStick;
}(cc.Component));
exports.default = JoyStick;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxwbHVnaW5fYm9vc3RzXFxtaXNjXFxKb3lTdGljay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFtSEM7UUFoSEcsa0JBQVksR0FBVyxJQUFJLENBQUM7UUFHNUIsaUJBQVcsR0FBVyxJQUFJLENBQUM7UUFHM0IsWUFBTSxHQUFVLEdBQUcsQ0FBQztRQUdwQix1QkFBaUIsR0FBVyxFQUFFLENBQUM7UUFFL0IsY0FBYztRQUVkLHNCQUFnQixHQUFXLEtBQUssQ0FBQztRQUVqQyxtQkFBbUI7UUFFbkIscUJBQWUsR0FBVyxLQUFLLENBQUM7UUFHaEMsZ0JBQVUsR0FBVyxLQUFLLENBQUM7UUFFM0IsZ0JBQVUsR0FBRyxLQUFLLENBQUM7UUF3RG5CLGVBQVMsR0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzs7SUFrQ3JDLENBQUM7SUF6RkcseUJBQU0sR0FBTjtRQUVJLElBQUcsSUFBSSxDQUFDLFVBQVUsRUFDbEI7WUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxFQUFFLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQztTQUM3RDtRQUNELElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQUVELHdCQUFLLEdBQUw7UUFFSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELCtCQUFZLEdBQVo7UUFFSSxJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pDLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLGtCQUFrQixFQUFFLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUV2QixJQUFHLElBQUksQ0FBQyxlQUFlLEVBQ3ZCO1lBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFBO1NBQ3pDO0lBQ0wsQ0FBQztJQUVELDZCQUFVLEdBQVY7UUFFSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQUVELHNCQUFJLDBCQUFJO2FBQVI7WUFFSSxJQUFHLElBQUksQ0FBQyxVQUFVO2dCQUFFLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDeEMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUN6QyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUE7WUFDbkIsT0FBTyxHQUFHLENBQUM7UUFDZixDQUFDOzs7T0FBQTtJQUVELHVCQUFJLEdBQUosVUFBSyxHQUFXO1FBRVosSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLElBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQ3BCO1lBQ0ksSUFBRyxJQUFJLENBQUMsZ0JBQWdCO2dCQUNwQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7WUFFeEIsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3BCLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1NBQzNCO1FBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUlELHNCQUFzQjtJQUN0Qiw2QkFBVSxHQUFWLFVBQVcsQ0FBQztRQUVSLElBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTztZQUFFLE9BQU87UUFDekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUcsSUFBSSxDQUFDLGVBQWUsRUFDdkI7WUFDSSwyQkFBMkI7WUFDM0IsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4RCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMzQix5QkFBeUI7WUFDekIsdUNBQXVDO1NBQzFDO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCw0QkFBUyxHQUFULFVBQVUsQ0FBQztRQUVQLElBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTztZQUFFLE9BQU87UUFDekIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNuQixDQUFDO0lBRUQsMkJBQVEsR0FBUixVQUFTLENBQUM7UUFFTixJQUFHLENBQUMsSUFBSSxDQUFDLE9BQU87WUFBRSxPQUFPO1FBQ3pCLGdCQUFnQjtRQUNoQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQS9HRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2tEQUNVO0lBRzVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ1M7SUFHM0I7UUFEQyxRQUFROzRDQUNXO0lBR3BCO1FBREMsUUFBUTt1REFDc0I7SUFJL0I7UUFEQyxRQUFRO3NEQUN3QjtJQUlqQztRQURDLFFBQVE7cURBQ3VCO0lBR2hDO1FBREMsUUFBUTtnREFDa0I7SUF2QlYsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQW1INUI7SUFBRCxlQUFDO0NBbkhELEFBbUhDLENBbkhxQyxFQUFFLENBQUMsU0FBUyxHQW1IakQ7a0JBbkhvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKb3lTdGljayBleHRlbmRzIGNjLkNvbXBvbmVudFxyXG57XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG91dHRlckNpcmNsZTpjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGlubmVyQ2lyY2xlOmNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcmFkaXVzOm51bWJlciA9IDI1MDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGlubmVyQ2lyY2xlUmFkaXVzOm51bWJlciA9ICAyMDtcclxuXHJcbiAgICAvLyDotoXlh7rmmK/lkKZyZWxhc2UgXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHJlbGVhc2VBZnRlck92ZXI6Ym9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIC8vIGR5bmFtaWMgSm95c3RpY2tcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgZHluYW1pY0pveXN0aWNrOmJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGF1dG9SYWRpdXM6Ym9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGlzUmVsZWFzZWQgPSBmYWxzZTtcclxuICAgIG9uTG9hZCgpXHJcbiAgICB7XHJcbiAgICAgICAgaWYodGhpcy5hdXRvUmFkaXVzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5yYWRpdXMgPSB0aGlzLm91dHRlckNpcmNsZS5nZXRCb3VuZGluZ0JveCgpLmhlaWdodC8yO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmlubmVyQ2lyY2xlLnNldFBvc2l0aW9uKDAsMCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KClcclxuICAgIHtcclxuICAgICAgICB0aGlzLnJlbGVhc2VTdGljaygpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZWxlYXNlU3RpY2soKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBtb3ZlID0gY2MubW92ZVRvKDAuNSAsIGNjLlZlYzIuWkVSTyk7XHJcbiAgICAgICAgbGV0IGFjdGlvbiA9IG1vdmUuZWFzaW5nKGNjLmVhc2VFeHBvbmVudGlhbE91dCgpKTtcclxuICAgICAgICB0aGlzLmlubmVyQ2lyY2xlLnJ1bkFjdGlvbihhY3Rpb24pO1xyXG4gICAgICAgIHRoaXMuaXNSZWxlYXNlZCA9IHRydWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYodGhpcy5keW5hbWljSm95c3RpY2spXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSggdGhpcy5kZWxheUNsb3NlLCAxKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkZWxheUNsb3NlKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGF4aXMoKVxyXG4gICAge1xyXG4gICAgICAgIGlmKHRoaXMuaXNSZWxlYXNlZCkgcmV0dXJuIGNjLlZlYzIuWkVSTztcclxuICAgICAgICBsZXQgdmVjID0gdGhpcy5pbm5lckNpcmNsZS5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIHZlYy5ub3JtYWxpemVTZWxmKClcclxuICAgICAgICByZXR1cm4gdmVjO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmUocG9zOmNjLlZlYzIpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IG1hZyA9IHBvcy5tYWcoKTtcclxuICAgICAgICBpZihtYWcgPiB0aGlzLnJhZGl1cylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMucmVsZWFzZUFmdGVyT3ZlcilcclxuICAgICAgICAgICAgICAgIHRoaXMucmVsZWFzZVN0aWNrKCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBwb3Mubm9ybWFsaXplU2VsZigpO1xyXG4gICAgICAgICAgICBwb3MubXVsU2VsZih0aGlzLnJhZGl1cylcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pbm5lckNpcmNsZS5zZXRQb3NpdGlvbihwb3MpO1xyXG4gICAgfVxyXG5cclxuICAgIF9zdGFydFBvczpjYy5WZWMyID0gY2MuVmVjMi5aRVJPO1xyXG5cclxuICAgIC8vIHAgOiBzY3JlZW4gcG9zaXRpb25cclxuICAgIHRvdWNoU3RhcnQocClcclxuICAgIHtcclxuICAgICAgICBpZighdGhpcy5lbmFibGVkKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5pc1JlbGVhc2VkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fc3RhcnRQb3MgPSBwO1xyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmRlbGF5Q2xvc2UpO1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIGlmKHRoaXMuZHluYW1pY0pveXN0aWNrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gY29udmVydG8gc2NyZWVuIHBvc2l0aW9uXHJcbiAgICAgICAgICAgIGxldCBwb3MgPSB0aGlzLm5vZGUuZ2V0UGFyZW50KCkuY29udmVydFRvTm9kZVNwYWNlQVIocCk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihwb3MpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLm5vZGUub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICAgIC8vIHRoaXMubm9kZS5ydW5BY3Rpb24oY2MuZmFkZUluKDAuNSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm1vdmUoY2MuVmVjMi5aRVJPKTtcclxuICAgIH1cclxuXHJcbiAgICB0b3VjaE1vdmUocClcclxuICAgIHtcclxuICAgICAgICBpZighdGhpcy5lbmFibGVkKSByZXR1cm47XHJcbiAgICAgICAgbGV0IHZlYyA9IHAuc3ViKHRoaXMuX3N0YXJ0UG9zKTtcclxuICAgICAgICB0aGlzLm1vdmUodmVjKTtcclxuICAgIH1cclxuXHJcbiAgICB0b3VjaEVuZChwKVxyXG4gICAge1xyXG4gICAgICAgIGlmKCF0aGlzLmVuYWJsZWQpIHJldHVybjtcclxuICAgICAgICAvLyB0aGlzLm1vdmUocCk7XHJcbiAgICAgICAgdGhpcy5yZWxlYXNlU3RpY2soKTtcclxuICAgIH1cclxufSJdfQ==