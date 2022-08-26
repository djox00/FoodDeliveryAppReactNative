import React from 'react'
import {  Button, TouchableOpacity, StyleSheet, Text, View, TextInput } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Search = () => {
  return (
   <View style={styles.card}> 
  <FontAwesomeIcon icon={faSearch} style={styles.search} />
  <TextInput style={styles['search-input']}  />
   </View>
  )
}

export default Search

const styles = StyleSheet.create({
card: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    width: "90%",
    left: "5%",
    height: 50, 
    backgroundColor: "white",
    borderColor: "gray",
    borderWidth: 1,
    flex: 1,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderRadius: 50,
    marginTop: 10,
    marginBottom: 10,
    overflow: "hidden"

},
search: {
    color: "purple",
    width: "20%",
    marginBottom: "auto",
    marginTop: "auto"
    
},
"search-input" : {
   marginVertical: "auto",
   width: "70%",
   marginBottom: "auto",
    marginTop: "auto",
    marginLeft: 10


}

})