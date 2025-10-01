
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/ui/DCParticleSystem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f51daFLsqdJ/4k4IuDQeRuR', 'DCParticleSystem');
// Game/Scripts/ui/DCParticleSystem.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DCUI_1 = require("../../../framework/plugin_boosts/ui/DCUI");
var Info_1 = require("../Info");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DCParticleSystem = /** @class */ (function (_super) {
    __extends(DCParticleSystem, _super);
    function DCParticleSystem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DCParticleSystem.prototype.onLoad = function () {
    };
    DCParticleSystem.prototype.start = function () { };
    DCParticleSystem.prototype.onValueChanged = function (v) {
        var _this = this;
        var data = Info_1.UserInfo.getSkinById(v);
        // data.ps
        if (this.ps && this.ps.node)
            this.ps.node.destroy();
        cc.loader.loadRes("Game/Particles/" + data.ps, cc.ParticleAsset, function (err, ps) {
            console.log(data.ps, ps);
            var particleNode = new cc.Node();
            _this.ps = particleNode.addComponent(cc.ParticleSystem);
            _this.ps.file = ps;
            _this.node.addChild(particleNode);
        });
        // this.ps.file = cc.url.raw("resources/Game/Particles/" + data.ps+".plist");
        // cc.loader.loadRes("Game/Particles/"+data.ps,cc.ParticleAsset,(err,ps)=>{
        //     console.log(data.ps,ps);
        //     this.ps.file = ps;
        // })
    };
    DCParticleSystem = __decorate([
        ccclass
    ], DCParticleSystem);
    return DCParticleSystem;
}(DCUI_1.default));
exports.default = DCParticleSystem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcdWlcXERDUGFydGljbGVTeXN0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUE0RDtBQUM1RCxnQ0FBbUM7QUFHN0IsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBOEMsb0NBQUk7SUFBbEQ7O0lBNkJBLENBQUM7SUExQkcsaUNBQU0sR0FBTjtJQUdBLENBQUM7SUFFRCxnQ0FBSyxHQUFMLGNBQVUsQ0FBQztJQUVYLHlDQUFjLEdBQWQsVUFBZSxDQUFDO1FBQWhCLGlCQWtCQztRQWhCRyxJQUFJLElBQUksR0FBRyxlQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25DLFVBQVU7UUFDVixJQUFHLElBQUksQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJO1lBQ3RCLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzNCLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGlCQUFpQixHQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsRUFBRSxDQUFDLGFBQWEsRUFBQyxVQUFDLEdBQUcsRUFBQyxFQUFFO1lBQ2hFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxFQUFFLENBQUMsQ0FBQztZQUN4QixJQUFJLFlBQVksR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNqQyxLQUFJLENBQUMsRUFBRSxHQUFHLFlBQVksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ3ZELEtBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUNsQixLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNyQyxDQUFDLENBQUMsQ0FBQTtRQUNGLDZFQUE2RTtRQUM3RSwyRUFBMkU7UUFDM0UsK0JBQStCO1FBQy9CLHlCQUF5QjtRQUN6QixLQUFLO0lBQ1QsQ0FBQztJQTVCZ0IsZ0JBQWdCO1FBRHBDLE9BQU87T0FDYSxnQkFBZ0IsQ0E2QnBDO0lBQUQsdUJBQUM7Q0E3QkQsQUE2QkMsQ0E3QjZDLGNBQUksR0E2QmpEO2tCQTdCb0IsZ0JBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERDVUkgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9wbHVnaW5fYm9vc3RzL3VpL0RDVUlcIjtcclxuaW1wb3J0IHsgVXNlckluZm8gfSBmcm9tIFwiLi4vSW5mb1wiO1xyXG5pbXBvcnQgeyBSIH0gZnJvbSBcIi4uL2hleC1saW5lcy1nYW1lL1Jlc1wiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEQ1BhcnRpY2xlU3lzdGVtIGV4dGVuZHMgRENVSSB7XHJcblxyXG4gICAgcHM6Y2MuUGFydGljbGVTeXN0ZW07XHJcbiAgICBvbkxvYWQoKVxyXG4gICAge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHt9XHJcblxyXG4gICAgb25WYWx1ZUNoYW5nZWQodilcclxuICAgIHtcclxuICAgICAgICBsZXQgZGF0YSA9IFVzZXJJbmZvLmdldFNraW5CeUlkKHYpO1xyXG4gICAgICAgIC8vIGRhdGEucHNcclxuICAgICAgICBpZih0aGlzLnBzICYmIHRoaXMucHMubm9kZSlcclxuICAgICAgICAgICAgdGhpcy5wcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcIkdhbWUvUGFydGljbGVzL1wiK2RhdGEucHMsY2MuUGFydGljbGVBc3NldCwoZXJyLHBzKT0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhLnBzLHBzKTtcclxuICAgICAgICAgICAgbGV0IHBhcnRpY2xlTm9kZSA9IG5ldyBjYy5Ob2RlKCk7XHJcbiAgICAgICAgICAgIHRoaXMucHMgPSBwYXJ0aWNsZU5vZGUuYWRkQ29tcG9uZW50KGNjLlBhcnRpY2xlU3lzdGVtKTtcclxuICAgICAgICAgICAgdGhpcy5wcy5maWxlID0gcHM7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChwYXJ0aWNsZU5vZGUpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy8gdGhpcy5wcy5maWxlID0gY2MudXJsLnJhdyhcInJlc291cmNlcy9HYW1lL1BhcnRpY2xlcy9cIiArIGRhdGEucHMrXCIucGxpc3RcIik7XHJcbiAgICAgICAgLy8gY2MubG9hZGVyLmxvYWRSZXMoXCJHYW1lL1BhcnRpY2xlcy9cIitkYXRhLnBzLGNjLlBhcnRpY2xlQXNzZXQsKGVycixwcyk9PntcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coZGF0YS5wcyxwcyk7XHJcbiAgICAgICAgLy8gICAgIHRoaXMucHMuZmlsZSA9IHBzO1xyXG4gICAgICAgIC8vIH0pXHJcbiAgICB9XHJcbn0iXX0=