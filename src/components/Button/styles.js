import { StyleSheet } from 'react-native';

import { colors } from 'common/theme';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 14,
  },
  label: {
    fontSize: 14,
    textAlign: 'center',
    paddingVertical: 19,
  },
  defaultButton: {
    borderRadius: 14,
  },
  defaultButtonLabel: {
    color: colors.white,
    fontWeight: '700',
  },
  secondaryButton: {
    backgroundColor: colors.solitude,
  },
  secondaryButtonLabel: {
    color: colors.title,
    fontWeight: '700',
  },
  textButton: {
    backgroundColor: colors.transparent,
    justifyContent: 'center',
  },
  textButtonLabel: {
    color: colors.black,
    paddingVertical: 0,
  },
  outlineButton: {
    backgroundColor: colors.while,
    borderColor: colors.persianGreen,
    borderWidth: 1,
  },
  outlineButtonLabel: {
    color: colors.persianGreen,
  },
  outlineButtonDisabled: {
    borderColor: colors.solitude,
  },
  disabledButton: {
    opacity: 0.8,
  },
  disabledText: {
    opacity: 0.3,
  },
  disabledSecondaryButtonLabel: {
    opacity: 0.4,
  },
});

export default styles;
