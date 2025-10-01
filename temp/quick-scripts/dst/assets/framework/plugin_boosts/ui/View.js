
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/plugin_boosts/ui/View.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e1217OaHDFCEbPP4vjLJXLh', 'View');
// framework/plugin_boosts/ui/View.ts

Object.defineProperty(exports, "__esModule", { value: true });
var UIComponent_1 = require("./UIComponent");
var ViewManager_1 = require("./ViewManager");
var UIFunctions_1 = require("./UIFunctions");
var LanguageManager_1 = require("../../../Game/Scripts/LanguageManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var View = /** @class */ (function (_super) {
    __extends(View, _super);
    function View() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isDialog = false;
        _this.hasWidget = false;
        _this.opacity = 160;
        _this.childrenAnimation = false;
        _this.touchBlocker = null;
        _this.touchBlockerComp = null;
        _this.guideLabel = null;
        _this.startLabel = null;
        _this.ch_FontSize = 25;
        _this.vi_FontSize = 16;
        _this.eng_FontSize = 20;
        // @property
        // showAnimationName:string = "";
        // @property
        // hideAnimationName:string = "";
        // @property([cc.Component.EventHandler])
        // onShownEvents:cc.Component.EventHandler[] = [];
        // @property([cc.Component.EventHandler])
        // onHiddenEvents:cc.Component.EventHandler[] = [];
        _this.animations = [];
        _this._isHiding = false;
        return _this;
    }
    // isTouchEnabled: boolean = true;
    View.prototype.emit = function (event, msg) {
        event.emit(msg);
        // this.node.emit(msg);  
    };
    View.prototype.onEnable = function () {
        if (this.guideLabel == null || this.startLabel == null) {
            return;
        }
        switch (LanguageManager_1.default.instance.currentLanguage) {
            case LanguageManager_1.LanguageMode.CN:
                this.set_label_lang("连接相同的2个动物", "点击任意处关闭");
                this.set_label_FontSize(this.ch_FontSize);
                break;
            case LanguageManager_1.LanguageMode.VI:
                this.set_label_lang("Nối hai con vật giống hệt nhau.", "Nhấp vào bất kỳ đâu để đóng.");
                this.set_label_FontSize(this.vi_FontSize);
                break;
            case LanguageManager_1.LanguageMode.EN:
                this.set_label_lang("Connect two identical animals.", "Click anywhere to close.");
                this.set_label_FontSize(this.eng_FontSize);
                break;
        }
    };
    View.prototype.set_label_lang = function (guideLabelString, startLabelString) {
        this.guideLabel.string = guideLabelString;
        this.startLabel.string = startLabelString;
    };
    View.prototype.set_label_FontSize = function (fontSize) {
        this.guideLabel.fontSize = fontSize;
        this.startLabel.fontSize = fontSize;
    };
    View.prototype.call = function (event, exp) {
        // eval(exp);
        g.execScript(exp);
    };
    View.prototype.setDelegate = function (target) {
        this.target = target;
    };
    View.prototype.onLoad = function () {
        this.touchBlocker = new cc.Node();
        this.touchBlocker.name = "TouchBlocker";
        this.touchBlocker.width = 2000;
        this.touchBlocker.height = 2000;
        this.touchBlockerComp = this.touchBlocker.addComponent(cc.BlockInputEvents);
        this.node.addChild(this.touchBlocker, 1000);
        if (this.childrenAnimation) {
            this.animations = UIFunctions_1.default.getChildrenAnimations(this.node);
        }
        else {
            var anim = this.node.getComponent(cc.Animation);
            if (anim)
                this.animations.push(anim);
        }
        var components = this.getComponents(cc.Component);
        for (var i = 0; i < components.length; i++) {
            var comp = components[i];
            if (comp != this) {
                if (comp.onShown || comp.onHidden) {
                    this.target = comp;
                    break;
                }
            }
        }
    };
    View.prototype.start = function () {
        this.touchEnabled = true;
    };
    View.prototype.init = function (viewname) {
        this.name = viewname;
    };
    View.prototype.hideAnimationCallback = function () {
        this.node.active = this.visible;
        ViewManager_1.default.instance.checkViewStacks();
    };
    /**
     * //如果 实现了view的animation那么需要 animation 去做隐藏
     * 否则会不会有animtion ，系统 将直接 设置 active 为false
     */
    View.prototype.doHideAnimation = function () {
        // if (!this.isDialog)
        // {
        //todo is in hide animtion return ;
        // if(this.isInHideAnimation())return;
        this.node.active = true;
        this._isHiding = true;
        if (!UIFunctions_1.default.doHideAnimations(this.animations, this.hideAnimationCallback, this)) {
            this.node.active = false;
            this._isHiding = false;
        }
        console.log("[View] hide:", this.name);
        this._visibleDirty = false;
    };
    View.prototype.isInHideAnimation = function () {
        return this._isHiding;
    };
    View.prototype.onHidden = function () {
        this._visibleDirty = false;
        if (this.target && this.target.onHidden)
            this.target.onHidden();
        // cc.Component.EventHandler.emitEvents(this.onHiddenEvents,[params]);
    };
    View.prototype.hide = function () {
        // super.hide()
        //ViewManager remove dd
        this.touchEnabled = false;
        ViewManager_1.default.instance.hide(this.node);
    };
    Object.defineProperty(View.prototype, "visible", {
        get: function () { return this._visibleDirty; },
        enumerable: false,
        configurable: true
    });
    View.prototype.showAnimationNextFrame = function (callback) {
        var _this = this;
        this.scheduleOnce(function (_) {
            UIFunctions_1.default.doShowAnimations(_this.animations, callback);
        }, 0);
    };
    Object.defineProperty(View.prototype, "touchEnabled", {
        get: function () {
            return !this.touchBlocker.active;
        },
        set: function (b) {
            this.touchBlocker.active = !b;
        },
        enumerable: false,
        configurable: true
    });
    // setTouchEnabled(bEnabled){
    //     this.touchBlockerComp.enabled = bEnabled;
    //     // UIFunctions.setTouchEnabled(this.node,bEnabled);
    // }
    View.prototype.show = function () {
        var _this = this;
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        _super.prototype.show.call(this);
        console.log("[View] show:", this.name, params);
        UIFunctions_1.default.stopAnimations(this.animations);
        // call next frames 
        // this.showAnimationDelay()
        //确保在widget 更新结束后开始动画 ，
        return new Promise(function (resolve, reject) {
            var _a;
            var self = _this;
            var showFinishCallback = function () {
                if (!self.touchEnabled)
                    self.touchEnabled = true;
                resolve();
            };
            if (!_this.hasWidget) {
                UIFunctions_1.default.doShowAnimations(_this.animations, showFinishCallback);
            }
            else {
                _this.showAnimationNextFrame(showFinishCallback);
            }
            _this._visibleDirty = true;
            // Add this block
            var comp = _this.node.getComponent(_this.node.name);
            if (comp && comp.init) {
                comp.init(params[0]); // call init with first param
            }
            if (_this.target && _this.target.onShown) {
                (_a = _this.target).onShown.apply(_a, params);
            }
            // cc.Component.EventHandler.emitEvents(this.onShownEvents,[params]);
        });
    };
    __decorate([
        property
    ], View.prototype, "isDialog", void 0);
    __decorate([
        property
    ], View.prototype, "hasWidget", void 0);
    __decorate([
        property
    ], View.prototype, "opacity", void 0);
    __decorate([
        property
    ], View.prototype, "childrenAnimation", void 0);
    __decorate([
        property(cc.Label)
    ], View.prototype, "guideLabel", void 0);
    __decorate([
        property(cc.Label)
    ], View.prototype, "startLabel", void 0);
    __decorate([
        property({ type: cc.Integer })
    ], View.prototype, "ch_FontSize", void 0);
    __decorate([
        property({ type: cc.Integer })
    ], View.prototype, "vi_FontSize", void 0);
    __decorate([
        property({ type: cc.Integer })
    ], View.prototype, "eng_FontSize", void 0);
    View = __decorate([
        ccclass
    ], View);
    return View;
}(UIComponent_1.default));
exports.default = View;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxwbHVnaW5fYm9vc3RzXFx1aVxcVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQXdDO0FBQ3hDLDZDQUF3QztBQUV4Qyw2Q0FBd0M7QUFFeEMseUVBQXNGO0FBRWhGLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQWtDLHdCQUFXO0lBQTdDO1FBQUEscUVBc1FDO1FBNVBHLGNBQVEsR0FBVyxLQUFLLENBQUM7UUFHekIsZUFBUyxHQUFXLEtBQUssQ0FBQztRQUsxQixhQUFPLEdBQVUsR0FBRyxDQUFDO1FBR3JCLHVCQUFpQixHQUFXLEtBQUssQ0FBQztRQUdsQyxrQkFBWSxHQUFXLElBQUksQ0FBQztRQUM1QixzQkFBZ0IsR0FBd0IsSUFBSSxDQUFDO1FBRzdDLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBRzVCLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBRzVCLGlCQUFXLEdBQVcsRUFBRSxDQUFDO1FBRXpCLGlCQUFXLEdBQVcsRUFBRSxDQUFDO1FBRXpCLGtCQUFZLEdBQVcsRUFBRSxDQUFDO1FBMEMxQixZQUFZO1FBQ1osaUNBQWlDO1FBQ2pDLFlBQVk7UUFDWixpQ0FBaUM7UUFFakMseUNBQXlDO1FBQ3pDLGtEQUFrRDtRQUVsRCx5Q0FBeUM7UUFDekMsbURBQW1EO1FBRW5ELGdCQUFVLEdBQWtCLEVBQUUsQ0FBQztRQStEL0IsZUFBUyxHQUFXLEtBQUssQ0FBQzs7SUE0RzlCLENBQUM7SUFyUUcsa0NBQWtDO0lBQ2xDLG1CQUFJLEdBQUosVUFBSyxLQUFLLEVBQUMsR0FBRztRQUVWLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDakIseUJBQXlCO0lBQzNCLENBQUM7SUFrQ0QsdUJBQVEsR0FBUjtRQUNJLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLElB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QUFJLENBQUMsTUFBTSxDQUFBLENBQUMsT0FBTyxXQUFJLE1BQU0sRUFBRTthQUNsQztZQUNELHFFQUFxRTtRQUN6RSxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUEzUEQ7UUFEQyxRQUFROzBDQUNnQjtJQUd6QjtRQURDLFFBQVE7MkNBQ2lCO0lBSzFCO1FBREMsUUFBUTt5Q0FDWTtJQUdyQjtRQURDLFFBQVE7bURBQ3lCO0lBT2xDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NENBQ1M7SUFHNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs0Q0FDUztJQUc1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7NkNBQ047SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDOzZDQUNOO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQzs4Q0FDTDtJQXRDVCxJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBc1F4QjtJQUFELFdBQUM7Q0F0UUQsQUFzUUMsQ0F0UWlDLHFCQUFXLEdBc1E1QztrQkF0UW9CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVUlDb21wb25lbnQgZnJvbSBcIi4vVUlDb21wb25lbnRcIjtcclxuaW1wb3J0IFZpZXdNYW5hZ2VyIGZyb20gXCIuL1ZpZXdNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IGV2ZW50IH0gZnJvbSBcIi4uL3V0aWxzL0V2ZW50TWFuYWdlclwiO1xyXG5pbXBvcnQgVUlGdW5jdGlvbnMgZnJvbSBcIi4vVUlGdW5jdGlvbnNcIjtcclxuaW1wb3J0IHsgVG9hc3QgfSBmcm9tIFwiLi9Ub2FzdE1hbmFnZXJcIjtcclxuaW1wb3J0IExhbmd1YWdlTWFuYWdlciwgeyBMYW5ndWFnZU1vZGUgfSBmcm9tIFwiLi4vLi4vLi4vR2FtZS9TY3JpcHRzL0xhbmd1YWdlTWFuYWdlclwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3IGV4dGVuZHMgVUlDb21wb25lbnQge1xyXG4gICAgLy8gaXNUb3VjaEVuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgZW1pdChldmVudCxtc2cpXHJcbiAgICB7XHJcbiAgICAgICAgZXZlbnQuZW1pdChtc2cpXHJcbiAgICAgIC8vIHRoaXMubm9kZS5lbWl0KG1zZyk7ICBcclxuICAgIH1cclxuXHJcbiAgICBuYW1lOnN0cmluZztcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgaXNEaWFsb2c6Ym9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgaGFzV2lkZ2V0OmJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICB0YXJnZXQ6YW55O1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgb3BhY2l0eTpudW1iZXIgPSAxNjA7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBjaGlsZHJlbkFuaW1hdGlvbjpib29sZWFuID0gZmFsc2U7XHJcblxyXG5cclxuICAgIHRvdWNoQmxvY2tlcjpjYy5Ob2RlID0gbnVsbDtcclxuICAgIHRvdWNoQmxvY2tlckNvbXA6IGNjLkJsb2NrSW5wdXRFdmVudHMgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGd1aWRlTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBzdGFydExhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuSW50ZWdlciB9KVxyXG4gICAgY2hfRm9udFNpemU6IG51bWJlciA9IDI1O1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuSW50ZWdlciB9KVxyXG4gICAgdmlfRm9udFNpemU6IG51bWJlciA9IDE2O1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuSW50ZWdlciB9KVxyXG4gICAgZW5nX0ZvbnRTaXplOiBudW1iZXIgPSAyMDtcclxuXHJcbiAgICBvbkVuYWJsZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5ndWlkZUxhYmVsID09IG51bGwgfHwgdGhpcy5zdGFydExhYmVsID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzd2l0Y2ggKExhbmd1YWdlTWFuYWdlci5pbnN0YW5jZS5jdXJyZW50TGFuZ3VhZ2UpIHtcclxuICAgICAgICAgICAgY2FzZSBMYW5ndWFnZU1vZGUuQ046XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldF9sYWJlbF9sYW5nKFwi6L+e5o6l55u45ZCM55qEMuS4quWKqOeJqVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwi54K55Ye75Lu75oSP5aSE5YWz6ZetXCIsXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRfbGFiZWxfRm9udFNpemUodGhpcy5jaF9Gb250U2l6ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTGFuZ3VhZ2VNb2RlLlZJOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRfbGFiZWxfbGFuZyhcIk7hu5FpIGhhaSBjb24gduG6rXQgZ2nhu5FuZyBo4buHdCBuaGF1LlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiTmjhuqVwIHbDoG8gYuG6pXQga+G7syDEkcOidSDEkeG7gyDEkcOzbmcuXCIsICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldF9sYWJlbF9Gb250U2l6ZSh0aGlzLnZpX0ZvbnRTaXplKTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMYW5ndWFnZU1vZGUuRU46XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldF9sYWJlbF9sYW5nKFwiQ29ubmVjdCB0d28gaWRlbnRpY2FsIGFuaW1hbHMuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJDbGljayBhbnl3aGVyZSB0byBjbG9zZS5cIiwgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0X2xhYmVsX0ZvbnRTaXplKHRoaXMuZW5nX0ZvbnRTaXplKTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0X2xhYmVsX2xhbmcoXHJcbiAgICAgICAgZ3VpZGVMYWJlbFN0cmluZzogc3RyaW5nLFxyXG4gICAgICAgIHN0YXJ0TGFiZWxTdHJpbmc6IHN0cmluZyxcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuZ3VpZGVMYWJlbC5zdHJpbmcgPSBndWlkZUxhYmVsU3RyaW5nO1xyXG4gICAgICAgIHRoaXMuc3RhcnRMYWJlbC5zdHJpbmcgPSBzdGFydExhYmVsU3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIHNldF9sYWJlbF9Gb250U2l6ZShmb250U2l6ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5ndWlkZUxhYmVsLmZvbnRTaXplID0gZm9udFNpemU7XHJcbiAgICAgICAgdGhpcy5zdGFydExhYmVsLmZvbnRTaXplID0gZm9udFNpemU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQHByb3BlcnR5XHJcbiAgICAvLyBzaG93QW5pbWF0aW9uTmFtZTpzdHJpbmcgPSBcIlwiO1xyXG4gICAgLy8gQHByb3BlcnR5XHJcbiAgICAvLyBoaWRlQW5pbWF0aW9uTmFtZTpzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgIC8vIEBwcm9wZXJ0eShbY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcl0pXHJcbiAgICAvLyBvblNob3duRXZlbnRzOmNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXJbXSA9IFtdO1xyXG5cclxuICAgIC8vIEBwcm9wZXJ0eShbY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcl0pXHJcbiAgICAvLyBvbkhpZGRlbkV2ZW50czpjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyW10gPSBbXTtcclxuXHJcbiAgICBhbmltYXRpb25zOmNjLkFuaW1hdGlvbltdID0gW107XHJcblxyXG4gICAgY2FsbChldmVudCxleHA6c3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIC8vIGV2YWwoZXhwKTtcclxuICAgICAgICBnLmV4ZWNTY3JpcHQoZXhwKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXREZWxlZ2F0ZSh0YXJnZXQpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkKClcclxuICAgIHtcclxuXHJcbiAgICAgICAgdGhpcy50b3VjaEJsb2NrZXIgPSBuZXcgY2MuTm9kZSgpO1xyXG4gICAgICAgIHRoaXMudG91Y2hCbG9ja2VyLm5hbWUgPSBcIlRvdWNoQmxvY2tlclwiXHJcbiAgICAgICAgdGhpcy50b3VjaEJsb2NrZXIud2lkdGggPSAyMDAwO1xyXG4gICAgICAgIHRoaXMudG91Y2hCbG9ja2VyLmhlaWdodCA9IDIwMDA7XHJcbiAgICAgICAgdGhpcy50b3VjaEJsb2NrZXJDb21wID0gdGhpcy50b3VjaEJsb2NrZXIuYWRkQ29tcG9uZW50KGNjLkJsb2NrSW5wdXRFdmVudHMpXHJcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKHRoaXMudG91Y2hCbG9ja2VyLDEwMDApXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYodGhpcy5jaGlsZHJlbkFuaW1hdGlvbilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9ucyA9IFVJRnVuY3Rpb25zLmdldENoaWxkcmVuQW5pbWF0aW9ucyh0aGlzLm5vZGUpXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHZhciBhbmltID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pXHJcbiAgICAgICAgICAgIGlmKGFuaW0pXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGlvbnMucHVzaChhbmltKVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgY29tcG9uZW50cyA9IHRoaXMuZ2V0Q29tcG9uZW50cyhjYy5Db21wb25lbnQpO1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBjb21wb25lbnRzLmxlbmd0aDtpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgY29tcDphbnkgPSBjb21wb25lbnRzW2ldXHJcbiAgICAgICAgICAgIGlmKGNvbXAgIT0gdGhpcylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYoY29tcC5vblNob3dufHxjb21wLm9uSGlkZGVuKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0ID0gY29tcDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudG91Y2hFbmFibGVkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KHZpZXduYW1lKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IHZpZXduYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZGVBbmltYXRpb25DYWxsYmFjaygpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRoaXMudmlzaWJsZTtcclxuICAgICAgICBWaWV3TWFuYWdlci5pbnN0YW5jZS5jaGVja1ZpZXdTdGFja3MoKTtcclxuICAgIH1cclxuXHJcbiAgICBfaXNIaWRpbmc6Ym9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogLy/lpoLmnpwg5a6e546w5LqGdmlld+eahGFuaW1hdGlvbumCo+S5iOmcgOimgSBhbmltYXRpb24g5Y675YGa6ZqQ6JePXHJcbiAgICAgKiDlkKbliJnkvJrkuI3kvJrmnIlhbmltdGlvbiDvvIzns7vnu58g5bCG55u05o6lIOiuvue9riBhY3RpdmUg5Li6ZmFsc2VcclxuICAgICAqL1xyXG4gICAgZG9IaWRlQW5pbWF0aW9uKClcclxuICAgIHtcclxuICAgICAgICAvLyBpZiAoIXRoaXMuaXNEaWFsb2cpXHJcbiAgICAgICAgLy8ge1xyXG4gICAgICAgIC8vdG9kbyBpcyBpbiBoaWRlIGFuaW10aW9uIHJldHVybiA7XHJcbiAgICAgICAgLy8gaWYodGhpcy5pc0luSGlkZUFuaW1hdGlvbigpKXJldHVybjtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9pc0hpZGluZyA9IHRydWU7XHJcbiAgICAgICAgaWYoIVVJRnVuY3Rpb25zLmRvSGlkZUFuaW1hdGlvbnModGhpcy5hbmltYXRpb25zLHRoaXMuaGlkZUFuaW1hdGlvbkNhbGxiYWNrLHRoaXMpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLl9pc0hpZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhcIltWaWV3XSBoaWRlOlwiLHRoaXMubmFtZSk7XHJcbiAgICAgICAgdGhpcy5fdmlzaWJsZURpcnR5ID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaXNJbkhpZGVBbmltYXRpb24oKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXNIaWRpbmdcclxuICAgIH1cclxuICAgIFxyXG4gICAgb25IaWRkZW4oKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuX3Zpc2libGVEaXJ0eSA9IGZhbHNlO1xyXG4gICAgICAgIGlmICh0aGlzLnRhcmdldCAmJiB0aGlzLnRhcmdldC5vbkhpZGRlbilcclxuICAgICAgICAgICAgdGhpcy50YXJnZXQub25IaWRkZW4oKTtcclxuICAgICAgICAvLyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyLmVtaXRFdmVudHModGhpcy5vbkhpZGRlbkV2ZW50cyxbcGFyYW1zXSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZSgpe1xyXG4gICAgICAgIC8vIHN1cGVyLmhpZGUoKVxyXG4gICAgICAgIC8vVmlld01hbmFnZXIgcmVtb3ZlIGRkXHJcbiAgICAgICAgdGhpcy50b3VjaEVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICBWaWV3TWFuYWdlci5pbnN0YW5jZS5oaWRlKHRoaXMubm9kZSk7XHJcbiAgICB9XHJcblxyXG4gICAgX3Zpc2libGVEaXJ0eTpib29sZWFuO1xyXG4gICAgXHJcbiAgICBnZXQgdmlzaWJsZSgpe3JldHVybiB0aGlzLl92aXNpYmxlRGlydHk7fVxyXG5cclxuXHJcbiAgICBzaG93QW5pbWF0aW9uTmV4dEZyYW1lKGNhbGxiYWNrKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKF89PntcclxuICAgICAgICAgICAgVUlGdW5jdGlvbnMuZG9TaG93QW5pbWF0aW9ucyh0aGlzLmFuaW1hdGlvbnMsY2FsbGJhY2spXHJcbiAgICAgICAgfSwwKVxyXG4gICAgfVxyXG5cclxuICAgIGdldCB0b3VjaEVuYWJsZWQoKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAhdGhpcy50b3VjaEJsb2NrZXIuYWN0aXZlXHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHRvdWNoRW5hYmxlZChiKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudG91Y2hCbG9ja2VyLmFjdGl2ZSAgPSAhYlxyXG4gICAgfVxyXG5cclxuICAgIC8vIHNldFRvdWNoRW5hYmxlZChiRW5hYmxlZCl7XHJcbiAgICAvLyAgICAgdGhpcy50b3VjaEJsb2NrZXJDb21wLmVuYWJsZWQgPSBiRW5hYmxlZDtcclxuICAgIC8vICAgICAvLyBVSUZ1bmN0aW9ucy5zZXRUb3VjaEVuYWJsZWQodGhpcy5ub2RlLGJFbmFibGVkKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBzaG93KC4uLnBhcmFtcylcclxuICAgIHtcclxuICAgICAgICBzdXBlci5zaG93KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJbVmlld10gc2hvdzpcIix0aGlzLm5hbWUgLCBwYXJhbXMpO1xyXG4gICAgICAgIFVJRnVuY3Rpb25zLnN0b3BBbmltYXRpb25zKHRoaXMuYW5pbWF0aW9ucyk7XHJcbiAgICAgICBcclxuICAgICAgICAvLyBjYWxsIG5leHQgZnJhbWVzIFxyXG4gICAgICAgIC8vIHRoaXMuc2hvd0FuaW1hdGlvbkRlbGF5KClcclxuICAgICAgICAvL+ehruS/neWcqHdpZGdldCDmm7TmlrDnu5PmnZ/lkI7lvIDlp4vliqjnlLsg77yMXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLHJlamVjdCk9PntcclxuICAgICAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IHNob3dGaW5pc2hDYWxsYmFjayA9IGZ1bmN0aW9uKCkgXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmKCFzZWxmLnRvdWNoRW5hYmxlZClcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLnRvdWNoRW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoIXRoaXMuaGFzV2lkZ2V0KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBVSUZ1bmN0aW9ucy5kb1Nob3dBbmltYXRpb25zKHRoaXMuYW5pbWF0aW9ucyxzaG93RmluaXNoQ2FsbGJhY2spXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93QW5pbWF0aW9uTmV4dEZyYW1lKHNob3dGaW5pc2hDYWxsYmFjaylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl92aXNpYmxlRGlydHkgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgLy8gQWRkIHRoaXMgYmxvY2tcclxuICAgICAgICAgICAgbGV0IGNvbXAgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KHRoaXMubm9kZS5uYW1lKTtcclxuICAgICAgICAgICAgaWYgKGNvbXAgJiYgY29tcC5pbml0KSB7XHJcbiAgICAgICAgICAgICAgICBjb21wLmluaXQocGFyYW1zWzBdKTsgIC8vIGNhbGwgaW5pdCB3aXRoIGZpcnN0IHBhcmFtXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRhcmdldCAmJiB0aGlzLnRhcmdldC5vblNob3duKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldC5vblNob3duKC4uLnBhcmFtcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlci5lbWl0RXZlbnRzKHRoaXMub25TaG93bkV2ZW50cyxbcGFyYW1zXSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG4iXX0=