
import './Login.css'
import { useEffect, useRef } from 'react';

function Login() {

  const focusRef = useRef(null);

  useEffect(()=>{
    focusRef.current.focus()
    console.log(focusRef.current);
    
  },[])
  return (
    <div>
      <form>
        <input type="text" ref={focusRef} placeholder='Username'/>
        <input type="text"  placeholder='Password'/>
      </form>
    </div>
  )
}

export default Login
