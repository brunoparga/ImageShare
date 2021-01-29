import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

const Button = ({ onPress, text }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 5,
    marginBottom: 5,
  },
  buttonText: {
    fontSize: 20,
    color: "white",
  },
});

export default Button