import { StyleSheet } from 'react-native';

import { colors } from 'common/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  keyboard: {
    flex: 1,
  },
  titleContainer: {
    alignItems: 'center',
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: 16,
  },
  descriptionStyle: {
    fontSize: 16,
    fontWeight: '400',
    marginTop: 8,
  },
  errorContainer: {
    marginTop: 32,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  pinCodeStyle: {
    paddingHorizontal: 52,
    marginTop: 32,
  },
  signInButton: {
    marginHorizontal: 20,
    marginTop: 32,
  },
  bottomContainer: {
    justifyContent: 'center',
    marginTop: 24,
    flexDirection: 'row',
  },
  leftBottomText: {
    fontSize: 14,
    fontWeight: '400',
  },
  rightBottomText: {
    fontSize: 14,
    fontWeight: '700',
  },
});

export default styles;
