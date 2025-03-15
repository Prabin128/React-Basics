import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const name = "Heavy Developer";
  const dateData = new Date();

  const greetingsAnalyzer =  (hoursData) => {
    
    if(hoursData >= 5 && hoursData < 12){
      return 'Good Morning!! ';
      }
      else if(hoursData >= 12 && hoursData < 18 ){
        return 'Good Afternoon!! ';
      }else{
        return 'Good Evening!! '
      }
  };

  return (
    <>

    {/* 1. */}
      <p>Created By {name}</p>
      <p>Copyright {dateData.getFullYear()}</p>

    {/* 2. */}
      <h1>{greetingsAnalyzer(dateData.getHours())}, {name}</h1>
    </>
  )
}

export default App;
