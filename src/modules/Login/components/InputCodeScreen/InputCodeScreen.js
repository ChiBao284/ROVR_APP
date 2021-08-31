import { View, Platform, KeyboardAvoidingView, Text } from 'react-native';
import React from 'react';

import {
  AppScreen,
  MessageBar,
  PinCode,
  PrimaryButton,
  RCText,
  RCTouchableOpacity,
} from 'components';
import I18NKEY from 'src/i18n/key';
import styles from '../InputCodeScreen/styles';

const InputPinScreen = ({
  pin,
  onChangePin,
  isSubmitPinCodeDisabled,
  onSubmitPinCode,
  error,
  onForgotPin,
}) => {
  return (
    <AppScreen>
      <View style={styles.container}>
        <KeyboardAvoidingView
          style={styles.keyboard}
          behavior={Platform.OS === 'ios' ? 'padding' : null}
        >
          <View style={styles.titleContainer}>
            <RCText style={styles.titleStyle} i18nKey={I18NKEY.VERIFY_PIN_CODE_SCREEN_TITLE} />
            <RCText
              style={styles.descriptionStyle}
              i18nKey={I18NKEY.VERIFY_PIN_CODE_SCREEN_DESCRIPTION}
            />
          </View>
          {error && <MessageBar style={styles.errorContainer} {...error} />}
          <PinCode
            pin={pin}
            onChangeText={onChangePin}
            isSecurePin={true}
            style={styles.pinCodeStyle}
          />
          <PrimaryButton
            style={styles.signInButton}
            i18nKey={I18NKEY.SIGN_IN}
            onPress={onSubmitPinCode}
            disabled={isSubmitPinCodeDisabled}
          />
          <RCTouchableOpacity onPress={onForgotPin} accessibilityLabel={'forgot-pin'}>
            <View style={styles.bottomContainer}>
              <RCText style={styles.leftBottomText} i18nKey={I18NKEY.FORGOT_PIN} />
              <Text> </Text>
              <RCText style={styles.rightBottomText} i18nKey={I18NKEY.RESET_PIN} />
            </View>
          </RCTouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </AppScreen>
  );
};

export default InputPinScreen;
