import { useState } from 'react'
import './App.css'
import Login from './Components/Login'
import Input from './Components/Input' 

function App() { 
  const isLoggedIn = true; // Set this to true to see the "Welcome back!" message
  const currentTime = new Date().getHours(); // Get the current hour  

  return (
    <div>
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
