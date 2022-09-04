
import React, { Fragment } from 'react'
import { StyleSheet, Text, View, Image } from "react-native";
import AddAdmin from './AdminActions/AddAdmin';
import AddRestaurant from './RestaurantActions/AddRestaurant';
import EditRestaurant from './RestaurantActions/EditRestaurant';
import AddToMenu from './RestaurantActions/AddToMenu';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const ToolsMenu = ({ navigation }) => {


  const Stack = createNativeStackNavigator();

  return (
    <Fragment>
      <View style={styles.container}>

        <AddAdmin navigation={navigation} />
        <AddRestaurant navigation={navigation} />
        <AddToMenu navigation={navigation} />
        <EditRestaurant navigation={navigation} />
        
      </View>
    </Fragment>
  )
}

export default ToolsMenu

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(255, 211, 99)",
    height: "100%",
    width: "100%"
  }
}); 