import React, { useState } from 'react';
import './App.css';
import TodoForm from './Components/Todo/TodoForm';
import TodoList from './Components/Todo/TodoList'; 

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const editTodo = (index, newValue) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? newValue : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <h1>Advanced To-Do App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} editTodo={editTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
