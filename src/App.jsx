import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Hero from './components/hero'
import Generator from './components/generator'
import Workout from './components/workout'
import { generateWorkout } from './utils/functions'

function App() {

  const [workout, setWorkout] = useState();

  const [poison, setPoison] = useState('individual');
  const [muscles, setMuscles] = useState([]);
  const [goals, setGoals] = useState('strength_power');

  function updateWorkout() {
    if (muscles.length < 1) {   // we don't want to do anything if there are no muscles to train. People can just skip past the second section.
      return
    }
    let newWorkout = generateWorkout({ poison, muscles, goals })
    console.log(newWorkout)
    setWorkout(newWorkout)
  }

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-r from-slate-800
    to-slate-950 text-white text-sm sm:text-base">
      <Hero />
      <Generator 
      poison={poison}
      setPoison={setPoison}
      muscles={muscles}
      setMuscles={setMuscles}
      goals={goals}
      setGoals={setGoals}
      updateWorkout={updateWorkout}
      />
      {workout && (<Workout workout={workout}/>)}
    </main>
  )
}

export default App

// Time stamp: 2:07:40
// Finished Hero component

// The section wrapper in generator.jsx acts as another component that can Print out hello.
// If we were to have opening and closing tags with the section wrapper, we can put text
// inside of those tags as well. This text wont be display unless we specifiy props being
// passed to the sectionwrapper in its parameters, and call those props like this:

// const { children } = props;

// A section wrapper is boilerplate code that it will always repeat, but it has a section
// to place whatever code you put inside of its opening and closing tags within the function
// you call it in!


// Instead of rendering four buttons individually, or even making a component to then render four times,
// we can map an array that has the text for each button and return a button with that text.

// In tailwind, we have to specify border in an element if we want a border. Then we can do styling
// elements like border-slate-950

// For text editing, take note in generator.jsx where we capitalize text, and where we use the
// replaceAll('_', " ") to get rid of certain characters.


// In generator.jsx, we don't have the buttons within the boilerplate code of header because
// we want to change those quite drastically for each section.


//IMPORTANT POINT
// When we render the option selection in the 2nd section, we need to map through each of the items
// that are subcategories of the buttons in the first section. In order to map through things, we need
// arrays.
// I am saying that when we store data in objects, it is best...


// Timestamp 2:33:01

// Timestamp 2:47:07. My goal is to understand what he's doing as he is doing it, then go through
// and make a document or paper explaining the complete thought process in designing this type of web page.
// Then I'm going to make it myself following my intuition and the guide paper. Then I'm moving on
// to the machine learning.

// timestamp: 2:59:30
// boutta add styles to the button