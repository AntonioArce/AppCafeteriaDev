import React, { useContext, useEffect } from 'react'
import { View, Text, FlatList, ToastAndroid } from 'react-native'
import useViewModel from './ViewModel';
import { ShoppingBagItem } from './Item';
import { RoundedButton } from '../../../components/RoundedButton';
import styles from './Styles';
import { StackScreenProps } from '@react-navigation/stack';
import { ClientStackParamList } from '../../../navigator/ClientStackNavigator';
import { UserContext } from '../../../context/UserContext';

interface Props extends StackScreenProps<ClientStackParamList, 'ClientShoppingBagScreen'>{};

export const ClientShoppingBagScreen = ({navigation, route}: Props) => {

  const { shoppingBag, total, responseMessage, addItem, subtractItem, deleteItem, createOrder } = useViewModel();

  useEffect(() => {
    if(responseMessage !== ''){
      ToastAndroid.show(responseMessage, ToastAndroid.LONG)
    }
  }, [responseMessage])
  
  return (
    <View style={styles.container}>
        <FlatList 
          data={shoppingBag}
          keyExtractor={ (item) => item.idProductos!}
          renderItem={ ({item}) => 
            <ShoppingBagItem  
              product={item}  
              addItem={ addItem }
              subtractItem={ subtractItem }
              deleteItem={ deleteItem}
            />
          }
        />

        <View style={styles.totalToPay}>
          <View style={styles.totalInfo}>
            <Text style={styles.totalText}>Total</Text>
            <Text>${ total }</Text>
          </View>

          <View style={styles.buttonAdd}>
            <RoundedButton text='CONTINUAR CON EL PAGO' onPress={() =>{
                if(shoppingBag.length === 0){
                  ToastAndroid.show('No tiene productos en el carrito', ToastAndroid.LONG)
                }
                else{
                  createOrder()
                }
            }} />
          </View>
        </View>
    </View>
  )
}