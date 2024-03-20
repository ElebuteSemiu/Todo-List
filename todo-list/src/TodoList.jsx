import React, { useState } from 'react';


function TodoList() {
 const [todo, setTodo] = useState([]);
 const [inputValue, setInputValue] = useState('');
 const handleInputChange = (event) => {
   setInputValue(event.target.value);
 };
 const handleSubmit = (event) => {
   event.preventDefault();
   if (inputValue.trim() !== '') {
     setTodo([...todo, inputValue]);
     setInputValue('');
   }
 };
 const handleDelete = (index) => {
   const newTodo = todo.filter((_, todoIndex) => todoIndex !== index);
   setTodo(newTodo);
 };
 return (
<div>
<h1>Todo List</h1>
<form onSubmit={handleSubmit}>
<input
         type="text"
         value={inputValue}
         onChange={handleInputChange}
         placeholder="Add a new todo"
       />
<button type="submit">Add Todo</button>
</form>
<ul>
       {todo.map((todo, index) => (
<li key={index}>
           {todo}
<button onClick={() => handleDelete(index)}>Delete</button>
</li>
       ))}
</ul>
</div>
 );
}
export default TodoList;