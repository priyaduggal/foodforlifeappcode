import { Location } from '@angular/common';
import { ComponentRef, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '../../providers/nav-controller';
import { RouteView, StackEvent } from './stack-utils';
export declare class StackController {
    private containerEl;
    private router;
    private navCtrl;
    private zone;
    private location;
    private views;
    private runningTask?;
    private skipTransition;
    private tabsPrefix;
    private activeView;
    private nextId;
    constructor(tabsPrefix: string | undefined, containerEl: HTMLIonRouterOutletElement, router: Router, navCtrl: NavController, zone: NgZone, location: Location);
    createView(ref: ComponentRef<any>, activatedRoute: ActivatedRoute): RouteView;
    getExistingView(activatedRoute: ActivatedRoute): RouteView | undefined;
    setActive(enteringView: RouteView): Promise<StackEvent>;
    canGoBack(deep: number, stackId?: string): boolean;
    pop(deep: number, stackId?: string): Promise<boolean>;
    startBackTransition(): Promise<void> | Promise<boolean>;
    endBackTransition(shouldComplete: boolean): void;
    getLastUrl(stackId?: string): RouteView;
    /**
     * @internal
     */
    getRootUrl(stackId?: string): RouteView;
    getActiveStackId(): string | undefined;
    hasRunningTask(): boolean;
    destroy(): void;
    private getStack;
    private insertView;
    private transition;
    private wait;
}
