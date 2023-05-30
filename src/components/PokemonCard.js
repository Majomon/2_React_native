import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { primerLetraMayuscula } from "../utils/primerLetraMayuscula";

export default function PokemonCard(props) {
  const { pokemon } = props;
  console.log(pokemon);
  return (
    <TouchableWithoutFeedback>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={styles.bg}>
            {pokemon.id.length > 6 ? (
              <Text style={styles.id}>BDD</Text>
            ) : (
              <Text style={styles.id}>#{`${pokemon.id}`.padStart(3, 0)}</Text>
            )}
            <Text style={styles.name}>
              {primerLetraMayuscula(pokemon.name)}
            </Text>
            <Image source={{ uri: pokemon.img }} style={styles.img} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 140,
    backgroundColor: "#e9c17d",
    padding: 5,
    margin: 10,
    borderRadius: 15,
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  id: {
    textAlign: "right",
    fontWeight: "bold",

  },
  name: {
    color:"#fff",
    fontSize: 15,
    fontWeight: "bold",
  },
  img: {
    position: "absolute",
    bottom: -80,
    right: 1,
    width: 80,
    height: 80,
  },
});
