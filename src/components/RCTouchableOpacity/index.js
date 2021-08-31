import React from 'react';
import { TouchableOpacity } from 'react-native';

import { TEST_SELECTOR } from 'common/constants';

const RCTouchableOpacity = ({ accessibilityLabel, ...props }) => {
  const testProperty = {
    [TEST_SELECTOR]: accessibilityLabel,
  };

  return <TouchableOpacity activeOpacity={0.7} {...testProperty} {...props} />;
};

export default RCTouchableOpacity;
