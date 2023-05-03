import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { HomeScreen } from './src/Presentation/views/Home/Home';
import { RegisterScreen } from './src/Presentation/views/Register/Register';
import { RecoveryScreen } from './src/Presentation/views/Recovery/Recovery';
import { ProfileInfoScreen } from './src/Presentation/views/profile/info/ProfileInfo';
import { WorkScreen } from './src/Presentation/views/profileWork/Work';
import { AdminTabsNavigator } from './src/Presentation/navigator/AdminTabs.Navigator';
import { AdminCategoryCreateScreen } from './src/Presentation/views/profileAdmin/category/create/CategoryCreate';
import { AdminCategoryUpdateScreen } from './src/Presentation/views/profileAdmin/category/update/CategoryUpdate';
import { Category } from './src/Domain/entities/Category';

export type RootStackParamList = {
  HomeScreen: undefined,
  RegisterScreen: undefined,
  RecoveryScreen: undefined,
  AdminTabsNavigator: undefined,
  AdminCategoryCreateScreen: undefined,
  AdminCategoryUpdateScreen: {category: Category}
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="RecoveryScreen" component={RecoveryScreen} />
        <Stack.Screen name="AdminTabsNavigator" component={AdminTabsNavigator}/>
        <Stack.Screen name="AdminCategoryCreateScreen" component={AdminCategoryCreateScreen} options={{headerShown: true, title: 'Nueva Categoria'}}/>
        <Stack.Screen name="AdminCategoryUpdateScreen" component={AdminCategoryUpdateScreen} options={{headerShown: true, title: 'Editar Categoria'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App
