
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/wxsdk/MoreGameStyle.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '583d3QfyxhKU6/QqcEwAh29', 'MoreGameStyle');
// framework/wxsdk/MoreGameStyle.ts

Object.defineProperty(exports, "__esModule", { value: true });
var MoreGameComponent_1 = require("./MoreGameComponent");
//小游戏跳转
//https://developers.weixin.qq.com/miniprogram/dev/dev/api/open-api/miniprogram-navigate/wx.navigateToMiniProgram.html?search-key=navigateToMiniProgram
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MoreGameStyle = /** @class */ (function (_super) {
    __extends(MoreGameStyle, _super);
    function MoreGameStyle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.icons = [];
        _this.buttons = [];
        _this.labels = [];
        _this.datas = [];
        return _this;
        // update (dt) {}
    }
    Object.defineProperty(MoreGameStyle.prototype, "count", {
        get: function () {
            return this.icons.length;
        },
        enumerable: false,
        configurable: true
    });
    MoreGameStyle.prototype.onLoad = function () {
        for (var i = 0; i < this.buttons.length; i++) {
            var btn = this.buttons[i];
            var eventHandler = new cc.Component.EventHandler();
            eventHandler.target = this.node;
            eventHandler.component = "MoreGameStyle";
            eventHandler.handler = "onClick";
            eventHandler.customEventData = i + "";
            btn.clickEvents.push(eventHandler);
            this.labels[i].node.active = false;
            this.icons[i].node.active = false;
            btn.interactable = false;
        }
    };
    MoreGameStyle.prototype.onClick = function (sender, data) {
        var i = Number(data);
        var list = this.list;
        var task = list[i];
        this.manager.clickGame(task.gameConfig);
    };
    MoreGameStyle.prototype.onShow = function () {
        var list = this.list;
        var _loop_1 = function () {
            var task = list[i];
            var icon = this_1.icons[i];
            if (task) {
                var label = this_1.labels[i];
                label.string = task.gameConfig.title;
                this_1.labels[i].node.active = true;
                icon.node.active = true;
                this_1.buttons[i].interactable = true;
                this_1.manager.getSpriteFrame(task.gameConfig.icon).then(function (sf) {
                    icon.spriteFrame = sf;
                });
            }
        };
        var this_1 = this;
        for (var i = 0; i < this.icons.length; i++) {
            _loop_1();
        }
    };
    __decorate([
        property([cc.Sprite])
    ], MoreGameStyle.prototype, "icons", void 0);
    __decorate([
        property([cc.Button])
    ], MoreGameStyle.prototype, "buttons", void 0);
    __decorate([
        property([cc.Label])
    ], MoreGameStyle.prototype, "labels", void 0);
    MoreGameStyle = __decorate([
        ccclass
    ], MoreGameStyle);
    return MoreGameStyle;
}(MoreGameComponent_1.default));
exports.default = MoreGameStyle;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFx3eHNka1xcTW9yZUdhbWVTdHlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EseURBQW9EO0FBRXBELE9BQU87QUFDUCx1SkFBdUo7QUFFakosSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBMkMsaUNBQWlCO0lBQTVEO1FBQUEscUVBbUVDO1FBaEVHLFdBQUssR0FBZSxFQUFFLENBQUE7UUFHdEIsYUFBTyxHQUFlLEVBQUUsQ0FBQTtRQUd4QixZQUFNLEdBQWMsRUFBRSxDQUFBO1FBRXRCLFdBQUssR0FBVSxFQUFFLENBQUE7O1FBdURqQixpQkFBaUI7SUFDckIsQ0FBQztJQXRERyxzQkFBSSxnQ0FBSzthQUFUO1lBRUksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUM3QixDQUFDOzs7T0FBQTtJQUVELDhCQUFNLEdBQU47UUFFSSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUMsQ0FBQyxFQUFFLEVBQzNDO1lBQ0ksSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUN6QixJQUFJLFlBQVksR0FBRyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDbkQsWUFBWSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ2hDLFlBQVksQ0FBQyxTQUFTLEdBQUcsZUFBZSxDQUFBO1lBQ3hDLFlBQVksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFBO1lBQ2hDLFlBQVksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxHQUFFLEVBQUUsQ0FBQztZQUNyQyxHQUFHLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTtZQUNsQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO1lBQ2xDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDbEMsR0FBRyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7U0FDNUI7SUFDTCxDQUFDO0lBR0QsK0JBQU8sR0FBUCxVQUFRLE1BQU0sRUFBQyxJQUFXO1FBRXRCLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNwQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFBO1FBQ3BCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUdELDhCQUFNLEdBQU47UUFFSSxJQUFJLElBQUksR0FBVSxJQUFJLENBQUMsSUFBSSxDQUFDOztZQUd4QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkIsSUFBSSxJQUFJLEdBQUcsT0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDeEIsSUFBRyxJQUFJLEVBQ1A7Z0JBQ0ksSUFBSSxLQUFLLEdBQUcsT0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUE7Z0JBQzFCLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUE7Z0JBQ3BDLE9BQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO2dCQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ3hCLE9BQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUE7Z0JBQ25DLE9BQUssT0FBTyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEVBQUU7b0JBQ3JELElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO2dCQUMxQixDQUFDLENBQUMsQ0FBQTthQUVMOzs7UUFmTCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUMsQ0FBQyxFQUFFOztTQWdCeEM7SUFDTCxDQUFDO0lBOUREO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dEQUNBO0lBR3RCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2tEQUNFO0lBR3hCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lEQUNDO0lBVEwsYUFBYTtRQURqQyxPQUFPO09BQ2EsYUFBYSxDQW1FakM7SUFBRCxvQkFBQztDQW5FRCxBQW1FQyxDQW5FMEMsMkJBQWlCLEdBbUUzRDtrQkFuRW9CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHYW1lQ29uZmlnIH0gZnJvbSBcIi4vR2FtZUNvbmZpZ3NcIjtcclxuaW1wb3J0IE1vcmVHYW1lQ29tcG9uZW50IGZyb20gXCIuL01vcmVHYW1lQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFRhc2sgfSBmcm9tIFwiLi9Nb3JlR2FtZU1hbmFnZXJcIjtcclxuLy/lsI/muLjmiI/ot7PovaxcclxuLy9odHRwczovL2RldmVsb3BlcnMud2VpeGluLnFxLmNvbS9taW5pcHJvZ3JhbS9kZXYvZGV2L2FwaS9vcGVuLWFwaS9taW5pcHJvZ3JhbS1uYXZpZ2F0ZS93eC5uYXZpZ2F0ZVRvTWluaVByb2dyYW0uaHRtbD9zZWFyY2gta2V5PW5hdmlnYXRlVG9NaW5pUHJvZ3JhbVxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb3JlR2FtZVN0eWxlIGV4dGVuZHMgTW9yZUdhbWVDb21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShbY2MuU3ByaXRlXSlcclxuICAgIGljb25zOmNjLlNwcml0ZVtdID0gW11cclxuXHJcbiAgICBAcHJvcGVydHkoW2NjLkJ1dHRvbl0pXHJcbiAgICBidXR0b25zOmNjLkJ1dHRvbltdID0gW11cclxuXHJcbiAgICBAcHJvcGVydHkoW2NjLkxhYmVsXSlcclxuICAgIGxhYmVsczpjYy5MYWJlbFtdID0gW11cclxuXHJcbiAgICBkYXRhczphbnlbXSAgPSBbXVxyXG5cclxuICAgIGdldCBjb3VudCgpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaWNvbnMubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZCgpXHJcbiAgICB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAgO2kgPCB0aGlzLmJ1dHRvbnMubGVuZ3RoO2krKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBidG4gPSB0aGlzLmJ1dHRvbnNbaV1cclxuICAgICAgICAgICAgbGV0IGV2ZW50SGFuZGxlciA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgICAgIGV2ZW50SGFuZGxlci50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgICAgIGV2ZW50SGFuZGxlci5jb21wb25lbnQgPSBcIk1vcmVHYW1lU3R5bGVcIlxyXG4gICAgICAgICAgICBldmVudEhhbmRsZXIuaGFuZGxlciA9IFwib25DbGlja1wiXHJcbiAgICAgICAgICAgIGV2ZW50SGFuZGxlci5jdXN0b21FdmVudERhdGEgPSBpICtcIlwiO1xyXG4gICAgICAgICAgICBidG4uY2xpY2tFdmVudHMucHVzaChldmVudEhhbmRsZXIpXHJcbiAgICAgICAgICAgIHRoaXMubGFiZWxzW2ldLm5vZGUuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5pY29uc1tpXS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBidG4uaW50ZXJhY3RhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgfSBcclxuICAgIH1cclxuXHJcblxyXG4gICAgb25DbGljayhzZW5kZXIsZGF0YTpzdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGkgPSBOdW1iZXIoZGF0YSlcclxuICAgICAgICBsZXQgbGlzdCA9IHRoaXMubGlzdFxyXG4gICAgICAgIGxldCB0YXNrID0gbGlzdFtpXVxyXG4gICAgICAgIHRoaXMubWFuYWdlci5jbGlja0dhbWUodGFzay5nYW1lQ29uZmlnKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgb25TaG93KClcclxuICAgIHtcclxuICAgICAgICBsZXQgbGlzdDpUYXNrW10gPSB0aGlzLmxpc3Q7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAgO2kgPCB0aGlzLmljb25zLmxlbmd0aDtpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgdGFzayA9IGxpc3RbaV07XHJcbiAgICAgICAgICAgIGxldCBpY29uID0gdGhpcy5pY29uc1tpXVxyXG4gICAgICAgICAgICBpZih0YXNrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGFiZWwgPSB0aGlzLmxhYmVsc1tpXVxyXG4gICAgICAgICAgICAgICAgbGFiZWwuc3RyaW5nID0gdGFzay5nYW1lQ29uZmlnLnRpdGxlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhYmVsc1tpXS5ub2RlLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIGljb24ubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idXR0b25zW2ldLmludGVyYWN0YWJsZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIHRoaXMubWFuYWdlci5nZXRTcHJpdGVGcmFtZSh0YXNrLmdhbWVDb25maWcuaWNvbikudGhlbihzZj0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGljb24uc3ByaXRlRnJhbWUgPSBzZjtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19