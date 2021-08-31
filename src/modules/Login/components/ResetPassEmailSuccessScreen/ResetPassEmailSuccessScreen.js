import React from 'react';
import { View, Text, Image } from 'react-native';

import { AppScreen, PrimaryButton, RCText, RCTouchableOpacity } from 'src/components';
import styles from './styles';
import { assets } from 'src/common/theme';
import {
  SIGN_IN_AGAIN,
  RESET_PASS_SUCCESS_DESCRIPTION,
  DID_NOT_RECEIVE_INSTRUCTION,
  CONTACT_ROVR,
} from 'src/i18n/key';

const ResetPassEmailSuccessScreen = ({ email, onSignInAgain, onContactROVR }) => {
  return (
    <AppScreen>
      <View style={styles.container}>
        <View style={styles.mainContent}>
          <Image style={styles.image} source={assets.recovery} />
          <Text style={styles.description}>
            <RCText i18nKey={RESET_PASS_SUCCESS_DESCRIPTION} />
            <Text style={styles.email}> {email}</Text>
            <Text>.</Text>
          </Text>
          <PrimaryButton
            onPress={onSignInAgain}
            style={styles.signInAgainButton}
            i18nKey={SIGN_IN_AGAIN}
          />
        </View>
        <RCTouchableOpacity onPress={onContactROVR} accessibilityLabel={'contact-rovr'}>
          <Text style={styles.didNotReceiveText}>
            <RCText i18nKey={DID_NOT_RECEIVE_INSTRUCTION} />
            <Text> </Text>
            <RCText style={styles.contactROVR} i18nKey={CONTACT_ROVR} />
          </Text>
        </RCTouchableOpacity>
      </View>
    </AppScreen>
  );
};

export default ResetPassEmailSuccessScreen;
