import type { EventInitDict } from '@stencil/core/internal';
import type * as pd from './puppeteer-declarations';
import type * as puppeteer from 'puppeteer';
import { EventSpy } from './puppeteer-events';
import { MockHTMLElement } from '@stencil/core/mock-doc';
export declare class E2EElement extends MockHTMLElement implements pd.E2EElementInternal {
    private _page;
    private _elmHandle;
    private _queuedActions;
    private _queueAction;
    constructor(_page: pd.E2EPageInternal, _elmHandle: puppeteer.ElementHandle);
    find(selector: string): Promise<E2EElement>;
    findAll(selector: string): Promise<E2EElement[]>;
    callMethod(methodName: string, ...methodArgs: any[]): Promise<unknown>;
    triggerEvent(eventName: string, eventInitDict?: EventInitDict): void;
    spyOnEvent(eventName: string): Promise<EventSpy>;
    click(options?: puppeteer.ClickOptions): Promise<void>;
    focus(): Promise<void>;
    hover(): Promise<void>;
    isVisible(): Promise<boolean>;
    waitForEvent(eventName: string): Promise<any>;
    waitForVisible(): Promise<void>;
    waitForNotVisible(): Promise<void>;
    isIntersectingViewport(): Promise<boolean>;
    press(key: puppeteer.KeyInput, options?: {
        text?: string;
        delay?: number;
    }): Promise<void>;
    tap(): Promise<void>;
    type(text: string, options?: {
        delay: number;
    }): Promise<void>;
    getProperty(propertyName: string): Promise<unknown>;
    setProperty(propertyName: string, value: any): void;
    getAttribute(name: string): any;
    setAttribute(name: string, value: any): void;
    removeAttribute(name: string): void;
    toggleAttribute(name: string, force?: boolean): void;
    get classList(): any;
    get className(): string;
    set className(value: string);
    get id(): string;
    set id(value: string);
    get innerHTML(): string;
    set innerHTML(value: string);
    get innerText(): string;
    set innerText(value: string);
    get nodeValue(): string;
    set nodeValue(value: string);
    get outerHTML(): any;
    set outerHTML(_: any);
    get shadowRoot(): any;
    set shadowRoot(value: any);
    get tabIndex(): number;
    set tabIndex(value: number);
    get textContent(): string;
    set textContent(value: string);
    get title(): string;
    set title(value: string);
    getComputedStyle(pseudoElt?: string | null): Promise<any>;
    e2eRunActions(): Promise<unknown>;
    e2eSync(): Promise<void>;
    private _validate;
    e2eDispose(): Promise<void>;
}
export declare function find(page: pd.E2EPageInternal, rootHandle: puppeteer.ElementHandle, selector: pd.FindSelector): Promise<E2EElement>;
export declare function findAll(page: pd.E2EPageInternal, rootHandle: puppeteer.ElementHandle, selector: pd.FindSelector): Promise<E2EElement[]>;
