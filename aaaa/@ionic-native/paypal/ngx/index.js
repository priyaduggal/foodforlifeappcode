import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var PayPal = /** @class */ (function (_super) {
    __extends(PayPal, _super);
    function PayPal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PayPal.prototype.version = function () { return cordova(this, "version", {}, arguments); };
    PayPal.prototype.init = function (clientIdsForEnvironments) { return cordova(this, "init", {}, arguments); };
    PayPal.prototype.prepareToRender = function (environment, configuration) { return cordova(this, "prepareToRender", {}, arguments); };
    PayPal.prototype.renderSinglePaymentUI = function (payment) { return cordova(this, "renderSinglePaymentUI", {}, arguments); };
    PayPal.prototype.clientMetadataID = function () { return cordova(this, "clientMetadataID", {}, arguments); };
    PayPal.prototype.renderFuturePaymentUI = function () { return cordova(this, "renderFuturePaymentUI", {}, arguments); };
    PayPal.prototype.renderProfileSharingUI = function (scopes) { return cordova(this, "renderProfileSharingUI", {}, arguments); };
    PayPal.pluginName = "PayPal";
    PayPal.plugin = "com.paypal.cordova.mobilesdk";
    PayPal.pluginRef = "PayPalMobile";
    PayPal.repo = "https://github.com/paypal/PayPal-Cordova-Plugin";
    PayPal.platforms = ["Android", "iOS"];
    PayPal.decorators = [
        { type: Injectable }
    ];
    return PayPal;
}(IonicNativePlugin));
export { PayPal };
var PayPalPayment = /** @class */ (function () {
    function PayPalPayment(amount, currency, shortDescription, intent, details) {
        /**
         * Optional Build Notation code ("BN code"), obtained from partnerprogram@paypal.com,
         * for your tracking purposes.
         */
        this.bnCode = 'PhoneGap_SP';
        this.amount = amount;
        this.currency = currency;
        this.shortDescription = shortDescription;
        this.intent = intent;
        this.details = details;
    }
    return PayPalPayment;
}());
export { PayPalPayment };
var PayPalItem = /** @class */ (function () {
    /**
     * The PayPalItem class defines an optional itemization for a payment.
     * @see https://developer.paypal.com/docs/api/#item-object for more details.
     * @param {String} name: Name of the item. 127 characters max
     * @param {Number} quantity: Number of units. 10 characters max.
     * @param {String} price: Unit price for this item 10 characters max.
     * May be negative for "coupon" etc
     * @param {String} currency: ISO standard currency code.
     * @param {String} sku: The stock keeping unit for this item. 50 characters max (optional)
     */
    function PayPalItem(name, quantity, price, currency, sku) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
        this.currency = currency;
        this.sku = sku;
    }
    return PayPalItem;
}());
export { PayPalItem };
var PayPalPaymentDetails = /** @class */ (function () {
    /**
     * The PayPalPaymentDetails class defines optional amount details.
     * @param {String} subtotal: Sub-total (amount) of items being paid for. 10 characters max with support for 2 decimal places.
     * @param {String} shipping: Amount charged for shipping. 10 characters max with support for 2 decimal places.
     * @param {String} tax: Amount charged for tax. 10 characters max with support for 2 decimal places.
     */
    function PayPalPaymentDetails(subtotal, shipping, tax) {
        this.subtotal = subtotal;
        this.shipping = shipping;
        this.tax = tax;
    }
    return PayPalPaymentDetails;
}());
export { PayPalPaymentDetails };
var PayPalConfiguration = /** @class */ (function () {
    /**
     * You use a PayPalConfiguration object to configure many aspects of how the SDK behaves.
     * see defaults for options available
     */
    function PayPalConfiguration(options) {
        var defaults = {
            defaultUserEmail: null,
            defaultUserPhoneCountryCode: null,
            defaultUserPhoneNumber: null,
            merchantName: null,
            merchantPrivacyPolicyURL: null,
            merchantUserAgreementURL: null,
            acceptCreditCards: true,
            payPalShippingAddressOption: 0,
            rememberUser: true,
            languageOrLocale: null,
            disableBlurWhenBackgrounding: false,
            presentingInPopover: false,
            forceDefaultsInSandbox: false,
            sandboxUserPassword: null,
            sandboxUserPin: null,
        };
        if (options && typeof options === 'object') {
            for (var i in options) {
                if (defaults.hasOwnProperty(i)) {
                    defaults[i] = options[i];
                }
            }
        }
        return defaults;
    }
    return PayPalConfiguration;
}());
export { PayPalConfiguration };
var PayPalShippingAddress = /** @class */ (function () {
    /**
     * See the documentation of the individual properties for more detail.
     * @param {String} recipientName: Name of the recipient at this address. 50 characters max.
     * @param {String} line1: Line 1 of the address (e.g., Number, street, etc). 100 characters max.
     * @param {String} line2: Line 2 of the address (e.g., Suite, apt #, etc). 100 characters max. Optional.
     * @param {String} city: City name. 50 characters max.
     * @param {String} state: 2-letter code for US states, and the equivalent for other countries. 100 characters max. Required in certain countries.
     * @param {String} postalCode: ZIP code or equivalent is usually required for countries that have them. 20 characters max. Required in certain countries.
     * @param {String} countryCode: 2-letter country code. 2 characters max.
     */
    function PayPalShippingAddress(recipientName, line1, line2, city, state, postalCode, countryCode) {
        this.recipientName = recipientName;
        this.line1 = line1;
        this.line2 = line2;
        this.city = city;
        this.state = state;
        this.postalCode = postalCode;
        this.countryCode = countryCode;
    }
    return PayPalShippingAddress;
}());
export { PayPalShippingAddress };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3BheXBhbC9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUF5RTVDLDBCQUFpQjs7OztJQU0zQyx3QkFBTztJQWNQLHFCQUFJLGFBQUMsd0JBQTJDO0lBY2hELGdDQUFlLGFBQUMsV0FBbUIsRUFBRSxhQUFrQztJQWF2RSxzQ0FBcUIsYUFBQyxPQUFzQjtJQWU1QyxpQ0FBZ0I7SUFTaEIsc0NBQXFCO0lBWXJCLHVDQUFzQixhQUFDLE1BQWdCOzs7Ozs7O2dCQXBGeEMsVUFBVTs7aUJBekVYO0VBMEU0QixpQkFBaUI7U0FBaEMsTUFBTTs7SUFpR2pCLHVCQUNFLE1BQWMsRUFDZCxRQUFnQixFQUNoQixnQkFBd0IsRUFDeEIsTUFBYyxFQUNkLE9BQThCO1FBeUJoQzs7O1dBR0c7UUFDSCxXQUFNLEdBQUcsYUFBYSxDQUFDO1FBM0JyQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUM7UUFDekMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDekIsQ0FBQzt3QkF2TEg7Ozs7SUFrUEU7Ozs7Ozs7OztPQVNHO0lBQ0gsb0JBQVksSUFBWSxFQUFFLFFBQWdCLEVBQUUsS0FBYSxFQUFFLFFBQWdCLEVBQUUsR0FBWTtRQUN2RixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNqQixDQUFDO3FCQWxRSDs7OztJQTBTRTs7Ozs7T0FLRztJQUNILDhCQUFZLFFBQWdCLEVBQUUsUUFBZ0IsRUFBRSxHQUFXO1FBQ3pELElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ2pCLENBQUM7K0JBcFRIOzs7O0lBbWFFOzs7T0FHRztJQUNILDZCQUFZLE9BQW9DO1FBQzlDLElBQU0sUUFBUSxHQUErQjtZQUMzQyxnQkFBZ0IsRUFBRSxJQUFJO1lBQ3RCLDJCQUEyQixFQUFFLElBQUk7WUFDakMsc0JBQXNCLEVBQUUsSUFBSTtZQUM1QixZQUFZLEVBQUUsSUFBSTtZQUNsQix3QkFBd0IsRUFBRSxJQUFJO1lBQzlCLHdCQUF3QixFQUFFLElBQUk7WUFDOUIsaUJBQWlCLEVBQUUsSUFBSTtZQUN2QiwyQkFBMkIsRUFBRSxDQUFDO1lBQzlCLFlBQVksRUFBRSxJQUFJO1lBQ2xCLGdCQUFnQixFQUFFLElBQUk7WUFDdEIsNEJBQTRCLEVBQUUsS0FBSztZQUNuQyxtQkFBbUIsRUFBRSxLQUFLO1lBQzFCLHNCQUFzQixFQUFFLEtBQUs7WUFDN0IsbUJBQW1CLEVBQUUsSUFBSTtZQUN6QixjQUFjLEVBQUUsSUFBSTtTQUNyQixDQUFDO1FBRUYsSUFBSSxPQUFPLElBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxFQUFFO1lBQzFDLEtBQUssSUFBTSxDQUFDLElBQUksT0FBTyxFQUFFO2dCQUN2QixJQUFJLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUU7b0JBQzlCLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQzFCO2FBQ0Y7U0FDRjtRQUVELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7OEJBbmNIOzs7O0lBMGNFOzs7Ozs7Ozs7T0FTRztJQUNILCtCQUNFLGFBQXFCLEVBQ3JCLEtBQWEsRUFDYixLQUFhLEVBQ2IsSUFBWSxFQUNaLEtBQWEsRUFDYixVQUFrQixFQUNsQixXQUFtQjtRQUVuQixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztJQUNqQyxDQUFDO2dDQXBlSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIFBheVBhbFxuICogQGRlc2NyaXB0aW9uXG4gKiBQYXlQYWwgcGx1Z2luIGZvciBDb3Jkb3ZhL0lvbmljIEFwcGxpY2F0aW9uc1xuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgUGF5UGFsLCBQYXlQYWxQYXltZW50LCBQYXlQYWxDb25maWd1cmF0aW9uIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9wYXlwYWwvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHBheVBhbDogUGF5UGFsKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5wYXlQYWwuaW5pdCh7XG4gKiAgIFBheVBhbEVudmlyb25tZW50UHJvZHVjdGlvbjogJ1lPVVJfUFJPRFVDVElPTl9DTElFTlRfSUQnLFxuICogICBQYXlQYWxFbnZpcm9ubWVudFNhbmRib3g6ICdZT1VSX1NBTkRCT1hfQ0xJRU5UX0lEJ1xuICogfSkudGhlbigoKSA9PiB7XG4gKiAgIC8vIEVudmlyb25tZW50czogUGF5UGFsRW52aXJvbm1lbnROb05ldHdvcmssIFBheVBhbEVudmlyb25tZW50U2FuZGJveCwgUGF5UGFsRW52aXJvbm1lbnRQcm9kdWN0aW9uXG4gKiAgIHRoaXMucGF5UGFsLnByZXBhcmVUb1JlbmRlcignUGF5UGFsRW52aXJvbm1lbnRTYW5kYm94JywgbmV3IFBheVBhbENvbmZpZ3VyYXRpb24oe1xuICogICAgIC8vIE9ubHkgbmVlZGVkIGlmIHlvdSBnZXQgYW4gXCJJbnRlcm5hbCBTZXJ2aWNlIEVycm9yXCIgYWZ0ZXIgUGF5UGFsIGxvZ2luIVxuICogICAgIC8vcGF5UGFsU2hpcHBpbmdBZGRyZXNzT3B0aW9uOiAyIC8vIFBheVBhbFNoaXBwaW5nQWRkcmVzc09wdGlvblBheVBhbFxuICogICB9KSkudGhlbigoKSA9PiB7XG4gKiAgICAgbGV0IHBheW1lbnQgPSBuZXcgUGF5UGFsUGF5bWVudCgnMy4zMycsICdVU0QnLCAnRGVzY3JpcHRpb24nLCAnc2FsZScpO1xuICogICAgIHRoaXMucGF5UGFsLnJlbmRlclNpbmdsZVBheW1lbnRVSShwYXltZW50KS50aGVuKCgpID0+IHtcbiAqICAgICAgIC8vIFN1Y2Nlc3NmdWxseSBwYWlkXG4gKlxuICogICAgICAgLy8gRXhhbXBsZSBzYW5kYm94IHJlc3BvbnNlXG4gKiAgICAgICAvL1xuICogICAgICAgLy8ge1xuICogICAgICAgLy8gICBcImNsaWVudFwiOiB7XG4gKiAgICAgICAvLyAgICAgXCJlbnZpcm9ubWVudFwiOiBcInNhbmRib3hcIixcbiAqICAgICAgIC8vICAgICBcInByb2R1Y3RfbmFtZVwiOiBcIlBheVBhbCBpT1MgU0RLXCIsXG4gKiAgICAgICAvLyAgICAgXCJwYXlwYWxfc2RrX3ZlcnNpb25cIjogXCIyLjE2LjBcIixcbiAqICAgICAgIC8vICAgICBcInBsYXRmb3JtXCI6IFwiaU9TXCJcbiAqICAgICAgIC8vICAgfSxcbiAqICAgICAgIC8vICAgXCJyZXNwb25zZV90eXBlXCI6IFwicGF5bWVudFwiLFxuICogICAgICAgLy8gICBcInJlc3BvbnNlXCI6IHtcbiAqICAgICAgIC8vICAgICBcImlkXCI6IFwiUEFZLTFBQjIzNDU2Q0Q3ODkwMTJFRjM0R0hJSlwiLFxuICogICAgICAgLy8gICAgIFwic3RhdGVcIjogXCJhcHByb3ZlZFwiLFxuICogICAgICAgLy8gICAgIFwiY3JlYXRlX3RpbWVcIjogXCIyMDE2LTEwLTAzVDEzOjMzOjMzWlwiLFxuICogICAgICAgLy8gICAgIFwiaW50ZW50XCI6IFwic2FsZVwiXG4gKiAgICAgICAvLyAgIH1cbiAqICAgICAgIC8vIH1cbiAqICAgICB9LCAoKSA9PiB7XG4gKiAgICAgICAvLyBFcnJvciBvciByZW5kZXIgZGlhbG9nIGNsb3NlZCB3aXRob3V0IGJlaW5nIHN1Y2Nlc3NmdWxcbiAqICAgICB9KTtcbiAqICAgfSwgKCkgPT4ge1xuICogICAgIC8vIEVycm9yIGluIGNvbmZpZ3VyYXRpb25cbiAqICAgfSk7XG4gKiB9LCAoKSA9PiB7XG4gKiAgIC8vIEVycm9yIGluIGluaXRpYWxpemF0aW9uLCBtYXliZSBQYXlQYWwgaXNuJ3Qgc3VwcG9ydGVkIG9yIHNvbWV0aGluZyBlbHNlXG4gKiB9KTtcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIFBheVBhbEVudmlyb25tZW50XG4gKiBQYXlQYWxDb25maWd1cmF0aW9uT3B0aW9uc1xuICogQGNsYXNzZXNcbiAqIFBheVBhbFBheW1lbnRcbiAqIFBheVBhbEl0ZW1cbiAqIFBheVBhbFBheW1lbnREZXRhaWxzXG4gKiBQYXlQYWxTaGlwcGluZ0FkZHJlc3NcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdQYXlQYWwnLFxuICBwbHVnaW46ICdjb20ucGF5cGFsLmNvcmRvdmEubW9iaWxlc2RrJyxcbiAgcGx1Z2luUmVmOiAnUGF5UGFsTW9iaWxlJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9wYXlwYWwvUGF5UGFsLUNvcmRvdmEtUGx1Z2luJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBheVBhbCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFJldHJpZXZlIHRoZSB2ZXJzaW9uIG9mIHRoZSBQYXlQYWwgaU9TIFNESyBsaWJyYXJ5LiBVc2VmdWwgd2hlbiBjb250YWN0aW5nIHN1cHBvcnQuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHZlcnNpb24oKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogWW91IG11c3QgcHJlY29ubmVjdCB0byBQYXlQYWwgdG8gcHJlcGFyZSB0aGUgZGV2aWNlIGZvciBwcm9jZXNzaW5nIHBheW1lbnRzLlxuICAgKiBUaGlzIGltcHJvdmVzIHRoZSB1c2VyIGV4cGVyaWVuY2UsIGJ5IG1ha2luZyB0aGUgcHJlc2VudGF0aW9uIG9mIHRoZVxuICAgKiBVSSBmYXN0ZXIuIFRoZSBwcmVjb25uZWN0IGlzIHZhbGlkIGZvciBhIGxpbWl0ZWQgdGltZSwgc29cbiAgICogdGhlIHJlY29tbWVuZGVkIHRpbWUgdG8gcHJlY29ubmVjdCBpcyBvbiBwYWdlIGxvYWQuXG4gICAqXG4gICAqIEBwYXJhbSB7UGF5UGFsRW52aXJvbm1lbnR9IGNsaWVudElkc0ZvckVudmlyb25tZW50czogc2V0IG9mIGNsaWVudCBpZHMgZm9yIGVudmlyb25tZW50c1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBpbml0KGNsaWVudElkc0ZvckVudmlyb25tZW50czogUGF5UGFsRW52aXJvbm1lbnQpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBZb3UgbXVzdCBwcmVjb25uZWN0IHRvIFBheVBhbCB0byBwcmVwYXJlIHRoZSBkZXZpY2UgZm9yIHByb2Nlc3NpbmcgcGF5bWVudHMuXG4gICAqIFRoaXMgaW1wcm92ZXMgdGhlIHVzZXIgZXhwZXJpZW5jZSwgYnkgbWFraW5nIHRoZSBwcmVzZW50YXRpb24gb2YgdGhlIFVJIGZhc3Rlci5cbiAgICogVGhlIHByZWNvbm5lY3QgaXMgdmFsaWQgZm9yIGEgbGltaXRlZCB0aW1lLCBzbyB0aGUgcmVjb21tZW5kZWQgdGltZSB0byBwcmVjb25uZWN0IGlzIG9uIHBhZ2UgbG9hZC5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IGVudmlyb25tZW50OiBhdmFpbGFibGUgb3B0aW9ucyBhcmUgXCJQYXlQYWxFbnZpcm9ubWVudE5vTmV0d29ya1wiLCBcIlBheVBhbEVudmlyb25tZW50UHJvZHVjdGlvblwiIGFuZCBcIlBheVBhbEVudmlyb25tZW50U2FuZGJveFwiXG4gICAqIEBwYXJhbSB7UGF5UGFsQ29uZmlndXJhdGlvbn0gY29uZmlndXJhdGlvbjogUGF5UGFsQ29uZmlndXJhdGlvbiBvYmplY3QsIGZvciBGdXR1cmUgUGF5bWVudHMgbWVyY2hhbnROYW1lLCBtZXJjaGFudFByaXZhY3lQb2xpY3lVUkwgYW5kIG1lcmNoYW50VXNlckFncmVlbWVudFVSTCBtdXN0IGJlIHNldCBiZSBzZXRcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcHJlcGFyZVRvUmVuZGVyKGVudmlyb25tZW50OiBzdHJpbmcsIGNvbmZpZ3VyYXRpb246IFBheVBhbENvbmZpZ3VyYXRpb24pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydCBQYXlQYWwgVUkgdG8gY29sbGVjdCBwYXltZW50IGZyb20gdGhlIHVzZXIuXG4gICAqIFNlZSBodHRwczovL2RldmVsb3Blci5wYXlwYWwuY29tL3dlYmFwcHMvZGV2ZWxvcGVyL2RvY3MvaW50ZWdyYXRpb24vbW9iaWxlL2lvcy1pbnRlZ3JhdGlvbi1ndWlkZS9cbiAgICogZm9yIG1vcmUgZG9jdW1lbnRhdGlvbiBvZiB0aGUgcGFyYW1zLlxuICAgKlxuICAgKiBAcGFyYW0ge1BheVBhbFBheW1lbnR9IHBheW1lbnQgUGF5UGFsUGF5bWVudCBvYmplY3RcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVuZGVyU2luZ2xlUGF5bWVudFVJKHBheW1lbnQ6IFBheVBhbFBheW1lbnQpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBPbmNlIGEgdXNlciBoYXMgY29uc2VudGVkIHRvIGZ1dHVyZSBwYXltZW50cywgd2hlbiB0aGUgdXNlciBzdWJzZXF1ZW50bHkgaW5pdGlhdGVzIGEgUGF5UGFsIHBheW1lbnRcbiAgICogZnJvbSB0aGVpciBkZXZpY2UgdG8gYmUgY29tcGxldGVkIGJ5IHlvdXIgc2VydmVyLCBQYXlQYWwgdXNlcyBhIENvcnJlbGF0aW9uIElEIHRvIHZlcmlmeSB0aGF0IHRoZVxuICAgKiBwYXltZW50IGlzIG9yaWdpbmF0aW5nIGZyb20gYSB2YWxpZCwgdXNlci1jb25zZW50ZWQgZGV2aWNlK2FwcGxpY2F0aW9uLlxuICAgKiBUaGlzIGhlbHBzIHJlZHVjZSBmcmF1ZCBhbmQgZGVjcmVhc2UgZGVjbGluZXMuXG4gICAqIFRoaXMgbWV0aG9kIE1VU1QgYmUgY2FsbGVkIHByaW9yIHRvIGluaXRpYXRpbmcgYSBwcmUtY29uc2VudGVkIHBheW1lbnQgKGEgXCJmdXR1cmUgcGF5bWVudFwiKSBmcm9tIGEgbW9iaWxlIGRldmljZS5cbiAgICogUGFzcyB0aGUgcmVzdWx0IHRvIHlvdXIgc2VydmVyLCB0byBpbmNsdWRlIGluIHRoZSBwYXltZW50IHJlcXVlc3Qgc2VudCB0byBQYXlQYWwuXG4gICAqIERvIG5vdCBvdGhlcndpc2UgY2FjaGUgb3Igc3RvcmUgdGhpcyB2YWx1ZS5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgY2xpZW50TWV0YWRhdGFJRCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBQbGVhc2UgUmVhZCBEb2NzIG9uIEZ1dHVyZSBQYXltZW50cyBhdCBodHRwczovL2dpdGh1Yi5jb20vcGF5cGFsL1BheVBhbC1pT1MtU0RLI2Z1dHVyZS1wYXltZW50c1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICByZW5kZXJGdXR1cmVQYXltZW50VUkoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUGxlYXNlIFJlYWQgRG9jcyBvbiBQcm9maWxlIFNoYXJpbmcgYXQgaHR0cHM6Ly9naXRodWIuY29tL3BheXBhbC9QYXlQYWwtaU9TLVNESyNwcm9maWxlLXNoYXJpbmdcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gc2NvcGVzIHNjb3BlcyBTZXQgb2YgcmVxdWVzdGVkIHNjb3BlLXZhbHVlcy4gQWNjZXB0ZWQgc2NvcGVzIGFyZTogb3BlbmlkLCBwcm9maWxlLCBhZGRyZXNzLCBlbWFpbCwgcGhvbmUsIGZ1dHVyZXBheW1lbnRzIGFuZCBwYXlwYWxhdHRyaWJ1dGVzXG4gICAqIFNlZSBodHRwczovL2RldmVsb3Blci5wYXlwYWwuY29tL2RvY3MvaW50ZWdyYXRpb24vZGlyZWN0L2lkZW50aXR5L2F0dHJpYnV0ZXMvIGZvciBtb3JlIGRldGFpbHNcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVuZGVyUHJvZmlsZVNoYXJpbmdVSShzY29wZXM6IHN0cmluZ1tdKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBQYXlQYWxFbnZpcm9ubWVudCB7XG4gIFBheVBhbEVudmlyb25tZW50UHJvZHVjdGlvbjogc3RyaW5nO1xuICBQYXlQYWxFbnZpcm9ubWVudFNhbmRib3g6IHN0cmluZztcbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBQYXlQYWxQYXltZW50IHtcbiAgY29uc3RydWN0b3IoXG4gICAgYW1vdW50OiBzdHJpbmcsXG4gICAgY3VycmVuY3k6IHN0cmluZyxcbiAgICBzaG9ydERlc2NyaXB0aW9uOiBzdHJpbmcsXG4gICAgaW50ZW50OiBzdHJpbmcsXG4gICAgZGV0YWlscz86IFBheVBhbFBheW1lbnREZXRhaWxzXG4gICkge1xuICAgIHRoaXMuYW1vdW50ID0gYW1vdW50O1xuICAgIHRoaXMuY3VycmVuY3kgPSBjdXJyZW5jeTtcbiAgICB0aGlzLnNob3J0RGVzY3JpcHRpb24gPSBzaG9ydERlc2NyaXB0aW9uO1xuICAgIHRoaXMuaW50ZW50ID0gaW50ZW50O1xuICAgIHRoaXMuZGV0YWlscyA9IGRldGFpbHM7XG4gIH1cblxuICAvKipcbiAgICogVGhlIGFtb3VudCBvZiB0aGUgcGF5bWVudC5cbiAgICovXG4gIGFtb3VudDogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIElTTyA0MjE3IGN1cnJlbmN5IGZvciB0aGUgcGF5bWVudC5cbiAgICovXG4gIGN1cnJlbmN5OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBBIHNob3J0IGRlc2NyaXB0aW9uIG9mIHRoZSBwYXltZW50LlxuICAgKi9cbiAgc2hvcnREZXNjcmlwdGlvbjogc3RyaW5nO1xuICAvKipcbiAgICogXCJTYWxlXCIgZm9yIGFuIGltbWVkaWF0ZSBwYXltZW50LlxuICAgKi9cbiAgaW50ZW50OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBPcHRpb25hbCBCdWlsZCBOb3RhdGlvbiBjb2RlIChcIkJOIGNvZGVcIiksIG9idGFpbmVkIGZyb20gcGFydG5lcnByb2dyYW1AcGF5cGFsLmNvbSxcbiAgICogZm9yIHlvdXIgdHJhY2tpbmcgcHVycG9zZXMuXG4gICAqL1xuICBibkNvZGUgPSAnUGhvbmVHYXBfU1AnO1xuICAvKipcbiAgICogT3B0aW9uYWwgaW52b2ljZSBudW1iZXIsIGZvciB5b3VyIHRyYWNraW5nIHB1cnBvc2VzLiAodXAgdG8gMjU2IGNoYXJhY3RlcnMpXG4gICAqL1xuICBpbnZvaWNlTnVtYmVyOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBPcHRpb25hbCB0ZXh0LCBmb3IgeW91ciB0cmFja2luZyBwdXJwb3Nlcy4gKHVwIHRvIDI1NiBjaGFyYWN0ZXJzKVxuICAgKi9cbiAgY3VzdG9tOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBPcHRpb25hbCB0ZXh0IHdoaWNoIHdpbGwgYXBwZWFyIG9uIHRoZSBjdXN0b21lcidzIGNyZWRpdCBjYXJkIHN0YXRlbWVudC4gKHVwIHRvIDIyIGNoYXJhY3RlcnMpXG4gICAqL1xuICBzb2Z0RGVzY3JpcHRvcjogc3RyaW5nO1xuICAvKipcbiAgICogT3B0aW9uYWwgYXJyYXkgb2YgUGF5UGFsSXRlbSBvYmplY3RzLlxuICAgKi9cbiAgaXRlbXM6IFBheVBhbEl0ZW1bXTtcblxuICAvKipcbiAgICogT3B0aW9uYWwgcGF5ZWUgZW1haWwsIGlmIHlvdXIgYXBwIGlzIHBheWluZyBhIHRoaXJkLXBhcnR5IG1lcmNoYW50LlxuICAgKiBUaGUgcGF5ZWUncyBlbWFpbC4gSXQgbXVzdCBiZSBhIHZhbGlkIFBheVBhbCBlbWFpbCBhZGRyZXNzLlxuICAgKi9cbiAgcGF5ZWVFbWFpbDogc3RyaW5nO1xuICAvKipcbiAgICogT3B0aW9uYWwgY3VzdG9tZXIgc2hpcHBpbmcgYWRkcmVzcywgaWYgeW91ciBhcHAgd2lzaGVzIHRvIHByb3ZpZGUgdGhpcyB0byB0aGUgU0RLLlxuICAgKi9cbiAgc2hpcHBpbmdBZGRyZXNzOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBPcHRpb25hbCBQYXlQYWxQYXltZW50RGV0YWlscyBvYmplY3RcbiAgICovXG4gIGRldGFpbHM6IFBheVBhbFBheW1lbnREZXRhaWxzO1xufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIFBheVBhbEl0ZW0ge1xuICAvKipcbiAgICogVGhlIFBheVBhbEl0ZW0gY2xhc3MgZGVmaW5lcyBhbiBvcHRpb25hbCBpdGVtaXphdGlvbiBmb3IgYSBwYXltZW50LlxuICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLnBheXBhbC5jb20vZG9jcy9hcGkvI2l0ZW0tb2JqZWN0IGZvciBtb3JlIGRldGFpbHMuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lOiBOYW1lIG9mIHRoZSBpdGVtLiAxMjcgY2hhcmFjdGVycyBtYXhcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHF1YW50aXR5OiBOdW1iZXIgb2YgdW5pdHMuIDEwIGNoYXJhY3RlcnMgbWF4LlxuICAgKiBAcGFyYW0ge1N0cmluZ30gcHJpY2U6IFVuaXQgcHJpY2UgZm9yIHRoaXMgaXRlbSAxMCBjaGFyYWN0ZXJzIG1heC5cbiAgICogTWF5IGJlIG5lZ2F0aXZlIGZvciBcImNvdXBvblwiIGV0Y1xuICAgKiBAcGFyYW0ge1N0cmluZ30gY3VycmVuY3k6IElTTyBzdGFuZGFyZCBjdXJyZW5jeSBjb2RlLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gc2t1OiBUaGUgc3RvY2sga2VlcGluZyB1bml0IGZvciB0aGlzIGl0ZW0uIDUwIGNoYXJhY3RlcnMgbWF4IChvcHRpb25hbClcbiAgICovXG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgcXVhbnRpdHk6IG51bWJlciwgcHJpY2U6IHN0cmluZywgY3VycmVuY3k6IHN0cmluZywgc2t1Pzogc3RyaW5nKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnF1YW50aXR5ID0gcXVhbnRpdHk7XG4gICAgdGhpcy5wcmljZSA9IHByaWNlO1xuICAgIHRoaXMuY3VycmVuY3kgPSBjdXJyZW5jeTtcbiAgICB0aGlzLnNrdSA9IHNrdTtcbiAgfVxuICAvKipcbiAgICogTmFtZSBvZiB0aGUgaXRlbS4gMTI3IGNoYXJhY3RlcnMgbWF4XG4gICAqL1xuICBuYW1lOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBOdW1iZXIgb2YgdW5pdHMuIDEwIGNoYXJhY3RlcnMgbWF4LlxuICAgKi9cbiAgcXVhbnRpdHk6IG51bWJlcjtcbiAgLyoqXG4gICAqIFVuaXQgcHJpY2UgZm9yIHRoaXMgaXRlbSAxMCBjaGFyYWN0ZXJzIG1heC5cbiAgICovXG4gIHByaWNlOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBJU08gc3RhbmRhcmQgY3VycmVuY3kgY29kZS5cbiAgICovXG4gIGN1cnJlbmN5OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgc3RvY2sga2VlcGluZyB1bml0IGZvciB0aGlzIGl0ZW0uIDUwIGNoYXJhY3RlcnMgbWF4IChvcHRpb25hbClcbiAgICovXG4gIHNrdT86IHN0cmluZztcbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBQYXlQYWxQYXltZW50RGV0YWlscyB7XG4gIC8qKlxuICAgKiBTdWItdG90YWwgKGFtb3VudCkgb2YgaXRlbXMgYmVpbmcgcGFpZCBmb3IuIDEwIGNoYXJhY3RlcnMgbWF4IHdpdGggc3VwcG9ydCBmb3IgMiBkZWNpbWFsIHBsYWNlcy5cbiAgICovXG4gIHN1YnRvdGFsOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBBbW91bnQgY2hhcmdlZCBmb3Igc2hpcHBpbmcuIDEwIGNoYXJhY3RlcnMgbWF4IHdpdGggc3VwcG9ydCBmb3IgMiBkZWNpbWFsIHBsYWNlcy5cbiAgICovXG4gIHNoaXBwaW5nOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBBbW91bnQgY2hhcmdlZCBmb3IgdGF4LiAxMCBjaGFyYWN0ZXJzIG1heCB3aXRoIHN1cHBvcnQgZm9yIDIgZGVjaW1hbCBwbGFjZXMuXG4gICAqL1xuICB0YXg6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIFBheVBhbFBheW1lbnREZXRhaWxzIGNsYXNzIGRlZmluZXMgb3B0aW9uYWwgYW1vdW50IGRldGFpbHMuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBzdWJ0b3RhbDogU3ViLXRvdGFsIChhbW91bnQpIG9mIGl0ZW1zIGJlaW5nIHBhaWQgZm9yLiAxMCBjaGFyYWN0ZXJzIG1heCB3aXRoIHN1cHBvcnQgZm9yIDIgZGVjaW1hbCBwbGFjZXMuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBzaGlwcGluZzogQW1vdW50IGNoYXJnZWQgZm9yIHNoaXBwaW5nLiAxMCBjaGFyYWN0ZXJzIG1heCB3aXRoIHN1cHBvcnQgZm9yIDIgZGVjaW1hbCBwbGFjZXMuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB0YXg6IEFtb3VudCBjaGFyZ2VkIGZvciB0YXguIDEwIGNoYXJhY3RlcnMgbWF4IHdpdGggc3VwcG9ydCBmb3IgMiBkZWNpbWFsIHBsYWNlcy5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHN1YnRvdGFsOiBzdHJpbmcsIHNoaXBwaW5nOiBzdHJpbmcsIHRheDogc3RyaW5nKSB7XG4gICAgdGhpcy5zdWJ0b3RhbCA9IHN1YnRvdGFsO1xuICAgIHRoaXMuc2hpcHBpbmcgPSBzaGlwcGluZztcbiAgICB0aGlzLnRheCA9IHRheDtcbiAgfVxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBQYXlQYWxDb25maWd1cmF0aW9uT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBXaWxsIGJlIG92ZXJyaWRkZW4gYnkgZW1haWwgdXNlZCBpbiBtb3N0IHJlY2VudCBQYXlQYWwgbG9naW4uXG4gICAqL1xuICBkZWZhdWx0VXNlckVtYWlsPzogc3RyaW5nO1xuICAvKipcbiAgICogV2lsbCBiZSBvdmVycmlkZGVuIGJ5IHBob25lIGNvdW50cnkgY29kZSB1c2VkIGluIG1vc3QgcmVjZW50IFBheVBhbCBsb2dpblxuICAgKi9cbiAgZGVmYXVsdFVzZXJQaG9uZUNvdW50cnlDb2RlPzogc3RyaW5nO1xuICAvKipcbiAgICogV2lsbCBiZSBvdmVycmlkZGVuIGJ5IHBob25lIG51bWJlciB1c2VkIGluIG1vc3QgcmVjZW50IFBheVBhbCBsb2dpbi5cbiAgICovXG4gIGRlZmF1bHRVc2VyUGhvbmVOdW1iZXI/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBZb3VyIGNvbXBhbnkgbmFtZSwgYXMgaXQgc2hvdWxkIGJlIGRpc3BsYXllZCB0byB0aGUgdXNlciB3aGVuIHJlcXVlc3RpbmcgY29uc2VudCB2aWEgYSBQYXlQYWxGdXR1cmVQYXltZW50Vmlld0NvbnRyb2xsZXIuXG4gICAqL1xuICBtZXJjaGFudE5hbWU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBVUkwgb2YgeW91ciBjb21wYW55J3MgcHJpdmFjeSBwb2xpY3ksIHdoaWNoIHdpbGwgYmUgb2ZmZXJlZCB0byB0aGUgdXNlciB3aGVuIHJlcXVlc3RpbmcgY29uc2VudCB2aWEgYSBQYXlQYWxGdXR1cmVQYXltZW50Vmlld0NvbnRyb2xsZXIuXG4gICAqL1xuICBtZXJjaGFudFByaXZhY3lQb2xpY3lVUkw/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBVUkwgb2YgeW91ciBjb21wYW55J3MgdXNlciBhZ3JlZW1lbnQsIHdoaWNoIHdpbGwgYmUgb2ZmZXJlZCB0byB0aGUgdXNlciB3aGVuIHJlcXVlc3RpbmcgY29uc2VudCB2aWEgYSBQYXlQYWxGdXR1cmVQYXltZW50Vmlld0NvbnRyb2xsZXIuXG4gICAqL1xuICBtZXJjaGFudFVzZXJBZ3JlZW1lbnRVUkw/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBJZiBzZXQgdG8gTk8sIHRoZSBTREsgd2lsbCBvbmx5IHN1cHBvcnQgcGF5aW5nIHdpdGggUGF5UGFsLCBub3Qgd2l0aCBjcmVkaXQgY2FyZHMuXG4gICAqIFRoaXMgYXBwbGllcyBvbmx5IHRvIHNpbmdsZSBwYXltZW50cyAodmlhIFBheVBhbFBheW1lbnRWaWV3Q29udHJvbGxlcikuXG4gICAqIEZ1dHVyZSBwYXltZW50cyAodmlhIFBheVBhbEZ1dHVyZVBheW1lbnRWaWV3Q29udHJvbGxlcikgYWx3YXlzIHVzZSBQYXlQYWwuXG4gICAqIERlZmF1bHRzIHRvIHRydWVcbiAgICovXG4gIGFjY2VwdENyZWRpdENhcmRzPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIEZvciBzaW5nbGUgcGF5bWVudHMsIG9wdGlvbnMgZm9yIHRoZSBzaGlwcGluZyBhZGRyZXNzLlxuICAgKiAtIDAgLSBQYXlQYWxTaGlwcGluZ0FkZHJlc3NPcHRpb25Ob25lOiBubyBzaGlwcGluZyBhZGRyZXNzIGFwcGxpZXMuXG4gICAqIC0gMSAtIFBheVBhbFNoaXBwaW5nQWRkcmVzc09wdGlvblByb3ZpZGVkOiBzaGlwcGluZyBhZGRyZXNzIHdpbGwgYmUgcHJvdmlkZWQgYnkgeW91ciBhcHAsXG4gICAqICAgaW4gdGhlIHNoaXBwaW5nQWRkcmVzcyBwcm9wZXJ0eSBvZiBQYXlQYWxQYXltZW50LlxuICAgKiAtIDIgLSBQYXlQYWxTaGlwcGluZ0FkZHJlc3NPcHRpb25QYXlQYWw6IHVzZXIgd2lsbCBjaG9vc2UgZnJvbSBzaGlwcGluZyBhZGRyZXNzZXMgb24gZmlsZVxuICAgKiAgIGZvciB0aGVpciBQYXlQYWwgYWNjb3VudC5cbiAgICogLSAzIC0gUGF5UGFsU2hpcHBpbmdBZGRyZXNzT3B0aW9uQm90aDogdXNlciB3aWxsIGNob29zZSBmcm9tIHRoZSBzaGlwcGluZyBhZGRyZXNzIHByb3ZpZGVkIGJ5IHlvdXIgYXBwLFxuICAgKiAgIGluIHRoZSBzaGlwcGluZ0FkZHJlc3MgcHJvcGVydHkgb2YgUGF5UGFsUGF5bWVudCwgcGx1cyB0aGUgc2hpcHBpbmcgYWRkcmVzc2VzIG9uIGZpbGUgZm9yIHRoZSB1c2VyJ3MgUGF5UGFsIGFjY291bnQuXG4gICAqIERlZmF1bHRzIHRvIDAgKFBheVBhbFNoaXBwaW5nQWRkcmVzc09wdGlvbk5vbmUpLlxuICAgKi9cbiAgcGF5UGFsU2hpcHBpbmdBZGRyZXNzT3B0aW9uPzogbnVtYmVyO1xuICAvKipcbiAgICogSWYgc2V0IHRvIFlFUywgdGhlbiBpZiB0aGUgdXNlciBwYXlzIHZpYSB0aGVpciBQYXlQYWwgYWNjb3VudCxcbiAgICogdGhlIFNESyB3aWxsIHJlbWVtYmVyIHRoZSB1c2VyJ3MgUGF5UGFsIHVzZXJuYW1lIG9yIHBob25lIG51bWJlcjtcbiAgICogaWYgdGhlIHVzZXIgcGF5cyB2aWEgdGhlaXIgY3JlZGl0IGNhcmQsIHRoZW4gdGhlIFNESyB3aWxsIHJlbWVtYmVyXG4gICAqIHRoZSBQYXlQYWwgVmF1bHQgdG9rZW4gcmVwcmVzZW50aW5nIHRoZSB1c2VyJ3MgY3JlZGl0IGNhcmQuXG4gICAqXG4gICAqIElmIHNldCB0byBOTywgdGhlbiBhbnkgcHJldmlvdXNseS1yZW1lbWJlcmVkIHVzZXJuYW1lLCBwaG9uZSBudW1iZXIsIG9yXG4gICAqIGNyZWRpdCBjYXJkIHRva2VuIHdpbGwgYmUgZXJhc2VkLCBhbmQgc3Vic2VxdWVudCBwYXltZW50IGluZm9ybWF0aW9uIHdpbGxcbiAgICogbm90IGJlIHJlbWVtYmVyZWQuXG4gICAqXG4gICAqIERlZmF1bHRzIHRvIFlFUy5cbiAgICovXG4gIHJlbWVtYmVyVXNlcj86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBJZiBub3Qgc2V0LCBvciBpZiBzZXQgdG8gbmlsLCBkZWZhdWx0cyB0byB0aGUgZGV2aWNlJ3MgY3VycmVudCBsYW5ndWFnZSBzZXR0aW5nLlxuICAgKlxuICAgKiBDYW4gYmUgc3BlY2lmaWVkIGFzIGEgbGFuZ3VhZ2UgY29kZSAoXCJlblwiLCBcImZyXCIsIFwiemgtSGFuc1wiLCBldGMuKSBvciBhcyBhIGxvY2FsZSAoXCJlbl9BVVwiLCBcImZyX0ZSXCIsIFwiemgtSGFudF9IS1wiLCBldGMuKS5cbiAgICogSWYgdGhlIGxpYnJhcnkgZG9lcyBub3QgY29udGFpbiBsb2NhbGl6ZWQgc3RyaW5ncyBmb3IgYSBzcGVjaWZpZWQgbG9jYWxlLCB0aGVuIHdpbGwgZmFsbCBiYWNrIHRvIHRoZSBsYW5ndWFnZS4gRS5nLiwgXCJlc19DT1wiIC0+IFwiZXNcIi5cbiAgICogSWYgdGhlIGxpYnJhcnkgZG9lcyBub3QgY29udGFpbiBsb2NhbGl6ZWQgc3RyaW5ncyBmb3IgYSBzcGVjaWZpZWQgbGFuZ3VhZ2UsIHRoZW4gd2lsbCBmYWxsIGJhY2sgdG8gQW1lcmljYW4gRW5nbGlzaC5cbiAgICpcbiAgICogSWYgeW91IHNwZWNpZnkgb25seSBhIGxhbmd1YWdlIGNvZGUsIGFuZCB0aGF0IGNvZGUgbWF0Y2hlcyB0aGUgZGV2aWNlJ3MgY3VycmVudGx5IHByZWZlcnJlZCBsYW5ndWFnZSxcbiAgICogdGhlbiB0aGUgbGlicmFyeSB3aWxsIGF0dGVtcHQgdG8gdXNlIHRoZSBkZXZpY2UncyBjdXJyZW50IHJlZ2lvbiBhcyB3ZWxsLlxuICAgKiBFLmcuLCBzcGVjaWZ5aW5nIFwiZW5cIiBvbiBhIGRldmljZSBzZXQgdG8gXCJFbmdsaXNoXCIgYW5kIFwiVW5pdGVkIEtpbmdkb21cIiB3aWxsIHJlc3VsdCBpbiBcImVuX0dCXCIuXG4gICAqL1xuICBsYW5ndWFnZU9yTG9jYWxlPzogc3RyaW5nO1xuICAvKipcbiAgICogTm9ybWFsbHksIHRoZSBTREsgYmx1cnMgdGhlIHNjcmVlbiB3aGVuIHRoZSBhcHAgaXMgYmFja2dyb3VuZGVkLFxuICAgKiB0byBvYnNjdXJlIGNyZWRpdCBjYXJkIG9yIFBheVBhbCBhY2NvdW50IGRldGFpbHMgaW4gdGhlIGlPUy1zYXZlZCBzY3JlZW5zaG90LlxuICAgKiBJZiB5b3VyIGFwcCBhbHJlYWR5IGRvZXMgaXRzIG93biBibHVycmluZyB1cG9uIGJhY2tncm91bmRpbmcsIHlvdSBtaWdodCBjaG9vc2UgdG8gZGlzYWJsZSB0aGlzLlxuICAgKiBEZWZhdWx0cyB0byBOTy5cbiAgICovXG4gIGRpc2FibGVCbHVyV2hlbkJhY2tncm91bmRpbmc/OiBib29sZWFuO1xuICAvKipcbiAgICogSWYgeW91IHdpbGwgcHJlc2VudCB0aGUgU0RLJ3MgdmlldyBjb250cm9sbGVyIHdpdGhpbiBhIHBvcG92ZXIsIHRoZW4gc2V0IHRoaXMgcHJvcGVydHkgdG8gWUVTLlxuICAgKiBEZWZhdWx0cyB0byBOTy4gKGlPUyBvbmx5KVxuICAgKi9cbiAgcHJlc2VudGluZ0luUG9wb3Zlcj86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBTYW5kYm94IGNyZWRlbnRpYWxzIGNhbiBiZSBkaWZmaWN1bHQgdG8gdHlwZSBvbiBhIG1vYmlsZSBkZXZpY2UuIFNldHRpbmcgdGhpcyBmbGFnIHRvIFlFUyB3aWxsXG4gICAqIGNhdXNlIHRoZSBzYW5kYm94VXNlclBhc3N3b3JkIGFuZCBzYW5kYm94VXNlclBpbiB0byBhbHdheXMgYmUgcHJlLXBvcHVsYXRlZCBpbnRvIGxvZ2luIGZpZWxkcy5cbiAgICovXG4gIGZvcmNlRGVmYXVsdHNJblNhbmRib3g/OiBib29sZWFuO1xuICAvKipcbiAgICogUGFzc3dvcmQgdG8gdXNlIGZvciBzYW5kYm94IGlmICdmb3JjZURlZmF1bHRzSW5TYW5kYm94JyBpcyBzZXQuXG4gICAqL1xuICBzYW5kYm94VXNlclBhc3N3b3JkPzogc3RyaW5nO1xuICAvKipcbiAgICogUElOIHRvIHVzZSBmb3Igc2FuZGJveCBpZiAnZm9yY2VEZWZhdWx0c0luU2FuZGJveCcgaXMgc2V0LlxuICAgKi9cbiAgc2FuZGJveFVzZXJQaW4/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBQYXlQYWxDb25maWd1cmF0aW9uIGltcGxlbWVudHMgUGF5UGFsQ29uZmlndXJhdGlvbk9wdGlvbnMge1xuICAvKipcbiAgICogWW91IHVzZSBhIFBheVBhbENvbmZpZ3VyYXRpb24gb2JqZWN0IHRvIGNvbmZpZ3VyZSBtYW55IGFzcGVjdHMgb2YgaG93IHRoZSBTREsgYmVoYXZlcy5cbiAgICogc2VlIGRlZmF1bHRzIGZvciBvcHRpb25zIGF2YWlsYWJsZVxuICAgKi9cbiAgY29uc3RydWN0b3Iob3B0aW9ucz86IFBheVBhbENvbmZpZ3VyYXRpb25PcHRpb25zKSB7XG4gICAgY29uc3QgZGVmYXVsdHM6IFBheVBhbENvbmZpZ3VyYXRpb25PcHRpb25zID0ge1xuICAgICAgZGVmYXVsdFVzZXJFbWFpbDogbnVsbCxcbiAgICAgIGRlZmF1bHRVc2VyUGhvbmVDb3VudHJ5Q29kZTogbnVsbCxcbiAgICAgIGRlZmF1bHRVc2VyUGhvbmVOdW1iZXI6IG51bGwsXG4gICAgICBtZXJjaGFudE5hbWU6IG51bGwsXG4gICAgICBtZXJjaGFudFByaXZhY3lQb2xpY3lVUkw6IG51bGwsXG4gICAgICBtZXJjaGFudFVzZXJBZ3JlZW1lbnRVUkw6IG51bGwsXG4gICAgICBhY2NlcHRDcmVkaXRDYXJkczogdHJ1ZSxcbiAgICAgIHBheVBhbFNoaXBwaW5nQWRkcmVzc09wdGlvbjogMCxcbiAgICAgIHJlbWVtYmVyVXNlcjogdHJ1ZSxcbiAgICAgIGxhbmd1YWdlT3JMb2NhbGU6IG51bGwsXG4gICAgICBkaXNhYmxlQmx1cldoZW5CYWNrZ3JvdW5kaW5nOiBmYWxzZSxcbiAgICAgIHByZXNlbnRpbmdJblBvcG92ZXI6IGZhbHNlLFxuICAgICAgZm9yY2VEZWZhdWx0c0luU2FuZGJveDogZmFsc2UsXG4gICAgICBzYW5kYm94VXNlclBhc3N3b3JkOiBudWxsLFxuICAgICAgc2FuZGJveFVzZXJQaW46IG51bGwsXG4gICAgfTtcblxuICAgIGlmIChvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zID09PSAnb2JqZWN0Jykge1xuICAgICAgZm9yIChjb25zdCBpIGluIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKGRlZmF1bHRzLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgZGVmYXVsdHNbaV0gPSBvcHRpb25zW2ldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlZmF1bHRzO1xuICB9XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgUGF5UGFsU2hpcHBpbmdBZGRyZXNzIHtcbiAgLyoqXG4gICAqIFNlZSB0aGUgZG9jdW1lbnRhdGlvbiBvZiB0aGUgaW5kaXZpZHVhbCBwcm9wZXJ0aWVzIGZvciBtb3JlIGRldGFpbC5cbiAgICogQHBhcmFtIHtTdHJpbmd9IHJlY2lwaWVudE5hbWU6IE5hbWUgb2YgdGhlIHJlY2lwaWVudCBhdCB0aGlzIGFkZHJlc3MuIDUwIGNoYXJhY3RlcnMgbWF4LlxuICAgKiBAcGFyYW0ge1N0cmluZ30gbGluZTE6IExpbmUgMSBvZiB0aGUgYWRkcmVzcyAoZS5nLiwgTnVtYmVyLCBzdHJlZXQsIGV0YykuIDEwMCBjaGFyYWN0ZXJzIG1heC5cbiAgICogQHBhcmFtIHtTdHJpbmd9IGxpbmUyOiBMaW5lIDIgb2YgdGhlIGFkZHJlc3MgKGUuZy4sIFN1aXRlLCBhcHQgIywgZXRjKS4gMTAwIGNoYXJhY3RlcnMgbWF4LiBPcHRpb25hbC5cbiAgICogQHBhcmFtIHtTdHJpbmd9IGNpdHk6IENpdHkgbmFtZS4gNTAgY2hhcmFjdGVycyBtYXguXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBzdGF0ZTogMi1sZXR0ZXIgY29kZSBmb3IgVVMgc3RhdGVzLCBhbmQgdGhlIGVxdWl2YWxlbnQgZm9yIG90aGVyIGNvdW50cmllcy4gMTAwIGNoYXJhY3RlcnMgbWF4LiBSZXF1aXJlZCBpbiBjZXJ0YWluIGNvdW50cmllcy5cbiAgICogQHBhcmFtIHtTdHJpbmd9IHBvc3RhbENvZGU6IFpJUCBjb2RlIG9yIGVxdWl2YWxlbnQgaXMgdXN1YWxseSByZXF1aXJlZCBmb3IgY291bnRyaWVzIHRoYXQgaGF2ZSB0aGVtLiAyMCBjaGFyYWN0ZXJzIG1heC4gUmVxdWlyZWQgaW4gY2VydGFpbiBjb3VudHJpZXMuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBjb3VudHJ5Q29kZTogMi1sZXR0ZXIgY291bnRyeSBjb2RlLiAyIGNoYXJhY3RlcnMgbWF4LlxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgcmVjaXBpZW50TmFtZTogc3RyaW5nLFxuICAgIGxpbmUxOiBzdHJpbmcsXG4gICAgbGluZTI6IHN0cmluZyxcbiAgICBjaXR5OiBzdHJpbmcsXG4gICAgc3RhdGU6IHN0cmluZyxcbiAgICBwb3N0YWxDb2RlOiBzdHJpbmcsXG4gICAgY291bnRyeUNvZGU6IHN0cmluZ1xuICApIHtcbiAgICB0aGlzLnJlY2lwaWVudE5hbWUgPSByZWNpcGllbnROYW1lO1xuICAgIHRoaXMubGluZTEgPSBsaW5lMTtcbiAgICB0aGlzLmxpbmUyID0gbGluZTI7XG4gICAgdGhpcy5jaXR5ID0gY2l0eTtcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgdGhpcy5wb3N0YWxDb2RlID0gcG9zdGFsQ29kZTtcbiAgICB0aGlzLmNvdW50cnlDb2RlID0gY291bnRyeUNvZGU7XG4gIH1cbiAgLyoqXG4gICAqIE5hbWUgb2YgdGhlIHJlY2lwaWVudCBhdCB0aGlzIGFkZHJlc3MuIDUwIGNoYXJhY3RlcnMgbWF4LlxuICAgKi9cbiAgcmVjaXBpZW50TmFtZTogc3RyaW5nO1xuICAvKipcbiAgICogTGluZSAxIG9mIHRoZSBhZGRyZXNzIChlLmcuLCBOdW1iZXIsIHN0cmVldCwgZXRjKS4gMTAwIGNoYXJhY3RlcnMgbWF4LlxuICAgKi9cbiAgbGluZTE6IHN0cmluZztcbiAgLyoqXG4gICAqIExpbmUgMiBvZiB0aGUgYWRkcmVzcyAoZS5nLiwgU3VpdGUsIGFwdCAjLCBldGMpLiAxMDAgY2hhcmFjdGVycyBtYXguIE9wdGlvbmFsLlxuICAgKi9cbiAgbGluZTI6IHN0cmluZztcbiAgLyoqXG4gICAqIENpdHkgbmFtZS4gNTAgY2hhcmFjdGVycyBtYXguXG4gICAqL1xuICBjaXR5OiBzdHJpbmc7XG4gIC8qKlxuICAgKiAyLWxldHRlciBjb2RlIGZvciBVUyBzdGF0ZXMsIGFuZCB0aGUgZXF1aXZhbGVudCBmb3Igb3RoZXIgY291bnRyaWVzLiAxMDAgY2hhcmFjdGVycyBtYXguIFJlcXVpcmVkIGluIGNlcnRhaW4gY291bnRyaWVzLlxuICAgKi9cbiAgc3RhdGU6IHN0cmluZztcbiAgLyoqXG4gICAqIFpJUCBjb2RlIG9yIGVxdWl2YWxlbnQgaXMgdXN1YWxseSByZXF1aXJlZCBmb3IgY291bnRyaWVzIHRoYXQgaGF2ZSB0aGVtLiAyMCBjaGFyYWN0ZXJzIG1heC4gUmVxdWlyZWQgaW4gY2VydGFpbiBjb3VudHJpZXMuXG4gICAqL1xuICBwb3N0YWxDb2RlOiBzdHJpbmc7XG4gIC8qKlxuICAgKiAyLWxldHRlciBjb3VudHJ5IGNvZGUuIDIgY2hhcmFjdGVycyBtYXguXG4gICAqL1xuICBjb3VudHJ5Q29kZTogc3RyaW5nO1xufVxuIl19