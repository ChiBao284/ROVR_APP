import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import {
  AppScreen,
  MessageBar,
  FormField,
  PrimaryButton,
  RCText,
  SecondaryButton,
} from 'src/components';
import styles from './styles';
import I18NKEY from 'src/i18n/key';

const ResetPINEmailScreen = ({
  email,
  isSendRequestDisabled,
  onChangeEmail,
  onSendRequest,
  onRequestPhoneNumber,
  onOutFocusEmail,
  error,
}) => {
  return (
    <AppScreen>
      <View style={styles.container}>
        <KeyboardAvoidingView
          style={styles.keyboard}
          behavior={Platform.OS === 'ios' ? 'padding' : null}
        >
          <ScrollView contentContainerStyle={styles.scrollView}>
            <View style={styles.mainContent}>
              <RCText
                accessibilityLabel={'description-reset-pass-email'}
                style={styles.description}
                i18nKey={I18NKEY.RESET_PIN_EMAIL_DESCRIPTION}
              />
              {error && <MessageBar {...error} style={styles.errorMessage} />}
              <FormField
                value={email}
                onChangeText={onChangeEmail}
                placeholder='Email address'
                returnKeyType='next'
                style={styles.input}
                accessibilityLabel={'email'}
                i18nKeyLabel={I18NKEY.EMAIL_ADDRESS}
                isError={error}
                onOutFocus={onOutFocusEmail}
              />
              <PrimaryButton
                disabled={isSendRequestDisabled}
                onPress={onSendRequest}
                style={styles.sendRequestButton}
                i18nKey={I18NKEY.SEND_REQUEST}
              />
              <SecondaryButton
                onPress={onRequestPhoneNumber}
                style={styles.requestPhoneButton}
                i18nKey={I18NKEY.REQUEST_VIA_PHONE_NUMBER}
              />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </AppScreen>
  );
};

export default ResetPINEmailScreen;
