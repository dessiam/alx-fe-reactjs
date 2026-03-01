import { useState } from "react";

function AddTodoForm({ handleAddTodo }) {

  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text) return;

    handleAddTodo(text);

    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter todo"
      />

      <button type="submit">
        Add Todo
      </button>

    </form>
  );
}

export default AddTodoForm;