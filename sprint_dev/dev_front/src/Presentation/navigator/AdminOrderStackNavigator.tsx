import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Order } from '../../Domain/entities/Order';
import { AdminOrderListScreen } from '../views/profileAdmin/order/list/OrderList'; 
import { AdmminOrderDetailScreen } from '../views/profileAdmin/order/detail/OrderDetail';
import { OrderProvider } from '../context/OrderContext';

export type AdminOrderStackParamList = {
    AdminOrderListScreen: {isUpdate: boolean} | undefined,
    AdminOrderDetailScreen: { order: Order },
}

const Stack = createNativeStackNavigator<AdminOrderStackParamList>();
export const AdminOrderStackNavigator = () =>{
    return (
        <OrderStatus>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>    
                <Stack.Screen
                    name="AdminOrderListScreen"
                    component={AdminOrderListScreen}
                    />  
                <Stack.Screen
                    name="AdminOrderDetailScreen"
                    component={AdmminOrderDetailScreen}
                    options={{
                        headerShown: true,
                        title: 'Detalle de la orden'
                    }}
                    />
            </Stack.Navigator>
        </OrderStatus>
    ) 
}

const OrderStatus = ({children}: any) =>{
    return(
        <OrderProvider>
            {children}
        </OrderProvider>
    )
}