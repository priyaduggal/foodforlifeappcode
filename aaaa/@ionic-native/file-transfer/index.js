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
import { IonicNativePlugin, instanceAvailability, cordovaInstance, checkAvailability } from '@ionic-native/core';
var FileTransferOriginal = /** @class */ (function (_super) {
    __extends(FileTransferOriginal, _super);
    function FileTransferOriginal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Error code rejected from upload with FileTransferError
         * Defined in FileTransferError.
         *      FILE_NOT_FOUND_ERR: 1   Return when file was not found
         *      INVALID_URL_ERR: 2,     Return when url was invalid
         *      CONNECTION_ERR: 3,      Return on connection error
         *      ABORT_ERR: 4,           Return on aborting
         *      NOT_MODIFIED_ERR: 5     Return on '304 Not Modified' HTTP response
         * @enum {number}
         */
        _this.FileTransferErrorCode = {
            FILE_NOT_FOUND_ERR: 1,
            INVALID_URL_ERR: 2,
            CONNECTION_ERR: 3,
            ABORT_ERR: 4,
            NOT_MODIFIED_ERR: 5,
        };
        return _this;
    }
    /**
     * Creates a new FileTransferOriginal object
     * @return {FileTransferObject}
     */
    FileTransferOriginal.prototype.create = function () {
        return new FileTransferObject();
    };
    FileTransferOriginal.pluginName = "FileTransfer";
    FileTransferOriginal.plugin = "cordova-plugin-file-transfer";
    FileTransferOriginal.pluginRef = "FileTransfer";
    FileTransferOriginal.repo = "https://github.com/apache/cordova-plugin-file-transfer";
    FileTransferOriginal.platforms = ["Amazon Fire OS", "Android", "Browser", "iOS", "Ubuntu", "Windows", "Windows Phone"];
    return FileTransferOriginal;
}(IonicNativePlugin));
var FileTransfer = new FileTransferOriginal();
export { FileTransfer };
var FileTransferObject = /** @class */ (function () {
    function FileTransferObject() {
        if (checkAvailability(FileTransferOriginal.getPluginRef(), null, FileTransferOriginal.getPluginName()) === true) {
            this._objectInstance = new (FileTransferOriginal.getPlugin())();
        }
    }
    FileTransferObject.prototype.upload = function (fileUrl, url, options, trustAllHosts) { return cordovaInstance(this, "upload", { "successIndex": 2, "errorIndex": 3 }, arguments); };
    FileTransferObject.prototype.download = function (source, target, trustAllHosts, options) { return cordovaInstance(this, "download", { "successIndex": 2, "errorIndex": 3 }, arguments); };
    FileTransferObject.prototype.onProgress = function (listener) {
        var _this = this;
        return (function () {
            if (instanceAvailability(_this) === true) {
                _this._objectInstance.onprogress = listener;
            }
        })();
    };
    FileTransferObject.prototype.abort = function () { return cordovaInstance(this, "abort", { "sync": true }, arguments); };
    FileTransferObject.plugin = "cordova-plugin-file-transfer";
    FileTransferObject.pluginName = "FileTransfer";
    return FileTransferObject;
}());
export { FileTransferObject };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2ZpbGUtdHJhbnNmZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sNERBQTZELGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0lBNktoRixnQ0FBaUI7OztRQUNqRDs7Ozs7Ozs7O1dBU0c7UUFDSCwyQkFBcUIsR0FBRztZQUN0QixrQkFBa0IsRUFBRSxDQUFDO1lBQ3JCLGVBQWUsRUFBRSxDQUFDO1lBQ2xCLGNBQWMsRUFBRSxDQUFDO1lBQ2pCLFNBQVMsRUFBRSxDQUFDO1lBQ1osZ0JBQWdCLEVBQUUsQ0FBQztTQUNwQixDQUFDOzs7SUFFRjs7O09BR0c7SUFDSCw2QkFBTSxHQUFOO1FBQ0UsT0FBTyxJQUFJLGtCQUFrQixFQUFFLENBQUM7SUFDbEMsQ0FBQzs7Ozs7O3VCQXZNSDtFQThLa0MsaUJBQWlCO1NBQXRDLFlBQVk7O0lBc0N2QjtRQUNFLElBQUksaUJBQWlCLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxFQUFFLElBQUksRUFBRSxZQUFZLENBQUMsYUFBYSxFQUFFLENBQUMsS0FBSyxJQUFJLEVBQUU7WUFDL0YsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQztTQUN6RDtJQUNILENBQUM7SUFlRCxtQ0FBTSxhQUNKLE9BQWUsRUFDZixHQUFXLEVBQ1gsT0FBMkIsRUFDM0IsYUFBdUI7SUFrQnpCLHFDQUFRLGFBQUMsTUFBYyxFQUFFLE1BQWMsRUFBRSxhQUF1QixFQUFFLE9BQThCO0lBU2hHLHVDQUFVLGFBQUMsUUFBdUM7OztzREFBUTtnQkFDeEQsS0FBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO2FBQzVDOzs7SUFTRCxrQ0FBSzs7OzZCQWpSUDs7U0FpTmEsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YUluc3RhbmNlLCBJbnN0YW5jZUNoZWNrLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luLCBjaGVja0F2YWlsYWJpbGl0eSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmlsZVVwbG9hZE9wdGlvbnMge1xuICAvKipcbiAgICogVGhlIG5hbWUgb2YgdGhlIGZvcm0gZWxlbWVudC5cbiAgICogRGVmYXVsdHMgdG8gJ2ZpbGUnLlxuICAgKi9cbiAgZmlsZUtleT86IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIGZpbGUgbmFtZSB0byB1c2Ugd2hlbiBzYXZpbmcgdGhlIGZpbGUgb24gdGhlIHNlcnZlci5cbiAgICogRGVmYXVsdHMgdG8gJ2ltYWdlLmpwZycuXG4gICAqL1xuICBmaWxlTmFtZT86IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIEhUVFAgbWV0aG9kIHRvIHVzZSAtIGVpdGhlciBQVVQgb3IgUE9TVC5cbiAgICogRGVmYXVsdHMgdG8gUE9TVC5cbiAgICovXG4gIGh0dHBNZXRob2Q/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBtaW1lIHR5cGUgb2YgdGhlIGRhdGEgdG8gdXBsb2FkLlxuICAgKiBEZWZhdWx0cyB0byBpbWFnZS9qcGVnLlxuICAgKi9cbiAgbWltZVR5cGU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEEgc2V0IG9mIG9wdGlvbmFsIGtleS92YWx1ZSBwYWlycyB0byBwYXNzIGluIHRoZSBIVFRQIHJlcXVlc3QuXG4gICAqL1xuICBwYXJhbXM/OiB7IFtzOiBzdHJpbmddOiBhbnkgfTtcblxuICAvKipcbiAgICogV2hldGhlciB0byB1cGxvYWQgdGhlIGRhdGEgaW4gY2h1bmtlZCBzdHJlYW1pbmcgbW9kZS5cbiAgICogRGVmYXVsdHMgdG8gdHJ1ZS5cbiAgICovXG4gIGNodW5rZWRNb2RlPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogQSBtYXAgb2YgaGVhZGVyIG5hbWUvaGVhZGVyIHZhbHVlcy4gVXNlIGFuIGFycmF5IHRvIHNwZWNpZnkgbW9yZVxuICAgKiB0aGFuIG9uZSB2YWx1ZS4gT24gaU9TLCBGaXJlT1MsIGFuZCBBbmRyb2lkLCBpZiBhIGhlYWRlciBuYW1lZFxuICAgKiBDb250ZW50LVR5cGUgaXMgcHJlc2VudCwgbXVsdGlwYXJ0IGZvcm0gZGF0YSB3aWxsIE5PVCBiZSB1c2VkLlxuICAgKi9cbiAgaGVhZGVycz86IHsgW3M6IHN0cmluZ106IGFueSB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZpbGVVcGxvYWRSZXN1bHQge1xuICAvKipcbiAgICogVGhlIG51bWJlciBvZiBieXRlcyBzZW50IHRvIHRoZSBzZXJ2ZXIgYXMgcGFydCBvZiB0aGUgdXBsb2FkLlxuICAgKi9cbiAgYnl0ZXNTZW50OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSBIVFRQIHJlc3BvbnNlIGNvZGUgcmV0dXJuZWQgYnkgdGhlIHNlcnZlci5cbiAgICovXG4gIHJlc3BvbnNlQ29kZTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGUgSFRUUCByZXNwb25zZSByZXR1cm5lZCBieSB0aGUgc2VydmVyLlxuICAgKi9cbiAgcmVzcG9uc2U6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIEhUVFAgcmVzcG9uc2UgaGVhZGVycyBieSB0aGUgc2VydmVyLlxuICAgKi9cbiAgaGVhZGVyczogeyBbczogc3RyaW5nXTogYW55IH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmlsZVRyYW5zZmVyRXJyb3Ige1xuICAvKipcbiAgICogT25lIG9mIHRoZSBwcmVkZWZpbmVkIGVycm9yIGNvZGVzIGxpc3RlZCBiZWxvdy5cbiAgICovXG4gIGNvZGU6IG51bWJlcjtcblxuICAvKipcbiAgICogVVJMIHRvIHRoZSBzb3VyY2UuXG4gICAqL1xuICBzb3VyY2U6IHN0cmluZztcblxuICAvKipcbiAgICogVVJMIHRvIHRoZSB0YXJnZXQuXG4gICAqL1xuICB0YXJnZXQ6IHN0cmluZztcblxuICAvKipcbiAgICogSFRUUCBzdGF0dXMgY29kZS4gVGhpcyBhdHRyaWJ1dGUgaXMgb25seSBhdmFpbGFibGUgd2hlbiBhIHJlc3BvbnNlXG4gICAqIGNvZGUgaXMgcmVjZWl2ZWQgZnJvbSB0aGUgSFRUUCBjb25uZWN0aW9uLlxuICAgKi9cbiAgaHR0cF9zdGF0dXM6IG51bWJlcjtcblxuICAvKipcbiAgICogUmVzcG9uc2UgYm9keS4gVGhpcyBhdHRyaWJ1dGUgaXMgb25seSBhdmFpbGFibGUgd2hlbiBhIHJlc3BvbnNlIGlzIHJlY2VpdmVkIGZyb20gdGhlIEhUVFAgY29ubmVjdGlvbi5cbiAgICovXG4gIGJvZHk6IHN0cmluZztcblxuICAvKipcbiAgICogRWl0aGVyIGUuZ2V0TWVzc2FnZSBvciBlLnRvU3RyaW5nLlxuICAgKi9cbiAgZXhjZXB0aW9uOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQG5hbWUgRmlsZSBUcmFuc2ZlclxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gYWxsb3dzIHlvdSB0byB1cGxvYWQgYW5kIGRvd25sb2FkIGZpbGVzLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgRmlsZVRyYW5zZmVyLCBGaWxlVXBsb2FkT3B0aW9ucywgRmlsZVRyYW5zZmVyT2JqZWN0IH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9maWxlLXRyYW5zZmVyL25neCc7XG4gKiBpbXBvcnQgeyBGaWxlIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9maWxlJztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHRyYW5zZmVyOiBGaWxlVHJhbnNmZXIsIHByaXZhdGUgZmlsZTogRmlsZSkgeyB9XG4gKlxuICogLi4uXG4gKlxuICogY29uc3QgZmlsZVRyYW5zZmVyOiBGaWxlVHJhbnNmZXJPYmplY3QgPSB0aGlzLnRyYW5zZmVyLmNyZWF0ZSgpO1xuICpcbiAqIC8vIFVwbG9hZCBhIGZpbGU6XG4gKiBmaWxlVHJhbnNmZXIudXBsb2FkKC4uKS50aGVuKC4uKS5jYXRjaCguLik7XG4gKlxuICogLy8gRG93bmxvYWQgYSBmaWxlOlxuICogZmlsZVRyYW5zZmVyLmRvd25sb2FkKC4uKS50aGVuKC4uKS5jYXRjaCguLik7XG4gKlxuICogLy8gQWJvcnQgYWN0aXZlIHRyYW5zZmVyOlxuICogZmlsZVRyYW5zZmVyLmFib3J0KCk7XG4gKlxuICogLy8gZnVsbCBleGFtcGxlXG4gKiB1cGxvYWQoKSB7XG4gKiAgIGxldCBvcHRpb25zOiBGaWxlVXBsb2FkT3B0aW9ucyA9IHtcbiAqICAgICAgZmlsZUtleTogJ2ZpbGUnLFxuICogICAgICBmaWxlTmFtZTogJ25hbWUuanBnJyxcbiAqICAgICAgaGVhZGVyczoge31cbiAqICAgICAgLi4uLi5cbiAqICAgfVxuICpcbiAqICAgZmlsZVRyYW5zZmVyLnVwbG9hZCgnPGZpbGUgcGF0aD4nLCAnPGFwaSBlbmRwb2ludD4nLCBvcHRpb25zKVxuICogICAgLnRoZW4oKGRhdGEpID0+IHtcbiAqICAgICAgLy8gc3VjY2Vzc1xuICogICAgfSwgKGVycikgPT4ge1xuICogICAgICAvLyBlcnJvclxuICogICAgfSlcbiAqIH1cbiAqXG4gKiBkb3dubG9hZCgpIHtcbiAqICAgY29uc3QgdXJsID0gJ2h0dHA6Ly93d3cuZXhhbXBsZS5jb20vZmlsZS5wZGYnO1xuICogICBmaWxlVHJhbnNmZXIuZG93bmxvYWQodXJsLCB0aGlzLmZpbGUuZGF0YURpcmVjdG9yeSArICdmaWxlLnBkZicpLnRoZW4oKGVudHJ5KSA9PiB7XG4gKiAgICAgY29uc29sZS5sb2coJ2Rvd25sb2FkIGNvbXBsZXRlOiAnICsgZW50cnkudG9VUkwoKSk7XG4gKiAgIH0sIChlcnJvcikgPT4ge1xuICogICAgIC8vIGhhbmRsZSBlcnJvclxuICogICB9KTtcbiAqIH1cbiAqXG4gKiBgYGBcbiAqXG4gKiBUbyBzdG9yZSBmaWxlcyBpbiBhIGRpZmZlcmVudC9wdWJsaWNseSBhY2Nlc3NpYmxlIGRpcmVjdG9yeSwgcGxlYXNlIHJlZmVyIHRvIHRoZSBmb2xsb3dpbmcgbGlua1xuICogaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1maWxlI3doZXJlLXRvLXN0b3JlLWZpbGVzXG4gKlxuICogQGludGVyZmFjZXNcbiAqIEZpbGVVcGxvYWRPcHRpb25zXG4gKiBGaWxlVXBsb2FkUmVzdWx0XG4gKiBGaWxlVHJhbnNmZXJFcnJvclxuICogQGNsYXNzZXNcbiAqIEZpbGVUcmFuc2Zlck9iamVjdFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0ZpbGVUcmFuc2ZlcicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWZpbGUtdHJhbnNmZXInLFxuICBwbHVnaW5SZWY6ICdGaWxlVHJhbnNmZXInLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1maWxlLXRyYW5zZmVyJyxcbiAgcGxhdGZvcm1zOiBbJ0FtYXpvbiBGaXJlIE9TJywgJ0FuZHJvaWQnLCAnQnJvd3NlcicsICdpT1MnLCAnVWJ1bnR1JywgJ1dpbmRvd3MnLCAnV2luZG93cyBQaG9uZSddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGaWxlVHJhbnNmZXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBFcnJvciBjb2RlIHJlamVjdGVkIGZyb20gdXBsb2FkIHdpdGggRmlsZVRyYW5zZmVyRXJyb3JcbiAgICogRGVmaW5lZCBpbiBGaWxlVHJhbnNmZXJFcnJvci5cbiAgICogICAgICBGSUxFX05PVF9GT1VORF9FUlI6IDEgICBSZXR1cm4gd2hlbiBmaWxlIHdhcyBub3QgZm91bmRcbiAgICogICAgICBJTlZBTElEX1VSTF9FUlI6IDIsICAgICBSZXR1cm4gd2hlbiB1cmwgd2FzIGludmFsaWRcbiAgICogICAgICBDT05ORUNUSU9OX0VSUjogMywgICAgICBSZXR1cm4gb24gY29ubmVjdGlvbiBlcnJvclxuICAgKiAgICAgIEFCT1JUX0VSUjogNCwgICAgICAgICAgIFJldHVybiBvbiBhYm9ydGluZ1xuICAgKiAgICAgIE5PVF9NT0RJRklFRF9FUlI6IDUgICAgIFJldHVybiBvbiAnMzA0IE5vdCBNb2RpZmllZCcgSFRUUCByZXNwb25zZVxuICAgKiBAZW51bSB7bnVtYmVyfVxuICAgKi9cbiAgRmlsZVRyYW5zZmVyRXJyb3JDb2RlID0ge1xuICAgIEZJTEVfTk9UX0ZPVU5EX0VSUjogMSxcbiAgICBJTlZBTElEX1VSTF9FUlI6IDIsXG4gICAgQ09OTkVDVElPTl9FUlI6IDMsXG4gICAgQUJPUlRfRVJSOiA0LFxuICAgIE5PVF9NT0RJRklFRF9FUlI6IDUsXG4gIH07XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgRmlsZVRyYW5zZmVyIG9iamVjdFxuICAgKiBAcmV0dXJuIHtGaWxlVHJhbnNmZXJPYmplY3R9XG4gICAqL1xuICBjcmVhdGUoKTogRmlsZVRyYW5zZmVyT2JqZWN0IHtcbiAgICByZXR1cm4gbmV3IEZpbGVUcmFuc2Zlck9iamVjdCgpO1xuICB9XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZmlsZS10cmFuc2ZlcicsXG4gIHBsdWdpbk5hbWU6ICdGaWxlVHJhbnNmZXInLFxufSlcbmV4cG9ydCBjbGFzcyBGaWxlVHJhbnNmZXJPYmplY3Qge1xuICBwcml2YXRlIF9vYmplY3RJbnN0YW5jZTogYW55O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGlmIChjaGVja0F2YWlsYWJpbGl0eShGaWxlVHJhbnNmZXIuZ2V0UGx1Z2luUmVmKCksIG51bGwsIEZpbGVUcmFuc2Zlci5nZXRQbHVnaW5OYW1lKCkpID09PSB0cnVlKSB7XG4gICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZSA9IG5ldyAoRmlsZVRyYW5zZmVyLmdldFBsdWdpbigpKSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kcyBhIGZpbGUgdG8gYSBzZXJ2ZXIuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlVXJsICBGaWxlc3lzdGVtIFVSTCByZXByZXNlbnRpbmcgdGhlIGZpbGUgb24gdGhlIGRldmljZSBvciBhIGRhdGEgVVJJLiBGb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHksIHRoaXMgY2FuIGFsc28gYmUgdGhlIGZ1bGwgcGF0aCBvZiB0aGUgZmlsZSBvbiB0aGUgZGV2aWNlLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsICBVUkwgb2YgdGhlIHNlcnZlciB0byByZWNlaXZlIHRoZSBmaWxlLCBhcyBlbmNvZGVkIGJ5IGVuY29kZVVSSSgpLlxuICAgKiBAcGFyYW0ge0ZpbGVVcGxvYWRPcHRpb25zfSBbb3B0aW9uc10gIE9wdGlvbmFsIHBhcmFtZXRlcnMuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3RydXN0QWxsSG9zdHNdICBPcHRpb25hbCBwYXJhbWV0ZXIsIGRlZmF1bHRzIHRvIGZhbHNlLiBJZiBzZXQgdG8gdHJ1ZSwgaXQgYWNjZXB0cyBhbGwgc2VjdXJpdHkgY2VydGlmaWNhdGVzLiBUaGlzIGlzIHVzZWZ1bCBzaW5jZSBBbmRyb2lkIHJlamVjdHMgc2VsZi1zaWduZWQgc2VjdXJpdHkgY2VydGlmaWNhdGVzLiBOb3QgcmVjb21tZW5kZWQgZm9yIHByb2R1Y3Rpb24gdXNlLiBTdXBwb3J0ZWQgb24gQW5kcm9pZCBhbmQgaU9TLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxGaWxlVXBsb2FkUmVzdWx0Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB0byBhIEZpbGVVcGxvYWRSZXN1bHQgYW5kIHJlamVjdHMgd2l0aCBGaWxlVHJhbnNmZXJFcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2Uoe1xuICAgIHN1Y2Nlc3NJbmRleDogMixcbiAgICBlcnJvckluZGV4OiAzLFxuICB9KVxuICB1cGxvYWQoXG4gICAgZmlsZVVybDogc3RyaW5nLFxuICAgIHVybDogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiBGaWxlVXBsb2FkT3B0aW9ucyxcbiAgICB0cnVzdEFsbEhvc3RzPzogYm9vbGVhblxuICApOiBQcm9taXNlPEZpbGVVcGxvYWRSZXN1bHQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRG93bmxvYWRzIGEgZmlsZSBmcm9tIHNlcnZlci5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNvdXJjZSAgVVJMIG9mIHRoZSBzZXJ2ZXIgdG8gZG93bmxvYWQgdGhlIGZpbGUsIGFzIGVuY29kZWQgYnkgZW5jb2RlVVJJKCkuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0YXJnZXQgIEZpbGVzeXN0ZW0gdXJsIHJlcHJlc2VudGluZyB0aGUgZmlsZSBvbiB0aGUgZGV2aWNlLiBGb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHksIHRoaXMgY2FuIGFsc28gYmUgdGhlIGZ1bGwgcGF0aCBvZiB0aGUgZmlsZSBvbiB0aGUgZGV2aWNlLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFt0cnVzdEFsbEhvc3RzXSAgT3B0aW9uYWwgcGFyYW1ldGVyLCBkZWZhdWx0cyB0byBmYWxzZS4gSWYgc2V0IHRvIHRydWUsIGl0IGFjY2VwdHMgYWxsIHNlY3VyaXR5IGNlcnRpZmljYXRlcy4gVGhpcyBpcyB1c2VmdWwgYmVjYXVzZSBBbmRyb2lkIHJlamVjdHMgc2VsZi1zaWduZWQgc2VjdXJpdHkgY2VydGlmaWNhdGVzLiBOb3QgcmVjb21tZW5kZWQgZm9yIHByb2R1Y3Rpb24gdXNlLiBTdXBwb3J0ZWQgb24gQW5kcm9pZCBhbmQgaU9TLlxuICAgKiBAcGFyYW0ge29iamVjdH0gW09wdGlvbmFsXSBwYXJhbWV0ZXJzLCBjdXJyZW50bHkgb25seSBzdXBwb3J0cyBoZWFkZXJzIChzdWNoIGFzIEF1dGhvcml6YXRpb24gKEJhc2ljIEF1dGhlbnRpY2F0aW9uKSwgZXRjKS5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB0byBhIEZpbGVFbnRyeSBvYmplY3QuXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHtcbiAgICBzdWNjZXNzSW5kZXg6IDIsXG4gICAgZXJyb3JJbmRleDogMyxcbiAgfSlcbiAgZG93bmxvYWQoc291cmNlOiBzdHJpbmcsIHRhcmdldDogc3RyaW5nLCB0cnVzdEFsbEhvc3RzPzogYm9vbGVhbiwgb3B0aW9ucz86IHsgW3M6IHN0cmluZ106IGFueSB9KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGEgbGlzdGVuZXIgdGhhdCBnZXRzIGNhbGxlZCB3aGVuZXZlciBhIG5ldyBjaHVuayBvZiBkYXRhIGlzIHRyYW5zZmVycmVkLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lciBMaXN0ZW5lciB0aGF0IHRha2VzIGEgcHJvZ3Jlc3MgZXZlbnQuXG4gICAqL1xuICBASW5zdGFuY2VDaGVjayh7IHN5bmM6IHRydWUgfSlcbiAgb25Qcm9ncmVzcyhsaXN0ZW5lcjogKGV2ZW50OiBQcm9ncmVzc0V2ZW50KSA9PiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5vbnByb2dyZXNzID0gbGlzdGVuZXI7XG4gIH1cblxuICAvKipcbiAgICogQWJvcnRzIGFuIGluLXByb2dyZXNzIHRyYW5zZmVyLiBUaGUgb25lcnJvciBjYWxsYmFjayBpcyBwYXNzZWQgYSBGaWxlVHJhbnNmZXJFcnJvclxuICAgKiBvYmplY3Qgd2hpY2ggaGFzIGFuIGVycm9yIGNvZGUgb2YgRmlsZVRyYW5zZmVyRXJyb3IuQUJPUlRfRVJSLlxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgYWJvcnQoKTogdm9pZCB7fVxufVxuIl19