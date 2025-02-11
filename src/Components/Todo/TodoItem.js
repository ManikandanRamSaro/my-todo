import React from 'react';

const TodoItem = ({ todo, deleteTodo }) => {
  return (
    <li>
      {todo} <button onClick={deleteTodo}>Delete</button>
    </li>
  );
};

export default TodoItem;
