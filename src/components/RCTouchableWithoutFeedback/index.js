import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';

import { TEST_SELECTOR } from 'common/constants';

const RCTouchableWithoutFeedback = ({ accessibilityLabel, ...props }) => {
  const testProperty = {
    [TEST_SELECTOR]: accessibilityLabel,
  };

  return <TouchableWithoutFeedback {...testProperty} {...props} />;
};

export default RCTouchableWithoutFeedback;
