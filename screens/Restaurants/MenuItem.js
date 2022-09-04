import React, { Fragment, useState, useEffect } from 'react'
import { Text, View, Button, StyleSheet, Image, TouchableOpacity } from 'react-native'
import RNPickerSelect from "react-native-picker-select";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { getFirestore, setDoc, collection, doc, getDoc, addDoc, serverTimestamp } from '@firebase/firestore';
import { auth } from '../../config/firebase-config';


const MenuItem = ({ item, restaurant_id, restaurant_name }) => {

  let food_data = item;
  let prices = item?.food?.food_price;
  let food_id = item?.id; 
  
  const db = getFirestore(); 

  const [ViewFoodDetails, setViewFoodDetails] = useState(100); 
  const [SelectedFood, setSelectedFood] = useState({portion: "", price: 0});

  const [imgURL, setimgURL] = useState('');
  const getImageFromStorage = async () => {
    const storage = getStorage();
    const imgRef = ref(storage, restaurant_id + "/" + food_id);  
    const url = await getDownloadURL(imgRef);
    setimgURL(url);
  }

useEffect(() => {
  getImageFromStorage();
}, [])



const handleViewDetails = () =>{ 
if(ViewFoodDetails == 100) 
  setViewFoodDetails(180); 
if(ViewFoodDetails == 180) 
setViewFoodDetails(100); 
}


const handleAddToOrders = async () =>{ 



const user = await getDoc(doc(db,"Users",auth.currentUser.uid)); 
const user_data = user.data(); 

const OrdersRef = collection(db,"Orders")

if(SelectedFood.price!= 0) {  

const response = await addDoc(OrdersRef,{
    user_id: auth.currentUser.uid, 
    first_name: user_data.first_name, 
    last_name: user_data.last_name, 
    adress: user_data.adress,
    phone: user_data.phone, 
    order:{ 
    restaurant_id: restaurant_id, 
    restaurant_name: restaurant_name,
    food_id: food_id, 
    food_name: food_data.food.food_name,
    portion: SelectedFood.portion, 
    price: SelectedFood.price, 
    Delivered: false
    }, 
    ordered: serverTimestamp()
  
  });} 


}


  return (
    <Fragment>
    
      <View style={[styles.card,{height: ViewFoodDetails}]}>

        <View style={{ textAlign: "center", marginRight: 10, marginTop: 10 }}>
          <TouchableOpacity onPress={handleViewDetails}> 
          <Image source={{ uri: imgURL != null && imgURL != ""? imgURL : "http://www.fnfmetal.com/uploads/products/1311-product_Mp8wDrKX.jpg" }} style={{ width: 70, height: 70, borderRadius: 10 }} />
          </TouchableOpacity>
          <Text style={{ color: "white", textAlign: "center" }}>{item?.food?.food_name}</Text>
        </View>



        <View style={{ textAlign: "center", alignSelf: "center",marginRight: 2 }}>
          <RNPickerSelect
            onValueChange={(value) => setSelectedFood(value)}
            placeholder={{ label: "Odaberi porciju..", value: 0 }}
            style={pickerSelectStyles}
            useNativeAndroidPickerStyle={false}

            items={[

              (prices?.Mala !== null && prices?.Mala != undefined) ? { label: "Mala porcija", value: { portion: "Mala", price: Number(prices?.Mala) } } : {},
              (prices?.Srednja !== null && prices?.Srednja != undefined) ? { label: "Srednja porcija", value: {  portion: "Srednja", price: Number(prices?.Srednja)} } : {},
              (prices?.Velika !== null && prices?.Velika != undefined) ? { label: "Velika porcija", value: {  portion: "Velika", price : Number(prices?.Velika)} } : {}


            ]}
          />
        </View>


        <View style={{ textAlign: "center", alignSelf: "center" }}>
          <Text style={{ marginBottom: "auto", marginTop: "auto", color: "white" }}> {SelectedFood.price + "€"}  </Text>
        </View>


        <View style={{ textAlign: "center", alignSelf: "center" }}>
          <TouchableOpacity onPress={handleAddToOrders} style={{ marginBottom: "auto", marginTop: "auto", backgroundColor: "white", borderRadius: 5, padding: 10 }} ><Text>Add</Text></TouchableOpacity>
        </View>

        {food_data.food.food_description != null && food_data.food.food_description != ""  ?  <Text style={{color: "white"}}> Opis jela: {food_data.food.food_description}</Text> : null }

      </View>
    </Fragment>
  )
}

export default React.memo(MenuItem)


const styles = StyleSheet.create({
  card: {
    flex: 0.2,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: "center",
    overflow: "hidden",
    backgroundColor: "#694fad",
    marginBottom: 10, 
    height: 120
  

  },
  item: {
    width: '50%',

  }

});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 13,
    paddingVertical: 12,
    paddingHorizontal: 6,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
    alignItems: "center",
    marginTop: "auto",
    marginBottom: "auto",
    backgroundColor: "white"
  },
  inputAndroid: {
    fontSize: 13,
    paddingHorizontal: 6,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: '#694fad',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
    marginTop: "auto",
    marginBottom: "auto",
    backgroundColor: "white"
  },
  inputWeb: {
    fontSize: 13,
    paddingHorizontal: 6,
    paddingVertical: 8,
    marginVertical: 5,
    borderWidth: 0.5,
    borderColor: '#694fad',
    borderRadius: 8,
    color: 'black',
    paddingRight: 20,
    alignContent: "center",
    marginTop: "auto",
    marginBottom: "auto",
    backgroundColor: "white"
  }


});