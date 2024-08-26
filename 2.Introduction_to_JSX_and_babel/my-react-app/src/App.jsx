import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'   //This imports the CSS file App.css, which is used to apply styles specific to the App component.

//This defines a functional React component named App. A React component is essentially a JavaScript function that returns JSX.
function App() {

          /*This is where JSX comes into play. 
          JSX is a syntax extension that looks similar to HTML but is actually JavaScript. 
          It allows us to write HTML-like syntax directly in our JavaScript files.
          In this case, <h1>hello world</h1> is JSX. 
          When the App component is rendered, this JSX is converted to a React element that the browser can understand and render as HTML.*/
  return ( 
    <h1>hello world</h1>  //Hence, inside a js file , we are able to write plain html. This is JSX  does.React works by creating this JSX files.
  )
}

export default App
