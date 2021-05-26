import React from "react";

import { TodoItemInterface } from "./interface";

const TodoItem = (props: TodoItemInterface) => {
  var todo = props.todo;

  const getTxtStyle = () => {
    return {
      textDecoration: props.todo.isCompleted ? "line-through" : "none",
      marginLeft: "10px"
    };
  };

  return (
    <div>
      <div className="d-flex align-content-center">
        <div
          className="custom-checkbox custom-control d-flex align-items-center"
          style={{ marginBottom: "2px" }}
        >
          <input
            type="checkbox"
            className="  form-check-input"
            onChange={(event) => props.handleTodoToggle(event, props.todo.id)}
            checked={todo.isCompleted}
          />
        </div>

        <div
          className="d-flex align-items-center todoTitle"
          style={getTxtStyle()}
        >
          <div style={{ width: "100%" }}>{todo.title} </div>
        </div>
        <div className="ml-auto d-flex align-items-center">
          <button
            className="border-0 btn-transition btn btn-outline-danger"
            onClick={() => props.handleTodoRemove(props.todo.id)}
          >
            <i className="fa fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
