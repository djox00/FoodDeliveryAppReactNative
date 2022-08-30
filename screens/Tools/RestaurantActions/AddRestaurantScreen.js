import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import { collection, query, where, updateDoc, doc, getFirestore, getDocs } from "firebase/firestore";
import Error from '../../../UI Components/Error';

import { getStorage } from 'firebase/storage'; 
import ImageUploader from './ImageUploader';

const AddRestaurantScreen = () => {


    const storage = getStorage(); 

    const [error, seterror] = useState({ message: '', status: false });

    const db = getFirestore();
    const UsersRef = collection(db, "Users");

    const [email, setemail] = useState('');
    const [uid, setuid] = useState('')



    const handleSubmit = async () => {

        try {

            const q = query(UsersRef, where("email", "==", email));
            const user = await getDocs(q);

            if (user.empty) seterror({ message: "no such Email found!", status: true });

            user.forEach((doc) => {
                setuid(doc.id);
            });

        } catch (error) {


        }

        updateAdmin();
    }


    return (
        <View style={styles.container}>
            {error.status == true ? <Error message={error.message} /> : null}
            <ScrollView contentContainerStyle={styles.form}>
                <ImageUploader />
                <TextInput style={[styles['input-field'], { marginBottom: 10 }]} placeholder="enter Restaurant name..." onChangeText={(val) => setemail(val)} />
                <TextInput style={[styles['input-field'], { marginBottom: 10 }]} placeholder="enter Owners email adress..." onChangeText={(val) => setemail(val)} />
                <TextInput style={[styles['input-field'], { marginBottom: 10 }]} placeholder="enter Restaurant adress..." onChangeText={(val) => setemail(val)} />
                <TextInput style={[styles['input-field'], { marginBottom: 10 }]} placeholder="enter Restaurant description..." onChangeText={(val) => setemail(val)} />
                
                <TouchableOpacity onPress={handleSubmit} style={styles.button} ><Text style={{ color: "white", textAlign: "center", fontWeight: "600" }}>Submit</Text></TouchableOpacity>

            </ScrollView>
        </View>
    )
}

export default AddRestaurantScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "rgb(255, 211, 99)",
        height: "100%",
        width: "100%"
    },
    form: {
        alignItems: "center",
        flex: 1,
        marginTop: 20
    },
    'input-field': {
        backgroundColor: "#fff",
        color: "rgb(38, 50, 56)",
        padding: 10,
        marginVertical: 7,
        borderColor: "rgba(0, 0, 0, 0.02)",
        borderRadius: 10,
        width: 250
    },
    button: {
        marginVertical: "10%",
        width: 130,
        textAlign: "center",
        borderRadius: 20,
        padding: 15,
        backgroundColor: "#694fad",

    }
}); 