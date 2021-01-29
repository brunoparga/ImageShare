import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import uploadToAnonymousFilesAsync from 'anonymous-files';

import SelectPhoto from './SelectPhoto.jsx';
import SharePhoto from './SharePhoto.jsx';

export default function App() {
  const [selectedImage, setSelectedImage] = React.useState(null);

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled === true) {
      return;
    }

    if (Platform.OS === 'web') {
      let remoteUri = await uploadToAnonymousFilesAsync(pickerResult.uri);
      setSelectedImage({ localUri: pickerResult.uri, remoteUri });
    } else {
      setSelectedImage({ localUri: pickerResult.uri, remoteUri: null });
    } 
  }

  const child = selectedImage
    ? <SharePhoto selectedImage={selectedImage} removeImage={() => setSelectedImage(null)} />
    : <SelectPhoto openImagePickerAsync={openImagePickerAsync} />

  return <View style={styles.container}>{child}</View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
