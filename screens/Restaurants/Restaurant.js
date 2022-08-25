import React, { Fragment, useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity  } from "react-native";
import { getStorage, ref, getDownloadURL } from "firebase/storage";


const Restaurant = ({restaurant_data, navigation}) => {

 
  const [imgURL, setimgURL] = useState(''); 


const getImageFromStorage = async () =>{ 
  const storage = getStorage();
  const imgRef = ref(storage, 'Sarajka/sarajka.jpg');
const url = await getDownloadURL(imgRef); 
setimgURL(url); 
}


  getImageFromStorage(); 


 

  return (
    <Fragment> 

     <TouchableOpacity  style={styles.card} onPress={()=>navigation.navigate("RestaurantSingle",{restaurant_data})}  > 
       <View style={{width: "30%"}}>
          <Image source={{uri: imgURL}} style={{width: 70, height: 70}} />


       </View>

       <View style={{width: "70%"}}> 

       <Text>{restaurant_data.restaurant_name}</Text>

       <Text>{restaurant_data.restaurant_adress}</Text>

       <Text>Aleja bla bla bla</Text>
       </View>

     </TouchableOpacity >

    </Fragment>
  )
}

export default Restaurant


const styles = StyleSheet.create({
    card: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        backgroundColor: "white",
        borderRadius: 20,
        overflow:"hidden",
        marginVertical: 15,
      
        
    }, 
  item: { 
    width: '50%'
  }  

}); 