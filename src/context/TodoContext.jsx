import React, { createContext, useState } from 'react';

// Create the context
export const TodoContext = createContext();

// Create a provider component
export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    };

    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <TodoContext.Provider value={{ todos, addTodo, removeTodo }}>
            {children}
        </TodoContext.Provider>
    );
};