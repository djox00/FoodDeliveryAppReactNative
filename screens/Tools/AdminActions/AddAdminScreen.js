import React, {useState} from 'react'
import { View, Text, StyleSheet,TextInput,ScrollView,TouchableOpacity  } from 'react-native'
import { collection, query, where, updateDoc, doc, getFirestore ,getDocs} from "firebase/firestore";
import { async } from '@firebase/util';


const AddAdminScreen = () => {

    const db = getFirestore(); 
    const UsersRef = collection(db, "Users");
   
    const [email, setemail] = useState(''); 
   const [uid, setuid] = useState('')


   const updateAdmin = async () =>{ 
    const res = await updateDoc( doc(db,"Users",uid) ,{user: "admin"}); 
 }

const handleSubmit = async () =>{ 
console.log(email); 
    const q = query(UsersRef, where("email", "==", email));
     const user = await getDocs(q);

     user.forEach((doc) => {
        setuid(doc.id); 
}

);


updateAdmin();
}


  return (
    <View style={styles.container}> 
    <ScrollView contentContainerStyle={styles.form}>   
    <Text style={{textAlign: "justify", marginHorizontal: 40, fontWeight: "500", marginBottom: 40}}>NOTE: Assigning an admin role to a user
         gains the user full access over the infrastructure. {"\n"}{"\n"}
         Admin permissions include: {"\n"}
        - Admin Tools {"\n"}
        - Restaurant Editing Tools {"\n"}
        - Other high privileged Tools 
        
    </Text>
        <Text style={{color: "gray"}}>Enter the email adress of the user</Text>
        <TextInput style={[styles['input-field'],{marginBottom: 50} ]}  onChangeText={(val)=> setemail(val)} />

        <TouchableOpacity onPress={handleSubmit} style={styles.button} ><Text style={{color: "white", textAlign: "center", fontWeight: "600"}}>Submit</Text></TouchableOpacity>
            
        </ScrollView>
    </View>
  )
}

export default AddAdminScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: "rgb(255, 211, 99)",
        height: "100%",
        width: "100%" 
    }, 
    form: {
        alignItems: "center",
        flex: 1,
        marginTop: 50
    
        

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