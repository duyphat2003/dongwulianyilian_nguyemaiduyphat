
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/plugin_boosts/ui/UIFunctions.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '10205trRZVOELcrvc3TW2mW', 'UIFunctions');
// framework/plugin_boosts/ui/UIFunctions.ts

Object.defineProperty(exports, "__esModule", { value: true });
var UIFunctions = /** @class */ (function () {
    function UIFunctions() {
    }
    UIFunctions.getChildrenAnimations = function (node) {
        var animations = [];
        var anim = node.getComponent(cc.Animation);
        if (anim)
            animations.push(anim);
        for (var i = 0; i < node.childrenCount; i++) {
            var child = node.children[i];
            var anim = child.getComponent(cc.Animation);
            if (anim)
                animations.push(anim);
        }
        return animations;
    };
    UIFunctions.stopAnimations = function (animations) {
        animations.forEach(function (anim) {
            anim.stop();
        });
    };
    UIFunctions.doShowAnimations = function (animations, finishCallback, target) {
        var maxDuration = 0;
        var maxDurationAnimation;
        animations.forEach(function (anim) {
            var clips = anim.getClips();
            if (clips.length > 0) {
                var clip = clips[0];
                var animState = anim.play(clip.name);
                animState.wrapMode = cc.WrapMode.Normal;
                if (clip.duration > maxDuration) {
                    maxDuration = clip.duration;
                    maxDurationAnimation = anim;
                }
            }
        });
        if (finishCallback) {
            var func_1 = function () {
                // console.log("finish animations")
                if (maxDurationAnimation)
                    maxDurationAnimation.off("finished", func_1);
                finishCallback.call(target);
            };
            if (maxDurationAnimation)
                maxDurationAnimation.on("finished", func_1);
            else
                finishCallback.call(target);
        }
    };
    // static getLongestAnimation(animations)
    // {
    //     animations.forEach((anim:cc.Animation)=>{
    //         let clips = anim.getClips()
    //         for (clips)
    //         //以最长的为准
    //     }
    // }
    //TODO:还未实现
    UIFunctions.isAnimationRunning = function (animations) {
        return false;
    };
    UIFunctions.doHideAnimations = function (animations, finishCallback, target) {
        var hasHideAnimation = false;
        var maxDuration = 0;
        var maxDurationAnimation;
        animations.forEach(function (anim) {
            var clips = anim.getClips();
            if (clips.length == 2) {
                var clip = clips[clips.length - 1];
                // anim.on("finished",onHideAnimationFinished)
                hasHideAnimation = true;
                anim.play(clip.name);
                if (clip.duration > maxDuration) {
                    maxDuration = clip.duration;
                    maxDurationAnimation = anim;
                }
            }
            else if (clips.length == 1) {
                var clip = clips[0];
                // clip.wrapMode = cc.WrapMode.Reverse;
                hasHideAnimation = true;
                var animState = anim.play(clip.name);
                animState.wrapMode = cc.WrapMode.Reverse;
                if (clip.duration > maxDuration) {
                    maxDuration = clip.duration;
                    maxDurationAnimation = anim;
                }
            }
        });
        if (maxDurationAnimation && finishCallback) {
            var func_2 = function () {
                // console.log("finish animations")
                maxDurationAnimation.off("finished", func_2);
                finishCallback.call(target);
            };
            maxDurationAnimation.on("finished", func_2);
        }
        return hasHideAnimation;
    };
    UIFunctions.getToggleIndex = function (toggle) {
        var container = toggle.node.getParent();
        for (var i = 0; i < container.childrenCount; i++) {
            var child = container.children[i];
            if (toggle.node == child) {
                return i;
            }
        }
        return -1;
    };
    UIFunctions.selectToggleIndex = function (toggleContainer, index) {
        if (toggleContainer == null) {
            console.warn("[UIFunction.selectToggleIndex] : invalid toggleContainer :");
            return;
        }
        var toggleNode = toggleContainer.children[index];
        if (toggleNode) {
            var toggle = toggleNode.getComponent(cc.Toggle);
            if (toggle) {
                console.log("[UIFunction.selectToggleIndex] :" + index);
                toggle.check();
            }
        }
        else {
            console.warn("[UIFunction.selectToggleIndex] :cannot find toggle with index:" + index);
        }
    };
    // set btn 
    UIFunctions.setTouchEnabled = function (node, b) {
        g.foreachNode(node, function (child) {
            var btn = child.getComponent(cc.Button);
            if (btn) {
                console.log("[UIFunction] " + child.name + " touch : " + b);
                btn.interactable = b;
            }
        });
    };
    UIFunctions.setButtonEnabled = function (btn, b) {
        btn.node.opacity = b ? 255 : 125;
        btn.interactable = b;
    };
    return UIFunctions;
}());
exports.default = UIFunctions;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxwbHVnaW5fYm9vc3RzXFx1aVxcVUlGdW5jdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQUE7SUE2S0EsQ0FBQztJQTFLVSxpQ0FBcUIsR0FBNUIsVUFBNkIsSUFBSTtRQUM3QixJQUFJLFVBQVUsR0FBa0IsRUFBRSxDQUFBO1FBQ2xDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQzFDLElBQUcsSUFBSTtZQUNILFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDekIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxFQUFFLEVBQzFDO1lBQ0ksSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3QixJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQTtZQUMzQyxJQUFHLElBQUk7Z0JBQ0gsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtTQUM1QjtRQUNELE9BQU8sVUFBVSxDQUFBO0lBQ3JCLENBQUM7SUFFTSwwQkFBYyxHQUFyQixVQUFzQixVQUFVO1FBRTVCLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFpQjtZQUNqQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDaEIsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRU0sNEJBQWdCLEdBQXZCLFVBQXdCLFVBQVUsRUFBQyxjQUF3QixFQUFDLE1BQU87UUFFL0QsSUFBSSxXQUFXLEdBQUcsQ0FBQyxDQUFFO1FBQ3JCLElBQUksb0JBQWlDLENBQUM7UUFDdEMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQWlCO1lBQ2pDLElBQUks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QUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0NBQWtDLEdBQUcsS0FBSyxDQUFDLENBQUE7Z0JBQ3ZELE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQTthQUNqQjtTQUNKO2FBQUk7WUFDRCxPQUFPLENBQUMsSUFBSSxDQUFDLGdFQUFnRSxHQUFFLEtBQUssQ0FBQyxDQUFBO1NBQ3hGO0lBQ0wsQ0FBQztJQUVELFdBQVc7SUFDSiwyQkFBZSxHQUF0QixVQUF1QixJQUFJLEVBQUMsQ0FBQztRQUV6QixDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksRUFBQyxVQUFBLEtBQUs7WUFDcEIsSUFBSSxHQUFHLEdBQWEsS0FBSyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUE7WUFDakQsSUFBRyxHQUFHLEVBQ047Z0JBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDLElBQUksR0FBRyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUE7Z0JBQzNELEdBQUcsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO2FBQ3hCO1FBQ0wsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRU0sNEJBQWdCLEdBQXZCLFVBQXdCLEdBQUcsRUFBQyxDQUFDO1FBRXpCLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQSxDQUFDLENBQUEsR0FBRyxDQUFBLENBQUMsQ0FBQSxHQUFHLENBQUM7UUFDN0IsR0FBRyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUE7SUFDeEIsQ0FBQztJQUVMLGtCQUFDO0FBQUQsQ0E3S0EsQUE2S0MsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJRnVuY3Rpb25zXHJcbntcclxuICAgIFxyXG4gICAgc3RhdGljIGdldENoaWxkcmVuQW5pbWF0aW9ucyhub2RlKTogY2MuQW5pbWF0aW9uW10ge1xyXG4gICAgICAgIGxldCBhbmltYXRpb25zOmNjLkFuaW1hdGlvbltdID0gW11cclxuICAgICAgICB2YXIgYW5pbSA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbilcclxuICAgICAgICBpZihhbmltKVxyXG4gICAgICAgICAgICBhbmltYXRpb25zLnB1c2goYW5pbSlcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaTwgbm9kZS5jaGlsZHJlbkNvdW50OyBpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgY2hpbGQgPSBub2RlLmNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICB2YXIgYW5pbSA9IGNoaWxkLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pXHJcbiAgICAgICAgICAgIGlmKGFuaW0pXHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb25zLnB1c2goYW5pbSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFuaW1hdGlvbnNcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc3RvcEFuaW1hdGlvbnMoYW5pbWF0aW9ucylcclxuICAgIHtcclxuICAgICAgICBhbmltYXRpb25zLmZvckVhY2goKGFuaW06Y2MuQW5pbWF0aW9uKT0+e1xyXG4gICAgICAgICAgICBhbmltLnN0b3AoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBkb1Nob3dBbmltYXRpb25zKGFuaW1hdGlvbnMsZmluaXNoQ2FsbGJhY2s/OkZ1bmN0aW9uLHRhcmdldD8pXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IG1heER1cmF0aW9uID0gMCA7XHJcbiAgICAgICAgbGV0IG1heER1cmF0aW9uQW5pbWF0aW9uOmNjLkFuaW1hdGlvbjtcclxuICAgICAgICBhbmltYXRpb25zLmZvckVhY2goKGFuaW06Y2MuQW5pbWF0aW9uKT0+e1xyXG4gICAgICAgICAgICBsZXQgY2xpcHMgPSBhbmltLmdldENsaXBzKClcclxuICAgICAgICAgICAgaWYoY2xpcHMubGVuZ3RoID4gMClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNsaXAgPSBjbGlwc1swXVxyXG4gICAgICAgICAgICAgICAgbGV0IGFuaW1TdGF0ZSA9IGFuaW0ucGxheShjbGlwLm5hbWUpXHJcbiAgICAgICAgICAgICAgICBhbmltU3RhdGUud3JhcE1vZGUgPSBjYy5XcmFwTW9kZS5Ob3JtYWxcclxuICAgICAgICAgICAgICAgIGlmIChjbGlwLmR1cmF0aW9uID4gbWF4RHVyYXRpb24pXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4RHVyYXRpb24gID0gY2xpcC5kdXJhdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICBtYXhEdXJhdGlvbkFuaW1hdGlvbiA9IGFuaW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGlmIChmaW5pc2hDYWxsYmFjaylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBmdW5jID0gZnVuY3Rpb24oKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImZpbmlzaCBhbmltYXRpb25zXCIpXHJcbiAgICAgICAgICAgICAgICBpZihtYXhEdXJhdGlvbkFuaW1hdGlvbilcclxuICAgICAgICAgICAgICAgICAgICBtYXhEdXJhdGlvbkFuaW1hdGlvbi5vZmYoXCJmaW5pc2hlZFwiLGZ1bmMpO1xyXG4gICAgICAgICAgICAgICAgZmluaXNoQ2FsbGJhY2suY2FsbCh0YXJnZXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKG1heER1cmF0aW9uQW5pbWF0aW9uKVxyXG4gICAgICAgICAgICAgICAgbWF4RHVyYXRpb25BbmltYXRpb24ub24oXCJmaW5pc2hlZFwiLGZ1bmMpO1xyXG4gICAgICAgICAgICBlbHNlIFxyXG4gICAgICAgICAgICAgICAgZmluaXNoQ2FsbGJhY2suY2FsbCh0YXJnZXQpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gc3RhdGljIGdldExvbmdlc3RBbmltYXRpb24oYW5pbWF0aW9ucylcclxuICAgIC8vIHtcclxuICAgIC8vICAgICBhbmltYXRpb25zLmZvckVhY2goKGFuaW06Y2MuQW5pbWF0aW9uKT0+e1xyXG4gICAgLy8gICAgICAgICBsZXQgY2xpcHMgPSBhbmltLmdldENsaXBzKClcclxuICAgIC8vICAgICAgICAgZm9yIChjbGlwcylcclxuICAgICAgICAgICAgXHJcbiAgICAvLyAgICAgICAgIC8v5Lul5pyA6ZW/55qE5Li65YeGXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vVE9ETzrov5jmnKrlrp7njrBcclxuICAgIHN0YXRpYyBpc0FuaW1hdGlvblJ1bm5pbmcoYW5pbWF0aW9uczogY2MuQW5pbWF0aW9uW10pOiBhbnkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZG9IaWRlQW5pbWF0aW9ucyhhbmltYXRpb25zLGZpbmlzaENhbGxiYWNrPzpGdW5jdGlvbix0YXJnZXQ/KVxyXG4gICAge1xyXG4gICAgICAgIGxldCBoYXNIaWRlQW5pbWF0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IG1heER1cmF0aW9uID0gMCA7XHJcbiAgICAgICAgbGV0IG1heER1cmF0aW9uQW5pbWF0aW9uOmNjLkFuaW1hdGlvbjtcclxuICAgICAgICBhbmltYXRpb25zLmZvckVhY2goKGFuaW06Y2MuQW5pbWF0aW9uKT0+e1xyXG4gICAgICAgICAgICBsZXQgY2xpcHMgPSBhbmltLmdldENsaXBzKClcclxuICAgICAgICAgICAgaWYoY2xpcHMubGVuZ3RoID09IDIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBjbGlwID0gY2xpcHNbY2xpcHMubGVuZ3RoLTFdXHJcbiAgICAgICAgICAgICAgICAvLyBhbmltLm9uKFwiZmluaXNoZWRcIixvbkhpZGVBbmltYXRpb25GaW5pc2hlZClcclxuICAgICAgICAgICAgICAgIGhhc0hpZGVBbmltYXRpb24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYW5pbS5wbGF5KGNsaXAubmFtZSlcclxuICAgICAgICAgICAgICAgIGlmIChjbGlwLmR1cmF0aW9uID4gbWF4RHVyYXRpb24pXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4RHVyYXRpb24gID0gY2xpcC5kdXJhdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICBtYXhEdXJhdGlvbkFuaW1hdGlvbiA9IGFuaW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKGNsaXBzLmxlbmd0aCA9PSAxKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2xpcCA9IGNsaXBzWzBdO1xyXG4gICAgICAgICAgICAgICAgLy8gY2xpcC53cmFwTW9kZSA9IGNjLldyYXBNb2RlLlJldmVyc2U7XHJcbiAgICAgICAgICAgICAgICBoYXNIaWRlQW5pbWF0aW9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGxldCBhbmltU3RhdGUgPSBhbmltLnBsYXkoY2xpcC5uYW1lKVxyXG4gICAgICAgICAgICAgICAgYW5pbVN0YXRlLndyYXBNb2RlID0gY2MuV3JhcE1vZGUuUmV2ZXJzZVxyXG4gICAgICAgICAgICAgICAgaWYgKGNsaXAuZHVyYXRpb24gPiBtYXhEdXJhdGlvbilcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXhEdXJhdGlvbiAgPSBjbGlwLmR1cmF0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heER1cmF0aW9uQW5pbWF0aW9uID0gYW5pbTtcclxuICAgICAgICAgICAgICAgIH0gICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWYgKG1heER1cmF0aW9uQW5pbWF0aW9uICYmIGZpbmlzaENhbGxiYWNrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGZ1bmMgPSBmdW5jdGlvbigpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZmluaXNoIGFuaW1hdGlvbnNcIilcclxuICAgICAgICAgICAgICAgIG1heER1cmF0aW9uQW5pbWF0aW9uLm9mZihcImZpbmlzaGVkXCIsZnVuYyk7XHJcbiAgICAgICAgICAgICAgICBmaW5pc2hDYWxsYmFjay5jYWxsKHRhcmdldCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbWF4RHVyYXRpb25BbmltYXRpb24ub24oXCJmaW5pc2hlZFwiLGZ1bmMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaGFzSGlkZUFuaW1hdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0VG9nZ2xlSW5kZXgodG9nZ2xlOmNjLlRvZ2dsZSlcclxuICAgIHtcclxuICAgICAgICBsZXQgY29udGFpbmVyID0gdG9nZ2xlLm5vZGUuZ2V0UGFyZW50KCk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAgO2kgPCBjb250YWluZXIuY2hpbGRyZW5Db3VudDtpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgY2hpbGQgPSBjb250YWluZXIuY2hpbGRyZW5baV1cclxuICAgICAgICAgICAgaWYodG9nZ2xlLm5vZGUgPT0gY2hpbGQgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gLTE7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNlbGVjdFRvZ2dsZUluZGV4KHRvZ2dsZUNvbnRhaW5lcjpjYy5Ob2RlLGluZGV4KVxyXG4gICAge1xyXG4gICAgICAgIGlmKHRvZ2dsZUNvbnRhaW5lciA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIltVSUZ1bmN0aW9uLnNlbGVjdFRvZ2dsZUluZGV4XSA6IGludmFsaWQgdG9nZ2xlQ29udGFpbmVyIDpcIiApXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHRvZ2dsZU5vZGUgPSB0b2dnbGVDb250YWluZXIuY2hpbGRyZW5baW5kZXhdXHJcbiAgICAgICAgaWYodG9nZ2xlTm9kZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCB0b2dnbGUgPSB0b2dnbGVOb2RlLmdldENvbXBvbmVudChjYy5Ub2dnbGUpXHJcbiAgICAgICAgICAgIGlmKHRvZ2dsZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJbVUlGdW5jdGlvbi5zZWxlY3RUb2dnbGVJbmRleF0gOlwiICsgaW5kZXgpXHJcbiAgICAgICAgICAgICAgICB0b2dnbGUuY2hlY2soKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIltVSUZ1bmN0aW9uLnNlbGVjdFRvZ2dsZUluZGV4XSA6Y2Fubm90IGZpbmQgdG9nZ2xlIHdpdGggaW5kZXg6XCIrIGluZGV4KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBzZXQgYnRuIFxyXG4gICAgc3RhdGljIHNldFRvdWNoRW5hYmxlZChub2RlLGIpXHJcbiAgICB7XHJcbiAgICAgICAgZy5mb3JlYWNoTm9kZShub2RlLGNoaWxkPT57XHJcbiAgICAgICAgICAgIGxldCBidG46Y2MuQnV0dG9uID0gY2hpbGQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbilcclxuICAgICAgICAgICAgaWYoYnRuKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIltVSUZ1bmN0aW9uXSBcIiArIGNoaWxkLm5hbWUgKyBcIiB0b3VjaCA6IFwiICsgYilcclxuICAgICAgICAgICAgICAgIGJ0bi5pbnRlcmFjdGFibGUgPSBiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2V0QnV0dG9uRW5hYmxlZChidG4sYilcclxuICAgIHtcclxuICAgICAgICBidG4ubm9kZS5vcGFjaXR5ID0gYj8yNTU6MTI1O1xyXG4gICAgICAgIGJ0bi5pbnRlcmFjdGFibGUgPSBiXHJcbiAgICB9XHJcblxyXG59Il19