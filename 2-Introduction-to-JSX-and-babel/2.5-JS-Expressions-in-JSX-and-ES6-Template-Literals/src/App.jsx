import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const name =  'MR. Developer';
  const luckyNumber = 10
  const firstName = 'Donald';
  const lastName = 'Trump';
  return (
    <>
      {/* <h1>Hello Mr. Developer</h1> */}

      {/* Instead of writig name directly to the h1 tag, we can pass the javascript inside our html tag using curly braces */}
      <h1>Hello {name}</h1>
      <p> Your age must be {20+4} and your lucky number is {luckyNumber}</p>
      <p>Let's Generate the random  number using math function: {Math.floor(Math.random()*10)}</p>
      <h3>Hello my name is {`${firstName} ${lastName}`}</h3>
    </>
  )
}

export default App
