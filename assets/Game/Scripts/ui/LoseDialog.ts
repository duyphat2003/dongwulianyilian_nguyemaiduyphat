// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import ViewManager from "../../../framework/plugin_boosts/ui/ViewManager";
import LanguageManager, { LanguageMode } from "../LanguageManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    titlelabel: cc.Label = null;
    @property(cc.Label)
    playAgainlabel: cc.Label = null;
    @property(cc.Label)
    homelabel: cc.Label = null;


    @property({ type: cc.Integer })
    ch_FontSize: number = 25;
    @property({ type: cc.Integer })
    vi_FontSize: number = 16;
    @property({ type: cc.Integer })
    eng_FontSize: number = 20;


    params: any = null; // reference callback from ViewManager
    init(params: any) {
        this.params = params;
    }

    onEnable() {
        switch (LanguageManager.instance.currentLanguage) {
            case LanguageMode.CN:
                this.set_label_lang("你想再玩一次吗？",
                    "继续",
                    "不是",
                );
                this.set_label_FontSize(this.ch_FontSize);
                break;
            case LanguageMode.VI:
                this.set_label_lang("Bạn có muốn chơi lại không?",
                    "Tiếp tục",
                    "Không",
                );
                this.set_label_FontSize(this.vi_FontSize);

                break;
            case LanguageMode.EN:
                this.set_label_lang(
                    "Do you want to play again?",
                    "Continue",
                    "No"
                );
                this.set_label_FontSize(this.eng_FontSize);
                break;
        }
    }


    set_label_lang(
        titlelabelString: string,
        playAgainlabelString: string,
        homelabelString: string,
    ) {
        this.titlelabel.string = titlelabelString;
        this.playAgainlabel.string = playAgainlabelString;
        this.homelabel.string = homelabelString;
    }

    set_label_FontSize(fontSize: number) {
        this.titlelabel.fontSize = fontSize;
        this.playAgainlabel.fontSize = fontSize;
        this.homelabel.fontSize = fontSize;
    }

    onContinueButtonClick() {
        this.params.onContinue();
        ViewManager.instance.hide(this.node); // notify ViewManager
    }

    onQuitButtonClick() {
        this.params.onQuit();
        ViewManager.instance.hide(this.node); // notify ViewManager
    }
}
