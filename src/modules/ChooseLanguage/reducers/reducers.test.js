import { changeLanguage } from '../actions';
import languageReducer, { initialState } from './index';

describe('language reducer', () => {
  it('returns the initialState', () => {
    expect(languageReducer(initialState, {})).toStrictEqual(initialState);
  });

  it('returns the state with changed language', () => {
    const language = 'en';
    const expectedState = {
      ...initialState,
      language: language,
    };
    expect(languageReducer(initialState, changeLanguage(language))).toStrictEqual(expectedState);
  });
});
