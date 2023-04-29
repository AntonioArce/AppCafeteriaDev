import React from 'react'
import { Text, View, Image, TextInput, Button, Touchable, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import { RoundedButton } from '../../components/RoundedButton'; 
import { CustomTextInput } from '../../components/CustomTextInput';
import { RootStackParamList } from '../../../../App';
import styles from './Styles'
import useViewModel from './ViewModel'

interface Props extends StackScreenProps<RootStackParamList, "HomeScreen">{}

export const HomeScreen = ({navigation, route}:Props) => {
  const { email, password, errorMessage, /* user, */ onChange/* , login   */} = useViewModel();
    return (
        <View style={styles.container}>
          <Image source={require('../../../../assets/fondo.jpg')} style={styles.back}/>
          <View style={styles.login}>
            <Text style={styles.loginTitle}>Iniciar sesión</Text>
            <View style={styles.loginForm}>
                <CustomTextInput 
                    placeholder = 'Correo Electronico'
                    keyboardType='email-address'
                    property='email'
                    onChangeText={onChange}
                    value = {email}
                />
                <CustomTextInput 
                    placeholder = 'Contraseña'
                    keyboardType='default'
                    property='password'
                    onChangeText={onChange}
                    value = {password}
                    secureTextEntry = {true}
                />
                <View style={{marginTop: 30}}>
                    <RoundedButton text='ENTRAR' onPress={() => console.log("HOLA")}/>
                    <View style={styles.loginFormLinks}>
                        <Text>¿Olvidaste tu Contraseña?</Text>
                        <TouchableOpacity onPress={ () =>  navigation.navigate('RecoveryScreen')}>
                        <Text style={styles.loginFormRegister}>Acceda aqui</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.loginFormLinks1}>
                        <Text style={styles.loginFormLinkIn}>¿No tienes cuenta?</Text>
                        <TouchableOpacity onPress={ () =>  navigation.navigate('RegisterScreen')}>
                        <Text style={styles.loginFormRegister}>Registrate</Text>
                        </TouchableOpacity>
                    </View> 
                </View>
            </View>
          </View>
        </View>
      );
}

