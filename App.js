import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/views/Login";
import User from "./src/views/User";
import Home from "./src/views/Home";

const Stack = createNativeStackNavigator();

export default nave = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="User" component={User} />
        <Stack.Screen name="Home" component={Home} />

        <Stack.Screen name="Cadastro" component={cadastro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
