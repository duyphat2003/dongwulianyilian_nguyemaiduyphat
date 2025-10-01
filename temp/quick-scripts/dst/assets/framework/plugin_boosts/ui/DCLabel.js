
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/plugin_boosts/ui/DCLabel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a56c0Fh1bpDto6UwDov+u7M', 'DCLabel');
// framework/plugin_boosts/ui/DCLabel.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DCUI_1 = require("./DCUI");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, requireComponent = _a.requireComponent;
var DCLabel = /** @class */ (function (_super) {
    __extends(DCLabel, _super);
    function DCLabel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DCLabel.prototype.onLoad = function () {
        this.label = this.getComponent(cc.Label);
    };
    DCLabel.prototype.onValueChanged = function (v) {
        if (!v) {
            console.log("[DCLabel] warn!", "not found field " + this.dataBind);
            v = "0";
        }
        this.label.string = v;
    };
    DCLabel = __decorate([
        ccclass,
        requireComponent(cc.Label)
    ], DCLabel);
    return DCLabel;
}(DCUI_1.default));
exports.default = DCLabel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxwbHVnaW5fYm9vc3RzXFx1aVxcRENMYWJlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0JBQTBCO0FBRXBCLElBQUEsS0FBdUMsRUFBRSxDQUFDLFVBQVUsRUFBbkQsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUMsZ0JBQWdCLHNCQUFpQixDQUFDO0FBSzNEO0lBQXFDLDJCQUFJO0lBQXpDOztJQWtCQSxDQUFDO0lBZkcsd0JBQU0sR0FBTjtRQUVJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELGdDQUFjLEdBQWQsVUFBZSxDQUFDO1FBRVosSUFBRyxDQUFDLENBQUMsRUFBQztZQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUcsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1lBQ25FLENBQUMsR0FBRyxHQUFHLENBQUE7U0FDVjtRQUNELElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBZmdCLE9BQU87UUFGM0IsT0FBTztRQUNQLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7T0FDTixPQUFPLENBa0IzQjtJQUFELGNBQUM7Q0FsQkQsQUFrQkMsQ0FsQm9DLGNBQUksR0FrQnhDO2tCQWxCb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEQ1VJIGZyb20gXCIuL0RDVUlcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eSxyZXF1aXJlQ29tcG9uZW50fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5cclxuQGNjY2xhc3NcclxuQHJlcXVpcmVDb21wb25lbnQoY2MuTGFiZWwpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERDTGFiZWwgZXh0ZW5kcyBEQ1VJIHtcclxuXHJcbiAgICBsYWJlbDpjYy5MYWJlbDtcclxuICAgIG9uTG9hZCgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5sYWJlbCA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgIH1cclxuXHJcbiAgICBvblZhbHVlQ2hhbmdlZCh2KVxyXG4gICAge1xyXG4gICAgICAgIGlmKCF2KXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJbRENMYWJlbF0gd2FybiFcIiAsIFwibm90IGZvdW5kIGZpZWxkIFwiICsgdGhpcy5kYXRhQmluZClcclxuICAgICAgICAgICAgdiA9IFwiMFwiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gdjtcclxuICAgIH1cclxuICAgXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==