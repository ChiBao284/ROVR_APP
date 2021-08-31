import { testSaga } from 'redux-saga-test-plan';
import { takeLatest } from 'redux-saga/effects';

import {
  onLogInSaga,
  onLogOutSaga,
  logInWatcher,
  onVerifyPinCodeSaga,
  onResetPasswordViaPhoneSaga,
  onResetPassEmailSaga,
  onResetPINEmailSaga,
} from 'modules/Login/sagas';
import {
  logInRequest,
  logInError,
  logInSuccess,
  logOutRequest,
  logOutError,
  logOutSuccess,
  verifyPinCode,
  verifyPinCodeSuccess,
  verifyPinCodeError,
  resetPasswordViaPhoneRequest,
  resetPasswordViaPhoneSuccess,
  resetPasswordViaPhoneError,
  resetPassViaEmailRequest,
  resetPassViaEmailSuccess,
  resetPassViaEmailError,
  resetPINViaEmailRequest,
  resetPINViaEmailSuccess,
  resetPINViaEmailError,
} from 'modules/Login/actions';
import {
  loginNotifications,
  logoutNotifications,
  pinCodeNotifications,
  MESSAGE_INVALID_PASSWORD,
  MESSAGE_INVALID_USERNAME,
  resetPassViaPhoneNotifications,
  resetPassEmailNotifications,
  STATUS_CODE_LOGIN_SUCCESS,
} from '../constants';
import { getAccessToken } from '../utils';
import makeRequest from 'services/makeRequest';
import api from 'services/api';

describe('login sagas', () => {
  it('should invoke a correct saga', () => {
    testSaga(logInWatcher)
      .next()
      .all([
        takeLatest(logInRequest, onLogInSaga),
        takeLatest(logOutRequest, onLogOutSaga),
        takeLatest(verifyPinCode, onVerifyPinCodeSaga),
        takeLatest(resetPasswordViaPhoneRequest, onResetPasswordViaPhoneSaga),
        takeLatest(resetPassViaEmailRequest, onResetPassEmailSaga),
        takeLatest(resetPINViaEmailRequest, onResetPINEmailSaga),
      ])
      .finish()
      .isDone();
  });
});

describe('onLoginSaga', () => {
  const actionLoginPayload = {
    type: logInRequest.toString(),
    payload: {
      username: 'username',
      password: 'password',
    },
  };
  const accessToken = 'accessToken';
  const mockResponse = {
    status: STATUS_CODE_LOGIN_SUCCESS,
    headers: { 'set-cookie': [''] },
  };

  it('should handle login success', () => {
    testSaga(onLogInSaga, actionLoginPayload)
      .next()
      .call(makeRequest, api.logInRequest(actionLoginPayload.payload))
      .next(mockResponse)
      .call(getAccessToken, '')
      .next(accessToken)
      .put(logInSuccess({ accessToken }))
      .next()
      .isDone();
  });

  it('should handle login error when username wrong', () => {
    const error = {
      response: {
        status: 422,
        data: {
          message: MESSAGE_INVALID_USERNAME,
        },
      },
    };

    testSaga(onLogInSaga, actionLoginPayload)
      .next()
      .call(makeRequest, api.logInRequest(actionLoginPayload.payload))
      .throw(error)
      .put(logInError({ error: loginNotifications.wrongUsername }))
      .next()
      .isDone();
  });

  it('should handle login error when password wrong', () => {
    const error = {
      response: {
        status: 422,
        data: {
          message: MESSAGE_INVALID_PASSWORD,
        },
      },
    };

    testSaga(onLogInSaga, actionLoginPayload)
      .next()
      .call(makeRequest, api.logInRequest(actionLoginPayload.payload))
      .throw(error)
      .put(logInError({ error: loginNotifications.wrongPassword }))
      .next()
      .isDone();
  });
});

