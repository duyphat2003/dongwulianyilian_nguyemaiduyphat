
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/plugin_boosts/gamesys/InfiniteBackground.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ea63dhsLFFNTK51F3JClP8v', 'InfiniteBackground');
// framework/plugin_boosts/gamesys/InfiniteBackground.ts

// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var InfiniteBackground = /** @class */ (function (_super) {
    __extends(InfiniteBackground, _super);
    function InfiniteBackground() {
        // LIFE-CYCLE CALLBACKS:
        // onLoad () {}
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bgNode = null;
        _this.camera = null;
        _this.currentNode = null;
        _this.repeatCount = 0;
        return _this;
    }
    InfiniteBackground.prototype.onLoad = function () {
        this.currentNode = this.bgNode;
        this.size = this.currentNode.getContentSize();
        this.nodepool = new cc.NodePool();
    };
    InfiniteBackground.prototype.start = function () {
        if (this.prev == null) {
            this.prev = cc.instantiate(this.bgNode);
            this.node.addChild(this.prev);
            this.prev.y = -this.size.height;
        }
    };
    InfiniteBackground.prototype.reset = function () {
        this.repeatCount = 0;
        //todo :remove all 
        //todo:init all
    };
    InfiniteBackground.prototype.update = function (dt) {
        if (this.currentNode == null)
            return;
        var pos = cc.Vec2.ZERO;
        this.camera.getWorldToCameraPoint(this.currentNode.position, pos);
        var prev = this.prev;
        if (pos.y < 10) {
            // check has next 
            if (this.next == null) {
                this.pre_prev = this.prev;
                this.prev = this.currentNode;
                var road = this.nodepool.get();
                if (road == null)
                    road = cc.instantiate(this.currentNode);
                road.setPosition(0, this.size.height * ++this.repeatCount);
                this.node.addChild(road);
                this.currentNode = road;
                this.camera.getWorldToCameraPoint(road.position, pos);
                this.next = null;
                // console.log("create new road")
            }
        }
        if (pos.y > this.size.height - 10) {
            //remove previous
            if (this.pre_prev) {
                this.nodepool.put(this.pre_prev);
                // console.log("InfiniteBackground : recycle background:" ,this.nodepool.size())
            }
        }
        //todo remove 
    };
    __decorate([
        property(cc.Node)
    ], InfiniteBackground.prototype, "bgNode", void 0);
    __decorate([
        property(cc.Camera)
    ], InfiniteBackground.prototype, "camera", void 0);
    InfiniteBackground = __decorate([
        ccclass
    ], InfiniteBackground);
    return InfiniteBackground;
}(cc.Component));
exports.default = InfiniteBackground;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxwbHVnaW5fYm9vc3RzXFxnYW1lc3lzXFxJbmZpbml0ZUJhY2tncm91bmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLGlGQUFpRjtBQUNqRix5RkFBeUY7QUFDekYsbUJBQW1CO0FBQ25CLDJGQUEyRjtBQUMzRixtR0FBbUc7QUFDbkcsOEJBQThCO0FBQzlCLDJGQUEyRjtBQUMzRixtR0FBbUc7O0FBRTdGLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQWdELHNDQUFZO0lBQTVEO1FBRUksd0JBQXdCO1FBQ3hCLGVBQWU7UUFIbkIscUVBOEVDO1FBeEVHLFlBQU0sR0FBVyxJQUFJLENBQUM7UUFHdEIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUt2QixpQkFBVyxHQUFXLElBQUksQ0FBQztRQUMzQixpQkFBVyxHQUFHLENBQUMsQ0FBQzs7SUErRHBCLENBQUM7SUExREcsbUNBQU0sR0FBTjtRQUVJLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMvQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDOUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN0QyxDQUFDO0lBRUQsa0NBQUssR0FBTDtRQUNJLElBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLEVBQ3BCO1lBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUksQ0FBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUNyQztJQUNMLENBQUM7SUFFRCxrQ0FBSyxHQUFMO1FBRUksSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDckIsbUJBQW1CO1FBQ25CLGVBQWU7SUFDbkIsQ0FBQztJQUVELG1DQUFNLEdBQU4sVUFBUSxFQUFFO1FBRU4sSUFBRyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUk7WUFBQyxPQUFNO1FBQ2xDLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDaEUsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNyQixJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUNkO1lBQ0ksa0JBQWtCO1lBQ2xCLElBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLEVBQ3BCO2dCQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDMUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO2dCQUM3QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFBO2dCQUM5QixJQUFHLElBQUksSUFBSSxJQUFJO29CQUNYLElBQUksR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDNUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQzFELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN6QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztnQkFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFDLEdBQUcsQ0FBQyxDQUFBO2dCQUNwRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztnQkFDakIsaUNBQWlDO2FBQ3BDO1NBQ0o7UUFDRCxJQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxFQUNoQztZQUNJLGlCQUFpQjtZQUNqQixJQUFHLElBQUksQ0FBQyxRQUFRLEVBQ2hCO2dCQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDakMsZ0ZBQWdGO2FBQ25GO1NBQ0o7UUFDRCxjQUFjO0lBQ2xCLENBQUM7SUF2RUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztzREFDSTtJQUd0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3NEQUNHO0lBVE4sa0JBQWtCO1FBRHRDLE9BQU87T0FDYSxrQkFBa0IsQ0E4RXRDO0lBQUQseUJBQUM7Q0E5RUQsQUE4RUMsQ0E5RStDLEVBQUUsQ0FBQyxTQUFTLEdBOEUzRDtrQkE5RW9CLGtCQUFrQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmZpbml0ZUJhY2tncm91bmQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBiZ05vZGU6Y2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkNhbWVyYSlcclxuICAgIGNhbWVyYTpjYy5DYW1lcmE9IG51bGw7XHJcblxyXG4gICAgbmV4dDpjYy5Ob2RlO1xyXG4gICAgcHJldjpjYy5Ob2RlO1xyXG4gICAgcHJlX3ByZXYgOmNjLk5vZGU7XHJcbiAgICBjdXJyZW50Tm9kZTpjYy5Ob2RlID0gbnVsbDtcclxuICAgIHJlcGVhdENvdW50ID0gMDtcclxuXHJcbiAgICBzaXplIDogY2MuU2l6ZTtcclxuXHJcbiAgICBub2RlcG9vbDpjYy5Ob2RlUG9vbDtcclxuICAgIG9uTG9hZCgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50Tm9kZSA9IHRoaXMuYmdOb2RlO1xyXG4gICAgICAgIHRoaXMuc2l6ZSA9IHRoaXMuY3VycmVudE5vZGUuZ2V0Q29udGVudFNpemUoKTtcclxuICAgICAgICB0aGlzLm5vZGVwb29sID0gbmV3IGNjLk5vZGVQb29sKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIGlmKHRoaXMucHJldiA9PSBudWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5wcmV2ID0gY2MuaW5zdGFudGlhdGUodGhpcy5iZ05vZGUpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQodGhpcy5wcmV2KTtcclxuICAgICAgICAgICAgdGhpcy5wcmV2LnkgPSAgLSB0aGlzLnNpemUuaGVpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXNldCgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5yZXBlYXRDb3VudCA9IDA7XHJcbiAgICAgICAgLy90b2RvIDpyZW1vdmUgYWxsIFxyXG4gICAgICAgIC8vdG9kbzppbml0IGFsbFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuY3VycmVudE5vZGUgPT0gbnVsbClyZXR1cm5cclxuICAgICAgICBsZXQgcG9zID0gY2MuVmVjMi5aRVJPO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhLmdldFdvcmxkVG9DYW1lcmFQb2ludCh0aGlzLmN1cnJlbnROb2RlLnBvc2l0aW9uLHBvcylcclxuICAgICAgICBsZXQgcHJldiA9IHRoaXMucHJldjtcclxuICAgICAgICBpZiAocG9zLnkgPCAxMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIGNoZWNrIGhhcyBuZXh0IFxyXG4gICAgICAgICAgICBpZih0aGlzLm5leHQgPT0gbnVsbClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcmVfcHJldiA9IHRoaXMucHJldjtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJldiA9IHRoaXMuY3VycmVudE5vZGU7XHJcbiAgICAgICAgICAgICAgICBsZXQgcm9hZCA9IHRoaXMubm9kZXBvb2wuZ2V0KClcclxuICAgICAgICAgICAgICAgIGlmKHJvYWQgPT0gbnVsbClcclxuICAgICAgICAgICAgICAgICAgICByb2FkID0gY2MuaW5zdGFudGlhdGUodGhpcy5jdXJyZW50Tm9kZSk7XHJcbiAgICAgICAgICAgICAgICByb2FkLnNldFBvc2l0aW9uKDAsdGhpcy5zaXplLmhlaWdodCAqICsrdGhpcy5yZXBlYXRDb3VudCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQocm9hZCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnROb2RlID0gcm9hZDtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhLmdldFdvcmxkVG9DYW1lcmFQb2ludChyb2FkLnBvc2l0aW9uLHBvcylcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNyZWF0ZSBuZXcgcm9hZFwiKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHBvcy55ID4gdGhpcy5zaXplLmhlaWdodCAtIDEwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy9yZW1vdmUgcHJldmlvdXNcclxuICAgICAgICAgICAgaWYodGhpcy5wcmVfcHJldilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlcG9vbC5wdXQodGhpcy5wcmVfcHJldik7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkluZmluaXRlQmFja2dyb3VuZCA6IHJlY3ljbGUgYmFja2dyb3VuZDpcIiAsdGhpcy5ub2RlcG9vbC5zaXplKCkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy90b2RvIHJlbW92ZSBcclxuICAgIH1cclxufVxyXG4iXX0=