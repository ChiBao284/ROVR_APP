import { selectLanguage, selectLanguageState } from '.';
import { initialState } from '../reducers';

describe('language selector', () => {
  const defaultState = {
    languageState: initialState,
  };

  it('should return correct languageState', () => {
    expect(selectLanguageState(defaultState)).toStrictEqual(defaultState.languageState);
  });

  it('should return correct language', () => {
    expect(selectLanguage(defaultState)).toStrictEqual(defaultState.languageState.language);
  });
});
