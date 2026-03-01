import { useState } from "react";

function TodoList() {

    // Initial static todos
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build Todo App", completed: false },
    { id: 3, text: "Practice Coding", completed: false }
  ]);


  /* Add Todo */

  const addTodo = (text) => {

    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false
    };

    setTodos([...todos, newTodo]);
  };


  /* Toggle Todo */

  const toggleTodo = (id) => {

    setTodos(
      todos.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );

  };


  /* Delete Todo */

  const deleteTodo = (id) => {

    setTodos(
      todos.filter(todo => todo.id !== id)
    );

  };


  return (

    <div>

      <h2>Todo List</h2>


      {/* Temporary Add Button (for testing) */}

      <button onClick={() => addTodo("New Todo")}>
        Add Todo
      </button>


      {todos.map(todo => (

        <div key={todo.id}>

          {/* Toggle by clicking text */}

          <span
            onClick={() => toggleTodo(todo.id)}
            style={{
              cursor: "pointer",
              textDecoration: todo.completed
                ? "line-through"
                : "none"
            }}
          >
            {todo.text}
          </span>


          {/* Delete Button */}

          <button
            onClick={() => deleteTodo(todo.id)}
          >
            Delete
          </button>

        </div>

      ))}

    </div>

  );

}
export default TodoList;
