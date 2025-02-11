import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const TodoForm = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim() !== "") {
      addTodo(newTodo);
      setNewTodo("");
    }
  };

  return ( 
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col xs={10}>
            <Form.Control
              type="text"
              size="lg"
              value={newTodo}
              onChange={handleInputChange}
              placeholder="Add a new task"
            />
          </Col>
          <Col xs={1} className="mt-1">
            <Button variant="primary" type="submit">
              Add
            </Button>
          </Col>
        </Row>
      </Form> 
  );
};

export default TodoForm;
