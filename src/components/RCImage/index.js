import React from 'react';
import { Image } from 'react-native';

import { TEST_SELECTOR } from 'common/constants';

const RCImage = ({ accessibilityLabel, ...props }) => {
  const testProperty = {
    [TEST_SELECTOR]: accessibilityLabel,
  };

  return <Image {...testProperty} {...props} />;
};

export default RCImage;
