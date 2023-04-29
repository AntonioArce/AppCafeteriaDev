import { StyleSheet } from "react-native";

const HomeStyles = StyleSheet.create({
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
      height: '45%',
      position: 'absolute',
      borderRadius: 30,
      padding: 50,
      borderWidth: 1
    },
    loginTitle: {
      fontWeight: 'bold',
      fontSize: 35,
      paddingBottom: 5,
    },
    loginForm: {
      flex: 1,
      flexDirection: 'column',
    },
    loginFormTitles: {
      fontSize: 15,
      fontWeight: 'bold',
      paddingBottom: 5,
    },
    loginFormInputs:{
      paddingBottom: 10,
      fontSize: 15
    },
    loginFormLinks: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 20
    },
    loginFormLinks1: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 80,
    },
    loginFormLinkIn: {
      paddingRight: 10
    },
    loginFormRegister: {
        fontStyle: 'italic',
      color: 'blue',
      borderBottomWidth: 1,
      borderBottomColor: 'blue',
      fontWeight: 'bold',
    },
  });

export default HomeStyles