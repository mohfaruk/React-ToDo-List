import React from "react";
import "./Todo.css";

const Todo = ({ todo, index, remove, check }) => {
  return (
    <div className="Todo">
      <li
        className={todo.complete ? "Todo-completed" : ""}
        onClick={() => {
          check(index);
        }}
      >
        {todo.task}
      </li>
      <div className="Todo-buttons">
        <button
          onClick={() => {
            remove(index);
          }}
        >
          <i class="fas fa-trash" />
        </button>
      </div>
    </div>
  );
};

export default Todo;
