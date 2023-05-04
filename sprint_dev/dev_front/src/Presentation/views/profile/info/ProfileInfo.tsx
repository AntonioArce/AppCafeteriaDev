import React from 'react'
import { View, Text, Button} from 'react-native'
import useViewModel from './ViewModel'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from '../../../navigator/MainStackNavigator'

interface Props extends StackScreenProps<RootStackParamList>{}

export const ProfileInfoScreen = ({navigation, route}: Props) => {
  const { removeSession, user } = useViewModel()
  return (
    <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Perfil de usuario</Text>
        <Text>Bienvenido {user?.nombre}</Text>
        <Button
          onPress={() => {
            removeSession()
            navigation.navigate('HomeScreen')
          }}
          title='Cerrar Sesion'/>
    </View>
  )
} 