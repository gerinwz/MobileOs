import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const OSForm = ({ navigation }) => {
  const [valor1, setValor1] = useState("");
  const [valor2, setValor2] = useState("");
  const [resultado, setResultado] = useState("");

  function somar() {
    if (valor1 !== "" && valor2 !== "") {
      const sum = parseFloat(valor1) + parseFloat(valor2);
      setResultado(sum.toString());
    } else {
      setResultado("");
    }
  }

  return (
    <ImageBackground
      source={require("./assets/backgroud.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Calculadora</Text>
        <TextInput
          style={styles.input}
          placeholder="Valor 1"
          keyboardType="numeric"
          onChangeText={(valor1) => setValor1(valor1)}
        />
        <TextInput
          style={styles.input}
          placeholder="Valor 2"
          keyboardType="numeric"
          onChangeText={(valor2) => setValor2(valor2)}
        />
        <TouchableOpacity style={styles.button} onPress={somar}>
          <Text style={styles.buttonText}>Somar</Text>
        </TouchableOpacity>
        <Text style={styles.result}>O resultado é: {resultado}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Menu")}
        >
          <Text style={styles.buttonText}>Voltar ao Menu</Text>
        </TouchableOpacity>
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
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
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

export default OSForm;
