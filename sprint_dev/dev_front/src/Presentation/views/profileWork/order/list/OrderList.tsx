import { useEffect, useState, useCallback } from 'react'
import { Text, View, FlatList } from "react-native";
import { useWindowDimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { OrderListItem } from './Item';
import { StackNavigationProp } from '@react-navigation/stack';
import { AdminOrderStackParamList } from '../../../../navigator/AdminOrderStackNavigator';
import { EmployeeOrderStackParamList } from '../../../../navigator/EmployeeOrderStackNavigator';
import { useNavigation } from '@react-navigation/native';
import useViewModel from './ViewModel'



interface Props {
    status: string
}

const OrderListView = ({ status }: Props) => {
    const { ordersPayed, ordersPrepared, ordersFine, ordersDelivery, getOrders } = useViewModel()
    const navigation = useNavigation<StackNavigationProp<EmployeeOrderStackParamList, 'EmployeeOrderListScreen'>>();
    const [refreshing, setRefreshing] = useState(false);
    useEffect(() => {
        console.log(status);
        getOrders(status)
    }, [])
    const onRefresh = useCallback(() => {
        setRefreshing(true);
        getOrders(status)
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

    /* useEffect(() => {
        const unsubscribe = navigation.addListener('beforeRemove', () => {
            console.log('EVENTO: beforeRemove');
            socket.disconnect()
        })
        return unsubscribe
    }, [navigation]) */


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
                refreshing={refreshing}
                onRefresh={onRefresh}
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

export const EmployeeOrderListScreen = () => {
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
    );
}