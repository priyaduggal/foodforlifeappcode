var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var AppLauncherOriginal = /** @class */ (function (_super) {
    __extends(AppLauncherOriginal, _super);
    function AppLauncherOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppLauncherOriginal.prototype.canLaunch = function (options) { return cordova(this, "canLaunch", {}, arguments); };
    AppLauncherOriginal.prototype.launch = function (options) { return cordova(this, "launch", {}, arguments); };
    AppLauncherOriginal.pluginName = "AppLauncher";
    AppLauncherOriginal.plugin = "cordova-plugin-app-launcher";
    AppLauncherOriginal.pluginRef = "window.plugins.launcher";
    AppLauncherOriginal.repo = "https://github.com/nchutchind/cordova-plugin-app-launcher";
    AppLauncherOriginal.platforms = ["Android", "iOS"];
    return AppLauncherOriginal;
}(IonicNativePlugin));
var AppLauncher = new AppLauncherOriginal();
export { AppLauncher };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2FwcC1sYXVuY2hlci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUE0Q3ZDLCtCQUFpQjs7OztJQU9oRCwrQkFBUyxhQUFDLE9BQTJCO0lBVXJDLDRCQUFNLGFBQUMsT0FBMkI7Ozs7OztzQkE5RHBDO0VBNkNpQyxpQkFBaUI7U0FBckMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFwcExhdW5jaGVyT3B0aW9ucyB7XG4gIHVyaT86IHN0cmluZztcbiAgcGFja2FnZU5hbWU/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogQG5hbWUgQXBwIExhdW5jaGVyXG4gKiBAZGVzY3JpcHRpb25cbiAqIFNpbXBsZSBDb3Jkb3ZhIHBsdWdpbiB0byBzZWUgaWYgb3RoZXIgYXBwcyBhcmUgaW5zdGFsbGVkIGFuZCBsYXVuY2ggdGhlbS5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEFwcExhdW5jaGVyLCBBcHBMYXVuY2hlck9wdGlvbnMgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2FwcC1sYXVuY2hlci9uZ3gnO1xuICogaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBhcHBMYXVuY2hlcjogQXBwTGF1bmNoZXIsIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiBjb25zdCBvcHRpb25zOiBBcHBMYXVuY2hlck9wdGlvbnMgPSB7XG4gKiB9XG4gKlxuICogaWYodGhpcy5wbGF0Zm9ybS5pcygnaW9zJykpIHtcbiAqICAgb3B0aW9ucy51cmkgPSAnZmI6Ly8nXG4gKiB9IGVsc2Uge1xuICogICBvcHRpb25zLnBhY2thZ2VOYW1lID0gJ2NvbS5mYWNlYm9vay5rYXRhbmEnXG4gKiB9XG4gKlxuICogdGhpcy5hcHBMYXVuY2hlci5jYW5MYXVuY2gob3B0aW9ucylcbiAqICAgLnRoZW4oKGNhbkxhdW5jaDogYm9vbGVhbikgPT4gY29uc29sZS5sb2coJ0ZhY2Vib29rIGlzIGF2YWlsYWJsZScpKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoJ0ZhY2Vib29rIGlzIG5vdCBhdmFpbGFibGUnKSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQXBwTGF1bmNoZXInLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1hcHAtbGF1bmNoZXInLFxuICBwbHVnaW5SZWY6ICd3aW5kb3cucGx1Z2lucy5sYXVuY2hlcicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vbmNodXRjaGluZC9jb3Jkb3ZhLXBsdWdpbi1hcHAtbGF1bmNoZXInLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXBwTGF1bmNoZXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBDaGVjayBpZiBhbnkgYXBwcyBhcmUgaW5zdGFsbGVkIHRoYXQgY2FuIGxhdW5jaCB2aWEgYSBzcGVjaWZpZWQgVVJJIG9yIFBhY2thZ2UgTmFtZS5cbiAgICogQHBhcmFtIG9wdGlvbnMgQXBwIExhdW5jaGVyIG9wdGlvbnNcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIGlmIHRoZSBhcHAgaXMgaW5zdGFsbGVkXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGNhbkxhdW5jaChvcHRpb25zOiBBcHBMYXVuY2hlck9wdGlvbnMpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTGF1bmNoZXMgdGhlIGFwcCB2aWEgYSBzcGVjaWZpZWQgVVJJIG9yIFBhY2thZ2UgTmFtZVxuICAgKiBAcGFyYW0gb3B0aW9ucyBBcHAgTGF1bmNoZXIgb3B0aW9uc1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgdGhlIGxhdW5jaGVkIGFwcFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBsYXVuY2gob3B0aW9uczogQXBwTGF1bmNoZXJPcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==