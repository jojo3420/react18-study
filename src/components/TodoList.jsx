import React from 'react';
import TodoInput from './TodoInput.jsx';
import TodoItem from './TodoItem.jsx';
import AllClearBtn from './AllClearBtn.jsx';

function TodoList() {
  return (
    <>
      <h1>TodoList</h1>
      <AllClearBtn />
      <TodoInput />
      {[1, 2, 3].map(value => (
        <TodoItem key={value} text={value} />
      ))}
    </>
  );
}

export default TodoList;
