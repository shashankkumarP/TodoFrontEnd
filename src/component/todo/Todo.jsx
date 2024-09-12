import React, { useState, useEffect } from 'react';
import { getTodos, addTodo, editTodo, deleteTodo } from '../../api';
import './Todo.css';
// import {v4 as uuidv4} from "uuid"
import { v4 as uuidv4 } from 'uuid';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async (todo) => {
    // const res = await getTodos();
    // setTodos(res.data);
    console.log(todos);
  };

  const handleAddTodo = async () => {
    const todo = { title: newTodo,id:uuidv4() };
    // await addTodo(todo);
    setNewTodo('');
    setTodos([...todos])
    fetchTodos(todo);
  };

  const handleEditTodo = async (id, completed) => {
    await editTodo(id, { completed: !completed });
    fetchTodos();
  };

  const handleDeleteTodo = async (id) => {
    await deleteTodo(id);
    fetchTodos();
  };

  return (
    <div className="todo-container">
      <h1>Todo App</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo._id}>
            <span style={{ textDecoration: todo.completed ? 'line-through' : '' }}>
              {todo.title}
            </span>
            <button onClick={() => handleEditTodo(todo._id, todo.completed)}>
              {todo.completed ? 'Unmark' : 'Complete'}
            </button>
            <button onClick={() => handleDeleteTodo(todo._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;