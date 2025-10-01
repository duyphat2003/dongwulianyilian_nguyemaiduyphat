"use strict";
cc._RF.push(module, '0a9001j13BNu7IepNsNiLd8', 'RankItem');
// Game/Scripts/ui/RankItem.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var RankItem = /** @class */ (function (_super) {
    __extends(RankItem, _super);
    function RankItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rankLabel = null;
        _this.levelLabel = null;
        _this.nameLabel = null;
        return _this;
    }
    RankItem.prototype.init = function (rank, name, score) {
        this.rankLabel.string = rank.toString();
        this.levelLabel.string = name;
        this.nameLabel.string = score.toString();
    };
    __decorate([
        property(cc.Label)
    ], RankItem.prototype, "rankLabel", void 0);
    __decorate([
        property(cc.Label)
    ], RankItem.prototype, "levelLabel", void 0);
    __decorate([
        property(cc.Label)
    ], RankItem.prototype, "nameLabel", void 0);
    RankItem = __decorate([
        ccclass
    ], RankItem);
    return RankItem;
}(cc.Component));
exports.default = RankItem;

cc._RF.pop();