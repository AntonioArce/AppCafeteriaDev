import { Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AdminCategoryList } from '../views/profileAdmin/category/list/CategoryList';
import { AdminScreen } from '../views/profileAdmin/Admin';
import { AdminEmployeeList } from '../views/profileAdmin/employee/list/EmployeeList';
import { AdminProductList } from '../views/profileAdmin/products/list/ProductList';
import { AdminCategoryNavigator } from './AdminCategoryNavigator';

const Tab = createBottomTabNavigator();

export const AdminTabsNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="AdminCategoryNavigator" component={ AdminCategoryNavigator }
            options={{tabBarIcon: () => (
                <Image
                  source={ require('../../../assets/category.png') }
                  style={{ width: 25, height: 25 }}
                  />
              ),
            }}
        />
        <Tab.Screen name="AdminEmployeeList" component={ AdminEmployeeList } 
            options ={{
                headerShown: true,
                title: 'Empleados',
                tabBarLabel: 'Empleados',
                tabBarIcon: ({ color }) => (
                    <Image source={require('../../../assets/employee.png')} style={{width: 25, height: 25}}/>
                )
            }}
        />
        <Tab.Screen name="AdminProductList" component={ AdminProductList } 
            options ={{
                headerShown: true,
                title: 'Productos',
                tabBarLabel: 'Productos',
                tabBarIcon: ({ color }) => (
                    <Image source={require('../../../assets/eat.png')} style={{width: 25, height: 25}}/>
                )
            }}
        />
        <Tab.Screen name="AdminScreen" component={ AdminScreen }
            options ={{
                headerShown: true,
                title: 'Perfil de usuario',
                tabBarLabel: 'Perfil de usuario',
                tabBarIcon: ({ color }) => (
                    <Image source={require('../../../assets/profileadmin.png')} style={{width: 25, height: 25}}/>
                )
            }}
        />
    </Tab.Navigator>
  );
}