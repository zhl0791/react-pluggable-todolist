import React from "react";

export interface TodoInterface {
  id: number;
  title: string;
  isCompleted: boolean;
}

export interface TodoFormInterface {
  todos: TodoInterface[];
  handleTodoCreate: (title: string) => void;
}

export interface TodoListInterface {
  todos: TodoInterface[];
  handleTodoRemove: (id: number) => void;
  // handleTodoComplete: (id: number) => void;
  handleTodoToggle: (
    event: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => void;
}

export interface TodoItemInterface {
  todo: TodoInterface;
  handleTodoRemove: (id: number) => void;
  // handleTodoComplete: (id: number) => void;
  handleTodoToggle: (
    event: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => void;
}
