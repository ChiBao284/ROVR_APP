import React, { useCallback } from 'react';
import { Animated, Text, TextInput, View } from 'react-native';

import styles from './styles';

const defaultLength = 4;
const numberRegex = '^[0-9]*$';

const PinCode = ({ style, pin, length, onChangeText, isSecurePin, ...props }) => {
  const maxLength = length || defaultLength;
  const onTextChange = useCallback(
    text => {
      if (text.match(numberRegex)) {
        if (onChangeText) {
          onChangeText(text);
        }
      }
    },
    [onChangeText],
  );

  const createViewPinCode = useCallback(
    () =>
      Array(maxLength)
        .fill(0)
        .map((item, i) => (
          <View
            key={`${i}`}
            style={[
              styles.pinStyle,
              //Show border for current PIN view
              !pin[i] && (!!pin[i - 1] || i === 0) && styles.pinBorderStyle,
            ]}
          >
            {isSecurePin ? (
              !!pin[i] && <View style={styles.dotStyle} />
            ) : (
              <Text style={styles.pinTextStyle}>{pin[i]}</Text>
            )}
          </View>
        )),
    [pin, maxLength, isSecurePin],
  );

  return (
    <View style={[styles.container, style]}>
      <Animated.View style={styles.pinContainer}>{createViewPinCode()}</Animated.View>

      <TextInput
        autoFocus={true}
        style={styles.text}
        caretHidden
        maxLength={maxLength}
        onChangeText={onTextChange}
        value={pin}
        keyboardType='number-pad'
        {...props}
      />
    </View>
  );
};

export default PinCode;
