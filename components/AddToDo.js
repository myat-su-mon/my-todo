import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { colors } from "../shared/colors";

export default function AddToDo({ addHandler }) {
  const [text, setText] = useState("");

  function changeHandler(val) {
    setText(val);
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.writeTaskWrapper}
    >
      <TextInput
        style={styles.input}
        placeholder="Add to do"
        value={text}
        onChangeText={changeHandler}
      />
      <TouchableOpacity
        onPress={() => {
          addHandler(text);
          setText("");
        }}
      >
        <View style={styles.addWrapper}>
          <Text style={styles.addText}> + </Text>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  //   input: {
  //     marginBottom: 8,
  //     paddingHorizontal: 8,
  //     paddingVertical: 6,
  //     borderColor: colors.primary,
  //     borderWidth: 1,
  //     borderRadius: 8,
  //   },
  container: {
    margin: 8,
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    padding: 8,
    elevation: 4,
  },
  text: {
    textAlign: "center",
    textShadowOffset: { width: 2, height: 2 },
    //textShadowColor: '#555555',
    textShadowRadius: 2,
    fontSize: 14,
    color: colors.textWhite,
  },

  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  addText: {},
});
