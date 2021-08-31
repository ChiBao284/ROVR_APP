import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  image: {
    alignSelf: 'center',
    marginTop: 75,
    marginBottom: 16,
    resizeMode: 'contain',
  },
  content: {
    paddingHorizontal: 45,
    alignItems: 'center',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 22,
  },
  data: {
    fontSize: 16,
    fontWeight: '600',
  },
  button: {
    marginTop: 32,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 100,
  },
  text: {
    fontSize: 14,
    fontWeight: '400',
  },
  contact: {
    fontSize: 14,
    fontWeight: '700',
  },
});

export default styles;
