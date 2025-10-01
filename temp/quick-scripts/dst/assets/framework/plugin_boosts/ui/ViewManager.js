
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/plugin_boosts/ui/ViewManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c0f79TopoBICobmtQjrjutG', 'ViewManager');
// framework/plugin_boosts/ui/ViewManager.ts

Object.defineProperty(exports, "__esModule", { value: true });
var View_1 = require("./View");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TAG = "[ViewManager]";
var ViewManager = /** @class */ (function (_super) {
    __extends(ViewManager, _super);
    function ViewManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // onLoad () {}
        // baseDir:string = "assets/"
        _this._views = {};
        // 
        _this.modal = null;
        _this.modalOpacity = 160;
        return _this;
        // update (dt) {}
    }
    ViewManager_1 = ViewManager;
    ViewManager.prototype.onLoad = function () {
        ViewManager_1.instance = this;
        this.modal.active = false;
        this.modal.zIndex = 999;
        g.setGlobalInstance(this);
        // cc.game.addPersistRootNode(this.node);
        // this.node.getComponent(cc.Widget).target = cc.find("Canvas")
    };
    ViewManager.prototype.onEnable = function () {
    };
    ViewManager.prototype.onDestroy = function () {
        // cc.game.removePersistRootNode(this.node);
        for (var key in this._views) {
            delete this._views[key];
        }
    };
    ViewManager.prototype.start = function () {
        //load prefab
        // this.modal.active = false;
        // this.sprite = this.getComponent(cc.Sprite)
        // this.modal.zIndex = 999;
    };
    ViewManager.prototype.getVisibleDialog = function () {
        for (var name in this._views) {
            var view = this._views[name];
            if (view.isDialog) {
                if (this.isVisible(name)) {
                    return view;
                }
            }
        }
        return null;
    };
    ViewManager.prototype.hasVisibleDialog = function () {
        for (var name in this._views) {
            var view = this._views[name];
            if (view.isDialog) {
                if (this.isVisible(name)) {
                    return true;
                }
            }
        }
        return false;
    };
    ViewManager.prototype.isVisible = function (viewname) {
        var view = null;
        if (typeof (viewname) == "string")
            view = this._views[viewname];
        else
            view = viewname;
        //todo check type 
        if (view) {
            return view.node.active;
        }
        return false;
    };
    ViewManager.prototype.attachViewComp = function (existingView) {
        var viewComp = null;
        if (viewComp == null || viewComp == undefined) {
            viewComp = existingView.getComponent(View_1.default);
            if (viewComp == null) {
                viewComp = existingView.addComponent(View_1.default);
                viewComp.init(existingView.name);
            }
            this._views[existingView.name] = viewComp;
        }
        return viewComp;
    };
    ViewManager.prototype.showView = function (view) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        this.modal.active = view.isDialog;
        //check has popuped dialog and  all currentview is dialog show modal forcely.
        if (this.hasVisibleDialog() || view.isDialog) {
            this.modal.active = true;
        }
        if (view.isDialog) {
            this.modal.opacity = view.opacity;
        }
        // propagate params to dialog component
        var comp = view.node.getComponent(view.node.name);
        if (comp && comp.init) {
            comp.init(params[0]); // pass first param object
        }
        return view.show.apply(view, params);
    };
    ViewManager.prototype.showFromPrefab = function (prefab, prefabPath) {
        var params = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            params[_i - 2] = arguments[_i];
        }
        var view = this._views[prefabPath];
        if (view == null) {
            var node = cc.instantiate(prefab);
            view = node.getComponent(View_1.default);
            if (view == null) {
                view = node.addComponent(View_1.default);
                view.isDialog = true;
                //default is dialog
            }
            var widget = view.getComponent(cc.Widget);
            if (widget)
                widget.target = cc.find("Canvas");
            view.init(prefabPath);
            this._views[prefabPath] = view;
            if (view.isDialog) {
                this.node.addChild(node, 1000);
            }
            else {
                this.node.addChild(node, 1000);
            }
            // g.foreachNode(view.node,this.updateWidgets,this)
        }
        // node = view.node;
        this.node.color.setA(255);
        console.log(TAG, "show view:" + prefabPath);
        return this.showView.apply(this, __spreadArrays([view], params));
    };
    ViewManager.prototype.showFromPrefabPath = function (prefabPath) {
        var _this = this;
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        var view = this._views[prefabPath];
        if (view == null || view == undefined) {
            console.log("start load prefab:" + prefabPath);
            var beforeTime_1 = new Date().getTime();
            cc.loader.loadRes(prefabPath, cc.Prefab, function (e, prefab) {
                console.log(TAG, "prefab loaded : " + prefabPath + " " + (new Date().getTime() - beforeTime_1) + "ms");
                _this.showFromPrefab.apply(_this, __spreadArrays([prefab, prefabPath], params));
            });
        }
        else {
            // this.sprite.enabled = false;
            this.modal.active = view.isDialog;
            if (this.hasVisibleDialog() || view.isDialog) {
                this.modal.active = true;
                this.modal.opacity = view.opacity;
            }
            console.log(TAG, "show view:" + prefabPath, params);
            // let viewnode = view.node;
            // view.node.x = 0;
            // view.node.y = 0;
            return view.show.apply(view, params);
        }
    };
    ViewManager.prototype.preload = function (prefabPath) {
        var _this = this;
        var view = this._views[prefabPath];
        if (view == null || view == undefined) {
            cc.loader.loadRes(prefabPath, cc.Prefab, function (e, prefab) {
                console.log(TAG, "preload view" + prefabPath);
                var node = cc.instantiate(prefab);
                view = node.getComponent(View_1.default);
                var widget = view.getComponent(cc.Widget);
                if (widget)
                    widget.target = cc.find("Canvas");
                view.init(prefabPath);
                _this._views[prefabPath] = view;
                // this.scheduleOnce(_=>node.active = false,0);
                if (view.isDialog) {
                    _this.node.addChild(node, 1000);
                }
                else {
                    _this.node.addChild(node, 1000);
                }
                view.hide();
            });
        }
        else {
        }
    };
    // will enableTouch next show up
    ViewManager.prototype.disableTouch = function (viewNode) {
        var view = viewNode.getComponent(View_1.default);
        if (view) {
            view.touchEnabled = false;
        }
    };
    ViewManager.prototype.enableTouch = function (viewNode) {
        var view = viewNode.getComponent(View_1.default);
        if (view) {
            view.touchEnabled = true;
        }
    };
    ViewManager.prototype.show = function (view) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        // disable current view 's touch  
        if (typeof (view) == "string") {
            return this.showFromPrefabPath.apply(this, __spreadArrays([view], params));
        }
        else {
            if (view == null || view == undefined)
                return;
            if (view.node)
                view = view.node;
            var v = this.attachViewComp(view);
            return this.showView.apply(this, __spreadArrays([v], params));
        }
    };
    ViewManager.prototype.hide = function (viewname, playHideAnim) {
        if (playHideAnim === void 0) { playHideAnim = true; }
        if (typeof (viewname) != "string") {
            // get view name 
            if (viewname == null || viewname == undefined)
                return;
            this.attachViewComp(viewname);
            viewname = viewname.name;
        }
        var view = this._views[viewname];
        if (view != null && view != undefined) {
            view.node.active = false;
            if (view.isDialog) {
                //todo: should support dialog hide animtion  later 
                this.modal.active = false;
            }
            if (this.hasVisibleDialog()) {
                this.modal.active = true;
            }
            // if(view.isInHideAnimation())
            //     return;
            // view.hide();
            if (playHideAnim)
                view.doHideAnimation();
            view.onHidden();
        }
    };
    ViewManager.prototype.checkViewStacks = function () {
        var dialog = this.getVisibleDialog();
        if (dialog) {
            this.modal.active = true;
            this.modal.opacity = dialog.opacity;
        }
    };
    ViewManager.prototype.hideAll = function () {
        for (var viewname in this._views) {
            // let view = this._views[viewname]
            this.hide(viewname);
        }
    };
    var ViewManager_1;
    __decorate([
        property(cc.Node)
    ], ViewManager.prototype, "modal", void 0);
    __decorate([
        property
    ], ViewManager.prototype, "modalOpacity", void 0);
    ViewManager = ViewManager_1 = __decorate([
        ccclass
    ], ViewManager);
    return ViewManager;
}(cc.Component));
exports.default = ViewManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxwbHVnaW5fYm9vc3RzXFx1aVxcVmlld01hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtCQUEwQjtBQUdwQixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUUxQyxJQUFJLEdBQUcsR0FBVSxlQUFlLENBQUE7QUFFaEM7SUFBeUMsK0JBQVk7SUFBckQ7UUFBQSxxRUErU0M7UUEzU0csZUFBZTtRQUVmLDZCQUE2QjtRQUU3QixZQUFNLEdBQXlCLEVBQUUsQ0FBQTtRQUVyQyxHQUFHO1FBRUMsV0FBSyxHQUFXLElBQUksQ0FBQztRQUdyQixrQkFBWSxHQUFVLEdBQUcsQ0FBQzs7UUErUjFCLGlCQUFpQjtJQUNyQixDQUFDO29CQS9Tb0IsV0FBVztJQWtCNUIsNEJBQU0sR0FBTjtRQUVJLGFBQVcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUMxQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDeEIsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLHlDQUF5QztRQUN6QywrREFBK0Q7SUFDbkUsQ0FBQztJQUVELDhCQUFRLEdBQVI7SUFHQSxDQUFDO0lBRUQsK0JBQVMsR0FBVDtRQUVJLDRDQUE0QztRQUM1QyxLQUFJLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUM7WUFDdkIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzNCO0lBQ0wsQ0FBQztJQUVELDJCQUFLLEdBQUw7UUFDSSxhQUFhO1FBRWIsNkJBQTZCO1FBQzdCLDZDQUE2QztRQUM3QywyQkFBMkI7SUFDL0IsQ0FBQztJQUNPLHNDQUFnQixHQUF4QjtR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ZUFBZSxFQUFFLENBQUM7WUFDM0IsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ25CO0lBQ0wsQ0FBQztJQUVELHFDQUFlLEdBQWY7UUFFSSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQTtRQUNwQyxJQUFHLE1BQU0sRUFDVDtZQUNJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUN6QixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1NBQ3ZDO0lBQ0wsQ0FBQztJQUVELDZCQUFPLEdBQVA7UUFFSSxLQUFLLElBQUksUUFBUSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUM7WUFDN0IsbUNBQW1DO1lBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDdkI7SUFDTCxDQUFDOztJQWhTRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNHO0lBR3JCO1FBREMsUUFBUTtxREFDaUI7SUFmVCxXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBK1MvQjtJQUFELGtCQUFDO0NBL1NELEFBK1NDLENBL1N3QyxFQUFFLENBQUMsU0FBUyxHQStTcEQ7a0JBL1NvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZpZXcgZnJvbSBcIi4vVmlld1wiO1xyXG5pbXBvcnQgeyBUb2FzdCB9IGZyb20gXCIuL1RvYXN0TWFuYWdlclwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG52YXIgVEFHOnN0cmluZyA9IFwiW1ZpZXdNYW5hZ2VyXVwiXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXdNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuICAgIHN0YXRpYyBpbnN0YW5jZTpWaWV3TWFuYWdlcjtcclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIC8vIGJhc2VEaXI6c3RyaW5nID0gXCJhc3NldHMvXCJcclxuXHJcbiAgICBfdmlld3M6e1tpbmRleDpzdHJpbmddOlZpZXd9ID0ge31cclxuXHJcbi8vIFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBtb2RhbDpjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIG1vZGFsT3BhY2l0eTpudW1iZXIgPSAxNjA7XHJcblxyXG5cclxuICAgIG9uTG9hZCgpXHJcbiAgICB7XHJcbiAgICAgICAgVmlld01hbmFnZXIuaW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMubW9kYWwuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5tb2RhbC56SW5kZXggPSA5OTk7XHJcbiAgICAgICAgZy5zZXRHbG9iYWxJbnN0YW5jZSh0aGlzKTtcclxuICAgICAgICAvLyBjYy5nYW1lLmFkZFBlcnNpc3RSb290Tm9kZSh0aGlzLm5vZGUpO1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS50YXJnZXQgPSBjYy5maW5kKFwiQ2FudmFzXCIpXHJcbiAgICB9XHJcblxyXG4gICAgb25FbmFibGUoKVxyXG4gICAge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gY2MuZ2FtZS5yZW1vdmVQZXJzaXN0Um9vdE5vZGUodGhpcy5ub2RlKTtcclxuICAgICAgICBmb3IodmFyIGtleSBpbiB0aGlzLl92aWV3cyl7XHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl92aWV3c1trZXldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgLy9sb2FkIHByZWZhYlxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIHRoaXMubW9kYWwuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgLy8gdGhpcy5zcHJpdGUgPSB0aGlzLmdldENvbXBvbmVudChjYy5TcHJpdGUpXHJcbiAgICAgICAgLy8gdGhpcy5tb2RhbC56SW5kZXggPSA5OTk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGdldFZpc2libGVEaWFsb2coKVxyXG4gICAge1xyXG4gICAgICAgIGZvcih2YXIgbmFtZSBpbiB0aGlzLl92aWV3cylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCB2aWV3ID0gdGhpcy5fdmlld3NbbmFtZV1cclxuICAgICAgICAgICAgaWYodmlldy5pc0RpYWxvZylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNWaXNpYmxlKG5hbWUpKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2aWV3O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhhc1Zpc2libGVEaWFsb2coKVxyXG4gICAge1xyXG4gICAgICAgIGZvcih2YXIgbmFtZSBpbiB0aGlzLl92aWV3cylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCB2aWV3ID0gdGhpcy5fdmlld3NbbmFtZV1cclxuICAgICAgICAgICAgaWYodmlldy5pc0RpYWxvZylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNWaXNpYmxlKG5hbWUpKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNWaXNpYmxlKHZpZXduYW1lKVxyXG4gICAge1xyXG4gICAgICAgIGxldCB2aWV3ID0gbnVsbDtcclxuICAgICAgICBpZiAodHlwZW9mKHZpZXduYW1lKSA9PSBcInN0cmluZ1wiKVxyXG4gICAgICAgICAgICB2aWV3ID0gdGhpcy5fdmlld3Nbdmlld25hbWVdXHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB2aWV3ID0gdmlld25hbWU7XHJcbiAgICAgICAgLy90b2RvIGNoZWNrIHR5cGUgXHJcbiAgICAgICAgaWYgKHZpZXcpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdmlldy5ub2RlLmFjdGl2ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhdHRhY2hWaWV3Q29tcChleGlzdGluZ1ZpZXc6Y2MuTm9kZSk6Vmlld1xyXG4gICAge1xyXG4gICAgICAgIGxldCB2aWV3Q29tcCA9IG51bGw7XHJcbiAgICAgICAgaWYodmlld0NvbXAgPT0gbnVsbHx8IHZpZXdDb21wID09IHVuZGVmaW5lZClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZpZXdDb21wID0gZXhpc3RpbmdWaWV3LmdldENvbXBvbmVudChWaWV3KTtcclxuICAgICAgICAgICAgaWYodmlld0NvbXAgPT0gbnVsbClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdmlld0NvbXAgPSBleGlzdGluZ1ZpZXcuYWRkQ29tcG9uZW50KFZpZXcpO1xyXG4gICAgICAgICAgICAgICAgdmlld0NvbXAuaW5pdChleGlzdGluZ1ZpZXcubmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fdmlld3NbZXhpc3RpbmdWaWV3Lm5hbWVdID0gdmlld0NvbXA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2aWV3Q29tcDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNob3dWaWV3KHZpZXcsLi4ucGFyYW1zKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubW9kYWwuYWN0aXZlID0gdmlldy5pc0RpYWxvZztcclxuICAgICAgICAvL2NoZWNrIGhhcyBwb3B1cGVkIGRpYWxvZyBhbmQgIGFsbCBjdXJyZW50dmlldyBpcyBkaWFsb2cgc2hvdyBtb2RhbCBmb3JjZWx5LlxyXG4gICAgICAgIGlmICh0aGlzLmhhc1Zpc2libGVEaWFsb2coKSB8fCB2aWV3LmlzRGlhbG9nKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5tb2RhbC5hY3RpdmUgPSAgdHJ1ZTsgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHZpZXcuaXNEaWFsb2cpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm1vZGFsLm9wYWNpdHkgPSB2aWV3Lm9wYWNpdHk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBwcm9wYWdhdGUgcGFyYW1zIHRvIGRpYWxvZyBjb21wb25lbnRcclxuICAgICAgICBsZXQgY29tcCA9IHZpZXcubm9kZS5nZXRDb21wb25lbnQodmlldy5ub2RlLm5hbWUpO1xyXG4gICAgICAgIGlmIChjb21wICYmIGNvbXAuaW5pdCkge1xyXG4gICAgICAgICAgICBjb21wLmluaXQocGFyYW1zWzBdKTsgLy8gcGFzcyBmaXJzdCBwYXJhbSBvYmplY3RcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHZpZXcuc2hvdyguLi5wYXJhbXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dGcm9tUHJlZmFiKHByZWZhYjpjYy5QcmVmYWIscHJlZmFiUGF0aDpzdHJpbmcgLC4uLnBhcmFtcylcclxuICAgIHtcclxuICAgICAgICBsZXQgdmlldyA9IHRoaXMuX3ZpZXdzW3ByZWZhYlBhdGhdO1xyXG4gICAgICAgIGlmKHZpZXcgPT0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKVxyXG4gICAgICAgICAgICB2aWV3ID0gbm9kZS5nZXRDb21wb25lbnQoVmlldylcclxuICAgICAgICAgICAgaWYodmlldyA9PSBudWxsKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2aWV3ID0gbm9kZS5hZGRDb21wb25lbnQoVmlldyk7XHJcbiAgICAgICAgICAgICAgICB2aWV3LmlzRGlhbG9nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIC8vZGVmYXVsdCBpcyBkaWFsb2dcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgd2lkZ2V0ID0gdmlldy5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KTtcclxuICAgICAgICAgICAgaWYod2lkZ2V0KVxyXG4gICAgICAgICAgICAgICAgd2lkZ2V0LnRhcmdldCA9IGNjLmZpbmQoXCJDYW52YXNcIilcclxuICAgICAgICAgICAgdmlldy5pbml0KHByZWZhYlBhdGgpO1xyXG4gICAgICAgICAgICB0aGlzLl92aWV3c1twcmVmYWJQYXRoXSA9IHZpZXc7XHJcbiAgICAgICAgICAgIGlmKHZpZXcuaXNEaWFsb2cpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChub2RlLDEwMDApO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChub2RlLDEwMDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGcuZm9yZWFjaE5vZGUodmlldy5ub2RlLHRoaXMudXBkYXRlV2lkZ2V0cyx0aGlzKVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBub2RlID0gdmlldy5ub2RlO1xyXG4gICAgICAgIHRoaXMubm9kZS5jb2xvci5zZXRBKDI1NSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coVEFHLFwic2hvdyB2aWV3OlwiICsgcHJlZmFiUGF0aCApXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2hvd1ZpZXcodmlldywuLi5wYXJhbXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dGcm9tUHJlZmFiUGF0aChwcmVmYWJQYXRoOnN0cmluZywuLi5wYXJhbXMpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHZpZXcgPSB0aGlzLl92aWV3c1twcmVmYWJQYXRoXVxyXG4gICAgICAgIGlmKHZpZXcgPT0gbnVsbCB8fHZpZXcgPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdGFydCBsb2FkIHByZWZhYjpcIiArcHJlZmFiUGF0aClcclxuICAgICAgICAgICAgbGV0IGJlZm9yZVRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMocHJlZmFiUGF0aCxjYy5QcmVmYWIsKGUscHJlZmFiOmNjLlByZWZhYikgPT57XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhUQUcsXCJwcmVmYWIgbG9hZGVkIDogXCIrIHByZWZhYlBhdGggK1wiIFwiKyAgKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gYmVmb3JlVGltZSkgK1wibXNcIilcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0Zyb21QcmVmYWIocHJlZmFiLHByZWZhYlBhdGgsLi4ucGFyYW1zKTtcclxuICAgICAgICAgICAgfSkgXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuc3ByaXRlLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5tb2RhbC5hY3RpdmUgPSB2aWV3LmlzRGlhbG9nO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5oYXNWaXNpYmxlRGlhbG9nKCkgfHwgdmlldy5pc0RpYWxvZylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb2RhbC5hY3RpdmUgPSAgdHJ1ZTsgICAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tb2RhbC5vcGFjaXR5ID0gdmlldy5vcGFjaXR5OyAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhUQUcsXCJzaG93IHZpZXc6XCIgKyBwcmVmYWJQYXRoICxwYXJhbXMpXHJcbiAgICAgICAgICAgIC8vIGxldCB2aWV3bm9kZSA9IHZpZXcubm9kZTtcclxuICAgICAgICAgICAgLy8gdmlldy5ub2RlLnggPSAwO1xyXG4gICAgICAgICAgICAvLyB2aWV3Lm5vZGUueSA9IDA7XHJcbiAgICAgICAgICAgIHJldHVybiAgdmlldy5zaG93KC4uLnBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByZWxvYWQocHJlZmFiUGF0aDpzdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHZpZXcgPSB0aGlzLl92aWV3c1twcmVmYWJQYXRoXVxyXG4gICAgICAgIGlmKHZpZXcgPT0gbnVsbCB8fHZpZXcgPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMocHJlZmFiUGF0aCxjYy5QcmVmYWIsKGUscHJlZmFiOmNjLlByZWZhYikgPT57XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhUQUcsXCJwcmVsb2FkIHZpZXdcIisgcHJlZmFiUGF0aClcclxuICAgICAgICAgICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKVxyXG4gICAgICAgICAgICAgICAgdmlldyA9IG5vZGUuZ2V0Q29tcG9uZW50KFZpZXcpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHdpZGdldCA9IHZpZXcuZ2V0Q29tcG9uZW50KGNjLldpZGdldCk7XHJcbiAgICAgICAgICAgICAgICBpZih3aWRnZXQpXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkZ2V0LnRhcmdldCA9IGNjLmZpbmQoXCJDYW52YXNcIilcclxuICAgICAgICAgICAgICAgIHZpZXcuaW5pdChwcmVmYWJQYXRoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3ZpZXdzW3ByZWZhYlBhdGhdID0gdmlldztcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKF89Pm5vZGUuYWN0aXZlID0gZmFsc2UsMCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodmlldy5pc0RpYWxvZylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobm9kZSwxMDAwKTtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChub2RlLDEwMDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmlldy5oaWRlKCk7XHJcbiAgICAgICAgICAgIH0pIFxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyB3aWxsIGVuYWJsZVRvdWNoIG5leHQgc2hvdyB1cFxyXG4gICAgZGlzYWJsZVRvdWNoKHZpZXdOb2RlKVxyXG4gICAge1xyXG4gICAgICAgIGxldCB2aWV3ID0gdmlld05vZGUuZ2V0Q29tcG9uZW50KFZpZXcpXHJcbiAgICAgICAgaWYodmlldylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZpZXcudG91Y2hFbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGVuYWJsZVRvdWNoKHZpZXdOb2RlKVxyXG4gICAge1xyXG4gICAgICAgIGxldCB2aWV3ID0gdmlld05vZGUuZ2V0Q29tcG9uZW50KFZpZXcpXHJcbiAgICAgICAgaWYodmlldylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZpZXcudG91Y2hFbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHNob3codmlldywgLi4ucGFyYW1zKVxyXG4gICAge1xyXG4gICAgICAgIC8vIGRpc2FibGUgY3VycmVudCB2aWV3ICdzIHRvdWNoICBcclxuICAgICAgICBpZiAodHlwZW9mKHZpZXcpID09IFwic3RyaW5nXCIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zaG93RnJvbVByZWZhYlBhdGgodmlldywuLi5wYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBpZiAodmlldyA9PSBudWxsfHwgdmlldyA9PSB1bmRlZmluZWQpICByZXR1cm47XHJcbiAgICAgICAgICAgIGlmKHZpZXcubm9kZSkgdmlldyA9IHZpZXcubm9kZTtcclxuICAgICAgICAgICAgbGV0IHYgPSB0aGlzLmF0dGFjaFZpZXdDb21wKHZpZXcpXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNob3dWaWV3KHYsLi4ucGFyYW1zKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGhpZGUodmlld25hbWUscGxheUhpZGVBbmltID0gdHJ1ZSlcclxuICAgIHtcclxuICAgICAgICBpZih0eXBlb2Yodmlld25hbWUpICE9IFwic3RyaW5nXCIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBnZXQgdmlldyBuYW1lIFxyXG4gICAgICAgICAgICBpZiAodmlld25hbWUgPT0gbnVsbHx8IHZpZXduYW1lID09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICAgICAgICAgICB0aGlzLmF0dGFjaFZpZXdDb21wKHZpZXduYW1lKVxyXG4gICAgICAgICAgICB2aWV3bmFtZSA9IHZpZXduYW1lLm5hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB2aWV3ID0gdGhpcy5fdmlld3Nbdmlld25hbWVdXHJcbiAgICAgICAgaWYodmlldyAhPSBudWxsICYmIHZpZXcgIT0gdW5kZWZpbmVkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmlldy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAodmlldy5pc0RpYWxvZyApe1xyXG4gICAgICAgICAgICAgICAgLy90b2RvOiBzaG91bGQgc3VwcG9ydCBkaWFsb2cgaGlkZSBhbmltdGlvbiAgbGF0ZXIgXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGFsLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHRoaXMuaGFzVmlzaWJsZURpYWxvZygpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGFsLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gaWYodmlldy5pc0luSGlkZUFuaW1hdGlvbigpKVxyXG4gICAgICAgICAgICAvLyAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAvLyB2aWV3LmhpZGUoKTtcclxuICAgICAgICAgICAgaWYocGxheUhpZGVBbmltIClcclxuICAgICAgICAgICAgICAgIHZpZXcuZG9IaWRlQW5pbWF0aW9uKCk7XHJcbiAgICAgICAgICAgIHZpZXcub25IaWRkZW4oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tWaWV3U3RhY2tzKClcclxuICAgIHtcclxuICAgICAgICBsZXQgZGlhbG9nID0gdGhpcy5nZXRWaXNpYmxlRGlhbG9nKClcclxuICAgICAgICBpZihkaWFsb2cpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm1vZGFsLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubW9kYWwub3BhY2l0eSA9IGRpYWxvZy5vcGFjaXR5O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoaWRlQWxsKClcclxuICAgIHtcclxuICAgICAgICBmb3IgKHZhciB2aWV3bmFtZSBpbiB0aGlzLl92aWV3cyl7XHJcbiAgICAgICAgICAgIC8vIGxldCB2aWV3ID0gdGhpcy5fdmlld3Nbdmlld25hbWVdXHJcbiAgICAgICAgICAgIHRoaXMuaGlkZSh2aWV3bmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19