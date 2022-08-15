import React, { Fragment, useState, useRef } from 'react'
import { Button, TouchableOpacity, StyleSheet, Text, View, ScrollView, FlatList, Animated } from "react-native";
import BottomTabs from './Navigations/BottomTabs';
import RestaurantList from './Restaurants/RestaurantsList';
import Search from './Components/Search';

const Restaurants = ({ navigation }) => {


const scrollY = new Animated.Value(0); 
const diffClamp = Animated.diffClamp(scrollY,0,60); 
const translateY = diffClamp.interpolate({inputRange:[0,60], outputRange:[0,-60]}); 

  return (
    <View style={styles.container}>

    
      <ScrollView style={styles.scrollview}
      scrollEventThrottle={90}
      stickyHeaderIndices={[0]}
      onScroll={(e)=>{    
        
       scrollY.setValue( e.nativeEvent.contentOffset.y); 
      }} >
          <Animated.View style={{transform : [{translateY: translateY}], elevation: 4,  zIndex: 100, marginBottom: "50px"  }}> 
     <Search />
     </Animated.View>
     

        <RestaurantList navigation={navigation} />
        <RestaurantList navigation={navigation} />
        <RestaurantList navigation={navigation} />
        <RestaurantList navigation={navigation} />
        <RestaurantList />
        <RestaurantList />
        <RestaurantList />
        <RestaurantList />
        <RestaurantList />
        <RestaurantList />
        <RestaurantList />
        <RestaurantList />
        <RestaurantList />
        <RestaurantList />
        <RestaurantList />
        <RestaurantList />
        <RestaurantList />
        <RestaurantList />
       
        


      </ScrollView>



    </View>
  )
}

export default Restaurants

const styles = StyleSheet.create({
  container: {
  
    backgroundColor: "rgb(28, 190, 142)",
    height: "100%",
    width: "100%"
  },
  scrollview : {
   position: "relative",
    width: "90%",
    marginHorizontal: "5%"

  }
}); 