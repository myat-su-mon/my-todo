import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../shared/colors";

export default function Header() {
  return (
    <View style={styles.Header}>
      <Text style={styles.Title2}>My Todo List</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Header: {
    height: 80,
    paddingTop: 38,
    // borderBottomEndRadius: 100,
    // borderTopLeftRadius: 100,
  },
  Title2: {
    textShadowOffset: { width: 2, height: 2 },
    textShadowColor: "#333",
    textShadowRadius: 6,
    fontSize: 24,
    color: '#555',
    textAlign: "center",
  },

  Title: {
    color: "#333",
    fontSize: 20,
    fontStyle: "italic",
    fontWeight: "bold",
    lineHeight: 40,
    textAlign: "center",
    //textShadowColor: '#D50000',
    fontFamily: "sans-serif",
    textShadowRadius: 4,
    textShadowOffset: { width: 2, height: 2 },
    textTransform: "uppercase",
    textAlignVertical: "top",
  },
});
