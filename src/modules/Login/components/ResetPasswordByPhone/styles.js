import { StyleSheet } from 'react-native';

import { colors } from 'common/theme';

const styles = StyleSheet.create({
  keyboard: {
    flex: 1,
  },
  scrollView: {
    // flexGrow: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  description: {
    fontSize: 16,
    marginTop: 5,
    marginBottom: 10,
  },
  input: {
    marginTop: 16,
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
  sendRequest: {
    marginTop: 32,
  },
  resetViaPhone: {
    marginTop: 16,
  },
});

export default styles;
