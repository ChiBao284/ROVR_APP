import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';

import { AppScreen, RCText, MessageBar } from 'components';
import { DropdownPhoneInput, PrimaryButton, SecondaryButton } from 'components';
import {
  PHONE_NUMBERS,
  RESET_PASSWORD_VIA_PHONE,
  RESET_VIA_EMAIL,
  SEND_REQUEST,
} from 'src/i18n/key';
import styles from './styles';

const ResetPasswordByPhone = ({
  phoneNumber,
  onChangePhoneNumber,
  onResetPassword,
  isDisableSendRequest,
  onResetPassViaEmail,
  error,
}) => {
  return (
    <AppScreen>
      <KeyboardAvoidingView
        style={styles.keyboard}
        behavior={Platform.OS === 'ios' ? 'padding' : null}
      >
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.container}>
            <RCText style={styles.description} i18nKey={RESET_PASSWORD_VIA_PHONE} />
            {error && <MessageBar {...error} />}
            <DropdownPhoneInput
              value={phoneNumber}
              onChangeText={onChangePhoneNumber}
              placeholder={'000 0000 0000'}
              returnKeyType='next'
              style={styles.input}
              accessibilityLabel={'username'}
              i18nKeyLabel={PHONE_NUMBERS}
            />
            <PrimaryButton
              style={styles.sendRequest}
              i18nKey={SEND_REQUEST}
              onPress={onResetPassword}
              accessibilityLabel={'send-request'}
              disabled={isDisableSendRequest}
            />
            <SecondaryButton
              style={styles.resetViaPhone}
              i18nKey={RESET_VIA_EMAIL}
              onPress={onResetPassViaEmail}
              accessibilityLabel={'reset-via-phone'}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </AppScreen>
  );
};

export default ResetPasswordByPhone;
