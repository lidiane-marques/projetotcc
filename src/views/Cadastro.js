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

import firebase from "../config/firebaseConecton";

// expo install expo-font
import { useFonts } from "expo-font";

// https://fonts.google.com/specimen/Source+Sans+Pro
import SourceSansProLight from "../../assets/SourceSansPro/SourceSansPro-Light.ttf";
import SourceSansProRegular from "../../assets/SourceSansPro/SourceSansPro-Regular.ttf";
import SourceSansProBold from "../../assets/SourceSansPro/SourceSansPro-Bold.ttf";

// npm install react-native-elements
// mudar para react-native-vector-icons/fontAwesome
import Icon from "react-native-vector-icons/FontAwesome";
import { Button } from "react-native-elements";
// npm install react-native-animatable
import * as Animatable from "react-native-animatable";

import BackgroundImage from "../../assets/CADASTRAR.png";
import styles from "./components/mainStyles";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
export default function Cadastro({ navigation }) {

  const database = firebase.firestore()


  const [nome, setNome] = useState(null);
  const [email, setEmail] = useState(null);
  const [senha, setSenha] = useState(null);
  const [errorLogin, setErrorLogin] = useState(null);

  const Registerfirebase = () => {
   

const auth = getAuth().createUserWithEmailAndPassword( email, senha).then((userCredential) => {
    
    let user = userCredential.user;
    console.log(user)
    navigation.navigate("Login")
  
  })
  .catch((error) => {
    setErrorLogin(true)
    let errorCode = error.code;
    let errorMessage = error.message;
    // ..
  });



  }

  const Cadastrar = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }],
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
        <Animatable.Text></Animatable.Text>
        <View style={[styles.bottomView, specificStyles.bottomViewC]}>
          <Text style={styles.loginText}>login</Text>
          <View style={[styles.inputView, specificStyles.inputViewC]}>
            <Icon
              style={styles.inputIcon}
              name="user"
              type="ionicons"
              color="#FB5A48"
            />
            <TextInput
              style={styles.input}
              onChangeText={(value) => setNome(value)}
              placeholder="nome"
              autoCapitalize="none"
              keyboardType="email-address"
              textContentType="emailAddress"
              useState
            />
          </View>
          <View style={[styles.inputView, specificStyles.inputViewC]}>
            <Icon
              style={styles.inputIcon}
              name="email"
              type="ionicons"
              color="#FB5A48"
            />
            <TextInput
              style={styles.input}
              onChangeText={(value) => setEmail(value)}
              placeholder="email"
              autoCapitalize="none"
              keyboardType="email-address"
              textContentType="emailAddress"
              useState
            />
          </View>
          <View style={[styles.inputView, specificStyles.inputViewC]}>
            <Icon
              style={styles.inputIcon}
              name="lock"
              type="ionicons"
              color="#FB5A48"
            />
            <TextInput
              style={styles.input}
              onChangeText={(value) => setSenha(value)}
              placeholder="senha"
              secureTextEntry={true}
              autoCapitalize="none"
            />
          </View>
          <Button
            icon={<Icon name="check" size={15} color="#FB5A48" />}
            title="CADASTRAR"
            titleStyle={styles.loginButtonText}
            buttonStyle={styles.loginButton}
            onPress={() => Registerfirebase()}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
const specificStyles = StyleSheet.create({
  inputViewC: {
    height: 40,
    borderRadius: 10,
    backgroundColor: "#05A895B2",
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 18,
  },
  bottomViewC: {
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
});
