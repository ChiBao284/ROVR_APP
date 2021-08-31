import React from 'react';
import { View } from 'react-native';

import { TEST_SELECTOR } from 'common/constants';

const RCView = ({ accessibilityLabel, ...props }) => {
  const testProperty = {
    [TEST_SELECTOR]: accessibilityLabel,
  };

  return <View {...testProperty} {...props} />;
};

export default RCView;
