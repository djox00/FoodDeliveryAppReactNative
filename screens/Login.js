import React from 'react'
import { Alert, Button, Platform, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native";

const Login = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles['login-form']}>
                <TextInput placeholder="enter you username" style={styles['input-field']} />
                <TextInput placeholder="enter you password" secureTextEntry={true} style={styles['input-field']} />
                <Button style={styles.button} title="Sign in" />
                <Text style={{ marginVertical: 30, textAlign: "center", color: "#fff", fontWeight: "500" }} >Dont have an accout?</Text>
                <Button style={styles.button} title="Register" onPress={()=> navigation.navigate("Register")}/>
                

            </View>


        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgb(28, 190, 142)",
        alignItems: "center",
        height: "100%",
        width: "100%"
    },
    "login-form": {
        top: "25%"
    },
    "input-field": {
        backgroundColor: "#fff",
        color: "rgb(38, 50, 56)",
        padding: 10,
        marginVertical: 7,
        borderColor: "rgba(0, 0, 0, 0.02)",
        borderRadius: 10,
    },
    button: {
        borderRadius: "50px",
        color: "white",
        backgroundColor: "yellow"
    }
});
export default Login