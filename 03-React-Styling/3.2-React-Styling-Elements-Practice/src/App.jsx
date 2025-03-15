import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const name = "Mr. Heavy Developer";

const getDate = new Date().getHours(); 

const greetingsAnalyzer = ()=>{

  if(getDate <12){

    return {
      message : "Good Morning", 
      colorFromFunctionLogic : "red"
    };

  }else if(getDate < 18){

    return {
      message : "Good Afternoon", 
      colorFromFunctionLogic : "green"
    };

  }else {

    return {
      message : "Good Evening",
      colorFromFunctionLogic : "blue"
    };

  }
}

function App() {

  const {message, colorFromFunctionLogic} = greetingsAnalyzer();

  let customStyle = {
    color: colorFromFunctionLogic
  }
  
  return (
    <>
    <h1 className='headings' style={ customStyle }>{message}!!, {name}</h1>  
    </>
  )
}

export default App
