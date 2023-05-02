import React from 'react'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  itemContainer: {

    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    width: '100%',
  },

  boxContainer: {
    width: "100%",
    height: "88%",
    padding: 5,
    backgroundColor: "#fff",
    flexDirection: "row",
    flexWrap: "wrap",

  },

  imageExercises: {
    // borderTopLeftRadius: 9,
    // borderTopRightRadius: 9, 
    borderRadius: 9,
    height: 90,
    width: 339,
    borderWidth: 1,
    // backgroundColor: "#efb810",
    // backgroundDarker: "#ccba3f",
  },

  touchExecise: {
    raiseLevel: 8,
    height: 140,
    width: 340,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#efb810",
    backgroundDarker: "#ccba3f",
    borderColor: "#FFE11D",
    activityColor: "#FFE11D",
  },

  textTouchExercise: {
    alignItems: 'flex-end',
    flexDirection: 'column',
    fontSize: 16,
    justifyContent: 'center'
  },

  image: {
    alignSelf: 'center',
    height: 120,
    width: 120,
    marginBottom: 10,
  },

  flexModal: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 0,
  },

  flexModalTwo: {
    flexDirection: 'column',
    alignItems: 'center'
  },

  TitleDescription: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 10,
  },

  dataText: {
    fontSize: 14,
    marginTop: 10,

  },

  left: {
    textAlign: 'left',
    textAlignVertical: "bottom",
    lineHeight: 30,
    // textAlignVertical: 'bottom'
    // width: '40%',
  },

  right: {
    textAlign: 'right',
    textAlignVertical: "bottom",
    lineHeight: 30,

    // textAlignVertical: 'bottom'
    // width: '40%',
  },

  buttonStart: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    margin: 8,
    width: 188,
    elevation: 8,
  },

  searchBar: {
    marginTop: 5,
    backgroundColor: '#efb810',
    borderColor: '#b87400',
    borderWidth: 5,
    borderRadius: 15
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#696969',
    marginTop: 20,
    textAlign: 'center',
  },

  NextBack: {
    fontWeight: 'bold',
    borderRadius: 5,
    marginRight: 215,
    color: 'black',
    backgroundColor: '#efb810',
    
    elevation: 3,

  },

//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     justifyContent: 'center',
//     textAlign: 'center',
//     marginLeft: '1%',
//     marginRight: '1%',
//     backgroundColor: '',
//     elevation: 10,
//     borderRadius: 10,

// },


})