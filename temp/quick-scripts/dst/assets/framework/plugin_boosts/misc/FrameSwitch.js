
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/plugin_boosts/misc/FrameSwitch.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '92ea6+rkJ5BQ7Twyd4FI92I', 'FrameSwitch');
// framework/plugin_boosts/misc/FrameSwitch.ts

Object.defineProperty(exports, "__esModule", { value: true });
// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, requireComponent = _a.requireComponent;
var FrameSwitcher = /** @class */ (function (_super) {
    __extends(FrameSwitcher, _super);
    function FrameSwitcher() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.frames = [];
        // LIFE-CYCLE CALLBACKS:
        _this.target = null;
        _this._index = 0;
        _this.randomOnLoad = false;
        return _this;
        // update (dt) {}
    }
    FrameSwitcher.prototype.onLoad = function () {
        if (this.target == null)
            this.target = this.getComponent(cc.Sprite);
        if (this.randomOnLoad)
            this.switchRandom();
    };
    FrameSwitcher.prototype.switchRandom = function () {
        this.index = g.randomInt(0, this.frames.length);
    };
    Object.defineProperty(FrameSwitcher.prototype, "index", {
        get: function () {
            return this._index;
        },
        set: function (k) {
            this.switch(k);
        },
        enumerable: false,
        configurable: true
    });
    FrameSwitcher.prototype.switch = function (index) {
        var len = this.frames.length;
        var idx = Math.min(Math.max(0, index), len - 1);
        this.target.spriteFrame = this.frames[idx];
        this._index = idx;
    };
    FrameSwitcher.prototype.start = function () {
    };
    __decorate([
        property([cc.SpriteFrame])
    ], FrameSwitcher.prototype, "frames", void 0);
    __decorate([
        property(cc.Sprite)
    ], FrameSwitcher.prototype, "target", void 0);
    __decorate([
        property
    ], FrameSwitcher.prototype, "randomOnLoad", void 0);
    FrameSwitcher = __decorate([
        ccclass
    ], FrameSwitcher);
    return FrameSwitcher;
}(cc.Component));
exports.default = FrameSwitcher;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxwbHVnaW5fYm9vc3RzXFxtaXNjXFxGcmFtZVN3aXRjaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsb0JBQW9CO0FBQ3BCLGlGQUFpRjtBQUNqRix5RkFBeUY7QUFDekYsbUJBQW1CO0FBQ25CLDJGQUEyRjtBQUMzRixtR0FBbUc7QUFDbkcsOEJBQThCO0FBQzlCLDJGQUEyRjtBQUMzRixtR0FBbUc7QUFFN0YsSUFBQSxLQUF1QyxFQUFFLENBQUMsVUFBVSxFQUFuRCxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQUEsRUFBQyxnQkFBZ0Isc0JBQWlCLENBQUM7QUFHM0Q7SUFBMkMsaUNBQVk7SUFBdkQ7UUFBQSxxRUFpREM7UUE5Q0csWUFBTSxHQUFvQixFQUFFLENBQUE7UUFDNUIsd0JBQXdCO1FBRXhCLFlBQU0sR0FBYSxJQUFJLENBQUM7UUFFeEIsWUFBTSxHQUFXLENBQUMsQ0FBQTtRQUdsQixrQkFBWSxHQUFXLEtBQUssQ0FBQzs7UUFxQzdCLGlCQUFpQjtJQUNyQixDQUFDO0lBcENHLDhCQUFNLEdBQU47UUFFSSxJQUFHLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSTtZQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9DLElBQUcsSUFBSSxDQUFDLFlBQVk7WUFDaEIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFBO0lBQzNCLENBQUM7SUFFRCxvQ0FBWSxHQUFaO1FBRUksSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCxzQkFBSSxnQ0FBSzthQUtUO1lBRUksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFBO1FBQ3RCLENBQUM7YUFSRCxVQUFVLENBQUM7WUFFUCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25CLENBQUM7OztPQUFBO0lBT0QsOEJBQU0sR0FBTixVQUFPLEtBQUs7UUFFUixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFDLEtBQUssQ0FBQyxFQUFDLEdBQUcsR0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQzFDLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO0lBQ3RCLENBQUM7SUFFRCw2QkFBSyxHQUFMO0lBRUEsQ0FBQztJQTNDRDtRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQztpREFDQztJQUc1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2lEQUNJO0lBS3hCO1FBREMsUUFBUTt1REFDb0I7SUFYWixhQUFhO1FBRGpDLE9BQU87T0FDYSxhQUFhLENBaURqQztJQUFELG9CQUFDO0NBakRELEFBaURDLENBakQwQyxFQUFFLENBQUMsU0FBUyxHQWlEdEQ7a0JBakRvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVjJDaGFuZ2VBY3Rpb24gfSBmcm9tIFwiLi9Cb29zdHNBY3Rpb25cIjtcclxuXHJcbi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5LHJlcXVpcmVDb21wb25lbnR9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZyYW1lU3dpdGNoZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShbY2MuU3ByaXRlRnJhbWVdKVxyXG4gICAgZnJhbWVzOmNjLlNwcml0ZUZyYW1lW10gPSBbXVxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxyXG4gICAgdGFyZ2V0OmNjLlNwcml0ZSA9IG51bGw7XHJcblxyXG4gICAgX2luZGV4IDpudW1iZXIgPSAwXHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICByYW5kb21PbkxvYWQ6Ym9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIG9uTG9hZCgpXHJcbiAgICB7XHJcbiAgICAgICAgaWYodGhpcy50YXJnZXQgPT0gbnVsbClcclxuICAgICAgICAgICAgdGhpcy50YXJnZXQgPSB0aGlzLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgIGlmKHRoaXMucmFuZG9tT25Mb2FkKVxyXG4gICAgICAgICAgICB0aGlzLnN3aXRjaFJhbmRvbSgpXHJcbiAgICB9XHJcblxyXG4gICAgc3dpdGNoUmFuZG9tKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmluZGV4ID0gZy5yYW5kb21JbnQoMCx0aGlzLmZyYW1lcy5sZW5ndGgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBpbmRleChrKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc3dpdGNoKGspO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBpbmRleCgpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luZGV4XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHN3aXRjaChpbmRleClcclxuICAgIHtcclxuICAgICAgICBsZXQgbGVuID0gdGhpcy5mcmFtZXMubGVuZ3RoO1xyXG4gICAgICAgIGxldCBpZHggPSBNYXRoLm1pbihNYXRoLm1heCgwLGluZGV4KSxsZW4tMSk7XHJcbiAgICAgICAgdGhpcy50YXJnZXQuc3ByaXRlRnJhbWUgPSB0aGlzLmZyYW1lc1tpZHhdXHJcbiAgICAgICAgdGhpcy5faW5kZXggPSBpZHg7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==