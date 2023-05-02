import React from "react";
import { StyleSheet } from "react-native";
import { Overlay } from "@rneui/base";


const RenderModalView =({ children, visible, setVisible }) =>{
  
  return (
    <Overlay 
      visible={visible} 
      overlayStyle={StylesModal.overlay}
      onBackdropPress={() => setVisible(false)}>
      {

        children
      
      }
    </Overlay>

  )
}

const StylesModal = StyleSheet.create({
  overlay: {
    justifyContent: 'space-between',
    width: '90%',
    height: '77%',
    backgroundColor: 'whitesmoke',
    borderRadius: 25

  },

})


    
export default RenderModalView