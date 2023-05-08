import React from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Product } from '../../../../../Domain/entities/Product';
import { Category } from '../../../../../Domain/entities/Category';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { ProductStackParamList } from '../../../../navigator/AdminProductNavigator';


interface Props{ 
    product: Product;
    category: Category;
    /* remove: (id: string) => void; */
}

export const AdminProductListItem = ({product, category}: Props) =>{
    const navigation = useNavigation<StackNavigationProp<ProductStackParamList>>
    return (
        <ScrollView>
            <View style={styles.container}>
                <Image style={styles.image} source={{uri: product.imagen }}/>
            </View>
            <View style={styles.info}>
                <Text style= {styles.title}> { product.idProductos }</Text>
                <Text style={styles.title}>{ product.nombre }</Text>
                <Text style={styles.description}>{ product.descripcion }</Text>
                <Text style={styles.price}>${ product.precio }</Text>
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create ({
    container: {
        width: '100%',
        flexDirection: 'row',
        height: 80,
        marginHorizontal: 20,
        marginTop: 20
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 15
    },
    info:{
        marginLeft: 10,
        flex: 1
    },
    title: {
        color: 'black',
        fontSize: 15
    },
    description: {
        color: 'gray',
        fontSize: 12,
        marginTop: 3
    },
    price: {
        color: 'green',
        fontSize: 12,
        fontWeight: 'bold'
    },
    actionContainer:{
        marginRight: 50,
        
    },
    actionimage:{
        width: 30,
        height: 30,
        marginVertical: 2
    },
    divider:{ 
        height: 1,
        backgroundColor: '#f2f2f2',
        marginHorizontal: 20,
        flex: 1
    }
})