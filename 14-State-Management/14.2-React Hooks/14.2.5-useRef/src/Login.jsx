
import './Login.css'
import { useEffect, useRef, useState } from 'react';

function Login() {
  const [input, setInput] = useState('')
  const focusRef = useRef(null);
  const renderCount = useRef(1); //component will render once on mount, hence initializing with 1 

  useEffect(()=>{
    focusRef.current.focus()
    console.log(focusRef.current);
    renderCount.current +=1; //increment on every render
    
  },[])
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
    </div>
  )
}

export default Login
