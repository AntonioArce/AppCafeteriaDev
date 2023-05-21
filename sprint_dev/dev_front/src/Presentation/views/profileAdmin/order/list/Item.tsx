import { StackNavigationProp } from "@react-navigation/stack";
import { Order } from "../../../../../Domain/entities/Order";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { DateFormatter } from "../../../../Utils/DateFormatter";
import { AdminOrderStackParamList } from "../../../../navigator/AdminOrderStackNavigator";

interface Props {
    order: Order,
    navigation: StackNavigationProp<AdminOrderStackParamList, 'AdminOrderListScreen', undefined>
}

export const OrderListItem = ({order, navigation}: Props) =>{
    return(
        <TouchableOpacity 
            onPress={() => navigation.navigate('AdminOrderDetailScreen', {order: order})}
        >
            <View style={styles.container}>
                <Text style={styles.order}>Orden #{order.id}</Text>
                <Text style={ {...styles.info, marginTop: 10} }>Fecha del pedido: { DateFormatter(order.timestamp!)}</Text>
                <Text style={ styles.info }>Cliente: {order.client?.nombre}</Text>
                <View style= {styles.divider}></View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 30
    },
    order: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 18,
        marginTop: 10
    },
    divider: {
        height: 1,
        width: '100%',
        backgroundColor: '#e2e2e2',
        marginTop: 10
    },
    info: {
        fontSize: 13
    }
});