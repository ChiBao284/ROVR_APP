import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  keyboard: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
  },
  mainContent: {
    paddingHorizontal: 20,
  },
  title: {
    fontWeight: '700',
    fontSize: 28,
    marginTop: 84,
    marginBottom: 17,
  },
  input: {
    marginVertical: 16,
  },
  passwordInput: {
    marginBottom: 16,
  },
  otherContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  signUp: {
    marginTop: 27,
    fontWeight: '400',
  },
});

export default styles;
