import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import { HomeScreen } from '../../../src/Presentation/views/Home/Home';
import { RegisterScreen } from '../../../src/Presentation/views/Register/Register';
import { RecoveryScreen } from '../../../src/Presentation/views/Recovery/Recovery';
import { ProfileInfoScreen } from '../../../src/Presentation/views/profile/info/ProfileInfo';
import { WorkScreen } from '../../../src/Presentation/views/profileWork/Work';
import { AdminTabsNavigator } from '../../../src/Presentation/navigator/AdminTabs.Navigator';



export type RootStackParamList = {
    HomeScreen: undefined,
    RegisterScreen: undefined,
    RecoveryScreen: undefined,
    AdminTabsNavigator: undefined,
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="RecoveryScreen" component={RecoveryScreen} />
        <Stack.Screen name="AdminTabsNavigator" component={AdminTabsNavigator}/>
      </Stack.Navigator>
  )
}
