
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/plugin_boosts/utils/EventManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '334c9avVx5ILbx/6NU/H45V', 'EventManager');
// framework/plugin_boosts/utils/EventManager.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.event = void 0;
/**
* name
*/
var EventManager = /** @class */ (function () {
    function EventManager() {
        this._eventList = {};
    }
    EventManager.prototype.on = function (key, listen, target) {
        if (this._eventList[key] != null) {
            var array = this._eventList[key];
            array.push({ listen: listen, target: target });
        }
        else {
            var array = new Array();
            array.push({ listen: listen, target: target });
            this._eventList[key] = array;
        }
    };
    EventManager.prototype.off = function (key, listener, target) {
        if (listener != null && !(listener instanceof Function)) {
            target = listener;
            listener = null;
        }
        if (this._eventList[key] != null) {
            if (listener == null && target == null) {
                delete this._eventList[key];
            }
            else {
                var array = this._eventList[key];
                for (var i = array.length - 1; i >= 0; i--) {
                    if (listener != null && target != null) {
                        if (array[i].listen == listener && array[i].target == target) {
                            array.splice(i, 1);
                        }
                    }
                    else if (listener != null && array[i].listen == listener) {
                        array.splice(i, 1);
                    }
                    else if (target != null && array[i].target == target) {
                        array.splice(i, 1);
                    }
                }
            }
        }
    };
    EventManager.prototype.emit = function (tag) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        var sendOk = false;
        if (this._eventList[tag] != null) {
            var array = this._eventList[tag];
            console.log("emit message: ", tag, array.length);
            for (var i = 0; i < array.length; i++) {
                var obj = array[i];
                if (obj.target != null) {
                    if (obj.listen.apply(obj.target, params))
                        sendOk = true;
                }
                else {
                    if (obj.listen.apply(this, params))
                        sendOk = true;
                }
            }
        }
        return sendOk;
    };
    return EventManager;
}());
exports.event = new EventManager();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxwbHVnaW5fYm9vc3RzXFx1dGlsc1xcRXZlbnRNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0VBRUU7QUFDRDtJQUlDO1FBQ0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVNLHlCQUFFLEdBQVQsVUFBVSxHQUFVLEVBQUUsTUFBZ0IsRUFBRSxNQUFXO1FBQ2xELElBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLEVBQUM7WUFDL0IsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQztTQUM1QzthQUFJO1lBQ0osSUFBSSxLQUFLLEdBQUcsSUFBSSxLQUFLLEVBQU8sQ0FBQztZQUM3QixLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQztZQUMzQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztTQUM3QjtJQUNGLENBQUM7SUFFTSwwQkFBRyxHQUFWLFVBQVcsR0FBVyxFQUFFLFFBQWEsRUFBRSxNQUFXO1FBQ2pELElBQUcsUUFBUSxJQUFJLElBQUksSUFBSSxDQUFDLENBQUMsUUFBUSxZQUFZLFFBQVEsQ0FBQyxFQUFDO1lBQzFDLE1BQU0sR0FBRyxRQUFRLENBQUM7WUFDbEIsUUFBUSxHQUFHLElBQUksQ0FBQztTQUNuQjtRQUNWLElBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLEVBQUM7WUFDL0IsSUFBRyxRQUFRLElBQUksSUFBSSxJQUFJLE1BQU0sSUFBSSxJQUFJLEVBQUM7Z0JBQ3JDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUM1QjtpQkFBSTtnQkFDSixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQyxLQUFJLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUM7b0JBQ3pDLElBQUcsUUFBUSxJQUFJLElBQUksSUFBSSxNQUFNLElBQUksSUFBSSxFQUFDO3dCQUNyQyxJQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksUUFBUSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksTUFBTSxFQUFDOzRCQUMzRCxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzt5QkFDbkI7cUJBQ0Q7eUJBQUssSUFBRyxRQUFRLElBQUksSUFBSSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksUUFBUSxFQUFDO3dCQUN4RCxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztxQkFDbkI7eUJBQUssSUFBRyxNQUFNLElBQUksSUFBSSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksTUFBTSxFQUFDO3dCQUNwRCxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztxQkFDbkI7aUJBQ0Q7YUFDRDtTQUNEO0lBQ0YsQ0FBQztJQUVNLDJCQUFJLEdBQVgsVUFBWSxHQUFXO1FBQUUsZ0JBQWdCO2FBQWhCLFVBQWdCLEVBQWhCLHFCQUFnQixFQUFoQixJQUFnQjtZQUFoQiwrQkFBZ0I7O1FBQ3hDLElBQUksTUFBTSxHQUFXLEtBQUssQ0FBQztRQUMzQixJQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxFQUFDO1lBQy9CLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2pELEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFDO2dCQUNwQyxJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ25CLElBQUcsR0FBRyxDQUFDLE1BQU0sSUFBSSxJQUFJLEVBQUM7b0JBQ3JCLElBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUM7d0JBQ3RDLE1BQU0sR0FBRyxJQUFJLENBQUE7aUJBQ2Q7cUJBQ0c7b0JBQ0gsSUFBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDO3dCQUNoQyxNQUFNLEdBQUcsSUFBSSxDQUFBO2lCQUNkO2FBQ0Q7U0FDRDtRQUNELE9BQU8sTUFBTSxDQUFBO0lBQ2QsQ0FBQztJQUVGLG1CQUFDO0FBQUQsQ0FoRUEsQUFnRUMsSUFBQTtBQUVVLFFBQUEsS0FBSyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuKiBuYW1lIFxyXG4qL1xyXG5cdGNsYXNzIEV2ZW50TWFuYWdlciB7XHJcblxyXG5cdFx0cHJpdmF0ZSBfZXZlbnRMaXN0OiB7W2tleTpzdHJpbmddOkFycmF5PHtsaXN0ZW46RnVuY3Rpb24sIHRhcmdldDogYW55fT59O1xyXG5cclxuXHRcdHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuXHRcdFx0dGhpcy5fZXZlbnRMaXN0ID0ge307XHJcblx0XHR9XHJcblxyXG5cdFx0cHVibGljIG9uKGtleTpzdHJpbmcsIGxpc3RlbjogRnVuY3Rpb24sIHRhcmdldD86YW55KXtcclxuXHRcdFx0aWYodGhpcy5fZXZlbnRMaXN0W2tleV0gIT0gbnVsbCl7XHJcblx0XHRcdFx0bGV0IGFycmF5ID0gdGhpcy5fZXZlbnRMaXN0W2tleV07XHJcblx0XHRcdFx0YXJyYXkucHVzaCh7bGlzdGVuOiBsaXN0ZW4sIHRhcmdldDp0YXJnZXR9KTtcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0bGV0IGFycmF5ID0gbmV3IEFycmF5PGFueT4oKTtcclxuXHRcdFx0XHRhcnJheS5wdXNoKHtsaXN0ZW46bGlzdGVuLCB0YXJnZXQ6dGFyZ2V0fSk7XHJcblx0XHRcdFx0dGhpcy5fZXZlbnRMaXN0W2tleV0gPSBhcnJheTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHB1YmxpYyBvZmYoa2V5OiBzdHJpbmcsIGxpc3RlbmVyPzphbnksIHRhcmdldD86YW55KXtcclxuXHRcdFx0aWYobGlzdGVuZXIgIT0gbnVsbCAmJiAhKGxpc3RlbmVyIGluc3RhbmNlb2YgRnVuY3Rpb24pKXtcclxuICAgICAgICAgICAgICAgIHRhcmdldCA9IGxpc3RlbmVyO1xyXG4gICAgICAgICAgICAgICAgbGlzdGVuZXIgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcblx0XHRcdGlmKHRoaXMuX2V2ZW50TGlzdFtrZXldICE9IG51bGwpe1xyXG5cdFx0XHRcdGlmKGxpc3RlbmVyID09IG51bGwgJiYgdGFyZ2V0ID09IG51bGwpe1xyXG5cdFx0XHRcdFx0ZGVsZXRlIHRoaXMuX2V2ZW50TGlzdFtrZXldO1xyXG5cdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0bGV0IGFycmF5ID0gdGhpcy5fZXZlbnRMaXN0W2tleV07XHJcblx0XHRcdFx0XHRmb3IobGV0IGkgPSBhcnJheS5sZW5ndGggLSAxOyBpID49IDA7IGktLSl7XHJcblx0XHRcdFx0XHRcdGlmKGxpc3RlbmVyICE9IG51bGwgJiYgdGFyZ2V0ICE9IG51bGwpe1xyXG5cdFx0XHRcdFx0XHRcdGlmKGFycmF5W2ldLmxpc3RlbiA9PSBsaXN0ZW5lciAmJiBhcnJheVtpXS50YXJnZXQgPT0gdGFyZ2V0KXtcclxuXHRcdFx0XHRcdFx0XHRcdGFycmF5LnNwbGljZShpLCAxKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1lbHNlIGlmKGxpc3RlbmVyICE9IG51bGwgJiYgYXJyYXlbaV0ubGlzdGVuID09IGxpc3RlbmVyKXtcclxuXHRcdFx0XHRcdFx0XHRhcnJheS5zcGxpY2UoaSwgMSk7XHJcblx0XHRcdFx0XHRcdH1lbHNlIGlmKHRhcmdldCAhPSBudWxsICYmIGFycmF5W2ldLnRhcmdldCA9PSB0YXJnZXQpe1xyXG5cdFx0XHRcdFx0XHRcdGFycmF5LnNwbGljZShpLCAxKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHB1YmxpYyBlbWl0KHRhZzogc3RyaW5nLCAuLi5wYXJhbXM6IGFueVtdKXtcclxuXHRcdFx0bGV0IHNlbmRPazpib29sZWFuID0gZmFsc2U7XHJcblx0XHRcdGlmKHRoaXMuX2V2ZW50TGlzdFt0YWddICE9IG51bGwpe1xyXG5cdFx0XHRcdGxldCBhcnJheSA9IHRoaXMuX2V2ZW50TGlzdFt0YWddO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiZW1pdCBtZXNzYWdlOiBcIiAsdGFnLCBhcnJheS5sZW5ndGgpO1xyXG5cdFx0XHRcdGZvcihsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKyl7XHJcblx0XHRcdFx0XHRsZXQgb2JqID0gYXJyYXlbaV07XHJcblx0XHRcdFx0XHRpZihvYmoudGFyZ2V0ICE9IG51bGwpe1xyXG5cdFx0XHRcdFx0XHRpZihvYmoubGlzdGVuLmFwcGx5KG9iai50YXJnZXQsIHBhcmFtcykpXHJcblx0XHRcdFx0XHRcdFx0c2VuZE9rID0gdHJ1ZVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZWxzZXtcclxuXHRcdFx0XHRcdFx0aWYob2JqLmxpc3Rlbi5hcHBseSh0aGlzLCBwYXJhbXMpKVxyXG5cdFx0XHRcdFx0XHRcdHNlbmRPayA9IHRydWVcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHNlbmRPayBcclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxuXHRleHBvcnQgdmFyIGV2ZW50ID0gbmV3IEV2ZW50TWFuYWdlcigpOyJdfQ==