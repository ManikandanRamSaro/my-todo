import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import ButtonGroup from "react-bootstrap/ButtonGroup";

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
    <Container className="p-2">
      {isEditing ? (
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Form>
              <Form.Control
                type="text"
                size="lg"
                value={editValue}
                onChange={handleEditChange}
                placeholder="Add a new task"
              />
            </Form>
          </Card.Body>
            <ButtonGroup className="p-2">
              <Button onClick={handleEditSubmit}>Save</Button>
              <Button variant="danger" onClick={() => setIsEditing(false)}>
                Cancel
              </Button>
            </ButtonGroup>
        </Card>
      ) : (
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{index}</Card.Title>
            <Card.Text> {todo.task} </Card.Text>
          </Card.Body>{" "}
          <ButtonGroup className="p-2">
            <Button variant="info" onClick={() => setIsEditing(true)}>
              Edit
            </Button>
            <Button variant="danger" onClick={() => deleteTodo(index)}>
              Delete
            </Button>{" "}
          </ButtonGroup>
        </Card>
      )}
    </Container>
  );
};

export default TodoItem;
