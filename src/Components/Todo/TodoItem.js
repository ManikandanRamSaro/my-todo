import React, { useState } from 'react';

const TodoItem = ({ todo, index, editTodo, deleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo.task);

  const handleEditChange = (e) => {
    setEditValue(e.target.value);
  };

  const handleEditSubmit = () => {
    editTodo(index, editValue);
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editValue}
            onChange={handleEditChange}
          />
          <button onClick={handleEditSubmit}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div>
          {todo.task} <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteTodo(index)}>Delete</button>
        </div>
      )}
    </li>
  );
};

export default TodoItem;
