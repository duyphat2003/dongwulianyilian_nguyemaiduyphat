
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcdWlcXFJhbmtpbmdMaXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnQ0FBbUM7QUFDbkMsdUNBQWtDO0FBRTVCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXlDLCtCQUFZO0lBQXJEO1FBQUEscUVBbUZDO1FBaEZHLGdCQUFVLEdBQWtCLElBQUksQ0FBQztRQUdqQyxvQkFBYyxHQUFjLElBQUksQ0FBQztRQUVqQyxZQUFNLEdBQVcsNERBQTRELENBQUM7O0lBMkVsRixDQUFDO0lBekVHLDJCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsR0FBRyxlQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFFakUsQ0FBQztJQUVELGlDQUFXLEdBQVg7UUFBQSxpQkF5Q0M7UUF4Q0csSUFBTSxHQUFHLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQztRQUNqQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ25DLEdBQUcsQ0FBQyxNQUFNLEdBQUc7WUFDVCxJQUFJLEdBQUcsQ0FBQyxNQUFNLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxFQUFFO2dCQUN2QyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFFeEMsMEJBQTBCO2dCQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBakIsQ0FBaUIsQ0FBQyxDQUFD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QUFDLE1BQU0sQ0FBQzt1REFDYTtJQU5oQixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBbUYvQjtJQUFELGtCQUFDO0NBbkZELEFBbUZDLENBbkZ3QyxFQUFFLENBQUMsU0FBUyxHQW1GcEQ7a0JBbkZvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVXNlckluZm8gfSBmcm9tIFwiLi4vSW5mb1wiO1xuaW1wb3J0IFJhbmtJdGVtIGZyb20gXCIuL1JhbmtJdGVtXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYW5raW5nTGlzdCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuU2Nyb2xsVmlldylcbiAgICBzY3JvbGxWaWV3OiBjYy5TY3JvbGxWaWV3ID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcmFua0l0ZW1QcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBhcGlVcmw6IHN0cmluZyA9IFwiaHR0cHM6Ly81ZDgyMGYxNzFjOGZmNzAwMTRlZjQzOGQubW9ja2FwaS5pby8xL3JhbmtpbmctbGlzdFwiO1xuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMubG9hZFJhbmtpbmcoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJVc2VySW5mbyBMZXZlbCA6IFwiICsgVXNlckluZm8ubGV2ZWwudG9TdHJpbmcoKSk7XG5cbiAgICB9XG5cbiAgICBsb2FkUmFua2luZygpIHtcbiAgICAgICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIHhoci5vcGVuKFwiR0VUXCIsIHRoaXMuYXBpVXJsLCB0cnVlKTtcbiAgICAgICAgeGhyLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID49IDIwMCAmJiB4aHIuc3RhdHVzIDwgMzAwKSB7XG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpOyBcblxuICAgICAgICAgICAgICAgIC8vIFNvcnQgYXNjZW5kaW5nIGJ5IGxldmVsXG4gICAgICAgICAgICAgICAgZGF0YS5zb3J0KChhLCBiKSA9PiBhLmxldmVsIC0gYi5sZXZlbCk7XG5cblxuICAgICAgICAgICAgICAgIC8vIEFkZCB5b3Ugd2hlbiB5b3UgaW4gdG9wIDEwXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBkYXRhW2ldO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGl0ZW0ubmFtZSArIFwiIDogXCIgKyBpdGVtLmxldmVsLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5sZXZlbCA8PSBVc2VySW5mby5sZXZlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmxldmVsID0gVXNlckluZm8ubGV2ZWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5uYW1lID0gXCJZT1VcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVtcE5hbWUgPSBcIllPVVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlbXBMZXZlbCA9IFVzZXJJbmZvLmxldmVsO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVtpIC0gMV0ubmFtZSA9IGl0ZW0ubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhW2kgLSAxXS5sZXZlbCA9IGl0ZW0ubGV2ZWw7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLm5hbWUgPSB0ZW1wTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmxldmVsID0gdGVtcExldmVsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gU29ydCBkZXNjZW5kaW5nIGJ5IGxldmVsXG4gICAgICAgICAgICAgICAgZGF0YS5zb3J0KChhLCBiKSA9PiBiLmxldmVsIC0gYS5sZXZlbCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1bGF0ZVNjcm9sbFZpZXcoZGF0YSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJYSFIgZmFpbGVkOlwiLCB4aHIuc3RhdHVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgeGhyLm9uZXJyb3IgPSAoKSA9PiBjb25zb2xlLmVycm9yKFwiWEhSIHJlcXVlc3QgZXJyb3JcIik7XG4gICAgICAgIHhoci5zZW5kKCk7XG4gICAgfVxuXG4gICAgcG9wdWxhdGVTY3JvbGxWaWV3KHJhbmtpbmdEYXRhOiBhbnlbXSkge1xuXG5cbiAgICAgICAgY29uc3QgY29udGVudCA9IHRoaXMuc2Nyb2xsVmlldy5jb250ZW50O1xuICAgICAgICBjb250ZW50LnJlbW92ZUFsbENoaWxkcmVuKCk7XG5cbiAgICAgICAgaWYgKFVzZXJJbmZvLmdldERhdGEpXG5cbiAgICAgICAgICAgIHJhbmtpbmdEYXRhLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5yYW5rSXRlbVByZWZhYik7XG4gICAgICAgICAgICBjb25zdCByYW5rSXRlbUNvbXAgPSBub2RlLmdldENvbXBvbmVudChSYW5rSXRlbSk7XG4gICAgICAgICAgICByYW5rSXRlbUNvbXAuaW5pdChpbmRleCArIDEsIGl0ZW0ubGV2ZWwsIGl0ZW0ubmFtZSk7XG4gICAgICAgICAgICBjb250ZW50LmFkZENoaWxkKG5vZGUpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBpdGVtSGVpZ2h0ID0gdGhpcy5yYW5rSXRlbVByZWZhYi5kYXRhLmhlaWdodDtcbiAgICAgICAgY29udGVudC5oZWlnaHQgPSByYW5raW5nRGF0YS5sZW5ndGggKiBpdGVtSGVpZ2h0O1xuICAgIH1cblxuXG5cblxuXG5cbn1cbiJdfQ==