import React, { Fragment } from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'


const MenuItem = ({name, imgURL }) => {
  return (
    <Fragment>
          <View style={styles.card}>   
        
        <Text>  Cevapi    </Text>
        <Button title="add" />

        </View>

    </Fragment>
  )
}

export default MenuItem


const styles = StyleSheet.create({
    card: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        backgroundColor: "white",
        borderRadius: "20px",
        overflow:"hidden",
        marginVertical: "15px",
      
        
    }, 
  item: { 
    width: '50%'
  }  

}); 