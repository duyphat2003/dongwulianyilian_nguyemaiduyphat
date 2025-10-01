
(function () {
var scripts = [{"deps":{"./assets/framework/network/Message":8,"./assets/framework/network/MessageBase":16,"./assets/framework/network/MessageDispatch":19,"./assets/framework/network/MessageHandler":23,"./assets/framework/network/MessageType":22,"./assets/framework/network/Socket":15,"./assets/framework/network/ConnectManager":17,"./assets/framework/qqsdk/SoundHelper":9,"./assets/framework/qqsdk/BKTool":28,"./assets/framework/wxsdk/GameConfigs":26,"./assets/framework/wxsdk/MoreGameComponent":21,"./assets/framework/wxsdk/MoreGameDialog":10,"./assets/framework/wxsdk/MoreGameItem":18,"./assets/framework/wxsdk/MoreGameManager":20,"./assets/framework/wxsdk/MoreGameStyle":25,"./assets/framework/wxsdk/WxRankDialog":27,"./assets/framework/wxsdk/sdk":29,"./assets/framework/wxsdk/AddToMyFav":30,"./assets/migration/use_v2.0.x_cc.Toggle_event":1,"./assets/Game/Scripts/Main":32,"./assets/Game/Scripts/Info":24,"./assets/Game/Scripts/hex-lines-game/Consts":35,"./assets/Game/Scripts/hex-lines-game/Game":34,"./assets/Game/Scripts/hex-lines-game/GridManager":31,"./assets/Game/Scripts/hex-lines-game/HexonTile":40,"./assets/Game/Scripts/hex-lines-game/Res":36,"./assets/Game/Scripts/hex-lines-game/Animal":42,"./assets/Game/Scripts/hex-lines-game/base/com":6,"./assets/Game/Scripts/hex-lines-game/ds/IntMap":11,"./assets/Game/Scripts/ui/DCParticleSystem":43,"./assets/Game/Scripts/ui/DailyGetDialog":33,"./assets/Game/Scripts/ui/GetDialog":37,"./assets/Game/Scripts/ui/HbDialog":38,"./assets/Game/Scripts/ui/LevelDialog":45,"./assets/Game/Scripts/ui/LevelupDialog":39,"./assets/Game/Scripts/ui/LoseDialog":41,"./assets/Game/Scripts/ui/LuckyDialog":53,"./assets/Game/Scripts/ui/PauseDialog":47,"./assets/Game/Scripts/ui/RankItem":49,"./assets/Game/Scripts/ui/RankingList":48,"./assets/Game/Scripts/ui/ShopDialog":51,"./assets/Game/Scripts/ui/ShopItemTemplate":46,"./assets/Game/Scripts/ui/WinDialog":50,"./assets/Game/Scripts/ui/DCBackground":2,"./assets/Game/Scripts/LanguageManager":3,"./assets/framework/Platform":4,"./assets/framework/plugin_boosts/gamesys/InfiniteBackground":7,"./assets/framework/plugin_boosts/gamesys/LocalLifeSystem":58,"./assets/framework/plugin_boosts/gamesys/LocalTimeSystem":52,"./assets/framework/plugin_boosts/gamesys/PoolManager":44,"./assets/framework/plugin_boosts/gamesys/PsFx":59,"./assets/framework/plugin_boosts/gamesys/PsFxPlayer":55,"./assets/framework/plugin_boosts/gamesys/PsSpawner":54,"./assets/framework/plugin_boosts/gamesys/Device":61,"./assets/framework/plugin_boosts/libs/easing":13,"./assets/framework/plugin_boosts/misc/ClickAudio":12,"./assets/framework/plugin_boosts/misc/ClickAudioManager":62,"./assets/framework/plugin_boosts/misc/DataCenter":56,"./assets/framework/plugin_boosts/misc/FrameSwitch":65,"./assets/framework/plugin_boosts/misc/InputSystem":68,"./assets/framework/plugin_boosts/misc/JoyStick":60,"./assets/framework/plugin_boosts/misc/Net":63,"./assets/framework/plugin_boosts/misc/Signal":70,"./assets/framework/plugin_boosts/misc/SpriteFrameCache":64,"./assets/framework/plugin_boosts/misc/BoostsAction":67,"./assets/framework/plugin_boosts/ui/DCPandoraPoint":57,"./assets/framework/plugin_boosts/ui/DCSprite":73,"./assets/framework/plugin_boosts/ui/DCToggle":75,"./assets/framework/plugin_boosts/ui/DCUI":71,"./assets/framework/plugin_boosts/ui/LoadingManager":72,"./assets/framework/plugin_boosts/ui/MessageBoxComponent":66,"./assets/framework/plugin_boosts/ui/MessageBoxManager":69,"./assets/framework/plugin_boosts/ui/PandoraPoint":78,"./assets/framework/plugin_boosts/ui/ToastComponent":80,"./assets/framework/plugin_boosts/ui/ToastManager":76,"./assets/framework/plugin_boosts/ui/UIComponent":74,"./assets/framework/plugin_boosts/ui/UIFunctions":83,"./assets/framework/plugin_boosts/ui/View":79,"./assets/framework/plugin_boosts/ui/ViewManager":81,"./assets/framework/plugin_boosts/ui/DCLabel":82,"./assets/framework/plugin_boosts/ui/game/LevelSelector":5,"./assets/framework/plugin_boosts/utils/EventManager":14,"./assets/framework/plugin_boosts/utils/Intersection":85,"./assets/framework/plugin_boosts/utils/Common":84,"./assets/framework/plugin_boosts/gamesys/FSM":77},"path":"preview-scripts/__qc_index__.js"},{"deps":{},"path":"preview-scripts/assets/migration/use_v2.0.x_cc.Toggle_event.js"},{"deps":{"../../../framework/plugin_boosts/ui/DCUI":71,"../../../framework/plugin_boosts/misc/SpriteFrameCache":64,"../Info":24},"path":"preview-scripts/assets/Game/Scripts/ui/DCBackground.js"},{"deps":{},"path":"preview-scripts/assets/Game/Scripts/LanguageManager.js"},{"deps":{"./wxsdk/sdk":29,"./plugin_boosts/ui/ToastManager":76,"./qqsdk/BKTool":28,"./plugin_boosts/misc/SpriteFrameCache":64,"./plugin_boosts/misc/Signal":70,"./plugin_boosts/utils/EventManager":14},"path":"preview-scripts/assets/framework/Platform.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/ui/game/LevelSelector.js"},{"deps":{},"path":"preview-scripts/assets/Game/Scripts/hex-lines-game/base/com.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/gamesys/InfiniteBackground.js"},{"deps":{},"path":"preview-scripts/assets/framework/network/Message.js"},{"deps":{},"path":"preview-scripts/assets/framework/qqsdk/SoundHelper.js"},{"deps":{"./MoreGameManager":20,"./MoreGameItem":18},"path":"preview-scripts/assets/framework/wxsdk/MoreGameDialog.js"},{"deps":{},"path":"preview-scripts/assets/Game/Scripts/hex-lines-game/ds/IntMap.js"},{"deps":{"../gamesys/Device":61},"path":"preview-scripts/assets/framework/plugin_boosts/misc/ClickAudio.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/libs/easing.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/utils/EventManager.js"},{"deps":{"./MessageHandler":23,"./MessageType":22},"path":"preview-scripts/assets/framework/network/Socket.js"},{"deps":{"./MessageType":22,"./Message":8,"./ConnectManager":17},"path":"preview-scripts/assets/framework/network/MessageBase.js"},{"deps":{"./Socket":15},"path":"preview-scripts/assets/framework/network/ConnectManager.js"},{"deps":{},"path":"preview-scripts/assets/framework/wxsdk/MoreGameItem.js"},{"deps":{},"path":"preview-scripts/assets/framework/network/MessageDispatch.js"},{"deps":{"./MoreGameComponent":21,"./GameConfigs":26},"path":"preview-scripts/assets/framework/wxsdk/MoreGameManager.js"},{"deps":{"./MoreGameManager":20},"path":"preview-scripts/assets/framework/wxsdk/MoreGameComponent.js"},{"deps":{},"path":"preview-scripts/assets/framework/network/MessageType.js"},{"deps":{"./Message":8,"./MessageType":22,"./MessageDispatch":19},"path":"preview-scripts/assets/framework/network/MessageHandler.js"},{"deps":{"../../framework/plugin_boosts/misc/DataCenter":56,"./hex-lines-game/Res":36,"../../framework/plugin_boosts/ui/ToastManager":76,"../../framework/plugin_boosts/gamesys/Device":61,"../../framework/Platform":4,"../../framework/wxsdk/MoreGameManager":20},"path":"preview-scripts/assets/Game/Scripts/Info.js"},{"deps":{"./MoreGameComponent":21},"path":"preview-scripts/assets/framework/wxsdk/MoreGameStyle.js"},{"deps":{},"path":"preview-scripts/assets/framework/wxsdk/GameConfigs.js"},{"deps":{"../Platform":4,"../plugin_boosts/ui/View":79,"../plugin_boosts/ui/ViewManager":81,"../plugin_boosts/misc/Signal":70,"../../Game/Scripts/LanguageManager":3},"path":"preview-scripts/assets/framework/wxsdk/WxRankDialog.js"},{"deps":{},"path":"preview-scripts/assets/framework/qqsdk/BKTool.js"},{"deps":{"../plugin_boosts/utils/EventManager":14,"./GameConfigs":26},"path":"preview-scripts/assets/framework/wxsdk/sdk.js"},{"deps":{"../Platform":4},"path":"preview-scripts/assets/framework/wxsdk/AddToMyFav.js"},{"deps":{"./ds/IntMap":11,"./Game":34,"./Res":36},"path":"preview-scripts/assets/Game/Scripts/hex-lines-game/GridManager.js"},{"deps":{"../../framework/plugin_boosts/ui/ViewManager":81,"./Info":24,"../../framework/Platform":4,"../../framework/plugin_boosts/gamesys/Device":61,"./hex-lines-game/Res":36,"../../framework/plugin_boosts/ui/ToastManager":76,"./LanguageManager":3},"path":"preview-scripts/assets/Game/Scripts/Main.js"},{"deps":{"../Info":24,"../../../framework/plugin_boosts/ui/View":79,"../../../framework/Platform":4,"../LanguageManager":3},"path":"preview-scripts/assets/Game/Scripts/ui/DailyGetDialog.js"},{"deps":{"./Res":36,"./HexonTile":40,"./GridManager":31,"../../../framework/plugin_boosts/misc/InputSystem":68,"../Info":24,"./Animal":42,"../../../framework/plugin_boosts/ui/ViewManager":81,"../../../framework/Platform":4,"../../../framework/plugin_boosts/ui/ToastManager":76,"../LanguageManager":3},"path":"preview-scripts/assets/Game/Scripts/hex-lines-game/Game.js"},{"deps":{},"path":"preview-scripts/assets/Game/Scripts/hex-lines-game/Consts.js"},{"deps":{},"path":"preview-scripts/assets/Game/Scripts/hex-lines-game/Res.js"},{"deps":{"../../../framework/plugin_boosts/ui/View":79,"../Info":24,"../../../framework/plugin_boosts/ui/ViewManager":81,"../../../framework/Platform":4,"../LanguageManager":3},"path":"preview-scripts/assets/Game/Scripts/ui/GetDialog.js"},{"deps":{"../../../framework/Platform":4,"../../../framework/plugin_boosts/ui/ViewManager":81,"../../../framework/plugin_boosts/ui/ToastManager":76,"../hex-lines-game/Res":36,"../Info":24,"../../../framework/plugin_boosts/gamesys/Device":61,"../../../framework/plugin_boosts/ui/View":79},"path":"preview-scripts/assets/Game/Scripts/ui/HbDialog.js"},{"deps":{"../Info":24,"../../../framework/plugin_boosts/ui/View":79,"../../../framework/Platform":4},"path":"preview-scripts/assets/Game/Scripts/ui/LevelupDialog.js"},{"deps":{"./Consts":35,"./Game":34,"./Res":36},"path":"preview-scripts/assets/Game/Scripts/hex-lines-game/HexonTile.js"},{"deps":{"../../../framework/plugin_boosts/ui/ViewManager":81,"../LanguageManager":3},"path":"preview-scripts/assets/Game/Scripts/ui/LoseDialog.js"},{"deps":{},"path":"preview-scripts/assets/Game/Scripts/hex-lines-game/Animal.js"},{"deps":{"../../../framework/plugin_boosts/ui/DCUI":71,"../Info":24},"path":"preview-scripts/assets/Game/Scripts/ui/DCParticleSystem.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/gamesys/PoolManager.js"},{"deps":{"../Info":24,"../../../framework/plugin_boosts/ui/game/LevelSelector":5,"../LanguageManager":3},"path":"preview-scripts/assets/Game/Scripts/ui/LevelDialog.js"},{"deps":{"../../../framework/plugin_boosts/misc/Signal":70},"path":"preview-scripts/assets/Game/Scripts/ui/ShopItemTemplate.js"},{"deps":{"../LanguageManager":3,"../../../framework/Platform":4},"path":"preview-scripts/assets/Game/Scripts/ui/PauseDialog.js"},{"deps":{"../Info":24,"./RankItem":49},"path":"preview-scripts/assets/Game/Scripts/ui/RankingList.js"},{"deps":{},"path":"preview-scripts/assets/Game/Scripts/ui/RankItem.js"},{"deps":{"../Info":24,"../../../framework/Platform":4,"../../../framework/plugin_boosts/ui/ViewManager":81,"../hex-lines-game/Consts":35,"../LanguageManager":3},"path":"preview-scripts/assets/Game/Scripts/ui/WinDialog.js"},{"deps":{"./ShopItemTemplate":46,"../../../framework/plugin_boosts/misc/SpriteFrameCache":64,"../hex-lines-game/Res":36,"../../../framework/Platform":4,"../Info":24,"../../../framework/plugin_boosts/ui/ToastManager":76,"../../../framework/plugin_boosts/ui/UIFunctions":83,"../../../framework/plugin_boosts/gamesys/Device":61,"../Main":32},"path":"preview-scripts/assets/Game/Scripts/ui/ShopDialog.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/gamesys/LocalTimeSystem.js"},{"deps":{"../../../framework/plugin_boosts/ui/ToastManager":76,"../../../framework/plugin_boosts/ui/ViewManager":81,"../../../framework/plugin_boosts/ui/View":79,"../Info":24,"../../../framework/Platform":4,"../../../framework/plugin_boosts/gamesys/Device":61,"../hex-lines-game/Res":36,"../../../framework/plugin_boosts/ui/UIFunctions":83,"../Main":32,"../LanguageManager":3},"path":"preview-scripts/assets/Game/Scripts/ui/LuckyDialog.js"},{"deps":{"./PsFx":59,"./PoolManager":44},"path":"preview-scripts/assets/framework/plugin_boosts/gamesys/PsSpawner.js"},{"deps":{"./PsFx":59,"./Device":61},"path":"preview-scripts/assets/framework/plugin_boosts/gamesys/PsFxPlayer.js"},{"deps":{"../utils/EventManager":14},"path":"preview-scripts/assets/framework/plugin_boosts/misc/DataCenter.js"},{"deps":{"./DCUI":71,"./PandoraPoint":78},"path":"preview-scripts/assets/framework/plugin_boosts/ui/DCPandoraPoint.js"},{"deps":{"../utils/EventManager":14,"../misc/Signal":70},"path":"preview-scripts/assets/framework/plugin_boosts/gamesys/LocalLifeSystem.js"},{"deps":{"./Device":61},"path":"preview-scripts/assets/framework/plugin_boosts/gamesys/PsFx.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/misc/JoyStick.js"},{"deps":{"../../qqsdk/SoundHelper":9},"path":"preview-scripts/assets/framework/plugin_boosts/gamesys/Device.js"},{"deps":{"./ClickAudio":12},"path":"preview-scripts/assets/framework/plugin_boosts/misc/ClickAudioManager.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/misc/Net.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/misc/SpriteFrameCache.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/misc/FrameSwitch.js"},{"deps":{"./View":79,"./MessageBoxManager":69},"path":"preview-scripts/assets/framework/plugin_boosts/ui/MessageBoxComponent.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/misc/BoostsAction.js"},{"deps":{"./JoyStick":60},"path":"preview-scripts/assets/framework/plugin_boosts/misc/InputSystem.js"},{"deps":{"./ViewManager":81},"path":"preview-scripts/assets/framework/plugin_boosts/ui/MessageBoxManager.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/misc/Signal.js"},{"deps":{"../misc/DataCenter":56},"path":"preview-scripts/assets/framework/plugin_boosts/ui/DCUI.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/ui/LoadingManager.js"},{"deps":{"./DCUI":71,"../misc/SpriteFrameCache":64},"path":"preview-scripts/assets/framework/plugin_boosts/ui/DCSprite.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/ui/UIComponent.js"},{"deps":{"./DCUI":71},"path":"preview-scripts/assets/framework/plugin_boosts/ui/DCToggle.js"},{"deps":{"./ToastComponent":80},"path":"preview-scripts/assets/framework/plugin_boosts/ui/ToastManager.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/gamesys/FSM.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/ui/PandoraPoint.js"},{"deps":{"./UIComponent":74,"./ViewManager":81,"./UIFunctions":83,"../../../Game/Scripts/LanguageManager":3},"path":"preview-scripts/assets/framework/plugin_boosts/ui/View.js"},{"deps":{"./UIFunctions":83},"path":"preview-scripts/assets/framework/plugin_boosts/ui/ToastComponent.js"},{"deps":{"./View":79},"path":"preview-scripts/assets/framework/plugin_boosts/ui/ViewManager.js"},{"deps":{"./DCUI":71},"path":"preview-scripts/assets/framework/plugin_boosts/ui/DCLabel.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/ui/UIFunctions.js"},{"deps":{"../misc/SpriteFrameCache":64},"path":"preview-scripts/assets/framework/plugin_boosts/utils/Common.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/utils/Intersection.js"}];
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
    