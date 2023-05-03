import { Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AdminCategoryList } from '../views/profileAdmin/category/list/CategoryList';
import { AdminScreen } from '../views/profileAdmin/Admin';
import { AdminEmployeeList } from '../views/profileAdmin/employee/list/EmployeeList';
import { AdminProductList } from '../views/profileAdmin/products/list/ProductList';

const Tab = createBottomTabNavigator();

export const AdminTabsNavigator = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name="AdminCategoryList" component={ AdminCategoryList }
            options ={ ({route, navigation}) =>( 
                {
                    title: 'Categorias',
                    tabBarLabel: 'Categorias',
                    tabBarIcon: ({ color }) => (
                        <Image source={require('../../../assets/category.png')} style={{width: 25, height: 25}}/>
                    ),
                    headerRight: () =>(
                        <TouchableOpacity onPress={() => navigation.navigate('AdminCategoryCreateScreen')}>
                            <Image source={require('../../../assets/add.png')} style={{width: 25, height: 25, marginRight: 15}}/>
                        </TouchableOpacity>
                    )
                }
            )}
        />
        <Tab.Screen name="AdminEmployeeList" component={ AdminEmployeeList } 
            options ={{
                title: 'Empleados',
                tabBarLabel: 'Empleados',
                tabBarIcon: ({ color }) => (
                    <Image source={require('../../../assets/employee.png')} style={{width: 25, height: 25}}/>
                )
            }}
        />
        <Tab.Screen name="AdminProductList" component={ AdminProductList } 
            options ={{
                title: 'Productos',
                tabBarLabel: 'Productos',
                tabBarIcon: ({ color }) => (
                    <Image source={require('../../../assets/eat.png')} style={{width: 25, height: 25}}/>
                )
            }}
        />
        <Tab.Screen name="AdminScreen" component={ AdminScreen }
            options ={{
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