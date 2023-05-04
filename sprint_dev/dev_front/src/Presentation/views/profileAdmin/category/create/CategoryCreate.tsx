import React, {useEffect} from 'react'
import { View, Text, Image, TextInput, ToastAndroid } from 'react-native'
import { CustomTextInput } from '../../../../components/CustomTextInput'
import { RoundedButton } from '../../../../components/RoundedButton'
import useViewModel from './ViewModel'
import Style from './Styles'

export const AdminCategoryCreateScreen = () => {
    const { nombre_tipo, descripcion, onChange, errorMessage, createCategory, success } = useViewModel()
    useEffect(() => {
        if(errorMessage !== ''){
            ToastAndroid.show(errorMessage,ToastAndroid.LONG)
        }
      }, [errorMessage])
    useEffect(() => {
        if(success !== ''){
            ToastAndroid.show(success, ToastAndroid.LONG)
        }
    }, [success])
    
  return (
    <View>
        <View style={Style.title}>
            <Image source={require('../../../../../../assets/newCat.jpg')} style={Style.image}/>
            <Text style = {{marginTop: 25}}> Registrar nueva categoria </Text>
        </View>
        <View style={Style.form}>
            <View style = {Style.items}>
                <Text>Nombre de la categoria</Text>
                <CustomTextInput 
                    placeholder = 'Nombre de la categoria'
                    keyboardType='default'
                    property='nombre_tipo'
                    onChangeText = { onChange }
                    value = {nombre_tipo}
                    />
                <Text style={{marginTop: 5}}>Descripcion de la categoria</Text>
                <CustomTextInput 
                    placeholder = 'Agregar una descripcion corta'
                    keyboardType='default'
                    property='descripcion'
                    onChangeText = { onChange }
                    value = {descripcion}
                    />
            </View>
            <View style= {Style.boton}>
                <RoundedButton text='Registrar Categoria' onPress={ () => createCategory() }/>
            </View>
        </View>


    </View>
  )
}
