
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/wxsdk/MoreGameManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1f843kK46NKi6g8v7uZN6EC', 'MoreGameManager');
// framework/wxsdk/MoreGameManager.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
var MoreGameComponent_1 = require("./MoreGameComponent");
var GameConfigs_1 = require("./GameConfigs");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Task = /** @class */ (function () {
    function Task(id) {
        this.isRunning = false;
        this.cd = 0;
        this.max_cd = 0;
        this.id = id;
    }
    Task.prototype.start = function () {
        this.isRunning = true;
    };
    Task.prototype.finish = function () {
        this.isRunning = false;
        this.cd = this.max_cd;
    };
    return Task;
}());
exports.Task = Task;
var MoreGameManager = /** @class */ (function (_super) {
    __extends(MoreGameManager, _super);
    function MoreGameManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.recommendComps = [];
        _this.gameList = [];
        _this.tasks = [];
        _this.frames = {};
        return _this;
    }
    MoreGameManager_1 = MoreGameManager;
    Object.defineProperty(MoreGameManager, "instance", {
        get: function () {
            if (this._instance == null) {
                this._instance = cc.find("Canvas").addComponent(MoreGameManager_1);
            }
            return this._instance;
        },
        set: function (k) {
            this._instance = k;
        },
        enumerable: false,
        configurable: true
    });
    /**
        content:"射了个球"
        extra:""
        icon:"https://111.231.94.213/game/gameres/recommend/game_01/icon.jpg"
        id:1
        image:"https://111.231.94.213/game/gameres/recommend/game_01/qr.png"
        title:"射了个球"
        wx_appid:"wxcd56cd0a66199638"
        launch:""
    */
    MoreGameManager.prototype.getSpriteFrame = function (url) {
        return __awaiter(this, void 0, Promise, function () {
            var frame;
            var _this = this;
            return __generator(this, function (_a) {
                frame = this.frames[url];
                if (frame == null) {
                    return [2 /*return*/, new Promise(function (resolve, reject) {
                            // url = "https://cs-op.douyucdn.cn/douyu/2018/02/09/8a0dd8f98a3fa07c9543800173408477.png"
                            console.log("[MoreGameManager] request image:" + url);
                            cc.loader.load({ url: url, type: 'png' }, function (err, texture) {
                                if (texture) {
                                    frame = new cc.SpriteFrame(texture);
                                    _this.addSpriteFrame(url, frame);
                                    // this.node.getComponent(cc.Sprite).spriteFrame=frame;
                                    resolve(frame);
                                }
                                else {
                                    reject();
                                }
                            });
                        })];
                }
                return [2 /*return*/, new Promise(function (resolve, reject) { return resolve(frame); })];
            });
        });
    };
    MoreGameManager.prototype.addSpriteFrame = function (url, frame) {
        this.frames[url] = frame;
        return frame;
    };
    MoreGameManager.prototype.onLoad = function () {
        MoreGameManager_1.instance = this;
    };
    //tasks
    MoreGameManager.prototype.getTasks = function (priority_min, count) {
        var todo = [];
        for (var i = 0; i < this.tasks.length; i++) {
            var task = this.tasks[i];
            if (task.gameConfig.priority && task.gameConfig.priority > priority_min) {
                if (task.cd == 0) {
                    todo.push(task);
                    this.tasks.splice(i, 1);
                    i--;
                }
            }
            if (todo.length >= count)
                break;
        }
        if (todo.length < count) {
            // 任务不足，直接用cd中的任务补充
            //request from cd tasks 
            for (var i = 0; i < this.tasks.length; i++) {
                var task = this.tasks[i];
                if (todo.indexOf(task) == -1) {
                    todo.push(task);
                    this.tasks.splice(i, 1);
                    i--;
                }
            }
        }
        g.extendArray(this.tasks, todo);
        return todo;
    };
    MoreGameManager.prototype.finishTasks = function (list) {
        for (var i = 0; i < list.length; i++) {
            var task = list[i];
            if (task) {
                task.finish();
            }
        }
    };
    MoreGameManager.prototype.startTasks = function (list) {
        for (var i = 0; i < list.length; i++) {
            var task = list[i];
            if (task) {
                task.start();
            }
        }
    };
    MoreGameManager.prototype.createTasks = function () {
        for (var i = 0; i < this.gameList.length; i++) {
            var task = new Task(i);
            task.gameConfig = this.gameList[i];
            task.gameConfig.priority = task.gameConfig.priority || 100;
            // 10 最小cd 时长 
            task.max_cd = 100 / task.gameConfig.priority * 10;
            this.tasks.push(task);
        }
    };
    MoreGameManager.prototype.addList = function (list) {
        if (list == null)
            return;
        if (Array.isArray(list)) {
            this.gameList.splice(0, this.gameList.length);
            g.extendArray(this.gameList, list);
        }
        else {
            this.gameList.push(list);
        }
        //sort by priority 
        this.gameList.sort(function (a, b) {
            if (!a.priority)
                return 1;
            if (!b.priority)
                return 0;
            return b.priority - a.priority;
        });
        //create tasks
        this.createTasks();
        for (var i = 0; i < this.recommendComps.length; i++) {
            var element = this.recommendComps[i];
            element.requestTask();
        }
    };
    MoreGameManager.prototype.updateFinishedTask = function () {
        for (var i = 0; i < this.tasks.length; i++) {
            var task = this.tasks[i];
            //cd 中的任务
            if (task.cd > 0) {
                task.cd = Math.max(0, task.cd - 1);
            }
        }
    };
    /**
     * appId	string		是	要打开的小程序 appId
        path	string		否	打开的页面路径，如果为空则打开首页
        extraData	object		否	需要传递给目标小程序的数据，目标小程序可在 App.onLaunch，App.onShow 中获取到这份数据。
        envVersion	string	release	否	要打开的小程序版本。仅在当前小程序为开发版或体验版时此参数有效。如果当前小程序是正式版，则打开的小程序必定是正式版。
        success	function		否	接口调用成功的回调函数
        fail	function		否	接口调用失败的回调函数
        complete	function		否	接口调用结束的回调函数（调用成功、失败都会执行）
        object.envVersion 的合法值

        envVersion >>--------------------
        develop	开发版
        trial	体验版
        release	正式版
     */
    MoreGameManager.prototype.clickGame = function (gamecfg) {
        console.log("打开小程序...");
        wx.navigateToMiniProgram({
            appId: gamecfg.wx_appid,
            extraData: {
                wx_appid: GameConfigs_1.GameConfig.wx_appid,
            },
            envVersion: "release",
            success: function (res) {
                console.log("打开小程序成功 :" + gamecfg.wx_appid);
                // 跳转通知服务器
            },
            fail: function (res) {
                //打开失败
                console.log("打开小程序失败 :" + gamecfg.wx_appid);
            }
        });
        // 打开详情 或者直接打开
        //cfg.image  
    };
    MoreGameManager.prototype.onEnable = function () {
        this.schedule(this.updateFinishedTask, 1, cc.macro.REPEAT_FOREVER);
    };
    MoreGameManager.prototype.onDisable = function () {
        this.unschedule(this.updateFinishedTask);
    };
    MoreGameManager.prototype.start = function () {
        // let gameList  = [
        //     {
        //         content:"射了个球",
        //         extra:"",
        //         icon:"https://111.231.94.213/game/gameres/recommend/game_01/icon.jpg",
        //         id:1,
        //         image:"https://111.231.94.213/game/gameres/recommend/game_01/qr.png",
        //         title:"射了个球",
        //         wx_appid:"wxcd56cd0a66199638",
        //         priority: 99,
        //     }
        // ]
        // let test = JSON.parse('{"priority":100,"title":"水果泡泡龙","extra":"empty","icon":"https://7265-release-2c87c4-1258399463.tcb.qcloud.la/pplicon.png?sign=43116a5ecfead6e614c52b9818cb15ec\u0026t=1547972497","image":"https://7265-release-2c87c4-1258399463.tcb.qcloud.la/qrcode (2).jpg?sign=43edc51f924e8a4e969e71c5e0753adf\u0026t=1547972423","wx_appid":"wxdbacbba2d0277152"}')
        // gameList.push(test);
        // this.addList(gameList)
    };
    var MoreGameManager_1;
    __decorate([
        property([MoreGameComponent_1.default])
    ], MoreGameManager.prototype, "recommendComps", void 0);
    MoreGameManager = MoreGameManager_1 = __decorate([
        ccclass
    ], MoreGameManager);
    return MoreGameManager;
}(cc.Component));
exports.default = MoreGameManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFx3eHNka1xcTW9yZUdhbWVNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseURBQW9EO0FBQ3BELDZDQUEyQztBQUVyQyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUUxQztJQU9JLGNBQVksRUFBRTtRQUhkLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsT0FBRSxHQUFZLENBQUMsQ0FBQztRQUNoQixXQUFNLEdBQVcsQ0FBQyxDQUFDO1FBR2YsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELG9CQUFLLEdBQUw7UUFFSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztJQUMxQixDQUFDO0lBRUQscUJBQU0sR0FBTjtRQUVJLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUMxQixDQUFDO0lBQ0wsV0FBQztBQUFELENBdEJBLEFBc0JDLElBQUE7QUF0Qlksb0JBQUk7QUF5QmpCO0lBQTZDLG1DQUFZO0lBQXpEO1FBQUEscUVBMlBDO1FBeFBHLG9CQUFjLEdBQXdCLEVBQUUsQ0FBQztRQWlCekMsY0FBUSxHQUFTLEVBQUUsQ0FBQTtRQUVuQixXQUFLLEdBQVUsRUFBRSxDQUFBO1FBRWpCLFlBQU0sR0FBbUMsRUFBRSxDQUFDOztJQW1PaEQsQ0FBQzt3QkEzUG9CLGVBQWU7SUFNaEMsc0JBQVcsMkJBQVE7YUFBbkI7WUFFSSxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxFQUMxQjtnQkFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLGlCQUFlLENBQUMsQ0FBQzthQUNwRTtZQUNELE9B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UUFBUSxDQUFDLENBQUE7WUFDOUMsQ0FBQztTQUNKLENBQUMsQ0FBQTtRQUVGLGNBQWM7UUFDZCxhQUFhO0lBQ2pCLENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBRUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUVELG1DQUFTLEdBQVQ7UUFFSSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCwrQkFBSyxHQUFMO1FBRUksb0JBQW9CO1FBQ3BCLFFBQVE7UUFDUiwwQkFBMEI7UUFDMUIsb0JBQW9CO1FBQ3BCLGlGQUFpRjtRQUNqRixnQkFBZ0I7UUFDaEIsZ0ZBQWdGO1FBQ2hGLHdCQUF3QjtRQUN4Qix5Q0FBeUM7UUFDekMsd0JBQXdCO1FBQ3hCLFFBQVE7UUFDUixJQUFJO1FBQ0osb1hBQW9YO1FBQ3BYLHVCQUF1QjtRQUN2Qix5QkFBeUI7SUFDN0IsQ0FBQzs7SUF2UEQ7UUFEQyxRQUFRLENBQUMsQ0FBQywyQkFBaUIsQ0FBQyxDQUFDOzJEQUNXO0lBSHhCLGVBQWU7UUFEbkMsT0FBTztPQUNhLGVBQWUsQ0EyUG5DO0lBQUQsc0JBQUM7Q0EzUEQsQUEyUEMsQ0EzUDRDLEVBQUUsQ0FBQyxTQUFTLEdBMlB4RDtrQkEzUG9CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTW9yZUdhbWVDb21wb25lbnQgZnJvbSBcIi4vTW9yZUdhbWVDb21wb25lbnRcIjtcclxuaW1wb3J0IHsgR2FtZUNvbmZpZyB9IGZyb20gXCIuL0dhbWVDb25maWdzXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUYXNrXHJcbntcclxuICAgIGlkOm51bWJlcjtcclxuICAgIGdhbWVDb25maWc6IGFueTtcclxuICAgIGlzUnVubmluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgY2QgOiBudW1iZXIgPSAwO1xyXG4gICAgbWF4X2NkIDpudW1iZXIgPSAwO1xyXG4gICAgY29uc3RydWN0b3IoaWQpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmlzUnVubmluZyA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZmluaXNoKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmlzUnVubmluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY2QgPSB0aGlzLm1heF9jZDtcclxuICAgIH1cclxufVxyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9yZUdhbWVNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoW01vcmVHYW1lQ29tcG9uZW50XSlcclxuICAgIHJlY29tbWVuZENvbXBzIDpNb3JlR2FtZUNvbXBvbmVudFtdID0gW107XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOk1vcmVHYW1lTWFuYWdlclxyXG4gICAgc3RhdGljIGdldCBpbnN0YW5jZSgpOk1vcmVHYW1lTWFuYWdlciBcclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5faW5zdGFuY2UgPT0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gY2MuZmluZChcIkNhbnZhc1wiKS5hZGRDb21wb25lbnQoTW9yZUdhbWVNYW5hZ2VyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzZXQgaW5zdGFuY2UoaylcclxuICAgIHtcclxuICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IGs7XHJcbiAgICB9XHJcblxyXG4gICAgZ2FtZUxpc3Q6YW55W10gPSBbXVxyXG5cclxuICAgIHRhc2tzOlRhc2tbXSA9IFtdXHJcblxyXG4gICAgZnJhbWVzOntbaW5kZXg6c3RyaW5nXTpjYy5TcHJpdGVGcmFtZX0gPSB7fTtcclxuXHJcbiAgICAvKipcclxuICAgICAgICBjb250ZW50Olwi5bCE5LqG5Liq55CDXCJcclxuICAgICAgICBleHRyYTpcIlwiXHJcbiAgICAgICAgaWNvbjpcImh0dHBzOi8vMTExLjIzMS45NC4yMTMvZ2FtZS9nYW1lcmVzL3JlY29tbWVuZC9nYW1lXzAxL2ljb24uanBnXCJcclxuICAgICAgICBpZDoxXHJcbiAgICAgICAgaW1hZ2U6XCJodHRwczovLzExMS4yMzEuOTQuMjEzL2dhbWUvZ2FtZXJlcy9yZWNvbW1lbmQvZ2FtZV8wMS9xci5wbmdcIlxyXG4gICAgICAgIHRpdGxlOlwi5bCE5LqG5Liq55CDXCJcclxuICAgICAgICB3eF9hcHBpZDpcInd4Y2Q1NmNkMGE2NjE5OTYzOFwiXHJcbiAgICAgICAgbGF1bmNoOlwiXCJcclxuICAgICovXHJcbiAgICBhc3luYyBnZXRTcHJpdGVGcmFtZSh1cmw6c3RyaW5nKTpQcm9taXNlPGNjLlNwcml0ZUZyYW1lPlxyXG4gICAge1xyXG4gICAgICAgIGxldCBmcmFtZSA9IHRoaXMuZnJhbWVzW3VybF1cclxuICAgICAgICBpZihmcmFtZSA9PSBudWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPGNjLlNwcml0ZUZyYW1lPigocmVzb2x2ZSxyZWplY3QpPT57XHJcbiAgICAgICAgICAgICAgICAvLyB1cmwgPSBcImh0dHBzOi8vY3Mtb3AuZG91eXVjZG4uY24vZG91eXUvMjAxOC8wMi8wOS84YTBkZDhmOThhM2ZhMDdjOTU0MzgwMDE3MzQwODQ3Ny5wbmdcIlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJbTW9yZUdhbWVNYW5hZ2VyXSByZXF1ZXN0IGltYWdlOlwiICsgdXJsKVxyXG4gICAgICAgICAgICAgICAgY2MubG9hZGVyLmxvYWQoe3VybDogdXJsLCB0eXBlOiAncG5nJ30sIChlcnIsIHRleHR1cmUpID0+e1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRleHR1cmUpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRTcHJpdGVGcmFtZSh1cmwgLGZyYW1lKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWU9ZnJhbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZnJhbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCgpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxjYy5TcHJpdGVGcmFtZT4oKHJlc29sdmUscmVqZWN0KT0+cmVzb2x2ZShmcmFtZSkpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGFkZFNwcml0ZUZyYW1lKHVybDogc3RyaW5nLCBmcmFtZTogYW55KTogYW55IHtcclxuICAgICAgICB0aGlzLmZyYW1lc1t1cmxdID0gZnJhbWU7XHJcbiAgICAgICAgcmV0dXJuIGZyYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZCgpXHJcbiAgICB7XHJcbiAgICAgICAgTW9yZUdhbWVNYW5hZ2VyLmluc3RhbmNlID0gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvL3Rhc2tzXHJcbiAgICBnZXRUYXNrcyhwcmlvcml0eV9taW46IG51bWJlcixjb3VudDpudW1iZXIpOiBhbnkge1xyXG4gICAgICAgIGxldCB0b2RvID0gW11cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8dGhpcy50YXNrcy5sZW5ndGg7IGkgKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgdGFzayA9IHRoaXMudGFza3NbaV1cclxuICAgICAgICAgICAgaWYodGFzay5nYW1lQ29uZmlnLnByaW9yaXR5ICYmIHRhc2suZ2FtZUNvbmZpZy5wcmlvcml0eSA+IHByaW9yaXR5X21pbilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYodGFzay5jZCA9PSAwKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvZG8ucHVzaCh0YXNrKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFza3Muc3BsaWNlKGksMSlcclxuICAgICAgICAgICAgICAgICAgICBpLS07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRvZG8ubGVuZ3RoID49IGNvdW50KSBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodG9kby5sZW5ndGggPCBjb3VudClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIOS7u+WKoeS4jei2s++8jOebtOaOpeeUqGNk5Lit55qE5Lu75Yqh6KGl5YWFXHJcbiAgICAgICAgICAgIC8vcmVxdWVzdCBmcm9tIGNkIHRhc2tzIFxyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8dGhpcy50YXNrcy5sZW5ndGg7IGkgKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCB0YXNrID0gdGhpcy50YXNrc1tpXVxyXG4gICAgICAgICAgICAgICAgaWYodG9kby5pbmRleE9mKHRhc2spID09IC0xKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvZG8ucHVzaCh0YXNrKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhc2tzLnNwbGljZShpLDEpXHJcbiAgICAgICAgICAgICAgICAgICAgaSAtLSA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZy5leHRlbmRBcnJheSh0aGlzLnRhc2tzLHRvZG8pO1xyXG4gICAgICAgIHJldHVybiB0b2RvO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbmlzaFRhc2tzKGxpc3Q6IFRhc2tbXSk6IGFueSB7XHJcbiAgICAgICAgZm9yKHZhciBpID0gMCA7aSA8IGxpc3QubGVuZ3RoOyBpICsrIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCB0YXNrID0gbGlzdFtpXTtcclxuICAgICAgICAgICAgaWYgKHRhc2spXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRhc2suZmluaXNoKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRUYXNrcyhsaXN0OlRhc2tbXSk6YW55e1xyXG5cclxuICAgICAgICBmb3IodmFyIGkgPSAwIDtpIDwgbGlzdC5sZW5ndGg7IGkgKysgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHRhc2sgPSBsaXN0W2ldOyBcclxuICAgICAgICAgICAgaWYgKHRhc2spXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRhc2suc3RhcnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgY3JlYXRlVGFza3MoKVxyXG4gICAge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwIDsgIGkgPCB0aGlzLmdhbWVMaXN0Lmxlbmd0aDtpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgdGFzayA9IG5ldyBUYXNrKGkpXHJcbiAgICAgICAgICAgIHRhc2suZ2FtZUNvbmZpZyA9IHRoaXMuZ2FtZUxpc3RbaV1cclxuICAgICAgICAgICAgdGFzay5nYW1lQ29uZmlnLnByaW9yaXR5ID0gdGFzay5nYW1lQ29uZmlnLnByaW9yaXR5IHx8MTAwO1xyXG4gICAgICAgICAgICAvLyAxMCDmnIDlsI9jZCDml7bplb8gXHJcbiAgICAgICAgICAgIHRhc2subWF4X2NkID0gIDEwMCAvdGFzay5nYW1lQ29uZmlnLnByaW9yaXR5ICogMTA7XHJcbiAgICAgICAgICAgIHRoaXMudGFza3MucHVzaCh0YXNrKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhZGRMaXN0KGxpc3Q6YW55KVxyXG4gICAge1xyXG4gICAgICAgIGlmKGxpc3QgPT0gbnVsbClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGxpc3QpIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZUxpc3Quc3BsaWNlKDAsdGhpcy5nYW1lTGlzdC5sZW5ndGgpO1xyXG4gICAgICAgICAgICBnLmV4dGVuZEFycmF5KHRoaXMuZ2FtZUxpc3QsbGlzdCk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZUxpc3QucHVzaChsaXN0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9zb3J0IGJ5IHByaW9yaXR5IFxyXG4gICAgICAgIHRoaXMuZ2FtZUxpc3Quc29ydCgoYSxiKT0+e1xyXG4gICAgICAgICAgICBpZighYS5wcmlvcml0eSApIHJldHVybiAxO1xyXG4gICAgICAgICAgICBpZighYi5wcmlvcml0eSkgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgIHJldHVybiBiLnByaW9yaXR5IC0gYS5wcmlvcml0eTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vY3JlYXRlIHRhc2tzXHJcbiAgICAgICAgdGhpcy5jcmVhdGVUYXNrcygpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucmVjb21tZW5kQ29tcHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMucmVjb21tZW5kQ29tcHNbaV07XHJcbiAgICAgICAgICAgIGVsZW1lbnQucmVxdWVzdFRhc2soKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlRmluaXNoZWRUYXNrKClcclxuICAgIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMudGFza3MubGVuZ3RoOyBpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgdGFzayA9IHRoaXMudGFza3NbaV1cclxuICAgICAgICAgICAgLy9jZCDkuK3nmoTku7vliqFcclxuICAgICAgICAgICAgaWYodGFzay5jZCA+IDApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRhc2suY2QgPSBNYXRoLm1heCgwLHRhc2suY2QgLSAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogYXBwSWRcdHN0cmluZ1x0XHTmmK9cdOimgeaJk+W8gOeahOWwj+eoi+W6jyBhcHBJZFx0XHJcbiAgICAgICAgcGF0aFx0c3RyaW5nXHRcdOWQplx05omT5byA55qE6aG16Z2i6Lev5b6E77yM5aaC5p6c5Li656m65YiZ5omT5byA6aaW6aG1XHRcclxuICAgICAgICBleHRyYURhdGFcdG9iamVjdFx0XHTlkKZcdOmcgOimgeS8oOmAkue7meebruagh+Wwj+eoi+W6j+eahOaVsOaNru+8jOebruagh+Wwj+eoi+W6j+WPr+WcqCBBcHAub25MYXVuY2jvvIxBcHAub25TaG93IOS4reiOt+WPluWIsOi/meS7veaVsOaNruOAglx0XHJcbiAgICAgICAgZW52VmVyc2lvblx0c3RyaW5nXHRyZWxlYXNlXHTlkKZcdOimgeaJk+W8gOeahOWwj+eoi+W6j+eJiOacrOOAguS7heWcqOW9k+WJjeWwj+eoi+W6j+S4uuW8gOWPkeeJiOaIluS9k+mqjOeJiOaXtuatpOWPguaVsOacieaViOOAguWmguaenOW9k+WJjeWwj+eoi+W6j+aYr+ato+W8j+eJiO+8jOWImeaJk+W8gOeahOWwj+eoi+W6j+W/heWumuaYr+ato+W8j+eJiOOAglx0XHJcbiAgICAgICAgc3VjY2Vzc1x0ZnVuY3Rpb25cdFx05ZCmXHTmjqXlj6PosIPnlKjmiJDlip/nmoTlm57osIPlh73mlbBcdFxyXG4gICAgICAgIGZhaWxcdGZ1bmN0aW9uXHRcdOWQplx05o6l5Y+j6LCD55So5aSx6LSl55qE5Zue6LCD5Ye95pWwXHRcclxuICAgICAgICBjb21wbGV0ZVx0ZnVuY3Rpb25cdFx05ZCmXHTmjqXlj6PosIPnlKjnu5PmnZ/nmoTlm57osIPlh73mlbDvvIjosIPnlKjmiJDlip/jgIHlpLHotKXpg73kvJrmiafooYzvvIlcclxuICAgICAgICBvYmplY3QuZW52VmVyc2lvbiDnmoTlkIjms5XlgLxcclxuXHJcbiAgICAgICAgZW52VmVyc2lvbiA+Pi0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgZGV2ZWxvcFx05byA5Y+R54mIXHJcbiAgICAgICAgdHJpYWxcdOS9k+mqjOeJiFxyXG4gICAgICAgIHJlbGVhc2VcdOato+W8j+eJiFxyXG4gICAgICovXHJcbiAgICBjbGlja0dhbWUoZ2FtZWNmZylcclxuICAgIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuaJk+W8gOWwj+eoi+W6jy4uLlwiKVxyXG4gICAgICAgIHd4Lm5hdmlnYXRlVG9NaW5pUHJvZ3JhbSh7XHJcbiAgICAgICAgICAgIGFwcElkOmdhbWVjZmcud3hfYXBwaWQsXHJcbiAgICAgICAgICAgIGV4dHJhRGF0YTp7XHJcbiAgICAgICAgICAgICAgICB3eF9hcHBpZDpHYW1lQ29uZmlnLnd4X2FwcGlkLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlbnZWZXJzaW9uOlwicmVsZWFzZVwiLFxyXG4gICAgICAgICAgICBzdWNjZXNzOihyZXMpPT57XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaJk+W8gOWwj+eoi+W6j+aIkOWKnyA6XCIgKyBnYW1lY2ZnLnd4X2FwcGlkKVxyXG4gICAgICAgICAgICAgICAgLy8g6Lez6L2s6YCa55+l5pyN5Yqh5ZmoXHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmYWlsOihyZXMpPT57XHJcbiAgICAgICAgICAgICAgICAvL+aJk+W8gOWksei0pVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmiZPlvIDlsI/nqIvluo/lpLHotKUgOlwiICtnYW1lY2ZnLnd4X2FwcGlkKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgICAvLyDmiZPlvIDor6bmg4Ug5oiW6ICF55u05o6l5omT5byAXHJcbiAgICAgICAgLy9jZmcuaW1hZ2UgIFxyXG4gICAgfVxyXG5cclxuICAgIG9uRW5hYmxlKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMudXBkYXRlRmluaXNoZWRUYXNrLDEsY2MubWFjcm8uUkVQRUFUX0ZPUkVWRVIpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGlzYWJsZSgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMudXBkYXRlRmluaXNoZWRUYXNrKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gbGV0IGdhbWVMaXN0ICA9IFtcclxuICAgICAgICAvLyAgICAge1xyXG4gICAgICAgIC8vICAgICAgICAgY29udGVudDpcIuWwhOS6huS4queQg1wiLFxyXG4gICAgICAgIC8vICAgICAgICAgZXh0cmE6XCJcIixcclxuICAgICAgICAvLyAgICAgICAgIGljb246XCJodHRwczovLzExMS4yMzEuOTQuMjEzL2dhbWUvZ2FtZXJlcy9yZWNvbW1lbmQvZ2FtZV8wMS9pY29uLmpwZ1wiLFxyXG4gICAgICAgIC8vICAgICAgICAgaWQ6MSxcclxuICAgICAgICAvLyAgICAgICAgIGltYWdlOlwiaHR0cHM6Ly8xMTEuMjMxLjk0LjIxMy9nYW1lL2dhbWVyZXMvcmVjb21tZW5kL2dhbWVfMDEvcXIucG5nXCIsXHJcbiAgICAgICAgLy8gICAgICAgICB0aXRsZTpcIuWwhOS6huS4queQg1wiLFxyXG4gICAgICAgIC8vICAgICAgICAgd3hfYXBwaWQ6XCJ3eGNkNTZjZDBhNjYxOTk2MzhcIixcclxuICAgICAgICAvLyAgICAgICAgIHByaW9yaXR5OiA5OSxcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIF1cclxuICAgICAgICAvLyBsZXQgdGVzdCA9IEpTT04ucGFyc2UoJ3tcInByaW9yaXR5XCI6MTAwLFwidGl0bGVcIjpcIuawtOaenOazoeazoem+mVwiLFwiZXh0cmFcIjpcImVtcHR5XCIsXCJpY29uXCI6XCJodHRwczovLzcyNjUtcmVsZWFzZS0yYzg3YzQtMTI1ODM5OTQ2My50Y2IucWNsb3VkLmxhL3BwbGljb24ucG5nP3NpZ249NDMxMTZhNWVjZmVhZDZlNjE0YzUyYjk4MThjYjE1ZWNcXHUwMDI2dD0xNTQ3OTcyNDk3XCIsXCJpbWFnZVwiOlwiaHR0cHM6Ly83MjY1LXJlbGVhc2UtMmM4N2M0LTEyNTgzOTk0NjMudGNiLnFjbG91ZC5sYS9xcmNvZGUgKDIpLmpwZz9zaWduPTQzZWRjNTFmOTI0ZThhNGU5NjllNzFjNWUwNzUzYWRmXFx1MDAyNnQ9MTU0Nzk3MjQyM1wiLFwid3hfYXBwaWRcIjpcInd4ZGJhY2JiYTJkMDI3NzE1MlwifScpXHJcbiAgICAgICAgLy8gZ2FtZUxpc3QucHVzaCh0ZXN0KTtcclxuICAgICAgICAvLyB0aGlzLmFkZExpc3QoZ2FtZUxpc3QpXHJcbiAgICB9XHJcbn0iXX0=