import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import * as SCREEN_NAMES from 'navigation/screenNames';
import ChooseLanguageScreen from 'modules/ChooseLanguage/components/ChooseLanguage';
import LoginScreen from 'modules/Login/components/LoginScreen';
import TabView from 'src/modules/Home/components/TabView';
import SplashScreen from 'src/modules/Login/components/Splash';
import InputCodeScreen from 'modules/Login/components/InputCodeScreen';
import ResetPasswordPhoneScreen from 'modules/Login/components/ResetPasswordByPhone';
import VerifyResetScreen from 'modules/Login/components/VerifyResetScreen';
import ResetPassEmailScreen from 'modules/Login/components/ResetPassEmailScreen';
import ResetPINEmailScreen from 'modules/Login/components/ResetPINEmailScreen';
import ResetPassEmailSuccessScreen from 'modules/Login/components/ResetPassEmailSuccessScreen';
import { BACK_SIGN_IN_BUTTON } from 'src/i18n/key';
import I18NKey from 'src/i18n/key';
import {
  backButtonOptions,
  defaultOptions,
  hideHeaderOptions,
  titleOptions,
} from './navigationOptions';

const Stack = createNativeStackNavigator();

const screensMapping = Object.freeze({
  [SCREEN_NAMES.LOGIN_SCREEN]: { component: LoginScreen, options: { ...hideHeaderOptions } },
  [SCREEN_NAMES.TAB_VIEW_SCREEN]: { component: TabView, options: { ...hideHeaderOptions } },
  [SCREEN_NAMES.CHOOSE_LANGUAGE]: {
    component: ChooseLanguageScreen,
    options: { ...hideHeaderOptions },
  },
  [SCREEN_NAMES.SPLASH_SCREEN]: {
    component: SplashScreen,
    options: { ...hideHeaderOptions },
  },
  [SCREEN_NAMES.INPUT_PIN_CODE_SCREEN]: {
    component: InputCodeScreen,
    options: { ...defaultOptions, ...backButtonOptions(BACK_SIGN_IN_BUTTON), title: '' },
  },
  [SCREEN_NAMES.RESET_PASSWORD_PHONE_SCREEN]: {
    component: ResetPasswordPhoneScreen,
    options: {
      ...defaultOptions,
      ...titleOptions({ i18nKey: I18NKey.RESET_PASSWORD }),
      ...backButtonOptions(),
    },
  },
  [SCREEN_NAMES.VERIFY_REST_SCREEN]: {
    component: VerifyResetScreen,
    options: { ...hideHeaderOptions },
  },
  [SCREEN_NAMES.RESET_PASS_EMAIL_SCREEN]: {
    component: ResetPassEmailScreen,
    options: {
      ...defaultOptions,
      ...titleOptions({ i18nKey: I18NKey.RESET_PASSWORD }),
      ...backButtonOptions(),
    },
  },
  [SCREEN_NAMES.RESET_PASS_EMAIL_SUCCESS_SCREEN]: {
    component: ResetPassEmailSuccessScreen,
    options: { ...hideHeaderOptions },
  },
  [SCREEN_NAMES.RESET_PIN_EMAIL_SCREEN]: {
    component: ResetPINEmailScreen,
    options: {
      ...defaultOptions,
      ...titleOptions({ i18nKey: I18NKey.RESET_PIN }),
      ...backButtonOptions(),
    },
  },
});

const rootStack = (
  <Stack.Navigator initialRouteName={SCREEN_NAMES.SPLASH_SCREEN}>
    {Object.keys(screensMapping).map(screenName => (
      <Stack.Screen
        key={screenName}
        name={screenName}
        component={screensMapping[screenName].component}
        options={screensMapping[screenName].options}
      />
    ))}
  </Stack.Navigator>
);

export default rootStack;
