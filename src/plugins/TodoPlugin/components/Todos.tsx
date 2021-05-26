import React from "react";
import TodoItem from "./TodoItem";
import { TodoListInterface } from "./interface";

const Todos = (props: TodoListInterface) => {
  return (
    <div
      className="overflow-auto"
      style={{ height: "auto", maxHeight: "300px" }}
    >
      <div className=" position-static">
        <ul className=" list-group list-group-flush">
          {props.todos.map((todoItem) => {
            return (
              <li key={todoItem.id} className="list-group-item">
                <TodoItem
                  todo={todoItem}
                  handleTodoRemove={props.handleTodoRemove}
                  handleTodoToggle={props.handleTodoToggle}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Todos;
