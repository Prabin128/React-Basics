import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Components/Login/Login.jsx'
import Register from './Components/Register/Register.jsx'

function App() {

  const userIsRegistered = false;

  return (
    <div className='app'>
      {userIsRegistered? (
        <Login />
      ) : (
        <Register />
      )

      }
    </div>
  )
}

export default App
