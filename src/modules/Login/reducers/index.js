import { handleActions } from 'redux-actions';

import {
  logInRequest,
  logInError,
  logInSuccess,
  logOutSuccess,
  storeUsername,
  checkFirstTimeOpen,
  verifyPinCode,
  verifyPinCodeSuccess,
  verifyPinCodeError,
  clearError,
  resetPasswordViaPhoneRequest,
  resetPasswordViaPhoneSuccess,
  resetPasswordViaPhoneError,
  resetPassViaEmailError,
  resetPassViaEmailRequest,
  resetPassViaEmailSuccess,
  resetPINViaEmailRequest,
  resetPINViaEmailSuccess,
  resetPINViaEmailError,
  validateEmailError,
} from '../actions';
import { validateEmailNotifications } from '../constants';

export const initialState = {
  isFirstTimeOpen: true,
  isProcessing: false,
  isLoggedIn: false,
  accessToken: undefined,
  error: undefined,
  storedUsername: '',
  resetPassViaPhone: '',
  resetPassEmail: '',
};

export default handleActions(
  {
    [logInRequest]: state => ({
      ...state,
      isProcessing: true,
      error: undefined,
    }),
    [logInSuccess]: (state, { payload: { accessToken } }) => ({
      ...state,
      isLoggedIn: true,
      isProcessing: false,
      accessToken,
    }),
    [logInError]: (state, { payload: { error } }) => ({
      ...state,
      isProcessing: false,
      error,
    }),
    [logOutSuccess]: state => ({
      ...state,
      isLoggedIn: false,
      accessToken: undefined,
      error: undefined,
    }),
    [storeUsername]: (state, { payload: { username, shouldRememberUsername } }) => ({
      ...state,
      storedUsername: shouldRememberUsername ? username : '',
    }),
    [checkFirstTimeOpen]: state => ({
      ...state,
      isFirstTimeOpen: false,
    }),
    [verifyPinCode]: state => ({
      ...state,
      isProcessing: true,
    }),
    [verifyPinCodeSuccess]: state => ({
      ...state,
      isProcessing: false,
    }),
    [verifyPinCodeError]: (state, { payload: { error } }) => ({
      ...state,
      isProcessing: false,
      error,
    }),
    [clearError]: state => ({
      ...state,
      error: undefined,
    }),
    [resetPasswordViaPhoneRequest]: state => ({
      ...state,
      isProcessing: true,
    }),
    [resetPasswordViaPhoneSuccess]: (state, { payload: { phoneNumber } }) => ({
      ...state,
      isProcessing: false,
      resetPassViaPhone: phoneNumber,
    }),
    [resetPasswordViaPhoneError]: (state, { payload: { error } }) => ({
      ...state,
      isProcessing: false,
      error,
    }),
    [resetPassViaEmailRequest]: (state, { payload: { email } }) => ({
      ...state,
      isProcessing: true,
      resetPassEmail: email,
      error: undefined,
    }),
    [resetPassViaEmailError]: (state, { payload: { error } }) => ({
      ...state,
      isProcessing: false,
      resetPassEmail: '',
      error,
    }),
    [resetPassViaEmailSuccess]: state => ({
      ...state,
      isProcessing: false,
    }),
    [resetPINViaEmailRequest]: (state, { payload: { email } }) => ({
      ...state,
      isProcessing: true,
      resetPassEmail: email,
      error: undefined,
    }),
    [resetPINViaEmailError]: (state, { payload: { error } }) => ({
      ...state,
      isProcessing: false,
      resetPassEmail: '',
      error,
    }),
    [resetPINViaEmailSuccess]: state => ({
      ...state,
      isProcessing: false,
    }),
    [validateEmailError]: state => ({
      ...state,
      error: validateEmailNotifications.invalid,
    }),
  },
  initialState,
);
