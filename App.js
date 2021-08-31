import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { rootNavigationRef } from 'navigation/navigationUtils';
import { store, persistor } from 'src/store';
import rootStack from 'navigation';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer ref={rootNavigationRef}>{rootStack}</NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
