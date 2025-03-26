import { useState } from 'react'
import './App.css'
import ToDoItem from './Components/ToDoItem';

function App() {
  const [isDone, setIsDone] = useState(false); //Declare the State Variable

  const toogleStrikeThrough = ()=>{
    setIsDone(!isDone) // Toogle the State
  };

  return (
    <div className="app-container">
      <h1>Todo List</h1>
      <ToDoItem isDone={isDone} toogleStrikeThrough={toogleStrikeThrough}/>
    </div>
  )
}

export default App
