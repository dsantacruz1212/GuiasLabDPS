import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

export default function Cats() {
    const breedsData = [
        { name: 'Siamés', country: 'Tailandia', image: require("../img/gatos/siames.jpg") },
        { name: 'Persa', country: 'Irán', image: require("../img/gatos/persa.jpg") },
        { name: 'Maine Coon', country: 'Estados Unidos', image: require("../img/gatos/mainecoon.jpg") },
        { name: 'Ragdoll', country: 'Estados Unidos', image: require("../img/gatos/ragdoll.jpg") },
        { name: 'Bengala', country: 'Estados Unidos', image: require("../img/gatos/bengala.jpg") },
        { name: 'Sphynx', country: 'Canadá', image: require("../img/gatos/sphynx.jpg") },
        { name: 'British Shorthair', country: 'Reino Unido', image: require("../img/gatos/british.jpg") },
        { name: 'Scottish Fold', country: 'Reino Unido', image: require("../img/gatos/scottish.jpg") },
        { name: 'Munchkin', country: 'Estados Unidos', image: require("../img/gatos/munchkin.jpg") },
        { name: 'Azul Ruso', country: 'Rusia', image: require("../img/gatos/azulruso.jpg") },
        { name: 'Sagrado de Birmania', country: 'Francia', image: require("../img/gatos/sagradodebirmania.jpg") },
        { name: 'Abisinio', country: 'Etiopía', image: require("../img/gatos/abisino.jpg") },
        { name: 'Birmano', country: 'Birmania', image: require("../img/gatos/birmano.jpg") },
        { name: 'American Shorthair', country: 'Estados Unidos', image: require("../img/gatos/americanshorthair.jpg") },
        { name: 'Noruego de Bosque', country: 'Noruega', image: require("../img/gatos/noruegodelbosque.jpg") }
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
