import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [seconds, setSeconds] = useState(0)   //Tracks the number of seconds

  //state variable `isRunning` decides whether the timer should run. When true, timer starts
  const [isRunning, setIsRunning] =useState(false); //Tracks wether the time is running

  useEffect(()=> {  //We use useEffect to start the timer when isRunning becomes true.

    let interval;

    //If the timer is running, start the interval
    if(isRunning){   //if true, We start a new interval using setInterval()
      interval  =  setInterval(()=> {
        setSeconds(prev => prev+1); //Increase time every 1 second (ake the previous second value and add 1)
      }, 1000)
    }
    return () => {
      clearInterval(interval);  //We use it to clear the timer so it doesn't keep running in the background.
    };
  }, [isRunning]);  //This tells React: Only run this useEffect when isRunning changes.
    


  return (
    <div className="container">
      <h2>Live Timer</h2>
      <h1>{seconds} s</h1>

      <div className="buttons">
        <button onClick={() => setIsRunning(true)}>Start</button>  {/* Start: Sets isRunning to true} */}
        <button onClick={() => setIsRunning(false)}>Stop</button>  {/* Stop: Sets isRunning to false} */}
        <button onClick={() => { setIsRunning(false); setSeconds(0); }}>Reset</button> {/* Reset: Sets isRunning to false and sets seconds to 0*/}
      </div>
    </div>
  );
}

export default App
