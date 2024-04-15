import React, { useContext } from 'react';
import './style/TodoItem.css'
import {TodoContext} from "../../context/TodoContext.jsx";




function TodoItem({ todoItem: { id, text, isDone } } ) {
	const { dispatch } = useContext(TodoContext);

	return (
		<div>
			<span
				className={`todo-item ${isDone ? 'todo-item-done' : ''}`}
				onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: id })}
			>{text}</span>
			<button onClick={() => dispatch({ type: 'DELETE_TODO', payload: id })}>삭제</button>
		</div>
	);
}

export default TodoItem;