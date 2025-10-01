"use strict";
cc._RF.push(module, '0105dG48yBJwLawk1oXeFXf', 'LanguageManager');
// Game/Scripts/LanguageManager.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageMode = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LanguageMode;
(function (LanguageMode) {
    LanguageMode["EN"] = "en";
    LanguageMode["VI"] = "vi";
    LanguageMode["CN"] = "zh";
})(LanguageMode = exports.LanguageMode || (exports.LanguageMode = {}));
var LanguageManager = /** @class */ (function () {
    function LanguageManager() {
        this._currentLanguage = LanguageMode.CN;
        this.isLanguageFileExist = function () {
            if (cc.sys.isNative) {
                // Native: dùng jsb.fileUtils
                var path = jsb.fileUtils.getWritablePath() + "language.json";
                return jsb.fileUtils.isFileExist(path);
            }
            else {
                // Web/HTML5: kiểm tra localStorage
                return cc.sys.localStorage.getItem("language.json") != null;
            }
        };
    }
    LanguageManager_1 = LanguageManager;
    Object.defineProperty(LanguageManager.prototype, "currentLanguage", {
        get: function () {
            return this._currentLanguage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LanguageManager, "instance", {
        get: function () {
            if (!this._instance) {
                this._instance = new LanguageManager_1();
            }
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    //Save JSON
    LanguageManager.prototype.saveLanguage = function (lang) {
        this._currentLanguage = lang;
        var data = { currentLanguage: lang };
        if (cc.sys.isNative) {
            // Android/iOS/PC
            var path = jsb.fileUtils.getWritablePath() + "language.json";
            jsb.fileUtils.writeStringToFile(JSON.stringify(data), path);
            cc.log("Saved language.json to:", path);
        }
        else {
            // Web/Mobile HTML5
            cc.sys.localStorage.setItem("language.json", JSON.stringify(data));
        }
    };
    //Load JSON
    LanguageManager.prototype.loadLanguage = function () {
        if (cc.sys.isNative) {
            var path = jsb.fileUtils.getWritablePath() + "language.json";
            if (jsb.fileUtils.isFileExist(path)) {
                var content = jsb.fileUtils.getStringFromFile(path);
                var data = JSON.parse(content);
                this._currentLanguage = data.currentLanguage;
            }
        }
        else {
            var saved = cc.sys.localStorage.getItem("language.json");
            if (saved) {
                var data = JSON.parse(saved);
                this._currentLanguage = data.currentLanguage;
            }
        }
        cc.log("Loaded language:", this._currentLanguage);
    };
    var LanguageManager_1;
    LanguageManager._instance = null;
    LanguageManager = LanguageManager_1 = __decorate([
        ccclass
    ], LanguageManager);
    return LanguageManager;
}());
exports.default = LanguageManager;

cc._RF.pop();