import { StyleSheet } from "react-native";

const RegisterStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    back:{
      width: '100%',
      height: '100%',
    },
    login: {
      backgroundColor: 'white',
      width: '80%',
      height: '65%',
      position: 'absolute',
      padding: 45,
/*       borderWidth: 1 */
    },
    loginTitle: {
      fontWeight: 'bold',
      fontSize: 35,
      paddingBottom: 20,
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
    loginFormInputs:{
      paddingBottom: 1,
      fontSize: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
  });

export default RegisterStyles