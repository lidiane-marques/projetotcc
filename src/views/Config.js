import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./components/mainStyles";

export default function cadastro({ navigation }) {
  const sair = () => {
    navigation.reset({});
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text> config eeeeeeeeeeeeeeeee</Text>
      <Button
        icon={<Icon name="check" size={15} color="#FB5A48" />}
        title="SAIR"
        titleStyle={styles.loginButtonText}
        buttonStyle={styles.loginButton}
        onPress={() => navigation.navigate("Login")}
      />
      <StatusBar style="auto" />
    </View>
  );
}
