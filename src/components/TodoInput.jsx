import React from 'react';

function TodoInput({ text, dispatch }) {
	return (
		<>
			<button onClick={() => dispatch({ type: 'TEXT_CLEAR' })}>clear</button>
			<input value={text} onChange={({ target }) => dispatch({ type: 'SET_TEXT', text: target.value })} />
			<button onClick={() => {
				if (!text) {
					return alert("할일을 입력해주세요.");
				}
				dispatch({ type: 'ADD_TODO' });
			}}>
				Add
			</button>
		</>
	);
}

export default TodoInput;