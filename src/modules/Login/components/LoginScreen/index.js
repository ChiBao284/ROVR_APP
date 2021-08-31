import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Keyboard, Linking, Alert } from 'react-native';
import { useFocusEffect } from '@react-navigation/core';

import { clearError, logInRequest, storeUsername } from 'modules/Login/actions';
import { selectError, selectIsProcessing, selectStoredUsername } from '../../selectors';
import LoginScreen from './LoginScreen';
import { RESET_PASSWORD_PHONE_SCREEN } from 'navigation/screenNames';
import { REGISTER_URL } from 'src/common/constants';

const Login = ({ navigation }) => {
  const dispatch = useDispatch();

  useFocusEffect(
    useCallback(() => {
      dispatch(clearError());
    }, [dispatch])
  );

  const persistUsername = useSelector(selectStoredUsername);
  const isProcessing = useSelector(selectIsProcessing);
  const error = useSelector(selectError);

  const [username, setUsername] = useState(persistUsername);
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [shouldRememberUsername, setShouldRememberUsername] = useState(!!persistUsername);

  const onChangePasswordVisibility = useCallback(() => {
    setIsPasswordVisible(!isPasswordVisible);
  }, [isPasswordVisible]);

  const onChangeUsername = useCallback(accountName => setUsername(accountName), []);

  const onChangePassword = useCallback(pass => setPassword(pass), []);

  const onSubmitLogin = useCallback(() => {
    const processedLogin = username.trim();

    if (processedLogin && password.trim()) {
      Keyboard.dismiss();
      dispatch(logInRequest({ username: processedLogin, password }));
      dispatch(storeUsername({ username, shouldRememberUsername }));
    }
  }, [dispatch, username, password, shouldRememberUsername]);

  const onRememberUsername = useCallback(() => {
    setShouldRememberUsername(!shouldRememberUsername);
  }, [shouldRememberUsername]);

  const onPressCantSignIn = useCallback(() => {
    dispatch(clearError());
    navigation.navigate(RESET_PASSWORD_PHONE_SCREEN);
  }, [dispatch, navigation]);

  const onPressDontHaveAccount = useCallback(async () => {
    const supported = await Linking.canOpenURL(REGISTER_URL);
    if (supported) {
      await Linking.openURL(REGISTER_URL);
    } else {
      Alert.alert(`Don't know how to open this URL: ${REGISTER_URL}`);
    }
  }, []);

  return (
    <LoginScreen
      username={username}
      password={password}
      isSignInDisabled={!username.trim() || !password.trim() || isProcessing}
      onChangeUsername={onChangeUsername}
      onChangePassword={onChangePassword}
      isPasswordVisible={isPasswordVisible}
      onChangePasswordVisibility={onChangePasswordVisibility}
      shouldRememberUsername={shouldRememberUsername}
      onRememberUsername={onRememberUsername}
      onSubmitLogin={onSubmitLogin}
      error={error}
      onPressCantSignIn={onPressCantSignIn}
      onPressDontHaveAccount={onPressDontHaveAccount}
    />
  );
};

export default Login;
