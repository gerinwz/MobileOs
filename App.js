import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MenuScreen from "./MenuScreen";
import OSForm from "./OSForm";
import LoginScreen from "./LoginScreen"; // Importe o novo componente

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: "Login" }}
        />
        <Stack.Screen
          name="Menu"
          component={MenuScreen}
          options={{ title: "Menu" }}
        />
        <Stack.Screen
          name="OSForm"
          component={OSForm}
          options={{ title: "Ordem de servico" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
