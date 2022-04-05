import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import styles from "./components/mainStyles";
import Icon from "react-native-vector-icons/Feather";
import {LinearGradient} from 'expo-linear-gradient';
import MinhasSalas from "./MinhasSalas.js";
import Config from "./Config.js";
import Perfil from "./Perfil";
import Home from "./Home";
<View>
  <Text>homeeee</Text>
</View>;

function PostScreen() {
  return (
    <View style={styles.container}>
      <Text>New Post!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function tab() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            switch (route.name) {
              case "Home":
                iconName = "home";
                break;
              case "perfil":
                iconName = "user";
                break;
              case "Post":
                iconName = "edit";
                break;
              case "Salas":
                iconName = "message-circle";
                break;
              case "Configuração":
                iconName = "settings";
                break;
              default:
                iconName = "circle";
                break;
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
        })}

        tabBarOptions={{
          activeTintColor: "#FB5A48",
          inactiveTintColor: "#000",
          showLabel: false,
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Perfil" component={Perfil} />
        <Tab.Screen
          name="Post"
          component={PostScreen}
          options={() => ({
            tabBarIcon: ({ tintColor }) => (
              <View>
                <LinearGradient
                  style={styles.iconTabRound}
                  start={{ x: 0, y: 1 }}
                  end={{ x: 0, y: 0 }}
                  colors={["#05A895B2", "#FB5A48"]}
                >
                  <Icon name="plus" size={18} color="#FFF" />
                </LinearGradient>
              </View>
            ),
          })}
        />
        <Tab.Screen name="Salas" component={MinhasSalas} />
        <Tab.Screen name="Configuração" component={Config} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
