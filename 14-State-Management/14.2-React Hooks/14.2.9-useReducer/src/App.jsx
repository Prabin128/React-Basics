import './App.css'
import { useReducer } from 'react'

// 1. Define Initial State
const initialState = {count: 0}

// 2. Create the Reducer Logic
const reducer =(state, action) => {
  switch (action.type) {
    case 'increment':
      return {...state, count: state.count + 1 };
    case 'decrement':
      return {...state, count: state.count - 1 };    
    case 'set':
      return{...state, count: action.payload};
    default:
      return state;
  }
}

function App() {

  // useReducer hook: [state, dispatch]
  const [state, dispatch] = useReducer(reducer, initialState);

   // Event Handlers
  function handleIncrement() {
    dispatch({type: 'increment'})
  }

  function handleDecrement() {
    dispatch({type: 'decrement'})
  }

  function handlePayload(){
    dispatch({type: 'set', payload: 100})
  }

   // 3. Returning the JSX
  return (
    <>
      <h1>Count:{state.count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handlePayload}>Set To 100</button>

    </>
  )
}

export default App
