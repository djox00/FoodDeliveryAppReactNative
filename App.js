import * as AuthSession from "expo-auth-session";
import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import { Alert, Button, Platform, StyleSheet, Text, View } from "react-native";



export default function App() {

  return (
    <View style={styles.container}>
    
        <Button
             style={styles.button}
          title="Log in"
          onPress={() => alert("blabla")}
        />
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 40,
  },
  button:{
    borderRadius: "50px", 
    color: "white"
  }
});
