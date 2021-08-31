import React, { useState, useEffect, useCallback } from 'react';
import { Animated, Easing } from 'react-native';

import { RCTouchableOpacity, RCText } from 'components';
import CheckboxIcon from './CheckboxIcon';
import styles from './styles';

const Checkbox = ({ label, id, style, isSelected, onToggle, testLabel, i18nKey }) => {
  const [animation] = useState(new Animated.Value(isSelected ? 1 : 0));

  useEffect(() => {
    Animated.timing(animation, {
      toValue: isSelected ? 1 : 0,
      duration: 200,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }, [animation, isSelected]);

  const onToggleButton = useCallback(() => {
    onToggle(id);
  }, [id, onToggle]);

  return (
    <RCTouchableOpacity
      accessibilityLabel={testLabel}
      activeOpacity={1}
      onPress={onToggleButton}
      style={styles.container}
    >
      <CheckboxIcon animation={animation} style={style} />
      <RCText numberOfLines={1} style={styles.label} i18nKey={i18nKey}>
        {label}
      </RCText>
    </RCTouchableOpacity>
  );
};

export default Checkbox;
