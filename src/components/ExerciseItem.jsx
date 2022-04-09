import React from 'react'
import "./ExercisesItem.css"

export default function ExerciseItem({exercise, onDeleteExercise}) {
  const performExerciseDeletion = () => {
    fetch(`http://localhost:3111/exercises/${exercise.id}`, {
      method: 'DELETE',
    })
    .then(() => {
      onDeleteExercise(exercise.id);
    })
    .catch((error) => console.log(error))
    
  }

  const performExerciseToggle = () => {
    
  }
  return (
    <div className="exercise">
    <div className="actions">
      <h4>{exercise.title}</h4>
      <div className="buttons">
        <button onClick={performExerciseDeletion}>Delete</button>
        <button onClick={performExerciseToggle}>Toggle</button>
      </div>
    </div> 
    <div className="details">
      <p>{exercise.details}</p>
      </div>
  </div>
  )
}
