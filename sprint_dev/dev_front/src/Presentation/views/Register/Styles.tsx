import { StyleSheet } from "react-native";

const RegisterStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3E5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  back: {
    width: '100%',
    height: '100%',
  },
  login: {
    backgroundColor: 'white',
    width: '85%',
    height: '75%',
    position: 'absolute',
    padding: 45,
    justifyContent: 'center',
    /*       borderWidth: 1 */
  },
  loginTitle: {
    fontWeight: 'bold',
    fontSize: 28,
    /* paddingBottom: 20, */
  },
  loginForm: {
    flex: 1,
    flexDirection: 'column',
  },
  loginFormTitles: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingBottom: 5,
    paddingTop: 10,
  },
  loginFormInputs: {
    paddingBottom: 1,
    fontSize: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default RegisterStyles