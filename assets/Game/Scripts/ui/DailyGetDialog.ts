import { UserInfo, ChoiceType } from "../Info";
import View from "../../../framework/plugin_boosts/ui/View";
import { Toast } from "../../../framework/plugin_boosts/ui/ToastManager";
import Platform from "../../../framework/Platform";
import LanguageManager, { LanguageMode } from "../LanguageManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class DailyGetDialog extends cc.Component {

    onLoad () {}
    start() {
        switch (LanguageManager.instance.currentLanguage) {
            case LanguageMode.CN:
                this.set_label_lang(cc.js.formatStr("钻石 x " + this.diamond),
                    "双倍领取",
                    "=   每日奖励  =",
                    "领取",
                );
                break;
            case LanguageMode.VI:
                this.set_label_lang(cc.js.formatStr("Kim cương x " + this.diamond),
                    "Nhân đôi số tiền",
                    "= Phần thưởng hàng ngày =",
                    "Nhận được",
                );

                break;
            case LanguageMode.EN:
                this.set_label_lang(cc.js.formatStr("Diamond x " + this.diamond),
                    "Double the amount",
                    "= Daily Rewards =",
                    "Receive",
                );
                break;
        }
    }
    diamond:number = 0;

    @property(cc.Label)
    rewardLabel: cc.Label = null;

    @property(cc.Label)
    doubleButtonLabel: cc.Label = null;

    @property(cc.Label)
    bannerLabel: cc.Label = null;

    @property(cc.Label)
    receiveButtonLabel: cc.Label = null;

    onShown()
    {
        this.diamond = g.randomInt(20,50);
        this.rewardLabel.string = cc.js.formatStr("钻石 x " + this.diamond)
    }

    click_get()
    {
        // share or video 
        UserInfo.addDiamond(this.diamond)
        UserInfo.dailyGetTime = new Date().getTime()
        UserInfo.save()
        this.getComponent(View).hide()
    }

    share_succ()
    {
        UserInfo.addDiamond(this.diamond * 2);
        UserInfo.dailyGetTime = new Date().getTime()
        UserInfo.save()
        this.getComponent(View).hide()
    }

    click_get_double()
    {
        //share orvideo
        let choice = UserInfo.getChoice(ChoiceType.DailyGet);
        if (choice == 0)
        {
            this.share_succ();
        }else if(choice == 1){
            Platform.share(this.share_succ,this)
        }else{
            //watch video
            Platform.watch_video(this.share_succ,this)
        }
    }

    set_label_lang(rewardString: string,
        doubleButtonLabelString: string,
        bannerString: string,
        receiveButtonString: string,
    ) {
        this.rewardLabel.string = rewardString;
        this.doubleButtonLabel.string = doubleButtonLabelString;
        this.bannerLabel.string = bannerString;
        this.receiveButtonLabel.string = receiveButtonString;
    }
}