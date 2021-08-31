import { handleActions } from 'redux-actions';

import { changeLanguage } from '../actions';
import { ENGLISH_OPTION } from 'common/constants';

export const initialState = {
  language: ENGLISH_OPTION.key,
};

export default handleActions(
  {
    [changeLanguage]: (state, { payload }) => ({
      ...state,
      language: payload,
    }),
  },
  initialState,
);
