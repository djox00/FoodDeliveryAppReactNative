import React, { Fragment, useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image } from "react-native";
import { getStorage, ref, getDownloadURL } from "firebase/storage";


const RestaurantInfo = ({restaurant_data}) => {

const [imgURL, setimgURL] = useState(''); 

    const getImageFromStorage = async () =>{ 
        const storage = getStorage();
        const imgRef = ref(storage, restaurant_data.id  + '/' + restaurant_data.restaurant_name );
      const url = await getDownloadURL(imgRef); 
      setimgURL(url); 
      }
      
      useEffect(() => {
        getImageFromStorage(); 
      }, [])
      
        





  return (
    <Fragment> 

     <View style={styles.card}>   
     <Image source={{uri: imgURL}} style={{width: 130, height: 130, borderRadius: 10}} />
   <Text>{restaurant_data.restaurant_name}</Text>
   <Text>{restaurant_data.restaurant_description}</Text>


     </View>

    </Fragment>
  )
}

export default RestaurantInfo


const styles = StyleSheet.create({
    card: {
        alignContent: "center", 
        alignItems: "center",
        textAlign: "center",
        backgroundColor: "white",
        borderRadius: 10,
        overflow:"hidden",
        marginVertical: 15,
        paddingTop: 30,
        paddingBottom: 20
      
        
    }, 
  

}); 