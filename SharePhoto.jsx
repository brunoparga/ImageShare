import React from "react"
import { Image, StyleSheet } from "react-native";
import * as Sharing from 'expo-sharing';

import Button from "./Button.jsx"

export default function SharePhoto({ selectedImage, removeImage }) {
  let openShareDialogAsync = async () => {
    if (!(await Sharing.isAvailableAsync())) {
      alert(`The image is available for sharing at: ${selectedImage.remoteUri}`);
      return;
    }

    await Sharing.shareAsync(selectedImage.localUri);
  };

  return (
    <>
      <Image source={{ uri: selectedImage.localUri }} style={styles.thumbnail} />
      <Button onPress={openShareDialogAsync} text="Share photo" />
      <Button onPress={removeImage} text="Remove photo" />
    </>
  )
}

const styles = StyleSheet.create({
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain"
  },
});
