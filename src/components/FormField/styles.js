import { StyleSheet } from 'react-native';

import { colors } from 'common/theme';

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
  },
  labelContainer: {
    flexDirection: 'row',
  },
  label: {
    backgroundColor: colors.white,
    color: colors.mainColor,
    fontSize: 14,
    paddingHorizontal: 4,
  },
  requiredField: {
    color: colors.seaPink,
  },
  container: {
    marginTop: 8,
    paddingVertical: 18,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: colors.solitude,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.transparent,
  },
  focusedContainer: {
    borderColor: colors.persianGreen,
  },
  errorContainer: {
    borderColor: colors.seaPink,
  },
  textInput: {
    flex: 1,
    paddingVertical: 0,
    fontSize: 16,
  },
  leftIcon: {
    fontSize: 16,
    color: colors.black,
    paddingHorizontal: 2,
  },
  errorMessage: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  warning: {
    marginRight: 5,
    fontSize: 14,
    lineHeight: 18,
    color: colors.scarlet,
  },
  errorText: {
    fontSize: 14,
    lineHeight: 18,
    color: colors.scarlet,
  },
});

export default styles;
