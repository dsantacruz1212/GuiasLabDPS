import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  Dimensions,
  Modal,
  Button,
  TouchableHighlight,
} from "react-native";

const App = () => {
  const [modalVisiblePlaya, setModalVisiblePlaya] = useState(false);
  const [modalVisibleComida, setModalVisibleComida] = useState(false);
  const [modalVisibleRutas, setModalVisibleRutas] = useState(false);
  return (
    <>
      <ScrollView>
        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisibleRutas}
          onRequestClose={() => {
            alert("Modal has been closed.");
          }}
        >
          <View style={styles.vistamodal}>
            <View style={styles.modal}>
              <Text style={styles.subtitulo}>Rutas Salvadoreñas</Text>
              <Text>El Salvador cuenta con hermosas rutas para recorrer.</Text>
              <Button
                title="Cerrar"
                onPress={() => setModalVisibleRutas(!modalVisibleRutas)}
              ></Button>
            </View>
          </View>
        </Modal>
        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisiblePlaya}
          onRequestClose={() => {
            alert("Modal has been closed.");
          }}
        >
          <View style={styles.vistamodal}>
            <View style={styles.modal}>
              <Text style={styles.subtitulo}>Ir a la playa</Text>
              <Text>
                El Salvador cuenta con hermosas playas a nivel de Centroamerica.
              </Text>
              <Button
                title="Cerrar"
                onPress={() => setModalVisiblePlaya(!modalVisiblePlaya)}
              ></Button>
            </View>
          </View>
        </Modal>
        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisibleComida}
          onRequestClose={() => {
            alert("Modal has been closed.");
          }}
        >
          <View style={styles.vistamodal}>
            <View style={styles.modal}>
              <Text style={styles.subtitulo}>Comida Salvadoreña</Text>
              <Text>El Salvador cuenta con deliciosa comida.</Text>
              <Button
                title="Cerrar"
                onPress={() => setModalVisibleComida(!modalVisibleComida)}
              ></Button>
            </View>
          </View>
        </Modal>

        <View>
          <Image
            style={(style = styles.banner)}
            source={require("./src/img/bg.jpg")}
          />
        </View>
        <Text style={styles.titulo}>Que Hacer en El Salvador</Text>
        <View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            bounces
            snapToAlignment="center"
          >
            <View style={styles.imgcont}>
              <TouchableHighlight
                onPress={() => {
                  setModalVisiblePlaya(!modalVisiblePlaya);
                }}
              >
                <Image
                  style={styles.ciudad}
                  source={require("./src/img/actividad1.jpg")}
                />
              </TouchableHighlight>
            </View>
            <View style={styles.imgcont}>
              <Image
                style={styles.ciudad}
                source={require("./src/img/actividad2.jpg")}
              />
            </View>
            <View style={styles.imgcont}>
              <Image
                style={styles.ciudad}
                source={require("./src/img/actividad3.jpg")}
              />
            </View>
            <View style={styles.imgcont}>
              <Image
                style={styles.ciudad}
                source={require("./src/img/actividad4.jpg")}
              />
            </View>
            <View style={styles.imgcont}>
              <Image
                style={styles.ciudad}
                source={require("./src/img/actividad5.jpg")}
              />
            </View>
          </ScrollView>
        </View>

        <Text style={styles.titulo}>Platillos Salvadoreños</Text>

        <View>
          <View>
            <TouchableHighlight
              onPress={() => {
                setModalVisibleComida(!modalVisibleComida);
              }}
            >
              <Image
                style={styles.mejores}
                source={require("./src/img/mejores1.jpg")}
              />
            </TouchableHighlight>
          </View>
          <View>
            <Image
              style={styles.mejores}
              source={require("./src/img/mejores2.jpg")}
            />
          </View>
          <View>
            <Image
              style={styles.mejores}
              source={require("./src/img/mejores3.jpg")}
            />
          </View>
        </View>

        <Text style={styles.titulo}>Rutas Turisticas</Text>

        <View style={styles.listado}>
          <View style={styles.listaitem}>
            <TouchableHighlight
              onPress={() => {
                setModalVisibleRutas(!modalVisibleRutas);
              }}
            >
              <Image
                style={styles.mejores}
                source={require("./src/img/ruta1.jpg")}
              />
            </TouchableHighlight>
          </View>

          <View style={styles.listaitem}>
            <Image
              style={styles.mejores}
              source={require("./src/img/ruta2.jpg")}
            />
          </View>
          <View style={styles.listaitem}>
            <Image
              style={styles.mejores}
              source={require("./src/img/ruta3.jpg")}
            />
          </View>
          <View style={styles.listaitem}>
            <Image
              style={styles.mejores}
              source={require("./src/img/ruta4.jpg")}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  imgcont: {
    width: Dimensions.get("window").width,
  },
  listaitem: { flexBasis: "49%" },
  banner: {
    height: 250,
    flex: 1,
    borderRadius: 15,
    width: Dimensions.get("window").width,
  },
  mejores: {
    width: "100%",
    height: 200,
    marginVertical: 5,
    borderRadius: 15,
  },
  vistamodal: {
    backgroundColor: "#000000aa",
    flex: 1,
  },
  subtitulo: {
    fontWeight: "bold",
    fontSize: 14,
    justifyContent: "center",
  },
  modal: {
    backgroundColor: "#fff",
    margin: 50,
    padding: 40,
    borderRadius: 10,
    flex: 1,
  },

  listado: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  titulo: {
    fontWeight: "bold",
    fontSize: 24,
    marginVertical: 18,
    textAlign: "center",
  },
  ciudad: {
    width: Dimensions.get("window").width - 10,
    height: 300,
    resizeMode: "stretch",
    borderRadius: 15,
    margin: 5,
  },
});
export default App;
