import React from 'react'
import { StyleSheet, Text, TouchableOpacity  } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPencil, faUtensils  } from '@fortawesome/free-solid-svg-icons';

const EditRestaurant = () => {
  return (
    <TouchableOpacity style={styles.card} >


<FontAwesomeIcon icon={faUtensils} style={styles.icon} /> 
<Text style={styles.text}> <FontAwesomeIcon icon={faPencil} color="orange" />  Edit Restaurant</Text>

    </TouchableOpacity>
  )
}

export default EditRestaurant



const styles = StyleSheet.create({
    card: {
      top: 50,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      alignContent: "center",
      justifyContent: "center",
      overflow: "hidden",
      height: 70,
      backgroundColor: "white",
      textAlign: "center",
      marginVertical: 10
  
    },
  icon: { 
    transform: [{scale: 1.2}],
    marginRight: 3,
    color: "orange"
    
  }, 
  text: { 
  fontWeight: "600",
  fontSize: 15

  }
  
  });