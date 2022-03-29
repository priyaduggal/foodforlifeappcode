import { EventEmitter } from '@angular/core';
import { NavController } from '../../providers/nav-controller';
import { IonTabBar } from '../proxies';
import { IonRouterOutlet } from './ion-router-outlet';
import { StackEvent } from './stack-utils';
import * as ɵngcc0 from '@angular/core';
export declare class IonTabs {
    private navCtrl;
    outlet: IonRouterOutlet;
    tabBar: IonTabBar | undefined;
    ionTabsWillChange: EventEmitter<{
        tab: string;
    }>;
    ionTabsDidChange: EventEmitter<{
        tab: string;
    }>;
    constructor(navCtrl: NavController);
    /**
     * @internal
     */
    onPageSelected(detail: StackEvent): void;
    /**
     * When a tab button is clicked, there are several scenarios:
     * 1. If the selected tab is currently active (the tab button has been clicked
     *    again), then it should go to the root view for that tab.
     *
     *   a. Get the saved root view from the router outlet. If the saved root view
     *      matches the tabRootUrl, set the route view to this view including the
     *      navigation extras.
     *   b. If the saved root view from the router outlet does
     *      not match, navigate to the tabRootUrl. No navigation extras are
     *      included.
     *
     * 2. If the current tab tab is not currently selected, get the last route
     *    view from the router outlet.
     *
     *   a. If the last route view exists, navigate to that view including any
     *      navigation extras
     *   b. If the last route view doesn't exist, then navigate
     *      to the default tabRootUrl
     */
    select(tabOrEvent: string | CustomEvent): Promise<boolean>;
    getSelected(): string | undefined;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<IonTabs, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<IonTabs, "ion-tabs", never, {}, { "ionTabsWillChange": "ionTabsWillChange"; "ionTabsDidChange": "ionTabsDidChange"; }, ["tabBar"], ["[slot=top]", "*"]>;
}

//# sourceMappingURL=ion-tabs.d.ts.map