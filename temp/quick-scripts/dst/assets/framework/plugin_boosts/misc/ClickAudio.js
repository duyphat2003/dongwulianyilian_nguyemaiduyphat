
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/plugin_boosts/misc/ClickAudio.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5ee8a8X6jFF5qtYOWlGoNww', 'ClickAudio');
// framework/plugin_boosts/misc/ClickAudio.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Device_1 = require("../gamesys/Device");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ClickAudio = /** @class */ (function (_super) {
    __extends(ClickAudio, _super);
    function ClickAudio() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.audio = null;
        _this.elastic = false;
        _this._oldScale = 1;
        return _this;
        // update (dt) {}
    }
    ClickAudio.prototype.anim2 = function () {
        var act = cc.scaleBy(0.6, 0.9, 0.9).easing(cc.easeElasticOut(0.3));
        this.node.runAction(act);
    };
    ClickAudio.prototype.anim2back = function () {
        var act = cc.scaleTo(0.6, this._oldScale, this._oldScale).easing(cc.easeElasticOut(0.3));
        this.node.runAction(act);
    };
    ClickAudio.prototype.onLoad = function () {
        var _this = this;
        if (this.elastic) {
            var btn = this.getComponent(cc.Button);
            btn.transition = cc.Button.Transition.COLOR;
            btn.normalColor = cc.Color.WHITE;
            btn.pressedColor = new cc.Color(200, 200, 200);
            this._oldScale = this.node.scale;
        }
        this.node.on('touchstart', function (_) {
            //cc.EaseElasticOut:create(
            // this.node.stopAllActions();
            _this.elastic && _this.anim2();
        }, this.node);
        this.node.on("touchend", function (_) {
            Device_1.default.playEffect(_this.audio, false);
            _this.elastic && _this.anim2back();
        });
        this.node.on("touchcancel", function (_) {
            _this.elastic && _this.anim2back();
        });
    };
    __decorate([
        property({ type: cc.AudioClip })
    ], ClickAudio.prototype, "audio", void 0);
    __decorate([
        property
    ], ClickAudio.prototype, "elastic", void 0);
    ClickAudio = __decorate([
        ccclass
    ], ClickAudio);
    return ClickAudio;
}(cc.Component));
exports.default = ClickAudio;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxwbHVnaW5fYm9vc3RzXFxtaXNjXFxDbGlja0F1ZGlvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0Q0FBdUM7QUFFakMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUFnREM7UUE3Q0csV0FBSyxHQUFpQixJQUFJLENBQUM7UUFHM0IsYUFBTyxHQUFXLEtBQUssQ0FBQztRQUV4QixlQUFTLEdBQVUsQ0FBQyxDQUFDOztRQXVDckIsaUJBQWlCO0lBQ3JCLENBQUM7SUF0Q0csMEJBQUssR0FBTDtRQUVJLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCw4QkFBUyxHQUFUO1FBRUksSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN4RixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsMkJBQU0sR0FBTjtRQUFBLGlCQXVCQztRQXRCRyxJQUFHLElBQUksQ0FBQyxPQUFPLEVBQ2Y7WUFDSSxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQTtZQUN0QyxHQUFHLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztZQUM1QyxHQUFHLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1lBQ2pDLEdBQUcsQ0FBQyxZQUFZLEdBQUcsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLENBQUM7WUFDN0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUNwQztRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxVQUFBLENBQUM7WUFDeEIsMkJBQTJCO1lBQzNCLDhCQUE4QjtZQUM5QixLQUFJLENBQUMsT0FBTyxJQUFJLEtBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNqQyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWQsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFDLFVBQUEsQ0FBQztZQUNyQixnQkFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsS0FBSyxFQUFDLEtBQUssQ0FBQyxDQUFBO1lBQ25DLEtBQUksQ0FBQyxPQUFPLElBQUksS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFDLFVBQUEsQ0FBQztZQUN4QixLQUFJLENBQUMsT0FBTyxJQUFJLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNyQyxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUExQ0Q7UUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBQyxDQUFDOzZDQUNKO0lBRzNCO1FBREMsUUFBUTsrQ0FDZTtJQU5QLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0FnRDlCO0lBQUQsaUJBQUM7Q0FoREQsQUFnREMsQ0FoRHVDLEVBQUUsQ0FBQyxTQUFTLEdBZ0RuRDtrQkFoRG9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGV2aWNlIGZyb20gXCIuLi9nYW1lc3lzL0RldmljZVwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbGlja0F1ZGlvIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoe3R5cGU6IGNjLkF1ZGlvQ2xpcH0pXHJcbiAgICBhdWRpbyA6Y2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGVsYXN0aWM6Ym9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIF9vbGRTY2FsZTpudW1iZXIgPSAxO1xyXG5cclxuICAgIGFuaW0yKClcclxuICAgIHtcclxuICAgICAgICBsZXQgYWN0ID0gY2Muc2NhbGVCeSgwLjYsIDAuOSwwLjkpLmVhc2luZyhjYy5lYXNlRWxhc3RpY091dCgwLjMpKTtcclxuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGFjdCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGFuaW0yYmFjaygpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGFjdCA9IGNjLnNjYWxlVG8oMC42LCB0aGlzLl9vbGRTY2FsZSx0aGlzLl9vbGRTY2FsZSkuZWFzaW5nKGNjLmVhc2VFbGFzdGljT3V0KDAuMykpO1xyXG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oYWN0KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIGlmKHRoaXMuZWxhc3RpYylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBidG4gPSB0aGlzLmdldENvbXBvbmVudChjYy5CdXR0b24pXHJcbiAgICAgICAgICAgIGJ0bi50cmFuc2l0aW9uID0gY2MuQnV0dG9uLlRyYW5zaXRpb24uQ09MT1I7XHJcbiAgICAgICAgICAgIGJ0bi5ub3JtYWxDb2xvciA9IGNjLkNvbG9yLldISVRFO1xyXG4gICAgICAgICAgICBidG4ucHJlc3NlZENvbG9yID0gbmV3IGNjLkNvbG9yKDIwMCwyMDAsMjAwKTtcclxuICAgICAgICAgICAgdGhpcy5fb2xkU2NhbGUgPSB0aGlzLm5vZGUuc2NhbGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMubm9kZS5vbigndG91Y2hzdGFydCcsIF89PntcclxuICAgICAgICAgICAgLy9jYy5FYXNlRWxhc3RpY091dDpjcmVhdGUoXHJcbiAgICAgICAgICAgIC8vIHRoaXMubm9kZS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgICAgICB0aGlzLmVsYXN0aWMgJiYgdGhpcy5hbmltMigpO1xyXG4gICAgICAgIH0sIHRoaXMubm9kZSk7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5vbihcInRvdWNoZW5kXCIsXz0+e1xyXG4gICAgICAgICAgICBEZXZpY2UucGxheUVmZmVjdCh0aGlzLmF1ZGlvLGZhbHNlKVxyXG4gICAgICAgICAgICB0aGlzLmVsYXN0aWMgJiYgdGhpcy5hbmltMmJhY2soKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMubm9kZS5vbihcInRvdWNoY2FuY2VsXCIsXz0+e1xyXG4gICAgICAgICAgICB0aGlzLmVsYXN0aWMgJiYgdGhpcy5hbmltMmJhY2soKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19