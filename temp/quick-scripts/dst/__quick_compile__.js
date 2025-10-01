
(function () {
var scripts = [{"deps":{"./assets/framework/network/Message":18,"./assets/framework/network/MessageBase":17,"./assets/framework/network/MessageDispatch":7,"./assets/framework/network/MessageHandler":15,"./assets/framework/network/MessageType":16,"./assets/framework/network/Socket":20,"./assets/framework/network/ConnectManager":19,"./assets/framework/qqsdk/SoundHelper":21,"./assets/framework/qqsdk/BKTool":9,"./assets/framework/wxsdk/GameConfigs":23,"./assets/framework/wxsdk/MoreGameComponent":8,"./assets/framework/wxsdk/MoreGameDialog":25,"./assets/framework/wxsdk/MoreGameItem":24,"./assets/framework/wxsdk/MoreGameManager":22,"./assets/framework/wxsdk/MoreGameStyle":26,"./assets/framework/wxsdk/WxRankDialog":28,"./assets/framework/wxsdk/sdk":30,"./assets/framework/wxsdk/AddToMyFav":29,"./assets/migration/use_v2.0.x_cc.Toggle_event":1,"./assets/Game/Scripts/Main":32,"./assets/Game/Scripts/Info":27,"./assets/Game/Scripts/hex-lines-game/Consts":31,"./assets/Game/Scripts/hex-lines-game/Game":36,"./assets/Game/Scripts/hex-lines-game/GridManager":37,"./assets/Game/Scripts/hex-lines-game/HexonTile":33,"./assets/Game/Scripts/hex-lines-game/Res":35,"./assets/Game/Scripts/hex-lines-game/Animal":34,"./assets/Game/Scripts/hex-lines-game/base/com":3,"./assets/Game/Scripts/hex-lines-game/ds/IntMap":11,"./assets/Game/Scripts/ui/DCParticleSystem":10,"./assets/Game/Scripts/ui/DailyGetDialog":38,"./assets/Game/Scripts/ui/GetDialog":39,"./assets/Game/Scripts/ui/HbDialog":42,"./assets/Game/Scripts/ui/LevelDialog":40,"./assets/Game/Scripts/ui/LevelupDialog":46,"./assets/Game/Scripts/ui/LoseDialog":45,"./assets/Game/Scripts/ui/LuckyDialog":43,"./assets/Game/Scripts/ui/PauseDialog":41,"./assets/Game/Scripts/ui/RankItem":47,"./assets/Game/Scripts/ui/RankingList":44,"./assets/Game/Scripts/ui/ShopDialog":50,"./assets/Game/Scripts/ui/ShopItemTemplate":48,"./assets/Game/Scripts/ui/WinDialog":54,"./assets/Game/Scripts/ui/DCBackground":51,"./assets/Game/Scripts/LanguageManager":2,"./assets/framework/Platform":4,"./assets/framework/plugin_boosts/gamesys/InfiniteBackground":6,"./assets/framework/plugin_boosts/gamesys/LocalLifeSystem":49,"./assets/framework/plugin_boosts/gamesys/LocalTimeSystem":60,"./assets/framework/plugin_boosts/gamesys/PoolManager":53,"./assets/framework/plugin_boosts/gamesys/PsFx":52,"./assets/framework/plugin_boosts/gamesys/PsFxPlayer":55,"./assets/framework/plugin_boosts/gamesys/PsSpawner":58,"./assets/framework/plugin_boosts/gamesys/Device":56,"./assets/framework/plugin_boosts/libs/easing":12,"./assets/framework/plugin_boosts/misc/ClickAudio":13,"./assets/framework/plugin_boosts/misc/ClickAudioManager":61,"./assets/framework/plugin_boosts/misc/DataCenter":57,"./assets/framework/plugin_boosts/misc/FrameSwitch":59,"./assets/framework/plugin_boosts/misc/InputSystem":64,"./assets/framework/plugin_boosts/misc/JoyStick":62,"./assets/framework/plugin_boosts/misc/Net":63,"./assets/framework/plugin_boosts/misc/Signal":66,"./assets/framework/plugin_boosts/misc/SpriteFrameCache":68,"./assets/framework/plugin_boosts/misc/BoostsAction":65,"./assets/framework/plugin_boosts/ui/DCPandoraPoint":83,"./assets/framework/plugin_boosts/ui/DCSprite":69,"./assets/framework/plugin_boosts/ui/DCToggle":72,"./assets/framework/plugin_boosts/ui/DCUI":71,"./assets/framework/plugin_boosts/ui/LoadingManager":70,"./assets/framework/plugin_boosts/ui/MessageBoxComponent":79,"./assets/framework/plugin_boosts/ui/MessageBoxManager":67,"./assets/framework/plugin_boosts/ui/PandoraPoint":73,"./assets/framework/plugin_boosts/ui/ToastComponent":77,"./assets/framework/plugin_boosts/ui/ToastManager":80,"./assets/framework/plugin_boosts/ui/UIComponent":75,"./assets/framework/plugin_boosts/ui/UIFunctions":74,"./assets/framework/plugin_boosts/ui/View":81,"./assets/framework/plugin_boosts/ui/ViewManager":82,"./assets/framework/plugin_boosts/ui/DCLabel":76,"./assets/framework/plugin_boosts/ui/game/LevelSelector":5,"./assets/framework/plugin_boosts/utils/EventManager":14,"./assets/framework/plugin_boosts/utils/Intersection":84,"./assets/framework/plugin_boosts/utils/Common":85,"./assets/framework/plugin_boosts/gamesys/FSM":78},"path":"preview-scripts/__qc_index__.js"},{"deps":{},"path":"preview-scripts/assets/migration/use_v2.0.x_cc.Toggle_event.js"},{"deps":{},"path":"preview-scripts/assets/Game/Scripts/LanguageManager.js"},{"deps":{},"path":"preview-scripts/assets/Game/Scripts/hex-lines-game/base/com.js"},{"deps":{"./wxsdk/sdk":30,"./plugin_boosts/ui/ToastManager":80,"./qqsdk/BKTool":9,"./plugin_boosts/misc/SpriteFrameCache":68,"./plugin_boosts/misc/Signal":66,"./plugin_boosts/utils/EventManager":14},"path":"preview-scripts/assets/framework/Platform.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/ui/game/LevelSelector.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/gamesys/InfiniteBackground.js"},{"deps":{},"path":"preview-scripts/assets/framework/network/MessageDispatch.js"},{"deps":{"./MoreGameManager":22},"path":"preview-scripts/assets/framework/wxsdk/MoreGameComponent.js"},{"deps":{},"path":"preview-scripts/assets/framework/qqsdk/BKTool.js"},{"deps":{"../../../framework/plugin_boosts/ui/DCUI":71,"../Info":27},"path":"preview-scripts/assets/Game/Scripts/ui/DCParticleSystem.js"},{"deps":{},"path":"preview-scripts/assets/Game/Scripts/hex-lines-game/ds/IntMap.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/libs/easing.js"},{"deps":{"../gamesys/Device":56},"path":"preview-scripts/assets/framework/plugin_boosts/misc/ClickAudio.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/utils/EventManager.js"},{"deps":{"./Message":18,"./MessageType":16,"./MessageDispatch":7},"path":"preview-scripts/assets/framework/network/MessageHandler.js"},{"deps":{},"path":"preview-scripts/assets/framework/network/MessageType.js"},{"deps":{"./MessageType":16,"./Message":18,"./ConnectManager":19},"path":"preview-scripts/assets/framework/network/MessageBase.js"},{"deps":{},"path":"preview-scripts/assets/framework/network/Message.js"},{"deps":{"./Socket":20},"path":"preview-scripts/assets/framework/network/ConnectManager.js"},{"deps":{"./MessageHandler":15,"./MessageType":16},"path":"preview-scripts/assets/framework/network/Socket.js"},{"deps":{},"path":"preview-scripts/assets/framework/qqsdk/SoundHelper.js"},{"deps":{"./MoreGameComponent":8,"./GameConfigs":23},"path":"preview-scripts/assets/framework/wxsdk/MoreGameManager.js"},{"deps":{},"path":"preview-scripts/assets/framework/wxsdk/GameConfigs.js"},{"deps":{},"path":"preview-scripts/assets/framework/wxsdk/MoreGameItem.js"},{"deps":{"./MoreGameManager":22,"./MoreGameItem":24},"path":"preview-scripts/assets/framework/wxsdk/MoreGameDialog.js"},{"deps":{"./MoreGameComponent":8},"path":"preview-scripts/assets/framework/wxsdk/MoreGameStyle.js"},{"deps":{"./hex-lines-game/Res":35,"../../framework/Platform":4,"../../framework/wxsdk/MoreGameManager":22,"../../framework/plugin_boosts/ui/ToastManager":80,"../../framework/plugin_boosts/gamesys/Device":56,"../../framework/plugin_boosts/misc/DataCenter":57},"path":"preview-scripts/assets/Game/Scripts/Info.js"},{"deps":{"../Platform":4,"../plugin_boosts/ui/View":81,"../plugin_boosts/ui/ViewManager":82,"../plugin_boosts/misc/Signal":66,"../../Game/Scripts/LanguageManager":2},"path":"preview-scripts/assets/framework/wxsdk/WxRankDialog.js"},{"deps":{"../Platform":4},"path":"preview-scripts/assets/framework/wxsdk/AddToMyFav.js"},{"deps":{"../plugin_boosts/utils/EventManager":14,"./GameConfigs":23},"path":"preview-scripts/assets/framework/wxsdk/sdk.js"},{"deps":{},"path":"preview-scripts/assets/Game/Scripts/hex-lines-game/Consts.js"},{"deps":{"./Info":27,"./LanguageManager":2,"../../framework/Platform":4,"./hex-lines-game/Res":35,"../../framework/plugin_boosts/ui/ViewManager":82,"../../framework/plugin_boosts/gamesys/Device":56,"../../framework/plugin_boosts/ui/ToastManager":80},"path":"preview-scripts/assets/Game/Scripts/Main.js"},{"deps":{"./Consts":31,"./Game":36,"./Res":35},"path":"preview-scripts/assets/Game/Scripts/hex-lines-game/HexonTile.js"},{"deps":{},"path":"preview-scripts/assets/Game/Scripts/hex-lines-game/Animal.js"},{"deps":{},"path":"preview-scripts/assets/Game/Scripts/hex-lines-game/Res.js"},{"deps":{"./Res":35,"./HexonTile":33,"./GridManager":37,"../../../framework/plugin_boosts/misc/InputSystem":64,"../Info":27,"./Animal":34,"../../../framework/plugin_boosts/ui/ViewManager":82,"../../../framework/Platform":4,"../../../framework/plugin_boosts/ui/ToastManager":80,"../LanguageManager":2},"path":"preview-scripts/assets/Game/Scripts/hex-lines-game/Game.js"},{"deps":{"./ds/IntMap":11,"./Game":36,"./Res":35},"path":"preview-scripts/assets/Game/Scripts/hex-lines-game/GridManager.js"},{"deps":{"../Info":27,"../../../framework/plugin_boosts/ui/View":81,"../../../framework/Platform":4,"../LanguageManager":2},"path":"preview-scripts/assets/Game/Scripts/ui/DailyGetDialog.js"},{"deps":{"../../../framework/plugin_boosts/ui/View":81,"../Info":27,"../../../framework/plugin_boosts/ui/ViewManager":82,"../../../framework/Platform":4,"../LanguageManager":2},"path":"preview-scripts/assets/Game/Scripts/ui/GetDialog.js"},{"deps":{"../Info":27,"../../../framework/plugin_boosts/ui/game/LevelSelector":5,"../LanguageManager":2},"path":"preview-scripts/assets/Game/Scripts/ui/LevelDialog.js"},{"deps":{"../../../framework/Platform":4},"path":"preview-scripts/assets/Game/Scripts/ui/PauseDialog.js"},{"deps":{"../../../framework/Platform":4,"../../../framework/plugin_boosts/ui/ViewManager":82,"../../../framework/plugin_boosts/ui/ToastManager":80,"../hex-lines-game/Res":35,"../Info":27,"../../../framework/plugin_boosts/gamesys/Device":56,"../../../framework/plugin_boosts/ui/View":81},"path":"preview-scripts/assets/Game/Scripts/ui/HbDialog.js"},{"deps":{"../../../framework/plugin_boosts/ui/ToastManager":80,"../../../framework/plugin_boosts/ui/ViewManager":82,"../../../framework/plugin_boosts/ui/View":81,"../Info":27,"../../../framework/Platform":4,"../../../framework/plugin_boosts/gamesys/Device":56,"../hex-lines-game/Res":35,"../../../framework/plugin_boosts/ui/UIFunctions":74,"../Main":32,"../LanguageManager":2},"path":"preview-scripts/assets/Game/Scripts/ui/LuckyDialog.js"},{"deps":{"../Info":27,"./RankItem":47},"path":"preview-scripts/assets/Game/Scripts/ui/RankingList.js"},{"deps":{"../../../framework/plugin_boosts/ui/ViewManager":82,"../LanguageManager":2},"path":"preview-scripts/assets/Game/Scripts/ui/LoseDialog.js"},{"deps":{"../Info":27,"../../../framework/plugin_boosts/ui/View":81,"../../../framework/Platform":4},"path":"preview-scripts/assets/Game/Scripts/ui/LevelupDialog.js"},{"deps":{},"path":"preview-scripts/assets/Game/Scripts/ui/RankItem.js"},{"deps":{"../../../framework/plugin_boosts/misc/Signal":66},"path":"preview-scripts/assets/Game/Scripts/ui/ShopItemTemplate.js"},{"deps":{"../utils/EventManager":14,"../misc/Signal":66},"path":"preview-scripts/assets/framework/plugin_boosts/gamesys/LocalLifeSystem.js"},{"deps":{"./ShopItemTemplate":48,"../../../framework/plugin_boosts/misc/SpriteFrameCache":68,"../hex-lines-game/Res":35,"../../../framework/Platform":4,"../Info":27,"../../../framework/plugin_boosts/ui/ToastManager":80,"../../../framework/plugin_boosts/ui/UIFunctions":74,"../../../framework/plugin_boosts/gamesys/Device":56,"../Main":32},"path":"preview-scripts/assets/Game/Scripts/ui/ShopDialog.js"},{"deps":{"../../../framework/plugin_boosts/ui/DCUI":71,"../../../framework/plugin_boosts/misc/SpriteFrameCache":68,"../Info":27},"path":"preview-scripts/assets/Game/Scripts/ui/DCBackground.js"},{"deps":{"./Device":56},"path":"preview-scripts/assets/framework/plugin_boosts/gamesys/PsFx.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/gamesys/PoolManager.js"},{"deps":{"../Info":27,"../../../framework/Platform":4,"../../../framework/plugin_boosts/ui/ViewManager":82,"../hex-lines-game/Consts":31,"../LanguageManager":2},"path":"preview-scripts/assets/Game/Scripts/ui/WinDialog.js"},{"deps":{"./PsFx":52,"./Device":56},"path":"preview-scripts/assets/framework/plugin_boosts/gamesys/PsFxPlayer.js"},{"deps":{"../../qqsdk/SoundHelper":21},"path":"preview-scripts/assets/framework/plugin_boosts/gamesys/Device.js"},{"deps":{"../utils/EventManager":14},"path":"preview-scripts/assets/framework/plugin_boosts/misc/DataCenter.js"},{"deps":{"./PsFx":52,"./PoolManager":53},"path":"preview-scripts/assets/framework/plugin_boosts/gamesys/PsSpawner.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/misc/FrameSwitch.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/gamesys/LocalTimeSystem.js"},{"deps":{"./ClickAudio":13},"path":"preview-scripts/assets/framework/plugin_boosts/misc/ClickAudioManager.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/misc/JoyStick.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/misc/Net.js"},{"deps":{"./JoyStick":62},"path":"preview-scripts/assets/framework/plugin_boosts/misc/InputSystem.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/misc/BoostsAction.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/misc/Signal.js"},{"deps":{"./ViewManager":82},"path":"preview-scripts/assets/framework/plugin_boosts/ui/MessageBoxManager.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/misc/SpriteFrameCache.js"},{"deps":{"./DCUI":71,"../misc/SpriteFrameCache":68},"path":"preview-scripts/assets/framework/plugin_boosts/ui/DCSprite.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/ui/LoadingManager.js"},{"deps":{"../misc/DataCenter":57},"path":"preview-scripts/assets/framework/plugin_boosts/ui/DCUI.js"},{"deps":{"./DCUI":71},"path":"preview-scripts/assets/framework/plugin_boosts/ui/DCToggle.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/ui/PandoraPoint.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/ui/UIFunctions.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/ui/UIComponent.js"},{"deps":{"./DCUI":71},"path":"preview-scripts/assets/framework/plugin_boosts/ui/DCLabel.js"},{"deps":{"./UIFunctions":74},"path":"preview-scripts/assets/framework/plugin_boosts/ui/ToastComponent.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/gamesys/FSM.js"},{"deps":{"./View":81,"./MessageBoxManager":67},"path":"preview-scripts/assets/framework/plugin_boosts/ui/MessageBoxComponent.js"},{"deps":{"./ToastComponent":77},"path":"preview-scripts/assets/framework/plugin_boosts/ui/ToastManager.js"},{"deps":{"./UIComponent":75,"./ViewManager":82,"./UIFunctions":74,"../../../Game/Scripts/LanguageManager":2},"path":"preview-scripts/assets/framework/plugin_boosts/ui/View.js"},{"deps":{"./View":81},"path":"preview-scripts/assets/framework/plugin_boosts/ui/ViewManager.js"},{"deps":{"./DCUI":71,"./PandoraPoint":73},"path":"preview-scripts/assets/framework/plugin_boosts/ui/DCPandoraPoint.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/utils/Intersection.js"},{"deps":{"../misc/SpriteFrameCache":68},"path":"preview-scripts/assets/framework/plugin_boosts/utils/Common.js"}];
var entries = ["preview-scripts/__qc_index__.js"];
var bundleScript = 'preview-scripts/__qc_bundle__.js';

/**
 * Notice: This file can not use ES6 (for IE 11)
 */
var modules = {};
var name2path = {};

// Will generated by module.js plugin
// var scripts = ${scripts};
// var entries = ${entries};
// var bundleScript = ${bundleScript};

if (typeof global === 'undefined') {
    window.global = window;
}

var isJSB = typeof jsb !== 'undefined';

function getXMLHttpRequest () {
    return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject('MSXML2.XMLHTTP');
}

function downloadText(url, callback) {
    if (isJSB) {
        var result = jsb.fileUtils.getStringFromFile(url);
        callback(null, result);
        return;
    }

    var xhr = getXMLHttpRequest(),
        errInfo = 'Load text file failed: ' + url;
    xhr.open('GET', url, true);
    if (xhr.overrideMimeType) xhr.overrideMimeType('text\/plain; charset=utf-8');
    xhr.onload = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
                callback(null, xhr.responseText);
            }
            else {
                callback({status:xhr.status, errorMessage:errInfo + ', status: ' + xhr.status});
            }
        }
        else {
            callback({status:xhr.status, errorMessage:errInfo + '(wrong readyState)'});
        }
    };
    xhr.onerror = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(error)'});
    };
    xhr.ontimeout = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(time out)'});
    };
    xhr.send(null);
};

