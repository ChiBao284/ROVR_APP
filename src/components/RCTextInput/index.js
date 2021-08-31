import React from 'react';
import { TextInput } from 'react-native';

import { TEST_SELECTOR } from 'common/constants';
import { colors } from 'common/theme';
import styles from './styles';

const RCTextInput = ({ accessibilityLabel, style, ...props }) => {
  const testProperty = {
    [TEST_SELECTOR]: accessibilityLabel,
  };

  return (
    <TextInput
      style={[styles.textInput, style]}
      placeholderTextColor={colors.smoke}
      {...testProperty}
      {...props}
    />
  );
};

export default RCTextInput;
