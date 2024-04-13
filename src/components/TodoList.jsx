import React, {useReducer, useState} from 'react';

// Components
import TodoItem from "./TodoItem.jsx";
import TodoInput from "./TodoInput.jsx";
import AllClearBtn from "./AllClearBtn.jsx";
import { initState, todoReducer } from "../reducer/todoReducer.js";


function TodoList() {
	const [state, dispatch] = useReducer(todoReducer, initState);

	return (
		<>
			<div>
				<h1>할일목록</h1>
				<AllClearBtn dispatch={dispatch} />
			</div>
			<TodoInput text={state.text} dispatch={dispatch} />
			<ul>
				{state.todoList.map(todo => (
					<li key={todo.id}>
						<TodoItem item={todo} dispatch={dispatch} />
					</li>
				))}
			</ul>
		</>
	);
}

export default TodoList;