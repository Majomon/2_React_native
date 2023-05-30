import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";

export default function PokemonCard(props) {
  const { pokemon } = props;
  console.log(pokemon);
  return (
    <TouchableWithoutFeedback>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={styles.bg}>
            <Text>{pokemon.name}</Text>
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
    height: 130,
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  bg: {
    backgroundColor: "grey",
  },
  img: {
    position: "absolute",
    width:90,
    height:90
  },
});
