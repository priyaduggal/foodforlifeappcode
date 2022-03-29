import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova, cordovaPropertyGet, cordovaPropertySet } from '@ionic-native/core';
import * as ɵngcc0 from '@angular/core';
var StatusBar = /** @class */ (function (_super) {
    __extends(StatusBar, _super);
    function StatusBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StatusBar.prototype.overlaysWebView = function (doesOverlay) { return cordova(this, "overlaysWebView", { "sync": true }, arguments); };
    StatusBar.prototype.styleDefault = function () { return cordova(this, "styleDefault", { "sync": true }, arguments); };
    StatusBar.prototype.styleLightContent = function () { return cordova(this, "styleLightContent", { "sync": true }, arguments); };
    StatusBar.prototype.styleBlackTranslucent = function () { return cordova(this, "styleBlackTranslucent", { "sync": true }, arguments); };
    StatusBar.prototype.styleBlackOpaque = function () { return cordova(this, "styleBlackOpaque", { "sync": true }, arguments); };
    StatusBar.prototype.backgroundColorByName = function (colorName) { return cordova(this, "backgroundColorByName", { "sync": true }, arguments); };
    StatusBar.prototype.backgroundColorByHexString = function (hexString) { return cordova(this, "backgroundColorByHexString", { "sync": true }, arguments); };
    StatusBar.prototype.hide = function () { return cordova(this, "hide", { "sync": true }, arguments); };
    StatusBar.prototype.show = function () { return cordova(this, "show", { "sync": true }, arguments); };
    Object.defineProperty(StatusBar.prototype, "isVisible", {
        get: function () { return cordovaPropertyGet(this, "isVisible"); },
        set: function (value) { cordovaPropertySet(this, "isVisible", value); },
        enumerable: false,
        configurable: true
    });
    StatusBar.pluginName = "StatusBar";
    StatusBar.plugin = "cordova-plugin-statusbar";
    StatusBar.pluginRef = "StatusBar";
    StatusBar.repo = "https://github.com/apache/cordova-plugin-statusbar";
    StatusBar.platforms = ["Android", "iOS", "Windows"];
StatusBar.ɵfac = function StatusBar_Factory(t) { return ɵStatusBar_BaseFactory(t || StatusBar); };
StatusBar.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: StatusBar, factory: function (t) { return StatusBar.ɵfac(t); } });
var ɵStatusBar_BaseFactory = /*@__PURE__*/ ɵngcc0.ɵɵgetInheritedFactory(StatusBar);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(StatusBar, [{
        type: Injectable
    }], null, null); })();
    return StatusBar;
}(IonicNativePlugin));
export { StatusBar };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvc3RhdHVzLWJhci9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxzRUFBdUQsTUFBTSxvQkFBb0IsQ0FBQzs7QUFDekY7QUFJSSxJQThCMkIsNkJBQWlCO0FBQUM7QUFFOUI7QUFHVjtBQUFNLElBV2IsbUNBQWUsYUFBQyxXQUFvQjtBQUcyQixJQUsvRCxnQ0FBWTtBQUlaLElBSUEscUNBQWlCO0FBSWhCLElBSUQseUNBQXFCO0FBS2pCLElBR0osb0NBQWdCO0FBSU4sSUFTVix5Q0FBcUIsYUFBQyxTQUFpQjtBQUc4QixJQVNyRSw4Q0FBMEIsYUFBQyxTQUFpQjtBQVM5QyxJQURFLHdCQUFJO0FBUUosSUFBQSx3QkFBSTtBQUVpRSwwQkF0RnJFLGdDQUFTO0FBQUk7QUFHK0M7QUFHVjtBQUEyQjtBQUc5RTtBQUFRO0FBRW1CO0FBR0M7QUFDNUI7QUFPUTs2Q0E1QlIsVUFBVTs7Ozs7MEJBQ0w7QUFBQyxvQkFwQ1A7QUFBRSxFQW9DNkIsaUJBQWlCO0FBQy9DLFNBRFksU0FBUztBQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQ29yZG92YVByb3BlcnR5LCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBTdGF0dXMgQmFyXG4gKiBAcHJlbWllciBzdGF0dXNiYXJcbiAqIEBjYXBhY2l0b3JpbmNvbXBhdGlibGUgdHJ1ZVxuICogQGRlc2NyaXB0aW9uXG4gKiBNYW5hZ2UgdGhlIGFwcGVhcmFuY2Ugb2YgdGhlIG5hdGl2ZSBzdGF0dXMgYmFyLlxuICpcbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBgY29yZG92YS1wbHVnaW4tc3RhdHVzYmFyYC4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW1N0YXR1c0JhciBwbHVnaW4gZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1zdGF0dXNiYXIpLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgU3RhdHVzQmFyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9zdGF0dXMtYmFyL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBzdGF0dXNCYXI6IFN0YXR1c0JhcikgeyB9XG4gKlxuICogLi4uXG4gKlxuICogLy8gbGV0IHN0YXR1cyBiYXIgb3ZlcmxheSB3ZWJ2aWV3XG4gKiB0aGlzLnN0YXR1c0Jhci5vdmVybGF5c1dlYlZpZXcodHJ1ZSk7XG4gKlxuICogLy8gc2V0IHN0YXR1cyBiYXIgdG8gd2hpdGVcbiAqIHRoaXMuc3RhdHVzQmFyLmJhY2tncm91bmRDb2xvckJ5SGV4U3RyaW5nKCcjZmZmZmZmJyk7XG4gKiBgYGBcbiAqXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnU3RhdHVzQmFyJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tc3RhdHVzYmFyJyxcbiAgcGx1Z2luUmVmOiAnU3RhdHVzQmFyJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvY29yZG92YS1wbHVnaW4tc3RhdHVzYmFyJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJywgJ1dpbmRvd3MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RhdHVzQmFyIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogV2hldGhlciB0aGUgU3RhdHVzQmFyIGlzIGN1cnJlbnRseSB2aXNpYmxlIG9yIG5vdC5cbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBpc1Zpc2libGU6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFNldCB3aGV0aGVyIHRoZSBzdGF0dXMgYmFyIG92ZXJsYXlzIHRoZSBtYWluIGFwcCB2aWV3LiBUaGUgZGVmYXVsdFxuICAgKiBpcyB0cnVlLlxuICAgKlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGRvZXNPdmVybGF5ICBXaGV0aGVyIHRoZSBzdGF0dXMgYmFyIG92ZXJsYXlzIHRoZSBtYWluIGFwcCB2aWV3LlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIG92ZXJsYXlzV2ViVmlldyhkb2VzT3ZlcmxheTogYm9vbGVhbikge31cblxuICAvKipcbiAgICogVXNlIHRoZSBkZWZhdWx0IHN0YXR1c2JhciAoZGFyayB0ZXh0LCBmb3IgbGlnaHQgYmFja2dyb3VuZHMpLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIHN0eWxlRGVmYXVsdCgpIHt9XG5cbiAgLyoqXG4gICAqIFVzZSB0aGUgbGlnaHRDb250ZW50IHN0YXR1c2JhciAobGlnaHQgdGV4dCwgZm9yIGRhcmsgYmFja2dyb3VuZHMpLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIHN0eWxlTGlnaHRDb250ZW50KCkge31cblxuICAvKipcbiAgICogVXNlIHRoZSBibGFja1RyYW5zbHVjZW50IHN0YXR1c2JhciAobGlnaHQgdGV4dCwgZm9yIGRhcmsgYmFja2dyb3VuZHMpLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIHN0eWxlQmxhY2tUcmFuc2x1Y2VudCgpIHt9XG5cbiAgLyoqXG4gICAqIFVzZSB0aGUgYmxhY2tPcGFxdWUgc3RhdHVzYmFyIChsaWdodCB0ZXh0LCBmb3IgZGFyayBiYWNrZ3JvdW5kcykuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgc3R5bGVCbGFja09wYXF1ZSgpIHt9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgc3RhdHVzIGJhciB0byBhIHNwZWNpZmljIG5hbWVkIGNvbG9yLiBWYWxpZCBvcHRpb25zOlxuICAgKiBibGFjaywgZGFya0dyYXksIGxpZ2h0R3JheSwgd2hpdGUsIGdyYXksIHJlZCwgZ3JlZW4sIGJsdWUsIGN5YW4sIHllbGxvdywgbWFnZW50YSwgb3JhbmdlLCBwdXJwbGUsIGJyb3duLlxuICAgKlxuICAgKiBpT1Mgbm90ZTogeW91IG11c3QgY2FsbCBTdGF0dXNCYXIub3ZlcmxheXNXZWJWaWV3KGZhbHNlKSB0byBlbmFibGUgY29sb3IgY2hhbmdpbmcuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvck5hbWUgIFRoZSBuYW1lIG9mIHRoZSBjb2xvciAoZnJvbSBhYm92ZSlcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBiYWNrZ3JvdW5kQ29sb3JCeU5hbWUoY29sb3JOYW1lOiBzdHJpbmcpIHt9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgc3RhdHVzIGJhciB0byBhIHNwZWNpZmljIGhleCBjb2xvciAoQ1NTIHNob3J0aGFuZCBzdXBwb3J0ZWQhKS5cbiAgICpcbiAgICogaU9TIG5vdGU6IHlvdSBtdXN0IGNhbGwgU3RhdHVzQmFyLm92ZXJsYXlzV2ViVmlldyhmYWxzZSkgdG8gZW5hYmxlIGNvbG9yIGNoYW5naW5nLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gaGV4U3RyaW5nICBUaGUgaGV4IHZhbHVlIG9mIHRoZSBjb2xvci5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBiYWNrZ3JvdW5kQ29sb3JCeUhleFN0cmluZyhoZXhTdHJpbmc6IHN0cmluZykge31cblxuICAvKipcbiAgICogSGlkZSB0aGUgU3RhdHVzQmFyXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgaGlkZSgpIHt9XG5cbiAgLyoqXG4gICAqIFNob3cgdGhlIFN0YXR1c0JhclxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIHNob3coKSB7fVxufVxuIl19