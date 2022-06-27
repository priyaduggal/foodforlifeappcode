import { ComponentFactoryResolver, Injector } from '@angular/core';
import { ModalOptions } from '@ionic/core';
import { OverlayBaseController } from '../util/overlay';
import { AngularDelegate } from './angular-delegate';
import * as ɵngcc0 from '@angular/core';
export declare class ModalController extends OverlayBaseController<ModalOptions, HTMLIonModalElement> {
    private angularDelegate;
    private resolver;
    private injector;
    constructor(angularDelegate: AngularDelegate, resolver: ComponentFactoryResolver, injector: Injector);
    create(opts: ModalOptions): Promise<HTMLIonModalElement>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ModalController, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ModalController>;
}

//# sourceMappingURL=modal-controller.d.ts.map