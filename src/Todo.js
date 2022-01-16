import React from "react";
import "./Todo.css";

const Todo = ({ todo, index, update, remove, check }) => {
  //Passes down props
  return (
    <div className="Todo">
      <li
        className={todo.complete ? "Todo-completed" : ""} //If task is complete, add completed class
        onClick={() => {
          check(index);
        }}
      >
        {todo.task}
      </li>
      <div className="Todo-buttons">
        <button
          onClick={() => {
            update(index);
          }}
        >
          <i class="far fa-edit"></i>
        </button>
        <button
          onClick={() => {
            remove(index);
          }}
        >
          <i className="fas fa-trash-alt" />
        </button>
      </div>
    </div>
  );
};

export default Todo;
