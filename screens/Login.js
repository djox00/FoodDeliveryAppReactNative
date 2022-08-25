import React, { useRef, useState } from 'react'
import { Alert, Button, Platform, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { TextInput } from "react-native";
import { auth } from '../config/firebase-config';
import { signInWithEmailAndPassword,  GoogleAuthProvider, setPersistence,  signInWithPopup, signInWithCredential } from 'firebase/auth';
import Error from '../UI Components/Error';




const Login = ({navigation}) => {

   
if(auth.currentUser!=null) navigation.navigate("Main"); 

    const [error, seterror] = useState({message: '', status: false}); 

    const handleLogin = async (e, p) => {
       
        try {
        
          const user = await signInWithEmailAndPassword(auth, e, p);
           console.log(user); 
         seterror(()=>{return {message: '', status: false}}); 
         // setAdmin(); 
         navigation.navigate("Main"); 
    
        } catch (error) {
          console.log(error); 
          seterror(()=>{return {message: error.message, status: true}}); 
    
        }
      }
    
    
    
      const handleLoginWithGoogle = async () => {
       
        try {

           /*  const { idToken } = await GoogleSignin.signIn()

            const googleCredential = GoogleAuthProvider.credential(idToken); 
            
            signInWithCredential(googleCredential);  */
          
           seterror(()=>{return {message: '', status: false}}); 
            // setAdmin(); 
         
    
        } catch (error) {
         seterror(()=>{return {message: error.message, status: true}}); 
        }
            
      }


    const EmailRef = useRef(); 
    const PasswordRef = useRef(); 

    return (
        <View style={styles.container}>
            <View style={styles['login-form']}>
                { error.status ? <Error message={error.message} /> : null}
                <TextInput placeholder="enter you email" style={[styles['input-field'],{marginBottom: 20} ]} ref={EmailRef} />
                <TextInput placeholder="enter you password" secureTextEntry={true} style={[styles['input-field'],{marginBottom: 50} ]} ref={PasswordRef} />
                <View style={styles['align-center']}> 

                <TouchableOpacity style={styles.button} title="Sign in" onPress={()=>handleLogin(EmailRef.current.value,PasswordRef.current.value)} ><Text style={{textAlign: "center", color: "white", fontWeight: "400"}}>Login</Text></TouchableOpacity>
                </View>
                <Text style={{ marginVertical: 30, textAlign: "center", color: "#fff", fontWeight: "500" }} >Dont have an accout?</Text>
                
                <View style={styles['align-center']}> 
                <TouchableOpacity style={[styles.button,{width: 150}]} title="Register" onPress={()=> navigation.navigate("Register")}><Text style={{textAlign: "center", color: "white", fontWeight: "400"}}>Create an account</Text></TouchableOpacity>
                
                </View>
                
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
        padding: 10,
        backgroundColor: "purple", 
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