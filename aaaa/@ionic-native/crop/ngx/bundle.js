'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');

var Crop = /** @class */ (function (_super) {
    tslib.__extends(Crop, _super);
    function Crop() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Crop.prototype.crop = function (pathToImage, options) { return core.cordova(this, "crop", { "callbackOrder": "reverse" }, arguments); };
    Crop.pluginName = "Crop";
    Crop.plugin = "cordova-plugin-crop";
    Crop.pluginRef = "plugins";
    Crop.repo = "https://github.com/jeduan/cordova-plugin-crop";
    Crop.platforms = ["Android", "iOS"];
    Crop.decorators = [
        { type: core$1.Injectable }
    ];
    return Crop;
}(core.IonicNativePlugin));

exports.Crop = Crop;
