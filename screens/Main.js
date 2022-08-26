import React, { Fragment, useState, useRef } from 'react'
import {  Button, TouchableOpacity, StyleSheet, Text, View } from "react-native";
import BottomTabs from './Navigations/BottomTabs';
import {auth} from '../config/firebase-config'; 
const Main = ({navigation}) => {

    console.log(auth.currentUser);



  return (
    <Fragment>
  
   <BottomTabs />    
   
   </Fragment>
  )
}

export default Main

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: "rgb(28, 190, 142)",
        alignItems: "center",
        height: "100%",
        width: "100%"
    }}); 