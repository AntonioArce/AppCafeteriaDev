import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { HomeScreen } from './src/Presentation/views/Home/Home';
import { RegisterScreen } from './src/Presentation/views/Register/Register';
import { RecoveryScreen } from './src/Presentation/views/Recovery/Recovery';


export type RootStackParamList = {
  HomeScreen: undefined,
  RegisterScreen: undefined,
  RecoveryScreen: undefined,
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="RecoveryScreen" component={RecoveryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App
