const API = "http://10.0.2.2:3000/break/home";

export const getExercisesHome = async() =>{
    const res = await fetch(API);
    return await res.json();
}