import React, { createRef, useEffect,  useState } from 'react'
import { Alert, Button, Platform, StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput } from "react-native";
import { auth } from '../../config/firebase-config';
import { signInWithEmailAndPassword} from 'firebase/auth';
import Error from '../../UI Components/Error';


const Login = ({navigation}) => {

 const [email, setemail] = useState(''); 
 const [password, setpassword] = useState(''); 
   

    const [error, seterror] = useState({message: '', status: false}); 

    const handleLogin = async (e, p) => {
        
        try {
         
          const user = await signInWithEmailAndPassword(auth, e, p);
          
         seterror(()=>{return {message: '', status: false}}); 
         // setAdmin(); 
         navigation.navigate("Main"); 
    
        } catch (error) {
         
          seterror(()=>{return {message: error.message, status: true}}); 
    
        }
      }
    
      

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>   
        <View style={styles.container}>
        { error.status ? <Error message={error.message} /> : null}
            <View style={styles['login-form']}>
                
                <TextInput placeholder="enter you email" style={[styles['input-field'],{marginBottom: 20} ]} onChangeText={(val)=> setemail(val)} />
                <TextInput placeholder="enter you password" onChangeText={(val)=> setpassword(val)} secureTextEntry={true} style={[styles['input-field'],{marginBottom: 50} ]}  />
                <View style={styles['align-center']}> 

                <TouchableOpacity style={styles.button} title="Sign in" onPress={()=>handleLogin(email,password)} ><Text style={{textAlign: "center", color: "white", fontWeight: "400"}}>Login</Text></TouchableOpacity>
                </View>
                <Text style={{ marginVertical: 30, textAlign: "center", color: "#fff", fontWeight: "500" }} >Dont have an accout?</Text>
                
                <View style={styles['align-center']}> 
                <TouchableOpacity style={[styles.button,{width: 160}]} title="Register" onPress={()=> navigation.navigate("Register")}><Text style={{textAlign: "center", color: "white", fontWeight: "400"}}>Create an account</Text></TouchableOpacity>
                
                </View>
                
                 </View>

           


        </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgb(255, 211, 99)",
        alignItems: "center",
        height: "100%",
        width: "100%"
    },
    "login-form": {
        top: "25%",
        width: "70%"
    },
    "input-field": {
        backgroundColor: "#fff",
        color: "rgb(38, 50, 56)",
        padding: 10,
        marginVertical: 7,
        borderColor: "rgba(0, 0, 0, 0.02)",
        borderRadius: 10
    },
    button: {
        marginVertical: "2%",
        width: 100,
        textAlign: "center",
        borderRadius: 20,
        color: "white",
        padding: 15,
        backgroundColor: "#694fad", 
        fontWeight: "800"
    }, 
    "align-center":{ 
        flex: 1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'

    }
});
export default Login