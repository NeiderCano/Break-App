import React, { Component } from 'react';
import { Alert, View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import { CheckBox, Input, Icon } from '@rneui/themed';
import { color } from '@rneui/base';


// getBreakHome();


export default class App extends Component {
  // query = async (req, res) => {
  //   const db = await connect();
  //   const [rows] = await db.query('SELECT * FROM ejercicios');   
  //   console.log(rows);
  // }


  constructor(props) {

    super(props);
    this.state = {
      username: '',
      password: '',
      showPassword: true,

    };
  }

  login() { //funcion para logearse y validar los datos ingresados en el formulario  de login en la pantalla de login 

    if (this.state.username == 'break@gmail.com' && this.state.password == '1234') { //validacion de datos ingresados en el formulario de login
      Alert.alert('Bienvenido', ' ' + this.state.username); //alerta de bienvenida al usuario
      this.props.navigation.navigate('Home'); //redireccion a la pantalla de home
    } else {
      Alert.alert('Error', 'Usuario o contraseña incorrectos'); //muestra un alerta de error si los datos ingresados no son correctos o no los ha ingresado
    }
  }


  showPassword = () => { //funcion para mostrar la contraseña
    this.setState({ showPassword: !this.state.showPassword });
    //cambia el estado de la contraseña a mostrar o no mostrar

  }





  render() {
    return (


      <>

        <View style={styles.form}>
          <Image
            style={styles.logo}
            source={require("../../img/logo.png")}
          />
        </View>


        <View style={styles.container} >
          <Text style={styles.titulo}
          > Usuarios </Text>

          
            <Input style={styles.input}
              value={this.state.username.trim()}
              onChangeText={(username) => this.setState({ username })}
              placeholder={'Break@example.com'}
              focusable={true}

              //icono de usuario
              leftIcon={<Icon
                type='material-community'
                name={'account'}
                size={25}
                color={'#000'}


              />}
            />
          

          
            <Input style={styles.input}
              value={this.state.password.trim()}
              onChangeText={(password) => this.setState({ password })}
              onPressOut={this.showPassword}
              placeholder={'Password'}
              secureTextEntry={!this.state.showPassword}
              //secureTextEntry={true}//si la contraseña esta mostrada o no mostrada

              //icono de contraseña
              leftIcon={
                <Icon
                  name={'key'}
                  type='material-community'
                  color={'#000'}
                />
              }


              //icono de mostrar contraseña
              rightIcon={<Icon
                type='material-community'
                size={20}
                color={'grey'}
                name={this.state.showPassword ? 'eye-off' : 'eye'}  //si la contraseña esta mostrada o no mostrada
                onPress={this.showPassword}

              />}
            >
            </Input>
          

          <TouchableOpacity>
            <Text style={styles.olvideContraseña} >Has olvidado la Contraseña?</Text>
          </TouchableOpacity>

          {/* <View style={styles.btnCheckBox}>
          <CheckBox 
            containerStyle={{backgroundColor: 'whitesmoke'}}
            title='Recordarme'
            checked={this.state.checked}
            onPress={() => this.setState({ checked: !this.state.checked })}

          />
        </View> */}


          <TouchableOpacity onPress={() => this.login()} //funcion para logearse y validar los datos ingresados en el formulario  de login en la pantalla de login
            style={styles.button}>
            <Text style={styles.IniciarSeccion}>
              INICIAR SESIÓN
            </Text>
          </TouchableOpacity>




          <TouchableOpacity onPress={() => this.props.navigation.navigate('CreateAccount')}>
            <Text style={styles.Account}
            >No tienes cuenta? <Text style={{ color: '#121212' }}>Crear</Text></Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }

}










const styles = StyleSheet.create({

  form: {
    marginLeft: '4%',
    marginRight: '4%',
    marginTop: '10%',
    backgroundColor: '#808080',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 50,
    borderTopEndRadius: 0,
    borderRadius: 20,

    elevation: 10,
    width: '92%',
    height: '40%',

  },
  //Estilos del Login
  container: {
    flex: 1,
    marginLeft: '4%',
    marginRight: '4%',
    backgroundColor: '#F5F5F5',
    marginTop: '-25%',
    marginBottom: '5%',
    alignItems: 'center',
    borderTopLeftRadius: 50,
    borderTopEndRadius: 0,
    borderRadius: 20,
    elevation: 10,
  },

  

  //Estilos del input
  input: {
    justifyContent: 'center',
    marginLeft: '4%',
    marginRight: '4%',
  },


  //estilo del logo
  logo: {

    height: 110,
    width: 250,
    marginBottom: 20,

  },



  //Estilos del titulo
  titulo: {
    marginTop: '20%',
    color: '#696969',
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 40,

  },



  //olvide la Contraseña
  olvideContraseña: {

    fontWeight: "bold",
    color: '#696969',
    marginLeft: 150,
    marginTop: -20,

  },


  //estilos del boton
  button: {

    backgroundColor: '#efb810',
    borderRadius: 5,
    height: 40,
    width: 150,
    marginTop: '15%',
    elevation: 3,

    borderTopEndRadius: 0,
    borderTopLeftRadius: 15,

  },


  //Estilos del texto de iniciar sesion
  IniciarSeccion: {

    color: '#121212',
    fontSize: 14,
    fontWeight: "bold",
    alignSelf: 'center',
    marginTop: 10,

  },

  //Estilos del boton de crear cuenta
  Account: {
    flex: 1,
    color: '#696969',
    fontWeight: "bold",
    fontSize: 14,
    marginLeft: 0,
    marginTop: '30%',

  },

  //Estilos del checkbox
  // checkbox: {
  //   backgroundColor: "white",

  // },

  //  //Estilos del boton recordar usuario
  // btnCheckBox: {
  //   marginTop:-40,
  //   // backgroundColor: "white",
  //   marginRight: 180,


  // },

});






