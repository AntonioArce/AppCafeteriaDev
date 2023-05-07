import React from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity, Touchable, ScrollView } from 'react-native';
import { User } from '../../../../../Domain/entities/User';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { EmployeeStackParamList } from '../../../../navigator/AdminEmployeeNavigator';

interface Props{
    trabajador: User,
    remove: (id: string) => void;
}

export const AdminEmployeeListItem = ({trabajador, remove}: Props) =>{
    const navigation = useNavigation<StackNavigationProp<EmployeeStackParamList>>()
    return(
        <TouchableOpacity>
            <ScrollView>
                <View style={styles.container}>
                    <Image style={styles.image} source={require('../../../../../../assets/worker.png')}/>
                    <View style= {styles.info}>
                        <Text style= {styles.title}>{trabajador.nombre} {trabajador.apellido_paterno} {trabajador.apellido_materno}</Text>
                        <Text style= {styles.description}>{trabajador.correo}</Text>
                        <Text style= {styles.description}>{trabajador.num_telefono}</Text>
                    </View>
                    <View style={styles.actionContainer}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('AdminEmployeeUpdateScreen',{user: trabajador})}
                        >
                            <Image style={  styles.actionimage} source={require('../../../../../../assets/editar.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => remove(trabajador.idUsuario!) }
                        >
                            <Image style={  styles.actionimage} source={require('../../../../../../assets/eliminar.png')}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.divider}></View>
            </ScrollView>
        </TouchableOpacity>
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
        backgroundColor: '#f2f2f5',
        marginHorizontal: 10,
        flex: 1
    }
})