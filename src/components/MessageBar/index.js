import React from 'react';
import { View } from 'react-native';

import { RCText } from 'components';
import styles from './styles';

const messageTheme = {
  success: {
    container: styles.successThemeContainer,
    title: styles.successTheme,
    message: styles.successTheme,
  },
  warning: {
    container: styles.warningThemeContainer,
    title: styles.errorTheme,
    message: styles.errorTheme,
  },
  error: {
    container: styles.errorThemeContainer,
    title: styles.errorTheme,
    message: styles.errorTheme,
  },
  info: {
    container: styles.infoThemeContainer,
    title: styles.infoTheme,
    message: styles.infoTheme,
  },
  default: {
    container: styles.defaultThemeContainer,
    title: styles.defaultTheme,
    message: styles.defaultTheme,
  },
};

const MessageBar = ({ style, status, title, message, testLabel, i18nKeyMessage }) => {
  const theme = messageTheme[status] || messageTheme.default;
  return (
    <View style={[styles.container, theme.container, style]}>
      {!!title && (
        <RCText accessibilityLabel={`${testLabel}-title`} style={[styles.title, theme.title]}>
          {title}
        </RCText>
      )}
      {!!message || i18nKeyMessage && (
        <RCText
          accessibilityLabel={testLabel}
          style={[styles.message, theme.message]}
          i18nKey={i18nKeyMessage}
        >
          {message}
        </RCText>
      )}
    </View>
  );
};

export default MessageBar;
