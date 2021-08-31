import {
  selectLoginState,
  selectStoredUsername,
  selectIsLoggedIn,
  selectAccessToken,
  selectError,
  selectIsProcessing,
  selectIsFirstTimeOpen,
  selectResetPassViaPhone,
  selectResetPassEmail,
} from './index';
import { initialState } from 'modules/Login/reducers';

describe('login selectors', () => {
  const defaultState = {
    loginState: initialState,
  };

  it('should return correct loginState', () => {
    expect(selectLoginState(defaultState)).toStrictEqual(defaultState.loginState);
  });

  it('should return accessToken state', () => {
    expect(selectAccessToken(defaultState)).toStrictEqual(defaultState.loginState.accessToken);
  });

  it('should return correct storedUsername state', () => {
    expect(selectStoredUsername(defaultState)).toStrictEqual(
      defaultState.loginState.storedUsername,
    );
  });

  it('should return correct isLoggedIn state', () => {
    expect(selectIsLoggedIn(defaultState)).toStrictEqual(defaultState.loginState.isLoggedIn);
  });

  it('should return error state', () => {
    expect(selectError(defaultState)).toStrictEqual(defaultState.loginState.error);
  });

  it('should return isProcessing state', () => {
    expect(selectIsProcessing(defaultState)).toStrictEqual(defaultState.loginState.isProcessing);
  });

  it('should return isFirstTimeOpen state', () => {
    expect(selectIsFirstTimeOpen(defaultState)).toStrictEqual(
      defaultState.loginState.isFirstTimeOpen,
    );
  });

  it('should return resetPassViaPhone state', () => {
    expect(selectResetPassViaPhone(defaultState)).toStrictEqual(
      defaultState.loginState.resetPassViaPhone,
    );
  });

  it('should return resetPassEmail state', () => {
    expect(selectResetPassEmail(defaultState)).toStrictEqual(
      defaultState.loginState.resetPassEmail,
    );
  });
});
