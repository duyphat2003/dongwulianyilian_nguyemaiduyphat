
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/hex-lines-game/Animal.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ba634us93lPYrBZpOaL4ofo', 'Animal');
// Game/Scripts/hex-lines-game/Animal.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Animal = /** @class */ (function (_super) {
    __extends(Animal, _super);
    function Animal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sprite = null;
        _this.animation = null;
        return _this;
    }
    Animal.prototype.onLoad = function () {
        this.animation = this.getComponentInChildren(cc.Animation);
        this.animation.on("finished", this.onFinish, this);
    };
    Animal.prototype.onFinish = function (s, a) {
        if (a.clip.name == "animal_jump") {
            this.animation.play("animal_idle");
        }
    };
    Animal.prototype.start = function () {
        this.animation.play("animal_idle");
    };
    Animal.prototype.connected = function () {
        var state = this.animation.play("animal_jump");
        state.wrapMode = cc.WrapMode.Normal;
    };
    Animal.prototype._loopJump = function () {
        var state = this.animation.play("animal_jump");
        state.wrapMode = cc.WrapMode.Loop;
    };
    Animal.prototype.loopJump = function (d) {
        this.scheduleOnce(this._loopJump, g.randomFloat(0, d));
    };
    __decorate([
        property(cc.Sprite)
    ], Animal.prototype, "sprite", void 0);
    Animal = __decorate([
        ccclass
    ], Animal);
    return Animal;
}(cc.Component));
exports.default = Animal;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcaGV4LWxpbmVzLWdhbWVcXEFuaW1hbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBb0MsMEJBQVk7SUFBaEQ7UUFBQSxxRUF3Q0M7UUFyQ0csWUFBTSxHQUFhLElBQUksQ0FBQztRQUd4QixlQUFTLEdBQWdCLElBQUksQ0FBQzs7SUFrQ2xDLENBQUM7SUFoQ0csdUJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBQyxJQUFJLENBQUMsQ0FBQTtJQUNyRCxDQUFDO0lBRUQseUJBQVEsR0FBUixVQUFTLENBQUMsRUFBQyxDQUFtQjtRQUUxQixJQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLGFBQWEsRUFDL0I7WUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQTtTQUNyQztJQUNMLENBQUM7SUFFRCxzQkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELDBCQUFTLEdBQVQ7UUFDSSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMvQyxLQUFLLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO0lBQ3hDLENBQUM7SUFFRCwwQkFBUyxHQUFUO1FBRUksSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUE7UUFDOUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztJQUN0QyxDQUFDO0lBRUQseUJBQVEsR0FBUixVQUFTLENBQUM7UUFFTixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUN6RCxDQUFDO0lBcENEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7MENBQ0k7SUFIUCxNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBd0MxQjtJQUFELGFBQUM7Q0F4Q0QsQUF3Q0MsQ0F4Q21DLEVBQUUsQ0FBQyxTQUFTLEdBd0MvQztrQkF4Q29CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSIH0gZnJvbSBcIi4vUmVzXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFuaW1hbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIHNwcml0ZTpjYy5TcHJpdGUgPSBudWxsO1xyXG5cclxuXHJcbiAgICBhbmltYXRpb246Y2MuQW5pbWF0aW9uID0gbnVsbDtcclxuICAgIFxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbiA9IHRoaXMuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5BbmltYXRpb24pO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uLm9uKFwiZmluaXNoZWRcIiwgdGhpcy5vbkZpbmlzaCx0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIG9uRmluaXNoKHMsYTpjYy5BbmltYXRpb25TdGF0ZSlcclxuICAgIHtcclxuICAgICAgICBpZihhLmNsaXAubmFtZSA9PSBcImFuaW1hbF9qdW1wXCIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbi5wbGF5KFwiYW5pbWFsX2lkbGVcIilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uLnBsYXkoXCJhbmltYWxfaWRsZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25uZWN0ZWQoKSB7XHJcbiAgICAgICAgbGV0IHN0YXRlID0gdGhpcy5hbmltYXRpb24ucGxheShcImFuaW1hbF9qdW1wXCIpO1xyXG4gICAgICAgIHN0YXRlLndyYXBNb2RlID0gY2MuV3JhcE1vZGUuTm9ybWFsO1xyXG4gICAgfVxyXG5cclxuICAgIF9sb29wSnVtcCgpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHN0YXRlID0gdGhpcy5hbmltYXRpb24ucGxheShcImFuaW1hbF9qdW1wXCIpXHJcbiAgICAgICAgc3RhdGUud3JhcE1vZGUgPSBjYy5XcmFwTW9kZS5Mb29wO1xyXG4gICAgfVxyXG5cclxuICAgIGxvb3BKdW1wKGQpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UodGhpcy5fbG9vcEp1bXAsIGcucmFuZG9tRmxvYXQoMCxkKSlcclxuICAgIH1cclxufSJdfQ==