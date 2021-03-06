import React from 'react'
import ExerciseItem from './ExerciseItem'
import "./ExercisesList.css"

export default function Exerciseslist({exercises}) {
    if(exercises.length === 0) return null 

  return (
    <div className="exercises-list">
      {exercises.map(exercise=>(
      <ExerciseItem key={exercise.id} exercise={exercise}/>)
      )
      }
    </div>
  
  )
}
