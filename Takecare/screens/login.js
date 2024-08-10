import React from "react";
import { TextInput, View, Text } from "react-native";
import styles from "./style";


const LOGIN = ({Navigator}) => {
    return(
        <View>
            <Text style={styles.texto}>LOGIN</Text>
            <TextInput></TextInput>
            <Text style={styles.texto}>SENHA</Text>
            <TextInput></TextInput>
            <Text style={styles.texto}>CONFIRMAR SENHA</Text>
            <TextInput secureTextEntry={true} placeholder="INSIRA SUA SENHA"></TextInput>
        </View>
    )
}

export default LOGIN; 
