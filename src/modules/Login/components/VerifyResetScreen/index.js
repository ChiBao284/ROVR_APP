import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Alert } from 'react-native';

import VerifyResetScreen from './VerifyResetScreen';
import { LOGIN_SCREEN } from 'src/navigation/screenNames';
import { selectResetPassViaPhone } from '../../selectors';

const VerifyReset = ({ navigation }) => {
  const data = useSelector(selectResetPassViaPhone);

  const onSignInAgain = useCallback(() => {
    navigation.navigate(LOGIN_SCREEN);
  }, [navigation]);

  const onContactROVR = useCallback(() => {
    //TODO: handle contact ROVR
    Alert.alert('Contact ROVR', 'Coming soon...', [{ text: 'OK', onPress: () => {} }]);
  }, []);

  return (
    <VerifyResetScreen onSignInAgain={onSignInAgain} data={data} onContactROVR={onContactROVR} />
  );
};

export default VerifyReset;
