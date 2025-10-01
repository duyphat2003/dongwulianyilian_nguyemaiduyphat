
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/plugin_boosts/ui/MessageBoxComponent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5d14c63Zc1PupexE+EkksQp', 'MessageBoxComponent');
// framework/plugin_boosts/ui/MessageBoxComponent.ts

Object.defineProperty(exports, "__esModule", { value: true });
var View_1 = require("./View");
var MessageBoxManager_1 = require("./MessageBoxManager");
// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode, playOnFocus = _a.playOnFocus;
var MessageBoxComponent = /** @class */ (function (_super) {
    __extends(MessageBoxComponent, _super);
    function MessageBoxComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.node_title = null;
        _this.node_content = null;
        _this.btn_ok = null;
        _this.btn_cancel = null;
        _this.messageBoxCallback = null;
        _this.label_ok = null;
        _this.label_cancel = null;
        _this.group_ok_cancel = null;
        _this.group_ok = null;
        return _this;
        // update (dt) {}
    }
    MessageBoxComponent.prototype.onLoad = function () {
        this.label_ok = this.btn_ok.getChildByName("Label").getComponent(cc.Label);
        this.label_cancel = this.btn_cancel.getChildByName("Label").getComponent(cc.Label);
        this.getComponent(View_1.default).setDelegate(this);
        this.bgAnimation = this.node.getChildByName("bg").getComponent(cc.Animation);
    };
    MessageBoxComponent.prototype.onHidden = function () {
    };
    MessageBoxComponent.prototype.onShown = function (params) {
        this.node_title.string = params.title;
        this.node_content.string = params.content;
        this.messageBoxCallback = params.callback;
        if (params.extra) {
            this.label_ok.string = params.extra.okText;
            this.label_cancel.string = params.extra.cancelText;
        }
        if (params.buttons == MessageBoxManager_1.MessageBox.OK_CANCEL) {
            //show two 
            this.group_ok_cancel.active = true;
            this.group_ok.active = false;
        }
        else {
            //show one 
            this.group_ok.active = true;
            this.group_ok_cancel.active = false;
        }
    };
    MessageBoxComponent.prototype.start = function () {
    };
    MessageBoxComponent.prototype.on_btn_ok_clicked = function () {
        if (this.messageBoxCallback)
            this.messageBoxCallback.call(null, MessageBoxManager_1.MessageBox.OK);
        this.getComponent(View_1.default).hide();
    };
    MessageBoxComponent.prototype.on_btn_cancel_clicked = function () {
        if (this.messageBoxCallback)
            this.messageBoxCallback.call(null, MessageBoxManager_1.MessageBox.CANCEL);
        this.getComponent(View_1.default).hide();
    };
    __decorate([
        property(cc.Label)
    ], MessageBoxComponent.prototype, "node_title", void 0);
    __decorate([
        property(cc.Label)
    ], MessageBoxComponent.prototype, "node_content", void 0);
    __decorate([
        property(cc.Node)
    ], MessageBoxComponent.prototype, "btn_ok", void 0);
    __decorate([
        property(cc.Node)
    ], MessageBoxComponent.prototype, "btn_cancel", void 0);
    __decorate([
        property(cc.Node)
    ], MessageBoxComponent.prototype, "group_ok_cancel", void 0);
    __decorate([
        property(cc.Node)
    ], MessageBoxComponent.prototype, "group_ok", void 0);
    MessageBoxComponent = __decorate([
        ccclass
    ], MessageBoxComponent);
    return MessageBoxComponent;
}(cc.Component));
exports.default = MessageBoxComponent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxwbHVnaW5fYm9vc3RzXFx1aVxcTWVzc2FnZUJveENvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0JBQTBCO0FBQzFCLHlEQUErQztBQUUvQyxvQkFBb0I7QUFDcEIsaUZBQWlGO0FBQ2pGLHlGQUF5RjtBQUN6RixtQkFBbUI7QUFDbkIsMkZBQTJGO0FBQzNGLG1HQUFtRztBQUNuRyw4QkFBOEI7QUFDOUIsMkZBQTJGO0FBQzNGLG1HQUFtRztBQUU3RixJQUFBLEtBQW9ELEVBQUUsQ0FBQyxVQUFVLEVBQWhFLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBQSxFQUFDLGlCQUFpQix1QkFBQSxFQUFDLFdBQVcsaUJBQWlCLENBQUM7QUFHeEU7SUFBaUQsdUNBQVk7SUFBN0Q7UUFBQSxxRUFnRkM7UUE3RUcsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0Isa0JBQVksR0FBWSxJQUFJLENBQUM7UUFHN0IsWUFBTSxHQUFXLElBQUksQ0FBQztRQUV0QixnQkFBVSxHQUFXLElBQUksQ0FBQztRQUUxQix3QkFBa0IsR0FBWSxJQUFJLENBQUM7UUFFbkMsY0FBUSxHQUFZLElBQUksQ0FBQztRQUN6QixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUc3QixxQkFBZSxHQUFZLElBQUksQ0FBQztRQUdoQyxjQUFRLEdBQVcsSUFBSSxDQUFDOztRQTBEeEIsaUJBQWlCO0lBQ3JCLENBQUM7SUF4REcsb0NBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUMxRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDbEYsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2pGLENBQUM7SUFFRCxzQ0FBUSxHQUFSO0lBRUEsQ0FBQztJQUVELHFDQUFPLEdBQVAsVUFBUSxNQUFNO1FBRVYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUN0QyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQzFDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQzFDLElBQUcsTUFBTSxDQUFDLEtBQUssRUFDZjtZQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFBO1lBQzFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFBO1NBQ3JEO1FBQ0QsSUFBSyxNQUFNLENBQUMsT0FBTyxJQUFHLDhCQUFVLENBQUMsU0FBUyxFQUMxQztZQUNJLFdBQVc7WUFDWCxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ2hDO2FBQUk7WUFDRCxXQUFXO1lBQ1gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQzVCLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUN2QztJQUNMLENBQUM7SUFFRCxtQ0FBSyxHQUFMO0lBRUEsQ0FBQztJQUlELCtDQUFpQixHQUFqQjtRQUVJLElBQUcsSUFBSSxDQUFDLGtCQUFrQjtZQUN0QixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksRUFBQyw4QkFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFBO1FBQ3BELElBQUksQ0FBQyxZQUFZLENBQUMsY0FBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUVELG1EQUFxQixHQUFyQjtRQUVJLElBQUcsSUFBSSxDQUFDLGtCQUFrQjtZQUN0QixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksRUFBQyw4QkFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ3hELElBQUksQ0FBQyxZQUFZLENBQUMsY0FBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDbkMsQ0FBQztJQXhFRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzJEQUNRO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NkRBQ1U7SUFHN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt1REFDSTtJQUV0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJEQUNRO0lBUTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0VBQ2M7SUFHaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt5REFDTTtJQXJCUCxtQkFBbUI7UUFEdkMsT0FBTztPQUNhLG1CQUFtQixDQWdGdkM7SUFBRCwwQkFBQztDQWhGRCxBQWdGQyxDQWhGZ0QsRUFBRSxDQUFDLFNBQVMsR0FnRjVEO2tCQWhGb0IsbUJBQW1CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZpZXcgZnJvbSBcIi4vVmlld1wiO1xyXG5pbXBvcnQge01lc3NhZ2VCb3h9IGZyb20gXCIuL01lc3NhZ2VCb3hNYW5hZ2VyXCI7XHJcblxyXG4vLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eSxleGVjdXRlSW5FZGl0TW9kZSxwbGF5T25Gb2N1c30gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVzc2FnZUJveENvbXBvbmVudCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbm9kZV90aXRsZTpjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBub2RlX2NvbnRlbnQ6Y2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYnRuX29rOmNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5fY2FuY2VsOmNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIG1lc3NhZ2VCb3hDYWxsYmFjazpGdW5jdGlvbiA9IG51bGw7XHJcblxyXG4gICAgbGFiZWxfb2s6Y2MuTGFiZWwgPSBudWxsO1xyXG4gICAgbGFiZWxfY2FuY2VsOmNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGdyb3VwX29rX2NhbmNlbCA6Y2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBncm91cF9vazpjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBiZ0FuaW1hdGlvbjpjYy5BbmltYXRpb247XHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIHRoaXMubGFiZWxfb2sgPSB0aGlzLmJ0bl9vay5nZXRDaGlsZEJ5TmFtZShcIkxhYmVsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbClcclxuICAgICAgICB0aGlzLmxhYmVsX2NhbmNlbCA9IHRoaXMuYnRuX2NhbmNlbC5nZXRDaGlsZEJ5TmFtZShcIkxhYmVsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbClcclxuICAgICAgICB0aGlzLmdldENvbXBvbmVudChWaWV3KS5zZXREZWxlZ2F0ZSh0aGlzKTtcclxuICAgICAgICB0aGlzLmJnQW5pbWF0aW9uID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmdcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgb25IaWRkZW4oKVxyXG4gICAge1xyXG4gICAgfVxyXG5cclxuICAgIG9uU2hvd24ocGFyYW1zKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubm9kZV90aXRsZS5zdHJpbmcgPSBwYXJhbXMudGl0bGU7XHJcbiAgICAgICAgdGhpcy5ub2RlX2NvbnRlbnQuc3RyaW5nID0gcGFyYW1zLmNvbnRlbnQ7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlQm94Q2FsbGJhY2sgPSBwYXJhbXMuY2FsbGJhY2s7XHJcbiAgICAgICAgaWYocGFyYW1zLmV4dHJhKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbF9vay5zdHJpbmcgPSBwYXJhbXMuZXh0cmEub2tUZXh0XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWxfY2FuY2VsLnN0cmluZyA9IHBhcmFtcy5leHRyYS5jYW5jZWxUZXh0XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICggcGFyYW1zLmJ1dHRvbnM9PSBNZXNzYWdlQm94Lk9LX0NBTkNFTClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vc2hvdyB0d28gXHJcbiAgICAgICAgICAgIHRoaXMuZ3JvdXBfb2tfY2FuY2VsLmFjdGl2ZSA9IHRydWU7ICAgICBcclxuICAgICAgICAgICAgdGhpcy5ncm91cF9vay5hY3RpdmUgPSBmYWxzZTsgICAgIFxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAvL3Nob3cgb25lIFxyXG4gICAgICAgICAgICB0aGlzLmdyb3VwX29rLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZ3JvdXBfb2tfY2FuY2VsLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgb25fYnRuX29rX2NsaWNrZWQoKVxyXG4gICAge1xyXG4gICAgICAgIGlmKHRoaXMubWVzc2FnZUJveENhbGxiYWNrKVxyXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VCb3hDYWxsYmFjay5jYWxsKG51bGwsTWVzc2FnZUJveC5PSylcclxuICAgICAgICB0aGlzLmdldENvbXBvbmVudChWaWV3KS5oaWRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25fYnRuX2NhbmNlbF9jbGlja2VkKClcclxuICAgIHtcclxuICAgICAgICBpZih0aGlzLm1lc3NhZ2VCb3hDYWxsYmFjaylcclxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlQm94Q2FsbGJhY2suY2FsbChudWxsLE1lc3NhZ2VCb3guQ0FOQ0VMKSAgIFxyXG4gICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KFZpZXcpLmhpZGUoKTsgICAgIFxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=