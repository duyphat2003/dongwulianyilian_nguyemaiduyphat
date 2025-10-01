
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/plugin_boosts/misc/ClickAudioManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '679c3x/ZwhD8KnIy6p5lX5y', 'ClickAudioManager');
// framework/plugin_boosts/misc/ClickAudioManager.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ClickAudio_1 = require("./ClickAudio");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ClickAudioManager = /** @class */ (function (_super) {
    __extends(ClickAudioManager, _super);
    function ClickAudioManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.audio = null;
        _this.elastic = false;
        return _this;
        // update (dt) {}
    }
    ClickAudioManager.prototype.onLoad = function () {
        g.foreachNode(this.node, this.each, this);
    };
    ClickAudioManager.prototype.each = function (item) {
        //if button 
        if (!item.getComponent(cc.Button))
            return;
        var comp = item.getComponent(ClickAudio_1.default);
        if (comp == null) {
            comp = item.addComponent(ClickAudio_1.default);
            comp.elastic = this.elastic;
            comp.audio = this.audio;
        }
    };
    ClickAudioManager.prototype.start = function () {
    };
    __decorate([
        property({ type: cc.AudioClip })
    ], ClickAudioManager.prototype, "audio", void 0);
    __decorate([
        property
    ], ClickAudioManager.prototype, "elastic", void 0);
    ClickAudioManager = __decorate([
        ccclass
    ], ClickAudioManager);
    return ClickAudioManager;
}(cc.Component));
exports.default = ClickAudioManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxwbHVnaW5fYm9vc3RzXFxtaXNjXFxDbGlja0F1ZGlvTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQXNDO0FBQ2hDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQStDLHFDQUFZO0lBQTNEO1FBQUEscUVBNkJDO1FBMUJHLFdBQUssR0FBaUIsSUFBSSxDQUFDO1FBRzNCLGFBQU8sR0FBVyxLQUFLLENBQUM7O1FBc0J4QixpQkFBaUI7SUFDckIsQ0FBQztJQXJCRyxrQ0FBTSxHQUFOO1FBQ0ksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLENBQUE7SUFDM0MsQ0FBQztJQUVELGdDQUFJLEdBQUosVUFBSyxJQUFZO1FBRWIsWUFBWTtRQUNaLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7WUFBRSxPQUFPO1FBQzFDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsb0JBQVUsQ0FBQyxDQUFBO1FBQ3hDLElBQUcsSUFBSSxJQUFJLElBQUksRUFDZjtZQUNJLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLG9CQUFVLENBQUMsQ0FBQztZQUNyQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUE7WUFDM0IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQzNCO0lBQ0wsQ0FBQztJQUNELGlDQUFLLEdBQUw7SUFFQSxDQUFDO0lBdkJEO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUMsQ0FBQztvREFDSjtJQUczQjtRQURDLFFBQVE7c0RBQ2U7SUFOUCxpQkFBaUI7UUFEckMsT0FBTztPQUNhLGlCQUFpQixDQTZCckM7SUFBRCx3QkFBQztDQTdCRCxBQTZCQyxDQTdCOEMsRUFBRSxDQUFDLFNBQVMsR0E2QjFEO2tCQTdCb0IsaUJBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENsaWNrQXVkaW8gZnJvbSBcIi4vQ2xpY2tBdWRpb1wiO1xyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsaWNrQXVkaW9NYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoe3R5cGU6IGNjLkF1ZGlvQ2xpcH0pXHJcbiAgICBhdWRpbyA6Y2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGVsYXN0aWM6Ym9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgZy5mb3JlYWNoTm9kZSh0aGlzLm5vZGUsdGhpcy5lYWNoLHRoaXMpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGVhY2goaXRlbTpjYy5Ob2RlKVxyXG4gICAge1xyXG4gICAgICAgIC8vaWYgYnV0dG9uIFxyXG4gICAgICAgIGlmICghaXRlbS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKSkgcmV0dXJuO1xyXG4gICAgICAgIGxldCBjb21wID0gaXRlbS5nZXRDb21wb25lbnQoQ2xpY2tBdWRpbylcclxuICAgICAgICBpZihjb21wID09IG51bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb21wID0gaXRlbS5hZGRDb21wb25lbnQoQ2xpY2tBdWRpbyk7XHJcbiAgICAgICAgICAgIGNvbXAuZWxhc3RpYyA9IHRoaXMuZWxhc3RpY1xyXG4gICAgICAgICAgICBjb21wLmF1ZGlvID0gdGhpcy5hdWRpbztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19