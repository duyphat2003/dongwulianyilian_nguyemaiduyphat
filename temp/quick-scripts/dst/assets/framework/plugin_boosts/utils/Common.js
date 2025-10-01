
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/plugin_boosts/utils/Common.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd6d4aCOiTtJz6R1xuSQrtdC', 'Common');
// framework/plugin_boosts/utils/Common.ts

Object.defineProperty(exports, "__esModule", { value: true });
var SpriteFrameCache_1 = require("../misc/SpriteFrameCache");
var Common = /** @class */ (function () {
    function Common() {
    }
    Common.loadJson = function (path) {
        return new Promise(function (resolve, reject) {
            cc.loader.loadRes(path, cc.JsonAsset, function (errorcode, data) {
                resolve(data.json);
            });
        });
    };
    Common.sleep = function (timeout) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve();
            }, timeout * 1000);
        });
    };
    Common.isGreaterDays = function (before, num) {
        if (num === void 0) { num = 7; }
        var now = new Date();
        var diff = now.getTime() - before;
        if (diff > 86400000 * num) // 24*60*60*1000
         {
            return true;
        }
    };
    Common.setDisplay = function (sp, url) {
        SpriteFrameCache_1.default.instance.getSpriteFrame(url).then(function (sf) { sp.spriteFrame = sf; });
    };
    Common.generate_action = function (params) {
        var scale_action = cc.scaleTo(params.time, params.scale_x, params.scale_y);
        return scale_action;
    };
    //弹性效果 果冻效果 
    Common.jellyJump = function (node) {
        var spawn_action1 = this.generate_action({ time: 0.06, scale_x: 0.7, scale_y: 0.7, scale_z: 1 });
        // let  spawn_action2 = this.generate_action({time : 0.12, scale_x : 1.3, scale_y  :1.3, scale_z :1})
        var spawn_action3 = this.generate_action({ time: 0.07, scale_x: 1, scale_y: 1.4, scale_z: 1 });
        // let  spawn_action4 = this.generate_action({time : 0.07, scale_x : 1.3, scale_y  :1.3, scale_z: 1})
        // let  spawn_action5 = this.generate_action({time : 0.07, scale_x : 1.2, scale_y : 1.2, scale_z : 1})
        var spawn_action5 = cc.scaleTo(0.8, 1.3).easing(cc.easeElasticOut(0.3));
        var seq_actions = cc.sequence(spawn_action1, 
        //  spawn_action2,
        spawn_action3, 
        // spawn_action4,
        spawn_action5);
        node.runAction(seq_actions);
    };
    Common.jellyJump2 = function (node, from, scale) {
        node.scale = from;
        var act = cc.scaleTo(0.8, scale, scale).easing(cc.easeElasticOut(0.3));
        node.runAction(act);
    };
    Common.moveBezier = function (prefab, from, to, callback, dur, delay) {
        if (callback === void 0) { callback = null; }
        if (dur === void 0) { dur = 1; }
        if (delay === void 0) { delay = 0; }
        var sprite = cc.instantiate(prefab);
        sprite.opacity = 255;
        sprite.setPosition(from);
        var bezier = [];
        var x = from.x, y = from.y;
        var ex = to.x, ey = to.y;
        bezier[0] = cc.v2(x, y);
        bezier[1] = cc.v2(x + Math.abs(ex - x + 100) * 0.5, y + Math.abs(ey - y + 100) * 0.5);
        bezier[2] = cc.v2(ex, ey);
        sprite.runAction(cc.sequence(cc.delayTime(delay), cc.bezierTo(dur, bezier), cc.fadeOut(0.3), cc.callFunc(callback)));
        return sprite;
    };
    return Common;
}());
exports.default = Common;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxwbHVnaW5fYm9vc3RzXFx1dGlsc1xcQ29tbW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2REFBd0Q7QUFFeEQ7SUFBQTtJQWtGQSxDQUFDO0lBaEZVLGVBQVEsR0FBZixVQUFnQixJQUFJO1FBRWhCLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUMsTUFBTTtZQUM5QixFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBQyxVQUFDLFNBQVMsRUFBQyxJQUFJO2dCQUNoRCxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ3RCLENBQUMsQ0FBQyxDQUFBO1FBQ04sQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRU0sWUFBSyxHQUFaLFVBQWEsT0FBTztRQUVoQixPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFDLE1BQU07WUFDOUIsVUFBVSxDQUFDO2dCQUNQLE9BQU8sRUFBRSxDQUFBO1lBQ2IsQ0FBQyxFQUFFLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQTtRQUN0QixDQUFDLENBQUMsQ0FBQTtJQUVOLENBQUM7SUFFTSxvQkFBYSxHQUFwQixVQUFxQixNQUFNLEVBQUUsR0FBTztRQUFQLG9CQUFBLEVBQUEsT0FBTztRQUVoQyxJQUFJLEdBQUcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxPQUFPLEVBQUUsR0FBRyxNQUFNLENBQUE7UUFDakMsSUFBRyxJQUFJLEdBQUcsUUFBUSxHQUFHLEdBQUcsRUFBRSxnQkFBZ0I7U0FDMUM7WUFDSSxPQUFPLElBQUksQ0FBQztTQUNmO0lBQ0wsQ0FBQztJQUVNLGlCQUFVLEdBQWpCLFVBQWtCLEVBQUUsRUFBQyxHQUFHO1FBRXBCLDBCQUFnQixDQUFDLFFBQVEsQ0FBQyxjQUFjLENB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Q0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsR0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQTtRQUNsRixNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUE7UUFFekIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLEVBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBQyxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNuSCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRUwsYUFBQztBQUFELENBbEZBLEFBa0ZDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3ByaXRlRnJhbWVDYWNoZSBmcm9tIFwiLi4vbWlzYy9TcHJpdGVGcmFtZUNhY2hlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21tb25cclxue1xyXG4gICAgc3RhdGljIGxvYWRKc29uKHBhdGgpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMocGF0aCAsY2MuSnNvbkFzc2V0LChlcnJvcmNvZGUsZGF0YSk9PntcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YS5qc29uKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNsZWVwKHRpbWVvdXQpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKClcclxuICAgICAgICAgICAgfSwgdGltZW91dCAqIDEwMDApXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaXNHcmVhdGVyRGF5cyhiZWZvcmUsIG51bSA9IDcpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IG5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgdmFyIGRpZmYgPSBub3cuZ2V0VGltZSgpIC0gYmVmb3JlXHJcbiAgICAgICAgaWYoZGlmZiA+IDg2NDAwMDAwICogbnVtKSAvLyAyNCo2MCo2MCoxMDAwXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNldERpc3BsYXkoc3AsdXJsKVxyXG4gICAge1xyXG4gICAgICAgIFNwcml0ZUZyYW1lQ2FjaGUuaW5zdGFuY2UuZ2V0U3ByaXRlRnJhbWUodXJsKS50aGVuKHNmPT57c3Auc3ByaXRlRnJhbWUgPSBzZn0pXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHN0YXRpYyBnZW5lcmF0ZV9hY3Rpb24ocGFyYW1zKXtcclxuICAgICAgICBsZXQgc2NhbGVfYWN0aW9uID0gY2Muc2NhbGVUbyhwYXJhbXMudGltZSwgcGFyYW1zLnNjYWxlX3gsIHBhcmFtcy5zY2FsZV95KVxyXG4gICAgICAgIHJldHVybiBzY2FsZV9hY3Rpb25cclxuICAgIH1cclxuXHJcbiAgICAvL+W8ueaAp+aViOaenCDmnpzlhrvmlYjmnpwgXHJcbiAgICBzdGF0aWMgIGplbGx5SnVtcChub2RlKVxyXG4gICAge1xyXG4gICAgICAgIGxldCAgc3Bhd25fYWN0aW9uMSA9IHRoaXMuZ2VuZXJhdGVfYWN0aW9uKHt0aW1lIDogMC4wNiwgc2NhbGVfeCA6IDAuNywgc2NhbGVfeSA6IDAuNywgc2NhbGVfejogMX0pXHJcbiAgICAgICAgLy8gbGV0ICBzcGF3bl9hY3Rpb24yID0gdGhpcy5nZW5lcmF0ZV9hY3Rpb24oe3RpbWUgOiAwLjEyLCBzY2FsZV94IDogMS4zLCBzY2FsZV95ICA6MS4zLCBzY2FsZV96IDoxfSlcclxuICAgICAgICBsZXQgIHNwYXduX2FjdGlvbjMgPSB0aGlzLmdlbmVyYXRlX2FjdGlvbih7dGltZSA6IDAuMDcsIHNjYWxlX3ggOiAxLCBzY2FsZV95ICA6MS40LCBzY2FsZV96IDoxfSlcclxuICAgICAgICAvLyBsZXQgIHNwYXduX2FjdGlvbjQgPSB0aGlzLmdlbmVyYXRlX2FjdGlvbih7dGltZSA6IDAuMDcsIHNjYWxlX3ggOiAxLjMsIHNjYWxlX3kgIDoxLjMsIHNjYWxlX3o6IDF9KVxyXG4gICAgICAgIC8vIGxldCAgc3Bhd25fYWN0aW9uNSA9IHRoaXMuZ2VuZXJhdGVfYWN0aW9uKHt0aW1lIDogMC4wNywgc2NhbGVfeCA6IDEuMiwgc2NhbGVfeSA6IDEuMiwgc2NhbGVfeiA6IDF9KVxyXG4gICAgICAgIGxldCBzcGF3bl9hY3Rpb241ID0gY2Muc2NhbGVUbygwLjgsIDEuMykuZWFzaW5nKGNjLmVhc2VFbGFzdGljT3V0KDAuMykpO1xyXG4gICAgICAgIGxldCAgc2VxX2FjdGlvbnMgPSBjYy5zZXF1ZW5jZShzcGF3bl9hY3Rpb24xLFxyXG4gICAgICAgICAgICAvLyAgc3Bhd25fYWN0aW9uMixcclxuICAgICAgICAgICAgICAgIHNwYXduX2FjdGlvbjMsXHJcbiAgICAgICAgICAgICAgICAvLyBzcGF3bl9hY3Rpb240LFxyXG4gICAgICAgICAgICAgICAgc3Bhd25fYWN0aW9uNSlcclxuICAgICAgICBub2RlLnJ1bkFjdGlvbihzZXFfYWN0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGplbGx5SnVtcDIobm9kZSxmcm9tLHNjYWxlKVxyXG4gICAge1xyXG4gICAgICAgIG5vZGUuc2NhbGUgPSBmcm9tO1xyXG4gICAgICAgIGxldCBhY3QgPSBjYy5zY2FsZVRvKDAuOCwgc2NhbGUsc2NhbGUpLmVhc2luZyhjYy5lYXNlRWxhc3RpY091dCgwLjMpKTtcclxuICAgICAgICBub2RlLnJ1bkFjdGlvbihhY3QpXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIG1vdmVCZXppZXIocHJlZmFiLGZyb20sdG8sY2FsbGJhY2sgPSBudWxsLGR1ciA9IDEsZGVsYXkgPSAwKXtcclxuICAgICAgICBsZXQgc3ByaXRlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKVxyXG4gICAgICAgIHNwcml0ZS5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgIHNwcml0ZS5zZXRQb3NpdGlvbihmcm9tKVxyXG5cclxuICAgICAgICBsZXQgYmV6aWVyID0gW11cclxuICAgICAgICBsZXQgeCA9IGZyb20ueCwgeSA9IGZyb20ueVxyXG4gICAgICAgIGxldCBleCA9IHRvLngsIGV5ID0gdG8ueTtcclxuICAgICAgICBiZXppZXJbMF0gPSBjYy52Mih4LCB5KVxyXG4gICAgICAgIGJlemllclsxXSA9IGNjLnYyKHggKyBNYXRoLmFicyhleCAtIHgrIDEwMCkgKiAwLjUsIHkgKyBNYXRoLmFicyhleSAtIHkrMTAwKSAqIDAuNSlcclxuICAgICAgICBiZXppZXJbMl0gPSBjYy52MihleCwgZXkpXHJcblxyXG4gICAgICAgIHNwcml0ZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZGVsYXlUaW1lKGRlbGF5KSxjYy5iZXppZXJUbyhkdXIsIGJlemllcikgLCBjYy5mYWRlT3V0KDAuMyksY2MuY2FsbEZ1bmMoY2FsbGJhY2spKSlcclxuICAgICAgICByZXR1cm4gc3ByaXRlO1xyXG4gICAgfVxyXG5cclxufSJdfQ==