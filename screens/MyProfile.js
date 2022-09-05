import React, { Fragment, useState, useRef } from 'react'
import { Button, TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase-config';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
const MyProfile = () => {

const logOut = async () =>{ 
  await signOut(auth); 
}

  return (
    <View style={styles.container}>

<TouchableOpacity style={styles["logout-container"]} onPress={logOut}>   
<FontAwesomeIcon style={styles.logout} icon={faRightFromBracket} />
</TouchableOpacity>




    </View>
  )
}

export default MyProfile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "rgb(255, 211, 99)",
    alignItems: "center",
    height: "100%",
    width: "100%"
  }, 
  "logout-container":{
    position: "absolute", 
    top: 25,
    right: 25
  },
  logout:{
    color: "white",
    transform: [{scale: 1.8}]
  }
}); 