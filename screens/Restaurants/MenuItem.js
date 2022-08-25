import React, { Fragment, useState } from 'react'
import { Text, View, Button, StyleSheet, Image,TouchableOpacity } from 'react-native'
import RNPickerSelect from "react-native-picker-select";
import { getStorage, ref, getDownloadURL } from "firebase/storage";


const MenuItem = ({item,restaurant_id}) => {

 let prices = item?.food?.food_price; 
 

console.log(item); 


const [price, setprice] = useState(0); 

const [imgURL, setimgURL] = useState(''); 
const getImageFromStorage = async () =>{ 
  const storage = getStorage();
  const imgRef = ref(storage, `Sarajka/${item?.food?.img_tag}`);  /* const imgRef = ref(storage, `${restaurant_id}/${item?.food?.img_tag}`); */
const url = await getDownloadURL(imgRef); 
setimgURL(url); 
}



  getImageFromStorage(); 
 
  
  


  return (
    <Fragment>
          <View style={styles.card}>  


         

          <View style={{display: "block", textAlign: "center"}}>   
          <Image source={{uri: imgURL}} style={{width: 70, height: 70, borderRadius: 10}} />
          <Text  style={{}}>{item?.food?.food_name}</Text>
       </View> 

        <RNPickerSelect
                 onValueChange={(value) =>  setprice(value) }
                placeholder={{label: "Odaberi porciju..", value: 0}}
                 style={pickerSelectStyles}
                 items={[

                    (prices?.Mala !== null &&  prices?.Mala != undefined  ) ? {label: "Mala porcija", value: Number(prices?.Mala)} :{}, 
                    (prices?.Srednja !== null &&  prices?.Srednja != undefined ) ? {label: "Srednja porcija", value:  Number(prices?.Srednja) } : {},
                    (prices?.Velika !== null &&  prices?.Velika != undefined  ) ? {label: "Velika porcija", value:  Number(prices?.Velika) } : {}
          
                  
                  ] }
             />
               <Text style={{marginBottom: "auto", marginTop: "auto"}}> {price + "€"}  </Text> 
               <TouchableOpacity style={{marginBottom: "auto", marginTop: "auto", backgroundColor: "white", borderRadius: 2}} ><Text>Add</Text></TouchableOpacity>
               
               </View>
       

    </Fragment>
  )
}

export default MenuItem


const styles = StyleSheet.create({
    card: {
  
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        alignContent: "center",
        justifyContent: "center",
        borderRadius: 20,
        overflow:"hidden",
        marginVertical: 5,
        height: 100,
        backgroundColor: "gray"
       
      
        
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
      marginBottom: "auto"
  },
  inputAndroid: {
      fontSize: 13,
      paddingHorizontal: 6,
      paddingVertical: 8,
      borderWidth: 0.5,
      borderColor: 'purple',
      borderRadius: 8,
      color: 'black',
      paddingRight: 30,
      marginTop: "auto",
      marginBottom: "auto"
  },
  inputWeb: { 
    fontSize: 13,
      paddingHorizontal: 6,
      paddingVertical: 8,
      marginVertical: 5,
      borderWidth: 0.5,
      borderColor: 'purple',
      borderRadius: 8,
      color: 'black',
      paddingRight: 20 ,
      alignContent: "center",
      marginTop: "auto",
      marginBottom: "auto"

  }
  
  
});