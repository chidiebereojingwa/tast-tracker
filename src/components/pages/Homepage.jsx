import React, {useState, useEffect} from 'react'
import Exerciseslist from '../Exerciseslist';

export default function Homepage() {
    const [exercises, setexercises] = useState([]);
    useEffect(()=>{
        async function fetchExercises (){
            try {
               const response = await fetch('http://localhost:3111/exercises');
               const fetchedExercises = await response.json();
               console.log("here are the exercises that we fetched...",fetchedExercises)
               setexercises(fetchedExercises)
            } catch (error) {
              console.log(error)
                
            }
        } 
        fetchExercises();

    },[]);

    const onDeleteExerciseHandler = (id) => {
      const patchedExercises = exercises.filter((exercises) => exercises.id !== id );
      setexercises(patchedExercises);
    }
  return (
    <div>
      <Exerciseslist exercises={exercises} onDeleteExercise={onDeleteExerciseHandler}/>
    </div>
  )
}
