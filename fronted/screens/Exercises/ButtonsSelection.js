import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity, Image} from "react-native";

import MainModal from "../../components/ExercisesComponents/MainModal";
import RenderModalView  from '../../components/ModalWindow/ScreenModal'
import NextDescription from "../../components/ExercisesComponents/NextDescription";
import DataExercise from "../../components/ExercisesComponents/DataExercise";
import { styles } from "../../components/Styles/LayoutModal";


const ExerciseButton = ({exercise, navigation}) => {

  const [visible, setVisible] = useState(false);
  const [renderComponent, SetRenderComponent] = useState(null)

  const selectedComponent = (key) => {
    switch(key){
      case exercise.id_ejercicios:
      SetRenderComponent(
        <MainModal
          exercise={exercise}
          selectedComponent={selectedComponent}
        />        

      )
      break;

      case 'TouchNext':
      SetRenderComponent(
        <NextDescription
          exercise={exercise}
          navigation={navigation}
          selectedComponent={selectedComponent}

        />
      )
      break;
      
      case 'TouchBack':
      SetRenderComponent(
        <MainModal
          exercise={exercise}
          selectedComponent={selectedComponent}
        />        
      )
      break;
    }
    setVisible(true)
  }


  return(
    
    <View style={styles.itemContainer}>
      <>
        <View>          
          <TouchableOpacity
            title={"ExerciseButton"}
            type="primary"
            progress
            onPress={() => {
              setTimeout(() => {
              selectedComponent(exercise.id_ejercicios)
              }, 500);
            }}
            style={
              styles.touchExecise
            }>
            <Image
              style={styles.imageExercises}
              source={require('../../assets/Flexiones-con-apoyo-ancho.jpg')}  
            />

            <DataExercise
              exercise={exercise}
            />



          </TouchableOpacity>
        </View>

        <RenderModalView
          visible={visible} 
          setVisible={setVisible}>

            {
              renderComponent
            }

        </RenderModalView>
      </>
    </View> 
  )
    
};

export default ExerciseButton