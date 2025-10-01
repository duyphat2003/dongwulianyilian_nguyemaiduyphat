import { UserInfo } from "../Info";
import LevelSelector from "../../../framework/plugin_boosts/ui/game/LevelSelector";
import LanguageManager, { LanguageMode } from "../LanguageManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class LevelDialog extends cc.Component {

    onLoad () {}
    start () {}
    @property(LevelSelector)
    selector: LevelSelector;

    @property(cc.Label)
    continueLabel: cc.Label = null;

    @property(cc.Sprite)
    logoSprite: cc.Sprite = null;

    @property(cc.SpriteFrame)
    logoSprite_ch: cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    logoSprite_vi: cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    logoSprite_en: cc.SpriteFrame = null;


    @property({ type: cc.Integer })
    ch_FontSize: number = 25;
    @property({ type: cc.Integer })
    vi_FontSize: number = 16;
    @property({ type: cc.Integer })
    eng_FontSize: number = 20;

    onEnable() {
        switch (LanguageManager.instance.currentLanguage) {
            case LanguageMode.CN:
                this.set_label_lang("继续游戏",
                    this.logoSprite_ch,
                );
                this.set_label_FontSize(this.ch_FontSize);

                break;
            case LanguageMode.VI:
                this.set_label_lang("Tiếp tục trò chơi",
                    this.logoSprite_vi,
                );
                this.set_label_FontSize(this.vi_FontSize);

                break;
            case LanguageMode.EN:
                this.set_label_lang("Continue the game",
                    this.logoSprite_en,
                );
                this.set_label_FontSize(this.eng_FontSize);

                break;
        }
    }

    set_label_lang(continueLabelString: string,
       logoSpriteFrame: cc.SpriteFrame,
    ) {
        this.continueLabel.string = continueLabelString;
        this.logoSprite.spriteFrame = logoSpriteFrame;
    }

    set_label_FontSize(fontSize: number) {
        this.continueLabel.fontSize = fontSize;
    }

    onShown()
    {
        this.selector.currentLevel = UserInfo.level;
        this.selector.refresh()

        this.scheduleOnce(this.refreshLevels, 0.1)
    }

    refreshLevels()
    {
        this.selector.scrollToCurrentLevel();
    }

    select_level(lvnode)
    {
        
        this.gotoLevel(lvnode.name)
    }

    refreshLevelItem(data)
    {
    }

    gotoLevel(lv)
    {
        lv =  parseInt(lv)
        console.log("enter level"  , lv);
        UserInfo.currentLevel = lv;
        cc.director.loadScene("Game")
    }

    click_continue()
    {
        this.gotoLevel(UserInfo.level)
    }
}