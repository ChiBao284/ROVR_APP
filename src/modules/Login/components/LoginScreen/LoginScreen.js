import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';

import {
  AppScreen,
  Checkbox,
  FormField,
  MessageBar,
  PrimaryButton,
  RCText,
  TextButton,
} from 'src/components';
import { assets } from 'common/theme';
import { loginNotifications } from '../../constants';
import {
  SIGN_IN,
  USERNAME_EMAIL,
  PASSWORD,
  REMEMBER_ME,
  I_CANT_SIGN_IN,
  DONT_HAVE_ACCOUNT,
} from 'src/i18n/key';
import styles from './styles';

const LoginScreen = ({
  username,
  password,
  onChangeUsername,
  onChangePassword,
  isPasswordVisible,
  onChangePasswordVisibility,
  shouldRememberUsername,
  onRememberUsername,
  onSubmitLogin,
  isSignInDisabled,
  error,
  onPressCantSignIn,
  onPressDontHaveAccount,
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
              <RCText accessibilityLabel={'title-sign-in'} style={styles.title} i18nKey={SIGN_IN} />
              {error && <MessageBar {...error} />}
              <FormField
                value={username}
                onChangeText={onChangeUsername}
                placeholder={'Username'}
                returnKeyType='next'
                style={styles.input}
                accessibilityLabel={'username'}
                i18nKeyLabel={USERNAME_EMAIL}
                isError={error && error.testLabel === loginNotifications.wrongUsername.testLabel}
              />
              <FormField
                value={password}
                onChangeText={onChangePassword}
                placeholder={'Password'}
                returnKeyType='done'
                secureTextEntry={!isPasswordVisible}
                rightIcon={isPasswordVisible ? assets.eyeSlashIcon : assets.eyeIcon}
                iconAction={onChangePasswordVisibility}
                style={styles.passwordInput}
                accessibilityLabel={'password'}
                i18nKeyLabel={PASSWORD}
                isError={error && error.testLabel === loginNotifications.wrongPassword.testLabel}
              />
              <View style={styles.otherContent}>
                <Checkbox
                  i18nKey={REMEMBER_ME}
                  isSelected={shouldRememberUsername}
                  onToggle={onRememberUsername}
                  testLabel={'remember-me'}
                />
                <TextButton i18nKey={I_CANT_SIGN_IN} onPress={onPressCantSignIn} />
              </View>
              <PrimaryButton
                disabled={isSignInDisabled}
                onPress={onSubmitLogin}
                i18nKey={SIGN_IN}
              />
              <TextButton
                style={styles.signUp}
                i18nKey={DONT_HAVE_ACCOUNT}
                onPress={onPressDontHaveAccount}
              />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </AppScreen>
  );
};

export default LoginScreen;
