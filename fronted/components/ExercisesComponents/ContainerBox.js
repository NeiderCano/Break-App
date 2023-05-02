import React from 'react'
import { View } from 'react-native'

const ContainerBox = ({children, visible, setVisible}) => {
  return (
    <View visible={visible}
    setVisible={setVisible}>
    {
    
      children
        
    }
    </View>
  )
}

export default ContainerBox