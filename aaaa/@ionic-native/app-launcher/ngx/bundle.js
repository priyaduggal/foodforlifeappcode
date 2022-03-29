'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');

var AppLauncher = /** @class */ (function (_super) {
    tslib.__extends(AppLauncher, _super);
    function AppLauncher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppLauncher.prototype.canLaunch = function (options) { return core.cordova(this, "canLaunch", {}, arguments); };
    AppLauncher.prototype.launch = function (options) { return core.cordova(this, "launch", {}, arguments); };
    AppLauncher.pluginName = "AppLauncher";
    AppLauncher.plugin = "cordova-plugin-app-launcher";
    AppLauncher.pluginRef = "window.plugins.launcher";
    AppLauncher.repo = "https://github.com/nchutchind/cordova-plugin-app-launcher";
    AppLauncher.platforms = ["Android", "iOS"];
    AppLauncher.decorators = [
        { type: core$1.Injectable }
    ];
    return AppLauncher;
}(core.IonicNativePlugin));

exports.AppLauncher = AppLauncher;
