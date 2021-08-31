import { StyleSheet } from 'react-native';

import { colors } from 'common/theme';

const styles = StyleSheet.create({
  backButtonView: {
    backgroundColor: colors.white,
    paddingVertical: 10,
    paddingRight: 10,
    flexDirection: 'row',
  },
  titleBack: {
    marginLeft: 16,
    fontSize: 16,
    fontWeight: '500',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.title,
  },
});

export default styles;
