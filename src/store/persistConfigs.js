import AsyncStorage from '@react-native-community/async-storage';

export const loginPersistConfig = {
  key: 'loginState',
  storage: AsyncStorage,
  whitelist: ['isLoggedIn', 'accessToken', 'storedUsername', 'isFirstTimeOpen'],
};


export const languagePersistConfig = {
  key: 'languageState',
  storage: AsyncStorage,
  whitelist: ['language'],
};
