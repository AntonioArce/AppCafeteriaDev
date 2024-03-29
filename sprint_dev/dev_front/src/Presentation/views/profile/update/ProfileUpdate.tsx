import { StackScreenProps } from "@react-navigation/stack"
import { RootStackParamList } from "../../../navigator/MainStackNavigator"
import { Image, ScrollView, Text, ToastAndroid, View } from "react-native"
import { CustomTextInput } from "../../../components/CustomTextInput"
import { RoundedButton } from "../../../components/RoundedButton"
import useViewModel from './ViewModel';
import styles from './Styles'
import { useEffect } from "react"

interface Props extends StackScreenProps<RootStackParamList, 'ProfileUpdateScreen'>{};

export const ProfileUpdateScreen = ({navigation, route}: Props) => {
  const { user } = route.params;
  const { nombre ,apellido_paterno,apellido_materno,num_telefono, loading, errorMessage, successMessage, onChange, onChangeInfoUpdate, update} = useViewModel(user);
  useEffect(() => {
    if (errorMessage != '') {
      ToastAndroid.show(errorMessage, ToastAndroid.LONG);
    }
  }, [errorMessage])

  useEffect(() => {
    if (successMessage != '') {
      ToastAndroid.show(successMessage, ToastAndroid.LONG);
    }
  }, [successMessage])

  return (
    <View style= {styles.container}>
        <Image
          source={ require('../../../../../assets/cafe-backg.jpg') } 
          style={ styles.imageBackground }
        />
        <View style={ styles.form }>
            <ScrollView>
                <Text style={ styles.formText }>ACTUALIZAR</Text>
                <CustomTextInput
                    placeholder='Nombre'
                    keyboardType='default'
                    property='nombre'
                    onChangeText={ onChange }
                    value={ nombre }
                />
                <CustomTextInput
                    placeholder='Apellido Paterno'
                    keyboardType='default'
                    property='apellido_paterno'
                    onChangeText={ onChange }
                    value={ apellido_paterno }
                />
                <CustomTextInput
                    placeholder='Apellido Materno'
                    keyboardType='default'
                    property='apellido_materno'
                    onChangeText={ onChange }
                    value={ apellido_materno }
                />
                <CustomTextInput 
                    placeholder='Telefono'
                    keyboardType='numeric'
                    property='num_telefono'
                    onChangeText={ onChange }
                    value={ num_telefono }
                /> 
                <View style={{ marginTop: 30 }}>
                    <RoundedButton text='CONFIRMAR' onPress={ () => update() }
                    />
                </View>
            </ScrollView>
        </View>
    </View>
  )
}
