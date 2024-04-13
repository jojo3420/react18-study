import React from 'react';

function TodoItem({ item, dispatch }) {
	const { id, text, done } = item;
	return (
		<>
			<span
				style={{ textDecoration: done ? 'line-through' : 'none', background: done ? 'gray' : 'white', cursor: 'pointer', margin: '0.4rem'}}
				onClick={() => dispatch({ type: 'TOGGLE', id})}>{text}
			</span>
			<button onClick={() => dispatch({ type: 'REMOVE', id })}>삭제</button>
		</>
	);
}

export default TodoItem;