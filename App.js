import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/views/Login";
import User from "./src/views/User";
import Home from "./src/views/Home";
import Cadastro from "./src/views/Cadastro";
import Tab from "./src/views/Tab";
const Stack = createNativeStackNavigator();

export default nave = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="User" component={User} options={{}} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Tab" component={Tab} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
