import React, { useState } from 'react'
import { View, Dimensions, Image, Text, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { ClientStackParamList } from '../../../../navigator/ClientStackNavigator';
import { RoundedButton } from '../../../../components/RoundedButton';
import useViewModel from './ViewModel'
import styles from './Styles'


interface Props extends StackScreenProps<ClientStackParamList, 'ClientProductDetailScreen'>{};

export const ClientProductDetailScreen = ({navigation, route}: Props) => {
    const { product } = route.params;
    const { quantity, price, addItem, removeItem, addToBag, shoppingBag } = useViewModel(product);
    return (
        <View style={styles.container}>
            <Image 
                source={{ uri: product.imagen }} 
                style={styles.productImage}
            />
            <View style = {styles.productDetail}>
                <View style={styles.productInfo}>
                    <Text style={ styles.name }>{ product.nombre }</Text>
                    <View style={styles.divider}></View>

                    <Text style={ styles.descriptionTitle}>Descripcion</Text>
                    <Text style={ styles.descriptionContent }>{ product.descripcion }</Text>
                    <View style={styles.divider}></View>

                    <Text style={ styles.descriptionTitle}>Precio</Text>
                    <Text style={ styles.descriptionContent }>${ product.precio }</Text>
                    <View style={styles.divider}></View>

                    <Text style={ styles.descriptionTitle}>Tu orden</Text>
                    <Text style={ styles.descriptionContent }>Cantidad: {quantity}</Text>
                    <Text style={ styles.descriptionContent }>Precio total: { price }</Text>
                    <View style={styles.divider}></View>
                </View>
                <View style={styles.productActions}>
                    <TouchableOpacity 
                        onPress={() => removeItem()}
                        style={styles.actionLess}
                    >
                        <Text style={styles.actionText}>-</Text>
                    </TouchableOpacity>
                    
                    <View style={ styles.quantity }>
                        <Text style={styles.actionText}>{ quantity }</Text>
                    </View>
                    
                    <TouchableOpacity 
                        onPress={() => addItem()}
                        style={styles.actionAdd}
                    >
                        <Text style={styles.actionText}>+</Text>
                    </TouchableOpacity>
                    
                    <View style={styles.buttonAdd}>
                        <RoundedButton text='AGREGAR A LA BOLSA' onPress={() => addToBag()} />
                    </View>

                </View>
            </View>

            
            <TouchableOpacity
                onPress={() => navigation.pop()}
                style={ styles.back }
            >
                <Image
                    style={styles.backImage}        
                    source={require('../../../../../../assets/back.png')}
                />
            </TouchableOpacity>
        </View>
    )
}
