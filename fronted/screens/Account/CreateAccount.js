import React, { Component } from 'react';
import { CheckBox, Input, Icon } from '@rneui/themed';

import { Alert, Button, View, StyleSheet, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import ButtonAwasome from "react-native-really-awesome-button/src/themes/cartman";

//import {connect} from '../../../backend/src/database';

// import DatePicker from 'react-native-datepicker';
//import { useState } from 'react';

//import { createStackNavigator } from "@react-navigation/stack";
//import CreateAccount from "../../screens/Account/CreateAccount";


export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Email: '',
            password: '',
            password2: '',
            phone: '',
            UserName: '',
            birthdate: '',
            checked: false,
            checked2: false,
            checked3: false,
            enfermedad: '',
            showPassword: true,

        };
    }


    showPassword = () => {
        this.setState({ showPassword: !this.state.showPassword });
    }


    onLogin = () => { //funcion para crear un usuario
        const { Email, password, password2, phone, UserName, birthdate, enfermedad } = this.state;

        if (Email === '' || password === '' || password2 === '' || phone === '' || UserName === '' || enfermedad === '') {
            Alert.alert('Upps', 'Todos los campos son obligatorios');
        }
        else if (password !== password2) {
            Alert.alert('Error', 'Las contraseñas no coinciden');
        }

        else {
            Alert.alert('BIENBENIDO', 'Usuario creado correctamente');
            this.props.navigation.navigate('Login');
        }
    }



    // register = async () => { //funcion para registrar un usuario
    //     if (this.state.password == this.state.password2) { //validacion de contraseñas
    //         if (this.state.checked == true && this.state.checked2 == true && this.state.checked3 == true) { //validacion de checkboxs
    //             const db = await connect();
    //             const [rows] = await db.query('SELECT * FROM usuarios');
    //             var id = rows.length + 1;
    //             var enfermedad = this.state.enfermedad;
    //             var birthdate = this.state.birthdate;
    //             var phone = this.state.phone;
    //             var UserName = this.state.UserName;
    //             var password = this.state.password;
    //             var Email = this.state.Email;
    //             var query = `INSERT INTO registro_usuario (id, enfermedad, birthdate, phone, UserName, password, Email) VALUES (${id}, '${enfermedad}', '${birthdate}', '${phone}', '${UserName}', '${password}', '${Email}')`;
    //             await db.query(query);
    //             Alert.alert('Registro exitoso', ' ' + this.state.UserName);
    //             this.props.navigation.navigate('Login');
    //         } else {
    //             Alert.alert('Error', 'Debe aceptar los terminos y condiciones');
    //         }
    //     } else {
    //         Alert.alert('Error', 'Las contraseñas no coinciden');
    //     }
    // }



    render() {
        return (


            <ScrollView>
                <View style={styles.container1}>

                    <TouchableOpacity style={styles.buttonBack}
                        onPress={() => this.props.navigation.navigate('LogginBreak')} >
                        <Text>
                            <Icon 
                            type='material-community'
                            name="arrow-left" 
                            size={60} 
                            color="#efb810" />
                        </Text>
                    </TouchableOpacity>

                    <Text style={styles.Tittle}>
                        Registro
                    </Text>



                </View>

                <View style={styles.container}>
                    <View style={styles.input}>
                        <Input style={styles.inputs}
                            name={"Email"}
                            placeholder="Break@example.com"
                            keyboardType="email-address"
                            underlineColorAndroid='transparent'
                            onChangeText={(Email) => this.setState({ Email })}
                            value={this.state.Email}

                            leftIcon={<Icon
                                type='material-community'
                                color={'#000'}
                                name={'email'}

                            />}
                        />
                    </View>

                    <View style={styles.input}>
                        <Input style={styles.inputs}
                            placeholder="Contraseña"
                            secureTextEntry={this.state.showPassword}
                            underlineColorAndroid='transparent'
                            onChangeText={(password) => this.setState({ password })}
                            value={this.state.password}
                            //icono de contraseña
                            rightIcon={<Icon
                                type='material-community'
                                color={'grey'}
                                name={this.state.showPassword ? 'eye-off-outline' : 'eye-outline'}
                                onPress={() => this.showPassword}
                            />}

                            leftIcon={<Icon
                                type='material-community'
                                color={'#000'}
                                name={'key'}
                            />}

                        />
                    </View>

                    <View style={styles.input}>
                        <Input style={styles.inputs}
                            placeholder="Repetir contraseña"
                            secureTextEntry={this.state.showPassword}
                            underlineColorAndroid='transparent'
                            onChangeText={(password2) => this.setState({ password2 })}
                            value={this.state.password2}
                            //icono de contraseña
                            rightIcon={<Icon
                                type='material-community'
                                color={'grey'}
                                name={this.state.showPassword ? 'eye-off-outline' : 'eye-outline'}
                                onPress={this.showPassword} />}

                            leftIcon={<Icon
                                type='material-community'
                                color={'#000'}
                                name={'key'}
                            />}

                        />
                    </View>

                    <View style={styles.input}>
                        <Input style={styles.inputs}
                            placeholder="Nombre de usuario"
                            underlineColorAndroid='transparent'
                            onChangeText={(UserName) => this.setState({ UserName })}
                            value={this.state.UserName}

                            leftIcon={<Icon
                                type='material-community'
                                color={'#000'}
                                name={'arm-flex'}
                            />}

                        />


                    </View>

                    <View style={styles.input}>
                        <Input style={styles.inputs}
                            placeholder="Teléfono (opcional) "
                            keyboardType="numeric"
                            underlineColorAndroid='transparent'
                            onChangeText={(phone) => this.setState({ phone })}
                            value={this.state.phone}

                            leftIcon={<Icon
                                type='material-community'
                                color={'#000'}
                                name={'phone'}
                            />}

                        />
                    </View>


                    {/* checkbox del genero  */}
                    <View>
                        <Text style={styles.tittle}>
                            Género :
                        </Text>

                        <CheckBox style={styles.checkbox}
                            title='Masculino'
                            checkedIcon="dot-circle-o"
                            uncheckedIcon="circle-o"
                            checked={this.state.checked}
                            onPress={() => this.setState({ checked: !this.state.checked })}


                        />
                        <CheckBox style={styles.checkbox}
                            title='Femenino'
                            checkedIcon="dot-circle-o"
                            uncheckedIcon="circle-o"
                            checked={this.state.checked2}
                            onPress={() => this.setState({ checked2: !this.state.checked2 })}
                        />




                        <CheckBox style={styles.checkbox}
                            rounded={true}
                            checkedIcon="dot-circle-o"
                            uncheckedIcon="circle-o"
                            title='Otro'
                            checked={this.state.checked3}
                            onPress={() => this.setState({ checked3: !this.state.checked3 })}
                        />
                    </View>




                    <Text style={{
                        fontSize: 12,
                        fontWeight: 'bold',
                        marginTop: 10,
                        marginBottom: 10,
                        marginRight: 250,
                    }}>
                        Fecha de nacimiento:
                    </Text>

                    <View style={styles.input} >
                        <Input style={styles.fechaNacimiento}
                            placeholder="Selecciona tu fecha de nacimiento"
                            format="DD-MM-YYYY"
                            minDate="01-01-1900"
                            maxDate="01-01-2019"


                            leftIcon={<Icon
                                type='material-community'
                                color={'#000'}
                                name={'calendar'}
                            />}
                            onDateChange={(birthdate) => this.setState({ birthdate })}
                            value={this.state.birthdate}
                        />
                    </View>



                    <Text style={{
                        fontSize: 12,
                        fontWeight: 'bold',
                        marginTop: 10,
                        marginBottom: 10,
                        marginRight: 170,
                    }}>
                        ¿Tienes alguna enfermedad?
                    </Text>



                    <View style={styles.input}  >
                        <Input style={styles.enfermedad}
                            placeholder="Enfermedad"
                            underlineColorAndroid='transparent'

                            leftIcon={<Icon
                                type='material-community'
                                color={'#000'}
                                name={'heart-pulse'}
                            />}
                        />
                    </View>



                    <Text style={{
                        fontSize: 12,
                        fontWeight: 'bold',
                        marginTop: 10,
                        marginBottom: 10,
                        marginRight: 250,
                    }}>
                        ¿Cuanto pesas?
                    </Text>

                    <View style={styles.input}>
                        <Input style={styles.inputs}
                            placeholder="Peso"
                            keyboardType="numeric"

                            leftIcon={<Icon
                                type='material-community'
                                color={'#000'}
                                name={'weight-kilogram'}
                            />}
                        />

                    </View>


                    <Text style={{
                        fontSize: 12,
                        fontWeight: 'bold',
                        marginTop: 10,
                        marginBottom: 10,
                        marginRight: 250,
                    }}>
                        ¿Cuanto mides?
                    </Text>

                    <View style={styles.input}>
                        <Input style={styles.inputs}
                            placeholder="Altura"
                            keyboardType="numeric"

                            leftIcon={<Icon
                                type='material-community'
                                color={'#000'}
                                name={'human-male-height'}
                            />}
                        />
                    </View>




                    <View  style={styles.buttonRegister}>
                            <ButtonAwasome
                                onPress={this.onLogin.bind(this)}
                            >
                            <Text style={styles.buttonText}>
                                Registrarse
                            </Text>
                        </ButtonAwasome>
                    </View>
                    





                    <TouchableOpacity
                        onPressIn={() => this.props.navigation.navigate('LogginBreak')}>
                        <Text style={{
                            fontSize: 12,
                            fontWeight: 'bold',
                            marginTop: 10,
                            marginBottom: 10,

                        }}>
                            ya tienes una cuenta?  <Text style={{
                                fontSize: 12,
                                fontWeight: 'bold',
                                marginTop: 10,
                                marginBottom: 10,
                                color: '#efb810',
                                marginRight: 10,
                            }}>
                                Iniciar sesión
                            </Text>
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView >
        );
    }
}













