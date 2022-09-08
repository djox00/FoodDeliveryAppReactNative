import React, { Fragment, useState, useRef } from 'react'
import { Button, TouchableOpacity, StyleSheet, Text, View, ScrollView } from "react-native";
import { useFirestoreQuery } from '../Custom Functions/Hooks';
import { where, query, collection, getFirestore, orderBy } from '@firebase/firestore';
import { auth } from '../../config/firebase-config';
import Order from './Order';
import Rating from './Rating';



const OrdersScreen = () => {

  const [modalVisible, setModalVisible] = useState({visible: false, order_id: ""});


const db = getFirestore(); 
  const RestaurantRef = collection(db,"Orders"); 
  const q = query(RestaurantRef, where("user_id", "==", auth.currentUser.uid)); 
  let orders = useFirestoreQuery(q); 
  let orders_output = orders.map((order) =>   <Order setModalVisible={setModalVisible}  key={order.id} order_data={order} /> )

  return (
    <View style={styles.container}> 
        
     
        
          <ScrollView style={styles['restaurant_card']} > 
          <Rating setModalVisible={setModalVisible} modalVisible={modalVisible} />
{orders_output}
      
</ScrollView>
</View> 
  )
}

export default OrdersScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "rgb(255, 211, 99)",
    alignItems: "center",
    height: "100%",
    width: "100%"
  }
}); 