import React, { useState } from 'react'
import Sectionwrapper from './sectionwrapper'
import { WORKOUTS, SCHEMES } from '../utils/workouts'
import Button from './button';

export default function Generator(props) {

  const { poison, setPoison, muscles, setMuscles, goals, setGoals, updateWorkout } = props;

  const [modal, setModal] = useState(false);

  console.log(goals)

  function updateMuscles(muscleGroup) {
    if(muscles.includes(muscleGroup)) {  // if we choose individual, and choose the same thing twice, we get rid of it.
      setMuscles(muscles.filter(val => val !== muscleGroup))
      return
    }

    if(muscles.length > 2) {    // if the state variable holds 3 or more, then we don't add anymore
      return
    }

    if(poison !== 'individual') { // if we are choosing from anything but individual, we only set the state variable once.
      setMuscles([muscleGroup])
      setModal(false); // this closes the modal after a choice that's not individual
      return
    }

    setMuscles([...muscles, muscleGroup]);   // we set multiple muscles if its individual.

    if(muscles.length === 2) {
      setModal(false);  // closes the modal when we have 3 choices in individual
    }
  }

  function toggleModal() {
    setModal(!modal);
  }

  function Header(props) {    // this is a function component inside of a functional component.

    const { index, title, description } = props;

    return (
      <div className="flex flex-col gap-5 justify-center items-center">
        <div className="flex gap-4 justify-center items-center">
          <h1 className="font-semibold text-4xl sm:text-3xl md:text-4xl lg:text-5xl text-slate-400">{index}</h1>
          <div className="font-normal text-3xl">{title}</div>
        </div>
        <div>{description}</div>
      </div>
    )
  }

  return (    // Consider the header tag and the div with button selection. We have this pair show up 3 times, all within a Sectionwrapper tag. The contents within sectionwrapper appear first on the page, then the stuff inside sectionwrapper.
    <Sectionwrapper id={'generate'} header={"generate your workout"}  // It's only possible to display text within the sectionwrapper tags when we explicity take props in the form of children within sectionwrapper.
    title={["It's", "Huge", "o'clock"]}>
      <Header index={"01"} title={"Pick your poison"} description={"Select the workout you wish to endure."}/>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mx-auto">
          {Object.keys(WORKOUTS).map((type, typeIndex) => {
            return (
              <button onClick={() => {    // clicking a button sets the workout scheme in a variable. We set a specific key to the button, because we are mapping the buttons. The className attribute is wrapped in curly braces so that we can apply conditional js to the class. 
                setMuscles([])
                setPoison(type);            // If the type of button that it is (there are 4) matches with the state variable (it should match when you click a button, for only one button) we can make the button stay highlighted as it is selected.
              }} key={typeIndex} className={"px-8 py-4 border border-blue-600 duration-200 hover:border-blue-600 bg-slate-950 rounded-md " 
              + (type === poison ? "border-blue-600" : "border-slate-950") }>
                <p className="capitalize">  {/* we can capitalize the first letter of imported text */}
                  {type.replaceAll('_', " ")}   {/* this replace all function is helpful for imported data */}
                </p>
              </button>
            )
          })}
      </div>

      <Header index={"02"} title={"Lock on targets"} description={"Select the muscles judged for annihilation."}/>
      <div className="">
        <div className="bg-slate-950 border border-solid border-blue-400 p-3 rounded-lg
        flex flex-col justify-center items-center relative mx-6">
          <button onClick={toggleModal} className="flex justify-center items-center">
            <p className="capitalize ">{muscles.length === 0 ? 'Select muscle groups' : muscles.join(' ')}</p>
            <i className="fa-solid fa-caret-down absolute right-3"></i>
          </button>   {/* we make a custom select catalog by rendering text below a button with a conditional variable that makes the options appear. */}
          {modal && (
            <div className="flex flex-col">
              {(poison === 'individual' ? 
              WORKOUTS.individual : Object.keys(WORKOUTS[poison])).map((muscleGroup, muscleGroupIndex) => {
                return (
                  <button onClick={() => {
                    updateMuscles(muscleGroup);
                  }} key={muscleGroupIndex}>
                    <p className={"uppercase duration-200 hover:text-blue-600 " + 
                  (muscles.includes(muscleGroup) ? 'text-blue-600' : 'text-white')}>{muscleGroup}</p>
                  </button>
                )
              })}
            </div>
          )}
        </div>
      </div>

      <Header index={"03"} title={"Become Juggernaut"} description={"Select your ultimate objective."}/>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto">
      {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
            return (
              <button onClick={() => {    // clicking a button sets the workout scheme in a variable. We set a specific key to the button, because we are mapping the buttons. The className attribute is wrapped in curly braces so that we can apply conditional js to the class. 
                setGoals(scheme);            // If type of button that it is (there are 4) matches with the state variable (it should match when you click a button, for only one button) we can make the button stay highlighted as it is selected.
              }} key={schemeIndex} className={"px-8 py-4 border border-blue-600 duration-200 hover:border-blue-600 bg-slate-950 rounded-md " 
              + (scheme === goals ? 'border-blue-600' : 'border-slate-950') }>
                <p className="capitalize">  {/* we can capitalize the first letter of imported text */}
                  {scheme.replaceAll('_', " ")}   {/* this replace all function is helpful for imported data */}
                </p>
              </button>
            )
          })}
      </div>
      <Button func={() => {
        updateWorkout()
        window.location.href = "#workout"
        }} text="Formulate"/>
    </Sectionwrapper>
  )
}
