import React from 'react'
import "./ExercisesItem.css"

export default function ExerciseItem({ exercise, onDeleteExercise, onToggleExercise }) {
  const performExerciseDeletion = () => {
    fetch(`http://localhost:3111/exercises/${exercise.id}`, {
      method: "DELETE",
    })
      .then(() => {
        onDeleteExercise(exercise.id);
      })
      .catch((error) => console.log(error));
  };

  const performExerciseToggle = () => {
    onToggleExercise(exercise.id);
  };

  const classes = ["exercise"];
  if (exercise.complete) {
    classes.push("complete");
  }
  return (
    <div className={classes.join("")}>
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
  );
}
