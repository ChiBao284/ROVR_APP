import { StyleSheet } from 'react-native';

import { colors } from 'common/theme';

const checkboxWidth = 20;
const checkboxHeight = 20;
const iconSize = 12;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    marginLeft: 9,
    fontSize: 14,
    fontWeight: '400',
    color: colors.ebony,
  },
  checkbox: {
    width: checkboxWidth,
    height: checkboxHeight,
    backgroundColor: colors.white,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: colors.ebony,
  },
  selected: {
    marginTop: -2,
    marginLeft: -2,
    width: checkboxWidth,
    height: checkboxHeight,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.persianGreen,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: colors.persianGreen,
  },
  icon: {
    width: iconSize,
    height: iconSize,
    tintColor: colors.white,
  },
});

export default styles;
