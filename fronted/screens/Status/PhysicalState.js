import { StatusBar, useEffect } from "expo-status-bar";
import { CurrentRenderContext } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Linking, Animated } from "react-native";
import Swiper from "react-native-swiper";
// En esta pantalla {Cristian} desarrolla la "Screen" (pantalla) "Mis rutinas"

export default class Circles extends React.Component {


  render() {
    return (
      <ScrollView>
        <View style={styles.centrar}>
          <TouchableOpacity
            style={styles.suscripciones}>
            <Image
              style={{ marginLeft: -303, marginTop: 10, width: 45, height: 48, marginBottom: 50 }}
              source={require("../../img/telefono.png")}>
            </Image>

            <Image style={{ marginLeft: -300, marginTop: -49, width: 40, height: 40, marginBottom: 50 }}
              source={require("../../img/suscribir.png")}>
            </Image>

            <View>
              <Text style={{
                textAlign: 'center',
                color: '#515151',
                marginLeft: 50,
                marginTop: -145,
                fontSize: 18,
                fontWeight: 'bold'
              }}>Suscribete a la version {'\n'} Premium y obtén funciones!</Text></View>

            <View>
              <Text style={{
                marginLeft: 50,
                marginTop: -70,
                fontSize: 18,
                textAlign: 'center',
                color: '#034813',
                fontWeight: 'bold'
              }}>Tiene el mismo precio que un dulce. {'\n'} Animate al cambio</Text></View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.pesoActual}>

            <Image
              style={{ marginLeft: 314, marginTop: 50, width: 43, height: 42, marginBottom: 50 }}
              source={require("../../img/gym.png")}>
            </Image>

            <Text style={styles.miPesoActual}>Mi peso actual</Text>
            <View>
              <Text style={{
                textAlign: 'center',
                color: '#31B404',
                marginTop: 15,
                fontSize: 21
              }}>280.0kg</Text></View>

            <TouchableOpacity>
              <Image style={{ marginLeft: 336, marginTop: -95, width: 5, height: 28, marginBottom: 50 }}
                source={require("../../img/punto.png")}>
              </Image>
            </TouchableOpacity>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.peso}>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
              <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
              <View>
                <Text style={{ width: 0, textAlign: 'center' }}></Text>
              </View>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 104, transform: [{ rotate: '90deg' }] }}>
              <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
              <View>
                <Text style={{ width: 308, textAlign: 'center', fontWeight: 'bold' }}></Text>
              </View>
            </View>

            <Image
              style={{
                marginLeft: 1, marginTop: -83
                , width: 43, height: 42, marginBottom: 50
              }}
              source={require("../../img/medida.png")}>
            </Image>

            <Text style={styles.imc}> IMC </Text>
            <View>
              <Text style={{
                color: '#31B404',
                marginLeft: -114,
                marginTop: 5,
                fontSize: 17,
              }}> 168.28 </Text></View>

            <View>
              <Text style={styles.tasaDeGrasa}> Tasa de grasa (%)</Text>
            </View>
            <View><Text style={{
              color: '#31B404',
              marginLeft: 185,
              marginTop: -30,
              fontSize: 17,
            }}> 186.46% </Text></View>

            <View><Text style={styles.pesoIdeal}> Peso ideal </Text></View>
            <View><Text style={{
              color: '#31B404',
              marginLeft: 1,
              marginTop: -2,
              fontSize: 17,
            }}> 59.9 - 80.7 kg </Text></View>
          </TouchableOpacity>

          <TouchableOpacity //onPress={() => { this.props.navigation.navigate("ExerciseScreensStack") }}
            style={styles.container}>

            <View style={styles.image}>
              <StatusBar style="auto" />
              <Swiper
                autoplayTimeout={9.1}
                loop={true}
                autoplay={true}
                dotColor="#fff"
                activeDotColor={"#fff"}
              >

                <Image
                  source={require("../../img/flexiones.gif")}
                  resizeMode="center"
                  style={styles.image}
                />

                <Image
                  source={require("../../img/abdomen.gif")}
                  resizeMode="center"
                  style={styles.image}
                />

                <Image
                  source={require("../../img/abdomenPierna.gif")}
                  resizeMode="center"
                  style={styles.image}
                />
              </Swiper>
            </View>
            <Text style={styles.guiaDeEjercicios}> Guia de ejercicios </Text>

            <TouchableOpacity>
              <Image style={{ marginLeft: 336, marginTop: -150, width: 6, height: 28 }}
                source={require("../../img/punto.png")}>
              </Image>
            </TouchableOpacity>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.medidas}>

            <Text style={{
              fontSize: 20,
              marginTop: 110,
              marginLeft: -10,
              fontWeight: "bold",
            }}> Mis medias</Text>

            <View>
              <Text style={{
                fontWeight: "bold",
                fontSize: 15,
                marginLeft: -110,
                marginTop: 20,
              }}> Brazo D </Text>
            </View>

            <Image
              style={{
                marginLeft: -171, marginTop: 8
                , width: 43, height: 42, marginBottom: 50
              }}
              source={require("../../img/musculo1.png")}>
            </Image>

            <View>
              <Text style={{
                fontWeight: "bold",
                fontSize: 15,
                marginLeft: 182,
                marginTop: -120,
              }}> Brazo I </Text>
            </View>

            <Image
              style={{
                marginLeft: 184, marginTop: -92
                , width: 43, height: 42, marginBottom: 50
              }}
              source={require("../../img/musculo2.png")}>
            </Image>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 60, transform: [{ rotate: '90deg' }] }}>
              <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
              <View>
                <Text style={{ width: 290, textAlign: 'center', fontWeight: 'bold' }}></Text>
              </View>
            </View>

          </TouchableOpacity>

          <TouchableOpacity
            style={styles.fatiga}
          >

            <TouchableOpacity>
              <Image style={{ marginLeft: 336, marginTop: 2, width: 6, height: 28 }}
                source={require("../../img/punto.png")}>
              </Image>
            </TouchableOpacity>

            <Image style={{ marginLeft: 1, marginTop: -20, width: 132, height: 125 }}
              source={require("../../img/linea.png")}>
            </Image>

            <Image style={{ marginLeft: 1, marginTop: -115, width: 50, height: 50 }}
              source={require("../../img/trapecio.png")}>
            </Image>

            <Text style={{
              fontSize: 17,
              marginTop: -75,
              fontWeight: "bold",
              alignItems: "center"
            }}> Fatiga muscular </Text>

            <Text style={{
              marginLeft: -277,
              marginTop: 35,
              fontSize: 17,
              fontWeight: "bold"
            }}> Trapecio </Text>

            <Text style={{
              fontSize: 17,
              alignItems: "center",
              fontWeight: "bold"
            }}> Estado Muscular </Text>

          </TouchableOpacity>

          <TouchableOpacity //onPress={() => { this.props.navigation.navigate("Entrenamiento") }}
            style={styles.entrenamiento}>

            <View>
              <StatusBar style="auto" />
              <Swiper
                autoplayTimeout={5}
                loop={true}
                autoplay={true}
                dotColor="#fff"
                activeDotColor={"#fff"}
              >

                <Image
                  source={require("../../img/entrenamientos/caminar.gif")}
                  resizeMode="center"
                  style={styles.imagenes}
                />

                <Image
                  source={require("../../img/entrenamientos/antes.gif")}
                  resizeMode="center"
                  style={styles.imagenes}
                />

                <Image
                  source={require("../../img/entrenamientos/despues.gif")}
                  resizeMode="center"
                  style={styles.imagenes}
                />
              </Swiper>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.frases}
          >

            <Text style={styles.fraseTexto}>Frases del dia</Text>


            <View>
              <Text style={styles.frase1}>
                "No te vayas dejando algo sin terminar."
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.rutinaCalendario}
          >

            <Image
              source={require("../../img/rutina/rutinaa.png")}
              resizeMode="center"
              style={styles.AA}
            />

            <Image
              source={require("../../img/rutina/rutina.png")}
              resizeMode="center"
              style={styles.A}
            />

            <Text style={styles.rutina}>Entrenamientos</Text>

            <View>
              <Text style={styles.rutinaA}>Rutina A

              </Text>
            </View>
          </TouchableOpacity>

        </View >
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  centrar: {
    flex: 1,
    marginTop: 10,
    alignItems: 'center',
    alignContent: 'center',

  },
  suscripciones: {
    width: 370,
    height: 180,
    marginLeft: 10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffcc50',
  },

  pesoActual: {
    width: 370,
    height: 140,
    marginTop: 10,
    marginLeft: 10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffc340',
  },
  miPesoActual: {
    fontSize: 21,
    marginTop: -150,
    fontWeight: "bold",
    textAlign: 'center'
  },

  peso: {
    width: 370,
    height: 160,
    marginTop: 10,
    marginLeft: 10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffcc50',
  },
  imc: {
    fontSize: 18,
    marginTop: -205,
    marginLeft: -172,
    fontWeight: "bold",
  },
  tasaDeGrasa: {
    fontSize: 18,
    marginTop: -60,
    marginLeft: 190,
    fontWeight: "bold",
  },
  pesoIdeal: {
    fontSize: 17,
    marginTop: 4,
    marginLeft: 1,
    fontWeight: "bold",
  },

  container: {
    flex: 1,
    width: 370,
    height: 160,
    marginTop: 10,
    marginLeft: 10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 370,
    height: 160,
    marginTop: -4,
    marginBottom: 50,
    alignItems: "center",
    justifyContent: "center"
  },
  guiaDeEjercicios: {
    fontSize: 17,
    marginTop: -78,
    fontWeight: "bold",
    alignItems: 'center',
  },

  medidas: {
    width: 370,
    height: 140,
    marginTop: 10,
    marginLeft: 10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffcc50',
  },

  fatiga: {
    width: 370,
    height: 115,
    marginTop: 10,
    marginLeft: 10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffcc50',
  },

  entrenamiento: {
    flex: 1,
    width: 370,
    height: 160,
    marginTop: 10,
    marginLeft: 10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  imagenes: {
    width: 210,
    height: 260,
    marginTop: -44,
    marginLeft: 80,
  },

  frases: {
    width: 370,
    height: 160,
    marginTop: 10,
    marginLeft: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffcc50',
  },
  fraseTexto: {
    height: 160,
    fontSize: 18,
    marginTop: 10,
    marginLeft: 10,
    alignItems: "center",
  },
  frase1: {
    fontSize: 20,
    marginTop: -100,
    alignItems: "center",
  },

  rutinaCalendario: {
    width: 370,
    height: 100,
    marginTop: 10,
    marginLeft: 10,
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: '#ffcc50',
  },
  rutina: {
    marginTop: -90,
    fontSize: 18,
    fontWeight: "bold",
  },
  A: {
    width: 60,
    height: 50,
    marginTop: -50,
    marginLeft: 315,
  },
  AA: {
    width: 60,
    height: 50,
    marginTop: 40,
    marginLeft: -315,
  },
  rutinaA: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "bold",
  }
})