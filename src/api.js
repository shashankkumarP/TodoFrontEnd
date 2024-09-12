import axios from 'axios';

const API_URL = 'http://localhost:5000/api/todos';

export const getTodos = () => axios.get(API_URL);
export const addTodo = (todo) => axios.post(API_URL, todo);
export const editTodo = (id, updatedTodo) => axios.put(`${API_URL}/${id}`, updatedTodo);
export const deleteTodo = (id) => axios.delete(`${API_URL}/${id}`);
