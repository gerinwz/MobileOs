import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Text,
} from "react-native";

const MenuScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("./assets/Metal.jpeg")}
      style={styles.background}
    >
      <View style={styles.container}>
        {/* "OS Form */}
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "blue" }]}
          onPress={() => navigation.navigate("OSForm")}
        >
          <Text style={styles.buttonText}>Sistema de OS</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "red" }]} // Estilize o botão de volta como desejado
          onPress={() => navigation.navigate("Login")} // Navegue de volta para a tela de login
        >
          <Text style={styles.buttonText}>Voltar para o Login</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    height: 50,
    borderRadius: 25,
    elevation: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default MenuScreen;
