
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/plugin_boosts/ui/MessageBoxManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bc48cBqkERHuJx+iKzOzwOV', 'MessageBoxManager');
// framework/plugin_boosts/ui/MessageBoxManager.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageBox = void 0;
var ViewManager_1 = require("./ViewManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MessageBoxManager = /** @class */ (function (_super) {
    __extends(MessageBoxManager, _super);
    function MessageBoxManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.prefab = null;
        return _this;
    }
    MessageBoxManager_1 = MessageBoxManager;
    MessageBoxManager.prototype.onLoad = function () {
        MessageBoxManager_1.instance = this;
    };
    var MessageBoxManager_1;
    MessageBoxManager.instance = null;
    __decorate([
        property(cc.Prefab)
    ], MessageBoxManager.prototype, "prefab", void 0);
    MessageBoxManager = MessageBoxManager_1 = __decorate([
        ccclass
    ], MessageBoxManager);
    return MessageBoxManager;
}(cc.Component));
exports.default = MessageBoxManager;
var MessageBox = /** @class */ (function () {
    function MessageBox() {
    }
    MessageBox.prototype.start = function () {
    };
    //////////////////////////////////////////////////////////////////////////////////////////////////////////
    // static UIPath:string = "plugin_boosts/ui/MessageBox"
    MessageBox.show = function (content, title, buttons, extra) {
        title = (title == null || title == undefined) ? "提示" : title;
        return new Promise(function (resolve, reject) {
            ViewManager_1.default.instance.showFromPrefab(MessageBoxManager.instance.prefab, "MessageBox", {
                title: title,
                content: content,
                buttons: buttons,
                extra: extra,
                callback: function (code) {
                    resolve(code);
                }
            });
        });
    };
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    MessageBox.OK = 1;
    MessageBox.CANCEL = 0;
    MessageBox.OK_CANCEL = 2;
    return MessageBox;
}());
exports.MessageBox = MessageBox;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxwbHVnaW5fYm9vc3RzXFx1aVxcTWVzc2FnZUJveE1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBd0M7QUFFbEMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFJMUM7SUFBK0MscUNBQVk7SUFBM0Q7UUFBQSxxRUFTQztRQU5HLFlBQU0sR0FBYSxJQUFJLENBQUM7O0lBTTVCLENBQUM7MEJBVG9CLGlCQUFpQjtJQU1sQyxrQ0FBTSxHQUFOO1FBQ0ksbUJBQWlCLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUN0QyxDQUFDOztJQUhNLDBCQUFRLEdBQXFCLElBQUksQ0FBQztJQUZ6QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3FEQUNJO0lBSFAsaUJBQWlCO1FBSHJDLE9BQU87T0FHYSxpQkFBaUIsQ0FTckM7SUFBRCx3QkFBQztDQVRELEFBU0MsQ0FUOEMsRUFBRSxDQUFDLFNBQVMsR0FTMUQ7a0JBVG9CLGlCQUFpQjtBQVd0QztJQUFBO0lBZ0NBLENBQUM7SUF2QkcsMEJBQUssR0FBTDtJQUVBLENBQUM7SUFFRCwwR0FBMEc7SUFDMUcsdURBQXVEO0lBQ2hELGVBQUksR0FBWCxVQUFZLE9BQU8sRUFBRSxLQUFNLEVBQUMsT0FBUSxFQUFDLEtBQU07UUFFdkMsS0FBSyxHQUFHLENBQUMsS0FBSyxJQUFJLElBQUksSUFBSSxLQUFLLElBQUksU0FBUyxDQUFFLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUEsS0FBSyxDQUFBO1FBQzNELE9BQU8sSUFBSSxPQUFPLENBQVMsVUFBQyxPQUFPLEVBQUMsTUFBTTtZQUN0QyxxQkFBVyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBQyxZQUFZLEVBQUM7Z0JBQy9FLEtBQUssT0FBQTtnQkFDTCxPQUFPLFNBQUE7Z0JBQ1AsT0FBTyxTQUFBO2dCQUNQLEtBQUssT0FBQTtnQkFDTCxRQUFRLEVBQUMsVUFBQSxJQUFJO29CQUNULE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTtnQkFDakIsQ0FBQzthQUNKLENBQUMsQ0FBQTtRQUNOLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQTNCRCx3QkFBd0I7SUFDeEIsZUFBZTtJQUNSLGFBQUUsR0FBVSxDQUFDLENBQUM7SUFDZCxpQkFBTSxHQUFVLENBQUMsQ0FBQztJQUVsQixvQkFBUyxHQUFVLENBQUMsQ0FBQztJQXlCaEMsaUJBQUM7Q0FoQ0QsQUFnQ0MsSUFBQTtBQWhDWSxnQ0FBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWaWV3TWFuYWdlciBmcm9tIFwiLi9WaWV3TWFuYWdlclwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcbkBjY2NsYXNzXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVzc2FnZUJveE1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnRcclxue1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHByZWZhYjpjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgXHJcbiAgICBzdGF0aWMgaW5zdGFuY2U6TWVzc2FnZUJveE1hbmFnZXIgPSBudWxsO1xyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICBNZXNzYWdlQm94TWFuYWdlci5pbnN0YW5jZSA9IHRoaXM7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBNZXNzYWdlQm94ICB7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuICAgIHN0YXRpYyBPSzpudW1iZXIgPSAxO1xyXG4gICAgc3RhdGljIENBTkNFTDpudW1iZXIgPSAwO1xyXG5cclxuICAgIHN0YXRpYyBPS19DQU5DRUw6bnVtYmVyID0gMjtcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgIC8vIHN0YXRpYyBVSVBhdGg6c3RyaW5nID0gXCJwbHVnaW5fYm9vc3RzL3VpL01lc3NhZ2VCb3hcIlxyXG4gICAgc3RhdGljIHNob3coY29udGVudCAsdGl0bGU/LGJ1dHRvbnM/LGV4dHJhPyk6UHJvbWlzZTxudW1iZXI+XHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGUgPSAodGl0bGUgPT0gbnVsbCB8fCB0aXRsZSA9PSB1bmRlZmluZWQgKT8gXCLmj5DnpLpcIiA6dGl0bGVcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8bnVtYmVyPigocmVzb2x2ZSxyZWplY3QpPT57XHJcbiAgICAgICAgICAgIFZpZXdNYW5hZ2VyLmluc3RhbmNlLnNob3dGcm9tUHJlZmFiKE1lc3NhZ2VCb3hNYW5hZ2VyLmluc3RhbmNlLnByZWZhYixcIk1lc3NhZ2VCb3hcIix7XHJcbiAgICAgICAgICAgICAgICB0aXRsZSxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQsXHJcbiAgICAgICAgICAgICAgICBidXR0b25zLFxyXG4gICAgICAgICAgICAgICAgZXh0cmEsXHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjazpjb2RlPT57XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShjb2RlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=