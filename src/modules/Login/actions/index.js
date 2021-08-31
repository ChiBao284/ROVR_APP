import { createAction } from 'redux-actions';

export const logInRequest = createAction('LOG_IN_REQUEST');
export const logInSuccess = createAction('LOG_IN_SUCCESS');
export const logInError = createAction('LOG_IN_ERROR');
export const logOutRequest = createAction('LOG_OUT_REQUEST');
export const logOutSuccess = createAction('LOG_OUT_SUCCESS');
export const logOutError = createAction('LOG_OUT_ERROR');
export const storeUsername = createAction('STORE_USERNAME');
export const checkFirstTimeOpen = createAction('CHECK_FIRST_TIME_OPEN');
export const verifyPinCode = createAction('VERIFY_PIN_CODE');
export const verifyPinCodeSuccess = createAction('VERIFY_PIN_CODE_SUCCESS');
export const verifyPinCodeError = createAction('VERIFY_PIN_CODE_ERROR');
export const clearError = createAction('CLEAR_ERROR');
export const resetPasswordViaPhoneRequest = createAction('RESET_PASSWORD_VIA_PHONE_REQUEST');
export const resetPasswordViaPhoneSuccess = createAction('RESET_PASSWORD_VIA_PHONE_SUCCESS');
export const resetPasswordViaPhoneError = createAction('RESET_PASSWORD_VIA_PHONE_ERROR');

//Reset Pass via Email
export const resetPassViaEmailRequest = createAction('RESET_PASS_VIA_EMAIL_REQUEST');
export const resetPassViaEmailSuccess = createAction('RESET_PASS_VIA_EMAIL_SUCCESS');
export const resetPassViaEmailError = createAction('RESET_PISS_VIA_EMAIL_ERROR');
export const validateEmailError = createAction('VALIDATE_EMAIL_ERROR');

//Reset PIN via Email
export const resetPINViaEmailRequest = createAction('RESET_PIN_VIA_EMAIL_REQUEST');
export const resetPINViaEmailSuccess = createAction('RESET_PIN_VIA_EMAIL_SUCCESS');
export const resetPINViaEmailError = createAction('RESET_PIN_VIA_EMAIL_ERROR');