describe('onLogoutSaga', () => {
  it('should handle logout success', () => {
    testSaga(onLogOutSaga, logOutRequest())
      .next()
      .call(makeRequest, api.logOutRequest())
      .next()
      .put(logOutSuccess(logoutNotifications.logoutSuccess))
      .next()
      .isDone();
  });

  it('should handle logout error', () => {
    testSaga(onLogOutSaga, logOutRequest())
      .next()
      .call(makeRequest, api.logOutRequest())
      .throw()
      .put(logOutError(logoutNotifications.logoutError))
      .next()
      .isDone();
  });
});

describe('onVerifyPinCodeSaga', () => {
  const pinCodeSuccess = '1234';
  const pinCodeError = '5678';

  it('should handle verify pin code success', () => {
    testSaga(onVerifyPinCodeSaga, verifyPinCode({ pin: pinCodeSuccess }))
      .next()
      .put(verifyPinCodeSuccess())
      .next()
      .isDone();
  });

  it('should handle verify pin code error', () => {
    testSaga(onVerifyPinCodeSaga, verifyPinCode({ pin: pinCodeError }))
      .next()
      .put(verifyPinCodeError({ error: pinCodeNotifications.wrongPinCode }))
      .next()
      .isDone();
  });
});

describe('onResetPasswordViaPhoneSaga', () => {
  const phoneNumberSuccess = '+60 123456789';
  const phoneNumberError = '+60 987654321';

  it('should handle reset password via phone success', () => {
    testSaga(
      onResetPasswordViaPhoneSaga,
      resetPasswordViaPhoneRequest({ phoneNumber: phoneNumberSuccess }),
    )
      .next()
      .put(resetPasswordViaPhoneSuccess({ phoneNumber: phoneNumberSuccess }))
      .next()
      .isDone();
  });

  it('should handle reset password via phone error', () => {
    testSaga(
      onResetPasswordViaPhoneSaga,
      resetPasswordViaPhoneRequest({ phoneNumber: phoneNumberError }),
    )
      .next()
      .put(resetPasswordViaPhoneError({ error: resetPassViaPhoneNotifications.notExistedPhone }))
      .next()
      .isDone();
  });
});

describe('onResetPassEmailSaga', () => {
  const actionResetPassPayloadSuccess = {
    type: resetPassViaEmailRequest.toString(),
    payload: {
      email: 'test@gmail.com',
    },
  };

  const actionResetPassPayloadError = {
    type: resetPassViaEmailRequest.toString(),
    payload: {
      email: 'email',
    },
  };

  it('should handle reset pass email success', () => {
    testSaga(onResetPassEmailSaga, actionResetPassPayloadSuccess)
      .next()
      .put(resetPassViaEmailSuccess())
      .next()
      .isDone();
  });

  it('should handle reset pass email error', () => {
    const error = resetPassEmailNotifications.notExist;
    testSaga(onResetPassEmailSaga, actionResetPassPayloadError)
      .next()
      .put(resetPassViaEmailError({ error: error }))
      .next()
      .isDone();
  });
});

describe('onResetPINEmailSaga', () => {
  const actionResetPassPayloadSuccess = {
    type: resetPINViaEmailRequest.toString(),
    payload: {
      email: 'testPIN@gmail.com',
    },
  };

  const actionResetPassPayloadError = {
    type: resetPINViaEmailRequest.toString(),
    payload: {
      email: 'email',
    },
  };

  it('should handle reset pass email success', () => {
    testSaga(onResetPINEmailSaga, actionResetPassPayloadSuccess)
      .next()
      .put(resetPINViaEmailSuccess())
      .next()
      .isDone();
  });

  it('should handle reset pass email error', () => {
    const error = resetPINEmailNotifications.notExist;
    testSaga(onResetPINEmailSaga, actionResetPassPayloadError)
      .next()
      .put(resetPINViaEmailError({ error: error }))
      .next()
      .isDone();
  });
});
