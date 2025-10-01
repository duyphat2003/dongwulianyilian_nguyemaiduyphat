
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/LanguageManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcTGFuZ3VhZ2VNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFN0MsSUFBWSxZQUlYO0FBSkQsV0FBWSxZQUFZO0lBQ3BCLHlCQUFTLENBQUE7SUFDVCx5QkFBUyxDQUFBO0lBQ1QseUJBQVMsQ0FBQTtBQUNiLENBQUMsRUFKVyxZQUFZLEdBQVosb0JBQVksS0FBWixvQkFBWSxRQUl2QjtBQUdEO0lBQUE7UUFHWSxxQkFBZ0IsR0FBaUIsWUFBWSxDQUFDLEVBQUUsQ0FBQztRQVlsRCx3QkFBbUIsR0FBRztZQUN6QixJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO2dCQUNqQiw2QkFBNkI7Z0JBQzdCLElBQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUMsZUFBZSxFQUFFLEdBQUcsZUFBZSxDQUFDO2dCQUMvRCxPQUFPLEdBQUcsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzFDO2lCQUFNO2dCQUNILG1DQUFtQztnQkFDbkMsT0FBTyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLElBQUksSUFBSSxDQUFDO2FBQy9EO1FBQ0wsQ0FBQyxDQUFBO0lBcUNMLENBQUM7d0JBN0RvQixlQUFlO0lBS2hDLHNCQUFXLDRDQUFlO2FBQTFCO1lBQ0ksT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFDakMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBa0IsMkJBQVE7YUFBMUI7WUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLGlCQUFlLEVBQUUsQ0FBQzthQUMxQztZQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQWFELFdBQVc7SUFDSixzQ0FBWSxHQUFuQixVQUFvQixJQUFrQjtRQUNsQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1FBQzdCLElBQU0sSUFBSSxHQUFHLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxDQUFDO1FBRXZDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7WUFDakIsaUJBQWlCO1lBQ2pCLElBQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUMsZUFBZSxFQUFFLEdBQUcsZUFBZSxDQUFDO1lBQy9ELEdBQUcsQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUM1RCxFQUFFLENBQUMsR0FBRyxDQUFDLHlCQUF5QixFQUFFLElBQUksQ0FBQyxDQUFDO1NBQzNDO2FBQU07WUFDSCxtQkFBbUI7WUFDbkIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDdEU7SUFDTCxDQUFDO0lBRUQsV0FBVztJQUNKLHNDQUFZLEdBQW5CO1FBQ0ksSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFNLElBQUksR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLGVBQWUsRUFBRSxHQUFHLGVBQWUsQ0FBQztZQUMvRCxJQUFJLEdBQUcsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNqQyxJQUFNLE9BQU8sR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN0RCxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNqQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGVBQStCLENBQUM7YUFDaEU7U0FDSjthQUFNO1lBQ0gsSUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQzNELElBQUksS0FBSyxFQUFFO2dCQUNQLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQy9CLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsZUFBK0IsQ0FBQzthQUNoRTtTQUNKO1FBQ0QsRUFBRSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUN0RCxDQUFDOztJQTFEYyx5QkFBUyxHQUFvQixJQUFJLENBQUM7SUFGaEMsZUFBZTtRQURuQyxPQUFPO09BQ2EsZUFBZSxDQTZEbkM7SUFBRCxzQkFBQztDQTdERCxBQTZEQyxJQUFBO2tCQTdEb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIu+7v2NvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5leHBvcnQgZW51bSBMYW5ndWFnZU1vZGUge1xyXG4gICAgRU4gPSBcImVuXCIsXHJcbiAgICBWSSA9IFwidmlcIixcclxuICAgIENOID0gXCJ6aFwiXHJcbn1cclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExhbmd1YWdlTWFuYWdlciB7XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBMYW5ndWFnZU1hbmFnZXIgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfY3VycmVudExhbmd1YWdlOiBMYW5ndWFnZU1vZGUgPSBMYW5ndWFnZU1vZGUuQ047XHJcblxyXG4gICAgcHVibGljIGdldCBjdXJyZW50TGFuZ3VhZ2UoKTogTGFuZ3VhZ2VNb2RlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVudExhbmd1YWdlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGluc3RhbmNlKCk6IExhbmd1YWdlTWFuYWdlciB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBMYW5ndWFnZU1hbmFnZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGlzTGFuZ3VhZ2VGaWxlRXhpc3QgPSAoKTogYm9vbGVhbiA9PiB7XHJcbiAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xyXG4gICAgICAgICAgICAvLyBOYXRpdmU6IGTDuW5nIGpzYi5maWxlVXRpbHNcclxuICAgICAgICAgICAgY29uc3QgcGF0aCA9IGpzYi5maWxlVXRpbHMuZ2V0V3JpdGFibGVQYXRoKCkgKyBcImxhbmd1YWdlLmpzb25cIjtcclxuICAgICAgICAgICAgcmV0dXJuIGpzYi5maWxlVXRpbHMuaXNGaWxlRXhpc3QocGF0aCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gV2ViL0hUTUw1OiBraeG7g20gdHJhIGxvY2FsU3RvcmFnZVxyXG4gICAgICAgICAgICByZXR1cm4gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibGFuZ3VhZ2UuanNvblwiKSAhPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgLy9TYXZlIEpTT05cclxuICAgIHB1YmxpYyBzYXZlTGFuZ3VhZ2UobGFuZzogTGFuZ3VhZ2VNb2RlKSB7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudExhbmd1YWdlID0gbGFuZztcclxuICAgICAgICBjb25zdCBkYXRhID0geyBjdXJyZW50TGFuZ3VhZ2U6IGxhbmcgfTtcclxuXHJcbiAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xyXG4gICAgICAgICAgICAvLyBBbmRyb2lkL2lPUy9QQ1xyXG4gICAgICAgICAgICBjb25zdCBwYXRoID0ganNiLmZpbGVVdGlscy5nZXRXcml0YWJsZVBhdGgoKSArIFwibGFuZ3VhZ2UuanNvblwiO1xyXG4gICAgICAgICAgICBqc2IuZmlsZVV0aWxzLndyaXRlU3RyaW5nVG9GaWxlKEpTT04uc3RyaW5naWZ5KGRhdGEpLCBwYXRoKTtcclxuICAgICAgICAgICAgY2MubG9nKFwiU2F2ZWQgbGFuZ3VhZ2UuanNvbiB0bzpcIiwgcGF0aCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gV2ViL01vYmlsZSBIVE1MNVxyXG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsYW5ndWFnZS5qc29uXCIsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy9Mb2FkIEpTT05cclxuICAgIHB1YmxpYyBsb2FkTGFuZ3VhZ2UoKSB7XHJcbiAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xyXG4gICAgICAgICAgICBjb25zdCBwYXRoID0ganNiLmZpbGVVdGlscy5nZXRXcml0YWJsZVBhdGgoKSArIFwibGFuZ3VhZ2UuanNvblwiO1xyXG4gICAgICAgICAgICBpZiAoanNiLmZpbGVVdGlscy5pc0ZpbGVFeGlzdChwYXRoKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29udGVudCA9IGpzYi5maWxlVXRpbHMuZ2V0U3RyaW5nRnJvbUZpbGUocGF0aCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShjb250ZW50KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRMYW5ndWFnZSA9IGRhdGEuY3VycmVudExhbmd1YWdlIGFzIExhbmd1YWdlTW9kZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNhdmVkID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibGFuZ3VhZ2UuanNvblwiKTtcclxuICAgICAgICAgICAgaWYgKHNhdmVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShzYXZlZCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jdXJyZW50TGFuZ3VhZ2UgPSBkYXRhLmN1cnJlbnRMYW5ndWFnZSBhcyBMYW5ndWFnZU1vZGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2MubG9nKFwiTG9hZGVkIGxhbmd1YWdlOlwiLCB0aGlzLl9jdXJyZW50TGFuZ3VhZ2UpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==