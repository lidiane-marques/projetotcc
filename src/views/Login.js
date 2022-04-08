import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
  Keyboard,
} from "react-native";

//conexao firebase

import { useFonts } from "expo-font";

// https://fonts.google.com/specimen/Source+Sans+Pro
import SourceSansProLight from "../../assets/SourceSansPro/SourceSansPro-Light.ttf";
import SourceSansProRegular from "../../assets/SourceSansPro/SourceSansPro-Regular.ttf";
import SourceSansProBold from "../../assets/SourceSansPro/SourceSansPro-Bold.ttf";
import MaterialCommunityIcons from "@expo/vector-icons";
import Icon from "react-native-vector-icons/FontAwesome";
import { Button } from "react-native-elements";

import * as Animatable from "react-native-animatable";

import BackgroundImage from "../../assets/logo3.png";
import styles from "./components/mainStyles";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConecton";
export default function Login({ navigation }) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [errorLogin, setErrorLogin] = useState(null);

  async function Logar() {
    await signInWithEmailAndPassword(auth, email, password)
      .then((value) => {
        alert("logado com sucesso \n" + value.user.uid);
      })
      .catch((error) => console.log(error));

    navigation.reset({
      index: 0,
      routes: [{ name: "Tab" }],
    });
  }

  const cadastrar = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Cadastro" }],
    });
  };
  const entrar = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Tab" }],
    });
  };

  const [loaded] = useFonts({
    SourceSansProLight,
    SourceSansProRegular,
    SourceSansProBold,
  });

  if (!loaded || !BackgroundImage) {
    return <Text>Loading...</Text>;
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <Image
            style={{
              flex: -10,
              width: null,
              margin: 60,
              marginTop: 160,
            }}
            source={BackgroundImage}
          />
        </View>
        <Animatable.Image />
        <Animatable.Text
          style={styles.titleText}
          animation="fadeInUp"
          delay={1200}
        ></Animatable.Text>
        <View style={styles.bottomView}>
          <Text style={styles.loginText}>login</Text>
          <View style={styles.inputView}>
            <Icon
              style={styles.inputIcon}
              name="user"
              type="ionicons"
              color="#FB5A48"
            />
            <TextInput
              style={styles.input}
              onChangeText={(text) => setEmail(text)}
              value={email}
              placeholder="email"
              autoCapitalize="none"
              keyboardType="email-address"
              textContentType="emailAddress"
              useState
            />
          </View>
          <View style={styles.inputView}>
            <Icon
              style={styles.inputIcon}
              name="lock"
              type="ionicons"
              color="#FB5A48"
            />
            <TextInput
              style={styles.input}
              onChangeText={(text) => setPassword(text)}
              value={password}
              placeholder="senha"
              secureTextEntry={true}
              autoCapitalize="none"
            />
            {errorLogin === true ? (
              <View style={styles.contentAlert}>
                <MaterialCommunityIcons
                  name="alert-circle"
                  size={25}
                  color="#FB5A48"
                />
                <Text style={styles.textAlert}> Srnha ou e-mail invalido</Text>
              </View>
            ) : (
              <View />
            )}
          </View>

          <Text style={styles.fpText}>Esqueci minha senha?</Text>
          {/* //{email==="" || senha === "" ? :}:  */}
          <Button
            icon={<Icon name="check" size={15} color="#FB5A48" />}
            title="ENTRAR"
            titleStyle={styles.loginButtonText}
            buttonStyle={styles.loginButton}
            onPress={() => Logar()}
          />

          <Text style={styles.registerText}>
            não tem uma conta?
            <Text
              style={{ color: "#FB5A48", fontFamily: "SourceSansProBold" }}
              onPress={() => cadastrar()}
            >
              {"Cadastre-se"}
            </Text>
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
