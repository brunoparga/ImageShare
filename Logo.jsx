import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppLoading from "expo-app-loading";
import { 
  useFonts, PermanentMarker_400Regular 
} from '@expo-google-fonts/permanent-marker'

export default function Logo() {
  const [fontsLoaded] = useFonts({
    PermanentMarker_400Regular
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }
  
  return (
    <View style={styles.box}>
      <Text style={styles.name}>image share</Text>
      <View style={styles.white}>
        <Text style={styles.pic}>🌄</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "black",
    borderRadius: 7,
    padding: 15,
    width: 305,
    height: 159,
    marginBottom: 20,
    alignItems: "center"
  },
  name: {
    color: "white",
    fontFamily: "PermanentMarker_400Regular",
    fontSize: 40,
    textAlign: "center",
  },
  pic: {
    fontSize: 53,
    textAlign: "center",
    alignSelf: "center"
  },
  white: {
    backgroundColor: "white",
    width: 66
  }
})