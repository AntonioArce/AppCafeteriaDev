import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Image } from 'react-native'
import { ProfileInfoScreen } from '../views/profile/info/ProfileInfo'
import { ClientStackNavigator } from './ClientStackNavigator'

const Tab = createBottomTabNavigator()

export const ClientTabsNavigator = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name="ClientStackNavigator" component={ClientStackNavigator}
            options={{
              title: 'Categorias',
              tabBarLabel: 'Categorias',
              tabBarIcon: ({ color}) => ( 
                <Image
                  source={require('../../../assets/category.png')}
                  style={{ width: 30, height: 30 }}
                />
              )
            }}
        />
        <Tab.Screen name="ProfileInfoScreen" component={ProfileInfoScreen} 
            options={{
                /* headerShown: true,*/
                title: 'Perfil de usuario',
                tabBarLabel: 'Perfil',
                tabBarIcon: ({ color }) => (
                    <Image source={require('../../../assets/programador.png')}
                      style={{ width: 30, height: 30 }}
                    />
                )
            }}
        />
    </Tab.Navigator>
  )
}
