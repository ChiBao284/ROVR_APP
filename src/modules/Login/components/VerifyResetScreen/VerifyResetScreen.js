import React from 'react';
import { View, Image, Text } from 'react-native';

import { AppScreen, PrimaryButton, RCText, RCTouchableOpacity } from 'components';
import {
  CONTACT_ROVR,
  DID_NOT_RECEIVE_INSTRUCTION,
  SIGN_IN_AGAIN,
  VERIFY_REST_PASSWORD,
} from 'src/i18n/key';
import { assets } from 'common/theme';
import styles from './styles';

const VerifyResetScreen = ({ onSignInAgain, data, onContactROVR }) => {
  return (
    <AppScreen>
      <View style={styles.container}>
        <Image source={assets.recovery} style={styles.image} />
        <Text style={styles.content}>
          <RCText style={styles.description} i18nKey={VERIFY_REST_PASSWORD} />
          <RCText style={styles.data}> {data}</RCText>
          <Text>.</Text>
        </Text>
        <PrimaryButton
          i18nKey={SIGN_IN_AGAIN}
          onPress={onSignInAgain}
          accessibilityLabel={'sign-in-again-button'}
          style={styles.button}
        />
      </View>
      <RCTouchableOpacity onPress={onContactROVR} accessibilityLabel={'contact-rovr'}>
        <View style={styles.footer}>
          <RCText style={styles.text} i18nKey={DID_NOT_RECEIVE_INSTRUCTION} />
          <Text> </Text>
          <RCText style={styles.contact} i18nKey={CONTACT_ROVR} />
        </View>
      </RCTouchableOpacity>
    </AppScreen>
  );
};

export default VerifyResetScreen;
