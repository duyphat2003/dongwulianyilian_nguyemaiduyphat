
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/plugin_boosts/gamesys/FSM.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '83f52qrCghNrKS6jOC/j6I0', 'FSM');
// framework/plugin_boosts/gamesys/FSM.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.State = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var State = /** @class */ (function () {
    function State(id, name) {
        this.__interval_callbacks = [];
        this.interval_id = 0;
        this.id = id;
        this.name = name;
    }
    State.prototype.onEnter = function (params) { };
    State.prototype.onExit = function () { };
    State.prototype.onUpdate = function (dt) { };
    //messages 
    State.prototype.on = function () { };
    State.prototype.off = function () { };
    State.prototype.clearIntervals = function () {
        this.__interval_callbacks.splice(0, this.__interval_callbacks.length);
    };
    State.prototype.setInterval = function (interval, callback, target) {
        var id = ++this.interval_id;
        var timer = 0;
        this.__interval_callbacks.push({ id: id, callback: callback, target: target, interval: interval, timer: timer });
        return id;
    };
    State.prototype.clearInterval = function (id) {
        this.__interval_callbacks.splice(this.__interval_callbacks.indexOf(id));
    };
    State.prototype.setTimeout = function (delay, callback, target) {
        var id = ++this.interval_id;
        var timer = 0;
        this.__interval_callbacks.push({ id: id, callback: callback, target: target, delay: delay, timer: timer });
        return id;
    };
    State.prototype.clearTimeout = function (id) {
        this.clearInterval(id);
    };
    State.prototype.invokeIntervals = function (dt) {
        for (var i = 0; i < this.__interval_callbacks.length; i++) {
            var element = this.__interval_callbacks[i];
            element.timer = element.timer + dt;
            if (element.interval) {
                if (element.timer >= element.interval) {
                    element.timer = 0;
                    // call
                    element.callback.call(element.target);
                }
            }
            else if (element.delay) {
                if (element.timer >= element.delay) {
                    // call
                    element.callback.call(element.target);
                    this.__interval_callbacks.splice(i);
                    i--;
                }
            }
        }
    };
    return State;
}());
exports.State = State;
var CustomState = /** @class */ (function (_super) {
    __extends(CustomState, _super);
    function CustomState(target, id, name, pattern) {
        var _this = _super.call(this, id, name) || this;
        var enterName = cc.js.formatStr(pattern, "onEnter", _this.name);
        var updateName = cc.js.formatStr(pattern, "onUpdate", _this.name);
        var exitName = cc.js.formatStr(pattern, "onExit", _this.name);
        _this.__target = target;
        _this.__enterFunc = _this.__target[enterName];
        _this.__updateFunc = _this.__target[updateName];
        _this.__exitFunc = _this.__target[exitName];
        return _this;
    }
    CustomState.prototype.onEnter = function (params) {
        this.clearIntervals();
        if (this.__enterFunc) {
            this.__enterFunc.call(this.__target, this, params);
        }
    };
    CustomState.prototype.onExit = function () {
        if (this.__exitFunc) {
            this.__exitFunc.call(this.__target, this);
        }
    };
    CustomState.prototype.onUpdate = function (dt) {
        this.invokeIntervals(dt);
        if (this.__updateFunc) {
            this.__updateFunc.call(this.__target, this, dt);
        }
    };
    return CustomState;
}(State));
var FSM = /** @class */ (function (_super) {
    __extends(FSM, _super);
    function FSM() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.timeElapsed = 0;
        _this._states = {};
        _this._isPaused = false;
        _this.log = false;
        return _this;
    }
    Object.defineProperty(FSM.prototype, "target", {
        get: function () {
            return this._target;
        },
        enumerable: false,
        configurable: true
    });
    FSM.prototype.init = function (target) {
        this._target = target;
        this.timeElapsed = 0;
    };
    FSM.prototype.getState = function (stateId) {
        return this._states[stateId];
    };
    FSM.prototype.getCurrentState = function () {
        return this.c;
    };
    FSM.prototype.getPreviousState = function () {
        return this.p;
    };
    FSM.prototype.addStates = function (states, callbackNamePattern) {
        if (callbackNamePattern === void 0) { callbackNamePattern = "%s_%sState"; }
        var keys = Object.keys(states);
        var enumLen = (keys.length / 2);
        this.namePattern = callbackNamePattern;
        for (var i = 0; i < enumLen; i++) {
            var key = keys[i];
            var value = states[key];
            this.addState(key, value);
        }
    };
    FSM.prototype.addState = function (id, name, enterCallback, exitCallback, updateCallback, target) {
        if (this.log)
            console.log("[FSM]" + this.target.__classname__ + "(" + this.target.name + ")" + " Add State :", id, name);
        var state = new CustomState(this.target, id, name, this.namePattern);
        this._states[id] = state;
        if (enterCallback)
            state.__enterFunc = enterCallback;
        if (exitCallback)
            state.__exitFunc = exitCallback;
        if (updateCallback)
            state.__updateFunc = updateCallback;
        if (target)
            state.__target = target;
    };
    /**
     * first state
     * @param: state index or State
     */
    FSM.prototype.enterState = function (stateId, params) {
        this.timeElapsed = 0;
        var state = this._states[stateId];
        this.c = state;
        state.onEnter(params);
        if (this.log)
            console.log("[FSM]" + this.target.__classname__ + " First State:", state.name);
    };
    FSM.prototype.revertState = function () {
        this.changeState(this.p.id);
    };
    FSM.prototype.pause = function () {
        this._isPaused = true;
    };
    FSM.prototype.resume = function () {
        this._isPaused = false;
    };
    FSM.prototype.resetCurrentState = function () {
        this.timeElapsed = 0;
        console.log(cc.js.formatStr("[FSM] %s reset currentState", this.target.__classname__));
        this.c.onExit();
        this.c.onEnter();
    };
    FSM.prototype.changeState = function (stateId, params) {
        var state = this._states[stateId];
        if (state == null) {
            console.warn("[FSM] invalid state for stateId " + stateId + " of : " + this.target.__classname__);
            return;
        }
        if (this._isPaused) {
            console.warn("[FSM] fsm is paused ! " + this.target.__classname__ + " changeState to <" + state.name + "> failed!");
            return;
        }
        if (stateId == this.c.id)
            return;
        this.timeElapsed = 0;
        this.c.onExit();
        this.p = this.c;
        this.c = state;
        if (this.log)
            console.log(cc.js.formatStr("[FSM] %s (%s): %s -> %s", this.target.__classname__, this.name, this.p.name, state.name));
        this.c.onEnter(params);
    };
    FSM.prototype.isInState = function (stateId) {
        return this.c == this._states[stateId];
    };
    FSM.prototype.update = function (dt) {
        if (this._isPaused)
            return;
        if (FSM.debug)
            dt = 0.016; // use real deta
        this.timeElapsed += dt;
        if (this.c)
            this.c.onUpdate(dt);
    };
    FSM.debug = false;
    return FSM;
}(cc.Component));
exports.default = FSM;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxwbHVnaW5fYm9vc3RzXFxnYW1lc3lzXFxGU00udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUUxQztJQUtJLGVBQVksRUFBRyxFQUFDLElBQUs7UUFZckIseUJBQW9CLEdBQUcsRUFBRSxDQUFBO1FBT3pCLGdCQUFXLEdBQVUsQ0FBQyxDQUFDO1FBakJuQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFDRCx1QkFBTyxHQUFQLFVBQVEsTUFBTyxJQUFFLENBQUM7SUFDbEIsc0JBQU0sR0FBTixjQUFTLENBQUM7SUFDVix3QkFBUSxHQUFSLFVBQVMsRUFBRSxJQUFFLENBQUM7SUFDZCxXQUFXO0lBQ1gsa0JBQUUsR0FBRixjQUFLLENBQUM7SUFDTixtQkFBRyxHQUFILGNBQU0sQ0FBQztJQUlQLDhCQUFjLEdBQWQ7UUFFSSxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDekUsQ0FBQztJQUlELDJCQUFXLEdBQVgsVUFBWSxRQUFRLEVBQUMsUUFBUSxFQUFDLE1BQU87UUFFakMsSUFBSSxFQUFFLEdBQUcsRUFBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzdCLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNkLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsRUFBQyxFQUFFLElBQUEsRUFBQyxRQUFRLFVBQUEsRUFBQyxNQUFNLFFBQUEsRUFBQyxRQUFRLFVBQUEsRUFBQyxLQUFLLE9BQUEsRUFBQyxDQUFDLENBQUM7UUFDcEUsT0FBTyxFQUFFLENBQUM7SUFD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QztRQUNoQixJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUNmLElBQUcsSUFBSSxDQUFDLEdBQUc7WUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLHlCQUF5QixFQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7UUFDeEgsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFM0IsQ0FBQztJQUVELHVCQUFTLEdBQVQsVUFBVSxPQUFPO1FBRWIsT0FBTyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDMUMsQ0FBQztJQUVELG9CQUFNLEdBQU4sVUFBTyxFQUFFO1FBRUwsSUFBRyxJQUFJLENBQUMsU0FBUztZQUFFLE9BQU87UUFDMUIsSUFBRyxHQUFHLENBQUMsS0FBSztZQUNSLEVBQUUsR0FBRyxLQUFLLENBQUUsQ0FBQyxnQkFBZ0I7UUFDakMsSUFBSSxDQUFDLFdBQVcsSUFBSSxFQUFFLENBQUM7UUFDdkIsSUFBRyxJQUFJLENBQUMsQ0FBQztZQUNMLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFUTSxTQUFLLEdBQUcsS0FBSyxDQUFDO0lBWXpCLFVBQUM7Q0F4SkQsQUF3SkMsQ0F4SmdDLEVBQUUsQ0FBQyxTQUFTLEdBd0o1QztrQkF4Sm9CLEdBQUciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5leHBvcnQgY2xhc3MgU3RhdGUgXHJcbntcclxuICAgIG5hbWU6c3RyaW5nO1xyXG4gICAgaWQ6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpZD8sbmFtZT8pXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB9XHJcbiAgICBvbkVudGVyKHBhcmFtcz8pe31cclxuICAgIG9uRXhpdCgpe31cclxuICAgIG9uVXBkYXRlKGR0KXt9XHJcbiAgICAvL21lc3NhZ2VzIFxyXG4gICAgb24oKXt9XHJcbiAgICBvZmYoKXt9XHJcblxyXG4gICAgX19pbnRlcnZhbF9jYWxsYmFja3MgPSBbXVxyXG5cclxuICAgIGNsZWFySW50ZXJ2YWxzKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLl9faW50ZXJ2YWxfY2FsbGJhY2tzLnNwbGljZSgwICx0aGlzLl9faW50ZXJ2YWxfY2FsbGJhY2tzLmxlbmd0aClcclxuICAgIH1cclxuXHJcbiAgICBpbnRlcnZhbF9pZDpudW1iZXIgPSAwO1xyXG5cclxuICAgIHNldEludGVydmFsKGludGVydmFsLGNhbGxiYWNrLHRhcmdldD8pXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGlkID0gKysgdGhpcy5pbnRlcnZhbF9pZDtcclxuICAgICAgICBsZXQgdGltZXIgPSAwO1xyXG4gICAgICAgIHRoaXMuX19pbnRlcnZhbF9jYWxsYmFja3MucHVzaCh7aWQsY2FsbGJhY2ssdGFyZ2V0LGludGVydmFsLHRpbWVyfSk7XHJcbiAgICAgICAgcmV0dXJuIGlkO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFySW50ZXJ2YWwoaWQpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5fX2ludGVydmFsX2NhbGxiYWNrcy5zcGxpY2UodGhpcy5fX2ludGVydmFsX2NhbGxiYWNrcy5pbmRleE9mKGlkKSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgc2V0VGltZW91dChkZWxheSxjYWxsYmFjayx0YXJnZXQ/KVxyXG4gICAge1xyXG4gICAgICAgIGxldCBpZCA9ICsrIHRoaXMuaW50ZXJ2YWxfaWQ7XHJcbiAgICAgICAgbGV0IHRpbWVyID0gMDtcclxuICAgICAgICB0aGlzLl9faW50ZXJ2YWxfY2FsbGJhY2tzLnB1c2goe2lkLGNhbGxiYWNrLHRhcmdldCxkZWxheSx0aW1lcn0pO1xyXG4gICAgICAgIHJldHVybiBpZDtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhclRpbWVvdXQoaWQpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5jbGVhckludGVydmFsKGlkKVxyXG4gICAgfVxyXG5cclxuICAgIGludm9rZUludGVydmFscyhkdClcclxuICAgIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX19pbnRlcnZhbF9jYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuX19pbnRlcnZhbF9jYWxsYmFja3NbaV07XHJcbiAgICAgICAgICAgIGVsZW1lbnQudGltZXIgPSBlbGVtZW50LnRpbWVyICsgZHQ7XHJcbiAgICAgICAgICAgIGlmKGVsZW1lbnQuaW50ZXJ2YWwpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmKGVsZW1lbnQudGltZXIgPj0gZWxlbWVudC5pbnRlcnZhbClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnRpbWVyID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjYWxsXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jYWxsYmFjay5jYWxsKGVsZW1lbnQudGFyZ2V0KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ZWxzZSBpZihlbGVtZW50LmRlbGF5KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZihlbGVtZW50LnRpbWVyID49IGVsZW1lbnQuZGVsYXkpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2FsbFxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2FsbGJhY2suY2FsbChlbGVtZW50LnRhcmdldClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9faW50ZXJ2YWxfY2FsbGJhY2tzLnNwbGljZShpKTtcclxuICAgICAgICAgICAgICAgICAgICBpIC0tO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBDdXN0b21TdGF0ZSBleHRlbmRzIFN0YXRlXHJcbntcclxuICAgIF9fZW50ZXJGdW5jOkZ1bmN0aW9uO1xyXG4gICAgX19leGl0RnVuYzpGdW5jdGlvbjtcclxuICAgIF9fdXBkYXRlRnVuYzpGdW5jdGlvbjtcclxuICAgIF9fdGFyZ2V0OmFueTtcclxuICAgIGNvbnN0cnVjdG9yKHRhcmdldCxpZCxuYW1lLHBhdHRlcm4pXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoaWQsbmFtZSk7XHJcbiAgICAgICAgbGV0IGVudGVyTmFtZSA9IGNjLmpzLmZvcm1hdFN0cihwYXR0ZXJuLFwib25FbnRlclwiLHRoaXMubmFtZSlcclxuICAgICAgICBsZXQgdXBkYXRlTmFtZSA9IGNjLmpzLmZvcm1hdFN0cihwYXR0ZXJuLFwib25VcGRhdGVcIix0aGlzLm5hbWUpXHJcbiAgICAgICAgbGV0IGV4aXROYW1lID0gY2MuanMuZm9ybWF0U3RyKHBhdHRlcm4sXCJvbkV4aXRcIix0aGlzLm5hbWUpXHJcbiAgICAgICAgdGhpcy5fX3RhcmdldCA9IHRhcmdldDtcclxuICAgICAgICB0aGlzLl9fZW50ZXJGdW5jID0gdGhpcy5fX3RhcmdldFtlbnRlck5hbWVdO1xyXG4gICAgICAgIHRoaXMuX191cGRhdGVGdW5jID0gdGhpcy5fX3RhcmdldFt1cGRhdGVOYW1lXTtcclxuICAgICAgICB0aGlzLl9fZXhpdEZ1bmMgPSB0aGlzLl9fdGFyZ2V0W2V4aXROYW1lXTtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIG9uRW50ZXIocGFyYW1zKXtcclxuICAgICAgICB0aGlzLmNsZWFySW50ZXJ2YWxzKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuX19lbnRlckZ1bmMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9fZW50ZXJGdW5jLmNhbGwodGhpcy5fX3RhcmdldCx0aGlzLHBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgb25FeGl0KCl7XHJcbiAgICAgICAgaWYgKHRoaXMuX19leGl0RnVuYylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX19leGl0RnVuYy5jYWxsKHRoaXMuX190YXJnZXQsdGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgb25VcGRhdGUoZHQpe1xyXG4gICAgICAgIHRoaXMuaW52b2tlSW50ZXJ2YWxzKGR0KTtcclxuICAgICAgICBpZiAodGhpcy5fX3VwZGF0ZUZ1bmMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9fdXBkYXRlRnVuYy5jYWxsKHRoaXMuX190YXJnZXQsdGhpcyxkdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRlNNIGV4dGVuZHMgY2MuQ29tcG9uZW50XHJcbntcclxuICAgIGM6U3RhdGU7XHJcbiAgICBwOlN0YXRlO1xyXG4gICAgX3RhcmdldDphbnk7XHJcblxyXG4gICAgdGltZUVsYXBzZWQ6bnVtYmVyID0gMDtcclxuXHJcbiAgICBfc3RhdGVzOntbaW5kZXg6bnVtYmVyXTpTdGF0ZSB9ID0ge31cclxuXHJcbiAgICBfaXNQYXVzZWQgPSBmYWxzZTtcclxuXHJcbiAgICBuYW1lUGF0dGVybjpzdHJpbmc7XHJcblxyXG4gICAgbG9nOmJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBnZXQgdGFyZ2V0KCk6YW55XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RhcmdldDtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KHRhcmdldDphbnkpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5fdGFyZ2V0ID0gdGFyZ2V0O1xyXG4gICAgICAgIHRoaXMudGltZUVsYXBzZWQgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFN0YXRlKHN0YXRlSWQpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlc1tzdGF0ZUlkXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDdXJyZW50U3RhdGUoKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNcclxuICAgIH1cclxuXHJcbiAgICBnZXRQcmV2aW91c1N0YXRlKClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgYWRkU3RhdGVzKHN0YXRlczphbnksY2FsbGJhY2tOYW1lUGF0dGVybiA9IFwiJXNfJXNTdGF0ZVwiKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBrZXlzID0gT2JqZWN0LmtleXMoc3RhdGVzKTtcclxuICAgICAgICBsZXQgZW51bUxlbiA9IChrZXlzLmxlbmd0aC8yKTtcclxuICAgICAgICB0aGlzLm5hbWVQYXR0ZXJuID0gY2FsbGJhY2tOYW1lUGF0dGVybjtcclxuICAgICAgICBmb3IodmFyIGkgPSAwO2kgPCBlbnVtTGVuO2krKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBrZXkgPSBrZXlzW2ldXHJcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IHN0YXRlc1trZXldO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5hZGRTdGF0ZShrZXksdmFsdWUpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFkZFN0YXRlKGlkLG5hbWUsZW50ZXJDYWxsYmFjaz8sZXhpdENhbGxiYWNrPyx1cGRhdGVDYWxsYmFjaz8sdGFyZ2V0PylcclxuICAgIHtcclxuICAgICAgICBpZih0aGlzLmxvZylcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJbRlNNXVwiK3RoaXMudGFyZ2V0Ll9fY2xhc3NuYW1lX18gKyBcIihcIisgdGhpcy50YXJnZXQubmFtZStcIilcIitcIiBBZGQgU3RhdGUgOlwiICxpZCwgbmFtZSlcclxuICAgICAgICBsZXQgc3RhdGUgPSBuZXcgQ3VzdG9tU3RhdGUodGhpcy50YXJnZXQsaWQsbmFtZSx0aGlzLm5hbWVQYXR0ZXJuKTtcclxuICAgICAgICB0aGlzLl9zdGF0ZXNbaWRdID0gc3RhdGU7XHJcbiAgICAgICAgaWYoZW50ZXJDYWxsYmFjaylcclxuICAgICAgICAgICAgc3RhdGUuX19lbnRlckZ1bmMgPSBlbnRlckNhbGxiYWNrO1xyXG4gICAgICAgIGlmKGV4aXRDYWxsYmFjaylcclxuICAgICAgICAgICAgc3RhdGUuX19leGl0RnVuYyA9IGV4aXRDYWxsYmFjaztcclxuICAgICAgICBpZih1cGRhdGVDYWxsYmFjaylcclxuICAgICAgICAgICAgc3RhdGUuX191cGRhdGVGdW5jID0gdXBkYXRlQ2FsbGJhY2s7XHJcbiAgICAgICAgaWYodGFyZ2V0KVxyXG4gICAgICAgICAgICBzdGF0ZS5fX3RhcmdldCA9IHRhcmdldDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGZpcnN0IHN0YXRlIFxyXG4gICAgICogQHBhcmFtOiBzdGF0ZSBpbmRleCBvciBTdGF0ZVxyXG4gICAgICovXHJcbiAgICBlbnRlclN0YXRlKHN0YXRlSWQ6bnVtYmVyLHBhcmFtcz8pXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy50aW1lRWxhcHNlZCA9IDBcclxuICAgICAgICBsZXQgc3RhdGUgPSB0aGlzLl9zdGF0ZXNbc3RhdGVJZF1cclxuICAgICAgICB0aGlzLmMgPSBzdGF0ZTtcclxuICAgICAgICBzdGF0ZS5vbkVudGVyKHBhcmFtcyk7XHJcbiAgICAgICAgaWYodGhpcy5sb2cpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW0ZTTV1cIit0aGlzLnRhcmdldC5fX2NsYXNzbmFtZV9fICtcIiBGaXJzdCBTdGF0ZTpcIiAsc3RhdGUubmFtZSlcclxuICAgIH1cclxuXHJcbiAgICByZXZlcnRTdGF0ZSgpXHJcbiAgICB7XHJcbiAgICBcdHRoaXMuY2hhbmdlU3RhdGUodGhpcy5wLmlkKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcGF1c2UoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuX2lzUGF1c2VkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXN1bWUoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuX2lzUGF1c2VkID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRDdXJyZW50U3RhdGUoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudGltZUVsYXBzZWQgPSAwXHJcbiAgICAgICAgY29uc29sZS5sb2coY2MuanMuZm9ybWF0U3RyKFwiW0ZTTV0gJXMgcmVzZXQgY3VycmVudFN0YXRlXCIsdGhpcy50YXJnZXQuX19jbGFzc25hbWVfXykpXHJcbiAgICAgICAgdGhpcy5jLm9uRXhpdCgpO1xyXG4gICAgICAgIHRoaXMuYy5vbkVudGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlU3RhdGUoc3RhdGVJZDpudW1iZXIscGFyYW1zPylcclxuICAgIHtcclxuICAgICAgICBsZXQgc3RhdGUgPSB0aGlzLl9zdGF0ZXNbc3RhdGVJZF1cclxuICAgICAgICBpZihzdGF0ZSA9PSBudWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiW0ZTTV0gaW52YWxpZCBzdGF0ZSBmb3Igc3RhdGVJZCBcIiArIHN0YXRlSWQgK1wiIG9mIDogXCIgKyAgdGhpcy50YXJnZXQuX19jbGFzc25hbWVfXylcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLl9pc1BhdXNlZCkgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJbRlNNXSBmc20gaXMgcGF1c2VkICEgXCIrdGhpcy50YXJnZXQuX19jbGFzc25hbWVfXytcIiBjaGFuZ2VTdGF0ZSB0byA8XCIrIHN0YXRlLm5hbWUgKyBcIj4gZmFpbGVkIVwiKVxyXG4gICAgICAgICAgICByZXR1cm4gXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHN0YXRlSWQgPT0gdGhpcy5jLmlkKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy50aW1lRWxhcHNlZCA9IDBcclxuICAgICAgICB0aGlzLmMub25FeGl0KCk7XHJcbiAgICAgICAgdGhpcy5wID0gdGhpcy5jO1xyXG4gICAgICAgIHRoaXMuYyA9IHN0YXRlO1xyXG4gICAgICAgIGlmKHRoaXMubG9nKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjYy5qcy5mb3JtYXRTdHIoXCJbRlNNXSAlcyAoJXMpOiAlcyAtPiAlc1wiLHRoaXMudGFyZ2V0Ll9fY2xhc3NuYW1lX18sdGhpcy5uYW1lLHRoaXMucC5uYW1lICwgc3RhdGUubmFtZSkpXHJcbiAgICAgICAgdGhpcy5jLm9uRW50ZXIocGFyYW1zKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBpc0luU3RhdGUoc3RhdGVJZClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jID09IHRoaXMuX3N0YXRlc1tzdGF0ZUlkXVxyXG4gICAgfVxyXG4gICAgc3RhdGljIGRlYnVnID0gZmFsc2U7XHJcbiAgICB1cGRhdGUoZHQpXHJcbiAgICB7XHJcbiAgICAgICAgaWYodGhpcy5faXNQYXVzZWQpIHJldHVybjtcclxuICAgICAgICBpZihGU00uZGVidWcpXHJcbiAgICAgICAgICAgIGR0ID0gMC4wMTYgOyAvLyB1c2UgcmVhbCBkZXRhXHJcbiAgICAgICAgdGhpcy50aW1lRWxhcHNlZCArPSBkdDtcclxuICAgICAgICBpZih0aGlzLmMpXHJcbiAgICAgICAgICAgIHRoaXMuYy5vblVwZGF0ZShkdCk7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbn0iXX0=