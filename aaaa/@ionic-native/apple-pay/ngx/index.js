import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
import { Observable } from 'rxjs';
var ApplePay = /** @class */ (function (_super) {
    __extends(ApplePay, _super);
    function ApplePay() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ApplePay.prototype.canMakePayments = function () { return cordova(this, "canMakePayments", { "otherPromise": true }, arguments); };
    ApplePay.prototype.startListeningForShippingContactSelection = function () { return cordova(this, "startListeningForShippingContactSelection", { "observable": true, "clearFunction": "stopListeningForShippingContactSelection" }, arguments); };
    ApplePay.prototype.stopListeningForShippingContactSelection = function () { return cordova(this, "stopListeningForShippingContactSelection", { "otherPromise": true }, arguments); };
    ApplePay.prototype.updateItemsAndShippingMethods = function (list) { return cordova(this, "updateItemsAndShippingMethods", { "otherPromise": true }, arguments); };
    ApplePay.prototype.makePaymentRequest = function (order) { return cordova(this, "makePaymentRequest", { "otherPromise": true }, arguments); };
    ApplePay.prototype.completeLastTransaction = function (complete) { return cordova(this, "completeLastTransaction", { "otherPromise": true }, arguments); };
    ApplePay.pluginName = "ApplePay";
    ApplePay.plugin = "cordova-plugin-applepay";
    ApplePay.pluginRef = "ApplePay";
    ApplePay.repo = "https://github.com/samkelleher/cordova-plugin-applepay";
    ApplePay.platforms = ["iOS"];
    ApplePay.decorators = [
        { type: Injectable }
    ];
    return ApplePay;
}(IonicNativePlugin));
export { ApplePay };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2FwcGxlLXBheS9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOztJQXNKSiw0QkFBaUI7Ozs7SUFtQjdDLGtDQUFlO0lBZ0JmLDREQUF5QztJQVl6QywyREFBd0M7SUEwQ3hDLGdEQUE2QixhQUFDLElBQW1DO0lBNkVqRSxxQ0FBa0IsYUFBQyxLQUFhO0lBZ0JoQywwQ0FBdUIsYUFBQyxRQUE0Qjs7Ozs7OztnQkF2THJELFVBQVU7O21CQXZKWDtFQXdKOEIsaUJBQWlCO1NBQWxDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IHR5cGUgSU1ha2VQYXltZW50cyA9XG4gIHwgJ1RoaXMgZGV2aWNlIGNhbiBtYWtlIHBheW1lbnRzIGFuZCBoYXMgYSBzdXBwb3J0ZWQgY2FyZCdcbiAgfCAnVGhpcyBkZXZpY2UgY2Fubm90IG1ha2UgcGF5bWVudHMuJ1xuICB8ICdUaGlzIGRldmljZSBjYW4gbWFrZSBwYXltZW50cyBidXQgaGFzIG5vIHN1cHBvcnRlZCBjYXJkcyc7XG5leHBvcnQgdHlwZSBJU2hpcHBpbmdUeXBlID0gJ3NoaXBwaW5nJyB8ICdkZWxpdmVyeScgfCAnc3RvcmUnIHwgJ3NlcnZpY2UnO1xuZXhwb3J0IHR5cGUgSUJpbGxpbmdSZXF1aXJlbWVudCA9ICdub25lJyB8ICdhbGwnIHwgJ3Bvc3Rjb2RlJyB8ICduYW1lJyB8ICdlbWFpbCcgfCAncGhvbmUnO1xuZXhwb3J0IHR5cGUgSVRyYW5zYWN0aW9uU3RhdHVzID1cbiAgfCAnc3VjY2VzcydcbiAgfCAnZmFpbHVyZSdcbiAgfCAnaW52YWxpZC1iaWxsaW5nLWFkZHJlc3MnXG4gIHwgJ2ludmFsaWQtc2hpcHBpbmctYWRkcmVzcydcbiAgfCAnaW52YWxpZC1zaGlwcGluZy1jb250YWN0J1xuICB8ICdyZXF1aXJlLXBpbidcbiAgfCAnaW5jb3JyZWN0LXBpbidcbiAgfCAnbG9ja2VkLXBpbic7XG5leHBvcnQgdHlwZSBJQ29tcGxldGVUcmFuc2FjdGlvbiA9ICdQYXltZW50IHN0YXR1cyBhcHBsaWVkLic7XG5leHBvcnQgdHlwZSBJVXBkYXRlSXRlbXNBbmRTaGlwcGluZ1N0YXR1cyA9ICdVcGRhdGVkIExpc3QgSW5mbycgfCAnRGlkIHlvdSBtYWtlIGEgcGF5bWVudCByZXF1ZXN0Pyc7XG5leHBvcnQgdHlwZSBJTWVyY2hhbnRDYXBhYmlsaXRpZXMgPSAnM2RzJyB8ICdjcmVkaXQnIHwgJ2RlYml0JyB8ICdlbXYnO1xuZXhwb3J0IHR5cGUgSVN1cHBvcnRlZE5ldHdvcmtzID0gJ3Zpc2EnIHwgJ2FtZXgnIHwgJ2Rpc2NvdmVyJyB8ICdtYXN0ZXJDYXJkJztcblxuZXhwb3J0IGludGVyZmFjZSBJUGF5bWVudFJlc3BvbnNlIHtcbiAgYmlsbGluZ05hbWVGaXJzdD86IHN0cmluZztcbiAgYmlsbGluZ05hbWVNaWRkbGU/OiBzdHJpbmc7XG4gIGJpbGxpbmdOYW1lTGFzdD86IHN0cmluZztcbiAgYmlsbGluZ0VtYWlsQWRkcmVzcz86IHN0cmluZztcbiAgYmlsbGluZ1N1cHBsZW1lbnRhcnlTdWJMb2NhbGl0eT86IHN0cmluZztcbiAgYmlsbGluZ0FkZHJlc3NTdHJlZXQ/OiBzdHJpbmc7XG4gIGJpbGxpbmdBZGRyZXNzQ2l0eT86IHN0cmluZztcbiAgYmlsbGluZ0FkZHJlc3NTdGF0ZT86IHN0cmluZztcbiAgYmlsbGluZ1Bvc3RhbENvZGU/OiBzdHJpbmc7XG4gIGJpbGxpbmdDb3VudHJ5Pzogc3RyaW5nO1xuICBiaWxsaW5nSVNPQ291bnRyeUNvZGU/OiBzdHJpbmc7XG5cbiAgc2hpcHBpbmdOYW1lRmlyc3Q/OiBzdHJpbmc7XG4gIHNoaXBwaW5nTmFtZU1pZGRsZT86IHN0cmluZztcbiAgc2hpcHBpbmdOYW1lTGFzdD86IHN0cmluZztcbiAgc2hpcHBpbmdFbWFpbEFkZHJlc3M/OiBzdHJpbmc7XG4gIHNoaXBwaW5nUGhvbmVOdW1iZXI/OiBzdHJpbmc7XG4gIHNoaXBwaW5nU3VwcGxlbWVudGFyeVN1YkxvY2FsaXR5Pzogc3RyaW5nO1xuICBzaGlwcGluZ0FkZHJlc3NTdHJlZXQ/OiBzdHJpbmc7XG4gIHNoaXBwaW5nQWRkcmVzc0NpdHk/OiBzdHJpbmc7XG4gIHNoaXBwaW5nQWRkcmVzc1N0YXRlPzogc3RyaW5nO1xuICBzaGlwcGluZ1Bvc3RhbENvZGU/OiBzdHJpbmc7XG4gIHNoaXBwaW5nQ291bnRyeT86IHN0cmluZztcbiAgc2hpcHBpbmdJU09Db3VudHJ5Q29kZT86IHN0cmluZztcblxuICBwYXltZW50RGF0YTogc3RyaW5nO1xuICB0cmFuc2FjdGlvbklkZW50aWZpZXI6IHN0cmluZztcbiAgcGF5bWVudE1ldGhvZERpc3BsYXlOYW1lPzogc3RyaW5nO1xuICBwYXltZW50TWV0aG9kTmV0d29yaz86IHN0cmluZztcbiAgcGF5bWVudE1ldGhvZFR5cGVDYXJkPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElPcmRlckl0ZW0ge1xuICBsYWJlbDogc3RyaW5nO1xuICBhbW91bnQ6IG51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSVNoaXBwaW5nTWV0aG9kIHtcbiAgaWRlbnRpZmllcjogc3RyaW5nO1xuICBsYWJlbDogc3RyaW5nO1xuICBkZXRhaWw6IHN0cmluZztcbiAgYW1vdW50OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU9yZGVySXRlbXNBbmRTaGlwcGluZ01ldGhvZHMge1xuICBpdGVtczogSU9yZGVySXRlbVtdO1xuICBzaGlwcGluZ01ldGhvZHM/OiBJU2hpcHBpbmdNZXRob2RbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJT3JkZXIgZXh0ZW5kcyBJT3JkZXJJdGVtc0FuZFNoaXBwaW5nTWV0aG9kcyB7XG4gIG1lcmNoYW50SWRlbnRpZmllcjogc3RyaW5nO1xuICBjdXJyZW5jeUNvZGU6IHN0cmluZztcbiAgY291bnRyeUNvZGU6IHN0cmluZztcbiAgYmlsbGluZ0FkZHJlc3NSZXF1aXJlbWVudD86IElCaWxsaW5nUmVxdWlyZW1lbnQgfCBJQmlsbGluZ1JlcXVpcmVtZW50W107XG4gIHNoaXBwaW5nQWRkcmVzc1JlcXVpcmVtZW50PzogSUJpbGxpbmdSZXF1aXJlbWVudCB8IElCaWxsaW5nUmVxdWlyZW1lbnRbXTtcbiAgc2hpcHBpbmdUeXBlPzogSVNoaXBwaW5nVHlwZTtcbiAgbWVyY2hhbnRDYXBhYmlsaXRpZXM/OiBJTWVyY2hhbnRDYXBhYmlsaXRpZXMgfCBJTWVyY2hhbnRDYXBhYmlsaXRpZXNbXTtcbiAgc3VwcG9ydGVkTmV0d29ya3M/OiBJU3VwcG9ydGVkTmV0d29ya3MgfCBJU3VwcG9ydGVkTmV0d29ya3NbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJU2VsZWN0ZWRTaGlwcGluZ0NvbnRhY3Qge1xuICBzaGlwcGluZ0FkZHJlc3NDaXR5OiBzdHJpbmc7XG4gIHNoaXBwaW5nQWRkcmVzc1N0YXRlOiBzdHJpbmc7XG4gIHNoaXBwaW5nUG9zdGFsQ29kZTogc3RyaW5nO1xuICBzaGlwcGluZ0lTT0NvdW50cnlDb2RlOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQG5hbWUgQXBwbGUgUGF5XG4gKiBAZGVzY3JpcHRpb25cbiAqIEEgZGVwZW5kZW5jeSBmcmVlIENvcmRvdmEgcGx1Z2luIHRvIHByb3ZpZGUgQXBwbGUgUGF5IGZ1bmN0aW9uYWxpdHkuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBBcHBsZVBheSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvYXBwbGUtcGF5L25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBwbGVQYXk6IEFwcGxlUGF5KSB7IH1cbiAqXG4gKiAuLi5cbiAqIGFzeW5jIGFwcGxlUGF5KCkge1xuICogICAvLyBUaGlzIGJsb2NrIGlzIG9wdGlvbmFsIC0tIG9ubHkgaWYgeW91IG5lZWQgdG8gdXBkYXRlIG9yZGVyIGl0ZW1zL3NoaXBwaW5nXG4gKiAgIC8vIG1ldGhvZHMgaW4gcmVzcG9uc2UgdG8gc2hpcHBpbmcgbWV0aG9kIHNlbGVjdGlvbnNcbiAqICAgdGhpcy5hcHBsZVBheS5zdGFydExpc3RlbmluZ0ZvclNoaXBwaW5nQ29udGFjdFNlbGVjdGlvbigpXG4gKiAgICAgLnN1YnNjcmliZShhc3luYyBzZWxlY3Rpb24gPT4ge1xuICogICAgICAgdHJ5IHtcbiAqICAgICAgICAgYXdhaXQgdGhpcy5hcHBsZVBheS51cGRhdGVJdGVtc0FuZFNoaXBwaW5nTWV0aG9kcyh7XG4gKiAgICAgICAgICAgaXRlbXM6IGdldEZyb21TZWxlY3Rpb24oc2VsZWN0aW9uKSxcbiAqICAgICAgICAgICBzaGlwcGluZ01ldGhvZHM6IGdldEZyb21TZWxlY3Rpb24oc2VsZWN0aW9uKSxcbiAqICAgICAgICAgfSk7XG4gKiAgICAgICB9XG4gKiAgICAgICBjYXRjaCB7XG4gKiAgICAgICAgIC8vIGhhbmRsZSB1cGRhdGUgaXRlbXMgZXJyb3JcbiAqICAgICAgIH1cbiAqICAgICB9KTtcbiAqXG4gKiAgIHRyeSB7XG4gKiAgICAgY29uc3QgYXBwbGVQYXlUcmFuc2FjdGlvbiA9IGF3YWl0IHRoaXMuYXBwbGVQYXkubWFrZVBheW1lbnRSZXF1ZXN0KHtcbiAqICAgICAgIGl0ZW1zLFxuICogICAgICAgc2hpcHBpbmdNZXRob2RzLFxuICogICAgICAgbWVyY2hhbnRJZGVudGlmaWVyLFxuICogICAgICAgY3VycmVuY3lDb2RlLFxuICogICAgICAgY291bnRyeUNvZGUsXG4gKiAgICAgICBiaWxsaW5nQWRkcmVzc1JlcXVpcmVtZW50OiBbJ25hbWUnLCAnZW1haWwnLCAncGhvbmUnXSxcbiAqICAgICAgIHNoaXBwaW5nQWRkcmVzc1JlcXVpcmVtZW50OiAnbm9uZScsXG4gKiAgICAgICBzaGlwcGluZ1R5cGU6ICdzaGlwcGluZydcbiAqICAgICB9KTtcbiAqXG4gKiAgICAgY29uc3QgdHJhbnNhY3Rpb25TdGF0dXMgPSBhd2FpdCBjb21wbGV0ZVRyYW5zYWN0aW9uV2l0aE1lcmNoYW50KGFwcGxlUGF5VHJhbnNhY3Rpb24pO1xuICogICAgIGF3YWl0IHRoaXMuYXBwbGVQYXkuY29tcGxldGVMYXN0VHJhbnNhY3Rpb24odHJhbnNhY3Rpb25TdGF0dXMpO1xuICogICB9IGNhdGNoIHtcbiAqICAgICAvLyBoYW5kbGUgcGF5bWVudCByZXF1ZXN0IGVycm9yXG4gKiAgICAgLy8gQ2FuIGFsc28gaGFuZGxlIHN0b3AgY29tcGxldGUgdHJhbnNhY3Rpb24gYnV0IHRoZXNlIHNob3VsZCBub3JtYWxseSBub3Qgb2NjdXJcbiAqICAgfVxuICpcbiAqICAgLy8gb25seSBpZiB5b3Ugc3RhcnRlZCBsaXN0ZW5pbmcgYmVmb3JlXG4gKiAgIGF3YWl0IHRoaXMuYXBwbGVQYXkuc3RvcExpc3RlbmluZ0ZvclNoaXBwaW5nQ29udGFjdFNlbGVjdGlvbigpO1xuICogfVxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQXBwbGVQYXknLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1hcHBsZXBheScsXG4gIHBsdWdpblJlZjogJ0FwcGxlUGF5JyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9zYW1rZWxsZWhlci9jb3Jkb3ZhLXBsdWdpbi1hcHBsZXBheScsXG4gIHBsYXRmb3JtczogWydpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXBwbGVQYXkgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBEZXRlY3RzIGlmIHRoZSBjdXJyZW50IGRldmljZSBzdXBwb3J0cyBBcHBsZSBQYXkgYW5kIGhhcyBhbnkgY2FwYWJsZSBjYXJkcyByZWdpc3RlcmVkLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPElNYWtlUGF5bWVudHM+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgKlxuICAgKiBAdXNhZ2VcbiAgICogdHJ5IHtcbiAgICogICBjb25zdCBtZXNzYWdlID0gYXdhaXQgdGhpcy5hcHBsZVBheS5jYW5NYWtlUGF5bWVudHMoKTtcbiAgICogICAvLyBBcHBsZSBQYXkgaXMgZW5hYmxlZCBhbmQgYSBzdXBwb3J0ZWQgY2FyZCBpcyBzZXR1cC4gRXhwZWN0OlxuICAgKiAgIC8vICdUaGlzIGRldmljZSBjYW4gbWFrZSBwYXltZW50cyBhbmQgaGFzIGEgc3VwcG9ydGVkIGNhcmQnXG4gICAqIH0gY2F0Y2ggKG1lc3NhZ2UpIHtcbiAgICogICAvLyBUaGVyZSBpcyBhbiBpc3N1ZSwgZXhhbWluZSB0aGUgbWVzc2FnZSB0byBzZWUgdGhlIGRldGFpbHMsIHdpbGwgYmU6XG4gICAqICAgLy8gJ1RoaXMgZGV2aWNlIGNhbm5vdCBtYWtlIHBheW1lbnRzLicnXG4gICAqICAgLy8gJ1RoaXMgZGV2aWNlIGNhbiBtYWtlIHBheW1lbnRzIGJ1dCBoYXMgbm8gc3VwcG9ydGVkIGNhcmRzJ1xuICAgKiB9XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgb3RoZXJQcm9taXNlOiB0cnVlLFxuICB9KVxuICBjYW5NYWtlUGF5bWVudHMoKTogUHJvbWlzZTxJTWFrZVBheW1lbnRzPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0cyBsaXN0ZW5pbmcgZm9yIHNoaXBwaW5nIGNvbnRhY3Qgc2VsZWN0aW9uIGNoYW5nZXNcbiAgICogQW55IHRpbWUgdGhlIHVzZXIgc2VsZWN0cyBzaGlwcGluZyBjb250YWN0LCB0aGlzIGNhbGxiYWNrIHdpbGwgZmlyZS5cbiAgICogWW91ICptdXN0KiBjYWxsIGB1cGRhdGVJdGVtc0FuZFNoaXBwaW5nTWV0aG9kc2AgaW4gcmVzcG9uc2Ugb3IgZWxzZSB0aGVcbiAgICogdXNlciB3aWxsIG5vdCBiZSBhYmxlIHRvIHByb2Nlc3MgcGF5bWVudC5cbiAgICogQHJldHVybiB7T2JzZXJ2YWJsZTxJU2VsZWN0ZWRTaGlwcGluZ0NvbnRhY3Q+fSBlbWl0cyB3aXRoIHNoaXBwaW5nIGNvbnRhY3QgaW5mb3JtYXRpb24gb25cbiAgICogICBzaGlwcGluZyBjb250YWN0IHNlbGVjdGlvbiBjaGFuZ2VzXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBjbGVhckZ1bmN0aW9uOiAnc3RvcExpc3RlbmluZ0ZvclNoaXBwaW5nQ29udGFjdFNlbGVjdGlvbicsXG4gIH0pXG4gIHN0YXJ0TGlzdGVuaW5nRm9yU2hpcHBpbmdDb250YWN0U2VsZWN0aW9uKCk6IE9ic2VydmFibGU8SVNlbGVjdGVkU2hpcHBpbmdDb250YWN0PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3BzIGxpc3RlbmluZyBmb3Igc2hpcHBpbmcgY29udGFjdCBzZWxlY3Rpb24gY2hhbmdlc1xuICAgKiBAcmV0dXJuIHtQcm9taXNlfSB3aGV0aGVyIHN0b3AgbGlzdGVuaW5nIHdhcyBzdWNjZXNzZnVsLiBUaGlzIHNob3VsZFxuICAgKiAgIHJlYWxseSBvbmx5IGZhaWwgaWYgdGhpcyBpcyBjYWxsZWQgd2l0aG91dCBzdGFydGluZyBsaXN0ZW5pbmdcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBvdGhlclByb21pc2U6IHRydWUsXG4gIH0pXG4gIHN0b3BMaXN0ZW5pbmdGb3JTaGlwcGluZ0NvbnRhY3RTZWxlY3Rpb24oKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSB0aGUgbGlzdCBvZiBwYXkgc2hlZXQgaXRlbXMgYW5kIHNoaXBwaW5nIG1ldGhvZHMgaW4gcmVzcG9uc2UgdG9cbiAgICogYSBzaGlwcGluZyBjb250YWN0IHNlbGVjdGlvbiBldmVudC4gVGhpcyAqbXVzdCogYmUgY2FsbGVkIGluIHJlc3BvbnNlIHRvXG4gICAqIGFueSBzaGlwcGluZyBjb250YWN0IHNlbGVjdGlvbiBldmVudCBvciBlbHNlIHRoZSB1c2VyIHdpbGwgbm90IGJlIGFibGVcbiAgICogdG8gY29tcGxldGUgYSB0cmFuc2FjdGlvbiBvbiB0aGUgcGF5IHNoZWV0LiBEbyBub3QgY2FsbCB3aXRob3V0XG4gICAqIHN1YnNjcmliaW5nIHRvIHNoaXBwaW5nIGNvbnRhY3Qgc2VsZWN0aW9uIGV2ZW50cyBmaXJzdFxuICAgKlxuICAgKiBAcGFyYW0ge0lPcmRlckl0ZW1zQW5kU2hpcHBpbmdNZXRob2RzfSBsaXN0IGBpdGVtc2AgYW5kIGBzaGlwcGluZ01ldGhvZHNgIHByb3BlcnRpZXMuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPElVcGRhdGVJdGVtc0FuZFNoaXBwaW5nU3RhdHVzPn1cbiAgICpcbiAgICogQHVzYWdlXG4gICAqIHRoaXMuYXBwbGVQYXkuc3RhcnRMaXN0ZW5pbmdGb3JTaGlwcGluZ0NvbnRhY3RTZWxlY3Rpb24oKS5wbHVjaygnc2hpcHBpbmdBZGRyZXNzU3RhdGUnKS5zdWJzY3JpYmUoc2hpcHBpbmdBZGRyZXNzU3RhdGUgPT4ge1xuICAgKiAgIGxldCBzaGlwcGluZ01ldGhvZHM7XG4gICAqICAgaWYgKCdBSycgPT09IHNoaXBwaW5nQWRkcmVzc1N0YXRlKSB7XG4gICAqICAgICBzaGlwcGluZ01ldGhvZHMgPSBbe1xuICAgKiAgICAgICAgIGlkZW50aWZpZXI6ICdBbGFza2EnLFxuICAgKiAgICAgICAgIGxhYmVsOiAnQWxhc2thJyxcbiAgICogICAgICAgICBkZXRhaWw6ICdGb3Igc2hpcHBpbmcgdG8gQWxhc2thJyxcbiAgICogICAgICAgICBhbW91bnQ6IDkuOTlcbiAgICogICAgIH0sXTtcbiAgICogICB9IGVsc2Uge1xuICAgKiAgICAgc2hpcHBpbmdNZXRob2RzID0gW3tcbiAgICogICAgICAgICBpZGVudGlmaWVyOiAnQ29udGluZW50YWwnLFxuICAgKiAgICAgICAgIGxhYmVsOiAnQ29udGluZW50YWwnLFxuICAgKiAgICAgICAgIGRldGFpbDogJ0ZvciBzaGlwcGluZyBDb250aW5lbnRhbGx5JyxcbiAgICogICAgICAgICBhbW91bnQ6IDUuOTlcbiAgICogICAgIH1dO1xuICAgKiAgIH1cbiAgICogICB0aGlzLnBheVNoZWV0SXRlbXMuc2hpcHBpbmdDb3N0ID0ge1xuICAgKiAgICAgIGxhYmVsOiAnU2hpcHBpbmcgQ29zdCcsXG4gICAqICAgICAgYW1vdW50OiBzaGlwcGluZ01ldGhvZFswXS5hbW91bnRcbiAgICogICB9XG4gICAqICAgdGhpcy5hcHBsZVBheS51cGRhdGVJdGVtc0FuZFNoaXBwaW5nTWV0aG9kcyh0aGlzLnBheVNoZWV0SXRlbXMsIHNoaXBwaW5nTWV0aG9kcyk7XG4gICAqIH0pO1xuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG90aGVyUHJvbWlzZTogdHJ1ZSxcbiAgfSlcbiAgdXBkYXRlSXRlbXNBbmRTaGlwcGluZ01ldGhvZHMobGlzdDogSU9yZGVySXRlbXNBbmRTaGlwcGluZ01ldGhvZHMpOiBQcm9taXNlPElVcGRhdGVJdGVtc0FuZFNoaXBwaW5nU3RhdHVzPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcXVlc3QgYSBwYXltZW50IHdpdGggQXBwbGUgUGF5XG4gICAqXG4gICAqIEBwYXJhbSB7SU9yZGVyfSBvcmRlclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPElQYXltZW50UmVzcG9uc2U+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcbiAgICpcbiAgICogQHVzYWdlXG4gICAqIHRyeSB7XG4gICAqICAgY29uc3QgcGF5bWVudFJlc3BvbnNlID0gdGhpcy5hcHBsZVBheS5tYWtlUGF5bWVudFJlcXVlc3Qoe1xuICAgKiAgICAgaXRlbXM6IFtcbiAgICogICAgICAge1xuICAgKiAgICAgICAgIGxhYmVsOiAnMyB4IEJhc2tldCBJdGVtcycsXG4gICAqICAgICAgICAgYW1vdW50OiA0OS45OVxuICAgKiAgICAgICB9LFxuICAgKiAgICAgICB7XG4gICAqICAgICAgICAgbGFiZWw6ICdOZXh0IERheSBEZWxpdmVyeScsXG4gICAqICAgICAgICAgYW1vdW50OiAzLjk5XG4gICAqICAgICAgIH0sXG4gICAqICAgICAgIHtcbiAgICogICAgICAgICBsYWJlbDogJ015IEZhc2hpb24gQ29tcGFueScsXG4gICAqICAgICAgICAgYW1vdW50OiA1My45OFxuICAgKiAgICAgICB9XG4gICAqICAgICBdLFxuICAgKiAgICAgc2hpcHBpbmdNZXRob2RzOiBbXG4gICAqICAgICAgIHtcbiAgICogICAgICAgICBpZGVudGlmaWVyOiAnTmV4dERheScsXG4gICAqICAgICAgICAgbGFiZWw6ICdOZXh0RGF5JyxcbiAgICogICAgICAgICBkZXRhaWw6ICdBcnJpdmVzIHRvbW9ycm93IGJ5IDVwbS4nLFxuICAgKiAgICAgICAgIGFtb3VudDogMy45OVxuICAgKiAgICAgICB9LFxuICAgKiAgICAgICB7XG4gICAqICAgICAgICAgaWRlbnRpZmllcjogJ1N0YW5kYXJkJyxcbiAgICogICAgICAgICBsYWJlbDogJ1N0YW5kYXJkJyxcbiAgICogICAgICAgICBkZXRhaWw6ICdBcnJpdmUgYnkgRnJpZGF5LicsXG4gICAqICAgICAgICAgYW1vdW50OiA0Ljk5XG4gICAqICAgICAgIH0sXG4gICAqICAgICAgIHtcbiAgICogICAgICAgICBpZGVudGlmaWVyOiAnU2F0dXJkYXlEZWxpdmVyeScsXG4gICAqICAgICAgICAgbGFiZWw6ICdTYXR1cmRheScsXG4gICAqICAgICAgICAgZGV0YWlsOiAnQXJyaXZlIGJ5IDVwbSB0aGlzIFNhdHVyZGF5LicsXG4gICAqICAgICAgICAgYW1vdW50OiA2Ljk5XG4gICAqICAgICAgIH1cbiAgICogICAgIF0sXG4gICAqICAgICBtZXJjaGFudElkZW50aWZpZXI6ICdtZXJjaGFudC5hcHBsZS50ZXN0JyxcbiAgICogICAgIGN1cnJlbmN5Q29kZTogJ0dCUCcsXG4gICAqICAgICBjb3VudHJ5Q29kZTogJ0dCJyxcbiAgICogICAgIGJpbGxpbmdBZGRyZXNzUmVxdWlyZW1lbnQ6ICdub25lJyxcbiAgICogICAgIHNoaXBwaW5nQWRkcmVzc1JlcXVpcmVtZW50OiAnbm9uZScsXG4gICAqICAgICBzaGlwcGluZ1R5cGU6ICdzaGlwcGluZycsXG4gICAqICAgfSk7XG4gICAqXG4gICAqICAgLy8gVGhlIHVzZXIgaGFzIGF1dGhvcml6ZWQgdGhlIHBheW1lbnQuXG4gICAqXG4gICAqICAgLy8gSGFuZGxlIHRoZSB0b2tlbiwgYXN5bmNocm9ub3VzbHksIGkuZS4gcGFzcyB0byB5b3VyIG1lcmNoYW50IGJhbmsgdG9cbiAgICogICAvLyBhY3Rpb24gdGhlIHBheW1lbnQsIHRoZW4gb25jZSBmaW5pc2hlZCwgZGVwZW5kaW5nIG9uIHRoZSBvdXRjb21lOlxuICAgKlxuICAgKiAgIC8vIEhlcmUgaXMgYW4gZXhhbXBsZSBpbXBsZW1lbnRhdGlvbjpcbiAgICpcbiAgICogICBjb25zdCBjYXB0dXJlU3RhdHVzID0gYXdhaXQgTXlQYXltZW50UHJvdmlkZXIuYXV0aG9yaXplQXBwbGVQYXlUb2tlbihwYXltZW50UmVzcG9uc2UucGF5bWVudERhdGEpO1xuICAgKiAgIGF3YWl0IHRoaXMuYXBwbGVQYXkuY29tcGxldGVMYXN0VHJhbnNhY3Rpb24oJ3N1Y2Nlc3MnKTtcbiAgICogfVxuICAgKiBjYXRjaCAoZXJyKSB7XG4gICAqICAgaWYgKGlzUGF5bWVudEF1dGhFcnJvcihlcnIpKSB7XG4gICAqICAgICB0aGlzLmNvbXBsZXRlTGFzdFRyYW5zYWN0aW9uKCdmYWlsdXJlJyk7XG4gICAqICAgfVxuICAgKiAgIGVsc2Uge1xuICAgKiAgICAgLy8gRmFpbGVkIHRvIG9wZW4gcGF5IHNoZWV0IG9yIHVzZXIgY2FuY2VsZWQgcGF5bWVudFxuICAgKiAgIH1cbiAgICogfVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG90aGVyUHJvbWlzZTogdHJ1ZSxcbiAgfSlcbiAgbWFrZVBheW1lbnRSZXF1ZXN0KG9yZGVyOiBJT3JkZXIpOiBQcm9taXNlPElQYXltZW50UmVzcG9uc2U+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogT25jZSB0aGUgbWFrZVBheW1lbnRSZXF1ZXN0IGhhcyBiZWVuIHJlc29sdmVkIHN1Y2Nlc3NmdWxseSwgdGhlIGRldmljZSB3aWxsIGJlIHdhaXRpbmcgZm9yIGEgY29tcGxldGlvbiBldmVudC5cbiAgICogVGhpcyBtZWFucywgdGhhdCB0aGUgYXBwbGljYXRpb24gbXVzdCBwcm9jZWVkIHdpdGggdGhlIHRva2VuIGF1dGhvcml6YXRpb24gYW5kIHJldHVybiBhIHN1Y2Nlc3MsIGZhaWx1cmUsXG4gICAqIG9yIG90aGVyIHZhbGlkYXRpb24gZXJyb3IuIE9uY2UgdGhpcyBoYXMgYmVlbiBwYXNzZWQgYmFjaywgdGhlIEFwcGxlIFBheSBzaGVldCB3aWxsIGJlIGRpc21pc3NlZCB2aWEgYW4gYW5pbWF0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0ge0lUcmFuc2FjdGlvblN0YXR1c30gY29tcGxldGVcbiAgICogQHJldHVybiB7UHJvbWlzZTxJQ29tcGxldGVUcmFuc2FjdGlvbj59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgYWZ0ZXIgY29uZmlybWF0aW9uIG9mIHBheW1lbnQgYXV0aG9yaXphdGlvbiBjb21wbGV0aW9uXG4gICAqXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgb3RoZXJQcm9taXNlOiB0cnVlLFxuICB9KVxuICBjb21wbGV0ZUxhc3RUcmFuc2FjdGlvbihjb21wbGV0ZTogSVRyYW5zYWN0aW9uU3RhdHVzKTogUHJvbWlzZTxJQ29tcGxldGVUcmFuc2FjdGlvbj4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19