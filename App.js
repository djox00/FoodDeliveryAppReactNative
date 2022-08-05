
import { Fragment } from "react";
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./screens/Login";
import Register from "./screens/Register";
export default function App() {



  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>  
   <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: 'Sign in' }}
        />
<Stack.Screen name="Register" component={Register} />
</Stack.Navigator>

  </NavigationContainer>
  );
}


