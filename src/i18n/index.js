import I18n from 'react-native-i18n';

import en from './locales/en';
import ms from './locales/ms';

I18n.translations = {
  en,
  ms,
};
export const setLocale = locale => {
  I18n.locale = locale;
};

export const getCurrentLocale = () => I18n.locale;

export default I18n;
