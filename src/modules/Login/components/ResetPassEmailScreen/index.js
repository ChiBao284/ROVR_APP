import React, { useCallback, useState } from 'react';
import { Keyboard } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useFocusEffect } from '@react-navigation/core';

import { clearError, resetPassViaEmailRequest, validateEmailError } from 'modules/Login/actions';
import { selectError, selectIsProcessing } from 'modules/Login/selectors';
import ResetPassEmailScreen from './ResetPassEmailScreen';
import { RESET_PASSWORD_PHONE_SCREEN } from 'src/navigation/screenNames';

const ResetPassEmail = ({ navigation }) => {
  const dispatch = useDispatch();

  useFocusEffect(
    useCallback(() => {
      dispatch(clearError());
    }, [dispatch])
  );

  const [email, setEmail] = useState('');

  const isProcessing = useSelector(selectIsProcessing);
  const error = useSelector(selectError);

  const onChangeEmail = useCallback(userEmail => setEmail(userEmail), []);

  const onSendRequest = useCallback(() => {
    const processedEmail = email.trim();

    if (processedEmail) {
      Keyboard.dismiss();
      dispatch(resetPassViaEmailRequest({ email: processedEmail }));
    } else {
      dispatch(validateEmailError());
    }
  }, [dispatch, email]);

  const onRequestPhoneNumber = useCallback(() => {
    dispatch(clearError());
    navigation.navigate(RESET_PASSWORD_PHONE_SCREEN);
  }, [dispatch, navigation]);

  return (
    <ResetPassEmailScreen
      email={email}
      isSendRequestDisabled={!email.trim() || isProcessing}
      onChangeEmail={onChangeEmail}
      onSendRequest={onSendRequest}
      onRequestPhoneNumber={onRequestPhoneNumber}
      error={error}
    />
  );
};

export default ResetPassEmail;
