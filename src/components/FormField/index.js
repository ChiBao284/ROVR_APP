import React, { useState, useCallback } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { RCImage, RCText, RCTextInput } from 'components';
import { glyphs } from 'common/theme';
import { HIT_SLOP } from 'common/constants';
import styles from './styles';

const FormField = ({
  leftIcon,
  rightIcon,
  iconAction,
  isError,
  errorText,
  placeholder,
  style,
  label,
  isRequired,
  i18nKeyLabel,
  onOutFocus,
  ...props
}) => {
  const [isFocused, setFocus] = useState(false);
  const focusToggle = useCallback(() => {
    if (isFocused) {
      onOutFocus && onOutFocus();
    }
    setFocus(!isFocused);
  }, [onOutFocus, isFocused]);

  return (
    <View style={style}>
      <View style={styles.mainContent}>
        <View style={styles.labelContainer}>
          <RCText style={styles.label} i18nKey={i18nKeyLabel}>
            {label}
          </RCText>
          {isRequired && <Text style={styles.requiredField}>*</Text>}
        </View>
        <View
          style={[
            styles.container,
            isFocused && styles.focusedContainer,
            (isError || errorText) && styles.errorContainer,
          ]}
        >
          {leftIcon && <RCImage style={styles.leftIcon} source={leftIcon} />}
          <RCTextInput
            onFocus={focusToggle}
            onEndEditing={focusToggle}
            style={styles.textInput}
            placeholder={placeholder}
            {...props}
          />
          {rightIcon && (
            <TouchableOpacity activeOpacity={0.7} onPress={iconAction} hitSlop={HIT_SLOP}>
              <RCImage style={styles.rightIcon} source={rightIcon} />
            </TouchableOpacity>
          )}
        </View>
      </View>
      {errorText && (
        <View style={styles.errorMessage}>
          <Text style={styles.warning}>{glyphs.warning}</Text>
          <Text style={styles.errorText}>{errorText}</Text>
        </View>
      )}
    </View>
  );
};

export default FormField;
