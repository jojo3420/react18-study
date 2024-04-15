import React from 'react';
import './style/TodoItem.css';
import { todoActions } from '../../recoilState/recoilSelectors.js';
import { useSetRecoilState } from 'recoil';

function TodoItem({ todoItem: { id, text, isDone } }) {
  const dispatch = useSetRecoilState(todoActions);

  return (
    <div>
      <span
        className={`todo-item ${isDone ? 'done' : ''}`}
        onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: id })}
      >
        {text}
      </span>
      <button onClick={() => dispatch({ type: 'REMOVE_TODO', payload: id })}>삭제</button>
    </div>
  );
}

export default TodoItem;
