import { useState } from "react";
import {
  Button,
  FlatList,
  Image,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  StatusBar
} from "react-native";

export default function App() {
  const [todos, setTodos] = useState<string[]>([]);

  const [input, setInput] = useState<string>("");

  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  return (
    <>
    <StatusBar barStyle='dark-content'/>
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          borderWidth: 2,
          borderRadius: 5,
          padding: 4,
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <TextInput
          style={{ width: "80%" }}
          placeholder="enter to do"
          onChangeText={(text) => setInput(text)}
          value={input}
        />
        <Button
          title="Add"
          onPress={() => {
            setInput("");
            setTodos([...todos, input]);
            setModalIsOpen(true);
          }}
        />
      </View>


      <Modal visible={modalIsOpen} animationType="slide">
        <FlatList
          style={{ width: "100%", padding: 75 }}
          keyExtractor={(todo, index) => index.toString()}
          alwaysBounceVertical={true}
          data={todos}
          renderItem={(todo) => {
            return (
              <Pressable
                android_ripple={{ color: "red" }}
                style={({ pressed }) =>
                  pressed
                    ? { backgroundColor: "red" }
                    : { backgroundColor: "white" }
                }
                onPress={() => {
                  setTodos(todos.filter((t) => t !== todo.item));
                }}
              >
                <Text>{todo.item}</Text>
              </Pressable>
            );
          }}
        />
        <Button title="Close" onPress={() => setModalIsOpen(false)} />
      </Modal>

      {/* <ScrollView style={{ width: "100%" }}>
        {todos.map((todo, i) => (
          <Text
            key={i}
            onPress={() => {
              setTodos(todos.filter((t) => t !== todo))

            }}
            style={{
              marginTop: 5,
              marginBottom: 5,
              width: "100%",
            }}
          >
            {todo}
          </Text>
        ))}
      </ScrollView> */}
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 100,
    padding: 20,

  },
});
