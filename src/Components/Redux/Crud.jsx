import React, { useState } from 'react';

const Crud = () => {
 
  const [todos, setTodos] = useState([]);
 
  const [todoInput, setTodoInput] = useState('');

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoInput.trim() !== '') {
      setTodos([...todos, todoInput]);
      setTodoInput('');
    }
  };

 
  const handleInputChange = (e) => {
    setTodoInput(e.target.value);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todoInput}
          onChange={handleInputChange}
          placeholder="Enter a new todo"
        />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default Crud;
