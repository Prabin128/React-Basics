import { useReducer } from "react"
import reducer from './reducer/todoReducer.js'
import TodoForm from "./components/TodoForm.jsx";
import TodoList from "./components/TodoList.jsx";

function App() {

  const [todos, dispatch] = useReducer(reducer, []);

  return (
    <div className="app"> 
      <h1>Todo List Manager</h1>
      <TodoForm dispatch = {dispatch}/>
      <TodoList todos = {todos} dispatch = {dispatch} />
    </div>
  )
}

export default App




