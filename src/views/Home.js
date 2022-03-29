import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MinhasSalas from "./MinhasSalas.js";
import Config from "./Config.js";
import Perfil from "./Perfil";
<View>
  <Text>usuariooleee</Text>
</View>;

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator>
        <Tab.Screen name="Perfil" component={Perfil} />
        <Tab.Screen name="MinhasSalas" component={MinhasSalas} />
        <Tab.Screen name="Configuração" component={Config} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
