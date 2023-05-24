import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react'
import { FlatList, Text, View, useWindowDimensions } from 'react-native'
import { TabBar, TabView } from 'react-native-tab-view';
import { ClientOrderStackParamList } from '../../../../navigator/ClientOrderStackNavigator';
import useViewModel from './ViewModel'
import { OrderListItem } from './Item';

interface Props {
    status: string
}


const OrderListView = ({ status }: Props) => {
    const { ordersPayed, ordersPrepared, ordersFine, ordersDelivery, getOrders, user } = useViewModel()
    const navigation = useNavigation<StackNavigationProp<ClientOrderStackParamList, 'ClientOrderListScreen'>>();
    useEffect(() => {
        console.log(user.idCliente);
        getOrders(user.idCliente!, status)
    }, [])

    return (
        <View>
            <FlatList
                data={
                    status === '1'
                        ? ordersPayed
                        : status === '2'
                            ? ordersPrepared
                            : status === '3'
                                ? ordersFine
                                : status == '4'
                                    ? ordersDelivery
                                    : []
                }
                keyExtractor={(item) => item.id!}
                renderItem={({ item }) => <OrderListItem order={item} navigation={navigation} />}
            />
        </View>
    );
}

const renderScene = ({ route }: any) => {
    switch (route.key) {
        case 'first':
            return <OrderListView status='1' />;
        case 'second':
            return <OrderListView status='2' />
        case 'third':
            return <OrderListView status='3' />
        case 'fourth':
            return <OrderListView status='4' />
        default:
            return <OrderListView status='1' />;
    }
};

export const ClientOrderListScreen = () => {
    const layout = useWindowDimensions();

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'first', title: 'PAGADO' },
        { key: 'second', title: 'PREPARACION' },
        { key: 'third', title: 'LISTO' },
        { key: 'fourth', title: 'ENTREGADO' },
    ]);
    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            renderTabBar={props => (
                <TabBar
                    {...props}
                    indicatorStyle={{ backgroundColor: '#c2c2c2' }}
                    activeColor='black'
                    inactiveColor='gray'
                    /*scrollEnabled= {true} */
                    style={{
                        backgroundColor: 'white',
                        height: 90,
                        justifyContent: 'center',
                    }}
                />
            )}
        />
    )
}
