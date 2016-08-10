import { ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';


/**
 * Import Providers
 */
import { ActionSheetController } from './components/action-sheet/action-sheet';
import { AlertController } from './components/alert/alert';
import { App } from './components/app/app';
import { Config, provideConfig } from './config/config';
import { Events, provideEvents } from './util/events';
import { FeatureDetect } from './util/feature-detect';
import { Form } from './util/form';
import { GestureController } from './gestures/gesture-controller';
import { IonicGestureConfig } from './gestures/gesture-config';
import { Keyboard } from './util/keyboard';
import { LoadingController } from './components/loading/loading';
import { MenuController } from './components/menu/menu-controller';
import { ModalController } from './components/modal/modal';
import { PickerController } from './components/picker/picker';
import { Platform, providePlatform, UserAgent, UserNavigatorPlatform, UserDir, UserLang } from './platform/platform';
import { PopoverController } from './components/popover/popover';
import { provideDeepLinker } from './navigation/deep-linker';
import { QueryParams, provideQueryParams, UserUrl } from './platform/query-params';
import { TapClick, provideTapClick } from './components/tap-click/tap-click';
import { ToastController } from './components/toast/toast';
import { Translate } from './translation/translate';
import { TransitionController } from './transitions/transition-controller';
import { UserRoot } from './components/app/app-root';


/**
 * Export Providers
 */
export { DeepLinker, provideDeepLinker } from './navigation/deep-linker';
export { NavController } from './navigation/nav-controller';
export { NavParams } from './navigation/nav-params';
export { NavLink, NavPath, NavOptions, DeepLink, DeepLinkConfig } from './navigation/nav-util';
export { ViewController } from './navigation/view-controller';


/**
 * @private
 * ionicProviders used by IonicModule
 */
export function ionicProviders(userRoot?: any, userConfig?: any, userDeepLinkConfig?: any): any[] {
  return [
    { provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: userRoot, multi: true },
    { provide: HAMMER_GESTURE_CONFIG, useClass: IonicGestureConfig },
    { provide: UserAgent, useFactory: getWindowUserAgent },
    { provide: UserDir, useFactory: getDocumentDir },
    { provide: UserLang, useFactory: getDocumentLang },
    { provide: UserNavigatorPlatform, useFactory: getWindowPlatform },
    { provide: UserRoot, useValue: userRoot },
    { provide: UserUrl, useFactory: getWindowLocation },

    provideConfig(userConfig),
    provideDeepLinker(userDeepLinkConfig),
    provideEvents(),
    providePlatform(),
    provideQueryParams(),
    provideTapClick(),

    ActionSheetController,
    AlertController,
    App,
    Form,
    FeatureDetect,
    GestureController,
    Keyboard,
    LoadingController,
    MenuController,
    ModalController,
    PickerController,
    PopoverController,
    TapClick,
    ToastController,
    Translate,
    TransitionController
  ];
}


/**
 * @private
 */
export function getWindowUserAgent() {
  return window && window.navigator.userAgent;
}

/**
 * @private
 */
export function getWindowPlatform() {
  return window && window.navigator.platform;
}

/**
 * @private
 */
export function getWindowLocation() {
  return window && window.location.href;
}

/**
 * @private
 */
export function getDocumentDir() {
  return document && document.documentElement.dir;
}

/**
 * @private
 */
export function getDocumentLang() {
  return document && document.documentElement.lang;
}
