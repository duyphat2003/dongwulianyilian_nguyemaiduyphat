
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/plugin_boosts/ui/ToastManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '129ed5o6uNHDKhz6KoueBpN', 'ToastManager');
// framework/plugin_boosts/ui/ToastManager.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Toast = void 0;
var ToastComponent_1 = require("./ToastComponent");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
exports.Toast = null;
var ToastManager = /** @class */ (function (_super) {
    __extends(ToastManager, _super);
    function ToastManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ToastManager.prototype.start = function () {
        this.toastPool = new cc.NodePool();
        exports.Toast = this;
    };
    ToastManager.prototype.onDestroy = function () {
        this.toastPool.clear();
    };
    ToastManager.prototype.make = function (text, dur) {
        if (dur === void 0) { dur = 1.3; }
        //show toast 
        var node = this.toastPool.get();
        var toastComp = null;
        if (node == null) {
            node = cc.instantiate(this.prefab);
            toastComp = node.getComponent(ToastComponent_1.default);
            if (toastComp == null) {
                console.warn("Toast.make : Toast Prefab must contains ToastComponent");
            }
            // ToastManager.toastPool.put(node);
            // node = ToastManager.toastPool.get();
        }
        else {
            toastComp = node.getComponent(ToastComponent_1.default);
        }
        if (node.parent == null)
            this.node.addChild(node, 99999);
        this.show(toastComp, text, dur);
        return toastComp;
    };
    ToastManager.prototype.show = function (toastComp, text, dur) {
        var _this = this;
        toastComp.show(text);
        this.scheduleOnce(function (_) {
            toastComp.hide(function (_) {
                _this.toastPool.put(toastComp.node);
                console.log("Toast.hide toastpool size:", _this.toastPool.size());
            });
        }, dur);
    };
    __decorate([
        property(cc.Prefab)
    ], ToastManager.prototype, "prefab", void 0);
    ToastManager = __decorate([
        ccclass
    ], ToastManager);
    return ToastManager;
}(cc.Component));
exports.default = ToastManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxwbHVnaW5fYm9vc3RzXFx1aVxcVG9hc3RNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQThDO0FBRXhDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRS9CLFFBQUEsS0FBSyxHQUFnQixJQUFJLENBQUM7QUFHckM7SUFBMEMsZ0NBQVk7SUFBdEQ7O0lBb0RBLENBQUM7SUEvQ0csNEJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDbkMsYUFBSyxHQUFHLElBQUksQ0FBQztJQUNqQixDQUFDO0lBRUQsZ0NBQVMsR0FBVDtRQUVJLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELDJCQUFJLEdBQUosVUFBSyxJQUFJLEVBQUMsR0FBUztRQUFULG9CQUFBLEVBQUEsU0FBUztRQUVmLGFBQWE7UUFDYixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ2hDLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLElBQUksSUFBSSxJQUFJLEVBQ2hCO1lBQ0ksSUFBSSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25DLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLHdCQUFjLENBQUMsQ0FBQztZQUM5QyxJQUFHLFNBQVMsSUFBSSxJQUFJLEVBQ3BCO2dCQUNJLE9BQU8sQ0FBQyxJQUFJLENBQUMsd0RBQXdELENBQUMsQ0FBQTthQUN6RTtZQUNELG9DQUFvQztZQUNwQyx1Q0FBdUM7U0FDMUM7YUFBSTtZQUNELFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLHdCQUFjLENBQUMsQ0FBQztTQUNqRDtRQUNELElBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJO1lBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBQyxLQUFLLENBQUMsQ0FBQztRQUVuQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBQyxJQUFJLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDN0IsT0FBTyxTQUFTLENBQUM7SUFDckIsQ0FBQztJQUVPLDJCQUFJLEdBQVosVUFBYSxTQUF3QixFQUFDLElBQUksRUFBQyxHQUFHO1FBQTlDLGlCQVNDO1FBUEcsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNwQixJQUFJLENBQUMsWUFBWSxDQUFDLFVBQUEsQ0FBQztZQUNmLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDO2dCQUNaLEtBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQTtnQkFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsRUFBQyxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUE7WUFDbkUsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLEVBQUMsR0FBRyxDQUFDLENBQUE7SUFDVixDQUFDO0lBOUNEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7Z0RBQ0o7SUFIQyxZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBb0RoQztJQUFELG1CQUFDO0NBcERELEFBb0RDLENBcER5QyxFQUFFLENBQUMsU0FBUyxHQW9EckQ7a0JBcERvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRvYXN0Q29tcG9uZW50IGZyb20gXCIuL1RvYXN0Q29tcG9uZW50XCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbmV4cG9ydCB2YXIgVG9hc3Q6VG9hc3RNYW5hZ2VyID0gbnVsbDtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvYXN0TWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICB0b2FzdFBvb2w6Y2MuTm9kZVBvb2w7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJlZmFiOmNjLlByZWZhYlxyXG4gICAgXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy50b2FzdFBvb2wgPSBuZXcgY2MuTm9kZVBvb2woKTtcclxuICAgICAgICBUb2FzdCA9IHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KClcclxuICAgIHtcclxuICAgICAgICB0aGlzLnRvYXN0UG9vbC5jbGVhcigpO1xyXG4gICAgfVxyXG5cclxuICAgIG1ha2UodGV4dCxkdXIgPSAxLjMpXHJcbiAgICB7XHJcbiAgICAgICAgLy9zaG93IHRvYXN0IFxyXG4gICAgICAgIGxldCBub2RlID0gdGhpcy50b2FzdFBvb2wuZ2V0KCk7XHJcbiAgICAgICAgbGV0IHRvYXN0Q29tcCA9IG51bGw7XHJcbiAgICAgICAgaWYgKG5vZGUgPT0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZWZhYik7XHJcbiAgICAgICAgICAgIHRvYXN0Q29tcCA9IG5vZGUuZ2V0Q29tcG9uZW50KFRvYXN0Q29tcG9uZW50KTtcclxuICAgICAgICAgICAgaWYodG9hc3RDb21wID09IG51bGwpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlRvYXN0Lm1ha2UgOiBUb2FzdCBQcmVmYWIgbXVzdCBjb250YWlucyBUb2FzdENvbXBvbmVudFwiKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIFRvYXN0TWFuYWdlci50b2FzdFBvb2wucHV0KG5vZGUpO1xyXG4gICAgICAgICAgICAvLyBub2RlID0gVG9hc3RNYW5hZ2VyLnRvYXN0UG9vbC5nZXQoKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdG9hc3RDb21wID0gbm9kZS5nZXRDb21wb25lbnQoVG9hc3RDb21wb25lbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihub2RlLnBhcmVudCA9PSBudWxsKVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobm9kZSw5OTk5OSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zaG93KHRvYXN0Q29tcCx0ZXh0LGR1cilcclxuICAgICAgICByZXR1cm4gdG9hc3RDb21wO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2hvdyh0b2FzdENvbXA6VG9hc3RDb21wb25lbnQsdGV4dCxkdXIpXHJcbiAgICB7XHJcbiAgICAgICAgdG9hc3RDb21wLnNob3codGV4dClcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShfPT57XHJcbiAgICAgICAgICAgIHRvYXN0Q29tcC5oaWRlKF89PntcclxuICAgICAgICAgICAgICAgIHRoaXMudG9hc3RQb29sLnB1dCh0b2FzdENvbXAubm9kZSlcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVG9hc3QuaGlkZSB0b2FzdHBvb2wgc2l6ZTpcIix0aGlzLnRvYXN0UG9vbC5zaXplKCkpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sZHVyKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19