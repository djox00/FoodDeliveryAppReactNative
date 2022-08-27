import React, { Fragment, useState, useRef, useEffect } from 'react'
import { Button, TouchableOpacity, StyleSheet, Text, View, ScrollView, FlatList, Animated, SafeAreaView } from "react-native";
import BottomTabs from './Navigations/BottomTabs';
import Restaurant from './Restaurants/Restaurant';
import Search from './Components/Search';
import { getFirestore } from '@firebase/firestore';
import { collection, getDocs, doc, query, getDoc } from '@firebase/firestore';

const RestaurantsScreen = ({ navigation }) => {



  console.log

const scrollY = new Animated.Value(0); 
const diffClamp = Animated.diffClamp(scrollY,0,60); 
const translateY = diffClamp.interpolate({inputRange:[0,60], outputRange:[0,-60]}); 


const db = getFirestore(); 

const [restaurants, setrestaurants] = useState([]); 





const getRestaurants = async ()=>{ 
  let rest = []; 
  const response = await getDocs(collection(db,"Restaurants")); 
  response.forEach((doc)=>  rest = [...rest, {...doc.data(), id: doc.id}]); 
  setrestaurants(rest); 
}
useEffect(() => {
  getRestaurants();

}, [])

console.log(restaurants); 
let restaurants_arry = restaurants.map((restaurant)=> <Restaurant key={Math.random() /* add id to Restaurants or get the document id */ }   navigation={navigation} restaurant_data={restaurant}  />)


  return (
    <View style={styles.container}>

    
      <ScrollView style={styles.scrollview}
      scrollEventThrottle={90}
      stickyHeaderIndices={[0]}
      onScroll={(e)=>{    
        
       scrollY.setValue( e.nativeEvent.contentOffset.y); 
      }} >
          <Animated.View style={{transform : [{translateY: translateY}], elevation: 4,  zIndex: 100, marginBottom: 50  }}> 
     <Search />
     </Animated.View>
     
{restaurants_arry}
       
        


      </ScrollView>



    </View>
  )
}

export default RestaurantsScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(255, 211, 99)",
    height: "100%",
    width: "100%"
  },
  scrollview : {
  top: 25,
   position: "relative",
    width: "90%",
    marginHorizontal: "5%"

  }
}); 