import { Toast } from "../../../framework/plugin_boosts/ui/ToastManager";
import ViewManager from "../../../framework/plugin_boosts/ui/ViewManager";
import View from "../../../framework/plugin_boosts/ui/View";
import { UserInfo } from "../Info";
import Platform from "../../../framework/Platform";
import Device from "../../../framework/plugin_boosts/gamesys/Device";
import { R } from "../hex-lines-game/Res";
import UIFunctions from "../../../framework/plugin_boosts/ui/UIFunctions";
import Main from "../Main";
import LanguageManager, { LanguageMode } from "../LanguageManager";
import AddToMyFav from "../../../framework/wxsdk/AddToMyFav";

const {ccclass, property} = cc._decorator;

@ccclass
export default class LuckyDialog extends cc.Component {


    onEnable() {
            switch (LanguageManager.instance.currentLanguage) {
            case LanguageMode.CN:
                this.set_label_lang('正在给您挑选奖品',
                    '正在给您挑选奖品',
                    '恭喜你抽中了',
                    "免费一次",
                    "观看视频",
                    "幸运转盘",
                    );
                    this.set_label_FontSize(this.ch_FontSize);
                break;
            case LanguageMode.VI:
                this.set_label_lang( 'Chọn giải thưởng cho bạn',
                    'Chọn giải thưởng cho bạn',
                    'Xin chúc mừng chiến thắng',
                    "Miễn phí một lần",
                    "Xem video",
                    "Vòng quay may mắn",
                );
                    this.set_label_FontSize(this.vi_FontSize);
                break;
            case LanguageMode.EN:
                this.set_label_lang('Selecting prizes for you',
                    'Selecting prizes for you',
                    'Congratulations on winning',
                    "Free once",
                    "Watch the video",
                    "Lucky Wheel",
                    );
                    this.set_label_FontSize(this.eng_FontSize);
                break;
        }
    }

    @property(cc.Sprite)
    wheelSp: cc.Sprite

    @property(cc.SpriteFrame)
    misterySp: cc.SpriteFrame

    _canRotate = true;

    @property([cc.Sprite])
    sprites:cc.Sprite[] = []

    @property([cc.Label])
    labels:cc.Label[] = []

    @property(cc.Button)
    btn_freedraw:cc.Button = null;

    @property(cc.Button)
    btn_videodraw:cc.Button = null;

    @property(cc.Node)
    freedrawTip:cc.Node = null;


    @property(cc.Label)
    drawLabel:cc.Label = null;
    @property(cc.Label)
    freeDrawLabel:cc.Label = null;
    @property(cc.Label)
    watchVideoLabel:cc.Label = null;
    @property(cc.Label)
    bannerLabel:cc.Label = null;

    static MaxVideoCount = 5;

    // click_draw()
    // {

    // }

    @property({ type: cc.Integer })
    ch_FontSize: number = 0;
    @property({ type: cc.Integer })
    vi_FontSize: number = 0;
    @property({ type: cc.Integer })
    eng_FontSize: number = 0;

    set_label_FontSize(fontSize: number) {
        this.freeDrawLabel.fontSize = fontSize;
        this.watchVideoLabel.fontSize = fontSize;
        this.bannerLabel.fontSize = fontSize;
    }

    pool = []
    

    share_succ()
    {
        this.startDraw();
        UserInfo.freedrawTime = new Date().getTime()
        UserInfo.save()
        Main.instance.refreshRedpoints()
        this.onShown();
    }

    click_freeedraw()
    {
        if (g.isNextDay(UserInfo.freedrawTime))
        {
            this.share_succ()
        }
    }

    onLoad () {
        for (var i = 0 ;i < R.luckyConfig.json.length; i ++)
        {
            var cfg = R.luckyConfig.json[i];
            let chance = parseFloat(cfg.chance)
            for (var j = 0 ; j < chance * 2 ; j++)
            {
                this.pool.push(i);
            }
        }
        this.pool.shuffle()
        console.log(this.pool);
    }


    startDraw()
    {
        let id = g.getRandomInArray(this.pool)
        this.startWheel(id)
        Device.playEffect(R.audio_draw);
    }

    // 5次
    click_videodraw()
    {
        if (UserInfo.luckyVideoWatchCount >= LuckyDialog.MaxVideoCount)
        {
            if(g.isNextDay(UserInfo.luckyVideoWatchTime))
            {
                UserInfo.luckyVideoWatchCount = 0;
                UserInfo.luckyVideoWatchTime = new Date().getTime();
            }else{
                // Platform.share(_=>{
                //     this.startDraw()
                // })
                return;
            }
        }else{
            Platform.watch_video(_=>{
                UserInfo.luckyVideoWatchCount ++ 
                this.startDraw()
            })
        }
        //video 流量主开通后
        // Platform.watch_video(_=>{
        //     this.startDraw()
        //     UserInfo.luckyVideoWatchCount += 1;
        //     UserInfo.save();
        //     this.onShown()
        //     // Toast.make("还剩" +  (5- UserInfo.luckyVideoWatchCount) +"次机会")
        // });
    }


