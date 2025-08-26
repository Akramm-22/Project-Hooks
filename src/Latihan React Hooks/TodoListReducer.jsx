import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, { text: action.text, done: false, id: Date.now() }];
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
}

function TodoListReducer() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [input, setInput] = React.useState("");

  return (
    <div>
      <h2>Todo List (useReducer)</h2>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Tambah todo"
      />
      <button
        onClick={() => {
          if (input.trim()) {
            dispatch({ type: "ADD", text: input });
            setInput("");
          }
        }}
      >
        Tambah
      </button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{ textDecoration: todo.done ? "line-through" : "none" }}>
            <span onClick={() => dispatch({ type: "TOGGLE", id: todo.id })} style={{ cursor: "pointer" }}>{todo.text}</span>
            <button onClick={() => dispatch({ type: "REMOVE", id: todo.id })} style={{ marginLeft: 8 }}>Hapus</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoListReducer;
