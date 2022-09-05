import React, { Fragment, useState, useRef, useEffect } from 'react'
import { Button, TouchableOpacity, StyleSheet, Text, View, ScrollView, Animated } from "react-native";
import BottomTabs from '../Navigations/BottomTabs';
import Restaurant from './Restaurant';
import Search from '../Components/Search';
import { getFirestore } from '@firebase/firestore';
import { collection, getDocs, doc, query, getDoc, where } from '@firebase/firestore';
import { useFirestoreQuery } from '../Custom Functions/Hooks';
import { auth } from '../../config/firebase-config';


const ShowMyRestaurants = ({ navigation }) => {





const db = getFirestore(); 
const RestaurantRef = collection(db,"Restaurants"); 
const q = query(RestaurantRef,where("restaurant_owner", "==", auth.currentUser.uid)); 
const restaurants = useFirestoreQuery(q); 



let restaurants_arry = restaurants.map((restaurant)=> <Restaurant forMenu={true} key={restaurant.id}   navigation={navigation} restaurant_data={restaurant}  />)


  return (
    <View style={styles.container}>

    
      <ScrollView style={styles.scrollview}
      scrollEventThrottle={90} >
   
     
{restaurants_arry}
       
        


      </ScrollView>



    </View>
  )
}

export default ShowMyRestaurants

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(255, 211, 99)",
    height: "100%",
    width: "100%"
  },
  scrollview : {
  top: 0,
  bottom: 25,
   position: "relative",
    width: "90%",
    marginHorizontal: "5%"

  }
}); 