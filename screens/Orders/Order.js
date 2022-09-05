import React, { Fragment, useState, useEffect } from 'react'
import { Text, View,  StyleSheet, Image, TouchableOpacity } from 'react-native'
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { getFirestore, setDoc, collection, doc, getDoc, addDoc, serverTimestamp } from '@firebase/firestore';

const Order = ({order_data}) => {

const [imgURL, setimgURL] = useState(null); 
const [input_date, setinput_date] = useState(0); 
const [update, setupdate] = useState(false); 

const getImageFromStorage = async () => {

try {
  const storage = getStorage();
  const imgRef = ref(storage, order_data.order.restaurant_id + "/" + order_data.order.restaurant_name);  
  const url = await getDownloadURL(imgRef);
  setimgURL(url);

} catch (error) {
  
}

  
}


let date; 
useEffect(() => {

  date = order_data.ordered; 
  if(date != null ){  
    setinput_date( date.toDate()); 
}
getImageFromStorage();
}, [order_data])


function millisToMinutes(millis) {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes; 
}

var date_now = new Date(); 
let order_date =  millisToMinutes(Math.abs(date_now - input_date)); 


setInterval(()=>{
  setupdate((curr)=>!curr); 
},60000)

  return (
    <Fragment>
    
      <View style={styles.card}>

        <View style={{ textAlign: "center", marginRight: 10, marginTop: 10 }}>
         
          <Image source={{ uri: imgURL != null && imgURL != ""? imgURL : "http://www.fnfmetal.com/uploads/products/1311-product_Mp8wDrKX.jpg" }} style={{ width: 75, height: 75, borderRadius: 10 }} />
          
          <Text style={{ color: "white", textAlign: "center" }}>{order_data.order.restaurant_name}</Text>
        </View>



        <View style={{ textAlign: "center", alignSelf: "center",marginRight: 2 }}>
          <Text  style={{ color: "white", textAlign: "left" }}>Pljeskavica {"\n"}</Text>
          <Text  style={{ color: "white", textAlign: "left" }}>Ordered: {order_date} min ago</Text>
        </View>



        <View style={{ textAlign: "center", alignSelf: "center" }}>
          <TouchableOpacity  style={{ marginBottom: "auto", marginTop: "auto", backgroundColor: "white", marginLeft: 25, borderRadius: 20, padding: 15 }} ><Text>Delivered</Text></TouchableOpacity>
        </View>

       

      </View>
    </Fragment>
  )
}

export default Order


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