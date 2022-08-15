import React, { Fragment } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity  } from "react-native";


const RestaurantList = ({restaurant_logo,restaurant_adress, restaurant_menu, restaurant_name, restaurant_owner, navigation}) => {
  return (
    <Fragment> 

     <TouchableOpacity  style={styles.card} onPress={()=>navigation.navigate("RestaurantSingle",{id: 50})}  > 
       <View style={{width: "30%"}}>
          <Image source={{uri: "https://foodbooking.ba/wp-content/uploads/2019/05/logo-12.jpg"}} style={{width: "70px", height: "70px"}} />


       </View>

       <View style={{width: "70%"}}> 

       <Text>Sarajka Korzo</Text>

       <Text>Cevapi, Pljeskavice itd..</Text>

       <Text>Aleja bla bla bla</Text>
       </View>

     </TouchableOpacity >

    </Fragment>
  )
}

export default RestaurantList


const styles = StyleSheet.create({
    card: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        backgroundColor: "white",
        borderRadius: "20px",
        overflow:"hidden",
        marginVertical: "15px"
        
    }, 
  item: { 
    width: '50%'

  }  

}); 