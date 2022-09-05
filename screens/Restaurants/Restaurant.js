import React, { Fragment, useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { getStorage, ref, getDownloadURL } from "firebase/storage";


const Restaurant = ({ restaurant_data, navigation, forMenu }) => {


  const [imgURL, setimgURL] = useState('');


  const getImageFromStorage = async () => {
    try {
      const storage = getStorage();
      const imgRef = ref(storage, restaurant_data.id + '/' + restaurant_data.restaurant_name);
      const url = await getDownloadURL(imgRef);
      setimgURL(url);

    } catch (error) {

    }


  }

  useEffect(() => {
    getImageFromStorage();
  }, [])






  return (
    <Fragment>

      <TouchableOpacity style={styles.card} onPress={() => forMenu ? navigation.navigate("AddMenuScreen", { restaurant_data }) : navigation.navigate("RestaurantSingle", { restaurant_data })}  >
        <View style={{ width: "30%" }}>
          <Image source={{ uri: imgURL ? imgURL : "http://www.fnfmetal.com/uploads/products/1311-product_Mp8wDrKX.jpg" }} style={{ width: 70, height: 70 }} />


        </View>

        <View style={{ width: "70%" }}>

          <Text>{restaurant_data.restaurant_name}</Text>

          <Text>{restaurant_data.restaurant_adress}</Text>

          <Text>{restaurant_data.restaurant_description}</Text>
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
    overflow: "hidden",
    marginVertical: 15


  },
  item: {
    width: '50%'
  }

}); 