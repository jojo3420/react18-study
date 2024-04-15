import React from 'react';

function TodoItem({ text }) {
	return (
		<div>
			<span style={{ marginRight: '0.5rem'}}>todoItem {text}</span>
			<button onClick={() => {}}>삭제</button>
		</div>
	);
}

export default TodoItem;