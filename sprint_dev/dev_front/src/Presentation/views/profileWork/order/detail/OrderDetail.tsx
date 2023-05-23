import React, { useEffect } from 'react'
import { Text, View, FlatList, Image, ToastAndroid, ScrollView } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { AdminOrderStackParamList } from '../../../../navigator/AdminOrderStackNavigator';
import { OrderDetailItem } from './Item';
import { DateFormatter } from '../../../../Utils/DateFormatter';
import { RoundedButton } from '../../../../components/RoundedButton';
import useViewModel from './ViewModel'
import styles from './Styles'
import { EmployeeOrderStackParamList } from '../../../../navigator/EmployeeOrderStackNavigator';


interface Props extends StackScreenProps<EmployeeOrderStackParamList, 'EmployeeOrderDetailScreen'> { };
export const EmployeeOrderDetailScreen = ({ navigation, route }: Props) => {
  const { order } = route.params
  const { total, responseMessage, prepareOrder, fineOrder, deliveredOrder } = useViewModel(order)

  useEffect(() => {
    if (responseMessage !== '') {
      ToastAndroid.show(responseMessage, ToastAndroid.LONG)
    }
  }, [responseMessage])

  return (
    <View style={styles.container}>
      <View style={styles.products}>
        <FlatList
          data={order.products}
          keyExtractor={(item) => item.id!}
          renderItem={({ item }) => <OrderDetailItem product={item} />}
        />
      </View>
      <View style={styles.info}>
        <ScrollView>

          <View style={styles.infoRow}>
            <View style={styles.infoText}>
              <Text style={styles.infoTitle}>Cliente:</Text>
              <Text style={styles.infoDescription}>{order.client?.nombre} </Text>
            </View>
            <Image
              style={styles.infoImage}
              source={require('../../../../../../assets/hombre.png')}
            />
          </View>
          <View style={styles.infoRow}>
            <View style={styles.infoText}>
              <Text style={styles.infoTitle}>Fecha del pedido:</Text>
              <Text style={styles.infoDescription}>{DateFormatter(order.timestamp!)} </Text>
            </View>
            <Image
              style={styles.infoImage}
              source={require('../../../../../../assets/reloj.png')}
            />
          </View>
          <View style={styles.totalInfo}>
            <Text style={styles.total}>TOTAL: ${total}</Text>
            <View style={styles.button}>
              {
                order.estado == '1' &&
                <RoundedButton text='DESPACHAR ORDEN' onPress={() => prepareOrder()} />
              }
              {
                order.estado == '2' &&
                <RoundedButton text='MARCAR COMO PEDIDO LISTO' onPress={() => fineOrder()} />
              }
              {
                order.estado == '3' &&
                <RoundedButton text='MARCAR COMO ENTREGADO' onPress={() => deliveredOrder()} />
              }
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}
