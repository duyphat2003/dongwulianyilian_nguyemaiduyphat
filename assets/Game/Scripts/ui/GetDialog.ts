import View from "../../../framework/plugin_boosts/ui/View";
import { UserInfo, ChoiceType } from "../Info";
import { Toast } from "../../../framework/plugin_boosts/ui/ToastManager";
import LuckyDialog from "./LuckyDialog";
import ViewManager from "../../../framework/plugin_boosts/ui/ViewManager";
import Device from "../../../framework/plugin_boosts/gamesys/Device";
import Platform from "../../../framework/Platform";
import LanguageManager, { LanguageMode } from "../LanguageManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GetDialog extends cc.Component {

    onLoad () {}
    start() {

    }

    onEnable() {
        switch (LanguageManager.instance.currentLanguage) {
            case LanguageMode.CN:
                this.set_label_lang("=   恭喜获得  =",
                    "钻石 x",
                    "领取",
                    "双倍领取",
                );
                this.set_label_FontSize(this.ch_FontSize);
                break;
            case LanguageMode.VI:
                this.set_label_lang("= Xin chúc mừng bạn đã chiến thắng =",
                    "Kim cương x",
                    "Nhận được",
                    "Nhân đôi số tiền",
                );
                this.set_label_FontSize(this.vi_FontSize);
                break;
            case LanguageMode.EN:
                this.set_label_lang("= Congratulations on winning =",
                    "Diamond x",
                    "Receive",
                    "Double the amount",
                );
                this.set_label_FontSize(this.eng_FontSize);
                break;
        }
    }


    @property(cc.Label)
    bannerLabel: cc.Label = null;

    @property(cc.Label)
    diamondLabel: cc.Label = null;

    @property(cc.Label)
    receiveLabel: cc.Label = null;

    @property(cc.Label)
    receiveDoubleLabel: cc.Label = null;

    count:number = 0;

    @property(cc.Node)
    node_close: cc.Node = null;


    set_label_lang(bannerString: string,
        diamondString: string,
        receiveString: string,
        receiveDoubleString: string,
    ) {
        this.bannerLabel.string = bannerString;
        this.diamondLabel.string = diamondString;
        this.receiveLabel.string = receiveString;
        this.receiveDoubleLabel.string = receiveDoubleString;
    }

    @property({ type: cc.Integer })
    ch_FontSize: number;
    @property({ type: cc.Integer })
    vi_FontSize: number;
    @property({ type: cc.Integer })
    eng_FontSize: number;

    set_label_FontSize(fontSize: number) {
        this.bannerLabel.fontSize = fontSize;
        this.diamondLabel.fontSize = fontSize;
        this.receiveLabel.fontSize = fontSize;
        this.receiveDoubleLabel.fontSize = fontSize;
    }

    share_suc()
    {
        UserInfo.addDiamond(this.count * 2 )
        UserInfo.save();
        // Device.playEffect(R.audio_get_diamond)
        this.getComponent(View).hide();
        ViewManager.instance.show("Game/LuckyDialog")
    }

    click_double()
    {
        //share 
        //if share suc 
        // this.share_suc()
        let choice = UserInfo.getChoice(ChoiceType.Get)
        if(choice == 1)
        {
            Platform.share(this.share_suc, this); 
            cc.log("Platform.share(this.share_suc, this)");

        }else if(choice == 0)
        {
            this.share_suc();
            cc.log(" this.share_suc()");

        }else {
            //video\
            Platform.watch_video(this.share_suc, this)
            cc.log("Platform.watch_video(this.share_suc, this)");

        }
    }

    onShown(count)
    {
        this.count = count;
        // SpriteFrameCache.instance.getSpriteFrame("Game/textures/car/" + cfg.img).then(sf=>this.icon.spriteFrame= sf);
        this.diamondLabel.string =  "+" + count;
        this.node_close.active = false
        this.unschedule(this.delayShow)
        this.scheduleOnce(this.delayShow,2)
    }

    delayShow()
    {
        this.node_close.active = true
    }

    click_no()
    {
        this.getComponent(View).hide();
        UserInfo.addDiamond(this.count )
        UserInfo.save()
        // Device.playEffect(R.audio_get_diamond)
        ViewManager.instance.show("Game/LuckyDialog")
    }
}