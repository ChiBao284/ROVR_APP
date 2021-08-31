import React from 'react';

import { RCImage, RCView } from 'src/components';
import { assets } from 'common/theme';
import styles from './styles';

const SplashScreen = () => {
  return (
    <RCView style={styles.container}>
      <RCImage style={styles.logo} source={assets.rovrAppLogo} />
    </RCView>
  );
};

export default SplashScreen;
