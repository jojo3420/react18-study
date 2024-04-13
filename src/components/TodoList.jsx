import React, {useReducer, useState} from 'react';
import TodoItem from "./TodoItem.jsx";
import {v4 as uuidv4} from 'uuid';
import TodoInput from "./TodoInput.jsx";
import AllClearBtn from "./AllClearBtn.jsx";

const initTodoList = [
	{ id: uuidv4(), text: 'Learn React', done: false },
	{ id: uuidv4(), text: 'Clean Code', done: true },
	{ id: uuidv4(), text: 'Ship App', done: false }
];

const todoReducer = (todoList, action) => {
	switch (action.type) {
		case 'ADD':
			return [...todoList, {id: uuidv4(), text: action.payload, done: false}];
		case 'REMOVE':
			return todoList.filter(todo => todo.id !== action.id);
		case 'TOGGLE':
			return todoList.map(todo => todo.id === action.id ? {...todo, done: !todo.done} : todo);
		case 'ALL_CLEAR':
			return [];
		default:
			return todoList;
	}
}


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

	const handleRemove = (id) => {
		if (id) {
			dispatch({ type: 'REMOVE', id: id });
		}
	}

	const handleToggle = (id) => {
		if (id) {
			dispatch({ type: 'TOGGLE', id: id });
		}

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
						<TodoItem item={todo} handleToggle={handleToggle} handleRemove={handleRemove} />
					</li>
				))}
			</ul>
		</>
	);
}

export default TodoList;