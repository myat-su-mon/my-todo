import { StyleSheet, Text, TouchableOpacity, Image, View } from "react-native";
import { colors } from "../shared/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function TodoItem({ item, deleteHandler }) {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text key={item.key} style={styles.itemText}>
          {item.name}
        </Text>
      </View>
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons
          onPress={() => deleteHandler(item.key)}
          style={styles.icon}
          name="delete-forever-outline"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    marginTop: 10,
    padding: 20,
    backgroundColor: colors.secondary,
    borderColor: colors.primary,
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  },
  item: {
    // backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 10,
    height: 10,
    backgroundColor: "#55BCF6",
    opacity: 4,
    borderRadius: 5,
    marginLeft: 15,
  },
  itemText: {
    maxWidth: "80%",
    color: "#333",
    paddingLeft: 5,
    // textDecorationLine: item.completed ? 'line-through': 'none'
  },
  icon: {
    fontSize: 16,
    color: "#333",
    marginHorizontal: 10,
  },
  iconContainer: {
    flexDirection: "row-reverse",
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: "#55BCF6",
    borderWidth: 2,
    borderRadius: 5,
  },
});
