import React from 'react';

function TodoItem({ item, handleToggle, handleRemove }) {
	const { id, text, done } = item;
	return (
		<>
			<span
				style={{ textDecoration: done ? 'line-through' : 'none', fontSize: '1.2rem', marginRight: '0.3rem'}}
				onClick={handleToggle.bind(null, id)}>{text}</span>
			<button onClick={handleRemove.bind(null, id)}>삭제</button>
		</>
	);
}

export default TodoItem;