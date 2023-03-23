import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View, Pressable } from "react-native";

export default function Main(){
    return (
        <View style = {styles.container}>
            <StatusBar barStyle="light-content" />
            <Text style={styles.titulo}>Bienvenido(a)</Text>
            <Text style={styles.subTitle}>Inicia sesion con tu cuenta</Text>
            <TextInput style={styles.textInput} placeholder="ejemplo@gmail.com"></TextInput>
            <TextInput style={styles.textInput} placeholder="password"></TextInput>
            <Pressable style = { styles.button }>
                <Text>Entrar</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFC',
    },
    titulo:{
        fontSize: 60,
        fontWeight: 'bold',
    },
    subTitle: {
        fontSize: 20,
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        height: 60,
        width: '80%',
        borderRadius: 25,
        marginTop: 20,
        backgroundColor:  '#fff'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        margin: 25,
        backgroundColor: '#e7c55c',
      },
});