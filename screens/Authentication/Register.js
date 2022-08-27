import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { Fragment, useState, useRef } from 'react'
import {  Button, TouchableOpacity, StyleSheet, Text, View, ScrollView, TextInput } from "react-native";
import { auth } from '../../config/firebase-config';
import Error from '../../UI Components/Error';
import { getFirestore, setDoc, collection, doc } from '@firebase/firestore';


const Register = ({navigation}) => {

  const db = getFirestore(); 
  const UsersRef = collection(db, "Users");

const [user_data, setuser_data] = useState({ 
    first_name: "", 
    last_name: "", 
    email: "", 
    password: "", 
    conf_password: "", 
    adress: "", 
    phone: ""
})

    

    const [error, seterror] = useState({message: '', status: false}); 

    const handleRegister = async () => {
try{

const {first_name, last_name, email, password, conf_password, adress, phone} = user_data; 

    seterror(()=>{return {message: '', status: false}});
     
    if (!first_name.trim() || !last_name.trim() || !email.trim() || !password.trim() || !conf_password.trim() || !adress.trim() || !phone.trim() ) {
        throw Error("a input field is empty! you need to fill all of them!!");
        
      }
      
    if(password!==conf_password) throw Error("Password is not a match!"); // not solved 
    
    const user = await createUserWithEmailAndPassword(auth,email,password); 

    
    setDoc(doc(db,"Users",auth.currentUser.uid),{
        user: "user",
        first_name: first_name, 
        last_name: last_name,
        adress: adress, 
        phone: phone }); 
    
        navigation.navigate("Main"); 

}catch(err) {

    console.log(err); 

    seterror(()=>{return {message: error.message, status: true}});  

}



    }


    return (
        <Fragment>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} >

   <View style={styles.container} > 

           {error.status ? <Error message={error.message} />: null}
                <View style={styles['login-form']}>


                    <View style={styles['first-second']} >
                        <TextInput placeholder="enter you First name"  textContentType="username" onChangeText={(val)=> setuser_data((curr)=> { return { ...curr,first_name: val}} )} style={[styles['input-field'], styles['first-second']]} />
                        <TextInput placeholder="enter you Last name" textContentType="username" onChangeText={(val)=> setuser_data((curr)=> { return { ...curr,last_name: val}} )}  style={[styles['input-field'], styles['first-second']]} />

                    </View>
                    <TextInput placeholder="enter you email adress" textContentType="emailAddress" onChangeText={(val)=> setuser_data((curr)=> { return { ...curr,email: val}} )} style={styles['input-field']} />

                    <TextInput placeholder="enter you password" secureTextEntry={true} onChangeText={(val)=> setuser_data((curr)=> { return { ...curr,password: val}} )}  style={styles['input-field']} />
                    <TextInput placeholder="confirm you password" secureTextEntry={true} onChangeText={(val)=> setuser_data((curr)=> { return { ...curr,conf_password: val}} )}  style={styles['input-field']} />

                    <TextInput placeholder="enter you adress " textContentType="fullStreetAddress" onChangeText={(val)=> setuser_data((curr)=> { return { ...curr,adress: val}} )}  style={styles['input-field']} />
                    <TextInput placeholder="enter you phone number " textContentType="telephoneNumber" onChangeText={(val)=> setuser_data((curr)=> { return { ...curr,phone: val}} )}  style={styles['input-field']} />
                   <View style={{flex: 1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',}}>   
                   <TouchableOpacity style={styles.button}  onPress={() => handleRegister()}  ><Text style={{color: "white", fontWeight: "600", textAlign: "center"}}>Register</Text></TouchableOpacity>

</View>
                     
                
                </View>



                </View>
            </ScrollView>
        </Fragment>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: "rgb(28, 190, 142)",
        alignItems: "center",
        marginBottom: 0,
        top: 0
    },
    "login-form": {
        top: "auto",
        marginHorizontal: 10
    },
    "input-field": {
        backgroundColor: "#fff",
        color: "rgb(38, 50, 56)",
        padding: 10,
        marginVertical: 10,
        marginHorizontal: "2.5%",
        borderColor: "rgba(0, 0, 0, 0.02)",
        borderRadius: 10,

    },
    "first-second": {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
    },
    "inline": {
        display: "inline",
        textAlign: "center"
    },
    button: {
        marginVertical: "10%",
        width: 100,
        textAlign: "center",
        borderRadius: 20,
        color: "white",
        padding: 15,
        backgroundColor: "purple", 
        fontWeight: "800"
    }
});
export default Register