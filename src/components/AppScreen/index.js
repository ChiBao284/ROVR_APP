import React from 'react';
import { SafeAreaView } from 'react-native';

import styles from './styles';

const AppScreen = ({ style, children }) => (
  <SafeAreaView style={[styles.safeArea, style]}>{children}</SafeAreaView>
);

export default AppScreen;
