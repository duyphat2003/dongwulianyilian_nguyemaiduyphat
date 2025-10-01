
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/wxsdk/MoreGameComponent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '662f9RcpGtJGpMGll8qVj04', 'MoreGameComponent');
// framework/wxsdk/MoreGameComponent.ts

Object.defineProperty(exports, "__esModule", { value: true });
var MoreGameManager_1 = require("./MoreGameManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MoreGameComponent = /** @class */ (function (_super) {
    __extends(MoreGameComponent, _super);
    function MoreGameComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isManaged = true;
        _this.refreshInterval = 60;
        _this.priority_min = 50;
        _this._list = [];
        return _this;
    }
    Object.defineProperty(MoreGameComponent.prototype, "count", {
        get: function () { return 0; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MoreGameComponent.prototype, "manager", {
        get: function () {
            return MoreGameManager_1.default.instance;
        },
        enumerable: false,
        configurable: true
    });
    MoreGameComponent.prototype.requestTask = function () {
        var list = this.manager.getTasks(this.priority_min, this.count);
        this.manager.finishTasks(this._list);
        this.show(list);
        this.manager.startTasks(list);
    };
    MoreGameComponent.prototype.start = function () {
    };
    MoreGameComponent.prototype.onEnable = function () {
        this.schedule(this.requestTask, this.refreshInterval, cc.macro.REPEAT_FOREVER, 0);
    };
    MoreGameComponent.prototype.onDisable = function () {
        this.unschedule(this.requestTask);
    };
    MoreGameComponent.prototype.onShow = function () {
    };
    MoreGameComponent.prototype.show = function (list) {
        this._list = list;
        this.onShow();
    };
    Object.defineProperty(MoreGameComponent.prototype, "list", {
        get: function () {
            return this._list;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        property
    ], MoreGameComponent.prototype, "refreshInterval", void 0);
    __decorate([
        property
    ], MoreGameComponent.prototype, "priority_min", void 0);
    MoreGameComponent = __decorate([
        ccclass
    ], MoreGameComponent);
    return MoreGameComponent;
}(cc.Component));
exports.default = MoreGameComponent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFx3eHNka1xcTW9yZUdhbWVDb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFEQUEwRDtBQUVwRCxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUUxQztJQUErQyxxQ0FBWTtJQUEzRDtRQUFBLHFFQXlEQztRQXRERyxlQUFTLEdBQVcsSUFBSSxDQUFDO1FBR3pCLHFCQUFlLEdBQVcsRUFBRSxDQUFDO1FBRzdCLGtCQUFZLEdBQVcsRUFBRSxDQUFDO1FBRTFCLFdBQUssR0FBVSxFQUFFLENBQUE7O0lBOENyQixDQUFDO0lBNUNHLHNCQUFJLG9DQUFLO2FBQVQsY0FBWSxPQUFPLENBQUMsQ0FBQyxDQUFBLENBQUM7OztPQUFBO0lBRXRCLHNCQUFJLHNDQUFPO2FBQVg7WUFFSSxPQUFPLHlCQUFlLENBQUMsUUFBUSxDQUFDO1FBQ3BDLENBQUM7OztPQUFBO0lBRUQsdUNBQVcsR0FBWDtRQUVJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxpQ0FBSyxHQUFMO0lBR0EsQ0FBQztJQUVELG9DQUFRLEdBQVI7UUFFSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUMsSUFBSSxDQUFDLGVBQWUsRUFBQyxFQUFFLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBQyxDQUFDLENBQUMsQ0FBQTtJQUNsRixDQUFDO0lBRUQscUNBQVMsR0FBVDtRQUVJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxrQ0FBTSxHQUFOO0lBR0EsQ0FBQztJQUVELGdDQUFJLEdBQUosVUFBSyxJQUFJO1FBRUwsSUFBSSxDQUFDLEtBQUssR0FBSSxJQUFJLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxzQkFBSSxtQ0FBSTthQUFSO1lBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFBO1FBQ3JCLENBQUM7OztPQUFBO0lBbEREO1FBREMsUUFBUTs4REFDb0I7SUFHN0I7UUFEQyxRQUFROzJEQUNpQjtJQVRULGlCQUFpQjtRQURyQyxPQUFPO09BQ2EsaUJBQWlCLENBeURyQztJQUFELHdCQUFDO0NBekRELEFBeURDLENBekQ4QyxFQUFFLENBQUMsU0FBUyxHQXlEMUQ7a0JBekRvQixpQkFBaUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTW9yZUdhbWVNYW5hZ2VyLCB7IFRhc2sgfSBmcm9tIFwiLi9Nb3JlR2FtZU1hbmFnZXJcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb3JlR2FtZUNvbXBvbmVudCBleHRlbmRzIGNjLkNvbXBvbmVudFxyXG57XHJcbiAgICBfbWFuYWdlcjpNb3JlR2FtZU1hbmFnZXI7XHJcbiAgICBpc01hbmFnZWQ6Ym9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICByZWZyZXNoSW50ZXJ2YWw6IG51bWJlciA9IDYwO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcHJpb3JpdHlfbWluIDpudW1iZXIgPSA1MDtcclxuXHJcbiAgICBfbGlzdDpUYXNrW10gPSBbXVxyXG5cclxuICAgIGdldCBjb3VudCgpe3JldHVybiAwO31cclxuXHJcbiAgICBnZXQgbWFuYWdlcigpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIE1vcmVHYW1lTWFuYWdlci5pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICByZXF1ZXN0VGFzaygpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGxpc3QgPSB0aGlzLm1hbmFnZXIuZ2V0VGFza3ModGhpcy5wcmlvcml0eV9taW4sdGhpcy5jb3VudCk7XHJcbiAgICAgICAgdGhpcy5tYW5hZ2VyLmZpbmlzaFRhc2tzKHRoaXMuX2xpc3QpXHJcbiAgICAgICAgdGhpcy5zaG93KGxpc3QpO1xyXG4gICAgICAgIHRoaXMubWFuYWdlci5zdGFydFRhc2tzKGxpc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KClcclxuICAgIHtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBvbkVuYWJsZSgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLnJlcXVlc3RUYXNrLHRoaXMucmVmcmVzaEludGVydmFsLGNjLm1hY3JvLlJFUEVBVF9GT1JFVkVSLDApXHJcbiAgICB9XHJcblxyXG4gICAgb25EaXNhYmxlKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5yZXF1ZXN0VGFzayk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TaG93KClcclxuICAgIHtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBzaG93KGxpc3QpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5fbGlzdCA9ICBsaXN0O1xyXG4gICAgICAgIHRoaXMub25TaG93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGxpc3QoKTogVGFza1tdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbGlzdFxyXG4gICAgfVxyXG59Il19