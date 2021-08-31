import React from 'react';

import { RCTouchableOpacity, RCText } from 'components';
import styles from './styles';

const Button = ({ style, textStyle, isLoading, i18nKey, children = '', ...props }) => {
  return (
    <RCTouchableOpacity style={[styles.button, style]} {...props}>
      <RCText style={[styles.label, textStyle]} i18nKey={i18nKey} >{children}</RCText>
    </RCTouchableOpacity>
  );
};

export default Button;
