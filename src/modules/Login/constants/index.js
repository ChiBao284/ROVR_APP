import { MESSAGE_STATUSES } from 'common/constants';
import {
  LOGIN_ERROR_WRONG_USERNAME,
  LOGIN_ERROR_WRONG_PASSWORD,
  PIN_CODE_ERROR,
  RESET_PASS_VIA_PHONE_ERROR,
  RESET_PASS_EMAIL_NOT_EXIST,
  VALIDATE_EMAIL_INVALID,
} from 'src/i18n/key';

export const STATUS_CODE_LOGIN_SUCCESS = 204;
export const MESSAGE_INVALID_USERNAME = 'Wrong username';
export const MESSAGE_INVALID_PASSWORD = 'Wrong password';
export const loginNotifications = {
  wrongUsername: {
    testLabel: 'invalid-username',
    i18nKeyMessage: LOGIN_ERROR_WRONG_USERNAME,
    status: MESSAGE_STATUSES.ERROR,
  },
  wrongPassword: {
    testLabel: 'invalid-password',
    i18nKeyMessage: LOGIN_ERROR_WRONG_PASSWORD,
    status: MESSAGE_STATUSES.ERROR,
  },
};
export const logoutNotifications = {
  logoutSuccess: {
    testLabel: 'logout-success',
    message: 'You have been successfully logged out',
    status: MESSAGE_STATUSES.INFO,
  },
  logoutError: {
    testLabel: 'logout-error',
    message: 'A system error caused a log out. Please log in.',
    status: MESSAGE_STATUSES.INFO,
  },
};
export const PIN_CODE_LENGTH = 4;
export const pinCodeNotifications = {
  wrongPinCode: {
    testLabel: 'verify-pin-code-fail',
    i18nKeyMessage: PIN_CODE_ERROR,
    status: 'error',
  },
};
export const resetPassViaPhoneNotifications = {
  notExistedPhone: {
    testLabel: 'not-existed-phone',
    i18nKeyMessage: RESET_PASS_VIA_PHONE_ERROR,
    status: 'error',
  },
};
export const resetPassEmailNotifications = {
  notExist: {
    testLabel: 'reset-pass-email-error',
    i18nKeyMessage: RESET_PASS_EMAIL_NOT_EXIST,
    status: MESSAGE_STATUSES.ERROR,
  },
};
export const validateEmailNotifications = {
  invalid: {
    testLabel: 'validate-email-invalid',
    i18nKeyMessage: VALIDATE_EMAIL_INVALID,
    status: MESSAGE_STATUSES.ERROR,
  },
};

