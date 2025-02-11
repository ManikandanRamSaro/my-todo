import React, { useState } from 'react';
import './App.css';
import TodoForm from './Components/Todo/TodoForm';
import TodoList from './Components/Todo/TodoList';  

function App() {
  const [todos, setTodos] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc'); // Added state for sort order

  const addTodo = (task) => {
    const newTodo = { task, completed: false };
    setTodos([...todos, newTodo]);
  };

  const editTodo = (index, newValue) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, task: newValue } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const sortedTodos = [...todos].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.task.localeCompare(b.task);
    } else {
      return b.task.localeCompare(a.task);
    }
  });

  return (
    <div className="App">
      <h1>Advanced To-Do App</h1>
      <TodoForm addTodo={addTodo} />
      <button onClick={toggleSortOrder}>
        Sort {sortOrder === 'asc' ? 'Descending' : 'Ascending'}
      </button>
      <TodoList todos={sortedTodos} editTodo={editTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
