import React from 'react';

function TodoItem({ item, handleToggle, handleRemove }) {
	const { id, text, done } = item;
	return (
		<>
			<span
				style={{ textDecoration: done ? 'line-through' : 'none', background: done ? 'gray' : 'white', cursor: 'pointer', margin: '0.4rem'}}
				onClick={handleToggle.bind(null, id)}>{text}
			</span>
			<button onClick={() => handleRemove(id)}>삭제</button>
		</>
	);
}

export default TodoItem;