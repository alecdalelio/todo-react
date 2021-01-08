import React, { useState } from "react";
import "./App.css";

function Todo({ todo, index }) {
  return <div className="todo">{todo.text}</div>;
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add to-do..."
      />
    </form>
  );
}

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Learn Python",
      isCompleted: false,
    },
    {
      text: "Learn Solidity",
      isCompleted: false,
    },
    {
      text: "Complete Consensys Academy",
      isCompleted: false,
    },
    {
      text: "Build a dApp",
      isCompleted: false,
    },
    {
      text: "Update my portfolio",
      isCompleted: false,
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} />
        ))}
        <TodoForm addToDo={addTodo} />
      </div>
    </div>
  );
}

export default App;