    calculateAngle(index:number){//奖品的index从0开始
        let angle = -(index-1) * 60 - 30  -  4 * 360 -  this.wheelSp.node.rotation %360 
        return angle
    }

    onShown()
    {
        if (UserInfo.luckyVideoWatchCount >=  LuckyDialog.MaxVideoCount)
        {
            switch (LanguageManager.instance.currentLanguage) {
                case LanguageMode.CN:
                    this.drawLabel.string = '已用完';
                    this.drawLabel.fontSize = this.ch_FontSize;
                    break;
                case LanguageMode.VI:
                    this.drawLabel.string = 'Kiệt sức';
                    this.drawLabel.fontSize = this.vi_FontSize;
                    break;
                case LanguageMode.EN:
                    this.drawLabel.string = 'Exhausted';
                    this.drawLabel.fontSize = this.eng_FontSize;
                    break;
            }
            UIFunctions.setButtonEnabled(this.btn_videodraw,false)
        } else {
            switch (LanguageManager.instance.currentLanguage) {
                case LanguageMode.CN:
                    this.drawLabel.string = '看视频抽奖';
                    this.drawLabel.fontSize = this.ch_FontSize;
                    break;
                case LanguageMode.VI:
                    this.drawLabel.string = 'Xem video và giành giải thưởng';
                    this.drawLabel.fontSize = this.vi_FontSize;
                    break;
                case LanguageMode.EN:
                    this.drawLabel.string = 'Watch the video and win the prize';
                    this.drawLabel.fontSize = this.eng_FontSize;
                    break;
            }
            UIFunctions.setButtonEnabled(this.btn_videodraw,true)
        }
        if (g.isGreaterDate(new Date(),  new Date(UserInfo.freedrawTime)) )
        {
            //free draw 
            this.btn_freedraw.interactable = true
            this.btn_freedraw.node.opacity = 255;
            this.freedrawTip.active = false
        }else{
            this.btn_freedraw.interactable = false
            this.btn_freedraw.node.opacity = 100;
            this.freedrawTip.active = true;
        }

        for (var i = 0 ; i< R.luckyConfig.json.length; i ++)
        {
            let cfg = R.luckyConfig.json[i]
            this.labels[i].string = cfg.gold_reward + ""

            if (this.sprites[i].spriteFrame == this.misterySp) {

            }
        }
        switch (LanguageManager.instance.currentLanguage) {
            case LanguageMode.CN:
                this.labels[2].string = '神秘皮肤';
                this.labels[2].fontSize = this.ch_FontSize;
                break;
            case LanguageMode.VI:
                this.labels[2].string = 'Trang phục bí ẩn';
                this.labels[2].fontSize = this.vi_FontSize;
                break;
            case LanguageMode.EN:
                this.labels[2].string = 'Mysterious Skin';
                this.labels[2].fontSize = this.eng_FontSize;
                break;
        }

    }

    startWheelMessage: string = "";
    showResMessage: string = "";
    startWheel(id)
    {
        console.log("target wheel:" ,id);
        let angle = this.calculateAngle(id)
        if (!this._canRotate){
            Toast.make(this.startWheelMessage + '...');
            return
        }
        this._canRotate = false

        let stage3 = cc.rotateBy(Math.abs(angle/400),angle)
        let callFunc = cc.callFunc(function(){
            this._canRotate = true
            this.showRes(id)
        }.bind(this))
        let sequence = cc.sequence(stage3,callFunc)
        this.wheelSp.node.runAction(sequence.easing(cc.easeQuadraticActionInOut()))
    }

    showRes(id)
    {
        let cfg = R.luckyConfig.json[id]
        let gold = !isNaN((Number(cfg.gold_reward)))
        if(gold)
        {
            this.getComponent(View).hide()
            ViewManager.instance.show("Game/GetDialog",cfg.gold_reward)
        }
        else{
            //神秘
            Toast.make(this.showResMessage + " " + cfg.gold_reward);
            UserInfo.unlock(g.randomInt(0,6));
            // Device.playEffect(R.audio_unlock);
        }
    }


    set_label_lang(clickCloseMessage_text: string,
        startWheelMessage_text: string,
        showResMessage_text: string,
        freeDrawString: string,
        watchVideoString: string,
        bannerString: string,
    ) {
        this.clickCloseMessage = clickCloseMessage_text;
        this.startWheelMessage = startWheelMessage_text;
        this.showResMessage = showResMessage_text;
        this.freeDrawLabel.string = freeDrawString;
        this.watchVideoLabel.string = watchVideoString;
        this.bannerLabel.string = bannerString;
    }

    clickCloseMessage: string; 
    click_close()
    {
        if (!this._canRotate){
            Toast.make(this.clickCloseMessage + '...');
            return 
        }
        this.getComponent(View).hide()
    }


}