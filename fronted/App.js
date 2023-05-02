//                                       Archivo principal del proyecto 

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigations from './components/Navigations/Navigations';
// import {connect} from '/backend/database'

// import TabLoggin from './components/Navigations/Tabs/TabLoggin';
// import TabCreateAccount from './components/Navigations/Tabs/TabCreateAccount';

import AppLoading from 'expo-app-loading';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';


const App = () => {


  let [fontsLoaded] = useFonts({
    'VT323-Regular': require('./assets/fonts/VT323-Regular.ttf'),


  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (

    <NavigationContainer>

      <Navigations />
      {/* <TabLoggin />
      <TabCreateAccount /> */}

    </NavigationContainer>

  )
}


export default App