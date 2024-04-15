import React from 'react';
import './style/TodoItem.css';
import { removeTodoItem, toggleTodoItem } from '../../recoilState/recoilSelectors.js';
import { useRecoilState } from 'recoil';


function TodoItem({ todoItem: { id, text, isDone } }) {
  const [_todo, setIsDone] = useRecoilState(toggleTodoItem(id));
  const [_, removeTodo] = useRecoilState(removeTodoItem(id));

  return (
    <div>
      <span
        className={`todo-item ${isDone ? 'done' : ''}`}
        onClick={setIsDone}
      >
        {text}</span>
      <button onClick={() => removeTodo(id)}>삭제</button>
    </div>
  );
}

export default TodoItem;
