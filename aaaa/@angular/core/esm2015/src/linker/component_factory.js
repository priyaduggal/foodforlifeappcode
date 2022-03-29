/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Represents a component created by a `ComponentFactory`.
 * Provides access to the component instance and related objects,
 * and provides the means of destroying the instance.
 *
 * @publicApi
 */
export class ComponentRef {
}
/**
 * Base class for a factory that can create a component dynamically.
 * Instantiate a factory for a given type of component with `resolveComponentFactory()`.
 * Use the resulting `ComponentFactory.create()` method to create a component of that type.
 *
 * @see [Dynamic Components](guide/dynamic-component-loader)
 *
 * @publicApi
 */
export class ComponentFactory {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50X2ZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9saW5rZXIvY29tcG9uZW50X2ZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBVUg7Ozs7OztHQU1HO0FBQ0gsTUFBTSxPQUFnQixZQUFZO0NBNENqQztBQUVEOzs7Ozs7OztHQVFHO0FBQ0gsTUFBTSxPQUFnQixnQkFBZ0I7Q0EyQnJDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7Q2hhbmdlRGV0ZWN0b3JSZWZ9IGZyb20gJy4uL2NoYW5nZV9kZXRlY3Rpb24vY2hhbmdlX2RldGVjdGlvbic7XG5pbXBvcnQge0luamVjdG9yfSBmcm9tICcuLi9kaS9pbmplY3Rvcic7XG5pbXBvcnQge1R5cGV9IGZyb20gJy4uL2ludGVyZmFjZS90eXBlJztcblxuaW1wb3J0IHtFbGVtZW50UmVmfSBmcm9tICcuL2VsZW1lbnRfcmVmJztcbmltcG9ydCB7TmdNb2R1bGVSZWZ9IGZyb20gJy4vbmdfbW9kdWxlX2ZhY3RvcnknO1xuaW1wb3J0IHtWaWV3UmVmfSBmcm9tICcuL3ZpZXdfcmVmJztcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgY29tcG9uZW50IGNyZWF0ZWQgYnkgYSBgQ29tcG9uZW50RmFjdG9yeWAuXG4gKiBQcm92aWRlcyBhY2Nlc3MgdG8gdGhlIGNvbXBvbmVudCBpbnN0YW5jZSBhbmQgcmVsYXRlZCBvYmplY3RzLFxuICogYW5kIHByb3ZpZGVzIHRoZSBtZWFucyBvZiBkZXN0cm95aW5nIHRoZSBpbnN0YW5jZS5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDb21wb25lbnRSZWY8Qz4ge1xuICAvKipcbiAgICogVGhlIGhvc3Qgb3IgYW5jaG9yIFtlbGVtZW50XShndWlkZS9nbG9zc2FyeSNlbGVtZW50KSBmb3IgdGhpcyBjb21wb25lbnQgaW5zdGFuY2UuXG4gICAqL1xuICBhYnN0cmFjdCBnZXQgbG9jYXRpb24oKTogRWxlbWVudFJlZjtcblxuICAvKipcbiAgICogVGhlIFtkZXBlbmRlbmN5IGluamVjdG9yXShndWlkZS9nbG9zc2FyeSNpbmplY3RvcikgZm9yIHRoaXMgY29tcG9uZW50IGluc3RhbmNlLlxuICAgKi9cbiAgYWJzdHJhY3QgZ2V0IGluamVjdG9yKCk6IEluamVjdG9yO1xuXG4gIC8qKlxuICAgKiBUaGlzIGNvbXBvbmVudCBpbnN0YW5jZS5cbiAgICovXG4gIGFic3RyYWN0IGdldCBpbnN0YW5jZSgpOiBDO1xuXG4gIC8qKlxuICAgKiBUaGUgW2hvc3Qgdmlld10oZ3VpZGUvZ2xvc3Nhcnkjdmlldy10cmVlKSBkZWZpbmVkIGJ5IHRoZSB0ZW1wbGF0ZVxuICAgKiBmb3IgdGhpcyBjb21wb25lbnQgaW5zdGFuY2UuXG4gICAqL1xuICBhYnN0cmFjdCBnZXQgaG9zdFZpZXcoKTogVmlld1JlZjtcblxuICAvKipcbiAgICogVGhlIGNoYW5nZSBkZXRlY3RvciBmb3IgdGhpcyBjb21wb25lbnQgaW5zdGFuY2UuXG4gICAqL1xuICBhYnN0cmFjdCBnZXQgY2hhbmdlRGV0ZWN0b3JSZWYoKTogQ2hhbmdlRGV0ZWN0b3JSZWY7XG5cbiAgLyoqXG4gICAqIFRoZSB0eXBlIG9mIHRoaXMgY29tcG9uZW50IChhcyBjcmVhdGVkIGJ5IGEgYENvbXBvbmVudEZhY3RvcnlgIGNsYXNzKS5cbiAgICovXG4gIGFic3RyYWN0IGdldCBjb21wb25lbnRUeXBlKCk6IFR5cGU8YW55PjtcblxuICAvKipcbiAgICogRGVzdHJveXMgdGhlIGNvbXBvbmVudCBpbnN0YW5jZSBhbmQgYWxsIG9mIHRoZSBkYXRhIHN0cnVjdHVyZXMgYXNzb2NpYXRlZCB3aXRoIGl0LlxuICAgKi9cbiAgYWJzdHJhY3QgZGVzdHJveSgpOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBBIGxpZmVjeWNsZSBob29rIHRoYXQgcHJvdmlkZXMgYWRkaXRpb25hbCBkZXZlbG9wZXItZGVmaW5lZCBjbGVhbnVwXG4gICAqIGZ1bmN0aW9uYWxpdHkgZm9yIHRoZSBjb21wb25lbnQuXG4gICAqIEBwYXJhbSBjYWxsYmFjayBBIGhhbmRsZXIgZnVuY3Rpb24gdGhhdCBjbGVhbnMgdXAgZGV2ZWxvcGVyLWRlZmluZWQgZGF0YVxuICAgKiBhc3NvY2lhdGVkIHdpdGggdGhpcyBjb21wb25lbnQuIENhbGxlZCB3aGVuIHRoZSBgZGVzdHJveSgpYCBtZXRob2QgaXMgaW52b2tlZC5cbiAgICovXG4gIGFic3RyYWN0IG9uRGVzdHJveShjYWxsYmFjazogRnVuY3Rpb24pOiB2b2lkO1xufVxuXG4vKipcbiAqIEJhc2UgY2xhc3MgZm9yIGEgZmFjdG9yeSB0aGF0IGNhbiBjcmVhdGUgYSBjb21wb25lbnQgZHluYW1pY2FsbHkuXG4gKiBJbnN0YW50aWF0ZSBhIGZhY3RvcnkgZm9yIGEgZ2l2ZW4gdHlwZSBvZiBjb21wb25lbnQgd2l0aCBgcmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoKWAuXG4gKiBVc2UgdGhlIHJlc3VsdGluZyBgQ29tcG9uZW50RmFjdG9yeS5jcmVhdGUoKWAgbWV0aG9kIHRvIGNyZWF0ZSBhIGNvbXBvbmVudCBvZiB0aGF0IHR5cGUuXG4gKlxuICogQHNlZSBbRHluYW1pYyBDb21wb25lbnRzXShndWlkZS9keW5hbWljLWNvbXBvbmVudC1sb2FkZXIpXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ29tcG9uZW50RmFjdG9yeTxDPiB7XG4gIC8qKlxuICAgKiBUaGUgY29tcG9uZW50J3MgSFRNTCBzZWxlY3Rvci5cbiAgICovXG4gIGFic3RyYWN0IGdldCBzZWxlY3RvcigpOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgdHlwZSBvZiBjb21wb25lbnQgdGhlIGZhY3Rvcnkgd2lsbCBjcmVhdGUuXG4gICAqL1xuICBhYnN0cmFjdCBnZXQgY29tcG9uZW50VHlwZSgpOiBUeXBlPGFueT47XG4gIC8qKlxuICAgKiBTZWxlY3RvciBmb3IgYWxsIDxuZy1jb250ZW50PiBlbGVtZW50cyBpbiB0aGUgY29tcG9uZW50LlxuICAgKi9cbiAgYWJzdHJhY3QgZ2V0IG5nQ29udGVudFNlbGVjdG9ycygpOiBzdHJpbmdbXTtcbiAgLyoqXG4gICAqIFRoZSBpbnB1dHMgb2YgdGhlIGNvbXBvbmVudC5cbiAgICovXG4gIGFic3RyYWN0IGdldCBpbnB1dHMoKToge3Byb3BOYW1lOiBzdHJpbmcsIHRlbXBsYXRlTmFtZTogc3RyaW5nfVtdO1xuICAvKipcbiAgICogVGhlIG91dHB1dHMgb2YgdGhlIGNvbXBvbmVudC5cbiAgICovXG4gIGFic3RyYWN0IGdldCBvdXRwdXRzKCk6IHtwcm9wTmFtZTogc3RyaW5nLCB0ZW1wbGF0ZU5hbWU6IHN0cmluZ31bXTtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgY29tcG9uZW50LlxuICAgKi9cbiAgYWJzdHJhY3QgY3JlYXRlKFxuICAgICAgaW5qZWN0b3I6IEluamVjdG9yLCBwcm9qZWN0YWJsZU5vZGVzPzogYW55W11bXSwgcm9vdFNlbGVjdG9yT3JOb2RlPzogc3RyaW5nfGFueSxcbiAgICAgIG5nTW9kdWxlPzogTmdNb2R1bGVSZWY8YW55Pik6IENvbXBvbmVudFJlZjxDPjtcbn1cbiJdfQ==