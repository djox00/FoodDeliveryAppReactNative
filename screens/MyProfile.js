import React, { Fragment, useState, useRef } from 'react'
import { Button, TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase-config';
const MyProfile = () => {

const logOut = async () =>{ 
  await signOut(auth); 
}

  return (
    <View style={styles.container}>

   <Button onPress={logOut} title='Logout' /> 



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
  }
}); 