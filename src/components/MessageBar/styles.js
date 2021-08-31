import { StyleSheet } from 'react-native';

import { colors } from 'common/theme';

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
  },
  message: {
    fontSize: 14,
    paddingHorizontal: 10,
    paddingVertical: 16,
  },
  defaultThemeContainer: {
    backgroundColor: colors.gray,
  },
  defaultTheme: {
    color: colors.black,
  },
  infoThemeContainer: {
    backgroundColor: colors.charcoal,
  },
  infoTheme: {
    color: colors.blue,
  },
  successThemeContainer: {
    backgroundColor: colors.persianGreen,
  },
  successTheme: {
    color: colors.white,
  },
  warningThemeContainer: {
    backgroundColor: colors.seaPink,
  },
  errorThemeContainer: {
    backgroundColor: colors.seaPink,
  },
  errorTheme: {
    color: colors.white,
  },
});

export default styles;
