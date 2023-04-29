import React, {useEffect} from 'react'
import { Text, View, Image, TextInput, Button, Touchable, TouchableOpacity, ScrollView, ToastAndroid } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';
import { CustomTextInput } from '../../components/CustomTextInput';

import useViewModel from './ViewModel'
import styles from './Styles'

export const RegisterScreen = () => {
  const { nombre,apellido_paterno, apellido_materno, num_telefono, contrasena, correo, confirmPassword, errorMessage, onChange, Register } = useViewModel()
  useEffect(() => {
    if(errorMessage != ''){
        ToastAndroid.show(errorMessage,ToastAndroid.LONG)
    }
  }, [errorMessage])
  return (
    <View style={styles.container}>
          <Image source={require('../../../../assets/fondo.jpg')} style={styles.back}/>
          <View style={styles.login}>
            <Text style={styles.loginTitle}>Registrate</Text>
            <View style={styles.loginForm}>
                <ScrollView>
                  <CustomTextInput 
                          placeholder = 'Nombres'
                          keyboardType='default'
                          property='nombre'
                          onChangeText={onChange}
                          value = {nombre}
                  />
                  <CustomTextInput 
                        placeholder = 'Apellido Paterno'
                        keyboardType='default'
                        property='apellido_paterno'
                        onChangeText={onChange}
                        value = {apellido_paterno}
                  />
                  <CustomTextInput 
                        placeholder = 'Apellido Materno'
                        keyboardType='default'
                        property='apellido_materno'
                        onChangeText={onChange}
                        value = {apellido_materno}
                  />
                  <CustomTextInput 
                        placeholder = 'Telefono'
                        keyboardType='decimal-pad'
                        property='num_telefono'
                        onChangeText={onChange}
                        value = {num_telefono}
                  />
                  <CustomTextInput 
                        placeholder = 'Correo Electronico'
                        keyboardType='email-address'
                        property='correo'
                        onChangeText={onChange}
                        value = {correo}
                  />
                  <CustomTextInput 
                        placeholder = 'Contraseña'
                        keyboardType='default'
                        property='contrasena'
                        onChangeText={onChange}
                        value = {contrasena}
                        secureTextEntry = {true}
                  />
                  <CustomTextInput 
                        placeholder = 'Confirme su contraseña'
                        keyboardType='default'
                        property='confirmPassword'
                        onChangeText={onChange}
                        value = {confirmPassword}
                        secureTextEntry = {true}
                  />
                </ScrollView>
                <View style={{marginTop: 30}}>
                        <RoundedButton text='ENTRAR'onPress={ () => Register() }/>
                </View>
            </View>
          </View>
        </View>
  )
}

