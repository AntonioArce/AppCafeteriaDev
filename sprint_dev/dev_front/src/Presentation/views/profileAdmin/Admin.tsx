import React from 'react'
import { View, Text, Button, Image} from 'react-native'
import useViewModel from './ViewModel'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from '../../../../App'
import styles from './Styles'
import { RoundedButton } from '../../components/RoundedButton'

interface Props extends StackScreenProps<RootStackParamList>{}

export const AdminScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()
  const { removeSession, user } = useViewModel()
  return (
    <View style = {styles.container}>
        <View style={ styles.info }>
          <View style={ styles.body }>
            <Image source={require('../../../../assets/profileadmin.png')} style={ styles.images }/>
            <Text style={ styles.text } >Nombre: </Text>
            <Text style={ styles.text }>{user?.nombre}</Text>
          </View>
          <View style={ styles.body }>
            <Image source={require('../../../../assets/email.png')} style={ styles.images }/>
            <Text style={ styles.text }>Correo: </Text>
            <Text style={ styles.text }>{user?.correo}</Text>
          </View>
          <View style={styles.body }>
            <Image source={require('../../../../assets/telefono.png')} style={ styles.images }/>
            <Text style={ styles.text }>Telefono: </Text>
            {/* <Text>{user?.correo}</Text> */} 
          </View>
          <RoundedButton text='Cerrar Sesion' onPress={() => {
            removeSession()
              navigation.replace('HomeScreen')
          }}/>
        </View>
    </View>
  )
} 