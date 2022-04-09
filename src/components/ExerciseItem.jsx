import React from 'react'
import "./ExercisesItem.css"

export default function ExerciseItem({exercise, onDeleteExercise}) {
  const performExerciseDeletion () => {
    onDeleteExercise(exercise.id)
  }
  return (
    <div className="exercise">
    <div className="actions">
      <h4>{exercise.title}</h4>
      <div className="buttons">
        <button onClick={performExerciseDeletion}>Delete</button>
      </div>
    </div> 
    <div className="details">
      <p>{exercise.details}</p>
      </div>
  </div>
  )
}
