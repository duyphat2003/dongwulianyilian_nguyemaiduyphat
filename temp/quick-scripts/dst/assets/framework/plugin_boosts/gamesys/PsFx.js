
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/plugin_boosts/gamesys/PsFx.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5e90fpm8LtO1JagTdF3cTrm', 'PsFx');
// framework/plugin_boosts/gamesys/PsFx.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Device_1 = require("./Device");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PsFx = /** @class */ (function (_super) {
    __extends(PsFx, _super);
    function PsFx() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // @property([cc.ParticleSystem])
        _this.particles = [];
        // @property([cc.Animation])
        _this.animations = [];
        // armature:dragonBones.ArmatureDisplay = null
        _this.armature = null;
        // name:string = null;
        // _callback:Function;
        // _target:any;
        _this.isPlaying = false;
        _this.sfx = null;
        _this.sprite = null;
        _this.playedTime = 0;
        _this.duration = -1;
        _this.fadeAfterFinish = -1;
        _this.repeatTime = 1;
        _this.removeAfterFinish = false;
        return _this;
        // update (dt) {}
    }
    PsFx.prototype.onLoad = function () {
        if (this.sprite == null) {
            this.sprite = this.getComponent(cc.Sprite);
        }
        var anim = this.getComponent(cc.Animation);
        if (anim) {
            this.animations.push(anim);
        }
        var root_ps = this.getComponent(cc.ParticleSystem);
        root_ps && this.particles.push(root_ps);
        for (var i = 0; i < this.node.childrenCount; i++) {
            var child = this.node.children[i];
            var ps = child.getComponent(cc.ParticleSystem);
            if (ps)
                this.particles.push(ps);
            else {
                var anim_1 = child.getComponent(cc.Animation);
                if (anim_1)
                    this.animations.push(anim_1);
            }
        }
        if (typeof (dragonBones) != "undefined") {
            this.armature = this.getComponent(dragonBones.ArmatureDisplay);
            if (!this.armature)
                this.armature = this.getComponentInChildren(dragonBones.ArmatureDisplay);
        }
    };
    PsFx.prototype.play = function (audio, spriteFrame) {
        var _this = this;
        if (audio === void 0) { audio = null; }
        if (spriteFrame === void 0) { spriteFrame = null; }
        this.isPlaying = true;
        var dur = 0;
        if (audio) {
            this.sfx = audio;
        }
        if (spriteFrame)
            this.sprite.spriteFrame = spriteFrame;
        this.node.active = true;
        for (var i = 0; i < this.particles.length; i++) {
            var element = this.particles[i];
            element.resetSystem();
            if (dur < element.duration) {
                dur = element.duration + element.life + element.lifeVar;
            }
        }
        for (var i = 0; i < this.animations.length; i++) {
            var element = this.animations[i];
            var clips = element.getClips();
            if (clips && clips.length > 0) {
                var clip = clips[0];
                var duration = clip.duration / clip.speed;
                if (duration > dur) {
                    dur = duration;
                }
                element.play(clip.name);
            }
        }
        if (this.sfx) {
            Device_1.default.playEffect(this.sfx, false);
        }
        if (this.armature) {
            this.armature.playAnimation("", this.repeatTime);
            dur = this.duration;
            if (dur <= 0) {
                return new Promise(function (resolve, reject) {
                    // this.armature.addEventListener(dragonBones.EventObject.LOOP_COMPLETE, _=>{
                    //     console.log("loop complete");
                    //     this.fadeOnFinish(resolve)
                    // })
                    _this.armature.addEventListener(dragonBones.EventObject.COMPLETE, function (_) {
                        console.log("armature play complete");
                        if (_this.removeAfterFinish) {
                            _this.node.removeFromParent();
                        }
                        else {
                            _this.fadeOnFinish(resolve);
                        }
                    });
                });
            }
        }
        else {
            dur = dur + 0.1;
        }
        // console.log("[psfx] play : " ,  this.name,  dur);
        return new Promise(function (resolve, reject) {
            setTimeout(function (_) {
                if (!_this.isValid)
                    return;
                if (_this.removeAfterFinish) {
                    _this.node.removeFromParent();
                }
                else {
                    _this.fadeOnFinish(resolve);
                }
            }, dur * 1000);
        });
    };
    PsFx.prototype.fadeOnFinish = function (callback) {
        this.isPlaying = false;
        for (var i = 0; i < this.particles.length; i++) {
            var element = this.particles[i];
            element.stopSystem();
        }
        if (this.fadeAfterFinish > 0) {
            var seq = cc.sequence(cc.fadeOut(this.fadeAfterFinish), cc.callFunc(callback));
            this.node.runAction(seq);
        }
        else {
            callback();
        }
    };
    PsFx.prototype.reset = function () {
        this.playedTime = 0;
    };
    PsFx.prototype.start = function () {
    };
    __decorate([
        property({ type: cc.AudioClip })
    ], PsFx.prototype, "sfx", void 0);
    __decorate([
        property(cc.Sprite)
    ], PsFx.prototype, "sprite", void 0);
    __decorate([
        property
    ], PsFx.prototype, "duration", void 0);
    __decorate([
        property
    ], PsFx.prototype, "fadeAfterFinish", void 0);
    __decorate([
        property
    ], PsFx.prototype, "repeatTime", void 0);
    __decorate([
        property
    ], PsFx.prototype, "removeAfterFinish", void 0);
    PsFx = __decorate([
        ccclass
    ], PsFx);
    return PsFx;
}(cc.Component));
exports.default = PsFx;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxwbHVnaW5fYm9vc3RzXFxnYW1lc3lzXFxQc0Z4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBOEI7QUFFeEIsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUErS0M7UUE3S0csaUNBQWlDO1FBQ2pDLGVBQVMsR0FBdUIsRUFBRSxDQUFBO1FBRWxDLDRCQUE0QjtRQUM1QixnQkFBVSxHQUFrQixFQUFFLENBQUE7UUFFOUIsOENBQThDO1FBQzlDLGNBQVEsR0FBTyxJQUFJLENBQUM7UUFFcEIsc0JBQXNCO1FBRXRCLHNCQUFzQjtRQUN0QixlQUFlO1FBRWYsZUFBUyxHQUFXLEtBQUssQ0FBQztRQUcxQixTQUFHLEdBQWdCLElBQUksQ0FBQTtRQUd2QixZQUFNLEdBQWEsSUFBSSxDQUFBO1FBRXZCLGdCQUFVLEdBQVUsQ0FBQyxDQUFDO1FBR3RCLGNBQVEsR0FBVSxDQUFDLENBQUMsQ0FBRTtRQUd0QixxQkFBZSxHQUFVLENBQUMsQ0FBQyxDQUFDO1FBRzVCLGdCQUFVLEdBQVUsQ0FBQyxDQUFDO1FBR3RCLHVCQUFpQixHQUFXLEtBQUssQ0FBQzs7UUEwSWxDLGlCQUFpQjtJQUNyQixDQUFDO0lBeElHLHFCQUFNLEdBQU47UUFFSSxJQUFHLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxFQUN0QjtZQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDOUM7UUFDRCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUMxQyxJQUFHLElBQUksRUFDUDtZQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUks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O1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUMsQ0FBQztxQ0FDUjtJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3dDQUNHO0lBS3ZCO1FBREMsUUFBUTswQ0FDYTtJQUd0QjtRQURDLFFBQVE7aURBQ21CO0lBRzVCO1FBREMsUUFBUTs0Q0FDYTtJQUd0QjtRQURDLFFBQVE7bURBQ3lCO0lBcENqQixJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBK0t4QjtJQUFELFdBQUM7Q0EvS0QsQUErS0MsQ0EvS2lDLEVBQUUsQ0FBQyxTQUFTLEdBK0s3QztrQkEvS29CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGV2aWNlIGZyb20gXCIuL0RldmljZVwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQc0Z4IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIFxyXG4gICAgLy8gQHByb3BlcnR5KFtjYy5QYXJ0aWNsZVN5c3RlbV0pXHJcbiAgICBwYXJ0aWNsZXM6Y2MuUGFydGljbGVTeXN0ZW1bXSA9IFtdXHJcblxyXG4gICAgLy8gQHByb3BlcnR5KFtjYy5BbmltYXRpb25dKVxyXG4gICAgYW5pbWF0aW9uczpjYy5BbmltYXRpb25bXSA9IFtdXHJcblxyXG4gICAgLy8gYXJtYXR1cmU6ZHJhZ29uQm9uZXMuQXJtYXR1cmVEaXNwbGF5ID0gbnVsbFxyXG4gICAgYXJtYXR1cmU6YW55ID0gbnVsbDtcclxuXHJcbiAgICAvLyBuYW1lOnN0cmluZyA9IG51bGw7XHJcblxyXG4gICAgLy8gX2NhbGxiYWNrOkZ1bmN0aW9uO1xyXG4gICAgLy8gX3RhcmdldDphbnk7XHJcblxyXG4gICAgaXNQbGF5aW5nOmJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBAcHJvcGVydHkoe3R5cGU6IGNjLkF1ZGlvQ2xpcH0pXHJcbiAgICBzZng6Y2MuQXVkaW9DbGlwID0gbnVsbFxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICBzcHJpdGU6Y2MuU3ByaXRlID0gbnVsbFxyXG5cclxuICAgIHBsYXllZFRpbWU6bnVtYmVyID0gMDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGR1cmF0aW9uOm51bWJlciA9IC0xIDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGZhZGVBZnRlckZpbmlzaDpudW1iZXIgPSAtMTtcclxuICAgIFxyXG4gICAgQHByb3BlcnR5XHJcbiAgICByZXBlYXRUaW1lOm51bWJlciA9IDE7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICByZW1vdmVBZnRlckZpbmlzaDpib29sZWFuID0gZmFsc2U7XHJcblxyXG5cclxuICAgIG9uTG9hZCgpXHJcbiAgICB7XHJcbiAgICAgICAgaWYodGhpcy5zcHJpdGUgPT0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlID0gdGhpcy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGFuaW0gPSB0aGlzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pXHJcbiAgICAgICAgaWYoYW5pbSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9ucy5wdXNoKGFuaW0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcm9vdF9wcyA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLlBhcnRpY2xlU3lzdGVtKVxyXG4gICAgICAgIHJvb3RfcHMgJiYgdGhpcy5wYXJ0aWNsZXMucHVzaChyb290X3BzKVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ub2RlLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBjaGlsZCA9IHRoaXMubm9kZS5jaGlsZHJlbltpXVxyXG4gICAgICAgICAgICBsZXQgcHMgPSBjaGlsZC5nZXRDb21wb25lbnQoY2MuUGFydGljbGVTeXN0ZW0pICAgXHJcbiAgICAgICAgICAgIGlmKHBzKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXJ0aWNsZXMucHVzaChwcyk7XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICBsZXQgYW5pbSA9IGNoaWxkLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pXHJcbiAgICAgICAgICAgICAgICBpZihhbmltKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9ucy5wdXNoKGFuaW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHR5cGVvZihkcmFnb25Cb25lcykgIT1cInVuZGVmaW5lZFwiKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5hcm1hdHVyZSA9IHRoaXMuZ2V0Q29tcG9uZW50KGRyYWdvbkJvbmVzLkFybWF0dXJlRGlzcGxheSk7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLmFybWF0dXJlKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hcm1hdHVyZSA9IHRoaXMuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihkcmFnb25Cb25lcy5Bcm1hdHVyZURpc3BsYXkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwbGF5KGF1ZGlvOmNjLkF1ZGlvQ2xpcD0gbnVsbCxzcHJpdGVGcmFtZSA9IG51bGwpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5pc1BsYXlpbmcgPSB0cnVlO1xyXG4gICAgICAgIGxldCBkdXIgPSAwO1xyXG4gICAgICAgIGlmKGF1ZGlvKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zZnggPSBhdWRpb1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihzcHJpdGVGcmFtZSlcclxuICAgICAgICAgICAgdGhpcy5zcHJpdGUuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGFydGljbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLnBhcnRpY2xlc1tpXTtcclxuICAgICAgICAgICAgZWxlbWVudC5yZXNldFN5c3RlbSgpO1xyXG4gICAgICAgICAgICBpZihkdXIgPCBlbGVtZW50LmR1cmF0aW9uKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkdXIgPSBlbGVtZW50LmR1cmF0aW9uICsgZWxlbWVudC5saWZlICsgZWxlbWVudC5saWZlVmFyXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFuaW1hdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuYW5pbWF0aW9uc1tpXTtcclxuICAgICAgICAgICAgbGV0IGNsaXBzID0gZWxlbWVudC5nZXRDbGlwcygpXHJcbiAgICAgICAgICAgIGlmKGNsaXBzICYmIGNsaXBzLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBjbGlwID0gY2xpcHNbMF1cclxuICAgICAgICAgICAgICAgIGxldCBkdXJhdGlvbiA9IGNsaXAuZHVyYXRpb24vY2xpcC5zcGVlZFxyXG4gICAgICAgICAgICAgICAgaWYoZHVyYXRpb24gPiBkdXIpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZHVyID0gZHVyYXRpb247XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnBsYXkoY2xpcC5uYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5zZngpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBEZXZpY2UucGxheUVmZmVjdCh0aGlzLnNmeCxmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHRoaXMuYXJtYXR1cmUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmFybWF0dXJlLnBsYXlBbmltYXRpb24oXCJcIix0aGlzLnJlcGVhdFRpbWUpO1xyXG4gICAgICAgICAgICBkdXIgPSB0aGlzLmR1cmF0aW9uO1xyXG4gICAgICAgICAgICBpZihkdXIgPD0gMClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmFybWF0dXJlLmFkZEV2ZW50TGlzdGVuZXIoZHJhZ29uQm9uZXMuRXZlbnRPYmplY3QuTE9PUF9DT01QTEVURSwgXz0+e1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcImxvb3AgY29tcGxldGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuZmFkZU9uRmluaXNoKHJlc29sdmUpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFybWF0dXJlLmFkZEV2ZW50TGlzdGVuZXIoZHJhZ29uQm9uZXMuRXZlbnRPYmplY3QuQ09NUExFVEUsIF89PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJhcm1hdHVyZSBwbGF5IGNvbXBsZXRlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLnJlbW92ZUFmdGVyRmluaXNoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUucmVtb3ZlRnJvbVBhcmVudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmFkZU9uRmluaXNoKHJlc29sdmUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBkdXIgPSBkdXIgKyAwLjE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiW3BzZnhdIHBsYXkgOiBcIiAsICB0aGlzLm5hbWUsICBkdXIpO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoXz0+e1xyXG4gICAgICAgICAgICAgICAgaWYoIXRoaXMuaXNWYWxpZCkgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLnJlbW92ZUFmdGVyRmluaXNoKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5yZW1vdmVGcm9tUGFyZW50KCk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZhZGVPbkZpbmlzaChyZXNvbHZlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LGR1ciAqIDEwMDApXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBmYWRlT25GaW5pc2goY2FsbGJhY2spXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5pc1BsYXlpbmcgPSBmYWxzZTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGFydGljbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLnBhcnRpY2xlc1tpXTtcclxuICAgICAgICAgICAgZWxlbWVudC5zdG9wU3lzdGVtKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuZmFkZUFmdGVyRmluaXNoID4gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBzZXEgPSBjYy5zZXF1ZW5jZShjYy5mYWRlT3V0KHRoaXMuZmFkZUFmdGVyRmluaXNoKSxjYy5jYWxsRnVuYyhjYWxsYmFjaykpXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oc2VxKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXNldCgpOiBhbnkge1xyXG4gICAgICAgIHRoaXMucGxheWVkVGltZSA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==