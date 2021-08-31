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
    justifyContent: 'center',
  },
  mainContent: {
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    fontWeight: '700',
    fontSize: 18,
  },
  description: {
    marginTop: 24,
    fontWeight: '400',
    fontSize: 16,
  },
  input: {
    marginTop: 32,
  },
  sendRequestButton: {
    marginTop: 32,
  },
  requestPhoneButton: {
    marginTop: 16,
  },
  errorMessage: {
    marginTop: 32,
  },
});

export default styles;
