import React from 'react';
import TodoInput from './TodoInput.jsx';
import TodoItem from './TodoItem.jsx';
import AllClearBtn from './AllClearBtn.jsx';
import { useRecoilValue } from 'recoil';
import { todoListState } from '../../recoilState/recoilAtom.js';


function TodoList() {
  const todoList = useRecoilValue(todoListState);

  return (
    <>
      <h1>TodoList</h1>
      <AllClearBtn />
      <TodoInput />
      {todoList.map(todoItem => (
        <TodoItem key={todoItem.id} todoItem={todoItem} />
      ))}
    </>
  );
}

export default TodoList;
