import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import AccountScreen from "../screens/Account";
import FavoriteScreen from "../screens/Favorite";
import PokedexScreen from "../screens/Pokedex";
import RenderPokeball from "./RenderPokeball";
import { StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Favoritos"
        component={FavoriteScreen}
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size} />
          ),
          tabBarStyle: { backgroundColor: "#aef383" }, // Aplica el fondo negro al TabBar
          headerTitleStyle: { fontWeight: "bold" }, // Define el estilo del texto del header
          headerTitleAlign: "center", // Alinea el texto del header al centro
        }}
      />
      <Tab.Screen
        name="Pokedex"
        component={PokedexScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => RenderPokeball(),
          tabBarStyle: { backgroundColor: "orange" }, // Aplica el fondo negro al TabBar

          headerTitleAlign: "center", // Alinea el texto del header al centro
        }}
      />
      <Tab.Screen
        name="Mi cuenta"
        component={AccountScreen}
        options={{
          tabBarLabel: "Mi cuenta",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
          tabBarStyle: { backgroundColor: "orange" }, // Aplica el fondo negro al TabBar

          headerTitleAlign: "center", // Alinea el texto del header al centro
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  probando: {
    fontSize: 200,
    backgroundColor: "black",
  },
});
