import { useReducer } from 'react'
import './UserForm.css'
import { useState } from 'react';

const initialState = {name: '' , age: ''};

const reducer = (state, action) => {
  switch (action.type) {
    case 'name':
      return {...state, name:action.payload}
    case 'age':
      return {...state, age:action.payload}
    case 'reset':
      return initialState
     
    default:
      return state;
  }
}

function UserForm() {

  const [isSubmitted, setIsSubmitted] = useState(false);

  const [state, dispatch] = useReducer(reducer, initialState);


  const handleName = (e) => {
    dispatch({type: 'name', payload: e.target.value});
  }

  const handleAge = (e) => {
    dispatch({type: 'age', payload: e.target.value});
  }
  const handleSubmit = (e) => {

    console.log('Submitted:', state);
    setIsSubmitted(true);
  }
  const handleReset = (e) => {

    dispatch({type: 'reset'});
    setIsSubmitted(false);
  }

  return (
    <div className='main-div-container'>
      <form className='form-container'>
          <input 
            className='input-field'
            type='text'
            value={state.name} 
            placeholder='Enter the name' 
            onChange={handleName}
          />

          <input
            className='input-field'         
            value={state.age} 
            placeholder='Enter the age' 
            onChange={handleAge}
          />

          <div className='button-group'>
            <button type='button' className='btn submit-btn' onClick={handleSubmit}>Submit</button>
            <button type='button' className='btn submit-btn' onClick={handleReset}>Reset</button>
          </div>

          {isSubmitted && (
            <p className='output'>Hello, {state.name}. Your age is {state.age}</p>
          )}
      </form>
    </div>
  )}

export default UserForm
