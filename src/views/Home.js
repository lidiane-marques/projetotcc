import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Perfil from "./Perfil";
<View>
  <Text>usuariooleee</Text>
</View>;

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Perfil" component={Perfil} />
        <Tab.Screen name="minhas salas" component={minhasSalas} />
        <Tab.Screen name="sair" component={sair} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
