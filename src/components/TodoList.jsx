import React, {useReducer, useState} from 'react';

// Components
import TodoItem from "./TodoItem.jsx";
import TodoInput from "./TodoInput.jsx";
import AllClearBtn from "./AllClearBtn.jsx";
import { initTodoList, todoReducer } from "../reducer/todoReducer.js";


function TodoList() {
	const [todoList, dispatch] = useReducer(todoReducer, initTodoList);
	const [text, setText] = useState('');

	const handleText = (value) => {
		setText(value);
	}

	const handleAdd = () => {
		if (!text) {
			return alert("할일을 입력해주세요.");
		}
		dispatch({ type: 'ADD', payload: text});
		setText('');
	}


	return (
		<>
			<div>
				<h1>할일목록</h1>
				<AllClearBtn dispatch={dispatch} />
			</div>
			<TodoInput text={text} handleText={handleText} handleAdd={handleAdd} />
			<ul>
				{todoList.map(todo => (
					<li key={todo.id}>
						<TodoItem item={todo} dispatch={dispatch} />
					</li>
				))}
			</ul>
		</>
	);
}

export default TodoList;