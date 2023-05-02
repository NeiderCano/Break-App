import React, {useState} from 'react'
import { View, StyleSheet, Text } from 'react-native'

const HandledTimer = ( props, {Count, setCount}) => {
    
    
    // setInterval(() => {
    //     ClockTimer();
    // }, 2000);

    // const ClockTimer = () =>{
        // var insertValue = props.time
        // console.log(insertValue)
        // var value = insertValue.split(":")
        // var minuts = parseInt(value[0])
        // var seconds = parseInt(value[1])
        // var time = minuts+seconds
        // console.log(value)
        // if(seconds <= 59 ){
        //     seconds +=1;
        //     // seconds = parseInt(59);
        // }else{
        //     seconds = 0

        // }if(seconds > 59){
        //    minuts += 1
        
        // }
        
        // console.log(seconds)
    // }
    // ClockTimer()
    
    
    return (
        <View style={styles.ClockBox}>
            <Text style={styles.counter}>{"00:00"}</Text>
        </View>
    )

}



const styles = StyleSheet.create({
    ClockBox: {
        justifyContent: 'center',
      alignItems: 'center',
      height: 100,
      width: 200,
      margin: 25,
      borderRadius: 8,
      raiseLevel: 5,
      borderWidth: 6,
      backgroundColor: '#0099FF',
      borderBottomColor: '#293133',
      backgroundDarker: '#00554E',
      borderColor: '#00554E',
    },
    counter : {
        color: '#293133',
        fontSize: 65,
        fontFamily: 'VT323-Regular'
    },
})

export default HandledTimer