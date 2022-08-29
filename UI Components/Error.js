import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Error = ({ message }) => {
  return (
    <View style={styles.box}>
      <Text style={styles.text}>{message}</Text>
    </View>
  )
}

export default Error

const styles = StyleSheet.create({

  box: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: 25,
    backgroundColor: "red",
    
  },
  text: {
    color: "white",
    fontWeight: "600",
    textAlign: "center"
  }


}); 