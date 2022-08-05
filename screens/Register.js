import React, { Fragment } from 'react'
import { Alert, Button, Platform, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native";

const Register = () => {
    return (
        <Fragment>
            <View style={styles.container}>
                <TextInput placeholder="enter you username" style={styles['input-field']} />
                <TextInput placeholder="enter you password" secureTextEntry={true} style={styles['input-field']} />


            </View>
        </Fragment>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        height: "100%",
        width: "100%"
    },
    "login-form": {
        top: "25%"
    },
    "input-field": {
        backgroundColor: "rgb(28, 190, 142)",
        color: "rgb(38, 50, 56)",
        padding: 10,
        marginVertical: 7,
        borderColor: "rgba(0, 0, 0, 0.02)",
        borderRadius: 10,
    },
    button: {
        borderRadius: "50px",
        color: "white"
    }
});
export default Register