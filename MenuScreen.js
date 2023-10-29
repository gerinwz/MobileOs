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
        {/* "Calculadora" Button */}
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "blue" }]}
          onPress={() => navigation.navigate("Calculator")}
        >
          <Text style={styles.buttonText}>Calculadora</Text>
        </TouchableOpacity>
        {/* "OS Form */}
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "blue" }]}
          onPress={() => navigation.navigate("OSForm")}
        >
          <Text style={styles.buttonText}>Sistema de OS</Text>
        </TouchableOpacity>

        {/* "Cálculo de Data" Button */}
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "blue" }]}
          onPress={() => navigation.navigate("DateCalculator")}
        >
          <Text style={styles.buttonText}>Cálculo de Data</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "blue" }]}
          onPress={() => navigation.navigate("DateCalculator")}
        >
          <Text style={styles.buttonText}>Calculo Idade</Text>
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
