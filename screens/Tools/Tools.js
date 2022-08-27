
import React, { Fragment } from 'react'
import { StyleSheet, Text, View, Image } from "react-native";

import ToolsMenu from './ToolsMenu';
import AddAdminScreen from './AdminActions/AddAdminScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Tools = ({navigation}) => {
   

  const Stack = createNativeStackNavigator(); 

  return (
    <Fragment>
        
      
          <Stack.Navigator screenOptions={{
          headerMode: 'screen',
          headerTintColor: 'white',
          headerStyle: { backgroundColor: '#694fad' },
          

        }}> 
        <Stack.Screen name="ToolsMenu" component={ToolsMenu} options={{ headerLeft: () => null , headerShown: false }} />
        <Stack.Screen name="AddAdminScreen" component={AddAdminScreen} options={{ headerLeft: () => null , headerShown: false }} />

        </Stack.Navigator>


    </Fragment>
  )
}

export default Tools

