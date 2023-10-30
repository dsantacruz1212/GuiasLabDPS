import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

export default function Dogs() {
  const breedsData = [
    { name: 'Akita Inu', country: 'Japón', image: require("../img/perros/akitainu.jpg") },
    { name: 'Bulldog Inglés', country: 'Reino Unido', image: require("../img/perros/bulldogingles.jpg") },
    { name: 'Pastor Alemán', country: 'Alemania', image: require("../img/perros/pastoraleman.jpg")},
    { name: 'Husky Siberiano', country: 'Rusia', image: require("../img/perros/huskysiberiano.jpg") },
    { name: 'Dóberman', country: 'Alemania', image: require("../img/perros/doberman.jpg") },
    { name: 'Cane Corso', country: 'Italia', image: require("../img/perros/canecorso.jpg") },
    { name: 'Dogo Argentino', country: 'Argentina', image: require("../img/perros/dogoargentino.jpg") },
    { name: 'Chihuahua', country: 'México', image: require("../img/perros/chihuahua.jpg") },
    { name: 'Malamute de Alaska', country: 'Estados Unidos', image: require("../img/perros/malamutedealaska.jpg") },
    { name: 'Perro de Agua Español', country: 'España', image: require("../img/perros/perrodeagua.jpg") },
    { name: 'Bóxer', country: 'Alemania', image: require("../img/perros/boxer.jpg") },
    { name: 'Basenji', country: 'República Democrática del Congo', image: require("../img/perros/basenji.jpg") },
    { name: 'Shiba Inu', country: 'Japón', image: require("../img/perros/shibainu.jpg")},
    { name: 'Cocker Spaniel', country: 'Reino Unido', image: require("../img/perros/cockerspaniel.jpg") },
    { name: 'Pinscher Miniatura', country: 'Alemania', image: require("../img/perros/pinscher.jpg")}
  ];

  const renderBreedItem = (breed, index) => (
    <View style={styles.contenedorRaza} key={index}>
      <Image style={styles.img} source={breed.image} />
      <View style={styles.ContenedorTexto}>
        <Text style={styles.title}>{breed.name}</Text>
        <Text style={styles.subtitle}>{breed.country}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.contenedorMain}>
      <ScrollView>
        {breedsData.map((breed, index) => renderBreedItem(breed, index))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    margin: 10,
    width: 120,
    height: 120,
    borderRadius: 15,
  },
  title: {
    alignContent: "center",
    fontSize: 30,
    marginLeft: 15,
  },
  subtitle: {
    flex: 1,
    marginLeft: 15,
  },
  contenedorMain: {
    flex: 1,
    justifyContent: "center",
  },
  contenedorRaza: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  ContenedorTexto: {
    flex: 1,
  },
});
