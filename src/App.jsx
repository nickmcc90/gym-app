import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Hero from './components/hero'
import Generator from './components/generator'
import Workout from './components/workout'

function App() {

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-r from-slate-800
    to-slate-950 text-white text-sm sm:text-base">
      <Hero />
      <Generator />
      <Workout />
    </main>
  )
}

export default App

// Time stamp: 2:07:40
// Finished Hero component