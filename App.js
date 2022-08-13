
import { Fragment } from "react";
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./screens/Login";
import Register from "./screens/Register";
import Main from "./screens/Main";
import { auth } from "./config/firebase-config";
import { Text } from "react-native";

export default function App() {

  console.log(auth.currentUser)

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

          <Stack.Screen name="Main" component={Main} options={{ headerLeft: () => null }} />

          <Stack.Screen name="Register" component={Register} />



        </Stack.Navigator>

      </NavigationContainer>

    </Fragment>
  );
}


