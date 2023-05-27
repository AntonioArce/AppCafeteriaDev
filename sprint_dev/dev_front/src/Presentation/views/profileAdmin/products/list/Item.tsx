import React from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Product } from '../../../../../Domain/entities/Product';
import { Category } from '../../../../../Domain/entities/Category';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { ProductStackParamList } from '../../../../navigator/AdminProductNavigator';


interface Props {
    product: Product;
    category: Category;
    remove: (product: Product) => void;
}

export const AdminProductListItem = ({ product, category, remove }: Props) => {
    const navigation = useNavigation<StackNavigationProp<ProductStackParamList>>()
    return (
        <ScrollView>
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri: product.imagen }} />
                <View style={styles.info}>
                    <Text style={styles.title}>{product.nombre}</Text>
                    <Text style={styles.description}>{product.descripcion}</Text>
                    <Text style={styles.price}>${product.precio}</Text>
                    <Text style={styles.price}> Stock:{product.stock}</Text>
                </View>
                <View style={styles.actionContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('AdminProductUpdateScreen', { product: product, category: category })}>
                        <Image style={styles.actionImage} source={require('../../../../../../assets/editar.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => remove(product)}>
                        <Image style={styles.actionImage} source={require('../../../../../../assets/eliminar.png')} />
                    </TouchableOpacity>
                </View>
            </View>

        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        height: 100,
        marginHorizontal: 20,
        marginTop: 10,
        paddingTop: 10
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 15
    },
    info: {
        marginLeft: 15,
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
        fontSize: 15,
        fontWeight: 'bold'
    },
    actionContainer: {
        marginRight: 40
    },
    actionImage: {
        width: 35,
        height: 35,
        marginVertical: 2
    },
    divider: {
        height: 1,
        backgroundColor: '#f2f2f2',
        marginHorizontal: 30,
        flex: 1
    }
});