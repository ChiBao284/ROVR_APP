import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { logOutRequest } from 'src/modules/Login/actions';
import HomeScreen from './HomeScreen';

const HomeTab = () => {
  const dispatch = useDispatch();

  const onSignOut = useCallback(() => {
    dispatch(logOutRequest());
  }, [dispatch]);

  return <HomeScreen onSignOut={onSignOut} />;
};

export default HomeTab;
