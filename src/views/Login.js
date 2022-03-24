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
import SourceSansProLight from "../../assets/SourceSansPro/SourceSansPro-Light.ttf";
import SourceSansProRegular from "../../assets/SourceSansPro/SourceSansPro-Regular.ttf";
import SourceSansProBold from "../../assets/SourceSansPro/SourceSansPro-Bold.ttf";

// npm install react-native-elements
// mudar para react-native-vector-icons/fontAwesome
import Icon from "react-native-vector-icons/FontAwesome";
import { Button } from "react-native-elements";
// npm install react-native-animatable
import * as Animatable from "react-native-animatable";

import BackgroundImage from "../../assets/logo3.png";
import styles from "./components/mainStyles";

export default function Login({ navigation }) {
  const [nome, setNome] = useState(null);
  const [email, setEmail] = useState(null);
  const [senha, setSenha] = useState(null);

  const entrar = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Home" }],
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
              onChangeText={(value) => setNome(value)}
              placeholder="nome"
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
              onChangeText={(value) => setSenha(value)}
              placeholder="senha"
              secureTextEntry={true}
              autoCapitalize="none"
            />
          </View>
          <Text style={styles.fpText}>Esqueci minha senha?</Text>
          <Button
            icon={<Icon name="check" size={15} color="#FB5A48" />}
            title="ENTRAR"
            titleStyle={styles.loginButtonText}
            buttonStyle={styles.loginButton}
            onPress={() => entrar()}
          />

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
