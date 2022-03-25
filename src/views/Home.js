import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

<View>
  <Text>usuariooleee</Text>
</View>;

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="perfil" component={perfil} />
        <Tab.Screen name="minhas salas" component={minhasSalas} />
        <Tab.Screen name="sair" component={sair} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
