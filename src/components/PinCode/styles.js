import { StyleSheet } from 'react-native';

import { colors } from 'common/theme';

const styles = StyleSheet.create({
  container: {
    flexShrink: 1,
    width: '100%',
    alignItems: 'center',
  },
  pinContainer: {
    flexDirection: 'row',
  },
  pinStyle: {
    width: 56,
    height: 56,
    borderRadius: 14,
    backgroundColor: colors.solitude,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  pinBorderStyle: {
    borderWidth: 1,
    borderColor: colors.persianGreen,
  },
  pinTextStyle: {
    fontSize: 18,
    fontWeight: '400',
    color: colors.black,
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.black,
  },
  text: {
    ...StyleSheet.absoluteFill,
    opacity: 0,
  },
});

export default styles;
