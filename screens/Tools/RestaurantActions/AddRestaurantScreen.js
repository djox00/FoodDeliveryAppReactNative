import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, ActivityIndicator} from 'react-native'
import { collection, query, where, doc, getFirestore, getDocs, addDoc, updateDoc } from "firebase/firestore";
import Error from '../../../UI Components/Error';
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import ImageUploader from './ImageUploader';



const AddRestaurantScreen = ({navigation}) => {

  
   
    const db = getFirestore();    
    const [error, seterror] = useState({ message: '', status: false });
    const [restaurant_added, setrestaurant_added] = useState({}); 
    const [loading, setloading] = useState(false); 
    const [email, setemail] = useState('');
    const [restaurant_data, setrestaurant_data] = useState({
        restaurant_name: "",
        restaurant_adress: "",
        restaurant_description: "",
        restaurant_owner: ""
    })

    
    const [Imageuri, setImageuri] = useState(null);


    const uploadImage = async (uri, imageName, DirectoryName) => {
        const response = await fetch(uri);
        const blob = await response.blob();
        const storage = getStorage();
        const storageRef = ref(storage, DirectoryName + "/" + imageName);
        const image_response = await uploadBytes(storageRef, blob);
        
    }

    const handleSubmit = async () => {


        try {
            setloading(true); 
           let uid = null; 
            const UsersRef = collection(db, "Users");
            const q = query(UsersRef, where("email", "==", email));
            const user = await getDocs(q);
  
            if (user.empty){ seterror({ message: "no such Email found!", status: true });

             } else {

                user.forEach((doc) => {
                     uid = doc.id; 
                })

            const RestaurantRef = collection(db, "Restaurants");

            const restaurant_response = await addDoc(RestaurantRef, {
                restaurant_name: restaurant_data.restaurant_name,
                restaurant_adress: restaurant_data.restaurant_adress,
                restaurant_description: restaurant_data.restaurant_description,    
                restaurant_owner: uid
            });
         
            const user_to_restaurant_owner = await updateDoc(doc(db, "Users", uid), { user: "restaurant_owner" });

            const image_upload_response = await uploadImage(Imageuri, restaurant_data.restaurant_name, restaurant_response.id);
            setloading(false); 
            setrestaurant_added({restaurant_id: restaurant_response.id }); 
    
            
 
}
        } catch (error) {


        }

    }




    return (
        <View style={styles.container}>

            {error.status == true ? <Error message={error.message} /> : null}
            { !loading ? 
            <ScrollView contentContainerStyle={styles.form}>
                <ImageUploader setImageuri={setImageuri} />
                <TextInput style={[styles['input-field'], { marginBottom: 10 }]} placeholder="enter Restaurant name..." onChangeText={(val) => setrestaurant_data((curr) => { return { ...curr, restaurant_name: val } })} />
                <TextInput style={[styles['input-field'], { marginBottom: 10 }]} placeholder="enter Owners email adress..." onChangeText={(val) => setemail(val)} />
                <TextInput style={[styles['input-field'], { marginBottom: 10 }]} placeholder="enter Restaurant adress..." onChangeText={(val) => setrestaurant_data((curr) => { return { ...curr, restaurant_adress: val } })} />
                <TextInput style={[styles['input-field'], { marginBottom: 10 }]} placeholder="enter Restaurant description..." onChangeText={(val) => setrestaurant_data((curr) => { return { ...curr, restaurant_description: val } })} />

                <TouchableOpacity  onPress={()=>handleSubmit()} style={styles.button} ><Text style={{ color: "white", textAlign: "center", fontWeight: "600" }}>Submit</Text></TouchableOpacity>

            </ScrollView>:  <ActivityIndicator size="large" color="#694fad" /> } 
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