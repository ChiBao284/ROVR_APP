import React from 'react';
import { View, Animated } from 'react-native';

import { assets } from 'common/theme';
import RCImage from '../RCImage';
import styles from './styles';

const CheckboxIcon = ({ animation, style }) => (
  <View style={[styles.checkbox, style]}>
    <Animated.View
      style={[styles.selected, { opacity: animation, transform: [{ scale: animation }] }]}
    >
      <RCImage accessibilityLabel={'checkbox-icon'} source={assets.tickIcon} style={styles.icon} />
    </Animated.View>
  </View>
);

export default CheckboxIcon;
