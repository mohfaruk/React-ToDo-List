import React, { useState } from "react";
import "./Form.css";

const Form = ({ create }) => {
  const [newInput, setNewInput] = useState("");

  const handleSubmit = evt => {
    evt.preventDefault();

    if (newInput === "") {
      alert("Error - Enter a task");
    } else {
      create(newInput);
      setNewInput("");
    }
  };

  return (
    <div>
      <form className="Todo-Form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add task..."
          value={newInput}
          onChange={evt => {
            setNewInput(evt.target.value);
          }}
        />
        <button onClick={handleSubmit}>Add</button>
      </form>
    </div>
  );
};

export default Form;
