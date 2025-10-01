import ViewManager from "../../framework/plugin_boosts/ui/ViewManager";
import { UserInfo } from "./Info";
import Platform from "../../framework/Platform";
import Device from "../../framework/plugin_boosts/gamesys/Device";
import { R } from "./hex-lines-game/Res";
import { Toast } from "../../framework/plugin_boosts/ui/ToastManager";
import LanguageManager, { LanguageMode } from "./LanguageManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Main extends cc.Component {

    static instance: Main = null;

    @property(cc.Node)
    drawRedPoint: cc.Node = null;

    @property(cc.Node)
    skinRedPoint: cc.Node = null;

    //Label
    @property(cc.Label)
    addToMyFavLabel: cc.Label = null;

    @property(cc.Label)
    playLabel: cc.Label = null;

    @property(cc.Label)
    skinLabel: cc.Label = null;

    @property(cc.Label)
    rankLabel: cc.Label = null;

    @property(cc.Label)
    modesLabel: cc.Label = null;

    @property(cc.Label)
    recommendedLabel: cc.Label = null;

    @property(cc.Label)
    challengingLabel: cc.Label = null;

    //Sprites
    @property(cc.Sprite)
    logoSprite: cc.Sprite = null;

    @property(cc.Sprite)
    volumnSprite: cc.Sprite = null;

    @property(cc.Sprite)
    spinSprite: cc.Sprite = null;

    // Sprite Frames
    @property(cc.SpriteFrame)
    logoSprite_ch: cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    logoSprite_vi: cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    logoSprite_en: cc.SpriteFrame = null;

    @property(cc.SpriteFrame)
    volumnSprite_ch: cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    volumnSprite_vi: cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    volumnSprite_en: cc.SpriteFrame = null;

    @property(cc.SpriteFrame)
    spinSprite_ch: cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    spinSprite_vi: cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    spinSprite_en: cc.SpriteFrame = null;

    @property(cc.Label)
    changeLanguageLabel: cc.Label = null;


    @property({ type: cc.Integer })
    ch_FontSize: number = 25;
    @property({ type: cc.Integer })
    vi_FontSize: number = 16;
    @property({ type: cc.Integer })
    eng_FontSize: number = 20;


    onLoad() {
        Main.instance = this;
        Platform.login();
        UserInfo.init();
        Device.playMusic(R.audio_bgm);
        console.log("UserInfo Level : " + UserInfo.level.toString());
    }

    refreshRedpoints() {
        if (g.isNextDay(UserInfo.freedrawTime)) {
            this.drawRedPoint.active = true
        }
        else {
            this.drawRedPoint.active = false;
        }
        this.skinRedPoint.active = UserInfo.diamond >= 500 && !UserInfo.isAllUnlocked()
    }

    start() {

        if (g.isNextDay(UserInfo.dailyGetTime)) {
            ViewManager.instance.show("Game/DailyDialog")
        }

        this.refreshRedpoints();

        if (g.isNextDay(UserInfo.luckyVideoWatchTime)) {
            UserInfo.luckyVideoWatchTime = new Date().getTime()
            UserInfo.luckyVideoWatchCount = 0;
        }

        Platform.showBannerAd();

        if (!LanguageManager.instance.isLanguageFileExist()) {
            LanguageManager.instance.saveLanguage(LanguageManager.instance.currentLanguage);

            cc.log("Created file:", LanguageManager.instance.currentLanguage);
        }

        LanguageManager.instance.loadLanguage();

        this.changeLanguageLabel.string = LanguageManager.instance.currentLanguage;

        switch (LanguageManager.instance.currentLanguage) {
            case LanguageMode.CN:
                this.set_label_lang("点击\"添加到我的小程序\"",
                    "开始游戏",
                    "皮肤",
                    "好友排行",
                    "更多游戏模式",
                    "推荐游戏",
                    "挑战好友",
                    this.logoSprite_ch,
                    this.volumnSprite_ch,
                    this.spinSprite_ch,
                );
                this.set_label_FontSize(this.ch_FontSize);

                break;
            case LanguageMode.VI:
                this.set_label_lang("Nhấp vào \"Thêm vào Applet của tôi\"",
                    "Bắt đầu trò chơi",
                    "Trang phục",
                    "Xếp hạng bạn bè",
                    "Nhiều chế độ chơi",
                    "Trò chơi đề xuất",
                    "Thử thách bạn bè",
                    this.logoSprite_vi,
                    this.volumnSprite_vi,
                    this.spinSprite_vi,
                );
                this.set_label_FontSize(this.vi_FontSize);

                break;
            case LanguageMode.EN:
                this.set_label_lang("Click \"Add to My Applet\"",
                    "Start the game",
                    "Skin",
                    "Friends Ranking",
                    "Game modes",
                    "Recommended Games",
                    "Challenge Friends",
                    this.logoSprite_en,
                    this.volumnSprite_en,
                    this.spinSprite_en,
                );
                this.set_label_FontSize(this.eng_FontSize);

                break;
        }
        cc.log("Current language:", LanguageManager.instance.currentLanguage);
    }


    click_change_language() {
        switch (LanguageManager.instance.currentLanguage) {
            case LanguageMode.CN:
                this.set_Language(LanguageMode.VI);
                this.set_label_lang("Nhấp vào \"Thêm vào Applet của tôi\"",
                    "Bắt đầu trò chơi",
                    "Trang phục",
                    "Xếp hạng bạn bè",
                    "Nhiều chế độ chơi",
                    "Trò chơi đề xuất",
                    "Thử thách bạn bè",
                    this.logoSprite_vi,
                    this.volumnSprite_vi,
                    this.spinSprite_vi,
                );
                this.set_label_FontSize(this.vi_FontSize);
                break;
            case LanguageMode.VI:
                this.set_Language(LanguageMode.EN);
                this.set_label_lang("Click \"Add to My Applet\"",
                    "Start the game",
                    "Skin",
                    "Friends Ranking",
                    "Game modes",
                    "Recommended Games",
                    "Challenge Friends",
                    this.logoSprite_en,
                    this.volumnSprite_en,
                    this.spinSprite_en,
                );
                this.set_label_FontSize(this.eng_FontSize);

                break;
            case LanguageMode.EN:
                this.set_Language(LanguageMode.CN);
                this.set_label_lang("点击\"添加到我的小程序\"",
                    "开始游戏",
                    "皮肤",
                    "好友排行",
                    "更多游戏模式",
                    "推荐游戏",
                    "挑战好友",
                    this.logoSprite_ch,
                    this.volumnSprite_ch,
                    this.spinSprite_ch,
                );
                this.set_label_FontSize(this.ch_FontSize);
                break;
        }
    }

    set_label_lang(addToMyFavString: string,
        playString: string,
        skinString: string,
        rankString: string,
        modesString: string,
        recommendedString: string,
        challengingString: string,
        logoSpriteFrame: cc.SpriteFrame,
        volumnSpriteFrame: cc.SpriteFrame,
        spinSpriteFrame: cc.SpriteFrame,
    ) {
        this.addToMyFavLabel.string = addToMyFavString; 
        this.playLabel.string = playString; 
        this.skinLabel.string = skinString; 
        this.rankLabel.string = rankString; 
        this.modesLabel.string = modesString; 
        this.recommendedLabel.string = recommendedString; 
        this.challengingLabel.string = challengingString;

        this.logoSprite.spriteFrame = logoSpriteFrame; 
        this.volumnSprite.spriteFrame = volumnSpriteFrame; 
        this.spinSprite.spriteFrame = spinSpriteFrame; 
    }

    set_label_FontSize(fontSize: number) {
        this.addToMyFavLabel.fontSize = fontSize;
        if (LanguageManager.instance.currentLanguage == LanguageMode.VI)
            this.addToMyFavLabel.fontSize -= 4;
        this.playLabel.fontSize = fontSize;
        this.skinLabel.fontSize = fontSize;
        this.rankLabel.fontSize = fontSize;
        this.modesLabel.fontSize = fontSize;
        this.recommendedLabel.fontSize = fontSize;
        this.challengingLabel.fontSize = fontSize;
    }


    set_Language(language: LanguageMode) {
        this.changeLanguageLabel.string = language.toString();

        LanguageManager.instance.saveLanguage(language);

        cc.log("Changed language to:", LanguageManager.instance.currentLanguage);

        LanguageManager.instance.loadLanguage();

        cc.log("Load language:", LanguageManager.instance.currentLanguage);
    }

    click_play() {
        ViewManager.instance.show("Game/LevelDialog")
    }

    toggle_sfx(t) {
        Device.setSoundsEnable(!t.isChecked)
    }

    click_skin() {
        ViewManager.instance.show("Game/ShopDialog")
    }

    click_rank() {
        ViewManager.instance.show("wechat/WxRankDialog")
    }

    onShare() {

    }

    click_share() {
        Platform.share(this.onShare);
    }

    click_luck() {
        ViewManager.instance.show("Game/LuckyDialog")
    }


    click_more() {
        switch (LanguageManager.instance.currentLanguage) {
            case LanguageMode.CN:
                Toast.make("敬请期待")
                break;
            case LanguageMode.VI:
                Toast.make("Hãy theo dõi")
                break;
            case LanguageMode.EN:
                Toast.make("Stay tuned")
                break;
        }
    }

    // update (dt) {}




}
