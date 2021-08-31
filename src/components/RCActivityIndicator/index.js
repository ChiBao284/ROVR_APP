import React from 'react';
import { ActivityIndicator } from 'react-native';

import { TEST_SELECTOR } from 'common/constants';
import { colors } from 'common/theme';

const RCActivityIndicator = ({ accessibilityLabel, ...props }) => {
  const testProperty = {
    [TEST_SELECTOR]: accessibilityLabel,
  };

  return <ActivityIndicator size={'large'} color={colors.black} {...testProperty} {...props} />;
};

export default RCActivityIndicator;
