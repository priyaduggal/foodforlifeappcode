import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
import * as ɵngcc0 from '@angular/core';
var SplashScreen = /** @class */ (function (_super) {
    __extends(SplashScreen, _super);
    function SplashScreen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SplashScreen.prototype.show = function () { return cordova(this, "show", { "sync": true }, arguments); };
    SplashScreen.prototype.hide = function () { return cordova(this, "hide", { "sync": true }, arguments); };
    SplashScreen.pluginName = "SplashScreen";
    SplashScreen.plugin = "cordova-plugin-splashscreen";
    SplashScreen.pluginRef = "navigator.splashscreen";
    SplashScreen.repo = "https://github.com/apache/cordova-plugin-splashscreen";
    SplashScreen.platforms = ["Amazon Fire OS", "Android", "iOS", "Windows"];
SplashScreen.ɵfac = function SplashScreen_Factory(t) { return ɵSplashScreen_BaseFactory(t || SplashScreen); };
SplashScreen.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: SplashScreen, factory: function (t) { return SplashScreen.ɵfac(t); } });
var ɵSplashScreen_BaseFactory = /*@__PURE__*/ ɵngcc0.ɵɵgetInheritedFactory(SplashScreen);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SplashScreen, [{
        type: Injectable
    }], null, null); })();
    return SplashScreen;
}(IonicNativePlugin));
export { SplashScreen };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvc3BsYXNoLXNjcmVlbi9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7QUFDeEU7QUFJQyxJQXVCaUMsZ0NBQWlCO0FBQUM7QUFFOUI7QUFRcEI7QUFBTSxJQUhOLDJCQUFJO0FBTU8sSUFFWCwyQkFBSTtBQUUyRDtBQUE4QztBQUF5RDtBQUF1RDtBQUFpRjtnREFsQi9TLFVBQVU7Ozs7OzBCQUNMO0FBQUMsdUJBN0JQO0FBQUUsRUE2QmdDLGlCQUFpQjtBQUNsRCxTQURZLFlBQVk7QUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIFNwbGFzaCBTY3JlZW5cbiAqIEBwcmVtaWVyIHNwbGFzaHNjcmVlblxuICogQGNhcGFjaXRvcmluY29tcGF0aWJsZSB0cnVlXG4gKiBAZGVzY3JpcHRpb24gVGhpcyBwbHVnaW4gZGlzcGxheXMgYW5kIGhpZGVzIGEgc3BsYXNoIHNjcmVlbiBkdXJpbmcgYXBwbGljYXRpb24gbGF1bmNoLiBUaGUgbWV0aG9kcyBiZWxvdyBhbGxvd3Mgc2hvd2luZyBhbmQgaGlkaW5nIHRoZSBzcGxhc2hzY3JlZW4gYWZ0ZXIgdGhlIGFwcCBoYXMgbG9hZGVkLlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBTcGxhc2hTY3JlZW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL3NwbGFzaC1zY3JlZW4vbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHNwbGFzaFNjcmVlbjogU3BsYXNoU2NyZWVuKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLnNwbGFzaFNjcmVlbi5zaG93KCk7XG4gKlxuICogdGhpcy5zcGxhc2hTY3JlZW4uaGlkZSgpO1xuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnU3BsYXNoU2NyZWVuJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tc3BsYXNoc2NyZWVuJyxcbiAgcGx1Z2luUmVmOiAnbmF2aWdhdG9yLnNwbGFzaHNjcmVlbicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2NvcmRvdmEtcGx1Z2luLXNwbGFzaHNjcmVlbicsXG4gIHBsYXRmb3JtczogWydBbWF6b24gRmlyZSBPUycsICdBbmRyb2lkJywgJ2lPUycsICdXaW5kb3dzJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNwbGFzaFNjcmVlbiBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFNob3dzIHRoZSBzcGxhc2hzY3JlZW5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBzaG93KCk6IHZvaWQge31cblxuICAvKipcbiAgICogSGlkZXMgdGhlIHNwbGFzaHNjcmVlblxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIGhpZGUoKTogdm9pZCB7fVxufVxuIl19