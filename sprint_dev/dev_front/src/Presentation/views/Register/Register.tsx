import React, { useEffect } from 'react'
import { Text, View, Image, TextInput, Button, Touchable, TouchableOpacity, ScrollView, ToastAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RoundedButton } from '../../components/RoundedButton';
import { CustomTextInput } from '../../components/CustomTextInput';
import { StackNavigationProp } from '@react-navigation/stack';

import useViewModel from './ViewModel'
import styles from './Styles'
import { RootStackParamList } from '../../navigator/MainStackNavigator';

export const RegisterScreen = () => {
      const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()
      const { nombre, apellido_paterno, apellido_materno, num_telefono, contrasena, correo, confirmPassword, errorMessage, successMessage, onChange, Register } = useViewModel()
      useEffect(() => {
            if (errorMessage != '') {
                  ToastAndroid.show(errorMessage, ToastAndroid.LONG)
                  /* navigation.replace('HomeScreen') */
            }
      }, [errorMessage])
      useEffect(() => {
            if (successMessage != '') {
                  ToastAndroid.show(successMessage, ToastAndroid.LONG)

            }
      }, [successMessage])

      return (
            <View style={styles.container}>
                  <Image source={require('../../../../assets/cafes.jpg')} style={styles.back} />
                  <View style={styles.login}>
                        <Text style={styles.loginTitle}>Ingresa tus datos</Text>
                        <View style={styles.loginForm}>
                              <ScrollView style={{ marginBottom: 5 }}>
                                    <CustomTextInput
                                          placeholder='Nombres'
                                          keyboardType='default'
                                          property='nombre'
                                          onChangeText={onChange}
                                          value={nombre}
                                    />
                                    <CustomTextInput
                                          placeholder='Apellido Paterno'
                                          keyboardType='default'
                                          property='apellido_paterno'
                                          onChangeText={onChange}
                                          value={apellido_paterno}
                                    />
                                    <CustomTextInput
                                          placeholder='Apellido Materno'
                                          keyboardType='default'
                                          property='apellido_materno'
                                          onChangeText={onChange}
                                          value={apellido_materno}
                                    />
                                    <CustomTextInput
                                          placeholder='Telefono'
                                          keyboardType='decimal-pad'
                                          property='num_telefono'
                                          onChangeText={onChange}
                                          value={num_telefono}
                                    />
                                    <CustomTextInput
                                          placeholder='Correo Electronico'
                                          keyboardType='email-address'
                                          property='correo'
                                          onChangeText={onChange}
                                          value={correo}
                                    />
                                    <CustomTextInput
                                          placeholder='Contraseña'
                                          keyboardType='default'
                                          property='contrasena'
                                          onChangeText={onChange}
                                          value={contrasena}
                                          secureTextEntry={true}
                                    />
                                    <CustomTextInput
                                          placeholder='Confirme su contraseña'
                                          keyboardType='default'
                                          property='confirmPassword'
                                          onChangeText={onChange}
                                          value={confirmPassword}
                                          secureTextEntry={true}
                                    />
                              </ScrollView>
                              <View>
                                    <RoundedButton text='REGISTRARSE' onPress={() => Register()} />
                              </View>
                              <View style={{ top: 5 }}>
                                    <RoundedButton text='INICIAR SESION' onPress={() => navigation.navigate("HomeScreen")} />
                              </View>
                        </View>
                  </View>
            </View>
      )
}

