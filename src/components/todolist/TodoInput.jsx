import React from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { todoTextState } from '../../recoilState/recoilAtom.js';
import { addTodoItem } from '../../recoilState/recoilSelectors.js'


function TodoInput() {
  const [text, setText] = useRecoilState(todoTextState);
  const addTodo  = useSetRecoilState(addTodoItem);

  const handleAddTodo = () => {
    if (!text.trim()) {
      alert('할 일을 입력해주세요.');
      return;
    }
    addTodo(text);
    setText('');
  };

  const handleEnter = e => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  };

  return (
    <>
      <button onClick={() => setText('')}>clear</button>
      <input type='text'
             value={text}
             onChange={({ target }) => setText(target.value)}
             onKeyUp={handleEnter}
      />
      <button onClick={handleAddTodo} >
        add
      </button>
    </>
  );
}

export default TodoInput;
