import React, { useState } from "react";
import Todo from "./Todo";
import Form from "./Form";
import "./Container.css";

function Container() {
  const [todos, setTodos] = useState([]);

  const createTask = task => {
    const newTasks = [...todos, { task, complete: false }]; //Leaves existing tasks and Creates a task with string and boolean
    setTodos(newTasks); //Sets todos state with new addition
  };

  const updateTask = index => {
    const newTasks = [...todos]; //Takes existing todo tasks
    const item = newTasks[index]; //Item selected is placed in variable
    const updateTask = prompt(`Update ${item.task} task?`, item.task); //Asks for update, and new value is placed in variable
    const newItem = { task: updateTask, complete: false }; //Creates new object with updated value
    newTasks.splice(index, 1, newItem); //Deletes selected item and replaces with updated item

    //If user enters no value then return immediately
    //Otherwise todos stats changes to updated tasks
    if (updateTask === "" || updateTask === null) {
      return;
    } else {
      setTodos(newTasks);
    }
  };

  const removeTask = index => {
    const newTasks = [...todos]; //Takes existing todo tasks
    newTasks.splice(index, 1); //Deletes only onet task from index number
    setTodos(newTasks); //Sets todo state to existing tasks after deletion
  };

  const toggleTask = index => {
    const newTasks = [...todos]; //Takes existing todo tasks
    newTasks[index].complete = !newTasks[index].complete; //Changes to opposite of whatever the boolean value is
    setTodos(newTasks); //Updates todos state
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
              update={updateTask}
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
