import { UserInfo, ChoiceType } from "../Info";
import Platform from "../../../framework/Platform";
import ViewManager from "../../../framework/plugin_boosts/ui/ViewManager";
import Consts from "../hex-lines-game/Consts";
import LanguageManager, { LanguageMode } from "../LanguageManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class WinDialog extends cc.Component {


    @property(cc.ParticleSystem)
    ps:cc.ParticleSystem = null;

    @property(cc.Label)
    levelLabel: cc.Label = null;

    @property(cc.Label)
    bannerLabel: cc.Label = null;

    @property(cc.Label)
    achievementLabel: cc.Label = null;
    @property(cc.Label)
    amountStepLabel: cc.Label = null;
    @property(cc.Label)
    rankLabel: cc.Label = null;
    @property(cc.Label)
    rewardLabel: cc.Label = null;
    @property(cc.Label)
    messageLabel: cc.Label = null;
    @property(cc.Label)
    nextLevelLabel: cc.Label = null;
    @property(cc.Label)
    skinStoreLabel: cc.Label = null;
    @property(cc.Label)
    challengeLabel: cc.Label = null;

    @property(cc.Label)
    stepLabel:cc.Label = null;

    @property(cc.Label)
    timeLabel:cc.Label = null;

    @property(cc.Label)
    percentLabel:cc.Label = null;

    @property(cc.Label)
    diamondLabel:cc.Label = null;

    @property(cc.Node)
    diamondNode: cc.Node = null;

    @property({ type: cc.Integer })
    ch_FontSize: number = 25;
    @property({ type: cc.Integer })
    vi_FontSize: number = 16;
    @property({ type: cc.Integer })
    eng_FontSize: number = 20;


    onLoad() { }
    onEnable() {
        switch (LanguageManager.instance.currentLanguage) {
            case LanguageMode.CN:
                this.set_label_lang("恭喜过关",
                    "用时        超过了         玩家",
                    "步",
                    "查看完整排行",
                    "本关奖励：",
                    "太厉害了",
                    "下一关",
                    "皮肤商店",
                    "发起挑战",
                );
                this.set_label_FontSize(this.ch_FontSize);
                break;
            case LanguageMode.VI:
                this.set_label_lang("Xin chúc mừng bạn đã vượt qua",
                    "Thời gian        vượt quá         Người chơi",
                    "bước",
                    "Xem bảng xếp hạng đầy đủ",
                    "Phần thưởng cho cấp độ này:",
                    "Thật tuyệt vời",
                    "Cấp độ tiếp theo",
                    "Cửa hàng trang phục",
                    "Đưa ra thử thách",
                );
                this.set_label_FontSize(this.vi_FontSize);

                break;
            case LanguageMode.EN:
                this.set_label_lang("Congratulations on passing",
                    "Time        Exceeded         Player",
                    "steps",
                    "View the full ranking",
                    "Rewards for this level:",
                    "It's amazing",
                    "Next Level",
                    "Skin Store",
                    "Launch a challenge",

                );
                this.set_label_FontSize(this.eng_FontSize);
                break;
        }
}


    set_label_lang(
        bannerLabelString: string,
        achievementLabelString: string,
        amountStepLabelString: string,
        rankLabelString: string,
        rewardLabelString: string,
        messageLabelString: string,
        nextLevelLabelString: string,
        skinStoreLabelString: string,
        challengeLabelString: string,
    ) {
        this.bannerLabel.string = bannerLabelString;
        this.achievementLabel.string = achievementLabelString;
        this.amountStepLabel.string = amountStepLabelString;
        this.rankLabel.string = amountStepLabelString;
        this.rewardLabel.string = rewardLabelString;
        this.messageLabel.string = messageLabelString;
        this.nextLevelLabel.string = nextLevelLabelString;
        this.skinStoreLabel.string = skinStoreLabelString;
        this.challengeLabel.string = challengeLabelString;
    }

    set_label_FontSize(fontSize: number) {
        if (LanguageManager.instance.currentLanguage == LanguageMode.VI)
            this.bannerLabel.fontSize -= 4;
        this.achievementLabel.fontSize = fontSize;
        this.amountStepLabel.fontSize = fontSize;
        this.rankLabel.fontSize = fontSize;
        this.rewardLabel.fontSize = fontSize;
        this.messageLabel.fontSize = fontSize;
        this.nextLevelLabel.fontSize = fontSize;
        this.skinStoreLabel.fontSize = fontSize;
        this.challengeLabel.fontSize = fontSize;
    }

    onShown()
    {
        this.ps.resetSystem();
        Platform.showSmallRank();
        switch (LanguageManager.instance.currentLanguage) {
            case LanguageMode.CN:
                this.levelLabel.string = cc.js.formatStr("- 第 %s 关 - ", UserInfo.currentLevel)

                this.set_label_FontSize(this.ch_FontSize);
                break;
            case LanguageMode.VI:
                this.levelLabel.string = cc.js.formatStr("- Cấp độ %s - ", UserInfo.currentLevel)

                this.set_label_FontSize(this.vi_FontSize);

                break;
            case LanguageMode.EN:
                this.levelLabel.string = cc.js.formatStr("- Level %s - ", UserInfo.currentLevel)

                this.set_label_FontSize(this.vi_FontSize);
                break;
        }
        this.stepLabel.string = UserInfo.stepUsed.toString()
        this.timeLabel.string = UserInfo.timePassed.toString() +"s";
        let p = g.decreaseFomula(0.99,0.3,UserInfo.timePassed + UserInfo.stepUsed,UserInfo.currentLevel + 50 )
        this.percentLabel.string = (p* 100 ).toFixed(0) +"%"

        this.diamondNode.active = false
        
        if(UserInfo.level == UserInfo.currentLevel)
        {
            let lv = UserInfo.level
            let choise = UserInfo.getChoice(ChoiceType.Levelup);
            if(choise > 0 && Math.random() > 0.5 && lv >= 3)
            {
                this.scheduleOnce(_=>{
                    ViewManager.instance.show("Game/LevelupDialog",lv,p)
                },1)
                this.diamondNode.active = false
            }else{
                this.diamondNode.active = true;
                p = Math.min(p,1);
                let diamond = Math.floor(Math.max(30 * p,10))
                this.diamondLabel.string = diamond.toString();
                UserInfo.addDiamond(diamond);
            }
            UserInfo.level = lv + 1
            Platform.uploadScore(UserInfo.level);
            UserInfo.save();
        }
        let choise = UserInfo.getChoice(ChoiceType.HB);
        if(choise == 1)
        {
            if(UserInfo.level >= 3)
            {
                if(!UserInfo.isUnlock(Consts.FreeSkinId))
                {
                    ViewManager.instance.show("Game/HbDialog")
                }
            }
        }
    }

    click_rank()
    {
        ViewManager.instance.show("wechat/WxRankDialog")
    }

    click_shop()
    {
        ViewManager.instance.show("Game/ShopDialog");
    }

    click_next()
    {
        UserInfo.currentLevel = UserInfo.currentLevel +1;
        cc.director.loadScene("Game")
    }

    click_home()
    {
        cc.director.loadScene("Main")
    }

    click_share()
    {
        Platform.share();
    }
}