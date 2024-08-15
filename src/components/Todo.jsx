import React, { useRef, useState } from 'react';  
import './Todo.css'; // Ensure the correct path relative to the `Todo.jsx` file
import searchImage from '../assets/image.png'

export const Todo = () => {  

  const [todos, setTodos] = useState(['hi']);
  const inputRef = useRef();

  const addTodo = () => {
    const newTodo = inputRef.current.value.trim();
    if (newTodo) { // Ensure the input is not empty
      setTodos([...todos, newTodo]);
      inputRef.current.value = ''; // Clear the input after adding a todo
    }
  };

  const removeTodo = (indexToRemove) => {
    setTodos(todos.filter((_, index) => index !== indexToRemove));
  };


  return (  
    <div className = 'todo-container'>
      <h1>TO-DO List</h1>
      <div className="input-container">
        <input type="text" ref = {inputRef} />
          <img src={searchImage} alt="search icon" onClick={addTodo}/>
      </div>
      <div className="results-container">
        {todos.map((todo, index) => (
          <div className = 'results-container-item' key={index}>{todo}<button onClick={() => removeTodo(index)}>-</button></div> // Display todos properly
        ))}
      </div>
    </div>  
  );  
}
