import React, { useState } from 'react';

function TodoItem({ todo, dispatch }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleUpdate = () => {
    if (!editText.trim()) return;
    dispatch({
      type: 'UPDATE_TODO',
      payload: { id: todo.id, text: editText }
    });
    setIsEditing(false);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() =>
          dispatch({ type: 'TOGGLE_TODO', payload: todo.id })
        }
      />

      {isEditing ? (
        <>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button onClick={handleUpdate}>Save</button>
        </>
      ) : (
        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
          {todo.text}
        </span>
      )}

      <button onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })}>
        🗑️
      </button>

      {!isEditing && (
        <button onClick={() => setIsEditing(true)}>✏️</button>
      )}
    </li>
  );
}

export default TodoItem;
