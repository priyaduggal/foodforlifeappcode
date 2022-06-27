import { LocationStrategy } from '@angular/common';
import { ElementRef } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AnimationBuilder, RouterDirection } from '@ionic/core';
import { NavController } from '../../providers/nav-controller';
import * as ɵngcc0 from '@angular/core';
export declare class RouterLinkDelegate {
    private locationStrategy;
    private navCtrl;
    private elementRef;
    private router;
    private routerLink?;
    private subscription?;
    routerDirection: RouterDirection;
    routerAnimation?: AnimationBuilder;
    constructor(locationStrategy: LocationStrategy, navCtrl: NavController, elementRef: ElementRef, router: Router, routerLink?: RouterLink);
    ngOnInit(): void;
    ngOnChanges(): any;
    ngOnDestroy(): any;
    private updateTargetUrlAndHref;
    /**
     * @internal
     */
    onClick(ev: UIEvent): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<RouterLinkDelegate, [null, null, null, null, { optional: true; }]>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<RouterLinkDelegate, "[routerLink]", never, { "routerDirection": "routerDirection"; "routerAnimation": "routerAnimation"; }, {}, never>;
}

//# sourceMappingURL=router-link-delegate.d.ts.map