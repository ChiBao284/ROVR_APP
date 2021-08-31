import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import { colors } from 'common/theme';
import Button from './Button';
import styles from './styles';

const PrimaryButton = ({ disabled, style, textStyle, i18nKey, ...props }) => (
  <LinearGradient
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
    colors={[colors.persianGreen, colors.darkPersianGreen]}
    style={[styles.defaultButton, disabled && styles.disabledButton, style]}
  >
    <Button
      textStyle={[styles.defaultButtonLabel, disabled && styles.disabledText, textStyle]}
      disabled={disabled}
      i18nKey={i18nKey}
      {...props}
    />
  </LinearGradient>
);

const SecondaryButton = ({ disabled, style, textStyle, i18nKey, ...props }) => (
  <Button
    style={[styles.secondaryButton, style]}
    textStyle={[
      styles.secondaryButtonLabel,
      disabled && styles.disabledSecondaryButtonLabel,
      textStyle,
    ]}
    disabled={disabled}
    i18nKey={i18nKey}
    {...props}
  />
);

const TextButton = ({ disabled, style, textStyle, i18nKey, ...props }) => (
  <Button
    style={[styles.textButton, style]}
    textStyle={[styles.textButtonLabel, disabled && styles.disabledText, textStyle]}
    disabled={disabled}
    i18nKey={i18nKey}
    {...props}
  />
);

const OutlineButton = ({ disabled, style, textStyle, i18nKey, ...props }) => (
  <Button
    style={[styles.outlineButton, disabled && styles.outlineButtonDisabled, style]}
    textStyle={[styles.outlineButtonLabel, disabled && styles.disabledText, textStyle]}
    disabled={disabled}
    i18nKey={i18nKey}
    {...props}
  />
);

export { Button, OutlineButton, PrimaryButton, SecondaryButton, TextButton };
