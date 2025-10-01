
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/ui/RankingList.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ef49dKVRRhP3pszQylJBeEH', 'RankingList');
// Game/Scripts/ui/RankingList.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Info_1 = require("../Info");
var RankItem_1 = require("./RankItem");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var RankingList = /** @class */ (function (_super) {
    __extends(RankingList, _super);
    function RankingList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.scrollView = null;
        _this.rankItemPrefab = null;
        _this.apiUrl = "https://5d820f171c8ff70014ef438d.mockapi.io/1/ranking-list";
        return _this;
    }
    RankingList.prototype.start = function () {
        this.loadRanking();
        console.log("UserInfo Level : " + Info_1.UserInfo.level.toString());
    };
    RankingList.prototype.loadRanking = function () {
        var _this = this;
        var xhr = new XMLHttpRequest();
        xhr.open("GET", this.apiUrl, true);
        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 300) {
                var data = JSON.parse(xhr.responseText);
                // Sort ascending by level
                data.sort(function (a, b) { return a.level - b.level; });
                // Add you when you in top 10
                for (var i = 0; i < data.length; i++) {
                    var item = data[i];
                    console.error(item.name + " : " + item.level.toString());
                    if (item.level <= Info_1.UserInfo.level) {
                        if (i === 0) {
                            item.level = Info_1.UserInfo.level;
                            item.name = "YOU";
                        }
                        else {
                            var tempName = "YOU";
                            var tempLevel = Info_1.UserInfo.level;
                            data[i - 1].name = item.name;
                            data[i - 1].level = item.level;
                            item.name = tempName;
                            item.level = tempLevel;
                        }
                    }
                }
                // Sort descending by level
                data.sort(function (a, b) { return b.level - a.level; });
                _this.populateScrollView(data);
            }
            else {
                console.error("XHR failed:", xhr.status);
            }
        };
        xhr.onerror = function () { return console.error("XHR request error"); };
        xhr.send();
    };
    RankingList.prototype.populateScrollView = function (rankingData) {
        var _this = this;
        var content = this.scrollView.content;
        content.removeAllChildren();
        if (Info_1.UserInfo.getData)
            rankingData.forEach(function (item, index) {
                var node = cc.instantiate(_this.rankItemPrefab);
                var rankItemComp = node.getComponent(RankItem_1.default);
                if (item.name === "YOU") {
                    rankItemComp.rankLabel.node.color = cc.Color.YELLOW;
                    rankItemComp.levelLabel.node.color = cc.Color.YELLOW;
                    rankItemComp.nameLabel.node.color = cc.Color.YELLOW;
                }
                rankItemComp.init(index + 1, item.level, item.name);
                content.addChild(node);
            });
        var itemHeight = this.rankItemPrefab.data.height;
        content.height = rankingData.length * itemHeight;
    };
    __decorate([
        property(cc.ScrollView)
    ], RankingList.prototype, "scrollView", void 0);
    __decorate([
        property(cc.Prefab)
    ], RankingList.prototype, "rankItemPrefab", void 0);
    RankingList = __decorate([
        ccclass
    ], RankingList);
    return RankingList;
}(cc.Component));
exports.default = RankingList;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcdWlcXFJhbmtpbmdMaXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnQ0FBbUM7QUFDbkMsdUNBQWtDO0FBRTVCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXlDLCtCQUFZO0lBQXJEO1FBQUEscUVBeUZDO1FBdEZHLGdCQUFVLEdBQWtCLElBQUksQ0FBQztRQUdqQyxvQkFBYyxHQUFjLElBQUksQ0FBQztRQUVqQyxZQUFNLEdBQVcsNERBQTRELENBQUM7O0lBaUZsRixDQUFDO0lBL0VHLDJCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsR0FBRyxlQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFFakUsQ0FBQztJQUVELGlDQUFXLEdBQVg7UUFBQSxpQkF5Q0M7UUF4Q0csSUFBTSxHQUFHLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQztRQUNqQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ25DLEdBQUcsQ0FBQyxNQUFNLEdBQUc7WUFDVCxJQUFJLEdBQUcsQ0FBQyxNQUFNLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxFQUFFO2dCQUN2QyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFFeEMsMEJBQTBCO2dCQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBakIsQ0FBaUIsQ0FBQyxDQUFDO2dCQUd2Qyw2QkFBNkI7Z0JBQzdCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUNsQyxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3JCLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO29CQUN6RCxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksZUFBUSxDQUFDLEtBQUssRUFBRTt3QkFDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFOzRCQUNULElBQUksQ0FBQyxLQUFLLEdBQUcsZUFBUSxDQUFDLEtBQUssQ0FBQzs0QkFDNUIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7eUJBQ3JCOzZCQUFNOzRCQUNILElBQU0sUUFBUSxHQUFHLEtBQUssQ0FBQzs0QkFDdkIsSUFBTSxTQUFTLEdBQUcsZUFBUSxDQUFDLEtBQUssQ0FBQzs0QkFFakMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQzs0QkFDN0IsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQzs0QkFFL0IsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7NEJBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO3lCQUMxQjtxQkFDSjtpQkFDSjtnQkFFRCwyQkFBMkI7Z0JBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFqQixDQUFpQixDQUFDLENBQUM7Z0JBQ3ZDLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNqQztpQkFBTTtnQkFDSCxPQUFPLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDNUM7UUFDTCxDQUFDLENBQUM7UUFDRixHQUFHLENBQUMsT0FBTyxHQUFHLGNBQU0sT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLEVBQWxDLENBQWtDLENBQUM7UUFDdkQsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVELHdDQUFrQixHQUFsQixVQUFtQixXQUFrQjtRQUFyQyxpQkF1QkM7UUFwQkcsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7UUFDeEMsT0FBTyxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFFNUIsSUFBSSxlQUFRLENBQUMsT0FBTztZQUVoQixXQUFXLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSSxFQUFFLEtBQUs7Z0JBQ2hDLElBQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUNqRCxJQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGtCQUFRLENBQUMsQ0FBQztnQkFDN0MsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLEtBQUssRUFBRTtvQkFDckIsWUFBWSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO29CQUNwRCxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7b0JBQ3JELFlBQVksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztpQkFFM0Q7Z0JBQ0QsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNwRCxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzNCLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ25ELE9BQU8sQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUM7SUFDckQsQ0FBQztJQS9FRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDO21EQUNTO0lBR2pDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7dURBQ2E7SUFOaEIsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQXlGL0I7SUFBRCxrQkFBQztDQXpGRCxBQXlGQyxDQXpGd0MsRUFBRSxDQUFDLFNBQVMsR0F5RnBEO2tCQXpGb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVzZXJJbmZvIH0gZnJvbSBcIi4uL0luZm9cIjtcclxuaW1wb3J0IFJhbmtJdGVtIGZyb20gXCIuL1JhbmtJdGVtXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFua2luZ0xpc3QgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TY3JvbGxWaWV3KVxyXG4gICAgc2Nyb2xsVmlldzogY2MuU2Nyb2xsVmlldyA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHJhbmtJdGVtUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIGFwaVVybDogc3RyaW5nID0gXCJodHRwczovLzVkODIwZjE3MWM4ZmY3MDAxNGVmNDM4ZC5tb2NrYXBpLmlvLzEvcmFua2luZy1saXN0XCI7XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkUmFua2luZygpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVXNlckluZm8gTGV2ZWwgOiBcIiArIFVzZXJJbmZvLmxldmVsLnRvU3RyaW5nKCkpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBsb2FkUmFua2luZygpIHtcclxuICAgICAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICB4aHIub3BlbihcIkdFVFwiLCB0aGlzLmFwaVVybCwgdHJ1ZSk7XHJcbiAgICAgICAgeGhyLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPj0gMjAwICYmIHhoci5zdGF0dXMgPCAzMDApIHtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTsgXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gU29ydCBhc2NlbmRpbmcgYnkgbGV2ZWxcclxuICAgICAgICAgICAgICAgIGRhdGEuc29ydCgoYSwgYikgPT4gYS5sZXZlbCAtIGIubGV2ZWwpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBBZGQgeW91IHdoZW4geW91IGluIHRvcCAxMFxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IGRhdGFbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihpdGVtLm5hbWUgKyBcIiA6IFwiICsgaXRlbS5sZXZlbC50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5sZXZlbCA8PSBVc2VySW5mby5sZXZlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5sZXZlbCA9IFVzZXJJbmZvLmxldmVsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5uYW1lID0gXCJZT1VcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlbXBOYW1lID0gXCJZT1VcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlbXBMZXZlbCA9IFVzZXJJbmZvLmxldmVsO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbaSAtIDFdLm5hbWUgPSBpdGVtLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhW2kgLSAxXS5sZXZlbCA9IGl0ZW0ubGV2ZWw7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5uYW1lID0gdGVtcE5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmxldmVsID0gdGVtcExldmVsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIFNvcnQgZGVzY2VuZGluZyBieSBsZXZlbFxyXG4gICAgICAgICAgICAgICAgZGF0YS5zb3J0KChhLCBiKSA9PiBiLmxldmVsIC0gYS5sZXZlbCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVsYXRlU2Nyb2xsVmlldyhkYXRhKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJYSFIgZmFpbGVkOlwiLCB4aHIuc3RhdHVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgeGhyLm9uZXJyb3IgPSAoKSA9PiBjb25zb2xlLmVycm9yKFwiWEhSIHJlcXVlc3QgZXJyb3JcIik7XHJcbiAgICAgICAgeGhyLnNlbmQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwb3B1bGF0ZVNjcm9sbFZpZXcocmFua2luZ0RhdGE6IGFueVtdKSB7XHJcblxyXG5cclxuICAgICAgICBjb25zdCBjb250ZW50ID0gdGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQ7XHJcbiAgICAgICAgY29udGVudC5yZW1vdmVBbGxDaGlsZHJlbigpO1xyXG5cclxuICAgICAgICBpZiAoVXNlckluZm8uZ2V0RGF0YSlcclxuXHJcbiAgICAgICAgICAgIHJhbmtpbmdEYXRhLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnJhbmtJdGVtUHJlZmFiKTtcclxuICAgICAgICAgICAgY29uc3QgcmFua0l0ZW1Db21wID0gbm9kZS5nZXRDb21wb25lbnQoUmFua0l0ZW0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0ubmFtZSA9PT0gXCJZT1VcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJhbmtJdGVtQ29tcC5yYW5rTGFiZWwubm9kZS5jb2xvciA9IGNjLkNvbG9yLllFTExPVztcclxuICAgICAgICAgICAgICAgICAgICByYW5rSXRlbUNvbXAubGV2ZWxMYWJlbC5ub2RlLmNvbG9yID0gY2MuQ29sb3IuWUVMTE9XO1xyXG4gICAgICAgICAgICAgICAgICAgIHJhbmtJdGVtQ29tcC5uYW1lTGFiZWwubm9kZS5jb2xvciA9IGNjLkNvbG9yLllFTExPVztcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmFua0l0ZW1Db21wLmluaXQoaW5kZXggKyAxLCBpdGVtLmxldmVsLCBpdGVtLm5hbWUpO1xyXG4gICAgICAgICAgICBjb250ZW50LmFkZENoaWxkKG5vZGUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBpdGVtSGVpZ2h0ID0gdGhpcy5yYW5rSXRlbVByZWZhYi5kYXRhLmhlaWdodDtcclxuICAgICAgICBjb250ZW50LmhlaWdodCA9IHJhbmtpbmdEYXRhLmxlbmd0aCAqIGl0ZW1IZWlnaHQ7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbn1cclxuIl19