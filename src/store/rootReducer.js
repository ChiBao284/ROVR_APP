import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import { languagePersistConfig, loginPersistConfig } from './persistConfigs';
import languageReducer from 'modules/ChooseLanguage/reducers';
import loginReducer from 'modules/Login/reducers';

export default combineReducers({
  loginState: persistReducer(loginPersistConfig, loginReducer),
  languageState: persistReducer(languagePersistConfig, languageReducer),
});
