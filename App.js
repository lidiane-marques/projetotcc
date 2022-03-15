import React, { useState } from "react";
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

// expo install expo-font
import { useFonts } from "expo-font";

// https://fonts.google.com/specimen/Source+Sans+Pro
import SourceSansProLight from "./assets/SourceSansPro/SourceSansPro-Light.ttf";
import SourceSansProRegular from "./assets/SourceSansPro/SourceSansPro-Regular.ttf";
import SourceSansProBold from "./assets/SourceSansPro/SourceSansPro-Bold.ttf";

// npm install react-native-elements
import { Icon } from "react-native-elements";

// npm install react-native-animatable
import * as Animatable from "react-native-animatable";

import BackgroundImage from "./assets/logo3.png";

export default function login() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const cadastro = () => {
    alert(nome);
    alert(senha);
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
              name="person"
              type="ionicons"
              color="#FB5A48"
            />
            <TextInput
              style={styles.input}
              onChangeText={(text) => setNome(text)}
              placeholder="nome"
              autoCapitalize="none"
              keyboardType="email-address"
              textContentType="emailAddress"
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
              onChangeText={(text) => setSenha(text)}
              placeholder="senha"
              secureTextEntry={true}
              autoCapitalize="none"
            />
          </View>
          <Text style={styles.fpText}>Esqueci minha senha?</Text>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => cadastro()}
          >
            <Text style={styles.loginButtonText}>Entrar</Text>
          </TouchableOpacity>
          <Text style={styles.registerText}>
            não tem uma conta?
            <Text style={{ color: "#FB5A48", fontFamily: "SourceSansProBold" }}>
              {"Cadastre-se"}
            </Text>
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  titleText: {
    position: "absolute",
    top: Dimensions.get("screen").height * 0.1,
    alignSelf: "center",
    color: "#fff",
    fontFamily: "SourceSansProBold",
    fontSize: 60,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
  bottomView: {
    backgroundColor: "#05A895B2",
    opacity: 0.95,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 10,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  loginText: {
    fontFamily: "SourceSansProBold",
    fontSize: 24,
    marginTop: 12,
    marginBottom: 4,
  },
  inputView: {
    height: 40,
    borderRadius: 10,
    backgroundColor: "#05A895B2",
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  inputIcon: {
    paddingHorizontal: 8,
  },
  input: {
    height: 40,
    flex: 1,
    fontFamily: "SourceSansProRegular",
    fontSize: 16,
    color: "#333",
  },
  loginButton: {
    backgroundColor: "#05A895B2",
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  loginButtonText: {
    color: "#fff",
    fontFamily: "SourceSansProBold",
    alignSelf: "center",
    fontSize: 18,
  },
  registerText: {
    alignSelf: "center",
    marginTop: 12,
    fontFamily: "SourceSansProRegular",
    fontSize: 16,
  },
  fpText: {
    marginTop: 10,
    alignSelf: "flex-end",
    fontFamily: "SourceSansProBold",
    fontSize: 16,
    color: "#FB5A48",
  },
});
