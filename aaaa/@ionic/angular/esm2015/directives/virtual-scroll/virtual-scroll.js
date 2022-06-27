import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ContentChild, ElementRef, EmbeddedViewRef, IterableDiffer, IterableDiffers, NgZone, SimpleChanges, TrackByFunction } from '@angular/core';
import { ProxyCmp } from '../proxies-utils';
import { VirtualFooter } from './virtual-footer';
import { VirtualHeader } from './virtual-header';
import { VirtualItem } from './virtual-item';
let IonVirtualScroll = class IonVirtualScroll {
    constructor(z, iterableDiffers, elementRef) {
        this.z = z;
        this.iterableDiffers = iterableDiffers;
        this.refMap = new WeakMap();
        this.el = elementRef.nativeElement;
        this.el.nodeRender = this.nodeRender.bind(this);
    }
    ngOnChanges(changes) {
        if (this.trackBy && 'items' in changes) {
            // React on virtualScroll changes only once all inputs have been initialized
            const value = changes['items'].currentValue;
            if (this.differ === undefined && value != null) {
                try {
                    this.differ = this.iterableDiffers.find(value).create(this.trackBy);
                }
                catch (e) {
                    throw new Error(`Cannot find a differ supporting object '${value}'. VirtualScroll only supports binding to Iterables such as Arrays.`);
                }
            }
        }
    }
    ngDoCheck() {
        // and if there actually are changes
        const changes = this.differ !== undefined && this.items ? this.differ.diff(this.items) : null;
        if (changes === null) {
            return;
        }
        // TODO: optimize
        this.checkRange(0);
    }
    nodeRender(el, cell, index) {
        return this.z.run(() => {
            let node;
            if (!el) {
                node = this.itmTmp.viewContainer.createEmbeddedView(this.getComponent(cell.type), { $implicit: cell.value, index }, index);
                el = getElement(node);
                this.refMap.set(el, node);
            }
            else {
                node = this.refMap.get(el);
                const ctx = node.context;
                ctx.$implicit = cell.value;
                ctx.index = cell.index;
            }
            // run sync change detections
            node.detectChanges();
            return el;
        });
    }
    getComponent(type) {
        switch (type) {
            case 'item': return this.itmTmp.templateRef;
            case 'header': return this.hdrTmp.templateRef;
            case 'footer': return this.ftrTmp.templateRef;
        }
        throw new Error('template for virtual item was not provided');
    }
};
IonVirtualScroll.ctorParameters = () => [
    { type: NgZone },
    { type: IterableDiffers },
    { type: ElementRef }
];
tslib_1.__decorate([
    ContentChild(VirtualItem, { static: false })
], IonVirtualScroll.prototype, "itmTmp", void 0);
tslib_1.__decorate([
    ContentChild(VirtualHeader, { static: false })
], IonVirtualScroll.prototype, "hdrTmp", void 0);
tslib_1.__decorate([
    ContentChild(VirtualFooter, { static: false })
], IonVirtualScroll.prototype, "ftrTmp", void 0);
IonVirtualScroll = tslib_1.__decorate([
    ProxyCmp({
        inputs: ['approxItemHeight', 'approxHeaderHeight', 'approxFooterHeight', 'headerFn', 'footerFn', 'items', 'itemHeight', 'headerHeight', 'footerHeight'],
        methods: ['checkEnd', 'checkRange', 'positionForItem']
    }),
    Component({
        selector: 'ion-virtual-scroll',
        template: '<ng-content></ng-content>',
        changeDetection: ChangeDetectionStrategy.OnPush,
        inputs: [
            'approxItemHeight',
            'approxHeaderHeight',
            'approxFooterHeight',
            'headerFn',
            'footerFn',
            'items',
            'itemHeight',
            'headerHeight',
            'footerHeight',
            'trackBy'
        ]
    })
], IonVirtualScroll);
export { IonVirtualScroll };
const getElement = (view) => {
    const rootNodes = view.rootNodes;
    for (let i = 0; i < rootNodes.length; i++) {
        if (rootNodes[i].nodeType === 1) {
            return rootNodes[i];
        }
    }
    throw new Error('virtual element was not created');
};
const ɵ0 = getElement;
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlydHVhbC1zY3JvbGwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uaWMvYW5ndWxhci8iLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMvdmlydHVhbC1zY3JvbGwvdmlydHVhbC1zY3JvbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxlQUFlLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUd2TCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFNUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFnSTdDLElBQWEsZ0JBQWdCLEdBQTdCLE1BQWEsZ0JBQWdCO0lBVTNCLFlBQ1UsQ0FBUyxFQUNULGVBQWdDLEVBQ3hDLFVBQXNCO1FBRmQsTUFBQyxHQUFELENBQUMsQ0FBUTtRQUNULG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQVJsQyxXQUFNLEdBQUcsSUFBSSxPQUFPLEVBQWdELENBQUM7UUFXM0UsSUFBSSxDQUFDLEVBQUUsR0FBRyxVQUFVLENBQUMsYUFBNEMsQ0FBQztRQUNsRSxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxPQUFPLElBQUksT0FBTyxFQUFFO1lBQ3RDLDRFQUE0RTtZQUM1RSxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsWUFB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b25lbnQsIENvbnRlbnRDaGlsZCwgRWxlbWVudFJlZiwgRW1iZWRkZWRWaWV3UmVmLCBJdGVyYWJsZURpZmZlciwgSXRlcmFibGVEaWZmZXJzLCBOZ1pvbmUsIFNpbXBsZUNoYW5nZXMsIFRyYWNrQnlGdW5jdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2VsbCwgQ2VsbFR5cGUsIEZvb3RlckhlaWdodEZuLCBIZWFkZXJGbiwgSGVhZGVySGVpZ2h0Rm4sIEl0ZW1IZWlnaHRGbiB9IGZyb20gJ0Bpb25pYy9jb3JlJztcblxuaW1wb3J0IHsgUHJveHlDbXAgfSBmcm9tICcuLi9wcm94aWVzLXV0aWxzJztcblxuaW1wb3J0IHsgVmlydHVhbEZvb3RlciB9IGZyb20gJy4vdmlydHVhbC1mb290ZXInO1xuaW1wb3J0IHsgVmlydHVhbEhlYWRlciB9IGZyb20gJy4vdmlydHVhbC1oZWFkZXInO1xuaW1wb3J0IHsgVmlydHVhbEl0ZW0gfSBmcm9tICcuL3ZpcnR1YWwtaXRlbSc7XG5pbXBvcnQgeyBWaXJ0dWFsQ29udGV4dCB9IGZyb20gJy4vdmlydHVhbC11dGlscyc7XG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25WaXJ0dWFsU2Nyb2xsIHtcbiAgLyoqXG4gICAqIEl0IGlzIGltcG9ydGFudCB0byBwcm92aWRlIHRoaXNcbiAgICogaWYgdmlydHVhbCBpdGVtIGhlaWdodCB3aWxsIGJlIHNpZ25pZmljYW50bHkgbGFyZ2VyIHRoYW4gdGhlIGRlZmF1bHRcbiAgICogVGhlIGFwcHJveGltYXRlIGhlaWdodCBvZiBlYWNoIHZpcnR1YWwgaXRlbSB0ZW1wbGF0ZSdzIGNlbGwuXG4gICAqIFRoaXMgZGltZW5zaW9uIGlzIHVzZWQgdG8gaGVscCBkZXRlcm1pbmUgaG93IG1hbnkgY2VsbHMgc2hvdWxkXG4gICAqIGJlIGNyZWF0ZWQgd2hlbiBpbml0aWFsaXplZCwgYW5kIHRvIGhlbHAgY2FsY3VsYXRlIHRoZSBoZWlnaHQgb2ZcbiAgICogdGhlIHNjcm9sbGFibGUgYXJlYS4gVGhpcyBoZWlnaHQgdmFsdWUgY2FuIG9ubHkgdXNlIGBweGAgdW5pdHMuXG4gICAqIE5vdGUgdGhhdCB0aGUgYWN0dWFsIHJlbmRlcmVkIHNpemUgb2YgZWFjaCBjZWxsIGNvbWVzIGZyb20gdGhlXG4gICAqIGFwcCdzIENTUywgd2hlcmVhcyB0aGlzIGFwcHJveGltYXRpb24gaXMgdXNlZCB0byBoZWxwIGNhbGN1bGF0ZVxuICAgKiBpbml0aWFsIGRpbWVuc2lvbnMgYmVmb3JlIHRoZSBpdGVtIGhhcyBiZWVuIHJlbmRlcmVkLlxuICAgKi9cbiAgYXBwcm94SXRlbUhlaWdodDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGUgYXBwcm94aW1hdGUgaGVpZ2h0IG9mIGVhY2ggaGVhZGVyIHRlbXBsYXRlJ3MgY2VsbC5cbiAgICogVGhpcyBkaW1lbnNpb24gaXMgdXNlZCB0byBoZWxwIGRldGVybWluZSBob3cgbWFueSBjZWxscyBzaG91bGRcbiAgICogYmUgY3JlYXRlZCB3aGVuIGluaXRpYWxpemVkLCBhbmQgdG8gaGVscCBjYWxjdWxhdGUgdGhlIGhlaWdodCBvZlxuICAgKiB0aGUgc2Nyb2xsYWJsZSBhcmVhLiBUaGlzIGhlaWdodCB2YWx1ZSBjYW4gb25seSB1c2UgYHB4YCB1bml0cy5cbiAgICogTm90ZSB0aGF0IHRoZSBhY3R1YWwgcmVuZGVyZWQgc2l6ZSBvZiBlYWNoIGNlbGwgY29tZXMgZnJvbSB0aGVcbiAgICogYXBwJ3MgQ1NTLCB3aGVyZWFzIHRoaXMgYXBwcm94aW1hdGlvbiBpcyB1c2VkIHRvIGhlbHAgY2FsY3VsYXRlXG4gICAqIGluaXRpYWwgZGltZW5zaW9ucyBiZWZvcmUgdGhlIGl0ZW0gaGFzIGJlZW4gcmVuZGVyZWQuXG4gICAqL1xuICBhcHByb3hIZWFkZXJIZWlnaHQ6IG51bWJlcjtcblxuICAvKipcbiAgICogVGhlIGFwcHJveGltYXRlIHdpZHRoIG9mIGVhY2ggZm9vdGVyIHRlbXBsYXRlJ3MgY2VsbC5cbiAgICogVGhpcyBkaW1lbnNpb24gaXMgdXNlZCB0byBoZWxwIGRldGVybWluZSBob3cgbWFueSBjZWxscyBzaG91bGRcbiAgICogYmUgY3JlYXRlZCB3aGVuIGluaXRpYWxpemVkLCBhbmQgdG8gaGVscCBjYWxjdWxhdGUgdGhlIGhlaWdodCBvZlxuICAgKiB0aGUgc2Nyb2xsYWJsZSBhcmVhLiBUaGlzIGhlaWdodCB2YWx1ZSBjYW4gb25seSB1c2UgYHB4YCB1bml0cy5cbiAgICogTm90ZSB0aGF0IHRoZSBhY3R1YWwgcmVuZGVyZWQgc2l6ZSBvZiBlYWNoIGNlbGwgY29tZXMgZnJvbSB0aGVcbiAgICogYXBwJ3MgQ1NTLCB3aGVyZWFzIHRoaXMgYXBwcm94aW1hdGlvbiBpcyB1c2VkIHRvIGhlbHAgY2FsY3VsYXRlXG4gICAqIGluaXRpYWwgZGltZW5zaW9ucyBiZWZvcmUgdGhlIGl0ZW0gaGFzIGJlZW4gcmVuZGVyZWQuXG4gICAqL1xuICBhcHByb3hGb290ZXJIZWlnaHQ6IG51bWJlcjtcblxuICAvKipcbiAgICogU2VjdGlvbiBoZWFkZXJzIGFuZCB0aGUgZGF0YSB1c2VkIHdpdGhpbiBpdHMgZ2l2ZW5cbiAgICogdGVtcGxhdGUgY2FuIGJlIGR5bmFtaWNhbGx5IGNyZWF0ZWQgYnkgcGFzc2luZyBhIGZ1bmN0aW9uIHRvIGBoZWFkZXJGbmAuXG4gICAqIEZvciBleGFtcGxlLCBhIGxhcmdlIGxpc3Qgb2YgY29udGFjdHMgdXN1YWxseSBoYXMgZGl2aWRlcnMgYmV0d2VlbiBlYWNoXG4gICAqIGxldHRlciBpbiB0aGUgYWxwaGFiZXQuIEFwcCdzIGNhbiBwcm92aWRlIHRoZWlyIG93biBjdXN0b20gYGhlYWRlckZuYFxuICAgKiB3aGljaCBpcyBjYWxsZWQgd2l0aCBlYWNoIHJlY29yZCB3aXRoaW4gdGhlIGRhdGFzZXQuIFRoZSBsb2dpYyB3aXRoaW5cbiAgICogdGhlIGhlYWRlciBmdW5jdGlvbiBjYW4gZGVjaWRlIGlmIHRoZSBoZWFkZXIgdGVtcGxhdGUgc2hvdWxkIGJlIHVzZWQsXG4gICAqIGFuZCB3aGF0IGRhdGEgdG8gZ2l2ZSB0byB0aGUgaGVhZGVyIHRlbXBsYXRlLiBUaGUgZnVuY3Rpb24gbXVzdCByZXR1cm5cbiAgICogYG51bGxgIGlmIGEgaGVhZGVyIGNlbGwgc2hvdWxkbid0IGJlIGNyZWF0ZWQuXG4gICAqL1xuICBoZWFkZXJGbj86IEhlYWRlckZuO1xuXG4gIC8qKlxuICAgKiBTZWN0aW9uIGZvb3RlcnMgYW5kIHRoZSBkYXRhIHVzZWQgd2l0aGluIGl0cyBnaXZlblxuICAgKiB0ZW1wbGF0ZSBjYW4gYmUgZHluYW1pY2FsbHkgY3JlYXRlZCBieSBwYXNzaW5nIGEgZnVuY3Rpb24gdG8gYGZvb3RlckZuYC5cbiAgICogVGhlIGxvZ2ljIHdpdGhpbiB0aGUgZm9vdGVyIGZ1bmN0aW9uIGNhbiBkZWNpZGUgaWYgdGhlIGZvb3RlciB0ZW1wbGF0ZVxuICAgKiBzaG91bGQgYmUgdXNlZCwgYW5kIHdoYXQgZGF0YSB0byBnaXZlIHRvIHRoZSBmb290ZXIgdGVtcGxhdGUuIFRoZSBmdW5jdGlvblxuICAgKiBtdXN0IHJldHVybiBgbnVsbGAgaWYgYSBmb290ZXIgY2VsbCBzaG91bGRuJ3QgYmUgY3JlYXRlZC5cbiAgICovXG4gIGZvb3RlckZuPzogSGVhZGVyRm47XG5cbiAgLyoqXG4gICAqIFRoZSBkYXRhIHRoYXQgYnVpbGRzIHRoZSB0ZW1wbGF0ZXMgd2l0aGluIHRoZSB2aXJ0dWFsIHNjcm9sbC5cbiAgICogSXQncyBpbXBvcnRhbnQgdG8gbm90ZSB0aGF0IHdoZW4gdGhpcyBkYXRhIGhhcyBjaGFuZ2VkLCB0aGVuIHRoZVxuICAgKiBlbnRpcmUgdmlydHVhbCBzY3JvbGwgaXMgcmVzZXQsIHdoaWNoIGlzIGFuIGV4cGVuc2l2ZSBvcGVyYXRpb24gYW5kXG4gICAqIHNob3VsZCBiZSBhdm9pZGVkIGlmIHBvc3NpYmxlLlxuICAgKi9cbiAgaXRlbXM/OiBhbnlbXSB8IG51bGw7XG5cbiAgLyoqXG4gICAqIEFuIG9wdGlvbmFsIGZ1bmN0aW9uIHRoYXQgbWFwcyBlYWNoIGl0ZW0gd2l0aGluIHRoZWlyIGhlaWdodC5cbiAgICogV2hlbiB0aGlzIGZ1bmN0aW9uIGlzIHByb3ZpZGVkLCBoZWF2eSBvcHRpbWl6YXRpb25zIGFuZCBmYXN0IHBhdGggY2FuIGJlIHRha2VkIGJ5XG4gICAqIGBpb24tdmlydHVhbC1zY3JvbGxgIGxlYWRpbmcgdG8gbWFzc2l2ZSBwZXJmb3JtYW5jZSBpbXByb3ZlbWVudHMuXG4gICAqXG4gICAqIFRoaXMgZnVuY3Rpb24gYWxsb3dzIHRvIHNraXAgYWxsIERPTSByZWFkcywgd2hpY2ggY2FuIGJlIERvaW5nIHNvIGxlYWRzXG4gICAqIHRvIG1hc3NpdmUgcGVyZm9ybWFuY2VcbiAgICovXG4gIGl0ZW1IZWlnaHQ/OiBJdGVtSGVpZ2h0Rm47XG5cbiAgLyoqXG4gICAqIEFuIG9wdGlvbmFsIGZ1bmN0aW9uIHRoYXQgbWFwcyBlYWNoIGl0ZW0gaGVhZGVyIHdpdGhpbiB0aGVpciBoZWlnaHQuXG4gICAqL1xuICBoZWFkZXJIZWlnaHQ/OiBIZWFkZXJIZWlnaHRGbjtcblxuICAvKipcbiAgICogQW4gb3B0aW9uYWwgZnVuY3Rpb24gdGhhdCBtYXBzIGVhY2ggaXRlbSBmb290ZXIgd2l0aGluIHRoZWlyIGhlaWdodC5cbiAgICovXG4gIGZvb3RlckhlaWdodD86IEZvb3RlckhlaWdodEZuO1xuXG4gIC8qKlxuICAgKiBTYW1lIGFzIGBuZ0ZvclRyYWNrQnlgIHdoaWNoIGNhbiBiZSB1c2VkIG9uIGBuZ0ZvcmAuXG4gICAqL1xuICB0cmFja0J5OiBUcmFja0J5RnVuY3Rpb248YW55PjtcblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgbWFya3MgdGhlIHRhaWwgdGhlIGl0ZW1zIGFycmF5IGFzIGRpcnR5LCBzbyB0aGV5IGNhbiBiZSByZS1yZW5kZXJlZC4gIEl0J3MgZXF1aXZhbGVudCB0byBjYWxsaW5nOiAgYGBganMgICAgKiB2aXJ0dWFsU2Nyb2xsLmNoZWNrUmFuZ2UobGFzdEl0ZW1MZW4sIGl0ZW1zLmxlbmd0aCAtIGxhc3RJdGVtTGVuKTsgICAgKiBgYGBcbiAgICovXG4gICdjaGVja0VuZCc6ICgpID0+IHZvaWQ7XG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBtYXJrcyBhIHN1YnNldCBvZiBpdGVtcyBhcyBkaXJ0eSwgc28gdGhleSBjYW4gYmUgcmUtcmVuZGVyZWQuIEl0ZW1zIHNob3VsZCBiZSBtYXJrZWQgYXMgZGlydHkgYW55IHRpbWUgdGhlIGNvbnRlbnQgb3IgdGhlaXIgc3R5bGUgY2hhbmdlcy4gIFRoZSBzdWJzZXQgb2YgaXRlbXMgdG8gYmUgdXBkYXRlZCBjYW4gYXJlIHNwZWNpZmluZyBieSBhbiBvZmZzZXQgYW5kIGEgbGVuZ3RoLlxuICAgKi9cbiAgJ2NoZWNrUmFuZ2UnOiAob2Zmc2V0OiBudW1iZXIsIGxlbj86IG51bWJlcikgPT4gdm9pZDtcbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHBvc2l0aW9uIG9mIHRoZSB2aXJ0dWFsIGl0ZW0gYXQgdGhlIGdpdmVuIGluZGV4LlxuICAgKi9cbiAgJ3Bvc2l0aW9uRm9ySXRlbSc6IChpbmRleDogbnVtYmVyKSA9PiBQcm9taXNlPG51bWJlcj47XG59XG5cbkBQcm94eUNtcCh7XG4gIGlucHV0czogWydhcHByb3hJdGVtSGVpZ2h0JywgJ2FwcHJveEhlYWRlckhlaWdodCcsICdhcHByb3hGb290ZXJIZWlnaHQnLCAnaGVhZGVyRm4nLCAnZm9vdGVyRm4nLCAnaXRlbXMnLCAnaXRlbUhlaWdodCcsICdoZWFkZXJIZWlnaHQnLCAnZm9vdGVySGVpZ2h0J10sXG4gIG1ldGhvZHM6IFsnY2hlY2tFbmQnLCAnY2hlY2tSYW5nZScsICdwb3NpdGlvbkZvckl0ZW0nXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lvbi12aXJ0dWFsLXNjcm9sbCcsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBpbnB1dHM6IFtcbiAgICAnYXBwcm94SXRlbUhlaWdodCcsXG4gICAgJ2FwcHJveEhlYWRlckhlaWdodCcsXG4gICAgJ2FwcHJveEZvb3RlckhlaWdodCcsXG4gICAgJ2hlYWRlckZuJyxcbiAgICAnZm9vdGVyRm4nLFxuICAgICdpdGVtcycsXG4gICAgJ2l0ZW1IZWlnaHQnLFxuICAgICdoZWFkZXJIZWlnaHQnLFxuICAgICdmb290ZXJIZWlnaHQnLFxuICAgICd0cmFja0J5J1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIElvblZpcnR1YWxTY3JvbGwge1xuXG4gIHByaXZhdGUgZGlmZmVyPzogSXRlcmFibGVEaWZmZXI8YW55PjtcbiAgcHJpdmF0ZSBlbDogSFRNTElvblZpcnR1YWxTY3JvbGxFbGVtZW50O1xuICBwcml2YXRlIHJlZk1hcCA9IG5ldyBXZWFrTWFwPEhUTUxFbGVtZW50LCBFbWJlZGRlZFZpZXdSZWY8VmlydHVhbENvbnRleHQ+PigpO1xuXG4gIEBDb250ZW50Q2hpbGQoVmlydHVhbEl0ZW0sIHsgc3RhdGljOiBmYWxzZSB9KSBpdG1UbXAhOiBWaXJ0dWFsSXRlbTtcbiAgQENvbnRlbnRDaGlsZChWaXJ0dWFsSGVhZGVyLCB7IHN0YXRpYzogZmFsc2UgfSkgaGRyVG1wITogVmlydHVhbEhlYWRlcjtcbiAgQENvbnRlbnRDaGlsZChWaXJ0dWFsRm9vdGVyLCB7IHN0YXRpYzogZmFsc2UgfSkgZnRyVG1wITogVmlydHVhbEZvb3RlcjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHo6IE5nWm9uZSxcbiAgICBwcml2YXRlIGl0ZXJhYmxlRGlmZmVyczogSXRlcmFibGVEaWZmZXJzLFxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICkge1xuICAgIHRoaXMuZWwgPSBlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTElvblZpcnR1YWxTY3JvbGxFbGVtZW50O1xuICAgIHRoaXMuZWwubm9kZVJlbmRlciA9IHRoaXMubm9kZVJlbmRlci5iaW5kKHRoaXMpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmICh0aGlzLnRyYWNrQnkgJiYgJ2l0ZW1zJyBpbiBjaGFuZ2VzKSB7XG4gICAgICAvLyBSZWFjdCBvbiB2aXJ0dWFsU2Nyb2xsIGNoYW5nZXMgb25seSBvbmNlIGFsbCBpbnB1dHMgaGF2ZSBiZWVuIGluaXRpYWxpemVkXG4gICAgICBjb25zdCB2YWx1ZSA9IGNoYW5nZXNbJ2l0ZW1zJ10uY3VycmVudFZhbHVlO1xuICAgICAgaWYgKHRoaXMuZGlmZmVyID09PSB1bmRlZmluZWQgJiYgdmFsdWUgIT0gbnVsbCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoaXMuZGlmZmVyID0gdGhpcy5pdGVyYWJsZURpZmZlcnMuZmluZCh2YWx1ZSkuY3JlYXRlKHRoaXMudHJhY2tCeSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgQ2Fubm90IGZpbmQgYSBkaWZmZXIgc3VwcG9ydGluZyBvYmplY3QgJyR7dmFsdWV9Jy4gVmlydHVhbFNjcm9sbCBvbmx5IHN1cHBvcnRzIGJpbmRpbmcgdG8gSXRlcmFibGVzIHN1Y2ggYXMgQXJyYXlzLmApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdEb0NoZWNrKCkge1xuICAgIC8vIGFuZCBpZiB0aGVyZSBhY3R1YWxseSBhcmUgY2hhbmdlc1xuICAgIGNvbnN0IGNoYW5nZXMgPSB0aGlzLmRpZmZlciAhPT0gdW5kZWZpbmVkICYmIHRoaXMuaXRlbXMgPyB0aGlzLmRpZmZlci5kaWZmKHRoaXMuaXRlbXMpIDogbnVsbDtcbiAgICBpZiAoY2hhbmdlcyA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBUT0RPOiBvcHRpbWl6ZVxuICAgIHRoaXMuY2hlY2tSYW5nZSgwKTtcbiAgfVxuXG4gIHByaXZhdGUgbm9kZVJlbmRlcihlbDogSFRNTEVsZW1lbnQgfCBudWxsLCBjZWxsOiBDZWxsLCBpbmRleDogbnVtYmVyKTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLnoucnVuKCgpID0+IHtcbiAgICAgIGxldCBub2RlOiBFbWJlZGRlZFZpZXdSZWY8VmlydHVhbENvbnRleHQ+O1xuICAgICAgaWYgKCFlbCkge1xuICAgICAgICBub2RlID0gdGhpcy5pdG1UbXAudmlld0NvbnRhaW5lci5jcmVhdGVFbWJlZGRlZFZpZXcoXG4gICAgICAgICAgdGhpcy5nZXRDb21wb25lbnQoY2VsbC50eXBlKSxcbiAgICAgICAgICB7ICRpbXBsaWNpdDogY2VsbC52YWx1ZSwgaW5kZXggfSxcbiAgICAgICAgICBpbmRleFxuICAgICAgICApO1xuICAgICAgICBlbCA9IGdldEVsZW1lbnQobm9kZSk7XG4gICAgICAgIHRoaXMucmVmTWFwLnNldChlbCwgbm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub2RlID0gdGhpcy5yZWZNYXAuZ2V0KGVsKSE7XG4gICAgICAgIGNvbnN0IGN0eCA9IG5vZGUuY29udGV4dDtcbiAgICAgICAgY3R4LiRpbXBsaWNpdCA9IGNlbGwudmFsdWU7XG4gICAgICAgIGN0eC5pbmRleCA9IGNlbGwuaW5kZXg7XG4gICAgICB9XG4gICAgICAvLyBydW4gc3luYyBjaGFuZ2UgZGV0ZWN0aW9uc1xuICAgICAgbm9kZS5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICByZXR1cm4gZWw7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGdldENvbXBvbmVudCh0eXBlOiBDZWxsVHlwZSkge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnaXRlbSc6IHJldHVybiB0aGlzLml0bVRtcC50ZW1wbGF0ZVJlZjtcbiAgICAgIGNhc2UgJ2hlYWRlcic6IHJldHVybiB0aGlzLmhkclRtcC50ZW1wbGF0ZVJlZjtcbiAgICAgIGNhc2UgJ2Zvb3Rlcic6IHJldHVybiB0aGlzLmZ0clRtcC50ZW1wbGF0ZVJlZjtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKCd0ZW1wbGF0ZSBmb3IgdmlydHVhbCBpdGVtIHdhcyBub3QgcHJvdmlkZWQnKTtcbiAgfVxufVxuXG5jb25zdCBnZXRFbGVtZW50ID0gKHZpZXc6IEVtYmVkZGVkVmlld1JlZjxWaXJ0dWFsQ29udGV4dD4pOiBIVE1MRWxlbWVudCA9PiB7XG4gIGNvbnN0IHJvb3ROb2RlcyA9IHZpZXcucm9vdE5vZGVzO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHJvb3ROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChyb290Tm9kZXNbaV0ubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgIHJldHVybiByb290Tm9kZXNbaV07XG4gICAgfVxuICB9XG4gIHRocm93IG5ldyBFcnJvcigndmlydHVhbCBlbGVtZW50IHdhcyBub3QgY3JlYXRlZCcpO1xufTtcbiJdfQ==