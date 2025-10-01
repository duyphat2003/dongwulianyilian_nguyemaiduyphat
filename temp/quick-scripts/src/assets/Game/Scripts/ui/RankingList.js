"use strict";
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