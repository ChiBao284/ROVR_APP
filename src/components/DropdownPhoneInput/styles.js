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
    alignItems: 'center',
    flexDirection: 'row',
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
  flagButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  phonePrefix: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.ebony,
    marginHorizontal: 10,
  },
  textInput: {
    flex: 1,
    paddingVertical: 0,
    fontSize: 16,
    textAlignVertical: 'center',
  },
  dropDownItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  focusedItemStyle: {
    backgroundColor: colors.ebony10,
    overflow: 'hidden',
  },
  itemPhonePrefix: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.ebony,
    marginLeft: 10,
  },
  itemPhoneName: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.ebony,
    marginLeft: 10,
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
  phoneContainer: {
    height: 272,
  },
  scrollViewDropDown: {
    marginHorizontal: 20,
    backgroundColor: colors.solitude,
    borderRadius: 14,
    paddingVertical: 16,
  },
});

export default styles;
