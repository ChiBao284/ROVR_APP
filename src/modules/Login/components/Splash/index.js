import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { CHOOSE_LANGUAGE, LOGIN_SCREEN } from 'src/navigation/screenNames';
import SplashScreen from './SplashScreen';
import { selectIsFirstTimeOpen } from '../../selectors';
import { checkFirstTimeOpen } from '../../actions';

const Splash = ({ navigation }) => {
  const isFirstTimeOpen = useSelector(selectIsFirstTimeOpen);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isFirstTimeOpen) {
      dispatch(checkFirstTimeOpen());
      navigation.replace(CHOOSE_LANGUAGE);
    } else {
      navigation.replace(LOGIN_SCREEN);
    }
  }, [isFirstTimeOpen, navigation, dispatch]);

  return <SplashScreen />;
};

export default Splash;
