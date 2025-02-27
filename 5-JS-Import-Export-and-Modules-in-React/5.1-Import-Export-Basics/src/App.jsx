import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import randomName, { multiplication, subtraction } from './components/calculations.jsx'  

function App() {
  return (
    <>
    <p>{randomName(1,2)}</p>
    <p>{subtraction(1,2)}</p>
    <p>{multiplication(1,2)}</p>
    </>
  )
}

export default App
