
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/ui/LoseDialog.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4e3984V63ZMooQQ3tgVzSsK', 'LoseDialog');
// Game/Scripts/ui/LoseDialog.ts

// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var ViewManager_1 = require("../../../framework/plugin_boosts/ui/ViewManager");
var LanguageManager_1 = require("../LanguageManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.titlelabel = null;
        _this.playAgainlabel = null;
        _this.homelabel = null;
        _this.ch_FontSize = 25;
        _this.vi_FontSize = 16;
        _this.eng_FontSize = 20;
        _this.params = null; // reference callback from ViewManager
        return _this;
    }
    NewClass.prototype.init = function (params) {
        this.params = params;
    };
    NewClass.prototype.onEnable = function () {
        switch (LanguageManager_1.default.instance.currentLanguage) {
            case LanguageManager_1.LanguageMode.CN:
                this.set_label_lang("你想再玩一次吗？", "继续", "不是");
                this.set_label_FontSize(this.ch_FontSize);
                break;
            case LanguageManager_1.LanguageMode.VI:
                this.set_label_lang("Bạn có muốn chơi lại không?", "Tiếp tục", "Không");
                this.set_label_FontSize(this.vi_FontSize);
                break;
            case LanguageManager_1.LanguageMode.EN:
                this.set_label_lang("Do you want to play again?", "Continue", "No");
                this.set_label_FontSize(this.eng_FontSize);
                break;
        }
    };
    NewClass.prototype.set_label_lang = function (titlelabelString, playAgainlabelString, homelabelString) {
        this.titlelabel.string = titlelabelString;
        this.playAgainlabel.string = playAgainlabelString;
        this.homelabel.string = homelabelString;
    };
    NewClass.prototype.set_label_FontSize = function (fontSize) {
        this.titlelabel.fontSize = fontSize;
        this.playAgainlabel.fontSize = fontSize;
        this.homelabel.fontSize = fontSize;
    };
    NewClass.prototype.onContinueButtonClick = function () {
        this.params.onContinue();
        ViewManager_1.default.instance.hide(this.node); // notify ViewManager
    };
    NewClass.prototype.onQuitButtonClick = function () {
        this.params.onQuit();
        ViewManager_1.default.instance.hide(this.node); // notify ViewManager
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "titlelabel", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "playAgainlabel", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "homelabel", void 0);
    __decorate([
        property({ type: cc.Integer })
    ], NewClass.prototype, "ch_FontSize", void 0);
    __decorate([
        property({ type: cc.Integer })
    ], NewClass.prototype, "vi_FontSize", void 0);
    __decorate([
        property({ type: cc.Integer })
    ], NewClass.prototype, "eng_FontSize", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcdWlcXExvc2VEaWFsb2cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUMsb0JBQW9CO0FBQ3JCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7O0FBRXRGLCtFQUEwRTtBQUMxRSxzREFBbUU7QUFFN0QsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUE2RUM7UUExRUcsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFFNUIsb0JBQWMsR0FBYSxJQUFJLENBQUM7UUFFaEMsZUFBUyxHQUFhLElBQUksQ0FBQztRQUkzQixpQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUV6QixpQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUV6QixrQkFBWSxHQUFXLEVBQUUsQ0FBQztRQUcxQixZQUFNLEdBQVEsSUFBSSxDQUFDLENBQUMsc0NBQXNDOztJQTJEOUQsQ0FBQztJQTFERyx1QkFBSSxHQUFKLFVBQUssTUFBVztRQUNaLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3pCLENBQUM7SUFFRCwyQkFBUSxHQUFSO1FBQ0ksUUFBUSx5QkFBZSxDQUFDLFFBQVEsQ0FBQyxlQUFlLEVBQUU7WUFDOUMsS0FBSyw4QkFBWSxDQUFDLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUMxQixJQUFJLEVBQ0osSUFBSSxDQUNQLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDMUMsTUFBTTtZQUNWLEtBQUssOEJBQVksQ0FBQyxFQUFFO2dCQUNoQixJQUFJLENBQUMsY0FBYyxDQUFDLDZCQUE2QixFQUM3QyxVQUFVLEVBQ1YsT0FBTyxDQUNWLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFFMUMsTUFBTTtZQUNWLEtBQUssOEJBQVksQ0FBQyxFQUFFO2dCQUNoQixJQUFJLENBQUMsY0FBYyxDQUNmLDRCQUE0QixFQUM1QixVQUFVLEVBQ1YsSUFBSSxDQUNQLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDM0MsTUFBTTtTQUNiO0lBQ0wsQ0FBQztJQUdELGlDQUFjLEdBQWQsVUFDSSxnQkFBd0IsRUFDeEIsb0JBQTRCLEVBQzVCLGVBQXVCO1FBRXZCLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLGdCQUFnQixDQUFDO1FBQzFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLG9CQUFvQixDQUFDO1FBQ2xELElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLGVBQWUsQ0FBQztJQUM1QyxDQUFDO0lBRUQscUNBQWtCLEdBQWxCLFVBQW1CLFFBQWdCO1FBQy9CLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUNwQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDeEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQ3ZDLENBQUM7SUFFRCx3Q0FBcUIsR0FBckI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3pCLHFCQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxxQkFBcUI7SUFDL0QsQ0FBQztJQUVELG9DQUFpQixHQUFqQjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDckIscUJBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLHFCQUFxQjtJQUMvRCxDQUFDO0lBekVEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7Z0RBQ1M7SUFFNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztvREFDYTtJQUVoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOytDQUNRO0lBSTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztpREFDTjtJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7aURBQ047SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO2tEQUNMO0lBZlQsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQTZFNUI7SUFBRCxlQUFDO0NBN0VELEFBNkVDLENBN0VxQyxFQUFFLENBQUMsU0FBUyxHQTZFakQ7a0JBN0VvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsi77u/Ly8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IFZpZXdNYW5hZ2VyIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvcGx1Z2luX2Jvb3N0cy91aS9WaWV3TWFuYWdlclwiO1xyXG5pbXBvcnQgTGFuZ3VhZ2VNYW5hZ2VyLCB7IExhbmd1YWdlTW9kZSB9IGZyb20gXCIuLi9MYW5ndWFnZU1hbmFnZXJcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHRpdGxlbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHBsYXlBZ2FpbmxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBob21lbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuSW50ZWdlciB9KVxyXG4gICAgY2hfRm9udFNpemU6IG51bWJlciA9IDI1O1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuSW50ZWdlciB9KVxyXG4gICAgdmlfRm9udFNpemU6IG51bWJlciA9IDE2O1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuSW50ZWdlciB9KVxyXG4gICAgZW5nX0ZvbnRTaXplOiBudW1iZXIgPSAyMDtcclxuXHJcblxyXG4gICAgcGFyYW1zOiBhbnkgPSBudWxsOyAvLyByZWZlcmVuY2UgY2FsbGJhY2sgZnJvbSBWaWV3TWFuYWdlclxyXG4gICAgaW5pdChwYXJhbXM6IGFueSkge1xyXG4gICAgICAgIHRoaXMucGFyYW1zID0gcGFyYW1zO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRW5hYmxlKCkge1xyXG4gICAgICAgIHN3aXRjaCAoTGFuZ3VhZ2VNYW5hZ2VyLmluc3RhbmNlLmN1cnJlbnRMYW5ndWFnZSkge1xyXG4gICAgICAgICAgICBjYXNlIExhbmd1YWdlTW9kZS5DTjpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0X2xhYmVsX2xhbmcoXCLkvaDmg7Plho3njqnkuIDmrKHlkJfvvJ9cIixcclxuICAgICAgICAgICAgICAgICAgICBcIue7p+e7rVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwi5LiN5pivXCIsXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRfbGFiZWxfRm9udFNpemUodGhpcy5jaF9Gb250U2l6ZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMYW5ndWFnZU1vZGUuVkk6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldF9sYWJlbF9sYW5nKFwiQuG6oW4gY8OzIG114buRbiBjaMahaSBs4bqhaSBraMO0bmc/XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJUaeG6v3AgdOG7pWNcIixcclxuICAgICAgICAgICAgICAgICAgICBcIktow7RuZ1wiLFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0X2xhYmVsX0ZvbnRTaXplKHRoaXMudmlfRm9udFNpemUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExhbmd1YWdlTW9kZS5FTjpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0X2xhYmVsX2xhbmcoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJEbyB5b3Ugd2FudCB0byBwbGF5IGFnYWluP1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQ29udGludWVcIixcclxuICAgICAgICAgICAgICAgICAgICBcIk5vXCJcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldF9sYWJlbF9Gb250U2l6ZSh0aGlzLmVuZ19Gb250U2l6ZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHNldF9sYWJlbF9sYW5nKFxyXG4gICAgICAgIHRpdGxlbGFiZWxTdHJpbmc6IHN0cmluZyxcclxuICAgICAgICBwbGF5QWdhaW5sYWJlbFN0cmluZzogc3RyaW5nLFxyXG4gICAgICAgIGhvbWVsYWJlbFN0cmluZzogc3RyaW5nLFxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy50aXRsZWxhYmVsLnN0cmluZyA9IHRpdGxlbGFiZWxTdHJpbmc7XHJcbiAgICAgICAgdGhpcy5wbGF5QWdhaW5sYWJlbC5zdHJpbmcgPSBwbGF5QWdhaW5sYWJlbFN0cmluZztcclxuICAgICAgICB0aGlzLmhvbWVsYWJlbC5zdHJpbmcgPSBob21lbGFiZWxTdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0X2xhYmVsX0ZvbnRTaXplKGZvbnRTaXplOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnRpdGxlbGFiZWwuZm9udFNpemUgPSBmb250U2l6ZTtcclxuICAgICAgICB0aGlzLnBsYXlBZ2FpbmxhYmVsLmZvbnRTaXplID0gZm9udFNpemU7XHJcbiAgICAgICAgdGhpcy5ob21lbGFiZWwuZm9udFNpemUgPSBmb250U2l6ZTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNvbnRpbnVlQnV0dG9uQ2xpY2soKSB7XHJcbiAgICAgICAgdGhpcy5wYXJhbXMub25Db250aW51ZSgpO1xyXG4gICAgICAgIFZpZXdNYW5hZ2VyLmluc3RhbmNlLmhpZGUodGhpcy5ub2RlKTsgLy8gbm90aWZ5IFZpZXdNYW5hZ2VyXHJcbiAgICB9XHJcblxyXG4gICAgb25RdWl0QnV0dG9uQ2xpY2soKSB7XHJcbiAgICAgICAgdGhpcy5wYXJhbXMub25RdWl0KCk7XHJcbiAgICAgICAgVmlld01hbmFnZXIuaW5zdGFuY2UuaGlkZSh0aGlzLm5vZGUpOyAvLyBub3RpZnkgVmlld01hbmFnZXJcclxuICAgIH1cclxufVxyXG4iXX0=