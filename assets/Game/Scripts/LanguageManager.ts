const { ccclass, property } = cc._decorator;

export enum LanguageMode {
    EN = "en",
    VI = "vi",
    CN = "zh"
}

@ccclass
export default class LanguageManager {

    private static _instance: LanguageManager = null;
    private _currentLanguage: LanguageMode = LanguageMode.CN;

    public get currentLanguage(): LanguageMode {
        return this._currentLanguage;
    }

    public static get instance(): LanguageManager {
        if (!this._instance) {
            this._instance = new LanguageManager();
        }
        return this._instance;
    }
    public isLanguageFileExist = (): boolean => {
        if (cc.sys.isNative) {
            // Native: dùng jsb.fileUtils
            const path = jsb.fileUtils.getWritablePath() + "language.json";
            return jsb.fileUtils.isFileExist(path);
        } else {
            // Web/HTML5: kiểm tra localStorage
            return cc.sys.localStorage.getItem("language.json") != null;
        }
    }


    //Save JSON
    public saveLanguage(lang: LanguageMode) {
        this._currentLanguage = lang;
        const data = { currentLanguage: lang };

        if (cc.sys.isNative) {
            // Android/iOS/PC
            const path = jsb.fileUtils.getWritablePath() + "language.json";
            jsb.fileUtils.writeStringToFile(JSON.stringify(data), path);
            cc.log("Saved language.json to:", path);
        } else {
            // Web/Mobile HTML5
            cc.sys.localStorage.setItem("language.json", JSON.stringify(data));
        }
    }

    //Load JSON
    public loadLanguage() {
        if (cc.sys.isNative) {
            const path = jsb.fileUtils.getWritablePath() + "language.json";
            if (jsb.fileUtils.isFileExist(path)) {
                const content = jsb.fileUtils.getStringFromFile(path);
                const data = JSON.parse(content);
                this._currentLanguage = data.currentLanguage as LanguageMode;
            }
        } else {
            const saved = cc.sys.localStorage.getItem("language.json");
            if (saved) {
                const data = JSON.parse(saved);
                this._currentLanguage = data.currentLanguage as LanguageMode;
            }
        }
        cc.log("Loaded language:", this._currentLanguage);
    }
}
