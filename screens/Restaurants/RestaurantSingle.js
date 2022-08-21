
import React, { Fragment } from 'react'
import { StyleSheet, Text, View, Image } from "react-native";
import MenuItem from './MenuItem';

const RestaurantSingle = ({route , navigation}) => {

   const  { id, restaurant_adress, restaurant_menu, restaurant_name  }  =  route.params.restaurant_data; 

   
  return (

    <Fragment>
         <View style={styles.container}> 

          <View style={styles['restaurant_card']}> 
          
          <MenuItem />
          




          </View>

         
      

    </View>
    </Fragment>
  )
}

export default RestaurantSingle

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
    },
    "restaurant_card": { 
      position: "absolute",
       top: 10,
       left: 20, 
       right: 20, 
       bottom: 0,
       backgroundColor: "white", 
       borderTopLeftRadius: 20,
       borderTopRightRadius: 20,
       padding: 10

    }
  
  }); 