import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ChooseLanguageScreen from './ChooseLanguageScreen';
import { LANGUAGE_OPTIONS } from 'common/constants';
import { LOGIN_SCREEN } from 'navigation/screenNames';
import { changeLanguage } from '../../actions';
import { selectLanguage } from '../../selectors';

const ChooseLanguage = ({ navigation }) => {
  const language = useSelector(selectLanguage);
  const dispatch = useDispatch();

  const onChangeLanguage = useCallback(
    selectedLanguage => {
      dispatch(changeLanguage(selectedLanguage));
    },
    [dispatch],
  );

  const confirm = useCallback(() => {
    navigation.replace(LOGIN_SCREEN);
  }, [navigation]);

  return (
    <ChooseLanguageScreen
      options={LANGUAGE_OPTIONS}
      selected={language}
      onChangeLanguage={onChangeLanguage}
      confirm={confirm}
    />
  );
};

export default ChooseLanguage;
