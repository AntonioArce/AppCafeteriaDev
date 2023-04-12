import React from 'react'
import { StyleSheet, Text, View, Image, TextInput, Button, Touchable, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';

export const HomeScreen = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    return (
        <View style={styles.container}>
          <Image source={require('../../assets/fondo.jpg')} style={styles.back}/>
          <View style={styles.login}>
            <Text style={styles.loginTitle}>Iniciar sesión</Text>
            <View style={styles.loginForm}>
                <Text style={styles.loginFormTitles}>Ingresa tu correo:</Text>
                <TextInput  placeholder='Correo' keyboardType='email-address' style={styles.loginFormInputs}/>
                <Text style={styles.loginFormTitles}>Ingresa tu contraseña:</Text>
                <TextInput  placeholder='Contraseña' keyboardType='default' secureTextEntry={true} style={styles.loginFormInputs}/>
                <Button title='Entrar' color='#1c2bff'/>
                <View style={styles.loginFormLinks}>
                  <Text>¿Olvidaste tu Contraseña?</Text>
                  <TouchableOpacity onPress={ () =>  navigation.navigate('RecoveryScreen')}>
                    <Text style={styles.loginFormRegister}>Acceda aqui</Text>
                  </TouchableOpacity>
                </View >
                <View style={styles.loginFormLinks1}>
                  <Text style={styles.loginFormLinkIn}>¿No tienes cuenta?</Text>
                  <TouchableOpacity onPress={ () =>  navigation.navigate('RegisterScreen')}>
                    <Text style={styles.loginFormRegister}>Registrate</Text>
                  </TouchableOpacity>
                </View>
            </View>
          </View>
        </View>
      );
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
      height: '45%',
      position: 'absolute',
      borderRadius: 30,
      padding: 50,
      borderWidth: 1
    },
    loginTitle: {
      fontWeight: 'bold',
      fontSize: 35,
      paddingBottom: 30,
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
  