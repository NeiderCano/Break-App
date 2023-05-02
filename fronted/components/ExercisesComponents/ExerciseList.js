

import React, { useState, useEffect, useContext, useMemo } from "react";
import { FlatList } from "react-native-gesture-handler";
import { SearchBar } from '@rneui/base'

import  {getExercisesHome}  from "../../api";
import ExerciseButton from '../../screens/Exercises/ButtonsSelection'
import { styles } from "../Styles/LayoutModal";
import { render } from "react-dom";


const ExercisesListView  = ({navigation }) =>{

    const [data, SetData] = useState([]);
    
    const [Search, setSearch] = useState({
        loading : false, 
        data: data, 
        error: null,
        searchValue: "",
    });
    // const replaceChars = ["a","e","i","o","u"]
    // const searchChar = 'áéíóú'.split('')
    // searchChar.forEach((char, index)=>{
    //     data = data.replace(char, replaceChars[index])
    //     console.log(data)
    // })
   
    const arrayHolder = data;

    // console.log(item.id_ejercicios)
    
    const fetchExercises = async () =>{
       const DATA = await getExercisesHome();
       SetData(DATA)
    //    return DATA
    };

    useEffect(() =>{
        fetchExercises();
    }, []);

    const renderItem = ({ item }) =>{
        return(
            <ExerciseButton
                exercise = {item}
                navigation={navigation}
            />
        )
    }
    
    const searchFunction = (text) =>{
        const updateData = arrayHolder.filter((item) => {
            const text_data = text.toUpperCase();
            const item_data = `${item.nombre_ejercicio.toUpperCase()}`+
            `${item.grupo_muscular.toUpperCase()}`
            return item_data.indexOf(text_data) >-1 
            
        });
        setSearch({ data: updateData, searchValue: text})            
    };    

    const memoizedData = useMemo(() => renderItem, [Search.data]) 

    return (
        <>
            <SearchBar
                placeholder="Buscar ejercicio..."
                placeholderTextColor='whitesmoke'
                inputStyle={{color: 'whitesmoke'}}
                lightTheme = {true}
                value={Search.searchValue}
                onChangeText ={(text) =>searchFunction(text)}
                containerStyle={styles.searchBar}
                inputContainerStyle={{ backgroundColor: '#efb810'}}
                autoCorrect= {false}

            />

            <FlatList
                // ref = {(ref) => { flatListRef = ref; }} 
                data = {Search.data}
                initialNumToRender ={7}
                keyExtractor = {(item) => item.id_ejercicios }
                renderItem = { memoizedData }
                // searchExercise = { searchExercise }
            />
        </>
        
    );    


                          
};


export default ExercisesListView;

