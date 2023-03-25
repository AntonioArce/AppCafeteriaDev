import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View, Pressable, ImageBackground, TouchableHighlight, Button } from "react-native";
import backgroundImage from '../../assets/background.jpg'
/* import { getClientes } from "../services/auth.js"; */
import axios from "axios";

export default function Login(){
    return (
        <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
            <View style = {styles.container}>
            <StatusBar barStyle="light-content" />
            <Text style={styles.titulo}>Bienvenido(a)</Text>
            <Text style={styles.subTitle}>Inicia sesion con tu cuenta</Text>
            <TextInput style={styles.textInput} placeholder="ejemplo@gmail.com"></TextInput>
            <TextInput style={styles.textInput} placeholder="Contraseña" secureTextEntry={true}></TextInput>
            <Button title = "Entrar" />
        </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
/*      backgroundColor: '#F5FCFC', */
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
        backgroundColor: '#89a5ff',
      },
    backgroundImage: {
        flex: 1,
        resizeMode: 'contain', // o 'contain', según tu preferencia
    },
});