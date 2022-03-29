import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var Facebook = /** @class */ (function (_super) {
    __extends(Facebook, _super);
    function Facebook() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.EVENTS = {
            EVENT_NAME_ACTIVATED_APP: 'fb_mobile_activate_app',
            EVENT_NAME_DEACTIVATED_APP: 'fb_mobile_deactivate_app',
            EVENT_NAME_SESSION_INTERRUPTIONS: 'fb_mobile_app_interruptions',
            EVENT_NAME_TIME_BETWEEN_SESSIONS: 'fb_mobile_time_between_sessions',
            EVENT_NAME_COMPLETED_REGISTRATION: 'fb_mobile_complete_registration',
            EVENT_NAME_VIEWED_CONTENT: 'fb_mobile_content_view',
            EVENT_NAME_SEARCHED: 'fb_mobile_search',
            EVENT_NAME_RATED: 'fb_mobile_rate',
            EVENT_NAME_COMPLETED_TUTORIAL: 'fb_mobile_tutorial_completion',
            EVENT_NAME_PUSH_TOKEN_OBTAINED: 'fb_mobile_obtain_push_token',
            EVENT_NAME_ADDED_TO_CART: 'fb_mobile_add_to_cart',
            EVENT_NAME_ADDED_TO_WISHLIST: 'fb_mobile_add_to_wishlist',
            EVENT_NAME_INITIATED_CHECKOUT: 'fb_mobile_initiated_checkout',
            EVENT_NAME_ADDED_PAYMENT_INFO: 'fb_mobile_add_payment_info',
            EVENT_NAME_PURCHASED: 'fb_mobile_purchase',
            EVENT_NAME_ACHIEVED_LEVEL: 'fb_mobile_level_achieved',
            EVENT_NAME_UNLOCKED_ACHIEVEMENT: 'fb_mobile_achievement_unlocked',
            EVENT_NAME_SPENT_CREDITS: 'fb_mobile_spent_credits',
            EVENT_PARAM_CURRENCY: 'fb_currency',
            EVENT_PARAM_REGISTRATION_METHOD: 'fb_registration_method',
            EVENT_PARAM_CONTENT_TYPE: 'fb_content_type',
            EVENT_PARAM_CONTENT_ID: 'fb_content_id',
            EVENT_PARAM_SEARCH_STRING: 'fb_search_string',
            EVENT_PARAM_SUCCESS: 'fb_success',
            EVENT_PARAM_MAX_RATING_VALUE: 'fb_max_rating_value',
            EVENT_PARAM_PAYMENT_INFO_AVAILABLE: 'fb_payment_info_available',
            EVENT_PARAM_NUM_ITEMS: 'fb_num_items',
            EVENT_PARAM_LEVEL: 'fb_level',
            EVENT_PARAM_DESCRIPTION: 'fb_description',
            EVENT_PARAM_SOURCE_APPLICATION: 'fb_mobile_launch_source',
            EVENT_PARAM_VALUE_YES: '1',
            EVENT_PARAM_VALUE_NO: '0',
        };
        return _this;
    }
    Facebook.prototype.getApplicationId = function () { return cordova(this, "getApplicationId", {}, arguments); };
    Facebook.prototype.setApplicationId = function (id) { return cordova(this, "setApplicationId", {}, arguments); };
    Facebook.prototype.getApplicationName = function () { return cordova(this, "getApplicationName", {}, arguments); };
    Facebook.prototype.setApplicationName = function (name) { return cordova(this, "setApplicationName", {}, arguments); };
    Facebook.prototype.login = function (permissions) { return cordova(this, "login", {}, arguments); };
    Facebook.prototype.loginWithLimitedTracking = function (permissions) { return cordova(this, "loginWithLimitedTracking", {}, arguments); };
    Facebook.prototype.checkHasCorrectPermissions = function (permissions) { return cordova(this, "checkHasCorrectPermissions", {}, arguments); };
    Facebook.prototype.isDataAccessExpired = function () { return cordova(this, "isDataAccessExpired", {}, arguments); };
    Facebook.prototype.reauthorizeDataAccess = function () { return cordova(this, "reauthorizeDataAccess", {}, arguments); };
    Facebook.prototype.logout = function () { return cordova(this, "logout", {}, arguments); };
    Facebook.prototype.getLoginStatus = function () { return cordova(this, "getLoginStatus", {}, arguments); };
    Facebook.prototype.getAccessToken = function () { return cordova(this, "getAccessToken", {}, arguments); };
    Facebook.prototype.getCurrentProfile = function () { return cordova(this, "getCurrentProfile", {}, arguments); };
    Facebook.prototype.showDialog = function (options) { return cordova(this, "showDialog", {}, arguments); };
    Facebook.prototype.api = function (requestPath, permissions, httpMethod) { return cordova(this, "api", {}, arguments); };
    Facebook.prototype.logEvent = function (name, params, valueToSum) { return cordova(this, "logEvent", { "successIndex": 3, "errorIndex": 4 }, arguments); };
    Facebook.prototype.setAutoLogAppEventsEnabled = function (enabled) { return cordova(this, "setAutoLogAppEventsEnabled", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    Facebook.prototype.setAdvertiserIDCollectionEnabled = function (enabled) { return cordova(this, "setAdvertiserIDCollectionEnabled", {}, arguments); };
    Facebook.prototype.setAdvertiserTrackingEnabled = function (enabled) { return cordova(this, "setAdvertiserTrackingEnabled", {}, arguments); };
    Facebook.prototype.logPurchase = function (value, currency, params) { return cordova(this, "logPurchase", {}, arguments); };
    Facebook.prototype.getDeferredApplink = function () { return cordova(this, "getDeferredApplink", {}, arguments); };
    Facebook.prototype.activateApp = function () { return cordova(this, "activateApp", {}, arguments); };
    Facebook.pluginName = "Facebook";
    Facebook.plugin = "cordova-plugin-facebook-connect";
    Facebook.pluginRef = "facebookConnectPlugin";
    Facebook.repo = "https://github.com/cordova-plugin-facebook-connect/cordova-plugin-facebook-connect";
    Facebook.install = "ionic cordova plugin add cordova-plugin-facebook-connect --variable APP_ID=\"123456789\" --variable APP_NAME=\"myApplication\"";
    Facebook.installVariables = ["APP_ID", "APP_NAME"];
    Facebook.platforms = ["Android", "iOS", "Browser"];
    Facebook.decorators = [
        { type: Injectable }
    ];
    return Facebook;
}(IonicNativePlugin));
export { Facebook };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2ZhY2Vib29rL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQWlIMUMsNEJBQWlCOzs7UUFDN0MsWUFBTSxHQUFHO1lBQ1Asd0JBQXdCLEVBQUUsd0JBQXdCO1lBQ2xELDBCQUEwQixFQUFFLDBCQUEwQjtZQUN0RCxnQ0FBZ0MsRUFBRSw2QkFBNkI7WUFDL0QsZ0NBQWdDLEVBQUUsaUNBQWlDO1lBQ25FLGlDQUFpQyxFQUFFLGlDQUFpQztZQUNwRSx5QkFBeUIsRUFBRSx3QkFBd0I7WUFDbkQsbUJBQW1CLEVBQUUsa0JBQWtCO1lBQ3ZDLGdCQUFnQixFQUFFLGdCQUFnQjtZQUNsQyw2QkFBNkIsRUFBRSwrQkFBK0I7WUFDOUQsOEJBQThCLEVBQUUsNkJBQTZCO1lBQzdELHdCQUF3QixFQUFFLHVCQUF1QjtZQUNqRCw0QkFBNEIsRUFBRSwyQkFBMkI7WUFDekQsNkJBQTZCLEVBQUUsOEJBQThCO1lBQzdELDZCQUE2QixFQUFFLDRCQUE0QjtZQUMzRCxvQkFBb0IsRUFBRSxvQkFBb0I7WUFDMUMseUJBQXlCLEVBQUUsMEJBQTBCO1lBQ3JELCtCQUErQixFQUFFLGdDQUFnQztZQUNqRSx3QkFBd0IsRUFBRSx5QkFBeUI7WUFDbkQsb0JBQW9CLEVBQUUsYUFBYTtZQUNuQywrQkFBK0IsRUFBRSx3QkFBd0I7WUFDekQsd0JBQXdCLEVBQUUsaUJBQWlCO1lBQzNDLHNCQUFzQixFQUFFLGVBQWU7WUFDdkMseUJBQXlCLEVBQUUsa0JBQWtCO1lBQzdDLG1CQUFtQixFQUFFLFlBQVk7WUFDakMsNEJBQTRCLEVBQUUscUJBQXFCO1lBQ25ELGtDQUFrQyxFQUFFLDJCQUEyQjtZQUMvRCxxQkFBcUIsRUFBRSxjQUFjO1lBQ3JDLGlCQUFpQixFQUFFLFVBQVU7WUFDN0IsdUJBQXVCLEVBQUUsZ0JBQWdCO1lBQ3pDLDhCQUE4QixFQUFFLHlCQUF5QjtZQUN6RCxxQkFBcUIsRUFBRSxHQUFHO1lBQzFCLG9CQUFvQixFQUFFLEdBQUc7U0FDMUIsQ0FBQzs7O0lBUUYsbUNBQWdCO0lBVWhCLG1DQUFnQixhQUFDLEVBQVU7SUFVM0IscUNBQWtCO0lBVWxCLHFDQUFrQixhQUFDLElBQVk7SUF3Qi9CLHdCQUFLLGFBQUMsV0FBcUI7SUF1QjNCLDJDQUF3QixhQUFDLFdBQXFCO0lBVzlDLDZDQUEwQixhQUFDLFdBQXFCO0lBVWhELHNDQUFtQjtJQVVuQix3Q0FBcUI7SUFXckIseUJBQU07SUE4Qk4saUNBQWM7SUFVZCxpQ0FBYztJQVVkLG9DQUFpQjtJQXNCakIsNkJBQVUsYUFBQyxPQUFZO0lBbUJ2QixzQkFBRyxhQUFDLFdBQW1CLEVBQUUsV0FBcUIsRUFBRSxVQUFtQjtJQWdCbkUsMkJBQVEsYUFBQyxJQUFZLEVBQUUsTUFBZSxFQUFFLFVBQW1CO0lBYTNELDZDQUEwQixhQUFDLE9BQWdCO0lBVTNDLG1EQUFnQyxhQUFDLE9BQWdCO0lBVWpELCtDQUE0QixhQUFDLE9BQWdCO0lBYTdDLDhCQUFXLGFBQUMsS0FBYSxFQUFFLFFBQWdCLEVBQUUsTUFBZTtJQVM1RCxxQ0FBa0I7SUFTbEIsOEJBQVc7Ozs7Ozs7OztnQkE3VVosVUFBVTs7bUJBakhYO0VBa0g4QixpQkFBaUI7U0FBbEMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEZhY2Vib29rTG9naW5SZXNwb25zZSB7XG4gIHN0YXR1czogc3RyaW5nO1xuXG4gIGF1dGhSZXNwb25zZToge1xuICAgIGFjY2Vzc1Rva2VuOiBzdHJpbmc7XG5cbiAgICBkYXRhX2FjY2Vzc19leHBpcmF0aW9uX3RpbWU6IHN0cmluZztcblxuICAgIGV4cGlyZXNJbjogbnVtYmVyO1xuXG4gICAgdXNlcklEOiBzdHJpbmc7XG4gIH07XG59XG5cbi8qKlxuICogQG5hbWUgRmFjZWJvb2tcbiAqIEBkZXNjcmlwdGlvblxuICogVXNlIHRoZSBGYWNlYm9vayBDb25uZWN0IHBsdWdpbiB0byBvYnRhaW4gYWNjZXNzIHRvIHRoZSBuYXRpdmUgRkIgYXBwbGljYXRpb24gb24gaU9TIGFuZCBBbmRyb2lkLlxuICpcbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBgY29yZG92YS1wbHVnaW4tZmFjZWJvb2stY29ubmVjdGAuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFtGYWNlYm9vayBDb25uZWN0XShodHRwczovL2dpdGh1Yi5jb20vY29yZG92YS1wbHVnaW4tZmFjZWJvb2stY29ubmVjdC9jb3Jkb3ZhLXBsdWdpbi1mYWNlYm9vay1jb25uZWN0KS5cbiAqXG4gKiAjIyMjIEluc3RhbGxhdGlvblxuICpcbiAqICBUbyB1c2UgdGhlIEZCIHBsdWdpbiwgeW91IGZpcnN0IGhhdmUgdG8gY3JlYXRlIGEgbmV3IEZhY2Vib29rIEFwcCBpbnNpZGUgb2YgdGhlIEZhY2Vib29rIGRldmVsb3BlciBwb3J0YWwgYXQgW2h0dHBzOi8vZGV2ZWxvcGVycy5mYWNlYm9vay5jb20vYXBwc10oaHR0cHM6Ly9kZXZlbG9wZXJzLmZhY2Vib29rLmNvbS9hcHBzKS5cbiAqXG4gKiBbIVtmYi1nZXRzdGFydGVkLTFdKC9pbWcvZG9jcy9uYXRpdmUvRmFjZWJvb2svMS5wbmcpXShodHRwczovL2RldmVsb3BlcnMuZmFjZWJvb2suY29tL2FwcHMvKVxuICpcbiAqIFJldHJpZXZlIHRoZSBgQXBwIElEYCBhbmQgYEFwcCBOYW1lYC5cbiAqXG4gKiBbIVtmYi1nZXRzdGFydGVkLTJdKC9pbWcvZG9jcy9uYXRpdmUvRmFjZWJvb2svMi5wbmcpXShodHRwczovL2RldmVsb3BlcnMuZmFjZWJvb2suY29tL2FwcHMvKVxuICpcbiAqIFRoZW4gdHlwZSBpbiB0aGUgZm9sbG93aW5nIGNvbW1hbmQgaW4geW91ciBUZXJtaW5hbCwgd2hlcmUgQVBQX0lEIGFuZCBBUFBfTkFNRSBhcmUgdGhlIHZhbHVlcyBmcm9tIHRoZSBGYWNlYm9vayBEZXZlbG9wZXIgcG9ydGFsLlxuICpcbiAqIGBgYGJhc2hcbiAqICBpb25pYyBjb3Jkb3ZhIHBsdWdpbiBhZGQgY29yZG92YS1wbHVnaW4tZmFjZWJvb2stY29ubmVjdCAtLXZhcmlhYmxlIEFQUF9JRD1cIjEyMzQ1Njc4OVwiIC0tdmFyaWFibGUgQVBQX05BTUU9XCJteUFwcGxpY2F0aW9uXCJcbiAqIGBgYFxuICpcbiAqIEFmdGVyLCB5b3UnbGwgbmVlZCB0byBhZGQgdGhlIG5hdGl2ZSBwbGF0Zm9ybXMgeW91J2xsIGJlIHVzaW5nIHRvIHlvdXIgYXBwIGluIHRoZSBGYWNlYm9vayBEZXZlbG9wZXIgcG9ydGFsIHVuZGVyIHlvdXIgYXBwJ3MgU2V0dGluZ3M6XG4gKlxuICogWyFbZmItZ2V0c3RhcnRlZC0zXSgvaW1nL2RvY3MvbmF0aXZlL0ZhY2Vib29rLzMucG5nKV0oaHR0cHM6Ly9kZXZlbG9wZXJzLmZhY2Vib29rLmNvbS9hcHBzLylcbiAqXG4gKiBDbGljayBgJ0FkZCBQbGF0Zm9ybSdgLlxuICpcbiAqIFshW2ZiLWdldHN0YXJ0ZWQtNF0oL2ltZy9kb2NzL25hdGl2ZS9GYWNlYm9vay80LnBuZyldKGh0dHBzOi8vZGV2ZWxvcGVycy5mYWNlYm9vay5jb20vYXBwcy8pXG4gKlxuICogQXQgdGhpcyBwb2ludCB5b3UnbGwgbmVlZCB0byBvcGVuIHlvdXIgcHJvamVjdCdzIFtgY29uZmlnLnhtbGBdKGh0dHBzOi8vY29yZG92YS5hcGFjaGUub3JnL2RvY3MvZW4vbGF0ZXN0L2NvbmZpZ19yZWYvaW5kZXguaHRtbCkgZmlsZSwgZm91bmQgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHlvdXIgcHJvamVjdC5cbiAqXG4gKiBUYWtlIG5vdGUgb2YgdGhlIGBpZGAgZm9yIHRoZSBuZXh0IHN0ZXA6XG4gKiBgYGBcbiAqIDx3aWRnZXQgaWQ9XCJjb20ubXljb21wYW55LnRlc3RhcHBcIiB2ZXJzaW9uPVwiMC4wLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnL25zL3dpZGdldHNcIiB4bWxuczpjZHY9XCJodHRwOi8vY29yZG92YS5hcGFjaGUub3JnL25zLzEuMFwiPlxuICogYGBgXG4gKlxuICogWW91IGNhbiBhbHNvIGVkaXQgdGhlIGBpZGAgdG8gd2hhdGV2ZXIgeW91J2QgbGlrZSBpdCB0byBiZS5cbiAqXG4gKiAjIyMjIGlPUyBJbnN0YWxsXG4gKiBVbmRlciAnQnVuZGxlIElEJywgYWRkIHRoZSBgaWRgIGZyb20geW91ciBgY29uZmlnLnhtbGAgZmlsZTpcbiAqXG4gKiBbIVtmYi1nZXRzdGFydGVkLTVdKC9pbWcvZG9jcy9uYXRpdmUvRmFjZWJvb2svNS5wbmcpXShodHRwczovL2RldmVsb3BlcnMuZmFjZWJvb2suY29tL2FwcHMvKVxuICpcbiAqXG4gKiAjIyMjIEFuZHJvaWQgSW5zdGFsbFxuICogVW5kZXIgJ0dvb2dsZSBQbGF5IFBhY2thZ2UgTmFtZScsIGFkZCB0aGUgYGlkYCBmcm9tIHlvdXIgYGNvbmZpZy54bWxgIGZpbGU6XG4gKlxuICogWyFbZmItZ2V0c3RhcnRlZC02XSgvaW1nL2RvY3MvbmF0aXZlL0ZhY2Vib29rLzYucG5nKV0oaHR0cHM6Ly9kZXZlbG9wZXJzLmZhY2Vib29rLmNvbS9hcHBzLylcbiAqXG4gKlxuICogQW5kIHRoYXQncyBpdCEgWW91IGNhbiBub3cgbWFrZSBjYWxscyB0byBGYWNlYm9vayB1c2luZyB0aGUgcGx1Z2luLlxuICpcbiAqICMjIEV2ZW50c1xuICpcbiAqIEFwcCBldmVudHMgYWxsb3cgeW91IHRvIHVuZGVyc3RhbmQgdGhlIG1ha2V1cCBvZiB1c2VycyBlbmdhZ2luZyB3aXRoIHlvdXIgYXBwLCBtZWFzdXJlIHRoZSBwZXJmb3JtYW5jZSBvZiB5b3VyIEZhY2Vib29rIG1vYmlsZSBhcHAgYWRzLCBhbmQgcmVhY2ggc3BlY2lmaWMgc2V0cyBvZiB5b3VyIHVzZXJzIHdpdGggRmFjZWJvb2sgbW9iaWxlIGFwcCBhZHMuXG4gKlxuICogLSBbaU9TXSBbaHR0cHM6Ly9kZXZlbG9wZXJzLmZhY2Vib29rLmNvbS9kb2NzL2lvcy9hcHAtZXZlbnRzXShodHRwczovL2RldmVsb3BlcnMuZmFjZWJvb2suY29tL2RvY3MvaW9zL2FwcC1ldmVudHMpXG4gKiAtIFtBbmRyb2lkXSBbaHR0cHM6Ly9kZXZlbG9wZXJzLmZhY2Vib29rLmNvbS9kb2NzL2FuZHJvaWQvYXBwLWV2ZW50c10oaHR0cHM6Ly9kZXZlbG9wZXJzLmZhY2Vib29rLmNvbS9kb2NzL2FuZHJvaWQvYXBwLWV2ZW50cylcbiAqIC0gW0pTXSBEb2VzIG5vdCBoYXZlIGFuIEV2ZW50cyBBUEksIHNvIHRoZSBwbHVnaW4gZnVuY3Rpb25zIGFyZSBlbXB0eSBhbmQgd2lsbCByZXR1cm4gYW4gYXV0b21hdGljIHN1Y2Nlc3NcbiAqXG4gKiBBY3RpdmF0aW9uIGV2ZW50cyBhcmUgYXV0b21hdGljYWxseSB0cmFja2VkIGZvciB5b3UgaW4gdGhlIHBsdWdpbi5cbiAqXG4gKiBFdmVudHMgYXJlIGxpc3RlZCBvbiB0aGUgW2luc2lnaHRzIHBhZ2VdKGh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9pbnNpZ2h0cy8pLlxuICpcbiAqIEZvciB0cmFja2luZyBldmVudHMsIHNlZSBgbG9nRXZlbnRgIGFuZCBgbG9nUHVyY2hhc2VgLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgRmFjZWJvb2ssIEZhY2Vib29rTG9naW5SZXNwb25zZSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvZmFjZWJvb2svbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGZiOiBGYWNlYm9vaykgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5mYi5sb2dpbihbJ3B1YmxpY19wcm9maWxlJywgJ3VzZXJfZnJpZW5kcycsICdlbWFpbCddKVxuICogICAudGhlbigocmVzOiBGYWNlYm9va0xvZ2luUmVzcG9uc2UpID0+IGNvbnNvbGUubG9nKCdMb2dnZWQgaW50byBGYWNlYm9vayEnLCByZXMpKVxuICogICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZygnRXJyb3IgbG9nZ2luZyBpbnRvIEZhY2Vib29rJywgZSkpO1xuICpcbiAqXG4gKiB0aGlzLmZiLmxvZ0V2ZW50KHRoaXMuZmIuRVZFTlRTLkVWRU5UX05BTUVfQURERURfVE9fQ0FSVCk7XG4gKlxuICogYGBgXG4gKlxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0ZhY2Vib29rJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZmFjZWJvb2stY29ubmVjdCcsXG4gIHBsdWdpblJlZjogJ2ZhY2Vib29rQ29ubmVjdFBsdWdpbicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vY29yZG92YS1wbHVnaW4tZmFjZWJvb2stY29ubmVjdC9jb3Jkb3ZhLXBsdWdpbi1mYWNlYm9vay1jb25uZWN0JyxcbiAgaW5zdGFsbDpcbiAgICAnaW9uaWMgY29yZG92YSBwbHVnaW4gYWRkIGNvcmRvdmEtcGx1Z2luLWZhY2Vib29rLWNvbm5lY3QgLS12YXJpYWJsZSBBUFBfSUQ9XCIxMjM0NTY3ODlcIiAtLXZhcmlhYmxlIEFQUF9OQU1FPVwibXlBcHBsaWNhdGlvblwiJyxcbiAgaW5zdGFsbFZhcmlhYmxlczogWydBUFBfSUQnLCAnQVBQX05BTUUnXSxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJywgJ0Jyb3dzZXInXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmFjZWJvb2sgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIEVWRU5UUyA9IHtcbiAgICBFVkVOVF9OQU1FX0FDVElWQVRFRF9BUFA6ICdmYl9tb2JpbGVfYWN0aXZhdGVfYXBwJyxcbiAgICBFVkVOVF9OQU1FX0RFQUNUSVZBVEVEX0FQUDogJ2ZiX21vYmlsZV9kZWFjdGl2YXRlX2FwcCcsXG4gICAgRVZFTlRfTkFNRV9TRVNTSU9OX0lOVEVSUlVQVElPTlM6ICdmYl9tb2JpbGVfYXBwX2ludGVycnVwdGlvbnMnLFxuICAgIEVWRU5UX05BTUVfVElNRV9CRVRXRUVOX1NFU1NJT05TOiAnZmJfbW9iaWxlX3RpbWVfYmV0d2Vlbl9zZXNzaW9ucycsXG4gICAgRVZFTlRfTkFNRV9DT01QTEVURURfUkVHSVNUUkFUSU9OOiAnZmJfbW9iaWxlX2NvbXBsZXRlX3JlZ2lzdHJhdGlvbicsXG4gICAgRVZFTlRfTkFNRV9WSUVXRURfQ09OVEVOVDogJ2ZiX21vYmlsZV9jb250ZW50X3ZpZXcnLFxuICAgIEVWRU5UX05BTUVfU0VBUkNIRUQ6ICdmYl9tb2JpbGVfc2VhcmNoJyxcbiAgICBFVkVOVF9OQU1FX1JBVEVEOiAnZmJfbW9iaWxlX3JhdGUnLFxuICAgIEVWRU5UX05BTUVfQ09NUExFVEVEX1RVVE9SSUFMOiAnZmJfbW9iaWxlX3R1dG9yaWFsX2NvbXBsZXRpb24nLFxuICAgIEVWRU5UX05BTUVfUFVTSF9UT0tFTl9PQlRBSU5FRDogJ2ZiX21vYmlsZV9vYnRhaW5fcHVzaF90b2tlbicsXG4gICAgRVZFTlRfTkFNRV9BRERFRF9UT19DQVJUOiAnZmJfbW9iaWxlX2FkZF90b19jYXJ0JyxcbiAgICBFVkVOVF9OQU1FX0FEREVEX1RPX1dJU0hMSVNUOiAnZmJfbW9iaWxlX2FkZF90b193aXNobGlzdCcsXG4gICAgRVZFTlRfTkFNRV9JTklUSUFURURfQ0hFQ0tPVVQ6ICdmYl9tb2JpbGVfaW5pdGlhdGVkX2NoZWNrb3V0JyxcbiAgICBFVkVOVF9OQU1FX0FEREVEX1BBWU1FTlRfSU5GTzogJ2ZiX21vYmlsZV9hZGRfcGF5bWVudF9pbmZvJyxcbiAgICBFVkVOVF9OQU1FX1BVUkNIQVNFRDogJ2ZiX21vYmlsZV9wdXJjaGFzZScsXG4gICAgRVZFTlRfTkFNRV9BQ0hJRVZFRF9MRVZFTDogJ2ZiX21vYmlsZV9sZXZlbF9hY2hpZXZlZCcsXG4gICAgRVZFTlRfTkFNRV9VTkxPQ0tFRF9BQ0hJRVZFTUVOVDogJ2ZiX21vYmlsZV9hY2hpZXZlbWVudF91bmxvY2tlZCcsXG4gICAgRVZFTlRfTkFNRV9TUEVOVF9DUkVESVRTOiAnZmJfbW9iaWxlX3NwZW50X2NyZWRpdHMnLFxuICAgIEVWRU5UX1BBUkFNX0NVUlJFTkNZOiAnZmJfY3VycmVuY3knLFxuICAgIEVWRU5UX1BBUkFNX1JFR0lTVFJBVElPTl9NRVRIT0Q6ICdmYl9yZWdpc3RyYXRpb25fbWV0aG9kJyxcbiAgICBFVkVOVF9QQVJBTV9DT05URU5UX1RZUEU6ICdmYl9jb250ZW50X3R5cGUnLFxuICAgIEVWRU5UX1BBUkFNX0NPTlRFTlRfSUQ6ICdmYl9jb250ZW50X2lkJyxcbiAgICBFVkVOVF9QQVJBTV9TRUFSQ0hfU1RSSU5HOiAnZmJfc2VhcmNoX3N0cmluZycsXG4gICAgRVZFTlRfUEFSQU1fU1VDQ0VTUzogJ2ZiX3N1Y2Nlc3MnLFxuICAgIEVWRU5UX1BBUkFNX01BWF9SQVRJTkdfVkFMVUU6ICdmYl9tYXhfcmF0aW5nX3ZhbHVlJyxcbiAgICBFVkVOVF9QQVJBTV9QQVlNRU5UX0lORk9fQVZBSUxBQkxFOiAnZmJfcGF5bWVudF9pbmZvX2F2YWlsYWJsZScsXG4gICAgRVZFTlRfUEFSQU1fTlVNX0lURU1TOiAnZmJfbnVtX2l0ZW1zJyxcbiAgICBFVkVOVF9QQVJBTV9MRVZFTDogJ2ZiX2xldmVsJyxcbiAgICBFVkVOVF9QQVJBTV9ERVNDUklQVElPTjogJ2ZiX2Rlc2NyaXB0aW9uJyxcbiAgICBFVkVOVF9QQVJBTV9TT1VSQ0VfQVBQTElDQVRJT046ICdmYl9tb2JpbGVfbGF1bmNoX3NvdXJjZScsXG4gICAgRVZFTlRfUEFSQU1fVkFMVUVfWUVTOiAnMScsXG4gICAgRVZFTlRfUEFSQU1fVkFMVUVfTk86ICcwJyxcbiAgfTtcblxuICAvKipcbiAgICogR2V0IHRoZSBjdXJyZW50IGFwcGxpY2F0aW9uIElEXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgY3VycmVudCBhcHBsaWNhdGlvbiBJRFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRBcHBsaWNhdGlvbklkKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgYXBwbGljYXRpb24gSURcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9ICBpZCBhcHBsaWNhdGlvbiBJRFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZXRBcHBsaWNhdGlvbklkKGlkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBjdXJyZW50IGFwcGxpY2F0aW9uIG5hbWVcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBjdXJyZW50IGFwcGxpY2F0aW9uIG5hbWVcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0QXBwbGljYXRpb25OYW1lKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgYXBwbGljYXRpb24gbmFtZVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gIG5hbWUgYXBwbGljYXRpb24gbmFtZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZXRBcHBsaWNhdGlvbk5hbWUobmFtZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIExvZ2luIHRvIEZhY2Vib29rIHRvIGF1dGhlbnRpY2F0ZSB0aGlzIGFwcC5cbiAgICpcbiAgICogYGBgdHlwZXNjcmlwdFxuICAgKiB7XG4gICAqICAgc3RhdHVzOiAnY29ubmVjdGVkJyxcbiAgICogICBhdXRoUmVzcG9uc2U6IHtcbiAgICogICAgIGFjY2Vzc1Rva2VuOiAna2draDNnNDJraDRnMjNraDRnMmtoMzRnMmtnNGsyaDRna2gzZzRrMmg0Z2syM2g0Z2syaDM0Z2syMzRnazJoMzRBbmRTb09uJyxcbiAgICogICAgIGRhdGFfYWNjZXNzX2V4cGlyYXRpb25fdGltZTogJzE2MjM2ODAyNDQnLFxuICAgKiAgICAgZXhwaXJlc0luOiA1MTgzOTc5LFxuICAgKiAgICAgdXNlcklEOiAnNjM0NTY1NDM1J1xuICAgKiAgIH1cbiAgICogfVxuICAgKlxuICAgKiBgYGBcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gIHBlcm1pc3Npb25zIExpc3Qgb2YgW3Blcm1pc3Npb25zXShodHRwczovL2RldmVsb3BlcnMuZmFjZWJvb2suY29tL2RvY3MvZmFjZWJvb2stbG9naW4vcGVybWlzc2lvbnMpIHRoaXMgYXBwIGhhcyB1cG9uIGxvZ2dpbmcgaW4uXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEZhY2Vib29rTG9naW5SZXNwb25zZT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBhIHN0YXR1cyBvYmplY3QgaWYgbG9naW4gc3VjY2VlZHMsIGFuZCByZWplY3RzIGlmIGxvZ2luIGZhaWxzLlxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBsb2dpbihwZXJtaXNzaW9uczogc3RyaW5nW10pOiBQcm9taXNlPEZhY2Vib29rTG9naW5SZXNwb25zZT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2dpbiB0byBGYWNlYm9vayB1c2luZyBMaW1pdGVkIExvZ2luIChpT1MgT25seSlcbiAgICpcbiAgICogYGBgdHlwZXNjcmlwdFxuICAgKiB7XG4gICAqICAgc3RhdHVzOiAnY29ubmVjdGVkJyxcbiAgICogICBhdXRoUmVzcG9uc2U6IHtcbiAgICogICAgIGF1dGhlbnRpY2F0aW9uVG9rZW46ICdrZ2toM2c0MmtoNGcyM2toNGcya2gzNGcya2c0azJoNGdraDNnNGsyaDRnazIzaDRnazJoMzRnazIzNGdrMmgzNEFuZFNvT24nLFxuICAgKiAgICAgbm9uY2U6ICdmb28nLFxuICAgKiAgICAgdXNlcklEOiAnNjM0NTY1NDM1J1xuICAgKiAgIH1cbiAgICogfVxuICAgKlxuICAgKiBgYGBcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gIHBlcm1pc3Npb25zIExpc3Qgb2YgW3Blcm1pc3Npb25zXShodHRwczovL2RldmVsb3BlcnMuZmFjZWJvb2suY29tL2RvY3MvZmFjZWJvb2stbG9naW4vbGltaXRlZC1sb2dpbi9wZXJtaXNzaW9ucykgdGhpcyBhcHAgaGFzIHVwb24gbG9nZ2luZyBpbi5cbiAgICogQHJldHVybnMge1Byb21pc2U8RmFjZWJvb2tMb2dpblJlc3BvbnNlPn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIGEgc3RhdHVzIG9iamVjdCBpZiBsb2dpbiBzdWNjZWVkcywgYW5kIHJlamVjdHMgaWYgbG9naW4gZmFpbHMuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGxvZ2luV2l0aExpbWl0ZWRUcmFja2luZyhwZXJtaXNzaW9uczogc3RyaW5nW10pOiBQcm9taXNlPEZhY2Vib29rTG9naW5SZXNwb25zZT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB0aGUgdXNlciBoYXMgYXBwcm92ZWQgYWxsIG5lY2Vzc2FyeSBwZXJtaXNzaW9uc1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSAgcGVybWlzc2lvbnMgTGlzdCBvZiBbcGVybWlzc2lvbnNdKGh0dHBzOi8vZGV2ZWxvcGVycy5mYWNlYm9vay5jb20vZG9jcy9mYWNlYm9vay1sb2dpbi9wZXJtaXNzaW9ucykgdG8gY2hlY2sgZm9yXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBhIHN1Y2Nlc3Mgc3RyaW5nIGlmIGFsbCBwYXNzZWQgcGVybWlzc2lvbnMgYXJlIGdyYW50ZWQsIG9yIGFuIGVycm9yIHN0cmluZyBpZiBhbnkgcGVybWlzc2lvbnMgYXJlIG5vdCBncmFudGVkXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGNoZWNrSGFzQ29ycmVjdFBlcm1pc3Npb25zKHBlcm1pc3Npb25zOiBzdHJpbmdbXSk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGRhdGEgYWNjZXNzIGhhcyBleHBpcmVkIGZvciB0aGUgdXNlclxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYSBzdWNjZXNzIHN0cmluZyBpZiBkYXRhIGFjY2VzcyBpcyBleHBpcmVkLCBvciByZWplY3RzIHdpdGggYW4gZXJyb3JcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaXNEYXRhQWNjZXNzRXhwaXJlZCgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWF1dGhvcml6ZSBkYXRhIGFjY2VzcyBhZnRlciBpdCBoYXMgZXhwaXJlZFxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxGYWNlYm9va0xvZ2luUmVzcG9uc2U+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYSBzdGF0dXMgb2JqZWN0IGlmIGxvZ2luIHN1Y2NlZWRzLCBhbmQgcmVqZWN0cyBpZiBsb2dpbiBmYWlscy5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVhdXRob3JpemVEYXRhQWNjZXNzKCk6IFByb21pc2U8RmFjZWJvb2tMb2dpblJlc3BvbnNlPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIExvZ291dCBvZiBGYWNlYm9vay5cbiAgICpcbiAgICogRm9yIG1vcmUgaW5mbyBzZWUgdGhlIFtGYWNlYm9vayBkb2NzXShodHRwczovL2RldmVsb3BlcnMuZmFjZWJvb2suY29tL2RvY3MvcmVmZXJlbmNlL2phdmFzY3JpcHQvRkIubG9nb3V0KVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIG9uIGEgc3VjY2Vzc2Z1bCBsb2dvdXQsIGFuZCByZWplY3RzIGlmIGxvZ291dCBmYWlscy5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgbG9nb3V0KCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZSBpZiBhIHVzZXIgaXMgbG9nZ2VkIGluIHRvIEZhY2Vib29rIGFuZCBoYXMgYXV0aGVudGljYXRlZCB5b3VyIGFwcC4gIFRoZXJlIGFyZSB0aHJlZSBwb3NzaWJsZSBzdGF0ZXMgZm9yIGEgdXNlcjpcbiAgICpcbiAgICogMSkgdGhlIHVzZXIgaXMgbG9nZ2VkIGludG8gRmFjZWJvb2sgYW5kIGhhcyBhdXRoZW50aWNhdGVkIHlvdXIgYXBwbGljYXRpb24gKGNvbm5lY3RlZClcbiAgICogMikgdGhlIHVzZXIgaXMgbG9nZ2VkIGludG8gRmFjZWJvb2sgYnV0IGhhcyBub3QgYXV0aGVudGljYXRlZCB5b3VyIGFwcGxpY2F0aW9uIChub3RfYXV0aG9yaXplZClcbiAgICogMykgdGhlIHVzZXIgaXMgZWl0aGVyIG5vdCBsb2dnZWQgaW50byBGYWNlYm9vayBvciBleHBsaWNpdGx5IGxvZ2dlZCBvdXQgb2YgeW91ciBhcHBsaWNhdGlvbiBzbyBpdCBkb2Vzbid0IGF0dGVtcHQgdG8gY29ubmVjdCB0byBGYWNlYm9vayBhbmQgdGh1cywgd2UgZG9uJ3Qga25vdyBpZiB0aGV5J3ZlIGF1dGhlbnRpY2F0ZWQgeW91ciBhcHBsaWNhdGlvbiBvciBub3QgKHVua25vd24pXG4gICAqXG4gICAqIFJlc29sdmVzIHdpdGggYSByZXNwb25zZSBsaWtlOlxuICAgKlxuICAgKiBgYGBcbiAgICoge1xuICAgKiAgIGF1dGhSZXNwb25zZToge1xuICAgKiAgICAgdXNlcklEOiAnMTIzNDU2Nzg5MTIzNDUnLFxuICAgKiAgICAgYWNjZXNzVG9rZW46ICdrZ2toM2c0MmtoNGcyM2toNGcya2gzNGcya2c0azJoNGdraDNnNGsyaDRnazIzaDRnazJoMzRnazIzNGdrMmgzNEFuZFNvT24nLFxuICAgKiAgICAgZGF0YV9hY2Nlc3NfZXhwaXJhdGlvbl90aW1lOiAnMTYyMzY4MDI0NCcsXG4gICAqICAgICBleHBpcmVzSW46ICc1MTgzNzM4J1xuICAgKiAgIH0sXG4gICAqICAgc3RhdHVzOiAnY29ubmVjdGVkJ1xuICAgKiB9XG4gICAqIGBgYFxuICAgKlxuICAgKiBGb3IgbW9yZSBpbmZvcm1hdGlvbiBzZWUgdGhlIFtGYWNlYm9vayBkb2NzXShodHRwczovL2RldmVsb3BlcnMuZmFjZWJvb2suY29tL2RvY3MvcmVmZXJlbmNlL2phdmFzY3JpcHQvRkIuZ2V0TG9naW5TdGF0dXMpXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBhIHN0YXR1cywgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldExvZ2luU3RhdHVzKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhIEZhY2Vib29rIGFjY2VzcyB0b2tlbiBmb3IgdXNpbmcgRmFjZWJvb2sgc2VydmljZXMuXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBhbiBhY2Nlc3MgdG9rZW4sIG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvclxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRBY2Nlc3NUb2tlbigpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgcHJvZmlsZSBpbmZvcm1hdGlvbiBmb3IgdGhlIGN1cnJlbnRseSBsb2dnZWQgaW4gdXNlclxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggc3VjY2VzcyBkYXRhLCBvciByZWplY3RzIHdpdGggYW4gZXJyb3JcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0Q3VycmVudFByb2ZpbGUoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2hvdyBvbmUgb2YgdmFyaW91cyBGYWNlYm9vayBkaWFsb2dzLiBFeGFtcGxlIG9mIG9wdGlvbnMgZm9yIGEgU2hhcmUgZGlhbG9nOlxuICAgKlxuICAgKiBgYGBcbiAgICoge1xuICAgKiAgIG1ldGhvZDogJ3NoYXJlJyxcbiAgICogICBocmVmOiAnaHR0cDovL2V4YW1wbGUuY29tJyxcbiAgICogICBjYXB0aW9uOiAnU3VjaCBjYXB0aW9uLCB2ZXJ5IGZlZWQuJyxcbiAgICogICBkZXNjcmlwdGlvbjogJ011Y2ggZGVzY3JpcHRpb24nLFxuICAgKiAgIHBpY3R1cmU6ICdodHRwOi8vZXhhbXBsZS5jb20vaW1hZ2UucG5nJ1xuICAgKiB9XG4gICAqIGBgYFxuICAgKlxuICAgKiBGb3IgbW9yZSBvcHRpb25zIHNlZSB0aGUgW0NvcmRvdmEgcGx1Z2luIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9jb3Jkb3ZhLXBsdWdpbi1mYWNlYm9vay1jb25uZWN0L2NvcmRvdmEtcGx1Z2luLWZhY2Vib29rLWNvbm5lY3Qjc2hvdy1hLWRpYWxvZykgYW5kIHRoZSBbRmFjZWJvb2sgZG9jc10oaHR0cHM6Ly9kZXZlbG9wZXJzLmZhY2Vib29rLmNvbS9kb2NzL2phdmFzY3JpcHQvcmVmZXJlbmNlL0ZCLnVpKVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBUaGUgZGlhbG9nIG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHN1Y2Nlc3MgZGF0YSwgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNob3dEaWFsb2cob3B0aW9uczogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTWFrZSBhIGNhbGwgdG8gRmFjZWJvb2sgR3JhcGggQVBJLiBDYW4gdGFrZSBhZGRpdGlvbmFsIHBlcm1pc3Npb25zIGJleW9uZCB0aG9zZSBncmFudGVkIG9uIGxvZ2luLlxuICAgKlxuICAgKiBGb3IgbW9yZSBpbmZvcm1hdGlvbiBzZWU6XG4gICAqXG4gICAqICBDYWxsaW5nIHRoZSBHcmFwaCBBUEkgLSBodHRwczovL2RldmVsb3BlcnMuZmFjZWJvb2suY29tL2RvY3MvamF2YXNjcmlwdC9yZWZlcmVuY2UvRkIuYXBpXG4gICAqICBHcmFwaCBFeHBsb3JlciAtIGh0dHBzOi8vZGV2ZWxvcGVycy5mYWNlYm9vay5jb20vdG9vbHMvZXhwbG9yZXJcbiAgICogIEdyYXBoIEFQSSAtIGh0dHBzOi8vZGV2ZWxvcGVycy5mYWNlYm9vay5jb20vZG9jcy9ncmFwaC1hcGlcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9ICByZXF1ZXN0UGF0aCBHcmFwaCBBUEkgZW5kcG9pbnQgeW91IHdhbnQgdG8gY2FsbFxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSAgcGVybWlzc2lvbnMgTGlzdCBvZiBbcGVybWlzc2lvbnNdKGh0dHBzOi8vZGV2ZWxvcGVycy5mYWNlYm9vay5jb20vZG9jcy9mYWNlYm9vay1sb2dpbi9wZXJtaXNzaW9ucykgZm9yIHRoaXMgcmVxdWVzdC5cbiAgICogQHBhcmFtIHtzdHJpbmd9ICBodHRwTWV0aG9kIEhUVFAgbWV0aG9kIGZvciB0aGUgcmVxdWVzdCwgb25lIG9mIFwiR0VUXCIsIFwiUE9TVFwiLCBvciBcIkRFTEVURVwiIChkZWZhdWx0IGlzIFwiR0VUXCIpXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgcmVzdWx0IG9mIHRoZSByZXF1ZXN0LCBvciByZWplY3RzIHdpdGggYW4gZXJyb3JcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgYXBpKHJlcXVlc3RQYXRoOiBzdHJpbmcsIHBlcm1pc3Npb25zOiBzdHJpbmdbXSwgaHR0cE1ldGhvZD86IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIExvZyBhbiBldmVudC4gIEZvciBtb3JlIGluZm9ybWF0aW9uIHNlZSB0aGUgRXZlbnRzIHNlY3Rpb24gYWJvdmUuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSAgbmFtZSBOYW1lIG9mIHRoZSBldmVudFxuICAgKiBAcGFyYW0ge09iamVjdH0gIFtwYXJhbXNdIEFuIG9iamVjdCBjb250YWluaW5nIGV4dHJhIGRhdGEgdG8gbG9nIHdpdGggdGhlIGV2ZW50XG4gICAqIEBwYXJhbSB7bnVtYmVyfSAgW3ZhbHVlVG9TdW1dIGFueSB2YWx1ZSB0byBiZSBhZGRlZCB0byBhZGRlZCB0byBhIHN1bSBvbiBlYWNoIGV2ZW50XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiAzLFxuICAgIGVycm9ySW5kZXg6IDQsXG4gIH0pXG4gIGxvZ0V2ZW50KG5hbWU6IHN0cmluZywgcGFyYW1zPzogT2JqZWN0LCB2YWx1ZVRvU3VtPzogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlIG9yIGRpc2FibGUgdGhlIGF1dG8gbG9nIGFwcCBldmVudCBmZWF0dXJlIC0gaHR0cHM6Ly9kZXZlbG9wZXJzLmZhY2Vib29rLmNvbS9kb2NzL2FwcC1ldmVudHMvZ2Rwci1jb21wbGlhbmNlL1xuICAgKlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59ICBlbmFibGVkIHZhbHVlIHRvIGJlIHNldFxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogMSxcbiAgICBlcnJvckluZGV4OiAyLFxuICB9KVxuICBzZXRBdXRvTG9nQXBwRXZlbnRzRW5hYmxlZChlbmFibGVkOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEVuYWJsZSBvciBkaXNhYmxlIGNvbGxlY3Rpb24gb2YgYWR2ZXJ0aXNlci1pZFxuICAgKlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59ICBlbmFibGVkIHZhbHVlIHRvIGJlIHNldFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZXRBZHZlcnRpc2VySURDb2xsZWN0aW9uRW5hYmxlZChlbmFibGVkOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEVuYWJsZSBvciBkaXNhYmxlIGFkdmVydGlzZXIgdHJhY2tpbmcgKGlPUyBPbmx5KVxuICAgKlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59ICBlbmFibGVkIHZhbHVlIHRvIGJlIHNldFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZXRBZHZlcnRpc2VyVHJhY2tpbmdFbmFibGVkKGVuYWJsZWQ6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTG9nIGEgcHVyY2hhc2UuIEZvciBtb3JlIGluZm9ybWF0aW9uIHNlZSB0aGUgRXZlbnRzIHNlY3Rpb24gYWJvdmUuXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSAgdmFsdWUgVmFsdWUgb2YgdGhlIHB1cmNoYXNlLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gIGN1cnJlbmN5IFRoZSBjdXJyZW5jeSwgYXMgYW4gW0lTTyA0MjE3IGN1cnJlbmN5IGNvZGVdKGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzQyMTcpXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAgcGFyYW1zIEFuIG9iamVjdCBjb250YWluaW5nIGV4dHJhIGRhdGEgdG8gbG9nIHdpdGggdGhlIGV2ZW50XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGxvZ1B1cmNoYXNlKHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5OiBzdHJpbmcsIHBhcmFtcz86IE9iamVjdCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGRlZmVycmVkIGFwcCBsaW5rXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldERlZmVycmVkQXBwbGluaygpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYW51YWxseSBsb2cgYWN0aXZhdGlvbiBldmVudHNcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgYWN0aXZhdGVBcHAoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==