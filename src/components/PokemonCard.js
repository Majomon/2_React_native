import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { typesColors } from "../utils/constants";
import { capitalize } from "lodash";

export default function PokemonCard(props) {
  const { pokemon } = props;
  const bgStyles = {
    backgroundColor: typesColors[pokemon.types[0]],
    ...styles.bgStyles,
  };

  return (
    <TouchableWithoutFeedback>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={bgStyles}>
            {pokemon.id.length > 6 ? (
              <Text style={styles.id}>BDD</Text>
            ) : (
              <Text style={styles.id}>#{`${pokemon.id}`.padStart(3, 0)}</Text>
            )}
            <Text style={styles.name}>{capitalize(pokemon.name)}</Text>
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
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  bgStyles: {
    flex: 1,
    borderRadius: 15,
    padding: 10,
  },
  id: {
    position: "absolute",
    right: 10,
    top: 10,
    color: "#fff",
    fontSize: 11,
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 10,
  },
  img: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 90,
    height: 90,
  },
});
