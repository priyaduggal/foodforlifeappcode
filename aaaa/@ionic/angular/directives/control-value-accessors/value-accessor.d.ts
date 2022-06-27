import { AfterViewInit, ElementRef, Injector, OnDestroy } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
export declare class ValueAccessor implements ControlValueAccessor, AfterViewInit, OnDestroy {
    protected injector: Injector;
    protected el: ElementRef;
    private onChange;
    private onTouched;
    protected lastValue: any;
    private statusChanges?;
    constructor(injector: Injector, el: ElementRef);
    writeValue(value: any): void;
    handleChangeEvent(el: HTMLElement, value: any): void;
    _handleBlurEvent(el: any): void;
    registerOnChange(fn: (value: any) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ValueAccessor, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<ValueAccessor, never, never, {}, {}, never>;
}
export declare const setIonicClasses: (element: ElementRef<any>) => void;

//# sourceMappingURL=value-accessor.d.ts.map