function loadScript (src, cb) {
    if (typeof require !== 'undefined') {
        require(src);
        return cb();
    }

    // var timer = 'load ' + src;
    // console.time(timer);

    var scriptElement = document.createElement('script');

    function done() {
        // console.timeEnd(timer);
        // deallocation immediate whatever
        scriptElement.remove();
    }

    scriptElement.onload = function () {
        done();
        cb();
    };
    scriptElement.onerror = function () {
        done();
        var error = 'Failed to load ' + src;
        console.error(error);
        cb(new Error(error));
    };
    scriptElement.setAttribute('type','text/javascript');
    scriptElement.setAttribute('charset', 'utf-8');
    scriptElement.setAttribute('src', src);

    document.head.appendChild(scriptElement);
}

function loadScripts (srcs, cb) {
    var n = srcs.length;

    srcs.forEach(function (src) {
        loadScript(src, function () {
            n--;
            if (n === 0) {
                cb();
            }
        });
    })
}

function formatPath (path) {
    let destPath = window.__quick_compile_project__.destPath;
    if (destPath) {
        let prefix = 'preview-scripts';
        if (destPath[destPath.length - 1] === '/') {
            prefix += '/';
        }
        path = path.replace(prefix, destPath);
    }
    return path;
}

window.__quick_compile_project__ = {
    destPath: '',

    registerModule: function (path, module) {
        path = formatPath(path);
        modules[path].module = module;
    },

    registerModuleFunc: function (path, func) {
        path = formatPath(path);
        modules[path].func = func;

        var sections = path.split('/');
        var name = sections[sections.length - 1];
        name = name.replace(/\.(?:js|ts|json)$/i, '');
        name2path[name] = path;
    },

    require: function (request, path) {
        var m, requestScript;

        path = formatPath(path);
        if (path) {
            m = modules[path];
            if (!m) {
                console.warn('Can not find module for path : ' + path);
                return null;
            }
        }

        if (m) {
            let depIndex = m.deps[request];
            // dependence script was excluded
            if (depIndex === -1) {
                return null;
            }
            else {
                requestScript = scripts[ m.deps[request] ];
            }
        }
        
        let requestPath = '';
        if (!requestScript) {
            // search from name2path when request is a dynamic module name
            if (/^[\w- .]*$/.test(request)) {
                requestPath = name2path[request];
            }

            if (!requestPath) {
                if (CC_JSB) {
                    return require(request);
                }
                else {
                    console.warn('Can not find deps [' + request + '] for path : ' + path);
                    return null;
                }
            }
        }
        else {
            requestPath = formatPath(requestScript.path);
        }

        let requestModule = modules[requestPath];
        if (!requestModule) {
            console.warn('Can not find request module for path : ' + requestPath);
            return null;
        }

        if (!requestModule.module && requestModule.func) {
            requestModule.func();
        }

        if (!requestModule.module) {
            console.warn('Can not find requestModule.module for path : ' + path);
            return null;
        }

        return requestModule.module.exports;
    },

    run: function () {
        entries.forEach(function (entry) {
            entry = formatPath(entry);
            var module = modules[entry];
            if (!module.module) {
                module.func();
            }
        });
    },

    load: function (cb) {
        var self = this;

        var srcs = scripts.map(function (script) {
            var path = formatPath(script.path);
            modules[path] = script;

            if (script.mtime) {
                path += ("?mtime=" + script.mtime);
            }
            return path;
        });

        console.time && console.time('load __quick_compile_project__');
        // jsb can not analysis sourcemap, so keep separate files.
        if (bundleScript && !isJSB) {
            downloadText(formatPath(bundleScript), function (err, bundleSource) {
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                if (err) {
                    console.error(err);
                    return;
                }

                let evalTime = 'eval __quick_compile_project__ : ' + srcs.length + ' files';
                console.time && console.time(evalTime);
                var sources = bundleSource.split('\n//------QC-SOURCE-SPLIT------\n');
                for (var i = 0; i < sources.length; i++) {
                    if (sources[i]) {
                        window.eval(sources[i]);
                        // not sure why new Function cannot set breakpoints precisely
                        // new Function(sources[i])()
                    }
                }
                self.run();
                console.timeEnd && console.timeEnd(evalTime);
                cb();
            })
        }
        else {
            loadScripts(srcs, function () {
                self.run();
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                cb();
            });
        }
    }
};

// Polyfill for IE 11
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
})();
    