import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFocusEffect } from '@react-navigation/core';

import ResetPasswordByPhone from './ResetPasswordByPhone';
import { resetPasswordViaPhoneRequest, clearError } from '../../actions';
import { selectError, selectIsProcessing } from '../../selectors';
import { RESET_PASS_EMAIL_SCREEN } from 'src/navigation/screenNames';

const ResetPasswordPhone = ({ navigation }) => {
  const dispatch = useDispatch();

  useFocusEffect(
    useCallback(() => {
      dispatch(clearError());
    }, [dispatch])
  );

  const isProcessing = useSelector(selectIsProcessing);
  const error = useSelector(selectError);

  const [phoneNumber, setPhoneNumber] = useState('');

  const onChangePhoneNumber = useCallback(text => {
    const phoneRegex = /^[0-9]{1,11}$/;
    if (text.trim() === '') {
      setPhoneNumber('');
    } else if (phoneRegex.test(text)) {
      setPhoneNumber(text);
    }
  }, []);

  const onResetPassword = useCallback(() => {
    dispatch(resetPasswordViaPhoneRequest({ phoneNumber: `+60 ${phoneNumber}` }));
  }, [dispatch, phoneNumber]);

  const onResetPassViaEmail = useCallback(() => {
    dispatch(clearError());
    navigation.navigate(RESET_PASS_EMAIL_SCREEN);
  }, [navigation, dispatch]);

  return (
    <ResetPasswordByPhone
      phoneNumber={phoneNumber}
      onChangePhoneNumber={onChangePhoneNumber}
      onResetPassword={onResetPassword}
      isDisableSendRequest={!phoneNumber.trim() || isProcessing}
      onResetPassViaEmail={onResetPassViaEmail}
      error={error}
    />
  );
};

export default ResetPasswordPhone;
