import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
import * as ɵngcc0 from '@angular/core';
var FilePath = /** @class */ (function (_super) {
    __extends(FilePath, _super);
    function FilePath() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FilePath.prototype.resolveNativePath = function (path) { return cordova(this, "resolveNativePath", {}, arguments); };
    FilePath.pluginName = "FilePath";
    FilePath.plugin = "cordova-plugin-filepath";
    FilePath.pluginRef = "window.FilePath";
    FilePath.repo = "https://github.com/hiddentao/cordova-plugin-filepath";
    FilePath.platforms = ["Android"];
FilePath.ɵfac = function FilePath_Factory(t) { return ɵFilePath_BaseFactory(t || FilePath); };
FilePath.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: FilePath, factory: function (t) { return FilePath.ɵfac(t); } });
var ɵFilePath_BaseFactory = /*@__PURE__*/ ɵngcc0.ɵɵgetInheritedFactory(FilePath);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(FilePath, [{
        type: Injectable
    }], null, null); })();
    return FilePath;
}(IonicNativePlugin));
export { FilePath };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvZmlsZS1wYXRoL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztBQUN4RTtBQUlpQixJQTRCYSw0QkFBaUI7QUFBQztBQUU5QjtBQUNvQjtBQUFNLElBSTFDLG9DQUFpQixhQUFDLElBQVk7QUFJTjtBQUFzQztBQUFpRDtBQUE0QztBQUE0RTs0Q0FaeE8sVUFBVTs7Ozs7MEJBQ0w7QUFBQyxtQkFsQ1A7QUFBRSxFQWtDNEIsaUJBQWlCO0FBQzlDLFNBRFksUUFBUTtBQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbmRlY2xhcmUgY29uc3Qgd2luZG93OiBhbnk7XG5cbi8qKlxuICogQG5hbWUgRmlsZSBQYXRoXG4gKiBAcHJlbWllciBmaWxlc3lzdGVtXG4gKiBAZGVzY3JpcHRpb25cbiAqXG4gKiBUaGlzIHBsdWdpbiBhbGxvd3MgeW91IHRvIHJlc29sdmUgdGhlIG5hdGl2ZSBmaWxlc3lzdGVtIHBhdGggZm9yIEFuZHJvaWQgY29udGVudCBVUklzIGFuZCBpcyBiYXNlZCBvbiBjb2RlIGluIHRoZSBhRmlsZUNob29zZXIgbGlicmFyeS5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEZpbGVQYXRoIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9maWxlLXBhdGgvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGZpbGVQYXRoOiBGaWxlUGF0aCkgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5maWxlUGF0aC5yZXNvbHZlTmF0aXZlUGF0aChwYXRoKVxuICogICAudGhlbihmaWxlUGF0aCA9PiBjb25zb2xlLmxvZyhmaWxlUGF0aCkpXG4gKiAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnRmlsZVBhdGgnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1maWxlcGF0aCcsXG4gIHBsdWdpblJlZjogJ3dpbmRvdy5GaWxlUGF0aCcsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vaGlkZGVudGFvL2NvcmRvdmEtcGx1Z2luLWZpbGVwYXRoJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmlsZVBhdGggZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBSZXNvbHZlIG5hdGl2ZSBwYXRoIGZvciBnaXZlbiBjb250ZW50IFVSTC9wYXRoLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCAgQ29udGVudCBVUkwvcGF0aC5cbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVzb2x2ZU5hdGl2ZVBhdGgocGF0aDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==