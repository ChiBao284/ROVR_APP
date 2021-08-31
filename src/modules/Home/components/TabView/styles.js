import { StyleSheet } from 'react-native';

import { colors } from 'common/theme';

const styles = StyleSheet.create({
  iconStyle: {
    tintColor: colors.solitude,
  },
  focusedIconStyle: {
    tintColor: colors.persianGreen,
  },
  container: {
    marginTop: 10,
  },
  centerTab: {
    backgroundColor: colors.persianGreen,
    borderRadius: 15,
    marginTop: 10,
  },
  centerIcon: {
    marginVertical: 15,
    marginHorizontal: 10,
  },
});

export default styles;
