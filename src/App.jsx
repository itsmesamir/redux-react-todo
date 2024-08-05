import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo, toggleTodo } from "./actions/todoActions";

const App = () => {
  const [newTodo, setNewTodo] = React.useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      dispatch(addTodo(newTodo));
      setNewTodo("");
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => dispatch(toggleTodo(todo.id))}>
              {todo.completed ? "Undo" : "Complete"}
            </button>
            <button onClick={() => dispatch(removeTodo(todo.id))}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
