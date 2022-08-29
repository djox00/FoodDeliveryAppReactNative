import React, { Fragment, useState, useRef } from 'react'
import { Button, TouchableOpacity, StyleSheet, Text, View } from "react-native";

const MyProfile = () => {

  return (
    <View style={styles.container}>

      <Text> my profile</Text>



    </View>
  )
}

export default MyProfile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "rgb(255, 211, 99)",
    alignItems: "center",
    height: "100%",
    width: "100%"
  }
}); 