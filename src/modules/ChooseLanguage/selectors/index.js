import { createSelector } from 'reselect';

export const selectLanguageState = state => state.languageState;

export const selectLanguage = createSelector(
  selectLanguageState,
  languageState => languageState.language,
);
