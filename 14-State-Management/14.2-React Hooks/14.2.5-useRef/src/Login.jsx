
import './Login.css'
import { useEffect, useRef, useState } from 'react';

function Login() {
  //for Tracking Render Count
  const [input, setInput] = useState('');

  //for Accessing DOM Element
  const focusRef = useRef(null);
  const renderCount = useRef(1); //component will render once on mount, hence initializing with 1 

  //for Storing Previous State with useRef
  const [count, setCount] = useState(0);
  const prevCountRef = useRef(); // this will store the previous state value 

  useEffect(()=>{
    //for Accessing DOM Element 
    focusRef.current.focus()
    
    //for Tracking State Changes(storing previous state with useRef)
    renderCount.current +=1; //increment on every render

  },[])

  // useEffect for storing previous state with useRef
  useEffect(()=> {       
    prevCountRef.current = count;   // Update the ref with the current count
  }, [count]);  // Run this effect whenever count changes

  const prevCount = prevCountRef.current;  // Access the previous count

  return (
    <div>
      <h2>1. Accessing a DOM Element </h2>
      <form>
        <input type="text" ref={focusRef} placeholder='Username'/>
        <input type="text"  placeholder='Password'/>
      </form>

      <h2>2. Storing Mutable Values Without Causing Re-renders</h2>
      <input 
        className="extra-input"
        type="text" 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='Type something'
      />
      <p className='render-counter'>Component rendered {renderCount.current} times</p>

      <h2>3.Tracking State Changes</h2>
      <p className='render-count'> Current Count: {count}</p>
      <p className='render-count'>Previous Count: {prevCount}</p>
      <button onClick={()=> setCount((prev) => prev+1)}>Increment</button>
    </div>
  )
}

export default Login
