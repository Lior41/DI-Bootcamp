import React, { useEffect, useState } from "react";
import axios from 'axios';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState("");

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const response = await axios.get('http://localhost:3001/todos');
    setTodos(response.data);
  };

  const handleAddTodo = async () => {
    if (!todoText.trim()) return;
    await axios.post('http://localhost:3001/todos', { text: todoText });
    setTodoText("");
    fetchTodos(); 
  };

  const handleRemoveTodo = async (id) => {
    await axios.delete(`http://localhost:3001/todos/${id}`);
    fetchTodos(); 
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Add a new todo"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
