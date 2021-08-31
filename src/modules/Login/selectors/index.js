import { createSelector } from 'reselect';

export const selectLoginState = state => state.loginState;

export const selectAccessToken = createSelector(
  selectLoginState,
  loginState => loginState.accessToken,
);

export const selectIsLoggedIn = createSelector(
  selectLoginState,
  loginState => loginState.isLoggedIn,
);

export const selectError = createSelector(selectLoginState, loginState => loginState.error);

export const selectStoredUsername = createSelector(
  selectLoginState,
  loginState => loginState.storedUsername,
);

export const selectIsProcessing = createSelector(
  selectLoginState,
  loginState => loginState.isProcessing,
);

export const selectIsFirstTimeOpen = createSelector(
  selectLoginState,
  loginState => loginState.isFirstTimeOpen,
);

export const selectResetPassViaPhone = createSelector(
  selectLoginState,
  loginState => loginState.resetPassViaPhone,
);

export const selectResetPassEmail = createSelector(
  selectLoginState,
  loginState => loginState.resetPassEmail,
);
