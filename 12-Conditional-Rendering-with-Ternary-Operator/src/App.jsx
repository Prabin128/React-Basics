import { useState } from 'react'
import './App.css'
import Login from './Components/Login/Login'
import Input from './Components/Input/Input' 

function App() { 
  const isLoggedIn = false; // Set this to true to see the "Welcome back!" message
  const currentTime = new Date().getHours(); // Get the current hour  

  return (
    <div className='app'>
      {/* Ternary Operator for Login/Welcome */}
      {isLoggedIn ? (
          <h1>Welcome Back!</h1>
        ) : (
          <Login />
        )
      }  

      {/* AND Operator for Time-Based Message */}
      {currentTime > 12 && <h1>Why are you still working?</h1>}

    </div>
  )
}

export default App
