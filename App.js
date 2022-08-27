
import { Fragment } from "react";
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./screens/Authentication/Login";
import Register from "./screens/Authentication/Register";
import Main from "./screens/Main";

import RestaurantSingle from "./screens/Restaurants/RestaurantSingle";

export default function App() {

  




  const Stack = createNativeStackNavigator();
  return (
    <Fragment>
      <NavigationContainer >




        <Stack.Navigator screenOptions={{
          headerMode: 'screen',
          headerTintColor: 'white',
          headerStyle: { backgroundColor: 'purple' },

        }}>

          


          <Stack.Screen name="Login" component={Login} options={{ title: 'Sign in' }} />

          <Stack.Screen name="Main" component={Main} options={{ headerLeft: () => null, headerShown: false }} />

          <Stack.Screen name="Register" component={Register} />

          <Stack.Screen name="RestaurantSingle" component={RestaurantSingle} />



        </Stack.Navigator>

      </NavigationContainer>

    </Fragment>
  );
}


