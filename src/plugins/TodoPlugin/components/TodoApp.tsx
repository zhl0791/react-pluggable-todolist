import React, { useState } from "react";
import { TodoInterface } from "./interface";
import Todos from "./Todos";
import AddTodo from "./AddTodo";

function TodoApp() {
  const [nextId, incrementId] = useState(1);
  const [todos, setTodos] = React.useState<TodoInterface[]>([]);

  const addTodo = (title: string) => {
    let todo = todos.find((todo) => todo.title === title);

    if (todo != null || todo !== undefined) {
      alert("Task already exists");
      return;
    }
    let newTodo = {
      id: nextId,
      title,
      isCompleted: false
    };
    incrementId((nextId) => nextId + 1);
    setTodos((todos) => [...todos, newTodo]);
  };

  const deleteTodo = (id: number) => {
    let todo = todos.find((todo) => todo.id === id);
    if (todo == null) {
      alert("Item doesn't exists");
      return;
    }
    setTodos((todos) => todos.filter((todo1) => todo1 !== todo));
  };

  const onToggleComplete = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    let newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card-hover-shadow-2x mb-3 card">
          <div className="card-header-tab card-header">
            <div className="card-header-title font-size-lg text-capitalize font-weight-normal">
              <i className="fa fa-tasks"></i>&nbsp;Task Lists
            </div>
          </div>

          <Todos
            todos={todos}
            handleTodoToggle={onToggleComplete}
            handleTodoRemove={deleteTodo}
          />

          <AddTodo todos={todos} handleTodoCreate={addTodo} />
        </div>
      </div>
    </div>
  );
}

export default TodoApp;
