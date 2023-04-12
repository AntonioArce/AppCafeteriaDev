import React from 'react'
import { StyleSheet, Text, View, Image, TextInput, Button, Touchable, TouchableOpacity } from 'react-native';

export const RegisterScreen = () => {
  return (
    <View style={styles.container}>
          <Image source={require('../../assets/fondo.jpg')} style={styles.back}/>
          <View style={styles.login}>
            <Text style={styles.loginTitle}>Registrate</Text>
            <View style={styles.loginForm}>
                <Text style={styles.loginFormTitles}>Nombre(s):</Text>
                <TextInput  placeholder='Antonio' keyboardType='default' style={styles.loginFormInputs}/>
                <Text style={styles.loginFormTitles}>Apellido Paterno:</Text>
                <TextInput  placeholder='Arce' keyboardType='default' style={styles.loginFormInputs}/>
                <Text style={styles.loginFormTitles}>Apellido Materno:</Text>
                <TextInput  placeholder='Gudiño' keyboardType='default' style={styles.loginFormInputs}/>
                <Text style={styles.loginFormTitles}>Numero telefonico:</Text>
                <TextInput  placeholder='55 16161616' keyboardType='decimal-pad' style={styles.loginFormInputs}/>
                <Text style={styles.loginFormTitles}>Ingresa tu Correo:</Text>
                <TextInput  placeholder='ejemplo@gmail.com' keyboardType='email-address' style={styles.loginFormInputs}/>
                <Text style={styles.loginFormTitles}>Ingresa tu Contraseña:</Text>
                <TextInput  placeholder='Contraseña' keyboardType='default' secureTextEntry={true} style={styles.loginFormInputs}/>
                <Button title='Registrarse' color='#1c2bff'/>
            </View>
          </View>
        </View>
  )
}


const styles = StyleSheet.create({
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
      borderRadius: 30,
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
  