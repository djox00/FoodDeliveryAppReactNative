
import React, { Fragment } from 'react'
import { StyleSheet, Text, View, Image } from "react-native";

const RestaurantSingle = ({route,navigation}) => {
    const { id, otherParam } = route.params

  return (
    <Fragment>
         <View style={styles.container}> 
           <Text>itemId: {JSON.stringify(id)}</Text>
      

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
    }}); 