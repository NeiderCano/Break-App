import 'react-native-gesture-handler';
import React from 'react';
import { ButtonGroup, Icon } from '@rneui/base';
import { Text, TouchableOpacity, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import LogginStack from '../../screens/Account/LogginBreak';
import CreateAccountStack from '../../screens/Account/CreateAccount';
import PhysicalStateStack from './PhysicalStateStack';
import RoutinesStack from './RoutinesStack';
import HomeStack from './HomeStack';
import ExerciseStack from './ExerciseStack';
import ProfileStack from './ProfileStack'





//funcion para esconder la barra de navegacion







const Tab = createBottomTabNavigator();
function Navigations() {

  //const [isFocused, setIsFocused] = useState(null)

  return (
    <>
      <Tab.Navigator
        initialRouteName='LogginBreak'
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: '#efb810',
          tabBarInactiveTintColor: 'white',
          tabBarStyle: [
            {
              
              backgroundColor: '#1e1e1e',
              display: 'flex',
              //height: 0,
              
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              //position: 'absolute',


            },
            null,
          ],
          tabBarIcon: ({ color }) =>
            screenOptions(route, color),
        })}
        navigationOptions
      >



        <Tab.Screen
          name="LogginBreak"
          component={LogginStack}
          options={({}) => ({
            title: 'BREAK',
            headerStyle: { backgroundColor: '#efb810', elevation: 10 },
            headerTitleStyle: { color: 'whitesmoke' },
            
            tabBarButton: () => null, // para que no se vea el icono de la barra  --------------------break-----------
            tabBarShowLabel: false, // oculta los nombres o lebels de las pantallas
            headerShown: false, // oculta la barra header de la pantalla
            tabBarStyle: [// quita el borde de la barra de navegacion
              {

                height: 'auto',
                position: 'absolute',
              },

            ],
            
          })}
        />
        
        <Tab.Screen
          name='CreateAccount'
          component={CreateAccountStack}
          
          options={({}) => ({
            tabBarButton: () => null,
            title: 'CREAR',
            headerStyle: { backgroundColor: '#efb810', elevation: 10 },
            headerTitleStyle: { color: 'whitesmoke' },

            tabBarButton: () => null, // para que no se vea el icono de la barra  --------------------create account-----------
            tabBarShowLabel: false, // oculta los nombres o lebels de las pantallas
            headerShown: false, // oculta la barra header de la pantalla
            tabBarStyle: [//quita el borde de la barra y la barra de navegacion
              {

                height: 'auto',
                position: 'absolute',
              },

            ],
            
          })}
        />
        
        



        <Tab.Screen
          name='PhysicalState'
          component={PhysicalStateStack}
          options={({ navigation }) => ({
            title: 'Mi estado',
            headerStyle: { backgroundColor: '#efb810', },
            headerTitleStyle: { color: 'whitesmoke' },
          })}
        />
        <Tab.Screen
          name='RoutinesStack'
          component={RoutinesStack}
          options={({ navigation }) => ({
            title: 'Mis Rutinas',
            headerStyle: { backgroundColor: '#efb810' },
            headerTitleStyle: { color: 'whitesmoke' },
          })}
        />
        <Tab.Screen
          name='Home'
          component={HomeStack}
          options={({ navigation }) => ({
            title: 'Menú',
            headerStyle: { backgroundColor: '#efb810' },
            headerTitleStyle: { color: 'whitesmoke' },
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('ExerciseListScreens')}>
                <Text></Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Tab.Screen
          name='ExerciseTabScreen'
          component={ExerciseStack}
          options={({ route, navigation }) => ({
            title: 'Entrenamientos',
            headerStyle: { backgroundColor: '#efb810' },
            headerTitleStyle: { color: 'whitesmoke' },
            headerShown: false,
            //headerShown: 'ExerciseTabScreen' === [route.name] ? console.log(true) : console.log(false),
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('<')}>
                <Text></Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Tab.Screen
          name='UserProfileStack'
          component={ProfileStack}
          options={({ navigation }) => ({
            title: 'Mi Cuenta',
            headerStyle: { backgroundColor: '#efb810'},
            headerTitleStyle: { color: 'whitesmoke'  },
          })}
        />

      </Tab.Navigator>
    </>
  )
}

const screenOptions = (route, color) => {
  let IconName;

  switch (route.name) {
    case 'Home':
      IconName = "home-circle-outline"
      break;
    case 'ExerciseTabScreen':
      IconName = "dumbbell"
      break;
    case 'RoutinesStack':
      IconName = "arm-flex"
      break;
    case 'UserProfileStack':
      IconName = "account-circle"
      break;
    case 'PhysicalState':
      IconName = "apps"
      break;

  }

  return (
    <Icon type='material-community'
      name={IconName}
      size={22}
      color={color}
      style={{ marginRight: 0 }}

    />
  );
}


export default Navigations

