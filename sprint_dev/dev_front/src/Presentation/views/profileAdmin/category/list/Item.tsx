import React from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { Category } from '../../../../../Domain/entities/Category';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../../../App';

interface Props{ 
    category: Category;
    remove: (id: string) => void;
}

export const AdminCategoryListItem = ({category, remove}: Props) => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()
  return (
    <TouchableOpacity>
        <View style= {styles.container}>
            <Image style={styles.image} source={require('../../../../../../assets/comida.jpg')}/>
            <View style= {styles.info}>
            <Text style= {styles.title}>{category.nombre_tipo}</Text>
            <Text style= {styles.description}>{category.descripcion}</Text>
            </View>
            <View style={styles.actionContainer}>
                <TouchableOpacity
                onPress={() => navigation.navigate('AdminCategoryUpdateScreen',{category: category})}
                >
                    <Image style={  styles.actionimage} source={require('../../../../../../assets/editar.png')}/>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => remove(category.idTipo_Producto!)}
                >
                    <Image style={  styles.actionimage} source={require('../../../../../../assets/eliminar.png')}/>
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.divider}></View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create ({
    container: {
        width: '100%',
        flexDirection: 'row',
        height: 70,
        marginHorizontal: 20,
        marginTop: 10
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
    actionContainer:{
        marginRight: 50,
        
    },
    actionimage:{
        width: 25,
        height: 25,
        marginVertical: 2
    },
    divider:{ 
        height: 1,
        backgroundColor: '#f2f2f2',
        marginHorizontal: 20,
        flex: 1
    }
})