import React, { useEffect } from 'react';

import TabViewScreen from './TabViewScreen';
import { hideHeaderOptions } from 'navigation/navigationOptions';

const TabView = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions(hideHeaderOptions);
  }, [navigation]);

  return <TabViewScreen navigation={navigation} />;
};

export default TabView;
