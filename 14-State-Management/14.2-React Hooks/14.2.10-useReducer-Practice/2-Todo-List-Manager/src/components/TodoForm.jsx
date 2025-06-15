import React, { useState } from 'react'

const TodoForm = ({dispatch}) => {

    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!text.trim()) return

        const newTodo = {
            id: new Date(),
            text: text.trim(),
            completed: false
        }

        dispatch({type:"ADD_TODO", payload: newTodo})
        setText('');
    }

  return (
    <form onSubmit={handleSubmit}>
        <input 
            type="text"
            value={text}
            placeholder='Enter todo'
            onChange={(e)=> setText(e.target.value)}
        />

        <button type='submit'>Add</button>
    </form>
  )
}

export default TodoForm

