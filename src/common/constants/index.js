import { Platform } from 'react-native';

import { assets } from 'common/theme';

export const HIT_SLOP = { top: 10, left: 10, bottom: 10, right: 10 };

export const TEST_SELECTOR = Platform.select({ ios: 'testID', android: 'accessibilityLabel' });

export const MESSAGE_STATUSES = {
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error',
  INFO: 'info',
  DEFAULT: 'default',
};

export const ENGLISH_OPTION = { key: 'en', title: 'English' };
export const MALAY_OPTION = { key: 'ms', title: 'Bahasa Malaysia' };
export const LANGUAGE_OPTIONS = [ENGLISH_OPTION, MALAY_OPTION];
export const REGISTER_URL = 'https://www.google.com/';

export const REGIONS = [
  {
    id: 1,
    logo: assets.malaysia,
    prefix: '+60',
    name: 'Malaysia',
  },
  {
    id: 2,
    logo: assets.indo,
    prefix: '+62',
    name: 'Indonesia',
  },
  {
    id: 3,
    logo: assets.thailand,
    prefix: '+66',
    name: 'Thailand',
  },
  {
    id: 4,
    logo: assets.brunie,
    prefix: '+68',
    name: 'Brunei',
  },
  {
    id: 5,
    logo: assets.singapore,
    prefix: '+70',
    name: 'Singapore',
  },
  {
    id: 6,
    logo: assets.singapore,
    prefix: '+70',
    name: 'Singapore',
  },
  {
    id: 7,
    logo: assets.singapore,
    prefix: '+70',
    name: 'Singapore',
  },
  {
    id: 8,
    logo: assets.singapore,
    prefix: '+70',
    name: 'Singapore',
  },
  {
    id: 9,
    logo: assets.singapore,
    prefix: '+70',
    name: 'Singapore',
  },
];
