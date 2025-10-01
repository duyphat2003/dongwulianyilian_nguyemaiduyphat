import UIComponent from "./UIComponent";
import ViewManager from "./ViewManager";
import { event } from "../utils/EventManager";
import UIFunctions from "./UIFunctions";
import { Toast } from "./ToastManager";
import LanguageManager, { LanguageMode } from "../../../Game/Scripts/LanguageManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class View extends UIComponent {
    // isTouchEnabled: boolean = true;
    emit(event,msg)
    {
        event.emit(msg)
      // this.node.emit(msg);  
    }

    name:string;
    @property
    isDialog:boolean = false;

    @property
    hasWidget:boolean = false;

    target:any;

    @property
    opacity:number = 160;

    @property
    childrenAnimation:boolean = false;


    touchBlocker:cc.Node = null;
    touchBlockerComp: cc.BlockInputEvents = null;

    @property(cc.Label)
    guideLabel: cc.Label = null;

    @property(cc.Label)
    startLabel: cc.Label = null;

    @property({ type: cc.Integer })
    ch_FontSize: number = 25;
    @property({ type: cc.Integer })
    vi_FontSize: number = 16;
    @property({ type: cc.Integer })
    eng_FontSize: number = 20;

    onEnable() {
        if (this.guideLabel == null || this.startLabel == null) {
            return;
        }
        switch (LanguageManager.instance.currentLanguage) {
            case LanguageMode.CN:
                this.set_label_lang("连接相同的2个动物",
                    "点击任意处关闭",
                );
                this.set_label_FontSize(this.ch_FontSize);

                break;
            case LanguageMode.VI:
                this.set_label_lang("Nối hai con vật giống hệt nhau.",
                    "Nhấp vào bất kỳ đâu để đóng.",                );
                this.set_label_FontSize(this.vi_FontSize);

                break;
            case LanguageMode.EN:
                this.set_label_lang("Connect two identical animals.",
                    "Click anywhere to close.",                );
                this.set_label_FontSize(this.eng_FontSize);

                break;
        }
    }

    set_label_lang(
        guideLabelString: string,
        startLabelString: string,
    ) {
        this.guideLabel.string = guideLabelString;
        this.startLabel.string = startLabelString;
    }

    set_label_FontSize(fontSize: number) {
        this.guideLabel.fontSize = fontSize;
        this.startLabel.fontSize = fontSize;
    }

    // @property
    // showAnimationName:string = "";
    // @property
    // hideAnimationName:string = "";

    // @property([cc.Component.EventHandler])
    // onShownEvents:cc.Component.EventHandler[] = [];

    // @property([cc.Component.EventHandler])
    // onHiddenEvents:cc.Component.EventHandler[] = [];

    animations:cc.Animation[] = [];

    call(event,exp:string)
    {
        // eval(exp);
        g.execScript(exp);
    }

    setDelegate(target)
    {
        this.target = target;
    }

    onLoad()
    {

        this.touchBlocker = new cc.Node();
        this.touchBlocker.name = "TouchBlocker"
        this.touchBlocker.width = 2000;
        this.touchBlocker.height = 2000;
        this.touchBlockerComp = this.touchBlocker.addComponent(cc.BlockInputEvents)
        this.node.addChild(this.touchBlocker,1000)
        
        if(this.childrenAnimation)
        {
            this.animations = UIFunctions.getChildrenAnimations(this.node)
        }else{
            var anim = this.node.getComponent(cc.Animation)
            if(anim)
                this.animations.push(anim)
        }
        let components = this.getComponents(cc.Component);
        for(var i = 0; i < components.length;i++)
        {
            let comp:any = components[i]
            if(comp != this)
            {
                if(comp.onShown||comp.onHidden)
                {
                    this.target = comp;
                    break;
                }
            }
        }

    }

    start()
    {
        this.touchEnabled = true;
    }

    init(viewname)
    {
        this.name = viewname;
    }

    hideAnimationCallback()
    {
        this.node.active = this.visible;
        ViewManager.instance.checkViewStacks();
    }

    _isHiding:boolean = false;

    /**
     * //如果 实现了view的animation那么需要 animation 去做隐藏
     * 否则会不会有animtion ，系统 将直接 设置 active 为false
     */
    doHideAnimation()
    {
        // if (!this.isDialog)
        // {
        //todo is in hide animtion return ;
        // if(this.isInHideAnimation())return;
        this.node.active = true;
        this._isHiding = true;
        if(!UIFunctions.doHideAnimations(this.animations,this.hideAnimationCallback,this))
        {
            this.node.active = false;
            this._isHiding = false;
        }
        console.log("[View] hide:",this.name);
        this._visibleDirty = false;
    }

    isInHideAnimation(): any {
        return this._isHiding
    }
    
    onHidden()
    {
        this._visibleDirty = false;
        if (this.target && this.target.onHidden)
            this.target.onHidden();
        // cc.Component.EventHandler.emitEvents(this.onHiddenEvents,[params]);
    }

    hide(){
        // super.hide()
        //ViewManager remove dd
        this.touchEnabled = false;
        ViewManager.instance.hide(this.node);
    }

    _visibleDirty:boolean;
    
    get visible(){return this._visibleDirty;}


    showAnimationNextFrame(callback)
    {
        this.scheduleOnce(_=>{
            UIFunctions.doShowAnimations(this.animations,callback)
        },0)
    }

    get touchEnabled()
    {
        return !this.touchBlocker.active
    }

    set touchEnabled(b)
    {
        this.touchBlocker.active  = !b
    }

    // setTouchEnabled(bEnabled){
    //     this.touchBlockerComp.enabled = bEnabled;
    //     // UIFunctions.setTouchEnabled(this.node,bEnabled);
    // }

    show(...params)
    {
        super.show();
        console.log("[View] show:",this.name , params);
        UIFunctions.stopAnimations(this.animations);
       
        // call next frames 
        // this.showAnimationDelay()
        //确保在widget 更新结束后开始动画 ，
        return new Promise<void>((resolve,reject)=>{
            let self = this;
            
            let showFinishCallback = function() 
            {
                if(!self.touchEnabled)
                    self.touchEnabled = true;
                resolve();
            }
            if(!this.hasWidget)
            {
                UIFunctions.doShowAnimations(this.animations,showFinishCallback)
            }else{
                this.showAnimationNextFrame(showFinishCallback)
            }
            this._visibleDirty = true;

            // Add this block
            let comp = this.node.getComponent(this.node.name);
            if (comp && comp.init) {
                comp.init(params[0]);  // call init with first param
            }

            if (this.target && this.target.onShown)
            {
                this.target.onShown(...params);
            }
            // cc.Component.EventHandler.emitEvents(this.onShownEvents,[params]);
        })
    }
}
