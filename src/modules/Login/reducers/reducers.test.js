import loginReducer, { initialState } from './index';
import {
  logInSuccess,
  logInError,
  logOutSuccess,
  storeUsername,
  logInRequest,
  clearError,
  verifyPinCodeError,
  verifyPinCode,
  checkFirstTimeOpen,
  verifyPinCodeSuccess,
  resetPasswordViaPhoneError,
  resetPasswordViaPhoneRequest,
  resetPasswordViaPhoneSuccess,
  resetPassViaEmailRequest,
  resetPassViaEmailSuccess,
  resetPassViaEmailError,
  resetPINViaEmailSuccess,
  resetPINViaEmailRequest,
  resetPINViaEmailError,
  validateEmailError,
} from 'modules/Login/actions';

import {
  loginNotifications,
  pinCodeNotifications,
  resetPassEmailNotifications,
  validateEmailNotifications,
  resetPassViaPhoneNotifications,
} from '../constants';

describe('login reducer', () => {
  it('returns the initialState', () => {
    expect(loginReducer(initialState, {})).toStrictEqual(initialState);
  });

  it('updates the isLoggedIn fields when handle action logInSuccess', () => {
    const accessToken = 'testAccessToken';
    const expectedState = {
      ...initialState,
      isLoggedIn: true,
      isProcessing: false,
      accessToken,
    };

    expect(loginReducer(initialState, logInSuccess({ accessToken }))).toStrictEqual(expectedState);
  });

  it('should set isProcessing become true when a user logs in', () => {
    const expectedState = { ...initialState, isProcessing: true };

    expect(loginReducer(initialState, logInRequest())).toStrictEqual(expectedState);
  });

  it('should set isProcessing become false when login request fails', () => {
    const error = loginNotifications.wrongPassword;
    const expectedState = { ...initialState, isProcessing: false, error };

    expect(loginReducer(initialState, logInError({ error }))).toStrictEqual(expectedState);
  });

  it('should clear error', () => {
    const expectedState = {
      ...initialState,
      error: undefined,
    };

    expect(loginReducer(initialState, clearError())).toStrictEqual(expectedState);
  });

  it('resets login state', () => {
    const expectedState = {
      ...initialState,
      isLoggedIn: false,
      accessToken: undefined,
    };

    expect(loginReducer(initialState, logOutSuccess())).toStrictEqual(expectedState);
  });

  it('store username when shouldRememberUsername is true', () => {
    const data = { username: 'testUsername', shouldRememberUsername: true };
    const expectedState = { ...initialState, storedUsername: 'testUsername' };

    expect(loginReducer(initialState, storeUsername(data))).toStrictEqual(expectedState);
  });

  it('should not store username when shouldRememberUsername is false', () => {
    const data = { username: 'testUsername', shouldRememberUsername: false };
    const expectedState = { ...initialState, storedUsername: '' };

    expect(loginReducer(initialState, storeUsername(data))).toStrictEqual(expectedState);
  });

  it('should update error when verify pin code error', () => {
    const error = pinCodeNotifications.wrongPinCode;
    const expectedState = { ...initialState, isProcessing: false, error };

    expect(loginReducer(initialState, verifyPinCodeError({ error }))).toStrictEqual(expectedState);
  });

  it('should update isProcessing is false when input PIN success', () => {
    const expectedState = { ...initialState, isProcessing: false };

    expect(loginReducer(initialState, verifyPinCodeSuccess())).toStrictEqual(expectedState);
  });

  it('should update processing is true when verify pin code', () => {
    const expectedState = { ...initialState, isProcessing: true };

    expect(loginReducer(initialState, verifyPinCode())).toStrictEqual(expectedState);
  });

  it('should update processing is false when verify pin code success', () => {
    const expectedState = { ...initialState, isProcessing: false };

    expect(loginReducer(initialState, verifyPinCodeSuccess())).toStrictEqual(expectedState);
  });

  it('should update is first time open', () => {
    const expectedState = { ...initialState, isFirstTimeOpen: false };

    expect(loginReducer(initialState, checkFirstTimeOpen())).toStrictEqual(expectedState);
  });

  it('should update error when reset pass via phone error', () => {
    const error = resetPassViaPhoneNotifications.notExistedPhone;
    const expectedState = { ...initialState, isProcessing: false, error };

    expect(loginReducer(initialState, resetPasswordViaPhoneError({ error }))).toStrictEqual(
      expectedState,
    );
  });

  it('should set isProcessing become true, reset error and store email when user request reset pass', () => {
    const data = { email: 'email@email.com' };
    const expectedState = {
      ...initialState,
      isProcessing: true,
      error: undefined,
      resetPassEmail: 'email@email.com',
    };

    expect(loginReducer(initialState, resetPassViaEmailRequest(data))).toStrictEqual(expectedState);
  });

  it('should set isProcessing become false when request reset pass fails', () => {
    const error = resetPassEmailNotifications.notExist;
    const expectedState = { ...initialState, isProcessing: false, error };

    expect(loginReducer(initialState, resetPassViaEmailError({ error }))).toStrictEqual(
      expectedState,
    );
  });

  it('should update processing is true when reset pass via phone', () => {
    const expectedState = { ...initialState, isProcessing: true };

    expect(loginReducer(initialState, resetPasswordViaPhoneRequest())).toStrictEqual(expectedState);
  });

  it('should update processing is false when reset pass via phone success', () => {
    const mockPhoneNumber = '+60 123456789';
    const expectedState = {
      ...initialState,
      isProcessing: false,
      resetPassViaPhone: mockPhoneNumber,
    };

    expect(
      loginReducer(initialState, resetPasswordViaPhoneSuccess({ phoneNumber: mockPhoneNumber })),
    ).toStrictEqual(expectedState);
  });

  it('should set isProcessing become false when request reset pass success', () => {
    const expectedState = { ...initialState, isProcessing: false };

    expect(loginReducer(initialState, resetPassViaEmailSuccess())).toStrictEqual(expectedState);
  });

  it('should set error become false when validate email error', () => {
    const error = validateEmailNotifications.invalid;
    const expectedState = { ...initialState, isProcessing: false, error };

    expect(loginReducer(initialState, validateEmailError())).toStrictEqual(expectedState);
  });
  it('should set isProcessing become true, reset error and store email when user request reset pass', () => {
    const data = { email: 'email@email.com' };
    const expectedState = {
      ...initialState,
      isProcessing: true,
      error: undefined,
      resetPassEmail: 'email@email.com',
    };

    expect(loginReducer(initialState, resetPINViaEmailRequest(data))).toStrictEqual(expectedState);
  });
  it('should set isProcessing become false when request reset pass success', () => {
    const expectedState = { ...initialState, isProcessing: false };

    expect(loginReducer(initialState, resetPINViaEmailSuccess())).toStrictEqual(expectedState);
  });
  it('should set isProcessing become false when request reset pass fails', () => {
    const error = resetPassEmailNotifications.notExist;
    const expectedState = { ...initialState, isProcessing: false, error };

    expect(loginReducer(initialState, resetPINViaEmailError({ error }))).toStrictEqual(
      expectedState,
    );
  });
});
