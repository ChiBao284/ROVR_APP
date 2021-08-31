import HomeTab from '../components/HomeTab';
import BillTab from '../components/BillTab';
import OrderTab from '../components/OrderTab';
import UserTab from '../components/UserTab';
import SettingTab from '../components/SettingTab';

export const TAB_NAME = {
  home: {
    name: 'homeTab',
    component: HomeTab,
  },
  bill: {
    name: 'billTab',
    component: BillTab,
  },
  order: {
    name: 'orderTab',
    component: OrderTab,
  },
  user: {
    name: 'smartPayTab',
    component: UserTab,
  },
  setting: {
    name: 'accountTab',
    component: SettingTab,
  },
};

export const MAIN_TABS = [
  TAB_NAME.home,
  TAB_NAME.bill,
  TAB_NAME.order,
  TAB_NAME.user,
  TAB_NAME.setting,
];

export const hideTabTitle = {
  tabBarLabel: () => {
    return null;
  },
};
