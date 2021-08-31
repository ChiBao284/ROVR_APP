import { useCallback, useEffect } from 'react';
import { BackHandler } from 'react-native';

export const useBackHandler = onPressBack => {
  const onDisableBackPress = useCallback(() => {
    if (onPressBack) {
      onPressBack();
    }

    return true;
  }, [onPressBack]);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', onDisableBackPress);

    return () => BackHandler.removeEventListener('hardwareBackPress', onDisableBackPress);
  }, [onDisableBackPress]);
};
