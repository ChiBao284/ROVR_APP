import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert } from 'react-native';
import { useFocusEffect } from '@react-navigation/core';

import InputPinScreen from './InputCodeScreen';
import { PIN_CODE_LENGTH } from '../../constants';
import { clearError, verifyPinCode } from '../../actions';
import { selectError, selectIsProcessing } from '../../selectors';
import { RESET_PIN_EMAIL_SCREEN } from 'navigation/screenNames';
const InputCode = ({ navigation }) => {
  const dispatch = useDispatch();

  useFocusEffect(
    useCallback(() => {
      dispatch(clearError());
    }, [dispatch]),
  );

  const error = useSelector(selectError);
  const isProcessing = useSelector(selectIsProcessing);

  const [pin, setPin] = useState('');

  const onSubmitPinCode = useCallback(() => {
    dispatch(clearError());
    dispatch(verifyPinCode({ pin }));
  }, [dispatch, pin]);

  const onChangePin = useCallback(text => {
    setPin(text);
  }, []);

  const onForgotPin = useCallback(() => {
    //TODO: handle forgot PIN
    navigation.navigate(RESET_PIN_EMAIL_SCREEN);
  }, []);

  return (
    <InputPinScreen
      pin={pin}
      onChangePin={onChangePin}
      isSubmitPinCodeDisabled={pin?.length < PIN_CODE_LENGTH || isProcessing}
      onSubmitPinCode={onSubmitPinCode}
      error={error}
      onForgotPin={onForgotPin}
    />
  );
};

export default InputCode;
