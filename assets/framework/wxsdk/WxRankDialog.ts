import Platform from "../Platform";
import View from "../plugin_boosts/ui/View";
import ViewManager from "../plugin_boosts/ui/ViewManager";
import Common from "../plugin_boosts/utils/Common";
import Signal from "../plugin_boosts/misc/Signal";
import LanguageManager, { LanguageMode } from "../../Game/Scripts/LanguageManager";


const {ccclass, property} = cc._decorator;

@ccclass
export default class WxRankDialog extends cc.Component {

    @property(cc.Label)
    closeLabel: cc.Label = null;

    @property(cc.Label)
    titleLabel: cc.Label = null;

    first:boolean = true;

    closeSignal = new Signal();

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
                    "Đóng cửa",
                    "Hạng         Cấp         Tên",
                );
                this.set_label_FontSize(this.vi_FontSize);
                break;
            case LanguageMode.EN:
                this.set_label_lang(
                    "Closure",
                    "Rank         Level         Name",
                );
                this.set_label_FontSize(this.eng_FontSize);

                break;
            case LanguageMode.CN:
                this.set_label_lang(
                    "关闭",
                    "秩         等级         姓名",
                );
                this.set_label_FontSize(this.ch_FontSize);
                break;
        }
    }

    set_label_lang(
        closeLabelString: string,
        titleLabelString: string,
    ) {
        this.closeLabel.string = closeLabelString;
        this.titleLabel.string = titleLabelString;
    }

    set_label_FontSize(fontSize: number) {
        this.closeLabel.fontSize = fontSize;
    }

    onShown(callback,target) {
        this.closeSignal.on(callback,target)
        if(this.first)
        {
            this.scheduleOnce(this.reOpen,0.1)
        }else{
            Platform.showRank();
        }
        
    }

    reOpen()
    {
        Platform.showRank();
        this.first = false;
        this.getComponent(View).hide();
        // setTimeout(() => {
            ViewManager.instance.show("wechat/WxRankDialog")
        // }, 100);
    }

    click_close()
    {
        Platform.hideRank();
        this.getComponent(View).hide();
        this.closeSignal.fire();
    }
}
