import React from "react";
import { StyleSheet, Text } from "react-native";

import Button from "./Button.jsx"
import Logo from "./Logo.jsx";

export default function SelectPhoto({ openImagePickerAsync }) {
  return (
    <>
      <Logo />
      <Text style={styles.instructions}>
        To share a photo from your phone with a friend, just press the button below!
      </Text>
      <Button onPress={openImagePickerAsync} text="Pick a photo" />
    </>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: 305,
    height: 159,
    marginBottom: 20,
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 10,
  },
})