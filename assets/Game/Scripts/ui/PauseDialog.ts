import Platform from "../../../framework/Platform";
import LanguageManager, { LanguageMode } from "../LanguageManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class PauseDialog extends cc.Component {

    onLoad () {}
    start () {}
    @property(cc.Label)
    closeLabel: cc.Label = null;

    @property(cc.Label)
    homeLabel: cc.Label = null;

    @property(cc.Label)
    restartLabel: cc.Label = null;

    @property(cc.Label)
    requestHelpLabel: cc.Label = null;

    @property({ type: cc.Integer })
    ch_FontSize: number = 25;
    @property({ type: cc.Integer })
    vi_FontSize: number = 20;
    @property({ type: cc.Integer })
    eng_FontSize: number = 20;

    onEnable() {
        switch (LanguageManager.instance.currentLanguage) {
            case LanguageMode.VI:
                this.set_label_lang(
                    "Đóng",
                    "Trang chính",
                    "Chạy lại",
                    "Yêu cầu trợ giúp",
                );
                this.set_label_FontSize(this.vi_FontSize);
                break;
            case LanguageMode.EN:
                this.set_label_lang(
                    "Close",
                    "Home",
                    "Restart",
                    "Requesting Help",
                );
                this.set_label_FontSize(this.eng_FontSize);

                break;
            case LanguageMode.CN:
                this.set_label_lang(
                    "关闭",
                    "主界面",
                    "重新开始",
                    "请求帮助",
                );
                this.set_label_FontSize(this.ch_FontSize);
                break;
        }
    }

    set_label_lang(
        closeLabelString: string,
        homeLabelString: string,
        restartLabelString: string,
        requestHelpLabelString: string,
    ) {
        this.closeLabel.string = closeLabelString;
        this.homeLabel.string = homeLabelString;
        this.restartLabel.string = restartLabelString;
        this.requestHelpLabel.string = requestHelpLabelString;
    }

    set_label_FontSize(fontSize: number) {
        this.closeLabel.fontSize = fontSize;
        this.homeLabel.fontSize = fontSize;
        this.restartLabel.fontSize = fontSize;
        this.requestHelpLabel.fontSize = fontSize;
    }

    click_share()
    {
        Platform.share();
    }

    click_home()
    {
        cc.director.loadScene("Main")
    }


    click_restart()
    {
        cc.director.loadScene("Game")
    }
}