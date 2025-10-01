const { ccclass, property } = cc._decorator;

@ccclass
export default class RankItem extends cc.Component {
    @property(cc.Label)
    rankLabel: cc.Label = null;
    @property(cc.Label)
    levelLabel: cc.Label = null;
    @property(cc.Label)
    nameLabel: cc.Label = null;

    init(rank: number, name: string, score: number) {
        this.rankLabel.string = rank.toString();
        this.levelLabel.string = name;
        this.nameLabel.string = score.toString();
    }
}
