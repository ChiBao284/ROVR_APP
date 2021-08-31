import { StyleSheet } from 'react-native';

import { colors } from 'common/theme';

const styles = StyleSheet.create({
  container: {
    padding: 0,
  },
  radioTile: {
    marginVertical: 8,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.unselected,
    borderRadius: 14,
  },
  radioText: {
    paddingVertical: 18,
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 20,
    color: colors.title,
  },
  titleSelected: {
    backgroundColor: colors.selected,
  },
  textSelected: {
    color: colors.white,
    fontWeight: '700',
  },
  checker: {
    width: 16,
    height: 16,
  },
});

export default styles;
