import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import './style.css'
function Todo() {
  const [todos, setTodos] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");

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
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const sortedTodos = [...todos].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.task.localeCompare(b.task);
    } else {
      return b.task.localeCompare(a.task);
    }
  });

  return (
    <>
      <Navbar expand="lg" className="bg-primary-subtle ">
      <Container>
          <Navbar.Brand >
            {/* <img
              src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1shzG4.img?w=857&h=426&q=60&m=6&f=jpg&u=t"
              width="30"
              height="30"
              className="d-inline-block align-top" 
            />  */}
            My Todo List
          </Navbar.Brand>
        </Container> 
      </Navbar>
      <Container className="mt-2 mb-2 container-fluid">
        <TodoForm addTodo={addTodo} />
        {/* <Button onClick={toggleSortOrder}>
          Sort {sortOrder === "asc" ? "Descending" : "Ascending"}
        </Button> */}
      </Container>
      <Container className="mt-2 flex-container">
        <TodoList
          todos={sortedTodos}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
        />
      </Container>
    </>
  );
}

export default Todo;
