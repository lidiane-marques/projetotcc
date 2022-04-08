import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const sair = () => {
  navigation.reset({
    index: 0,
    routes: [{ name: "Login" }],
  })};
export default function App() {
  return (
    <View style={{ flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",}}>
      <Text> config eeeeeeeeeeeeeeeee</Text>
      <TouchableOpacity style={{ flex: 1, justifyContent: "center", width:200, height:50}} 
      onPress={() =>sair()}
      >
        <Text>sair</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

