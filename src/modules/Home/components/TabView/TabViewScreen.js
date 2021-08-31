import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { RCImage, RCView } from 'src/components';
import { TAB_NAME, MAIN_TABS, hideTabTitle } from 'modules/Home/constants';
import { hideHeaderOptions } from 'navigation/navigationOptions';
import { assets } from 'common/theme';
import styles from './styles';

const Tab = createBottomTabNavigator();

const tabScreenOptions = ({ route }) => ({
  tabBarIcon: ({ focused }) => {
    let iconSrc = assets.homeIcon;
    let iconStyle = focused ? styles.focusedIconStyle : styles.iconStyle;
    let containerStyle = styles.container;

    switch (route.name) {
      case TAB_NAME.bill.name:
        iconSrc = assets.billIcon;

        break;
      case TAB_NAME.order.name:
        iconSrc = assets.truckIcon;
        iconStyle = {
          ...styles.iconStyle,
          ...styles.centerIcon,
        };
        containerStyle = styles.centerTab;

        break;
      case TAB_NAME.user.name:
        iconSrc = assets.userIcon;

        break;
      case TAB_NAME.setting.name:
        iconSrc = assets.settingIcon;

        break;
      default:
        iconSrc = assets.homeIcon;

        break;
    }
    return (
      <RCView style={containerStyle}>
        <RCImage source={iconSrc} style={iconStyle} />
      </RCView>
    );
  },
  tabBarStyle: {
    height: 70,
  },
});

const TabViewScreen = () => {
  return (
    <Tab.Navigator screenOptions={tabScreenOptions}>
      {MAIN_TABS.map(tab => (
        <Tab.Screen
          key={tab.name}
          name={tab.name}
          component={tab.component}
          options={{ ...hideHeaderOptions, ...hideTabTitle }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default TabViewScreen;
