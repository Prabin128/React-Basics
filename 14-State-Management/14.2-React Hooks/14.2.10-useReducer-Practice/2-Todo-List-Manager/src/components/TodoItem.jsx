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
    <li className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        className="todo-checkbox"
        onChange={() =>
          dispatch({ type: 'TOGGLE_TODO', payload: todo.id })
        }
      />

      {isEditing ? (
        <>
          <input
            type="text"
            className="todo-edit-input"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button className="btn save-btn" onClick={handleUpdate}>Save</button>
        </>
      ) : (
        <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>
          {todo.text}
        </span>
      )}

      <div className="todo-actions">
        <button className="btn delete-btn" onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })}>
          🗑️
        </button>

        {!isEditing && (
          <button className="btn edit-btn" onClick={() => setIsEditing(true)}>✏️</button>
        )}
      </div>
    </li>
  );
}

export default TodoItem;
