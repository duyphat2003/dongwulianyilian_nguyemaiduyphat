
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/plugin_boosts/misc/InputSystem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4643c14ws5Msox+teVpsIzz', 'InputSystem');
// framework/plugin_boosts/misc/InputSystem.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.InputSystem = exports.Input = void 0;
var JoyStick_1 = require("./JoyStick");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
exports.Input = null;
var InputSystem = /** @class */ (function (_super) {
    __extends(InputSystem, _super);
    function InputSystem() {
        // @property(cc.Component.EventHandler)
        // onKeyDown:cc.Component.EventHandler;
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._target = null;
        _this.keys = {};
        _this.__touchVec = cc.Vec2.ZERO;
        _this.radius_axis = 256;
        _this.joyStick = null;
        _this.__lastTouch = cc.Vec2.ZERO;
        _this.moveOffset = cc.Vec2.ZERO;
        _this.__curTouchId = -1;
        return _this;
    }
    /**
     * if target is a Component ,this function must be called in onLoad
     * @param target
     */
    InputSystem.prototype.setDelegate = function (target) {
        this._target = target;
    };
    InputSystem.prototype.onLoad = function () {
        exports.Input = this;
        var components = this.getComponents(cc.Component);
        for (var i = 0; i < components.length; i++) {
            var comp = components[i];
            if (comp != this && (comp.onTouchBegan || comp.onTouchEnded || comp.onTouchMoved)) {
                this._target = comp;
                break;
            }
        }
        console.log("InputSystem Component -> target:", this._target);
    };
    //Horizontal
    //Vertical
    InputSystem.prototype.start = function () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.triggerKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.triggerKeyUp, this);
        // if(this._target)
        // {
        this.node.on(cc.Node.EventType.TOUCH_START, this.triggerTouchBegan, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.triggerTouchMoved, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.triggerTouchEnded, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.triggerTouchCanceled, this);
        // }
    };
    Object.defineProperty(InputSystem.prototype, "touch", {
        get: function () {
            return this.__touch;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputSystem.prototype, "axis", {
        // only valid when joystick is enabled 
        get: function () {
            if (this.joyStick)
                return this.joyStick.axis;
            else
                return this.__touchVec;
        },
        enumerable: false,
        configurable: true
    });
    InputSystem.prototype.getKey = function (k) {
        return this.keys[k];
    };
    InputSystem.prototype.triggerKeyUp = function (e) {
        if (this._target.onKeyUp)
            this._target.onKeyUp(event);
        this.keys[event["key"]] = false;
    };
    InputSystem.prototype.triggerKeyDown = function (e) {
        if (this._target.onKeyDown)
            this._target.onKeyDown(event);
        this.keys[event["key"]] = true;
    };
    InputSystem.prototype.triggerTouchEnded = function (e) {
        if (this.__curTouchId != -1 && e.getID() != this.__curTouchId) {
            return;
        }
        this.__curTouchId = -1;
        if (this._target.onTouchEnded)
            this._target.onTouchEnded(e);
        this.__touch = null;
        this.__touchVec = cc.Vec2.ZERO;
        if (e.currentTouch)
            if (this.joyStick)
                this.joyStick.touchEnd(e.currentTouch.getLocation());
        this.moveOffset = cc.Vec2.ZERO;
    };
    InputSystem.prototype.triggerTouchMoved = function (e) {
        if (this.__curTouchId != -1 && e.getID() != this.__curTouchId) {
            return;
        }
        if (this._target.onTouchMoved)
            this._target.onTouchMoved(e);
        this.__touch = e.currentTouch.getLocation();
        this.moveOffset = this.__touch.sub(this.__lastTouch);
        if (this.__touch && this.__startLocation) {
            this.__touchVec = this.__touch.sub(this.__startLocation);
            if (this.joyStick)
                this.joyStick.touchMove(this.__touch);
        }
        this.__lastTouch = this.__touch;
    };
    InputSystem.prototype.triggerTouchBegan = function (e) {
        if (this.__curTouchId != -1 && e.getID() != this.__curTouchId) {
            return;
        }
        if (this._target.onTouchBegan)
            this._target.onTouchBegan(e);
        this.__curTouchId = e.getID();
        this.__startLocation = e.currentTouch.getLocation();
        this.__touch = e.currentTouch.getLocation();
        this.__lastTouch = this.__touch;
        if (this.joyStick)
            this.joyStick.touchStart(this.__startLocation);
    };
    InputSystem.prototype.triggerTouchCanceled = function (e) {
        this.triggerTouchEnded(e);
    };
    InputSystem.prototype.onEnable = function () {
        this.schedule(this.checkTouch, 0.02);
    };
    InputSystem.prototype.onDisable = function () {
        this.unschedule(this.checkTouch);
    };
    InputSystem.prototype.checkTouch = function () {
        if (this.__touch) {
            this.moveOffset = this.__touch.sub(this.__lastTouch);
        }
    };
    __decorate([
        property(JoyStick_1.default)
    ], InputSystem.prototype, "joyStick", void 0);
    InputSystem = __decorate([
        ccclass
    ], InputSystem);
    return InputSystem;
}(cc.Component));
exports.InputSystem = InputSystem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxwbHVnaW5fYm9vc3RzXFxtaXNjXFxJbnB1dFN5c3RlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUFrQztBQUU1QixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUUvQixRQUFBLEtBQUssR0FBZSxJQUFJLENBQUM7QUFHcEM7SUFBaUMsK0JBQVk7SUFBN0M7UUFHSSx1Q0FBdUM7UUFDdkMsdUNBQXVDO1FBSjNDLHFFQWlMQztRQTNLRyxhQUFPLEdBQU8sSUFBSSxDQUFDO1FBSW5CLFVBQUksR0FBNEIsRUFBRSxDQUFBO1FBTWxDLGdCQUFVLEdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFFbEMsaUJBQVcsR0FBVSxHQUFHLENBQUM7UUFHekIsY0FBUSxHQUFZLElBQUksQ0FBQztRQWdHekIsaUJBQVcsR0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNuQyxnQkFBVSxHQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBcUJsQyxrQkFBWSxHQUFVLENBQUMsQ0FBQyxDQUFDOztJQXNDN0IsQ0FBQztJQTFKRzs7O09BR0c7SUFDSCxpQ0FBVyxHQUFYLFVBQVksTUFBTTtRQUVkLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO0lBQzFCLENBQUM7SUFJRCw0QkFBTSxHQUFOO1FBRUksYUFBSyxHQUFHLElBQUksQ0FBQztRQUViLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2xELEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUN4QztZQUNJLElBQUksSUFBSSxHQUFPLFVBQVUsQ0FBQyxDQUFDLENB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UUFFSSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsZ0NBQVUsR0FBVjtRQUVJLElBQUcsSUFBSSxDQUFDLE9BQU8sRUFDZjtZQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3hEO0lBQ0wsQ0FBQztJQTNKRDtRQURDLFFBQVEsQ0FBQyxrQkFBUSxDQUFDO2lEQUNNO0lBckJoQixXQUFXO1FBRHZCLE9BQU87T0FDSyxXQUFXLENBaUx2QjtJQUFELGtCQUFDO0NBakxELEFBaUxDLENBakxnQyxFQUFFLENBQUMsU0FBUyxHQWlMNUM7QUFqTFksa0NBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSm95U3RpY2sgZnJvbSBcIi4vSm95U3RpY2tcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuZXhwb3J0IHZhciBJbnB1dDpJbnB1dFN5c3RlbSA9IG51bGw7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgY2xhc3MgSW5wdXRTeXN0ZW0gZXh0ZW5kcyBjYy5Db21wb25lbnRcclxue1xyXG5cclxuICAgIC8vIEBwcm9wZXJ0eShjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKVxyXG4gICAgLy8gb25LZXlEb3duOmNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXI7XHJcblxyXG4gICAgX3RhcmdldDphbnkgPSBudWxsO1xyXG5cclxuXHJcblxyXG4gICAga2V5czp7W2luZGV4OnN0cmluZ106Ym9vbGVhbn0gPSB7fVxyXG5cclxuICAgIF9fdG91Y2g6Y2MuVmVjMjtcclxuXHJcbiAgICBfX3N0YXJ0TG9jYXRpb24gOmNjLlZlYzI7XHJcblxyXG4gICAgX190b3VjaFZlYzpjYy5WZWMyID0gY2MuVmVjMi5aRVJPO1xyXG5cclxuICAgIHJhZGl1c19heGlzOm51bWJlciA9IDI1NjtcclxuXHJcbiAgICBAcHJvcGVydHkoSm95U3RpY2spXHJcbiAgICBqb3lTdGljayA6Sm95U3RpY2s9IG51bGw7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBpZiB0YXJnZXQgaXMgYSBDb21wb25lbnQgLHRoaXMgZnVuY3Rpb24gbXVzdCBiZSBjYWxsZWQgaW4gb25Mb2FkXHJcbiAgICAgKiBAcGFyYW0gdGFyZ2V0IFxyXG4gICAgICovXHJcbiAgICBzZXREZWxlZ2F0ZSh0YXJnZXQpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5fdGFyZ2V0ID0gdGFyZ2V0O1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgb25Mb2FkKClcclxuICAgIHtcclxuICAgICAgICBJbnB1dCA9IHRoaXM7XHJcblxyXG4gICAgICAgIGxldCBjb21wb25lbnRzID0gdGhpcy5nZXRDb21wb25lbnRzKGNjLkNvbXBvbmVudCk7XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGNvbXBvbmVudHMubGVuZ3RoO2krKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBjb21wOmFueSA9IGNvbXBvbmVudHNbaV1cclxuICAgICAgICAgICAgaWYoY29tcCAhPSB0aGlzICYmIChjb21wLm9uVG91Y2hCZWdhbiB8fCBjb21wLm9uVG91Y2hFbmRlZHx8Y29tcC5vblRvdWNoTW92ZWQpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl90YXJnZXQgPSBjb21wO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJJbnB1dFN5c3RlbSBDb21wb25lbnQgLT4gdGFyZ2V0OlwiLHRoaXMuX3RhcmdldClcclxuICAgIH1cclxuXHJcbiAgICAvL0hvcml6b250YWxcclxuICAgIC8vVmVydGljYWxcclxuICAgIHN0YXJ0KClcclxuICAgIHtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sdGhpcy50cmlnZ2VyS2V5RG93bix0aGlzKTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX1VQLHRoaXMudHJpZ2dlcktleVVwLHRoaXMpO1xyXG4gICAgICAgIC8vIGlmKHRoaXMuX3RhcmdldClcclxuICAgICAgICAvLyB7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULHRoaXMudHJpZ2dlclRvdWNoQmVnYW4sIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLHRoaXMudHJpZ2dlclRvdWNoTW92ZWQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsdGhpcy50cmlnZ2VyVG91Y2hFbmRlZCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCx0aGlzLnRyaWdnZXJUb3VjaENhbmNlbGVkLCB0aGlzKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGdldCB0b3VjaCgpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX190b3VjaDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBvbmx5IHZhbGlkIHdoZW4gam95c3RpY2sgaXMgZW5hYmxlZCBcclxuICAgIGdldCBheGlzKClcclxuICAgIHtcclxuICAgICAgICBpZih0aGlzLmpveVN0aWNrKVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5qb3lTdGljay5heGlzO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX190b3VjaFZlYztcclxuICAgIH1cclxuXHJcbiAgICBnZXRLZXkoaylcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5rZXlzW2tdIFxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdHJpZ2dlcktleVVwKGUpIHtcclxuICAgICAgICBpZih0aGlzLl90YXJnZXQub25LZXlVcClcclxuICAgICAgICAgICAgdGhpcy5fdGFyZ2V0Lm9uS2V5VXAoZXZlbnQpXHJcbiAgICAgICAgdGhpcy5rZXlzW2V2ZW50W1wia2V5XCJdXSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdHJpZ2dlcktleURvd24oZSk6IGFueSB7XHJcbiAgICAgICAgaWYodGhpcy5fdGFyZ2V0Lm9uS2V5RG93bilcclxuICAgICAgICAgICAgdGhpcy5fdGFyZ2V0Lm9uS2V5RG93bihldmVudClcclxuICAgICAgICB0aGlzLmtleXNbZXZlbnRbXCJrZXlcIl1dID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHJpdmF0ZSB0cmlnZ2VyVG91Y2hFbmRlZChlKTogYW55IHtcclxuICAgICAgICBpZih0aGlzLl9fY3VyVG91Y2hJZCAhPS0xICYmIGUuZ2V0SUQoKSAhPSB0aGlzLl9fY3VyVG91Y2hJZClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fX2N1clRvdWNoSWQgPSAtMVxyXG4gICAgICAgIGlmKHRoaXMuX3RhcmdldC5vblRvdWNoRW5kZWQpXHJcbiAgICAgICAgICAgIHRoaXMuX3RhcmdldC5vblRvdWNoRW5kZWQoZSlcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLl9fdG91Y2ggPSBudWxsIFxyXG4gICAgICAgIHRoaXMuX190b3VjaFZlYyA9IGNjLlZlYzIuWkVSTztcclxuICAgICAgICBpZihlLmN1cnJlbnRUb3VjaClcclxuICAgICAgICAgICAgaWYodGhpcy5qb3lTdGljaylcclxuICAgICAgICAgICAgICAgIHRoaXMuam95U3RpY2sudG91Y2hFbmQoZS5jdXJyZW50VG91Y2guZ2V0TG9jYXRpb24oKSlcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLm1vdmVPZmZzZXQgPSBjYy5WZWMyLlpFUk87XHJcbiAgICB9XHJcblxyXG4gICAgX19sYXN0VG91Y2g6Y2MuVmVjMiA9IGNjLlZlYzIuWkVSTztcclxuICAgIG1vdmVPZmZzZXQ6Y2MuVmVjMiA9IGNjLlZlYzIuWkVSTztcclxuXHJcbiAgICBwcml2YXRlIHRyaWdnZXJUb3VjaE1vdmVkKGUpOiBhbnkge1xyXG4gICAgICAgIGlmKHRoaXMuX19jdXJUb3VjaElkICE9LTEgJiYgZS5nZXRJRCgpICE9IHRoaXMuX19jdXJUb3VjaElkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLl90YXJnZXQub25Ub3VjaE1vdmVkKVxyXG4gICAgICAgICAgICB0aGlzLl90YXJnZXQub25Ub3VjaE1vdmVkKGUpXHJcblxyXG4gICAgICAgIHRoaXMuX190b3VjaCA9IGUuY3VycmVudFRvdWNoLmdldExvY2F0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5tb3ZlT2Zmc2V0ID0gdGhpcy5fX3RvdWNoLnN1Yih0aGlzLl9fbGFzdFRvdWNoKVxyXG4gICAgICAgIGlmKHRoaXMuX190b3VjaCAmJiB0aGlzLl9fc3RhcnRMb2NhdGlvbilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX190b3VjaFZlYyA9IHRoaXMuX190b3VjaC5zdWIodGhpcy5fX3N0YXJ0TG9jYXRpb24pO1xyXG4gICAgICAgICAgICBpZih0aGlzLmpveVN0aWNrKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5qb3lTdGljay50b3VjaE1vdmUodGhpcy5fX3RvdWNoKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9fbGFzdFRvdWNoID0gdGhpcy5fX3RvdWNoO1xyXG4gICAgfVxyXG5cclxuICAgIF9fY3VyVG91Y2hJZDpudW1iZXIgPSAtMTtcclxuXHJcbiAgICBwcml2YXRlIHRyaWdnZXJUb3VjaEJlZ2FuKGUpOiBhbnkge1xyXG4gICAgICAgIGlmKHRoaXMuX19jdXJUb3VjaElkICE9LTEgJiYgZS5nZXRJRCgpICE9IHRoaXMuX19jdXJUb3VjaElkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZih0aGlzLl90YXJnZXQub25Ub3VjaEJlZ2FuKVxyXG4gICAgICAgICAgICB0aGlzLl90YXJnZXQub25Ub3VjaEJlZ2FuKGUpXHJcbiAgICAgICAgdGhpcy5fX2N1clRvdWNoSWQgPSBlLmdldElEKCk7XHJcbiAgICAgICAgdGhpcy5fX3N0YXJ0TG9jYXRpb24gPSBlLmN1cnJlbnRUb3VjaC5nZXRMb2NhdGlvbigpXHJcbiAgICAgICAgdGhpcy5fX3RvdWNoID0gZS5jdXJyZW50VG91Y2guZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICB0aGlzLl9fbGFzdFRvdWNoID0gdGhpcy5fX3RvdWNoO1xyXG4gICAgICAgIGlmKHRoaXMuam95U3RpY2spXHJcbiAgICAgICAgICAgIHRoaXMuam95U3RpY2sudG91Y2hTdGFydCh0aGlzLl9fc3RhcnRMb2NhdGlvbilcclxuICAgIH1cclxuICAgIHByaXZhdGUgdHJpZ2dlclRvdWNoQ2FuY2VsZWQoZSk6IGFueSB7XHJcbiAgICAgICAgdGhpcy50cmlnZ2VyVG91Y2hFbmRlZChlKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkVuYWJsZSgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLmNoZWNrVG91Y2gsMC4wMik7XHJcbiAgICB9XHJcblxyXG4gICAgb25EaXNhYmxlKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5jaGVja1RvdWNoKTtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja1RvdWNoKClcclxuICAgIHtcclxuICAgICAgICBpZih0aGlzLl9fdG91Y2gpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVPZmZzZXQgPSB0aGlzLl9fdG91Y2guc3ViKHRoaXMuX19sYXN0VG91Y2gpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==