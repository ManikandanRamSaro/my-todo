import React from "react";
import TodoItem from "./TodoItem";
import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const TodoList = ({ todos, editTodo, deleteTodo }) => {
  return (
    // <Stack direction="horizontal" gap={2} >
    <Container>
      <Row>
        {todos.map((todo, index) => (
          <Col> 
            <TodoItem
              key={index}
              todo={todo}
              index={index}
              editTodo={editTodo}
              deleteTodo={deleteTodo} 
            />
          </Col>
        ))} 
      </Row>
    </Container>
  );
};

export default TodoList;
