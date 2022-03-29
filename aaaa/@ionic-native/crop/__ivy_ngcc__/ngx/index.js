import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
import * as ɵngcc0 from '@angular/core';
var Crop = /** @class */ (function (_super) {
    __extends(Crop, _super);
    function Crop() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Crop.prototype.crop = function (pathToImage, options) { return cordova(this, "crop", { "callbackOrder": "reverse" }, arguments); };
    Crop.pluginName = "Crop";
    Crop.plugin = "cordova-plugin-crop";
    Crop.pluginRef = "plugins";
    Crop.repo = "https://github.com/jeduan/cordova-plugin-crop";
    Crop.platforms = ["Android", "iOS"];
Crop.ɵfac = function Crop_Factory(t) { return ɵCrop_BaseFactory(t || Crop); };
Crop.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: Crop, factory: function (t) { return Crop.ɵfac(t); } });
var ɵCrop_BaseFactory = /*@__PURE__*/ ɵngcc0.ɵɵgetInheritedFactory(Crop);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Crop, [{
        type: Injectable
    }], null, null); })();
    return Crop;
}(IonicNativePlugin));
export { Crop };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvY3JvcC9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7QUFDeEU7QUFFYyxJQWlDWSx3QkFBaUI7QUFBQztBQUU5QjtBQUVvQjtBQUM5QixJQUtGLG1CQUFJLGFBQUMsV0FBbUIsRUFBRSxPQUFxQjtBQUlSO0FBQThCO0FBQXlDO0FBQWdDO0FBQWlFO3dDQWZoTixVQUFVOzs7OzswQkFDTDtBQUFDLGVBckNQO0FBQUUsRUFxQ3dCLGlCQUFpQjtBQUMxQyxTQURZLElBQUk7QUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENyb3BPcHRpb25zIHtcbiAgcXVhbGl0eT86IG51bWJlcjtcbiAgdGFyZ2V0SGVpZ2h0PzogbnVtYmVyO1xuICB0YXJnZXRXaWR0aD86IG51bWJlcjtcbn1cblxuLyoqXG4gKiBAbmFtZSBDcm9wXG4gKiBAZGVzY3JpcHRpb24gQ3JvcHMgaW1hZ2VzXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IENyb3AgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2Nyb3Avbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGNyb3A6IENyb3ApIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMuY3JvcC5jcm9wKCdwYXRoL3RvL2ltYWdlLmpwZycsIHtxdWFsaXR5OiA3NX0pXG4gKiAgIC50aGVuKFxuICogICAgIG5ld0ltYWdlID0+IGNvbnNvbGUubG9nKCduZXcgaW1hZ2UgcGF0aCBpczogJyArIG5ld0ltYWdlKSxcbiAqICAgICBlcnJvciA9PiBjb25zb2xlLmVycm9yKCdFcnJvciBjcm9wcGluZyBpbWFnZScsIGVycm9yKVxuICogICApO1xuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogQ3JvcE9wdGlvbnNcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdDcm9wJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tY3JvcCcsXG4gIHBsdWdpblJlZjogJ3BsdWdpbnMnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2plZHVhbi9jb3Jkb3ZhLXBsdWdpbi1jcm9wJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENyb3AgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBDcm9wcyBhbiBpbWFnZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aFRvSW1hZ2VcbiAgICogQHBhcmFtIHtDcm9wT3B0aW9uc30gW29wdGlvbnNdXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgbmV3IGltYWdlIHBhdGgsIG9yIHJlamVjdHMgaWYgZmFpbGVkIHRvIGNyb3AuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLFxuICB9KVxuICBjcm9wKHBhdGhUb0ltYWdlOiBzdHJpbmcsIG9wdGlvbnM/OiBDcm9wT3B0aW9ucyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=