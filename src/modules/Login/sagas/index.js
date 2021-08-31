import { all, call, put, takeLatest } from 'redux-saga/effects';

import api from 'services/api';
import makeRequest from 'services/makeRequest';
import { navigate } from 'src/navigation/navigationUtils';
import {
  INPUT_PIN_CODE_SCREEN,
  LOGIN_SCREEN,
  TAB_VIEW_SCREEN,
  VERIFY_REST_SCREEN,
  RESET_PASS_EMAIL_SUCCESS_SCREEN,
  RESET_PIN_EMAIL_SCREEN,
} from 'src/navigation/screenNames';
import {
  logInRequest,
  logInError,
  logInSuccess,
  logOutError,
  logOutSuccess,
  logOutRequest,
  verifyPinCode,
  verifyPinCodeError,
  resetPasswordViaPhoneRequest,
  verifyPinCodeSuccess,
  resetPasswordViaPhoneError,
  resetPasswordViaPhoneSuccess,
  resetPassViaEmailRequest,
  resetPassViaEmailSuccess,
  resetPassViaEmailError,
  resetPINViaEmailRequest,
  resetPINViaEmailSuccess,
  resetPINViaEmailError,
} from '../actions';
import {
  loginNotifications,
  logoutNotifications,
  MESSAGE_INVALID_USERNAME,
  pinCodeNotifications,
  resetPassViaPhoneNotifications,
  resetPassEmailNotifications,
} from '../constants';
import { getAccessToken } from '../utils';

export const onLogInSaga = function* ({ payload: { username, password } }) {
  try {
    const requestConfig = api.logInRequest({ username, password });
    const {
      headers: { 'set-cookie': cookies },
    } = yield call(makeRequest, requestConfig);

    const accessToken = yield call(getAccessToken, cookies[0]);
    yield put(logInSuccess({ accessToken }));
    navigate(INPUT_PIN_CODE_SCREEN);
  } catch (err) {
    const {
      data: { message },
    } = err.response;
    if (message === MESSAGE_INVALID_USERNAME) {
      yield put(logInError({ error: loginNotifications.wrongUsername }));
    } else {
      yield put(logInError({ error: loginNotifications.wrongPassword }));
    }
  }
};

export const onLogOutSaga = function* () {
  try {
    const requestConfig = api.logOutRequest();
    yield call(makeRequest, requestConfig);

    yield put(logOutSuccess(logoutNotifications.logoutSuccess));
    navigate(LOGIN_SCREEN);
  } catch (err) {
    yield put(logOutError(logoutNotifications.logoutError));
  }
};

export const onVerifyPinCodeSaga = function* ({ payload: { pin } }) {
  if (pin === '1234') {
    yield put(verifyPinCodeSuccess());
    navigate(TAB_VIEW_SCREEN);
  } else {
    yield put(verifyPinCodeError({ error: pinCodeNotifications.wrongPinCode }));
  }
};

//TODO: integrate with API
export const onResetPasswordViaPhoneSaga = function* ({ payload: { phoneNumber } }) {
  if (phoneNumber === '+60 123456789') {
    yield put(resetPasswordViaPhoneSuccess({ phoneNumber }));
    navigate(VERIFY_REST_SCREEN);
  } else {
    yield put(
      resetPasswordViaPhoneError({ error: resetPassViaPhoneNotifications.notExistedPhone }),
    );
  }
};

//TODO: integrate with API
export const onResetPassEmailSaga = function* ({ payload: { email } }) {
  if (email === 'test@gmail.com') {
    yield put(resetPassViaEmailSuccess());
    navigate(RESET_PASS_EMAIL_SUCCESS_SCREEN);
  } else {
    yield put(resetPassViaEmailError({ error: resetPassEmailNotifications.notExist }));
  }
};

//TODO: integrate with API
export const onResetPINEmailSaga = function* ({ payload: { email } }) {
  if (email === 'testPIN@gmail.com') {
    yield put(resetPINViaEmailSuccess());
    navigate(RESET_PASS_EMAIL_SUCCESS_SCREEN);
  } else {
    yield put(resetPINViaEmailError({ error: resetPassEmailNotifications.notExist }));
  }
};

export const logInWatcher = function* () {
  yield all([
    takeLatest(logInRequest, onLogInSaga),
    takeLatest(logOutRequest, onLogOutSaga),
    takeLatest(verifyPinCode, onVerifyPinCodeSaga),
    takeLatest(resetPasswordViaPhoneRequest, onResetPasswordViaPhoneSaga),
    takeLatest(resetPassViaEmailRequest, onResetPassEmailSaga),
    takeLatest(resetPINViaEmailRequest, onResetPINEmailSaga),
  ]);
};