const styles = StyleSheet.create({

    container1: {
        flex: 1,
        marginTop: '10%',
        backgroundColor: '#808080',
        marginLeft: '4%',
        marginRight: '4%',
        padding: 20,
        elevation: 10,
        alignContent: 'center',

        borderTopStartRadius: 40,
    },

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#dcdde1',
        marginLeft: '4%',
        marginRight: '4%',
        marginTop: '-6%',
        padding: 20,
        elevation: 10,

        borderTopEndRadius: 0,
        borderTopStartRadius: 40,

    },

    Tittle: {
        flex: 1,
        fontSize: 50,
        fontWeight: "bold",
        color: 'whitesmoke',
        marginLeft: 10,
        marginTop: 20,
        marginBottom: 10,
    },

    input: {

        width: 100 + '%',
        height: 80,
        marginTop: 10,
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        elevation: 8,

    },

    inputs: {
        flex: 1,
        width: '100%',
        height: '100%',
        marginTop: 10,
        alignItems: 'center',
        alignContent: 'center',
        padding: 10,
        borderRadius: 15,
    },

    button: {
        marginTop: 10,
        width: 100 + '%',
        alignItems: 'center',
        alignContent: 'center',
    },

    buttonBack : {
        
    },



    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    },

    checkbox: {
        borderRadius: 10,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: 'orange',
    },


    tittle: {

        fontSize: 12,
        fontWeight: "bold",
        marginRight: 300,
        marginTop: 10,
        marginBottom: 10,
        alignItems: 'flex-start',
    },

    fechaNacimiento: {
        flex: 1,
        width: '100%',
        height: '100%',
        marginTop: 10,
        alignItems: 'center',
        alignContent: 'center',
        padding: 10,
        borderRadius: 15,
    },

    enfermedad: {
        width: '90%',
        height: 50,
        // Color: "white",

    },
    buttonRegister : {
        marginTop: 20,

    },









});