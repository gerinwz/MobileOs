import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const DateCalculatorScreen = ({ navigation }) => {
  const [birthYear, setBirthYear] = useState("");
  const [age, setAge] = useState("");

  function calculateAge() {
    const currentYear = new Date().getFullYear();
    const calculatedAge = currentYear - parseInt(birthYear);
    setAge(calculatedAge.toString());
  }

  return (
    <ImageBackground
      source={require("./assets/backgroud.jpg")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Cálculo de Idade</Text>
        <TextInput
          style={styles.input}
          placeholder="Ano de Nascimento"
          keyboardType="numeric"
          onChangeText={(birthYear) => setBirthYear(birthYear)}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={calculateAge}>
            <Text style={styles.buttonText}>Calcular Idade</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Menu")}
          >
            <Text style={styles.buttonText}>Voltar ao Menu</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.result}>Idade: {age}</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: "white",
  },
  input: {
    width: "100%",
    padding: 10,
    marginBottom: 10,
    backgroundColor: "white",
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 10,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  result: {
    fontSize: 20,
    marginTop: 20,
    color: "white",
  },
});

export default DateCalculatorScreen;
