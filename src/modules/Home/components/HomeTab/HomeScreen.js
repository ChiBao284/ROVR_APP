import React from 'react';
import { Text, View } from 'react-native';

import { PrimaryButton } from 'src/components';
import styles from './styles';

const HomeScreen = ({ onSignOut }) => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <PrimaryButton style={styles.button} onPress={onSignOut}>
        Sign Out
      </PrimaryButton>
    </View>
  );
};

export default HomeScreen;
