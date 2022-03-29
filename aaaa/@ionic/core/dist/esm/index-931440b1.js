import { c as writeTask, B as Build } from './index-7a8b7a1c.js';
import { c as componentOnReady } from './helpers-dd7e4b7b.js';

const LIFECYCLE_WILL_ENTER = 'ionViewWillEnter';
const LIFECYCLE_DID_ENTER = 'ionViewDidEnter';
const LIFECYCLE_WILL_LEAVE = 'ionViewWillLeave';
const LIFECYCLE_DID_LEAVE = 'ionViewDidLeave';
const LIFECYCLE_WILL_UNLOAD = 'ionViewWillUnload';

const iosTransitionAnimation = () => import('./ios.transition-12db6216.js');
const mdTransitionAnimation = () => import('./md.transition-eecd3a67.js');
const transition = (opts) => {
  return new Promise((resolve, reject) => {
    writeTask(() => {
      beforeTransition(opts);
      runTransition(opts).then(result => {
        if (result.animation) {
          result.animation.destroy();
        }
        afterTransition(opts);
        resolve(result);
      }, error => {
        afterTransition(opts);
        reject(error);
      });
    });
  });
};
const beforeTransition = (opts) => {
  const enteringEl = opts.enteringEl;
  const leavingEl = opts.leavingEl;
  setZIndex(enteringEl, leavingEl, opts.direction);
  if (opts.showGoBack) {
    enteringEl.classList.add('can-go-back');
  }
  else {
    enteringEl.classList.remove('can-go-back');
  }
  setPageHidden(enteringEl, false);
  /**
   * When transitioning, the page should not
   * respond to click events. This resolves small
   * issues like users double tapping the ion-back-button.
   * These pointer events are removed in `afterTransition`.
   */
  enteringEl.style.setProperty('pointer-events', 'none');
  if (leavingEl) {
    setPageHidden(leavingEl, false);
    leavingEl.style.setProperty('pointer-events', 'none');
  }
};
const runTransition = async (opts) => {
  const animationBuilder = await getAnimationBuilder(opts);
  const ani = (animationBuilder && Build.isBrowser)
    ? animation(animationBuilder, opts)
    : noAnimation(opts); // fast path for no animation
  return ani;
};
const afterTransition = (opts) => {
  const enteringEl = opts.enteringEl;
  const leavingEl = opts.leavingEl;
  enteringEl.classList.remove('ion-page-invisible');
  enteringEl.style.removeProperty('pointer-events');
  if (leavingEl !== undefined) {
    leavingEl.classList.remove('ion-page-invisible');
    leavingEl.style.removeProperty('pointer-events');
  }
};
const getAnimationBuilder = async (opts) => {
  if (!opts.leavingEl || !opts.animated || opts.duration === 0) {
    return undefined;
  }
  if (opts.animationBuilder) {
    return opts.animationBuilder;
  }
  const getAnimation = (opts.mode === 'ios')
    ? (await iosTransitionAnimation()).iosTransitionAnimation
    : (await mdTransitionAnimation()).mdTransitionAnimation;
  return getAnimation;
};
const animation = async (animationBuilder, opts) => {
  await waitForReady(opts, true);
  const trans = animationBuilder(opts.baseEl, opts);
  fireWillEvents(opts.enteringEl, opts.leavingEl);
  const didComplete = await playTransition(trans, opts);
  if (opts.progressCallback) {
    opts.progressCallback(undefined);
  }
  if (didComplete) {
    fireDidEvents(opts.enteringEl, opts.leavingEl);
  }
  return {
    hasCompleted: didComplete,
    animation: trans
  };
};
const noAnimation = async (opts) => {
  const enteringEl = opts.enteringEl;
  const leavingEl = opts.leavingEl;
  await waitForReady(opts, false);
  fireWillEvents(enteringEl, leavingEl);
  fireDidEvents(enteringEl, leavingEl);
  return {
    hasCompleted: true
  };
};
const waitForReady = async (opts, defaultDeep) => {
  const deep = opts.deepWait !== undefined ? opts.deepWait : defaultDeep;
  const promises = deep ? [
    deepReady(opts.enteringEl),
    deepReady(opts.leavingEl),
  ] : [
    shallowReady(opts.enteringEl),
    shallowReady(opts.leavingEl),
  ];
  await Promise.all(promises);
  await notifyViewReady(opts.viewIsReady, opts.enteringEl);
};
const notifyViewReady = async (viewIsReady, enteringEl) => {
  if (viewIsReady) {
    await viewIsReady(enteringEl);
  }
};
const playTransition = (trans, opts) => {
  const progressCallback = opts.progressCallback;
  const promise = new Promise(resolve => {
    trans.onFinish((currentStep) => resolve(currentStep === 1));
  });
  // cool, let's do this, start the transition
  if (progressCallback) {
    // this is a swipe to go back, just get the transition progress ready
    // kick off the swipe animation start
    trans.progressStart(true);
    progressCallback(trans);
  }
  else {
    // only the top level transition should actually start "play"
    // kick it off and let it play through
    // ******** DOM WRITE ****************
    trans.play();
  }
  // create a callback for when the animation is done
  return promise;
};
const fireWillEvents = (enteringEl, leavingEl) => {
  lifecycle(leavingEl, LIFECYCLE_WILL_LEAVE);
  lifecycle(enteringEl, LIFECYCLE_WILL_ENTER);
};
const fireDidEvents = (enteringEl, leavingEl) => {
  lifecycle(enteringEl, LIFECYCLE_DID_ENTER);
  lifecycle(leavingEl, LIFECYCLE_DID_LEAVE);
};
const lifecycle = (el, eventName) => {
  if (el) {
    const ev = new CustomEvent(eventName, {
      bubbles: false,
      cancelable: false,
    });
    el.dispatchEvent(ev);
  }
};
const shallowReady = (el) => {
  if (el) {
    return new Promise(resolve => componentOnReady(el, resolve));
  }
  return Promise.resolve();
};
const deepReady = async (el) => {
  const element = el;
  if (element) {
    if (element.componentOnReady != null) {
      const stencilEl = await element.componentOnReady();
      if (stencilEl != null) {
        return;
      }
    }
    await Promise.all(Array.from(element.children).map(deepReady));
  }
};
const setPageHidden = (el, hidden) => {
  if (hidden) {
    el.setAttribute('aria-hidden', 'true');
    el.classList.add('ion-page-hidden');
  }
  else {
    el.hidden = false;
    el.removeAttribute('aria-hidden');
    el.classList.remove('ion-page-hidden');
  }
};
const setZIndex = (enteringEl, leavingEl, direction) => {
  if (enteringEl !== undefined) {
    enteringEl.style.zIndex = (direction === 'back')
      ? '99'
      : '101';
  }
  if (leavingEl !== undefined) {
    leavingEl.style.zIndex = '100';
  }
};
const getIonPageElement = (element) => {
  if (element.classList.contains('ion-page')) {
    return element;
  }
  const ionPage = element.querySelector(':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs');
  if (ionPage) {
    return ionPage;
  }
  // idk, return the original element so at least something animates and we don't have a null pointer
  return element;
};

export { LIFECYCLE_WILL_ENTER as L, LIFECYCLE_DID_ENTER as a, LIFECYCLE_WILL_LEAVE as b, LIFECYCLE_DID_LEAVE as c, LIFECYCLE_WILL_UNLOAD as d, deepReady as e, getIonPageElement as g, lifecycle as l, setPageHidden as s, transition as t };
