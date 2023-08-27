import { useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [todos, setTodos] = useState<string[]>([]);

  const [input, setInput] = useState<string>("");

  return (
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
          }}
        />
      </View>

      <FlatList
        style={{ width: "100%" }}
        keyExtractor={(item, index) => index.toString()}
        alwaysBounceVertical={true}
        data={todos}
        renderItem={(todo) => {
          return <Text>{todo.item}</Text>;
        }}
      />

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
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 100,
    padding: 20,
  },
});
