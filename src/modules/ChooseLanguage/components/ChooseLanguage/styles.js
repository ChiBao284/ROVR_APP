import { StyleSheet } from 'react-native';

import { colors } from 'common/theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: 106,
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: colors.white,
  },
  logo: {
    width: 48,
    height: 48,
  },
  title: {
    paddingTop: 18,
    fontSize: 28,
    fontWeight: '700',
    lineHeight: 40,
    color: colors.title,
    width: '70%',
  },
  subtitle: {
    paddingTop: 8,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    color: colors.subtitle,
  },
  radioContainer: {
    paddingVertical: 32,
  },
  button: {
    borderRadius: 14,
  },
  buttonText: {
    paddingVertical: 20,
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 16,
    color: colors.white,
  },
  linearGradient: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 14,
  },
});

export default styles;
