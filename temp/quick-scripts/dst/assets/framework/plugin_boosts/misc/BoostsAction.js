
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/plugin_boosts/misc/BoostsAction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '47da3PXgqdE55aSvY0ox9B4', 'BoostsAction');
// framework/plugin_boosts/misc/BoostsAction.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Shake = exports.V2ChangeAction = exports.ValueChangeAction = void 0;
var ValueChangeAction = /** @class */ (function (_super) {
    __extends(ValueChangeAction, _super);
    function ValueChangeAction(duration, from, to, callback, target) {
        var _this = _super.call(this) || this;
        _this.delta = _this.sub(to, from);
        _this.setDuration(duration);
        _this.callback = callback;
        _this.start = from;
        _this.end = to;
        _this.callbackTarget = target;
        return _this;
    }
    ValueChangeAction.prototype.sub = function (x, y) {
        return (x - y);
    };
    ValueChangeAction.prototype.add = function (x, y) {
        return x + y;
    };
    ValueChangeAction.prototype.mul = function (x, y) {
        return x * y;
    };
    ValueChangeAction.prototype.update = function (dt) {
        dt = this._computeEaseTime(dt);
        var v = this.add(this.start, this.mul(this.delta, dt));
        this.callback.call(this.callbackTarget, v);
    };
    return ValueChangeAction;
}(cc.ActionInterval));
exports.ValueChangeAction = ValueChangeAction;
var V2ChangeAction = /** @class */ (function (_super) {
    __extends(V2ChangeAction, _super);
    function V2ChangeAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    V2ChangeAction.prototype.sub = function (x, y) {
        return x.sub(x, y);
    };
    V2ChangeAction.prototype.add = function (x, y) {
        return x.add(x, y);
    };
    V2ChangeAction.prototype.mul = function (x, y) {
        return x.mul(x, y);
    };
    return V2ChangeAction;
}(ValueChangeAction));
exports.V2ChangeAction = V2ChangeAction;
var Shake = /** @class */ (function (_super) {
    __extends(Shake, _super);
    function Shake() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._initial_x = 0;
        _this._initial_y = 0;
        _this._strength_x = 0;
        _this._strength_y = 0;
        return _this;
    }
    /**
     *  创建抖动动画
     * @param {number} duration     动画持续时长
     * @param {number} strength_x   抖动幅度： x方向
     * @param {number} strength_y   抖动幅度： y方向
     * @returns {Shake}
     */
    Shake.create = function (duration, strength_x, strength_y) {
        var act = new Shake();
        act.initWithDuration(duration, strength_x, strength_y);
        return act;
    };
    Shake.prototype.initWithDuration = function (duration, strength_x, strength_y) {
        cc.ActionInterval.prototype['initWithDuration'].apply(this, arguments);
        this._strength_x = strength_x;
        this._strength_y = strength_y;
        return true;
    };
    Shake.prototype.fgRangeRand = function (min, max) {
        var rnd = Math.random();
        return rnd * (max - min) + min;
    };
    Shake.prototype.update = function (time) {
        var randx = this.fgRangeRand(-this._strength_x, this._strength_x);
        var randy = this.fgRangeRand(-this._strength_y, this._strength_y);
        this.getTarget().setPosition(randx + this._initial_x, randy + this._initial_y);
    };
    Shake.prototype.startWithTarget = function (target) {
        cc.ActionInterval.prototype['startWithTarget'].apply(this, arguments);
        this._initial_x = target.x;
        this._initial_y = target.y;
    };
    Shake.prototype.stop = function () {
        this.getTarget().setPosition(new cc.Vec2(this._initial_x, this._initial_y));
        cc.ActionInterval.prototype['stop'].apply(this);
    };
    return Shake;
}(cc.ActionInterval));
exports.Shake = Shake;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxwbHVnaW5fYm9vc3RzXFxtaXNjXFxCb29zdHNBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtJQUF1QyxxQ0FBaUI7SUF3QnBELDJCQUFZLFFBQVEsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLFFBQVEsRUFBQyxNQUFPO1FBQTdDLFlBRUksaUJBQU8sU0FPVjtRQU5HLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUcsSUFBSSxDQUFDLENBQUM7UUFDakMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzQixLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixLQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUNkLEtBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDOztJQUNqQyxDQUFDO0lBeEJELCtCQUFHLEdBQUgsVUFBSSxDQUFDLEVBQUMsQ0FBQztRQUVILE9BQU8sQ0FBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUVELCtCQUFHLEdBQUgsVUFBSSxDQUFDLEVBQUMsQ0FBQztRQUVILE9BQU8sQ0FBQyxHQUFFLENBQUMsQ0FBQztJQUNoQixDQUFDO0lBRUQsK0JBQUcsR0FBSCxVQUFJLENBQUMsRUFBQyxDQUFDO1FBRUgsT0FBTyxDQUFDLEdBQUMsQ0FBQyxDQUFDO0lBQ2YsQ0FBQztJQVlELGtDQUFNLEdBQU4sVUFBTyxFQUFFO1FBRUwsRUFBRSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FB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QUFVLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVNLG9CQUFJLEdBQVg7UUFFSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBRTNFLEVBQUUsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBQ0wsWUFBQztBQUFELENBeERBLEFBd0RDLENBeEQyQixFQUFFLENBQUMsY0FBYyxHQXdENUM7QUF4RGEsc0JBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmV4cG9ydCBjbGFzcyBWYWx1ZUNoYW5nZUFjdGlvbiBleHRlbmRzIGNjLkFjdGlvbkludGVydmFsXHJcbntcclxuICAgIFt4OiBzdHJpbmddOiBhbnk7XHJcbiAgICBzdGFydDphbnk7XHJcbiAgICBlbmQ6YW55O1xyXG4gICAgZGVsdGE6YW55O1xyXG4gICAgY2FsbGJhY2s6RnVuY3Rpb247XHJcbiAgICBjYWxsYmFja1RhcmdldCA6YW55O1xyXG5cclxuICAgIHN1Yih4LHkpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuICggeCAtIHkpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZCh4LHkpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHggK3k7XHJcbiAgICB9XHJcblxyXG4gICAgbXVsKHgseSlcclxuICAgIHtcclxuICAgICAgICByZXR1cm4geCp5O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKGR1cmF0aW9uLGZyb20sdG8sY2FsbGJhY2ssdGFyZ2V0PylcclxuICAgIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuZGVsdGEgPSB0aGlzLnN1Yih0byAsIGZyb20pO1xyXG4gICAgICAgIHRoaXMuc2V0RHVyYXRpb24oZHVyYXRpb24pO1xyXG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgICAgICB0aGlzLnN0YXJ0ID0gZnJvbTtcclxuICAgICAgICB0aGlzLmVuZCA9IHRvO1xyXG4gICAgICAgIHRoaXMuY2FsbGJhY2tUYXJnZXQgPSB0YXJnZXQ7XHJcbiAgICB9XHJcbiAgICB1cGRhdGUoZHQpXHJcbiAgICB7XHJcbiAgICAgICAgZHQgPSB0aGlzLl9jb21wdXRlRWFzZVRpbWUoZHQpO1xyXG4gICAgICAgIGxldCB2ID0gdGhpcy5hZGQodGhpcy5zdGFydCx0aGlzLm11bCh0aGlzLmRlbHRhLGR0KSlcclxuICAgICAgICB0aGlzLmNhbGxiYWNrLmNhbGwodGhpcy5jYWxsYmFja1RhcmdldCx2KTtcclxuICAgIH1cclxuICAgXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgVjJDaGFuZ2VBY3Rpb24gZXh0ZW5kcyBWYWx1ZUNoYW5nZUFjdGlvblxyXG57XHJcbiAgICBzdWIoeCx5KVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB4LnN1Yih4LHkpXHJcbiAgICB9XHJcblxyXG4gICAgYWRkKHgseSlcclxuICAgIHtcclxuICAgICAgICByZXR1cm4geC5hZGQoeCx5KVxyXG4gICAgfVxyXG5cclxuICAgIG11bCh4LHkpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHgubXVsKHgseSlcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCAgY2xhc3MgU2hha2UgZXh0ZW5kcyBjYy5BY3Rpb25JbnRlcnZhbFxyXG57XHJcbiBcclxuICAgIHByaXZhdGUgX2luaXRpYWxfeDpudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBfaW5pdGlhbF95Om51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIF9zdHJlbmd0aF94Om51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIF9zdHJlbmd0aF95Om51bWJlciA9IDA7XHJcbiBcclxuICAgIC8qKlxyXG4gICAgICogIOWIm+W7uuaKluWKqOWKqOeUu1xyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGR1cmF0aW9uICAgICDliqjnlLvmjIHnu63ml7bplb9cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzdHJlbmd0aF94ICAg5oqW5Yqo5bmF5bqm77yaIHjmlrnlkJFcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzdHJlbmd0aF95ICAg5oqW5Yqo5bmF5bqm77yaIHnmlrnlkJFcclxuICAgICAqIEByZXR1cm5zIHtTaGFrZX1cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGUoZHVyYXRpb246bnVtYmVyLHN0cmVuZ3RoX3g6bnVtYmVyLHN0cmVuZ3RoX3k6bnVtYmVyKTpTaGFrZVxyXG4gICAge1xyXG4gICAgICAgIGxldCBhY3Q6U2hha2UgPSBuZXcgU2hha2UoKTtcclxuICAgICAgICBhY3QuaW5pdFdpdGhEdXJhdGlvbiggZHVyYXRpb24sc3RyZW5ndGhfeCxzdHJlbmd0aF95ICk7XHJcbiAgICAgICAgcmV0dXJuIGFjdDtcclxuICAgIH1cclxuIFxyXG4gICAgcHVibGljIGluaXRXaXRoRHVyYXRpb24oZHVyYXRpb246bnVtYmVyLHN0cmVuZ3RoX3g6bnVtYmVyLHN0cmVuZ3RoX3k6bnVtYmVyKTpib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgY2MuQWN0aW9uSW50ZXJ2YWwucHJvdG90eXBlWydpbml0V2l0aER1cmF0aW9uJ10uYXBwbHkodGhpcyxhcmd1bWVudHMpO1xyXG4gICAgICAgIHRoaXMuX3N0cmVuZ3RoX3ggPSBzdHJlbmd0aF94O1xyXG4gICAgICAgIHRoaXMuX3N0cmVuZ3RoX3kgPSBzdHJlbmd0aF95O1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gXHJcbiAgICBwdWJsaWMgZmdSYW5nZVJhbmQobWluOm51bWJlcixtYXg6bnVtYmVyKTpudW1iZXJcclxuICAgIHtcclxuICAgICAgICBsZXQgcm5kOm51bWJlciA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgcmV0dXJuIHJuZCAqIChtYXggLSBtaW4pICsgbWluO1xyXG4gICAgfVxyXG4gXHJcbiAgICBwdWJsaWMgdXBkYXRlKHRpbWU6bnVtYmVyKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHJhbmR4ID0gdGhpcy5mZ1JhbmdlUmFuZCgtdGhpcy5fc3RyZW5ndGhfeCx0aGlzLl9zdHJlbmd0aF94KTtcclxuICAgICAgICBsZXQgcmFuZHkgPSB0aGlzLmZnUmFuZ2VSYW5kKC10aGlzLl9zdHJlbmd0aF95LHRoaXMuX3N0cmVuZ3RoX3kpO1xyXG4gICAgICAgIHRoaXMuZ2V0VGFyZ2V0KCkuc2V0UG9zaXRpb24ocmFuZHggKyB0aGlzLl9pbml0aWFsX3gscmFuZHkgKyB0aGlzLl9pbml0aWFsX3kpO1xyXG4gICAgfVxyXG4gXHJcbiAgICBwdWJsaWMgc3RhcnRXaXRoVGFyZ2V0KHRhcmdldDpjYy5Ob2RlKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgY2MuQWN0aW9uSW50ZXJ2YWwucHJvdG90eXBlWydzdGFydFdpdGhUYXJnZXQnXS5hcHBseSh0aGlzLGFyZ3VtZW50cyk7XHJcbiAgICAgICAgdGhpcy5faW5pdGlhbF94ID0gdGFyZ2V0Lng7XHJcbiAgICAgICAgdGhpcy5faW5pdGlhbF95ID0gdGFyZ2V0Lnk7XHJcbiAgICB9XHJcbiBcclxuICAgIHB1YmxpYyBzdG9wKCk6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZ2V0VGFyZ2V0KCkuc2V0UG9zaXRpb24obmV3IGNjLlZlYzIodGhpcy5faW5pdGlhbF94LHRoaXMuX2luaXRpYWxfeSkpO1xyXG4gXHJcbiAgICAgICAgY2MuQWN0aW9uSW50ZXJ2YWwucHJvdG90eXBlWydzdG9wJ10uYXBwbHkodGhpcyk7XHJcbiAgICB9XHJcbn1cclxuIl19