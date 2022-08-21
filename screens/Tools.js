
import React, { Fragment } from 'react'
import { StyleSheet, Text, View, Image } from "react-native";

const Tools = ({navigation}) => {
   

  return (
    <Fragment>
         <View style={styles.container}> 
           <Text>Add restaurants</Text>
           <Text>delete restaurants</Text>
      

    </View>
    </Fragment>
  )
}

export default Tools

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