import { ElementRef, Injector } from '@angular/core';
import { ValueAccessor } from './value-accessor';
import * as ɵngcc0 from '@angular/core';
export declare class NumericValueAccessor extends ValueAccessor {
    constructor(injector: Injector, el: ElementRef);
    _handleIonChange(el: any): void;
    registerOnChange(fn: (_: number | null) => void): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NumericValueAccessor, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NumericValueAccessor, "ion-input[type=number]", never, {}, {}, never>;
}

//# sourceMappingURL=numeric-value-accesssor.d.ts.map