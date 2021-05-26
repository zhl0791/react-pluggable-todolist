import React, { useState } from "react";
import { TodoFormInterface } from "./interface";

const AddTodo = (props: TodoFormInterface) => {
  const [title, setTitle] = useState("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onSubmit = () => {
    props.handleTodoCreate(title);
  };

  const enterSubmit = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      onSubmit();
      setTitle("");
    }
  };

  const clickSubmit = (event: React.MouseEvent) => {
    onSubmit();
    setTitle("");
  };

  return (
    <div
      className="d-block text-right card-footer d-flex"
      style={{ padding: "0.75rem" }}
    >
      <div className=" position-relative col " style={{ paddingLeft: "13px" }}>
        <input
          type="text"
          className="form-control"
          value={title}
          onChange={onChange}
          onKeyPress={(event) => enterSubmit(event)}
          placeholder="Enter new todo"
        />

        <i
          className="fa fa-close"
          style={{
            position: "absolute",
            top: "25%",
            right: "25px"
          }}
          onClick={() => setTitle("")}
        ></i>
      </div>
      <div className="ml-auto">
        <button className="btn btn-primary" onClick={clickSubmit}>
          Add Task
        </button>
      </div>
    </div>
  );
};
export default AddTodo;
