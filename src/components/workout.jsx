import React from 'react'

import Sectionwrapper from './sectionwrapper';
import ExerciseCard from './ExerciseCard';

export default function Workout(props) {

  const { workout } = props;

  return (
    <Sectionwrapper header={"welcome to"}  
    title={["The", "DANGER", "zone"]}>
        <div className="flex flex-col gap-4">
          {workout.map((exercise, i) => (
            <ExerciseCard i={i} exercise={exercise} key={i}/>
          ))}
        </div>
    </Sectionwrapper>
  )
}
