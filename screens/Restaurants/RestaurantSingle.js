
import React, { Fragment, useState } from 'react'
import { StyleSheet, Text, View, Image, ScrollView, Animated } from "react-native";
import MenuItem from './MenuItem';
import RestaurantInfo from './RestaurantInfo';


const RestaurantSingle = ({route , navigation}) => {

  
const restaurant_data = route.params.restaurant_data; 

   const  { id, restaurant_adress, restaurant_menu, restaurant_name  }  =  restaurant_data; 

   let menu = null; 

if(!restaurant_menu == null || !restaurant_menu == "") {    

   const objArray = [];
   Object.keys(restaurant_menu).forEach(key => objArray.push({
      id: key, 
      food : restaurant_menu[key]
     
   }));

    menu = objArray.map((item)=> <MenuItem restaurant_name={restaurant_name}  key={Math.random()} item={item} restaurant_id={id} />  ); 
  }






  return (

    <Fragment>
         <View style={styles.container}> 
        
     
        
          <ScrollView style={styles['restaurant_card']} > 

          <RestaurantInfo restaurant_data={restaurant_data} />
                    
          { menu && menu}

          </ScrollView>
        

    </View>
    </Fragment>
  )
}

export default React.memo(RestaurantSingle)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgb(255, 211, 99)",
        alignItems: "center",
        height: "100%",
        width: "100%"
    },
    "restaurant_card": { 
      position: "relative",
      width: "100%",
       bottom: 0,
       top: 0,
       
    }, 
    restaurant :{ 
      backgroundColor: "white", 
     top: 0,
     height: 100,
      color: "white",
    

    }
  
  }); 