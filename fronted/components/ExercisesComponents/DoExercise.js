import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, Alert, TouchableOpacity } from 'react-native';
import { Button } from 'react-native';
import ContainerBox from './ContainerBox';
import DataExercise from './DataExercise';
import { BoxShadow } from 'react-native-shadow';
import HandledTimer from './HandledTimer';
import ModalWindow from './../../components/ModalWindow/ScreenModal'



const DoExercise = ({ navigation, exercise }) => {
   // const [visible, setVisible] = useState(false)
   // const [renderComponent, SetRenderComponent] = useState(null)
   const [seconds, setseconds] = useState(0)
   const [minutes, setMinutes] = useState(0)
   const [Count, setCount] = useState()
   const [buttonState, setbuttonState] = useState(true)
   const [visibleContainer, setvisibleContainer] = useState(true)

   // const handledDefaultBox = () =>{
   //    if(setdefautlBox(defautlBox)){
   //       () => handledRendetItem(">")
   //    }else{
   //       () => setdefautlBox(false)
   //    }
   // }

   // () => handledDefaultBox()

   const stopTimer = () => {
      setbuttonState(!buttonState)
      if (Count) {
         clearInterval(Count)
      }
   }

   const startTimer = () => {
      setbuttonState(buttonState => !buttonState)
      setCount(
         setInterval(() => {
            if (buttonState) {
               changeTime()
            }
         }, 1000)
      )
   }


   const Clear = () => {
      stopTimer()
      setseconds(0)
      setMinutes(0)
   }


   const changeTime = () => {
      // setbuttonState(!buttonState)
      setseconds((prevState) => {
         if (prevState + 1 == 60) {
            setMinutes(minutes => minutes+1)
            return 0;
         }
         return prevState + 1 
      }
      )
   }
   
   const resetTime = () =>{
      setMinutes((minutes) =>{
         if(minutes +1 == 99){
            return 0;
         }
      })
   } 

  ()  => resetTime();


   return (
      <>
         <View style={styles.main}>

            <View>
               <Image
                  style={styles.image}
                  source={require('../../img/Ejercicios/pechoejercicio.gif')}
               />
            </View>

            {/* <DataExercise
            exercise={exercise}
         /> */}

            <View style={styles.containerTime}>

               <View style={styles.containerItemsButtons} visible={visibleContainer} setvisible={setvisibleContainer}>
                  <Button color={'#b87400'} onPress={() => setvisibleContainer(!visibleContainer)} title=" ❮ "></Button>
                  <ContainerBox visible={visibleContainer} setvisible={setvisibleContainer}>{

                     visibleContainer === true ? <View style={styles.ClockBox}>
                        <Text title="time" style={styles.counter}>
                        {minutes < 10 ? "0" + minutes : minutes}:
                        {seconds < 10 ? "0" + seconds : seconds}
                     </Text></View> : <View style={styles.RepsBox}>

                        <Text style={styles.Reps}>REPS 5x10</Text>
                     </View>

                  }</ContainerBox>

                  <Button 
                  color={'#b87400'} 
                  onPress={() => 
                  setvisibleContainer(!visibleContainer)} 
                  title=" ❯ " ></Button>
               </View>

               <View style={styles.ContainerHandlerbuttons}>
                  {/* <View styles={styles.HandlerButtons}> */}
                  <Button color="#efb810" title="Start" onPress={buttonState ? () => startTimer("Start") : () => null}></Button>
                  <Button color={'#FE0F07'} title="Stop" onPress={() => stopTimer()}></Button>
                  <Button color={"#0F76EC"} title="Clear" onPress={() => Clear()}></Button>
                  {/* </View> */}
               </View>

               <View>

                  <TouchableOpacity style={styles.buttonFinish}
                     onPress={() => Alert.alert("¿ Seguro que desea finalizar ?")}
                     onPressIn = {() => navigation.navigate('home')}
                  >
                     <Text style={styles.textFinish}> Finalizar </Text>

                  </TouchableOpacity>

               </View>


            </View>



         </View>

         {/* <View>
         <ModalWindow
            visible={visible}
            setVisible={setVisible}>
            
            {
               renderComponent
            }
            
         </ModalWindow>
      </View> */}

      </>
   )
}

export const styles = StyleSheet.create({
   main: {
      flex: 1,
      marginLeft: '2%',
      marginRight: '2%',
      alignContent: 'center',
      alignItems: 'center',
   },
   image: {
      height: 230,
      width: 390,
      marginBottom: 10,
      borderRadius: 16,
      borderRadius: 16,
      marginTop: '5%',
      alignSelf: 'flex-start',
   },
   containerTime: {
      marginTop: 100,
      raiseLevel: 15,
      borderTopLeftRadius: 35,
      borderTopRightRadius: 35,
      width: '100%',
      height: '40%',
      backgroundColor: '#555555',
      borderColor: '#00554E',
   },
   containerItemsButtons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      height: "70%",
      alignItems: 'center',
   },
   ClockBox: {
      height: 100,
      width: 200,
      borderRadius: 10,
      raiseLevel: 5,
      borderWidth: 10,
      alignSelf: 'center',
      alignItems: 'center',
      backgroundColor: '#151E21',
      borderBottomColor: '#b87400',
      backgroundDarker: '#00554E',
      borderColor: '#efb810',
   },


   RepsBox: {
      height: 100,
      width: 200,
      borderRadius: 10,
      raiseLevel: 5,
      borderWidth: 10,
      alignItems: 'center',
      alignSelf: 'center',
      backgroundColor: '#151E21',
      borderColor: '#efb810',
      borderBottomColor: '#b87400',
   },

   counter: {
      fontSize: 50,
      color: '#F40707',
      fontFamily: 'Roboto',
   },


   Reps: {
      fontSize: 30,
      marginTop: 20,
      color: '#F40707',
      alignItems: 'center',
      fontFamily: 'Roboto',
   },

   ContainerHandlerbuttons: {
      padding: 30,
      width: "100%",
      height: "45%",
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'space-around',
      backgroundColor: '#555555',

   },
   NameExercise: {
      fontSize: 18,
   },

   buttonFinish: {
      borderBottomEndRadius : 20,
      borderBottomStartRadius : 20,
      width: '100%',
      height: '40%',
      backgroundColor: '#efb810',
      alignContent: 'center',
      alignItems: 'center',
   },

   textFinish: {
      fontSize: 20,
      marginTop: 5,
      color: 'white',
      fontWeight: 'bold',
      fontFamily: 'Roboto',
   },


})



export default DoExercise
