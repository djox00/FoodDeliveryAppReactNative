import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
import { collection, query, where, doc, getFirestore, getDocs, getDoc, setDoc, addDoc, updateDoc } from "firebase/firestore";
import Error from '../../../UI Components/Error';
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import ImageUploader from './ImageUploader';




const AddMenuScreen = ({ navigation, route }) => {

    const db = getFirestore();   
    let restaurant_id = route.params.restaurant_data.id; 
    const [loading, setloading] = useState(false); 
    const [menu_data, setmenu_data] = useState({
        food_name: "",
        food_description: "",
    })

const [food_price, setfood_price] = useState({ 
Mala: "", 
Srednja: "", 
Velika: ""
})


const [Imageuri, setImageuri] = useState(null);

const uploadImage = async (uri, imageName, DirectoryName) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    const storage = getStorage();
    const storageRef = ref(storage, DirectoryName + "/" + imageName);
    const image_response = await uploadBytes(storageRef, blob);
    
}


let foodRandom = () => {
    const dateString = Date.now().toString(36);
    const randomness = Math.random().toString(36).substr(2);
    return dateString + randomness;
}

const handleSubmit = async () => {
   
    setloading(true); 
    try {
    const RestaurantRef = doc(db,"Restaurants",restaurant_id);
    const rest = await getDoc(RestaurantRef); 
    const restaurant_data = rest.data(); 
     let menu = {}; 
     let food_id = 0; 
     if(restaurant_data.restaurant_menu!= null && restaurant_data.restaurant_menu!= ""){
      menu = restaurant_data.restaurant_menu; 
     const food_menu_array = Object.entries(menu).map((e) => ( { [e[0]]: e[1] } ));
     food_id = foodRandom(); 
     }
     
const menu_reshape = Object.assign(menu, {   [food_id] : {food_name: menu_data.food_name, 
    food_description: menu_data.food_description,
    food_price: {Mala: food_price.Mala, 
     Srednja: food_price.Srednja, 
     Velika: food_price.Velika
    }} }); 
  
      const response = await updateDoc(RestaurantRef,{ restaurant_menu: menu_reshape })
      uploadImage(Imageuri,food_id,restaurant_id); 
      setloading(false); 
    } catch (error) {


    }

}


    return (
        <View style={styles.container}>
            { !loading ? 
            <ScrollView contentContainerStyle={styles.form}>
                <ImageUploader setImageuri={setImageuri} />
                <TextInput style={[styles['input-field'], { marginBottom: 10 }]} placeholder="enter food name..." onChangeText={(val) => setmenu_data((curr) => { return { ...curr, food_name: val} })} />
                <TextInput style={[styles['input-field'], { marginBottom: 10 }]} placeholder="enter food description..." onChangeText={(val) => setmenu_data((curr) => { return { ...curr, food_description: val } })} />
                <TextInput style={[styles['input-field'], { marginBottom: 10 }]} placeholder="enter Big portion price..." onChangeText={    (val) => setfood_price( (curr) => {return {...curr, Velika: val}})} />
                <TextInput style={[styles['input-field'], { marginBottom: 10 }]} placeholder="enter Middle portion price ..." onChangeText={(val) => setfood_price( (curr) => {return {...curr, Srednja: val}})} />
                <TextInput style={[styles['input-field'], { marginBottom: 10 }]} placeholder="enter Small portion price ..." onChangeText={(val) => setfood_price( (curr) => {return {...curr, Mala: val}})} />
             
                <TouchableOpacity  onPress={handleSubmit}  style={styles.button} ><Text style={{ color: "white", textAlign: "center", fontWeight: "600" }}>Submit</Text></TouchableOpacity>

            </ScrollView> : <ActivityIndicator size="large" color="#694fad" /> } 
        </View>
    )
}

export default AddMenuScreen

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