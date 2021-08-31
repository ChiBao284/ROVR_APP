import { useState, useCallback, useEffect } from 'react';
import { AppState } from 'react-native';

export const useAppState = onChange => {
  const [appState, setAppState] = useState(AppState.currentState);

  const onAppStateChange = useCallback(
    nextAppState => {
      if (appState.match(/inactive|background/) && nextAppState === 'active') {
        onChange();
      }
      setAppState(nextAppState);
    },
    [appState, onChange],
  );

  useEffect(() => {
    AppState.addEventListener('change', onAppStateChange);

    return () => AppState.removeEventListener('change', onAppStateChange);
  }, [onAppStateChange]);
};
