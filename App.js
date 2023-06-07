import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import AddToDo from "./components/AddToDo";

export default function App() {
  const [person, setPerson] = useState([
    { name: "U Ba", key: "1" },
    { name: "Daw Myat", key: "2" },
    { name: "Mg Khin Maung", key: "3" },
    { name: "Ma Khin Khin Oo", key: "4" },
    { name: "Mg Khin Thein", key: "5" },
    { name: "U Ba", key: "6" },
    { name: "Daw Myat", key: "7" },
    { name: "Mg Khin Maung", key: "8" },
    { name: "Ma Khin Khin Oo", key: "9" },
    { name: "Mg Khin Thein", key: "10" },
    { name: "U Ba", key: "11" },
    { name: "Daw Myat", key: "12" },
    { name: "Mg Khin Maung", key: "13" },
    { name: "Ma Khin Khin Oo", key: "14" },
    { name: "Mg Khin Thein", key: "15" },
  ]);

  function deleteHandler(key) {
    setPerson((prevPerson) => {
      return prevPerson.filter((person) => person.key != key);
    });
  }
  

  function addHandler(person) {
    setPerson((prevPerson) => {
      return [{ name: person, key: Math.random().toString() }, ...prevPerson];
    });
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header />
      <View style={styles.items}>
        <FlatList
          data={person}
          renderItem={({ item }) => (
            <TodoItem
              item={item}
              deleteHandler={deleteHandler}
            />
          )}
        />
      </View>
      <AddToDo addHandler={addHandler}/>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAEC",
  },
  items: {
    marginTop: 30,
    maxHeight: '60%'
  },
});
