import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Alert } from 'react-native';

import { selectResetPassEmail } from 'modules/Login/selectors';
import ResetPassEmailSuccessScreen from './ResetPassEmailSuccessScreen';
import { LOGIN_SCREEN } from 'src/navigation/screenNames';

const ResetPassEmailSuccess = ({ navigation }) => {
  const email = useSelector(selectResetPassEmail);

  const onSignInAgain = useCallback(() => {
    navigation.navigate(LOGIN_SCREEN);
  }, [navigation]);

  const onContactROVR = useCallback(() => {
    //TODO: handle contact ROVR
    Alert.alert('Contact ROVR', 'Coming soon...', [{ text: 'OK', onPress: () => {} }]);
  }, []);

  return (
    <ResetPassEmailSuccessScreen
      email={email}
      onSignInAgain={onSignInAgain}
      onContactROVR={onContactROVR}
    />
  );
};

export default ResetPassEmailSuccess;
