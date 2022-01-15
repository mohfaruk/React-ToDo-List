import React, { useState } from "react";
import Todo from "./Todo";
import Form from "./Form";
import "./Container.css";

function Container() {
  const [todos, setTodos] = useState([
    { task: "Coding", complete: false },
    { task: "Gym", complete: false },
    { task: "Laundry", complete: false },
  ]);

  const createTask = task => {
    const newTasks = [...todos, { task, complete: false }];
    setTodos(newTasks);
  };

  const removeTask = index => {
    const newTasks = [...todos];
    newTasks.splice(index, 1);
    setTodos(newTasks);
  };

  const toggleTask = index => {
    const newTasks = [...todos];
    newTasks[index].complete = !newTasks[index].complete;
    setTodos(newTasks);
  };

  return (
    <div className="TodoList">
      <h2>ToDo App</h2>
      <Form create={createTask} />
      <ul>
        {todos.map((todo, index) => (
          <div key={index}>
            <Todo
              todo={todo}
              index={index}
              remove={removeTask}
              check={toggleTask}
            />
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Container;
